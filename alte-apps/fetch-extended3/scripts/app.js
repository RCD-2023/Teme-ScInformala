const CURRENT_USER_ID = 1;
const SortValues = {
  DATE_DESC: "date-desc",
  DATE_ASC: "date-asc",
  LIKE_DESC: "like-desc",
};

const ui = {
  postsContainerEl: document.querySelector("#posts"),
  openNewPostFormEl: document.querySelector("#open-new-post-form"),
  newPostFormEl: document.querySelector("#new-post-form"),
  submitFormButtonEl: document.querySelector("#submit"),
  sortButtonEl: document.querySelector("#sort"),
};

(function init() {
  console.log("se randeaza");
  server.getPosts().then((posts) => {
    posts.sort((a, b) => b.date - a.date);

    renderPosts(posts);
  });
  initEventListeners();
})();

function renderPosts(posts) {
  ui.postsContainerEl.innerHTML = "";
  posts.forEach(renderPost);
}

function renderPost(post) {
  const htmlContent = `<div class="post">
      <span class="show-more" onclick="onShowMore(event, ${post.id})">🔎</span>
      <h3>${post.title}</h3>
      <span><em>${new Date(post.date).toLocaleDateString("ro-ro")}</em></span>
      <p class="likes">${post.likes} likes</p>
      <div style="user-select: none">
        ${
          post.userId != CURRENT_USER_ID
            ? `<span class="like" onclick="handleLike(event, ${post.id}, 'like')">👍</span>
          <span class="dislike" onclick="handleLike(event, ${post.id})">👎</span>`
            : `<span class="remove" onclick="onRemovePost(event, ${post.id})">✖️</span>  
          <span class="edit" onclick="onEditPost(event, ${post.id})">✒️</span>`
        }
      </div>
    </div>
    <div class="post-details"></div>
    `;

  ui.postsContainerEl.insertAdjacentHTML("beforeend", htmlContent);
}

function initEventListeners() {
  ui.openNewPostFormEl.addEventListener("click", () => {
    ui.newPostFormEl.style.display = "block";
    ui.openNewPostFormEl.style.display = "none";
    ui.submitFormButtonEl.textContent = "Add post";
  });

  ui.newPostFormEl.addEventListener("submit", (event) => {
    if (event.target.method.toUpperCase() === "POST") {
      const newPost = {
        userId: CURRENT_USER_ID,
        title: ui.newPostFormEl.title.value,
        content: ui.newPostFormEl.content.value,
        likes: 0,
        date: Date.now(),
      };

      server.addNewPost(newPost).then(renderPost);
    } else {
      // inseamna ca este PATCH - singura cealalta optiune pusa de noi din cod
      const updatePayload = {
        title: ui.newPostFormEl.title.value,
        content: ui.newPostFormEl.content.value,
      };

      server.updatePost(event.target.dataset.id, updatePayload).then(() => {
        // TODO: de actualizat UI-ul
      });
    }

    ui.newPostFormEl.style.display = "none";
    ui.newPostFormEl.title.value = "";
    ui.newPostFormEl.content.value = "";
    ui.openNewPostFormEl.style.display = "inline";

    event.preventDefault();
  });

  ui.sortButtonEl.addEventListener("change", (event) => {
    const value = event.target.value;

    server.getPosts().then((posts) => {
      if (value === SortValues.DATE_DESC) {
        // sortam dupa cea mai noua data
        posts.sort((a, b) => b.date - a.date);
      } else if (value === SortValues.DATE_ASC) {
        // sortam dupa cea mai veche data
        posts.sort((a, b) => a.date - b.date);
      } else if (value === SortValues.LIKE_DESC) {
        // sortam dupa most liked
        posts.sort((a, b) => b.likes - a.likes);
      }

      renderPosts(posts);
    });
  });
}

function onRemovePost(event, id) {
  server.removePost(id).then((removedState) => {
    if (removedState) {
      event.target.closest(".post").remove();
    }
  });
}

// function onLike(event, id) {
//   server.getPostById(id).then((post) => {
//     server
//       .updatePost(id, {
//         likes: ++post.likes,
//       })
//       .then((updatedPost) => {
//         if (updatedPost) {
//           event.target
//             .closest(".post")
//             .querySelector(".likes").textContent = `${updatedPost.likes} likes`;
//         }
//       });
//   });
// }

// TODO: de implementat dislike
function handleLike(event, id, type) {
  debugger;
  console.log(event);
  server.getPostById(id).then((post) => {
    server
      .updatePost(id, {
        likes: type === "like" ? ++post.likes : --post.likes,
      })
      .then((updatedPost) => {
        if (updatedPost) {
          event.target
            .closest(".post")
            .querySelector(".likes").textContent = `${updatedPost.likes} likes`;
        }
      });
  });
}

function onEditPost(event, id) {
  server.getPostById(id).then((post) => {
    ui.openNewPostFormEl.style.display = "none";
    ui.newPostFormEl.method = "PATCH";
    ui.newPostFormEl.title.value = post.title;
    ui.newPostFormEl.content.value = post.content;
    ui.newPostFormEl.dataset.id = post.id;
    ui.submitFormButtonEl.textContent = "Update post";
    ui.newPostFormEl.style.display = "block";
  });
}

// TODO: la click pe lupa sa vedem imediat sub titlu: utilizatorul si continutul post-ului
function onShowMore(event, id) {
  const postDetailsEl = event.target.closest(".post").nextElementSibling;

  if (postDetailsEl.childElementCount) {
    // inseamna ca deja am luat mai inainte datele de la server
    return postDetailsEl.classList.toggle("visible");
  }

  // luam post-ul de la server
  server.getPostById(id).then((post) => {
    // luam user-ul de la server
    server.getUserById(post.userId).then((user) => {
      // de pus content-ul in UI

      postDetailsEl.innerHTML = `
        <span><em>${user.name}</em></span>
        <h4>${post.content}</h4>
        <a href="./comments.html?postId=${post.id}">View comments</a>
      `;

      postDetailsEl.classList.toggle("visible");
    });
  });
}
