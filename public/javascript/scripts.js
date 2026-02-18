/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/javascript/modules/debounce.js"
/*!********************************************!*\
  !*** ./src/javascript/modules/debounce.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar _this = undefined;\n/**\n * debounce\n * Prevents A Function From Firing More Than Once When It's Called Multiple Times Within A Specified Amount Of Time. The Function Will Only Execute The Last Time The Function Is Called Within The Specified Amount Of Time\n * @param {*} fn \n * @param {*} ms \n * @returns \n */\nvar debounce = function debounce(fn, ms) {\n  var timerID;\n  return function () {\n    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {\n      args[_key] = arguments[_key];\n    }\n    var bound = fn.bind.apply(fn, [_this].concat(args));\n    clearTimeout(timerID);\n    timerID = setTimeout(bound, ms);\n  };\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (debounce);\n\n//# sourceURL=webpack://michael-freeland/./src/javascript/modules/debounce.js?\n}");

/***/ },

/***/ "./src/javascript/modules/load.js"
/*!****************************************!*\
  !*** ./src/javascript/modules/load.js ***!
  \****************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nfunction _toConsumableArray(r) { return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread(); }\nfunction _nonIterableSpread() { throw new TypeError(\"Invalid attempt to spread non-iterable instance.\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\"); }\nfunction _unsupportedIterableToArray(r, a) { if (r) { if (\"string\" == typeof r) return _arrayLikeToArray(r, a); var t = {}.toString.call(r).slice(8, -1); return \"Object\" === t && r.constructor && (t = r.constructor.name), \"Map\" === t || \"Set\" === t ? Array.from(r) : \"Arguments\" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0; } }\nfunction _iterableToArray(r) { if (\"undefined\" != typeof Symbol && null != r[Symbol.iterator] || null != r[\"@@iterator\"]) return Array.from(r); }\nfunction _arrayWithoutHoles(r) { if (Array.isArray(r)) return _arrayLikeToArray(r); }\nfunction _arrayLikeToArray(r, a) { (null == a || a > r.length) && (a = r.length); for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e]; return n; }\n/**\n * load\n * Handles iPhone Touch Events For A Better Mobile Viewing Experience\n */\nvar _load = function load() {\n  try {\n    if (document.readyState !== \"complete\") {\n      setTimeout(function () {\n        _load();\n      }, 100);\n      return;\n    }\n    if (/iP(hone|ad)/.test(window.navigator.userAgent)) {\n      var elements = _toConsumableArray(document.querySelectorAll(\"li\"));\n      var empty = function empty() {};\n      for (var i = 0; i < elements.length; i++) {\n        elements[i].addEventListener(\"touchstart\", empty, false);\n      }\n    }\n  } catch (err) {\n    console.error(\"Error: \", err);\n  }\n};\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_load);\n\n//# sourceURL=webpack://michael-freeland/./src/javascript/modules/load.js?\n}");

/***/ },

/***/ "./src/javascript/modules/viewport.js"
/*!********************************************!*\
  !*** ./src/javascript/modules/viewport.js ***!
  \********************************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _debounce__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./debounce */ \"./src/javascript/modules/debounce.js\");\n/**\n * Viewport\n * Measures & Sets VH & VW CSS Variables To Get Accurate Window Measurments Across All Browsers To Handle Compensating For Browser Or OS UI\n */\n\n\nvar dimensions = function dimensions() {\n  var height = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;\n  var width = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;\n  var vh = height * 0.01;\n  var vw = width * 0.01;\n  document.documentElement.style.setProperty(\"--vh\", \"\".concat(vh, \"px\"));\n  document.documentElement.style.setProperty(\"--vw\", \"\".concat(vw, \"px\"));\n};\nvar viewport = (0,_debounce__WEBPACK_IMPORTED_MODULE_0__[\"default\"])(dimensions, 100);\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (viewport);\n\n//# sourceURL=webpack://michael-freeland/./src/javascript/modules/viewport.js?\n}");

/***/ },

/***/ "./src/javascript/scripts.js"
/*!***********************************!*\
  !*** ./src/javascript/scripts.js ***!
  \***********************************/
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _modules_load__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./modules/load */ \"./src/javascript/modules/load.js\");\n/* harmony import */ var _modules_viewport__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./modules/viewport */ \"./src/javascript/modules/viewport.js\");\n\n\n(0,_modules_viewport__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nwindow.addEventListener(\"DOMContentLoaded\", _modules_load__WEBPACK_IMPORTED_MODULE_0__[\"default\"], {\n  once: true\n}, true);\nwindow.addEventListener(\"resize\", _modules_viewport__WEBPACK_IMPORTED_MODULE_1__[\"default\"]);\n\n//# sourceURL=webpack://michael-freeland/./src/javascript/scripts.js?\n}");

/***/ }

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Check if module exists (development only)
/******/ 		if (__webpack_modules__[moduleId] === undefined) {
/******/ 			var e = new Error("Cannot find module '" + moduleId + "'");
/******/ 			e.code = 'MODULE_NOT_FOUND';
/******/ 			throw e;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/javascript/scripts.js");
/******/ 	
/******/ })()
;