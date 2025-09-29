"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/app/modules.js":
/*!****************************!*\
  !*** ./src/app/modules.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @module-federation/runtime */ "./node_modules/@module-federation/runtime/dist/index.esm.js");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _idb_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../idb.js */ "./src/idb.js");
/* harmony import */ var _toasts_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./toasts.js */ "./src/app/toasts.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./modal.js */ "./src/app/modal.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__

;



class ReqError extends Error {
    constructor() {
        super('Not all required parameters are specified.')
        this.isReqError = true
    }
}

class ExistError extends Error {
    constructor() {
        super('This module has already been added.')
        this.isExistError = true
    }
}

const _predefined =  true ? [
    {
        name: 'engine',
        entry: '/editor/engine/mf.js',
        index: "engine",
        system: true
    },
    {
        name: 'tools',
        entry: '/mods/tools/mf.js',
        index: "tools",
        system: true
    }/*, {
        name: 'gsapmod',
        entry: '/mods/gsap/mf.js',
        index: "gsap"
    },
    {
        name: 'troika',
        entry: '/mods/troika/mf.js',
        index: "troika"
    }*//*, {
        name: 'vueuimod',
        entry: '/mods/vueui/mf.js',
        index: "vueui"
    }*//*,
     {
        name: 'vueuimod',
        entry: '/mods/vueui/mf.js',
        index: "vueui"
    },
    {
        name: 'textmesh',
        entry: '/mods/textmesh/mf.js',
        index: "textmesh"
    },
    {
        name: 'troika',
        entry: '/mods/troika/mf.js',
        index: "troika"
    }*/
] : 0

/**
 * Пользовательские модули
 */
const _modules = []
const _global = [
    {
        uid: `gsap:/mods/gsap/mf.js`,
        title: "GSAP Animation",
        description: `<p>The module provides element transformations: movement, rotation, and scale.</p>
        <p>Use GSAP:</p>
        <p><a href="https://github.com/greensock/GSAP" target="blank">https://github.com/greensock/GSAP</a></p>`,
        name: 'gsapmod',
        entry: '/mods/gsap/mf.js',
        index: "gsap",
        global: true

    },
    {
        uid: `troika:/mods/troika/mf.js`,
        title: "Troika Text",
        description: `<p>Module  provides high quality text rendering in Three.js scenes, using signed distance fields (SDF) and antialiasing using standard derivatives.</p>
        <p>Use Troika Text for Three.js:</p>
        <p><a href="https://github.com/protectwise/troika/tree/main/packages/troika-three-text" target="blank">https://github.com/protectwise/troika/tree/main/packages/troika-three-text</a></p>`,

        name: 'troika',
        entry: '/mods/troika/mf.js',
        index: "troika",
        global: true
    },
    {
        uid: `textmesh:/mods/textmesh/mf.js`,
        title: "Text Mesh",
        description: `<p>Module use small library for building VR user interfaces. The objects it creates are three.object3Ds, usable directly in a three.js scene like any other Object3D.</p>
        <p>Use three-mesh-ui:</p>
        <p><a href="https://github.com/felixmariotto/three-mesh-ui" target="blank">https://github.com/felixmariotto/three-mesh-ui</a></p>`,
        name: 'textmesh',
        entry: '/mods/textmesh/mf.js',
        index: "textmesh",
        global: true
    },
    {
        uid: `particle:/mods/particle/mf.js`,
        title: "Particles",
        description: `<p>Particle system </p>`,
        name: 'particle',
        entry: '/mods/particle/mf.js',
        index: "particle",
        global: true
    }
]
/**
 * Загруженные модули, пользовательские и системные
 */
const _mods = {}

/**
 * Загрузка добавленных пользователем модулей
 */
async function loadUserModules(modules) {
    await (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.registerRemotes)(modules)
    const proms = modules.map(p => {
        return new Promise((resolve) => {
            ;(0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.loadRemote)(`${p.name}/${p.index}`).then(m => {
                _modules.push({
                    name: p.name,
                    index: p.index,
                    entry: p.entry,
                    title: p.title || p.name,
                    id: p.id,
                    uid: p.uid,
                    global: p.global,
                    description: p.description
                })
                resolve()
            })
        })
    })
    await Promise.all(proms)
    console.log(`UserModules loaded ${proms.length}`)
}

