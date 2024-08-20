"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdateacfun_evolved"]("AcFun_Evolved",{

/***/ "./src/ui/Manager.tsx":
/*!****************************!*\
  !*** ./src/ui/Manager.tsx ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Manager: () => (/* binding */ Manager)\n/* harmony export */ });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _Assembler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assembler */ \"./src/ui/Assembler.tsx\");\n/* harmony import */ var _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api/Logger */ \"./src/core/api/Logger.ts\");\n/* harmony import */ var _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api/ACEV2DOM */ \"./src/core/api/ACEV2DOM.ts\");\n/* harmony import */ var _Painter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Painter */ \"./src/ui/Painter.tsx\");\n/* harmony import */ var _core_api_Variable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/api/Variable */ \"./src/core/api/Variable.ts\");\n\n\n\n\n\n\nvar parent = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createRoot();\nvar root = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.root });\nvar sideMenu = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.sideMenu });\nvar plugins = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.plugins });\nvar renderUI = function (_a) {\n    var canvas = _a.canvas, slot = _a.slot;\n    var rootTracker;\n    if (root) {\n        if (slot === 'root') {\n            var _b = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: root }), element = _b.element, tracker = _b.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else if (slot === 'sideMenu') {\n            var _c = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: sideMenu }), element = _c.element, tracker = _c.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else if (slot === 'plugins') {\n            var _d = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: plugins }), element = _d.element, tracker = _d.tracker;\n            rootTracker = tracker;\n            console.log(element);\n            console.log(tracker);\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            console.log(tracker);\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else {\n            var _e = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: slot }) }), element = _e.element, tracker = _e.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info({ message: 'UI rendered.' });\n        return rootTracker;\n    }\n    else {\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error({ message: 'Root element not found' });\n        return null;\n    }\n};\nvar unmountUI = function (_a) {\n    var tracker = _a.tracker;\n    var elementToRemove = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker });\n    if (elementToRemove && elementToRemove.parentElement) {\n        _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        setTimeout(function () {\n            var _a;\n            (_a = elementToRemove.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(elementToRemove);\n        }, _core_api_Variable__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ANIMATION_DURATION);\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info({ message: 'UI unmounted.' });\n    }\n    else {\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error({ message: 'Element to unmount not found or parent element is missing.' });\n    }\n};\nvar Manager = {\n    renderUI: renderUI,\n    unmountUI: unmountUI\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvTWFuYWdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNRO0FBQ0E7QUFDSTtBQUNSO0FBQ1E7QUFDNUMsYUFBYSwwREFBUTtBQUNyQixXQUFXLDBEQUFRLGlCQUFpQixzQkFBc0I7QUFDMUQsZUFBZSwwREFBUSxpQkFBaUIsMEJBQTBCO0FBQ2xFLGNBQWMsMERBQVEsaUJBQWlCLHlCQUF5QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLGlEQUFTLGNBQWMsbUNBQW1DO0FBQy9FO0FBQ0EsWUFBWSw4Q0FBTSxVQUFVLDBEQUFRLGlCQUFpQixrQkFBa0I7QUFDdkUsWUFBWSw2Q0FBTyxzQkFBc0IsMkNBQTJDO0FBQ3BGO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVMsY0FBYyx1Q0FBdUM7QUFDbkY7QUFDQSxZQUFZLDhDQUFNLFVBQVUsMERBQVEsaUJBQWlCLGtCQUFrQjtBQUN2RSxZQUFZLDZDQUFPLHNCQUFzQiwyQ0FBMkM7QUFDcEY7QUFDQTtBQUNBLHFCQUFxQixpREFBUyxjQUFjLHNDQUFzQztBQUNsRjtBQUNBO0FBQ0E7QUFDQSxZQUFZLDhDQUFNLFVBQVUsMERBQVEsaUJBQWlCLGtCQUFrQjtBQUN2RTtBQUNBLFlBQVksNkNBQU8sc0JBQXNCLDJDQUEyQztBQUNwRjtBQUNBO0FBQ0EscUJBQXFCLGlEQUFTLGNBQWMsNkJBQTZCLDBEQUFRLGlCQUFpQixlQUFlLEdBQUc7QUFDcEg7QUFDQSxZQUFZLDhDQUFNLFVBQVUsMERBQVEsaUJBQWlCLGtCQUFrQjtBQUN2RSxZQUFZLDZDQUFPLHNCQUFzQiwyQ0FBMkM7QUFDcEY7QUFDQSxRQUFRLHdEQUFNLFFBQVEseUJBQXlCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0RBQU0sU0FBUyxtQ0FBbUM7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwwREFBUSxpQkFBaUIsa0JBQWtCO0FBQ3JFO0FBQ0EsUUFBUSw2Q0FBTyxzQkFBc0IsMkNBQTJDO0FBQ2hGO0FBQ0E7QUFDQTtBQUNBLFNBQVMsRUFBRSwwREFBUTtBQUNuQixRQUFRLHdEQUFNLFFBQVEsMEJBQTBCO0FBQ2hEO0FBQ0E7QUFDQSxRQUFRLHdEQUFNLFNBQVMsdUVBQXVFO0FBQzlGO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL2FjZnVuX2V2b2x2ZWQvLi9zcmMvdWkvTWFuYWdlci50c3g/NzQ0OCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZW5kZXIgfSBmcm9tICdwcmVhY3QnO1xuaW1wb3J0IHsgQXNzZW1ibGVyIH0gZnJvbSAnLi9Bc3NlbWJsZXInO1xuaW1wb3J0IExvZ2dlciBmcm9tIFwiLi4vY29yZS9hcGkvTG9nZ2VyXCI7XG5pbXBvcnQgQUNFVjJET00gZnJvbSAnLi4vY29yZS9hcGkvQUNFVjJET00nO1xuaW1wb3J0IHsgUGFpbnRlciB9IGZyb20gXCIuL1BhaW50ZXJcIjtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi4vY29yZS9hcGkvVmFyaWFibGVcIjtcbnZhciBwYXJlbnQgPSBBQ0VWMkRPTS5jcmVhdGVSb290KCk7XG52YXIgcm9vdCA9IEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiBwYXJlbnQucm9vdCB9KTtcbnZhciBzaWRlTWVudSA9IEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiBwYXJlbnQuc2lkZU1lbnUgfSk7XG52YXIgcGx1Z2lucyA9IEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiBwYXJlbnQucGx1Z2lucyB9KTtcbnZhciByZW5kZXJVSSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciBjYW52YXMgPSBfYS5jYW52YXMsIHNsb3QgPSBfYS5zbG90O1xuICAgIHZhciByb290VHJhY2tlcjtcbiAgICBpZiAocm9vdCkge1xuICAgICAgICBpZiAoc2xvdCA9PT0gJ3Jvb3QnKSB7XG4gICAgICAgICAgICB2YXIgX2IgPSBBc3NlbWJsZXIuYXNzZW1ibGVVSSh7IGNhbnZhczogY2FudmFzLCBzbG90RWxlbWVudDogcm9vdCB9KSwgZWxlbWVudCA9IF9iLmVsZW1lbnQsIHRyYWNrZXIgPSBfYi50cmFja2VyO1xuICAgICAgICAgICAgcm9vdFRyYWNrZXIgPSB0cmFja2VyO1xuICAgICAgICAgICAgcmVuZGVyKGVsZW1lbnQsIEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiB0cmFja2VyIH0pKTtcbiAgICAgICAgICAgIFBhaW50ZXIudG9nZ2xlQWxsQW5pbWF0aW9uKHsgdGFyZ2V0OiB0cmFja2VyLCBzZWxlY3RvcjogJ2Rpdi5hY2VTaXplcicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc2xvdCA9PT0gJ3NpZGVNZW51Jykge1xuICAgICAgICAgICAgdmFyIF9jID0gQXNzZW1ibGVyLmFzc2VtYmxlVUkoeyBjYW52YXM6IGNhbnZhcywgc2xvdEVsZW1lbnQ6IHNpZGVNZW51IH0pLCBlbGVtZW50ID0gX2MuZWxlbWVudCwgdHJhY2tlciA9IF9jLnRyYWNrZXI7XG4gICAgICAgICAgICByb290VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgICAgICByZW5kZXIoZWxlbWVudCwgQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHRyYWNrZXIgfSkpO1xuICAgICAgICAgICAgUGFpbnRlci50b2dnbGVBbGxBbmltYXRpb24oeyB0YXJnZXQ6IHRyYWNrZXIsIHNlbGVjdG9yOiAnZGl2LmFjZVNpemVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzbG90ID09PSAncGx1Z2lucycpIHtcbiAgICAgICAgICAgIHZhciBfZCA9IEFzc2VtYmxlci5hc3NlbWJsZVVJKHsgY2FudmFzOiBjYW52YXMsIHNsb3RFbGVtZW50OiBwbHVnaW5zIH0pLCBlbGVtZW50ID0gX2QuZWxlbWVudCwgdHJhY2tlciA9IF9kLnRyYWNrZXI7XG4gICAgICAgICAgICByb290VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhlbGVtZW50KTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWNrZXIpO1xuICAgICAgICAgICAgcmVuZGVyKGVsZW1lbnQsIEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiB0cmFja2VyIH0pKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRyYWNrZXIpO1xuICAgICAgICAgICAgUGFpbnRlci50b2dnbGVBbGxBbmltYXRpb24oeyB0YXJnZXQ6IHRyYWNrZXIsIHNlbGVjdG9yOiAnZGl2LmFjZVNpemVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhciBfZSA9IEFzc2VtYmxlci5hc3NlbWJsZVVJKHsgY2FudmFzOiBjYW52YXMsIHNsb3RFbGVtZW50OiBBQ0VWMkRPTS5sb2NhdGVFbGVtZW50KHsgdHJhY2tlcjogc2xvdCB9KSB9KSwgZWxlbWVudCA9IF9lLmVsZW1lbnQsIHRyYWNrZXIgPSBfZS50cmFja2VyO1xuICAgICAgICAgICAgcm9vdFRyYWNrZXIgPSB0cmFja2VyO1xuICAgICAgICAgICAgcmVuZGVyKGVsZW1lbnQsIEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiB0cmFja2VyIH0pKTtcbiAgICAgICAgICAgIFBhaW50ZXIudG9nZ2xlQWxsQW5pbWF0aW9uKHsgdGFyZ2V0OiB0cmFja2VyLCBzZWxlY3RvcjogJ2Rpdi5hY2VTaXplcicgfSk7XG4gICAgICAgIH1cbiAgICAgICAgTG9nZ2VyLmluZm8oeyBtZXNzYWdlOiAnVUkgcmVuZGVyZWQuJyB9KTtcbiAgICAgICAgcmV0dXJuIHJvb3RUcmFja2VyO1xuICAgIH1cbiAgICBlbHNlIHtcbiAgICAgICAgTG9nZ2VyLmVycm9yKHsgbWVzc2FnZTogJ1Jvb3QgZWxlbWVudCBub3QgZm91bmQnIH0pO1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG59O1xudmFyIHVubW91bnRVSSA9IGZ1bmN0aW9uIChfYSkge1xuICAgIHZhciB0cmFja2VyID0gX2EudHJhY2tlcjtcbiAgICB2YXIgZWxlbWVudFRvUmVtb3ZlID0gQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHRyYWNrZXIgfSk7XG4gICAgaWYgKGVsZW1lbnRUb1JlbW92ZSAmJiBlbGVtZW50VG9SZW1vdmUucGFyZW50RWxlbWVudCkge1xuICAgICAgICBQYWludGVyLnRvZ2dsZUFsbEFuaW1hdGlvbih7IHRhcmdldDogdHJhY2tlciwgc2VsZWN0b3I6ICdkaXYuYWNlU2l6ZXInIH0pO1xuICAgICAgICBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIChfYSA9IGVsZW1lbnRUb1JlbW92ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQ2hpbGQoZWxlbWVudFRvUmVtb3ZlKTtcbiAgICAgICAgfSwgVmFyaWFibGUuQU5JTUFUSU9OX0RVUkFUSU9OKTtcbiAgICAgICAgTG9nZ2VyLmluZm8oeyBtZXNzYWdlOiAnVUkgdW5tb3VudGVkLicgfSk7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBMb2dnZXIuZXJyb3IoeyBtZXNzYWdlOiAnRWxlbWVudCB0byB1bm1vdW50IG5vdCBmb3VuZCBvciBwYXJlbnQgZWxlbWVudCBpcyBtaXNzaW5nLicgfSk7XG4gICAgfVxufTtcbmV4cG9ydCB2YXIgTWFuYWdlciA9IHtcbiAgICByZW5kZXJVSTogcmVuZGVyVUksXG4gICAgdW5tb3VudFVJOiB1bm1vdW50VUlcbn07XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/ui/Manager.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa65daea38fa8660c1c5")
/******/ })();
/******/ 
/******/ }
);