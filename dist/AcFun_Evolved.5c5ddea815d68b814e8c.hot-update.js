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
/***/ (() => {

throw new Error("Module parse failed: Unexpected token (97:8)\nFile was processed with these loaders:\n * ./node_modules/ts-loader/index.js\nYou may need an additional loader to handle the result of these loaders.\n|         IO.openPageInNewTab({\n|             url: Variable.\n>         });\n|     };\n|     return ReleaseTracker;");

/***/ }),

/***/ "./src/core/api/Variable.ts":
/*!**********************************!*\
  !*** ./src/core/api/Variable.ts ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/ACEV2Toast */ \"./src/plugins/ACEV2Toast.ts\");\n/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./I18n */ \"./src/core/api/I18n.ts\");\n/* harmony import */ var _ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReleaseTracker */ \"./src/core/api/ReleaseTracker.ts\");\n\n\n\n\n\nvar Variable = /** @class */ (function () {\n    function Variable() {\n        this.ANIMATION_DURATION = 1000 * .2;\n        this.TOAST_DURATION = 1000 * 2;\n        this.DEBOUNCE_DURATION = 1000 * .5;\n        this.MASTER_MANIFEST = {\n            icon: \"\",\n            name: 'RuntimeCalled',\n            id: '@wenzi7777/acev2_runtime',\n            versions: [_Version__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFullVersion()],\n            description: 'AcFun Evolved Runtime V2.',\n            createdAt: new Date('2024-08-09').getTime() + '',\n            updatedAt: new Date().getTime() + '',\n            author: 'wenzi7777',\n            copyright: '(c)2024 wenzi7777, licensed under the MIT License.',\n            requestedAPIs: [],\n            website: 'https://acev2.1205.moe/',\n            trigger: {\n                receiveHandler: true,\n                matches: ['*']\n            },\n            settings: []\n        };\n        this.PUBLIC_KEY = \"-----BEGIN PUBLIC KEY-----\\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAilgGwC2CNm3zSSUzaz7j\\ncIM08uKKGGmWs1yoQNUzBsgX/cnuVQsuPL79RDtt5P8/aPwKyzFKcd2kxIzKbLr/\\nXTOhPz6miVcRd86HiFJmEC1zO/9FQITMNcN4/xjGGnKZWa80su7CpFdHkTLifLiO\\nP2U7qi/yiNOrjEfo4ymCjFToFBYQ2VQ6Te5mnQxvmK9arKwm/wT40OPk9H8YpJnx\\nZiPLyCCYhzOQCHHijlc/iI2oNw0UnqLJ4wDsBSnuePC9QWyz3QdV+o//AVZpjGq6\\nXWWtEOgGfY5nyOSzp19FbiVgbxV3QX8RWBP3ifPtJhv0D16X1joCELgnqtKbaVkG\\nL6+m0r+YSoZojY2HY0159PafKkYg5xhTTCLyXtsWscEFd/PK2sm4Ag/htuGYEX2n\\nHH9XGyi1oV/8zeFF4YKe5DlEyxy5KaBnRBGyo4YSfDZD4+PGTponUOaJc1iC/qPu\\nYnCFobD55bs2zlDWpJUNLaUIkijFWMwNbtqlRGp5wUnNrFdv8k6L2vR9fUnetxoO\\nxowBvt/quZbgpn5K/WVF8QML3dY4clPDGYvYceKPGVCdZUI+NTnfeeH45ldOYSin\\n3z+cDYEA7wQaPtu57mRRQOBVUaa5tCP43OJHtlsFjKJmvx4Iw2Z4OEUZZJThZcJG\\nyl8yJuhgZ/FJ6NU5dSVzRjkCAwEAAQ==\\n-----END PUBLIC KEY-----\";\n        this.PAGE_SIZE = 8;\n    }\n    Variable.prototype.baseSelfRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/AcFun-Evolved/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.basePluginRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/acev2_plugins/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2-plugins.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/acev2_plugins/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.bigManifestURL = function () {\n        return this.basePluginRepoURL() + 'bigManifest.json';\n    };\n    Variable.prototype.developerKitURL = function () {\n        return this.basePluginRepoURL() + 'developer-kit.zip';\n    };\n    Variable.prototype.pluginDownloadURL = function (_a) {\n        var manifest = _a.manifest;\n        return \"\".concat(this.basePluginRepoURL()).concat(manifest.id, \"/\").concat(_ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getPluginLatestVersion({ manifest: manifest }), \"/raw.json.tar.gz\");\n    };\n    Variable.prototype.getSelfLatestVersionManifestURL = function () {\n        return this.baseSelfRepoURL() + 'version.json';\n    };\n    Variable.prototype.getSelfLatestVersionURL = function () {\n        return this.baseSelfRepoURL() + 'version.json';\n    };\n    return Variable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Variable());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvVmFyaWFibGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1E7QUFDVTtBQUN4QjtBQUNvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFXLGlCQUFpQixrQ0FBa0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFVLGFBQWEsTUFBTSw2Q0FBSSxLQUFLLDJDQUEyQyxHQUFHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBVyxpQkFBaUIsa0NBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBVSxhQUFhLE1BQU0sNkNBQUksS0FBSywyQ0FBMkMsR0FBRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRix1REFBYywwQkFBMEIsb0JBQW9CO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy9jb3JlL2FwaS9WYXJpYWJsZS50cz8yMjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXJzaW9uIGZyb20gXCIuL1ZlcnNpb25cIjtcbmltcG9ydCBQcmVmZXJlbmNlcyBmcm9tIFwiLi9QcmVmZXJlbmNlc1wiO1xuaW1wb3J0IEFDRVYyVG9hc3QgZnJvbSBcIi4uLy4uL3BsdWdpbnMvQUNFVjJUb2FzdFwiO1xuaW1wb3J0IEkxOG4gZnJvbSBcIi4vSTE4blwiO1xuaW1wb3J0IFJlbGVhc2VUcmFja2VyIGZyb20gXCIuL1JlbGVhc2VUcmFja2VyXCI7XG52YXIgVmFyaWFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmFyaWFibGUoKSB7XG4gICAgICAgIHRoaXMuQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMCAqIC4yO1xuICAgICAgICB0aGlzLlRPQVNUX0RVUkFUSU9OID0gMTAwMCAqIDI7XG4gICAgICAgIHRoaXMuREVCT1VOQ0VfRFVSQVRJT04gPSAxMDAwICogLjU7XG4gICAgICAgIHRoaXMuTUFTVEVSX01BTklGRVNUID0ge1xuICAgICAgICAgICAgaWNvbjogXCJcIixcbiAgICAgICAgICAgIG5hbWU6ICdSdW50aW1lQ2FsbGVkJyxcbiAgICAgICAgICAgIGlkOiAnQHdlbnppNzc3Ny9hY2V2Ml9ydW50aW1lJyxcbiAgICAgICAgICAgIHZlcnNpb25zOiBbVmVyc2lvbi5nZXRGdWxsVmVyc2lvbigpXSxcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiAnQWNGdW4gRXZvbHZlZCBSdW50aW1lIFYyLicsXG4gICAgICAgICAgICBjcmVhdGVkQXQ6IG5ldyBEYXRlKCcyMDI0LTA4LTA5JykuZ2V0VGltZSgpICsgJycsXG4gICAgICAgICAgICB1cGRhdGVkQXQ6IG5ldyBEYXRlKCkuZ2V0VGltZSgpICsgJycsXG4gICAgICAgICAgICBhdXRob3I6ICd3ZW56aTc3NzcnLFxuICAgICAgICAgICAgY29weXJpZ2h0OiAnKGMpMjAyNCB3ZW56aTc3NzcsIGxpY2Vuc2VkIHVuZGVyIHRoZSBNSVQgTGljZW5zZS4nLFxuICAgICAgICAgICAgcmVxdWVzdGVkQVBJczogW10sXG4gICAgICAgICAgICB3ZWJzaXRlOiAnaHR0cHM6Ly9hY2V2Mi4xMjA1Lm1vZS8nLFxuICAgICAgICAgICAgdHJpZ2dlcjoge1xuICAgICAgICAgICAgICAgIHJlY2VpdmVIYW5kbGVyOiB0cnVlLFxuICAgICAgICAgICAgICAgIG1hdGNoZXM6IFsnKiddXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2V0dGluZ3M6IFtdXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuUFVCTElDX0tFWSA9IFwiLS0tLS1CRUdJTiBQVUJMSUMgS0VZLS0tLS1cXG5NSUlDSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQWc4QU1JSUNDZ0tDQWdFQWlsZ0d3QzJDTm0zelNTVXphejdqXFxuY0lNMDh1S0tHR21XczF5b1FOVXpCc2dYL2NudVZRc3VQTDc5UkR0dDVQOC9hUHdLeXpGS2NkMmt4SXpLYkxyL1xcblhUT2hQejZtaVZjUmQ4NkhpRkptRUMxek8vOUZRSVRNTmNONC94akdHbktaV2E4MHN1N0NwRmRIa1RMaWZMaU9cXG5QMlU3cWkveWlOT3JqRWZvNHltQ2pGVG9GQllRMlZRNlRlNW1uUXh2bUs5YXJLd20vd1Q0ME9QazlIOFlwSm54XFxuWmlQTHlDQ1loek9RQ0hIaWpsYy9pSTJvTncwVW5xTEo0d0RzQlNudWVQQzlRV3l6M1FkVitvLy9BVlpwakdxNlxcblhXV3RFT2dHZlk1bnlPU3pwMTlGYmlWZ2J4VjNRWDhSV0JQM2lmUHRKaHYwRDE2WDFqb0NFTGducXRLYmFWa0dcXG5MNittMHIrWVNvWm9qWTJIWTAxNTlQYWZLa1lnNXhoVFRDTHlYdHNXc2NFRmQvUEsyc200QWcvaHR1R1lFWDJuXFxuSEg5WEd5aTFvVi84emVGRjRZS2U1RGxFeXh5NUthQm5SQkd5bzRZU2ZEWkQ0K1BHVHBvblVPYUpjMWlDL3FQdVxcblluQ0ZvYkQ1NWJzMnpsRFdwSlVOTGFVSWtpakZXTXdOYnRxbFJHcDV3VW5OckZkdjhrNkwydlI5ZlVuZXR4b09cXG54b3dCdnQvcXVaYmdwbjVLL1dWRjhRTUwzZFk0Y2xQREdZdlljZUtQR1ZDZFpVSStOVG5mZWVINDVsZE9ZU2luXFxuM3orY0RZRUE3d1FhUHR1NTdtUlJRT0JWVWFhNXRDUDQzT0pIdGxzRmpLSm12eDRJdzJaNE9FVVpaSlRoWmNKR1xcbnlsOHlKdWhnWi9GSjZOVTVkU1Z6UmprQ0F3RUFBUT09XFxuLS0tLS1FTkQgUFVCTElDIEtFWS0tLS0tXCI7XG4gICAgICAgIHRoaXMuUEFHRV9TSVpFID0gODtcbiAgICB9XG4gICAgVmFyaWFibGUucHJvdG90eXBlLmJhc2VTZWxmUmVwb1VSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHNvdXJjZSA9IFByZWZlcmVuY2VzLmdldFByZWZlcmVuY2UoeyBjYXRlZ29yeTogJ2dlbmVyYWwnLCBrOiAnc291cmNlJyB9KTtcbiAgICAgICAgaWYgKHNvdXJjZSA9PT0gJ2dpdGh1YicpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL3dlbnppNzc3Ny9BY0Z1bi1Fdm9sdmVkL21haW4vJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09ICdjbG91ZGZsYXJlJykge1xuICAgICAgICAgICAgcmV0dXJuICdodHRwczovL2FjZXYyLjEyMDUubW9lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09ICdqc2RlbGl2cicpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dlbnppNzc3Ny9BY0Z1bi1Fdm9sdmVkL0BtYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBQ0VWMlRvYXN0LnNob3dUb2FzdCh7IHRleHQ6IEkxOG4udCh7IGtleTogJ2ludmFsaWQtc291cmNlLXBsZWFzZS1zZWxlY3QtYWdhaW4nIH0pIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuYmFzZVBsdWdpblJlcG9VUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3NvdXJjZScgfSk7XG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdnaXRodWInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93ZW56aTc3NzcvYWNldjJfcGx1Z2lucy9tYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSAnY2xvdWRmbGFyZScpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9hY2V2Mi1wbHVnaW5zLjEyMDUubW9lJztcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmIChzb3VyY2UgPT09ICdqc2RlbGl2cicpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9jZG4uanNkZWxpdnIubmV0L2doL3dlbnppNzc3Ny9hY2V2Ml9wbHVnaW5zL0BtYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBBQ0VWMlRvYXN0LnNob3dUb2FzdCh7IHRleHQ6IEkxOG4udCh7IGtleTogJ2ludmFsaWQtc291cmNlLXBsZWFzZS1zZWxlY3QtYWdhaW4nIH0pIH0pO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuYmlnTWFuaWZlc3RVUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmJhc2VQbHVnaW5SZXBvVVJMKCkgKyAnYmlnTWFuaWZlc3QuanNvbic7XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuZGV2ZWxvcGVyS2l0VVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUGx1Z2luUmVwb1VSTCgpICsgJ2RldmVsb3Blci1raXQuemlwJztcbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5wbHVnaW5Eb3dubG9hZFVSTCA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KHRoaXMuYmFzZVBsdWdpblJlcG9VUkwoKSkuY29uY2F0KG1hbmlmZXN0LmlkLCBcIi9cIikuY29uY2F0KFJlbGVhc2VUcmFja2VyLmdldFBsdWdpbkxhdGVzdFZlcnNpb24oeyBtYW5pZmVzdDogbWFuaWZlc3QgfSksIFwiL3Jhdy5qc29uLnRhci5nelwiKTtcbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5nZXRTZWxmTGF0ZXN0VmVyc2lvbk1hbmlmZXN0VVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlU2VsZlJlcG9VUkwoKSArICd2ZXJzaW9uLmpzb24nO1xuICAgIH07XG4gICAgVmFyaWFibGUucHJvdG90eXBlLmdldFNlbGZMYXRlc3RWZXJzaW9uVVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlU2VsZlJlcG9VUkwoKSArICd2ZXJzaW9uLmpzb24nO1xuICAgIH07XG4gICAgcmV0dXJuIFZhcmlhYmxlO1xufSgpKTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBWYXJpYWJsZSgpO1xuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/core/api/Variable.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("18d44e2abc6d6675fa98")
/******/ })();
/******/ 
/******/ }
);