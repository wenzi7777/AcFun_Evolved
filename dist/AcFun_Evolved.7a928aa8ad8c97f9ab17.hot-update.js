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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../plugins/ACEV2Toast */ \"./src/plugins/ACEV2Toast.ts\");\n/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./I18n */ \"./src/core/api/I18n.ts\");\n/* harmony import */ var _ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ReleaseTracker */ \"./src/core/api/ReleaseTracker.ts\");\n\n\n\n\n\nvar Variable = /** @class */ (function () {\n    function Variable() {\n        this.ANIMATION_DURATION = 1000 * .2;\n        this.TOAST_DURATION = 1000 * 2;\n        this.DEBOUNCE_DURATION = 1000 * .5;\n        this.MASTER_MANIFEST = {\n            icon: \"defaultIcon\",\n            name: 'AcFun Evolved Runtime',\n            id: '@wenzi7777/acev2_runtime',\n            versions: [_Version__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getFullVersion()],\n            description: 'AcFun Evolved Runtime V2.',\n            createdAt: new Date('2024-08-09').getTime() + '',\n            updatedAt: new Date().getTime() + '',\n            author: 'wenzi7777',\n            copyright: '(c)2024 wenzi7777, licensed under the MIT License.',\n            requestedAPIs: [],\n            website: 'https://acev2.1205.moe/',\n            trigger: {\n                receiveHandler: true,\n                matches: ['*']\n            },\n            settings: []\n        };\n        this.PUBLIC_KEY = \"-----BEGIN PUBLIC KEY-----\\nMIICIjANBgkqhkiG9w0BAQEFAAOCAg8AMIICCgKCAgEAilgGwC2CNm3zSSUzaz7j\\ncIM08uKKGGmWs1yoQNUzBsgX/cnuVQsuPL79RDtt5P8/aPwKyzFKcd2kxIzKbLr/\\nXTOhPz6miVcRd86HiFJmEC1zO/9FQITMNcN4/xjGGnKZWa80su7CpFdHkTLifLiO\\nP2U7qi/yiNOrjEfo4ymCjFToFBYQ2VQ6Te5mnQxvmK9arKwm/wT40OPk9H8YpJnx\\nZiPLyCCYhzOQCHHijlc/iI2oNw0UnqLJ4wDsBSnuePC9QWyz3QdV+o//AVZpjGq6\\nXWWtEOgGfY5nyOSzp19FbiVgbxV3QX8RWBP3ifPtJhv0D16X1joCELgnqtKbaVkG\\nL6+m0r+YSoZojY2HY0159PafKkYg5xhTTCLyXtsWscEFd/PK2sm4Ag/htuGYEX2n\\nHH9XGyi1oV/8zeFF4YKe5DlEyxy5KaBnRBGyo4YSfDZD4+PGTponUOaJc1iC/qPu\\nYnCFobD55bs2zlDWpJUNLaUIkijFWMwNbtqlRGp5wUnNrFdv8k6L2vR9fUnetxoO\\nxowBvt/quZbgpn5K/WVF8QML3dY4clPDGYvYceKPGVCdZUI+NTnfeeH45ldOYSin\\n3z+cDYEA7wQaPtu57mRRQOBVUaa5tCP43OJHtlsFjKJmvx4Iw2Z4OEUZZJThZcJG\\nyl8yJuhgZ/FJ6NU5dSVzRjkCAwEAAQ==\\n-----END PUBLIC KEY-----\";\n        this.PAGE_SIZE = 8;\n    }\n    Variable.prototype.baseSelfRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/AcFun-Evolved/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/AcFun-Evolved/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.basePluginRepoURL = function () {\n        var source = _Preferences__WEBPACK_IMPORTED_MODULE_1__[\"default\"].getPreference({ category: 'general', k: 'source' });\n        if (source === 'github') {\n            return 'https://raw.githubusercontent.com/wenzi7777/acev2_plugins/main/';\n        }\n        else if (source === 'cloudflare') {\n            return 'https://acev2-plugins.1205.moe';\n        }\n        else if (source === 'jsdelivr') {\n            return 'https://cdn.jsdelivr.net/gh/wenzi7777/acev2_plugins/@main/';\n        }\n        else {\n            _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_2__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_3__[\"default\"].t({ key: 'invalid-source-please-select-again' }) });\n        }\n    };\n    Variable.prototype.bigManifestURL = function () {\n        return this.basePluginRepoURL() + 'bigManifest.json';\n    };\n    Variable.prototype.developerKitURL = function () {\n        return this.basePluginRepoURL() + 'developer-kit.zip';\n    };\n    Variable.prototype.pluginDownloadURL = function (_a) {\n        var manifest = _a.manifest;\n        return \"\".concat(this.basePluginRepoURL()).concat(manifest.id, \"/\").concat(_ReleaseTracker__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getPluginLatestVersion({ manifest: manifest }), \"/raw.json.tar.gz\");\n    };\n    Variable.prototype.getSelfLatestVersionManifestURL = function () {\n        return this.baseSelfRepoURL() + 'version.json';\n    };\n    Variable.prototype.getSelfLatestScriptURL = function () {\n        return this.baseSelfRepoURL() + 'dist/acfun.evolved.bundle.min.user.js';\n    };\n    return Variable;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new Variable());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29yZS9hcGkvVmFyaWFibGUudHMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQWdDO0FBQ1E7QUFDVTtBQUN4QjtBQUNvQjtBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsZ0RBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG9EQUFXLGlCQUFpQixrQ0FBa0M7QUFDbkY7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDJEQUFVLGFBQWEsTUFBTSw2Q0FBSSxLQUFLLDJDQUEyQyxHQUFHO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQixvREFBVyxpQkFBaUIsa0NBQWtDO0FBQ25GO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwyREFBVSxhQUFhLE1BQU0sNkNBQUksS0FBSywyQ0FBMkMsR0FBRztBQUNoRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1GQUFtRix1REFBYywwQkFBMEIsb0JBQW9CO0FBQy9JO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0QsaUVBQWUsY0FBYyxFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy9jb3JlL2FwaS9WYXJpYWJsZS50cz8yMjVhIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBWZXJzaW9uIGZyb20gXCIuL1ZlcnNpb25cIjtcbmltcG9ydCBQcmVmZXJlbmNlcyBmcm9tIFwiLi9QcmVmZXJlbmNlc1wiO1xuaW1wb3J0IEFDRVYyVG9hc3QgZnJvbSBcIi4uLy4uL3BsdWdpbnMvQUNFVjJUb2FzdFwiO1xuaW1wb3J0IEkxOG4gZnJvbSBcIi4vSTE4blwiO1xuaW1wb3J0IFJlbGVhc2VUcmFja2VyIGZyb20gXCIuL1JlbGVhc2VUcmFja2VyXCI7XG52YXIgVmFyaWFibGUgPSAvKiogQGNsYXNzICovIChmdW5jdGlvbiAoKSB7XG4gICAgZnVuY3Rpb24gVmFyaWFibGUoKSB7XG4gICAgICAgIHRoaXMuQU5JTUFUSU9OX0RVUkFUSU9OID0gMTAwMCAqIC4yO1xuICAgICAgICB0aGlzLlRPQVNUX0RVUkFUSU9OID0gMTAwMCAqIDI7XG4gICAgICAgIHRoaXMuREVCT1VOQ0VfRFVSQVRJT04gPSAxMDAwICogLjU7XG4gICAgICAgIHRoaXMuTUFTVEVSX01BTklGRVNUID0ge1xuICAgICAgICAgICAgaWNvbjogXCJkZWZhdWx0SWNvblwiLFxuICAgICAgICAgICAgbmFtZTogJ0FjRnVuIEV2b2x2ZWQgUnVudGltZScsXG4gICAgICAgICAgICBpZDogJ0B3ZW56aTc3NzcvYWNldjJfcnVudGltZScsXG4gICAgICAgICAgICB2ZXJzaW9uczogW1ZlcnNpb24uZ2V0RnVsbFZlcnNpb24oKV0sXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogJ0FjRnVuIEV2b2x2ZWQgUnVudGltZSBWMi4nLFxuICAgICAgICAgICAgY3JlYXRlZEF0OiBuZXcgRGF0ZSgnMjAyNC0wOC0wOScpLmdldFRpbWUoKSArICcnLFxuICAgICAgICAgICAgdXBkYXRlZEF0OiBuZXcgRGF0ZSgpLmdldFRpbWUoKSArICcnLFxuICAgICAgICAgICAgYXV0aG9yOiAnd2Vuemk3Nzc3JyxcbiAgICAgICAgICAgIGNvcHlyaWdodDogJyhjKTIwMjQgd2Vuemk3Nzc3LCBsaWNlbnNlZCB1bmRlciB0aGUgTUlUIExpY2Vuc2UuJyxcbiAgICAgICAgICAgIHJlcXVlc3RlZEFQSXM6IFtdLFxuICAgICAgICAgICAgd2Vic2l0ZTogJ2h0dHBzOi8vYWNldjIuMTIwNS5tb2UvJyxcbiAgICAgICAgICAgIHRyaWdnZXI6IHtcbiAgICAgICAgICAgICAgICByZWNlaXZlSGFuZGxlcjogdHJ1ZSxcbiAgICAgICAgICAgICAgICBtYXRjaGVzOiBbJyonXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHNldHRpbmdzOiBbXVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLlBVQkxJQ19LRVkgPSBcIi0tLS0tQkVHSU4gUFVCTElDIEtFWS0tLS0tXFxuTUlJQ0lqQU5CZ2txaGtpRzl3MEJBUUVGQUFPQ0FnOEFNSUlDQ2dLQ0FnRUFpbGdHd0MyQ05tM3pTU1V6YXo3alxcbmNJTTA4dUtLR0dtV3MxeW9RTlV6QnNnWC9jbnVWUXN1UEw3OVJEdHQ1UDgvYVB3S3l6RktjZDJreEl6S2JMci9cXG5YVE9oUHo2bWlWY1JkODZIaUZKbUVDMXpPLzlGUUlUTU5jTjQveGpHR25LWldhODBzdTdDcEZkSGtUTGlmTGlPXFxuUDJVN3FpL3lpTk9yakVmbzR5bUNqRlRvRkJZUTJWUTZUZTVtblF4dm1LOWFyS3dtL3dUNDBPUGs5SDhZcEpueFxcblppUEx5Q0NZaHpPUUNISGlqbGMvaUkyb053MFVucUxKNHdEc0JTbnVlUEM5UVd5ejNRZFYrby8vQVZacGpHcTZcXG5YV1d0RU9nR2ZZNW55T1N6cDE5RmJpVmdieFYzUVg4UldCUDNpZlB0Smh2MEQxNlgxam9DRUxnbnF0S2JhVmtHXFxuTDYrbTByK1lTb1pvalkySFkwMTU5UGFmS2tZZzV4aFRUQ0x5WHRzV3NjRUZkL1BLMnNtNEFnL2h0dUdZRVgyblxcbkhIOVhHeWkxb1YvOHplRkY0WUtlNURsRXl4eTVLYUJuUkJHeW80WVNmRFpENCtQR1Rwb25VT2FKYzFpQy9xUHVcXG5ZbkNGb2JENTViczJ6bERXcEpVTkxhVUlraWpGV013TmJ0cWxSR3A1d1VuTnJGZHY4azZMMnZSOWZVbmV0eG9PXFxueG93QnZ0L3F1WmJncG41Sy9XVkY4UU1MM2RZNGNsUERHWXZZY2VLUEdWQ2RaVUkrTlRuZmVlSDQ1bGRPWVNpblxcbjN6K2NEWUVBN3dRYVB0dTU3bVJSUU9CVlVhYTV0Q1A0M09KSHRsc0ZqS0ptdng0SXcyWjRPRVVaWkpUaFpjSkdcXG55bDh5SnVoZ1ovRko2TlU1ZFNWelJqa0NBd0VBQVE9PVxcbi0tLS0tRU5EIFBVQkxJQyBLRVktLS0tLVwiO1xuICAgICAgICB0aGlzLlBBR0VfU0laRSA9IDg7XG4gICAgfVxuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5iYXNlU2VsZlJlcG9VUkwgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciBzb3VyY2UgPSBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3NvdXJjZScgfSk7XG4gICAgICAgIGlmIChzb3VyY2UgPT09ICdnaXRodWInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vcmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbS93ZW56aTc3NzcvQWNGdW4tRXZvbHZlZC9tYWluLyc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSAnY2xvdWRmbGFyZScpIHtcbiAgICAgICAgICAgIHJldHVybiAnaHR0cHM6Ly9hY2V2Mi4xMjA1Lm1vZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSAnanNkZWxpdnInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93ZW56aTc3NzcvQWNGdW4tRXZvbHZlZC9AbWFpbi8nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQUNFVjJUb2FzdC5zaG93VG9hc3QoeyB0ZXh0OiBJMThuLnQoeyBrZXk6ICdpbnZhbGlkLXNvdXJjZS1wbGVhc2Utc2VsZWN0LWFnYWluJyB9KSB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmFyaWFibGUucHJvdG90eXBlLmJhc2VQbHVnaW5SZXBvVVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgc291cmNlID0gUHJlZmVyZW5jZXMuZ2V0UHJlZmVyZW5jZSh7IGNhdGVnb3J5OiAnZ2VuZXJhbCcsIGs6ICdzb3VyY2UnIH0pO1xuICAgICAgICBpZiAoc291cmNlID09PSAnZ2l0aHViJykge1xuICAgICAgICAgICAgcmV0dXJuICdodHRwczovL3Jhdy5naXRodWJ1c2VyY29udGVudC5jb20vd2Vuemk3Nzc3L2FjZXYyX3BsdWdpbnMvbWFpbi8nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHNvdXJjZSA9PT0gJ2Nsb3VkZmxhcmUnKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vYWNldjItcGx1Z2lucy4xMjA1Lm1vZSc7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAoc291cmNlID09PSAnanNkZWxpdnInKSB7XG4gICAgICAgICAgICByZXR1cm4gJ2h0dHBzOi8vY2RuLmpzZGVsaXZyLm5ldC9naC93ZW56aTc3NzcvYWNldjJfcGx1Z2lucy9AbWFpbi8nO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgQUNFVjJUb2FzdC5zaG93VG9hc3QoeyB0ZXh0OiBJMThuLnQoeyBrZXk6ICdpbnZhbGlkLXNvdXJjZS1wbGVhc2Utc2VsZWN0LWFnYWluJyB9KSB9KTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgVmFyaWFibGUucHJvdG90eXBlLmJpZ01hbmlmZXN0VVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlUGx1Z2luUmVwb1VSTCgpICsgJ2JpZ01hbmlmZXN0Lmpzb24nO1xuICAgIH07XG4gICAgVmFyaWFibGUucHJvdG90eXBlLmRldmVsb3BlcktpdFVSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVBsdWdpblJlcG9VUkwoKSArICdkZXZlbG9wZXIta2l0LnppcCc7XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUucGx1Z2luRG93bmxvYWRVUkwgPSBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgdmFyIG1hbmlmZXN0ID0gX2EubWFuaWZlc3Q7XG4gICAgICAgIHJldHVybiBcIlwiLmNvbmNhdCh0aGlzLmJhc2VQbHVnaW5SZXBvVVJMKCkpLmNvbmNhdChtYW5pZmVzdC5pZCwgXCIvXCIpLmNvbmNhdChSZWxlYXNlVHJhY2tlci5nZXRQbHVnaW5MYXRlc3RWZXJzaW9uKHsgbWFuaWZlc3Q6IG1hbmlmZXN0IH0pLCBcIi9yYXcuanNvbi50YXIuZ3pcIik7XG4gICAgfTtcbiAgICBWYXJpYWJsZS5wcm90b3R5cGUuZ2V0U2VsZkxhdGVzdFZlcnNpb25NYW5pZmVzdFVSTCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuYmFzZVNlbGZSZXBvVVJMKCkgKyAndmVyc2lvbi5qc29uJztcbiAgICB9O1xuICAgIFZhcmlhYmxlLnByb3RvdHlwZS5nZXRTZWxmTGF0ZXN0U2NyaXB0VVJMID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5iYXNlU2VsZlJlcG9VUkwoKSArICdkaXN0L2FjZnVuLmV2b2x2ZWQuYnVuZGxlLm1pbi51c2VyLmpzJztcbiAgICB9O1xuICAgIHJldHVybiBWYXJpYWJsZTtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgVmFyaWFibGUoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/api/Variable.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("7c18b282a52cd7e691cd")
/******/ })();
/******/ 
/******/ }
);