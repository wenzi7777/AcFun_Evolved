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

/***/ "./src/core/api/ReleaseTracker.ts":
/*!****************************************!*\
  !*** ./src/core/api/ReleaseTracker.ts ***!
  \****************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\nvar ReleaseTracker = /** @class */ (function () {\n    function ReleaseTracker() {\n    }\n    ReleaseTracker.prototype.getPluginLatestVersion = function (_a) {\n        var manifest = _a.manifest;\n        return manifest.versions[manifest.versions.length - 1];\n    };\n    return ReleaseTracker;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReleaseTracker());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvUmVsZWFzZVRyYWNrZXIudHMiLCJtYXBwaW5ncyI6Ijs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsb0JBQW9CLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY2Z1bl9ldm9sdmVkLy4vc3JjL2NvcmUvYXBpL1JlbGVhc2VUcmFja2VyLnRzP2Y5YjYiXSwic291cmNlc0NvbnRlbnQiOlsidmFyIFJlbGVhc2VUcmFja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbGVhc2VUcmFja2VyKCkge1xuICAgIH1cbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUuZ2V0UGx1Z2luTGF0ZXN0VmVyc2lvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgcmV0dXJuIG1hbmlmZXN0LnZlcnNpb25zW21hbmlmZXN0LnZlcnNpb25zLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgcmV0dXJuIFJlbGVhc2VUcmFja2VyO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBSZWxlYXNlVHJhY2tlcigpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/api/ReleaseTracker.ts\n");

/***/ }),

