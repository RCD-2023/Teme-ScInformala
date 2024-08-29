//codul pentru navbar
const nav = document.querySelector(".nav");
window.addEventListener("scroll", fixNav);

function fixNav() {
  if (window.scrollY > nav.offsetHeight + 200) {
    nav.classList.add("active");
  } else {
    nav.classList.remove("active");
  }
}

// codul pentru carduri prin care afisam sau nu x sau sageata pe card
const toggles = document.querySelectorAll(".card-toggle");

toggles.forEach((toggle) => {
  toggle.addEventListener("click", () => {
    toggle.parentNode.classList.toggle("active");
  });
});
