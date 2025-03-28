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
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
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
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/main.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modules_Slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/Slider */ "./src/js/modules/Slider.js");

let item = document.querySelectorAll(".question-item");
item.forEach(item => {
  console.log();
  item.addEventListener('click', e => {
    if (!item.classList.contains("question-item_active")) {
      item.childNodes[1].childNodes[3].style.transform = "rotate(180deg)";
      item.classList.add("question-item_active");
    } else {
      console.log("none");
      item.classList.remove("question-item_active");
      item.childNodes[1].childNodes[3].style.transform = "rotate(0deg)";
    }
  });
});
const hamburger = document.querySelector(".header-hamburger");
const elementMenu = document.querySelector(".header-nav");
const elementMenuTab = document.querySelectorAll(".header-nav-list_item__link");
hamburger.addEventListener("click", e => {
  elementMenu.classList.toggle("header-nav_active");
  if (elementMenu.classList.contains("header-nav_active")) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "";
  }
});
elementMenuTab.forEach(item => {
  item.addEventListener("click", e => {
    elementMenu.classList.remove("header-nav_active");
    document.body.style.overflow = "";
  });
});

// const videoPlayBtn = document.querySelector(".material-wrapper");
// const videoRest = document.querySelector(".material-template");
// const video = document.getElementById("video");

// videoPlayBtn.addEventListener("click", (e) => {
//     if(video.paused){
//         videoPlayBtn.classList.add("material-wrapper_play")
//         video.play()

//         videoPlayBtn.style.opacity = "0"
//         setTimeout(() => {
//             videoPlayBtn.style.display = "none"
//         }, 400)
//     } 
// })

const footerTemplate = document.querySelectorAll(".footer-template");
footerTemplate.forEach(item => {
  item.addEventListener("click", () => {
    item.classList.toggle("footer-template_active");
  });
});
const tabsTouchContainer = document.querySelector(".material-field");
const tabsViewContainer = document.querySelector(".material-tab");
const tabsTouchMaterial = document.querySelectorAll(".material-field_touch");
const tabsViewMaterial = document.querySelectorAll(".material-template_video");
function removeClassActiveTab() {
  tabsTouchMaterial.forEach(item => {
    item.classList.remove("material-field_touch__active");
  });
}
function removeClassActiveTabView() {
  tabsViewMaterial.forEach(item => {
    item.classList.remove("material-template_video__active");
  });
}
function addClassActiveTab(i) {
  removeClassActiveTab();
  tabsTouchContainer.children[i].classList.add("material-field_touch__active");
}
function addClassActiveTabView(i) {
  removeClassActiveTabView();
  tabsViewContainer.children[i].classList.add("material-template_video__active");
  // console.log(tabsViewContainer.children[i])
}

// addClassActiveTab(1)
// addClassActiveTabView(0)

function onClickEventTab() {
  tabsTouchMaterial.forEach((item, index) => {
    item.addEventListener("click", e => {
      addClassActiveTab(index);
      addClassActiveTabView(index);
    });
  });
}
onClickEventTab();
const modalForm = document.querySelector(".modal");
const modalContinue = document.querySelector(".continue");
const closeModalForm = document.querySelector(".modal-close");
const closeModalContinue = document.querySelector(".continue-btn");
const openModalForm = document.querySelector(".home-attribute-block_btn");
openModalForm.addEventListener('click', e => {
  modalForm.classList.add('modal-active');
});
closeModalForm.addEventListener("click", e => {
  modalForm.classList.remove('modal-active');
});
closeModalContinue.addEventListener("click", e => {
  modalContinue.classList.remove('continue_active');
});
const formCheck = document.querySelector(".modal-form_check");
formCheck.addEventListener("click", e => {
  formCheck.classList.toggle("modal-form_check__active");
});
const formFooter = document.querySelector(".footer-form");
const formModal = document.querySelector(".modal-form");
mailerPush(formFooter, "name-footer-input", "number-footer-input", "email-footer-input", "message-footer-input");
mailerPush(formModal, "name-modal-input", "number-modal-input", "email-modal-input", "message-modal-input");
function mailerPush(form, nameID, numberID, emailID, messageID) {
  form.addEventListener('submit', function (event) {
    event.preventDefault();
    const nameI = document.getElementById(nameID).value;
    const emailI = document.getElementById(emailID).value;
    const numberI = document.getElementById(numberID).value;
    const messageI = document.getElementById(messageID).value;
    const formData = new FormData();
    formData.append('name', nameI);
    formData.append('email', emailI);
    formData.append('number', numberI);
    formData.append('message', messageI);
    console.log(formData);
    fetch('mailer/smart.php', {
      method: 'POST',
      body: formData
    }).then(response => {
      if (response.ok) {
        return response.text();
      } else {
        throw new Error('Network response was not ok.');
      }
    }).then(data => {
      form.reset();
      console.log(data);
    }).catch(error => {
      console.log(error);
    });
  });
}
document.addEventListener("DOMContentLoaded", e => {
  const Slime = new _modules_Slider__WEBPACK_IMPORTED_MODULE_0__["default"]({
    sliderClass: ".reviews",
    navigation: {
      nextSlideBtn: ".reviews-navigation-next",
      prevSlideBtn: ".reviews-navigation-prev"
    },
    previewSlides: 4,
    speedSlider: 0.6,
    previewScrollSlide: 3,
    pagination: true,
    breakpoints: [{
      breakpointSize: 1300,
      previewScrollSlide: 3,
      previewSlides: 3
    }, {
      breakpointSize: 900,
      previewScrollSlide: 2,
      previewSlides: 2
    }, {
      breakpointSize: 600,
      previewScrollSlide: 1,
      previewSlides: 1
    }]
  });
  Slime.InitSlider();
});

