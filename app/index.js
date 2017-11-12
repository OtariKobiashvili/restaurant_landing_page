let navToggle = document.querySelector(".nav-mobile a");
let navMenu = document.querySelector(".navbar ul");

navToggle.addEventListener("click", () => {
  toggle(navMenu, "active");
}, false);

window.addEventListener("load", animateOnScroll, false);
window.addEventListener("scroll", animateOnScroll, false);

function animateOnScroll(){
  let infoAside = document.querySelectorAll(".info aside");
  let infoImg = document.querySelectorAll(".info .img");

  animateElements(infoAside, "animate-in");
  animateElements(infoImg, "animate-in");
}

/**
 * Adds animation to selected array of elements.
 *
 * @param {Array} els - Array of elements to animate.
 * @param {String} animation - CSS animation to use.
 */
function animateElements(els, animation){
  for(var i = 0; i < els.length; i++) {
    if (isScrolledIntoView(els[i])) {
      els[i].classList.add(animation);
    }
  }
}

/**
 * Checks if element is in view after scrolling.
 *
 * @param {Element} el - Element to check visibility of.
 */
function isScrolledIntoView(el) {
  var elemTop = el.getBoundingClientRect().top;

  var isVisible = (elemTop >= 0) && (elemTop <= window.innerHeight);
  return isVisible;
}

function toggle(el, className){
  el.classList.toggle(className);
}
