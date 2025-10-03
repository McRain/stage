/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/.federation/entry.d3c51ad8708eeabfdf9e1e53582151dc.js":
/*!****************************************************************************!*\
  !*** ./node_modules/.federation/entry.d3c51ad8708eeabfdf9e1e53582151dc.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var D_Works_Presentator_slider_mods_particle_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js");


if(!__webpack_require__.federation.runtime){
	var prevFederation = __webpack_require__.federation;
	__webpack_require__.federation = {}
	for(var key in D_Works_Presentator_slider_mods_particle_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"]){
		__webpack_require__.federation[key] = D_Works_Presentator_slider_mods_particle_node_modules_module_federation_webpack_bundler_runtime_dist_index_esm_js__WEBPACK_IMPORTED_MODULE_0__["default"][key];
	}
	for(var key in prevFederation){
		__webpack_require__.federation[key] = prevFederation[key];
	}
}
if(!__webpack_require__.federation.instance){

	__webpack_require__.federation.instance = __webpack_require__.federation.runtime.init(__webpack_require__.federation.initOptions);
	if(__webpack_require__.federation.attachShareScopeMap){
		__webpack_require__.federation.attachShareScopeMap(__webpack_require__)
	}
	if(__webpack_require__.federation.installInitialConsumes){
		__webpack_require__.federation.installInitialConsumes()
	}

	if(!__webpack_require__.federation.isMFRemote && __webpack_require__.federation.prefetch){
	__webpack_require__.federation.prefetch()
	}
}

/***/ }),

/***/ "./node_modules/@module-federation/error-codes/dist/index.esm.mjs":
/*!************************************************************************!*\
  !*** ./node_modules/@module-federation/error-codes/dist/index.esm.mjs ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BUILD_001: () => (/* binding */ BUILD_001),
/* harmony export */   BUILD_002: () => (/* binding */ BUILD_002),
/* harmony export */   RUNTIME_001: () => (/* binding */ RUNTIME_001),
/* harmony export */   RUNTIME_002: () => (/* binding */ RUNTIME_002),
/* harmony export */   RUNTIME_003: () => (/* binding */ RUNTIME_003),
/* harmony export */   RUNTIME_004: () => (/* binding */ RUNTIME_004),
/* harmony export */   RUNTIME_005: () => (/* binding */ RUNTIME_005),
/* harmony export */   RUNTIME_006: () => (/* binding */ RUNTIME_006),
/* harmony export */   RUNTIME_007: () => (/* binding */ RUNTIME_007),
/* harmony export */   RUNTIME_008: () => (/* binding */ RUNTIME_008),
/* harmony export */   RUNTIME_009: () => (/* binding */ RUNTIME_009),
/* harmony export */   TYPE_001: () => (/* binding */ TYPE_001),
/* harmony export */   buildDescMap: () => (/* binding */ buildDescMap),
/* harmony export */   errorDescMap: () => (/* binding */ errorDescMap),
/* harmony export */   getShortErrorMsg: () => (/* binding */ getShortErrorMsg),
/* harmony export */   runtimeDescMap: () => (/* binding */ runtimeDescMap),
/* harmony export */   typeDescMap: () => (/* binding */ typeDescMap)
/* harmony export */ });
const RUNTIME_001 = 'RUNTIME-001';
const RUNTIME_002 = 'RUNTIME-002';
const RUNTIME_003 = 'RUNTIME-003';
const RUNTIME_004 = 'RUNTIME-004';
const RUNTIME_005 = 'RUNTIME-005';
const RUNTIME_006 = 'RUNTIME-006';
const RUNTIME_007 = 'RUNTIME-007';
const RUNTIME_008 = 'RUNTIME-008';
const RUNTIME_009 = 'RUNTIME-009';
const TYPE_001 = 'TYPE-001';
const BUILD_001 = 'BUILD-001';
const BUILD_002 = 'BUILD-002';

const getDocsUrl = (errorCode)=>{
    const type = errorCode.split('-')[0].toLowerCase();
    return `View the docs to see how to solve: https://module-federation.io/guide/troubleshooting/${type}/${errorCode}`;
};
const getShortErrorMsg = (errorCode, errorDescMap, args, originalErrorMsg)=>{
    const msg = [
        `${[
            errorDescMap[errorCode]
        ]} #${errorCode}`
    ];
    args && msg.push(`args: ${JSON.stringify(args)}`);
    msg.push(getDocsUrl(errorCode));
    originalErrorMsg && msg.push(`Original Error Message:\n ${originalErrorMsg}`);
    return msg.join('\n');
};

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

const runtimeDescMap = {
    [RUNTIME_001]: 'Failed to get remoteEntry exports.',
    [RUNTIME_002]: 'The remote entry interface does not contain "init"',
    [RUNTIME_003]: 'Failed to get manifest.',
    [RUNTIME_004]: 'Failed to locate remote.',
    [RUNTIME_005]: 'Invalid loadShareSync function call from bundler runtime',
    [RUNTIME_006]: 'Invalid loadShareSync function call from runtime',
    [RUNTIME_007]: 'Failed to get remote snapshot.',
    [RUNTIME_008]: 'Failed to load script resources.',
    [RUNTIME_009]: 'Please call createInstance first.'
};
const typeDescMap = {
    [TYPE_001]: 'Failed to generate type declaration. Execute the below cmd to reproduce and fix the error.'
};
const buildDescMap = {
    [BUILD_001]: 'Failed to find expose module.',
    [BUILD_002]: 'PublicPath is required in prod mode.'
};
const errorDescMap = _extends({}, runtimeDescMap, typeDescMap, buildDescMap);


//# sourceMappingURL=index.esm.mjs.map


/***/ }),

/***/ "./node_modules/@module-federation/runtime-core/dist/index.esm.js":
/*!************************************************************************!*\
  !*** ./node_modules/@module-federation/runtime-core/dist/index.esm.js ***!
  \************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   CurrentGlobal: () => (/* binding */ CurrentGlobal),
/* harmony export */   Global: () => (/* binding */ Global),
/* harmony export */   Module: () => (/* binding */ Module),
/* harmony export */   ModuleFederation: () => (/* binding */ ModuleFederation),
/* harmony export */   addGlobalSnapshot: () => (/* binding */ addGlobalSnapshot),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   getGlobalFederationConstructor: () => (/* binding */ getGlobalFederationConstructor),
/* harmony export */   getGlobalSnapshot: () => (/* binding */ getGlobalSnapshot),
/* harmony export */   getInfoWithoutType: () => (/* binding */ getInfoWithoutType),
/* harmony export */   getRegisteredShare: () => (/* binding */ getRegisteredShare),
/* harmony export */   getRemoteEntry: () => (/* binding */ getRemoteEntry),
/* harmony export */   getRemoteInfo: () => (/* binding */ getRemoteInfo),
/* harmony export */   helpers: () => (/* binding */ helpers),
/* harmony export */   isStaticResourcesEqual: () => (/* binding */ isStaticResourcesEqual),
/* harmony export */   loadScript: () => (/* reexport safe */ _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScript),
/* harmony export */   loadScriptNode: () => (/* reexport safe */ _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScriptNode),
/* harmony export */   matchRemoteWithNameAndExpose: () => (/* binding */ matchRemoteWithNameAndExpose),
/* harmony export */   registerGlobalPlugins: () => (/* binding */ registerGlobalPlugins),
/* harmony export */   resetFederationGlobalInfo: () => (/* binding */ resetFederationGlobalInfo),
/* harmony export */   safeWrapper: () => (/* binding */ safeWrapper),
/* harmony export */   satisfy: () => (/* binding */ satisfy),
/* harmony export */   setGlobalFederationConstructor: () => (/* binding */ setGlobalFederationConstructor),
/* harmony export */   setGlobalFederationInstance: () => (/* binding */ setGlobalFederationInstance),
/* harmony export */   types: () => (/* binding */ index)
/* harmony export */ });
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.esm.js */ "./node_modules/@module-federation/runtime-core/dist/polyfills.esm.js");
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");
/* harmony import */ var _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @module-federation/error-codes */ "./node_modules/@module-federation/error-codes/dist/index.esm.mjs");





const LOG_CATEGORY = '[ Federation Runtime ]';
// FIXME: pre-bundle ?
const logger = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLogger)(LOG_CATEGORY);
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function assert(condition, msg) {
    if (!condition) {
        error(msg);
    }
}
function error(msg) {
    if (msg instanceof Error) {
        // Check if the message already starts with the log category to avoid duplication
        if (!msg.message.startsWith(LOG_CATEGORY)) {
            msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        }
        throw msg;
    }
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
}
function warn(msg) {
    if (msg instanceof Error) {
        // Check if the message already starts with the log category to avoid duplication
        if (!msg.message.startsWith(LOG_CATEGORY)) {
            msg.message = `${LOG_CATEGORY}: ${msg.message}`;
        }
        logger.warn(msg);
    } else {
        logger.warn(msg);
    }
}

function addUniqueItem(arr, item) {
    if (arr.findIndex((name)=>name === item) === -1) {
        arr.push(item);
    }
    return arr;
}
function getFMId(remoteInfo) {
    if ('version' in remoteInfo && remoteInfo.version) {
        return `${remoteInfo.name}:${remoteInfo.version}`;
    } else if ('entry' in remoteInfo && remoteInfo.entry) {
        return `${remoteInfo.name}:${remoteInfo.entry}`;
    } else {
        return `${remoteInfo.name}`;
    }
}
function isRemoteInfoWithEntry(remote) {
    return typeof remote.entry !== 'undefined';
}
function isPureRemoteEntry(remote) {
    return !remote.entry.includes('.json');
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeWrapper(callback, disableWarn) {
    try {
        const res = await callback();
        return res;
    } catch (e) {
        !disableWarn && warn(e);
        return;
    }
}
function isObject(val) {
    return val && typeof val === 'object';
}
const objectToString = Object.prototype.toString;
// eslint-disable-next-line @typescript-eslint/ban-types
function isPlainObject(val) {
    return objectToString.call(val) === '[object Object]';
}
function isStaticResourcesEqual(url1, url2) {
    const REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function arrayOptions(options) {
    return Array.isArray(options) ? options : [
        options
    ];
}
function getRemoteEntryInfoFromSnapshot(snapshot) {
    const defaultRemoteEntryInfo = {
        url: '',
        type: 'global',
        globalName: ''
    };
    if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() || (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isReactNativeEnv)()) {
        return 'remoteEntry' in snapshot ? {
            url: snapshot.remoteEntry,
            type: snapshot.remoteEntryType,
            globalName: snapshot.globalName
        } : defaultRemoteEntryInfo;
    }
    if ('ssrRemoteEntry' in snapshot) {
        return {
            url: snapshot.ssrRemoteEntry || defaultRemoteEntryInfo.url,
            type: snapshot.ssrRemoteEntryType || defaultRemoteEntryInfo.type,
            globalName: snapshot.globalName
        };
    }
    return defaultRemoteEntryInfo;
}
const processModuleAlias = (name, subPath)=>{
    // @host/ ./button -> @host/button
    let moduleName;
    if (name.endsWith('/')) {
        moduleName = name.slice(0, -1);
    } else {
        moduleName = name;
    }
    if (subPath.startsWith('.')) {
        subPath = subPath.slice(1);
    }
    moduleName = moduleName + subPath;
    return moduleName;
};

const CurrentGlobal = typeof globalThis === 'object' ? globalThis : window;
const nativeGlobal = (()=>{
    try {
        // get real window (incase of sandbox)
        return document.defaultView;
    } catch (e) {
        // node env
        return CurrentGlobal;
    }
})();
const Global = nativeGlobal;
function definePropertyGlobalVal(target, key, val) {
    Object.defineProperty(target, key, {
        value: val,
        configurable: false,
        writable: true
    });
}
function includeOwnProperty(target, key) {
    return Object.hasOwnProperty.call(target, key);
}
// This section is to prevent encapsulation by certain microfrontend frameworks. Due to reuse policies, sandbox escapes.
// The sandbox in the microfrontend does not replicate the value of 'configurable'.
// If there is no loading content on the global object, this section defines the loading object.
if (!includeOwnProperty(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__')) {
    definePropertyGlobalVal(CurrentGlobal, '__GLOBAL_LOADING_REMOTE_ENTRY__', {});
}
const globalLoading = CurrentGlobal.__GLOBAL_LOADING_REMOTE_ENTRY__;
function setGlobalDefaultVal(target) {
    var _target___FEDERATION__, _target___FEDERATION__1, _target___FEDERATION__2, _target___FEDERATION__3, _target___FEDERATION__4, _target___FEDERATION__5;
    if (includeOwnProperty(target, '__VMOK__') && !includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', target.__VMOK__);
    }
    if (!includeOwnProperty(target, '__FEDERATION__')) {
        definePropertyGlobalVal(target, '__FEDERATION__', {
            __GLOBAL_PLUGIN__: [],
            __INSTANCES__: [],
            moduleInfo: {},
            __SHARE__: {},
            __MANIFEST_LOADING__: {},
            __PRELOADED_MAP__: new Map()
        });
        definePropertyGlobalVal(target, '__VMOK__', target.__FEDERATION__);
    }
    var ___GLOBAL_PLUGIN__;
    (___GLOBAL_PLUGIN__ = (_target___FEDERATION__ = target.__FEDERATION__).__GLOBAL_PLUGIN__) != null ? ___GLOBAL_PLUGIN__ : _target___FEDERATION__.__GLOBAL_PLUGIN__ = [];
    var ___INSTANCES__;
    (___INSTANCES__ = (_target___FEDERATION__1 = target.__FEDERATION__).__INSTANCES__) != null ? ___INSTANCES__ : _target___FEDERATION__1.__INSTANCES__ = [];
    var _moduleInfo;
    (_moduleInfo = (_target___FEDERATION__2 = target.__FEDERATION__).moduleInfo) != null ? _moduleInfo : _target___FEDERATION__2.moduleInfo = {};
    var ___SHARE__;
    (___SHARE__ = (_target___FEDERATION__3 = target.__FEDERATION__).__SHARE__) != null ? ___SHARE__ : _target___FEDERATION__3.__SHARE__ = {};
    var ___MANIFEST_LOADING__;
    (___MANIFEST_LOADING__ = (_target___FEDERATION__4 = target.__FEDERATION__).__MANIFEST_LOADING__) != null ? ___MANIFEST_LOADING__ : _target___FEDERATION__4.__MANIFEST_LOADING__ = {};
    var ___PRELOADED_MAP__;
    (___PRELOADED_MAP__ = (_target___FEDERATION__5 = target.__FEDERATION__).__PRELOADED_MAP__) != null ? ___PRELOADED_MAP__ : _target___FEDERATION__5.__PRELOADED_MAP__ = new Map();
}
setGlobalDefaultVal(CurrentGlobal);
setGlobalDefaultVal(nativeGlobal);
function resetFederationGlobalInfo() {
    CurrentGlobal.__FEDERATION__.__GLOBAL_PLUGIN__ = [];
    CurrentGlobal.__FEDERATION__.__INSTANCES__ = [];
    CurrentGlobal.__FEDERATION__.moduleInfo = {};
    CurrentGlobal.__FEDERATION__.__SHARE__ = {};
    CurrentGlobal.__FEDERATION__.__MANIFEST_LOADING__ = {};
    Object.keys(globalLoading).forEach((key)=>{
        delete globalLoading[key];
    });
}
function setGlobalFederationInstance(FederationInstance) {
    CurrentGlobal.__FEDERATION__.__INSTANCES__.push(FederationInstance);
}
function getGlobalFederationConstructor() {
    return CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__;
}
function setGlobalFederationConstructor(FederationConstructor, isDebug = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isDebugMode)()) {
    if (isDebug) {
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR__ = FederationConstructor;
        CurrentGlobal.__FEDERATION__.__DEBUG_CONSTRUCTOR_VERSION__ = "0.19.1";
    }
}
// eslint-disable-next-line @typescript-eslint/ban-types
function getInfoWithoutType(target, key) {
    if (typeof key === 'string') {
        const keyRes = target[key];
        if (keyRes) {
            return {
                value: target[key],
                key: key
            };
        } else {
            const targetKeys = Object.keys(target);
            for (const targetKey of targetKeys){
                const [targetTypeOrName, _] = targetKey.split(':');
                const nKey = `${targetTypeOrName}:${key}`;
                const typeWithKeyRes = target[nKey];
                if (typeWithKeyRes) {
                    return {
                        value: typeWithKeyRes,
                        key: nKey
                    };
                }
            }
            return {
                value: undefined,
                key: key
            };
        }
    } else {
        throw new Error('key must be string');
    }
}
const getGlobalSnapshot = ()=>nativeGlobal.__FEDERATION__.moduleInfo;
const getTargetSnapshotInfoByModuleInfo = (moduleInfo, snapshot)=>{
    // Check if the remote is included in the hostSnapshot
    const moduleKey = getFMId(moduleInfo);
    const getModuleInfo = getInfoWithoutType(snapshot, moduleKey).value;
    // The remoteSnapshot might not include a version
    if (getModuleInfo && !getModuleInfo.version && 'version' in moduleInfo && moduleInfo['version']) {
        getModuleInfo.version = moduleInfo['version'];
    }
    if (getModuleInfo) {
        return getModuleInfo;
    }
    // If the remote is not included in the hostSnapshot, deploy a micro app snapshot
    if ('version' in moduleInfo && moduleInfo['version']) {
        const { version } = moduleInfo, resModuleInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(moduleInfo, [
            "version"
        ]);
        const moduleKeyWithoutVersion = getFMId(resModuleInfo);
        const getModuleInfoWithoutVersion = getInfoWithoutType(nativeGlobal.__FEDERATION__.moduleInfo, moduleKeyWithoutVersion).value;
        if ((getModuleInfoWithoutVersion == null ? void 0 : getModuleInfoWithoutVersion.version) === version) {
            return getModuleInfoWithoutVersion;
        }
    }
    return;
};
const getGlobalSnapshotInfoByModuleInfo = (moduleInfo)=>getTargetSnapshotInfoByModuleInfo(moduleInfo, nativeGlobal.__FEDERATION__.moduleInfo);
const setGlobalSnapshotInfoByModuleInfo = (remoteInfo, moduleDetailInfo)=>{
    const moduleKey = getFMId(remoteInfo);
    nativeGlobal.__FEDERATION__.moduleInfo[moduleKey] = moduleDetailInfo;
    return nativeGlobal.__FEDERATION__.moduleInfo;
};
const addGlobalSnapshot = (moduleInfos)=>{
    nativeGlobal.__FEDERATION__.moduleInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, nativeGlobal.__FEDERATION__.moduleInfo, moduleInfos);
    return ()=>{
        const keys = Object.keys(moduleInfos);
        for (const key of keys){
            delete nativeGlobal.__FEDERATION__.moduleInfo[key];
        }
    };
};
const getRemoteEntryExports = (name, globalName)=>{
    const remoteEntryKey = globalName || `__FEDERATION_${name}:custom__`;
    const entryExports = CurrentGlobal[remoteEntryKey];
    return {
        remoteEntryKey,
        entryExports
    };
};
// This function is used to register global plugins.
// It iterates over the provided plugins and checks if they are already registered.
// If a plugin is not registered, it is added to the global plugins.
// If a plugin is already registered, a warning message is logged.
const registerGlobalPlugins = (plugins)=>{
    const { __GLOBAL_PLUGIN__ } = nativeGlobal.__FEDERATION__;
    plugins.forEach((plugin)=>{
        if (__GLOBAL_PLUGIN__.findIndex((p)=>p.name === plugin.name) === -1) {
            __GLOBAL_PLUGIN__.push(plugin);
        } else {
            warn(`The plugin ${plugin.name} has been registered.`);
        }
    });
};
const getGlobalHostPlugins = ()=>nativeGlobal.__FEDERATION__.__GLOBAL_PLUGIN__;
const getPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.get(id);
const setPreloaded = (id)=>CurrentGlobal.__FEDERATION__.__PRELOADED_MAP__.set(id, true);

const DEFAULT_SCOPE = 'default';
const DEFAULT_REMOTE_TYPE = 'global';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// those constants are based on https://www.rubydoc.info/gems/semantic_range/3.0.0/SemanticRange#BUILDIDENTIFIER-constant
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
const buildIdentifier = '[0-9A-Za-z-]+';
const build = `(?:\\+(${buildIdentifier}(?:\\.${buildIdentifier})*))`;
const numericIdentifier = '0|[1-9]\\d*';
const numericIdentifierLoose = '[0-9]+';
const nonNumericIdentifier = '\\d*[a-zA-Z-][a-zA-Z0-9-]*';
const preReleaseIdentifierLoose = `(?:${numericIdentifierLoose}|${nonNumericIdentifier})`;
const preReleaseLoose = `(?:-?(${preReleaseIdentifierLoose}(?:\\.${preReleaseIdentifierLoose})*))`;
const preReleaseIdentifier = `(?:${numericIdentifier}|${nonNumericIdentifier})`;
const preRelease = `(?:-(${preReleaseIdentifier}(?:\\.${preReleaseIdentifier})*))`;
const xRangeIdentifier = `${numericIdentifier}|x|X|\\*`;
const xRangePlain = `[v=\\s]*(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:\\.(${xRangeIdentifier})(?:${preRelease})?${build}?)?)?`;
const hyphenRange = `^\\s*(${xRangePlain})\\s+-\\s+(${xRangePlain})\\s*$`;
const mainVersionLoose = `(${numericIdentifierLoose})\\.(${numericIdentifierLoose})\\.(${numericIdentifierLoose})`;
const loosePlain = `[v=\\s]*${mainVersionLoose}${preReleaseLoose}?${build}?`;
const gtlt = '((?:<|>)?=?)';
const comparatorTrim = `(\\s*)${gtlt}\\s*(${loosePlain}|${xRangePlain})`;
const loneTilde = '(?:~>?)';
const tildeTrim = `(\\s*)${loneTilde}\\s+`;
const loneCaret = '(?:\\^)';
const caretTrim = `(\\s*)${loneCaret}\\s+`;
const star = '(<|>)?=?\\s*\\*';
const caret = `^${loneCaret}${xRangePlain}$`;
const mainVersion = `(${numericIdentifier})\\.(${numericIdentifier})\\.(${numericIdentifier})`;
const fullPlain = `v?${mainVersion}${preRelease}?${build}?`;
const tilde = `^${loneTilde}${xRangePlain}$`;
const xRange = `^${gtlt}\\s*${xRangePlain}$`;
const comparator = `^${gtlt}\\s*(${fullPlain})$|^$`;
// copy from semver package
const gte0 = '^\\s*>=\\s*0.0.0\\s*$';

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseRegex(source) {
    return new RegExp(source);
}
function isXVersion(version) {
    return !version || version.toLowerCase() === 'x' || version === '*';
}
function pipe(...fns) {
    return (x)=>fns.reduce((v, f)=>f(v), x);
}
function extractComparator(comparatorString) {
    return comparatorString.match(parseRegex(comparator));
}
function combineVersion(major, minor, patch, preRelease) {
    const mainVersion = `${major}.${minor}.${patch}`;
    if (preRelease) {
        return `${mainVersion}-${preRelease}`;
    }
    return mainVersion;
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseHyphen(range) {
    return range.replace(parseRegex(hyphenRange), (_range, from, fromMajor, fromMinor, fromPatch, _fromPreRelease, _fromBuild, to, toMajor, toMinor, toPatch, toPreRelease)=>{
        if (isXVersion(fromMajor)) {
            from = '';
        } else if (isXVersion(fromMinor)) {
            from = `>=${fromMajor}.0.0`;
        } else if (isXVersion(fromPatch)) {
            from = `>=${fromMajor}.${fromMinor}.0`;
        } else {
            from = `>=${from}`;
        }
        if (isXVersion(toMajor)) {
            to = '';
        } else if (isXVersion(toMinor)) {
            to = `<${Number(toMajor) + 1}.0.0-0`;
        } else if (isXVersion(toPatch)) {
            to = `<${toMajor}.${Number(toMinor) + 1}.0-0`;
        } else if (toPreRelease) {
            to = `<=${toMajor}.${toMinor}.${toPatch}-${toPreRelease}`;
        } else {
            to = `<=${to}`;
        }
        return `${from} ${to}`.trim();
    });
}
function parseComparatorTrim(range) {
    return range.replace(parseRegex(comparatorTrim), '$1$2$3');
}
function parseTildeTrim(range) {
    return range.replace(parseRegex(tildeTrim), '$1~');
}
function parseCaretTrim(range) {
    return range.replace(parseRegex(caretTrim), '$1^');
}
function parseCarets(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(caret), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                if (major === '0') {
                    return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
                } else {
                    return `>=${major}.${minor}.0 <${Number(major) + 1}.0.0-0`;
                }
            } else if (preRelease) {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
                    }
                } else {
                    return `>=${major}.${minor}.${patch}-${preRelease} <${Number(major) + 1}.0.0-0`;
                }
            } else {
                if (major === '0') {
                    if (minor === '0') {
                        return `>=${major}.${minor}.${patch} <${major}.${minor}.${Number(patch) + 1}-0`;
                    } else {
                        return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
                    }
                }
                return `>=${major}.${minor}.${patch} <${Number(major) + 1}.0.0-0`;
            }
        })).join(' ');
}
function parseTildes(range) {
    return range.trim().split(/\s+/).map((rangeVersion)=>rangeVersion.replace(parseRegex(tilde), (_, major, minor, patch, preRelease)=>{
            if (isXVersion(major)) {
                return '';
            } else if (isXVersion(minor)) {
                return `>=${major}.0.0 <${Number(major) + 1}.0.0-0`;
            } else if (isXVersion(patch)) {
                return `>=${major}.${minor}.0 <${major}.${Number(minor) + 1}.0-0`;
            } else if (preRelease) {
                return `>=${major}.${minor}.${patch}-${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return `>=${major}.${minor}.${patch} <${major}.${Number(minor) + 1}.0-0`;
        })).join(' ');
}
function parseXRanges(range) {
    return range.split(/\s+/).map((rangeVersion)=>rangeVersion.trim().replace(parseRegex(xRange), (ret, gtlt, major, minor, patch, preRelease)=>{
            const isXMajor = isXVersion(major);
            const isXMinor = isXMajor || isXVersion(minor);
            const isXPatch = isXMinor || isXVersion(patch);
            if (gtlt === '=' && isXPatch) {
                gtlt = '';
            }
            preRelease = '';
            if (isXMajor) {
                if (gtlt === '>' || gtlt === '<') {
                    // nothing is allowed
                    return '<0.0.0-0';
                } else {
                    // nothing is forbidden
                    return '*';
                }
            } else if (gtlt && isXPatch) {
                // replace X with 0
                if (isXMinor) {
                    minor = 0;
                }
                patch = 0;
                if (gtlt === '>') {
                    // >1 => >=2.0.0
                    // >1.2 => >=1.3.0
                    gtlt = '>=';
                    if (isXMinor) {
                        major = Number(major) + 1;
                        minor = 0;
                        patch = 0;
                    } else {
                        minor = Number(minor) + 1;
                        patch = 0;
                    }
                } else if (gtlt === '<=') {
                    // <=0.7.x is actually <0.8.0, since any 0.7.x should pass
                    // Similarly, <=7.x is actually <8.0.0, etc.
                    gtlt = '<';
                    if (isXMinor) {
                        major = Number(major) + 1;
                    } else {
                        minor = Number(minor) + 1;
                    }
                }
                if (gtlt === '<') {
                    preRelease = '-0';
                }
                return `${gtlt + major}.${minor}.${patch}${preRelease}`;
            } else if (isXMinor) {
                return `>=${major}.0.0${preRelease} <${Number(major) + 1}.0.0-0`;
            } else if (isXPatch) {
                return `>=${major}.${minor}.0${preRelease} <${major}.${Number(minor) + 1}.0-0`;
            }
            return ret;
        })).join(' ');
}
function parseStar(range) {
    return range.trim().replace(parseRegex(star), '');
}
function parseGTE0(comparatorString) {
    return comparatorString.trim().replace(parseRegex(gte0), '');
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function compareAtom(rangeAtom, versionAtom) {
    rangeAtom = Number(rangeAtom) || rangeAtom;
    versionAtom = Number(versionAtom) || versionAtom;
    if (rangeAtom > versionAtom) {
        return 1;
    }
    if (rangeAtom === versionAtom) {
        return 0;
    }
    return -1;
}
function comparePreRelease(rangeAtom, versionAtom) {
    const { preRelease: rangePreRelease } = rangeAtom;
    const { preRelease: versionPreRelease } = versionAtom;
    if (rangePreRelease === undefined && Boolean(versionPreRelease)) {
        return 1;
    }
    if (Boolean(rangePreRelease) && versionPreRelease === undefined) {
        return -1;
    }
    if (rangePreRelease === undefined && versionPreRelease === undefined) {
        return 0;
    }
    for(let i = 0, n = rangePreRelease.length; i <= n; i++){
        const rangeElement = rangePreRelease[i];
        const versionElement = versionPreRelease[i];
        if (rangeElement === versionElement) {
            continue;
        }
        if (rangeElement === undefined && versionElement === undefined) {
            return 0;
        }
        if (!rangeElement) {
            return 1;
        }
        if (!versionElement) {
            return -1;
        }
        return compareAtom(rangeElement, versionElement);
    }
    return 0;
}
function compareVersion(rangeAtom, versionAtom) {
    return compareAtom(rangeAtom.major, versionAtom.major) || compareAtom(rangeAtom.minor, versionAtom.minor) || compareAtom(rangeAtom.patch, versionAtom.patch) || comparePreRelease(rangeAtom, versionAtom);
}
function eq(rangeAtom, versionAtom) {
    return rangeAtom.version === versionAtom.version;
}
function compare(rangeAtom, versionAtom) {
    switch(rangeAtom.operator){
        case '':
        case '=':
            return eq(rangeAtom, versionAtom);
        case '>':
            return compareVersion(rangeAtom, versionAtom) < 0;
        case '>=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) < 0;
        case '<':
            return compareVersion(rangeAtom, versionAtom) > 0;
        case '<=':
            return eq(rangeAtom, versionAtom) || compareVersion(rangeAtom, versionAtom) > 0;
        case undefined:
            {
                // mean * or x -> all versions
                return true;
            }
        default:
            return false;
    }
}

// fork from https://github.com/originjs/vite-plugin-federation/blob/v1.1.12/packages/lib/src/utils/semver/index.ts
// Copyright (c)
// vite-plugin-federation is licensed under Mulan PSL v2.
// You can use this software according to the terms and conditions of the Mulan PSL v2.
// You may obtain a copy of Mulan PSL v2 at:
//      http://license.coscl.org.cn/MulanPSL2
// THIS SOFTWARE IS PROVIDED ON AN "AS IS" BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO NON-INFRINGEMENT, MERCHANTABILITY OR FIT FOR A PARTICULAR PURPOSE.
// See the Mulan PSL v2 for more details.
function parseComparatorString(range) {
    return pipe(// handle caret
    // ^ --> * (any, kinda silly)
    // ^2, ^2.x, ^2.x.x --> >=2.0.0 <3.0.0-0
    // ^2.0, ^2.0.x --> >=2.0.0 <3.0.0-0
    // ^1.2, ^1.2.x --> >=1.2.0 <2.0.0-0
    // ^1.2.3 --> >=1.2.3 <2.0.0-0
    // ^1.2.0 --> >=1.2.0 <2.0.0-0
    parseCarets, // handle tilde
    // ~, ~> --> * (any, kinda silly)
    // ~2, ~2.x, ~2.x.x, ~>2, ~>2.x ~>2.x.x --> >=2.0.0 <3.0.0-0
    // ~2.0, ~2.0.x, ~>2.0, ~>2.0.x --> >=2.0.0 <2.1.0-0
    // ~1.2, ~1.2.x, ~>1.2, ~>1.2.x --> >=1.2.0 <1.3.0-0
    // ~1.2.3, ~>1.2.3 --> >=1.2.3 <1.3.0-0
    // ~1.2.0, ~>1.2.0 --> >=1.2.0 <1.3.0-0
    parseTildes, parseXRanges, parseStar)(range);
}
function parseRange(range) {
    return pipe(// handle hyphenRange
    // `1.2.3 - 1.2.4` => `>=1.2.3 <=1.2.4`
    parseHyphen, // handle trim comparator
    // `> 1.2.3 < 1.2.5` => `>1.2.3 <1.2.5`
    parseComparatorTrim, // handle trim tilde
    // `~ 1.2.3` => `~1.2.3`
    parseTildeTrim, // handle trim caret
    // `^ 1.2.3` => `^1.2.3`
    parseCaretTrim)(range.trim()).split(/\s+/).join(' ');
}
function satisfy(version, range) {
    if (!version) {
        return false;
    }
    // Extract version details once
    const extractedVersion = extractComparator(version);
    if (!extractedVersion) {
        // If the version string is invalid, it can't satisfy any range
        return false;
    }
    const [, versionOperator, , versionMajor, versionMinor, versionPatch, versionPreRelease] = extractedVersion;
    const versionAtom = {
        operator: versionOperator,
        version: combineVersion(versionMajor, versionMinor, versionPatch, versionPreRelease),
        major: versionMajor,
        minor: versionMinor,
        patch: versionPatch,
        preRelease: versionPreRelease == null ? void 0 : versionPreRelease.split('.')
    };
    // Split the range by || to handle OR conditions
    const orRanges = range.split('||');
    for (const orRange of orRanges){
        const trimmedOrRange = orRange.trim();
        if (!trimmedOrRange) {
            // An empty range string signifies wildcard *, satisfy any valid version
            // (We already checked if the version itself is valid)
            return true;
        }
        // Handle simple wildcards explicitly before complex parsing
        if (trimmedOrRange === '*' || trimmedOrRange === 'x') {
            return true;
        }
        try {
            // Apply existing parsing logic to the current OR sub-range
            const parsedSubRange = parseRange(trimmedOrRange); // Handles hyphens, trims etc.
            // Check if the result of initial parsing is empty, which can happen
            // for some wildcard cases handled by parseRange/parseComparatorString.
            // E.g. `parseStar` used in `parseComparatorString` returns ''.
            if (!parsedSubRange.trim()) {
                // If parsing results in empty string, treat as wildcard match
                return true;
            }
            const parsedComparatorString = parsedSubRange.split(' ').map((rangeVersion)=>parseComparatorString(rangeVersion)) // Expands ^, ~
            .join(' ');
            // Check again if the comparator string became empty after specific parsing like ^ or ~
            if (!parsedComparatorString.trim()) {
                return true;
            }
            // Split the sub-range by space for implicit AND conditions
            const comparators = parsedComparatorString.split(/\s+/).map((comparator)=>parseGTE0(comparator))// Filter out empty strings that might result from multiple spaces
            .filter(Boolean);
            // If a sub-range becomes empty after parsing (e.g., invalid characters),
            // it cannot be satisfied. This check might be redundant now but kept for safety.
            if (comparators.length === 0) {
                continue;
            }
            let subRangeSatisfied = true;
            for (const comparator of comparators){
                const extractedComparator = extractComparator(comparator);
                // If any part of the AND sub-range is invalid, the sub-range is not satisfied
                if (!extractedComparator) {
                    subRangeSatisfied = false;
                    break;
                }
                const [, rangeOperator, , rangeMajor, rangeMinor, rangePatch, rangePreRelease] = extractedComparator;
                const rangeAtom = {
                    operator: rangeOperator,
                    version: combineVersion(rangeMajor, rangeMinor, rangePatch, rangePreRelease),
                    major: rangeMajor,
                    minor: rangeMinor,
                    patch: rangePatch,
                    preRelease: rangePreRelease == null ? void 0 : rangePreRelease.split('.')
                };
                // Check if the version satisfies this specific comparator in the AND chain
                if (!compare(rangeAtom, versionAtom)) {
                    subRangeSatisfied = false; // This part of the AND condition failed
                    break; // No need to check further comparators in this sub-range
                }
            }
            // If all AND conditions within this OR sub-range were met, the overall range is satisfied
            if (subRangeSatisfied) {
                return true;
            }
        } catch (e) {
            // Log error and treat this sub-range as unsatisfied
            console.error(`[semver] Error processing range part "${trimmedOrRange}":`, e);
            continue;
        }
    }
    // If none of the OR sub-ranges were satisfied
    return false;
}

function formatShare(shareArgs, from, name, shareStrategy) {
    let get;
    if ('get' in shareArgs) {
        // eslint-disable-next-line prefer-destructuring
        get = shareArgs.get;
    } else if ('lib' in shareArgs) {
        get = ()=>Promise.resolve(shareArgs.lib);
    } else {
        get = ()=>Promise.resolve(()=>{
                throw new Error(`Can not get shared '${name}'!`);
            });
    }
    var _shareArgs_version, _shareArgs_scope, _shareArgs_strategy;
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        deps: [],
        useIn: [],
        from,
        loading: null
    }, shareArgs, {
        shareConfig: (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
            requiredVersion: `^${shareArgs.version}`,
            singleton: false,
            eager: false,
            strictVersion: false
        }, shareArgs.shareConfig),
        get,
        loaded: (shareArgs == null ? void 0 : shareArgs.loaded) || 'lib' in shareArgs ? true : undefined,
        version: (_shareArgs_version = shareArgs.version) != null ? _shareArgs_version : '0',
        scope: Array.isArray(shareArgs.scope) ? shareArgs.scope : [
            (_shareArgs_scope = shareArgs.scope) != null ? _shareArgs_scope : 'default'
        ],
        strategy: ((_shareArgs_strategy = shareArgs.strategy) != null ? _shareArgs_strategy : shareStrategy) || 'version-first'
    });
}
function formatShareConfigs(globalOptions, userOptions) {
    const shareArgs = userOptions.shared || {};
    const from = userOptions.name;
    const shareInfos = Object.keys(shareArgs).reduce((res, pkgName)=>{
        const arrayShareArgs = arrayOptions(shareArgs[pkgName]);
        res[pkgName] = res[pkgName] || [];
        arrayShareArgs.forEach((shareConfig)=>{
            res[pkgName].push(formatShare(shareConfig, from, pkgName, userOptions.shareStrategy));
        });
        return res;
    }, {});
    const shared = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, globalOptions.shared);
    Object.keys(shareInfos).forEach((shareKey)=>{
        if (!shared[shareKey]) {
            shared[shareKey] = shareInfos[shareKey];
        } else {
            shareInfos[shareKey].forEach((newUserSharedOptions)=>{
                const isSameVersion = shared[shareKey].find((sharedVal)=>sharedVal.version === newUserSharedOptions.version);
                if (!isSameVersion) {
                    shared[shareKey].push(newUserSharedOptions);
                }
            });
        }
    });
    return {
        shared,
        shareInfos
    };
}
function versionLt(a, b) {
    const transformInvalidVersion = (version)=>{
        const isNumberVersion = !Number.isNaN(Number(version));
        if (isNumberVersion) {
            const splitArr = version.split('.');
            let validVersion = version;
            for(let i = 0; i < 3 - splitArr.length; i++){
                validVersion += '.0';
            }
            return validVersion;
        }
        return version;
    };
    if (satisfy(transformInvalidVersion(a), `<=${transformInvalidVersion(b)}`)) {
        return true;
    } else {
        return false;
    }
}
const findVersion = (shareVersionMap, cb)=>{
    const callback = cb || function(prev, cur) {
        return versionLt(prev, cur);
    };
    return Object.keys(shareVersionMap).reduce((prev, cur)=>{
        if (!prev) {
            return cur;
        }
        if (callback(prev, cur)) {
            return cur;
        }
        // default version is '0' https://github.com/webpack/webpack/blob/main/lib/sharing/ProvideSharedModule.js#L136
        if (prev === '0') {
            return cur;
        }
        return prev;
    }, 0);
};
const isLoaded = (shared)=>{
    return Boolean(shared.loaded) || typeof shared.lib === 'function';
};
const isLoading = (shared)=>{
    return Boolean(shared.loading);
};
function findSingletonVersionOrderByVersion(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        return !isLoaded(versions[prev]) && versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function findSingletonVersionOrderByLoaded(shareScopeMap, scope, pkgName) {
    const versions = shareScopeMap[scope][pkgName];
    const callback = function(prev, cur) {
        const isLoadingOrLoaded = (shared)=>{
            return isLoaded(shared) || isLoading(shared);
        };
        if (isLoadingOrLoaded(versions[cur])) {
            if (isLoadingOrLoaded(versions[prev])) {
                return Boolean(versionLt(prev, cur));
            } else {
                return true;
            }
        }
        if (isLoadingOrLoaded(versions[prev])) {
            return false;
        }
        return versionLt(prev, cur);
    };
    return findVersion(shareScopeMap[scope][pkgName], callback);
}
function getFindShareFunction(strategy) {
    if (strategy === 'loaded-first') {
        return findSingletonVersionOrderByLoaded;
    }
    return findSingletonVersionOrderByVersion;
}
function getRegisteredShare(localShareScopeMap, pkgName, shareInfo, resolveShare) {
    if (!localShareScopeMap) {
        return;
    }
    const { shareConfig, scope = DEFAULT_SCOPE, strategy } = shareInfo;
    const scopes = Array.isArray(scope) ? scope : [
        scope
    ];
    for (const sc of scopes){
        if (shareConfig && localShareScopeMap[sc] && localShareScopeMap[sc][pkgName]) {
            const { requiredVersion } = shareConfig;
            const findShareFunction = getFindShareFunction(strategy);
            const maxOrSingletonVersion = findShareFunction(localShareScopeMap, sc, pkgName);
            //@ts-ignore
            const defaultResolver = ()=>{
                if (shareConfig.singleton) {
                    if (typeof requiredVersion === 'string' && !satisfy(maxOrSingletonVersion, requiredVersion)) {
                        const msg = `Version ${maxOrSingletonVersion} from ${maxOrSingletonVersion && localShareScopeMap[sc][pkgName][maxOrSingletonVersion].from} of shared singleton module ${pkgName} does not satisfy the requirement of ${shareInfo.from} which needs ${requiredVersion})`;
                        if (shareConfig.strictVersion) {
                            error(msg);
                        } else {
                            warn(msg);
                        }
                    }
                    return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                } else {
                    if (requiredVersion === false || requiredVersion === '*') {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    if (satisfy(maxOrSingletonVersion, requiredVersion)) {
                        return localShareScopeMap[sc][pkgName][maxOrSingletonVersion];
                    }
                    for (const [versionKey, versionValue] of Object.entries(localShareScopeMap[sc][pkgName])){
                        if (satisfy(versionKey, requiredVersion)) {
                            return versionValue;
                        }
                    }
                }
            };
            const params = {
                shareScopeMap: localShareScopeMap,
                scope: sc,
                pkgName,
                version: maxOrSingletonVersion,
                GlobalFederation: Global.__FEDERATION__,
                resolver: defaultResolver
            };
            const resolveShared = resolveShare.emit(params) || params;
            return resolveShared.resolver();
        }
    }
}
function getGlobalShareScope() {
    return Global.__FEDERATION__.__SHARE__;
}
function getTargetSharedOptions(options) {
    const { pkgName, extraOptions, shareInfos } = options;
    const defaultResolver = (sharedOptions)=>{
        if (!sharedOptions) {
            return undefined;
        }
        const shareVersionMap = {};
        sharedOptions.forEach((shared)=>{
            shareVersionMap[shared.version] = shared;
        });
        const callback = function(prev, cur) {
            return !isLoaded(shareVersionMap[prev]) && versionLt(prev, cur);
        };
        const maxVersion = findVersion(shareVersionMap, callback);
        return shareVersionMap[maxVersion];
    };
    var _extraOptions_resolver;
    const resolver = (_extraOptions_resolver = extraOptions == null ? void 0 : extraOptions.resolver) != null ? _extraOptions_resolver : defaultResolver;
    return Object.assign({}, resolver(shareInfos[pkgName]), extraOptions == null ? void 0 : extraOptions.customShareInfo);
}

function getBuilderId() {
    //@ts-ignore
    return  true ? "particle:0.0.9" : 0;
}

// Function to match a remote with its name and expose
// id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
// id: alias(app1) + expose(button) = app1/button
// id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
function matchRemoteWithNameAndExpose(remotes, id) {
    for (const remote of remotes){
        // match pkgName
        const isNameMatched = id.startsWith(remote.name);
        let expose = id.replace(remote.name, '');
        if (isNameMatched) {
            if (expose.startsWith('/')) {
                const pkgNameOrAlias = remote.name;
                expose = `.${expose}`;
                return {
                    pkgNameOrAlias,
                    expose,
                    remote
                };
            } else if (expose === '') {
                return {
                    pkgNameOrAlias: remote.name,
                    expose: '.',
                    remote
                };
            }
        }
        // match alias
        const isAliasMatched = remote.alias && id.startsWith(remote.alias);
        let exposeWithAlias = remote.alias && id.replace(remote.alias, '');
        if (remote.alias && isAliasMatched) {
            if (exposeWithAlias && exposeWithAlias.startsWith('/')) {
                const pkgNameOrAlias = remote.alias;
                exposeWithAlias = `.${exposeWithAlias}`;
                return {
                    pkgNameOrAlias,
                    expose: exposeWithAlias,
                    remote
                };
            } else if (exposeWithAlias === '') {
                return {
                    pkgNameOrAlias: remote.alias,
                    expose: '.',
                    remote
                };
            }
        }
    }
    return;
}
// Function to match a remote with its name or alias
function matchRemote(remotes, nameOrAlias) {
    for (const remote of remotes){
        const isNameMatched = nameOrAlias === remote.name;
        if (isNameMatched) {
            return remote;
        }
        const isAliasMatched = remote.alias && nameOrAlias === remote.alias;
        if (isAliasMatched) {
            return remote;
        }
    }
    return;
}

function registerPlugins(plugins, instance) {
    const globalPlugins = getGlobalHostPlugins();
    const hookInstances = [
        instance.hooks,
        instance.remoteHandler.hooks,
        instance.sharedHandler.hooks,
        instance.snapshotHandler.hooks,
        instance.loaderHook,
        instance.bridgeHook
    ];
    // Incorporate global plugins
    if (globalPlugins.length > 0) {
        globalPlugins.forEach((plugin)=>{
            if (plugins == null ? void 0 : plugins.find((item)=>item.name !== plugin.name)) {
                plugins.push(plugin);
            }
        });
    }
    if (plugins && plugins.length > 0) {
        plugins.forEach((plugin)=>{
            hookInstances.forEach((hookInstance)=>{
                hookInstance.applyPlugin(plugin, instance);
            });
        });
    }
    return plugins;
}

const importCallback = '.then(callbacks[0]).catch(callbacks[1])';
async function loadEsmEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                if (typeof FEDERATION_ALLOW_NEW_FUNCTION !== 'undefined') {
                    new Function('callbacks', `import("${entry}")${importCallback}`)([
                        resolve,
                        reject
                    ]);
                } else {
                    import(/* webpackIgnore: true */ /* @vite-ignore */ entry).then(resolve).catch(reject);
                }
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
async function loadSystemJsEntry({ entry, remoteEntryExports }) {
    return new Promise((resolve, reject)=>{
        try {
            if (!remoteEntryExports) {
                //@ts-ignore
                if (false) // removed by dead control flow
{} else {
                    new Function('callbacks', `System.import("${entry}")${importCallback}`)([
                        resolve,
                        reject
                    ]);
                }
            } else {
                resolve(remoteEntryExports);
            }
        } catch (e) {
            reject(e);
        }
    });
}
function handleRemoteEntryLoaded(name, globalName, entry) {
    const { remoteEntryKey, entryExports } = getRemoteEntryExports(name, globalName);
    assert(entryExports, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_001, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
        remoteName: name,
        remoteEntryUrl: entry,
        remoteEntryKey
    }));
    return entryExports;
}
async function loadEntryScript({ name, globalName, entry, loaderHook, getEntryUrl }) {
    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    // if getEntryUrl is passed, use the getEntryUrl to get the entry url
    const url = getEntryUrl ? getEntryUrl(entry) : entry;
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScript)(url, {
        attrs: {},
        createScriptHook: (url, attrs)=>{
            const res = loaderHook.lifecycle.createScript.emit({
                url,
                attrs
            });
            if (!res) return;
            if (res instanceof HTMLScriptElement) {
                return res;
            }
            if ('script' in res || 'timeout' in res) {
                return res;
            }
            return;
        }
    }).then(()=>{
        return handleRemoteEntryLoaded(name, globalName, entry);
    }).catch((e)=>{
        assert(undefined, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_008, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
            remoteName: name,
            resourceUrl: entry
        }));
        throw e;
    });
}
async function loadEntryDom({ remoteInfo, remoteEntryExports, loaderHook, getEntryUrl }) {
    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
    switch(type){
        case 'esm':
        case 'module':
            return loadEsmEntry({
                entry,
                remoteEntryExports
            });
        case 'system':
            return loadSystemJsEntry({
                entry,
                remoteEntryExports
            });
        default:
            return loadEntryScript({
                entry,
                globalName,
                name,
                loaderHook,
                getEntryUrl
            });
    }
}
async function loadEntryNode({ remoteInfo, loaderHook }) {
    const { entry, entryGlobalName: globalName, name, type } = remoteInfo;
    const { entryExports: remoteEntryExports } = getRemoteEntryExports(name, globalName);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.loadScriptNode)(entry, {
        attrs: {
            name,
            globalName,
            type
        },
        loaderHook: {
            createScriptHook: (url, attrs = {})=>{
                const res = loaderHook.lifecycle.createScript.emit({
                    url,
                    attrs
                });
                if (!res) return;
                if ('url' in res) {
                    return res;
                }
                return;
            }
        }
    }).then(()=>{
        return handleRemoteEntryLoaded(name, globalName, entry);
    }).catch((e)=>{
        throw e;
    });
}
function getRemoteEntryUniqueKey(remoteInfo) {
    const { entry, name } = remoteInfo;
    return (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.composeKeyWithSeparator)(name, entry);
}
async function getRemoteEntry(params) {
    const { origin, remoteEntryExports, remoteInfo, getEntryUrl } = params;
    const uniqueKey = getRemoteEntryUniqueKey(remoteInfo);
    if (remoteEntryExports) {
        return remoteEntryExports;
    }
    if (!globalLoading[uniqueKey]) {
        const loadEntryHook = origin.remoteHandler.hooks.lifecycle.loadEntry;
        const loaderHook = origin.loaderHook;
        globalLoading[uniqueKey] = loadEntryHook.emit({
            loaderHook,
            remoteInfo,
            remoteEntryExports
        }).then((res)=>{
            if (res) {
                return res;
            }
            // Use ENV_TARGET if defined, otherwise fallback to isBrowserEnv, must keep this
            const isWebEnvironment = typeof ENV_TARGET !== 'undefined' ? ENV_TARGET === 'web' : (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)();
            return isWebEnvironment ? loadEntryDom({
                remoteInfo,
                remoteEntryExports,
                loaderHook,
                getEntryUrl
            }) : loadEntryNode({
                remoteInfo,
                loaderHook
            });
        });
    }
    return globalLoading[uniqueKey];
}
function getRemoteInfo(remote) {
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, remote, {
        entry: 'entry' in remote ? remote.entry : '',
        type: remote.type || DEFAULT_REMOTE_TYPE,
        entryGlobalName: remote.entryGlobalName || remote.name,
        shareScope: remote.shareScope || DEFAULT_SCOPE
    });
}

function defaultPreloadArgs(preloadConfig) {
    return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
        resourceCategory: 'sync',
        share: true,
        depsRemote: true,
        prefetchInterface: false
    }, preloadConfig);
}
function formatPreloadArgs(remotes, preloadArgs) {
    return preloadArgs.map((args)=>{
        const remoteInfo = matchRemote(remotes, args.nameOrAlias);
        assert(remoteInfo, `Unable to preload ${args.nameOrAlias} as it is not included in ${!remoteInfo && (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.safeToString)({
            remoteInfo,
            remotes
        })}`);
        return {
            remote: remoteInfo,
            preloadConfig: defaultPreloadArgs(args)
        };
    });
}
function normalizePreloadExposes(exposes) {
    if (!exposes) {
        return [];
    }
    return exposes.map((expose)=>{
        if (expose === '.') {
            return expose;
        }
        if (expose.startsWith('./')) {
            return expose.replace('./', '');
        }
        return expose;
    });
}
function preloadAssets(remoteInfo, host, assets, // It is used to distinguish preload from load remote parallel loading
useLinkPreload = true) {
    const { cssAssets, jsAssetsWithoutEntry, entryAssets } = assets;
    if (host.options.inBrowser) {
        entryAssets.forEach((asset)=>{
            const { moduleInfo } = asset;
            const module = host.moduleCache.get(remoteInfo.name);
            if (module) {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: module.remoteEntryExports
                });
            } else {
                getRemoteEntry({
                    origin: host,
                    remoteInfo: moduleInfo,
                    remoteEntryExports: undefined
                });
            }
        });
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'style'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: cssUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(cssEl);
            });
        } else {
            const defaultAttrs = {
                rel: 'stylesheet',
                type: 'text/css'
            };
            cssAssets.forEach((cssUrl)=>{
                const { link: cssEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: cssUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteLink: false
                });
                needAttach && document.head.appendChild(cssEl);
            });
        }
        if (useLinkPreload) {
            const defaultAttrs = {
                rel: 'preload',
                as: 'script'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { link: linkEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createLink)({
                    url: jsUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createLinkHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createLink.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLLinkElement) {
                            return res;
                        }
                        return;
                    }
                });
                needAttach && document.head.appendChild(linkEl);
            });
        } else {
            const defaultAttrs = {
                fetchpriority: 'high',
                type: (remoteInfo == null ? void 0 : remoteInfo.type) === 'module' ? 'module' : 'text/javascript'
            };
            jsAssetsWithoutEntry.forEach((jsUrl)=>{
                const { script: scriptEl, needAttach } = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.createScript)({
                    url: jsUrl,
                    cb: ()=>{
                    // noop
                    },
                    attrs: defaultAttrs,
                    createScriptHook: (url, attrs)=>{
                        const res = host.loaderHook.lifecycle.createScript.emit({
                            url,
                            attrs
                        });
                        if (res instanceof HTMLScriptElement) {
                            return res;
                        }
                        return;
                    },
                    needDeleteScript: true
                });
                needAttach && document.head.appendChild(scriptEl);
            });
        }
    }
}

const ShareUtils = {
    getRegisteredShare,
    getGlobalShareScope
};
const GlobalUtils = {
    Global,
    nativeGlobal,
    resetFederationGlobalInfo,
    setGlobalFederationInstance,
    getGlobalFederationConstructor,
    setGlobalFederationConstructor,
    getInfoWithoutType,
    getGlobalSnapshot,
    getTargetSnapshotInfoByModuleInfo,
    getGlobalSnapshotInfoByModuleInfo,
    setGlobalSnapshotInfoByModuleInfo,
    addGlobalSnapshot,
    getRemoteEntryExports,
    registerGlobalPlugins,
    getGlobalHostPlugins,
    getPreloaded,
    setPreloaded
};
var helpers = {
    global: GlobalUtils,
    share: ShareUtils,
    utils: {
        matchRemoteWithNameAndExpose,
        preloadAssets,
        getRemoteInfo
    }
};

let Module = class Module {
    async getEntry() {
        if (this.remoteEntryExports) {
            return this.remoteEntryExports;
        }
        let remoteEntryExports;
        try {
            remoteEntryExports = await getRemoteEntry({
                origin: this.host,
                remoteInfo: this.remoteInfo,
                remoteEntryExports: this.remoteEntryExports
            });
        } catch (err) {
            const uniqueKey = getRemoteEntryUniqueKey(this.remoteInfo);
            const isScriptLoadError = err instanceof Error && err.message.includes(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_008);
            if (isScriptLoadError) {
                remoteEntryExports = await this.host.loaderHook.lifecycle.loadEntryError.emit({
                    getRemoteEntry,
                    origin: this.host,
                    remoteInfo: this.remoteInfo,
                    remoteEntryExports: this.remoteEntryExports,
                    globalLoading,
                    uniqueKey
                });
            }
        }
        assert(remoteEntryExports, `remoteEntryExports is undefined \n ${(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.safeToString)(this.remoteInfo)}`);
        this.remoteEntryExports = remoteEntryExports;
        return this.remoteEntryExports;
    }
    // eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
    async get(id, expose, options, remoteSnapshot) {
        const { loadFactory = true } = options || {
            loadFactory: true
        };
        // Get remoteEntry.js
        const remoteEntryExports = await this.getEntry();
        if (!this.inited) {
            const localShareScopeMap = this.host.shareScopeMap;
            const shareScopeKeys = Array.isArray(this.remoteInfo.shareScope) ? this.remoteInfo.shareScope : [
                this.remoteInfo.shareScope
            ];
            if (!shareScopeKeys.length) {
                shareScopeKeys.push('default');
            }
            shareScopeKeys.forEach((shareScopeKey)=>{
                if (!localShareScopeMap[shareScopeKey]) {
                    localShareScopeMap[shareScopeKey] = {};
                }
            });
            // TODO: compate legacy init params, should use shareScopeMap if exist
            const shareScope = localShareScopeMap[shareScopeKeys[0]];
            const initScope = [];
            const remoteEntryInitOptions = {
                version: this.remoteInfo.version || '',
                shareScopeKeys: Array.isArray(this.remoteInfo.shareScope) ? shareScopeKeys : this.remoteInfo.shareScope || 'default'
            };
            // Help to find host instance
            Object.defineProperty(remoteEntryInitOptions, 'shareScopeMap', {
                value: localShareScopeMap,
                // remoteEntryInitOptions will be traversed and assigned during container init, ,so this attribute is not allowed to be traversed
                enumerable: false
            });
            const initContainerOptions = await this.host.hooks.lifecycle.beforeInitContainer.emit({
                shareScope,
                // @ts-ignore shareScopeMap will be set by Object.defineProperty
                remoteEntryInitOptions,
                initScope,
                remoteInfo: this.remoteInfo,
                origin: this.host
            });
            if (typeof (remoteEntryExports == null ? void 0 : remoteEntryExports.init) === 'undefined') {
                error((0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_002, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
                    hostName: this.host.name,
                    remoteName: this.remoteInfo.name,
                    remoteEntryUrl: this.remoteInfo.entry,
                    remoteEntryKey: this.remoteInfo.entryGlobalName
                }));
            }
            await remoteEntryExports.init(initContainerOptions.shareScope, initContainerOptions.initScope, initContainerOptions.remoteEntryInitOptions);
            await this.host.hooks.lifecycle.initContainer.emit((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, initContainerOptions, {
                id,
                remoteSnapshot,
                remoteEntryExports
            }));
        }
        this.lib = remoteEntryExports;
        this.inited = true;
        let moduleFactory;
        moduleFactory = await this.host.loaderHook.lifecycle.getModuleFactory.emit({
            remoteEntryExports,
            expose,
            moduleInfo: this.remoteInfo
        });
        // get exposeGetter
        if (!moduleFactory) {
            moduleFactory = await remoteEntryExports.get(expose);
        }
        assert(moduleFactory, `${getFMId(this.remoteInfo)} remote don't export ${expose}.`);
        // keep symbol for module name always one format
        const symbolName = processModuleAlias(this.remoteInfo.name, expose);
        const wrapModuleFactory = this.wraperFactory(moduleFactory, symbolName);
        if (!loadFactory) {
            return wrapModuleFactory;
        }
        const exposeContent = await wrapModuleFactory();
        return exposeContent;
    }
    wraperFactory(moduleFactory, id) {
        function defineModuleId(res, id) {
            if (res && typeof res === 'object' && Object.isExtensible(res) && !Object.getOwnPropertyDescriptor(res, Symbol.for('mf_module_id'))) {
                Object.defineProperty(res, Symbol.for('mf_module_id'), {
                    value: id,
                    enumerable: false
                });
            }
        }
        if (moduleFactory instanceof Promise) {
            return async ()=>{
                const res = await moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        } else {
            return ()=>{
                const res = moduleFactory();
                // This parameter is used for bridge debugging
                defineModuleId(res, id);
                return res;
            };
        }
    }
    constructor({ remoteInfo, host }){
        this.inited = false;
        this.lib = undefined;
        this.remoteInfo = remoteInfo;
        this.host = host;
    }
};

class SyncHook {
    on(fn) {
        if (typeof fn === 'function') {
            this.listeners.add(fn);
        }
    }
    once(fn) {
        // eslint-disable-next-line @typescript-eslint/no-this-alias
        const self = this;
        this.on(function wrapper(...args) {
            self.remove(wrapper);
            // eslint-disable-next-line prefer-spread
            return fn.apply(null, args);
        });
    }
    emit(...data) {
        let result;
        if (this.listeners.size > 0) {
            // eslint-disable-next-line prefer-spread
            this.listeners.forEach((fn)=>{
                result = fn(...data);
            });
        }
        return result;
    }
    remove(fn) {
        this.listeners.delete(fn);
    }
    removeAll() {
        this.listeners.clear();
    }
    constructor(type){
        this.type = '';
        this.listeners = new Set();
        if (type) {
            this.type = type;
        }
    }
}

class AsyncHook extends SyncHook {
    emit(...data) {
        let result;
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const call = (prev)=>{
                if (prev === false) {
                    return false; // Abort process
                } else if (i < ls.length) {
                    return Promise.resolve(ls[i++].apply(null, data)).then(call);
                } else {
                    return prev;
                }
            };
            result = call();
        }
        return Promise.resolve(result);
    }
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
function checkReturnData(originalData, returnedData) {
    if (!isObject(returnedData)) {
        return false;
    }
    if (originalData !== returnedData) {
        // eslint-disable-next-line no-restricted-syntax
        for(const key in originalData){
            if (!(key in returnedData)) {
                return false;
            }
        }
    }
    return true;
}
class SyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!isObject(data)) {
            error(`The data for the "${this.type}" hook should be an object.`);
        }
        for (const fn of this.listeners){
            try {
                const tempData = fn(data);
                if (checkReturnData(data, tempData)) {
                    data = tempData;
                } else {
                    this.onerror(`A plugin returned an unacceptable value for the "${this.type}" type.`);
                    break;
                }
            } catch (e) {
                warn(e);
                this.onerror(e);
            }
        }
        return data;
    }
    constructor(type){
        super();
        this.onerror = error;
        this.type = type;
    }
}

class AsyncWaterfallHook extends SyncHook {
    emit(data) {
        if (!isObject(data)) {
            error(`The response data for the "${this.type}" hook must be an object.`);
        }
        const ls = Array.from(this.listeners);
        if (ls.length > 0) {
            let i = 0;
            const processError = (e)=>{
                warn(e);
                this.onerror(e);
                return data;
            };
            const call = (prevData)=>{
                if (checkReturnData(data, prevData)) {
                    data = prevData;
                    if (i < ls.length) {
                        try {
                            return Promise.resolve(ls[i++](data)).then(call, processError);
                        } catch (e) {
                            return processError(e);
                        }
                    }
                } else {
                    this.onerror(`A plugin returned an incorrect value for the "${this.type}" type.`);
                }
                return data;
            };
            return Promise.resolve(call(data));
        }
        return Promise.resolve(data);
    }
    constructor(type){
        super();
        this.onerror = error;
        this.type = type;
    }
}

class PluginSystem {
    applyPlugin(plugin, instance) {
        assert(isPlainObject(plugin), 'Plugin configuration is invalid.');
        // The plugin's name is mandatory and must be unique
        const pluginName = plugin.name;
        assert(pluginName, 'A name must be provided by the plugin.');
        if (!this.registerPlugins[pluginName]) {
            this.registerPlugins[pluginName] = plugin;
            plugin.apply == null ? void 0 : plugin.apply.call(plugin, instance);
            Object.keys(this.lifecycle).forEach((key)=>{
                const pluginLife = plugin[key];
                if (pluginLife) {
                    this.lifecycle[key].on(pluginLife);
                }
            });
        }
    }
    removePlugin(pluginName) {
        assert(pluginName, 'A name is required.');
        const plugin = this.registerPlugins[pluginName];
        assert(plugin, `The plugin "${pluginName}" is not registered.`);
        Object.keys(plugin).forEach((key)=>{
            if (key !== 'name') {
                this.lifecycle[key].remove(plugin[key]);
            }
        });
    }
    constructor(lifecycle){
        this.registerPlugins = {};
        this.lifecycle = lifecycle;
        this.lifecycleKeys = Object.keys(lifecycle);
    }
}

function assignRemoteInfo(remoteInfo, remoteSnapshot) {
    const remoteEntryInfo = getRemoteEntryInfoFromSnapshot(remoteSnapshot);
    if (!remoteEntryInfo.url) {
        error(`The attribute remoteEntry of ${remoteInfo.name} must not be undefined.`);
    }
    let entryUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(remoteSnapshot, remoteEntryInfo.url);
    if (!(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() && !entryUrl.startsWith('http')) {
        entryUrl = `https:${entryUrl}`;
    }
    remoteInfo.type = remoteEntryInfo.type;
    remoteInfo.entryGlobalName = remoteEntryInfo.globalName;
    remoteInfo.entry = entryUrl;
    remoteInfo.version = remoteSnapshot.version;
    remoteInfo.buildVersion = remoteSnapshot.buildVersion;
}
function snapshotPlugin() {
    return {
        name: 'snapshot-plugin',
        async afterResolve (args) {
            const { remote, pkgNameOrAlias, expose, origin, remoteInfo, id } = args;
            if (!isRemoteInfoWithEntry(remote) || !isPureRemoteEntry(remote)) {
                const { remoteSnapshot, globalSnapshot } = await origin.snapshotHandler.loadRemoteSnapshotInfo({
                    moduleInfo: remote,
                    id
                });
                assignRemoteInfo(remoteInfo, remoteSnapshot);
                // preloading assets
                const preloadOptions = {
                    remote,
                    preloadConfig: {
                        nameOrAlias: pkgNameOrAlias,
                        exposes: [
                            expose
                        ],
                        resourceCategory: 'sync',
                        share: false,
                        depsRemote: false
                    }
                };
                const assets = await origin.remoteHandler.hooks.lifecycle.generatePreloadAssets.emit({
                    origin,
                    preloadOptions,
                    remoteInfo,
                    remote,
                    remoteSnapshot,
                    globalSnapshot
                });
                if (assets) {
                    preloadAssets(remoteInfo, origin, assets, false);
                }
                return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, args, {
                    remoteSnapshot
                });
            }
            return args;
        }
    };
}

// name
// name:version
function splitId(id) {
    const splitInfo = id.split(':');
    if (splitInfo.length === 1) {
        return {
            name: splitInfo[0],
            version: undefined
        };
    } else if (splitInfo.length === 2) {
        return {
            name: splitInfo[0],
            version: splitInfo[1]
        };
    } else {
        return {
            name: splitInfo[1],
            version: splitInfo[2]
        };
    }
}
// Traverse all nodes in moduleInfo and traverse the entire snapshot
function traverseModuleInfo(globalSnapshot, remoteInfo, traverse, isRoot, memo = {}, remoteSnapshot) {
    const id = getFMId(remoteInfo);
    const { value: snapshotValue } = getInfoWithoutType(globalSnapshot, id);
    const effectiveRemoteSnapshot = remoteSnapshot || snapshotValue;
    if (effectiveRemoteSnapshot && !(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isManifestProvider)(effectiveRemoteSnapshot)) {
        traverse(effectiveRemoteSnapshot, remoteInfo, isRoot);
        if (effectiveRemoteSnapshot.remotesInfo) {
            const remoteKeys = Object.keys(effectiveRemoteSnapshot.remotesInfo);
            for (const key of remoteKeys){
                if (memo[key]) {
                    continue;
                }
                memo[key] = true;
                const subRemoteInfo = splitId(key);
                const remoteValue = effectiveRemoteSnapshot.remotesInfo[key];
                traverseModuleInfo(globalSnapshot, {
                    name: subRemoteInfo.name,
                    version: remoteValue.matchedVersion
                }, traverse, false, memo, undefined);
            }
        }
    }
}
const isExisted = (type, url)=>{
    return document.querySelector(`${type}[${type === 'link' ? 'href' : 'src'}="${url}"]`);
};
// eslint-disable-next-line max-lines-per-function
function generatePreloadAssets(origin, preloadOptions, remote, globalSnapshot, remoteSnapshot) {
    const cssAssets = [];
    const jsAssets = [];
    const entryAssets = [];
    const loadedSharedJsAssets = new Set();
    const loadedSharedCssAssets = new Set();
    const { options } = origin;
    const { preloadConfig: rootPreloadConfig } = preloadOptions;
    const { depsRemote } = rootPreloadConfig;
    const memo = {};
    traverseModuleInfo(globalSnapshot, remote, (moduleInfoSnapshot, remoteInfo, isRoot)=>{
        let preloadConfig;
        if (isRoot) {
            preloadConfig = rootPreloadConfig;
        } else {
            if (Array.isArray(depsRemote)) {
                // eslint-disable-next-line array-callback-return
                const findPreloadConfig = depsRemote.find((remoteConfig)=>{
                    if (remoteConfig.nameOrAlias === remoteInfo.name || remoteConfig.nameOrAlias === remoteInfo.alias) {
                        return true;
                    }
                    return false;
                });
                if (!findPreloadConfig) {
                    return;
                }
                preloadConfig = defaultPreloadArgs(findPreloadConfig);
            } else if (depsRemote === true) {
                preloadConfig = rootPreloadConfig;
            } else {
                return;
            }
        }
        const remoteEntryUrl = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(moduleInfoSnapshot, getRemoteEntryInfoFromSnapshot(moduleInfoSnapshot).url);
        if (remoteEntryUrl) {
            entryAssets.push({
                name: remoteInfo.name,
                moduleInfo: {
                    name: remoteInfo.name,
                    entry: remoteEntryUrl,
                    type: 'remoteEntryType' in moduleInfoSnapshot ? moduleInfoSnapshot.remoteEntryType : 'global',
                    entryGlobalName: 'globalName' in moduleInfoSnapshot ? moduleInfoSnapshot.globalName : remoteInfo.name,
                    shareScope: '',
                    version: 'version' in moduleInfoSnapshot ? moduleInfoSnapshot.version : undefined
                },
                url: remoteEntryUrl
            });
        }
        let moduleAssetsInfo = 'modules' in moduleInfoSnapshot ? moduleInfoSnapshot.modules : [];
        const normalizedPreloadExposes = normalizePreloadExposes(preloadConfig.exposes);
        if (normalizedPreloadExposes.length && 'modules' in moduleInfoSnapshot) {
            var _moduleInfoSnapshot_modules;
            moduleAssetsInfo = moduleInfoSnapshot == null ? void 0 : (_moduleInfoSnapshot_modules = moduleInfoSnapshot.modules) == null ? void 0 : _moduleInfoSnapshot_modules.reduce((assets, moduleAssetInfo)=>{
                if ((normalizedPreloadExposes == null ? void 0 : normalizedPreloadExposes.indexOf(moduleAssetInfo.moduleName)) !== -1) {
                    assets.push(moduleAssetInfo);
                }
                return assets;
            }, []);
        }
        function handleAssets(assets) {
            const assetsRes = assets.map((asset)=>(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.getResourceUrl)(moduleInfoSnapshot, asset));
            if (preloadConfig.filter) {
                return assetsRes.filter(preloadConfig.filter);
            }
            return assetsRes;
        }
        if (moduleAssetsInfo) {
            const assetsLength = moduleAssetsInfo.length;
            for(let index = 0; index < assetsLength; index++){
                const assetsInfo = moduleAssetsInfo[index];
                const exposeFullPath = `${remoteInfo.name}/${assetsInfo.moduleName}`;
                origin.remoteHandler.hooks.lifecycle.handlePreloadModule.emit({
                    id: assetsInfo.moduleName === '.' ? remoteInfo.name : exposeFullPath,
                    name: remoteInfo.name,
                    remoteSnapshot: moduleInfoSnapshot,
                    preloadConfig,
                    remote: remoteInfo,
                    origin
                });
                const preloaded = getPreloaded(exposeFullPath);
                if (preloaded) {
                    continue;
                }
                if (preloadConfig.resourceCategory === 'all') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.async));
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.async));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                // eslint-disable-next-line no-constant-condition
                } else if (preloadConfig.resourceCategory = 'sync') {
                    cssAssets.push(...handleAssets(assetsInfo.assets.css.sync));
                    jsAssets.push(...handleAssets(assetsInfo.assets.js.sync));
                }
                setPreloaded(exposeFullPath);
            }
        }
    }, true, memo, remoteSnapshot);
    if (remoteSnapshot.shared && remoteSnapshot.shared.length > 0) {
        const collectSharedAssets = (shareInfo, snapshotShared)=>{
            const registeredShared = getRegisteredShare(origin.shareScopeMap, snapshotShared.sharedName, shareInfo, origin.sharedHandler.hooks.lifecycle.resolveShare);
            // If the global share does not exist, or the lib function does not exist, it means that the shared has not been loaded yet and can be preloaded.
            if (registeredShared && typeof registeredShared.lib === 'function') {
                snapshotShared.assets.js.sync.forEach((asset)=>{
                    loadedSharedJsAssets.add(asset);
                });
                snapshotShared.assets.css.sync.forEach((asset)=>{
                    loadedSharedCssAssets.add(asset);
                });
            }
        };
        remoteSnapshot.shared.forEach((shared)=>{
            var _options_shared;
            const shareInfos = (_options_shared = options.shared) == null ? void 0 : _options_shared[shared.sharedName];
            if (!shareInfos) {
                return;
            }
            // if no version, preload all shared
            const sharedOptions = shared.version ? shareInfos.find((s)=>s.version === shared.version) : shareInfos;
            if (!sharedOptions) {
                return;
            }
            const arrayShareInfo = arrayOptions(sharedOptions);
            arrayShareInfo.forEach((s)=>{
                collectSharedAssets(s, shared);
            });
        });
    }
    const needPreloadJsAssets = jsAssets.filter((asset)=>!loadedSharedJsAssets.has(asset) && !isExisted('script', asset));
    const needPreloadCssAssets = cssAssets.filter((asset)=>!loadedSharedCssAssets.has(asset) && !isExisted('link', asset));
    return {
        cssAssets: needPreloadCssAssets,
        jsAssetsWithoutEntry: needPreloadJsAssets,
        entryAssets: entryAssets.filter((entry)=>!isExisted('script', entry.url))
    };
}
const generatePreloadAssetsPlugin = function() {
    return {
        name: 'generate-preload-assets-plugin',
        async generatePreloadAssets (args) {
            const { origin, preloadOptions, remoteInfo, remote, globalSnapshot, remoteSnapshot } = args;
            if (!(0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)()) {
                return {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: []
                };
            }
            if (isRemoteInfoWithEntry(remote) && isPureRemoteEntry(remote)) {
                return {
                    cssAssets: [],
                    jsAssetsWithoutEntry: [],
                    entryAssets: [
                        {
                            name: remote.name,
                            url: remote.entry,
                            moduleInfo: {
                                name: remoteInfo.name,
                                entry: remote.entry,
                                type: remoteInfo.type || 'global',
                                entryGlobalName: '',
                                shareScope: ''
                            }
                        }
                    ]
                };
            }
            assignRemoteInfo(remoteInfo, remoteSnapshot);
            const assets = generatePreloadAssets(origin, preloadOptions, remoteInfo, globalSnapshot, remoteSnapshot);
            return assets;
        }
    };
};

function getGlobalRemoteInfo(moduleInfo, origin) {
    const hostGlobalSnapshot = getGlobalSnapshotInfoByModuleInfo({
        name: origin.name,
        version: origin.options.version
    });
    // get remote detail info from global
    const globalRemoteInfo = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, moduleInfo.name).value;
    if (globalRemoteInfo && globalRemoteInfo.matchedVersion) {
        return {
            hostGlobalSnapshot,
            globalSnapshot: getGlobalSnapshot(),
            remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
                name: moduleInfo.name,
                version: globalRemoteInfo.matchedVersion
            })
        };
    }
    return {
        hostGlobalSnapshot: undefined,
        globalSnapshot: getGlobalSnapshot(),
        remoteSnapshot: getGlobalSnapshotInfoByModuleInfo({
            name: moduleInfo.name,
            version: 'version' in moduleInfo ? moduleInfo.version : undefined
        })
    };
}
class SnapshotHandler {
    // eslint-disable-next-line max-lines-per-function
    async loadRemoteSnapshotInfo({ moduleInfo, id, expose }) {
        const { options } = this.HostInstance;
        await this.hooks.lifecycle.beforeLoadRemoteSnapshot.emit({
            options,
            moduleInfo
        });
        let hostSnapshot = getGlobalSnapshotInfoByModuleInfo({
            name: this.HostInstance.options.name,
            version: this.HostInstance.options.version
        });
        if (!hostSnapshot) {
            hostSnapshot = {
                version: this.HostInstance.options.version || '',
                remoteEntry: '',
                remotesInfo: {}
            };
            addGlobalSnapshot({
                [this.HostInstance.options.name]: hostSnapshot
            });
        }
        // In dynamic loadRemote scenarios, incomplete remotesInfo delivery may occur. In such cases, the remotesInfo in the host needs to be completed in the snapshot at runtime.
        // This ensures the snapshot's integrity and helps the chrome plugin correctly identify all producer modules, ensuring that proxyable producer modules will not be missing.
        if (hostSnapshot && 'remotesInfo' in hostSnapshot && !getInfoWithoutType(hostSnapshot.remotesInfo, moduleInfo.name).value) {
            if ('version' in moduleInfo || 'entry' in moduleInfo) {
                hostSnapshot.remotesInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, hostSnapshot == null ? void 0 : hostSnapshot.remotesInfo, {
                    [moduleInfo.name]: {
                        matchedVersion: 'version' in moduleInfo ? moduleInfo.version : moduleInfo.entry
                    }
                });
            }
        }
        const { hostGlobalSnapshot, remoteSnapshot, globalSnapshot } = this.getGlobalRemoteInfo(moduleInfo);
        const { remoteSnapshot: globalRemoteSnapshot, globalSnapshot: globalSnapshotRes } = await this.hooks.lifecycle.loadSnapshot.emit({
            options,
            moduleInfo,
            hostGlobalSnapshot,
            remoteSnapshot,
            globalSnapshot
        });
        let mSnapshot;
        let gSnapshot;
        // global snapshot includes manifest or module info includes manifest
        if (globalRemoteSnapshot) {
            if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isManifestProvider)(globalRemoteSnapshot)) {
                const remoteEntry = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() ? globalRemoteSnapshot.remoteEntry : globalRemoteSnapshot.ssrRemoteEntry || globalRemoteSnapshot.remoteEntry || '';
                const moduleSnapshot = await this.getManifestJson(remoteEntry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, moduleInfo, {
                    // The global remote may be overridden
                    // Therefore, set the snapshot key to the global address of the actual request
                    entry: remoteEntry
                }), moduleSnapshot);
                mSnapshot = moduleSnapshot;
                gSnapshot = globalSnapshotRes;
            } else {
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: globalRemoteSnapshot,
                    from: 'global'
                });
                mSnapshot = remoteSnapshotRes;
                gSnapshot = globalSnapshotRes;
            }
        } else {
            if (isRemoteInfoWithEntry(moduleInfo)) {
                // get from manifest.json and merge remote info from remote server
                const moduleSnapshot = await this.getManifestJson(moduleInfo.entry, moduleInfo, {});
                // eslint-disable-next-line @typescript-eslint/no-shadow
                const globalSnapshotRes = setGlobalSnapshotInfoByModuleInfo(moduleInfo, moduleSnapshot);
                const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                    options: this.HostInstance.options,
                    moduleInfo,
                    remoteSnapshot: moduleSnapshot,
                    from: 'global'
                });
                mSnapshot = remoteSnapshotRes;
                gSnapshot = globalSnapshotRes;
            } else {
                error((0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_007, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
                    hostName: moduleInfo.name,
                    hostVersion: moduleInfo.version,
                    globalSnapshot: JSON.stringify(globalSnapshotRes)
                }));
            }
        }
        await this.hooks.lifecycle.afterLoadSnapshot.emit({
            id,
            host: this.HostInstance,
            options,
            moduleInfo,
            remoteSnapshot: mSnapshot
        });
        return {
            remoteSnapshot: mSnapshot,
            globalSnapshot: gSnapshot
        };
    }
    getGlobalRemoteInfo(moduleInfo) {
        return getGlobalRemoteInfo(moduleInfo, this.HostInstance);
    }
    async getManifestJson(manifestUrl, moduleInfo, extraOptions) {
        const getManifest = async ()=>{
            let manifestJson = this.manifestCache.get(manifestUrl);
            if (manifestJson) {
                return manifestJson;
            }
            try {
                let res = await this.loaderHook.lifecycle.fetch.emit(manifestUrl, {});
                if (!res || !(res instanceof Response)) {
                    res = await fetch(manifestUrl, {});
                }
                manifestJson = await res.json();
            } catch (err) {
                manifestJson = await this.HostInstance.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                    id: manifestUrl,
                    error: err,
                    from: 'runtime',
                    lifecycle: 'afterResolve',
                    origin: this.HostInstance
                });
                if (!manifestJson) {
                    delete this.manifestLoading[manifestUrl];
                    error((0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_003, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
                        manifestUrl,
                        moduleName: moduleInfo.name,
                        hostName: this.HostInstance.options.name
                    }, `${err}`));
                }
            }
            assert(manifestJson.metaData && manifestJson.exposes && manifestJson.shared, `${manifestUrl} is not a federation manifest`);
            this.manifestCache.set(manifestUrl, manifestJson);
            return manifestJson;
        };
        const asyncLoadProcess = async ()=>{
            const manifestJson = await getManifest();
            const remoteSnapshot = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.generateSnapshotFromManifest)(manifestJson, {
                version: manifestUrl
            });
            const { remoteSnapshot: remoteSnapshotRes } = await this.hooks.lifecycle.loadRemoteSnapshot.emit({
                options: this.HostInstance.options,
                moduleInfo,
                manifestJson,
                remoteSnapshot,
                manifestUrl,
                from: 'manifest'
            });
            return remoteSnapshotRes;
        };
        if (!this.manifestLoading[manifestUrl]) {
            this.manifestLoading[manifestUrl] = asyncLoadProcess().then((res)=>res);
        }
        return this.manifestLoading[manifestUrl];
    }
    constructor(HostInstance){
        this.loadingHostSnapshot = null;
        this.manifestCache = new Map();
        this.hooks = new PluginSystem({
            beforeLoadRemoteSnapshot: new AsyncHook('beforeLoadRemoteSnapshot'),
            loadSnapshot: new AsyncWaterfallHook('loadGlobalSnapshot'),
            loadRemoteSnapshot: new AsyncWaterfallHook('loadRemoteSnapshot'),
            afterLoadSnapshot: new AsyncWaterfallHook('afterLoadSnapshot')
        });
        this.manifestLoading = Global.__FEDERATION__.__MANIFEST_LOADING__;
        this.HostInstance = HostInstance;
        this.loaderHook = HostInstance.loaderHook;
    }
}

class SharedHandler {
    // register shared in shareScopeMap
    registerShared(globalOptions, userOptions) {
        const { shareInfos, shared } = formatShareConfigs(globalOptions, userOptions);
        const sharedKeys = Object.keys(shareInfos);
        sharedKeys.forEach((sharedKey)=>{
            const sharedVals = shareInfos[sharedKey];
            sharedVals.forEach((sharedVal)=>{
                const registeredShared = getRegisteredShare(this.shareScopeMap, sharedKey, sharedVal, this.hooks.lifecycle.resolveShare);
                if (!registeredShared && sharedVal && sharedVal.lib) {
                    this.setShared({
                        pkgName: sharedKey,
                        lib: sharedVal.lib,
                        get: sharedVal.get,
                        loaded: true,
                        shared: sharedVal,
                        from: userOptions.name
                    });
                }
            });
        });
        return {
            shareInfos,
            shared
        };
    }
    async loadShare(pkgName, extraOptions) {
        const { host } = this;
        // This function performs the following steps:
        // 1. Checks if the currently loaded share already exists, if not, it throws an error
        // 2. Searches globally for a matching share, if found, it uses it directly
        // 3. If not found, it retrieves it from the current share and stores the obtained share globally.
        const shareOptions = getTargetSharedOptions({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareOptions == null ? void 0 : shareOptions.scope) {
            await Promise.all(shareOptions.scope.map(async (shareScope)=>{
                await Promise.all(this.initializeSharing(shareScope, {
                    strategy: shareOptions.strategy
                }));
                return;
            }));
        }
        const loadShareRes = await this.hooks.lifecycle.beforeLoadShare.emit({
            pkgName,
            shareInfo: shareOptions,
            shared: host.options.shared,
            origin: host
        });
        const { shareInfo: shareOptionsRes } = loadShareRes;
        // Assert that shareInfoRes exists, if not, throw an error
        assert(shareOptionsRes, `Cannot find ${pkgName} Share in the ${host.options.name}. Please ensure that the ${pkgName} Share parameters have been injected`);
        // Retrieve from cache
        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareOptionsRes, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            addUniqueItem(shared.useIn, host.options.name);
        };
        if (registeredShared && registeredShared.lib) {
            addUseIn(registeredShared);
            return registeredShared.lib;
        } else if (registeredShared && registeredShared.loading && !registeredShared.loaded) {
            const factory = await registeredShared.loading;
            registeredShared.loaded = true;
            if (!registeredShared.lib) {
                registeredShared.lib = factory;
            }
            addUseIn(registeredShared);
            return factory;
        } else if (registeredShared) {
            const asyncLoadProcess = async ()=>{
                const factory = await registeredShared.get();
                addUseIn(registeredShared);
                registeredShared.loaded = true;
                registeredShared.lib = factory;
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: registeredShared,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        } else {
            if (extraOptions == null ? void 0 : extraOptions.customShareInfo) {
                return false;
            }
            const asyncLoadProcess = async ()=>{
                const factory = await shareOptionsRes.get();
                shareOptionsRes.lib = factory;
                shareOptionsRes.loaded = true;
                addUseIn(shareOptionsRes);
                const gShared = getRegisteredShare(this.shareScopeMap, pkgName, shareOptionsRes, this.hooks.lifecycle.resolveShare);
                if (gShared) {
                    gShared.lib = factory;
                    gShared.loaded = true;
                    gShared.from = shareOptionsRes.from;
                }
                return factory;
            };
            const loading = asyncLoadProcess();
            this.setShared({
                pkgName,
                loaded: false,
                shared: shareOptionsRes,
                from: host.options.name,
                lib: null,
                loading
            });
            return loading;
        }
    }
    /**
     * This function initializes the sharing sequence (executed only once per share scope).
     * It accepts one argument, the name of the share scope.
     * If the share scope does not exist, it creates one.
     */ // eslint-disable-next-line @typescript-eslint/member-ordering
    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
        const { host } = this;
        const from = extraOptions == null ? void 0 : extraOptions.from;
        const strategy = extraOptions == null ? void 0 : extraOptions.strategy;
        let initScope = extraOptions == null ? void 0 : extraOptions.initScope;
        const promises = [];
        if (from !== 'build') {
            const { initTokens } = this;
            if (!initScope) initScope = [];
            let initToken = initTokens[shareScopeName];
            if (!initToken) initToken = initTokens[shareScopeName] = {
                from: this.host.name
            };
            if (initScope.indexOf(initToken) >= 0) return promises;
            initScope.push(initToken);
        }
        const shareScope = this.shareScopeMap;
        const hostName = host.options.name;
        // Creates a new share scope if necessary
        if (!shareScope[shareScopeName]) {
            shareScope[shareScopeName] = {};
        }
        // Executes all initialization snippets from all accessible modules
        const scope = shareScope[shareScopeName];
        const register = (name, shared)=>{
            var _activeVersion_shareConfig;
            const { version, eager } = shared;
            scope[name] = scope[name] || {};
            const versions = scope[name];
            const activeVersion = versions[version];
            const activeVersionEager = Boolean(activeVersion && (activeVersion.eager || ((_activeVersion_shareConfig = activeVersion.shareConfig) == null ? void 0 : _activeVersion_shareConfig.eager)));
            if (!activeVersion || activeVersion.strategy !== 'loaded-first' && !activeVersion.loaded && (Boolean(!eager) !== !activeVersionEager ? eager : hostName > activeVersion.from)) {
                versions[version] = shared;
            }
        };
        const initFn = (mod)=>mod && mod.init && mod.init(shareScope[shareScopeName], initScope);
        const initRemoteModule = async (key)=>{
            const { module } = await host.remoteHandler.getRemoteModuleAndOptions({
                id: key
            });
            if (module.getEntry) {
                let remoteEntryExports;
                try {
                    remoteEntryExports = await module.getEntry();
                } catch (error) {
                    remoteEntryExports = await host.remoteHandler.hooks.lifecycle.errorLoadRemote.emit({
                        id: key,
                        error,
                        from: 'runtime',
                        lifecycle: 'beforeLoadShare',
                        origin: host
                    });
                }
                if (!module.inited) {
                    await initFn(remoteEntryExports);
                    module.inited = true;
                }
            }
        };
        Object.keys(host.options.shared).forEach((shareName)=>{
            const sharedArr = host.options.shared[shareName];
            sharedArr.forEach((shared)=>{
                if (shared.scope.includes(shareScopeName)) {
                    register(shareName, shared);
                }
            });
        });
        // TODO: strategy==='version-first' need to be removed in the future
        if (host.options.shareStrategy === 'version-first' || strategy === 'version-first') {
            host.options.remotes.forEach((remote)=>{
                if (remote.shareScope === shareScopeName) {
                    promises.push(initRemoteModule(remote.name));
                }
            });
        }
        return promises;
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        const { host } = this;
        const shareOptions = getTargetSharedOptions({
            pkgName,
            extraOptions,
            shareInfos: host.options.shared
        });
        if (shareOptions == null ? void 0 : shareOptions.scope) {
            shareOptions.scope.forEach((shareScope)=>{
                this.initializeSharing(shareScope, {
                    strategy: shareOptions.strategy
                });
            });
        }
        const registeredShared = getRegisteredShare(this.shareScopeMap, pkgName, shareOptions, this.hooks.lifecycle.resolveShare);
        const addUseIn = (shared)=>{
            if (!shared.useIn) {
                shared.useIn = [];
            }
            addUniqueItem(shared.useIn, host.options.name);
        };
        if (registeredShared) {
            if (typeof registeredShared.lib === 'function') {
                addUseIn(registeredShared);
                if (!registeredShared.loaded) {
                    registeredShared.loaded = true;
                    if (registeredShared.from === host.options.name) {
                        shareOptions.loaded = true;
                    }
                }
                return registeredShared.lib;
            }
            if (typeof registeredShared.get === 'function') {
                const module = registeredShared.get();
                if (!(module instanceof Promise)) {
                    addUseIn(registeredShared);
                    this.setShared({
                        pkgName,
                        loaded: true,
                        from: host.options.name,
                        lib: module,
                        shared: registeredShared
                    });
                    return module;
                }
            }
        }
        if (shareOptions.lib) {
            if (!shareOptions.loaded) {
                shareOptions.loaded = true;
            }
            return shareOptions.lib;
        }
        if (shareOptions.get) {
            const module = shareOptions.get();
            if (module instanceof Promise) {
                const errorCode = (extraOptions == null ? void 0 : extraOptions.from) === 'build' ? _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_005 : _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_006;
                throw new Error((0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(errorCode, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
                    hostName: host.options.name,
                    sharedPkgName: pkgName
                }));
            }
            shareOptions.lib = module;
            this.setShared({
                pkgName,
                loaded: true,
                from: host.options.name,
                lib: shareOptions.lib,
                shared: shareOptions
            });
            return shareOptions.lib;
        }
        throw new Error((0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_006, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
            hostName: host.options.name,
            sharedPkgName: pkgName
        }));
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        const { host } = this;
        this.shareScopeMap[scopeName] = shareScope;
        this.hooks.lifecycle.initContainerShareScopeMap.emit({
            shareScope,
            options: host.options,
            origin: host,
            scopeName,
            hostShareScopeMap: extraOptions.hostShareScopeMap
        });
    }
    setShared({ pkgName, shared, from, lib, loading, loaded, get }) {
        const { version, scope = 'default' } = shared, shareInfo = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__.a)(shared, [
            "version",
            "scope"
        ]);
        const scopes = Array.isArray(scope) ? scope : [
            scope
        ];
        scopes.forEach((sc)=>{
            if (!this.shareScopeMap[sc]) {
                this.shareScopeMap[sc] = {};
            }
            if (!this.shareScopeMap[sc][pkgName]) {
                this.shareScopeMap[sc][pkgName] = {};
            }
            if (!this.shareScopeMap[sc][pkgName][version]) {
                this.shareScopeMap[sc][pkgName][version] = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
                    version,
                    scope: [
                        'default'
                    ]
                }, shareInfo, {
                    lib,
                    loaded,
                    loading
                });
                if (get) {
                    this.shareScopeMap[sc][pkgName][version].get = get;
                }
                return;
            }
            const registeredShared = this.shareScopeMap[sc][pkgName][version];
            if (loading && !registeredShared.loading) {
                registeredShared.loading = loading;
            }
            if (loaded && !registeredShared.loaded) {
                registeredShared.loaded = loaded;
            }
            if (from && registeredShared.from !== from) {
                registeredShared.from = from;
            }
        });
    }
    _setGlobalShareScopeMap(hostOptions) {
        const globalShareScopeMap = getGlobalShareScope();
        const identifier = hostOptions.id || hostOptions.name;
        if (identifier && !globalShareScopeMap[identifier]) {
            globalShareScopeMap[identifier] = this.shareScopeMap;
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            afterResolve: new AsyncWaterfallHook('afterResolve'),
            beforeLoadShare: new AsyncWaterfallHook('beforeLoadShare'),
            // not used yet
            loadShare: new AsyncHook(),
            resolveShare: new SyncWaterfallHook('resolveShare'),
            // maybe will change, temporarily for internal use only
            initContainerShareScopeMap: new SyncWaterfallHook('initContainerShareScopeMap')
        });
        this.host = host;
        this.shareScopeMap = {};
        this.initTokens = {};
        this._setGlobalShareScopeMap(host.options);
    }
}

class RemoteHandler {
    formatAndRegisterRemote(globalOptions, userOptions) {
        const userRemotes = userOptions.remotes || [];
        return userRemotes.reduce((res, remote)=>{
            this.registerRemote(remote, res, {
                force: false
            });
            return res;
        }, globalOptions.remotes);
    }
    setIdToRemoteMap(id, remoteMatchInfo) {
        const { remote, expose } = remoteMatchInfo;
        const { name, alias } = remote;
        this.idToRemoteMap[id] = {
            name: remote.name,
            expose
        };
        if (alias && id.startsWith(name)) {
            const idWithAlias = id.replace(name, alias);
            this.idToRemoteMap[idWithAlias] = {
                name: remote.name,
                expose
            };
            return;
        }
        if (alias && id.startsWith(alias)) {
            const idWithName = id.replace(alias, name);
            this.idToRemoteMap[idWithName] = {
                name: remote.name,
                expose
            };
        }
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        const { host } = this;
        try {
            const { loadFactory = true } = options || {
                loadFactory: true
            };
            // 1. Validate the parameters of the retrieved module. There are two module request methods: pkgName + expose and alias + expose.
            // 2. Request the snapshot information of the current host and globally store the obtained snapshot information. The retrieved module information is partially offline and partially online. The online module information will retrieve the modules used online.
            // 3. Retrieve the detailed information of the current module from global (remoteEntry address, expose resource address)
            // 4. After retrieving remoteEntry, call the init of the module, and then retrieve the exported content of the module through get
            // id: pkgName(@federation/app1) + expose(button) = @federation/app1/button
            // id: alias(app1) + expose(button) = app1/button
            // id: alias(app1/utils) + expose(loadash/sort) = app1/utils/loadash/sort
            const { module, moduleOptions, remoteMatchInfo } = await this.getRemoteModuleAndOptions({
                id
            });
            const { pkgNameOrAlias, remote, expose, id: idRes, remoteSnapshot } = remoteMatchInfo;
            const moduleOrFactory = await module.get(idRes, expose, options, remoteSnapshot);
            const moduleWrapper = await this.hooks.lifecycle.onLoad.emit({
                id: idRes,
                pkgNameOrAlias,
                expose,
                exposeModule: loadFactory ? moduleOrFactory : undefined,
                exposeModuleFactory: loadFactory ? undefined : moduleOrFactory,
                remote,
                options: moduleOptions,
                moduleInstance: module,
                origin: host
            });
            this.setIdToRemoteMap(id, remoteMatchInfo);
            if (typeof moduleWrapper === 'function') {
                return moduleWrapper;
            }
            return moduleOrFactory;
        } catch (error) {
            const { from = 'runtime' } = options || {
                from: 'runtime'
            };
            const failOver = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                error,
                from,
                lifecycle: 'onLoad',
                origin: host
            });
            if (!failOver) {
                throw error;
            }
            return failOver;
        }
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        const { host } = this;
        await this.hooks.lifecycle.beforePreloadRemote.emit({
            preloadOps: preloadOptions,
            options: host.options,
            origin: host
        });
        const preloadOps = formatPreloadArgs(host.options.remotes, preloadOptions);
        await Promise.all(preloadOps.map(async (ops)=>{
            const { remote } = ops;
            const remoteInfo = getRemoteInfo(remote);
            const { globalSnapshot, remoteSnapshot } = await host.snapshotHandler.loadRemoteSnapshotInfo({
                moduleInfo: remote
            });
            const assets = await this.hooks.lifecycle.generatePreloadAssets.emit({
                origin: host,
                preloadOptions: ops,
                remote,
                remoteInfo,
                globalSnapshot,
                remoteSnapshot
            });
            if (!assets) {
                return;
            }
            preloadAssets(remoteInfo, host, assets);
        }));
    }
    registerRemotes(remotes, options) {
        const { host } = this;
        remotes.forEach((remote)=>{
            this.registerRemote(remote, host.options.remotes, {
                force: options == null ? void 0 : options.force
            });
        });
    }
    async getRemoteModuleAndOptions(options) {
        const { host } = this;
        const { id } = options;
        let loadRemoteArgs;
        try {
            loadRemoteArgs = await this.hooks.lifecycle.beforeRequest.emit({
                id,
                options: host.options,
                origin: host
            });
        } catch (error) {
            loadRemoteArgs = await this.hooks.lifecycle.errorLoadRemote.emit({
                id,
                options: host.options,
                origin: host,
                from: 'runtime',
                error,
                lifecycle: 'beforeRequest'
            });
            if (!loadRemoteArgs) {
                throw error;
            }
        }
        const { id: idRes } = loadRemoteArgs;
        const remoteSplitInfo = matchRemoteWithNameAndExpose(host.options.remotes, idRes);
        assert(remoteSplitInfo, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.RUNTIME_004, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_2__.runtimeDescMap, {
            hostName: host.options.name,
            requestId: idRes
        }));
        const { remote: rawRemote } = remoteSplitInfo;
        const remoteInfo = getRemoteInfo(rawRemote);
        const matchInfo = await host.sharedHandler.hooks.lifecycle.afterResolve.emit((0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
            id: idRes
        }, remoteSplitInfo, {
            options: host.options,
            origin: host,
            remoteInfo
        }));
        const { remote, expose } = matchInfo;
        assert(remote && expose, `The 'beforeRequest' hook was executed, but it failed to return the correct 'remote' and 'expose' values while loading ${idRes}.`);
        let module = host.moduleCache.get(remote.name);
        const moduleOptions = {
            host: host,
            remoteInfo
        };
        if (!module) {
            module = new Module(moduleOptions);
            host.moduleCache.set(remote.name, module);
        }
        return {
            module,
            moduleOptions,
            remoteMatchInfo: matchInfo
        };
    }
    registerRemote(remote, targetRemotes, options) {
        const { host } = this;
        const normalizeRemote = ()=>{
            if (remote.alias) {
                // Validate if alias equals the prefix of remote.name and remote.alias, if so, throw an error
                // As multi-level path references cannot guarantee unique names, alias being a prefix of remote.name is not supported
                const findEqual = targetRemotes.find((item)=>{
                    var _item_alias;
                    return remote.alias && (item.name.startsWith(remote.alias) || ((_item_alias = item.alias) == null ? void 0 : _item_alias.startsWith(remote.alias)));
                });
                assert(!findEqual, `The alias ${remote.alias} of remote ${remote.name} is not allowed to be the prefix of ${findEqual && findEqual.name} name or alias`);
            }
            // Set the remote entry to a complete path
            if ('entry' in remote) {
                if ((0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)() && !remote.entry.startsWith('http')) {
                    remote.entry = new URL(remote.entry, window.location.origin).href;
                }
            }
            if (!remote.shareScope) {
                remote.shareScope = DEFAULT_SCOPE;
            }
            if (!remote.type) {
                remote.type = DEFAULT_REMOTE_TYPE;
            }
        };
        this.hooks.lifecycle.beforeRegisterRemote.emit({
            remote,
            origin: host
        });
        const registeredRemote = targetRemotes.find((item)=>item.name === remote.name);
        if (!registeredRemote) {
            normalizeRemote();
            targetRemotes.push(remote);
            this.hooks.lifecycle.registerRemote.emit({
                remote,
                origin: host
            });
        } else {
            const messages = [
                `The remote "${remote.name}" is already registered.`,
                'Please note that overriding it may cause unexpected errors.'
            ];
            if (options == null ? void 0 : options.force) {
                // remove registered remote
                this.removeRemote(registeredRemote);
                normalizeRemote();
                targetRemotes.push(remote);
                this.hooks.lifecycle.registerRemote.emit({
                    remote,
                    origin: host
                });
                (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.warn)(messages.join(' '));
            }
        }
    }
    removeRemote(remote) {
        try {
            const { host } = this;
            const { name } = remote;
            const remoteIndex = host.options.remotes.findIndex((item)=>item.name === name);
            if (remoteIndex !== -1) {
                host.options.remotes.splice(remoteIndex, 1);
            }
            const loadedModule = host.moduleCache.get(remote.name);
            if (loadedModule) {
                const remoteInfo = loadedModule.remoteInfo;
                const key = remoteInfo.entryGlobalName;
                if (CurrentGlobal[key]) {
                    var _Object_getOwnPropertyDescriptor;
                    if ((_Object_getOwnPropertyDescriptor = Object.getOwnPropertyDescriptor(CurrentGlobal, key)) == null ? void 0 : _Object_getOwnPropertyDescriptor.configurable) {
                        delete CurrentGlobal[key];
                    } else {
                        // @ts-ignore
                        CurrentGlobal[key] = undefined;
                    }
                }
                const remoteEntryUniqueKey = getRemoteEntryUniqueKey(loadedModule.remoteInfo);
                if (globalLoading[remoteEntryUniqueKey]) {
                    delete globalLoading[remoteEntryUniqueKey];
                }
                host.snapshotHandler.manifestCache.delete(remoteInfo.entry);
                // delete unloaded shared and instance
                let remoteInsId = remoteInfo.buildVersion ? (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.composeKeyWithSeparator)(remoteInfo.name, remoteInfo.buildVersion) : remoteInfo.name;
                const remoteInsIndex = CurrentGlobal.__FEDERATION__.__INSTANCES__.findIndex((ins)=>{
                    if (remoteInfo.buildVersion) {
                        return ins.options.id === remoteInsId;
                    } else {
                        return ins.name === remoteInsId;
                    }
                });
                if (remoteInsIndex !== -1) {
                    const remoteIns = CurrentGlobal.__FEDERATION__.__INSTANCES__[remoteInsIndex];
                    remoteInsId = remoteIns.options.id || remoteInsId;
                    const globalShareScopeMap = getGlobalShareScope();
                    let isAllSharedNotUsed = true;
                    const needDeleteKeys = [];
                    Object.keys(globalShareScopeMap).forEach((instId)=>{
                        const shareScopeMap = globalShareScopeMap[instId];
                        shareScopeMap && Object.keys(shareScopeMap).forEach((shareScope)=>{
                            const shareScopeVal = shareScopeMap[shareScope];
                            shareScopeVal && Object.keys(shareScopeVal).forEach((shareName)=>{
                                const sharedPkgs = shareScopeVal[shareName];
                                sharedPkgs && Object.keys(sharedPkgs).forEach((shareVersion)=>{
                                    const shared = sharedPkgs[shareVersion];
                                    if (shared && typeof shared === 'object' && shared.from === remoteInfo.name) {
                                        if (shared.loaded || shared.loading) {
                                            shared.useIn = shared.useIn.filter((usedHostName)=>usedHostName !== remoteInfo.name);
                                            if (shared.useIn.length) {
                                                isAllSharedNotUsed = false;
                                            } else {
                                                needDeleteKeys.push([
                                                    instId,
                                                    shareScope,
                                                    shareName,
                                                    shareVersion
                                                ]);
                                            }
                                        } else {
                                            needDeleteKeys.push([
                                                instId,
                                                shareScope,
                                                shareName,
                                                shareVersion
                                            ]);
                                        }
                                    }
                                });
                            });
                        });
                    });
                    if (isAllSharedNotUsed) {
                        remoteIns.shareScopeMap = {};
                        delete globalShareScopeMap[remoteInsId];
                    }
                    needDeleteKeys.forEach(([insId, shareScope, shareName, shareVersion])=>{
                        var _globalShareScopeMap_insId_shareScope_shareName, _globalShareScopeMap_insId_shareScope, _globalShareScopeMap_insId;
                        (_globalShareScopeMap_insId = globalShareScopeMap[insId]) == null ? true : (_globalShareScopeMap_insId_shareScope = _globalShareScopeMap_insId[shareScope]) == null ? true : (_globalShareScopeMap_insId_shareScope_shareName = _globalShareScopeMap_insId_shareScope[shareName]) == null ? true : delete _globalShareScopeMap_insId_shareScope_shareName[shareVersion];
                    });
                    CurrentGlobal.__FEDERATION__.__INSTANCES__.splice(remoteInsIndex, 1);
                }
                const { hostGlobalSnapshot } = getGlobalRemoteInfo(remote, host);
                if (hostGlobalSnapshot) {
                    const remoteKey = hostGlobalSnapshot && 'remotesInfo' in hostGlobalSnapshot && hostGlobalSnapshot.remotesInfo && getInfoWithoutType(hostGlobalSnapshot.remotesInfo, remote.name).key;
                    if (remoteKey) {
                        delete hostGlobalSnapshot.remotesInfo[remoteKey];
                        if (//eslint-disable-next-line no-extra-boolean-cast
                        Boolean(Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey])) {
                            delete Global.__FEDERATION__.__MANIFEST_LOADING__[remoteKey];
                        }
                    }
                }
                host.moduleCache.delete(remote.name);
            }
        } catch (err) {
            logger.log('removeRemote fail: ', err);
        }
    }
    constructor(host){
        this.hooks = new PluginSystem({
            beforeRegisterRemote: new SyncWaterfallHook('beforeRegisterRemote'),
            registerRemote: new SyncWaterfallHook('registerRemote'),
            beforeRequest: new AsyncWaterfallHook('beforeRequest'),
            onLoad: new AsyncHook('onLoad'),
            handlePreloadModule: new SyncHook('handlePreloadModule'),
            errorLoadRemote: new AsyncHook('errorLoadRemote'),
            beforePreloadRemote: new AsyncHook('beforePreloadRemote'),
            generatePreloadAssets: new AsyncHook('generatePreloadAssets'),
            // not used yet
            afterPreloadRemote: new AsyncHook(),
            loadEntry: new AsyncHook()
        });
        this.host = host;
        this.idToRemoteMap = {};
    }
}

const USE_SNAPSHOT =  true ? !false : 0; // Default to true (use snapshot) when not explicitly defined
class ModuleFederation {
    initOptions(userOptions) {
        this.registerPlugins(userOptions.plugins);
        const options = this.formatOptions(this.options, userOptions);
        this.options = options;
        return options;
    }
    async loadShare(pkgName, extraOptions) {
        return this.sharedHandler.loadShare(pkgName, extraOptions);
    }
    // The lib function will only be available if the shared set by eager or runtime init is set or the shared is successfully loaded.
    // 1. If the loaded shared already exists globally, then it will be reused
    // 2. If lib exists in local shared, it will be used directly
    // 3. If the local get returns something other than Promise, then it will be used directly
    loadShareSync(pkgName, extraOptions) {
        return this.sharedHandler.loadShareSync(pkgName, extraOptions);
    }
    initializeSharing(shareScopeName = DEFAULT_SCOPE, extraOptions) {
        return this.sharedHandler.initializeSharing(shareScopeName, extraOptions);
    }
    initRawContainer(name, url, container) {
        const remoteInfo = getRemoteInfo({
            name,
            entry: url
        });
        const module = new Module({
            host: this,
            remoteInfo
        });
        module.remoteEntryExports = container;
        this.moduleCache.set(name, module);
        return module;
    }
    // eslint-disable-next-line max-lines-per-function
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async loadRemote(id, options) {
        return this.remoteHandler.loadRemote(id, options);
    }
    // eslint-disable-next-line @typescript-eslint/member-ordering
    async preloadRemote(preloadOptions) {
        return this.remoteHandler.preloadRemote(preloadOptions);
    }
    initShareScopeMap(scopeName, shareScope, extraOptions = {}) {
        this.sharedHandler.initShareScopeMap(scopeName, shareScope, extraOptions);
    }
    formatOptions(globalOptions, userOptions) {
        const { shared } = formatShareConfigs(globalOptions, userOptions);
        const { userOptions: userOptionsRes, options: globalOptionsRes } = this.hooks.lifecycle.beforeInit.emit({
            origin: this,
            userOptions,
            options: globalOptions,
            shareInfo: shared
        });
        const remotes = this.remoteHandler.formatAndRegisterRemote(globalOptionsRes, userOptionsRes);
        const { shared: handledShared } = this.sharedHandler.registerShared(globalOptionsRes, userOptionsRes);
        const plugins = [
            ...globalOptionsRes.plugins
        ];
        if (userOptionsRes.plugins) {
            userOptionsRes.plugins.forEach((plugin)=>{
                if (!plugins.includes(plugin)) {
                    plugins.push(plugin);
                }
            });
        }
        const optionsRes = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, globalOptions, userOptions, {
            plugins,
            remotes,
            shared: handledShared
        });
        this.hooks.lifecycle.init.emit({
            origin: this,
            options: optionsRes
        });
        return optionsRes;
    }
    registerPlugins(plugins) {
        const pluginRes = registerPlugins(plugins, this);
        // Merge plugin
        this.options.plugins = this.options.plugins.reduce((res, plugin)=>{
            if (!plugin) return res;
            if (res && !res.find((item)=>item.name === plugin.name)) {
                res.push(plugin);
            }
            return res;
        }, pluginRes || []);
    }
    registerRemotes(remotes, options) {
        return this.remoteHandler.registerRemotes(remotes, options);
    }
    registerShared(shared) {
        this.sharedHandler.registerShared(this.options, (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, this.options, {
            shared
        }));
    }
    constructor(userOptions){
        this.hooks = new PluginSystem({
            beforeInit: new SyncWaterfallHook('beforeInit'),
            init: new SyncHook(),
            // maybe will change, temporarily for internal use only
            beforeInitContainer: new AsyncWaterfallHook('beforeInitContainer'),
            // maybe will change, temporarily for internal use only
            initContainer: new AsyncWaterfallHook('initContainer')
        });
        this.version = "0.19.1";
        this.moduleCache = new Map();
        this.loaderHook = new PluginSystem({
            // FIXME: may not be suitable , not open to the public yet
            getModuleInfo: new SyncHook(),
            createScript: new SyncHook(),
            createLink: new SyncHook(),
            fetch: new AsyncHook(),
            loadEntryError: new AsyncHook(),
            getModuleFactory: new AsyncHook()
        });
        this.bridgeHook = new PluginSystem({
            beforeBridgeRender: new SyncHook(),
            afterBridgeRender: new SyncHook(),
            beforeBridgeDestroy: new SyncHook(),
            afterBridgeDestroy: new SyncHook()
        });
        const plugins = USE_SNAPSHOT ? [
            snapshotPlugin(),
            generatePreloadAssetsPlugin()
        ] : [];
        // TODO: Validate the details of the options
        // Initialize options with default values
        const defaultOptions = {
            id: getBuilderId(),
            name: userOptions.name,
            plugins,
            remotes: [],
            shared: {},
            inBrowser: (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_1__.isBrowserEnv)()
        };
        this.name = userOptions.name;
        this.options = defaultOptions;
        this.snapshotHandler = new SnapshotHandler(this);
        this.sharedHandler = new SharedHandler(this);
        this.remoteHandler = new RemoteHandler(this);
        this.shareScopeMap = this.sharedHandler.shareScopeMap;
        this.registerPlugins([
            ...defaultOptions.plugins,
            ...userOptions.plugins || []
        ]);
        this.options = this.formatOptions(defaultOptions, userOptions);
    }
}

var index = /*#__PURE__*/Object.freeze({
    __proto__: null
});


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/runtime-core/dist/polyfills.esm.js":
/*!****************************************************************************!*\
  !*** ./node_modules/@module-federation/runtime-core/dist/polyfills.esm.js ***!
  \****************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _extends),
/* harmony export */   a: () => (/* binding */ _object_without_properties_loose)
/* harmony export */ });
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function _object_without_properties_loose(source, excluded) {
    if (source == null) return {};
    var target = {};
    var sourceKeys = Object.keys(source);
    var key, i;
    for(i = 0; i < sourceKeys.length; i++){
        key = sourceKeys[i];
        if (excluded.indexOf(key) >= 0) continue;
        target[key] = source[key];
    }
    return target;
}


//# sourceMappingURL=polyfills.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/runtime/dist/index.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/index.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   Module: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.Module),
/* harmony export */   ModuleFederation: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ModuleFederation),
/* harmony export */   createInstance: () => (/* binding */ createInstance),
/* harmony export */   getInstance: () => (/* binding */ getInstance),
/* harmony export */   getRemoteEntry: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getRemoteEntry),
/* harmony export */   getRemoteInfo: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getRemoteInfo),
/* harmony export */   init: () => (/* binding */ init),
/* harmony export */   loadRemote: () => (/* binding */ loadRemote),
/* harmony export */   loadScript: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.loadScript),
/* harmony export */   loadScriptNode: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.loadScriptNode),
/* harmony export */   loadShare: () => (/* binding */ loadShare),
/* harmony export */   loadShareSync: () => (/* binding */ loadShareSync),
/* harmony export */   preloadRemote: () => (/* binding */ preloadRemote),
/* harmony export */   registerGlobalPlugins: () => (/* reexport safe */ _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.registerGlobalPlugins),
/* harmony export */   registerPlugins: () => (/* binding */ registerPlugins),
/* harmony export */   registerRemotes: () => (/* binding */ registerRemotes),
/* harmony export */   registerShared: () => (/* binding */ registerShared)
/* harmony export */ });
/* harmony import */ var _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/runtime-core */ "./node_modules/@module-federation/runtime-core/dist/index.esm.js");
/* harmony import */ var _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/error-codes */ "./node_modules/@module-federation/error-codes/dist/index.esm.mjs");
/* harmony import */ var _utils_esm_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./utils.esm.js */ "./node_modules/@module-federation/runtime/dist/utils.esm.js");





function createInstance(options) {
    // Retrieve debug constructor
    const ModuleFederationConstructor = (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.getGlobalFederationConstructor)() || _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ModuleFederation;
    const instance = new ModuleFederationConstructor(options);
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setGlobalFederationInstance)(instance);
    return instance;
}
let FederationInstance = null;
/**
 * @deprecated Use createInstance or getInstance instead
 */ function init(options) {
    // Retrieve the same instance with the same name
    const instance = (0,_utils_esm_js__WEBPACK_IMPORTED_MODULE_2__.g)(options.name, options.version);
    if (!instance) {
        FederationInstance = createInstance(options);
        return FederationInstance;
    } else {
        // Merge options
        instance.initOptions(options);
        if (!FederationInstance) {
            FederationInstance = instance;
        }
        return instance;
    }
}
function loadRemote(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    const loadRemote1 = FederationInstance.loadRemote;
    // eslint-disable-next-line prefer-spread
    return loadRemote1.apply(FederationInstance, args);
}
function loadShare(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    // eslint-disable-next-line prefer-spread
    const loadShare1 = FederationInstance.loadShare;
    return loadShare1.apply(FederationInstance, args);
}
function loadShareSync(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    const loadShareSync1 = FederationInstance.loadShareSync;
    // eslint-disable-next-line prefer-spread
    return loadShareSync1.apply(FederationInstance, args);
}
function preloadRemote(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    // eslint-disable-next-line prefer-spread
    return FederationInstance.preloadRemote.apply(FederationInstance, args);
}
function registerRemotes(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerRemotes.apply(FederationInstance, args);
}
function registerPlugins(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerPlugins.apply(FederationInstance, args);
}
function getInstance() {
    return FederationInstance;
}
function registerShared(...args) {
    (0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.assert)(FederationInstance, (0,_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.getShortErrorMsg)(_module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.RUNTIME_009, _module_federation_error_codes__WEBPACK_IMPORTED_MODULE_1__.runtimeDescMap));
    // eslint-disable-next-line prefer-spread
    return FederationInstance.registerShared.apply(FederationInstance, args);
}
// Inject for debug
(0,_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.setGlobalFederationConstructor)(_module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.ModuleFederation);


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/runtime/dist/utils.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/runtime/dist/utils.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   g: () => (/* binding */ getGlobalFederationInstance)
/* harmony export */ });
/* harmony import */ var _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/runtime-core */ "./node_modules/@module-federation/runtime-core/dist/index.esm.js");


// injected by bundler, so it can not use runtime-core stuff
function getBuilderId() {
    //@ts-ignore
    return  true ? "particle:0.0.9" : 0;
}
function getGlobalFederationInstance(name, version) {
    const buildId = getBuilderId();
    return _module_federation_runtime_core__WEBPACK_IMPORTED_MODULE_0__.CurrentGlobal.__FEDERATION__.__INSTANCES__.find((GMInstance)=>{
        if (buildId && GMInstance.options.id === buildId) {
            return true;
        }
        if (GMInstance.options.name === name && !GMInstance.options.version && !version) {
            return true;
        }
        if (GMInstance.options.name === name && version && GMInstance.options.version === version) {
            return true;
        }
        return false;
    });
}


//# sourceMappingURL=utils.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/sdk/dist/index.esm.js":
/*!***************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/index.esm.js ***!
  \***************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   BROWSER_LOG_KEY: () => (/* binding */ BROWSER_LOG_KEY),
/* harmony export */   ENCODE_NAME_PREFIX: () => (/* binding */ ENCODE_NAME_PREFIX),
/* harmony export */   EncodedNameTransformMap: () => (/* binding */ EncodedNameTransformMap),
/* harmony export */   FederationModuleManifest: () => (/* binding */ FederationModuleManifest),
/* harmony export */   MANIFEST_EXT: () => (/* binding */ MANIFEST_EXT),
/* harmony export */   MFModuleType: () => (/* binding */ MFModuleType),
/* harmony export */   MFPrefetchCommon: () => (/* binding */ MFPrefetchCommon),
/* harmony export */   MODULE_DEVTOOL_IDENTIFIER: () => (/* binding */ MODULE_DEVTOOL_IDENTIFIER),
/* harmony export */   ManifestFileName: () => (/* binding */ ManifestFileName),
/* harmony export */   NameTransformMap: () => (/* binding */ NameTransformMap),
/* harmony export */   NameTransformSymbol: () => (/* binding */ NameTransformSymbol),
/* harmony export */   SEPARATOR: () => (/* binding */ SEPARATOR),
/* harmony export */   StatsFileName: () => (/* binding */ StatsFileName),
/* harmony export */   TEMP_DIR: () => (/* binding */ TEMP_DIR),
/* harmony export */   assert: () => (/* binding */ assert),
/* harmony export */   composeKeyWithSeparator: () => (/* binding */ composeKeyWithSeparator),
/* harmony export */   containerPlugin: () => (/* binding */ ContainerPlugin),
/* harmony export */   containerReferencePlugin: () => (/* binding */ ContainerReferencePlugin),
/* harmony export */   createLink: () => (/* binding */ createLink),
/* harmony export */   createLogger: () => (/* binding */ createLogger),
/* harmony export */   createModuleFederationConfig: () => (/* binding */ createModuleFederationConfig),
/* harmony export */   createScript: () => (/* binding */ createScript),
/* harmony export */   createScriptNode: () => (/* binding */ createScriptNode),
/* harmony export */   decodeName: () => (/* binding */ decodeName),
/* harmony export */   encodeName: () => (/* binding */ encodeName),
/* harmony export */   error: () => (/* binding */ error),
/* harmony export */   generateExposeFilename: () => (/* binding */ generateExposeFilename),
/* harmony export */   generateShareFilename: () => (/* binding */ generateShareFilename),
/* harmony export */   generateSnapshotFromManifest: () => (/* binding */ generateSnapshotFromManifest),
/* harmony export */   getProcessEnv: () => (/* binding */ getProcessEnv),
/* harmony export */   getResourceUrl: () => (/* binding */ getResourceUrl),
/* harmony export */   inferAutoPublicPath: () => (/* binding */ inferAutoPublicPath),
/* harmony export */   isBrowserEnv: () => (/* binding */ isBrowserEnv),
/* harmony export */   isDebugMode: () => (/* binding */ isDebugMode),
/* harmony export */   isManifestProvider: () => (/* binding */ isManifestProvider),
/* harmony export */   isReactNativeEnv: () => (/* binding */ isReactNativeEnv),
/* harmony export */   isRequiredVersion: () => (/* binding */ isRequiredVersion),
/* harmony export */   isStaticResourcesEqual: () => (/* binding */ isStaticResourcesEqual),
/* harmony export */   loadScript: () => (/* binding */ loadScript),
/* harmony export */   loadScriptNode: () => (/* binding */ loadScriptNode),
/* harmony export */   logger: () => (/* binding */ logger),
/* harmony export */   moduleFederationPlugin: () => (/* binding */ ModuleFederationPlugin),
/* harmony export */   normalizeOptions: () => (/* binding */ normalizeOptions),
/* harmony export */   parseEntry: () => (/* binding */ parseEntry),
/* harmony export */   safeToString: () => (/* binding */ safeToString),
/* harmony export */   safeWrapper: () => (/* binding */ safeWrapper),
/* harmony export */   sharePlugin: () => (/* binding */ SharePlugin),
/* harmony export */   simpleJoinRemoteEntry: () => (/* binding */ simpleJoinRemoteEntry),
/* harmony export */   warn: () => (/* binding */ warn)
/* harmony export */ });
/* harmony import */ var _polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./polyfills.esm.js */ "./node_modules/@module-federation/sdk/dist/polyfills.esm.js");


const FederationModuleManifest = 'federation-manifest.json';
const MANIFEST_EXT = '.json';
const BROWSER_LOG_KEY = 'FEDERATION_DEBUG';
const NameTransformSymbol = {
    AT: '@',
    HYPHEN: '-',
    SLASH: '/'
};
const NameTransformMap = {
    [NameTransformSymbol.AT]: 'scope_',
    [NameTransformSymbol.HYPHEN]: '_',
    [NameTransformSymbol.SLASH]: '__'
};
const EncodedNameTransformMap = {
    [NameTransformMap[NameTransformSymbol.AT]]: NameTransformSymbol.AT,
    [NameTransformMap[NameTransformSymbol.HYPHEN]]: NameTransformSymbol.HYPHEN,
    [NameTransformMap[NameTransformSymbol.SLASH]]: NameTransformSymbol.SLASH
};
const SEPARATOR = ':';
const ManifestFileName = 'mf-manifest.json';
const StatsFileName = 'mf-stats.json';
const MFModuleType = {
    NPM: 'npm',
    APP: 'app'
};
const MODULE_DEVTOOL_IDENTIFIER = '__MF_DEVTOOLS_MODULE_INFO__';
const ENCODE_NAME_PREFIX = 'ENCODE_NAME_PREFIX';
const TEMP_DIR = '.federation';
const MFPrefetchCommon = {
    identifier: 'MFDataPrefetch',
    globalKey: '__PREFETCH__',
    library: 'mf-data-prefetch',
    exportsKey: '__PREFETCH_EXPORTS__',
    fileName: 'bootstrap.js'
};

var ContainerPlugin = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var ContainerReferencePlugin = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var ModuleFederationPlugin = /*#__PURE__*/Object.freeze({
    __proto__: null
});

var SharePlugin = /*#__PURE__*/Object.freeze({
    __proto__: null
});

function isBrowserEnv() {
    return typeof window !== 'undefined' && typeof window.document !== 'undefined';
}
function isReactNativeEnv() {
    var _navigator;
    return typeof navigator !== 'undefined' && ((_navigator = navigator) == null ? void 0 : _navigator.product) === 'ReactNative';
}
function isBrowserDebug() {
    try {
        if (isBrowserEnv() && window.localStorage) {
            return Boolean(localStorage.getItem(BROWSER_LOG_KEY));
        }
    } catch (error) {
        return false;
    }
    return false;
}
function isDebugMode() {
    if (typeof process !== 'undefined' && process.env && process.env['FEDERATION_DEBUG']) {
        return Boolean(process.env['FEDERATION_DEBUG']);
    }
    if (typeof FEDERATION_DEBUG !== 'undefined' && Boolean(FEDERATION_DEBUG)) {
        return true;
    }
    return isBrowserDebug();
}
const getProcessEnv = function() {
    return typeof process !== 'undefined' && process.env ? process.env : {};
};

const LOG_CATEGORY = '[ Federation Runtime ]';
// entry: name:version   version : 1.0.0 | ^1.2.3
// entry: name:entry  entry:  https://localhost:9000/federation-manifest.json
const parseEntry = (str, devVerOrUrl, separator = SEPARATOR)=>{
    const strSplit = str.split(separator);
    const devVersionOrUrl = getProcessEnv()['NODE_ENV'] === 'development' && devVerOrUrl;
    const defaultVersion = '*';
    const isEntry = (s)=>s.startsWith('http') || s.includes(MANIFEST_EXT);
    // Check if the string starts with a type
    if (strSplit.length >= 2) {
        let [name, ...versionOrEntryArr] = strSplit;
        // @name@manifest-url.json
        if (str.startsWith(separator)) {
            name = strSplit.slice(0, 2).join(separator);
            versionOrEntryArr = [
                devVersionOrUrl || strSplit.slice(2).join(separator)
            ];
        }
        let versionOrEntry = devVersionOrUrl || versionOrEntryArr.join(separator);
        if (isEntry(versionOrEntry)) {
            return {
                name,
                entry: versionOrEntry
            };
        } else {
            // Apply version rule
            // devVersionOrUrl => inputVersion => defaultVersion
            return {
                name,
                version: versionOrEntry || defaultVersion
            };
        }
    } else if (strSplit.length === 1) {
        const [name] = strSplit;
        if (devVersionOrUrl && isEntry(devVersionOrUrl)) {
            return {
                name,
                entry: devVersionOrUrl
            };
        }
        return {
            name,
            version: devVersionOrUrl || defaultVersion
        };
    } else {
        throw `Invalid entry value: ${str}`;
    }
};
const composeKeyWithSeparator = function(...args) {
    if (!args.length) {
        return '';
    }
    return args.reduce((sum, cur)=>{
        if (!cur) {
            return sum;
        }
        if (!sum) {
            return cur;
        }
        return `${sum}${SEPARATOR}${cur}`;
    }, '');
};
const encodeName = function(name, prefix = '', withExt = false) {
    try {
        const ext = withExt ? '.js' : '';
        return `${prefix}${name.replace(new RegExp(`${NameTransformSymbol.AT}`, 'g'), NameTransformMap[NameTransformSymbol.AT]).replace(new RegExp(`${NameTransformSymbol.HYPHEN}`, 'g'), NameTransformMap[NameTransformSymbol.HYPHEN]).replace(new RegExp(`${NameTransformSymbol.SLASH}`, 'g'), NameTransformMap[NameTransformSymbol.SLASH])}${ext}`;
    } catch (err) {
        throw err;
    }
};
const decodeName = function(name, prefix, withExt) {
    try {
        let decodedName = name;
        if (prefix) {
            if (!decodedName.startsWith(prefix)) {
                return decodedName;
            }
            decodedName = decodedName.replace(new RegExp(prefix, 'g'), '');
        }
        decodedName = decodedName.replace(new RegExp(`${NameTransformMap[NameTransformSymbol.AT]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.AT]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.SLASH]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.SLASH]]).replace(new RegExp(`${NameTransformMap[NameTransformSymbol.HYPHEN]}`, 'g'), EncodedNameTransformMap[NameTransformMap[NameTransformSymbol.HYPHEN]]);
        if (withExt) {
            decodedName = decodedName.replace('.js', '');
        }
        return decodedName;
    } catch (err) {
        throw err;
    }
};
const generateExposeFilename = (exposeName, withExt)=>{
    if (!exposeName) {
        return '';
    }
    let expose = exposeName;
    if (expose === '.') {
        expose = 'default_export';
    }
    if (expose.startsWith('./')) {
        expose = expose.replace('./', '');
    }
    return encodeName(expose, '__federation_expose_', withExt);
};
const generateShareFilename = (pkgName, withExt)=>{
    if (!pkgName) {
        return '';
    }
    return encodeName(pkgName, '__federation_shared_', withExt);
};
const getResourceUrl = (module, sourceUrl)=>{
    if ('getPublicPath' in module) {
        let publicPath;
        if (!module.getPublicPath.startsWith('function')) {
            publicPath = new Function(module.getPublicPath)();
        } else {
            publicPath = new Function('return ' + module.getPublicPath)()();
        }
        return `${publicPath}${sourceUrl}`;
    } else if ('publicPath' in module) {
        if (!isBrowserEnv() && !isReactNativeEnv() && 'ssrPublicPath' in module) {
            return `${module.ssrPublicPath}${sourceUrl}`;
        }
        return `${module.publicPath}${sourceUrl}`;
    } else {
        console.warn('Cannot get resource URL. If in debug mode, please ignore.', module, sourceUrl);
        return '';
    }
};
// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
const assert = (condition, msg)=>{
    if (!condition) {
        error(msg);
    }
};
const error = (msg)=>{
    throw new Error(`${LOG_CATEGORY}: ${msg}`);
};
const warn = (msg)=>{
    console.warn(`${LOG_CATEGORY}: ${msg}`);
};
function safeToString(info) {
    try {
        return JSON.stringify(info, null, 2);
    } catch (e) {
        return '';
    }
}
// RegExp for version string
const VERSION_PATTERN_REGEXP = /^([\d^=v<>~]|[*xX]$)/;
function isRequiredVersion(str) {
    return VERSION_PATTERN_REGEXP.test(str);
}

const simpleJoinRemoteEntry = (rPath, rName)=>{
    if (!rPath) {
        return rName;
    }
    const transformPath = (str)=>{
        if (str === '.') {
            return '';
        }
        if (str.startsWith('./')) {
            return str.replace('./', '');
        }
        if (str.startsWith('/')) {
            const strWithoutSlash = str.slice(1);
            if (strWithoutSlash.endsWith('/')) {
                return strWithoutSlash.slice(0, -1);
            }
            return strWithoutSlash;
        }
        return str;
    };
    const transformedPath = transformPath(rPath);
    if (!transformedPath) {
        return rName;
    }
    if (transformedPath.endsWith('/')) {
        return `${transformedPath}${rName}`;
    }
    return `${transformedPath}/${rName}`;
};
function inferAutoPublicPath(url) {
    return url.replace(/#.*$/, '').replace(/\?.*$/, '').replace(/\/[^\/]+$/, '/');
}
// Priority: overrides > remotes
// eslint-disable-next-line max-lines-per-function
function generateSnapshotFromManifest(manifest, options = {}) {
    var _manifest_metaData, _manifest_metaData1;
    const { remotes = {}, overrides = {}, version } = options;
    let remoteSnapshot;
    const getPublicPath = ()=>{
        if ('publicPath' in manifest.metaData) {
            if (manifest.metaData.publicPath === 'auto' && version) {
                // use same implementation as publicPath auto runtime module implements
                return inferAutoPublicPath(version);
            }
            return manifest.metaData.publicPath;
        } else {
            return manifest.metaData.getPublicPath;
        }
    };
    const overridesKeys = Object.keys(overrides);
    let remotesInfo = {};
    // If remotes are not provided, only the remotes in the manifest will be read
    if (!Object.keys(remotes).length) {
        var _manifest_remotes;
        remotesInfo = ((_manifest_remotes = manifest.remotes) == null ? void 0 : _manifest_remotes.reduce((res, next)=>{
            let matchedVersion;
            const name = next.federationContainerName;
            // overrides have higher priority
            if (overridesKeys.includes(name)) {
                matchedVersion = overrides[name];
            } else {
                if ('version' in next) {
                    matchedVersion = next.version;
                } else {
                    matchedVersion = next.entry;
                }
            }
            res[name] = {
                matchedVersion
            };
            return res;
        }, {})) || {};
    }
    // If remotes (deploy scenario) are specified, they need to be traversed again
    Object.keys(remotes).forEach((key)=>remotesInfo[key] = {
            // overrides will override dependencies
            matchedVersion: overridesKeys.includes(key) ? overrides[key] : remotes[key]
        });
    const { remoteEntry: { path: remoteEntryPath, name: remoteEntryName, type: remoteEntryType }, types: remoteTypes, buildInfo: { buildVersion }, globalName, ssrRemoteEntry } = manifest.metaData;
    const { exposes } = manifest;
    let basicRemoteSnapshot = {
        version: version ? version : '',
        buildVersion,
        globalName,
        remoteEntry: simpleJoinRemoteEntry(remoteEntryPath, remoteEntryName),
        remoteEntryType,
        remoteTypes: simpleJoinRemoteEntry(remoteTypes.path, remoteTypes.name),
        remoteTypesZip: remoteTypes.zip || '',
        remoteTypesAPI: remoteTypes.api || '',
        remotesInfo,
        shared: manifest == null ? void 0 : manifest.shared.map((item)=>({
                assets: item.assets,
                sharedName: item.name,
                version: item.version
            })),
        modules: exposes == null ? void 0 : exposes.map((expose)=>({
                moduleName: expose.name,
                modulePath: expose.path,
                assets: expose.assets
            }))
    };
    if ((_manifest_metaData = manifest.metaData) == null ? void 0 : _manifest_metaData.prefetchInterface) {
        const prefetchInterface = manifest.metaData.prefetchInterface;
        basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            prefetchInterface
        });
    }
    if ((_manifest_metaData1 = manifest.metaData) == null ? void 0 : _manifest_metaData1.prefetchEntry) {
        const { path, name, type } = manifest.metaData.prefetchEntry;
        basicRemoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            prefetchEntry: simpleJoinRemoteEntry(path, name),
            prefetchEntryType: type
        });
    }
    if ('publicPath' in manifest.metaData) {
        remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            publicPath: getPublicPath(),
            ssrPublicPath: manifest.metaData.ssrPublicPath
        });
    } else {
        remoteSnapshot = (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, basicRemoteSnapshot, {
            getPublicPath: getPublicPath()
        });
    }
    if (ssrRemoteEntry) {
        const fullSSRRemoteEntry = simpleJoinRemoteEntry(ssrRemoteEntry.path, ssrRemoteEntry.name);
        remoteSnapshot.ssrRemoteEntry = fullSSRRemoteEntry;
        remoteSnapshot.ssrRemoteEntryType = ssrRemoteEntry.type || 'commonjs-module';
    }
    return remoteSnapshot;
}
function isManifestProvider(moduleInfo) {
    if ('remoteEntry' in moduleInfo && moduleInfo.remoteEntry.includes(MANIFEST_EXT)) {
        return true;
    } else {
        return false;
    }
}

const PREFIX = '[ Module Federation ]';
let Logger = class Logger {
    setPrefix(prefix) {
        this.prefix = prefix;
    }
    log(...args) {
        console.log(this.prefix, ...args);
    }
    warn(...args) {
        console.log(this.prefix, ...args);
    }
    error(...args) {
        console.log(this.prefix, ...args);
    }
    success(...args) {
        console.log(this.prefix, ...args);
    }
    info(...args) {
        console.log(this.prefix, ...args);
    }
    ready(...args) {
        console.log(this.prefix, ...args);
    }
    debug(...args) {
        if (isDebugMode()) {
            console.log(this.prefix, ...args);
        }
    }
    constructor(prefix){
        this.prefix = prefix;
    }
};
function createLogger(prefix) {
    return new Logger(prefix);
}
const logger = createLogger(PREFIX);

// eslint-disable-next-line @typescript-eslint/no-explicit-any
async function safeWrapper(callback, disableWarn) {
    try {
        const res = await callback();
        return res;
    } catch (e) {
        !disableWarn && warn(e);
        return;
    }
}
function isStaticResourcesEqual(url1, url2) {
    const REG_EXP = /^(https?:)?\/\//i;
    // Transform url1 and url2 into relative paths
    const relativeUrl1 = url1.replace(REG_EXP, '').replace(/\/$/, '');
    const relativeUrl2 = url2.replace(REG_EXP, '').replace(/\/$/, '');
    // Check if the relative paths are identical
    return relativeUrl1 === relativeUrl2;
}
function createScript(info) {
    // Retrieve the existing script element by its src attribute
    let script = null;
    let needAttach = true;
    let timeout = 20000;
    let timeoutId;
    const scripts = document.getElementsByTagName('script');
    for(let i = 0; i < scripts.length; i++){
        const s = scripts[i];
        const scriptSrc = s.getAttribute('src');
        if (scriptSrc && isStaticResourcesEqual(scriptSrc, info.url)) {
            script = s;
            needAttach = false;
            break;
        }
    }
    if (!script) {
        const attrs = info.attrs;
        script = document.createElement('script');
        script.type = (attrs == null ? void 0 : attrs['type']) === 'module' ? 'module' : 'text/javascript';
        let createScriptRes = undefined;
        if (info.createScriptHook) {
            createScriptRes = info.createScriptHook(info.url, info.attrs);
            if (createScriptRes instanceof HTMLScriptElement) {
                script = createScriptRes;
            } else if (typeof createScriptRes === 'object') {
                if ('script' in createScriptRes && createScriptRes.script) {
                    script = createScriptRes.script;
                }
                if ('timeout' in createScriptRes && createScriptRes.timeout) {
                    timeout = createScriptRes.timeout;
                }
            }
        }
        if (!script.src) {
            script.src = info.url;
        }
        if (attrs && !createScriptRes) {
            Object.keys(attrs).forEach((name)=>{
                if (script) {
                    if (name === 'async' || name === 'defer') {
                        script[name] = attrs[name];
                    // Attributes that do not exist are considered overridden
                    } else if (!script.getAttribute(name)) {
                        script.setAttribute(name, attrs[name]);
                    }
                }
            });
        }
    }
    const onScriptComplete = async (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        clearTimeout(timeoutId);
        const onScriptCompleteCallback = ()=>{
            if ((event == null ? void 0 : event.type) === 'error') {
                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
            } else {
                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
            }
        };
        // Prevent memory leaks in IE.
        if (script) {
            script.onerror = null;
            script.onload = null;
            safeWrapper(()=>{
                const { needDeleteScript = true } = info;
                if (needDeleteScript) {
                    (script == null ? void 0 : script.parentNode) && script.parentNode.removeChild(script);
                }
            });
            if (prev && typeof prev === 'function') {
                const result = prev(event);
                if (result instanceof Promise) {
                    const res = await result;
                    onScriptCompleteCallback();
                    return res;
                }
                onScriptCompleteCallback();
                return result;
            }
        }
        onScriptCompleteCallback();
    };
    script.onerror = onScriptComplete.bind(null, script.onerror);
    script.onload = onScriptComplete.bind(null, script.onload);
    timeoutId = setTimeout(()=>{
        onScriptComplete(null, new Error(`Remote script "${info.url}" time-outed.`));
    }, timeout);
    return {
        script,
        needAttach
    };
}
function createLink(info) {
    // <link rel="preload" href="script.js" as="script">
    // Retrieve the existing script element by its src attribute
    let link = null;
    let needAttach = true;
    const links = document.getElementsByTagName('link');
    for(let i = 0; i < links.length; i++){
        const l = links[i];
        const linkHref = l.getAttribute('href');
        const linkRel = l.getAttribute('rel');
        if (linkHref && isStaticResourcesEqual(linkHref, info.url) && linkRel === info.attrs['rel']) {
            link = l;
            needAttach = false;
            break;
        }
    }
    if (!link) {
        link = document.createElement('link');
        link.setAttribute('href', info.url);
        let createLinkRes = undefined;
        const attrs = info.attrs;
        if (info.createLinkHook) {
            createLinkRes = info.createLinkHook(info.url, attrs);
            if (createLinkRes instanceof HTMLLinkElement) {
                link = createLinkRes;
            }
        }
        if (attrs && !createLinkRes) {
            Object.keys(attrs).forEach((name)=>{
                if (link && !link.getAttribute(name)) {
                    link.setAttribute(name, attrs[name]);
                }
            });
        }
    }
    const onLinkComplete = (prev, // eslint-disable-next-line @typescript-eslint/no-explicit-any
    event)=>{
        const onLinkCompleteCallback = ()=>{
            if ((event == null ? void 0 : event.type) === 'error') {
                (info == null ? void 0 : info.onErrorCallback) && (info == null ? void 0 : info.onErrorCallback(event));
            } else {
                (info == null ? void 0 : info.cb) && (info == null ? void 0 : info.cb());
            }
        };
        // Prevent memory leaks in IE.
        if (link) {
            link.onerror = null;
            link.onload = null;
            safeWrapper(()=>{
                const { needDeleteLink = true } = info;
                if (needDeleteLink) {
                    (link == null ? void 0 : link.parentNode) && link.parentNode.removeChild(link);
                }
            });
            if (prev) {
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                const res = prev(event);
                onLinkCompleteCallback();
                return res;
            }
        }
        onLinkCompleteCallback();
    };
    link.onerror = onLinkComplete.bind(null, link.onerror);
    link.onload = onLinkComplete.bind(null, link.onload);
    return {
        link,
        needAttach
    };
}
function loadScript(url, info) {
    const { attrs = {}, createScriptHook } = info;
    return new Promise((resolve, reject)=>{
        const { script, needAttach } = createScript({
            url,
            cb: resolve,
            onErrorCallback: reject,
            attrs: (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({
                fetchpriority: 'high'
            }, attrs),
            createScriptHook,
            needDeleteScript: true
        });
        needAttach && document.head.appendChild(script);
    });
}

const sdkImportCache = new Map();
function importNodeModule(name) {
    if (!name) {
        throw new Error('import specifier is required');
    }
    // Check cache to prevent infinite recursion
    if (sdkImportCache.has(name)) {
        return sdkImportCache.get(name);
    }
    const importModule = new Function('name', `return import(name)`);
    const promise = importModule(name).then((res)=>res).catch((error)=>{
        console.error(`Error importing module ${name}:`, error);
        // Remove from cache on error so it can be retried
        sdkImportCache.delete(name);
        throw error;
    });
    // Cache the promise to prevent recursive calls
    sdkImportCache.set(name, promise);
    return promise;
}
const loadNodeFetch = async ()=>{
    const fetchModule = await importNodeModule('node-fetch');
    return fetchModule.default || fetchModule;
};
const lazyLoaderHookFetch = async (input, init, loaderHook)=>{
    const hook = (url, init)=>{
        return loaderHook.lifecycle.fetch.emit(url, init);
    };
    const res = await hook(input, init || {});
    if (!res || !(res instanceof Response)) {
        const fetchFunction = typeof fetch === 'undefined' ? await loadNodeFetch() : fetch;
        return fetchFunction(input, init || {});
    }
    return res;
};
const createScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? (url, cb, attrs, loaderHook)=>{
    if (loaderHook == null ? void 0 : loaderHook.createScriptHook) {
        const hookResult = loaderHook.createScriptHook(url);
        if (hookResult && typeof hookResult === 'object' && 'url' in hookResult) {
            url = hookResult.url;
        }
    }
    let urlObj;
    try {
        urlObj = new URL(url);
    } catch (e) {
        console.error('Error constructing URL:', e);
        cb(new Error(`Invalid URL: ${e}`));
        return;
    }
    const getFetch = async ()=>{
        if (loaderHook == null ? void 0 : loaderHook.fetch) {
            return (input, init)=>lazyLoaderHookFetch(input, init, loaderHook);
        }
        return typeof fetch === 'undefined' ? loadNodeFetch() : fetch;
    };
    const handleScriptFetch = async (f, urlObj)=>{
        try {
            var //@ts-ignore
            _vm_constants;
            const res = await f(urlObj.href);
            const data = await res.text();
            const [path, vm] = await Promise.all([
                importNodeModule('path'),
                importNodeModule('vm')
            ]);
            const scriptContext = {
                exports: {},
                module: {
                    exports: {}
                }
            };
            const urlDirname = urlObj.pathname.split('/').slice(0, -1).join('/');
            const filename = path.basename(urlObj.pathname);
            var _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER;
            const script = new vm.Script(`(function(exports, module, require, __dirname, __filename) {${data}\n})`, {
                filename,
                importModuleDynamically: (_vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER = (_vm_constants = vm.constants) == null ? void 0 : _vm_constants.USE_MAIN_CONTEXT_DEFAULT_LOADER) != null ? _vm_constants_USE_MAIN_CONTEXT_DEFAULT_LOADER : importNodeModule
            });
            script.runInThisContext()(scriptContext.exports, scriptContext.module, eval('require'), urlDirname, filename);
            const exportedInterface = scriptContext.module.exports || scriptContext.exports;
            if (attrs && exportedInterface && attrs['globalName']) {
                const container = exportedInterface[attrs['globalName']] || exportedInterface;
                cb(undefined, container);
                return;
            }
            cb(undefined, exportedInterface);
        } catch (e) {
            cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
        }
    };
    getFetch().then(async (f)=>{
        if ((attrs == null ? void 0 : attrs['type']) === 'esm' || (attrs == null ? void 0 : attrs['type']) === 'module') {
            return loadModule(urlObj.href, {
                fetch: f,
                vm: await importNodeModule('vm')
            }).then(async (module)=>{
                await module.evaluate();
                cb(undefined, module.namespace);
            }).catch((e)=>{
                cb(e instanceof Error ? e : new Error(`Script execution error: ${e}`));
            });
        }
        handleScriptFetch(f, urlObj);
    }).catch((err)=>{
        cb(err);
    });
} : (url, cb, attrs, loaderHook)=>{
    cb(new Error('createScriptNode is disabled in non-Node.js environment'));
};
const loadScriptNode = typeof ENV_TARGET === 'undefined' || ENV_TARGET !== 'web' ? (url, info)=>{
    return new Promise((resolve, reject)=>{
        createScriptNode(url, (error, scriptContext)=>{
            if (error) {
                reject(error);
            } else {
                var _info_attrs, _info_attrs1;
                const remoteEntryKey = (info == null ? void 0 : (_info_attrs = info.attrs) == null ? void 0 : _info_attrs['globalName']) || `__FEDERATION_${info == null ? void 0 : (_info_attrs1 = info.attrs) == null ? void 0 : _info_attrs1['name']}:custom__`;
                const entryExports = globalThis[remoteEntryKey] = scriptContext;
                resolve(entryExports);
            }
        }, info.attrs, info.loaderHook);
    });
} : (url, info)=>{
    throw new Error('loadScriptNode is disabled in non-Node.js environment');
};
const esmModuleCache = new Map();
async function loadModule(url, options) {
    // Check cache to prevent infinite recursion in ESM loading
    if (esmModuleCache.has(url)) {
        return esmModuleCache.get(url);
    }
    const { fetch: fetch1, vm } = options;
    const response = await fetch1(url);
    const code = await response.text();
    const module = new vm.SourceTextModule(code, {
        // @ts-ignore
        importModuleDynamically: async (specifier, script)=>{
            const resolvedUrl = new URL(specifier, url).href;
            return loadModule(resolvedUrl, options);
        }
    });
    // Cache the module before linking to prevent cycles
    esmModuleCache.set(url, module);
    await module.link(async (specifier)=>{
        const resolvedUrl = new URL(specifier, url).href;
        const module = await loadModule(resolvedUrl, options);
        return module;
    });
    return module;
}

function normalizeOptions(enableDefault, defaultOptions, key) {
    return function(options) {
        if (options === false) {
            return false;
        }
        if (typeof options === 'undefined') {
            if (enableDefault) {
                return defaultOptions;
            } else {
                return false;
            }
        }
        if (options === true) {
            return defaultOptions;
        }
        if (options && typeof options === 'object') {
            return (0,_polyfills_esm_js__WEBPACK_IMPORTED_MODULE_0__._)({}, defaultOptions, options);
        }
        throw new Error(`Unexpected type for \`${key}\`, expect boolean/undefined/object, got: ${typeof options}`);
    };
}

const createModuleFederationConfig = (options)=>{
    return options;
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/sdk/dist/polyfills.esm.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@module-federation/sdk/dist/polyfills.esm.js ***!
  \*******************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   _: () => (/* binding */ _extends)
/* harmony export */ });
function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}


//# sourceMappingURL=polyfills.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js":
/*!**************************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js ***!
  \**************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   FEDERATION_SUPPORTED_TYPES: () => (/* binding */ FEDERATION_SUPPORTED_TYPES)
/* harmony export */ });
const FEDERATION_SUPPORTED_TYPES = [
    'script'
];


//# sourceMappingURL=constant.esm.js.map


/***/ }),

/***/ "./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js":
/*!***********************************************************************************!*\
  !*** ./node_modules/@module-federation/webpack-bundler-runtime/dist/index.esm.js ***!
  \***********************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ federation)
/* harmony export */ });
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @module-federation/runtime */ "./node_modules/@module-federation/runtime/dist/index.esm.js");
/* harmony import */ var _constant_esm_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./constant.esm.js */ "./node_modules/@module-federation/webpack-bundler-runtime/dist/constant.esm.js");
/* harmony import */ var _module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @module-federation/sdk */ "./node_modules/@module-federation/sdk/dist/index.esm.js");




function attachShareScopeMap(webpackRequire) {
    if (!webpackRequire.S || webpackRequire.federation.hasAttachShareScopeMap || !webpackRequire.federation.instance || !webpackRequire.federation.instance.shareScopeMap) {
        return;
    }
    webpackRequire.S = webpackRequire.federation.instance.shareScopeMap;
    webpackRequire.federation.hasAttachShareScopeMap = true;
}

function remotes(options) {
    const { chunkId, promises, chunkMapping, idToExternalAndNameMapping, webpackRequire, idToRemoteMap } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id)=>{
            let getScope = webpackRequire.R;
            if (!getScope) {
                getScope = [];
            }
            const data = idToExternalAndNameMapping[id];
            const remoteInfos = idToRemoteMap[id];
            // @ts-ignore seems not work
            if (getScope.indexOf(data) >= 0) {
                return;
            }
            // @ts-ignore seems not work
            getScope.push(data);
            if (data.p) {
                return promises.push(data.p);
            }
            const onError = (error)=>{
                if (!error) {
                    error = new Error('Container missing');
                }
                if (typeof error.message === 'string') {
                    error.message += `\nwhile loading "${data[1]}" from ${data[2]}`;
                }
                webpackRequire.m[id] = ()=>{
                    throw error;
                };
                data.p = 0;
            };
            const handleFunction = (fn, arg1, arg2, d, next, first)=>{
                try {
                    const promise = fn(arg1, arg2);
                    if (promise && promise.then) {
                        const p = promise.then((result)=>next(result, d), onError);
                        if (first) {
                            promises.push(data.p = p);
                        } else {
                            return p;
                        }
                    } else {
                        return next(promise, d, first);
                    }
                } catch (error) {
                    onError(error);
                }
            };
            const onExternal = (external, _, first)=>external ? handleFunction(webpackRequire.I, data[0], 0, external, onInitialized, first) : onError();
            // eslint-disable-next-line no-var
            var onInitialized = (_, external, first)=>handleFunction(external.get, data[1], getScope, 0, onFactory, first);
            // eslint-disable-next-line no-var
            var onFactory = (factory)=>{
                data.p = 1;
                webpackRequire.m[id] = (module)=>{
                    module.exports = factory();
                };
            };
            const onRemoteLoaded = ()=>{
                try {
                    const remoteName = (0,_module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__.decodeName)(remoteInfos[0].name, _module_federation_sdk__WEBPACK_IMPORTED_MODULE_2__.ENCODE_NAME_PREFIX);
                    const remoteModuleName = remoteName + data[1].slice(1);
                    const instance = webpackRequire.federation.instance;
                    const loadRemote = ()=>webpackRequire.federation.instance.loadRemote(remoteModuleName, {
                            loadFactory: false,
                            from: 'build'
                        });
                    if (instance.options.shareStrategy === 'version-first') {
                        return Promise.all(instance.sharedHandler.initializeSharing(data[0])).then(()=>{
                            return loadRemote();
                        });
                    }
                    return loadRemote();
                } catch (error) {
                    onError(error);
                }
            };
            const useRuntimeLoad = remoteInfos.length === 1 && _constant_esm_js__WEBPACK_IMPORTED_MODULE_1__.FEDERATION_SUPPORTED_TYPES.includes(remoteInfos[0].externalType) && remoteInfos[0].name;
            if (useRuntimeLoad) {
                handleFunction(onRemoteLoaded, data[2], 0, 0, onFactory, 1);
            } else {
                handleFunction(webpackRequire, data[2], 0, 0, onExternal, 1);
            }
        });
    }
}

function consumes(options) {
    const { chunkId, promises, chunkMapping, installedModules, moduleToHandlerMapping, webpackRequire } = options;
    attachShareScopeMap(webpackRequire);
    if (webpackRequire.o(chunkMapping, chunkId)) {
        chunkMapping[chunkId].forEach((id)=>{
            if (webpackRequire.o(installedModules, id)) {
                return promises.push(installedModules[id]);
            }
            const onFactory = (factory)=>{
                installedModules[id] = 0;
                webpackRequire.m[id] = (module)=>{
                    var _shareInfo_shareConfig;
                    delete webpackRequire.c[id];
                    const result = factory();
                    // Add layer property from shareConfig if available
                    const { shareInfo } = moduleToHandlerMapping[id];
                    if ((shareInfo == null ? void 0 : (_shareInfo_shareConfig = shareInfo.shareConfig) == null ? void 0 : _shareInfo_shareConfig.layer) && result && typeof result === 'object') {
                        try {
                            // Only set layer if it's not already defined or if it's undefined
                            if (!result.hasOwnProperty('layer') || result.layer === undefined) {
                                result.layer = shareInfo.shareConfig.layer;
                            }
                        } catch (e) {
                        // Ignore if layer property is read-only
                        }
                    }
                    module.exports = result;
                };
            };
            const onError = (error)=>{
                delete installedModules[id];
                webpackRequire.m[id] = (module)=>{
                    delete webpackRequire.c[id];
                    throw error;
                };
            };
            try {
                const federationInstance = webpackRequire.federation.instance;
                if (!federationInstance) {
                    throw new Error('Federation instance not found!');
                }
                const { shareKey, getter, shareInfo } = moduleToHandlerMapping[id];
                const promise = federationInstance.loadShare(shareKey, {
                    customShareInfo: shareInfo
                }).then((factory)=>{
                    if (factory === false) {
                        return getter();
                    }
                    return factory;
                });
                if (promise.then) {
                    promises.push(installedModules[id] = promise.then(onFactory).catch(onError));
                } else {
                    // @ts-ignore maintain previous logic
                    onFactory(promise);
                }
            } catch (e) {
                onError(e);
            }
        });
    }
}

function initializeSharing({ shareScopeName, webpackRequire, initPromises, initTokens, initScope }) {
    const shareScopeKeys = Array.isArray(shareScopeName) ? shareScopeName : [
        shareScopeName
    ];
    var initializeSharingPromises = [];
    var _initializeSharing = function(shareScopeKey) {
        if (!initScope) initScope = [];
        const mfInstance = webpackRequire.federation.instance;
        // handling circular init calls
        var initToken = initTokens[shareScopeKey];
        if (!initToken) initToken = initTokens[shareScopeKey] = {
            from: mfInstance.name
        };
        if (initScope.indexOf(initToken) >= 0) return;
        initScope.push(initToken);
        const promise = initPromises[shareScopeKey];
        if (promise) return promise;
        var warn = (msg)=>typeof console !== 'undefined' && console.warn && console.warn(msg);
        var initExternal = (id)=>{
            var handleError = (err)=>warn('Initialization of sharing external failed: ' + err);
            try {
                var module = webpackRequire(id);
                if (!module) return;
                var initFn = (module)=>module && module.init && // @ts-ignore compat legacy mf shared behavior
                    module.init(webpackRequire.S[shareScopeKey], initScope, {
                        shareScopeMap: webpackRequire.S || {},
                        shareScopeKeys: shareScopeName
                    });
                if (module.then) return promises.push(module.then(initFn, handleError));
                var initResult = initFn(module);
                // @ts-ignore
                if (initResult && typeof initResult !== 'boolean' && initResult.then) // @ts-ignore
                return promises.push(initResult['catch'](handleError));
            } catch (err) {
                handleError(err);
            }
        };
        const promises = mfInstance.initializeSharing(shareScopeKey, {
            strategy: mfInstance.options.shareStrategy,
            initScope,
            from: 'build'
        });
        attachShareScopeMap(webpackRequire);
        const bundlerRuntimeRemotesOptions = webpackRequire.federation.bundlerRuntimeOptions.remotes;
        if (bundlerRuntimeRemotesOptions) {
            Object.keys(bundlerRuntimeRemotesOptions.idToRemoteMap).forEach((moduleId)=>{
                const info = bundlerRuntimeRemotesOptions.idToRemoteMap[moduleId];
                const externalModuleId = bundlerRuntimeRemotesOptions.idToExternalAndNameMapping[moduleId][2];
                if (info.length > 1) {
                    initExternal(externalModuleId);
                } else if (info.length === 1) {
                    const remoteInfo = info[0];
                    if (!_constant_esm_js__WEBPACK_IMPORTED_MODULE_1__.FEDERATION_SUPPORTED_TYPES.includes(remoteInfo.externalType)) {
                        initExternal(externalModuleId);
                    }
                }
            });
        }
        if (!promises.length) {
            return initPromises[shareScopeKey] = true;
        }
        return initPromises[shareScopeKey] = Promise.all(promises).then(()=>initPromises[shareScopeKey] = true);
    };
    shareScopeKeys.forEach((key)=>{
        initializeSharingPromises.push(_initializeSharing(key));
    });
    return Promise.all(initializeSharingPromises).then(()=>true);
}

function handleInitialConsumes(options) {
    const { moduleId, moduleToHandlerMapping, webpackRequire } = options;
    const federationInstance = webpackRequire.federation.instance;
    if (!federationInstance) {
        throw new Error('Federation instance not found!');
    }
    const { shareKey, shareInfo } = moduleToHandlerMapping[moduleId];
    try {
        return federationInstance.loadShareSync(shareKey, {
            customShareInfo: shareInfo
        });
    } catch (err) {
        console.error('loadShareSync failed! The function should not be called unless you set "eager:true". If you do not set it, and encounter this issue, you can check whether an async boundary is implemented.');
        console.error('The original error message is as follows: ');
        throw err;
    }
}
function installInitialConsumes(options) {
    const { moduleToHandlerMapping, webpackRequire, installedModules, initialConsumes } = options;
    initialConsumes.forEach((id)=>{
        webpackRequire.m[id] = (module)=>{
            var _shareInfo_shareConfig;
            // Handle scenario when module is used synchronously
            installedModules[id] = 0;
            delete webpackRequire.c[id];
            const factory = handleInitialConsumes({
                moduleId: id,
                moduleToHandlerMapping,
                webpackRequire
            });
            if (typeof factory !== 'function') {
                throw new Error(`Shared module is not available for eager consumption: ${id}`);
            }
            const result = factory();
            // Add layer property from shareConfig if available
            const { shareInfo } = moduleToHandlerMapping[id];
            if ((shareInfo == null ? void 0 : (_shareInfo_shareConfig = shareInfo.shareConfig) == null ? void 0 : _shareInfo_shareConfig.layer) && result && typeof result === 'object') {
                try {
                    // Only set layer if it's not already defined or if it's undefined
                    if (!result.hasOwnProperty('layer') || result.layer === undefined) {
                        result.layer = shareInfo.shareConfig.layer;
                    }
                } catch (e) {
                // Ignore if layer property is read-only
                }
            }
            module.exports = result;
        };
    });
}

function _extends() {
    _extends = Object.assign || function assign(target) {
        for(var i = 1; i < arguments.length; i++){
            var source = arguments[i];
            for(var key in source)if (Object.prototype.hasOwnProperty.call(source, key)) target[key] = source[key];
        }
        return target;
    };
    return _extends.apply(this, arguments);
}

function initContainerEntry(options) {
    const { webpackRequire, shareScope, initScope, shareScopeKey, remoteEntryInitOptions } = options;
    if (!webpackRequire.S) return;
    if (!webpackRequire.federation || !webpackRequire.federation.instance || !webpackRequire.federation.initOptions) return;
    const federationInstance = webpackRequire.federation.instance;
    federationInstance.initOptions(_extends({
        name: webpackRequire.federation.initOptions.name,
        remotes: []
    }, remoteEntryInitOptions));
    const hostShareScopeKeys = remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeKeys;
    const hostShareScopeMap = remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap;
    // host: 'default' remote: 'default'  remote['default'] = hostShareScopeMap['default']
    // host: ['default', 'scope1'] remote: 'default'  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scop1']
    // host: 'default' remote: ['default','scope1']  remote['default'] = hostShareScopeMap['default']; remote['scope1'] = hostShareScopeMap['scope1'] = {}
    // host: ['scope1','default'] remote: ['scope1','scope2'] => remote['scope1'] = hostShareScopeMap['scope1']; remote['scope2'] = hostShareScopeMap['scope2'] = {};
    if (!shareScopeKey || typeof shareScopeKey === 'string') {
        const key = shareScopeKey || 'default';
        if (Array.isArray(hostShareScopeKeys)) {
            // const sc = hostShareScopeMap![key];
            // if (!sc) {
            //   throw new Error('shareScopeKey is not exist in hostShareScopeMap');
            // }
            // federationInstance.initShareScopeMap(key, sc, {
            //   hostShareScopeMap: remoteEntryInitOptions?.shareScopeMap || {},
            // });
            hostShareScopeKeys.forEach((hostKey)=>{
                if (!hostShareScopeMap[hostKey]) {
                    hostShareScopeMap[hostKey] = {};
                }
                const sc = hostShareScopeMap[hostKey];
                federationInstance.initShareScopeMap(hostKey, sc, {
                    hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
                });
            });
        } else {
            federationInstance.initShareScopeMap(key, shareScope, {
                hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
            });
        }
    } else {
        shareScopeKey.forEach((key)=>{
            if (!hostShareScopeKeys || !hostShareScopeMap) {
                federationInstance.initShareScopeMap(key, shareScope, {
                    hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
                });
                return;
            }
            if (!hostShareScopeMap[key]) {
                hostShareScopeMap[key] = {};
            }
            const sc = hostShareScopeMap[key];
            federationInstance.initShareScopeMap(key, sc, {
                hostShareScopeMap: (remoteEntryInitOptions == null ? void 0 : remoteEntryInitOptions.shareScopeMap) || {}
            });
        });
    }
    if (webpackRequire.federation.attachShareScopeMap) {
        webpackRequire.federation.attachShareScopeMap(webpackRequire);
    }
    if (typeof webpackRequire.federation.prefetch === 'function') {
        webpackRequire.federation.prefetch();
    }
    if (!Array.isArray(shareScopeKey)) {
        // @ts-ignore
        return webpackRequire.I(shareScopeKey || 'default', initScope);
    }
    var proxyInitializeSharing = Boolean(webpackRequire.federation.initOptions.shared);
    if (proxyInitializeSharing) {
        // @ts-ignore
        return webpackRequire.I(shareScopeKey, initScope);
    }
    // @ts-ignore
    return Promise.all(shareScopeKey.map((key)=>{
        // @ts-ignore
        return webpackRequire.I(key, initScope);
    })).then(()=>true);
}

const federation = {
    runtime: _module_federation_runtime__WEBPACK_IMPORTED_MODULE_0__,
    instance: undefined,
    initOptions: undefined,
    bundlerRuntime: {
        remotes,
        consumes,
        I: initializeSharing,
        S: {},
        installInitialConsumes,
        initContainerEntry
    },
    attachShareScopeMap,
    bundlerRuntimeOptions: {}
};


//# sourceMappingURL=index.esm.js.map


/***/ }),

/***/ "./node_modules/ansi-html-community/index.js":
/*!***************************************************!*\
  !*** ./node_modules/ansi-html-community/index.js ***!
  \***************************************************/
/***/ ((module) => {

"use strict";


module.exports = ansiHTML

// Reference to https://github.com/sindresorhus/ansi-regex
var _regANSI = /(?:(?:\u001b\[)|\u009b)(?:(?:[0-9]{1,3})?(?:(?:;[0-9]{0,3})*)?[A-M|f-m])|\u001b[A-M]/

var _defColors = {
  reset: ['fff', '000'], // [FOREGROUD_COLOR, BACKGROUND_COLOR]
  black: '000',
  red: 'ff0000',
  green: '209805',
  yellow: 'e8bf03',
  blue: '0000ff',
  magenta: 'ff00ff',
  cyan: '00ffee',
  lightgrey: 'f0f0f0',
  darkgrey: '888'
}
var _styles = {
  30: 'black',
  31: 'red',
  32: 'green',
  33: 'yellow',
  34: 'blue',
  35: 'magenta',
  36: 'cyan',
  37: 'lightgrey'
}
var _openTags = {
  '1': 'font-weight:bold', // bold
  '2': 'opacity:0.5', // dim
  '3': '<i>', // italic
  '4': '<u>', // underscore
  '8': 'display:none', // hidden
  '9': '<del>' // delete
}
var _closeTags = {
  '23': '</i>', // reset italic
  '24': '</u>', // reset underscore
  '29': '</del>' // reset delete
}

;[0, 21, 22, 27, 28, 39, 49].forEach(function (n) {
  _closeTags[n] = '</span>'
})

/**
 * Converts text with ANSI color codes to HTML markup.
 * @param {String} text
 * @returns {*}
 */
function ansiHTML (text) {
  // Returns the text if the string has no ANSI escape code.
  if (!_regANSI.test(text)) {
    return text
  }

  // Cache opened sequence.
  var ansiCodes = []
  // Replace with markup.
  var ret = text.replace(/\033\[(\d+)m/g, function (match, seq) {
    var ot = _openTags[seq]
    if (ot) {
      // If current sequence has been opened, close it.
      if (!!~ansiCodes.indexOf(seq)) { // eslint-disable-line no-extra-boolean-cast
        ansiCodes.pop()
        return '</span>'
      }
      // Open tag.
      ansiCodes.push(seq)
      return ot[0] === '<' ? ot : '<span style="' + ot + ';">'
    }

    var ct = _closeTags[seq]
    if (ct) {
      // Pop sequence
      ansiCodes.pop()
      return ct
    }
    return ''
  })

  // Make sure tags are closed.
  var l = ansiCodes.length
  ;(l > 0) && (ret += Array(l + 1).join('</span>'))

  return ret
}

/**
 * Customize colors.
 * @param {Object} colors reference to _defColors
 */
ansiHTML.setColors = function (colors) {
  if (typeof colors !== 'object') {
    throw new Error('`colors` parameter must be an Object.')
  }

  var _finalColors = {}
  for (var key in _defColors) {
    var hex = colors.hasOwnProperty(key) ? colors[key] : null
    if (!hex) {
      _finalColors[key] = _defColors[key]
      continue
    }
    if ('reset' === key) {
      if (typeof hex === 'string') {
        hex = [hex]
      }
      if (!Array.isArray(hex) || hex.length === 0 || hex.some(function (h) {
        return typeof h !== 'string'
      })) {
        throw new Error('The value of `' + key + '` property must be an Array and each item could only be a hex string, e.g.: FF0000')
      }
      var defHexColor = _defColors[key]
      if (!hex[0]) {
        hex[0] = defHexColor[0]
      }
      if (hex.length === 1 || !hex[1]) {
        hex = [hex[0]]
        hex.push(defHexColor[1])
      }

      hex = hex.slice(0, 2)
    } else if (typeof hex !== 'string') {
      throw new Error('The value of `' + key + '` property must be a hex string, e.g.: FF0000')
    }
    _finalColors[key] = hex
  }
  _setTags(_finalColors)
}

/**
 * Reset colors.
 */
ansiHTML.reset = function () {
  _setTags(_defColors)
}

/**
 * Expose tags, including open and close.
 * @type {Object}
 */
ansiHTML.tags = {}

if (Object.defineProperty) {
  Object.defineProperty(ansiHTML.tags, 'open', {
    get: function () { return _openTags }
  })
  Object.defineProperty(ansiHTML.tags, 'close', {
    get: function () { return _closeTags }
  })
} else {
  ansiHTML.tags.open = _openTags
  ansiHTML.tags.close = _closeTags
}

function _setTags (colors) {
  // reset all
  _openTags['0'] = 'font-weight:normal;opacity:1;color:#' + colors.reset[0] + ';background:#' + colors.reset[1]
  // inverse
  _openTags['7'] = 'color:#' + colors.reset[1] + ';background:#' + colors.reset[0]
  // dark grey
  _openTags['90'] = 'color:#' + colors.darkgrey

  for (var code in _styles) {
    var color = _styles[code]
    var oriColor = colors[color] || '000'
    _openTags[code] = 'color:#' + oriColor
    code = parseInt(code)
    _openTags[(code + 10).toString()] = 'background:#' + oriColor
  }
}

ansiHTML.reset()


/***/ }),

/***/ "./node_modules/events/events.js":
/*!***************************************!*\
  !*** ./node_modules/events/events.js ***!
  \***************************************/
/***/ ((module) => {

"use strict";
// Copyright Joyent, Inc. and other Node contributors.
//
// Permission is hereby granted, free of charge, to any person obtaining a
// copy of this software and associated documentation files (the
// "Software"), to deal in the Software without restriction, including
// without limitation the rights to use, copy, modify, merge, publish,
// distribute, sublicense, and/or sell copies of the Software, and to permit
// persons to whom the Software is furnished to do so, subject to the
// following conditions:
//
// The above copyright notice and this permission notice shall be included
// in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS
// OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
// MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN
// NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM,
// DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR
// OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE
// USE OR OTHER DEALINGS IN THE SOFTWARE.



var R = typeof Reflect === 'object' ? Reflect : null
var ReflectApply = R && typeof R.apply === 'function'
  ? R.apply
  : function ReflectApply(target, receiver, args) {
    return Function.prototype.apply.call(target, receiver, args);
  }

var ReflectOwnKeys
if (R && typeof R.ownKeys === 'function') {
  ReflectOwnKeys = R.ownKeys
} else if (Object.getOwnPropertySymbols) {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target)
      .concat(Object.getOwnPropertySymbols(target));
  };
} else {
  ReflectOwnKeys = function ReflectOwnKeys(target) {
    return Object.getOwnPropertyNames(target);
  };
}

function ProcessEmitWarning(warning) {
  if (console && console.warn) console.warn(warning);
}

var NumberIsNaN = Number.isNaN || function NumberIsNaN(value) {
  return value !== value;
}

function EventEmitter() {
  EventEmitter.init.call(this);
}
module.exports = EventEmitter;
module.exports.once = once;

// Backwards-compat with node 0.10.x
EventEmitter.EventEmitter = EventEmitter;

EventEmitter.prototype._events = undefined;
EventEmitter.prototype._eventsCount = 0;
EventEmitter.prototype._maxListeners = undefined;

// By default EventEmitters will print a warning if more than 10 listeners are
// added to it. This is a useful default which helps finding memory leaks.
var defaultMaxListeners = 10;

function checkListener(listener) {
  if (typeof listener !== 'function') {
    throw new TypeError('The "listener" argument must be of type Function. Received type ' + typeof listener);
  }
}

Object.defineProperty(EventEmitter, 'defaultMaxListeners', {
  enumerable: true,
  get: function() {
    return defaultMaxListeners;
  },
  set: function(arg) {
    if (typeof arg !== 'number' || arg < 0 || NumberIsNaN(arg)) {
      throw new RangeError('The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' + arg + '.');
    }
    defaultMaxListeners = arg;
  }
});

EventEmitter.init = function() {

  if (this._events === undefined ||
      this._events === Object.getPrototypeOf(this)._events) {
    this._events = Object.create(null);
    this._eventsCount = 0;
  }

  this._maxListeners = this._maxListeners || undefined;
};

// Obviously not all Emitters should be limited to 10. This function allows
// that to be increased. Set to zero for unlimited.
EventEmitter.prototype.setMaxListeners = function setMaxListeners(n) {
  if (typeof n !== 'number' || n < 0 || NumberIsNaN(n)) {
    throw new RangeError('The value of "n" is out of range. It must be a non-negative number. Received ' + n + '.');
  }
  this._maxListeners = n;
  return this;
};

function _getMaxListeners(that) {
  if (that._maxListeners === undefined)
    return EventEmitter.defaultMaxListeners;
  return that._maxListeners;
}

EventEmitter.prototype.getMaxListeners = function getMaxListeners() {
  return _getMaxListeners(this);
};

EventEmitter.prototype.emit = function emit(type) {
  var args = [];
  for (var i = 1; i < arguments.length; i++) args.push(arguments[i]);
  var doError = (type === 'error');

  var events = this._events;
  if (events !== undefined)
    doError = (doError && events.error === undefined);
  else if (!doError)
    return false;

  // If there is no 'error' event listener then throw.
  if (doError) {
    var er;
    if (args.length > 0)
      er = args[0];
    if (er instanceof Error) {
      // Note: The comments on the `throw` lines are intentional, they show
      // up in Node's output if this results in an unhandled exception.
      throw er; // Unhandled 'error' event
    }
    // At least give some kind of context to the user
    var err = new Error('Unhandled error.' + (er ? ' (' + er.message + ')' : ''));
    err.context = er;
    throw err; // Unhandled 'error' event
  }

  var handler = events[type];

  if (handler === undefined)
    return false;

  if (typeof handler === 'function') {
    ReflectApply(handler, this, args);
  } else {
    var len = handler.length;
    var listeners = arrayClone(handler, len);
    for (var i = 0; i < len; ++i)
      ReflectApply(listeners[i], this, args);
  }

  return true;
};

function _addListener(target, type, listener, prepend) {
  var m;
  var events;
  var existing;

  checkListener(listener);

  events = target._events;
  if (events === undefined) {
    events = target._events = Object.create(null);
    target._eventsCount = 0;
  } else {
    // To avoid recursion in the case that type === "newListener"! Before
    // adding it to the listeners, first emit "newListener".
    if (events.newListener !== undefined) {
      target.emit('newListener', type,
                  listener.listener ? listener.listener : listener);

      // Re-assign `events` because a newListener handler could have caused the
      // this._events to be assigned to a new object
      events = target._events;
    }
    existing = events[type];
  }

  if (existing === undefined) {
    // Optimize the case of one listener. Don't need the extra array object.
    existing = events[type] = listener;
    ++target._eventsCount;
  } else {
    if (typeof existing === 'function') {
      // Adding the second element, need to change to array.
      existing = events[type] =
        prepend ? [listener, existing] : [existing, listener];
      // If we've already got an array, just append.
    } else if (prepend) {
      existing.unshift(listener);
    } else {
      existing.push(listener);
    }

    // Check for listener leak
    m = _getMaxListeners(target);
    if (m > 0 && existing.length > m && !existing.warned) {
      existing.warned = true;
      // No error code for this since it is a Warning
      // eslint-disable-next-line no-restricted-syntax
      var w = new Error('Possible EventEmitter memory leak detected. ' +
                          existing.length + ' ' + String(type) + ' listeners ' +
                          'added. Use emitter.setMaxListeners() to ' +
                          'increase limit');
      w.name = 'MaxListenersExceededWarning';
      w.emitter = target;
      w.type = type;
      w.count = existing.length;
      ProcessEmitWarning(w);
    }
  }

  return target;
}

EventEmitter.prototype.addListener = function addListener(type, listener) {
  return _addListener(this, type, listener, false);
};

EventEmitter.prototype.on = EventEmitter.prototype.addListener;

EventEmitter.prototype.prependListener =
    function prependListener(type, listener) {
      return _addListener(this, type, listener, true);
    };

function onceWrapper() {
  if (!this.fired) {
    this.target.removeListener(this.type, this.wrapFn);
    this.fired = true;
    if (arguments.length === 0)
      return this.listener.call(this.target);
    return this.listener.apply(this.target, arguments);
  }
}

function _onceWrap(target, type, listener) {
  var state = { fired: false, wrapFn: undefined, target: target, type: type, listener: listener };
  var wrapped = onceWrapper.bind(state);
  wrapped.listener = listener;
  state.wrapFn = wrapped;
  return wrapped;
}

EventEmitter.prototype.once = function once(type, listener) {
  checkListener(listener);
  this.on(type, _onceWrap(this, type, listener));
  return this;
};

EventEmitter.prototype.prependOnceListener =
    function prependOnceListener(type, listener) {
      checkListener(listener);
      this.prependListener(type, _onceWrap(this, type, listener));
      return this;
    };

// Emits a 'removeListener' event if and only if the listener was removed.
EventEmitter.prototype.removeListener =
    function removeListener(type, listener) {
      var list, events, position, i, originalListener;

      checkListener(listener);

      events = this._events;
      if (events === undefined)
        return this;

      list = events[type];
      if (list === undefined)
        return this;

      if (list === listener || list.listener === listener) {
        if (--this._eventsCount === 0)
          this._events = Object.create(null);
        else {
          delete events[type];
          if (events.removeListener)
            this.emit('removeListener', type, list.listener || listener);
        }
      } else if (typeof list !== 'function') {
        position = -1;

        for (i = list.length - 1; i >= 0; i--) {
          if (list[i] === listener || list[i].listener === listener) {
            originalListener = list[i].listener;
            position = i;
            break;
          }
        }

        if (position < 0)
          return this;

        if (position === 0)
          list.shift();
        else {
          spliceOne(list, position);
        }

        if (list.length === 1)
          events[type] = list[0];

        if (events.removeListener !== undefined)
          this.emit('removeListener', type, originalListener || listener);
      }

      return this;
    };

EventEmitter.prototype.off = EventEmitter.prototype.removeListener;

EventEmitter.prototype.removeAllListeners =
    function removeAllListeners(type) {
      var listeners, events, i;

      events = this._events;
      if (events === undefined)
        return this;

      // not listening for removeListener, no need to emit
      if (events.removeListener === undefined) {
        if (arguments.length === 0) {
          this._events = Object.create(null);
          this._eventsCount = 0;
        } else if (events[type] !== undefined) {
          if (--this._eventsCount === 0)
            this._events = Object.create(null);
          else
            delete events[type];
        }
        return this;
      }

      // emit removeListener for all listeners on all events
      if (arguments.length === 0) {
        var keys = Object.keys(events);
        var key;
        for (i = 0; i < keys.length; ++i) {
          key = keys[i];
          if (key === 'removeListener') continue;
          this.removeAllListeners(key);
        }
        this.removeAllListeners('removeListener');
        this._events = Object.create(null);
        this._eventsCount = 0;
        return this;
      }

      listeners = events[type];

      if (typeof listeners === 'function') {
        this.removeListener(type, listeners);
      } else if (listeners !== undefined) {
        // LIFO order
        for (i = listeners.length - 1; i >= 0; i--) {
          this.removeListener(type, listeners[i]);
        }
      }

      return this;
    };

function _listeners(target, type, unwrap) {
  var events = target._events;

  if (events === undefined)
    return [];

  var evlistener = events[type];
  if (evlistener === undefined)
    return [];

  if (typeof evlistener === 'function')
    return unwrap ? [evlistener.listener || evlistener] : [evlistener];

  return unwrap ?
    unwrapListeners(evlistener) : arrayClone(evlistener, evlistener.length);
}

EventEmitter.prototype.listeners = function listeners(type) {
  return _listeners(this, type, true);
};

EventEmitter.prototype.rawListeners = function rawListeners(type) {
  return _listeners(this, type, false);
};

EventEmitter.listenerCount = function(emitter, type) {
  if (typeof emitter.listenerCount === 'function') {
    return emitter.listenerCount(type);
  } else {
    return listenerCount.call(emitter, type);
  }
};

EventEmitter.prototype.listenerCount = listenerCount;
function listenerCount(type) {
  var events = this._events;

  if (events !== undefined) {
    var evlistener = events[type];

    if (typeof evlistener === 'function') {
      return 1;
    } else if (evlistener !== undefined) {
      return evlistener.length;
    }
  }

  return 0;
}

EventEmitter.prototype.eventNames = function eventNames() {
  return this._eventsCount > 0 ? ReflectOwnKeys(this._events) : [];
};

function arrayClone(arr, n) {
  var copy = new Array(n);
  for (var i = 0; i < n; ++i)
    copy[i] = arr[i];
  return copy;
}

function spliceOne(list, index) {
  for (; index + 1 < list.length; index++)
    list[index] = list[index + 1];
  list.pop();
}

function unwrapListeners(arr) {
  var ret = new Array(arr.length);
  for (var i = 0; i < ret.length; ++i) {
    ret[i] = arr[i].listener || arr[i];
  }
  return ret;
}

function once(emitter, name) {
  return new Promise(function (resolve, reject) {
    function errorListener(err) {
      emitter.removeListener(name, resolver);
      reject(err);
    }

    function resolver() {
      if (typeof emitter.removeListener === 'function') {
        emitter.removeListener('error', errorListener);
      }
      resolve([].slice.call(arguments));
    };

    eventTargetAgnosticAddListener(emitter, name, resolver, { once: true });
    if (name !== 'error') {
      addErrorHandlerIfEventEmitter(emitter, errorListener, { once: true });
    }
  });
}

function addErrorHandlerIfEventEmitter(emitter, handler, flags) {
  if (typeof emitter.on === 'function') {
    eventTargetAgnosticAddListener(emitter, 'error', handler, flags);
  }
}

function eventTargetAgnosticAddListener(emitter, name, listener, flags) {
  if (typeof emitter.on === 'function') {
    if (flags.once) {
      emitter.once(name, listener);
    } else {
      emitter.on(name, listener);
    }
  } else if (typeof emitter.addEventListener === 'function') {
    // EventTarget does not have `error` event semantics like Node
    // EventEmitters, we do not listen for `error` events here.
    emitter.addEventListener(name, function wrapListener(arg) {
      // IE does not have builtin `{ once: true }` support so we
      // have to do it manually.
      if (flags.once) {
        emitter.removeEventListener(name, wrapListener);
      }
      listener(arg);
    });
  } else {
    throw new TypeError('The "emitter" argument must be of type EventEmitter. Received type ' + typeof emitter);
  }
}


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js":
/*!***************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js ***!
  \***************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ WebSocketClient)
/* harmony export */ });
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }

var WebSocketClient = /*#__PURE__*/function () {
  /**
   * @param {string} url
   */
  function WebSocketClient(url) {
    _classCallCheck(this, WebSocketClient);
    this.client = new WebSocket(url);
    this.client.onerror = function (error) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_0__.log.error(error);
    };
  }

  /**
   * @param {(...args: any[]) => void} f
   */
  return _createClass(WebSocketClient, [{
    key: "onOpen",
    value: function onOpen(f) {
      this.client.onopen = f;
    }

    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onClose",
    value: function onClose(f) {
      this.client.onclose = f;
    }

    // call f with the message string as the first argument
    /**
     * @param {(...args: any[]) => void} f
     */
  }, {
    key: "onMessage",
    value: function onMessage(f) {
      this.client.onmessage = function (e) {
        f(e.data);
      };
    }
  }]);
}();


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=5006&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=5006&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=5006&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createSocketURL: () => (/* binding */ createSocketURL),
/* harmony export */   getCurrentScriptSource: () => (/* binding */ getCurrentScriptSource),
/* harmony export */   parseURL: () => (/* binding */ parseURL)
/* harmony export */ });
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! webpack/hot/log.js */ "./node_modules/webpack/hot/log.js");
/* harmony import */ var webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! webpack/hot/emitter.js */ "./node_modules/webpack/hot/emitter.js");
/* harmony import */ var webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _socket_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./socket.js */ "./node_modules/webpack-dev-server/client/socket.js");
/* harmony import */ var _overlay_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./overlay.js */ "./node_modules/webpack-dev-server/client/overlay.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* harmony import */ var _utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./utils/sendMessage.js */ "./node_modules/webpack-dev-server/client/utils/sendMessage.js");
/* harmony import */ var _progress_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./progress.js */ "./node_modules/webpack-dev-server/client/progress.js");
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
/* global __resourceQuery, __webpack_hash__ */
/// <reference types="webpack/module" />








/**
 * @typedef {Object} OverlayOptions
 * @property {boolean | (error: Error) => boolean} [warnings]
 * @property {boolean | (error: Error) => boolean} [errors]
 * @property {boolean | (error: Error) => boolean} [runtimeErrors]
 * @property {string} [trustedTypesPolicyName]
 */

/**
 * @typedef {Object} Options
 * @property {boolean} hot
 * @property {boolean} liveReload
 * @property {boolean} progress
 * @property {boolean | OverlayOptions} overlay
 * @property {string} [logging]
 * @property {number} [reconnect]
 */

/**
 * @typedef {Object} Status
 * @property {boolean} isUnloading
 * @property {string} currentHash
 * @property {string} [previousHash]
 */

/**
 * @param {boolean | { warnings?: boolean | string; errors?: boolean | string; runtimeErrors?: boolean | string; }} overlayOptions
 */
var decodeOverlayOptions = function decodeOverlayOptions(overlayOptions) {
  if (_typeof(overlayOptions) === "object") {
    ["warnings", "errors", "runtimeErrors"].forEach(function (property) {
      if (typeof overlayOptions[property] === "string") {
        var overlayFilterFunctionString = decodeURIComponent(overlayOptions[property]);

        // eslint-disable-next-line no-new-func
        overlayOptions[property] = new Function("message", "var callback = ".concat(overlayFilterFunctionString, "\n        return callback(message)"));
      }
    });
  }
};

/**
 * @type {Status}
 */
var status = {
  isUnloading: false,
  // eslint-disable-next-line camelcase
  currentHash: __webpack_require__.h()
};

/**
 * @returns {string}
 */
var getCurrentScriptSource = function getCurrentScriptSource() {
  // `document.currentScript` is the most accurate way to find the current script,
  // but is not supported in all browsers.
  if (document.currentScript) {
    return document.currentScript.getAttribute("src");
  }

  // Fallback to getting all scripts running in the document.
  var scriptElements = document.scripts || [];
  var scriptElementsWithSrc = Array.prototype.filter.call(scriptElements, function (element) {
    return element.getAttribute("src");
  });
  if (scriptElementsWithSrc.length > 0) {
    var currentScript = scriptElementsWithSrc[scriptElementsWithSrc.length - 1];
    return currentScript.getAttribute("src");
  }

  // Fail as there was no script to use.
  throw new Error("[webpack-dev-server] Failed to get current script source.");
};

/**
 * @param {string} resourceQuery
 * @returns {{ [key: string]: string | boolean }}
 */
var parseURL = function parseURL(resourceQuery) {
  /** @type {{ [key: string]: string }} */
  var result = {};
  if (typeof resourceQuery === "string" && resourceQuery !== "") {
    var searchParams = resourceQuery.slice(1).split("&");
    for (var i = 0; i < searchParams.length; i++) {
      var pair = searchParams[i].split("=");
      result[pair[0]] = decodeURIComponent(pair[1]);
    }
  } else {
    // Else, get the url from the <script> this file was called with.
    var scriptSource = getCurrentScriptSource();
    var scriptSourceURL;
    try {
      // The placeholder `baseURL` with `window.location.href`,
      // is to allow parsing of path-relative or protocol-relative URLs,
      // and will have no effect if `scriptSource` is a fully valid URL.
      scriptSourceURL = new URL(scriptSource, self.location.href);
    } catch (error) {
      // URL parsing failed, do nothing.
      // We will still proceed to see if we can recover using `resourceQuery`
    }
    if (scriptSourceURL) {
      result = scriptSourceURL;
      result.fromCurrentScript = true;
    }
  }
  return result;
};
var parsedResourceQuery = parseURL(__resourceQuery);
var enabledFeatures = {
  "Hot Module Replacement": false,
  "Live Reloading": false,
  Progress: false,
  Overlay: false
};

/** @type {Options} */
var options = {
  hot: false,
  liveReload: false,
  progress: false,
  overlay: false
};
if (parsedResourceQuery.hot === "true") {
  options.hot = true;
  enabledFeatures["Hot Module Replacement"] = true;
}
if (parsedResourceQuery["live-reload"] === "true") {
  options.liveReload = true;
  enabledFeatures["Live Reloading"] = true;
}
if (parsedResourceQuery.progress === "true") {
  options.progress = true;
  enabledFeatures.Progress = true;
}
if (parsedResourceQuery.overlay) {
  try {
    options.overlay = JSON.parse(parsedResourceQuery.overlay);
  } catch (e) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error("Error parsing overlay options from resource query:", e);
  }

  // Fill in default "true" params for partially-specified objects.
  if (_typeof(options.overlay) === "object") {
    options.overlay = _objectSpread({
      errors: true,
      warnings: true,
      runtimeErrors: true
    }, options.overlay);
    decodeOverlayOptions(options.overlay);
  }
  enabledFeatures.Overlay = options.overlay !== false;
}
if (parsedResourceQuery.logging) {
  options.logging = parsedResourceQuery.logging;
}
if (typeof parsedResourceQuery.reconnect !== "undefined") {
  options.reconnect = Number(parsedResourceQuery.reconnect);
}

/**
 * @param {string} level
 */
var setAllLogLevel = function setAllLogLevel(level) {
  // This is needed because the HMR logger operate separately from dev server logger
  webpack_hot_log_js__WEBPACK_IMPORTED_MODULE_0___default().setLogLevel(level === "verbose" || level === "log" ? "info" : level);
  (0,_utils_log_js__WEBPACK_IMPORTED_MODULE_4__.setLogLevel)(level);
};
if (options.logging) {
  setAllLogLevel(options.logging);
}
var logEnabledFeatures = function logEnabledFeatures(features) {
  var listEnabledFeatures = Object.keys(features);
  if (!features || listEnabledFeatures.length === 0) {
    return;
  }
  var logString = "Server started:";

  // Server started: Hot Module Replacement enabled, Live Reloading enabled, Overlay disabled.
  for (var i = 0; i < listEnabledFeatures.length; i++) {
    var key = listEnabledFeatures[i];
    logString += " ".concat(key, " ").concat(features[key] ? "enabled" : "disabled", ",");
  }
  // replace last comma with a period
  logString = logString.slice(0, -1).concat(".");
  _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info(logString);
};
logEnabledFeatures(enabledFeatures);
self.addEventListener("beforeunload", function () {
  status.isUnloading = true;
});
var overlay = typeof window !== "undefined" ? (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.createOverlay)(_typeof(options.overlay) === "object" ? {
  trustedTypesPolicyName: options.overlay.trustedTypesPolicyName,
  catchRuntimeError: options.overlay.runtimeErrors
} : {
  trustedTypesPolicyName: false,
  catchRuntimeError: options.overlay
}) : {
  send: function send() {}
};

/**
 * @param {Options} options
 * @param {Status} currentStatus
 */
var reloadApp = function reloadApp(_ref, currentStatus) {
  var hot = _ref.hot,
    liveReload = _ref.liveReload;
  if (currentStatus.isUnloading) {
    return;
  }
  var currentHash = currentStatus.currentHash,
    previousHash = currentStatus.previousHash;
  var isInitial = currentHash.indexOf(/** @type {string} */previousHash) >= 0;
  if (isInitial) {
    return;
  }

  /**
   * @param {Window} rootWindow
   * @param {number} intervalId
   */
  function applyReload(rootWindow, intervalId) {
    clearInterval(intervalId);
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("App updated. Reloading...");
    rootWindow.location.reload();
  }
  var search = self.location.search.toLowerCase();
  var allowToHot = search.indexOf("webpack-dev-server-hot=false") === -1;
  var allowToLiveReload = search.indexOf("webpack-dev-server-live-reload=false") === -1;
  if (hot && allowToHot) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("App hot update...");
    webpack_hot_emitter_js__WEBPACK_IMPORTED_MODULE_1___default().emit("webpackHotUpdate", currentStatus.currentHash);
    if (typeof self !== "undefined" && self.window) {
      // broadcast update to window
      self.postMessage("webpackHotUpdate".concat(currentStatus.currentHash), "*");
    }
  }
  // allow refreshing the page only if liveReload isn't disabled
  else if (liveReload && allowToLiveReload) {
    var rootWindow = self;

    // use parent window for reload (in case we're in an iframe with no valid src)
    var intervalId = self.setInterval(function () {
      if (rootWindow.location.protocol !== "about:") {
        // reload immediately if protocol is valid
        applyReload(rootWindow, intervalId);
      } else {
        rootWindow = rootWindow.parent;
        if (rootWindow.parent === rootWindow) {
          // if parent equals current window we've reached the root which would continue forever, so trigger a reload anyways
          applyReload(rootWindow, intervalId);
        }
      }
    });
  }
};
var ansiRegex = new RegExp(["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?\\u0007)", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|"), "g");

/**
 *
 * Strip [ANSI escape codes](https://en.wikipedia.org/wiki/ANSI_escape_code) from a string.
 * Adapted from code originally released by Sindre Sorhus
 * Licensed the MIT License
 *
 * @param {string} string
 * @return {string}
 */
var stripAnsi = function stripAnsi(string) {
  if (typeof string !== "string") {
    throw new TypeError("Expected a `string`, got `".concat(_typeof(string), "`"));
  }
  return string.replace(ansiRegex, "");
};
var onSocketMessage = {
  hot: function hot() {
    if (parsedResourceQuery.hot === "false") {
      return;
    }
    options.hot = true;
  },
  liveReload: function liveReload() {
    if (parsedResourceQuery["live-reload"] === "false") {
      return;
    }
    options.liveReload = true;
  },
  invalid: function invalid() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("App updated. Recompiling...");

    // Fixes #1042. overlay doesn't clear if errors are fixed but warnings remain.
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Invalid");
  },
  /**
   * @param {string} hash
   */
  hash: function hash(_hash) {
    status.previousHash = status.currentHash;
    status.currentHash = _hash;
  },
  logging: setAllLogLevel,
  /**
   * @param {boolean} value
   */
  overlay: function overlay(value) {
    if (typeof document === "undefined") {
      return;
    }
    options.overlay = value;
    decodeOverlayOptions(options.overlay);
  },
  /**
   * @param {number} value
   */
  reconnect: function reconnect(value) {
    if (parsedResourceQuery.reconnect === "false") {
      return;
    }
    options.reconnect = value;
  },
  /**
   * @param {boolean} value
   */
  progress: function progress(value) {
    options.progress = value;
  },
  /**
   * @param {{ pluginName?: string, percent: number, msg: string }} data
   */
  "progress-update": function progressUpdate(data) {
    if (options.progress) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("".concat(data.pluginName ? "[".concat(data.pluginName, "] ") : "").concat(data.percent, "% - ").concat(data.msg, "."));
    }
    if ((0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.isProgressSupported)()) {
      if (typeof options.progress === "string") {
        var progress = document.querySelector("wds-progress");
        if (!progress) {
          (0,_progress_js__WEBPACK_IMPORTED_MODULE_6__.defineProgressElement)();
          progress = document.createElement("wds-progress");
          document.body.appendChild(progress);
        }
        progress.setAttribute("progress", data.percent);
        progress.setAttribute("type", options.progress);
      }
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Progress", data);
  },
  "still-ok": function stillOk() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("Nothing changed.");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("StillOk");
  },
  ok: function ok() {
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Ok");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    reloadApp(options, status);
  },
  /**
   * @param {string} file
   */
  "static-changed": function staticChanged(file) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("".concat(file ? "\"".concat(file, "\"") : "Content", " from static directory was changed. Reloading..."));
    self.location.reload();
  },
  /**
   * @param {Error[]} warnings
   * @param {any} params
   */
  warnings: function warnings(_warnings, params) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn("Warnings while compiling.");
    var printableWarnings = _warnings.map(function (error) {
      var _formatProblem = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)("warning", error),
        header = _formatProblem.header,
        body = _formatProblem.body;
      return "".concat(header, "\n").concat(stripAnsi(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Warnings", printableWarnings);
    for (var i = 0; i < printableWarnings.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.warn(printableWarnings[i]);
    }
    var overlayWarningsSetting = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.warnings;
    if (overlayWarningsSetting) {
      var warningsToDisplay = typeof overlayWarningsSetting === "function" ? _warnings.filter(overlayWarningsSetting) : _warnings;
      if (warningsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "warning",
          messages: _warnings
        });
      }
    }
    if (params && params.preventReloading) {
      return;
    }
    reloadApp(options, status);
  },
  /**
   * @param {Error[]} errors
   */
  errors: function errors(_errors) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error("Errors while compiling. Reload prevented.");
    var printableErrors = _errors.map(function (error) {
      var _formatProblem2 = (0,_overlay_js__WEBPACK_IMPORTED_MODULE_3__.formatProblem)("error", error),
        header = _formatProblem2.header,
        body = _formatProblem2.body;
      return "".concat(header, "\n").concat(stripAnsi(body));
    });
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Errors", printableErrors);
    for (var i = 0; i < printableErrors.length; i++) {
      _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(printableErrors[i]);
    }
    var overlayErrorsSettings = typeof options.overlay === "boolean" ? options.overlay : options.overlay && options.overlay.errors;
    if (overlayErrorsSettings) {
      var errorsToDisplay = typeof overlayErrorsSettings === "function" ? _errors.filter(overlayErrorsSettings) : _errors;
      if (errorsToDisplay.length) {
        overlay.send({
          type: "BUILD_ERROR",
          level: "error",
          messages: _errors
        });
      }
    }
  },
  /**
   * @param {Error} error
   */
  error: function error(_error) {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.error(_error);
  },
  close: function close() {
    _utils_log_js__WEBPACK_IMPORTED_MODULE_4__.log.info("Disconnected!");
    if (options.overlay) {
      overlay.send({
        type: "DISMISS"
      });
    }
    (0,_utils_sendMessage_js__WEBPACK_IMPORTED_MODULE_5__["default"])("Close");
  }
};

/**
 * @param {{ protocol?: string, auth?: string, hostname?: string, port?: string, pathname?: string, search?: string, hash?: string, slashes?: boolean }} objURL
 * @returns {string}
 */
var formatURL = function formatURL(objURL) {
  var protocol = objURL.protocol || "";
  if (protocol && protocol.substr(-1) !== ":") {
    protocol += ":";
  }
  var auth = objURL.auth || "";
  if (auth) {
    auth = encodeURIComponent(auth);
    auth = auth.replace(/%3A/i, ":");
    auth += "@";
  }
  var host = "";
  if (objURL.hostname) {
    host = auth + (objURL.hostname.indexOf(":") === -1 ? objURL.hostname : "[".concat(objURL.hostname, "]"));
    if (objURL.port) {
      host += ":".concat(objURL.port);
    }
  }
  var pathname = objURL.pathname || "";
  if (objURL.slashes) {
    host = "//".concat(host || "");
    if (pathname && pathname.charAt(0) !== "/") {
      pathname = "/".concat(pathname);
    }
  } else if (!host) {
    host = "";
  }
  var search = objURL.search || "";
  if (search && search.charAt(0) !== "?") {
    search = "?".concat(search);
  }
  var hash = objURL.hash || "";
  if (hash && hash.charAt(0) !== "#") {
    hash = "#".concat(hash);
  }
  pathname = pathname.replace(/[?#]/g,
  /**
   * @param {string} match
   * @returns {string}
   */
  function (match) {
    return encodeURIComponent(match);
  });
  search = search.replace("#", "%23");
  return "".concat(protocol).concat(host).concat(pathname).concat(search).concat(hash);
};

/**
 * @param {URL & { fromCurrentScript?: boolean }} parsedURL
 * @returns {string}
 */
var createSocketURL = function createSocketURL(parsedURL) {
  var hostname = parsedURL.hostname;

  // Node.js module parses it as `::`
  // `new URL(urlString, [baseURLString])` parses it as '[::]'
  var isInAddrAny = hostname === "0.0.0.0" || hostname === "::" || hostname === "[::]";

  // why do we need this check?
  // hostname n/a for file protocol (example, when using electron, ionic)
  // see: https://github.com/webpack/webpack-dev-server/pull/384
  if (isInAddrAny && self.location.hostname && self.location.protocol.indexOf("http") === 0) {
    hostname = self.location.hostname;
  }
  var socketURLProtocol = parsedURL.protocol || self.location.protocol;

  // When https is used in the app, secure web sockets are always necessary because the browser doesn't accept non-secure web sockets.
  if (socketURLProtocol === "auto:" || hostname && isInAddrAny && self.location.protocol === "https:") {
    socketURLProtocol = self.location.protocol;
  }
  socketURLProtocol = socketURLProtocol.replace(/^(?:http|.+-extension|file)/i, "ws");
  var socketURLAuth = "";

  // `new URL(urlString, [baseURLstring])` doesn't have `auth` property
  // Parse authentication credentials in case we need them
  if (parsedURL.username) {
    socketURLAuth = parsedURL.username;

    // Since HTTP basic authentication does not allow empty username,
    // we only include password if the username is not empty.
    if (parsedURL.password) {
      // Result: <username>:<password>
      socketURLAuth = socketURLAuth.concat(":", parsedURL.password);
    }
  }

  // In case the host is a raw IPv6 address, it can be enclosed in
  // the brackets as the brackets are needed in the final URL string.
  // Need to remove those as url.format blindly adds its own set of brackets
  // if the host string contains colons. That would lead to non-working
  // double brackets (e.g. [[::]]) host
  //
  // All of these web socket url params are optionally passed in through resourceQuery,
  // so we need to fall back to the default if they are not provided
  var socketURLHostname = (hostname || self.location.hostname || "localhost").replace(/^\[(.*)\]$/, "$1");
  var socketURLPort = parsedURL.port;
  if (!socketURLPort || socketURLPort === "0") {
    socketURLPort = self.location.port;
  }

  // If path is provided it'll be passed in via the resourceQuery as a
  // query param so it has to be parsed out of the querystring in order for the
  // client to open the socket to the correct location.
  var socketURLPathname = "/ws";
  if (parsedURL.pathname && !parsedURL.fromCurrentScript) {
    socketURLPathname = parsedURL.pathname;
  }
  return formatURL({
    protocol: socketURLProtocol,
    auth: socketURLAuth,
    hostname: socketURLHostname,
    port: socketURLPort,
    pathname: socketURLPathname,
    slashes: true
  });
};
var socketURL = createSocketURL(parsedResourceQuery);
(0,_socket_js__WEBPACK_IMPORTED_MODULE_2__["default"])(socketURL, onSocketMessage, options.reconnect);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/modules/logger/index.js":
/*!************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/modules/logger/index.js ***!
  \************************************************************************/
/***/ ((__unused_webpack_module, exports) => {

/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./client-src/modules/logger/tapable.js":
/*!**********************************************!*\
  !*** ./client-src/modules/logger/tapable.js ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __nested_webpack_exports__, __nested_webpack_require_372__) {

__nested_webpack_require_372__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_372__.d(__nested_webpack_exports__, {
/* harmony export */   SyncBailHook: function() { return /* binding */ SyncBailHook; }
/* harmony export */ });
function SyncBailHook() {
  return {
    call: function call() {}
  };
}

/**
 * Client stub for tapable SyncBailHook
 */
// eslint-disable-next-line import/prefer-default-export


/***/ }),

/***/ "./node_modules/webpack/lib/logging/Logger.js":
/*!****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/Logger.js ***!
  \****************************************************/
/***/ (function(module) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
function _toPropertyKey(t) {
  var i = _toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
function _toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
var LogType = Object.freeze({
  error: (/** @type {"error"} */"error"),
  // message, c style arguments
  warn: (/** @type {"warn"} */"warn"),
  // message, c style arguments
  info: (/** @type {"info"} */"info"),
  // message, c style arguments
  log: (/** @type {"log"} */"log"),
  // message, c style arguments
  debug: (/** @type {"debug"} */"debug"),
  // message, c style arguments

  trace: (/** @type {"trace"} */"trace"),
  // no arguments

  group: (/** @type {"group"} */"group"),
  // [label]
  groupCollapsed: (/** @type {"groupCollapsed"} */"groupCollapsed"),
  // [label]
  groupEnd: (/** @type {"groupEnd"} */"groupEnd"),
  // [label]

  profile: (/** @type {"profile"} */"profile"),
  // [profileName]
  profileEnd: (/** @type {"profileEnd"} */"profileEnd"),
  // [profileName]

  time: (/** @type {"time"} */"time"),
  // name, time as [seconds, nanoseconds]

  clear: (/** @type {"clear"} */"clear"),
  // no arguments
  status: (/** @type {"status"} */"status") // message, arguments
});
module.exports.LogType = LogType;

/** @typedef {typeof LogType[keyof typeof LogType]} LogTypeEnum */

var LOG_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger raw log method");
var TIMERS_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger times");
var TIMERS_AGGREGATES_SYMBOL = (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; })("webpack logger aggregated times");
var WebpackLogger = /*#__PURE__*/function () {
  /**
   * @param {(type: LogTypeEnum, args?: EXPECTED_ANY[]) => void} log log function
   * @param {(name: string | (() => string)) => WebpackLogger} getChildLogger function to create child logger
   */
  function WebpackLogger(log, getChildLogger) {
    _classCallCheck(this, WebpackLogger);
    this[LOG_SYMBOL] = log;
    this.getChildLogger = getChildLogger;
  }

  /**
   * @param {...EXPECTED_ANY} args args
   */
  return _createClass(WebpackLogger, [{
    key: "error",
    value: function error() {
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      this[LOG_SYMBOL](LogType.error, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "warn",
    value: function warn() {
      for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
        args[_key2] = arguments[_key2];
      }
      this[LOG_SYMBOL](LogType.warn, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "info",
    value: function info() {
      for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
        args[_key3] = arguments[_key3];
      }
      this[LOG_SYMBOL](LogType.info, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "log",
    value: function log() {
      for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
        args[_key4] = arguments[_key4];
      }
      this[LOG_SYMBOL](LogType.log, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "debug",
    value: function debug() {
      for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
        args[_key5] = arguments[_key5];
      }
      this[LOG_SYMBOL](LogType.debug, args);
    }

    /**
     * @param {EXPECTED_ANY} assertion assertion
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "assert",
    value: function assert(assertion) {
      if (!assertion) {
        for (var _len6 = arguments.length, args = new Array(_len6 > 1 ? _len6 - 1 : 0), _key6 = 1; _key6 < _len6; _key6++) {
          args[_key6 - 1] = arguments[_key6];
        }
        this[LOG_SYMBOL](LogType.error, args);
      }
    }
  }, {
    key: "trace",
    value: function trace() {
      this[LOG_SYMBOL](LogType.trace, ["Trace"]);
    }
  }, {
    key: "clear",
    value: function clear() {
      this[LOG_SYMBOL](LogType.clear);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "status",
    value: function status() {
      for (var _len7 = arguments.length, args = new Array(_len7), _key7 = 0; _key7 < _len7; _key7++) {
        args[_key7] = arguments[_key7];
      }
      this[LOG_SYMBOL](LogType.status, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "group",
    value: function group() {
      for (var _len8 = arguments.length, args = new Array(_len8), _key8 = 0; _key8 < _len8; _key8++) {
        args[_key8] = arguments[_key8];
      }
      this[LOG_SYMBOL](LogType.group, args);
    }

    /**
     * @param {...EXPECTED_ANY} args args
     */
  }, {
    key: "groupCollapsed",
    value: function groupCollapsed() {
      for (var _len9 = arguments.length, args = new Array(_len9), _key9 = 0; _key9 < _len9; _key9++) {
        args[_key9] = arguments[_key9];
      }
      this[LOG_SYMBOL](LogType.groupCollapsed, args);
    }
  }, {
    key: "groupEnd",
    value: function groupEnd() {
      this[LOG_SYMBOL](LogType.groupEnd);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profile",
    value: function profile(label) {
      this[LOG_SYMBOL](LogType.profile, [label]);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "profileEnd",
    value: function profileEnd(label) {
      this[LOG_SYMBOL](LogType.profileEnd, [label]);
    }

    /**
     * @param {string} label label
     */
  }, {
    key: "time",
    value: function time(label) {
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL] = this[TIMERS_SYMBOL] || new Map();
      this[TIMERS_SYMBOL].set(label, process.hrtime());
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeLog",
    value: function timeLog(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeLog()"));
      }
      var time = process.hrtime(prev);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeEnd",
    value: function timeEnd(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeEnd()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregate",
    value: function timeAggregate(label) {
      var prev = this[TIMERS_SYMBOL] && this[TIMERS_SYMBOL].get(label);
      if (!prev) {
        throw new Error("No such label '".concat(label, "' for WebpackLogger.timeAggregate()"));
      }
      var time = process.hrtime(prev);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_SYMBOL].delete(label);
      /** @type {Map<string | undefined, [number, number]>} */
      this[TIMERS_AGGREGATES_SYMBOL] = this[TIMERS_AGGREGATES_SYMBOL] || new Map();
      var current = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (current !== undefined) {
        if (time[1] + current[1] > 1e9) {
          time[0] += current[0] + 1;
          time[1] = time[1] - 1e9 + current[1];
        } else {
          time[0] += current[0];
          time[1] += current[1];
        }
      }
      this[TIMERS_AGGREGATES_SYMBOL].set(label, time);
    }

    /**
     * @param {string=} label label
     */
  }, {
    key: "timeAggregateEnd",
    value: function timeAggregateEnd(label) {
      if (this[TIMERS_AGGREGATES_SYMBOL] === undefined) return;
      var time = this[TIMERS_AGGREGATES_SYMBOL].get(label);
      if (time === undefined) return;
      this[TIMERS_AGGREGATES_SYMBOL].delete(label);
      this[LOG_SYMBOL](LogType.time, [label].concat(_toConsumableArray(time)));
    }
  }]);
}();
module.exports.Logger = WebpackLogger;

/***/ }),

/***/ "./node_modules/webpack/lib/logging/createConsoleLogger.js":
/*!*****************************************************************!*\
  !*** ./node_modules/webpack/lib/logging/createConsoleLogger.js ***!
  \*****************************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_12803__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _slicedToArray(r, e) {
  return _arrayWithHoles(r) || _iterableToArrayLimit(r, e) || _unsupportedIterableToArray(r, e) || _nonIterableRest();
}
function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _iterableToArrayLimit(r, l) {
  var t = null == r ? null : "undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || r["@@iterator"];
  if (null != t) {
    var e,
      n,
      i,
      u,
      a = [],
      f = !0,
      o = !1;
    try {
      if (i = (t = t.call(r)).next, 0 === l) {
        if (Object(t) !== t) return;
        f = !1;
      } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
    } catch (r) {
      o = !0, n = r;
    } finally {
      try {
        if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
      } finally {
        if (o) throw n;
      }
    }
    return a;
  }
}
function _arrayWithHoles(r) {
  if (Array.isArray(r)) return r;
}
function _toConsumableArray(r) {
  return _arrayWithoutHoles(r) || _iterableToArray(r) || _unsupportedIterableToArray(r) || _nonIterableSpread();
}
function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return _arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? _arrayLikeToArray(r, a) : void 0;
  }
}
function _iterableToArray(r) {
  if ("undefined" != typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && null != r[(typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator] || null != r["@@iterator"]) return Array.from(r);
}
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return _arrayLikeToArray(r);
}
function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
function _typeof(o) {
  "@babel/helpers - typeof";

  return _typeof = "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && "symbol" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o.constructor === (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }) && o !== (typeof Symbol !== "undefined" ? Symbol : function (i) { return i; }).prototype ? "symbol" : typeof o;
  }, _typeof(o);
}
var _require = __nested_webpack_require_12803__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  LogType = _require.LogType;

/** @typedef {import("../../declarations/WebpackOptions").FilterItemTypes} FilterItemTypes */
/** @typedef {import("../../declarations/WebpackOptions").FilterTypes} FilterTypes */
/** @typedef {import("./Logger").LogTypeEnum} LogTypeEnum */

/** @typedef {(item: string) => boolean} FilterFunction */
/** @typedef {(value: string, type: LogTypeEnum, args?: EXPECTED_ANY[]) => void} LoggingFunction */

/**
 * @typedef {object} LoggerConsole
 * @property {() => void} clear
 * @property {() => void} trace
 * @property {(...args: EXPECTED_ANY[]) => void} info
 * @property {(...args: EXPECTED_ANY[]) => void} log
 * @property {(...args: EXPECTED_ANY[]) => void} warn
 * @property {(...args: EXPECTED_ANY[]) => void} error
 * @property {(...args: EXPECTED_ANY[]) => void=} debug
 * @property {(...args: EXPECTED_ANY[]) => void=} group
 * @property {(...args: EXPECTED_ANY[]) => void=} groupCollapsed
 * @property {(...args: EXPECTED_ANY[]) => void=} groupEnd
 * @property {(...args: EXPECTED_ANY[]) => void=} status
 * @property {(...args: EXPECTED_ANY[]) => void=} profile
 * @property {(...args: EXPECTED_ANY[]) => void=} profileEnd
 * @property {(...args: EXPECTED_ANY[]) => void=} logTime
 */

/**
 * @typedef {object} LoggerOptions
 * @property {false|true|"none"|"error"|"warn"|"info"|"log"|"verbose"} level loglevel
 * @property {FilterTypes|boolean} debug filter for debug logging
 * @property {LoggerConsole} console the console to log to
 */

/**
 * @param {FilterItemTypes} item an input item
 * @returns {FilterFunction | undefined} filter function
 */
var filterToFunction = function filterToFunction(item) {
  if (typeof item === "string") {
    var regExp = new RegExp("[\\\\/]".concat(item.replace(/[-[\]{}()*+?.\\^$|]/g, "\\$&"), "([\\\\/]|$|!|\\?)"));
    return function (ident) {
      return regExp.test(ident);
    };
  }
  if (item && _typeof(item) === "object" && typeof item.test === "function") {
    return function (ident) {
      return item.test(ident);
    };
  }
  if (typeof item === "function") {
    return item;
  }
  if (typeof item === "boolean") {
    return function () {
      return item;
    };
  }
};

/**
 * @enum {number}
 */
var LogLevel = {
  none: 6,
  false: 6,
  error: 5,
  warn: 4,
  info: 3,
  log: 2,
  true: 2,
  verbose: 1
};

/**
 * @param {LoggerOptions} options options object
 * @returns {LoggingFunction} logging function
 */
module.exports = function (_ref) {
  var _ref$level = _ref.level,
    level = _ref$level === void 0 ? "info" : _ref$level,
    _ref$debug = _ref.debug,
    debug = _ref$debug === void 0 ? false : _ref$debug,
    console = _ref.console;
  var debugFilters = /** @type {FilterFunction[]} */

  typeof debug === "boolean" ? [function () {
    return debug;
  }] : /** @type {FilterItemTypes[]} */[].concat(debug).map(filterToFunction);
  var loglevel = LogLevel["".concat(level)] || 0;

  /**
   * @param {string} name name of the logger
   * @param {LogTypeEnum} type type of the log entry
   * @param {EXPECTED_ANY[]=} args arguments of the log entry
   * @returns {void}
   */
  var logger = function logger(name, type, args) {
    var labeledArgs = function labeledArgs() {
      if (Array.isArray(args)) {
        if (args.length > 0 && typeof args[0] === "string") {
          return ["[".concat(name, "] ").concat(args[0])].concat(_toConsumableArray(args.slice(1)));
        }
        return ["[".concat(name, "]")].concat(_toConsumableArray(args));
      }
      return [];
    };
    var debug = debugFilters.some(function (f) {
      return f(name);
    });
    switch (type) {
      case LogType.debug:
        if (!debug) return;
        if (typeof console.debug === "function") {
          console.debug.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.log:
        if (!debug && loglevel > LogLevel.log) return;
        console.log.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.info:
        if (!debug && loglevel > LogLevel.info) return;
        console.info.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.warn:
        if (!debug && loglevel > LogLevel.warn) return;
        console.warn.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.error:
        if (!debug && loglevel > LogLevel.error) return;
        console.error.apply(console, _toConsumableArray(labeledArgs()));
        break;
      case LogType.trace:
        if (!debug) return;
        console.trace();
        break;
      case LogType.groupCollapsed:
        if (!debug && loglevel > LogLevel.log) return;
        if (!debug && loglevel > LogLevel.verbose) {
          if (typeof console.groupCollapsed === "function") {
            console.groupCollapsed.apply(console, _toConsumableArray(labeledArgs()));
          } else {
            console.log.apply(console, _toConsumableArray(labeledArgs()));
          }
          break;
        }
      // falls through
      case LogType.group:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.group === "function") {
          console.group.apply(console, _toConsumableArray(labeledArgs()));
        } else {
          console.log.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.groupEnd:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.groupEnd === "function") {
          console.groupEnd();
        }
        break;
      case LogType.time:
        {
          if (!debug && loglevel > LogLevel.log) return;
          var _args = _slicedToArray(/** @type {[string, number, number]} */
            args, 3),
            label = _args[0],
            start = _args[1],
            end = _args[2];
          var ms = start * 1000 + end / 1000000;
          var msg = "[".concat(name, "] ").concat(label, ": ").concat(ms, " ms");
          if (typeof console.logTime === "function") {
            console.logTime(msg);
          } else {
            console.log(msg);
          }
          break;
        }
      case LogType.profile:
        if (typeof console.profile === "function") {
          console.profile.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.profileEnd:
        if (typeof console.profileEnd === "function") {
          console.profileEnd.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      case LogType.clear:
        if (!debug && loglevel > LogLevel.log) return;
        if (typeof console.clear === "function") {
          console.clear();
        }
        break;
      case LogType.status:
        if (!debug && loglevel > LogLevel.info) return;
        if (typeof console.status === "function") {
          if (!args || args.length === 0) {
            console.status();
          } else {
            console.status.apply(console, _toConsumableArray(labeledArgs()));
          }
        } else if (args && args.length !== 0) {
          console.info.apply(console, _toConsumableArray(labeledArgs()));
        }
        break;
      default:
        throw new Error("Unexpected LogType ".concat(type));
    }
  };
  return logger;
};

/***/ }),

/***/ "./node_modules/webpack/lib/logging/runtime.js":
/*!*****************************************************!*\
  !*** ./node_modules/webpack/lib/logging/runtime.js ***!
  \*****************************************************/
/***/ (function(module, __unused_webpack_exports, __nested_webpack_require_23778__) {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/



function _extends() {
  return _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, _extends.apply(null, arguments);
}
var _require = __nested_webpack_require_23778__(/*! tapable */ "./client-src/modules/logger/tapable.js"),
  SyncBailHook = _require.SyncBailHook;
var _require2 = __nested_webpack_require_23778__(/*! ./Logger */ "./node_modules/webpack/lib/logging/Logger.js"),
  Logger = _require2.Logger;
var createConsoleLogger = __nested_webpack_require_23778__(/*! ./createConsoleLogger */ "./node_modules/webpack/lib/logging/createConsoleLogger.js");

/** @type {createConsoleLogger.LoggerOptions} */
var currentDefaultLoggerOptions = {
  level: "info",
  debug: false,
  console: console
};
var currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);

/**
 * @param {string} name name of the logger
 * @returns {Logger} a logger
 */
module.exports.getLogger = function (name) {
  return new Logger(function (type, args) {
    if (module.exports.hooks.log.call(name, type, args) === undefined) {
      currentDefaultLogger(name, type, args);
    }
  }, function (childName) {
    return module.exports.getLogger("".concat(name, "/").concat(childName));
  });
};

/**
 * @param {createConsoleLogger.LoggerOptions} options new options, merge with old options
 * @returns {void}
 */
module.exports.configureDefaultLogger = function (options) {
  _extends(currentDefaultLoggerOptions, options);
  currentDefaultLogger = createConsoleLogger(currentDefaultLoggerOptions);
};
module.exports.hooks = {
  log: new SyncBailHook(["origin", "type", "args"])
};

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __nested_webpack_require_25855__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __nested_webpack_require_25855__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__nested_webpack_require_25855__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__nested_webpack_require_25855__.o(definition, key) && !__nested_webpack_require_25855__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__nested_webpack_require_25855__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__nested_webpack_require_25855__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __nested_webpack_exports__ = {};
// This entry needs to be wrapped in an IIFE because it needs to be isolated against other modules in the chunk.
!function() {
/*!********************************************!*\
  !*** ./client-src/modules/logger/index.js ***!
  \********************************************/
__nested_webpack_require_25855__.r(__nested_webpack_exports__);
/* harmony export */ __nested_webpack_require_25855__.d(__nested_webpack_exports__, {
/* harmony export */   "default": function() { return /* reexport default export from named module */ webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__; }
/* harmony export */ });
/* harmony import */ var webpack_lib_logging_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __nested_webpack_require_25855__(/*! webpack/lib/logging/runtime.js */ "./node_modules/webpack/lib/logging/runtime.js");

}();
var __webpack_export_target__ = exports;
for(var __webpack_i__ in __nested_webpack_exports__) __webpack_export_target__[__webpack_i__] = __nested_webpack_exports__[__webpack_i__];
if(__nested_webpack_exports__.__esModule) Object.defineProperty(__webpack_export_target__, "__esModule", { value: true });
/******/ })()
;

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/overlay.js":
/*!***********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/overlay.js ***!
  \***********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createOverlay: () => (/* binding */ createOverlay),
/* harmony export */   formatProblem: () => (/* binding */ formatProblem)
/* harmony export */ });
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ansi-html-community */ "./node_modules/ansi-html-community/index.js");
/* harmony import */ var ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(ansi_html_community__WEBPACK_IMPORTED_MODULE_0__);
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function ownKeys(e, r) { var t = Object.keys(e); if (Object.getOwnPropertySymbols) { var o = Object.getOwnPropertySymbols(e); r && (o = o.filter(function (r) { return Object.getOwnPropertyDescriptor(e, r).enumerable; })), t.push.apply(t, o); } return t; }
function _objectSpread(e) { for (var r = 1; r < arguments.length; r++) { var t = null != arguments[r] ? arguments[r] : {}; r % 2 ? ownKeys(Object(t), !0).forEach(function (r) { _defineProperty(e, r, t[r]); }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e, Object.getOwnPropertyDescriptors(t)) : ownKeys(Object(t)).forEach(function (r) { Object.defineProperty(e, r, Object.getOwnPropertyDescriptor(t, r)); }); } return e; }
function _defineProperty(e, r, t) { return (r = _toPropertyKey(r)) in e ? Object.defineProperty(e, r, { value: t, enumerable: !0, configurable: !0, writable: !0 }) : e[r] = t, e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
// The error overlay is inspired (and mostly copied) from Create React App (https://github.com/facebookincubator/create-react-app)
// They, in turn, got inspired by webpack-hot-middleware (https://github.com/glenjamin/webpack-hot-middleware).



/**
 * @type {(input: string, position: number) => string}
 */
var getCodePoint = String.prototype.codePointAt ? function (input, position) {
  return input.codePointAt(position);
} : function (input, position) {
  return (input.charCodeAt(position) - 0xd800) * 0x400 + input.charCodeAt(position + 1) - 0xdc00 + 0x10000;
};

/**
 * @param {string} macroText
 * @param {RegExp} macroRegExp
 * @param {(input: string) => string} macroReplacer
 * @returns {string}
 */
var replaceUsingRegExp = function replaceUsingRegExp(macroText, macroRegExp, macroReplacer) {
  macroRegExp.lastIndex = 0;
  var replaceMatch = macroRegExp.exec(macroText);
  var replaceResult;
  if (replaceMatch) {
    replaceResult = "";
    var replaceLastIndex = 0;
    do {
      if (replaceLastIndex !== replaceMatch.index) {
        replaceResult += macroText.substring(replaceLastIndex, replaceMatch.index);
      }
      var replaceInput = replaceMatch[0];
      replaceResult += macroReplacer(replaceInput);
      replaceLastIndex = replaceMatch.index + replaceInput.length;
      // eslint-disable-next-line no-cond-assign
    } while (replaceMatch = macroRegExp.exec(macroText));
    if (replaceLastIndex !== macroText.length) {
      replaceResult += macroText.substring(replaceLastIndex);
    }
  } else {
    replaceResult = macroText;
  }
  return replaceResult;
};
var references = {
  "<": "&lt;",
  ">": "&gt;",
  '"': "&quot;",
  "'": "&apos;",
  "&": "&amp;"
};

/**
 * @param {string} text text
 * @returns {string}
 */
function encode(text) {
  if (!text) {
    return "";
  }
  return replaceUsingRegExp(text, /[<>'"&]/g, function (input) {
    var result = references[input];
    if (!result) {
      var code = input.length > 1 ? getCodePoint(input, 0) : input.charCodeAt(0);
      result = "&#".concat(code, ";");
    }
    return result;
  });
}

/**
 * @typedef {Object} StateDefinitions
 * @property {{[event: string]: { target: string; actions?: Array<string> }}} [on]
 */

/**
 * @typedef {Object} Options
 * @property {{[state: string]: StateDefinitions}} states
 * @property {object} context;
 * @property {string} initial
 */

/**
 * @typedef {Object} Implementation
 * @property {{[actionName: string]: (ctx: object, event: any) => object}} actions
 */

/**
 * A simplified `createMachine` from `@xstate/fsm` with the following differences:
 *
 *  - the returned machine is technically a "service". No `interpret(machine).start()` is needed.
 *  - the state definition only support `on` and target must be declared with { target: 'nextState', actions: [] } explicitly.
 *  - event passed to `send` must be an object with `type` property.
 *  - actions implementation will be [assign action](https://xstate.js.org/docs/guides/context.html#assign-action) if you return any value.
 *  Do not return anything if you just want to invoke side effect.
 *
 * The goal of this custom function is to avoid installing the entire `'xstate/fsm'` package, while enabling modeling using
 * state machine. You can copy the first parameter into the editor at https://stately.ai/viz to visualize the state machine.
 *
 * @param {Options} options
 * @param {Implementation} implementation
 */
function createMachine(_ref, _ref2) {
  var states = _ref.states,
    context = _ref.context,
    initial = _ref.initial;
  var actions = _ref2.actions;
  var currentState = initial;
  var currentContext = context;
  return {
    send: function send(event) {
      var currentStateOn = states[currentState].on;
      var transitionConfig = currentStateOn && currentStateOn[event.type];
      if (transitionConfig) {
        currentState = transitionConfig.target;
        if (transitionConfig.actions) {
          transitionConfig.actions.forEach(function (actName) {
            var actionImpl = actions[actName];
            var nextContextValue = actionImpl && actionImpl(currentContext, event);
            if (nextContextValue) {
              currentContext = _objectSpread(_objectSpread({}, currentContext), nextContextValue);
            }
          });
        }
      }
    }
  };
}

/**
 * @typedef {Object} ShowOverlayData
 * @property {'warning' | 'error'} level
 * @property {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
 * @property {'build' | 'runtime'} messageSource
 */

/**
 * @typedef {Object} CreateOverlayMachineOptions
 * @property {(data: ShowOverlayData) => void} showOverlay
 * @property {() => void} hideOverlay
 */

/**
 * @param {CreateOverlayMachineOptions} options
 */
var createOverlayMachine = function createOverlayMachine(options) {
  var hideOverlay = options.hideOverlay,
    showOverlay = options.showOverlay;
  return createMachine({
    initial: "hidden",
    context: {
      level: "error",
      messages: [],
      messageSource: "build"
    },
    states: {
      hidden: {
        on: {
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      },
      displayBuildError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["appendMessages", "showOverlay"]
          }
        }
      },
      displayRuntimeError: {
        on: {
          DISMISS: {
            target: "hidden",
            actions: ["dismissMessages", "hideOverlay"]
          },
          RUNTIME_ERROR: {
            target: "displayRuntimeError",
            actions: ["appendMessages", "showOverlay"]
          },
          BUILD_ERROR: {
            target: "displayBuildError",
            actions: ["setMessages", "showOverlay"]
          }
        }
      }
    }
  }, {
    actions: {
      dismissMessages: function dismissMessages() {
        return {
          messages: [],
          level: "error",
          messageSource: "build"
        };
      },
      appendMessages: function appendMessages(context, event) {
        return {
          messages: context.messages.concat(event.messages),
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      setMessages: function setMessages(context, event) {
        return {
          messages: event.messages,
          level: event.level || context.level,
          messageSource: event.type === "RUNTIME_ERROR" ? "runtime" : "build"
        };
      },
      hideOverlay: hideOverlay,
      showOverlay: showOverlay
    }
  });
};

/**
 *
 * @param {Error} error
 */
var parseErrorToStacks = function parseErrorToStacks(error) {
  if (!error || !(error instanceof Error)) {
    throw new Error("parseErrorToStacks expects Error object");
  }
  if (typeof error.stack === "string") {
    return error.stack.split("\n").filter(function (stack) {
      return stack !== "Error: ".concat(error.message);
    });
  }
};

/**
 * @callback ErrorCallback
 * @param {ErrorEvent} error
 * @returns {void}
 */

/**
 * @param {ErrorCallback} callback
 */
var listenToRuntimeError = function listenToRuntimeError(callback) {
  window.addEventListener("error", callback);
  return function cleanup() {
    window.removeEventListener("error", callback);
  };
};

/**
 * @callback UnhandledRejectionCallback
 * @param {PromiseRejectionEvent} rejectionEvent
 * @returns {void}
 */

/**
 * @param {UnhandledRejectionCallback} callback
 */
var listenToUnhandledRejection = function listenToUnhandledRejection(callback) {
  window.addEventListener("unhandledrejection", callback);
  return function cleanup() {
    window.removeEventListener("unhandledrejection", callback);
  };
};

// Styles are inspired by `react-error-overlay`

var msgStyles = {
  error: {
    backgroundColor: "rgba(206, 17, 38, 0.1)",
    color: "#fccfcf"
  },
  warning: {
    backgroundColor: "rgba(251, 245, 180, 0.1)",
    color: "#fbf5b4"
  }
};
var iframeStyle = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  border: "none",
  "z-index": 9999999999
};
var containerStyle = {
  position: "fixed",
  boxSizing: "border-box",
  left: 0,
  top: 0,
  right: 0,
  bottom: 0,
  width: "100vw",
  height: "100vh",
  fontSize: "large",
  padding: "2rem 2rem 4rem 2rem",
  lineHeight: "1.2",
  whiteSpace: "pre-wrap",
  overflow: "auto",
  backgroundColor: "rgba(0, 0, 0, 0.9)",
  color: "white"
};
var headerStyle = {
  color: "#e83b46",
  fontSize: "2em",
  whiteSpace: "pre-wrap",
  fontFamily: "sans-serif",
  margin: "0 2rem 2rem 0",
  flex: "0 0 auto",
  maxHeight: "50%",
  overflow: "auto"
};
var dismissButtonStyle = {
  color: "#ffffff",
  lineHeight: "1rem",
  fontSize: "1.5rem",
  padding: "1rem",
  cursor: "pointer",
  position: "absolute",
  right: 0,
  top: 0,
  backgroundColor: "transparent",
  border: "none"
};
var msgTypeStyle = {
  color: "#e83b46",
  fontSize: "1.2em",
  marginBottom: "1rem",
  fontFamily: "sans-serif"
};
var msgTextStyle = {
  lineHeight: "1.5",
  fontSize: "1rem",
  fontFamily: "Menlo, Consolas, monospace"
};

// ANSI HTML

var colors = {
  reset: ["transparent", "transparent"],
  black: "181818",
  red: "E36049",
  green: "B3CB74",
  yellow: "FFD080",
  blue: "7CAFC2",
  magenta: "7FACCA",
  cyan: "C3C2EF",
  lightgrey: "EBE7E3",
  darkgrey: "6D7891"
};
ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default().setColors(colors);

/**
 * @param {string} type
 * @param {string  | { file?: string, moduleName?: string, loc?: string, message?: string; stack?: string[] }} item
 * @returns {{ header: string, body: string }}
 */
var formatProblem = function formatProblem(type, item) {
  var header = type === "warning" ? "WARNING" : "ERROR";
  var body = "";
  if (typeof item === "string") {
    body += item;
  } else {
    var file = item.file || "";
    // eslint-disable-next-line no-nested-ternary
    var moduleName = item.moduleName ? item.moduleName.indexOf("!") !== -1 ? "".concat(item.moduleName.replace(/^(\s|\S)*!/, ""), " (").concat(item.moduleName, ")") : "".concat(item.moduleName) : "";
    var loc = item.loc;
    header += "".concat(moduleName || file ? " in ".concat(moduleName ? "".concat(moduleName).concat(file ? " (".concat(file, ")") : "") : file).concat(loc ? " ".concat(loc) : "") : "");
    body += item.message || "";
  }
  if (Array.isArray(item.stack)) {
    item.stack.forEach(function (stack) {
      if (typeof stack === "string") {
        body += "\r\n".concat(stack);
      }
    });
  }
  return {
    header: header,
    body: body
  };
};

/**
 * @typedef {Object} CreateOverlayOptions
 * @property {string | null} trustedTypesPolicyName
 * @property {boolean | (error: Error) => void} [catchRuntimeError]
 */

/**
 *
 * @param {CreateOverlayOptions} options
 */
var createOverlay = function createOverlay(options) {
  /** @type {HTMLIFrameElement | null | undefined} */
  var iframeContainerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var containerElement;
  /** @type {HTMLDivElement | null | undefined} */
  var headerElement;
  /** @type {Array<(element: HTMLDivElement) => void>} */
  var onLoadQueue = [];
  /** @type {TrustedTypePolicy | undefined} */
  var overlayTrustedTypesPolicy;

  /**
   *
   * @param {HTMLElement} element
   * @param {CSSStyleDeclaration} style
   */
  function applyStyle(element, style) {
    Object.keys(style).forEach(function (prop) {
      element.style[prop] = style[prop];
    });
  }

  /**
   * @param {string | null} trustedTypesPolicyName
   */
  function createContainer(trustedTypesPolicyName) {
    // Enable Trusted Types if they are available in the current browser.
    if (window.trustedTypes) {
      overlayTrustedTypesPolicy = window.trustedTypes.createPolicy(trustedTypesPolicyName || "webpack-dev-server#overlay", {
        createHTML: function createHTML(value) {
          return value;
        }
      });
    }
    iframeContainerElement = document.createElement("iframe");
    iframeContainerElement.id = "webpack-dev-server-client-overlay";
    iframeContainerElement.src = "about:blank";
    applyStyle(iframeContainerElement, iframeStyle);
    iframeContainerElement.onload = function () {
      var contentElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      containerElement = /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).createElement("div");
      contentElement.id = "webpack-dev-server-client-overlay-div";
      applyStyle(contentElement, containerStyle);
      headerElement = document.createElement("div");
      headerElement.innerText = "Compiled with problems:";
      applyStyle(headerElement, headerStyle);
      var closeButtonElement = document.createElement("button");
      applyStyle(closeButtonElement, dismissButtonStyle);
      closeButtonElement.innerText = "×";
      closeButtonElement.ariaLabel = "Dismiss";
      closeButtonElement.addEventListener("click", function () {
        // eslint-disable-next-line no-use-before-define
        overlayService.send({
          type: "DISMISS"
        });
      });
      contentElement.appendChild(headerElement);
      contentElement.appendChild(closeButtonElement);
      contentElement.appendChild(containerElement);

      /** @type {Document} */
      (/** @type {HTMLIFrameElement} */
      iframeContainerElement.contentDocument).body.appendChild(contentElement);
      onLoadQueue.forEach(function (onLoad) {
        onLoad(/** @type {HTMLDivElement} */contentElement);
      });
      onLoadQueue = [];

      /** @type {HTMLIFrameElement} */
      iframeContainerElement.onload = null;
    };
    document.body.appendChild(iframeContainerElement);
  }

  /**
   * @param {(element: HTMLDivElement) => void} callback
   * @param {string | null} trustedTypesPolicyName
   */
  function ensureOverlayExists(callback, trustedTypesPolicyName) {
    if (containerElement) {
      containerElement.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML("") : "";
      // Everything is ready, call the callback right away.
      callback(containerElement);
      return;
    }
    onLoadQueue.push(callback);
    if (iframeContainerElement) {
      return;
    }
    createContainer(trustedTypesPolicyName);
  }

  // Successful compilation.
  function hide() {
    if (!iframeContainerElement) {
      return;
    }

    // Clean up and reset internal state.
    document.body.removeChild(iframeContainerElement);
    iframeContainerElement = null;
    containerElement = null;
  }

  // Compilation with errors (e.g. syntax error or missing modules).
  /**
   * @param {string} type
   * @param {Array<string  | { moduleIdentifier?: string, moduleName?: string, loc?: string, message?: string }>} messages
   * @param {string | null} trustedTypesPolicyName
   * @param {'build' | 'runtime'} messageSource
   */
  function show(type, messages, trustedTypesPolicyName, messageSource) {
    ensureOverlayExists(function () {
      headerElement.innerText = messageSource === "runtime" ? "Uncaught runtime errors:" : "Compiled with problems:";
      messages.forEach(function (message) {
        var entryElement = document.createElement("div");
        var msgStyle = type === "warning" ? msgStyles.warning : msgStyles.error;
        applyStyle(entryElement, _objectSpread(_objectSpread({}, msgStyle), {}, {
          padding: "1rem 1rem 1.5rem 1rem"
        }));
        var typeElement = document.createElement("div");
        var _formatProblem = formatProblem(type, message),
          header = _formatProblem.header,
          body = _formatProblem.body;
        typeElement.innerText = header;
        applyStyle(typeElement, msgTypeStyle);
        if (message.moduleIdentifier) {
          applyStyle(typeElement, {
            cursor: "pointer"
          });
          // element.dataset not supported in IE
          typeElement.setAttribute("data-can-open", true);
          typeElement.addEventListener("click", function () {
            fetch("/webpack-dev-server/open-editor?fileName=".concat(message.moduleIdentifier));
          });
        }

        // Make it look similar to our terminal.
        var text = ansi_html_community__WEBPACK_IMPORTED_MODULE_0___default()(encode(body));
        var messageTextNode = document.createElement("div");
        applyStyle(messageTextNode, msgTextStyle);
        messageTextNode.innerHTML = overlayTrustedTypesPolicy ? overlayTrustedTypesPolicy.createHTML(text) : text;
        entryElement.appendChild(typeElement);
        entryElement.appendChild(messageTextNode);

        /** @type {HTMLDivElement} */
        containerElement.appendChild(entryElement);
      });
    }, trustedTypesPolicyName);
  }
  var overlayService = createOverlayMachine({
    showOverlay: function showOverlay(_ref3) {
      var _ref3$level = _ref3.level,
        level = _ref3$level === void 0 ? "error" : _ref3$level,
        messages = _ref3.messages,
        messageSource = _ref3.messageSource;
      return show(level, messages, options.trustedTypesPolicyName, messageSource);
    },
    hideOverlay: hide
  });
  if (options.catchRuntimeError) {
    /**
     * @param {Error | undefined} error
     * @param {string} fallbackMessage
     */
    var handleError = function handleError(error, fallbackMessage) {
      var errorObject = error instanceof Error ? error : new Error(error || fallbackMessage);
      var shouldDisplay = typeof options.catchRuntimeError === "function" ? options.catchRuntimeError(errorObject) : true;
      if (shouldDisplay) {
        overlayService.send({
          type: "RUNTIME_ERROR",
          messages: [{
            message: errorObject.message,
            stack: parseErrorToStacks(errorObject)
          }]
        });
      }
    };
    listenToRuntimeError(function (errorEvent) {
      // error property may be empty in older browser like IE
      var error = errorEvent.error,
        message = errorEvent.message;
      if (!error && !message) {
        return;
      }

      // if error stack indicates a React error boundary caught the error, do not show overlay.
      if (error && error.stack && error.stack.includes("invokeGuardedCallbackDev")) {
        return;
      }
      handleError(error, message);
    });
    listenToUnhandledRejection(function (promiseRejectionEvent) {
      var reason = promiseRejectionEvent.reason;
      handleError(reason, "Unknown promise rejection reason");
    });
  }
  return overlayService;
};


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/progress.js":
/*!************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/progress.js ***!
  \************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   defineProgressElement: () => (/* binding */ defineProgressElement),
/* harmony export */   isProgressSupported: () => (/* binding */ isProgressSupported)
/* harmony export */ });
function _typeof(o) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) { return typeof o; } : function (o) { return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o; }, _typeof(o); }
function _classCallCheck(a, n) { if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function"); }
function _defineProperties(e, r) { for (var t = 0; t < r.length; t++) { var o = r[t]; o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, _toPropertyKey(o.key), o); } }
function _createClass(e, r, t) { return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", { writable: !1 }), e; }
function _toPropertyKey(t) { var i = _toPrimitive(t, "string"); return "symbol" == _typeof(i) ? i : i + ""; }
function _toPrimitive(t, r) { if ("object" != _typeof(t) || !t) return t; var e = t[Symbol.toPrimitive]; if (void 0 !== e) { var i = e.call(t, r || "default"); if ("object" != _typeof(i)) return i; throw new TypeError("@@toPrimitive must return a primitive value."); } return ("string" === r ? String : Number)(t); }
function _callSuper(t, o, e) { return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e)); }
function _possibleConstructorReturn(t, e) { if (e && ("object" == _typeof(e) || "function" == typeof e)) return e; if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined"); return _assertThisInitialized(t); }
function _assertThisInitialized(e) { if (void 0 === e) throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); return e; }
function _inherits(t, e) { if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function"); t.prototype = Object.create(e && e.prototype, { constructor: { value: t, writable: !0, configurable: !0 } }), Object.defineProperty(t, "prototype", { writable: !1 }), e && _setPrototypeOf(t, e); }
function _wrapNativeSuper(t) { var r = "function" == typeof Map ? new Map() : void 0; return _wrapNativeSuper = function _wrapNativeSuper(t) { if (null === t || !_isNativeFunction(t)) return t; if ("function" != typeof t) throw new TypeError("Super expression must either be null or a function"); if (void 0 !== r) { if (r.has(t)) return r.get(t); r.set(t, Wrapper); } function Wrapper() { return _construct(t, arguments, _getPrototypeOf(this).constructor); } return Wrapper.prototype = Object.create(t.prototype, { constructor: { value: Wrapper, enumerable: !1, writable: !0, configurable: !0 } }), _setPrototypeOf(Wrapper, t); }, _wrapNativeSuper(t); }
function _construct(t, e, r) { if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments); var o = [null]; o.push.apply(o, e); var p = new (t.bind.apply(t, o))(); return r && _setPrototypeOf(p, r.prototype), p; }
function _isNativeReflectConstruct() { try { var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {})); } catch (t) {} return (_isNativeReflectConstruct = function _isNativeReflectConstruct() { return !!t; })(); }
function _isNativeFunction(t) { try { return -1 !== Function.toString.call(t).indexOf("[native code]"); } catch (n) { return "function" == typeof t; } }
function _setPrototypeOf(t, e) { return _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function (t, e) { return t.__proto__ = e, t; }, _setPrototypeOf(t, e); }
function _getPrototypeOf(t) { return _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) { return t.__proto__ || Object.getPrototypeOf(t); }, _getPrototypeOf(t); }
function _classPrivateMethodInitSpec(e, a) { _checkPrivateRedeclaration(e, a), a.add(e); }
function _checkPrivateRedeclaration(e, t) { if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object"); }
function _assertClassBrand(e, t, n) { if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n; throw new TypeError("Private element is not present on this object"); }
function isProgressSupported() {
  return "customElements" in self && !!HTMLElement.prototype.attachShadow;
}
function defineProgressElement() {
  var _WebpackDevServerProgress;
  if (customElements.get("wds-progress")) {
    return;
  }
  var _WebpackDevServerProgress_brand = /*#__PURE__*/new WeakSet();
  var WebpackDevServerProgress = /*#__PURE__*/function (_HTMLElement) {
    function WebpackDevServerProgress() {
      var _this;
      _classCallCheck(this, WebpackDevServerProgress);
      _this = _callSuper(this, WebpackDevServerProgress);
      _classPrivateMethodInitSpec(_this, _WebpackDevServerProgress_brand);
      _this.attachShadow({
        mode: "open"
      });
      _this.maxDashOffset = -219.99078369140625;
      _this.animationTimer = null;
      return _this;
    }
    _inherits(WebpackDevServerProgress, _HTMLElement);
    return _createClass(WebpackDevServerProgress, [{
      key: "connectedCallback",
      value: function connectedCallback() {
        _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
      }
    }, {
      key: "attributeChangedCallback",
      value: function attributeChangedCallback(name, oldValue, newValue) {
        if (name === "progress") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, Number(newValue));
        } else if (name === "type") {
          _assertClassBrand(_WebpackDevServerProgress_brand, this, _reset).call(this);
        }
      }
    }], [{
      key: "observedAttributes",
      get: function get() {
        return ["progress", "type"];
      }
    }]);
  }(/*#__PURE__*/_wrapNativeSuper(HTMLElement));
  _WebpackDevServerProgress = WebpackDevServerProgress;
  function _reset() {
    var _this$getAttribute, _Number;
    clearTimeout(this.animationTimer);
    this.animationTimer = null;
    var typeAttr = (_this$getAttribute = this.getAttribute("type")) === null || _this$getAttribute === void 0 ? void 0 : _this$getAttribute.toLowerCase();
    this.type = typeAttr === "circular" ? "circular" : "linear";
    var innerHTML = this.type === "circular" ? _circularTemplate.call(_WebpackDevServerProgress) : _linearTemplate.call(_WebpackDevServerProgress);
    this.shadowRoot.innerHTML = innerHTML;
    this.initialProgress = (_Number = Number(this.getAttribute("progress"))) !== null && _Number !== void 0 ? _Number : 0;
    _assertClassBrand(_WebpackDevServerProgress_brand, this, _update).call(this, this.initialProgress);
  }
  function _circularTemplate() {
    return "\n        <style>\n        :host {\n            width: 200px;\n            height: 200px;\n            position: fixed;\n            right: 5%;\n            top: 5%;\n            transition: opacity .25s ease-in-out;\n            z-index: 2147483645;\n        }\n\n        circle {\n            fill: #282d35;\n        }\n\n        path {\n            fill: rgba(0, 0, 0, 0);\n            stroke: rgb(186, 223, 172);\n            stroke-dasharray: 219.99078369140625;\n            stroke-dashoffset: -219.99078369140625;\n            stroke-width: 10;\n            transform: rotate(90deg) translate(0px, -80px);\n        }\n\n        text {\n            font-family: 'Open Sans', sans-serif;\n            font-size: 18px;\n            fill: #ffffff;\n            dominant-baseline: middle;\n            text-anchor: middle;\n        }\n\n        tspan#percent-super {\n            fill: #bdc3c7;\n            font-size: 0.45em;\n            baseline-shift: 10%;\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; transform: scale(1); }\n            100% { opacity: 0; transform: scale(0); }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <svg id=\"progress\" class=\"hidden noselect\" viewBox=\"0 0 80 80\">\n        <circle cx=\"50%\" cy=\"50%\" r=\"35\"></circle>\n        <path d=\"M5,40a35,35 0 1,0 70,0a35,35 0 1,0 -70,0\"></path>\n        <text x=\"50%\" y=\"51%\">\n            <tspan id=\"percent-value\">0</tspan>\n            <tspan id=\"percent-super\">%</tspan>\n        </text>\n        </svg>\n      ";
  }
  function _linearTemplate() {
    return "\n        <style>\n        :host {\n            position: fixed;\n            top: 0;\n            left: 0;\n            height: 4px;\n            width: 100vw;\n            z-index: 2147483645;\n        }\n\n        #bar {\n            width: 0%;\n            height: 4px;\n            background-color: rgb(186, 223, 172);\n        }\n\n        @keyframes fade {\n            0% { opacity: 1; }\n            100% { opacity: 0; }\n        }\n\n        .disappear {\n            animation: fade 0.3s;\n            animation-fill-mode: forwards;\n            animation-delay: 0.5s;\n        }\n\n        .hidden {\n            display: none;\n        }\n        </style>\n        <div id=\"progress\"></div>\n        ";
  }
  function _update(percent) {
    var element = this.shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      var path = this.shadowRoot.querySelector("path");
      var value = this.shadowRoot.querySelector("#percent-value");
      var offset = (100 - percent) / 100 * this.maxDashOffset;
      path.style.strokeDashoffset = offset;
      value.textContent = percent;
    } else {
      element.style.width = "".concat(percent, "%");
    }
    if (percent >= 100) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _hide).call(this);
    } else if (percent > 0) {
      _assertClassBrand(_WebpackDevServerProgress_brand, this, _show).call(this);
    }
  }
  function _show() {
    var element = this.shadowRoot.querySelector("#progress");
    element.classList.remove("hidden");
  }
  function _hide() {
    var _this2 = this;
    var element = this.shadowRoot.querySelector("#progress");
    if (this.type === "circular") {
      element.classList.add("disappear");
      element.addEventListener("animationend", function () {
        element.classList.add("hidden");
        _assertClassBrand(_WebpackDevServerProgress_brand, _this2, _update).call(_this2, 0);
      }, {
        once: true
      });
    } else if (this.type === "linear") {
      element.classList.add("disappear");
      this.animationTimer = setTimeout(function () {
        element.classList.remove("disappear");
        element.classList.add("hidden");
        element.style.width = "0%";
        _this2.animationTimer = null;
      }, 800);
    }
  }
  customElements.define("wds-progress", WebpackDevServerProgress);
}

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/socket.js":
/*!**********************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/socket.js ***!
  \**********************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   client: () => (/* binding */ client),
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* harmony import */ var _utils_log_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils/log.js */ "./node_modules/webpack-dev-server/client/utils/log.js");
/* provided dependency */ var __webpack_dev_server_client__ = __webpack_require__(/*! ./node_modules/webpack-dev-server/client/clients/WebSocketClient.js */ "./node_modules/webpack-dev-server/client/clients/WebSocketClient.js");
/* global __webpack_dev_server_client__ */




// this WebsocketClient is here as a default fallback, in case the client is not injected
/* eslint-disable camelcase */
var Client =
// eslint-disable-next-line no-nested-ternary
typeof __webpack_dev_server_client__ !== "undefined" ? typeof __webpack_dev_server_client__.default !== "undefined" ? __webpack_dev_server_client__.default : __webpack_dev_server_client__ : _clients_WebSocketClient_js__WEBPACK_IMPORTED_MODULE_0__["default"];
/* eslint-enable camelcase */

var retries = 0;
var maxRetries = 10;

// Initialized client is exported so external consumers can utilize the same instance
// It is mutable to enforce singleton
// eslint-disable-next-line import/no-mutable-exports
var client = null;
var timeout;

/**
 * @param {string} url
 * @param {{ [handler: string]: (data?: any, params?: any) => any }} handlers
 * @param {number} [reconnect]
 */
var socket = function initSocket(url, handlers, reconnect) {
  client = new Client(url);
  client.onOpen(function () {
    retries = 0;
    if (timeout) {
      clearTimeout(timeout);
    }
    if (typeof reconnect !== "undefined") {
      maxRetries = reconnect;
    }
  });
  client.onClose(function () {
    if (retries === 0) {
      handlers.close();
    }

    // Try to reconnect.
    client = null;

    // After 10 retries stop trying, to prevent logspam.
    if (retries < maxRetries) {
      // Exponentially increase timeout to reconnect.
      // Respectfully copied from the package `got`.
      // eslint-disable-next-line no-restricted-properties
      var retryInMs = 1000 * Math.pow(2, retries) + Math.random() * 100;
      retries += 1;
      _utils_log_js__WEBPACK_IMPORTED_MODULE_1__.log.info("Trying to reconnect...");
      timeout = setTimeout(function () {
        socket(url, handlers, reconnect);
      }, retryInMs);
    }
  });
  client.onMessage(
  /**
   * @param {any} data
   */
  function (data) {
    var message = JSON.parse(data);
    if (handlers[message.type]) {
      handlers[message.type](message.data, message.params);
    }
  });
};
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (socket);

/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/log.js":
/*!*************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/log.js ***!
  \*************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   log: () => (/* binding */ log),
/* harmony export */   setLogLevel: () => (/* binding */ setLogLevel)
/* harmony export */ });
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../modules/logger/index.js */ "./node_modules/webpack-dev-server/client/modules/logger/index.js");
/* harmony import */ var _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0__);

var name = "webpack-dev-server";
// default level is set on the client side, so it does not need
// to be set by the CLI or API
var defaultLevel = "info";

// options new options, merge with old options
/**
 * @param {false | true | "none" | "error" | "warn" | "info" | "log" | "verbose"} level
 * @returns {void}
 */
function setLogLevel(level) {
  _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().configureDefaultLogger({
    level: level
  });
}
setLogLevel(defaultLevel);
var log = _modules_logger_index_js__WEBPACK_IMPORTED_MODULE_0___default().getLogger(name);


/***/ }),

/***/ "./node_modules/webpack-dev-server/client/utils/sendMessage.js":
/*!*********************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/utils/sendMessage.js ***!
  \*********************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* global __resourceQuery WorkerGlobalScope */

// Send messages to the outside, so plugins can consume it.
/**
 * @param {string} type
 * @param {any} [data]
 */
function sendMsg(type, data) {
  if (typeof self !== "undefined" && (typeof WorkerGlobalScope === "undefined" || !(self instanceof WorkerGlobalScope))) {
    self.postMessage({
      type: "webpack".concat(type),
      data: data
    }, "*");
  }
}
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (sendMsg);

/***/ }),

/***/ "./node_modules/webpack/hot/dev-server.js":
/*!************************************************!*\
  !*** ./node_modules/webpack/hot/dev-server.js ***!
  \************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/
/* globals __webpack_hash__ */
if (true) {
	/** @type {undefined|string} */
	var lastHash;
	var upToDate = function upToDate() {
		return /** @type {string} */ (lastHash).indexOf(__webpack_require__.h()) >= 0;
	};
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");
	var check = function check() {
		module.hot
			.check(true)
			.then(function (updatedModules) {
				if (!updatedModules) {
					log(
						"warning",
						"[HMR] Cannot find update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log(
						"warning",
						"[HMR] (Probably because of restarting the webpack-dev-server)"
					);
					if (typeof window !== "undefined") {
						window.location.reload();
					}
					return;
				}

				if (!upToDate()) {
					check();
				}

				__webpack_require__(/*! ./log-apply-result */ "./node_modules/webpack/hot/log-apply-result.js")(updatedModules, updatedModules);

				if (upToDate()) {
					log("info", "[HMR] App is up to date.");
				}
			})
			.catch(function (err) {
				var status = module.hot.status();
				if (["abort", "fail"].indexOf(status) >= 0) {
					log(
						"warning",
						"[HMR] Cannot apply update. " +
							(typeof window !== "undefined"
								? "Need to do a full reload!"
								: "Please reload manually!")
					);
					log("warning", "[HMR] " + log.formatError(err));
					if (typeof window !== "undefined") {
						window.location.reload();
					}
				} else {
					log("warning", "[HMR] Update failed: " + log.formatError(err));
				}
			});
	};
	var hotEmitter = __webpack_require__(/*! ./emitter */ "./node_modules/webpack/hot/emitter.js");
	hotEmitter.on("webpackHotUpdate", function (currentHash) {
		lastHash = currentHash;
		if (!upToDate() && module.hot.status() === "idle") {
			log("info", "[HMR] Checking for updates on the server...");
			check();
		}
	});
	log("info", "[HMR] Waiting for update signal from WDS...");
} else // removed by dead control flow
{}


/***/ }),

/***/ "./node_modules/webpack/hot/emitter.js":
/*!*********************************************!*\
  !*** ./node_modules/webpack/hot/emitter.js ***!
  \*********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

var EventEmitter = __webpack_require__(/*! events */ "./node_modules/events/events.js");
module.exports = new EventEmitter();


/***/ }),

/***/ "./node_modules/webpack/hot/log-apply-result.js":
/*!******************************************************!*\
  !*** ./node_modules/webpack/hot/log-apply-result.js ***!
  \******************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

/*
	MIT License http://www.opensource.org/licenses/mit-license.php
	Author Tobias Koppers @sokra
*/

/**
 * @param {(string | number)[]} updatedModules updated modules
 * @param {(string | number)[] | null} renewedModules renewed modules
 */
module.exports = function (updatedModules, renewedModules) {
	var unacceptedModules = updatedModules.filter(function (moduleId) {
		return renewedModules && renewedModules.indexOf(moduleId) < 0;
	});
	var log = __webpack_require__(/*! ./log */ "./node_modules/webpack/hot/log.js");

	if (unacceptedModules.length > 0) {
		log(
			"warning",
			"[HMR] The following modules couldn't be hot updated: (They would need a full reload!)"
		);
		unacceptedModules.forEach(function (moduleId) {
			log("warning", "[HMR]  - " + moduleId);
		});
	}

	if (!renewedModules || renewedModules.length === 0) {
		log("info", "[HMR] Nothing hot updated.");
	} else {
		log("info", "[HMR] Updated modules:");
		renewedModules.forEach(function (moduleId) {
			if (typeof moduleId === "string" && moduleId.indexOf("!") !== -1) {
				var parts = moduleId.split("!");
				log.groupCollapsed("info", "[HMR]  - " + parts.pop());
				log("info", "[HMR]  - " + moduleId);
				log.groupEnd("info");
			} else {
				log("info", "[HMR]  - " + moduleId);
			}
		});
		var numberIds = renewedModules.every(function (moduleId) {
			return typeof moduleId === "number";
		});
		if (numberIds)
			log(
				"info",
				'[HMR] Consider using the optimization.moduleIds: "named" for module names.'
			);
	}
};


/***/ }),

/***/ "./node_modules/webpack/hot/log.js":
/*!*****************************************!*\
  !*** ./node_modules/webpack/hot/log.js ***!
  \*****************************************/
/***/ ((module) => {

/** @typedef {"info" | "warning" | "error"} LogLevel */

/** @type {LogLevel} */
var logLevel = "info";

function dummy() {}

/**
 * @param {LogLevel} level log level
 * @returns {boolean} true, if should log
 */
function shouldLog(level) {
	var shouldLog =
		(logLevel === "info" && level === "info") ||
		(["info", "warning"].indexOf(logLevel) >= 0 && level === "warning") ||
		(["info", "warning", "error"].indexOf(logLevel) >= 0 && level === "error");
	return shouldLog;
}

/**
 * @param {(msg?: string) => void} logFn log function
 * @returns {(level: LogLevel, msg?: string) => void} function that logs when log level is sufficient
 */
function logGroup(logFn) {
	return function (level, msg) {
		if (shouldLog(level)) {
			logFn(msg);
		}
	};
}

/**
 * @param {LogLevel} level log level
 * @param {string|Error} msg message
 */
module.exports = function (level, msg) {
	if (shouldLog(level)) {
		if (level === "info") {
			console.log(msg);
		} else if (level === "warning") {
			console.warn(msg);
		} else if (level === "error") {
			console.error(msg);
		}
	}
};

/**
 * @param {Error} err error
 * @returns {string} formatted error
 */
module.exports.formatError = function (err) {
	var message = err.message;
	var stack = err.stack;
	if (!stack) {
		return message;
	} else if (stack.indexOf(message) < 0) {
		return message + "\n" + stack;
	}
	return stack;
};

var group = console.group || dummy;
var groupCollapsed = console.groupCollapsed || dummy;
var groupEnd = console.groupEnd || dummy;

module.exports.group = logGroup(group);

module.exports.groupCollapsed = logGroup(groupCollapsed);

module.exports.groupEnd = logGroup(groupEnd);

/**
 * @param {LogLevel} level log level
 */
module.exports.setLogLevel = function (level) {
	logLevel = level;
};


/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

"use strict";
__webpack_require__.r(__webpack_exports__);


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		var execOptions = { id: moduleId, module: module, factory: __webpack_modules__[moduleId], require: __webpack_require__ };
/******/ 		__webpack_require__.i.forEach(function(handler) { handler(execOptions); });
/******/ 		module = execOptions.module;
/******/ 		execOptions.factory.call(module.exports, module, module.exports, execOptions.require);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = __webpack_module_cache__;
/******/ 	
/******/ 	// expose the module execution interceptor
/******/ 	__webpack_require__.i = [];
/******/ 	
/******/ 	// the startup function
/******/ 	__webpack_require__.x = x => {};
/************************************************************************/
/******/ 	/* webpack/runtime/federation runtime */
/******/ 	(() => {
/******/ 		if(!__webpack_require__.federation){
/******/ 			__webpack_require__.federation = {
/******/ 				initOptions: {"name":"particle","remotes":[],"shareStrategy":"version-first"},
/******/ 				chunkMatcher: function(chunkId) {return true},
/******/ 				rootOutputDir: "",
/******/ 				initialConsumes: undefined,
/******/ 				bundlerRuntimeOptions: {}
/******/ 			};
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/ensure chunk */
/******/ 	(() => {
/******/ 		__webpack_require__.f = {};
/******/ 		// This file contains only the entry chunk.
/******/ 		// The chunk loading function for additional chunks
/******/ 		__webpack_require__.e = (chunkId) => {
/******/ 			return Promise.all(Object.keys(__webpack_require__.f).reduce((promises, key) => {
/******/ 				__webpack_require__.f[key](chunkId, promises);
/******/ 				return promises;
/******/ 			}, []));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.u = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + ".js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get javascript update chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.hu = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return "" + chunkId + "." + __webpack_require__.h() + ".hot-update.js";
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get mini-css chunk filename */
/******/ 	(() => {
/******/ 		// This function allow to reference all chunks
/******/ 		__webpack_require__.miniCssF = (chunkId) => {
/******/ 			// return url for filenames based on template
/******/ 			return undefined;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/get update manifest filename */
/******/ 	(() => {
/******/ 		__webpack_require__.hmrF = () => ("main." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("6051ec629f4b8fa7f6eb")
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/load script */
/******/ 	(() => {
/******/ 		var inProgress = {};
/******/ 		var dataWebpackPrefix = "@reneos/slider.mods.particle:";
/******/ 		// loadScript function to load a script via script tag
/******/ 		__webpack_require__.l = (url, done, key, chunkId) => {
/******/ 			if(inProgress[url]) { inProgress[url].push(done); return; }
/******/ 			var script, needAttach;
/******/ 			if(key !== undefined) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				for(var i = 0; i < scripts.length; i++) {
/******/ 					var s = scripts[i];
/******/ 					if(s.getAttribute("src") == url || s.getAttribute("data-webpack") == dataWebpackPrefix + key) { script = s; break; }
/******/ 				}
/******/ 			}
/******/ 			if(!script) {
/******/ 				needAttach = true;
/******/ 				script = document.createElement('script');
/******/ 		
/******/ 				script.charset = 'utf-8';
/******/ 				script.timeout = 120;
/******/ 				if (__webpack_require__.nc) {
/******/ 					script.setAttribute("nonce", __webpack_require__.nc);
/******/ 				}
/******/ 				script.setAttribute("data-webpack", dataWebpackPrefix + key);
/******/ 		
/******/ 				script.src = url;
/******/ 			}
/******/ 			inProgress[url] = [done];
/******/ 			var onScriptComplete = (prev, event) => {
/******/ 				// avoid mem leaks in IE.
/******/ 				script.onerror = script.onload = null;
/******/ 				clearTimeout(timeout);
/******/ 				var doneFns = inProgress[url];
/******/ 				delete inProgress[url];
/******/ 				script.parentNode && script.parentNode.removeChild(script);
/******/ 				doneFns && doneFns.forEach((fn) => (fn(event)));
/******/ 				if(prev) return prev(event);
/******/ 			}
/******/ 			var timeout = setTimeout(onScriptComplete.bind(null, undefined, { type: 'timeout', target: script }), 120000);
/******/ 			script.onerror = onScriptComplete.bind(null, script.onerror);
/******/ 			script.onload = onScriptComplete.bind(null, script.onload);
/******/ 			needAttach && document.head.appendChild(script);
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			if(!initScope) initScope = [];
/******/ 			// handling circular init calls
/******/ 			var initToken = initTokens[name];
/******/ 			if(!initToken) initToken = initTokens[name] = {};
/******/ 			if(initScope.indexOf(initToken) >= 0) return;
/******/ 			initScope.push(initToken);
/******/ 			// only runs once
/******/ 			if(initPromises[name]) return initPromises[name];
/******/ 			// creates a new share scope if needed
/******/ 			if(!__webpack_require__.o(__webpack_require__.S, name)) __webpack_require__.S[name] = {};
/******/ 			// runs all init snippets from all modules reachable
/******/ 			var scope = __webpack_require__.S[name];
/******/ 			var warn = (msg) => {
/******/ 				if (typeof console !== "undefined" && console.warn) console.warn(msg);
/******/ 			};
/******/ 			var uniqueName = "@reneos/slider.mods.particle";
/******/ 			var register = (name, version, factory, eager) => {
/******/ 				var versions = scope[name] = scope[name] || {};
/******/ 				var activeVersion = versions[version];
/******/ 				if(!activeVersion || (!activeVersion.loaded && (!eager != !activeVersion.eager ? eager : uniqueName > activeVersion.from))) versions[version] = { get: factory, from: uniqueName, eager: !!eager };
/******/ 			};
/******/ 			var initExternal = (id) => {
/******/ 				var handleError = (err) => (warn("Initialization of sharing external failed: " + err));
/******/ 				try {
/******/ 					var module = __webpack_require__(id);
/******/ 					if(!module) return;
/******/ 					var initFn = (module) => (module && module.init && module.init(__webpack_require__.S[name], initScope))
/******/ 					if(module.then) return promises.push(module.then(initFn, handleError));
/******/ 					var initResult = initFn(module);
/******/ 					if(initResult && initResult.then) return promises.push(initResult['catch'](handleError));
/******/ 				} catch(err) { handleError(err); }
/******/ 			}
/******/ 			var promises = [];
/******/ 			switch(name) {
/******/ 				case "default": {
/******/ 					register("@reneos/app", "1.0.6", () => (__webpack_require__.e("node_modules_reneos_app_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/@reneos/app/index.js */ "./node_modules/@reneos/app/index.js"))))));
/******/ 					register("three", "0.180.0", () => (__webpack_require__.e("vendors-node_modules_three_build_three_module_js").then(() => (() => (__webpack_require__(/*! ./node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js"))))));
/******/ 					register("vue", "3.5.22", () => (__webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm-bundler_js").then(() => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))))));
/******/ 				}
/******/ 				break;
/******/ 			}
/******/ 			if(!promises.length) return initPromises[name] = 1;
/******/ 			return initPromises[name] = Promise.all(promises).then(() => (initPromises[name] = 1));
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/sharing */
/******/ 	(() => {
/******/ 		__webpack_require__.federation.initOptions.shared = {	"@reneos/app": [{	version: "1.0.6",
/******/ 				get: () => (__webpack_require__.e("node_modules_reneos_app_index_js").then(() => (() => (__webpack_require__(/*! ./node_modules/@reneos/app/index.js */ "./node_modules/@reneos/app/index.js"))))),
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"singleton":false,"layer":null}},],	"three": [{	version: "0.180.0",
/******/ 				get: () => (__webpack_require__.e("vendors-node_modules_three_build_three_module_js").then(() => (() => (__webpack_require__(/*! ./node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js"))))),
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"singleton":false,"layer":null}},],	"vue": [{	version: "3.5.22",
/******/ 				get: () => (__webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm-bundler_js").then(() => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))))),
/******/ 				scope: ["default"],
/******/ 				shareConfig: {"eager":false,"singleton":false,"layer":null}},],}
/******/ 		__webpack_require__.S = {};
/******/ 		var initPromises = {};
/******/ 		var initTokens = {};
/******/ 		__webpack_require__.I = (name, initScope) => {
/******/ 			return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 				webpackRequire: __webpack_require__,
/******/ 				initPromises: initPromises,
/******/ 				initTokens: initTokens,
/******/ 				initScope: initScope,
/******/ 			})
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hot module replacement */
/******/ 	(() => {
/******/ 		var currentModuleData = {};
/******/ 		var installedModules = __webpack_require__.c;
/******/ 		
/******/ 		// module and require creation
/******/ 		var currentChildModule;
/******/ 		var currentParents = [];
/******/ 		
/******/ 		// status
/******/ 		var registeredStatusHandlers = [];
/******/ 		var currentStatus = "idle";
/******/ 		
/******/ 		// while downloading
/******/ 		var blockingPromises = 0;
/******/ 		var blockingPromisesWaiting = [];
/******/ 		
/******/ 		// The update info
/******/ 		var currentUpdateApplyHandlers;
/******/ 		var queuedInvalidatedModules;
/******/ 		
/******/ 		__webpack_require__.hmrD = currentModuleData;
/******/ 		
/******/ 		__webpack_require__.i.push(function (options) {
/******/ 			var module = options.module;
/******/ 			var require = createRequire(options.require, options.id);
/******/ 			module.hot = createModuleHotObject(options.id, module);
/******/ 			module.parents = currentParents;
/******/ 			module.children = [];
/******/ 			currentParents = [];
/******/ 			options.require = require;
/******/ 		});
/******/ 		
/******/ 		__webpack_require__.hmrC = {};
/******/ 		__webpack_require__.hmrI = {};
/******/ 		
/******/ 		function createRequire(require, moduleId) {
/******/ 			var me = installedModules[moduleId];
/******/ 			if (!me) return require;
/******/ 			var fn = function (request) {
/******/ 				if (me.hot.active) {
/******/ 					if (installedModules[request]) {
/******/ 						var parents = installedModules[request].parents;
/******/ 						if (parents.indexOf(moduleId) === -1) {
/******/ 							parents.push(moduleId);
/******/ 						}
/******/ 					} else {
/******/ 						currentParents = [moduleId];
/******/ 						currentChildModule = request;
/******/ 					}
/******/ 					if (me.children.indexOf(request) === -1) {
/******/ 						me.children.push(request);
/******/ 					}
/******/ 				} else {
/******/ 					console.warn(
/******/ 						"[HMR] unexpected require(" +
/******/ 							request +
/******/ 							") from disposed module " +
/******/ 							moduleId
/******/ 					);
/******/ 					currentParents = [];
/******/ 				}
/******/ 				return require(request);
/******/ 			};
/******/ 			var createPropertyDescriptor = function (name) {
/******/ 				return {
/******/ 					configurable: true,
/******/ 					enumerable: true,
/******/ 					get: function () {
/******/ 						return require[name];
/******/ 					},
/******/ 					set: function (value) {
/******/ 						require[name] = value;
/******/ 					}
/******/ 				};
/******/ 			};
/******/ 			for (var name in require) {
/******/ 				if (Object.prototype.hasOwnProperty.call(require, name) && name !== "e") {
/******/ 					Object.defineProperty(fn, name, createPropertyDescriptor(name));
/******/ 				}
/******/ 			}
/******/ 			fn.e = function (chunkId, fetchPriority) {
/******/ 				return trackBlockingPromise(require.e(chunkId, fetchPriority));
/******/ 			};
/******/ 			return fn;
/******/ 		}
/******/ 		
/******/ 		function createModuleHotObject(moduleId, me) {
/******/ 			var _main = currentChildModule !== moduleId;
/******/ 			var hot = {
/******/ 				// private stuff
/******/ 				_acceptedDependencies: {},
/******/ 				_acceptedErrorHandlers: {},
/******/ 				_declinedDependencies: {},
/******/ 				_selfAccepted: false,
/******/ 				_selfDeclined: false,
/******/ 				_selfInvalidated: false,
/******/ 				_disposeHandlers: [],
/******/ 				_main: _main,
/******/ 				_requireSelf: function () {
/******/ 					currentParents = me.parents.slice();
/******/ 					currentChildModule = _main ? undefined : moduleId;
/******/ 					__webpack_require__(moduleId);
/******/ 				},
/******/ 		
/******/ 				// Module API
/******/ 				active: true,
/******/ 				accept: function (dep, callback, errorHandler) {
/******/ 					if (dep === undefined) hot._selfAccepted = true;
/******/ 					else if (typeof dep === "function") hot._selfAccepted = dep;
/******/ 					else if (typeof dep === "object" && dep !== null) {
/******/ 						for (var i = 0; i < dep.length; i++) {
/******/ 							hot._acceptedDependencies[dep[i]] = callback || function () {};
/******/ 							hot._acceptedErrorHandlers[dep[i]] = errorHandler;
/******/ 						}
/******/ 					} else {
/******/ 						hot._acceptedDependencies[dep] = callback || function () {};
/******/ 						hot._acceptedErrorHandlers[dep] = errorHandler;
/******/ 					}
/******/ 				},
/******/ 				decline: function (dep) {
/******/ 					if (dep === undefined) hot._selfDeclined = true;
/******/ 					else if (typeof dep === "object" && dep !== null)
/******/ 						for (var i = 0; i < dep.length; i++)
/******/ 							hot._declinedDependencies[dep[i]] = true;
/******/ 					else hot._declinedDependencies[dep] = true;
/******/ 				},
/******/ 				dispose: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				addDisposeHandler: function (callback) {
/******/ 					hot._disposeHandlers.push(callback);
/******/ 				},
/******/ 				removeDisposeHandler: function (callback) {
/******/ 					var idx = hot._disposeHandlers.indexOf(callback);
/******/ 					if (idx >= 0) hot._disposeHandlers.splice(idx, 1);
/******/ 				},
/******/ 				invalidate: function () {
/******/ 					this._selfInvalidated = true;
/******/ 					switch (currentStatus) {
/******/ 						case "idle":
/******/ 							currentUpdateApplyHandlers = [];
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							setStatus("ready");
/******/ 							break;
/******/ 						case "ready":
/******/ 							Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 								__webpack_require__.hmrI[key](
/******/ 									moduleId,
/******/ 									currentUpdateApplyHandlers
/******/ 								);
/******/ 							});
/******/ 							break;
/******/ 						case "prepare":
/******/ 						case "check":
/******/ 						case "dispose":
/******/ 						case "apply":
/******/ 							(queuedInvalidatedModules = queuedInvalidatedModules || []).push(
/******/ 								moduleId
/******/ 							);
/******/ 							break;
/******/ 						default:
/******/ 							// ignore requests in error states
/******/ 							break;
/******/ 					}
/******/ 				},
/******/ 		
/******/ 				// Management API
/******/ 				check: hotCheck,
/******/ 				apply: hotApply,
/******/ 				status: function (l) {
/******/ 					if (!l) return currentStatus;
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				addStatusHandler: function (l) {
/******/ 					registeredStatusHandlers.push(l);
/******/ 				},
/******/ 				removeStatusHandler: function (l) {
/******/ 					var idx = registeredStatusHandlers.indexOf(l);
/******/ 					if (idx >= 0) registeredStatusHandlers.splice(idx, 1);
/******/ 				},
/******/ 		
/******/ 				// inherit from previous dispose call
/******/ 				data: currentModuleData[moduleId]
/******/ 			};
/******/ 			currentChildModule = undefined;
/******/ 			return hot;
/******/ 		}
/******/ 		
/******/ 		function setStatus(newStatus) {
/******/ 			currentStatus = newStatus;
/******/ 			var results = [];
/******/ 		
/******/ 			for (var i = 0; i < registeredStatusHandlers.length; i++)
/******/ 				results[i] = registeredStatusHandlers[i].call(null, newStatus);
/******/ 		
/******/ 			return Promise.all(results).then(function () {});
/******/ 		}
/******/ 		
/******/ 		function unblock() {
/******/ 			if (--blockingPromises === 0) {
/******/ 				setStatus("ready").then(function () {
/******/ 					if (blockingPromises === 0) {
/******/ 						var list = blockingPromisesWaiting;
/******/ 						blockingPromisesWaiting = [];
/******/ 						for (var i = 0; i < list.length; i++) {
/******/ 							list[i]();
/******/ 						}
/******/ 					}
/******/ 				});
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function trackBlockingPromise(promise) {
/******/ 			switch (currentStatus) {
/******/ 				case "ready":
/******/ 					setStatus("prepare");
/******/ 				/* fallthrough */
/******/ 				case "prepare":
/******/ 					blockingPromises++;
/******/ 					promise.then(unblock, unblock);
/******/ 					return promise;
/******/ 				default:
/******/ 					return promise;
/******/ 			}
/******/ 		}
/******/ 		
/******/ 		function waitForBlockingPromises(fn) {
/******/ 			if (blockingPromises === 0) return fn();
/******/ 			return new Promise(function (resolve) {
/******/ 				blockingPromisesWaiting.push(function () {
/******/ 					resolve(fn());
/******/ 				});
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		function hotCheck(applyOnUpdate) {
/******/ 			if (currentStatus !== "idle") {
/******/ 				throw new Error("check() is only allowed in idle status");
/******/ 			}
/******/ 			return setStatus("check")
/******/ 				.then(__webpack_require__.hmrM)
/******/ 				.then(function (update) {
/******/ 					if (!update) {
/******/ 						return setStatus(applyInvalidatedModules() ? "ready" : "idle").then(
/******/ 							function () {
/******/ 								return null;
/******/ 							}
/******/ 						);
/******/ 					}
/******/ 		
/******/ 					return setStatus("prepare").then(function () {
/******/ 						var updatedModules = [];
/******/ 						currentUpdateApplyHandlers = [];
/******/ 		
/******/ 						return Promise.all(
/******/ 							Object.keys(__webpack_require__.hmrC).reduce(function (
/******/ 								promises,
/******/ 								key
/******/ 							) {
/******/ 								__webpack_require__.hmrC[key](
/******/ 									update.c,
/******/ 									update.r,
/******/ 									update.m,
/******/ 									promises,
/******/ 									currentUpdateApplyHandlers,
/******/ 									updatedModules
/******/ 								);
/******/ 								return promises;
/******/ 							}, [])
/******/ 						).then(function () {
/******/ 							return waitForBlockingPromises(function () {
/******/ 								if (applyOnUpdate) {
/******/ 									return internalApply(applyOnUpdate);
/******/ 								}
/******/ 								return setStatus("ready").then(function () {
/******/ 									return updatedModules;
/******/ 								});
/******/ 							});
/******/ 						});
/******/ 					});
/******/ 				});
/******/ 		}
/******/ 		
/******/ 		function hotApply(options) {
/******/ 			if (currentStatus !== "ready") {
/******/ 				return Promise.resolve().then(function () {
/******/ 					throw new Error(
/******/ 						"apply() is only allowed in ready status (state: " +
/******/ 							currentStatus +
/******/ 							")"
/******/ 					);
/******/ 				});
/******/ 			}
/******/ 			return internalApply(options);
/******/ 		}
/******/ 		
/******/ 		function internalApply(options) {
/******/ 			options = options || {};
/******/ 		
/******/ 			applyInvalidatedModules();
/******/ 		
/******/ 			var results = currentUpdateApplyHandlers.map(function (handler) {
/******/ 				return handler(options);
/******/ 			});
/******/ 			currentUpdateApplyHandlers = undefined;
/******/ 		
/******/ 			var errors = results
/******/ 				.map(function (r) {
/******/ 					return r.error;
/******/ 				})
/******/ 				.filter(Boolean);
/******/ 		
/******/ 			if (errors.length > 0) {
/******/ 				return setStatus("abort").then(function () {
/******/ 					throw errors[0];
/******/ 				});
/******/ 			}
/******/ 		
/******/ 			// Now in "dispose" phase
/******/ 			var disposePromise = setStatus("dispose");
/******/ 		
/******/ 			results.forEach(function (result) {
/******/ 				if (result.dispose) result.dispose();
/******/ 			});
/******/ 		
/******/ 			// Now in "apply" phase
/******/ 			var applyPromise = setStatus("apply");
/******/ 		
/******/ 			var error;
/******/ 			var reportError = function (err) {
/******/ 				if (!error) error = err;
/******/ 			};
/******/ 		
/******/ 			var outdatedModules = [];
/******/ 		
/******/ 			var onAccepted = function () {
/******/ 				return Promise.all([disposePromise, applyPromise]).then(function () {
/******/ 					// handle errors in accept handlers and self accepted module load
/******/ 					if (error) {
/******/ 						return setStatus("fail").then(function () {
/******/ 							throw error;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					if (queuedInvalidatedModules) {
/******/ 						return internalApply(options).then(function (list) {
/******/ 							outdatedModules.forEach(function (moduleId) {
/******/ 								if (list.indexOf(moduleId) < 0) list.push(moduleId);
/******/ 							});
/******/ 							return list;
/******/ 						});
/******/ 					}
/******/ 		
/******/ 					return setStatus("idle").then(function () {
/******/ 						return outdatedModules;
/******/ 					});
/******/ 				});
/******/ 			};
/******/ 		
/******/ 			return Promise.all(
/******/ 				results
/******/ 					.filter(function (result) {
/******/ 						return result.apply;
/******/ 					})
/******/ 					.map(function (result) {
/******/ 						return result.apply(reportError);
/******/ 					})
/******/ 			)
/******/ 				.then(function (applyResults) {
/******/ 					applyResults.forEach(function (modules) {
/******/ 						if (modules) {
/******/ 							for (var i = 0; i < modules.length; i++) {
/******/ 								outdatedModules.push(modules[i]);
/******/ 							}
/******/ 						}
/******/ 					});
/******/ 				})
/******/ 				.then(onAccepted);
/******/ 		}
/******/ 		
/******/ 		function applyInvalidatedModules() {
/******/ 			if (queuedInvalidatedModules) {
/******/ 				if (!currentUpdateApplyHandlers) currentUpdateApplyHandlers = [];
/******/ 				Object.keys(__webpack_require__.hmrI).forEach(function (key) {
/******/ 					queuedInvalidatedModules.forEach(function (moduleId) {
/******/ 						__webpack_require__.hmrI[key](
/******/ 							moduleId,
/******/ 							currentUpdateApplyHandlers
/******/ 						);
/******/ 					});
/******/ 				});
/******/ 				queuedInvalidatedModules = undefined;
/******/ 				return true;
/******/ 			}
/******/ 		}
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/mods/particle/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/css loading */
/******/ 	(() => {
/******/ 		if (typeof document === "undefined") return;
/******/ 		var createStylesheet = (chunkId, fullhref, oldTag, resolve, reject) => {
/******/ 			var linkTag = document.createElement("link");
/******/ 		
/******/ 			linkTag.rel = "stylesheet";
/******/ 			linkTag.type = "text/css";
/******/ 			if (__webpack_require__.nc) {
/******/ 				linkTag.nonce = __webpack_require__.nc;
/******/ 			}
/******/ 			var onLinkComplete = (event) => {
/******/ 				// avoid mem leaks.
/******/ 				linkTag.onerror = linkTag.onload = null;
/******/ 				if (event.type === 'load') {
/******/ 					resolve();
/******/ 				} else {
/******/ 					var errorType = event && event.type;
/******/ 					var realHref = event && event.target && event.target.href || fullhref;
/******/ 					var err = new Error("Loading CSS chunk " + chunkId + " failed.\n(" + errorType + ": " + realHref + ")");
/******/ 					err.name = "ChunkLoadError";
/******/ 					err.code = "CSS_CHUNK_LOAD_FAILED";
/******/ 					err.type = errorType;
/******/ 					err.request = realHref;
/******/ 					if (linkTag.parentNode) linkTag.parentNode.removeChild(linkTag)
/******/ 					reject(err);
/******/ 				}
/******/ 			}
/******/ 			linkTag.onerror = linkTag.onload = onLinkComplete;
/******/ 			linkTag.href = fullhref;
/******/ 		
/******/ 		
/******/ 			if (oldTag) {
/******/ 				oldTag.parentNode.insertBefore(linkTag, oldTag.nextSibling);
/******/ 			} else {
/******/ 				document.head.appendChild(linkTag);
/******/ 			}
/******/ 			return linkTag;
/******/ 		};
/******/ 		var findStylesheet = (href, fullhref) => {
/******/ 			var existingLinkTags = document.getElementsByTagName("link");
/******/ 			for(var i = 0; i < existingLinkTags.length; i++) {
/******/ 				var tag = existingLinkTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href") || tag.getAttribute("href");
/******/ 				if(tag.rel === "stylesheet" && (dataHref === href || dataHref === fullhref)) return tag;
/******/ 			}
/******/ 			var existingStyleTags = document.getElementsByTagName("style");
/******/ 			for(var i = 0; i < existingStyleTags.length; i++) {
/******/ 				var tag = existingStyleTags[i];
/******/ 				var dataHref = tag.getAttribute("data-href");
/******/ 				if(dataHref === href || dataHref === fullhref) return tag;
/******/ 			}
/******/ 		};
/******/ 		var loadStylesheet = (chunkId) => {
/******/ 			return new Promise((resolve, reject) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				if(findStylesheet(href, fullhref)) return resolve();
/******/ 				createStylesheet(chunkId, fullhref, null, resolve, reject);
/******/ 			});
/******/ 		}
/******/ 		// no chunk loading
/******/ 		
/******/ 		var oldTags = [];
/******/ 		var newTags = [];
/******/ 		var applyHandler = (options) => {
/******/ 			return { dispose: () => {
/******/ 				for(var i = 0; i < oldTags.length; i++) {
/******/ 					var oldTag = oldTags[i];
/******/ 					if(oldTag.parentNode) oldTag.parentNode.removeChild(oldTag);
/******/ 				}
/******/ 				oldTags.length = 0;
/******/ 			}, apply: () => {
/******/ 				for(var i = 0; i < newTags.length; i++) newTags[i].rel = "stylesheet";
/******/ 				newTags.length = 0;
/******/ 			} };
/******/ 		}
/******/ 		__webpack_require__.hmrC.miniCss = (chunkIds, removedChunks, removedModules, promises, applyHandlers, updatedModulesList) => {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			chunkIds.forEach((chunkId) => {
/******/ 				var href = __webpack_require__.miniCssF(chunkId);
/******/ 				var fullhref = __webpack_require__.p + href;
/******/ 				var oldTag = findStylesheet(href, fullhref);
/******/ 				if(!oldTag) return;
/******/ 				promises.push(new Promise((resolve, reject) => {
/******/ 					var tag = createStylesheet(chunkId, fullhref, oldTag, () => {
/******/ 						tag.as = "style";
/******/ 						tag.rel = "preload";
/******/ 						resolve();
/******/ 					}, reject);
/******/ 					oldTags.push(oldTag);
/******/ 					newTags.push(tag);
/******/ 				}));
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/embed/federation */
/******/ 	(() => {
/******/ 		var prevStartup = __webpack_require__.x;
/******/ 		var hasRun = false;
/******/ 		__webpack_require__.x = () => {
/******/ 			if (!hasRun) {
/******/ 			  hasRun = true;
/******/ 			  __webpack_require__(/*! ./node_modules/.federation/entry.d3c51ad8708eeabfdf9e1e53582151dc.js */ "./node_modules/.federation/entry.d3c51ad8708eeabfdf9e1e53582151dc.js");
/******/ 			}
/******/ 			if (typeof prevStartup === 'function') {
/******/ 			  return prevStartup();
/******/ 			} else {
/******/ 			  console.warn('[Module Federation] prevStartup is not a function, skipping startup execution');
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		// no baseURI
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = __webpack_require__.hmrS_jsonp = __webpack_require__.hmrS_jsonp || {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.f.j = (chunkId, promises) => {
/******/ 				// JSONP chunk loading for javascript
/******/ 				var installedChunkData = __webpack_require__.o(installedChunks, chunkId) ? installedChunks[chunkId] : undefined;
/******/ 				if(installedChunkData !== 0) { // 0 means "already installed".
/******/ 		
/******/ 					// a Promise means "currently loading".
/******/ 					if(installedChunkData) {
/******/ 						promises.push(installedChunkData[2]);
/******/ 					} else {
/******/ 						if(true) { // all chunks have JS
/******/ 							// setup Promise in chunk cache
/******/ 							var promise = new Promise((resolve, reject) => (installedChunkData = installedChunks[chunkId] = [resolve, reject]));
/******/ 							promises.push(installedChunkData[2] = promise);
/******/ 		
/******/ 							// start chunk loading
/******/ 							var url = __webpack_require__.p + __webpack_require__.u(chunkId);
/******/ 							// create error before stack unwound to get useful stacktrace later
/******/ 							var error = new Error();
/******/ 							var loadingEnded = (event) => {
/******/ 								if(__webpack_require__.o(installedChunks, chunkId)) {
/******/ 									installedChunkData = installedChunks[chunkId];
/******/ 									if(installedChunkData !== 0) installedChunks[chunkId] = undefined;
/******/ 									if(installedChunkData) {
/******/ 										var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 										var realSrc = event && event.target && event.target.src;
/******/ 										error.message = 'Loading chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 										error.name = 'ChunkLoadError';
/******/ 										error.type = errorType;
/******/ 										error.request = realSrc;
/******/ 										installedChunkData[1](error);
/******/ 									}
/******/ 								}
/******/ 							};
/******/ 							__webpack_require__.l(url, loadingEnded, "chunk-" + chunkId, chunkId);
/******/ 						}
/******/ 					}
/******/ 				}
/******/ 		};
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		var currentUpdatedModulesList;
/******/ 		var waitingUpdateResolves = {};
/******/ 		function loadUpdateChunk(chunkId, updatedModulesList) {
/******/ 			currentUpdatedModulesList = updatedModulesList;
/******/ 			return new Promise((resolve, reject) => {
/******/ 				waitingUpdateResolves[chunkId] = resolve;
/******/ 				// start update chunk loading
/******/ 				var url = __webpack_require__.p + __webpack_require__.hu(chunkId);
/******/ 				// create error before stack unwound to get useful stacktrace later
/******/ 				var error = new Error();
/******/ 				var loadingEnded = (event) => {
/******/ 					if(waitingUpdateResolves[chunkId]) {
/******/ 						waitingUpdateResolves[chunkId] = undefined
/******/ 						var errorType = event && (event.type === 'load' ? 'missing' : event.type);
/******/ 						var realSrc = event && event.target && event.target.src;
/******/ 						error.message = 'Loading hot update chunk ' + chunkId + ' failed.\n(' + errorType + ': ' + realSrc + ')';
/******/ 						error.name = 'ChunkLoadError';
/******/ 						error.type = errorType;
/******/ 						error.request = realSrc;
/******/ 						reject(error);
/******/ 					}
/******/ 				};
/******/ 				__webpack_require__.l(url, loadingEnded);
/******/ 			});
/******/ 		}
/******/ 		
/******/ 		self["webpackHotUpdate_reneos_slider_mods_particle"] = (chunkId, moreModules, runtime) => {
/******/ 			for(var moduleId in moreModules) {
/******/ 				if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 					currentUpdate[moduleId] = moreModules[moduleId];
/******/ 					if(currentUpdatedModulesList) currentUpdatedModulesList.push(moduleId);
/******/ 				}
/******/ 			}
/******/ 			if(runtime) currentUpdateRuntime.push(runtime);
/******/ 			if(waitingUpdateResolves[chunkId]) {
/******/ 				waitingUpdateResolves[chunkId]();
/******/ 				waitingUpdateResolves[chunkId] = undefined;
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		var currentUpdateChunks;
/******/ 		var currentUpdate;
/******/ 		var currentUpdateRemovedChunks;
/******/ 		var currentUpdateRuntime;
/******/ 		function applyHandler(options) {
/******/ 			if (__webpack_require__.f) delete __webpack_require__.f.jsonpHmr;
/******/ 			currentUpdateChunks = undefined;
/******/ 			function getAffectedModuleEffects(updateModuleId) {
/******/ 				var outdatedModules = [updateModuleId];
/******/ 				var outdatedDependencies = {};
/******/ 		
/******/ 				var queue = outdatedModules.map(function (id) {
/******/ 					return {
/******/ 						chain: [id],
/******/ 						id: id
/******/ 					};
/******/ 				});
/******/ 				while (queue.length > 0) {
/******/ 					var queueItem = queue.pop();
/******/ 					var moduleId = queueItem.id;
/******/ 					var chain = queueItem.chain;
/******/ 					var module = __webpack_require__.c[moduleId];
/******/ 					if (
/******/ 						!module ||
/******/ 						(module.hot._selfAccepted && !module.hot._selfInvalidated)
/******/ 					)
/******/ 						continue;
/******/ 					if (module.hot._selfDeclined) {
/******/ 						return {
/******/ 							type: "self-declined",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					if (module.hot._main) {
/******/ 						return {
/******/ 							type: "unaccepted",
/******/ 							chain: chain,
/******/ 							moduleId: moduleId
/******/ 						};
/******/ 					}
/******/ 					for (var i = 0; i < module.parents.length; i++) {
/******/ 						var parentId = module.parents[i];
/******/ 						var parent = __webpack_require__.c[parentId];
/******/ 						if (!parent) continue;
/******/ 						if (parent.hot._declinedDependencies[moduleId]) {
/******/ 							return {
/******/ 								type: "declined",
/******/ 								chain: chain.concat([parentId]),
/******/ 								moduleId: moduleId,
/******/ 								parentId: parentId
/******/ 							};
/******/ 						}
/******/ 						if (outdatedModules.indexOf(parentId) !== -1) continue;
/******/ 						if (parent.hot._acceptedDependencies[moduleId]) {
/******/ 							if (!outdatedDependencies[parentId])
/******/ 								outdatedDependencies[parentId] = [];
/******/ 							addAllToSet(outdatedDependencies[parentId], [moduleId]);
/******/ 							continue;
/******/ 						}
/******/ 						delete outdatedDependencies[parentId];
/******/ 						outdatedModules.push(parentId);
/******/ 						queue.push({
/******/ 							chain: chain.concat([parentId]),
/******/ 							id: parentId
/******/ 						});
/******/ 					}
/******/ 				}
/******/ 		
/******/ 				return {
/******/ 					type: "accepted",
/******/ 					moduleId: updateModuleId,
/******/ 					outdatedModules: outdatedModules,
/******/ 					outdatedDependencies: outdatedDependencies
/******/ 				};
/******/ 			}
/******/ 		
/******/ 			function addAllToSet(a, b) {
/******/ 				for (var i = 0; i < b.length; i++) {
/******/ 					var item = b[i];
/******/ 					if (a.indexOf(item) === -1) a.push(item);
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			// at begin all updates modules are outdated
/******/ 			// the "outdated" status can propagate to parents if they don't accept the children
/******/ 			var outdatedDependencies = {};
/******/ 			var outdatedModules = [];
/******/ 			var appliedUpdate = {};
/******/ 		
/******/ 			var warnUnexpectedRequire = function warnUnexpectedRequire(module) {
/******/ 				console.warn(
/******/ 					"[HMR] unexpected require(" + module.id + ") to disposed module"
/******/ 				);
/******/ 			};
/******/ 		
/******/ 			for (var moduleId in currentUpdate) {
/******/ 				if (__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 					var newModuleFactory = currentUpdate[moduleId];
/******/ 					var result = newModuleFactory
/******/ 						? getAffectedModuleEffects(moduleId)
/******/ 						: {
/******/ 								type: "disposed",
/******/ 								moduleId: moduleId
/******/ 							};
/******/ 					/** @type {Error|false} */
/******/ 					var abortError = false;
/******/ 					var doApply = false;
/******/ 					var doDispose = false;
/******/ 					var chainInfo = "";
/******/ 					if (result.chain) {
/******/ 						chainInfo = "\nUpdate propagation: " + result.chain.join(" -> ");
/******/ 					}
/******/ 					switch (result.type) {
/******/ 						case "self-declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of self decline: " +
/******/ 										result.moduleId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "declined":
/******/ 							if (options.onDeclined) options.onDeclined(result);
/******/ 							if (!options.ignoreDeclined)
/******/ 								abortError = new Error(
/******/ 									"Aborted because of declined dependency: " +
/******/ 										result.moduleId +
/******/ 										" in " +
/******/ 										result.parentId +
/******/ 										chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "unaccepted":
/******/ 							if (options.onUnaccepted) options.onUnaccepted(result);
/******/ 							if (!options.ignoreUnaccepted)
/******/ 								abortError = new Error(
/******/ 									"Aborted because " + moduleId + " is not accepted" + chainInfo
/******/ 								);
/******/ 							break;
/******/ 						case "accepted":
/******/ 							if (options.onAccepted) options.onAccepted(result);
/******/ 							doApply = true;
/******/ 							break;
/******/ 						case "disposed":
/******/ 							if (options.onDisposed) options.onDisposed(result);
/******/ 							doDispose = true;
/******/ 							break;
/******/ 						default:
/******/ 							throw new Error("Unexception type " + result.type);
/******/ 					}
/******/ 					if (abortError) {
/******/ 						return {
/******/ 							error: abortError
/******/ 						};
/******/ 					}
/******/ 					if (doApply) {
/******/ 						appliedUpdate[moduleId] = newModuleFactory;
/******/ 						addAllToSet(outdatedModules, result.outdatedModules);
/******/ 						for (moduleId in result.outdatedDependencies) {
/******/ 							if (__webpack_require__.o(result.outdatedDependencies, moduleId)) {
/******/ 								if (!outdatedDependencies[moduleId])
/******/ 									outdatedDependencies[moduleId] = [];
/******/ 								addAllToSet(
/******/ 									outdatedDependencies[moduleId],
/******/ 									result.outdatedDependencies[moduleId]
/******/ 								);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 					if (doDispose) {
/******/ 						addAllToSet(outdatedModules, [result.moduleId]);
/******/ 						appliedUpdate[moduleId] = warnUnexpectedRequire;
/******/ 					}
/******/ 				}
/******/ 			}
/******/ 			currentUpdate = undefined;
/******/ 		
/******/ 			// Store self accepted outdated modules to require them later by the module system
/******/ 			var outdatedSelfAcceptedModules = [];
/******/ 			for (var j = 0; j < outdatedModules.length; j++) {
/******/ 				var outdatedModuleId = outdatedModules[j];
/******/ 				var module = __webpack_require__.c[outdatedModuleId];
/******/ 				if (
/******/ 					module &&
/******/ 					(module.hot._selfAccepted || module.hot._main) &&
/******/ 					// removed self-accepted modules should not be required
/******/ 					appliedUpdate[outdatedModuleId] !== warnUnexpectedRequire &&
/******/ 					// when called invalidate self-accepting is not possible
/******/ 					!module.hot._selfInvalidated
/******/ 				) {
/******/ 					outdatedSelfAcceptedModules.push({
/******/ 						module: outdatedModuleId,
/******/ 						require: module.hot._requireSelf,
/******/ 						errorHandler: module.hot._selfAccepted
/******/ 					});
/******/ 				}
/******/ 			}
/******/ 		
/******/ 			var moduleOutdatedDependencies;
/******/ 		
/******/ 			return {
/******/ 				dispose: function () {
/******/ 					currentUpdateRemovedChunks.forEach(function (chunkId) {
/******/ 						delete installedChunks[chunkId];
/******/ 					});
/******/ 					currentUpdateRemovedChunks = undefined;
/******/ 		
/******/ 					var idx;
/******/ 					var queue = outdatedModules.slice();
/******/ 					while (queue.length > 0) {
/******/ 						var moduleId = queue.pop();
/******/ 						var module = __webpack_require__.c[moduleId];
/******/ 						if (!module) continue;
/******/ 		
/******/ 						var data = {};
/******/ 		
/******/ 						// Call dispose handlers
/******/ 						var disposeHandlers = module.hot._disposeHandlers;
/******/ 						for (j = 0; j < disposeHandlers.length; j++) {
/******/ 							disposeHandlers[j].call(null, data);
/******/ 						}
/******/ 						__webpack_require__.hmrD[moduleId] = data;
/******/ 		
/******/ 						// disable module (this disables requires from this module)
/******/ 						module.hot.active = false;
/******/ 		
/******/ 						// remove module from cache
/******/ 						delete __webpack_require__.c[moduleId];
/******/ 		
/******/ 						// when disposing there is no need to call dispose handler
/******/ 						delete outdatedDependencies[moduleId];
/******/ 		
/******/ 						// remove "parents" references from all children
/******/ 						for (j = 0; j < module.children.length; j++) {
/******/ 							var child = __webpack_require__.c[module.children[j]];
/******/ 							if (!child) continue;
/******/ 							idx = child.parents.indexOf(moduleId);
/******/ 							if (idx >= 0) {
/******/ 								child.parents.splice(idx, 1);
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// remove outdated dependency from module children
/******/ 					var dependency;
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								for (j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									dependency = moduleOutdatedDependencies[j];
/******/ 									idx = module.children.indexOf(dependency);
/******/ 									if (idx >= 0) module.children.splice(idx, 1);
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 				},
/******/ 				apply: function (reportError) {
/******/ 					var acceptPromises = [];
/******/ 					// insert new code
/******/ 					for (var updateModuleId in appliedUpdate) {
/******/ 						if (__webpack_require__.o(appliedUpdate, updateModuleId)) {
/******/ 							__webpack_require__.m[updateModuleId] = appliedUpdate[updateModuleId];
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					// run new runtime modules
/******/ 					for (var i = 0; i < currentUpdateRuntime.length; i++) {
/******/ 						currentUpdateRuntime[i](__webpack_require__);
/******/ 					}
/******/ 		
/******/ 					// call accept handlers
/******/ 					for (var outdatedModuleId in outdatedDependencies) {
/******/ 						if (__webpack_require__.o(outdatedDependencies, outdatedModuleId)) {
/******/ 							var module = __webpack_require__.c[outdatedModuleId];
/******/ 							if (module) {
/******/ 								moduleOutdatedDependencies =
/******/ 									outdatedDependencies[outdatedModuleId];
/******/ 								var callbacks = [];
/******/ 								var errorHandlers = [];
/******/ 								var dependenciesForCallbacks = [];
/******/ 								for (var j = 0; j < moduleOutdatedDependencies.length; j++) {
/******/ 									var dependency = moduleOutdatedDependencies[j];
/******/ 									var acceptCallback =
/******/ 										module.hot._acceptedDependencies[dependency];
/******/ 									var errorHandler =
/******/ 										module.hot._acceptedErrorHandlers[dependency];
/******/ 									if (acceptCallback) {
/******/ 										if (callbacks.indexOf(acceptCallback) !== -1) continue;
/******/ 										callbacks.push(acceptCallback);
/******/ 										errorHandlers.push(errorHandler);
/******/ 										dependenciesForCallbacks.push(dependency);
/******/ 									}
/******/ 								}
/******/ 								for (var k = 0; k < callbacks.length; k++) {
/******/ 									var result;
/******/ 									try {
/******/ 										result = callbacks[k].call(null, moduleOutdatedDependencies);
/******/ 									} catch (err) {
/******/ 										if (typeof errorHandlers[k] === "function") {
/******/ 											try {
/******/ 												errorHandlers[k](err, {
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k]
/******/ 												});
/******/ 											} catch (err2) {
/******/ 												if (options.onErrored) {
/******/ 													options.onErrored({
/******/ 														type: "accept-error-handler-errored",
/******/ 														moduleId: outdatedModuleId,
/******/ 														dependencyId: dependenciesForCallbacks[k],
/******/ 														error: err2,
/******/ 														originalError: err
/******/ 													});
/******/ 												}
/******/ 												if (!options.ignoreErrored) {
/******/ 													reportError(err2);
/******/ 													reportError(err);
/******/ 												}
/******/ 											}
/******/ 										} else {
/******/ 											if (options.onErrored) {
/******/ 												options.onErrored({
/******/ 													type: "accept-errored",
/******/ 													moduleId: outdatedModuleId,
/******/ 													dependencyId: dependenciesForCallbacks[k],
/******/ 													error: err
/******/ 												});
/******/ 											}
/******/ 											if (!options.ignoreErrored) {
/******/ 												reportError(err);
/******/ 											}
/******/ 										}
/******/ 									}
/******/ 									if (result && typeof result.then === "function") {
/******/ 										acceptPromises.push(result);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					}
/******/ 		
/******/ 					var onAccepted = function () {
/******/ 						// Load self accepted modules
/******/ 						for (var o = 0; o < outdatedSelfAcceptedModules.length; o++) {
/******/ 							var item = outdatedSelfAcceptedModules[o];
/******/ 							var moduleId = item.module;
/******/ 							try {
/******/ 								item.require(moduleId);
/******/ 							} catch (err) {
/******/ 								if (typeof item.errorHandler === "function") {
/******/ 									try {
/******/ 										item.errorHandler(err, {
/******/ 											moduleId: moduleId,
/******/ 											module: __webpack_require__.c[moduleId]
/******/ 										});
/******/ 									} catch (err1) {
/******/ 										if (options.onErrored) {
/******/ 											options.onErrored({
/******/ 												type: "self-accept-error-handler-errored",
/******/ 												moduleId: moduleId,
/******/ 												error: err1,
/******/ 												originalError: err
/******/ 											});
/******/ 										}
/******/ 										if (!options.ignoreErrored) {
/******/ 											reportError(err1);
/******/ 											reportError(err);
/******/ 										}
/******/ 									}
/******/ 								} else {
/******/ 									if (options.onErrored) {
/******/ 										options.onErrored({
/******/ 											type: "self-accept-errored",
/******/ 											moduleId: moduleId,
/******/ 											error: err
/******/ 										});
/******/ 									}
/******/ 									if (!options.ignoreErrored) {
/******/ 										reportError(err);
/******/ 									}
/******/ 								}
/******/ 							}
/******/ 						}
/******/ 					};
/******/ 		
/******/ 					return Promise.all(acceptPromises)
/******/ 						.then(onAccepted)
/******/ 						.then(function () {
/******/ 							return outdatedModules;
/******/ 						});
/******/ 				}
/******/ 			};
/******/ 		}
/******/ 		__webpack_require__.hmrI.jsonp = function (moduleId, applyHandlers) {
/******/ 			if (!currentUpdate) {
/******/ 				currentUpdate = {};
/******/ 				currentUpdateRuntime = [];
/******/ 				currentUpdateRemovedChunks = [];
/******/ 				applyHandlers.push(applyHandler);
/******/ 			}
/******/ 			if (!__webpack_require__.o(currentUpdate, moduleId)) {
/******/ 				currentUpdate[moduleId] = __webpack_require__.m[moduleId];
/******/ 			}
/******/ 		};
/******/ 		__webpack_require__.hmrC.jsonp = function (
/******/ 			chunkIds,
/******/ 			removedChunks,
/******/ 			removedModules,
/******/ 			promises,
/******/ 			applyHandlers,
/******/ 			updatedModulesList
/******/ 		) {
/******/ 			applyHandlers.push(applyHandler);
/******/ 			currentUpdateChunks = {};
/******/ 			currentUpdateRemovedChunks = removedChunks;
/******/ 			currentUpdate = removedModules.reduce(function (obj, key) {
/******/ 				obj[key] = false;
/******/ 				return obj;
/******/ 			}, {});
/******/ 			currentUpdateRuntime = [];
/******/ 			chunkIds.forEach(function (chunkId) {
/******/ 				if (
/******/ 					__webpack_require__.o(installedChunks, chunkId) &&
/******/ 					installedChunks[chunkId] !== undefined
/******/ 				) {
/******/ 					promises.push(loadUpdateChunk(chunkId, updatedModulesList));
/******/ 					currentUpdateChunks[chunkId] = true;
/******/ 				} else {
/******/ 					currentUpdateChunks[chunkId] = false;
/******/ 				}
/******/ 			});
/******/ 			if (__webpack_require__.f) {
/******/ 				__webpack_require__.f.jsonpHmr = function (chunkId, promises) {
/******/ 					if (
/******/ 						currentUpdateChunks &&
/******/ 						__webpack_require__.o(currentUpdateChunks, chunkId) &&
/******/ 						!currentUpdateChunks[chunkId]
/******/ 					) {
/******/ 						promises.push(loadUpdateChunk(chunkId));
/******/ 						currentUpdateChunks[chunkId] = true;
/******/ 					}
/******/ 				};
/******/ 			}
/******/ 		};
/******/ 		
/******/ 		__webpack_require__.hmrM = () => {
/******/ 			if (typeof fetch === "undefined") throw new Error("No browser support: need fetch API");
/******/ 			return fetch(__webpack_require__.p + __webpack_require__.hmrF()).then((response) => {
/******/ 				if(response.status === 404) return; // no update available
/******/ 				if(!response.ok) throw new Error("Failed to fetch update manifest " + response.statusText);
/******/ 				return response.json();
/******/ 			});
/******/ 		};
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// install a JSONP callback for chunk loading
/******/ 		var webpackJsonpCallback = (parentChunkLoadingFunction, data) => {
/******/ 			var [chunkIds, moreModules, runtime] = data;
/******/ 			// add "moreModules" to the modules object,
/******/ 			// then flag all "chunkIds" as loaded and fire callback
/******/ 			var moduleId, chunkId, i = 0;
/******/ 			if(chunkIds.some((id) => (installedChunks[id] !== 0))) {
/******/ 				for(moduleId in moreModules) {
/******/ 					if(__webpack_require__.o(moreModules, moduleId)) {
/******/ 						__webpack_require__.m[moduleId] = moreModules[moduleId];
/******/ 					}
/******/ 				}
/******/ 				if(runtime) var result = runtime(__webpack_require__);
/******/ 			}
/******/ 			if(parentChunkLoadingFunction) parentChunkLoadingFunction(data);
/******/ 			for(;i < chunkIds.length; i++) {
/******/ 				chunkId = chunkIds[i];
/******/ 				if(__webpack_require__.o(installedChunks, chunkId) && installedChunks[chunkId]) {
/******/ 					installedChunks[chunkId][0]();
/******/ 				}
/******/ 				installedChunks[chunkId] = 0;
/******/ 			}
/******/ 		
/******/ 		}
/******/ 		
/******/ 		var chunkLoadingGlobal = self["webpackChunk_reneos_slider_mods_particle"] = self["webpackChunk_reneos_slider_mods_particle"] || [];
/******/ 		chunkLoadingGlobal.forEach(webpackJsonpCallback.bind(null, 0));
/******/ 		chunkLoadingGlobal.push = webpackJsonpCallback.bind(null, chunkLoadingGlobal.push.bind(chunkLoadingGlobal));
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	// run runtime startup
/******/ 	__webpack_require__.x();
/******/ 	// module cache are used so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=5006&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFFO0FBQ2hHO0FBQ0E7QUFDQTtBQUNBLFdBQVcsMEVBQWE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRTRDO0FBQzVDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3hCbUQ7O0FBRW5EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBLENBQUM7O0FBRUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOLHNDQUFzQyxJQUFJO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixvQkFBb0I7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMEJBQTBCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJEQUEyRCxTQUFTO0FBQ3BFLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLGtCQUFrQjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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Li9ub2RlX21vZHVsZXMvLmZlZGVyYXRpb24vZW50cnkuZDNjNTFhZDg3MDhlZWFiZmRmOWUxZTUzNTgyMTUxZGMuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vZXJyb3ItY29kZXMvZGlzdC9pbmRleC5lc20ubWpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUtY29yZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lLWNvcmUvZGlzdC9wb2x5ZmlsbHMuZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS9kaXN0L3V0aWxzLmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsvZGlzdC9pbmRleC5lc20uanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vc2RrL2Rpc3QvcG9seWZpbGxzLmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi93ZWJwYWNrLWJ1bmRsZXItcnVudGltZS9kaXN0L2NvbnN0YW50LmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi93ZWJwYWNrLWJ1bmRsZXItcnVudGltZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL2Fuc2ktaHRtbC1jb21tdW5pdHkvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9ldmVudHMvZXZlbnRzLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9vdmVybGF5LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9wcm9ncmVzcy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvc29ja2V0LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC91dGlscy9sb2cuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL3NlbmRNZXNzYWdlLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvZGV2LXNlcnZlci5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2VtaXR0ZXIuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2ctYXBwbHktcmVzdWx0LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvbG9nLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9mZWRlcmF0aW9uIHJ1bnRpbWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvY29tcGF0IGdldCBkZWZhdWx0IGV4cG9ydCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9lbnN1cmUgY2h1bmsiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IGphdmFzY3JpcHQgdXBkYXRlIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2dldCBtaW5pLWNzcyBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9nZXQgdXBkYXRlIG1hbmlmZXN0IGZpbGVuYW1lIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2dsb2JhbCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvbG9hZCBzY3JpcHQiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL3NoYXJpbmciLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvaG90IG1vZHVsZSByZXBsYWNlbWVudCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2NzcyBsb2FkaW5nIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2VtYmVkL2ZlZGVyYXRpb24iLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svYmVmb3JlLXN0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3N0YXJ0dXAiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL2FmdGVyLXN0YXJ0dXAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGZlZGVyYXRpb24gZnJvbSAnRDovV29ya3MvUHJlc2VudGF0b3Ivc2xpZGVyLm1vZHMucGFydGljbGUvbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi93ZWJwYWNrLWJ1bmRsZXItcnVudGltZS9kaXN0L2luZGV4LmVzbS5qcyc7XG5cbmlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24ucnVudGltZSl7XG5cdHZhciBwcmV2RmVkZXJhdGlvbiA9IF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbjtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uID0ge31cblx0Zm9yKHZhciBrZXkgaW4gZmVkZXJhdGlvbil7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uW2tleV0gPSBmZWRlcmF0aW9uW2tleV07XG5cdH1cblx0Zm9yKHZhciBrZXkgaW4gcHJldkZlZGVyYXRpb24pe1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbltrZXldID0gcHJldkZlZGVyYXRpb25ba2V5XTtcblx0fVxufVxuaWYoIV9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbnN0YW5jZSl7XG5cblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluc3RhbmNlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLnJ1bnRpbWUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMpO1xuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYXR0YWNoU2hhcmVTY29wZU1hcCl7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmF0dGFjaFNoYXJlU2NvcGVNYXAoX193ZWJwYWNrX3JlcXVpcmVfXylcblx0fVxuXHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5zdGFsbEluaXRpYWxDb25zdW1lcyl7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluc3RhbGxJbml0aWFsQ29uc3VtZXMoKVxuXHR9XG5cblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pc01GUmVtb3RlICYmIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5wcmVmZXRjaCl7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5wcmVmZXRjaCgpXG5cdH1cbn0iLCJjb25zdCBSVU5USU1FXzAwMSA9ICdSVU5USU1FLTAwMSc7XG5jb25zdCBSVU5USU1FXzAwMiA9ICdSVU5USU1FLTAwMic7XG5jb25zdCBSVU5USU1FXzAwMyA9ICdSVU5USU1FLTAwMyc7XG5jb25zdCBSVU5USU1FXzAwNCA9ICdSVU5USU1FLTAwNCc7XG5jb25zdCBSVU5USU1FXzAwNSA9ICdSVU5USU1FLTAwNSc7XG5jb25zdCBSVU5USU1FXzAwNiA9ICdSVU5USU1FLTAwNic7XG5jb25zdCBSVU5USU1FXzAwNyA9ICdSVU5USU1FLTAwNyc7XG5jb25zdCBSVU5USU1FXzAwOCA9ICdSVU5USU1FLTAwOCc7XG5jb25zdCBSVU5USU1FXzAwOSA9ICdSVU5USU1FLTAwOSc7XG5jb25zdCBUWVBFXzAwMSA9ICdUWVBFLTAwMSc7XG5jb25zdCBCVUlMRF8wMDEgPSAnQlVJTEQtMDAxJztcbmNvbnN0IEJVSUxEXzAwMiA9ICdCVUlMRC0wMDInO1xuXG5jb25zdCBnZXREb2NzVXJsID0gKGVycm9yQ29kZSk9PntcbiAgICBjb25zdCB0eXBlID0gZXJyb3JDb2RlLnNwbGl0KCctJylbMF0udG9Mb3dlckNhc2UoKTtcbiAgICByZXR1cm4gYFZpZXcgdGhlIGRvY3MgdG8gc2VlIGhvdyB0byBzb2x2ZTogaHR0cHM6Ly9tb2R1bGUtZmVkZXJhdGlvbi5pby9ndWlkZS90cm91Ymxlc2hvb3RpbmcvJHt0eXBlfS8ke2Vycm9yQ29kZX1gO1xufTtcbmNvbnN0IGdldFNob3J0RXJyb3JNc2cgPSAoZXJyb3JDb2RlLCBlcnJvckRlc2NNYXAsIGFyZ3MsIG9yaWdpbmFsRXJyb3JNc2cpPT57XG4gICAgY29uc3QgbXNnID0gW1xuICAgICAgICBgJHtbXG4gICAgICAgICAgICBlcnJvckRlc2NNYXBbZXJyb3JDb2RlXVxuICAgICAgICBdfSAjJHtlcnJvckNvZGV9YFxuICAgIF07XG4gICAgYXJncyAmJiBtc2cucHVzaChgYXJnczogJHtKU09OLnN0cmluZ2lmeShhcmdzKX1gKTtcbiAgICBtc2cucHVzaChnZXREb2NzVXJsKGVycm9yQ29kZSkpO1xuICAgIG9yaWdpbmFsRXJyb3JNc2cgJiYgbXNnLnB1c2goYE9yaWdpbmFsIEVycm9yIE1lc3NhZ2U6XFxuICR7b3JpZ2luYWxFcnJvck1zZ31gKTtcbiAgICByZXR1cm4gbXNnLmpvaW4oJ1xcbicpO1xufTtcblxuZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKWlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuY29uc3QgcnVudGltZURlc2NNYXAgPSB7XG4gICAgW1JVTlRJTUVfMDAxXTogJ0ZhaWxlZCB0byBnZXQgcmVtb3RlRW50cnkgZXhwb3J0cy4nLFxuICAgIFtSVU5USU1FXzAwMl06ICdUaGUgcmVtb3RlIGVudHJ5IGludGVyZmFjZSBkb2VzIG5vdCBjb250YWluIFwiaW5pdFwiJyxcbiAgICBbUlVOVElNRV8wMDNdOiAnRmFpbGVkIHRvIGdldCBtYW5pZmVzdC4nLFxuICAgIFtSVU5USU1FXzAwNF06ICdGYWlsZWQgdG8gbG9jYXRlIHJlbW90ZS4nLFxuICAgIFtSVU5USU1FXzAwNV06ICdJbnZhbGlkIGxvYWRTaGFyZVN5bmMgZnVuY3Rpb24gY2FsbCBmcm9tIGJ1bmRsZXIgcnVudGltZScsXG4gICAgW1JVTlRJTUVfMDA2XTogJ0ludmFsaWQgbG9hZFNoYXJlU3luYyBmdW5jdGlvbiBjYWxsIGZyb20gcnVudGltZScsXG4gICAgW1JVTlRJTUVfMDA3XTogJ0ZhaWxlZCB0byBnZXQgcmVtb3RlIHNuYXBzaG90LicsXG4gICAgW1JVTlRJTUVfMDA4XTogJ0ZhaWxlZCB0byBsb2FkIHNjcmlwdCByZXNvdXJjZXMuJyxcbiAgICBbUlVOVElNRV8wMDldOiAnUGxlYXNlIGNhbGwgY3JlYXRlSW5zdGFuY2UgZmlyc3QuJ1xufTtcbmNvbnN0IHR5cGVEZXNjTWFwID0ge1xuICAgIFtUWVBFXzAwMV06ICdGYWlsZWQgdG8gZ2VuZXJhdGUgdHlwZSBkZWNsYXJhdGlvbi4gRXhlY3V0ZSB0aGUgYmVsb3cgY21kIHRvIHJlcHJvZHVjZSBhbmQgZml4IHRoZSBlcnJvci4nXG59O1xuY29uc3QgYnVpbGREZXNjTWFwID0ge1xuICAgIFtCVUlMRF8wMDFdOiAnRmFpbGVkIHRvIGZpbmQgZXhwb3NlIG1vZHVsZS4nLFxuICAgIFtCVUlMRF8wMDJdOiAnUHVibGljUGF0aCBpcyByZXF1aXJlZCBpbiBwcm9kIG1vZGUuJ1xufTtcbmNvbnN0IGVycm9yRGVzY01hcCA9IF9leHRlbmRzKHt9LCBydW50aW1lRGVzY01hcCwgdHlwZURlc2NNYXAsIGJ1aWxkRGVzY01hcCk7XG5cbmV4cG9ydCB7IEJVSUxEXzAwMSwgQlVJTERfMDAyLCBSVU5USU1FXzAwMSwgUlVOVElNRV8wMDIsIFJVTlRJTUVfMDAzLCBSVU5USU1FXzAwNCwgUlVOVElNRV8wMDUsIFJVTlRJTUVfMDA2LCBSVU5USU1FXzAwNywgUlVOVElNRV8wMDgsIFJVTlRJTUVfMDA5LCBUWVBFXzAwMSwgYnVpbGREZXNjTWFwLCBlcnJvckRlc2NNYXAsIGdldFNob3J0RXJyb3JNc2csIHJ1bnRpbWVEZXNjTWFwLCB0eXBlRGVzY01hcCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLm1qcy5tYXBcbiIsImltcG9ydCB7IF8gYXMgX2V4dGVuZHMsIGEgYXMgX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2UgfSBmcm9tICcuL3BvbHlmaWxscy5lc20uanMnO1xuaW1wb3J0IHsgY3JlYXRlTG9nZ2VyLCBpc0Jyb3dzZXJFbnYsIGlzUmVhY3ROYXRpdmVFbnYsIGlzRGVidWdNb2RlLCBjb21wb3NlS2V5V2l0aFNlcGFyYXRvciwgbG9hZFNjcmlwdE5vZGUsIGxvYWRTY3JpcHQsIGNyZWF0ZUxpbmssIGNyZWF0ZVNjcmlwdCwgc2FmZVRvU3RyaW5nLCBnZXRSZXNvdXJjZVVybCwgaXNNYW5pZmVzdFByb3ZpZGVyLCBnZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0LCB3YXJuIGFzIHdhcm4kMSB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsnO1xuZXhwb3J0IHsgbG9hZFNjcmlwdCwgbG9hZFNjcmlwdE5vZGUgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vc2RrJztcbmltcG9ydCB7IGdldFNob3J0RXJyb3JNc2csIFJVTlRJTUVfMDA4LCBydW50aW1lRGVzY01hcCwgUlVOVElNRV8wMDEsIFJVTlRJTUVfMDAyLCBSVU5USU1FXzAwNywgUlVOVElNRV8wMDMsIFJVTlRJTUVfMDA1LCBSVU5USU1FXzAwNiwgUlVOVElNRV8wMDQgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vZXJyb3ItY29kZXMnO1xuXG5jb25zdCBMT0dfQ0FURUdPUlkgPSAnWyBGZWRlcmF0aW9uIFJ1bnRpbWUgXSc7XG4vLyBGSVhNRTogcHJlLWJ1bmRsZSA/XG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoTE9HX0NBVEVHT1JZKTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiBhc3NlcnQoY29uZGl0aW9uLCBtc2cpIHtcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBlcnJvcihtc2cpO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGVycm9yKG1zZykge1xuICAgIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWVzc2FnZSBhbHJlYWR5IHN0YXJ0cyB3aXRoIHRoZSBsb2cgY2F0ZWdvcnkgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICAgICAgaWYgKCFtc2cubWVzc2FnZS5zdGFydHNXaXRoKExPR19DQVRFR09SWSkpIHtcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gYCR7TE9HX0NBVEVHT1JZfTogJHttc2cubWVzc2FnZX1gO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG1zZztcbiAgICB9XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0xPR19DQVRFR09SWX06ICR7bXNnfWApO1xufVxuZnVuY3Rpb24gd2Fybihtc2cpIHtcbiAgICBpZiAobXNnIGluc3RhbmNlb2YgRXJyb3IpIHtcbiAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIG1lc3NhZ2UgYWxyZWFkeSBzdGFydHMgd2l0aCB0aGUgbG9nIGNhdGVnb3J5IHRvIGF2b2lkIGR1cGxpY2F0aW9uXG4gICAgICAgIGlmICghbXNnLm1lc3NhZ2Uuc3RhcnRzV2l0aChMT0dfQ0FURUdPUlkpKSB7XG4gICAgICAgICAgICBtc2cubWVzc2FnZSA9IGAke0xPR19DQVRFR09SWX06ICR7bXNnLm1lc3NhZ2V9YDtcbiAgICAgICAgfVxuICAgICAgICBsb2dnZXIud2Fybihtc2cpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGxvZ2dlci53YXJuKG1zZyk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhZGRVbmlxdWVJdGVtKGFyciwgaXRlbSkge1xuICAgIGlmIChhcnIuZmluZEluZGV4KChuYW1lKT0+bmFtZSA9PT0gaXRlbSkgPT09IC0xKSB7XG4gICAgICAgIGFyci5wdXNoKGl0ZW0pO1xuICAgIH1cbiAgICByZXR1cm4gYXJyO1xufVxuZnVuY3Rpb24gZ2V0Rk1JZChyZW1vdGVJbmZvKSB7XG4gICAgaWYgKCd2ZXJzaW9uJyBpbiByZW1vdGVJbmZvICYmIHJlbW90ZUluZm8udmVyc2lvbikge1xuICAgICAgICByZXR1cm4gYCR7cmVtb3RlSW5mby5uYW1lfToke3JlbW90ZUluZm8udmVyc2lvbn1gO1xuICAgIH0gZWxzZSBpZiAoJ2VudHJ5JyBpbiByZW1vdGVJbmZvICYmIHJlbW90ZUluZm8uZW50cnkpIHtcbiAgICAgICAgcmV0dXJuIGAke3JlbW90ZUluZm8ubmFtZX06JHtyZW1vdGVJbmZvLmVudHJ5fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGAke3JlbW90ZUluZm8ubmFtZX1gO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzUmVtb3RlSW5mb1dpdGhFbnRyeShyZW1vdGUpIHtcbiAgICByZXR1cm4gdHlwZW9mIHJlbW90ZS5lbnRyeSAhPT0gJ3VuZGVmaW5lZCc7XG59XG5mdW5jdGlvbiBpc1B1cmVSZW1vdGVFbnRyeShyZW1vdGUpIHtcbiAgICByZXR1cm4gIXJlbW90ZS5lbnRyeS5pbmNsdWRlcygnLmpzb24nKTtcbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5hc3luYyBmdW5jdGlvbiBzYWZlV3JhcHBlcihjYWxsYmFjaywgZGlzYWJsZVdhcm4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgIWRpc2FibGVXYXJuICYmIHdhcm4oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5mdW5jdGlvbiBpc09iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gdmFsICYmIHR5cGVvZiB2YWwgPT09ICdvYmplY3QnO1xufVxuY29uc3Qgb2JqZWN0VG9TdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIGlzUGxhaW5PYmplY3QodmFsKSB7XG4gICAgcmV0dXJuIG9iamVjdFRvU3RyaW5nLmNhbGwodmFsKSA9PT0gJ1tvYmplY3QgT2JqZWN0XSc7XG59XG5mdW5jdGlvbiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKHVybDEsIHVybDIpIHtcbiAgICBjb25zdCBSRUdfRVhQID0gL14oaHR0cHM/Oik/XFwvXFwvL2k7XG4gICAgLy8gVHJhbnNmb3JtIHVybDEgYW5kIHVybDIgaW50byByZWxhdGl2ZSBwYXRoc1xuICAgIGNvbnN0IHJlbGF0aXZlVXJsMSA9IHVybDEucmVwbGFjZShSRUdfRVhQLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCByZWxhdGl2ZVVybDIgPSB1cmwyLnJlcGxhY2UoUkVHX0VYUCwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbGF0aXZlIHBhdGhzIGFyZSBpZGVudGljYWxcbiAgICByZXR1cm4gcmVsYXRpdmVVcmwxID09PSByZWxhdGl2ZVVybDI7XG59XG5mdW5jdGlvbiBhcnJheU9wdGlvbnMob3B0aW9ucykge1xuICAgIHJldHVybiBBcnJheS5pc0FycmF5KG9wdGlvbnMpID8gb3B0aW9ucyA6IFtcbiAgICAgICAgb3B0aW9uc1xuICAgIF07XG59XG5mdW5jdGlvbiBnZXRSZW1vdGVFbnRyeUluZm9Gcm9tU25hcHNob3Qoc25hcHNob3QpIHtcbiAgICBjb25zdCBkZWZhdWx0UmVtb3RlRW50cnlJbmZvID0ge1xuICAgICAgICB1cmw6ICcnLFxuICAgICAgICB0eXBlOiAnZ2xvYmFsJyxcbiAgICAgICAgZ2xvYmFsTmFtZTogJydcbiAgICB9O1xuICAgIGlmIChpc0Jyb3dzZXJFbnYoKSB8fCBpc1JlYWN0TmF0aXZlRW52KCkpIHtcbiAgICAgICAgcmV0dXJuICdyZW1vdGVFbnRyeScgaW4gc25hcHNob3QgPyB7XG4gICAgICAgICAgICB1cmw6IHNuYXBzaG90LnJlbW90ZUVudHJ5LFxuICAgICAgICAgICAgdHlwZTogc25hcHNob3QucmVtb3RlRW50cnlUeXBlLFxuICAgICAgICAgICAgZ2xvYmFsTmFtZTogc25hcHNob3QuZ2xvYmFsTmFtZVxuICAgICAgICB9IDogZGVmYXVsdFJlbW90ZUVudHJ5SW5mbztcbiAgICB9XG4gICAgaWYgKCdzc3JSZW1vdGVFbnRyeScgaW4gc25hcHNob3QpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHVybDogc25hcHNob3Quc3NyUmVtb3RlRW50cnkgfHwgZGVmYXVsdFJlbW90ZUVudHJ5SW5mby51cmwsXG4gICAgICAgICAgICB0eXBlOiBzbmFwc2hvdC5zc3JSZW1vdGVFbnRyeVR5cGUgfHwgZGVmYXVsdFJlbW90ZUVudHJ5SW5mby50eXBlLFxuICAgICAgICAgICAgZ2xvYmFsTmFtZTogc25hcHNob3QuZ2xvYmFsTmFtZVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4gZGVmYXVsdFJlbW90ZUVudHJ5SW5mbztcbn1cbmNvbnN0IHByb2Nlc3NNb2R1bGVBbGlhcyA9IChuYW1lLCBzdWJQYXRoKT0+e1xuICAgIC8vIEBob3N0LyAuL2J1dHRvbiAtPiBAaG9zdC9idXR0b25cbiAgICBsZXQgbW9kdWxlTmFtZTtcbiAgICBpZiAobmFtZS5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIG1vZHVsZU5hbWUgPSBuYW1lLnNsaWNlKDAsIC0xKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBtb2R1bGVOYW1lID0gbmFtZTtcbiAgICB9XG4gICAgaWYgKHN1YlBhdGguc3RhcnRzV2l0aCgnLicpKSB7XG4gICAgICAgIHN1YlBhdGggPSBzdWJQYXRoLnNsaWNlKDEpO1xuICAgIH1cbiAgICBtb2R1bGVOYW1lID0gbW9kdWxlTmFtZSArIHN1YlBhdGg7XG4gICAgcmV0dXJuIG1vZHVsZU5hbWU7XG59O1xuXG5jb25zdCBDdXJyZW50R2xvYmFsID0gdHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnID8gZ2xvYmFsVGhpcyA6IHdpbmRvdztcbmNvbnN0IG5hdGl2ZUdsb2JhbCA9ICgoKT0+e1xuICAgIHRyeSB7XG4gICAgICAgIC8vIGdldCByZWFsIHdpbmRvdyAoaW5jYXNlIG9mIHNhbmRib3gpXG4gICAgICAgIHJldHVybiBkb2N1bWVudC5kZWZhdWx0VmlldztcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIG5vZGUgZW52XG4gICAgICAgIHJldHVybiBDdXJyZW50R2xvYmFsO1xuICAgIH1cbn0pKCk7XG5jb25zdCBHbG9iYWwgPSBuYXRpdmVHbG9iYWw7XG5mdW5jdGlvbiBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbCh0YXJnZXQsIGtleSwgdmFsKSB7XG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHRhcmdldCwga2V5LCB7XG4gICAgICAgIHZhbHVlOiB2YWwsXG4gICAgICAgIGNvbmZpZ3VyYWJsZTogZmFsc2UsXG4gICAgICAgIHdyaXRhYmxlOiB0cnVlXG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbmNsdWRlT3duUHJvcGVydHkodGFyZ2V0LCBrZXkpIHtcbiAgICByZXR1cm4gT2JqZWN0Lmhhc093blByb3BlcnR5LmNhbGwodGFyZ2V0LCBrZXkpO1xufVxuLy8gVGhpcyBzZWN0aW9uIGlzIHRvIHByZXZlbnQgZW5jYXBzdWxhdGlvbiBieSBjZXJ0YWluIG1pY3JvZnJvbnRlbmQgZnJhbWV3b3Jrcy4gRHVlIHRvIHJldXNlIHBvbGljaWVzLCBzYW5kYm94IGVzY2FwZXMuXG4vLyBUaGUgc2FuZGJveCBpbiB0aGUgbWljcm9mcm9udGVuZCBkb2VzIG5vdCByZXBsaWNhdGUgdGhlIHZhbHVlIG9mICdjb25maWd1cmFibGUnLlxuLy8gSWYgdGhlcmUgaXMgbm8gbG9hZGluZyBjb250ZW50IG9uIHRoZSBnbG9iYWwgb2JqZWN0LCB0aGlzIHNlY3Rpb24gZGVmaW5lcyB0aGUgbG9hZGluZyBvYmplY3QuXG5pZiAoIWluY2x1ZGVPd25Qcm9wZXJ0eShDdXJyZW50R2xvYmFsLCAnX19HTE9CQUxfTE9BRElOR19SRU1PVEVfRU5UUllfXycpKSB7XG4gICAgZGVmaW5lUHJvcGVydHlHbG9iYWxWYWwoQ3VycmVudEdsb2JhbCwgJ19fR0xPQkFMX0xPQURJTkdfUkVNT1RFX0VOVFJZX18nLCB7fSk7XG59XG5jb25zdCBnbG9iYWxMb2FkaW5nID0gQ3VycmVudEdsb2JhbC5fX0dMT0JBTF9MT0FESU5HX1JFTU9URV9FTlRSWV9fO1xuZnVuY3Rpb24gc2V0R2xvYmFsRGVmYXVsdFZhbCh0YXJnZXQpIHtcbiAgICB2YXIgX3RhcmdldF9fX0ZFREVSQVRJT05fXywgX3RhcmdldF9fX0ZFREVSQVRJT05fXzEsIF90YXJnZXRfX19GRURFUkFUSU9OX18yLCBfdGFyZ2V0X19fRkVERVJBVElPTl9fMywgX3RhcmdldF9fX0ZFREVSQVRJT05fXzQsIF90YXJnZXRfX19GRURFUkFUSU9OX181O1xuICAgIGlmIChpbmNsdWRlT3duUHJvcGVydHkodGFyZ2V0LCAnX19WTU9LX18nKSAmJiAhaW5jbHVkZU93blByb3BlcnR5KHRhcmdldCwgJ19fRkVERVJBVElPTl9fJykpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHlHbG9iYWxWYWwodGFyZ2V0LCAnX19GRURFUkFUSU9OX18nLCB0YXJnZXQuX19WTU9LX18pO1xuICAgIH1cbiAgICBpZiAoIWluY2x1ZGVPd25Qcm9wZXJ0eSh0YXJnZXQsICdfX0ZFREVSQVRJT05fXycpKSB7XG4gICAgICAgIGRlZmluZVByb3BlcnR5R2xvYmFsVmFsKHRhcmdldCwgJ19fRkVERVJBVElPTl9fJywge1xuICAgICAgICAgICAgX19HTE9CQUxfUExVR0lOX186IFtdLFxuICAgICAgICAgICAgX19JTlNUQU5DRVNfXzogW10sXG4gICAgICAgICAgICBtb2R1bGVJbmZvOiB7fSxcbiAgICAgICAgICAgIF9fU0hBUkVfXzoge30sXG4gICAgICAgICAgICBfX01BTklGRVNUX0xPQURJTkdfXzoge30sXG4gICAgICAgICAgICBfX1BSRUxPQURFRF9NQVBfXzogbmV3IE1hcCgpXG4gICAgICAgIH0pO1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbCh0YXJnZXQsICdfX1ZNT0tfXycsIHRhcmdldC5fX0ZFREVSQVRJT05fXyk7XG4gICAgfVxuICAgIHZhciBfX19HTE9CQUxfUExVR0lOX187XG4gICAgKF9fX0dMT0JBTF9QTFVHSU5fXyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5fX0dMT0JBTF9QTFVHSU5fXykgIT0gbnVsbCA/IF9fX0dMT0JBTF9QTFVHSU5fXyA6IF90YXJnZXRfX19GRURFUkFUSU9OX18uX19HTE9CQUxfUExVR0lOX18gPSBbXTtcbiAgICB2YXIgX19fSU5TVEFOQ0VTX187XG4gICAgKF9fX0lOU1RBTkNFU19fID0gKF90YXJnZXRfX19GRURFUkFUSU9OX18xID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5fX0lOU1RBTkNFU19fKSAhPSBudWxsID8gX19fSU5TVEFOQ0VTX18gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fMS5fX0lOU1RBTkNFU19fID0gW107XG4gICAgdmFyIF9tb2R1bGVJbmZvO1xuICAgIChfbW9kdWxlSW5mbyA9IChfdGFyZ2V0X19fRkVERVJBVElPTl9fMiA9IHRhcmdldC5fX0ZFREVSQVRJT05fXykubW9kdWxlSW5mbykgIT0gbnVsbCA/IF9tb2R1bGVJbmZvIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXzIubW9kdWxlSW5mbyA9IHt9O1xuICAgIHZhciBfX19TSEFSRV9fO1xuICAgIChfX19TSEFSRV9fID0gKF90YXJnZXRfX19GRURFUkFUSU9OX18zID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5fX1NIQVJFX18pICE9IG51bGwgPyBfX19TSEFSRV9fIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXzMuX19TSEFSRV9fID0ge307XG4gICAgdmFyIF9fX01BTklGRVNUX0xPQURJTkdfXztcbiAgICAoX19fTUFOSUZFU1RfTE9BRElOR19fID0gKF90YXJnZXRfX19GRURFUkFUSU9OX180ID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5fX01BTklGRVNUX0xPQURJTkdfXykgIT0gbnVsbCA/IF9fX01BTklGRVNUX0xPQURJTkdfXyA6IF90YXJnZXRfX19GRURFUkFUSU9OX180Ll9fTUFOSUZFU1RfTE9BRElOR19fID0ge307XG4gICAgdmFyIF9fX1BSRUxPQURFRF9NQVBfXztcbiAgICAoX19fUFJFTE9BREVEX01BUF9fID0gKF90YXJnZXRfX19GRURFUkFUSU9OX181ID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5fX1BSRUxPQURFRF9NQVBfXykgIT0gbnVsbCA/IF9fX1BSRUxPQURFRF9NQVBfXyA6IF90YXJnZXRfX19GRURFUkFUSU9OX181Ll9fUFJFTE9BREVEX01BUF9fID0gbmV3IE1hcCgpO1xufVxuc2V0R2xvYmFsRGVmYXVsdFZhbChDdXJyZW50R2xvYmFsKTtcbnNldEdsb2JhbERlZmF1bHRWYWwobmF0aXZlR2xvYmFsKTtcbmZ1bmN0aW9uIHJlc2V0RmVkZXJhdGlvbkdsb2JhbEluZm8oKSB7XG4gICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0dMT0JBTF9QTFVHSU5fXyA9IFtdO1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXyA9IFtdO1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbyA9IHt9O1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19TSEFSRV9fID0ge307XG4gICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX01BTklGRVNUX0xPQURJTkdfXyA9IHt9O1xuICAgIE9iamVjdC5rZXlzKGdsb2JhbExvYWRpbmcpLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgZGVsZXRlIGdsb2JhbExvYWRpbmdba2V5XTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZShGZWRlcmF0aW9uSW5zdGFuY2UpIHtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fSU5TVEFOQ0VTX18ucHVzaChGZWRlcmF0aW9uSW5zdGFuY2UpO1xufVxuZnVuY3Rpb24gZ2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKCkge1xuICAgIHJldHVybiBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fREVCVUdfQ09OU1RSVUNUT1JfXztcbn1cbmZ1bmN0aW9uIHNldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcihGZWRlcmF0aW9uQ29uc3RydWN0b3IsIGlzRGVidWcgPSBpc0RlYnVnTW9kZSgpKSB7XG4gICAgaWYgKGlzRGVidWcpIHtcbiAgICAgICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0RFQlVHX0NPTlNUUlVDVE9SX18gPSBGZWRlcmF0aW9uQ29uc3RydWN0b3I7XG4gICAgICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19ERUJVR19DT05TVFJVQ1RPUl9WRVJTSU9OX18gPSBcIjAuMTkuMVwiO1xuICAgIH1cbn1cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvYmFuLXR5cGVzXG5mdW5jdGlvbiBnZXRJbmZvV2l0aG91dFR5cGUodGFyZ2V0LCBrZXkpIHtcbiAgICBpZiAodHlwZW9mIGtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3Qga2V5UmVzID0gdGFyZ2V0W2tleV07XG4gICAgICAgIGlmIChrZXlSZXMpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHRhcmdldFtrZXldLFxuICAgICAgICAgICAgICAgIGtleToga2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0S2V5cyA9IE9iamVjdC5rZXlzKHRhcmdldCk7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IHRhcmdldEtleSBvZiB0YXJnZXRLZXlzKXtcbiAgICAgICAgICAgICAgICBjb25zdCBbdGFyZ2V0VHlwZU9yTmFtZSwgX10gPSB0YXJnZXRLZXkuc3BsaXQoJzonKTtcbiAgICAgICAgICAgICAgICBjb25zdCBuS2V5ID0gYCR7dGFyZ2V0VHlwZU9yTmFtZX06JHtrZXl9YDtcbiAgICAgICAgICAgICAgICBjb25zdCB0eXBlV2l0aEtleVJlcyA9IHRhcmdldFtuS2V5XTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZVdpdGhLZXlSZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiB0eXBlV2l0aEtleVJlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleTogbktleVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdmFsdWU6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBrZXk6IGtleVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcigna2V5IG11c3QgYmUgc3RyaW5nJyk7XG4gICAgfVxufVxuY29uc3QgZ2V0R2xvYmFsU25hcHNob3QgPSAoKT0+bmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm87XG5jb25zdCBnZXRUYXJnZXRTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8gPSAobW9kdWxlSW5mbywgc25hcHNob3QpPT57XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbW90ZSBpcyBpbmNsdWRlZCBpbiB0aGUgaG9zdFNuYXBzaG90XG4gICAgY29uc3QgbW9kdWxlS2V5ID0gZ2V0Rk1JZChtb2R1bGVJbmZvKTtcbiAgICBjb25zdCBnZXRNb2R1bGVJbmZvID0gZ2V0SW5mb1dpdGhvdXRUeXBlKHNuYXBzaG90LCBtb2R1bGVLZXkpLnZhbHVlO1xuICAgIC8vIFRoZSByZW1vdGVTbmFwc2hvdCBtaWdodCBub3QgaW5jbHVkZSBhIHZlcnNpb25cbiAgICBpZiAoZ2V0TW9kdWxlSW5mbyAmJiAhZ2V0TW9kdWxlSW5mby52ZXJzaW9uICYmICd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvICYmIG1vZHVsZUluZm9bJ3ZlcnNpb24nXSkge1xuICAgICAgICBnZXRNb2R1bGVJbmZvLnZlcnNpb24gPSBtb2R1bGVJbmZvWyd2ZXJzaW9uJ107XG4gICAgfVxuICAgIGlmIChnZXRNb2R1bGVJbmZvKSB7XG4gICAgICAgIHJldHVybiBnZXRNb2R1bGVJbmZvO1xuICAgIH1cbiAgICAvLyBJZiB0aGUgcmVtb3RlIGlzIG5vdCBpbmNsdWRlZCBpbiB0aGUgaG9zdFNuYXBzaG90LCBkZXBsb3kgYSBtaWNybyBhcHAgc25hcHNob3RcbiAgICBpZiAoJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gJiYgbW9kdWxlSW5mb1sndmVyc2lvbiddKSB7XG4gICAgICAgIGNvbnN0IHsgdmVyc2lvbiB9ID0gbW9kdWxlSW5mbywgcmVzTW9kdWxlSW5mbyA9IF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKG1vZHVsZUluZm8sIFtcbiAgICAgICAgICAgIFwidmVyc2lvblwiXG4gICAgICAgIF0pO1xuICAgICAgICBjb25zdCBtb2R1bGVLZXlXaXRob3V0VmVyc2lvbiA9IGdldEZNSWQocmVzTW9kdWxlSW5mbyk7XG4gICAgICAgIGNvbnN0IGdldE1vZHVsZUluZm9XaXRob3V0VmVyc2lvbiA9IGdldEluZm9XaXRob3V0VHlwZShuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbywgbW9kdWxlS2V5V2l0aG91dFZlcnNpb24pLnZhbHVlO1xuICAgICAgICBpZiAoKGdldE1vZHVsZUluZm9XaXRob3V0VmVyc2lvbiA9PSBudWxsID8gdm9pZCAwIDogZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uLnZlcnNpb24pID09PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn07XG5jb25zdCBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8gPSAobW9kdWxlSW5mbyk9PmdldFRhcmdldFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyhtb2R1bGVJbmZvLCBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbyk7XG5jb25zdCBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8gPSAocmVtb3RlSW5mbywgbW9kdWxlRGV0YWlsSW5mbyk9PntcbiAgICBjb25zdCBtb2R1bGVLZXkgPSBnZXRGTUlkKHJlbW90ZUluZm8pO1xuICAgIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvW21vZHVsZUtleV0gPSBtb2R1bGVEZXRhaWxJbmZvO1xuICAgIHJldHVybiBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbztcbn07XG5jb25zdCBhZGRHbG9iYWxTbmFwc2hvdCA9IChtb2R1bGVJbmZvcyk9PntcbiAgICBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbyA9IF9leHRlbmRzKHt9LCBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbywgbW9kdWxlSW5mb3MpO1xuICAgIHJldHVybiAoKT0+e1xuICAgICAgICBjb25zdCBrZXlzID0gT2JqZWN0LmtleXMobW9kdWxlSW5mb3MpO1xuICAgICAgICBmb3IgKGNvbnN0IGtleSBvZiBrZXlzKXtcbiAgICAgICAgICAgIGRlbGV0ZSBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mb1trZXldO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5jb25zdCBnZXRSZW1vdGVFbnRyeUV4cG9ydHMgPSAobmFtZSwgZ2xvYmFsTmFtZSk9PntcbiAgICBjb25zdCByZW1vdGVFbnRyeUtleSA9IGdsb2JhbE5hbWUgfHwgYF9fRkVERVJBVElPTl8ke25hbWV9OmN1c3RvbV9fYDtcbiAgICBjb25zdCBlbnRyeUV4cG9ydHMgPSBDdXJyZW50R2xvYmFsW3JlbW90ZUVudHJ5S2V5XTtcbiAgICByZXR1cm4ge1xuICAgICAgICByZW1vdGVFbnRyeUtleSxcbiAgICAgICAgZW50cnlFeHBvcnRzXG4gICAgfTtcbn07XG4vLyBUaGlzIGZ1bmN0aW9uIGlzIHVzZWQgdG8gcmVnaXN0ZXIgZ2xvYmFsIHBsdWdpbnMuXG4vLyBJdCBpdGVyYXRlcyBvdmVyIHRoZSBwcm92aWRlZCBwbHVnaW5zIGFuZCBjaGVja3MgaWYgdGhleSBhcmUgYWxyZWFkeSByZWdpc3RlcmVkLlxuLy8gSWYgYSBwbHVnaW4gaXMgbm90IHJlZ2lzdGVyZWQsIGl0IGlzIGFkZGVkIHRvIHRoZSBnbG9iYWwgcGx1Z2lucy5cbi8vIElmIGEgcGx1Z2luIGlzIGFscmVhZHkgcmVnaXN0ZXJlZCwgYSB3YXJuaW5nIG1lc3NhZ2UgaXMgbG9nZ2VkLlxuY29uc3QgcmVnaXN0ZXJHbG9iYWxQbHVnaW5zID0gKHBsdWdpbnMpPT57XG4gICAgY29uc3QgeyBfX0dMT0JBTF9QTFVHSU5fXyB9ID0gbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fO1xuICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKT0+e1xuICAgICAgICBpZiAoX19HTE9CQUxfUExVR0lOX18uZmluZEluZGV4KChwKT0+cC5uYW1lID09PSBwbHVnaW4ubmFtZSkgPT09IC0xKSB7XG4gICAgICAgICAgICBfX0dMT0JBTF9QTFVHSU5fXy5wdXNoKHBsdWdpbik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB3YXJuKGBUaGUgcGx1Z2luICR7cGx1Z2luLm5hbWV9IGhhcyBiZWVuIHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG5jb25zdCBnZXRHbG9iYWxIb3N0UGx1Z2lucyA9ICgpPT5uYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18uX19HTE9CQUxfUExVR0lOX187XG5jb25zdCBnZXRQcmVsb2FkZWQgPSAoaWQpPT5DdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fUFJFTE9BREVEX01BUF9fLmdldChpZCk7XG5jb25zdCBzZXRQcmVsb2FkZWQgPSAoaWQpPT5DdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fUFJFTE9BREVEX01BUF9fLnNldChpZCwgdHJ1ZSk7XG5cbmNvbnN0IERFRkFVTFRfU0NPUEUgPSAnZGVmYXVsdCc7XG5jb25zdCBERUZBVUxUX1JFTU9URV9UWVBFID0gJ2dsb2JhbCc7XG5cbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIHRob3NlIGNvbnN0YW50cyBhcmUgYmFzZWQgb24gaHR0cHM6Ly93d3cucnVieWRvYy5pbmZvL2dlbXMvc2VtYW50aWNfcmFuZ2UvMy4wLjAvU2VtYW50aWNSYW5nZSNCVUlMRElERU5USUZJRVItY29uc3RhbnRcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbmNvbnN0IGJ1aWxkSWRlbnRpZmllciA9ICdbMC05QS1aYS16LV0rJztcbmNvbnN0IGJ1aWxkID0gYCg/OlxcXFwrKCR7YnVpbGRJZGVudGlmaWVyfSg/OlxcXFwuJHtidWlsZElkZW50aWZpZXJ9KSopKWA7XG5jb25zdCBudW1lcmljSWRlbnRpZmllciA9ICcwfFsxLTldXFxcXGQqJztcbmNvbnN0IG51bWVyaWNJZGVudGlmaWVyTG9vc2UgPSAnWzAtOV0rJztcbmNvbnN0IG5vbk51bWVyaWNJZGVudGlmaWVyID0gJ1xcXFxkKlthLXpBLVotXVthLXpBLVowLTktXSonO1xuY29uc3QgcHJlUmVsZWFzZUlkZW50aWZpZXJMb29zZSA9IGAoPzoke251bWVyaWNJZGVudGlmaWVyTG9vc2V9fCR7bm9uTnVtZXJpY0lkZW50aWZpZXJ9KWA7XG5jb25zdCBwcmVSZWxlYXNlTG9vc2UgPSBgKD86LT8oJHtwcmVSZWxlYXNlSWRlbnRpZmllckxvb3NlfSg/OlxcXFwuJHtwcmVSZWxlYXNlSWRlbnRpZmllckxvb3NlfSkqKSlgO1xuY29uc3QgcHJlUmVsZWFzZUlkZW50aWZpZXIgPSBgKD86JHtudW1lcmljSWRlbnRpZmllcn18JHtub25OdW1lcmljSWRlbnRpZmllcn0pYDtcbmNvbnN0IHByZVJlbGVhc2UgPSBgKD86LSgke3ByZVJlbGVhc2VJZGVudGlmaWVyfSg/OlxcXFwuJHtwcmVSZWxlYXNlSWRlbnRpZmllcn0pKikpYDtcbmNvbnN0IHhSYW5nZUlkZW50aWZpZXIgPSBgJHtudW1lcmljSWRlbnRpZmllcn18eHxYfFxcXFwqYDtcbmNvbnN0IHhSYW5nZVBsYWluID0gYFt2PVxcXFxzXSooJHt4UmFuZ2VJZGVudGlmaWVyfSkoPzpcXFxcLigke3hSYW5nZUlkZW50aWZpZXJ9KSg/OlxcXFwuKCR7eFJhbmdlSWRlbnRpZmllcn0pKD86JHtwcmVSZWxlYXNlfSk/JHtidWlsZH0/KT8pP2A7XG5jb25zdCBoeXBoZW5SYW5nZSA9IGBeXFxcXHMqKCR7eFJhbmdlUGxhaW59KVxcXFxzKy1cXFxccysoJHt4UmFuZ2VQbGFpbn0pXFxcXHMqJGA7XG5jb25zdCBtYWluVmVyc2lvbkxvb3NlID0gYCgke251bWVyaWNJZGVudGlmaWVyTG9vc2V9KVxcXFwuKCR7bnVtZXJpY0lkZW50aWZpZXJMb29zZX0pXFxcXC4oJHtudW1lcmljSWRlbnRpZmllckxvb3NlfSlgO1xuY29uc3QgbG9vc2VQbGFpbiA9IGBbdj1cXFxcc10qJHttYWluVmVyc2lvbkxvb3NlfSR7cHJlUmVsZWFzZUxvb3NlfT8ke2J1aWxkfT9gO1xuY29uc3QgZ3RsdCA9ICcoKD86PHw+KT89PyknO1xuY29uc3QgY29tcGFyYXRvclRyaW0gPSBgKFxcXFxzKikke2d0bHR9XFxcXHMqKCR7bG9vc2VQbGFpbn18JHt4UmFuZ2VQbGFpbn0pYDtcbmNvbnN0IGxvbmVUaWxkZSA9ICcoPzp+Pj8pJztcbmNvbnN0IHRpbGRlVHJpbSA9IGAoXFxcXHMqKSR7bG9uZVRpbGRlfVxcXFxzK2A7XG5jb25zdCBsb25lQ2FyZXQgPSAnKD86XFxcXF4pJztcbmNvbnN0IGNhcmV0VHJpbSA9IGAoXFxcXHMqKSR7bG9uZUNhcmV0fVxcXFxzK2A7XG5jb25zdCBzdGFyID0gJyg8fD4pPz0/XFxcXHMqXFxcXConO1xuY29uc3QgY2FyZXQgPSBgXiR7bG9uZUNhcmV0fSR7eFJhbmdlUGxhaW59JGA7XG5jb25zdCBtYWluVmVyc2lvbiA9IGAoJHtudW1lcmljSWRlbnRpZmllcn0pXFxcXC4oJHtudW1lcmljSWRlbnRpZmllcn0pXFxcXC4oJHtudW1lcmljSWRlbnRpZmllcn0pYDtcbmNvbnN0IGZ1bGxQbGFpbiA9IGB2PyR7bWFpblZlcnNpb259JHtwcmVSZWxlYXNlfT8ke2J1aWxkfT9gO1xuY29uc3QgdGlsZGUgPSBgXiR7bG9uZVRpbGRlfSR7eFJhbmdlUGxhaW59JGA7XG5jb25zdCB4UmFuZ2UgPSBgXiR7Z3RsdH1cXFxccyoke3hSYW5nZVBsYWlufSRgO1xuY29uc3QgY29tcGFyYXRvciA9IGBeJHtndGx0fVxcXFxzKigke2Z1bGxQbGFpbn0pJHxeJGA7XG4vLyBjb3B5IGZyb20gc2VtdmVyIHBhY2thZ2VcbmNvbnN0IGd0ZTAgPSAnXlxcXFxzKj49XFxcXHMqMC4wLjBcXFxccyokJztcblxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gcGFyc2VSZWdleChzb3VyY2UpIHtcbiAgICByZXR1cm4gbmV3IFJlZ0V4cChzb3VyY2UpO1xufVxuZnVuY3Rpb24gaXNYVmVyc2lvbih2ZXJzaW9uKSB7XG4gICAgcmV0dXJuICF2ZXJzaW9uIHx8IHZlcnNpb24udG9Mb3dlckNhc2UoKSA9PT0gJ3gnIHx8IHZlcnNpb24gPT09ICcqJztcbn1cbmZ1bmN0aW9uIHBpcGUoLi4uZm5zKSB7XG4gICAgcmV0dXJuICh4KT0+Zm5zLnJlZHVjZSgodiwgZik9PmYodiksIHgpO1xufVxuZnVuY3Rpb24gZXh0cmFjdENvbXBhcmF0b3IoY29tcGFyYXRvclN0cmluZykge1xuICAgIHJldHVybiBjb21wYXJhdG9yU3RyaW5nLm1hdGNoKHBhcnNlUmVnZXgoY29tcGFyYXRvcikpO1xufVxuZnVuY3Rpb24gY29tYmluZVZlcnNpb24obWFqb3IsIG1pbm9yLCBwYXRjaCwgcHJlUmVsZWFzZSkge1xuICAgIGNvbnN0IG1haW5WZXJzaW9uID0gYCR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9YDtcbiAgICBpZiAocHJlUmVsZWFzZSkge1xuICAgICAgICByZXR1cm4gYCR7bWFpblZlcnNpb259LSR7cHJlUmVsZWFzZX1gO1xuICAgIH1cbiAgICByZXR1cm4gbWFpblZlcnNpb247XG59XG5cbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbmZ1bmN0aW9uIHBhcnNlSHlwaGVuKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleChoeXBoZW5SYW5nZSksIChfcmFuZ2UsIGZyb20sIGZyb21NYWpvciwgZnJvbU1pbm9yLCBmcm9tUGF0Y2gsIF9mcm9tUHJlUmVsZWFzZSwgX2Zyb21CdWlsZCwgdG8sIHRvTWFqb3IsIHRvTWlub3IsIHRvUGF0Y2gsIHRvUHJlUmVsZWFzZSk9PntcbiAgICAgICAgaWYgKGlzWFZlcnNpb24oZnJvbU1ham9yKSkge1xuICAgICAgICAgICAgZnJvbSA9ICcnO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24oZnJvbU1pbm9yKSkge1xuICAgICAgICAgICAgZnJvbSA9IGA+PSR7ZnJvbU1ham9yfS4wLjBgO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24oZnJvbVBhdGNoKSkge1xuICAgICAgICAgICAgZnJvbSA9IGA+PSR7ZnJvbU1ham9yfS4ke2Zyb21NaW5vcn0uMGA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmcm9tID0gYD49JHtmcm9tfWA7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGlzWFZlcnNpb24odG9NYWpvcikpIHtcbiAgICAgICAgICAgIHRvID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbih0b01pbm9yKSkge1xuICAgICAgICAgICAgdG8gPSBgPCR7TnVtYmVyKHRvTWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24odG9QYXRjaCkpIHtcbiAgICAgICAgICAgIHRvID0gYDwke3RvTWFqb3J9LiR7TnVtYmVyKHRvTWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgfSBlbHNlIGlmICh0b1ByZVJlbGVhc2UpIHtcbiAgICAgICAgICAgIHRvID0gYDw9JHt0b01ham9yfS4ke3RvTWlub3J9LiR7dG9QYXRjaH0tJHt0b1ByZVJlbGVhc2V9YDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRvID0gYDw9JHt0b31gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtmcm9tfSAke3RvfWAudHJpbSgpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yVHJpbShyYW5nZSkge1xuICAgIHJldHVybiByYW5nZS5yZXBsYWNlKHBhcnNlUmVnZXgoY29tcGFyYXRvclRyaW0pLCAnJDEkMiQzJyk7XG59XG5mdW5jdGlvbiBwYXJzZVRpbGRlVHJpbShyYW5nZSkge1xuICAgIHJldHVybiByYW5nZS5yZXBsYWNlKHBhcnNlUmVnZXgodGlsZGVUcmltKSwgJyQxficpO1xufVxuZnVuY3Rpb24gcGFyc2VDYXJldFRyaW0ocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UucmVwbGFjZShwYXJzZVJlZ2V4KGNhcmV0VHJpbSksICckMV4nKTtcbn1cbmZ1bmN0aW9uIHBhcnNlQ2FyZXRzKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgocmFuZ2VWZXJzaW9uKT0+cmFuZ2VWZXJzaW9uLnJlcGxhY2UocGFyc2VSZWdleChjYXJldCksIChfLCBtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKT0+e1xuICAgICAgICAgICAgaWYgKGlzWFZlcnNpb24obWFqb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKG1pbm9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4wLjAgPCR7TnVtYmVyKG1ham9yKSArIDF9LjAuMC0wYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihwYXRjaCkpIHtcbiAgICAgICAgICAgICAgICBpZiAobWFqb3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uMCA8JHttYWpvcn0uJHtOdW1iZXIobWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uMCA8JHtOdW1iZXIobWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgIGlmIChtYWpvciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5vciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0tJHtwcmVSZWxlYXNlfSA8JHttYWpvcn0uJHttaW5vcn0uJHtOdW1iZXIocGF0Y2gpICsgMX0tMGA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0tJHtwcmVSZWxlYXNlfSA8JHttYWpvcn0uJHtOdW1iZXIobWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofS0ke3ByZVJlbGVhc2V9IDwke051bWJlcihtYWpvcikgKyAxfS4wLjAtMGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAobWFqb3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICBpZiAobWlub3IgPT09ICcwJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9IDwke21ham9yfS4ke21pbm9yfS4ke051bWJlcihwYXRjaCkgKyAxfS0wYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofSA8JHttYWpvcn0uJHtOdW1iZXIobWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0gPCR7TnVtYmVyKG1ham9yKSArIDF9LjAuMC0wYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkpLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGlsZGVzKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnRyaW0oKS5zcGxpdCgvXFxzKy8pLm1hcCgocmFuZ2VWZXJzaW9uKT0+cmFuZ2VWZXJzaW9uLnJlcGxhY2UocGFyc2VSZWdleCh0aWxkZSksIChfLCBtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKT0+e1xuICAgICAgICAgICAgaWYgKGlzWFZlcnNpb24obWFqb3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICcnO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKG1pbm9yKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4wLjAgPCR7TnVtYmVyKG1ham9yKSArIDF9LjAuMC0wYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihwYXRjaCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uMCA8JHttYWpvcn0uJHtOdW1iZXIobWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJlUmVsZWFzZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofS0ke3ByZVJlbGVhc2V9IDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9IDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICB9KSkuam9pbignICcpO1xufVxuZnVuY3Rpb24gcGFyc2VYUmFuZ2VzKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnNwbGl0KC9cXHMrLykubWFwKChyYW5nZVZlcnNpb24pPT5yYW5nZVZlcnNpb24udHJpbSgpLnJlcGxhY2UocGFyc2VSZWdleCh4UmFuZ2UpLCAocmV0LCBndGx0LCBtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKT0+e1xuICAgICAgICAgICAgY29uc3QgaXNYTWFqb3IgPSBpc1hWZXJzaW9uKG1ham9yKTtcbiAgICAgICAgICAgIGNvbnN0IGlzWE1pbm9yID0gaXNYTWFqb3IgfHwgaXNYVmVyc2lvbihtaW5vcik7XG4gICAgICAgICAgICBjb25zdCBpc1hQYXRjaCA9IGlzWE1pbm9yIHx8IGlzWFZlcnNpb24ocGF0Y2gpO1xuICAgICAgICAgICAgaWYgKGd0bHQgPT09ICc9JyAmJiBpc1hQYXRjaCkge1xuICAgICAgICAgICAgICAgIGd0bHQgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHByZVJlbGVhc2UgPSAnJztcbiAgICAgICAgICAgIGlmIChpc1hNYWpvcikge1xuICAgICAgICAgICAgICAgIGlmIChndGx0ID09PSAnPicgfHwgZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgaXMgYWxsb3dlZFxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJzwwLjAuMC0wJztcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBub3RoaW5nIGlzIGZvcmJpZGRlblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gJyonO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3RsdCAmJiBpc1hQYXRjaCkge1xuICAgICAgICAgICAgICAgIC8vIHJlcGxhY2UgWCB3aXRoIDBcbiAgICAgICAgICAgICAgICBpZiAoaXNYTWlub3IpIHtcbiAgICAgICAgICAgICAgICAgICAgbWlub3IgPSAwO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgaWYgKGd0bHQgPT09ICc+Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyA+MSA9PiA+PTIuMC4wXG4gICAgICAgICAgICAgICAgICAgIC8vID4xLjIgPT4gPj0xLjMuMFxuICAgICAgICAgICAgICAgICAgICBndGx0ID0gJz49JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzWE1pbm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWpvciA9IE51bWJlcihtYWpvcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlub3IgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlub3IgPSBOdW1iZXIobWlub3IpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBhdGNoID0gMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZ3RsdCA9PT0gJzw9Jykge1xuICAgICAgICAgICAgICAgICAgICAvLyA8PTAuNy54IGlzIGFjdHVhbGx5IDwwLjguMCwgc2luY2UgYW55IDAuNy54IHNob3VsZCBwYXNzXG4gICAgICAgICAgICAgICAgICAgIC8vIFNpbWlsYXJseSwgPD03LnggaXMgYWN0dWFsbHkgPDguMC4wLCBldGMuXG4gICAgICAgICAgICAgICAgICAgIGd0bHQgPSAnPCc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc1hNaW5vcikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWFqb3IgPSBOdW1iZXIobWFqb3IpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1pbm9yID0gTnVtYmVyKG1pbm9yKSArIDE7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGd0bHQgPT09ICc8Jykge1xuICAgICAgICAgICAgICAgICAgICBwcmVSZWxlYXNlID0gJy0wJztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGAke2d0bHQgKyBtYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0ke3ByZVJlbGVhc2V9YDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoaXNYTWlub3IpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uMC4wJHtwcmVSZWxlYXNlfSA8JHtOdW1iZXIobWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hQYXRjaCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4wJHtwcmVSZWxlYXNlfSA8JHttYWpvcn0uJHtOdW1iZXIobWlub3IpICsgMX0uMC0wYDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgIH0pKS5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBwYXJzZVN0YXIocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UudHJpbSgpLnJlcGxhY2UocGFyc2VSZWdleChzdGFyKSwgJycpO1xufVxuZnVuY3Rpb24gcGFyc2VHVEUwKGNvbXBhcmF0b3JTdHJpbmcpIHtcbiAgICByZXR1cm4gY29tcGFyYXRvclN0cmluZy50cmltKCkucmVwbGFjZShwYXJzZVJlZ2V4KGd0ZTApLCAnJyk7XG59XG5cbi8vIGZvcmsgZnJvbSBodHRwczovL2dpdGh1Yi5jb20vb3JpZ2luanMvdml0ZS1wbHVnaW4tZmVkZXJhdGlvbi9ibG9iL3YxLjEuMTIvcGFja2FnZXMvbGliL3NyYy91dGlscy9zZW12ZXIvaW5kZXgudHNcbi8vIENvcHlyaWdodCAoYylcbi8vIHZpdGUtcGx1Z2luLWZlZGVyYXRpb24gaXMgbGljZW5zZWQgdW5kZXIgTXVsYW4gUFNMIHYyLlxuLy8gWW91IGNhbiB1c2UgdGhpcyBzb2Z0d2FyZSBhY2NvcmRpbmcgdG8gdGhlIHRlcm1zIGFuZCBjb25kaXRpb25zIG9mIHRoZSBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgbWF5IG9idGFpbiBhIGNvcHkgb2YgTXVsYW4gUFNMIHYyIGF0OlxuLy8gICAgICBodHRwOi8vbGljZW5zZS5jb3NjbC5vcmcuY24vTXVsYW5QU0wyXG4vLyBUSElTIFNPRlRXQVJFIElTIFBST1ZJREVEIE9OIEFOIFwiQVMgSVNcIiBCQVNJUywgV0lUSE9VVCBXQVJSQU5USUVTIE9GIEFOWSBLSU5ELCBFSVRIRVIgRVhQUkVTUyBPUiBJTVBMSUVELCBJTkNMVURJTkcgQlVUIE5PVCBMSU1JVEVEIFRPIE5PTi1JTkZSSU5HRU1FTlQsIE1FUkNIQU5UQUJJTElUWSBPUiBGSVQgRk9SIEEgUEFSVElDVUxBUiBQVVJQT1NFLlxuLy8gU2VlIHRoZSBNdWxhbiBQU0wgdjIgZm9yIG1vcmUgZGV0YWlscy5cbmZ1bmN0aW9uIGNvbXBhcmVBdG9tKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHtcbiAgICByYW5nZUF0b20gPSBOdW1iZXIocmFuZ2VBdG9tKSB8fCByYW5nZUF0b207XG4gICAgdmVyc2lvbkF0b20gPSBOdW1iZXIodmVyc2lvbkF0b20pIHx8IHZlcnNpb25BdG9tO1xuICAgIGlmIChyYW5nZUF0b20gPiB2ZXJzaW9uQXRvbSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKHJhbmdlQXRvbSA9PT0gdmVyc2lvbkF0b20pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIHJldHVybiAtMTtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVQcmVSZWxlYXNlKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHtcbiAgICBjb25zdCB7IHByZVJlbGVhc2U6IHJhbmdlUHJlUmVsZWFzZSB9ID0gcmFuZ2VBdG9tO1xuICAgIGNvbnN0IHsgcHJlUmVsZWFzZTogdmVyc2lvblByZVJlbGVhc2UgfSA9IHZlcnNpb25BdG9tO1xuICAgIGlmIChyYW5nZVByZVJlbGVhc2UgPT09IHVuZGVmaW5lZCAmJiBCb29sZWFuKHZlcnNpb25QcmVSZWxlYXNlKSkge1xuICAgICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgaWYgKEJvb2xlYW4ocmFuZ2VQcmVSZWxlYXNlKSAmJiB2ZXJzaW9uUHJlUmVsZWFzZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gICAgaWYgKHJhbmdlUHJlUmVsZWFzZSA9PT0gdW5kZWZpbmVkICYmIHZlcnNpb25QcmVSZWxlYXNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGZvcihsZXQgaSA9IDAsIG4gPSByYW5nZVByZVJlbGVhc2UubGVuZ3RoOyBpIDw9IG47IGkrKyl7XG4gICAgICAgIGNvbnN0IHJhbmdlRWxlbWVudCA9IHJhbmdlUHJlUmVsZWFzZVtpXTtcbiAgICAgICAgY29uc3QgdmVyc2lvbkVsZW1lbnQgPSB2ZXJzaW9uUHJlUmVsZWFzZVtpXTtcbiAgICAgICAgaWYgKHJhbmdlRWxlbWVudCA9PT0gdmVyc2lvbkVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyYW5nZUVsZW1lbnQgPT09IHVuZGVmaW5lZCAmJiB2ZXJzaW9uRWxlbWVudCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXJhbmdlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2ZXJzaW9uRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBjb21wYXJlQXRvbShyYW5nZUVsZW1lbnQsIHZlcnNpb25FbGVtZW50KTtcbiAgICB9XG4gICAgcmV0dXJuIDA7XG59XG5mdW5jdGlvbiBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB7XG4gICAgcmV0dXJuIGNvbXBhcmVBdG9tKHJhbmdlQXRvbS5tYWpvciwgdmVyc2lvbkF0b20ubWFqb3IpIHx8IGNvbXBhcmVBdG9tKHJhbmdlQXRvbS5taW5vciwgdmVyc2lvbkF0b20ubWlub3IpIHx8IGNvbXBhcmVBdG9tKHJhbmdlQXRvbS5wYXRjaCwgdmVyc2lvbkF0b20ucGF0Y2gpIHx8IGNvbXBhcmVQcmVSZWxlYXNlKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pO1xufVxuZnVuY3Rpb24gZXEocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIHJldHVybiByYW5nZUF0b20udmVyc2lvbiA9PT0gdmVyc2lvbkF0b20udmVyc2lvbjtcbn1cbmZ1bmN0aW9uIGNvbXBhcmUocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIHN3aXRjaChyYW5nZUF0b20ub3BlcmF0b3Ipe1xuICAgICAgICBjYXNlICcnOlxuICAgICAgICBjYXNlICc9JzpcbiAgICAgICAgICAgIHJldHVybiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKTtcbiAgICAgICAgY2FzZSAnPic6XG4gICAgICAgICAgICByZXR1cm4gY29tcGFyZVZlcnNpb24ocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkgPCAwO1xuICAgICAgICBjYXNlICc+PSc6XG4gICAgICAgICAgICByZXR1cm4gZXEocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkgfHwgY29tcGFyZVZlcnNpb24ocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkgPCAwO1xuICAgICAgICBjYXNlICc8JzpcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA+IDA7XG4gICAgICAgIGNhc2UgJzw9JzpcbiAgICAgICAgICAgIHJldHVybiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB8fCBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA+IDA7XG4gICAgICAgIGNhc2UgdW5kZWZpbmVkOlxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG1lYW4gKiBvciB4IC0+IGFsbCB2ZXJzaW9uc1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cblxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gcGFyc2VDb21wYXJhdG9yU3RyaW5nKHJhbmdlKSB7XG4gICAgcmV0dXJuIHBpcGUoLy8gaGFuZGxlIGNhcmV0XG4gICAgLy8gXiAtLT4gKiAoYW55LCBraW5kYSBzaWxseSlcbiAgICAvLyBeMiwgXjIueCwgXjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4gICAgLy8gXjIuMCwgXjIuMC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4gICAgLy8gXjEuMiwgXjEuMi54IC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4gICAgLy8gXjEuMi4zIC0tPiA+PTEuMi4zIDwyLjAuMC0wXG4gICAgLy8gXjEuMi4wIC0tPiA+PTEuMi4wIDwyLjAuMC0wXG4gICAgcGFyc2VDYXJldHMsIC8vIGhhbmRsZSB0aWxkZVxuICAgIC8vIH4sIH4+IC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuICAgIC8vIH4yLCB+Mi54LCB+Mi54LngsIH4+Miwgfj4yLnggfj4yLngueCAtLT4gPj0yLjAuMCA8My4wLjAtMFxuICAgIC8vIH4yLjAsIH4yLjAueCwgfj4yLjAsIH4+Mi4wLnggLS0+ID49Mi4wLjAgPDIuMS4wLTBcbiAgICAvLyB+MS4yLCB+MS4yLngsIH4+MS4yLCB+PjEuMi54IC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4gICAgLy8gfjEuMi4zLCB+PjEuMi4zIC0tPiA+PTEuMi4zIDwxLjMuMC0wXG4gICAgLy8gfjEuMi4wLCB+PjEuMi4wIC0tPiA+PTEuMi4wIDwxLjMuMC0wXG4gICAgcGFyc2VUaWxkZXMsIHBhcnNlWFJhbmdlcywgcGFyc2VTdGFyKShyYW5nZSk7XG59XG5mdW5jdGlvbiBwYXJzZVJhbmdlKHJhbmdlKSB7XG4gICAgcmV0dXJuIHBpcGUoLy8gaGFuZGxlIGh5cGhlblJhbmdlXG4gICAgLy8gYDEuMi4zIC0gMS4yLjRgID0+IGA+PTEuMi4zIDw9MS4yLjRgXG4gICAgcGFyc2VIeXBoZW4sIC8vIGhhbmRsZSB0cmltIGNvbXBhcmF0b3JcbiAgICAvLyBgPiAxLjIuMyA8IDEuMi41YCA9PiBgPjEuMi4zIDwxLjIuNWBcbiAgICBwYXJzZUNvbXBhcmF0b3JUcmltLCAvLyBoYW5kbGUgdHJpbSB0aWxkZVxuICAgIC8vIGB+IDEuMi4zYCA9PiBgfjEuMi4zYFxuICAgIHBhcnNlVGlsZGVUcmltLCAvLyBoYW5kbGUgdHJpbSBjYXJldFxuICAgIC8vIGBeIDEuMi4zYCA9PiBgXjEuMi4zYFxuICAgIHBhcnNlQ2FyZXRUcmltKShyYW5nZS50cmltKCkpLnNwbGl0KC9cXHMrLykuam9pbignICcpO1xufVxuZnVuY3Rpb24gc2F0aXNmeSh2ZXJzaW9uLCByYW5nZSkge1xuICAgIGlmICghdmVyc2lvbikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIC8vIEV4dHJhY3QgdmVyc2lvbiBkZXRhaWxzIG9uY2VcbiAgICBjb25zdCBleHRyYWN0ZWRWZXJzaW9uID0gZXh0cmFjdENvbXBhcmF0b3IodmVyc2lvbik7XG4gICAgaWYgKCFleHRyYWN0ZWRWZXJzaW9uKSB7XG4gICAgICAgIC8vIElmIHRoZSB2ZXJzaW9uIHN0cmluZyBpcyBpbnZhbGlkLCBpdCBjYW4ndCBzYXRpc2Z5IGFueSByYW5nZVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IFssIHZlcnNpb25PcGVyYXRvciwgLCB2ZXJzaW9uTWFqb3IsIHZlcnNpb25NaW5vciwgdmVyc2lvblBhdGNoLCB2ZXJzaW9uUHJlUmVsZWFzZV0gPSBleHRyYWN0ZWRWZXJzaW9uO1xuICAgIGNvbnN0IHZlcnNpb25BdG9tID0ge1xuICAgICAgICBvcGVyYXRvcjogdmVyc2lvbk9wZXJhdG9yLFxuICAgICAgICB2ZXJzaW9uOiBjb21iaW5lVmVyc2lvbih2ZXJzaW9uTWFqb3IsIHZlcnNpb25NaW5vciwgdmVyc2lvblBhdGNoLCB2ZXJzaW9uUHJlUmVsZWFzZSksXG4gICAgICAgIG1ham9yOiB2ZXJzaW9uTWFqb3IsXG4gICAgICAgIG1pbm9yOiB2ZXJzaW9uTWlub3IsXG4gICAgICAgIHBhdGNoOiB2ZXJzaW9uUGF0Y2gsXG4gICAgICAgIHByZVJlbGVhc2U6IHZlcnNpb25QcmVSZWxlYXNlID09IG51bGwgPyB2b2lkIDAgOiB2ZXJzaW9uUHJlUmVsZWFzZS5zcGxpdCgnLicpXG4gICAgfTtcbiAgICAvLyBTcGxpdCB0aGUgcmFuZ2UgYnkgfHwgdG8gaGFuZGxlIE9SIGNvbmRpdGlvbnNcbiAgICBjb25zdCBvclJhbmdlcyA9IHJhbmdlLnNwbGl0KCd8fCcpO1xuICAgIGZvciAoY29uc3Qgb3JSYW5nZSBvZiBvclJhbmdlcyl7XG4gICAgICAgIGNvbnN0IHRyaW1tZWRPclJhbmdlID0gb3JSYW5nZS50cmltKCk7XG4gICAgICAgIGlmICghdHJpbW1lZE9yUmFuZ2UpIHtcbiAgICAgICAgICAgIC8vIEFuIGVtcHR5IHJhbmdlIHN0cmluZyBzaWduaWZpZXMgd2lsZGNhcmQgKiwgc2F0aXNmeSBhbnkgdmFsaWQgdmVyc2lvblxuICAgICAgICAgICAgLy8gKFdlIGFscmVhZHkgY2hlY2tlZCBpZiB0aGUgdmVyc2lvbiBpdHNlbGYgaXMgdmFsaWQpXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBIYW5kbGUgc2ltcGxlIHdpbGRjYXJkcyBleHBsaWNpdGx5IGJlZm9yZSBjb21wbGV4IHBhcnNpbmdcbiAgICAgICAgaWYgKHRyaW1tZWRPclJhbmdlID09PSAnKicgfHwgdHJpbW1lZE9yUmFuZ2UgPT09ICd4Jykge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIC8vIEFwcGx5IGV4aXN0aW5nIHBhcnNpbmcgbG9naWMgdG8gdGhlIGN1cnJlbnQgT1Igc3ViLXJhbmdlXG4gICAgICAgICAgICBjb25zdCBwYXJzZWRTdWJSYW5nZSA9IHBhcnNlUmFuZ2UodHJpbW1lZE9yUmFuZ2UpOyAvLyBIYW5kbGVzIGh5cGhlbnMsIHRyaW1zIGV0Yy5cbiAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSByZXN1bHQgb2YgaW5pdGlhbCBwYXJzaW5nIGlzIGVtcHR5LCB3aGljaCBjYW4gaGFwcGVuXG4gICAgICAgICAgICAvLyBmb3Igc29tZSB3aWxkY2FyZCBjYXNlcyBoYW5kbGVkIGJ5IHBhcnNlUmFuZ2UvcGFyc2VDb21wYXJhdG9yU3RyaW5nLlxuICAgICAgICAgICAgLy8gRS5nLiBgcGFyc2VTdGFyYCB1c2VkIGluIGBwYXJzZUNvbXBhcmF0b3JTdHJpbmdgIHJldHVybnMgJycuXG4gICAgICAgICAgICBpZiAoIXBhcnNlZFN1YlJhbmdlLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIC8vIElmIHBhcnNpbmcgcmVzdWx0cyBpbiBlbXB0eSBzdHJpbmcsIHRyZWF0IGFzIHdpbGRjYXJkIG1hdGNoXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXJzZWRDb21wYXJhdG9yU3RyaW5nID0gcGFyc2VkU3ViUmFuZ2Uuc3BsaXQoJyAnKS5tYXAoKHJhbmdlVmVyc2lvbik9PnBhcnNlQ29tcGFyYXRvclN0cmluZyhyYW5nZVZlcnNpb24pKSAvLyBFeHBhbmRzIF4sIH5cbiAgICAgICAgICAgIC5qb2luKCcgJyk7XG4gICAgICAgICAgICAvLyBDaGVjayBhZ2FpbiBpZiB0aGUgY29tcGFyYXRvciBzdHJpbmcgYmVjYW1lIGVtcHR5IGFmdGVyIHNwZWNpZmljIHBhcnNpbmcgbGlrZSBeIG9yIH5cbiAgICAgICAgICAgIGlmICghcGFyc2VkQ29tcGFyYXRvclN0cmluZy50cmltKCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNwbGl0IHRoZSBzdWItcmFuZ2UgYnkgc3BhY2UgZm9yIGltcGxpY2l0IEFORCBjb25kaXRpb25zXG4gICAgICAgICAgICBjb25zdCBjb21wYXJhdG9ycyA9IHBhcnNlZENvbXBhcmF0b3JTdHJpbmcuc3BsaXQoL1xccysvKS5tYXAoKGNvbXBhcmF0b3IpPT5wYXJzZUdURTAoY29tcGFyYXRvcikpLy8gRmlsdGVyIG91dCBlbXB0eSBzdHJpbmdzIHRoYXQgbWlnaHQgcmVzdWx0IGZyb20gbXVsdGlwbGUgc3BhY2VzXG4gICAgICAgICAgICAuZmlsdGVyKEJvb2xlYW4pO1xuICAgICAgICAgICAgLy8gSWYgYSBzdWItcmFuZ2UgYmVjb21lcyBlbXB0eSBhZnRlciBwYXJzaW5nIChlLmcuLCBpbnZhbGlkIGNoYXJhY3RlcnMpLFxuICAgICAgICAgICAgLy8gaXQgY2Fubm90IGJlIHNhdGlzZmllZC4gVGhpcyBjaGVjayBtaWdodCBiZSByZWR1bmRhbnQgbm93IGJ1dCBrZXB0IGZvciBzYWZldHkuXG4gICAgICAgICAgICBpZiAoY29tcGFyYXRvcnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgc3ViUmFuZ2VTYXRpc2ZpZWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChjb25zdCBjb21wYXJhdG9yIG9mIGNvbXBhcmF0b3JzKXtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRyYWN0ZWRDb21wYXJhdG9yID0gZXh0cmFjdENvbXBhcmF0b3IoY29tcGFyYXRvcik7XG4gICAgICAgICAgICAgICAgLy8gSWYgYW55IHBhcnQgb2YgdGhlIEFORCBzdWItcmFuZ2UgaXMgaW52YWxpZCwgdGhlIHN1Yi1yYW5nZSBpcyBub3Qgc2F0aXNmaWVkXG4gICAgICAgICAgICAgICAgaWYgKCFleHRyYWN0ZWRDb21wYXJhdG9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YlJhbmdlU2F0aXNmaWVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBbLCByYW5nZU9wZXJhdG9yLCAsIHJhbmdlTWFqb3IsIHJhbmdlTWlub3IsIHJhbmdlUGF0Y2gsIHJhbmdlUHJlUmVsZWFzZV0gPSBleHRyYWN0ZWRDb21wYXJhdG9yO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJhbmdlQXRvbSA9IHtcbiAgICAgICAgICAgICAgICAgICAgb3BlcmF0b3I6IHJhbmdlT3BlcmF0b3IsXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246IGNvbWJpbmVWZXJzaW9uKHJhbmdlTWFqb3IsIHJhbmdlTWlub3IsIHJhbmdlUGF0Y2gsIHJhbmdlUHJlUmVsZWFzZSksXG4gICAgICAgICAgICAgICAgICAgIG1ham9yOiByYW5nZU1ham9yLFxuICAgICAgICAgICAgICAgICAgICBtaW5vcjogcmFuZ2VNaW5vcixcbiAgICAgICAgICAgICAgICAgICAgcGF0Y2g6IHJhbmdlUGF0Y2gsXG4gICAgICAgICAgICAgICAgICAgIHByZVJlbGVhc2U6IHJhbmdlUHJlUmVsZWFzZSA9PSBudWxsID8gdm9pZCAwIDogcmFuZ2VQcmVSZWxlYXNlLnNwbGl0KCcuJylcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIC8vIENoZWNrIGlmIHRoZSB2ZXJzaW9uIHNhdGlzZmllcyB0aGlzIHNwZWNpZmljIGNvbXBhcmF0b3IgaW4gdGhlIEFORCBjaGFpblxuICAgICAgICAgICAgICAgIGlmICghY29tcGFyZShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSkge1xuICAgICAgICAgICAgICAgICAgICBzdWJSYW5nZVNhdGlzZmllZCA9IGZhbHNlOyAvLyBUaGlzIHBhcnQgb2YgdGhlIEFORCBjb25kaXRpb24gZmFpbGVkXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyBObyBuZWVkIHRvIGNoZWNrIGZ1cnRoZXIgY29tcGFyYXRvcnMgaW4gdGhpcyBzdWItcmFuZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBJZiBhbGwgQU5EIGNvbmRpdGlvbnMgd2l0aGluIHRoaXMgT1Igc3ViLXJhbmdlIHdlcmUgbWV0LCB0aGUgb3ZlcmFsbCByYW5nZSBpcyBzYXRpc2ZpZWRcbiAgICAgICAgICAgIGlmIChzdWJSYW5nZVNhdGlzZmllZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBMb2cgZXJyb3IgYW5kIHRyZWF0IHRoaXMgc3ViLXJhbmdlIGFzIHVuc2F0aXNmaWVkXG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBbc2VtdmVyXSBFcnJvciBwcm9jZXNzaW5nIHJhbmdlIHBhcnQgXCIke3RyaW1tZWRPclJhbmdlfVwiOmAsIGUpO1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gSWYgbm9uZSBvZiB0aGUgT1Igc3ViLXJhbmdlcyB3ZXJlIHNhdGlzZmllZFxuICAgIHJldHVybiBmYWxzZTtcbn1cblxuZnVuY3Rpb24gZm9ybWF0U2hhcmUoc2hhcmVBcmdzLCBmcm9tLCBuYW1lLCBzaGFyZVN0cmF0ZWd5KSB7XG4gICAgbGV0IGdldDtcbiAgICBpZiAoJ2dldCcgaW4gc2hhcmVBcmdzKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItZGVzdHJ1Y3R1cmluZ1xuICAgICAgICBnZXQgPSBzaGFyZUFyZ3MuZ2V0O1xuICAgIH0gZWxzZSBpZiAoJ2xpYicgaW4gc2hhcmVBcmdzKSB7XG4gICAgICAgIGdldCA9ICgpPT5Qcm9taXNlLnJlc29sdmUoc2hhcmVBcmdzLmxpYik7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgZ2V0ID0gKCk9PlByb21pc2UucmVzb2x2ZSgoKT0+e1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgQ2FuIG5vdCBnZXQgc2hhcmVkICcke25hbWV9JyFgKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cbiAgICB2YXIgX3NoYXJlQXJnc192ZXJzaW9uLCBfc2hhcmVBcmdzX3Njb3BlLCBfc2hhcmVBcmdzX3N0cmF0ZWd5O1xuICAgIHJldHVybiBfZXh0ZW5kcyh7XG4gICAgICAgIGRlcHM6IFtdLFxuICAgICAgICB1c2VJbjogW10sXG4gICAgICAgIGZyb20sXG4gICAgICAgIGxvYWRpbmc6IG51bGxcbiAgICB9LCBzaGFyZUFyZ3MsIHtcbiAgICAgICAgc2hhcmVDb25maWc6IF9leHRlbmRzKHtcbiAgICAgICAgICAgIHJlcXVpcmVkVmVyc2lvbjogYF4ke3NoYXJlQXJncy52ZXJzaW9ufWAsXG4gICAgICAgICAgICBzaW5nbGV0b246IGZhbHNlLFxuICAgICAgICAgICAgZWFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgc3RyaWN0VmVyc2lvbjogZmFsc2VcbiAgICAgICAgfSwgc2hhcmVBcmdzLnNoYXJlQ29uZmlnKSxcbiAgICAgICAgZ2V0LFxuICAgICAgICBsb2FkZWQ6IChzaGFyZUFyZ3MgPT0gbnVsbCA/IHZvaWQgMCA6IHNoYXJlQXJncy5sb2FkZWQpIHx8ICdsaWInIGluIHNoYXJlQXJncyA/IHRydWUgOiB1bmRlZmluZWQsXG4gICAgICAgIHZlcnNpb246IChfc2hhcmVBcmdzX3ZlcnNpb24gPSBzaGFyZUFyZ3MudmVyc2lvbikgIT0gbnVsbCA/IF9zaGFyZUFyZ3NfdmVyc2lvbiA6ICcwJyxcbiAgICAgICAgc2NvcGU6IEFycmF5LmlzQXJyYXkoc2hhcmVBcmdzLnNjb3BlKSA/IHNoYXJlQXJncy5zY29wZSA6IFtcbiAgICAgICAgICAgIChfc2hhcmVBcmdzX3Njb3BlID0gc2hhcmVBcmdzLnNjb3BlKSAhPSBudWxsID8gX3NoYXJlQXJnc19zY29wZSA6ICdkZWZhdWx0J1xuICAgICAgICBdLFxuICAgICAgICBzdHJhdGVneTogKChfc2hhcmVBcmdzX3N0cmF0ZWd5ID0gc2hhcmVBcmdzLnN0cmF0ZWd5KSAhPSBudWxsID8gX3NoYXJlQXJnc19zdHJhdGVneSA6IHNoYXJlU3RyYXRlZ3kpIHx8ICd2ZXJzaW9uLWZpcnN0J1xuICAgIH0pO1xufVxuZnVuY3Rpb24gZm9ybWF0U2hhcmVDb25maWdzKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgY29uc3Qgc2hhcmVBcmdzID0gdXNlck9wdGlvbnMuc2hhcmVkIHx8IHt9O1xuICAgIGNvbnN0IGZyb20gPSB1c2VyT3B0aW9ucy5uYW1lO1xuICAgIGNvbnN0IHNoYXJlSW5mb3MgPSBPYmplY3Qua2V5cyhzaGFyZUFyZ3MpLnJlZHVjZSgocmVzLCBwa2dOYW1lKT0+e1xuICAgICAgICBjb25zdCBhcnJheVNoYXJlQXJncyA9IGFycmF5T3B0aW9ucyhzaGFyZUFyZ3NbcGtnTmFtZV0pO1xuICAgICAgICByZXNbcGtnTmFtZV0gPSByZXNbcGtnTmFtZV0gfHwgW107XG4gICAgICAgIGFycmF5U2hhcmVBcmdzLmZvckVhY2goKHNoYXJlQ29uZmlnKT0+e1xuICAgICAgICAgICAgcmVzW3BrZ05hbWVdLnB1c2goZm9ybWF0U2hhcmUoc2hhcmVDb25maWcsIGZyb20sIHBrZ05hbWUsIHVzZXJPcHRpb25zLnNoYXJlU3RyYXRlZ3kpKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSwge30pO1xuICAgIGNvbnN0IHNoYXJlZCA9IF9leHRlbmRzKHt9LCBnbG9iYWxPcHRpb25zLnNoYXJlZCk7XG4gICAgT2JqZWN0LmtleXMoc2hhcmVJbmZvcykuZm9yRWFjaCgoc2hhcmVLZXkpPT57XG4gICAgICAgIGlmICghc2hhcmVkW3NoYXJlS2V5XSkge1xuICAgICAgICAgICAgc2hhcmVkW3NoYXJlS2V5XSA9IHNoYXJlSW5mb3Nbc2hhcmVLZXldO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgc2hhcmVJbmZvc1tzaGFyZUtleV0uZm9yRWFjaCgobmV3VXNlclNoYXJlZE9wdGlvbnMpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgaXNTYW1lVmVyc2lvbiA9IHNoYXJlZFtzaGFyZUtleV0uZmluZCgoc2hhcmVkVmFsKT0+c2hhcmVkVmFsLnZlcnNpb24gPT09IG5ld1VzZXJTaGFyZWRPcHRpb25zLnZlcnNpb24pO1xuICAgICAgICAgICAgICAgIGlmICghaXNTYW1lVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICBzaGFyZWRbc2hhcmVLZXldLnB1c2gobmV3VXNlclNoYXJlZE9wdGlvbnMpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2hhcmVkLFxuICAgICAgICBzaGFyZUluZm9zXG4gICAgfTtcbn1cbmZ1bmN0aW9uIHZlcnNpb25MdChhLCBiKSB7XG4gICAgY29uc3QgdHJhbnNmb3JtSW52YWxpZFZlcnNpb24gPSAodmVyc2lvbik9PntcbiAgICAgICAgY29uc3QgaXNOdW1iZXJWZXJzaW9uID0gIU51bWJlci5pc05hTihOdW1iZXIodmVyc2lvbikpO1xuICAgICAgICBpZiAoaXNOdW1iZXJWZXJzaW9uKSB7XG4gICAgICAgICAgICBjb25zdCBzcGxpdEFyciA9IHZlcnNpb24uc3BsaXQoJy4nKTtcbiAgICAgICAgICAgIGxldCB2YWxpZFZlcnNpb24gPSB2ZXJzaW9uO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDMgLSBzcGxpdEFyci5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgdmFsaWRWZXJzaW9uICs9ICcuMCc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gdmFsaWRWZXJzaW9uO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB2ZXJzaW9uO1xuICAgIH07XG4gICAgaWYgKHNhdGlzZnkodHJhbnNmb3JtSW52YWxpZFZlcnNpb24oYSksIGA8PSR7dHJhbnNmb3JtSW52YWxpZFZlcnNpb24oYil9YCkpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbn1cbmNvbnN0IGZpbmRWZXJzaW9uID0gKHNoYXJlVmVyc2lvbk1hcCwgY2IpPT57XG4gICAgY29uc3QgY2FsbGJhY2sgPSBjYiB8fCBmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICAgICAgcmV0dXJuIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIE9iamVjdC5rZXlzKHNoYXJlVmVyc2lvbk1hcCkucmVkdWNlKChwcmV2LCBjdXIpPT57XG4gICAgICAgIGlmICghcHJldikge1xuICAgICAgICAgICAgcmV0dXJuIGN1cjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2FsbGJhY2socHJldiwgY3VyKSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cjtcbiAgICAgICAgfVxuICAgICAgICAvLyBkZWZhdWx0IHZlcnNpb24gaXMgJzAnIGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2svYmxvYi9tYWluL2xpYi9zaGFyaW5nL1Byb3ZpZGVTaGFyZWRNb2R1bGUuanMjTDEzNlxuICAgICAgICBpZiAocHJldiA9PT0gJzAnKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcmV2O1xuICAgIH0sIDApO1xufTtcbmNvbnN0IGlzTG9hZGVkID0gKHNoYXJlZCk9PntcbiAgICByZXR1cm4gQm9vbGVhbihzaGFyZWQubG9hZGVkKSB8fCB0eXBlb2Ygc2hhcmVkLmxpYiA9PT0gJ2Z1bmN0aW9uJztcbn07XG5jb25zdCBpc0xvYWRpbmcgPSAoc2hhcmVkKT0+e1xuICAgIHJldHVybiBCb29sZWFuKHNoYXJlZC5sb2FkaW5nKTtcbn07XG5mdW5jdGlvbiBmaW5kU2luZ2xldG9uVmVyc2lvbk9yZGVyQnlWZXJzaW9uKHNoYXJlU2NvcGVNYXAsIHNjb3BlLCBwa2dOYW1lKSB7XG4gICAgY29uc3QgdmVyc2lvbnMgPSBzaGFyZVNjb3BlTWFwW3Njb3BlXVtwa2dOYW1lXTtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgICAgICByZXR1cm4gIWlzTG9hZGVkKHZlcnNpb25zW3ByZXZdKSAmJiB2ZXJzaW9uTHQocHJldiwgY3VyKTtcbiAgICB9O1xuICAgIHJldHVybiBmaW5kVmVyc2lvbihzaGFyZVNjb3BlTWFwW3Njb3BlXVtwa2dOYW1lXSwgY2FsbGJhY2spO1xufVxuZnVuY3Rpb24gZmluZFNpbmdsZXRvblZlcnNpb25PcmRlckJ5TG9hZGVkKHNoYXJlU2NvcGVNYXAsIHNjb3BlLCBwa2dOYW1lKSB7XG4gICAgY29uc3QgdmVyc2lvbnMgPSBzaGFyZVNjb3BlTWFwW3Njb3BlXVtwa2dOYW1lXTtcbiAgICBjb25zdCBjYWxsYmFjayA9IGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgICAgICBjb25zdCBpc0xvYWRpbmdPckxvYWRlZCA9IChzaGFyZWQpPT57XG4gICAgICAgICAgICByZXR1cm4gaXNMb2FkZWQoc2hhcmVkKSB8fCBpc0xvYWRpbmcoc2hhcmVkKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGlzTG9hZGluZ09yTG9hZGVkKHZlcnNpb25zW2N1cl0pKSB7XG4gICAgICAgICAgICBpZiAoaXNMb2FkaW5nT3JMb2FkZWQodmVyc2lvbnNbcHJldl0pKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJvb2xlYW4odmVyc2lvbkx0KHByZXYsIGN1cikpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNMb2FkaW5nT3JMb2FkZWQodmVyc2lvbnNbcHJldl0pKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uKHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBnZXRGaW5kU2hhcmVGdW5jdGlvbihzdHJhdGVneSkge1xuICAgIGlmIChzdHJhdGVneSA9PT0gJ2xvYWRlZC1maXJzdCcpIHtcbiAgICAgICAgcmV0dXJuIGZpbmRTaW5nbGV0b25WZXJzaW9uT3JkZXJCeUxvYWRlZDtcbiAgICB9XG4gICAgcmV0dXJuIGZpbmRTaW5nbGV0b25WZXJzaW9uT3JkZXJCeVZlcnNpb247XG59XG5mdW5jdGlvbiBnZXRSZWdpc3RlcmVkU2hhcmUobG9jYWxTaGFyZVNjb3BlTWFwLCBwa2dOYW1lLCBzaGFyZUluZm8sIHJlc29sdmVTaGFyZSkge1xuICAgIGlmICghbG9jYWxTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgeyBzaGFyZUNvbmZpZywgc2NvcGUgPSBERUZBVUxUX1NDT1BFLCBzdHJhdGVneSB9ID0gc2hhcmVJbmZvO1xuICAgIGNvbnN0IHNjb3BlcyA9IEFycmF5LmlzQXJyYXkoc2NvcGUpID8gc2NvcGUgOiBbXG4gICAgICAgIHNjb3BlXG4gICAgXTtcbiAgICBmb3IgKGNvbnN0IHNjIG9mIHNjb3Blcyl7XG4gICAgICAgIGlmIChzaGFyZUNvbmZpZyAmJiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdICYmIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0pIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVxdWlyZWRWZXJzaW9uIH0gPSBzaGFyZUNvbmZpZztcbiAgICAgICAgICAgIGNvbnN0IGZpbmRTaGFyZUZ1bmN0aW9uID0gZ2V0RmluZFNoYXJlRnVuY3Rpb24oc3RyYXRlZ3kpO1xuICAgICAgICAgICAgY29uc3QgbWF4T3JTaW5nbGV0b25WZXJzaW9uID0gZmluZFNoYXJlRnVuY3Rpb24obG9jYWxTaGFyZVNjb3BlTWFwLCBzYywgcGtnTmFtZSk7XG4gICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRSZXNvbHZlciA9ICgpPT57XG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlQ29uZmlnLnNpbmdsZXRvbikge1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHJlcXVpcmVkVmVyc2lvbiA9PT0gJ3N0cmluZycgJiYgIXNhdGlzZnkobWF4T3JTaW5nbGV0b25WZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBtc2cgPSBgVmVyc2lvbiAke21heE9yU2luZ2xldG9uVmVyc2lvbn0gZnJvbSAke21heE9yU2luZ2xldG9uVmVyc2lvbiAmJiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW21heE9yU2luZ2xldG9uVmVyc2lvbl0uZnJvbX0gb2Ygc2hhcmVkIHNpbmdsZXRvbiBtb2R1bGUgJHtwa2dOYW1lfSBkb2VzIG5vdCBzYXRpc2Z5IHRoZSByZXF1aXJlbWVudCBvZiAke3NoYXJlSW5mby5mcm9tfSB3aGljaCBuZWVkcyAke3JlcXVpcmVkVmVyc2lvbn0pYDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZUNvbmZpZy5zdHJpY3RWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXJyb3IobXNnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2Fybihtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW21heE9yU2luZ2xldG9uVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlcXVpcmVkVmVyc2lvbiA9PT0gZmFsc2UgfHwgcmVxdWlyZWRWZXJzaW9uID09PSAnKicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW21heE9yU2luZ2xldG9uVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNhdGlzZnkobWF4T3JTaW5nbGV0b25WZXJzaW9uLCByZXF1aXJlZFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9jYWxTaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXVttYXhPclNpbmdsZXRvblZlcnNpb25dO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZvciAoY29uc3QgW3ZlcnNpb25LZXksIHZlcnNpb25WYWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMobG9jYWxTaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXSkpe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdGlzZnkodmVyc2lvbktleSwgcmVxdWlyZWRWZXJzaW9uKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB2ZXJzaW9uVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVNYXA6IGxvY2FsU2hhcmVTY29wZU1hcCxcbiAgICAgICAgICAgICAgICBzY29wZTogc2MsXG4gICAgICAgICAgICAgICAgcGtnTmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBtYXhPclNpbmdsZXRvblZlcnNpb24sXG4gICAgICAgICAgICAgICAgR2xvYmFsRmVkZXJhdGlvbjogR2xvYmFsLl9fRkVERVJBVElPTl9fLFxuICAgICAgICAgICAgICAgIHJlc29sdmVyOiBkZWZhdWx0UmVzb2x2ZXJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCByZXNvbHZlU2hhcmVkID0gcmVzb2x2ZVNoYXJlLmVtaXQocGFyYW1zKSB8fCBwYXJhbXM7XG4gICAgICAgICAgICByZXR1cm4gcmVzb2x2ZVNoYXJlZC5yZXNvbHZlcigpO1xuICAgICAgICB9XG4gICAgfVxufVxuZnVuY3Rpb24gZ2V0R2xvYmFsU2hhcmVTY29wZSgpIHtcbiAgICByZXR1cm4gR2xvYmFsLl9fRkVERVJBVElPTl9fLl9fU0hBUkVfXztcbn1cbmZ1bmN0aW9uIGdldFRhcmdldFNoYXJlZE9wdGlvbnMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgcGtnTmFtZSwgZXh0cmFPcHRpb25zLCBzaGFyZUluZm9zIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IGRlZmF1bHRSZXNvbHZlciA9IChzaGFyZWRPcHRpb25zKT0+e1xuICAgICAgICBpZiAoIXNoYXJlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmVWZXJzaW9uTWFwID0ge307XG4gICAgICAgIHNoYXJlZE9wdGlvbnMuZm9yRWFjaCgoc2hhcmVkKT0+e1xuICAgICAgICAgICAgc2hhcmVWZXJzaW9uTWFwW3NoYXJlZC52ZXJzaW9uXSA9IHNoYXJlZDtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gIWlzTG9hZGVkKHNoYXJlVmVyc2lvbk1hcFtwcmV2XSkgJiYgdmVyc2lvbkx0KHByZXYsIGN1cik7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IG1heFZlcnNpb24gPSBmaW5kVmVyc2lvbihzaGFyZVZlcnNpb25NYXAsIGNhbGxiYWNrKTtcbiAgICAgICAgcmV0dXJuIHNoYXJlVmVyc2lvbk1hcFttYXhWZXJzaW9uXTtcbiAgICB9O1xuICAgIHZhciBfZXh0cmFPcHRpb25zX3Jlc29sdmVyO1xuICAgIGNvbnN0IHJlc29sdmVyID0gKF9leHRyYU9wdGlvbnNfcmVzb2x2ZXIgPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5yZXNvbHZlcikgIT0gbnVsbCA/IF9leHRyYU9wdGlvbnNfcmVzb2x2ZXIgOiBkZWZhdWx0UmVzb2x2ZXI7XG4gICAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30sIHJlc29sdmVyKHNoYXJlSW5mb3NbcGtnTmFtZV0pLCBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5jdXN0b21TaGFyZUluZm8pO1xufVxuXG5mdW5jdGlvbiBnZXRCdWlsZGVySWQoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIHR5cGVvZiBGRURFUkFUSU9OX0JVSUxEX0lERU5USUZJRVIgIT09ICd1bmRlZmluZWQnID8gRkVERVJBVElPTl9CVUlMRF9JREVOVElGSUVSIDogJyc7XG59XG5cbi8vIEZ1bmN0aW9uIHRvIG1hdGNoIGEgcmVtb3RlIHdpdGggaXRzIG5hbWUgYW5kIGV4cG9zZVxuLy8gaWQ6IHBrZ05hbWUoQGZlZGVyYXRpb24vYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IEBmZWRlcmF0aW9uL2FwcDEvYnV0dG9uXG4vLyBpZDogYWxpYXMoYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IGFwcDEvYnV0dG9uXG4vLyBpZDogYWxpYXMoYXBwMS91dGlscykgKyBleHBvc2UobG9hZGFzaC9zb3J0KSA9IGFwcDEvdXRpbHMvbG9hZGFzaC9zb3J0XG5mdW5jdGlvbiBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlKHJlbW90ZXMsIGlkKSB7XG4gICAgZm9yIChjb25zdCByZW1vdGUgb2YgcmVtb3Rlcyl7XG4gICAgICAgIC8vIG1hdGNoIHBrZ05hbWVcbiAgICAgICAgY29uc3QgaXNOYW1lTWF0Y2hlZCA9IGlkLnN0YXJ0c1dpdGgocmVtb3RlLm5hbWUpO1xuICAgICAgICBsZXQgZXhwb3NlID0gaWQucmVwbGFjZShyZW1vdGUubmFtZSwgJycpO1xuICAgICAgICBpZiAoaXNOYW1lTWF0Y2hlZCkge1xuICAgICAgICAgICAgaWYgKGV4cG9zZS5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwa2dOYW1lT3JBbGlhcyA9IHJlbW90ZS5uYW1lO1xuICAgICAgICAgICAgICAgIGV4cG9zZSA9IGAuJHtleHBvc2V9YDtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwa2dOYW1lT3JBbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3NlLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChleHBvc2UgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnTmFtZU9yQWxpYXM6IHJlbW90ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBleHBvc2U6ICcuJyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBtYXRjaCBhbGlhc1xuICAgICAgICBjb25zdCBpc0FsaWFzTWF0Y2hlZCA9IHJlbW90ZS5hbGlhcyAmJiBpZC5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcyk7XG4gICAgICAgIGxldCBleHBvc2VXaXRoQWxpYXMgPSByZW1vdGUuYWxpYXMgJiYgaWQucmVwbGFjZShyZW1vdGUuYWxpYXMsICcnKTtcbiAgICAgICAgaWYgKHJlbW90ZS5hbGlhcyAmJiBpc0FsaWFzTWF0Y2hlZCkge1xuICAgICAgICAgICAgaWYgKGV4cG9zZVdpdGhBbGlhcyAmJiBleHBvc2VXaXRoQWxpYXMuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcGtnTmFtZU9yQWxpYXMgPSByZW1vdGUuYWxpYXM7XG4gICAgICAgICAgICAgICAgZXhwb3NlV2l0aEFsaWFzID0gYC4ke2V4cG9zZVdpdGhBbGlhc31gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBleHBvc2U6IGV4cG9zZVdpdGhBbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZXhwb3NlV2l0aEFsaWFzID09PSAnJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzOiByZW1vdGUuYWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9zZTogJy4nLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cbi8vIEZ1bmN0aW9uIHRvIG1hdGNoIGEgcmVtb3RlIHdpdGggaXRzIG5hbWUgb3IgYWxpYXNcbmZ1bmN0aW9uIG1hdGNoUmVtb3RlKHJlbW90ZXMsIG5hbWVPckFsaWFzKSB7XG4gICAgZm9yIChjb25zdCByZW1vdGUgb2YgcmVtb3Rlcyl7XG4gICAgICAgIGNvbnN0IGlzTmFtZU1hdGNoZWQgPSBuYW1lT3JBbGlhcyA9PT0gcmVtb3RlLm5hbWU7XG4gICAgICAgIGlmIChpc05hbWVNYXRjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3RlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGlzQWxpYXNNYXRjaGVkID0gcmVtb3RlLmFsaWFzICYmIG5hbWVPckFsaWFzID09PSByZW1vdGUuYWxpYXM7XG4gICAgICAgIGlmIChpc0FsaWFzTWF0Y2hlZCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm47XG59XG5cbmZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zLCBpbnN0YW5jZSkge1xuICAgIGNvbnN0IGdsb2JhbFBsdWdpbnMgPSBnZXRHbG9iYWxIb3N0UGx1Z2lucygpO1xuICAgIGNvbnN0IGhvb2tJbnN0YW5jZXMgPSBbXG4gICAgICAgIGluc3RhbmNlLmhvb2tzLFxuICAgICAgICBpbnN0YW5jZS5yZW1vdGVIYW5kbGVyLmhvb2tzLFxuICAgICAgICBpbnN0YW5jZS5zaGFyZWRIYW5kbGVyLmhvb2tzLFxuICAgICAgICBpbnN0YW5jZS5zbmFwc2hvdEhhbmRsZXIuaG9va3MsXG4gICAgICAgIGluc3RhbmNlLmxvYWRlckhvb2ssXG4gICAgICAgIGluc3RhbmNlLmJyaWRnZUhvb2tcbiAgICBdO1xuICAgIC8vIEluY29ycG9yYXRlIGdsb2JhbCBwbHVnaW5zXG4gICAgaWYgKGdsb2JhbFBsdWdpbnMubGVuZ3RoID4gMCkge1xuICAgICAgICBnbG9iYWxQbHVnaW5zLmZvckVhY2goKHBsdWdpbik9PntcbiAgICAgICAgICAgIGlmIChwbHVnaW5zID09IG51bGwgPyB2b2lkIDAgOiBwbHVnaW5zLmZpbmQoKGl0ZW0pPT5pdGVtLm5hbWUgIT09IHBsdWdpbi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKHBsdWdpbnMgJiYgcGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIHBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKT0+e1xuICAgICAgICAgICAgaG9va0luc3RhbmNlcy5mb3JFYWNoKChob29rSW5zdGFuY2UpPT57XG4gICAgICAgICAgICAgICAgaG9va0luc3RhbmNlLmFwcGx5UGx1Z2luKHBsdWdpbiwgaW5zdGFuY2UpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gcGx1Z2lucztcbn1cblxuY29uc3QgaW1wb3J0Q2FsbGJhY2sgPSAnLnRoZW4oY2FsbGJhY2tzWzBdKS5jYXRjaChjYWxsYmFja3NbMV0pJztcbmFzeW5jIGZ1bmN0aW9uIGxvYWRFc21FbnRyeSh7IGVudHJ5LCByZW1vdGVFbnRyeUV4cG9ydHMgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFyZW1vdGVFbnRyeUV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIEZFREVSQVRJT05fQUxMT1dfTkVXX0ZVTkNUSU9OICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBuZXcgRnVuY3Rpb24oJ2NhbGxiYWNrcycsIGBpbXBvcnQoXCIke2VudHJ5fVwiKSR7aW1wb3J0Q2FsbGJhY2t9YCkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpbXBvcnQoLyogd2VicGFja0lnbm9yZTogdHJ1ZSAqLyAvKiBAdml0ZS1pZ25vcmUgKi8gZW50cnkpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVtb3RlRW50cnlFeHBvcnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkU3lzdGVtSnNFbnRyeSh7IGVudHJ5LCByZW1vdGVFbnRyeUV4cG9ydHMgfSkge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgaWYgKCFyZW1vdGVFbnRyeUV4cG9ydHMpIHtcbiAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIF9fc3lzdGVtX2NvbnRleHRfXyA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgICAgIFN5c3RlbS5pbXBvcnQoZW50cnkpLnRoZW4ocmVzb2x2ZSkuY2F0Y2gocmVqZWN0KTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBuZXcgRnVuY3Rpb24oJ2NhbGxiYWNrcycsIGBTeXN0ZW0uaW1wb3J0KFwiJHtlbnRyeX1cIikke2ltcG9ydENhbGxiYWNrfWApKFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUsXG4gICAgICAgICAgICAgICAgICAgICAgICByZWplY3RcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlbW90ZUVudHJ5RXhwb3J0cyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIHJlamVjdChlKTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuZnVuY3Rpb24gaGFuZGxlUmVtb3RlRW50cnlMb2FkZWQobmFtZSwgZ2xvYmFsTmFtZSwgZW50cnkpIHtcbiAgICBjb25zdCB7IHJlbW90ZUVudHJ5S2V5LCBlbnRyeUV4cG9ydHMgfSA9IGdldFJlbW90ZUVudHJ5RXhwb3J0cyhuYW1lLCBnbG9iYWxOYW1lKTtcbiAgICBhc3NlcnQoZW50cnlFeHBvcnRzLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDAxLCBydW50aW1lRGVzY01hcCwge1xuICAgICAgICByZW1vdGVOYW1lOiBuYW1lLFxuICAgICAgICByZW1vdGVFbnRyeVVybDogZW50cnksXG4gICAgICAgIHJlbW90ZUVudHJ5S2V5XG4gICAgfSkpO1xuICAgIHJldHVybiBlbnRyeUV4cG9ydHM7XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkRW50cnlTY3JpcHQoeyBuYW1lLCBnbG9iYWxOYW1lLCBlbnRyeSwgbG9hZGVySG9vaywgZ2V0RW50cnlVcmwgfSkge1xuICAgIGNvbnN0IHsgZW50cnlFeHBvcnRzOiByZW1vdGVFbnRyeUV4cG9ydHMgfSA9IGdldFJlbW90ZUVudHJ5RXhwb3J0cyhuYW1lLCBnbG9iYWxOYW1lKTtcbiAgICBpZiAocmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgIHJldHVybiByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgfVxuICAgIC8vIGlmIGdldEVudHJ5VXJsIGlzIHBhc3NlZCwgdXNlIHRoZSBnZXRFbnRyeVVybCB0byBnZXQgdGhlIGVudHJ5IHVybFxuICAgIGNvbnN0IHVybCA9IGdldEVudHJ5VXJsID8gZ2V0RW50cnlVcmwoZW50cnkpIDogZW50cnk7XG4gICAgcmV0dXJuIGxvYWRTY3JpcHQodXJsLCB7XG4gICAgICAgIGF0dHJzOiB7fSxcbiAgICAgICAgY3JlYXRlU2NyaXB0SG9vazogKHVybCwgYXR0cnMpPT57XG4gICAgICAgICAgICBjb25zdCByZXMgPSBsb2FkZXJIb29rLmxpZmVjeWNsZS5jcmVhdGVTY3JpcHQuZW1pdCh7XG4gICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgIGF0dHJzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCdzY3JpcHQnIGluIHJlcyB8fCAndGltZW91dCcgaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlbW90ZUVudHJ5TG9hZGVkKG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5KTtcbiAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgYXNzZXJ0KHVuZGVmaW5lZCwgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwOCwgcnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgIHJlbW90ZU5hbWU6IG5hbWUsXG4gICAgICAgICAgICByZXNvdXJjZVVybDogZW50cnlcbiAgICAgICAgfSkpO1xuICAgICAgICB0aHJvdyBlO1xuICAgIH0pO1xufVxuYXN5bmMgZnVuY3Rpb24gbG9hZEVudHJ5RG9tKHsgcmVtb3RlSW5mbywgcmVtb3RlRW50cnlFeHBvcnRzLCBsb2FkZXJIb29rLCBnZXRFbnRyeVVybCB9KSB7XG4gICAgY29uc3QgeyBlbnRyeSwgZW50cnlHbG9iYWxOYW1lOiBnbG9iYWxOYW1lLCBuYW1lLCB0eXBlIH0gPSByZW1vdGVJbmZvO1xuICAgIHN3aXRjaCh0eXBlKXtcbiAgICAgICAgY2FzZSAnZXNtJzpcbiAgICAgICAgY2FzZSAnbW9kdWxlJzpcbiAgICAgICAgICAgIHJldHVybiBsb2FkRXNtRW50cnkoe1xuICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGNhc2UgJ3N5c3RlbSc6XG4gICAgICAgICAgICByZXR1cm4gbG9hZFN5c3RlbUpzRW50cnkoe1xuICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gbG9hZEVudHJ5U2NyaXB0KHtcbiAgICAgICAgICAgICAgICBlbnRyeSxcbiAgICAgICAgICAgICAgICBnbG9iYWxOYW1lLFxuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgbG9hZGVySG9vayxcbiAgICAgICAgICAgICAgICBnZXRFbnRyeVVybFxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuYXN5bmMgZnVuY3Rpb24gbG9hZEVudHJ5Tm9kZSh7IHJlbW90ZUluZm8sIGxvYWRlckhvb2sgfSkge1xuICAgIGNvbnN0IHsgZW50cnksIGVudHJ5R2xvYmFsTmFtZTogZ2xvYmFsTmFtZSwgbmFtZSwgdHlwZSB9ID0gcmVtb3RlSW5mbztcbiAgICBjb25zdCB7IGVudHJ5RXhwb3J0czogcmVtb3RlRW50cnlFeHBvcnRzIH0gPSBnZXRSZW1vdGVFbnRyeUV4cG9ydHMobmFtZSwgZ2xvYmFsTmFtZSk7XG4gICAgaWYgKHJlbW90ZUVudHJ5RXhwb3J0cykge1xuICAgICAgICByZXR1cm4gcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgIH1cbiAgICByZXR1cm4gbG9hZFNjcmlwdE5vZGUoZW50cnksIHtcbiAgICAgICAgYXR0cnM6IHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBnbG9iYWxOYW1lLFxuICAgICAgICAgICAgdHlwZVxuICAgICAgICB9LFxuICAgICAgICBsb2FkZXJIb29rOiB7XG4gICAgICAgICAgICBjcmVhdGVTY3JpcHRIb29rOiAodXJsLCBhdHRycyA9IHt9KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZVNjcmlwdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICBhdHRyc1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzKSByZXR1cm47XG4gICAgICAgICAgICAgICAgaWYgKCd1cmwnIGluIHJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KS50aGVuKCgpPT57XG4gICAgICAgIHJldHVybiBoYW5kbGVSZW1vdGVFbnRyeUxvYWRlZChuYW1lLCBnbG9iYWxOYW1lLCBlbnRyeSk7XG4gICAgfSkuY2F0Y2goKGUpPT57XG4gICAgICAgIHRocm93IGU7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBnZXRSZW1vdGVFbnRyeVVuaXF1ZUtleShyZW1vdGVJbmZvKSB7XG4gICAgY29uc3QgeyBlbnRyeSwgbmFtZSB9ID0gcmVtb3RlSW5mbztcbiAgICByZXR1cm4gY29tcG9zZUtleVdpdGhTZXBhcmF0b3IobmFtZSwgZW50cnkpO1xufVxuYXN5bmMgZnVuY3Rpb24gZ2V0UmVtb3RlRW50cnkocGFyYW1zKSB7XG4gICAgY29uc3QgeyBvcmlnaW4sIHJlbW90ZUVudHJ5RXhwb3J0cywgcmVtb3RlSW5mbywgZ2V0RW50cnlVcmwgfSA9IHBhcmFtcztcbiAgICBjb25zdCB1bmlxdWVLZXkgPSBnZXRSZW1vdGVFbnRyeVVuaXF1ZUtleShyZW1vdGVJbmZvKTtcbiAgICBpZiAocmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgIHJldHVybiByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgfVxuICAgIGlmICghZ2xvYmFsTG9hZGluZ1t1bmlxdWVLZXldKSB7XG4gICAgICAgIGNvbnN0IGxvYWRFbnRyeUhvb2sgPSBvcmlnaW4ucmVtb3RlSGFuZGxlci5ob29rcy5saWZlY3ljbGUubG9hZEVudHJ5O1xuICAgICAgICBjb25zdCBsb2FkZXJIb29rID0gb3JpZ2luLmxvYWRlckhvb2s7XG4gICAgICAgIGdsb2JhbExvYWRpbmdbdW5pcXVlS2V5XSA9IGxvYWRFbnRyeUhvb2suZW1pdCh7XG4gICAgICAgICAgICBsb2FkZXJIb29rLFxuICAgICAgICAgICAgcmVtb3RlSW5mbyxcbiAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICB9KS50aGVuKChyZXMpPT57XG4gICAgICAgICAgICBpZiAocmVzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFVzZSBFTlZfVEFSR0VUIGlmIGRlZmluZWQsIG90aGVyd2lzZSBmYWxsYmFjayB0byBpc0Jyb3dzZXJFbnYsIG11c3Qga2VlcCB0aGlzXG4gICAgICAgICAgICBjb25zdCBpc1dlYkVudmlyb25tZW50ID0gdHlwZW9mIEVOVl9UQVJHRVQgIT09ICd1bmRlZmluZWQnID8gRU5WX1RBUkdFVCA9PT0gJ3dlYicgOiBpc0Jyb3dzZXJFbnYoKTtcbiAgICAgICAgICAgIHJldHVybiBpc1dlYkVudmlyb25tZW50ID8gbG9hZEVudHJ5RG9tKHtcbiAgICAgICAgICAgICAgICByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyxcbiAgICAgICAgICAgICAgICBsb2FkZXJIb29rLFxuICAgICAgICAgICAgICAgIGdldEVudHJ5VXJsXG4gICAgICAgICAgICB9KSA6IGxvYWRFbnRyeU5vZGUoe1xuICAgICAgICAgICAgICAgIHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgbG9hZGVySG9va1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICByZXR1cm4gZ2xvYmFsTG9hZGluZ1t1bmlxdWVLZXldO1xufVxuZnVuY3Rpb24gZ2V0UmVtb3RlSW5mbyhyZW1vdGUpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe30sIHJlbW90ZSwge1xuICAgICAgICBlbnRyeTogJ2VudHJ5JyBpbiByZW1vdGUgPyByZW1vdGUuZW50cnkgOiAnJyxcbiAgICAgICAgdHlwZTogcmVtb3RlLnR5cGUgfHwgREVGQVVMVF9SRU1PVEVfVFlQRSxcbiAgICAgICAgZW50cnlHbG9iYWxOYW1lOiByZW1vdGUuZW50cnlHbG9iYWxOYW1lIHx8IHJlbW90ZS5uYW1lLFxuICAgICAgICBzaGFyZVNjb3BlOiByZW1vdGUuc2hhcmVTY29wZSB8fCBERUZBVUxUX1NDT1BFXG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIGRlZmF1bHRQcmVsb2FkQXJncyhwcmVsb2FkQ29uZmlnKSB7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgcmVzb3VyY2VDYXRlZ29yeTogJ3N5bmMnLFxuICAgICAgICBzaGFyZTogdHJ1ZSxcbiAgICAgICAgZGVwc1JlbW90ZTogdHJ1ZSxcbiAgICAgICAgcHJlZmV0Y2hJbnRlcmZhY2U6IGZhbHNlXG4gICAgfSwgcHJlbG9hZENvbmZpZyk7XG59XG5mdW5jdGlvbiBmb3JtYXRQcmVsb2FkQXJncyhyZW1vdGVzLCBwcmVsb2FkQXJncykge1xuICAgIHJldHVybiBwcmVsb2FkQXJncy5tYXAoKGFyZ3MpPT57XG4gICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSBtYXRjaFJlbW90ZShyZW1vdGVzLCBhcmdzLm5hbWVPckFsaWFzKTtcbiAgICAgICAgYXNzZXJ0KHJlbW90ZUluZm8sIGBVbmFibGUgdG8gcHJlbG9hZCAke2FyZ3MubmFtZU9yQWxpYXN9IGFzIGl0IGlzIG5vdCBpbmNsdWRlZCBpbiAkeyFyZW1vdGVJbmZvICYmIHNhZmVUb1N0cmluZyh7XG4gICAgICAgICAgICByZW1vdGVJbmZvLFxuICAgICAgICAgICAgcmVtb3Rlc1xuICAgICAgICB9KX1gKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHJlbW90ZTogcmVtb3RlSW5mbyxcbiAgICAgICAgICAgIHByZWxvYWRDb25maWc6IGRlZmF1bHRQcmVsb2FkQXJncyhhcmdzKVxuICAgICAgICB9O1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbm9ybWFsaXplUHJlbG9hZEV4cG9zZXMoZXhwb3Nlcykge1xuICAgIGlmICghZXhwb3Nlcykge1xuICAgICAgICByZXR1cm4gW107XG4gICAgfVxuICAgIHJldHVybiBleHBvc2VzLm1hcCgoZXhwb3NlKT0+e1xuICAgICAgICBpZiAoZXhwb3NlID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGV4cG9zZS5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gZXhwb3NlLnJlcGxhY2UoJy4vJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBleHBvc2U7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwcmVsb2FkQXNzZXRzKHJlbW90ZUluZm8sIGhvc3QsIGFzc2V0cywgLy8gSXQgaXMgdXNlZCB0byBkaXN0aW5ndWlzaCBwcmVsb2FkIGZyb20gbG9hZCByZW1vdGUgcGFyYWxsZWwgbG9hZGluZ1xudXNlTGlua1ByZWxvYWQgPSB0cnVlKSB7XG4gICAgY29uc3QgeyBjc3NBc3NldHMsIGpzQXNzZXRzV2l0aG91dEVudHJ5LCBlbnRyeUFzc2V0cyB9ID0gYXNzZXRzO1xuICAgIGlmIChob3N0Lm9wdGlvbnMuaW5Ccm93c2VyKSB7XG4gICAgICAgIGVudHJ5QXNzZXRzLmZvckVhY2goKGFzc2V0KT0+e1xuICAgICAgICAgICAgY29uc3QgeyBtb2R1bGVJbmZvIH0gPSBhc3NldDtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGhvc3QubW9kdWxlQ2FjaGUuZ2V0KHJlbW90ZUluZm8ubmFtZSk7XG4gICAgICAgICAgICBpZiAobW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgZ2V0UmVtb3RlRW50cnkoe1xuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0czogbW9kdWxlLnJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBnZXRSZW1vdGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogbW9kdWxlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICh1c2VMaW5rUHJlbG9hZCkge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJzID0ge1xuICAgICAgICAgICAgICAgIHJlbDogJ3ByZWxvYWQnLFxuICAgICAgICAgICAgICAgIGFzOiAnc3R5bGUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3NzQXNzZXRzLmZvckVhY2goKGNzc1VybCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxpbms6IGNzc0VsLCBuZWVkQXR0YWNoIH0gPSBjcmVhdGVMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjc3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIGNiOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiBkZWZhdWx0QXR0cnMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpbmtIb29rOiAodXJsLCBhdHRycyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlTGluay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzRWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QXR0cnMgPSB7XG4gICAgICAgICAgICAgICAgcmVsOiAnc3R5bGVzaGVldCcsXG4gICAgICAgICAgICAgICAgdHlwZTogJ3RleHQvY3NzJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNzc0Fzc2V0cy5mb3JFYWNoKChjc3NVcmwpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsaW5rOiBjc3NFbCwgbmVlZEF0dGFjaCB9ID0gY3JlYXRlTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVybDogY3NzVXJsLFxuICAgICAgICAgICAgICAgICAgICBjYjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogZGVmYXVsdEF0dHJzLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaW5rSG9vazogKHVybCwgYXR0cnMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZUxpbmsuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZWVkRGVsZXRlTGluazogZmFsc2VcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQoY3NzRWwpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHVzZUxpbmtQcmVsb2FkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QXR0cnMgPSB7XG4gICAgICAgICAgICAgICAgcmVsOiAncHJlbG9hZCcsXG4gICAgICAgICAgICAgICAgYXM6ICdzY3JpcHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnkuZm9yRWFjaCgoanNVcmwpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgeyBsaW5rOiBsaW5rRWwsIG5lZWRBdHRhY2ggfSA9IGNyZWF0ZUxpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGpzVXJsLFxuICAgICAgICAgICAgICAgICAgICBjYjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogZGVmYXVsdEF0dHJzLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVMaW5rSG9vazogKHVybCwgYXR0cnMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZUxpbmsuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF0dHJzXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKGxpbmtFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBdHRycyA9IHtcbiAgICAgICAgICAgICAgICBmZXRjaHByaW9yaXR5OiAnaGlnaCcsXG4gICAgICAgICAgICAgICAgdHlwZTogKHJlbW90ZUluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUluZm8udHlwZSkgPT09ICdtb2R1bGUnID8gJ21vZHVsZScgOiAndGV4dC9qYXZhc2NyaXB0J1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGpzQXNzZXRzV2l0aG91dEVudHJ5LmZvckVhY2goKGpzVXJsKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2NyaXB0OiBzY3JpcHRFbCwgbmVlZEF0dGFjaCB9ID0gY3JlYXRlU2NyaXB0KHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBqc1VybCxcbiAgICAgICAgICAgICAgICAgICAgY2I6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IGRlZmF1bHRBdHRycyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlU2NyaXB0SG9vazogKHVybCwgYXR0cnMpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZVNjcmlwdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEhUTUxTY3JpcHRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgbmVlZERlbGV0ZVNjcmlwdDogdHJ1ZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHRFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cblxuY29uc3QgU2hhcmVVdGlscyA9IHtcbiAgICBnZXRSZWdpc3RlcmVkU2hhcmUsXG4gICAgZ2V0R2xvYmFsU2hhcmVTY29wZVxufTtcbmNvbnN0IEdsb2JhbFV0aWxzID0ge1xuICAgIEdsb2JhbCxcbiAgICBuYXRpdmVHbG9iYWwsXG4gICAgcmVzZXRGZWRlcmF0aW9uR2xvYmFsSW5mbyxcbiAgICBzZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UsXG4gICAgZ2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLFxuICAgIHNldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcixcbiAgICBnZXRJbmZvV2l0aG91dFR5cGUsXG4gICAgZ2V0R2xvYmFsU25hcHNob3QsXG4gICAgZ2V0VGFyZ2V0U25hcHNob3RJbmZvQnlNb2R1bGVJbmZvLFxuICAgIGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyxcbiAgICBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8sXG4gICAgYWRkR2xvYmFsU25hcHNob3QsXG4gICAgZ2V0UmVtb3RlRW50cnlFeHBvcnRzLFxuICAgIHJlZ2lzdGVyR2xvYmFsUGx1Z2lucyxcbiAgICBnZXRHbG9iYWxIb3N0UGx1Z2lucyxcbiAgICBnZXRQcmVsb2FkZWQsXG4gICAgc2V0UHJlbG9hZGVkXG59O1xudmFyIGhlbHBlcnMgPSB7XG4gICAgZ2xvYmFsOiBHbG9iYWxVdGlscyxcbiAgICBzaGFyZTogU2hhcmVVdGlscyxcbiAgICB1dGlsczoge1xuICAgICAgICBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlLFxuICAgICAgICBwcmVsb2FkQXNzZXRzLFxuICAgICAgICBnZXRSZW1vdGVJbmZvXG4gICAgfVxufTtcblxubGV0IE1vZHVsZSA9IGNsYXNzIE1vZHVsZSB7XG4gICAgYXN5bmMgZ2V0RW50cnkoKSB7XG4gICAgICAgIGlmICh0aGlzLnJlbW90ZUVudHJ5RXhwb3J0cykge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICB9XG4gICAgICAgIGxldCByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBhd2FpdCBnZXRSZW1vdGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLmhvc3QsXG4gICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogdGhpcy5yZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0czogdGhpcy5yZW1vdGVFbnRyeUV4cG9ydHNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgIGNvbnN0IHVuaXF1ZUtleSA9IGdldFJlbW90ZUVudHJ5VW5pcXVlS2V5KHRoaXMucmVtb3RlSW5mbyk7XG4gICAgICAgICAgICBjb25zdCBpc1NjcmlwdExvYWRFcnJvciA9IGVyciBpbnN0YW5jZW9mIEVycm9yICYmIGVyci5tZXNzYWdlLmluY2x1ZGVzKFJVTlRJTUVfMDA4KTtcbiAgICAgICAgICAgIGlmIChpc1NjcmlwdExvYWRFcnJvcikge1xuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyA9IGF3YWl0IHRoaXMuaG9zdC5sb2FkZXJIb29rLmxpZmVjeWNsZS5sb2FkRW50cnlFcnJvci5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgZ2V0UmVtb3RlRW50cnksXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogdGhpcy5ob3N0LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiB0aGlzLnJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0czogdGhpcy5yZW1vdGVFbnRyeUV4cG9ydHMsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbExvYWRpbmcsXG4gICAgICAgICAgICAgICAgICAgIHVuaXF1ZUtleVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGFzc2VydChyZW1vdGVFbnRyeUV4cG9ydHMsIGByZW1vdGVFbnRyeUV4cG9ydHMgaXMgdW5kZWZpbmVkIFxcbiAke3NhZmVUb1N0cmluZyh0aGlzLnJlbW90ZUluZm8pfWApO1xuICAgICAgICB0aGlzLnJlbW90ZUVudHJ5RXhwb3J0cyA9IHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlRW50cnlFeHBvcnRzO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuICAgIGFzeW5jIGdldChpZCwgZXhwb3NlLCBvcHRpb25zLCByZW1vdGVTbmFwc2hvdCkge1xuICAgICAgICBjb25zdCB7IGxvYWRGYWN0b3J5ID0gdHJ1ZSB9ID0gb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICBsb2FkRmFjdG9yeTogdHJ1ZVxuICAgICAgICB9O1xuICAgICAgICAvLyBHZXQgcmVtb3RlRW50cnkuanNcbiAgICAgICAgY29uc3QgcmVtb3RlRW50cnlFeHBvcnRzID0gYXdhaXQgdGhpcy5nZXRFbnRyeSgpO1xuICAgICAgICBpZiAoIXRoaXMuaW5pdGVkKSB7XG4gICAgICAgICAgICBjb25zdCBsb2NhbFNoYXJlU2NvcGVNYXAgPSB0aGlzLmhvc3Quc2hhcmVTY29wZU1hcDtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlU2NvcGVLZXlzID0gQXJyYXkuaXNBcnJheSh0aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSkgPyB0aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSA6IFtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZVxuICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIGlmICghc2hhcmVTY29wZUtleXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVTY29wZUtleXMucHVzaCgnZGVmYXVsdCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2hhcmVTY29wZUtleXMuZm9yRWFjaCgoc2hhcmVTY29wZUtleSk9PntcbiAgICAgICAgICAgICAgICBpZiAoIWxvY2FsU2hhcmVTY29wZU1hcFtzaGFyZVNjb3BlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBsb2NhbFNoYXJlU2NvcGVNYXBbc2hhcmVTY29wZUtleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIC8vIFRPRE86IGNvbXBhdGUgbGVnYWN5IGluaXQgcGFyYW1zLCBzaG91bGQgdXNlIHNoYXJlU2NvcGVNYXAgaWYgZXhpc3RcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlU2NvcGUgPSBsb2NhbFNoYXJlU2NvcGVNYXBbc2hhcmVTY29wZUtleXNbMF1dO1xuICAgICAgICAgICAgY29uc3QgaW5pdFNjb3BlID0gW107XG4gICAgICAgICAgICBjb25zdCByZW1vdGVFbnRyeUluaXRPcHRpb25zID0ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IHRoaXMucmVtb3RlSW5mby52ZXJzaW9uIHx8ICcnLFxuICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVLZXlzOiBBcnJheS5pc0FycmF5KHRoaXMucmVtb3RlSW5mby5zaGFyZVNjb3BlKSA/IHNoYXJlU2NvcGVLZXlzIDogdGhpcy5yZW1vdGVJbmZvLnNoYXJlU2NvcGUgfHwgJ2RlZmF1bHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gSGVscCB0byBmaW5kIGhvc3QgaW5zdGFuY2VcbiAgICAgICAgICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyZW1vdGVFbnRyeUluaXRPcHRpb25zLCAnc2hhcmVTY29wZU1hcCcsIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogbG9jYWxTaGFyZVNjb3BlTWFwLFxuICAgICAgICAgICAgICAgIC8vIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgd2lsbCBiZSB0cmF2ZXJzZWQgYW5kIGFzc2lnbmVkIGR1cmluZyBjb250YWluZXIgaW5pdCwgLHNvIHRoaXMgYXR0cmlidXRlIGlzIG5vdCBhbGxvd2VkIHRvIGJlIHRyYXZlcnNlZFxuICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IGluaXRDb250YWluZXJPcHRpb25zID0gYXdhaXQgdGhpcy5ob3N0Lmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVJbml0Q29udGFpbmVyLmVtaXQoe1xuICAgICAgICAgICAgICAgIHNoYXJlU2NvcGUsXG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBzaGFyZVNjb3BlTWFwIHdpbGwgYmUgc2V0IGJ5IE9iamVjdC5kZWZpbmVQcm9wZXJ0eVxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgaW5pdFNjb3BlLFxuICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IHRoaXMucmVtb3RlSW5mbyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IHRoaXMuaG9zdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIChyZW1vdGVFbnRyeUV4cG9ydHMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5RXhwb3J0cy5pbml0KSA9PT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBlcnJvcihnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDAyLCBydW50aW1lRGVzY01hcCwge1xuICAgICAgICAgICAgICAgICAgICBob3N0TmFtZTogdGhpcy5ob3N0Lm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZU5hbWU6IHRoaXMucmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeVVybDogdGhpcy5yZW1vdGVJbmZvLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUtleTogdGhpcy5yZW1vdGVJbmZvLmVudHJ5R2xvYmFsTmFtZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHJlbW90ZUVudHJ5RXhwb3J0cy5pbml0KGluaXRDb250YWluZXJPcHRpb25zLnNoYXJlU2NvcGUsIGluaXRDb250YWluZXJPcHRpb25zLmluaXRTY29wZSwgaW5pdENvbnRhaW5lck9wdGlvbnMucmVtb3RlRW50cnlJbml0T3B0aW9ucyk7XG4gICAgICAgICAgICBhd2FpdCB0aGlzLmhvc3QuaG9va3MubGlmZWN5Y2xlLmluaXRDb250YWluZXIuZW1pdChfZXh0ZW5kcyh7fSwgaW5pdENvbnRhaW5lck9wdGlvbnMsIHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHNcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmxpYiA9IHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICAgICAgdGhpcy5pbml0ZWQgPSB0cnVlO1xuICAgICAgICBsZXQgbW9kdWxlRmFjdG9yeTtcbiAgICAgICAgbW9kdWxlRmFjdG9yeSA9IGF3YWl0IHRoaXMuaG9zdC5sb2FkZXJIb29rLmxpZmVjeWNsZS5nZXRNb2R1bGVGYWN0b3J5LmVtaXQoe1xuICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzLFxuICAgICAgICAgICAgZXhwb3NlLFxuICAgICAgICAgICAgbW9kdWxlSW5mbzogdGhpcy5yZW1vdGVJbmZvXG4gICAgICAgIH0pO1xuICAgICAgICAvLyBnZXQgZXhwb3NlR2V0dGVyXG4gICAgICAgIGlmICghbW9kdWxlRmFjdG9yeSkge1xuICAgICAgICAgICAgbW9kdWxlRmFjdG9yeSA9IGF3YWl0IHJlbW90ZUVudHJ5RXhwb3J0cy5nZXQoZXhwb3NlKTtcbiAgICAgICAgfVxuICAgICAgICBhc3NlcnQobW9kdWxlRmFjdG9yeSwgYCR7Z2V0Rk1JZCh0aGlzLnJlbW90ZUluZm8pfSByZW1vdGUgZG9uJ3QgZXhwb3J0ICR7ZXhwb3NlfS5gKTtcbiAgICAgICAgLy8ga2VlcCBzeW1ib2wgZm9yIG1vZHVsZSBuYW1lIGFsd2F5cyBvbmUgZm9ybWF0XG4gICAgICAgIGNvbnN0IHN5bWJvbE5hbWUgPSBwcm9jZXNzTW9kdWxlQWxpYXModGhpcy5yZW1vdGVJbmZvLm5hbWUsIGV4cG9zZSk7XG4gICAgICAgIGNvbnN0IHdyYXBNb2R1bGVGYWN0b3J5ID0gdGhpcy53cmFwZXJGYWN0b3J5KG1vZHVsZUZhY3RvcnksIHN5bWJvbE5hbWUpO1xuICAgICAgICBpZiAoIWxvYWRGYWN0b3J5KSB7XG4gICAgICAgICAgICByZXR1cm4gd3JhcE1vZHVsZUZhY3Rvcnk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXhwb3NlQ29udGVudCA9IGF3YWl0IHdyYXBNb2R1bGVGYWN0b3J5KCk7XG4gICAgICAgIHJldHVybiBleHBvc2VDb250ZW50O1xuICAgIH1cbiAgICB3cmFwZXJGYWN0b3J5KG1vZHVsZUZhY3RvcnksIGlkKSB7XG4gICAgICAgIGZ1bmN0aW9uIGRlZmluZU1vZHVsZUlkKHJlcywgaWQpIHtcbiAgICAgICAgICAgIGlmIChyZXMgJiYgdHlwZW9mIHJlcyA9PT0gJ29iamVjdCcgJiYgT2JqZWN0LmlzRXh0ZW5zaWJsZShyZXMpICYmICFPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHJlcywgU3ltYm9sLmZvcignbWZfbW9kdWxlX2lkJykpKSB7XG4gICAgICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlcywgU3ltYm9sLmZvcignbWZfbW9kdWxlX2lkJyksIHtcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IGlkLFxuICAgICAgICAgICAgICAgICAgICBlbnVtZXJhYmxlOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtb2R1bGVGYWN0b3J5IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgcmV0dXJuIGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgbW9kdWxlRmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIGJyaWRnZSBkZWJ1Z2dpbmdcbiAgICAgICAgICAgICAgICBkZWZpbmVNb2R1bGVJZChyZXMsIGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAoKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IG1vZHVsZUZhY3RvcnkoKTtcbiAgICAgICAgICAgICAgICAvLyBUaGlzIHBhcmFtZXRlciBpcyB1c2VkIGZvciBicmlkZ2UgZGVidWdnaW5nXG4gICAgICAgICAgICAgICAgZGVmaW5lTW9kdWxlSWQocmVzLCBpZCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3RydWN0b3IoeyByZW1vdGVJbmZvLCBob3N0IH0pe1xuICAgICAgICB0aGlzLmluaXRlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmxpYiA9IHVuZGVmaW5lZDtcbiAgICAgICAgdGhpcy5yZW1vdGVJbmZvID0gcmVtb3RlSW5mbztcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICB9XG59O1xuXG5jbGFzcyBTeW5jSG9vayB7XG4gICAgb24oZm4pIHtcbiAgICAgICAgaWYgKHR5cGVvZiBmbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgdGhpcy5saXN0ZW5lcnMuYWRkKGZuKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbmNlKGZuKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tdGhpcy1hbGlhc1xuICAgICAgICBjb25zdCBzZWxmID0gdGhpcztcbiAgICAgICAgdGhpcy5vbihmdW5jdGlvbiB3cmFwcGVyKC4uLmFyZ3MpIHtcbiAgICAgICAgICAgIHNlbGYucmVtb3ZlKHdyYXBwZXIpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICAgIHJldHVybiBmbi5hcHBseShudWxsLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGVtaXQoLi4uZGF0YSkge1xuICAgICAgICBsZXQgcmVzdWx0O1xuICAgICAgICBpZiAodGhpcy5saXN0ZW5lcnMuc2l6ZSA+IDApIHtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5mb3JFYWNoKChmbik9PntcbiAgICAgICAgICAgICAgICByZXN1bHQgPSBmbiguLi5kYXRhKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfVxuICAgIHJlbW92ZShmbikge1xuICAgICAgICB0aGlzLmxpc3RlbmVycy5kZWxldGUoZm4pO1xuICAgIH1cbiAgICByZW1vdmVBbGwoKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmNsZWFyKCk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHR5cGUpe1xuICAgICAgICB0aGlzLnR5cGUgPSAnJztcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMgPSBuZXcgU2V0KCk7XG4gICAgICAgIGlmICh0eXBlKSB7XG4gICAgICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jbGFzcyBBc3luY0hvb2sgZXh0ZW5kcyBTeW5jSG9vayB7XG4gICAgZW1pdCguLi5kYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGNvbnN0IGxzID0gQXJyYXkuZnJvbSh0aGlzLmxpc3RlbmVycyk7XG4gICAgICAgIGlmIChscy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBsZXQgaSA9IDA7XG4gICAgICAgICAgICBjb25zdCBjYWxsID0gKHByZXYpPT57XG4gICAgICAgICAgICAgICAgaWYgKHByZXYgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgLy8gQWJvcnQgcHJvY2Vzc1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA8IGxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxzW2krK10uYXBwbHkobnVsbCwgZGF0YSkpLnRoZW4oY2FsbCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJlc3VsdCA9IGNhbGwoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3VsdCk7XG4gICAgfVxufVxuXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2V4cGxpY2l0LW1vZHVsZS1ib3VuZGFyeS10eXBlc1xuZnVuY3Rpb24gY2hlY2tSZXR1cm5EYXRhKG9yaWdpbmFsRGF0YSwgcmV0dXJuZWREYXRhKSB7XG4gICAgaWYgKCFpc09iamVjdChyZXR1cm5lZERhdGEpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKG9yaWdpbmFsRGF0YSAhPT0gcmV0dXJuZWREYXRhKSB7XG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgICBmb3IoY29uc3Qga2V5IGluIG9yaWdpbmFsRGF0YSl7XG4gICAgICAgICAgICBpZiAoIShrZXkgaW4gcmV0dXJuZWREYXRhKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gdHJ1ZTtcbn1cbmNsYXNzIFN5bmNXYXRlcmZhbGxIb29rIGV4dGVuZHMgU3luY0hvb2sge1xuICAgIGVtaXQoZGF0YSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIGRhdGEgZm9yIHRoZSBcIiR7dGhpcy50eXBlfVwiIGhvb2sgc2hvdWxkIGJlIGFuIG9iamVjdC5gKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGNvbnN0IGZuIG9mIHRoaXMubGlzdGVuZXJzKXtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgdGVtcERhdGEgPSBmbihkYXRhKTtcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZXR1cm5EYXRhKGRhdGEsIHRlbXBEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gdGVtcERhdGE7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKGBBIHBsdWdpbiByZXR1cm5lZCBhbiB1bmFjY2VwdGFibGUgdmFsdWUgZm9yIHRoZSBcIiR7dGhpcy50eXBlfVwiIHR5cGUuYCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICB3YXJuKGUpO1xuICAgICAgICAgICAgICAgIHRoaXMub25lcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGF0YTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub25lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cblxuY2xhc3MgQXN5bmNXYXRlcmZhbGxIb29rIGV4dGVuZHMgU3luY0hvb2sge1xuICAgIGVtaXQoZGF0YSkge1xuICAgICAgICBpZiAoIWlzT2JqZWN0KGRhdGEpKSB7XG4gICAgICAgICAgICBlcnJvcihgVGhlIHJlc3BvbnNlIGRhdGEgZm9yIHRoZSBcIiR7dGhpcy50eXBlfVwiIGhvb2sgbXVzdCBiZSBhbiBvYmplY3QuYCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbHMgPSBBcnJheS5mcm9tKHRoaXMubGlzdGVuZXJzKTtcbiAgICAgICAgaWYgKGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IHByb2Nlc3NFcnJvciA9IChlKT0+e1xuICAgICAgICAgICAgICAgIHdhcm4oZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKGUpO1xuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGNhbGwgPSAocHJldkRhdGEpPT57XG4gICAgICAgICAgICAgICAgaWYgKGNoZWNrUmV0dXJuRGF0YShkYXRhLCBwcmV2RGF0YSkpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YSA9IHByZXZEYXRhO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA8IGxzLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGxzW2krK10oZGF0YSkpLnRoZW4oY2FsbCwgcHJvY2Vzc0Vycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJvY2Vzc0Vycm9yKGUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKGBBIHBsdWdpbiByZXR1cm5lZCBhbiBpbmNvcnJlY3QgdmFsdWUgZm9yIHRoZSBcIiR7dGhpcy50eXBlfVwiIHR5cGUuYCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBkYXRhO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUoY2FsbChkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShkYXRhKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMub25lcnJvciA9IGVycm9yO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIH1cbn1cblxuY2xhc3MgUGx1Z2luU3lzdGVtIHtcbiAgICBhcHBseVBsdWdpbihwbHVnaW4sIGluc3RhbmNlKSB7XG4gICAgICAgIGFzc2VydChpc1BsYWluT2JqZWN0KHBsdWdpbiksICdQbHVnaW4gY29uZmlndXJhdGlvbiBpcyBpbnZhbGlkLicpO1xuICAgICAgICAvLyBUaGUgcGx1Z2luJ3MgbmFtZSBpcyBtYW5kYXRvcnkgYW5kIG11c3QgYmUgdW5pcXVlXG4gICAgICAgIGNvbnN0IHBsdWdpbk5hbWUgPSBwbHVnaW4ubmFtZTtcbiAgICAgICAgYXNzZXJ0KHBsdWdpbk5hbWUsICdBIG5hbWUgbXVzdCBiZSBwcm92aWRlZCBieSB0aGUgcGx1Z2luLicpO1xuICAgICAgICBpZiAoIXRoaXMucmVnaXN0ZXJQbHVnaW5zW3BsdWdpbk5hbWVdKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgICAgIHBsdWdpbi5hcHBseSA9PSBudWxsID8gdm9pZCAwIDogcGx1Z2luLmFwcGx5LmNhbGwocGx1Z2luLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyh0aGlzLmxpZmVjeWNsZSkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHBsdWdpbkxpZmUgPSBwbHVnaW5ba2V5XTtcbiAgICAgICAgICAgICAgICBpZiAocGx1Z2luTGlmZSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxpZmVjeWNsZVtrZXldLm9uKHBsdWdpbkxpZmUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVBsdWdpbihwbHVnaW5OYW1lKSB7XG4gICAgICAgIGFzc2VydChwbHVnaW5OYW1lLCAnQSBuYW1lIGlzIHJlcXVpcmVkLicpO1xuICAgICAgICBjb25zdCBwbHVnaW4gPSB0aGlzLnJlZ2lzdGVyUGx1Z2luc1twbHVnaW5OYW1lXTtcbiAgICAgICAgYXNzZXJ0KHBsdWdpbiwgYFRoZSBwbHVnaW4gXCIke3BsdWdpbk5hbWV9XCIgaXMgbm90IHJlZ2lzdGVyZWQuYCk7XG4gICAgICAgIE9iamVjdC5rZXlzKHBsdWdpbikuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKGtleSAhPT0gJ25hbWUnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5saWZlY3ljbGVba2V5XS5yZW1vdmUocGx1Z2luW2tleV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IobGlmZWN5Y2xlKXtcbiAgICAgICAgdGhpcy5yZWdpc3RlclBsdWdpbnMgPSB7fTtcbiAgICAgICAgdGhpcy5saWZlY3ljbGUgPSBsaWZlY3ljbGU7XG4gICAgICAgIHRoaXMubGlmZWN5Y2xlS2V5cyA9IE9iamVjdC5rZXlzKGxpZmVjeWNsZSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBhc3NpZ25SZW1vdGVJbmZvKHJlbW90ZUluZm8sIHJlbW90ZVNuYXBzaG90KSB7XG4gICAgY29uc3QgcmVtb3RlRW50cnlJbmZvID0gZ2V0UmVtb3RlRW50cnlJbmZvRnJvbVNuYXBzaG90KHJlbW90ZVNuYXBzaG90KTtcbiAgICBpZiAoIXJlbW90ZUVudHJ5SW5mby51cmwpIHtcbiAgICAgICAgZXJyb3IoYFRoZSBhdHRyaWJ1dGUgcmVtb3RlRW50cnkgb2YgJHtyZW1vdGVJbmZvLm5hbWV9IG11c3Qgbm90IGJlIHVuZGVmaW5lZC5gKTtcbiAgICB9XG4gICAgbGV0IGVudHJ5VXJsID0gZ2V0UmVzb3VyY2VVcmwocmVtb3RlU25hcHNob3QsIHJlbW90ZUVudHJ5SW5mby51cmwpO1xuICAgIGlmICghaXNCcm93c2VyRW52KCkgJiYgIWVudHJ5VXJsLnN0YXJ0c1dpdGgoJ2h0dHAnKSkge1xuICAgICAgICBlbnRyeVVybCA9IGBodHRwczoke2VudHJ5VXJsfWA7XG4gICAgfVxuICAgIHJlbW90ZUluZm8udHlwZSA9IHJlbW90ZUVudHJ5SW5mby50eXBlO1xuICAgIHJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lID0gcmVtb3RlRW50cnlJbmZvLmdsb2JhbE5hbWU7XG4gICAgcmVtb3RlSW5mby5lbnRyeSA9IGVudHJ5VXJsO1xuICAgIHJlbW90ZUluZm8udmVyc2lvbiA9IHJlbW90ZVNuYXBzaG90LnZlcnNpb247XG4gICAgcmVtb3RlSW5mby5idWlsZFZlcnNpb24gPSByZW1vdGVTbmFwc2hvdC5idWlsZFZlcnNpb247XG59XG5mdW5jdGlvbiBzbmFwc2hvdFBsdWdpbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnc25hcHNob3QtcGx1Z2luJyxcbiAgICAgICAgYXN5bmMgYWZ0ZXJSZXNvbHZlIChhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB7IHJlbW90ZSwgcGtnTmFtZU9yQWxpYXMsIGV4cG9zZSwgb3JpZ2luLCByZW1vdGVJbmZvLCBpZCB9ID0gYXJncztcbiAgICAgICAgICAgIGlmICghaXNSZW1vdGVJbmZvV2l0aEVudHJ5KHJlbW90ZSkgfHwgIWlzUHVyZVJlbW90ZUVudHJ5KHJlbW90ZSkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlbW90ZVNuYXBzaG90LCBnbG9iYWxTbmFwc2hvdCB9ID0gYXdhaXQgb3JpZ2luLnNuYXBzaG90SGFuZGxlci5sb2FkUmVtb3RlU25hcHNob3RJbmZvKHtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlSW5mbzogcmVtb3RlLFxuICAgICAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzc2lnblJlbW90ZUluZm8ocmVtb3RlSW5mbywgcmVtb3RlU25hcHNob3QpO1xuICAgICAgICAgICAgICAgIC8vIHByZWxvYWRpbmcgYXNzZXRzXG4gICAgICAgICAgICAgICAgY29uc3QgcHJlbG9hZE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZENvbmZpZzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgbmFtZU9yQWxpYXM6IHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3NlczogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4cG9zZVxuICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc291cmNlQ2F0ZWdvcnk6ICdzeW5jJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlcHNSZW1vdGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0cyA9IGF3YWl0IG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5nZW5lcmF0ZVByZWxvYWRBc3NldHMuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbixcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZE9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKGFzc2V0cykge1xuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQXNzZXRzKHJlbW90ZUluZm8sIG9yaWdpbiwgYXNzZXRzLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgYXJncywge1xuICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFyZ3M7XG4gICAgICAgIH1cbiAgICB9O1xufVxuXG4vLyBuYW1lXG4vLyBuYW1lOnZlcnNpb25cbmZ1bmN0aW9uIHNwbGl0SWQoaWQpIHtcbiAgICBjb25zdCBzcGxpdEluZm8gPSBpZC5zcGxpdCgnOicpO1xuICAgIGlmIChzcGxpdEluZm8ubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzcGxpdEluZm9bMF0sXG4gICAgICAgICAgICB2ZXJzaW9uOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKHNwbGl0SW5mby5sZW5ndGggPT09IDIpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHNwbGl0SW5mb1swXSxcbiAgICAgICAgICAgIHZlcnNpb246IHNwbGl0SW5mb1sxXVxuICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBzcGxpdEluZm9bMV0sXG4gICAgICAgICAgICB2ZXJzaW9uOiBzcGxpdEluZm9bMl1cbiAgICAgICAgfTtcbiAgICB9XG59XG4vLyBUcmF2ZXJzZSBhbGwgbm9kZXMgaW4gbW9kdWxlSW5mbyBhbmQgdHJhdmVyc2UgdGhlIGVudGlyZSBzbmFwc2hvdFxuZnVuY3Rpb24gdHJhdmVyc2VNb2R1bGVJbmZvKGdsb2JhbFNuYXBzaG90LCByZW1vdGVJbmZvLCB0cmF2ZXJzZSwgaXNSb290LCBtZW1vID0ge30sIHJlbW90ZVNuYXBzaG90KSB7XG4gICAgY29uc3QgaWQgPSBnZXRGTUlkKHJlbW90ZUluZm8pO1xuICAgIGNvbnN0IHsgdmFsdWU6IHNuYXBzaG90VmFsdWUgfSA9IGdldEluZm9XaXRob3V0VHlwZShnbG9iYWxTbmFwc2hvdCwgaWQpO1xuICAgIGNvbnN0IGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90ID0gcmVtb3RlU25hcHNob3QgfHwgc25hcHNob3RWYWx1ZTtcbiAgICBpZiAoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QgJiYgIWlzTWFuaWZlc3RQcm92aWRlcihlZmZlY3RpdmVSZW1vdGVTbmFwc2hvdCkpIHtcbiAgICAgICAgdHJhdmVyc2UoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QsIHJlbW90ZUluZm8sIGlzUm9vdCk7XG4gICAgICAgIGlmIChlZmZlY3RpdmVSZW1vdGVTbmFwc2hvdC5yZW1vdGVzSW5mbykge1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlS2V5cyA9IE9iamVjdC5rZXlzKGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90LnJlbW90ZXNJbmZvKTtcbiAgICAgICAgICAgIGZvciAoY29uc3Qga2V5IG9mIHJlbW90ZUtleXMpe1xuICAgICAgICAgICAgICAgIGlmIChtZW1vW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1lbW9ba2V5XSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc3Qgc3ViUmVtb3RlSW5mbyA9IHNwbGl0SWQoa2V5KTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVWYWx1ZSA9IGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90LnJlbW90ZXNJbmZvW2tleV07XG4gICAgICAgICAgICAgICAgdHJhdmVyc2VNb2R1bGVJbmZvKGdsb2JhbFNuYXBzaG90LCB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHN1YlJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogcmVtb3RlVmFsdWUubWF0Y2hlZFZlcnNpb25cbiAgICAgICAgICAgICAgICB9LCB0cmF2ZXJzZSwgZmFsc2UsIG1lbW8sIHVuZGVmaW5lZCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59XG5jb25zdCBpc0V4aXN0ZWQgPSAodHlwZSwgdXJsKT0+e1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGAke3R5cGV9WyR7dHlwZSA9PT0gJ2xpbmsnID8gJ2hyZWYnIDogJ3NyYyd9PVwiJHt1cmx9XCJdYCk7XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbmZ1bmN0aW9uIGdlbmVyYXRlUHJlbG9hZEFzc2V0cyhvcmlnaW4sIHByZWxvYWRPcHRpb25zLCByZW1vdGUsIGdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCkge1xuICAgIGNvbnN0IGNzc0Fzc2V0cyA9IFtdO1xuICAgIGNvbnN0IGpzQXNzZXRzID0gW107XG4gICAgY29uc3QgZW50cnlBc3NldHMgPSBbXTtcbiAgICBjb25zdCBsb2FkZWRTaGFyZWRKc0Fzc2V0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCBsb2FkZWRTaGFyZWRDc3NBc3NldHMgPSBuZXcgU2V0KCk7XG4gICAgY29uc3QgeyBvcHRpb25zIH0gPSBvcmlnaW47XG4gICAgY29uc3QgeyBwcmVsb2FkQ29uZmlnOiByb290UHJlbG9hZENvbmZpZyB9ID0gcHJlbG9hZE9wdGlvbnM7XG4gICAgY29uc3QgeyBkZXBzUmVtb3RlIH0gPSByb290UHJlbG9hZENvbmZpZztcbiAgICBjb25zdCBtZW1vID0ge307XG4gICAgdHJhdmVyc2VNb2R1bGVJbmZvKGdsb2JhbFNuYXBzaG90LCByZW1vdGUsIChtb2R1bGVJbmZvU25hcHNob3QsIHJlbW90ZUluZm8sIGlzUm9vdCk9PntcbiAgICAgICAgbGV0IHByZWxvYWRDb25maWc7XG4gICAgICAgIGlmIChpc1Jvb3QpIHtcbiAgICAgICAgICAgIHByZWxvYWRDb25maWcgPSByb290UHJlbG9hZENvbmZpZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChBcnJheS5pc0FycmF5KGRlcHNSZW1vdGUpKSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGFycmF5LWNhbGxiYWNrLXJldHVyblxuICAgICAgICAgICAgICAgIGNvbnN0IGZpbmRQcmVsb2FkQ29uZmlnID0gZGVwc1JlbW90ZS5maW5kKChyZW1vdGVDb25maWcpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVDb25maWcubmFtZU9yQWxpYXMgPT09IHJlbW90ZUluZm8ubmFtZSB8fCByZW1vdGVDb25maWcubmFtZU9yQWxpYXMgPT09IHJlbW90ZUluZm8uYWxpYXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWZpbmRQcmVsb2FkQ29uZmlnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcHJlbG9hZENvbmZpZyA9IGRlZmF1bHRQcmVsb2FkQXJncyhmaW5kUHJlbG9hZENvbmZpZyk7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGRlcHNSZW1vdGUgPT09IHRydWUpIHtcbiAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnID0gcm9vdFByZWxvYWRDb25maWc7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZW1vdGVFbnRyeVVybCA9IGdldFJlc291cmNlVXJsKG1vZHVsZUluZm9TbmFwc2hvdCwgZ2V0UmVtb3RlRW50cnlJbmZvRnJvbVNuYXBzaG90KG1vZHVsZUluZm9TbmFwc2hvdCkudXJsKTtcbiAgICAgICAgaWYgKHJlbW90ZUVudHJ5VXJsKSB7XG4gICAgICAgICAgICBlbnRyeUFzc2V0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICBuYW1lOiByZW1vdGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgbW9kdWxlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiByZW1vdGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5OiByZW1vdGVFbnRyeVVybCxcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ3JlbW90ZUVudHJ5VHlwZScgaW4gbW9kdWxlSW5mb1NuYXBzaG90ID8gbW9kdWxlSW5mb1NuYXBzaG90LnJlbW90ZUVudHJ5VHlwZSA6ICdnbG9iYWwnLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeUdsb2JhbE5hbWU6ICdnbG9iYWxOYW1lJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QuZ2xvYmFsTmFtZSA6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZTogJycsXG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb246ICd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QudmVyc2lvbiA6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdXJsOiByZW1vdGVFbnRyeVVybFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IG1vZHVsZUFzc2V0c0luZm8gPSAnbW9kdWxlcycgaW4gbW9kdWxlSW5mb1NuYXBzaG90ID8gbW9kdWxlSW5mb1NuYXBzaG90Lm1vZHVsZXMgOiBbXTtcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplZFByZWxvYWRFeHBvc2VzID0gbm9ybWFsaXplUHJlbG9hZEV4cG9zZXMocHJlbG9hZENvbmZpZy5leHBvc2VzKTtcbiAgICAgICAgaWYgKG5vcm1hbGl6ZWRQcmVsb2FkRXhwb3Nlcy5sZW5ndGggJiYgJ21vZHVsZXMnIGluIG1vZHVsZUluZm9TbmFwc2hvdCkge1xuICAgICAgICAgICAgdmFyIF9tb2R1bGVJbmZvU25hcHNob3RfbW9kdWxlcztcbiAgICAgICAgICAgIG1vZHVsZUFzc2V0c0luZm8gPSBtb2R1bGVJbmZvU25hcHNob3QgPT0gbnVsbCA/IHZvaWQgMCA6IChfbW9kdWxlSW5mb1NuYXBzaG90X21vZHVsZXMgPSBtb2R1bGVJbmZvU25hcHNob3QubW9kdWxlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9tb2R1bGVJbmZvU25hcHNob3RfbW9kdWxlcy5yZWR1Y2UoKGFzc2V0cywgbW9kdWxlQXNzZXRJbmZvKT0+e1xuICAgICAgICAgICAgICAgIGlmICgobm9ybWFsaXplZFByZWxvYWRFeHBvc2VzID09IG51bGwgPyB2b2lkIDAgOiBub3JtYWxpemVkUHJlbG9hZEV4cG9zZXMuaW5kZXhPZihtb2R1bGVBc3NldEluZm8ubW9kdWxlTmFtZSkpICE9PSAtMSkge1xuICAgICAgICAgICAgICAgICAgICBhc3NldHMucHVzaChtb2R1bGVBc3NldEluZm8pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRzO1xuICAgICAgICAgICAgfSwgW10pO1xuICAgICAgICB9XG4gICAgICAgIGZ1bmN0aW9uIGhhbmRsZUFzc2V0cyhhc3NldHMpIHtcbiAgICAgICAgICAgIGNvbnN0IGFzc2V0c1JlcyA9IGFzc2V0cy5tYXAoKGFzc2V0KT0+Z2V0UmVzb3VyY2VVcmwobW9kdWxlSW5mb1NuYXBzaG90LCBhc3NldCkpO1xuICAgICAgICAgICAgaWYgKHByZWxvYWRDb25maWcuZmlsdGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGFzc2V0c1Jlcy5maWx0ZXIocHJlbG9hZENvbmZpZy5maWx0ZXIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGFzc2V0c1JlcztcbiAgICAgICAgfVxuICAgICAgICBpZiAobW9kdWxlQXNzZXRzSW5mbykge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzTGVuZ3RoID0gbW9kdWxlQXNzZXRzSW5mby5sZW5ndGg7XG4gICAgICAgICAgICBmb3IobGV0IGluZGV4ID0gMDsgaW5kZXggPCBhc3NldHNMZW5ndGg7IGluZGV4Kyspe1xuICAgICAgICAgICAgICAgIGNvbnN0IGFzc2V0c0luZm8gPSBtb2R1bGVBc3NldHNJbmZvW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHBvc2VGdWxsUGF0aCA9IGAke3JlbW90ZUluZm8ubmFtZX0vJHthc3NldHNJbmZvLm1vZHVsZU5hbWV9YDtcbiAgICAgICAgICAgICAgICBvcmlnaW4ucmVtb3RlSGFuZGxlci5ob29rcy5saWZlY3ljbGUuaGFuZGxlUHJlbG9hZE1vZHVsZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgaWQ6IGFzc2V0c0luZm8ubW9kdWxlTmFtZSA9PT0gJy4nID8gcmVtb3RlSW5mby5uYW1lIDogZXhwb3NlRnVsbFBhdGgsXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IG1vZHVsZUluZm9TbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgcHJlbG9hZENvbmZpZyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlOiByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW5cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVsb2FkZWQgPSBnZXRQcmVsb2FkZWQoZXhwb3NlRnVsbFBhdGgpO1xuICAgICAgICAgICAgICAgIGlmIChwcmVsb2FkZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChwcmVsb2FkQ29uZmlnLnJlc291cmNlQ2F0ZWdvcnkgPT09ICdhbGwnKSB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0Fzc2V0cy5wdXNoKC4uLmhhbmRsZUFzc2V0cyhhc3NldHNJbmZvLmFzc2V0cy5jc3MuYXN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmNzcy5zeW5jKSk7XG4gICAgICAgICAgICAgICAgICAgIGpzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmpzLmFzeW5jKSk7XG4gICAgICAgICAgICAgICAgICAgIGpzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmpzLnN5bmMpKTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tY29uc3RhbnQtY29uZGl0aW9uXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVsb2FkQ29uZmlnLnJlc291cmNlQ2F0ZWdvcnkgPSAnc3luYycpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmNzcy5zeW5jKSk7XG4gICAgICAgICAgICAgICAgICAgIGpzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmpzLnN5bmMpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2V0UHJlbG9hZGVkKGV4cG9zZUZ1bGxQYXRoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sIHRydWUsIG1lbW8sIHJlbW90ZVNuYXBzaG90KTtcbiAgICBpZiAocmVtb3RlU25hcHNob3Quc2hhcmVkICYmIHJlbW90ZVNuYXBzaG90LnNoYXJlZC5sZW5ndGggPiAwKSB7XG4gICAgICAgIGNvbnN0IGNvbGxlY3RTaGFyZWRBc3NldHMgPSAoc2hhcmVJbmZvLCBzbmFwc2hvdFNoYXJlZCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUob3JpZ2luLnNoYXJlU2NvcGVNYXAsIHNuYXBzaG90U2hhcmVkLnNoYXJlZE5hbWUsIHNoYXJlSW5mbywgb3JpZ2luLnNoYXJlZEhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLnJlc29sdmVTaGFyZSk7XG4gICAgICAgICAgICAvLyBJZiB0aGUgZ2xvYmFsIHNoYXJlIGRvZXMgbm90IGV4aXN0LCBvciB0aGUgbGliIGZ1bmN0aW9uIGRvZXMgbm90IGV4aXN0LCBpdCBtZWFucyB0aGF0IHRoZSBzaGFyZWQgaGFzIG5vdCBiZWVuIGxvYWRlZCB5ZXQgYW5kIGNhbiBiZSBwcmVsb2FkZWQuXG4gICAgICAgICAgICBpZiAocmVnaXN0ZXJlZFNoYXJlZCAmJiB0eXBlb2YgcmVnaXN0ZXJlZFNoYXJlZC5saWIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBzbmFwc2hvdFNoYXJlZC5hc3NldHMuanMuc3luYy5mb3JFYWNoKChhc3NldCk9PntcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkU2hhcmVkSnNBc3NldHMuYWRkKGFzc2V0KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBzbmFwc2hvdFNoYXJlZC5hc3NldHMuY3NzLnN5bmMuZm9yRWFjaCgoYXNzZXQpPT57XG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZFNoYXJlZENzc0Fzc2V0cy5hZGQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICByZW1vdGVTbmFwc2hvdC5zaGFyZWQuZm9yRWFjaCgoc2hhcmVkKT0+e1xuICAgICAgICAgICAgdmFyIF9vcHRpb25zX3NoYXJlZDtcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlSW5mb3MgPSAoX29wdGlvbnNfc2hhcmVkID0gb3B0aW9ucy5zaGFyZWQpID09IG51bGwgPyB2b2lkIDAgOiBfb3B0aW9uc19zaGFyZWRbc2hhcmVkLnNoYXJlZE5hbWVdO1xuICAgICAgICAgICAgaWYgKCFzaGFyZUluZm9zKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYgbm8gdmVyc2lvbiwgcHJlbG9hZCBhbGwgc2hhcmVkXG4gICAgICAgICAgICBjb25zdCBzaGFyZWRPcHRpb25zID0gc2hhcmVkLnZlcnNpb24gPyBzaGFyZUluZm9zLmZpbmQoKHMpPT5zLnZlcnNpb24gPT09IHNoYXJlZC52ZXJzaW9uKSA6IHNoYXJlSW5mb3M7XG4gICAgICAgICAgICBpZiAoIXNoYXJlZE9wdGlvbnMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhcnJheVNoYXJlSW5mbyA9IGFycmF5T3B0aW9ucyhzaGFyZWRPcHRpb25zKTtcbiAgICAgICAgICAgIGFycmF5U2hhcmVJbmZvLmZvckVhY2goKHMpPT57XG4gICAgICAgICAgICAgICAgY29sbGVjdFNoYXJlZEFzc2V0cyhzLCBzaGFyZWQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdCBuZWVkUHJlbG9hZEpzQXNzZXRzID0ganNBc3NldHMuZmlsdGVyKChhc3NldCk9PiFsb2FkZWRTaGFyZWRKc0Fzc2V0cy5oYXMoYXNzZXQpICYmICFpc0V4aXN0ZWQoJ3NjcmlwdCcsIGFzc2V0KSk7XG4gICAgY29uc3QgbmVlZFByZWxvYWRDc3NBc3NldHMgPSBjc3NBc3NldHMuZmlsdGVyKChhc3NldCk9PiFsb2FkZWRTaGFyZWRDc3NBc3NldHMuaGFzKGFzc2V0KSAmJiAhaXNFeGlzdGVkKCdsaW5rJywgYXNzZXQpKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBjc3NBc3NldHM6IG5lZWRQcmVsb2FkQ3NzQXNzZXRzLFxuICAgICAgICBqc0Fzc2V0c1dpdGhvdXRFbnRyeTogbmVlZFByZWxvYWRKc0Fzc2V0cyxcbiAgICAgICAgZW50cnlBc3NldHM6IGVudHJ5QXNzZXRzLmZpbHRlcigoZW50cnkpPT4haXNFeGlzdGVkKCdzY3JpcHQnLCBlbnRyeS51cmwpKVxuICAgIH07XG59XG5jb25zdCBnZW5lcmF0ZVByZWxvYWRBc3NldHNQbHVnaW4gPSBmdW5jdGlvbigpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICBuYW1lOiAnZ2VuZXJhdGUtcHJlbG9hZC1hc3NldHMtcGx1Z2luJyxcbiAgICAgICAgYXN5bmMgZ2VuZXJhdGVQcmVsb2FkQXNzZXRzIChhcmdzKSB7XG4gICAgICAgICAgICBjb25zdCB7IG9yaWdpbiwgcHJlbG9hZE9wdGlvbnMsIHJlbW90ZUluZm8sIHJlbW90ZSwgZ2xvYmFsU25hcHNob3QsIHJlbW90ZVNuYXBzaG90IH0gPSBhcmdzO1xuICAgICAgICAgICAgaWYgKCFpc0Jyb3dzZXJFbnYoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGNzc0Fzc2V0czogW10sXG4gICAgICAgICAgICAgICAgICAgIGpzQXNzZXRzV2l0aG91dEVudHJ5OiBbXSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnlBc3NldHM6IFtdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1JlbW90ZUluZm9XaXRoRW50cnkocmVtb3RlKSAmJiBpc1B1cmVSZW1vdGVFbnRyeShyZW1vdGUpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXNzZXRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnk6IFtdLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeUFzc2V0czogW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZS5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybDogcmVtb3RlLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm86IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbnRyeTogcmVtb3RlLmVudHJ5LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0eXBlOiByZW1vdGVJbmZvLnR5cGUgfHwgJ2dsb2JhbCcsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5R2xvYmFsTmFtZTogJycsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGU6ICcnXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2lnblJlbW90ZUluZm8ocmVtb3RlSW5mbywgcmVtb3RlU25hcHNob3QpO1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gZ2VuZXJhdGVQcmVsb2FkQXNzZXRzKG9yaWdpbiwgcHJlbG9hZE9wdGlvbnMsIHJlbW90ZUluZm8sIGdsb2JhbFNuYXBzaG90LCByZW1vdGVTbmFwc2hvdCk7XG4gICAgICAgICAgICByZXR1cm4gYXNzZXRzO1xuICAgICAgICB9XG4gICAgfTtcbn07XG5cbmZ1bmN0aW9uIGdldEdsb2JhbFJlbW90ZUluZm8obW9kdWxlSW5mbywgb3JpZ2luKSB7XG4gICAgY29uc3QgaG9zdEdsb2JhbFNuYXBzaG90ID0gZ2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKHtcbiAgICAgICAgbmFtZTogb3JpZ2luLm5hbWUsXG4gICAgICAgIHZlcnNpb246IG9yaWdpbi5vcHRpb25zLnZlcnNpb25cbiAgICB9KTtcbiAgICAvLyBnZXQgcmVtb3RlIGRldGFpbCBpbmZvIGZyb20gZ2xvYmFsXG4gICAgY29uc3QgZ2xvYmFsUmVtb3RlSW5mbyA9IGhvc3RHbG9iYWxTbmFwc2hvdCAmJiAncmVtb3Rlc0luZm8nIGluIGhvc3RHbG9iYWxTbmFwc2hvdCAmJiBob3N0R2xvYmFsU25hcHNob3QucmVtb3Rlc0luZm8gJiYgZ2V0SW5mb1dpdGhvdXRUeXBlKGhvc3RHbG9iYWxTbmFwc2hvdC5yZW1vdGVzSW5mbywgbW9kdWxlSW5mby5uYW1lKS52YWx1ZTtcbiAgICBpZiAoZ2xvYmFsUmVtb3RlSW5mbyAmJiBnbG9iYWxSZW1vdGVJbmZvLm1hdGNoZWRWZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBob3N0R2xvYmFsU25hcHNob3QsXG4gICAgICAgICAgICBnbG9iYWxTbmFwc2hvdDogZ2V0R2xvYmFsU25hcHNob3QoKSxcbiAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICAgICAgICAgIG5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBnbG9iYWxSZW1vdGVJbmZvLm1hdGNoZWRWZXJzaW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICB9O1xuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICBob3N0R2xvYmFsU25hcHNob3Q6IHVuZGVmaW5lZCxcbiAgICAgICAgZ2xvYmFsU25hcHNob3Q6IGdldEdsb2JhbFNuYXBzaG90KCksXG4gICAgICAgIHJlbW90ZVNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICAgICAgbmFtZTogbW9kdWxlSW5mby5uYW1lLFxuICAgICAgICAgICAgdmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gPyBtb2R1bGVJbmZvLnZlcnNpb24gOiB1bmRlZmluZWRcbiAgICAgICAgfSlcbiAgICB9O1xufVxuY2xhc3MgU25hcHNob3RIYW5kbGVyIHtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgIGFzeW5jIGxvYWRSZW1vdGVTbmFwc2hvdEluZm8oeyBtb2R1bGVJbmZvLCBpZCwgZXhwb3NlIH0pIHtcbiAgICAgICAgY29uc3QgeyBvcHRpb25zIH0gPSB0aGlzLkhvc3RJbnN0YW5jZTtcbiAgICAgICAgYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlTG9hZFJlbW90ZVNuYXBzaG90LmVtaXQoe1xuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG1vZHVsZUluZm9cbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBob3N0U25hcHNob3QgPSBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICAgICAgbmFtZTogdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucy52ZXJzaW9uXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWhvc3RTbmFwc2hvdCkge1xuICAgICAgICAgICAgaG9zdFNuYXBzaG90ID0ge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IHRoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMudmVyc2lvbiB8fCAnJyxcbiAgICAgICAgICAgICAgICByZW1vdGVFbnRyeTogJycsXG4gICAgICAgICAgICAgICAgcmVtb3Rlc0luZm86IHt9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgYWRkR2xvYmFsU25hcHNob3Qoe1xuICAgICAgICAgICAgICAgIFt0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLm5hbWVdOiBob3N0U25hcHNob3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIC8vIEluIGR5bmFtaWMgbG9hZFJlbW90ZSBzY2VuYXJpb3MsIGluY29tcGxldGUgcmVtb3Rlc0luZm8gZGVsaXZlcnkgbWF5IG9jY3VyLiBJbiBzdWNoIGNhc2VzLCB0aGUgcmVtb3Rlc0luZm8gaW4gdGhlIGhvc3QgbmVlZHMgdG8gYmUgY29tcGxldGVkIGluIHRoZSBzbmFwc2hvdCBhdCBydW50aW1lLlxuICAgICAgICAvLyBUaGlzIGVuc3VyZXMgdGhlIHNuYXBzaG90J3MgaW50ZWdyaXR5IGFuZCBoZWxwcyB0aGUgY2hyb21lIHBsdWdpbiBjb3JyZWN0bHkgaWRlbnRpZnkgYWxsIHByb2R1Y2VyIG1vZHVsZXMsIGVuc3VyaW5nIHRoYXQgcHJveHlhYmxlIHByb2R1Y2VyIG1vZHVsZXMgd2lsbCBub3QgYmUgbWlzc2luZy5cbiAgICAgICAgaWYgKGhvc3RTbmFwc2hvdCAmJiAncmVtb3Rlc0luZm8nIGluIGhvc3RTbmFwc2hvdCAmJiAhZ2V0SW5mb1dpdGhvdXRUeXBlKGhvc3RTbmFwc2hvdC5yZW1vdGVzSW5mbywgbW9kdWxlSW5mby5uYW1lKS52YWx1ZSkge1xuICAgICAgICAgICAgaWYgKCd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvIHx8ICdlbnRyeScgaW4gbW9kdWxlSW5mbykge1xuICAgICAgICAgICAgICAgIGhvc3RTbmFwc2hvdC5yZW1vdGVzSW5mbyA9IF9leHRlbmRzKHt9LCBob3N0U25hcHNob3QgPT0gbnVsbCA/IHZvaWQgMCA6IGhvc3RTbmFwc2hvdC5yZW1vdGVzSW5mbywge1xuICAgICAgICAgICAgICAgICAgICBbbW9kdWxlSW5mby5uYW1lXToge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb246ICd2ZXJzaW9uJyBpbiBtb2R1bGVJbmZvID8gbW9kdWxlSW5mby52ZXJzaW9uIDogbW9kdWxlSW5mby5lbnRyeVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBob3N0R2xvYmFsU25hcHNob3QsIHJlbW90ZVNuYXBzaG90LCBnbG9iYWxTbmFwc2hvdCB9ID0gdGhpcy5nZXRHbG9iYWxSZW1vdGVJbmZvKG1vZHVsZUluZm8pO1xuICAgICAgICBjb25zdCB7IHJlbW90ZVNuYXBzaG90OiBnbG9iYWxSZW1vdGVTbmFwc2hvdCwgZ2xvYmFsU25hcHNob3Q6IGdsb2JhbFNuYXBzaG90UmVzIH0gPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5sb2FkU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgbW9kdWxlSW5mbyxcbiAgICAgICAgICAgIGhvc3RHbG9iYWxTbmFwc2hvdCxcbiAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgZ2xvYmFsU25hcHNob3RcbiAgICAgICAgfSk7XG4gICAgICAgIGxldCBtU25hcHNob3Q7XG4gICAgICAgIGxldCBnU25hcHNob3Q7XG4gICAgICAgIC8vIGdsb2JhbCBzbmFwc2hvdCBpbmNsdWRlcyBtYW5pZmVzdCBvciBtb2R1bGUgaW5mbyBpbmNsdWRlcyBtYW5pZmVzdFxuICAgICAgICBpZiAoZ2xvYmFsUmVtb3RlU25hcHNob3QpIHtcbiAgICAgICAgICAgIGlmIChpc01hbmlmZXN0UHJvdmlkZXIoZ2xvYmFsUmVtb3RlU25hcHNob3QpKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlRW50cnkgPSBpc0Jyb3dzZXJFbnYoKSA/IGdsb2JhbFJlbW90ZVNuYXBzaG90LnJlbW90ZUVudHJ5IDogZ2xvYmFsUmVtb3RlU25hcHNob3Quc3NyUmVtb3RlRW50cnkgfHwgZ2xvYmFsUmVtb3RlU25hcHNob3QucmVtb3RlRW50cnkgfHwgJyc7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlU25hcHNob3QgPSBhd2FpdCB0aGlzLmdldE1hbmlmZXN0SnNvbihyZW1vdGVFbnRyeSwgbW9kdWxlSW5mbywge30pO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93XG4gICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsU25hcHNob3RSZXMgPSBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oX2V4dGVuZHMoe30sIG1vZHVsZUluZm8sIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlIGdsb2JhbCByZW1vdGUgbWF5IGJlIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgLy8gVGhlcmVmb3JlLCBzZXQgdGhlIHNuYXBzaG90IGtleSB0byB0aGUgZ2xvYmFsIGFkZHJlc3Mgb2YgdGhlIGFjdHVhbCByZXF1ZXN0XG4gICAgICAgICAgICAgICAgICAgIGVudHJ5OiByZW1vdGVFbnRyeVxuICAgICAgICAgICAgICAgIH0pLCBtb2R1bGVTbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgbVNuYXBzaG90ID0gbW9kdWxlU25hcHNob3Q7XG4gICAgICAgICAgICAgICAgZ1NuYXBzaG90ID0gZ2xvYmFsU25hcHNob3RSZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlU25hcHNob3Q6IHJlbW90ZVNuYXBzaG90UmVzIH0gPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5sb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiBnbG9iYWxSZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtU25hcHNob3QgPSByZW1vdGVTbmFwc2hvdFJlcztcbiAgICAgICAgICAgICAgICBnU25hcHNob3QgPSBnbG9iYWxTbmFwc2hvdFJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChpc1JlbW90ZUluZm9XaXRoRW50cnkobW9kdWxlSW5mbykpIHtcbiAgICAgICAgICAgICAgICAvLyBnZXQgZnJvbSBtYW5pZmVzdC5qc29uIGFuZCBtZXJnZSByZW1vdGUgaW5mbyBmcm9tIHJlbW90ZSBzZXJ2ZXJcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVTbmFwc2hvdCA9IGF3YWl0IHRoaXMuZ2V0TWFuaWZlc3RKc29uKG1vZHVsZUluZm8uZW50cnksIG1vZHVsZUluZm8sIHt9KTtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLXNoYWRvd1xuICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbFNuYXBzaG90UmVzID0gc2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKG1vZHVsZUluZm8sIG1vZHVsZVNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBjb25zdCB7IHJlbW90ZVNuYXBzaG90OiByZW1vdGVTbmFwc2hvdFJlcyB9ID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUubG9hZFJlbW90ZVNuYXBzaG90LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbW9kdWxlU25hcHNob3QsXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdnbG9iYWwnXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbVNuYXBzaG90ID0gcmVtb3RlU25hcHNob3RSZXM7XG4gICAgICAgICAgICAgICAgZ1NuYXBzaG90ID0gZ2xvYmFsU25hcHNob3RSZXM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGVycm9yKGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDcsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lOiBtb2R1bGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGhvc3RWZXJzaW9uOiBtb2R1bGVJbmZvLnZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBKU09OLnN0cmluZ2lmeShnbG9iYWxTbmFwc2hvdFJlcylcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuYWZ0ZXJMb2FkU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICBpZCxcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMuSG9zdEluc3RhbmNlLFxuICAgICAgICAgICAgb3B0aW9ucyxcbiAgICAgICAgICAgIG1vZHVsZUluZm8sXG4gICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbVNuYXBzaG90XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IG1TbmFwc2hvdCxcbiAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnU25hcHNob3RcbiAgICAgICAgfTtcbiAgICB9XG4gICAgZ2V0R2xvYmFsUmVtb3RlSW5mbyhtb2R1bGVJbmZvKSB7XG4gICAgICAgIHJldHVybiBnZXRHbG9iYWxSZW1vdGVJbmZvKG1vZHVsZUluZm8sIHRoaXMuSG9zdEluc3RhbmNlKTtcbiAgICB9XG4gICAgYXN5bmMgZ2V0TWFuaWZlc3RKc29uKG1hbmlmZXN0VXJsLCBtb2R1bGVJbmZvLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZ2V0TWFuaWZlc3QgPSBhc3luYyAoKT0+e1xuICAgICAgICAgICAgbGV0IG1hbmlmZXN0SnNvbiA9IHRoaXMubWFuaWZlc3RDYWNoZS5nZXQobWFuaWZlc3RVcmwpO1xuICAgICAgICAgICAgaWYgKG1hbmlmZXN0SnNvbikge1xuICAgICAgICAgICAgICAgIHJldHVybiBtYW5pZmVzdEpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgIGxldCByZXMgPSBhd2FpdCB0aGlzLmxvYWRlckhvb2subGlmZWN5Y2xlLmZldGNoLmVtaXQobWFuaWZlc3RVcmwsIHt9KTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlcyB8fCAhKHJlcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgICAgICAgICAgICAgICAgICByZXMgPSBhd2FpdCBmZXRjaChtYW5pZmVzdFVybCwge30pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb24gPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgbWFuaWZlc3RKc29uID0gYXdhaXQgdGhpcy5Ib3N0SW5zdGFuY2UucmVtb3RlSGFuZGxlci5ob29rcy5saWZlY3ljbGUuZXJyb3JMb2FkUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogbWFuaWZlc3RVcmwsXG4gICAgICAgICAgICAgICAgICAgIGVycm9yOiBlcnIsXG4gICAgICAgICAgICAgICAgICAgIGZyb206ICdydW50aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgbGlmZWN5Y2xlOiAnYWZ0ZXJSZXNvbHZlJyxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLkhvc3RJbnN0YW5jZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghbWFuaWZlc3RKc29uKSB7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLm1hbmlmZXN0TG9hZGluZ1ttYW5pZmVzdFVybF07XG4gICAgICAgICAgICAgICAgICAgIGVycm9yKGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDMsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYW5pZmVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgIG1vZHVsZU5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lOiB0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSwgYCR7ZXJyfWApKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhc3NlcnQobWFuaWZlc3RKc29uLm1ldGFEYXRhICYmIG1hbmlmZXN0SnNvbi5leHBvc2VzICYmIG1hbmlmZXN0SnNvbi5zaGFyZWQsIGAke21hbmlmZXN0VXJsfSBpcyBub3QgYSBmZWRlcmF0aW9uIG1hbmlmZXN0YCk7XG4gICAgICAgICAgICB0aGlzLm1hbmlmZXN0Q2FjaGUuc2V0KG1hbmlmZXN0VXJsLCBtYW5pZmVzdEpzb24pO1xuICAgICAgICAgICAgcmV0dXJuIG1hbmlmZXN0SnNvbjtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgYXN5bmNMb2FkUHJvY2VzcyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICBjb25zdCBtYW5pZmVzdEpzb24gPSBhd2FpdCBnZXRNYW5pZmVzdCgpO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlU25hcHNob3QgPSBnZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0KG1hbmlmZXN0SnNvbiwge1xuICAgICAgICAgICAgICAgIHZlcnNpb246IG1hbmlmZXN0VXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlU25hcHNob3Q6IHJlbW90ZVNuYXBzaG90UmVzIH0gPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5sb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgICAgIG1hbmlmZXN0SnNvbixcbiAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICBtYW5pZmVzdFVybCxcbiAgICAgICAgICAgICAgICBmcm9tOiAnbWFuaWZlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiByZW1vdGVTbmFwc2hvdFJlcztcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCF0aGlzLm1hbmlmZXN0TG9hZGluZ1ttYW5pZmVzdFVybF0pIHtcbiAgICAgICAgICAgIHRoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXSA9IGFzeW5jTG9hZFByb2Nlc3MoKS50aGVuKChyZXMpPT5yZXMpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzLm1hbmlmZXN0TG9hZGluZ1ttYW5pZmVzdFVybF07XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKEhvc3RJbnN0YW5jZSl7XG4gICAgICAgIHRoaXMubG9hZGluZ0hvc3RTbmFwc2hvdCA9IG51bGw7XG4gICAgICAgIHRoaXMubWFuaWZlc3RDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYmVmb3JlTG9hZFJlbW90ZVNuYXBzaG90OiBuZXcgQXN5bmNIb29rKCdiZWZvcmVMb2FkUmVtb3RlU25hcHNob3QnKSxcbiAgICAgICAgICAgIGxvYWRTbmFwc2hvdDogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnbG9hZEdsb2JhbFNuYXBzaG90JyksXG4gICAgICAgICAgICBsb2FkUmVtb3RlU25hcHNob3Q6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2xvYWRSZW1vdGVTbmFwc2hvdCcpLFxuICAgICAgICAgICAgYWZ0ZXJMb2FkU25hcHNob3Q6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2FmdGVyTG9hZFNuYXBzaG90JylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMubWFuaWZlc3RMb2FkaW5nID0gR2xvYmFsLl9fRkVERVJBVElPTl9fLl9fTUFOSUZFU1RfTE9BRElOR19fO1xuICAgICAgICB0aGlzLkhvc3RJbnN0YW5jZSA9IEhvc3RJbnN0YW5jZTtcbiAgICAgICAgdGhpcy5sb2FkZXJIb29rID0gSG9zdEluc3RhbmNlLmxvYWRlckhvb2s7XG4gICAgfVxufVxuXG5jbGFzcyBTaGFyZWRIYW5kbGVyIHtcbiAgICAvLyByZWdpc3RlciBzaGFyZWQgaW4gc2hhcmVTY29wZU1hcFxuICAgIHJlZ2lzdGVyU2hhcmVkKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcmVJbmZvcywgc2hhcmVkIH0gPSBmb3JtYXRTaGFyZUNvbmZpZ3MoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICAgICAgICBjb25zdCBzaGFyZWRLZXlzID0gT2JqZWN0LmtleXMoc2hhcmVJbmZvcyk7XG4gICAgICAgIHNoYXJlZEtleXMuZm9yRWFjaCgoc2hhcmVkS2V5KT0+e1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVkVmFscyA9IHNoYXJlSW5mb3Nbc2hhcmVkS2V5XTtcbiAgICAgICAgICAgIHNoYXJlZFZhbHMuZm9yRWFjaCgoc2hhcmVkVmFsKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUodGhpcy5zaGFyZVNjb3BlTWFwLCBzaGFyZWRLZXksIHNoYXJlZFZhbCwgdGhpcy5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2lzdGVyZWRTaGFyZWQgJiYgc2hhcmVkVmFsICYmIHNoYXJlZFZhbC5saWIpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZTogc2hhcmVkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgICAgbGliOiBzaGFyZWRWYWwubGliLFxuICAgICAgICAgICAgICAgICAgICAgICAgZ2V0OiBzaGFyZWRWYWwuZ2V0LFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkOiBzaGFyZWRWYWwsXG4gICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiB1c2VyT3B0aW9ucy5uYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHNoYXJlSW5mb3MsXG4gICAgICAgICAgICBzaGFyZWRcbiAgICAgICAgfTtcbiAgICB9XG4gICAgYXN5bmMgbG9hZFNoYXJlKHBrZ05hbWUsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIC8vIFRoaXMgZnVuY3Rpb24gcGVyZm9ybXMgdGhlIGZvbGxvd2luZyBzdGVwczpcbiAgICAgICAgLy8gMS4gQ2hlY2tzIGlmIHRoZSBjdXJyZW50bHkgbG9hZGVkIHNoYXJlIGFscmVhZHkgZXhpc3RzLCBpZiBub3QsIGl0IHRocm93cyBhbiBlcnJvclxuICAgICAgICAvLyAyLiBTZWFyY2hlcyBnbG9iYWxseSBmb3IgYSBtYXRjaGluZyBzaGFyZSwgaWYgZm91bmQsIGl0IHVzZXMgaXQgZGlyZWN0bHlcbiAgICAgICAgLy8gMy4gSWYgbm90IGZvdW5kLCBpdCByZXRyaWV2ZXMgaXQgZnJvbSB0aGUgY3VycmVudCBzaGFyZSBhbmQgc3RvcmVzIHRoZSBvYnRhaW5lZCBzaGFyZSBnbG9iYWxseS5cbiAgICAgICAgY29uc3Qgc2hhcmVPcHRpb25zID0gZ2V0VGFyZ2V0U2hhcmVkT3B0aW9ucyh7XG4gICAgICAgICAgICBwa2dOYW1lLFxuICAgICAgICAgICAgZXh0cmFPcHRpb25zLFxuICAgICAgICAgICAgc2hhcmVJbmZvczogaG9zdC5vcHRpb25zLnNoYXJlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNoYXJlT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogc2hhcmVPcHRpb25zLnNjb3BlKSB7XG4gICAgICAgICAgICBhd2FpdCBQcm9taXNlLmFsbChzaGFyZU9wdGlvbnMuc2NvcGUubWFwKGFzeW5jIChzaGFyZVNjb3BlKT0+e1xuICAgICAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHRoaXMuaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZSwge1xuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogc2hhcmVPcHRpb25zLnN0cmF0ZWd5XG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH0pKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkU2hhcmVSZXMgPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVMb2FkU2hhcmUuZW1pdCh7XG4gICAgICAgICAgICBwa2dOYW1lLFxuICAgICAgICAgICAgc2hhcmVJbmZvOiBzaGFyZU9wdGlvbnMsXG4gICAgICAgICAgICBzaGFyZWQ6IGhvc3Qub3B0aW9ucy5zaGFyZWQsXG4gICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHsgc2hhcmVJbmZvOiBzaGFyZU9wdGlvbnNSZXMgfSA9IGxvYWRTaGFyZVJlcztcbiAgICAgICAgLy8gQXNzZXJ0IHRoYXQgc2hhcmVJbmZvUmVzIGV4aXN0cywgaWYgbm90LCB0aHJvdyBhbiBlcnJvclxuICAgICAgICBhc3NlcnQoc2hhcmVPcHRpb25zUmVzLCBgQ2Fubm90IGZpbmQgJHtwa2dOYW1lfSBTaGFyZSBpbiB0aGUgJHtob3N0Lm9wdGlvbnMubmFtZX0uIFBsZWFzZSBlbnN1cmUgdGhhdCB0aGUgJHtwa2dOYW1lfSBTaGFyZSBwYXJhbWV0ZXJzIGhhdmUgYmVlbiBpbmplY3RlZGApO1xuICAgICAgICAvLyBSZXRyaWV2ZSBmcm9tIGNhY2hlXG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUodGhpcy5zaGFyZVNjb3BlTWFwLCBwa2dOYW1lLCBzaGFyZU9wdGlvbnNSZXMsIHRoaXMuaG9va3MubGlmZWN5Y2xlLnJlc29sdmVTaGFyZSk7XG4gICAgICAgIGNvbnN0IGFkZFVzZUluID0gKHNoYXJlZCk9PntcbiAgICAgICAgICAgIGlmICghc2hhcmVkLnVzZUluKSB7XG4gICAgICAgICAgICAgICAgc2hhcmVkLnVzZUluID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBhZGRVbmlxdWVJdGVtKHNoYXJlZC51c2VJbiwgaG9zdC5vcHRpb25zLm5hbWUpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAocmVnaXN0ZXJlZFNoYXJlZCAmJiByZWdpc3RlcmVkU2hhcmVkLmxpYikge1xuICAgICAgICAgICAgYWRkVXNlSW4ocmVnaXN0ZXJlZFNoYXJlZCk7XG4gICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZFNoYXJlZC5saWI7XG4gICAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZFNoYXJlZCAmJiByZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmcgJiYgIXJlZ2lzdGVyZWRTaGFyZWQubG9hZGVkKSB7XG4gICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gYXdhaXQgcmVnaXN0ZXJlZFNoYXJlZC5sb2FkaW5nO1xuICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKCFyZWdpc3RlcmVkU2hhcmVkLmxpYikge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubGliID0gZmFjdG9yeTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFVzZUluKHJlZ2lzdGVyZWRTaGFyZWQpO1xuICAgICAgICAgICAgcmV0dXJuIGZhY3Rvcnk7XG4gICAgICAgIH0gZWxzZSBpZiAocmVnaXN0ZXJlZFNoYXJlZCkge1xuICAgICAgICAgICAgY29uc3QgYXN5bmNMb2FkUHJvY2VzcyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IGF3YWl0IHJlZ2lzdGVyZWRTaGFyZWQuZ2V0KCk7XG4gICAgICAgICAgICAgICAgYWRkVXNlSW4ocmVnaXN0ZXJlZFNoYXJlZCk7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubGliID0gZmFjdG9yeTtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nID0gYXN5bmNMb2FkUHJvY2VzcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IHJlZ2lzdGVyZWRTaGFyZWQsXG4gICAgICAgICAgICAgICAgZnJvbTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgbGliOiBudWxsLFxuICAgICAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRpbmc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBpZiAoZXh0cmFPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBleHRyYU9wdGlvbnMuY3VzdG9tU2hhcmVJbmZvKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYXN5bmNMb2FkUHJvY2VzcyA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IGF3YWl0IHNoYXJlT3B0aW9uc1Jlcy5nZXQoKTtcbiAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnNSZXMubGliID0gZmFjdG9yeTtcbiAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnNSZXMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBhZGRVc2VJbihzaGFyZU9wdGlvbnNSZXMpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGdTaGFyZWQgPSBnZXRSZWdpc3RlcmVkU2hhcmUodGhpcy5zaGFyZVNjb3BlTWFwLCBwa2dOYW1lLCBzaGFyZU9wdGlvbnNSZXMsIHRoaXMuaG9va3MubGlmZWN5Y2xlLnJlc29sdmVTaGFyZSk7XG4gICAgICAgICAgICAgICAgaWYgKGdTaGFyZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgZ1NoYXJlZC5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgICAgICBnU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGdTaGFyZWQuZnJvbSA9IHNoYXJlT3B0aW9uc1Jlcy5mcm9tO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBsb2FkaW5nID0gYXN5bmNMb2FkUHJvY2VzcygpO1xuICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IHNoYXJlT3B0aW9uc1JlcyxcbiAgICAgICAgICAgICAgICBmcm9tOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgICAgICBsaWI6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGluaXRpYWxpemVzIHRoZSBzaGFyaW5nIHNlcXVlbmNlIChleGVjdXRlZCBvbmx5IG9uY2UgcGVyIHNoYXJlIHNjb3BlKS5cbiAgICAgKiBJdCBhY2NlcHRzIG9uZSBhcmd1bWVudCwgdGhlIG5hbWUgb2YgdGhlIHNoYXJlIHNjb3BlLlxuICAgICAqIElmIHRoZSBzaGFyZSBzY29wZSBkb2VzIG5vdCBleGlzdCwgaXQgY3JlYXRlcyBvbmUuXG4gICAgICovIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZU5hbWUgPSBERUZBVUxUX1NDT1BFLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBmcm9tID0gZXh0cmFPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBleHRyYU9wdGlvbnMuZnJvbTtcbiAgICAgICAgY29uc3Qgc3RyYXRlZ3kgPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5zdHJhdGVneTtcbiAgICAgICAgbGV0IGluaXRTY29wZSA9IGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLmluaXRTY29wZTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBbXTtcbiAgICAgICAgaWYgKGZyb20gIT09ICdidWlsZCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgaW5pdFRva2VucyB9ID0gdGhpcztcbiAgICAgICAgICAgIGlmICghaW5pdFNjb3BlKSBpbml0U2NvcGUgPSBbXTtcbiAgICAgICAgICAgIGxldCBpbml0VG9rZW4gPSBpbml0VG9rZW5zW3NoYXJlU2NvcGVOYW1lXTtcbiAgICAgICAgICAgIGlmICghaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW3NoYXJlU2NvcGVOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBmcm9tOiB0aGlzLmhvc3QubmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGlmIChpbml0U2NvcGUuaW5kZXhPZihpbml0VG9rZW4pID49IDApIHJldHVybiBwcm9taXNlcztcbiAgICAgICAgICAgIGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc2hhcmVTY29wZSA9IHRoaXMuc2hhcmVTY29wZU1hcDtcbiAgICAgICAgY29uc3QgaG9zdE5hbWUgPSBob3N0Lm9wdGlvbnMubmFtZTtcbiAgICAgICAgLy8gQ3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWNlc3NhcnlcbiAgICAgICAgaWYgKCFzaGFyZVNjb3BlW3NoYXJlU2NvcGVOYW1lXSkge1xuICAgICAgICAgICAgc2hhcmVTY29wZVtzaGFyZVNjb3BlTmFtZV0gPSB7fTtcbiAgICAgICAgfVxuICAgICAgICAvLyBFeGVjdXRlcyBhbGwgaW5pdGlhbGl6YXRpb24gc25pcHBldHMgZnJvbSBhbGwgYWNjZXNzaWJsZSBtb2R1bGVzXG4gICAgICAgIGNvbnN0IHNjb3BlID0gc2hhcmVTY29wZVtzaGFyZVNjb3BlTmFtZV07XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyID0gKG5hbWUsIHNoYXJlZCk9PntcbiAgICAgICAgICAgIHZhciBfYWN0aXZlVmVyc2lvbl9zaGFyZUNvbmZpZztcbiAgICAgICAgICAgIGNvbnN0IHsgdmVyc2lvbiwgZWFnZXIgfSA9IHNoYXJlZDtcbiAgICAgICAgICAgIHNjb3BlW25hbWVdID0gc2NvcGVbbmFtZV0gfHwge307XG4gICAgICAgICAgICBjb25zdCB2ZXJzaW9ucyA9IHNjb3BlW25hbWVdO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuICAgICAgICAgICAgY29uc3QgYWN0aXZlVmVyc2lvbkVhZ2VyID0gQm9vbGVhbihhY3RpdmVWZXJzaW9uICYmIChhY3RpdmVWZXJzaW9uLmVhZ2VyIHx8ICgoX2FjdGl2ZVZlcnNpb25fc2hhcmVDb25maWcgPSBhY3RpdmVWZXJzaW9uLnNoYXJlQ29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX2FjdGl2ZVZlcnNpb25fc2hhcmVDb25maWcuZWFnZXIpKSk7XG4gICAgICAgICAgICBpZiAoIWFjdGl2ZVZlcnNpb24gfHwgYWN0aXZlVmVyc2lvbi5zdHJhdGVneSAhPT0gJ2xvYWRlZC1maXJzdCcgJiYgIWFjdGl2ZVZlcnNpb24ubG9hZGVkICYmIChCb29sZWFuKCFlYWdlcikgIT09ICFhY3RpdmVWZXJzaW9uRWFnZXIgPyBlYWdlciA6IGhvc3ROYW1lID4gYWN0aXZlVmVyc2lvbi5mcm9tKSkge1xuICAgICAgICAgICAgICAgIHZlcnNpb25zW3ZlcnNpb25dID0gc2hhcmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbml0Rm4gPSAobW9kKT0+bW9kICYmIG1vZC5pbml0ICYmIG1vZC5pbml0KHNoYXJlU2NvcGVbc2hhcmVTY29wZU5hbWVdLCBpbml0U2NvcGUpO1xuICAgICAgICBjb25zdCBpbml0UmVtb3RlTW9kdWxlID0gYXN5bmMgKGtleSk9PntcbiAgICAgICAgICAgIGNvbnN0IHsgbW9kdWxlIH0gPSBhd2FpdCBob3N0LnJlbW90ZUhhbmRsZXIuZ2V0UmVtb3RlTW9kdWxlQW5kT3B0aW9ucyh7XG4gICAgICAgICAgICAgICAgaWQ6IGtleVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAobW9kdWxlLmdldEVudHJ5KSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBhd2FpdCBtb2R1bGUuZ2V0RW50cnkoKTtcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMgPSBhd2FpdCBob3N0LnJlbW90ZUhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLmVycm9yTG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlkOiBrZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdydW50aW1lJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxpZmVjeWNsZTogJ2JlZm9yZUxvYWRTaGFyZScsXG4gICAgICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghbW9kdWxlLmluaXRlZCkge1xuICAgICAgICAgICAgICAgICAgICBhd2FpdCBpbml0Rm4ocmVtb3RlRW50cnlFeHBvcnRzKTtcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluaXRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBPYmplY3Qua2V5cyhob3N0Lm9wdGlvbnMuc2hhcmVkKS5mb3JFYWNoKChzaGFyZU5hbWUpPT57XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRBcnIgPSBob3N0Lm9wdGlvbnMuc2hhcmVkW3NoYXJlTmFtZV07XG4gICAgICAgICAgICBzaGFyZWRBcnIuZm9yRWFjaCgoc2hhcmVkKT0+e1xuICAgICAgICAgICAgICAgIGlmIChzaGFyZWQuc2NvcGUuaW5jbHVkZXMoc2hhcmVTY29wZU5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyKHNoYXJlTmFtZSwgc2hhcmVkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIC8vIFRPRE86IHN0cmF0ZWd5PT09J3ZlcnNpb24tZmlyc3QnIG5lZWQgdG8gYmUgcmVtb3ZlZCBpbiB0aGUgZnV0dXJlXG4gICAgICAgIGlmIChob3N0Lm9wdGlvbnMuc2hhcmVTdHJhdGVneSA9PT0gJ3ZlcnNpb24tZmlyc3QnIHx8IHN0cmF0ZWd5ID09PSAndmVyc2lvbi1maXJzdCcpIHtcbiAgICAgICAgICAgIGhvc3Qub3B0aW9ucy5yZW1vdGVzLmZvckVhY2goKHJlbW90ZSk9PntcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlLnNoYXJlU2NvcGUgPT09IHNoYXJlU2NvcGVOYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5pdFJlbW90ZU1vZHVsZShyZW1vdGUubmFtZSkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwcm9taXNlcztcbiAgICB9XG4gICAgLy8gVGhlIGxpYiBmdW5jdGlvbiB3aWxsIG9ubHkgYmUgYXZhaWxhYmxlIGlmIHRoZSBzaGFyZWQgc2V0IGJ5IGVhZ2VyIG9yIHJ1bnRpbWUgaW5pdCBpcyBzZXQgb3IgdGhlIHNoYXJlZCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICAgIC8vIDEuIElmIHRoZSBsb2FkZWQgc2hhcmVkIGFscmVhZHkgZXhpc3RzIGdsb2JhbGx5LCB0aGVuIGl0IHdpbGwgYmUgcmV1c2VkXG4gICAgLy8gMi4gSWYgbGliIGV4aXN0cyBpbiBsb2NhbCBzaGFyZWQsIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgIC8vIDMuIElmIHRoZSBsb2NhbCBnZXQgcmV0dXJucyBzb21ldGhpbmcgb3RoZXIgdGhhbiBQcm9taXNlLCB0aGVuIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgIGxvYWRTaGFyZVN5bmMocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgc2hhcmVPcHRpb25zID0gZ2V0VGFyZ2V0U2hhcmVkT3B0aW9ucyh7XG4gICAgICAgICAgICBwa2dOYW1lLFxuICAgICAgICAgICAgZXh0cmFPcHRpb25zLFxuICAgICAgICAgICAgc2hhcmVJbmZvczogaG9zdC5vcHRpb25zLnNoYXJlZFxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHNoYXJlT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogc2hhcmVPcHRpb25zLnNjb3BlKSB7XG4gICAgICAgICAgICBzaGFyZU9wdGlvbnMuc2NvcGUuZm9yRWFjaCgoc2hhcmVTY29wZSk9PntcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGUsIHtcbiAgICAgICAgICAgICAgICAgICAgc3RyYXRlZ3k6IHNoYXJlT3B0aW9ucy5zdHJhdGVneVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFNoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZSh0aGlzLnNoYXJlU2NvcGVNYXAsIHBrZ05hbWUsIHNoYXJlT3B0aW9ucywgdGhpcy5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgY29uc3QgYWRkVXNlSW4gPSAoc2hhcmVkKT0+e1xuICAgICAgICAgICAgaWYgKCFzaGFyZWQudXNlSW4pIHtcbiAgICAgICAgICAgICAgICBzaGFyZWQudXNlSW4gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFVuaXF1ZUl0ZW0oc2hhcmVkLnVzZUluLCBob3N0Lm9wdGlvbnMubmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZWdpc3RlcmVkU2hhcmVkKSB7XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZ2lzdGVyZWRTaGFyZWQubGliID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgYWRkVXNlSW4ocmVnaXN0ZXJlZFNoYXJlZCk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkU2hhcmVkLmZyb20gPT09IGhvc3Qub3B0aW9ucy5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gcmVnaXN0ZXJlZFNoYXJlZC5saWI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodHlwZW9mIHJlZ2lzdGVyZWRTaGFyZWQuZ2V0ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gcmVnaXN0ZXJlZFNoYXJlZC5nZXQoKTtcbiAgICAgICAgICAgICAgICBpZiAoIShtb2R1bGUgaW5zdGFuY2VvZiBQcm9taXNlKSkge1xuICAgICAgICAgICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgcGtnTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGliOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHJlZ2lzdGVyZWRTaGFyZWRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFyZU9wdGlvbnMubGliKSB7XG4gICAgICAgICAgICBpZiAoIXNoYXJlT3B0aW9ucy5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICBzaGFyZU9wdGlvbnMubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzaGFyZU9wdGlvbnMubGliO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzaGFyZU9wdGlvbnMuZ2V0KSB7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBzaGFyZU9wdGlvbnMuZ2V0KCk7XG4gICAgICAgICAgICBpZiAobW9kdWxlIGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGVycm9yQ29kZSA9IChleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5mcm9tKSA9PT0gJ2J1aWxkJyA/IFJVTlRJTUVfMDA1IDogUlVOVElNRV8wMDY7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGdldFNob3J0RXJyb3JNc2coZXJyb3JDb2RlLCBydW50aW1lRGVzY01hcCwge1xuICAgICAgICAgICAgICAgICAgICBob3N0TmFtZTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZFBrZ05hbWU6IHBrZ05hbWVcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFyZU9wdGlvbnMubGliID0gbW9kdWxlO1xuICAgICAgICAgICAgdGhpcy5zZXRTaGFyZWQoe1xuICAgICAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIGZyb206IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgIGxpYjogc2hhcmVPcHRpb25zLmxpYixcbiAgICAgICAgICAgICAgICBzaGFyZWQ6IHNoYXJlT3B0aW9uc1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gc2hhcmVPcHRpb25zLmxpYjtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwNiwgcnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgIGhvc3ROYW1lOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgIHNoYXJlZFBrZ05hbWU6IHBrZ05hbWVcbiAgICAgICAgfSkpO1xuICAgIH1cbiAgICBpbml0U2hhcmVTY29wZU1hcChzY29wZU5hbWUsIHNoYXJlU2NvcGUsIGV4dHJhT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgdGhpcy5zaGFyZVNjb3BlTWFwW3Njb3BlTmFtZV0gPSBzaGFyZVNjb3BlO1xuICAgICAgICB0aGlzLmhvb2tzLmxpZmVjeWNsZS5pbml0Q29udGFpbmVyU2hhcmVTY29wZU1hcC5lbWl0KHtcbiAgICAgICAgICAgIHNoYXJlU2NvcGUsXG4gICAgICAgICAgICBvcHRpb25zOiBob3N0Lm9wdGlvbnMsXG4gICAgICAgICAgICBvcmlnaW46IGhvc3QsXG4gICAgICAgICAgICBzY29wZU5hbWUsXG4gICAgICAgICAgICBob3N0U2hhcmVTY29wZU1hcDogZXh0cmFPcHRpb25zLmhvc3RTaGFyZVNjb3BlTWFwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzZXRTaGFyZWQoeyBwa2dOYW1lLCBzaGFyZWQsIGZyb20sIGxpYiwgbG9hZGluZywgbG9hZGVkLCBnZXQgfSkge1xuICAgICAgICBjb25zdCB7IHZlcnNpb24sIHNjb3BlID0gJ2RlZmF1bHQnIH0gPSBzaGFyZWQsIHNoYXJlSW5mbyA9IF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKHNoYXJlZCwgW1xuICAgICAgICAgICAgXCJ2ZXJzaW9uXCIsXG4gICAgICAgICAgICBcInNjb3BlXCJcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IHNjb3BlcyA9IEFycmF5LmlzQXJyYXkoc2NvcGUpID8gc2NvcGUgOiBbXG4gICAgICAgICAgICBzY29wZVxuICAgICAgICBdO1xuICAgICAgICBzY29wZXMuZm9yRWFjaCgoc2MpPT57XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hhcmVTY29wZU1hcFtzY10pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlU2NvcGVNYXBbc2NdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW3ZlcnNpb25dID0gX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uLFxuICAgICAgICAgICAgICAgICAgICBzY29wZTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2RlZmF1bHQnXG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9LCBzaGFyZUluZm8sIHtcbiAgICAgICAgICAgICAgICAgICAgbGliLFxuICAgICAgICAgICAgICAgICAgICBsb2FkZWQsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRpbmdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoZ2V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl0uZ2V0ID0gZ2V0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCByZWdpc3RlcmVkU2hhcmVkID0gdGhpcy5zaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXVt2ZXJzaW9uXTtcbiAgICAgICAgICAgIGlmIChsb2FkaW5nICYmICFyZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmcgPSBsb2FkaW5nO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGxvYWRlZCAmJiAhcmVnaXN0ZXJlZFNoYXJlZC5sb2FkZWQpIHtcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCA9IGxvYWRlZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChmcm9tICYmIHJlZ2lzdGVyZWRTaGFyZWQuZnJvbSAhPT0gZnJvbSkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQuZnJvbSA9IGZyb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBfc2V0R2xvYmFsU2hhcmVTY29wZU1hcChob3N0T3B0aW9ucykge1xuICAgICAgICBjb25zdCBnbG9iYWxTaGFyZVNjb3BlTWFwID0gZ2V0R2xvYmFsU2hhcmVTY29wZSgpO1xuICAgICAgICBjb25zdCBpZGVudGlmaWVyID0gaG9zdE9wdGlvbnMuaWQgfHwgaG9zdE9wdGlvbnMubmFtZTtcbiAgICAgICAgaWYgKGlkZW50aWZpZXIgJiYgIWdsb2JhbFNoYXJlU2NvcGVNYXBbaWRlbnRpZmllcl0pIHtcbiAgICAgICAgICAgIGdsb2JhbFNoYXJlU2NvcGVNYXBbaWRlbnRpZmllcl0gPSB0aGlzLnNoYXJlU2NvcGVNYXA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3RydWN0b3IoaG9zdCl7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGFmdGVyUmVzb2x2ZTogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYWZ0ZXJSZXNvbHZlJyksXG4gICAgICAgICAgICBiZWZvcmVMb2FkU2hhcmU6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZUxvYWRTaGFyZScpLFxuICAgICAgICAgICAgLy8gbm90IHVzZWQgeWV0XG4gICAgICAgICAgICBsb2FkU2hhcmU6IG5ldyBBc3luY0hvb2soKSxcbiAgICAgICAgICAgIHJlc29sdmVTaGFyZTogbmV3IFN5bmNXYXRlcmZhbGxIb29rKCdyZXNvbHZlU2hhcmUnKSxcbiAgICAgICAgICAgIC8vIG1heWJlIHdpbGwgY2hhbmdlLCB0ZW1wb3JhcmlseSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGluaXRDb250YWluZXJTaGFyZVNjb3BlTWFwOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2luaXRDb250YWluZXJTaGFyZVNjb3BlTWFwJylcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcCA9IHt9O1xuICAgICAgICB0aGlzLmluaXRUb2tlbnMgPSB7fTtcbiAgICAgICAgdGhpcy5fc2V0R2xvYmFsU2hhcmVTY29wZU1hcChob3N0Lm9wdGlvbnMpO1xuICAgIH1cbn1cblxuY2xhc3MgUmVtb3RlSGFuZGxlciB7XG4gICAgZm9ybWF0QW5kUmVnaXN0ZXJSZW1vdGUoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgdXNlclJlbW90ZXMgPSB1c2VyT3B0aW9ucy5yZW1vdGVzIHx8IFtdO1xuICAgICAgICByZXR1cm4gdXNlclJlbW90ZXMucmVkdWNlKChyZXMsIHJlbW90ZSk9PntcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZW1vdGUocmVtb3RlLCByZXMsIHtcbiAgICAgICAgICAgICAgICBmb3JjZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSwgZ2xvYmFsT3B0aW9ucy5yZW1vdGVzKTtcbiAgICB9XG4gICAgc2V0SWRUb1JlbW90ZU1hcChpZCwgcmVtb3RlTWF0Y2hJbmZvKSB7XG4gICAgICAgIGNvbnN0IHsgcmVtb3RlLCBleHBvc2UgfSA9IHJlbW90ZU1hdGNoSW5mbztcbiAgICAgICAgY29uc3QgeyBuYW1lLCBhbGlhcyB9ID0gcmVtb3RlO1xuICAgICAgICB0aGlzLmlkVG9SZW1vdGVNYXBbaWRdID0ge1xuICAgICAgICAgICAgbmFtZTogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICBleHBvc2VcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGFsaWFzICYmIGlkLnN0YXJ0c1dpdGgobmFtZSkpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkV2l0aEFsaWFzID0gaWQucmVwbGFjZShuYW1lLCBhbGlhcyk7XG4gICAgICAgICAgICB0aGlzLmlkVG9SZW1vdGVNYXBbaWRXaXRoQWxpYXNdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGV4cG9zZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoYWxpYXMgJiYgaWQuc3RhcnRzV2l0aChhbGlhcykpIHtcbiAgICAgICAgICAgIGNvbnN0IGlkV2l0aE5hbWUgPSBpZC5yZXBsYWNlKGFsaWFzLCBuYW1lKTtcbiAgICAgICAgICAgIHRoaXMuaWRUb1JlbW90ZU1hcFtpZFdpdGhOYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBuYW1lOiByZW1vdGUubmFtZSxcbiAgICAgICAgICAgICAgICBleHBvc2VcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG1heC1saW5lcy1wZXItZnVuY3Rpb25cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICAgIGFzeW5jIGxvYWRSZW1vdGUoaWQsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgY29uc3QgeyBsb2FkRmFjdG9yeSA9IHRydWUgfSA9IG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgICAgIGxvYWRGYWN0b3J5OiB0cnVlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgLy8gMS4gVmFsaWRhdGUgdGhlIHBhcmFtZXRlcnMgb2YgdGhlIHJldHJpZXZlZCBtb2R1bGUuIFRoZXJlIGFyZSB0d28gbW9kdWxlIHJlcXVlc3QgbWV0aG9kczogcGtnTmFtZSArIGV4cG9zZSBhbmQgYWxpYXMgKyBleHBvc2UuXG4gICAgICAgICAgICAvLyAyLiBSZXF1ZXN0IHRoZSBzbmFwc2hvdCBpbmZvcm1hdGlvbiBvZiB0aGUgY3VycmVudCBob3N0IGFuZCBnbG9iYWxseSBzdG9yZSB0aGUgb2J0YWluZWQgc25hcHNob3QgaW5mb3JtYXRpb24uIFRoZSByZXRyaWV2ZWQgbW9kdWxlIGluZm9ybWF0aW9uIGlzIHBhcnRpYWxseSBvZmZsaW5lIGFuZCBwYXJ0aWFsbHkgb25saW5lLiBUaGUgb25saW5lIG1vZHVsZSBpbmZvcm1hdGlvbiB3aWxsIHJldHJpZXZlIHRoZSBtb2R1bGVzIHVzZWQgb25saW5lLlxuICAgICAgICAgICAgLy8gMy4gUmV0cmlldmUgdGhlIGRldGFpbGVkIGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IG1vZHVsZSBmcm9tIGdsb2JhbCAocmVtb3RlRW50cnkgYWRkcmVzcywgZXhwb3NlIHJlc291cmNlIGFkZHJlc3MpXG4gICAgICAgICAgICAvLyA0LiBBZnRlciByZXRyaWV2aW5nIHJlbW90ZUVudHJ5LCBjYWxsIHRoZSBpbml0IG9mIHRoZSBtb2R1bGUsIGFuZCB0aGVuIHJldHJpZXZlIHRoZSBleHBvcnRlZCBjb250ZW50IG9mIHRoZSBtb2R1bGUgdGhyb3VnaCBnZXRcbiAgICAgICAgICAgIC8vIGlkOiBwa2dOYW1lKEBmZWRlcmF0aW9uL2FwcDEpICsgZXhwb3NlKGJ1dHRvbikgPSBAZmVkZXJhdGlvbi9hcHAxL2J1dHRvblxuICAgICAgICAgICAgLy8gaWQ6IGFsaWFzKGFwcDEpICsgZXhwb3NlKGJ1dHRvbikgPSBhcHAxL2J1dHRvblxuICAgICAgICAgICAgLy8gaWQ6IGFsaWFzKGFwcDEvdXRpbHMpICsgZXhwb3NlKGxvYWRhc2gvc29ydCkgPSBhcHAxL3V0aWxzL2xvYWRhc2gvc29ydFxuICAgICAgICAgICAgY29uc3QgeyBtb2R1bGUsIG1vZHVsZU9wdGlvbnMsIHJlbW90ZU1hdGNoSW5mbyB9ID0gYXdhaXQgdGhpcy5nZXRSZW1vdGVNb2R1bGVBbmRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICBpZFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCB7IHBrZ05hbWVPckFsaWFzLCByZW1vdGUsIGV4cG9zZSwgaWQ6IGlkUmVzLCByZW1vdGVTbmFwc2hvdCB9ID0gcmVtb3RlTWF0Y2hJbmZvO1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlT3JGYWN0b3J5ID0gYXdhaXQgbW9kdWxlLmdldChpZFJlcywgZXhwb3NlLCBvcHRpb25zLCByZW1vdGVTbmFwc2hvdCk7XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVXcmFwcGVyID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUub25Mb2FkLmVtaXQoe1xuICAgICAgICAgICAgICAgIGlkOiBpZFJlcyxcbiAgICAgICAgICAgICAgICBwa2dOYW1lT3JBbGlhcyxcbiAgICAgICAgICAgICAgICBleHBvc2UsXG4gICAgICAgICAgICAgICAgZXhwb3NlTW9kdWxlOiBsb2FkRmFjdG9yeSA/IG1vZHVsZU9yRmFjdG9yeSA6IHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgICBleHBvc2VNb2R1bGVGYWN0b3J5OiBsb2FkRmFjdG9yeSA/IHVuZGVmaW5lZCA6IG1vZHVsZU9yRmFjdG9yeSxcbiAgICAgICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogbW9kdWxlT3B0aW9ucyxcbiAgICAgICAgICAgICAgICBtb2R1bGVJbnN0YW5jZTogbW9kdWxlLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB0aGlzLnNldElkVG9SZW1vdGVNYXAoaWQsIHJlbW90ZU1hdGNoSW5mbyk7XG4gICAgICAgICAgICBpZiAodHlwZW9mIG1vZHVsZVdyYXBwZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbW9kdWxlV3JhcHBlcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBtb2R1bGVPckZhY3Rvcnk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zdCB7IGZyb20gPSAncnVudGltZScgfSA9IG9wdGlvbnMgfHwge1xuICAgICAgICAgICAgICAgIGZyb206ICdydW50aW1lJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGZhaWxPdmVyID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuZXJyb3JMb2FkUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGZyb20sXG4gICAgICAgICAgICAgICAgbGlmZWN5Y2xlOiAnb25Mb2FkJyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFmYWlsT3Zlcikge1xuICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhaWxPdmVyO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgYXN5bmMgcHJlbG9hZFJlbW90ZShwcmVsb2FkT3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmJlZm9yZVByZWxvYWRSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICBwcmVsb2FkT3BzOiBwcmVsb2FkT3B0aW9ucyxcbiAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcHJlbG9hZE9wcyA9IGZvcm1hdFByZWxvYWRBcmdzKGhvc3Qub3B0aW9ucy5yZW1vdGVzLCBwcmVsb2FkT3B0aW9ucyk7XG4gICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHByZWxvYWRPcHMubWFwKGFzeW5jIChvcHMpPT57XG4gICAgICAgICAgICBjb25zdCB7IHJlbW90ZSB9ID0gb3BzO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IGdldFJlbW90ZUluZm8ocmVtb3RlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgZ2xvYmFsU25hcHNob3QsIHJlbW90ZVNuYXBzaG90IH0gPSBhd2FpdCBob3N0LnNuYXBzaG90SGFuZGxlci5sb2FkUmVtb3RlU25hcHNob3RJbmZvKHtcbiAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiByZW1vdGVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuZ2VuZXJhdGVQcmVsb2FkQXNzZXRzLmVtaXQoe1xuICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgICAgICBwcmVsb2FkT3B0aW9uczogb3BzLFxuICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgICAgICByZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90LFxuICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlbG9hZEFzc2V0cyhyZW1vdGVJbmZvLCBob3N0LCBhc3NldHMpO1xuICAgICAgICB9KSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyUmVtb3RlcyhyZW1vdGVzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgcmVtb3Rlcy5mb3JFYWNoKChyZW1vdGUpPT57XG4gICAgICAgICAgICB0aGlzLnJlZ2lzdGVyUmVtb3RlKHJlbW90ZSwgaG9zdC5vcHRpb25zLnJlbW90ZXMsIHtcbiAgICAgICAgICAgICAgICBmb3JjZTogb3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5mb3JjZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBhc3luYyBnZXRSZW1vdGVNb2R1bGVBbmRPcHRpb25zKG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCB7IGlkIH0gPSBvcHRpb25zO1xuICAgICAgICBsZXQgbG9hZFJlbW90ZUFyZ3M7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBsb2FkUmVtb3RlQXJncyA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmJlZm9yZVJlcXVlc3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgb3B0aW9uczogaG9zdC5vcHRpb25zLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBsb2FkUmVtb3RlQXJncyA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmVycm9yTG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBob3N0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgICAgIGZyb206ICdydW50aW1lJyxcbiAgICAgICAgICAgICAgICBlcnJvcixcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGU6ICdiZWZvcmVSZXF1ZXN0J1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWxvYWRSZW1vdGVBcmdzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBpZDogaWRSZXMgfSA9IGxvYWRSZW1vdGVBcmdzO1xuICAgICAgICBjb25zdCByZW1vdGVTcGxpdEluZm8gPSBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlKGhvc3Qub3B0aW9ucy5yZW1vdGVzLCBpZFJlcyk7XG4gICAgICAgIGFzc2VydChyZW1vdGVTcGxpdEluZm8sIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDQsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICBob3N0TmFtZTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICByZXF1ZXN0SWQ6IGlkUmVzXG4gICAgICAgIH0pKTtcbiAgICAgICAgY29uc3QgeyByZW1vdGU6IHJhd1JlbW90ZSB9ID0gcmVtb3RlU3BsaXRJbmZvO1xuICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gZ2V0UmVtb3RlSW5mbyhyYXdSZW1vdGUpO1xuICAgICAgICBjb25zdCBtYXRjaEluZm8gPSBhd2FpdCBob3N0LnNoYXJlZEhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLmFmdGVyUmVzb2x2ZS5lbWl0KF9leHRlbmRzKHtcbiAgICAgICAgICAgIGlkOiBpZFJlc1xuICAgICAgICB9LCByZW1vdGVTcGxpdEluZm8sIHtcbiAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgIHJlbW90ZUluZm9cbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB7IHJlbW90ZSwgZXhwb3NlIH0gPSBtYXRjaEluZm87XG4gICAgICAgIGFzc2VydChyZW1vdGUgJiYgZXhwb3NlLCBgVGhlICdiZWZvcmVSZXF1ZXN0JyBob29rIHdhcyBleGVjdXRlZCwgYnV0IGl0IGZhaWxlZCB0byByZXR1cm4gdGhlIGNvcnJlY3QgJ3JlbW90ZScgYW5kICdleHBvc2UnIHZhbHVlcyB3aGlsZSBsb2FkaW5nICR7aWRSZXN9LmApO1xuICAgICAgICBsZXQgbW9kdWxlID0gaG9zdC5tb2R1bGVDYWNoZS5nZXQocmVtb3RlLm5hbWUpO1xuICAgICAgICBjb25zdCBtb2R1bGVPcHRpb25zID0ge1xuICAgICAgICAgICAgaG9zdDogaG9zdCxcbiAgICAgICAgICAgIHJlbW90ZUluZm9cbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFtb2R1bGUpIHtcbiAgICAgICAgICAgIG1vZHVsZSA9IG5ldyBNb2R1bGUobW9kdWxlT3B0aW9ucyk7XG4gICAgICAgICAgICBob3N0Lm1vZHVsZUNhY2hlLnNldChyZW1vdGUubmFtZSwgbW9kdWxlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbW9kdWxlLFxuICAgICAgICAgICAgbW9kdWxlT3B0aW9ucyxcbiAgICAgICAgICAgIHJlbW90ZU1hdGNoSW5mbzogbWF0Y2hJbmZvXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJlZ2lzdGVyUmVtb3RlKHJlbW90ZSwgdGFyZ2V0UmVtb3Rlcywgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IG5vcm1hbGl6ZVJlbW90ZSA9ICgpPT57XG4gICAgICAgICAgICBpZiAocmVtb3RlLmFsaWFzKSB7XG4gICAgICAgICAgICAgICAgLy8gVmFsaWRhdGUgaWYgYWxpYXMgZXF1YWxzIHRoZSBwcmVmaXggb2YgcmVtb3RlLm5hbWUgYW5kIHJlbW90ZS5hbGlhcywgaWYgc28sIHRocm93IGFuIGVycm9yXG4gICAgICAgICAgICAgICAgLy8gQXMgbXVsdGktbGV2ZWwgcGF0aCByZWZlcmVuY2VzIGNhbm5vdCBndWFyYW50ZWUgdW5pcXVlIG5hbWVzLCBhbGlhcyBiZWluZyBhIHByZWZpeCBvZiByZW1vdGUubmFtZSBpcyBub3Qgc3VwcG9ydGVkXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZEVxdWFsID0gdGFyZ2V0UmVtb3Rlcy5maW5kKChpdGVtKT0+e1xuICAgICAgICAgICAgICAgICAgICB2YXIgX2l0ZW1fYWxpYXM7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW1vdGUuYWxpYXMgJiYgKGl0ZW0ubmFtZS5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcykgfHwgKChfaXRlbV9hbGlhcyA9IGl0ZW0uYWxpYXMpID09IG51bGwgPyB2b2lkIDAgOiBfaXRlbV9hbGlhcy5zdGFydHNXaXRoKHJlbW90ZS5hbGlhcykpKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBhc3NlcnQoIWZpbmRFcXVhbCwgYFRoZSBhbGlhcyAke3JlbW90ZS5hbGlhc30gb2YgcmVtb3RlICR7cmVtb3RlLm5hbWV9IGlzIG5vdCBhbGxvd2VkIHRvIGJlIHRoZSBwcmVmaXggb2YgJHtmaW5kRXF1YWwgJiYgZmluZEVxdWFsLm5hbWV9IG5hbWUgb3IgYWxpYXNgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIFNldCB0aGUgcmVtb3RlIGVudHJ5IHRvIGEgY29tcGxldGUgcGF0aFxuICAgICAgICAgICAgaWYgKCdlbnRyeScgaW4gcmVtb3RlKSB7XG4gICAgICAgICAgICAgICAgaWYgKGlzQnJvd3NlckVudigpICYmICFyZW1vdGUuZW50cnkuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZS5lbnRyeSA9IG5ldyBVUkwocmVtb3RlLmVudHJ5LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKS5ocmVmO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVtb3RlLnNoYXJlU2NvcGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdGUuc2hhcmVTY29wZSA9IERFRkFVTFRfU0NPUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXJlbW90ZS50eXBlKSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlLnR5cGUgPSBERUZBVUxUX1JFTU9URV9UWVBFO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVSZWdpc3RlclJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFJlbW90ZSA9IHRhcmdldFJlbW90ZXMuZmluZCgoaXRlbSk9Pml0ZW0ubmFtZSA9PT0gcmVtb3RlLm5hbWUpO1xuICAgICAgICBpZiAoIXJlZ2lzdGVyZWRSZW1vdGUpIHtcbiAgICAgICAgICAgIG5vcm1hbGl6ZVJlbW90ZSgpO1xuICAgICAgICAgICAgdGFyZ2V0UmVtb3Rlcy5wdXNoKHJlbW90ZSk7XG4gICAgICAgICAgICB0aGlzLmhvb2tzLmxpZmVjeWNsZS5yZWdpc3RlclJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2VzID0gW1xuICAgICAgICAgICAgICAgIGBUaGUgcmVtb3RlIFwiJHtyZW1vdGUubmFtZX1cIiBpcyBhbHJlYWR5IHJlZ2lzdGVyZWQuYCxcbiAgICAgICAgICAgICAgICAnUGxlYXNlIG5vdGUgdGhhdCBvdmVycmlkaW5nIGl0IG1heSBjYXVzZSB1bmV4cGVjdGVkIGVycm9ycy4nXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMuZm9yY2UpIHtcbiAgICAgICAgICAgICAgICAvLyByZW1vdmUgcmVnaXN0ZXJlZCByZW1vdGVcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZVJlbW90ZShyZWdpc3RlcmVkUmVtb3RlKTtcbiAgICAgICAgICAgICAgICBub3JtYWxpemVSZW1vdGUoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXRSZW1vdGVzLnB1c2gocmVtb3RlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhvb2tzLmxpZmVjeWNsZS5yZWdpc3RlclJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB3YXJuJDEobWVzc2FnZXMuam9pbignICcpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICByZW1vdmVSZW1vdGUocmVtb3RlKSB7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHJlbW90ZTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZUluZGV4ID0gaG9zdC5vcHRpb25zLnJlbW90ZXMuZmluZEluZGV4KChpdGVtKT0+aXRlbS5uYW1lID09PSBuYW1lKTtcbiAgICAgICAgICAgIGlmIChyZW1vdGVJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICBob3N0Lm9wdGlvbnMucmVtb3Rlcy5zcGxpY2UocmVtb3RlSW5kZXgsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9hZGVkTW9kdWxlID0gaG9zdC5tb2R1bGVDYWNoZS5nZXQocmVtb3RlLm5hbWUpO1xuICAgICAgICAgICAgaWYgKGxvYWRlZE1vZHVsZSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSBsb2FkZWRNb2R1bGUucmVtb3RlSW5mbztcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSByZW1vdGVJbmZvLmVudHJ5R2xvYmFsTmFtZTtcbiAgICAgICAgICAgICAgICBpZiAoQ3VycmVudEdsb2JhbFtrZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfT2JqZWN0X2dldE93blByb3BlcnR5RGVzY3JpcHRvcjtcbiAgICAgICAgICAgICAgICAgICAgaWYgKChfT2JqZWN0X2dldE93blByb3BlcnR5RGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoQ3VycmVudEdsb2JhbCwga2V5KSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9PYmplY3RfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yLmNvbmZpZ3VyYWJsZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIEN1cnJlbnRHbG9iYWxba2V5XTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgICAgIEN1cnJlbnRHbG9iYWxba2V5XSA9IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVFbnRyeVVuaXF1ZUtleSA9IGdldFJlbW90ZUVudHJ5VW5pcXVlS2V5KGxvYWRlZE1vZHVsZS5yZW1vdGVJbmZvKTtcbiAgICAgICAgICAgICAgICBpZiAoZ2xvYmFsTG9hZGluZ1tyZW1vdGVFbnRyeVVuaXF1ZUtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbExvYWRpbmdbcmVtb3RlRW50cnlVbmlxdWVLZXldO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0LnNuYXBzaG90SGFuZGxlci5tYW5pZmVzdENhY2hlLmRlbGV0ZShyZW1vdGVJbmZvLmVudHJ5KTtcbiAgICAgICAgICAgICAgICAvLyBkZWxldGUgdW5sb2FkZWQgc2hhcmVkIGFuZCBpbnN0YW5jZVxuICAgICAgICAgICAgICAgIGxldCByZW1vdGVJbnNJZCA9IHJlbW90ZUluZm8uYnVpbGRWZXJzaW9uID8gY29tcG9zZUtleVdpdGhTZXBhcmF0b3IocmVtb3RlSW5mby5uYW1lLCByZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbikgOiByZW1vdGVJbmZvLm5hbWU7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5zSW5kZXggPSBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fSU5TVEFOQ0VTX18uZmluZEluZGV4KChpbnMpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucy5vcHRpb25zLmlkID09PSByZW1vdGVJbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBpbnMubmFtZSA9PT0gcmVtb3RlSW5zSWQ7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocmVtb3RlSW5zSW5kZXggIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZUlucyA9IEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfX1tyZW1vdGVJbnNJbmRleF07XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluc0lkID0gcmVtb3RlSW5zLm9wdGlvbnMuaWQgfHwgcmVtb3RlSW5zSWQ7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdsb2JhbFNoYXJlU2NvcGVNYXAgPSBnZXRHbG9iYWxTaGFyZVNjb3BlKCk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0FsbFNoYXJlZE5vdFVzZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBuZWVkRGVsZXRlS2V5cyA9IFtdO1xuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhnbG9iYWxTaGFyZVNjb3BlTWFwKS5mb3JFYWNoKChpbnN0SWQpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZVNjb3BlTWFwID0gZ2xvYmFsU2hhcmVTY29wZU1hcFtpbnN0SWRdO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZU1hcCAmJiBPYmplY3Qua2V5cyhzaGFyZVNjb3BlTWFwKS5mb3JFYWNoKChzaGFyZVNjb3BlKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlU2NvcGVWYWwgPSBzaGFyZVNjb3BlTWFwW3NoYXJlU2NvcGVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVWYWwgJiYgT2JqZWN0LmtleXMoc2hhcmVTY29wZVZhbCkuZm9yRWFjaCgoc2hhcmVOYW1lKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzaGFyZWRQa2dzID0gc2hhcmVTY29wZVZhbFtzaGFyZU5hbWVdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWRQa2dzICYmIE9iamVjdC5rZXlzKHNoYXJlZFBrZ3MpLmZvckVhY2goKHNoYXJlVmVyc2lvbik9PntcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlZCA9IHNoYXJlZFBrZ3Nbc2hhcmVWZXJzaW9uXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZWQgJiYgdHlwZW9mIHNoYXJlZCA9PT0gJ29iamVjdCcgJiYgc2hhcmVkLmZyb20gPT09IHJlbW90ZUluZm8ubmFtZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzaGFyZWQubG9hZGVkIHx8IHNoYXJlZC5sb2FkaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZC51c2VJbiA9IHNoYXJlZC51c2VJbi5maWx0ZXIoKHVzZWRIb3N0TmFtZSk9PnVzZWRIb3N0TmFtZSAhPT0gcmVtb3RlSW5mby5uYW1lKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlZC51c2VJbi5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlzQWxsU2hhcmVkTm90VXNlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbmVlZERlbGV0ZUtleXMucHVzaChbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkRGVsZXRlS2V5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluc3RJZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVZlcnNpb25cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQWxsU2hhcmVkTm90VXNlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5zLnNoYXJlU2NvcGVNYXAgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBnbG9iYWxTaGFyZVNjb3BlTWFwW3JlbW90ZUluc0lkXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBuZWVkRGVsZXRlS2V5cy5mb3JFYWNoKChbaW5zSWQsIHNoYXJlU2NvcGUsIHNoYXJlTmFtZSwgc2hhcmVWZXJzaW9uXSk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlX3NoYXJlTmFtZSwgX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRfc2hhcmVTY29wZSwgX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAoX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWQgPSBnbG9iYWxTaGFyZVNjb3BlTWFwW2luc0lkXSkgPT0gbnVsbCA/IHRydWUgOiAoX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRfc2hhcmVTY29wZSA9IF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkW3NoYXJlU2NvcGVdKSA9PSBudWxsID8gdHJ1ZSA6IChfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlX3NoYXJlTmFtZSA9IF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGVbc2hhcmVOYW1lXSkgPT0gbnVsbCA/IHRydWUgOiBkZWxldGUgX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRfc2hhcmVTY29wZV9zaGFyZU5hbWVbc2hhcmVWZXJzaW9uXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXy5zcGxpY2UocmVtb3RlSW5zSW5kZXgsIDEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IGhvc3RHbG9iYWxTbmFwc2hvdCB9ID0gZ2V0R2xvYmFsUmVtb3RlSW5mbyhyZW1vdGUsIGhvc3QpO1xuICAgICAgICAgICAgICAgIGlmIChob3N0R2xvYmFsU25hcHNob3QpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlS2V5ID0gaG9zdEdsb2JhbFNuYXBzaG90ICYmICdyZW1vdGVzSW5mbycgaW4gaG9zdEdsb2JhbFNuYXBzaG90ICYmIGhvc3RHbG9iYWxTbmFwc2hvdC5yZW1vdGVzSW5mbyAmJiBnZXRJbmZvV2l0aG91dFR5cGUoaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvLCByZW1vdGUubmFtZSkua2V5O1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVtb3RlS2V5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvW3JlbW90ZUtleV07XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoLy9lc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tZXh0cmEtYm9vbGVhbi1jYXN0XG4gICAgICAgICAgICAgICAgICAgICAgICBCb29sZWFuKEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX01BTklGRVNUX0xPQURJTkdfX1tyZW1vdGVLZXldKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBHbG9iYWwuX19GRURFUkFUSU9OX18uX19NQU5JRkVTVF9MT0FESU5HX19bcmVtb3RlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBob3N0Lm1vZHVsZUNhY2hlLmRlbGV0ZShyZW1vdGUubmFtZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgbG9nZ2VyLmxvZygncmVtb3ZlUmVtb3RlIGZhaWw6ICcsIGVycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3RydWN0b3IoaG9zdCl7XG4gICAgICAgIHRoaXMuaG9va3MgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGJlZm9yZVJlZ2lzdGVyUmVtb3RlOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZVJlZ2lzdGVyUmVtb3RlJyksXG4gICAgICAgICAgICByZWdpc3RlclJlbW90ZTogbmV3IFN5bmNXYXRlcmZhbGxIb29rKCdyZWdpc3RlclJlbW90ZScpLFxuICAgICAgICAgICAgYmVmb3JlUmVxdWVzdDogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlUmVxdWVzdCcpLFxuICAgICAgICAgICAgb25Mb2FkOiBuZXcgQXN5bmNIb29rKCdvbkxvYWQnKSxcbiAgICAgICAgICAgIGhhbmRsZVByZWxvYWRNb2R1bGU6IG5ldyBTeW5jSG9vaygnaGFuZGxlUHJlbG9hZE1vZHVsZScpLFxuICAgICAgICAgICAgZXJyb3JMb2FkUmVtb3RlOiBuZXcgQXN5bmNIb29rKCdlcnJvckxvYWRSZW1vdGUnKSxcbiAgICAgICAgICAgIGJlZm9yZVByZWxvYWRSZW1vdGU6IG5ldyBBc3luY0hvb2soJ2JlZm9yZVByZWxvYWRSZW1vdGUnKSxcbiAgICAgICAgICAgIGdlbmVyYXRlUHJlbG9hZEFzc2V0czogbmV3IEFzeW5jSG9vaygnZ2VuZXJhdGVQcmVsb2FkQXNzZXRzJyksXG4gICAgICAgICAgICAvLyBub3QgdXNlZCB5ZXRcbiAgICAgICAgICAgIGFmdGVyUHJlbG9hZFJlbW90ZTogbmV3IEFzeW5jSG9vaygpLFxuICAgICAgICAgICAgbG9hZEVudHJ5OiBuZXcgQXN5bmNIb29rKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9zdCA9IGhvc3Q7XG4gICAgICAgIHRoaXMuaWRUb1JlbW90ZU1hcCA9IHt9O1xuICAgIH1cbn1cblxuY29uc3QgVVNFX1NOQVBTSE9UID0gdHlwZW9mIEZFREVSQVRJT05fT1BUSU1JWkVfTk9fU05BUFNIT1RfUExVR0lOID09PSAnYm9vbGVhbicgPyAhRkVERVJBVElPTl9PUFRJTUlaRV9OT19TTkFQU0hPVF9QTFVHSU4gOiB0cnVlOyAvLyBEZWZhdWx0IHRvIHRydWUgKHVzZSBzbmFwc2hvdCkgd2hlbiBub3QgZXhwbGljaXRseSBkZWZpbmVkXG5jbGFzcyBNb2R1bGVGZWRlcmF0aW9uIHtcbiAgICBpbml0T3B0aW9ucyh1c2VyT3B0aW9ucykge1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2lucyh1c2VyT3B0aW9ucy5wbHVnaW5zKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHRoaXMuZm9ybWF0T3B0aW9ucyh0aGlzLm9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gb3B0aW9ucztcbiAgICAgICAgcmV0dXJuIG9wdGlvbnM7XG4gICAgfVxuICAgIGFzeW5jIGxvYWRTaGFyZShwa2dOYW1lLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVkSGFuZGxlci5sb2FkU2hhcmUocGtnTmFtZSwgZXh0cmFPcHRpb25zKTtcbiAgICB9XG4gICAgLy8gVGhlIGxpYiBmdW5jdGlvbiB3aWxsIG9ubHkgYmUgYXZhaWxhYmxlIGlmIHRoZSBzaGFyZWQgc2V0IGJ5IGVhZ2VyIG9yIHJ1bnRpbWUgaW5pdCBpcyBzZXQgb3IgdGhlIHNoYXJlZCBpcyBzdWNjZXNzZnVsbHkgbG9hZGVkLlxuICAgIC8vIDEuIElmIHRoZSBsb2FkZWQgc2hhcmVkIGFscmVhZHkgZXhpc3RzIGdsb2JhbGx5LCB0aGVuIGl0IHdpbGwgYmUgcmV1c2VkXG4gICAgLy8gMi4gSWYgbGliIGV4aXN0cyBpbiBsb2NhbCBzaGFyZWQsIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgIC8vIDMuIElmIHRoZSBsb2NhbCBnZXQgcmV0dXJucyBzb21ldGhpbmcgb3RoZXIgdGhhbiBQcm9taXNlLCB0aGVuIGl0IHdpbGwgYmUgdXNlZCBkaXJlY3RseVxuICAgIGxvYWRTaGFyZVN5bmMocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYXJlZEhhbmRsZXIubG9hZFNoYXJlU3luYyhwa2dOYW1lLCBleHRyYU9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0aWFsaXplU2hhcmluZyhzaGFyZVNjb3BlTmFtZSA9IERFRkFVTFRfU0NPUEUsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFyZWRIYW5kbGVyLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGVOYW1lLCBleHRyYU9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0UmF3Q29udGFpbmVyKG5hbWUsIHVybCwgY29udGFpbmVyKSB7XG4gICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSBnZXRSZW1vdGVJbmZvKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbnRyeTogdXJsXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBuZXcgTW9kdWxlKHtcbiAgICAgICAgICAgIGhvc3Q6IHRoaXMsXG4gICAgICAgICAgICByZW1vdGVJbmZvXG4gICAgICAgIH0pO1xuICAgICAgICBtb2R1bGUucmVtb3RlRW50cnlFeHBvcnRzID0gY29udGFpbmVyO1xuICAgICAgICB0aGlzLm1vZHVsZUNhY2hlLnNldChuYW1lLCBtb2R1bGUpO1xuICAgICAgICByZXR1cm4gbW9kdWxlO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgYXN5bmMgbG9hZFJlbW90ZShpZCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVIYW5kbGVyLmxvYWRSZW1vdGUoaWQsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L21lbWJlci1vcmRlcmluZ1xuICAgIGFzeW5jIHByZWxvYWRSZW1vdGUocHJlbG9hZE9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVtb3RlSGFuZGxlci5wcmVsb2FkUmVtb3RlKHByZWxvYWRPcHRpb25zKTtcbiAgICB9XG4gICAgaW5pdFNoYXJlU2NvcGVNYXAoc2NvcGVOYW1lLCBzaGFyZVNjb3BlLCBleHRyYU9wdGlvbnMgPSB7fSkge1xuICAgICAgICB0aGlzLnNoYXJlZEhhbmRsZXIuaW5pdFNoYXJlU2NvcGVNYXAoc2NvcGVOYW1lLCBzaGFyZVNjb3BlLCBleHRyYU9wdGlvbnMpO1xuICAgIH1cbiAgICBmb3JtYXRPcHRpb25zKGdsb2JhbE9wdGlvbnMsIHVzZXJPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgc2hhcmVkIH0gPSBmb3JtYXRTaGFyZUNvbmZpZ3MoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICAgICAgICBjb25zdCB7IHVzZXJPcHRpb25zOiB1c2VyT3B0aW9uc1Jlcywgb3B0aW9uczogZ2xvYmFsT3B0aW9uc1JlcyB9ID0gdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlSW5pdC5lbWl0KHtcbiAgICAgICAgICAgIG9yaWdpbjogdGhpcyxcbiAgICAgICAgICAgIHVzZXJPcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uczogZ2xvYmFsT3B0aW9ucyxcbiAgICAgICAgICAgIHNoYXJlSW5mbzogc2hhcmVkXG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW1vdGVzID0gdGhpcy5yZW1vdGVIYW5kbGVyLmZvcm1hdEFuZFJlZ2lzdGVyUmVtb3RlKGdsb2JhbE9wdGlvbnNSZXMsIHVzZXJPcHRpb25zUmVzKTtcbiAgICAgICAgY29uc3QgeyBzaGFyZWQ6IGhhbmRsZWRTaGFyZWQgfSA9IHRoaXMuc2hhcmVkSGFuZGxlci5yZWdpc3RlclNoYXJlZChnbG9iYWxPcHRpb25zUmVzLCB1c2VyT3B0aW9uc1Jlcyk7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBbXG4gICAgICAgICAgICAuLi5nbG9iYWxPcHRpb25zUmVzLnBsdWdpbnNcbiAgICAgICAgXTtcbiAgICAgICAgaWYgKHVzZXJPcHRpb25zUmVzLnBsdWdpbnMpIHtcbiAgICAgICAgICAgIHVzZXJPcHRpb25zUmVzLnBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKT0+e1xuICAgICAgICAgICAgICAgIGlmICghcGx1Z2lucy5pbmNsdWRlcyhwbHVnaW4pKSB7XG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnMucHVzaChwbHVnaW4pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9wdGlvbnNSZXMgPSBfZXh0ZW5kcyh7fSwgZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMsIHtcbiAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgICByZW1vdGVzLFxuICAgICAgICAgICAgc2hhcmVkOiBoYW5kbGVkU2hhcmVkXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmhvb2tzLmxpZmVjeWNsZS5pbml0LmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luOiB0aGlzLFxuICAgICAgICAgICAgb3B0aW9uczogb3B0aW9uc1Jlc1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIG9wdGlvbnNSZXM7XG4gICAgfVxuICAgIHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zKSB7XG4gICAgICAgIGNvbnN0IHBsdWdpblJlcyA9IHJlZ2lzdGVyUGx1Z2lucyhwbHVnaW5zLCB0aGlzKTtcbiAgICAgICAgLy8gTWVyZ2UgcGx1Z2luXG4gICAgICAgIHRoaXMub3B0aW9ucy5wbHVnaW5zID0gdGhpcy5vcHRpb25zLnBsdWdpbnMucmVkdWNlKChyZXMsIHBsdWdpbik9PntcbiAgICAgICAgICAgIGlmICghcGx1Z2luKSByZXR1cm4gcmVzO1xuICAgICAgICAgICAgaWYgKHJlcyAmJiAhcmVzLmZpbmQoKGl0ZW0pPT5pdGVtLm5hbWUgPT09IHBsdWdpbi5uYW1lKSkge1xuICAgICAgICAgICAgICAgIHJlcy5wdXNoKHBsdWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LCBwbHVnaW5SZXMgfHwgW10pO1xuICAgIH1cbiAgICByZWdpc3RlclJlbW90ZXMocmVtb3Rlcywgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVIYW5kbGVyLnJlZ2lzdGVyUmVtb3RlcyhyZW1vdGVzLCBvcHRpb25zKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJTaGFyZWQoc2hhcmVkKSB7XG4gICAgICAgIHRoaXMuc2hhcmVkSGFuZGxlci5yZWdpc3RlclNoYXJlZCh0aGlzLm9wdGlvbnMsIF9leHRlbmRzKHt9LCB0aGlzLm9wdGlvbnMsIHtcbiAgICAgICAgICAgIHNoYXJlZFxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGNvbnN0cnVjdG9yKHVzZXJPcHRpb25zKXtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYmVmb3JlSW5pdDogbmV3IFN5bmNXYXRlcmZhbGxIb29rKCdiZWZvcmVJbml0JyksXG4gICAgICAgICAgICBpbml0OiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIC8vIG1heWJlIHdpbGwgY2hhbmdlLCB0ZW1wb3JhcmlseSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGJlZm9yZUluaXRDb250YWluZXI6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZUluaXRDb250YWluZXInKSxcbiAgICAgICAgICAgIC8vIG1heWJlIHdpbGwgY2hhbmdlLCB0ZW1wb3JhcmlseSBmb3IgaW50ZXJuYWwgdXNlIG9ubHlcbiAgICAgICAgICAgIGluaXRDb250YWluZXI6IG5ldyBBc3luY1dhdGVyZmFsbEhvb2soJ2luaXRDb250YWluZXInKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52ZXJzaW9uID0gXCIwLjE5LjFcIjtcbiAgICAgICAgdGhpcy5tb2R1bGVDYWNoZSA9IG5ldyBNYXAoKTtcbiAgICAgICAgdGhpcy5sb2FkZXJIb29rID0gbmV3IFBsdWdpblN5c3RlbSh7XG4gICAgICAgICAgICAvLyBGSVhNRTogbWF5IG5vdCBiZSBzdWl0YWJsZSAsIG5vdCBvcGVuIHRvIHRoZSBwdWJsaWMgeWV0XG4gICAgICAgICAgICBnZXRNb2R1bGVJbmZvOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGNyZWF0ZVNjcmlwdDogbmV3IFN5bmNIb29rKCksXG4gICAgICAgICAgICBjcmVhdGVMaW5rOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGZldGNoOiBuZXcgQXN5bmNIb29rKCksXG4gICAgICAgICAgICBsb2FkRW50cnlFcnJvcjogbmV3IEFzeW5jSG9vaygpLFxuICAgICAgICAgICAgZ2V0TW9kdWxlRmFjdG9yeTogbmV3IEFzeW5jSG9vaygpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJyaWRnZUhvb2sgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIGJlZm9yZUJyaWRnZVJlbmRlcjogbmV3IFN5bmNIb29rKCksXG4gICAgICAgICAgICBhZnRlckJyaWRnZVJlbmRlcjogbmV3IFN5bmNIb29rKCksXG4gICAgICAgICAgICBiZWZvcmVCcmlkZ2VEZXN0cm95OiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGFmdGVyQnJpZGdlRGVzdHJveTogbmV3IFN5bmNIb29rKClcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHBsdWdpbnMgPSBVU0VfU05BUFNIT1QgPyBbXG4gICAgICAgICAgICBzbmFwc2hvdFBsdWdpbigpLFxuICAgICAgICAgICAgZ2VuZXJhdGVQcmVsb2FkQXNzZXRzUGx1Z2luKClcbiAgICAgICAgXSA6IFtdO1xuICAgICAgICAvLyBUT0RPOiBWYWxpZGF0ZSB0aGUgZGV0YWlscyBvZiB0aGUgb3B0aW9uc1xuICAgICAgICAvLyBJbml0aWFsaXplIG9wdGlvbnMgd2l0aCBkZWZhdWx0IHZhbHVlc1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIGlkOiBnZXRCdWlsZGVySWQoKSxcbiAgICAgICAgICAgIG5hbWU6IHVzZXJPcHRpb25zLm5hbWUsXG4gICAgICAgICAgICBwbHVnaW5zLFxuICAgICAgICAgICAgcmVtb3RlczogW10sXG4gICAgICAgICAgICBzaGFyZWQ6IHt9LFxuICAgICAgICAgICAgaW5Ccm93c2VyOiBpc0Jyb3dzZXJFbnYoKVxuICAgICAgICB9O1xuICAgICAgICB0aGlzLm5hbWUgPSB1c2VyT3B0aW9ucy5uYW1lO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBkZWZhdWx0T3B0aW9ucztcbiAgICAgICAgdGhpcy5zbmFwc2hvdEhhbmRsZXIgPSBuZXcgU25hcHNob3RIYW5kbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnNoYXJlZEhhbmRsZXIgPSBuZXcgU2hhcmVkSGFuZGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5yZW1vdGVIYW5kbGVyID0gbmV3IFJlbW90ZUhhbmRsZXIodGhpcyk7XG4gICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcCA9IHRoaXMuc2hhcmVkSGFuZGxlci5zaGFyZVNjb3BlTWFwO1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2lucyhbXG4gICAgICAgICAgICAuLi5kZWZhdWx0T3B0aW9ucy5wbHVnaW5zLFxuICAgICAgICAgICAgLi4udXNlck9wdGlvbnMucGx1Z2lucyB8fCBbXVxuICAgICAgICBdKTtcbiAgICAgICAgdGhpcy5vcHRpb25zID0gdGhpcy5mb3JtYXRPcHRpb25zKGRlZmF1bHRPcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gICAgfVxufVxuXG52YXIgaW5kZXggPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsXG59KTtcblxuZXhwb3J0IHsgQ3VycmVudEdsb2JhbCwgR2xvYmFsLCBNb2R1bGUsIE1vZHVsZUZlZGVyYXRpb24sIGFkZEdsb2JhbFNuYXBzaG90LCBhc3NlcnQsIGdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvciwgZ2V0R2xvYmFsU25hcHNob3QsIGdldEluZm9XaXRob3V0VHlwZSwgZ2V0UmVnaXN0ZXJlZFNoYXJlLCBnZXRSZW1vdGVFbnRyeSwgZ2V0UmVtb3RlSW5mbywgaGVscGVycywgaXNTdGF0aWNSZXNvdXJjZXNFcXVhbCwgbWF0Y2hSZW1vdGVXaXRoTmFtZUFuZEV4cG9zZSwgcmVnaXN0ZXJHbG9iYWxQbHVnaW5zLCByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvLCBzYWZlV3JhcHBlciwgc2F0aXNmeSwgc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLCBzZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UsIGluZGV4IGFzIHR5cGVzIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJmdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBfb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZShzb3VyY2UsIGV4Y2x1ZGVkKSB7XG4gICAgaWYgKHNvdXJjZSA9PSBudWxsKSByZXR1cm4ge307XG4gICAgdmFyIHRhcmdldCA9IHt9O1xuICAgIHZhciBzb3VyY2VLZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgICB2YXIga2V5LCBpO1xuICAgIGZvcihpID0gMDsgaSA8IHNvdXJjZUtleXMubGVuZ3RoOyBpKyspe1xuICAgICAgICBrZXkgPSBzb3VyY2VLZXlzW2ldO1xuICAgICAgICBpZiAoZXhjbHVkZWQuaW5kZXhPZihrZXkpID49IDApIGNvbnRpbnVlO1xuICAgICAgICB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgIH1cbiAgICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQgeyBfZXh0ZW5kcyBhcyBfLCBfb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZSBhcyBhIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1wb2x5ZmlsbHMuZXNtLmpzLm1hcFxuIiwiaW1wb3J0IHsgc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLCBNb2R1bGVGZWRlcmF0aW9uLCBnZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IsIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZSwgYXNzZXJ0IH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUtY29yZSc7XG5leHBvcnQgeyBNb2R1bGUsIE1vZHVsZUZlZGVyYXRpb24sIGdldFJlbW90ZUVudHJ5LCBnZXRSZW1vdGVJbmZvLCBsb2FkU2NyaXB0LCBsb2FkU2NyaXB0Tm9kZSwgcmVnaXN0ZXJHbG9iYWxQbHVnaW5zIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUtY29yZSc7XG5pbXBvcnQgeyBnZXRTaG9ydEVycm9yTXNnLCBSVU5USU1FXzAwOSwgcnVudGltZURlc2NNYXAgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vZXJyb3ItY29kZXMnO1xuaW1wb3J0IHsgZyBhcyBnZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UgfSBmcm9tICcuL3V0aWxzLmVzbS5qcyc7XG5cbmZ1bmN0aW9uIGNyZWF0ZUluc3RhbmNlKG9wdGlvbnMpIHtcbiAgICAvLyBSZXRyaWV2ZSBkZWJ1ZyBjb25zdHJ1Y3RvclxuICAgIGNvbnN0IE1vZHVsZUZlZGVyYXRpb25Db25zdHJ1Y3RvciA9IGdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3RvcigpIHx8IE1vZHVsZUZlZGVyYXRpb247XG4gICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgTW9kdWxlRmVkZXJhdGlvbkNvbnN0cnVjdG9yKG9wdGlvbnMpO1xuICAgIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZShpbnN0YW5jZSk7XG4gICAgcmV0dXJuIGluc3RhbmNlO1xufVxubGV0IEZlZGVyYXRpb25JbnN0YW5jZSA9IG51bGw7XG4vKipcbiAqIEBkZXByZWNhdGVkIFVzZSBjcmVhdGVJbnN0YW5jZSBvciBnZXRJbnN0YW5jZSBpbnN0ZWFkXG4gKi8gZnVuY3Rpb24gaW5pdChvcHRpb25zKSB7XG4gICAgLy8gUmV0cmlldmUgdGhlIHNhbWUgaW5zdGFuY2Ugd2l0aCB0aGUgc2FtZSBuYW1lXG4gICAgY29uc3QgaW5zdGFuY2UgPSBnZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2Uob3B0aW9ucy5uYW1lLCBvcHRpb25zLnZlcnNpb24pO1xuICAgIGlmICghaW5zdGFuY2UpIHtcbiAgICAgICAgRmVkZXJhdGlvbkluc3RhbmNlID0gY3JlYXRlSW5zdGFuY2Uob3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBGZWRlcmF0aW9uSW5zdGFuY2U7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgLy8gTWVyZ2Ugb3B0aW9uc1xuICAgICAgICBpbnN0YW5jZS5pbml0T3B0aW9ucyhvcHRpb25zKTtcbiAgICAgICAgaWYgKCFGZWRlcmF0aW9uSW5zdGFuY2UpIHtcbiAgICAgICAgICAgIEZlZGVyYXRpb25JbnN0YW5jZSA9IGluc3RhbmNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBpbnN0YW5jZTtcbiAgICB9XG59XG5mdW5jdGlvbiBsb2FkUmVtb3RlKC4uLmFyZ3MpIHtcbiAgICBhc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCkpO1xuICAgIGNvbnN0IGxvYWRSZW1vdGUxID0gRmVkZXJhdGlvbkluc3RhbmNlLmxvYWRSZW1vdGU7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gbG9hZFJlbW90ZTEuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIGxvYWRTaGFyZSguLi5hcmdzKSB7XG4gICAgYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwOSwgcnVudGltZURlc2NNYXApKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIGNvbnN0IGxvYWRTaGFyZTEgPSBGZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlO1xuICAgIHJldHVybiBsb2FkU2hhcmUxLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiBsb2FkU2hhcmVTeW5jKC4uLmFyZ3MpIHtcbiAgICBhc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCkpO1xuICAgIGNvbnN0IGxvYWRTaGFyZVN5bmMxID0gRmVkZXJhdGlvbkluc3RhbmNlLmxvYWRTaGFyZVN5bmM7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gbG9hZFNoYXJlU3luYzEuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIHByZWxvYWRSZW1vdGUoLi4uYXJncykge1xuICAgIGFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDksIHJ1bnRpbWVEZXNjTWFwKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlLnByZWxvYWRSZW1vdGUuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyUmVtb3RlcyguLi5hcmdzKSB7XG4gICAgYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwOSwgcnVudGltZURlc2NNYXApKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBGZWRlcmF0aW9uSW5zdGFuY2UucmVnaXN0ZXJSZW1vdGVzLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiByZWdpc3RlclBsdWdpbnMoLi4uYXJncykge1xuICAgIGFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDksIHJ1bnRpbWVEZXNjTWFwKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlLnJlZ2lzdGVyUGx1Z2lucy5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gZ2V0SW5zdGFuY2UoKSB7XG4gICAgcmV0dXJuIEZlZGVyYXRpb25JbnN0YW5jZTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyU2hhcmVkKC4uLmFyZ3MpIHtcbiAgICBhc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCkpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgcmV0dXJuIEZlZGVyYXRpb25JbnN0YW5jZS5yZWdpc3RlclNoYXJlZC5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuLy8gSW5qZWN0IGZvciBkZWJ1Z1xuc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKE1vZHVsZUZlZGVyYXRpb24pO1xuXG5leHBvcnQgeyBjcmVhdGVJbnN0YW5jZSwgZ2V0SW5zdGFuY2UsIGluaXQsIGxvYWRSZW1vdGUsIGxvYWRTaGFyZSwgbG9hZFNoYXJlU3luYywgcHJlbG9hZFJlbW90ZSwgcmVnaXN0ZXJQbHVnaW5zLCByZWdpc3RlclJlbW90ZXMsIHJlZ2lzdGVyU2hhcmVkIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBDdXJyZW50R2xvYmFsIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUtY29yZSc7XG5cbi8vIGluamVjdGVkIGJ5IGJ1bmRsZXIsIHNvIGl0IGNhbiBub3QgdXNlIHJ1bnRpbWUtY29yZSBzdHVmZlxuZnVuY3Rpb24gZ2V0QnVpbGRlcklkKCkge1xuICAgIC8vQHRzLWlnbm9yZVxuICAgIHJldHVybiB0eXBlb2YgRkVERVJBVElPTl9CVUlMRF9JREVOVElGSUVSICE9PSAndW5kZWZpbmVkJyA/IEZFREVSQVRJT05fQlVJTERfSURFTlRJRklFUiA6ICcnO1xufVxuZnVuY3Rpb24gZ2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlKG5hbWUsIHZlcnNpb24pIHtcbiAgICBjb25zdCBidWlsZElkID0gZ2V0QnVpbGRlcklkKCk7XG4gICAgcmV0dXJuIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXy5maW5kKChHTUluc3RhbmNlKT0+e1xuICAgICAgICBpZiAoYnVpbGRJZCAmJiBHTUluc3RhbmNlLm9wdGlvbnMuaWQgPT09IGJ1aWxkSWQpIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHTUluc3RhbmNlLm9wdGlvbnMubmFtZSA9PT0gbmFtZSAmJiAhR01JbnN0YW5jZS5vcHRpb25zLnZlcnNpb24gJiYgIXZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmIChHTUluc3RhbmNlLm9wdGlvbnMubmFtZSA9PT0gbmFtZSAmJiB2ZXJzaW9uICYmIEdNSW5zdGFuY2Uub3B0aW9ucy52ZXJzaW9uID09PSB2ZXJzaW9uKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfSk7XG59XG5cbmV4cG9ydCB7IGdldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZSBhcyBnIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD11dGlscy5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBfIGFzIF9leHRlbmRzIH0gZnJvbSAnLi9wb2x5ZmlsbHMuZXNtLmpzJztcblxuY29uc3QgRmVkZXJhdGlvbk1vZHVsZU1hbmlmZXN0ID0gJ2ZlZGVyYXRpb24tbWFuaWZlc3QuanNvbic7XG5jb25zdCBNQU5JRkVTVF9FWFQgPSAnLmpzb24nO1xuY29uc3QgQlJPV1NFUl9MT0dfS0VZID0gJ0ZFREVSQVRJT05fREVCVUcnO1xuY29uc3QgTmFtZVRyYW5zZm9ybVN5bWJvbCA9IHtcbiAgICBBVDogJ0AnLFxuICAgIEhZUEhFTjogJy0nLFxuICAgIFNMQVNIOiAnLydcbn07XG5jb25zdCBOYW1lVHJhbnNmb3JtTWFwID0ge1xuICAgIFtOYW1lVHJhbnNmb3JtU3ltYm9sLkFUXTogJ3Njb3BlXycsXG4gICAgW05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOXTogJ18nLFxuICAgIFtOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIXTogJ19fJ1xufTtcbmNvbnN0IEVuY29kZWROYW1lVHJhbnNmb3JtTWFwID0ge1xuICAgIFtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuQVRdXTogTmFtZVRyYW5zZm9ybVN5bWJvbC5BVCxcbiAgICBbTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTl1dOiBOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTixcbiAgICBbTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIXV06IE5hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hcbn07XG5jb25zdCBTRVBBUkFUT1IgPSAnOic7XG5jb25zdCBNYW5pZmVzdEZpbGVOYW1lID0gJ21mLW1hbmlmZXN0Lmpzb24nO1xuY29uc3QgU3RhdHNGaWxlTmFtZSA9ICdtZi1zdGF0cy5qc29uJztcbmNvbnN0IE1GTW9kdWxlVHlwZSA9IHtcbiAgICBOUE06ICducG0nLFxuICAgIEFQUDogJ2FwcCdcbn07XG5jb25zdCBNT0RVTEVfREVWVE9PTF9JREVOVElGSUVSID0gJ19fTUZfREVWVE9PTFNfTU9EVUxFX0lORk9fXyc7XG5jb25zdCBFTkNPREVfTkFNRV9QUkVGSVggPSAnRU5DT0RFX05BTUVfUFJFRklYJztcbmNvbnN0IFRFTVBfRElSID0gJy5mZWRlcmF0aW9uJztcbmNvbnN0IE1GUHJlZmV0Y2hDb21tb24gPSB7XG4gICAgaWRlbnRpZmllcjogJ01GRGF0YVByZWZldGNoJyxcbiAgICBnbG9iYWxLZXk6ICdfX1BSRUZFVENIX18nLFxuICAgIGxpYnJhcnk6ICdtZi1kYXRhLXByZWZldGNoJyxcbiAgICBleHBvcnRzS2V5OiAnX19QUkVGRVRDSF9FWFBPUlRTX18nLFxuICAgIGZpbGVOYW1lOiAnYm9vdHN0cmFwLmpzJ1xufTtcblxudmFyIENvbnRhaW5lclBsdWdpbiA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xuXG52YXIgQ29udGFpbmVyUmVmZXJlbmNlUGx1Z2luID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5cbnZhciBNb2R1bGVGZWRlcmF0aW9uUGx1Z2luID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5cbnZhciBTaGFyZVBsdWdpbiA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xuXG5mdW5jdGlvbiBpc0Jyb3dzZXJFbnYoKSB7XG4gICAgcmV0dXJuIHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHR5cGVvZiB3aW5kb3cuZG9jdW1lbnQgIT09ICd1bmRlZmluZWQnO1xufVxuZnVuY3Rpb24gaXNSZWFjdE5hdGl2ZUVudigpIHtcbiAgICB2YXIgX25hdmlnYXRvcjtcbiAgICByZXR1cm4gdHlwZW9mIG5hdmlnYXRvciAhPT0gJ3VuZGVmaW5lZCcgJiYgKChfbmF2aWdhdG9yID0gbmF2aWdhdG9yKSA9PSBudWxsID8gdm9pZCAwIDogX25hdmlnYXRvci5wcm9kdWN0KSA9PT0gJ1JlYWN0TmF0aXZlJztcbn1cbmZ1bmN0aW9uIGlzQnJvd3NlckRlYnVnKCkge1xuICAgIHRyeSB7XG4gICAgICAgIGlmIChpc0Jyb3dzZXJFbnYoKSAmJiB3aW5kb3cubG9jYWxTdG9yYWdlKSB7XG4gICAgICAgICAgICByZXR1cm4gQm9vbGVhbihsb2NhbFN0b3JhZ2UuZ2V0SXRlbShCUk9XU0VSX0xPR19LRVkpKTtcbiAgICAgICAgfVxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgcmV0dXJuIGZhbHNlO1xufVxuZnVuY3Rpb24gaXNEZWJ1Z01vZGUoKSB7XG4gICAgaWYgKHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiAmJiBwcm9jZXNzLmVudlsnRkVERVJBVElPTl9ERUJVRyddKSB7XG4gICAgICAgIHJldHVybiBCb29sZWFuKHByb2Nlc3MuZW52WydGRURFUkFUSU9OX0RFQlVHJ10pO1xuICAgIH1cbiAgICBpZiAodHlwZW9mIEZFREVSQVRJT05fREVCVUcgIT09ICd1bmRlZmluZWQnICYmIEJvb2xlYW4oRkVERVJBVElPTl9ERUJVRykpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHJldHVybiBpc0Jyb3dzZXJEZWJ1ZygpO1xufVxuY29uc3QgZ2V0UHJvY2Vzc0VudiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB0eXBlb2YgcHJvY2VzcyAhPT0gJ3VuZGVmaW5lZCcgJiYgcHJvY2Vzcy5lbnYgPyBwcm9jZXNzLmVudiA6IHt9O1xufTtcblxuY29uc3QgTE9HX0NBVEVHT1JZID0gJ1sgRmVkZXJhdGlvbiBSdW50aW1lIF0nO1xuLy8gZW50cnk6IG5hbWU6dmVyc2lvbiAgIHZlcnNpb24gOiAxLjAuMCB8IF4xLjIuM1xuLy8gZW50cnk6IG5hbWU6ZW50cnkgIGVudHJ5OiAgaHR0cHM6Ly9sb2NhbGhvc3Q6OTAwMC9mZWRlcmF0aW9uLW1hbmlmZXN0Lmpzb25cbmNvbnN0IHBhcnNlRW50cnkgPSAoc3RyLCBkZXZWZXJPclVybCwgc2VwYXJhdG9yID0gU0VQQVJBVE9SKT0+e1xuICAgIGNvbnN0IHN0clNwbGl0ID0gc3RyLnNwbGl0KHNlcGFyYXRvcik7XG4gICAgY29uc3QgZGV2VmVyc2lvbk9yVXJsID0gZ2V0UHJvY2Vzc0VudigpWydOT0RFX0VOViddID09PSAnZGV2ZWxvcG1lbnQnICYmIGRldlZlck9yVXJsO1xuICAgIGNvbnN0IGRlZmF1bHRWZXJzaW9uID0gJyonO1xuICAgIGNvbnN0IGlzRW50cnkgPSAocyk9PnMuc3RhcnRzV2l0aCgnaHR0cCcpIHx8IHMuaW5jbHVkZXMoTUFOSUZFU1RfRVhUKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgc3RyaW5nIHN0YXJ0cyB3aXRoIGEgdHlwZVxuICAgIGlmIChzdHJTcGxpdC5sZW5ndGggPj0gMikge1xuICAgICAgICBsZXQgW25hbWUsIC4uLnZlcnNpb25PckVudHJ5QXJyXSA9IHN0clNwbGl0O1xuICAgICAgICAvLyBAbmFtZUBtYW5pZmVzdC11cmwuanNvblxuICAgICAgICBpZiAoc3RyLnN0YXJ0c1dpdGgoc2VwYXJhdG9yKSkge1xuICAgICAgICAgICAgbmFtZSA9IHN0clNwbGl0LnNsaWNlKDAsIDIpLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgICAgIHZlcnNpb25PckVudHJ5QXJyID0gW1xuICAgICAgICAgICAgICAgIGRldlZlcnNpb25PclVybCB8fCBzdHJTcGxpdC5zbGljZSgyKS5qb2luKHNlcGFyYXRvcilcbiAgICAgICAgICAgIF07XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHZlcnNpb25PckVudHJ5ID0gZGV2VmVyc2lvbk9yVXJsIHx8IHZlcnNpb25PckVudHJ5QXJyLmpvaW4oc2VwYXJhdG9yKTtcbiAgICAgICAgaWYgKGlzRW50cnkodmVyc2lvbk9yRW50cnkpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgZW50cnk6IHZlcnNpb25PckVudHJ5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8gQXBwbHkgdmVyc2lvbiBydWxlXG4gICAgICAgICAgICAvLyBkZXZWZXJzaW9uT3JVcmwgPT4gaW5wdXRWZXJzaW9uID0+IGRlZmF1bHRWZXJzaW9uXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdmVyc2lvbk9yRW50cnkgfHwgZGVmYXVsdFZlcnNpb25cbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICB9IGVsc2UgaWYgKHN0clNwbGl0Lmxlbmd0aCA9PT0gMSkge1xuICAgICAgICBjb25zdCBbbmFtZV0gPSBzdHJTcGxpdDtcbiAgICAgICAgaWYgKGRldlZlcnNpb25PclVybCAmJiBpc0VudHJ5KGRldlZlcnNpb25PclVybCkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbnRyeTogZGV2VmVyc2lvbk9yVXJsXG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgdmVyc2lvbjogZGV2VmVyc2lvbk9yVXJsIHx8IGRlZmF1bHRWZXJzaW9uXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgYEludmFsaWQgZW50cnkgdmFsdWU6ICR7c3RyfWA7XG4gICAgfVxufTtcbmNvbnN0IGNvbXBvc2VLZXlXaXRoU2VwYXJhdG9yID0gZnVuY3Rpb24oLi4uYXJncykge1xuICAgIGlmICghYXJncy5sZW5ndGgpIHtcbiAgICAgICAgcmV0dXJuICcnO1xuICAgIH1cbiAgICByZXR1cm4gYXJncy5yZWR1Y2UoKHN1bSwgY3VyKT0+e1xuICAgICAgICBpZiAoIWN1cikge1xuICAgICAgICAgICAgcmV0dXJuIHN1bTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXN1bSkge1xuICAgICAgICAgICAgcmV0dXJuIGN1cjtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7c3VtfSR7U0VQQVJBVE9SfSR7Y3VyfWA7XG4gICAgfSwgJycpO1xufTtcbmNvbnN0IGVuY29kZU5hbWUgPSBmdW5jdGlvbihuYW1lLCBwcmVmaXggPSAnJywgd2l0aEV4dCA9IGZhbHNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgZXh0ID0gd2l0aEV4dCA/ICcuanMnIDogJyc7XG4gICAgICAgIHJldHVybiBgJHtwcmVmaXh9JHtuYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtOYW1lVHJhbnNmb3JtU3ltYm9sLkFUfWAsICdnJyksIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF0pLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTn1gLCAnZycpLCBOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOXSkucmVwbGFjZShuZXcgUmVnRXhwKGAke05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0h9YCwgJ2cnKSwgTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIXSl9JHtleHR9YDtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn07XG5jb25zdCBkZWNvZGVOYW1lID0gZnVuY3Rpb24obmFtZSwgcHJlZml4LCB3aXRoRXh0KSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbGV0IGRlY29kZWROYW1lID0gbmFtZTtcbiAgICAgICAgaWYgKHByZWZpeCkge1xuICAgICAgICAgICAgaWYgKCFkZWNvZGVkTmFtZS5zdGFydHNXaXRoKHByZWZpeCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVjb2RlZE5hbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkZWNvZGVkTmFtZSA9IGRlY29kZWROYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChwcmVmaXgsICdnJyksICcnKTtcbiAgICAgICAgfVxuICAgICAgICBkZWNvZGVkTmFtZSA9IGRlY29kZWROYW1lLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuQVRdfWAsICdnJyksIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF1dKS5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7TmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLlNMQVNIXX1gLCAnZycpLCBFbmNvZGVkTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdXSkucmVwbGFjZShuZXcgUmVnRXhwKGAke05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU5dfWAsICdnJyksIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU5dXSk7XG4gICAgICAgIGlmICh3aXRoRXh0KSB7XG4gICAgICAgICAgICBkZWNvZGVkTmFtZSA9IGRlY29kZWROYW1lLnJlcGxhY2UoJy5qcycsICcnKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVjb2RlZE5hbWU7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG59O1xuY29uc3QgZ2VuZXJhdGVFeHBvc2VGaWxlbmFtZSA9IChleHBvc2VOYW1lLCB3aXRoRXh0KT0+e1xuICAgIGlmICghZXhwb3NlTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIGxldCBleHBvc2UgPSBleHBvc2VOYW1lO1xuICAgIGlmIChleHBvc2UgPT09ICcuJykge1xuICAgICAgICBleHBvc2UgPSAnZGVmYXVsdF9leHBvcnQnO1xuICAgIH1cbiAgICBpZiAoZXhwb3NlLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgZXhwb3NlID0gZXhwb3NlLnJlcGxhY2UoJy4vJywgJycpO1xuICAgIH1cbiAgICByZXR1cm4gZW5jb2RlTmFtZShleHBvc2UsICdfX2ZlZGVyYXRpb25fZXhwb3NlXycsIHdpdGhFeHQpO1xufTtcbmNvbnN0IGdlbmVyYXRlU2hhcmVGaWxlbmFtZSA9IChwa2dOYW1lLCB3aXRoRXh0KT0+e1xuICAgIGlmICghcGtnTmFtZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVOYW1lKHBrZ05hbWUsICdfX2ZlZGVyYXRpb25fc2hhcmVkXycsIHdpdGhFeHQpO1xufTtcbmNvbnN0IGdldFJlc291cmNlVXJsID0gKG1vZHVsZSwgc291cmNlVXJsKT0+e1xuICAgIGlmICgnZ2V0UHVibGljUGF0aCcgaW4gbW9kdWxlKSB7XG4gICAgICAgIGxldCBwdWJsaWNQYXRoO1xuICAgICAgICBpZiAoIW1vZHVsZS5nZXRQdWJsaWNQYXRoLnN0YXJ0c1dpdGgoJ2Z1bmN0aW9uJykpIHtcbiAgICAgICAgICAgIHB1YmxpY1BhdGggPSBuZXcgRnVuY3Rpb24obW9kdWxlLmdldFB1YmxpY1BhdGgpKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBwdWJsaWNQYXRoID0gbmV3IEZ1bmN0aW9uKCdyZXR1cm4gJyArIG1vZHVsZS5nZXRQdWJsaWNQYXRoKSgpKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke3B1YmxpY1BhdGh9JHtzb3VyY2VVcmx9YDtcbiAgICB9IGVsc2UgaWYgKCdwdWJsaWNQYXRoJyBpbiBtb2R1bGUpIHtcbiAgICAgICAgaWYgKCFpc0Jyb3dzZXJFbnYoKSAmJiAhaXNSZWFjdE5hdGl2ZUVudigpICYmICdzc3JQdWJsaWNQYXRoJyBpbiBtb2R1bGUpIHtcbiAgICAgICAgICAgIHJldHVybiBgJHttb2R1bGUuc3NyUHVibGljUGF0aH0ke3NvdXJjZVVybH1gO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHttb2R1bGUucHVibGljUGF0aH0ke3NvdXJjZVVybH1gO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIGNvbnNvbGUud2FybignQ2Fubm90IGdldCByZXNvdXJjZSBVUkwuIElmIGluIGRlYnVnIG1vZGUsIHBsZWFzZSBpZ25vcmUuJywgbW9kdWxlLCBzb3VyY2VVcmwpO1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufTtcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5jb25zdCBhc3NlcnQgPSAoY29uZGl0aW9uLCBtc2cpPT57XG4gICAgaWYgKCFjb25kaXRpb24pIHtcbiAgICAgICAgZXJyb3IobXNnKTtcbiAgICB9XG59O1xuY29uc3QgZXJyb3IgPSAobXNnKT0+e1xuICAgIHRocm93IG5ldyBFcnJvcihgJHtMT0dfQ0FURUdPUll9OiAke21zZ31gKTtcbn07XG5jb25zdCB3YXJuID0gKG1zZyk9PntcbiAgICBjb25zb2xlLndhcm4oYCR7TE9HX0NBVEVHT1JZfTogJHttc2d9YCk7XG59O1xuZnVuY3Rpb24gc2FmZVRvU3RyaW5nKGluZm8pIHtcbiAgICB0cnkge1xuICAgICAgICByZXR1cm4gSlNPTi5zdHJpbmdpZnkoaW5mbywgbnVsbCwgMik7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxufVxuLy8gUmVnRXhwIGZvciB2ZXJzaW9uIHN0cmluZ1xuY29uc3QgVkVSU0lPTl9QQVRURVJOX1JFR0VYUCA9IC9eKFtcXGRePXY8Pn5dfFsqeFhdJCkvO1xuZnVuY3Rpb24gaXNSZXF1aXJlZFZlcnNpb24oc3RyKSB7XG4gICAgcmV0dXJuIFZFUlNJT05fUEFUVEVSTl9SRUdFWFAudGVzdChzdHIpO1xufVxuXG5jb25zdCBzaW1wbGVKb2luUmVtb3RlRW50cnkgPSAoclBhdGgsIHJOYW1lKT0+e1xuICAgIGlmICghclBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHJOYW1lO1xuICAgIH1cbiAgICBjb25zdCB0cmFuc2Zvcm1QYXRoID0gKHN0cik9PntcbiAgICAgICAgaWYgKHN0ciA9PT0gJy4nKSB7XG4gICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5zdGFydHNXaXRoKCcuLycpKSB7XG4gICAgICAgICAgICByZXR1cm4gc3RyLnJlcGxhY2UoJy4vJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChzdHIuc3RhcnRzV2l0aCgnLycpKSB7XG4gICAgICAgICAgICBjb25zdCBzdHJXaXRob3V0U2xhc2ggPSBzdHIuc2xpY2UoMSk7XG4gICAgICAgICAgICBpZiAoc3RyV2l0aG91dFNsYXNoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gc3RyV2l0aG91dFNsYXNoLnNsaWNlKDAsIC0xKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBzdHJXaXRob3V0U2xhc2g7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHN0cjtcbiAgICB9O1xuICAgIGNvbnN0IHRyYW5zZm9ybWVkUGF0aCA9IHRyYW5zZm9ybVBhdGgoclBhdGgpO1xuICAgIGlmICghdHJhbnNmb3JtZWRQYXRoKSB7XG4gICAgICAgIHJldHVybiByTmFtZTtcbiAgICB9XG4gICAgaWYgKHRyYW5zZm9ybWVkUGF0aC5lbmRzV2l0aCgnLycpKSB7XG4gICAgICAgIHJldHVybiBgJHt0cmFuc2Zvcm1lZFBhdGh9JHtyTmFtZX1gO1xuICAgIH1cbiAgICByZXR1cm4gYCR7dHJhbnNmb3JtZWRQYXRofS8ke3JOYW1lfWA7XG59O1xuZnVuY3Rpb24gaW5mZXJBdXRvUHVibGljUGF0aCh1cmwpIHtcbiAgICByZXR1cm4gdXJsLnJlcGxhY2UoLyMuKiQvLCAnJykucmVwbGFjZSgvXFw/LiokLywgJycpLnJlcGxhY2UoL1xcL1teXFwvXSskLywgJy8nKTtcbn1cbi8vIFByaW9yaXR5OiBvdmVycmlkZXMgPiByZW1vdGVzXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gZ2VuZXJhdGVTbmFwc2hvdEZyb21NYW5pZmVzdChtYW5pZmVzdCwgb3B0aW9ucyA9IHt9KSB7XG4gICAgdmFyIF9tYW5pZmVzdF9tZXRhRGF0YSwgX21hbmlmZXN0X21ldGFEYXRhMTtcbiAgICBjb25zdCB7IHJlbW90ZXMgPSB7fSwgb3ZlcnJpZGVzID0ge30sIHZlcnNpb24gfSA9IG9wdGlvbnM7XG4gICAgbGV0IHJlbW90ZVNuYXBzaG90O1xuICAgIGNvbnN0IGdldFB1YmxpY1BhdGggPSAoKT0+e1xuICAgICAgICBpZiAoJ3B1YmxpY1BhdGgnIGluIG1hbmlmZXN0Lm1ldGFEYXRhKSB7XG4gICAgICAgICAgICBpZiAobWFuaWZlc3QubWV0YURhdGEucHVibGljUGF0aCA9PT0gJ2F1dG8nICYmIHZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAvLyB1c2Ugc2FtZSBpbXBsZW1lbnRhdGlvbiBhcyBwdWJsaWNQYXRoIGF1dG8gcnVudGltZSBtb2R1bGUgaW1wbGVtZW50c1xuICAgICAgICAgICAgICAgIHJldHVybiBpbmZlckF1dG9QdWJsaWNQYXRoKHZlcnNpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1hbmlmZXN0Lm1ldGFEYXRhLnB1YmxpY1BhdGg7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gbWFuaWZlc3QubWV0YURhdGEuZ2V0UHVibGljUGF0aDtcbiAgICAgICAgfVxuICAgIH07XG4gICAgY29uc3Qgb3ZlcnJpZGVzS2V5cyA9IE9iamVjdC5rZXlzKG92ZXJyaWRlcyk7XG4gICAgbGV0IHJlbW90ZXNJbmZvID0ge307XG4gICAgLy8gSWYgcmVtb3RlcyBhcmUgbm90IHByb3ZpZGVkLCBvbmx5IHRoZSByZW1vdGVzIGluIHRoZSBtYW5pZmVzdCB3aWxsIGJlIHJlYWRcbiAgICBpZiAoIU9iamVjdC5rZXlzKHJlbW90ZXMpLmxlbmd0aCkge1xuICAgICAgICB2YXIgX21hbmlmZXN0X3JlbW90ZXM7XG4gICAgICAgIHJlbW90ZXNJbmZvID0gKChfbWFuaWZlc3RfcmVtb3RlcyA9IG1hbmlmZXN0LnJlbW90ZXMpID09IG51bGwgPyB2b2lkIDAgOiBfbWFuaWZlc3RfcmVtb3Rlcy5yZWR1Y2UoKHJlcywgbmV4dCk9PntcbiAgICAgICAgICAgIGxldCBtYXRjaGVkVmVyc2lvbjtcbiAgICAgICAgICAgIGNvbnN0IG5hbWUgPSBuZXh0LmZlZGVyYXRpb25Db250YWluZXJOYW1lO1xuICAgICAgICAgICAgLy8gb3ZlcnJpZGVzIGhhdmUgaGlnaGVyIHByaW9yaXR5XG4gICAgICAgICAgICBpZiAob3ZlcnJpZGVzS2V5cy5pbmNsdWRlcyhuYW1lKSkge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRWZXJzaW9uID0gb3ZlcnJpZGVzW25hbWVdO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3ZlcnNpb24nIGluIG5leHQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb24gPSBuZXh0LnZlcnNpb247XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb24gPSBuZXh0LmVudHJ5O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJlc1tuYW1lXSA9IHtcbiAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sIHt9KSkgfHwge307XG4gICAgfVxuICAgIC8vIElmIHJlbW90ZXMgKGRlcGxveSBzY2VuYXJpbykgYXJlIHNwZWNpZmllZCwgdGhleSBuZWVkIHRvIGJlIHRyYXZlcnNlZCBhZ2FpblxuICAgIE9iamVjdC5rZXlzKHJlbW90ZXMpLmZvckVhY2goKGtleSk9PnJlbW90ZXNJbmZvW2tleV0gPSB7XG4gICAgICAgICAgICAvLyBvdmVycmlkZXMgd2lsbCBvdmVycmlkZSBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgIG1hdGNoZWRWZXJzaW9uOiBvdmVycmlkZXNLZXlzLmluY2x1ZGVzKGtleSkgPyBvdmVycmlkZXNba2V5XSA6IHJlbW90ZXNba2V5XVxuICAgICAgICB9KTtcbiAgICBjb25zdCB7IHJlbW90ZUVudHJ5OiB7IHBhdGg6IHJlbW90ZUVudHJ5UGF0aCwgbmFtZTogcmVtb3RlRW50cnlOYW1lLCB0eXBlOiByZW1vdGVFbnRyeVR5cGUgfSwgdHlwZXM6IHJlbW90ZVR5cGVzLCBidWlsZEluZm86IHsgYnVpbGRWZXJzaW9uIH0sIGdsb2JhbE5hbWUsIHNzclJlbW90ZUVudHJ5IH0gPSBtYW5pZmVzdC5tZXRhRGF0YTtcbiAgICBjb25zdCB7IGV4cG9zZXMgfSA9IG1hbmlmZXN0O1xuICAgIGxldCBiYXNpY1JlbW90ZVNuYXBzaG90ID0ge1xuICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uID8gdmVyc2lvbiA6ICcnLFxuICAgICAgICBidWlsZFZlcnNpb24sXG4gICAgICAgIGdsb2JhbE5hbWUsXG4gICAgICAgIHJlbW90ZUVudHJ5OiBzaW1wbGVKb2luUmVtb3RlRW50cnkocmVtb3RlRW50cnlQYXRoLCByZW1vdGVFbnRyeU5hbWUpLFxuICAgICAgICByZW1vdGVFbnRyeVR5cGUsXG4gICAgICAgIHJlbW90ZVR5cGVzOiBzaW1wbGVKb2luUmVtb3RlRW50cnkocmVtb3RlVHlwZXMucGF0aCwgcmVtb3RlVHlwZXMubmFtZSksXG4gICAgICAgIHJlbW90ZVR5cGVzWmlwOiByZW1vdGVUeXBlcy56aXAgfHwgJycsXG4gICAgICAgIHJlbW90ZVR5cGVzQVBJOiByZW1vdGVUeXBlcy5hcGkgfHwgJycsXG4gICAgICAgIHJlbW90ZXNJbmZvLFxuICAgICAgICBzaGFyZWQ6IG1hbmlmZXN0ID09IG51bGwgPyB2b2lkIDAgOiBtYW5pZmVzdC5zaGFyZWQubWFwKChpdGVtKT0+KHtcbiAgICAgICAgICAgICAgICBhc3NldHM6IGl0ZW0uYXNzZXRzLFxuICAgICAgICAgICAgICAgIHNoYXJlZE5hbWU6IGl0ZW0ubmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiBpdGVtLnZlcnNpb25cbiAgICAgICAgICAgIH0pKSxcbiAgICAgICAgbW9kdWxlczogZXhwb3NlcyA9PSBudWxsID8gdm9pZCAwIDogZXhwb3Nlcy5tYXAoKGV4cG9zZSk9Pih7XG4gICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogZXhwb3NlLm5hbWUsXG4gICAgICAgICAgICAgICAgbW9kdWxlUGF0aDogZXhwb3NlLnBhdGgsXG4gICAgICAgICAgICAgICAgYXNzZXRzOiBleHBvc2UuYXNzZXRzXG4gICAgICAgICAgICB9KSlcbiAgICB9O1xuICAgIGlmICgoX21hbmlmZXN0X21ldGFEYXRhID0gbWFuaWZlc3QubWV0YURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfbWFuaWZlc3RfbWV0YURhdGEucHJlZmV0Y2hJbnRlcmZhY2UpIHtcbiAgICAgICAgY29uc3QgcHJlZmV0Y2hJbnRlcmZhY2UgPSBtYW5pZmVzdC5tZXRhRGF0YS5wcmVmZXRjaEludGVyZmFjZTtcbiAgICAgICAgYmFzaWNSZW1vdGVTbmFwc2hvdCA9IF9leHRlbmRzKHt9LCBiYXNpY1JlbW90ZVNuYXBzaG90LCB7XG4gICAgICAgICAgICBwcmVmZXRjaEludGVyZmFjZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaWYgKChfbWFuaWZlc3RfbWV0YURhdGExID0gbWFuaWZlc3QubWV0YURhdGEpID09IG51bGwgPyB2b2lkIDAgOiBfbWFuaWZlc3RfbWV0YURhdGExLnByZWZldGNoRW50cnkpIHtcbiAgICAgICAgY29uc3QgeyBwYXRoLCBuYW1lLCB0eXBlIH0gPSBtYW5pZmVzdC5tZXRhRGF0YS5wcmVmZXRjaEVudHJ5O1xuICAgICAgICBiYXNpY1JlbW90ZVNuYXBzaG90ID0gX2V4dGVuZHMoe30sIGJhc2ljUmVtb3RlU25hcHNob3QsIHtcbiAgICAgICAgICAgIHByZWZldGNoRW50cnk6IHNpbXBsZUpvaW5SZW1vdGVFbnRyeShwYXRoLCBuYW1lKSxcbiAgICAgICAgICAgIHByZWZldGNoRW50cnlUeXBlOiB0eXBlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoJ3B1YmxpY1BhdGgnIGluIG1hbmlmZXN0Lm1ldGFEYXRhKSB7XG4gICAgICAgIHJlbW90ZVNuYXBzaG90ID0gX2V4dGVuZHMoe30sIGJhc2ljUmVtb3RlU25hcHNob3QsIHtcbiAgICAgICAgICAgIHB1YmxpY1BhdGg6IGdldFB1YmxpY1BhdGgoKSxcbiAgICAgICAgICAgIHNzclB1YmxpY1BhdGg6IG1hbmlmZXN0Lm1ldGFEYXRhLnNzclB1YmxpY1BhdGhcbiAgICAgICAgfSk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmVtb3RlU25hcHNob3QgPSBfZXh0ZW5kcyh7fSwgYmFzaWNSZW1vdGVTbmFwc2hvdCwge1xuICAgICAgICAgICAgZ2V0UHVibGljUGF0aDogZ2V0UHVibGljUGF0aCgpXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoc3NyUmVtb3RlRW50cnkpIHtcbiAgICAgICAgY29uc3QgZnVsbFNTUlJlbW90ZUVudHJ5ID0gc2ltcGxlSm9pblJlbW90ZUVudHJ5KHNzclJlbW90ZUVudHJ5LnBhdGgsIHNzclJlbW90ZUVudHJ5Lm5hbWUpO1xuICAgICAgICByZW1vdGVTbmFwc2hvdC5zc3JSZW1vdGVFbnRyeSA9IGZ1bGxTU1JSZW1vdGVFbnRyeTtcbiAgICAgICAgcmVtb3RlU25hcHNob3Quc3NyUmVtb3RlRW50cnlUeXBlID0gc3NyUmVtb3RlRW50cnkudHlwZSB8fCAnY29tbW9uanMtbW9kdWxlJztcbiAgICB9XG4gICAgcmV0dXJuIHJlbW90ZVNuYXBzaG90O1xufVxuZnVuY3Rpb24gaXNNYW5pZmVzdFByb3ZpZGVyKG1vZHVsZUluZm8pIHtcbiAgICBpZiAoJ3JlbW90ZUVudHJ5JyBpbiBtb2R1bGVJbmZvICYmIG1vZHVsZUluZm8ucmVtb3RlRW50cnkuaW5jbHVkZXMoTUFOSUZFU1RfRVhUKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG5jb25zdCBQUkVGSVggPSAnWyBNb2R1bGUgRmVkZXJhdGlvbiBdJztcbmxldCBMb2dnZXIgPSBjbGFzcyBMb2dnZXIge1xuICAgIHNldFByZWZpeChwcmVmaXgpIHtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxuICAgIGxvZyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgd2FybiguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgZXJyb3IoLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHN1Y2Nlc3MoLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeCwgLi4uYXJncyk7XG4gICAgfVxuICAgIGluZm8oLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeCwgLi4uYXJncyk7XG4gICAgfVxuICAgIHJlYWR5KC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmaXgsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICBkZWJ1ZyguLi5hcmdzKSB7XG4gICAgICAgIGlmIChpc0RlYnVnTW9kZSgpKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeCwgLi4uYXJncyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3RydWN0b3IocHJlZml4KXtcbiAgICAgICAgdGhpcy5wcmVmaXggPSBwcmVmaXg7XG4gICAgfVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUxvZ2dlcihwcmVmaXgpIHtcbiAgICByZXR1cm4gbmV3IExvZ2dlcihwcmVmaXgpO1xufVxuY29uc3QgbG9nZ2VyID0gY3JlYXRlTG9nZ2VyKFBSRUZJWCk7XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG5hc3luYyBmdW5jdGlvbiBzYWZlV3JhcHBlcihjYWxsYmFjaywgZGlzYWJsZVdhcm4pIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBjYWxsYmFjaygpO1xuICAgICAgICByZXR1cm4gcmVzO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgIWRpc2FibGVXYXJuICYmIHdhcm4oZSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG59XG5mdW5jdGlvbiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKHVybDEsIHVybDIpIHtcbiAgICBjb25zdCBSRUdfRVhQID0gL14oaHR0cHM/Oik/XFwvXFwvL2k7XG4gICAgLy8gVHJhbnNmb3JtIHVybDEgYW5kIHVybDIgaW50byByZWxhdGl2ZSBwYXRoc1xuICAgIGNvbnN0IHJlbGF0aXZlVXJsMSA9IHVybDEucmVwbGFjZShSRUdfRVhQLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICBjb25zdCByZWxhdGl2ZVVybDIgPSB1cmwyLnJlcGxhY2UoUkVHX0VYUCwgJycpLnJlcGxhY2UoL1xcLyQvLCAnJyk7XG4gICAgLy8gQ2hlY2sgaWYgdGhlIHJlbGF0aXZlIHBhdGhzIGFyZSBpZGVudGljYWxcbiAgICByZXR1cm4gcmVsYXRpdmVVcmwxID09PSByZWxhdGl2ZVVybDI7XG59XG5mdW5jdGlvbiBjcmVhdGVTY3JpcHQoaW5mbykge1xuICAgIC8vIFJldHJpZXZlIHRoZSBleGlzdGluZyBzY3JpcHQgZWxlbWVudCBieSBpdHMgc3JjIGF0dHJpYnV0ZVxuICAgIGxldCBzY3JpcHQgPSBudWxsO1xuICAgIGxldCBuZWVkQXR0YWNoID0gdHJ1ZTtcbiAgICBsZXQgdGltZW91dCA9IDIwMDAwO1xuICAgIGxldCB0aW1lb3V0SWQ7XG4gICAgY29uc3Qgc2NyaXB0cyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdzY3JpcHQnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGNvbnN0IHMgPSBzY3JpcHRzW2ldO1xuICAgICAgICBjb25zdCBzY3JpcHRTcmMgPSBzLmdldEF0dHJpYnV0ZSgnc3JjJyk7XG4gICAgICAgIGlmIChzY3JpcHRTcmMgJiYgaXNTdGF0aWNSZXNvdXJjZXNFcXVhbChzY3JpcHRTcmMsIGluZm8udXJsKSkge1xuICAgICAgICAgICAgc2NyaXB0ID0gcztcbiAgICAgICAgICAgIG5lZWRBdHRhY2ggPSBmYWxzZTtcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxuICAgIGlmICghc2NyaXB0KSB7XG4gICAgICAgIGNvbnN0IGF0dHJzID0gaW5mby5hdHRycztcbiAgICAgICAgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gKGF0dHJzID09IG51bGwgPyB2b2lkIDAgOiBhdHRyc1sndHlwZSddKSA9PT0gJ21vZHVsZScgPyAnbW9kdWxlJyA6ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBsZXQgY3JlYXRlU2NyaXB0UmVzID0gdW5kZWZpbmVkO1xuICAgICAgICBpZiAoaW5mby5jcmVhdGVTY3JpcHRIb29rKSB7XG4gICAgICAgICAgICBjcmVhdGVTY3JpcHRSZXMgPSBpbmZvLmNyZWF0ZVNjcmlwdEhvb2soaW5mby51cmwsIGluZm8uYXR0cnMpO1xuICAgICAgICAgICAgaWYgKGNyZWF0ZVNjcmlwdFJlcyBpbnN0YW5jZW9mIEhUTUxTY3JpcHRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgc2NyaXB0ID0gY3JlYXRlU2NyaXB0UmVzO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh0eXBlb2YgY3JlYXRlU2NyaXB0UmVzID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgIGlmICgnc2NyaXB0JyBpbiBjcmVhdGVTY3JpcHRSZXMgJiYgY3JlYXRlU2NyaXB0UmVzLnNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHRSZXMuc2NyaXB0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoJ3RpbWVvdXQnIGluIGNyZWF0ZVNjcmlwdFJlcyAmJiBjcmVhdGVTY3JpcHRSZXMudGltZW91dCkge1xuICAgICAgICAgICAgICAgICAgICB0aW1lb3V0ID0gY3JlYXRlU2NyaXB0UmVzLnRpbWVvdXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICghc2NyaXB0LnNyYykge1xuICAgICAgICAgICAgc2NyaXB0LnNyYyA9IGluZm8udXJsO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhdHRycyAmJiAhY3JlYXRlU2NyaXB0UmVzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgobmFtZSk9PntcbiAgICAgICAgICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChuYW1lID09PSAnYXN5bmMnIHx8IG5hbWUgPT09ICdkZWZlcicpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdFtuYW1lXSA9IGF0dHJzW25hbWVdO1xuICAgICAgICAgICAgICAgICAgICAvLyBBdHRyaWJ1dGVzIHRoYXQgZG8gbm90IGV4aXN0IGFyZSBjb25zaWRlcmVkIG92ZXJyaWRkZW5cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmICghc2NyaXB0LmdldEF0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0LnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvblNjcmlwdENvbXBsZXRlID0gYXN5bmMgKHByZXYsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgZXZlbnQpPT57XG4gICAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0SWQpO1xuICAgICAgICBjb25zdCBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgaWYgKChldmVudCA9PSBudWxsID8gdm9pZCAwIDogZXZlbnQudHlwZSkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5vbkVycm9yQ2FsbGJhY2spICYmIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLm9uRXJyb3JDYWxsYmFjayhldmVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5jYikgJiYgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8uY2IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzIGluIElFLlxuICAgICAgICBpZiAoc2NyaXB0KSB7XG4gICAgICAgICAgICBzY3JpcHQub25lcnJvciA9IG51bGw7XG4gICAgICAgICAgICBzY3JpcHQub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNhZmVXcmFwcGVyKCgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgeyBuZWVkRGVsZXRlU2NyaXB0ID0gdHJ1ZSB9ID0gaW5mbztcbiAgICAgICAgICAgICAgICBpZiAobmVlZERlbGV0ZVNjcmlwdCkge1xuICAgICAgICAgICAgICAgICAgICAoc2NyaXB0ID09IG51bGwgPyB2b2lkIDAgOiBzY3JpcHQucGFyZW50Tm9kZSkgJiYgc2NyaXB0LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcmV2ICYmIHR5cGVvZiBwcmV2ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcHJldihldmVudCk7XG4gICAgICAgICAgICAgICAgaWYgKHJlc3VsdCBpbnN0YW5jZW9mIFByb21pc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gYXdhaXQgcmVzdWx0O1xuICAgICAgICAgICAgICAgICAgICBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgb25TY3JpcHRDb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9O1xuICAgIHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcbiAgICBzY3JpcHQub25sb2FkID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmxvYWQpO1xuICAgIHRpbWVvdXRJZCA9IHNldFRpbWVvdXQoKCk9PntcbiAgICAgICAgb25TY3JpcHRDb21wbGV0ZShudWxsLCBuZXcgRXJyb3IoYFJlbW90ZSBzY3JpcHQgXCIke2luZm8udXJsfVwiIHRpbWUtb3V0ZWQuYCkpO1xuICAgIH0sIHRpbWVvdXQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIHNjcmlwdCxcbiAgICAgICAgbmVlZEF0dGFjaFxuICAgIH07XG59XG5mdW5jdGlvbiBjcmVhdGVMaW5rKGluZm8pIHtcbiAgICAvLyA8bGluayByZWw9XCJwcmVsb2FkXCIgaHJlZj1cInNjcmlwdC5qc1wiIGFzPVwic2NyaXB0XCI+XG4gICAgLy8gUmV0cmlldmUgdGhlIGV4aXN0aW5nIHNjcmlwdCBlbGVtZW50IGJ5IGl0cyBzcmMgYXR0cmlidXRlXG4gICAgbGV0IGxpbmsgPSBudWxsO1xuICAgIGxldCBuZWVkQXR0YWNoID0gdHJ1ZTtcbiAgICBjb25zdCBsaW5rcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdsaW5rJyk7XG4gICAgZm9yKGxldCBpID0gMDsgaSA8IGxpbmtzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgbCA9IGxpbmtzW2ldO1xuICAgICAgICBjb25zdCBsaW5rSHJlZiA9IGwuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgICAgIGNvbnN0IGxpbmtSZWwgPSBsLmdldEF0dHJpYnV0ZSgncmVsJyk7XG4gICAgICAgIGlmIChsaW5rSHJlZiAmJiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKGxpbmtIcmVmLCBpbmZvLnVybCkgJiYgbGlua1JlbCA9PT0gaW5mby5hdHRyc1sncmVsJ10pIHtcbiAgICAgICAgICAgIGxpbmsgPSBsO1xuICAgICAgICAgICAgbmVlZEF0dGFjaCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsaW5rKSB7XG4gICAgICAgIGxpbmsgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaW5rJyk7XG4gICAgICAgIGxpbmsuc2V0QXR0cmlidXRlKCdocmVmJywgaW5mby51cmwpO1xuICAgICAgICBsZXQgY3JlYXRlTGlua1JlcyA9IHVuZGVmaW5lZDtcbiAgICAgICAgY29uc3QgYXR0cnMgPSBpbmZvLmF0dHJzO1xuICAgICAgICBpZiAoaW5mby5jcmVhdGVMaW5rSG9vaykge1xuICAgICAgICAgICAgY3JlYXRlTGlua1JlcyA9IGluZm8uY3JlYXRlTGlua0hvb2soaW5mby51cmwsIGF0dHJzKTtcbiAgICAgICAgICAgIGlmIChjcmVhdGVMaW5rUmVzIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgbGluayA9IGNyZWF0ZUxpbmtSZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJzICYmICFjcmVhdGVMaW5rUmVzKSB7XG4gICAgICAgICAgICBPYmplY3Qua2V5cyhhdHRycykuZm9yRWFjaCgobmFtZSk9PntcbiAgICAgICAgICAgICAgICBpZiAobGluayAmJiAhbGluay5nZXRBdHRyaWJ1dGUobmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUobmFtZSwgYXR0cnNbbmFtZV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uTGlua0NvbXBsZXRlID0gKHByZXYsIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tZXhwbGljaXQtYW55XG4gICAgZXZlbnQpPT57XG4gICAgICAgIGNvbnN0IG9uTGlua0NvbXBsZXRlQ2FsbGJhY2sgPSAoKT0+e1xuICAgICAgICAgICAgaWYgKChldmVudCA9PSBudWxsID8gdm9pZCAwIDogZXZlbnQudHlwZSkgPT09ICdlcnJvcicpIHtcbiAgICAgICAgICAgICAgICAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5vbkVycm9yQ2FsbGJhY2spICYmIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLm9uRXJyb3JDYWxsYmFjayhldmVudCkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5jYikgJiYgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8uY2IoKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIC8vIFByZXZlbnQgbWVtb3J5IGxlYWtzIGluIElFLlxuICAgICAgICBpZiAobGluaykge1xuICAgICAgICAgICAgbGluay5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIGxpbmsub25sb2FkID0gbnVsbDtcbiAgICAgICAgICAgIHNhZmVXcmFwcGVyKCgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgeyBuZWVkRGVsZXRlTGluayA9IHRydWUgfSA9IGluZm87XG4gICAgICAgICAgICAgICAgaWYgKG5lZWREZWxldGVMaW5rKSB7XG4gICAgICAgICAgICAgICAgICAgIChsaW5rID09IG51bGwgPyB2b2lkIDAgOiBsaW5rLnBhcmVudE5vZGUpICYmIGxpbmsucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwcmV2KSB7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBwcmV2KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBvbkxpbmtDb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBvbkxpbmtDb21wbGV0ZUNhbGxiYWNrKCk7XG4gICAgfTtcbiAgICBsaW5rLm9uZXJyb3IgPSBvbkxpbmtDb21wbGV0ZS5iaW5kKG51bGwsIGxpbmsub25lcnJvcik7XG4gICAgbGluay5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZS5iaW5kKG51bGwsIGxpbmsub25sb2FkKTtcbiAgICByZXR1cm4ge1xuICAgICAgICBsaW5rLFxuICAgICAgICBuZWVkQXR0YWNoXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGxvYWRTY3JpcHQodXJsLCBpbmZvKSB7XG4gICAgY29uc3QgeyBhdHRycyA9IHt9LCBjcmVhdGVTY3JpcHRIb29rIH0gPSBpbmZvO1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBjb25zdCB7IHNjcmlwdCwgbmVlZEF0dGFjaCB9ID0gY3JlYXRlU2NyaXB0KHtcbiAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgIGNiOiByZXNvbHZlLFxuICAgICAgICAgICAgb25FcnJvckNhbGxiYWNrOiByZWplY3QsXG4gICAgICAgICAgICBhdHRyczogX2V4dGVuZHMoe1xuICAgICAgICAgICAgICAgIGZldGNocHJpb3JpdHk6ICdoaWdoJ1xuICAgICAgICAgICAgfSwgYXR0cnMpLFxuICAgICAgICAgICAgY3JlYXRlU2NyaXB0SG9vayxcbiAgICAgICAgICAgIG5lZWREZWxldGVTY3JpcHQ6IHRydWVcbiAgICAgICAgfSk7XG4gICAgICAgIG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgIH0pO1xufVxuXG5jb25zdCBzZGtJbXBvcnRDYWNoZSA9IG5ldyBNYXAoKTtcbmZ1bmN0aW9uIGltcG9ydE5vZGVNb2R1bGUobmFtZSkge1xuICAgIGlmICghbmFtZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ2ltcG9ydCBzcGVjaWZpZXIgaXMgcmVxdWlyZWQnKTtcbiAgICB9XG4gICAgLy8gQ2hlY2sgY2FjaGUgdG8gcHJldmVudCBpbmZpbml0ZSByZWN1cnNpb25cbiAgICBpZiAoc2RrSW1wb3J0Q2FjaGUuaGFzKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBzZGtJbXBvcnRDYWNoZS5nZXQobmFtZSk7XG4gICAgfVxuICAgIGNvbnN0IGltcG9ydE1vZHVsZSA9IG5ldyBGdW5jdGlvbignbmFtZScsIGByZXR1cm4gaW1wb3J0KG5hbWUpYCk7XG4gICAgY29uc3QgcHJvbWlzZSA9IGltcG9ydE1vZHVsZShuYW1lKS50aGVuKChyZXMpPT5yZXMpLmNhdGNoKChlcnJvcik9PntcbiAgICAgICAgY29uc29sZS5lcnJvcihgRXJyb3IgaW1wb3J0aW5nIG1vZHVsZSAke25hbWV9OmAsIGVycm9yKTtcbiAgICAgICAgLy8gUmVtb3ZlIGZyb20gY2FjaGUgb24gZXJyb3Igc28gaXQgY2FuIGJlIHJldHJpZWRcbiAgICAgICAgc2RrSW1wb3J0Q2FjaGUuZGVsZXRlKG5hbWUpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9KTtcbiAgICAvLyBDYWNoZSB0aGUgcHJvbWlzZSB0byBwcmV2ZW50IHJlY3Vyc2l2ZSBjYWxsc1xuICAgIHNka0ltcG9ydENhY2hlLnNldChuYW1lLCBwcm9taXNlKTtcbiAgICByZXR1cm4gcHJvbWlzZTtcbn1cbmNvbnN0IGxvYWROb2RlRmV0Y2ggPSBhc3luYyAoKT0+e1xuICAgIGNvbnN0IGZldGNoTW9kdWxlID0gYXdhaXQgaW1wb3J0Tm9kZU1vZHVsZSgnbm9kZS1mZXRjaCcpO1xuICAgIHJldHVybiBmZXRjaE1vZHVsZS5kZWZhdWx0IHx8IGZldGNoTW9kdWxlO1xufTtcbmNvbnN0IGxhenlMb2FkZXJIb29rRmV0Y2ggPSBhc3luYyAoaW5wdXQsIGluaXQsIGxvYWRlckhvb2spPT57XG4gICAgY29uc3QgaG9vayA9ICh1cmwsIGluaXQpPT57XG4gICAgICAgIHJldHVybiBsb2FkZXJIb29rLmxpZmVjeWNsZS5mZXRjaC5lbWl0KHVybCwgaW5pdCk7XG4gICAgfTtcbiAgICBjb25zdCByZXMgPSBhd2FpdCBob29rKGlucHV0LCBpbml0IHx8IHt9KTtcbiAgICBpZiAoIXJlcyB8fCAhKHJlcyBpbnN0YW5jZW9mIFJlc3BvbnNlKSkge1xuICAgICAgICBjb25zdCBmZXRjaEZ1bmN0aW9uID0gdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJyA/IGF3YWl0IGxvYWROb2RlRmV0Y2goKSA6IGZldGNoO1xuICAgICAgICByZXR1cm4gZmV0Y2hGdW5jdGlvbihpbnB1dCwgaW5pdCB8fCB7fSk7XG4gICAgfVxuICAgIHJldHVybiByZXM7XG59O1xuY29uc3QgY3JlYXRlU2NyaXB0Tm9kZSA9IHR5cGVvZiBFTlZfVEFSR0VUID09PSAndW5kZWZpbmVkJyB8fCBFTlZfVEFSR0VUICE9PSAnd2ViJyA/ICh1cmwsIGNiLCBhdHRycywgbG9hZGVySG9vayk9PntcbiAgICBpZiAobG9hZGVySG9vayA9PSBudWxsID8gdm9pZCAwIDogbG9hZGVySG9vay5jcmVhdGVTY3JpcHRIb29rKSB7XG4gICAgICAgIGNvbnN0IGhvb2tSZXN1bHQgPSBsb2FkZXJIb29rLmNyZWF0ZVNjcmlwdEhvb2sodXJsKTtcbiAgICAgICAgaWYgKGhvb2tSZXN1bHQgJiYgdHlwZW9mIGhvb2tSZXN1bHQgPT09ICdvYmplY3QnICYmICd1cmwnIGluIGhvb2tSZXN1bHQpIHtcbiAgICAgICAgICAgIHVybCA9IGhvb2tSZXN1bHQudXJsO1xuICAgICAgICB9XG4gICAgfVxuICAgIGxldCB1cmxPYmo7XG4gICAgdHJ5IHtcbiAgICAgICAgdXJsT2JqID0gbmV3IFVSTCh1cmwpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgY29uc3RydWN0aW5nIFVSTDonLCBlKTtcbiAgICAgICAgY2IobmV3IEVycm9yKGBJbnZhbGlkIFVSTDogJHtlfWApKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBnZXRGZXRjaCA9IGFzeW5jICgpPT57XG4gICAgICAgIGlmIChsb2FkZXJIb29rID09IG51bGwgPyB2b2lkIDAgOiBsb2FkZXJIb29rLmZldGNoKSB7XG4gICAgICAgICAgICByZXR1cm4gKGlucHV0LCBpbml0KT0+bGF6eUxvYWRlckhvb2tGZXRjaChpbnB1dCwgaW5pdCwgbG9hZGVySG9vayk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHR5cGVvZiBmZXRjaCA9PT0gJ3VuZGVmaW5lZCcgPyBsb2FkTm9kZUZldGNoKCkgOiBmZXRjaDtcbiAgICB9O1xuICAgIGNvbnN0IGhhbmRsZVNjcmlwdEZldGNoID0gYXN5bmMgKGYsIHVybE9iaik9PntcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHZhciAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgIF92bV9jb25zdGFudHM7XG4gICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmKHVybE9iai5ocmVmKTtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMudGV4dCgpO1xuICAgICAgICAgICAgY29uc3QgW3BhdGgsIHZtXSA9IGF3YWl0IFByb21pc2UuYWxsKFtcbiAgICAgICAgICAgICAgICBpbXBvcnROb2RlTW9kdWxlKCdwYXRoJyksXG4gICAgICAgICAgICAgICAgaW1wb3J0Tm9kZU1vZHVsZSgndm0nKVxuICAgICAgICAgICAgXSk7XG4gICAgICAgICAgICBjb25zdCBzY3JpcHRDb250ZXh0ID0ge1xuICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9LFxuICAgICAgICAgICAgICAgIG1vZHVsZToge1xuICAgICAgICAgICAgICAgICAgICBleHBvcnRzOiB7fVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB1cmxEaXJuYW1lID0gdXJsT2JqLnBhdGhuYW1lLnNwbGl0KCcvJykuc2xpY2UoMCwgLTEpLmpvaW4oJy8nKTtcbiAgICAgICAgICAgIGNvbnN0IGZpbGVuYW1lID0gcGF0aC5iYXNlbmFtZSh1cmxPYmoucGF0aG5hbWUpO1xuICAgICAgICAgICAgdmFyIF92bV9jb25zdGFudHNfVVNFX01BSU5fQ09OVEVYVF9ERUZBVUxUX0xPQURFUjtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdCA9IG5ldyB2bS5TY3JpcHQoYChmdW5jdGlvbihleHBvcnRzLCBtb2R1bGUsIHJlcXVpcmUsIF9fZGlybmFtZSwgX19maWxlbmFtZSkgeyR7ZGF0YX1cXG59KWAsIHtcbiAgICAgICAgICAgICAgICBmaWxlbmFtZSxcbiAgICAgICAgICAgICAgICBpbXBvcnRNb2R1bGVEeW5hbWljYWxseTogKF92bV9jb25zdGFudHNfVVNFX01BSU5fQ09OVEVYVF9ERUZBVUxUX0xPQURFUiA9IChfdm1fY29uc3RhbnRzID0gdm0uY29uc3RhbnRzKSA9PSBudWxsID8gdm9pZCAwIDogX3ZtX2NvbnN0YW50cy5VU0VfTUFJTl9DT05URVhUX0RFRkFVTFRfTE9BREVSKSAhPSBudWxsID8gX3ZtX2NvbnN0YW50c19VU0VfTUFJTl9DT05URVhUX0RFRkFVTFRfTE9BREVSIDogaW1wb3J0Tm9kZU1vZHVsZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzY3JpcHQucnVuSW5UaGlzQ29udGV4dCgpKHNjcmlwdENvbnRleHQuZXhwb3J0cywgc2NyaXB0Q29udGV4dC5tb2R1bGUsIGV2YWwoJ3JlcXVpcmUnKSwgdXJsRGlybmFtZSwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgY29uc3QgZXhwb3J0ZWRJbnRlcmZhY2UgPSBzY3JpcHRDb250ZXh0Lm1vZHVsZS5leHBvcnRzIHx8IHNjcmlwdENvbnRleHQuZXhwb3J0cztcbiAgICAgICAgICAgIGlmIChhdHRycyAmJiBleHBvcnRlZEludGVyZmFjZSAmJiBhdHRyc1snZ2xvYmFsTmFtZSddKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVyID0gZXhwb3J0ZWRJbnRlcmZhY2VbYXR0cnNbJ2dsb2JhbE5hbWUnXV0gfHwgZXhwb3J0ZWRJbnRlcmZhY2U7XG4gICAgICAgICAgICAgICAgY2IodW5kZWZpbmVkLCBjb250YWluZXIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNiKHVuZGVmaW5lZCwgZXhwb3J0ZWRJbnRlcmZhY2UpO1xuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICBjYihlIGluc3RhbmNlb2YgRXJyb3IgPyBlIDogbmV3IEVycm9yKGBTY3JpcHQgZXhlY3V0aW9uIGVycm9yOiAke2V9YCkpO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBnZXRGZXRjaCgpLnRoZW4oYXN5bmMgKGYpPT57XG4gICAgICAgIGlmICgoYXR0cnMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0dHJzWyd0eXBlJ10pID09PSAnZXNtJyB8fCAoYXR0cnMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0dHJzWyd0eXBlJ10pID09PSAnbW9kdWxlJykge1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRNb2R1bGUodXJsT2JqLmhyZWYsIHtcbiAgICAgICAgICAgICAgICBmZXRjaDogZixcbiAgICAgICAgICAgICAgICB2bTogYXdhaXQgaW1wb3J0Tm9kZU1vZHVsZSgndm0nKVxuICAgICAgICAgICAgfSkudGhlbihhc3luYyAobW9kdWxlKT0+e1xuICAgICAgICAgICAgICAgIGF3YWl0IG1vZHVsZS5ldmFsdWF0ZSgpO1xuICAgICAgICAgICAgICAgIGNiKHVuZGVmaW5lZCwgbW9kdWxlLm5hbWVzcGFjZSk7XG4gICAgICAgICAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgICAgICAgICBjYihlIGluc3RhbmNlb2YgRXJyb3IgPyBlIDogbmV3IEVycm9yKGBTY3JpcHQgZXhlY3V0aW9uIGVycm9yOiAke2V9YCkpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaGFuZGxlU2NyaXB0RmV0Y2goZiwgdXJsT2JqKTtcbiAgICB9KS5jYXRjaCgoZXJyKT0+e1xuICAgICAgICBjYihlcnIpO1xuICAgIH0pO1xufSA6ICh1cmwsIGNiLCBhdHRycywgbG9hZGVySG9vayk9PntcbiAgICBjYihuZXcgRXJyb3IoJ2NyZWF0ZVNjcmlwdE5vZGUgaXMgZGlzYWJsZWQgaW4gbm9uLU5vZGUuanMgZW52aXJvbm1lbnQnKSk7XG59O1xuY29uc3QgbG9hZFNjcmlwdE5vZGUgPSB0eXBlb2YgRU5WX1RBUkdFVCA9PT0gJ3VuZGVmaW5lZCcgfHwgRU5WX1RBUkdFVCAhPT0gJ3dlYicgPyAodXJsLCBpbmZvKT0+e1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KT0+e1xuICAgICAgICBjcmVhdGVTY3JpcHROb2RlKHVybCwgKGVycm9yLCBzY3JpcHRDb250ZXh0KT0+e1xuICAgICAgICAgICAgaWYgKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KGVycm9yKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgdmFyIF9pbmZvX2F0dHJzLCBfaW5mb19hdHRyczE7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlRW50cnlLZXkgPSAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogKF9pbmZvX2F0dHJzID0gaW5mby5hdHRycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9pbmZvX2F0dHJzWydnbG9iYWxOYW1lJ10pIHx8IGBfX0ZFREVSQVRJT05fJHtpbmZvID09IG51bGwgPyB2b2lkIDAgOiAoX2luZm9fYXR0cnMxID0gaW5mby5hdHRycykgPT0gbnVsbCA/IHZvaWQgMCA6IF9pbmZvX2F0dHJzMVsnbmFtZSddfTpjdXN0b21fX2A7XG4gICAgICAgICAgICAgICAgY29uc3QgZW50cnlFeHBvcnRzID0gZ2xvYmFsVGhpc1tyZW1vdGVFbnRyeUtleV0gPSBzY3JpcHRDb250ZXh0O1xuICAgICAgICAgICAgICAgIHJlc29sdmUoZW50cnlFeHBvcnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgaW5mby5hdHRycywgaW5mby5sb2FkZXJIb29rKTtcbiAgICB9KTtcbn0gOiAodXJsLCBpbmZvKT0+e1xuICAgIHRocm93IG5ldyBFcnJvcignbG9hZFNjcmlwdE5vZGUgaXMgZGlzYWJsZWQgaW4gbm9uLU5vZGUuanMgZW52aXJvbm1lbnQnKTtcbn07XG5jb25zdCBlc21Nb2R1bGVDYWNoZSA9IG5ldyBNYXAoKTtcbmFzeW5jIGZ1bmN0aW9uIGxvYWRNb2R1bGUodXJsLCBvcHRpb25zKSB7XG4gICAgLy8gQ2hlY2sgY2FjaGUgdG8gcHJldmVudCBpbmZpbml0ZSByZWN1cnNpb24gaW4gRVNNIGxvYWRpbmdcbiAgICBpZiAoZXNtTW9kdWxlQ2FjaGUuaGFzKHVybCkpIHtcbiAgICAgICAgcmV0dXJuIGVzbU1vZHVsZUNhY2hlLmdldCh1cmwpO1xuICAgIH1cbiAgICBjb25zdCB7IGZldGNoOiBmZXRjaDEsIHZtIH0gPSBvcHRpb25zO1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2gxKHVybCk7XG4gICAgY29uc3QgY29kZSA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcbiAgICBjb25zdCBtb2R1bGUgPSBuZXcgdm0uU291cmNlVGV4dE1vZHVsZShjb2RlLCB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaW1wb3J0TW9kdWxlRHluYW1pY2FsbHk6IGFzeW5jIChzcGVjaWZpZXIsIHNjcmlwdCk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVkVXJsID0gbmV3IFVSTChzcGVjaWZpZXIsIHVybCkuaHJlZjtcbiAgICAgICAgICAgIHJldHVybiBsb2FkTW9kdWxlKHJlc29sdmVkVXJsLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgIH0pO1xuICAgIC8vIENhY2hlIHRoZSBtb2R1bGUgYmVmb3JlIGxpbmtpbmcgdG8gcHJldmVudCBjeWNsZXNcbiAgICBlc21Nb2R1bGVDYWNoZS5zZXQodXJsLCBtb2R1bGUpO1xuICAgIGF3YWl0IG1vZHVsZS5saW5rKGFzeW5jIChzcGVjaWZpZXIpPT57XG4gICAgICAgIGNvbnN0IHJlc29sdmVkVXJsID0gbmV3IFVSTChzcGVjaWZpZXIsIHVybCkuaHJlZjtcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgbG9hZE1vZHVsZShyZXNvbHZlZFVybCwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgfSk7XG4gICAgcmV0dXJuIG1vZHVsZTtcbn1cblxuZnVuY3Rpb24gbm9ybWFsaXplT3B0aW9ucyhlbmFibGVEZWZhdWx0LCBkZWZhdWx0T3B0aW9ucywga2V5KSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKG9wdGlvbnMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHR5cGVvZiBvcHRpb25zID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgaWYgKGVuYWJsZURlZmF1bHQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAob3B0aW9ucyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zICYmIHR5cGVvZiBvcHRpb25zID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBkZWZhdWx0T3B0aW9ucywgb3B0aW9ucyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBVbmV4cGVjdGVkIHR5cGUgZm9yIFxcYCR7a2V5fVxcYCwgZXhwZWN0IGJvb2xlYW4vdW5kZWZpbmVkL29iamVjdCwgZ290OiAke3R5cGVvZiBvcHRpb25zfWApO1xuICAgIH07XG59XG5cbmNvbnN0IGNyZWF0ZU1vZHVsZUZlZGVyYXRpb25Db25maWcgPSAob3B0aW9ucyk9PntcbiAgICByZXR1cm4gb3B0aW9ucztcbn07XG5cbmV4cG9ydCB7IEJST1dTRVJfTE9HX0tFWSwgRU5DT0RFX05BTUVfUFJFRklYLCBFbmNvZGVkTmFtZVRyYW5zZm9ybU1hcCwgRmVkZXJhdGlvbk1vZHVsZU1hbmlmZXN0LCBNQU5JRkVTVF9FWFQsIE1GTW9kdWxlVHlwZSwgTUZQcmVmZXRjaENvbW1vbiwgTU9EVUxFX0RFVlRPT0xfSURFTlRJRklFUiwgTWFuaWZlc3RGaWxlTmFtZSwgTmFtZVRyYW5zZm9ybU1hcCwgTmFtZVRyYW5zZm9ybVN5bWJvbCwgU0VQQVJBVE9SLCBTdGF0c0ZpbGVOYW1lLCBURU1QX0RJUiwgYXNzZXJ0LCBjb21wb3NlS2V5V2l0aFNlcGFyYXRvciwgQ29udGFpbmVyUGx1Z2luIGFzIGNvbnRhaW5lclBsdWdpbiwgQ29udGFpbmVyUmVmZXJlbmNlUGx1Z2luIGFzIGNvbnRhaW5lclJlZmVyZW5jZVBsdWdpbiwgY3JlYXRlTGluaywgY3JlYXRlTG9nZ2VyLCBjcmVhdGVNb2R1bGVGZWRlcmF0aW9uQ29uZmlnLCBjcmVhdGVTY3JpcHQsIGNyZWF0ZVNjcmlwdE5vZGUsIGRlY29kZU5hbWUsIGVuY29kZU5hbWUsIGVycm9yLCBnZW5lcmF0ZUV4cG9zZUZpbGVuYW1lLCBnZW5lcmF0ZVNoYXJlRmlsZW5hbWUsIGdlbmVyYXRlU25hcHNob3RGcm9tTWFuaWZlc3QsIGdldFByb2Nlc3NFbnYsIGdldFJlc291cmNlVXJsLCBpbmZlckF1dG9QdWJsaWNQYXRoLCBpc0Jyb3dzZXJFbnYsIGlzRGVidWdNb2RlLCBpc01hbmlmZXN0UHJvdmlkZXIsIGlzUmVhY3ROYXRpdmVFbnYsIGlzUmVxdWlyZWRWZXJzaW9uLCBpc1N0YXRpY1Jlc291cmNlc0VxdWFsLCBsb2FkU2NyaXB0LCBsb2FkU2NyaXB0Tm9kZSwgbG9nZ2VyLCBNb2R1bGVGZWRlcmF0aW9uUGx1Z2luIGFzIG1vZHVsZUZlZGVyYXRpb25QbHVnaW4sIG5vcm1hbGl6ZU9wdGlvbnMsIHBhcnNlRW50cnksIHNhZmVUb1N0cmluZywgc2FmZVdyYXBwZXIsIFNoYXJlUGx1Z2luIGFzIHNoYXJlUGx1Z2luLCBzaW1wbGVKb2luUmVtb3RlRW50cnksIHdhcm4gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSlpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmV4cG9ydCB7IF9leHRlbmRzIGFzIF8gfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbHlmaWxscy5lc20uanMubWFwXG4iLCJjb25zdCBGRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUyA9IFtcbiAgICAnc2NyaXB0J1xuXTtcblxuZXhwb3J0IHsgRkVERVJBVElPTl9TVVBQT1JURURfVFlQRVMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWNvbnN0YW50LmVzbS5qcy5tYXBcbiIsImltcG9ydCAqIGFzIHJ1bnRpbWUgZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUnO1xuaW1wb3J0IHsgRkVERVJBVElPTl9TVVBQT1JURURfVFlQRVMgfSBmcm9tICcuL2NvbnN0YW50LmVzbS5qcyc7XG5pbXBvcnQgeyBkZWNvZGVOYW1lLCBFTkNPREVfTkFNRV9QUkVGSVggfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vc2RrJztcblxuZnVuY3Rpb24gYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSkge1xuICAgIGlmICghd2VicGFja1JlcXVpcmUuUyB8fCB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmhhc0F0dGFjaFNoYXJlU2NvcGVNYXAgfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2UgfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2Uuc2hhcmVTY29wZU1hcCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHdlYnBhY2tSZXF1aXJlLlMgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlLnNoYXJlU2NvcGVNYXA7XG4gICAgd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5oYXNBdHRhY2hTaGFyZVNjb3BlTWFwID0gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcmVtb3RlcyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBjaHVua0lkLCBwcm9taXNlcywgY2h1bmtNYXBwaW5nLCBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZywgd2VicGFja1JlcXVpcmUsIGlkVG9SZW1vdGVNYXAgfSA9IG9wdGlvbnM7XG4gICAgYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgaWYgKHdlYnBhY2tSZXF1aXJlLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuICAgICAgICBjaHVua01hcHBpbmdbY2h1bmtJZF0uZm9yRWFjaCgoaWQpPT57XG4gICAgICAgICAgICBsZXQgZ2V0U2NvcGUgPSB3ZWJwYWNrUmVxdWlyZS5SO1xuICAgICAgICAgICAgaWYgKCFnZXRTY29wZSkge1xuICAgICAgICAgICAgICAgIGdldFNjb3BlID0gW107XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gaWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdbaWRdO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5mb3MgPSBpZFRvUmVtb3RlTWFwW2lkXTtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgc2VlbXMgbm90IHdvcmtcbiAgICAgICAgICAgIGlmIChnZXRTY29wZS5pbmRleE9mKGRhdGEpID49IDApIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlIHNlZW1zIG5vdCB3b3JrXG4gICAgICAgICAgICBnZXRTY29wZS5wdXNoKGRhdGEpO1xuICAgICAgICAgICAgaWYgKGRhdGEucCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwcm9taXNlcy5wdXNoKGRhdGEucCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvbkVycm9yID0gKGVycm9yKT0+e1xuICAgICAgICAgICAgICAgIGlmICghZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IgPSBuZXcgRXJyb3IoJ0NvbnRhaW5lciBtaXNzaW5nJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgZXJyb3IubWVzc2FnZSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IubWVzc2FnZSArPSBgXFxud2hpbGUgbG9hZGluZyBcIiR7ZGF0YVsxXX1cIiBmcm9tICR7ZGF0YVsyXX1gO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZS5tW2lkXSA9ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgZGF0YS5wID0gMDtcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBoYW5kbGVGdW5jdGlvbiA9IChmbiwgYXJnMSwgYXJnMiwgZCwgbmV4dCwgZmlyc3QpPT57XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGZuKGFyZzEsIGFyZzIpO1xuICAgICAgICAgICAgICAgICAgICBpZiAocHJvbWlzZSAmJiBwcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9taXNlLnRoZW4oKHJlc3VsdCk9Pm5leHQocmVzdWx0LCBkKSwgb25FcnJvcik7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZmlyc3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9taXNlcy5wdXNoKGRhdGEucCA9IHApO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcDtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXh0KHByb21pc2UsIGQsIGZpcnN0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBvbkV4dGVybmFsID0gKGV4dGVybmFsLCBfLCBmaXJzdCk9PmV4dGVybmFsID8gaGFuZGxlRnVuY3Rpb24od2VicGFja1JlcXVpcmUuSSwgZGF0YVswXSwgMCwgZXh0ZXJuYWwsIG9uSW5pdGlhbGl6ZWQsIGZpcnN0KSA6IG9uRXJyb3IoKTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby12YXJcbiAgICAgICAgICAgIHZhciBvbkluaXRpYWxpemVkID0gKF8sIGV4dGVybmFsLCBmaXJzdCk9PmhhbmRsZUZ1bmN0aW9uKGV4dGVybmFsLmdldCwgZGF0YVsxXSwgZ2V0U2NvcGUsIDAsIG9uRmFjdG9yeSwgZmlyc3QpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICAgICAgICAgICAgdmFyIG9uRmFjdG9yeSA9IChmYWN0b3J5KT0+e1xuICAgICAgICAgICAgICAgIGRhdGEucCA9IDE7XG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmUubVtpZF0gPSAobW9kdWxlKT0+e1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uUmVtb3RlTG9hZGVkID0gKCk9PntcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVOYW1lID0gZGVjb2RlTmFtZShyZW1vdGVJbmZvc1swXS5uYW1lLCBFTkNPREVfTkFNRV9QUkVGSVgpO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVNb2R1bGVOYW1lID0gcmVtb3RlTmFtZSArIGRhdGFbMV0uc2xpY2UoMSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbG9hZFJlbW90ZSA9ICgpPT53ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlLmxvYWRSZW1vdGUocmVtb3RlTW9kdWxlTmFtZSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRGYWN0b3J5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmcm9tOiAnYnVpbGQnXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGluc3RhbmNlLm9wdGlvbnMuc2hhcmVTdHJhdGVneSA9PT0gJ3ZlcnNpb24tZmlyc3QnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW5zdGFuY2Uuc2hhcmVkSGFuZGxlci5pbml0aWFsaXplU2hhcmluZyhkYXRhWzBdKSkudGhlbigoKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVtb3RlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbG9hZFJlbW90ZSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIG9uRXJyb3IoZXJyb3IpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCB1c2VSdW50aW1lTG9hZCA9IHJlbW90ZUluZm9zLmxlbmd0aCA9PT0gMSAmJiBGRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUy5pbmNsdWRlcyhyZW1vdGVJbmZvc1swXS5leHRlcm5hbFR5cGUpICYmIHJlbW90ZUluZm9zWzBdLm5hbWU7XG4gICAgICAgICAgICBpZiAodXNlUnVudGltZUxvYWQpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVGdW5jdGlvbihvblJlbW90ZUxvYWRlZCwgZGF0YVsyXSwgMCwgMCwgb25GYWN0b3J5LCAxKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRnVuY3Rpb24od2VicGFja1JlcXVpcmUsIGRhdGFbMl0sIDAsIDAsIG9uRXh0ZXJuYWwsIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGNvbnN1bWVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNodW5rSWQsIHByb21pc2VzLCBjaHVua01hcHBpbmcsIGluc3RhbGxlZE1vZHVsZXMsIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcsIHdlYnBhY2tSZXF1aXJlIH0gPSBvcHRpb25zO1xuICAgIGF0dGFjaFNoYXJlU2NvcGVNYXAod2VicGFja1JlcXVpcmUpO1xuICAgIGlmICh3ZWJwYWNrUmVxdWlyZS5vKGNodW5rTWFwcGluZywgY2h1bmtJZCkpIHtcbiAgICAgICAgY2h1bmtNYXBwaW5nW2NodW5rSWRdLmZvckVhY2goKGlkKT0+e1xuICAgICAgICAgICAgaWYgKHdlYnBhY2tSZXF1aXJlLm8oaW5zdGFsbGVkTW9kdWxlcywgaWQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzLnB1c2goaW5zdGFsbGVkTW9kdWxlc1tpZF0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb25GYWN0b3J5ID0gKGZhY3RvcnkpPT57XG4gICAgICAgICAgICAgICAgaW5zdGFsbGVkTW9kdWxlc1tpZF0gPSAwO1xuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gKG1vZHVsZSk9PntcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9zaGFyZUluZm9fc2hhcmVDb25maWc7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB3ZWJwYWNrUmVxdWlyZS5jW2lkXTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgICAgICAvLyBBZGQgbGF5ZXIgcHJvcGVydHkgZnJvbSBzaGFyZUNvbmZpZyBpZiBhdmFpbGFibGVcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgeyBzaGFyZUluZm8gfSA9IG1vZHVsZVRvSGFuZGxlck1hcHBpbmdbaWRdO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKHNoYXJlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogKF9zaGFyZUluZm9fc2hhcmVDb25maWcgPSBzaGFyZUluZm8uc2hhcmVDb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfc2hhcmVJbmZvX3NoYXJlQ29uZmlnLmxheWVyKSAmJiByZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzZXQgbGF5ZXIgaWYgaXQncyBub3QgYWxyZWFkeSBkZWZpbmVkIG9yIGlmIGl0J3MgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJ2xheWVyJykgfHwgcmVzdWx0LmxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LmxheWVyID0gc2hhcmVJbmZvLnNoYXJlQ29uZmlnLmxheWVyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIElnbm9yZSBpZiBsYXllciBwcm9wZXJ0eSBpcyByZWFkLW9ubHlcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuZXhwb3J0cyA9IHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3IpPT57XG4gICAgICAgICAgICAgICAgZGVsZXRlIGluc3RhbGxlZE1vZHVsZXNbaWRdO1xuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gKG1vZHVsZSk9PntcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdlYnBhY2tSZXF1aXJlLmNbaWRdO1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmVkZXJhdGlvbkluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICAgICAgICAgICAgICBpZiAoIWZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZlZGVyYXRpb24gaW5zdGFuY2Ugbm90IGZvdW5kIScpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IHNoYXJlS2V5LCBnZXR0ZXIsIHNoYXJlSW5mbyB9ID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1tpZF07XG4gICAgICAgICAgICAgICAgY29uc3QgcHJvbWlzZSA9IGZlZGVyYXRpb25JbnN0YW5jZS5sb2FkU2hhcmUoc2hhcmVLZXksIHtcbiAgICAgICAgICAgICAgICAgICAgY3VzdG9tU2hhcmVJbmZvOiBzaGFyZUluZm9cbiAgICAgICAgICAgICAgICB9KS50aGVuKChmYWN0b3J5KT0+e1xuICAgICAgICAgICAgICAgICAgICBpZiAoZmFjdG9yeSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBnZXR0ZXIoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAocHJvbWlzZS50aGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goaW5zdGFsbGVkTW9kdWxlc1tpZF0gPSBwcm9taXNlLnRoZW4ob25GYWN0b3J5KS5jYXRjaChvbkVycm9yKSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBtYWludGFpbiBwcmV2aW91cyBsb2dpY1xuICAgICAgICAgICAgICAgICAgICBvbkZhY3RvcnkocHJvbWlzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIG9uRXJyb3IoZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gaW5pdGlhbGl6ZVNoYXJpbmcoeyBzaGFyZVNjb3BlTmFtZSwgd2VicGFja1JlcXVpcmUsIGluaXRQcm9taXNlcywgaW5pdFRva2VucywgaW5pdFNjb3BlIH0pIHtcbiAgICBjb25zdCBzaGFyZVNjb3BlS2V5cyA9IEFycmF5LmlzQXJyYXkoc2hhcmVTY29wZU5hbWUpID8gc2hhcmVTY29wZU5hbWUgOiBbXG4gICAgICAgIHNoYXJlU2NvcGVOYW1lXG4gICAgXTtcbiAgICB2YXIgaW5pdGlhbGl6ZVNoYXJpbmdQcm9taXNlcyA9IFtdO1xuICAgIHZhciBfaW5pdGlhbGl6ZVNoYXJpbmcgPSBmdW5jdGlvbihzaGFyZVNjb3BlS2V5KSB7XG4gICAgICAgIGlmICghaW5pdFNjb3BlKSBpbml0U2NvcGUgPSBbXTtcbiAgICAgICAgY29uc3QgbWZJbnN0YW5jZSA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2U7XG4gICAgICAgIC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcbiAgICAgICAgdmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZUtleV07XG4gICAgICAgIGlmICghaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW3NoYXJlU2NvcGVLZXldID0ge1xuICAgICAgICAgICAgZnJvbTogbWZJbnN0YW5jZS5uYW1lXG4gICAgICAgIH07XG4gICAgICAgIGlmIChpbml0U2NvcGUuaW5kZXhPZihpbml0VG9rZW4pID49IDApIHJldHVybjtcbiAgICAgICAgaW5pdFNjb3BlLnB1c2goaW5pdFRva2VuKTtcbiAgICAgICAgY29uc3QgcHJvbWlzZSA9IGluaXRQcm9taXNlc1tzaGFyZVNjb3BlS2V5XTtcbiAgICAgICAgaWYgKHByb21pc2UpIHJldHVybiBwcm9taXNlO1xuICAgICAgICB2YXIgd2FybiA9IChtc2cpPT50eXBlb2YgY29uc29sZSAhPT0gJ3VuZGVmaW5lZCcgJiYgY29uc29sZS53YXJuICYmIGNvbnNvbGUud2Fybihtc2cpO1xuICAgICAgICB2YXIgaW5pdEV4dGVybmFsID0gKGlkKT0+e1xuICAgICAgICAgICAgdmFyIGhhbmRsZUVycm9yID0gKGVycik9Pndhcm4oJ0luaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiAnICsgZXJyKTtcbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgdmFyIG1vZHVsZSA9IHdlYnBhY2tSZXF1aXJlKGlkKTtcbiAgICAgICAgICAgICAgICBpZiAoIW1vZHVsZSkgcmV0dXJuO1xuICAgICAgICAgICAgICAgIHZhciBpbml0Rm4gPSAobW9kdWxlKT0+bW9kdWxlICYmIG1vZHVsZS5pbml0ICYmIC8vIEB0cy1pZ25vcmUgY29tcGF0IGxlZ2FjeSBtZiBzaGFyZWQgYmVoYXZpb3JcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlLmluaXQod2VicGFja1JlcXVpcmUuU1tzaGFyZVNjb3BlS2V5XSwgaW5pdFNjb3BlLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlTWFwOiB3ZWJwYWNrUmVxdWlyZS5TIHx8IHt9LFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZUtleXM6IHNoYXJlU2NvcGVOYW1lXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChtb2R1bGUudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2gobW9kdWxlLnRoZW4oaW5pdEZuLCBoYW5kbGVFcnJvcikpO1xuICAgICAgICAgICAgICAgIHZhciBpbml0UmVzdWx0ID0gaW5pdEZuKG1vZHVsZSk7XG4gICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmIChpbml0UmVzdWx0ICYmIHR5cGVvZiBpbml0UmVzdWx0ICE9PSAnYm9vbGVhbicgJiYgaW5pdFJlc3VsdC50aGVuKSAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzLnB1c2goaW5pdFJlc3VsdFsnY2F0Y2gnXShoYW5kbGVFcnJvcikpO1xuICAgICAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICAgICAgaGFuZGxlRXJyb3IoZXJyKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcHJvbWlzZXMgPSBtZkluc3RhbmNlLmluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGVLZXksIHtcbiAgICAgICAgICAgIHN0cmF0ZWd5OiBtZkluc3RhbmNlLm9wdGlvbnMuc2hhcmVTdHJhdGVneSxcbiAgICAgICAgICAgIGluaXRTY29wZSxcbiAgICAgICAgICAgIGZyb206ICdidWlsZCdcbiAgICAgICAgfSk7XG4gICAgICAgIGF0dGFjaFNoYXJlU2NvcGVNYXAod2VicGFja1JlcXVpcmUpO1xuICAgICAgICBjb25zdCBidW5kbGVyUnVudGltZVJlbW90ZXNPcHRpb25zID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZU9wdGlvbnMucmVtb3RlcztcbiAgICAgICAgaWYgKGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMuaWRUb1JlbW90ZU1hcCkuZm9yRWFjaCgobW9kdWxlSWQpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgaW5mbyA9IGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMuaWRUb1JlbW90ZU1hcFttb2R1bGVJZF07XG4gICAgICAgICAgICAgICAgY29uc3QgZXh0ZXJuYWxNb2R1bGVJZCA9IGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMuaWRUb0V4dGVybmFsQW5kTmFtZU1hcHBpbmdbbW9kdWxlSWRdWzJdO1xuICAgICAgICAgICAgICAgIGlmIChpbmZvLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgaW5pdEV4dGVybmFsKGV4dGVybmFsTW9kdWxlSWQpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaW5mby5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IGluZm9bMF07XG4gICAgICAgICAgICAgICAgICAgIGlmICghRkVERVJBVElPTl9TVVBQT1JURURfVFlQRVMuaW5jbHVkZXMocmVtb3RlSW5mby5leHRlcm5hbFR5cGUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbml0RXh0ZXJuYWwoZXh0ZXJuYWxNb2R1bGVJZCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXByb21pc2VzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlc1tzaGFyZVNjb3BlS2V5XSA9IHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluaXRQcm9taXNlc1tzaGFyZVNjb3BlS2V5XSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpPT5pbml0UHJvbWlzZXNbc2hhcmVTY29wZUtleV0gPSB0cnVlKTtcbiAgICB9O1xuICAgIHNoYXJlU2NvcGVLZXlzLmZvckVhY2goKGtleSk9PntcbiAgICAgICAgaW5pdGlhbGl6ZVNoYXJpbmdQcm9taXNlcy5wdXNoKF9pbml0aWFsaXplU2hhcmluZyhrZXkpKTtcbiAgICB9KTtcbiAgICByZXR1cm4gUHJvbWlzZS5hbGwoaW5pdGlhbGl6ZVNoYXJpbmdQcm9taXNlcykudGhlbigoKT0+dHJ1ZSk7XG59XG5cbmZ1bmN0aW9uIGhhbmRsZUluaXRpYWxDb25zdW1lcyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBtb2R1bGVJZCwgbW9kdWxlVG9IYW5kbGVyTWFwcGluZywgd2VicGFja1JlcXVpcmUgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZmVkZXJhdGlvbkluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICBpZiAoIWZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZlZGVyYXRpb24gaW5zdGFuY2Ugbm90IGZvdW5kIScpO1xuICAgIH1cbiAgICBjb25zdCB7IHNoYXJlS2V5LCBzaGFyZUluZm8gfSA9IG1vZHVsZVRvSGFuZGxlck1hcHBpbmdbbW9kdWxlSWRdO1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBmZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlU3luYyhzaGFyZUtleSwge1xuICAgICAgICAgICAgY3VzdG9tU2hhcmVJbmZvOiBzaGFyZUluZm9cbiAgICAgICAgfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ2xvYWRTaGFyZVN5bmMgZmFpbGVkISBUaGUgZnVuY3Rpb24gc2hvdWxkIG5vdCBiZSBjYWxsZWQgdW5sZXNzIHlvdSBzZXQgXCJlYWdlcjp0cnVlXCIuIElmIHlvdSBkbyBub3Qgc2V0IGl0LCBhbmQgZW5jb3VudGVyIHRoaXMgaXNzdWUsIHlvdSBjYW4gY2hlY2sgd2hldGhlciBhbiBhc3luYyBib3VuZGFyeSBpcyBpbXBsZW1lbnRlZC4nKTtcbiAgICAgICAgY29uc29sZS5lcnJvcignVGhlIG9yaWdpbmFsIGVycm9yIG1lc3NhZ2UgaXMgYXMgZm9sbG93czogJyk7XG4gICAgICAgIHRocm93IGVycjtcbiAgICB9XG59XG5mdW5jdGlvbiBpbnN0YWxsSW5pdGlhbENvbnN1bWVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1vZHVsZVRvSGFuZGxlck1hcHBpbmcsIHdlYnBhY2tSZXF1aXJlLCBpbnN0YWxsZWRNb2R1bGVzLCBpbml0aWFsQ29uc3VtZXMgfSA9IG9wdGlvbnM7XG4gICAgaW5pdGlhbENvbnN1bWVzLmZvckVhY2goKGlkKT0+e1xuICAgICAgICB3ZWJwYWNrUmVxdWlyZS5tW2lkXSA9IChtb2R1bGUpPT57XG4gICAgICAgICAgICB2YXIgX3NoYXJlSW5mb19zaGFyZUNvbmZpZztcbiAgICAgICAgICAgIC8vIEhhbmRsZSBzY2VuYXJpbyB3aGVuIG1vZHVsZSBpcyB1c2VkIHN5bmNocm9ub3VzbHlcbiAgICAgICAgICAgIGluc3RhbGxlZE1vZHVsZXNbaWRdID0gMDtcbiAgICAgICAgICAgIGRlbGV0ZSB3ZWJwYWNrUmVxdWlyZS5jW2lkXTtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSBoYW5kbGVJbml0aWFsQ29uc3VtZXMoe1xuICAgICAgICAgICAgICAgIG1vZHVsZUlkOiBpZCxcbiAgICAgICAgICAgICAgICBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nLFxuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgZmFjdG9yeSAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgU2hhcmVkIG1vZHVsZSBpcyBub3QgYXZhaWxhYmxlIGZvciBlYWdlciBjb25zdW1wdGlvbjogJHtpZH1gKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlc3VsdCA9IGZhY3RvcnkoKTtcbiAgICAgICAgICAgIC8vIEFkZCBsYXllciBwcm9wZXJ0eSBmcm9tIHNoYXJlQ29uZmlnIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgY29uc3QgeyBzaGFyZUluZm8gfSA9IG1vZHVsZVRvSGFuZGxlck1hcHBpbmdbaWRdO1xuICAgICAgICAgICAgaWYgKChzaGFyZUluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IChfc2hhcmVJbmZvX3NoYXJlQ29uZmlnID0gc2hhcmVJbmZvLnNoYXJlQ29uZmlnKSA9PSBudWxsID8gdm9pZCAwIDogX3NoYXJlSW5mb19zaGFyZUNvbmZpZy5sYXllcikgJiYgcmVzdWx0ICYmIHR5cGVvZiByZXN1bHQgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gT25seSBzZXQgbGF5ZXIgaWYgaXQncyBub3QgYWxyZWFkeSBkZWZpbmVkIG9yIGlmIGl0J3MgdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgIGlmICghcmVzdWx0Lmhhc093blByb3BlcnR5KCdsYXllcicpIHx8IHJlc3VsdC5sYXllciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubGF5ZXIgPSBzaGFyZUluZm8uc2hhcmVDb25maWcubGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgLy8gSWdub3JlIGlmIGxheWVyIHByb3BlcnR5IGlzIHJlYWQtb25seVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICB9O1xuICAgIH0pO1xufVxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5mdW5jdGlvbiBpbml0Q29udGFpbmVyRW50cnkob3B0aW9ucykge1xuICAgIGNvbnN0IHsgd2VicGFja1JlcXVpcmUsIHNoYXJlU2NvcGUsIGluaXRTY29wZSwgc2hhcmVTY29wZUtleSwgcmVtb3RlRW50cnlJbml0T3B0aW9ucyB9ID0gb3B0aW9ucztcbiAgICBpZiAoIXdlYnBhY2tSZXF1aXJlLlMpIHJldHVybjtcbiAgICBpZiAoIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24gfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2UgfHwgIXdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMpIHJldHVybjtcbiAgICBjb25zdCBmZWRlcmF0aW9uSW5zdGFuY2UgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlO1xuICAgIGZlZGVyYXRpb25JbnN0YW5jZS5pbml0T3B0aW9ucyhfZXh0ZW5kcyh7XG4gICAgICAgIG5hbWU6IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMubmFtZSxcbiAgICAgICAgcmVtb3RlczogW11cbiAgICB9LCByZW1vdGVFbnRyeUluaXRPcHRpb25zKSk7XG4gICAgY29uc3QgaG9zdFNoYXJlU2NvcGVLZXlzID0gcmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlS2V5cztcbiAgICBjb25zdCBob3N0U2hhcmVTY29wZU1hcCA9IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMuc2hhcmVTY29wZU1hcDtcbiAgICAvLyBob3N0OiAnZGVmYXVsdCcgcmVtb3RlOiAnZGVmYXVsdCcgIHJlbW90ZVsnZGVmYXVsdCddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ2RlZmF1bHQnXVxuICAgIC8vIGhvc3Q6IFsnZGVmYXVsdCcsICdzY29wZTEnXSByZW1vdGU6ICdkZWZhdWx0JyAgcmVtb3RlWydkZWZhdWx0J10gPSBob3N0U2hhcmVTY29wZU1hcFsnZGVmYXVsdCddOyByZW1vdGVbJ3Njb3BlMSddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ3Njb3AxJ11cbiAgICAvLyBob3N0OiAnZGVmYXVsdCcgcmVtb3RlOiBbJ2RlZmF1bHQnLCdzY29wZTEnXSAgcmVtb3RlWydkZWZhdWx0J10gPSBob3N0U2hhcmVTY29wZU1hcFsnZGVmYXVsdCddOyByZW1vdGVbJ3Njb3BlMSddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ3Njb3BlMSddID0ge31cbiAgICAvLyBob3N0OiBbJ3Njb3BlMScsJ2RlZmF1bHQnXSByZW1vdGU6IFsnc2NvcGUxJywnc2NvcGUyJ10gPT4gcmVtb3RlWydzY29wZTEnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydzY29wZTEnXTsgcmVtb3RlWydzY29wZTInXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydzY29wZTInXSA9IHt9O1xuICAgIGlmICghc2hhcmVTY29wZUtleSB8fCB0eXBlb2Ygc2hhcmVTY29wZUtleSA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgY29uc3Qga2V5ID0gc2hhcmVTY29wZUtleSB8fCAnZGVmYXVsdCc7XG4gICAgICAgIGlmIChBcnJheS5pc0FycmF5KGhvc3RTaGFyZVNjb3BlS2V5cykpIHtcbiAgICAgICAgICAgIC8vIGNvbnN0IHNjID0gaG9zdFNoYXJlU2NvcGVNYXAhW2tleV07XG4gICAgICAgICAgICAvLyBpZiAoIXNjKSB7XG4gICAgICAgICAgICAvLyAgIHRocm93IG5ldyBFcnJvcignc2hhcmVTY29wZUtleSBpcyBub3QgZXhpc3QgaW4gaG9zdFNoYXJlU2NvcGVNYXAnKTtcbiAgICAgICAgICAgIC8vIH1cbiAgICAgICAgICAgIC8vIGZlZGVyYXRpb25JbnN0YW5jZS5pbml0U2hhcmVTY29wZU1hcChrZXksIHNjLCB7XG4gICAgICAgICAgICAvLyAgIGhvc3RTaGFyZVNjb3BlTWFwOiByZW1vdGVFbnRyeUluaXRPcHRpb25zPy5zaGFyZVNjb3BlTWFwIHx8IHt9LFxuICAgICAgICAgICAgLy8gfSk7XG4gICAgICAgICAgICBob3N0U2hhcmVTY29wZUtleXMuZm9yRWFjaCgoaG9zdEtleSk9PntcbiAgICAgICAgICAgICAgICBpZiAoIWhvc3RTaGFyZVNjb3BlTWFwW2hvc3RLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwW2hvc3RLZXldID0ge307XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHNjID0gaG9zdFNoYXJlU2NvcGVNYXBbaG9zdEtleV07XG4gICAgICAgICAgICAgICAgZmVkZXJhdGlvbkluc3RhbmNlLmluaXRTaGFyZVNjb3BlTWFwKGhvc3RLZXksIHNjLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoa2V5LCBzaGFyZVNjb3BlLCB7XG4gICAgICAgICAgICAgICAgaG9zdFNoYXJlU2NvcGVNYXA6IChyZW1vdGVFbnRyeUluaXRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLnNoYXJlU2NvcGVNYXApIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICAgIHNoYXJlU2NvcGVLZXkuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICAgICAgaWYgKCFob3N0U2hhcmVTY29wZUtleXMgfHwgIWhvc3RTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgICAgICAgICAgZmVkZXJhdGlvbkluc3RhbmNlLmluaXRTaGFyZVNjb3BlTWFwKGtleSwgc2hhcmVTY29wZSwge1xuICAgICAgICAgICAgICAgICAgICBob3N0U2hhcmVTY29wZU1hcDogKHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMuc2hhcmVTY29wZU1hcCkgfHwge31cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIWhvc3RTaGFyZVNjb3BlTWFwW2tleV0pIHtcbiAgICAgICAgICAgICAgICBob3N0U2hhcmVTY29wZU1hcFtrZXldID0ge307XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzYyA9IGhvc3RTaGFyZVNjb3BlTWFwW2tleV07XG4gICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoa2V5LCBzYywge1xuICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAod2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2Ygd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5wcmVmZXRjaCA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLnByZWZldGNoKCk7XG4gICAgfVxuICAgIGlmICghQXJyYXkuaXNBcnJheShzaGFyZVNjb3BlS2V5KSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB3ZWJwYWNrUmVxdWlyZS5JKHNoYXJlU2NvcGVLZXkgfHwgJ2RlZmF1bHQnLCBpbml0U2NvcGUpO1xuICAgIH1cbiAgICB2YXIgcHJveHlJbml0aWFsaXplU2hhcmluZyA9IEJvb2xlYW4od2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQpO1xuICAgIGlmIChwcm94eUluaXRpYWxpemVTaGFyaW5nKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHdlYnBhY2tSZXF1aXJlLkkoc2hhcmVTY29wZUtleSwgaW5pdFNjb3BlKTtcbiAgICB9XG4gICAgLy8gQHRzLWlnbm9yZVxuICAgIHJldHVybiBQcm9taXNlLmFsbChzaGFyZVNjb3BlS2V5Lm1hcCgoa2V5KT0+e1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIHJldHVybiB3ZWJwYWNrUmVxdWlyZS5JKGtleSwgaW5pdFNjb3BlKTtcbiAgICB9KSkudGhlbigoKT0+dHJ1ZSk7XG59XG5cbmNvbnN0IGZlZGVyYXRpb24gPSB7XG4gICAgcnVudGltZSxcbiAgICBpbnN0YW5jZTogdW5kZWZpbmVkLFxuICAgIGluaXRPcHRpb25zOiB1bmRlZmluZWQsXG4gICAgYnVuZGxlclJ1bnRpbWU6IHtcbiAgICAgICAgcmVtb3RlcyxcbiAgICAgICAgY29uc3VtZXMsXG4gICAgICAgIEk6IGluaXRpYWxpemVTaGFyaW5nLFxuICAgICAgICBTOiB7fSxcbiAgICAgICAgaW5zdGFsbEluaXRpYWxDb25zdW1lcyxcbiAgICAgICAgaW5pdENvbnRhaW5lckVudHJ5XG4gICAgfSxcbiAgICBhdHRhY2hTaGFyZVNjb3BlTWFwLFxuICAgIGJ1bmRsZXJSdW50aW1lT3B0aW9uczoge31cbn07XG5cbmV4cG9ydCB7IGZlZGVyYXRpb24gYXMgZGVmYXVsdCB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiJ3VzZSBzdHJpY3QnXG5cbm1vZHVsZS5leHBvcnRzID0gYW5zaUhUTUxcblxuLy8gUmVmZXJlbmNlIHRvIGh0dHBzOi8vZ2l0aHViLmNvbS9zaW5kcmVzb3JodXMvYW5zaS1yZWdleFxudmFyIF9yZWdBTlNJID0gLyg/Oig/OlxcdTAwMWJcXFspfFxcdTAwOWIpKD86KD86WzAtOV17MSwzfSk/KD86KD86O1swLTldezAsM30pKik/W0EtTXxmLW1dKXxcXHUwMDFiW0EtTV0vXG5cbnZhciBfZGVmQ29sb3JzID0ge1xuICByZXNldDogWydmZmYnLCAnMDAwJ10sIC8vIFtGT1JFR1JPVURfQ09MT1IsIEJBQ0tHUk9VTkRfQ09MT1JdXG4gIGJsYWNrOiAnMDAwJyxcbiAgcmVkOiAnZmYwMDAwJyxcbiAgZ3JlZW46ICcyMDk4MDUnLFxuICB5ZWxsb3c6ICdlOGJmMDMnLFxuICBibHVlOiAnMDAwMGZmJyxcbiAgbWFnZW50YTogJ2ZmMDBmZicsXG4gIGN5YW46ICcwMGZmZWUnLFxuICBsaWdodGdyZXk6ICdmMGYwZjAnLFxuICBkYXJrZ3JleTogJzg4OCdcbn1cbnZhciBfc3R5bGVzID0ge1xuICAzMDogJ2JsYWNrJyxcbiAgMzE6ICdyZWQnLFxuICAzMjogJ2dyZWVuJyxcbiAgMzM6ICd5ZWxsb3cnLFxuICAzNDogJ2JsdWUnLFxuICAzNTogJ21hZ2VudGEnLFxuICAzNjogJ2N5YW4nLFxuICAzNzogJ2xpZ2h0Z3JleSdcbn1cbnZhciBfb3BlblRhZ3MgPSB7XG4gICcxJzogJ2ZvbnQtd2VpZ2h0OmJvbGQnLCAvLyBib2xkXG4gICcyJzogJ29wYWNpdHk6MC41JywgLy8gZGltXG4gICczJzogJzxpPicsIC8vIGl0YWxpY1xuICAnNCc6ICc8dT4nLCAvLyB1bmRlcnNjb3JlXG4gICc4JzogJ2Rpc3BsYXk6bm9uZScsIC8vIGhpZGRlblxuICAnOSc6ICc8ZGVsPicgLy8gZGVsZXRlXG59XG52YXIgX2Nsb3NlVGFncyA9IHtcbiAgJzIzJzogJzwvaT4nLCAvLyByZXNldCBpdGFsaWNcbiAgJzI0JzogJzwvdT4nLCAvLyByZXNldCB1bmRlcnNjb3JlXG4gICcyOSc6ICc8L2RlbD4nIC8vIHJlc2V0IGRlbGV0ZVxufVxuXG47WzAsIDIxLCAyMiwgMjcsIDI4LCAzOSwgNDldLmZvckVhY2goZnVuY3Rpb24gKG4pIHtcbiAgX2Nsb3NlVGFnc1tuXSA9ICc8L3NwYW4+J1xufSlcblxuLyoqXG4gKiBDb252ZXJ0cyB0ZXh0IHdpdGggQU5TSSBjb2xvciBjb2RlcyB0byBIVE1MIG1hcmt1cC5cbiAqIEBwYXJhbSB7U3RyaW5nfSB0ZXh0XG4gKiBAcmV0dXJucyB7Kn1cbiAqL1xuZnVuY3Rpb24gYW5zaUhUTUwgKHRleHQpIHtcbiAgLy8gUmV0dXJucyB0aGUgdGV4dCBpZiB0aGUgc3RyaW5nIGhhcyBubyBBTlNJIGVzY2FwZSBjb2RlLlxuICBpZiAoIV9yZWdBTlNJLnRlc3QodGV4dCkpIHtcbiAgICByZXR1cm4gdGV4dFxuICB9XG5cbiAgLy8gQ2FjaGUgb3BlbmVkIHNlcXVlbmNlLlxuICB2YXIgYW5zaUNvZGVzID0gW11cbiAgLy8gUmVwbGFjZSB3aXRoIG1hcmt1cC5cbiAgdmFyIHJldCA9IHRleHQucmVwbGFjZSgvXFwwMzNcXFsoXFxkKyltL2csIGZ1bmN0aW9uIChtYXRjaCwgc2VxKSB7XG4gICAgdmFyIG90ID0gX29wZW5UYWdzW3NlcV1cbiAgICBpZiAob3QpIHtcbiAgICAgIC8vIElmIGN1cnJlbnQgc2VxdWVuY2UgaGFzIGJlZW4gb3BlbmVkLCBjbG9zZSBpdC5cbiAgICAgIGlmICghIX5hbnNpQ29kZXMuaW5kZXhPZihzZXEpKSB7IC8vIGVzbGludC1kaXNhYmxlLWxpbmUgbm8tZXh0cmEtYm9vbGVhbi1jYXN0XG4gICAgICAgIGFuc2lDb2Rlcy5wb3AoKVxuICAgICAgICByZXR1cm4gJzwvc3Bhbj4nXG4gICAgICB9XG4gICAgICAvLyBPcGVuIHRhZy5cbiAgICAgIGFuc2lDb2Rlcy5wdXNoKHNlcSlcbiAgICAgIHJldHVybiBvdFswXSA9PT0gJzwnID8gb3QgOiAnPHNwYW4gc3R5bGU9XCInICsgb3QgKyAnO1wiPidcbiAgICB9XG5cbiAgICB2YXIgY3QgPSBfY2xvc2VUYWdzW3NlcV1cbiAgICBpZiAoY3QpIHtcbiAgICAgIC8vIFBvcCBzZXF1ZW5jZVxuICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICByZXR1cm4gY3RcbiAgICB9XG4gICAgcmV0dXJuICcnXG4gIH0pXG5cbiAgLy8gTWFrZSBzdXJlIHRhZ3MgYXJlIGNsb3NlZC5cbiAgdmFyIGwgPSBhbnNpQ29kZXMubGVuZ3RoXG4gIDsobCA+IDApICYmIChyZXQgKz0gQXJyYXkobCArIDEpLmpvaW4oJzwvc3Bhbj4nKSlcblxuICByZXR1cm4gcmV0XG59XG5cbi8qKlxuICogQ3VzdG9taXplIGNvbG9ycy5cbiAqIEBwYXJhbSB7T2JqZWN0fSBjb2xvcnMgcmVmZXJlbmNlIHRvIF9kZWZDb2xvcnNcbiAqL1xuYW5zaUhUTUwuc2V0Q29sb3JzID0gZnVuY3Rpb24gKGNvbG9ycykge1xuICBpZiAodHlwZW9mIGNvbG9ycyAhPT0gJ29iamVjdCcpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoJ2Bjb2xvcnNgIHBhcmFtZXRlciBtdXN0IGJlIGFuIE9iamVjdC4nKVxuICB9XG5cbiAgdmFyIF9maW5hbENvbG9ycyA9IHt9XG4gIGZvciAodmFyIGtleSBpbiBfZGVmQ29sb3JzKSB7XG4gICAgdmFyIGhleCA9IGNvbG9ycy5oYXNPd25Qcm9wZXJ0eShrZXkpID8gY29sb3JzW2tleV0gOiBudWxsXG4gICAgaWYgKCFoZXgpIHtcbiAgICAgIF9maW5hbENvbG9yc1trZXldID0gX2RlZkNvbG9yc1trZXldXG4gICAgICBjb250aW51ZVxuICAgIH1cbiAgICBpZiAoJ3Jlc2V0JyA9PT0ga2V5KSB7XG4gICAgICBpZiAodHlwZW9mIGhleCA9PT0gJ3N0cmluZycpIHtcbiAgICAgICAgaGV4ID0gW2hleF1cbiAgICAgIH1cbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShoZXgpIHx8IGhleC5sZW5ndGggPT09IDAgfHwgaGV4LnNvbWUoZnVuY3Rpb24gKGgpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBoICE9PSAnc3RyaW5nJ1xuICAgICAgfSkpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdUaGUgdmFsdWUgb2YgYCcgKyBrZXkgKyAnYCBwcm9wZXJ0eSBtdXN0IGJlIGFuIEFycmF5IGFuZCBlYWNoIGl0ZW0gY291bGQgb25seSBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgICB9XG4gICAgICB2YXIgZGVmSGV4Q29sb3IgPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGlmICghaGV4WzBdKSB7XG4gICAgICAgIGhleFswXSA9IGRlZkhleENvbG9yWzBdXG4gICAgICB9XG4gICAgICBpZiAoaGV4Lmxlbmd0aCA9PT0gMSB8fCAhaGV4WzFdKSB7XG4gICAgICAgIGhleCA9IFtoZXhbMF1dXG4gICAgICAgIGhleC5wdXNoKGRlZkhleENvbG9yWzFdKVxuICAgICAgfVxuXG4gICAgICBoZXggPSBoZXguc2xpY2UoMCwgMilcbiAgICB9IGVsc2UgaWYgKHR5cGVvZiBoZXggIT09ICdzdHJpbmcnKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYSBoZXggc3RyaW5nLCBlLmcuOiBGRjAwMDAnKVxuICAgIH1cbiAgICBfZmluYWxDb2xvcnNba2V5XSA9IGhleFxuICB9XG4gIF9zZXRUYWdzKF9maW5hbENvbG9ycylcbn1cblxuLyoqXG4gKiBSZXNldCBjb2xvcnMuXG4gKi9cbmFuc2lIVE1MLnJlc2V0ID0gZnVuY3Rpb24gKCkge1xuICBfc2V0VGFncyhfZGVmQ29sb3JzKVxufVxuXG4vKipcbiAqIEV4cG9zZSB0YWdzLCBpbmNsdWRpbmcgb3BlbiBhbmQgY2xvc2UuXG4gKiBAdHlwZSB7T2JqZWN0fVxuICovXG5hbnNpSFRNTC50YWdzID0ge31cblxuaWYgKE9iamVjdC5kZWZpbmVQcm9wZXJ0eSkge1xuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ29wZW4nLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfb3BlblRhZ3MgfVxuICB9KVxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoYW5zaUhUTUwudGFncywgJ2Nsb3NlJywge1xuICAgIGdldDogZnVuY3Rpb24gKCkgeyByZXR1cm4gX2Nsb3NlVGFncyB9XG4gIH0pXG59IGVsc2Uge1xuICBhbnNpSFRNTC50YWdzLm9wZW4gPSBfb3BlblRhZ3NcbiAgYW5zaUhUTUwudGFncy5jbG9zZSA9IF9jbG9zZVRhZ3Ncbn1cblxuZnVuY3Rpb24gX3NldFRhZ3MgKGNvbG9ycykge1xuICAvLyByZXNldCBhbGxcbiAgX29wZW5UYWdzWycwJ10gPSAnZm9udC13ZWlnaHQ6bm9ybWFsO29wYWNpdHk6MTtjb2xvcjojJyArIGNvbG9ycy5yZXNldFswXSArICc7YmFja2dyb3VuZDojJyArIGNvbG9ycy5yZXNldFsxXVxuICAvLyBpbnZlcnNlXG4gIF9vcGVuVGFnc1snNyddID0gJ2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzFdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzBdXG4gIC8vIGRhcmsgZ3JleVxuICBfb3BlblRhZ3NbJzkwJ10gPSAnY29sb3I6IycgKyBjb2xvcnMuZGFya2dyZXlcblxuICBmb3IgKHZhciBjb2RlIGluIF9zdHlsZXMpIHtcbiAgICB2YXIgY29sb3IgPSBfc3R5bGVzW2NvZGVdXG4gICAgdmFyIG9yaUNvbG9yID0gY29sb3JzW2NvbG9yXSB8fCAnMDAwJ1xuICAgIF9vcGVuVGFnc1tjb2RlXSA9ICdjb2xvcjojJyArIG9yaUNvbG9yXG4gICAgY29kZSA9IHBhcnNlSW50KGNvZGUpXG4gICAgX29wZW5UYWdzWyhjb2RlICsgMTApLnRvU3RyaW5nKCldID0gJ2JhY2tncm91bmQ6IycgKyBvcmlDb2xvclxuICB9XG59XG5cbmFuc2lIVE1MLnJlc2V0KClcbiIsIi8vIENvcHlyaWdodCBKb3llbnQsIEluYy4gYW5kIG90aGVyIE5vZGUgY29udHJpYnV0b3JzLlxuLy9cbi8vIFBlcm1pc3Npb24gaXMgaGVyZWJ5IGdyYW50ZWQsIGZyZWUgb2YgY2hhcmdlLCB0byBhbnkgcGVyc29uIG9idGFpbmluZyBhXG4vLyBjb3B5IG9mIHRoaXMgc29mdHdhcmUgYW5kIGFzc29jaWF0ZWQgZG9jdW1lbnRhdGlvbiBmaWxlcyAodGhlXG4vLyBcIlNvZnR3YXJlXCIpLCB0byBkZWFsIGluIHRoZSBTb2Z0d2FyZSB3aXRob3V0IHJlc3RyaWN0aW9uLCBpbmNsdWRpbmdcbi8vIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBtZXJnZSwgcHVibGlzaCxcbi8vIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsIGNvcGllcyBvZiB0aGUgU29mdHdhcmUsIGFuZCB0byBwZXJtaXRcbi8vIHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXMgZnVybmlzaGVkIHRvIGRvIHNvLCBzdWJqZWN0IHRvIHRoZVxuLy8gZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4vL1xuLy8gVGhlIGFib3ZlIGNvcHlyaWdodCBub3RpY2UgYW5kIHRoaXMgcGVybWlzc2lvbiBub3RpY2Ugc2hhbGwgYmUgaW5jbHVkZWRcbi8vIGluIGFsbCBjb3BpZXMgb3Igc3Vic3RhbnRpYWwgcG9ydGlvbnMgb2YgdGhlIFNvZnR3YXJlLlxuLy9cbi8vIFRIRSBTT0ZUV0FSRSBJUyBQUk9WSURFRCBcIkFTIElTXCIsIFdJVEhPVVQgV0FSUkFOVFkgT0YgQU5ZIEtJTkQsIEVYUFJFU1Ncbi8vIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gVEhFIFdBUlJBTlRJRVMgT0Zcbi8vIE1FUkNIQU5UQUJJTElUWSwgRklUTkVTUyBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UgQU5EIE5PTklORlJJTkdFTUVOVC4gSU5cbi8vIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1JTIE9SIENPUFlSSUdIVCBIT0xERVJTIEJFIExJQUJMRSBGT1IgQU5ZIENMQUlNLFxuLy8gREFNQUdFUyBPUiBPVEhFUiBMSUFCSUxJVFksIFdIRVRIRVIgSU4gQU4gQUNUSU9OIE9GIENPTlRSQUNULCBUT1JUIE9SXG4vLyBPVEhFUldJU0UsIEFSSVNJTkcgRlJPTSwgT1VUIE9GIE9SIElOIENPTk5FQ1RJT04gV0lUSCBUSEUgU09GVFdBUkUgT1IgVEhFXG4vLyBVU0UgT1IgT1RIRVIgREVBTElOR1MgSU4gVEhFIFNPRlRXQVJFLlxuXG4ndXNlIHN0cmljdCc7XG5cbnZhciBSID0gdHlwZW9mIFJlZmxlY3QgPT09ICdvYmplY3QnID8gUmVmbGVjdCA6IG51bGxcbnZhciBSZWZsZWN0QXBwbHkgPSBSICYmIHR5cGVvZiBSLmFwcGx5ID09PSAnZnVuY3Rpb24nXG4gID8gUi5hcHBseVxuICA6IGZ1bmN0aW9uIFJlZmxlY3RBcHBseSh0YXJnZXQsIHJlY2VpdmVyLCBhcmdzKSB7XG4gICAgcmV0dXJuIEZ1bmN0aW9uLnByb3RvdHlwZS5hcHBseS5jYWxsKHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpO1xuICB9XG5cbnZhciBSZWZsZWN0T3duS2V5c1xuaWYgKFIgJiYgdHlwZW9mIFIub3duS2V5cyA9PT0gJ2Z1bmN0aW9uJykge1xuICBSZWZsZWN0T3duS2V5cyA9IFIub3duS2V5c1xufSBlbHNlIGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldClcbiAgICAgIC5jb25jYXQoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyh0YXJnZXQpKTtcbiAgfTtcbn0gZWxzZSB7XG4gIFJlZmxlY3RPd25LZXlzID0gZnVuY3Rpb24gUmVmbGVjdE93bktleXModGFyZ2V0KSB7XG4gICAgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eU5hbWVzKHRhcmdldCk7XG4gIH07XG59XG5cbmZ1bmN0aW9uIFByb2Nlc3NFbWl0V2FybmluZyh3YXJuaW5nKSB7XG4gIGlmIChjb25zb2xlICYmIGNvbnNvbGUud2FybikgY29uc29sZS53YXJuKHdhcm5pbmcpO1xufVxuXG52YXIgTnVtYmVySXNOYU4gPSBOdW1iZXIuaXNOYU4gfHwgZnVuY3Rpb24gTnVtYmVySXNOYU4odmFsdWUpIHtcbiAgcmV0dXJuIHZhbHVlICE9PSB2YWx1ZTtcbn1cblxuZnVuY3Rpb24gRXZlbnRFbWl0dGVyKCkge1xuICBFdmVudEVtaXR0ZXIuaW5pdC5jYWxsKHRoaXMpO1xufVxubW9kdWxlLmV4cG9ydHMgPSBFdmVudEVtaXR0ZXI7XG5tb2R1bGUuZXhwb3J0cy5vbmNlID0gb25jZTtcblxuLy8gQmFja3dhcmRzLWNvbXBhdCB3aXRoIG5vZGUgMC4xMC54XG5FdmVudEVtaXR0ZXIuRXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHMgPSB1bmRlZmluZWQ7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9ldmVudHNDb3VudCA9IDA7XG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLl9tYXhMaXN0ZW5lcnMgPSB1bmRlZmluZWQ7XG5cbi8vIEJ5IGRlZmF1bHQgRXZlbnRFbWl0dGVycyB3aWxsIHByaW50IGEgd2FybmluZyBpZiBtb3JlIHRoYW4gMTAgbGlzdGVuZXJzIGFyZVxuLy8gYWRkZWQgdG8gaXQuIFRoaXMgaXMgYSB1c2VmdWwgZGVmYXVsdCB3aGljaCBoZWxwcyBmaW5kaW5nIG1lbW9yeSBsZWFrcy5cbnZhciBkZWZhdWx0TWF4TGlzdGVuZXJzID0gMTA7XG5cbmZ1bmN0aW9uIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpIHtcbiAgaWYgKHR5cGVvZiBsaXN0ZW5lciAhPT0gJ2Z1bmN0aW9uJykge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImxpc3RlbmVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEZ1bmN0aW9uLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgbGlzdGVuZXIpO1xuICB9XG59XG5cbk9iamVjdC5kZWZpbmVQcm9wZXJ0eShFdmVudEVtaXR0ZXIsICdkZWZhdWx0TWF4TGlzdGVuZXJzJywge1xuICBlbnVtZXJhYmxlOiB0cnVlLFxuICBnZXQ6IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiBkZWZhdWx0TWF4TGlzdGVuZXJzO1xuICB9LFxuICBzZXQ6IGZ1bmN0aW9uKGFyZykge1xuICAgIGlmICh0eXBlb2YgYXJnICE9PSAnbnVtYmVyJyB8fCBhcmcgPCAwIHx8IE51bWJlcklzTmFOKGFyZykpIHtcbiAgICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJkZWZhdWx0TWF4TGlzdGVuZXJzXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIGFyZyArICcuJyk7XG4gICAgfVxuICAgIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSBhcmc7XG4gIH1cbn0pO1xuXG5FdmVudEVtaXR0ZXIuaW5pdCA9IGZ1bmN0aW9uKCkge1xuXG4gIGlmICh0aGlzLl9ldmVudHMgPT09IHVuZGVmaW5lZCB8fFxuICAgICAgdGhpcy5fZXZlbnRzID09PSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodGhpcykuX2V2ZW50cykge1xuICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgdGhpcy5fZXZlbnRzQ291bnQgPSAwO1xuICB9XG5cbiAgdGhpcy5fbWF4TGlzdGVuZXJzID0gdGhpcy5fbWF4TGlzdGVuZXJzIHx8IHVuZGVmaW5lZDtcbn07XG5cbi8vIE9idmlvdXNseSBub3QgYWxsIEVtaXR0ZXJzIHNob3VsZCBiZSBsaW1pdGVkIHRvIDEwLiBUaGlzIGZ1bmN0aW9uIGFsbG93c1xuLy8gdGhhdCB0byBiZSBpbmNyZWFzZWQuIFNldCB0byB6ZXJvIGZvciB1bmxpbWl0ZWQuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnNldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIHNldE1heExpc3RlbmVycyhuKSB7XG4gIGlmICh0eXBlb2YgbiAhPT0gJ251bWJlcicgfHwgbiA8IDAgfHwgTnVtYmVySXNOYU4obikpIHtcbiAgICB0aHJvdyBuZXcgUmFuZ2VFcnJvcignVGhlIHZhbHVlIG9mIFwiblwiIGlzIG91dCBvZiByYW5nZS4gSXQgbXVzdCBiZSBhIG5vbi1uZWdhdGl2ZSBudW1iZXIuIFJlY2VpdmVkICcgKyBuICsgJy4nKTtcbiAgfVxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSBuO1xuICByZXR1cm4gdGhpcztcbn07XG5cbmZ1bmN0aW9uIF9nZXRNYXhMaXN0ZW5lcnModGhhdCkge1xuICBpZiAodGhhdC5fbWF4TGlzdGVuZXJzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIEV2ZW50RW1pdHRlci5kZWZhdWx0TWF4TGlzdGVuZXJzO1xuICByZXR1cm4gdGhhdC5fbWF4TGlzdGVuZXJzO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmdldE1heExpc3RlbmVycyA9IGZ1bmN0aW9uIGdldE1heExpc3RlbmVycygpIHtcbiAgcmV0dXJuIF9nZXRNYXhMaXN0ZW5lcnModGhpcyk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmVtaXQgPSBmdW5jdGlvbiBlbWl0KHR5cGUpIHtcbiAgdmFyIGFyZ3MgPSBbXTtcbiAgZm9yICh2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspIGFyZ3MucHVzaChhcmd1bWVudHNbaV0pO1xuICB2YXIgZG9FcnJvciA9ICh0eXBlID09PSAnZXJyb3InKTtcblxuICB2YXIgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpXG4gICAgZG9FcnJvciA9IChkb0Vycm9yICYmIGV2ZW50cy5lcnJvciA9PT0gdW5kZWZpbmVkKTtcbiAgZWxzZSBpZiAoIWRvRXJyb3IpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIC8vIElmIHRoZXJlIGlzIG5vICdlcnJvcicgZXZlbnQgbGlzdGVuZXIgdGhlbiB0aHJvdy5cbiAgaWYgKGRvRXJyb3IpIHtcbiAgICB2YXIgZXI7XG4gICAgaWYgKGFyZ3MubGVuZ3RoID4gMClcbiAgICAgIGVyID0gYXJnc1swXTtcbiAgICBpZiAoZXIgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgLy8gTm90ZTogVGhlIGNvbW1lbnRzIG9uIHRoZSBgdGhyb3dgIGxpbmVzIGFyZSBpbnRlbnRpb25hbCwgdGhleSBzaG93XG4gICAgICAvLyB1cCBpbiBOb2RlJ3Mgb3V0cHV0IGlmIHRoaXMgcmVzdWx0cyBpbiBhbiB1bmhhbmRsZWQgZXhjZXB0aW9uLlxuICAgICAgdGhyb3cgZXI7IC8vIFVuaGFuZGxlZCAnZXJyb3InIGV2ZW50XG4gICAgfVxuICAgIC8vIEF0IGxlYXN0IGdpdmUgc29tZSBraW5kIG9mIGNvbnRleHQgdG8gdGhlIHVzZXJcbiAgICB2YXIgZXJyID0gbmV3IEVycm9yKCdVbmhhbmRsZWQgZXJyb3IuJyArIChlciA/ICcgKCcgKyBlci5tZXNzYWdlICsgJyknIDogJycpKTtcbiAgICBlcnIuY29udGV4dCA9IGVyO1xuICAgIHRocm93IGVycjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgfVxuXG4gIHZhciBoYW5kbGVyID0gZXZlbnRzW3R5cGVdO1xuXG4gIGlmIChoYW5kbGVyID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIGZhbHNlO1xuXG4gIGlmICh0eXBlb2YgaGFuZGxlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIFJlZmxlY3RBcHBseShoYW5kbGVyLCB0aGlzLCBhcmdzKTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgbGVuID0gaGFuZGxlci5sZW5ndGg7XG4gICAgdmFyIGxpc3RlbmVycyA9IGFycmF5Q2xvbmUoaGFuZGxlciwgbGVuKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKVxuICAgICAgUmVmbGVjdEFwcGx5KGxpc3RlbmVyc1tpXSwgdGhpcywgYXJncyk7XG4gIH1cblxuICByZXR1cm4gdHJ1ZTtcbn07XG5cbmZ1bmN0aW9uIF9hZGRMaXN0ZW5lcih0YXJnZXQsIHR5cGUsIGxpc3RlbmVyLCBwcmVwZW5kKSB7XG4gIHZhciBtO1xuICB2YXIgZXZlbnRzO1xuICB2YXIgZXhpc3Rpbmc7XG5cbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG4gIGlmIChldmVudHMgPT09IHVuZGVmaW5lZCkge1xuICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0YXJnZXQuX2V2ZW50c0NvdW50ID0gMDtcbiAgfSBlbHNlIHtcbiAgICAvLyBUbyBhdm9pZCByZWN1cnNpb24gaW4gdGhlIGNhc2UgdGhhdCB0eXBlID09PSBcIm5ld0xpc3RlbmVyXCIhIEJlZm9yZVxuICAgIC8vIGFkZGluZyBpdCB0byB0aGUgbGlzdGVuZXJzLCBmaXJzdCBlbWl0IFwibmV3TGlzdGVuZXJcIi5cbiAgICBpZiAoZXZlbnRzLm5ld0xpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHRhcmdldC5lbWl0KCduZXdMaXN0ZW5lcicsIHR5cGUsXG4gICAgICAgICAgICAgICAgICBsaXN0ZW5lci5saXN0ZW5lciA/IGxpc3RlbmVyLmxpc3RlbmVyIDogbGlzdGVuZXIpO1xuXG4gICAgICAvLyBSZS1hc3NpZ24gYGV2ZW50c2AgYmVjYXVzZSBhIG5ld0xpc3RlbmVyIGhhbmRsZXIgY291bGQgaGF2ZSBjYXVzZWQgdGhlXG4gICAgICAvLyB0aGlzLl9ldmVudHMgdG8gYmUgYXNzaWduZWQgdG8gYSBuZXcgb2JqZWN0XG4gICAgICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgICB9XG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV07XG4gIH1cblxuICBpZiAoZXhpc3RpbmcgPT09IHVuZGVmaW5lZCkge1xuICAgIC8vIE9wdGltaXplIHRoZSBjYXNlIG9mIG9uZSBsaXN0ZW5lci4gRG9uJ3QgbmVlZCB0aGUgZXh0cmEgYXJyYXkgb2JqZWN0LlxuICAgIGV4aXN0aW5nID0gZXZlbnRzW3R5cGVdID0gbGlzdGVuZXI7XG4gICAgKyt0YXJnZXQuX2V2ZW50c0NvdW50O1xuICB9IGVsc2Uge1xuICAgIGlmICh0eXBlb2YgZXhpc3RpbmcgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIC8vIEFkZGluZyB0aGUgc2Vjb25kIGVsZW1lbnQsIG5lZWQgdG8gY2hhbmdlIHRvIGFycmF5LlxuICAgICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPVxuICAgICAgICBwcmVwZW5kID8gW2xpc3RlbmVyLCBleGlzdGluZ10gOiBbZXhpc3RpbmcsIGxpc3RlbmVyXTtcbiAgICAgIC8vIElmIHdlJ3ZlIGFscmVhZHkgZ290IGFuIGFycmF5LCBqdXN0IGFwcGVuZC5cbiAgICB9IGVsc2UgaWYgKHByZXBlbmQpIHtcbiAgICAgIGV4aXN0aW5nLnVuc2hpZnQobGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBleGlzdGluZy5wdXNoKGxpc3RlbmVyKTtcbiAgICB9XG5cbiAgICAvLyBDaGVjayBmb3IgbGlzdGVuZXIgbGVha1xuICAgIG0gPSBfZ2V0TWF4TGlzdGVuZXJzKHRhcmdldCk7XG4gICAgaWYgKG0gPiAwICYmIGV4aXN0aW5nLmxlbmd0aCA+IG0gJiYgIWV4aXN0aW5nLndhcm5lZCkge1xuICAgICAgZXhpc3Rpbmcud2FybmVkID0gdHJ1ZTtcbiAgICAgIC8vIE5vIGVycm9yIGNvZGUgZm9yIHRoaXMgc2luY2UgaXQgaXMgYSBXYXJuaW5nXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1zeW50YXhcbiAgICAgIHZhciB3ID0gbmV3IEVycm9yKCdQb3NzaWJsZSBFdmVudEVtaXR0ZXIgbWVtb3J5IGxlYWsgZGV0ZWN0ZWQuICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGlzdGluZy5sZW5ndGggKyAnICcgKyBTdHJpbmcodHlwZSkgKyAnIGxpc3RlbmVycyAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2FkZGVkLiBVc2UgZW1pdHRlci5zZXRNYXhMaXN0ZW5lcnMoKSB0byAnICtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgJ2luY3JlYXNlIGxpbWl0Jyk7XG4gICAgICB3Lm5hbWUgPSAnTWF4TGlzdGVuZXJzRXhjZWVkZWRXYXJuaW5nJztcbiAgICAgIHcuZW1pdHRlciA9IHRhcmdldDtcbiAgICAgIHcudHlwZSA9IHR5cGU7XG4gICAgICB3LmNvdW50ID0gZXhpc3RpbmcubGVuZ3RoO1xuICAgICAgUHJvY2Vzc0VtaXRXYXJuaW5nKHcpO1xuICAgIH1cbiAgfVxuXG4gIHJldHVybiB0YXJnZXQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuYWRkTGlzdGVuZXIgPSBmdW5jdGlvbiBhZGRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9uID0gRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lcjtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcikge1xuICAgICAgcmV0dXJuIF9hZGRMaXN0ZW5lcih0aGlzLCB0eXBlLCBsaXN0ZW5lciwgdHJ1ZSk7XG4gICAgfTtcblxuZnVuY3Rpb24gb25jZVdyYXBwZXIoKSB7XG4gIGlmICghdGhpcy5maXJlZCkge1xuICAgIHRoaXMudGFyZ2V0LnJlbW92ZUxpc3RlbmVyKHRoaXMudHlwZSwgdGhpcy53cmFwRm4pO1xuICAgIHRoaXMuZmlyZWQgPSB0cnVlO1xuICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKVxuICAgICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuY2FsbCh0aGlzLnRhcmdldCk7XG4gICAgcmV0dXJuIHRoaXMubGlzdGVuZXIuYXBwbHkodGhpcy50YXJnZXQsIGFyZ3VtZW50cyk7XG4gIH1cbn1cblxuZnVuY3Rpb24gX29uY2VXcmFwKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIpIHtcbiAgdmFyIHN0YXRlID0geyBmaXJlZDogZmFsc2UsIHdyYXBGbjogdW5kZWZpbmVkLCB0YXJnZXQ6IHRhcmdldCwgdHlwZTogdHlwZSwgbGlzdGVuZXI6IGxpc3RlbmVyIH07XG4gIHZhciB3cmFwcGVkID0gb25jZVdyYXBwZXIuYmluZChzdGF0ZSk7XG4gIHdyYXBwZWQubGlzdGVuZXIgPSBsaXN0ZW5lcjtcbiAgc3RhdGUud3JhcEZuID0gd3JhcHBlZDtcbiAgcmV0dXJuIHdyYXBwZWQ7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub25jZSA9IGZ1bmN0aW9uIG9uY2UodHlwZSwgbGlzdGVuZXIpIHtcbiAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG4gIHRoaXMub24odHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gIHJldHVybiB0aGlzO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5wcmVwZW5kT25jZUxpc3RlbmVyID1cbiAgICBmdW5jdGlvbiBwcmVwZW5kT25jZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgICAgIHRoaXMucHJlcGVuZExpc3RlbmVyKHR5cGUsIF9vbmNlV3JhcCh0aGlzLCB0eXBlLCBsaXN0ZW5lcikpO1xuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuLy8gRW1pdHMgYSAncmVtb3ZlTGlzdGVuZXInIGV2ZW50IGlmIGFuZCBvbmx5IGlmIHRoZSBsaXN0ZW5lciB3YXMgcmVtb3ZlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICB2YXIgbGlzdCwgZXZlbnRzLCBwb3NpdGlvbiwgaSwgb3JpZ2luYWxMaXN0ZW5lcjtcblxuICAgICAgY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcik7XG5cbiAgICAgIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcbiAgICAgIGlmIChldmVudHMgPT09IHVuZGVmaW5lZClcbiAgICAgICAgcmV0dXJuIHRoaXM7XG5cbiAgICAgIGxpc3QgPSBldmVudHNbdHlwZV07XG4gICAgICBpZiAobGlzdCA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgaWYgKGxpc3QgPT09IGxpc3RlbmVyIHx8IGxpc3QubGlzdGVuZXIgPT09IGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIGRlbGV0ZSBldmVudHNbdHlwZV07XG4gICAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lcilcbiAgICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBsaXN0Lmxpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmICh0eXBlb2YgbGlzdCAhPT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICBwb3NpdGlvbiA9IC0xO1xuXG4gICAgICAgIGZvciAoaSA9IGxpc3QubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICBpZiAobGlzdFtpXSA9PT0gbGlzdGVuZXIgfHwgbGlzdFtpXS5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgICAgIG9yaWdpbmFsTGlzdGVuZXIgPSBsaXN0W2ldLmxpc3RlbmVyO1xuICAgICAgICAgICAgcG9zaXRpb24gPSBpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uIDwgMClcbiAgICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgICBpZiAocG9zaXRpb24gPT09IDApXG4gICAgICAgICAgbGlzdC5zaGlmdCgpO1xuICAgICAgICBlbHNlIHtcbiAgICAgICAgICBzcGxpY2VPbmUobGlzdCwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGxpc3QubGVuZ3RoID09PSAxKVxuICAgICAgICAgIGV2ZW50c1t0eXBlXSA9IGxpc3RbMF07XG5cbiAgICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciAhPT0gdW5kZWZpbmVkKVxuICAgICAgICAgIHRoaXMuZW1pdCgncmVtb3ZlTGlzdGVuZXInLCB0eXBlLCBvcmlnaW5hbExpc3RlbmVyIHx8IGxpc3RlbmVyKTtcbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vZmYgPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUxpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnJlbW92ZUFsbExpc3RlbmVycyA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlQWxsTGlzdGVuZXJzKHR5cGUpIHtcbiAgICAgIHZhciBsaXN0ZW5lcnMsIGV2ZW50cywgaTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgLy8gbm90IGxpc3RlbmluZyBmb3IgcmVtb3ZlTGlzdGVuZXIsIG5vIG5lZWQgdG8gZW1pdFxuICAgICAgaWYgKGV2ZW50cy5yZW1vdmVMaXN0ZW5lciA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIH0gZWxzZSBpZiAoZXZlbnRzW3R5cGVdICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICBpZiAoLS10aGlzLl9ldmVudHNDb3VudCA9PT0gMClcbiAgICAgICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgICAgZWxzZVxuICAgICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgIH1cblxuICAgICAgLy8gZW1pdCByZW1vdmVMaXN0ZW5lciBmb3IgYWxsIGxpc3RlbmVycyBvbiBhbGwgZXZlbnRzXG4gICAgICBpZiAoYXJndW1lbnRzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGV2ZW50cyk7XG4gICAgICAgIHZhciBrZXk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgKytpKSB7XG4gICAgICAgICAga2V5ID0ga2V5c1tpXTtcbiAgICAgICAgICBpZiAoa2V5ID09PSAncmVtb3ZlTGlzdGVuZXInKSBjb250aW51ZTtcbiAgICAgICAgICB0aGlzLnJlbW92ZUFsbExpc3RlbmVycyhrZXkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKCdyZW1vdmVMaXN0ZW5lcicpO1xuICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICBsaXN0ZW5lcnMgPSBldmVudHNbdHlwZV07XG5cbiAgICAgIGlmICh0eXBlb2YgbGlzdGVuZXJzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzKTtcbiAgICAgIH0gZWxzZSBpZiAobGlzdGVuZXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgLy8gTElGTyBvcmRlclxuICAgICAgICBmb3IgKGkgPSBsaXN0ZW5lcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICB0aGlzLnJlbW92ZUxpc3RlbmVyKHR5cGUsIGxpc3RlbmVyc1tpXSk7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgcmV0dXJuIHRoaXM7XG4gICAgfTtcblxuZnVuY3Rpb24gX2xpc3RlbmVycyh0YXJnZXQsIHR5cGUsIHVud3JhcCkge1xuICB2YXIgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcbiAgaWYgKGV2bGlzdGVuZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gW107XG5cbiAgaWYgKHR5cGVvZiBldmxpc3RlbmVyID09PSAnZnVuY3Rpb24nKVxuICAgIHJldHVybiB1bndyYXAgPyBbZXZsaXN0ZW5lci5saXN0ZW5lciB8fCBldmxpc3RlbmVyXSA6IFtldmxpc3RlbmVyXTtcblxuICByZXR1cm4gdW53cmFwID9cbiAgICB1bndyYXBMaXN0ZW5lcnMoZXZsaXN0ZW5lcikgOiBhcnJheUNsb25lKGV2bGlzdGVuZXIsIGV2bGlzdGVuZXIubGVuZ3RoKTtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5saXN0ZW5lcnMgPSBmdW5jdGlvbiBsaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCB0cnVlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmF3TGlzdGVuZXJzID0gZnVuY3Rpb24gcmF3TGlzdGVuZXJzKHR5cGUpIHtcbiAgcmV0dXJuIF9saXN0ZW5lcnModGhpcywgdHlwZSwgZmFsc2UpO1xufTtcblxuRXZlbnRFbWl0dGVyLmxpc3RlbmVyQ291bnQgPSBmdW5jdGlvbihlbWl0dGVyLCB0eXBlKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5saXN0ZW5lckNvdW50ID09PSAnZnVuY3Rpb24nKSB7XG4gICAgcmV0dXJuIGVtaXR0ZXIubGlzdGVuZXJDb3VudCh0eXBlKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbGlzdGVuZXJDb3VudC5jYWxsKGVtaXR0ZXIsIHR5cGUpO1xuICB9XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVyQ291bnQgPSBsaXN0ZW5lckNvdW50O1xuZnVuY3Rpb24gbGlzdGVuZXJDb3VudCh0eXBlKSB7XG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG5cbiAgaWYgKGV2ZW50cyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgdmFyIGV2bGlzdGVuZXIgPSBldmVudHNbdHlwZV07XG5cbiAgICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH0gZWxzZSBpZiAoZXZsaXN0ZW5lciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZXZsaXN0ZW5lci5sZW5ndGg7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIDA7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZXZlbnROYW1lcyA9IGZ1bmN0aW9uIGV2ZW50TmFtZXMoKSB7XG4gIHJldHVybiB0aGlzLl9ldmVudHNDb3VudCA+IDAgPyBSZWZsZWN0T3duS2V5cyh0aGlzLl9ldmVudHMpIDogW107XG59O1xuXG5mdW5jdGlvbiBhcnJheUNsb25lKGFyciwgbikge1xuICB2YXIgY29weSA9IG5ldyBBcnJheShuKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBuOyArK2kpXG4gICAgY29weVtpXSA9IGFycltpXTtcbiAgcmV0dXJuIGNvcHk7XG59XG5cbmZ1bmN0aW9uIHNwbGljZU9uZShsaXN0LCBpbmRleCkge1xuICBmb3IgKDsgaW5kZXggKyAxIDwgbGlzdC5sZW5ndGg7IGluZGV4KyspXG4gICAgbGlzdFtpbmRleF0gPSBsaXN0W2luZGV4ICsgMV07XG4gIGxpc3QucG9wKCk7XG59XG5cbmZ1bmN0aW9uIHVud3JhcExpc3RlbmVycyhhcnIpIHtcbiAgdmFyIHJldCA9IG5ldyBBcnJheShhcnIubGVuZ3RoKTtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCByZXQubGVuZ3RoOyArK2kpIHtcbiAgICByZXRbaV0gPSBhcnJbaV0ubGlzdGVuZXIgfHwgYXJyW2ldO1xuICB9XG4gIHJldHVybiByZXQ7XG59XG5cbmZ1bmN0aW9uIG9uY2UoZW1pdHRlciwgbmFtZSkge1xuICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgIGZ1bmN0aW9uIGVycm9yTGlzdGVuZXIoZXJyKSB7XG4gICAgICBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyKG5hbWUsIHJlc29sdmVyKTtcbiAgICAgIHJlamVjdChlcnIpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIHJlc29sdmVyKCkge1xuICAgICAgaWYgKHR5cGVvZiBlbWl0dGVyLnJlbW92ZUxpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIoJ2Vycm9yJywgZXJyb3JMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICByZXNvbHZlKFtdLnNsaWNlLmNhbGwoYXJndW1lbnRzKSk7XG4gICAgfTtcblxuICAgIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCByZXNvbHZlciwgeyBvbmNlOiB0cnVlIH0pO1xuICAgIGlmIChuYW1lICE9PSAnZXJyb3InKSB7XG4gICAgICBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBlcnJvckxpc3RlbmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgfVxuICB9KTtcbn1cblxuZnVuY3Rpb24gYWRkRXJyb3JIYW5kbGVySWZFdmVudEVtaXR0ZXIoZW1pdHRlciwgaGFuZGxlciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsICdlcnJvcicsIGhhbmRsZXIsIGZsYWdzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgbmFtZSwgbGlzdGVuZXIsIGZsYWdzKSB7XG4gIGlmICh0eXBlb2YgZW1pdHRlci5vbiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICBlbWl0dGVyLm9uY2UobmFtZSwgbGlzdGVuZXIpO1xuICAgIH0gZWxzZSB7XG4gICAgICBlbWl0dGVyLm9uKG5hbWUsIGxpc3RlbmVyKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAodHlwZW9mIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgIC8vIEV2ZW50VGFyZ2V0IGRvZXMgbm90IGhhdmUgYGVycm9yYCBldmVudCBzZW1hbnRpY3MgbGlrZSBOb2RlXG4gICAgLy8gRXZlbnRFbWl0dGVycywgd2UgZG8gbm90IGxpc3RlbiBmb3IgYGVycm9yYCBldmVudHMgaGVyZS5cbiAgICBlbWl0dGVyLmFkZEV2ZW50TGlzdGVuZXIobmFtZSwgZnVuY3Rpb24gd3JhcExpc3RlbmVyKGFyZykge1xuICAgICAgLy8gSUUgZG9lcyBub3QgaGF2ZSBidWlsdGluIGB7IG9uY2U6IHRydWUgfWAgc3VwcG9ydCBzbyB3ZVxuICAgICAgLy8gaGF2ZSB0byBkbyBpdCBtYW51YWxseS5cbiAgICAgIGlmIChmbGFncy5vbmNlKSB7XG4gICAgICAgIGVtaXR0ZXIucmVtb3ZlRXZlbnRMaXN0ZW5lcihuYW1lLCB3cmFwTGlzdGVuZXIpO1xuICAgICAgfVxuICAgICAgbGlzdGVuZXIoYXJnKTtcbiAgICB9KTtcbiAgfSBlbHNlIHtcbiAgICB0aHJvdyBuZXcgVHlwZUVycm9yKCdUaGUgXCJlbWl0dGVyXCIgYXJndW1lbnQgbXVzdCBiZSBvZiB0eXBlIEV2ZW50RW1pdHRlci4gUmVjZWl2ZWQgdHlwZSAnICsgdHlwZW9mIGVtaXR0ZXIpO1xuICB9XG59XG4iLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikgeyBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHsgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7IHZhciBvID0gclt0XTsgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIF90b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHsgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogITEgfSksIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi4vdXRpbHMvbG9nLmpzXCI7XG52YXIgV2ViU29ja2V0Q2xpZW50ID0gLyojX19QVVJFX18qL2Z1bmN0aW9uICgpIHtcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAgICovXG4gIGZ1bmN0aW9uIFdlYlNvY2tldENsaWVudCh1cmwpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2ViU29ja2V0Q2xpZW50KTtcbiAgICB0aGlzLmNsaWVudCA9IG5ldyBXZWJTb2NrZXQodXJsKTtcbiAgICB0aGlzLmNsaWVudC5vbmVycm9yID0gZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICBsb2cuZXJyb3IoZXJyb3IpO1xuICAgIH07XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICovXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoV2ViU29ja2V0Q2xpZW50LCBbe1xuICAgIGtleTogXCJvbk9wZW5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25PcGVuKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ub3BlbiA9IGY7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvbkNsb3NlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uQ2xvc2UoZikge1xuICAgICAgdGhpcy5jbGllbnQub25jbG9zZSA9IGY7XG4gICAgfVxuXG4gICAgLy8gY2FsbCBmIHdpdGggdGhlIG1lc3NhZ2Ugc3RyaW5nIGFzIHRoZSBmaXJzdCBhcmd1bWVudFxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7KC4uLmFyZ3M6IGFueVtdKSA9PiB2b2lkfSBmXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwib25NZXNzYWdlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIG9uTWVzc2FnZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbm1lc3NhZ2UgPSBmdW5jdGlvbiAoZSkge1xuICAgICAgICBmKGUuZGF0YSk7XG4gICAgICB9O1xuICAgIH1cbiAgfV0pO1xufSgpO1xuZXhwb3J0IHsgV2ViU29ja2V0Q2xpZW50IGFzIGRlZmF1bHQgfTsiLCJmdW5jdGlvbiBvd25LZXlzKGUsIHIpIHsgdmFyIHQgPSBPYmplY3Qua2V5cyhlKTsgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHsgdmFyIG8gPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKGUpOyByICYmIChvID0gby5maWx0ZXIoZnVuY3Rpb24gKHIpIHsgcmV0dXJuIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoZSwgcikuZW51bWVyYWJsZTsgfSkpLCB0LnB1c2guYXBwbHkodCwgbyk7IH0gcmV0dXJuIHQ7IH1cbmZ1bmN0aW9uIF9vYmplY3RTcHJlYWQoZSkgeyBmb3IgKHZhciByID0gMTsgciA8IGFyZ3VtZW50cy5sZW5ndGg7IHIrKykgeyB2YXIgdCA9IG51bGwgIT0gYXJndW1lbnRzW3JdID8gYXJndW1lbnRzW3JdIDoge307IHIgJSAyID8gb3duS2V5cyhPYmplY3QodCksICEwKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0W3JdKTsgfSkgOiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0aWVzKGUsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzKHQpKSA6IG93bktleXMoT2JqZWN0KHQpKS5mb3JFYWNoKGZ1bmN0aW9uIChyKSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHQsIHIpKTsgfSk7IH0gcmV0dXJuIGU7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0eShlLCByLCB0KSB7IHJldHVybiAociA9IF90b1Byb3BlcnR5S2V5KHIpKSBpbiBlID8gT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIHsgdmFsdWU6IHQsIGVudW1lcmFibGU6ICEwLCBjb25maWd1cmFibGU6ICEwLCB3cml0YWJsZTogITAgfSkgOiBlW3JdID0gdCwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbi8qIGdsb2JhbCBfX3Jlc291cmNlUXVlcnksIF9fd2VicGFja19oYXNoX18gKi9cbi8vLyA8cmVmZXJlbmNlIHR5cGVzPVwid2VicGFjay9tb2R1bGVcIiAvPlxuaW1wb3J0IHdlYnBhY2tIb3RMb2cgZnJvbSBcIndlYnBhY2svaG90L2xvZy5qc1wiO1xuaW1wb3J0IGhvdEVtaXR0ZXIgZnJvbSBcIndlYnBhY2svaG90L2VtaXR0ZXIuanNcIjtcbmltcG9ydCBzb2NrZXQgZnJvbSBcIi4vc29ja2V0LmpzXCI7XG5pbXBvcnQgeyBmb3JtYXRQcm9ibGVtLCBjcmVhdGVPdmVybGF5IH0gZnJvbSBcIi4vb3ZlcmxheS5qc1wiO1xuaW1wb3J0IHsgbG9nLCBzZXRMb2dMZXZlbCB9IGZyb20gXCIuL3V0aWxzL2xvZy5qc1wiO1xuaW1wb3J0IHNlbmRNZXNzYWdlIGZyb20gXCIuL3V0aWxzL3NlbmRNZXNzYWdlLmpzXCI7XG5pbXBvcnQgeyBpc1Byb2dyZXNzU3VwcG9ydGVkLCBkZWZpbmVQcm9ncmVzc0VsZW1lbnQgfSBmcm9tIFwiLi9wcm9ncmVzcy5qc1wiO1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE92ZXJsYXlPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCAoZXJyb3I6IEVycm9yKSA9PiBib29sZWFufSBbd2FybmluZ3NdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCAoZXJyb3I6IEVycm9yKSA9PiBib29sZWFufSBbZXJyb3JzXVxuICogQHByb3BlcnR5IHtib29sZWFuIHwgKGVycm9yOiBFcnJvcikgPT4gYm9vbGVhbn0gW3J1bnRpbWVFcnJvcnNdXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3RydXN0ZWRUeXBlc1BvbGljeU5hbWVdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGhvdFxuICogQHByb3BlcnR5IHtib29sZWFufSBsaXZlUmVsb2FkXG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IHByb2dyZXNzXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCBPdmVybGF5T3B0aW9uc30gb3ZlcmxheVxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtsb2dnaW5nXVxuICogQHByb3BlcnR5IHtudW1iZXJ9IFtyZWNvbm5lY3RdXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdGF0dXNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaXNVbmxvYWRpbmdcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBjdXJyZW50SGFzaFxuICogQHByb3BlcnR5IHtzdHJpbmd9IFtwcmV2aW91c0hhc2hdXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge2Jvb2xlYW4gfCB7IHdhcm5pbmdzPzogYm9vbGVhbiB8IHN0cmluZzsgZXJyb3JzPzogYm9vbGVhbiB8IHN0cmluZzsgcnVudGltZUVycm9ycz86IGJvb2xlYW4gfCBzdHJpbmc7IH19IG92ZXJsYXlPcHRpb25zXG4gKi9cbnZhciBkZWNvZGVPdmVybGF5T3B0aW9ucyA9IGZ1bmN0aW9uIGRlY29kZU92ZXJsYXlPcHRpb25zKG92ZXJsYXlPcHRpb25zKSB7XG4gIGlmIChfdHlwZW9mKG92ZXJsYXlPcHRpb25zKSA9PT0gXCJvYmplY3RcIikge1xuICAgIFtcIndhcm5pbmdzXCIsIFwiZXJyb3JzXCIsIFwicnVudGltZUVycm9yc1wiXS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wZXJ0eSkge1xuICAgICAgaWYgKHR5cGVvZiBvdmVybGF5T3B0aW9uc1twcm9wZXJ0eV0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIG92ZXJsYXlGaWx0ZXJGdW5jdGlvblN0cmluZyA9IGRlY29kZVVSSUNvbXBvbmVudChvdmVybGF5T3B0aW9uc1twcm9wZXJ0eV0pO1xuXG4gICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXctZnVuY1xuICAgICAgICBvdmVybGF5T3B0aW9uc1twcm9wZXJ0eV0gPSBuZXcgRnVuY3Rpb24oXCJtZXNzYWdlXCIsIFwidmFyIGNhbGxiYWNrID0gXCIuY29uY2F0KG92ZXJsYXlGaWx0ZXJGdW5jdGlvblN0cmluZywgXCJcXG4gICAgICAgIHJldHVybiBjYWxsYmFjayhtZXNzYWdlKVwiKSk7XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG5cbi8qKlxuICogQHR5cGUge1N0YXR1c31cbiAqL1xudmFyIHN0YXR1cyA9IHtcbiAgaXNVbmxvYWRpbmc6IGZhbHNlLFxuICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgY2FtZWxjYXNlXG4gIGN1cnJlbnRIYXNoOiBfX3dlYnBhY2tfaGFzaF9fXG59O1xuXG4vKipcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnZhciBnZXRDdXJyZW50U2NyaXB0U291cmNlID0gZnVuY3Rpb24gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpIHtcbiAgLy8gYGRvY3VtZW50LmN1cnJlbnRTY3JpcHRgIGlzIHRoZSBtb3N0IGFjY3VyYXRlIHdheSB0byBmaW5kIHRoZSBjdXJyZW50IHNjcmlwdCxcbiAgLy8gYnV0IGlzIG5vdCBzdXBwb3J0ZWQgaW4gYWxsIGJyb3dzZXJzLlxuICBpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdCkge1xuICAgIHJldHVybiBkb2N1bWVudC5jdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfVxuXG4gIC8vIEZhbGxiYWNrIHRvIGdldHRpbmcgYWxsIHNjcmlwdHMgcnVubmluZyBpbiB0aGUgZG9jdW1lbnQuXG4gIHZhciBzY3JpcHRFbGVtZW50cyA9IGRvY3VtZW50LnNjcmlwdHMgfHwgW107XG4gIHZhciBzY3JpcHRFbGVtZW50c1dpdGhTcmMgPSBBcnJheS5wcm90b3R5cGUuZmlsdGVyLmNhbGwoc2NyaXB0RWxlbWVudHMsIGZ1bmN0aW9uIChlbGVtZW50KSB7XG4gICAgcmV0dXJuIGVsZW1lbnQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9KTtcbiAgaWYgKHNjcmlwdEVsZW1lbnRzV2l0aFNyYy5sZW5ndGggPiAwKSB7XG4gICAgdmFyIGN1cnJlbnRTY3JpcHQgPSBzY3JpcHRFbGVtZW50c1dpdGhTcmNbc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCAtIDFdO1xuICAgIHJldHVybiBjdXJyZW50U2NyaXB0LmdldEF0dHJpYnV0ZShcInNyY1wiKTtcbiAgfVxuXG4gIC8vIEZhaWwgYXMgdGhlcmUgd2FzIG5vIHNjcmlwdCB0byB1c2UuXG4gIHRocm93IG5ldyBFcnJvcihcIlt3ZWJwYWNrLWRldi1zZXJ2ZXJdIEZhaWxlZCB0byBnZXQgY3VycmVudCBzY3JpcHQgc291cmNlLlwiKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHJlc291cmNlUXVlcnlcbiAqIEByZXR1cm5zIHt7IFtrZXk6IHN0cmluZ106IHN0cmluZyB8IGJvb2xlYW4gfX1cbiAqL1xudmFyIHBhcnNlVVJMID0gZnVuY3Rpb24gcGFyc2VVUkwocmVzb3VyY2VRdWVyeSkge1xuICAvKiogQHR5cGUge3sgW2tleTogc3RyaW5nXTogc3RyaW5nIH19ICovXG4gIHZhciByZXN1bHQgPSB7fTtcbiAgaWYgKHR5cGVvZiByZXNvdXJjZVF1ZXJ5ID09PSBcInN0cmluZ1wiICYmIHJlc291cmNlUXVlcnkgIT09IFwiXCIpIHtcbiAgICB2YXIgc2VhcmNoUGFyYW1zID0gcmVzb3VyY2VRdWVyeS5zbGljZSgxKS5zcGxpdChcIiZcIik7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzZWFyY2hQYXJhbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIHZhciBwYWlyID0gc2VhcmNoUGFyYW1zW2ldLnNwbGl0KFwiPVwiKTtcbiAgICAgIHJlc3VsdFtwYWlyWzBdXSA9IGRlY29kZVVSSUNvbXBvbmVudChwYWlyWzFdKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgLy8gRWxzZSwgZ2V0IHRoZSB1cmwgZnJvbSB0aGUgPHNjcmlwdD4gdGhpcyBmaWxlIHdhcyBjYWxsZWQgd2l0aC5cbiAgICB2YXIgc2NyaXB0U291cmNlID0gZ2V0Q3VycmVudFNjcmlwdFNvdXJjZSgpO1xuICAgIHZhciBzY3JpcHRTb3VyY2VVUkw7XG4gICAgdHJ5IHtcbiAgICAgIC8vIFRoZSBwbGFjZWhvbGRlciBgYmFzZVVSTGAgd2l0aCBgd2luZG93LmxvY2F0aW9uLmhyZWZgLFxuICAgICAgLy8gaXMgdG8gYWxsb3cgcGFyc2luZyBvZiBwYXRoLXJlbGF0aXZlIG9yIHByb3RvY29sLXJlbGF0aXZlIFVSTHMsXG4gICAgICAvLyBhbmQgd2lsbCBoYXZlIG5vIGVmZmVjdCBpZiBgc2NyaXB0U291cmNlYCBpcyBhIGZ1bGx5IHZhbGlkIFVSTC5cbiAgICAgIHNjcmlwdFNvdXJjZVVSTCA9IG5ldyBVUkwoc2NyaXB0U291cmNlLCBzZWxmLmxvY2F0aW9uLmhyZWYpO1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAvLyBVUkwgcGFyc2luZyBmYWlsZWQsIGRvIG5vdGhpbmcuXG4gICAgICAvLyBXZSB3aWxsIHN0aWxsIHByb2NlZWQgdG8gc2VlIGlmIHdlIGNhbiByZWNvdmVyIHVzaW5nIGByZXNvdXJjZVF1ZXJ5YFxuICAgIH1cbiAgICBpZiAoc2NyaXB0U291cmNlVVJMKSB7XG4gICAgICByZXN1bHQgPSBzY3JpcHRTb3VyY2VVUkw7XG4gICAgICByZXN1bHQuZnJvbUN1cnJlbnRTY3JpcHQgPSB0cnVlO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufTtcbnZhciBwYXJzZWRSZXNvdXJjZVF1ZXJ5ID0gcGFyc2VVUkwoX19yZXNvdXJjZVF1ZXJ5KTtcbnZhciBlbmFibGVkRmVhdHVyZXMgPSB7XG4gIFwiSG90IE1vZHVsZSBSZXBsYWNlbWVudFwiOiBmYWxzZSxcbiAgXCJMaXZlIFJlbG9hZGluZ1wiOiBmYWxzZSxcbiAgUHJvZ3Jlc3M6IGZhbHNlLFxuICBPdmVybGF5OiBmYWxzZVxufTtcblxuLyoqIEB0eXBlIHtPcHRpb25zfSAqL1xudmFyIG9wdGlvbnMgPSB7XG4gIGhvdDogZmFsc2UsXG4gIGxpdmVSZWxvYWQ6IGZhbHNlLFxuICBwcm9ncmVzczogZmFsc2UsXG4gIG92ZXJsYXk6IGZhbHNlXG59O1xuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkuaG90ID09PSBcInRydWVcIikge1xuICBvcHRpb25zLmhvdCA9IHRydWU7XG4gIGVuYWJsZWRGZWF0dXJlc1tcIkhvdCBNb2R1bGUgUmVwbGFjZW1lbnRcIl0gPSB0cnVlO1xufVxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnlbXCJsaXZlLXJlbG9hZFwiXSA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5saXZlUmVsb2FkID0gdHJ1ZTtcbiAgZW5hYmxlZEZlYXR1cmVzW1wiTGl2ZSBSZWxvYWRpbmdcIl0gPSB0cnVlO1xufVxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkucHJvZ3Jlc3MgPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMucHJvZ3Jlc3MgPSB0cnVlO1xuICBlbmFibGVkRmVhdHVyZXMuUHJvZ3Jlc3MgPSB0cnVlO1xufVxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkub3ZlcmxheSkge1xuICB0cnkge1xuICAgIG9wdGlvbnMub3ZlcmxheSA9IEpTT04ucGFyc2UocGFyc2VkUmVzb3VyY2VRdWVyeS5vdmVybGF5KTtcbiAgfSBjYXRjaCAoZSkge1xuICAgIGxvZy5lcnJvcihcIkVycm9yIHBhcnNpbmcgb3ZlcmxheSBvcHRpb25zIGZyb20gcmVzb3VyY2UgcXVlcnk6XCIsIGUpO1xuICB9XG5cbiAgLy8gRmlsbCBpbiBkZWZhdWx0IFwidHJ1ZVwiIHBhcmFtcyBmb3IgcGFydGlhbGx5LXNwZWNpZmllZCBvYmplY3RzLlxuICBpZiAoX3R5cGVvZihvcHRpb25zLm92ZXJsYXkpID09PSBcIm9iamVjdFwiKSB7XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gX29iamVjdFNwcmVhZCh7XG4gICAgICBlcnJvcnM6IHRydWUsXG4gICAgICB3YXJuaW5nczogdHJ1ZSxcbiAgICAgIHJ1bnRpbWVFcnJvcnM6IHRydWVcbiAgICB9LCBvcHRpb25zLm92ZXJsYXkpO1xuICAgIGRlY29kZU92ZXJsYXlPcHRpb25zKG9wdGlvbnMub3ZlcmxheSk7XG4gIH1cbiAgZW5hYmxlZEZlYXR1cmVzLk92ZXJsYXkgPSBvcHRpb25zLm92ZXJsYXkgIT09IGZhbHNlO1xufVxuaWYgKHBhcnNlZFJlc291cmNlUXVlcnkubG9nZ2luZykge1xuICBvcHRpb25zLmxvZ2dpbmcgPSBwYXJzZWRSZXNvdXJjZVF1ZXJ5LmxvZ2dpbmc7XG59XG5pZiAodHlwZW9mIHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gIG9wdGlvbnMucmVjb25uZWN0ID0gTnVtYmVyKHBhcnNlZFJlc291cmNlUXVlcnkucmVjb25uZWN0KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbGV2ZWxcbiAqL1xudmFyIHNldEFsbExvZ0xldmVsID0gZnVuY3Rpb24gc2V0QWxsTG9nTGV2ZWwobGV2ZWwpIHtcbiAgLy8gVGhpcyBpcyBuZWVkZWQgYmVjYXVzZSB0aGUgSE1SIGxvZ2dlciBvcGVyYXRlIHNlcGFyYXRlbHkgZnJvbSBkZXYgc2VydmVyIGxvZ2dlclxuICB3ZWJwYWNrSG90TG9nLnNldExvZ0xldmVsKGxldmVsID09PSBcInZlcmJvc2VcIiB8fCBsZXZlbCA9PT0gXCJsb2dcIiA/IFwiaW5mb1wiIDogbGV2ZWwpO1xuICBzZXRMb2dMZXZlbChsZXZlbCk7XG59O1xuaWYgKG9wdGlvbnMubG9nZ2luZykge1xuICBzZXRBbGxMb2dMZXZlbChvcHRpb25zLmxvZ2dpbmcpO1xufVxudmFyIGxvZ0VuYWJsZWRGZWF0dXJlcyA9IGZ1bmN0aW9uIGxvZ0VuYWJsZWRGZWF0dXJlcyhmZWF0dXJlcykge1xuICB2YXIgbGlzdEVuYWJsZWRGZWF0dXJlcyA9IE9iamVjdC5rZXlzKGZlYXR1cmVzKTtcbiAgaWYgKCFmZWF0dXJlcyB8fCBsaXN0RW5hYmxlZEZlYXR1cmVzLmxlbmd0aCA9PT0gMCkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgbG9nU3RyaW5nID0gXCJTZXJ2ZXIgc3RhcnRlZDpcIjtcblxuICAvLyBTZXJ2ZXIgc3RhcnRlZDogSG90IE1vZHVsZSBSZXBsYWNlbWVudCBlbmFibGVkLCBMaXZlIFJlbG9hZGluZyBlbmFibGVkLCBPdmVybGF5IGRpc2FibGVkLlxuICBmb3IgKHZhciBpID0gMDsgaSA8IGxpc3RFbmFibGVkRmVhdHVyZXMubGVuZ3RoOyBpKyspIHtcbiAgICB2YXIga2V5ID0gbGlzdEVuYWJsZWRGZWF0dXJlc1tpXTtcbiAgICBsb2dTdHJpbmcgKz0gXCIgXCIuY29uY2F0KGtleSwgXCIgXCIpLmNvbmNhdChmZWF0dXJlc1trZXldID8gXCJlbmFibGVkXCIgOiBcImRpc2FibGVkXCIsIFwiLFwiKTtcbiAgfVxuICAvLyByZXBsYWNlIGxhc3QgY29tbWEgd2l0aCBhIHBlcmlvZFxuICBsb2dTdHJpbmcgPSBsb2dTdHJpbmcuc2xpY2UoMCwgLTEpLmNvbmNhdChcIi5cIik7XG4gIGxvZy5pbmZvKGxvZ1N0cmluZyk7XG59O1xubG9nRW5hYmxlZEZlYXR1cmVzKGVuYWJsZWRGZWF0dXJlcyk7XG5zZWxmLmFkZEV2ZW50TGlzdGVuZXIoXCJiZWZvcmV1bmxvYWRcIiwgZnVuY3Rpb24gKCkge1xuICBzdGF0dXMuaXNVbmxvYWRpbmcgPSB0cnVlO1xufSk7XG52YXIgb3ZlcmxheSA9IHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIgPyBjcmVhdGVPdmVybGF5KF90eXBlb2Yob3B0aW9ucy5vdmVybGF5KSA9PT0gXCJvYmplY3RcIiA/IHtcbiAgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZTogb3B0aW9ucy5vdmVybGF5LnRydXN0ZWRUeXBlc1BvbGljeU5hbWUsXG4gIGNhdGNoUnVudGltZUVycm9yOiBvcHRpb25zLm92ZXJsYXkucnVudGltZUVycm9yc1xufSA6IHtcbiAgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZTogZmFsc2UsXG4gIGNhdGNoUnVudGltZUVycm9yOiBvcHRpb25zLm92ZXJsYXlcbn0pIDoge1xuICBzZW5kOiBmdW5jdGlvbiBzZW5kKCkge31cbn07XG5cbi8qKlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiBAcGFyYW0ge1N0YXR1c30gY3VycmVudFN0YXR1c1xuICovXG52YXIgcmVsb2FkQXBwID0gZnVuY3Rpb24gcmVsb2FkQXBwKF9yZWYsIGN1cnJlbnRTdGF0dXMpIHtcbiAgdmFyIGhvdCA9IF9yZWYuaG90LFxuICAgIGxpdmVSZWxvYWQgPSBfcmVmLmxpdmVSZWxvYWQ7XG4gIGlmIChjdXJyZW50U3RhdHVzLmlzVW5sb2FkaW5nKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBjdXJyZW50SGFzaCA9IGN1cnJlbnRTdGF0dXMuY3VycmVudEhhc2gsXG4gICAgcHJldmlvdXNIYXNoID0gY3VycmVudFN0YXR1cy5wcmV2aW91c0hhc2g7XG4gIHZhciBpc0luaXRpYWwgPSBjdXJyZW50SGFzaC5pbmRleE9mKC8qKiBAdHlwZSB7c3RyaW5nfSAqL3ByZXZpb3VzSGFzaCkgPj0gMDtcbiAgaWYgKGlzSW5pdGlhbCkge1xuICAgIHJldHVybjtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge1dpbmRvd30gcm9vdFdpbmRvd1xuICAgKiBAcGFyYW0ge251bWJlcn0gaW50ZXJ2YWxJZFxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCkge1xuICAgIGNsZWFySW50ZXJ2YWwoaW50ZXJ2YWxJZCk7XG4gICAgbG9nLmluZm8oXCJBcHAgdXBkYXRlZC4gUmVsb2FkaW5nLi4uXCIpO1xuICAgIHJvb3RXaW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG4gIH1cbiAgdmFyIHNlYXJjaCA9IHNlbGYubG9jYXRpb24uc2VhcmNoLnRvTG93ZXJDYXNlKCk7XG4gIHZhciBhbGxvd1RvSG90ID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItaG90PWZhbHNlXCIpID09PSAtMTtcbiAgdmFyIGFsbG93VG9MaXZlUmVsb2FkID0gc2VhcmNoLmluZGV4T2YoXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItbGl2ZS1yZWxvYWQ9ZmFsc2VcIikgPT09IC0xO1xuICBpZiAoaG90ICYmIGFsbG93VG9Ib3QpIHtcbiAgICBsb2cuaW5mbyhcIkFwcCBob3QgdXBkYXRlLi4uXCIpO1xuICAgIGhvdEVtaXR0ZXIuZW1pdChcIndlYnBhY2tIb3RVcGRhdGVcIiwgY3VycmVudFN0YXR1cy5jdXJyZW50SGFzaCk7XG4gICAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmIHNlbGYud2luZG93KSB7XG4gICAgICAvLyBicm9hZGNhc3QgdXBkYXRlIHRvIHdpbmRvd1xuICAgICAgc2VsZi5wb3N0TWVzc2FnZShcIndlYnBhY2tIb3RVcGRhdGVcIi5jb25jYXQoY3VycmVudFN0YXR1cy5jdXJyZW50SGFzaCksIFwiKlwiKTtcbiAgICB9XG4gIH1cbiAgLy8gYWxsb3cgcmVmcmVzaGluZyB0aGUgcGFnZSBvbmx5IGlmIGxpdmVSZWxvYWQgaXNuJ3QgZGlzYWJsZWRcbiAgZWxzZSBpZiAobGl2ZVJlbG9hZCAmJiBhbGxvd1RvTGl2ZVJlbG9hZCkge1xuICAgIHZhciByb290V2luZG93ID0gc2VsZjtcblxuICAgIC8vIHVzZSBwYXJlbnQgd2luZG93IGZvciByZWxvYWQgKGluIGNhc2Ugd2UncmUgaW4gYW4gaWZyYW1lIHdpdGggbm8gdmFsaWQgc3JjKVxuICAgIHZhciBpbnRlcnZhbElkID0gc2VsZi5zZXRJbnRlcnZhbChmdW5jdGlvbiAoKSB7XG4gICAgICBpZiAocm9vdFdpbmRvdy5sb2NhdGlvbi5wcm90b2NvbCAhPT0gXCJhYm91dDpcIikge1xuICAgICAgICAvLyByZWxvYWQgaW1tZWRpYXRlbHkgaWYgcHJvdG9jb2wgaXMgdmFsaWRcbiAgICAgICAgYXBwbHlSZWxvYWQocm9vdFdpbmRvdywgaW50ZXJ2YWxJZCk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByb290V2luZG93ID0gcm9vdFdpbmRvdy5wYXJlbnQ7XG4gICAgICAgIGlmIChyb290V2luZG93LnBhcmVudCA9PT0gcm9vdFdpbmRvdykge1xuICAgICAgICAgIC8vIGlmIHBhcmVudCBlcXVhbHMgY3VycmVudCB3aW5kb3cgd2UndmUgcmVhY2hlZCB0aGUgcm9vdCB3aGljaCB3b3VsZCBjb250aW51ZSBmb3JldmVyLCBzbyB0cmlnZ2VyIGEgcmVsb2FkIGFueXdheXNcbiAgICAgICAgICBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0pO1xuICB9XG59O1xudmFyIGFuc2lSZWdleCA9IG5ldyBSZWdFeHAoW1wiW1xcXFx1MDAxQlxcXFx1MDA5Ql1bW1xcXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSspKnxbYS16QS1aXFxcXGRdKyg/OjtbLWEtekEtWlxcXFxkXFxcXC8jJi46PT8lQH5fXSopKik/XFxcXHUwMDA3KVwiLCBcIig/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnEtdXk9Pjx+XSkpXCJdLmpvaW4oXCJ8XCIpLCBcImdcIik7XG5cbi8qKlxuICpcbiAqIFN0cmlwIFtBTlNJIGVzY2FwZSBjb2Rlc10oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvQU5TSV9lc2NhcGVfY29kZSkgZnJvbSBhIHN0cmluZy5cbiAqIEFkYXB0ZWQgZnJvbSBjb2RlIG9yaWdpbmFsbHkgcmVsZWFzZWQgYnkgU2luZHJlIFNvcmh1c1xuICogTGljZW5zZWQgdGhlIE1JVCBMaWNlbnNlXG4gKlxuICogQHBhcmFtIHtzdHJpbmd9IHN0cmluZ1xuICogQHJldHVybiB7c3RyaW5nfVxuICovXG52YXIgc3RyaXBBbnNpID0gZnVuY3Rpb24gc3RyaXBBbnNpKHN0cmluZykge1xuICBpZiAodHlwZW9mIHN0cmluZyAhPT0gXCJzdHJpbmdcIikge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJFeHBlY3RlZCBhIGBzdHJpbmdgLCBnb3QgYFwiLmNvbmNhdChfdHlwZW9mKHN0cmluZyksIFwiYFwiKSk7XG4gIH1cbiAgcmV0dXJuIHN0cmluZy5yZXBsYWNlKGFuc2lSZWdleCwgXCJcIik7XG59O1xudmFyIG9uU29ja2V0TWVzc2FnZSA9IHtcbiAgaG90OiBmdW5jdGlvbiBob3QoKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnkuaG90ID09PSBcImZhbHNlXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5ob3QgPSB0cnVlO1xuICB9LFxuICBsaXZlUmVsb2FkOiBmdW5jdGlvbiBsaXZlUmVsb2FkKCkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5W1wibGl2ZS1yZWxvYWRcIl0gPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmxpdmVSZWxvYWQgPSB0cnVlO1xuICB9LFxuICBpbnZhbGlkOiBmdW5jdGlvbiBpbnZhbGlkKCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIHVwZGF0ZWQuIFJlY29tcGlsaW5nLi4uXCIpO1xuXG4gICAgLy8gRml4ZXMgIzEwNDIuIG92ZXJsYXkgZG9lc24ndCBjbGVhciBpZiBlcnJvcnMgYXJlIGZpeGVkIGJ1dCB3YXJuaW5ncyByZW1haW4uXG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIkludmFsaWRcIik7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gaGFzaFxuICAgKi9cbiAgaGFzaDogZnVuY3Rpb24gaGFzaChfaGFzaCkge1xuICAgIHN0YXR1cy5wcmV2aW91c0hhc2ggPSBzdGF0dXMuY3VycmVudEhhc2g7XG4gICAgc3RhdHVzLmN1cnJlbnRIYXNoID0gX2hhc2g7XG4gIH0sXG4gIGxvZ2dpbmc6IHNldEFsbExvZ0xldmVsLFxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgb3ZlcmxheTogZnVuY3Rpb24gb3ZlcmxheSh2YWx1ZSkge1xuICAgIGlmICh0eXBlb2YgZG9jdW1lbnQgPT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gdmFsdWU7XG4gICAgZGVjb2RlT3ZlcmxheU9wdGlvbnMob3B0aW9ucy5vdmVybGF5KTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgKi9cbiAgcmVjb25uZWN0OiBmdW5jdGlvbiByZWNvbm5lY3QodmFsdWUpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLnJlY29ubmVjdCA9IHZhbHVlO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZVxuICAgKi9cbiAgcHJvZ3Jlc3M6IGZ1bmN0aW9uIHByb2dyZXNzKHZhbHVlKSB7XG4gICAgb3B0aW9ucy5wcm9ncmVzcyA9IHZhbHVlO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHt7IHBsdWdpbk5hbWU/OiBzdHJpbmcsIHBlcmNlbnQ6IG51bWJlciwgbXNnOiBzdHJpbmcgfX0gZGF0YVxuICAgKi9cbiAgXCJwcm9ncmVzcy11cGRhdGVcIjogZnVuY3Rpb24gcHJvZ3Jlc3NVcGRhdGUoZGF0YSkge1xuICAgIGlmIChvcHRpb25zLnByb2dyZXNzKSB7XG4gICAgICBsb2cuaW5mbyhcIlwiLmNvbmNhdChkYXRhLnBsdWdpbk5hbWUgPyBcIltcIi5jb25jYXQoZGF0YS5wbHVnaW5OYW1lLCBcIl0gXCIpIDogXCJcIikuY29uY2F0KGRhdGEucGVyY2VudCwgXCIlIC0gXCIpLmNvbmNhdChkYXRhLm1zZywgXCIuXCIpKTtcbiAgICB9XG4gICAgaWYgKGlzUHJvZ3Jlc3NTdXBwb3J0ZWQoKSkge1xuICAgICAgaWYgKHR5cGVvZiBvcHRpb25zLnByb2dyZXNzID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIHZhciBwcm9ncmVzcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoXCJ3ZHMtcHJvZ3Jlc3NcIik7XG4gICAgICAgIGlmICghcHJvZ3Jlc3MpIHtcbiAgICAgICAgICBkZWZpbmVQcm9ncmVzc0VsZW1lbnQoKTtcbiAgICAgICAgICBwcm9ncmVzcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJ3ZHMtcHJvZ3Jlc3NcIik7XG4gICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChwcm9ncmVzcyk7XG4gICAgICAgIH1cbiAgICAgICAgcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKFwicHJvZ3Jlc3NcIiwgZGF0YS5wZXJjZW50KTtcbiAgICAgICAgcHJvZ3Jlc3Muc2V0QXR0cmlidXRlKFwidHlwZVwiLCBvcHRpb25zLnByb2dyZXNzKTtcbiAgICAgIH1cbiAgICB9XG4gICAgc2VuZE1lc3NhZ2UoXCJQcm9ncmVzc1wiLCBkYXRhKTtcbiAgfSxcbiAgXCJzdGlsbC1va1wiOiBmdW5jdGlvbiBzdGlsbE9rKCkge1xuICAgIGxvZy5pbmZvKFwiTm90aGluZyBjaGFuZ2VkLlwiKTtcbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiU3RpbGxPa1wiKTtcbiAgfSxcbiAgb2s6IGZ1bmN0aW9uIG9rKCkge1xuICAgIHNlbmRNZXNzYWdlKFwiT2tcIik7XG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICByZWxvYWRBcHAob3B0aW9ucywgc3RhdHVzKTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBmaWxlXG4gICAqL1xuICBcInN0YXRpYy1jaGFuZ2VkXCI6IGZ1bmN0aW9uIHN0YXRpY0NoYW5nZWQoZmlsZSkge1xuICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGZpbGUgPyBcIlxcXCJcIi5jb25jYXQoZmlsZSwgXCJcXFwiXCIpIDogXCJDb250ZW50XCIsIFwiIGZyb20gc3RhdGljIGRpcmVjdG9yeSB3YXMgY2hhbmdlZC4gUmVsb2FkaW5nLi4uXCIpKTtcbiAgICBzZWxmLmxvY2F0aW9uLnJlbG9hZCgpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcltdfSB3YXJuaW5nc1xuICAgKiBAcGFyYW0ge2FueX0gcGFyYW1zXG4gICAqL1xuICB3YXJuaW5nczogZnVuY3Rpb24gd2FybmluZ3MoX3dhcm5pbmdzLCBwYXJhbXMpIHtcbiAgICBsb2cud2FybihcIldhcm5pbmdzIHdoaWxlIGNvbXBpbGluZy5cIik7XG4gICAgdmFyIHByaW50YWJsZVdhcm5pbmdzID0gX3dhcm5pbmdzLm1hcChmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0oXCJ3YXJuaW5nXCIsIGVycm9yKSxcbiAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICBib2R5ID0gX2Zvcm1hdFByb2JsZW0uYm9keTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChoZWFkZXIsIFwiXFxuXCIpLmNvbmNhdChzdHJpcEFuc2koYm9keSkpO1xuICAgIH0pO1xuICAgIHNlbmRNZXNzYWdlKFwiV2FybmluZ3NcIiwgcHJpbnRhYmxlV2FybmluZ3MpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcHJpbnRhYmxlV2FybmluZ3MubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvZy53YXJuKHByaW50YWJsZVdhcm5pbmdzW2ldKTtcbiAgICB9XG4gICAgdmFyIG92ZXJsYXlXYXJuaW5nc1NldHRpbmcgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMub3ZlcmxheSA6IG9wdGlvbnMub3ZlcmxheSAmJiBvcHRpb25zLm92ZXJsYXkud2FybmluZ3M7XG4gICAgaWYgKG92ZXJsYXlXYXJuaW5nc1NldHRpbmcpIHtcbiAgICAgIHZhciB3YXJuaW5nc1RvRGlzcGxheSA9IHR5cGVvZiBvdmVybGF5V2FybmluZ3NTZXR0aW5nID09PSBcImZ1bmN0aW9uXCIgPyBfd2FybmluZ3MuZmlsdGVyKG92ZXJsYXlXYXJuaW5nc1NldHRpbmcpIDogX3dhcm5pbmdzO1xuICAgICAgaWYgKHdhcm5pbmdzVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICAgIHR5cGU6IFwiQlVJTERfRVJST1JcIixcbiAgICAgICAgICBsZXZlbDogXCJ3YXJuaW5nXCIsXG4gICAgICAgICAgbWVzc2FnZXM6IF93YXJuaW5nc1xuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKHBhcmFtcyAmJiBwYXJhbXMucHJldmVudFJlbG9hZGluZykge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZWxvYWRBcHAob3B0aW9ucywgc3RhdHVzKTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7RXJyb3JbXX0gZXJyb3JzXG4gICAqL1xuICBlcnJvcnM6IGZ1bmN0aW9uIGVycm9ycyhfZXJyb3JzKSB7XG4gICAgbG9nLmVycm9yKFwiRXJyb3JzIHdoaWxlIGNvbXBpbGluZy4gUmVsb2FkIHByZXZlbnRlZC5cIik7XG4gICAgdmFyIHByaW50YWJsZUVycm9ycyA9IF9lcnJvcnMubWFwKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtMiA9IGZvcm1hdFByb2JsZW0oXCJlcnJvclwiLCBlcnJvciksXG4gICAgICAgIGhlYWRlciA9IF9mb3JtYXRQcm9ibGVtMi5oZWFkZXIsXG4gICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbTIuYm9keTtcbiAgICAgIHJldHVybiBcIlwiLmNvbmNhdChoZWFkZXIsIFwiXFxuXCIpLmNvbmNhdChzdHJpcEFuc2koYm9keSkpO1xuICAgIH0pO1xuICAgIHNlbmRNZXNzYWdlKFwiRXJyb3JzXCIsIHByaW50YWJsZUVycm9ycyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVFcnJvcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGxvZy5lcnJvcihwcmludGFibGVFcnJvcnNbaV0pO1xuICAgIH1cbiAgICB2YXIgb3ZlcmxheUVycm9yc1NldHRpbmdzID0gdHlwZW9mIG9wdGlvbnMub3ZlcmxheSA9PT0gXCJib29sZWFuXCIgPyBvcHRpb25zLm92ZXJsYXkgOiBvcHRpb25zLm92ZXJsYXkgJiYgb3B0aW9ucy5vdmVybGF5LmVycm9ycztcbiAgICBpZiAob3ZlcmxheUVycm9yc1NldHRpbmdzKSB7XG4gICAgICB2YXIgZXJyb3JzVG9EaXNwbGF5ID0gdHlwZW9mIG92ZXJsYXlFcnJvcnNTZXR0aW5ncyA9PT0gXCJmdW5jdGlvblwiID8gX2Vycm9ycy5maWx0ZXIob3ZlcmxheUVycm9yc1NldHRpbmdzKSA6IF9lcnJvcnM7XG4gICAgICBpZiAoZXJyb3JzVG9EaXNwbGF5Lmxlbmd0aCkge1xuICAgICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICAgIHR5cGU6IFwiQlVJTERfRVJST1JcIixcbiAgICAgICAgICBsZXZlbDogXCJlcnJvclwiLFxuICAgICAgICAgIG1lc3NhZ2VzOiBfZXJyb3JzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7RXJyb3J9IGVycm9yXG4gICAqL1xuICBlcnJvcjogZnVuY3Rpb24gZXJyb3IoX2Vycm9yKSB7XG4gICAgbG9nLmVycm9yKF9lcnJvcik7XG4gIH0sXG4gIGNsb3NlOiBmdW5jdGlvbiBjbG9zZSgpIHtcbiAgICBsb2cuaW5mbyhcIkRpc2Nvbm5lY3RlZCFcIik7XG4gICAgaWYgKG9wdGlvbnMub3ZlcmxheSkge1xuICAgICAgb3ZlcmxheS5zZW5kKHtcbiAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgIH0pO1xuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIkNsb3NlXCIpO1xuICB9XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7eyBwcm90b2NvbD86IHN0cmluZywgYXV0aD86IHN0cmluZywgaG9zdG5hbWU/OiBzdHJpbmcsIHBvcnQ/OiBzdHJpbmcsIHBhdGhuYW1lPzogc3RyaW5nLCBzZWFyY2g/OiBzdHJpbmcsIGhhc2g/OiBzdHJpbmcsIHNsYXNoZXM/OiBib29sZWFuIH19IG9ialVSTFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudmFyIGZvcm1hdFVSTCA9IGZ1bmN0aW9uIGZvcm1hdFVSTChvYmpVUkwpIHtcbiAgdmFyIHByb3RvY29sID0gb2JqVVJMLnByb3RvY29sIHx8IFwiXCI7XG4gIGlmIChwcm90b2NvbCAmJiBwcm90b2NvbC5zdWJzdHIoLTEpICE9PSBcIjpcIikge1xuICAgIHByb3RvY29sICs9IFwiOlwiO1xuICB9XG4gIHZhciBhdXRoID0gb2JqVVJMLmF1dGggfHwgXCJcIjtcbiAgaWYgKGF1dGgpIHtcbiAgICBhdXRoID0gZW5jb2RlVVJJQ29tcG9uZW50KGF1dGgpO1xuICAgIGF1dGggPSBhdXRoLnJlcGxhY2UoLyUzQS9pLCBcIjpcIik7XG4gICAgYXV0aCArPSBcIkBcIjtcbiAgfVxuICB2YXIgaG9zdCA9IFwiXCI7XG4gIGlmIChvYmpVUkwuaG9zdG5hbWUpIHtcbiAgICBob3N0ID0gYXV0aCArIChvYmpVUkwuaG9zdG5hbWUuaW5kZXhPZihcIjpcIikgPT09IC0xID8gb2JqVVJMLmhvc3RuYW1lIDogXCJbXCIuY29uY2F0KG9ialVSTC5ob3N0bmFtZSwgXCJdXCIpKTtcbiAgICBpZiAob2JqVVJMLnBvcnQpIHtcbiAgICAgIGhvc3QgKz0gXCI6XCIuY29uY2F0KG9ialVSTC5wb3J0KTtcbiAgICB9XG4gIH1cbiAgdmFyIHBhdGhuYW1lID0gb2JqVVJMLnBhdGhuYW1lIHx8IFwiXCI7XG4gIGlmIChvYmpVUkwuc2xhc2hlcykge1xuICAgIGhvc3QgPSBcIi8vXCIuY29uY2F0KGhvc3QgfHwgXCJcIik7XG4gICAgaWYgKHBhdGhuYW1lICYmIHBhdGhuYW1lLmNoYXJBdCgwKSAhPT0gXCIvXCIpIHtcbiAgICAgIHBhdGhuYW1lID0gXCIvXCIuY29uY2F0KHBhdGhuYW1lKTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIWhvc3QpIHtcbiAgICBob3N0ID0gXCJcIjtcbiAgfVxuICB2YXIgc2VhcmNoID0gb2JqVVJMLnNlYXJjaCB8fCBcIlwiO1xuICBpZiAoc2VhcmNoICYmIHNlYXJjaC5jaGFyQXQoMCkgIT09IFwiP1wiKSB7XG4gICAgc2VhcmNoID0gXCI/XCIuY29uY2F0KHNlYXJjaCk7XG4gIH1cbiAgdmFyIGhhc2ggPSBvYmpVUkwuaGFzaCB8fCBcIlwiO1xuICBpZiAoaGFzaCAmJiBoYXNoLmNoYXJBdCgwKSAhPT0gXCIjXCIpIHtcbiAgICBoYXNoID0gXCIjXCIuY29uY2F0KGhhc2gpO1xuICB9XG4gIHBhdGhuYW1lID0gcGF0aG5hbWUucmVwbGFjZSgvWz8jXS9nLFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1hdGNoXG4gICAqIEByZXR1cm5zIHtzdHJpbmd9XG4gICAqL1xuICBmdW5jdGlvbiAobWF0Y2gpIHtcbiAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KG1hdGNoKTtcbiAgfSk7XG4gIHNlYXJjaCA9IHNlYXJjaC5yZXBsYWNlKFwiI1wiLCBcIiUyM1wiKTtcbiAgcmV0dXJuIFwiXCIuY29uY2F0KHByb3RvY29sKS5jb25jYXQoaG9zdCkuY29uY2F0KHBhdGhuYW1lKS5jb25jYXQoc2VhcmNoKS5jb25jYXQoaGFzaCk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7VVJMICYgeyBmcm9tQ3VycmVudFNjcmlwdD86IGJvb2xlYW4gfX0gcGFyc2VkVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG52YXIgY3JlYXRlU29ja2V0VVJMID0gZnVuY3Rpb24gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFVSTCkge1xuICB2YXIgaG9zdG5hbWUgPSBwYXJzZWRVUkwuaG9zdG5hbWU7XG5cbiAgLy8gTm9kZS5qcyBtb2R1bGUgcGFyc2VzIGl0IGFzIGA6OmBcbiAgLy8gYG5ldyBVUkwodXJsU3RyaW5nLCBbYmFzZVVSTFN0cmluZ10pYCBwYXJzZXMgaXQgYXMgJ1s6Ol0nXG4gIHZhciBpc0luQWRkckFueSA9IGhvc3RuYW1lID09PSBcIjAuMC4wLjBcIiB8fCBob3N0bmFtZSA9PT0gXCI6OlwiIHx8IGhvc3RuYW1lID09PSBcIls6Ol1cIjtcblxuICAvLyB3aHkgZG8gd2UgbmVlZCB0aGlzIGNoZWNrP1xuICAvLyBob3N0bmFtZSBuL2EgZm9yIGZpbGUgcHJvdG9jb2wgKGV4YW1wbGUsIHdoZW4gdXNpbmcgZWxlY3Ryb24sIGlvbmljKVxuICAvLyBzZWU6IGh0dHBzOi8vZ2l0aHViLmNvbS93ZWJwYWNrL3dlYnBhY2stZGV2LXNlcnZlci9wdWxsLzM4NFxuICBpZiAoaXNJbkFkZHJBbnkgJiYgc2VsZi5sb2NhdGlvbi5ob3N0bmFtZSAmJiBzZWxmLmxvY2F0aW9uLnByb3RvY29sLmluZGV4T2YoXCJodHRwXCIpID09PSAwKSB7XG4gICAgaG9zdG5hbWUgPSBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lO1xuICB9XG4gIHZhciBzb2NrZXRVUkxQcm90b2NvbCA9IHBhcnNlZFVSTC5wcm90b2NvbCB8fCBzZWxmLmxvY2F0aW9uLnByb3RvY29sO1xuXG4gIC8vIFdoZW4gaHR0cHMgaXMgdXNlZCBpbiB0aGUgYXBwLCBzZWN1cmUgd2ViIHNvY2tldHMgYXJlIGFsd2F5cyBuZWNlc3NhcnkgYmVjYXVzZSB0aGUgYnJvd3NlciBkb2Vzbid0IGFjY2VwdCBub24tc2VjdXJlIHdlYiBzb2NrZXRzLlxuICBpZiAoc29ja2V0VVJMUHJvdG9jb2wgPT09IFwiYXV0bzpcIiB8fCBob3N0bmFtZSAmJiBpc0luQWRkckFueSAmJiBzZWxmLmxvY2F0aW9uLnByb3RvY29sID09PSBcImh0dHBzOlwiKSB7XG4gICAgc29ja2V0VVJMUHJvdG9jb2wgPSBzZWxmLmxvY2F0aW9uLnByb3RvY29sO1xuICB9XG4gIHNvY2tldFVSTFByb3RvY29sID0gc29ja2V0VVJMUHJvdG9jb2wucmVwbGFjZSgvXig/Omh0dHB8ListZXh0ZW5zaW9ufGZpbGUpL2ksIFwid3NcIik7XG4gIHZhciBzb2NrZXRVUkxBdXRoID0gXCJcIjtcblxuICAvLyBgbmV3IFVSTCh1cmxTdHJpbmcsIFtiYXNlVVJMc3RyaW5nXSlgIGRvZXNuJ3QgaGF2ZSBgYXV0aGAgcHJvcGVydHlcbiAgLy8gUGFyc2UgYXV0aGVudGljYXRpb24gY3JlZGVudGlhbHMgaW4gY2FzZSB3ZSBuZWVkIHRoZW1cbiAgaWYgKHBhcnNlZFVSTC51c2VybmFtZSkge1xuICAgIHNvY2tldFVSTEF1dGggPSBwYXJzZWRVUkwudXNlcm5hbWU7XG5cbiAgICAvLyBTaW5jZSBIVFRQIGJhc2ljIGF1dGhlbnRpY2F0aW9uIGRvZXMgbm90IGFsbG93IGVtcHR5IHVzZXJuYW1lLFxuICAgIC8vIHdlIG9ubHkgaW5jbHVkZSBwYXNzd29yZCBpZiB0aGUgdXNlcm5hbWUgaXMgbm90IGVtcHR5LlxuICAgIGlmIChwYXJzZWRVUkwucGFzc3dvcmQpIHtcbiAgICAgIC8vIFJlc3VsdDogPHVzZXJuYW1lPjo8cGFzc3dvcmQ+XG4gICAgICBzb2NrZXRVUkxBdXRoID0gc29ja2V0VVJMQXV0aC5jb25jYXQoXCI6XCIsIHBhcnNlZFVSTC5wYXNzd29yZCk7XG4gICAgfVxuICB9XG5cbiAgLy8gSW4gY2FzZSB0aGUgaG9zdCBpcyBhIHJhdyBJUHY2IGFkZHJlc3MsIGl0IGNhbiBiZSBlbmNsb3NlZCBpblxuICAvLyB0aGUgYnJhY2tldHMgYXMgdGhlIGJyYWNrZXRzIGFyZSBuZWVkZWQgaW4gdGhlIGZpbmFsIFVSTCBzdHJpbmcuXG4gIC8vIE5lZWQgdG8gcmVtb3ZlIHRob3NlIGFzIHVybC5mb3JtYXQgYmxpbmRseSBhZGRzIGl0cyBvd24gc2V0IG9mIGJyYWNrZXRzXG4gIC8vIGlmIHRoZSBob3N0IHN0cmluZyBjb250YWlucyBjb2xvbnMuIFRoYXQgd291bGQgbGVhZCB0byBub24td29ya2luZ1xuICAvLyBkb3VibGUgYnJhY2tldHMgKGUuZy4gW1s6Ol1dKSBob3N0XG4gIC8vXG4gIC8vIEFsbCBvZiB0aGVzZSB3ZWIgc29ja2V0IHVybCBwYXJhbXMgYXJlIG9wdGlvbmFsbHkgcGFzc2VkIGluIHRocm91Z2ggcmVzb3VyY2VRdWVyeSxcbiAgLy8gc28gd2UgbmVlZCB0byBmYWxsIGJhY2sgdG8gdGhlIGRlZmF1bHQgaWYgdGhleSBhcmUgbm90IHByb3ZpZGVkXG4gIHZhciBzb2NrZXRVUkxIb3N0bmFtZSA9IChob3N0bmFtZSB8fCBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lIHx8IFwibG9jYWxob3N0XCIpLnJlcGxhY2UoL15cXFsoLiopXFxdJC8sIFwiJDFcIik7XG4gIHZhciBzb2NrZXRVUkxQb3J0ID0gcGFyc2VkVVJMLnBvcnQ7XG4gIGlmICghc29ja2V0VVJMUG9ydCB8fCBzb2NrZXRVUkxQb3J0ID09PSBcIjBcIikge1xuICAgIHNvY2tldFVSTFBvcnQgPSBzZWxmLmxvY2F0aW9uLnBvcnQ7XG4gIH1cblxuICAvLyBJZiBwYXRoIGlzIHByb3ZpZGVkIGl0J2xsIGJlIHBhc3NlZCBpbiB2aWEgdGhlIHJlc291cmNlUXVlcnkgYXMgYVxuICAvLyBxdWVyeSBwYXJhbSBzbyBpdCBoYXMgdG8gYmUgcGFyc2VkIG91dCBvZiB0aGUgcXVlcnlzdHJpbmcgaW4gb3JkZXIgZm9yIHRoZVxuICAvLyBjbGllbnQgdG8gb3BlbiB0aGUgc29ja2V0IHRvIHRoZSBjb3JyZWN0IGxvY2F0aW9uLlxuICB2YXIgc29ja2V0VVJMUGF0aG5hbWUgPSBcIi93c1wiO1xuICBpZiAocGFyc2VkVVJMLnBhdGhuYW1lICYmICFwYXJzZWRVUkwuZnJvbUN1cnJlbnRTY3JpcHQpIHtcbiAgICBzb2NrZXRVUkxQYXRobmFtZSA9IHBhcnNlZFVSTC5wYXRobmFtZTtcbiAgfVxuICByZXR1cm4gZm9ybWF0VVJMKHtcbiAgICBwcm90b2NvbDogc29ja2V0VVJMUHJvdG9jb2wsXG4gICAgYXV0aDogc29ja2V0VVJMQXV0aCxcbiAgICBob3N0bmFtZTogc29ja2V0VVJMSG9zdG5hbWUsXG4gICAgcG9ydDogc29ja2V0VVJMUG9ydCxcbiAgICBwYXRobmFtZTogc29ja2V0VVJMUGF0aG5hbWUsXG4gICAgc2xhc2hlczogdHJ1ZVxuICB9KTtcbn07XG52YXIgc29ja2V0VVJMID0gY3JlYXRlU29ja2V0VVJMKHBhcnNlZFJlc291cmNlUXVlcnkpO1xuc29ja2V0KHNvY2tldFVSTCwgb25Tb2NrZXRNZXNzYWdlLCBvcHRpb25zLnJlY29ubmVjdCk7XG5leHBvcnQgeyBnZXRDdXJyZW50U2NyaXB0U291cmNlLCBwYXJzZVVSTCwgY3JlYXRlU29ja2V0VVJMIH07IiwiLyoqKioqKi8gKGZ1bmN0aW9uKCkgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdFwidXNlIHN0cmljdFwiO1xuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZXNfXyA9ICh7XG5cbi8qKiovIFwiLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL3RhcGFibGUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL3RhcGFibGUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24oX191bnVzZWRfd2VicGFja19tb2R1bGUsIF9fd2VicGFja19leHBvcnRzX18sIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5yKF9fd2VicGFja19leHBvcnRzX18pO1xuLyogaGFybW9ueSBleHBvcnQgKi8gX193ZWJwYWNrX3JlcXVpcmVfXy5kKF9fd2VicGFja19leHBvcnRzX18sIHtcbi8qIGhhcm1vbnkgZXhwb3J0ICovICAgU3luY0JhaWxIb29rOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIGJpbmRpbmcgKi8gU3luY0JhaWxIb29rOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbmZ1bmN0aW9uIFN5bmNCYWlsSG9vaygpIHtcbiAgcmV0dXJuIHtcbiAgICBjYWxsOiBmdW5jdGlvbiBjYWxsKCkge31cbiAgfTtcbn1cblxuLyoqXG4gKiBDbGllbnQgc3R1YiBmb3IgdGFwYWJsZSBTeW5jQmFpbEhvb2tcbiAqL1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9wcmVmZXItZGVmYXVsdC1leHBvcnRcblxuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUpIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuXG5cbmZ1bmN0aW9uIF90eXBlb2Yobykge1xuICBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7XG5cbiAgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gdHlwZW9mIG87XG4gIH0gOiBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgby5jb25zdHJ1Y3RvciA9PT0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgbyAhPT0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvO1xuICB9LCBfdHlwZW9mKG8pO1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBfaXRlcmFibGVUb0FycmF5KHIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBudWxsICE9IHJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikge1xuICBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7XG59XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydGllcyhlLCByKSB7XG4gIGZvciAodmFyIHQgPSAwOyB0IDwgci5sZW5ndGg7IHQrKykge1xuICAgIHZhciBvID0gclt0XTtcbiAgICBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTtcbiAgfVxufVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHtcbiAgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwge1xuICAgIHdyaXRhYmxlOiAhMVxuICB9KSwgZTtcbn1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHtcbiAgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7XG4gIHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7XG59XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikge1xuICBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDtcbiAgdmFyIGUgPSB0Wyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLnRvUHJpbWl0aXZlXTtcbiAgaWYgKHZvaWQgMCAhPT0gZSkge1xuICAgIHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpO1xuICAgIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpO1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTtcbiAgfVxuICByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpO1xufVxudmFyIExvZ1R5cGUgPSBPYmplY3QuZnJlZXplKHtcbiAgZXJyb3I6ICgvKiogQHR5cGUge1wiZXJyb3JcIn0gKi9cImVycm9yXCIpLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICB3YXJuOiAoLyoqIEB0eXBlIHtcIndhcm5cIn0gKi9cIndhcm5cIiksXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGluZm86ICgvKiogQHR5cGUge1wiaW5mb1wifSAqL1wiaW5mb1wiKSxcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgbG9nOiAoLyoqIEB0eXBlIHtcImxvZ1wifSAqL1wibG9nXCIpLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICBkZWJ1ZzogKC8qKiBAdHlwZSB7XCJkZWJ1Z1wifSAqL1wiZGVidWdcIiksXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG5cbiAgdHJhY2U6ICgvKiogQHR5cGUge1widHJhY2VcIn0gKi9cInRyYWNlXCIpLFxuICAvLyBubyBhcmd1bWVudHNcblxuICBncm91cDogKC8qKiBAdHlwZSB7XCJncm91cFwifSAqL1wiZ3JvdXBcIiksXG4gIC8vIFtsYWJlbF1cbiAgZ3JvdXBDb2xsYXBzZWQ6ICgvKiogQHR5cGUge1wiZ3JvdXBDb2xsYXBzZWRcIn0gKi9cImdyb3VwQ29sbGFwc2VkXCIpLFxuICAvLyBbbGFiZWxdXG4gIGdyb3VwRW5kOiAoLyoqIEB0eXBlIHtcImdyb3VwRW5kXCJ9ICovXCJncm91cEVuZFwiKSxcbiAgLy8gW2xhYmVsXVxuXG4gIHByb2ZpbGU6ICgvKiogQHR5cGUge1wicHJvZmlsZVwifSAqL1wicHJvZmlsZVwiKSxcbiAgLy8gW3Byb2ZpbGVOYW1lXVxuICBwcm9maWxlRW5kOiAoLyoqIEB0eXBlIHtcInByb2ZpbGVFbmRcIn0gKi9cInByb2ZpbGVFbmRcIiksXG4gIC8vIFtwcm9maWxlTmFtZV1cblxuICB0aW1lOiAoLyoqIEB0eXBlIHtcInRpbWVcIn0gKi9cInRpbWVcIiksXG4gIC8vIG5hbWUsIHRpbWUgYXMgW3NlY29uZHMsIG5hbm9zZWNvbmRzXVxuXG4gIGNsZWFyOiAoLyoqIEB0eXBlIHtcImNsZWFyXCJ9ICovXCJjbGVhclwiKSxcbiAgLy8gbm8gYXJndW1lbnRzXG4gIHN0YXR1czogKC8qKiBAdHlwZSB7XCJzdGF0dXNcIn0gKi9cInN0YXR1c1wiKSAvLyBtZXNzYWdlLCBhcmd1bWVudHNcbn0pO1xubW9kdWxlLmV4cG9ydHMuTG9nVHlwZSA9IExvZ1R5cGU7XG5cbi8qKiBAdHlwZWRlZiB7dHlwZW9mIExvZ1R5cGVba2V5b2YgdHlwZW9mIExvZ1R5cGVdfSBMb2dUeXBlRW51bSAqL1xuXG52YXIgTE9HX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgcmF3IGxvZyBtZXRob2RcIik7XG52YXIgVElNRVJTX1NZTUJPTCA9ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pKFwid2VicGFjayBsb2dnZXIgdGltZXNcIik7XG52YXIgVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciBhZ2dyZWdhdGVkIHRpbWVzXCIpO1xudmFyIFdlYnBhY2tMb2dnZXIgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHsodHlwZTogTG9nVHlwZUVudW0sIGFyZ3M/OiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZH0gbG9nIGxvZyBmdW5jdGlvblxuICAgKiBAcGFyYW0geyhuYW1lOiBzdHJpbmcgfCAoKCkgPT4gc3RyaW5nKSkgPT4gV2VicGFja0xvZ2dlcn0gZ2V0Q2hpbGRMb2dnZXIgZnVuY3Rpb24gdG8gY3JlYXRlIGNoaWxkIGxvZ2dlclxuICAgKi9cbiAgZnVuY3Rpb24gV2VicGFja0xvZ2dlcihsb2csIGdldENoaWxkTG9nZ2VyKSB7XG4gICAgX2NsYXNzQ2FsbENoZWNrKHRoaXMsIFdlYnBhY2tMb2dnZXIpO1xuICAgIHRoaXNbTE9HX1NZTUJPTF0gPSBsb2c7XG4gICAgdGhpcy5nZXRDaGlsZExvZ2dlciA9IGdldENoaWxkTG9nZ2VyO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7Li4uRVhQRUNURURfQU5ZfSBhcmdzIGFyZ3NcbiAgICovXG4gIHJldHVybiBfY3JlYXRlQ2xhc3MoV2VicGFja0xvZ2dlciwgW3tcbiAgICBrZXk6IFwiZXJyb3JcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZXJyb3IoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuKSwgX2tleSA9IDA7IF9rZXkgPCBfbGVuOyBfa2V5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5XSA9IGFyZ3VtZW50c1tfa2V5XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIndhcm5cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gd2FybigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4yID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMiksIF9rZXkyID0gMDsgX2tleTIgPCBfbGVuMjsgX2tleTIrKykge1xuICAgICAgICBhcmdzW19rZXkyXSA9IGFyZ3VtZW50c1tfa2V5Ml07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUud2FybiwgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImluZm9cIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gaW5mbygpIHtcbiAgICAgIGZvciAodmFyIF9sZW4zID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuMyksIF9rZXkzID0gMDsgX2tleTMgPCBfbGVuMzsgX2tleTMrKykge1xuICAgICAgICBhcmdzW19rZXkzXSA9IGFyZ3VtZW50c1tfa2V5M107XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuaW5mbywgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImxvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBsb2coKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjQpLCBfa2V5NCA9IDA7IF9rZXk0IDwgX2xlbjQ7IF9rZXk0KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NF0gPSBhcmd1bWVudHNbX2tleTRdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmxvZywgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImRlYnVnXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGRlYnVnKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjUgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW41KSwgX2tleTUgPSAwOyBfa2V5NSA8IF9sZW41OyBfa2V5NSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTVdID0gYXJndW1lbnRzW19rZXk1XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5kZWJ1ZywgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFWFBFQ1RFRF9BTll9IGFzc2VydGlvbiBhc3NlcnRpb25cbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiYXNzZXJ0XCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGFzc2VydChhc3NlcnRpb24pIHtcbiAgICAgIGlmICghYXNzZXJ0aW9uKSB7XG4gICAgICAgIGZvciAodmFyIF9sZW42ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNiA+IDEgPyBfbGVuNiAtIDEgOiAwKSwgX2tleTYgPSAxOyBfa2V5NiA8IF9sZW42OyBfa2V5NisrKSB7XG4gICAgICAgICAgYXJnc1tfa2V5NiAtIDFdID0gYXJndW1lbnRzW19rZXk2XTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZXJyb3IsIGFyZ3MpO1xuICAgICAgfVxuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJ0cmFjZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0cmFjZSgpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50cmFjZSwgW1wiVHJhY2VcIl0pO1xuICAgIH1cbiAgfSwge1xuICAgIGtleTogXCJjbGVhclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBjbGVhcigpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5jbGVhcik7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInN0YXR1c1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBzdGF0dXMoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNyA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjcpLCBfa2V5NyA9IDA7IF9rZXk3IDwgX2xlbjc7IF9rZXk3KyspIHtcbiAgICAgICAgYXJnc1tfa2V5N10gPSBhcmd1bWVudHNbX2tleTddO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnN0YXR1cywgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImdyb3VwXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjggPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW44KSwgX2tleTggPSAwOyBfa2V5OCA8IF9sZW44OyBfa2V5OCsrKSB7XG4gICAgICAgIGFyZ3NbX2tleThdID0gYXJndW1lbnRzW19rZXk4XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5ncm91cCwgYXJncyk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcImdyb3VwQ29sbGFwc2VkXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwQ29sbGFwc2VkKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjkgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW45KSwgX2tleTkgPSAwOyBfa2V5OSA8IF9sZW45OyBfa2V5OSsrKSB7XG4gICAgICAgIGFyZ3NbX2tleTldID0gYXJndW1lbnRzW19rZXk5XTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5ncm91cENvbGxhcHNlZCwgYXJncyk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImdyb3VwRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGdyb3VwRW5kKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwRW5kKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGxhYmVsIGxhYmVsXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZSwgW2xhYmVsXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBsYWJlbCBsYWJlbFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInByb2ZpbGVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gcHJvZmlsZUVuZChsYWJlbCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnByb2ZpbGVFbmQsIFtsYWJlbF0pO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBsYWJlbCBsYWJlbFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInRpbWVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZShsYWJlbCkge1xuICAgICAgLyoqIEB0eXBlIHtNYXA8c3RyaW5nIHwgdW5kZWZpbmVkLCBbbnVtYmVyLCBudW1iZXJdPn0gKi9cbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0gPSB0aGlzW1RJTUVSU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHRoaXNbVElNRVJTX1NZTUJPTF0uc2V0KGxhYmVsLCBwcm9jZXNzLmhydGltZSgpKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGxhYmVsIGxhYmVsXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUxvZ1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lTG9nKGxhYmVsKSB7XG4gICAgICB2YXIgcHJldiA9IHRoaXNbVElNRVJTX1NZTUJPTF0gJiYgdGhpc1tUSU1FUlNfU1lNQk9MXS5nZXQobGFiZWwpO1xuICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihcIk5vIHN1Y2ggbGFiZWwgJ1wiLmNvbmNhdChsYWJlbCwgXCInIGZvciBXZWJwYWNrTG9nZ2VyLnRpbWVMb2coKVwiKSk7XG4gICAgICB9XG4gICAgICB2YXIgdGltZSA9IHByb2Nlc3MuaHJ0aW1lKHByZXYpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFiZWwgbGFiZWxcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVFbmQobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUVuZCgpXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcgfCB1bmRlZmluZWQsIFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFiZWwgbGFiZWxcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGUobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUFnZ3JlZ2F0ZSgpXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcgfCB1bmRlZmluZWQsIFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgLyoqIEB0eXBlIHtNYXA8c3RyaW5nIHwgdW5kZWZpbmVkLCBbbnVtYmVyLCBudW1iZXJdPn0gKi9cbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXSB8fCBuZXcgTWFwKCk7XG4gICAgICB2YXIgY3VycmVudCA9IHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5nZXQobGFiZWwpO1xuICAgICAgaWYgKGN1cnJlbnQgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAodGltZVsxXSArIGN1cnJlbnRbMV0gPiAxZTkpIHtcbiAgICAgICAgICB0aW1lWzBdICs9IGN1cnJlbnRbMF0gKyAxO1xuICAgICAgICAgIHRpbWVbMV0gPSB0aW1lWzFdIC0gMWU5ICsgY3VycmVudFsxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICB0aW1lWzBdICs9IGN1cnJlbnRbMF07XG4gICAgICAgICAgdGltZVsxXSArPSBjdXJyZW50WzFdO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uc2V0KGxhYmVsLCB0aW1lKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGxhYmVsIGxhYmVsXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidGltZUFnZ3JlZ2F0ZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lQWdncmVnYXRlRW5kKGxhYmVsKSB7XG4gICAgICBpZiAodGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHZhciB0aW1lID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAodGltZSA9PT0gdW5kZWZpbmVkKSByZXR1cm47XG4gICAgICB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZGVsZXRlKGxhYmVsKTtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS50aW1lLCBbbGFiZWxdLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkodGltZSkpKTtcbiAgICB9XG4gIH1dKTtcbn0oKTtcbm1vZHVsZS5leHBvcnRzLkxvZ2dlciA9IFdlYnBhY2tMb2dnZXI7XG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIF9fdW51c2VkX3dlYnBhY2tfZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX3NsaWNlZFRvQXJyYXkociwgZSkge1xuICByZXR1cm4gX2FycmF5V2l0aEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBlKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgZSkgfHwgX25vbkl0ZXJhYmxlUmVzdCgpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlUmVzdCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBkZXN0cnVjdHVyZSBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXlMaW1pdChyLCBsKSB7XG4gIHZhciB0ID0gbnVsbCA9PSByID8gbnVsbCA6IFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICYmIHJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdIHx8IHJbXCJAQGl0ZXJhdG9yXCJdO1xuICBpZiAobnVsbCAhPSB0KSB7XG4gICAgdmFyIGUsXG4gICAgICBuLFxuICAgICAgaSxcbiAgICAgIHUsXG4gICAgICBhID0gW10sXG4gICAgICBmID0gITAsXG4gICAgICBvID0gITE7XG4gICAgdHJ5IHtcbiAgICAgIGlmIChpID0gKHQgPSB0LmNhbGwocikpLm5leHQsIDAgPT09IGwpIHtcbiAgICAgICAgaWYgKE9iamVjdCh0KSAhPT0gdCkgcmV0dXJuO1xuICAgICAgICBmID0gITE7XG4gICAgICB9IGVsc2UgZm9yICg7ICEoZiA9IChlID0gaS5jYWxsKHQpKS5kb25lKSAmJiAoYS5wdXNoKGUudmFsdWUpLCBhLmxlbmd0aCAhPT0gbCk7IGYgPSAhMCk7XG4gICAgfSBjYXRjaCAocikge1xuICAgICAgbyA9ICEwLCBuID0gcjtcbiAgICB9IGZpbmFsbHkge1xuICAgICAgdHJ5IHtcbiAgICAgICAgaWYgKCFmICYmIG51bGwgIT0gdC5yZXR1cm4gJiYgKHUgPSB0LnJldHVybigpLCBPYmplY3QodSkgIT09IHUpKSByZXR1cm47XG4gICAgICB9IGZpbmFsbHkge1xuICAgICAgICBpZiAobykgdGhyb3cgbjtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGE7XG4gIH1cbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gcjtcbn1cbmZ1bmN0aW9uIF90b0NvbnN1bWFibGVBcnJheShyKSB7XG4gIHJldHVybiBfYXJyYXlXaXRob3V0SG9sZXMocikgfHwgX2l0ZXJhYmxlVG9BcnJheShyKSB8fCBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkocikgfHwgX25vbkl0ZXJhYmxlU3ByZWFkKCk7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVTcHJlYWQoKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3IoXCJJbnZhbGlkIGF0dGVtcHQgdG8gc3ByZWFkIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIsIGEpIHtcbiAgaWYgKHIpIHtcbiAgICBpZiAoXCJzdHJpbmdcIiA9PSB0eXBlb2YgcikgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpO1xuICAgIHZhciB0ID0ge30udG9TdHJpbmcuY2FsbChyKS5zbGljZSg4LCAtMSk7XG4gICAgcmV0dXJuIFwiT2JqZWN0XCIgPT09IHQgJiYgci5jb25zdHJ1Y3RvciAmJiAodCA9IHIuY29uc3RydWN0b3IubmFtZSksIFwiTWFwXCIgPT09IHQgfHwgXCJTZXRcIiA9PT0gdCA/IEFycmF5LmZyb20ocikgOiBcIkFyZ3VtZW50c1wiID09PSB0IHx8IC9eKD86VWl8SSludCg/Ojh8MTZ8MzIpKD86Q2xhbXBlZCk/QXJyYXkkLy50ZXN0KHQpID8gX2FycmF5TGlrZVRvQXJyYXkociwgYSkgOiB2b2lkIDA7XG4gIH1cbn1cbmZ1bmN0aW9uIF9pdGVyYWJsZVRvQXJyYXkocikge1xuICBpZiAoXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgbnVsbCAhPSByWyh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLml0ZXJhdG9yXSB8fCBudWxsICE9IHJbXCJAQGl0ZXJhdG9yXCJdKSByZXR1cm4gQXJyYXkuZnJvbShyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB7XG4gIGlmIChBcnJheS5pc0FycmF5KHIpKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkocik7XG59XG5mdW5jdGlvbiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSB7XG4gIChudWxsID09IGEgfHwgYSA+IHIubGVuZ3RoKSAmJiAoYSA9IHIubGVuZ3RoKTtcbiAgZm9yICh2YXIgZSA9IDAsIG4gPSBBcnJheShhKTsgZSA8IGE7IGUrKykgbltlXSA9IHJbZV07XG4gIHJldHVybiBuO1xufVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBvLmNvbnN0cnVjdG9yID09PSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBvICE9PSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG52YXIgX3JlcXVpcmUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL0xvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCIpLFxuICBMb2dUeXBlID0gX3JlcXVpcmUuTG9nVHlwZTtcblxuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVySXRlbVR5cGVzfSBGaWx0ZXJJdGVtVHlwZXMgKi9cbi8qKiBAdHlwZWRlZiB7aW1wb3J0KFwiLi4vLi4vZGVjbGFyYXRpb25zL1dlYnBhY2tPcHRpb25zXCIpLkZpbHRlclR5cGVzfSBGaWx0ZXJUeXBlcyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuL0xvZ2dlclwiKS5Mb2dUeXBlRW51bX0gTG9nVHlwZUVudW0gKi9cblxuLyoqIEB0eXBlZGVmIHsoaXRlbTogc3RyaW5nKSA9PiBib29sZWFufSBGaWx0ZXJGdW5jdGlvbiAqL1xuLyoqIEB0eXBlZGVmIHsodmFsdWU6IHN0cmluZywgdHlwZTogTG9nVHlwZUVudW0sIGFyZ3M/OiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZH0gTG9nZ2luZ0Z1bmN0aW9uICovXG5cbi8qKlxuICogQHR5cGVkZWYge29iamVjdH0gTG9nZ2VyQ29uc29sZVxuICogQHByb3BlcnR5IHsoKSA9PiB2b2lkfSBjbGVhclxuICogQHByb3BlcnR5IHsoKSA9PiB2b2lkfSB0cmFjZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWR9IGluZm9cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkfSBsb2dcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkfSB3YXJuXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZH0gZXJyb3JcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gZGVidWdcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gZ3JvdXBcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gZ3JvdXBDb2xsYXBzZWRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gZ3JvdXBFbmRcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gc3RhdHVzXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZD19IHByb2ZpbGVcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gcHJvZmlsZUVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBsb2dUaW1lXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2dnZXJPcHRpb25zXG4gKiBAcHJvcGVydHkge2ZhbHNlfHRydWV8XCJub25lXCJ8XCJlcnJvclwifFwid2FyblwifFwiaW5mb1wifFwibG9nXCJ8XCJ2ZXJib3NlXCJ9IGxldmVsIGxvZ2xldmVsXG4gKiBAcHJvcGVydHkge0ZpbHRlclR5cGVzfGJvb2xlYW59IGRlYnVnIGZpbHRlciBmb3IgZGVidWcgbG9nZ2luZ1xuICogQHByb3BlcnR5IHtMb2dnZXJDb25zb2xlfSBjb25zb2xlIHRoZSBjb25zb2xlIHRvIGxvZyB0b1xuICovXG5cbi8qKlxuICogQHBhcmFtIHtGaWx0ZXJJdGVtVHlwZXN9IGl0ZW0gYW4gaW5wdXQgaXRlbVxuICogQHJldHVybnMge0ZpbHRlckZ1bmN0aW9uIHwgdW5kZWZpbmVkfSBmaWx0ZXIgZnVuY3Rpb25cbiAqL1xudmFyIGZpbHRlclRvRnVuY3Rpb24gPSBmdW5jdGlvbiBmaWx0ZXJUb0Z1bmN0aW9uKGl0ZW0pIHtcbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgdmFyIHJlZ0V4cCA9IG5ldyBSZWdFeHAoXCJbXFxcXFxcXFwvXVwiLmNvbmNhdChpdGVtLnJlcGxhY2UoL1stW1xcXXt9KCkqKz8uXFxcXF4kfF0vZywgXCJcXFxcJCZcIiksIFwiKFtcXFxcXFxcXC9dfCR8IXxcXFxcPylcIikpO1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiByZWdFeHAudGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuICBpZiAoaXRlbSAmJiBfdHlwZW9mKGl0ZW0pID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBpdGVtLnRlc3QgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBmdW5jdGlvbiAoaWRlbnQpIHtcbiAgICAgIHJldHVybiBpdGVtLnRlc3QoaWRlbnQpO1xuICAgIH07XG4gIH1cbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICByZXR1cm4gaXRlbTtcbiAgfVxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiYm9vbGVhblwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uICgpIHtcbiAgICAgIHJldHVybiBpdGVtO1xuICAgIH07XG4gIH1cbn07XG5cbi8qKlxuICogQGVudW0ge251bWJlcn1cbiAqL1xudmFyIExvZ0xldmVsID0ge1xuICBub25lOiA2LFxuICBmYWxzZTogNixcbiAgZXJyb3I6IDUsXG4gIHdhcm46IDQsXG4gIGluZm86IDMsXG4gIGxvZzogMixcbiAgdHJ1ZTogMixcbiAgdmVyYm9zZTogMVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0xvZ2dlck9wdGlvbnN9IG9wdGlvbnMgb3B0aW9ucyBvYmplY3RcbiAqIEByZXR1cm5zIHtMb2dnaW5nRnVuY3Rpb259IGxvZ2dpbmcgZnVuY3Rpb25cbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAoX3JlZikge1xuICB2YXIgX3JlZiRsZXZlbCA9IF9yZWYubGV2ZWwsXG4gICAgbGV2ZWwgPSBfcmVmJGxldmVsID09PSB2b2lkIDAgPyBcImluZm9cIiA6IF9yZWYkbGV2ZWwsXG4gICAgX3JlZiRkZWJ1ZyA9IF9yZWYuZGVidWcsXG4gICAgZGVidWcgPSBfcmVmJGRlYnVnID09PSB2b2lkIDAgPyBmYWxzZSA6IF9yZWYkZGVidWcsXG4gICAgY29uc29sZSA9IF9yZWYuY29uc29sZTtcbiAgdmFyIGRlYnVnRmlsdGVycyA9IC8qKiBAdHlwZSB7RmlsdGVyRnVuY3Rpb25bXX0gKi9cblxuICB0eXBlb2YgZGVidWcgPT09IFwiYm9vbGVhblwiID8gW2Z1bmN0aW9uICgpIHtcbiAgICByZXR1cm4gZGVidWc7XG4gIH1dIDogLyoqIEB0eXBlIHtGaWx0ZXJJdGVtVHlwZXNbXX0gKi9bXS5jb25jYXQoZGVidWcpLm1hcChmaWx0ZXJUb0Z1bmN0aW9uKTtcbiAgdmFyIGxvZ2xldmVsID0gTG9nTGV2ZWxbXCJcIi5jb25jYXQobGV2ZWwpXSB8fCAwO1xuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAgICogQHBhcmFtIHtMb2dUeXBlRW51bX0gdHlwZSB0eXBlIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHBhcmFtIHtFWFBFQ1RFRF9BTllbXT19IGFyZ3MgYXJndW1lbnRzIG9mIHRoZSBsb2cgZW50cnlcbiAgICogQHJldHVybnMge3ZvaWR9XG4gICAqL1xuICB2YXIgbG9nZ2VyID0gZnVuY3Rpb24gbG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpIHtcbiAgICB2YXIgbGFiZWxlZEFyZ3MgPSBmdW5jdGlvbiBsYWJlbGVkQXJncygpIHtcbiAgICAgIGlmIChBcnJheS5pc0FycmF5KGFyZ3MpKSB7XG4gICAgICAgIGlmIChhcmdzLmxlbmd0aCA+IDAgJiYgdHlwZW9mIGFyZ3NbMF0gPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl0gXCIpLmNvbmNhdChhcmdzWzBdKV0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheShhcmdzLnNsaWNlKDEpKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFtcIltcIi5jb25jYXQobmFtZSwgXCJdXCIpXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3MpKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiBbXTtcbiAgICB9O1xuICAgIHZhciBkZWJ1ZyA9IGRlYnVnRmlsdGVycy5zb21lKGZ1bmN0aW9uIChmKSB7XG4gICAgICByZXR1cm4gZihuYW1lKTtcbiAgICB9KTtcbiAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgIGNhc2UgTG9nVHlwZS5kZWJ1ZzpcbiAgICAgICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZGVidWcgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUuZGVidWcuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmxvZzpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS5pbmZvOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwuaW5mbykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmluZm8uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUud2FybjpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLndhcm4pIHJldHVybjtcbiAgICAgICAgY29uc29sZS53YXJuLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmVycm9yOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwuZXJyb3IpIHJldHVybjtcbiAgICAgICAgY29uc29sZS5lcnJvci5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS50cmFjZTpcbiAgICAgICAgaWYgKCFkZWJ1ZykgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLnRyYWNlKCk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwQ29sbGFwc2VkOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC52ZXJib3NlKSB7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwQ29sbGFwc2VkID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIC8vIGZhbGxzIHRocm91Z2hcbiAgICAgIGNhc2UgTG9nVHlwZS5ncm91cDpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZ3JvdXAgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUuZ3JvdXAuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwRW5kOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cEVuZCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5ncm91cEVuZCgpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRpbWU6XG4gICAgICAgIHtcbiAgICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgICAgdmFyIF9hcmdzID0gX3NsaWNlZFRvQXJyYXkoLyoqIEB0eXBlIHtbc3RyaW5nLCBudW1iZXIsIG51bWJlcl19ICovXG4gICAgICAgICAgICBhcmdzLCAzKSxcbiAgICAgICAgICAgIGxhYmVsID0gX2FyZ3NbMF0sXG4gICAgICAgICAgICBzdGFydCA9IF9hcmdzWzFdLFxuICAgICAgICAgICAgZW5kID0gX2FyZ3NbMl07XG4gICAgICAgICAgdmFyIG1zID0gc3RhcnQgKiAxMDAwICsgZW5kIC8gMTAwMDAwMDtcbiAgICAgICAgICB2YXIgbXNnID0gXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGxhYmVsLCBcIjogXCIpLmNvbmNhdChtcywgXCIgbXNcIik7XG4gICAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmxvZ1RpbWUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5sb2dUaW1lKG1zZyk7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG1zZyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZTpcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnByb2ZpbGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZS5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnByb2ZpbGVFbmQ6XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5wcm9maWxlRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBjb25zb2xlLnByb2ZpbGVFbmQuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS5jbGVhcjpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmxvZykgcmV0dXJuO1xuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuY2xlYXIgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS5zdGF0dXM6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5zdGF0dXMgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGlmICghYXJncyB8fCBhcmdzLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgY29uc29sZS5zdGF0dXMoKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5zdGF0dXMuYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoYXJncyAmJiBhcmdzLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiVW5leHBlY3RlZCBMb2dUeXBlIFwiLmNvbmNhdCh0eXBlKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbG9nZ2VyO1xufTtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9ydW50aW1lLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgcmV0dXJuIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiA/IE9iamVjdC5hc3NpZ24uYmluZCgpIDogZnVuY3Rpb24gKG4pIHtcbiAgICBmb3IgKHZhciBlID0gMTsgZSA8IGFyZ3VtZW50cy5sZW5ndGg7IGUrKykge1xuICAgICAgdmFyIHQgPSBhcmd1bWVudHNbZV07XG4gICAgICBmb3IgKHZhciByIGluIHQpICh7fSkuaGFzT3duUHJvcGVydHkuY2FsbCh0LCByKSAmJiAobltyXSA9IHRbcl0pO1xuICAgIH1cbiAgICByZXR1cm4gbjtcbiAgfSwgX2V4dGVuZHMuYXBwbHkobnVsbCwgYXJndW1lbnRzKTtcbn1cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHRhcGFibGUgKi8gXCIuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvdGFwYWJsZS5qc1wiKSxcbiAgU3luY0JhaWxIb29rID0gX3JlcXVpcmUuU3luY0JhaWxIb29rO1xudmFyIF9yZXF1aXJlMiA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gIExvZ2dlciA9IF9yZXF1aXJlMi5Mb2dnZXI7XG52YXIgY3JlYXRlQ29uc29sZUxvZ2dlciA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vY3JlYXRlQ29uc29sZUxvZ2dlciAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvY3JlYXRlQ29uc29sZUxvZ2dlci5qc1wiKTtcblxuLyoqIEB0eXBlIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9ICovXG52YXIgY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zID0ge1xuICBsZXZlbDogXCJpbmZvXCIsXG4gIGRlYnVnOiBmYWxzZSxcbiAgY29uc29sZTogY29uc29sZVxufTtcbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlciA9IGNyZWF0ZUNvbnNvbGVMb2dnZXIoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zKTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBuYW1lIG9mIHRoZSBsb2dnZXJcbiAqIEByZXR1cm5zIHtMb2dnZXJ9IGEgbG9nZ2VyXG4gKi9cbm1vZHVsZS5leHBvcnRzLmdldExvZ2dlciA9IGZ1bmN0aW9uIChuYW1lKSB7XG4gIHJldHVybiBuZXcgTG9nZ2VyKGZ1bmN0aW9uICh0eXBlLCBhcmdzKSB7XG4gICAgaWYgKG1vZHVsZS5leHBvcnRzLmhvb2tzLmxvZy5jYWxsKG5hbWUsIHR5cGUsIGFyZ3MpID09PSB1bmRlZmluZWQpIHtcbiAgICAgIGN1cnJlbnREZWZhdWx0TG9nZ2VyKG5hbWUsIHR5cGUsIGFyZ3MpO1xuICAgIH1cbiAgfSwgZnVuY3Rpb24gKGNoaWxkTmFtZSkge1xuICAgIHJldHVybiBtb2R1bGUuZXhwb3J0cy5nZXRMb2dnZXIoXCJcIi5jb25jYXQobmFtZSwgXCIvXCIpLmNvbmNhdChjaGlsZE5hbWUpKTtcbiAgfSk7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7Y3JlYXRlQ29uc29sZUxvZ2dlci5Mb2dnZXJPcHRpb25zfSBvcHRpb25zIG5ldyBvcHRpb25zLCBtZXJnZSB3aXRoIG9sZCBvcHRpb25zXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xubW9kdWxlLmV4cG9ydHMuY29uZmlndXJlRGVmYXVsdExvZ2dlciA9IGZ1bmN0aW9uIChvcHRpb25zKSB7XG4gIF9leHRlbmRzKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucywgb3B0aW9ucyk7XG4gIGN1cnJlbnREZWZhdWx0TG9nZ2VyID0gY3JlYXRlQ29uc29sZUxvZ2dlcihjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMpO1xufTtcbm1vZHVsZS5leHBvcnRzLmhvb2tzID0ge1xuICBsb2c6IG5ldyBTeW5jQmFpbEhvb2soW1wib3JpZ2luXCIsIFwidHlwZVwiLCBcImFyZ3NcIl0pXG59O1xuXG4vKioqLyB9KVxuXG4vKioqKioqLyBcdH0pO1xuLyoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKioqKiovIFx0Ly8gVGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHR2YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuLyoqKioqKi8gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG4vKioqKioqLyBcdFx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG4vKioqKioqLyBcdFx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG4vKioqKioqLyBcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuLyoqKioqKi8gXHRcdFx0ZXhwb3J0czoge31cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdFx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcbi8qKioqKiovIFx0XHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG4vKioqKioqLyBcdH1cbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG4vKioqKioqLyBcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuLyoqKioqKi8gXHRcdFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG4vKioqKioqLyBcdFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHR9O1xuLyoqKioqKi8gXHR9KCk7XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHQvKiB3ZWJwYWNrL3J1bnRpbWUvaGFzT3duUHJvcGVydHkgc2hvcnRoYW5kICovXG4vKioqKioqLyBcdCFmdW5jdGlvbigpIHtcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4vKioqKioqLyBcdFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbi8qKioqKiovIFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0XHR9XG4vKioqKioqLyBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xudmFyIF9fd2VicGFja19leHBvcnRzX18gPSB7fTtcbi8vIFRoaXMgZW50cnkgbmVlZHMgdG8gYmUgd3JhcHBlZCBpbiBhbiBJSUZFIGJlY2F1c2UgaXQgbmVlZHMgdG8gYmUgaXNvbGF0ZWQgYWdhaW5zdCBvdGhlciBtb2R1bGVzIGluIHRoZSBjaHVuay5cbiFmdW5jdGlvbigpIHtcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci9pbmRleC5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBcImRlZmF1bHRcIjogZnVuY3Rpb24oKSB7IHJldHVybiAvKiByZWV4cG9ydCBkZWZhdWx0IGV4cG9ydCBmcm9tIG5hbWVkIG1vZHVsZSAqLyB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXzsgfVxuLyogaGFybW9ueSBleHBvcnQgKi8gfSk7XG4vKiBoYXJtb255IGltcG9ydCAqLyB2YXIgd2VicGFja19saWJfbG9nZ2luZ19ydW50aW1lX2pzX19XRUJQQUNLX0lNUE9SVEVEX01PRFVMRV8wX18gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB3ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanNcIik7XG5cbn0oKTtcbnZhciBfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fID0gZXhwb3J0cztcbmZvcih2YXIgX193ZWJwYWNrX2lfXyBpbiBfX3dlYnBhY2tfZXhwb3J0c19fKSBfX3dlYnBhY2tfZXhwb3J0X3RhcmdldF9fW19fd2VicGFja19pX19dID0gX193ZWJwYWNrX2V4cG9ydHNfX1tfX3dlYnBhY2tfaV9fXTtcbmlmKF9fd2VicGFja19leHBvcnRzX18uX19lc01vZHVsZSkgT2JqZWN0LmRlZmluZVByb3BlcnR5KF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18sIFwiX19lc01vZHVsZVwiLCB7IHZhbHVlOiB0cnVlIH0pO1xuLyoqKioqKi8gfSkoKVxuOyIsImZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHsgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbcl0gPSB0LCBlOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuLy8gVGhlIGVycm9yIG92ZXJsYXkgaXMgaW5zcGlyZWQgKGFuZCBtb3N0bHkgY29waWVkKSBmcm9tIENyZWF0ZSBSZWFjdCBBcHAgKGh0dHBzOi8vZ2l0aHViLmNvbS9mYWNlYm9va2luY3ViYXRvci9jcmVhdGUtcmVhY3QtYXBwKVxuLy8gVGhleSwgaW4gdHVybiwgZ290IGluc3BpcmVkIGJ5IHdlYnBhY2staG90LW1pZGRsZXdhcmUgKGh0dHBzOi8vZ2l0aHViLmNvbS9nbGVuamFtaW4vd2VicGFjay1ob3QtbWlkZGxld2FyZSkuXG5cbmltcG9ydCBhbnNpSFRNTCBmcm9tIFwiYW5zaS1odG1sLWNvbW11bml0eVwiO1xuXG4vKipcbiAqIEB0eXBlIHsoaW5wdXQ6IHN0cmluZywgcG9zaXRpb246IG51bWJlcikgPT4gc3RyaW5nfVxuICovXG52YXIgZ2V0Q29kZVBvaW50ID0gU3RyaW5nLnByb3RvdHlwZS5jb2RlUG9pbnRBdCA/IGZ1bmN0aW9uIChpbnB1dCwgcG9zaXRpb24pIHtcbiAgcmV0dXJuIGlucHV0LmNvZGVQb2ludEF0KHBvc2l0aW9uKTtcbn0gOiBmdW5jdGlvbiAoaW5wdXQsIHBvc2l0aW9uKSB7XG4gIHJldHVybiAoaW5wdXQuY2hhckNvZGVBdChwb3NpdGlvbikgLSAweGQ4MDApICogMHg0MDAgKyBpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uICsgMSkgLSAweGRjMDAgKyAweDEwMDAwO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gbWFjcm9UZXh0XG4gKiBAcGFyYW0ge1JlZ0V4cH0gbWFjcm9SZWdFeHBcbiAqIEBwYXJhbSB7KGlucHV0OiBzdHJpbmcpID0+IHN0cmluZ30gbWFjcm9SZXBsYWNlclxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudmFyIHJlcGxhY2VVc2luZ1JlZ0V4cCA9IGZ1bmN0aW9uIHJlcGxhY2VVc2luZ1JlZ0V4cChtYWNyb1RleHQsIG1hY3JvUmVnRXhwLCBtYWNyb1JlcGxhY2VyKSB7XG4gIG1hY3JvUmVnRXhwLmxhc3RJbmRleCA9IDA7XG4gIHZhciByZXBsYWNlTWF0Y2ggPSBtYWNyb1JlZ0V4cC5leGVjKG1hY3JvVGV4dCk7XG4gIHZhciByZXBsYWNlUmVzdWx0O1xuICBpZiAocmVwbGFjZU1hdGNoKSB7XG4gICAgcmVwbGFjZVJlc3VsdCA9IFwiXCI7XG4gICAgdmFyIHJlcGxhY2VMYXN0SW5kZXggPSAwO1xuICAgIGRvIHtcbiAgICAgIGlmIChyZXBsYWNlTGFzdEluZGV4ICE9PSByZXBsYWNlTWF0Y2guaW5kZXgpIHtcbiAgICAgICAgcmVwbGFjZVJlc3VsdCArPSBtYWNyb1RleHQuc3Vic3RyaW5nKHJlcGxhY2VMYXN0SW5kZXgsIHJlcGxhY2VNYXRjaC5pbmRleCk7XG4gICAgICB9XG4gICAgICB2YXIgcmVwbGFjZUlucHV0ID0gcmVwbGFjZU1hdGNoWzBdO1xuICAgICAgcmVwbGFjZVJlc3VsdCArPSBtYWNyb1JlcGxhY2VyKHJlcGxhY2VJbnB1dCk7XG4gICAgICByZXBsYWNlTGFzdEluZGV4ID0gcmVwbGFjZU1hdGNoLmluZGV4ICsgcmVwbGFjZUlucHV0Lmxlbmd0aDtcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25kLWFzc2lnblxuICAgIH0gd2hpbGUgKHJlcGxhY2VNYXRjaCA9IG1hY3JvUmVnRXhwLmV4ZWMobWFjcm9UZXh0KSk7XG4gICAgaWYgKHJlcGxhY2VMYXN0SW5kZXggIT09IG1hY3JvVGV4dC5sZW5ndGgpIHtcbiAgICAgIHJlcGxhY2VSZXN1bHQgKz0gbWFjcm9UZXh0LnN1YnN0cmluZyhyZXBsYWNlTGFzdEluZGV4KTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmVwbGFjZVJlc3VsdCA9IG1hY3JvVGV4dDtcbiAgfVxuICByZXR1cm4gcmVwbGFjZVJlc3VsdDtcbn07XG52YXIgcmVmZXJlbmNlcyA9IHtcbiAgXCI8XCI6IFwiJmx0O1wiLFxuICBcIj5cIjogXCImZ3Q7XCIsXG4gICdcIic6IFwiJnF1b3Q7XCIsXG4gIFwiJ1wiOiBcIiZhcG9zO1wiLFxuICBcIiZcIjogXCImYW1wO1wiXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0ZXh0IHRleHRcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbmZ1bmN0aW9uIGVuY29kZSh0ZXh0KSB7XG4gIGlmICghdGV4dCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHJldHVybiByZXBsYWNlVXNpbmdSZWdFeHAodGV4dCwgL1s8PidcIiZdL2csIGZ1bmN0aW9uIChpbnB1dCkge1xuICAgIHZhciByZXN1bHQgPSByZWZlcmVuY2VzW2lucHV0XTtcbiAgICBpZiAoIXJlc3VsdCkge1xuICAgICAgdmFyIGNvZGUgPSBpbnB1dC5sZW5ndGggPiAxID8gZ2V0Q29kZVBvaW50KGlucHV0LCAwKSA6IGlucHV0LmNoYXJDb2RlQXQoMCk7XG4gICAgICByZXN1bHQgPSBcIiYjXCIuY29uY2F0KGNvZGUsIFwiO1wiKTtcbiAgICB9XG4gICAgcmV0dXJuIHJlc3VsdDtcbiAgfSk7XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU3RhdGVEZWZpbml0aW9uc1xuICogQHByb3BlcnR5IHt7W2V2ZW50OiBzdHJpbmddOiB7IHRhcmdldDogc3RyaW5nOyBhY3Rpb25zPzogQXJyYXk8c3RyaW5nPiB9fX0gW29uXVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3B0aW9uc1xuICogQHByb3BlcnR5IHt7W3N0YXRlOiBzdHJpbmddOiBTdGF0ZURlZmluaXRpb25zfX0gc3RhdGVzXG4gKiBAcHJvcGVydHkge29iamVjdH0gY29udGV4dDtcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBpbml0aWFsXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBJbXBsZW1lbnRhdGlvblxuICogQHByb3BlcnR5IHt7W2FjdGlvbk5hbWU6IHN0cmluZ106IChjdHg6IG9iamVjdCwgZXZlbnQ6IGFueSkgPT4gb2JqZWN0fX0gYWN0aW9uc1xuICovXG5cbi8qKlxuICogQSBzaW1wbGlmaWVkIGBjcmVhdGVNYWNoaW5lYCBmcm9tIGBAeHN0YXRlL2ZzbWAgd2l0aCB0aGUgZm9sbG93aW5nIGRpZmZlcmVuY2VzOlxuICpcbiAqICAtIHRoZSByZXR1cm5lZCBtYWNoaW5lIGlzIHRlY2huaWNhbGx5IGEgXCJzZXJ2aWNlXCIuIE5vIGBpbnRlcnByZXQobWFjaGluZSkuc3RhcnQoKWAgaXMgbmVlZGVkLlxuICogIC0gdGhlIHN0YXRlIGRlZmluaXRpb24gb25seSBzdXBwb3J0IGBvbmAgYW5kIHRhcmdldCBtdXN0IGJlIGRlY2xhcmVkIHdpdGggeyB0YXJnZXQ6ICduZXh0U3RhdGUnLCBhY3Rpb25zOiBbXSB9IGV4cGxpY2l0bHkuXG4gKiAgLSBldmVudCBwYXNzZWQgdG8gYHNlbmRgIG11c3QgYmUgYW4gb2JqZWN0IHdpdGggYHR5cGVgIHByb3BlcnR5LlxuICogIC0gYWN0aW9ucyBpbXBsZW1lbnRhdGlvbiB3aWxsIGJlIFthc3NpZ24gYWN0aW9uXShodHRwczovL3hzdGF0ZS5qcy5vcmcvZG9jcy9ndWlkZXMvY29udGV4dC5odG1sI2Fzc2lnbi1hY3Rpb24pIGlmIHlvdSByZXR1cm4gYW55IHZhbHVlLlxuICogIERvIG5vdCByZXR1cm4gYW55dGhpbmcgaWYgeW91IGp1c3Qgd2FudCB0byBpbnZva2Ugc2lkZSBlZmZlY3QuXG4gKlxuICogVGhlIGdvYWwgb2YgdGhpcyBjdXN0b20gZnVuY3Rpb24gaXMgdG8gYXZvaWQgaW5zdGFsbGluZyB0aGUgZW50aXJlIGAneHN0YXRlL2ZzbSdgIHBhY2thZ2UsIHdoaWxlIGVuYWJsaW5nIG1vZGVsaW5nIHVzaW5nXG4gKiBzdGF0ZSBtYWNoaW5lLiBZb3UgY2FuIGNvcHkgdGhlIGZpcnN0IHBhcmFtZXRlciBpbnRvIHRoZSBlZGl0b3IgYXQgaHR0cHM6Ly9zdGF0ZWx5LmFpL3ZpeiB0byB2aXN1YWxpemUgdGhlIHN0YXRlIG1hY2hpbmUuXG4gKlxuICogQHBhcmFtIHtPcHRpb25zfSBvcHRpb25zXG4gKiBAcGFyYW0ge0ltcGxlbWVudGF0aW9ufSBpbXBsZW1lbnRhdGlvblxuICovXG5mdW5jdGlvbiBjcmVhdGVNYWNoaW5lKF9yZWYsIF9yZWYyKSB7XG4gIHZhciBzdGF0ZXMgPSBfcmVmLnN0YXRlcyxcbiAgICBjb250ZXh0ID0gX3JlZi5jb250ZXh0LFxuICAgIGluaXRpYWwgPSBfcmVmLmluaXRpYWw7XG4gIHZhciBhY3Rpb25zID0gX3JlZjIuYWN0aW9ucztcbiAgdmFyIGN1cnJlbnRTdGF0ZSA9IGluaXRpYWw7XG4gIHZhciBjdXJyZW50Q29udGV4dCA9IGNvbnRleHQ7XG4gIHJldHVybiB7XG4gICAgc2VuZDogZnVuY3Rpb24gc2VuZChldmVudCkge1xuICAgICAgdmFyIGN1cnJlbnRTdGF0ZU9uID0gc3RhdGVzW2N1cnJlbnRTdGF0ZV0ub247XG4gICAgICB2YXIgdHJhbnNpdGlvbkNvbmZpZyA9IGN1cnJlbnRTdGF0ZU9uICYmIGN1cnJlbnRTdGF0ZU9uW2V2ZW50LnR5cGVdO1xuICAgICAgaWYgKHRyYW5zaXRpb25Db25maWcpIHtcbiAgICAgICAgY3VycmVudFN0YXRlID0gdHJhbnNpdGlvbkNvbmZpZy50YXJnZXQ7XG4gICAgICAgIGlmICh0cmFuc2l0aW9uQ29uZmlnLmFjdGlvbnMpIHtcbiAgICAgICAgICB0cmFuc2l0aW9uQ29uZmlnLmFjdGlvbnMuZm9yRWFjaChmdW5jdGlvbiAoYWN0TmFtZSkge1xuICAgICAgICAgICAgdmFyIGFjdGlvbkltcGwgPSBhY3Rpb25zW2FjdE5hbWVdO1xuICAgICAgICAgICAgdmFyIG5leHRDb250ZXh0VmFsdWUgPSBhY3Rpb25JbXBsICYmIGFjdGlvbkltcGwoY3VycmVudENvbnRleHQsIGV2ZW50KTtcbiAgICAgICAgICAgIGlmIChuZXh0Q29udGV4dFZhbHVlKSB7XG4gICAgICAgICAgICAgIGN1cnJlbnRDb250ZXh0ID0gX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBjdXJyZW50Q29udGV4dCksIG5leHRDb250ZXh0VmFsdWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9O1xufVxuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFNob3dPdmVybGF5RGF0YVxuICogQHByb3BlcnR5IHsnd2FybmluZycgfCAnZXJyb3InfSBsZXZlbFxuICogQHByb3BlcnR5IHtBcnJheTxzdHJpbmcgIHwgeyBtb2R1bGVJZGVudGlmaWVyPzogc3RyaW5nLCBtb2R1bGVOYW1lPzogc3RyaW5nLCBsb2M/OiBzdHJpbmcsIG1lc3NhZ2U/OiBzdHJpbmcgfT59IG1lc3NhZ2VzXG4gKiBAcHJvcGVydHkgeydidWlsZCcgfCAncnVudGltZSd9IG1lc3NhZ2VTb3VyY2VcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IENyZWF0ZU92ZXJsYXlNYWNoaW5lT3B0aW9uc1xuICogQHByb3BlcnR5IHsoZGF0YTogU2hvd092ZXJsYXlEYXRhKSA9PiB2b2lkfSBzaG93T3ZlcmxheVxuICogQHByb3BlcnR5IHsoKSA9PiB2b2lkfSBoaWRlT3ZlcmxheVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtDcmVhdGVPdmVybGF5TWFjaGluZU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZU92ZXJsYXlNYWNoaW5lID0gZnVuY3Rpb24gY3JlYXRlT3ZlcmxheU1hY2hpbmUob3B0aW9ucykge1xuICB2YXIgaGlkZU92ZXJsYXkgPSBvcHRpb25zLmhpZGVPdmVybGF5LFxuICAgIHNob3dPdmVybGF5ID0gb3B0aW9ucy5zaG93T3ZlcmxheTtcbiAgcmV0dXJuIGNyZWF0ZU1hY2hpbmUoe1xuICAgIGluaXRpYWw6IFwiaGlkZGVuXCIsXG4gICAgY29udGV4dDoge1xuICAgICAgbGV2ZWw6IFwiZXJyb3JcIixcbiAgICAgIG1lc3NhZ2VzOiBbXSxcbiAgICAgIG1lc3NhZ2VTb3VyY2U6IFwiYnVpbGRcIlxuICAgIH0sXG4gICAgc3RhdGVzOiB7XG4gICAgICBoaWRkZW46IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBCVUlMRF9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlCdWlsZEVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBSVU5USU1FX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheVJ1bnRpbWVFcnJvclwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wic2V0TWVzc2FnZXNcIiwgXCJzaG93T3ZlcmxheVwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlCdWlsZEVycm9yOiB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgRElTTUlTUzoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiZGlzbWlzc01lc3NhZ2VzXCIsIFwiaGlkZU92ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFwcGVuZE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0sXG4gICAgICBkaXNwbGF5UnVudGltZUVycm9yOiB7XG4gICAgICAgIG9uOiB7XG4gICAgICAgICAgRElTTUlTUzoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImhpZGRlblwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiZGlzbWlzc01lc3NhZ2VzXCIsIFwiaGlkZU92ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJVTlRJTUVfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5UnVudGltZUVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJhcHBlbmRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfSxcbiAgICAgICAgICBCVUlMRF9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlCdWlsZEVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAgYWN0aW9uczoge1xuICAgICAgZGlzbWlzc01lc3NhZ2VzOiBmdW5jdGlvbiBkaXNtaXNzTWVzc2FnZXMoKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgICAgIGxldmVsOiBcImVycm9yXCIsXG4gICAgICAgICAgbWVzc2FnZVNvdXJjZTogXCJidWlsZFwiXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgYXBwZW5kTWVzc2FnZXM6IGZ1bmN0aW9uIGFwcGVuZE1lc3NhZ2VzKGNvbnRleHQsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IGNvbnRleHQubWVzc2FnZXMuY29uY2F0KGV2ZW50Lm1lc3NhZ2VzKSxcbiAgICAgICAgICBsZXZlbDogZXZlbnQubGV2ZWwgfHwgY29udGV4dC5sZXZlbCxcbiAgICAgICAgICBtZXNzYWdlU291cmNlOiBldmVudC50eXBlID09PSBcIlJVTlRJTUVfRVJST1JcIiA/IFwicnVudGltZVwiIDogXCJidWlsZFwiXG4gICAgICAgIH07XG4gICAgICB9LFxuICAgICAgc2V0TWVzc2FnZXM6IGZ1bmN0aW9uIHNldE1lc3NhZ2VzKGNvbnRleHQsIGV2ZW50KSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgbWVzc2FnZXM6IGV2ZW50Lm1lc3NhZ2VzLFxuICAgICAgICAgIGxldmVsOiBldmVudC5sZXZlbCB8fCBjb250ZXh0LmxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VTb3VyY2U6IGV2ZW50LnR5cGUgPT09IFwiUlVOVElNRV9FUlJPUlwiID8gXCJydW50aW1lXCIgOiBcImJ1aWxkXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBoaWRlT3ZlcmxheTogaGlkZU92ZXJsYXksXG4gICAgICBzaG93T3ZlcmxheTogc2hvd092ZXJsYXlcbiAgICB9XG4gIH0pO1xufTtcblxuLyoqXG4gKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAqL1xudmFyIHBhcnNlRXJyb3JUb1N0YWNrcyA9IGZ1bmN0aW9uIHBhcnNlRXJyb3JUb1N0YWNrcyhlcnJvcikge1xuICBpZiAoIWVycm9yIHx8ICEoZXJyb3IgaW5zdGFuY2VvZiBFcnJvcikpIHtcbiAgICB0aHJvdyBuZXcgRXJyb3IoXCJwYXJzZUVycm9yVG9TdGFja3MgZXhwZWN0cyBFcnJvciBvYmplY3RcIik7XG4gIH1cbiAgaWYgKHR5cGVvZiBlcnJvci5zdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgIHJldHVybiBlcnJvci5zdGFjay5zcGxpdChcIlxcblwiKS5maWx0ZXIoZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgICByZXR1cm4gc3RhY2sgIT09IFwiRXJyb3I6IFwiLmNvbmNhdChlcnJvci5tZXNzYWdlKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgRXJyb3JDYWxsYmFja1xuICogQHBhcmFtIHtFcnJvckV2ZW50fSBlcnJvclxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yQ2FsbGJhY2t9IGNhbGxiYWNrXG4gKi9cbnZhciBsaXN0ZW5Ub1J1bnRpbWVFcnJvciA9IGZ1bmN0aW9uIGxpc3RlblRvUnVudGltZUVycm9yKGNhbGxiYWNrKSB7XG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2FsbGJhY2spO1xuICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcImVycm9yXCIsIGNhbGxiYWNrKTtcbiAgfTtcbn07XG5cbi8qKlxuICogQGNhbGxiYWNrIFVuaGFuZGxlZFJlamVjdGlvbkNhbGxiYWNrXG4gKiBAcGFyYW0ge1Byb21pc2VSZWplY3Rpb25FdmVudH0gcmVqZWN0aW9uRXZlbnRcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5cbi8qKlxuICogQHBhcmFtIHtVbmhhbmRsZWRSZWplY3Rpb25DYWxsYmFja30gY2FsbGJhY2tcbiAqL1xudmFyIGxpc3RlblRvVW5oYW5kbGVkUmVqZWN0aW9uID0gZnVuY3Rpb24gbGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24oY2FsbGJhY2spIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJ1bmhhbmRsZWRyZWplY3Rpb25cIiwgY2FsbGJhY2spO1xuICByZXR1cm4gZnVuY3Rpb24gY2xlYW51cCgpIHtcbiAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBjYWxsYmFjayk7XG4gIH07XG59O1xuXG4vLyBTdHlsZXMgYXJlIGluc3BpcmVkIGJ5IGByZWFjdC1lcnJvci1vdmVybGF5YFxuXG52YXIgbXNnU3R5bGVzID0ge1xuICBlcnJvcjoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDIwNiwgMTcsIDM4LCAwLjEpXCIsXG4gICAgY29sb3I6IFwiI2ZjY2ZjZlwiXG4gIH0sXG4gIHdhcm5pbmc6IHtcbiAgICBiYWNrZ3JvdW5kQ29sb3I6IFwicmdiYSgyNTEsIDI0NSwgMTgwLCAwLjEpXCIsXG4gICAgY29sb3I6IFwiI2ZiZjViNFwiXG4gIH1cbn07XG52YXIgaWZyYW1lU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIHRvcDogMCxcbiAgbGVmdDogMCxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbiAgd2lkdGg6IFwiMTAwdndcIixcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIGJvcmRlcjogXCJub25lXCIsXG4gIFwiei1pbmRleFwiOiA5OTk5OTk5OTk5XG59O1xudmFyIGNvbnRhaW5lclN0eWxlID0ge1xuICBwb3NpdGlvbjogXCJmaXhlZFwiLFxuICBib3hTaXppbmc6IFwiYm9yZGVyLWJveFwiLFxuICBsZWZ0OiAwLFxuICB0b3A6IDAsXG4gIHJpZ2h0OiAwLFxuICBib3R0b206IDAsXG4gIHdpZHRoOiBcIjEwMHZ3XCIsXG4gIGhlaWdodDogXCIxMDB2aFwiLFxuICBmb250U2l6ZTogXCJsYXJnZVwiLFxuICBwYWRkaW5nOiBcIjJyZW0gMnJlbSA0cmVtIDJyZW1cIixcbiAgbGluZUhlaWdodDogXCIxLjJcIixcbiAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICBvdmVyZmxvdzogXCJhdXRvXCIsXG4gIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDAsIDAsIDAsIDAuOSlcIixcbiAgY29sb3I6IFwid2hpdGVcIlxufTtcbnZhciBoZWFkZXJTdHlsZSA9IHtcbiAgY29sb3I6IFwiI2U4M2I0NlwiLFxuICBmb250U2l6ZTogXCIyZW1cIixcbiAgd2hpdGVTcGFjZTogXCJwcmUtd3JhcFwiLFxuICBmb250RmFtaWx5OiBcInNhbnMtc2VyaWZcIixcbiAgbWFyZ2luOiBcIjAgMnJlbSAycmVtIDBcIixcbiAgZmxleDogXCIwIDAgYXV0b1wiLFxuICBtYXhIZWlnaHQ6IFwiNTAlXCIsXG4gIG92ZXJmbG93OiBcImF1dG9cIlxufTtcbnZhciBkaXNtaXNzQnV0dG9uU3R5bGUgPSB7XG4gIGNvbG9yOiBcIiNmZmZmZmZcIixcbiAgbGluZUhlaWdodDogXCIxcmVtXCIsXG4gIGZvbnRTaXplOiBcIjEuNXJlbVwiLFxuICBwYWRkaW5nOiBcIjFyZW1cIixcbiAgY3Vyc29yOiBcInBvaW50ZXJcIixcbiAgcG9zaXRpb246IFwiYWJzb2x1dGVcIixcbiAgcmlnaHQ6IDAsXG4gIHRvcDogMCxcbiAgYmFja2dyb3VuZENvbG9yOiBcInRyYW5zcGFyZW50XCIsXG4gIGJvcmRlcjogXCJub25lXCJcbn07XG52YXIgbXNnVHlwZVN0eWxlID0ge1xuICBjb2xvcjogXCIjZTgzYjQ2XCIsXG4gIGZvbnRTaXplOiBcIjEuMmVtXCIsXG4gIG1hcmdpbkJvdHRvbTogXCIxcmVtXCIsXG4gIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiXG59O1xudmFyIG1zZ1RleHRTdHlsZSA9IHtcbiAgbGluZUhlaWdodDogXCIxLjVcIixcbiAgZm9udFNpemU6IFwiMXJlbVwiLFxuICBmb250RmFtaWx5OiBcIk1lbmxvLCBDb25zb2xhcywgbW9ub3NwYWNlXCJcbn07XG5cbi8vIEFOU0kgSFRNTFxuXG52YXIgY29sb3JzID0ge1xuICByZXNldDogW1widHJhbnNwYXJlbnRcIiwgXCJ0cmFuc3BhcmVudFwiXSxcbiAgYmxhY2s6IFwiMTgxODE4XCIsXG4gIHJlZDogXCJFMzYwNDlcIixcbiAgZ3JlZW46IFwiQjNDQjc0XCIsXG4gIHllbGxvdzogXCJGRkQwODBcIixcbiAgYmx1ZTogXCI3Q0FGQzJcIixcbiAgbWFnZW50YTogXCI3RkFDQ0FcIixcbiAgY3lhbjogXCJDM0MyRUZcIixcbiAgbGlnaHRncmV5OiBcIkVCRTdFM1wiLFxuICBkYXJrZ3JleTogXCI2RDc4OTFcIlxufTtcbmFuc2lIVE1MLnNldENvbG9ycyhjb2xvcnMpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge3N0cmluZyAgfCB7IGZpbGU/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZzsgc3RhY2s/OiBzdHJpbmdbXSB9fSBpdGVtXG4gKiBAcmV0dXJucyB7eyBoZWFkZXI6IHN0cmluZywgYm9keTogc3RyaW5nIH19XG4gKi9cbnZhciBmb3JtYXRQcm9ibGVtID0gZnVuY3Rpb24gZm9ybWF0UHJvYmxlbSh0eXBlLCBpdGVtKSB7XG4gIHZhciBoZWFkZXIgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IFwiV0FSTklOR1wiIDogXCJFUlJPUlwiO1xuICB2YXIgYm9keSA9IFwiXCI7XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJzdHJpbmdcIikge1xuICAgIGJvZHkgKz0gaXRlbTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgZmlsZSA9IGl0ZW0uZmlsZSB8fCBcIlwiO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXN0ZWQtdGVybmFyeVxuICAgIHZhciBtb2R1bGVOYW1lID0gaXRlbS5tb2R1bGVOYW1lID8gaXRlbS5tb2R1bGVOYW1lLmluZGV4T2YoXCIhXCIpICE9PSAtMSA/IFwiXCIuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZS5yZXBsYWNlKC9eKFxcc3xcXFMpKiEvLCBcIlwiKSwgXCIgKFwiKS5jb25jYXQoaXRlbS5tb2R1bGVOYW1lLCBcIilcIikgOiBcIlwiLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUpIDogXCJcIjtcbiAgICB2YXIgbG9jID0gaXRlbS5sb2M7XG4gICAgaGVhZGVyICs9IFwiXCIuY29uY2F0KG1vZHVsZU5hbWUgfHwgZmlsZSA/IFwiIGluIFwiLmNvbmNhdChtb2R1bGVOYW1lID8gXCJcIi5jb25jYXQobW9kdWxlTmFtZSkuY29uY2F0KGZpbGUgPyBcIiAoXCIuY29uY2F0KGZpbGUsIFwiKVwiKSA6IFwiXCIpIDogZmlsZSkuY29uY2F0KGxvYyA/IFwiIFwiLmNvbmNhdChsb2MpIDogXCJcIikgOiBcIlwiKTtcbiAgICBib2R5ICs9IGl0ZW0ubWVzc2FnZSB8fCBcIlwiO1xuICB9XG4gIGlmIChBcnJheS5pc0FycmF5KGl0ZW0uc3RhY2spKSB7XG4gICAgaXRlbS5zdGFjay5mb3JFYWNoKGZ1bmN0aW9uIChzdGFjaykge1xuICAgICAgaWYgKHR5cGVvZiBzdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICBib2R5ICs9IFwiXFxyXFxuXCIuY29uY2F0KHN0YWNrKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICByZXR1cm4ge1xuICAgIGhlYWRlcjogaGVhZGVyLFxuICAgIGJvZHk6IGJvZHlcbiAgfTtcbn07XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ3JlYXRlT3ZlcmxheU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7c3RyaW5nIHwgbnVsbH0gdHJ1c3RlZFR5cGVzUG9saWN5TmFtZVxuICogQHByb3BlcnR5IHtib29sZWFuIHwgKGVycm9yOiBFcnJvcikgPT4gdm9pZH0gW2NhdGNoUnVudGltZUVycm9yXVxuICovXG5cbi8qKlxuICpcbiAqIEBwYXJhbSB7Q3JlYXRlT3ZlcmxheU9wdGlvbnN9IG9wdGlvbnNcbiAqL1xudmFyIGNyZWF0ZU92ZXJsYXkgPSBmdW5jdGlvbiBjcmVhdGVPdmVybGF5KG9wdGlvbnMpIHtcbiAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gIHZhciBpZnJhbWVDb250YWluZXJFbGVtZW50O1xuICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cbiAgdmFyIGNvbnRhaW5lckVsZW1lbnQ7XG4gIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgaGVhZGVyRWxlbWVudDtcbiAgLyoqIEB0eXBlIHtBcnJheTwoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWQ+fSAqL1xuICB2YXIgb25Mb2FkUXVldWUgPSBbXTtcbiAgLyoqIEB0eXBlIHtUcnVzdGVkVHlwZVBvbGljeSB8IHVuZGVmaW5lZH0gKi9cbiAgdmFyIG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3k7XG5cbiAgLyoqXG4gICAqXG4gICAqIEBwYXJhbSB7SFRNTEVsZW1lbnR9IGVsZW1lbnRcbiAgICogQHBhcmFtIHtDU1NTdHlsZURlY2xhcmF0aW9ufSBzdHlsZVxuICAgKi9cbiAgZnVuY3Rpb24gYXBwbHlTdHlsZShlbGVtZW50LCBzdHlsZSkge1xuICAgIE9iamVjdC5rZXlzKHN0eWxlKS5mb3JFYWNoKGZ1bmN0aW9uIChwcm9wKSB7XG4gICAgICBlbGVtZW50LnN0eWxlW3Byb3BdID0gc3R5bGVbcHJvcF07XG4gICAgfSk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSkge1xuICAgIC8vIEVuYWJsZSBUcnVzdGVkIFR5cGVzIGlmIHRoZXkgYXJlIGF2YWlsYWJsZSBpbiB0aGUgY3VycmVudCBicm93c2VyLlxuICAgIGlmICh3aW5kb3cudHJ1c3RlZFR5cGVzKSB7XG4gICAgICBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5ID0gd2luZG93LnRydXN0ZWRUeXBlcy5jcmVhdGVQb2xpY3kodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSB8fCBcIndlYnBhY2stZGV2LXNlcnZlciNvdmVybGF5XCIsIHtcbiAgICAgICAgY3JlYXRlSFRNTDogZnVuY3Rpb24gY3JlYXRlSFRNTCh2YWx1ZSkge1xuICAgICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgfVxuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiaWZyYW1lXCIpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuaWQgPSBcIndlYnBhY2stZGV2LXNlcnZlci1jbGllbnQtb3ZlcmxheVwiO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQuc3JjID0gXCJhYm91dDpibGFua1wiO1xuICAgIGFwcGx5U3R5bGUoaWZyYW1lQ29udGFpbmVyRWxlbWVudCwgaWZyYW1lU3R5bGUpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQub25sb2FkID0gZnVuY3Rpb24gKCkge1xuICAgICAgdmFyIGNvbnRlbnRFbGVtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbiAgICAgICgvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250YWluZXJFbGVtZW50ID0gLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbiAgICAgICgvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQpLmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBjb250ZW50RWxlbWVudC5pZCA9IFwid2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5LWRpdlwiO1xuICAgICAgYXBwbHlTdHlsZShjb250ZW50RWxlbWVudCwgY29udGFpbmVyU3R5bGUpO1xuICAgICAgaGVhZGVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICBoZWFkZXJFbGVtZW50LmlubmVyVGV4dCA9IFwiQ29tcGlsZWQgd2l0aCBwcm9ibGVtczpcIjtcbiAgICAgIGFwcGx5U3R5bGUoaGVhZGVyRWxlbWVudCwgaGVhZGVyU3R5bGUpO1xuICAgICAgdmFyIGNsb3NlQnV0dG9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJidXR0b25cIik7XG4gICAgICBhcHBseVN0eWxlKGNsb3NlQnV0dG9uRWxlbWVudCwgZGlzbWlzc0J1dHRvblN0eWxlKTtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5pbm5lclRleHQgPSBcIsOXXCI7XG4gICAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuYXJpYUxhYmVsID0gXCJEaXNtaXNzXCI7XG4gICAgICBjbG9zZUJ1dHRvbkVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXVzZS1iZWZvcmUtZGVmaW5lXG4gICAgICAgIG92ZXJsYXlTZXJ2aWNlLnNlbmQoe1xuICAgICAgICAgIHR5cGU6IFwiRElTTUlTU1wiXG4gICAgICAgIH0pO1xuICAgICAgfSk7XG4gICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChoZWFkZXJFbGVtZW50KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNsb3NlQnV0dG9uRWxlbWVudCk7XG4gICAgICBjb250ZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXJFbGVtZW50KTtcblxuICAgICAgLyoqIEB0eXBlIHtEb2N1bWVudH0gKi9cbiAgICAgICgvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5jb250ZW50RG9jdW1lbnQpLmJvZHkuYXBwZW5kQ2hpbGQoY29udGVudEVsZW1lbnQpO1xuICAgICAgb25Mb2FkUXVldWUuZm9yRWFjaChmdW5jdGlvbiAob25Mb2FkKSB7XG4gICAgICAgIG9uTG9hZCgvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL2NvbnRlbnRFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgICAgb25Mb2FkUXVldWUgPSBbXTtcblxuICAgICAgLyoqIEB0eXBlIHtIVE1MSUZyYW1lRWxlbWVudH0gKi9cbiAgICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQub25sb2FkID0gbnVsbDtcbiAgICB9O1xuICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaWZyYW1lQ29udGFpbmVyRWxlbWVudCk7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsoZWxlbWVudDogSFRNTERpdkVsZW1lbnQpID0+IHZvaWR9IGNhbGxiYWNrXG4gICAqIEBwYXJhbSB7c3RyaW5nIHwgbnVsbH0gdHJ1c3RlZFR5cGVzUG9saWN5TmFtZVxuICAgKi9cbiAgZnVuY3Rpb24gZW5zdXJlT3ZlcmxheUV4aXN0cyhjYWxsYmFjaywgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZSkge1xuICAgIGlmIChjb250YWluZXJFbGVtZW50KSB7XG4gICAgICBjb250YWluZXJFbGVtZW50LmlubmVySFRNTCA9IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPyBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwoXCJcIikgOiBcIlwiO1xuICAgICAgLy8gRXZlcnl0aGluZyBpcyByZWFkeSwgY2FsbCB0aGUgY2FsbGJhY2sgcmlnaHQgYXdheS5cbiAgICAgIGNhbGxiYWNrKGNvbnRhaW5lckVsZW1lbnQpO1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvbkxvYWRRdWV1ZS5wdXNoKGNhbGxiYWNrKTtcbiAgICBpZiAoaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjcmVhdGVDb250YWluZXIodHJ1c3RlZFR5cGVzUG9saWN5TmFtZSk7XG4gIH1cblxuICAvLyBTdWNjZXNzZnVsIGNvbXBpbGF0aW9uLlxuICBmdW5jdGlvbiBoaWRlKCkge1xuICAgIGlmICghaWZyYW1lQ29udGFpbmVyRWxlbWVudCkge1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIC8vIENsZWFuIHVwIGFuZCByZXNldCBpbnRlcm5hbCBzdGF0ZS5cbiAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlmcmFtZUNvbnRhaW5lckVsZW1lbnQpO1xuICAgIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICAgIGNvbnRhaW5lckVsZW1lbnQgPSBudWxsO1xuICB9XG5cbiAgLy8gQ29tcGlsYXRpb24gd2l0aCBlcnJvcnMgKGUuZy4gc3ludGF4IGVycm9yIG9yIG1pc3NpbmcgbW9kdWxlcykuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICAgKiBAcGFyYW0ge0FycmF5PHN0cmluZyAgfCB7IG1vZHVsZUlkZW50aWZpZXI/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9Pn0gbWVzc2FnZXNcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqIEBwYXJhbSB7J2J1aWxkJyB8ICdydW50aW1lJ30gbWVzc2FnZVNvdXJjZVxuICAgKi9cbiAgZnVuY3Rpb24gc2hvdyh0eXBlLCBtZXNzYWdlcywgdHJ1c3RlZFR5cGVzUG9saWN5TmFtZSwgbWVzc2FnZVNvdXJjZSkge1xuICAgIGVuc3VyZU92ZXJsYXlFeGlzdHMoZnVuY3Rpb24gKCkge1xuICAgICAgaGVhZGVyRWxlbWVudC5pbm5lclRleHQgPSBtZXNzYWdlU291cmNlID09PSBcInJ1bnRpbWVcIiA/IFwiVW5jYXVnaHQgcnVudGltZSBlcnJvcnM6XCIgOiBcIkNvbXBpbGVkIHdpdGggcHJvYmxlbXM6XCI7XG4gICAgICBtZXNzYWdlcy5mb3JFYWNoKGZ1bmN0aW9uIChtZXNzYWdlKSB7XG4gICAgICAgIHZhciBlbnRyeUVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICB2YXIgbXNnU3R5bGUgPSB0eXBlID09PSBcIndhcm5pbmdcIiA/IG1zZ1N0eWxlcy53YXJuaW5nIDogbXNnU3R5bGVzLmVycm9yO1xuICAgICAgICBhcHBseVN0eWxlKGVudHJ5RWxlbWVudCwgX29iamVjdFNwcmVhZChfb2JqZWN0U3ByZWFkKHt9LCBtc2dTdHlsZSksIHt9LCB7XG4gICAgICAgICAgcGFkZGluZzogXCIxcmVtIDFyZW0gMS41cmVtIDFyZW1cIlxuICAgICAgICB9KSk7XG4gICAgICAgIHZhciB0eXBlRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBfZm9ybWF0UHJvYmxlbSA9IGZvcm1hdFByb2JsZW0odHlwZSwgbWVzc2FnZSksXG4gICAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0uaGVhZGVyLFxuICAgICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgICB0eXBlRWxlbWVudC5pbm5lclRleHQgPSBoZWFkZXI7XG4gICAgICAgIGFwcGx5U3R5bGUodHlwZUVsZW1lbnQsIG1zZ1R5cGVTdHlsZSk7XG4gICAgICAgIGlmIChtZXNzYWdlLm1vZHVsZUlkZW50aWZpZXIpIHtcbiAgICAgICAgICBhcHBseVN0eWxlKHR5cGVFbGVtZW50LCB7XG4gICAgICAgICAgICBjdXJzb3I6IFwicG9pbnRlclwiXG4gICAgICAgICAgfSk7XG4gICAgICAgICAgLy8gZWxlbWVudC5kYXRhc2V0IG5vdCBzdXBwb3J0ZWQgaW4gSUVcbiAgICAgICAgICB0eXBlRWxlbWVudC5zZXRBdHRyaWJ1dGUoXCJkYXRhLWNhbi1vcGVuXCIsIHRydWUpO1xuICAgICAgICAgIHR5cGVFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICBmZXRjaChcIi93ZWJwYWNrLWRldi1zZXJ2ZXIvb3Blbi1lZGl0b3I/ZmlsZU5hbWU9XCIuY29uY2F0KG1lc3NhZ2UubW9kdWxlSWRlbnRpZmllcikpO1xuICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gTWFrZSBpdCBsb29rIHNpbWlsYXIgdG8gb3VyIHRlcm1pbmFsLlxuICAgICAgICB2YXIgdGV4dCA9IGFuc2lIVE1MKGVuY29kZShib2R5KSk7XG4gICAgICAgIHZhciBtZXNzYWdlVGV4dE5vZGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwiZGl2XCIpO1xuICAgICAgICBhcHBseVN0eWxlKG1lc3NhZ2VUZXh0Tm9kZSwgbXNnVGV4dFN0eWxlKTtcbiAgICAgICAgbWVzc2FnZVRleHROb2RlLmlubmVySFRNTCA9IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPyBvdmVybGF5VHJ1c3RlZFR5cGVzUG9saWN5LmNyZWF0ZUhUTUwodGV4dCkgOiB0ZXh0O1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQodHlwZUVsZW1lbnQpO1xuICAgICAgICBlbnRyeUVsZW1lbnQuYXBwZW5kQ2hpbGQobWVzc2FnZVRleHROb2RlKTtcblxuICAgICAgICAvKiogQHR5cGUge0hUTUxEaXZFbGVtZW50fSAqL1xuICAgICAgICBjb250YWluZXJFbGVtZW50LmFwcGVuZENoaWxkKGVudHJ5RWxlbWVudCk7XG4gICAgICB9KTtcbiAgICB9LCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKTtcbiAgfVxuICB2YXIgb3ZlcmxheVNlcnZpY2UgPSBjcmVhdGVPdmVybGF5TWFjaGluZSh7XG4gICAgc2hvd092ZXJsYXk6IGZ1bmN0aW9uIHNob3dPdmVybGF5KF9yZWYzKSB7XG4gICAgICB2YXIgX3JlZjMkbGV2ZWwgPSBfcmVmMy5sZXZlbCxcbiAgICAgICAgbGV2ZWwgPSBfcmVmMyRsZXZlbCA9PT0gdm9pZCAwID8gXCJlcnJvclwiIDogX3JlZjMkbGV2ZWwsXG4gICAgICAgIG1lc3NhZ2VzID0gX3JlZjMubWVzc2FnZXMsXG4gICAgICAgIG1lc3NhZ2VTb3VyY2UgPSBfcmVmMy5tZXNzYWdlU291cmNlO1xuICAgICAgcmV0dXJuIHNob3cobGV2ZWwsIG1lc3NhZ2VzLCBvcHRpb25zLnRydXN0ZWRUeXBlc1BvbGljeU5hbWUsIG1lc3NhZ2VTb3VyY2UpO1xuICAgIH0sXG4gICAgaGlkZU92ZXJsYXk6IGhpZGVcbiAgfSk7XG4gIGlmIChvcHRpb25zLmNhdGNoUnVudGltZUVycm9yKSB7XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtFcnJvciB8IHVuZGVmaW5lZH0gZXJyb3JcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gZmFsbGJhY2tNZXNzYWdlXG4gICAgICovXG4gICAgdmFyIGhhbmRsZUVycm9yID0gZnVuY3Rpb24gaGFuZGxlRXJyb3IoZXJyb3IsIGZhbGxiYWNrTWVzc2FnZSkge1xuICAgICAgdmFyIGVycm9yT2JqZWN0ID0gZXJyb3IgaW5zdGFuY2VvZiBFcnJvciA/IGVycm9yIDogbmV3IEVycm9yKGVycm9yIHx8IGZhbGxiYWNrTWVzc2FnZSk7XG4gICAgICB2YXIgc2hvdWxkRGlzcGxheSA9IHR5cGVvZiBvcHRpb25zLmNhdGNoUnVudGltZUVycm9yID09PSBcImZ1bmN0aW9uXCIgPyBvcHRpb25zLmNhdGNoUnVudGltZUVycm9yKGVycm9yT2JqZWN0KSA6IHRydWU7XG4gICAgICBpZiAoc2hvdWxkRGlzcGxheSkge1xuICAgICAgICBvdmVybGF5U2VydmljZS5zZW5kKHtcbiAgICAgICAgICB0eXBlOiBcIlJVTlRJTUVfRVJST1JcIixcbiAgICAgICAgICBtZXNzYWdlczogW3tcbiAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yT2JqZWN0Lm1lc3NhZ2UsXG4gICAgICAgICAgICBzdGFjazogcGFyc2VFcnJvclRvU3RhY2tzKGVycm9yT2JqZWN0KVxuICAgICAgICAgIH1dXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH07XG4gICAgbGlzdGVuVG9SdW50aW1lRXJyb3IoZnVuY3Rpb24gKGVycm9yRXZlbnQpIHtcbiAgICAgIC8vIGVycm9yIHByb3BlcnR5IG1heSBiZSBlbXB0eSBpbiBvbGRlciBicm93c2VyIGxpa2UgSUVcbiAgICAgIHZhciBlcnJvciA9IGVycm9yRXZlbnQuZXJyb3IsXG4gICAgICAgIG1lc3NhZ2UgPSBlcnJvckV2ZW50Lm1lc3NhZ2U7XG4gICAgICBpZiAoIWVycm9yICYmICFtZXNzYWdlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgLy8gaWYgZXJyb3Igc3RhY2sgaW5kaWNhdGVzIGEgUmVhY3QgZXJyb3IgYm91bmRhcnkgY2F1Z2h0IHRoZSBlcnJvciwgZG8gbm90IHNob3cgb3ZlcmxheS5cbiAgICAgIGlmIChlcnJvciAmJiBlcnJvci5zdGFjayAmJiBlcnJvci5zdGFjay5pbmNsdWRlcyhcImludm9rZUd1YXJkZWRDYWxsYmFja0RldlwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBoYW5kbGVFcnJvcihlcnJvciwgbWVzc2FnZSk7XG4gICAgfSk7XG4gICAgbGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24oZnVuY3Rpb24gKHByb21pc2VSZWplY3Rpb25FdmVudCkge1xuICAgICAgdmFyIHJlYXNvbiA9IHByb21pc2VSZWplY3Rpb25FdmVudC5yZWFzb247XG4gICAgICBoYW5kbGVFcnJvcihyZWFzb24sIFwiVW5rbm93biBwcm9taXNlIHJlamVjdGlvbiByZWFzb25cIik7XG4gICAgfSk7XG4gIH1cbiAgcmV0dXJuIG92ZXJsYXlTZXJ2aWNlO1xufTtcbmV4cG9ydCB7IGZvcm1hdFByb2JsZW0sIGNyZWF0ZU92ZXJsYXkgfTsiLCJmdW5jdGlvbiBfdHlwZW9mKG8pIHsgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiOyByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIFwic3ltYm9sXCIgPT0gdHlwZW9mIFN5bWJvbC5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7IHJldHVybiB0eXBlb2YgbzsgfSA6IGZ1bmN0aW9uIChvKSB7IHJldHVybiBvICYmIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgU3ltYm9sICYmIG8uY29uc3RydWN0b3IgPT09IFN5bWJvbCAmJiBvICE9PSBTeW1ib2wucHJvdG90eXBlID8gXCJzeW1ib2xcIiA6IHR5cGVvZiBvOyB9LCBfdHlwZW9mKG8pOyB9XG5mdW5jdGlvbiBfY2xhc3NDYWxsQ2hlY2soYSwgbikgeyBpZiAoIShhIGluc3RhbmNlb2YgbikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgY2FsbCBhIGNsYXNzIGFzIGEgZnVuY3Rpb25cIik7IH1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHsgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7IHZhciBvID0gclt0XTsgby5lbnVtZXJhYmxlID0gby5lbnVtZXJhYmxlIHx8ICExLCBvLmNvbmZpZ3VyYWJsZSA9ICEwLCBcInZhbHVlXCIgaW4gbyAmJiAoby53cml0YWJsZSA9ICEwKSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIF90b1Byb3BlcnR5S2V5KG8ua2V5KSwgbyk7IH0gfVxuZnVuY3Rpb24gX2NyZWF0ZUNsYXNzKGUsIHIsIHQpIHsgcmV0dXJuIHIgJiYgX2RlZmluZVByb3BlcnRpZXMoZS5wcm90b3R5cGUsIHIpLCB0ICYmIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHQpLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogITEgfSksIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG5mdW5jdGlvbiBfY2FsbFN1cGVyKHQsIG8sIGUpIHsgcmV0dXJuIG8gPSBfZ2V0UHJvdG90eXBlT2YobyksIF9wb3NzaWJsZUNvbnN0cnVjdG9yUmV0dXJuKHQsIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSA/IFJlZmxlY3QuY29uc3RydWN0KG8sIGUgfHwgW10sIF9nZXRQcm90b3R5cGVPZih0KS5jb25zdHJ1Y3RvcikgOiBvLmFwcGx5KHQsIGUpKTsgfVxuZnVuY3Rpb24gX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgZSkgeyBpZiAoZSAmJiAoXCJvYmplY3RcIiA9PSBfdHlwZW9mKGUpIHx8IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgZSkpIHJldHVybiBlOyBpZiAodm9pZCAwICE9PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiRGVyaXZlZCBjb25zdHJ1Y3RvcnMgbWF5IG9ubHkgcmV0dXJuIG9iamVjdCBvciB1bmRlZmluZWRcIik7IHJldHVybiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKHQpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0VGhpc0luaXRpYWxpemVkKGUpIHsgaWYgKHZvaWQgMCA9PT0gZSkgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKFwidGhpcyBoYXNuJ3QgYmVlbiBpbml0aWFsaXNlZCAtIHN1cGVyKCkgaGFzbid0IGJlZW4gY2FsbGVkXCIpOyByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2luaGVyaXRzKHQsIGUpIHsgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgZSAmJiBudWxsICE9PSBlKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3VwZXIgZXhwcmVzc2lvbiBtdXN0IGVpdGhlciBiZSBudWxsIG9yIGEgZnVuY3Rpb25cIik7IHQucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZShlICYmIGUucHJvdG90eXBlLCB7IGNvbnN0cnVjdG9yOiB7IHZhbHVlOiB0LCB3cml0YWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfSB9KSwgT2JqZWN0LmRlZmluZVByb3BlcnR5KHQsIFwicHJvdG90eXBlXCIsIHsgd3JpdGFibGU6ICExIH0pLCBlICYmIF9zZXRQcm90b3R5cGVPZih0LCBlKTsgfVxuZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcih0KSB7IHZhciByID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBNYXAgPyBuZXcgTWFwKCkgOiB2b2lkIDA7IHJldHVybiBfd3JhcE5hdGl2ZVN1cGVyID0gZnVuY3Rpb24gX3dyYXBOYXRpdmVTdXBlcih0KSB7IGlmIChudWxsID09PSB0IHx8ICFfaXNOYXRpdmVGdW5jdGlvbih0KSkgcmV0dXJuIHQ7IGlmIChcImZ1bmN0aW9uXCIgIT0gdHlwZW9mIHQpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgaWYgKHZvaWQgMCAhPT0gcikgeyBpZiAoci5oYXModCkpIHJldHVybiByLmdldCh0KTsgci5zZXQodCwgV3JhcHBlcik7IH0gZnVuY3Rpb24gV3JhcHBlcigpIHsgcmV0dXJuIF9jb25zdHJ1Y3QodCwgYXJndW1lbnRzLCBfZ2V0UHJvdG90eXBlT2YodGhpcykuY29uc3RydWN0b3IpOyB9IHJldHVybiBXcmFwcGVyLnByb3RvdHlwZSA9IE9iamVjdC5jcmVhdGUodC5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IFdyYXBwZXIsIGVudW1lcmFibGU6ICExLCB3cml0YWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAgfSB9KSwgX3NldFByb3RvdHlwZU9mKFdyYXBwZXIsIHQpOyB9LCBfd3JhcE5hdGl2ZVN1cGVyKHQpOyB9XG5mdW5jdGlvbiBfY29uc3RydWN0KHQsIGUsIHIpIHsgaWYgKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSkgcmV0dXJuIFJlZmxlY3QuY29uc3RydWN0LmFwcGx5KG51bGwsIGFyZ3VtZW50cyk7IHZhciBvID0gW251bGxdOyBvLnB1c2guYXBwbHkobywgZSk7IHZhciBwID0gbmV3ICh0LmJpbmQuYXBwbHkodCwgbykpKCk7IHJldHVybiByICYmIF9zZXRQcm90b3R5cGVPZihwLCByLnByb3RvdHlwZSksIHA7IH1cbmZ1bmN0aW9uIF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QoKSB7IHRyeSB7IHZhciB0ID0gIUJvb2xlYW4ucHJvdG90eXBlLnZhbHVlT2YuY2FsbChSZWZsZWN0LmNvbnN0cnVjdChCb29sZWFuLCBbXSwgZnVuY3Rpb24gKCkge30pKTsgfSBjYXRjaCAodCkge30gcmV0dXJuIChfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0ID0gZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgcmV0dXJuICEhdDsgfSkoKTsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlRnVuY3Rpb24odCkgeyB0cnkgeyByZXR1cm4gLTEgIT09IEZ1bmN0aW9uLnRvU3RyaW5nLmNhbGwodCkuaW5kZXhPZihcIltuYXRpdmUgY29kZV1cIik7IH0gY2F0Y2ggKG4pIHsgcmV0dXJuIFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgdDsgfSB9XG5mdW5jdGlvbiBfc2V0UHJvdG90eXBlT2YodCwgZSkgeyByZXR1cm4gX3NldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LnNldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uICh0LCBlKSB7IHJldHVybiB0Ll9fcHJvdG9fXyA9IGUsIHQ7IH0sIF9zZXRQcm90b3R5cGVPZih0LCBlKTsgfVxuZnVuY3Rpb24gX2dldFByb3RvdHlwZU9mKHQpIHsgcmV0dXJuIF9nZXRQcm90b3R5cGVPZiA9IE9iamVjdC5zZXRQcm90b3R5cGVPZiA/IE9iamVjdC5nZXRQcm90b3R5cGVPZi5iaW5kKCkgOiBmdW5jdGlvbiAodCkgeyByZXR1cm4gdC5fX3Byb3RvX18gfHwgT2JqZWN0LmdldFByb3RvdHlwZU9mKHQpOyB9LCBfZ2V0UHJvdG90eXBlT2YodCk7IH1cbmZ1bmN0aW9uIF9jbGFzc1ByaXZhdGVNZXRob2RJbml0U3BlYyhlLCBhKSB7IF9jaGVja1ByaXZhdGVSZWRlY2xhcmF0aW9uKGUsIGEpLCBhLmFkZChlKTsgfVxuZnVuY3Rpb24gX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24oZSwgdCkgeyBpZiAodC5oYXMoZSkpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgaW5pdGlhbGl6ZSB0aGUgc2FtZSBwcml2YXRlIGVsZW1lbnRzIHR3aWNlIG9uIGFuIG9iamVjdFwiKTsgfVxuZnVuY3Rpb24gX2Fzc2VydENsYXNzQnJhbmQoZSwgdCwgbikgeyBpZiAoXCJmdW5jdGlvblwiID09IHR5cGVvZiBlID8gZSA9PT0gdCA6IGUuaGFzKHQpKSByZXR1cm4gYXJndW1lbnRzLmxlbmd0aCA8IDMgPyB0IDogbjsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgZWxlbWVudCBpcyBub3QgcHJlc2VudCBvbiB0aGlzIG9iamVjdFwiKTsgfVxuZXhwb3J0IGZ1bmN0aW9uIGlzUHJvZ3Jlc3NTdXBwb3J0ZWQoKSB7XG4gIHJldHVybiBcImN1c3RvbUVsZW1lbnRzXCIgaW4gc2VsZiAmJiAhIUhUTUxFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG59XG5leHBvcnQgZnVuY3Rpb24gZGVmaW5lUHJvZ3Jlc3NFbGVtZW50KCkge1xuICB2YXIgX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcztcbiAgaWYgKGN1c3RvbUVsZW1lbnRzLmdldChcIndkcy1wcm9ncmVzc1wiKSkge1xuICAgIHJldHVybjtcbiAgfVxuICB2YXIgX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCA9IC8qI19fUFVSRV9fKi9uZXcgV2Vha1NldCgpO1xuICB2YXIgV2VicGFja0RldlNlcnZlclByb2dyZXNzID0gLyojX19QVVJFX18qL2Z1bmN0aW9uIChfSFRNTEVsZW1lbnQpIHtcbiAgICBmdW5jdGlvbiBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MoKSB7XG4gICAgICB2YXIgX3RoaXM7XG4gICAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VicGFja0RldlNlcnZlclByb2dyZXNzKTtcbiAgICAgIF90aGlzID0gX2NhbGxTdXBlcih0aGlzLCBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MpO1xuICAgICAgX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKF90aGlzLCBfV2VicGFja0RldlNlcnZlclByb2dyZXNzX2JyYW5kKTtcbiAgICAgIF90aGlzLmF0dGFjaFNoYWRvdyh7XG4gICAgICAgIG1vZGU6IFwib3BlblwiXG4gICAgICB9KTtcbiAgICAgIF90aGlzLm1heERhc2hPZmZzZXQgPSAtMjE5Ljk5MDc4MzY5MTQwNjI1O1xuICAgICAgX3RoaXMuYW5pbWF0aW9uVGltZXIgPSBudWxsO1xuICAgICAgcmV0dXJuIF90aGlzO1xuICAgIH1cbiAgICBfaW5oZXJpdHMoV2VicGFja0RldlNlcnZlclByb2dyZXNzLCBfSFRNTEVsZW1lbnQpO1xuICAgIHJldHVybiBfY3JlYXRlQ2xhc3MoV2VicGFja0RldlNlcnZlclByb2dyZXNzLCBbe1xuICAgICAga2V5OiBcImNvbm5lY3RlZENhbGxiYWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIHRoaXMsIF9yZXNldCkuY2FsbCh0aGlzKTtcbiAgICAgIH1cbiAgICB9LCB7XG4gICAgICBrZXk6IFwiYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrXCIsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gYXR0cmlidXRlQ2hhbmdlZENhbGxiYWNrKG5hbWUsIG9sZFZhbHVlLCBuZXdWYWx1ZSkge1xuICAgICAgICBpZiAobmFtZSA9PT0gXCJwcm9ncmVzc1wiKSB7XG4gICAgICAgICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX3VwZGF0ZSkuY2FsbCh0aGlzLCBOdW1iZXIobmV3VmFsdWUpKTtcbiAgICAgICAgfSBlbHNlIGlmIChuYW1lID09PSBcInR5cGVcIikge1xuICAgICAgICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIHRoaXMsIF9yZXNldCkuY2FsbCh0aGlzKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1dLCBbe1xuICAgICAga2V5OiBcIm9ic2VydmVkQXR0cmlidXRlc1wiLFxuICAgICAgZ2V0OiBmdW5jdGlvbiBnZXQoKSB7XG4gICAgICAgIHJldHVybiBbXCJwcm9ncmVzc1wiLCBcInR5cGVcIl07XG4gICAgICB9XG4gICAgfV0pO1xuICB9KC8qI19fUFVSRV9fKi9fd3JhcE5hdGl2ZVN1cGVyKEhUTUxFbGVtZW50KSk7XG4gIF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MgPSBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3M7XG4gIGZ1bmN0aW9uIF9yZXNldCgpIHtcbiAgICB2YXIgX3RoaXMkZ2V0QXR0cmlidXRlLCBfTnVtYmVyO1xuICAgIGNsZWFyVGltZW91dCh0aGlzLmFuaW1hdGlvblRpbWVyKTtcbiAgICB0aGlzLmFuaW1hdGlvblRpbWVyID0gbnVsbDtcbiAgICB2YXIgdHlwZUF0dHIgPSAoX3RoaXMkZ2V0QXR0cmlidXRlID0gdGhpcy5nZXRBdHRyaWJ1dGUoXCJ0eXBlXCIpKSA9PT0gbnVsbCB8fCBfdGhpcyRnZXRBdHRyaWJ1dGUgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF90aGlzJGdldEF0dHJpYnV0ZS50b0xvd2VyQ2FzZSgpO1xuICAgIHRoaXMudHlwZSA9IHR5cGVBdHRyID09PSBcImNpcmN1bGFyXCIgPyBcImNpcmN1bGFyXCIgOiBcImxpbmVhclwiO1xuICAgIHZhciBpbm5lckhUTUwgPSB0aGlzLnR5cGUgPT09IFwiY2lyY3VsYXJcIiA/IF9jaXJjdWxhclRlbXBsYXRlLmNhbGwoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcykgOiBfbGluZWFyVGVtcGxhdGUuY2FsbChfV2VicGFja0RldlNlcnZlclByb2dyZXNzKTtcbiAgICB0aGlzLnNoYWRvd1Jvb3QuaW5uZXJIVE1MID0gaW5uZXJIVE1MO1xuICAgIHRoaXMuaW5pdGlhbFByb2dyZXNzID0gKF9OdW1iZXIgPSBOdW1iZXIodGhpcy5nZXRBdHRyaWJ1dGUoXCJwcm9ncmVzc1wiKSkpICE9PSBudWxsICYmIF9OdW1iZXIgIT09IHZvaWQgMCA/IF9OdW1iZXIgOiAwO1xuICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIHRoaXMsIF91cGRhdGUpLmNhbGwodGhpcywgdGhpcy5pbml0aWFsUHJvZ3Jlc3MpO1xuICB9XG4gIGZ1bmN0aW9uIF9jaXJjdWxhclRlbXBsYXRlKCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIHdpZHRoOiAyMDBweDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDIwMHB4O1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICByaWdodDogNSU7XFxuICAgICAgICAgICAgdG9wOiA1JTtcXG4gICAgICAgICAgICB0cmFuc2l0aW9uOiBvcGFjaXR5IC4yNXMgZWFzZS1pbi1vdXQ7XFxuICAgICAgICAgICAgei1pbmRleDogMjE0NzQ4MzY0NTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIGNpcmNsZSB7XFxuICAgICAgICAgICAgZmlsbDogIzI4MmQzNTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHBhdGgge1xcbiAgICAgICAgICAgIGZpbGw6IHJnYmEoMCwgMCwgMCwgMCk7XFxuICAgICAgICAgICAgc3Ryb2tlOiByZ2IoMTg2LCAyMjMsIDE3Mik7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hhcnJheTogMjE5Ljk5MDc4MzY5MTQwNjI1O1xcbiAgICAgICAgICAgIHN0cm9rZS1kYXNob2Zmc2V0OiAtMjE5Ljk5MDc4MzY5MTQwNjI1O1xcbiAgICAgICAgICAgIHN0cm9rZS13aWR0aDogMTA7XFxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoOTBkZWcpIHRyYW5zbGF0ZSgwcHgsIC04MHB4KTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRleHQge1xcbiAgICAgICAgICAgIGZvbnQtZmFtaWx5OiAnT3BlbiBTYW5zJywgc2Fucy1zZXJpZjtcXG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XFxuICAgICAgICAgICAgZmlsbDogI2ZmZmZmZjtcXG4gICAgICAgICAgICBkb21pbmFudC1iYXNlbGluZTogbWlkZGxlO1xcbiAgICAgICAgICAgIHRleHQtYW5jaG9yOiBtaWRkbGU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICB0c3BhbiNwZXJjZW50LXN1cGVyIHtcXG4gICAgICAgICAgICBmaWxsOiAjYmRjM2M3O1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMC40NWVtO1xcbiAgICAgICAgICAgIGJhc2VsaW5lLXNoaWZ0OiAxMCU7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgdHJhbnNmb3JtOiBzY2FsZSgxKTsgfVxcbiAgICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB0cmFuc2Zvcm06IHNjYWxlKDApOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGlzYXBwZWFyIHtcXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUgMC4zcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGlkZGVuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cXG4gICAgICAgIDxzdmcgaWQ9XFxcInByb2dyZXNzXFxcIiBjbGFzcz1cXFwiaGlkZGVuIG5vc2VsZWN0XFxcIiB2aWV3Qm94PVxcXCIwIDAgODAgODBcXFwiPlxcbiAgICAgICAgPGNpcmNsZSBjeD1cXFwiNTAlXFxcIiBjeT1cXFwiNTAlXFxcIiByPVxcXCIzNVxcXCI+PC9jaXJjbGU+XFxuICAgICAgICA8cGF0aCBkPVxcXCJNNSw0MGEzNSwzNSAwIDEsMCA3MCwwYTM1LDM1IDAgMSwwIC03MCwwXFxcIj48L3BhdGg+XFxuICAgICAgICA8dGV4dCB4PVxcXCI1MCVcXFwiIHk9XFxcIjUxJVxcXCI+XFxuICAgICAgICAgICAgPHRzcGFuIGlkPVxcXCJwZXJjZW50LXZhbHVlXFxcIj4wPC90c3Bhbj5cXG4gICAgICAgICAgICA8dHNwYW4gaWQ9XFxcInBlcmNlbnQtc3VwZXJcXFwiPiU8L3RzcGFuPlxcbiAgICAgICAgPC90ZXh0PlxcbiAgICAgICAgPC9zdmc+XFxuICAgICAgXCI7XG4gIH1cbiAgZnVuY3Rpb24gX2xpbmVhclRlbXBsYXRlKCkge1xuICAgIHJldHVybiBcIlxcbiAgICAgICAgPHN0eWxlPlxcbiAgICAgICAgOmhvc3Qge1xcbiAgICAgICAgICAgIHBvc2l0aW9uOiBmaXhlZDtcXG4gICAgICAgICAgICB0b3A6IDA7XFxuICAgICAgICAgICAgbGVmdDogMDtcXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgICB3aWR0aDogMTAwdnc7XFxuICAgICAgICAgICAgei1pbmRleDogMjE0NzQ4MzY0NTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgICNiYXIge1xcbiAgICAgICAgICAgIHdpZHRoOiAwJTtcXG4gICAgICAgICAgICBoZWlnaHQ6IDRweDtcXG4gICAgICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2IoMTg2LCAyMjMsIDE3Mik7XFxuICAgICAgICB9XFxuXFxuICAgICAgICBAa2V5ZnJhbWVzIGZhZGUge1xcbiAgICAgICAgICAgIDAlIHsgb3BhY2l0eTogMTsgfVxcbiAgICAgICAgICAgIDEwMCUgeyBvcGFjaXR5OiAwOyB9XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuZGlzYXBwZWFyIHtcXG4gICAgICAgICAgICBhbmltYXRpb246IGZhZGUgMC4zcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZmlsbC1tb2RlOiBmb3J3YXJkcztcXG4gICAgICAgICAgICBhbmltYXRpb24tZGVsYXk6IDAuNXM7XFxuICAgICAgICB9XFxuXFxuICAgICAgICAuaGlkZGVuIHtcXG4gICAgICAgICAgICBkaXNwbGF5OiBub25lO1xcbiAgICAgICAgfVxcbiAgICAgICAgPC9zdHlsZT5cXG4gICAgICAgIDxkaXYgaWQ9XFxcInByb2dyZXNzXFxcIj48L2Rpdj5cXG4gICAgICAgIFwiO1xuICB9XG4gIGZ1bmN0aW9uIF91cGRhdGUocGVyY2VudCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZ3Jlc3NcIik7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJjaXJjdWxhclwiKSB7XG4gICAgICB2YXIgcGF0aCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwicGF0aFwiKTtcbiAgICAgIHZhciB2YWx1ZSA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI3BlcmNlbnQtdmFsdWVcIik7XG4gICAgICB2YXIgb2Zmc2V0ID0gKDEwMCAtIHBlcmNlbnQpIC8gMTAwICogdGhpcy5tYXhEYXNoT2Zmc2V0O1xuICAgICAgcGF0aC5zdHlsZS5zdHJva2VEYXNob2Zmc2V0ID0gb2Zmc2V0O1xuICAgICAgdmFsdWUudGV4dENvbnRlbnQgPSBwZXJjZW50O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbGVtZW50LnN0eWxlLndpZHRoID0gXCJcIi5jb25jYXQocGVyY2VudCwgXCIlXCIpO1xuICAgIH1cbiAgICBpZiAocGVyY2VudCA+PSAxMDApIHtcbiAgICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIHRoaXMsIF9oaWRlKS5jYWxsKHRoaXMpO1xuICAgIH0gZWxzZSBpZiAocGVyY2VudCA+IDApIHtcbiAgICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIHRoaXMsIF9zaG93KS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgfVxuICBmdW5jdGlvbiBfc2hvdygpIHtcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI3Byb2dyZXNzXCIpO1xuICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZShcImhpZGRlblwiKTtcbiAgfVxuICBmdW5jdGlvbiBfaGlkZSgpIHtcbiAgICB2YXIgX3RoaXMyID0gdGhpcztcbiAgICB2YXIgZWxlbWVudCA9IHRoaXMuc2hhZG93Um9vdC5xdWVyeVNlbGVjdG9yKFwiI3Byb2dyZXNzXCIpO1xuICAgIGlmICh0aGlzLnR5cGUgPT09IFwiY2lyY3VsYXJcIikge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYXBwZWFyXCIpO1xuICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiYW5pbWF0aW9uZW5kXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiaGlkZGVuXCIpO1xuICAgICAgICBfYXNzZXJ0Q2xhc3NCcmFuZChfV2VicGFja0RldlNlcnZlclByb2dyZXNzX2JyYW5kLCBfdGhpczIsIF91cGRhdGUpLmNhbGwoX3RoaXMyLCAwKTtcbiAgICAgIH0sIHtcbiAgICAgICAgb25jZTogdHJ1ZVxuICAgICAgfSk7XG4gICAgfSBlbHNlIGlmICh0aGlzLnR5cGUgPT09IFwibGluZWFyXCIpIHtcbiAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImRpc2FwcGVhclwiKTtcbiAgICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiZGlzYXBwZWFyXCIpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIjAlXCI7XG4gICAgICAgIF90aGlzMi5hbmltYXRpb25UaW1lciA9IG51bGw7XG4gICAgICB9LCA4MDApO1xuICAgIH1cbiAgfVxuICBjdXN0b21FbGVtZW50cy5kZWZpbmUoXCJ3ZHMtcHJvZ3Jlc3NcIiwgV2VicGFja0RldlNlcnZlclByb2dyZXNzKTtcbn0iLCIvKiBnbG9iYWwgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18gKi9cblxuaW1wb3J0IFdlYlNvY2tldENsaWVudCBmcm9tIFwiLi9jbGllbnRzL1dlYlNvY2tldENsaWVudC5qc1wiO1xuaW1wb3J0IHsgbG9nIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7XG5cbi8vIHRoaXMgV2Vic29ja2V0Q2xpZW50IGlzIGhlcmUgYXMgYSBkZWZhdWx0IGZhbGxiYWNrLCBpbiBjYXNlIHRoZSBjbGllbnQgaXMgbm90IGluamVjdGVkXG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbnZhciBDbGllbnQgPVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG50eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18gIT09IFwidW5kZWZpbmVkXCIgPyB0eXBlb2YgX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fLmRlZmF1bHQgOiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyA6IFdlYlNvY2tldENsaWVudDtcbi8qIGVzbGludC1lbmFibGUgY2FtZWxjYXNlICovXG5cbnZhciByZXRyaWVzID0gMDtcbnZhciBtYXhSZXRyaWVzID0gMTA7XG5cbi8vIEluaXRpYWxpemVkIGNsaWVudCBpcyBleHBvcnRlZCBzbyBleHRlcm5hbCBjb25zdW1lcnMgY2FuIHV0aWxpemUgdGhlIHNhbWUgaW5zdGFuY2Vcbi8vIEl0IGlzIG11dGFibGUgdG8gZW5mb3JjZSBzaW5nbGV0b25cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBpbXBvcnQvbm8tbXV0YWJsZS1leHBvcnRzXG5leHBvcnQgdmFyIGNsaWVudCA9IG51bGw7XG52YXIgdGltZW91dDtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdXJsXG4gKiBAcGFyYW0ge3sgW2hhbmRsZXI6IHN0cmluZ106IChkYXRhPzogYW55LCBwYXJhbXM/OiBhbnkpID0+IGFueSB9fSBoYW5kbGVyc1xuICogQHBhcmFtIHtudW1iZXJ9IFtyZWNvbm5lY3RdXG4gKi9cbnZhciBzb2NrZXQgPSBmdW5jdGlvbiBpbml0U29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCkge1xuICBjbGllbnQgPSBuZXcgQ2xpZW50KHVybCk7XG4gIGNsaWVudC5vbk9wZW4oZnVuY3Rpb24gKCkge1xuICAgIHJldHJpZXMgPSAwO1xuICAgIGlmICh0aW1lb3V0KSB7XG4gICAgICBjbGVhclRpbWVvdXQodGltZW91dCk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgcmVjb25uZWN0ICE9PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICBtYXhSZXRyaWVzID0gcmVjb25uZWN0O1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5vbkNsb3NlKGZ1bmN0aW9uICgpIHtcbiAgICBpZiAocmV0cmllcyA9PT0gMCkge1xuICAgICAgaGFuZGxlcnMuY2xvc2UoKTtcbiAgICB9XG5cbiAgICAvLyBUcnkgdG8gcmVjb25uZWN0LlxuICAgIGNsaWVudCA9IG51bGw7XG5cbiAgICAvLyBBZnRlciAxMCByZXRyaWVzIHN0b3AgdHJ5aW5nLCB0byBwcmV2ZW50IGxvZ3NwYW0uXG4gICAgaWYgKHJldHJpZXMgPCBtYXhSZXRyaWVzKSB7XG4gICAgICAvLyBFeHBvbmVudGlhbGx5IGluY3JlYXNlIHRpbWVvdXQgdG8gcmVjb25uZWN0LlxuICAgICAgLy8gUmVzcGVjdGZ1bGx5IGNvcGllZCBmcm9tIHRoZSBwYWNrYWdlIGBnb3RgLlxuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtcHJvcGVydGllc1xuICAgICAgdmFyIHJldHJ5SW5NcyA9IDEwMDAgKiBNYXRoLnBvdygyLCByZXRyaWVzKSArIE1hdGgucmFuZG9tKCkgKiAxMDA7XG4gICAgICByZXRyaWVzICs9IDE7XG4gICAgICBsb2cuaW5mbyhcIlRyeWluZyB0byByZWNvbm5lY3QuLi5cIik7XG4gICAgICB0aW1lb3V0ID0gc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgIHNvY2tldCh1cmwsIGhhbmRsZXJzLCByZWNvbm5lY3QpO1xuICAgICAgfSwgcmV0cnlJbk1zKTtcbiAgICB9XG4gIH0pO1xuICBjbGllbnQub25NZXNzYWdlKFxuICAvKipcbiAgICogQHBhcmFtIHthbnl9IGRhdGFcbiAgICovXG4gIGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgdmFyIG1lc3NhZ2UgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgIGlmIChoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKSB7XG4gICAgICBoYW5kbGVyc1ttZXNzYWdlLnR5cGVdKG1lc3NhZ2UuZGF0YSwgbWVzc2FnZS5wYXJhbXMpO1xuICAgIH1cbiAgfSk7XG59O1xuZXhwb3J0IGRlZmF1bHQgc29ja2V0OyIsImltcG9ydCBsb2dnZXIgZnJvbSBcIi4uL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzXCI7XG52YXIgbmFtZSA9IFwid2VicGFjay1kZXYtc2VydmVyXCI7XG4vLyBkZWZhdWx0IGxldmVsIGlzIHNldCBvbiB0aGUgY2xpZW50IHNpZGUsIHNvIGl0IGRvZXMgbm90IG5lZWRcbi8vIHRvIGJlIHNldCBieSB0aGUgQ0xJIG9yIEFQSVxudmFyIGRlZmF1bHRMZXZlbCA9IFwiaW5mb1wiO1xuXG4vLyBvcHRpb25zIG5ldyBvcHRpb25zLCBtZXJnZSB3aXRoIG9sZCBvcHRpb25zXG4vKipcbiAqIEBwYXJhbSB7ZmFsc2UgfCB0cnVlIHwgXCJub25lXCIgfCBcImVycm9yXCIgfCBcIndhcm5cIiB8IFwiaW5mb1wiIHwgXCJsb2dcIiB8IFwidmVyYm9zZVwifSBsZXZlbFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cbmZ1bmN0aW9uIHNldExvZ0xldmVsKGxldmVsKSB7XG4gIGxvZ2dlci5jb25maWd1cmVEZWZhdWx0TG9nZ2VyKHtcbiAgICBsZXZlbDogbGV2ZWxcbiAgfSk7XG59XG5zZXRMb2dMZXZlbChkZWZhdWx0TGV2ZWwpO1xudmFyIGxvZyA9IGxvZ2dlci5nZXRMb2dnZXIobmFtZSk7XG5leHBvcnQgeyBsb2csIHNldExvZ0xldmVsIH07IiwiLyogZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSBXb3JrZXJHbG9iYWxTY29wZSAqL1xuXG4vLyBTZW5kIG1lc3NhZ2VzIHRvIHRoZSBvdXRzaWRlLCBzbyBwbHVnaW5zIGNhbiBjb25zdW1lIGl0LlxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gdHlwZVxuICogQHBhcmFtIHthbnl9IFtkYXRhXVxuICovXG5mdW5jdGlvbiBzZW5kTXNnKHR5cGUsIGRhdGEpIHtcbiAgaWYgKHR5cGVvZiBzZWxmICE9PSBcInVuZGVmaW5lZFwiICYmICh0eXBlb2YgV29ya2VyR2xvYmFsU2NvcGUgPT09IFwidW5kZWZpbmVkXCIgfHwgIShzZWxmIGluc3RhbmNlb2YgV29ya2VyR2xvYmFsU2NvcGUpKSkge1xuICAgIHNlbGYucG9zdE1lc3NhZ2Uoe1xuICAgICAgdHlwZTogXCJ3ZWJwYWNrXCIuY29uY2F0KHR5cGUpLFxuICAgICAgZGF0YTogZGF0YVxuICAgIH0sIFwiKlwiKTtcbiAgfVxufVxuZXhwb3J0IGRlZmF1bHQgc2VuZE1zZzsiLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuLyogZ2xvYmFscyBfX3dlYnBhY2tfaGFzaF9fICovXG5pZiAobW9kdWxlLmhvdCkge1xuXHQvKiogQHR5cGUge3VuZGVmaW5lZHxzdHJpbmd9ICovXG5cdHZhciBsYXN0SGFzaDtcblx0dmFyIHVwVG9EYXRlID0gZnVuY3Rpb24gdXBUb0RhdGUoKSB7XG5cdFx0cmV0dXJuIC8qKiBAdHlwZSB7c3RyaW5nfSAqLyAobGFzdEhhc2gpLmluZGV4T2YoX193ZWJwYWNrX2hhc2hfXykgPj0gMDtcblx0fTtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblx0dmFyIGNoZWNrID0gZnVuY3Rpb24gY2hlY2soKSB7XG5cdFx0bW9kdWxlLmhvdFxuXHRcdFx0LmNoZWNrKHRydWUpXG5cdFx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0aWYgKCF1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSBDYW5ub3QgZmluZCB1cGRhdGUuIFwiICtcblx0XHRcdFx0XHRcdFx0KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwiTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiXG5cdFx0XHRcdFx0XHRcdFx0OiBcIlBsZWFzZSByZWxvYWQgbWFudWFsbHkhXCIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gKFByb2JhYmx5IGJlY2F1c2Ugb2YgcmVzdGFydGluZyB0aGUgd2VicGFjay1kZXYtc2VydmVyKVwiXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0XHRyZXR1cm47XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRpZiAoIXVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRjaGVjaygpO1xuXHRcdFx0XHR9XG5cblx0XHRcdFx0cmVxdWlyZShcIi4vbG9nLWFwcGx5LXJlc3VsdFwiKSh1cGRhdGVkTW9kdWxlcywgdXBkYXRlZE1vZHVsZXMpO1xuXG5cdFx0XHRcdGlmICh1cFRvRGF0ZSgpKSB7XG5cdFx0XHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIEFwcCBpcyB1cCB0byBkYXRlLlwiKTtcblx0XHRcdFx0fVxuXHRcdFx0fSlcblx0XHRcdC5jYXRjaChmdW5jdGlvbiAoZXJyKSB7XG5cdFx0XHRcdHZhciBzdGF0dXMgPSBtb2R1bGUuaG90LnN0YXR1cygpO1xuXHRcdFx0XHRpZiAoW1wiYWJvcnRcIiwgXCJmYWlsXCJdLmluZGV4T2Yoc3RhdHVzKSA+PSAwKSB7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIENhbm5vdCBhcHBseSB1cGRhdGUuIFwiICtcblx0XHRcdFx0XHRcdFx0KHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCJcblx0XHRcdFx0XHRcdFx0XHQ/IFwiTmVlZCB0byBkbyBhIGZ1bGwgcmVsb2FkIVwiXG5cdFx0XHRcdFx0XHRcdFx0OiBcIlBsZWFzZSByZWxvYWQgbWFudWFsbHkhXCIpXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdFx0aWYgKHR5cGVvZiB3aW5kb3cgIT09IFwidW5kZWZpbmVkXCIpIHtcblx0XHRcdFx0XHRcdHdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdIFVwZGF0ZSBmYWlsZWQ6IFwiICsgbG9nLmZvcm1hdEVycm9yKGVycikpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KTtcblx0fTtcblx0dmFyIGhvdEVtaXR0ZXIgPSByZXF1aXJlKFwiLi9lbWl0dGVyXCIpO1xuXHRob3RFbWl0dGVyLm9uKFwid2VicGFja0hvdFVwZGF0ZVwiLCBmdW5jdGlvbiAoY3VycmVudEhhc2gpIHtcblx0XHRsYXN0SGFzaCA9IGN1cnJlbnRIYXNoO1xuXHRcdGlmICghdXBUb0RhdGUoKSAmJiBtb2R1bGUuaG90LnN0YXR1cygpID09PSBcImlkbGVcIikge1xuXHRcdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIENoZWNraW5nIGZvciB1cGRhdGVzIG9uIHRoZSBzZXJ2ZXIuLi5cIik7XG5cdFx0XHRjaGVjaygpO1xuXHRcdH1cblx0fSk7XG5cdGxvZyhcImluZm9cIiwgXCJbSE1SXSBXYWl0aW5nIGZvciB1cGRhdGUgc2lnbmFsIGZyb20gV0RTLi4uXCIpO1xufSBlbHNlIHtcblx0dGhyb3cgbmV3IEVycm9yKFwiW0hNUl0gSG90IE1vZHVsZSBSZXBsYWNlbWVudCBpcyBkaXNhYmxlZC5cIik7XG59XG4iLCJ2YXIgRXZlbnRFbWl0dGVyID0gcmVxdWlyZShcImV2ZW50c1wiKTtcbm1vZHVsZS5leHBvcnRzID0gbmV3IEV2ZW50RW1pdHRlcigpO1xuIiwiLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuLyoqXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW119IHVwZGF0ZWRNb2R1bGVzIHVwZGF0ZWQgbW9kdWxlc1xuICogQHBhcmFtIHsoc3RyaW5nIHwgbnVtYmVyKVtdIHwgbnVsbH0gcmVuZXdlZE1vZHVsZXMgcmVuZXdlZCBtb2R1bGVzXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKHVwZGF0ZWRNb2R1bGVzLCByZW5ld2VkTW9kdWxlcykge1xuXHR2YXIgdW5hY2NlcHRlZE1vZHVsZXMgPSB1cGRhdGVkTW9kdWxlcy5maWx0ZXIoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0cmV0dXJuIHJlbmV3ZWRNb2R1bGVzICYmIHJlbmV3ZWRNb2R1bGVzLmluZGV4T2YobW9kdWxlSWQpIDwgMDtcblx0fSk7XG5cdHZhciBsb2cgPSByZXF1aXJlKFwiLi9sb2dcIik7XG5cblx0aWYgKHVuYWNjZXB0ZWRNb2R1bGVzLmxlbmd0aCA+IDApIHtcblx0XHRsb2coXG5cdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFwiW0hNUl0gVGhlIGZvbGxvd2luZyBtb2R1bGVzIGNvdWxkbid0IGJlIGhvdCB1cGRhdGVkOiAoVGhleSB3b3VsZCBuZWVkIGEgZnVsbCByZWxvYWQhKVwiXG5cdFx0KTtcblx0XHR1bmFjY2VwdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0bG9nKFwid2FybmluZ1wiLCBcIltITVJdICAtIFwiICsgbW9kdWxlSWQpO1xuXHRcdH0pO1xuXHR9XG5cblx0aWYgKCFyZW5ld2VkTW9kdWxlcyB8fCByZW5ld2VkTW9kdWxlcy5sZW5ndGggPT09IDApIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gTm90aGluZyBob3QgdXBkYXRlZC5cIik7XG5cdH0gZWxzZSB7XG5cdFx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFVwZGF0ZWQgbW9kdWxlczpcIik7XG5cdFx0cmVuZXdlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdGlmICh0eXBlb2YgbW9kdWxlSWQgPT09IFwic3RyaW5nXCIgJiYgbW9kdWxlSWQuaW5kZXhPZihcIiFcIikgIT09IC0xKSB7XG5cdFx0XHRcdHZhciBwYXJ0cyA9IG1vZHVsZUlkLnNwbGl0KFwiIVwiKTtcblx0XHRcdFx0bG9nLmdyb3VwQ29sbGFwc2VkKFwiaW5mb1wiLCBcIltITVJdICAtIFwiICsgcGFydHMucG9wKCkpO1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHRcdGxvZy5ncm91cEVuZChcImluZm9cIik7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0XHR9XG5cdFx0fSk7XG5cdFx0dmFyIG51bWJlcklkcyA9IHJlbmV3ZWRNb2R1bGVzLmV2ZXJ5KGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0cmV0dXJuIHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJudW1iZXJcIjtcblx0XHR9KTtcblx0XHRpZiAobnVtYmVySWRzKVxuXHRcdFx0bG9nKFxuXHRcdFx0XHRcImluZm9cIixcblx0XHRcdFx0J1tITVJdIENvbnNpZGVyIHVzaW5nIHRoZSBvcHRpbWl6YXRpb24ubW9kdWxlSWRzOiBcIm5hbWVkXCIgZm9yIG1vZHVsZSBuYW1lcy4nXG5cdFx0XHQpO1xuXHR9XG59O1xuIiwiLyoqIEB0eXBlZGVmIHtcImluZm9cIiB8IFwid2FybmluZ1wiIHwgXCJlcnJvclwifSBMb2dMZXZlbCAqL1xuXG4vKiogQHR5cGUge0xvZ0xldmVsfSAqL1xudmFyIGxvZ0xldmVsID0gXCJpbmZvXCI7XG5cbmZ1bmN0aW9uIGR1bW15KCkge31cblxuLyoqXG4gKiBAcGFyYW0ge0xvZ0xldmVsfSBsZXZlbCBsb2cgbGV2ZWxcbiAqIEByZXR1cm5zIHtib29sZWFufSB0cnVlLCBpZiBzaG91bGQgbG9nXG4gKi9cbmZ1bmN0aW9uIHNob3VsZExvZyhsZXZlbCkge1xuXHR2YXIgc2hvdWxkTG9nID1cblx0XHQobG9nTGV2ZWwgPT09IFwiaW5mb1wiICYmIGxldmVsID09PSBcImluZm9cIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHx8XG5cdFx0KFtcImluZm9cIiwgXCJ3YXJuaW5nXCIsIFwiZXJyb3JcIl0uaW5kZXhPZihsb2dMZXZlbCkgPj0gMCAmJiBsZXZlbCA9PT0gXCJlcnJvclwiKTtcblx0cmV0dXJuIHNob3VsZExvZztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyhtc2c/OiBzdHJpbmcpID0+IHZvaWR9IGxvZ0ZuIGxvZyBmdW5jdGlvblxuICogQHJldHVybnMgeyhsZXZlbDogTG9nTGV2ZWwsIG1zZz86IHN0cmluZykgPT4gdm9pZH0gZnVuY3Rpb24gdGhhdCBsb2dzIHdoZW4gbG9nIGxldmVsIGlzIHN1ZmZpY2llbnRcbiAqL1xuZnVuY3Rpb24gbG9nR3JvdXAobG9nRm4pIHtcblx0cmV0dXJuIGZ1bmN0aW9uIChsZXZlbCwgbXNnKSB7XG5cdFx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRcdGxvZ0ZuKG1zZyk7XG5cdFx0fVxuXHR9O1xufVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHBhcmFtIHtzdHJpbmd8RXJyb3J9IG1zZyBtZXNzYWdlXG4gKi9cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0aWYgKHNob3VsZExvZyhsZXZlbCkpIHtcblx0XHRpZiAobGV2ZWwgPT09IFwiaW5mb1wiKSB7XG5cdFx0XHRjb25zb2xlLmxvZyhtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwid2FybmluZ1wiKSB7XG5cdFx0XHRjb25zb2xlLndhcm4obXNnKTtcblx0XHR9IGVsc2UgaWYgKGxldmVsID09PSBcImVycm9yXCIpIHtcblx0XHRcdGNvbnNvbGUuZXJyb3IobXNnKTtcblx0XHR9XG5cdH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHtFcnJvcn0gZXJyIGVycm9yXG4gKiBAcmV0dXJucyB7c3RyaW5nfSBmb3JtYXR0ZWQgZXJyb3JcbiAqL1xubW9kdWxlLmV4cG9ydHMuZm9ybWF0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdHZhciBtZXNzYWdlID0gZXJyLm1lc3NhZ2U7XG5cdHZhciBzdGFjayA9IGVyci5zdGFjaztcblx0aWYgKCFzdGFjaykge1xuXHRcdHJldHVybiBtZXNzYWdlO1xuXHR9IGVsc2UgaWYgKHN0YWNrLmluZGV4T2YobWVzc2FnZSkgPCAwKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2s7XG5cdH1cblx0cmV0dXJuIHN0YWNrO1xufTtcblxudmFyIGdyb3VwID0gY29uc29sZS5ncm91cCB8fCBkdW1teTtcbnZhciBncm91cENvbGxhcHNlZCA9IGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgfHwgZHVtbXk7XG52YXIgZ3JvdXBFbmQgPSBjb25zb2xlLmdyb3VwRW5kIHx8IGR1bW15O1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cCA9IGxvZ0dyb3VwKGdyb3VwKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBDb2xsYXBzZWQgPSBsb2dHcm91cChncm91cENvbGxhcHNlZCk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwRW5kID0gbG9nR3JvdXAoZ3JvdXBFbmQpO1xuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICovXG5tb2R1bGUuZXhwb3J0cy5zZXRMb2dMZXZlbCA9IGZ1bmN0aW9uIChsZXZlbCkge1xuXHRsb2dMZXZlbCA9IGxldmVsO1xufTtcbiIsIiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0dmFyIGV4ZWNPcHRpb25zID0geyBpZDogbW9kdWxlSWQsIG1vZHVsZTogbW9kdWxlLCBmYWN0b3J5OiBfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXSwgcmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyB9O1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmkuZm9yRWFjaChmdW5jdGlvbihoYW5kbGVyKSB7IGhhbmRsZXIoZXhlY09wdGlvbnMpOyB9KTtcblx0bW9kdWxlID0gZXhlY09wdGlvbnMubW9kdWxlO1xuXHRleGVjT3B0aW9ucy5mYWN0b3J5LmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIGV4ZWNPcHRpb25zLnJlcXVpcmUpO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuLy8gZXhwb3NlIHRoZSBtb2R1bGVzIG9iamVjdCAoX193ZWJwYWNrX21vZHVsZXNfXylcbl9fd2VicGFja19yZXF1aXJlX18ubSA9IF9fd2VicGFja19tb2R1bGVzX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGNhY2hlXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX187XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlIGV4ZWN1dGlvbiBpbnRlcmNlcHRvclxuX193ZWJwYWNrX3JlcXVpcmVfXy5pID0gW107XG5cbi8vIHRoZSBzdGFydHVwIGZ1bmN0aW9uXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSB4ID0+IHt9O1xuIiwiaWYoIV9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbil7XG5cdF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbiA9IHtcblx0XHRpbml0T3B0aW9uczoge1wibmFtZVwiOlwicGFydGljbGVcIixcInJlbW90ZXNcIjpbXSxcInNoYXJlU3RyYXRlZ3lcIjpcInZlcnNpb24tZmlyc3RcIn0sXG5cdFx0Y2h1bmtNYXRjaGVyOiBmdW5jdGlvbihjaHVua0lkKSB7cmV0dXJuIHRydWV9LFxuXHRcdHJvb3RPdXRwdXREaXI6IFwiXCIsXG5cdFx0aW5pdGlhbENvbnN1bWVzOiB1bmRlZmluZWQsXG5cdFx0YnVuZGxlclJ1bnRpbWVPcHRpb25zOiB7fVxuXHR9O1xufSIsIi8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSAobW9kdWxlKSA9PiB7XG5cdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuXHRcdCgpID0+IChtb2R1bGVbJ2RlZmF1bHQnXSkgOlxuXHRcdCgpID0+IChtb2R1bGUpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCB7IGE6IGdldHRlciB9KTtcblx0cmV0dXJuIGdldHRlcjtcbn07IiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mID0ge307XG4vLyBUaGlzIGZpbGUgY29udGFpbnMgb25seSB0aGUgZW50cnkgY2h1bmsuXG4vLyBUaGUgY2h1bmsgbG9hZGluZyBmdW5jdGlvbiBmb3IgYWRkaXRpb25hbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18uZSA9IChjaHVua0lkKSA9PiB7XG5cdHJldHVybiBQcm9taXNlLmFsbChPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmYpLnJlZHVjZSgocHJvbWlzZXMsIGtleSkgPT4ge1xuXHRcdF9fd2VicGFja19yZXF1aXJlX18uZltrZXldKGNodW5rSWQsIHByb21pc2VzKTtcblx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdH0sIFtdKSk7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18udSA9IChjaHVua0lkKSA9PiB7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwibWFpbi5cIiArIF9fd2VicGFja19yZXF1aXJlX18uaCgpICsgXCIuaG90LXVwZGF0ZS5qc29uXCIpOyIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYwNTFlYzYyOWY0YjhmYTdmNmViXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5nID0gKGZ1bmN0aW9uKCkge1xuXHRpZiAodHlwZW9mIGdsb2JhbFRoaXMgPT09ICdvYmplY3QnKSByZXR1cm4gZ2xvYmFsVGhpcztcblx0dHJ5IHtcblx0XHRyZXR1cm4gdGhpcyB8fCBuZXcgRnVuY3Rpb24oJ3JldHVybiB0aGlzJykoKTtcblx0fSBjYXRjaCAoZSkge1xuXHRcdGlmICh0eXBlb2Ygd2luZG93ID09PSAnb2JqZWN0JykgcmV0dXJuIHdpbmRvdztcblx0fVxufSkoKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSAob2JqLCBwcm9wKSA9PiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCkpIiwidmFyIGluUHJvZ3Jlc3MgPSB7fTtcbnZhciBkYXRhV2VicGFja1ByZWZpeCA9IFwiQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZTpcIjtcbi8vIGxvYWRTY3JpcHQgZnVuY3Rpb24gdG8gbG9hZCBhIHNjcmlwdCB2aWEgc2NyaXB0IHRhZ1xuX193ZWJwYWNrX3JlcXVpcmVfXy5sID0gKHVybCwgZG9uZSwga2V5LCBjaHVua0lkKSA9PiB7XG5cdGlmKGluUHJvZ3Jlc3NbdXJsXSkgeyBpblByb2dyZXNzW3VybF0ucHVzaChkb25lKTsgcmV0dXJuOyB9XG5cdHZhciBzY3JpcHQsIG5lZWRBdHRhY2g7XG5cdGlmKGtleSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0dmFyIHNjcmlwdHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKTtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgc2NyaXB0cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIHMgPSBzY3JpcHRzW2ldO1xuXHRcdFx0aWYocy5nZXRBdHRyaWJ1dGUoXCJzcmNcIikgPT0gdXJsIHx8IHMuZ2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIpID09IGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KSB7IHNjcmlwdCA9IHM7IGJyZWFrOyB9XG5cdFx0fVxuXHR9XG5cdGlmKCFzY3JpcHQpIHtcblx0XHRuZWVkQXR0YWNoID0gdHJ1ZTtcblx0XHRzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcblxuXHRcdHNjcmlwdC5jaGFyc2V0ID0gJ3V0Zi04Jztcblx0XHRzY3JpcHQudGltZW91dCA9IDEyMDtcblx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcIm5vbmNlXCIsIF9fd2VicGFja19yZXF1aXJlX18ubmMpO1xuXHRcdH1cblx0XHRzY3JpcHQuc2V0QXR0cmlidXRlKFwiZGF0YS13ZWJwYWNrXCIsIGRhdGFXZWJwYWNrUHJlZml4ICsga2V5KTtcblxuXHRcdHNjcmlwdC5zcmMgPSB1cmw7XG5cdH1cblx0aW5Qcm9ncmVzc1t1cmxdID0gW2RvbmVdO1xuXHR2YXIgb25TY3JpcHRDb21wbGV0ZSA9IChwcmV2LCBldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcyBpbiBJRS5cblx0XHRzY3JpcHQub25lcnJvciA9IHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuXHRcdGNsZWFyVGltZW91dCh0aW1lb3V0KTtcblx0XHR2YXIgZG9uZUZucyA9IGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRkZWxldGUgaW5Qcm9ncmVzc1t1cmxdO1xuXHRcdHNjcmlwdC5wYXJlbnROb2RlICYmIHNjcmlwdC5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKHNjcmlwdCk7XG5cdFx0ZG9uZUZucyAmJiBkb25lRm5zLmZvckVhY2goKGZuKSA9PiAoZm4oZXZlbnQpKSk7XG5cdFx0aWYocHJldikgcmV0dXJuIHByZXYoZXZlbnQpO1xuXHR9XG5cdHZhciB0aW1lb3V0ID0gc2V0VGltZW91dChvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgdW5kZWZpbmVkLCB7IHR5cGU6ICd0aW1lb3V0JywgdGFyZ2V0OiBzY3JpcHQgfSksIDEyMDAwMCk7XG5cdHNjcmlwdC5vbmVycm9yID0gb25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHNjcmlwdC5vbmVycm9yKTtcblx0c2NyaXB0Lm9ubG9hZCA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25sb2FkKTtcblx0bmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG59OyIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0aWYoIWluaXRTY29wZSkgaW5pdFNjb3BlID0gW107XG5cdC8vIGhhbmRsaW5nIGNpcmN1bGFyIGluaXQgY2FsbHNcblx0dmFyIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV07XG5cdGlmKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbbmFtZV0gPSB7fTtcblx0aWYoaW5pdFNjb3BlLmluZGV4T2YoaW5pdFRva2VuKSA+PSAwKSByZXR1cm47XG5cdGluaXRTY29wZS5wdXNoKGluaXRUb2tlbik7XG5cdC8vIG9ubHkgcnVucyBvbmNlXG5cdGlmKGluaXRQcm9taXNlc1tuYW1lXSkgcmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXTtcblx0Ly8gY3JlYXRlcyBhIG5ldyBzaGFyZSBzY29wZSBpZiBuZWVkZWRcblx0aWYoIV9fd2VicGFja19yZXF1aXJlX18ubyhfX3dlYnBhY2tfcmVxdWlyZV9fLlMsIG5hbWUpKSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0gPSB7fTtcblx0Ly8gcnVucyBhbGwgaW5pdCBzbmlwcGV0cyBmcm9tIGFsbCBtb2R1bGVzIHJlYWNoYWJsZVxuXHR2YXIgc2NvcGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV07XG5cdHZhciB3YXJuID0gKG1zZykgPT4ge1xuXHRcdGlmICh0eXBlb2YgY29uc29sZSAhPT0gXCJ1bmRlZmluZWRcIiAmJiBjb25zb2xlLndhcm4pIGNvbnNvbGUud2Fybihtc2cpO1xuXHR9O1xuXHR2YXIgdW5pcXVlTmFtZSA9IFwiQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZVwiO1xuXHR2YXIgcmVnaXN0ZXIgPSAobmFtZSwgdmVyc2lvbiwgZmFjdG9yeSwgZWFnZXIpID0+IHtcblx0XHR2YXIgdmVyc2lvbnMgPSBzY29wZVtuYW1lXSA9IHNjb3BlW25hbWVdIHx8IHt9O1xuXHRcdHZhciBhY3RpdmVWZXJzaW9uID0gdmVyc2lvbnNbdmVyc2lvbl07XG5cdFx0aWYoIWFjdGl2ZVZlcnNpb24gfHwgKCFhY3RpdmVWZXJzaW9uLmxvYWRlZCAmJiAoIWVhZ2VyICE9ICFhY3RpdmVWZXJzaW9uLmVhZ2VyID8gZWFnZXIgOiB1bmlxdWVOYW1lID4gYWN0aXZlVmVyc2lvbi5mcm9tKSkpIHZlcnNpb25zW3ZlcnNpb25dID0geyBnZXQ6IGZhY3RvcnksIGZyb206IHVuaXF1ZU5hbWUsIGVhZ2VyOiAhIWVhZ2VyIH07XG5cdH07XG5cdHZhciBpbml0RXh0ZXJuYWwgPSAoaWQpID0+IHtcblx0XHR2YXIgaGFuZGxlRXJyb3IgPSAoZXJyKSA9PiAod2FybihcIkluaXRpYWxpemF0aW9uIG9mIHNoYXJpbmcgZXh0ZXJuYWwgZmFpbGVkOiBcIiArIGVycikpO1xuXHRcdHRyeSB7XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXyhpZCk7XG5cdFx0XHRpZighbW9kdWxlKSByZXR1cm47XG5cdFx0XHR2YXIgaW5pdEZuID0gKG1vZHVsZSkgPT4gKG1vZHVsZSAmJiBtb2R1bGUuaW5pdCAmJiBtb2R1bGUuaW5pdChfX3dlYnBhY2tfcmVxdWlyZV9fLlNbbmFtZV0sIGluaXRTY29wZSkpXG5cdFx0XHRpZihtb2R1bGUudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2gobW9kdWxlLnRoZW4oaW5pdEZuLCBoYW5kbGVFcnJvcikpO1xuXHRcdFx0dmFyIGluaXRSZXN1bHQgPSBpbml0Rm4obW9kdWxlKTtcblx0XHRcdGlmKGluaXRSZXN1bHQgJiYgaW5pdFJlc3VsdC50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0WydjYXRjaCddKGhhbmRsZUVycm9yKSk7XG5cdFx0fSBjYXRjaChlcnIpIHsgaGFuZGxlRXJyb3IoZXJyKTsgfVxuXHR9XG5cdHZhciBwcm9taXNlcyA9IFtdO1xuXHRzd2l0Y2gobmFtZSkge1xuXHRcdGNhc2UgXCJkZWZhdWx0XCI6IHtcblx0XHRcdHJlZ2lzdGVyKFwiQHJlbmVvcy9hcHBcIiwgXCIxLjAuNlwiLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwibm9kZV9tb2R1bGVzX3JlbmVvc19hcHBfaW5kZXhfanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSkpKTtcblx0XHRcdHJlZ2lzdGVyKFwidGhyZWVcIiwgXCIwLjE4MC4wXCIsICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aHJlZV9idWlsZF90aHJlZV9tb2R1bGVfanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpKSkpO1xuXHRcdFx0cmVnaXN0ZXIoXCJ2dWVcIiwgXCIzLjUuMjJcIiwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3Z1ZV9kaXN0X3Z1ZV9ydW50aW1lX2VzbS1idW5kbGVyX2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSkpKSk7XG5cdFx0fVxuXHRcdGJyZWFrO1xuXHR9XG5cdGlmKCFwcm9taXNlcy5sZW5ndGgpIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV0gPSAxO1xuXHRyZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCkgPT4gKGluaXRQcm9taXNlc1tuYW1lXSA9IDEpKTtcbn07IiwidmFyIGN1cnJlbnRNb2R1bGVEYXRhID0ge307XG52YXIgaW5zdGFsbGVkTW9kdWxlcyA9IF9fd2VicGFja19yZXF1aXJlX18uYztcblxuLy8gbW9kdWxlIGFuZCByZXF1aXJlIGNyZWF0aW9uXG52YXIgY3VycmVudENoaWxkTW9kdWxlO1xudmFyIGN1cnJlbnRQYXJlbnRzID0gW107XG5cbi8vIHN0YXR1c1xudmFyIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycyA9IFtdO1xudmFyIGN1cnJlbnRTdGF0dXMgPSBcImlkbGVcIjtcblxuLy8gd2hpbGUgZG93bmxvYWRpbmdcbnZhciBibG9ja2luZ1Byb21pc2VzID0gMDtcbnZhciBibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXG4vLyBUaGUgdXBkYXRlIGluZm9cbnZhciBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycztcbnZhciBxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXM7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yRCA9IGN1cnJlbnRNb2R1bGVEYXRhO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkucHVzaChmdW5jdGlvbiAob3B0aW9ucykge1xuXHR2YXIgbW9kdWxlID0gb3B0aW9ucy5tb2R1bGU7XG5cdHZhciByZXF1aXJlID0gY3JlYXRlUmVxdWlyZShvcHRpb25zLnJlcXVpcmUsIG9wdGlvbnMuaWQpO1xuXHRtb2R1bGUuaG90ID0gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG9wdGlvbnMuaWQsIG1vZHVsZSk7XG5cdG1vZHVsZS5wYXJlbnRzID0gY3VycmVudFBhcmVudHM7XG5cdG1vZHVsZS5jaGlsZHJlbiA9IFtdO1xuXHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRvcHRpb25zLnJlcXVpcmUgPSByZXF1aXJlO1xufSk7XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yQyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJID0ge307XG5cbmZ1bmN0aW9uIGNyZWF0ZVJlcXVpcmUocmVxdWlyZSwgbW9kdWxlSWQpIHtcblx0dmFyIG1lID0gaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF07XG5cdGlmICghbWUpIHJldHVybiByZXF1aXJlO1xuXHR2YXIgZm4gPSBmdW5jdGlvbiAocmVxdWVzdCkge1xuXHRcdGlmIChtZS5ob3QuYWN0aXZlKSB7XG5cdFx0XHRpZiAoaW5zdGFsbGVkTW9kdWxlc1tyZXF1ZXN0XSkge1xuXHRcdFx0XHR2YXIgcGFyZW50cyA9IGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0ucGFyZW50cztcblx0XHRcdFx0aWYgKHBhcmVudHMuaW5kZXhPZihtb2R1bGVJZCkgPT09IC0xKSB7XG5cdFx0XHRcdFx0cGFyZW50cy5wdXNoKG1vZHVsZUlkKTtcblx0XHRcdFx0fVxuXHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0Y3VycmVudFBhcmVudHMgPSBbbW9kdWxlSWRdO1xuXHRcdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSByZXF1ZXN0O1xuXHRcdFx0fVxuXHRcdFx0aWYgKG1lLmNoaWxkcmVuLmluZGV4T2YocmVxdWVzdCkgPT09IC0xKSB7XG5cdFx0XHRcdG1lLmNoaWxkcmVuLnB1c2gocmVxdWVzdCk7XG5cdFx0XHR9XG5cdFx0fSBlbHNlIHtcblx0XHRcdGNvbnNvbGUud2Fybihcblx0XHRcdFx0XCJbSE1SXSB1bmV4cGVjdGVkIHJlcXVpcmUoXCIgK1xuXHRcdFx0XHRcdHJlcXVlc3QgK1xuXHRcdFx0XHRcdFwiKSBmcm9tIGRpc3Bvc2VkIG1vZHVsZSBcIiArXG5cdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdCk7XG5cdFx0XHRjdXJyZW50UGFyZW50cyA9IFtdO1xuXHRcdH1cblx0XHRyZXR1cm4gcmVxdWlyZShyZXF1ZXN0KTtcblx0fTtcblx0dmFyIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvciA9IGZ1bmN0aW9uIChuYW1lKSB7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGNvbmZpZ3VyYWJsZTogdHJ1ZSxcblx0XHRcdGVudW1lcmFibGU6IHRydWUsXG5cdFx0XHRnZXQ6IGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIHJlcXVpcmVbbmFtZV07XG5cdFx0XHR9LFxuXHRcdFx0c2V0OiBmdW5jdGlvbiAodmFsdWUpIHtcblx0XHRcdFx0cmVxdWlyZVtuYW1lXSA9IHZhbHVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH07XG5cdGZvciAodmFyIG5hbWUgaW4gcmVxdWlyZSkge1xuXHRcdGlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwocmVxdWlyZSwgbmFtZSkgJiYgbmFtZSAhPT0gXCJlXCIpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmbiwgbmFtZSwgY3JlYXRlUHJvcGVydHlEZXNjcmlwdG9yKG5hbWUpKTtcblx0XHR9XG5cdH1cblx0Zm4uZSA9IGZ1bmN0aW9uIChjaHVua0lkLCBmZXRjaFByaW9yaXR5KSB7XG5cdFx0cmV0dXJuIHRyYWNrQmxvY2tpbmdQcm9taXNlKHJlcXVpcmUuZShjaHVua0lkLCBmZXRjaFByaW9yaXR5KSk7XG5cdH07XG5cdHJldHVybiBmbjtcbn1cblxuZnVuY3Rpb24gY3JlYXRlTW9kdWxlSG90T2JqZWN0KG1vZHVsZUlkLCBtZSkge1xuXHR2YXIgX21haW4gPSBjdXJyZW50Q2hpbGRNb2R1bGUgIT09IG1vZHVsZUlkO1xuXHR2YXIgaG90ID0ge1xuXHRcdC8vIHByaXZhdGUgc3R1ZmZcblx0XHRfYWNjZXB0ZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9hY2NlcHRlZEVycm9ySGFuZGxlcnM6IHt9LFxuXHRcdF9kZWNsaW5lZERlcGVuZGVuY2llczoge30sXG5cdFx0X3NlbGZBY2NlcHRlZDogZmFsc2UsXG5cdFx0X3NlbGZEZWNsaW5lZDogZmFsc2UsXG5cdFx0X3NlbGZJbnZhbGlkYXRlZDogZmFsc2UsXG5cdFx0X2Rpc3Bvc2VIYW5kbGVyczogW10sXG5cdFx0X21haW46IF9tYWluLFxuXHRcdF9yZXF1aXJlU2VsZjogZnVuY3Rpb24gKCkge1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBtZS5wYXJlbnRzLnNsaWNlKCk7XG5cdFx0XHRjdXJyZW50Q2hpbGRNb2R1bGUgPSBfbWFpbiA/IHVuZGVmaW5lZCA6IG1vZHVsZUlkO1xuXHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCk7XG5cdFx0fSxcblxuXHRcdC8vIE1vZHVsZSBBUElcblx0XHRhY3RpdmU6IHRydWUsXG5cdFx0YWNjZXB0OiBmdW5jdGlvbiAoZGVwLCBjYWxsYmFjaywgZXJyb3JIYW5kbGVyKSB7XG5cdFx0XHRpZiAoZGVwID09PSB1bmRlZmluZWQpIGhvdC5fc2VsZkFjY2VwdGVkID0gdHJ1ZTtcblx0XHRcdGVsc2UgaWYgKHR5cGVvZiBkZXAgPT09IFwiZnVuY3Rpb25cIikgaG90Ll9zZWxmQWNjZXB0ZWQgPSBkZXA7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbCkge1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGRlcC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRcdGhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcFtpXV0gPSBlcnJvckhhbmRsZXI7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGhvdC5fYWNjZXB0ZWREZXBlbmRlbmNpZXNbZGVwXSA9IGNhbGxiYWNrIHx8IGZ1bmN0aW9uICgpIHt9O1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBdID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0fVxuXHRcdH0sXG5cdFx0ZGVjbGluZTogZnVuY3Rpb24gKGRlcCkge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZEZWNsaW5lZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcIm9iamVjdFwiICYmIGRlcCAhPT0gbnVsbClcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspXG5cdFx0XHRcdFx0aG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBbaV1dID0gdHJ1ZTtcblx0XHRcdGVsc2UgaG90Ll9kZWNsaW5lZERlcGVuZGVuY2llc1tkZXBdID0gdHJ1ZTtcblx0XHR9LFxuXHRcdGRpc3Bvc2U6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRhZGREaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHRob3QuX2Rpc3Bvc2VIYW5kbGVycy5wdXNoKGNhbGxiYWNrKTtcblx0XHR9LFxuXHRcdHJlbW92ZURpc3Bvc2VIYW5kbGVyOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdHZhciBpZHggPSBob3QuX2Rpc3Bvc2VIYW5kbGVycy5pbmRleE9mKGNhbGxiYWNrKTtcblx0XHRcdGlmIChpZHggPj0gMCkgaG90Ll9kaXNwb3NlSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblx0XHRpbnZhbGlkYXRlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aGlzLl9zZWxmSW52YWxpZGF0ZWQgPSB0cnVlO1xuXHRcdFx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0XHRcdGNhc2UgXCJpZGxlXCI6XG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVyc1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRcdGNhc2UgXCJjaGVja1wiOlxuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZVwiOlxuXHRcdFx0XHRjYXNlIFwiYXBwbHlcIjpcblx0XHRcdFx0XHQocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzID0gcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzIHx8IFtdKS5wdXNoKFxuXHRcdFx0XHRcdFx0bW9kdWxlSWRcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdC8vIGlnbm9yZSByZXF1ZXN0cyBpbiBlcnJvciBzdGF0ZXNcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdH1cblx0XHR9LFxuXG5cdFx0Ly8gTWFuYWdlbWVudCBBUElcblx0XHRjaGVjazogaG90Q2hlY2ssXG5cdFx0YXBwbHk6IGhvdEFwcGx5LFxuXHRcdHN0YXR1czogZnVuY3Rpb24gKGwpIHtcblx0XHRcdGlmICghbCkgcmV0dXJuIGN1cnJlbnRTdGF0dXM7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdGFkZFN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRyZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMucHVzaChsKTtcblx0XHR9LFxuXHRcdHJlbW92ZVN0YXR1c0hhbmRsZXI6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHR2YXIgaWR4ID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLmluZGV4T2YobCk7XG5cdFx0XHRpZiAoaWR4ID49IDApIHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5zcGxpY2UoaWR4LCAxKTtcblx0XHR9LFxuXG5cdFx0Ly8gaW5oZXJpdCBmcm9tIHByZXZpb3VzIGRpc3Bvc2UgY2FsbFxuXHRcdGRhdGE6IGN1cnJlbnRNb2R1bGVEYXRhW21vZHVsZUlkXVxuXHR9O1xuXHRjdXJyZW50Q2hpbGRNb2R1bGUgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBob3Q7XG59XG5cbmZ1bmN0aW9uIHNldFN0YXR1cyhuZXdTdGF0dXMpIHtcblx0Y3VycmVudFN0YXR1cyA9IG5ld1N0YXR1cztcblx0dmFyIHJlc3VsdHMgPSBbXTtcblxuXHRmb3IgKHZhciBpID0gMDsgaSA8IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5sZW5ndGg7IGkrKylcblx0XHRyZXN1bHRzW2ldID0gcmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzW2ldLmNhbGwobnVsbCwgbmV3U3RhdHVzKTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwocmVzdWx0cykudGhlbihmdW5jdGlvbiAoKSB7fSk7XG59XG5cbmZ1bmN0aW9uIHVuYmxvY2soKSB7XG5cdGlmICgtLWJsb2NraW5nUHJvbWlzZXMgPT09IDApIHtcblx0XHRzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdGlmIChibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0XHRcdHZhciBsaXN0ID0gYmxvY2tpbmdQcm9taXNlc1dhaXRpbmc7XG5cdFx0XHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nID0gW107XG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHRcdGxpc3RbaV0oKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0pO1xuXHR9XG59XG5cbmZ1bmN0aW9uIHRyYWNrQmxvY2tpbmdQcm9taXNlKHByb21pc2UpIHtcblx0c3dpdGNoIChjdXJyZW50U3RhdHVzKSB7XG5cdFx0Y2FzZSBcInJlYWR5XCI6XG5cdFx0XHRzZXRTdGF0dXMoXCJwcmVwYXJlXCIpO1xuXHRcdC8qIGZhbGx0aHJvdWdoICovXG5cdFx0Y2FzZSBcInByZXBhcmVcIjpcblx0XHRcdGJsb2NraW5nUHJvbWlzZXMrKztcblx0XHRcdHByb21pc2UudGhlbih1bmJsb2NrLCB1bmJsb2NrKTtcblx0XHRcdHJldHVybiBwcm9taXNlO1xuXHRcdGRlZmF1bHQ6XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0fVxufVxuXG5mdW5jdGlvbiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmbikge1xuXHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkgcmV0dXJuIGZuKCk7XG5cdHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSkge1xuXHRcdGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nLnB1c2goZnVuY3Rpb24gKCkge1xuXHRcdFx0cmVzb2x2ZShmbigpKTtcblx0XHR9KTtcblx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdENoZWNrKGFwcGx5T25VcGRhdGUpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwiaWRsZVwiKSB7XG5cdFx0dGhyb3cgbmV3IEVycm9yKFwiY2hlY2soKSBpcyBvbmx5IGFsbG93ZWQgaW4gaWRsZSBzdGF0dXNcIik7XG5cdH1cblx0cmV0dXJuIHNldFN0YXR1cyhcImNoZWNrXCIpXG5cdFx0LnRoZW4oX193ZWJwYWNrX3JlcXVpcmVfXy5obXJNKVxuXHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGUpIHtcblx0XHRcdGlmICghdXBkYXRlKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSA/IFwicmVhZHlcIiA6IFwiaWRsZVwiKS50aGVuKFxuXHRcdFx0XHRcdGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdHJldHVybiBudWxsO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInByZXBhcmVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHZhciB1cGRhdGVkTW9kdWxlcyA9IFtdO1xuXHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXG5cdFx0XHRcdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRcdFx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMpLnJlZHVjZShmdW5jdGlvbiAoXG5cdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdGtleVxuXHRcdFx0XHRcdCkge1xuXHRcdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJDW2tleV0oXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5jLFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUucixcblx0XHRcdFx0XHRcdFx0dXBkYXRlLm0sXG5cdFx0XHRcdFx0XHRcdHByb21pc2VzLFxuXHRcdFx0XHRcdFx0XHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlZE1vZHVsZXNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0XHRyZXR1cm4gcHJvbWlzZXM7XG5cdFx0XHRcdFx0fSwgW10pXG5cdFx0XHRcdCkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0cmV0dXJuIHdhaXRGb3JCbG9ja2luZ1Byb21pc2VzKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdGlmIChhcHBseU9uVXBkYXRlKSB7XG5cdFx0XHRcdFx0XHRcdHJldHVybiBpbnRlcm5hbEFwcGx5KGFwcGx5T25VcGRhdGUpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcInJlYWR5XCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gdXBkYXRlZE1vZHVsZXM7XG5cdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHR9KTtcblx0XHRcdFx0fSk7XG5cdFx0XHR9KTtcblx0XHR9KTtcbn1cblxuZnVuY3Rpb24gaG90QXBwbHkob3B0aW9ucykge1xuXHRpZiAoY3VycmVudFN0YXR1cyAhPT0gXCJyZWFkeVwiKSB7XG5cdFx0cmV0dXJuIFByb21pc2UucmVzb2x2ZSgpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhyb3cgbmV3IEVycm9yKFxuXHRcdFx0XHRcImFwcGx5KCkgaXMgb25seSBhbGxvd2VkIGluIHJlYWR5IHN0YXR1cyAoc3RhdGU6IFwiICtcblx0XHRcdFx0XHRjdXJyZW50U3RhdHVzICtcblx0XHRcdFx0XHRcIilcIlxuXHRcdFx0KTtcblx0XHR9KTtcblx0fVxuXHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJuYWxBcHBseShvcHRpb25zKSB7XG5cdG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG5cdGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCk7XG5cblx0dmFyIHJlc3VsdHMgPSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycy5tYXAoZnVuY3Rpb24gKGhhbmRsZXIpIHtcblx0XHRyZXR1cm4gaGFuZGxlcihvcHRpb25zKTtcblx0fSk7XG5cdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gdW5kZWZpbmVkO1xuXG5cdHZhciBlcnJvcnMgPSByZXN1bHRzXG5cdFx0Lm1hcChmdW5jdGlvbiAocikge1xuXHRcdFx0cmV0dXJuIHIuZXJyb3I7XG5cdFx0fSlcblx0XHQuZmlsdGVyKEJvb2xlYW4pO1xuXG5cdGlmIChlcnJvcnMubGVuZ3RoID4gMCkge1xuXHRcdHJldHVybiBzZXRTdGF0dXMoXCJhYm9ydFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IGVycm9yc1swXTtcblx0XHR9KTtcblx0fVxuXG5cdC8vIE5vdyBpbiBcImRpc3Bvc2VcIiBwaGFzZVxuXHR2YXIgZGlzcG9zZVByb21pc2UgPSBzZXRTdGF0dXMoXCJkaXNwb3NlXCIpO1xuXG5cdHJlc3VsdHMuZm9yRWFjaChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0aWYgKHJlc3VsdC5kaXNwb3NlKSByZXN1bHQuZGlzcG9zZSgpO1xuXHR9KTtcblxuXHQvLyBOb3cgaW4gXCJhcHBseVwiIHBoYXNlXG5cdHZhciBhcHBseVByb21pc2UgPSBzZXRTdGF0dXMoXCJhcHBseVwiKTtcblxuXHR2YXIgZXJyb3I7XG5cdHZhciByZXBvcnRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0XHRpZiAoIWVycm9yKSBlcnJvciA9IGVycjtcblx0fTtcblxuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cblx0dmFyIG9uQWNjZXB0ZWQgPSBmdW5jdGlvbiAoKSB7XG5cdFx0cmV0dXJuIFByb21pc2UuYWxsKFtkaXNwb3NlUHJvbWlzZSwgYXBwbHlQcm9taXNlXSkudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHQvLyBoYW5kbGUgZXJyb3JzIGluIGFjY2VwdCBoYW5kbGVycyBhbmQgc2VsZiBhY2NlcHRlZCBtb2R1bGUgbG9hZFxuXHRcdFx0aWYgKGVycm9yKSB7XG5cdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJmYWlsXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHRocm93IGVycm9yO1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0aWYgKHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShvcHRpb25zKS50aGVuKGZ1bmN0aW9uIChsaXN0KSB7XG5cdFx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdFx0XHRpZiAobGlzdC5pbmRleE9mKG1vZHVsZUlkKSA8IDApIGxpc3QucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0cmV0dXJuIGxpc3Q7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fVxuXG5cdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiaWRsZVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0cmV0dXJuIG91dGRhdGVkTW9kdWxlcztcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHR9O1xuXG5cdHJldHVybiBQcm9taXNlLmFsbChcblx0XHRyZXN1bHRzXG5cdFx0XHQuZmlsdGVyKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5hcHBseTtcblx0XHRcdH0pXG5cdFx0XHQubWFwKGZ1bmN0aW9uIChyZXN1bHQpIHtcblx0XHRcdFx0cmV0dXJuIHJlc3VsdC5hcHBseShyZXBvcnRFcnJvcik7XG5cdFx0XHR9KVxuXHQpXG5cdFx0LnRoZW4oZnVuY3Rpb24gKGFwcGx5UmVzdWx0cykge1xuXHRcdFx0YXBwbHlSZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZXMpIHtcblx0XHRcdFx0aWYgKG1vZHVsZXMpIHtcblx0XHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5wdXNoKG1vZHVsZXNbaV0pO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fSk7XG5cdFx0fSlcblx0XHQudGhlbihvbkFjY2VwdGVkKTtcbn1cblxuZnVuY3Rpb24gYXBwbHlJbnZhbGlkYXRlZE1vZHVsZXMoKSB7XG5cdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRpZiAoIWN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzKSBjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IFtdO1xuXHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMuZm9yRWFjaChmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJJW2tleV0oXG5cdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0KTtcblx0XHRcdH0pO1xuXHRcdH0pO1xuXHRcdHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHVuZGVmaW5lZDtcblx0XHRyZXR1cm4gdHJ1ZTtcblx0fVxufSIsIl9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiL21vZHMvcGFydGljbGUvXCI7IiwiaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikgcmV0dXJuO1xudmFyIGNyZWF0ZVN0eWxlc2hlZXQgPSAoY2h1bmtJZCwgZnVsbGhyZWYsIG9sZFRhZywgcmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdHZhciBsaW5rVGFnID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImxpbmtcIik7XG5cblx0bGlua1RhZy5yZWwgPSBcInN0eWxlc2hlZXRcIjtcblx0bGlua1RhZy50eXBlID0gXCJ0ZXh0L2Nzc1wiO1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5uYykge1xuXHRcdGxpbmtUYWcubm9uY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jO1xuXHR9XG5cdHZhciBvbkxpbmtDb21wbGV0ZSA9IChldmVudCkgPT4ge1xuXHRcdC8vIGF2b2lkIG1lbSBsZWFrcy5cblx0XHRsaW5rVGFnLm9uZXJyb3IgPSBsaW5rVGFnLm9ubG9hZCA9IG51bGw7XG5cdFx0aWYgKGV2ZW50LnR5cGUgPT09ICdsb2FkJykge1xuXHRcdFx0cmVzb2x2ZSgpO1xuXHRcdH0gZWxzZSB7XG5cdFx0XHR2YXIgZXJyb3JUeXBlID0gZXZlbnQgJiYgZXZlbnQudHlwZTtcblx0XHRcdHZhciByZWFsSHJlZiA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuaHJlZiB8fCBmdWxsaHJlZjtcblx0XHRcdHZhciBlcnIgPSBuZXcgRXJyb3IoXCJMb2FkaW5nIENTUyBjaHVuayBcIiArIGNodW5rSWQgKyBcIiBmYWlsZWQuXFxuKFwiICsgZXJyb3JUeXBlICsgXCI6IFwiICsgcmVhbEhyZWYgKyBcIilcIik7XG5cdFx0XHRlcnIubmFtZSA9IFwiQ2h1bmtMb2FkRXJyb3JcIjtcblx0XHRcdGVyci5jb2RlID0gXCJDU1NfQ0hVTktfTE9BRF9GQUlMRURcIjtcblx0XHRcdGVyci50eXBlID0gZXJyb3JUeXBlO1xuXHRcdFx0ZXJyLnJlcXVlc3QgPSByZWFsSHJlZjtcblx0XHRcdGlmIChsaW5rVGFnLnBhcmVudE5vZGUpIGxpbmtUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChsaW5rVGFnKVxuXHRcdFx0cmVqZWN0KGVycik7XG5cdFx0fVxuXHR9XG5cdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gb25MaW5rQ29tcGxldGU7XG5cdGxpbmtUYWcuaHJlZiA9IGZ1bGxocmVmO1xuXG5cblx0aWYgKG9sZFRhZykge1xuXHRcdG9sZFRhZy5wYXJlbnROb2RlLmluc2VydEJlZm9yZShsaW5rVGFnLCBvbGRUYWcubmV4dFNpYmxpbmcpO1xuXHR9IGVsc2Uge1xuXHRcdGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua1RhZyk7XG5cdH1cblx0cmV0dXJuIGxpbmtUYWc7XG59O1xudmFyIGZpbmRTdHlsZXNoZWV0ID0gKGhyZWYsIGZ1bGxocmVmKSA9PiB7XG5cdHZhciBleGlzdGluZ0xpbmtUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJsaW5rXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdMaW5rVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdHZhciB0YWcgPSBleGlzdGluZ0xpbmtUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIikgfHwgdGFnLmdldEF0dHJpYnV0ZShcImhyZWZcIik7XG5cdFx0aWYodGFnLnJlbCA9PT0gXCJzdHlsZXNoZWV0XCIgJiYgKGRhdGFIcmVmID09PSBocmVmIHx8IGRhdGFIcmVmID09PSBmdWxsaHJlZikpIHJldHVybiB0YWc7XG5cdH1cblx0dmFyIGV4aXN0aW5nU3R5bGVUYWdzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzdHlsZVwiKTtcblx0Zm9yKHZhciBpID0gMDsgaSA8IGV4aXN0aW5nU3R5bGVUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nU3R5bGVUYWdzW2ldO1xuXHRcdHZhciBkYXRhSHJlZiA9IHRhZy5nZXRBdHRyaWJ1dGUoXCJkYXRhLWhyZWZcIik7XG5cdFx0aWYoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSByZXR1cm4gdGFnO1xuXHR9XG59O1xudmFyIGxvYWRTdHlsZXNoZWV0ID0gKGNodW5rSWQpID0+IHtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHRpZihmaW5kU3R5bGVzaGVldChocmVmLCBmdWxsaHJlZikpIHJldHVybiByZXNvbHZlKCk7XG5cdFx0Y3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgbnVsbCwgcmVzb2x2ZSwgcmVqZWN0KTtcblx0fSk7XG59XG4vLyBubyBjaHVuayBsb2FkaW5nXG5cbnZhciBvbGRUYWdzID0gW107XG52YXIgbmV3VGFncyA9IFtdO1xudmFyIGFwcGx5SGFuZGxlciA9IChvcHRpb25zKSA9PiB7XG5cdHJldHVybiB7IGRpc3Bvc2U6ICgpID0+IHtcblx0XHRmb3IodmFyIGkgPSAwOyBpIDwgb2xkVGFncy5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIG9sZFRhZyA9IG9sZFRhZ3NbaV07XG5cdFx0XHRpZihvbGRUYWcucGFyZW50Tm9kZSkgb2xkVGFnLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQob2xkVGFnKTtcblx0XHR9XG5cdFx0b2xkVGFncy5sZW5ndGggPSAwO1xuXHR9LCBhcHBseTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBuZXdUYWdzLmxlbmd0aDsgaSsrKSBuZXdUYWdzW2ldLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRcdG5ld1RhZ3MubGVuZ3RoID0gMDtcblx0fSB9O1xufVxuX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDLm1pbmlDc3MgPSAoY2h1bmtJZHMsIHJlbW92ZWRDaHVua3MsIHJlbW92ZWRNb2R1bGVzLCBwcm9taXNlcywgYXBwbHlIYW5kbGVycywgdXBkYXRlZE1vZHVsZXNMaXN0KSA9PiB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjaHVua0lkcy5mb3JFYWNoKChjaHVua0lkKSA9PiB7XG5cdFx0dmFyIGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLm1pbmlDc3NGKGNodW5rSWQpO1xuXHRcdHZhciBmdWxsaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIGhyZWY7XG5cdFx0dmFyIG9sZFRhZyA9IGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKTtcblx0XHRpZighb2xkVGFnKSByZXR1cm47XG5cdFx0cHJvbWlzZXMucHVzaChuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cdFx0XHR2YXIgdGFnID0gY3JlYXRlU3R5bGVzaGVldChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCAoKSA9PiB7XG5cdFx0XHRcdHRhZy5hcyA9IFwic3R5bGVcIjtcblx0XHRcdFx0dGFnLnJlbCA9IFwicHJlbG9hZFwiO1xuXHRcdFx0XHRyZXNvbHZlKCk7XG5cdFx0XHR9LCByZWplY3QpO1xuXHRcdFx0b2xkVGFncy5wdXNoKG9sZFRhZyk7XG5cdFx0XHRuZXdUYWdzLnB1c2godGFnKTtcblx0XHR9KSk7XG5cdH0pO1xufVxuXG4vLyBubyBwcmVmZXRjaGluZ1xuXG4vLyBubyBwcmVsb2FkZWQiLCJ2YXIgcHJldlN0YXJ0dXAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLng7XG52YXIgaGFzUnVuID0gZmFsc2U7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnggPSAoKSA9PiB7XG5cdGlmICghaGFzUnVuKSB7XG5cdCAgaGFzUnVuID0gdHJ1ZTtcblx0ICBfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy8uZmVkZXJhdGlvbi9lbnRyeS5kM2M1MWFkODcwOGVlYWJmZGY5ZTFlNTM1ODIxNTFkYy5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzLy5mZWRlcmF0aW9uL2VudHJ5LmQzYzUxYWQ4NzA4ZWVhYmZkZjllMWU1MzU4MjE1MWRjLmpzXCIpO1xuXHR9XG5cdGlmICh0eXBlb2YgcHJldlN0YXJ0dXAgPT09ICdmdW5jdGlvbicpIHtcblx0ICByZXR1cm4gcHJldlN0YXJ0dXAoKTtcblx0fSBlbHNlIHtcblx0ICBjb25zb2xlLndhcm4oJ1tNb2R1bGUgRmVkZXJhdGlvbl0gcHJldlN0YXJ0dXAgaXMgbm90IGEgZnVuY3Rpb24sIHNraXBwaW5nIHN0YXJ0dXAgZXhlY3V0aW9uJyk7XG5cdH1cbn07IiwiLy8gbm8gYmFzZVVSSVxuXG4vLyBvYmplY3QgdG8gc3RvcmUgbG9hZGVkIGFuZCBsb2FkaW5nIGNodW5rc1xuLy8gdW5kZWZpbmVkID0gY2h1bmsgbm90IGxvYWRlZCwgbnVsbCA9IGNodW5rIHByZWxvYWRlZC9wcmVmZXRjaGVkXG4vLyBbcmVzb2x2ZSwgcmVqZWN0LCBQcm9taXNlXSA9IGNodW5rIGxvYWRpbmcsIDAgPSBjaHVuayBsb2FkZWRcbnZhciBpbnN0YWxsZWRDaHVua3MgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmhtclNfanNvbnAgfHwge1xuXHRcIm1haW5cIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZih0cnVlKSB7IC8vIGFsbCBjaHVua3MgaGF2ZSBKU1xuXHRcdFx0XHRcdC8vIHNldHVwIFByb21pc2UgaW4gY2h1bmsgY2FjaGVcblx0XHRcdFx0XHR2YXIgcHJvbWlzZSA9IG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IChpbnN0YWxsZWRDaHVua0RhdGEgPSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSBbcmVzb2x2ZSwgcmVqZWN0XSkpO1xuXHRcdFx0XHRcdHByb21pc2VzLnB1c2goaW5zdGFsbGVkQ2h1bmtEYXRhWzJdID0gcHJvbWlzZSk7XG5cblx0XHRcdFx0XHQvLyBzdGFydCBjaHVuayBsb2FkaW5nXG5cdFx0XHRcdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18udShjaHVua0lkKTtcblx0XHRcdFx0XHQvLyBjcmVhdGUgZXJyb3IgYmVmb3JlIHN0YWNrIHVud291bmQgdG8gZ2V0IHVzZWZ1bCBzdGFja3RyYWNlIGxhdGVyXG5cdFx0XHRcdFx0dmFyIGVycm9yID0gbmV3IEVycm9yKCk7XG5cdFx0XHRcdFx0dmFyIGxvYWRpbmdFbmRlZCA9IChldmVudCkgPT4ge1xuXHRcdFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGluc3RhbGxlZENodW5rcywgY2h1bmtJZCkpIHtcblx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdO1xuXHRcdFx0XHRcdFx0XHRpZihpbnN0YWxsZWRDaHVua0RhdGEgIT09IDApIGluc3RhbGxlZENodW5rc1tjaHVua0lkXSA9IHVuZGVmaW5lZDtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhKSB7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0XHRcdFx0XHR2YXIgcmVhbFNyYyA9IGV2ZW50ICYmIGV2ZW50LnRhcmdldCAmJiBldmVudC50YXJnZXQuc3JjO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm1lc3NhZ2UgPSAnTG9hZGluZyBjaHVuayAnICsgY2h1bmtJZCArICcgZmFpbGVkLlxcbignICsgZXJyb3JUeXBlICsgJzogJyArIHJlYWxTcmMgKyAnKSc7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IubmFtZSA9ICdDaHVua0xvYWRFcnJvcic7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5yZXF1ZXN0ID0gcmVhbFNyYztcblx0XHRcdFx0XHRcdFx0XHRpbnN0YWxsZWRDaHVua0RhdGFbMV0oZXJyb3IpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQsIFwiY2h1bmstXCIgKyBjaHVua0lkLCBjaHVua0lkKTtcblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVfcmVuZW9zX3NsaWRlcl9tb2RzX3BhcnRpY2xlXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0dmFyIHJlc3VsdCA9IG5ld01vZHVsZUZhY3Rvcnlcblx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0dmFyIGFjY2VwdFByb21pc2VzID0gW107XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0YWNjZXB0UHJvbWlzZXMucHVzaChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbkFjY2VwdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoYWNjZXB0UHJvbWlzZXMpXG5cdFx0XHRcdC50aGVuKG9uQWNjZXB0ZWQpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfcmVuZW9zX3NsaWRlcl9tb2RzX3BhcnRpY2xlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua19yZW5lb3Nfc2xpZGVyX21vZHNfcGFydGljbGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHJ1biBydW50aW1lIHN0YXJ0dXBcbl9fd2VicGFja19yZXF1aXJlX18ueCgpOyIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9NTAwNiZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mb3ZlcmxheT10cnVlJnJlY29ubmVjdD0xMCZob3Q9dHJ1ZSZsaXZlLXJlbG9hZD10cnVlXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCIuL3NyYy9pbmRleC5qc1wiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==