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

/***/ "./src/plugins/ACEV2AboutUI.ts":
/*!*************************************!*\
  !*** ./src/plugins/ACEV2AboutUI.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _ui_Manager__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../ui/Manager */ \"./src/ui/Manager.tsx\");\n/* harmony import */ var _ui_assets_default_svg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/assets/default.svg */ \"./src/ui/assets/default.svg\");\n/* harmony import */ var _core_api_I18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../core/api/I18n */ \"./src/core/api/I18n.ts\");\n\n\n\nvar ACEV2AboutUI = /** @class */ (function () {\n    function ACEV2AboutUI() {\n        this.canvas = [];\n        this.tracker = '';\n    }\n    ACEV2AboutUI.prototype.updateCanvas = function (_a) {\n        var _this = this;\n        var manifest = _a.manifest;\n        var icon = manifest.icon;\n        var isSVG = icon.startsWith('<svg');\n        var isDefaultIcon = icon === 'default';\n        var src = isSVG ? icon : isDefaultIcon ? _ui_assets_default_svg__WEBPACK_IMPORTED_MODULE_1__[\"default\"] : icon;\n        this.canvas = [\n            {\n                type: 'sizer',\n                styleObject: {\n                    zIndex: 99,\n                    position: 'absolute',\n                    left: '50%',\n                    top: '50%',\n                    transform: 'translate(-50%, -50%)',\n                    maxWidth: '70vw',\n                    maxHeight: '60vh'\n                },\n                filled: true,\n                draggable: true,\n                children: [\n                    {\n                        type: 'sizer',\n                        styleObject: {\n                            display: 'flex',\n                            flexDirection: 'column',\n                            gap: '1vh',\n                            alignItems: 'center',\n                            justifyContent: 'space-around'\n                        },\n                        children: [\n                            {\n                                type: 'sizer',\n                                size: { width: 10, height: 10 },\n                                children: [\n                                    {\n                                        type: 'image',\n                                        asHTML: isSVG,\n                                        src: src\n                                    }\n                                ]\n                            },\n                            {\n                                type: 'sizer',\n                                children: [\n                                    {\n                                        type: 'text',\n                                        text: manifest.description\n                                    }\n                                ]\n                            },\n                            {\n                                type: 'sizer',\n                                children: [\n                                    {\n                                        type: 'text',\n                                        text: manifest.name + ' version ' + manifest.versions[manifest.versions.length - 1]\n                                    }\n                                ]\n                            },\n                            {\n                                type: 'sizer',\n                                children: [\n                                    {\n                                        type: 'text',\n                                        text: manifest.author + ' | ' + manifest.id\n                                    }\n                                ]\n                            },\n                            {\n                                type: 'sizer',\n                                children: [\n                                    {\n                                        type: 'text',\n                                        text: manifest.copyright\n                                    }\n                                ]\n                            },\n                            {\n                                type: 'sizer',\n                                size: {\n                                    width: 8,\n                                    height: 3\n                                },\n                                children: [{\n                                        type: 'button',\n                                        text: _core_api_I18n__WEBPACK_IMPORTED_MODULE_2__[\"default\"].t({ key: 'ok' }),\n                                        actions: [function () { return _this.destroy(); }]\n                                    }]\n                            }\n                        ]\n                    }\n                ]\n            }\n        ];\n    };\n    ACEV2AboutUI.prototype.showAboutUI = function (_a) {\n        var manifest = _a.manifest;\n        this.updateCanvas({ manifest: manifest });\n        this.draw();\n    };\n    ACEV2AboutUI.prototype.existed = function () {\n        return this.tracker !== '';\n    };\n    ACEV2AboutUI.prototype.draw = function () {\n        if (!this.existed()) {\n            this.tracker = _ui_Manager__WEBPACK_IMPORTED_MODULE_0__.Manager.renderUI({ canvas: this.canvas, slot: \"plugins\" });\n        }\n        else {\n            this.destroy();\n            this.draw();\n        }\n    };\n    ACEV2AboutUI.prototype.destroy = function () {\n        if (this.existed()) {\n            _ui_Manager__WEBPACK_IMPORTED_MODULE_0__.Manager.unmountUI({ tracker: this.tracker });\n            this.tracker = '';\n        }\n    };\n    return ACEV2AboutUI;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ACEV2AboutUI());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcGx1Z2lucy9BQ0VWMkFib3V0VUkudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUF3QztBQUNXO0FBQ2Y7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUFpRCw4REFBVztBQUM1RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLHVCQUF1QjtBQUMvRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkI7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUM7QUFDakM7QUFDQTtBQUNBLDhDQUE4QyxzREFBSSxLQUFLLFdBQVc7QUFDbEUsZ0VBQWdFLHlCQUF5QjtBQUN6RixxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQixnREFBTyxZQUFZLHNDQUFzQztBQUNwRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxnREFBTyxhQUFhLHVCQUF1QjtBQUN2RDtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxrQkFBa0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FjZnVuX2V2b2x2ZWQvLi9zcmMvcGx1Z2lucy9BQ0VWMkFib3V0VUkudHM/MmZiOCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBNYW5hZ2VyIH0gZnJvbSBcIi4uL3VpL01hbmFnZXJcIjtcbmltcG9ydCBkZWZhdWx0SWNvbiBmcm9tIFwiLi4vdWkvYXNzZXRzL2RlZmF1bHQuc3ZnXCI7XG5pbXBvcnQgSTE4biBmcm9tIFwiLi4vY29yZS9hcGkvSTE4blwiO1xudmFyIEFDRVYyQWJvdXRVSSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBBQ0VWMkFib3V0VUkoKSB7XG4gICAgICAgIHRoaXMuY2FudmFzID0gW107XG4gICAgICAgIHRoaXMudHJhY2tlciA9ICcnO1xuICAgIH1cbiAgICBBQ0VWMkFib3V0VUkucHJvdG90eXBlLnVwZGF0ZUNhbnZhcyA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgdmFyIGljb24gPSBtYW5pZmVzdC5pY29uO1xuICAgICAgICB2YXIgaXNTVkcgPSBpY29uLnN0YXJ0c1dpdGgoJzxzdmcnKTtcbiAgICAgICAgdmFyIGlzRGVmYXVsdEljb24gPSBpY29uID09PSAnZGVmYXVsdCc7XG4gICAgICAgIHZhciBzcmMgPSBpc1NWRyA/IGljb24gOiBpc0RlZmF1bHRJY29uID8gZGVmYXVsdEljb24gOiBpY29uO1xuICAgICAgICB0aGlzLmNhbnZhcyA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0eXBlOiAnc2l6ZXInLFxuICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgIHpJbmRleDogOTksXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiAnYWJzb2x1dGUnLFxuICAgICAgICAgICAgICAgICAgICBsZWZ0OiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgdG9wOiAnNTAlJyxcbiAgICAgICAgICAgICAgICAgICAgdHJhbnNmb3JtOiAndHJhbnNsYXRlKC01MCUsIC01MCUpJyxcbiAgICAgICAgICAgICAgICAgICAgbWF4V2lkdGg6ICc3MHZ3JyxcbiAgICAgICAgICAgICAgICAgICAgbWF4SGVpZ2h0OiAnNjB2aCdcbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIGZpbGxlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICBkcmFnZ2FibGU6IHRydWUsXG4gICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NpemVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlT2JqZWN0OiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogJ2ZsZXgnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZsZXhEaXJlY3Rpb246ICdjb2x1bW4nLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGdhcDogJzF2aCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogJ2NlbnRlcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganVzdGlmeUNvbnRlbnQ6ICdzcGFjZS1hcm91bmQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzaXplcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNpemU6IHsgd2lkdGg6IDEwLCBoZWlnaHQ6IDEwIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ2ltYWdlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhc0hUTUw6IGlzU1ZHLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNyYzogc3JjXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3NpemVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAndGV4dCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dDogbWFuaWZlc3QuZGVzY3JpcHRpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2l6ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYW5pZmVzdC5uYW1lICsgJyB2ZXJzaW9uICcgKyBtYW5pZmVzdC52ZXJzaW9uc1ttYW5pZmVzdC52ZXJzaW9ucy5sZW5ndGggLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICdzaXplcicsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3RleHQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRleHQ6IG1hbmlmZXN0LmF1dGhvciArICcgfCAnICsgbWFuaWZlc3QuaWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2l6ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6ICd0ZXh0JyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBtYW5pZmVzdC5jb3B5cmlnaHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnc2l6ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaXplOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aWR0aDogOCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhlaWdodDogM1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiAnYnV0dG9uJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0ZXh0OiBJMThuLnQoeyBrZXk6ICdvaycgfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aW9uczogW2Z1bmN0aW9uICgpIHsgcmV0dXJuIF90aGlzLmRlc3Ryb3koKTsgfV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICBdO1xuICAgIH07XG4gICAgQUNFVjJBYm91dFVJLnByb3RvdHlwZS5zaG93QWJvdXRVSSA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgdGhpcy51cGRhdGVDYW52YXMoeyBtYW5pZmVzdDogbWFuaWZlc3QgfSk7XG4gICAgICAgIHRoaXMuZHJhdygpO1xuICAgIH07XG4gICAgQUNFVjJBYm91dFVJLnByb3RvdHlwZS5leGlzdGVkID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy50cmFja2VyICE9PSAnJztcbiAgICB9O1xuICAgIEFDRVYyQWJvdXRVSS5wcm90b3R5cGUuZHJhdyA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmV4aXN0ZWQoKSkge1xuICAgICAgICAgICAgdGhpcy50cmFja2VyID0gTWFuYWdlci5yZW5kZXJVSSh7IGNhbnZhczogdGhpcy5jYW52YXMsIHNsb3Q6IFwicGx1Z2luc1wiIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5kZXN0cm95KCk7XG4gICAgICAgICAgICB0aGlzLmRyYXcoKTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgQUNFVjJBYm91dFVJLnByb3RvdHlwZS5kZXN0cm95ID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBpZiAodGhpcy5leGlzdGVkKCkpIHtcbiAgICAgICAgICAgIE1hbmFnZXIudW5tb3VudFVJKHsgdHJhY2tlcjogdGhpcy50cmFja2VyIH0pO1xuICAgICAgICAgICAgdGhpcy50cmFja2VyID0gJyc7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIHJldHVybiBBQ0VWMkFib3V0VUk7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IEFDRVYyQWJvdXRVSSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/plugins/ACEV2AboutUI.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("10e586e1e6be9cba75dc")
/******/ })();
/******/ 
/******/ }
);