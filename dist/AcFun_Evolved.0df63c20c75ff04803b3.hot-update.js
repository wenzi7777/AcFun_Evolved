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

/***/ "./src/core/api/Version.ts":
/*!*********************************!*\
  !*** ./src/core/api/Version.ts ***!
  \*********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar Version = /** @class */ (function () {\n    function Version() {\n        this.currentVersion = '2.0.0';\n        this.versionTag = 'Developer Beta';\n        this.environment = 'Development';\n    }\n    Version.prototype.getCurrentVersion = function () {\n        return this.currentVersion + this.versionTag;\n    };\n    Version.prototype.getVersionTag = function () {\n        return this.versionTag;\n    };\n    Version.prototype.getEnvironment = function () {\n        return this.environment;\n    };\n    Version.prototype.getFullVersion = function () {\n        return this.currentVersion + ' ' + this.environment + ' ' + this.versionTag;\n    };\n    Version.prototype.setCurrentVersion = function (_a) {\n        var version = _a.version;\n        this.currentVersion = version;\n    };\n    Version.prototype.setVersionTag = function (_a) {\n        var tag = _a.tag;\n        this.versionTag = tag;\n    };\n    Version.prototype.setEnvironment = function (_a) {\n        var env = _a.env;\n        this.environment = env;\n    };\n    return Version;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Version());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvVmVyc2lvbi50cyIsIm1hcHBpbmdzIjoiOzs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsYUFBYSxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy9jb3JlL2FwaS9WZXJzaW9uLnRzPzFlZjUiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFZlcnNpb24gPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmVyc2lvbigpIHtcbiAgICAgICAgdGhpcy5jdXJyZW50VmVyc2lvbiA9ICcyLjAuMCc7XG4gICAgICAgIHRoaXMudmVyc2lvblRhZyA9ICdEZXZlbG9wZXIgQmV0YSc7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSAnRGV2ZWxvcG1lbnQnO1xuICAgIH1cbiAgICBWZXJzaW9uLnByb3RvdHlwZS5nZXRDdXJyZW50VmVyc2lvbiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuY3VycmVudFZlcnNpb24gKyB0aGlzLnZlcnNpb25UYWc7XG4gICAgfTtcbiAgICBWZXJzaW9uLnByb3RvdHlwZS5nZXRWZXJzaW9uVGFnID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy52ZXJzaW9uVGFnO1xuICAgIH07XG4gICAgVmVyc2lvbi5wcm90b3R5cGUuZ2V0RW52aXJvbm1lbnQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmVudmlyb25tZW50O1xuICAgIH07XG4gICAgVmVyc2lvbi5wcm90b3R5cGUuZ2V0RnVsbFZlcnNpb24gPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmN1cnJlbnRWZXJzaW9uICsgJyAnICsgdGhpcy5lbnZpcm9ubWVudCArICcgJyArIHRoaXMudmVyc2lvblRhZztcbiAgICB9O1xuICAgIFZlcnNpb24ucHJvdG90eXBlLnNldEN1cnJlbnRWZXJzaW9uID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB2ZXJzaW9uID0gX2EudmVyc2lvbjtcbiAgICAgICAgdGhpcy5jdXJyZW50VmVyc2lvbiA9IHZlcnNpb247XG4gICAgfTtcbiAgICBWZXJzaW9uLnByb3RvdHlwZS5zZXRWZXJzaW9uVGFnID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciB0YWcgPSBfYS50YWc7XG4gICAgICAgIHRoaXMudmVyc2lvblRhZyA9IHRhZztcbiAgICB9O1xuICAgIFZlcnNpb24ucHJvdG90eXBlLnNldEVudmlyb25tZW50ID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBlbnYgPSBfYS5lbnY7XG4gICAgICAgIHRoaXMuZW52aXJvbm1lbnQgPSBlbnY7XG4gICAgfTtcbiAgICByZXR1cm4gVmVyc2lvbjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgVmVyc2lvbigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/api/Version.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("987e13768cba147adead")
/******/ })();
/******/ 
/******/ }
);