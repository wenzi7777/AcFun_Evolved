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

/***/ "./src/core/api/Variable.ts":
/*!**********************************!*\
  !*** ./src/core/api/Variable.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/ACEV2Toast */ \"./src/plugins/ACEV2Toast.ts\");\n/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./I18n */ \"./src/core/api/I18n.ts\");\n\n\n\n\nvar Variable = /** @class */ (function () {\n    function Variable() {\n        this.ANIMATION_DURATION = 1000 * .2;\n        this.TOAST_DURATION = 1000 * 2;\n        this.DEBOUNCE_DURATION = 1000 * .5;\n        this.MASTER_MANIFEST = {\n            icon: \"\",\n            name: 'RuntimeCalled',\n            id: '@wenzi7777/acev2_runtime',\n            versions: [_Version__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFullVersion()],\n            description: 'AcFun Evolved Runtime V2.',\n            createdAt: new Date('2024-08-09').getTime() + '',\n            updatedAt: new Date().getTime() + '',\n            author: 'wenzi7777',\n            copyright: '(c)2024 wenzi7777, licensed under the MIT License.',\n            requestedAPIs: [],\n            website: 'https://acev2.1205.moe/',\n            trigger: {\n                receiveHandler: true,\n                matches: ['*']\n            },\n            settings: []\n        };\n        this.PUBLIC_KEY = \"-----BEGIN PUBLIC KEY-----\\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAilgGwC2CNm3zSSUzaz7j\\ncIM08uKKGGmWs1yoQNUzBsgX/cnuVQsuPL79RDtt5P8/aPwKyzFKcd2kxIzKbLr/\\nXTOhPz6miVcRd86HiFJmEC1zO/9FQITMNcN4/xjGGnKZWa80su7CpFdHkTLifLiO\\nP2U7qi/yiNOrjEfo4ymCjFToFBYQ2VQ6Te5mnQxvmK9arKwm/wT40OPk9H8YpJnx\\nZiPLyCCYhzOQCHHijlc/iI2oNw0UnqLJ4wDsBSnuePC9QWyz3QdV+o//AVZpjGq6\\nXWWtEOgGfY5nyOSzp19FbiVgbxV3QX8RWBP3ifPtJhv0D16X1joCELgnqtKbaVkG\\nL6+m0r+YSoZojY2HY0159PafKkYg5xhTTCLyXtsWscEFd/PK2sm4Ag/htuGYEX2n\\nHH9XGyi1oV/8zeFF4YKe5DlEyxy5KaBnRBGyo4YSfDZD4+PGTponUOaJc1iC/qPu\\nYnCFobD55bs2zlDWpJUNLaUIkijFWMwNbtqlRGp5wUnNrFdv8k6L2vR9fUnetxoO\\nxowBvt/quZbgpn5K/WVF8QML3dY4clPDGYvYceKPGVCdZUI+NTnfeeH45ldOYSin\\n3z+cDYEA7wQaPtu57mRRQOBVUaa5tCP43OJHtlsFjKJmvx4Iw2Z4OEUZZJThZcJG\\nyl8yJuhgZ/FJ6NU5dSVzRjkCAwEAAQ==\\n-----END PUBLIC KEY-----\";\n        this.PAGE_SIZE = 8;\n    }\n    Variable.prototype.basePluginRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/acev2_plugins/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2-plugins.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/acev2_plugins/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.bigManifestURL = function () {\n        return this.basePluginRepoURL() + 'bigManifest.json';\n    };\n    Variable.prototype.developerKitURL = function () {\n        return this.basePluginRepoURL() + 'developer-kit.zip';\n    };\n    Variable.prototype.pluginDownloadURL = function (_a) {\n        var manifest = _a.manifest;\n        return \"\".concat(this.basePluginRepoURL(), \"/\").concat(manifest.id, \"/\").concat(manifest.versions, \"/raw.json.tar.gz\");\n    };\n    return Variable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Variable());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvVmFyaWFibGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBZ0M7QUFDUTtBQUNVO0FBQ3hCO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QixnREFBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsb0RBQVcsaUJBQWlCLGtDQUFrQztBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMkRBQVUsYUFBYSxNQUFNLDZDQUFJLEtBQUssMkNBQTJDLEdBQUc7QUFDaEc7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy9jb3JlL2FwaS9WYXJpYWJsZS50cz8yMjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXJzaW9uIGZyb20gXCIuL1ZlcnNpb25cIjtcbmltcG9ydCBQcmVmZXJlbmNlcyBmcm9tIFwiLi9QcmVmZXJlbmNlc1wiO1xuaW1wb3J0IEFDRVYyVG9hc3QgZnJvbSBcIi4uLy4uL3BsdWdpbnMvQUNFVjJUb2FzdFwiO1xuaW1wb3J0IEkxOG4gZnJvbSBcIi4vSTE4blwiO1xudmFyIFZhcmlhYmxlID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFZhcmlhYmxlKCkge1xuICAgICAgICB0aGlzLkFOSU1BVElPTl9EVVJBVElPTiA9IDEwMDAgKiAuMjtcbiAgICAgICAgdGhpcy5UT0FTVF9EVVJBVElPTiA9IDEwMDAgKiAyO1xuICAgICAgICB0aGlzLkRFQk9VTkNFX0RVUkFUSU9OID0gMTAwMCAqIC41O1xuICAgICAgICB0aGlzLk1BU1RFUl9NQU5JRkVTVCA9IHtcbiAgICAgICAgICAgIGljb246IFwiXCIsXG4gICAgICAgICAgICBuYW1lOiAnUnVudGltZUNhbGxlZCcsXG4gICAgICAgICAgICBpZDogJ0B3ZW56aTc3NzcvYWNldjJfcnVudGltZScsXG4gICAgICAgICAgICB2ZXJzaW9uczogW1ZlcnNpb24uZ2V0RnVsbFZlcnNpb24oKV0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FjRnVuIEV2b2x2ZWQgUnVudGltZSBWMi4nLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnMjAyNC0wOC0wOScpLmdldFRpbWUoKSArICcnLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcnLFxuICAgICAgICAgICAgYXV0aG9yOiAnd2Vuemk3Nzc3JyxcbiAgICAgICAgICAgIGNvcHlyaWdodDogJyhjKTIwMjQgd2Vuemk3Nzc3LCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcbiAgICAgICAgICAgIHJlcXVlc3RlZEFQSXM6IFtdLFxuICAgICAgICAgICAgd2Vic2l0ZTogJ2h0dHBzOi8vYWNldjIuMTIwNS5tb2UvJyxcbiAgICAgICAgICAgIHRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICByZWNlaXZlSGFuZGxlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzOiBbJyonXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldHRpbmdzOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlBVQkxJQ19LRVkgPSBcIi0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXFxuTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFpbGdHd0MyQ05tM3pTU1V6YXo3alxcbmNJTTA4dUtLR0dtV3MxeW9RTlV6QnNnWC9jbnVWUXN1UEw3OVJEdHQ1UDgvYVB3S3l6RktjZDJreEl6S2JMci9cXG5YVE9oUHo2bWlWY1JkODZIaUZKbUVDMXpPLzlGUUlUTU5jTjQveGpHR25LWldhODBzdTdDcEZkSGtUTGlmTGlPXFxuUDJVN3FpL3lpTk9yakVmbzR5bUNqRlRvRkJZUTJWUTZUZTVtblF4dm1LOWFyS3dtL3dUNDBPUGs5SDhZcEpueFxcblppUEx5Q0NZaHpPUUNISGlqbGMvaUkyb053MFVucUxKNHdEc0JTbnVlUEM5UVd5ejNRZFYrby8vQVZacGpHcTZcXG5YV1d0RU9nR2ZZNW55T1N6cDE5RmJpVmdieFYzUVg4UldCUDNpZlB0Smh2MEQxNlgxam9DRUxnbnF0S2JhVmtHXFxuTDYrbTByK1lTb1pvalkySFkwMTU5UGFmS2tZZzV4aFRUQ0x5WHRzV3NjRUZkL1BLMnNtNEFnL2h0dUdZRVgyblxcbkhIOVhHeWkxb1YvOHplRkY0WUtlNURsRXl4eTVLYUJuUkJHeW80WVNmRFpENCtQR1Rwb25VT2FKYzFpQy9xUHVcXG5ZbkNGb2JENTViczJ6bERXcEpVTkxhVUlraWpGV013TmJ0cWxSR3A1d1VuTnJGZHY4azZMMnZSOWZVbmV0eG9PXFxueG93QnZ0L3F1WmJncG41Sy9XVkY4UU1MM2RZNGNsUERHWXZZY2VLUEdWQ2RaVUkrTlRuZmVlSDQ1bGRPWVNpblxcbjN6K2NEWUVBN3dRYVB0dTU3bVJSUU9CVlVhYTV0Q1A0M09KSHRsc0ZqS0ptdng0SXcyWjRPRVVaWkpUaFpjSkdcXG55bDh5SnVoZ1ovRko2TlU1ZFNWelJqa0NBd0VBQVE9PVxcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLVwiO1xuICAgICAgICB0aGlzLlBBR0VfU0laRSA9IDg7XG4gICAgfVxuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5iYXNlUGx1Z2luUmVwb1VSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IFByZWZlcmVuY2VzLmdldFByZWZlcmVuY2UoeyBjYXRlZ29yeTogJ2dlbmVyYWwnLCBrOiAnc291cmNlJyB9KTtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2dpdGh1YicpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlbnppNzc3Ny9hY2V2Ml9wbHVnaW5zL21haW4vJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09ICdjbG91ZGZsYXJlJykge1xuICAgICAgICAgICAgcmV0dXJuICdodHRwczovL2FjZXYyLXBsdWdpbnMuMTIwNS5tb2UnO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2pzZGVsaXZyJykge1xuICAgICAgICAgICAgcmV0dXJuICdodHRwczovL2Nkbi5qc2RlbGl2ci5uZXQvZ2gvd2Vuemk3Nzc3L2FjZXYyX3BsdWdpbnMvQG1haW4vJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIEFDRVYyVG9hc3Quc2hvd1RvYXN0KHsgdGV4dDogSTE4bi50KHsga2V5OiAnaW52YWxpZC1zb3VyY2UtcGxlYXNlLXNlbGVjdC1hZ2FpbicgfSkgfSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5iaWdNYW5pZmVzdFVSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVBsdWdpblJlcG9VUkwoKSArICdiaWdNYW5pZmVzdC5qc29uJztcbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5kZXZlbG9wZXJLaXRVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VQbHVnaW5SZXBvVVJMKCkgKyAnZGV2ZWxvcGVyLWtpdC56aXAnO1xuICAgIH07XG4gICAgVmFyaWFibGUucHJvdG90eXBlLnBsdWdpbkRvd25sb2FkVVJMID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtYW5pZmVzdCA9IF9hLm1hbmlmZXN0O1xuICAgICAgICByZXR1cm4gXCJcIi5jb25jYXQodGhpcy5iYXNlUGx1Z2luUmVwb1VSTCgpLCBcIi9cIikuY29uY2F0KG1hbmlmZXN0LmlkLCBcIi9cIikuY29uY2F0KG1hbmlmZXN0LnZlcnNpb25zLCBcIi9yYXcuanNvbi50YXIuZ3pcIik7XG4gICAgfTtcbiAgICByZXR1cm4gVmFyaWFibGU7XG59KCkpO1xuZXhwb3J0IGRlZmF1bHQgbmV3IFZhcmlhYmxlKCk7XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/core/api/Variable.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("1b51fb714a3b35cab636")
/******/ })();
/******/ 
/******/ }
);