async function SaveUserModule(mod) {
    const saveData = {
        id: mod.entry, ...mod
    }
    await _idb_js__WEBPACK_IMPORTED_MODULE_3__["default"].upsertItemProperties("modules", saveData.uid, saveData)
    return saveData
}

/**
 * name: 'engine',
        entry: '/editor/engine/mf.js',
        index: "engine"
 * @param {*} module 
 */
async function AddModule(module) {
    //Не менять module на mod - теряется относительный путь
    module.uid = `${module.index}:${module.entry}`
    if (!module.name?.length || !module.index?.length || !module.entry?.length)
        throw new ReqError()
    if (_modules.find(m => m.uid === module.uid))
        throw new ExistError()
    //Регистрируем если он не был зарегистрирован (проверка по uid который ставится при записи в БД)
    try {
        ;(0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.registerRemotes)([{ ...module }])
        await (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.loadRemote)(`${module.name}/${module.index}`)
    } catch (error) {
        throw error
    }
    const m = await SaveUserModule(module)
    _modules.push(m)
    return m
}

async function AddModules(modules) {
    for (let i = 0; i < modules.length; i++) {
        const modData = modules[i]
        try {
            await AddModule(modData)
        } catch (error) {
            continue
        }
    }
}

///public

/**
 * Загрузка основных модулей, набор для всех проектов
 * и пользовательских модулей для этого проекта 
 * 
 */
async function init() {
    (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.createInstance)({
        name: 'slider.editor',
        remotes: []
    })

    _modules.length = 0
    await (0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.registerRemotes)([..._predefined])
    await Promise.all(_predefined.map(p => {
        return new Promise((resolve) => {
            ;(0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_1__.loadRemote)(`${p.name}/${p.index}`).then(m => {
                _mods[p.name] = m
                resolve()
            })
        })
    }))
}


function showLib() {
    const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        selected: null,
        list: _modules,
        processed: false,
        styles: {
            item: {
                width: "128px",
                height: "128px"
            }
        },
        title: "Project modules"
    })

    const saveButton = {
        label: "Add",
        class: "secondary",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected || props.selected.uid || props.processed),
        handler: async () => {
            props.processed = true
            try {
                props.selected = await AddModule(props.selected)
            } catch (error) {
                if (error.isReqError) {
                    _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                        message: "Not all required fields are filled in"
                    })
                } else
                    _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                        message: "Error adding module"
                    })
                props.processed = false
                return
            }
            _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                message: "The module has been loaded successfully."
            })
        }
    }
    const regbutton = {
        label: "Registration",
        class: "secondary",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.selected && !props.selected.uid),
        handler: () => {
            props.selected = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
                name: "", entry: "", index: ""
            })
        }
    }

    const cancelbutton = {
        label: "Cancel",
        class: "primary",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected),
        handler: () => {
            props.selected = null
        }
    }

    const removebutton = {
        label: "Remove",
        class: "additional",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected?.id),
        handler: () => {
            console.log(props.selected)
            const propUID = `${props.selected.index}:${props.selected.entry}`
            const index = _modules.findIndex(m => `${m.index}:${m.entry}` === propUID)
            if (index >= 0) {
                const m = _modules.splice(index, 1)
                App.toasts.add({
                    message: `The module has been removed and will not be loaded the next time you use it.\nPlease refresh the page to take effect.`
                })
                props.selected = null
                _idb_js__WEBPACK_IMPORTED_MODULE_3__["default"].deleteItem("modules", m[0].index)
            }
        }
    }

    const closeButton = {
        label: "Close",
        class: "primary",
        handler: async () => {
            _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].close()
        }
    }

    const buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([
        regbutton, removebutton, saveButton, cancelbutton, closeButton,
    ])

    _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].open({
        header: {
            value: `Managing modules`,
            handler: () => {
                _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].close()
            }
        },
        content: {
            component: "ItemsLib",
            props,
            events: {

                selected: asset => {
                    props.selected = asset
                    console.log(props.selected)
                }
            },
            slots: {
                item: {
                    component: "ModuleItem"
                },
                edit: {
                    component: "ModuleEdit",
                    props,
                    events: {
                        edit: (prop, val) => {
                            props.selected[prop] = val
                        }
                    }
                }
            }
        },
        footer: {
            buttons
        }
    })
}

