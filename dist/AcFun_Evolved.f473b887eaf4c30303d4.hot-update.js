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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   Manager: () => (/* binding */ Manager)\n/* harmony export */ });\n/* harmony import */ var preact__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! preact */ \"./node_modules/preact/dist/preact.module.js\");\n/* harmony import */ var _Assembler__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Assembler */ \"./src/ui/Assembler.tsx\");\n/* harmony import */ var _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api/Logger */ \"./src/core/api/Logger.ts\");\n/* harmony import */ var _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../core/api/ACEV2DOM */ \"./src/core/api/ACEV2DOM.ts\");\n/* harmony import */ var _Painter__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Painter */ \"./src/ui/Painter.tsx\");\n/* harmony import */ var _core_api_Variable__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../core/api/Variable */ \"./src/core/api/Variable.ts\");\n\n\n\n\n\n\nvar parent = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].createRoot();\nvar root = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.root });\nvar sideMenu = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.sideMenu });\nvar plugins = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: parent.plugins });\nvar renderUI = function (_a) {\n    var canvas = _a.canvas, slot = _a.slot;\n    var rootTracker;\n    if (root) {\n        console.log({ canvas: canvas, slot: slot });\n        if (slot === 'root') {\n            var _b = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: root }), element = _b.element, tracker = _b.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else if (slot === 'sideMenu') {\n            var _c = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: sideMenu }), element = _c.element, tracker = _c.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else if (slot === 'plugins') {\n            var _d = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: plugins }), element = _d.element, tracker = _d.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        else {\n            var _e = _Assembler__WEBPACK_IMPORTED_MODULE_1__.Assembler.assembleUI({ canvas: canvas, slotElement: _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: slot }) }), element = _e.element, tracker = _e.tracker;\n            rootTracker = tracker;\n            (0,preact__WEBPACK_IMPORTED_MODULE_0__.render)(element, _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker }));\n            _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        }\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info({ message: 'UI rendered.' });\n        return rootTracker;\n    }\n    else {\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error({ message: 'Root element not found' });\n        return null;\n    }\n};\nvar unmountUI = function (_a) {\n    var tracker = _a.tracker;\n    var elementToRemove = _core_api_ACEV2DOM__WEBPACK_IMPORTED_MODULE_3__[\"default\"].locateElement({ tracker: tracker });\n    if (elementToRemove && elementToRemove.parentElement) {\n        _Painter__WEBPACK_IMPORTED_MODULE_4__.Painter.toggleAllAnimation({ target: tracker, selector: 'div.aceSizer' });\n        setTimeout(function () {\n            var _a;\n            (_a = elementToRemove.parentElement) === null || _a === void 0 ? void 0 : _a.removeChild(elementToRemove);\n        }, _core_api_Variable__WEBPACK_IMPORTED_MODULE_5__[\"default\"].ANIMATION_DURATION);\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].info({ message: 'UI unmounted.' });\n    }\n    else {\n        _core_api_Logger__WEBPACK_IMPORTED_MODULE_2__[\"default\"].error({ message: 'Element to unmount not found or parent element is missing.' });\n    }\n};\nvar Manager = {\n    renderUI: renderUI,\n    unmountUI: unmountUI\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvdWkvTWFuYWdlci50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFnQztBQUNRO0FBQ0E7QUFDSTtBQUNSO0FBQ1E7QUFDNUMsYUFBYSwwREFBUTtBQUNyQixXQUFXLDBEQUFRLGlCQUFpQixzQkFBc0I7QUFDMUQsZUFBZSwwREFBUSxpQkFBaUIsMEJBQTBCO0FBQ2xFLGNBQWMsMERBQVEsaUJBQWlCLHlCQUF5QjtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiw0QkFBNEI7QUFDbEQ7QUFDQSxxQkFBcUIsaURBQVMsY0FBYyxtQ0FBbUM7QUFDL0U7QUFDQSxZQUFZLDhDQUFNLFVBQVUsMERBQVEsaUJBQWlCLGtCQUFrQjtBQUN2RSxZQUFZLDZDQUFPLHNCQUFzQiwyQ0FBMkM7QUFDcEY7QUFDQTtBQUNBLHFCQUFxQixpREFBUyxjQUFjLHVDQUF1QztBQUNuRjtBQUNBLFlBQVksOENBQU0sVUFBVSwwREFBUSxpQkFBaUIsa0JBQWtCO0FBQ3ZFLFlBQVksNkNBQU8sc0JBQXNCLDJDQUEyQztBQUNwRjtBQUNBO0FBQ0EscUJBQXFCLGlEQUFTLGNBQWMsc0NBQXNDO0FBQ2xGO0FBQ0EsWUFBWSw4Q0FBTSxVQUFVLDBEQUFRLGlCQUFpQixrQkFBa0I7QUFDdkUsWUFBWSw2Q0FBTyxzQkFBc0IsMkNBQTJDO0FBQ3BGO0FBQ0E7QUFDQSxxQkFBcUIsaURBQVMsY0FBYyw2QkFBNkIsMERBQVEsaUJBQWlCLGVBQWUsR0FBRztBQUNwSDtBQUNBLFlBQVksOENBQU0sVUFBVSwwREFBUSxpQkFBaUIsa0JBQWtCO0FBQ3ZFLFlBQVksNkNBQU8sc0JBQXNCLDJDQUEyQztBQUNwRjtBQUNBLFFBQVEsd0RBQU0sUUFBUSx5QkFBeUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3REFBTSxTQUFTLG1DQUFtQztBQUMxRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLDBEQUFRLGlCQUFpQixrQkFBa0I7QUFDckU7QUFDQSxRQUFRLDZDQUFPLHNCQUFzQiwyQ0FBMkM7QUFDaEY7QUFDQTtBQUNBO0FBQ0EsU0FBUyxFQUFFLDBEQUFRO0FBQ25CLFFBQVEsd0RBQU0sUUFBUSwwQkFBMEI7QUFDaEQ7QUFDQTtBQUNBLFFBQVEsd0RBQU0sU0FBUyx1RUFBdUU7QUFDOUY7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy91aS9NYW5hZ2VyLnRzeD83NDQ4Il0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlbmRlciB9IGZyb20gJ3ByZWFjdCc7XG5pbXBvcnQgeyBBc3NlbWJsZXIgfSBmcm9tICcuL0Fzc2VtYmxlcic7XG5pbXBvcnQgTG9nZ2VyIGZyb20gXCIuLi9jb3JlL2FwaS9Mb2dnZXJcIjtcbmltcG9ydCBBQ0VWMkRPTSBmcm9tICcuLi9jb3JlL2FwaS9BQ0VWMkRPTSc7XG5pbXBvcnQgeyBQYWludGVyIH0gZnJvbSBcIi4vUGFpbnRlclwiO1xuaW1wb3J0IFZhcmlhYmxlIGZyb20gXCIuLi9jb3JlL2FwaS9WYXJpYWJsZVwiO1xudmFyIHBhcmVudCA9IEFDRVYyRE9NLmNyZWF0ZVJvb3QoKTtcbnZhciByb290ID0gQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHBhcmVudC5yb290IH0pO1xudmFyIHNpZGVNZW51ID0gQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHBhcmVudC5zaWRlTWVudSB9KTtcbnZhciBwbHVnaW5zID0gQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHBhcmVudC5wbHVnaW5zIH0pO1xudmFyIHJlbmRlclVJID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIGNhbnZhcyA9IF9hLmNhbnZhcywgc2xvdCA9IF9hLnNsb3Q7XG4gICAgdmFyIHJvb3RUcmFja2VyO1xuICAgIGlmIChyb290KSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHsgY2FudmFzOiBjYW52YXMsIHNsb3Q6IHNsb3QgfSk7XG4gICAgICAgIGlmIChzbG90ID09PSAncm9vdCcpIHtcbiAgICAgICAgICAgIHZhciBfYiA9IEFzc2VtYmxlci5hc3NlbWJsZVVJKHsgY2FudmFzOiBjYW52YXMsIHNsb3RFbGVtZW50OiByb290IH0pLCBlbGVtZW50ID0gX2IuZWxlbWVudCwgdHJhY2tlciA9IF9iLnRyYWNrZXI7XG4gICAgICAgICAgICByb290VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgICAgICByZW5kZXIoZWxlbWVudCwgQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHRyYWNrZXIgfSkpO1xuICAgICAgICAgICAgUGFpbnRlci50b2dnbGVBbGxBbmltYXRpb24oeyB0YXJnZXQ6IHRyYWNrZXIsIHNlbGVjdG9yOiAnZGl2LmFjZVNpemVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzbG90ID09PSAnc2lkZU1lbnUnKSB7XG4gICAgICAgICAgICB2YXIgX2MgPSBBc3NlbWJsZXIuYXNzZW1ibGVVSSh7IGNhbnZhczogY2FudmFzLCBzbG90RWxlbWVudDogc2lkZU1lbnUgfSksIGVsZW1lbnQgPSBfYy5lbGVtZW50LCB0cmFja2VyID0gX2MudHJhY2tlcjtcbiAgICAgICAgICAgIHJvb3RUcmFja2VyID0gdHJhY2tlcjtcbiAgICAgICAgICAgIHJlbmRlcihlbGVtZW50LCBBQ0VWMkRPTS5sb2NhdGVFbGVtZW50KHsgdHJhY2tlcjogdHJhY2tlciB9KSk7XG4gICAgICAgICAgICBQYWludGVyLnRvZ2dsZUFsbEFuaW1hdGlvbih7IHRhcmdldDogdHJhY2tlciwgc2VsZWN0b3I6ICdkaXYuYWNlU2l6ZXInIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNsb3QgPT09ICdwbHVnaW5zJykge1xuICAgICAgICAgICAgdmFyIF9kID0gQXNzZW1ibGVyLmFzc2VtYmxlVUkoeyBjYW52YXM6IGNhbnZhcywgc2xvdEVsZW1lbnQ6IHBsdWdpbnMgfSksIGVsZW1lbnQgPSBfZC5lbGVtZW50LCB0cmFja2VyID0gX2QudHJhY2tlcjtcbiAgICAgICAgICAgIHJvb3RUcmFja2VyID0gdHJhY2tlcjtcbiAgICAgICAgICAgIHJlbmRlcihlbGVtZW50LCBBQ0VWMkRPTS5sb2NhdGVFbGVtZW50KHsgdHJhY2tlcjogdHJhY2tlciB9KSk7XG4gICAgICAgICAgICBQYWludGVyLnRvZ2dsZUFsbEFuaW1hdGlvbih7IHRhcmdldDogdHJhY2tlciwgc2VsZWN0b3I6ICdkaXYuYWNlU2l6ZXInIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFyIF9lID0gQXNzZW1ibGVyLmFzc2VtYmxlVUkoeyBjYW52YXM6IGNhbnZhcywgc2xvdEVsZW1lbnQ6IEFDRVYyRE9NLmxvY2F0ZUVsZW1lbnQoeyB0cmFja2VyOiBzbG90IH0pIH0pLCBlbGVtZW50ID0gX2UuZWxlbWVudCwgdHJhY2tlciA9IF9lLnRyYWNrZXI7XG4gICAgICAgICAgICByb290VHJhY2tlciA9IHRyYWNrZXI7XG4gICAgICAgICAgICByZW5kZXIoZWxlbWVudCwgQUNFVjJET00ubG9jYXRlRWxlbWVudCh7IHRyYWNrZXI6IHRyYWNrZXIgfSkpO1xuICAgICAgICAgICAgUGFpbnRlci50b2dnbGVBbGxBbmltYXRpb24oeyB0YXJnZXQ6IHRyYWNrZXIsIHNlbGVjdG9yOiAnZGl2LmFjZVNpemVyJyB9KTtcbiAgICAgICAgfVxuICAgICAgICBMb2dnZXIuaW5mbyh7IG1lc3NhZ2U6ICdVSSByZW5kZXJlZC4nIH0pO1xuICAgICAgICByZXR1cm4gcm9vdFRyYWNrZXI7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgICBMb2dnZXIuZXJyb3IoeyBtZXNzYWdlOiAnUm9vdCBlbGVtZW50IG5vdCBmb3VuZCcgfSk7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbn07XG52YXIgdW5tb3VudFVJID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgdmFyIHRyYWNrZXIgPSBfYS50cmFja2VyO1xuICAgIHZhciBlbGVtZW50VG9SZW1vdmUgPSBBQ0VWMkRPTS5sb2NhdGVFbGVtZW50KHsgdHJhY2tlcjogdHJhY2tlciB9KTtcbiAgICBpZiAoZWxlbWVudFRvUmVtb3ZlICYmIGVsZW1lbnRUb1JlbW92ZS5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgIFBhaW50ZXIudG9nZ2xlQWxsQW5pbWF0aW9uKHsgdGFyZ2V0OiB0cmFja2VyLCBzZWxlY3RvcjogJ2Rpdi5hY2VTaXplcicgfSk7XG4gICAgICAgIHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgKF9hID0gZWxlbWVudFRvUmVtb3ZlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmVDaGlsZChlbGVtZW50VG9SZW1vdmUpO1xuICAgICAgICB9LCBWYXJpYWJsZS5BTklNQVRJT05fRFVSQVRJT04pO1xuICAgICAgICBMb2dnZXIuaW5mbyh7IG1lc3NhZ2U6ICdVSSB1bm1vdW50ZWQuJyB9KTtcbiAgICB9XG4gICAgZWxzZSB7XG4gICAgICAgIExvZ2dlci5lcnJvcih7IG1lc3NhZ2U6ICdFbGVtZW50IHRvIHVubW91bnQgbm90IGZvdW5kIG9yIHBhcmVudCBlbGVtZW50IGlzIG1pc3NpbmcuJyB9KTtcbiAgICB9XG59O1xuZXhwb3J0IHZhciBNYW5hZ2VyID0ge1xuICAgIHJlbmRlclVJOiByZW5kZXJVSSxcbiAgICB1bm1vdW50VUk6IHVubW91bnRVSVxufTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/ui/Manager.tsx\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ff1db9b75e695c727572")
/******/ })();
/******/ 
/******/ }
);