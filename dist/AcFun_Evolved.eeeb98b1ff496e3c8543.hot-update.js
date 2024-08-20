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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variable */ \"./src/core/api/Variable.ts\");\n/* harmony import */ var _IO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IO */ \"./src/core/api/IO.ts\");\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PluginToolkit */ \"./src/core/api/PluginToolkit.ts\");\n/* harmony import */ var _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ACEV2Storage */ \"./src/core/services/ACEV2Storage.ts\");\n/* harmony import */ var _services_Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Clock */ \"./src/core/services/Clock.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\nvar ReleaseTracker = /** @class */ (function () {\n    function ReleaseTracker() {\n    }\n    ReleaseTracker.prototype.getPluginLatestVersion = function (_a) {\n        var manifest = _a.manifest;\n        return manifest.versions[manifest.versions.length - 1];\n    };\n    ReleaseTracker.prototype.checkSelfUpdate = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var fullUrl, raw, latestVersion, latestVersionInfo;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        fullUrl = _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelfLatestVersionManifestURL();\n                        return [4 /*yield*/, _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].monkey({\n                                method: 'GET',\n                                url: fullUrl,\n                                responseType: 'text'\n                            })];\n                    case 1:\n                        raw = _a.sent();\n                        latestVersion = JSON.parse(raw);\n                        latestVersionInfo = latestVersion[latestVersion.length - 1];\n                        return [2 /*return*/, _Version__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compareVersion({\n                                version1: _Version__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentVersion(),\n                                version2: latestVersion.version + ' ' + latestVersionInfo.versionTag,\n                                target: _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updateRuntimeTo' })\n                            })\n                            // ACEV2Dialog.showDialog({\n                            //     title: I18n.t({key: 'version'}) + ' ' + latestVersion.version + ' ' + latestVersionInfo.versionTag + ' ' + I18n.t({key: 'has-been-released'}),\n                            //     content: I18n.t({key: 'newer-runtime-version-has-been-released-please-consider-updating'}) + ' ' + I18n.t({key: 'current-version'}) + Version.getCurrentVersion(),\n                            //     okAction: () => this.updateSelf(),\n                            //     cancelAction: () => {\n                            //         ACEV2Toast.showToast({text: I18n.t({key: 'cancelled'})})\n                            //     }\n                            // })\n                        ];\n                }\n            });\n        });\n    };\n    ReleaseTracker.prototype.checkPluginsUpdate = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var rawPluginsData, installedPlugins, pluginsData, updatablePlugins, _i, pluginsData_1, pluginData, _a, installedPlugins_1, installedPlugin;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].monkey({\n                            method: 'GET',\n                            url: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bigManifestURL(),\n                        })];\n                    case 1:\n                        rawPluginsData = _b.sent();\n                        installedPlugins = _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstalledPlugins();\n                        pluginsData = JSON.parse(rawPluginsData);\n                        updatablePlugins = [];\n                        for (_i = 0, pluginsData_1 = pluginsData; _i < pluginsData_1.length; _i++) {\n                            pluginData = pluginsData_1[_i];\n                            for (_a = 0, installedPlugins_1 = installedPlugins; _a < installedPlugins_1.length; _a++) {\n                                installedPlugin = installedPlugins_1[_a];\n                                if (pluginData.id === installedPlugin.manifest.id) {\n                                    if (pluginData.versions !== installedPlugin.manifest.versions) {\n                                        updatablePlugins.push({ latestRelease: pluginData, currentRelease: installedPlugin });\n                                    }\n                                }\n                            }\n                        }\n                        return [2 /*return*/, updatablePlugins];\n                }\n            });\n        });\n    };\n    ReleaseTracker.prototype.updateSelf = function () {\n        _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openPageInNewTab({\n            url: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelfLatestScriptURL(),\n            manifest: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MASTER_MANIFEST\n        });\n    };\n    ReleaseTracker.prototype.updatePlugin = function (_a) {\n        var manifest = _a.manifest;\n        _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].uninstallPlugin({ manifest: manifest });\n        _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].downloadAndInstallPluginPack({ manifest: manifest });\n    };\n    ReleaseTracker.prototype.timeToCheckSelfUpdate = function () {\n        var updateFrequency = _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updateRuntimeWhen' });\n        var selfUpdateRecord = _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localGet({ k: 'selfUpdateRecord' });\n        if (!selfUpdateRecord) {\n            var timestamp = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localSet({\n                k: 'selfUpdateRecord',\n                v: {\n                    timestamp: timestamp\n                }\n            });\n            selfUpdateRecord = {\n                timestamp: timestamp\n            };\n        }\n        if (updateFrequency === 'startup') {\n            return true;\n        }\n        else if (updateFrequency === 'daily') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 86400000;\n        }\n        else if (updateFrequency === 'weekly') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 604800000;\n        }\n        else if (updateFrequency === 'monthly') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 2592000000;\n        }\n        else {\n            return false;\n        }\n    };\n    ReleaseTracker.prototype.selfReleaseTracker = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var updateTarget;\n            return __generator(this, function (_a) {\n                updateTarget = _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updateRuntimeTo' });\n                return [2 /*return*/];\n            });\n        });\n    };\n    return ReleaseTracker;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReleaseTracker());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLCtCQUErQixvREFBVyxpQkFBaUIsMkNBQTJDO0FBQ3RHO0FBQ0EsYUFBYTtBQUNiLFNBQVM7QUFDVDtBQUNBO0FBQ0EsQ0FBQztBQUNELGlFQUFlLG9CQUFvQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYWNmdW5fZXZvbHZlZC8uL3NyYy9jb3JlL2FwaS9SZWxlYXNlVHJhY2tlci50cz9mOWI2Il0sInNvdXJjZXNDb250ZW50IjpbInZhciBfX2F3YWl0ZXIgPSAodGhpcyAmJiB0aGlzLl9fYXdhaXRlcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIF9hcmd1bWVudHMsIFAsIGdlbmVyYXRvcikge1xuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxuICAgIHJldHVybiBuZXcgKFAgfHwgKFAgPSBQcm9taXNlKSkoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICBmdW5jdGlvbiBmdWxmaWxsZWQodmFsdWUpIHsgdHJ5IHsgc3RlcChnZW5lcmF0b3IubmV4dCh2YWx1ZSkpOyB9IGNhdGNoIChlKSB7IHJlamVjdChlKTsgfSB9XG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiBzdGVwKHJlc3VsdCkgeyByZXN1bHQuZG9uZSA/IHJlc29sdmUocmVzdWx0LnZhbHVlKSA6IGFkb3B0KHJlc3VsdC52YWx1ZSkudGhlbihmdWxmaWxsZWQsIHJlamVjdGVkKTsgfVxuICAgICAgICBzdGVwKChnZW5lcmF0b3IgPSBnZW5lcmF0b3IuYXBwbHkodGhpc0FyZywgX2FyZ3VtZW50cyB8fCBbXSkpLm5leHQoKSk7XG4gICAgfSk7XG59O1xudmFyIF9fZ2VuZXJhdG9yID0gKHRoaXMgJiYgdGhpcy5fX2dlbmVyYXRvcikgfHwgZnVuY3Rpb24gKHRoaXNBcmcsIGJvZHkpIHtcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnO1xuICAgIHJldHVybiBnID0geyBuZXh0OiB2ZXJiKDApLCBcInRocm93XCI6IHZlcmIoMSksIFwicmV0dXJuXCI6IHZlcmIoMikgfSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xuICAgIGZ1bmN0aW9uIHZlcmIobikgeyByZXR1cm4gZnVuY3Rpb24gKHYpIHsgcmV0dXJuIHN0ZXAoW24sIHZdKTsgfTsgfVxuICAgIGZ1bmN0aW9uIHN0ZXAob3ApIHtcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xuICAgICAgICB3aGlsZSAoZyAmJiAoZyA9IDAsIG9wWzBdICYmIChfID0gMCkpLCBfKSB0cnkge1xuICAgICAgICAgICAgaWYgKGYgPSAxLCB5ICYmICh0ID0gb3BbMF0gJiAyID8geVtcInJldHVyblwiXSA6IG9wWzBdID8geVtcInRocm93XCJdIHx8ICgodCA9IHlbXCJyZXR1cm5cIl0pICYmIHQuY2FsbCh5KSwgMCkgOiB5Lm5leHQpICYmICEodCA9IHQuY2FsbCh5LCBvcFsxXSkpLmRvbmUpIHJldHVybiB0O1xuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xuICAgICAgICAgICAgc3dpdGNoIChvcFswXSkge1xuICAgICAgICAgICAgICAgIGNhc2UgMDogY2FzZSAxOiB0ID0gb3A7IGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XG4gICAgICAgICAgICAgICAgY2FzZSA1OiBfLmxhYmVsKys7IHkgPSBvcFsxXTsgb3AgPSBbMF07IGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIGNhc2UgNzogb3AgPSBfLm9wcy5wb3AoKTsgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICBpZiAoISh0ID0gXy50cnlzLCB0ID0gdC5sZW5ndGggPiAwICYmIHRbdC5sZW5ndGggLSAxXSkgJiYgKG9wWzBdID09PSA2IHx8IG9wWzBdID09PSAyKSkgeyBfID0gMDsgY29udGludWU7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSAzICYmICghdCB8fCAob3BbMV0gPiB0WzBdICYmIG9wWzFdIDwgdFszXSkpKSB7IF8ubGFiZWwgPSBvcFsxXTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0ICYmIF8ubGFiZWwgPCB0WzJdKSB7IF8ubGFiZWwgPSB0WzJdOyBfLm9wcy5wdXNoKG9wKTsgYnJlYWs7IH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHRbMl0pIF8ub3BzLnBvcCgpO1xuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgb3AgPSBib2R5LmNhbGwodGhpc0FyZywgXyk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cbiAgICAgICAgaWYgKG9wWzBdICYgNSkgdGhyb3cgb3BbMV07IHJldHVybiB7IHZhbHVlOiBvcFswXSA/IG9wWzFdIDogdm9pZCAwLCBkb25lOiB0cnVlIH07XG4gICAgfVxufTtcbmltcG9ydCBWYXJpYWJsZSBmcm9tIFwiLi9WYXJpYWJsZVwiO1xuaW1wb3J0IElPIGZyb20gXCIuL0lPXCI7XG5pbXBvcnQgVmVyc2lvbiBmcm9tIFwiLi9WZXJzaW9uXCI7XG5pbXBvcnQgUHJlZmVyZW5jZXMgZnJvbSBcIi4vUHJlZmVyZW5jZXNcIjtcbmltcG9ydCBQbHVnaW5Ub29sa2l0IGZyb20gXCIuL1BsdWdpblRvb2xraXRcIjtcbmltcG9ydCBBQ0VWMlN0b3JhZ2UgZnJvbSBcIi4uL3NlcnZpY2VzL0FDRVYyU3RvcmFnZVwiO1xuaW1wb3J0IENsb2NrIGZyb20gXCIuLi9zZXJ2aWNlcy9DbG9ja1wiO1xudmFyIFJlbGVhc2VUcmFja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbGVhc2VUcmFja2VyKCkge1xuICAgIH1cbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUuZ2V0UGx1Z2luTGF0ZXN0VmVyc2lvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgcmV0dXJuIG1hbmlmZXN0LnZlcnNpb25zW21hbmlmZXN0LnZlcnNpb25zLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLmNoZWNrU2VsZlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZ1bGxVcmwsIHJhdywgbGF0ZXN0VmVyc2lvbiwgbGF0ZXN0VmVyc2lvbkluZm87XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsVXJsID0gVmFyaWFibGUuZ2V0U2VsZkxhdGVzdFZlcnNpb25NYW5pZmVzdFVSTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgSU8ubW9ua2V5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VmVyc2lvbiA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFZlcnNpb25JbmZvID0gbGF0ZXN0VmVyc2lvbltsYXRlc3RWZXJzaW9uLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIFZlcnNpb24uY29tcGFyZVZlcnNpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMTogVmVyc2lvbi5nZXRDdXJyZW50VmVyc2lvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uMjogbGF0ZXN0VmVyc2lvbi52ZXJzaW9uICsgJyAnICsgbGF0ZXN0VmVyc2lvbkluZm8udmVyc2lvblRhZyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3VwZGF0ZVJ1bnRpbWVUbycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIEFDRVYyRGlhbG9nLnNob3dEaWFsb2coe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICB0aXRsZTogSTE4bi50KHtrZXk6ICd2ZXJzaW9uJ30pICsgJyAnICsgbGF0ZXN0VmVyc2lvbi52ZXJzaW9uICsgJyAnICsgbGF0ZXN0VmVyc2lvbkluZm8udmVyc2lvblRhZyArICcgJyArIEkxOG4udCh7a2V5OiAnaGFzLWJlZW4tcmVsZWFzZWQnfSksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNvbnRlbnQ6IEkxOG4udCh7a2V5OiAnbmV3ZXItcnVudGltZS12ZXJzaW9uLWhhcy1iZWVuLXJlbGVhc2VkLXBsZWFzZS1jb25zaWRlci11cGRhdGluZyd9KSArICcgJyArIEkxOG4udCh7a2V5OiAnY3VycmVudC12ZXJzaW9uJ30pICsgVmVyc2lvbi5nZXRDdXJyZW50VmVyc2lvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICBva0FjdGlvbjogKCkgPT4gdGhpcy51cGRhdGVTZWxmKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gICAgIGNhbmNlbEFjdGlvbjogKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vICAgICAgICAgQUNFVjJUb2FzdC5zaG93VG9hc3Qoe3RleHQ6IEkxOG4udCh7a2V5OiAnY2FuY2VsbGVkJ30pfSlcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlbGVhc2VUcmFja2VyLnByb3RvdHlwZS5jaGVja1BsdWdpbnNVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciByYXdQbHVnaW5zRGF0YSwgaW5zdGFsbGVkUGx1Z2lucywgcGx1Z2luc0RhdGEsIHVwZGF0YWJsZVBsdWdpbnMsIF9pLCBwbHVnaW5zRGF0YV8xLCBwbHVnaW5EYXRhLCBfYSwgaW5zdGFsbGVkUGx1Z2luc18xLCBpbnN0YWxsZWRQbHVnaW47XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9iKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYi5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6IHJldHVybiBbNCAvKnlpZWxkKi8sIElPLm1vbmtleSh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmw6IFZhcmlhYmxlLmJpZ01hbmlmZXN0VVJMKCksXG4gICAgICAgICAgICAgICAgICAgICAgICB9KV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJhd1BsdWdpbnNEYXRhID0gX2Iuc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5zdGFsbGVkUGx1Z2lucyA9IFBsdWdpblRvb2xraXQuZ2V0SW5zdGFsbGVkUGx1Z2lucygpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGx1Z2luc0RhdGEgPSBKU09OLnBhcnNlKHJhd1BsdWdpbnNEYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0YWJsZVBsdWdpbnMgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoX2kgPSAwLCBwbHVnaW5zRGF0YV8xID0gcGx1Z2luc0RhdGE7IF9pIDwgcGx1Z2luc0RhdGFfMS5sZW5ndGg7IF9pKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5EYXRhID0gcGx1Z2luc0RhdGFfMVtfaV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfYSA9IDAsIGluc3RhbGxlZFBsdWdpbnNfMSA9IGluc3RhbGxlZFBsdWdpbnM7IF9hIDwgaW5zdGFsbGVkUGx1Z2luc18xLmxlbmd0aDsgX2ErKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWRQbHVnaW4gPSBpbnN0YWxsZWRQbHVnaW5zXzFbX2FdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luRGF0YS5pZCA9PT0gaW5zdGFsbGVkUGx1Z2luLm1hbmlmZXN0LmlkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocGx1Z2luRGF0YS52ZXJzaW9ucyAhPT0gaW5zdGFsbGVkUGx1Z2luLm1hbmlmZXN0LnZlcnNpb25zKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRhYmxlUGx1Z2lucy5wdXNoKHsgbGF0ZXN0UmVsZWFzZTogcGx1Z2luRGF0YSwgY3VycmVudFJlbGVhc2U6IGluc3RhbGxlZFBsdWdpbiB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovLCB1cGRhdGFibGVQbHVnaW5zXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUudXBkYXRlU2VsZiA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgSU8ub3BlblBhZ2VJbk5ld1RhYih7XG4gICAgICAgICAgICB1cmw6IFZhcmlhYmxlLmdldFNlbGZMYXRlc3RTY3JpcHRVUkwoKSxcbiAgICAgICAgICAgIG1hbmlmZXN0OiBWYXJpYWJsZS5NQVNURVJfTUFOSUZFU1RcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUudXBkYXRlUGx1Z2luID0gZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgIHZhciBtYW5pZmVzdCA9IF9hLm1hbmlmZXN0O1xuICAgICAgICBQbHVnaW5Ub29sa2l0LnVuaW5zdGFsbFBsdWdpbih7IG1hbmlmZXN0OiBtYW5pZmVzdCB9KTtcbiAgICAgICAgUGx1Z2luVG9vbGtpdC5kb3dubG9hZEFuZEluc3RhbGxQbHVnaW5QYWNrKHsgbWFuaWZlc3Q6IG1hbmlmZXN0IH0pO1xuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLnRpbWVUb0NoZWNrU2VsZlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgdmFyIHVwZGF0ZUZyZXF1ZW5jeSA9IFByZWZlcmVuY2VzLmdldFByZWZlcmVuY2UoeyBjYXRlZ29yeTogJ2dlbmVyYWwnLCBrOiAndXBkYXRlUnVudGltZVdoZW4nIH0pO1xuICAgICAgICB2YXIgc2VsZlVwZGF0ZVJlY29yZCA9IEFDRVYyU3RvcmFnZS5sb2NhbEdldCh7IGs6ICdzZWxmVXBkYXRlUmVjb3JkJyB9KTtcbiAgICAgICAgaWYgKCFzZWxmVXBkYXRlUmVjb3JkKSB7XG4gICAgICAgICAgICB2YXIgdGltZXN0YW1wID0gQ2xvY2suZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICBBQ0VWMlN0b3JhZ2UubG9jYWxTZXQoe1xuICAgICAgICAgICAgICAgIGs6ICdzZWxmVXBkYXRlUmVjb3JkJyxcbiAgICAgICAgICAgICAgICB2OiB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzZWxmVXBkYXRlUmVjb3JkID0ge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltZXN0YW1wXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICh1cGRhdGVGcmVxdWVuY3kgPT09ICdzdGFydHVwJykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXBkYXRlRnJlcXVlbmN5ID09PSAnZGFpbHknKSB7XG4gICAgICAgICAgICB2YXIgbGFzdENoZWNrID0gc2VsZlVwZGF0ZVJlY29yZC50aW1lc3RhbXA7XG4gICAgICAgICAgICB2YXIgbm93ID0gQ2xvY2suZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICByZXR1cm4gbm93IC0gbGFzdENoZWNrID49IDg2NDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVwZGF0ZUZyZXF1ZW5jeSA9PT0gJ3dlZWtseScpIHtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hlY2sgPSBzZWxmVXBkYXRlUmVjb3JkLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIHZhciBub3cgPSBDbG9jay5nZXRUaW1lc3RhbXAoKTtcbiAgICAgICAgICAgIHJldHVybiBub3cgLSBsYXN0Q2hlY2sgPj0gNjA0ODAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVwZGF0ZUZyZXF1ZW5jeSA9PT0gJ21vbnRobHknKSB7XG4gICAgICAgICAgICB2YXIgbGFzdENoZWNrID0gc2VsZlVwZGF0ZVJlY29yZC50aW1lc3RhbXA7XG4gICAgICAgICAgICB2YXIgbm93ID0gQ2xvY2suZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICByZXR1cm4gbm93IC0gbGFzdENoZWNrID49IDI1OTIwMDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIFJlbGVhc2VUcmFja2VyLnByb3RvdHlwZS5zZWxmUmVsZWFzZVRyYWNrZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHJldHVybiBfX2F3YWl0ZXIodGhpcywgdm9pZCAwLCB2b2lkIDAsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHZhciB1cGRhdGVUYXJnZXQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgdXBkYXRlVGFyZ2V0ID0gUHJlZmVyZW5jZXMuZ2V0UHJlZmVyZW5jZSh7IGNhdGVnb3J5OiAnZ2VuZXJhbCcsIGs6ICd1cGRhdGVSdW50aW1lVG8nIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWxlYXNlVHJhY2tlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgUmVsZWFzZVRyYWNrZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/api/ReleaseTracker.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("89b3714e8a4c72323463")
/******/ })();
/******/ 
/******/ }
);