function ShowGlobalLib() {
    const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        selected: null,
        list: _global,
        processed: false,
        canadd: false,
        styles: {
            item: {
                width: "128px",
                height: "128px"
            }
        },
        head: {
            title: ""
        }
    })

    const saveButton = {
        label: "Add to project",
        class: "secondary",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => props.processed || !props.selected || !props.canadd),
        handler: async () => {
            props.processed = true
            //props.canadd = _modules.findIndex(m => m.uid === props.selected.uid) === -1
            try {
                await AddModule({ ...props.selected })
            } catch (error) {
                if (error.isExistError) {
                    _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                        message: error.message
                    })
                } else {
                    _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                        message: "Error adding module"
                    })
                }
                props.processed = false
                return
            }
            _toasts_js__WEBPACK_IMPORTED_MODULE_4__["default"].add({
                message: "The module has been added to project."
            })
            props.processed = false

        }
    }

    const cancelButton = {
        label: "Close",
        class: "primary",
        handler: async () => {
            _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].close()
        }
    }

    const buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([
        saveButton, cancelButton
    ])

    _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].open({
        header: {
            value: `Global modules`,
            handler: () => {
                _modal_js__WEBPACK_IMPORTED_MODULE_5__["default"].close()
            }
        },
        content: {
            component: "ItemsLib",
            props,
            events: {
                selected: asset => {
                    props.selected = asset
                    props.canadd = _modules.findIndex(m => m.uid === props.selected.uid) === -1
                    console.log(props.selected, props.canadd)
                }
            },
            slots: {
                head: {
                    component: "SearchFilter"
                },
                item: {
                    component: "ModuleItem"
                },
                edit: {
                    component: "ModuleView",
                    props
                }
            }
        },
        footer: {
            buttons
        }
    })
}

/**
 * Возвращает загруженный модуль
 * @param {*} name 
 * @returns 
 */
function getMod(name) {
    return _mods[name]
}

const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    init, showLib, getMod, loadUserModules, AddModules
})

