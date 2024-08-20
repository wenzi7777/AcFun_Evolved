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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _Variable__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Variable */ \"./src/core/api/Variable.ts\");\n/* harmony import */ var _IO__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./IO */ \"./src/core/api/IO.ts\");\n/* harmony import */ var _Version__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Version */ \"./src/core/api/Version.ts\");\n/* harmony import */ var _Preferences__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Preferences */ \"./src/core/api/Preferences.ts\");\n/* harmony import */ var _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./PluginToolkit */ \"./src/core/api/PluginToolkit.ts\");\n/* harmony import */ var _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../services/ACEV2Storage */ \"./src/core/services/ACEV2Storage.ts\");\n/* harmony import */ var _services_Clock__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../services/Clock */ \"./src/core/services/Clock.ts\");\n/* harmony import */ var _plugins_ACEV2Dialog__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../plugins/ACEV2Dialog */ \"./src/plugins/ACEV2Dialog.ts\");\n/* harmony import */ var _I18n__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./I18n */ \"./src/core/api/I18n.ts\");\n/* harmony import */ var _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../plugins/ACEV2Toast */ \"./src/plugins/ACEV2Toast.ts\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\nvar __generator = (undefined && undefined.__generator) || function (thisArg, body) {\n    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;\n    return g = { next: verb(0), \"throw\": verb(1), \"return\": verb(2) }, typeof Symbol === \"function\" && (g[Symbol.iterator] = function() { return this; }), g;\n    function verb(n) { return function (v) { return step([n, v]); }; }\n    function step(op) {\n        if (f) throw new TypeError(\"Generator is already executing.\");\n        while (g && (g = 0, op[0] && (_ = 0)), _) try {\n            if (f = 1, y && (t = op[0] & 2 ? y[\"return\"] : op[0] ? y[\"throw\"] || ((t = y[\"return\"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;\n            if (y = 0, t) op = [op[0] & 2, t.value];\n            switch (op[0]) {\n                case 0: case 1: t = op; break;\n                case 4: _.label++; return { value: op[1], done: false };\n                case 5: _.label++; y = op[1]; op = [0]; continue;\n                case 7: op = _.ops.pop(); _.trys.pop(); continue;\n                default:\n                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }\n                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }\n                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }\n                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }\n                    if (t[2]) _.ops.pop();\n                    _.trys.pop(); continue;\n            }\n            op = body.call(thisArg, _);\n        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }\n        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };\n    }\n};\n\n\n\n\n\n\n\n\n\n\nvar ReleaseTracker = /** @class */ (function () {\n    function ReleaseTracker() {\n    }\n    ReleaseTracker.prototype.getPluginLatestVersion = function (_a) {\n        var manifest = _a.manifest;\n        return manifest.versions[manifest.versions.length - 1];\n    };\n    ReleaseTracker.prototype.checkSelfUpdate = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var fullUrl, raw, latestVersion, latestVersionInfo, compareResult;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        fullUrl = _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelfLatestVersionManifestURL();\n                        return [4 /*yield*/, _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].monkey({\n                                method: 'GET',\n                                url: fullUrl,\n                                responseType: 'text'\n                            })];\n                    case 1:\n                        raw = _a.sent();\n                        latestVersion = JSON.parse(raw);\n                        latestVersionInfo = latestVersion[latestVersion.length - 1];\n                        compareResult = _Version__WEBPACK_IMPORTED_MODULE_2__[\"default\"].compareVersion({\n                            version1: _Version__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentVersion(),\n                            version2: latestVersion.version + ' ' + latestVersionInfo.versionTag,\n                            target: _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updateRuntimeTo' })\n                        });\n                        return [2 /*return*/, {\n                                latestVersionInfo: latestVersionInfo,\n                                compareResult: compareResult\n                            }];\n                }\n            });\n        });\n    };\n    ReleaseTracker.prototype.checkPluginsUpdate = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var rawPluginsData, installedPlugins, pluginsData, updatablePlugins, _i, pluginsData_1, pluginData, _a, installedPlugins_1, installedPlugin;\n            return __generator(this, function (_b) {\n                switch (_b.label) {\n                    case 0: return [4 /*yield*/, _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].monkey({\n                            method: 'GET',\n                            url: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].bigManifestURL(),\n                        })];\n                    case 1:\n                        rawPluginsData = _b.sent();\n                        installedPlugins = _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].getInstalledPlugins();\n                        pluginsData = JSON.parse(rawPluginsData);\n                        updatablePlugins = [];\n                        for (_i = 0, pluginsData_1 = pluginsData; _i < pluginsData_1.length; _i++) {\n                            pluginData = pluginsData_1[_i];\n                            for (_a = 0, installedPlugins_1 = installedPlugins; _a < installedPlugins_1.length; _a++) {\n                                installedPlugin = installedPlugins_1[_a];\n                                if (pluginData.id === installedPlugin.manifest.id) {\n                                    if (pluginData.versions !== installedPlugin.manifest.versions) {\n                                        updatablePlugins.push({ latestRelease: pluginData, currentRelease: installedPlugin });\n                                    }\n                                }\n                            }\n                        }\n                        return [2 /*return*/, updatablePlugins];\n                }\n            });\n        });\n    };\n    ReleaseTracker.prototype.updateSelf = function () {\n        _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localSet({\n            k: 'selfUpdateRecord',\n            v: {\n                timestamp: _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp()\n            }\n        });\n        _IO__WEBPACK_IMPORTED_MODULE_1__[\"default\"].openPageInNewTab({\n            url: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].getSelfLatestScriptURL(),\n            manifest: _Variable__WEBPACK_IMPORTED_MODULE_0__[\"default\"].MASTER_MANIFEST\n        });\n    };\n    ReleaseTracker.prototype.updatePlugin = function (_a) {\n        var manifest = _a.manifest;\n        _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].uninstallPlugin({ manifest: manifest });\n        _PluginToolkit__WEBPACK_IMPORTED_MODULE_4__[\"default\"].downloadAndInstallPluginPack({ manifest: manifest });\n    };\n    ReleaseTracker.prototype.timeToCheckSelfUpdate = function () {\n        var updateFrequency = _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updateRuntimeWhen' });\n        var selfUpdateRecord = _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localGet({ k: 'selfUpdateRecord' });\n        if (!selfUpdateRecord) {\n            var timestamp = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localSet({\n                k: 'selfUpdateRecord',\n                v: {\n                    timestamp: timestamp\n                }\n            });\n            selfUpdateRecord = {\n                timestamp: timestamp\n            };\n        }\n        if (updateFrequency === 'startup') {\n            return true;\n        }\n        else if (updateFrequency === 'daily') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 86400000;\n        }\n        else if (updateFrequency === 'weekly') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 604800000;\n        }\n        else if (updateFrequency === 'monthly') {\n            var lastCheck = selfUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 2592000000;\n        }\n        else {\n            return false;\n        }\n    };\n    ReleaseTracker.prototype.timeToCheckPluginsUpdate = function () {\n        var updateFrequency = _Preferences__WEBPACK_IMPORTED_MODULE_3__[\"default\"].getPreference({ category: 'general', k: 'updatePluginsWhen' });\n        var pluginsUpdateRecord = _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localGet({ k: 'pluginsUpdateRecord' });\n        if (!pluginsUpdateRecord) {\n            var timestamp = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            _services_ACEV2Storage__WEBPACK_IMPORTED_MODULE_5__[\"default\"].localSet({\n                k: 'pluginsUpdateRecord',\n                v: {\n                    timestamp: timestamp\n                }\n            });\n            pluginsUpdateRecord = {\n                timestamp: timestamp\n            };\n        }\n        if (updateFrequency === 'startup') {\n            return true;\n        }\n        else if (updateFrequency === 'daily') {\n            var lastCheck = pluginsUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 86400000;\n        }\n        else if (updateFrequency === 'weekly') {\n            var lastCheck = pluginsUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 604800000;\n        }\n        else if (updateFrequency === 'monthly') {\n            var lastCheck = pluginsUpdateRecord.timestamp;\n            var now = _services_Clock__WEBPACK_IMPORTED_MODULE_6__[\"default\"].getTimestamp();\n            return now - lastCheck >= 2592000000;\n        }\n        else {\n            return false;\n        }\n    };\n    ReleaseTracker.prototype.selfReleaseTracker = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var result;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!this.timeToCheckSelfUpdate()) return [3 /*break*/, 2];\n                        return [4 /*yield*/, this.checkSelfUpdate()];\n                    case 1:\n                        result = _a.sent();\n                        if (result.compareResult < 0) {\n                            _plugins_ACEV2Dialog__WEBPACK_IMPORTED_MODULE_7__[\"default\"].showDialog({\n                                title: _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'version' }) + ' ' + result.latestVersionInfo.version + ' ' + result.latestVersionInfo.versionTag + ' ' + _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'has-been-released' }),\n                                content: _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'newer-runtime-version-has-been-released-please-consider-updating' }) + ' ' + _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'current-version' }) + _Version__WEBPACK_IMPORTED_MODULE_2__[\"default\"].getCurrentVersion(),\n                                okAction: function () { return _this.updateSelf(); },\n                                cancelAction: function () {\n                                    _plugins_ACEV2Toast__WEBPACK_IMPORTED_MODULE_9__[\"default\"].showToast({ text: _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'cancelled' }) });\n                                }\n                            });\n                        }\n                        _a.label = 2;\n                    case 2: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    ReleaseTracker.prototype.pluginsReleaseTracker = function () {\n        return __awaiter(this, void 0, void 0, function () {\n            var updatablePlugins_1;\n            var _this = this;\n            return __generator(this, function (_a) {\n                switch (_a.label) {\n                    case 0:\n                        if (!this.timeToCheckPluginsUpdate()) return [3 /*break*/, 2];\n                        return [4 /*yield*/, this.checkPluginsUpdate()];\n                    case 1:\n                        updatablePlugins_1 = _a.sent();\n                        if (updatablePlugins_1.length > 0) {\n                            _plugins_ACEV2Dialog__WEBPACK_IMPORTED_MODULE_7__[\"default\"].showDialog({\n                                title: _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'newer-version-of' }) + ' ' + updatablePlugins_1[0].latestRelease.id + ' ' + _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'has-been-released' }),\n                                content: _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'do-you-want-to-update-this-plugin-from' }) + ' ' + updatablePlugins_1[0].currentRelease.manifest.versions[updatablePlugins_1[0].currentRelease.manifest.versions.length - 1] + ' ' + _I18n__WEBPACK_IMPORTED_MODULE_8__[\"default\"].t({ key: 'to' }) + ' ' + updatablePlugins_1[0].latestRelease.versions[updatablePlugins_1[0].latestRelease.versions.length - 1],\n                                okAction: function () { return _this.updatePlugin({ manifest: updatablePlugins_1[0].latestRelease }); },\n                            });\n                        }\n                        _a.label = 2;\n                    case 2: return [2 /*return*/];\n                }\n            });\n        });\n    };\n    return ReleaseTracker;\n}());\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (new ReleaseTracker());\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QTtBQUNBLENBQUM7QUFDRCxpRUFBZSxvQkFBb0IsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL2FjZnVuX2V2b2x2ZWQvLi9zcmMvY29yZS9hcGkvUmVsZWFzZVRyYWNrZXIudHM/ZjliNiJdLCJzb3VyY2VzQ29udGVudCI6WyJ2YXIgX19hd2FpdGVyID0gKHRoaXMgJiYgdGhpcy5fX2F3YWl0ZXIpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcbiAgICBmdW5jdGlvbiBhZG9wdCh2YWx1ZSkgeyByZXR1cm4gdmFsdWUgaW5zdGFuY2VvZiBQID8gdmFsdWUgOiBuZXcgUChmdW5jdGlvbiAocmVzb2x2ZSkgeyByZXNvbHZlKHZhbHVlKTsgfSk7IH1cbiAgICByZXR1cm4gbmV3IChQIHx8IChQID0gUHJvbWlzZSkpKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxuICAgICAgICBmdW5jdGlvbiByZWplY3RlZCh2YWx1ZSkgeyB0cnkgeyBzdGVwKGdlbmVyYXRvcltcInRocm93XCJdKHZhbHVlKSk7IH0gY2F0Y2ggKGUpIHsgcmVqZWN0KGUpOyB9IH1cbiAgICAgICAgZnVuY3Rpb24gc3RlcChyZXN1bHQpIHsgcmVzdWx0LmRvbmUgPyByZXNvbHZlKHJlc3VsdC52YWx1ZSkgOiBhZG9wdChyZXN1bHQudmFsdWUpLnRoZW4oZnVsZmlsbGVkLCByZWplY3RlZCk7IH1cbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xuICAgIH0pO1xufTtcbnZhciBfX2dlbmVyYXRvciA9ICh0aGlzICYmIHRoaXMuX19nZW5lcmF0b3IpIHx8IGZ1bmN0aW9uICh0aGlzQXJnLCBib2R5KSB7XG4gICAgdmFyIF8gPSB7IGxhYmVsOiAwLCBzZW50OiBmdW5jdGlvbigpIHsgaWYgKHRbMF0gJiAxKSB0aHJvdyB0WzFdOyByZXR1cm4gdFsxXTsgfSwgdHJ5czogW10sIG9wczogW10gfSwgZiwgeSwgdCwgZztcbiAgICByZXR1cm4gZyA9IHsgbmV4dDogdmVyYigwKSwgXCJ0aHJvd1wiOiB2ZXJiKDEpLCBcInJldHVyblwiOiB2ZXJiKDIpIH0sIHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiAoZ1tTeW1ib2wuaXRlcmF0b3JdID0gZnVuY3Rpb24oKSB7IHJldHVybiB0aGlzOyB9KSwgZztcbiAgICBmdW5jdGlvbiB2ZXJiKG4pIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBzdGVwKFtuLCB2XSk7IH07IH1cbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XG4gICAgICAgIGlmIChmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiR2VuZXJhdG9yIGlzIGFscmVhZHkgZXhlY3V0aW5nLlwiKTtcbiAgICAgICAgd2hpbGUgKGcgJiYgKGcgPSAwLCBvcFswXSAmJiAoXyA9IDApKSwgXykgdHJ5IHtcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcbiAgICAgICAgICAgIGlmICh5ID0gMCwgdCkgb3AgPSBbb3BbMF0gJiAyLCB0LnZhbHVlXTtcbiAgICAgICAgICAgIHN3aXRjaCAob3BbMF0pIHtcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIDQ6IF8ubGFiZWwrKzsgcmV0dXJuIHsgdmFsdWU6IG9wWzFdLCBkb25lOiBmYWxzZSB9O1xuICAgICAgICAgICAgICAgIGNhc2UgNTogXy5sYWJlbCsrOyB5ID0gb3BbMV07IG9wID0gWzBdOyBjb250aW51ZTtcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEodCA9IF8udHJ5cywgdCA9IHQubGVuZ3RoID4gMCAmJiB0W3QubGVuZ3RoIC0gMV0pICYmIChvcFswXSA9PT0gNiB8fCBvcFswXSA9PT0gMikpIHsgXyA9IDA7IGNvbnRpbnVlOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gNiAmJiBfLmxhYmVsIDwgdFsxXSkgeyBfLmxhYmVsID0gdFsxXTsgdCA9IG9wOyBicmVhazsgfVxuICAgICAgICAgICAgICAgICAgICBpZiAodCAmJiBfLmxhYmVsIDwgdFsyXSkgeyBfLmxhYmVsID0gdFsyXTsgXy5vcHMucHVzaChvcCk7IGJyZWFrOyB9XG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcbiAgICAgICAgICAgICAgICAgICAgXy50cnlzLnBvcCgpOyBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xuICAgICAgICB9IGNhdGNoIChlKSB7IG9wID0gWzYsIGVdOyB5ID0gMDsgfSBmaW5hbGx5IHsgZiA9IHQgPSAwOyB9XG4gICAgICAgIGlmIChvcFswXSAmIDUpIHRocm93IG9wWzFdOyByZXR1cm4geyB2YWx1ZTogb3BbMF0gPyBvcFsxXSA6IHZvaWQgMCwgZG9uZTogdHJ1ZSB9O1xuICAgIH1cbn07XG5pbXBvcnQgVmFyaWFibGUgZnJvbSBcIi4vVmFyaWFibGVcIjtcbmltcG9ydCBJTyBmcm9tIFwiLi9JT1wiO1xuaW1wb3J0IFZlcnNpb24gZnJvbSBcIi4vVmVyc2lvblwiO1xuaW1wb3J0IFByZWZlcmVuY2VzIGZyb20gXCIuL1ByZWZlcmVuY2VzXCI7XG5pbXBvcnQgUGx1Z2luVG9vbGtpdCBmcm9tIFwiLi9QbHVnaW5Ub29sa2l0XCI7XG5pbXBvcnQgQUNFVjJTdG9yYWdlIGZyb20gXCIuLi9zZXJ2aWNlcy9BQ0VWMlN0b3JhZ2VcIjtcbmltcG9ydCBDbG9jayBmcm9tIFwiLi4vc2VydmljZXMvQ2xvY2tcIjtcbmltcG9ydCBBQ0VWMkRpYWxvZyBmcm9tIFwiLi4vLi4vcGx1Z2lucy9BQ0VWMkRpYWxvZ1wiO1xuaW1wb3J0IEkxOG4gZnJvbSBcIi4vSTE4blwiO1xuaW1wb3J0IEFDRVYyVG9hc3QgZnJvbSBcIi4uLy4uL3BsdWdpbnMvQUNFVjJUb2FzdFwiO1xudmFyIFJlbGVhc2VUcmFja2VyID0gLyoqIEBjbGFzcyAqLyAoZnVuY3Rpb24gKCkge1xuICAgIGZ1bmN0aW9uIFJlbGVhc2VUcmFja2VyKCkge1xuICAgIH1cbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUuZ2V0UGx1Z2luTGF0ZXN0VmVyc2lvbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgcmV0dXJuIG1hbmlmZXN0LnZlcnNpb25zW21hbmlmZXN0LnZlcnNpb25zLmxlbmd0aCAtIDFdO1xuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLmNoZWNrU2VsZlVwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIGZ1bGxVcmwsIHJhdywgbGF0ZXN0VmVyc2lvbiwgbGF0ZXN0VmVyc2lvbkluZm8sIGNvbXBhcmVSZXN1bHQ7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBmdWxsVXJsID0gVmFyaWFibGUuZ2V0U2VsZkxhdGVzdFZlcnNpb25NYW5pZmVzdFVSTCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgSU8ubW9ua2V5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWV0aG9kOiAnR0VUJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiBmdWxsVXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXNwb25zZVR5cGU6ICd0ZXh0J1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3ID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VmVyc2lvbiA9IEpTT04ucGFyc2UocmF3KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhdGVzdFZlcnNpb25JbmZvID0gbGF0ZXN0VmVyc2lvbltsYXRlc3RWZXJzaW9uLmxlbmd0aCAtIDFdO1xuICAgICAgICAgICAgICAgICAgICAgICAgY29tcGFyZVJlc3VsdCA9IFZlcnNpb24uY29tcGFyZVZlcnNpb24oe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZlcnNpb24xOiBWZXJzaW9uLmdldEN1cnJlbnRWZXJzaW9uKCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjI6IGxhdGVzdFZlcnNpb24udmVyc2lvbiArICcgJyArIGxhdGVzdFZlcnNpb25JbmZvLnZlcnNpb25UYWcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0OiBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3VwZGF0ZVJ1bnRpbWVUbycgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGF0ZXN0VmVyc2lvbkluZm86IGxhdGVzdFZlcnNpb25JbmZvLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb21wYXJlUmVzdWx0OiBjb21wYXJlUmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLmNoZWNrUGx1Z2luc1VwZGF0ZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJhd1BsdWdpbnNEYXRhLCBpbnN0YWxsZWRQbHVnaW5zLCBwbHVnaW5zRGF0YSwgdXBkYXRhYmxlUGx1Z2lucywgX2ksIHBsdWdpbnNEYXRhXzEsIHBsdWdpbkRhdGEsIF9hLCBpbnN0YWxsZWRQbHVnaW5zXzEsIGluc3RhbGxlZFBsdWdpbjtcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2IpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9iLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDogcmV0dXJuIFs0IC8qeWllbGQqLywgSU8ubW9ua2V5KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBtZXRob2Q6ICdHRVQnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogVmFyaWFibGUuYmlnTWFuaWZlc3RVUkwoKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgcmF3UGx1Z2luc0RhdGEgPSBfYi5zZW50KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbnN0YWxsZWRQbHVnaW5zID0gUGx1Z2luVG9vbGtpdC5nZXRJbnN0YWxsZWRQbHVnaW5zKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBwbHVnaW5zRGF0YSA9IEpTT04ucGFyc2UocmF3UGx1Z2luc0RhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRhYmxlUGx1Z2lucyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChfaSA9IDAsIHBsdWdpbnNEYXRhXzEgPSBwbHVnaW5zRGF0YTsgX2kgPCBwbHVnaW5zRGF0YV8xLmxlbmd0aDsgX2krKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsdWdpbkRhdGEgPSBwbHVnaW5zRGF0YV8xW19pXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKF9hID0gMCwgaW5zdGFsbGVkUGx1Z2luc18xID0gaW5zdGFsbGVkUGx1Z2luczsgX2EgPCBpbnN0YWxsZWRQbHVnaW5zXzEubGVuZ3RoOyBfYSsrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RhbGxlZFBsdWdpbiA9IGluc3RhbGxlZFBsdWdpbnNfMVtfYV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW5EYXRhLmlkID09PSBpbnN0YWxsZWRQbHVnaW4ubWFuaWZlc3QuaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwbHVnaW5EYXRhLnZlcnNpb25zICE9PSBpbnN0YWxsZWRQbHVnaW4ubWFuaWZlc3QudmVyc2lvbnMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGFibGVQbHVnaW5zLnB1c2goeyBsYXRlc3RSZWxlYXNlOiBwbHVnaW5EYXRhLCBjdXJyZW50UmVsZWFzZTogaW5zdGFsbGVkUGx1Z2luIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFsyIC8qcmV0dXJuKi8sIHVwZGF0YWJsZVBsdWdpbnNdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIFJlbGVhc2VUcmFja2VyLnByb3RvdHlwZS51cGRhdGVTZWxmID0gZnVuY3Rpb24gKCkge1xuICAgICAgICBBQ0VWMlN0b3JhZ2UubG9jYWxTZXQoe1xuICAgICAgICAgICAgazogJ3NlbGZVcGRhdGVSZWNvcmQnLFxuICAgICAgICAgICAgdjoge1xuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogQ2xvY2suZ2V0VGltZXN0YW1wKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIElPLm9wZW5QYWdlSW5OZXdUYWIoe1xuICAgICAgICAgICAgdXJsOiBWYXJpYWJsZS5nZXRTZWxmTGF0ZXN0U2NyaXB0VVJMKCksXG4gICAgICAgICAgICBtYW5pZmVzdDogVmFyaWFibGUuTUFTVEVSX01BTklGRVNUXG4gICAgICAgIH0pO1xuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLnVwZGF0ZVBsdWdpbiA9IGZ1bmN0aW9uIChfYSkge1xuICAgICAgICB2YXIgbWFuaWZlc3QgPSBfYS5tYW5pZmVzdDtcbiAgICAgICAgUGx1Z2luVG9vbGtpdC51bmluc3RhbGxQbHVnaW4oeyBtYW5pZmVzdDogbWFuaWZlc3QgfSk7XG4gICAgICAgIFBsdWdpblRvb2xraXQuZG93bmxvYWRBbmRJbnN0YWxsUGx1Z2luUGFjayh7IG1hbmlmZXN0OiBtYW5pZmVzdCB9KTtcbiAgICB9O1xuICAgIFJlbGVhc2VUcmFja2VyLnByb3RvdHlwZS50aW1lVG9DaGVja1NlbGZVcGRhdGUgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgIHZhciB1cGRhdGVGcmVxdWVuY3kgPSBQcmVmZXJlbmNlcy5nZXRQcmVmZXJlbmNlKHsgY2F0ZWdvcnk6ICdnZW5lcmFsJywgazogJ3VwZGF0ZVJ1bnRpbWVXaGVuJyB9KTtcbiAgICAgICAgdmFyIHNlbGZVcGRhdGVSZWNvcmQgPSBBQ0VWMlN0b3JhZ2UubG9jYWxHZXQoeyBrOiAnc2VsZlVwZGF0ZVJlY29yZCcgfSk7XG4gICAgICAgIGlmICghc2VsZlVwZGF0ZVJlY29yZCkge1xuICAgICAgICAgICAgdmFyIHRpbWVzdGFtcCA9IENsb2NrLmdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgQUNFVjJTdG9yYWdlLmxvY2FsU2V0KHtcbiAgICAgICAgICAgICAgICBrOiAnc2VsZlVwZGF0ZVJlY29yZCcsXG4gICAgICAgICAgICAgICAgdjoge1xuICAgICAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc2VsZlVwZGF0ZVJlY29yZCA9IHtcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWVzdGFtcFxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXBkYXRlRnJlcXVlbmN5ID09PSAnc3RhcnR1cCcpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHVwZGF0ZUZyZXF1ZW5jeSA9PT0gJ2RhaWx5Jykge1xuICAgICAgICAgICAgdmFyIGxhc3RDaGVjayA9IHNlbGZVcGRhdGVSZWNvcmQudGltZXN0YW1wO1xuICAgICAgICAgICAgdmFyIG5vdyA9IENsb2NrLmdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgcmV0dXJuIG5vdyAtIGxhc3RDaGVjayA+PSA4NjQwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1cGRhdGVGcmVxdWVuY3kgPT09ICd3ZWVrbHknKSB7XG4gICAgICAgICAgICB2YXIgbGFzdENoZWNrID0gc2VsZlVwZGF0ZVJlY29yZC50aW1lc3RhbXA7XG4gICAgICAgICAgICB2YXIgbm93ID0gQ2xvY2suZ2V0VGltZXN0YW1wKCk7XG4gICAgICAgICAgICByZXR1cm4gbm93IC0gbGFzdENoZWNrID49IDYwNDgwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1cGRhdGVGcmVxdWVuY3kgPT09ICdtb250aGx5Jykge1xuICAgICAgICAgICAgdmFyIGxhc3RDaGVjayA9IHNlbGZVcGRhdGVSZWNvcmQudGltZXN0YW1wO1xuICAgICAgICAgICAgdmFyIG5vdyA9IENsb2NrLmdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgcmV0dXJuIG5vdyAtIGxhc3RDaGVjayA+PSAyNTkyMDAwMDAwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUudGltZVRvQ2hlY2tQbHVnaW5zVXBkYXRlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICB2YXIgdXBkYXRlRnJlcXVlbmN5ID0gUHJlZmVyZW5jZXMuZ2V0UHJlZmVyZW5jZSh7IGNhdGVnb3J5OiAnZ2VuZXJhbCcsIGs6ICd1cGRhdGVQbHVnaW5zV2hlbicgfSk7XG4gICAgICAgIHZhciBwbHVnaW5zVXBkYXRlUmVjb3JkID0gQUNFVjJTdG9yYWdlLmxvY2FsR2V0KHsgazogJ3BsdWdpbnNVcGRhdGVSZWNvcmQnIH0pO1xuICAgICAgICBpZiAoIXBsdWdpbnNVcGRhdGVSZWNvcmQpIHtcbiAgICAgICAgICAgIHZhciB0aW1lc3RhbXAgPSBDbG9jay5nZXRUaW1lc3RhbXAoKTtcbiAgICAgICAgICAgIEFDRVYyU3RvcmFnZS5sb2NhbFNldCh7XG4gICAgICAgICAgICAgICAgazogJ3BsdWdpbnNVcGRhdGVSZWNvcmQnLFxuICAgICAgICAgICAgICAgIHY6IHtcbiAgICAgICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHBsdWdpbnNVcGRhdGVSZWNvcmQgPSB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiB0aW1lc3RhbXBcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVwZGF0ZUZyZXF1ZW5jeSA9PT0gJ3N0YXJ0dXAnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmICh1cGRhdGVGcmVxdWVuY3kgPT09ICdkYWlseScpIHtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hlY2sgPSBwbHVnaW5zVXBkYXRlUmVjb3JkLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIHZhciBub3cgPSBDbG9jay5nZXRUaW1lc3RhbXAoKTtcbiAgICAgICAgICAgIHJldHVybiBub3cgLSBsYXN0Q2hlY2sgPj0gODY0MDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXBkYXRlRnJlcXVlbmN5ID09PSAnd2Vla2x5Jykge1xuICAgICAgICAgICAgdmFyIGxhc3RDaGVjayA9IHBsdWdpbnNVcGRhdGVSZWNvcmQudGltZXN0YW1wO1xuICAgICAgICAgICAgdmFyIG5vdyA9IENsb2NrLmdldFRpbWVzdGFtcCgpO1xuICAgICAgICAgICAgcmV0dXJuIG5vdyAtIGxhc3RDaGVjayA+PSA2MDQ4MDAwMDA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAodXBkYXRlRnJlcXVlbmN5ID09PSAnbW9udGhseScpIHtcbiAgICAgICAgICAgIHZhciBsYXN0Q2hlY2sgPSBwbHVnaW5zVXBkYXRlUmVjb3JkLnRpbWVzdGFtcDtcbiAgICAgICAgICAgIHZhciBub3cgPSBDbG9jay5nZXRUaW1lc3RhbXAoKTtcbiAgICAgICAgICAgIHJldHVybiBub3cgLSBsYXN0Q2hlY2sgPj0gMjU5MjAwMDAwMDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgIH07XG4gICAgUmVsZWFzZVRyYWNrZXIucHJvdG90eXBlLnNlbGZSZWxlYXNlVHJhY2tlciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgcmV0dXJuIF9fYXdhaXRlcih0aGlzLCB2b2lkIDAsIHZvaWQgMCwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgdmFyIHJlc3VsdDtcbiAgICAgICAgICAgIHZhciBfdGhpcyA9IHRoaXM7XG4gICAgICAgICAgICByZXR1cm4gX19nZW5lcmF0b3IodGhpcywgZnVuY3Rpb24gKF9hKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChfYS5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXRoaXMudGltZVRvQ2hlY2tTZWxmVXBkYXRlKCkpIHJldHVybiBbMyAvKmJyZWFrKi8sIDJdO1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFs0IC8qeWllbGQqLywgdGhpcy5jaGVja1NlbGZVcGRhdGUoKV07XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdCA9IF9hLnNlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXN1bHQuY29tcGFyZVJlc3VsdCA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBQ0VWMkRpYWxvZy5zaG93RGlhbG9nKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGl0bGU6IEkxOG4udCh7IGtleTogJ3ZlcnNpb24nIH0pICsgJyAnICsgcmVzdWx0LmxhdGVzdFZlcnNpb25JbmZvLnZlcnNpb24gKyAnICcgKyByZXN1bHQubGF0ZXN0VmVyc2lvbkluZm8udmVyc2lvblRhZyArICcgJyArIEkxOG4udCh7IGtleTogJ2hhcy1iZWVuLXJlbGVhc2VkJyB9KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29udGVudDogSTE4bi50KHsga2V5OiAnbmV3ZXItcnVudGltZS12ZXJzaW9uLWhhcy1iZWVuLXJlbGVhc2VkLXBsZWFzZS1jb25zaWRlci11cGRhdGluZycgfSkgKyAnICcgKyBJMThuLnQoeyBrZXk6ICdjdXJyZW50LXZlcnNpb24nIH0pICsgVmVyc2lvbi5nZXRDdXJyZW50VmVyc2lvbigpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBva0FjdGlvbjogZnVuY3Rpb24gKCkgeyByZXR1cm4gX3RoaXMudXBkYXRlU2VsZigpOyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYW5jZWxBY3Rpb246IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFDRVYyVG9hc3Quc2hvd1RvYXN0KHsgdGV4dDogSTE4bi50KHsga2V5OiAnY2FuY2VsbGVkJyB9KSB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2EubGFiZWwgPSAyO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6IHJldHVybiBbMiAvKnJldHVybiovXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfTtcbiAgICBSZWxlYXNlVHJhY2tlci5wcm90b3R5cGUucGx1Z2luc1JlbGVhc2VUcmFja2VyID0gZnVuY3Rpb24gKCkge1xuICAgICAgICByZXR1cm4gX19hd2FpdGVyKHRoaXMsIHZvaWQgMCwgdm9pZCAwLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB2YXIgdXBkYXRhYmxlUGx1Z2luc18xO1xuICAgICAgICAgICAgdmFyIF90aGlzID0gdGhpcztcbiAgICAgICAgICAgIHJldHVybiBfX2dlbmVyYXRvcih0aGlzLCBmdW5jdGlvbiAoX2EpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKF9hLmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghdGhpcy50aW1lVG9DaGVja1BsdWdpbnNVcGRhdGUoKSkgcmV0dXJuIFszIC8qYnJlYWsqLywgMl07XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gWzQgLyp5aWVsZCovLCB0aGlzLmNoZWNrUGx1Z2luc1VwZGF0ZSgpXTtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRhYmxlUGx1Z2luc18xID0gX2Euc2VudCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHVwZGF0YWJsZVBsdWdpbnNfMS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQUNFVjJEaWFsb2cuc2hvd0RpYWxvZyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBJMThuLnQoeyBrZXk6ICduZXdlci12ZXJzaW9uLW9mJyB9KSArICcgJyArIHVwZGF0YWJsZVBsdWdpbnNfMVswXS5sYXRlc3RSZWxlYXNlLmlkICsgJyAnICsgSTE4bi50KHsga2V5OiAnaGFzLWJlZW4tcmVsZWFzZWQnIH0pLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb250ZW50OiBJMThuLnQoeyBrZXk6ICdkby15b3Utd2FudC10by11cGRhdGUtdGhpcy1wbHVnaW4tZnJvbScgfSkgKyAnICcgKyB1cGRhdGFibGVQbHVnaW5zXzFbMF0uY3VycmVudFJlbGVhc2UubWFuaWZlc3QudmVyc2lvbnNbdXBkYXRhYmxlUGx1Z2luc18xWzBdLmN1cnJlbnRSZWxlYXNlLm1hbmlmZXN0LnZlcnNpb25zLmxlbmd0aCAtIDFdICsgJyAnICsgSTE4bi50KHsga2V5OiAndG8nIH0pICsgJyAnICsgdXBkYXRhYmxlUGx1Z2luc18xWzBdLmxhdGVzdFJlbGVhc2UudmVyc2lvbnNbdXBkYXRhYmxlUGx1Z2luc18xWzBdLmxhdGVzdFJlbGVhc2UudmVyc2lvbnMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9rQWN0aW9uOiBmdW5jdGlvbiAoKSB7IHJldHVybiBfdGhpcy51cGRhdGVQbHVnaW4oeyBtYW5pZmVzdDogdXBkYXRhYmxlUGx1Z2luc18xWzBdLmxhdGVzdFJlbGVhc2UgfSk7IH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYS5sYWJlbCA9IDI7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMjogcmV0dXJuIFsyIC8qcmV0dXJuKi9dO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9O1xuICAgIHJldHVybiBSZWxlYXNlVHJhY2tlcjtcbn0oKSk7XG5leHBvcnQgZGVmYXVsdCBuZXcgUmVsZWFzZVRyYWNrZXIoKTtcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/core/api/ReleaseTracker.ts\n");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("31b5ae4d220ffef0b1a4")
/******/ })();
/******/ 
/******/ }
);