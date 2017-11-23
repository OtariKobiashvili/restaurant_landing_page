/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


document.querySelector(".nav-mobile button").addEventListener("click", function () {
  var navMenu = document.querySelector(".navbar ul");
  toggle(navMenu, "active");
}, false);

window.addEventListener("load", animateOnScroll, false);
window.addEventListener("scroll", animateOnScroll, false);

function animateOnScroll() {
  var infoAside = document.querySelectorAll(".info aside"),
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
  var navBar = document.querySelector(".nav-mobile"),
      scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop || 0;

  if (scrollTop >= 200) {
    navBar.classList.add("active");
    console.log("hi");
  } else {
    navBar.classList.remove("active");
    console.log("hi11");
  }
}

/**
 * Adds animation to selected array of elements.
 *
 * @param {Array} els - Array of elements to animate.
 * @param {String} animation - CSS animation to use.
 */
function animateElements(els, animation) {
  for (var i = 0; i < els.length; i++) {
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

  var isVisible = elemTop >= 0 && elemTop <= window.innerHeight;
  return isVisible;
}

function toggle(el, className) {
  el.classList.toggle(className);
}

/***/ })
/******/ ]);