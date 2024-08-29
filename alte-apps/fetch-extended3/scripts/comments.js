(function init() {
  const id = +document.location.search.split('=').at(-1);

  fetchDataAndRender(id);
})();

function fetchDataAndRender(id) {
  server.getPostById(id).then((post) => {
    server.getUserById(post.userId).then((user) => {
      server.getCommentsByPostId(id).then((comments) => {
        document.querySelector('#post-comments').innerHTML = `
          <h1>Comments section</h1>
          <h2>${post.title}</h2>
          <h3><em>${user.name}</em></h3>
          <p>${post.content}</p>
          <section>
            <h4>Comments</h4>
            ${comments.map((comm) => `<p>${comm.text}</p>`).join('')}
          </section>
        `;
      });
    });
  });
}
