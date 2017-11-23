
document.querySelector(".nav-mobile button").addEventListener("click", () => {
  let navMenu = document.querySelector(".navbar ul");
  toggle(navMenu, "active");
}, false);

window.addEventListener("load", animateOnScroll, false);
window.addEventListener("scroll", animateOnScroll, false);

function animateOnScroll(){
  let infoAside = document.querySelectorAll(".info aside"),
      infoImg = document.querySelectorAll(".info .img"),
      menuImages = document.querySelectorAll(".menu img"),
      menuItems = document.querySelectorAll(".menu-items .menu-item"),
      specialsImages = document.querySelectorAll(".special .img"),
      specialsInfo = document.querySelectorAll(".special .special-info");

  navChange();
  animateElements(infoAside, "animate-in");
  animateElements(infoImg, "animate-in");
  animateElements(specialsImages, "animate-in");
  animateElements(specialsInfo, "animate-in");
  animateElements(menuItems, "animate-in");
  animateElements(menuImages, "animate-in");
}

function navChange() {
  let navBar = document.querySelector(".nav-mobile"),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollTop >= 200) {
    navBar.classList.add("active");
    console.log("hi")
  } else {
    navBar.classList.remove("active");
    console.log("hi11")
  }
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
