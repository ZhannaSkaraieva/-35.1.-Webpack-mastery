/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/js/button1.js":
/*!***************************!*\
  !*** ./src/js/button1.js ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createButton1: () => (/* binding */ createButton1)\n/* harmony export */ });\n/* harmony import */ var _styles_style_scss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../styles/style.scss */ \"./src/styles/style.scss\");\n\nfunction createButton1() {\n  const button1 = document.createElement('button');\n  button1.textContent = 'hi Click Me!';\n  button1.onclick = greet; // Привязка функции greet к событию click\n  document.body.appendChild(button1);\n}\n;\nfunction greet() {\n  alert('Hello!');\n}\n;\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/js/button1.js?");

/***/ }),

/***/ "./src/js/index.js":
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _test_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./test.js */ \"./src/js/test.js\");\n/* harmony import */ var _ts_index1_ts__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ts/index1.ts */ \"./src/ts/index1.ts\");\n/* harmony import */ var _ts_index1_ts__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ts_index1_ts__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _styles_style_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../styles/style.css */ \"./src/styles/style.css\");\n/* harmony import */ var _button1_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./button1.js */ \"./src/js/button1.js\");\n/* harmony import */ var _styles_style_less__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../styles/style.less */ \"./src/styles/style.less\");\n // Импорт функции из другого JS файла\n\n\n\n\ndocument.addEventListener('DOMContentLoaded', () => {\n  const button = document.createElement('button');\n  button.textContent = 'Click Me!';\n  button.onclick = _test_js__WEBPACK_IMPORTED_MODULE_0__.greet; // Привязка функции greet к событию click\n  document.body.appendChild(button);\n  const button1 = (0,_button1_js__WEBPACK_IMPORTED_MODULE_3__.createButton1)();\n  document.body.appendChild(button1);\n});\nconsole.log(\"Hello !\"), console.log(_ts_index1_ts__WEBPACK_IMPORTED_MODULE_1__.sumArray);\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/js/index.js?");

/***/ }),

/***/ "./src/js/test.js":
/*!************************!*\
  !*** ./src/js/test.js ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   greet: () => (/* binding */ greet)\n/* harmony export */ });\nfunction greet() {\n  alert('Hello from Webpack and JavaScript!');\n}\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/js/test.js?");

/***/ }),

/***/ "./src/styles/style.less":
/*!*******************************!*\
  !*** ./src/styles/style.less ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/styles/style.less?");

/***/ }),

/***/ "./src/styles/style.scss":
/*!*******************************!*\
  !*** ./src/styles/style.scss ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/styles/style.scss?");

/***/ }),

/***/ "./src/styles/style.css":
/*!******************************!*\
  !*** ./src/styles/style.css ***!
  \******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n// extracted by mini-css-extract-plugin\n\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/styles/style.css?");

/***/ }),

/***/ "./src/ts/index1.ts":
/*!**************************!*\
  !*** ./src/ts/index1.ts ***!
  \**************************/
/***/ (() => {

eval("function sumArray(number) {\n    return number.reduce(function (a, b) { return a + b; }, 0); // 0 — начальное значение для суммы, добавляем в качестве второго аргумента.\n}\n; // если массив пустой, сумма будет равна 0.\n// Вивід до консолі для демонстрації\nconsole.log(sumArray([1, 2, 3, 4])); // Повинно вивести 10\n\n\n//# sourceURL=webpack://-35.1.-webpack-mastery/./src/ts/index1.ts?");

/***/ })

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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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
/******/ 	var __webpack_exports__ = __webpack_require__("./src/js/index.js");
/******/ 	
/******/ })()
;