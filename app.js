const home = document.querySelector('.home');
const about = document.querySelector(".about");
const posts = document.querySelector(".posts");

home.addEventListener('click', (e) => {
  e.preventDefault();
  home.classList.add("active");
  about.classList.remove("active");
  posts.classList.remove("active");

})

about.addEventListener("click", (e) => {
  e.preventDefault();
  about.classList.add("active");
  posts.classList.remove("active");
  home.classList.remove("active");
});

posts.addEventListener("click", (e) => {
  e.preventDefault();
  posts.classList.add("active");
  about.classList.remove("active");
  home.classList.remove("active");
});
