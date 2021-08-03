webpackHotUpdate_N_E("pages/index",{

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* WEBPACK VAR INJECTION */(function(module) {/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"default\", function() { return Nav; });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _components_NavItem__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/NavItem */ \"./components/NavItem.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ \"./node_modules/classnames/index.js\");\n/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var react_icons_si__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/si */ \"./node_modules/react-icons/si/index.esm.js\");\n/* harmony import */ var react_icons_hi__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/hi */ \"./node_modules/react-icons/hi/index.esm.js\");\n\nvar _jsxFileName = \"/home/nauman/Downloads/Slicing_UI_Design/components/Nav.js\";\n\n\n\n\nfunction Nav(_ref) {\n  var scheme = _ref.scheme,\n      dir = _ref.dir;\n  var dirs = {\n    horizontal: \"justify-center space-x-10\",\n    vertical: \"flex-col space-y-6\"\n  };\n  var pickedDir = dirs[dir];\n  return /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"ul\", {\n    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(\"flex\", pickedDir),\n    children: [/*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"a\", {\n      style: {\n        display: 'flex',\n        alignItems: 'center',\n        color: \"white\"\n      },\n      scheme: scheme,\n      href: \"#skills\",\n      children: [\" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(react_icons_si__WEBPACK_IMPORTED_MODULE_3__[\"SiGitter\"], {\n        size: \"2rem\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 114\n      }, this), \" \", /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(\"span\", {\n        children: \"Skills\"\n      }, void 0, false, {\n        fileName: _jsxFileName,\n        lineNumber: 15,\n        columnNumber: 139\n      }, this)]\n    }, void 0, true, {\n      fileName: _jsxFileName,\n      lineNumber: 15,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      scheme: scheme,\n      href: \"#projects\",\n      children: \"Projects\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 16,\n      columnNumber: 13\n    }, this), /*#__PURE__*/Object(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__[\"jsxDEV\"])(_components_NavItem__WEBPACK_IMPORTED_MODULE_1__[\"default\"], {\n      scheme: scheme,\n      href: \"#contact\",\n      children: \"Contact\"\n    }, void 0, false, {\n      fileName: _jsxFileName,\n      lineNumber: 17,\n      columnNumber: 13\n    }, this)]\n  }, void 0, true, {\n    fileName: _jsxFileName,\n    lineNumber: 14,\n    columnNumber: 9\n  }, this);\n}\n_c = Nav;\n\nvar _c;\n\n$RefreshReg$(_c, \"Nav\");\n\n;\n    var _a, _b;\n    // Legacy CSS implementations will `eval` browser code in a Node.js context\n    // to extract CSS. For backwards compatibility, we need to check we're in a\n    // browser context before continuing.\n    if (typeof self !== 'undefined' &&\n        // AMP / No-JS mode does not inject these helpers:\n        '$RefreshHelpers$' in self) {\n        var currentExports = module.__proto__.exports;\n        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n        // This cannot happen in MainTemplate because the exports mismatch between\n        // templating and execution.\n        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.i);\n        // A module can be accepted automatically based on its exports, e.g. when\n        // it is a Refresh Boundary.\n        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n            // Save the previous exports on update so we can compare the boundary\n            // signatures.\n            module.hot.dispose(function (data) {\n                data.prevExports = currentExports;\n            });\n            // Unconditionally accept an update to this module, we'll check if it's\n            // still a Refresh Boundary later.\n            module.hot.accept();\n            // This field is set when the previous version of this module was a\n            // Refresh Boundary, letting us know we need to check for invalidation or\n            // enqueue an update.\n            if (prevExports !== null) {\n                // A boundary can become ineligible if its exports are incompatible\n                // with the previous exports.\n                //\n                // For example, if you add/remove/change exports, we'll want to\n                // re-execute the importing modules, and force those components to\n                // re-render. Similarly, if you convert a class component to a\n                // function, we want to invalidate the boundary.\n                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                    module.hot.invalidate();\n                }\n                else {\n                    self.$RefreshHelpers$.scheduleUpdate();\n                }\n            }\n        }\n        else {\n            // Since we just executed the code for the module, it's possible that the\n            // new exports made it ineligible for being a boundary.\n            // We only care about the case when we were _previously_ a boundary,\n            // because we already accepted this update (accidental side effect).\n            var isNoLongerABoundary = prevExports !== null;\n            if (isNoLongerABoundary) {\n                module.hot.invalidate();\n            }\n        }\n    }\n\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/next/dist/compiled/webpack/harmony-module.js */ \"./node_modules/next/dist/compiled/webpack/harmony-module.js\")(module)))//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9OYXYuanM/YTEzMyJdLCJuYW1lcyI6WyJOYXYiLCJzY2hlbWUiLCJkaXIiLCJkaXJzIiwiaG9yaXpvbnRhbCIsInZlcnRpY2FsIiwicGlja2VkRGlyIiwiY2xhc3NuYW1lcyIsImRpc3BsYXkiLCJhbGlnbkl0ZW1zIiwiY29sb3IiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDZSxTQUFTQSxHQUFULE9BQThCO0FBQUEsTUFBZkMsTUFBZSxRQUFmQSxNQUFlO0FBQUEsTUFBUEMsR0FBTyxRQUFQQSxHQUFPO0FBQ3pDLE1BQU1DLElBQUksR0FBRztBQUNUQyxjQUFVLEVBQUUsMkJBREg7QUFFVEMsWUFBUSxFQUFFO0FBRkQsR0FBYjtBQUtBLE1BQU1DLFNBQVMsR0FBR0gsSUFBSSxDQUFDRCxHQUFELENBQXRCO0FBRUEsc0JBQ0k7QUFBSSxhQUFTLEVBQUVLLGlEQUFVLENBQUMsTUFBRCxFQUFTRCxTQUFULENBQXpCO0FBQUEsNEJBQ0k7QUFBRyxXQUFLLEVBQUU7QUFBRUUsZUFBTyxFQUFFLE1BQVg7QUFBbUJDLGtCQUFVLEVBQUUsUUFBL0I7QUFBeUNDLGFBQUssRUFBRTtBQUFoRCxPQUFWO0FBQXFFLFlBQU0sRUFBRVQsTUFBN0U7QUFBcUYsVUFBSSxFQUFDLFNBQTFGO0FBQUEsbUNBQXFHLHFFQUFDLHVEQUFEO0FBQVUsWUFBSSxFQUFDO0FBQWY7QUFBQTtBQUFBO0FBQUE7QUFBQSxjQUFyRyxvQkFBOEg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsY0FBOUg7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBREosZUFFSSxxRUFBQywyREFBRDtBQUFTLFlBQU0sRUFBRUEsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFdBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBRkosZUFHSSxxRUFBQywyREFBRDtBQUFTLFlBQU0sRUFBRUEsTUFBakI7QUFBeUIsVUFBSSxFQUFDLFVBQTlCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFlBSEo7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBLFVBREo7QUFPSDtLQWZ1QkQsRyIsImZpbGUiOiIuL2NvbXBvbmVudHMvTmF2LmpzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IE5hdkl0ZW0gZnJvbSBcIi4uL2NvbXBvbmVudHMvTmF2SXRlbVwiO1xuaW1wb3J0IGNsYXNzbmFtZXMgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCB7IFNpR2l0dGVyIH0gZnJvbSBcInJlYWN0LWljb25zL3NpXCI7XG5pbXBvcnQgeyBIaUFjYWRlbWljQ2FwIH0gZnJvbSBcInJlYWN0LWljb25zL2hpXCI7XG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBOYXYoeyBzY2hlbWUsIGRpciB9KSB7XG4gICAgY29uc3QgZGlycyA9IHtcbiAgICAgICAgaG9yaXpvbnRhbDogXCJqdXN0aWZ5LWNlbnRlciBzcGFjZS14LTEwXCIsXG4gICAgICAgIHZlcnRpY2FsOiBcImZsZXgtY29sIHNwYWNlLXktNlwiXG4gICAgfVxuXG4gICAgY29uc3QgcGlja2VkRGlyID0gZGlyc1tkaXJdO1xuXG4gICAgcmV0dXJuIChcbiAgICAgICAgPHVsIGNsYXNzTmFtZT17Y2xhc3NuYW1lcyhcImZsZXhcIiwgcGlja2VkRGlyKX0+XG4gICAgICAgICAgICA8YSBzdHlsZT17eyBkaXNwbGF5OiAnZmxleCcsIGFsaWduSXRlbXM6ICdjZW50ZXInLCBjb2xvcjogXCJ3aGl0ZVwiIH19IHNjaGVtZT17c2NoZW1lfSBocmVmPVwiI3NraWxsc1wiPiA8U2lHaXR0ZXIgc2l6ZT1cIjJyZW1cIiAvPiA8c3Bhbj5Ta2lsbHM8L3NwYW4+PC9hPlxuICAgICAgICAgICAgPE5hdkl0ZW0gc2NoZW1lPXtzY2hlbWV9IGhyZWY9XCIjcHJvamVjdHNcIj5Qcm9qZWN0czwvTmF2SXRlbT5cbiAgICAgICAgICAgIDxOYXZJdGVtIHNjaGVtZT17c2NoZW1lfSBocmVmPVwiI2NvbnRhY3RcIj5Db250YWN0PC9OYXZJdGVtPlxuICAgICAgICA8L3VsPlxuICAgICk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/Nav.js\n");

/***/ })

})