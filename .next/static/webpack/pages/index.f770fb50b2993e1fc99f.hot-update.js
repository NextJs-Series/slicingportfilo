webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavItem */ \"./components/NavItem.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n\nvar _jsxFileName = \"/home/nauman/Downloads/Slicing_UI_Design/components/Nav.js\";\n\n\n\n\nfunction Nav(_ref) {\n  var scheme = _ref.scheme,\n      dir = _ref.dir;\n  var dirs = {\n    horizontal: \"justify-center space-x-10\",\n    vertical: \"flex-col space-y-6\"\n  };\n  var pickedDir = dirs[dir];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"flex\", pickedDir),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      style: {\n        display: 'flex',\n        alignItems: 'center',\n        color: \"white\"\n      },\n      scheme: scheme,\n      href: \"#skills\",\n      children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__[\"SiKaios\"], {\n        size: \"2rem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 114\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Skills\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 138\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      scheme: scheme,\n      href: \"#projects\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      scheme: scheme,\n      href: \"#contact\",\n      children: \"Contact\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJzY2hlbWUiLCJkaXIiLCJkaXJzIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwicGlja2VkRGlyIiwiY2xhc3NuYW1lcyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULE9BQThCO0FBQUEsTUFBZkMsTUFBZSxRQUFmQSxNQUFlO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3pDLE1BQU1DLElBQUksR0FBRztBQUNUQyxjQUFVLEVBQUUsMkJBREg7QUFFVEMsWUFBUSxFQUFFO0FBRkQsR0FBYjtBQUtBLE1BQU1DLFNBQVMsR0FBR0gsSUFBSSxDQUFDRCxHQUFELENBQXRCO0FBRUEsc0JBQ0k7QUFBSSxhQUFTLEVBQUVLLGlEQUFVLENBQUMsTUFBRCxFQUFTRCxTQUFULENBQXpCO0FBQUEsNEJBQ0k7QUFBRyxXQUFLLEVBQUU7QUFBRUUsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGtCQUFVLEVBQUUsUUFBL0I7QUFBeUNDLGFBQUssRUFBRTtBQUFoRCxPQUFWO0FBQXFFLFlBQU0sRUFBRVQsTUFBN0U7QUFBcUYsVUFBSSxFQUFDLFNBQTFGO0FBQUEsbUNBQXFHLHFFQUFDLHNEQUFEO0FBQVMsWUFBSSxFQUFDO0FBQWQ7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFyRyxvQkFBNkg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBN0g7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywyREFBRDtBQUFTLFlBQU0sRUFBRUEsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQywyREFBRDtBQUFTLFlBQU0sRUFBRUEsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDtLQWZ1QkQsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2SXRlbVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IFNpS2Fpb3MgfSBmcm9tIFwicmVhY3QtaWNvbnMvc2lcIjtcbmltcG9ydCB7IEhpQWNhZGVtaWNDYXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvaGlcIjtcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdih7IHNjaGVtZSwgZGlyIH0pIHtcbiAgICBjb25zdCBkaXJzID0ge1xuICAgICAgICBob3Jpem9udGFsOiBcImp1c3RpZnktY2VudGVyIHNwYWNlLXgtMTBcIixcbiAgICAgICAgdmVydGljYWw6IFwiZmxleC1jb2wgc3BhY2UteS02XCJcbiAgICB9XG5cbiAgICBjb25zdCBwaWNrZWREaXIgPSBkaXJzW2Rpcl07XG5cbiAgICByZXR1cm4gKFxuICAgICAgICA8dWwgY2xhc3NOYW1lPXtjbGFzc25hbWVzKFwiZmxleFwiLCBwaWNrZWREaXIpfT5cbiAgICAgICAgICAgIDxhIHN0eWxlPXt7IGRpc3BsYXk6ICdmbGV4JywgYWxpZ25JdGVtczogJ2NlbnRlcicsIGNvbG9yOiBcIndoaXRlXCIgfX0gc2NoZW1lPXtzY2hlbWV9IGhyZWY9XCIjc2tpbGxzXCI+IDxTaUthaW9zIHNpemU9XCIycmVtXCIgLz4gPHNwYW4+U2tpbGxzPC9zcGFuPjwvYT5cbiAgICAgICAgICAgIDxOYXZJdGVtIHNjaGVtZT17c2NoZW1lfSBocmVmPVwiI3Byb2plY3RzXCI+UHJvamVjdHM8L05hdkl0ZW0+XG4gICAgICAgICAgICA8TmF2SXRlbSBzY2hlbWU9e3NjaGVtZX0gaHJlZj1cIiNjb250YWN0XCI+Q29udGFjdDwvTmF2SXRlbT5cbiAgICAgICAgPC91bD5cbiAgICApO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})