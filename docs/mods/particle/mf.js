var particle;
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
    return  true ? "particle:0.0.4" : 0;
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
    return  true ? "particle:0.0.4" : 0;
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

/***/ "./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3002&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true":
/*!***********************************************************************************************************************************************************************************!*\
  !*** ./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3002&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true ***!
  \***********************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

"use strict";
var __resourceQuery = "?protocol=ws%3A&hostname=0.0.0.0&port=3002&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true";
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

/***/ "webpack/container/entry/particle":
/*!***********************!*\
  !*** container entry ***!
  \***********************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {

"use strict";
var moduleMap = {
	"./particle": () => {
		return Promise.all(/*! __federation_expose_particle */[__webpack_require__.e("webpack_sharing_consume_default_vue_vue"), __webpack_require__.e("__federation_expose_particle")]).then(() => (() => ((__webpack_require__(/*! ./src/index.mf.js */ "./src/index.mf.js")))));
	},
	"./particleUI": () => {
		return Promise.all(/*! __federation_expose_particleUI */[__webpack_require__.e("webpack_sharing_consume_default_vue_vue"), __webpack_require__.e("__federation_expose_particleUI")]).then(() => (() => ((__webpack_require__(/*! ./src/inspector/particleUI.vue */ "./src/inspector/particleUI.vue")))));
	}
};
var get = (module, getScope) => {
	__webpack_require__.R = getScope;
	getScope = (
		__webpack_require__.o(moduleMap, module)
			? moduleMap[module]()
			: Promise.resolve().then(() => {
				throw new Error('Module "' + module + '" does not exist in container.');
			})
	);
	__webpack_require__.R = undefined;
	return getScope;
};
var init = (shareScope, initScope, remoteEntryInitOptions) => {
	return __webpack_require__.federation.bundlerRuntime.initContainerEntry({	webpackRequire: __webpack_require__,
		shareScope: shareScope,
		initScope: initScope,
		remoteEntryInitOptions: remoteEntryInitOptions,
		shareScopeKey: "default"
	})
};


// This exports getters to disallow modifications
__webpack_require__.d(exports, {
	get: () => (get),
	init: () => (init)
});

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
/******/ 				chunkMatcher: function(chunkId) {return "webpack_sharing_consume_default_vue_vue" != chunkId},
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
/******/ 			// return url for filenames not based on template
/******/ 			if (chunkId === "particle") return "mf.js";
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
/******/ 		__webpack_require__.hmrF = () => ("particle." + __webpack_require__.h() + ".hot-update.json");
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/getFullHash */
/******/ 	(() => {
/******/ 		__webpack_require__.h = () => ("0af507ff1b37af921514")
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
/******/ 					register("vue", "3.5.21", () => (__webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm-bundler_js").then(() => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))))));
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
/******/ 				shareConfig: {"eager":false,"singleton":false,"layer":null}},],	"vue": [{	version: "3.5.21",
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
/******/ 	/* webpack/runtime/consumes */
/******/ 	(() => {
/******/ 		var installedModules = {};
/******/ 		var moduleToHandlerMapping = {
/******/ 			"webpack/sharing/consume/default/vue/vue": {
/******/ 				getter: () => (__webpack_require__.e("vendors-node_modules_vue_dist_vue_runtime_esm-bundler_js").then(() => (() => (__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))))),
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "",
/******/ 					  "strictVersion": true,
/******/ 					  "singleton": false,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "vue",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/@reneos/app/@reneos/app": {
/******/ 				getter: () => (__webpack_require__.e("node_modules_reneos_app_index_js").then(() => (() => (__webpack_require__(/*! @reneos/app */ "./node_modules/@reneos/app/index.js"))))),
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "",
/******/ 					  "strictVersion": true,
/******/ 					  "singleton": false,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "@reneos/app",
/******/ 			},
/******/ 			"webpack/sharing/consume/default/three/three": {
/******/ 				getter: () => (__webpack_require__.e("vendors-node_modules_three_build_three_module_js").then(() => (() => (__webpack_require__(/*! three */ "./node_modules/three/build/three.module.js"))))),
/******/ 				shareInfo: {
/******/ 					shareConfig: {
/******/ 					  "fixedDependencies": false,
/******/ 					  "requiredVersion": "",
/******/ 					  "strictVersion": true,
/******/ 					  "singleton": false,
/******/ 					  "eager": false
/******/ 					},
/******/ 					scope: ["default"],
/******/ 				},
/******/ 				shareKey: "three",
/******/ 			}
/******/ 		};
/******/ 		// no consumes in initial chunks
/******/ 		var chunkMapping = {
/******/ 			"webpack_sharing_consume_default_vue_vue": [
/******/ 				"webpack/sharing/consume/default/vue/vue"
/******/ 			],
/******/ 			"__federation_expose_particle": [
/******/ 				"webpack/sharing/consume/default/@reneos/app/@reneos/app",
/******/ 				"webpack/sharing/consume/default/three/three"
/******/ 			]
/******/ 		};
/******/ 		__webpack_require__.f.consumes = (chunkId, promises) => {
/******/ 			__webpack_require__.federation.bundlerRuntime.consumes({
/******/ 			chunkMapping: chunkMapping,
/******/ 			installedModules: installedModules,
/******/ 			chunkId: chunkId,
/******/ 			moduleToHandlerMapping: moduleToHandlerMapping,
/******/ 			promises: promises,
/******/ 			webpackRequire:__webpack_require__
/******/ 			});
/******/ 		}
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
/******/ 			"particle": 0
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
/******/ 						if("webpack_sharing_consume_default_vue_vue" != chunkId) {
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
/******/ 						} else installedChunks[chunkId] = 0;
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
/******/ 	__webpack_require__("./node_modules/webpack-dev-server/client/index.js?protocol=ws%3A&hostname=0.0.0.0&port=3002&pathname=%2Fws&logging=info&overlay=true&reconnect=10&hot=true&live-reload=true");
/******/ 	__webpack_require__("./node_modules/webpack/hot/dev-server.js");
/******/ 	var __webpack_exports__ = __webpack_require__("webpack/container/entry/particle");
/******/ 	particle = __webpack_exports__;
/******/ 	
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUU7QUFDaEc7QUFDQTtBQUNBO0FBQ0EsV0FBVywwRUFBYTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFNEM7QUFDNUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDeEJtRDs7QUFFbkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0EsQ0FBQzs7QUFFRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ04sc0NBQXNDLElBQUk7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQkFBZ0I7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7O0FBRUEsa0NBQWtDLFFBQVE7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixpQkFBaUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxRQUFRO0FBQ1I7QUFDQSx1Q0FBdUMsUUFBUTtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsSUFBSTtBQUNKO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0Es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QUVBOztXQUVBLGU7Ozs7O1dDaEdBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEdBQUc7V0FDSDtXQUNBO1dBQ0EsRTs7Ozs7V0NaQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0EsaUNBQWlDOztXQUVqQztXQUNBO1dBQ0E7V0FDQSxLQUFLO1dBQ0w7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLE1BQU07V0FDTjtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsR0FBRztXQUNIO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLG1CQUFtQiwyQkFBMkI7V0FDOUM7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0Esa0JBQWtCLGNBQWM7V0FDaEM7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGNBQWMsYUFBYTtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBLGlCQUFpQiw0QkFBNEI7V0FDN0M7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLElBQUk7V0FDSjtXQUNBOztXQUVBOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsSUFBSTtXQUNKOztXQUVBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTs7V0FFQTtXQUNBO1dBQ0EsZ0JBQWdCLDRCQUE0QjtXQUM1QztXQUNBO1dBQ0E7O1dBRUE7V0FDQTs7V0FFQTtXQUNBOztXQUVBO1dBQ0E7O1dBRUE7V0FDQSxnQkFBZ0IsNEJBQTRCO1dBQzVDO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGtCQUFrQix1Q0FBdUM7V0FDekQ7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBLG1CQUFtQixpQ0FBaUM7V0FDcEQ7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHNCQUFzQix1Q0FBdUM7V0FDN0Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esc0JBQXNCLHNCQUFzQjtXQUM1QztXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWCxXQUFXO1dBQ1g7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxZQUFZO1dBQ1o7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsVUFBVTtXQUNWO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLFdBQVc7V0FDWDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0Esb0JBQW9CLHdDQUF3QztXQUM1RDtXQUNBO1dBQ0E7V0FDQTtXQUNBLE9BQU87V0FDUDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsU0FBUztXQUNULFNBQVM7V0FDVDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxVQUFVO1dBQ1Y7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EsUUFBUTtXQUNSO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxTQUFTO1dBQ1Q7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEtBQUs7V0FDTDtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLEVBQUUsSUFBSTtXQUNOO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxJQUFJO1dBQ0o7V0FDQTtXQUNBLEVBQUU7V0FDRjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQSxzQ0FBc0M7V0FDdEM7V0FDQTtXQUNBLEVBQUU7V0FDRjs7V0FFQTs7V0FFQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQSxNQUFNLHFCQUFxQjtXQUMzQjtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7O1dBRUE7O1dBRUE7V0FDQTtXQUNBLDRHOzs7O1VDcmtCQTtVQUNBLHdCO1VDREE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy8uZmVkZXJhdGlvbi9lbnRyeS5kM2M1MWFkODcwOGVlYWJmZGY5ZTFlNTM1ODIxNTFkYy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9lcnJvci1jb2Rlcy9kaXN0L2luZGV4LmVzbS5tanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS1jb3JlL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUtY29yZS9kaXN0L3BvbHlmaWxscy5lc20uanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy9AbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lL2Rpc3QvdXRpbHMuZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3Nkay9kaXN0L2luZGV4LmVzbS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsvZGlzdC9wb2x5ZmlsbHMuZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3dlYnBhY2stYnVuZGxlci1ydW50aW1lL2Rpc3QvY29uc3RhbnQuZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3dlYnBhY2stYnVuZGxlci1ydW50aW1lL2Rpc3QvaW5kZXguZXNtLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvYW5zaS1odG1sLWNvbW11bml0eS9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL2V2ZW50cy9ldmVudHMuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvbW9kdWxlcy9sb2dnZXIvaW5kZXguanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L292ZXJsYXkuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3Byb2dyZXNzLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9zb2NrZXQuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrLWRldi1zZXJ2ZXIvY2xpZW50L3V0aWxzL2xvZy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2stZGV2LXNlcnZlci9jbGllbnQvdXRpbHMvc2VuZE1lc3NhZ2UuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9kZXYtc2VydmVyLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9ub2RlX21vZHVsZXMvd2VicGFjay9ob3QvZW1pdHRlci5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2xvZy1hcHBseS1yZXN1bHQuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL25vZGVfbW9kdWxlcy93ZWJwYWNrL2hvdC9sb2cuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL2NvbnRhaW5lci1lbnRyeSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2ZlZGVyYXRpb24gcnVudGltZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2Vuc3VyZSBjaHVuayIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCBjaHVuayBmaWxlbmFtZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9nZXQgamF2YXNjcmlwdCB1cGRhdGUgY2h1bmsgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0IG1pbmktY3NzIGNodW5rIGZpbGVuYW1lIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2dldCB1cGRhdGUgbWFuaWZlc3QgZmlsZW5hbWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9sb2FkIHNjcmlwdCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9ob3QgbW9kdWxlIHJlcGxhY2VtZW50Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9ydW50aW1lL3B1YmxpY1BhdGgiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvY29uc3VtZXMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvY3NzIGxvYWRpbmciLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS93ZWJwYWNrL3J1bnRpbWUvZW1iZWQvZmVkZXJhdGlvbiIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svcnVudGltZS9qc29ucCBjaHVuayBsb2FkaW5nIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvd2VicGFjay9iZWZvcmUtc3RhcnR1cCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svc3RhcnR1cCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlL3dlYnBhY2svYWZ0ZXItc3RhcnR1cCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgZmVkZXJhdGlvbiBmcm9tICdEOi9Xb3Jrcy9QcmVzZW50YXRvci9zbGlkZXIubW9kcy5wYXJ0aWNsZS9ub2RlX21vZHVsZXMvQG1vZHVsZS1mZWRlcmF0aW9uL3dlYnBhY2stYnVuZGxlci1ydW50aW1lL2Rpc3QvaW5kZXguZXNtLmpzJztcblxuaWYoIV9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5ydW50aW1lKXtcblx0dmFyIHByZXZGZWRlcmF0aW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24gPSB7fVxuXHRmb3IodmFyIGtleSBpbiBmZWRlcmF0aW9uKXtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb25ba2V5XSA9IGZlZGVyYXRpb25ba2V5XTtcblx0fVxuXHRmb3IodmFyIGtleSBpbiBwcmV2RmVkZXJhdGlvbil7XG5cdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uW2tleV0gPSBwcmV2RmVkZXJhdGlvbltrZXldO1xuXHR9XG59XG5pZighX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluc3RhbmNlKXtcblxuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5zdGFuY2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24ucnVudGltZS5pbml0KF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucyk7XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKXtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYXR0YWNoU2hhcmVTY29wZU1hcChfX3dlYnBhY2tfcmVxdWlyZV9fKVxuXHR9XG5cdGlmKF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbnN0YWxsSW5pdGlhbENvbnN1bWVzKXtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5zdGFsbEluaXRpYWxDb25zdW1lcygpXG5cdH1cblxuXHRpZighX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmlzTUZSZW1vdGUgJiYgX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLnByZWZldGNoKXtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLnByZWZldGNoKClcblx0fVxufSIsImNvbnN0IFJVTlRJTUVfMDAxID0gJ1JVTlRJTUUtMDAxJztcbmNvbnN0IFJVTlRJTUVfMDAyID0gJ1JVTlRJTUUtMDAyJztcbmNvbnN0IFJVTlRJTUVfMDAzID0gJ1JVTlRJTUUtMDAzJztcbmNvbnN0IFJVTlRJTUVfMDA0ID0gJ1JVTlRJTUUtMDA0JztcbmNvbnN0IFJVTlRJTUVfMDA1ID0gJ1JVTlRJTUUtMDA1JztcbmNvbnN0IFJVTlRJTUVfMDA2ID0gJ1JVTlRJTUUtMDA2JztcbmNvbnN0IFJVTlRJTUVfMDA3ID0gJ1JVTlRJTUUtMDA3JztcbmNvbnN0IFJVTlRJTUVfMDA4ID0gJ1JVTlRJTUUtMDA4JztcbmNvbnN0IFJVTlRJTUVfMDA5ID0gJ1JVTlRJTUUtMDA5JztcbmNvbnN0IFRZUEVfMDAxID0gJ1RZUEUtMDAxJztcbmNvbnN0IEJVSUxEXzAwMSA9ICdCVUlMRC0wMDEnO1xuY29uc3QgQlVJTERfMDAyID0gJ0JVSUxELTAwMic7XG5cbmNvbnN0IGdldERvY3NVcmwgPSAoZXJyb3JDb2RlKT0+e1xuICAgIGNvbnN0IHR5cGUgPSBlcnJvckNvZGUuc3BsaXQoJy0nKVswXS50b0xvd2VyQ2FzZSgpO1xuICAgIHJldHVybiBgVmlldyB0aGUgZG9jcyB0byBzZWUgaG93IHRvIHNvbHZlOiBodHRwczovL21vZHVsZS1mZWRlcmF0aW9uLmlvL2d1aWRlL3Ryb3VibGVzaG9vdGluZy8ke3R5cGV9LyR7ZXJyb3JDb2RlfWA7XG59O1xuY29uc3QgZ2V0U2hvcnRFcnJvck1zZyA9IChlcnJvckNvZGUsIGVycm9yRGVzY01hcCwgYXJncywgb3JpZ2luYWxFcnJvck1zZyk9PntcbiAgICBjb25zdCBtc2cgPSBbXG4gICAgICAgIGAke1tcbiAgICAgICAgICAgIGVycm9yRGVzY01hcFtlcnJvckNvZGVdXG4gICAgICAgIF19ICMke2Vycm9yQ29kZX1gXG4gICAgXTtcbiAgICBhcmdzICYmIG1zZy5wdXNoKGBhcmdzOiAke0pTT04uc3RyaW5naWZ5KGFyZ3MpfWApO1xuICAgIG1zZy5wdXNoKGdldERvY3NVcmwoZXJyb3JDb2RlKSk7XG4gICAgb3JpZ2luYWxFcnJvck1zZyAmJiBtc2cucHVzaChgT3JpZ2luYWwgRXJyb3IgTWVzc2FnZTpcXG4gJHtvcmlnaW5hbEVycm9yTXNnfWApO1xuICAgIHJldHVybiBtc2cuam9pbignXFxuJyk7XG59O1xuXG5mdW5jdGlvbiBfZXh0ZW5kcygpIHtcbiAgICBfZXh0ZW5kcyA9IE9iamVjdC5hc3NpZ24gfHwgZnVuY3Rpb24gYXNzaWduKHRhcmdldCkge1xuICAgICAgICBmb3IodmFyIGkgPSAxOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgIHZhciBzb3VyY2UgPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICBmb3IodmFyIGtleSBpbiBzb3VyY2UpaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChzb3VyY2UsIGtleSkpIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRhcmdldDtcbiAgICB9O1xuICAgIHJldHVybiBfZXh0ZW5kcy5hcHBseSh0aGlzLCBhcmd1bWVudHMpO1xufVxuXG5jb25zdCBydW50aW1lRGVzY01hcCA9IHtcbiAgICBbUlVOVElNRV8wMDFdOiAnRmFpbGVkIHRvIGdldCByZW1vdGVFbnRyeSBleHBvcnRzLicsXG4gICAgW1JVTlRJTUVfMDAyXTogJ1RoZSByZW1vdGUgZW50cnkgaW50ZXJmYWNlIGRvZXMgbm90IGNvbnRhaW4gXCJpbml0XCInLFxuICAgIFtSVU5USU1FXzAwM106ICdGYWlsZWQgdG8gZ2V0IG1hbmlmZXN0LicsXG4gICAgW1JVTlRJTUVfMDA0XTogJ0ZhaWxlZCB0byBsb2NhdGUgcmVtb3RlLicsXG4gICAgW1JVTlRJTUVfMDA1XTogJ0ludmFsaWQgbG9hZFNoYXJlU3luYyBmdW5jdGlvbiBjYWxsIGZyb20gYnVuZGxlciBydW50aW1lJyxcbiAgICBbUlVOVElNRV8wMDZdOiAnSW52YWxpZCBsb2FkU2hhcmVTeW5jIGZ1bmN0aW9uIGNhbGwgZnJvbSBydW50aW1lJyxcbiAgICBbUlVOVElNRV8wMDddOiAnRmFpbGVkIHRvIGdldCByZW1vdGUgc25hcHNob3QuJyxcbiAgICBbUlVOVElNRV8wMDhdOiAnRmFpbGVkIHRvIGxvYWQgc2NyaXB0IHJlc291cmNlcy4nLFxuICAgIFtSVU5USU1FXzAwOV06ICdQbGVhc2UgY2FsbCBjcmVhdGVJbnN0YW5jZSBmaXJzdC4nXG59O1xuY29uc3QgdHlwZURlc2NNYXAgPSB7XG4gICAgW1RZUEVfMDAxXTogJ0ZhaWxlZCB0byBnZW5lcmF0ZSB0eXBlIGRlY2xhcmF0aW9uLiBFeGVjdXRlIHRoZSBiZWxvdyBjbWQgdG8gcmVwcm9kdWNlIGFuZCBmaXggdGhlIGVycm9yLidcbn07XG5jb25zdCBidWlsZERlc2NNYXAgPSB7XG4gICAgW0JVSUxEXzAwMV06ICdGYWlsZWQgdG8gZmluZCBleHBvc2UgbW9kdWxlLicsXG4gICAgW0JVSUxEXzAwMl06ICdQdWJsaWNQYXRoIGlzIHJlcXVpcmVkIGluIHByb2QgbW9kZS4nXG59O1xuY29uc3QgZXJyb3JEZXNjTWFwID0gX2V4dGVuZHMoe30sIHJ1bnRpbWVEZXNjTWFwLCB0eXBlRGVzY01hcCwgYnVpbGREZXNjTWFwKTtcblxuZXhwb3J0IHsgQlVJTERfMDAxLCBCVUlMRF8wMDIsIFJVTlRJTUVfMDAxLCBSVU5USU1FXzAwMiwgUlVOVElNRV8wMDMsIFJVTlRJTUVfMDA0LCBSVU5USU1FXzAwNSwgUlVOVElNRV8wMDYsIFJVTlRJTUVfMDA3LCBSVU5USU1FXzAwOCwgUlVOVElNRV8wMDksIFRZUEVfMDAxLCBidWlsZERlc2NNYXAsIGVycm9yRGVzY01hcCwgZ2V0U2hvcnRFcnJvck1zZywgcnVudGltZURlc2NNYXAsIHR5cGVEZXNjTWFwIH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20ubWpzLm1hcFxuIiwiaW1wb3J0IHsgXyBhcyBfZXh0ZW5kcywgYSBhcyBfb2JqZWN0X3dpdGhvdXRfcHJvcGVydGllc19sb29zZSB9IGZyb20gJy4vcG9seWZpbGxzLmVzbS5qcyc7XG5pbXBvcnQgeyBjcmVhdGVMb2dnZXIsIGlzQnJvd3NlckVudiwgaXNSZWFjdE5hdGl2ZUVudiwgaXNEZWJ1Z01vZGUsIGNvbXBvc2VLZXlXaXRoU2VwYXJhdG9yLCBsb2FkU2NyaXB0Tm9kZSwgbG9hZFNjcmlwdCwgY3JlYXRlTGluaywgY3JlYXRlU2NyaXB0LCBzYWZlVG9TdHJpbmcsIGdldFJlc291cmNlVXJsLCBpc01hbmlmZXN0UHJvdmlkZXIsIGdlbmVyYXRlU25hcHNob3RGcm9tTWFuaWZlc3QsIHdhcm4gYXMgd2FybiQxIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3Nkayc7XG5leHBvcnQgeyBsb2FkU2NyaXB0LCBsb2FkU2NyaXB0Tm9kZSB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsnO1xuaW1wb3J0IHsgZ2V0U2hvcnRFcnJvck1zZywgUlVOVElNRV8wMDgsIHJ1bnRpbWVEZXNjTWFwLCBSVU5USU1FXzAwMSwgUlVOVElNRV8wMDIsIFJVTlRJTUVfMDA3LCBSVU5USU1FXzAwMywgUlVOVElNRV8wMDUsIFJVTlRJTUVfMDA2LCBSVU5USU1FXzAwNCB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9lcnJvci1jb2Rlcyc7XG5cbmNvbnN0IExPR19DQVRFR09SWSA9ICdbIEZlZGVyYXRpb24gUnVudGltZSBdJztcbi8vIEZJWE1FOiBwcmUtYnVuZGxlID9cbmNvbnN0IGxvZ2dlciA9IGNyZWF0ZUxvZ2dlcihMT0dfQ0FURUdPUlkpO1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmZ1bmN0aW9uIGFzc2VydChjb25kaXRpb24sIG1zZykge1xuICAgIGlmICghY29uZGl0aW9uKSB7XG4gICAgICAgIGVycm9yKG1zZyk7XG4gICAgfVxufVxuZnVuY3Rpb24gZXJyb3IobXNnKSB7XG4gICAgaWYgKG1zZyBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAgIC8vIENoZWNrIGlmIHRoZSBtZXNzYWdlIGFscmVhZHkgc3RhcnRzIHdpdGggdGhlIGxvZyBjYXRlZ29yeSB0byBhdm9pZCBkdXBsaWNhdGlvblxuICAgICAgICBpZiAoIW1zZy5tZXNzYWdlLnN0YXJ0c1dpdGgoTE9HX0NBVEVHT1JZKSkge1xuICAgICAgICAgICAgbXNnLm1lc3NhZ2UgPSBgJHtMT0dfQ0FURUdPUll9OiAke21zZy5tZXNzYWdlfWA7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cgbXNnO1xuICAgIH1cbiAgICB0aHJvdyBuZXcgRXJyb3IoYCR7TE9HX0NBVEVHT1JZfTogJHttc2d9YCk7XG59XG5mdW5jdGlvbiB3YXJuKG1zZykge1xuICAgIGlmIChtc2cgaW5zdGFuY2VvZiBFcnJvcikge1xuICAgICAgICAvLyBDaGVjayBpZiB0aGUgbWVzc2FnZSBhbHJlYWR5IHN0YXJ0cyB3aXRoIHRoZSBsb2cgY2F0ZWdvcnkgdG8gYXZvaWQgZHVwbGljYXRpb25cbiAgICAgICAgaWYgKCFtc2cubWVzc2FnZS5zdGFydHNXaXRoKExPR19DQVRFR09SWSkpIHtcbiAgICAgICAgICAgIG1zZy5tZXNzYWdlID0gYCR7TE9HX0NBVEVHT1JZfTogJHttc2cubWVzc2FnZX1gO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2dlci53YXJuKG1zZyk7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgbG9nZ2VyLndhcm4obXNnKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFkZFVuaXF1ZUl0ZW0oYXJyLCBpdGVtKSB7XG4gICAgaWYgKGFyci5maW5kSW5kZXgoKG5hbWUpPT5uYW1lID09PSBpdGVtKSA9PT0gLTEpIHtcbiAgICAgICAgYXJyLnB1c2goaXRlbSk7XG4gICAgfVxuICAgIHJldHVybiBhcnI7XG59XG5mdW5jdGlvbiBnZXRGTUlkKHJlbW90ZUluZm8pIHtcbiAgICBpZiAoJ3ZlcnNpb24nIGluIHJlbW90ZUluZm8gJiYgcmVtb3RlSW5mby52ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBgJHtyZW1vdGVJbmZvLm5hbWV9OiR7cmVtb3RlSW5mby52ZXJzaW9ufWA7XG4gICAgfSBlbHNlIGlmICgnZW50cnknIGluIHJlbW90ZUluZm8gJiYgcmVtb3RlSW5mby5lbnRyeSkge1xuICAgICAgICByZXR1cm4gYCR7cmVtb3RlSW5mby5uYW1lfToke3JlbW90ZUluZm8uZW50cnl9YDtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gYCR7cmVtb3RlSW5mby5uYW1lfWA7XG4gICAgfVxufVxuZnVuY3Rpb24gaXNSZW1vdGVJbmZvV2l0aEVudHJ5KHJlbW90ZSkge1xuICAgIHJldHVybiB0eXBlb2YgcmVtb3RlLmVudHJ5ICE9PSAndW5kZWZpbmVkJztcbn1cbmZ1bmN0aW9uIGlzUHVyZVJlbW90ZUVudHJ5KHJlbW90ZSkge1xuICAgIHJldHVybiAhcmVtb3RlLmVudHJ5LmluY2x1ZGVzKCcuanNvbicpO1xufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmFzeW5jIGZ1bmN0aW9uIHNhZmVXcmFwcGVyKGNhbGxiYWNrLCBkaXNhYmxlV2Fybikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAhZGlzYWJsZVdhcm4gJiYgd2FybihlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzT2JqZWN0KHZhbCkge1xuICAgIHJldHVybiB2YWwgJiYgdHlwZW9mIHZhbCA9PT0gJ29iamVjdCc7XG59XG5jb25zdCBvYmplY3RUb1N0cmluZyA9IE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmc7XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L2Jhbi10eXBlc1xuZnVuY3Rpb24gaXNQbGFpbk9iamVjdCh2YWwpIHtcbiAgICByZXR1cm4gb2JqZWN0VG9TdHJpbmcuY2FsbCh2YWwpID09PSAnW29iamVjdCBPYmplY3RdJztcbn1cbmZ1bmN0aW9uIGlzU3RhdGljUmVzb3VyY2VzRXF1YWwodXJsMSwgdXJsMikge1xuICAgIGNvbnN0IFJFR19FWFAgPSAvXihodHRwcz86KT9cXC9cXC8vaTtcbiAgICAvLyBUcmFuc2Zvcm0gdXJsMSBhbmQgdXJsMiBpbnRvIHJlbGF0aXZlIHBhdGhzXG4gICAgY29uc3QgcmVsYXRpdmVVcmwxID0gdXJsMS5yZXBsYWNlKFJFR19FWFAsICcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IHJlbGF0aXZlVXJsMiA9IHVybDIucmVwbGFjZShSRUdfRVhQLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgcmVsYXRpdmUgcGF0aHMgYXJlIGlkZW50aWNhbFxuICAgIHJldHVybiByZWxhdGl2ZVVybDEgPT09IHJlbGF0aXZlVXJsMjtcbn1cbmZ1bmN0aW9uIGFycmF5T3B0aW9ucyhvcHRpb25zKSB7XG4gICAgcmV0dXJuIEFycmF5LmlzQXJyYXkob3B0aW9ucykgPyBvcHRpb25zIDogW1xuICAgICAgICBvcHRpb25zXG4gICAgXTtcbn1cbmZ1bmN0aW9uIGdldFJlbW90ZUVudHJ5SW5mb0Zyb21TbmFwc2hvdChzbmFwc2hvdCkge1xuICAgIGNvbnN0IGRlZmF1bHRSZW1vdGVFbnRyeUluZm8gPSB7XG4gICAgICAgIHVybDogJycsXG4gICAgICAgIHR5cGU6ICdnbG9iYWwnLFxuICAgICAgICBnbG9iYWxOYW1lOiAnJ1xuICAgIH07XG4gICAgaWYgKGlzQnJvd3NlckVudigpIHx8IGlzUmVhY3ROYXRpdmVFbnYoKSkge1xuICAgICAgICByZXR1cm4gJ3JlbW90ZUVudHJ5JyBpbiBzbmFwc2hvdCA/IHtcbiAgICAgICAgICAgIHVybDogc25hcHNob3QucmVtb3RlRW50cnksXG4gICAgICAgICAgICB0eXBlOiBzbmFwc2hvdC5yZW1vdGVFbnRyeVR5cGUsXG4gICAgICAgICAgICBnbG9iYWxOYW1lOiBzbmFwc2hvdC5nbG9iYWxOYW1lXG4gICAgICAgIH0gOiBkZWZhdWx0UmVtb3RlRW50cnlJbmZvO1xuICAgIH1cbiAgICBpZiAoJ3NzclJlbW90ZUVudHJ5JyBpbiBzbmFwc2hvdCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdXJsOiBzbmFwc2hvdC5zc3JSZW1vdGVFbnRyeSB8fCBkZWZhdWx0UmVtb3RlRW50cnlJbmZvLnVybCxcbiAgICAgICAgICAgIHR5cGU6IHNuYXBzaG90LnNzclJlbW90ZUVudHJ5VHlwZSB8fCBkZWZhdWx0UmVtb3RlRW50cnlJbmZvLnR5cGUsXG4gICAgICAgICAgICBnbG9iYWxOYW1lOiBzbmFwc2hvdC5nbG9iYWxOYW1lXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiBkZWZhdWx0UmVtb3RlRW50cnlJbmZvO1xufVxuY29uc3QgcHJvY2Vzc01vZHVsZUFsaWFzID0gKG5hbWUsIHN1YlBhdGgpPT57XG4gICAgLy8gQGhvc3QvIC4vYnV0dG9uIC0+IEBob3N0L2J1dHRvblxuICAgIGxldCBtb2R1bGVOYW1lO1xuICAgIGlmIChuYW1lLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgbW9kdWxlTmFtZSA9IG5hbWUuc2xpY2UoMCwgLTEpO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIG1vZHVsZU5hbWUgPSBuYW1lO1xuICAgIH1cbiAgICBpZiAoc3ViUGF0aC5zdGFydHNXaXRoKCcuJykpIHtcbiAgICAgICAgc3ViUGF0aCA9IHN1YlBhdGguc2xpY2UoMSk7XG4gICAgfVxuICAgIG1vZHVsZU5hbWUgPSBtb2R1bGVOYW1lICsgc3ViUGF0aDtcbiAgICByZXR1cm4gbW9kdWxlTmFtZTtcbn07XG5cbmNvbnN0IEN1cnJlbnRHbG9iYWwgPSB0eXBlb2YgZ2xvYmFsVGhpcyA9PT0gJ29iamVjdCcgPyBnbG9iYWxUaGlzIDogd2luZG93O1xuY29uc3QgbmF0aXZlR2xvYmFsID0gKCgpPT57XG4gICAgdHJ5IHtcbiAgICAgICAgLy8gZ2V0IHJlYWwgd2luZG93IChpbmNhc2Ugb2Ygc2FuZGJveClcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LmRlZmF1bHRWaWV3O1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgLy8gbm9kZSBlbnZcbiAgICAgICAgcmV0dXJuIEN1cnJlbnRHbG9iYWw7XG4gICAgfVxufSkoKTtcbmNvbnN0IEdsb2JhbCA9IG5hdGl2ZUdsb2JhbDtcbmZ1bmN0aW9uIGRlZmluZVByb3BlcnR5R2xvYmFsVmFsKHRhcmdldCwga2V5LCB2YWwpIHtcbiAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkodGFyZ2V0LCBrZXksIHtcbiAgICAgICAgdmFsdWU6IHZhbCxcbiAgICAgICAgY29uZmlndXJhYmxlOiBmYWxzZSxcbiAgICAgICAgd3JpdGFibGU6IHRydWVcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGluY2x1ZGVPd25Qcm9wZXJ0eSh0YXJnZXQsIGtleSkge1xuICAgIHJldHVybiBPYmplY3QuaGFzT3duUHJvcGVydHkuY2FsbCh0YXJnZXQsIGtleSk7XG59XG4vLyBUaGlzIHNlY3Rpb24gaXMgdG8gcHJldmVudCBlbmNhcHN1bGF0aW9uIGJ5IGNlcnRhaW4gbWljcm9mcm9udGVuZCBmcmFtZXdvcmtzLiBEdWUgdG8gcmV1c2UgcG9saWNpZXMsIHNhbmRib3ggZXNjYXBlcy5cbi8vIFRoZSBzYW5kYm94IGluIHRoZSBtaWNyb2Zyb250ZW5kIGRvZXMgbm90IHJlcGxpY2F0ZSB0aGUgdmFsdWUgb2YgJ2NvbmZpZ3VyYWJsZScuXG4vLyBJZiB0aGVyZSBpcyBubyBsb2FkaW5nIGNvbnRlbnQgb24gdGhlIGdsb2JhbCBvYmplY3QsIHRoaXMgc2VjdGlvbiBkZWZpbmVzIHRoZSBsb2FkaW5nIG9iamVjdC5cbmlmICghaW5jbHVkZU93blByb3BlcnR5KEN1cnJlbnRHbG9iYWwsICdfX0dMT0JBTF9MT0FESU5HX1JFTU9URV9FTlRSWV9fJykpIHtcbiAgICBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbChDdXJyZW50R2xvYmFsLCAnX19HTE9CQUxfTE9BRElOR19SRU1PVEVfRU5UUllfXycsIHt9KTtcbn1cbmNvbnN0IGdsb2JhbExvYWRpbmcgPSBDdXJyZW50R2xvYmFsLl9fR0xPQkFMX0xPQURJTkdfUkVNT1RFX0VOVFJZX187XG5mdW5jdGlvbiBzZXRHbG9iYWxEZWZhdWx0VmFsKHRhcmdldCkge1xuICAgIHZhciBfdGFyZ2V0X19fRkVERVJBVElPTl9fLCBfdGFyZ2V0X19fRkVERVJBVElPTl9fMSwgX3RhcmdldF9fX0ZFREVSQVRJT05fXzIsIF90YXJnZXRfX19GRURFUkFUSU9OX18zLCBfdGFyZ2V0X19fRkVERVJBVElPTl9fNCwgX3RhcmdldF9fX0ZFREVSQVRJT05fXzU7XG4gICAgaWYgKGluY2x1ZGVPd25Qcm9wZXJ0eSh0YXJnZXQsICdfX1ZNT0tfXycpICYmICFpbmNsdWRlT3duUHJvcGVydHkodGFyZ2V0LCAnX19GRURFUkFUSU9OX18nKSkge1xuICAgICAgICBkZWZpbmVQcm9wZXJ0eUdsb2JhbFZhbCh0YXJnZXQsICdfX0ZFREVSQVRJT05fXycsIHRhcmdldC5fX1ZNT0tfXyk7XG4gICAgfVxuICAgIGlmICghaW5jbHVkZU93blByb3BlcnR5KHRhcmdldCwgJ19fRkVERVJBVElPTl9fJykpIHtcbiAgICAgICAgZGVmaW5lUHJvcGVydHlHbG9iYWxWYWwodGFyZ2V0LCAnX19GRURFUkFUSU9OX18nLCB7XG4gICAgICAgICAgICBfX0dMT0JBTF9QTFVHSU5fXzogW10sXG4gICAgICAgICAgICBfX0lOU1RBTkNFU19fOiBbXSxcbiAgICAgICAgICAgIG1vZHVsZUluZm86IHt9LFxuICAgICAgICAgICAgX19TSEFSRV9fOiB7fSxcbiAgICAgICAgICAgIF9fTUFOSUZFU1RfTE9BRElOR19fOiB7fSxcbiAgICAgICAgICAgIF9fUFJFTE9BREVEX01BUF9fOiBuZXcgTWFwKClcbiAgICAgICAgfSk7XG4gICAgICAgIGRlZmluZVByb3BlcnR5R2xvYmFsVmFsKHRhcmdldCwgJ19fVk1PS19fJywgdGFyZ2V0Ll9fRkVERVJBVElPTl9fKTtcbiAgICB9XG4gICAgdmFyIF9fX0dMT0JBTF9QTFVHSU5fXztcbiAgICAoX19fR0xPQkFMX1BMVUdJTl9fID0gKF90YXJnZXRfX19GRURFUkFUSU9OX18gPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLl9fR0xPQkFMX1BMVUdJTl9fKSAhPSBudWxsID8gX19fR0xPQkFMX1BMVUdJTl9fIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXy5fX0dMT0JBTF9QTFVHSU5fXyA9IFtdO1xuICAgIHZhciBfX19JTlNUQU5DRVNfXztcbiAgICAoX19fSU5TVEFOQ0VTX18gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXzEgPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLl9fSU5TVEFOQ0VTX18pICE9IG51bGwgPyBfX19JTlNUQU5DRVNfXyA6IF90YXJnZXRfX19GRURFUkFUSU9OX18xLl9fSU5TVEFOQ0VTX18gPSBbXTtcbiAgICB2YXIgX21vZHVsZUluZm87XG4gICAgKF9tb2R1bGVJbmZvID0gKF90YXJnZXRfX19GRURFUkFUSU9OX18yID0gdGFyZ2V0Ll9fRkVERVJBVElPTl9fKS5tb2R1bGVJbmZvKSAhPSBudWxsID8gX21vZHVsZUluZm8gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fMi5tb2R1bGVJbmZvID0ge307XG4gICAgdmFyIF9fX1NIQVJFX187XG4gICAgKF9fX1NIQVJFX18gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXzMgPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLl9fU0hBUkVfXykgIT0gbnVsbCA/IF9fX1NIQVJFX18gOiBfdGFyZ2V0X19fRkVERVJBVElPTl9fMy5fX1NIQVJFX18gPSB7fTtcbiAgICB2YXIgX19fTUFOSUZFU1RfTE9BRElOR19fO1xuICAgIChfX19NQU5JRkVTVF9MT0FESU5HX18gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXzQgPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLl9fTUFOSUZFU1RfTE9BRElOR19fKSAhPSBudWxsID8gX19fTUFOSUZFU1RfTE9BRElOR19fIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXzQuX19NQU5JRkVTVF9MT0FESU5HX18gPSB7fTtcbiAgICB2YXIgX19fUFJFTE9BREVEX01BUF9fO1xuICAgIChfX19QUkVMT0FERURfTUFQX18gPSAoX3RhcmdldF9fX0ZFREVSQVRJT05fXzUgPSB0YXJnZXQuX19GRURFUkFUSU9OX18pLl9fUFJFTE9BREVEX01BUF9fKSAhPSBudWxsID8gX19fUFJFTE9BREVEX01BUF9fIDogX3RhcmdldF9fX0ZFREVSQVRJT05fXzUuX19QUkVMT0FERURfTUFQX18gPSBuZXcgTWFwKCk7XG59XG5zZXRHbG9iYWxEZWZhdWx0VmFsKEN1cnJlbnRHbG9iYWwpO1xuc2V0R2xvYmFsRGVmYXVsdFZhbChuYXRpdmVHbG9iYWwpO1xuZnVuY3Rpb24gcmVzZXRGZWRlcmF0aW9uR2xvYmFsSW5mbygpIHtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fR0xPQkFMX1BMVUdJTl9fID0gW107XG4gICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fID0gW107XG4gICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvID0ge307XG4gICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX1NIQVJFX18gPSB7fTtcbiAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fTUFOSUZFU1RfTE9BRElOR19fID0ge307XG4gICAgT2JqZWN0LmtleXMoZ2xvYmFsTG9hZGluZykuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBkZWxldGUgZ2xvYmFsTG9hZGluZ1trZXldO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gc2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlKEZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXy5wdXNoKEZlZGVyYXRpb25JbnN0YW5jZSk7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IoKSB7XG4gICAgcmV0dXJuIEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19ERUJVR19DT05TVFJVQ1RPUl9fO1xufVxuZnVuY3Rpb24gc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKEZlZGVyYXRpb25Db25zdHJ1Y3RvciwgaXNEZWJ1ZyA9IGlzRGVidWdNb2RlKCkpIHtcbiAgICBpZiAoaXNEZWJ1Zykge1xuICAgICAgICBDdXJyZW50R2xvYmFsLl9fRkVERVJBVElPTl9fLl9fREVCVUdfQ09OU1RSVUNUT1JfXyA9IEZlZGVyYXRpb25Db25zdHJ1Y3RvcjtcbiAgICAgICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0RFQlVHX0NPTlNUUlVDVE9SX1ZFUlNJT05fXyA9IFwiMC4xOS4xXCI7XG4gICAgfVxufVxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9iYW4tdHlwZXNcbmZ1bmN0aW9uIGdldEluZm9XaXRob3V0VHlwZSh0YXJnZXQsIGtleSkge1xuICAgIGlmICh0eXBlb2Yga2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBrZXlSZXMgPSB0YXJnZXRba2V5XTtcbiAgICAgICAgaWYgKGtleVJlcykge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdGFyZ2V0W2tleV0sXG4gICAgICAgICAgICAgICAga2V5OiBrZXlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRLZXlzID0gT2JqZWN0LmtleXModGFyZ2V0KTtcbiAgICAgICAgICAgIGZvciAoY29uc3QgdGFyZ2V0S2V5IG9mIHRhcmdldEtleXMpe1xuICAgICAgICAgICAgICAgIGNvbnN0IFt0YXJnZXRUeXBlT3JOYW1lLCBfXSA9IHRhcmdldEtleS5zcGxpdCgnOicpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG5LZXkgPSBgJHt0YXJnZXRUeXBlT3JOYW1lfToke2tleX1gO1xuICAgICAgICAgICAgICAgIGNvbnN0IHR5cGVXaXRoS2V5UmVzID0gdGFyZ2V0W25LZXldO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlV2l0aEtleVJlcykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHR5cGVXaXRoS2V5UmVzLFxuICAgICAgICAgICAgICAgICAgICAgICAga2V5OiBuS2V5XG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2YWx1ZTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGtleToga2V5XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdrZXkgbXVzdCBiZSBzdHJpbmcnKTtcbiAgICB9XG59XG5jb25zdCBnZXRHbG9iYWxTbmFwc2hvdCA9ICgpPT5uYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX18ubW9kdWxlSW5mbztcbmNvbnN0IGdldFRhcmdldFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyA9IChtb2R1bGVJbmZvLCBzbmFwc2hvdCk9PntcbiAgICAvLyBDaGVjayBpZiB0aGUgcmVtb3RlIGlzIGluY2x1ZGVkIGluIHRoZSBob3N0U25hcHNob3RcbiAgICBjb25zdCBtb2R1bGVLZXkgPSBnZXRGTUlkKG1vZHVsZUluZm8pO1xuICAgIGNvbnN0IGdldE1vZHVsZUluZm8gPSBnZXRJbmZvV2l0aG91dFR5cGUoc25hcHNob3QsIG1vZHVsZUtleSkudmFsdWU7XG4gICAgLy8gVGhlIHJlbW90ZVNuYXBzaG90IG1pZ2h0IG5vdCBpbmNsdWRlIGEgdmVyc2lvblxuICAgIGlmIChnZXRNb2R1bGVJbmZvICYmICFnZXRNb2R1bGVJbmZvLnZlcnNpb24gJiYgJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gJiYgbW9kdWxlSW5mb1sndmVyc2lvbiddKSB7XG4gICAgICAgIGdldE1vZHVsZUluZm8udmVyc2lvbiA9IG1vZHVsZUluZm9bJ3ZlcnNpb24nXTtcbiAgICB9XG4gICAgaWYgKGdldE1vZHVsZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIGdldE1vZHVsZUluZm87XG4gICAgfVxuICAgIC8vIElmIHRoZSByZW1vdGUgaXMgbm90IGluY2x1ZGVkIGluIHRoZSBob3N0U25hcHNob3QsIGRlcGxveSBhIG1pY3JvIGFwcCBzbmFwc2hvdFxuICAgIGlmICgndmVyc2lvbicgaW4gbW9kdWxlSW5mbyAmJiBtb2R1bGVJbmZvWyd2ZXJzaW9uJ10pIHtcbiAgICAgICAgY29uc3QgeyB2ZXJzaW9uIH0gPSBtb2R1bGVJbmZvLCByZXNNb2R1bGVJbmZvID0gX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2UobW9kdWxlSW5mbywgW1xuICAgICAgICAgICAgXCJ2ZXJzaW9uXCJcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IG1vZHVsZUtleVdpdGhvdXRWZXJzaW9uID0gZ2V0Rk1JZChyZXNNb2R1bGVJbmZvKTtcbiAgICAgICAgY29uc3QgZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uID0gZ2V0SW5mb1dpdGhvdXRUeXBlKG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvLCBtb2R1bGVLZXlXaXRob3V0VmVyc2lvbikudmFsdWU7XG4gICAgICAgIGlmICgoZ2V0TW9kdWxlSW5mb1dpdGhvdXRWZXJzaW9uID09IG51bGwgPyB2b2lkIDAgOiBnZXRNb2R1bGVJbmZvV2l0aG91dFZlcnNpb24udmVyc2lvbikgPT09IHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiBnZXRNb2R1bGVJbmZvV2l0aG91dFZlcnNpb247XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xufTtcbmNvbnN0IGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyA9IChtb2R1bGVJbmZvKT0+Z2V0VGFyZ2V0U25hcHNob3RJbmZvQnlNb2R1bGVJbmZvKG1vZHVsZUluZm8sIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvKTtcbmNvbnN0IHNldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyA9IChyZW1vdGVJbmZvLCBtb2R1bGVEZXRhaWxJbmZvKT0+e1xuICAgIGNvbnN0IG1vZHVsZUtleSA9IGdldEZNSWQocmVtb3RlSW5mbyk7XG4gICAgbmF0aXZlR2xvYmFsLl9fRkVERVJBVElPTl9fLm1vZHVsZUluZm9bbW9kdWxlS2V5XSA9IG1vZHVsZURldGFpbEluZm87XG4gICAgcmV0dXJuIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvO1xufTtcbmNvbnN0IGFkZEdsb2JhbFNuYXBzaG90ID0gKG1vZHVsZUluZm9zKT0+e1xuICAgIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvID0gX2V4dGVuZHMoe30sIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvLCBtb2R1bGVJbmZvcyk7XG4gICAgcmV0dXJuICgpPT57XG4gICAgICAgIGNvbnN0IGtleXMgPSBPYmplY3Qua2V5cyhtb2R1bGVJbmZvcyk7XG4gICAgICAgIGZvciAoY29uc3Qga2V5IG9mIGtleXMpe1xuICAgICAgICAgICAgZGVsZXRlIG5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5tb2R1bGVJbmZvW2tleV07XG4gICAgICAgIH1cbiAgICB9O1xufTtcbmNvbnN0IGdldFJlbW90ZUVudHJ5RXhwb3J0cyA9IChuYW1lLCBnbG9iYWxOYW1lKT0+e1xuICAgIGNvbnN0IHJlbW90ZUVudHJ5S2V5ID0gZ2xvYmFsTmFtZSB8fCBgX19GRURFUkFUSU9OXyR7bmFtZX06Y3VzdG9tX19gO1xuICAgIGNvbnN0IGVudHJ5RXhwb3J0cyA9IEN1cnJlbnRHbG9iYWxbcmVtb3RlRW50cnlLZXldO1xuICAgIHJldHVybiB7XG4gICAgICAgIHJlbW90ZUVudHJ5S2V5LFxuICAgICAgICBlbnRyeUV4cG9ydHNcbiAgICB9O1xufTtcbi8vIFRoaXMgZnVuY3Rpb24gaXMgdXNlZCB0byByZWdpc3RlciBnbG9iYWwgcGx1Z2lucy5cbi8vIEl0IGl0ZXJhdGVzIG92ZXIgdGhlIHByb3ZpZGVkIHBsdWdpbnMgYW5kIGNoZWNrcyBpZiB0aGV5IGFyZSBhbHJlYWR5IHJlZ2lzdGVyZWQuXG4vLyBJZiBhIHBsdWdpbiBpcyBub3QgcmVnaXN0ZXJlZCwgaXQgaXMgYWRkZWQgdG8gdGhlIGdsb2JhbCBwbHVnaW5zLlxuLy8gSWYgYSBwbHVnaW4gaXMgYWxyZWFkeSByZWdpc3RlcmVkLCBhIHdhcm5pbmcgbWVzc2FnZSBpcyBsb2dnZWQuXG5jb25zdCByZWdpc3Rlckdsb2JhbFBsdWdpbnMgPSAocGx1Z2lucyk9PntcbiAgICBjb25zdCB7IF9fR0xPQkFMX1BMVUdJTl9fIH0gPSBuYXRpdmVHbG9iYWwuX19GRURFUkFUSU9OX187XG4gICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pPT57XG4gICAgICAgIGlmIChfX0dMT0JBTF9QTFVHSU5fXy5maW5kSW5kZXgoKHApPT5wLm5hbWUgPT09IHBsdWdpbi5uYW1lKSA9PT0gLTEpIHtcbiAgICAgICAgICAgIF9fR0xPQkFMX1BMVUdJTl9fLnB1c2gocGx1Z2luKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHdhcm4oYFRoZSBwbHVnaW4gJHtwbHVnaW4ubmFtZX0gaGFzIGJlZW4gcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgfVxuICAgIH0pO1xufTtcbmNvbnN0IGdldEdsb2JhbEhvc3RQbHVnaW5zID0gKCk9Pm5hdGl2ZUdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0dMT0JBTF9QTFVHSU5fXztcbmNvbnN0IGdldFByZWxvYWRlZCA9IChpZCk9PkN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19QUkVMT0FERURfTUFQX18uZ2V0KGlkKTtcbmNvbnN0IHNldFByZWxvYWRlZCA9IChpZCk9PkN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19QUkVMT0FERURfTUFQX18uc2V0KGlkLCB0cnVlKTtcblxuY29uc3QgREVGQVVMVF9TQ09QRSA9ICdkZWZhdWx0JztcbmNvbnN0IERFRkFVTFRfUkVNT1RFX1RZUEUgPSAnZ2xvYmFsJztcblxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gdGhvc2UgY29uc3RhbnRzIGFyZSBiYXNlZCBvbiBodHRwczovL3d3dy5ydWJ5ZG9jLmluZm8vZ2Vtcy9zZW1hbnRpY19yYW5nZS8zLjAuMC9TZW1hbnRpY1JhbmdlI0JVSUxESURFTlRJRklFUi1jb25zdGFudFxuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuY29uc3QgYnVpbGRJZGVudGlmaWVyID0gJ1swLTlBLVphLXotXSsnO1xuY29uc3QgYnVpbGQgPSBgKD86XFxcXCsoJHtidWlsZElkZW50aWZpZXJ9KD86XFxcXC4ke2J1aWxkSWRlbnRpZmllcn0pKikpYDtcbmNvbnN0IG51bWVyaWNJZGVudGlmaWVyID0gJzB8WzEtOV1cXFxcZConO1xuY29uc3QgbnVtZXJpY0lkZW50aWZpZXJMb29zZSA9ICdbMC05XSsnO1xuY29uc3Qgbm9uTnVtZXJpY0lkZW50aWZpZXIgPSAnXFxcXGQqW2EtekEtWi1dW2EtekEtWjAtOS1dKic7XG5jb25zdCBwcmVSZWxlYXNlSWRlbnRpZmllckxvb3NlID0gYCg/OiR7bnVtZXJpY0lkZW50aWZpZXJMb29zZX18JHtub25OdW1lcmljSWRlbnRpZmllcn0pYDtcbmNvbnN0IHByZVJlbGVhc2VMb29zZSA9IGAoPzotPygke3ByZVJlbGVhc2VJZGVudGlmaWVyTG9vc2V9KD86XFxcXC4ke3ByZVJlbGVhc2VJZGVudGlmaWVyTG9vc2V9KSopKWA7XG5jb25zdCBwcmVSZWxlYXNlSWRlbnRpZmllciA9IGAoPzoke251bWVyaWNJZGVudGlmaWVyfXwke25vbk51bWVyaWNJZGVudGlmaWVyfSlgO1xuY29uc3QgcHJlUmVsZWFzZSA9IGAoPzotKCR7cHJlUmVsZWFzZUlkZW50aWZpZXJ9KD86XFxcXC4ke3ByZVJlbGVhc2VJZGVudGlmaWVyfSkqKSlgO1xuY29uc3QgeFJhbmdlSWRlbnRpZmllciA9IGAke251bWVyaWNJZGVudGlmaWVyfXx4fFh8XFxcXCpgO1xuY29uc3QgeFJhbmdlUGxhaW4gPSBgW3Y9XFxcXHNdKigke3hSYW5nZUlkZW50aWZpZXJ9KSg/OlxcXFwuKCR7eFJhbmdlSWRlbnRpZmllcn0pKD86XFxcXC4oJHt4UmFuZ2VJZGVudGlmaWVyfSkoPzoke3ByZVJlbGVhc2V9KT8ke2J1aWxkfT8pPyk/YDtcbmNvbnN0IGh5cGhlblJhbmdlID0gYF5cXFxccyooJHt4UmFuZ2VQbGFpbn0pXFxcXHMrLVxcXFxzKygke3hSYW5nZVBsYWlufSlcXFxccyokYDtcbmNvbnN0IG1haW5WZXJzaW9uTG9vc2UgPSBgKCR7bnVtZXJpY0lkZW50aWZpZXJMb29zZX0pXFxcXC4oJHtudW1lcmljSWRlbnRpZmllckxvb3NlfSlcXFxcLigke251bWVyaWNJZGVudGlmaWVyTG9vc2V9KWA7XG5jb25zdCBsb29zZVBsYWluID0gYFt2PVxcXFxzXSoke21haW5WZXJzaW9uTG9vc2V9JHtwcmVSZWxlYXNlTG9vc2V9PyR7YnVpbGR9P2A7XG5jb25zdCBndGx0ID0gJygoPzo8fD4pPz0/KSc7XG5jb25zdCBjb21wYXJhdG9yVHJpbSA9IGAoXFxcXHMqKSR7Z3RsdH1cXFxccyooJHtsb29zZVBsYWlufXwke3hSYW5nZVBsYWlufSlgO1xuY29uc3QgbG9uZVRpbGRlID0gJyg/On4+PyknO1xuY29uc3QgdGlsZGVUcmltID0gYChcXFxccyopJHtsb25lVGlsZGV9XFxcXHMrYDtcbmNvbnN0IGxvbmVDYXJldCA9ICcoPzpcXFxcXiknO1xuY29uc3QgY2FyZXRUcmltID0gYChcXFxccyopJHtsb25lQ2FyZXR9XFxcXHMrYDtcbmNvbnN0IHN0YXIgPSAnKDx8Pik/PT9cXFxccypcXFxcKic7XG5jb25zdCBjYXJldCA9IGBeJHtsb25lQ2FyZXR9JHt4UmFuZ2VQbGFpbn0kYDtcbmNvbnN0IG1haW5WZXJzaW9uID0gYCgke251bWVyaWNJZGVudGlmaWVyfSlcXFxcLigke251bWVyaWNJZGVudGlmaWVyfSlcXFxcLigke251bWVyaWNJZGVudGlmaWVyfSlgO1xuY29uc3QgZnVsbFBsYWluID0gYHY/JHttYWluVmVyc2lvbn0ke3ByZVJlbGVhc2V9PyR7YnVpbGR9P2A7XG5jb25zdCB0aWxkZSA9IGBeJHtsb25lVGlsZGV9JHt4UmFuZ2VQbGFpbn0kYDtcbmNvbnN0IHhSYW5nZSA9IGBeJHtndGx0fVxcXFxzKiR7eFJhbmdlUGxhaW59JGA7XG5jb25zdCBjb21wYXJhdG9yID0gYF4ke2d0bHR9XFxcXHMqKCR7ZnVsbFBsYWlufSkkfF4kYDtcbi8vIGNvcHkgZnJvbSBzZW12ZXIgcGFja2FnZVxuY29uc3QgZ3RlMCA9ICdeXFxcXHMqPj1cXFxccyowLjAuMFxcXFxzKiQnO1xuXG4vLyBmb3JrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL29yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24vYmxvYi92MS4xLjEyL3BhY2thZ2VzL2xpYi9zcmMvdXRpbHMvc2VtdmVyL2luZGV4LnRzXG4vLyBDb3B5cmlnaHQgKGMpXG4vLyB2aXRlLXBsdWdpbi1mZWRlcmF0aW9uIGlzIGxpY2Vuc2VkIHVuZGVyIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBjYW4gdXNlIHRoaXMgc29mdHdhcmUgYWNjb3JkaW5nIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGUgTXVsYW4gUFNMIHYyLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIE11bGFuIFBTTCB2MiBhdDpcbi8vICAgICAgaHR0cDovL2xpY2Vuc2UuY29zY2wub3JnLmNuL011bGFuUFNMMlxuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBPTiBBTiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPRiBBTlkgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBOT04tSU5GUklOR0VNRU5ULCBNRVJDSEFOVEFCSUxJVFkgT1IgRklUIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbi8vIFNlZSB0aGUgTXVsYW4gUFNMIHYyIGZvciBtb3JlIGRldGFpbHMuXG5mdW5jdGlvbiBwYXJzZVJlZ2V4KHNvdXJjZSkge1xuICAgIHJldHVybiBuZXcgUmVnRXhwKHNvdXJjZSk7XG59XG5mdW5jdGlvbiBpc1hWZXJzaW9uKHZlcnNpb24pIHtcbiAgICByZXR1cm4gIXZlcnNpb24gfHwgdmVyc2lvbi50b0xvd2VyQ2FzZSgpID09PSAneCcgfHwgdmVyc2lvbiA9PT0gJyonO1xufVxuZnVuY3Rpb24gcGlwZSguLi5mbnMpIHtcbiAgICByZXR1cm4gKHgpPT5mbnMucmVkdWNlKCh2LCBmKT0+Zih2KSwgeCk7XG59XG5mdW5jdGlvbiBleHRyYWN0Q29tcGFyYXRvcihjb21wYXJhdG9yU3RyaW5nKSB7XG4gICAgcmV0dXJuIGNvbXBhcmF0b3JTdHJpbmcubWF0Y2gocGFyc2VSZWdleChjb21wYXJhdG9yKSk7XG59XG5mdW5jdGlvbiBjb21iaW5lVmVyc2lvbihtYWpvciwgbWlub3IsIHBhdGNoLCBwcmVSZWxlYXNlKSB7XG4gICAgY29uc3QgbWFpblZlcnNpb24gPSBgJHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH1gO1xuICAgIGlmIChwcmVSZWxlYXNlKSB7XG4gICAgICAgIHJldHVybiBgJHttYWluVmVyc2lvbn0tJHtwcmVSZWxlYXNlfWA7XG4gICAgfVxuICAgIHJldHVybiBtYWluVmVyc2lvbjtcbn1cblxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gcGFyc2VIeXBoZW4ocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UucmVwbGFjZShwYXJzZVJlZ2V4KGh5cGhlblJhbmdlKSwgKF9yYW5nZSwgZnJvbSwgZnJvbU1ham9yLCBmcm9tTWlub3IsIGZyb21QYXRjaCwgX2Zyb21QcmVSZWxlYXNlLCBfZnJvbUJ1aWxkLCB0bywgdG9NYWpvciwgdG9NaW5vciwgdG9QYXRjaCwgdG9QcmVSZWxlYXNlKT0+e1xuICAgICAgICBpZiAoaXNYVmVyc2lvbihmcm9tTWFqb3IpKSB7XG4gICAgICAgICAgICBmcm9tID0gJyc7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihmcm9tTWlub3IpKSB7XG4gICAgICAgICAgICBmcm9tID0gYD49JHtmcm9tTWFqb3J9LjAuMGA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbihmcm9tUGF0Y2gpKSB7XG4gICAgICAgICAgICBmcm9tID0gYD49JHtmcm9tTWFqb3J9LiR7ZnJvbU1pbm9yfS4wYDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZyb20gPSBgPj0ke2Zyb219YDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoaXNYVmVyc2lvbih0b01ham9yKSkge1xuICAgICAgICAgICAgdG8gPSAnJztcbiAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKHRvTWlub3IpKSB7XG4gICAgICAgICAgICB0byA9IGA8JHtOdW1iZXIodG9NYWpvcikgKyAxfS4wLjAtMGA7XG4gICAgICAgIH0gZWxzZSBpZiAoaXNYVmVyc2lvbih0b1BhdGNoKSkge1xuICAgICAgICAgICAgdG8gPSBgPCR7dG9NYWpvcn0uJHtOdW1iZXIodG9NaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICB9IGVsc2UgaWYgKHRvUHJlUmVsZWFzZSkge1xuICAgICAgICAgICAgdG8gPSBgPD0ke3RvTWFqb3J9LiR7dG9NaW5vcn0uJHt0b1BhdGNofS0ke3RvUHJlUmVsZWFzZX1gO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdG8gPSBgPD0ke3RvfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke2Zyb219ICR7dG99YC50cmltKCk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3JUcmltKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleChjb21wYXJhdG9yVHJpbSksICckMSQyJDMnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlVGlsZGVUcmltKHJhbmdlKSB7XG4gICAgcmV0dXJuIHJhbmdlLnJlcGxhY2UocGFyc2VSZWdleCh0aWxkZVRyaW0pLCAnJDF+Jyk7XG59XG5mdW5jdGlvbiBwYXJzZUNhcmV0VHJpbShyYW5nZSkge1xuICAgIHJldHVybiByYW5nZS5yZXBsYWNlKHBhcnNlUmVnZXgoY2FyZXRUcmltKSwgJyQxXicpO1xufVxuZnVuY3Rpb24gcGFyc2VDYXJldHMocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKChyYW5nZVZlcnNpb24pPT5yYW5nZVZlcnNpb24ucmVwbGFjZShwYXJzZVJlZ2V4KGNhcmV0KSwgKF8sIG1ham9yLCBtaW5vciwgcGF0Y2gsIHByZVJlbGVhc2UpPT57XG4gICAgICAgICAgICBpZiAoaXNYVmVyc2lvbihtYWpvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24obWlub3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LjAuMCA8JHtOdW1iZXIobWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKHBhdGNoKSkge1xuICAgICAgICAgICAgICAgIGlmIChtYWpvciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4wIDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4wIDwke051bWJlcihtYWpvcikgKyAxfS4wLjAtMGA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1ham9yID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1pbm9yID09PSAnMCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofS0ke3ByZVJlbGVhc2V9IDwke21ham9yfS4ke21pbm9yfS4ke051bWJlcihwYXRjaCkgKyAxfS0wYDtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofS0ke3ByZVJlbGVhc2V9IDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9LSR7cHJlUmVsZWFzZX0gPCR7TnVtYmVyKG1ham9yKSArIDF9LjAuMC0wYDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChtYWpvciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5vciA9PT0gJzAnKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0gPCR7bWFqb3J9LiR7bWlub3J9LiR7TnVtYmVyKHBhdGNoKSArIDF9LTBgO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9IDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4ke3BhdGNofSA8JHtOdW1iZXIobWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSkuam9pbignICcpO1xufVxuZnVuY3Rpb24gcGFyc2VUaWxkZXMocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2UudHJpbSgpLnNwbGl0KC9cXHMrLykubWFwKChyYW5nZVZlcnNpb24pPT5yYW5nZVZlcnNpb24ucmVwbGFjZShwYXJzZVJlZ2V4KHRpbGRlKSwgKF8sIG1ham9yLCBtaW5vciwgcGF0Y2gsIHByZVJlbGVhc2UpPT57XG4gICAgICAgICAgICBpZiAoaXNYVmVyc2lvbihtYWpvcikpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gJyc7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWFZlcnNpb24obWlub3IpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LjAuMCA8JHtOdW1iZXIobWFqb3IpICsgMX0uMC4wLTBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hWZXJzaW9uKHBhdGNoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4ke21pbm9yfS4wIDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwcmVSZWxlYXNlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LiR7cGF0Y2h9LSR7cHJlUmVsZWFzZX0gPCR7bWFqb3J9LiR7TnVtYmVyKG1pbm9yKSArIDF9LjAtMGA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYD49JHttYWpvcn0uJHttaW5vcn0uJHtwYXRjaH0gPCR7bWFqb3J9LiR7TnVtYmVyKG1pbm9yKSArIDF9LjAtMGA7XG4gICAgICAgIH0pKS5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBwYXJzZVhSYW5nZXMocmFuZ2UpIHtcbiAgICByZXR1cm4gcmFuZ2Uuc3BsaXQoL1xccysvKS5tYXAoKHJhbmdlVmVyc2lvbik9PnJhbmdlVmVyc2lvbi50cmltKCkucmVwbGFjZShwYXJzZVJlZ2V4KHhSYW5nZSksIChyZXQsIGd0bHQsIG1ham9yLCBtaW5vciwgcGF0Y2gsIHByZVJlbGVhc2UpPT57XG4gICAgICAgICAgICBjb25zdCBpc1hNYWpvciA9IGlzWFZlcnNpb24obWFqb3IpO1xuICAgICAgICAgICAgY29uc3QgaXNYTWlub3IgPSBpc1hNYWpvciB8fCBpc1hWZXJzaW9uKG1pbm9yKTtcbiAgICAgICAgICAgIGNvbnN0IGlzWFBhdGNoID0gaXNYTWlub3IgfHwgaXNYVmVyc2lvbihwYXRjaCk7XG4gICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJz0nICYmIGlzWFBhdGNoKSB7XG4gICAgICAgICAgICAgICAgZ3RsdCA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcHJlUmVsZWFzZSA9ICcnO1xuICAgICAgICAgICAgaWYgKGlzWE1ham9yKSB7XG4gICAgICAgICAgICAgICAgaWYgKGd0bHQgPT09ICc+JyB8fCBndGx0ID09PSAnPCcpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gbm90aGluZyBpcyBhbGxvd2VkXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnPDAuMC4wLTAnO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vdGhpbmcgaXMgZm9yYmlkZGVuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAnKic7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChndGx0ICYmIGlzWFBhdGNoKSB7XG4gICAgICAgICAgICAgICAgLy8gcmVwbGFjZSBYIHdpdGggMFxuICAgICAgICAgICAgICAgIGlmIChpc1hNaW5vcikge1xuICAgICAgICAgICAgICAgICAgICBtaW5vciA9IDA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHBhdGNoID0gMDtcbiAgICAgICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vID4xID0+ID49Mi4wLjBcbiAgICAgICAgICAgICAgICAgICAgLy8gPjEuMiA9PiA+PTEuMy4wXG4gICAgICAgICAgICAgICAgICAgIGd0bHQgPSAnPj0nO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNYTWlub3IpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1ham9yID0gTnVtYmVyKG1ham9yKSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5vciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBwYXRjaCA9IDA7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtaW5vciA9IE51bWJlcihtaW5vcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgcGF0Y2ggPSAwO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChndGx0ID09PSAnPD0nKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIDw9MC43LnggaXMgYWN0dWFsbHkgPDAuOC4wLCBzaW5jZSBhbnkgMC43Lnggc2hvdWxkIHBhc3NcbiAgICAgICAgICAgICAgICAgICAgLy8gU2ltaWxhcmx5LCA8PTcueCBpcyBhY3R1YWxseSA8OC4wLjAsIGV0Yy5cbiAgICAgICAgICAgICAgICAgICAgZ3RsdCA9ICc8JztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzWE1pbm9yKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYWpvciA9IE51bWJlcihtYWpvcikgKyAxO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbWlub3IgPSBOdW1iZXIobWlub3IpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoZ3RsdCA9PT0gJzwnKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZVJlbGVhc2UgPSAnLTAnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gYCR7Z3RsdCArIG1ham9yfS4ke21pbm9yfS4ke3BhdGNofSR7cHJlUmVsZWFzZX1gO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChpc1hNaW5vcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBgPj0ke21ham9yfS4wLjAke3ByZVJlbGVhc2V9IDwke051bWJlcihtYWpvcikgKyAxfS4wLjAtMGA7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGlzWFBhdGNoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGA+PSR7bWFqb3J9LiR7bWlub3J9LjAke3ByZVJlbGVhc2V9IDwke21ham9yfS4ke051bWJlcihtaW5vcikgKyAxfS4wLTBgO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHJldDtcbiAgICAgICAgfSkpLmpvaW4oJyAnKTtcbn1cbmZ1bmN0aW9uIHBhcnNlU3RhcihyYW5nZSkge1xuICAgIHJldHVybiByYW5nZS50cmltKCkucmVwbGFjZShwYXJzZVJlZ2V4KHN0YXIpLCAnJyk7XG59XG5mdW5jdGlvbiBwYXJzZUdURTAoY29tcGFyYXRvclN0cmluZykge1xuICAgIHJldHVybiBjb21wYXJhdG9yU3RyaW5nLnRyaW0oKS5yZXBsYWNlKHBhcnNlUmVnZXgoZ3RlMCksICcnKTtcbn1cblxuLy8gZm9yayBmcm9tIGh0dHBzOi8vZ2l0aHViLmNvbS9vcmlnaW5qcy92aXRlLXBsdWdpbi1mZWRlcmF0aW9uL2Jsb2IvdjEuMS4xMi9wYWNrYWdlcy9saWIvc3JjL3V0aWxzL3NlbXZlci9pbmRleC50c1xuLy8gQ29weXJpZ2h0IChjKVxuLy8gdml0ZS1wbHVnaW4tZmVkZXJhdGlvbiBpcyBsaWNlbnNlZCB1bmRlciBNdWxhbiBQU0wgdjIuXG4vLyBZb3UgY2FuIHVzZSB0aGlzIHNvZnR3YXJlIGFjY29yZGluZyB0byB0aGUgdGVybXMgYW5kIGNvbmRpdGlvbnMgb2YgdGhlIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBtYXkgb2J0YWluIGEgY29weSBvZiBNdWxhbiBQU0wgdjIgYXQ6XG4vLyAgICAgIGh0dHA6Ly9saWNlbnNlLmNvc2NsLm9yZy5jbi9NdWxhblBTTDJcbi8vIFRISVMgU09GVFdBUkUgSVMgUFJPVklERUQgT04gQU4gXCJBUyBJU1wiIEJBU0lTLCBXSVRIT1VUIFdBUlJBTlRJRVMgT0YgQU5ZIEtJTkQsIEVJVEhFUiBFWFBSRVNTIE9SIElNUExJRUQsIElOQ0xVRElORyBCVVQgTk9UIExJTUlURUQgVE8gTk9OLUlORlJJTkdFTUVOVCwgTUVSQ0hBTlRBQklMSVRZIE9SIEZJVCBGT1IgQSBQQVJUSUNVTEFSIFBVUlBPU0UuXG4vLyBTZWUgdGhlIE11bGFuIFBTTCB2MiBmb3IgbW9yZSBkZXRhaWxzLlxuZnVuY3Rpb24gY29tcGFyZUF0b20ocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIHJhbmdlQXRvbSA9IE51bWJlcihyYW5nZUF0b20pIHx8IHJhbmdlQXRvbTtcbiAgICB2ZXJzaW9uQXRvbSA9IE51bWJlcih2ZXJzaW9uQXRvbSkgfHwgdmVyc2lvbkF0b207XG4gICAgaWYgKHJhbmdlQXRvbSA+IHZlcnNpb25BdG9tKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAocmFuZ2VBdG9tID09PSB2ZXJzaW9uQXRvbSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgcmV0dXJuIC0xO1xufVxuZnVuY3Rpb24gY29tcGFyZVByZVJlbGVhc2UocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSkge1xuICAgIGNvbnN0IHsgcHJlUmVsZWFzZTogcmFuZ2VQcmVSZWxlYXNlIH0gPSByYW5nZUF0b207XG4gICAgY29uc3QgeyBwcmVSZWxlYXNlOiB2ZXJzaW9uUHJlUmVsZWFzZSB9ID0gdmVyc2lvbkF0b207XG4gICAgaWYgKHJhbmdlUHJlUmVsZWFzZSA9PT0gdW5kZWZpbmVkICYmIEJvb2xlYW4odmVyc2lvblByZVJlbGVhc2UpKSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBpZiAoQm9vbGVhbihyYW5nZVByZVJlbGVhc2UpICYmIHZlcnNpb25QcmVSZWxlYXNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgICBpZiAocmFuZ2VQcmVSZWxlYXNlID09PSB1bmRlZmluZWQgJiYgdmVyc2lvblByZVJlbGVhc2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgZm9yKGxldCBpID0gMCwgbiA9IHJhbmdlUHJlUmVsZWFzZS5sZW5ndGg7IGkgPD0gbjsgaSsrKXtcbiAgICAgICAgY29uc3QgcmFuZ2VFbGVtZW50ID0gcmFuZ2VQcmVSZWxlYXNlW2ldO1xuICAgICAgICBjb25zdCB2ZXJzaW9uRWxlbWVudCA9IHZlcnNpb25QcmVSZWxlYXNlW2ldO1xuICAgICAgICBpZiAocmFuZ2VFbGVtZW50ID09PSB2ZXJzaW9uRWxlbWVudCkge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHJhbmdlRWxlbWVudCA9PT0gdW5kZWZpbmVkICYmIHZlcnNpb25FbGVtZW50ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcmFuZ2VFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZlcnNpb25FbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGNvbXBhcmVBdG9tKHJhbmdlRWxlbWVudCwgdmVyc2lvbkVsZW1lbnQpO1xuICAgIH1cbiAgICByZXR1cm4gMDtcbn1cbmZ1bmN0aW9uIGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHtcbiAgICByZXR1cm4gY29tcGFyZUF0b20ocmFuZ2VBdG9tLm1ham9yLCB2ZXJzaW9uQXRvbS5tYWpvcikgfHwgY29tcGFyZUF0b20ocmFuZ2VBdG9tLm1pbm9yLCB2ZXJzaW9uQXRvbS5taW5vcikgfHwgY29tcGFyZUF0b20ocmFuZ2VBdG9tLnBhdGNoLCB2ZXJzaW9uQXRvbS5wYXRjaCkgfHwgY29tcGFyZVByZVJlbGVhc2UocmFuZ2VBdG9tLCB2ZXJzaW9uQXRvbSk7XG59XG5mdW5jdGlvbiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB7XG4gICAgcmV0dXJuIHJhbmdlQXRvbS52ZXJzaW9uID09PSB2ZXJzaW9uQXRvbS52ZXJzaW9uO1xufVxuZnVuY3Rpb24gY29tcGFyZShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB7XG4gICAgc3dpdGNoKHJhbmdlQXRvbS5vcGVyYXRvcil7XG4gICAgICAgIGNhc2UgJyc6XG4gICAgICAgIGNhc2UgJz0nOlxuICAgICAgICAgICAgcmV0dXJuIGVxKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pO1xuICAgICAgICBjYXNlICc+JzpcbiAgICAgICAgICAgIHJldHVybiBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA8IDA7XG4gICAgICAgIGNhc2UgJz49JzpcbiAgICAgICAgICAgIHJldHVybiBlcShyYW5nZUF0b20sIHZlcnNpb25BdG9tKSB8fCBjb21wYXJlVmVyc2lvbihyYW5nZUF0b20sIHZlcnNpb25BdG9tKSA8IDA7XG4gICAgICAgIGNhc2UgJzwnOlxuICAgICAgICAgICAgcmV0dXJuIGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pID4gMDtcbiAgICAgICAgY2FzZSAnPD0nOlxuICAgICAgICAgICAgcmV0dXJuIGVxKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pIHx8IGNvbXBhcmVWZXJzaW9uKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pID4gMDtcbiAgICAgICAgY2FzZSB1bmRlZmluZWQ6XG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gbWVhbiAqIG9yIHggLT4gYWxsIHZlcnNpb25zXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuXG4vLyBmb3JrIGZyb20gaHR0cHM6Ly9naXRodWIuY29tL29yaWdpbmpzL3ZpdGUtcGx1Z2luLWZlZGVyYXRpb24vYmxvYi92MS4xLjEyL3BhY2thZ2VzL2xpYi9zcmMvdXRpbHMvc2VtdmVyL2luZGV4LnRzXG4vLyBDb3B5cmlnaHQgKGMpXG4vLyB2aXRlLXBsdWdpbi1mZWRlcmF0aW9uIGlzIGxpY2Vuc2VkIHVuZGVyIE11bGFuIFBTTCB2Mi5cbi8vIFlvdSBjYW4gdXNlIHRoaXMgc29mdHdhcmUgYWNjb3JkaW5nIHRvIHRoZSB0ZXJtcyBhbmQgY29uZGl0aW9ucyBvZiB0aGUgTXVsYW4gUFNMIHYyLlxuLy8gWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIE11bGFuIFBTTCB2MiBhdDpcbi8vICAgICAgaHR0cDovL2xpY2Vuc2UuY29zY2wub3JnLmNuL011bGFuUFNMMlxuLy8gVEhJUyBTT0ZUV0FSRSBJUyBQUk9WSURFRCBPTiBBTiBcIkFTIElTXCIgQkFTSVMsIFdJVEhPVVQgV0FSUkFOVElFUyBPRiBBTlkgS0lORCwgRUlUSEVSIEVYUFJFU1MgT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBOT04tSU5GUklOR0VNRU5ULCBNRVJDSEFOVEFCSUxJVFkgT1IgRklUIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRS5cbi8vIFNlZSB0aGUgTXVsYW4gUFNMIHYyIGZvciBtb3JlIGRldGFpbHMuXG5mdW5jdGlvbiBwYXJzZUNvbXBhcmF0b3JTdHJpbmcocmFuZ2UpIHtcbiAgICByZXR1cm4gcGlwZSgvLyBoYW5kbGUgY2FyZXRcbiAgICAvLyBeIC0tPiAqIChhbnksIGtpbmRhIHNpbGx5KVxuICAgIC8vIF4yLCBeMi54LCBeMi54LnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbiAgICAvLyBeMi4wLCBeMi4wLnggLS0+ID49Mi4wLjAgPDMuMC4wLTBcbiAgICAvLyBeMS4yLCBeMS4yLnggLS0+ID49MS4yLjAgPDIuMC4wLTBcbiAgICAvLyBeMS4yLjMgLS0+ID49MS4yLjMgPDIuMC4wLTBcbiAgICAvLyBeMS4yLjAgLS0+ID49MS4yLjAgPDIuMC4wLTBcbiAgICBwYXJzZUNhcmV0cywgLy8gaGFuZGxlIHRpbGRlXG4gICAgLy8gfiwgfj4gLS0+ICogKGFueSwga2luZGEgc2lsbHkpXG4gICAgLy8gfjIsIH4yLngsIH4yLngueCwgfj4yLCB+PjIueCB+PjIueC54IC0tPiA+PTIuMC4wIDwzLjAuMC0wXG4gICAgLy8gfjIuMCwgfjIuMC54LCB+PjIuMCwgfj4yLjAueCAtLT4gPj0yLjAuMCA8Mi4xLjAtMFxuICAgIC8vIH4xLjIsIH4xLjIueCwgfj4xLjIsIH4+MS4yLnggLS0+ID49MS4yLjAgPDEuMy4wLTBcbiAgICAvLyB+MS4yLjMsIH4+MS4yLjMgLS0+ID49MS4yLjMgPDEuMy4wLTBcbiAgICAvLyB+MS4yLjAsIH4+MS4yLjAgLS0+ID49MS4yLjAgPDEuMy4wLTBcbiAgICBwYXJzZVRpbGRlcywgcGFyc2VYUmFuZ2VzLCBwYXJzZVN0YXIpKHJhbmdlKTtcbn1cbmZ1bmN0aW9uIHBhcnNlUmFuZ2UocmFuZ2UpIHtcbiAgICByZXR1cm4gcGlwZSgvLyBoYW5kbGUgaHlwaGVuUmFuZ2VcbiAgICAvLyBgMS4yLjMgLSAxLjIuNGAgPT4gYD49MS4yLjMgPD0xLjIuNGBcbiAgICBwYXJzZUh5cGhlbiwgLy8gaGFuZGxlIHRyaW0gY29tcGFyYXRvclxuICAgIC8vIGA+IDEuMi4zIDwgMS4yLjVgID0+IGA+MS4yLjMgPDEuMi41YFxuICAgIHBhcnNlQ29tcGFyYXRvclRyaW0sIC8vIGhhbmRsZSB0cmltIHRpbGRlXG4gICAgLy8gYH4gMS4yLjNgID0+IGB+MS4yLjNgXG4gICAgcGFyc2VUaWxkZVRyaW0sIC8vIGhhbmRsZSB0cmltIGNhcmV0XG4gICAgLy8gYF4gMS4yLjNgID0+IGBeMS4yLjNgXG4gICAgcGFyc2VDYXJldFRyaW0pKHJhbmdlLnRyaW0oKSkuc3BsaXQoL1xccysvKS5qb2luKCcgJyk7XG59XG5mdW5jdGlvbiBzYXRpc2Z5KHZlcnNpb24sIHJhbmdlKSB7XG4gICAgaWYgKCF2ZXJzaW9uKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgLy8gRXh0cmFjdCB2ZXJzaW9uIGRldGFpbHMgb25jZVxuICAgIGNvbnN0IGV4dHJhY3RlZFZlcnNpb24gPSBleHRyYWN0Q29tcGFyYXRvcih2ZXJzaW9uKTtcbiAgICBpZiAoIWV4dHJhY3RlZFZlcnNpb24pIHtcbiAgICAgICAgLy8gSWYgdGhlIHZlcnNpb24gc3RyaW5nIGlzIGludmFsaWQsIGl0IGNhbid0IHNhdGlzZnkgYW55IHJhbmdlXG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgWywgdmVyc2lvbk9wZXJhdG9yLCAsIHZlcnNpb25NYWpvciwgdmVyc2lvbk1pbm9yLCB2ZXJzaW9uUGF0Y2gsIHZlcnNpb25QcmVSZWxlYXNlXSA9IGV4dHJhY3RlZFZlcnNpb247XG4gICAgY29uc3QgdmVyc2lvbkF0b20gPSB7XG4gICAgICAgIG9wZXJhdG9yOiB2ZXJzaW9uT3BlcmF0b3IsXG4gICAgICAgIHZlcnNpb246IGNvbWJpbmVWZXJzaW9uKHZlcnNpb25NYWpvciwgdmVyc2lvbk1pbm9yLCB2ZXJzaW9uUGF0Y2gsIHZlcnNpb25QcmVSZWxlYXNlKSxcbiAgICAgICAgbWFqb3I6IHZlcnNpb25NYWpvcixcbiAgICAgICAgbWlub3I6IHZlcnNpb25NaW5vcixcbiAgICAgICAgcGF0Y2g6IHZlcnNpb25QYXRjaCxcbiAgICAgICAgcHJlUmVsZWFzZTogdmVyc2lvblByZVJlbGVhc2UgPT0gbnVsbCA/IHZvaWQgMCA6IHZlcnNpb25QcmVSZWxlYXNlLnNwbGl0KCcuJylcbiAgICB9O1xuICAgIC8vIFNwbGl0IHRoZSByYW5nZSBieSB8fCB0byBoYW5kbGUgT1IgY29uZGl0aW9uc1xuICAgIGNvbnN0IG9yUmFuZ2VzID0gcmFuZ2Uuc3BsaXQoJ3x8Jyk7XG4gICAgZm9yIChjb25zdCBvclJhbmdlIG9mIG9yUmFuZ2VzKXtcbiAgICAgICAgY29uc3QgdHJpbW1lZE9yUmFuZ2UgPSBvclJhbmdlLnRyaW0oKTtcbiAgICAgICAgaWYgKCF0cmltbWVkT3JSYW5nZSkge1xuICAgICAgICAgICAgLy8gQW4gZW1wdHkgcmFuZ2Ugc3RyaW5nIHNpZ25pZmllcyB3aWxkY2FyZCAqLCBzYXRpc2Z5IGFueSB2YWxpZCB2ZXJzaW9uXG4gICAgICAgICAgICAvLyAoV2UgYWxyZWFkeSBjaGVja2VkIGlmIHRoZSB2ZXJzaW9uIGl0c2VsZiBpcyB2YWxpZClcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEhhbmRsZSBzaW1wbGUgd2lsZGNhcmRzIGV4cGxpY2l0bHkgYmVmb3JlIGNvbXBsZXggcGFyc2luZ1xuICAgICAgICBpZiAodHJpbW1lZE9yUmFuZ2UgPT09ICcqJyB8fCB0cmltbWVkT3JSYW5nZSA9PT0gJ3gnKSB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICB0cnkge1xuICAgICAgICAgICAgLy8gQXBwbHkgZXhpc3RpbmcgcGFyc2luZyBsb2dpYyB0byB0aGUgY3VycmVudCBPUiBzdWItcmFuZ2VcbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZFN1YlJhbmdlID0gcGFyc2VSYW5nZSh0cmltbWVkT3JSYW5nZSk7IC8vIEhhbmRsZXMgaHlwaGVucywgdHJpbXMgZXRjLlxuICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHJlc3VsdCBvZiBpbml0aWFsIHBhcnNpbmcgaXMgZW1wdHksIHdoaWNoIGNhbiBoYXBwZW5cbiAgICAgICAgICAgIC8vIGZvciBzb21lIHdpbGRjYXJkIGNhc2VzIGhhbmRsZWQgYnkgcGFyc2VSYW5nZS9wYXJzZUNvbXBhcmF0b3JTdHJpbmcuXG4gICAgICAgICAgICAvLyBFLmcuIGBwYXJzZVN0YXJgIHVzZWQgaW4gYHBhcnNlQ29tcGFyYXRvclN0cmluZ2AgcmV0dXJucyAnJy5cbiAgICAgICAgICAgIGlmICghcGFyc2VkU3ViUmFuZ2UudHJpbSgpKSB7XG4gICAgICAgICAgICAgICAgLy8gSWYgcGFyc2luZyByZXN1bHRzIGluIGVtcHR5IHN0cmluZywgdHJlYXQgYXMgd2lsZGNhcmQgbWF0Y2hcbiAgICAgICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhcnNlZENvbXBhcmF0b3JTdHJpbmcgPSBwYXJzZWRTdWJSYW5nZS5zcGxpdCgnICcpLm1hcCgocmFuZ2VWZXJzaW9uKT0+cGFyc2VDb21wYXJhdG9yU3RyaW5nKHJhbmdlVmVyc2lvbikpIC8vIEV4cGFuZHMgXiwgflxuICAgICAgICAgICAgLmpvaW4oJyAnKTtcbiAgICAgICAgICAgIC8vIENoZWNrIGFnYWluIGlmIHRoZSBjb21wYXJhdG9yIHN0cmluZyBiZWNhbWUgZW1wdHkgYWZ0ZXIgc3BlY2lmaWMgcGFyc2luZyBsaWtlIF4gb3IgflxuICAgICAgICAgICAgaWYgKCFwYXJzZWRDb21wYXJhdG9yU3RyaW5nLnRyaW0oKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU3BsaXQgdGhlIHN1Yi1yYW5nZSBieSBzcGFjZSBmb3IgaW1wbGljaXQgQU5EIGNvbmRpdGlvbnNcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhcmF0b3JzID0gcGFyc2VkQ29tcGFyYXRvclN0cmluZy5zcGxpdCgvXFxzKy8pLm1hcCgoY29tcGFyYXRvcik9PnBhcnNlR1RFMChjb21wYXJhdG9yKSkvLyBGaWx0ZXIgb3V0IGVtcHR5IHN0cmluZ3MgdGhhdCBtaWdodCByZXN1bHQgZnJvbSBtdWx0aXBsZSBzcGFjZXNcbiAgICAgICAgICAgIC5maWx0ZXIoQm9vbGVhbik7XG4gICAgICAgICAgICAvLyBJZiBhIHN1Yi1yYW5nZSBiZWNvbWVzIGVtcHR5IGFmdGVyIHBhcnNpbmcgKGUuZy4sIGludmFsaWQgY2hhcmFjdGVycyksXG4gICAgICAgICAgICAvLyBpdCBjYW5ub3QgYmUgc2F0aXNmaWVkLiBUaGlzIGNoZWNrIG1pZ2h0IGJlIHJlZHVuZGFudCBub3cgYnV0IGtlcHQgZm9yIHNhZmV0eS5cbiAgICAgICAgICAgIGlmIChjb21wYXJhdG9ycy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBzdWJSYW5nZVNhdGlzZmllZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGNvbnN0IGNvbXBhcmF0b3Igb2YgY29tcGFyYXRvcnMpe1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4dHJhY3RlZENvbXBhcmF0b3IgPSBleHRyYWN0Q29tcGFyYXRvcihjb21wYXJhdG9yKTtcbiAgICAgICAgICAgICAgICAvLyBJZiBhbnkgcGFydCBvZiB0aGUgQU5EIHN1Yi1yYW5nZSBpcyBpbnZhbGlkLCB0aGUgc3ViLXJhbmdlIGlzIG5vdCBzYXRpc2ZpZWRcbiAgICAgICAgICAgICAgICBpZiAoIWV4dHJhY3RlZENvbXBhcmF0b3IpIHtcbiAgICAgICAgICAgICAgICAgICAgc3ViUmFuZ2VTYXRpc2ZpZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IFssIHJhbmdlT3BlcmF0b3IsICwgcmFuZ2VNYWpvciwgcmFuZ2VNaW5vciwgcmFuZ2VQYXRjaCwgcmFuZ2VQcmVSZWxlYXNlXSA9IGV4dHJhY3RlZENvbXBhcmF0b3I7XG4gICAgICAgICAgICAgICAgY29uc3QgcmFuZ2VBdG9tID0ge1xuICAgICAgICAgICAgICAgICAgICBvcGVyYXRvcjogcmFuZ2VPcGVyYXRvcixcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogY29tYmluZVZlcnNpb24ocmFuZ2VNYWpvciwgcmFuZ2VNaW5vciwgcmFuZ2VQYXRjaCwgcmFuZ2VQcmVSZWxlYXNlKSxcbiAgICAgICAgICAgICAgICAgICAgbWFqb3I6IHJhbmdlTWFqb3IsXG4gICAgICAgICAgICAgICAgICAgIG1pbm9yOiByYW5nZU1pbm9yLFxuICAgICAgICAgICAgICAgICAgICBwYXRjaDogcmFuZ2VQYXRjaCxcbiAgICAgICAgICAgICAgICAgICAgcHJlUmVsZWFzZTogcmFuZ2VQcmVSZWxlYXNlID09IG51bGwgPyB2b2lkIDAgOiByYW5nZVByZVJlbGVhc2Uuc3BsaXQoJy4nKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgLy8gQ2hlY2sgaWYgdGhlIHZlcnNpb24gc2F0aXNmaWVzIHRoaXMgc3BlY2lmaWMgY29tcGFyYXRvciBpbiB0aGUgQU5EIGNoYWluXG4gICAgICAgICAgICAgICAgaWYgKCFjb21wYXJlKHJhbmdlQXRvbSwgdmVyc2lvbkF0b20pKSB7XG4gICAgICAgICAgICAgICAgICAgIHN1YlJhbmdlU2F0aXNmaWVkID0gZmFsc2U7IC8vIFRoaXMgcGFydCBvZiB0aGUgQU5EIGNvbmRpdGlvbiBmYWlsZWRcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7IC8vIE5vIG5lZWQgdG8gY2hlY2sgZnVydGhlciBjb21wYXJhdG9ycyBpbiB0aGlzIHN1Yi1yYW5nZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIElmIGFsbCBBTkQgY29uZGl0aW9ucyB3aXRoaW4gdGhpcyBPUiBzdWItcmFuZ2Ugd2VyZSBtZXQsIHRoZSBvdmVyYWxsIHJhbmdlIGlzIHNhdGlzZmllZFxuICAgICAgICAgICAgaWYgKHN1YlJhbmdlU2F0aXNmaWVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIC8vIExvZyBlcnJvciBhbmQgdHJlYXQgdGhpcyBzdWItcmFuZ2UgYXMgdW5zYXRpc2ZpZWRcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYFtzZW12ZXJdIEVycm9yIHByb2Nlc3NpbmcgcmFuZ2UgcGFydCBcIiR7dHJpbW1lZE9yUmFuZ2V9XCI6YCwgZSk7XG4gICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBJZiBub25lIG9mIHRoZSBPUiBzdWItcmFuZ2VzIHdlcmUgc2F0aXNmaWVkXG4gICAgcmV0dXJuIGZhbHNlO1xufVxuXG5mdW5jdGlvbiBmb3JtYXRTaGFyZShzaGFyZUFyZ3MsIGZyb20sIG5hbWUsIHNoYXJlU3RyYXRlZ3kpIHtcbiAgICBsZXQgZ2V0O1xuICAgIGlmICgnZ2V0JyBpbiBzaGFyZUFyZ3MpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1kZXN0cnVjdHVyaW5nXG4gICAgICAgIGdldCA9IHNoYXJlQXJncy5nZXQ7XG4gICAgfSBlbHNlIGlmICgnbGliJyBpbiBzaGFyZUFyZ3MpIHtcbiAgICAgICAgZ2V0ID0gKCk9PlByb21pc2UucmVzb2x2ZShzaGFyZUFyZ3MubGliKTtcbiAgICB9IGVsc2Uge1xuICAgICAgICBnZXQgPSAoKT0+UHJvbWlzZS5yZXNvbHZlKCgpPT57XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBDYW4gbm90IGdldCBzaGFyZWQgJyR7bmFtZX0nIWApO1xuICAgICAgICAgICAgfSk7XG4gICAgfVxuICAgIHZhciBfc2hhcmVBcmdzX3ZlcnNpb24sIF9zaGFyZUFyZ3Nfc2NvcGUsIF9zaGFyZUFyZ3Nfc3RyYXRlZ3k7XG4gICAgcmV0dXJuIF9leHRlbmRzKHtcbiAgICAgICAgZGVwczogW10sXG4gICAgICAgIHVzZUluOiBbXSxcbiAgICAgICAgZnJvbSxcbiAgICAgICAgbG9hZGluZzogbnVsbFxuICAgIH0sIHNoYXJlQXJncywge1xuICAgICAgICBzaGFyZUNvbmZpZzogX2V4dGVuZHMoe1xuICAgICAgICAgICAgcmVxdWlyZWRWZXJzaW9uOiBgXiR7c2hhcmVBcmdzLnZlcnNpb259YCxcbiAgICAgICAgICAgIHNpbmdsZXRvbjogZmFsc2UsXG4gICAgICAgICAgICBlYWdlcjogZmFsc2UsXG4gICAgICAgICAgICBzdHJpY3RWZXJzaW9uOiBmYWxzZVxuICAgICAgICB9LCBzaGFyZUFyZ3Muc2hhcmVDb25maWcpLFxuICAgICAgICBnZXQsXG4gICAgICAgIGxvYWRlZDogKHNoYXJlQXJncyA9PSBudWxsID8gdm9pZCAwIDogc2hhcmVBcmdzLmxvYWRlZCkgfHwgJ2xpYicgaW4gc2hhcmVBcmdzID8gdHJ1ZSA6IHVuZGVmaW5lZCxcbiAgICAgICAgdmVyc2lvbjogKF9zaGFyZUFyZ3NfdmVyc2lvbiA9IHNoYXJlQXJncy52ZXJzaW9uKSAhPSBudWxsID8gX3NoYXJlQXJnc192ZXJzaW9uIDogJzAnLFxuICAgICAgICBzY29wZTogQXJyYXkuaXNBcnJheShzaGFyZUFyZ3Muc2NvcGUpID8gc2hhcmVBcmdzLnNjb3BlIDogW1xuICAgICAgICAgICAgKF9zaGFyZUFyZ3Nfc2NvcGUgPSBzaGFyZUFyZ3Muc2NvcGUpICE9IG51bGwgPyBfc2hhcmVBcmdzX3Njb3BlIDogJ2RlZmF1bHQnXG4gICAgICAgIF0sXG4gICAgICAgIHN0cmF0ZWd5OiAoKF9zaGFyZUFyZ3Nfc3RyYXRlZ3kgPSBzaGFyZUFyZ3Muc3RyYXRlZ3kpICE9IG51bGwgPyBfc2hhcmVBcmdzX3N0cmF0ZWd5IDogc2hhcmVTdHJhdGVneSkgfHwgJ3ZlcnNpb24tZmlyc3QnXG4gICAgfSk7XG59XG5mdW5jdGlvbiBmb3JtYXRTaGFyZUNvbmZpZ3MoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpIHtcbiAgICBjb25zdCBzaGFyZUFyZ3MgPSB1c2VyT3B0aW9ucy5zaGFyZWQgfHwge307XG4gICAgY29uc3QgZnJvbSA9IHVzZXJPcHRpb25zLm5hbWU7XG4gICAgY29uc3Qgc2hhcmVJbmZvcyA9IE9iamVjdC5rZXlzKHNoYXJlQXJncykucmVkdWNlKChyZXMsIHBrZ05hbWUpPT57XG4gICAgICAgIGNvbnN0IGFycmF5U2hhcmVBcmdzID0gYXJyYXlPcHRpb25zKHNoYXJlQXJnc1twa2dOYW1lXSk7XG4gICAgICAgIHJlc1twa2dOYW1lXSA9IHJlc1twa2dOYW1lXSB8fCBbXTtcbiAgICAgICAgYXJyYXlTaGFyZUFyZ3MuZm9yRWFjaCgoc2hhcmVDb25maWcpPT57XG4gICAgICAgICAgICByZXNbcGtnTmFtZV0ucHVzaChmb3JtYXRTaGFyZShzaGFyZUNvbmZpZywgZnJvbSwgcGtnTmFtZSwgdXNlck9wdGlvbnMuc2hhcmVTdHJhdGVneSkpO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJlcztcbiAgICB9LCB7fSk7XG4gICAgY29uc3Qgc2hhcmVkID0gX2V4dGVuZHMoe30sIGdsb2JhbE9wdGlvbnMuc2hhcmVkKTtcbiAgICBPYmplY3Qua2V5cyhzaGFyZUluZm9zKS5mb3JFYWNoKChzaGFyZUtleSk9PntcbiAgICAgICAgaWYgKCFzaGFyZWRbc2hhcmVLZXldKSB7XG4gICAgICAgICAgICBzaGFyZWRbc2hhcmVLZXldID0gc2hhcmVJbmZvc1tzaGFyZUtleV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzaGFyZUluZm9zW3NoYXJlS2V5XS5mb3JFYWNoKChuZXdVc2VyU2hhcmVkT3B0aW9ucyk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBpc1NhbWVWZXJzaW9uID0gc2hhcmVkW3NoYXJlS2V5XS5maW5kKChzaGFyZWRWYWwpPT5zaGFyZWRWYWwudmVyc2lvbiA9PT0gbmV3VXNlclNoYXJlZE9wdGlvbnMudmVyc2lvbik7XG4gICAgICAgICAgICAgICAgaWYgKCFpc1NhbWVWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgIHNoYXJlZFtzaGFyZUtleV0ucHVzaChuZXdVc2VyU2hhcmVkT3B0aW9ucyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgICBzaGFyZWQsXG4gICAgICAgIHNoYXJlSW5mb3NcbiAgICB9O1xufVxuZnVuY3Rpb24gdmVyc2lvbkx0KGEsIGIpIHtcbiAgICBjb25zdCB0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbiA9ICh2ZXJzaW9uKT0+e1xuICAgICAgICBjb25zdCBpc051bWJlclZlcnNpb24gPSAhTnVtYmVyLmlzTmFOKE51bWJlcih2ZXJzaW9uKSk7XG4gICAgICAgIGlmIChpc051bWJlclZlcnNpb24pIHtcbiAgICAgICAgICAgIGNvbnN0IHNwbGl0QXJyID0gdmVyc2lvbi5zcGxpdCgnLicpO1xuICAgICAgICAgICAgbGV0IHZhbGlkVmVyc2lvbiA9IHZlcnNpb247XG4gICAgICAgICAgICBmb3IobGV0IGkgPSAwOyBpIDwgMyAtIHNwbGl0QXJyLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICB2YWxpZFZlcnNpb24gKz0gJy4wJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWxpZFZlcnNpb247XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHZlcnNpb247XG4gICAgfTtcbiAgICBpZiAoc2F0aXNmeSh0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbihhKSwgYDw9JHt0cmFuc2Zvcm1JbnZhbGlkVmVyc2lvbihiKX1gKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxufVxuY29uc3QgZmluZFZlcnNpb24gPSAoc2hhcmVWZXJzaW9uTWFwLCBjYik9PntcbiAgICBjb25zdCBjYWxsYmFjayA9IGNiIHx8IGZ1bmN0aW9uKHByZXYsIGN1cikge1xuICAgICAgICByZXR1cm4gdmVyc2lvbkx0KHByZXYsIGN1cik7XG4gICAgfTtcbiAgICByZXR1cm4gT2JqZWN0LmtleXMoc2hhcmVWZXJzaW9uTWFwKS5yZWR1Y2UoKHByZXYsIGN1cik9PntcbiAgICAgICAgaWYgKCFwcmV2KSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIGlmIChjYWxsYmFjayhwcmV2LCBjdXIpKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIC8vIGRlZmF1bHQgdmVyc2lvbiBpcyAnMCcgaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay9ibG9iL21haW4vbGliL3NoYXJpbmcvUHJvdmlkZVNoYXJlZE1vZHVsZS5qcyNMMTM2XG4gICAgICAgIGlmIChwcmV2ID09PSAnMCcpIHtcbiAgICAgICAgICAgIHJldHVybiBjdXI7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByZXY7XG4gICAgfSwgMCk7XG59O1xuY29uc3QgaXNMb2FkZWQgPSAoc2hhcmVkKT0+e1xuICAgIHJldHVybiBCb29sZWFuKHNoYXJlZC5sb2FkZWQpIHx8IHR5cGVvZiBzaGFyZWQubGliID09PSAnZnVuY3Rpb24nO1xufTtcbmNvbnN0IGlzTG9hZGluZyA9IChzaGFyZWQpPT57XG4gICAgcmV0dXJuIEJvb2xlYW4oc2hhcmVkLmxvYWRpbmcpO1xufTtcbmZ1bmN0aW9uIGZpbmRTaW5nbGV0b25WZXJzaW9uT3JkZXJCeVZlcnNpb24oc2hhcmVTY29wZU1hcCwgc2NvcGUsIHBrZ05hbWUpIHtcbiAgICBjb25zdCB2ZXJzaW9ucyA9IHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICAgIHJldHVybiAhaXNMb2FkZWQodmVyc2lvbnNbcHJldl0pICYmIHZlcnNpb25MdChwcmV2LCBjdXIpO1xuICAgIH07XG4gICAgcmV0dXJuIGZpbmRWZXJzaW9uKHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdLCBjYWxsYmFjayk7XG59XG5mdW5jdGlvbiBmaW5kU2luZ2xldG9uVmVyc2lvbk9yZGVyQnlMb2FkZWQoc2hhcmVTY29wZU1hcCwgc2NvcGUsIHBrZ05hbWUpIHtcbiAgICBjb25zdCB2ZXJzaW9ucyA9IHNoYXJlU2NvcGVNYXBbc2NvcGVdW3BrZ05hbWVdO1xuICAgIGNvbnN0IGNhbGxiYWNrID0gZnVuY3Rpb24ocHJldiwgY3VyKSB7XG4gICAgICAgIGNvbnN0IGlzTG9hZGluZ09yTG9hZGVkID0gKHNoYXJlZCk9PntcbiAgICAgICAgICAgIHJldHVybiBpc0xvYWRlZChzaGFyZWQpIHx8IGlzTG9hZGluZyhzaGFyZWQpO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoaXNMb2FkaW5nT3JMb2FkZWQodmVyc2lvbnNbY3VyXSkpIHtcbiAgICAgICAgICAgIGlmIChpc0xvYWRpbmdPckxvYWRlZCh2ZXJzaW9uc1twcmV2XSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQm9vbGVhbih2ZXJzaW9uTHQocHJldiwgY3VyKSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChpc0xvYWRpbmdPckxvYWRlZCh2ZXJzaW9uc1twcmV2XSkpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdmVyc2lvbkx0KHByZXYsIGN1cik7XG4gICAgfTtcbiAgICByZXR1cm4gZmluZFZlcnNpb24oc2hhcmVTY29wZU1hcFtzY29wZV1bcGtnTmFtZV0sIGNhbGxiYWNrKTtcbn1cbmZ1bmN0aW9uIGdldEZpbmRTaGFyZUZ1bmN0aW9uKHN0cmF0ZWd5KSB7XG4gICAgaWYgKHN0cmF0ZWd5ID09PSAnbG9hZGVkLWZpcnN0Jykge1xuICAgICAgICByZXR1cm4gZmluZFNpbmdsZXRvblZlcnNpb25PcmRlckJ5TG9hZGVkO1xuICAgIH1cbiAgICByZXR1cm4gZmluZFNpbmdsZXRvblZlcnNpb25PcmRlckJ5VmVyc2lvbjtcbn1cbmZ1bmN0aW9uIGdldFJlZ2lzdGVyZWRTaGFyZShsb2NhbFNoYXJlU2NvcGVNYXAsIHBrZ05hbWUsIHNoYXJlSW5mbywgcmVzb2x2ZVNoYXJlKSB7XG4gICAgaWYgKCFsb2NhbFNoYXJlU2NvcGVNYXApIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCB7IHNoYXJlQ29uZmlnLCBzY29wZSA9IERFRkFVTFRfU0NPUEUsIHN0cmF0ZWd5IH0gPSBzaGFyZUluZm87XG4gICAgY29uc3Qgc2NvcGVzID0gQXJyYXkuaXNBcnJheShzY29wZSkgPyBzY29wZSA6IFtcbiAgICAgICAgc2NvcGVcbiAgICBdO1xuICAgIGZvciAoY29uc3Qgc2Mgb2Ygc2NvcGVzKXtcbiAgICAgICAgaWYgKHNoYXJlQ29uZmlnICYmIGxvY2FsU2hhcmVTY29wZU1hcFtzY10gJiYgbG9jYWxTaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXSkge1xuICAgICAgICAgICAgY29uc3QgeyByZXF1aXJlZFZlcnNpb24gfSA9IHNoYXJlQ29uZmlnO1xuICAgICAgICAgICAgY29uc3QgZmluZFNoYXJlRnVuY3Rpb24gPSBnZXRGaW5kU2hhcmVGdW5jdGlvbihzdHJhdGVneSk7XG4gICAgICAgICAgICBjb25zdCBtYXhPclNpbmdsZXRvblZlcnNpb24gPSBmaW5kU2hhcmVGdW5jdGlvbihsb2NhbFNoYXJlU2NvcGVNYXAsIHNjLCBwa2dOYW1lKTtcbiAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZGVmYXVsdFJlc29sdmVyID0gKCk9PntcbiAgICAgICAgICAgICAgICBpZiAoc2hhcmVDb25maWcuc2luZ2xldG9uKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVxdWlyZWRWZXJzaW9uID09PSAnc3RyaW5nJyAmJiAhc2F0aXNmeShtYXhPclNpbmdsZXRvblZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG1zZyA9IGBWZXJzaW9uICR7bWF4T3JTaW5nbGV0b25WZXJzaW9ufSBmcm9tICR7bWF4T3JTaW5nbGV0b25WZXJzaW9uICYmIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXS5mcm9tfSBvZiBzaGFyZWQgc2luZ2xldG9uIG1vZHVsZSAke3BrZ05hbWV9IGRvZXMgbm90IHNhdGlzZnkgdGhlIHJlcXVpcmVtZW50IG9mICR7c2hhcmVJbmZvLmZyb219IHdoaWNoIG5lZWRzICR7cmVxdWlyZWRWZXJzaW9ufSlgO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlQ29uZmlnLnN0cmljdFZlcnNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlcnJvcihtc2cpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3YXJuKG1zZyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAocmVxdWlyZWRWZXJzaW9uID09PSBmYWxzZSB8fCByZXF1aXJlZFZlcnNpb24gPT09ICcqJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvY2FsU2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bbWF4T3JTaW5nbGV0b25WZXJzaW9uXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoc2F0aXNmeShtYXhPclNpbmdsZXRvblZlcnNpb24sIHJlcXVpcmVkVmVyc2lvbikpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW21heE9yU2luZ2xldG9uVmVyc2lvbl07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZm9yIChjb25zdCBbdmVyc2lvbktleSwgdmVyc2lvblZhbHVlXSBvZiBPYmplY3QuZW50cmllcyhsb2NhbFNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdKSl7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2F0aXNmeSh2ZXJzaW9uS2V5LCByZXF1aXJlZFZlcnNpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHZlcnNpb25WYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBwYXJhbXMgPSB7XG4gICAgICAgICAgICAgICAgc2hhcmVTY29wZU1hcDogbG9jYWxTaGFyZVNjb3BlTWFwLFxuICAgICAgICAgICAgICAgIHNjb3BlOiBzYyxcbiAgICAgICAgICAgICAgICBwa2dOYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IG1heE9yU2luZ2xldG9uVmVyc2lvbixcbiAgICAgICAgICAgICAgICBHbG9iYWxGZWRlcmF0aW9uOiBHbG9iYWwuX19GRURFUkFUSU9OX18sXG4gICAgICAgICAgICAgICAgcmVzb2x2ZXI6IGRlZmF1bHRSZXNvbHZlclxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHJlc29sdmVTaGFyZWQgPSByZXNvbHZlU2hhcmUuZW1pdChwYXJhbXMpIHx8IHBhcmFtcztcbiAgICAgICAgICAgIHJldHVybiByZXNvbHZlU2hhcmVkLnJlc29sdmVyKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxTaGFyZVNjb3BlKCkge1xuICAgIHJldHVybiBHbG9iYWwuX19GRURFUkFUSU9OX18uX19TSEFSRV9fO1xufVxuZnVuY3Rpb24gZ2V0VGFyZ2V0U2hhcmVkT3B0aW9ucyhvcHRpb25zKSB7XG4gICAgY29uc3QgeyBwa2dOYW1lLCBleHRyYU9wdGlvbnMsIHNoYXJlSW5mb3MgfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgZGVmYXVsdFJlc29sdmVyID0gKHNoYXJlZE9wdGlvbnMpPT57XG4gICAgICAgIGlmICghc2hhcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFyZVZlcnNpb25NYXAgPSB7fTtcbiAgICAgICAgc2hhcmVkT3B0aW9ucy5mb3JFYWNoKChzaGFyZWQpPT57XG4gICAgICAgICAgICBzaGFyZVZlcnNpb25NYXBbc2hhcmVkLnZlcnNpb25dID0gc2hhcmVkO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2FsbGJhY2sgPSBmdW5jdGlvbihwcmV2LCBjdXIpIHtcbiAgICAgICAgICAgIHJldHVybiAhaXNMb2FkZWQoc2hhcmVWZXJzaW9uTWFwW3ByZXZdKSAmJiB2ZXJzaW9uTHQocHJldiwgY3VyKTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbWF4VmVyc2lvbiA9IGZpbmRWZXJzaW9uKHNoYXJlVmVyc2lvbk1hcCwgY2FsbGJhY2spO1xuICAgICAgICByZXR1cm4gc2hhcmVWZXJzaW9uTWFwW21heFZlcnNpb25dO1xuICAgIH07XG4gICAgdmFyIF9leHRyYU9wdGlvbnNfcmVzb2x2ZXI7XG4gICAgY29uc3QgcmVzb2x2ZXIgPSAoX2V4dHJhT3B0aW9uc19yZXNvbHZlciA9IGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLnJlc29sdmVyKSAhPSBudWxsID8gX2V4dHJhT3B0aW9uc19yZXNvbHZlciA6IGRlZmF1bHRSZXNvbHZlcjtcbiAgICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSwgcmVzb2x2ZXIoc2hhcmVJbmZvc1twa2dOYW1lXSksIGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLmN1c3RvbVNoYXJlSW5mbyk7XG59XG5cbmZ1bmN0aW9uIGdldEJ1aWxkZXJJZCgpIHtcbiAgICAvL0B0cy1pZ25vcmVcbiAgICByZXR1cm4gdHlwZW9mIEZFREVSQVRJT05fQlVJTERfSURFTlRJRklFUiAhPT0gJ3VuZGVmaW5lZCcgPyBGRURFUkFUSU9OX0JVSUxEX0lERU5USUZJRVIgOiAnJztcbn1cblxuLy8gRnVuY3Rpb24gdG8gbWF0Y2ggYSByZW1vdGUgd2l0aCBpdHMgbmFtZSBhbmQgZXhwb3NlXG4vLyBpZDogcGtnTmFtZShAZmVkZXJhdGlvbi9hcHAxKSArIGV4cG9zZShidXR0b24pID0gQGZlZGVyYXRpb24vYXBwMS9idXR0b25cbi8vIGlkOiBhbGlhcyhhcHAxKSArIGV4cG9zZShidXR0b24pID0gYXBwMS9idXR0b25cbi8vIGlkOiBhbGlhcyhhcHAxL3V0aWxzKSArIGV4cG9zZShsb2FkYXNoL3NvcnQpID0gYXBwMS91dGlscy9sb2FkYXNoL3NvcnRcbmZ1bmN0aW9uIG1hdGNoUmVtb3RlV2l0aE5hbWVBbmRFeHBvc2UocmVtb3RlcywgaWQpIHtcbiAgICBmb3IgKGNvbnN0IHJlbW90ZSBvZiByZW1vdGVzKXtcbiAgICAgICAgLy8gbWF0Y2ggcGtnTmFtZVxuICAgICAgICBjb25zdCBpc05hbWVNYXRjaGVkID0gaWQuc3RhcnRzV2l0aChyZW1vdGUubmFtZSk7XG4gICAgICAgIGxldCBleHBvc2UgPSBpZC5yZXBsYWNlKHJlbW90ZS5uYW1lLCAnJyk7XG4gICAgICAgIGlmIChpc05hbWVNYXRjaGVkKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3NlLnN0YXJ0c1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHBrZ05hbWVPckFsaWFzID0gcmVtb3RlLm5hbWU7XG4gICAgICAgICAgICAgICAgZXhwb3NlID0gYC4ke2V4cG9zZX1gO1xuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgICAgICBleHBvc2UsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9IGVsc2UgaWYgKGV4cG9zZSA9PT0gJycpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBwa2dOYW1lT3JBbGlhczogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9zZTogJy4nLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIG1hdGNoIGFsaWFzXG4gICAgICAgIGNvbnN0IGlzQWxpYXNNYXRjaGVkID0gcmVtb3RlLmFsaWFzICYmIGlkLnN0YXJ0c1dpdGgocmVtb3RlLmFsaWFzKTtcbiAgICAgICAgbGV0IGV4cG9zZVdpdGhBbGlhcyA9IHJlbW90ZS5hbGlhcyAmJiBpZC5yZXBsYWNlKHJlbW90ZS5hbGlhcywgJycpO1xuICAgICAgICBpZiAocmVtb3RlLmFsaWFzICYmIGlzQWxpYXNNYXRjaGVkKSB7XG4gICAgICAgICAgICBpZiAoZXhwb3NlV2l0aEFsaWFzICYmIGV4cG9zZVdpdGhBbGlhcy5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBwa2dOYW1lT3JBbGlhcyA9IHJlbW90ZS5hbGlhcztcbiAgICAgICAgICAgICAgICBleHBvc2VXaXRoQWxpYXMgPSBgLiR7ZXhwb3NlV2l0aEFsaWFzfWA7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnTmFtZU9yQWxpYXMsXG4gICAgICAgICAgICAgICAgICAgIGV4cG9zZTogZXhwb3NlV2l0aEFsaWFzLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSBlbHNlIGlmIChleHBvc2VXaXRoQWxpYXMgPT09ICcnKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgcGtnTmFtZU9yQWxpYXM6IHJlbW90ZS5hbGlhcyxcbiAgICAgICAgICAgICAgICAgICAgZXhwb3NlOiAnLicsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuO1xufVxuLy8gRnVuY3Rpb24gdG8gbWF0Y2ggYSByZW1vdGUgd2l0aCBpdHMgbmFtZSBvciBhbGlhc1xuZnVuY3Rpb24gbWF0Y2hSZW1vdGUocmVtb3RlcywgbmFtZU9yQWxpYXMpIHtcbiAgICBmb3IgKGNvbnN0IHJlbW90ZSBvZiByZW1vdGVzKXtcbiAgICAgICAgY29uc3QgaXNOYW1lTWF0Y2hlZCA9IG5hbWVPckFsaWFzID09PSByZW1vdGUubmFtZTtcbiAgICAgICAgaWYgKGlzTmFtZU1hdGNoZWQpIHtcbiAgICAgICAgICAgIHJldHVybiByZW1vdGU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXNBbGlhc01hdGNoZWQgPSByZW1vdGUuYWxpYXMgJiYgbmFtZU9yQWxpYXMgPT09IHJlbW90ZS5hbGlhcztcbiAgICAgICAgaWYgKGlzQWxpYXNNYXRjaGVkKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVtb3RlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybjtcbn1cblxuZnVuY3Rpb24gcmVnaXN0ZXJQbHVnaW5zKHBsdWdpbnMsIGluc3RhbmNlKSB7XG4gICAgY29uc3QgZ2xvYmFsUGx1Z2lucyA9IGdldEdsb2JhbEhvc3RQbHVnaW5zKCk7XG4gICAgY29uc3QgaG9va0luc3RhbmNlcyA9IFtcbiAgICAgICAgaW5zdGFuY2UuaG9va3MsXG4gICAgICAgIGluc3RhbmNlLnJlbW90ZUhhbmRsZXIuaG9va3MsXG4gICAgICAgIGluc3RhbmNlLnNoYXJlZEhhbmRsZXIuaG9va3MsXG4gICAgICAgIGluc3RhbmNlLnNuYXBzaG90SGFuZGxlci5ob29rcyxcbiAgICAgICAgaW5zdGFuY2UubG9hZGVySG9vayxcbiAgICAgICAgaW5zdGFuY2UuYnJpZGdlSG9va1xuICAgIF07XG4gICAgLy8gSW5jb3Jwb3JhdGUgZ2xvYmFsIHBsdWdpbnNcbiAgICBpZiAoZ2xvYmFsUGx1Z2lucy5sZW5ndGggPiAwKSB7XG4gICAgICAgIGdsb2JhbFBsdWdpbnMuZm9yRWFjaCgocGx1Z2luKT0+e1xuICAgICAgICAgICAgaWYgKHBsdWdpbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHBsdWdpbnMuZmluZCgoaXRlbSk9Pml0ZW0ubmFtZSAhPT0gcGx1Z2luLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAocGx1Z2lucyAmJiBwbHVnaW5zLmxlbmd0aCA+IDApIHtcbiAgICAgICAgcGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pPT57XG4gICAgICAgICAgICBob29rSW5zdGFuY2VzLmZvckVhY2goKGhvb2tJbnN0YW5jZSk9PntcbiAgICAgICAgICAgICAgICBob29rSW5zdGFuY2UuYXBwbHlQbHVnaW4ocGx1Z2luLCBpbnN0YW5jZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBwbHVnaW5zO1xufVxuXG5jb25zdCBpbXBvcnRDYWxsYmFjayA9ICcudGhlbihjYWxsYmFja3NbMF0pLmNhdGNoKGNhbGxiYWNrc1sxXSknO1xuYXN5bmMgZnVuY3Rpb24gbG9hZEVzbUVudHJ5KHsgZW50cnksIHJlbW90ZUVudHJ5RXhwb3J0cyB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXJlbW90ZUVudHJ5RXhwb3J0cykge1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgRkVERVJBVElPTl9BTExPV19ORVdfRlVOQ1RJT04gIT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBGdW5jdGlvbignY2FsbGJhY2tzJywgYGltcG9ydChcIiR7ZW50cnl9XCIpJHtpbXBvcnRDYWxsYmFja31gKShbXG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGltcG9ydCgvKiB3ZWJwYWNrSWdub3JlOiB0cnVlICovIC8qIEB2aXRlLWlnbm9yZSAqLyBlbnRyeSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShyZW1vdGVFbnRyeUV4cG9ydHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICByZWplY3QoZSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRTeXN0ZW1Kc0VudHJ5KHsgZW50cnksIHJlbW90ZUVudHJ5RXhwb3J0cyB9KSB7XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBpZiAoIXJlbW90ZUVudHJ5RXhwb3J0cykge1xuICAgICAgICAgICAgICAgIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgX19zeXN0ZW1fY29udGV4dF9fID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICAvL0B0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAgICAgU3lzdGVtLmltcG9ydChlbnRyeSkudGhlbihyZXNvbHZlKS5jYXRjaChyZWplY3QpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG5ldyBGdW5jdGlvbignY2FsbGJhY2tzJywgYFN5c3RlbS5pbXBvcnQoXCIke2VudHJ5fVwiKSR7aW1wb3J0Q2FsbGJhY2t9YCkoW1xuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJlc29sdmUocmVtb3RlRW50cnlFeHBvcnRzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgcmVqZWN0KGUpO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5mdW5jdGlvbiBoYW5kbGVSZW1vdGVFbnRyeUxvYWRlZChuYW1lLCBnbG9iYWxOYW1lLCBlbnRyeSkge1xuICAgIGNvbnN0IHsgcmVtb3RlRW50cnlLZXksIGVudHJ5RXhwb3J0cyB9ID0gZ2V0UmVtb3RlRW50cnlFeHBvcnRzKG5hbWUsIGdsb2JhbE5hbWUpO1xuICAgIGFzc2VydChlbnRyeUV4cG9ydHMsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDEsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgIHJlbW90ZU5hbWU6IG5hbWUsXG4gICAgICAgIHJlbW90ZUVudHJ5VXJsOiBlbnRyeSxcbiAgICAgICAgcmVtb3RlRW50cnlLZXlcbiAgICB9KSk7XG4gICAgcmV0dXJuIGVudHJ5RXhwb3J0cztcbn1cbmFzeW5jIGZ1bmN0aW9uIGxvYWRFbnRyeVNjcmlwdCh7IG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5LCBsb2FkZXJIb29rLCBnZXRFbnRyeVVybCB9KSB7XG4gICAgY29uc3QgeyBlbnRyeUV4cG9ydHM6IHJlbW90ZUVudHJ5RXhwb3J0cyB9ID0gZ2V0UmVtb3RlRW50cnlFeHBvcnRzKG5hbWUsIGdsb2JhbE5hbWUpO1xuICAgIGlmIChyZW1vdGVFbnRyeUV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICB9XG4gICAgLy8gaWYgZ2V0RW50cnlVcmwgaXMgcGFzc2VkLCB1c2UgdGhlIGdldEVudHJ5VXJsIHRvIGdldCB0aGUgZW50cnkgdXJsXG4gICAgY29uc3QgdXJsID0gZ2V0RW50cnlVcmwgPyBnZXRFbnRyeVVybChlbnRyeSkgOiBlbnRyeTtcbiAgICByZXR1cm4gbG9hZFNjcmlwdCh1cmwsIHtcbiAgICAgICAgYXR0cnM6IHt9LFxuICAgICAgICBjcmVhdGVTY3JpcHRIb29rOiAodXJsLCBhdHRycyk9PntcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGxvYWRlckhvb2subGlmZWN5Y2xlLmNyZWF0ZVNjcmlwdC5lbWl0KHtcbiAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgICAgICAgIGlmIChyZXMgaW5zdGFuY2VvZiBIVE1MU2NyaXB0RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoJ3NjcmlwdCcgaW4gcmVzIHx8ICd0aW1lb3V0JyBpbiByZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfSkudGhlbigoKT0+e1xuICAgICAgICByZXR1cm4gaGFuZGxlUmVtb3RlRW50cnlMb2FkZWQobmFtZSwgZ2xvYmFsTmFtZSwgZW50cnkpO1xuICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICBhc3NlcnQodW5kZWZpbmVkLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA4LCBydW50aW1lRGVzY01hcCwge1xuICAgICAgICAgICAgcmVtb3RlTmFtZTogbmFtZSxcbiAgICAgICAgICAgIHJlc291cmNlVXJsOiBlbnRyeVxuICAgICAgICB9KSk7XG4gICAgICAgIHRocm93IGU7XG4gICAgfSk7XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkRW50cnlEb20oeyByZW1vdGVJbmZvLCByZW1vdGVFbnRyeUV4cG9ydHMsIGxvYWRlckhvb2ssIGdldEVudHJ5VXJsIH0pIHtcbiAgICBjb25zdCB7IGVudHJ5LCBlbnRyeUdsb2JhbE5hbWU6IGdsb2JhbE5hbWUsIG5hbWUsIHR5cGUgfSA9IHJlbW90ZUluZm87XG4gICAgc3dpdGNoKHR5cGUpe1xuICAgICAgICBjYXNlICdlc20nOlxuICAgICAgICBjYXNlICdtb2R1bGUnOlxuICAgICAgICAgICAgcmV0dXJuIGxvYWRFc21FbnRyeSh7XG4gICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgY2FzZSAnc3lzdGVtJzpcbiAgICAgICAgICAgIHJldHVybiBsb2FkU3lzdGVtSnNFbnRyeSh7XG4gICAgICAgICAgICAgICAgZW50cnksXG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgIHJldHVybiBsb2FkRW50cnlTY3JpcHQoe1xuICAgICAgICAgICAgICAgIGVudHJ5LFxuICAgICAgICAgICAgICAgIGdsb2JhbE5hbWUsXG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkZXJIb29rLFxuICAgICAgICAgICAgICAgIGdldEVudHJ5VXJsXG4gICAgICAgICAgICB9KTtcbiAgICB9XG59XG5hc3luYyBmdW5jdGlvbiBsb2FkRW50cnlOb2RlKHsgcmVtb3RlSW5mbywgbG9hZGVySG9vayB9KSB7XG4gICAgY29uc3QgeyBlbnRyeSwgZW50cnlHbG9iYWxOYW1lOiBnbG9iYWxOYW1lLCBuYW1lLCB0eXBlIH0gPSByZW1vdGVJbmZvO1xuICAgIGNvbnN0IHsgZW50cnlFeHBvcnRzOiByZW1vdGVFbnRyeUV4cG9ydHMgfSA9IGdldFJlbW90ZUVudHJ5RXhwb3J0cyhuYW1lLCBnbG9iYWxOYW1lKTtcbiAgICBpZiAocmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgIHJldHVybiByZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgfVxuICAgIHJldHVybiBsb2FkU2NyaXB0Tm9kZShlbnRyeSwge1xuICAgICAgICBhdHRyczoge1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGdsb2JhbE5hbWUsXG4gICAgICAgICAgICB0eXBlXG4gICAgICAgIH0sXG4gICAgICAgIGxvYWRlckhvb2s6IHtcbiAgICAgICAgICAgIGNyZWF0ZVNjcmlwdEhvb2s6ICh1cmwsIGF0dHJzID0ge30pPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlU2NyaXB0LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFyZXMpIHJldHVybjtcbiAgICAgICAgICAgICAgICBpZiAoJ3VybCcgaW4gcmVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pLnRoZW4oKCk9PntcbiAgICAgICAgcmV0dXJuIGhhbmRsZVJlbW90ZUVudHJ5TG9hZGVkKG5hbWUsIGdsb2JhbE5hbWUsIGVudHJ5KTtcbiAgICB9KS5jYXRjaCgoZSk9PntcbiAgICAgICAgdGhyb3cgZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGdldFJlbW90ZUVudHJ5VW5pcXVlS2V5KHJlbW90ZUluZm8pIHtcbiAgICBjb25zdCB7IGVudHJ5LCBuYW1lIH0gPSByZW1vdGVJbmZvO1xuICAgIHJldHVybiBjb21wb3NlS2V5V2l0aFNlcGFyYXRvcihuYW1lLCBlbnRyeSk7XG59XG5hc3luYyBmdW5jdGlvbiBnZXRSZW1vdGVFbnRyeShwYXJhbXMpIHtcbiAgICBjb25zdCB7IG9yaWdpbiwgcmVtb3RlRW50cnlFeHBvcnRzLCByZW1vdGVJbmZvLCBnZXRFbnRyeVVybCB9ID0gcGFyYW1zO1xuICAgIGNvbnN0IHVuaXF1ZUtleSA9IGdldFJlbW90ZUVudHJ5VW5pcXVlS2V5KHJlbW90ZUluZm8pO1xuICAgIGlmIChyZW1vdGVFbnRyeUV4cG9ydHMpIHtcbiAgICAgICAgcmV0dXJuIHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICB9XG4gICAgaWYgKCFnbG9iYWxMb2FkaW5nW3VuaXF1ZUtleV0pIHtcbiAgICAgICAgY29uc3QgbG9hZEVudHJ5SG9vayA9IG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5sb2FkRW50cnk7XG4gICAgICAgIGNvbnN0IGxvYWRlckhvb2sgPSBvcmlnaW4ubG9hZGVySG9vaztcbiAgICAgICAgZ2xvYmFsTG9hZGluZ1t1bmlxdWVLZXldID0gbG9hZEVudHJ5SG9vay5lbWl0KHtcbiAgICAgICAgICAgIGxvYWRlckhvb2ssXG4gICAgICAgICAgICByZW1vdGVJbmZvLFxuICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgIH0pLnRoZW4oKHJlcyk9PntcbiAgICAgICAgICAgIGlmIChyZXMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gVXNlIEVOVl9UQVJHRVQgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGZhbGxiYWNrIHRvIGlzQnJvd3NlckVudiwgbXVzdCBrZWVwIHRoaXNcbiAgICAgICAgICAgIGNvbnN0IGlzV2ViRW52aXJvbm1lbnQgPSB0eXBlb2YgRU5WX1RBUkdFVCAhPT0gJ3VuZGVmaW5lZCcgPyBFTlZfVEFSR0VUID09PSAnd2ViJyA6IGlzQnJvd3NlckVudigpO1xuICAgICAgICAgICAgcmV0dXJuIGlzV2ViRW52aXJvbm1lbnQgPyBsb2FkRW50cnlEb20oe1xuICAgICAgICAgICAgICAgIHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzLFxuICAgICAgICAgICAgICAgIGxvYWRlckhvb2ssXG4gICAgICAgICAgICAgICAgZ2V0RW50cnlVcmxcbiAgICAgICAgICAgIH0pIDogbG9hZEVudHJ5Tm9kZSh7XG4gICAgICAgICAgICAgICAgcmVtb3RlSW5mbyxcbiAgICAgICAgICAgICAgICBsb2FkZXJIb29rXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHJldHVybiBnbG9iYWxMb2FkaW5nW3VuaXF1ZUtleV07XG59XG5mdW5jdGlvbiBnZXRSZW1vdGVJbmZvKHJlbW90ZSkge1xuICAgIHJldHVybiBfZXh0ZW5kcyh7fSwgcmVtb3RlLCB7XG4gICAgICAgIGVudHJ5OiAnZW50cnknIGluIHJlbW90ZSA/IHJlbW90ZS5lbnRyeSA6ICcnLFxuICAgICAgICB0eXBlOiByZW1vdGUudHlwZSB8fCBERUZBVUxUX1JFTU9URV9UWVBFLFxuICAgICAgICBlbnRyeUdsb2JhbE5hbWU6IHJlbW90ZS5lbnRyeUdsb2JhbE5hbWUgfHwgcmVtb3RlLm5hbWUsXG4gICAgICAgIHNoYXJlU2NvcGU6IHJlbW90ZS5zaGFyZVNjb3BlIHx8IERFRkFVTFRfU0NPUEVcbiAgICB9KTtcbn1cblxuZnVuY3Rpb24gZGVmYXVsdFByZWxvYWRBcmdzKHByZWxvYWRDb25maWcpIHtcbiAgICByZXR1cm4gX2V4dGVuZHMoe1xuICAgICAgICByZXNvdXJjZUNhdGVnb3J5OiAnc3luYycsXG4gICAgICAgIHNoYXJlOiB0cnVlLFxuICAgICAgICBkZXBzUmVtb3RlOiB0cnVlLFxuICAgICAgICBwcmVmZXRjaEludGVyZmFjZTogZmFsc2VcbiAgICB9LCBwcmVsb2FkQ29uZmlnKTtcbn1cbmZ1bmN0aW9uIGZvcm1hdFByZWxvYWRBcmdzKHJlbW90ZXMsIHByZWxvYWRBcmdzKSB7XG4gICAgcmV0dXJuIHByZWxvYWRBcmdzLm1hcCgoYXJncyk9PntcbiAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IG1hdGNoUmVtb3RlKHJlbW90ZXMsIGFyZ3MubmFtZU9yQWxpYXMpO1xuICAgICAgICBhc3NlcnQocmVtb3RlSW5mbywgYFVuYWJsZSB0byBwcmVsb2FkICR7YXJncy5uYW1lT3JBbGlhc30gYXMgaXQgaXMgbm90IGluY2x1ZGVkIGluICR7IXJlbW90ZUluZm8gJiYgc2FmZVRvU3RyaW5nKHtcbiAgICAgICAgICAgIHJlbW90ZUluZm8sXG4gICAgICAgICAgICByZW1vdGVzXG4gICAgICAgIH0pfWApO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgcmVtb3RlOiByZW1vdGVJbmZvLFxuICAgICAgICAgICAgcHJlbG9hZENvbmZpZzogZGVmYXVsdFByZWxvYWRBcmdzKGFyZ3MpXG4gICAgICAgIH07XG4gICAgfSk7XG59XG5mdW5jdGlvbiBub3JtYWxpemVQcmVsb2FkRXhwb3NlcyhleHBvc2VzKSB7XG4gICAgaWYgKCFleHBvc2VzKSB7XG4gICAgICAgIHJldHVybiBbXTtcbiAgICB9XG4gICAgcmV0dXJuIGV4cG9zZXMubWFwKChleHBvc2UpPT57XG4gICAgICAgIGlmIChleHBvc2UgPT09ICcuJykge1xuICAgICAgICAgICAgcmV0dXJuIGV4cG9zZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZXhwb3NlLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgIHJldHVybiBleHBvc2UucmVwbGFjZSgnLi8nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGV4cG9zZTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIHByZWxvYWRBc3NldHMocmVtb3RlSW5mbywgaG9zdCwgYXNzZXRzLCAvLyBJdCBpcyB1c2VkIHRvIGRpc3Rpbmd1aXNoIHByZWxvYWQgZnJvbSBsb2FkIHJlbW90ZSBwYXJhbGxlbCBsb2FkaW5nXG51c2VMaW5rUHJlbG9hZCA9IHRydWUpIHtcbiAgICBjb25zdCB7IGNzc0Fzc2V0cywganNBc3NldHNXaXRob3V0RW50cnksIGVudHJ5QXNzZXRzIH0gPSBhc3NldHM7XG4gICAgaWYgKGhvc3Qub3B0aW9ucy5pbkJyb3dzZXIpIHtcbiAgICAgICAgZW50cnlBc3NldHMuZm9yRWFjaCgoYXNzZXQpPT57XG4gICAgICAgICAgICBjb25zdCB7IG1vZHVsZUluZm8gfSA9IGFzc2V0O1xuICAgICAgICAgICAgY29uc3QgbW9kdWxlID0gaG9zdC5tb2R1bGVDYWNoZS5nZXQocmVtb3RlSW5mby5uYW1lKTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUpIHtcbiAgICAgICAgICAgICAgICBnZXRSZW1vdGVFbnRyeSh7XG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogbW9kdWxlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiBtb2R1bGUucmVtb3RlRW50cnlFeHBvcnRzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGdldFJlbW90ZUVudHJ5KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHM6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKHVzZUxpbmtQcmVsb2FkKSB7XG4gICAgICAgICAgICBjb25zdCBkZWZhdWx0QXR0cnMgPSB7XG4gICAgICAgICAgICAgICAgcmVsOiAncHJlbG9hZCcsXG4gICAgICAgICAgICAgICAgYXM6ICdzdHlsZSdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjc3NBc3NldHMuZm9yRWFjaCgoY3NzVXJsKT0+e1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgbGluazogY3NzRWwsIG5lZWRBdHRhY2ggfSA9IGNyZWF0ZUxpbmsoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGNzc1VybCxcbiAgICAgICAgICAgICAgICAgICAgY2I6ICgpPT57XG4gICAgICAgICAgICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgYXR0cnM6IGRlZmF1bHRBdHRycyxcbiAgICAgICAgICAgICAgICAgICAgY3JlYXRlTGlua0hvb2s6ICh1cmwsIGF0dHJzKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVzID0gaG9zdC5sb2FkZXJIb29rLmxpZmVjeWNsZS5jcmVhdGVMaW5rLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgSFRNTExpbmtFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3NFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBdHRycyA9IHtcbiAgICAgICAgICAgICAgICByZWw6ICdzdHlsZXNoZWV0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiAndGV4dC9jc3MnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY3NzQXNzZXRzLmZvckVhY2goKGNzc1VybCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxpbms6IGNzc0VsLCBuZWVkQXR0YWNoIH0gPSBjcmVhdGVMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgdXJsOiBjc3NVcmwsXG4gICAgICAgICAgICAgICAgICAgIGNiOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiBkZWZhdWx0QXR0cnMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpbmtIb29rOiAodXJsLCBhdHRycyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlTGluay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVMaW5rOiBmYWxzZVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChjc3NFbCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodXNlTGlua1ByZWxvYWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGRlZmF1bHRBdHRycyA9IHtcbiAgICAgICAgICAgICAgICByZWw6ICdwcmVsb2FkJyxcbiAgICAgICAgICAgICAgICBhczogJ3NjcmlwdCdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBqc0Fzc2V0c1dpdGhvdXRFbnRyeS5mb3JFYWNoKChqc1VybCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB7IGxpbms6IGxpbmtFbCwgbmVlZEF0dGFjaCB9ID0gY3JlYXRlTGluayh7XG4gICAgICAgICAgICAgICAgICAgIHVybDoganNVcmwsXG4gICAgICAgICAgICAgICAgICAgIGNiOiAoKT0+e1xuICAgICAgICAgICAgICAgICAgICAvLyBub29wXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGF0dHJzOiBkZWZhdWx0QXR0cnMsXG4gICAgICAgICAgICAgICAgICAgIGNyZWF0ZUxpbmtIb29rOiAodXJsLCBhdHRycyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlTGluay5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cmwsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXR0cnNcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHJlcyBpbnN0YW5jZW9mIEhUTUxMaW5rRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBuZWVkQXR0YWNoICYmIGRvY3VtZW50LmhlYWQuYXBwZW5kQ2hpbGQobGlua0VsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgZGVmYXVsdEF0dHJzID0ge1xuICAgICAgICAgICAgICAgIGZldGNocHJpb3JpdHk6ICdoaWdoJyxcbiAgICAgICAgICAgICAgICB0eXBlOiAocmVtb3RlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlSW5mby50eXBlKSA9PT0gJ21vZHVsZScgPyAnbW9kdWxlJyA6ICd0ZXh0L2phdmFzY3JpcHQnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnkuZm9yRWFjaCgoanNVcmwpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgeyBzY3JpcHQ6IHNjcmlwdEVsLCBuZWVkQXR0YWNoIH0gPSBjcmVhdGVTY3JpcHQoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IGpzVXJsLFxuICAgICAgICAgICAgICAgICAgICBjYjogKCk9PntcbiAgICAgICAgICAgICAgICAgICAgLy8gbm9vcFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBhdHRyczogZGVmYXVsdEF0dHJzLFxuICAgICAgICAgICAgICAgICAgICBjcmVhdGVTY3JpcHRIb29rOiAodXJsLCBhdHRycyk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IGhvc3QubG9hZGVySG9vay5saWZlY3ljbGUuY3JlYXRlU2NyaXB0LmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVybCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhdHRyc1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocmVzIGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICBuZWVkRGVsZXRlU2NyaXB0OiB0cnVlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdEVsKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuXG5jb25zdCBTaGFyZVV0aWxzID0ge1xuICAgIGdldFJlZ2lzdGVyZWRTaGFyZSxcbiAgICBnZXRHbG9iYWxTaGFyZVNjb3BlXG59O1xuY29uc3QgR2xvYmFsVXRpbHMgPSB7XG4gICAgR2xvYmFsLFxuICAgIG5hdGl2ZUdsb2JhbCxcbiAgICByZXNldEZlZGVyYXRpb25HbG9iYWxJbmZvLFxuICAgIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZSxcbiAgICBnZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IsXG4gICAgc2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLFxuICAgIGdldEluZm9XaXRob3V0VHlwZSxcbiAgICBnZXRHbG9iYWxTbmFwc2hvdCxcbiAgICBnZXRUYXJnZXRTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8sXG4gICAgZ2V0R2xvYmFsU25hcHNob3RJbmZvQnlNb2R1bGVJbmZvLFxuICAgIHNldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyxcbiAgICBhZGRHbG9iYWxTbmFwc2hvdCxcbiAgICBnZXRSZW1vdGVFbnRyeUV4cG9ydHMsXG4gICAgcmVnaXN0ZXJHbG9iYWxQbHVnaW5zLFxuICAgIGdldEdsb2JhbEhvc3RQbHVnaW5zLFxuICAgIGdldFByZWxvYWRlZCxcbiAgICBzZXRQcmVsb2FkZWRcbn07XG52YXIgaGVscGVycyA9IHtcbiAgICBnbG9iYWw6IEdsb2JhbFV0aWxzLFxuICAgIHNoYXJlOiBTaGFyZVV0aWxzLFxuICAgIHV0aWxzOiB7XG4gICAgICAgIG1hdGNoUmVtb3RlV2l0aE5hbWVBbmRFeHBvc2UsXG4gICAgICAgIHByZWxvYWRBc3NldHMsXG4gICAgICAgIGdldFJlbW90ZUluZm9cbiAgICB9XG59O1xuXG5sZXQgTW9kdWxlID0gY2xhc3MgTW9kdWxlIHtcbiAgICBhc3luYyBnZXRFbnRyeSgpIHtcbiAgICAgICAgaWYgKHRoaXMucmVtb3RlRW50cnlFeHBvcnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHJlbW90ZUVudHJ5RXhwb3J0cztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyA9IGF3YWl0IGdldFJlbW90ZUVudHJ5KHtcbiAgICAgICAgICAgICAgICBvcmlnaW46IHRoaXMuaG9zdCxcbiAgICAgICAgICAgICAgICByZW1vdGVJbmZvOiB0aGlzLnJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiB0aGlzLnJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICAgICAgY29uc3QgdW5pcXVlS2V5ID0gZ2V0UmVtb3RlRW50cnlVbmlxdWVLZXkodGhpcy5yZW1vdGVJbmZvKTtcbiAgICAgICAgICAgIGNvbnN0IGlzU2NyaXB0TG9hZEVycm9yID0gZXJyIGluc3RhbmNlb2YgRXJyb3IgJiYgZXJyLm1lc3NhZ2UuaW5jbHVkZXMoUlVOVElNRV8wMDgpO1xuICAgICAgICAgICAgaWYgKGlzU2NyaXB0TG9hZEVycm9yKSB7XG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzID0gYXdhaXQgdGhpcy5ob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmxvYWRFbnRyeUVycm9yLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBnZXRSZW1vdGVFbnRyeSxcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luOiB0aGlzLmhvc3QsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUluZm86IHRoaXMucmVtb3RlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlRW50cnlFeHBvcnRzOiB0aGlzLnJlbW90ZUVudHJ5RXhwb3J0cyxcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsTG9hZGluZyxcbiAgICAgICAgICAgICAgICAgICAgdW5pcXVlS2V5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgYXNzZXJ0KHJlbW90ZUVudHJ5RXhwb3J0cywgYHJlbW90ZUVudHJ5RXhwb3J0cyBpcyB1bmRlZmluZWQgXFxuICR7c2FmZVRvU3RyaW5nKHRoaXMucmVtb3RlSW5mbyl9YCk7XG4gICAgICAgIHRoaXMucmVtb3RlRW50cnlFeHBvcnRzID0gcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVFbnRyeUV4cG9ydHM7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG4gICAgYXN5bmMgZ2V0KGlkLCBleHBvc2UsIG9wdGlvbnMsIHJlbW90ZVNuYXBzaG90KSB7XG4gICAgICAgIGNvbnN0IHsgbG9hZEZhY3RvcnkgPSB0cnVlIH0gPSBvcHRpb25zIHx8IHtcbiAgICAgICAgICAgIGxvYWRGYWN0b3J5OiB0cnVlXG4gICAgICAgIH07XG4gICAgICAgIC8vIEdldCByZW1vdGVFbnRyeS5qc1xuICAgICAgICBjb25zdCByZW1vdGVFbnRyeUV4cG9ydHMgPSBhd2FpdCB0aGlzLmdldEVudHJ5KCk7XG4gICAgICAgIGlmICghdGhpcy5pbml0ZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsU2hhcmVTY29wZU1hcCA9IHRoaXMuaG9zdC5zaGFyZVNjb3BlTWFwO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVTY29wZUtleXMgPSBBcnJheS5pc0FycmF5KHRoaXMucmVtb3RlSW5mby5zaGFyZVNjb3BlKSA/IHRoaXMucmVtb3RlSW5mby5zaGFyZVNjb3BlIDogW1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3RlSW5mby5zaGFyZVNjb3BlXG4gICAgICAgICAgICBdO1xuICAgICAgICAgICAgaWYgKCFzaGFyZVNjb3BlS2V5cy5sZW5ndGgpIHtcbiAgICAgICAgICAgICAgICBzaGFyZVNjb3BlS2V5cy5wdXNoKCdkZWZhdWx0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzaGFyZVNjb3BlS2V5cy5mb3JFYWNoKChzaGFyZVNjb3BlS2V5KT0+e1xuICAgICAgICAgICAgICAgIGlmICghbG9jYWxTaGFyZVNjb3BlTWFwW3NoYXJlU2NvcGVLZXldKSB7XG4gICAgICAgICAgICAgICAgICAgIGxvY2FsU2hhcmVTY29wZU1hcFtzaGFyZVNjb3BlS2V5XSA9IHt9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgLy8gVE9ETzogY29tcGF0ZSBsZWdhY3kgaW5pdCBwYXJhbXMsIHNob3VsZCB1c2Ugc2hhcmVTY29wZU1hcCBpZiBleGlzdFxuICAgICAgICAgICAgY29uc3Qgc2hhcmVTY29wZSA9IGxvY2FsU2hhcmVTY29wZU1hcFtzaGFyZVNjb3BlS2V5c1swXV07XG4gICAgICAgICAgICBjb25zdCBpbml0U2NvcGUgPSBbXTtcbiAgICAgICAgICAgIGNvbnN0IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5yZW1vdGVJbmZvLnZlcnNpb24gfHwgJycsXG4gICAgICAgICAgICAgICAgc2hhcmVTY29wZUtleXM6IEFycmF5LmlzQXJyYXkodGhpcy5yZW1vdGVJbmZvLnNoYXJlU2NvcGUpID8gc2hhcmVTY29wZUtleXMgOiB0aGlzLnJlbW90ZUluZm8uc2hhcmVTY29wZSB8fCAnZGVmYXVsdCdcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyBIZWxwIHRvIGZpbmQgaG9zdCBpbnN0YW5jZVxuICAgICAgICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMsICdzaGFyZVNjb3BlTWFwJywge1xuICAgICAgICAgICAgICAgIHZhbHVlOiBsb2NhbFNoYXJlU2NvcGVNYXAsXG4gICAgICAgICAgICAgICAgLy8gcmVtb3RlRW50cnlJbml0T3B0aW9ucyB3aWxsIGJlIHRyYXZlcnNlZCBhbmQgYXNzaWduZWQgZHVyaW5nIGNvbnRhaW5lciBpbml0LCAsc28gdGhpcyBhdHRyaWJ1dGUgaXMgbm90IGFsbG93ZWQgdG8gYmUgdHJhdmVyc2VkXG4gICAgICAgICAgICAgICAgZW51bWVyYWJsZTogZmFsc2VcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgaW5pdENvbnRhaW5lck9wdGlvbnMgPSBhd2FpdCB0aGlzLmhvc3QuaG9va3MubGlmZWN5Y2xlLmJlZm9yZUluaXRDb250YWluZXIuZW1pdCh7XG4gICAgICAgICAgICAgICAgc2hhcmVTY29wZSxcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIHNoYXJlU2NvcGVNYXAgd2lsbCBiZSBzZXQgYnkgT2JqZWN0LmRlZmluZVByb3BlcnR5XG4gICAgICAgICAgICAgICAgcmVtb3RlRW50cnlJbml0T3B0aW9ucyxcbiAgICAgICAgICAgICAgICBpbml0U2NvcGUsXG4gICAgICAgICAgICAgICAgcmVtb3RlSW5mbzogdGhpcy5yZW1vdGVJbmZvLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogdGhpcy5ob3N0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgKHJlbW90ZUVudHJ5RXhwb3J0cyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlFeHBvcnRzLmluaXQpID09PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGVycm9yKGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDIsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lOiB0aGlzLmhvc3QubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlTmFtZTogdGhpcy5yZW1vdGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5VXJsOiB0aGlzLnJlbW90ZUluZm8uZW50cnksXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5S2V5OiB0aGlzLnJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lXG4gICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXdhaXQgcmVtb3RlRW50cnlFeHBvcnRzLmluaXQoaW5pdENvbnRhaW5lck9wdGlvbnMuc2hhcmVTY29wZSwgaW5pdENvbnRhaW5lck9wdGlvbnMuaW5pdFNjb3BlLCBpbml0Q29udGFpbmVyT3B0aW9ucy5yZW1vdGVFbnRyeUluaXRPcHRpb25zKTtcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuaG9zdC5ob29rcy5saWZlY3ljbGUuaW5pdENvbnRhaW5lci5lbWl0KF9leHRlbmRzKHt9LCBpbml0Q29udGFpbmVyT3B0aW9ucywge1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0c1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubGliID0gcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICB0aGlzLmluaXRlZCA9IHRydWU7XG4gICAgICAgIGxldCBtb2R1bGVGYWN0b3J5O1xuICAgICAgICBtb2R1bGVGYWN0b3J5ID0gYXdhaXQgdGhpcy5ob3N0LmxvYWRlckhvb2subGlmZWN5Y2xlLmdldE1vZHVsZUZhY3RvcnkuZW1pdCh7XG4gICAgICAgICAgICByZW1vdGVFbnRyeUV4cG9ydHMsXG4gICAgICAgICAgICBleHBvc2UsXG4gICAgICAgICAgICBtb2R1bGVJbmZvOiB0aGlzLnJlbW90ZUluZm9cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIGdldCBleHBvc2VHZXR0ZXJcbiAgICAgICAgaWYgKCFtb2R1bGVGYWN0b3J5KSB7XG4gICAgICAgICAgICBtb2R1bGVGYWN0b3J5ID0gYXdhaXQgcmVtb3RlRW50cnlFeHBvcnRzLmdldChleHBvc2UpO1xuICAgICAgICB9XG4gICAgICAgIGFzc2VydChtb2R1bGVGYWN0b3J5LCBgJHtnZXRGTUlkKHRoaXMucmVtb3RlSW5mbyl9IHJlbW90ZSBkb24ndCBleHBvcnQgJHtleHBvc2V9LmApO1xuICAgICAgICAvLyBrZWVwIHN5bWJvbCBmb3IgbW9kdWxlIG5hbWUgYWx3YXlzIG9uZSBmb3JtYXRcbiAgICAgICAgY29uc3Qgc3ltYm9sTmFtZSA9IHByb2Nlc3NNb2R1bGVBbGlhcyh0aGlzLnJlbW90ZUluZm8ubmFtZSwgZXhwb3NlKTtcbiAgICAgICAgY29uc3Qgd3JhcE1vZHVsZUZhY3RvcnkgPSB0aGlzLndyYXBlckZhY3RvcnkobW9kdWxlRmFjdG9yeSwgc3ltYm9sTmFtZSk7XG4gICAgICAgIGlmICghbG9hZEZhY3RvcnkpIHtcbiAgICAgICAgICAgIHJldHVybiB3cmFwTW9kdWxlRmFjdG9yeTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleHBvc2VDb250ZW50ID0gYXdhaXQgd3JhcE1vZHVsZUZhY3RvcnkoKTtcbiAgICAgICAgcmV0dXJuIGV4cG9zZUNvbnRlbnQ7XG4gICAgfVxuICAgIHdyYXBlckZhY3RvcnkobW9kdWxlRmFjdG9yeSwgaWQpIHtcbiAgICAgICAgZnVuY3Rpb24gZGVmaW5lTW9kdWxlSWQocmVzLCBpZCkge1xuICAgICAgICAgICAgaWYgKHJlcyAmJiB0eXBlb2YgcmVzID09PSAnb2JqZWN0JyAmJiBPYmplY3QuaXNFeHRlbnNpYmxlKHJlcykgJiYgIU9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IocmVzLCBTeW1ib2wuZm9yKCdtZl9tb2R1bGVfaWQnKSkpIHtcbiAgICAgICAgICAgICAgICBPYmplY3QuZGVmaW5lUHJvcGVydHkocmVzLCBTeW1ib2wuZm9yKCdtZl9tb2R1bGVfaWQnKSwge1xuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogaWQsXG4gICAgICAgICAgICAgICAgICAgIGVudW1lcmFibGU6IGZhbHNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1vZHVsZUZhY3RvcnkgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICByZXR1cm4gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBtb2R1bGVGYWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgLy8gVGhpcyBwYXJhbWV0ZXIgaXMgdXNlZCBmb3IgYnJpZGdlIGRlYnVnZ2luZ1xuICAgICAgICAgICAgICAgIGRlZmluZU1vZHVsZUlkKHJlcywgaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuICgpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcmVzID0gbW9kdWxlRmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgIC8vIFRoaXMgcGFyYW1ldGVyIGlzIHVzZWQgZm9yIGJyaWRnZSBkZWJ1Z2dpbmdcbiAgICAgICAgICAgICAgICBkZWZpbmVNb2R1bGVJZChyZXMsIGlkKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih7IHJlbW90ZUluZm8sIGhvc3QgfSl7XG4gICAgICAgIHRoaXMuaW5pdGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMubGliID0gdW5kZWZpbmVkO1xuICAgICAgICB0aGlzLnJlbW90ZUluZm8gPSByZW1vdGVJbmZvO1xuICAgICAgICB0aGlzLmhvc3QgPSBob3N0O1xuICAgIH1cbn07XG5cbmNsYXNzIFN5bmNIb29rIHtcbiAgICBvbihmbikge1xuICAgICAgICBpZiAodHlwZW9mIGZuID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICB0aGlzLmxpc3RlbmVycy5hZGQoZm4pO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uY2UoZm4pIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby10aGlzLWFsaWFzXG4gICAgICAgIGNvbnN0IHNlbGYgPSB0aGlzO1xuICAgICAgICB0aGlzLm9uKGZ1bmN0aW9uIHdyYXBwZXIoLi4uYXJncykge1xuICAgICAgICAgICAgc2VsZi5yZW1vdmUod3JhcHBlcik7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgICAgICAgICAgcmV0dXJuIGZuLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZW1pdCguLi5kYXRhKSB7XG4gICAgICAgIGxldCByZXN1bHQ7XG4gICAgICAgIGlmICh0aGlzLmxpc3RlbmVycy5zaXplID4gMCkge1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICAgICAgICAgIHRoaXMubGlzdGVuZXJzLmZvckVhY2goKGZuKT0+e1xuICAgICAgICAgICAgICAgIHJlc3VsdCA9IGZuKC4uLmRhdGEpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9XG4gICAgcmVtb3ZlKGZuKSB7XG4gICAgICAgIHRoaXMubGlzdGVuZXJzLmRlbGV0ZShmbik7XG4gICAgfVxuICAgIHJlbW92ZUFsbCgpIHtcbiAgICAgICAgdGhpcy5saXN0ZW5lcnMuY2xlYXIoKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodHlwZSl7XG4gICAgICAgIHRoaXMudHlwZSA9ICcnO1xuICAgICAgICB0aGlzLmxpc3RlbmVycyA9IG5ldyBTZXQoKTtcbiAgICAgICAgaWYgKHR5cGUpIHtcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgICAgIH1cbiAgICB9XG59XG5cbmNsYXNzIEFzeW5jSG9vayBleHRlbmRzIFN5bmNIb29rIHtcbiAgICBlbWl0KC4uLmRhdGEpIHtcbiAgICAgICAgbGV0IHJlc3VsdDtcbiAgICAgICAgY29uc3QgbHMgPSBBcnJheS5mcm9tKHRoaXMubGlzdGVuZXJzKTtcbiAgICAgICAgaWYgKGxzLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGxldCBpID0gMDtcbiAgICAgICAgICAgIGNvbnN0IGNhbGwgPSAocHJldik9PntcbiAgICAgICAgICAgICAgICBpZiAocHJldiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlOyAvLyBBYm9ydCBwcm9jZXNzXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpIDwgbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobHNbaSsrXS5hcHBseShudWxsLCBkYXRhKSkudGhlbihjYWxsKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcHJldjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmVzdWx0ID0gY2FsbCgpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzdWx0KTtcbiAgICB9XG59XG5cbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvZXhwbGljaXQtbW9kdWxlLWJvdW5kYXJ5LXR5cGVzXG5mdW5jdGlvbiBjaGVja1JldHVybkRhdGEob3JpZ2luYWxEYXRhLCByZXR1cm5lZERhdGEpIHtcbiAgICBpZiAoIWlzT2JqZWN0KHJldHVybmVkRGF0YSkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAob3JpZ2luYWxEYXRhICE9PSByZXR1cm5lZERhdGEpIHtcbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXJlc3RyaWN0ZWQtc3ludGF4XG4gICAgICAgIGZvcihjb25zdCBrZXkgaW4gb3JpZ2luYWxEYXRhKXtcbiAgICAgICAgICAgIGlmICghKGtleSBpbiByZXR1cm5lZERhdGEpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJldHVybiB0cnVlO1xufVxuY2xhc3MgU3luY1dhdGVyZmFsbEhvb2sgZXh0ZW5kcyBTeW5jSG9vayB7XG4gICAgZW1pdChkYXRhKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgZGF0YSBmb3IgdGhlIFwiJHt0aGlzLnR5cGV9XCIgaG9vayBzaG91bGQgYmUgYW4gb2JqZWN0LmApO1xuICAgICAgICB9XG4gICAgICAgIGZvciAoY29uc3QgZm4gb2YgdGhpcy5saXN0ZW5lcnMpe1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCB0ZW1wRGF0YSA9IGZuKGRhdGEpO1xuICAgICAgICAgICAgICAgIGlmIChjaGVja1JldHVybkRhdGEoZGF0YSwgdGVtcERhdGEpKSB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEgPSB0ZW1wRGF0YTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IoYEEgcGx1Z2luIHJldHVybmVkIGFuIHVuYWNjZXB0YWJsZSB2YWx1ZSBmb3IgdGhlIFwiJHt0aGlzLnR5cGV9XCIgdHlwZS5gKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgIHdhcm4oZSk7XG4gICAgICAgICAgICAgICAgdGhpcy5vbmVycm9yKGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkYXRhO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vbmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxufVxuXG5jbGFzcyBBc3luY1dhdGVyZmFsbEhvb2sgZXh0ZW5kcyBTeW5jSG9vayB7XG4gICAgZW1pdChkYXRhKSB7XG4gICAgICAgIGlmICghaXNPYmplY3QoZGF0YSkpIHtcbiAgICAgICAgICAgIGVycm9yKGBUaGUgcmVzcG9uc2UgZGF0YSBmb3IgdGhlIFwiJHt0aGlzLnR5cGV9XCIgaG9vayBtdXN0IGJlIGFuIG9iamVjdC5gKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBscyA9IEFycmF5LmZyb20odGhpcy5saXN0ZW5lcnMpO1xuICAgICAgICBpZiAobHMubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgbGV0IGkgPSAwO1xuICAgICAgICAgICAgY29uc3QgcHJvY2Vzc0Vycm9yID0gKGUpPT57XG4gICAgICAgICAgICAgICAgd2FybihlKTtcbiAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgY2FsbCA9IChwcmV2RGF0YSk9PntcbiAgICAgICAgICAgICAgICBpZiAoY2hlY2tSZXR1cm5EYXRhKGRhdGEsIHByZXZEYXRhKSkge1xuICAgICAgICAgICAgICAgICAgICBkYXRhID0gcHJldkRhdGE7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbHMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUobHNbaSsrXShkYXRhKSkudGhlbihjYWxsLCBwcm9jZXNzRXJyb3IpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwcm9jZXNzRXJyb3IoZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm9uZXJyb3IoYEEgcGx1Z2luIHJldHVybmVkIGFuIGluY29ycmVjdCB2YWx1ZSBmb3IgdGhlIFwiJHt0aGlzLnR5cGV9XCIgdHlwZS5gKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIGRhdGE7XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIFByb21pc2UucmVzb2x2ZShjYWxsKGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKGRhdGEpO1xuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcih0eXBlKXtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5vbmVycm9yID0gZXJyb3I7XG4gICAgICAgIHRoaXMudHlwZSA9IHR5cGU7XG4gICAgfVxufVxuXG5jbGFzcyBQbHVnaW5TeXN0ZW0ge1xuICAgIGFwcGx5UGx1Z2luKHBsdWdpbiwgaW5zdGFuY2UpIHtcbiAgICAgICAgYXNzZXJ0KGlzUGxhaW5PYmplY3QocGx1Z2luKSwgJ1BsdWdpbiBjb25maWd1cmF0aW9uIGlzIGludmFsaWQuJyk7XG4gICAgICAgIC8vIFRoZSBwbHVnaW4ncyBuYW1lIGlzIG1hbmRhdG9yeSBhbmQgbXVzdCBiZSB1bmlxdWVcbiAgICAgICAgY29uc3QgcGx1Z2luTmFtZSA9IHBsdWdpbi5uYW1lO1xuICAgICAgICBhc3NlcnQocGx1Z2luTmFtZSwgJ0EgbmFtZSBtdXN0IGJlIHByb3ZpZGVkIGJ5IHRoZSBwbHVnaW4uJyk7XG4gICAgICAgIGlmICghdGhpcy5yZWdpc3RlclBsdWdpbnNbcGx1Z2luTmFtZV0pIHtcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5zW3BsdWdpbk5hbWVdID0gcGx1Z2luO1xuICAgICAgICAgICAgcGx1Z2luLmFwcGx5ID09IG51bGwgPyB2b2lkIDAgOiBwbHVnaW4uYXBwbHkuY2FsbChwbHVnaW4sIGluc3RhbmNlKTtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKHRoaXMubGlmZWN5Y2xlKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcGx1Z2luTGlmZSA9IHBsdWdpbltrZXldO1xuICAgICAgICAgICAgICAgIGlmIChwbHVnaW5MaWZlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubGlmZWN5Y2xlW2tleV0ub24ocGx1Z2luTGlmZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcmVtb3ZlUGx1Z2luKHBsdWdpbk5hbWUpIHtcbiAgICAgICAgYXNzZXJ0KHBsdWdpbk5hbWUsICdBIG5hbWUgaXMgcmVxdWlyZWQuJyk7XG4gICAgICAgIGNvbnN0IHBsdWdpbiA9IHRoaXMucmVnaXN0ZXJQbHVnaW5zW3BsdWdpbk5hbWVdO1xuICAgICAgICBhc3NlcnQocGx1Z2luLCBgVGhlIHBsdWdpbiBcIiR7cGx1Z2luTmFtZX1cIiBpcyBub3QgcmVnaXN0ZXJlZC5gKTtcbiAgICAgICAgT2JqZWN0LmtleXMocGx1Z2luKS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoa2V5ICE9PSAnbmFtZScpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpZmVjeWNsZVtrZXldLnJlbW92ZShwbHVnaW5ba2V5XSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihsaWZlY3ljbGUpe1xuICAgICAgICB0aGlzLnJlZ2lzdGVyUGx1Z2lucyA9IHt9O1xuICAgICAgICB0aGlzLmxpZmVjeWNsZSA9IGxpZmVjeWNsZTtcbiAgICAgICAgdGhpcy5saWZlY3ljbGVLZXlzID0gT2JqZWN0LmtleXMobGlmZWN5Y2xlKTtcbiAgICB9XG59XG5cbmZ1bmN0aW9uIGFzc2lnblJlbW90ZUluZm8ocmVtb3RlSW5mbywgcmVtb3RlU25hcHNob3QpIHtcbiAgICBjb25zdCByZW1vdGVFbnRyeUluZm8gPSBnZXRSZW1vdGVFbnRyeUluZm9Gcm9tU25hcHNob3QocmVtb3RlU25hcHNob3QpO1xuICAgIGlmICghcmVtb3RlRW50cnlJbmZvLnVybCkge1xuICAgICAgICBlcnJvcihgVGhlIGF0dHJpYnV0ZSByZW1vdGVFbnRyeSBvZiAke3JlbW90ZUluZm8ubmFtZX0gbXVzdCBub3QgYmUgdW5kZWZpbmVkLmApO1xuICAgIH1cbiAgICBsZXQgZW50cnlVcmwgPSBnZXRSZXNvdXJjZVVybChyZW1vdGVTbmFwc2hvdCwgcmVtb3RlRW50cnlJbmZvLnVybCk7XG4gICAgaWYgKCFpc0Jyb3dzZXJFbnYoKSAmJiAhZW50cnlVcmwuc3RhcnRzV2l0aCgnaHR0cCcpKSB7XG4gICAgICAgIGVudHJ5VXJsID0gYGh0dHBzOiR7ZW50cnlVcmx9YDtcbiAgICB9XG4gICAgcmVtb3RlSW5mby50eXBlID0gcmVtb3RlRW50cnlJbmZvLnR5cGU7XG4gICAgcmVtb3RlSW5mby5lbnRyeUdsb2JhbE5hbWUgPSByZW1vdGVFbnRyeUluZm8uZ2xvYmFsTmFtZTtcbiAgICByZW1vdGVJbmZvLmVudHJ5ID0gZW50cnlVcmw7XG4gICAgcmVtb3RlSW5mby52ZXJzaW9uID0gcmVtb3RlU25hcHNob3QudmVyc2lvbjtcbiAgICByZW1vdGVJbmZvLmJ1aWxkVmVyc2lvbiA9IHJlbW90ZVNuYXBzaG90LmJ1aWxkVmVyc2lvbjtcbn1cbmZ1bmN0aW9uIHNuYXBzaG90UGx1Z2luKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdzbmFwc2hvdC1wbHVnaW4nLFxuICAgICAgICBhc3luYyBhZnRlclJlc29sdmUgKGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlLCBwa2dOYW1lT3JBbGlhcywgZXhwb3NlLCBvcmlnaW4sIHJlbW90ZUluZm8sIGlkIH0gPSBhcmdzO1xuICAgICAgICAgICAgaWYgKCFpc1JlbW90ZUluZm9XaXRoRW50cnkocmVtb3RlKSB8fCAhaXNQdXJlUmVtb3RlRW50cnkocmVtb3RlKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlU25hcHNob3QsIGdsb2JhbFNuYXBzaG90IH0gPSBhd2FpdCBvcmlnaW4uc25hcHNob3RIYW5kbGVyLmxvYWRSZW1vdGVTbmFwc2hvdEluZm8oe1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgYXNzaWduUmVtb3RlSW5mbyhyZW1vdGVJbmZvLCByZW1vdGVTbmFwc2hvdCk7XG4gICAgICAgICAgICAgICAgLy8gcHJlbG9hZGluZyBhc3NldHNcbiAgICAgICAgICAgICAgICBjb25zdCBwcmVsb2FkT3B0aW9ucyA9IHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBuYW1lT3JBbGlhczogcGtnTmFtZU9yQWxpYXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBleHBvc2VzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwb3NlXG4gICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzb3VyY2VDYXRlZ29yeTogJ3N5bmMnLFxuICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmU6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZGVwc1JlbW90ZTogZmFsc2VcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXRzID0gYXdhaXQgb3JpZ2luLnJlbW90ZUhhbmRsZXIuaG9va3MubGlmZWN5Y2xlLmdlbmVyYXRlUHJlbG9hZEFzc2V0cy5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3JpZ2luLFxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkT3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU25hcHNob3RcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoYXNzZXRzKSB7XG4gICAgICAgICAgICAgICAgICAgIHByZWxvYWRBc3NldHMocmVtb3RlSW5mbywgb3JpZ2luLCBhc3NldHMsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIF9leHRlbmRzKHt9LCBhcmdzLCB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXJncztcbiAgICAgICAgfVxuICAgIH07XG59XG5cbi8vIG5hbWVcbi8vIG5hbWU6dmVyc2lvblxuZnVuY3Rpb24gc3BsaXRJZChpZCkge1xuICAgIGNvbnN0IHNwbGl0SW5mbyA9IGlkLnNwbGl0KCc6Jyk7XG4gICAgaWYgKHNwbGl0SW5mby5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHNwbGl0SW5mb1swXSxcbiAgICAgICAgICAgIHZlcnNpb246IHVuZGVmaW5lZFxuICAgICAgICB9O1xuICAgIH0gZWxzZSBpZiAoc3BsaXRJbmZvLmxlbmd0aCA9PT0gMikge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgbmFtZTogc3BsaXRJbmZvWzBdLFxuICAgICAgICAgICAgdmVyc2lvbjogc3BsaXRJbmZvWzFdXG4gICAgICAgIH07XG4gICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWU6IHNwbGl0SW5mb1sxXSxcbiAgICAgICAgICAgIHZlcnNpb246IHNwbGl0SW5mb1syXVxuICAgICAgICB9O1xuICAgIH1cbn1cbi8vIFRyYXZlcnNlIGFsbCBub2RlcyBpbiBtb2R1bGVJbmZvIGFuZCB0cmF2ZXJzZSB0aGUgZW50aXJlIHNuYXBzaG90XG5mdW5jdGlvbiB0cmF2ZXJzZU1vZHVsZUluZm8oZ2xvYmFsU25hcHNob3QsIHJlbW90ZUluZm8sIHRyYXZlcnNlLCBpc1Jvb3QsIG1lbW8gPSB7fSwgcmVtb3RlU25hcHNob3QpIHtcbiAgICBjb25zdCBpZCA9IGdldEZNSWQocmVtb3RlSW5mbyk7XG4gICAgY29uc3QgeyB2YWx1ZTogc25hcHNob3RWYWx1ZSB9ID0gZ2V0SW5mb1dpdGhvdXRUeXBlKGdsb2JhbFNuYXBzaG90LCBpZCk7XG4gICAgY29uc3QgZWZmZWN0aXZlUmVtb3RlU25hcHNob3QgPSByZW1vdGVTbmFwc2hvdCB8fCBzbmFwc2hvdFZhbHVlO1xuICAgIGlmIChlZmZlY3RpdmVSZW1vdGVTbmFwc2hvdCAmJiAhaXNNYW5pZmVzdFByb3ZpZGVyKGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90KSkge1xuICAgICAgICB0cmF2ZXJzZShlZmZlY3RpdmVSZW1vdGVTbmFwc2hvdCwgcmVtb3RlSW5mbywgaXNSb290KTtcbiAgICAgICAgaWYgKGVmZmVjdGl2ZVJlbW90ZVNuYXBzaG90LnJlbW90ZXNJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVLZXlzID0gT2JqZWN0LmtleXMoZWZmZWN0aXZlUmVtb3RlU25hcHNob3QucmVtb3Rlc0luZm8pO1xuICAgICAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgcmVtb3RlS2V5cyl7XG4gICAgICAgICAgICAgICAgaWYgKG1lbW9ba2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbWVtb1trZXldID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjb25zdCBzdWJSZW1vdGVJbmZvID0gc3BsaXRJZChrZXkpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZVZhbHVlID0gZWZmZWN0aXZlUmVtb3RlU25hcHNob3QucmVtb3Rlc0luZm9ba2V5XTtcbiAgICAgICAgICAgICAgICB0cmF2ZXJzZU1vZHVsZUluZm8oZ2xvYmFsU25hcHNob3QsIHtcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogc3ViUmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uOiByZW1vdGVWYWx1ZS5tYXRjaGVkVmVyc2lvblxuICAgICAgICAgICAgICAgIH0sIHRyYXZlcnNlLCBmYWxzZSwgbWVtbywgdW5kZWZpbmVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbn1cbmNvbnN0IGlzRXhpc3RlZCA9ICh0eXBlLCB1cmwpPT57XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYCR7dHlwZX1bJHt0eXBlID09PSAnbGluaycgPyAnaHJlZicgOiAnc3JjJ309XCIke3VybH1cIl1gKTtcbn07XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuZnVuY3Rpb24gZ2VuZXJhdGVQcmVsb2FkQXNzZXRzKG9yaWdpbiwgcHJlbG9hZE9wdGlvbnMsIHJlbW90ZSwgZ2xvYmFsU25hcHNob3QsIHJlbW90ZVNuYXBzaG90KSB7XG4gICAgY29uc3QgY3NzQXNzZXRzID0gW107XG4gICAgY29uc3QganNBc3NldHMgPSBbXTtcbiAgICBjb25zdCBlbnRyeUFzc2V0cyA9IFtdO1xuICAgIGNvbnN0IGxvYWRlZFNoYXJlZEpzQXNzZXRzID0gbmV3IFNldCgpO1xuICAgIGNvbnN0IGxvYWRlZFNoYXJlZENzc0Fzc2V0cyA9IG5ldyBTZXQoKTtcbiAgICBjb25zdCB7IG9wdGlvbnMgfSA9IG9yaWdpbjtcbiAgICBjb25zdCB7IHByZWxvYWRDb25maWc6IHJvb3RQcmVsb2FkQ29uZmlnIH0gPSBwcmVsb2FkT3B0aW9ucztcbiAgICBjb25zdCB7IGRlcHNSZW1vdGUgfSA9IHJvb3RQcmVsb2FkQ29uZmlnO1xuICAgIGNvbnN0IG1lbW8gPSB7fTtcbiAgICB0cmF2ZXJzZU1vZHVsZUluZm8oZ2xvYmFsU25hcHNob3QsIHJlbW90ZSwgKG1vZHVsZUluZm9TbmFwc2hvdCwgcmVtb3RlSW5mbywgaXNSb290KT0+e1xuICAgICAgICBsZXQgcHJlbG9hZENvbmZpZztcbiAgICAgICAgaWYgKGlzUm9vdCkge1xuICAgICAgICAgICAgcHJlbG9hZENvbmZpZyA9IHJvb3RQcmVsb2FkQ29uZmlnO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoZGVwc1JlbW90ZSkpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgYXJyYXktY2FsbGJhY2stcmV0dXJuXG4gICAgICAgICAgICAgICAgY29uc3QgZmluZFByZWxvYWRDb25maWcgPSBkZXBzUmVtb3RlLmZpbmQoKHJlbW90ZUNvbmZpZyk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW90ZUNvbmZpZy5uYW1lT3JBbGlhcyA9PT0gcmVtb3RlSW5mby5uYW1lIHx8IHJlbW90ZUNvbmZpZy5uYW1lT3JBbGlhcyA9PT0gcmVtb3RlSW5mby5hbGlhcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghZmluZFByZWxvYWRDb25maWcpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnID0gZGVmYXVsdFByZWxvYWRBcmdzKGZpbmRQcmVsb2FkQ29uZmlnKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAoZGVwc1JlbW90ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgICAgIHByZWxvYWRDb25maWcgPSByb290UHJlbG9hZENvbmZpZztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlbW90ZUVudHJ5VXJsID0gZ2V0UmVzb3VyY2VVcmwobW9kdWxlSW5mb1NuYXBzaG90LCBnZXRSZW1vdGVFbnRyeUluZm9Gcm9tU25hcHNob3QobW9kdWxlSW5mb1NuYXBzaG90KS51cmwpO1xuICAgICAgICBpZiAocmVtb3RlRW50cnlVcmwpIHtcbiAgICAgICAgICAgIGVudHJ5QXNzZXRzLnB1c2goe1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICBtb2R1bGVJbmZvOiB7XG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgZW50cnk6IHJlbW90ZUVudHJ5VXJsLFxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAncmVtb3RlRW50cnlUeXBlJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QucmVtb3RlRW50cnlUeXBlIDogJ2dsb2JhbCcsXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5R2xvYmFsTmFtZTogJ2dsb2JhbE5hbWUnIGluIG1vZHVsZUluZm9TbmFwc2hvdCA/IG1vZHVsZUluZm9TbmFwc2hvdC5nbG9iYWxOYW1lIDogcmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgdmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm9TbmFwc2hvdCA/IG1vZHVsZUluZm9TbmFwc2hvdC52ZXJzaW9uIDogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB1cmw6IHJlbW90ZUVudHJ5VXJsXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgbW9kdWxlQXNzZXRzSW5mbyA9ICdtb2R1bGVzJyBpbiBtb2R1bGVJbmZvU25hcHNob3QgPyBtb2R1bGVJbmZvU25hcHNob3QubW9kdWxlcyA6IFtdO1xuICAgICAgICBjb25zdCBub3JtYWxpemVkUHJlbG9hZEV4cG9zZXMgPSBub3JtYWxpemVQcmVsb2FkRXhwb3NlcyhwcmVsb2FkQ29uZmlnLmV4cG9zZXMpO1xuICAgICAgICBpZiAobm9ybWFsaXplZFByZWxvYWRFeHBvc2VzLmxlbmd0aCAmJiAnbW9kdWxlcycgaW4gbW9kdWxlSW5mb1NuYXBzaG90KSB7XG4gICAgICAgICAgICB2YXIgX21vZHVsZUluZm9TbmFwc2hvdF9tb2R1bGVzO1xuICAgICAgICAgICAgbW9kdWxlQXNzZXRzSW5mbyA9IG1vZHVsZUluZm9TbmFwc2hvdCA9PSBudWxsID8gdm9pZCAwIDogKF9tb2R1bGVJbmZvU25hcHNob3RfbW9kdWxlcyA9IG1vZHVsZUluZm9TbmFwc2hvdC5tb2R1bGVzKSA9PSBudWxsID8gdm9pZCAwIDogX21vZHVsZUluZm9TbmFwc2hvdF9tb2R1bGVzLnJlZHVjZSgoYXNzZXRzLCBtb2R1bGVBc3NldEluZm8pPT57XG4gICAgICAgICAgICAgICAgaWYgKChub3JtYWxpemVkUHJlbG9hZEV4cG9zZXMgPT0gbnVsbCA/IHZvaWQgMCA6IG5vcm1hbGl6ZWRQcmVsb2FkRXhwb3Nlcy5pbmRleE9mKG1vZHVsZUFzc2V0SW5mby5tb2R1bGVOYW1lKSkgIT09IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIGFzc2V0cy5wdXNoKG1vZHVsZUFzc2V0SW5mbyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBhc3NldHM7XG4gICAgICAgICAgICB9LCBbXSk7XG4gICAgICAgIH1cbiAgICAgICAgZnVuY3Rpb24gaGFuZGxlQXNzZXRzKGFzc2V0cykge1xuICAgICAgICAgICAgY29uc3QgYXNzZXRzUmVzID0gYXNzZXRzLm1hcCgoYXNzZXQpPT5nZXRSZXNvdXJjZVVybChtb2R1bGVJbmZvU25hcHNob3QsIGFzc2V0KSk7XG4gICAgICAgICAgICBpZiAocHJlbG9hZENvbmZpZy5maWx0ZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gYXNzZXRzUmVzLmZpbHRlcihwcmVsb2FkQ29uZmlnLmZpbHRlcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gYXNzZXRzUmVzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtb2R1bGVBc3NldHNJbmZvKSB7XG4gICAgICAgICAgICBjb25zdCBhc3NldHNMZW5ndGggPSBtb2R1bGVBc3NldHNJbmZvLmxlbmd0aDtcbiAgICAgICAgICAgIGZvcihsZXQgaW5kZXggPSAwOyBpbmRleCA8IGFzc2V0c0xlbmd0aDsgaW5kZXgrKyl7XG4gICAgICAgICAgICAgICAgY29uc3QgYXNzZXRzSW5mbyA9IG1vZHVsZUFzc2V0c0luZm9baW5kZXhdO1xuICAgICAgICAgICAgICAgIGNvbnN0IGV4cG9zZUZ1bGxQYXRoID0gYCR7cmVtb3RlSW5mby5uYW1lfS8ke2Fzc2V0c0luZm8ubW9kdWxlTmFtZX1gO1xuICAgICAgICAgICAgICAgIG9yaWdpbi5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5oYW5kbGVQcmVsb2FkTW9kdWxlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICBpZDogYXNzZXRzSW5mby5tb2R1bGVOYW1lID09PSAnLicgPyByZW1vdGVJbmZvLm5hbWUgOiBleHBvc2VGdWxsUGF0aCxcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbW9kdWxlSW5mb1NuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICBwcmVsb2FkQ29uZmlnLFxuICAgICAgICAgICAgICAgICAgICByZW1vdGU6IHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpblxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGNvbnN0IHByZWxvYWRlZCA9IGdldFByZWxvYWRlZChleHBvc2VGdWxsUGF0aCk7XG4gICAgICAgICAgICAgICAgaWYgKHByZWxvYWRlZCkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHByZWxvYWRDb25maWcucmVzb3VyY2VDYXRlZ29yeSA9PT0gJ2FsbCcpIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXNzZXRzLnB1c2goLi4uaGFuZGxlQXNzZXRzKGFzc2V0c0luZm8uYXNzZXRzLmNzcy5hc3luYykpO1xuICAgICAgICAgICAgICAgICAgICBjc3NBc3NldHMucHVzaCguLi5oYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuY3NzLnN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAganNBc3NldHMucHVzaCguLi5oYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuanMuYXN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAganNBc3NldHMucHVzaCguLi5oYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuanMuc3luYykpO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1jb25zdGFudC1jb25kaXRpb25cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHByZWxvYWRDb25maWcucmVzb3VyY2VDYXRlZ29yeSA9ICdzeW5jJykge1xuICAgICAgICAgICAgICAgICAgICBjc3NBc3NldHMucHVzaCguLi5oYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuY3NzLnN5bmMpKTtcbiAgICAgICAgICAgICAgICAgICAganNBc3NldHMucHVzaCguLi5oYW5kbGVBc3NldHMoYXNzZXRzSW5mby5hc3NldHMuanMuc3luYykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBzZXRQcmVsb2FkZWQoZXhwb3NlRnVsbFBhdGgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSwgdHJ1ZSwgbWVtbywgcmVtb3RlU25hcHNob3QpO1xuICAgIGlmIChyZW1vdGVTbmFwc2hvdC5zaGFyZWQgJiYgcmVtb3RlU25hcHNob3Quc2hhcmVkLmxlbmd0aCA+IDApIHtcbiAgICAgICAgY29uc3QgY29sbGVjdFNoYXJlZEFzc2V0cyA9IChzaGFyZUluZm8sIHNuYXBzaG90U2hhcmVkKT0+e1xuICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFNoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZShvcmlnaW4uc2hhcmVTY29wZU1hcCwgc25hcHNob3RTaGFyZWQuc2hhcmVkTmFtZSwgc2hhcmVJbmZvLCBvcmlnaW4uc2hhcmVkSGFuZGxlci5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgICAgIC8vIElmIHRoZSBnbG9iYWwgc2hhcmUgZG9lcyBub3QgZXhpc3QsIG9yIHRoZSBsaWIgZnVuY3Rpb24gZG9lcyBub3QgZXhpc3QsIGl0IG1lYW5zIHRoYXQgdGhlIHNoYXJlZCBoYXMgbm90IGJlZW4gbG9hZGVkIHlldCBhbmQgY2FuIGJlIHByZWxvYWRlZC5cbiAgICAgICAgICAgIGlmIChyZWdpc3RlcmVkU2hhcmVkICYmIHR5cGVvZiByZWdpc3RlcmVkU2hhcmVkLmxpYiA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHNuYXBzaG90U2hhcmVkLmFzc2V0cy5qcy5zeW5jLmZvckVhY2goKGFzc2V0KT0+e1xuICAgICAgICAgICAgICAgICAgICBsb2FkZWRTaGFyZWRKc0Fzc2V0cy5hZGQoYXNzZXQpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHNuYXBzaG90U2hhcmVkLmFzc2V0cy5jc3Muc3luYy5mb3JFYWNoKChhc3NldCk9PntcbiAgICAgICAgICAgICAgICAgICAgbG9hZGVkU2hhcmVkQ3NzQXNzZXRzLmFkZChhc3NldCk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHJlbW90ZVNuYXBzaG90LnNoYXJlZC5mb3JFYWNoKChzaGFyZWQpPT57XG4gICAgICAgICAgICB2YXIgX29wdGlvbnNfc2hhcmVkO1xuICAgICAgICAgICAgY29uc3Qgc2hhcmVJbmZvcyA9IChfb3B0aW9uc19zaGFyZWQgPSBvcHRpb25zLnNoYXJlZCkgPT0gbnVsbCA/IHZvaWQgMCA6IF9vcHRpb25zX3NoYXJlZFtzaGFyZWQuc2hhcmVkTmFtZV07XG4gICAgICAgICAgICBpZiAoIXNoYXJlSW5mb3MpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBpZiBubyB2ZXJzaW9uLCBwcmVsb2FkIGFsbCBzaGFyZWRcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZE9wdGlvbnMgPSBzaGFyZWQudmVyc2lvbiA/IHNoYXJlSW5mb3MuZmluZCgocyk9PnMudmVyc2lvbiA9PT0gc2hhcmVkLnZlcnNpb24pIDogc2hhcmVJbmZvcztcbiAgICAgICAgICAgIGlmICghc2hhcmVkT3B0aW9ucykge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGFycmF5U2hhcmVJbmZvID0gYXJyYXlPcHRpb25zKHNoYXJlZE9wdGlvbnMpO1xuICAgICAgICAgICAgYXJyYXlTaGFyZUluZm8uZm9yRWFjaCgocyk9PntcbiAgICAgICAgICAgICAgICBjb2xsZWN0U2hhcmVkQXNzZXRzKHMsIHNoYXJlZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbnN0IG5lZWRQcmVsb2FkSnNBc3NldHMgPSBqc0Fzc2V0cy5maWx0ZXIoKGFzc2V0KT0+IWxvYWRlZFNoYXJlZEpzQXNzZXRzLmhhcyhhc3NldCkgJiYgIWlzRXhpc3RlZCgnc2NyaXB0JywgYXNzZXQpKTtcbiAgICBjb25zdCBuZWVkUHJlbG9hZENzc0Fzc2V0cyA9IGNzc0Fzc2V0cy5maWx0ZXIoKGFzc2V0KT0+IWxvYWRlZFNoYXJlZENzc0Fzc2V0cy5oYXMoYXNzZXQpICYmICFpc0V4aXN0ZWQoJ2xpbmsnLCBhc3NldCkpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGNzc0Fzc2V0czogbmVlZFByZWxvYWRDc3NBc3NldHMsXG4gICAgICAgIGpzQXNzZXRzV2l0aG91dEVudHJ5OiBuZWVkUHJlbG9hZEpzQXNzZXRzLFxuICAgICAgICBlbnRyeUFzc2V0czogZW50cnlBc3NldHMuZmlsdGVyKChlbnRyeSk9PiFpc0V4aXN0ZWQoJ3NjcmlwdCcsIGVudHJ5LnVybCkpXG4gICAgfTtcbn1cbmNvbnN0IGdlbmVyYXRlUHJlbG9hZEFzc2V0c1BsdWdpbiA9IGZ1bmN0aW9uKCkge1xuICAgIHJldHVybiB7XG4gICAgICAgIG5hbWU6ICdnZW5lcmF0ZS1wcmVsb2FkLWFzc2V0cy1wbHVnaW4nLFxuICAgICAgICBhc3luYyBnZW5lcmF0ZVByZWxvYWRBc3NldHMgKGFyZ3MpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgb3JpZ2luLCBwcmVsb2FkT3B0aW9ucywgcmVtb3RlSW5mbywgcmVtb3RlLCBnbG9iYWxTbmFwc2hvdCwgcmVtb3RlU25hcHNob3QgfSA9IGFyZ3M7XG4gICAgICAgICAgICBpZiAoIWlzQnJvd3NlckVudigpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgY3NzQXNzZXRzOiBbXSxcbiAgICAgICAgICAgICAgICAgICAganNBc3NldHNXaXRob3V0RW50cnk6IFtdLFxuICAgICAgICAgICAgICAgICAgICBlbnRyeUFzc2V0czogW11cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUmVtb3RlSW5mb1dpdGhFbnRyeShyZW1vdGUpICYmIGlzUHVyZVJlbW90ZUVudHJ5KHJlbW90ZSkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBjc3NBc3NldHM6IFtdLFxuICAgICAgICAgICAgICAgICAgICBqc0Fzc2V0c1dpdGhvdXRFbnRyeTogW10sXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5QXNzZXRzOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsOiByZW1vdGUuZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlSW5mbzoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuYW1lOiByZW1vdGVJbmZvLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5OiByZW1vdGUuZW50cnksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGU6IHJlbW90ZUluZm8udHlwZSB8fCAnZ2xvYmFsJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZW50cnlHbG9iYWxOYW1lOiAnJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZTogJydcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYXNzaWduUmVtb3RlSW5mbyhyZW1vdGVJbmZvLCByZW1vdGVTbmFwc2hvdCk7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBnZW5lcmF0ZVByZWxvYWRBc3NldHMob3JpZ2luLCBwcmVsb2FkT3B0aW9ucywgcmVtb3RlSW5mbywgZ2xvYmFsU25hcHNob3QsIHJlbW90ZVNuYXBzaG90KTtcbiAgICAgICAgICAgIHJldHVybiBhc3NldHM7XG4gICAgICAgIH1cbiAgICB9O1xufTtcblxuZnVuY3Rpb24gZ2V0R2xvYmFsUmVtb3RlSW5mbyhtb2R1bGVJbmZvLCBvcmlnaW4pIHtcbiAgICBjb25zdCBob3N0R2xvYmFsU25hcHNob3QgPSBnZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8oe1xuICAgICAgICBuYW1lOiBvcmlnaW4ubmFtZSxcbiAgICAgICAgdmVyc2lvbjogb3JpZ2luLm9wdGlvbnMudmVyc2lvblxuICAgIH0pO1xuICAgIC8vIGdldCByZW1vdGUgZGV0YWlsIGluZm8gZnJvbSBnbG9iYWxcbiAgICBjb25zdCBnbG9iYWxSZW1vdGVJbmZvID0gaG9zdEdsb2JhbFNuYXBzaG90ICYmICdyZW1vdGVzSW5mbycgaW4gaG9zdEdsb2JhbFNuYXBzaG90ICYmIGhvc3RHbG9iYWxTbmFwc2hvdC5yZW1vdGVzSW5mbyAmJiBnZXRJbmZvV2l0aG91dFR5cGUoaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvLCBtb2R1bGVJbmZvLm5hbWUpLnZhbHVlO1xuICAgIGlmIChnbG9iYWxSZW1vdGVJbmZvICYmIGdsb2JhbFJlbW90ZUluZm8ubWF0Y2hlZFZlcnNpb24pIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhvc3RHbG9iYWxTbmFwc2hvdCxcbiAgICAgICAgICAgIGdsb2JhbFNuYXBzaG90OiBnZXRHbG9iYWxTbmFwc2hvdCgpLFxuICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyh7XG4gICAgICAgICAgICAgICAgbmFtZTogbW9kdWxlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGdsb2JhbFJlbW90ZUluZm8ubWF0Y2hlZFZlcnNpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgIGhvc3RHbG9iYWxTbmFwc2hvdDogdW5kZWZpbmVkLFxuICAgICAgICBnbG9iYWxTbmFwc2hvdDogZ2V0R2xvYmFsU25hcHNob3QoKSxcbiAgICAgICAgcmVtb3RlU25hcHNob3Q6IGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyh7XG4gICAgICAgICAgICBuYW1lOiBtb2R1bGVJbmZvLm5hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiAndmVyc2lvbicgaW4gbW9kdWxlSW5mbyA/IG1vZHVsZUluZm8udmVyc2lvbiA6IHVuZGVmaW5lZFxuICAgICAgICB9KVxuICAgIH07XG59XG5jbGFzcyBTbmFwc2hvdEhhbmRsZXIge1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG4gICAgYXN5bmMgbG9hZFJlbW90ZVNuYXBzaG90SW5mbyh7IG1vZHVsZUluZm8sIGlkLCBleHBvc2UgfSkge1xuICAgICAgICBjb25zdCB7IG9wdGlvbnMgfSA9IHRoaXMuSG9zdEluc3RhbmNlO1xuICAgICAgICBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVMb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgbW9kdWxlSW5mb1xuICAgICAgICB9KTtcbiAgICAgICAgbGV0IGhvc3RTbmFwc2hvdCA9IGdldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyh7XG4gICAgICAgICAgICBuYW1lOiB0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiB0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLnZlcnNpb25cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaG9zdFNuYXBzaG90KSB7XG4gICAgICAgICAgICBob3N0U25hcHNob3QgPSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbjogdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucy52ZXJzaW9uIHx8ICcnLFxuICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5OiAnJyxcbiAgICAgICAgICAgICAgICByZW1vdGVzSW5mbzoge31cbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBhZGRHbG9iYWxTbmFwc2hvdCh7XG4gICAgICAgICAgICAgICAgW3RoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMubmFtZV06IGhvc3RTbmFwc2hvdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8gSW4gZHluYW1pYyBsb2FkUmVtb3RlIHNjZW5hcmlvcywgaW5jb21wbGV0ZSByZW1vdGVzSW5mbyBkZWxpdmVyeSBtYXkgb2NjdXIuIEluIHN1Y2ggY2FzZXMsIHRoZSByZW1vdGVzSW5mbyBpbiB0aGUgaG9zdCBuZWVkcyB0byBiZSBjb21wbGV0ZWQgaW4gdGhlIHNuYXBzaG90IGF0IHJ1bnRpbWUuXG4gICAgICAgIC8vIFRoaXMgZW5zdXJlcyB0aGUgc25hcHNob3QncyBpbnRlZ3JpdHkgYW5kIGhlbHBzIHRoZSBjaHJvbWUgcGx1Z2luIGNvcnJlY3RseSBpZGVudGlmeSBhbGwgcHJvZHVjZXIgbW9kdWxlcywgZW5zdXJpbmcgdGhhdCBwcm94eWFibGUgcHJvZHVjZXIgbW9kdWxlcyB3aWxsIG5vdCBiZSBtaXNzaW5nLlxuICAgICAgICBpZiAoaG9zdFNuYXBzaG90ICYmICdyZW1vdGVzSW5mbycgaW4gaG9zdFNuYXBzaG90ICYmICFnZXRJbmZvV2l0aG91dFR5cGUoaG9zdFNuYXBzaG90LnJlbW90ZXNJbmZvLCBtb2R1bGVJbmZvLm5hbWUpLnZhbHVlKSB7XG4gICAgICAgICAgICBpZiAoJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gfHwgJ2VudHJ5JyBpbiBtb2R1bGVJbmZvKSB7XG4gICAgICAgICAgICAgICAgaG9zdFNuYXBzaG90LnJlbW90ZXNJbmZvID0gX2V4dGVuZHMoe30sIGhvc3RTbmFwc2hvdCA9PSBudWxsID8gdm9pZCAwIDogaG9zdFNuYXBzaG90LnJlbW90ZXNJbmZvLCB7XG4gICAgICAgICAgICAgICAgICAgIFttb2R1bGVJbmZvLm5hbWVdOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvbjogJ3ZlcnNpb24nIGluIG1vZHVsZUluZm8gPyBtb2R1bGVJbmZvLnZlcnNpb24gOiBtb2R1bGVJbmZvLmVudHJ5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGhvc3RHbG9iYWxTbmFwc2hvdCwgcmVtb3RlU25hcHNob3QsIGdsb2JhbFNuYXBzaG90IH0gPSB0aGlzLmdldEdsb2JhbFJlbW90ZUluZm8obW9kdWxlSW5mbyk7XG4gICAgICAgIGNvbnN0IHsgcmVtb3RlU25hcHNob3Q6IGdsb2JhbFJlbW90ZVNuYXBzaG90LCBnbG9iYWxTbmFwc2hvdDogZ2xvYmFsU25hcHNob3RSZXMgfSA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmxvYWRTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgIG9wdGlvbnMsXG4gICAgICAgICAgICBtb2R1bGVJbmZvLFxuICAgICAgICAgICAgaG9zdEdsb2JhbFNuYXBzaG90LFxuICAgICAgICAgICAgcmVtb3RlU25hcHNob3QsXG4gICAgICAgICAgICBnbG9iYWxTbmFwc2hvdFxuICAgICAgICB9KTtcbiAgICAgICAgbGV0IG1TbmFwc2hvdDtcbiAgICAgICAgbGV0IGdTbmFwc2hvdDtcbiAgICAgICAgLy8gZ2xvYmFsIHNuYXBzaG90IGluY2x1ZGVzIG1hbmlmZXN0IG9yIG1vZHVsZSBpbmZvIGluY2x1ZGVzIG1hbmlmZXN0XG4gICAgICAgIGlmIChnbG9iYWxSZW1vdGVTbmFwc2hvdCkge1xuICAgICAgICAgICAgaWYgKGlzTWFuaWZlc3RQcm92aWRlcihnbG9iYWxSZW1vdGVTbmFwc2hvdCkpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVFbnRyeSA9IGlzQnJvd3NlckVudigpID8gZ2xvYmFsUmVtb3RlU25hcHNob3QucmVtb3RlRW50cnkgOiBnbG9iYWxSZW1vdGVTbmFwc2hvdC5zc3JSZW1vdGVFbnRyeSB8fCBnbG9iYWxSZW1vdGVTbmFwc2hvdC5yZW1vdGVFbnRyeSB8fCAnJztcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGVTbmFwc2hvdCA9IGF3YWl0IHRoaXMuZ2V0TWFuaWZlc3RKc29uKHJlbW90ZUVudHJ5LCBtb2R1bGVJbmZvLCB7fSk7XG4gICAgICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1zaGFkb3dcbiAgICAgICAgICAgICAgICBjb25zdCBnbG9iYWxTbmFwc2hvdFJlcyA9IHNldEdsb2JhbFNuYXBzaG90SW5mb0J5TW9kdWxlSW5mbyhfZXh0ZW5kcyh7fSwgbW9kdWxlSW5mbywge1xuICAgICAgICAgICAgICAgICAgICAvLyBUaGUgZ2xvYmFsIHJlbW90ZSBtYXkgYmUgb3ZlcnJpZGRlblxuICAgICAgICAgICAgICAgICAgICAvLyBUaGVyZWZvcmUsIHNldCB0aGUgc25hcHNob3Qga2V5IHRvIHRoZSBnbG9iYWwgYWRkcmVzcyBvZiB0aGUgYWN0dWFsIHJlcXVlc3RcbiAgICAgICAgICAgICAgICAgICAgZW50cnk6IHJlbW90ZUVudHJ5XG4gICAgICAgICAgICAgICAgfSksIG1vZHVsZVNuYXBzaG90KTtcbiAgICAgICAgICAgICAgICBtU25hcHNob3QgPSBtb2R1bGVTbmFwc2hvdDtcbiAgICAgICAgICAgICAgICBnU25hcHNob3QgPSBnbG9iYWxTbmFwc2hvdFJlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc3QgeyByZW1vdGVTbmFwc2hvdDogcmVtb3RlU25hcHNob3RSZXMgfSA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmxvYWRSZW1vdGVTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogdGhpcy5Ib3N0SW5zdGFuY2Uub3B0aW9ucyxcbiAgICAgICAgICAgICAgICAgICAgbW9kdWxlSW5mbyxcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3Q6IGdsb2JhbFJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgICAgICAgICBmcm9tOiAnZ2xvYmFsJ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIG1TbmFwc2hvdCA9IHJlbW90ZVNuYXBzaG90UmVzO1xuICAgICAgICAgICAgICAgIGdTbmFwc2hvdCA9IGdsb2JhbFNuYXBzaG90UmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGlzUmVtb3RlSW5mb1dpdGhFbnRyeShtb2R1bGVJbmZvKSkge1xuICAgICAgICAgICAgICAgIC8vIGdldCBmcm9tIG1hbmlmZXN0Lmpzb24gYW5kIG1lcmdlIHJlbW90ZSBpbmZvIGZyb20gcmVtb3RlIHNlcnZlclxuICAgICAgICAgICAgICAgIGNvbnN0IG1vZHVsZVNuYXBzaG90ID0gYXdhaXQgdGhpcy5nZXRNYW5pZmVzdEpzb24obW9kdWxlSW5mby5lbnRyeSwgbW9kdWxlSW5mbywge30pO1xuICAgICAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbm8tc2hhZG93XG4gICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsU25hcHNob3RSZXMgPSBzZXRHbG9iYWxTbmFwc2hvdEluZm9CeU1vZHVsZUluZm8obW9kdWxlSW5mbywgbW9kdWxlU25hcHNob3QpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlU25hcHNob3Q6IHJlbW90ZVNuYXBzaG90UmVzIH0gPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5sb2FkUmVtb3RlU25hcHNob3QuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6IHRoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiBtb2R1bGVTbmFwc2hvdCxcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ2dsb2JhbCdcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBtU25hcHNob3QgPSByZW1vdGVTbmFwc2hvdFJlcztcbiAgICAgICAgICAgICAgICBnU25hcHNob3QgPSBnbG9iYWxTbmFwc2hvdFJlcztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXJyb3IoZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwNywgcnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IG1vZHVsZUluZm8ubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgaG9zdFZlcnNpb246IG1vZHVsZUluZm8udmVyc2lvbixcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsU25hcHNob3Q6IEpTT04uc3RyaW5naWZ5KGdsb2JhbFNuYXBzaG90UmVzKVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5hZnRlckxvYWRTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgaG9zdDogdGhpcy5Ib3N0SW5zdGFuY2UsXG4gICAgICAgICAgICBvcHRpb25zLFxuICAgICAgICAgICAgbW9kdWxlSW5mbyxcbiAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90OiBtU25hcHNob3RcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICByZW1vdGVTbmFwc2hvdDogbVNuYXBzaG90LFxuICAgICAgICAgICAgZ2xvYmFsU25hcHNob3Q6IGdTbmFwc2hvdFxuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXRHbG9iYWxSZW1vdGVJbmZvKG1vZHVsZUluZm8pIHtcbiAgICAgICAgcmV0dXJuIGdldEdsb2JhbFJlbW90ZUluZm8obW9kdWxlSW5mbywgdGhpcy5Ib3N0SW5zdGFuY2UpO1xuICAgIH1cbiAgICBhc3luYyBnZXRNYW5pZmVzdEpzb24obWFuaWZlc3RVcmwsIG1vZHVsZUluZm8sIGV4dHJhT3B0aW9ucykge1xuICAgICAgICBjb25zdCBnZXRNYW5pZmVzdCA9IGFzeW5jICgpPT57XG4gICAgICAgICAgICBsZXQgbWFuaWZlc3RKc29uID0gdGhpcy5tYW5pZmVzdENhY2hlLmdldChtYW5pZmVzdFVybCk7XG4gICAgICAgICAgICBpZiAobWFuaWZlc3RKc29uKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG1hbmlmZXN0SnNvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgbGV0IHJlcyA9IGF3YWl0IHRoaXMubG9hZGVySG9vay5saWZlY3ljbGUuZmV0Y2guZW1pdChtYW5pZmVzdFVybCwge30pO1xuICAgICAgICAgICAgICAgIGlmICghcmVzIHx8ICEocmVzIGluc3RhbmNlb2YgUmVzcG9uc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlcyA9IGF3YWl0IGZldGNoKG1hbmlmZXN0VXJsLCB7fSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIG1hbmlmZXN0SnNvbiA9IGF3YWl0IHJlcy5qc29uKCk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBtYW5pZmVzdEpzb24gPSBhd2FpdCB0aGlzLkhvc3RJbnN0YW5jZS5yZW1vdGVIYW5kbGVyLmhvb2tzLmxpZmVjeWNsZS5lcnJvckxvYWRSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgICAgIGlkOiBtYW5pZmVzdFVybCxcbiAgICAgICAgICAgICAgICAgICAgZXJyb3I6IGVycixcbiAgICAgICAgICAgICAgICAgICAgZnJvbTogJ3J1bnRpbWUnLFxuICAgICAgICAgICAgICAgICAgICBsaWZlY3ljbGU6ICdhZnRlclJlc29sdmUnLFxuICAgICAgICAgICAgICAgICAgICBvcmlnaW46IHRoaXMuSG9zdEluc3RhbmNlXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKCFtYW5pZmVzdEpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXTtcbiAgICAgICAgICAgICAgICAgICAgZXJyb3IoZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwMywgcnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG1hbmlmZXN0VXJsLFxuICAgICAgICAgICAgICAgICAgICAgICAgbW9kdWxlTmFtZTogbW9kdWxlSW5mby5uYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgaG9zdE5hbWU6IHRoaXMuSG9zdEluc3RhbmNlLm9wdGlvbnMubmFtZVxuICAgICAgICAgICAgICAgICAgICB9LCBgJHtlcnJ9YCkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFzc2VydChtYW5pZmVzdEpzb24ubWV0YURhdGEgJiYgbWFuaWZlc3RKc29uLmV4cG9zZXMgJiYgbWFuaWZlc3RKc29uLnNoYXJlZCwgYCR7bWFuaWZlc3RVcmx9IGlzIG5vdCBhIGZlZGVyYXRpb24gbWFuaWZlc3RgKTtcbiAgICAgICAgICAgIHRoaXMubWFuaWZlc3RDYWNoZS5zZXQobWFuaWZlc3RVcmwsIG1hbmlmZXN0SnNvbik7XG4gICAgICAgICAgICByZXR1cm4gbWFuaWZlc3RKc29uO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBhc3luY0xvYWRQcm9jZXNzID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgIGNvbnN0IG1hbmlmZXN0SnNvbiA9IGF3YWl0IGdldE1hbmlmZXN0KCk7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVTbmFwc2hvdCA9IGdlbmVyYXRlU25hcHNob3RGcm9tTWFuaWZlc3QobWFuaWZlc3RKc29uLCB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbjogbWFuaWZlc3RVcmxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY29uc3QgeyByZW1vdGVTbmFwc2hvdDogcmVtb3RlU25hcHNob3RSZXMgfSA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmxvYWRSZW1vdGVTbmFwc2hvdC5lbWl0KHtcbiAgICAgICAgICAgICAgICBvcHRpb25zOiB0aGlzLkhvc3RJbnN0YW5jZS5vcHRpb25zLFxuICAgICAgICAgICAgICAgIG1vZHVsZUluZm8sXG4gICAgICAgICAgICAgICAgbWFuaWZlc3RKc29uLFxuICAgICAgICAgICAgICAgIHJlbW90ZVNuYXBzaG90LFxuICAgICAgICAgICAgICAgIG1hbmlmZXN0VXJsLFxuICAgICAgICAgICAgICAgIGZyb206ICdtYW5pZmVzdCdcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIHJlbW90ZVNuYXBzaG90UmVzO1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIXRoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXSkge1xuICAgICAgICAgICAgdGhpcy5tYW5pZmVzdExvYWRpbmdbbWFuaWZlc3RVcmxdID0gYXN5bmNMb2FkUHJvY2VzcygpLnRoZW4oKHJlcyk9PnJlcyk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRoaXMubWFuaWZlc3RMb2FkaW5nW21hbmlmZXN0VXJsXTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IoSG9zdEluc3RhbmNlKXtcbiAgICAgICAgdGhpcy5sb2FkaW5nSG9zdFNuYXBzaG90ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tYW5pZmVzdENhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IFBsdWdpblN5c3RlbSh7XG4gICAgICAgICAgICBiZWZvcmVMb2FkUmVtb3RlU25hcHNob3Q6IG5ldyBBc3luY0hvb2soJ2JlZm9yZUxvYWRSZW1vdGVTbmFwc2hvdCcpLFxuICAgICAgICAgICAgbG9hZFNuYXBzaG90OiBuZXcgQXN5bmNXYXRlcmZhbGxIb29rKCdsb2FkR2xvYmFsU25hcHNob3QnKSxcbiAgICAgICAgICAgIGxvYWRSZW1vdGVTbmFwc2hvdDogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnbG9hZFJlbW90ZVNuYXBzaG90JyksXG4gICAgICAgICAgICBhZnRlckxvYWRTbmFwc2hvdDogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYWZ0ZXJMb2FkU25hcHNob3QnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5tYW5pZmVzdExvYWRpbmcgPSBHbG9iYWwuX19GRURFUkFUSU9OX18uX19NQU5JRkVTVF9MT0FESU5HX187XG4gICAgICAgIHRoaXMuSG9zdEluc3RhbmNlID0gSG9zdEluc3RhbmNlO1xuICAgICAgICB0aGlzLmxvYWRlckhvb2sgPSBIb3N0SW5zdGFuY2UubG9hZGVySG9vaztcbiAgICB9XG59XG5cbmNsYXNzIFNoYXJlZEhhbmRsZXIge1xuICAgIC8vIHJlZ2lzdGVyIHNoYXJlZCBpbiBzaGFyZVNjb3BlTWFwXG4gICAgcmVnaXN0ZXJTaGFyZWQoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBzaGFyZUluZm9zLCBzaGFyZWQgfSA9IGZvcm1hdFNoYXJlQ29uZmlncyhnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHNoYXJlZEtleXMgPSBPYmplY3Qua2V5cyhzaGFyZUluZm9zKTtcbiAgICAgICAgc2hhcmVkS2V5cy5mb3JFYWNoKChzaGFyZWRLZXkpPT57XG4gICAgICAgICAgICBjb25zdCBzaGFyZWRWYWxzID0gc2hhcmVJbmZvc1tzaGFyZWRLZXldO1xuICAgICAgICAgICAgc2hhcmVkVmFscy5mb3JFYWNoKChzaGFyZWRWYWwpPT57XG4gICAgICAgICAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFNoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZSh0aGlzLnNoYXJlU2NvcGVNYXAsIHNoYXJlZEtleSwgc2hhcmVkVmFsLCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICAgICAgICAgIGlmICghcmVnaXN0ZXJlZFNoYXJlZCAmJiBzaGFyZWRWYWwgJiYgc2hhcmVkVmFsLmxpYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwa2dOYW1lOiBzaGFyZWRLZXksXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWI6IHNoYXJlZFZhbC5saWIsXG4gICAgICAgICAgICAgICAgICAgICAgICBnZXQ6IHNoYXJlZFZhbC5nZXQsXG4gICAgICAgICAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZWQ6IHNoYXJlZFZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGZyb206IHVzZXJPcHRpb25zLm5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgc2hhcmVJbmZvcyxcbiAgICAgICAgICAgIHNoYXJlZFxuICAgICAgICB9O1xuICAgIH1cbiAgICBhc3luYyBsb2FkU2hhcmUocGtnTmFtZSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgLy8gVGhpcyBmdW5jdGlvbiBwZXJmb3JtcyB0aGUgZm9sbG93aW5nIHN0ZXBzOlxuICAgICAgICAvLyAxLiBDaGVja3MgaWYgdGhlIGN1cnJlbnRseSBsb2FkZWQgc2hhcmUgYWxyZWFkeSBleGlzdHMsIGlmIG5vdCwgaXQgdGhyb3dzIGFuIGVycm9yXG4gICAgICAgIC8vIDIuIFNlYXJjaGVzIGdsb2JhbGx5IGZvciBhIG1hdGNoaW5nIHNoYXJlLCBpZiBmb3VuZCwgaXQgdXNlcyBpdCBkaXJlY3RseVxuICAgICAgICAvLyAzLiBJZiBub3QgZm91bmQsIGl0IHJldHJpZXZlcyBpdCBmcm9tIHRoZSBjdXJyZW50IHNoYXJlIGFuZCBzdG9yZXMgdGhlIG9idGFpbmVkIHNoYXJlIGdsb2JhbGx5LlxuICAgICAgICBjb25zdCBzaGFyZU9wdGlvbnMgPSBnZXRUYXJnZXRTaGFyZWRPcHRpb25zKHtcbiAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICBleHRyYU9wdGlvbnMsXG4gICAgICAgICAgICBzaGFyZUluZm9zOiBob3N0Lm9wdGlvbnMuc2hhcmVkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hhcmVPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBzaGFyZU9wdGlvbnMuc2NvcGUpIHtcbiAgICAgICAgICAgIGF3YWl0IFByb21pc2UuYWxsKHNoYXJlT3B0aW9ucy5zY29wZS5tYXAoYXN5bmMgKHNoYXJlU2NvcGUpPT57XG4gICAgICAgICAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwodGhpcy5pbml0aWFsaXplU2hhcmluZyhzaGFyZVNjb3BlLCB7XG4gICAgICAgICAgICAgICAgICAgIHN0cmF0ZWd5OiBzaGFyZU9wdGlvbnMuc3RyYXRlZ3lcbiAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSkpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvYWRTaGFyZVJlcyA9IGF3YWl0IHRoaXMuaG9va3MubGlmZWN5Y2xlLmJlZm9yZUxvYWRTaGFyZS5lbWl0KHtcbiAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICBzaGFyZUluZm86IHNoYXJlT3B0aW9ucyxcbiAgICAgICAgICAgIHNoYXJlZDogaG9zdC5vcHRpb25zLnNoYXJlZCxcbiAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgeyBzaGFyZUluZm86IHNoYXJlT3B0aW9uc1JlcyB9ID0gbG9hZFNoYXJlUmVzO1xuICAgICAgICAvLyBBc3NlcnQgdGhhdCBzaGFyZUluZm9SZXMgZXhpc3RzLCBpZiBub3QsIHRocm93IGFuIGVycm9yXG4gICAgICAgIGFzc2VydChzaGFyZU9wdGlvbnNSZXMsIGBDYW5ub3QgZmluZCAke3BrZ05hbWV9IFNoYXJlIGluIHRoZSAke2hvc3Qub3B0aW9ucy5uYW1lfS4gUGxlYXNlIGVuc3VyZSB0aGF0IHRoZSAke3BrZ05hbWV9IFNoYXJlIHBhcmFtZXRlcnMgaGF2ZSBiZWVuIGluamVjdGVkYCk7XG4gICAgICAgIC8vIFJldHJpZXZlIGZyb20gY2FjaGVcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJlZFNoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZSh0aGlzLnNoYXJlU2NvcGVNYXAsIHBrZ05hbWUsIHNoYXJlT3B0aW9uc1JlcywgdGhpcy5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgY29uc3QgYWRkVXNlSW4gPSAoc2hhcmVkKT0+e1xuICAgICAgICAgICAgaWYgKCFzaGFyZWQudXNlSW4pIHtcbiAgICAgICAgICAgICAgICBzaGFyZWQudXNlSW4gPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGFkZFVuaXF1ZUl0ZW0oc2hhcmVkLnVzZUluLCBob3N0Lm9wdGlvbnMubmFtZSk7XG4gICAgICAgIH07XG4gICAgICAgIGlmIChyZWdpc3RlcmVkU2hhcmVkICYmIHJlZ2lzdGVyZWRTaGFyZWQubGliKSB7XG4gICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkU2hhcmVkLmxpYjtcbiAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkU2hhcmVkICYmIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGluZyAmJiAhcmVnaXN0ZXJlZFNoYXJlZC5sb2FkZWQpIHtcbiAgICAgICAgICAgIGNvbnN0IGZhY3RvcnkgPSBhd2FpdCByZWdpc3RlcmVkU2hhcmVkLmxvYWRpbmc7XG4gICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICBpZiAoIXJlZ2lzdGVyZWRTaGFyZWQubGliKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVXNlSW4ocmVnaXN0ZXJlZFNoYXJlZCk7XG4gICAgICAgICAgICByZXR1cm4gZmFjdG9yeTtcbiAgICAgICAgfSBlbHNlIGlmIChyZWdpc3RlcmVkU2hhcmVkKSB7XG4gICAgICAgICAgICBjb25zdCBhc3luY0xvYWRQcm9jZXNzID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gYXdhaXQgcmVnaXN0ZXJlZFNoYXJlZC5nZXQoKTtcbiAgICAgICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgICAgICByZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhc3luY0xvYWRQcm9jZXNzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgcGtnTmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNoYXJlZDogcmVnaXN0ZXJlZFNoYXJlZCxcbiAgICAgICAgICAgICAgICBmcm9tOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgICAgICBsaWI6IG51bGwsXG4gICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gbG9hZGluZztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGlmIChleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5jdXN0b21TaGFyZUluZm8pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBhc3luY0xvYWRQcm9jZXNzID0gYXN5bmMgKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBmYWN0b3J5ID0gYXdhaXQgc2hhcmVPcHRpb25zUmVzLmdldCgpO1xuICAgICAgICAgICAgICAgIHNoYXJlT3B0aW9uc1Jlcy5saWIgPSBmYWN0b3J5O1xuICAgICAgICAgICAgICAgIHNoYXJlT3B0aW9uc1Jlcy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGFkZFVzZUluKHNoYXJlT3B0aW9uc1Jlcyk7XG4gICAgICAgICAgICAgICAgY29uc3QgZ1NoYXJlZCA9IGdldFJlZ2lzdGVyZWRTaGFyZSh0aGlzLnNoYXJlU2NvcGVNYXAsIHBrZ05hbWUsIHNoYXJlT3B0aW9uc1JlcywgdGhpcy5ob29rcy5saWZlY3ljbGUucmVzb2x2ZVNoYXJlKTtcbiAgICAgICAgICAgICAgICBpZiAoZ1NoYXJlZCkge1xuICAgICAgICAgICAgICAgICAgICBnU2hhcmVkLmxpYiA9IGZhY3Rvcnk7XG4gICAgICAgICAgICAgICAgICAgIGdTaGFyZWQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgZ1NoYXJlZC5mcm9tID0gc2hhcmVPcHRpb25zUmVzLmZyb207XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGxvYWRpbmcgPSBhc3luY0xvYWRQcm9jZXNzKCk7XG4gICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgcGtnTmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNoYXJlZDogc2hhcmVPcHRpb25zUmVzLFxuICAgICAgICAgICAgICAgIGZyb206IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgICAgIGxpYjogbnVsbCxcbiAgICAgICAgICAgICAgICBsb2FkaW5nXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBsb2FkaW5nO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFRoaXMgZnVuY3Rpb24gaW5pdGlhbGl6ZXMgdGhlIHNoYXJpbmcgc2VxdWVuY2UgKGV4ZWN1dGVkIG9ubHkgb25jZSBwZXIgc2hhcmUgc2NvcGUpLlxuICAgICAqIEl0IGFjY2VwdHMgb25lIGFyZ3VtZW50LCB0aGUgbmFtZSBvZiB0aGUgc2hhcmUgc2NvcGUuXG4gICAgICogSWYgdGhlIHNoYXJlIHNjb3BlIGRvZXMgbm90IGV4aXN0LCBpdCBjcmVhdGVzIG9uZS5cbiAgICAgKi8gLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICBpbml0aWFsaXplU2hhcmluZyhzaGFyZVNjb3BlTmFtZSA9IERFRkFVTFRfU0NPUEUsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IGZyb20gPSBleHRyYU9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IGV4dHJhT3B0aW9ucy5mcm9tO1xuICAgICAgICBjb25zdCBzdHJhdGVneSA9IGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLnN0cmF0ZWd5O1xuICAgICAgICBsZXQgaW5pdFNjb3BlID0gZXh0cmFPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBleHRyYU9wdGlvbnMuaW5pdFNjb3BlO1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IFtdO1xuICAgICAgICBpZiAoZnJvbSAhPT0gJ2J1aWxkJykge1xuICAgICAgICAgICAgY29uc3QgeyBpbml0VG9rZW5zIH0gPSB0aGlzO1xuICAgICAgICAgICAgaWYgKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuICAgICAgICAgICAgbGV0IGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZU5hbWVdO1xuICAgICAgICAgICAgaWYgKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZU5hbWVdID0ge1xuICAgICAgICAgICAgICAgIGZyb206IHRoaXMuaG9zdC5uYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgaWYgKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuIHByb21pc2VzO1xuICAgICAgICAgICAgaW5pdFNjb3BlLnB1c2goaW5pdFRva2VuKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzaGFyZVNjb3BlID0gdGhpcy5zaGFyZVNjb3BlTWFwO1xuICAgICAgICBjb25zdCBob3N0TmFtZSA9IGhvc3Qub3B0aW9ucy5uYW1lO1xuICAgICAgICAvLyBDcmVhdGVzIGEgbmV3IHNoYXJlIHNjb3BlIGlmIG5lY2Vzc2FyeVxuICAgICAgICBpZiAoIXNoYXJlU2NvcGVbc2hhcmVTY29wZU5hbWVdKSB7XG4gICAgICAgICAgICBzaGFyZVNjb3BlW3NoYXJlU2NvcGVOYW1lXSA9IHt9O1xuICAgICAgICB9XG4gICAgICAgIC8vIEV4ZWN1dGVzIGFsbCBpbml0aWFsaXphdGlvbiBzbmlwcGV0cyBmcm9tIGFsbCBhY2Nlc3NpYmxlIG1vZHVsZXNcbiAgICAgICAgY29uc3Qgc2NvcGUgPSBzaGFyZVNjb3BlW3NoYXJlU2NvcGVOYW1lXTtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXIgPSAobmFtZSwgc2hhcmVkKT0+e1xuICAgICAgICAgICAgdmFyIF9hY3RpdmVWZXJzaW9uX3NoYXJlQ29uZmlnO1xuICAgICAgICAgICAgY29uc3QgeyB2ZXJzaW9uLCBlYWdlciB9ID0gc2hhcmVkO1xuICAgICAgICAgICAgc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcbiAgICAgICAgICAgIGNvbnN0IHZlcnNpb25zID0gc2NvcGVbbmFtZV07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWZXJzaW9uID0gdmVyc2lvbnNbdmVyc2lvbl07XG4gICAgICAgICAgICBjb25zdCBhY3RpdmVWZXJzaW9uRWFnZXIgPSBCb29sZWFuKGFjdGl2ZVZlcnNpb24gJiYgKGFjdGl2ZVZlcnNpb24uZWFnZXIgfHwgKChfYWN0aXZlVmVyc2lvbl9zaGFyZUNvbmZpZyA9IGFjdGl2ZVZlcnNpb24uc2hhcmVDb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfYWN0aXZlVmVyc2lvbl9zaGFyZUNvbmZpZy5lYWdlcikpKTtcbiAgICAgICAgICAgIGlmICghYWN0aXZlVmVyc2lvbiB8fCBhY3RpdmVWZXJzaW9uLnN0cmF0ZWd5ICE9PSAnbG9hZGVkLWZpcnN0JyAmJiAhYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKEJvb2xlYW4oIWVhZ2VyKSAhPT0gIWFjdGl2ZVZlcnNpb25FYWdlciA/IGVhZ2VyIDogaG9zdE5hbWUgPiBhY3RpdmVWZXJzaW9uLmZyb20pKSB7XG4gICAgICAgICAgICAgICAgdmVyc2lvbnNbdmVyc2lvbl0gPSBzaGFyZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGluaXRGbiA9IChtb2QpPT5tb2QgJiYgbW9kLmluaXQgJiYgbW9kLmluaXQoc2hhcmVTY29wZVtzaGFyZVNjb3BlTmFtZV0sIGluaXRTY29wZSk7XG4gICAgICAgIGNvbnN0IGluaXRSZW1vdGVNb2R1bGUgPSBhc3luYyAoa2V5KT0+e1xuICAgICAgICAgICAgY29uc3QgeyBtb2R1bGUgfSA9IGF3YWl0IGhvc3QucmVtb3RlSGFuZGxlci5nZXRSZW1vdGVNb2R1bGVBbmRPcHRpb25zKHtcbiAgICAgICAgICAgICAgICBpZDoga2V5XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUuZ2V0RW50cnkpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVtb3RlRW50cnlFeHBvcnRzO1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyA9IGF3YWl0IG1vZHVsZS5nZXRFbnRyeSgpO1xuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlbW90ZUVudHJ5RXhwb3J0cyA9IGF3YWl0IGhvc3QucmVtb3RlSGFuZGxlci5ob29rcy5saWZlY3ljbGUuZXJyb3JMb2FkUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaWQ6IGtleSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogJ3J1bnRpbWUnLFxuICAgICAgICAgICAgICAgICAgICAgICAgbGlmZWN5Y2xlOiAnYmVmb3JlTG9hZFNoYXJlJyxcbiAgICAgICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFtb2R1bGUuaW5pdGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGluaXRGbihyZW1vdGVFbnRyeUV4cG9ydHMpO1xuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5pdGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIE9iamVjdC5rZXlzKGhvc3Qub3B0aW9ucy5zaGFyZWQpLmZvckVhY2goKHNoYXJlTmFtZSk9PntcbiAgICAgICAgICAgIGNvbnN0IHNoYXJlZEFyciA9IGhvc3Qub3B0aW9ucy5zaGFyZWRbc2hhcmVOYW1lXTtcbiAgICAgICAgICAgIHNoYXJlZEFyci5mb3JFYWNoKChzaGFyZWQpPT57XG4gICAgICAgICAgICAgICAgaWYgKHNoYXJlZC5zY29wZS5pbmNsdWRlcyhzaGFyZVNjb3BlTmFtZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVnaXN0ZXIoc2hhcmVOYW1lLCBzaGFyZWQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgLy8gVE9ETzogc3RyYXRlZ3k9PT0ndmVyc2lvbi1maXJzdCcgbmVlZCB0byBiZSByZW1vdmVkIGluIHRoZSBmdXR1cmVcbiAgICAgICAgaWYgKGhvc3Qub3B0aW9ucy5zaGFyZVN0cmF0ZWd5ID09PSAndmVyc2lvbi1maXJzdCcgfHwgc3RyYXRlZ3kgPT09ICd2ZXJzaW9uLWZpcnN0Jykge1xuICAgICAgICAgICAgaG9zdC5vcHRpb25zLnJlbW90ZXMuZm9yRWFjaCgocmVtb3RlKT0+e1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGUuc2hhcmVTY29wZSA9PT0gc2hhcmVTY29wZU5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbml0UmVtb3RlTW9kdWxlKHJlbW90ZS5uYW1lKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHByb21pc2VzO1xuICAgIH1cbiAgICAvLyBUaGUgbGliIGZ1bmN0aW9uIHdpbGwgb25seSBiZSBhdmFpbGFibGUgaWYgdGhlIHNoYXJlZCBzZXQgYnkgZWFnZXIgb3IgcnVudGltZSBpbml0IGlzIHNldCBvciB0aGUgc2hhcmVkIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgLy8gMS4gSWYgdGhlIGxvYWRlZCBzaGFyZWQgYWxyZWFkeSBleGlzdHMgZ2xvYmFsbHksIHRoZW4gaXQgd2lsbCBiZSByZXVzZWRcbiAgICAvLyAyLiBJZiBsaWIgZXhpc3RzIGluIGxvY2FsIHNoYXJlZCwgaXQgd2lsbCBiZSB1c2VkIGRpcmVjdGx5XG4gICAgLy8gMy4gSWYgdGhlIGxvY2FsIGdldCByZXR1cm5zIHNvbWV0aGluZyBvdGhlciB0aGFuIFByb21pc2UsIHRoZW4gaXQgd2lsbCBiZSB1c2VkIGRpcmVjdGx5XG4gICAgbG9hZFNoYXJlU3luYyhwa2dOYW1lLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICBjb25zdCBzaGFyZU9wdGlvbnMgPSBnZXRUYXJnZXRTaGFyZWRPcHRpb25zKHtcbiAgICAgICAgICAgIHBrZ05hbWUsXG4gICAgICAgICAgICBleHRyYU9wdGlvbnMsXG4gICAgICAgICAgICBzaGFyZUluZm9zOiBob3N0Lm9wdGlvbnMuc2hhcmVkXG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoc2hhcmVPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBzaGFyZU9wdGlvbnMuc2NvcGUpIHtcbiAgICAgICAgICAgIHNoYXJlT3B0aW9ucy5zY29wZS5mb3JFYWNoKChzaGFyZVNjb3BlKT0+e1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZSwge1xuICAgICAgICAgICAgICAgICAgICBzdHJhdGVneTogc2hhcmVPcHRpb25zLnN0cmF0ZWd5XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWdpc3RlcmVkU2hhcmVkID0gZ2V0UmVnaXN0ZXJlZFNoYXJlKHRoaXMuc2hhcmVTY29wZU1hcCwgcGtnTmFtZSwgc2hhcmVPcHRpb25zLCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5yZXNvbHZlU2hhcmUpO1xuICAgICAgICBjb25zdCBhZGRVc2VJbiA9IChzaGFyZWQpPT57XG4gICAgICAgICAgICBpZiAoIXNoYXJlZC51c2VJbikge1xuICAgICAgICAgICAgICAgIHNoYXJlZC51c2VJbiA9IFtdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYWRkVW5pcXVlSXRlbShzaGFyZWQudXNlSW4sIGhvc3Qub3B0aW9ucy5uYW1lKTtcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyZWRTaGFyZWQpIHtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJlZFNoYXJlZC5saWIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBhZGRVc2VJbihyZWdpc3RlcmVkU2hhcmVkKTtcbiAgICAgICAgICAgICAgICBpZiAoIXJlZ2lzdGVyZWRTaGFyZWQubG9hZGVkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlZ2lzdGVyZWRTaGFyZWQuZnJvbSA9PT0gaG9zdC5vcHRpb25zLm5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlT3B0aW9ucy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZWdpc3RlcmVkU2hhcmVkLmxpYjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0eXBlb2YgcmVnaXN0ZXJlZFNoYXJlZC5nZXQgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCBtb2R1bGUgPSByZWdpc3RlcmVkU2hhcmVkLmdldCgpO1xuICAgICAgICAgICAgICAgIGlmICghKG1vZHVsZSBpbnN0YW5jZW9mIFByb21pc2UpKSB7XG4gICAgICAgICAgICAgICAgICAgIGFkZFVzZUluKHJlZ2lzdGVyZWRTaGFyZWQpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBwa2dOYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgbG9hZGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJvbTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBsaWI6IG1vZHVsZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZDogcmVnaXN0ZXJlZFNoYXJlZFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXJlT3B0aW9ucy5saWIpIHtcbiAgICAgICAgICAgIGlmICghc2hhcmVPcHRpb25zLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHNoYXJlT3B0aW9ucy5sb2FkZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHNoYXJlT3B0aW9ucy5saWI7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNoYXJlT3B0aW9ucy5nZXQpIHtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IHNoYXJlT3B0aW9ucy5nZXQoKTtcbiAgICAgICAgICAgIGlmIChtb2R1bGUgaW5zdGFuY2VvZiBQcm9taXNlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZXJyb3JDb2RlID0gKGV4dHJhT3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogZXh0cmFPcHRpb25zLmZyb20pID09PSAnYnVpbGQnID8gUlVOVElNRV8wMDUgOiBSVU5USU1FXzAwNjtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoZ2V0U2hvcnRFcnJvck1zZyhlcnJvckNvZGUsIHJ1bnRpbWVEZXNjTWFwLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3ROYW1lOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgICAgICAgICAgc2hhcmVkUGtnTmFtZTogcGtnTmFtZVxuICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHNoYXJlT3B0aW9ucy5saWIgPSBtb2R1bGU7XG4gICAgICAgICAgICB0aGlzLnNldFNoYXJlZCh7XG4gICAgICAgICAgICAgICAgcGtnTmFtZSxcbiAgICAgICAgICAgICAgICBsb2FkZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgZnJvbTogaG9zdC5vcHRpb25zLm5hbWUsXG4gICAgICAgICAgICAgICAgbGliOiBzaGFyZU9wdGlvbnMubGliLFxuICAgICAgICAgICAgICAgIHNoYXJlZDogc2hhcmVPcHRpb25zXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBzaGFyZU9wdGlvbnMubGliO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IG5ldyBFcnJvcihnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA2LCBydW50aW1lRGVzY01hcCwge1xuICAgICAgICAgICAgaG9zdE5hbWU6IGhvc3Qub3B0aW9ucy5uYW1lLFxuICAgICAgICAgICAgc2hhcmVkUGtnTmFtZTogcGtnTmFtZVxuICAgICAgICB9KSk7XG4gICAgfVxuICAgIGluaXRTaGFyZVNjb3BlTWFwKHNjb3BlTmFtZSwgc2hhcmVTY29wZSwgZXh0cmFPcHRpb25zID0ge30pIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICB0aGlzLnNoYXJlU2NvcGVNYXBbc2NvcGVOYW1lXSA9IHNoYXJlU2NvcGU7XG4gICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLmluaXRDb250YWluZXJTaGFyZVNjb3BlTWFwLmVtaXQoe1xuICAgICAgICAgICAgc2hhcmVTY29wZSxcbiAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgIG9yaWdpbjogaG9zdCxcbiAgICAgICAgICAgIHNjb3BlTmFtZSxcbiAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiBleHRyYU9wdGlvbnMuaG9zdFNoYXJlU2NvcGVNYXBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHNldFNoYXJlZCh7IHBrZ05hbWUsIHNoYXJlZCwgZnJvbSwgbGliLCBsb2FkaW5nLCBsb2FkZWQsIGdldCB9KSB7XG4gICAgICAgIGNvbnN0IHsgdmVyc2lvbiwgc2NvcGUgPSAnZGVmYXVsdCcgfSA9IHNoYXJlZCwgc2hhcmVJbmZvID0gX29iamVjdF93aXRob3V0X3Byb3BlcnRpZXNfbG9vc2Uoc2hhcmVkLCBbXG4gICAgICAgICAgICBcInZlcnNpb25cIixcbiAgICAgICAgICAgIFwic2NvcGVcIlxuICAgICAgICBdKTtcbiAgICAgICAgY29uc3Qgc2NvcGVzID0gQXJyYXkuaXNBcnJheShzY29wZSkgPyBzY29wZSA6IFtcbiAgICAgICAgICAgIHNjb3BlXG4gICAgICAgIF07XG4gICAgICAgIHNjb3Blcy5mb3JFYWNoKChzYyk9PntcbiAgICAgICAgICAgIGlmICghdGhpcy5zaGFyZVNjb3BlTWFwW3NjXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcFtzY10gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5zaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXVt2ZXJzaW9uXSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hhcmVTY29wZU1hcFtzY11bcGtnTmFtZV1bdmVyc2lvbl0gPSBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgICAgIHZlcnNpb24sXG4gICAgICAgICAgICAgICAgICAgIHNjb3BlOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAnZGVmYXVsdCdcbiAgICAgICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgICAgIH0sIHNoYXJlSW5mbywge1xuICAgICAgICAgICAgICAgICAgICBsaWIsXG4gICAgICAgICAgICAgICAgICAgIGxvYWRlZCxcbiAgICAgICAgICAgICAgICAgICAgbG9hZGluZ1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChnZXQpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaGFyZVNjb3BlTWFwW3NjXVtwa2dOYW1lXVt2ZXJzaW9uXS5nZXQgPSBnZXQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHJlZ2lzdGVyZWRTaGFyZWQgPSB0aGlzLnNoYXJlU2NvcGVNYXBbc2NdW3BrZ05hbWVdW3ZlcnNpb25dO1xuICAgICAgICAgICAgaWYgKGxvYWRpbmcgJiYgIXJlZ2lzdGVyZWRTaGFyZWQubG9hZGluZykge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGluZyA9IGxvYWRpbmc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobG9hZGVkICYmICFyZWdpc3RlcmVkU2hhcmVkLmxvYWRlZCkge1xuICAgICAgICAgICAgICAgIHJlZ2lzdGVyZWRTaGFyZWQubG9hZGVkID0gbG9hZGVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGZyb20gJiYgcmVnaXN0ZXJlZFNoYXJlZC5mcm9tICE9PSBmcm9tKSB7XG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFNoYXJlZC5mcm9tID0gZnJvbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIF9zZXRHbG9iYWxTaGFyZVNjb3BlTWFwKGhvc3RPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGdsb2JhbFNoYXJlU2NvcGVNYXAgPSBnZXRHbG9iYWxTaGFyZVNjb3BlKCk7XG4gICAgICAgIGNvbnN0IGlkZW50aWZpZXIgPSBob3N0T3B0aW9ucy5pZCB8fCBob3N0T3B0aW9ucy5uYW1lO1xuICAgICAgICBpZiAoaWRlbnRpZmllciAmJiAhZ2xvYmFsU2hhcmVTY29wZU1hcFtpZGVudGlmaWVyXSkge1xuICAgICAgICAgICAgZ2xvYmFsU2hhcmVTY29wZU1hcFtpZGVudGlmaWVyXSA9IHRoaXMuc2hhcmVTY29wZU1hcDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYWZ0ZXJSZXNvbHZlOiBuZXcgQXN5bmNXYXRlcmZhbGxIb29rKCdhZnRlclJlc29sdmUnKSxcbiAgICAgICAgICAgIGJlZm9yZUxvYWRTaGFyZTogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlTG9hZFNoYXJlJyksXG4gICAgICAgICAgICAvLyBub3QgdXNlZCB5ZXRcbiAgICAgICAgICAgIGxvYWRTaGFyZTogbmV3IEFzeW5jSG9vaygpLFxuICAgICAgICAgICAgcmVzb2x2ZVNoYXJlOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ3Jlc29sdmVTaGFyZScpLFxuICAgICAgICAgICAgLy8gbWF5YmUgd2lsbCBjaGFuZ2UsIHRlbXBvcmFyaWx5IGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgaW5pdENvbnRhaW5lclNoYXJlU2NvcGVNYXA6IG5ldyBTeW5jV2F0ZXJmYWxsSG9vaygnaW5pdENvbnRhaW5lclNoYXJlU2NvcGVNYXAnKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5zaGFyZVNjb3BlTWFwID0ge307XG4gICAgICAgIHRoaXMuaW5pdFRva2VucyA9IHt9O1xuICAgICAgICB0aGlzLl9zZXRHbG9iYWxTaGFyZVNjb3BlTWFwKGhvc3Qub3B0aW9ucyk7XG4gICAgfVxufVxuXG5jbGFzcyBSZW1vdGVIYW5kbGVyIHtcbiAgICBmb3JtYXRBbmRSZWdpc3RlclJlbW90ZShnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucykge1xuICAgICAgICBjb25zdCB1c2VyUmVtb3RlcyA9IHVzZXJPcHRpb25zLnJlbW90ZXMgfHwgW107XG4gICAgICAgIHJldHVybiB1c2VyUmVtb3Rlcy5yZWR1Y2UoKHJlcywgcmVtb3RlKT0+e1xuICAgICAgICAgICAgdGhpcy5yZWdpc3RlclJlbW90ZShyZW1vdGUsIHJlcywge1xuICAgICAgICAgICAgICAgIGZvcmNlOiBmYWxzZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICB9LCBnbG9iYWxPcHRpb25zLnJlbW90ZXMpO1xuICAgIH1cbiAgICBzZXRJZFRvUmVtb3RlTWFwKGlkLCByZW1vdGVNYXRjaEluZm8pIHtcbiAgICAgICAgY29uc3QgeyByZW1vdGUsIGV4cG9zZSB9ID0gcmVtb3RlTWF0Y2hJbmZvO1xuICAgICAgICBjb25zdCB7IG5hbWUsIGFsaWFzIH0gPSByZW1vdGU7XG4gICAgICAgIHRoaXMuaWRUb1JlbW90ZU1hcFtpZF0gPSB7XG4gICAgICAgICAgICBuYW1lOiByZW1vdGUubmFtZSxcbiAgICAgICAgICAgIGV4cG9zZVxuICAgICAgICB9O1xuICAgICAgICBpZiAoYWxpYXMgJiYgaWQuc3RhcnRzV2l0aChuYW1lKSkge1xuICAgICAgICAgICAgY29uc3QgaWRXaXRoQWxpYXMgPSBpZC5yZXBsYWNlKG5hbWUsIGFsaWFzKTtcbiAgICAgICAgICAgIHRoaXMuaWRUb1JlbW90ZU1hcFtpZFdpdGhBbGlhc10gPSB7XG4gICAgICAgICAgICAgICAgbmFtZTogcmVtb3RlLm5hbWUsXG4gICAgICAgICAgICAgICAgZXhwb3NlXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChhbGlhcyAmJiBpZC5zdGFydHNXaXRoKGFsaWFzKSkge1xuICAgICAgICAgICAgY29uc3QgaWRXaXRoTmFtZSA9IGlkLnJlcGxhY2UoYWxpYXMsIG5hbWUpO1xuICAgICAgICAgICAgdGhpcy5pZFRvUmVtb3RlTWFwW2lkV2l0aE5hbWVdID0ge1xuICAgICAgICAgICAgICAgIG5hbWU6IHJlbW90ZS5uYW1lLFxuICAgICAgICAgICAgICAgIGV4cG9zZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbWF4LWxpbmVzLXBlci1mdW5jdGlvblxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgYXN5bmMgbG9hZFJlbW90ZShpZCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICBjb25zdCB7IGxvYWRGYWN0b3J5ID0gdHJ1ZSB9ID0gb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICAgICAgbG9hZEZhY3Rvcnk6IHRydWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICAvLyAxLiBWYWxpZGF0ZSB0aGUgcGFyYW1ldGVycyBvZiB0aGUgcmV0cmlldmVkIG1vZHVsZS4gVGhlcmUgYXJlIHR3byBtb2R1bGUgcmVxdWVzdCBtZXRob2RzOiBwa2dOYW1lICsgZXhwb3NlIGFuZCBhbGlhcyArIGV4cG9zZS5cbiAgICAgICAgICAgIC8vIDIuIFJlcXVlc3QgdGhlIHNuYXBzaG90IGluZm9ybWF0aW9uIG9mIHRoZSBjdXJyZW50IGhvc3QgYW5kIGdsb2JhbGx5IHN0b3JlIHRoZSBvYnRhaW5lZCBzbmFwc2hvdCBpbmZvcm1hdGlvbi4gVGhlIHJldHJpZXZlZCBtb2R1bGUgaW5mb3JtYXRpb24gaXMgcGFydGlhbGx5IG9mZmxpbmUgYW5kIHBhcnRpYWxseSBvbmxpbmUuIFRoZSBvbmxpbmUgbW9kdWxlIGluZm9ybWF0aW9uIHdpbGwgcmV0cmlldmUgdGhlIG1vZHVsZXMgdXNlZCBvbmxpbmUuXG4gICAgICAgICAgICAvLyAzLiBSZXRyaWV2ZSB0aGUgZGV0YWlsZWQgaW5mb3JtYXRpb24gb2YgdGhlIGN1cnJlbnQgbW9kdWxlIGZyb20gZ2xvYmFsIChyZW1vdGVFbnRyeSBhZGRyZXNzLCBleHBvc2UgcmVzb3VyY2UgYWRkcmVzcylcbiAgICAgICAgICAgIC8vIDQuIEFmdGVyIHJldHJpZXZpbmcgcmVtb3RlRW50cnksIGNhbGwgdGhlIGluaXQgb2YgdGhlIG1vZHVsZSwgYW5kIHRoZW4gcmV0cmlldmUgdGhlIGV4cG9ydGVkIGNvbnRlbnQgb2YgdGhlIG1vZHVsZSB0aHJvdWdoIGdldFxuICAgICAgICAgICAgLy8gaWQ6IHBrZ05hbWUoQGZlZGVyYXRpb24vYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IEBmZWRlcmF0aW9uL2FwcDEvYnV0dG9uXG4gICAgICAgICAgICAvLyBpZDogYWxpYXMoYXBwMSkgKyBleHBvc2UoYnV0dG9uKSA9IGFwcDEvYnV0dG9uXG4gICAgICAgICAgICAvLyBpZDogYWxpYXMoYXBwMS91dGlscykgKyBleHBvc2UobG9hZGFzaC9zb3J0KSA9IGFwcDEvdXRpbHMvbG9hZGFzaC9zb3J0XG4gICAgICAgICAgICBjb25zdCB7IG1vZHVsZSwgbW9kdWxlT3B0aW9ucywgcmVtb3RlTWF0Y2hJbmZvIH0gPSBhd2FpdCB0aGlzLmdldFJlbW90ZU1vZHVsZUFuZE9wdGlvbnMoe1xuICAgICAgICAgICAgICAgIGlkXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNvbnN0IHsgcGtnTmFtZU9yQWxpYXMsIHJlbW90ZSwgZXhwb3NlLCBpZDogaWRSZXMsIHJlbW90ZVNuYXBzaG90IH0gPSByZW1vdGVNYXRjaEluZm87XG4gICAgICAgICAgICBjb25zdCBtb2R1bGVPckZhY3RvcnkgPSBhd2FpdCBtb2R1bGUuZ2V0KGlkUmVzLCBleHBvc2UsIG9wdGlvbnMsIHJlbW90ZVNuYXBzaG90KTtcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZVdyYXBwZXIgPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5vbkxvYWQuZW1pdCh7XG4gICAgICAgICAgICAgICAgaWQ6IGlkUmVzLFxuICAgICAgICAgICAgICAgIHBrZ05hbWVPckFsaWFzLFxuICAgICAgICAgICAgICAgIGV4cG9zZSxcbiAgICAgICAgICAgICAgICBleHBvc2VNb2R1bGU6IGxvYWRGYWN0b3J5ID8gbW9kdWxlT3JGYWN0b3J5IDogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgIGV4cG9zZU1vZHVsZUZhY3Rvcnk6IGxvYWRGYWN0b3J5ID8gdW5kZWZpbmVkIDogbW9kdWxlT3JGYWN0b3J5LFxuICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBtb2R1bGVPcHRpb25zLFxuICAgICAgICAgICAgICAgIG1vZHVsZUluc3RhbmNlOiBtb2R1bGUsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHRoaXMuc2V0SWRUb1JlbW90ZU1hcChpZCwgcmVtb3RlTWF0Y2hJbmZvKTtcbiAgICAgICAgICAgIGlmICh0eXBlb2YgbW9kdWxlV3JhcHBlciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgICAgICAgICAgIHJldHVybiBtb2R1bGVXcmFwcGVyO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIG1vZHVsZU9yRmFjdG9yeTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnN0IHsgZnJvbSA9ICdydW50aW1lJyB9ID0gb3B0aW9ucyB8fCB7XG4gICAgICAgICAgICAgICAgZnJvbTogJ3J1bnRpbWUnXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3QgZmFpbE92ZXIgPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5lcnJvckxvYWRSZW1vdGUuZW1pdCh7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZXJyb3IsXG4gICAgICAgICAgICAgICAgZnJvbSxcbiAgICAgICAgICAgICAgICBsaWZlY3ljbGU6ICdvbkxvYWQnLFxuICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIWZhaWxPdmVyKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFpbE92ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICBhc3luYyBwcmVsb2FkUmVtb3RlKHByZWxvYWRPcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlUHJlbG9hZFJlbW90ZS5lbWl0KHtcbiAgICAgICAgICAgIHByZWxvYWRPcHM6IHByZWxvYWRPcHRpb25zLFxuICAgICAgICAgICAgb3B0aW9uczogaG9zdC5vcHRpb25zLFxuICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBwcmVsb2FkT3BzID0gZm9ybWF0UHJlbG9hZEFyZ3MoaG9zdC5vcHRpb25zLnJlbW90ZXMsIHByZWxvYWRPcHRpb25zKTtcbiAgICAgICAgYXdhaXQgUHJvbWlzZS5hbGwocHJlbG9hZE9wcy5tYXAoYXN5bmMgKG9wcyk9PntcbiAgICAgICAgICAgIGNvbnN0IHsgcmVtb3RlIH0gPSBvcHM7XG4gICAgICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gZ2V0UmVtb3RlSW5mbyhyZW1vdGUpO1xuICAgICAgICAgICAgY29uc3QgeyBnbG9iYWxTbmFwc2hvdCwgcmVtb3RlU25hcHNob3QgfSA9IGF3YWl0IGhvc3Quc25hcHNob3RIYW5kbGVyLmxvYWRSZW1vdGVTbmFwc2hvdEluZm8oe1xuICAgICAgICAgICAgICAgIG1vZHVsZUluZm86IHJlbW90ZVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjb25zdCBhc3NldHMgPSBhd2FpdCB0aGlzLmhvb2tzLmxpZmVjeWNsZS5nZW5lcmF0ZVByZWxvYWRBc3NldHMuZW1pdCh7XG4gICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgICAgIHByZWxvYWRPcHRpb25zOiBvcHMsXG4gICAgICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgICAgIHJlbW90ZUluZm8sXG4gICAgICAgICAgICAgICAgZ2xvYmFsU25hcHNob3QsXG4gICAgICAgICAgICAgICAgcmVtb3RlU25hcHNob3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFhc3NldHMpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBwcmVsb2FkQXNzZXRzKHJlbW90ZUluZm8sIGhvc3QsIGFzc2V0cyk7XG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgcmVnaXN0ZXJSZW1vdGVzKHJlbW90ZXMsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBob3N0IH0gPSB0aGlzO1xuICAgICAgICByZW1vdGVzLmZvckVhY2goKHJlbW90ZSk9PntcbiAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJSZW1vdGUocmVtb3RlLCBob3N0Lm9wdGlvbnMucmVtb3Rlcywge1xuICAgICAgICAgICAgICAgIGZvcmNlOiBvcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiBvcHRpb25zLmZvcmNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGFzeW5jIGdldFJlbW90ZU1vZHVsZUFuZE9wdGlvbnMob3B0aW9ucykge1xuICAgICAgICBjb25zdCB7IGhvc3QgfSA9IHRoaXM7XG4gICAgICAgIGNvbnN0IHsgaWQgfSA9IG9wdGlvbnM7XG4gICAgICAgIGxldCBsb2FkUmVtb3RlQXJncztcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGxvYWRSZW1vdGVBcmdzID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuYmVmb3JlUmVxdWVzdC5lbWl0KHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBvcHRpb25zOiBob3N0Lm9wdGlvbnMsXG4gICAgICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGxvYWRSZW1vdGVBcmdzID0gYXdhaXQgdGhpcy5ob29rcy5saWZlY3ljbGUuZXJyb3JMb2FkUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgIGlkLFxuICAgICAgICAgICAgICAgIG9wdGlvbnM6IGhvc3Qub3B0aW9ucyxcbiAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3QsXG4gICAgICAgICAgICAgICAgZnJvbTogJ3J1bnRpbWUnLFxuICAgICAgICAgICAgICAgIGVycm9yLFxuICAgICAgICAgICAgICAgIGxpZmVjeWNsZTogJ2JlZm9yZVJlcXVlc3QnXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmICghbG9hZFJlbW90ZUFyZ3MpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGlkOiBpZFJlcyB9ID0gbG9hZFJlbW90ZUFyZ3M7XG4gICAgICAgIGNvbnN0IHJlbW90ZVNwbGl0SW5mbyA9IG1hdGNoUmVtb3RlV2l0aE5hbWVBbmRFeHBvc2UoaG9zdC5vcHRpb25zLnJlbW90ZXMsIGlkUmVzKTtcbiAgICAgICAgYXNzZXJ0KHJlbW90ZVNwbGl0SW5mbywgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwNCwgcnVudGltZURlc2NNYXAsIHtcbiAgICAgICAgICAgIGhvc3ROYW1lOiBob3N0Lm9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgIHJlcXVlc3RJZDogaWRSZXNcbiAgICAgICAgfSkpO1xuICAgICAgICBjb25zdCB7IHJlbW90ZTogcmF3UmVtb3RlIH0gPSByZW1vdGVTcGxpdEluZm87XG4gICAgICAgIGNvbnN0IHJlbW90ZUluZm8gPSBnZXRSZW1vdGVJbmZvKHJhd1JlbW90ZSk7XG4gICAgICAgIGNvbnN0IG1hdGNoSW5mbyA9IGF3YWl0IGhvc3Quc2hhcmVkSGFuZGxlci5ob29rcy5saWZlY3ljbGUuYWZ0ZXJSZXNvbHZlLmVtaXQoX2V4dGVuZHMoe1xuICAgICAgICAgICAgaWQ6IGlkUmVzXG4gICAgICAgIH0sIHJlbW90ZVNwbGl0SW5mbywge1xuICAgICAgICAgICAgb3B0aW9uczogaG9zdC5vcHRpb25zLFxuICAgICAgICAgICAgb3JpZ2luOiBob3N0LFxuICAgICAgICAgICAgcmVtb3RlSW5mb1xuICAgICAgICB9KSk7XG4gICAgICAgIGNvbnN0IHsgcmVtb3RlLCBleHBvc2UgfSA9IG1hdGNoSW5mbztcbiAgICAgICAgYXNzZXJ0KHJlbW90ZSAmJiBleHBvc2UsIGBUaGUgJ2JlZm9yZVJlcXVlc3QnIGhvb2sgd2FzIGV4ZWN1dGVkLCBidXQgaXQgZmFpbGVkIHRvIHJldHVybiB0aGUgY29ycmVjdCAncmVtb3RlJyBhbmQgJ2V4cG9zZScgdmFsdWVzIHdoaWxlIGxvYWRpbmcgJHtpZFJlc30uYCk7XG4gICAgICAgIGxldCBtb2R1bGUgPSBob3N0Lm1vZHVsZUNhY2hlLmdldChyZW1vdGUubmFtZSk7XG4gICAgICAgIGNvbnN0IG1vZHVsZU9wdGlvbnMgPSB7XG4gICAgICAgICAgICBob3N0OiBob3N0LFxuICAgICAgICAgICAgcmVtb3RlSW5mb1xuICAgICAgICB9O1xuICAgICAgICBpZiAoIW1vZHVsZSkge1xuICAgICAgICAgICAgbW9kdWxlID0gbmV3IE1vZHVsZShtb2R1bGVPcHRpb25zKTtcbiAgICAgICAgICAgIGhvc3QubW9kdWxlQ2FjaGUuc2V0KHJlbW90ZS5uYW1lLCBtb2R1bGUpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBtb2R1bGUsXG4gICAgICAgICAgICBtb2R1bGVPcHRpb25zLFxuICAgICAgICAgICAgcmVtb3RlTWF0Y2hJbmZvOiBtYXRjaEluZm9cbiAgICAgICAgfTtcbiAgICB9XG4gICAgcmVnaXN0ZXJSZW1vdGUocmVtb3RlLCB0YXJnZXRSZW1vdGVzLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgY29uc3Qgbm9ybWFsaXplUmVtb3RlID0gKCk9PntcbiAgICAgICAgICAgIGlmIChyZW1vdGUuYWxpYXMpIHtcbiAgICAgICAgICAgICAgICAvLyBWYWxpZGF0ZSBpZiBhbGlhcyBlcXVhbHMgdGhlIHByZWZpeCBvZiByZW1vdGUubmFtZSBhbmQgcmVtb3RlLmFsaWFzLCBpZiBzbywgdGhyb3cgYW4gZXJyb3JcbiAgICAgICAgICAgICAgICAvLyBBcyBtdWx0aS1sZXZlbCBwYXRoIHJlZmVyZW5jZXMgY2Fubm90IGd1YXJhbnRlZSB1bmlxdWUgbmFtZXMsIGFsaWFzIGJlaW5nIGEgcHJlZml4IG9mIHJlbW90ZS5uYW1lIGlzIG5vdCBzdXBwb3J0ZWRcbiAgICAgICAgICAgICAgICBjb25zdCBmaW5kRXF1YWwgPSB0YXJnZXRSZW1vdGVzLmZpbmQoKGl0ZW0pPT57XG4gICAgICAgICAgICAgICAgICAgIHZhciBfaXRlbV9hbGlhcztcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbW90ZS5hbGlhcyAmJiAoaXRlbS5uYW1lLnN0YXJ0c1dpdGgocmVtb3RlLmFsaWFzKSB8fCAoKF9pdGVtX2FsaWFzID0gaXRlbS5hbGlhcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9pdGVtX2FsaWFzLnN0YXJ0c1dpdGgocmVtb3RlLmFsaWFzKSkpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGFzc2VydCghZmluZEVxdWFsLCBgVGhlIGFsaWFzICR7cmVtb3RlLmFsaWFzfSBvZiByZW1vdGUgJHtyZW1vdGUubmFtZX0gaXMgbm90IGFsbG93ZWQgdG8gYmUgdGhlIHByZWZpeCBvZiAke2ZpbmRFcXVhbCAmJiBmaW5kRXF1YWwubmFtZX0gbmFtZSBvciBhbGlhc2ApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gU2V0IHRoZSByZW1vdGUgZW50cnkgdG8gYSBjb21wbGV0ZSBwYXRoXG4gICAgICAgICAgICBpZiAoJ2VudHJ5JyBpbiByZW1vdGUpIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNCcm93c2VyRW52KCkgJiYgIXJlbW90ZS5lbnRyeS5zdGFydHNXaXRoKCdodHRwJykpIHtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlLmVudHJ5ID0gbmV3IFVSTChyZW1vdGUuZW50cnksIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pLmhyZWY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFyZW1vdGUuc2hhcmVTY29wZSkge1xuICAgICAgICAgICAgICAgIHJlbW90ZS5zaGFyZVNjb3BlID0gREVGQVVMVF9TQ09QRTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghcmVtb3RlLnR5cGUpIHtcbiAgICAgICAgICAgICAgICByZW1vdGUudHlwZSA9IERFRkFVTFRfUkVNT1RFX1RZUEU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLmJlZm9yZVJlZ2lzdGVyUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgcmVtb3RlLFxuICAgICAgICAgICAgb3JpZ2luOiBob3N0XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZWdpc3RlcmVkUmVtb3RlID0gdGFyZ2V0UmVtb3Rlcy5maW5kKChpdGVtKT0+aXRlbS5uYW1lID09PSByZW1vdGUubmFtZSk7XG4gICAgICAgIGlmICghcmVnaXN0ZXJlZFJlbW90ZSkge1xuICAgICAgICAgICAgbm9ybWFsaXplUmVtb3RlKCk7XG4gICAgICAgICAgICB0YXJnZXRSZW1vdGVzLnB1c2gocmVtb3RlKTtcbiAgICAgICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLnJlZ2lzdGVyUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgIHJlbW90ZSxcbiAgICAgICAgICAgICAgICBvcmlnaW46IGhvc3RcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc3QgbWVzc2FnZXMgPSBbXG4gICAgICAgICAgICAgICAgYFRoZSByZW1vdGUgXCIke3JlbW90ZS5uYW1lfVwiIGlzIGFscmVhZHkgcmVnaXN0ZXJlZC5gLFxuICAgICAgICAgICAgICAgICdQbGVhc2Ugbm90ZSB0aGF0IG92ZXJyaWRpbmcgaXQgbWF5IGNhdXNlIHVuZXhwZWN0ZWQgZXJyb3JzLidcbiAgICAgICAgICAgIF07XG4gICAgICAgICAgICBpZiAob3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogb3B0aW9ucy5mb3JjZSkge1xuICAgICAgICAgICAgICAgIC8vIHJlbW92ZSByZWdpc3RlcmVkIHJlbW90ZVxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlUmVtb3RlKHJlZ2lzdGVyZWRSZW1vdGUpO1xuICAgICAgICAgICAgICAgIG5vcm1hbGl6ZVJlbW90ZSgpO1xuICAgICAgICAgICAgICAgIHRhcmdldFJlbW90ZXMucHVzaChyZW1vdGUpO1xuICAgICAgICAgICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLnJlZ2lzdGVyUmVtb3RlLmVtaXQoe1xuICAgICAgICAgICAgICAgICAgICByZW1vdGUsXG4gICAgICAgICAgICAgICAgICAgIG9yaWdpbjogaG9zdFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHdhcm4kMShtZXNzYWdlcy5qb2luKCcgJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHJlbW92ZVJlbW90ZShyZW1vdGUpIHtcbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgIGNvbnN0IHsgaG9zdCB9ID0gdGhpcztcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gcmVtb3RlO1xuICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5kZXggPSBob3N0Lm9wdGlvbnMucmVtb3Rlcy5maW5kSW5kZXgoKGl0ZW0pPT5pdGVtLm5hbWUgPT09IG5hbWUpO1xuICAgICAgICAgICAgaWYgKHJlbW90ZUluZGV4ICE9PSAtMSkge1xuICAgICAgICAgICAgICAgIGhvc3Qub3B0aW9ucy5yZW1vdGVzLnNwbGljZShyZW1vdGVJbmRleCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBsb2FkZWRNb2R1bGUgPSBob3N0Lm1vZHVsZUNhY2hlLmdldChyZW1vdGUubmFtZSk7XG4gICAgICAgICAgICBpZiAobG9hZGVkTW9kdWxlKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IGxvYWRlZE1vZHVsZS5yZW1vdGVJbmZvO1xuICAgICAgICAgICAgICAgIGNvbnN0IGtleSA9IHJlbW90ZUluZm8uZW50cnlHbG9iYWxOYW1lO1xuICAgICAgICAgICAgICAgIGlmIChDdXJyZW50R2xvYmFsW2tleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9PYmplY3RfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yO1xuICAgICAgICAgICAgICAgICAgICBpZiAoKF9PYmplY3RfZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yID0gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihDdXJyZW50R2xvYmFsLCBrZXkpKSA9PSBudWxsID8gdm9pZCAwIDogX09iamVjdF9nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IuY29uZmlndXJhYmxlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkZWxldGUgQ3VycmVudEdsb2JhbFtrZXldO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgICAgICAgICAgICAgQ3VycmVudEdsb2JhbFtrZXldID0gdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZUVudHJ5VW5pcXVlS2V5ID0gZ2V0UmVtb3RlRW50cnlVbmlxdWVLZXkobG9hZGVkTW9kdWxlLnJlbW90ZUluZm8pO1xuICAgICAgICAgICAgICAgIGlmIChnbG9iYWxMb2FkaW5nW3JlbW90ZUVudHJ5VW5pcXVlS2V5XSkge1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgZ2xvYmFsTG9hZGluZ1tyZW1vdGVFbnRyeVVuaXF1ZUtleV07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3Quc25hcHNob3RIYW5kbGVyLm1hbmlmZXN0Q2FjaGUuZGVsZXRlKHJlbW90ZUluZm8uZW50cnkpO1xuICAgICAgICAgICAgICAgIC8vIGRlbGV0ZSB1bmxvYWRlZCBzaGFyZWQgYW5kIGluc3RhbmNlXG4gICAgICAgICAgICAgICAgbGV0IHJlbW90ZUluc0lkID0gcmVtb3RlSW5mby5idWlsZFZlcnNpb24gPyBjb21wb3NlS2V5V2l0aFNlcGFyYXRvcihyZW1vdGVJbmZvLm5hbWUsIHJlbW90ZUluZm8uYnVpbGRWZXJzaW9uKSA6IHJlbW90ZUluZm8ubmFtZTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVJbnNJbmRleCA9IEN1cnJlbnRHbG9iYWwuX19GRURFUkFUSU9OX18uX19JTlNUQU5DRVNfXy5maW5kSW5kZXgoKGlucyk9PntcbiAgICAgICAgICAgICAgICAgICAgaWYgKHJlbW90ZUluZm8uYnVpbGRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gaW5zLm9wdGlvbnMuaWQgPT09IHJlbW90ZUluc0lkO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGlucy5uYW1lID09PSByZW1vdGVJbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdGVJbnNJbmRleCAhPT0gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcmVtb3RlSW5zID0gQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fW3JlbW90ZUluc0luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgcmVtb3RlSW5zSWQgPSByZW1vdGVJbnMub3B0aW9ucy5pZCB8fCByZW1vdGVJbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZ2xvYmFsU2hhcmVTY29wZU1hcCA9IGdldEdsb2JhbFNoYXJlU2NvcGUoKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzQWxsU2hhcmVkTm90VXNlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG5lZWREZWxldGVLZXlzID0gW107XG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGdsb2JhbFNoYXJlU2NvcGVNYXApLmZvckVhY2goKGluc3RJZCk9PntcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlU2NvcGVNYXAgPSBnbG9iYWxTaGFyZVNjb3BlTWFwW2luc3RJZF07XG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlTWFwICYmIE9iamVjdC5rZXlzKHNoYXJlU2NvcGVNYXApLmZvckVhY2goKHNoYXJlU2NvcGUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVTY29wZVZhbCA9IHNoYXJlU2NvcGVNYXBbc2hhcmVTY29wZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZVZhbCAmJiBPYmplY3Qua2V5cyhzaGFyZVNjb3BlVmFsKS5mb3JFYWNoKChzaGFyZU5hbWUpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNoYXJlZFBrZ3MgPSBzaGFyZVNjb3BlVmFsW3NoYXJlTmFtZV07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlZFBrZ3MgJiYgT2JqZWN0LmtleXMoc2hhcmVkUGtncykuZm9yRWFjaCgoc2hhcmVWZXJzaW9uKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc2hhcmVkID0gc2hhcmVkUGtnc1tzaGFyZVZlcnNpb25dO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlZCAmJiB0eXBlb2Ygc2hhcmVkID09PSAnb2JqZWN0JyAmJiBzaGFyZWQuZnJvbSA9PT0gcmVtb3RlSW5mby5uYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNoYXJlZC5sb2FkZWQgfHwgc2hhcmVkLmxvYWRpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVkLnVzZUluID0gc2hhcmVkLnVzZUluLmZpbHRlcigodXNlZEhvc3ROYW1lKT0+dXNlZEhvc3ROYW1lICE9PSByZW1vdGVJbmZvLm5hbWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoc2hhcmVkLnVzZUluLmxlbmd0aCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaXNBbGxTaGFyZWROb3RVc2VkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBuZWVkRGVsZXRlS2V5cy5wdXNoKFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnN0SWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaGFyZU5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVWZXJzaW9uXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVLZXlzLnB1c2goW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5zdElkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hhcmVTY29wZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlTmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlVmVyc2lvblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaXNBbGxTaGFyZWROb3RVc2VkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZW1vdGVJbnMuc2hhcmVTY29wZU1hcCA9IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIGdsb2JhbFNoYXJlU2NvcGVNYXBbcmVtb3RlSW5zSWRdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG5lZWREZWxldGVLZXlzLmZvckVhY2goKFtpbnNJZCwgc2hhcmVTY29wZSwgc2hhcmVOYW1lLCBzaGFyZVZlcnNpb25dKT0+e1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGVfc2hhcmVOYW1lLCBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlLCBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIChfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZCA9IGdsb2JhbFNoYXJlU2NvcGVNYXBbaW5zSWRdKSA9PSBudWxsID8gdHJ1ZSA6IChfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlID0gX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRbc2hhcmVTY29wZV0pID09IG51bGwgPyB0cnVlIDogKF9nbG9iYWxTaGFyZVNjb3BlTWFwX2luc0lkX3NoYXJlU2NvcGVfc2hhcmVOYW1lID0gX2dsb2JhbFNoYXJlU2NvcGVNYXBfaW5zSWRfc2hhcmVTY29wZVtzaGFyZU5hbWVdKSA9PSBudWxsID8gdHJ1ZSA6IGRlbGV0ZSBfZ2xvYmFsU2hhcmVTY29wZU1hcF9pbnNJZF9zaGFyZVNjb3BlX3NoYXJlTmFtZVtzaGFyZVZlcnNpb25dO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fLnNwbGljZShyZW1vdGVJbnNJbmRleCwgMSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgaG9zdEdsb2JhbFNuYXBzaG90IH0gPSBnZXRHbG9iYWxSZW1vdGVJbmZvKHJlbW90ZSwgaG9zdCk7XG4gICAgICAgICAgICAgICAgaWYgKGhvc3RHbG9iYWxTbmFwc2hvdCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVLZXkgPSBob3N0R2xvYmFsU25hcHNob3QgJiYgJ3JlbW90ZXNJbmZvJyBpbiBob3N0R2xvYmFsU25hcHNob3QgJiYgaG9zdEdsb2JhbFNuYXBzaG90LnJlbW90ZXNJbmZvICYmIGdldEluZm9XaXRob3V0VHlwZShob3N0R2xvYmFsU25hcHNob3QucmVtb3Rlc0luZm8sIHJlbW90ZS5uYW1lKS5rZXk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyZW1vdGVLZXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBob3N0R2xvYmFsU25hcHNob3QucmVtb3Rlc0luZm9bcmVtb3RlS2V5XTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICgvL2VzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgICAgICAgICAgICAgICAgICAgICAgIEJvb2xlYW4oR2xvYmFsLl9fRkVERVJBVElPTl9fLl9fTUFOSUZFU1RfTE9BRElOR19fW3JlbW90ZUtleV0pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVsZXRlIEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX01BTklGRVNUX0xPQURJTkdfX1tyZW1vdGVLZXldO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGhvc3QubW9kdWxlQ2FjaGUuZGVsZXRlKHJlbW90ZS5uYW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICAgICAgICBsb2dnZXIubG9nKCdyZW1vdmVSZW1vdGUgZmFpbDogJywgZXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3Rvcihob3N0KXtcbiAgICAgICAgdGhpcy5ob29rcyA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYmVmb3JlUmVnaXN0ZXJSZW1vdGU6IG5ldyBTeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlUmVnaXN0ZXJSZW1vdGUnKSxcbiAgICAgICAgICAgIHJlZ2lzdGVyUmVtb3RlOiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ3JlZ2lzdGVyUmVtb3RlJyksXG4gICAgICAgICAgICBiZWZvcmVSZXF1ZXN0OiBuZXcgQXN5bmNXYXRlcmZhbGxIb29rKCdiZWZvcmVSZXF1ZXN0JyksXG4gICAgICAgICAgICBvbkxvYWQ6IG5ldyBBc3luY0hvb2soJ29uTG9hZCcpLFxuICAgICAgICAgICAgaGFuZGxlUHJlbG9hZE1vZHVsZTogbmV3IFN5bmNIb29rKCdoYW5kbGVQcmVsb2FkTW9kdWxlJyksXG4gICAgICAgICAgICBlcnJvckxvYWRSZW1vdGU6IG5ldyBBc3luY0hvb2soJ2Vycm9yTG9hZFJlbW90ZScpLFxuICAgICAgICAgICAgYmVmb3JlUHJlbG9hZFJlbW90ZTogbmV3IEFzeW5jSG9vaygnYmVmb3JlUHJlbG9hZFJlbW90ZScpLFxuICAgICAgICAgICAgZ2VuZXJhdGVQcmVsb2FkQXNzZXRzOiBuZXcgQXN5bmNIb29rKCdnZW5lcmF0ZVByZWxvYWRBc3NldHMnKSxcbiAgICAgICAgICAgIC8vIG5vdCB1c2VkIHlldFxuICAgICAgICAgICAgYWZ0ZXJQcmVsb2FkUmVtb3RlOiBuZXcgQXN5bmNIb29rKCksXG4gICAgICAgICAgICBsb2FkRW50cnk6IG5ldyBBc3luY0hvb2soKVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5ob3N0ID0gaG9zdDtcbiAgICAgICAgdGhpcy5pZFRvUmVtb3RlTWFwID0ge307XG4gICAgfVxufVxuXG5jb25zdCBVU0VfU05BUFNIT1QgPSB0eXBlb2YgRkVERVJBVElPTl9PUFRJTUlaRV9OT19TTkFQU0hPVF9QTFVHSU4gPT09ICdib29sZWFuJyA/ICFGRURFUkFUSU9OX09QVElNSVpFX05PX1NOQVBTSE9UX1BMVUdJTiA6IHRydWU7IC8vIERlZmF1bHQgdG8gdHJ1ZSAodXNlIHNuYXBzaG90KSB3aGVuIG5vdCBleHBsaWNpdGx5IGRlZmluZWRcbmNsYXNzIE1vZHVsZUZlZGVyYXRpb24ge1xuICAgIGluaXRPcHRpb25zKHVzZXJPcHRpb25zKSB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5zKHVzZXJPcHRpb25zLnBsdWdpbnMpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0gdGhpcy5mb3JtYXRPcHRpb25zKHRoaXMub3B0aW9ucywgdXNlck9wdGlvbnMpO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSBvcHRpb25zO1xuICAgICAgICByZXR1cm4gb3B0aW9ucztcbiAgICB9XG4gICAgYXN5bmMgbG9hZFNoYXJlKHBrZ05hbWUsIGV4dHJhT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5zaGFyZWRIYW5kbGVyLmxvYWRTaGFyZShwa2dOYW1lLCBleHRyYU9wdGlvbnMpO1xuICAgIH1cbiAgICAvLyBUaGUgbGliIGZ1bmN0aW9uIHdpbGwgb25seSBiZSBhdmFpbGFibGUgaWYgdGhlIHNoYXJlZCBzZXQgYnkgZWFnZXIgb3IgcnVudGltZSBpbml0IGlzIHNldCBvciB0aGUgc2hhcmVkIGlzIHN1Y2Nlc3NmdWxseSBsb2FkZWQuXG4gICAgLy8gMS4gSWYgdGhlIGxvYWRlZCBzaGFyZWQgYWxyZWFkeSBleGlzdHMgZ2xvYmFsbHksIHRoZW4gaXQgd2lsbCBiZSByZXVzZWRcbiAgICAvLyAyLiBJZiBsaWIgZXhpc3RzIGluIGxvY2FsIHNoYXJlZCwgaXQgd2lsbCBiZSB1c2VkIGRpcmVjdGx5XG4gICAgLy8gMy4gSWYgdGhlIGxvY2FsIGdldCByZXR1cm5zIHNvbWV0aGluZyBvdGhlciB0aGFuIFByb21pc2UsIHRoZW4gaXQgd2lsbCBiZSB1c2VkIGRpcmVjdGx5XG4gICAgbG9hZFNoYXJlU3luYyhwa2dOYW1lLCBleHRyYU9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuc2hhcmVkSGFuZGxlci5sb2FkU2hhcmVTeW5jKHBrZ05hbWUsIGV4dHJhT3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRpYWxpemVTaGFyaW5nKHNoYXJlU2NvcGVOYW1lID0gREVGQVVMVF9TQ09QRSwgZXh0cmFPcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnNoYXJlZEhhbmRsZXIuaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZU5hbWUsIGV4dHJhT3B0aW9ucyk7XG4gICAgfVxuICAgIGluaXRSYXdDb250YWluZXIobmFtZSwgdXJsLCBjb250YWluZXIpIHtcbiAgICAgICAgY29uc3QgcmVtb3RlSW5mbyA9IGdldFJlbW90ZUluZm8oe1xuICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgIGVudHJ5OiB1cmxcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IG5ldyBNb2R1bGUoe1xuICAgICAgICAgICAgaG9zdDogdGhpcyxcbiAgICAgICAgICAgIHJlbW90ZUluZm9cbiAgICAgICAgfSk7XG4gICAgICAgIG1vZHVsZS5yZW1vdGVFbnRyeUV4cG9ydHMgPSBjb250YWluZXI7XG4gICAgICAgIHRoaXMubW9kdWxlQ2FjaGUuc2V0KG5hbWUsIG1vZHVsZSk7XG4gICAgICAgIHJldHVybiBtb2R1bGU7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9tZW1iZXItb3JkZXJpbmdcbiAgICBhc3luYyBsb2FkUmVtb3RlKGlkLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZUhhbmRsZXIubG9hZFJlbW90ZShpZCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBAdHlwZXNjcmlwdC1lc2xpbnQvbWVtYmVyLW9yZGVyaW5nXG4gICAgYXN5bmMgcHJlbG9hZFJlbW90ZShwcmVsb2FkT3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZW1vdGVIYW5kbGVyLnByZWxvYWRSZW1vdGUocHJlbG9hZE9wdGlvbnMpO1xuICAgIH1cbiAgICBpbml0U2hhcmVTY29wZU1hcChzY29wZU5hbWUsIHNoYXJlU2NvcGUsIGV4dHJhT3B0aW9ucyA9IHt9KSB7XG4gICAgICAgIHRoaXMuc2hhcmVkSGFuZGxlci5pbml0U2hhcmVTY29wZU1hcChzY29wZU5hbWUsIHNoYXJlU2NvcGUsIGV4dHJhT3B0aW9ucyk7XG4gICAgfVxuICAgIGZvcm1hdE9wdGlvbnMoZ2xvYmFsT3B0aW9ucywgdXNlck9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgeyBzaGFyZWQgfSA9IGZvcm1hdFNoYXJlQ29uZmlncyhnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0IHsgdXNlck9wdGlvbnM6IHVzZXJPcHRpb25zUmVzLCBvcHRpb25zOiBnbG9iYWxPcHRpb25zUmVzIH0gPSB0aGlzLmhvb2tzLmxpZmVjeWNsZS5iZWZvcmVJbml0LmVtaXQoe1xuICAgICAgICAgICAgb3JpZ2luOiB0aGlzLFxuICAgICAgICAgICAgdXNlck9wdGlvbnMsXG4gICAgICAgICAgICBvcHRpb25zOiBnbG9iYWxPcHRpb25zLFxuICAgICAgICAgICAgc2hhcmVJbmZvOiBzaGFyZWRcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW90ZXMgPSB0aGlzLnJlbW90ZUhhbmRsZXIuZm9ybWF0QW5kUmVnaXN0ZXJSZW1vdGUoZ2xvYmFsT3B0aW9uc1JlcywgdXNlck9wdGlvbnNSZXMpO1xuICAgICAgICBjb25zdCB7IHNoYXJlZDogaGFuZGxlZFNoYXJlZCB9ID0gdGhpcy5zaGFyZWRIYW5kbGVyLnJlZ2lzdGVyU2hhcmVkKGdsb2JhbE9wdGlvbnNSZXMsIHVzZXJPcHRpb25zUmVzKTtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFtcbiAgICAgICAgICAgIC4uLmdsb2JhbE9wdGlvbnNSZXMucGx1Z2luc1xuICAgICAgICBdO1xuICAgICAgICBpZiAodXNlck9wdGlvbnNSZXMucGx1Z2lucykge1xuICAgICAgICAgICAgdXNlck9wdGlvbnNSZXMucGx1Z2lucy5mb3JFYWNoKChwbHVnaW4pPT57XG4gICAgICAgICAgICAgICAgaWYgKCFwbHVnaW5zLmluY2x1ZGVzKHBsdWdpbikpIHtcbiAgICAgICAgICAgICAgICAgICAgcGx1Z2lucy5wdXNoKHBsdWdpbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb3B0aW9uc1JlcyA9IF9leHRlbmRzKHt9LCBnbG9iYWxPcHRpb25zLCB1c2VyT3B0aW9ucywge1xuICAgICAgICAgICAgcGx1Z2lucyxcbiAgICAgICAgICAgIHJlbW90ZXMsXG4gICAgICAgICAgICBzaGFyZWQ6IGhhbmRsZWRTaGFyZWRcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuaG9va3MubGlmZWN5Y2xlLmluaXQuZW1pdCh7XG4gICAgICAgICAgICBvcmlnaW46IHRoaXMsXG4gICAgICAgICAgICBvcHRpb25zOiBvcHRpb25zUmVzXG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gb3B0aW9uc1JlcztcbiAgICB9XG4gICAgcmVnaXN0ZXJQbHVnaW5zKHBsdWdpbnMpIHtcbiAgICAgICAgY29uc3QgcGx1Z2luUmVzID0gcmVnaXN0ZXJQbHVnaW5zKHBsdWdpbnMsIHRoaXMpO1xuICAgICAgICAvLyBNZXJnZSBwbHVnaW5cbiAgICAgICAgdGhpcy5vcHRpb25zLnBsdWdpbnMgPSB0aGlzLm9wdGlvbnMucGx1Z2lucy5yZWR1Y2UoKHJlcywgcGx1Z2luKT0+e1xuICAgICAgICAgICAgaWYgKCFwbHVnaW4pIHJldHVybiByZXM7XG4gICAgICAgICAgICBpZiAocmVzICYmICFyZXMuZmluZCgoaXRlbSk9Pml0ZW0ubmFtZSA9PT0gcGx1Z2luLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgcmVzLnB1c2gocGx1Z2luKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgIH0sIHBsdWdpblJlcyB8fCBbXSk7XG4gICAgfVxuICAgIHJlZ2lzdGVyUmVtb3RlcyhyZW1vdGVzLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlbW90ZUhhbmRsZXIucmVnaXN0ZXJSZW1vdGVzKHJlbW90ZXMsIG9wdGlvbnMpO1xuICAgIH1cbiAgICByZWdpc3RlclNoYXJlZChzaGFyZWQpIHtcbiAgICAgICAgdGhpcy5zaGFyZWRIYW5kbGVyLnJlZ2lzdGVyU2hhcmVkKHRoaXMub3B0aW9ucywgX2V4dGVuZHMoe30sIHRoaXMub3B0aW9ucywge1xuICAgICAgICAgICAgc2hhcmVkXG4gICAgICAgIH0pKTtcbiAgICB9XG4gICAgY29uc3RydWN0b3IodXNlck9wdGlvbnMpe1xuICAgICAgICB0aGlzLmhvb2tzID0gbmV3IFBsdWdpblN5c3RlbSh7XG4gICAgICAgICAgICBiZWZvcmVJbml0OiBuZXcgU3luY1dhdGVyZmFsbEhvb2soJ2JlZm9yZUluaXQnKSxcbiAgICAgICAgICAgIGluaXQ6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgLy8gbWF5YmUgd2lsbCBjaGFuZ2UsIHRlbXBvcmFyaWx5IGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgYmVmb3JlSW5pdENvbnRhaW5lcjogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnYmVmb3JlSW5pdENvbnRhaW5lcicpLFxuICAgICAgICAgICAgLy8gbWF5YmUgd2lsbCBjaGFuZ2UsIHRlbXBvcmFyaWx5IGZvciBpbnRlcm5hbCB1c2Ugb25seVxuICAgICAgICAgICAgaW5pdENvbnRhaW5lcjogbmV3IEFzeW5jV2F0ZXJmYWxsSG9vaygnaW5pdENvbnRhaW5lcicpXG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZlcnNpb24gPSBcIjAuMTkuMVwiO1xuICAgICAgICB0aGlzLm1vZHVsZUNhY2hlID0gbmV3IE1hcCgpO1xuICAgICAgICB0aGlzLmxvYWRlckhvb2sgPSBuZXcgUGx1Z2luU3lzdGVtKHtcbiAgICAgICAgICAgIC8vIEZJWE1FOiBtYXkgbm90IGJlIHN1aXRhYmxlICwgbm90IG9wZW4gdG8gdGhlIHB1YmxpYyB5ZXRcbiAgICAgICAgICAgIGdldE1vZHVsZUluZm86IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgY3JlYXRlU2NyaXB0OiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGNyZWF0ZUxpbms6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgZmV0Y2g6IG5ldyBBc3luY0hvb2soKSxcbiAgICAgICAgICAgIGxvYWRFbnRyeUVycm9yOiBuZXcgQXN5bmNIb29rKCksXG4gICAgICAgICAgICBnZXRNb2R1bGVGYWN0b3J5OiBuZXcgQXN5bmNIb29rKClcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnJpZGdlSG9vayA9IG5ldyBQbHVnaW5TeXN0ZW0oe1xuICAgICAgICAgICAgYmVmb3JlQnJpZGdlUmVuZGVyOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGFmdGVyQnJpZGdlUmVuZGVyOiBuZXcgU3luY0hvb2soKSxcbiAgICAgICAgICAgIGJlZm9yZUJyaWRnZURlc3Ryb3k6IG5ldyBTeW5jSG9vaygpLFxuICAgICAgICAgICAgYWZ0ZXJCcmlkZ2VEZXN0cm95OiBuZXcgU3luY0hvb2soKVxuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcGx1Z2lucyA9IFVTRV9TTkFQU0hPVCA/IFtcbiAgICAgICAgICAgIHNuYXBzaG90UGx1Z2luKCksXG4gICAgICAgICAgICBnZW5lcmF0ZVByZWxvYWRBc3NldHNQbHVnaW4oKVxuICAgICAgICBdIDogW107XG4gICAgICAgIC8vIFRPRE86IFZhbGlkYXRlIHRoZSBkZXRhaWxzIG9mIHRoZSBvcHRpb25zXG4gICAgICAgIC8vIEluaXRpYWxpemUgb3B0aW9ucyB3aXRoIGRlZmF1bHQgdmFsdWVzXG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgaWQ6IGdldEJ1aWxkZXJJZCgpLFxuICAgICAgICAgICAgbmFtZTogdXNlck9wdGlvbnMubmFtZSxcbiAgICAgICAgICAgIHBsdWdpbnMsXG4gICAgICAgICAgICByZW1vdGVzOiBbXSxcbiAgICAgICAgICAgIHNoYXJlZDoge30sXG4gICAgICAgICAgICBpbkJyb3dzZXI6IGlzQnJvd3NlckVudigpXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMubmFtZSA9IHVzZXJPcHRpb25zLm5hbWU7XG4gICAgICAgIHRoaXMub3B0aW9ucyA9IGRlZmF1bHRPcHRpb25zO1xuICAgICAgICB0aGlzLnNuYXBzaG90SGFuZGxlciA9IG5ldyBTbmFwc2hvdEhhbmRsZXIodGhpcyk7XG4gICAgICAgIHRoaXMuc2hhcmVkSGFuZGxlciA9IG5ldyBTaGFyZWRIYW5kbGVyKHRoaXMpO1xuICAgICAgICB0aGlzLnJlbW90ZUhhbmRsZXIgPSBuZXcgUmVtb3RlSGFuZGxlcih0aGlzKTtcbiAgICAgICAgdGhpcy5zaGFyZVNjb3BlTWFwID0gdGhpcy5zaGFyZWRIYW5kbGVyLnNoYXJlU2NvcGVNYXA7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJQbHVnaW5zKFtcbiAgICAgICAgICAgIC4uLmRlZmF1bHRPcHRpb25zLnBsdWdpbnMsXG4gICAgICAgICAgICAuLi51c2VyT3B0aW9ucy5wbHVnaW5zIHx8IFtdXG4gICAgICAgIF0pO1xuICAgICAgICB0aGlzLm9wdGlvbnMgPSB0aGlzLmZvcm1hdE9wdGlvbnMoZGVmYXVsdE9wdGlvbnMsIHVzZXJPcHRpb25zKTtcbiAgICB9XG59XG5cbnZhciBpbmRleCA9IC8qI19fUFVSRV9fKi9PYmplY3QuZnJlZXplKHtcbiAgICBfX3Byb3RvX186IG51bGxcbn0pO1xuXG5leHBvcnQgeyBDdXJyZW50R2xvYmFsLCBHbG9iYWwsIE1vZHVsZSwgTW9kdWxlRmVkZXJhdGlvbiwgYWRkR2xvYmFsU25hcHNob3QsIGFzc2VydCwgZ2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yLCBnZXRHbG9iYWxTbmFwc2hvdCwgZ2V0SW5mb1dpdGhvdXRUeXBlLCBnZXRSZWdpc3RlcmVkU2hhcmUsIGdldFJlbW90ZUVudHJ5LCBnZXRSZW1vdGVJbmZvLCBoZWxwZXJzLCBpc1N0YXRpY1Jlc291cmNlc0VxdWFsLCBtYXRjaFJlbW90ZVdpdGhOYW1lQW5kRXhwb3NlLCByZWdpc3Rlckdsb2JhbFBsdWdpbnMsIHJlc2V0RmVkZXJhdGlvbkdsb2JhbEluZm8sIHNhZmVXcmFwcGVyLCBzYXRpc2Z5LCBzZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IsIHNldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZSwgaW5kZXggYXMgdHlwZXMgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSlpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlKHNvdXJjZSwgZXhjbHVkZWQpIHtcbiAgICBpZiAoc291cmNlID09IG51bGwpIHJldHVybiB7fTtcbiAgICB2YXIgdGFyZ2V0ID0ge307XG4gICAgdmFyIHNvdXJjZUtleXMgPSBPYmplY3Qua2V5cyhzb3VyY2UpO1xuICAgIHZhciBrZXksIGk7XG4gICAgZm9yKGkgPSAwOyBpIDwgc291cmNlS2V5cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgIGtleSA9IHNvdXJjZUtleXNbaV07XG4gICAgICAgIGlmIChleGNsdWRlZC5pbmRleE9mKGtleSkgPj0gMCkgY29udGludWU7XG4gICAgICAgIHRhcmdldFtrZXldID0gc291cmNlW2tleV07XG4gICAgfVxuICAgIHJldHVybiB0YXJnZXQ7XG59XG5cbmV4cG9ydCB7IF9leHRlbmRzIGFzIF8sIF9vYmplY3Rfd2l0aG91dF9wcm9wZXJ0aWVzX2xvb3NlIGFzIGEgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXBvbHlmaWxscy5lc20uanMubWFwXG4iLCJpbXBvcnQgeyBzZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IsIE1vZHVsZUZlZGVyYXRpb24sIGdldEdsb2JhbEZlZGVyYXRpb25Db25zdHJ1Y3Rvciwgc2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlLCBhc3NlcnQgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS1jb3JlJztcbmV4cG9ydCB7IE1vZHVsZSwgTW9kdWxlRmVkZXJhdGlvbiwgZ2V0UmVtb3RlRW50cnksIGdldFJlbW90ZUluZm8sIGxvYWRTY3JpcHQsIGxvYWRTY3JpcHROb2RlLCByZWdpc3Rlckdsb2JhbFBsdWdpbnMgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS1jb3JlJztcbmltcG9ydCB7IGdldFNob3J0RXJyb3JNc2csIFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9lcnJvci1jb2Rlcyc7XG5pbXBvcnQgeyBnIGFzIGdldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZSB9IGZyb20gJy4vdXRpbHMuZXNtLmpzJztcblxuZnVuY3Rpb24gY3JlYXRlSW5zdGFuY2Uob3B0aW9ucykge1xuICAgIC8vIFJldHJpZXZlIGRlYnVnIGNvbnN0cnVjdG9yXG4gICAgY29uc3QgTW9kdWxlRmVkZXJhdGlvbkNvbnN0cnVjdG9yID0gZ2V0R2xvYmFsRmVkZXJhdGlvbkNvbnN0cnVjdG9yKCkgfHwgTW9kdWxlRmVkZXJhdGlvbjtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBNb2R1bGVGZWRlcmF0aW9uQ29uc3RydWN0b3Iob3B0aW9ucyk7XG4gICAgc2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlKGluc3RhbmNlKTtcbiAgICByZXR1cm4gaW5zdGFuY2U7XG59XG5sZXQgRmVkZXJhdGlvbkluc3RhbmNlID0gbnVsbDtcbi8qKlxuICogQGRlcHJlY2F0ZWQgVXNlIGNyZWF0ZUluc3RhbmNlIG9yIGdldEluc3RhbmNlIGluc3RlYWRcbiAqLyBmdW5jdGlvbiBpbml0KG9wdGlvbnMpIHtcbiAgICAvLyBSZXRyaWV2ZSB0aGUgc2FtZSBpbnN0YW5jZSB3aXRoIHRoZSBzYW1lIG5hbWVcbiAgICBjb25zdCBpbnN0YW5jZSA9IGdldEdsb2JhbEZlZGVyYXRpb25JbnN0YW5jZShvcHRpb25zLm5hbWUsIG9wdGlvbnMudmVyc2lvbik7XG4gICAgaWYgKCFpbnN0YW5jZSkge1xuICAgICAgICBGZWRlcmF0aW9uSW5zdGFuY2UgPSBjcmVhdGVJbnN0YW5jZShvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIEZlZGVyYXRpb25JbnN0YW5jZTtcbiAgICB9IGVsc2Uge1xuICAgICAgICAvLyBNZXJnZSBvcHRpb25zXG4gICAgICAgIGluc3RhbmNlLmluaXRPcHRpb25zKG9wdGlvbnMpO1xuICAgICAgICBpZiAoIUZlZGVyYXRpb25JbnN0YW5jZSkge1xuICAgICAgICAgICAgRmVkZXJhdGlvbkluc3RhbmNlID0gaW5zdGFuY2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGxvYWRSZW1vdGUoLi4uYXJncykge1xuICAgIGFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDksIHJ1bnRpbWVEZXNjTWFwKSk7XG4gICAgY29uc3QgbG9hZFJlbW90ZTEgPSBGZWRlcmF0aW9uSW5zdGFuY2UubG9hZFJlbW90ZTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBsb2FkUmVtb3RlMS5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gbG9hZFNoYXJlKC4uLmFyZ3MpIHtcbiAgICBhc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCkpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgY29uc3QgbG9hZFNoYXJlMSA9IEZlZGVyYXRpb25JbnN0YW5jZS5sb2FkU2hhcmU7XG4gICAgcmV0dXJuIGxvYWRTaGFyZTEuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIGxvYWRTaGFyZVN5bmMoLi4uYXJncykge1xuICAgIGFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDksIHJ1bnRpbWVEZXNjTWFwKSk7XG4gICAgY29uc3QgbG9hZFNoYXJlU3luYzEgPSBGZWRlcmF0aW9uSW5zdGFuY2UubG9hZFNoYXJlU3luYztcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBsb2FkU2hhcmVTeW5jMS5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gcHJlbG9hZFJlbW90ZSguLi5hcmdzKSB7XG4gICAgYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwOSwgcnVudGltZURlc2NNYXApKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBGZWRlcmF0aW9uSW5zdGFuY2UucHJlbG9hZFJlbW90ZS5hcHBseShGZWRlcmF0aW9uSW5zdGFuY2UsIGFyZ3MpO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJSZW1vdGVzKC4uLmFyZ3MpIHtcbiAgICBhc3NlcnQoRmVkZXJhdGlvbkluc3RhbmNlLCBnZXRTaG9ydEVycm9yTXNnKFJVTlRJTUVfMDA5LCBydW50aW1lRGVzY01hcCkpO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBwcmVmZXItc3ByZWFkXG4gICAgcmV0dXJuIEZlZGVyYXRpb25JbnN0YW5jZS5yZWdpc3RlclJlbW90ZXMuYXBwbHkoRmVkZXJhdGlvbkluc3RhbmNlLCBhcmdzKTtcbn1cbmZ1bmN0aW9uIHJlZ2lzdGVyUGx1Z2lucyguLi5hcmdzKSB7XG4gICAgYXNzZXJ0KEZlZGVyYXRpb25JbnN0YW5jZSwgZ2V0U2hvcnRFcnJvck1zZyhSVU5USU1FXzAwOSwgcnVudGltZURlc2NNYXApKTtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgcHJlZmVyLXNwcmVhZFxuICAgIHJldHVybiBGZWRlcmF0aW9uSW5zdGFuY2UucmVnaXN0ZXJQbHVnaW5zLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG5mdW5jdGlvbiBnZXRJbnN0YW5jZSgpIHtcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlO1xufVxuZnVuY3Rpb24gcmVnaXN0ZXJTaGFyZWQoLi4uYXJncykge1xuICAgIGFzc2VydChGZWRlcmF0aW9uSW5zdGFuY2UsIGdldFNob3J0RXJyb3JNc2coUlVOVElNRV8wMDksIHJ1bnRpbWVEZXNjTWFwKSk7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIHByZWZlci1zcHJlYWRcbiAgICByZXR1cm4gRmVkZXJhdGlvbkluc3RhbmNlLnJlZ2lzdGVyU2hhcmVkLmFwcGx5KEZlZGVyYXRpb25JbnN0YW5jZSwgYXJncyk7XG59XG4vLyBJbmplY3QgZm9yIGRlYnVnXG5zZXRHbG9iYWxGZWRlcmF0aW9uQ29uc3RydWN0b3IoTW9kdWxlRmVkZXJhdGlvbik7XG5cbmV4cG9ydCB7IGNyZWF0ZUluc3RhbmNlLCBnZXRJbnN0YW5jZSwgaW5pdCwgbG9hZFJlbW90ZSwgbG9hZFNoYXJlLCBsb2FkU2hhcmVTeW5jLCBwcmVsb2FkUmVtb3RlLCByZWdpc3RlclBsdWdpbnMsIHJlZ2lzdGVyUmVtb3RlcywgcmVnaXN0ZXJTaGFyZWQgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWluZGV4LmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IEN1cnJlbnRHbG9iYWwgfSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZS1jb3JlJztcblxuLy8gaW5qZWN0ZWQgYnkgYnVuZGxlciwgc28gaXQgY2FuIG5vdCB1c2UgcnVudGltZS1jb3JlIHN0dWZmXG5mdW5jdGlvbiBnZXRCdWlsZGVySWQoKSB7XG4gICAgLy9AdHMtaWdub3JlXG4gICAgcmV0dXJuIHR5cGVvZiBGRURFUkFUSU9OX0JVSUxEX0lERU5USUZJRVIgIT09ICd1bmRlZmluZWQnID8gRkVERVJBVElPTl9CVUlMRF9JREVOVElGSUVSIDogJyc7XG59XG5mdW5jdGlvbiBnZXRHbG9iYWxGZWRlcmF0aW9uSW5zdGFuY2UobmFtZSwgdmVyc2lvbikge1xuICAgIGNvbnN0IGJ1aWxkSWQgPSBnZXRCdWlsZGVySWQoKTtcbiAgICByZXR1cm4gQ3VycmVudEdsb2JhbC5fX0ZFREVSQVRJT05fXy5fX0lOU1RBTkNFU19fLmZpbmQoKEdNSW5zdGFuY2UpPT57XG4gICAgICAgIGlmIChidWlsZElkICYmIEdNSW5zdGFuY2Uub3B0aW9ucy5pZCA9PT0gYnVpbGRJZCkge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdNSW5zdGFuY2Uub3B0aW9ucy5uYW1lID09PSBuYW1lICYmICFHTUluc3RhbmNlLm9wdGlvbnMudmVyc2lvbiAmJiAhdmVyc2lvbikge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKEdNSW5zdGFuY2Uub3B0aW9ucy5uYW1lID09PSBuYW1lICYmIHZlcnNpb24gJiYgR01JbnN0YW5jZS5vcHRpb25zLnZlcnNpb24gPT09IHZlcnNpb24pIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9KTtcbn1cblxuZXhwb3J0IHsgZ2V0R2xvYmFsRmVkZXJhdGlvbkluc3RhbmNlIGFzIGcgfTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPXV0aWxzLmVzbS5qcy5tYXBcbiIsImltcG9ydCB7IF8gYXMgX2V4dGVuZHMgfSBmcm9tICcuL3BvbHlmaWxscy5lc20uanMnO1xuXG5jb25zdCBGZWRlcmF0aW9uTW9kdWxlTWFuaWZlc3QgPSAnZmVkZXJhdGlvbi1tYW5pZmVzdC5qc29uJztcbmNvbnN0IE1BTklGRVNUX0VYVCA9ICcuanNvbic7XG5jb25zdCBCUk9XU0VSX0xPR19LRVkgPSAnRkVERVJBVElPTl9ERUJVRyc7XG5jb25zdCBOYW1lVHJhbnNmb3JtU3ltYm9sID0ge1xuICAgIEFUOiAnQCcsXG4gICAgSFlQSEVOOiAnLScsXG4gICAgU0xBU0g6ICcvJ1xufTtcbmNvbnN0IE5hbWVUcmFuc2Zvcm1NYXAgPSB7XG4gICAgW05hbWVUcmFuc2Zvcm1TeW1ib2wuQVRdOiAnc2NvcGVfJyxcbiAgICBbTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU5dOiAnXycsXG4gICAgW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdOiAnX18nXG59O1xuY29uc3QgRW5jb2RlZE5hbWVUcmFuc2Zvcm1NYXAgPSB7XG4gICAgW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF1dOiBOYW1lVHJhbnNmb3JtU3ltYm9sLkFULFxuICAgIFtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOXV06IE5hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOLFxuICAgIFtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdXTogTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSFxufTtcbmNvbnN0IFNFUEFSQVRPUiA9ICc6JztcbmNvbnN0IE1hbmlmZXN0RmlsZU5hbWUgPSAnbWYtbWFuaWZlc3QuanNvbic7XG5jb25zdCBTdGF0c0ZpbGVOYW1lID0gJ21mLXN0YXRzLmpzb24nO1xuY29uc3QgTUZNb2R1bGVUeXBlID0ge1xuICAgIE5QTTogJ25wbScsXG4gICAgQVBQOiAnYXBwJ1xufTtcbmNvbnN0IE1PRFVMRV9ERVZUT09MX0lERU5USUZJRVIgPSAnX19NRl9ERVZUT09MU19NT0RVTEVfSU5GT19fJztcbmNvbnN0IEVOQ09ERV9OQU1FX1BSRUZJWCA9ICdFTkNPREVfTkFNRV9QUkVGSVgnO1xuY29uc3QgVEVNUF9ESVIgPSAnLmZlZGVyYXRpb24nO1xuY29uc3QgTUZQcmVmZXRjaENvbW1vbiA9IHtcbiAgICBpZGVudGlmaWVyOiAnTUZEYXRhUHJlZmV0Y2gnLFxuICAgIGdsb2JhbEtleTogJ19fUFJFRkVUQ0hfXycsXG4gICAgbGlicmFyeTogJ21mLWRhdGEtcHJlZmV0Y2gnLFxuICAgIGV4cG9ydHNLZXk6ICdfX1BSRUZFVENIX0VYUE9SVFNfXycsXG4gICAgZmlsZU5hbWU6ICdib290c3RyYXAuanMnXG59O1xuXG52YXIgQ29udGFpbmVyUGx1Z2luID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5cbnZhciBDb250YWluZXJSZWZlcmVuY2VQbHVnaW4gPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsXG59KTtcblxudmFyIE1vZHVsZUZlZGVyYXRpb25QbHVnaW4gPSAvKiNfX1BVUkVfXyovT2JqZWN0LmZyZWV6ZSh7XG4gICAgX19wcm90b19fOiBudWxsXG59KTtcblxudmFyIFNoYXJlUGx1Z2luID0gLyojX19QVVJFX18qL09iamVjdC5mcmVlemUoe1xuICAgIF9fcHJvdG9fXzogbnVsbFxufSk7XG5cbmZ1bmN0aW9uIGlzQnJvd3NlckVudigpIHtcbiAgICByZXR1cm4gdHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgdHlwZW9mIHdpbmRvdy5kb2N1bWVudCAhPT0gJ3VuZGVmaW5lZCc7XG59XG5mdW5jdGlvbiBpc1JlYWN0TmF0aXZlRW52KCkge1xuICAgIHZhciBfbmF2aWdhdG9yO1xuICAgIHJldHVybiB0eXBlb2YgbmF2aWdhdG9yICE9PSAndW5kZWZpbmVkJyAmJiAoKF9uYXZpZ2F0b3IgPSBuYXZpZ2F0b3IpID09IG51bGwgPyB2b2lkIDAgOiBfbmF2aWdhdG9yLnByb2R1Y3QpID09PSAnUmVhY3ROYXRpdmUnO1xufVxuZnVuY3Rpb24gaXNCcm93c2VyRGVidWcoKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgaWYgKGlzQnJvd3NlckVudigpICYmIHdpbmRvdy5sb2NhbFN0b3JhZ2UpIHtcbiAgICAgICAgICAgIHJldHVybiBCb29sZWFuKGxvY2FsU3RvcmFnZS5nZXRJdGVtKEJST1dTRVJfTE9HX0tFWSkpO1xuICAgICAgICB9XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG59XG5mdW5jdGlvbiBpc0RlYnVnTW9kZSgpIHtcbiAgICBpZiAodHlwZW9mIHByb2Nlc3MgIT09ICd1bmRlZmluZWQnICYmIHByb2Nlc3MuZW52ICYmIHByb2Nlc3MuZW52WydGRURFUkFUSU9OX0RFQlVHJ10pIHtcbiAgICAgICAgcmV0dXJuIEJvb2xlYW4ocHJvY2Vzcy5lbnZbJ0ZFREVSQVRJT05fREVCVUcnXSk7XG4gICAgfVxuICAgIGlmICh0eXBlb2YgRkVERVJBVElPTl9ERUJVRyAhPT0gJ3VuZGVmaW5lZCcgJiYgQm9vbGVhbihGRURFUkFUSU9OX0RFQlVHKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgcmV0dXJuIGlzQnJvd3NlckRlYnVnKCk7XG59XG5jb25zdCBnZXRQcm9jZXNzRW52ID0gZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBwcm9jZXNzICE9PSAndW5kZWZpbmVkJyAmJiBwcm9jZXNzLmVudiA/IHByb2Nlc3MuZW52IDoge307XG59O1xuXG5jb25zdCBMT0dfQ0FURUdPUlkgPSAnWyBGZWRlcmF0aW9uIFJ1bnRpbWUgXSc7XG4vLyBlbnRyeTogbmFtZTp2ZXJzaW9uICAgdmVyc2lvbiA6IDEuMC4wIHwgXjEuMi4zXG4vLyBlbnRyeTogbmFtZTplbnRyeSAgZW50cnk6ICBodHRwczovL2xvY2FsaG9zdDo5MDAwL2ZlZGVyYXRpb24tbWFuaWZlc3QuanNvblxuY29uc3QgcGFyc2VFbnRyeSA9IChzdHIsIGRldlZlck9yVXJsLCBzZXBhcmF0b3IgPSBTRVBBUkFUT1IpPT57XG4gICAgY29uc3Qgc3RyU3BsaXQgPSBzdHIuc3BsaXQoc2VwYXJhdG9yKTtcbiAgICBjb25zdCBkZXZWZXJzaW9uT3JVcmwgPSBnZXRQcm9jZXNzRW52KClbJ05PREVfRU5WJ10gPT09ICdkZXZlbG9wbWVudCcgJiYgZGV2VmVyT3JVcmw7XG4gICAgY29uc3QgZGVmYXVsdFZlcnNpb24gPSAnKic7XG4gICAgY29uc3QgaXNFbnRyeSA9IChzKT0+cy5zdGFydHNXaXRoKCdodHRwJykgfHwgcy5pbmNsdWRlcyhNQU5JRkVTVF9FWFQpO1xuICAgIC8vIENoZWNrIGlmIHRoZSBzdHJpbmcgc3RhcnRzIHdpdGggYSB0eXBlXG4gICAgaWYgKHN0clNwbGl0Lmxlbmd0aCA+PSAyKSB7XG4gICAgICAgIGxldCBbbmFtZSwgLi4udmVyc2lvbk9yRW50cnlBcnJdID0gc3RyU3BsaXQ7XG4gICAgICAgIC8vIEBuYW1lQG1hbmlmZXN0LXVybC5qc29uXG4gICAgICAgIGlmIChzdHIuc3RhcnRzV2l0aChzZXBhcmF0b3IpKSB7XG4gICAgICAgICAgICBuYW1lID0gc3RyU3BsaXQuc2xpY2UoMCwgMikuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICAgICAgdmVyc2lvbk9yRW50cnlBcnIgPSBbXG4gICAgICAgICAgICAgICAgZGV2VmVyc2lvbk9yVXJsIHx8IHN0clNwbGl0LnNsaWNlKDIpLmpvaW4oc2VwYXJhdG9yKVxuICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgdmVyc2lvbk9yRW50cnkgPSBkZXZWZXJzaW9uT3JVcmwgfHwgdmVyc2lvbk9yRW50cnlBcnIuam9pbihzZXBhcmF0b3IpO1xuICAgICAgICBpZiAoaXNFbnRyeSh2ZXJzaW9uT3JFbnRyeSkpIHtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICBlbnRyeTogdmVyc2lvbk9yRW50cnlcbiAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyBBcHBseSB2ZXJzaW9uIHJ1bGVcbiAgICAgICAgICAgIC8vIGRldlZlcnNpb25PclVybCA9PiBpbnB1dFZlcnNpb24gPT4gZGVmYXVsdFZlcnNpb25cbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgbmFtZSxcbiAgICAgICAgICAgICAgICB2ZXJzaW9uOiB2ZXJzaW9uT3JFbnRyeSB8fCBkZWZhdWx0VmVyc2lvblxuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgIH0gZWxzZSBpZiAoc3RyU3BsaXQubGVuZ3RoID09PSAxKSB7XG4gICAgICAgIGNvbnN0IFtuYW1lXSA9IHN0clNwbGl0O1xuICAgICAgICBpZiAoZGV2VmVyc2lvbk9yVXJsICYmIGlzRW50cnkoZGV2VmVyc2lvbk9yVXJsKSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBuYW1lLFxuICAgICAgICAgICAgICAgIGVudHJ5OiBkZXZWZXJzaW9uT3JVcmxcbiAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICB2ZXJzaW9uOiBkZXZWZXJzaW9uT3JVcmwgfHwgZGVmYXVsdFZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyBgSW52YWxpZCBlbnRyeSB2YWx1ZTogJHtzdHJ9YDtcbiAgICB9XG59O1xuY29uc3QgY29tcG9zZUtleVdpdGhTZXBhcmF0b3IgPSBmdW5jdGlvbiguLi5hcmdzKSB7XG4gICAgaWYgKCFhcmdzLmxlbmd0aCkge1xuICAgICAgICByZXR1cm4gJyc7XG4gICAgfVxuICAgIHJldHVybiBhcmdzLnJlZHVjZSgoc3VtLCBjdXIpPT57XG4gICAgICAgIGlmICghY3VyKSB7XG4gICAgICAgICAgICByZXR1cm4gc3VtO1xuICAgICAgICB9XG4gICAgICAgIGlmICghc3VtKSB7XG4gICAgICAgICAgICByZXR1cm4gY3VyO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBgJHtzdW19JHtTRVBBUkFUT1J9JHtjdXJ9YDtcbiAgICB9LCAnJyk7XG59O1xuY29uc3QgZW5jb2RlTmFtZSA9IGZ1bmN0aW9uKG5hbWUsIHByZWZpeCA9ICcnLCB3aXRoRXh0ID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBleHQgPSB3aXRoRXh0ID8gJy5qcycgOiAnJztcbiAgICAgICAgcmV0dXJuIGAke3ByZWZpeH0ke25hbWUucmVwbGFjZShuZXcgUmVnRXhwKGAke05hbWVUcmFuc2Zvcm1TeW1ib2wuQVR9YCwgJ2cnKSwgTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkFUXSkucmVwbGFjZShuZXcgUmVnRXhwKGAke05hbWVUcmFuc2Zvcm1TeW1ib2wuSFlQSEVOfWAsICdnJyksIE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5IWVBIRU5dKS5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7TmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSH1gLCAnZycpLCBOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdKX0ke2V4dH1gO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgICB0aHJvdyBlcnI7XG4gICAgfVxufTtcbmNvbnN0IGRlY29kZU5hbWUgPSBmdW5jdGlvbihuYW1lLCBwcmVmaXgsIHdpdGhFeHQpIHtcbiAgICB0cnkge1xuICAgICAgICBsZXQgZGVjb2RlZE5hbWUgPSBuYW1lO1xuICAgICAgICBpZiAocHJlZml4KSB7XG4gICAgICAgICAgICBpZiAoIWRlY29kZWROYW1lLnN0YXJ0c1dpdGgocHJlZml4KSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWNvZGVkTmFtZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRlY29kZWROYW1lID0gZGVjb2RlZE5hbWUucmVwbGFjZShuZXcgUmVnRXhwKHByZWZpeCwgJ2cnKSwgJycpO1xuICAgICAgICB9XG4gICAgICAgIGRlY29kZWROYW1lID0gZGVjb2RlZE5hbWUucmVwbGFjZShuZXcgUmVnRXhwKGAke05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5BVF19YCwgJ2cnKSwgRW5jb2RlZE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkFUXV0pLnJlcGxhY2UobmV3IFJlZ0V4cChgJHtOYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1TeW1ib2wuU0xBU0hdfWAsICdnJyksIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwW05hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybVN5bWJvbC5TTEFTSF1dKS5yZXBsYWNlKG5ldyBSZWdFeHAoYCR7TmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTl19YCwgJ2cnKSwgRW5jb2RlZE5hbWVUcmFuc2Zvcm1NYXBbTmFtZVRyYW5zZm9ybU1hcFtOYW1lVHJhbnNmb3JtU3ltYm9sLkhZUEhFTl1dKTtcbiAgICAgICAgaWYgKHdpdGhFeHQpIHtcbiAgICAgICAgICAgIGRlY29kZWROYW1lID0gZGVjb2RlZE5hbWUucmVwbGFjZSgnLmpzJywgJycpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBkZWNvZGVkTmFtZTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn07XG5jb25zdCBnZW5lcmF0ZUV4cG9zZUZpbGVuYW1lID0gKGV4cG9zZU5hbWUsIHdpdGhFeHQpPT57XG4gICAgaWYgKCFleHBvc2VOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgbGV0IGV4cG9zZSA9IGV4cG9zZU5hbWU7XG4gICAgaWYgKGV4cG9zZSA9PT0gJy4nKSB7XG4gICAgICAgIGV4cG9zZSA9ICdkZWZhdWx0X2V4cG9ydCc7XG4gICAgfVxuICAgIGlmIChleHBvc2Uuc3RhcnRzV2l0aCgnLi8nKSkge1xuICAgICAgICBleHBvc2UgPSBleHBvc2UucmVwbGFjZSgnLi8nLCAnJyk7XG4gICAgfVxuICAgIHJldHVybiBlbmNvZGVOYW1lKGV4cG9zZSwgJ19fZmVkZXJhdGlvbl9leHBvc2VfJywgd2l0aEV4dCk7XG59O1xuY29uc3QgZ2VuZXJhdGVTaGFyZUZpbGVuYW1lID0gKHBrZ05hbWUsIHdpdGhFeHQpPT57XG4gICAgaWYgKCFwa2dOYW1lKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG4gICAgcmV0dXJuIGVuY29kZU5hbWUocGtnTmFtZSwgJ19fZmVkZXJhdGlvbl9zaGFyZWRfJywgd2l0aEV4dCk7XG59O1xuY29uc3QgZ2V0UmVzb3VyY2VVcmwgPSAobW9kdWxlLCBzb3VyY2VVcmwpPT57XG4gICAgaWYgKCdnZXRQdWJsaWNQYXRoJyBpbiBtb2R1bGUpIHtcbiAgICAgICAgbGV0IHB1YmxpY1BhdGg7XG4gICAgICAgIGlmICghbW9kdWxlLmdldFB1YmxpY1BhdGguc3RhcnRzV2l0aCgnZnVuY3Rpb24nKSkge1xuICAgICAgICAgICAgcHVibGljUGF0aCA9IG5ldyBGdW5jdGlvbihtb2R1bGUuZ2V0UHVibGljUGF0aCkoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHB1YmxpY1BhdGggPSBuZXcgRnVuY3Rpb24oJ3JldHVybiAnICsgbW9kdWxlLmdldFB1YmxpY1BhdGgpKCkoKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gYCR7cHVibGljUGF0aH0ke3NvdXJjZVVybH1gO1xuICAgIH0gZWxzZSBpZiAoJ3B1YmxpY1BhdGgnIGluIG1vZHVsZSkge1xuICAgICAgICBpZiAoIWlzQnJvd3NlckVudigpICYmICFpc1JlYWN0TmF0aXZlRW52KCkgJiYgJ3NzclB1YmxpY1BhdGgnIGluIG1vZHVsZSkge1xuICAgICAgICAgICAgcmV0dXJuIGAke21vZHVsZS5zc3JQdWJsaWNQYXRofSR7c291cmNlVXJsfWA7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGAke21vZHVsZS5wdWJsaWNQYXRofSR7c291cmNlVXJsfWA7XG4gICAgfSBlbHNlIHtcbiAgICAgICAgY29uc29sZS53YXJuKCdDYW5ub3QgZ2V0IHJlc291cmNlIFVSTC4gSWYgaW4gZGVidWcgbW9kZSwgcGxlYXNlIGlnbm9yZS4nLCBtb2R1bGUsIHNvdXJjZVVybCk7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59O1xuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9leHBsaWNpdC1tb2R1bGUtYm91bmRhcnktdHlwZXNcbmNvbnN0IGFzc2VydCA9IChjb25kaXRpb24sIG1zZyk9PntcbiAgICBpZiAoIWNvbmRpdGlvbikge1xuICAgICAgICBlcnJvcihtc2cpO1xuICAgIH1cbn07XG5jb25zdCBlcnJvciA9IChtc2cpPT57XG4gICAgdGhyb3cgbmV3IEVycm9yKGAke0xPR19DQVRFR09SWX06ICR7bXNnfWApO1xufTtcbmNvbnN0IHdhcm4gPSAobXNnKT0+e1xuICAgIGNvbnNvbGUud2FybihgJHtMT0dfQ0FURUdPUll9OiAke21zZ31gKTtcbn07XG5mdW5jdGlvbiBzYWZlVG9TdHJpbmcoaW5mbykge1xuICAgIHRyeSB7XG4gICAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeShpbmZvLCBudWxsLCAyKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiAnJztcbiAgICB9XG59XG4vLyBSZWdFeHAgZm9yIHZlcnNpb24gc3RyaW5nXG5jb25zdCBWRVJTSU9OX1BBVFRFUk5fUkVHRVhQID0gL14oW1xcZF49djw+fl18Wyp4WF0kKS87XG5mdW5jdGlvbiBpc1JlcXVpcmVkVmVyc2lvbihzdHIpIHtcbiAgICByZXR1cm4gVkVSU0lPTl9QQVRURVJOX1JFR0VYUC50ZXN0KHN0cik7XG59XG5cbmNvbnN0IHNpbXBsZUpvaW5SZW1vdGVFbnRyeSA9IChyUGF0aCwgck5hbWUpPT57XG4gICAgaWYgKCFyUGF0aCkge1xuICAgICAgICByZXR1cm4gck5hbWU7XG4gICAgfVxuICAgIGNvbnN0IHRyYW5zZm9ybVBhdGggPSAoc3RyKT0+e1xuICAgICAgICBpZiAoc3RyID09PSAnLicpIHtcbiAgICAgICAgICAgIHJldHVybiAnJztcbiAgICAgICAgfVxuICAgICAgICBpZiAoc3RyLnN0YXJ0c1dpdGgoJy4vJykpIHtcbiAgICAgICAgICAgIHJldHVybiBzdHIucmVwbGFjZSgnLi8nLCAnJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHN0ci5zdGFydHNXaXRoKCcvJykpIHtcbiAgICAgICAgICAgIGNvbnN0IHN0cldpdGhvdXRTbGFzaCA9IHN0ci5zbGljZSgxKTtcbiAgICAgICAgICAgIGlmIChzdHJXaXRob3V0U2xhc2guZW5kc1dpdGgoJy8nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBzdHJXaXRob3V0U2xhc2guc2xpY2UoMCwgLTEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHN0cldpdGhvdXRTbGFzaDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gc3RyO1xuICAgIH07XG4gICAgY29uc3QgdHJhbnNmb3JtZWRQYXRoID0gdHJhbnNmb3JtUGF0aChyUGF0aCk7XG4gICAgaWYgKCF0cmFuc2Zvcm1lZFBhdGgpIHtcbiAgICAgICAgcmV0dXJuIHJOYW1lO1xuICAgIH1cbiAgICBpZiAodHJhbnNmb3JtZWRQYXRoLmVuZHNXaXRoKCcvJykpIHtcbiAgICAgICAgcmV0dXJuIGAke3RyYW5zZm9ybWVkUGF0aH0ke3JOYW1lfWA7XG4gICAgfVxuICAgIHJldHVybiBgJHt0cmFuc2Zvcm1lZFBhdGh9LyR7ck5hbWV9YDtcbn07XG5mdW5jdGlvbiBpbmZlckF1dG9QdWJsaWNQYXRoKHVybCkge1xuICAgIHJldHVybiB1cmwucmVwbGFjZSgvIy4qJC8sICcnKS5yZXBsYWNlKC9cXD8uKiQvLCAnJykucmVwbGFjZSgvXFwvW15cXC9dKyQvLCAnLycpO1xufVxuLy8gUHJpb3JpdHk6IG92ZXJyaWRlcyA+IHJlbW90ZXNcbi8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBtYXgtbGluZXMtcGVyLWZ1bmN0aW9uXG5mdW5jdGlvbiBnZW5lcmF0ZVNuYXBzaG90RnJvbU1hbmlmZXN0KG1hbmlmZXN0LCBvcHRpb25zID0ge30pIHtcbiAgICB2YXIgX21hbmlmZXN0X21ldGFEYXRhLCBfbWFuaWZlc3RfbWV0YURhdGExO1xuICAgIGNvbnN0IHsgcmVtb3RlcyA9IHt9LCBvdmVycmlkZXMgPSB7fSwgdmVyc2lvbiB9ID0gb3B0aW9ucztcbiAgICBsZXQgcmVtb3RlU25hcHNob3Q7XG4gICAgY29uc3QgZ2V0UHVibGljUGF0aCA9ICgpPT57XG4gICAgICAgIGlmICgncHVibGljUGF0aCcgaW4gbWFuaWZlc3QubWV0YURhdGEpIHtcbiAgICAgICAgICAgIGlmIChtYW5pZmVzdC5tZXRhRGF0YS5wdWJsaWNQYXRoID09PSAnYXV0bycgJiYgdmVyc2lvbikge1xuICAgICAgICAgICAgICAgIC8vIHVzZSBzYW1lIGltcGxlbWVudGF0aW9uIGFzIHB1YmxpY1BhdGggYXV0byBydW50aW1lIG1vZHVsZSBpbXBsZW1lbnRzXG4gICAgICAgICAgICAgICAgcmV0dXJuIGluZmVyQXV0b1B1YmxpY1BhdGgodmVyc2lvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gbWFuaWZlc3QubWV0YURhdGEucHVibGljUGF0aDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBtYW5pZmVzdC5tZXRhRGF0YS5nZXRQdWJsaWNQYXRoO1xuICAgICAgICB9XG4gICAgfTtcbiAgICBjb25zdCBvdmVycmlkZXNLZXlzID0gT2JqZWN0LmtleXMob3ZlcnJpZGVzKTtcbiAgICBsZXQgcmVtb3Rlc0luZm8gPSB7fTtcbiAgICAvLyBJZiByZW1vdGVzIGFyZSBub3QgcHJvdmlkZWQsIG9ubHkgdGhlIHJlbW90ZXMgaW4gdGhlIG1hbmlmZXN0IHdpbGwgYmUgcmVhZFxuICAgIGlmICghT2JqZWN0LmtleXMocmVtb3RlcykubGVuZ3RoKSB7XG4gICAgICAgIHZhciBfbWFuaWZlc3RfcmVtb3RlcztcbiAgICAgICAgcmVtb3Rlc0luZm8gPSAoKF9tYW5pZmVzdF9yZW1vdGVzID0gbWFuaWZlc3QucmVtb3RlcykgPT0gbnVsbCA/IHZvaWQgMCA6IF9tYW5pZmVzdF9yZW1vdGVzLnJlZHVjZSgocmVzLCBuZXh0KT0+e1xuICAgICAgICAgICAgbGV0IG1hdGNoZWRWZXJzaW9uO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IG5leHQuZmVkZXJhdGlvbkNvbnRhaW5lck5hbWU7XG4gICAgICAgICAgICAvLyBvdmVycmlkZXMgaGF2ZSBoaWdoZXIgcHJpb3JpdHlcbiAgICAgICAgICAgIGlmIChvdmVycmlkZXNLZXlzLmluY2x1ZGVzKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb24gPSBvdmVycmlkZXNbbmFtZV07XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmICgndmVyc2lvbicgaW4gbmV4dCkge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvbiA9IG5leHQudmVyc2lvbjtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBtYXRjaGVkVmVyc2lvbiA9IG5leHQuZW50cnk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmVzW25hbWVdID0ge1xuICAgICAgICAgICAgICAgIG1hdGNoZWRWZXJzaW9uXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgcmV0dXJuIHJlcztcbiAgICAgICAgfSwge30pKSB8fCB7fTtcbiAgICB9XG4gICAgLy8gSWYgcmVtb3RlcyAoZGVwbG95IHNjZW5hcmlvKSBhcmUgc3BlY2lmaWVkLCB0aGV5IG5lZWQgdG8gYmUgdHJhdmVyc2VkIGFnYWluXG4gICAgT2JqZWN0LmtleXMocmVtb3RlcykuZm9yRWFjaCgoa2V5KT0+cmVtb3Rlc0luZm9ba2V5XSA9IHtcbiAgICAgICAgICAgIC8vIG92ZXJyaWRlcyB3aWxsIG92ZXJyaWRlIGRlcGVuZGVuY2llc1xuICAgICAgICAgICAgbWF0Y2hlZFZlcnNpb246IG92ZXJyaWRlc0tleXMuaW5jbHVkZXMoa2V5KSA/IG92ZXJyaWRlc1trZXldIDogcmVtb3Rlc1trZXldXG4gICAgICAgIH0pO1xuICAgIGNvbnN0IHsgcmVtb3RlRW50cnk6IHsgcGF0aDogcmVtb3RlRW50cnlQYXRoLCBuYW1lOiByZW1vdGVFbnRyeU5hbWUsIHR5cGU6IHJlbW90ZUVudHJ5VHlwZSB9LCB0eXBlczogcmVtb3RlVHlwZXMsIGJ1aWxkSW5mbzogeyBidWlsZFZlcnNpb24gfSwgZ2xvYmFsTmFtZSwgc3NyUmVtb3RlRW50cnkgfSA9IG1hbmlmZXN0Lm1ldGFEYXRhO1xuICAgIGNvbnN0IHsgZXhwb3NlcyB9ID0gbWFuaWZlc3Q7XG4gICAgbGV0IGJhc2ljUmVtb3RlU25hcHNob3QgPSB7XG4gICAgICAgIHZlcnNpb246IHZlcnNpb24gPyB2ZXJzaW9uIDogJycsXG4gICAgICAgIGJ1aWxkVmVyc2lvbixcbiAgICAgICAgZ2xvYmFsTmFtZSxcbiAgICAgICAgcmVtb3RlRW50cnk6IHNpbXBsZUpvaW5SZW1vdGVFbnRyeShyZW1vdGVFbnRyeVBhdGgsIHJlbW90ZUVudHJ5TmFtZSksXG4gICAgICAgIHJlbW90ZUVudHJ5VHlwZSxcbiAgICAgICAgcmVtb3RlVHlwZXM6IHNpbXBsZUpvaW5SZW1vdGVFbnRyeShyZW1vdGVUeXBlcy5wYXRoLCByZW1vdGVUeXBlcy5uYW1lKSxcbiAgICAgICAgcmVtb3RlVHlwZXNaaXA6IHJlbW90ZVR5cGVzLnppcCB8fCAnJyxcbiAgICAgICAgcmVtb3RlVHlwZXNBUEk6IHJlbW90ZVR5cGVzLmFwaSB8fCAnJyxcbiAgICAgICAgcmVtb3Rlc0luZm8sXG4gICAgICAgIHNoYXJlZDogbWFuaWZlc3QgPT0gbnVsbCA/IHZvaWQgMCA6IG1hbmlmZXN0LnNoYXJlZC5tYXAoKGl0ZW0pPT4oe1xuICAgICAgICAgICAgICAgIGFzc2V0czogaXRlbS5hc3NldHMsXG4gICAgICAgICAgICAgICAgc2hhcmVkTmFtZTogaXRlbS5uYW1lLFxuICAgICAgICAgICAgICAgIHZlcnNpb246IGl0ZW0udmVyc2lvblxuICAgICAgICAgICAgfSkpLFxuICAgICAgICBtb2R1bGVzOiBleHBvc2VzID09IG51bGwgPyB2b2lkIDAgOiBleHBvc2VzLm1hcCgoZXhwb3NlKT0+KHtcbiAgICAgICAgICAgICAgICBtb2R1bGVOYW1lOiBleHBvc2UubmFtZSxcbiAgICAgICAgICAgICAgICBtb2R1bGVQYXRoOiBleHBvc2UucGF0aCxcbiAgICAgICAgICAgICAgICBhc3NldHM6IGV4cG9zZS5hc3NldHNcbiAgICAgICAgICAgIH0pKVxuICAgIH07XG4gICAgaWYgKChfbWFuaWZlc3RfbWV0YURhdGEgPSBtYW5pZmVzdC5tZXRhRGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tYW5pZmVzdF9tZXRhRGF0YS5wcmVmZXRjaEludGVyZmFjZSkge1xuICAgICAgICBjb25zdCBwcmVmZXRjaEludGVyZmFjZSA9IG1hbmlmZXN0Lm1ldGFEYXRhLnByZWZldGNoSW50ZXJmYWNlO1xuICAgICAgICBiYXNpY1JlbW90ZVNuYXBzaG90ID0gX2V4dGVuZHMoe30sIGJhc2ljUmVtb3RlU25hcHNob3QsIHtcbiAgICAgICAgICAgIHByZWZldGNoSW50ZXJmYWNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpZiAoKF9tYW5pZmVzdF9tZXRhRGF0YTEgPSBtYW5pZmVzdC5tZXRhRGF0YSkgPT0gbnVsbCA/IHZvaWQgMCA6IF9tYW5pZmVzdF9tZXRhRGF0YTEucHJlZmV0Y2hFbnRyeSkge1xuICAgICAgICBjb25zdCB7IHBhdGgsIG5hbWUsIHR5cGUgfSA9IG1hbmlmZXN0Lm1ldGFEYXRhLnByZWZldGNoRW50cnk7XG4gICAgICAgIGJhc2ljUmVtb3RlU25hcHNob3QgPSBfZXh0ZW5kcyh7fSwgYmFzaWNSZW1vdGVTbmFwc2hvdCwge1xuICAgICAgICAgICAgcHJlZmV0Y2hFbnRyeTogc2ltcGxlSm9pblJlbW90ZUVudHJ5KHBhdGgsIG5hbWUpLFxuICAgICAgICAgICAgcHJlZmV0Y2hFbnRyeVR5cGU6IHR5cGVcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICgncHVibGljUGF0aCcgaW4gbWFuaWZlc3QubWV0YURhdGEpIHtcbiAgICAgICAgcmVtb3RlU25hcHNob3QgPSBfZXh0ZW5kcyh7fSwgYmFzaWNSZW1vdGVTbmFwc2hvdCwge1xuICAgICAgICAgICAgcHVibGljUGF0aDogZ2V0UHVibGljUGF0aCgpLFxuICAgICAgICAgICAgc3NyUHVibGljUGF0aDogbWFuaWZlc3QubWV0YURhdGEuc3NyUHVibGljUGF0aFxuICAgICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgICByZW1vdGVTbmFwc2hvdCA9IF9leHRlbmRzKHt9LCBiYXNpY1JlbW90ZVNuYXBzaG90LCB7XG4gICAgICAgICAgICBnZXRQdWJsaWNQYXRoOiBnZXRQdWJsaWNQYXRoKClcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmIChzc3JSZW1vdGVFbnRyeSkge1xuICAgICAgICBjb25zdCBmdWxsU1NSUmVtb3RlRW50cnkgPSBzaW1wbGVKb2luUmVtb3RlRW50cnkoc3NyUmVtb3RlRW50cnkucGF0aCwgc3NyUmVtb3RlRW50cnkubmFtZSk7XG4gICAgICAgIHJlbW90ZVNuYXBzaG90LnNzclJlbW90ZUVudHJ5ID0gZnVsbFNTUlJlbW90ZUVudHJ5O1xuICAgICAgICByZW1vdGVTbmFwc2hvdC5zc3JSZW1vdGVFbnRyeVR5cGUgPSBzc3JSZW1vdGVFbnRyeS50eXBlIHx8ICdjb21tb25qcy1tb2R1bGUnO1xuICAgIH1cbiAgICByZXR1cm4gcmVtb3RlU25hcHNob3Q7XG59XG5mdW5jdGlvbiBpc01hbmlmZXN0UHJvdmlkZXIobW9kdWxlSW5mbykge1xuICAgIGlmICgncmVtb3RlRW50cnknIGluIG1vZHVsZUluZm8gJiYgbW9kdWxlSW5mby5yZW1vdGVFbnRyeS5pbmNsdWRlcyhNQU5JRkVTVF9FWFQpKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG59XG5cbmNvbnN0IFBSRUZJWCA9ICdbIE1vZHVsZSBGZWRlcmF0aW9uIF0nO1xubGV0IExvZ2dlciA9IGNsYXNzIExvZ2dlciB7XG4gICAgc2V0UHJlZml4KHByZWZpeCkge1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG4gICAgbG9nKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmaXgsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICB3YXJuKC4uLmFyZ3MpIHtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5wcmVmaXgsIC4uLmFyZ3MpO1xuICAgIH1cbiAgICBlcnJvciguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgc3VjY2VzcyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgaW5mbyguLi5hcmdzKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICB9XG4gICAgcmVhZHkoLi4uYXJncykge1xuICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnByZWZpeCwgLi4uYXJncyk7XG4gICAgfVxuICAgIGRlYnVnKC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKGlzRGVidWdNb2RlKCkpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMucHJlZml4LCAuLi5hcmdzKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdHJ1Y3RvcihwcmVmaXgpe1xuICAgICAgICB0aGlzLnByZWZpeCA9IHByZWZpeDtcbiAgICB9XG59O1xuZnVuY3Rpb24gY3JlYXRlTG9nZ2VyKHByZWZpeCkge1xuICAgIHJldHVybiBuZXcgTG9nZ2VyKHByZWZpeCk7XG59XG5jb25zdCBsb2dnZXIgPSBjcmVhdGVMb2dnZXIoUFJFRklYKTtcblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbmFzeW5jIGZ1bmN0aW9uIHNhZmVXcmFwcGVyKGNhbGxiYWNrLCBkaXNhYmxlV2Fybikge1xuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGNhbGxiYWNrKCk7XG4gICAgICAgIHJldHVybiByZXM7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAhZGlzYWJsZVdhcm4gJiYgd2FybihlKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGlzU3RhdGljUmVzb3VyY2VzRXF1YWwodXJsMSwgdXJsMikge1xuICAgIGNvbnN0IFJFR19FWFAgPSAvXihodHRwcz86KT9cXC9cXC8vaTtcbiAgICAvLyBUcmFuc2Zvcm0gdXJsMSBhbmQgdXJsMiBpbnRvIHJlbGF0aXZlIHBhdGhzXG4gICAgY29uc3QgcmVsYXRpdmVVcmwxID0gdXJsMS5yZXBsYWNlKFJFR19FWFAsICcnKS5yZXBsYWNlKC9cXC8kLywgJycpO1xuICAgIGNvbnN0IHJlbGF0aXZlVXJsMiA9IHVybDIucmVwbGFjZShSRUdfRVhQLCAnJykucmVwbGFjZSgvXFwvJC8sICcnKTtcbiAgICAvLyBDaGVjayBpZiB0aGUgcmVsYXRpdmUgcGF0aHMgYXJlIGlkZW50aWNhbFxuICAgIHJldHVybiByZWxhdGl2ZVVybDEgPT09IHJlbGF0aXZlVXJsMjtcbn1cbmZ1bmN0aW9uIGNyZWF0ZVNjcmlwdChpbmZvKSB7XG4gICAgLy8gUmV0cmlldmUgdGhlIGV4aXN0aW5nIHNjcmlwdCBlbGVtZW50IGJ5IGl0cyBzcmMgYXR0cmlidXRlXG4gICAgbGV0IHNjcmlwdCA9IG51bGw7XG4gICAgbGV0IG5lZWRBdHRhY2ggPSB0cnVlO1xuICAgIGxldCB0aW1lb3V0ID0gMjAwMDA7XG4gICAgbGV0IHRpbWVvdXRJZDtcbiAgICBjb25zdCBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ3NjcmlwdCcpO1xuICAgIGZvcihsZXQgaSA9IDA7IGkgPCBzY3JpcHRzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgY29uc3QgcyA9IHNjcmlwdHNbaV07XG4gICAgICAgIGNvbnN0IHNjcmlwdFNyYyA9IHMuZ2V0QXR0cmlidXRlKCdzcmMnKTtcbiAgICAgICAgaWYgKHNjcmlwdFNyYyAmJiBpc1N0YXRpY1Jlc291cmNlc0VxdWFsKHNjcmlwdFNyYywgaW5mby51cmwpKSB7XG4gICAgICAgICAgICBzY3JpcHQgPSBzO1xuICAgICAgICAgICAgbmVlZEF0dGFjaCA9IGZhbHNlO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFzY3JpcHQpIHtcbiAgICAgICAgY29uc3QgYXR0cnMgPSBpbmZvLmF0dHJzO1xuICAgICAgICBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAoYXR0cnMgPT0gbnVsbCA/IHZvaWQgMCA6IGF0dHJzWyd0eXBlJ10pID09PSAnbW9kdWxlJyA/ICdtb2R1bGUnIDogJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIGxldCBjcmVhdGVTY3JpcHRSZXMgPSB1bmRlZmluZWQ7XG4gICAgICAgIGlmIChpbmZvLmNyZWF0ZVNjcmlwdEhvb2spIHtcbiAgICAgICAgICAgIGNyZWF0ZVNjcmlwdFJlcyA9IGluZm8uY3JlYXRlU2NyaXB0SG9vayhpbmZvLnVybCwgaW5mby5hdHRycyk7XG4gICAgICAgICAgICBpZiAoY3JlYXRlU2NyaXB0UmVzIGluc3RhbmNlb2YgSFRNTFNjcmlwdEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBzY3JpcHQgPSBjcmVhdGVTY3JpcHRSZXM7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHR5cGVvZiBjcmVhdGVTY3JpcHRSZXMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICAgICAgaWYgKCdzY3JpcHQnIGluIGNyZWF0ZVNjcmlwdFJlcyAmJiBjcmVhdGVTY3JpcHRSZXMuc2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIHNjcmlwdCA9IGNyZWF0ZVNjcmlwdFJlcy5zY3JpcHQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICgndGltZW91dCcgaW4gY3JlYXRlU2NyaXB0UmVzICYmIGNyZWF0ZVNjcmlwdFJlcy50aW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgICAgIHRpbWVvdXQgPSBjcmVhdGVTY3JpcHRSZXMudGltZW91dDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFzY3JpcHQuc3JjKSB7XG4gICAgICAgICAgICBzY3JpcHQuc3JjID0gaW5mby51cmw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGF0dHJzICYmICFjcmVhdGVTY3JpcHRSZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKT0+e1xuICAgICAgICAgICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG5hbWUgPT09ICdhc3luYycgfHwgbmFtZSA9PT0gJ2RlZmVyJykge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0W25hbWVdID0gYXR0cnNbbmFtZV07XG4gICAgICAgICAgICAgICAgICAgIC8vIEF0dHJpYnV0ZXMgdGhhdCBkbyBub3QgZXhpc3QgYXJlIGNvbnNpZGVyZWQgb3ZlcnJpZGRlblxuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKCFzY3JpcHQuZ2V0QXR0cmlidXRlKG5hbWUpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY3JpcHQuc2V0QXR0cmlidXRlKG5hbWUsIGF0dHJzW25hbWVdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9uU2NyaXB0Q29tcGxldGUgPSBhc3luYyAocHJldiwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBldmVudCk9PntcbiAgICAgICAgY2xlYXJUaW1lb3V0KHRpbWVvdXRJZCk7XG4gICAgICAgIGNvbnN0IG9uU2NyaXB0Q29tcGxldGVDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiAoKGV2ZW50ID09IG51bGwgPyB2b2lkIDAgOiBldmVudC50eXBlKSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLm9uRXJyb3JDYWxsYmFjaykgJiYgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8ub25FcnJvckNhbGxiYWNrKGV2ZW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLmNiKSAmJiAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5jYigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBtZW1vcnkgbGVha3MgaW4gSUUuXG4gICAgICAgIGlmIChzY3JpcHQpIHtcbiAgICAgICAgICAgIHNjcmlwdC5vbmVycm9yID0gbnVsbDtcbiAgICAgICAgICAgIHNjcmlwdC5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgc2FmZVdyYXBwZXIoKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5lZWREZWxldGVTY3JpcHQgPSB0cnVlIH0gPSBpbmZvO1xuICAgICAgICAgICAgICAgIGlmIChuZWVkRGVsZXRlU2NyaXB0KSB7XG4gICAgICAgICAgICAgICAgICAgIChzY3JpcHQgPT0gbnVsbCA/IHZvaWQgMCA6IHNjcmlwdC5wYXJlbnROb2RlKSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByZXYgJiYgdHlwZW9mIHByZXYgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBwcmV2KGV2ZW50KTtcbiAgICAgICAgICAgICAgICBpZiAocmVzdWx0IGluc3RhbmNlb2YgUHJvbWlzZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCByZXN1bHQ7XG4gICAgICAgICAgICAgICAgICAgIG9uU2NyaXB0Q29tcGxldGVDYWxsYmFjaygpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBvblNjcmlwdENvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uU2NyaXB0Q29tcGxldGVDYWxsYmFjaygpO1xuICAgIH07XG4gICAgc2NyaXB0Lm9uZXJyb3IgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9uZXJyb3IpO1xuICAgIHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG4gICAgdGltZW91dElkID0gc2V0VGltZW91dCgoKT0+e1xuICAgICAgICBvblNjcmlwdENvbXBsZXRlKG51bGwsIG5ldyBFcnJvcihgUmVtb3RlIHNjcmlwdCBcIiR7aW5mby51cmx9XCIgdGltZS1vdXRlZC5gKSk7XG4gICAgfSwgdGltZW91dCk7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgc2NyaXB0LFxuICAgICAgICBuZWVkQXR0YWNoXG4gICAgfTtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUxpbmsoaW5mbykge1xuICAgIC8vIDxsaW5rIHJlbD1cInByZWxvYWRcIiBocmVmPVwic2NyaXB0LmpzXCIgYXM9XCJzY3JpcHRcIj5cbiAgICAvLyBSZXRyaWV2ZSB0aGUgZXhpc3Rpbmcgc2NyaXB0IGVsZW1lbnQgYnkgaXRzIHNyYyBhdHRyaWJ1dGVcbiAgICBsZXQgbGluayA9IG51bGw7XG4gICAgbGV0IG5lZWRBdHRhY2ggPSB0cnVlO1xuICAgIGNvbnN0IGxpbmtzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2xpbmsnKTtcbiAgICBmb3IobGV0IGkgPSAwOyBpIDwgbGlua3MubGVuZ3RoOyBpKyspe1xuICAgICAgICBjb25zdCBsID0gbGlua3NbaV07XG4gICAgICAgIGNvbnN0IGxpbmtIcmVmID0gbC5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICAgICAgY29uc3QgbGlua1JlbCA9IGwuZ2V0QXR0cmlidXRlKCdyZWwnKTtcbiAgICAgICAgaWYgKGxpbmtIcmVmICYmIGlzU3RhdGljUmVzb3VyY2VzRXF1YWwobGlua0hyZWYsIGluZm8udXJsKSAmJiBsaW5rUmVsID09PSBpbmZvLmF0dHJzWydyZWwnXSkge1xuICAgICAgICAgICAgbGluayA9IGw7XG4gICAgICAgICAgICBuZWVkQXR0YWNoID0gZmFsc2U7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWxpbmspIHtcbiAgICAgICAgbGluayA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpbmsnKTtcbiAgICAgICAgbGluay5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCBpbmZvLnVybCk7XG4gICAgICAgIGxldCBjcmVhdGVMaW5rUmVzID0gdW5kZWZpbmVkO1xuICAgICAgICBjb25zdCBhdHRycyA9IGluZm8uYXR0cnM7XG4gICAgICAgIGlmIChpbmZvLmNyZWF0ZUxpbmtIb29rKSB7XG4gICAgICAgICAgICBjcmVhdGVMaW5rUmVzID0gaW5mby5jcmVhdGVMaW5rSG9vayhpbmZvLnVybCwgYXR0cnMpO1xuICAgICAgICAgICAgaWYgKGNyZWF0ZUxpbmtSZXMgaW5zdGFuY2VvZiBIVE1MTGlua0VsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBsaW5rID0gY3JlYXRlTGlua1JlcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAoYXR0cnMgJiYgIWNyZWF0ZUxpbmtSZXMpIHtcbiAgICAgICAgICAgIE9iamVjdC5rZXlzKGF0dHJzKS5mb3JFYWNoKChuYW1lKT0+e1xuICAgICAgICAgICAgICAgIGlmIChsaW5rICYmICFsaW5rLmdldEF0dHJpYnV0ZShuYW1lKSkge1xuICAgICAgICAgICAgICAgICAgICBsaW5rLnNldEF0dHJpYnV0ZShuYW1lLCBhdHRyc1tuYW1lXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb25MaW5rQ29tcGxldGUgPSAocHJldiwgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIEB0eXBlc2NyaXB0LWVzbGludC9uby1leHBsaWNpdC1hbnlcbiAgICBldmVudCk9PntcbiAgICAgICAgY29uc3Qgb25MaW5rQ29tcGxldGVDYWxsYmFjayA9ICgpPT57XG4gICAgICAgICAgICBpZiAoKGV2ZW50ID09IG51bGwgPyB2b2lkIDAgOiBldmVudC50eXBlKSA9PT0gJ2Vycm9yJykge1xuICAgICAgICAgICAgICAgIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLm9uRXJyb3JDYWxsYmFjaykgJiYgKGluZm8gPT0gbnVsbCA/IHZvaWQgMCA6IGluZm8ub25FcnJvckNhbGxiYWNrKGV2ZW50KSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIChpbmZvID09IG51bGwgPyB2b2lkIDAgOiBpbmZvLmNiKSAmJiAoaW5mbyA9PSBudWxsID8gdm9pZCAwIDogaW5mby5jYigpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgLy8gUHJldmVudCBtZW1vcnkgbGVha3MgaW4gSUUuXG4gICAgICAgIGlmIChsaW5rKSB7XG4gICAgICAgICAgICBsaW5rLm9uZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgbGluay5vbmxvYWQgPSBudWxsO1xuICAgICAgICAgICAgc2FmZVdyYXBwZXIoKCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCB7IG5lZWREZWxldGVMaW5rID0gdHJ1ZSB9ID0gaW5mbztcbiAgICAgICAgICAgICAgICBpZiAobmVlZERlbGV0ZUxpbmspIHtcbiAgICAgICAgICAgICAgICAgICAgKGxpbmsgPT0gbnVsbCA/IHZvaWQgMCA6IGxpbmsucGFyZW50Tm9kZSkgJiYgbGluay5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmspO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHByZXYpIHtcbiAgICAgICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgQHR5cGVzY3JpcHQtZXNsaW50L25vLWV4cGxpY2l0LWFueVxuICAgICAgICAgICAgICAgIGNvbnN0IHJlcyA9IHByZXYoZXZlbnQpO1xuICAgICAgICAgICAgICAgIG9uTGlua0NvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIG9uTGlua0NvbXBsZXRlQ2FsbGJhY2soKTtcbiAgICB9O1xuICAgIGxpbmsub25lcnJvciA9IG9uTGlua0NvbXBsZXRlLmJpbmQobnVsbCwgbGluay5vbmVycm9yKTtcbiAgICBsaW5rLm9ubG9hZCA9IG9uTGlua0NvbXBsZXRlLmJpbmQobnVsbCwgbGluay5vbmxvYWQpO1xuICAgIHJldHVybiB7XG4gICAgICAgIGxpbmssXG4gICAgICAgIG5lZWRBdHRhY2hcbiAgICB9O1xufVxuZnVuY3Rpb24gbG9hZFNjcmlwdCh1cmwsIGluZm8pIHtcbiAgICBjb25zdCB7IGF0dHJzID0ge30sIGNyZWF0ZVNjcmlwdEhvb2sgfSA9IGluZm87XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGNvbnN0IHsgc2NyaXB0LCBuZWVkQXR0YWNoIH0gPSBjcmVhdGVTY3JpcHQoe1xuICAgICAgICAgICAgdXJsLFxuICAgICAgICAgICAgY2I6IHJlc29sdmUsXG4gICAgICAgICAgICBvbkVycm9yQ2FsbGJhY2s6IHJlamVjdCxcbiAgICAgICAgICAgIGF0dHJzOiBfZXh0ZW5kcyh7XG4gICAgICAgICAgICAgICAgZmV0Y2hwcmlvcml0eTogJ2hpZ2gnXG4gICAgICAgICAgICB9LCBhdHRycyksXG4gICAgICAgICAgICBjcmVhdGVTY3JpcHRIb29rLFxuICAgICAgICAgICAgbmVlZERlbGV0ZVNjcmlwdDogdHJ1ZVxuICAgICAgICB9KTtcbiAgICAgICAgbmVlZEF0dGFjaCAmJiBkb2N1bWVudC5oZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgfSk7XG59XG5cbmNvbnN0IHNka0ltcG9ydENhY2hlID0gbmV3IE1hcCgpO1xuZnVuY3Rpb24gaW1wb3J0Tm9kZU1vZHVsZShuYW1lKSB7XG4gICAgaWYgKCFuYW1lKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignaW1wb3J0IHNwZWNpZmllciBpcyByZXF1aXJlZCcpO1xuICAgIH1cbiAgICAvLyBDaGVjayBjYWNoZSB0byBwcmV2ZW50IGluZmluaXRlIHJlY3Vyc2lvblxuICAgIGlmIChzZGtJbXBvcnRDYWNoZS5oYXMobmFtZSkpIHtcbiAgICAgICAgcmV0dXJuIHNka0ltcG9ydENhY2hlLmdldChuYW1lKTtcbiAgICB9XG4gICAgY29uc3QgaW1wb3J0TW9kdWxlID0gbmV3IEZ1bmN0aW9uKCduYW1lJywgYHJldHVybiBpbXBvcnQobmFtZSlgKTtcbiAgICBjb25zdCBwcm9taXNlID0gaW1wb3J0TW9kdWxlKG5hbWUpLnRoZW4oKHJlcyk9PnJlcykuY2F0Y2goKGVycm9yKT0+e1xuICAgICAgICBjb25zb2xlLmVycm9yKGBFcnJvciBpbXBvcnRpbmcgbW9kdWxlICR7bmFtZX06YCwgZXJyb3IpO1xuICAgICAgICAvLyBSZW1vdmUgZnJvbSBjYWNoZSBvbiBlcnJvciBzbyBpdCBjYW4gYmUgcmV0cmllZFxuICAgICAgICBzZGtJbXBvcnRDYWNoZS5kZWxldGUobmFtZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH0pO1xuICAgIC8vIENhY2hlIHRoZSBwcm9taXNlIHRvIHByZXZlbnQgcmVjdXJzaXZlIGNhbGxzXG4gICAgc2RrSW1wb3J0Q2FjaGUuc2V0KG5hbWUsIHByb21pc2UpO1xuICAgIHJldHVybiBwcm9taXNlO1xufVxuY29uc3QgbG9hZE5vZGVGZXRjaCA9IGFzeW5jICgpPT57XG4gICAgY29uc3QgZmV0Y2hNb2R1bGUgPSBhd2FpdCBpbXBvcnROb2RlTW9kdWxlKCdub2RlLWZldGNoJyk7XG4gICAgcmV0dXJuIGZldGNoTW9kdWxlLmRlZmF1bHQgfHwgZmV0Y2hNb2R1bGU7XG59O1xuY29uc3QgbGF6eUxvYWRlckhvb2tGZXRjaCA9IGFzeW5jIChpbnB1dCwgaW5pdCwgbG9hZGVySG9vayk9PntcbiAgICBjb25zdCBob29rID0gKHVybCwgaW5pdCk9PntcbiAgICAgICAgcmV0dXJuIGxvYWRlckhvb2subGlmZWN5Y2xlLmZldGNoLmVtaXQodXJsLCBpbml0KTtcbiAgICB9O1xuICAgIGNvbnN0IHJlcyA9IGF3YWl0IGhvb2soaW5wdXQsIGluaXQgfHwge30pO1xuICAgIGlmICghcmVzIHx8ICEocmVzIGluc3RhbmNlb2YgUmVzcG9uc2UpKSB7XG4gICAgICAgIGNvbnN0IGZldGNoRnVuY3Rpb24gPSB0eXBlb2YgZmV0Y2ggPT09ICd1bmRlZmluZWQnID8gYXdhaXQgbG9hZE5vZGVGZXRjaCgpIDogZmV0Y2g7XG4gICAgICAgIHJldHVybiBmZXRjaEZ1bmN0aW9uKGlucHV0LCBpbml0IHx8IHt9KTtcbiAgICB9XG4gICAgcmV0dXJuIHJlcztcbn07XG5jb25zdCBjcmVhdGVTY3JpcHROb2RlID0gdHlwZW9mIEVOVl9UQVJHRVQgPT09ICd1bmRlZmluZWQnIHx8IEVOVl9UQVJHRVQgIT09ICd3ZWInID8gKHVybCwgY2IsIGF0dHJzLCBsb2FkZXJIb29rKT0+e1xuICAgIGlmIChsb2FkZXJIb29rID09IG51bGwgPyB2b2lkIDAgOiBsb2FkZXJIb29rLmNyZWF0ZVNjcmlwdEhvb2spIHtcbiAgICAgICAgY29uc3QgaG9va1Jlc3VsdCA9IGxvYWRlckhvb2suY3JlYXRlU2NyaXB0SG9vayh1cmwpO1xuICAgICAgICBpZiAoaG9va1Jlc3VsdCAmJiB0eXBlb2YgaG9va1Jlc3VsdCA9PT0gJ29iamVjdCcgJiYgJ3VybCcgaW4gaG9va1Jlc3VsdCkge1xuICAgICAgICAgICAgdXJsID0gaG9va1Jlc3VsdC51cmw7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbGV0IHVybE9iajtcbiAgICB0cnkge1xuICAgICAgICB1cmxPYmogPSBuZXcgVVJMKHVybCk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICBjb25zb2xlLmVycm9yKCdFcnJvciBjb25zdHJ1Y3RpbmcgVVJMOicsIGUpO1xuICAgICAgICBjYihuZXcgRXJyb3IoYEludmFsaWQgVVJMOiAke2V9YCkpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGdldEZldGNoID0gYXN5bmMgKCk9PntcbiAgICAgICAgaWYgKGxvYWRlckhvb2sgPT0gbnVsbCA/IHZvaWQgMCA6IGxvYWRlckhvb2suZmV0Y2gpIHtcbiAgICAgICAgICAgIHJldHVybiAoaW5wdXQsIGluaXQpPT5sYXp5TG9hZGVySG9va0ZldGNoKGlucHV0LCBpbml0LCBsb2FkZXJIb29rKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHlwZW9mIGZldGNoID09PSAndW5kZWZpbmVkJyA/IGxvYWROb2RlRmV0Y2goKSA6IGZldGNoO1xuICAgIH07XG4gICAgY29uc3QgaGFuZGxlU2NyaXB0RmV0Y2ggPSBhc3luYyAoZiwgdXJsT2JqKT0+e1xuICAgICAgICB0cnkge1xuICAgICAgICAgICAgdmFyIC8vQHRzLWlnbm9yZVxuICAgICAgICAgICAgX3ZtX2NvbnN0YW50cztcbiAgICAgICAgICAgIGNvbnN0IHJlcyA9IGF3YWl0IGYodXJsT2JqLmhyZWYpO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgICAgICAgICBjb25zdCBbcGF0aCwgdm1dID0gYXdhaXQgUHJvbWlzZS5hbGwoW1xuICAgICAgICAgICAgICAgIGltcG9ydE5vZGVNb2R1bGUoJ3BhdGgnKSxcbiAgICAgICAgICAgICAgICBpbXBvcnROb2RlTW9kdWxlKCd2bScpXG4gICAgICAgICAgICBdKTtcbiAgICAgICAgICAgIGNvbnN0IHNjcmlwdENvbnRleHQgPSB7XG4gICAgICAgICAgICAgICAgZXhwb3J0czoge30sXG4gICAgICAgICAgICAgICAgbW9kdWxlOiB7XG4gICAgICAgICAgICAgICAgICAgIGV4cG9ydHM6IHt9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHVybERpcm5hbWUgPSB1cmxPYmoucGF0aG5hbWUuc3BsaXQoJy8nKS5zbGljZSgwLCAtMSkuam9pbignLycpO1xuICAgICAgICAgICAgY29uc3QgZmlsZW5hbWUgPSBwYXRoLmJhc2VuYW1lKHVybE9iai5wYXRobmFtZSk7XG4gICAgICAgICAgICB2YXIgX3ZtX2NvbnN0YW50c19VU0VfTUFJTl9DT05URVhUX0RFRkFVTFRfTE9BREVSO1xuICAgICAgICAgICAgY29uc3Qgc2NyaXB0ID0gbmV3IHZtLlNjcmlwdChgKGZ1bmN0aW9uKGV4cG9ydHMsIG1vZHVsZSwgcmVxdWlyZSwgX19kaXJuYW1lLCBfX2ZpbGVuYW1lKSB7JHtkYXRhfVxcbn0pYCwge1xuICAgICAgICAgICAgICAgIGZpbGVuYW1lLFxuICAgICAgICAgICAgICAgIGltcG9ydE1vZHVsZUR5bmFtaWNhbGx5OiAoX3ZtX2NvbnN0YW50c19VU0VfTUFJTl9DT05URVhUX0RFRkFVTFRfTE9BREVSID0gKF92bV9jb25zdGFudHMgPSB2bS5jb25zdGFudHMpID09IG51bGwgPyB2b2lkIDAgOiBfdm1fY29uc3RhbnRzLlVTRV9NQUlOX0NPTlRFWFRfREVGQVVMVF9MT0FERVIpICE9IG51bGwgPyBfdm1fY29uc3RhbnRzX1VTRV9NQUlOX0NPTlRFWFRfREVGQVVMVF9MT0FERVIgOiBpbXBvcnROb2RlTW9kdWxlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHNjcmlwdC5ydW5JblRoaXNDb250ZXh0KCkoc2NyaXB0Q29udGV4dC5leHBvcnRzLCBzY3JpcHRDb250ZXh0Lm1vZHVsZSwgZXZhbCgncmVxdWlyZScpLCB1cmxEaXJuYW1lLCBmaWxlbmFtZSk7XG4gICAgICAgICAgICBjb25zdCBleHBvcnRlZEludGVyZmFjZSA9IHNjcmlwdENvbnRleHQubW9kdWxlLmV4cG9ydHMgfHwgc2NyaXB0Q29udGV4dC5leHBvcnRzO1xuICAgICAgICAgICAgaWYgKGF0dHJzICYmIGV4cG9ydGVkSW50ZXJmYWNlICYmIGF0dHJzWydnbG9iYWxOYW1lJ10pIHtcbiAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXIgPSBleHBvcnRlZEludGVyZmFjZVthdHRyc1snZ2xvYmFsTmFtZSddXSB8fCBleHBvcnRlZEludGVyZmFjZTtcbiAgICAgICAgICAgICAgICBjYih1bmRlZmluZWQsIGNvbnRhaW5lcik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2IodW5kZWZpbmVkLCBleHBvcnRlZEludGVyZmFjZSk7XG4gICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgIGNiKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoYFNjcmlwdCBleGVjdXRpb24gZXJyb3I6ICR7ZX1gKSk7XG4gICAgICAgIH1cbiAgICB9O1xuICAgIGdldEZldGNoKCkudGhlbihhc3luYyAoZik9PntcbiAgICAgICAgaWYgKChhdHRycyA9PSBudWxsID8gdm9pZCAwIDogYXR0cnNbJ3R5cGUnXSkgPT09ICdlc20nIHx8IChhdHRycyA9PSBudWxsID8gdm9pZCAwIDogYXR0cnNbJ3R5cGUnXSkgPT09ICdtb2R1bGUnKSB7XG4gICAgICAgICAgICByZXR1cm4gbG9hZE1vZHVsZSh1cmxPYmouaHJlZiwge1xuICAgICAgICAgICAgICAgIGZldGNoOiBmLFxuICAgICAgICAgICAgICAgIHZtOiBhd2FpdCBpbXBvcnROb2RlTW9kdWxlKCd2bScpXG4gICAgICAgICAgICB9KS50aGVuKGFzeW5jIChtb2R1bGUpPT57XG4gICAgICAgICAgICAgICAgYXdhaXQgbW9kdWxlLmV2YWx1YXRlKCk7XG4gICAgICAgICAgICAgICAgY2IodW5kZWZpbmVkLCBtb2R1bGUubmFtZXNwYWNlKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChlKT0+e1xuICAgICAgICAgICAgICAgIGNiKGUgaW5zdGFuY2VvZiBFcnJvciA/IGUgOiBuZXcgRXJyb3IoYFNjcmlwdCBleGVjdXRpb24gZXJyb3I6ICR7ZX1gKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBoYW5kbGVTY3JpcHRGZXRjaChmLCB1cmxPYmopO1xuICAgIH0pLmNhdGNoKChlcnIpPT57XG4gICAgICAgIGNiKGVycik7XG4gICAgfSk7XG59IDogKHVybCwgY2IsIGF0dHJzLCBsb2FkZXJIb29rKT0+e1xuICAgIGNiKG5ldyBFcnJvcignY3JlYXRlU2NyaXB0Tm9kZSBpcyBkaXNhYmxlZCBpbiBub24tTm9kZS5qcyBlbnZpcm9ubWVudCcpKTtcbn07XG5jb25zdCBsb2FkU2NyaXB0Tm9kZSA9IHR5cGVvZiBFTlZfVEFSR0VUID09PSAndW5kZWZpbmVkJyB8fCBFTlZfVEFSR0VUICE9PSAnd2ViJyA/ICh1cmwsIGluZm8pPT57XG4gICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpPT57XG4gICAgICAgIGNyZWF0ZVNjcmlwdE5vZGUodXJsLCAoZXJyb3IsIHNjcmlwdENvbnRleHQpPT57XG4gICAgICAgICAgICBpZiAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICByZWplY3QoZXJyb3IpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgX2luZm9fYXR0cnMsIF9pbmZvX2F0dHJzMTtcbiAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVFbnRyeUtleSA9IChpbmZvID09IG51bGwgPyB2b2lkIDAgOiAoX2luZm9fYXR0cnMgPSBpbmZvLmF0dHJzKSA9PSBudWxsID8gdm9pZCAwIDogX2luZm9fYXR0cnNbJ2dsb2JhbE5hbWUnXSkgfHwgYF9fRkVERVJBVElPTl8ke2luZm8gPT0gbnVsbCA/IHZvaWQgMCA6IChfaW5mb19hdHRyczEgPSBpbmZvLmF0dHJzKSA9PSBudWxsID8gdm9pZCAwIDogX2luZm9fYXR0cnMxWyduYW1lJ119OmN1c3RvbV9fYDtcbiAgICAgICAgICAgICAgICBjb25zdCBlbnRyeUV4cG9ydHMgPSBnbG9iYWxUaGlzW3JlbW90ZUVudHJ5S2V5XSA9IHNjcmlwdENvbnRleHQ7XG4gICAgICAgICAgICAgICAgcmVzb2x2ZShlbnRyeUV4cG9ydHMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9LCBpbmZvLmF0dHJzLCBpbmZvLmxvYWRlckhvb2spO1xuICAgIH0pO1xufSA6ICh1cmwsIGluZm8pPT57XG4gICAgdGhyb3cgbmV3IEVycm9yKCdsb2FkU2NyaXB0Tm9kZSBpcyBkaXNhYmxlZCBpbiBub24tTm9kZS5qcyBlbnZpcm9ubWVudCcpO1xufTtcbmNvbnN0IGVzbU1vZHVsZUNhY2hlID0gbmV3IE1hcCgpO1xuYXN5bmMgZnVuY3Rpb24gbG9hZE1vZHVsZSh1cmwsIG9wdGlvbnMpIHtcbiAgICAvLyBDaGVjayBjYWNoZSB0byBwcmV2ZW50IGluZmluaXRlIHJlY3Vyc2lvbiBpbiBFU00gbG9hZGluZ1xuICAgIGlmIChlc21Nb2R1bGVDYWNoZS5oYXModXJsKSkge1xuICAgICAgICByZXR1cm4gZXNtTW9kdWxlQ2FjaGUuZ2V0KHVybCk7XG4gICAgfVxuICAgIGNvbnN0IHsgZmV0Y2g6IGZldGNoMSwgdm0gfSA9IG9wdGlvbnM7XG4gICAgY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaDEodXJsKTtcbiAgICBjb25zdCBjb2RlID0gYXdhaXQgcmVzcG9uc2UudGV4dCgpO1xuICAgIGNvbnN0IG1vZHVsZSA9IG5ldyB2bS5Tb3VyY2VUZXh0TW9kdWxlKGNvZGUsIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpbXBvcnRNb2R1bGVEeW5hbWljYWxseTogYXN5bmMgKHNwZWNpZmllciwgc2NyaXB0KT0+e1xuICAgICAgICAgICAgY29uc3QgcmVzb2x2ZWRVcmwgPSBuZXcgVVJMKHNwZWNpZmllciwgdXJsKS5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuIGxvYWRNb2R1bGUocmVzb2x2ZWRVcmwsIG9wdGlvbnMpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gQ2FjaGUgdGhlIG1vZHVsZSBiZWZvcmUgbGlua2luZyB0byBwcmV2ZW50IGN5Y2xlc1xuICAgIGVzbU1vZHVsZUNhY2hlLnNldCh1cmwsIG1vZHVsZSk7XG4gICAgYXdhaXQgbW9kdWxlLmxpbmsoYXN5bmMgKHNwZWNpZmllcik9PntcbiAgICAgICAgY29uc3QgcmVzb2x2ZWRVcmwgPSBuZXcgVVJMKHNwZWNpZmllciwgdXJsKS5ocmVmO1xuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBsb2FkTW9kdWxlKHJlc29sdmVkVXJsLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIG1vZHVsZTtcbiAgICB9KTtcbiAgICByZXR1cm4gbW9kdWxlO1xufVxuXG5mdW5jdGlvbiBub3JtYWxpemVPcHRpb25zKGVuYWJsZURlZmF1bHQsIGRlZmF1bHRPcHRpb25zLCBrZXkpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICBpZiAob3B0aW9ucyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodHlwZW9mIG9wdGlvbnMgPT09ICd1bmRlZmluZWQnKSB7XG4gICAgICAgICAgICBpZiAoZW5hYmxlRGVmYXVsdCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBkZWZhdWx0T3B0aW9ucztcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdE9wdGlvbnM7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG9wdGlvbnMgJiYgdHlwZW9mIG9wdGlvbnMgPT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gX2V4dGVuZHMoe30sIGRlZmF1bHRPcHRpb25zLCBvcHRpb25zKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoYFVuZXhwZWN0ZWQgdHlwZSBmb3IgXFxgJHtrZXl9XFxgLCBleHBlY3QgYm9vbGVhbi91bmRlZmluZWQvb2JqZWN0LCBnb3Q6ICR7dHlwZW9mIG9wdGlvbnN9YCk7XG4gICAgfTtcbn1cblxuY29uc3QgY3JlYXRlTW9kdWxlRmVkZXJhdGlvbkNvbmZpZyA9IChvcHRpb25zKT0+e1xuICAgIHJldHVybiBvcHRpb25zO1xufTtcblxuZXhwb3J0IHsgQlJPV1NFUl9MT0dfS0VZLCBFTkNPREVfTkFNRV9QUkVGSVgsIEVuY29kZWROYW1lVHJhbnNmb3JtTWFwLCBGZWRlcmF0aW9uTW9kdWxlTWFuaWZlc3QsIE1BTklGRVNUX0VYVCwgTUZNb2R1bGVUeXBlLCBNRlByZWZldGNoQ29tbW9uLCBNT0RVTEVfREVWVE9PTF9JREVOVElGSUVSLCBNYW5pZmVzdEZpbGVOYW1lLCBOYW1lVHJhbnNmb3JtTWFwLCBOYW1lVHJhbnNmb3JtU3ltYm9sLCBTRVBBUkFUT1IsIFN0YXRzRmlsZU5hbWUsIFRFTVBfRElSLCBhc3NlcnQsIGNvbXBvc2VLZXlXaXRoU2VwYXJhdG9yLCBDb250YWluZXJQbHVnaW4gYXMgY29udGFpbmVyUGx1Z2luLCBDb250YWluZXJSZWZlcmVuY2VQbHVnaW4gYXMgY29udGFpbmVyUmVmZXJlbmNlUGx1Z2luLCBjcmVhdGVMaW5rLCBjcmVhdGVMb2dnZXIsIGNyZWF0ZU1vZHVsZUZlZGVyYXRpb25Db25maWcsIGNyZWF0ZVNjcmlwdCwgY3JlYXRlU2NyaXB0Tm9kZSwgZGVjb2RlTmFtZSwgZW5jb2RlTmFtZSwgZXJyb3IsIGdlbmVyYXRlRXhwb3NlRmlsZW5hbWUsIGdlbmVyYXRlU2hhcmVGaWxlbmFtZSwgZ2VuZXJhdGVTbmFwc2hvdEZyb21NYW5pZmVzdCwgZ2V0UHJvY2Vzc0VudiwgZ2V0UmVzb3VyY2VVcmwsIGluZmVyQXV0b1B1YmxpY1BhdGgsIGlzQnJvd3NlckVudiwgaXNEZWJ1Z01vZGUsIGlzTWFuaWZlc3RQcm92aWRlciwgaXNSZWFjdE5hdGl2ZUVudiwgaXNSZXF1aXJlZFZlcnNpb24sIGlzU3RhdGljUmVzb3VyY2VzRXF1YWwsIGxvYWRTY3JpcHQsIGxvYWRTY3JpcHROb2RlLCBsb2dnZXIsIE1vZHVsZUZlZGVyYXRpb25QbHVnaW4gYXMgbW9kdWxlRmVkZXJhdGlvblBsdWdpbiwgbm9ybWFsaXplT3B0aW9ucywgcGFyc2VFbnRyeSwgc2FmZVRvU3RyaW5nLCBzYWZlV3JhcHBlciwgU2hhcmVQbHVnaW4gYXMgc2hhcmVQbHVnaW4sIHNpbXBsZUpvaW5SZW1vdGVFbnRyeSwgd2FybiB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9aW5kZXguZXNtLmpzLm1hcFxuIiwiZnVuY3Rpb24gX2V4dGVuZHMoKSB7XG4gICAgX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIGFzc2lnbih0YXJnZXQpIHtcbiAgICAgICAgZm9yKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuICAgICAgICAgICAgZm9yKHZhciBrZXkgaW4gc291cmNlKWlmIChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwoc291cmNlLCBrZXkpKSB0YXJnZXRba2V5XSA9IHNvdXJjZVtrZXldO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgICByZXR1cm4gX2V4dGVuZHMuYXBwbHkodGhpcywgYXJndW1lbnRzKTtcbn1cblxuZXhwb3J0IHsgX2V4dGVuZHMgYXMgXyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9cG9seWZpbGxzLmVzbS5qcy5tYXBcbiIsImNvbnN0IEZFREVSQVRJT05fU1VQUE9SVEVEX1RZUEVTID0gW1xuICAgICdzY3JpcHQnXG5dO1xuXG5leHBvcnQgeyBGRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUyB9O1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9Y29uc3RhbnQuZXNtLmpzLm1hcFxuIiwiaW1wb3J0ICogYXMgcnVudGltZSBmcm9tICdAbW9kdWxlLWZlZGVyYXRpb24vcnVudGltZSc7XG5pbXBvcnQgeyBGRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUyB9IGZyb20gJy4vY29uc3RhbnQuZXNtLmpzJztcbmltcG9ydCB7IGRlY29kZU5hbWUsIEVOQ09ERV9OQU1FX1BSRUZJWCB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9zZGsnO1xuXG5mdW5jdGlvbiBhdHRhY2hTaGFyZVNjb3BlTWFwKHdlYnBhY2tSZXF1aXJlKSB7XG4gICAgaWYgKCF3ZWJwYWNrUmVxdWlyZS5TIHx8IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaGFzQXR0YWNoU2hhcmVTY29wZU1hcCB8fCAhd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZSB8fCAhd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZS5zaGFyZVNjb3BlTWFwKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2VicGFja1JlcXVpcmUuUyA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2Uuc2hhcmVTY29wZU1hcDtcbiAgICB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmhhc0F0dGFjaFNoYXJlU2NvcGVNYXAgPSB0cnVlO1xufVxuXG5mdW5jdGlvbiByZW1vdGVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IGNodW5rSWQsIHByb21pc2VzLCBjaHVua01hcHBpbmcsIGlkVG9FeHRlcm5hbEFuZE5hbWVNYXBwaW5nLCB3ZWJwYWNrUmVxdWlyZSwgaWRUb1JlbW90ZU1hcCB9ID0gb3B0aW9ucztcbiAgICBhdHRhY2hTaGFyZVNjb3BlTWFwKHdlYnBhY2tSZXF1aXJlKTtcbiAgICBpZiAod2VicGFja1JlcXVpcmUubyhjaHVua01hcHBpbmcsIGNodW5rSWQpKSB7XG4gICAgICAgIGNodW5rTWFwcGluZ1tjaHVua0lkXS5mb3JFYWNoKChpZCk9PntcbiAgICAgICAgICAgIGxldCBnZXRTY29wZSA9IHdlYnBhY2tSZXF1aXJlLlI7XG4gICAgICAgICAgICBpZiAoIWdldFNjb3BlKSB7XG4gICAgICAgICAgICAgICAgZ2V0U2NvcGUgPSBbXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBpZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ1tpZF07XG4gICAgICAgICAgICBjb25zdCByZW1vdGVJbmZvcyA9IGlkVG9SZW1vdGVNYXBbaWRdO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZSBzZWVtcyBub3Qgd29ya1xuICAgICAgICAgICAgaWYgKGdldFNjb3BlLmluZGV4T2YoZGF0YSkgPj0gMCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmUgc2VlbXMgbm90IHdvcmtcbiAgICAgICAgICAgIGdldFNjb3BlLnB1c2goZGF0YSk7XG4gICAgICAgICAgICBpZiAoZGF0YS5wKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHByb21pc2VzLnB1c2goZGF0YS5wKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9uRXJyb3IgPSAoZXJyb3IpPT57XG4gICAgICAgICAgICAgICAgaWYgKCFlcnJvcikge1xuICAgICAgICAgICAgICAgICAgICBlcnJvciA9IG5ldyBFcnJvcignQ29udGFpbmVyIG1pc3NpbmcnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBlcnJvci5tZXNzYWdlID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgICAgICBlcnJvci5tZXNzYWdlICs9IGBcXG53aGlsZSBsb2FkaW5nIFwiJHtkYXRhWzFdfVwiIGZyb20gJHtkYXRhWzJdfWA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBkYXRhLnAgPSAwO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IGhhbmRsZUZ1bmN0aW9uID0gKGZuLCBhcmcxLCBhcmcyLCBkLCBuZXh0LCBmaXJzdCk9PntcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZm4oYXJnMSwgYXJnMik7XG4gICAgICAgICAgICAgICAgICAgIGlmIChwcm9taXNlICYmIHByb21pc2UudGhlbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb21pc2UudGhlbigocmVzdWx0KT0+bmV4dChyZXN1bHQsIGQpLCBvbkVycm9yKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChmaXJzdCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb21pc2VzLnB1c2goZGF0YS5wID0gcCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG5leHQocHJvbWlzZSwgZCwgZmlyc3QpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IG9uRXh0ZXJuYWwgPSAoZXh0ZXJuYWwsIF8sIGZpcnN0KT0+ZXh0ZXJuYWwgPyBoYW5kbGVGdW5jdGlvbih3ZWJwYWNrUmVxdWlyZS5JLCBkYXRhWzBdLCAwLCBleHRlcm5hbCwgb25Jbml0aWFsaXplZCwgZmlyc3QpIDogb25FcnJvcigpO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLXZhclxuICAgICAgICAgICAgdmFyIG9uSW5pdGlhbGl6ZWQgPSAoXywgZXh0ZXJuYWwsIGZpcnN0KT0+aGFuZGxlRnVuY3Rpb24oZXh0ZXJuYWwuZ2V0LCBkYXRhWzFdLCBnZXRTY29wZSwgMCwgb25GYWN0b3J5LCBmaXJzdCk7XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdmFyXG4gICAgICAgICAgICB2YXIgb25GYWN0b3J5ID0gKGZhY3RvcnkpPT57XG4gICAgICAgICAgICAgICAgZGF0YS5wID0gMTtcbiAgICAgICAgICAgICAgICB3ZWJwYWNrUmVxdWlyZS5tW2lkXSA9IChtb2R1bGUpPT57XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb25SZW1vdGVMb2FkZWQgPSAoKT0+e1xuICAgICAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZU5hbWUgPSBkZWNvZGVOYW1lKHJlbW90ZUluZm9zWzBdLm5hbWUsIEVOQ09ERV9OQU1FX1BSRUZJWCk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHJlbW90ZU1vZHVsZU5hbWUgPSByZW1vdGVOYW1lICsgZGF0YVsxXS5zbGljZSgxKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBsb2FkUmVtb3RlID0gKCk9PndlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2UubG9hZFJlbW90ZShyZW1vdGVNb2R1bGVOYW1lLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9hZEZhY3Rvcnk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZyb206ICdidWlsZCdcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zdGFuY2Uub3B0aW9ucy5zaGFyZVN0cmF0ZWd5ID09PSAndmVyc2lvbi1maXJzdCcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBQcm9taXNlLmFsbChpbnN0YW5jZS5zaGFyZWRIYW5kbGVyLmluaXRpYWxpemVTaGFyaW5nKGRhdGFbMF0pKS50aGVuKCgpPT57XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGxvYWRSZW1vdGUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBsb2FkUmVtb3RlKCk7XG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgICAgICAgICAgb25FcnJvcihlcnJvcik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHVzZVJ1bnRpbWVMb2FkID0gcmVtb3RlSW5mb3MubGVuZ3RoID09PSAxICYmIEZFREVSQVRJT05fU1VQUE9SVEVEX1RZUEVTLmluY2x1ZGVzKHJlbW90ZUluZm9zWzBdLmV4dGVybmFsVHlwZSkgJiYgcmVtb3RlSW5mb3NbMF0ubmFtZTtcbiAgICAgICAgICAgIGlmICh1c2VSdW50aW1lTG9hZCkge1xuICAgICAgICAgICAgICAgIGhhbmRsZUZ1bmN0aW9uKG9uUmVtb3RlTG9hZGVkLCBkYXRhWzJdLCAwLCAwLCBvbkZhY3RvcnksIDEpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVGdW5jdGlvbih3ZWJwYWNrUmVxdWlyZSwgZGF0YVsyXSwgMCwgMCwgb25FeHRlcm5hbCwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cblxuZnVuY3Rpb24gY29uc3VtZXMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgY2h1bmtJZCwgcHJvbWlzZXMsIGNodW5rTWFwcGluZywgaW5zdGFsbGVkTW9kdWxlcywgbW9kdWxlVG9IYW5kbGVyTWFwcGluZywgd2VicGFja1JlcXVpcmUgfSA9IG9wdGlvbnM7XG4gICAgYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgaWYgKHdlYnBhY2tSZXF1aXJlLm8oY2h1bmtNYXBwaW5nLCBjaHVua0lkKSkge1xuICAgICAgICBjaHVua01hcHBpbmdbY2h1bmtJZF0uZm9yRWFjaCgoaWQpPT57XG4gICAgICAgICAgICBpZiAod2VicGFja1JlcXVpcmUubyhpbnN0YWxsZWRNb2R1bGVzLCBpZCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvbkZhY3RvcnkgPSAoZmFjdG9yeSk9PntcbiAgICAgICAgICAgICAgICBpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IDA7XG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmUubVtpZF0gPSAobW9kdWxlKT0+e1xuICAgICAgICAgICAgICAgICAgICB2YXIgX3NoYXJlSW5mb19zaGFyZUNvbmZpZztcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHdlYnBhY2tSZXF1aXJlLmNbaWRdO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSBmYWN0b3J5KCk7XG4gICAgICAgICAgICAgICAgICAgIC8vIEFkZCBsYXllciBwcm9wZXJ0eSBmcm9tIHNoYXJlQ29uZmlnIGlmIGF2YWlsYWJsZVxuICAgICAgICAgICAgICAgICAgICBjb25zdCB7IHNoYXJlSW5mbyB9ID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1tpZF07XG4gICAgICAgICAgICAgICAgICAgIGlmICgoc2hhcmVJbmZvID09IG51bGwgPyB2b2lkIDAgOiAoX3NoYXJlSW5mb19zaGFyZUNvbmZpZyA9IHNoYXJlSW5mby5zaGFyZUNvbmZpZykgPT0gbnVsbCA/IHZvaWQgMCA6IF9zaGFyZUluZm9fc2hhcmVDb25maWcubGF5ZXIpICYmIHJlc3VsdCAmJiB0eXBlb2YgcmVzdWx0ID09PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHNldCBsYXllciBpZiBpdCdzIG5vdCBhbHJlYWR5IGRlZmluZWQgb3IgaWYgaXQncyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIXJlc3VsdC5oYXNPd25Qcm9wZXJ0eSgnbGF5ZXInKSB8fCByZXN1bHQubGF5ZXIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQubGF5ZXIgPSBzaGFyZUluZm8uc2hhcmVDb25maWcubGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBjYXRjaCAoZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gSWdub3JlIGlmIGxheWVyIHByb3BlcnR5IGlzIHJlYWQtb25seVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZS5leHBvcnRzID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgb25FcnJvciA9IChlcnJvcik9PntcbiAgICAgICAgICAgICAgICBkZWxldGUgaW5zdGFsbGVkTW9kdWxlc1tpZF07XG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmUubVtpZF0gPSAobW9kdWxlKT0+e1xuICAgICAgICAgICAgICAgICAgICBkZWxldGUgd2VicGFja1JlcXVpcmUuY1tpZF07XG4gICAgICAgICAgICAgICAgICAgIHRocm93IGVycm9yO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICBjb25zdCBmZWRlcmF0aW9uSW5zdGFuY2UgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlO1xuICAgICAgICAgICAgICAgIGlmICghZmVkZXJhdGlvbkluc3RhbmNlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignRmVkZXJhdGlvbiBpbnN0YW5jZSBub3QgZm91bmQhJyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHsgc2hhcmVLZXksIGdldHRlciwgc2hhcmVJbmZvIH0gPSBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nW2lkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9taXNlID0gZmVkZXJhdGlvbkluc3RhbmNlLmxvYWRTaGFyZShzaGFyZUtleSwge1xuICAgICAgICAgICAgICAgICAgICBjdXN0b21TaGFyZUluZm86IHNoYXJlSW5mb1xuICAgICAgICAgICAgICAgIH0pLnRoZW4oKGZhY3RvcnkpPT57XG4gICAgICAgICAgICAgICAgICAgIGlmIChmYWN0b3J5ID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGdldHRlcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWN0b3J5O1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmIChwcm9taXNlLnRoZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcHJvbWlzZXMucHVzaChpbnN0YWxsZWRNb2R1bGVzW2lkXSA9IHByb21pc2UudGhlbihvbkZhY3RvcnkpLmNhdGNoKG9uRXJyb3IpKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlIG1haW50YWluIHByZXZpb3VzIGxvZ2ljXG4gICAgICAgICAgICAgICAgICAgIG9uRmFjdG9yeShwcm9taXNlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAgICAgb25FcnJvcihlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuXG5mdW5jdGlvbiBpbml0aWFsaXplU2hhcmluZyh7IHNoYXJlU2NvcGVOYW1lLCB3ZWJwYWNrUmVxdWlyZSwgaW5pdFByb21pc2VzLCBpbml0VG9rZW5zLCBpbml0U2NvcGUgfSkge1xuICAgIGNvbnN0IHNoYXJlU2NvcGVLZXlzID0gQXJyYXkuaXNBcnJheShzaGFyZVNjb3BlTmFtZSkgPyBzaGFyZVNjb3BlTmFtZSA6IFtcbiAgICAgICAgc2hhcmVTY29wZU5hbWVcbiAgICBdO1xuICAgIHZhciBpbml0aWFsaXplU2hhcmluZ1Byb21pc2VzID0gW107XG4gICAgdmFyIF9pbml0aWFsaXplU2hhcmluZyA9IGZ1bmN0aW9uKHNoYXJlU2NvcGVLZXkpIHtcbiAgICAgICAgaWYgKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuICAgICAgICBjb25zdCBtZkluc3RhbmNlID0gd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZTtcbiAgICAgICAgLy8gaGFuZGxpbmcgY2lyY3VsYXIgaW5pdCBjYWxsc1xuICAgICAgICB2YXIgaW5pdFRva2VuID0gaW5pdFRva2Vuc1tzaGFyZVNjb3BlS2V5XTtcbiAgICAgICAgaWYgKCFpbml0VG9rZW4pIGluaXRUb2tlbiA9IGluaXRUb2tlbnNbc2hhcmVTY29wZUtleV0gPSB7XG4gICAgICAgICAgICBmcm9tOiBtZkluc3RhbmNlLm5hbWVcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuICAgICAgICBpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuICAgICAgICBjb25zdCBwcm9taXNlID0gaW5pdFByb21pc2VzW3NoYXJlU2NvcGVLZXldO1xuICAgICAgICBpZiAocHJvbWlzZSkgcmV0dXJuIHByb21pc2U7XG4gICAgICAgIHZhciB3YXJuID0gKG1zZyk9PnR5cGVvZiBjb25zb2xlICE9PSAndW5kZWZpbmVkJyAmJiBjb25zb2xlLndhcm4gJiYgY29uc29sZS53YXJuKG1zZyk7XG4gICAgICAgIHZhciBpbml0RXh0ZXJuYWwgPSAoaWQpPT57XG4gICAgICAgICAgICB2YXIgaGFuZGxlRXJyb3IgPSAoZXJyKT0+d2FybignSW5pdGlhbGl6YXRpb24gb2Ygc2hhcmluZyBleHRlcm5hbCBmYWlsZWQ6ICcgKyBlcnIpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgICB2YXIgbW9kdWxlID0gd2VicGFja1JlcXVpcmUoaWQpO1xuICAgICAgICAgICAgICAgIGlmICghbW9kdWxlKSByZXR1cm47XG4gICAgICAgICAgICAgICAgdmFyIGluaXRGbiA9IChtb2R1bGUpPT5tb2R1bGUgJiYgbW9kdWxlLmluaXQgJiYgLy8gQHRzLWlnbm9yZSBjb21wYXQgbGVnYWN5IG1mIHNoYXJlZCBiZWhhdmlvclxuICAgICAgICAgICAgICAgICAgICBtb2R1bGUuaW5pdCh3ZWJwYWNrUmVxdWlyZS5TW3NoYXJlU2NvcGVLZXldLCBpbml0U2NvcGUsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNoYXJlU2NvcGVNYXA6IHdlYnBhY2tSZXF1aXJlLlMgfHwge30sXG4gICAgICAgICAgICAgICAgICAgICAgICBzaGFyZVNjb3BlS2V5czogc2hhcmVTY29wZU5hbWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaWYgKG1vZHVsZS50aGVuKSByZXR1cm4gcHJvbWlzZXMucHVzaChtb2R1bGUudGhlbihpbml0Rm4sIGhhbmRsZUVycm9yKSk7XG4gICAgICAgICAgICAgICAgdmFyIGluaXRSZXN1bHQgPSBpbml0Rm4obW9kdWxlKTtcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgaWYgKGluaXRSZXN1bHQgJiYgdHlwZW9mIGluaXRSZXN1bHQgIT09ICdib29sZWFuJyAmJiBpbml0UmVzdWx0LnRoZW4pIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICByZXR1cm4gcHJvbWlzZXMucHVzaChpbml0UmVzdWx0WydjYXRjaCddKGhhbmRsZUVycm9yKSk7XG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgICAgICAgICBoYW5kbGVFcnJvcihlcnIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBwcm9taXNlcyA9IG1mSW5zdGFuY2UuaW5pdGlhbGl6ZVNoYXJpbmcoc2hhcmVTY29wZUtleSwge1xuICAgICAgICAgICAgc3RyYXRlZ3k6IG1mSW5zdGFuY2Uub3B0aW9ucy5zaGFyZVN0cmF0ZWd5LFxuICAgICAgICAgICAgaW5pdFNjb3BlLFxuICAgICAgICAgICAgZnJvbTogJ2J1aWxkJ1xuICAgICAgICB9KTtcbiAgICAgICAgYXR0YWNoU2hhcmVTY29wZU1hcCh3ZWJwYWNrUmVxdWlyZSk7XG4gICAgICAgIGNvbnN0IGJ1bmRsZXJSdW50aW1lUmVtb3Rlc09wdGlvbnMgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lT3B0aW9ucy5yZW1vdGVzO1xuICAgICAgICBpZiAoYnVuZGxlclJ1bnRpbWVSZW1vdGVzT3B0aW9ucykge1xuICAgICAgICAgICAgT2JqZWN0LmtleXMoYnVuZGxlclJ1bnRpbWVSZW1vdGVzT3B0aW9ucy5pZFRvUmVtb3RlTWFwKS5mb3JFYWNoKChtb2R1bGVJZCk9PntcbiAgICAgICAgICAgICAgICBjb25zdCBpbmZvID0gYnVuZGxlclJ1bnRpbWVSZW1vdGVzT3B0aW9ucy5pZFRvUmVtb3RlTWFwW21vZHVsZUlkXTtcbiAgICAgICAgICAgICAgICBjb25zdCBleHRlcm5hbE1vZHVsZUlkID0gYnVuZGxlclJ1bnRpbWVSZW1vdGVzT3B0aW9ucy5pZFRvRXh0ZXJuYWxBbmROYW1lTWFwcGluZ1ttb2R1bGVJZF1bMl07XG4gICAgICAgICAgICAgICAgaWYgKGluZm8ubGVuZ3RoID4gMSkge1xuICAgICAgICAgICAgICAgICAgICBpbml0RXh0ZXJuYWwoZXh0ZXJuYWxNb2R1bGVJZCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChpbmZvLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCByZW1vdGVJbmZvID0gaW5mb1swXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFGRURFUkFUSU9OX1NVUFBPUlRFRF9UWVBFUy5pbmNsdWRlcyhyZW1vdGVJbmZvLmV4dGVybmFsVHlwZSkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluaXRFeHRlcm5hbChleHRlcm5hbE1vZHVsZUlkKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcHJvbWlzZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm4gaW5pdFByb21pc2VzW3NoYXJlU2NvcGVLZXldID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5pdFByb21pc2VzW3NoYXJlU2NvcGVLZXldID0gUHJvbWlzZS5hbGwocHJvbWlzZXMpLnRoZW4oKCk9PmluaXRQcm9taXNlc1tzaGFyZVNjb3BlS2V5XSA9IHRydWUpO1xuICAgIH07XG4gICAgc2hhcmVTY29wZUtleXMuZm9yRWFjaCgoa2V5KT0+e1xuICAgICAgICBpbml0aWFsaXplU2hhcmluZ1Byb21pc2VzLnB1c2goX2luaXRpYWxpemVTaGFyaW5nKGtleSkpO1xuICAgIH0pO1xuICAgIHJldHVybiBQcm9taXNlLmFsbChpbml0aWFsaXplU2hhcmluZ1Byb21pc2VzKS50aGVuKCgpPT50cnVlKTtcbn1cblxuZnVuY3Rpb24gaGFuZGxlSW5pdGlhbENvbnN1bWVzKG9wdGlvbnMpIHtcbiAgICBjb25zdCB7IG1vZHVsZUlkLCBtb2R1bGVUb0hhbmRsZXJNYXBwaW5nLCB3ZWJwYWNrUmVxdWlyZSB9ID0gb3B0aW9ucztcbiAgICBjb25zdCBmZWRlcmF0aW9uSW5zdGFuY2UgPSB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluc3RhbmNlO1xuICAgIGlmICghZmVkZXJhdGlvbkluc3RhbmNlKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignRmVkZXJhdGlvbiBpbnN0YW5jZSBub3QgZm91bmQhJyk7XG4gICAgfVxuICAgIGNvbnN0IHsgc2hhcmVLZXksIHNoYXJlSW5mbyB9ID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1ttb2R1bGVJZF07XG4gICAgdHJ5IHtcbiAgICAgICAgcmV0dXJuIGZlZGVyYXRpb25JbnN0YW5jZS5sb2FkU2hhcmVTeW5jKHNoYXJlS2V5LCB7XG4gICAgICAgICAgICBjdXN0b21TaGFyZUluZm86IHNoYXJlSW5mb1xuICAgICAgICB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHtcbiAgICAgICAgY29uc29sZS5lcnJvcignbG9hZFNoYXJlU3luYyBmYWlsZWQhIFRoZSBmdW5jdGlvbiBzaG91bGQgbm90IGJlIGNhbGxlZCB1bmxlc3MgeW91IHNldCBcImVhZ2VyOnRydWVcIi4gSWYgeW91IGRvIG5vdCBzZXQgaXQsIGFuZCBlbmNvdW50ZXIgdGhpcyBpc3N1ZSwgeW91IGNhbiBjaGVjayB3aGV0aGVyIGFuIGFzeW5jIGJvdW5kYXJ5IGlzIGltcGxlbWVudGVkLicpO1xuICAgICAgICBjb25zb2xlLmVycm9yKCdUaGUgb3JpZ2luYWwgZXJyb3IgbWVzc2FnZSBpcyBhcyBmb2xsb3dzOiAnKTtcbiAgICAgICAgdGhyb3cgZXJyO1xuICAgIH1cbn1cbmZ1bmN0aW9uIGluc3RhbGxJbml0aWFsQ29uc3VtZXMob3B0aW9ucykge1xuICAgIGNvbnN0IHsgbW9kdWxlVG9IYW5kbGVyTWFwcGluZywgd2VicGFja1JlcXVpcmUsIGluc3RhbGxlZE1vZHVsZXMsIGluaXRpYWxDb25zdW1lcyB9ID0gb3B0aW9ucztcbiAgICBpbml0aWFsQ29uc3VtZXMuZm9yRWFjaCgoaWQpPT57XG4gICAgICAgIHdlYnBhY2tSZXF1aXJlLm1baWRdID0gKG1vZHVsZSk9PntcbiAgICAgICAgICAgIHZhciBfc2hhcmVJbmZvX3NoYXJlQ29uZmlnO1xuICAgICAgICAgICAgLy8gSGFuZGxlIHNjZW5hcmlvIHdoZW4gbW9kdWxlIGlzIHVzZWQgc3luY2hyb25vdXNseVxuICAgICAgICAgICAgaW5zdGFsbGVkTW9kdWxlc1tpZF0gPSAwO1xuICAgICAgICAgICAgZGVsZXRlIHdlYnBhY2tSZXF1aXJlLmNbaWRdO1xuICAgICAgICAgICAgY29uc3QgZmFjdG9yeSA9IGhhbmRsZUluaXRpYWxDb25zdW1lcyh7XG4gICAgICAgICAgICAgICAgbW9kdWxlSWQ6IGlkLFxuICAgICAgICAgICAgICAgIG1vZHVsZVRvSGFuZGxlck1hcHBpbmcsXG4gICAgICAgICAgICAgICAgd2VicGFja1JlcXVpcmVcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHR5cGVvZiBmYWN0b3J5ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBTaGFyZWQgbW9kdWxlIGlzIG5vdCBhdmFpbGFibGUgZm9yIGVhZ2VyIGNvbnN1bXB0aW9uOiAke2lkfWApO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gZmFjdG9yeSgpO1xuICAgICAgICAgICAgLy8gQWRkIGxheWVyIHByb3BlcnR5IGZyb20gc2hhcmVDb25maWcgaWYgYXZhaWxhYmxlXG4gICAgICAgICAgICBjb25zdCB7IHNoYXJlSW5mbyB9ID0gbW9kdWxlVG9IYW5kbGVyTWFwcGluZ1tpZF07XG4gICAgICAgICAgICBpZiAoKHNoYXJlSW5mbyA9PSBudWxsID8gdm9pZCAwIDogKF9zaGFyZUluZm9fc2hhcmVDb25maWcgPSBzaGFyZUluZm8uc2hhcmVDb25maWcpID09IG51bGwgPyB2b2lkIDAgOiBfc2hhcmVJbmZvX3NoYXJlQ29uZmlnLmxheWVyKSAmJiByZXN1bHQgJiYgdHlwZW9mIHJlc3VsdCA9PT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgICAgICAgICAvLyBPbmx5IHNldCBsYXllciBpZiBpdCdzIG5vdCBhbHJlYWR5IGRlZmluZWQgb3IgaWYgaXQncyB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFyZXN1bHQuaGFzT3duUHJvcGVydHkoJ2xheWVyJykgfHwgcmVzdWx0LmxheWVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5sYXllciA9IHNoYXJlSW5mby5zaGFyZUNvbmZpZy5sYXllcjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgICAgICAgICAvLyBJZ25vcmUgaWYgbGF5ZXIgcHJvcGVydHkgaXMgcmVhZC1vbmx5XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbW9kdWxlLmV4cG9ydHMgPSByZXN1bHQ7XG4gICAgICAgIH07XG4gICAgfSk7XG59XG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICAgIF9leHRlbmRzID0gT2JqZWN0LmFzc2lnbiB8fCBmdW5jdGlvbiBhc3NpZ24odGFyZ2V0KSB7XG4gICAgICAgIGZvcih2YXIgaSA9IDE7IGkgPCBhcmd1bWVudHMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgdmFyIHNvdXJjZSA9IGFyZ3VtZW50c1tpXTtcbiAgICAgICAgICAgIGZvcih2YXIga2V5IGluIHNvdXJjZSlpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNvdXJjZSwga2V5KSkgdGFyZ2V0W2tleV0gPSBzb3VyY2Vba2V5XTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdGFyZ2V0O1xuICAgIH07XG4gICAgcmV0dXJuIF9leHRlbmRzLmFwcGx5KHRoaXMsIGFyZ3VtZW50cyk7XG59XG5cbmZ1bmN0aW9uIGluaXRDb250YWluZXJFbnRyeShvcHRpb25zKSB7XG4gICAgY29uc3QgeyB3ZWJwYWNrUmVxdWlyZSwgc2hhcmVTY29wZSwgaW5pdFNjb3BlLCBzaGFyZVNjb3BlS2V5LCByZW1vdGVFbnRyeUluaXRPcHRpb25zIH0gPSBvcHRpb25zO1xuICAgIGlmICghd2VicGFja1JlcXVpcmUuUykgcmV0dXJuO1xuICAgIGlmICghd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbiB8fCAhd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbnN0YW5jZSB8fCAhd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbml0T3B0aW9ucykgcmV0dXJuO1xuICAgIGNvbnN0IGZlZGVyYXRpb25JbnN0YW5jZSA9IHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24uaW5zdGFuY2U7XG4gICAgZmVkZXJhdGlvbkluc3RhbmNlLmluaXRPcHRpb25zKF9leHRlbmRzKHtcbiAgICAgICAgbmFtZTogd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5uYW1lLFxuICAgICAgICByZW1vdGVzOiBbXVxuICAgIH0sIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMpKTtcbiAgICBjb25zdCBob3N0U2hhcmVTY29wZUtleXMgPSByZW1vdGVFbnRyeUluaXRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLnNoYXJlU2NvcGVLZXlzO1xuICAgIGNvbnN0IGhvc3RTaGFyZVNjb3BlTWFwID0gcmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwO1xuICAgIC8vIGhvc3Q6ICdkZWZhdWx0JyByZW1vdGU6ICdkZWZhdWx0JyAgcmVtb3RlWydkZWZhdWx0J10gPSBob3N0U2hhcmVTY29wZU1hcFsnZGVmYXVsdCddXG4gICAgLy8gaG9zdDogWydkZWZhdWx0JywgJ3Njb3BlMSddIHJlbW90ZTogJ2RlZmF1bHQnICByZW1vdGVbJ2RlZmF1bHQnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydkZWZhdWx0J107IHJlbW90ZVsnc2NvcGUxJ10gPSBob3N0U2hhcmVTY29wZU1hcFsnc2NvcDEnXVxuICAgIC8vIGhvc3Q6ICdkZWZhdWx0JyByZW1vdGU6IFsnZGVmYXVsdCcsJ3Njb3BlMSddICByZW1vdGVbJ2RlZmF1bHQnXSA9IGhvc3RTaGFyZVNjb3BlTWFwWydkZWZhdWx0J107IHJlbW90ZVsnc2NvcGUxJ10gPSBob3N0U2hhcmVTY29wZU1hcFsnc2NvcGUxJ10gPSB7fVxuICAgIC8vIGhvc3Q6IFsnc2NvcGUxJywnZGVmYXVsdCddIHJlbW90ZTogWydzY29wZTEnLCdzY29wZTInXSA9PiByZW1vdGVbJ3Njb3BlMSddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ3Njb3BlMSddOyByZW1vdGVbJ3Njb3BlMiddID0gaG9zdFNoYXJlU2NvcGVNYXBbJ3Njb3BlMiddID0ge307XG4gICAgaWYgKCFzaGFyZVNjb3BlS2V5IHx8IHR5cGVvZiBzaGFyZVNjb3BlS2V5ID09PSAnc3RyaW5nJykge1xuICAgICAgICBjb25zdCBrZXkgPSBzaGFyZVNjb3BlS2V5IHx8ICdkZWZhdWx0JztcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoaG9zdFNoYXJlU2NvcGVLZXlzKSkge1xuICAgICAgICAgICAgLy8gY29uc3Qgc2MgPSBob3N0U2hhcmVTY29wZU1hcCFba2V5XTtcbiAgICAgICAgICAgIC8vIGlmICghc2MpIHtcbiAgICAgICAgICAgIC8vICAgdGhyb3cgbmV3IEVycm9yKCdzaGFyZVNjb3BlS2V5IGlzIG5vdCBleGlzdCBpbiBob3N0U2hhcmVTY29wZU1hcCcpO1xuICAgICAgICAgICAgLy8gfVxuICAgICAgICAgICAgLy8gZmVkZXJhdGlvbkluc3RhbmNlLmluaXRTaGFyZVNjb3BlTWFwKGtleSwgc2MsIHtcbiAgICAgICAgICAgIC8vICAgaG9zdFNoYXJlU2NvcGVNYXA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnM/LnNoYXJlU2NvcGVNYXAgfHwge30sXG4gICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlS2V5cy5mb3JFYWNoKChob3N0S2V5KT0+e1xuICAgICAgICAgICAgICAgIGlmICghaG9zdFNoYXJlU2NvcGVNYXBbaG9zdEtleV0pIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFNoYXJlU2NvcGVNYXBbaG9zdEtleV0gPSB7fTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3Qgc2MgPSBob3N0U2hhcmVTY29wZU1hcFtob3N0S2V5XTtcbiAgICAgICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoaG9zdEtleSwgc2MsIHtcbiAgICAgICAgICAgICAgICAgICAgaG9zdFNoYXJlU2NvcGVNYXA6IChyZW1vdGVFbnRyeUluaXRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLnNoYXJlU2NvcGVNYXApIHx8IHt9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGZlZGVyYXRpb25JbnN0YW5jZS5pbml0U2hhcmVTY29wZU1hcChrZXksIHNoYXJlU2NvcGUsIHtcbiAgICAgICAgICAgICAgICBob3N0U2hhcmVTY29wZU1hcDogKHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMgPT0gbnVsbCA/IHZvaWQgMCA6IHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMuc2hhcmVTY29wZU1hcCkgfHwge31cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgICAgc2hhcmVTY29wZUtleS5mb3JFYWNoKChrZXkpPT57XG4gICAgICAgICAgICBpZiAoIWhvc3RTaGFyZVNjb3BlS2V5cyB8fCAhaG9zdFNoYXJlU2NvcGVNYXApIHtcbiAgICAgICAgICAgICAgICBmZWRlcmF0aW9uSW5zdGFuY2UuaW5pdFNoYXJlU2NvcGVNYXAoa2V5LCBzaGFyZVNjb3BlLCB7XG4gICAgICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwOiAocmVtb3RlRW50cnlJbml0T3B0aW9ucyA9PSBudWxsID8gdm9pZCAwIDogcmVtb3RlRW50cnlJbml0T3B0aW9ucy5zaGFyZVNjb3BlTWFwKSB8fCB7fVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghaG9zdFNoYXJlU2NvcGVNYXBba2V5XSkge1xuICAgICAgICAgICAgICAgIGhvc3RTaGFyZVNjb3BlTWFwW2tleV0gPSB7fTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNjID0gaG9zdFNoYXJlU2NvcGVNYXBba2V5XTtcbiAgICAgICAgICAgIGZlZGVyYXRpb25JbnN0YW5jZS5pbml0U2hhcmVTY29wZU1hcChrZXksIHNjLCB7XG4gICAgICAgICAgICAgICAgaG9zdFNoYXJlU2NvcGVNYXA6IChyZW1vdGVFbnRyeUluaXRPcHRpb25zID09IG51bGwgPyB2b2lkIDAgOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLnNoYXJlU2NvcGVNYXApIHx8IHt9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlmICh3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmF0dGFjaFNoYXJlU2NvcGVNYXApIHtcbiAgICAgICAgd2VicGFja1JlcXVpcmUuZmVkZXJhdGlvbi5hdHRhY2hTaGFyZVNjb3BlTWFwKHdlYnBhY2tSZXF1aXJlKTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiB3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLnByZWZldGNoID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHdlYnBhY2tSZXF1aXJlLmZlZGVyYXRpb24ucHJlZmV0Y2goKTtcbiAgICB9XG4gICAgaWYgKCFBcnJheS5pc0FycmF5KHNoYXJlU2NvcGVLZXkpKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHdlYnBhY2tSZXF1aXJlLkkoc2hhcmVTY29wZUtleSB8fCAnZGVmYXVsdCcsIGluaXRTY29wZSk7XG4gICAgfVxuICAgIHZhciBwcm94eUluaXRpYWxpemVTaGFyaW5nID0gQm9vbGVhbih3ZWJwYWNrUmVxdWlyZS5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCk7XG4gICAgaWYgKHByb3h5SW5pdGlhbGl6ZVNoYXJpbmcpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICByZXR1cm4gd2VicGFja1JlcXVpcmUuSShzaGFyZVNjb3BlS2V5LCBpbml0U2NvcGUpO1xuICAgIH1cbiAgICAvLyBAdHMtaWdub3JlXG4gICAgcmV0dXJuIFByb21pc2UuYWxsKHNoYXJlU2NvcGVLZXkubWFwKChrZXkpPT57XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgcmV0dXJuIHdlYnBhY2tSZXF1aXJlLkkoa2V5LCBpbml0U2NvcGUpO1xuICAgIH0pKS50aGVuKCgpPT50cnVlKTtcbn1cblxuY29uc3QgZmVkZXJhdGlvbiA9IHtcbiAgICBydW50aW1lLFxuICAgIGluc3RhbmNlOiB1bmRlZmluZWQsXG4gICAgaW5pdE9wdGlvbnM6IHVuZGVmaW5lZCxcbiAgICBidW5kbGVyUnVudGltZToge1xuICAgICAgICByZW1vdGVzLFxuICAgICAgICBjb25zdW1lcyxcbiAgICAgICAgSTogaW5pdGlhbGl6ZVNoYXJpbmcsXG4gICAgICAgIFM6IHt9LFxuICAgICAgICBpbnN0YWxsSW5pdGlhbENvbnN1bWVzLFxuICAgICAgICBpbml0Q29udGFpbmVyRW50cnlcbiAgICB9LFxuICAgIGF0dGFjaFNoYXJlU2NvcGVNYXAsXG4gICAgYnVuZGxlclJ1bnRpbWVPcHRpb25zOiB7fVxufTtcblxuZXhwb3J0IHsgZmVkZXJhdGlvbiBhcyBkZWZhdWx0IH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5lc20uanMubWFwXG4iLCIndXNlIHN0cmljdCdcblxubW9kdWxlLmV4cG9ydHMgPSBhbnNpSFRNTFxuXG4vLyBSZWZlcmVuY2UgdG8gaHR0cHM6Ly9naXRodWIuY29tL3NpbmRyZXNvcmh1cy9hbnNpLXJlZ2V4XG52YXIgX3JlZ0FOU0kgPSAvKD86KD86XFx1MDAxYlxcWyl8XFx1MDA5YikoPzooPzpbMC05XXsxLDN9KT8oPzooPzo7WzAtOV17MCwzfSkqKT9bQS1NfGYtbV0pfFxcdTAwMWJbQS1NXS9cblxudmFyIF9kZWZDb2xvcnMgPSB7XG4gIHJlc2V0OiBbJ2ZmZicsICcwMDAnXSwgLy8gW0ZPUkVHUk9VRF9DT0xPUiwgQkFDS0dST1VORF9DT0xPUl1cbiAgYmxhY2s6ICcwMDAnLFxuICByZWQ6ICdmZjAwMDAnLFxuICBncmVlbjogJzIwOTgwNScsXG4gIHllbGxvdzogJ2U4YmYwMycsXG4gIGJsdWU6ICcwMDAwZmYnLFxuICBtYWdlbnRhOiAnZmYwMGZmJyxcbiAgY3lhbjogJzAwZmZlZScsXG4gIGxpZ2h0Z3JleTogJ2YwZjBmMCcsXG4gIGRhcmtncmV5OiAnODg4J1xufVxudmFyIF9zdHlsZXMgPSB7XG4gIDMwOiAnYmxhY2snLFxuICAzMTogJ3JlZCcsXG4gIDMyOiAnZ3JlZW4nLFxuICAzMzogJ3llbGxvdycsXG4gIDM0OiAnYmx1ZScsXG4gIDM1OiAnbWFnZW50YScsXG4gIDM2OiAnY3lhbicsXG4gIDM3OiAnbGlnaHRncmV5J1xufVxudmFyIF9vcGVuVGFncyA9IHtcbiAgJzEnOiAnZm9udC13ZWlnaHQ6Ym9sZCcsIC8vIGJvbGRcbiAgJzInOiAnb3BhY2l0eTowLjUnLCAvLyBkaW1cbiAgJzMnOiAnPGk+JywgLy8gaXRhbGljXG4gICc0JzogJzx1PicsIC8vIHVuZGVyc2NvcmVcbiAgJzgnOiAnZGlzcGxheTpub25lJywgLy8gaGlkZGVuXG4gICc5JzogJzxkZWw+JyAvLyBkZWxldGVcbn1cbnZhciBfY2xvc2VUYWdzID0ge1xuICAnMjMnOiAnPC9pPicsIC8vIHJlc2V0IGl0YWxpY1xuICAnMjQnOiAnPC91PicsIC8vIHJlc2V0IHVuZGVyc2NvcmVcbiAgJzI5JzogJzwvZGVsPicgLy8gcmVzZXQgZGVsZXRlXG59XG5cbjtbMCwgMjEsIDIyLCAyNywgMjgsIDM5LCA0OV0uZm9yRWFjaChmdW5jdGlvbiAobikge1xuICBfY2xvc2VUYWdzW25dID0gJzwvc3Bhbj4nXG59KVxuXG4vKipcbiAqIENvbnZlcnRzIHRleHQgd2l0aCBBTlNJIGNvbG9yIGNvZGVzIHRvIEhUTUwgbWFya3VwLlxuICogQHBhcmFtIHtTdHJpbmd9IHRleHRcbiAqIEByZXR1cm5zIHsqfVxuICovXG5mdW5jdGlvbiBhbnNpSFRNTCAodGV4dCkge1xuICAvLyBSZXR1cm5zIHRoZSB0ZXh0IGlmIHRoZSBzdHJpbmcgaGFzIG5vIEFOU0kgZXNjYXBlIGNvZGUuXG4gIGlmICghX3JlZ0FOU0kudGVzdCh0ZXh0KSkge1xuICAgIHJldHVybiB0ZXh0XG4gIH1cblxuICAvLyBDYWNoZSBvcGVuZWQgc2VxdWVuY2UuXG4gIHZhciBhbnNpQ29kZXMgPSBbXVxuICAvLyBSZXBsYWNlIHdpdGggbWFya3VwLlxuICB2YXIgcmV0ID0gdGV4dC5yZXBsYWNlKC9cXDAzM1xcWyhcXGQrKW0vZywgZnVuY3Rpb24gKG1hdGNoLCBzZXEpIHtcbiAgICB2YXIgb3QgPSBfb3BlblRhZ3Nbc2VxXVxuICAgIGlmIChvdCkge1xuICAgICAgLy8gSWYgY3VycmVudCBzZXF1ZW5jZSBoYXMgYmVlbiBvcGVuZWQsIGNsb3NlIGl0LlxuICAgICAgaWYgKCEhfmFuc2lDb2Rlcy5pbmRleE9mKHNlcSkpIHsgLy8gZXNsaW50LWRpc2FibGUtbGluZSBuby1leHRyYS1ib29sZWFuLWNhc3RcbiAgICAgICAgYW5zaUNvZGVzLnBvcCgpXG4gICAgICAgIHJldHVybiAnPC9zcGFuPidcbiAgICAgIH1cbiAgICAgIC8vIE9wZW4gdGFnLlxuICAgICAgYW5zaUNvZGVzLnB1c2goc2VxKVxuICAgICAgcmV0dXJuIG90WzBdID09PSAnPCcgPyBvdCA6ICc8c3BhbiBzdHlsZT1cIicgKyBvdCArICc7XCI+J1xuICAgIH1cblxuICAgIHZhciBjdCA9IF9jbG9zZVRhZ3Nbc2VxXVxuICAgIGlmIChjdCkge1xuICAgICAgLy8gUG9wIHNlcXVlbmNlXG4gICAgICBhbnNpQ29kZXMucG9wKClcbiAgICAgIHJldHVybiBjdFxuICAgIH1cbiAgICByZXR1cm4gJydcbiAgfSlcblxuICAvLyBNYWtlIHN1cmUgdGFncyBhcmUgY2xvc2VkLlxuICB2YXIgbCA9IGFuc2lDb2Rlcy5sZW5ndGhcbiAgOyhsID4gMCkgJiYgKHJldCArPSBBcnJheShsICsgMSkuam9pbignPC9zcGFuPicpKVxuXG4gIHJldHVybiByZXRcbn1cblxuLyoqXG4gKiBDdXN0b21pemUgY29sb3JzLlxuICogQHBhcmFtIHtPYmplY3R9IGNvbG9ycyByZWZlcmVuY2UgdG8gX2RlZkNvbG9yc1xuICovXG5hbnNpSFRNTC5zZXRDb2xvcnMgPSBmdW5jdGlvbiAoY29sb3JzKSB7XG4gIGlmICh0eXBlb2YgY29sb3JzICE9PSAnb2JqZWN0Jykge1xuICAgIHRocm93IG5ldyBFcnJvcignYGNvbG9yc2AgcGFyYW1ldGVyIG11c3QgYmUgYW4gT2JqZWN0LicpXG4gIH1cblxuICB2YXIgX2ZpbmFsQ29sb3JzID0ge31cbiAgZm9yICh2YXIga2V5IGluIF9kZWZDb2xvcnMpIHtcbiAgICB2YXIgaGV4ID0gY29sb3JzLmhhc093blByb3BlcnR5KGtleSkgPyBjb2xvcnNba2V5XSA6IG51bGxcbiAgICBpZiAoIWhleCkge1xuICAgICAgX2ZpbmFsQ29sb3JzW2tleV0gPSBfZGVmQ29sb3JzW2tleV1cbiAgICAgIGNvbnRpbnVlXG4gICAgfVxuICAgIGlmICgncmVzZXQnID09PSBrZXkpIHtcbiAgICAgIGlmICh0eXBlb2YgaGV4ID09PSAnc3RyaW5nJykge1xuICAgICAgICBoZXggPSBbaGV4XVxuICAgICAgfVxuICAgICAgaWYgKCFBcnJheS5pc0FycmF5KGhleCkgfHwgaGV4Lmxlbmd0aCA9PT0gMCB8fCBoZXguc29tZShmdW5jdGlvbiAoaCkge1xuICAgICAgICByZXR1cm4gdHlwZW9mIGggIT09ICdzdHJpbmcnXG4gICAgICB9KSkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1RoZSB2YWx1ZSBvZiBgJyArIGtleSArICdgIHByb3BlcnR5IG11c3QgYmUgYW4gQXJyYXkgYW5kIGVhY2ggaXRlbSBjb3VsZCBvbmx5IGJlIGEgaGV4IHN0cmluZywgZS5nLjogRkYwMDAwJylcbiAgICAgIH1cbiAgICAgIHZhciBkZWZIZXhDb2xvciA9IF9kZWZDb2xvcnNba2V5XVxuICAgICAgaWYgKCFoZXhbMF0pIHtcbiAgICAgICAgaGV4WzBdID0gZGVmSGV4Q29sb3JbMF1cbiAgICAgIH1cbiAgICAgIGlmIChoZXgubGVuZ3RoID09PSAxIHx8ICFoZXhbMV0pIHtcbiAgICAgICAgaGV4ID0gW2hleFswXV1cbiAgICAgICAgaGV4LnB1c2goZGVmSGV4Q29sb3JbMV0pXG4gICAgICB9XG5cbiAgICAgIGhleCA9IGhleC5zbGljZSgwLCAyKVxuICAgIH0gZWxzZSBpZiAodHlwZW9mIGhleCAhPT0gJ3N0cmluZycpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVGhlIHZhbHVlIG9mIGAnICsga2V5ICsgJ2AgcHJvcGVydHkgbXVzdCBiZSBhIGhleCBzdHJpbmcsIGUuZy46IEZGMDAwMCcpXG4gICAgfVxuICAgIF9maW5hbENvbG9yc1trZXldID0gaGV4XG4gIH1cbiAgX3NldFRhZ3MoX2ZpbmFsQ29sb3JzKVxufVxuXG4vKipcbiAqIFJlc2V0IGNvbG9ycy5cbiAqL1xuYW5zaUhUTUwucmVzZXQgPSBmdW5jdGlvbiAoKSB7XG4gIF9zZXRUYWdzKF9kZWZDb2xvcnMpXG59XG5cbi8qKlxuICogRXhwb3NlIHRhZ3MsIGluY2x1ZGluZyBvcGVuIGFuZCBjbG9zZS5cbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cbmFuc2lIVE1MLnRhZ3MgPSB7fVxuXG5pZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7XG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnb3BlbicsIHtcbiAgICBnZXQ6IGZ1bmN0aW9uICgpIHsgcmV0dXJuIF9vcGVuVGFncyB9XG4gIH0pXG4gIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShhbnNpSFRNTC50YWdzLCAnY2xvc2UnLCB7XG4gICAgZ2V0OiBmdW5jdGlvbiAoKSB7IHJldHVybiBfY2xvc2VUYWdzIH1cbiAgfSlcbn0gZWxzZSB7XG4gIGFuc2lIVE1MLnRhZ3Mub3BlbiA9IF9vcGVuVGFnc1xuICBhbnNpSFRNTC50YWdzLmNsb3NlID0gX2Nsb3NlVGFnc1xufVxuXG5mdW5jdGlvbiBfc2V0VGFncyAoY29sb3JzKSB7XG4gIC8vIHJlc2V0IGFsbFxuICBfb3BlblRhZ3NbJzAnXSA9ICdmb250LXdlaWdodDpub3JtYWw7b3BhY2l0eToxO2NvbG9yOiMnICsgY29sb3JzLnJlc2V0WzBdICsgJztiYWNrZ3JvdW5kOiMnICsgY29sb3JzLnJlc2V0WzFdXG4gIC8vIGludmVyc2VcbiAgX29wZW5UYWdzWyc3J10gPSAnY29sb3I6IycgKyBjb2xvcnMucmVzZXRbMV0gKyAnO2JhY2tncm91bmQ6IycgKyBjb2xvcnMucmVzZXRbMF1cbiAgLy8gZGFyayBncmV5XG4gIF9vcGVuVGFnc1snOTAnXSA9ICdjb2xvcjojJyArIGNvbG9ycy5kYXJrZ3JleVxuXG4gIGZvciAodmFyIGNvZGUgaW4gX3N0eWxlcykge1xuICAgIHZhciBjb2xvciA9IF9zdHlsZXNbY29kZV1cbiAgICB2YXIgb3JpQ29sb3IgPSBjb2xvcnNbY29sb3JdIHx8ICcwMDAnXG4gICAgX29wZW5UYWdzW2NvZGVdID0gJ2NvbG9yOiMnICsgb3JpQ29sb3JcbiAgICBjb2RlID0gcGFyc2VJbnQoY29kZSlcbiAgICBfb3BlblRhZ3NbKGNvZGUgKyAxMCkudG9TdHJpbmcoKV0gPSAnYmFja2dyb3VuZDojJyArIG9yaUNvbG9yXG4gIH1cbn1cblxuYW5zaUhUTUwucmVzZXQoKVxuIiwiLy8gQ29weXJpZ2h0IEpveWVudCwgSW5jLiBhbmQgb3RoZXIgTm9kZSBjb250cmlidXRvcnMuXG4vL1xuLy8gUGVybWlzc2lvbiBpcyBoZXJlYnkgZ3JhbnRlZCwgZnJlZSBvZiBjaGFyZ2UsIHRvIGFueSBwZXJzb24gb2J0YWluaW5nIGFcbi8vIGNvcHkgb2YgdGhpcyBzb2Z0d2FyZSBhbmQgYXNzb2NpYXRlZCBkb2N1bWVudGF0aW9uIGZpbGVzICh0aGVcbi8vIFwiU29mdHdhcmVcIiksIHRvIGRlYWwgaW4gdGhlIFNvZnR3YXJlIHdpdGhvdXQgcmVzdHJpY3Rpb24sIGluY2x1ZGluZ1xuLy8gd2l0aG91dCBsaW1pdGF0aW9uIHRoZSByaWdodHMgdG8gdXNlLCBjb3B5LCBtb2RpZnksIG1lcmdlLCBwdWJsaXNoLFxuLy8gZGlzdHJpYnV0ZSwgc3VibGljZW5zZSwgYW5kL29yIHNlbGwgY29waWVzIG9mIHRoZSBTb2Z0d2FyZSwgYW5kIHRvIHBlcm1pdFxuLy8gcGVyc29ucyB0byB3aG9tIHRoZSBTb2Z0d2FyZSBpcyBmdXJuaXNoZWQgdG8gZG8gc28sIHN1YmplY3QgdG8gdGhlXG4vLyBmb2xsb3dpbmcgY29uZGl0aW9uczpcbi8vXG4vLyBUaGUgYWJvdmUgY29weXJpZ2h0IG5vdGljZSBhbmQgdGhpcyBwZXJtaXNzaW9uIG5vdGljZSBzaGFsbCBiZSBpbmNsdWRlZFxuLy8gaW4gYWxsIGNvcGllcyBvciBzdWJzdGFudGlhbCBwb3J0aW9ucyBvZiB0aGUgU29mdHdhcmUuXG4vL1xuLy8gVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTU1xuLy8gT1IgSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRlxuLy8gTUVSQ0hBTlRBQklMSVRZLCBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTlxuLy8gTk8gRVZFTlQgU0hBTEwgVEhFIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sXG4vLyBEQU1BR0VTIE9SIE9USEVSIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1Jcbi8vIE9USEVSV0lTRSwgQVJJU0lORyBGUk9NLCBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEVcbi8vIFVTRSBPUiBPVEhFUiBERUFMSU5HUyBJTiBUSEUgU09GVFdBUkUuXG5cbid1c2Ugc3RyaWN0JztcblxudmFyIFIgPSB0eXBlb2YgUmVmbGVjdCA9PT0gJ29iamVjdCcgPyBSZWZsZWN0IDogbnVsbFxudmFyIFJlZmxlY3RBcHBseSA9IFIgJiYgdHlwZW9mIFIuYXBwbHkgPT09ICdmdW5jdGlvbidcbiAgPyBSLmFwcGx5XG4gIDogZnVuY3Rpb24gUmVmbGVjdEFwcGx5KHRhcmdldCwgcmVjZWl2ZXIsIGFyZ3MpIHtcbiAgICByZXR1cm4gRnVuY3Rpb24ucHJvdG90eXBlLmFwcGx5LmNhbGwodGFyZ2V0LCByZWNlaXZlciwgYXJncyk7XG4gIH1cblxudmFyIFJlZmxlY3RPd25LZXlzXG5pZiAoUiAmJiB0eXBlb2YgUi5vd25LZXlzID09PSAnZnVuY3Rpb24nKSB7XG4gIFJlZmxlY3RPd25LZXlzID0gUi5vd25LZXlzXG59IGVsc2UgaWYgKE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMpIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KVxuICAgICAgLmNvbmNhdChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHRhcmdldCkpO1xuICB9O1xufSBlbHNlIHtcbiAgUmVmbGVjdE93bktleXMgPSBmdW5jdGlvbiBSZWZsZWN0T3duS2V5cyh0YXJnZXQpIHtcbiAgICByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5TmFtZXModGFyZ2V0KTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gUHJvY2Vzc0VtaXRXYXJuaW5nKHdhcm5pbmcpIHtcbiAgaWYgKGNvbnNvbGUgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4od2FybmluZyk7XG59XG5cbnZhciBOdW1iZXJJc05hTiA9IE51bWJlci5pc05hTiB8fCBmdW5jdGlvbiBOdW1iZXJJc05hTih2YWx1ZSkge1xuICByZXR1cm4gdmFsdWUgIT09IHZhbHVlO1xufVxuXG5mdW5jdGlvbiBFdmVudEVtaXR0ZXIoKSB7XG4gIEV2ZW50RW1pdHRlci5pbml0LmNhbGwodGhpcyk7XG59XG5tb2R1bGUuZXhwb3J0cyA9IEV2ZW50RW1pdHRlcjtcbm1vZHVsZS5leHBvcnRzLm9uY2UgPSBvbmNlO1xuXG4vLyBCYWNrd2FyZHMtY29tcGF0IHdpdGggbm9kZSAwLjEwLnhcbkV2ZW50RW1pdHRlci5FdmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50cyA9IHVuZGVmaW5lZDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX2V2ZW50c0NvdW50ID0gMDtcbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuX21heExpc3RlbmVycyA9IHVuZGVmaW5lZDtcblxuLy8gQnkgZGVmYXVsdCBFdmVudEVtaXR0ZXJzIHdpbGwgcHJpbnQgYSB3YXJuaW5nIGlmIG1vcmUgdGhhbiAxMCBsaXN0ZW5lcnMgYXJlXG4vLyBhZGRlZCB0byBpdC4gVGhpcyBpcyBhIHVzZWZ1bCBkZWZhdWx0IHdoaWNoIGhlbHBzIGZpbmRpbmcgbWVtb3J5IGxlYWtzLlxudmFyIGRlZmF1bHRNYXhMaXN0ZW5lcnMgPSAxMDtcblxuZnVuY3Rpb24gY2hlY2tMaXN0ZW5lcihsaXN0ZW5lcikge1xuICBpZiAodHlwZW9mIGxpc3RlbmVyICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcignVGhlIFwibGlzdGVuZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRnVuY3Rpb24uIFJlY2VpdmVkIHR5cGUgJyArIHR5cGVvZiBsaXN0ZW5lcik7XG4gIH1cbn1cblxuT2JqZWN0LmRlZmluZVByb3BlcnR5KEV2ZW50RW1pdHRlciwgJ2RlZmF1bHRNYXhMaXN0ZW5lcnMnLCB7XG4gIGVudW1lcmFibGU6IHRydWUsXG4gIGdldDogZnVuY3Rpb24oKSB7XG4gICAgcmV0dXJuIGRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIH0sXG4gIHNldDogZnVuY3Rpb24oYXJnKSB7XG4gICAgaWYgKHR5cGVvZiBhcmcgIT09ICdudW1iZXInIHx8IGFyZyA8IDAgfHwgTnVtYmVySXNOYU4oYXJnKSkge1xuICAgICAgdGhyb3cgbmV3IFJhbmdlRXJyb3IoJ1RoZSB2YWx1ZSBvZiBcImRlZmF1bHRNYXhMaXN0ZW5lcnNcIiBpcyBvdXQgb2YgcmFuZ2UuIEl0IG11c3QgYmUgYSBub24tbmVnYXRpdmUgbnVtYmVyLiBSZWNlaXZlZCAnICsgYXJnICsgJy4nKTtcbiAgICB9XG4gICAgZGVmYXVsdE1heExpc3RlbmVycyA9IGFyZztcbiAgfVxufSk7XG5cbkV2ZW50RW1pdHRlci5pbml0ID0gZnVuY3Rpb24oKSB7XG5cbiAgaWYgKHRoaXMuX2V2ZW50cyA9PT0gdW5kZWZpbmVkIHx8XG4gICAgICB0aGlzLl9ldmVudHMgPT09IE9iamVjdC5nZXRQcm90b3R5cGVPZih0aGlzKS5fZXZlbnRzKSB7XG4gICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICB0aGlzLl9ldmVudHNDb3VudCA9IDA7XG4gIH1cblxuICB0aGlzLl9tYXhMaXN0ZW5lcnMgPSB0aGlzLl9tYXhMaXN0ZW5lcnMgfHwgdW5kZWZpbmVkO1xufTtcblxuLy8gT2J2aW91c2x5IG5vdCBhbGwgRW1pdHRlcnMgc2hvdWxkIGJlIGxpbWl0ZWQgdG8gMTAuIFRoaXMgZnVuY3Rpb24gYWxsb3dzXG4vLyB0aGF0IHRvIGJlIGluY3JlYXNlZC4gU2V0IHRvIHplcm8gZm9yIHVubGltaXRlZC5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuc2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gc2V0TWF4TGlzdGVuZXJzKG4pIHtcbiAgaWYgKHR5cGVvZiBuICE9PSAnbnVtYmVyJyB8fCBuIDwgMCB8fCBOdW1iZXJJc05hTihuKSkge1xuICAgIHRocm93IG5ldyBSYW5nZUVycm9yKCdUaGUgdmFsdWUgb2YgXCJuXCIgaXMgb3V0IG9mIHJhbmdlLiBJdCBtdXN0IGJlIGEgbm9uLW5lZ2F0aXZlIG51bWJlci4gUmVjZWl2ZWQgJyArIG4gKyAnLicpO1xuICB9XG4gIHRoaXMuX21heExpc3RlbmVycyA9IG47XG4gIHJldHVybiB0aGlzO1xufTtcblxuZnVuY3Rpb24gX2dldE1heExpc3RlbmVycyh0aGF0KSB7XG4gIGlmICh0aGF0Ll9tYXhMaXN0ZW5lcnMgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gRXZlbnRFbWl0dGVyLmRlZmF1bHRNYXhMaXN0ZW5lcnM7XG4gIHJldHVybiB0aGF0Ll9tYXhMaXN0ZW5lcnM7XG59XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZ2V0TWF4TGlzdGVuZXJzID0gZnVuY3Rpb24gZ2V0TWF4TGlzdGVuZXJzKCkge1xuICByZXR1cm4gX2dldE1heExpc3RlbmVycyh0aGlzKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUuZW1pdCA9IGZ1bmN0aW9uIGVtaXQodHlwZSkge1xuICB2YXIgYXJncyA9IFtdO1xuICBmb3IgKHZhciBpID0gMTsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKykgYXJncy5wdXNoKGFyZ3VtZW50c1tpXSk7XG4gIHZhciBkb0Vycm9yID0gKHR5cGUgPT09ICdlcnJvcicpO1xuXG4gIHZhciBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gIGlmIChldmVudHMgIT09IHVuZGVmaW5lZClcbiAgICBkb0Vycm9yID0gKGRvRXJyb3IgJiYgZXZlbnRzLmVycm9yID09PSB1bmRlZmluZWQpO1xuICBlbHNlIGlmICghZG9FcnJvcilcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgLy8gSWYgdGhlcmUgaXMgbm8gJ2Vycm9yJyBldmVudCBsaXN0ZW5lciB0aGVuIHRocm93LlxuICBpZiAoZG9FcnJvcikge1xuICAgIHZhciBlcjtcbiAgICBpZiAoYXJncy5sZW5ndGggPiAwKVxuICAgICAgZXIgPSBhcmdzWzBdO1xuICAgIGlmIChlciBpbnN0YW5jZW9mIEVycm9yKSB7XG4gICAgICAvLyBOb3RlOiBUaGUgY29tbWVudHMgb24gdGhlIGB0aHJvd2AgbGluZXMgYXJlIGludGVudGlvbmFsLCB0aGV5IHNob3dcbiAgICAgIC8vIHVwIGluIE5vZGUncyBvdXRwdXQgaWYgdGhpcyByZXN1bHRzIGluIGFuIHVuaGFuZGxlZCBleGNlcHRpb24uXG4gICAgICB0aHJvdyBlcjsgLy8gVW5oYW5kbGVkICdlcnJvcicgZXZlbnRcbiAgICB9XG4gICAgLy8gQXQgbGVhc3QgZ2l2ZSBzb21lIGtpbmQgb2YgY29udGV4dCB0byB0aGUgdXNlclxuICAgIHZhciBlcnIgPSBuZXcgRXJyb3IoJ1VuaGFuZGxlZCBlcnJvci4nICsgKGVyID8gJyAoJyArIGVyLm1lc3NhZ2UgKyAnKScgOiAnJykpO1xuICAgIGVyci5jb250ZXh0ID0gZXI7XG4gICAgdGhyb3cgZXJyOyAvLyBVbmhhbmRsZWQgJ2Vycm9yJyBldmVudFxuICB9XG5cbiAgdmFyIGhhbmRsZXIgPSBldmVudHNbdHlwZV07XG5cbiAgaWYgKGhhbmRsZXIgPT09IHVuZGVmaW5lZClcbiAgICByZXR1cm4gZmFsc2U7XG5cbiAgaWYgKHR5cGVvZiBoYW5kbGVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgUmVmbGVjdEFwcGx5KGhhbmRsZXIsIHRoaXMsIGFyZ3MpO1xuICB9IGVsc2Uge1xuICAgIHZhciBsZW4gPSBoYW5kbGVyLmxlbmd0aDtcbiAgICB2YXIgbGlzdGVuZXJzID0gYXJyYXlDbG9uZShoYW5kbGVyLCBsZW4pO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpXG4gICAgICBSZWZsZWN0QXBwbHkobGlzdGVuZXJzW2ldLCB0aGlzLCBhcmdzKTtcbiAgfVxuXG4gIHJldHVybiB0cnVlO1xufTtcblxuZnVuY3Rpb24gX2FkZExpc3RlbmVyKHRhcmdldCwgdHlwZSwgbGlzdGVuZXIsIHByZXBlbmQpIHtcbiAgdmFyIG07XG4gIHZhciBldmVudHM7XG4gIHZhciBleGlzdGluZztcblxuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcbiAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgZXZlbnRzID0gdGFyZ2V0Ll9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgIHRhcmdldC5fZXZlbnRzQ291bnQgPSAwO1xuICB9IGVsc2Uge1xuICAgIC8vIFRvIGF2b2lkIHJlY3Vyc2lvbiBpbiB0aGUgY2FzZSB0aGF0IHR5cGUgPT09IFwibmV3TGlzdGVuZXJcIiEgQmVmb3JlXG4gICAgLy8gYWRkaW5nIGl0IHRvIHRoZSBsaXN0ZW5lcnMsIGZpcnN0IGVtaXQgXCJuZXdMaXN0ZW5lclwiLlxuICAgIGlmIChldmVudHMubmV3TGlzdGVuZXIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgdGFyZ2V0LmVtaXQoJ25ld0xpc3RlbmVyJywgdHlwZSxcbiAgICAgICAgICAgICAgICAgIGxpc3RlbmVyLmxpc3RlbmVyID8gbGlzdGVuZXIubGlzdGVuZXIgOiBsaXN0ZW5lcik7XG5cbiAgICAgIC8vIFJlLWFzc2lnbiBgZXZlbnRzYCBiZWNhdXNlIGEgbmV3TGlzdGVuZXIgaGFuZGxlciBjb3VsZCBoYXZlIGNhdXNlZCB0aGVcbiAgICAgIC8vIHRoaXMuX2V2ZW50cyB0byBiZSBhc3NpZ25lZCB0byBhIG5ldyBvYmplY3RcbiAgICAgIGV2ZW50cyA9IHRhcmdldC5fZXZlbnRzO1xuICAgIH1cbiAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXTtcbiAgfVxuXG4gIGlmIChleGlzdGluZyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgLy8gT3B0aW1pemUgdGhlIGNhc2Ugb2Ygb25lIGxpc3RlbmVyLiBEb24ndCBuZWVkIHRoZSBleHRyYSBhcnJheSBvYmplY3QuXG4gICAgZXhpc3RpbmcgPSBldmVudHNbdHlwZV0gPSBsaXN0ZW5lcjtcbiAgICArK3RhcmdldC5fZXZlbnRzQ291bnQ7XG4gIH0gZWxzZSB7XG4gICAgaWYgKHR5cGVvZiBleGlzdGluZyA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgLy8gQWRkaW5nIHRoZSBzZWNvbmQgZWxlbWVudCwgbmVlZCB0byBjaGFuZ2UgdG8gYXJyYXkuXG4gICAgICBleGlzdGluZyA9IGV2ZW50c1t0eXBlXSA9XG4gICAgICAgIHByZXBlbmQgPyBbbGlzdGVuZXIsIGV4aXN0aW5nXSA6IFtleGlzdGluZywgbGlzdGVuZXJdO1xuICAgICAgLy8gSWYgd2UndmUgYWxyZWFkeSBnb3QgYW4gYXJyYXksIGp1c3QgYXBwZW5kLlxuICAgIH0gZWxzZSBpZiAocHJlcGVuZCkge1xuICAgICAgZXhpc3RpbmcudW5zaGlmdChsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGV4aXN0aW5nLnB1c2gobGlzdGVuZXIpO1xuICAgIH1cblxuICAgIC8vIENoZWNrIGZvciBsaXN0ZW5lciBsZWFrXG4gICAgbSA9IF9nZXRNYXhMaXN0ZW5lcnModGFyZ2V0KTtcbiAgICBpZiAobSA+IDAgJiYgZXhpc3RpbmcubGVuZ3RoID4gbSAmJiAhZXhpc3Rpbmcud2FybmVkKSB7XG4gICAgICBleGlzdGluZy53YXJuZWQgPSB0cnVlO1xuICAgICAgLy8gTm8gZXJyb3IgY29kZSBmb3IgdGhpcyBzaW5jZSBpdCBpcyBhIFdhcm5pbmdcbiAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1yZXN0cmljdGVkLXN5bnRheFxuICAgICAgdmFyIHcgPSBuZXcgRXJyb3IoJ1Bvc3NpYmxlIEV2ZW50RW1pdHRlciBtZW1vcnkgbGVhayBkZXRlY3RlZC4gJyArXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXN0aW5nLmxlbmd0aCArICcgJyArIFN0cmluZyh0eXBlKSArICcgbGlzdGVuZXJzICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnYWRkZWQuIFVzZSBlbWl0dGVyLnNldE1heExpc3RlbmVycygpIHRvICcgK1xuICAgICAgICAgICAgICAgICAgICAgICAgICAnaW5jcmVhc2UgbGltaXQnKTtcbiAgICAgIHcubmFtZSA9ICdNYXhMaXN0ZW5lcnNFeGNlZWRlZFdhcm5pbmcnO1xuICAgICAgdy5lbWl0dGVyID0gdGFyZ2V0O1xuICAgICAgdy50eXBlID0gdHlwZTtcbiAgICAgIHcuY291bnQgPSBleGlzdGluZy5sZW5ndGg7XG4gICAgICBQcm9jZXNzRW1pdFdhcm5pbmcodyk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5hZGRMaXN0ZW5lciA9IGZ1bmN0aW9uIGFkZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gIHJldHVybiBfYWRkTGlzdGVuZXIodGhpcywgdHlwZSwgbGlzdGVuZXIsIGZhbHNlKTtcbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUub24gPSBFdmVudEVtaXR0ZXIucHJvdG90eXBlLmFkZExpc3RlbmVyO1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcHJlcGVuZExpc3RlbmVyKHR5cGUsIGxpc3RlbmVyKSB7XG4gICAgICByZXR1cm4gX2FkZExpc3RlbmVyKHRoaXMsIHR5cGUsIGxpc3RlbmVyLCB0cnVlKTtcbiAgICB9O1xuXG5mdW5jdGlvbiBvbmNlV3JhcHBlcigpIHtcbiAgaWYgKCF0aGlzLmZpcmVkKSB7XG4gICAgdGhpcy50YXJnZXQucmVtb3ZlTGlzdGVuZXIodGhpcy50eXBlLCB0aGlzLndyYXBGbik7XG4gICAgdGhpcy5maXJlZCA9IHRydWU7XG4gICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApXG4gICAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5jYWxsKHRoaXMudGFyZ2V0KTtcbiAgICByZXR1cm4gdGhpcy5saXN0ZW5lci5hcHBseSh0aGlzLnRhcmdldCwgYXJndW1lbnRzKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfb25jZVdyYXAodGFyZ2V0LCB0eXBlLCBsaXN0ZW5lcikge1xuICB2YXIgc3RhdGUgPSB7IGZpcmVkOiBmYWxzZSwgd3JhcEZuOiB1bmRlZmluZWQsIHRhcmdldDogdGFyZ2V0LCB0eXBlOiB0eXBlLCBsaXN0ZW5lcjogbGlzdGVuZXIgfTtcbiAgdmFyIHdyYXBwZWQgPSBvbmNlV3JhcHBlci5iaW5kKHN0YXRlKTtcbiAgd3JhcHBlZC5saXN0ZW5lciA9IGxpc3RlbmVyO1xuICBzdGF0ZS53cmFwRm4gPSB3cmFwcGVkO1xuICByZXR1cm4gd3JhcHBlZDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5vbmNlID0gZnVuY3Rpb24gb25jZSh0eXBlLCBsaXN0ZW5lcikge1xuICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcbiAgdGhpcy5vbih0eXBlLCBfb25jZVdyYXAodGhpcywgdHlwZSwgbGlzdGVuZXIpKTtcbiAgcmV0dXJuIHRoaXM7XG59O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLnByZXBlbmRPbmNlTGlzdGVuZXIgPVxuICAgIGZ1bmN0aW9uIHByZXBlbmRPbmNlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIGNoZWNrTGlzdGVuZXIobGlzdGVuZXIpO1xuICAgICAgdGhpcy5wcmVwZW5kTGlzdGVuZXIodHlwZSwgX29uY2VXcmFwKHRoaXMsIHR5cGUsIGxpc3RlbmVyKSk7XG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG4vLyBFbWl0cyBhICdyZW1vdmVMaXN0ZW5lcicgZXZlbnQgaWYgYW5kIG9ubHkgaWYgdGhlIGxpc3RlbmVyIHdhcyByZW1vdmVkLlxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yZW1vdmVMaXN0ZW5lciA9XG4gICAgZnVuY3Rpb24gcmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXIpIHtcbiAgICAgIHZhciBsaXN0LCBldmVudHMsIHBvc2l0aW9uLCBpLCBvcmlnaW5hbExpc3RlbmVyO1xuXG4gICAgICBjaGVja0xpc3RlbmVyKGxpc3RlbmVyKTtcblxuICAgICAgZXZlbnRzID0gdGhpcy5fZXZlbnRzO1xuICAgICAgaWYgKGV2ZW50cyA9PT0gdW5kZWZpbmVkKVxuICAgICAgICByZXR1cm4gdGhpcztcblxuICAgICAgbGlzdCA9IGV2ZW50c1t0eXBlXTtcbiAgICAgIGlmIChsaXN0ID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICBpZiAobGlzdCA9PT0gbGlzdGVuZXIgfHwgbGlzdC5saXN0ZW5lciA9PT0gbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKC0tdGhpcy5fZXZlbnRzQ291bnQgPT09IDApXG4gICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgZGVsZXRlIGV2ZW50c1t0eXBlXTtcbiAgICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyKVxuICAgICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIGxpc3QubGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKHR5cGVvZiBsaXN0ICE9PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgIHBvc2l0aW9uID0gLTE7XG5cbiAgICAgICAgZm9yIChpID0gbGlzdC5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIGlmIChsaXN0W2ldID09PSBsaXN0ZW5lciB8fCBsaXN0W2ldLmxpc3RlbmVyID09PSBsaXN0ZW5lcikge1xuICAgICAgICAgICAgb3JpZ2luYWxMaXN0ZW5lciA9IGxpc3RbaV0ubGlzdGVuZXI7XG4gICAgICAgICAgICBwb3NpdGlvbiA9IGk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocG9zaXRpb24gPCAwKVxuICAgICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiA9PT0gMClcbiAgICAgICAgICBsaXN0LnNoaWZ0KCk7XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgIHNwbGljZU9uZShsaXN0LCBwb3NpdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAobGlzdC5sZW5ndGggPT09IDEpXG4gICAgICAgICAgZXZlbnRzW3R5cGVdID0gbGlzdFswXTtcblxuICAgICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyICE9PSB1bmRlZmluZWQpXG4gICAgICAgICAgdGhpcy5lbWl0KCdyZW1vdmVMaXN0ZW5lcicsIHR5cGUsIG9yaWdpbmFsTGlzdGVuZXIgfHwgbGlzdGVuZXIpO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLm9mZiA9IEV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlTGlzdGVuZXI7XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUucmVtb3ZlQWxsTGlzdGVuZXJzID1cbiAgICBmdW5jdGlvbiByZW1vdmVBbGxMaXN0ZW5lcnModHlwZSkge1xuICAgICAgdmFyIGxpc3RlbmVycywgZXZlbnRzLCBpO1xuXG4gICAgICBldmVudHMgPSB0aGlzLl9ldmVudHM7XG4gICAgICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgICAgIHJldHVybiB0aGlzO1xuXG4gICAgICAvLyBub3QgbGlzdGVuaW5nIGZvciByZW1vdmVMaXN0ZW5lciwgbm8gbmVlZCB0byBlbWl0XG4gICAgICBpZiAoZXZlbnRzLnJlbW92ZUxpc3RlbmVyID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGFyZ3VtZW50cy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICB0aGlzLl9ldmVudHMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuICAgICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgfSBlbHNlIGlmIChldmVudHNbdHlwZV0gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIGlmICgtLXRoaXMuX2V2ZW50c0NvdW50ID09PSAwKVxuICAgICAgICAgICAgdGhpcy5fZXZlbnRzID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiAgICAgICAgICBlbHNlXG4gICAgICAgICAgICBkZWxldGUgZXZlbnRzW3R5cGVdO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgfVxuXG4gICAgICAvLyBlbWl0IHJlbW92ZUxpc3RlbmVyIGZvciBhbGwgbGlzdGVuZXJzIG9uIGFsbCBldmVudHNcbiAgICAgIGlmIChhcmd1bWVudHMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZXZlbnRzKTtcbiAgICAgICAgdmFyIGtleTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGtleXMubGVuZ3RoOyArK2kpIHtcbiAgICAgICAgICBrZXkgPSBrZXlzW2ldO1xuICAgICAgICAgIGlmIChrZXkgPT09ICdyZW1vdmVMaXN0ZW5lcicpIGNvbnRpbnVlO1xuICAgICAgICAgIHRoaXMucmVtb3ZlQWxsTGlzdGVuZXJzKGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVBbGxMaXN0ZW5lcnMoJ3JlbW92ZUxpc3RlbmVyJyk7XG4gICAgICAgIHRoaXMuX2V2ZW50cyA9IE9iamVjdC5jcmVhdGUobnVsbCk7XG4gICAgICAgIHRoaXMuX2V2ZW50c0NvdW50ID0gMDtcbiAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICB9XG5cbiAgICAgIGxpc3RlbmVycyA9IGV2ZW50c1t0eXBlXTtcblxuICAgICAgaWYgKHR5cGVvZiBsaXN0ZW5lcnMgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVMaXN0ZW5lcih0eXBlLCBsaXN0ZW5lcnMpO1xuICAgICAgfSBlbHNlIGlmIChsaXN0ZW5lcnMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAvLyBMSUZPIG9yZGVyXG4gICAgICAgIGZvciAoaSA9IGxpc3RlbmVycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgIHRoaXMucmVtb3ZlTGlzdGVuZXIodHlwZSwgbGlzdGVuZXJzW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICByZXR1cm4gdGhpcztcbiAgICB9O1xuXG5mdW5jdGlvbiBfbGlzdGVuZXJzKHRhcmdldCwgdHlwZSwgdW53cmFwKSB7XG4gIHZhciBldmVudHMgPSB0YXJnZXQuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzID09PSB1bmRlZmluZWQpXG4gICAgcmV0dXJuIFtdO1xuXG4gIHZhciBldmxpc3RlbmVyID0gZXZlbnRzW3R5cGVdO1xuICBpZiAoZXZsaXN0ZW5lciA9PT0gdW5kZWZpbmVkKVxuICAgIHJldHVybiBbXTtcblxuICBpZiAodHlwZW9mIGV2bGlzdGVuZXIgPT09ICdmdW5jdGlvbicpXG4gICAgcmV0dXJuIHVud3JhcCA/IFtldmxpc3RlbmVyLmxpc3RlbmVyIHx8IGV2bGlzdGVuZXJdIDogW2V2bGlzdGVuZXJdO1xuXG4gIHJldHVybiB1bndyYXAgP1xuICAgIHVud3JhcExpc3RlbmVycyhldmxpc3RlbmVyKSA6IGFycmF5Q2xvbmUoZXZsaXN0ZW5lciwgZXZsaXN0ZW5lci5sZW5ndGgpO1xufVxuXG5FdmVudEVtaXR0ZXIucHJvdG90eXBlLmxpc3RlbmVycyA9IGZ1bmN0aW9uIGxpc3RlbmVycyh0eXBlKSB7XG4gIHJldHVybiBfbGlzdGVuZXJzKHRoaXMsIHR5cGUsIHRydWUpO1xufTtcblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5yYXdMaXN0ZW5lcnMgPSBmdW5jdGlvbiByYXdMaXN0ZW5lcnModHlwZSkge1xuICByZXR1cm4gX2xpc3RlbmVycyh0aGlzLCB0eXBlLCBmYWxzZSk7XG59O1xuXG5FdmVudEVtaXR0ZXIubGlzdGVuZXJDb3VudCA9IGZ1bmN0aW9uKGVtaXR0ZXIsIHR5cGUpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLmxpc3RlbmVyQ291bnQgPT09ICdmdW5jdGlvbicpIHtcbiAgICByZXR1cm4gZW1pdHRlci5saXN0ZW5lckNvdW50KHR5cGUpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBsaXN0ZW5lckNvdW50LmNhbGwoZW1pdHRlciwgdHlwZSk7XG4gIH1cbn07XG5cbkV2ZW50RW1pdHRlci5wcm90b3R5cGUubGlzdGVuZXJDb3VudCA9IGxpc3RlbmVyQ291bnQ7XG5mdW5jdGlvbiBsaXN0ZW5lckNvdW50KHR5cGUpIHtcbiAgdmFyIGV2ZW50cyA9IHRoaXMuX2V2ZW50cztcblxuICBpZiAoZXZlbnRzICE9PSB1bmRlZmluZWQpIHtcbiAgICB2YXIgZXZsaXN0ZW5lciA9IGV2ZW50c1t0eXBlXTtcblxuICAgIGlmICh0eXBlb2YgZXZsaXN0ZW5lciA9PT0gJ2Z1bmN0aW9uJykge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfSBlbHNlIGlmIChldmxpc3RlbmVyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBldmxpc3RlbmVyLmxlbmd0aDtcbiAgICB9XG4gIH1cblxuICByZXR1cm4gMDtcbn1cblxuRXZlbnRFbWl0dGVyLnByb3RvdHlwZS5ldmVudE5hbWVzID0gZnVuY3Rpb24gZXZlbnROYW1lcygpIHtcbiAgcmV0dXJuIHRoaXMuX2V2ZW50c0NvdW50ID4gMCA/IFJlZmxlY3RPd25LZXlzKHRoaXMuX2V2ZW50cykgOiBbXTtcbn07XG5cbmZ1bmN0aW9uIGFycmF5Q2xvbmUoYXJyLCBuKSB7XG4gIHZhciBjb3B5ID0gbmV3IEFycmF5KG4pO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IG47ICsraSlcbiAgICBjb3B5W2ldID0gYXJyW2ldO1xuICByZXR1cm4gY29weTtcbn1cblxuZnVuY3Rpb24gc3BsaWNlT25lKGxpc3QsIGluZGV4KSB7XG4gIGZvciAoOyBpbmRleCArIDEgPCBsaXN0Lmxlbmd0aDsgaW5kZXgrKylcbiAgICBsaXN0W2luZGV4XSA9IGxpc3RbaW5kZXggKyAxXTtcbiAgbGlzdC5wb3AoKTtcbn1cblxuZnVuY3Rpb24gdW53cmFwTGlzdGVuZXJzKGFycikge1xuICB2YXIgcmV0ID0gbmV3IEFycmF5KGFyci5sZW5ndGgpO1xuICBmb3IgKHZhciBpID0gMDsgaSA8IHJldC5sZW5ndGg7ICsraSkge1xuICAgIHJldFtpXSA9IGFycltpXS5saXN0ZW5lciB8fCBhcnJbaV07XG4gIH1cbiAgcmV0dXJuIHJldDtcbn1cblxuZnVuY3Rpb24gb25jZShlbWl0dGVyLCBuYW1lKSB7XG4gIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgZnVuY3Rpb24gZXJyb3JMaXN0ZW5lcihlcnIpIHtcbiAgICAgIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIobmFtZSwgcmVzb2x2ZXIpO1xuICAgICAgcmVqZWN0KGVycik7XG4gICAgfVxuXG4gICAgZnVuY3Rpb24gcmVzb2x2ZXIoKSB7XG4gICAgICBpZiAodHlwZW9mIGVtaXR0ZXIucmVtb3ZlTGlzdGVuZXIgPT09ICdmdW5jdGlvbicpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVMaXN0ZW5lcignZXJyb3InLCBlcnJvckxpc3RlbmVyKTtcbiAgICAgIH1cbiAgICAgIHJlc29sdmUoW10uc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcbiAgICB9O1xuXG4gICAgZXZlbnRUYXJnZXRBZ25vc3RpY0FkZExpc3RlbmVyKGVtaXR0ZXIsIG5hbWUsIHJlc29sdmVyLCB7IG9uY2U6IHRydWUgfSk7XG4gICAgaWYgKG5hbWUgIT09ICdlcnJvcicpIHtcbiAgICAgIGFkZEVycm9ySGFuZGxlcklmRXZlbnRFbWl0dGVyKGVtaXR0ZXIsIGVycm9yTGlzdGVuZXIsIHsgb25jZTogdHJ1ZSB9KTtcbiAgICB9XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBhZGRFcnJvckhhbmRsZXJJZkV2ZW50RW1pdHRlcihlbWl0dGVyLCBoYW5kbGVyLCBmbGFncykge1xuICBpZiAodHlwZW9mIGVtaXR0ZXIub24gPT09ICdmdW5jdGlvbicpIHtcbiAgICBldmVudFRhcmdldEFnbm9zdGljQWRkTGlzdGVuZXIoZW1pdHRlciwgJ2Vycm9yJywgaGFuZGxlciwgZmxhZ3MpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGV2ZW50VGFyZ2V0QWdub3N0aWNBZGRMaXN0ZW5lcihlbWl0dGVyLCBuYW1lLCBsaXN0ZW5lciwgZmxhZ3MpIHtcbiAgaWYgKHR5cGVvZiBlbWl0dGVyLm9uID09PSAnZnVuY3Rpb24nKSB7XG4gICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgIGVtaXR0ZXIub25jZShuYW1lLCBsaXN0ZW5lcik7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVtaXR0ZXIub24obmFtZSwgbGlzdGVuZXIpO1xuICAgIH1cbiAgfSBlbHNlIGlmICh0eXBlb2YgZW1pdHRlci5hZGRFdmVudExpc3RlbmVyID09PSAnZnVuY3Rpb24nKSB7XG4gICAgLy8gRXZlbnRUYXJnZXQgZG9lcyBub3QgaGF2ZSBgZXJyb3JgIGV2ZW50IHNlbWFudGljcyBsaWtlIE5vZGVcbiAgICAvLyBFdmVudEVtaXR0ZXJzLCB3ZSBkbyBub3QgbGlzdGVuIGZvciBgZXJyb3JgIGV2ZW50cyBoZXJlLlxuICAgIGVtaXR0ZXIuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBmdW5jdGlvbiB3cmFwTGlzdGVuZXIoYXJnKSB7XG4gICAgICAvLyBJRSBkb2VzIG5vdCBoYXZlIGJ1aWx0aW4gYHsgb25jZTogdHJ1ZSB9YCBzdXBwb3J0IHNvIHdlXG4gICAgICAvLyBoYXZlIHRvIGRvIGl0IG1hbnVhbGx5LlxuICAgICAgaWYgKGZsYWdzLm9uY2UpIHtcbiAgICAgICAgZW1pdHRlci5yZW1vdmVFdmVudExpc3RlbmVyKG5hbWUsIHdyYXBMaXN0ZW5lcik7XG4gICAgICB9XG4gICAgICBsaXN0ZW5lcihhcmcpO1xuICAgIH0pO1xuICB9IGVsc2Uge1xuICAgIHRocm93IG5ldyBUeXBlRXJyb3IoJ1RoZSBcImVtaXR0ZXJcIiBhcmd1bWVudCBtdXN0IGJlIG9mIHR5cGUgRXZlbnRFbWl0dGVyLiBSZWNlaXZlZCB0eXBlICcgKyB0eXBlb2YgZW1pdHRlcik7XG4gIH1cbn1cbiIsImZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7IGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikgeyBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHsgdmFyIG8gPSByW3RdOyBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkgeyByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiAhMSB9KSwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmltcG9ydCB7IGxvZyB9IGZyb20gXCIuLi91dGlscy9sb2cuanNcIjtcbnZhciBXZWJTb2NrZXRDbGllbnQgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKCkge1xuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IHVybFxuICAgKi9cbiAgZnVuY3Rpb24gV2ViU29ja2V0Q2xpZW50KHVybCkge1xuICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJTb2NrZXRDbGllbnQpO1xuICAgIHRoaXMuY2xpZW50ID0gbmV3IFdlYlNvY2tldCh1cmwpO1xuICAgIHRoaXMuY2xpZW50Lm9uZXJyb3IgPSBmdW5jdGlvbiAoZXJyb3IpIHtcbiAgICAgIGxvZy5lcnJvcihlcnJvcik7XG4gICAgfTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgKi9cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhXZWJTb2NrZXRDbGllbnQsIFt7XG4gICAga2V5OiBcIm9uT3BlblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBvbk9wZW4oZikge1xuICAgICAgdGhpcy5jbGllbnQub25vcGVuID0gZjtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0geyguLi5hcmdzOiBhbnlbXSkgPT4gdm9pZH0gZlxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcIm9uQ2xvc2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25DbG9zZShmKSB7XG4gICAgICB0aGlzLmNsaWVudC5vbmNsb3NlID0gZjtcbiAgICB9XG5cbiAgICAvLyBjYWxsIGYgd2l0aCB0aGUgbWVzc2FnZSBzdHJpbmcgYXMgdGhlIGZpcnN0IGFyZ3VtZW50XG4gICAgLyoqXG4gICAgICogQHBhcmFtIHsoLi4uYXJnczogYW55W10pID0+IHZvaWR9IGZcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJvbk1lc3NhZ2VcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gb25NZXNzYWdlKGYpIHtcbiAgICAgIHRoaXMuY2xpZW50Lm9ubWVzc2FnZSA9IGZ1bmN0aW9uIChlKSB7XG4gICAgICAgIGYoZS5kYXRhKTtcbiAgICAgIH07XG4gICAgfVxuICB9XSk7XG59KCk7XG5leHBvcnQgeyBXZWJTb2NrZXRDbGllbnQgYXMgZGVmYXVsdCB9OyIsImZ1bmN0aW9uIG93bktleXMoZSwgcikgeyB2YXIgdCA9IE9iamVjdC5rZXlzKGUpOyBpZiAoT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scykgeyB2YXIgbyA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eVN5bWJvbHMoZSk7IHIgJiYgKG8gPSBvLmZpbHRlcihmdW5jdGlvbiAocikgeyByZXR1cm4gT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcihlLCByKS5lbnVtZXJhYmxlOyB9KSksIHQucHVzaC5hcHBseSh0LCBvKTsgfSByZXR1cm4gdDsgfVxuZnVuY3Rpb24gX29iamVjdFNwcmVhZChlKSB7IGZvciAodmFyIHIgPSAxOyByIDwgYXJndW1lbnRzLmxlbmd0aDsgcisrKSB7IHZhciB0ID0gbnVsbCAhPSBhcmd1bWVudHNbcl0gPyBhcmd1bWVudHNbcl0gOiB7fTsgciAlIDIgPyBvd25LZXlzKE9iamVjdCh0KSwgITApLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgX2RlZmluZVByb3BlcnR5KGUsIHIsIHRbcl0pOyB9KSA6IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3JzID8gT2JqZWN0LmRlZmluZVByb3BlcnRpZXMoZSwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnModCkpIDogb3duS2V5cyhPYmplY3QodCkpLmZvckVhY2goZnVuY3Rpb24gKHIpIHsgT2JqZWN0LmRlZmluZVByb3BlcnR5KGUsIHIsIE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodCwgcikpOyB9KTsgfSByZXR1cm4gZTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnR5KGUsIHIsIHQpIHsgcmV0dXJuIChyID0gX3RvUHJvcGVydHlLZXkocikpIGluIGUgPyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgeyB2YWx1ZTogdCwgZW51bWVyYWJsZTogITAsIGNvbmZpZ3VyYWJsZTogITAsIHdyaXRhYmxlOiAhMCB9KSA6IGVbcl0gPSB0LCBlOyB9XG5mdW5jdGlvbiBfdG9Qcm9wZXJ0eUtleSh0KSB7IHZhciBpID0gX3RvUHJpbWl0aXZlKHQsIFwic3RyaW5nXCIpOyByZXR1cm4gXCJzeW1ib2xcIiA9PSBfdHlwZW9mKGkpID8gaSA6IGkgKyBcIlwiOyB9XG5mdW5jdGlvbiBfdG9QcmltaXRpdmUodCwgcikgeyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKHQpIHx8ICF0KSByZXR1cm4gdDsgdmFyIGUgPSB0W1N5bWJvbC50b1ByaW1pdGl2ZV07IGlmICh2b2lkIDAgIT09IGUpIHsgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YoaSkpIHJldHVybiBpOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQEB0b1ByaW1pdGl2ZSBtdXN0IHJldHVybiBhIHByaW1pdGl2ZSB2YWx1ZS5cIik7IH0gcmV0dXJuIChcInN0cmluZ1wiID09PSByID8gU3RyaW5nIDogTnVtYmVyKSh0KTsgfVxuZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuLyogZ2xvYmFsIF9fcmVzb3VyY2VRdWVyeSwgX193ZWJwYWNrX2hhc2hfXyAqL1xuLy8vIDxyZWZlcmVuY2UgdHlwZXM9XCJ3ZWJwYWNrL21vZHVsZVwiIC8+XG5pbXBvcnQgd2VicGFja0hvdExvZyBmcm9tIFwid2VicGFjay9ob3QvbG9nLmpzXCI7XG5pbXBvcnQgaG90RW1pdHRlciBmcm9tIFwid2VicGFjay9ob3QvZW1pdHRlci5qc1wiO1xuaW1wb3J0IHNvY2tldCBmcm9tIFwiLi9zb2NrZXQuanNcIjtcbmltcG9ydCB7IGZvcm1hdFByb2JsZW0sIGNyZWF0ZU92ZXJsYXkgfSBmcm9tIFwiLi9vdmVybGF5LmpzXCI7XG5pbXBvcnQgeyBsb2csIHNldExvZ0xldmVsIH0gZnJvbSBcIi4vdXRpbHMvbG9nLmpzXCI7XG5pbXBvcnQgc2VuZE1lc3NhZ2UgZnJvbSBcIi4vdXRpbHMvc2VuZE1lc3NhZ2UuanNcIjtcbmltcG9ydCB7IGlzUHJvZ3Jlc3NTdXBwb3J0ZWQsIGRlZmluZVByb2dyZXNzRWxlbWVudCB9IGZyb20gXCIuL3Byb2dyZXNzLmpzXCI7XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gT3ZlcmxheU9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IChlcnJvcjogRXJyb3IpID0+IGJvb2xlYW59IFt3YXJuaW5nc11cbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IChlcnJvcjogRXJyb3IpID0+IGJvb2xlYW59IFtlcnJvcnNdXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCAoZXJyb3I6IEVycm9yKSA9PiBib29sZWFufSBbcnVudGltZUVycm9yc11cbiAqIEBwcm9wZXJ0eSB7c3RyaW5nfSBbdHJ1c3RlZFR5cGVzUG9saWN5TmFtZV1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IE9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gaG90XG4gKiBAcHJvcGVydHkge2Jvb2xlYW59IGxpdmVSZWxvYWRcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbn0gcHJvZ3Jlc3NcbiAqIEBwcm9wZXJ0eSB7Ym9vbGVhbiB8IE92ZXJsYXlPcHRpb25zfSBvdmVybGF5XG4gKiBAcHJvcGVydHkge3N0cmluZ30gW2xvZ2dpbmddXG4gKiBAcHJvcGVydHkge251bWJlcn0gW3JlY29ubmVjdF1cbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IFN0YXR1c1xuICogQHByb3BlcnR5IHtib29sZWFufSBpc1VubG9hZGluZ1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGN1cnJlbnRIYXNoXG4gKiBAcHJvcGVydHkge3N0cmluZ30gW3ByZXZpb3VzSGFzaF1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7Ym9vbGVhbiB8IHsgd2FybmluZ3M/OiBib29sZWFuIHwgc3RyaW5nOyBlcnJvcnM/OiBib29sZWFuIHwgc3RyaW5nOyBydW50aW1lRXJyb3JzPzogYm9vbGVhbiB8IHN0cmluZzsgfX0gb3ZlcmxheU9wdGlvbnNcbiAqL1xudmFyIGRlY29kZU92ZXJsYXlPcHRpb25zID0gZnVuY3Rpb24gZGVjb2RlT3ZlcmxheU9wdGlvbnMob3ZlcmxheU9wdGlvbnMpIHtcbiAgaWYgKF90eXBlb2Yob3ZlcmxheU9wdGlvbnMpID09PSBcIm9iamVjdFwiKSB7XG4gICAgW1wid2FybmluZ3NcIiwgXCJlcnJvcnNcIiwgXCJydW50aW1lRXJyb3JzXCJdLmZvckVhY2goZnVuY3Rpb24gKHByb3BlcnR5KSB7XG4gICAgICBpZiAodHlwZW9mIG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICB2YXIgb3ZlcmxheUZpbHRlckZ1bmN0aW9uU3RyaW5nID0gZGVjb2RlVVJJQ29tcG9uZW50KG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSk7XG5cbiAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ldy1mdW5jXG4gICAgICAgIG92ZXJsYXlPcHRpb25zW3Byb3BlcnR5XSA9IG5ldyBGdW5jdGlvbihcIm1lc3NhZ2VcIiwgXCJ2YXIgY2FsbGJhY2sgPSBcIi5jb25jYXQob3ZlcmxheUZpbHRlckZ1bmN0aW9uU3RyaW5nLCBcIlxcbiAgICAgICAgcmV0dXJuIGNhbGxiYWNrKG1lc3NhZ2UpXCIpKTtcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAdHlwZSB7U3RhdHVzfVxuICovXG52YXIgc3RhdHVzID0ge1xuICBpc1VubG9hZGluZzogZmFsc2UsXG4gIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBjYW1lbGNhc2VcbiAgY3VycmVudEhhc2g6IF9fd2VicGFja19oYXNoX19cbn07XG5cbi8qKlxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xudmFyIGdldEN1cnJlbnRTY3JpcHRTb3VyY2UgPSBmdW5jdGlvbiBnZXRDdXJyZW50U2NyaXB0U291cmNlKCkge1xuICAvLyBgZG9jdW1lbnQuY3VycmVudFNjcmlwdGAgaXMgdGhlIG1vc3QgYWNjdXJhdGUgd2F5IHRvIGZpbmQgdGhlIGN1cnJlbnQgc2NyaXB0LFxuICAvLyBidXQgaXMgbm90IHN1cHBvcnRlZCBpbiBhbGwgYnJvd3NlcnMuXG4gIGlmIChkb2N1bWVudC5jdXJyZW50U2NyaXB0KSB7XG4gICAgcmV0dXJuIGRvY3VtZW50LmN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9XG5cbiAgLy8gRmFsbGJhY2sgdG8gZ2V0dGluZyBhbGwgc2NyaXB0cyBydW5uaW5nIGluIHRoZSBkb2N1bWVudC5cbiAgdmFyIHNjcmlwdEVsZW1lbnRzID0gZG9jdW1lbnQuc2NyaXB0cyB8fCBbXTtcbiAgdmFyIHNjcmlwdEVsZW1lbnRzV2l0aFNyYyA9IEFycmF5LnByb3RvdHlwZS5maWx0ZXIuY2FsbChzY3JpcHRFbGVtZW50cywgZnVuY3Rpb24gKGVsZW1lbnQpIHtcbiAgICByZXR1cm4gZWxlbWVudC5nZXRBdHRyaWJ1dGUoXCJzcmNcIik7XG4gIH0pO1xuICBpZiAoc2NyaXB0RWxlbWVudHNXaXRoU3JjLmxlbmd0aCA+IDApIHtcbiAgICB2YXIgY3VycmVudFNjcmlwdCA9IHNjcmlwdEVsZW1lbnRzV2l0aFNyY1tzY3JpcHRFbGVtZW50c1dpdGhTcmMubGVuZ3RoIC0gMV07XG4gICAgcmV0dXJuIGN1cnJlbnRTY3JpcHQuZ2V0QXR0cmlidXRlKFwic3JjXCIpO1xuICB9XG5cbiAgLy8gRmFpbCBhcyB0aGVyZSB3YXMgbm8gc2NyaXB0IHRvIHVzZS5cbiAgdGhyb3cgbmV3IEVycm9yKFwiW3dlYnBhY2stZGV2LXNlcnZlcl0gRmFpbGVkIHRvIGdldCBjdXJyZW50IHNjcmlwdCBzb3VyY2UuXCIpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0ge3N0cmluZ30gcmVzb3VyY2VRdWVyeVxuICogQHJldHVybnMge3sgW2tleTogc3RyaW5nXTogc3RyaW5nIHwgYm9vbGVhbiB9fVxuICovXG52YXIgcGFyc2VVUkwgPSBmdW5jdGlvbiBwYXJzZVVSTChyZXNvdXJjZVF1ZXJ5KSB7XG4gIC8qKiBAdHlwZSB7eyBba2V5OiBzdHJpbmddOiBzdHJpbmcgfX0gKi9cbiAgdmFyIHJlc3VsdCA9IHt9O1xuICBpZiAodHlwZW9mIHJlc291cmNlUXVlcnkgPT09IFwic3RyaW5nXCIgJiYgcmVzb3VyY2VRdWVyeSAhPT0gXCJcIikge1xuICAgIHZhciBzZWFyY2hQYXJhbXMgPSByZXNvdXJjZVF1ZXJ5LnNsaWNlKDEpLnNwbGl0KFwiJlwiKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNlYXJjaFBhcmFtcy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIHBhaXIgPSBzZWFyY2hQYXJhbXNbaV0uc3BsaXQoXCI9XCIpO1xuICAgICAgcmVzdWx0W3BhaXJbMF1dID0gZGVjb2RlVVJJQ29tcG9uZW50KHBhaXJbMV0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICAvLyBFbHNlLCBnZXQgdGhlIHVybCBmcm9tIHRoZSA8c2NyaXB0PiB0aGlzIGZpbGUgd2FzIGNhbGxlZCB3aXRoLlxuICAgIHZhciBzY3JpcHRTb3VyY2UgPSBnZXRDdXJyZW50U2NyaXB0U291cmNlKCk7XG4gICAgdmFyIHNjcmlwdFNvdXJjZVVSTDtcbiAgICB0cnkge1xuICAgICAgLy8gVGhlIHBsYWNlaG9sZGVyIGBiYXNlVVJMYCB3aXRoIGB3aW5kb3cubG9jYXRpb24uaHJlZmAsXG4gICAgICAvLyBpcyB0byBhbGxvdyBwYXJzaW5nIG9mIHBhdGgtcmVsYXRpdmUgb3IgcHJvdG9jb2wtcmVsYXRpdmUgVVJMcyxcbiAgICAgIC8vIGFuZCB3aWxsIGhhdmUgbm8gZWZmZWN0IGlmIGBzY3JpcHRTb3VyY2VgIGlzIGEgZnVsbHkgdmFsaWQgVVJMLlxuICAgICAgc2NyaXB0U291cmNlVVJMID0gbmV3IFVSTChzY3JpcHRTb3VyY2UsIHNlbGYubG9jYXRpb24uaHJlZik7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIC8vIFVSTCBwYXJzaW5nIGZhaWxlZCwgZG8gbm90aGluZy5cbiAgICAgIC8vIFdlIHdpbGwgc3RpbGwgcHJvY2VlZCB0byBzZWUgaWYgd2UgY2FuIHJlY292ZXIgdXNpbmcgYHJlc291cmNlUXVlcnlgXG4gICAgfVxuICAgIGlmIChzY3JpcHRTb3VyY2VVUkwpIHtcbiAgICAgIHJlc3VsdCA9IHNjcmlwdFNvdXJjZVVSTDtcbiAgICAgIHJlc3VsdC5mcm9tQ3VycmVudFNjcmlwdCA9IHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59O1xudmFyIHBhcnNlZFJlc291cmNlUXVlcnkgPSBwYXJzZVVSTChfX3Jlc291cmNlUXVlcnkpO1xudmFyIGVuYWJsZWRGZWF0dXJlcyA9IHtcbiAgXCJIb3QgTW9kdWxlIFJlcGxhY2VtZW50XCI6IGZhbHNlLFxuICBcIkxpdmUgUmVsb2FkaW5nXCI6IGZhbHNlLFxuICBQcm9ncmVzczogZmFsc2UsXG4gIE92ZXJsYXk6IGZhbHNlXG59O1xuXG4vKiogQHR5cGUge09wdGlvbnN9ICovXG52YXIgb3B0aW9ucyA9IHtcbiAgaG90OiBmYWxzZSxcbiAgbGl2ZVJlbG9hZDogZmFsc2UsXG4gIHByb2dyZXNzOiBmYWxzZSxcbiAgb3ZlcmxheTogZmFsc2Vcbn07XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5ob3QgPT09IFwidHJ1ZVwiKSB7XG4gIG9wdGlvbnMuaG90ID0gdHJ1ZTtcbiAgZW5hYmxlZEZlYXR1cmVzW1wiSG90IE1vZHVsZSBSZXBsYWNlbWVudFwiXSA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeVtcImxpdmUtcmVsb2FkXCJdID09PSBcInRydWVcIikge1xuICBvcHRpb25zLmxpdmVSZWxvYWQgPSB0cnVlO1xuICBlbmFibGVkRmVhdHVyZXNbXCJMaXZlIFJlbG9hZGluZ1wiXSA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5wcm9ncmVzcyA9PT0gXCJ0cnVlXCIpIHtcbiAgb3B0aW9ucy5wcm9ncmVzcyA9IHRydWU7XG4gIGVuYWJsZWRGZWF0dXJlcy5Qcm9ncmVzcyA9IHRydWU7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5vdmVybGF5KSB7XG4gIHRyeSB7XG4gICAgb3B0aW9ucy5vdmVybGF5ID0gSlNPTi5wYXJzZShwYXJzZWRSZXNvdXJjZVF1ZXJ5Lm92ZXJsYXkpO1xuICB9IGNhdGNoIChlKSB7XG4gICAgbG9nLmVycm9yKFwiRXJyb3IgcGFyc2luZyBvdmVybGF5IG9wdGlvbnMgZnJvbSByZXNvdXJjZSBxdWVyeTpcIiwgZSk7XG4gIH1cblxuICAvLyBGaWxsIGluIGRlZmF1bHQgXCJ0cnVlXCIgcGFyYW1zIGZvciBwYXJ0aWFsbHktc3BlY2lmaWVkIG9iamVjdHMuXG4gIGlmIChfdHlwZW9mKG9wdGlvbnMub3ZlcmxheSkgPT09IFwib2JqZWN0XCIpIHtcbiAgICBvcHRpb25zLm92ZXJsYXkgPSBfb2JqZWN0U3ByZWFkKHtcbiAgICAgIGVycm9yczogdHJ1ZSxcbiAgICAgIHdhcm5pbmdzOiB0cnVlLFxuICAgICAgcnVudGltZUVycm9yczogdHJ1ZVxuICAgIH0sIG9wdGlvbnMub3ZlcmxheSk7XG4gICAgZGVjb2RlT3ZlcmxheU9wdGlvbnMob3B0aW9ucy5vdmVybGF5KTtcbiAgfVxuICBlbmFibGVkRmVhdHVyZXMuT3ZlcmxheSA9IG9wdGlvbnMub3ZlcmxheSAhPT0gZmFsc2U7XG59XG5pZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5sb2dnaW5nKSB7XG4gIG9wdGlvbnMubG9nZ2luZyA9IHBhcnNlZFJlc291cmNlUXVlcnkubG9nZ2luZztcbn1cbmlmICh0eXBlb2YgcGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgb3B0aW9ucy5yZWNvbm5lY3QgPSBOdW1iZXIocGFyc2VkUmVzb3VyY2VRdWVyeS5yZWNvbm5lY3QpO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBsZXZlbFxuICovXG52YXIgc2V0QWxsTG9nTGV2ZWwgPSBmdW5jdGlvbiBzZXRBbGxMb2dMZXZlbChsZXZlbCkge1xuICAvLyBUaGlzIGlzIG5lZWRlZCBiZWNhdXNlIHRoZSBITVIgbG9nZ2VyIG9wZXJhdGUgc2VwYXJhdGVseSBmcm9tIGRldiBzZXJ2ZXIgbG9nZ2VyXG4gIHdlYnBhY2tIb3RMb2cuc2V0TG9nTGV2ZWwobGV2ZWwgPT09IFwidmVyYm9zZVwiIHx8IGxldmVsID09PSBcImxvZ1wiID8gXCJpbmZvXCIgOiBsZXZlbCk7XG4gIHNldExvZ0xldmVsKGxldmVsKTtcbn07XG5pZiAob3B0aW9ucy5sb2dnaW5nKSB7XG4gIHNldEFsbExvZ0xldmVsKG9wdGlvbnMubG9nZ2luZyk7XG59XG52YXIgbG9nRW5hYmxlZEZlYXR1cmVzID0gZnVuY3Rpb24gbG9nRW5hYmxlZEZlYXR1cmVzKGZlYXR1cmVzKSB7XG4gIHZhciBsaXN0RW5hYmxlZEZlYXR1cmVzID0gT2JqZWN0LmtleXMoZmVhdHVyZXMpO1xuICBpZiAoIWZlYXR1cmVzIHx8IGxpc3RFbmFibGVkRmVhdHVyZXMubGVuZ3RoID09PSAwKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBsb2dTdHJpbmcgPSBcIlNlcnZlciBzdGFydGVkOlwiO1xuXG4gIC8vIFNlcnZlciBzdGFydGVkOiBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGVuYWJsZWQsIExpdmUgUmVsb2FkaW5nIGVuYWJsZWQsIE92ZXJsYXkgZGlzYWJsZWQuXG4gIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdEVuYWJsZWRGZWF0dXJlcy5sZW5ndGg7IGkrKykge1xuICAgIHZhciBrZXkgPSBsaXN0RW5hYmxlZEZlYXR1cmVzW2ldO1xuICAgIGxvZ1N0cmluZyArPSBcIiBcIi5jb25jYXQoa2V5LCBcIiBcIikuY29uY2F0KGZlYXR1cmVzW2tleV0gPyBcImVuYWJsZWRcIiA6IFwiZGlzYWJsZWRcIiwgXCIsXCIpO1xuICB9XG4gIC8vIHJlcGxhY2UgbGFzdCBjb21tYSB3aXRoIGEgcGVyaW9kXG4gIGxvZ1N0cmluZyA9IGxvZ1N0cmluZy5zbGljZSgwLCAtMSkuY29uY2F0KFwiLlwiKTtcbiAgbG9nLmluZm8obG9nU3RyaW5nKTtcbn07XG5sb2dFbmFibGVkRmVhdHVyZXMoZW5hYmxlZEZlYXR1cmVzKTtcbnNlbGYuYWRkRXZlbnRMaXN0ZW5lcihcImJlZm9yZXVubG9hZFwiLCBmdW5jdGlvbiAoKSB7XG4gIHN0YXR1cy5pc1VubG9hZGluZyA9IHRydWU7XG59KTtcbnZhciBvdmVybGF5ID0gdHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIiA/IGNyZWF0ZU92ZXJsYXkoX3R5cGVvZihvcHRpb25zLm92ZXJsYXkpID09PSBcIm9iamVjdFwiID8ge1xuICB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lOiBvcHRpb25zLm92ZXJsYXkudHJ1c3RlZFR5cGVzUG9saWN5TmFtZSxcbiAgY2F0Y2hSdW50aW1lRXJyb3I6IG9wdGlvbnMub3ZlcmxheS5ydW50aW1lRXJyb3JzXG59IDoge1xuICB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lOiBmYWxzZSxcbiAgY2F0Y2hSdW50aW1lRXJyb3I6IG9wdGlvbnMub3ZlcmxheVxufSkgOiB7XG4gIHNlbmQ6IGZ1bmN0aW9uIHNlbmQoKSB7fVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqIEBwYXJhbSB7U3RhdHVzfSBjdXJyZW50U3RhdHVzXG4gKi9cbnZhciByZWxvYWRBcHAgPSBmdW5jdGlvbiByZWxvYWRBcHAoX3JlZiwgY3VycmVudFN0YXR1cykge1xuICB2YXIgaG90ID0gX3JlZi5ob3QsXG4gICAgbGl2ZVJlbG9hZCA9IF9yZWYubGl2ZVJlbG9hZDtcbiAgaWYgKGN1cnJlbnRTdGF0dXMuaXNVbmxvYWRpbmcpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGN1cnJlbnRIYXNoID0gY3VycmVudFN0YXR1cy5jdXJyZW50SGFzaCxcbiAgICBwcmV2aW91c0hhc2ggPSBjdXJyZW50U3RhdHVzLnByZXZpb3VzSGFzaDtcbiAgdmFyIGlzSW5pdGlhbCA9IGN1cnJlbnRIYXNoLmluZGV4T2YoLyoqIEB0eXBlIHtzdHJpbmd9ICovcHJldmlvdXNIYXNoKSA+PSAwO1xuICBpZiAoaXNJbml0aWFsKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7V2luZG93fSByb290V2luZG93XG4gICAqIEBwYXJhbSB7bnVtYmVyfSBpbnRlcnZhbElkXG4gICAqL1xuICBmdW5jdGlvbiBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKSB7XG4gICAgY2xlYXJJbnRlcnZhbChpbnRlcnZhbElkKTtcbiAgICBsb2cuaW5mbyhcIkFwcCB1cGRhdGVkLiBSZWxvYWRpbmcuLi5cIik7XG4gICAgcm9vdFdpbmRvdy5sb2NhdGlvbi5yZWxvYWQoKTtcbiAgfVxuICB2YXIgc2VhcmNoID0gc2VsZi5sb2NhdGlvbi5zZWFyY2gudG9Mb3dlckNhc2UoKTtcbiAgdmFyIGFsbG93VG9Ib3QgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1ob3Q9ZmFsc2VcIikgPT09IC0xO1xuICB2YXIgYWxsb3dUb0xpdmVSZWxvYWQgPSBzZWFyY2guaW5kZXhPZihcIndlYnBhY2stZGV2LXNlcnZlci1saXZlLXJlbG9hZD1mYWxzZVwiKSA9PT0gLTE7XG4gIGlmIChob3QgJiYgYWxsb3dUb0hvdCkge1xuICAgIGxvZy5pbmZvKFwiQXBwIGhvdCB1cGRhdGUuLi5cIik7XG4gICAgaG90RW1pdHRlci5lbWl0KFwid2VicGFja0hvdFVwZGF0ZVwiLCBjdXJyZW50U3RhdHVzLmN1cnJlbnRIYXNoKTtcbiAgICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgc2VsZi53aW5kb3cpIHtcbiAgICAgIC8vIGJyb2FkY2FzdCB1cGRhdGUgdG8gd2luZG93XG4gICAgICBzZWxmLnBvc3RNZXNzYWdlKFwid2VicGFja0hvdFVwZGF0ZVwiLmNvbmNhdChjdXJyZW50U3RhdHVzLmN1cnJlbnRIYXNoKSwgXCIqXCIpO1xuICAgIH1cbiAgfVxuICAvLyBhbGxvdyByZWZyZXNoaW5nIHRoZSBwYWdlIG9ubHkgaWYgbGl2ZVJlbG9hZCBpc24ndCBkaXNhYmxlZFxuICBlbHNlIGlmIChsaXZlUmVsb2FkICYmIGFsbG93VG9MaXZlUmVsb2FkKSB7XG4gICAgdmFyIHJvb3RXaW5kb3cgPSBzZWxmO1xuXG4gICAgLy8gdXNlIHBhcmVudCB3aW5kb3cgZm9yIHJlbG9hZCAoaW4gY2FzZSB3ZSdyZSBpbiBhbiBpZnJhbWUgd2l0aCBubyB2YWxpZCBzcmMpXG4gICAgdmFyIGludGVydmFsSWQgPSBzZWxmLnNldEludGVydmFsKGZ1bmN0aW9uICgpIHtcbiAgICAgIGlmIChyb290V2luZG93LmxvY2F0aW9uLnByb3RvY29sICE9PSBcImFib3V0OlwiKSB7XG4gICAgICAgIC8vIHJlbG9hZCBpbW1lZGlhdGVseSBpZiBwcm90b2NvbCBpcyB2YWxpZFxuICAgICAgICBhcHBseVJlbG9hZChyb290V2luZG93LCBpbnRlcnZhbElkKTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJvb3RXaW5kb3cgPSByb290V2luZG93LnBhcmVudDtcbiAgICAgICAgaWYgKHJvb3RXaW5kb3cucGFyZW50ID09PSByb290V2luZG93KSB7XG4gICAgICAgICAgLy8gaWYgcGFyZW50IGVxdWFscyBjdXJyZW50IHdpbmRvdyB3ZSd2ZSByZWFjaGVkIHRoZSByb290IHdoaWNoIHdvdWxkIGNvbnRpbnVlIGZvcmV2ZXIsIHNvIHRyaWdnZXIgYSByZWxvYWQgYW55d2F5c1xuICAgICAgICAgIGFwcGx5UmVsb2FkKHJvb3RXaW5kb3csIGludGVydmFsSWQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSk7XG4gIH1cbn07XG52YXIgYW5zaVJlZ2V4ID0gbmV3IFJlZ0V4cChbXCJbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT9cXFxcdTAwMDcpXCIsIFwiKD86KD86XFxcXGR7MSw0fSg/OjtcXFxcZHswLDR9KSopP1tcXFxcZEEtUFItVFpjZi1ucS11eT0+PH5dKSlcIl0uam9pbihcInxcIiksIFwiZ1wiKTtcblxuLyoqXG4gKlxuICogU3RyaXAgW0FOU0kgZXNjYXBlIGNvZGVzXShodHRwczovL2VuLndpa2lwZWRpYS5vcmcvd2lraS9BTlNJX2VzY2FwZV9jb2RlKSBmcm9tIGEgc3RyaW5nLlxuICogQWRhcHRlZCBmcm9tIGNvZGUgb3JpZ2luYWxseSByZWxlYXNlZCBieSBTaW5kcmUgU29yaHVzXG4gKiBMaWNlbnNlZCB0aGUgTUlUIExpY2Vuc2VcbiAqXG4gKiBAcGFyYW0ge3N0cmluZ30gc3RyaW5nXG4gKiBAcmV0dXJuIHtzdHJpbmd9XG4gKi9cbnZhciBzdHJpcEFuc2kgPSBmdW5jdGlvbiBzdHJpcEFuc2koc3RyaW5nKSB7XG4gIGlmICh0eXBlb2Ygc3RyaW5nICE9PSBcInN0cmluZ1wiKSB7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkV4cGVjdGVkIGEgYHN0cmluZ2AsIGdvdCBgXCIuY29uY2F0KF90eXBlb2Yoc3RyaW5nKSwgXCJgXCIpKTtcbiAgfVxuICByZXR1cm4gc3RyaW5nLnJlcGxhY2UoYW5zaVJlZ2V4LCBcIlwiKTtcbn07XG52YXIgb25Tb2NrZXRNZXNzYWdlID0ge1xuICBob3Q6IGZ1bmN0aW9uIGhvdCgpIHtcbiAgICBpZiAocGFyc2VkUmVzb3VyY2VRdWVyeS5ob3QgPT09IFwiZmFsc2VcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmhvdCA9IHRydWU7XG4gIH0sXG4gIGxpdmVSZWxvYWQ6IGZ1bmN0aW9uIGxpdmVSZWxvYWQoKSB7XG4gICAgaWYgKHBhcnNlZFJlc291cmNlUXVlcnlbXCJsaXZlLXJlbG9hZFwiXSA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMubGl2ZVJlbG9hZCA9IHRydWU7XG4gIH0sXG4gIGludmFsaWQ6IGZ1bmN0aW9uIGludmFsaWQoKSB7XG4gICAgbG9nLmluZm8oXCJBcHAgdXBkYXRlZC4gUmVjb21waWxpbmcuLi5cIik7XG5cbiAgICAvLyBGaXhlcyAjMTA0Mi4gb3ZlcmxheSBkb2Vzbid0IGNsZWFyIGlmIGVycm9ycyBhcmUgZml4ZWQgYnV0IHdhcm5pbmdzIHJlbWFpbi5cbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiSW52YWxpZFwiKTtcbiAgfSxcbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBoYXNoXG4gICAqL1xuICBoYXNoOiBmdW5jdGlvbiBoYXNoKF9oYXNoKSB7XG4gICAgc3RhdHVzLnByZXZpb3VzSGFzaCA9IHN0YXR1cy5jdXJyZW50SGFzaDtcbiAgICBzdGF0dXMuY3VycmVudEhhc2ggPSBfaGFzaDtcbiAgfSxcbiAgbG9nZ2luZzogc2V0QWxsTG9nTGV2ZWwsXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBvdmVybGF5OiBmdW5jdGlvbiBvdmVybGF5KHZhbHVlKSB7XG4gICAgaWYgKHR5cGVvZiBkb2N1bWVudCA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLm92ZXJsYXkgPSB2YWx1ZTtcbiAgICBkZWNvZGVPdmVybGF5T3B0aW9ucyhvcHRpb25zLm92ZXJsYXkpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAqL1xuICByZWNvbm5lY3Q6IGZ1bmN0aW9uIHJlY29ubmVjdCh2YWx1ZSkge1xuICAgIGlmIChwYXJzZWRSZXNvdXJjZVF1ZXJ5LnJlY29ubmVjdCA9PT0gXCJmYWxzZVwiKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMucmVjb25uZWN0ID0gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge2Jvb2xlYW59IHZhbHVlXG4gICAqL1xuICBwcm9ncmVzczogZnVuY3Rpb24gcHJvZ3Jlc3ModmFsdWUpIHtcbiAgICBvcHRpb25zLnByb2dyZXNzID0gdmFsdWU7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge3sgcGx1Z2luTmFtZT86IHN0cmluZywgcGVyY2VudDogbnVtYmVyLCBtc2c6IHN0cmluZyB9fSBkYXRhXG4gICAqL1xuICBcInByb2dyZXNzLXVwZGF0ZVwiOiBmdW5jdGlvbiBwcm9ncmVzc1VwZGF0ZShkYXRhKSB7XG4gICAgaWYgKG9wdGlvbnMucHJvZ3Jlc3MpIHtcbiAgICAgIGxvZy5pbmZvKFwiXCIuY29uY2F0KGRhdGEucGx1Z2luTmFtZSA/IFwiW1wiLmNvbmNhdChkYXRhLnBsdWdpbk5hbWUsIFwiXSBcIikgOiBcIlwiKS5jb25jYXQoZGF0YS5wZXJjZW50LCBcIiUgLSBcIikuY29uY2F0KGRhdGEubXNnLCBcIi5cIikpO1xuICAgIH1cbiAgICBpZiAoaXNQcm9ncmVzc1N1cHBvcnRlZCgpKSB7XG4gICAgICBpZiAodHlwZW9mIG9wdGlvbnMucHJvZ3Jlc3MgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgdmFyIHByb2dyZXNzID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIndkcy1wcm9ncmVzc1wiKTtcbiAgICAgICAgaWYgKCFwcm9ncmVzcykge1xuICAgICAgICAgIGRlZmluZVByb2dyZXNzRWxlbWVudCgpO1xuICAgICAgICAgIHByb2dyZXNzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcIndkcy1wcm9ncmVzc1wiKTtcbiAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKHByb2dyZXNzKTtcbiAgICAgICAgfVxuICAgICAgICBwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoXCJwcm9ncmVzc1wiLCBkYXRhLnBlcmNlbnQpO1xuICAgICAgICBwcm9ncmVzcy5zZXRBdHRyaWJ1dGUoXCJ0eXBlXCIsIG9wdGlvbnMucHJvZ3Jlc3MpO1xuICAgICAgfVxuICAgIH1cbiAgICBzZW5kTWVzc2FnZShcIlByb2dyZXNzXCIsIGRhdGEpO1xuICB9LFxuICBcInN0aWxsLW9rXCI6IGZ1bmN0aW9uIHN0aWxsT2soKSB7XG4gICAgbG9nLmluZm8oXCJOb3RoaW5nIGNoYW5nZWQuXCIpO1xuICAgIGlmIChvcHRpb25zLm92ZXJsYXkpIHtcbiAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgIHR5cGU6IFwiRElTTUlTU1wiXG4gICAgICB9KTtcbiAgICB9XG4gICAgc2VuZE1lc3NhZ2UoXCJTdGlsbE9rXCIpO1xuICB9LFxuICBvazogZnVuY3Rpb24gb2soKSB7XG4gICAgc2VuZE1lc3NhZ2UoXCJPa1wiKTtcbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHJlbG9hZEFwcChvcHRpb25zLCBzdGF0dXMpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtzdHJpbmd9IGZpbGVcbiAgICovXG4gIFwic3RhdGljLWNoYW5nZWRcIjogZnVuY3Rpb24gc3RhdGljQ2hhbmdlZChmaWxlKSB7XG4gICAgbG9nLmluZm8oXCJcIi5jb25jYXQoZmlsZSA/IFwiXFxcIlwiLmNvbmNhdChmaWxlLCBcIlxcXCJcIikgOiBcIkNvbnRlbnRcIiwgXCIgZnJvbSBzdGF0aWMgZGlyZWN0b3J5IHdhcyBjaGFuZ2VkLiBSZWxvYWRpbmcuLi5cIikpO1xuICAgIHNlbGYubG9jYXRpb24ucmVsb2FkKCk7XG4gIH0sXG4gIC8qKlxuICAgKiBAcGFyYW0ge0Vycm9yW119IHdhcm5pbmdzXG4gICAqIEBwYXJhbSB7YW55fSBwYXJhbXNcbiAgICovXG4gIHdhcm5pbmdzOiBmdW5jdGlvbiB3YXJuaW5ncyhfd2FybmluZ3MsIHBhcmFtcykge1xuICAgIGxvZy53YXJuKFwiV2FybmluZ3Mgd2hpbGUgY29tcGlsaW5nLlwiKTtcbiAgICB2YXIgcHJpbnRhYmxlV2FybmluZ3MgPSBfd2FybmluZ3MubWFwKGZ1bmN0aW9uIChlcnJvcikge1xuICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtID0gZm9ybWF0UHJvYmxlbShcIndhcm5pbmdcIiwgZXJyb3IpLFxuICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgIGJvZHkgPSBfZm9ybWF0UHJvYmxlbS5ib2R5O1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2UoXCJXYXJuaW5nc1wiLCBwcmludGFibGVXYXJuaW5ncyk7XG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBwcmludGFibGVXYXJuaW5ncy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLndhcm4ocHJpbnRhYmxlV2FybmluZ3NbaV0pO1xuICAgIH1cbiAgICB2YXIgb3ZlcmxheVdhcm5pbmdzU2V0dGluZyA9IHR5cGVvZiBvcHRpb25zLm92ZXJsYXkgPT09IFwiYm9vbGVhblwiID8gb3B0aW9ucy5vdmVybGF5IDogb3B0aW9ucy5vdmVybGF5ICYmIG9wdGlvbnMub3ZlcmxheS53YXJuaW5ncztcbiAgICBpZiAob3ZlcmxheVdhcm5pbmdzU2V0dGluZykge1xuICAgICAgdmFyIHdhcm5pbmdzVG9EaXNwbGF5ID0gdHlwZW9mIG92ZXJsYXlXYXJuaW5nc1NldHRpbmcgPT09IFwiZnVuY3Rpb25cIiA/IF93YXJuaW5ncy5maWx0ZXIob3ZlcmxheVdhcm5pbmdzU2V0dGluZykgOiBfd2FybmluZ3M7XG4gICAgICBpZiAod2FybmluZ3NUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJCVUlMRF9FUlJPUlwiLFxuICAgICAgICAgIGxldmVsOiBcIndhcm5pbmdcIixcbiAgICAgICAgICBtZXNzYWdlczogX3dhcm5pbmdzXG4gICAgICAgIH0pO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAocGFyYW1zICYmIHBhcmFtcy5wcmV2ZW50UmVsb2FkaW5nKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbG9hZEFwcChvcHRpb25zLCBzdGF0dXMpO1xuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcltdfSBlcnJvcnNcbiAgICovXG4gIGVycm9yczogZnVuY3Rpb24gZXJyb3JzKF9lcnJvcnMpIHtcbiAgICBsb2cuZXJyb3IoXCJFcnJvcnMgd2hpbGUgY29tcGlsaW5nLiBSZWxvYWQgcHJldmVudGVkLlwiKTtcbiAgICB2YXIgcHJpbnRhYmxlRXJyb3JzID0gX2Vycm9ycy5tYXAoZnVuY3Rpb24gKGVycm9yKSB7XG4gICAgICB2YXIgX2Zvcm1hdFByb2JsZW0yID0gZm9ybWF0UHJvYmxlbShcImVycm9yXCIsIGVycm9yKSxcbiAgICAgICAgaGVhZGVyID0gX2Zvcm1hdFByb2JsZW0yLmhlYWRlcixcbiAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtMi5ib2R5O1xuICAgICAgcmV0dXJuIFwiXCIuY29uY2F0KGhlYWRlciwgXCJcXG5cIikuY29uY2F0KHN0cmlwQW5zaShib2R5KSk7XG4gICAgfSk7XG4gICAgc2VuZE1lc3NhZ2UoXCJFcnJvcnNcIiwgcHJpbnRhYmxlRXJyb3JzKTtcbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IHByaW50YWJsZUVycm9ycy5sZW5ndGg7IGkrKykge1xuICAgICAgbG9nLmVycm9yKHByaW50YWJsZUVycm9yc1tpXSk7XG4gICAgfVxuICAgIHZhciBvdmVybGF5RXJyb3JzU2V0dGluZ3MgPSB0eXBlb2Ygb3B0aW9ucy5vdmVybGF5ID09PSBcImJvb2xlYW5cIiA/IG9wdGlvbnMub3ZlcmxheSA6IG9wdGlvbnMub3ZlcmxheSAmJiBvcHRpb25zLm92ZXJsYXkuZXJyb3JzO1xuICAgIGlmIChvdmVybGF5RXJyb3JzU2V0dGluZ3MpIHtcbiAgICAgIHZhciBlcnJvcnNUb0Rpc3BsYXkgPSB0eXBlb2Ygb3ZlcmxheUVycm9yc1NldHRpbmdzID09PSBcImZ1bmN0aW9uXCIgPyBfZXJyb3JzLmZpbHRlcihvdmVybGF5RXJyb3JzU2V0dGluZ3MpIDogX2Vycm9ycztcbiAgICAgIGlmIChlcnJvcnNUb0Rpc3BsYXkubGVuZ3RoKSB7XG4gICAgICAgIG92ZXJsYXkuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJCVUlMRF9FUlJPUlwiLFxuICAgICAgICAgIGxldmVsOiBcImVycm9yXCIsXG4gICAgICAgICAgbWVzc2FnZXM6IF9lcnJvcnNcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfVxuICB9LFxuICAvKipcbiAgICogQHBhcmFtIHtFcnJvcn0gZXJyb3JcbiAgICovXG4gIGVycm9yOiBmdW5jdGlvbiBlcnJvcihfZXJyb3IpIHtcbiAgICBsb2cuZXJyb3IoX2Vycm9yKTtcbiAgfSxcbiAgY2xvc2U6IGZ1bmN0aW9uIGNsb3NlKCkge1xuICAgIGxvZy5pbmZvKFwiRGlzY29ubmVjdGVkIVwiKTtcbiAgICBpZiAob3B0aW9ucy5vdmVybGF5KSB7XG4gICAgICBvdmVybGF5LnNlbmQoe1xuICAgICAgICB0eXBlOiBcIkRJU01JU1NcIlxuICAgICAgfSk7XG4gICAgfVxuICAgIHNlbmRNZXNzYWdlKFwiQ2xvc2VcIik7XG4gIH1cbn07XG5cbi8qKlxuICogQHBhcmFtIHt7IHByb3RvY29sPzogc3RyaW5nLCBhdXRoPzogc3RyaW5nLCBob3N0bmFtZT86IHN0cmluZywgcG9ydD86IHN0cmluZywgcGF0aG5hbWU/OiBzdHJpbmcsIHNlYXJjaD86IHN0cmluZywgaGFzaD86IHN0cmluZywgc2xhc2hlcz86IGJvb2xlYW4gfX0gb2JqVVJMXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG52YXIgZm9ybWF0VVJMID0gZnVuY3Rpb24gZm9ybWF0VVJMKG9ialVSTCkge1xuICB2YXIgcHJvdG9jb2wgPSBvYmpVUkwucHJvdG9jb2wgfHwgXCJcIjtcbiAgaWYgKHByb3RvY29sICYmIHByb3RvY29sLnN1YnN0cigtMSkgIT09IFwiOlwiKSB7XG4gICAgcHJvdG9jb2wgKz0gXCI6XCI7XG4gIH1cbiAgdmFyIGF1dGggPSBvYmpVUkwuYXV0aCB8fCBcIlwiO1xuICBpZiAoYXV0aCkge1xuICAgIGF1dGggPSBlbmNvZGVVUklDb21wb25lbnQoYXV0aCk7XG4gICAgYXV0aCA9IGF1dGgucmVwbGFjZSgvJTNBL2ksIFwiOlwiKTtcbiAgICBhdXRoICs9IFwiQFwiO1xuICB9XG4gIHZhciBob3N0ID0gXCJcIjtcbiAgaWYgKG9ialVSTC5ob3N0bmFtZSkge1xuICAgIGhvc3QgPSBhdXRoICsgKG9ialVSTC5ob3N0bmFtZS5pbmRleE9mKFwiOlwiKSA9PT0gLTEgPyBvYmpVUkwuaG9zdG5hbWUgOiBcIltcIi5jb25jYXQob2JqVVJMLmhvc3RuYW1lLCBcIl1cIikpO1xuICAgIGlmIChvYmpVUkwucG9ydCkge1xuICAgICAgaG9zdCArPSBcIjpcIi5jb25jYXQob2JqVVJMLnBvcnQpO1xuICAgIH1cbiAgfVxuICB2YXIgcGF0aG5hbWUgPSBvYmpVUkwucGF0aG5hbWUgfHwgXCJcIjtcbiAgaWYgKG9ialVSTC5zbGFzaGVzKSB7XG4gICAgaG9zdCA9IFwiLy9cIi5jb25jYXQoaG9zdCB8fCBcIlwiKTtcbiAgICBpZiAocGF0aG5hbWUgJiYgcGF0aG5hbWUuY2hhckF0KDApICE9PSBcIi9cIikge1xuICAgICAgcGF0aG5hbWUgPSBcIi9cIi5jb25jYXQocGF0aG5hbWUpO1xuICAgIH1cbiAgfSBlbHNlIGlmICghaG9zdCkge1xuICAgIGhvc3QgPSBcIlwiO1xuICB9XG4gIHZhciBzZWFyY2ggPSBvYmpVUkwuc2VhcmNoIHx8IFwiXCI7XG4gIGlmIChzZWFyY2ggJiYgc2VhcmNoLmNoYXJBdCgwKSAhPT0gXCI/XCIpIHtcbiAgICBzZWFyY2ggPSBcIj9cIi5jb25jYXQoc2VhcmNoKTtcbiAgfVxuICB2YXIgaGFzaCA9IG9ialVSTC5oYXNoIHx8IFwiXCI7XG4gIGlmIChoYXNoICYmIGhhc2guY2hhckF0KDApICE9PSBcIiNcIikge1xuICAgIGhhc2ggPSBcIiNcIi5jb25jYXQoaGFzaCk7XG4gIH1cbiAgcGF0aG5hbWUgPSBwYXRobmFtZS5yZXBsYWNlKC9bPyNdL2csXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZ30gbWF0Y2hcbiAgICogQHJldHVybnMge3N0cmluZ31cbiAgICovXG4gIGZ1bmN0aW9uIChtYXRjaCkge1xuICAgIHJldHVybiBlbmNvZGVVUklDb21wb25lbnQobWF0Y2gpO1xuICB9KTtcbiAgc2VhcmNoID0gc2VhcmNoLnJlcGxhY2UoXCIjXCIsIFwiJTIzXCIpO1xuICByZXR1cm4gXCJcIi5jb25jYXQocHJvdG9jb2wpLmNvbmNhdChob3N0KS5jb25jYXQocGF0aG5hbWUpLmNvbmNhdChzZWFyY2gpLmNvbmNhdChoYXNoKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtVUkwgJiB7IGZyb21DdXJyZW50U2NyaXB0PzogYm9vbGVhbiB9fSBwYXJzZWRVUkxcbiAqIEByZXR1cm5zIHtzdHJpbmd9XG4gKi9cbnZhciBjcmVhdGVTb2NrZXRVUkwgPSBmdW5jdGlvbiBjcmVhdGVTb2NrZXRVUkwocGFyc2VkVVJMKSB7XG4gIHZhciBob3N0bmFtZSA9IHBhcnNlZFVSTC5ob3N0bmFtZTtcblxuICAvLyBOb2RlLmpzIG1vZHVsZSBwYXJzZXMgaXQgYXMgYDo6YFxuICAvLyBgbmV3IFVSTCh1cmxTdHJpbmcsIFtiYXNlVVJMU3RyaW5nXSlgIHBhcnNlcyBpdCBhcyAnWzo6XSdcbiAgdmFyIGlzSW5BZGRyQW55ID0gaG9zdG5hbWUgPT09IFwiMC4wLjAuMFwiIHx8IGhvc3RuYW1lID09PSBcIjo6XCIgfHwgaG9zdG5hbWUgPT09IFwiWzo6XVwiO1xuXG4gIC8vIHdoeSBkbyB3ZSBuZWVkIHRoaXMgY2hlY2s/XG4gIC8vIGhvc3RuYW1lIG4vYSBmb3IgZmlsZSBwcm90b2NvbCAoZXhhbXBsZSwgd2hlbiB1c2luZyBlbGVjdHJvbiwgaW9uaWMpXG4gIC8vIHNlZTogaHR0cHM6Ly9naXRodWIuY29tL3dlYnBhY2svd2VicGFjay1kZXYtc2VydmVyL3B1bGwvMzg0XG4gIGlmIChpc0luQWRkckFueSAmJiBzZWxmLmxvY2F0aW9uLmhvc3RuYW1lICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wuaW5kZXhPZihcImh0dHBcIikgPT09IDApIHtcbiAgICBob3N0bmFtZSA9IHNlbGYubG9jYXRpb24uaG9zdG5hbWU7XG4gIH1cbiAgdmFyIHNvY2tldFVSTFByb3RvY29sID0gcGFyc2VkVVJMLnByb3RvY29sIHx8IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG5cbiAgLy8gV2hlbiBodHRwcyBpcyB1c2VkIGluIHRoZSBhcHAsIHNlY3VyZSB3ZWIgc29ja2V0cyBhcmUgYWx3YXlzIG5lY2Vzc2FyeSBiZWNhdXNlIHRoZSBicm93c2VyIGRvZXNuJ3QgYWNjZXB0IG5vbi1zZWN1cmUgd2ViIHNvY2tldHMuXG4gIGlmIChzb2NrZXRVUkxQcm90b2NvbCA9PT0gXCJhdXRvOlwiIHx8IGhvc3RuYW1lICYmIGlzSW5BZGRyQW55ICYmIHNlbGYubG9jYXRpb24ucHJvdG9jb2wgPT09IFwiaHR0cHM6XCIpIHtcbiAgICBzb2NrZXRVUkxQcm90b2NvbCA9IHNlbGYubG9jYXRpb24ucHJvdG9jb2w7XG4gIH1cbiAgc29ja2V0VVJMUHJvdG9jb2wgPSBzb2NrZXRVUkxQcm90b2NvbC5yZXBsYWNlKC9eKD86aHR0cHwuKy1leHRlbnNpb258ZmlsZSkvaSwgXCJ3c1wiKTtcbiAgdmFyIHNvY2tldFVSTEF1dGggPSBcIlwiO1xuXG4gIC8vIGBuZXcgVVJMKHVybFN0cmluZywgW2Jhc2VVUkxzdHJpbmddKWAgZG9lc24ndCBoYXZlIGBhdXRoYCBwcm9wZXJ0eVxuICAvLyBQYXJzZSBhdXRoZW50aWNhdGlvbiBjcmVkZW50aWFscyBpbiBjYXNlIHdlIG5lZWQgdGhlbVxuICBpZiAocGFyc2VkVVJMLnVzZXJuYW1lKSB7XG4gICAgc29ja2V0VVJMQXV0aCA9IHBhcnNlZFVSTC51c2VybmFtZTtcblxuICAgIC8vIFNpbmNlIEhUVFAgYmFzaWMgYXV0aGVudGljYXRpb24gZG9lcyBub3QgYWxsb3cgZW1wdHkgdXNlcm5hbWUsXG4gICAgLy8gd2Ugb25seSBpbmNsdWRlIHBhc3N3b3JkIGlmIHRoZSB1c2VybmFtZSBpcyBub3QgZW1wdHkuXG4gICAgaWYgKHBhcnNlZFVSTC5wYXNzd29yZCkge1xuICAgICAgLy8gUmVzdWx0OiA8dXNlcm5hbWU+OjxwYXNzd29yZD5cbiAgICAgIHNvY2tldFVSTEF1dGggPSBzb2NrZXRVUkxBdXRoLmNvbmNhdChcIjpcIiwgcGFyc2VkVVJMLnBhc3N3b3JkKTtcbiAgICB9XG4gIH1cblxuICAvLyBJbiBjYXNlIHRoZSBob3N0IGlzIGEgcmF3IElQdjYgYWRkcmVzcywgaXQgY2FuIGJlIGVuY2xvc2VkIGluXG4gIC8vIHRoZSBicmFja2V0cyBhcyB0aGUgYnJhY2tldHMgYXJlIG5lZWRlZCBpbiB0aGUgZmluYWwgVVJMIHN0cmluZy5cbiAgLy8gTmVlZCB0byByZW1vdmUgdGhvc2UgYXMgdXJsLmZvcm1hdCBibGluZGx5IGFkZHMgaXRzIG93biBzZXQgb2YgYnJhY2tldHNcbiAgLy8gaWYgdGhlIGhvc3Qgc3RyaW5nIGNvbnRhaW5zIGNvbG9ucy4gVGhhdCB3b3VsZCBsZWFkIHRvIG5vbi13b3JraW5nXG4gIC8vIGRvdWJsZSBicmFja2V0cyAoZS5nLiBbWzo6XV0pIGhvc3RcbiAgLy9cbiAgLy8gQWxsIG9mIHRoZXNlIHdlYiBzb2NrZXQgdXJsIHBhcmFtcyBhcmUgb3B0aW9uYWxseSBwYXNzZWQgaW4gdGhyb3VnaCByZXNvdXJjZVF1ZXJ5LFxuICAvLyBzbyB3ZSBuZWVkIHRvIGZhbGwgYmFjayB0byB0aGUgZGVmYXVsdCBpZiB0aGV5IGFyZSBub3QgcHJvdmlkZWRcbiAgdmFyIHNvY2tldFVSTEhvc3RuYW1lID0gKGhvc3RuYW1lIHx8IHNlbGYubG9jYXRpb24uaG9zdG5hbWUgfHwgXCJsb2NhbGhvc3RcIikucmVwbGFjZSgvXlxcWyguKilcXF0kLywgXCIkMVwiKTtcbiAgdmFyIHNvY2tldFVSTFBvcnQgPSBwYXJzZWRVUkwucG9ydDtcbiAgaWYgKCFzb2NrZXRVUkxQb3J0IHx8IHNvY2tldFVSTFBvcnQgPT09IFwiMFwiKSB7XG4gICAgc29ja2V0VVJMUG9ydCA9IHNlbGYubG9jYXRpb24ucG9ydDtcbiAgfVxuXG4gIC8vIElmIHBhdGggaXMgcHJvdmlkZWQgaXQnbGwgYmUgcGFzc2VkIGluIHZpYSB0aGUgcmVzb3VyY2VRdWVyeSBhcyBhXG4gIC8vIHF1ZXJ5IHBhcmFtIHNvIGl0IGhhcyB0byBiZSBwYXJzZWQgb3V0IG9mIHRoZSBxdWVyeXN0cmluZyBpbiBvcmRlciBmb3IgdGhlXG4gIC8vIGNsaWVudCB0byBvcGVuIHRoZSBzb2NrZXQgdG8gdGhlIGNvcnJlY3QgbG9jYXRpb24uXG4gIHZhciBzb2NrZXRVUkxQYXRobmFtZSA9IFwiL3dzXCI7XG4gIGlmIChwYXJzZWRVUkwucGF0aG5hbWUgJiYgIXBhcnNlZFVSTC5mcm9tQ3VycmVudFNjcmlwdCkge1xuICAgIHNvY2tldFVSTFBhdGhuYW1lID0gcGFyc2VkVVJMLnBhdGhuYW1lO1xuICB9XG4gIHJldHVybiBmb3JtYXRVUkwoe1xuICAgIHByb3RvY29sOiBzb2NrZXRVUkxQcm90b2NvbCxcbiAgICBhdXRoOiBzb2NrZXRVUkxBdXRoLFxuICAgIGhvc3RuYW1lOiBzb2NrZXRVUkxIb3N0bmFtZSxcbiAgICBwb3J0OiBzb2NrZXRVUkxQb3J0LFxuICAgIHBhdGhuYW1lOiBzb2NrZXRVUkxQYXRobmFtZSxcbiAgICBzbGFzaGVzOiB0cnVlXG4gIH0pO1xufTtcbnZhciBzb2NrZXRVUkwgPSBjcmVhdGVTb2NrZXRVUkwocGFyc2VkUmVzb3VyY2VRdWVyeSk7XG5zb2NrZXQoc29ja2V0VVJMLCBvblNvY2tldE1lc3NhZ2UsIG9wdGlvbnMucmVjb25uZWN0KTtcbmV4cG9ydCB7IGdldEN1cnJlbnRTY3JpcHRTb3VyY2UsIHBhcnNlVVJMLCBjcmVhdGVTb2NrZXRVUkwgfTsiLCIvKioqKioqLyAoZnVuY3Rpb24oKSB7IC8vIHdlYnBhY2tCb290c3RyYXBcbi8qKioqKiovIFx0XCJ1c2Ugc3RyaWN0XCI7XG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlc19fID0gKHtcblxuLyoqKi8gXCIuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvdGFwYWJsZS5qc1wiOlxuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL2NsaWVudC1zcmMvbW9kdWxlcy9sb2dnZXIvdGFwYWJsZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbi8qKiovIChmdW5jdGlvbihfX3VudXNlZF93ZWJwYWNrX21vZHVsZSwgX193ZWJwYWNrX2V4cG9ydHNfXywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIoX193ZWJwYWNrX2V4cG9ydHNfXyk7XG4vKiBoYXJtb255IGV4cG9ydCAqLyBfX3dlYnBhY2tfcmVxdWlyZV9fLmQoX193ZWJwYWNrX2V4cG9ydHNfXywge1xuLyogaGFybW9ueSBleHBvcnQgKi8gICBTeW5jQmFpbEhvb2s6IGZ1bmN0aW9uKCkgeyByZXR1cm4gLyogYmluZGluZyAqLyBTeW5jQmFpbEhvb2s7IH1cbi8qIGhhcm1vbnkgZXhwb3J0ICovIH0pO1xuZnVuY3Rpb24gU3luY0JhaWxIb29rKCkge1xuICByZXR1cm4ge1xuICAgIGNhbGw6IGZ1bmN0aW9uIGNhbGwoKSB7fVxuICB9O1xufVxuXG4vKipcbiAqIENsaWVudCBzdHViIGZvciB0YXBhYmxlIFN5bmNCYWlsSG9va1xuICovXG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgaW1wb3J0L3ByZWZlci1kZWZhdWx0LWV4cG9ydFxuXG5cbi8qKiovIH0pLFxuXG4vKioqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvTG9nZ2VyLmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSkge1xuXG4vKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG5cblxuZnVuY3Rpb24gX3R5cGVvZihvKSB7XG4gIFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjtcblxuICByZXR1cm4gX3R5cGVvZiA9IFwiZnVuY3Rpb25cIiA9PSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykge1xuICAgIHJldHVybiB0eXBlb2YgbztcbiAgfSA6IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBvLmNvbnN0cnVjdG9yID09PSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBvICE9PSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87XG4gIH0sIF90eXBlb2Yobyk7XG59XG5mdW5jdGlvbiBfdG9Db25zdW1hYmxlQXJyYXkocikge1xuICByZXR1cm4gX2FycmF5V2l0aG91dEhvbGVzKHIpIHx8IF9pdGVyYWJsZVRvQXJyYXkocikgfHwgX3Vuc3VwcG9ydGVkSXRlcmFibGVUb0FycmF5KHIpIHx8IF9ub25JdGVyYWJsZVNwcmVhZCgpO1xufVxuZnVuY3Rpb24gX25vbkl0ZXJhYmxlU3ByZWFkKCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIHNwcmVhZCBub24taXRlcmFibGUgaW5zdGFuY2UuXFxuSW4gb3JkZXIgdG8gYmUgaXRlcmFibGUsIG5vbi1hcnJheSBvYmplY3RzIG11c3QgaGF2ZSBhIFtTeW1ib2wuaXRlcmF0b3JdKCkgbWV0aG9kLlwiKTtcbn1cbmZ1bmN0aW9uIF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBhKSB7XG4gIGlmIChyKSB7XG4gICAgaWYgKFwic3RyaW5nXCIgPT0gdHlwZW9mIHIpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyLCBhKTtcbiAgICB2YXIgdCA9IHt9LnRvU3RyaW5nLmNhbGwocikuc2xpY2UoOCwgLTEpO1xuICAgIHJldHVybiBcIk9iamVjdFwiID09PSB0ICYmIHIuY29uc3RydWN0b3IgJiYgKHQgPSByLmNvbnN0cnVjdG9yLm5hbWUpLCBcIk1hcFwiID09PSB0IHx8IFwiU2V0XCIgPT09IHQgPyBBcnJheS5mcm9tKHIpIDogXCJBcmd1bWVudHNcIiA9PT0gdCB8fCAvXig/OlVpfEkpbnQoPzo4fDE2fDMyKSg/OkNsYW1wZWQpP0FycmF5JC8udGVzdCh0KSA/IF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIDogdm9pZCAwO1xuICB9XG59XG5mdW5jdGlvbiBfaXRlcmFibGVUb0FycmF5KHIpIHtcbiAgaWYgKFwidW5kZWZpbmVkXCIgIT0gdHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICYmIG51bGwgIT0gclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gfHwgbnVsbCAhPSByW1wiQEBpdGVyYXRvclwiXSkgcmV0dXJuIEFycmF5LmZyb20ocik7XG59XG5mdW5jdGlvbiBfYXJyYXlXaXRob3V0SG9sZXMocikge1xuICBpZiAoQXJyYXkuaXNBcnJheShyKSkgcmV0dXJuIF9hcnJheUxpa2VUb0FycmF5KHIpO1xufVxuZnVuY3Rpb24gX2FycmF5TGlrZVRvQXJyYXkociwgYSkge1xuICAobnVsbCA9PSBhIHx8IGEgPiByLmxlbmd0aCkgJiYgKGEgPSByLmxlbmd0aCk7XG4gIGZvciAodmFyIGUgPSAwLCBuID0gQXJyYXkoYSk7IGUgPCBhOyBlKyspIG5bZV0gPSByW2VdO1xuICByZXR1cm4gbjtcbn1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7XG4gIGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTtcbn1cbmZ1bmN0aW9uIF9kZWZpbmVQcm9wZXJ0aWVzKGUsIHIpIHtcbiAgZm9yICh2YXIgdCA9IDA7IHQgPCByLmxlbmd0aDsgdCsrKSB7XG4gICAgdmFyIG8gPSByW3RdO1xuICAgIG8uZW51bWVyYWJsZSA9IG8uZW51bWVyYWJsZSB8fCAhMSwgby5jb25maWd1cmFibGUgPSAhMCwgXCJ2YWx1ZVwiIGluIG8gJiYgKG8ud3JpdGFibGUgPSAhMCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBfdG9Qcm9wZXJ0eUtleShvLmtleSksIG8pO1xuICB9XG59XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkge1xuICByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7XG4gICAgd3JpdGFibGU6ICExXG4gIH0pLCBlO1xufVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkge1xuICB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTtcbiAgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjtcbn1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7XG4gIGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0O1xuICB2YXIgZSA9IHRbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkudG9QcmltaXRpdmVdO1xuICBpZiAodm9pZCAwICE9PSBlKSB7XG4gICAgdmFyIGkgPSBlLmNhbGwodCwgciB8fCBcImRlZmF1bHRcIik7XG4gICAgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7XG4gICAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpO1xuICB9XG4gIHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7XG59XG52YXIgTG9nVHlwZSA9IE9iamVjdC5mcmVlemUoe1xuICBlcnJvcjogKC8qKiBAdHlwZSB7XCJlcnJvclwifSAqL1wiZXJyb3JcIiksXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIHdhcm46ICgvKiogQHR5cGUge1wid2FyblwifSAqL1wid2FyblwiKSxcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcbiAgaW5mbzogKC8qKiBAdHlwZSB7XCJpbmZvXCJ9ICovXCJpbmZvXCIpLFxuICAvLyBtZXNzYWdlLCBjIHN0eWxlIGFyZ3VtZW50c1xuICBsb2c6ICgvKiogQHR5cGUge1wibG9nXCJ9ICovXCJsb2dcIiksXG4gIC8vIG1lc3NhZ2UsIGMgc3R5bGUgYXJndW1lbnRzXG4gIGRlYnVnOiAoLyoqIEB0eXBlIHtcImRlYnVnXCJ9ICovXCJkZWJ1Z1wiKSxcbiAgLy8gbWVzc2FnZSwgYyBzdHlsZSBhcmd1bWVudHNcblxuICB0cmFjZTogKC8qKiBAdHlwZSB7XCJ0cmFjZVwifSAqL1widHJhY2VcIiksXG4gIC8vIG5vIGFyZ3VtZW50c1xuXG4gIGdyb3VwOiAoLyoqIEB0eXBlIHtcImdyb3VwXCJ9ICovXCJncm91cFwiKSxcbiAgLy8gW2xhYmVsXVxuICBncm91cENvbGxhcHNlZDogKC8qKiBAdHlwZSB7XCJncm91cENvbGxhcHNlZFwifSAqL1wiZ3JvdXBDb2xsYXBzZWRcIiksXG4gIC8vIFtsYWJlbF1cbiAgZ3JvdXBFbmQ6ICgvKiogQHR5cGUge1wiZ3JvdXBFbmRcIn0gKi9cImdyb3VwRW5kXCIpLFxuICAvLyBbbGFiZWxdXG5cbiAgcHJvZmlsZTogKC8qKiBAdHlwZSB7XCJwcm9maWxlXCJ9ICovXCJwcm9maWxlXCIpLFxuICAvLyBbcHJvZmlsZU5hbWVdXG4gIHByb2ZpbGVFbmQ6ICgvKiogQHR5cGUge1wicHJvZmlsZUVuZFwifSAqL1wicHJvZmlsZUVuZFwiKSxcbiAgLy8gW3Byb2ZpbGVOYW1lXVxuXG4gIHRpbWU6ICgvKiogQHR5cGUge1widGltZVwifSAqL1widGltZVwiKSxcbiAgLy8gbmFtZSwgdGltZSBhcyBbc2Vjb25kcywgbmFub3NlY29uZHNdXG5cbiAgY2xlYXI6ICgvKiogQHR5cGUge1wiY2xlYXJcIn0gKi9cImNsZWFyXCIpLFxuICAvLyBubyBhcmd1bWVudHNcbiAgc3RhdHVzOiAoLyoqIEB0eXBlIHtcInN0YXR1c1wifSAqL1wic3RhdHVzXCIpIC8vIG1lc3NhZ2UsIGFyZ3VtZW50c1xufSk7XG5tb2R1bGUuZXhwb3J0cy5Mb2dUeXBlID0gTG9nVHlwZTtcblxuLyoqIEB0eXBlZGVmIHt0eXBlb2YgTG9nVHlwZVtrZXlvZiB0eXBlb2YgTG9nVHlwZV19IExvZ1R5cGVFbnVtICovXG5cbnZhciBMT0dfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciByYXcgbG9nIG1ldGhvZFwiKTtcbnZhciBUSU1FUlNfU1lNQk9MID0gKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkoXCJ3ZWJwYWNrIGxvZ2dlciB0aW1lc1wiKTtcbnZhciBUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0wgPSAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KShcIndlYnBhY2sgbG9nZ2VyIGFnZ3JlZ2F0ZWQgdGltZXNcIik7XG52YXIgV2VicGFja0xvZ2dlciA9IC8qI19fUFVSRV9fKi9mdW5jdGlvbiAoKSB7XG4gIC8qKlxuICAgKiBAcGFyYW0geyh0eXBlOiBMb2dUeXBlRW51bSwgYXJncz86IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkfSBsb2cgbG9nIGZ1bmN0aW9uXG4gICAqIEBwYXJhbSB7KG5hbWU6IHN0cmluZyB8ICgoKSA9PiBzdHJpbmcpKSA9PiBXZWJwYWNrTG9nZ2VyfSBnZXRDaGlsZExvZ2dlciBmdW5jdGlvbiB0byBjcmVhdGUgY2hpbGQgbG9nZ2VyXG4gICAqL1xuICBmdW5jdGlvbiBXZWJwYWNrTG9nZ2VyKGxvZywgZ2V0Q2hpbGRMb2dnZXIpIHtcbiAgICBfY2xhc3NDYWxsQ2hlY2sodGhpcywgV2VicGFja0xvZ2dlcik7XG4gICAgdGhpc1tMT0dfU1lNQk9MXSA9IGxvZztcbiAgICB0aGlzLmdldENoaWxkTG9nZ2VyID0gZ2V0Q2hpbGRMb2dnZXI7XG4gIH1cblxuICAvKipcbiAgICogQHBhcmFtIHsuLi5FWFBFQ1RFRF9BTll9IGFyZ3MgYXJnc1xuICAgKi9cbiAgcmV0dXJuIF9jcmVhdGVDbGFzcyhXZWJwYWNrTG9nZ2VyLCBbe1xuICAgIGtleTogXCJlcnJvclwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBlcnJvcigpIHtcbiAgICAgIGZvciAodmFyIF9sZW4gPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4pLCBfa2V5ID0gMDsgX2tleSA8IF9sZW47IF9rZXkrKykge1xuICAgICAgICBhcmdzW19rZXldID0gYXJndW1lbnRzW19rZXldO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmVycm9yLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwid2FyblwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB3YXJuKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjIgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4yKSwgX2tleTIgPSAwOyBfa2V5MiA8IF9sZW4yOyBfa2V5MisrKSB7XG4gICAgICAgIGFyZ3NbX2tleTJdID0gYXJndW1lbnRzW19rZXkyXTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS53YXJuLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiaW5mb1wiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBpbmZvKCkge1xuICAgICAgZm9yICh2YXIgX2xlbjMgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW4zKSwgX2tleTMgPSAwOyBfa2V5MyA8IF9sZW4zOyBfa2V5MysrKSB7XG4gICAgICAgIGFyZ3NbX2tleTNdID0gYXJndW1lbnRzW19rZXkzXTtcbiAgICAgIH1cbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5pbmZvLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwibG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGxvZygpIHtcbiAgICAgIGZvciAodmFyIF9sZW40ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNCksIF9rZXk0ID0gMDsgX2tleTQgPCBfbGVuNDsgX2tleTQrKykge1xuICAgICAgICBhcmdzW19rZXk0XSA9IGFyZ3VtZW50c1tfa2V5NF07XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUubG9nLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZGVidWdcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZGVidWcoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuNSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjUpLCBfa2V5NSA9IDA7IF9rZXk1IDwgX2xlbjU7IF9rZXk1KyspIHtcbiAgICAgICAgYXJnc1tfa2V5NV0gPSBhcmd1bWVudHNbX2tleTVdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmRlYnVnLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0VYUEVDVEVEX0FOWX0gYXNzZXJ0aW9uIGFzc2VydGlvblxuICAgICAqIEBwYXJhbSB7Li4uRVhQRUNURURfQU5ZfSBhcmdzIGFyZ3NcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJhc3NlcnRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gYXNzZXJ0KGFzc2VydGlvbikge1xuICAgICAgaWYgKCFhc3NlcnRpb24pIHtcbiAgICAgICAgZm9yICh2YXIgX2xlbjYgPSBhcmd1bWVudHMubGVuZ3RoLCBhcmdzID0gbmV3IEFycmF5KF9sZW42ID4gMSA/IF9sZW42IC0gMSA6IDApLCBfa2V5NiA9IDE7IF9rZXk2IDwgX2xlbjY7IF9rZXk2KyspIHtcbiAgICAgICAgICBhcmdzW19rZXk2IC0gMV0gPSBhcmd1bWVudHNbX2tleTZdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5lcnJvciwgYXJncyk7XG4gICAgICB9XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcInRyYWNlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRyYWNlKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRyYWNlLCBbXCJUcmFjZVwiXSk7XG4gICAgfVxuICB9LCB7XG4gICAga2V5OiBcImNsZWFyXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIGNsZWFyKCkge1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmNsZWFyKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwic3RhdHVzXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHN0YXR1cygpIHtcbiAgICAgIGZvciAodmFyIF9sZW43ID0gYXJndW1lbnRzLmxlbmd0aCwgYXJncyA9IG5ldyBBcnJheShfbGVuNyksIF9rZXk3ID0gMDsgX2tleTcgPCBfbGVuNzsgX2tleTcrKykge1xuICAgICAgICBhcmdzW19rZXk3XSA9IGFyZ3VtZW50c1tfa2V5N107XG4gICAgICB9XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuc3RhdHVzLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXAoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOCA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjgpLCBfa2V5OCA9IDA7IF9rZXk4IDwgX2xlbjg7IF9rZXk4KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OF0gPSBhcmd1bWVudHNbX2tleThdO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwLCBhcmdzKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gey4uLkVYUEVDVEVEX0FOWX0gYXJncyBhcmdzXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBDb2xsYXBzZWRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBDb2xsYXBzZWQoKSB7XG4gICAgICBmb3IgKHZhciBfbGVuOSA9IGFyZ3VtZW50cy5sZW5ndGgsIGFyZ3MgPSBuZXcgQXJyYXkoX2xlbjkpLCBfa2V5OSA9IDA7IF9rZXk5IDwgX2xlbjk7IF9rZXk5KyspIHtcbiAgICAgICAgYXJnc1tfa2V5OV0gPSBhcmd1bWVudHNbX2tleTldO1xuICAgICAgfVxuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLmdyb3VwQ29sbGFwc2VkLCBhcmdzKTtcbiAgICB9XG4gIH0sIHtcbiAgICBrZXk6IFwiZ3JvdXBFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gZ3JvdXBFbmQoKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUuZ3JvdXBFbmQpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFiZWwgbGFiZWxcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJwcm9maWxlXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHByb2ZpbGUobGFiZWwpIHtcbiAgICAgIHRoaXNbTE9HX1NZTUJPTF0oTG9nVHlwZS5wcm9maWxlLCBbbGFiZWxdKTtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge3N0cmluZz19IGxhYmVsIGxhYmVsXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwicHJvZmlsZUVuZFwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiBwcm9maWxlRW5kKGxhYmVsKSB7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUucHJvZmlsZUVuZCwgW2xhYmVsXSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsIGxhYmVsXG4gICAgICovXG4gIH0sIHtcbiAgICBrZXk6IFwidGltZVwiLFxuICAgIHZhbHVlOiBmdW5jdGlvbiB0aW1lKGxhYmVsKSB7XG4gICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcgfCB1bmRlZmluZWQsIFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXSA9IHRoaXNbVElNRVJTX1NZTUJPTF0gfHwgbmV3IE1hcCgpO1xuICAgICAgdGhpc1tUSU1FUlNfU1lNQk9MXS5zZXQobGFiZWwsIHByb2Nlc3MuaHJ0aW1lKCkpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFiZWwgbGFiZWxcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lTG9nXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVMb2cobGFiZWwpIHtcbiAgICAgIHZhciBwcmV2ID0gdGhpc1tUSU1FUlNfU1lNQk9MXSAmJiB0aGlzW1RJTUVSU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoIXByZXYpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiTm8gc3VjaCBsYWJlbCAnXCIuY29uY2F0KGxhYmVsLCBcIicgZm9yIFdlYnBhY2tMb2dnZXIudGltZUxvZygpXCIpKTtcbiAgICAgIH1cbiAgICAgIHZhciB0aW1lID0gcHJvY2Vzcy5ocnRpbWUocHJldik7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBsYWJlbCBsYWJlbFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInRpbWVFbmRcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUVuZChsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lRW5kKClcIikpO1xuICAgICAgfVxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIC8qKiBAdHlwZSB7TWFwPHN0cmluZyB8IHVuZGVmaW5lZCwgW251bWJlciwgbnVtYmVyXT59ICovXG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdLmRlbGV0ZShsYWJlbCk7XG4gICAgICB0aGlzW0xPR19TWU1CT0xdKExvZ1R5cGUudGltZSwgW2xhYmVsXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KHRpbWUpKSk7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQHBhcmFtIHtzdHJpbmc9fSBsYWJlbCBsYWJlbFxuICAgICAqL1xuICB9LCB7XG4gICAga2V5OiBcInRpbWVBZ2dyZWdhdGVcIixcbiAgICB2YWx1ZTogZnVuY3Rpb24gdGltZUFnZ3JlZ2F0ZShsYWJlbCkge1xuICAgICAgdmFyIHByZXYgPSB0aGlzW1RJTUVSU19TWU1CT0xdICYmIHRoaXNbVElNRVJTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICghcHJldikge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJObyBzdWNoIGxhYmVsICdcIi5jb25jYXQobGFiZWwsIFwiJyBmb3IgV2VicGFja0xvZ2dlci50aW1lQWdncmVnYXRlKClcIikpO1xuICAgICAgfVxuICAgICAgdmFyIHRpbWUgPSBwcm9jZXNzLmhydGltZShwcmV2KTtcbiAgICAgIC8qKiBAdHlwZSB7TWFwPHN0cmluZyB8IHVuZGVmaW5lZCwgW251bWJlciwgbnVtYmVyXT59ICovXG4gICAgICB0aGlzW1RJTUVSU19TWU1CT0xdLmRlbGV0ZShsYWJlbCk7XG4gICAgICAvKiogQHR5cGUge01hcDxzdHJpbmcgfCB1bmRlZmluZWQsIFtudW1iZXIsIG51bWJlcl0+fSAqL1xuICAgICAgdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdIHx8IG5ldyBNYXAoKTtcbiAgICAgIHZhciBjdXJyZW50ID0gdGhpc1tUSU1FUlNfQUdHUkVHQVRFU19TWU1CT0xdLmdldChsYWJlbCk7XG4gICAgICBpZiAoY3VycmVudCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmICh0aW1lWzFdICsgY3VycmVudFsxXSA+IDFlOSkge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXSArIDE7XG4gICAgICAgICAgdGltZVsxXSA9IHRpbWVbMV0gLSAxZTkgKyBjdXJyZW50WzFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHRpbWVbMF0gKz0gY3VycmVudFswXTtcbiAgICAgICAgICB0aW1lWzFdICs9IGN1cnJlbnRbMV07XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5zZXQobGFiZWwsIHRpbWUpO1xuICAgIH1cblxuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7c3RyaW5nPX0gbGFiZWwgbGFiZWxcbiAgICAgKi9cbiAgfSwge1xuICAgIGtleTogXCJ0aW1lQWdncmVnYXRlRW5kXCIsXG4gICAgdmFsdWU6IGZ1bmN0aW9uIHRpbWVBZ2dyZWdhdGVFbmQobGFiZWwpIHtcbiAgICAgIGlmICh0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0gPT09IHVuZGVmaW5lZCkgcmV0dXJuO1xuICAgICAgdmFyIHRpbWUgPSB0aGlzW1RJTUVSU19BR0dSRUdBVEVTX1NZTUJPTF0uZ2V0KGxhYmVsKTtcbiAgICAgIGlmICh0aW1lID09PSB1bmRlZmluZWQpIHJldHVybjtcbiAgICAgIHRoaXNbVElNRVJTX0FHR1JFR0FURVNfU1lNQk9MXS5kZWxldGUobGFiZWwpO1xuICAgICAgdGhpc1tMT0dfU1lNQk9MXShMb2dUeXBlLnRpbWUsIFtsYWJlbF0uY29uY2F0KF90b0NvbnN1bWFibGVBcnJheSh0aW1lKSkpO1xuICAgIH1cbiAgfV0pO1xufSgpO1xubW9kdWxlLmV4cG9ydHMuTG9nZ2VyID0gV2VicGFja0xvZ2dlcjtcblxuLyoqKi8gfSksXG5cbi8qKiovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCI6XG4vKiEqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiEqXFxcbiAgISoqKiAuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL2NyZWF0ZUNvbnNvbGVMb2dnZXIuanMgKioqIVxuICBcXCoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgX191bnVzZWRfd2VicGFja19leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5cblxuXG5mdW5jdGlvbiBfc2xpY2VkVG9BcnJheShyLCBlKSB7XG4gIHJldHVybiBfYXJyYXlXaXRoSG9sZXMocikgfHwgX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGUpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyLCBlKSB8fCBfbm9uSXRlcmFibGVSZXN0KCk7XG59XG5mdW5jdGlvbiBfbm9uSXRlcmFibGVSZXN0KCkge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKFwiSW52YWxpZCBhdHRlbXB0IHRvIGRlc3RydWN0dXJlIG5vbi1pdGVyYWJsZSBpbnN0YW5jZS5cXG5JbiBvcmRlciB0byBiZSBpdGVyYWJsZSwgbm9uLWFycmF5IG9iamVjdHMgbXVzdCBoYXZlIGEgW1N5bWJvbC5pdGVyYXRvcl0oKSBtZXRob2QuXCIpO1xufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheUxpbWl0KHIsIGwpIHtcbiAgdmFyIHQgPSBudWxsID09IHIgPyBudWxsIDogXCJ1bmRlZmluZWRcIiAhPSB0eXBlb2YgKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkgJiYgclsodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvcl0gfHwgcltcIkBAaXRlcmF0b3JcIl07XG4gIGlmIChudWxsICE9IHQpIHtcbiAgICB2YXIgZSxcbiAgICAgIG4sXG4gICAgICBpLFxuICAgICAgdSxcbiAgICAgIGEgPSBbXSxcbiAgICAgIGYgPSAhMCxcbiAgICAgIG8gPSAhMTtcbiAgICB0cnkge1xuICAgICAgaWYgKGkgPSAodCA9IHQuY2FsbChyKSkubmV4dCwgMCA9PT0gbCkge1xuICAgICAgICBpZiAoT2JqZWN0KHQpICE9PSB0KSByZXR1cm47XG4gICAgICAgIGYgPSAhMTtcbiAgICAgIH0gZWxzZSBmb3IgKDsgIShmID0gKGUgPSBpLmNhbGwodCkpLmRvbmUpICYmIChhLnB1c2goZS52YWx1ZSksIGEubGVuZ3RoICE9PSBsKTsgZiA9ICEwKTtcbiAgICB9IGNhdGNoIChyKSB7XG4gICAgICBvID0gITAsIG4gPSByO1xuICAgIH0gZmluYWxseSB7XG4gICAgICB0cnkge1xuICAgICAgICBpZiAoIWYgJiYgbnVsbCAhPSB0LnJldHVybiAmJiAodSA9IHQucmV0dXJuKCksIE9iamVjdCh1KSAhPT0gdSkpIHJldHVybjtcbiAgICAgIH0gZmluYWxseSB7XG4gICAgICAgIGlmIChvKSB0aHJvdyBuO1xuICAgICAgfVxuICAgIH1cbiAgICByZXR1cm4gYTtcbiAgfVxufVxuZnVuY3Rpb24gX2FycmF5V2l0aEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiByO1xufVxuZnVuY3Rpb24gX3RvQ29uc3VtYWJsZUFycmF5KHIpIHtcbiAgcmV0dXJuIF9hcnJheVdpdGhvdXRIb2xlcyhyKSB8fCBfaXRlcmFibGVUb0FycmF5KHIpIHx8IF91bnN1cHBvcnRlZEl0ZXJhYmxlVG9BcnJheShyKSB8fCBfbm9uSXRlcmFibGVTcHJlYWQoKTtcbn1cbmZ1bmN0aW9uIF9ub25JdGVyYWJsZVNwcmVhZCgpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkludmFsaWQgYXR0ZW1wdCB0byBzcHJlYWQgbm9uLWl0ZXJhYmxlIGluc3RhbmNlLlxcbkluIG9yZGVyIHRvIGJlIGl0ZXJhYmxlLCBub24tYXJyYXkgb2JqZWN0cyBtdXN0IGhhdmUgYSBbU3ltYm9sLml0ZXJhdG9yXSgpIG1ldGhvZC5cIik7XG59XG5mdW5jdGlvbiBfdW5zdXBwb3J0ZWRJdGVyYWJsZVRvQXJyYXkociwgYSkge1xuICBpZiAocikge1xuICAgIGlmIChcInN0cmluZ1wiID09IHR5cGVvZiByKSByZXR1cm4gX2FycmF5TGlrZVRvQXJyYXkociwgYSk7XG4gICAgdmFyIHQgPSB7fS50b1N0cmluZy5jYWxsKHIpLnNsaWNlKDgsIC0xKTtcbiAgICByZXR1cm4gXCJPYmplY3RcIiA9PT0gdCAmJiByLmNvbnN0cnVjdG9yICYmICh0ID0gci5jb25zdHJ1Y3Rvci5uYW1lKSwgXCJNYXBcIiA9PT0gdCB8fCBcIlNldFwiID09PSB0ID8gQXJyYXkuZnJvbShyKSA6IFwiQXJndW1lbnRzXCIgPT09IHQgfHwgL14oPzpVaXxJKW50KD86OHwxNnwzMikoPzpDbGFtcGVkKT9BcnJheSQvLnRlc3QodCkgPyBfYXJyYXlMaWtlVG9BcnJheShyLCBhKSA6IHZvaWQgMDtcbiAgfVxufVxuZnVuY3Rpb24gX2l0ZXJhYmxlVG9BcnJheShyKSB7XG4gIGlmIChcInVuZGVmaW5lZFwiICE9IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBudWxsICE9IHJbKHR5cGVvZiBTeW1ib2wgIT09IFwidW5kZWZpbmVkXCIgPyBTeW1ib2wgOiBmdW5jdGlvbiAoaSkgeyByZXR1cm4gaTsgfSkuaXRlcmF0b3JdIHx8IG51bGwgIT0gcltcIkBAaXRlcmF0b3JcIl0pIHJldHVybiBBcnJheS5mcm9tKHIpO1xufVxuZnVuY3Rpb24gX2FycmF5V2l0aG91dEhvbGVzKHIpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkocikpIHJldHVybiBfYXJyYXlMaWtlVG9BcnJheShyKTtcbn1cbmZ1bmN0aW9uIF9hcnJheUxpa2VUb0FycmF5KHIsIGEpIHtcbiAgKG51bGwgPT0gYSB8fCBhID4gci5sZW5ndGgpICYmIChhID0gci5sZW5ndGgpO1xuICBmb3IgKHZhciBlID0gMCwgbiA9IEFycmF5KGEpOyBlIDwgYTsgZSsrKSBuW2VdID0gcltlXTtcbiAgcmV0dXJuIG47XG59XG5mdW5jdGlvbiBfdHlwZW9mKG8pIHtcbiAgXCJAYmFiZWwvaGVscGVycyAtIHR5cGVvZlwiO1xuXG4gIHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KSAmJiBcInN5bWJvbFwiID09IHR5cGVvZiAodHlwZW9mIFN5bWJvbCAhPT0gXCJ1bmRlZmluZWRcIiA/IFN5bWJvbCA6IGZ1bmN0aW9uIChpKSB7IHJldHVybiBpOyB9KS5pdGVyYXRvciA/IGZ1bmN0aW9uIChvKSB7XG4gICAgcmV0dXJuIHR5cGVvZiBvO1xuICB9IDogZnVuY3Rpb24gKG8pIHtcbiAgICByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICYmIG8uY29uc3RydWN0b3IgPT09ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pICYmIG8gIT09ICh0eXBlb2YgU3ltYm9sICE9PSBcInVuZGVmaW5lZFwiID8gU3ltYm9sIDogZnVuY3Rpb24gKGkpIHsgcmV0dXJuIGk7IH0pLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbztcbiAgfSwgX3R5cGVvZihvKTtcbn1cbnZhciBfcmVxdWlyZSA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9Mb2dnZXIuanNcIiksXG4gIExvZ1R5cGUgPSBfcmVxdWlyZS5Mb2dUeXBlO1xuXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4uLy4uL2RlY2xhcmF0aW9ucy9XZWJwYWNrT3B0aW9uc1wiKS5GaWx0ZXJJdGVtVHlwZXN9IEZpbHRlckl0ZW1UeXBlcyAqL1xuLyoqIEB0eXBlZGVmIHtpbXBvcnQoXCIuLi8uLi9kZWNsYXJhdGlvbnMvV2VicGFja09wdGlvbnNcIikuRmlsdGVyVHlwZXN9IEZpbHRlclR5cGVzICovXG4vKiogQHR5cGVkZWYge2ltcG9ydChcIi4vTG9nZ2VyXCIpLkxvZ1R5cGVFbnVtfSBMb2dUeXBlRW51bSAqL1xuXG4vKiogQHR5cGVkZWYgeyhpdGVtOiBzdHJpbmcpID0+IGJvb2xlYW59IEZpbHRlckZ1bmN0aW9uICovXG4vKiogQHR5cGVkZWYgeyh2YWx1ZTogc3RyaW5nLCB0eXBlOiBMb2dUeXBlRW51bSwgYXJncz86IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkfSBMb2dnaW5nRnVuY3Rpb24gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7b2JqZWN0fSBMb2dnZXJDb25zb2xlXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IGNsZWFyXG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IHRyYWNlXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZH0gaW5mb1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWR9IGxvZ1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWR9IHdhcm5cbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkfSBlcnJvclxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBkZWJ1Z1xuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBncm91cFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBncm91cENvbGxhcHNlZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBncm91cEVuZFxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBzdGF0dXNcbiAqIEBwcm9wZXJ0eSB7KC4uLmFyZ3M6IEVYUEVDVEVEX0FOWVtdKSA9PiB2b2lkPX0gcHJvZmlsZVxuICogQHByb3BlcnR5IHsoLi4uYXJnczogRVhQRUNURURfQU5ZW10pID0+IHZvaWQ9fSBwcm9maWxlRW5kXG4gKiBAcHJvcGVydHkgeyguLi5hcmdzOiBFWFBFQ1RFRF9BTllbXSkgPT4gdm9pZD19IGxvZ1RpbWVcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtvYmplY3R9IExvZ2dlck9wdGlvbnNcbiAqIEBwcm9wZXJ0eSB7ZmFsc2V8dHJ1ZXxcIm5vbmVcInxcImVycm9yXCJ8XCJ3YXJuXCJ8XCJpbmZvXCJ8XCJsb2dcInxcInZlcmJvc2VcIn0gbGV2ZWwgbG9nbGV2ZWxcbiAqIEBwcm9wZXJ0eSB7RmlsdGVyVHlwZXN8Ym9vbGVhbn0gZGVidWcgZmlsdGVyIGZvciBkZWJ1ZyBsb2dnaW5nXG4gKiBAcHJvcGVydHkge0xvZ2dlckNvbnNvbGV9IGNvbnNvbGUgdGhlIGNvbnNvbGUgdG8gbG9nIHRvXG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0ZpbHRlckl0ZW1UeXBlc30gaXRlbSBhbiBpbnB1dCBpdGVtXG4gKiBAcmV0dXJucyB7RmlsdGVyRnVuY3Rpb24gfCB1bmRlZmluZWR9IGZpbHRlciBmdW5jdGlvblxuICovXG52YXIgZmlsdGVyVG9GdW5jdGlvbiA9IGZ1bmN0aW9uIGZpbHRlclRvRnVuY3Rpb24oaXRlbSkge1xuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCIpIHtcbiAgICB2YXIgcmVnRXhwID0gbmV3IFJlZ0V4cChcIltcXFxcXFxcXC9dXCIuY29uY2F0KGl0ZW0ucmVwbGFjZSgvWy1bXFxde30oKSorPy5cXFxcXiR8XS9nLCBcIlxcXFwkJlwiKSwgXCIoW1xcXFxcXFxcL118JHwhfFxcXFw/KVwiKSk7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZGVudCkge1xuICAgICAgcmV0dXJuIHJlZ0V4cC50ZXN0KGlkZW50KTtcbiAgICB9O1xuICB9XG4gIGlmIChpdGVtICYmIF90eXBlb2YoaXRlbSkgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIGl0ZW0udGVzdCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChpZGVudCkge1xuICAgICAgcmV0dXJuIGl0ZW0udGVzdChpZGVudCk7XG4gICAgfTtcbiAgfVxuICBpZiAodHlwZW9mIGl0ZW0gPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHJldHVybiBpdGVtO1xuICB9XG4gIGlmICh0eXBlb2YgaXRlbSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKCkge1xuICAgICAgcmV0dXJuIGl0ZW07XG4gICAgfTtcbiAgfVxufTtcblxuLyoqXG4gKiBAZW51bSB7bnVtYmVyfVxuICovXG52YXIgTG9nTGV2ZWwgPSB7XG4gIG5vbmU6IDYsXG4gIGZhbHNlOiA2LFxuICBlcnJvcjogNSxcbiAgd2FybjogNCxcbiAgaW5mbzogMyxcbiAgbG9nOiAyLFxuICB0cnVlOiAyLFxuICB2ZXJib3NlOiAxXG59O1xuXG4vKipcbiAqIEBwYXJhbSB7TG9nZ2VyT3B0aW9uc30gb3B0aW9ucyBvcHRpb25zIG9iamVjdFxuICogQHJldHVybnMge0xvZ2dpbmdGdW5jdGlvbn0gbG9nZ2luZyBmdW5jdGlvblxuICovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChfcmVmKSB7XG4gIHZhciBfcmVmJGxldmVsID0gX3JlZi5sZXZlbCxcbiAgICBsZXZlbCA9IF9yZWYkbGV2ZWwgPT09IHZvaWQgMCA/IFwiaW5mb1wiIDogX3JlZiRsZXZlbCxcbiAgICBfcmVmJGRlYnVnID0gX3JlZi5kZWJ1ZyxcbiAgICBkZWJ1ZyA9IF9yZWYkZGVidWcgPT09IHZvaWQgMCA/IGZhbHNlIDogX3JlZiRkZWJ1ZyxcbiAgICBjb25zb2xlID0gX3JlZi5jb25zb2xlO1xuICB2YXIgZGVidWdGaWx0ZXJzID0gLyoqIEB0eXBlIHtGaWx0ZXJGdW5jdGlvbltdfSAqL1xuXG4gIHR5cGVvZiBkZWJ1ZyA9PT0gXCJib29sZWFuXCIgPyBbZnVuY3Rpb24gKCkge1xuICAgIHJldHVybiBkZWJ1ZztcbiAgfV0gOiAvKiogQHR5cGUge0ZpbHRlckl0ZW1UeXBlc1tdfSAqL1tdLmNvbmNhdChkZWJ1ZykubWFwKGZpbHRlclRvRnVuY3Rpb24pO1xuICB2YXIgbG9nbGV2ZWwgPSBMb2dMZXZlbFtcIlwiLmNvbmNhdChsZXZlbCldIHx8IDA7XG5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGxvZ2dlclxuICAgKiBAcGFyYW0ge0xvZ1R5cGVFbnVtfSB0eXBlIHR5cGUgb2YgdGhlIGxvZyBlbnRyeVxuICAgKiBAcGFyYW0ge0VYUEVDVEVEX0FOWVtdPX0gYXJncyBhcmd1bWVudHMgb2YgdGhlIGxvZyBlbnRyeVxuICAgKiBAcmV0dXJucyB7dm9pZH1cbiAgICovXG4gIHZhciBsb2dnZXIgPSBmdW5jdGlvbiBsb2dnZXIobmFtZSwgdHlwZSwgYXJncykge1xuICAgIHZhciBsYWJlbGVkQXJncyA9IGZ1bmN0aW9uIGxhYmVsZWRBcmdzKCkge1xuICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYXJncykpIHtcbiAgICAgICAgaWYgKGFyZ3MubGVuZ3RoID4gMCAmJiB0eXBlb2YgYXJnc1swXSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiBbXCJbXCIuY29uY2F0KG5hbWUsIFwiXSBcIikuY29uY2F0KGFyZ3NbMF0pXS5jb25jYXQoX3RvQ29uc3VtYWJsZUFycmF5KGFyZ3Muc2xpY2UoMSkpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gW1wiW1wiLmNvbmNhdChuYW1lLCBcIl1cIildLmNvbmNhdChfdG9Db25zdW1hYmxlQXJyYXkoYXJncykpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIFtdO1xuICAgIH07XG4gICAgdmFyIGRlYnVnID0gZGVidWdGaWx0ZXJzLnNvbWUoZnVuY3Rpb24gKGYpIHtcbiAgICAgIHJldHVybiBmKG5hbWUpO1xuICAgIH0pO1xuICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgY2FzZSBMb2dUeXBlLmRlYnVnOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5kZWJ1ZyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5kZWJ1Zy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUubG9nOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmluZm86XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5pbmZvKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUuaW5mby5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICBicmVhaztcbiAgICAgIGNhc2UgTG9nVHlwZS53YXJuOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwud2FybikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLndhcm4uYXBwbHkoY29uc29sZSwgX3RvQ29uc3VtYWJsZUFycmF5KGxhYmVsZWRBcmdzKCkpKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZXJyb3I6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5lcnJvcikgcmV0dXJuO1xuICAgICAgICBjb25zb2xlLmVycm9yLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnRyYWNlOlxuICAgICAgICBpZiAoIWRlYnVnKSByZXR1cm47XG4gICAgICAgIGNvbnNvbGUudHJhY2UoKTtcbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBDb2xsYXBzZWQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLnZlcmJvc2UpIHtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUuZ3JvdXBDb2xsYXBzZWQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgICAgY29uc29sZS5ncm91cENvbGxhcHNlZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgLy8gZmFsbHMgdGhyb3VnaFxuICAgICAgY2FzZSBMb2dUeXBlLmdyb3VwOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5ncm91cCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5ncm91cC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGNvbnNvbGUubG9nLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUuZ3JvdXBFbmQ6XG4gICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLmdyb3VwRW5kID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICBjb25zb2xlLmdyb3VwRW5kKCk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUudGltZTpcbiAgICAgICAge1xuICAgICAgICAgIGlmICghZGVidWcgJiYgbG9nbGV2ZWwgPiBMb2dMZXZlbC5sb2cpIHJldHVybjtcbiAgICAgICAgICB2YXIgX2FyZ3MgPSBfc2xpY2VkVG9BcnJheSgvKiogQHR5cGUge1tzdHJpbmcsIG51bWJlciwgbnVtYmVyXX0gKi9cbiAgICAgICAgICAgIGFyZ3MsIDMpLFxuICAgICAgICAgICAgbGFiZWwgPSBfYXJnc1swXSxcbiAgICAgICAgICAgIHN0YXJ0ID0gX2FyZ3NbMV0sXG4gICAgICAgICAgICBlbmQgPSBfYXJnc1syXTtcbiAgICAgICAgICB2YXIgbXMgPSBzdGFydCAqIDEwMDAgKyBlbmQgLyAxMDAwMDAwO1xuICAgICAgICAgIHZhciBtc2cgPSBcIltcIi5jb25jYXQobmFtZSwgXCJdIFwiKS5jb25jYXQobGFiZWwsIFwiOiBcIikuY29uY2F0KG1zLCBcIiBtc1wiKTtcbiAgICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUubG9nVGltZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZ1RpbWUobXNnKTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2cobXNnKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgIGNhc2UgTG9nVHlwZS5wcm9maWxlOlxuICAgICAgICBpZiAodHlwZW9mIGNvbnNvbGUucHJvZmlsZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5wcm9maWxlLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIExvZ1R5cGUucHJvZmlsZUVuZDpcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnByb2ZpbGVFbmQgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICAgIGNvbnNvbGUucHJvZmlsZUVuZC5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLmNsZWFyOlxuICAgICAgICBpZiAoIWRlYnVnICYmIGxvZ2xldmVsID4gTG9nTGV2ZWwubG9nKSByZXR1cm47XG4gICAgICAgIGlmICh0eXBlb2YgY29uc29sZS5jbGVhciA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgY29uc29sZS5jbGVhcigpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBMb2dUeXBlLnN0YXR1czpcbiAgICAgICAgaWYgKCFkZWJ1ZyAmJiBsb2dsZXZlbCA+IExvZ0xldmVsLmluZm8pIHJldHVybjtcbiAgICAgICAgaWYgKHR5cGVvZiBjb25zb2xlLnN0YXR1cyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgaWYgKCFhcmdzIHx8IGFyZ3MubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cygpO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb25zb2xlLnN0YXR1cy5hcHBseShjb25zb2xlLCBfdG9Db25zdW1hYmxlQXJyYXkobGFiZWxlZEFyZ3MoKSkpO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChhcmdzICYmIGFyZ3MubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIF90b0NvbnN1bWFibGVBcnJheShsYWJlbGVkQXJncygpKSk7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJVbmV4cGVjdGVkIExvZ1R5cGUgXCIuY29uY2F0KHR5cGUpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsb2dnZXI7XG59O1xuXG4vKioqLyB9KSxcblxuLyoqKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL3J1bnRpbWUuanNcIjpcbi8qISoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqISpcXFxuICAhKioqIC4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqKiohXG4gIFxcKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBfX3VudXNlZF93ZWJwYWNrX2V4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLypcblx0TUlUIExpY2Vuc2UgaHR0cDovL3d3dy5vcGVuc291cmNlLm9yZy9saWNlbnNlcy9taXQtbGljZW5zZS5waHBcblx0QXV0aG9yIFRvYmlhcyBLb3BwZXJzIEBzb2tyYVxuKi9cblxuXG5cbmZ1bmN0aW9uIF9leHRlbmRzKCkge1xuICByZXR1cm4gX2V4dGVuZHMgPSBPYmplY3QuYXNzaWduID8gT2JqZWN0LmFzc2lnbi5iaW5kKCkgOiBmdW5jdGlvbiAobikge1xuICAgIGZvciAodmFyIGUgPSAxOyBlIDwgYXJndW1lbnRzLmxlbmd0aDsgZSsrKSB7XG4gICAgICB2YXIgdCA9IGFyZ3VtZW50c1tlXTtcbiAgICAgIGZvciAodmFyIHIgaW4gdCkgKHt9KS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHQsIHIpICYmIChuW3JdID0gdFtyXSk7XG4gICAgfVxuICAgIHJldHVybiBuO1xuICB9LCBfZXh0ZW5kcy5hcHBseShudWxsLCBhcmd1bWVudHMpO1xufVxudmFyIF9yZXF1aXJlID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgdGFwYWJsZSAqLyBcIi4vY2xpZW50LXNyYy9tb2R1bGVzL2xvZ2dlci90YXBhYmxlLmpzXCIpLFxuICBTeW5jQmFpbEhvb2sgPSBfcmVxdWlyZS5TeW5jQmFpbEhvb2s7XG52YXIgX3JlcXVpcmUyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9Mb2dnZXIgKi8gXCIuL25vZGVfbW9kdWxlcy93ZWJwYWNrL2xpYi9sb2dnaW5nL0xvZ2dlci5qc1wiKSxcbiAgTG9nZ2VyID0gX3JlcXVpcmUyLkxvZ2dlcjtcbnZhciBjcmVhdGVDb25zb2xlTG9nZ2VyID0gX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9jcmVhdGVDb25zb2xlTG9nZ2VyICovIFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay9saWIvbG9nZ2luZy9jcmVhdGVDb25zb2xlTG9nZ2VyLmpzXCIpO1xuXG4vKiogQHR5cGUge2NyZWF0ZUNvbnNvbGVMb2dnZXIuTG9nZ2VyT3B0aW9uc30gKi9cbnZhciBjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMgPSB7XG4gIGxldmVsOiBcImluZm9cIixcbiAgZGVidWc6IGZhbHNlLFxuICBjb25zb2xlOiBjb25zb2xlXG59O1xudmFyIGN1cnJlbnREZWZhdWx0TG9nZ2VyID0gY3JlYXRlQ29uc29sZUxvZ2dlcihjdXJyZW50RGVmYXVsdExvZ2dlck9wdGlvbnMpO1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBuYW1lIG5hbWUgb2YgdGhlIGxvZ2dlclxuICogQHJldHVybnMge0xvZ2dlcn0gYSBsb2dnZXJcbiAqL1xubW9kdWxlLmV4cG9ydHMuZ2V0TG9nZ2VyID0gZnVuY3Rpb24gKG5hbWUpIHtcbiAgcmV0dXJuIG5ldyBMb2dnZXIoZnVuY3Rpb24gKHR5cGUsIGFyZ3MpIHtcbiAgICBpZiAobW9kdWxlLmV4cG9ydHMuaG9va3MubG9nLmNhbGwobmFtZSwgdHlwZSwgYXJncykgPT09IHVuZGVmaW5lZCkge1xuICAgICAgY3VycmVudERlZmF1bHRMb2dnZXIobmFtZSwgdHlwZSwgYXJncyk7XG4gICAgfVxuICB9LCBmdW5jdGlvbiAoY2hpbGROYW1lKSB7XG4gICAgcmV0dXJuIG1vZHVsZS5leHBvcnRzLmdldExvZ2dlcihcIlwiLmNvbmNhdChuYW1lLCBcIi9cIikuY29uY2F0KGNoaWxkTmFtZSkpO1xuICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHtjcmVhdGVDb25zb2xlTG9nZ2VyLkxvZ2dlck9wdGlvbnN9IG9wdGlvbnMgbmV3IG9wdGlvbnMsIG1lcmdlIHdpdGggb2xkIG9wdGlvbnNcbiAqIEByZXR1cm5zIHt2b2lkfVxuICovXG5tb2R1bGUuZXhwb3J0cy5jb25maWd1cmVEZWZhdWx0TG9nZ2VyID0gZnVuY3Rpb24gKG9wdGlvbnMpIHtcbiAgX2V4dGVuZHMoY3VycmVudERlZmF1bHRMb2dnZXJPcHRpb25zLCBvcHRpb25zKTtcbiAgY3VycmVudERlZmF1bHRMb2dnZXIgPSBjcmVhdGVDb25zb2xlTG9nZ2VyKGN1cnJlbnREZWZhdWx0TG9nZ2VyT3B0aW9ucyk7XG59O1xubW9kdWxlLmV4cG9ydHMuaG9va3MgPSB7XG4gIGxvZzogbmV3IFN5bmNCYWlsSG9vayhbXCJvcmlnaW5cIiwgXCJ0eXBlXCIsIFwiYXJnc1wiXSlcbn07XG5cbi8qKiovIH0pXG5cbi8qKioqKiovIFx0fSk7XG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gXHQvLyBUaGUgbW9kdWxlIGNhY2hlXG4vKioqKioqLyBcdHZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovIFx0XHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcbi8qKioqKiovIFx0XHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcbi8qKioqKiovIFx0XHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0XHR9XG4vKioqKioqLyBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbi8qKioqKiovIFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcbi8qKioqKiovIFx0XHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdFxuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcbi8qKioqKiovIFx0XHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG4vKioqKioqLyBcdFx0XHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcbi8qKioqKiovIFx0XHRcdFx0fVxuLyoqKioqKi8gXHRcdFx0fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqLyBcdH0oKTtcbi8qKioqKiovIFx0XG4vKioqKioqLyBcdC8qIHdlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQgKi9cbi8qKioqKiovIFx0IWZ1bmN0aW9uKCkge1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH1cbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKiovIFx0Lyogd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCAqL1xuLyoqKioqKi8gXHQhZnVuY3Rpb24oKSB7XG4vKioqKioqLyBcdFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcbi8qKioqKiovIFx0XHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbi8qKioqKiovIFx0XHRcdH1cbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdFx0fTtcbi8qKioqKiovIFx0fSgpO1xuLyoqKioqKi8gXHRcbi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IHt9O1xuLy8gVGhpcyBlbnRyeSBuZWVkcyB0byBiZSB3cmFwcGVkIGluIGFuIElJRkUgYmVjYXVzZSBpdCBuZWVkcyB0byBiZSBpc29sYXRlZCBhZ2FpbnN0IG90aGVyIG1vZHVsZXMgaW4gdGhlIGNodW5rLlxuIWZ1bmN0aW9uKCkge1xuLyohKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiohKlxcXG4gICEqKiogLi9jbGllbnQtc3JjL21vZHVsZXMvbG9nZ2VyL2luZGV4LmpzICoqKiFcbiAgXFwqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbl9fd2VicGFja19yZXF1aXJlX18ucihfX3dlYnBhY2tfZXhwb3J0c19fKTtcbi8qIGhhcm1vbnkgZXhwb3J0ICovIF9fd2VicGFja19yZXF1aXJlX18uZChfX3dlYnBhY2tfZXhwb3J0c19fLCB7XG4vKiBoYXJtb255IGV4cG9ydCAqLyAgIFwiZGVmYXVsdFwiOiBmdW5jdGlvbigpIHsgcmV0dXJuIC8qIHJlZXhwb3J0IGRlZmF1bHQgZXhwb3J0IGZyb20gbmFtZWQgbW9kdWxlICovIHdlYnBhY2tfbGliX2xvZ2dpbmdfcnVudGltZV9qc19fV0VCUEFDS19JTVBPUlRFRF9NT0RVTEVfMF9fOyB9XG4vKiBoYXJtb255IGV4cG9ydCAqLyB9KTtcbi8qIGhhcm1vbnkgaW1wb3J0ICovIHZhciB3ZWJwYWNrX2xpYl9sb2dnaW5nX3J1bnRpbWVfanNfX1dFQlBBQ0tfSU1QT1JURURfTU9EVUxFXzBfXyA9IF9fd2VicGFja19yZXF1aXJlX18oLyohIHdlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svbGliL2xvZ2dpbmcvcnVudGltZS5qc1wiKTtcblxufSgpO1xudmFyIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X18gPSBleHBvcnRzO1xuZm9yKHZhciBfX3dlYnBhY2tfaV9fIGluIF9fd2VicGFja19leHBvcnRzX18pIF9fd2VicGFja19leHBvcnRfdGFyZ2V0X19bX193ZWJwYWNrX2lfX10gPSBfX3dlYnBhY2tfZXhwb3J0c19fW19fd2VicGFja19pX19dO1xuaWYoX193ZWJwYWNrX2V4cG9ydHNfXy5fX2VzTW9kdWxlKSBPYmplY3QuZGVmaW5lUHJvcGVydHkoX193ZWJwYWNrX2V4cG9ydF90YXJnZXRfXywgXCJfX2VzTW9kdWxlXCIsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyB9KSgpXG47IiwiZnVuY3Rpb24gX3R5cGVvZihvKSB7IFwiQGJhYmVsL2hlbHBlcnMgLSB0eXBlb2ZcIjsgcmV0dXJuIF90eXBlb2YgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBcInN5bWJvbFwiID09IHR5cGVvZiBTeW1ib2wuaXRlcmF0b3IgPyBmdW5jdGlvbiAobykgeyByZXR1cm4gdHlwZW9mIG87IH0gOiBmdW5jdGlvbiAobykgeyByZXR1cm4gbyAmJiBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIFN5bWJvbCAmJiBvLmNvbnN0cnVjdG9yID09PSBTeW1ib2wgJiYgbyAhPT0gU3ltYm9sLnByb3RvdHlwZSA/IFwic3ltYm9sXCIgOiB0eXBlb2YgbzsgfSwgX3R5cGVvZihvKTsgfVxuZnVuY3Rpb24gb3duS2V5cyhlLCByKSB7IHZhciB0ID0gT2JqZWN0LmtleXMoZSk7IGlmIChPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKSB7IHZhciBvID0gT2JqZWN0LmdldE93blByb3BlcnR5U3ltYm9scyhlKTsgciAmJiAobyA9IG8uZmlsdGVyKGZ1bmN0aW9uIChyKSB7IHJldHVybiBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKGUsIHIpLmVudW1lcmFibGU7IH0pKSwgdC5wdXNoLmFwcGx5KHQsIG8pOyB9IHJldHVybiB0OyB9XG5mdW5jdGlvbiBfb2JqZWN0U3ByZWFkKGUpIHsgZm9yICh2YXIgciA9IDE7IHIgPCBhcmd1bWVudHMubGVuZ3RoOyByKyspIHsgdmFyIHQgPSBudWxsICE9IGFyZ3VtZW50c1tyXSA/IGFyZ3VtZW50c1tyXSA6IHt9OyByICUgMiA/IG93bktleXMoT2JqZWN0KHQpLCAhMCkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBfZGVmaW5lUHJvcGVydHkoZSwgciwgdFtyXSk7IH0pIDogT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcnMgPyBPYmplY3QuZGVmaW5lUHJvcGVydGllcyhlLCBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9ycyh0KSkgOiBvd25LZXlzKE9iamVjdCh0KSkuZm9yRWFjaChmdW5jdGlvbiAocikgeyBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgciwgT2JqZWN0LmdldE93blByb3BlcnR5RGVzY3JpcHRvcih0LCByKSk7IH0pOyB9IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfZGVmaW5lUHJvcGVydHkoZSwgciwgdCkgeyByZXR1cm4gKHIgPSBfdG9Qcm9wZXJ0eUtleShyKSkgaW4gZSA/IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCByLCB7IHZhbHVlOiB0LCBlbnVtZXJhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCwgd3JpdGFibGU6ICEwIH0pIDogZVtyXSA9IHQsIGU7IH1cbmZ1bmN0aW9uIF90b1Byb3BlcnR5S2V5KHQpIHsgdmFyIGkgPSBfdG9QcmltaXRpdmUodCwgXCJzdHJpbmdcIik7IHJldHVybiBcInN5bWJvbFwiID09IF90eXBlb2YoaSkgPyBpIDogaSArIFwiXCI7IH1cbmZ1bmN0aW9uIF90b1ByaW1pdGl2ZSh0LCByKSB7IGlmIChcIm9iamVjdFwiICE9IF90eXBlb2YodCkgfHwgIXQpIHJldHVybiB0OyB2YXIgZSA9IHRbU3ltYm9sLnRvUHJpbWl0aXZlXTsgaWYgKHZvaWQgMCAhPT0gZSkgeyB2YXIgaSA9IGUuY2FsbCh0LCByIHx8IFwiZGVmYXVsdFwiKTsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZihpKSkgcmV0dXJuIGk7IHRocm93IG5ldyBUeXBlRXJyb3IoXCJAQHRvUHJpbWl0aXZlIG11c3QgcmV0dXJuIGEgcHJpbWl0aXZlIHZhbHVlLlwiKTsgfSByZXR1cm4gKFwic3RyaW5nXCIgPT09IHIgPyBTdHJpbmcgOiBOdW1iZXIpKHQpOyB9XG4vLyBUaGUgZXJyb3Igb3ZlcmxheSBpcyBpbnNwaXJlZCAoYW5kIG1vc3RseSBjb3BpZWQpIGZyb20gQ3JlYXRlIFJlYWN0IEFwcCAoaHR0cHM6Ly9naXRodWIuY29tL2ZhY2Vib29raW5jdWJhdG9yL2NyZWF0ZS1yZWFjdC1hcHApXG4vLyBUaGV5LCBpbiB0dXJuLCBnb3QgaW5zcGlyZWQgYnkgd2VicGFjay1ob3QtbWlkZGxld2FyZSAoaHR0cHM6Ly9naXRodWIuY29tL2dsZW5qYW1pbi93ZWJwYWNrLWhvdC1taWRkbGV3YXJlKS5cblxuaW1wb3J0IGFuc2lIVE1MIGZyb20gXCJhbnNpLWh0bWwtY29tbXVuaXR5XCI7XG5cbi8qKlxuICogQHR5cGUgeyhpbnB1dDogc3RyaW5nLCBwb3NpdGlvbjogbnVtYmVyKSA9PiBzdHJpbmd9XG4gKi9cbnZhciBnZXRDb2RlUG9pbnQgPSBTdHJpbmcucHJvdG90eXBlLmNvZGVQb2ludEF0ID8gZnVuY3Rpb24gKGlucHV0LCBwb3NpdGlvbikge1xuICByZXR1cm4gaW5wdXQuY29kZVBvaW50QXQocG9zaXRpb24pO1xufSA6IGZ1bmN0aW9uIChpbnB1dCwgcG9zaXRpb24pIHtcbiAgcmV0dXJuIChpbnB1dC5jaGFyQ29kZUF0KHBvc2l0aW9uKSAtIDB4ZDgwMCkgKiAweDQwMCArIGlucHV0LmNoYXJDb2RlQXQocG9zaXRpb24gKyAxKSAtIDB4ZGMwMCArIDB4MTAwMDA7XG59O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSBtYWNyb1RleHRcbiAqIEBwYXJhbSB7UmVnRXhwfSBtYWNyb1JlZ0V4cFxuICogQHBhcmFtIHsoaW5wdXQ6IHN0cmluZykgPT4gc3RyaW5nfSBtYWNyb1JlcGxhY2VyXG4gKiBAcmV0dXJucyB7c3RyaW5nfVxuICovXG52YXIgcmVwbGFjZVVzaW5nUmVnRXhwID0gZnVuY3Rpb24gcmVwbGFjZVVzaW5nUmVnRXhwKG1hY3JvVGV4dCwgbWFjcm9SZWdFeHAsIG1hY3JvUmVwbGFjZXIpIHtcbiAgbWFjcm9SZWdFeHAubGFzdEluZGV4ID0gMDtcbiAgdmFyIHJlcGxhY2VNYXRjaCA9IG1hY3JvUmVnRXhwLmV4ZWMobWFjcm9UZXh0KTtcbiAgdmFyIHJlcGxhY2VSZXN1bHQ7XG4gIGlmIChyZXBsYWNlTWF0Y2gpIHtcbiAgICByZXBsYWNlUmVzdWx0ID0gXCJcIjtcbiAgICB2YXIgcmVwbGFjZUxhc3RJbmRleCA9IDA7XG4gICAgZG8ge1xuICAgICAgaWYgKHJlcGxhY2VMYXN0SW5kZXggIT09IHJlcGxhY2VNYXRjaC5pbmRleCkge1xuICAgICAgICByZXBsYWNlUmVzdWx0ICs9IG1hY3JvVGV4dC5zdWJzdHJpbmcocmVwbGFjZUxhc3RJbmRleCwgcmVwbGFjZU1hdGNoLmluZGV4KTtcbiAgICAgIH1cbiAgICAgIHZhciByZXBsYWNlSW5wdXQgPSByZXBsYWNlTWF0Y2hbMF07XG4gICAgICByZXBsYWNlUmVzdWx0ICs9IG1hY3JvUmVwbGFjZXIocmVwbGFjZUlucHV0KTtcbiAgICAgIHJlcGxhY2VMYXN0SW5kZXggPSByZXBsYWNlTWF0Y2guaW5kZXggKyByZXBsYWNlSW5wdXQubGVuZ3RoO1xuICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWNvbmQtYXNzaWduXG4gICAgfSB3aGlsZSAocmVwbGFjZU1hdGNoID0gbWFjcm9SZWdFeHAuZXhlYyhtYWNyb1RleHQpKTtcbiAgICBpZiAocmVwbGFjZUxhc3RJbmRleCAhPT0gbWFjcm9UZXh0Lmxlbmd0aCkge1xuICAgICAgcmVwbGFjZVJlc3VsdCArPSBtYWNyb1RleHQuc3Vic3RyaW5nKHJlcGxhY2VMYXN0SW5kZXgpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXBsYWNlUmVzdWx0ID0gbWFjcm9UZXh0O1xuICB9XG4gIHJldHVybiByZXBsYWNlUmVzdWx0O1xufTtcbnZhciByZWZlcmVuY2VzID0ge1xuICBcIjxcIjogXCImbHQ7XCIsXG4gIFwiPlwiOiBcIiZndDtcIixcbiAgJ1wiJzogXCImcXVvdDtcIixcbiAgXCInXCI6IFwiJmFwb3M7XCIsXG4gIFwiJlwiOiBcIiZhbXA7XCJcbn07XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHRleHQgdGV4dFxuICogQHJldHVybnMge3N0cmluZ31cbiAqL1xuZnVuY3Rpb24gZW5jb2RlKHRleHQpIHtcbiAgaWYgKCF0ZXh0KSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgcmV0dXJuIHJlcGxhY2VVc2luZ1JlZ0V4cCh0ZXh0LCAvWzw+J1wiJl0vZywgZnVuY3Rpb24gKGlucHV0KSB7XG4gICAgdmFyIHJlc3VsdCA9IHJlZmVyZW5jZXNbaW5wdXRdO1xuICAgIGlmICghcmVzdWx0KSB7XG4gICAgICB2YXIgY29kZSA9IGlucHV0Lmxlbmd0aCA+IDEgPyBnZXRDb2RlUG9pbnQoaW5wdXQsIDApIDogaW5wdXQuY2hhckNvZGVBdCgwKTtcbiAgICAgIHJlc3VsdCA9IFwiJiNcIi5jb25jYXQoY29kZSwgXCI7XCIpO1xuICAgIH1cbiAgICByZXR1cm4gcmVzdWx0O1xuICB9KTtcbn1cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBTdGF0ZURlZmluaXRpb25zXG4gKiBAcHJvcGVydHkge3tbZXZlbnQ6IHN0cmluZ106IHsgdGFyZ2V0OiBzdHJpbmc7IGFjdGlvbnM/OiBBcnJheTxzdHJpbmc+IH19fSBbb25dXG4gKi9cblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBPcHRpb25zXG4gKiBAcHJvcGVydHkge3tbc3RhdGU6IHN0cmluZ106IFN0YXRlRGVmaW5pdGlvbnN9fSBzdGF0ZXNcbiAqIEBwcm9wZXJ0eSB7b2JqZWN0fSBjb250ZXh0O1xuICogQHByb3BlcnR5IHtzdHJpbmd9IGluaXRpYWxcbiAqL1xuXG4vKipcbiAqIEB0eXBlZGVmIHtPYmplY3R9IEltcGxlbWVudGF0aW9uXG4gKiBAcHJvcGVydHkge3tbYWN0aW9uTmFtZTogc3RyaW5nXTogKGN0eDogb2JqZWN0LCBldmVudDogYW55KSA9PiBvYmplY3R9fSBhY3Rpb25zXG4gKi9cblxuLyoqXG4gKiBBIHNpbXBsaWZpZWQgYGNyZWF0ZU1hY2hpbmVgIGZyb20gYEB4c3RhdGUvZnNtYCB3aXRoIHRoZSBmb2xsb3dpbmcgZGlmZmVyZW5jZXM6XG4gKlxuICogIC0gdGhlIHJldHVybmVkIG1hY2hpbmUgaXMgdGVjaG5pY2FsbHkgYSBcInNlcnZpY2VcIi4gTm8gYGludGVycHJldChtYWNoaW5lKS5zdGFydCgpYCBpcyBuZWVkZWQuXG4gKiAgLSB0aGUgc3RhdGUgZGVmaW5pdGlvbiBvbmx5IHN1cHBvcnQgYG9uYCBhbmQgdGFyZ2V0IG11c3QgYmUgZGVjbGFyZWQgd2l0aCB7IHRhcmdldDogJ25leHRTdGF0ZScsIGFjdGlvbnM6IFtdIH0gZXhwbGljaXRseS5cbiAqICAtIGV2ZW50IHBhc3NlZCB0byBgc2VuZGAgbXVzdCBiZSBhbiBvYmplY3Qgd2l0aCBgdHlwZWAgcHJvcGVydHkuXG4gKiAgLSBhY3Rpb25zIGltcGxlbWVudGF0aW9uIHdpbGwgYmUgW2Fzc2lnbiBhY3Rpb25dKGh0dHBzOi8veHN0YXRlLmpzLm9yZy9kb2NzL2d1aWRlcy9jb250ZXh0Lmh0bWwjYXNzaWduLWFjdGlvbikgaWYgeW91IHJldHVybiBhbnkgdmFsdWUuXG4gKiAgRG8gbm90IHJldHVybiBhbnl0aGluZyBpZiB5b3UganVzdCB3YW50IHRvIGludm9rZSBzaWRlIGVmZmVjdC5cbiAqXG4gKiBUaGUgZ29hbCBvZiB0aGlzIGN1c3RvbSBmdW5jdGlvbiBpcyB0byBhdm9pZCBpbnN0YWxsaW5nIHRoZSBlbnRpcmUgYCd4c3RhdGUvZnNtJ2AgcGFja2FnZSwgd2hpbGUgZW5hYmxpbmcgbW9kZWxpbmcgdXNpbmdcbiAqIHN0YXRlIG1hY2hpbmUuIFlvdSBjYW4gY29weSB0aGUgZmlyc3QgcGFyYW1ldGVyIGludG8gdGhlIGVkaXRvciBhdCBodHRwczovL3N0YXRlbHkuYWkvdml6IHRvIHZpc3VhbGl6ZSB0aGUgc3RhdGUgbWFjaGluZS5cbiAqXG4gKiBAcGFyYW0ge09wdGlvbnN9IG9wdGlvbnNcbiAqIEBwYXJhbSB7SW1wbGVtZW50YXRpb259IGltcGxlbWVudGF0aW9uXG4gKi9cbmZ1bmN0aW9uIGNyZWF0ZU1hY2hpbmUoX3JlZiwgX3JlZjIpIHtcbiAgdmFyIHN0YXRlcyA9IF9yZWYuc3RhdGVzLFxuICAgIGNvbnRleHQgPSBfcmVmLmNvbnRleHQsXG4gICAgaW5pdGlhbCA9IF9yZWYuaW5pdGlhbDtcbiAgdmFyIGFjdGlvbnMgPSBfcmVmMi5hY3Rpb25zO1xuICB2YXIgY3VycmVudFN0YXRlID0gaW5pdGlhbDtcbiAgdmFyIGN1cnJlbnRDb250ZXh0ID0gY29udGV4dDtcbiAgcmV0dXJuIHtcbiAgICBzZW5kOiBmdW5jdGlvbiBzZW5kKGV2ZW50KSB7XG4gICAgICB2YXIgY3VycmVudFN0YXRlT24gPSBzdGF0ZXNbY3VycmVudFN0YXRlXS5vbjtcbiAgICAgIHZhciB0cmFuc2l0aW9uQ29uZmlnID0gY3VycmVudFN0YXRlT24gJiYgY3VycmVudFN0YXRlT25bZXZlbnQudHlwZV07XG4gICAgICBpZiAodHJhbnNpdGlvbkNvbmZpZykge1xuICAgICAgICBjdXJyZW50U3RhdGUgPSB0cmFuc2l0aW9uQ29uZmlnLnRhcmdldDtcbiAgICAgICAgaWYgKHRyYW5zaXRpb25Db25maWcuYWN0aW9ucykge1xuICAgICAgICAgIHRyYW5zaXRpb25Db25maWcuYWN0aW9ucy5mb3JFYWNoKGZ1bmN0aW9uIChhY3ROYW1lKSB7XG4gICAgICAgICAgICB2YXIgYWN0aW9uSW1wbCA9IGFjdGlvbnNbYWN0TmFtZV07XG4gICAgICAgICAgICB2YXIgbmV4dENvbnRleHRWYWx1ZSA9IGFjdGlvbkltcGwgJiYgYWN0aW9uSW1wbChjdXJyZW50Q29udGV4dCwgZXZlbnQpO1xuICAgICAgICAgICAgaWYgKG5leHRDb250ZXh0VmFsdWUpIHtcbiAgICAgICAgICAgICAgY3VycmVudENvbnRleHQgPSBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIGN1cnJlbnRDb250ZXh0KSwgbmV4dENvbnRleHRWYWx1ZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH07XG59XG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gU2hvd092ZXJsYXlEYXRhXG4gKiBAcHJvcGVydHkgeyd3YXJuaW5nJyB8ICdlcnJvcid9IGxldmVsXG4gKiBAcHJvcGVydHkge0FycmF5PHN0cmluZyAgfCB7IG1vZHVsZUlkZW50aWZpZXI/OiBzdHJpbmcsIG1vZHVsZU5hbWU/OiBzdHJpbmcsIGxvYz86IHN0cmluZywgbWVzc2FnZT86IHN0cmluZyB9Pn0gbWVzc2FnZXNcbiAqIEBwcm9wZXJ0eSB7J2J1aWxkJyB8ICdydW50aW1lJ30gbWVzc2FnZVNvdXJjZVxuICovXG5cbi8qKlxuICogQHR5cGVkZWYge09iamVjdH0gQ3JlYXRlT3ZlcmxheU1hY2hpbmVPcHRpb25zXG4gKiBAcHJvcGVydHkgeyhkYXRhOiBTaG93T3ZlcmxheURhdGEpID0+IHZvaWR9IHNob3dPdmVybGF5XG4gKiBAcHJvcGVydHkgeygpID0+IHZvaWR9IGhpZGVPdmVybGF5XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge0NyZWF0ZU92ZXJsYXlNYWNoaW5lT3B0aW9uc30gb3B0aW9uc1xuICovXG52YXIgY3JlYXRlT3ZlcmxheU1hY2hpbmUgPSBmdW5jdGlvbiBjcmVhdGVPdmVybGF5TWFjaGluZShvcHRpb25zKSB7XG4gIHZhciBoaWRlT3ZlcmxheSA9IG9wdGlvbnMuaGlkZU92ZXJsYXksXG4gICAgc2hvd092ZXJsYXkgPSBvcHRpb25zLnNob3dPdmVybGF5O1xuICByZXR1cm4gY3JlYXRlTWFjaGluZSh7XG4gICAgaW5pdGlhbDogXCJoaWRkZW5cIixcbiAgICBjb250ZXh0OiB7XG4gICAgICBsZXZlbDogXCJlcnJvclwiLFxuICAgICAgbWVzc2FnZXM6IFtdLFxuICAgICAgbWVzc2FnZVNvdXJjZTogXCJidWlsZFwiXG4gICAgfSxcbiAgICBzdGF0ZXM6IHtcbiAgICAgIGhpZGRlbjoge1xuICAgICAgICBvbjoge1xuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcInNldE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIFJVTlRJTUVfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5UnVudGltZUVycm9yXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJzZXRNZXNzYWdlc1wiLCBcInNob3dPdmVybGF5XCJdXG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICB9LFxuICAgICAgZGlzcGxheUJ1aWxkRXJyb3I6IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBESVNNSVNTOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJkaXNtaXNzTWVzc2FnZXNcIiwgXCJoaWRlT3ZlcmxheVwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgQlVJTERfRVJST1I6IHtcbiAgICAgICAgICAgIHRhcmdldDogXCJkaXNwbGF5QnVpbGRFcnJvclwiLFxuICAgICAgICAgICAgYWN0aW9uczogW1wiYXBwZW5kTWVzc2FnZXNcIiwgXCJzaG93T3ZlcmxheVwiXVxuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgfSxcbiAgICAgIGRpc3BsYXlSdW50aW1lRXJyb3I6IHtcbiAgICAgICAgb246IHtcbiAgICAgICAgICBESVNNSVNTOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiaGlkZGVuXCIsXG4gICAgICAgICAgICBhY3Rpb25zOiBbXCJkaXNtaXNzTWVzc2FnZXNcIiwgXCJoaWRlT3ZlcmxheVwiXVxuICAgICAgICAgIH0sXG4gICAgICAgICAgUlVOVElNRV9FUlJPUjoge1xuICAgICAgICAgICAgdGFyZ2V0OiBcImRpc3BsYXlSdW50aW1lRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcImFwcGVuZE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9LFxuICAgICAgICAgIEJVSUxEX0VSUk9SOiB7XG4gICAgICAgICAgICB0YXJnZXQ6IFwiZGlzcGxheUJ1aWxkRXJyb3JcIixcbiAgICAgICAgICAgIGFjdGlvbnM6IFtcInNldE1lc3NhZ2VzXCIsIFwic2hvd092ZXJsYXlcIl1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICB9XG4gIH0sIHtcbiAgICBhY3Rpb25zOiB7XG4gICAgICBkaXNtaXNzTWVzc2FnZXM6IGZ1bmN0aW9uIGRpc21pc3NNZXNzYWdlcygpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogW10sXG4gICAgICAgICAgbGV2ZWw6IFwiZXJyb3JcIixcbiAgICAgICAgICBtZXNzYWdlU291cmNlOiBcImJ1aWxkXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBhcHBlbmRNZXNzYWdlczogZnVuY3Rpb24gYXBwZW5kTWVzc2FnZXMoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogY29udGV4dC5tZXNzYWdlcy5jb25jYXQoZXZlbnQubWVzc2FnZXMpLFxuICAgICAgICAgIGxldmVsOiBldmVudC5sZXZlbCB8fCBjb250ZXh0LmxldmVsLFxuICAgICAgICAgIG1lc3NhZ2VTb3VyY2U6IGV2ZW50LnR5cGUgPT09IFwiUlVOVElNRV9FUlJPUlwiID8gXCJydW50aW1lXCIgOiBcImJ1aWxkXCJcbiAgICAgICAgfTtcbiAgICAgIH0sXG4gICAgICBzZXRNZXNzYWdlczogZnVuY3Rpb24gc2V0TWVzc2FnZXMoY29udGV4dCwgZXZlbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICBtZXNzYWdlczogZXZlbnQubWVzc2FnZXMsXG4gICAgICAgICAgbGV2ZWw6IGV2ZW50LmxldmVsIHx8IGNvbnRleHQubGV2ZWwsXG4gICAgICAgICAgbWVzc2FnZVNvdXJjZTogZXZlbnQudHlwZSA9PT0gXCJSVU5USU1FX0VSUk9SXCIgPyBcInJ1bnRpbWVcIiA6IFwiYnVpbGRcIlxuICAgICAgICB9O1xuICAgICAgfSxcbiAgICAgIGhpZGVPdmVybGF5OiBoaWRlT3ZlcmxheSxcbiAgICAgIHNob3dPdmVybGF5OiBzaG93T3ZlcmxheVxuICAgIH1cbiAgfSk7XG59O1xuXG4vKipcbiAqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnJvclxuICovXG52YXIgcGFyc2VFcnJvclRvU3RhY2tzID0gZnVuY3Rpb24gcGFyc2VFcnJvclRvU3RhY2tzKGVycm9yKSB7XG4gIGlmICghZXJyb3IgfHwgIShlcnJvciBpbnN0YW5jZW9mIEVycm9yKSkge1xuICAgIHRocm93IG5ldyBFcnJvcihcInBhcnNlRXJyb3JUb1N0YWNrcyBleHBlY3RzIEVycm9yIG9iamVjdFwiKTtcbiAgfVxuICBpZiAodHlwZW9mIGVycm9yLnN0YWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGVycm9yLnN0YWNrLnNwbGl0KFwiXFxuXCIpLmZpbHRlcihmdW5jdGlvbiAoc3RhY2spIHtcbiAgICAgIHJldHVybiBzdGFjayAhPT0gXCJFcnJvcjogXCIuY29uY2F0KGVycm9yLm1lc3NhZ2UpO1xuICAgIH0pO1xuICB9XG59O1xuXG4vKipcbiAqIEBjYWxsYmFjayBFcnJvckNhbGxiYWNrXG4gKiBAcGFyYW0ge0Vycm9yRXZlbnR9IGVycm9yXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuXG4vKipcbiAqIEBwYXJhbSB7RXJyb3JDYWxsYmFja30gY2FsbGJhY2tcbiAqL1xudmFyIGxpc3RlblRvUnVudGltZUVycm9yID0gZnVuY3Rpb24gbGlzdGVuVG9SdW50aW1lRXJyb3IoY2FsbGJhY2spIHtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJlcnJvclwiLCBjYWxsYmFjayk7XG4gIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwiZXJyb3JcIiwgY2FsbGJhY2spO1xuICB9O1xufTtcblxuLyoqXG4gKiBAY2FsbGJhY2sgVW5oYW5kbGVkUmVqZWN0aW9uQ2FsbGJhY2tcbiAqIEBwYXJhbSB7UHJvbWlzZVJlamVjdGlvbkV2ZW50fSByZWplY3Rpb25FdmVudFxuICogQHJldHVybnMge3ZvaWR9XG4gKi9cblxuLyoqXG4gKiBAcGFyYW0ge1VuaGFuZGxlZFJlamVjdGlvbkNhbGxiYWNrfSBjYWxsYmFja1xuICovXG52YXIgbGlzdGVuVG9VbmhhbmRsZWRSZWplY3Rpb24gPSBmdW5jdGlvbiBsaXN0ZW5Ub1VuaGFuZGxlZFJlamVjdGlvbihjYWxsYmFjaykge1xuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInVuaGFuZGxlZHJlamVjdGlvblwiLCBjYWxsYmFjayk7XG4gIHJldHVybiBmdW5jdGlvbiBjbGVhbnVwKCkge1xuICAgIHdpbmRvdy5yZW1vdmVFdmVudExpc3RlbmVyKFwidW5oYW5kbGVkcmVqZWN0aW9uXCIsIGNhbGxiYWNrKTtcbiAgfTtcbn07XG5cbi8vIFN0eWxlcyBhcmUgaW5zcGlyZWQgYnkgYHJlYWN0LWVycm9yLW92ZXJsYXlgXG5cbnZhciBtc2dTdHlsZXMgPSB7XG4gIGVycm9yOiB7XG4gICAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMjA2LCAxNywgMzgsIDAuMSlcIixcbiAgICBjb2xvcjogXCIjZmNjZmNmXCJcbiAgfSxcbiAgd2FybmluZzoge1xuICAgIGJhY2tncm91bmRDb2xvcjogXCJyZ2JhKDI1MSwgMjQ1LCAxODAsIDAuMSlcIixcbiAgICBjb2xvcjogXCIjZmJmNWI0XCJcbiAgfVxufTtcbnZhciBpZnJhbWVTdHlsZSA9IHtcbiAgcG9zaXRpb246IFwiZml4ZWRcIixcbiAgdG9wOiAwLFxuICBsZWZ0OiAwLFxuICByaWdodDogMCxcbiAgYm90dG9tOiAwLFxuICB3aWR0aDogXCIxMDB2d1wiLFxuICBoZWlnaHQ6IFwiMTAwdmhcIixcbiAgYm9yZGVyOiBcIm5vbmVcIixcbiAgXCJ6LWluZGV4XCI6IDk5OTk5OTk5OTlcbn07XG52YXIgY29udGFpbmVyU3R5bGUgPSB7XG4gIHBvc2l0aW9uOiBcImZpeGVkXCIsXG4gIGJveFNpemluZzogXCJib3JkZXItYm94XCIsXG4gIGxlZnQ6IDAsXG4gIHRvcDogMCxcbiAgcmlnaHQ6IDAsXG4gIGJvdHRvbTogMCxcbiAgd2lkdGg6IFwiMTAwdndcIixcbiAgaGVpZ2h0OiBcIjEwMHZoXCIsXG4gIGZvbnRTaXplOiBcImxhcmdlXCIsXG4gIHBhZGRpbmc6IFwiMnJlbSAycmVtIDRyZW0gMnJlbVwiLFxuICBsaW5lSGVpZ2h0OiBcIjEuMlwiLFxuICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXG4gIG92ZXJmbG93OiBcImF1dG9cIixcbiAgYmFja2dyb3VuZENvbG9yOiBcInJnYmEoMCwgMCwgMCwgMC45KVwiLFxuICBjb2xvcjogXCJ3aGl0ZVwiXG59O1xudmFyIGhlYWRlclN0eWxlID0ge1xuICBjb2xvcjogXCIjZTgzYjQ2XCIsXG4gIGZvbnRTaXplOiBcIjJlbVwiLFxuICB3aGl0ZVNwYWNlOiBcInByZS13cmFwXCIsXG4gIGZvbnRGYW1pbHk6IFwic2Fucy1zZXJpZlwiLFxuICBtYXJnaW46IFwiMCAycmVtIDJyZW0gMFwiLFxuICBmbGV4OiBcIjAgMCBhdXRvXCIsXG4gIG1heEhlaWdodDogXCI1MCVcIixcbiAgb3ZlcmZsb3c6IFwiYXV0b1wiXG59O1xudmFyIGRpc21pc3NCdXR0b25TdHlsZSA9IHtcbiAgY29sb3I6IFwiI2ZmZmZmZlwiLFxuICBsaW5lSGVpZ2h0OiBcIjFyZW1cIixcbiAgZm9udFNpemU6IFwiMS41cmVtXCIsXG4gIHBhZGRpbmc6IFwiMXJlbVwiLFxuICBjdXJzb3I6IFwicG9pbnRlclwiLFxuICBwb3NpdGlvbjogXCJhYnNvbHV0ZVwiLFxuICByaWdodDogMCxcbiAgdG9wOiAwLFxuICBiYWNrZ3JvdW5kQ29sb3I6IFwidHJhbnNwYXJlbnRcIixcbiAgYm9yZGVyOiBcIm5vbmVcIlxufTtcbnZhciBtc2dUeXBlU3R5bGUgPSB7XG4gIGNvbG9yOiBcIiNlODNiNDZcIixcbiAgZm9udFNpemU6IFwiMS4yZW1cIixcbiAgbWFyZ2luQm90dG9tOiBcIjFyZW1cIixcbiAgZm9udEZhbWlseTogXCJzYW5zLXNlcmlmXCJcbn07XG52YXIgbXNnVGV4dFN0eWxlID0ge1xuICBsaW5lSGVpZ2h0OiBcIjEuNVwiLFxuICBmb250U2l6ZTogXCIxcmVtXCIsXG4gIGZvbnRGYW1pbHk6IFwiTWVubG8sIENvbnNvbGFzLCBtb25vc3BhY2VcIlxufTtcblxuLy8gQU5TSSBIVE1MXG5cbnZhciBjb2xvcnMgPSB7XG4gIHJlc2V0OiBbXCJ0cmFuc3BhcmVudFwiLCBcInRyYW5zcGFyZW50XCJdLFxuICBibGFjazogXCIxODE4MThcIixcbiAgcmVkOiBcIkUzNjA0OVwiLFxuICBncmVlbjogXCJCM0NCNzRcIixcbiAgeWVsbG93OiBcIkZGRDA4MFwiLFxuICBibHVlOiBcIjdDQUZDMlwiLFxuICBtYWdlbnRhOiBcIjdGQUNDQVwiLFxuICBjeWFuOiBcIkMzQzJFRlwiLFxuICBsaWdodGdyZXk6IFwiRUJFN0UzXCIsXG4gIGRhcmtncmV5OiBcIjZENzg5MVwiXG59O1xuYW5zaUhUTUwuc2V0Q29sb3JzKGNvbG9ycyk7XG5cbi8qKlxuICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAqIEBwYXJhbSB7c3RyaW5nICB8IHsgZmlsZT86IHN0cmluZywgbW9kdWxlTmFtZT86IHN0cmluZywgbG9jPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nOyBzdGFjaz86IHN0cmluZ1tdIH19IGl0ZW1cbiAqIEByZXR1cm5zIHt7IGhlYWRlcjogc3RyaW5nLCBib2R5OiBzdHJpbmcgfX1cbiAqL1xudmFyIGZvcm1hdFByb2JsZW0gPSBmdW5jdGlvbiBmb3JtYXRQcm9ibGVtKHR5cGUsIGl0ZW0pIHtcbiAgdmFyIGhlYWRlciA9IHR5cGUgPT09IFwid2FybmluZ1wiID8gXCJXQVJOSU5HXCIgOiBcIkVSUk9SXCI7XG4gIHZhciBib2R5ID0gXCJcIjtcbiAgaWYgKHR5cGVvZiBpdGVtID09PSBcInN0cmluZ1wiKSB7XG4gICAgYm9keSArPSBpdGVtO1xuICB9IGVsc2Uge1xuICAgIHZhciBmaWxlID0gaXRlbS5maWxlIHx8IFwiXCI7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5lc3RlZC10ZXJuYXJ5XG4gICAgdmFyIG1vZHVsZU5hbWUgPSBpdGVtLm1vZHVsZU5hbWUgPyBpdGVtLm1vZHVsZU5hbWUuaW5kZXhPZihcIiFcIikgIT09IC0xID8gXCJcIi5jb25jYXQoaXRlbS5tb2R1bGVOYW1lLnJlcGxhY2UoL14oXFxzfFxcUykqIS8sIFwiXCIpLCBcIiAoXCIpLmNvbmNhdChpdGVtLm1vZHVsZU5hbWUsIFwiKVwiKSA6IFwiXCIuY29uY2F0KGl0ZW0ubW9kdWxlTmFtZSkgOiBcIlwiO1xuICAgIHZhciBsb2MgPSBpdGVtLmxvYztcbiAgICBoZWFkZXIgKz0gXCJcIi5jb25jYXQobW9kdWxlTmFtZSB8fCBmaWxlID8gXCIgaW4gXCIuY29uY2F0KG1vZHVsZU5hbWUgPyBcIlwiLmNvbmNhdChtb2R1bGVOYW1lKS5jb25jYXQoZmlsZSA/IFwiIChcIi5jb25jYXQoZmlsZSwgXCIpXCIpIDogXCJcIikgOiBmaWxlKS5jb25jYXQobG9jID8gXCIgXCIuY29uY2F0KGxvYykgOiBcIlwiKSA6IFwiXCIpO1xuICAgIGJvZHkgKz0gaXRlbS5tZXNzYWdlIHx8IFwiXCI7XG4gIH1cbiAgaWYgKEFycmF5LmlzQXJyYXkoaXRlbS5zdGFjaykpIHtcbiAgICBpdGVtLnN0YWNrLmZvckVhY2goZnVuY3Rpb24gKHN0YWNrKSB7XG4gICAgICBpZiAodHlwZW9mIHN0YWNrID09PSBcInN0cmluZ1wiKSB7XG4gICAgICAgIGJvZHkgKz0gXCJcXHJcXG5cIi5jb25jYXQoc3RhY2spO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG4gIHJldHVybiB7XG4gICAgaGVhZGVyOiBoZWFkZXIsXG4gICAgYm9keTogYm9keVxuICB9O1xufTtcblxuLyoqXG4gKiBAdHlwZWRlZiB7T2JqZWN0fSBDcmVhdGVPdmVybGF5T3B0aW9uc1xuICogQHByb3BlcnR5IHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gKiBAcHJvcGVydHkge2Jvb2xlYW4gfCAoZXJyb3I6IEVycm9yKSA9PiB2b2lkfSBbY2F0Y2hSdW50aW1lRXJyb3JdXG4gKi9cblxuLyoqXG4gKlxuICogQHBhcmFtIHtDcmVhdGVPdmVybGF5T3B0aW9uc30gb3B0aW9uc1xuICovXG52YXIgY3JlYXRlT3ZlcmxheSA9IGZ1bmN0aW9uIGNyZWF0ZU92ZXJsYXkob3B0aW9ucykge1xuICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50IHwgbnVsbCB8IHVuZGVmaW5lZH0gKi9cbiAgdmFyIGlmcmFtZUNvbnRhaW5lckVsZW1lbnQ7XG4gIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnQgfCBudWxsIHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgY29udGFpbmVyRWxlbWVudDtcbiAgLyoqIEB0eXBlIHtIVE1MRGl2RWxlbWVudCB8IG51bGwgfCB1bmRlZmluZWR9ICovXG4gIHZhciBoZWFkZXJFbGVtZW50O1xuICAvKiogQHR5cGUge0FycmF5PChlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gdm9pZD59ICovXG4gIHZhciBvbkxvYWRRdWV1ZSA9IFtdO1xuICAvKiogQHR5cGUge1RydXN0ZWRUeXBlUG9saWN5IHwgdW5kZWZpbmVkfSAqL1xuICB2YXIgb3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeTtcblxuICAvKipcbiAgICpcbiAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgKiBAcGFyYW0ge0NTU1N0eWxlRGVjbGFyYXRpb259IHN0eWxlXG4gICAqL1xuICBmdW5jdGlvbiBhcHBseVN0eWxlKGVsZW1lbnQsIHN0eWxlKSB7XG4gICAgT2JqZWN0LmtleXMoc3R5bGUpLmZvckVhY2goZnVuY3Rpb24gKHByb3ApIHtcbiAgICAgIGVsZW1lbnQuc3R5bGVbcHJvcF0gPSBzdHlsZVtwcm9wXTtcbiAgICB9KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAgICovXG4gIGZ1bmN0aW9uIGNyZWF0ZUNvbnRhaW5lcih0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKSB7XG4gICAgLy8gRW5hYmxlIFRydXN0ZWQgVHlwZXMgaWYgdGhleSBhcmUgYXZhaWxhYmxlIGluIHRoZSBjdXJyZW50IGJyb3dzZXIuXG4gICAgaWYgKHdpbmRvdy50cnVzdGVkVHlwZXMpIHtcbiAgICAgIG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kgPSB3aW5kb3cudHJ1c3RlZFR5cGVzLmNyZWF0ZVBvbGljeSh0cnVzdGVkVHlwZXNQb2xpY3lOYW1lIHx8IFwid2VicGFjay1kZXYtc2VydmVyI292ZXJsYXlcIiwge1xuICAgICAgICBjcmVhdGVIVE1MOiBmdW5jdGlvbiBjcmVhdGVIVE1MKHZhbHVlKSB7XG4gICAgICAgICAgcmV0dXJuIHZhbHVlO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJpZnJhbWVcIik7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5pZCA9IFwid2VicGFjay1kZXYtc2VydmVyLWNsaWVudC1vdmVybGF5XCI7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5zcmMgPSBcImFib3V0OmJsYW5rXCI7XG4gICAgYXBwbHlTdHlsZShpZnJhbWVDb250YWluZXJFbGVtZW50LCBpZnJhbWVTdHlsZSk7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5vbmxvYWQgPSBmdW5jdGlvbiAoKSB7XG4gICAgICB2YXIgY29udGVudEVsZW1lbnQgPSAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgKC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQgPSAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgKC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudCkuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmlkID0gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXItY2xpZW50LW92ZXJsYXktZGl2XCI7XG4gICAgICBhcHBseVN0eWxlKGNvbnRlbnRFbGVtZW50LCBjb250YWluZXJTdHlsZSk7XG4gICAgICBoZWFkZXJFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgIGhlYWRlckVsZW1lbnQuaW5uZXJUZXh0ID0gXCJDb21waWxlZCB3aXRoIHByb2JsZW1zOlwiO1xuICAgICAgYXBwbHlTdHlsZShoZWFkZXJFbGVtZW50LCBoZWFkZXJTdHlsZSk7XG4gICAgICB2YXIgY2xvc2VCdXR0b25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImJ1dHRvblwiKTtcbiAgICAgIGFwcGx5U3R5bGUoY2xvc2VCdXR0b25FbGVtZW50LCBkaXNtaXNzQnV0dG9uU3R5bGUpO1xuICAgICAgY2xvc2VCdXR0b25FbGVtZW50LmlubmVyVGV4dCA9IFwiw5dcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hcmlhTGFiZWwgPSBcIkRpc21pc3NcIjtcbiAgICAgIGNsb3NlQnV0dG9uRWxlbWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tdXNlLWJlZm9yZS1kZWZpbmVcbiAgICAgICAgb3ZlcmxheVNlcnZpY2Uuc2VuZCh7XG4gICAgICAgICAgdHlwZTogXCJESVNNSVNTXCJcbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGhlYWRlckVsZW1lbnQpO1xuICAgICAgY29udGVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b25FbGVtZW50KTtcbiAgICAgIGNvbnRlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRhaW5lckVsZW1lbnQpO1xuXG4gICAgICAvKiogQHR5cGUge0RvY3VtZW50fSAqL1xuICAgICAgKC8qKiBAdHlwZSB7SFRNTElGcmFtZUVsZW1lbnR9ICovXG4gICAgICBpZnJhbWVDb250YWluZXJFbGVtZW50LmNvbnRlbnREb2N1bWVudCkuYm9keS5hcHBlbmRDaGlsZChjb250ZW50RWxlbWVudCk7XG4gICAgICBvbkxvYWRRdWV1ZS5mb3JFYWNoKGZ1bmN0aW9uIChvbkxvYWQpIHtcbiAgICAgICAgb25Mb2FkKC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovY29udGVudEVsZW1lbnQpO1xuICAgICAgfSk7XG4gICAgICBvbkxvYWRRdWV1ZSA9IFtdO1xuXG4gICAgICAvKiogQHR5cGUge0hUTUxJRnJhbWVFbGVtZW50fSAqL1xuICAgICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudC5vbmxvYWQgPSBudWxsO1xuICAgIH07XG4gICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpZnJhbWVDb250YWluZXJFbGVtZW50KTtcbiAgfVxuXG4gIC8qKlxuICAgKiBAcGFyYW0geyhlbGVtZW50OiBIVE1MRGl2RWxlbWVudCkgPT4gdm9pZH0gY2FsbGJhY2tcbiAgICogQHBhcmFtIHtzdHJpbmcgfCBudWxsfSB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lXG4gICAqL1xuICBmdW5jdGlvbiBlbnN1cmVPdmVybGF5RXhpc3RzKGNhbGxiYWNrLCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKSB7XG4gICAgaWYgKGNvbnRhaW5lckVsZW1lbnQpIHtcbiAgICAgIGNvbnRhaW5lckVsZW1lbnQuaW5uZXJIVE1MID0gb3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeSA/IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTChcIlwiKSA6IFwiXCI7XG4gICAgICAvLyBFdmVyeXRoaW5nIGlzIHJlYWR5LCBjYWxsIHRoZSBjYWxsYmFjayByaWdodCBhd2F5LlxuICAgICAgY2FsbGJhY2soY29udGFpbmVyRWxlbWVudCk7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIG9uTG9hZFF1ZXVlLnB1c2goY2FsbGJhY2spO1xuICAgIGlmIChpZnJhbWVDb250YWluZXJFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGNyZWF0ZUNvbnRhaW5lcih0cnVzdGVkVHlwZXNQb2xpY3lOYW1lKTtcbiAgfVxuXG4gIC8vIFN1Y2Nlc3NmdWwgY29tcGlsYXRpb24uXG4gIGZ1bmN0aW9uIGhpZGUoKSB7XG4gICAgaWYgKCFpZnJhbWVDb250YWluZXJFbGVtZW50KSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuXG4gICAgLy8gQ2xlYW4gdXAgYW5kIHJlc2V0IGludGVybmFsIHN0YXRlLlxuICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaWZyYW1lQ29udGFpbmVyRWxlbWVudCk7XG4gICAgaWZyYW1lQ29udGFpbmVyRWxlbWVudCA9IG51bGw7XG4gICAgY29udGFpbmVyRWxlbWVudCA9IG51bGw7XG4gIH1cblxuICAvLyBDb21waWxhdGlvbiB3aXRoIGVycm9ycyAoZS5nLiBzeW50YXggZXJyb3Igb3IgbWlzc2luZyBtb2R1bGVzKS5cbiAgLyoqXG4gICAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gICAqIEBwYXJhbSB7QXJyYXk8c3RyaW5nICB8IHsgbW9kdWxlSWRlbnRpZmllcj86IHN0cmluZywgbW9kdWxlTmFtZT86IHN0cmluZywgbG9jPzogc3RyaW5nLCBtZXNzYWdlPzogc3RyaW5nIH0+fSBtZXNzYWdlc1xuICAgKiBAcGFyYW0ge3N0cmluZyB8IG51bGx9IHRydXN0ZWRUeXBlc1BvbGljeU5hbWVcbiAgICogQHBhcmFtIHsnYnVpbGQnIHwgJ3J1bnRpbWUnfSBtZXNzYWdlU291cmNlXG4gICAqL1xuICBmdW5jdGlvbiBzaG93KHR5cGUsIG1lc3NhZ2VzLCB0cnVzdGVkVHlwZXNQb2xpY3lOYW1lLCBtZXNzYWdlU291cmNlKSB7XG4gICAgZW5zdXJlT3ZlcmxheUV4aXN0cyhmdW5jdGlvbiAoKSB7XG4gICAgICBoZWFkZXJFbGVtZW50LmlubmVyVGV4dCA9IG1lc3NhZ2VTb3VyY2UgPT09IFwicnVudGltZVwiID8gXCJVbmNhdWdodCBydW50aW1lIGVycm9yczpcIiA6IFwiQ29tcGlsZWQgd2l0aCBwcm9ibGVtczpcIjtcbiAgICAgIG1lc3NhZ2VzLmZvckVhY2goZnVuY3Rpb24gKG1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIGVudHJ5RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIHZhciBtc2dTdHlsZSA9IHR5cGUgPT09IFwid2FybmluZ1wiID8gbXNnU3R5bGVzLndhcm5pbmcgOiBtc2dTdHlsZXMuZXJyb3I7XG4gICAgICAgIGFwcGx5U3R5bGUoZW50cnlFbGVtZW50LCBfb2JqZWN0U3ByZWFkKF9vYmplY3RTcHJlYWQoe30sIG1zZ1N0eWxlKSwge30sIHtcbiAgICAgICAgICBwYWRkaW5nOiBcIjFyZW0gMXJlbSAxLjVyZW0gMXJlbVwiXG4gICAgICAgIH0pKTtcbiAgICAgICAgdmFyIHR5cGVFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudChcImRpdlwiKTtcbiAgICAgICAgdmFyIF9mb3JtYXRQcm9ibGVtID0gZm9ybWF0UHJvYmxlbSh0eXBlLCBtZXNzYWdlKSxcbiAgICAgICAgICBoZWFkZXIgPSBfZm9ybWF0UHJvYmxlbS5oZWFkZXIsXG4gICAgICAgICAgYm9keSA9IF9mb3JtYXRQcm9ibGVtLmJvZHk7XG4gICAgICAgIHR5cGVFbGVtZW50LmlubmVyVGV4dCA9IGhlYWRlcjtcbiAgICAgICAgYXBwbHlTdHlsZSh0eXBlRWxlbWVudCwgbXNnVHlwZVN0eWxlKTtcbiAgICAgICAgaWYgKG1lc3NhZ2UubW9kdWxlSWRlbnRpZmllcikge1xuICAgICAgICAgIGFwcGx5U3R5bGUodHlwZUVsZW1lbnQsIHtcbiAgICAgICAgICAgIGN1cnNvcjogXCJwb2ludGVyXCJcbiAgICAgICAgICB9KTtcbiAgICAgICAgICAvLyBlbGVtZW50LmRhdGFzZXQgbm90IHN1cHBvcnRlZCBpbiBJRVxuICAgICAgICAgIHR5cGVFbGVtZW50LnNldEF0dHJpYnV0ZShcImRhdGEtY2FuLW9wZW5cIiwgdHJ1ZSk7XG4gICAgICAgICAgdHlwZUVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIGZldGNoKFwiL3dlYnBhY2stZGV2LXNlcnZlci9vcGVuLWVkaXRvcj9maWxlTmFtZT1cIi5jb25jYXQobWVzc2FnZS5tb2R1bGVJZGVudGlmaWVyKSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBNYWtlIGl0IGxvb2sgc2ltaWxhciB0byBvdXIgdGVybWluYWwuXG4gICAgICAgIHZhciB0ZXh0ID0gYW5zaUhUTUwoZW5jb2RlKGJvZHkpKTtcbiAgICAgICAgdmFyIG1lc3NhZ2VUZXh0Tm9kZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJkaXZcIik7XG4gICAgICAgIGFwcGx5U3R5bGUobWVzc2FnZVRleHROb2RlLCBtc2dUZXh0U3R5bGUpO1xuICAgICAgICBtZXNzYWdlVGV4dE5vZGUuaW5uZXJIVE1MID0gb3ZlcmxheVRydXN0ZWRUeXBlc1BvbGljeSA/IG92ZXJsYXlUcnVzdGVkVHlwZXNQb2xpY3kuY3JlYXRlSFRNTCh0ZXh0KSA6IHRleHQ7XG4gICAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZCh0eXBlRWxlbWVudCk7XG4gICAgICAgIGVudHJ5RWxlbWVudC5hcHBlbmRDaGlsZChtZXNzYWdlVGV4dE5vZGUpO1xuXG4gICAgICAgIC8qKiBAdHlwZSB7SFRNTERpdkVsZW1lbnR9ICovXG4gICAgICAgIGNvbnRhaW5lckVsZW1lbnQuYXBwZW5kQ2hpbGQoZW50cnlFbGVtZW50KTtcbiAgICAgIH0pO1xuICAgIH0sIHRydXN0ZWRUeXBlc1BvbGljeU5hbWUpO1xuICB9XG4gIHZhciBvdmVybGF5U2VydmljZSA9IGNyZWF0ZU92ZXJsYXlNYWNoaW5lKHtcbiAgICBzaG93T3ZlcmxheTogZnVuY3Rpb24gc2hvd092ZXJsYXkoX3JlZjMpIHtcbiAgICAgIHZhciBfcmVmMyRsZXZlbCA9IF9yZWYzLmxldmVsLFxuICAgICAgICBsZXZlbCA9IF9yZWYzJGxldmVsID09PSB2b2lkIDAgPyBcImVycm9yXCIgOiBfcmVmMyRsZXZlbCxcbiAgICAgICAgbWVzc2FnZXMgPSBfcmVmMy5tZXNzYWdlcyxcbiAgICAgICAgbWVzc2FnZVNvdXJjZSA9IF9yZWYzLm1lc3NhZ2VTb3VyY2U7XG4gICAgICByZXR1cm4gc2hvdyhsZXZlbCwgbWVzc2FnZXMsIG9wdGlvbnMudHJ1c3RlZFR5cGVzUG9saWN5TmFtZSwgbWVzc2FnZVNvdXJjZSk7XG4gICAgfSxcbiAgICBoaWRlT3ZlcmxheTogaGlkZVxuICB9KTtcbiAgaWYgKG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IpIHtcbiAgICAvKipcbiAgICAgKiBAcGFyYW0ge0Vycm9yIHwgdW5kZWZpbmVkfSBlcnJvclxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBmYWxsYmFja01lc3NhZ2VcbiAgICAgKi9cbiAgICB2YXIgaGFuZGxlRXJyb3IgPSBmdW5jdGlvbiBoYW5kbGVFcnJvcihlcnJvciwgZmFsbGJhY2tNZXNzYWdlKSB7XG4gICAgICB2YXIgZXJyb3JPYmplY3QgPSBlcnJvciBpbnN0YW5jZW9mIEVycm9yID8gZXJyb3IgOiBuZXcgRXJyb3IoZXJyb3IgfHwgZmFsbGJhY2tNZXNzYWdlKTtcbiAgICAgIHZhciBzaG91bGREaXNwbGF5ID0gdHlwZW9mIG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IgPT09IFwiZnVuY3Rpb25cIiA/IG9wdGlvbnMuY2F0Y2hSdW50aW1lRXJyb3IoZXJyb3JPYmplY3QpIDogdHJ1ZTtcbiAgICAgIGlmIChzaG91bGREaXNwbGF5KSB7XG4gICAgICAgIG92ZXJsYXlTZXJ2aWNlLnNlbmQoe1xuICAgICAgICAgIHR5cGU6IFwiUlVOVElNRV9FUlJPUlwiLFxuICAgICAgICAgIG1lc3NhZ2VzOiBbe1xuICAgICAgICAgICAgbWVzc2FnZTogZXJyb3JPYmplY3QubWVzc2FnZSxcbiAgICAgICAgICAgIHN0YWNrOiBwYXJzZUVycm9yVG9TdGFja3MoZXJyb3JPYmplY3QpXG4gICAgICAgICAgfV1cbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcbiAgICBsaXN0ZW5Ub1J1bnRpbWVFcnJvcihmdW5jdGlvbiAoZXJyb3JFdmVudCkge1xuICAgICAgLy8gZXJyb3IgcHJvcGVydHkgbWF5IGJlIGVtcHR5IGluIG9sZGVyIGJyb3dzZXIgbGlrZSBJRVxuICAgICAgdmFyIGVycm9yID0gZXJyb3JFdmVudC5lcnJvcixcbiAgICAgICAgbWVzc2FnZSA9IGVycm9yRXZlbnQubWVzc2FnZTtcbiAgICAgIGlmICghZXJyb3IgJiYgIW1lc3NhZ2UpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgICAgfVxuXG4gICAgICAvLyBpZiBlcnJvciBzdGFjayBpbmRpY2F0ZXMgYSBSZWFjdCBlcnJvciBib3VuZGFyeSBjYXVnaHQgdGhlIGVycm9yLCBkbyBub3Qgc2hvdyBvdmVybGF5LlxuICAgICAgaWYgKGVycm9yICYmIGVycm9yLnN0YWNrICYmIGVycm9yLnN0YWNrLmluY2x1ZGVzKFwiaW52b2tlR3VhcmRlZENhbGxiYWNrRGV2XCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIGhhbmRsZUVycm9yKGVycm9yLCBtZXNzYWdlKTtcbiAgICB9KTtcbiAgICBsaXN0ZW5Ub1VuaGFuZGxlZFJlamVjdGlvbihmdW5jdGlvbiAocHJvbWlzZVJlamVjdGlvbkV2ZW50KSB7XG4gICAgICB2YXIgcmVhc29uID0gcHJvbWlzZVJlamVjdGlvbkV2ZW50LnJlYXNvbjtcbiAgICAgIGhhbmRsZUVycm9yKHJlYXNvbiwgXCJVbmtub3duIHByb21pc2UgcmVqZWN0aW9uIHJlYXNvblwiKTtcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gb3ZlcmxheVNlcnZpY2U7XG59O1xuZXhwb3J0IHsgZm9ybWF0UHJvYmxlbSwgY3JlYXRlT3ZlcmxheSB9OyIsImZ1bmN0aW9uIF90eXBlb2YobykgeyBcIkBiYWJlbC9oZWxwZXJzIC0gdHlwZW9mXCI7IHJldHVybiBfdHlwZW9mID0gXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgXCJzeW1ib2xcIiA9PSB0eXBlb2YgU3ltYm9sLml0ZXJhdG9yID8gZnVuY3Rpb24gKG8pIHsgcmV0dXJuIHR5cGVvZiBvOyB9IDogZnVuY3Rpb24gKG8pIHsgcmV0dXJuIG8gJiYgXCJmdW5jdGlvblwiID09IHR5cGVvZiBTeW1ib2wgJiYgby5jb25zdHJ1Y3RvciA9PT0gU3ltYm9sICYmIG8gIT09IFN5bWJvbC5wcm90b3R5cGUgPyBcInN5bWJvbFwiIDogdHlwZW9mIG87IH0sIF90eXBlb2Yobyk7IH1cbmZ1bmN0aW9uIF9jbGFzc0NhbGxDaGVjayhhLCBuKSB7IGlmICghKGEgaW5zdGFuY2VvZiBuKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBjYWxsIGEgY2xhc3MgYXMgYSBmdW5jdGlvblwiKTsgfVxuZnVuY3Rpb24gX2RlZmluZVByb3BlcnRpZXMoZSwgcikgeyBmb3IgKHZhciB0ID0gMDsgdCA8IHIubGVuZ3RoOyB0KyspIHsgdmFyIG8gPSByW3RdOyBvLmVudW1lcmFibGUgPSBvLmVudW1lcmFibGUgfHwgITEsIG8uY29uZmlndXJhYmxlID0gITAsIFwidmFsdWVcIiBpbiBvICYmIChvLndyaXRhYmxlID0gITApLCBPYmplY3QuZGVmaW5lUHJvcGVydHkoZSwgX3RvUHJvcGVydHlLZXkoby5rZXkpLCBvKTsgfSB9XG5mdW5jdGlvbiBfY3JlYXRlQ2xhc3MoZSwgciwgdCkgeyByZXR1cm4gciAmJiBfZGVmaW5lUHJvcGVydGllcyhlLnByb3RvdHlwZSwgciksIHQgJiYgX2RlZmluZVByb3BlcnRpZXMoZSwgdCksIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShlLCBcInByb3RvdHlwZVwiLCB7IHdyaXRhYmxlOiAhMSB9KSwgZTsgfVxuZnVuY3Rpb24gX3RvUHJvcGVydHlLZXkodCkgeyB2YXIgaSA9IF90b1ByaW1pdGl2ZSh0LCBcInN0cmluZ1wiKTsgcmV0dXJuIFwic3ltYm9sXCIgPT0gX3R5cGVvZihpKSA/IGkgOiBpICsgXCJcIjsgfVxuZnVuY3Rpb24gX3RvUHJpbWl0aXZlKHQsIHIpIHsgaWYgKFwib2JqZWN0XCIgIT0gX3R5cGVvZih0KSB8fCAhdCkgcmV0dXJuIHQ7IHZhciBlID0gdFtTeW1ib2wudG9QcmltaXRpdmVdOyBpZiAodm9pZCAwICE9PSBlKSB7IHZhciBpID0gZS5jYWxsKHQsIHIgfHwgXCJkZWZhdWx0XCIpOyBpZiAoXCJvYmplY3RcIiAhPSBfdHlwZW9mKGkpKSByZXR1cm4gaTsgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkBAdG9QcmltaXRpdmUgbXVzdCByZXR1cm4gYSBwcmltaXRpdmUgdmFsdWUuXCIpOyB9IHJldHVybiAoXCJzdHJpbmdcIiA9PT0gciA/IFN0cmluZyA6IE51bWJlcikodCk7IH1cbmZ1bmN0aW9uIF9jYWxsU3VwZXIodCwgbywgZSkgeyByZXR1cm4gbyA9IF9nZXRQcm90b3R5cGVPZihvKSwgX3Bvc3NpYmxlQ29uc3RydWN0b3JSZXR1cm4odCwgX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpID8gUmVmbGVjdC5jb25zdHJ1Y3QobywgZSB8fCBbXSwgX2dldFByb3RvdHlwZU9mKHQpLmNvbnN0cnVjdG9yKSA6IG8uYXBwbHkodCwgZSkpOyB9XG5mdW5jdGlvbiBfcG9zc2libGVDb25zdHJ1Y3RvclJldHVybih0LCBlKSB7IGlmIChlICYmIChcIm9iamVjdFwiID09IF90eXBlb2YoZSkgfHwgXCJmdW5jdGlvblwiID09IHR5cGVvZiBlKSkgcmV0dXJuIGU7IGlmICh2b2lkIDAgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJEZXJpdmVkIGNvbnN0cnVjdG9ycyBtYXkgb25seSByZXR1cm4gb2JqZWN0IG9yIHVuZGVmaW5lZFwiKTsgcmV0dXJuIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQodCk7IH1cbmZ1bmN0aW9uIF9hc3NlcnRUaGlzSW5pdGlhbGl6ZWQoZSkgeyBpZiAodm9pZCAwID09PSBlKSB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3IoXCJ0aGlzIGhhc24ndCBiZWVuIGluaXRpYWxpc2VkIC0gc3VwZXIoKSBoYXNuJ3QgYmVlbiBjYWxsZWRcIik7IHJldHVybiBlOyB9XG5mdW5jdGlvbiBfaW5oZXJpdHModCwgZSkgeyBpZiAoXCJmdW5jdGlvblwiICE9IHR5cGVvZiBlICYmIG51bGwgIT09IGUpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTdXBlciBleHByZXNzaW9uIG11c3QgZWl0aGVyIGJlIG51bGwgb3IgYSBmdW5jdGlvblwiKTsgdC5wcm90b3R5cGUgPSBPYmplY3QuY3JlYXRlKGUgJiYgZS5wcm90b3R5cGUsIHsgY29uc3RydWN0b3I6IHsgdmFsdWU6IHQsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9IH0pLCBPYmplY3QuZGVmaW5lUHJvcGVydHkodCwgXCJwcm90b3R5cGVcIiwgeyB3cml0YWJsZTogITEgfSksIGUgJiYgX3NldFByb3RvdHlwZU9mKHQsIGUpOyB9XG5mdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKHQpIHsgdmFyIHIgPSBcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIE1hcCA/IG5ldyBNYXAoKSA6IHZvaWQgMDsgcmV0dXJuIF93cmFwTmF0aXZlU3VwZXIgPSBmdW5jdGlvbiBfd3JhcE5hdGl2ZVN1cGVyKHQpIHsgaWYgKG51bGwgPT09IHQgfHwgIV9pc05hdGl2ZUZ1bmN0aW9uKHQpKSByZXR1cm4gdDsgaWYgKFwiZnVuY3Rpb25cIiAhPSB0eXBlb2YgdCkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlN1cGVyIGV4cHJlc3Npb24gbXVzdCBlaXRoZXIgYmUgbnVsbCBvciBhIGZ1bmN0aW9uXCIpOyBpZiAodm9pZCAwICE9PSByKSB7IGlmIChyLmhhcyh0KSkgcmV0dXJuIHIuZ2V0KHQpOyByLnNldCh0LCBXcmFwcGVyKTsgfSBmdW5jdGlvbiBXcmFwcGVyKCkgeyByZXR1cm4gX2NvbnN0cnVjdCh0LCBhcmd1bWVudHMsIF9nZXRQcm90b3R5cGVPZih0aGlzKS5jb25zdHJ1Y3Rvcik7IH0gcmV0dXJuIFdyYXBwZXIucHJvdG90eXBlID0gT2JqZWN0LmNyZWF0ZSh0LnByb3RvdHlwZSwgeyBjb25zdHJ1Y3RvcjogeyB2YWx1ZTogV3JhcHBlciwgZW51bWVyYWJsZTogITEsIHdyaXRhYmxlOiAhMCwgY29uZmlndXJhYmxlOiAhMCB9IH0pLCBfc2V0UHJvdG90eXBlT2YoV3JhcHBlciwgdCk7IH0sIF93cmFwTmF0aXZlU3VwZXIodCk7IH1cbmZ1bmN0aW9uIF9jb25zdHJ1Y3QodCwgZSwgcikgeyBpZiAoX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpKSByZXR1cm4gUmVmbGVjdC5jb25zdHJ1Y3QuYXBwbHkobnVsbCwgYXJndW1lbnRzKTsgdmFyIG8gPSBbbnVsbF07IG8ucHVzaC5hcHBseShvLCBlKTsgdmFyIHAgPSBuZXcgKHQuYmluZC5hcHBseSh0LCBvKSkoKTsgcmV0dXJuIHIgJiYgX3NldFByb3RvdHlwZU9mKHAsIHIucHJvdG90eXBlKSwgcDsgfVxuZnVuY3Rpb24gX2lzTmF0aXZlUmVmbGVjdENvbnN0cnVjdCgpIHsgdHJ5IHsgdmFyIHQgPSAhQm9vbGVhbi5wcm90b3R5cGUudmFsdWVPZi5jYWxsKFJlZmxlY3QuY29uc3RydWN0KEJvb2xlYW4sIFtdLCBmdW5jdGlvbiAoKSB7fSkpOyB9IGNhdGNoICh0KSB7fSByZXR1cm4gKF9pc05hdGl2ZVJlZmxlY3RDb25zdHJ1Y3QgPSBmdW5jdGlvbiBfaXNOYXRpdmVSZWZsZWN0Q29uc3RydWN0KCkgeyByZXR1cm4gISF0OyB9KSgpOyB9XG5mdW5jdGlvbiBfaXNOYXRpdmVGdW5jdGlvbih0KSB7IHRyeSB7IHJldHVybiAtMSAhPT0gRnVuY3Rpb24udG9TdHJpbmcuY2FsbCh0KS5pbmRleE9mKFwiW25hdGl2ZSBjb2RlXVwiKTsgfSBjYXRjaCAobikgeyByZXR1cm4gXCJmdW5jdGlvblwiID09IHR5cGVvZiB0OyB9IH1cbmZ1bmN0aW9uIF9zZXRQcm90b3R5cGVPZih0LCBlKSB7IHJldHVybiBfc2V0UHJvdG90eXBlT2YgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgPyBPYmplY3Quc2V0UHJvdG90eXBlT2YuYmluZCgpIDogZnVuY3Rpb24gKHQsIGUpIHsgcmV0dXJuIHQuX19wcm90b19fID0gZSwgdDsgfSwgX3NldFByb3RvdHlwZU9mKHQsIGUpOyB9XG5mdW5jdGlvbiBfZ2V0UHJvdG90eXBlT2YodCkgeyByZXR1cm4gX2dldFByb3RvdHlwZU9mID0gT2JqZWN0LnNldFByb3RvdHlwZU9mID8gT2JqZWN0LmdldFByb3RvdHlwZU9mLmJpbmQoKSA6IGZ1bmN0aW9uICh0KSB7IHJldHVybiB0Ll9fcHJvdG9fXyB8fCBPYmplY3QuZ2V0UHJvdG90eXBlT2YodCk7IH0sIF9nZXRQcm90b3R5cGVPZih0KTsgfVxuZnVuY3Rpb24gX2NsYXNzUHJpdmF0ZU1ldGhvZEluaXRTcGVjKGUsIGEpIHsgX2NoZWNrUHJpdmF0ZVJlZGVjbGFyYXRpb24oZSwgYSksIGEuYWRkKGUpOyB9XG5mdW5jdGlvbiBfY2hlY2tQcml2YXRlUmVkZWNsYXJhdGlvbihlLCB0KSB7IGlmICh0LmhhcyhlKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBpbml0aWFsaXplIHRoZSBzYW1lIHByaXZhdGUgZWxlbWVudHMgdHdpY2Ugb24gYW4gb2JqZWN0XCIpOyB9XG5mdW5jdGlvbiBfYXNzZXJ0Q2xhc3NCcmFuZChlLCB0LCBuKSB7IGlmIChcImZ1bmN0aW9uXCIgPT0gdHlwZW9mIGUgPyBlID09PSB0IDogZS5oYXModCkpIHJldHVybiBhcmd1bWVudHMubGVuZ3RoIDwgMyA/IHQgOiBuOyB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBlbGVtZW50IGlzIG5vdCBwcmVzZW50IG9uIHRoaXMgb2JqZWN0XCIpOyB9XG5leHBvcnQgZnVuY3Rpb24gaXNQcm9ncmVzc1N1cHBvcnRlZCgpIHtcbiAgcmV0dXJuIFwiY3VzdG9tRWxlbWVudHNcIiBpbiBzZWxmICYmICEhSFRNTEVsZW1lbnQucHJvdG90eXBlLmF0dGFjaFNoYWRvdztcbn1cbmV4cG9ydCBmdW5jdGlvbiBkZWZpbmVQcm9ncmVzc0VsZW1lbnQoKSB7XG4gIHZhciBfV2VicGFja0RldlNlcnZlclByb2dyZXNzO1xuICBpZiAoY3VzdG9tRWxlbWVudHMuZ2V0KFwid2RzLXByb2dyZXNzXCIpKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIHZhciBfV2VicGFja0RldlNlcnZlclByb2dyZXNzX2JyYW5kID0gLyojX19QVVJFX18qL25ldyBXZWFrU2V0KCk7XG4gIHZhciBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MgPSAvKiNfX1BVUkVfXyovZnVuY3Rpb24gKF9IVE1MRWxlbWVudCkge1xuICAgIGZ1bmN0aW9uIFdlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcygpIHtcbiAgICAgIHZhciBfdGhpcztcbiAgICAgIF9jbGFzc0NhbGxDaGVjayh0aGlzLCBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MpO1xuICAgICAgX3RoaXMgPSBfY2FsbFN1cGVyKHRoaXMsIFdlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcyk7XG4gICAgICBfY2xhc3NQcml2YXRlTWV0aG9kSW5pdFNwZWMoX3RoaXMsIF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQpO1xuICAgICAgX3RoaXMuYXR0YWNoU2hhZG93KHtcbiAgICAgICAgbW9kZTogXCJvcGVuXCJcbiAgICAgIH0pO1xuICAgICAgX3RoaXMubWF4RGFzaE9mZnNldCA9IC0yMTkuOTkwNzgzNjkxNDA2MjU7XG4gICAgICBfdGhpcy5hbmltYXRpb25UaW1lciA9IG51bGw7XG4gICAgICByZXR1cm4gX3RoaXM7XG4gICAgfVxuICAgIF9pbmhlcml0cyhXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MsIF9IVE1MRWxlbWVudCk7XG4gICAgcmV0dXJuIF9jcmVhdGVDbGFzcyhXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MsIFt7XG4gICAgICBrZXk6IFwiY29ubmVjdGVkQ2FsbGJhY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX3Jlc2V0KS5jYWxsKHRoaXMpO1xuICAgICAgfVxuICAgIH0sIHtcbiAgICAgIGtleTogXCJhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2tcIixcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiBhdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2sobmFtZSwgb2xkVmFsdWUsIG5ld1ZhbHVlKSB7XG4gICAgICAgIGlmIChuYW1lID09PSBcInByb2dyZXNzXCIpIHtcbiAgICAgICAgICBfYXNzZXJ0Q2xhc3NCcmFuZChfV2VicGFja0RldlNlcnZlclByb2dyZXNzX2JyYW5kLCB0aGlzLCBfdXBkYXRlKS5jYWxsKHRoaXMsIE51bWJlcihuZXdWYWx1ZSkpO1xuICAgICAgICB9IGVsc2UgaWYgKG5hbWUgPT09IFwidHlwZVwiKSB7XG4gICAgICAgICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX3Jlc2V0KS5jYWxsKHRoaXMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfV0sIFt7XG4gICAgICBrZXk6IFwib2JzZXJ2ZWRBdHRyaWJ1dGVzXCIsXG4gICAgICBnZXQ6IGZ1bmN0aW9uIGdldCgpIHtcbiAgICAgICAgcmV0dXJuIFtcInByb2dyZXNzXCIsIFwidHlwZVwiXTtcbiAgICAgIH1cbiAgICB9XSk7XG4gIH0oLyojX19QVVJFX18qL193cmFwTmF0aXZlU3VwZXIoSFRNTEVsZW1lbnQpKTtcbiAgX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcyA9IFdlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzcztcbiAgZnVuY3Rpb24gX3Jlc2V0KCkge1xuICAgIHZhciBfdGhpcyRnZXRBdHRyaWJ1dGUsIF9OdW1iZXI7XG4gICAgY2xlYXJUaW1lb3V0KHRoaXMuYW5pbWF0aW9uVGltZXIpO1xuICAgIHRoaXMuYW5pbWF0aW9uVGltZXIgPSBudWxsO1xuICAgIHZhciB0eXBlQXR0ciA9IChfdGhpcyRnZXRBdHRyaWJ1dGUgPSB0aGlzLmdldEF0dHJpYnV0ZShcInR5cGVcIikpID09PSBudWxsIHx8IF90aGlzJGdldEF0dHJpYnV0ZSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX3RoaXMkZ2V0QXR0cmlidXRlLnRvTG93ZXJDYXNlKCk7XG4gICAgdGhpcy50eXBlID0gdHlwZUF0dHIgPT09IFwiY2lyY3VsYXJcIiA/IFwiY2lyY3VsYXJcIiA6IFwibGluZWFyXCI7XG4gICAgdmFyIGlubmVySFRNTCA9IHRoaXMudHlwZSA9PT0gXCJjaXJjdWxhclwiID8gX2NpcmN1bGFyVGVtcGxhdGUuY2FsbChfV2VicGFja0RldlNlcnZlclByb2dyZXNzKSA6IF9saW5lYXJUZW1wbGF0ZS5jYWxsKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MpO1xuICAgIHRoaXMuc2hhZG93Um9vdC5pbm5lckhUTUwgPSBpbm5lckhUTUw7XG4gICAgdGhpcy5pbml0aWFsUHJvZ3Jlc3MgPSAoX051bWJlciA9IE51bWJlcih0aGlzLmdldEF0dHJpYnV0ZShcInByb2dyZXNzXCIpKSkgIT09IG51bGwgJiYgX051bWJlciAhPT0gdm9pZCAwID8gX051bWJlciA6IDA7XG4gICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX3VwZGF0ZSkuY2FsbCh0aGlzLCB0aGlzLmluaXRpYWxQcm9ncmVzcyk7XG4gIH1cbiAgZnVuY3Rpb24gX2NpcmN1bGFyVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgd2lkdGg6IDIwMHB4O1xcbiAgICAgICAgICAgIGhlaWdodDogMjAwcHg7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHJpZ2h0OiA1JTtcXG4gICAgICAgICAgICB0b3A6IDUlO1xcbiAgICAgICAgICAgIHRyYW5zaXRpb246IG9wYWNpdHkgLjI1cyBlYXNlLWluLW91dDtcXG4gICAgICAgICAgICB6LWluZGV4OiAyMTQ3NDgzNjQ1O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgY2lyY2xlIHtcXG4gICAgICAgICAgICBmaWxsOiAjMjgyZDM1O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgcGF0aCB7XFxuICAgICAgICAgICAgZmlsbDogcmdiYSgwLCAwLCAwLCAwKTtcXG4gICAgICAgICAgICBzdHJva2U6IHJnYigxODYsIDIyMywgMTcyKTtcXG4gICAgICAgICAgICBzdHJva2UtZGFzaGFycmF5OiAyMTkuOTkwNzgzNjkxNDA2MjU7XFxuICAgICAgICAgICAgc3Ryb2tlLWRhc2hvZmZzZXQ6IC0yMTkuOTkwNzgzNjkxNDA2MjU7XFxuICAgICAgICAgICAgc3Ryb2tlLXdpZHRoOiAxMDtcXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSg5MGRlZykgdHJhbnNsYXRlKDBweCwgLTgwcHgpO1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgdGV4dCB7XFxuICAgICAgICAgICAgZm9udC1mYW1pbHk6ICdPcGVuIFNhbnMnLCBzYW5zLXNlcmlmO1xcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcXG4gICAgICAgICAgICBmaWxsOiAjZmZmZmZmO1xcbiAgICAgICAgICAgIGRvbWluYW50LWJhc2VsaW5lOiBtaWRkbGU7XFxuICAgICAgICAgICAgdGV4dC1hbmNob3I6IG1pZGRsZTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIHRzcGFuI3BlcmNlbnQtc3VwZXIge1xcbiAgICAgICAgICAgIGZpbGw6ICNiZGMzYzc7XFxuICAgICAgICAgICAgZm9udC1zaXplOiAwLjQ1ZW07XFxuICAgICAgICAgICAgYmFzZWxpbmUtc2hpZnQ6IDEwJTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XFxuICAgICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB0cmFuc2Zvcm06IHNjYWxlKDEpOyB9XFxuICAgICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IHRyYW5zZm9ybTogc2NhbGUoMCk7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kaXNhcHBlYXIge1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjNzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5oaWRkZW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICA8L3N0eWxlPlxcbiAgICAgICAgPHN2ZyBpZD1cXFwicHJvZ3Jlc3NcXFwiIGNsYXNzPVxcXCJoaWRkZW4gbm9zZWxlY3RcXFwiIHZpZXdCb3g9XFxcIjAgMCA4MCA4MFxcXCI+XFxuICAgICAgICA8Y2lyY2xlIGN4PVxcXCI1MCVcXFwiIGN5PVxcXCI1MCVcXFwiIHI9XFxcIjM1XFxcIj48L2NpcmNsZT5cXG4gICAgICAgIDxwYXRoIGQ9XFxcIk01LDQwYTM1LDM1IDAgMSwwIDcwLDBhMzUsMzUgMCAxLDAgLTcwLDBcXFwiPjwvcGF0aD5cXG4gICAgICAgIDx0ZXh0IHg9XFxcIjUwJVxcXCIgeT1cXFwiNTElXFxcIj5cXG4gICAgICAgICAgICA8dHNwYW4gaWQ9XFxcInBlcmNlbnQtdmFsdWVcXFwiPjA8L3RzcGFuPlxcbiAgICAgICAgICAgIDx0c3BhbiBpZD1cXFwicGVyY2VudC1zdXBlclxcXCI+JTwvdHNwYW4+XFxuICAgICAgICA8L3RleHQ+XFxuICAgICAgICA8L3N2Zz5cXG4gICAgICBcIjtcbiAgfVxuICBmdW5jdGlvbiBfbGluZWFyVGVtcGxhdGUoKSB7XG4gICAgcmV0dXJuIFwiXFxuICAgICAgICA8c3R5bGU+XFxuICAgICAgICA6aG9zdCB7XFxuICAgICAgICAgICAgcG9zaXRpb246IGZpeGVkO1xcbiAgICAgICAgICAgIHRvcDogMDtcXG4gICAgICAgICAgICBsZWZ0OiAwO1xcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICAgIHdpZHRoOiAxMDB2dztcXG4gICAgICAgICAgICB6LWluZGV4OiAyMTQ3NDgzNjQ1O1xcbiAgICAgICAgfVxcblxcbiAgICAgICAgI2JhciB7XFxuICAgICAgICAgICAgd2lkdGg6IDAlO1xcbiAgICAgICAgICAgIGhlaWdodDogNHB4O1xcbiAgICAgICAgICAgIGJhY2tncm91bmQtY29sb3I6IHJnYigxODYsIDIyMywgMTcyKTtcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIEBrZXlmcmFtZXMgZmFkZSB7XFxuICAgICAgICAgICAgMCUgeyBvcGFjaXR5OiAxOyB9XFxuICAgICAgICAgICAgMTAwJSB7IG9wYWNpdHk6IDA7IH1cXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5kaXNhcHBlYXIge1xcbiAgICAgICAgICAgIGFuaW1hdGlvbjogZmFkZSAwLjNzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1maWxsLW1vZGU6IGZvcndhcmRzO1xcbiAgICAgICAgICAgIGFuaW1hdGlvbi1kZWxheTogMC41cztcXG4gICAgICAgIH1cXG5cXG4gICAgICAgIC5oaWRkZW4ge1xcbiAgICAgICAgICAgIGRpc3BsYXk6IG5vbmU7XFxuICAgICAgICB9XFxuICAgICAgICA8L3N0eWxlPlxcbiAgICAgICAgPGRpdiBpZD1cXFwicHJvZ3Jlc3NcXFwiPjwvZGl2PlxcbiAgICAgICAgXCI7XG4gIH1cbiAgZnVuY3Rpb24gX3VwZGF0ZShwZXJjZW50KSB7XG4gICAgdmFyIGVsZW1lbnQgPSB0aGlzLnNoYWRvd1Jvb3QucXVlcnlTZWxlY3RvcihcIiNwcm9ncmVzc1wiKTtcbiAgICBpZiAodGhpcy50eXBlID09PSBcImNpcmN1bGFyXCIpIHtcbiAgICAgIHZhciBwYXRoID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCJwYXRoXCIpO1xuICAgICAgdmFyIHZhbHVlID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjcGVyY2VudC12YWx1ZVwiKTtcbiAgICAgIHZhciBvZmZzZXQgPSAoMTAwIC0gcGVyY2VudCkgLyAxMDAgKiB0aGlzLm1heERhc2hPZmZzZXQ7XG4gICAgICBwYXRoLnN0eWxlLnN0cm9rZURhc2hvZmZzZXQgPSBvZmZzZXQ7XG4gICAgICB2YWx1ZS50ZXh0Q29udGVudCA9IHBlcmNlbnQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIGVsZW1lbnQuc3R5bGUud2lkdGggPSBcIlwiLmNvbmNhdChwZXJjZW50LCBcIiVcIik7XG4gICAgfVxuICAgIGlmIChwZXJjZW50ID49IDEwMCkge1xuICAgICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX2hpZGUpLmNhbGwodGhpcyk7XG4gICAgfSBlbHNlIGlmIChwZXJjZW50ID4gMCkge1xuICAgICAgX2Fzc2VydENsYXNzQnJhbmQoX1dlYnBhY2tEZXZTZXJ2ZXJQcm9ncmVzc19icmFuZCwgdGhpcywgX3Nob3cpLmNhbGwodGhpcyk7XG4gICAgfVxuICB9XG4gIGZ1bmN0aW9uIF9zaG93KCkge1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZ3Jlc3NcIik7XG4gICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKFwiaGlkZGVuXCIpO1xuICB9XG4gIGZ1bmN0aW9uIF9oaWRlKCkge1xuICAgIHZhciBfdGhpczIgPSB0aGlzO1xuICAgIHZhciBlbGVtZW50ID0gdGhpcy5zaGFkb3dSb290LnF1ZXJ5U2VsZWN0b3IoXCIjcHJvZ3Jlc3NcIik7XG4gICAgaWYgKHRoaXMudHlwZSA9PT0gXCJjaXJjdWxhclwiKSB7XG4gICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJkaXNhcHBlYXJcIik7XG4gICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJhbmltYXRpb25lbmRcIiwgZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoXCJoaWRkZW5cIik7XG4gICAgICAgIF9hc3NlcnRDbGFzc0JyYW5kKF9XZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3NfYnJhbmQsIF90aGlzMiwgX3VwZGF0ZSkuY2FsbChfdGhpczIsIDApO1xuICAgICAgfSwge1xuICAgICAgICBvbmNlOiB0cnVlXG4gICAgICB9KTtcbiAgICB9IGVsc2UgaWYgKHRoaXMudHlwZSA9PT0gXCJsaW5lYXJcIikge1xuICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKFwiZGlzYXBwZWFyXCIpO1xuICAgICAgdGhpcy5hbmltYXRpb25UaW1lciA9IHNldFRpbWVvdXQoZnVuY3Rpb24gKCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoXCJkaXNhcHBlYXJcIik7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZChcImhpZGRlblwiKTtcbiAgICAgICAgZWxlbWVudC5zdHlsZS53aWR0aCA9IFwiMCVcIjtcbiAgICAgICAgX3RoaXMyLmFuaW1hdGlvblRpbWVyID0gbnVsbDtcbiAgICAgIH0sIDgwMCk7XG4gICAgfVxuICB9XG4gIGN1c3RvbUVsZW1lbnRzLmRlZmluZShcIndkcy1wcm9ncmVzc1wiLCBXZWJwYWNrRGV2U2VydmVyUHJvZ3Jlc3MpO1xufSIsIi8qIGdsb2JhbCBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAqL1xuXG5pbXBvcnQgV2ViU29ja2V0Q2xpZW50IGZyb20gXCIuL2NsaWVudHMvV2ViU29ja2V0Q2xpZW50LmpzXCI7XG5pbXBvcnQgeyBsb2cgfSBmcm9tIFwiLi91dGlscy9sb2cuanNcIjtcblxuLy8gdGhpcyBXZWJzb2NrZXRDbGllbnQgaXMgaGVyZSBhcyBhIGRlZmF1bHQgZmFsbGJhY2ssIGluIGNhc2UgdGhlIGNsaWVudCBpcyBub3QgaW5qZWN0ZWRcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xudmFyIENsaWVudCA9XG4vLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmVzdGVkLXRlcm5hcnlcbnR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IHR5cGVvZiBfX3dlYnBhY2tfZGV2X3NlcnZlcl9jbGllbnRfXy5kZWZhdWx0ICE9PSBcInVuZGVmaW5lZFwiID8gX193ZWJwYWNrX2Rldl9zZXJ2ZXJfY2xpZW50X18uZGVmYXVsdCA6IF9fd2VicGFja19kZXZfc2VydmVyX2NsaWVudF9fIDogV2ViU29ja2V0Q2xpZW50O1xuLyogZXNsaW50LWVuYWJsZSBjYW1lbGNhc2UgKi9cblxudmFyIHJldHJpZXMgPSAwO1xudmFyIG1heFJldHJpZXMgPSAxMDtcblxuLy8gSW5pdGlhbGl6ZWQgY2xpZW50IGlzIGV4cG9ydGVkIHNvIGV4dGVybmFsIGNvbnN1bWVycyBjYW4gdXRpbGl6ZSB0aGUgc2FtZSBpbnN0YW5jZVxuLy8gSXQgaXMgbXV0YWJsZSB0byBlbmZvcmNlIHNpbmdsZXRvblxuLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGltcG9ydC9uby1tdXRhYmxlLWV4cG9ydHNcbmV4cG9ydCB2YXIgY2xpZW50ID0gbnVsbDtcbnZhciB0aW1lb3V0O1xuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB1cmxcbiAqIEBwYXJhbSB7eyBbaGFuZGxlcjogc3RyaW5nXTogKGRhdGE/OiBhbnksIHBhcmFtcz86IGFueSkgPT4gYW55IH19IGhhbmRsZXJzXG4gKiBAcGFyYW0ge251bWJlcn0gW3JlY29ubmVjdF1cbiAqL1xudmFyIHNvY2tldCA9IGZ1bmN0aW9uIGluaXRTb2NrZXQodXJsLCBoYW5kbGVycywgcmVjb25uZWN0KSB7XG4gIGNsaWVudCA9IG5ldyBDbGllbnQodXJsKTtcbiAgY2xpZW50Lm9uT3BlbihmdW5jdGlvbiAoKSB7XG4gICAgcmV0cmllcyA9IDA7XG4gICAgaWYgKHRpbWVvdXQpIHtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lb3V0KTtcbiAgICB9XG4gICAgaWYgKHR5cGVvZiByZWNvbm5lY3QgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgIG1heFJldHJpZXMgPSByZWNvbm5lY3Q7XG4gICAgfVxuICB9KTtcbiAgY2xpZW50Lm9uQ2xvc2UoZnVuY3Rpb24gKCkge1xuICAgIGlmIChyZXRyaWVzID09PSAwKSB7XG4gICAgICBoYW5kbGVycy5jbG9zZSgpO1xuICAgIH1cblxuICAgIC8vIFRyeSB0byByZWNvbm5lY3QuXG4gICAgY2xpZW50ID0gbnVsbDtcblxuICAgIC8vIEFmdGVyIDEwIHJldHJpZXMgc3RvcCB0cnlpbmcsIHRvIHByZXZlbnQgbG9nc3BhbS5cbiAgICBpZiAocmV0cmllcyA8IG1heFJldHJpZXMpIHtcbiAgICAgIC8vIEV4cG9uZW50aWFsbHkgaW5jcmVhc2UgdGltZW91dCB0byByZWNvbm5lY3QuXG4gICAgICAvLyBSZXNwZWN0ZnVsbHkgY29waWVkIGZyb20gdGhlIHBhY2thZ2UgYGdvdGAuXG4gICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tcmVzdHJpY3RlZC1wcm9wZXJ0aWVzXG4gICAgICB2YXIgcmV0cnlJbk1zID0gMTAwMCAqIE1hdGgucG93KDIsIHJldHJpZXMpICsgTWF0aC5yYW5kb20oKSAqIDEwMDtcbiAgICAgIHJldHJpZXMgKz0gMTtcbiAgICAgIGxvZy5pbmZvKFwiVHJ5aW5nIHRvIHJlY29ubmVjdC4uLlwiKTtcbiAgICAgIHRpbWVvdXQgPSBzZXRUaW1lb3V0KGZ1bmN0aW9uICgpIHtcbiAgICAgICAgc29ja2V0KHVybCwgaGFuZGxlcnMsIHJlY29ubmVjdCk7XG4gICAgICB9LCByZXRyeUluTXMpO1xuICAgIH1cbiAgfSk7XG4gIGNsaWVudC5vbk1lc3NhZ2UoXG4gIC8qKlxuICAgKiBAcGFyYW0ge2FueX0gZGF0YVxuICAgKi9cbiAgZnVuY3Rpb24gKGRhdGEpIHtcbiAgICB2YXIgbWVzc2FnZSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgaWYgKGhhbmRsZXJzW21lc3NhZ2UudHlwZV0pIHtcbiAgICAgIGhhbmRsZXJzW21lc3NhZ2UudHlwZV0obWVzc2FnZS5kYXRhLCBtZXNzYWdlLnBhcmFtcyk7XG4gICAgfVxuICB9KTtcbn07XG5leHBvcnQgZGVmYXVsdCBzb2NrZXQ7IiwiaW1wb3J0IGxvZ2dlciBmcm9tIFwiLi4vbW9kdWxlcy9sb2dnZXIvaW5kZXguanNcIjtcbnZhciBuYW1lID0gXCJ3ZWJwYWNrLWRldi1zZXJ2ZXJcIjtcbi8vIGRlZmF1bHQgbGV2ZWwgaXMgc2V0IG9uIHRoZSBjbGllbnQgc2lkZSwgc28gaXQgZG9lcyBub3QgbmVlZFxuLy8gdG8gYmUgc2V0IGJ5IHRoZSBDTEkgb3IgQVBJXG52YXIgZGVmYXVsdExldmVsID0gXCJpbmZvXCI7XG5cbi8vIG9wdGlvbnMgbmV3IG9wdGlvbnMsIG1lcmdlIHdpdGggb2xkIG9wdGlvbnNcbi8qKlxuICogQHBhcmFtIHtmYWxzZSB8IHRydWUgfCBcIm5vbmVcIiB8IFwiZXJyb3JcIiB8IFwid2FyblwiIHwgXCJpbmZvXCIgfCBcImxvZ1wiIHwgXCJ2ZXJib3NlXCJ9IGxldmVsXG4gKiBAcmV0dXJucyB7dm9pZH1cbiAqL1xuZnVuY3Rpb24gc2V0TG9nTGV2ZWwobGV2ZWwpIHtcbiAgbG9nZ2VyLmNvbmZpZ3VyZURlZmF1bHRMb2dnZXIoe1xuICAgIGxldmVsOiBsZXZlbFxuICB9KTtcbn1cbnNldExvZ0xldmVsKGRlZmF1bHRMZXZlbCk7XG52YXIgbG9nID0gbG9nZ2VyLmdldExvZ2dlcihuYW1lKTtcbmV4cG9ydCB7IGxvZywgc2V0TG9nTGV2ZWwgfTsiLCIvKiBnbG9iYWwgX19yZXNvdXJjZVF1ZXJ5IFdvcmtlckdsb2JhbFNjb3BlICovXG5cbi8vIFNlbmQgbWVzc2FnZXMgdG8gdGhlIG91dHNpZGUsIHNvIHBsdWdpbnMgY2FuIGNvbnN1bWUgaXQuXG4vKipcbiAqIEBwYXJhbSB7c3RyaW5nfSB0eXBlXG4gKiBAcGFyYW0ge2FueX0gW2RhdGFdXG4gKi9cbmZ1bmN0aW9uIHNlbmRNc2codHlwZSwgZGF0YSkge1xuICBpZiAodHlwZW9mIHNlbGYgIT09IFwidW5kZWZpbmVkXCIgJiYgKHR5cGVvZiBXb3JrZXJHbG9iYWxTY29wZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCAhKHNlbGYgaW5zdGFuY2VvZiBXb3JrZXJHbG9iYWxTY29wZSkpKSB7XG4gICAgc2VsZi5wb3N0TWVzc2FnZSh7XG4gICAgICB0eXBlOiBcIndlYnBhY2tcIi5jb25jYXQodHlwZSksXG4gICAgICBkYXRhOiBkYXRhXG4gICAgfSwgXCIqXCIpO1xuICB9XG59XG5leHBvcnQgZGVmYXVsdCBzZW5kTXNnOyIsIi8qXG5cdE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG5cdEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG4vKiBnbG9iYWxzIF9fd2VicGFja19oYXNoX18gKi9cbmlmIChtb2R1bGUuaG90KSB7XG5cdC8qKiBAdHlwZSB7dW5kZWZpbmVkfHN0cmluZ30gKi9cblx0dmFyIGxhc3RIYXNoO1xuXHR2YXIgdXBUb0RhdGUgPSBmdW5jdGlvbiB1cFRvRGF0ZSgpIHtcblx0XHRyZXR1cm4gLyoqIEB0eXBlIHtzdHJpbmd9ICovIChsYXN0SGFzaCkuaW5kZXhPZihfX3dlYnBhY2tfaGFzaF9fKSA+PSAwO1xuXHR9O1xuXHR2YXIgbG9nID0gcmVxdWlyZShcIi4vbG9nXCIpO1xuXHR2YXIgY2hlY2sgPSBmdW5jdGlvbiBjaGVjaygpIHtcblx0XHRtb2R1bGUuaG90XG5cdFx0XHQuY2hlY2sodHJ1ZSlcblx0XHRcdC50aGVuKGZ1bmN0aW9uICh1cGRhdGVkTW9kdWxlcykge1xuXHRcdFx0XHRpZiAoIXVwZGF0ZWRNb2R1bGVzKSB7XG5cdFx0XHRcdFx0bG9nKFxuXHRcdFx0XHRcdFx0XCJ3YXJuaW5nXCIsXG5cdFx0XHRcdFx0XHRcIltITVJdIENhbm5vdCBmaW5kIHVwZGF0ZS4gXCIgK1xuXHRcdFx0XHRcdFx0XHQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiUGxlYXNlIHJlbG9hZCBtYW51YWxseSFcIilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcblx0XHRcdFx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XHRcdFx0XCJbSE1SXSAoUHJvYmFibHkgYmVjYXVzZSBvZiByZXN0YXJ0aW5nIHRoZSB3ZWJwYWNrLWRldi1zZXJ2ZXIpXCJcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGlmICh0eXBlb2Ygd2luZG93ICE9PSBcInVuZGVmaW5lZFwiKSB7XG5cdFx0XHRcdFx0XHR3aW5kb3cubG9jYXRpb24ucmVsb2FkKCk7XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHRcdHJldHVybjtcblx0XHRcdFx0fVxuXG5cdFx0XHRcdGlmICghdXBUb0RhdGUoKSkge1xuXHRcdFx0XHRcdGNoZWNrKCk7XG5cdFx0XHRcdH1cblxuXHRcdFx0XHRyZXF1aXJlKFwiLi9sb2ctYXBwbHktcmVzdWx0XCIpKHVwZGF0ZWRNb2R1bGVzLCB1cGRhdGVkTW9kdWxlcyk7XG5cblx0XHRcdFx0aWYgKHVwVG9EYXRlKCkpIHtcblx0XHRcdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQXBwIGlzIHVwIHRvIGRhdGUuXCIpO1xuXHRcdFx0XHR9XG5cdFx0XHR9KVxuXHRcdFx0LmNhdGNoKGZ1bmN0aW9uIChlcnIpIHtcblx0XHRcdFx0dmFyIHN0YXR1cyA9IG1vZHVsZS5ob3Quc3RhdHVzKCk7XG5cdFx0XHRcdGlmIChbXCJhYm9ydFwiLCBcImZhaWxcIl0uaW5kZXhPZihzdGF0dXMpID49IDApIHtcblx0XHRcdFx0XHRsb2coXG5cdFx0XHRcdFx0XHRcIndhcm5pbmdcIixcblx0XHRcdFx0XHRcdFwiW0hNUl0gQ2Fubm90IGFwcGx5IHVwZGF0ZS4gXCIgK1xuXHRcdFx0XHRcdFx0XHQodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIlxuXHRcdFx0XHRcdFx0XHRcdD8gXCJOZWVkIHRvIGRvIGEgZnVsbCByZWxvYWQhXCJcblx0XHRcdFx0XHRcdFx0XHQ6IFwiUGxlYXNlIHJlbG9hZCBtYW51YWxseSFcIilcblx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdGxvZyhcIndhcm5pbmdcIiwgXCJbSE1SXSBcIiArIGxvZy5mb3JtYXRFcnJvcihlcnIpKTtcblx0XHRcdFx0XHRpZiAodHlwZW9mIHdpbmRvdyAhPT0gXCJ1bmRlZmluZWRcIikge1xuXHRcdFx0XHRcdFx0d2luZG93LmxvY2F0aW9uLnJlbG9hZCgpO1xuXHRcdFx0XHRcdH1cblx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gVXBkYXRlIGZhaWxlZDogXCIgKyBsb2cuZm9ybWF0RXJyb3IoZXJyKSk7XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHR9O1xuXHR2YXIgaG90RW1pdHRlciA9IHJlcXVpcmUoXCIuL2VtaXR0ZXJcIik7XG5cdGhvdEVtaXR0ZXIub24oXCJ3ZWJwYWNrSG90VXBkYXRlXCIsIGZ1bmN0aW9uIChjdXJyZW50SGFzaCkge1xuXHRcdGxhc3RIYXNoID0gY3VycmVudEhhc2g7XG5cdFx0aWYgKCF1cFRvRGF0ZSgpICYmIG1vZHVsZS5ob3Quc3RhdHVzKCkgPT09IFwiaWRsZVwiKSB7XG5cdFx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gQ2hlY2tpbmcgZm9yIHVwZGF0ZXMgb24gdGhlIHNlcnZlci4uLlwiKTtcblx0XHRcdGNoZWNrKCk7XG5cdFx0fVxuXHR9KTtcblx0bG9nKFwiaW5mb1wiLCBcIltITVJdIFdhaXRpbmcgZm9yIHVwZGF0ZSBzaWduYWwgZnJvbSBXRFMuLi5cIik7XG59IGVsc2Uge1xuXHR0aHJvdyBuZXcgRXJyb3IoXCJbSE1SXSBIb3QgTW9kdWxlIFJlcGxhY2VtZW50IGlzIGRpc2FibGVkLlwiKTtcbn1cbiIsInZhciBFdmVudEVtaXR0ZXIgPSByZXF1aXJlKFwiZXZlbnRzXCIpO1xubW9kdWxlLmV4cG9ydHMgPSBuZXcgRXZlbnRFbWl0dGVyKCk7XG4iLCIvKlxuXHRNSVQgTGljZW5zZSBodHRwOi8vd3d3Lm9wZW5zb3VyY2Uub3JnL2xpY2Vuc2VzL21pdC1saWNlbnNlLnBocFxuXHRBdXRob3IgVG9iaWFzIEtvcHBlcnMgQHNva3JhXG4qL1xuXG4vKipcbiAqIEBwYXJhbSB7KHN0cmluZyB8IG51bWJlcilbXX0gdXBkYXRlZE1vZHVsZXMgdXBkYXRlZCBtb2R1bGVzXG4gKiBAcGFyYW0geyhzdHJpbmcgfCBudW1iZXIpW10gfCBudWxsfSByZW5ld2VkTW9kdWxlcyByZW5ld2VkIG1vZHVsZXNcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAodXBkYXRlZE1vZHVsZXMsIHJlbmV3ZWRNb2R1bGVzKSB7XG5cdHZhciB1bmFjY2VwdGVkTW9kdWxlcyA9IHVwZGF0ZWRNb2R1bGVzLmZpbHRlcihmdW5jdGlvbiAobW9kdWxlSWQpIHtcblx0XHRyZXR1cm4gcmVuZXdlZE1vZHVsZXMgJiYgcmVuZXdlZE1vZHVsZXMuaW5kZXhPZihtb2R1bGVJZCkgPCAwO1xuXHR9KTtcblx0dmFyIGxvZyA9IHJlcXVpcmUoXCIuL2xvZ1wiKTtcblxuXHRpZiAodW5hY2NlcHRlZE1vZHVsZXMubGVuZ3RoID4gMCkge1xuXHRcdGxvZyhcblx0XHRcdFwid2FybmluZ1wiLFxuXHRcdFx0XCJbSE1SXSBUaGUgZm9sbG93aW5nIG1vZHVsZXMgY291bGRuJ3QgYmUgaG90IHVwZGF0ZWQ6IChUaGV5IHdvdWxkIG5lZWQgYSBmdWxsIHJlbG9hZCEpXCJcblx0XHQpO1xuXHRcdHVuYWNjZXB0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRsb2coXCJ3YXJuaW5nXCIsIFwiW0hNUl0gIC0gXCIgKyBtb2R1bGVJZCk7XG5cdFx0fSk7XG5cdH1cblxuXHRpZiAoIXJlbmV3ZWRNb2R1bGVzIHx8IHJlbmV3ZWRNb2R1bGVzLmxlbmd0aCA9PT0gMCkge1xuXHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSBOb3RoaW5nIGhvdCB1cGRhdGVkLlwiKTtcblx0fSBlbHNlIHtcblx0XHRsb2coXCJpbmZvXCIsIFwiW0hNUl0gVXBkYXRlZCBtb2R1bGVzOlwiKTtcblx0XHRyZW5ld2VkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0aWYgKHR5cGVvZiBtb2R1bGVJZCA9PT0gXCJzdHJpbmdcIiAmJiBtb2R1bGVJZC5pbmRleE9mKFwiIVwiKSAhPT0gLTEpIHtcblx0XHRcdFx0dmFyIHBhcnRzID0gbW9kdWxlSWQuc3BsaXQoXCIhXCIpO1xuXHRcdFx0XHRsb2cuZ3JvdXBDb2xsYXBzZWQoXCJpbmZvXCIsIFwiW0hNUl0gIC0gXCIgKyBwYXJ0cy5wb3AoKSk7XG5cdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHRcdFx0bG9nLmdyb3VwRW5kKFwiaW5mb1wiKTtcblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGxvZyhcImluZm9cIiwgXCJbSE1SXSAgLSBcIiArIG1vZHVsZUlkKTtcblx0XHRcdH1cblx0XHR9KTtcblx0XHR2YXIgbnVtYmVySWRzID0gcmVuZXdlZE1vZHVsZXMuZXZlcnkoZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRyZXR1cm4gdHlwZW9mIG1vZHVsZUlkID09PSBcIm51bWJlclwiO1xuXHRcdH0pO1xuXHRcdGlmIChudW1iZXJJZHMpXG5cdFx0XHRsb2coXG5cdFx0XHRcdFwiaW5mb1wiLFxuXHRcdFx0XHQnW0hNUl0gQ29uc2lkZXIgdXNpbmcgdGhlIG9wdGltaXphdGlvbi5tb2R1bGVJZHM6IFwibmFtZWRcIiBmb3IgbW9kdWxlIG5hbWVzLidcblx0XHRcdCk7XG5cdH1cbn07XG4iLCIvKiogQHR5cGVkZWYge1wiaW5mb1wiIHwgXCJ3YXJuaW5nXCIgfCBcImVycm9yXCJ9IExvZ0xldmVsICovXG5cbi8qKiBAdHlwZSB7TG9nTGV2ZWx9ICovXG52YXIgbG9nTGV2ZWwgPSBcImluZm9cIjtcblxuZnVuY3Rpb24gZHVtbXkoKSB7fVxuXG4vKipcbiAqIEBwYXJhbSB7TG9nTGV2ZWx9IGxldmVsIGxvZyBsZXZlbFxuICogQHJldHVybnMge2Jvb2xlYW59IHRydWUsIGlmIHNob3VsZCBsb2dcbiAqL1xuZnVuY3Rpb24gc2hvdWxkTG9nKGxldmVsKSB7XG5cdHZhciBzaG91bGRMb2cgPVxuXHRcdChsb2dMZXZlbCA9PT0gXCJpbmZvXCIgJiYgbGV2ZWwgPT09IFwiaW5mb1wiKSB8fFxuXHRcdChbXCJpbmZvXCIsIFwid2FybmluZ1wiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcIndhcm5pbmdcIikgfHxcblx0XHQoW1wiaW5mb1wiLCBcIndhcm5pbmdcIiwgXCJlcnJvclwiXS5pbmRleE9mKGxvZ0xldmVsKSA+PSAwICYmIGxldmVsID09PSBcImVycm9yXCIpO1xuXHRyZXR1cm4gc2hvdWxkTG9nO1xufVxuXG4vKipcbiAqIEBwYXJhbSB7KG1zZz86IHN0cmluZykgPT4gdm9pZH0gbG9nRm4gbG9nIGZ1bmN0aW9uXG4gKiBAcmV0dXJucyB7KGxldmVsOiBMb2dMZXZlbCwgbXNnPzogc3RyaW5nKSA9PiB2b2lkfSBmdW5jdGlvbiB0aGF0IGxvZ3Mgd2hlbiBsb2cgbGV2ZWwgaXMgc3VmZmljaWVudFxuICovXG5mdW5jdGlvbiBsb2dHcm91cChsb2dGbikge1xuXHRyZXR1cm4gZnVuY3Rpb24gKGxldmVsLCBtc2cpIHtcblx0XHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdFx0bG9nRm4obXNnKTtcblx0XHR9XG5cdH07XG59XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKiBAcGFyYW0ge3N0cmluZ3xFcnJvcn0gbXNnIG1lc3NhZ2VcbiAqL1xubW9kdWxlLmV4cG9ydHMgPSBmdW5jdGlvbiAobGV2ZWwsIG1zZykge1xuXHRpZiAoc2hvdWxkTG9nKGxldmVsKSkge1xuXHRcdGlmIChsZXZlbCA9PT0gXCJpbmZvXCIpIHtcblx0XHRcdGNvbnNvbGUubG9nKG1zZyk7XG5cdFx0fSBlbHNlIGlmIChsZXZlbCA9PT0gXCJ3YXJuaW5nXCIpIHtcblx0XHRcdGNvbnNvbGUud2Fybihtc2cpO1xuXHRcdH0gZWxzZSBpZiAobGV2ZWwgPT09IFwiZXJyb3JcIikge1xuXHRcdFx0Y29uc29sZS5lcnJvcihtc2cpO1xuXHRcdH1cblx0fVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0Vycm9yfSBlcnIgZXJyb3JcbiAqIEByZXR1cm5zIHtzdHJpbmd9IGZvcm1hdHRlZCBlcnJvclxuICovXG5tb2R1bGUuZXhwb3J0cy5mb3JtYXRFcnJvciA9IGZ1bmN0aW9uIChlcnIpIHtcblx0dmFyIG1lc3NhZ2UgPSBlcnIubWVzc2FnZTtcblx0dmFyIHN0YWNrID0gZXJyLnN0YWNrO1xuXHRpZiAoIXN0YWNrKSB7XG5cdFx0cmV0dXJuIG1lc3NhZ2U7XG5cdH0gZWxzZSBpZiAoc3RhY2suaW5kZXhPZihtZXNzYWdlKSA8IDApIHtcblx0XHRyZXR1cm4gbWVzc2FnZSArIFwiXFxuXCIgKyBzdGFjaztcblx0fVxuXHRyZXR1cm4gc3RhY2s7XG59O1xuXG52YXIgZ3JvdXAgPSBjb25zb2xlLmdyb3VwIHx8IGR1bW15O1xudmFyIGdyb3VwQ29sbGFwc2VkID0gY29uc29sZS5ncm91cENvbGxhcHNlZCB8fCBkdW1teTtcbnZhciBncm91cEVuZCA9IGNvbnNvbGUuZ3JvdXBFbmQgfHwgZHVtbXk7XG5cbm1vZHVsZS5leHBvcnRzLmdyb3VwID0gbG9nR3JvdXAoZ3JvdXApO1xuXG5tb2R1bGUuZXhwb3J0cy5ncm91cENvbGxhcHNlZCA9IGxvZ0dyb3VwKGdyb3VwQ29sbGFwc2VkKTtcblxubW9kdWxlLmV4cG9ydHMuZ3JvdXBFbmQgPSBsb2dHcm91cChncm91cEVuZCk7XG5cbi8qKlxuICogQHBhcmFtIHtMb2dMZXZlbH0gbGV2ZWwgbG9nIGxldmVsXG4gKi9cbm1vZHVsZS5leHBvcnRzLnNldExvZ0xldmVsID0gZnVuY3Rpb24gKGxldmVsKSB7XG5cdGxvZ0xldmVsID0gbGV2ZWw7XG59O1xuIiwidmFyIG1vZHVsZU1hcCA9IHtcblx0XCIuL3BhcnRpY2xlXCI6ICgpID0+IHtcblx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoLyohIF9fZmVkZXJhdGlvbl9leHBvc2VfcGFydGljbGUgKi9bX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwid2VicGFja19zaGFyaW5nX2NvbnN1bWVfZGVmYXVsdF92dWVfdnVlXCIpLCBfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJfX2ZlZGVyYXRpb25fZXhwb3NlX3BhcnRpY2xlXCIpXSkudGhlbigoKSA9PiAoKCkgPT4gKChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbmRleC5tZi5qcyAqLyBcIi4vc3JjL2luZGV4Lm1mLmpzXCIpKSkpKTtcblx0fSxcblx0XCIuL3BhcnRpY2xlVUlcIjogKCkgPT4ge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbCgvKiEgX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZVVJICovW19fd2VicGFja19yZXF1aXJlX18uZShcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfdnVlX3Z1ZVwiKSwgX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZVVJXCIpXSkudGhlbigoKSA9PiAoKCkgPT4gKChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL3NyYy9pbnNwZWN0b3IvcGFydGljbGVVSS52dWUgKi8gXCIuL3NyYy9pbnNwZWN0b3IvcGFydGljbGVVSS52dWVcIikpKSkpO1xuXHR9XG59O1xudmFyIGdldCA9IChtb2R1bGUsIGdldFNjb3BlKSA9PiB7XG5cdF9fd2VicGFja19yZXF1aXJlX18uUiA9IGdldFNjb3BlO1xuXHRnZXRTY29wZSA9IChcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9kdWxlTWFwLCBtb2R1bGUpXG5cdFx0XHQ/IG1vZHVsZU1hcFttb2R1bGVdKClcblx0XHRcdDogUHJvbWlzZS5yZXNvbHZlKCkudGhlbigoKSA9PiB7XG5cdFx0XHRcdHRocm93IG5ldyBFcnJvcignTW9kdWxlIFwiJyArIG1vZHVsZSArICdcIiBkb2VzIG5vdCBleGlzdCBpbiBjb250YWluZXIuJyk7XG5cdFx0XHR9KVxuXHQpO1xuXHRfX3dlYnBhY2tfcmVxdWlyZV9fLlIgPSB1bmRlZmluZWQ7XG5cdHJldHVybiBnZXRTY29wZTtcbn07XG52YXIgaW5pdCA9IChzaGFyZVNjb3BlLCBpbml0U2NvcGUsIHJlbW90ZUVudHJ5SW5pdE9wdGlvbnMpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5pbml0Q29udGFpbmVyRW50cnkoe1x0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0c2hhcmVTY29wZTogc2hhcmVTY29wZSxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0XHRyZW1vdGVFbnRyeUluaXRPcHRpb25zOiByZW1vdGVFbnRyeUluaXRPcHRpb25zLFxuXHRcdHNoYXJlU2NvcGVLZXk6IFwiZGVmYXVsdFwiXG5cdH0pXG59O1xuXG5cbi8vIFRoaXMgZXhwb3J0cyBnZXR0ZXJzIHRvIGRpc2FsbG93IG1vZGlmaWNhdGlvbnNcbl9fd2VicGFja19yZXF1aXJlX18uZChleHBvcnRzLCB7XG5cdGdldDogKCkgPT4gKGdldCksXG5cdGluaXQ6ICgpID0+IChpbml0KVxufSk7IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHR2YXIgZXhlY09wdGlvbnMgPSB7IGlkOiBtb2R1bGVJZCwgbW9kdWxlOiBtb2R1bGUsIGZhY3Rvcnk6IF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdLCByZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fIH07XG5cdF9fd2VicGFja19yZXF1aXJlX18uaS5mb3JFYWNoKGZ1bmN0aW9uKGhhbmRsZXIpIHsgaGFuZGxlcihleGVjT3B0aW9ucyk7IH0pO1xuXHRtb2R1bGUgPSBleGVjT3B0aW9ucy5tb2R1bGU7XG5cdGV4ZWNPcHRpb25zLmZhY3RvcnkuY2FsbChtb2R1bGUuZXhwb3J0cywgbW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgZXhlY09wdGlvbnMucmVxdWlyZSk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4vLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuX193ZWJwYWNrX3JlcXVpcmVfXy5tID0gX193ZWJwYWNrX21vZHVsZXNfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbl9fd2VicGFja19yZXF1aXJlX18uYyA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfXztcblxuLy8gZXhwb3NlIHRoZSBtb2R1bGUgZXhlY3V0aW9uIGludGVyY2VwdG9yXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmkgPSBbXTtcblxuLy8gdGhlIHN0YXJ0dXAgZnVuY3Rpb25cbl9fd2VicGFja19yZXF1aXJlX18ueCA9IHggPT4ge307XG4iLCJpZighX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uKXtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uID0ge1xuXHRcdGluaXRPcHRpb25zOiB7XCJuYW1lXCI6XCJwYXJ0aWNsZVwiLFwicmVtb3Rlc1wiOltdLFwic2hhcmVTdHJhdGVneVwiOlwidmVyc2lvbi1maXJzdFwifSxcblx0XHRjaHVua01hdGNoZXI6IGZ1bmN0aW9uKGNodW5rSWQpIHtyZXR1cm4gXCJ3ZWJwYWNrX3NoYXJpbmdfY29uc3VtZV9kZWZhdWx0X3Z1ZV92dWVcIiAhPSBjaHVua0lkfSxcblx0XHRyb290T3V0cHV0RGlyOiBcIlwiLFxuXHRcdGluaXRpYWxDb25zdW1lczogdW5kZWZpbmVkLFxuXHRcdGJ1bmRsZXJSdW50aW1lT3B0aW9uczoge31cblx0fTtcbn0iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZiA9IHt9O1xuLy8gVGhpcyBmaWxlIGNvbnRhaW5zIG9ubHkgdGhlIGVudHJ5IGNodW5rLlxuLy8gVGhlIGNodW5rIGxvYWRpbmcgZnVuY3Rpb24gZm9yIGFkZGl0aW9uYWwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmUgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gUHJvbWlzZS5hbGwoT2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5mKS5yZWR1Y2UoKHByb21pc2VzLCBrZXkpID0+IHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmZba2V5XShjaHVua0lkLCBwcm9taXNlcyk7XG5cdFx0cmV0dXJuIHByb21pc2VzO1xuXHR9LCBbXSkpO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnUgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgbm90IGJhc2VkIG9uIHRlbXBsYXRlXG5cdGlmIChjaHVua0lkID09PSBcInBhcnRpY2xlXCIpIHJldHVybiBcIm1mLmpzXCI7XG5cdC8vIHJldHVybiB1cmwgZm9yIGZpbGVuYW1lcyBiYXNlZCBvbiB0ZW1wbGF0ZVxuXHRyZXR1cm4gXCJcIiArIGNodW5rSWQgKyBcIi5qc1wiO1xufTsiLCIvLyBUaGlzIGZ1bmN0aW9uIGFsbG93IHRvIHJlZmVyZW5jZSBhbGwgY2h1bmtzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmh1ID0gKGNodW5rSWQpID0+IHtcblx0Ly8gcmV0dXJuIHVybCBmb3IgZmlsZW5hbWVzIGJhc2VkIG9uIHRlbXBsYXRlXG5cdHJldHVybiBcIlwiICsgY2h1bmtJZCArIFwiLlwiICsgX193ZWJwYWNrX3JlcXVpcmVfXy5oKCkgKyBcIi5ob3QtdXBkYXRlLmpzXCI7XG59OyIsIi8vIFRoaXMgZnVuY3Rpb24gYWxsb3cgdG8gcmVmZXJlbmNlIGFsbCBjaHVua3Ncbl9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YgPSAoY2h1bmtJZCkgPT4ge1xuXHQvLyByZXR1cm4gdXJsIGZvciBmaWxlbmFtZXMgYmFzZWQgb24gdGVtcGxhdGVcblx0cmV0dXJuIHVuZGVmaW5lZDtcbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5obXJGID0gKCkgPT4gKFwicGFydGljbGUuXCIgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLmgoKSArIFwiLmhvdC11cGRhdGUuanNvblwiKTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIwYWY1MDdmZjFiMzdhZjkyMTUxNFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsInZhciBpblByb2dyZXNzID0ge307XG52YXIgZGF0YVdlYnBhY2tQcmVmaXggPSBcIkByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGU6XCI7XG4vLyBsb2FkU2NyaXB0IGZ1bmN0aW9uIHRvIGxvYWQgYSBzY3JpcHQgdmlhIHNjcmlwdCB0YWdcbl9fd2VicGFja19yZXF1aXJlX18ubCA9ICh1cmwsIGRvbmUsIGtleSwgY2h1bmtJZCkgPT4ge1xuXHRpZihpblByb2dyZXNzW3VybF0pIHsgaW5Qcm9ncmVzc1t1cmxdLnB1c2goZG9uZSk7IHJldHVybjsgfVxuXHR2YXIgc2NyaXB0LCBuZWVkQXR0YWNoO1xuXHRpZihrZXkgIT09IHVuZGVmaW5lZCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IHNjcmlwdHMubGVuZ3RoOyBpKyspIHtcblx0XHRcdHZhciBzID0gc2NyaXB0c1tpXTtcblx0XHRcdGlmKHMuZ2V0QXR0cmlidXRlKFwic3JjXCIpID09IHVybCB8fCBzLmdldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiKSA9PSBkYXRhV2VicGFja1ByZWZpeCArIGtleSkgeyBzY3JpcHQgPSBzOyBicmVhazsgfVxuXHRcdH1cblx0fVxuXHRpZighc2NyaXB0KSB7XG5cdFx0bmVlZEF0dGFjaCA9IHRydWU7XG5cdFx0c2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG5cblx0XHRzY3JpcHQuY2hhcnNldCA9ICd1dGYtOCc7XG5cdFx0c2NyaXB0LnRpbWVvdXQgPSAxMjA7XG5cdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubmMpIHtcblx0XHRcdHNjcmlwdC5zZXRBdHRyaWJ1dGUoXCJub25jZVwiLCBfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKTtcblx0XHR9XG5cdFx0c2NyaXB0LnNldEF0dHJpYnV0ZShcImRhdGEtd2VicGFja1wiLCBkYXRhV2VicGFja1ByZWZpeCArIGtleSk7XG5cblx0XHRzY3JpcHQuc3JjID0gdXJsO1xuXHR9XG5cdGluUHJvZ3Jlc3NbdXJsXSA9IFtkb25lXTtcblx0dmFyIG9uU2NyaXB0Q29tcGxldGUgPSAocHJldiwgZXZlbnQpID0+IHtcblx0XHQvLyBhdm9pZCBtZW0gbGVha3MgaW4gSUUuXG5cdFx0c2NyaXB0Lm9uZXJyb3IgPSBzY3JpcHQub25sb2FkID0gbnVsbDtcblx0XHRjbGVhclRpbWVvdXQodGltZW91dCk7XG5cdFx0dmFyIGRvbmVGbnMgPSBpblByb2dyZXNzW3VybF07XG5cdFx0ZGVsZXRlIGluUHJvZ3Jlc3NbdXJsXTtcblx0XHRzY3JpcHQucGFyZW50Tm9kZSAmJiBzY3JpcHQucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChzY3JpcHQpO1xuXHRcdGRvbmVGbnMgJiYgZG9uZUZucy5mb3JFYWNoKChmbikgPT4gKGZuKGV2ZW50KSkpO1xuXHRcdGlmKHByZXYpIHJldHVybiBwcmV2KGV2ZW50KTtcblx0fVxuXHR2YXIgdGltZW91dCA9IHNldFRpbWVvdXQob25TY3JpcHRDb21wbGV0ZS5iaW5kKG51bGwsIHVuZGVmaW5lZCwgeyB0eXBlOiAndGltZW91dCcsIHRhcmdldDogc2NyaXB0IH0pLCAxMjAwMDApO1xuXHRzY3JpcHQub25lcnJvciA9IG9uU2NyaXB0Q29tcGxldGUuYmluZChudWxsLCBzY3JpcHQub25lcnJvcik7XG5cdHNjcmlwdC5vbmxvYWQgPSBvblNjcmlwdENvbXBsZXRlLmJpbmQobnVsbCwgc2NyaXB0Lm9ubG9hZCk7XG5cdG5lZWRBdHRhY2ggJiYgZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xufTsiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdGlmKCFpbml0U2NvcGUpIGluaXRTY29wZSA9IFtdO1xuXHQvLyBoYW5kbGluZyBjaXJjdWxhciBpbml0IGNhbGxzXG5cdHZhciBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdO1xuXHRpZighaW5pdFRva2VuKSBpbml0VG9rZW4gPSBpbml0VG9rZW5zW25hbWVdID0ge307XG5cdGlmKGluaXRTY29wZS5pbmRleE9mKGluaXRUb2tlbikgPj0gMCkgcmV0dXJuO1xuXHRpbml0U2NvcGUucHVzaChpbml0VG9rZW4pO1xuXHQvLyBvbmx5IHJ1bnMgb25jZVxuXHRpZihpbml0UHJvbWlzZXNbbmFtZV0pIHJldHVybiBpbml0UHJvbWlzZXNbbmFtZV07XG5cdC8vIGNyZWF0ZXMgYSBuZXcgc2hhcmUgc2NvcGUgaWYgbmVlZGVkXG5cdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oX193ZWJwYWNrX3JlcXVpcmVfXy5TLCBuYW1lKSkgX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdID0ge307XG5cdC8vIHJ1bnMgYWxsIGluaXQgc25pcHBldHMgZnJvbSBhbGwgbW9kdWxlcyByZWFjaGFibGVcblx0dmFyIHNjb3BlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdO1xuXHR2YXIgd2FybiA9IChtc2cpID0+IHtcblx0XHRpZiAodHlwZW9mIGNvbnNvbGUgIT09IFwidW5kZWZpbmVkXCIgJiYgY29uc29sZS53YXJuKSBjb25zb2xlLndhcm4obXNnKTtcblx0fTtcblx0dmFyIHVuaXF1ZU5hbWUgPSBcIkByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGVcIjtcblx0dmFyIHJlZ2lzdGVyID0gKG5hbWUsIHZlcnNpb24sIGZhY3RvcnksIGVhZ2VyKSA9PiB7XG5cdFx0dmFyIHZlcnNpb25zID0gc2NvcGVbbmFtZV0gPSBzY29wZVtuYW1lXSB8fCB7fTtcblx0XHR2YXIgYWN0aXZlVmVyc2lvbiA9IHZlcnNpb25zW3ZlcnNpb25dO1xuXHRcdGlmKCFhY3RpdmVWZXJzaW9uIHx8ICghYWN0aXZlVmVyc2lvbi5sb2FkZWQgJiYgKCFlYWdlciAhPSAhYWN0aXZlVmVyc2lvbi5lYWdlciA/IGVhZ2VyIDogdW5pcXVlTmFtZSA+IGFjdGl2ZVZlcnNpb24uZnJvbSkpKSB2ZXJzaW9uc1t2ZXJzaW9uXSA9IHsgZ2V0OiBmYWN0b3J5LCBmcm9tOiB1bmlxdWVOYW1lLCBlYWdlcjogISFlYWdlciB9O1xuXHR9O1xuXHR2YXIgaW5pdEV4dGVybmFsID0gKGlkKSA9PiB7XG5cdFx0dmFyIGhhbmRsZUVycm9yID0gKGVycikgPT4gKHdhcm4oXCJJbml0aWFsaXphdGlvbiBvZiBzaGFyaW5nIGV4dGVybmFsIGZhaWxlZDogXCIgKyBlcnIpKTtcblx0XHR0cnkge1xuXHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18oaWQpO1xuXHRcdFx0aWYoIW1vZHVsZSkgcmV0dXJuO1xuXHRcdFx0dmFyIGluaXRGbiA9IChtb2R1bGUpID0+IChtb2R1bGUgJiYgbW9kdWxlLmluaXQgJiYgbW9kdWxlLmluaXQoX193ZWJwYWNrX3JlcXVpcmVfXy5TW25hbWVdLCBpbml0U2NvcGUpKVxuXHRcdFx0aWYobW9kdWxlLnRoZW4pIHJldHVybiBwcm9taXNlcy5wdXNoKG1vZHVsZS50aGVuKGluaXRGbiwgaGFuZGxlRXJyb3IpKTtcblx0XHRcdHZhciBpbml0UmVzdWx0ID0gaW5pdEZuKG1vZHVsZSk7XG5cdFx0XHRpZihpbml0UmVzdWx0ICYmIGluaXRSZXN1bHQudGhlbikgcmV0dXJuIHByb21pc2VzLnB1c2goaW5pdFJlc3VsdFsnY2F0Y2gnXShoYW5kbGVFcnJvcikpO1xuXHRcdH0gY2F0Y2goZXJyKSB7IGhhbmRsZUVycm9yKGVycik7IH1cblx0fVxuXHR2YXIgcHJvbWlzZXMgPSBbXTtcblx0c3dpdGNoKG5hbWUpIHtcblx0XHRjYXNlIFwiZGVmYXVsdFwiOiB7XG5cdFx0XHRyZWdpc3RlcihcIkByZW5lb3MvYXBwXCIsIFwiMS4wLjZcIiwgKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19yZW5lb3NfYXBwX2luZGV4X2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSkpKSk7XG5cdFx0XHRyZWdpc3RlcihcInRocmVlXCIsIFwiMC4xODAuMFwiLCAoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXy5lKFwidmVuZG9ycy1ub2RlX21vZHVsZXNfdGhyZWVfYnVpbGRfdGhyZWVfbW9kdWxlX2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSkpKTtcblx0XHRcdHJlZ2lzdGVyKFwidnVlXCIsIFwiMy41LjIxXCIsICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc192dWVfZGlzdF92dWVfcnVudGltZV9lc20tYnVuZGxlcl9qc1wiKS50aGVuKCgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpKSkpO1xuXHRcdH1cblx0XHRicmVhaztcblx0fVxuXHRpZighcHJvbWlzZXMubGVuZ3RoKSByZXR1cm4gaW5pdFByb21pc2VzW25hbWVdID0gMTtcblx0cmV0dXJuIGluaXRQcm9taXNlc1tuYW1lXSA9IFByb21pc2UuYWxsKHByb21pc2VzKS50aGVuKCgpID0+IChpbml0UHJvbWlzZXNbbmFtZV0gPSAxKSk7XG59OyIsInZhciBjdXJyZW50TW9kdWxlRGF0YSA9IHt9O1xudmFyIGluc3RhbGxlZE1vZHVsZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmM7XG5cbi8vIG1vZHVsZSBhbmQgcmVxdWlyZSBjcmVhdGlvblxudmFyIGN1cnJlbnRDaGlsZE1vZHVsZTtcbnZhciBjdXJyZW50UGFyZW50cyA9IFtdO1xuXG4vLyBzdGF0dXNcbnZhciByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMgPSBbXTtcbnZhciBjdXJyZW50U3RhdHVzID0gXCJpZGxlXCI7XG5cbi8vIHdoaWxlIGRvd25sb2FkaW5nXG52YXIgYmxvY2tpbmdQcm9taXNlcyA9IDA7XG52YXIgYmxvY2tpbmdQcm9taXNlc1dhaXRpbmcgPSBbXTtcblxuLy8gVGhlIHVwZGF0ZSBpbmZvXG52YXIgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnM7XG52YXIgcXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckQgPSBjdXJyZW50TW9kdWxlRGF0YTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5pLnB1c2goZnVuY3Rpb24gKG9wdGlvbnMpIHtcblx0dmFyIG1vZHVsZSA9IG9wdGlvbnMubW9kdWxlO1xuXHR2YXIgcmVxdWlyZSA9IGNyZWF0ZVJlcXVpcmUob3B0aW9ucy5yZXF1aXJlLCBvcHRpb25zLmlkKTtcblx0bW9kdWxlLmhvdCA9IGNyZWF0ZU1vZHVsZUhvdE9iamVjdChvcHRpb25zLmlkLCBtb2R1bGUpO1xuXHRtb2R1bGUucGFyZW50cyA9IGN1cnJlbnRQYXJlbnRzO1xuXHRtb2R1bGUuY2hpbGRyZW4gPSBbXTtcblx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0b3B0aW9ucy5yZXF1aXJlID0gcmVxdWlyZTtcbn0pO1xuXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uaG1ySSA9IHt9O1xuXG5mdW5jdGlvbiBjcmVhdGVSZXF1aXJlKHJlcXVpcmUsIG1vZHVsZUlkKSB7XG5cdHZhciBtZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdO1xuXHRpZiAoIW1lKSByZXR1cm4gcmVxdWlyZTtcblx0dmFyIGZuID0gZnVuY3Rpb24gKHJlcXVlc3QpIHtcblx0XHRpZiAobWUuaG90LmFjdGl2ZSkge1xuXHRcdFx0aWYgKGluc3RhbGxlZE1vZHVsZXNbcmVxdWVzdF0pIHtcblx0XHRcdFx0dmFyIHBhcmVudHMgPSBpbnN0YWxsZWRNb2R1bGVzW3JlcXVlc3RdLnBhcmVudHM7XG5cdFx0XHRcdGlmIChwYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpID09PSAtMSkge1xuXHRcdFx0XHRcdHBhcmVudHMucHVzaChtb2R1bGVJZCk7XG5cdFx0XHRcdH1cblx0XHRcdH0gZWxzZSB7XG5cdFx0XHRcdGN1cnJlbnRQYXJlbnRzID0gW21vZHVsZUlkXTtcblx0XHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gcmVxdWVzdDtcblx0XHRcdH1cblx0XHRcdGlmIChtZS5jaGlsZHJlbi5pbmRleE9mKHJlcXVlc3QpID09PSAtMSkge1xuXHRcdFx0XHRtZS5jaGlsZHJlbi5wdXNoKHJlcXVlc3QpO1xuXHRcdFx0fVxuXHRcdH0gZWxzZSB7XG5cdFx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcdFwiW0hNUl0gdW5leHBlY3RlZCByZXF1aXJlKFwiICtcblx0XHRcdFx0XHRyZXF1ZXN0ICtcblx0XHRcdFx0XHRcIikgZnJvbSBkaXNwb3NlZCBtb2R1bGUgXCIgK1xuXHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHQpO1xuXHRcdFx0Y3VycmVudFBhcmVudHMgPSBbXTtcblx0XHR9XG5cdFx0cmV0dXJuIHJlcXVpcmUocmVxdWVzdCk7XG5cdH07XG5cdHZhciBjcmVhdGVQcm9wZXJ0eURlc2NyaXB0b3IgPSBmdW5jdGlvbiAobmFtZSkge1xuXHRcdHJldHVybiB7XG5cdFx0XHRjb25maWd1cmFibGU6IHRydWUsXG5cdFx0XHRlbnVtZXJhYmxlOiB0cnVlLFxuXHRcdFx0Z2V0OiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiByZXF1aXJlW25hbWVdO1xuXHRcdFx0fSxcblx0XHRcdHNldDogZnVuY3Rpb24gKHZhbHVlKSB7XG5cdFx0XHRcdHJlcXVpcmVbbmFtZV0gPSB2YWx1ZTtcblx0XHRcdH1cblx0XHR9O1xuXHR9O1xuXHRmb3IgKHZhciBuYW1lIGluIHJlcXVpcmUpIHtcblx0XHRpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHJlcXVpcmUsIG5hbWUpICYmIG5hbWUgIT09IFwiZVwiKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZm4sIG5hbWUsIGNyZWF0ZVByb3BlcnR5RGVzY3JpcHRvcihuYW1lKSk7XG5cdFx0fVxuXHR9XG5cdGZuLmUgPSBmdW5jdGlvbiAoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkge1xuXHRcdHJldHVybiB0cmFja0Jsb2NraW5nUHJvbWlzZShyZXF1aXJlLmUoY2h1bmtJZCwgZmV0Y2hQcmlvcml0eSkpO1xuXHR9O1xuXHRyZXR1cm4gZm47XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZU1vZHVsZUhvdE9iamVjdChtb2R1bGVJZCwgbWUpIHtcblx0dmFyIF9tYWluID0gY3VycmVudENoaWxkTW9kdWxlICE9PSBtb2R1bGVJZDtcblx0dmFyIGhvdCA9IHtcblx0XHQvLyBwcml2YXRlIHN0dWZmXG5cdFx0X2FjY2VwdGVkRGVwZW5kZW5jaWVzOiB7fSxcblx0XHRfYWNjZXB0ZWRFcnJvckhhbmRsZXJzOiB7fSxcblx0XHRfZGVjbGluZWREZXBlbmRlbmNpZXM6IHt9LFxuXHRcdF9zZWxmQWNjZXB0ZWQ6IGZhbHNlLFxuXHRcdF9zZWxmRGVjbGluZWQ6IGZhbHNlLFxuXHRcdF9zZWxmSW52YWxpZGF0ZWQ6IGZhbHNlLFxuXHRcdF9kaXNwb3NlSGFuZGxlcnM6IFtdLFxuXHRcdF9tYWluOiBfbWFpbixcblx0XHRfcmVxdWlyZVNlbGY6IGZ1bmN0aW9uICgpIHtcblx0XHRcdGN1cnJlbnRQYXJlbnRzID0gbWUucGFyZW50cy5zbGljZSgpO1xuXHRcdFx0Y3VycmVudENoaWxkTW9kdWxlID0gX21haW4gPyB1bmRlZmluZWQgOiBtb2R1bGVJZDtcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpO1xuXHRcdH0sXG5cblx0XHQvLyBNb2R1bGUgQVBJXG5cdFx0YWN0aXZlOiB0cnVlLFxuXHRcdGFjY2VwdDogZnVuY3Rpb24gKGRlcCwgY2FsbGJhY2ssIGVycm9ySGFuZGxlcikge1xuXHRcdFx0aWYgKGRlcCA9PT0gdW5kZWZpbmVkKSBob3QuX3NlbGZBY2NlcHRlZCA9IHRydWU7XG5cdFx0XHRlbHNlIGlmICh0eXBlb2YgZGVwID09PSBcImZ1bmN0aW9uXCIpIGhvdC5fc2VsZkFjY2VwdGVkID0gZGVwO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpIHtcblx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBkZXAubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcFtpXV0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0XHRob3QuX2FjY2VwdGVkRXJyb3JIYW5kbGVyc1tkZXBbaV1dID0gZXJyb3JIYW5kbGVyO1xuXHRcdFx0XHR9XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRob3QuX2FjY2VwdGVkRGVwZW5kZW5jaWVzW2RlcF0gPSBjYWxsYmFjayB8fCBmdW5jdGlvbiAoKSB7fTtcblx0XHRcdFx0aG90Ll9hY2NlcHRlZEVycm9ySGFuZGxlcnNbZGVwXSA9IGVycm9ySGFuZGxlcjtcblx0XHRcdH1cblx0XHR9LFxuXHRcdGRlY2xpbmU6IGZ1bmN0aW9uIChkZXApIHtcblx0XHRcdGlmIChkZXAgPT09IHVuZGVmaW5lZCkgaG90Ll9zZWxmRGVjbGluZWQgPSB0cnVlO1xuXHRcdFx0ZWxzZSBpZiAodHlwZW9mIGRlcCA9PT0gXCJvYmplY3RcIiAmJiBkZXAgIT09IG51bGwpXG5cdFx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgZGVwLmxlbmd0aDsgaSsrKVxuXHRcdFx0XHRcdGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwW2ldXSA9IHRydWU7XG5cdFx0XHRlbHNlIGhvdC5fZGVjbGluZWREZXBlbmRlbmNpZXNbZGVwXSA9IHRydWU7XG5cdFx0fSxcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoY2FsbGJhY2spIHtcblx0XHRcdGhvdC5fZGlzcG9zZUhhbmRsZXJzLnB1c2goY2FsbGJhY2spO1xuXHRcdH0sXG5cdFx0YWRkRGlzcG9zZUhhbmRsZXI6IGZ1bmN0aW9uIChjYWxsYmFjaykge1xuXHRcdFx0aG90Ll9kaXNwb3NlSGFuZGxlcnMucHVzaChjYWxsYmFjayk7XG5cdFx0fSxcblx0XHRyZW1vdmVEaXNwb3NlSGFuZGxlcjogZnVuY3Rpb24gKGNhbGxiYWNrKSB7XG5cdFx0XHR2YXIgaWR4ID0gaG90Ll9kaXNwb3NlSGFuZGxlcnMuaW5kZXhPZihjYWxsYmFjayk7XG5cdFx0XHRpZiAoaWR4ID49IDApIGhvdC5fZGlzcG9zZUhhbmRsZXJzLnNwbGljZShpZHgsIDEpO1xuXHRcdH0sXG5cdFx0aW52YWxpZGF0ZTogZnVuY3Rpb24gKCkge1xuXHRcdFx0dGhpcy5fc2VsZkludmFsaWRhdGVkID0gdHJ1ZTtcblx0XHRcdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdFx0XHRjYXNlIFwiaWRsZVwiOlxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzID0gW107XG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJJKS5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdFx0XHRtb2R1bGVJZCxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnNcblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0c2V0U3RhdHVzKFwicmVhZHlcIik7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0XHRcdE9iamVjdC5rZXlzKF9fd2VicGFja19yZXF1aXJlX18uaG1ySSkuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG5cdFx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmhtcklba2V5XShcblx0XHRcdFx0XHRcdFx0bW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwicHJlcGFyZVwiOlxuXHRcdFx0XHRjYXNlIFwiY2hlY2tcIjpcblx0XHRcdFx0Y2FzZSBcImRpc3Bvc2VcIjpcblx0XHRcdFx0Y2FzZSBcImFwcGx5XCI6XG5cdFx0XHRcdFx0KHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyA9IHF1ZXVlZEludmFsaWRhdGVkTW9kdWxlcyB8fCBbXSkucHVzaChcblx0XHRcdFx0XHRcdG1vZHVsZUlkXG5cdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0ZGVmYXVsdDpcblx0XHRcdFx0XHQvLyBpZ25vcmUgcmVxdWVzdHMgaW4gZXJyb3Igc3RhdGVzXG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHR9XG5cdFx0fSxcblxuXHRcdC8vIE1hbmFnZW1lbnQgQVBJXG5cdFx0Y2hlY2s6IGhvdENoZWNrLFxuXHRcdGFwcGx5OiBob3RBcHBseSxcblx0XHRzdGF0dXM6IGZ1bmN0aW9uIChsKSB7XG5cdFx0XHRpZiAoIWwpIHJldHVybiBjdXJyZW50U3RhdHVzO1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRhZGRTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0cmVnaXN0ZXJlZFN0YXR1c0hhbmRsZXJzLnB1c2gobCk7XG5cdFx0fSxcblx0XHRyZW1vdmVTdGF0dXNIYW5kbGVyOiBmdW5jdGlvbiAobCkge1xuXHRcdFx0dmFyIGlkeCA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVycy5pbmRleE9mKGwpO1xuXHRcdFx0aWYgKGlkeCA+PSAwKSByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMuc3BsaWNlKGlkeCwgMSk7XG5cdFx0fSxcblxuXHRcdC8vIGluaGVyaXQgZnJvbSBwcmV2aW91cyBkaXNwb3NlIGNhbGxcblx0XHRkYXRhOiBjdXJyZW50TW9kdWxlRGF0YVttb2R1bGVJZF1cblx0fTtcblx0Y3VycmVudENoaWxkTW9kdWxlID0gdW5kZWZpbmVkO1xuXHRyZXR1cm4gaG90O1xufVxuXG5mdW5jdGlvbiBzZXRTdGF0dXMobmV3U3RhdHVzKSB7XG5cdGN1cnJlbnRTdGF0dXMgPSBuZXdTdGF0dXM7XG5cdHZhciByZXN1bHRzID0gW107XG5cblx0Zm9yICh2YXIgaSA9IDA7IGkgPCByZWdpc3RlcmVkU3RhdHVzSGFuZGxlcnMubGVuZ3RoOyBpKyspXG5cdFx0cmVzdWx0c1tpXSA9IHJlZ2lzdGVyZWRTdGF0dXNIYW5kbGVyc1tpXS5jYWxsKG51bGwsIG5ld1N0YXR1cyk7XG5cblx0cmV0dXJuIFByb21pc2UuYWxsKHJlc3VsdHMpLnRoZW4oZnVuY3Rpb24gKCkge30pO1xufVxuXG5mdW5jdGlvbiB1bmJsb2NrKCkge1xuXHRpZiAoLS1ibG9ja2luZ1Byb21pc2VzID09PSAwKSB7XG5cdFx0c2V0U3RhdHVzKFwicmVhZHlcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRpZiAoYmxvY2tpbmdQcm9taXNlcyA9PT0gMCkge1xuXHRcdFx0XHR2YXIgbGlzdCA9IGJsb2NraW5nUHJvbWlzZXNXYWl0aW5nO1xuXHRcdFx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZyA9IFtdO1xuXHRcdFx0XHRmb3IgKHZhciBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0XHRsaXN0W2ldKCk7XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHR9KTtcblx0fVxufVxuXG5mdW5jdGlvbiB0cmFja0Jsb2NraW5nUHJvbWlzZShwcm9taXNlKSB7XG5cdHN3aXRjaCAoY3VycmVudFN0YXR1cykge1xuXHRcdGNhc2UgXCJyZWFkeVwiOlxuXHRcdFx0c2V0U3RhdHVzKFwicHJlcGFyZVwiKTtcblx0XHQvKiBmYWxsdGhyb3VnaCAqL1xuXHRcdGNhc2UgXCJwcmVwYXJlXCI6XG5cdFx0XHRibG9ja2luZ1Byb21pc2VzKys7XG5cdFx0XHRwcm9taXNlLnRoZW4odW5ibG9jaywgdW5ibG9jayk7XG5cdFx0XHRyZXR1cm4gcHJvbWlzZTtcblx0XHRkZWZhdWx0OlxuXHRcdFx0cmV0dXJuIHByb21pc2U7XG5cdH1cbn1cblxuZnVuY3Rpb24gd2FpdEZvckJsb2NraW5nUHJvbWlzZXMoZm4pIHtcblx0aWYgKGJsb2NraW5nUHJvbWlzZXMgPT09IDApIHJldHVybiBmbigpO1xuXHRyZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUpIHtcblx0XHRibG9ja2luZ1Byb21pc2VzV2FpdGluZy5wdXNoKGZ1bmN0aW9uICgpIHtcblx0XHRcdHJlc29sdmUoZm4oKSk7XG5cdFx0fSk7XG5cdH0pO1xufVxuXG5mdW5jdGlvbiBob3RDaGVjayhhcHBseU9uVXBkYXRlKSB7XG5cdGlmIChjdXJyZW50U3RhdHVzICE9PSBcImlkbGVcIikge1xuXHRcdHRocm93IG5ldyBFcnJvcihcImNoZWNrKCkgaXMgb25seSBhbGxvd2VkIGluIGlkbGUgc3RhdHVzXCIpO1xuXHR9XG5cdHJldHVybiBzZXRTdGF0dXMoXCJjaGVja1wiKVxuXHRcdC50aGVuKF9fd2VicGFja19yZXF1aXJlX18uaG1yTSlcblx0XHQudGhlbihmdW5jdGlvbiAodXBkYXRlKSB7XG5cdFx0XHRpZiAoIXVwZGF0ZSkge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkgPyBcInJlYWR5XCIgOiBcImlkbGVcIikudGhlbihcblx0XHRcdFx0XHRmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRyZXR1cm4gbnVsbDtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdCk7XG5cdFx0XHR9XG5cblx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJwcmVwYXJlXCIpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHR2YXIgdXBkYXRlZE1vZHVsZXMgPSBbXTtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblxuXHRcdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0XHRcdFx0T2JqZWN0LmtleXMoX193ZWJwYWNrX3JlcXVpcmVfXy5obXJDKS5yZWR1Y2UoZnVuY3Rpb24gKFxuXHRcdFx0XHRcdFx0cHJvbWlzZXMsXG5cdFx0XHRcdFx0XHRrZXlcblx0XHRcdFx0XHQpIHtcblx0XHRcdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1yQ1trZXldKFxuXHRcdFx0XHRcdFx0XHR1cGRhdGUuYyxcblx0XHRcdFx0XHRcdFx0dXBkYXRlLnIsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZS5tLFxuXHRcdFx0XHRcdFx0XHRwcm9taXNlcyxcblx0XHRcdFx0XHRcdFx0Y3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMsXG5cdFx0XHRcdFx0XHRcdHVwZGF0ZWRNb2R1bGVzXG5cdFx0XHRcdFx0XHQpO1xuXHRcdFx0XHRcdFx0cmV0dXJuIHByb21pc2VzO1xuXHRcdFx0XHRcdH0sIFtdKVxuXHRcdFx0XHQpLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0XHRcdHJldHVybiB3YWl0Rm9yQmxvY2tpbmdQcm9taXNlcyhmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdFx0XHRpZiAoYXBwbHlPblVwZGF0ZSkge1xuXHRcdFx0XHRcdFx0XHRyZXR1cm4gaW50ZXJuYWxBcHBseShhcHBseU9uVXBkYXRlKTtcblx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdHJldHVybiBzZXRTdGF0dXMoXCJyZWFkeVwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRcdFx0cmV0dXJuIHVwZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0fSk7XG5cdFx0XHRcdH0pO1xuXHRcdFx0fSk7XG5cdFx0fSk7XG59XG5cbmZ1bmN0aW9uIGhvdEFwcGx5KG9wdGlvbnMpIHtcblx0aWYgKGN1cnJlbnRTdGF0dXMgIT09IFwicmVhZHlcIikge1xuXHRcdHJldHVybiBQcm9taXNlLnJlc29sdmUoKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdHRocm93IG5ldyBFcnJvcihcblx0XHRcdFx0XCJhcHBseSgpIGlzIG9ubHkgYWxsb3dlZCBpbiByZWFkeSBzdGF0dXMgKHN0YXRlOiBcIiArXG5cdFx0XHRcdFx0Y3VycmVudFN0YXR1cyArXG5cdFx0XHRcdFx0XCIpXCJcblx0XHRcdCk7XG5cdFx0fSk7XG5cdH1cblx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucyk7XG59XG5cbmZ1bmN0aW9uIGludGVybmFsQXBwbHkob3B0aW9ucykge1xuXHRvcHRpb25zID0gb3B0aW9ucyB8fCB7fTtcblxuXHRhcHBseUludmFsaWRhdGVkTW9kdWxlcygpO1xuXG5cdHZhciByZXN1bHRzID0gY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMubWFwKGZ1bmN0aW9uIChoYW5kbGVyKSB7XG5cdFx0cmV0dXJuIGhhbmRsZXIob3B0aW9ucyk7XG5cdH0pO1xuXHRjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycyA9IHVuZGVmaW5lZDtcblxuXHR2YXIgZXJyb3JzID0gcmVzdWx0c1xuXHRcdC5tYXAoZnVuY3Rpb24gKHIpIHtcblx0XHRcdHJldHVybiByLmVycm9yO1xuXHRcdH0pXG5cdFx0LmZpbHRlcihCb29sZWFuKTtcblxuXHRpZiAoZXJyb3JzLmxlbmd0aCA+IDApIHtcblx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiYWJvcnRcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHR0aHJvdyBlcnJvcnNbMF07XG5cdFx0fSk7XG5cdH1cblxuXHQvLyBOb3cgaW4gXCJkaXNwb3NlXCIgcGhhc2Vcblx0dmFyIGRpc3Bvc2VQcm9taXNlID0gc2V0U3RhdHVzKFwiZGlzcG9zZVwiKTtcblxuXHRyZXN1bHRzLmZvckVhY2goZnVuY3Rpb24gKHJlc3VsdCkge1xuXHRcdGlmIChyZXN1bHQuZGlzcG9zZSkgcmVzdWx0LmRpc3Bvc2UoKTtcblx0fSk7XG5cblx0Ly8gTm93IGluIFwiYXBwbHlcIiBwaGFzZVxuXHR2YXIgYXBwbHlQcm9taXNlID0gc2V0U3RhdHVzKFwiYXBwbHlcIik7XG5cblx0dmFyIGVycm9yO1xuXHR2YXIgcmVwb3J0RXJyb3IgPSBmdW5jdGlvbiAoZXJyKSB7XG5cdFx0aWYgKCFlcnJvcikgZXJyb3IgPSBlcnI7XG5cdH07XG5cblx0dmFyIG91dGRhdGVkTW9kdWxlcyA9IFtdO1xuXG5cdHZhciBvbkFjY2VwdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdHJldHVybiBQcm9taXNlLmFsbChbZGlzcG9zZVByb21pc2UsIGFwcGx5UHJvbWlzZV0pLnRoZW4oZnVuY3Rpb24gKCkge1xuXHRcdFx0Ly8gaGFuZGxlIGVycm9ycyBpbiBhY2NlcHQgaGFuZGxlcnMgYW5kIHNlbGYgYWNjZXB0ZWQgbW9kdWxlIGxvYWRcblx0XHRcdGlmIChlcnJvcikge1xuXHRcdFx0XHRyZXR1cm4gc2V0U3RhdHVzKFwiZmFpbFwiKS50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHR0aHJvdyBlcnJvcjtcblx0XHRcdFx0fSk7XG5cdFx0XHR9XG5cblx0XHRcdGlmIChxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMpIHtcblx0XHRcdFx0cmV0dXJuIGludGVybmFsQXBwbHkob3B0aW9ucykudGhlbihmdW5jdGlvbiAobGlzdCkge1xuXHRcdFx0XHRcdG91dGRhdGVkTW9kdWxlcy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVJZCkge1xuXHRcdFx0XHRcdFx0aWYgKGxpc3QuaW5kZXhPZihtb2R1bGVJZCkgPCAwKSBsaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdHJldHVybiBsaXN0O1xuXHRcdFx0XHR9KTtcblx0XHRcdH1cblxuXHRcdFx0cmV0dXJuIHNldFN0YXR1cyhcImlkbGVcIikudGhlbihmdW5jdGlvbiAoKSB7XG5cdFx0XHRcdHJldHVybiBvdXRkYXRlZE1vZHVsZXM7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0fTtcblxuXHRyZXR1cm4gUHJvbWlzZS5hbGwoXG5cdFx0cmVzdWx0c1xuXHRcdFx0LmZpbHRlcihmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQuYXBwbHk7XG5cdFx0XHR9KVxuXHRcdFx0Lm1hcChmdW5jdGlvbiAocmVzdWx0KSB7XG5cdFx0XHRcdHJldHVybiByZXN1bHQuYXBwbHkocmVwb3J0RXJyb3IpO1xuXHRcdFx0fSlcblx0KVxuXHRcdC50aGVuKGZ1bmN0aW9uIChhcHBseVJlc3VsdHMpIHtcblx0XHRcdGFwcGx5UmVzdWx0cy5mb3JFYWNoKGZ1bmN0aW9uIChtb2R1bGVzKSB7XG5cdFx0XHRcdGlmIChtb2R1bGVzKSB7XG5cdFx0XHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHRcdFx0XHRvdXRkYXRlZE1vZHVsZXMucHVzaChtb2R1bGVzW2ldKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH0pO1xuXHRcdH0pXG5cdFx0LnRoZW4ob25BY2NlcHRlZCk7XG59XG5cbmZ1bmN0aW9uIGFwcGx5SW52YWxpZGF0ZWRNb2R1bGVzKCkge1xuXHRpZiAocXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzKSB7XG5cdFx0aWYgKCFjdXJyZW50VXBkYXRlQXBwbHlIYW5kbGVycykgY3VycmVudFVwZGF0ZUFwcGx5SGFuZGxlcnMgPSBbXTtcblx0XHRPYmplY3Qua2V5cyhfX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkpLmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuXHRcdFx0cXVldWVkSW52YWxpZGF0ZWRNb2R1bGVzLmZvckVhY2goZnVuY3Rpb24gKG1vZHVsZUlkKSB7XG5cdFx0XHRcdF9fd2VicGFja19yZXF1aXJlX18uaG1ySVtrZXldKFxuXHRcdFx0XHRcdG1vZHVsZUlkLFxuXHRcdFx0XHRcdGN1cnJlbnRVcGRhdGVBcHBseUhhbmRsZXJzXG5cdFx0XHRcdCk7XG5cdFx0XHR9KTtcblx0XHR9KTtcblx0XHRxdWV1ZWRJbnZhbGlkYXRlZE1vZHVsZXMgPSB1bmRlZmluZWQ7XG5cdFx0cmV0dXJuIHRydWU7XG5cdH1cbn0iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9tb2RzL3BhcnRpY2xlL1wiOyIsInZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG52YXIgbW9kdWxlVG9IYW5kbGVyTWFwcGluZyA9IHtcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3Z1ZS92dWVcIjoge1xuXHRcdGdldHRlcjogKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcInZlbmRvcnMtbm9kZV9tb2R1bGVzX3Z1ZV9kaXN0X3Z1ZV9ydW50aW1lX2VzbS1idW5kbGVyX2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISB2dWUgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpKSksXG5cdFx0c2hhcmVJbmZvOiB7XG5cdFx0XHRzaGFyZUNvbmZpZzoge1xuXHRcdFx0ICBcImZpeGVkRGVwZW5kZW5jaWVzXCI6IGZhbHNlLFxuXHRcdFx0ICBcInJlcXVpcmVkVmVyc2lvblwiOiBcIlwiLFxuXHRcdFx0ICBcInN0cmljdFZlcnNpb25cIjogdHJ1ZSxcblx0XHRcdCAgXCJzaW5nbGV0b25cIjogZmFsc2UsXG5cdFx0XHQgIFwiZWFnZXJcIjogZmFsc2Vcblx0XHRcdH0sXG5cdFx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHR9LFxuXHRcdHNoYXJlS2V5OiBcInZ1ZVwiLFxuXHR9LFxuXHRcIndlYnBhY2svc2hhcmluZy9jb25zdW1lL2RlZmF1bHQvQHJlbmVvcy9hcHAvQHJlbmVvcy9hcHBcIjoge1xuXHRcdGdldHRlcjogKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18uZShcIm5vZGVfbW9kdWxlc19yZW5lb3NfYXBwX2luZGV4X2pzXCIpLnRoZW4oKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISBAcmVuZW9zL2FwcCAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSkpKSxcblx0XHRzaGFyZUluZm86IHtcblx0XHRcdHNoYXJlQ29uZmlnOiB7XG5cdFx0XHQgIFwiZml4ZWREZXBlbmRlbmNpZXNcIjogZmFsc2UsXG5cdFx0XHQgIFwicmVxdWlyZWRWZXJzaW9uXCI6IFwiXCIsXG5cdFx0XHQgIFwic3RyaWN0VmVyc2lvblwiOiB0cnVlLFxuXHRcdFx0ICBcInNpbmdsZXRvblwiOiBmYWxzZSxcblx0XHRcdCAgXCJlYWdlclwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdH0sXG5cdFx0c2hhcmVLZXk6IFwiQHJlbmVvcy9hcHBcIixcblx0fSxcblx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3RocmVlL3RocmVlXCI6IHtcblx0XHRnZXR0ZXI6ICgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fLmUoXCJ2ZW5kb3JzLW5vZGVfbW9kdWxlc190aHJlZV9idWlsZF90aHJlZV9tb2R1bGVfanNcIikudGhlbigoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIHRocmVlICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSkpKSxcblx0XHRzaGFyZUluZm86IHtcblx0XHRcdHNoYXJlQ29uZmlnOiB7XG5cdFx0XHQgIFwiZml4ZWREZXBlbmRlbmNpZXNcIjogZmFsc2UsXG5cdFx0XHQgIFwicmVxdWlyZWRWZXJzaW9uXCI6IFwiXCIsXG5cdFx0XHQgIFwic3RyaWN0VmVyc2lvblwiOiB0cnVlLFxuXHRcdFx0ICBcInNpbmdsZXRvblwiOiBmYWxzZSxcblx0XHRcdCAgXCJlYWdlclwiOiBmYWxzZVxuXHRcdFx0fSxcblx0XHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdH0sXG5cdFx0c2hhcmVLZXk6IFwidGhyZWVcIixcblx0fVxufTtcbi8vIG5vIGNvbnN1bWVzIGluIGluaXRpYWwgY2h1bmtzXG52YXIgY2h1bmtNYXBwaW5nID0ge1xuXHRcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfdnVlX3Z1ZVwiOiBbXG5cdFx0XCJ3ZWJwYWNrL3NoYXJpbmcvY29uc3VtZS9kZWZhdWx0L3Z1ZS92dWVcIlxuXHRdLFxuXHRcIl9fZmVkZXJhdGlvbl9leHBvc2VfcGFydGljbGVcIjogW1xuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC9AcmVuZW9zL2FwcC9AcmVuZW9zL2FwcFwiLFxuXHRcdFwid2VicGFjay9zaGFyaW5nL2NvbnN1bWUvZGVmYXVsdC90aHJlZS90aHJlZVwiXG5cdF1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmYuY29uc3VtZXMgPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLmNvbnN1bWVzKHtcblx0Y2h1bmtNYXBwaW5nOiBjaHVua01hcHBpbmcsXG5cdGluc3RhbGxlZE1vZHVsZXM6IGluc3RhbGxlZE1vZHVsZXMsXG5cdGNodW5rSWQ6IGNodW5rSWQsXG5cdG1vZHVsZVRvSGFuZGxlck1hcHBpbmc6IG1vZHVsZVRvSGFuZGxlck1hcHBpbmcsXG5cdHByb21pc2VzOiBwcm9taXNlcyxcblx0d2VicGFja1JlcXVpcmU6X193ZWJwYWNrX3JlcXVpcmVfX1xuXHR9KTtcbn0iLCJpZiAodHlwZW9mIGRvY3VtZW50ID09PSBcInVuZGVmaW5lZFwiKSByZXR1cm47XG52YXIgY3JlYXRlU3R5bGVzaGVldCA9IChjaHVua0lkLCBmdWxsaHJlZiwgb2xkVGFnLCByZXNvbHZlLCByZWplY3QpID0+IHtcblx0dmFyIGxpbmtUYWcgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwibGlua1wiKTtcblxuXHRsaW5rVGFnLnJlbCA9IFwic3R5bGVzaGVldFwiO1xuXHRsaW5rVGFnLnR5cGUgPSBcInRleHQvY3NzXCI7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm5jKSB7XG5cdFx0bGlua1RhZy5ub25jZSA9IF9fd2VicGFja19yZXF1aXJlX18ubmM7XG5cdH1cblx0dmFyIG9uTGlua0NvbXBsZXRlID0gKGV2ZW50KSA9PiB7XG5cdFx0Ly8gYXZvaWQgbWVtIGxlYWtzLlxuXHRcdGxpbmtUYWcub25lcnJvciA9IGxpbmtUYWcub25sb2FkID0gbnVsbDtcblx0XHRpZiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnKSB7XG5cdFx0XHRyZXNvbHZlKCk7XG5cdFx0fSBlbHNlIHtcblx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiBldmVudC50eXBlO1xuXHRcdFx0dmFyIHJlYWxIcmVmID0gZXZlbnQgJiYgZXZlbnQudGFyZ2V0ICYmIGV2ZW50LnRhcmdldC5ocmVmIHx8IGZ1bGxocmVmO1xuXHRcdFx0dmFyIGVyciA9IG5ldyBFcnJvcihcIkxvYWRpbmcgQ1NTIGNodW5rIFwiICsgY2h1bmtJZCArIFwiIGZhaWxlZC5cXG4oXCIgKyBlcnJvclR5cGUgKyBcIjogXCIgKyByZWFsSHJlZiArIFwiKVwiKTtcblx0XHRcdGVyci5uYW1lID0gXCJDaHVua0xvYWRFcnJvclwiO1xuXHRcdFx0ZXJyLmNvZGUgPSBcIkNTU19DSFVOS19MT0FEX0ZBSUxFRFwiO1xuXHRcdFx0ZXJyLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRlcnIucmVxdWVzdCA9IHJlYWxIcmVmO1xuXHRcdFx0aWYgKGxpbmtUYWcucGFyZW50Tm9kZSkgbGlua1RhZy5wYXJlbnROb2RlLnJlbW92ZUNoaWxkKGxpbmtUYWcpXG5cdFx0XHRyZWplY3QoZXJyKTtcblx0XHR9XG5cdH1cblx0bGlua1RhZy5vbmVycm9yID0gbGlua1RhZy5vbmxvYWQgPSBvbkxpbmtDb21wbGV0ZTtcblx0bGlua1RhZy5ocmVmID0gZnVsbGhyZWY7XG5cblxuXHRpZiAob2xkVGFnKSB7XG5cdFx0b2xkVGFnLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGxpbmtUYWcsIG9sZFRhZy5uZXh0U2libGluZyk7XG5cdH0gZWxzZSB7XG5cdFx0ZG9jdW1lbnQuaGVhZC5hcHBlbmRDaGlsZChsaW5rVGFnKTtcblx0fVxuXHRyZXR1cm4gbGlua1RhZztcbn07XG52YXIgZmluZFN0eWxlc2hlZXQgPSAoaHJlZiwgZnVsbGhyZWYpID0+IHtcblx0dmFyIGV4aXN0aW5nTGlua1RhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcImxpbmtcIik7XG5cdGZvcih2YXIgaSA9IDA7IGkgPCBleGlzdGluZ0xpbmtUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0dmFyIHRhZyA9IGV4aXN0aW5nTGlua1RhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKSB8fCB0YWcuZ2V0QXR0cmlidXRlKFwiaHJlZlwiKTtcblx0XHRpZih0YWcucmVsID09PSBcInN0eWxlc2hlZXRcIiAmJiAoZGF0YUhyZWYgPT09IGhyZWYgfHwgZGF0YUhyZWYgPT09IGZ1bGxocmVmKSkgcmV0dXJuIHRhZztcblx0fVxuXHR2YXIgZXhpc3RpbmdTdHlsZVRhZ3MgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInN0eWxlXCIpO1xuXHRmb3IodmFyIGkgPSAwOyBpIDwgZXhpc3RpbmdTdHlsZVRhZ3MubGVuZ3RoOyBpKyspIHtcblx0XHR2YXIgdGFnID0gZXhpc3RpbmdTdHlsZVRhZ3NbaV07XG5cdFx0dmFyIGRhdGFIcmVmID0gdGFnLmdldEF0dHJpYnV0ZShcImRhdGEtaHJlZlwiKTtcblx0XHRpZihkYXRhSHJlZiA9PT0gaHJlZiB8fCBkYXRhSHJlZiA9PT0gZnVsbGhyZWYpIHJldHVybiB0YWc7XG5cdH1cbn07XG52YXIgbG9hZFN0eWxlc2hlZXQgPSAoY2h1bmtJZCkgPT4ge1xuXHRyZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuXHRcdHZhciBocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5taW5pQ3NzRihjaHVua0lkKTtcblx0XHR2YXIgZnVsbGhyZWYgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBocmVmO1xuXHRcdGlmKGZpbmRTdHlsZXNoZWV0KGhyZWYsIGZ1bGxocmVmKSkgcmV0dXJuIHJlc29sdmUoKTtcblx0XHRjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCBudWxsLCByZXNvbHZlLCByZWplY3QpO1xuXHR9KTtcbn1cbi8vIG5vIGNodW5rIGxvYWRpbmdcblxudmFyIG9sZFRhZ3MgPSBbXTtcbnZhciBuZXdUYWdzID0gW107XG52YXIgYXBwbHlIYW5kbGVyID0gKG9wdGlvbnMpID0+IHtcblx0cmV0dXJuIHsgZGlzcG9zZTogKCkgPT4ge1xuXHRcdGZvcih2YXIgaSA9IDA7IGkgPCBvbGRUYWdzLmxlbmd0aDsgaSsrKSB7XG5cdFx0XHR2YXIgb2xkVGFnID0gb2xkVGFnc1tpXTtcblx0XHRcdGlmKG9sZFRhZy5wYXJlbnROb2RlKSBvbGRUYWcucGFyZW50Tm9kZS5yZW1vdmVDaGlsZChvbGRUYWcpO1xuXHRcdH1cblx0XHRvbGRUYWdzLmxlbmd0aCA9IDA7XG5cdH0sIGFwcGx5OiAoKSA9PiB7XG5cdFx0Zm9yKHZhciBpID0gMDsgaSA8IG5ld1RhZ3MubGVuZ3RoOyBpKyspIG5ld1RhZ3NbaV0ucmVsID0gXCJzdHlsZXNoZWV0XCI7XG5cdFx0bmV3VGFncy5sZW5ndGggPSAwO1xuXHR9IH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMubWluaUNzcyA9IChjaHVua0lkcywgcmVtb3ZlZENodW5rcywgcmVtb3ZlZE1vZHVsZXMsIHByb21pc2VzLCBhcHBseUhhbmRsZXJzLCB1cGRhdGVkTW9kdWxlc0xpc3QpID0+IHtcblx0YXBwbHlIYW5kbGVycy5wdXNoKGFwcGx5SGFuZGxlcik7XG5cdGNodW5rSWRzLmZvckVhY2goKGNodW5rSWQpID0+IHtcblx0XHR2YXIgaHJlZiA9IF9fd2VicGFja19yZXF1aXJlX18ubWluaUNzc0YoY2h1bmtJZCk7XG5cdFx0dmFyIGZ1bGxocmVmID0gX193ZWJwYWNrX3JlcXVpcmVfXy5wICsgaHJlZjtcblx0XHR2YXIgb2xkVGFnID0gZmluZFN0eWxlc2hlZXQoaHJlZiwgZnVsbGhyZWYpO1xuXHRcdGlmKCFvbGRUYWcpIHJldHVybjtcblx0XHRwcm9taXNlcy5wdXNoKG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHRcdHZhciB0YWcgPSBjcmVhdGVTdHlsZXNoZWV0KGNodW5rSWQsIGZ1bGxocmVmLCBvbGRUYWcsICgpID0+IHtcblx0XHRcdFx0dGFnLmFzID0gXCJzdHlsZVwiO1xuXHRcdFx0XHR0YWcucmVsID0gXCJwcmVsb2FkXCI7XG5cdFx0XHRcdHJlc29sdmUoKTtcblx0XHRcdH0sIHJlamVjdCk7XG5cdFx0XHRvbGRUYWdzLnB1c2gob2xkVGFnKTtcblx0XHRcdG5ld1RhZ3MucHVzaCh0YWcpO1xuXHRcdH0pKTtcblx0fSk7XG59XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZCIsInZhciBwcmV2U3RhcnR1cCA9IF9fd2VicGFja19yZXF1aXJlX18ueDtcbnZhciBoYXNSdW4gPSBmYWxzZTtcbl9fd2VicGFja19yZXF1aXJlX18ueCA9ICgpID0+IHtcblx0aWYgKCFoYXNSdW4pIHtcblx0ICBoYXNSdW4gPSB0cnVlO1xuXHQgIF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzLy5mZWRlcmF0aW9uL2VudHJ5LmQzYzUxYWQ4NzA4ZWVhYmZkZjllMWU1MzU4MjE1MWRjLmpzICovIFwiLi9ub2RlX21vZHVsZXMvLmZlZGVyYXRpb24vZW50cnkuZDNjNTFhZDg3MDhlZWFiZmRmOWUxZTUzNTgyMTUxZGMuanNcIik7XG5cdH1cblx0aWYgKHR5cGVvZiBwcmV2U3RhcnR1cCA9PT0gJ2Z1bmN0aW9uJykge1xuXHQgIHJldHVybiBwcmV2U3RhcnR1cCgpO1xuXHR9IGVsc2Uge1xuXHQgIGNvbnNvbGUud2FybignW01vZHVsZSBGZWRlcmF0aW9uXSBwcmV2U3RhcnR1cCBpcyBub3QgYSBmdW5jdGlvbiwgc2tpcHBpbmcgc3RhcnR1cCBleGVjdXRpb24nKTtcblx0fVxufTsiLCIvLyBubyBiYXNlVVJJXG5cbi8vIG9iamVjdCB0byBzdG9yZSBsb2FkZWQgYW5kIGxvYWRpbmcgY2h1bmtzXG4vLyB1bmRlZmluZWQgPSBjaHVuayBub3QgbG9hZGVkLCBudWxsID0gY2h1bmsgcHJlbG9hZGVkL3ByZWZldGNoZWRcbi8vIFtyZXNvbHZlLCByZWplY3QsIFByb21pc2VdID0gY2h1bmsgbG9hZGluZywgMCA9IGNodW5rIGxvYWRlZFxudmFyIGluc3RhbGxlZENodW5rcyA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCA9IF9fd2VicGFja19yZXF1aXJlX18uaG1yU19qc29ucCB8fCB7XG5cdFwicGFydGljbGVcIjogMFxufTtcblxuX193ZWJwYWNrX3JlcXVpcmVfXy5mLmogPSAoY2h1bmtJZCwgcHJvbWlzZXMpID0+IHtcblx0XHQvLyBKU09OUCBjaHVuayBsb2FkaW5nIGZvciBqYXZhc2NyaXB0XG5cdFx0dmFyIGluc3RhbGxlZENodW5rRGF0YSA9IF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpID8gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdIDogdW5kZWZpbmVkO1xuXHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSAhPT0gMCkgeyAvLyAwIG1lYW5zIFwiYWxyZWFkeSBpbnN0YWxsZWRcIi5cblxuXHRcdFx0Ly8gYSBQcm9taXNlIG1lYW5zIFwiY3VycmVudGx5IGxvYWRpbmdcIi5cblx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSk7XG5cdFx0XHR9IGVsc2Uge1xuXHRcdFx0XHRpZihcIndlYnBhY2tfc2hhcmluZ19jb25zdW1lX2RlZmF1bHRfdnVlX3Z1ZVwiICE9IGNodW5rSWQpIHtcblx0XHRcdFx0XHQvLyBzZXR1cCBQcm9taXNlIGluIGNodW5rIGNhY2hlXG5cdFx0XHRcdFx0dmFyIHByb21pc2UgPSBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiAoaW5zdGFsbGVkQ2h1bmtEYXRhID0gaW5zdGFsbGVkQ2h1bmtzW2NodW5rSWRdID0gW3Jlc29sdmUsIHJlamVjdF0pKTtcblx0XHRcdFx0XHRwcm9taXNlcy5wdXNoKGluc3RhbGxlZENodW5rRGF0YVsyXSA9IHByb21pc2UpO1xuXG5cdFx0XHRcdFx0Ly8gc3RhcnQgY2h1bmsgbG9hZGluZ1xuXHRcdFx0XHRcdHZhciB1cmwgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLnAgKyBfX3dlYnBhY2tfcmVxdWlyZV9fLnUoY2h1bmtJZCk7XG5cdFx0XHRcdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdFx0XHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdFx0XHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdFx0XHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpKSB7XG5cdFx0XHRcdFx0XHRcdGluc3RhbGxlZENodW5rRGF0YSA9IGluc3RhbGxlZENodW5rc1tjaHVua0lkXTtcblx0XHRcdFx0XHRcdFx0aWYoaW5zdGFsbGVkQ2h1bmtEYXRhICE9PSAwKSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdFx0XHRcdFx0XHRcdGlmKGluc3RhbGxlZENodW5rRGF0YSkge1xuXHRcdFx0XHRcdFx0XHRcdHZhciBlcnJvclR5cGUgPSBldmVudCAmJiAoZXZlbnQudHlwZSA9PT0gJ2xvYWQnID8gJ21pc3NpbmcnIDogZXZlbnQudHlwZSk7XG5cdFx0XHRcdFx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0XHRcdFx0XHRlcnJvci5tZXNzYWdlID0gJ0xvYWRpbmcgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLm5hbWUgPSAnQ2h1bmtMb2FkRXJyb3InO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9yLnR5cGUgPSBlcnJvclR5cGU7XG5cdFx0XHRcdFx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdFx0XHRcdFx0aW5zdGFsbGVkQ2h1bmtEYXRhWzFdKGVycm9yKTtcblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH07XG5cdFx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5sKHVybCwgbG9hZGluZ0VuZGVkLCBcImNodW5rLVwiICsgY2h1bmtJZCwgY2h1bmtJZCk7XG5cdFx0XHRcdH0gZWxzZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHRcdFx0fVxuXHRcdH1cbn07XG5cbi8vIG5vIHByZWZldGNoaW5nXG5cbi8vIG5vIHByZWxvYWRlZFxuXG52YXIgY3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdDtcbnZhciB3YWl0aW5nVXBkYXRlUmVzb2x2ZXMgPSB7fTtcbmZ1bmN0aW9uIGxvYWRVcGRhdGVDaHVuayhjaHVua0lkLCB1cGRhdGVkTW9kdWxlc0xpc3QpIHtcblx0Y3VycmVudFVwZGF0ZWRNb2R1bGVzTGlzdCA9IHVwZGF0ZWRNb2R1bGVzTGlzdDtcblx0cmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSByZXNvbHZlO1xuXHRcdC8vIHN0YXJ0IHVwZGF0ZSBjaHVuayBsb2FkaW5nXG5cdFx0dmFyIHVybCA9IF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaHUoY2h1bmtJZCk7XG5cdFx0Ly8gY3JlYXRlIGVycm9yIGJlZm9yZSBzdGFjayB1bndvdW5kIHRvIGdldCB1c2VmdWwgc3RhY2t0cmFjZSBsYXRlclxuXHRcdHZhciBlcnJvciA9IG5ldyBFcnJvcigpO1xuXHRcdHZhciBsb2FkaW5nRW5kZWQgPSAoZXZlbnQpID0+IHtcblx0XHRcdGlmKHdhaXRpbmdVcGRhdGVSZXNvbHZlc1tjaHVua0lkXSkge1xuXHRcdFx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWRcblx0XHRcdFx0dmFyIGVycm9yVHlwZSA9IGV2ZW50ICYmIChldmVudC50eXBlID09PSAnbG9hZCcgPyAnbWlzc2luZycgOiBldmVudC50eXBlKTtcblx0XHRcdFx0dmFyIHJlYWxTcmMgPSBldmVudCAmJiBldmVudC50YXJnZXQgJiYgZXZlbnQudGFyZ2V0LnNyYztcblx0XHRcdFx0ZXJyb3IubWVzc2FnZSA9ICdMb2FkaW5nIGhvdCB1cGRhdGUgY2h1bmsgJyArIGNodW5rSWQgKyAnIGZhaWxlZC5cXG4oJyArIGVycm9yVHlwZSArICc6ICcgKyByZWFsU3JjICsgJyknO1xuXHRcdFx0XHRlcnJvci5uYW1lID0gJ0NodW5rTG9hZEVycm9yJztcblx0XHRcdFx0ZXJyb3IudHlwZSA9IGVycm9yVHlwZTtcblx0XHRcdFx0ZXJyb3IucmVxdWVzdCA9IHJlYWxTcmM7XG5cdFx0XHRcdHJlamVjdChlcnJvcik7XG5cdFx0XHR9XG5cdFx0fTtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmwodXJsLCBsb2FkaW5nRW5kZWQpO1xuXHR9KTtcbn1cblxuc2VsZltcIndlYnBhY2tIb3RVcGRhdGVfcmVuZW9zX3NsaWRlcl9tb2RzX3BhcnRpY2xlXCJdID0gKGNodW5rSWQsIG1vcmVNb2R1bGVzLCBydW50aW1lKSA9PiB7XG5cdGZvcih2YXIgbW9kdWxlSWQgaW4gbW9yZU1vZHVsZXMpIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8obW9yZU1vZHVsZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0Y3VycmVudFVwZGF0ZVttb2R1bGVJZF0gPSBtb3JlTW9kdWxlc1ttb2R1bGVJZF07XG5cdFx0XHRpZihjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0KSBjdXJyZW50VXBkYXRlZE1vZHVsZXNMaXN0LnB1c2gobW9kdWxlSWQpO1xuXHRcdH1cblx0fVxuXHRpZihydW50aW1lKSBjdXJyZW50VXBkYXRlUnVudGltZS5wdXNoKHJ1bnRpbWUpO1xuXHRpZih3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0pIHtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0oKTtcblx0XHR3YWl0aW5nVXBkYXRlUmVzb2x2ZXNbY2h1bmtJZF0gPSB1bmRlZmluZWQ7XG5cdH1cbn07XG5cbnZhciBjdXJyZW50VXBkYXRlQ2h1bmtzO1xudmFyIGN1cnJlbnRVcGRhdGU7XG52YXIgY3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3M7XG52YXIgY3VycmVudFVwZGF0ZVJ1bnRpbWU7XG5mdW5jdGlvbiBhcHBseUhhbmRsZXIob3B0aW9ucykge1xuXHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5mKSBkZWxldGUgX193ZWJwYWNrX3JlcXVpcmVfXy5mLmpzb25wSG1yO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0gdW5kZWZpbmVkO1xuXHRmdW5jdGlvbiBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHModXBkYXRlTW9kdWxlSWQpIHtcblx0XHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW3VwZGF0ZU1vZHVsZUlkXTtcblx0XHR2YXIgb3V0ZGF0ZWREZXBlbmRlbmNpZXMgPSB7fTtcblxuXHRcdHZhciBxdWV1ZSA9IG91dGRhdGVkTW9kdWxlcy5tYXAoZnVuY3Rpb24gKGlkKSB7XG5cdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRjaGFpbjogW2lkXSxcblx0XHRcdFx0aWQ6IGlkXG5cdFx0XHR9O1xuXHRcdH0pO1xuXHRcdHdoaWxlIChxdWV1ZS5sZW5ndGggPiAwKSB7XG5cdFx0XHR2YXIgcXVldWVJdGVtID0gcXVldWUucG9wKCk7XG5cdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZUl0ZW0uaWQ7XG5cdFx0XHR2YXIgY2hhaW4gPSBxdWV1ZUl0ZW0uY2hhaW47XG5cdFx0XHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX3JlcXVpcmVfXy5jW21vZHVsZUlkXTtcblx0XHRcdGlmIChcblx0XHRcdFx0IW1vZHVsZSB8fFxuXHRcdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkICYmICFtb2R1bGUuaG90Ll9zZWxmSW52YWxpZGF0ZWQpXG5cdFx0XHQpXG5cdFx0XHRcdGNvbnRpbnVlO1xuXHRcdFx0aWYgKG1vZHVsZS5ob3QuX3NlbGZEZWNsaW5lZCkge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdHR5cGU6IFwic2VsZi1kZWNsaW5lZFwiLFxuXHRcdFx0XHRcdGNoYWluOiBjaGFpbixcblx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWRcblx0XHRcdFx0fTtcblx0XHRcdH1cblx0XHRcdGlmIChtb2R1bGUuaG90Ll9tYWluKSB7XG5cdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0dHlwZTogXCJ1bmFjY2VwdGVkXCIsXG5cdFx0XHRcdFx0Y2hhaW46IGNoYWluLFxuXHRcdFx0XHRcdG1vZHVsZUlkOiBtb2R1bGVJZFxuXHRcdFx0XHR9O1xuXHRcdFx0fVxuXHRcdFx0Zm9yICh2YXIgaSA9IDA7IGkgPCBtb2R1bGUucGFyZW50cy5sZW5ndGg7IGkrKykge1xuXHRcdFx0XHR2YXIgcGFyZW50SWQgPSBtb2R1bGUucGFyZW50c1tpXTtcblx0XHRcdFx0dmFyIHBhcmVudCA9IF9fd2VicGFja19yZXF1aXJlX18uY1twYXJlbnRJZF07XG5cdFx0XHRcdGlmICghcGFyZW50KSBjb250aW51ZTtcblx0XHRcdFx0aWYgKHBhcmVudC5ob3QuX2RlY2xpbmVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSkge1xuXHRcdFx0XHRcdHJldHVybiB7XG5cdFx0XHRcdFx0XHR0eXBlOiBcImRlY2xpbmVkXCIsXG5cdFx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0cGFyZW50SWQ6IHBhcmVudElkXG5cdFx0XHRcdFx0fTtcblx0XHRcdFx0fVxuXHRcdFx0XHRpZiAob3V0ZGF0ZWRNb2R1bGVzLmluZGV4T2YocGFyZW50SWQpICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdGlmIChwYXJlbnQuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pIHtcblx0XHRcdFx0XHRpZiAoIW91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSlcblx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSA9IFtdO1xuXHRcdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXSwgW21vZHVsZUlkXSk7XG5cdFx0XHRcdFx0Y29udGludWU7XG5cdFx0XHRcdH1cblx0XHRcdFx0ZGVsZXRlIG91dGRhdGVkRGVwZW5kZW5jaWVzW3BhcmVudElkXTtcblx0XHRcdFx0b3V0ZGF0ZWRNb2R1bGVzLnB1c2gocGFyZW50SWQpO1xuXHRcdFx0XHRxdWV1ZS5wdXNoKHtcblx0XHRcdFx0XHRjaGFpbjogY2hhaW4uY29uY2F0KFtwYXJlbnRJZF0pLFxuXHRcdFx0XHRcdGlkOiBwYXJlbnRJZFxuXHRcdFx0XHR9KTtcblx0XHRcdH1cblx0XHR9XG5cblx0XHRyZXR1cm4ge1xuXHRcdFx0dHlwZTogXCJhY2NlcHRlZFwiLFxuXHRcdFx0bW9kdWxlSWQ6IHVwZGF0ZU1vZHVsZUlkLFxuXHRcdFx0b3V0ZGF0ZWRNb2R1bGVzOiBvdXRkYXRlZE1vZHVsZXMsXG5cdFx0XHRvdXRkYXRlZERlcGVuZGVuY2llczogb3V0ZGF0ZWREZXBlbmRlbmNpZXNcblx0XHR9O1xuXHR9XG5cblx0ZnVuY3Rpb24gYWRkQWxsVG9TZXQoYSwgYikge1xuXHRcdGZvciAodmFyIGkgPSAwOyBpIDwgYi5sZW5ndGg7IGkrKykge1xuXHRcdFx0dmFyIGl0ZW0gPSBiW2ldO1xuXHRcdFx0aWYgKGEuaW5kZXhPZihpdGVtKSA9PT0gLTEpIGEucHVzaChpdGVtKTtcblx0XHR9XG5cdH1cblxuXHQvLyBhdCBiZWdpbiBhbGwgdXBkYXRlcyBtb2R1bGVzIGFyZSBvdXRkYXRlZFxuXHQvLyB0aGUgXCJvdXRkYXRlZFwiIHN0YXR1cyBjYW4gcHJvcGFnYXRlIHRvIHBhcmVudHMgaWYgdGhleSBkb24ndCBhY2NlcHQgdGhlIGNoaWxkcmVuXG5cdHZhciBvdXRkYXRlZERlcGVuZGVuY2llcyA9IHt9O1xuXHR2YXIgb3V0ZGF0ZWRNb2R1bGVzID0gW107XG5cdHZhciBhcHBsaWVkVXBkYXRlID0ge307XG5cblx0dmFyIHdhcm5VbmV4cGVjdGVkUmVxdWlyZSA9IGZ1bmN0aW9uIHdhcm5VbmV4cGVjdGVkUmVxdWlyZShtb2R1bGUpIHtcblx0XHRjb25zb2xlLndhcm4oXG5cdFx0XHRcIltITVJdIHVuZXhwZWN0ZWQgcmVxdWlyZShcIiArIG1vZHVsZS5pZCArIFwiKSB0byBkaXNwb3NlZCBtb2R1bGVcIlxuXHRcdCk7XG5cdH07XG5cblx0Zm9yICh2YXIgbW9kdWxlSWQgaW4gY3VycmVudFVwZGF0ZSkge1xuXHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZSwgbW9kdWxlSWQpKSB7XG5cdFx0XHR2YXIgbmV3TW9kdWxlRmFjdG9yeSA9IGN1cnJlbnRVcGRhdGVbbW9kdWxlSWRdO1xuXHRcdFx0dmFyIHJlc3VsdCA9IG5ld01vZHVsZUZhY3Rvcnlcblx0XHRcdFx0PyBnZXRBZmZlY3RlZE1vZHVsZUVmZmVjdHMobW9kdWxlSWQpXG5cdFx0XHRcdDoge1xuXHRcdFx0XHRcdFx0dHlwZTogXCJkaXNwb3NlZFwiLFxuXHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG1vZHVsZUlkXG5cdFx0XHRcdFx0fTtcblx0XHRcdC8qKiBAdHlwZSB7RXJyb3J8ZmFsc2V9ICovXG5cdFx0XHR2YXIgYWJvcnRFcnJvciA9IGZhbHNlO1xuXHRcdFx0dmFyIGRvQXBwbHkgPSBmYWxzZTtcblx0XHRcdHZhciBkb0Rpc3Bvc2UgPSBmYWxzZTtcblx0XHRcdHZhciBjaGFpbkluZm8gPSBcIlwiO1xuXHRcdFx0aWYgKHJlc3VsdC5jaGFpbikge1xuXHRcdFx0XHRjaGFpbkluZm8gPSBcIlxcblVwZGF0ZSBwcm9wYWdhdGlvbjogXCIgKyByZXN1bHQuY2hhaW4uam9pbihcIiAtPiBcIik7XG5cdFx0XHR9XG5cdFx0XHRzd2l0Y2ggKHJlc3VsdC50eXBlKSB7XG5cdFx0XHRcdGNhc2UgXCJzZWxmLWRlY2xpbmVkXCI6XG5cdFx0XHRcdFx0aWYgKG9wdGlvbnMub25EZWNsaW5lZCkgb3B0aW9ucy5vbkRlY2xpbmVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZURlY2xpbmVkKVxuXHRcdFx0XHRcdFx0YWJvcnRFcnJvciA9IG5ldyBFcnJvcihcblx0XHRcdFx0XHRcdFx0XCJBYm9ydGVkIGJlY2F1c2Ugb2Ygc2VsZiBkZWNsaW5lOiBcIiArXG5cdFx0XHRcdFx0XHRcdFx0cmVzdWx0Lm1vZHVsZUlkICtcblx0XHRcdFx0XHRcdFx0XHRjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJkZWNsaW5lZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRGVjbGluZWQpIG9wdGlvbnMub25EZWNsaW5lZChyZXN1bHQpO1xuXHRcdFx0XHRcdGlmICghb3B0aW9ucy5pZ25vcmVEZWNsaW5lZClcblx0XHRcdFx0XHRcdGFib3J0RXJyb3IgPSBuZXcgRXJyb3IoXG5cdFx0XHRcdFx0XHRcdFwiQWJvcnRlZCBiZWNhdXNlIG9mIGRlY2xpbmVkIGRlcGVuZGVuY3k6IFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQubW9kdWxlSWQgK1xuXHRcdFx0XHRcdFx0XHRcdFwiIGluIFwiICtcblx0XHRcdFx0XHRcdFx0XHRyZXN1bHQucGFyZW50SWQgK1xuXHRcdFx0XHRcdFx0XHRcdGNoYWluSW5mb1xuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHRicmVhaztcblx0XHRcdFx0Y2FzZSBcInVuYWNjZXB0ZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vblVuYWNjZXB0ZWQpIG9wdGlvbnMub25VbmFjY2VwdGVkKHJlc3VsdCk7XG5cdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZVVuYWNjZXB0ZWQpXG5cdFx0XHRcdFx0XHRhYm9ydEVycm9yID0gbmV3IEVycm9yKFxuXHRcdFx0XHRcdFx0XHRcIkFib3J0ZWQgYmVjYXVzZSBcIiArIG1vZHVsZUlkICsgXCIgaXMgbm90IGFjY2VwdGVkXCIgKyBjaGFpbkluZm9cblx0XHRcdFx0XHRcdCk7XG5cdFx0XHRcdFx0YnJlYWs7XG5cdFx0XHRcdGNhc2UgXCJhY2NlcHRlZFwiOlxuXHRcdFx0XHRcdGlmIChvcHRpb25zLm9uQWNjZXB0ZWQpIG9wdGlvbnMub25BY2NlcHRlZChyZXN1bHQpO1xuXHRcdFx0XHRcdGRvQXBwbHkgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRjYXNlIFwiZGlzcG9zZWRcIjpcblx0XHRcdFx0XHRpZiAob3B0aW9ucy5vbkRpc3Bvc2VkKSBvcHRpb25zLm9uRGlzcG9zZWQocmVzdWx0KTtcblx0XHRcdFx0XHRkb0Rpc3Bvc2UgPSB0cnVlO1xuXHRcdFx0XHRcdGJyZWFrO1xuXHRcdFx0XHRkZWZhdWx0OlxuXHRcdFx0XHRcdHRocm93IG5ldyBFcnJvcihcIlVuZXhjZXB0aW9uIHR5cGUgXCIgKyByZXN1bHQudHlwZSk7XG5cdFx0XHR9XG5cdFx0XHRpZiAoYWJvcnRFcnJvcikge1xuXHRcdFx0XHRyZXR1cm4ge1xuXHRcdFx0XHRcdGVycm9yOiBhYm9ydEVycm9yXG5cdFx0XHRcdH07XG5cdFx0XHR9XG5cdFx0XHRpZiAoZG9BcHBseSkge1xuXHRcdFx0XHRhcHBsaWVkVXBkYXRlW21vZHVsZUlkXSA9IG5ld01vZHVsZUZhY3Rvcnk7XG5cdFx0XHRcdGFkZEFsbFRvU2V0KG91dGRhdGVkTW9kdWxlcywgcmVzdWx0Lm91dGRhdGVkTW9kdWxlcyk7XG5cdFx0XHRcdGZvciAobW9kdWxlSWQgaW4gcmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhyZXN1bHQub3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdFx0aWYgKCFvdXRkYXRlZERlcGVuZGVuY2llc1ttb2R1bGVJZF0pXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSA9IFtdO1xuXHRcdFx0XHRcdFx0YWRkQWxsVG9TZXQoXG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXSxcblx0XHRcdFx0XHRcdFx0cmVzdWx0Lm91dGRhdGVkRGVwZW5kZW5jaWVzW21vZHVsZUlkXVxuXHRcdFx0XHRcdFx0KTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblx0XHRcdGlmIChkb0Rpc3Bvc2UpIHtcblx0XHRcdFx0YWRkQWxsVG9TZXQob3V0ZGF0ZWRNb2R1bGVzLCBbcmVzdWx0Lm1vZHVsZUlkXSk7XG5cdFx0XHRcdGFwcGxpZWRVcGRhdGVbbW9kdWxlSWRdID0gd2FyblVuZXhwZWN0ZWRSZXF1aXJlO1xuXHRcdFx0fVxuXHRcdH1cblx0fVxuXHRjdXJyZW50VXBkYXRlID0gdW5kZWZpbmVkO1xuXG5cdC8vIFN0b3JlIHNlbGYgYWNjZXB0ZWQgb3V0ZGF0ZWQgbW9kdWxlcyB0byByZXF1aXJlIHRoZW0gbGF0ZXIgYnkgdGhlIG1vZHVsZSBzeXN0ZW1cblx0dmFyIG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcyA9IFtdO1xuXHRmb3IgKHZhciBqID0gMDsgaiA8IG91dGRhdGVkTW9kdWxlcy5sZW5ndGg7IGorKykge1xuXHRcdHZhciBvdXRkYXRlZE1vZHVsZUlkID0gb3V0ZGF0ZWRNb2R1bGVzW2pdO1xuXHRcdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbb3V0ZGF0ZWRNb2R1bGVJZF07XG5cdFx0aWYgKFxuXHRcdFx0bW9kdWxlICYmXG5cdFx0XHQobW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkIHx8IG1vZHVsZS5ob3QuX21haW4pICYmXG5cdFx0XHQvLyByZW1vdmVkIHNlbGYtYWNjZXB0ZWQgbW9kdWxlcyBzaG91bGQgbm90IGJlIHJlcXVpcmVkXG5cdFx0XHRhcHBsaWVkVXBkYXRlW291dGRhdGVkTW9kdWxlSWRdICE9PSB3YXJuVW5leHBlY3RlZFJlcXVpcmUgJiZcblx0XHRcdC8vIHdoZW4gY2FsbGVkIGludmFsaWRhdGUgc2VsZi1hY2NlcHRpbmcgaXMgbm90IHBvc3NpYmxlXG5cdFx0XHQhbW9kdWxlLmhvdC5fc2VsZkludmFsaWRhdGVkXG5cdFx0KSB7XG5cdFx0XHRvdXRkYXRlZFNlbGZBY2NlcHRlZE1vZHVsZXMucHVzaCh7XG5cdFx0XHRcdG1vZHVsZTogb3V0ZGF0ZWRNb2R1bGVJZCxcblx0XHRcdFx0cmVxdWlyZTogbW9kdWxlLmhvdC5fcmVxdWlyZVNlbGYsXG5cdFx0XHRcdGVycm9ySGFuZGxlcjogbW9kdWxlLmhvdC5fc2VsZkFjY2VwdGVkXG5cdFx0XHR9KTtcblx0XHR9XG5cdH1cblxuXHR2YXIgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXM7XG5cblx0cmV0dXJuIHtcblx0XHRkaXNwb3NlOiBmdW5jdGlvbiAoKSB7XG5cdFx0XHRjdXJyZW50VXBkYXRlUmVtb3ZlZENodW5rcy5mb3JFYWNoKGZ1bmN0aW9uIChjaHVua0lkKSB7XG5cdFx0XHRcdGRlbGV0ZSBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF07XG5cdFx0XHR9KTtcblx0XHRcdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gdW5kZWZpbmVkO1xuXG5cdFx0XHR2YXIgaWR4O1xuXHRcdFx0dmFyIHF1ZXVlID0gb3V0ZGF0ZWRNb2R1bGVzLnNsaWNlKCk7XG5cdFx0XHR3aGlsZSAocXVldWUubGVuZ3RoID4gMCkge1xuXHRcdFx0XHR2YXIgbW9kdWxlSWQgPSBxdWV1ZS5wb3AoKTtcblx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cdFx0XHRcdGlmICghbW9kdWxlKSBjb250aW51ZTtcblxuXHRcdFx0XHR2YXIgZGF0YSA9IHt9O1xuXG5cdFx0XHRcdC8vIENhbGwgZGlzcG9zZSBoYW5kbGVyc1xuXHRcdFx0XHR2YXIgZGlzcG9zZUhhbmRsZXJzID0gbW9kdWxlLmhvdC5fZGlzcG9zZUhhbmRsZXJzO1xuXHRcdFx0XHRmb3IgKGogPSAwOyBqIDwgZGlzcG9zZUhhbmRsZXJzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0ZGlzcG9zZUhhbmRsZXJzW2pdLmNhbGwobnVsbCwgZGF0YSk7XG5cdFx0XHRcdH1cblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5obXJEW21vZHVsZUlkXSA9IGRhdGE7XG5cblx0XHRcdFx0Ly8gZGlzYWJsZSBtb2R1bGUgKHRoaXMgZGlzYWJsZXMgcmVxdWlyZXMgZnJvbSB0aGlzIG1vZHVsZSlcblx0XHRcdFx0bW9kdWxlLmhvdC5hY3RpdmUgPSBmYWxzZTtcblxuXHRcdFx0XHQvLyByZW1vdmUgbW9kdWxlIGZyb20gY2FjaGVcblx0XHRcdFx0ZGVsZXRlIF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF07XG5cblx0XHRcdFx0Ly8gd2hlbiBkaXNwb3NpbmcgdGhlcmUgaXMgbm8gbmVlZCB0byBjYWxsIGRpc3Bvc2UgaGFuZGxlclxuXHRcdFx0XHRkZWxldGUgb3V0ZGF0ZWREZXBlbmRlbmNpZXNbbW9kdWxlSWRdO1xuXG5cdFx0XHRcdC8vIHJlbW92ZSBcInBhcmVudHNcIiByZWZlcmVuY2VzIGZyb20gYWxsIGNoaWxkcmVuXG5cdFx0XHRcdGZvciAoaiA9IDA7IGogPCBtb2R1bGUuY2hpbGRyZW4ubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHR2YXIgY2hpbGQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmNbbW9kdWxlLmNoaWxkcmVuW2pdXTtcblx0XHRcdFx0XHRpZiAoIWNoaWxkKSBjb250aW51ZTtcblx0XHRcdFx0XHRpZHggPSBjaGlsZC5wYXJlbnRzLmluZGV4T2YobW9kdWxlSWQpO1xuXHRcdFx0XHRcdGlmIChpZHggPj0gMCkge1xuXHRcdFx0XHRcdFx0Y2hpbGQucGFyZW50cy5zcGxpY2UoaWR4LCAxKTtcblx0XHRcdFx0XHR9XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcmVtb3ZlIG91dGRhdGVkIGRlcGVuZGVuY3kgZnJvbSBtb2R1bGUgY2hpbGRyZW5cblx0XHRcdHZhciBkZXBlbmRlbmN5O1xuXHRcdFx0Zm9yICh2YXIgb3V0ZGF0ZWRNb2R1bGVJZCBpbiBvdXRkYXRlZERlcGVuZGVuY2llcykge1xuXHRcdFx0XHRpZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG91dGRhdGVkRGVwZW5kZW5jaWVzLCBvdXRkYXRlZE1vZHVsZUlkKSkge1xuXHRcdFx0XHRcdG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0Zm9yIChqID0gMDsgaiA8IG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzLmxlbmd0aDsgaisrKSB7XG5cdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0aWR4ID0gbW9kdWxlLmNoaWxkcmVuLmluZGV4T2YoZGVwZW5kZW5jeSk7XG5cdFx0XHRcdFx0XHRcdGlmIChpZHggPj0gMCkgbW9kdWxlLmNoaWxkcmVuLnNwbGljZShpZHgsIDEpO1xuXHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdH1cblx0XHRcdFx0fVxuXHRcdFx0fVxuXHRcdH0sXG5cdFx0YXBwbHk6IGZ1bmN0aW9uIChyZXBvcnRFcnJvcikge1xuXHRcdFx0dmFyIGFjY2VwdFByb21pc2VzID0gW107XG5cdFx0XHQvLyBpbnNlcnQgbmV3IGNvZGVcblx0XHRcdGZvciAodmFyIHVwZGF0ZU1vZHVsZUlkIGluIGFwcGxpZWRVcGRhdGUpIHtcblx0XHRcdFx0aWYgKF9fd2VicGFja19yZXF1aXJlX18ubyhhcHBsaWVkVXBkYXRlLCB1cGRhdGVNb2R1bGVJZCkpIHtcblx0XHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm1bdXBkYXRlTW9kdWxlSWRdID0gYXBwbGllZFVwZGF0ZVt1cGRhdGVNb2R1bGVJZF07XG5cdFx0XHRcdH1cblx0XHRcdH1cblxuXHRcdFx0Ly8gcnVuIG5ldyBydW50aW1lIG1vZHVsZXNcblx0XHRcdGZvciAodmFyIGkgPSAwOyBpIDwgY3VycmVudFVwZGF0ZVJ1bnRpbWUubGVuZ3RoOyBpKyspIHtcblx0XHRcdFx0Y3VycmVudFVwZGF0ZVJ1bnRpbWVbaV0oX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdFx0XHR9XG5cblx0XHRcdC8vIGNhbGwgYWNjZXB0IGhhbmRsZXJzXG5cdFx0XHRmb3IgKHZhciBvdXRkYXRlZE1vZHVsZUlkIGluIG91dGRhdGVkRGVwZW5kZW5jaWVzKSB7XG5cdFx0XHRcdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLm8ob3V0ZGF0ZWREZXBlbmRlbmNpZXMsIG91dGRhdGVkTW9kdWxlSWQpKSB7XG5cdFx0XHRcdFx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19yZXF1aXJlX18uY1tvdXRkYXRlZE1vZHVsZUlkXTtcblx0XHRcdFx0XHRpZiAobW9kdWxlKSB7XG5cdFx0XHRcdFx0XHRtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llcyA9XG5cdFx0XHRcdFx0XHRcdG91dGRhdGVkRGVwZW5kZW5jaWVzW291dGRhdGVkTW9kdWxlSWRdO1xuXHRcdFx0XHRcdFx0dmFyIGNhbGxiYWNrcyA9IFtdO1xuXHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlcnMgPSBbXTtcblx0XHRcdFx0XHRcdHZhciBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3MgPSBbXTtcblx0XHRcdFx0XHRcdGZvciAodmFyIGogPSAwOyBqIDwgbW9kdWxlT3V0ZGF0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBqKyspIHtcblx0XHRcdFx0XHRcdFx0dmFyIGRlcGVuZGVuY3kgPSBtb2R1bGVPdXRkYXRlZERlcGVuZGVuY2llc1tqXTtcblx0XHRcdFx0XHRcdFx0dmFyIGFjY2VwdENhbGxiYWNrID1cblx0XHRcdFx0XHRcdFx0XHRtb2R1bGUuaG90Ll9hY2NlcHRlZERlcGVuZGVuY2llc1tkZXBlbmRlbmN5XTtcblx0XHRcdFx0XHRcdFx0dmFyIGVycm9ySGFuZGxlciA9XG5cdFx0XHRcdFx0XHRcdFx0bW9kdWxlLmhvdC5fYWNjZXB0ZWRFcnJvckhhbmRsZXJzW2RlcGVuZGVuY3ldO1xuXHRcdFx0XHRcdFx0XHRpZiAoYWNjZXB0Q2FsbGJhY2spIHtcblx0XHRcdFx0XHRcdFx0XHRpZiAoY2FsbGJhY2tzLmluZGV4T2YoYWNjZXB0Q2FsbGJhY2spICE9PSAtMSkgY29udGludWU7XG5cdFx0XHRcdFx0XHRcdFx0Y2FsbGJhY2tzLnB1c2goYWNjZXB0Q2FsbGJhY2spO1xuXHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnMucHVzaChlcnJvckhhbmRsZXIpO1xuXHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrcy5wdXNoKGRlcGVuZGVuY3kpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRmb3IgKHZhciBrID0gMDsgayA8IGNhbGxiYWNrcy5sZW5ndGg7IGsrKykge1xuXHRcdFx0XHRcdFx0XHR2YXIgcmVzdWx0O1xuXHRcdFx0XHRcdFx0XHR0cnkge1xuXHRcdFx0XHRcdFx0XHRcdHJlc3VsdCA9IGNhbGxiYWNrc1trXS5jYWxsKG51bGwsIG1vZHVsZU91dGRhdGVkRGVwZW5kZW5jaWVzKTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyKSB7XG5cdFx0XHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBlcnJvckhhbmRsZXJzW2tdID09PSBcImZ1bmN0aW9uXCIpIHtcblx0XHRcdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9ySGFuZGxlcnNba10oZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0ZGVwZW5kZW5jeUlkOiBkZXBlbmRlbmNpZXNGb3JDYWxsYmFja3Nba11cblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9IGNhdGNoIChlcnIyKSB7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG9wdGlvbnMub25FcnJvcmVkKHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdHR5cGU6IFwiYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0bW9kdWxlSWQ6IG91dGRhdGVkTW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0XHRkZXBlbmRlbmN5SWQ6IGRlcGVuZGVuY2llc0ZvckNhbGxiYWNrc1trXSxcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIyLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdFx0b3JpZ2luYWxFcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIyKTtcblx0XHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcHRpb25zLm9uRXJyb3JlZCh7XG5cdFx0XHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJhY2NlcHQtZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdG1vZHVsZUlkOiBvdXRkYXRlZE1vZHVsZUlkLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGRlcGVuZGVuY3lJZDogZGVwZW5kZW5jaWVzRm9yQ2FsbGJhY2tzW2tdLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0XHRpZiAocmVzdWx0ICYmIHR5cGVvZiByZXN1bHQudGhlbiA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdFx0YWNjZXB0UHJvbWlzZXMucHVzaChyZXN1bHQpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9XG5cblx0XHRcdHZhciBvbkFjY2VwdGVkID0gZnVuY3Rpb24gKCkge1xuXHRcdFx0XHQvLyBMb2FkIHNlbGYgYWNjZXB0ZWQgbW9kdWxlc1xuXHRcdFx0XHRmb3IgKHZhciBvID0gMDsgbyA8IG91dGRhdGVkU2VsZkFjY2VwdGVkTW9kdWxlcy5sZW5ndGg7IG8rKykge1xuXHRcdFx0XHRcdHZhciBpdGVtID0gb3V0ZGF0ZWRTZWxmQWNjZXB0ZWRNb2R1bGVzW29dO1xuXHRcdFx0XHRcdHZhciBtb2R1bGVJZCA9IGl0ZW0ubW9kdWxlO1xuXHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRpdGVtLnJlcXVpcmUobW9kdWxlSWQpO1xuXHRcdFx0XHRcdH0gY2F0Y2ggKGVycikge1xuXHRcdFx0XHRcdFx0aWYgKHR5cGVvZiBpdGVtLmVycm9ySGFuZGxlciA9PT0gXCJmdW5jdGlvblwiKSB7XG5cdFx0XHRcdFx0XHRcdHRyeSB7XG5cdFx0XHRcdFx0XHRcdFx0aXRlbS5lcnJvckhhbmRsZXIoZXJyLCB7XG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGU6IF9fd2VicGFja19yZXF1aXJlX18uY1ttb2R1bGVJZF1cblx0XHRcdFx0XHRcdFx0XHR9KTtcblx0XHRcdFx0XHRcdFx0fSBjYXRjaCAoZXJyMSkge1xuXHRcdFx0XHRcdFx0XHRcdGlmIChvcHRpb25zLm9uRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0XHR0eXBlOiBcInNlbGYtYWNjZXB0LWVycm9yLWhhbmRsZXItZXJyb3JlZFwiLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRcdGVycm9yOiBlcnIxLFxuXHRcdFx0XHRcdFx0XHRcdFx0XHRvcmlnaW5hbEVycm9yOiBlcnJcblx0XHRcdFx0XHRcdFx0XHRcdH0pO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0XHRpZiAoIW9wdGlvbnMuaWdub3JlRXJyb3JlZCkge1xuXHRcdFx0XHRcdFx0XHRcdFx0cmVwb3J0RXJyb3IoZXJyMSk7XG5cdFx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0fVxuXHRcdFx0XHRcdFx0fSBlbHNlIHtcblx0XHRcdFx0XHRcdFx0aWYgKG9wdGlvbnMub25FcnJvcmVkKSB7XG5cdFx0XHRcdFx0XHRcdFx0b3B0aW9ucy5vbkVycm9yZWQoe1xuXHRcdFx0XHRcdFx0XHRcdFx0dHlwZTogXCJzZWxmLWFjY2VwdC1lcnJvcmVkXCIsXG5cdFx0XHRcdFx0XHRcdFx0XHRtb2R1bGVJZDogbW9kdWxlSWQsXG5cdFx0XHRcdFx0XHRcdFx0XHRlcnJvcjogZXJyXG5cdFx0XHRcdFx0XHRcdFx0fSk7XG5cdFx0XHRcdFx0XHRcdH1cblx0XHRcdFx0XHRcdFx0aWYgKCFvcHRpb25zLmlnbm9yZUVycm9yZWQpIHtcblx0XHRcdFx0XHRcdFx0XHRyZXBvcnRFcnJvcihlcnIpO1xuXHRcdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0XHR9XG5cdFx0XHRcdFx0fVxuXHRcdFx0XHR9XG5cdFx0XHR9O1xuXG5cdFx0XHRyZXR1cm4gUHJvbWlzZS5hbGwoYWNjZXB0UHJvbWlzZXMpXG5cdFx0XHRcdC50aGVuKG9uQWNjZXB0ZWQpXG5cdFx0XHRcdC50aGVuKGZ1bmN0aW9uICgpIHtcblx0XHRcdFx0XHRyZXR1cm4gb3V0ZGF0ZWRNb2R1bGVzO1xuXHRcdFx0XHR9KTtcblx0XHR9XG5cdH07XG59XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckkuanNvbnAgPSBmdW5jdGlvbiAobW9kdWxlSWQsIGFwcGx5SGFuZGxlcnMpIHtcblx0aWYgKCFjdXJyZW50VXBkYXRlKSB7XG5cdFx0Y3VycmVudFVwZGF0ZSA9IHt9O1xuXHRcdGN1cnJlbnRVcGRhdGVSdW50aW1lID0gW107XG5cdFx0Y3VycmVudFVwZGF0ZVJlbW92ZWRDaHVua3MgPSBbXTtcblx0XHRhcHBseUhhbmRsZXJzLnB1c2goYXBwbHlIYW5kbGVyKTtcblx0fVxuXHRpZiAoIV9fd2VicGFja19yZXF1aXJlX18ubyhjdXJyZW50VXBkYXRlLCBtb2R1bGVJZCkpIHtcblx0XHRjdXJyZW50VXBkYXRlW21vZHVsZUlkXSA9IF9fd2VicGFja19yZXF1aXJlX18ubVttb2R1bGVJZF07XG5cdH1cbn07XG5fX3dlYnBhY2tfcmVxdWlyZV9fLmhtckMuanNvbnAgPSBmdW5jdGlvbiAoXG5cdGNodW5rSWRzLFxuXHRyZW1vdmVkQ2h1bmtzLFxuXHRyZW1vdmVkTW9kdWxlcyxcblx0cHJvbWlzZXMsXG5cdGFwcGx5SGFuZGxlcnMsXG5cdHVwZGF0ZWRNb2R1bGVzTGlzdFxuKSB7XG5cdGFwcGx5SGFuZGxlcnMucHVzaChhcHBseUhhbmRsZXIpO1xuXHRjdXJyZW50VXBkYXRlQ2h1bmtzID0ge307XG5cdGN1cnJlbnRVcGRhdGVSZW1vdmVkQ2h1bmtzID0gcmVtb3ZlZENodW5rcztcblx0Y3VycmVudFVwZGF0ZSA9IHJlbW92ZWRNb2R1bGVzLnJlZHVjZShmdW5jdGlvbiAob2JqLCBrZXkpIHtcblx0XHRvYmpba2V5XSA9IGZhbHNlO1xuXHRcdHJldHVybiBvYmo7XG5cdH0sIHt9KTtcblx0Y3VycmVudFVwZGF0ZVJ1bnRpbWUgPSBbXTtcblx0Y2h1bmtJZHMuZm9yRWFjaChmdW5jdGlvbiAoY2h1bmtJZCkge1xuXHRcdGlmIChcblx0XHRcdF9fd2VicGFja19yZXF1aXJlX18ubyhpbnN0YWxsZWRDaHVua3MsIGNodW5rSWQpICYmXG5cdFx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gIT09IHVuZGVmaW5lZFxuXHRcdCkge1xuXHRcdFx0cHJvbWlzZXMucHVzaChsb2FkVXBkYXRlQ2h1bmsoY2h1bmtJZCwgdXBkYXRlZE1vZHVsZXNMaXN0KSk7XG5cdFx0XHRjdXJyZW50VXBkYXRlQ2h1bmtzW2NodW5rSWRdID0gdHJ1ZTtcblx0XHR9IGVsc2Uge1xuXHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rc1tjaHVua0lkXSA9IGZhbHNlO1xuXHRcdH1cblx0fSk7XG5cdGlmIChfX3dlYnBhY2tfcmVxdWlyZV9fLmYpIHtcblx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmYuanNvbnBIbXIgPSBmdW5jdGlvbiAoY2h1bmtJZCwgcHJvbWlzZXMpIHtcblx0XHRcdGlmIChcblx0XHRcdFx0Y3VycmVudFVwZGF0ZUNodW5rcyAmJlxuXHRcdFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8oY3VycmVudFVwZGF0ZUNodW5rcywgY2h1bmtJZCkgJiZcblx0XHRcdFx0IWN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF1cblx0XHRcdCkge1xuXHRcdFx0XHRwcm9taXNlcy5wdXNoKGxvYWRVcGRhdGVDaHVuayhjaHVua0lkKSk7XG5cdFx0XHRcdGN1cnJlbnRVcGRhdGVDaHVua3NbY2h1bmtJZF0gPSB0cnVlO1xuXHRcdFx0fVxuXHRcdH07XG5cdH1cbn07XG5cbl9fd2VicGFja19yZXF1aXJlX18uaG1yTSA9ICgpID0+IHtcblx0aWYgKHR5cGVvZiBmZXRjaCA9PT0gXCJ1bmRlZmluZWRcIikgdGhyb3cgbmV3IEVycm9yKFwiTm8gYnJvd3NlciBzdXBwb3J0OiBuZWVkIGZldGNoIEFQSVwiKTtcblx0cmV0dXJuIGZldGNoKF9fd2VicGFja19yZXF1aXJlX18ucCArIF9fd2VicGFja19yZXF1aXJlX18uaG1yRigpKS50aGVuKChyZXNwb25zZSkgPT4ge1xuXHRcdGlmKHJlc3BvbnNlLnN0YXR1cyA9PT0gNDA0KSByZXR1cm47IC8vIG5vIHVwZGF0ZSBhdmFpbGFibGVcblx0XHRpZighcmVzcG9uc2Uub2spIHRocm93IG5ldyBFcnJvcihcIkZhaWxlZCB0byBmZXRjaCB1cGRhdGUgbWFuaWZlc3QgXCIgKyByZXNwb25zZS5zdGF0dXNUZXh0KTtcblx0XHRyZXR1cm4gcmVzcG9uc2UuanNvbigpO1xuXHR9KTtcbn07XG5cbi8vIG5vIG9uIGNodW5rcyBsb2FkZWRcblxuLy8gaW5zdGFsbCBhIEpTT05QIGNhbGxiYWNrIGZvciBjaHVuayBsb2FkaW5nXG52YXIgd2VicGFja0pzb25wQ2FsbGJhY2sgPSAocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24sIGRhdGEpID0+IHtcblx0dmFyIFtjaHVua0lkcywgbW9yZU1vZHVsZXMsIHJ1bnRpbWVdID0gZGF0YTtcblx0Ly8gYWRkIFwibW9yZU1vZHVsZXNcIiB0byB0aGUgbW9kdWxlcyBvYmplY3QsXG5cdC8vIHRoZW4gZmxhZyBhbGwgXCJjaHVua0lkc1wiIGFzIGxvYWRlZCBhbmQgZmlyZSBjYWxsYmFja1xuXHR2YXIgbW9kdWxlSWQsIGNodW5rSWQsIGkgPSAwO1xuXHRpZihjaHVua0lkcy5zb21lKChpZCkgPT4gKGluc3RhbGxlZENodW5rc1tpZF0gIT09IDApKSkge1xuXHRcdGZvcihtb2R1bGVJZCBpbiBtb3JlTW9kdWxlcykge1xuXHRcdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKG1vcmVNb2R1bGVzLCBtb2R1bGVJZCkpIHtcblx0XHRcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tW21vZHVsZUlkXSA9IG1vcmVNb2R1bGVzW21vZHVsZUlkXTtcblx0XHRcdH1cblx0XHR9XG5cdFx0aWYocnVudGltZSkgdmFyIHJlc3VsdCA9IHJ1bnRpbWUoX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cdH1cblx0aWYocGFyZW50Q2h1bmtMb2FkaW5nRnVuY3Rpb24pIHBhcmVudENodW5rTG9hZGluZ0Z1bmN0aW9uKGRhdGEpO1xuXHRmb3IoO2kgPCBjaHVua0lkcy5sZW5ndGg7IGkrKykge1xuXHRcdGNodW5rSWQgPSBjaHVua0lkc1tpXTtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oaW5zdGFsbGVkQ2h1bmtzLCBjaHVua0lkKSAmJiBpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0pIHtcblx0XHRcdGluc3RhbGxlZENodW5rc1tjaHVua0lkXVswXSgpO1xuXHRcdH1cblx0XHRpbnN0YWxsZWRDaHVua3NbY2h1bmtJZF0gPSAwO1xuXHR9XG5cbn1cblxudmFyIGNodW5rTG9hZGluZ0dsb2JhbCA9IHNlbGZbXCJ3ZWJwYWNrQ2h1bmtfcmVuZW9zX3NsaWRlcl9tb2RzX3BhcnRpY2xlXCJdID0gc2VsZltcIndlYnBhY2tDaHVua19yZW5lb3Nfc2xpZGVyX21vZHNfcGFydGljbGVcIl0gfHwgW107XG5jaHVua0xvYWRpbmdHbG9iYWwuZm9yRWFjaCh3ZWJwYWNrSnNvbnBDYWxsYmFjay5iaW5kKG51bGwsIDApKTtcbmNodW5rTG9hZGluZ0dsb2JhbC5wdXNoID0gd2VicGFja0pzb25wQ2FsbGJhY2suYmluZChudWxsLCBjaHVua0xvYWRpbmdHbG9iYWwucHVzaC5iaW5kKGNodW5rTG9hZGluZ0dsb2JhbCkpOyIsIi8vIHJ1biBydW50aW1lIHN0YXJ0dXBcbl9fd2VicGFja19yZXF1aXJlX18ueCgpOyIsIi8vIG1vZHVsZSBjYWNoZSBhcmUgdXNlZCBzbyBlbnRyeSBpbmxpbmluZyBpcyBkaXNhYmxlZFxuLy8gc3RhcnR1cFxuLy8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fKFwiLi9ub2RlX21vZHVsZXMvd2VicGFjay1kZXYtc2VydmVyL2NsaWVudC9pbmRleC5qcz9wcm90b2NvbD13cyUzQSZob3N0bmFtZT0wLjAuMC4wJnBvcnQ9MzAwMiZwYXRobmFtZT0lMkZ3cyZsb2dnaW5nPWluZm8mb3ZlcmxheT10cnVlJnJlY29ubmVjdD0xMCZob3Q9dHJ1ZSZsaXZlLXJlbG9hZD10cnVlXCIpO1xuX193ZWJwYWNrX3JlcXVpcmVfXyhcIi4vbm9kZV9tb2R1bGVzL3dlYnBhY2svaG90L2Rldi1zZXJ2ZXIuanNcIik7XG52YXIgX193ZWJwYWNrX2V4cG9ydHNfXyA9IF9fd2VicGFja19yZXF1aXJlX18oXCJ3ZWJwYWNrL2NvbnRhaW5lci9lbnRyeS9wYXJ0aWNsZVwiKTtcbiIsIiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==