"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/layout",{

/***/ "(app-pages-browser)/./app/globals.css":
/*!*************************!*\
  !*** ./app/globals.css ***!
  \*************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"8f863e4cc236\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Q3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCI4Zjg2M2U0Y2MyMzZcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./app/layout.jsx":
/*!************************!*\
  !*** ./app/layout.jsx ***!
  \************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ RootLayout; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _components_Header__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Header */ \"(app-pages-browser)/./components/Header.jsx\");\n/* harmony import */ var _components_Navigation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/Navigation */ \"(app-pages-browser)/./components/Navigation.jsx\");\n/* harmony import */ var _globals_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./globals.css */ \"(app-pages-browser)/./app/globals.css\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_4__);\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction RootLayout(param) {\n    let { children } = param;\n    _s();\n    const [active, setActive] = (0,react__WEBPACK_IMPORTED_MODULE_4__.useState)(false);\n    const handleClick = ()=>{\n        setActive((prev)=>!prev);\n    };\n    const handleClickLink = ()=>{\n        setActive((prev)=>!prev);\n        console.log(active);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"html\", {\n        lang: \"pl\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"body\", {\n            className: \"bg-orange-300\",\n            children: [\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Header__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n                    onClick: handleClick,\n                    active: active\n                }, void 0, false, {\n                    fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\app\\\\layout.jsx\",\n                    lineNumber: 23,\n                    columnNumber: 5\n                }, this),\n                /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_Navigation__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    active: active,\n                    onClick: handleClickLink\n                }, void 0, false, {\n                    fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\app\\\\layout.jsx\",\n                    lineNumber: 24,\n                    columnNumber: 5\n                }, this),\n                children\n            ]\n        }, void 0, true, {\n            fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\app\\\\layout.jsx\",\n            lineNumber: 22,\n            columnNumber: 4\n        }, this)\n    }, void 0, false, {\n        fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\app\\\\layout.jsx\",\n        lineNumber: 21,\n        columnNumber: 3\n    }, this);\n}\n_s(RootLayout, \"1cfVChV6gA1Fk8+xDnwTj3gmgZo=\");\n_c = RootLayout;\nvar _c;\n$RefreshReg$(_c, \"RootLayout\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9sYXlvdXQuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUUwQztBQUNRO0FBQzNCO0FBQ1U7QUFFbEIsU0FBU0csV0FBVyxLQUFZO1FBQVosRUFBRUMsUUFBUSxFQUFFLEdBQVo7O0lBQ2xDLE1BQU0sQ0FBQ0MsUUFBUUMsVUFBVSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUVyQyxNQUFNSyxjQUFjO1FBQ25CRCxVQUFVRSxDQUFBQSxPQUFRLENBQUNBO0lBQ3BCO0lBRUMsTUFBTUMsa0JBQWtCO1FBQ3RCSCxVQUFVRSxDQUFBQSxPQUFRLENBQUNBO1FBQ25CRSxRQUFRQyxHQUFHLENBQUNOO0lBQ2Q7SUFFRCxxQkFDQyw4REFBQ087UUFBS0MsTUFBSztrQkFDViw0RUFBQ0M7WUFBS0MsV0FBVTs7OEJBQ2YsOERBQUNmLDBEQUFNQTtvQkFBQ2dCLFNBQVNUO29CQUFhRixRQUFRQTs7Ozs7OzhCQUN0Qyw4REFBQ0osOERBQVVBO29CQUFDSSxRQUFRQTtvQkFBU1csU0FBU1A7Ozs7OztnQkFDckNMOzs7Ozs7Ozs7Ozs7QUFJTDtHQXJCd0JEO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2FwcC9sYXlvdXQuanN4PzBjODEiXSwic291cmNlc0NvbnRlbnQiOlsiJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IEhlYWRlciBmcm9tICcuLi9jb21wb25lbnRzL0hlYWRlcic7XHJcbmltcG9ydCBOYXZpZ2F0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvTmF2aWdhdGlvbic7XHJcbmltcG9ydCAnLi9nbG9iYWxzLmNzcyc7XHJcbmltcG9ydCB7IHVzZVN0YXRlIH0gZnJvbSAncmVhY3QnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUm9vdExheW91dCh7IGNoaWxkcmVuIH0pIHtcclxuXHRjb25zdCBbYWN0aXZlLCBzZXRBY3RpdmVdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG5cclxuXHRjb25zdCBoYW5kbGVDbGljayA9ICgpID0+IHtcclxuXHRcdHNldEFjdGl2ZShwcmV2ID0+ICFwcmV2KTtcclxuXHR9O1xyXG5cclxuICBjb25zdCBoYW5kbGVDbGlja0xpbmsgPSAoKSA9PiB7XHJcbiAgICBzZXRBY3RpdmUocHJldiA9PiAhcHJldilcclxuICAgIGNvbnNvbGUubG9nKGFjdGl2ZSk7XHJcbiAgfVxyXG5cclxuXHRyZXR1cm4gKFxyXG5cdFx0PGh0bWwgbGFuZz0ncGwnPlxyXG5cdFx0XHQ8Ym9keSBjbGFzc05hbWU9J2JnLW9yYW5nZS0zMDAnPlxyXG5cdFx0XHRcdDxIZWFkZXIgb25DbGljaz17aGFuZGxlQ2xpY2t9IGFjdGl2ZT17YWN0aXZlfSAvPlxyXG5cdFx0XHRcdDxOYXZpZ2F0aW9uIGFjdGl2ZT17YWN0aXZlfSAgb25DbGljaz17aGFuZGxlQ2xpY2tMaW5rfS8+XHJcblx0XHRcdFx0e2NoaWxkcmVufVxyXG5cdFx0XHQ8L2JvZHk+XHJcblx0XHQ8L2h0bWw+XHJcblx0KTtcclxufVxyXG4iXSwibmFtZXMiOlsiSGVhZGVyIiwiTmF2aWdhdGlvbiIsInVzZVN0YXRlIiwiUm9vdExheW91dCIsImNoaWxkcmVuIiwiYWN0aXZlIiwic2V0QWN0aXZlIiwiaGFuZGxlQ2xpY2siLCJwcmV2IiwiaGFuZGxlQ2xpY2tMaW5rIiwiY29uc29sZSIsImxvZyIsImh0bWwiLCJsYW5nIiwiYm9keSIsImNsYXNzTmFtZSIsIm9uQ2xpY2siXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/layout.jsx\n"));

/***/ })

});