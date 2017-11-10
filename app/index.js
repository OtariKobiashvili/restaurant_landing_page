let navToggle = document.querySelector(".nav-mobile a");
let navMenu = document.querySelector(".navbar ul");


navToggle.addEventListener("click", (event) => {
  toggle(navMenu, "active");
});


function toggle(el, className){
  el.classList.toggle(className);
}