App.On("init", () => {
    App.menu.hierarhy.list.push({
        icon: "plug",
        tooltip: "Modules",
        handler: showLib
    })
    window.vue.component("ModuleEdit", (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(async () => {
        const module = await __webpack_require__.e(/*! import() */ "src_components_modals_modules_moduleedit_vue").then(__webpack_require__.bind(__webpack_require__, /*! @/components/modals/modules/moduleedit.vue */ "./src/components/modals/modules/moduleedit.vue"));
        return module.default || module;
    }))
    window.vue.component("ModuleItem", (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(async () => {
        const module = await __webpack_require__.e(/*! import() */ "src_components_modals_modules_moduleitem_vue").then(__webpack_require__.bind(__webpack_require__, /*! @/components/modals/modules/moduleitem.vue */ "./src/components/modals/modules/moduleitem.vue"));
        return module.default || module;
    }))
    window.vue.component("ModuleView", (0,vue__WEBPACK_IMPORTED_MODULE_0__.defineAsyncComponent)(async () => {
        const module = await __webpack_require__.e(/*! import() */ "src_components_modals_modules_moduleview_vue").then(__webpack_require__.bind(__webpack_require__, /*! @/components/modals/modules/moduleview.vue */ "./src/components/modals/modules/moduleview.vue"));
        return module.default || module;
    }))

    App.menu.addMenu('app',
        {
            path: 'app.list.libraries',
            icon: '',
            text: 'Libraries',
            link: '#',
            children: [
                {
                    path: 'app.list.libraries.modules',
                    icon: 'plug',
                    text: 'Modules',
                    handler: async () => {
                        ShowGlobalLib()
                    }
                }
            ]
        }
    )
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fa32fc6203c7534623c1")
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"@reneos/app": [{	version: "1.0.6",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/@reneos/app/index.js */ "./node_modules/@reneos/app/index.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"requiredVersion":"1.0.6","singleton":true,"layer":null}},],	"three": [{	version: "0.180.0",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.22",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLEs7Ozs7Ozs7O1VDNWdCZixzRDs7Ozs7VUNBQSxzREFBc0Qsa0JBQWtCO1VBQ3hFO1VBQ0E7VUFDQSxnQkFBZ0Isc0VBQXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvYXBwL21vZHVsZXMuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIHJlZiwgZGVmaW5lQXN5bmNDb21wb25lbnQsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgeyBjcmVhdGVJbnN0YW5jZSwgbG9hZFJlbW90ZSwgcmVnaXN0ZXJSZW1vdGVzIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUnO1xyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5cclxuaW1wb3J0IElEQiBmcm9tIFwiLi4vaWRiLmpzXCJcclxuaW1wb3J0IHRvYXN0cyBmcm9tIFwiLi90b2FzdHMuanNcIlxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWwuanNcIlxyXG5cclxuY2xhc3MgUmVxRXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignTm90IGFsbCByZXF1aXJlZCBwYXJhbWV0ZXJzIGFyZSBzcGVjaWZpZWQuJylcclxuICAgICAgICB0aGlzLmlzUmVxRXJyb3IgPSB0cnVlXHJcbiAgICB9XHJcbn1cclxuXHJcbmNsYXNzIEV4aXN0RXJyb3IgZXh0ZW5kcyBFcnJvciB7XHJcbiAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICBzdXBlcignVGhpcyBtb2R1bGUgaGFzIGFscmVhZHkgYmVlbiBhZGRlZC4nKVxyXG4gICAgICAgIHRoaXMuaXNFeGlzdEVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBfcHJlZGVmaW5lZCA9IHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAnZGV2ZWxvcG1lbnQnID8gW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlbmdpbmUnLFxyXG4gICAgICAgIGVudHJ5OiAnL2VkaXRvci9lbmdpbmUvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImVuZ2luZVwiLFxyXG4gICAgICAgIHN5c3RlbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndG9vbHMnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdG9vbHMvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRvb2xzXCIsXHJcbiAgICAgICAgc3lzdGVtOiB0cnVlXHJcbiAgICB9LyosIHtcclxuICAgICAgICBuYW1lOiAnZ3NhcG1vZCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy9nc2FwL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJnc2FwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Ryb2lrYScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90cm9pa2EvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRyb2lrYVwiXHJcbiAgICB9Ki8vKiwge1xyXG4gICAgICAgIG5hbWU6ICd2dWV1aW1vZCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy92dWV1aS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidnVldWlcIlxyXG4gICAgfSovLyosXHJcbiAgICAge1xyXG4gICAgICAgIG5hbWU6ICd2dWV1aW1vZCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy92dWV1aS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidnVldWlcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGV4dG1lc2gnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdGV4dG1lc2gvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRleHRtZXNoXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Ryb2lrYScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90cm9pa2EvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRyb2lrYVwiXHJcbiAgICB9Ki9cclxuXSA6IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZW5naW5lJyxcclxuICAgICAgICBlbnRyeTogJy9lZGl0b3IvZW5naW5lL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJlbmdpbmVcIixcclxuICAgICAgICBzeXN0ZW06IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Rvb2xzJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Rvb2xzL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0b29sc1wiLFxyXG4gICAgICAgIHN5c3RlbTogdHJ1ZVxyXG4gICAgfS8qLCB7XHJcbiAgICAgICAgbmFtZTogJ2dzYXBtb2QnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvZ3NhcC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwiZ3NhcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0cm9pa2EnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdHJvaWthL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0cm9pa2FcIlxyXG4gICAgfSovLyosXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RleHRtZXNoJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3RleHRtZXNoL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0ZXh0bWVzaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0cm9pa2EnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdHJvaWthL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0cm9pa2FcIlxyXG4gICAgfSovXHJcbl1cclxuXHJcbi8qKlxyXG4gKiDQn9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQvNC+0LTRg9C70LhcclxuICovXHJcbmNvbnN0IF9tb2R1bGVzID0gW11cclxuY29uc3QgX2dsb2JhbCA9IFtcclxuICAgIHtcclxuICAgICAgICB1aWQ6IGBnc2FwOi9tb2RzL2dzYXAvbWYuanNgLFxyXG4gICAgICAgIHRpdGxlOiBcIkdTQVAgQW5pbWF0aW9uXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGA8cD5UaGUgbW9kdWxlIHByb3ZpZGVzIGVsZW1lbnQgdHJhbnNmb3JtYXRpb25zOiBtb3ZlbWVudCwgcm90YXRpb24sIGFuZCBzY2FsZS48L3A+XHJcbiAgICAgICAgPHA+VXNlIEdTQVA6PC9wPlxyXG4gICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVBcIiB0YXJnZXQ9XCJibGFua1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUDwvYT48L3A+YCxcclxuICAgICAgICBuYW1lOiAnZ3NhcG1vZCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy9nc2FwL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJnc2FwXCIsXHJcbiAgICAgICAgZ2xvYmFsOiB0cnVlXHJcblxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1aWQ6IGB0cm9pa2E6L21vZHMvdHJvaWthL21mLmpzYCxcclxuICAgICAgICB0aXRsZTogXCJUcm9pa2EgVGV4dFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+TW9kdWxlICBwcm92aWRlcyBoaWdoIHF1YWxpdHkgdGV4dCByZW5kZXJpbmcgaW4gVGhyZWUuanMgc2NlbmVzLCB1c2luZyBzaWduZWQgZGlzdGFuY2UgZmllbGRzIChTREYpIGFuZCBhbnRpYWxpYXNpbmcgdXNpbmcgc3RhbmRhcmQgZGVyaXZhdGl2ZXMuPC9wPlxyXG4gICAgICAgIDxwPlVzZSBUcm9pa2EgVGV4dCBmb3IgVGhyZWUuanM6PC9wPlxyXG4gICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vcHJvdGVjdHdpc2UvdHJvaWthL3RyZWUvbWFpbi9wYWNrYWdlcy90cm9pa2EtdGhyZWUtdGV4dFwiIHRhcmdldD1cImJsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL3Byb3RlY3R3aXNlL3Ryb2lrYS90cmVlL21haW4vcGFja2FnZXMvdHJvaWthLXRocmVlLXRleHQ8L2E+PC9wPmAsXHJcblxyXG4gICAgICAgIG5hbWU6ICd0cm9pa2EnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdHJvaWthL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0cm9pa2FcIixcclxuICAgICAgICBnbG9iYWw6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdWlkOiBgdGV4dG1lc2g6L21vZHMvdGV4dG1lc2gvbWYuanNgLFxyXG4gICAgICAgIHRpdGxlOiBcIlRleHQgTWVzaFwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+TW9kdWxlIHVzZSBzbWFsbCBsaWJyYXJ5IGZvciBidWlsZGluZyBWUiB1c2VyIGludGVyZmFjZXMuIFRoZSBvYmplY3RzIGl0IGNyZWF0ZXMgYXJlIHRocmVlLm9iamVjdDNEcywgdXNhYmxlIGRpcmVjdGx5IGluIGEgdGhyZWUuanMgc2NlbmUgbGlrZSBhbnkgb3RoZXIgT2JqZWN0M0QuPC9wPlxyXG4gICAgICAgIDxwPlVzZSB0aHJlZS1tZXNoLXVpOjwvcD5cclxuICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2ZlbGl4bWFyaW90dG8vdGhyZWUtbWVzaC11aVwiIHRhcmdldD1cImJsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL2ZlbGl4bWFyaW90dG8vdGhyZWUtbWVzaC11aTwvYT48L3A+YCxcclxuICAgICAgICBuYW1lOiAndGV4dG1lc2gnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdGV4dG1lc2gvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRleHRtZXNoXCIsXHJcbiAgICAgICAgZ2xvYmFsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVpZDogYHBhcnRpY2xlOi9tb2RzL3BhcnRpY2xlL21mLmpzYCxcclxuICAgICAgICB0aXRsZTogXCJQYXJ0aWNsZXNcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPlBhcnRpY2xlIHN5c3RlbSA8L3A+YCxcclxuICAgICAgICBuYW1lOiAncGFydGljbGUnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvcGFydGljbGUvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInBhcnRpY2xlXCIsXHJcbiAgICAgICAgZ2xvYmFsOiB0cnVlXHJcbiAgICB9XHJcbl1cclxuLyoqXHJcbiAqINCX0LDQs9GA0YPQttC10L3QvdGL0LUg0LzQvtC00YPQu9C4LCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjQtSDQuCDRgdC40YHRgtC10LzQvdGL0LVcclxuICovXHJcbmNvbnN0IF9tb2RzID0ge31cclxuXHJcbi8qKlxyXG4gKiDQl9Cw0LPRgNGD0LfQutCwINC00L7QsdCw0LLQu9C10L3QvdGL0YUg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9C10Lwg0LzQvtC00YPQu9C10LlcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWRVc2VyTW9kdWxlcyhtb2R1bGVzKSB7XHJcbiAgICBhd2FpdCByZWdpc3RlclJlbW90ZXMobW9kdWxlcylcclxuICAgIGNvbnN0IHByb21zID0gbW9kdWxlcy5tYXAocCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRSZW1vdGUoYCR7cC5uYW1lfS8ke3AuaW5kZXh9YCkudGhlbihtID0+IHtcclxuICAgICAgICAgICAgICAgIF9tb2R1bGVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU6IHAubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpbmRleDogcC5pbmRleCxcclxuICAgICAgICAgICAgICAgICAgICBlbnRyeTogcC5lbnRyeSxcclxuICAgICAgICAgICAgICAgICAgICB0aXRsZTogcC50aXRsZSB8fCBwLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaWQ6IHAuaWQsXHJcbiAgICAgICAgICAgICAgICAgICAgdWlkOiBwLnVpZCxcclxuICAgICAgICAgICAgICAgICAgICBnbG9iYWw6IHAuZ2xvYmFsLFxyXG4gICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBwLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9tcylcclxuICAgIGNvbnNvbGUubG9nKGBVc2VyTW9kdWxlcyBsb2FkZWQgJHtwcm9tcy5sZW5ndGh9YClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gU2F2ZVVzZXJNb2R1bGUobW9kKSB7XHJcbiAgICBjb25zdCBzYXZlRGF0YSA9IHtcclxuICAgICAgICBpZDogbW9kLmVudHJ5LCAuLi5tb2RcclxuICAgIH1cclxuICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcIm1vZHVsZXNcIiwgc2F2ZURhdGEudWlkLCBzYXZlRGF0YSlcclxuICAgIHJldHVybiBzYXZlRGF0YVxyXG59XHJcblxyXG4vKipcclxuICogbmFtZTogJ2VuZ2luZScsXHJcbiAgICAgICAgZW50cnk6ICcvZWRpdG9yL2VuZ2luZS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwiZW5naW5lXCJcclxuICogQHBhcmFtIHsqfSBtb2R1bGUgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBBZGRNb2R1bGUobW9kdWxlKSB7XHJcbiAgICAvL9Cd0LUg0LzQtdC90Y/RgtGMIG1vZHVsZSDQvdCwIG1vZCAtINGC0LXRgNGP0LXRgtGB0Y8g0L7RgtC90L7RgdC40YLQtdC70YzQvdGL0Lkg0L/Rg9GC0YxcclxuICAgIG1vZHVsZS51aWQgPSBgJHttb2R1bGUuaW5kZXh9OiR7bW9kdWxlLmVudHJ5fWBcclxuICAgIGlmICghbW9kdWxlLm5hbWU/Lmxlbmd0aCB8fCAhbW9kdWxlLmluZGV4Py5sZW5ndGggfHwgIW1vZHVsZS5lbnRyeT8ubGVuZ3RoKVxyXG4gICAgICAgIHRocm93IG5ldyBSZXFFcnJvcigpXHJcbiAgICBpZiAoX21vZHVsZXMuZmluZChtID0+IG0udWlkID09PSBtb2R1bGUudWlkKSlcclxuICAgICAgICB0aHJvdyBuZXcgRXhpc3RFcnJvcigpXHJcbiAgICAvL9Cg0LXQs9C40YHRgtGA0LjRgNGD0LXQvCDQtdGB0LvQuCDQvtC9INC90LUg0LHRi9C7INC30LDRgNC10LPQuNGB0YLRgNC40YDQvtCy0LDQvSAo0L/RgNC+0LLQtdGA0LrQsCDQv9C+IHVpZCDQutC+0YLQvtGA0YvQuSDRgdGC0LDQstC40YLRgdGPINC/0YDQuCDQt9Cw0L/QuNGB0Lgg0LIg0JHQlClcclxuICAgIHRyeSB7XHJcbiAgICAgICAgcmVnaXN0ZXJSZW1vdGVzKFt7IC4uLm1vZHVsZSB9XSlcclxuICAgICAgICBhd2FpdCBsb2FkUmVtb3RlKGAke21vZHVsZS5uYW1lfS8ke21vZHVsZS5pbmRleH1gKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICB0aHJvdyBlcnJvclxyXG4gICAgfVxyXG4gICAgY29uc3QgbSA9IGF3YWl0IFNhdmVVc2VyTW9kdWxlKG1vZHVsZSlcclxuICAgIF9tb2R1bGVzLnB1c2gobSlcclxuICAgIHJldHVybiBtXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZE1vZHVsZXMobW9kdWxlcykge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBtb2R1bGVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgbW9kRGF0YSA9IG1vZHVsZXNbaV1cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBhd2FpdCBBZGRNb2R1bGUobW9kRGF0YSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuLy8vcHVibGljXHJcblxyXG4vKipcclxuICog0JfQsNCz0YDRg9C30LrQsCDQvtGB0L3QvtCy0L3Ri9GFINC80L7QtNGD0LvQtdC5LCDQvdCw0LHQvtGAINC00LvRjyDQstGB0LXRhSDQv9GA0L7QtdC60YLQvtCyXHJcbiAqINC4INC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNGFINC80L7QtNGD0LvQtdC5INC00LvRjyDRjdGC0L7Qs9C+INC/0YDQvtC10LrRgtCwIFxyXG4gKiBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoKSB7XHJcbiAgICBjcmVhdGVJbnN0YW5jZSh7XHJcbiAgICAgICAgbmFtZTogJ3NsaWRlci5lZGl0b3InLFxyXG4gICAgICAgIHJlbW90ZXM6IFtdXHJcbiAgICB9KVxyXG5cclxuICAgIF9tb2R1bGVzLmxlbmd0aCA9IDBcclxuICAgIGF3YWl0IHJlZ2lzdGVyUmVtb3RlcyhbLi4uX3ByZWRlZmluZWRdKVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoX3ByZWRlZmluZWQubWFwKHAgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkUmVtb3RlKGAke3AubmFtZX0vJHtwLmluZGV4fWApLnRoZW4obSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfbW9kc1twLm5hbWVdID0gbVxyXG4gICAgICAgICAgICAgICAgcmVzb2x2ZSgpXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSlcclxuICAgIH0pKVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gc2hvd0xpYigpIHtcclxuICAgIGNvbnN0IHByb3BzID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgICAgIGxpc3Q6IF9tb2R1bGVzLFxyXG4gICAgICAgIHByb2Nlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI4cHhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICB0aXRsZTogXCJQcm9qZWN0IG1vZHVsZXNcIlxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkFkZFwiLFxyXG4gICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkIHx8IHByb3BzLnNlbGVjdGVkLnVpZCB8fCBwcm9wcy5wcm9jZXNzZWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMucHJvY2Vzc2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBhd2FpdCBBZGRNb2R1bGUocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuaXNSZXFFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIk5vdCBhbGwgcmVxdWlyZWQgZmllbGRzIGFyZSBmaWxsZWQgaW5cIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9IGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFcnJvciBhZGRpbmcgbW9kdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcHJvcHMucHJvY2Vzc2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgbW9kdWxlIGhhcyBiZWVuIGxvYWRlZCBzdWNjZXNzZnVsbHkuXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zdCByZWdidXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiUmVnaXN0cmF0aW9uXCIsXHJcbiAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5zZWxlY3RlZCAmJiAhcHJvcHMuc2VsZWN0ZWQudWlkKSxcclxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gcmVhY3RpdmUoe1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIiwgZW50cnk6IFwiXCIsIGluZGV4OiBcIlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbGJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQpLFxyXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHJlbW92ZWJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJSZW1vdmVcIixcclxuICAgICAgICBjbGFzczogXCJhZGRpdGlvbmFsXCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQ/LmlkKSxcclxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICBjb25zdCBwcm9wVUlEID0gYCR7cHJvcHMuc2VsZWN0ZWQuaW5kZXh9OiR7cHJvcHMuc2VsZWN0ZWQuZW50cnl9YFxyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IF9tb2R1bGVzLmZpbmRJbmRleChtID0+IGAke20uaW5kZXh9OiR7bS5lbnRyeX1gID09PSBwcm9wVUlEKVxyXG4gICAgICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbSA9IF9tb2R1bGVzLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICAgICAgICAgIEFwcC50b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBgVGhlIG1vZHVsZSBoYXMgYmVlbiByZW1vdmVkIGFuZCB3aWxsIG5vdCBiZSBsb2FkZWQgdGhlIG5leHQgdGltZSB5b3UgdXNlIGl0LlxcblBsZWFzZSByZWZyZXNoIHRoZSBwYWdlIHRvIHRha2UgZWZmZWN0LmBcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IG51bGxcclxuICAgICAgICAgICAgICAgIElEQi5kZWxldGVJdGVtKFwibW9kdWxlc1wiLCBtWzBdLmluZGV4KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNsb3NlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gcmVhY3RpdmUoW1xyXG4gICAgICAgIHJlZ2J1dHRvbiwgcmVtb3ZlYnV0dG9uLCBzYXZlQnV0dG9uLCBjYW5jZWxidXR0b24sIGNsb3NlQnV0dG9uLFxyXG4gICAgXSlcclxuXHJcbiAgICBtb2RhbC5vcGVuKHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgdmFsdWU6IGBNYW5hZ2luZyBtb2R1bGVzYCxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJJdGVtc0xpYlwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IGFzc2V0ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IGFzc2V0XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsb3RzOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZHVsZUl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVkaXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiTW9kdWxlRWRpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiAocHJvcCwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZFtwcm9wXSA9IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uc1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dHbG9iYWxMaWIoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHJlYWN0aXZlKHtcclxuICAgICAgICBzZWxlY3RlZDogbnVsbCxcclxuICAgICAgICBsaXN0OiBfZ2xvYmFsLFxyXG4gICAgICAgIHByb2Nlc3NlZDogZmFsc2UsXHJcbiAgICAgICAgY2FuYWRkOiBmYWxzZSxcclxuICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI4cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjhweFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQWRkIHRvIHByb2plY3RcIixcclxuICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+IHByb3BzLnByb2Nlc3NlZCB8fCAhcHJvcHMuc2VsZWN0ZWQgfHwgIXByb3BzLmNhbmFkZCksXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9jZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIC8vcHJvcHMuY2FuYWRkID0gX21vZHVsZXMuZmluZEluZGV4KG0gPT4gbS51aWQgPT09IHByb3BzLnNlbGVjdGVkLnVpZCkgPT09IC0xXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBBZGRNb2R1bGUoeyAuLi5wcm9wcy5zZWxlY3RlZCB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmlzRXhpc3RFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgYWRkaW5nIG1vZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIG1vZHVsZSBoYXMgYmVlbiBhZGRlZCB0byBwcm9qZWN0LlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IGZhbHNlXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSByZWFjdGl2ZShbXHJcbiAgICAgICAgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXHJcbiAgICBdKVxyXG5cclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYEdsb2JhbCBtb2R1bGVzYCxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJJdGVtc0xpYlwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYW5hZGQgPSBfbW9kdWxlcy5maW5kSW5kZXgobSA9PiBtLnVpZCA9PT0gcHJvcHMuc2VsZWN0ZWQudWlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZCwgcHJvcHMuY2FuYWRkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbG90czoge1xyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJTZWFyY2hGaWx0ZXJcIlxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiTW9kdWxlSXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWRpdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2R1bGVWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHNcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG4vKipcclxuICog0JLQvtC30LLRgNCw0YnQsNC10YIg0LfQsNCz0YDRg9C20LXQvdC90YvQuSDQvNC+0LTRg9C70YxcclxuICogQHBhcmFtIHsqfSBuYW1lIFxyXG4gKiBAcmV0dXJucyBcclxuICovXHJcbmZ1bmN0aW9uIGdldE1vZChuYW1lKSB7XHJcbiAgICByZXR1cm4gX21vZHNbbmFtZV1cclxufVxyXG5cclxuY29uc3QgX2RhdGEgPSByZWFjdGl2ZSh7XHJcbiAgICBpbml0LCBzaG93TGliLCBnZXRNb2QsIGxvYWRVc2VyTW9kdWxlcywgQWRkTW9kdWxlc1xyXG59KVxyXG5cclxuQXBwLk9uKFwiaW5pdFwiLCAoKSA9PiB7XHJcbiAgICBBcHAubWVudS5oaWVyYXJoeS5saXN0LnB1c2goe1xyXG4gICAgICAgIGljb246IFwicGx1Z1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiTW9kdWxlc1wiLFxyXG4gICAgICAgIGhhbmRsZXI6IHNob3dMaWJcclxuICAgIH0pXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIk1vZHVsZUVkaXRcIiwgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnQC9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0IHx8IG1vZHVsZTtcclxuICAgIH0pKVxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJNb2R1bGVJdGVtXCIsIGRlZmluZUFzeW5jQ29tcG9uZW50KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ0AvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVpdGVtLnZ1ZScpO1xyXG4gICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICB9KSlcclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiTW9kdWxlVmlld1wiLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdAL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxldmlldy52dWUnKTtcclxuICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgfSkpXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5saWJyYXJpZXMnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ0xpYnJhcmllcycsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QubGlicmFyaWVzLm1vZHVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdwbHVnJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnTW9kdWxlcycsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBTaG93R2xvYmFsTGliKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImZhMzJmYzYyMDNjNzUzNDYyM2MxXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjJcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=