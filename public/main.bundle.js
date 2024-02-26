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

/***/ "./src/typescript/index.ts":
/*!*********************************!*\
  !*** ./src/typescript/index.ts ***!
  \*********************************/
/***/ (() => {

eval("\nconst App = (function () {\n    class Toggler {\n        static start() {\n            const ratingCard = document.getElementById(\"rating-card\");\n            const thankCard = document.getElementById(\"thank\");\n            const textAfterSelect = document.getElementById(\"text-after-select\");\n            const numbers = document.querySelectorAll(\".rating-card__numbers__item\");\n            numbers.forEach(num => {\n                num.addEventListener(\"click\", () => {\n                    ratingCard === null || ratingCard === void 0 ? void 0 : ratingCard.classList.add(\"hide\");\n                    thankCard === null || thankCard === void 0 ? void 0 : thankCard.classList.add(\"show\");\n                    textAfterSelect.textContent = `You selected ${num.textContent} out of 5`;\n                });\n            });\n        }\n    }\n    return {\n        init: Toggler.start\n    };\n})();\nApp.init();\n\n\n//# sourceURL=webpack://interactive-rating-component-main/./src/typescript/index.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/typescript/index.ts"]();
/******/ 	
/******/ })()
;