/***/ "./src/core/api/Variable.ts":
/*!**********************************!*\
  !*** ./src/core/api/Variable.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/ACEV2Toast */ \"./src/plugins/ACEV2Toast.ts\");\n/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./I18n */ \"./src/core/api/I18n.ts\");\n/* harmony import */ var _ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReleaseTracker */ \"./src/core/api/ReleaseTracker.ts\");\n\n\n\n\n\nvar Variable = /** @class */ (function () {\n    function Variable() {\n        this.ANIMATION_DURATION = 1000 * .2;\n        this.TOAST_DURATION = 1000 * 2;\n        this.DEBOUNCE_DURATION = 1000 * .5;\n        this.MASTER_MANIFEST = {\n            icon: \"\",\n            name: 'RuntimeCalled',\n            id: '@wenzi7777/acev2_runtime',\n            versions: [_Version__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFullVersion()],\n            description: 'AcFun Evolved Runtime V2.',\n            createdAt: new Date('2024-08-09').getTime() + '',\n            updatedAt: new Date().getTime() + '',\n            author: 'wenzi7777',\n            copyright: '(c)2024 wenzi7777, licensed under the MIT License.',\n            requestedAPIs: [],\n            website: 'https://acev2.1205.moe/',\n            trigger: {\n                receiveHandler: true,\n                matches: ['*']\n            },\n            settings: []\n        };\n        this.PUBLIC_KEY = \"-----BEGIN PUBLIC KEY-----\\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAilgGwC2CNm3zSSUzaz7j\\ncIM08uKKGGmWs1yoQNUzBsgX/cnuVQsuPL79RDtt5P8/aPwKyzFKcd2kxIzKbLr/\\nXTOhPz6miVcRd86HiFJmEC1zO/9FQITMNcN4/xjGGnKZWa80su7CpFdHkTLifLiO\\nP2U7qi/yiNOrjEfo4ymCjFToFBYQ2VQ6Te5mnQxvmK9arKwm/wT40OPk9H8YpJnx\\nZiPLyCCYhzOQCHHijlc/iI2oNw0UnqLJ4wDsBSnuePC9QWyz3QdV+o//AVZpjGq6\\nXWWtEOgGfY5nyOSzp19FbiVgbxV3QX8RWBP3ifPtJhv0D16X1joCELgnqtKbaVkG\\nL6+m0r+YSoZojY2HY0159PafKkYg5xhTTCLyXtsWscEFd/PK2sm4Ag/htuGYEX2n\\nHH9XGyi1oV/8zeFF4YKe5DlEyxy5KaBnRBGyo4YSfDZD4+PGTponUOaJc1iC/qPu\\nYnCFobD55bs2zlDWpJUNLaUIkijFWMwNbtqlRGp5wUnNrFdv8k6L2vR9fUnetxoO\\nxowBvt/quZbgpn5K/WVF8QML3dY4clPDGYvYceKPGVCdZUI+NTnfeeH45ldOYSin\\n3z+cDYEA7wQaPtu57mRRQOBVUaa5tCP43OJHtlsFjKJmvx4Iw2Z4OEUZZJThZcJG\\nyl8yJuhgZ/FJ6NU5dSVzRjkCAwEAAQ==\\n-----END PUBLIC KEY-----\";\n        this.PAGE_SIZE = 8;\n    }\n    Variable.prototype.basePluginRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/acev2_plugins/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2-plugins.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/acev2_plugins/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.bigManifestURL = function () {\n        return this.basePluginRepoURL() + 'bigManifest.json';\n    };\n    Variable.prototype.developerKitURL = function () {\n        return this.basePluginRepoURL() + 'developer-kit.zip';\n    };\n    Variable.prototype.pluginDownloadURL = function (_a) {\n        var manifest = _a.manifest;\n        return \"\".concat(this.basePluginRepoURL(), \"/\").concat(manifest.id, \"/\").concat(_ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getPluginLatestVersion({ manifest: manifest }), \"/raw.json.tar.gz\");\n    };\n    return Variable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Variable());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvVmFyaWFibGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1E7QUFDVTtBQUN4QjtBQUNvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFXLGlCQUFpQixrQ0FBa0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFVLGFBQWEsTUFBTSw2Q0FBSSxLQUFLLDJDQUEyQyxHQUFHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0ZBQXdGLHVEQUFjLDBCQUEwQixvQkFBb0I7QUFDcEo7QUFDQTtBQUNBLENBQUM7QUFDRCxpRUFBZSxjQUFjLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9hY2Z1bl9ldm9sdmVkLy4vc3JjL2NvcmUvYXBpL1ZhcmlhYmxlLnRzPzIyNWEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFZlcnNpb24gZnJvbSBcIi4vVmVyc2lvblwiO1xuaW1wb3J0IFByZWZlcmVuY2VzIGZyb20gXCIuL1ByZWZlcmVuY2VzXCI7XG5pbXBvcnQgQUNFVjJUb2FzdCBmcm9tIFwiLi4vLi4vcGx1Z2lucy9BQ0VWMlRvYXN0XCI7XG5pbXBvcnQgSTE4biBmcm9tIFwiLi9JMThuXCI7XG5pbXBvcnQgUmVsZWFzZVRyYWNrZXIgZnJvbSBcIi4vUmVsZWFzZVRyYWNrZXJcIjtcbnZhciBWYXJpYWJsZSA9IC8qKiBAY2xhc3MgKi8gKGZ1bmN0aW9uICgpIHtcbiAgICBmdW5jdGlvbiBWYXJpYWJsZSgpIHtcbiAgICAgICAgdGhpcy5BTklNQVRJT05fRFVSQVRJT04gPSAxMDAwICogLjI7XG4gICAgICAgIHRoaXMuVE9BU1RfRFVSQVRJT04gPSAxMDAwICogMjtcbiAgICAgICAgdGhpcy5ERUJPVU5DRV9EVVJBVElPTiA9IDEwMDAgKiAuNTtcbiAgICAgICAgdGhpcy5NQVNURVJfTUFOSUZFU1QgPSB7XG4gICAgICAgICAgICBpY29uOiBcIlwiLFxuICAgICAgICAgICAgbmFtZTogJ1J1bnRpbWVDYWxsZWQnLFxuICAgICAgICAgICAgaWQ6ICdAd2Vuemk3Nzc3L2FjZXYyX3J1bnRpbWUnLFxuICAgICAgICAgICAgdmVyc2lvbnM6IFtWZXJzaW9uLmdldEZ1bGxWZXJzaW9uKCldLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246ICdBY0Z1biBFdm9sdmVkIFJ1bnRpbWUgVjIuJyxcbiAgICAgICAgICAgIGNyZWF0ZWRBdDogbmV3IERhdGUoJzIwMjQtMDgtMDknKS5nZXRUaW1lKCkgKyAnJyxcbiAgICAgICAgICAgIHVwZGF0ZWRBdDogbmV3IERhdGUoKS5nZXRUaW1lKCkgKyAnJyxcbiAgICAgICAgICAgIGF1dGhvcjogJ3dlbnppNzc3NycsXG4gICAgICAgICAgICBjb3B5cmlnaHQ6ICcoYykyMDI0IHdlbnppNzc3NywgbGljZW5zZWQgdW5kZXIgdGhlIE1JVCBMaWNlbnNlLicsXG4gICAgICAgICAgICByZXF1ZXN0ZWRBUElzOiBbXSxcbiAgICAgICAgICAgIHdlYnNpdGU6ICdodHRwczovL2FjZXYyLjEyMDUubW9lLycsXG4gICAgICAgICAgICB0cmlnZ2VyOiB7XG4gICAgICAgICAgICAgICAgcmVjZWl2ZUhhbmRsZXI6IHRydWUsXG4gICAgICAgICAgICAgICAgbWF0Y2hlczogWycqJ11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBzZXR0aW5nczogW11cbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5QVUJMSUNfS0VZID0gXCItLS0tLUJFR0lOIFBVQkxJQyBLRVktLS0tLVxcbk1JSUNJakFOQmdrcWhraUc5dzBCQVFFRkFBT0NBZzhBTUlJQ0NnS0NBZ0VBaWxnR3dDMkNObTN6U1NVemF6N2pcXG5jSU0wOHVLS0dHbVdzMXlvUU5VekJzZ1gvY251VlFzdVBMNzlSRHR0NVA4L2FQd0t5ekZLY2Qya3hJektiTHIvXFxuWFRPaFB6Nm1pVmNSZDg2SGlGSm1FQzF6Ty85RlFJVE1OY040L3hqR0duS1pXYTgwc3U3Q3BGZEhrVExpZkxpT1xcblAyVTdxaS95aU5PcmpFZm80eW1DakZUb0ZCWVEyVlE2VGU1bW5ReHZtSzlhckt3bS93VDQwT1BrOUg4WXBKbnhcXG5aaVBMeUNDWWh6T1FDSEhpamxjL2lJMm9OdzBVbnFMSjR3RHNCU251ZVBDOVFXeXozUWRWK28vL0FWWnBqR3E2XFxuWFdXdEVPZ0dmWTVueU9TenAxOUZiaVZnYnhWM1FYOFJXQlAzaWZQdEpodjBEMTZYMWpvQ0VMZ25xdEtiYVZrR1xcbkw2K20wcitZU29ab2pZMkhZMDE1OVBhZktrWWc1eGhUVENMeVh0c1dzY0VGZC9QSzJzbTRBZy9odHVHWUVYMm5cXG5ISDlYR3lpMW9WLzh6ZUZGNFlLZTVEbEV5eHk1S2FCblJCR3lvNFlTZkRaRDQrUEdUcG9uVU9hSmMxaUMvcVB1XFxuWW5DRm9iRDU1YnMyemxEV3BKVU5MYVVJa2lqRldNd05idHFsUkdwNXdVbk5yRmR2OGs2TDJ2UjlmVW5ldHhvT1xcbnhvd0J2dC9xdVpiZ3BuNUsvV1ZGOFFNTDNkWTRjbFBER1l2WWNlS1BHVkNkWlVJK05UbmZlZUg0NWxkT1lTaW5cXG4zeitjRFlFQTd3UWFQdHU1N21SUlFPQlZVYWE1dENQNDNPSkh0bHNGaktKbXZ4NEl3Mlo0T0VVWlpKVGhaY0pHXFxueWw4eUp1aGdaL0ZKNk5VNWRTVnpSamtDQXdFQUFRPT1cXG4tLS0tLUVORCBQVUJMSUMgS0VZLS0tLS1cIjtcbiAgICAgICAgdGhpcy5QQUdFX1NJWkUgPSA4O1xuICAgIH1cbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuYmFzZVBsdWdpblJlcG9VUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3NvdXJjZScgfSk7XG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdnaXRodWInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93ZW56aTc3NzcvYWNldjJfcGx1Z2lucy9tYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSAnY2xvdWRmbGFyZScpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9hY2V2Mi1wbHVnaW5zLjEyMDUubW9lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09ICdqc2RlbGl2cicpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dlbnppNzc3Ny9hY2V2Ml9wbHVnaW5zL0BtYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBQ0VWMlRvYXN0LnNob3dUb2FzdCh7IHRleHQ6IEkxOG4udCh7IGtleTogJ2ludmFsaWQtc291cmNlLXBsZWFzZS1zZWxlY3QtYWdhaW4nIH0pIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuYmlnTWFuaWZlc3RVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VQbHVnaW5SZXBvVVJMKCkgKyAnYmlnTWFuaWZlc3QuanNvbic7XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuZGV2ZWxvcGVyS2l0VVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUGx1Z2luUmVwb1VSTCgpICsgJ2RldmVsb3Blci1raXQuemlwJztcbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5wbHVnaW5Eb3dubG9hZFVSTCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuYmFzZVBsdWdpblJlcG9VUkwoKSwgXCIvXCIpLmNvbmNhdChtYW5pZmVzdC5pZCwgXCIvXCIpLmNvbmNhdChSZWxlYXNlVHJhY2tlci5nZXRQbHVnaW5MYXRlc3RWZXJzaW9uKHsgbWFuaWZlc3Q6IG1hbmlmZXN0IH0pLCBcIi9yYXcuanNvbi50YXIuZ3pcIik7XG4gICAgfTtcbiAgICByZXR1cm4gVmFyaWFibGU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFZhcmlhYmxlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/api/Variable.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("45a97891e4ad0c95628a")
/******/ })();
/******/ 
/******/ }
);