/***/ }),

/***/ "./src/js/modules/Slider.js":
/*!**********************************!*\
  !*** ./src/js/modules/Slider.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == typeof i ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != typeof t || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != typeof i) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
class SlimeInit {
  constructor({
    sliderClass = "",
    navigation = {
      nextSlideBtn: "",
      prevSlideBtn: ""
    },
    previewSlides = 1,
    speedSlider = 0.5,
    previewScrollSlide = 1,
    breakpoints = [],
    pagination = false
  }) {
    _defineProperty(this, "InitSliderStylesContainer", () => {
      // настраивание ширины слайдов и их контейнера
      this._SlideWidth = this._Slider.clientWidth / this.previewSlides;
      this._Slide.forEach(item => {
        item.style.width = `${this._SlideWidth}px`;
      });
      this._ContainerSlide.style.width = `${this.NumberSlide * this._SlideWidth}px`;
      this._ContainerSlide.style.display = "flex";
      this._ContainerSlide.style.transition = `transform ${this.speedSlider}s ease-in-out`;
      this.ScrollingSlide();
      this.BreakpointSlider();
    });
    _defineProperty(this, "ScrollingSlide", () => {
      // Прокрутка слайдера
      this._ContainerSlide.style.transform = `translateX(-${this._TransformSlide}px)`;
    });
    _defineProperty(this, "NextScrolling", () => {
      const maxIndexSlide = this.NumberSlide - this.previewSlides;
      this._IndexSlide = this._IndexSlide < maxIndexSlide ? Math.min(this._IndexSlide + this.previewScrollSlide, maxIndexSlide) : 0;
      this._TransformSlide = this._IndexSlide * this._SlideWidth;
      this.ScrollingSlide();
      this.UpdatePaginationSlider();
    });
    _defineProperty(this, "PrevScrolling", () => {
      const maxIndexSlide = this.NumberSlide - this.previewSlides;
      this._IndexSlide = this._IndexSlide > 0 ? Math.max(this._IndexSlide - this.previewScrollSlide, 0) : this.NumberSlide > this.previewSlides ? maxIndexSlide : 0;
      this._TransformSlide = this._IndexSlide * this._SlideWidth;
      this.ScrollingSlide();
      this.UpdatePaginationSlider();
    });
    _defineProperty(this, "InitEventBtnsSlider", () => {
      if (!this.navigation.nextSlideBtn || !this.navigation.prevSlideBtn) return;
      const _NextBtnSlide = document.querySelector(this.navigation.nextSlideBtn);
      const _PrevBtnSlide = document.querySelector(this.navigation.prevSlideBtn);
      _NextBtnSlide.addEventListener("click", () => this.NextScrolling());
      _PrevBtnSlide.addEventListener("click", () => this.PrevScrolling());
    });
    _defineProperty(this, "ThisWindowResizeSlide", () => {
      window.addEventListener("resize", e => {
        this.BreakpointSlider();
        this.InitSliderStylesContainer();
        this.PaginationSlider();
        this.UpdatePaginationSlider();
        this._TransformSlide = 0;
        this._IndexSlide = 0;
      });
    });
    _defineProperty(this, "PaginationSlider", () => {
      if (this.pagination === true) {
        const paginationContainer = document.querySelector(".reviews-pagination");
        let paginationNumbers = 0;
        if (this.NumberSlide > this.previewSlides) {
          paginationNumbers = Math.ceil((this.NumberSlide - this.previewSlides) / this.previewScrollSlide) + 1;
        } else {
          paginationNumbers = 1;
        }
        paginationContainer.innerHTML = "";
        for (let i = 0; i < paginationNumbers; i++) {
          const paginationItem = document.createElement("li");
          paginationItem.classList.add("reviews-pagination-item");
          paginationItem.addEventListener("click", () => this.getIndexSlider(i));
          paginationContainer.appendChild(paginationItem);
        }
        this.UpdatePaginationSlider();
      }
    });
    _defineProperty(this, "UpdatePaginationSlider", () => {
      const paginationContainer = document.querySelector(".reviews-pagination");
      const indicators = paginationContainer.querySelectorAll(".reviews-pagination-item");
      indicators.forEach(indicator => indicator.classList.remove("active"));
      const maxIndexSlide = this.NumberSlide - this.previewSlides;
      let activeIndex = Math.ceil(this._IndexSlide / this.previewScrollSlide);
      if (maxIndexSlide < 0) {
        activeIndex = 0;
      } else if (this._IndexSlide >= maxIndexSlide) {
        activeIndex = indicators.length > 0 ? indicators.length - 1 : 0;
      }
      activeIndex = Math.min(activeIndex, indicators.length - 1);
      activeIndex = Math.max(activeIndex, 0);
      if (activeIndex >= 0 && activeIndex < indicators.length) {
        indicators[activeIndex].classList.add("active");
      }
    });
    _defineProperty(this, "getIndexSlider", index => {
      const maxIndexSlide = this.NumberSlide - this.previewSlides;
      let newIndexSlide = index * this.previewScrollSlide;
      newIndexSlide = Math.min(newIndexSlide, maxIndexSlide);
      this._IndexSlide = newIndexSlide;
      this._TransformSlide = this._IndexSlide * this._SlideWidth;
      this.ScrollingSlide();
      this.UpdatePaginationSlider();
    });
    _defineProperty(this, "BreakpointSlider", () => {
      if (!this.breakpoints) return;
      const _WidthWindow = window.innerWidth;
      let breakpointConfirm = false;
      this.breakpoints.sort((a, b) => b.breakpoint - a.breakpoint);
      for (let i = 0; i < this.breakpoints.length; i++) {
        const item = this.breakpoints[i];
        if (_WidthWindow <= item.breakpointSize) {
          this.previewSlides = item.previewSlides;
          this.previewScrollSlide = item.previewScrollSlide;
          breakpointConfirm = true;
          // break; // если включить то брекпоинты не будут работать полностью
        }
      }
      if (!breakpointConfirm) {
        this.previewSlides = this._ConfirmPreviewSlide;
        this.previewScrollSlide = this._ConfirmScrollSlide;
      }
    });
    _defineProperty(this, "InitSlider", () => {
      this.BreakpointSlider();
      this.InitSliderStylesContainer();
      this.ThisWindowResizeSlide();
      this.InitEventBtnsSlider();
      this.PaginationSlider();
      this.UpdatePaginationSlider();
    });
    this.sliderClass = sliderClass;
    this._ContainerSlide = document.querySelector(`${this.sliderClass}-slides`); // контейнер слайдов
    this._Slide = document.querySelectorAll(`${this.sliderClass}-slide`); // сами слайды
    this._Slider = document.querySelector(`${this.sliderClass}-container`); // слайдер в общем

    this.previewSlides = previewSlides;
    this.navigation = navigation;
    this.speedSlider = speedSlider;
    this.previewScrollSlide = previewScrollSlide;
    this.breakpoints = breakpoints;
    this.pagination = pagination;
    this._ConfirmScrollSlide = this.previewScrollSlide;
    this._ConfirmPreviewSlide = this.previewSlides;
    this._TransformSlide = 0; // расчетная переменная для перелистывания слайдера
    this._IndexSlide = 0; // индекс слайдера
    this.NumberSlide = this._ContainerSlide.children.length; // количество слайдов
  }
}
/* harmony default export */ __webpack_exports__["default"] = (SlimeInit);

/***/ })

/******/ });
//# sourceMappingURL=script.js.map