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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony default export */ __webpack_exports__[\"default\"] = (\"2c9e6d2697f7\");\nif (true) { module.hot.accept() }\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9nbG9iYWxzLmNzcyIsIm1hcHBpbmdzIjoiO0FBQUEsK0RBQWUsY0FBYztBQUM3QixJQUFJLElBQVUsSUFBSSxpQkFBaUIiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vYXBwL2dsb2JhbHMuY3NzP2Q3YjIiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGRlZmF1bHQgXCIyYzllNmQyNjk3ZjdcIlxuaWYgKG1vZHVsZS5ob3QpIHsgbW9kdWxlLmhvdC5hY2NlcHQoKSB9XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/globals.css\n"));

/***/ }),

/***/ "(app-pages-browser)/./components/Navigation.jsx":
/*!***********************************!*\
  !*** ./components/Navigation.jsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var clsx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! clsx */ \"(app-pages-browser)/./node_modules/clsx/dist/clsx.mjs\");\n/* harmony import */ var _LinkApp__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./LinkApp */ \"(app-pages-browser)/./components/LinkApp.jsx\");\n\n\n\nconst Navigation = (param)=>{\n    let { active, onClick } = param;\n    const urls = [\n        \"/\",\n        \"/about\",\n        \"/gallery\",\n        \"/contact\"\n    ];\n    const pages = [\n        \"Start\",\n        \"O mnie\",\n        \"Galeria\",\n        \"Kontakt\"\n    ];\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: \"\",\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n            className: (0,clsx__WEBPACK_IMPORTED_MODULE_1__[\"default\"])(\"absolute top-15 right-1 bg-orange-400 h-36 w-40 z-10 p-3 text-center rounded-2xl\", !active && \"hidden\"),\n            children: pages.map((page, index)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_LinkApp__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    onClick: onClick,\n                    href: urls[index],\n                    children: page\n                }, index, false, {\n                    fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\components\\\\Navigation.jsx\",\n                    lineNumber: 16,\n                    columnNumber: 6\n                }, undefined))\n        }, void 0, false, {\n            fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\components\\\\Navigation.jsx\",\n            lineNumber: 10,\n            columnNumber: 4\n        }, undefined)\n    }, void 0, false, {\n        fileName: \"C:\\\\programming\\\\projects\\\\photos\\\\components\\\\Navigation.jsx\",\n        lineNumber: 9,\n        columnNumber: 3\n    }, undefined);\n};\n_c = Navigation;\n/* harmony default export */ __webpack_exports__[\"default\"] = (Navigation);\nvar _c;\n$RefreshReg$(_c, \"Navigation\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3giLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBd0I7QUFDUTtBQUVoQyxNQUFNRSxhQUFhO1FBQUMsRUFBRUMsTUFBTSxFQUFFQyxPQUFPLEVBQUU7SUFDdEMsTUFBTUMsT0FBTztRQUFDO1FBQUs7UUFBVTtRQUFZO0tBQVc7SUFDcEQsTUFBTUMsUUFBUTtRQUFDO1FBQVM7UUFBVTtRQUFXO0tBQVU7SUFFdkQscUJBQ0MsOERBQUNDO1FBQUlDLFdBQVU7a0JBQ2QsNEVBQUNDO1lBQ0FELFdBQVdSLGdEQUFJQSxDQUNkLG9GQUNBLENBQUNHLFVBQVU7c0JBRVhHLE1BQU1JLEdBQUcsQ0FBQyxDQUFDQyxNQUFNQyxzQkFDakIsOERBQUNYLGdEQUFPQTtvQkFFUEcsU0FBU0E7b0JBQ1RTLE1BQU1SLElBQUksQ0FBQ08sTUFBTTs4QkFDaEJEO21CQUhJQzs7Ozs7Ozs7Ozs7Ozs7O0FBU1g7S0F0Qk1WO0FBd0JOLCtEQUFlQSxVQUFVQSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvTmF2aWdhdGlvbi5qc3g/YzVmYSJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgY2xzeCBmcm9tICdjbHN4JztcclxuaW1wb3J0IExpbmtBcHAgZnJvbSAnLi9MaW5rQXBwJztcclxuXHJcbmNvbnN0IE5hdmlnYXRpb24gPSAoeyBhY3RpdmUsIG9uQ2xpY2sgfSkgPT4ge1xyXG5cdGNvbnN0IHVybHMgPSBbJy8nLCAnL2Fib3V0JywgJy9nYWxsZXJ5JywgJy9jb250YWN0J107XHJcblx0Y29uc3QgcGFnZXMgPSBbJ1N0YXJ0JywgJ08gbW5pZScsICdHYWxlcmlhJywgJ0tvbnRha3QnXTtcclxuXHJcblx0cmV0dXJuIChcclxuXHRcdDxuYXYgY2xhc3NOYW1lPScnPlxyXG5cdFx0XHQ8dWxcclxuXHRcdFx0XHRjbGFzc05hbWU9e2Nsc3goXHJcblx0XHRcdFx0XHQnYWJzb2x1dGUgdG9wLTE1IHJpZ2h0LTEgYmctb3JhbmdlLTQwMCBoLTM2IHctNDAgei0xMCBwLTMgdGV4dC1jZW50ZXIgcm91bmRlZC0yeGwnLFxyXG5cdFx0XHRcdFx0IWFjdGl2ZSAmJiAnaGlkZGVuJ1xyXG5cdFx0XHRcdCl9PlxyXG5cdFx0XHRcdHtwYWdlcy5tYXAoKHBhZ2UsIGluZGV4KSA9PiAoXHJcblx0XHRcdFx0XHQ8TGlua0FwcFxyXG5cdFx0XHRcdFx0XHRrZXk9e2luZGV4fVxyXG5cdFx0XHRcdFx0XHRvbkNsaWNrPXtvbkNsaWNrfVxyXG5cdFx0XHRcdFx0XHRocmVmPXt1cmxzW2luZGV4XX0+XHJcblx0XHRcdFx0XHRcdHtwYWdlfVxyXG5cdFx0XHRcdFx0PC9MaW5rQXBwPlxyXG5cdFx0XHRcdCkpfVxyXG5cdFx0XHQ8L3VsPlxyXG5cdFx0PC9uYXY+XHJcblx0KTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IE5hdmlnYXRpb247Il0sIm5hbWVzIjpbImNsc3giLCJMaW5rQXBwIiwiTmF2aWdhdGlvbiIsImFjdGl2ZSIsIm9uQ2xpY2siLCJ1cmxzIiwicGFnZXMiLCJuYXYiLCJjbGFzc05hbWUiLCJ1bCIsIm1hcCIsInBhZ2UiLCJpbmRleCIsImhyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./components/Navigation.jsx\n"));

/***/ })

});