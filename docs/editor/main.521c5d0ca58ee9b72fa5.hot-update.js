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
            props.canadd = _modules.findIndex(m => m.uid === props.selected.uid) === -1
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
        icon: "books",
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
                    icon: 'books',
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
/******/ 	__webpack_require__.h = () => ("7a89671dbb250be49c08")
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
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.21",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxLOzs7Ozs7OztVQzNnQmYsc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9tb2R1bGVzLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCByZWYsIGRlZmluZUFzeW5jQ29tcG9uZW50LCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UsIGxvYWRSZW1vdGUsIHJlZ2lzdGVyUmVtb3RlcyB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lJztcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuXHJcbmltcG9ydCBJREIgZnJvbSBcIi4uL2lkYi5qc1wiXHJcbmltcG9ydCB0b2FzdHMgZnJvbSBcIi4vdG9hc3RzLmpzXCJcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsLmpzXCJcclxuXHJcbmNsYXNzIFJlcUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ05vdCBhbGwgcmVxdWlyZWQgcGFyYW1ldGVycyBhcmUgc3BlY2lmaWVkLicpXHJcbiAgICAgICAgdGhpcy5pc1JlcUVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFeGlzdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1RoaXMgbW9kdWxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQuJylcclxuICAgICAgICB0aGlzLmlzRXhpc3RFcnJvciA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgX3ByZWRlZmluZWQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZW5naW5lJyxcclxuICAgICAgICBlbnRyeTogJy9lZGl0b3IvZW5naW5lL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJlbmdpbmVcIixcclxuICAgICAgICBzeXN0ZW06IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Rvb2xzJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Rvb2xzL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0b29sc1wiLFxyXG4gICAgICAgIHN5c3RlbTogdHJ1ZVxyXG4gICAgfS8qLCB7XHJcbiAgICAgICAgbmFtZTogJ2dzYXBtb2QnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvZ3NhcC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwiZ3NhcFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0cm9pa2EnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdHJvaWthL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0cm9pa2FcIlxyXG4gICAgfSovLyosIHtcclxuICAgICAgICBuYW1lOiAndnVldWltb2QnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdnVldWkvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInZ1ZXVpXCJcclxuICAgIH0qLy8qLFxyXG4gICAgIHtcclxuICAgICAgICBuYW1lOiAndnVldWltb2QnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdnVldWkvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInZ1ZXVpXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3RleHRtZXNoJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3RleHRtZXNoL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0ZXh0bWVzaFwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0cm9pa2EnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdHJvaWthL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0cm9pa2FcIlxyXG4gICAgfSovXHJcbl0gOiBbXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ2VuZ2luZScsXHJcbiAgICAgICAgZW50cnk6ICcvZWRpdG9yL2VuZ2luZS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwiZW5naW5lXCIsXHJcbiAgICAgICAgc3lzdGVtOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0b29scycsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90b29scy9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidG9vbHNcIixcclxuICAgICAgICBzeXN0ZW06IHRydWVcclxuICAgIH0vKiwge1xyXG4gICAgICAgIG5hbWU6ICdnc2FwbW9kJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL2dzYXAvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImdzYXBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHJvaWthJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Ryb2lrYS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidHJvaWthXCJcclxuICAgIH0qLy8qLFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0ZXh0bWVzaCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90ZXh0bWVzaC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidGV4dG1lc2hcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHJvaWthJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Ryb2lrYS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidHJvaWthXCJcclxuICAgIH0qL1xyXG5dXHJcblxyXG4vKipcclxuICog0J/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0LzQvtC00YPQu9C4XHJcbiAqL1xyXG5jb25zdCBfbW9kdWxlcyA9IFtdXHJcbmNvbnN0IF9nbG9iYWwgPSBbXHJcbiAgICB7XHJcbiAgICAgICAgdWlkOiBgZ3NhcDovbW9kcy9nc2FwL21mLmpzYCxcclxuICAgICAgICB0aXRsZTogXCJHU0FQIEFuaW1hdGlvblwiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+VGhlIG1vZHVsZSBwcm92aWRlcyBlbGVtZW50IHRyYW5zZm9ybWF0aW9uczogbW92ZW1lbnQsIHJvdGF0aW9uLCBhbmQgc2NhbGUuPC9wPlxyXG4gICAgICAgIDxwPlVzZSBHU0FQOjwvcD5cclxuICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQXCIgdGFyZ2V0PVwiYmxhbmtcIj5odHRwczovL2dpdGh1Yi5jb20vZ3JlZW5zb2NrL0dTQVA8L2E+PC9wPmAsXHJcbiAgICAgICAgbmFtZTogJ2dzYXBtb2QnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvZ3NhcC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwiZ3NhcFwiLFxyXG4gICAgICAgIGdsb2JhbDogdHJ1ZVxyXG5cclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdWlkOiBgdHJvaWthOi9tb2RzL3Ryb2lrYS9tZi5qc2AsXHJcbiAgICAgICAgdGl0bGU6IFwiVHJvaWthIFRleHRcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPk1vZHVsZSAgcHJvdmlkZXMgaGlnaCBxdWFsaXR5IHRleHQgcmVuZGVyaW5nIGluIFRocmVlLmpzIHNjZW5lcywgdXNpbmcgc2lnbmVkIGRpc3RhbmNlIGZpZWxkcyAoU0RGKSBhbmQgYW50aWFsaWFzaW5nIHVzaW5nIHN0YW5kYXJkIGRlcml2YXRpdmVzLjwvcD5cclxuICAgICAgICA8cD5Vc2UgVHJvaWthIFRleHQgZm9yIFRocmVlLmpzOjwvcD5cclxuICAgICAgICA8cD48YSBocmVmPVwiaHR0cHM6Ly9naXRodWIuY29tL3Byb3RlY3R3aXNlL3Ryb2lrYS90cmVlL21haW4vcGFja2FnZXMvdHJvaWthLXRocmVlLXRleHRcIiB0YXJnZXQ9XCJibGFua1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9wcm90ZWN0d2lzZS90cm9pa2EvdHJlZS9tYWluL3BhY2thZ2VzL3Ryb2lrYS10aHJlZS10ZXh0PC9hPjwvcD5gLFxyXG5cclxuICAgICAgICBuYW1lOiAndHJvaWthJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Ryb2lrYS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidHJvaWthXCIsXHJcbiAgICAgICAgZ2xvYmFsOiB0cnVlXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVpZDogYHRleHRtZXNoOi9tb2RzL3RleHRtZXNoL21mLmpzYCxcclxuICAgICAgICB0aXRsZTogXCJUZXh0IE1lc2hcIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPk1vZHVsZSB1c2Ugc21hbGwgbGlicmFyeSBmb3IgYnVpbGRpbmcgVlIgdXNlciBpbnRlcmZhY2VzLiBUaGUgb2JqZWN0cyBpdCBjcmVhdGVzIGFyZSB0aHJlZS5vYmplY3QzRHMsIHVzYWJsZSBkaXJlY3RseSBpbiBhIHRocmVlLmpzIHNjZW5lIGxpa2UgYW55IG90aGVyIE9iamVjdDNELjwvcD5cclxuICAgICAgICA8cD5Vc2UgdGhyZWUtbWVzaC11aTo8L3A+XHJcbiAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9mZWxpeG1hcmlvdHRvL3RocmVlLW1lc2gtdWlcIiB0YXJnZXQ9XCJibGFua1wiPmh0dHBzOi8vZ2l0aHViLmNvbS9mZWxpeG1hcmlvdHRvL3RocmVlLW1lc2gtdWk8L2E+PC9wPmAsXHJcbiAgICAgICAgbmFtZTogJ3RleHRtZXNoJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3RleHRtZXNoL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ0ZXh0bWVzaFwiLFxyXG4gICAgICAgIGdsb2JhbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1aWQ6IGBwYXJ0aWNsZTovbW9kcy9wYXJ0aWNsZS9tZi5qc2AsXHJcbiAgICAgICAgdGl0bGU6IFwiUGFydGljbGVzXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGA8cD5QYXJ0aWNsZSBzeXN0ZW0gPC9wPmAsXHJcbiAgICAgICAgbmFtZTogJ3BhcnRpY2xlJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3BhcnRpY2xlL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJwYXJ0aWNsZVwiLFxyXG4gICAgICAgIGdsb2JhbDogdHJ1ZVxyXG4gICAgfVxyXG5dXHJcbi8qKlxyXG4gKiDQl9Cw0LPRgNGD0LbQtdC90L3Ri9C1INC80L7QtNGD0LvQuCwg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40LUg0Lgg0YHQuNGB0YLQtdC80L3Ri9C1XHJcbiAqL1xyXG5jb25zdCBfbW9kcyA9IHt9XHJcblxyXG4vKipcclxuICog0JfQsNCz0YDRg9C30LrQsCDQtNC+0LHQsNCy0LvQtdC90L3Ri9GFINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvQtdC8INC80L7QtNGD0LvQtdC5XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBsb2FkVXNlck1vZHVsZXMobW9kdWxlcykge1xyXG4gICAgYXdhaXQgcmVnaXN0ZXJSZW1vdGVzKG1vZHVsZXMpXHJcbiAgICBjb25zdCBwcm9tcyA9IG1vZHVsZXMubWFwKHAgPT4ge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICBsb2FkUmVtb3RlKGAke3AubmFtZX0vJHtwLmluZGV4fWApLnRoZW4obSA9PiB7XHJcbiAgICAgICAgICAgICAgICBfbW9kdWxlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lOiBwLm5hbWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaW5kZXg6IHAuaW5kZXgsXHJcbiAgICAgICAgICAgICAgICAgICAgZW50cnk6IHAuZW50cnksXHJcbiAgICAgICAgICAgICAgICAgICAgdGl0bGU6IHAudGl0bGUgfHwgcC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGlkOiBwLmlkLFxyXG4gICAgICAgICAgICAgICAgICAgIHVpZDogcC51aWQsXHJcbiAgICAgICAgICAgICAgICAgICAgZ2xvYmFsOiBwLmdsb2JhbCxcclxuICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogcC5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbXMpXHJcbiAgICBjb25zb2xlLmxvZyhgVXNlck1vZHVsZXMgbG9hZGVkICR7cHJvbXMubGVuZ3RofWApXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFNhdmVVc2VyTW9kdWxlKG1vZCkge1xyXG4gICAgY29uc3Qgc2F2ZURhdGEgPSB7XHJcbiAgICAgICAgaWQ6IG1vZC5lbnRyeSwgLi4ubW9kXHJcbiAgICB9XHJcbiAgICBhd2FpdCBJREIudXBzZXJ0SXRlbVByb3BlcnRpZXMoXCJtb2R1bGVzXCIsIHNhdmVEYXRhLnVpZCwgc2F2ZURhdGEpXHJcbiAgICByZXR1cm4gc2F2ZURhdGFcclxufVxyXG5cclxuLyoqXHJcbiAqIG5hbWU6ICdlbmdpbmUnLFxyXG4gICAgICAgIGVudHJ5OiAnL2VkaXRvci9lbmdpbmUvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImVuZ2luZVwiXHJcbiAqIEBwYXJhbSB7Kn0gbW9kdWxlIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gQWRkTW9kdWxlKG1vZHVsZSkge1xyXG4gICAgLy/QndC1INC80LXQvdGP0YLRjCBtb2R1bGUg0L3QsCBtb2QgLSDRgtC10YDRj9C10YLRgdGPINC+0YLQvdC+0YHQuNGC0LXQu9GM0L3Ri9C5INC/0YPRgtGMXHJcbiAgICBtb2R1bGUudWlkID0gYCR7bW9kdWxlLmluZGV4fToke21vZHVsZS5lbnRyeX1gXHJcbiAgICBpZiAoIW1vZHVsZS5uYW1lPy5sZW5ndGggfHwgIW1vZHVsZS5pbmRleD8ubGVuZ3RoIHx8ICFtb2R1bGUuZW50cnk/Lmxlbmd0aClcclxuICAgICAgICB0aHJvdyBuZXcgUmVxRXJyb3IoKVxyXG4gICAgaWYgKF9tb2R1bGVzLmZpbmQobSA9PiBtLnVpZCA9PT0gbW9kdWxlLnVpZCkpXHJcbiAgICAgICAgdGhyb3cgbmV3IEV4aXN0RXJyb3IoKVxyXG4gICAgLy/QoNC10LPQuNGB0YLRgNC40YDRg9C10Lwg0LXRgdC70Lgg0L7QvSDQvdC1INCx0YvQuyDQt9Cw0YDQtdCz0LjRgdGC0YDQuNGA0L7QstCw0L0gKNC/0YDQvtCy0LXRgNC60LAg0L/QviB1aWQg0LrQvtGC0L7RgNGL0Lkg0YHRgtCw0LLQuNGC0YHRjyDQv9GA0Lgg0LfQsNC/0LjRgdC4INCyINCR0JQpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIHJlZ2lzdGVyUmVtb3RlcyhbeyAuLi5tb2R1bGUgfV0pXHJcbiAgICAgICAgYXdhaXQgbG9hZFJlbW90ZShgJHttb2R1bGUubmFtZX0vJHttb2R1bGUuaW5kZXh9YClcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgdGhyb3cgZXJyb3JcclxuICAgIH1cclxuICAgIGNvbnN0IG0gPSBhd2FpdCBTYXZlVXNlck1vZHVsZShtb2R1bGUpXHJcbiAgICBfbW9kdWxlcy5wdXNoKG0pXHJcbiAgICByZXR1cm4gbVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBBZGRNb2R1bGVzKG1vZHVsZXMpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW9kdWxlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IG1vZERhdGEgPSBtb2R1bGVzW2ldXHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgYXdhaXQgQWRkTW9kdWxlKG1vZERhdGEpXHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29udGludWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbi8vL3B1YmxpY1xyXG5cclxuLyoqXHJcbiAqINCX0LDQs9GA0YPQt9C60LAg0L7RgdC90L7QstC90YvRhSDQvNC+0LTRg9C70LXQuSwg0L3QsNCx0L7RgCDQtNC70Y8g0LLRgdC10YUg0L/RgNC+0LXQutGC0L7QslxyXG4gKiDQuCDQv9C+0LvRjNC30L7QstCw0YLQtdC70YzRgdC60LjRhSDQvNC+0LTRg9C70LXQuSDQtNC70Y8g0Y3RgtC+0LPQviDQv9GA0L7QtdC60YLQsCBcclxuICogXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBpbml0KCkge1xyXG4gICAgY3JlYXRlSW5zdGFuY2Uoe1xyXG4gICAgICAgIG5hbWU6ICdzbGlkZXIuZWRpdG9yJyxcclxuICAgICAgICByZW1vdGVzOiBbXVxyXG4gICAgfSlcclxuXHJcbiAgICBfbW9kdWxlcy5sZW5ndGggPSAwXHJcbiAgICBhd2FpdCByZWdpc3RlclJlbW90ZXMoWy4uLl9wcmVkZWZpbmVkXSlcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKF9wcmVkZWZpbmVkLm1hcChwID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbG9hZFJlbW90ZShgJHtwLm5hbWV9LyR7cC5pbmRleH1gKS50aGVuKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgX21vZHNbcC5uYW1lXSA9IG1cclxuICAgICAgICAgICAgICAgIHJlc29sdmUoKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0pXHJcbiAgICB9KSlcclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIHNob3dMaWIoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHJlYWN0aXZlKHtcclxuICAgICAgICBzZWxlY3RlZDogbnVsbCxcclxuICAgICAgICBsaXN0OiBfbW9kdWxlcyxcclxuICAgICAgICBwcm9jZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjhweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyOHB4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdGl0bGU6IFwiUHJvamVjdCBtb2R1bGVzXCJcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJBZGRcIixcclxuICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZCB8fCBwcm9wcy5zZWxlY3RlZC51aWQgfHwgcHJvcHMucHJvY2Vzc2VkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IHRydWVcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gYXdhaXQgQWRkTW9kdWxlKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmlzUmVxRXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJOb3QgYWxsIHJlcXVpcmVkIGZpZWxkcyBhcmUgZmlsbGVkIGluXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgYWRkaW5nIG1vZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIG1vZHVsZSBoYXMgYmVlbiBsb2FkZWQgc3VjY2Vzc2Z1bGx5LlwiXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgY29uc3QgcmVnYnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIlJlZ2lzdHJhdGlvblwiLFxyXG4gICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQgJiYgIXByb3BzLnNlbGVjdGVkLnVpZCksXHJcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IHJlYWN0aXZlKHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsIGVudHJ5OiBcIlwiLCBpbmRleDogXCJcIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5jZWxidXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkKSxcclxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVidXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiUmVtb3ZlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiYWRkaXRpb25hbFwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkPy5pZCksXHJcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgY29uc3QgcHJvcFVJRCA9IGAke3Byb3BzLnNlbGVjdGVkLmluZGV4fToke3Byb3BzLnNlbGVjdGVkLmVudHJ5fWBcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSBfbW9kdWxlcy5maW5kSW5kZXgobSA9PiBgJHttLmluZGV4fToke20uZW50cnl9YCA9PT0gcHJvcFVJRClcclxuICAgICAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IG0gPSBfbW9kdWxlcy5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgICAgICAgICBBcHAudG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogYFRoZSBtb2R1bGUgaGFzIGJlZW4gcmVtb3ZlZCBhbmQgd2lsbCBub3QgYmUgbG9hZGVkIHRoZSBuZXh0IHRpbWUgeW91IHVzZSBpdC5cXG5QbGVhc2UgcmVmcmVzaCB0aGUgcGFnZSB0byB0YWtlIGVmZmVjdC5gXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgICAgICAgICBJREIuZGVsZXRlSXRlbShcIm1vZHVsZXNcIiwgbVswXS5pbmRleClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICByZWdidXR0b24sIHJlbW92ZWJ1dHRvbiwgc2F2ZUJ1dHRvbiwgY2FuY2VsYnV0dG9uLCBjbG9zZUJ1dHRvbixcclxuICAgIF0pXHJcblxyXG4gICAgbW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBgTWFuYWdpbmcgbW9kdWxlc2AsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IFwiSXRlbXNMaWJcIixcclxuICAgICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG5cclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbG90czoge1xyXG4gICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2R1bGVJdGVtXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZHVsZUVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdDogKHByb3AsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWRbcHJvcF0gPSB2YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5mdW5jdGlvbiBTaG93R2xvYmFsTGliKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgbGlzdDogX2dsb2JhbCxcclxuICAgICAgICBwcm9jZXNzZWQ6IGZhbHNlLFxyXG4gICAgICAgIGNhbmFkZDogZmFsc2UsXHJcbiAgICAgICAgc3R5bGVzOiB7XHJcbiAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgIHdpZHRoOiBcIjEyOHB4XCIsXHJcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IFwiMTI4cHhcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkFkZCB0byBwcm9qZWN0XCIsXHJcbiAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiBwcm9wcy5wcm9jZXNzZWQgfHwgIXByb3BzLnNlbGVjdGVkIHx8ICFwcm9wcy5jYW5hZGQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMucHJvY2Vzc2VkID0gdHJ1ZVxyXG4gICAgICAgICAgICBwcm9wcy5jYW5hZGQgPSBfbW9kdWxlcy5maW5kSW5kZXgobSA9PiBtLnVpZCA9PT0gcHJvcHMuc2VsZWN0ZWQudWlkKSA9PT0gLTFcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IEFkZE1vZHVsZSh7IC4uLnByb3BzLnNlbGVjdGVkIH0pXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoZXJyb3IuaXNFeGlzdEVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGVycm9yLm1lc3NhZ2VcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJFcnJvciBhZGRpbmcgbW9kdWxlXCJcclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcHJvcHMucHJvY2Vzc2VkID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgbWVzc2FnZTogXCJUaGUgbW9kdWxlIGhhcyBiZWVuIGFkZGVkIHRvIHByb2plY3QuXCJcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICBzYXZlQnV0dG9uLCBjYW5jZWxCdXR0b25cclxuICAgIF0pXHJcblxyXG4gICAgbW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBgR2xvYmFsIG1vZHVsZXNgLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkl0ZW1zTGliXCIsXHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBhc3NldCA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBhc3NldFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLmNhbmFkZCA9IF9tb2R1bGVzLmZpbmRJbmRleChtID0+IG0udWlkID09PSBwcm9wcy5zZWxlY3RlZC51aWQpID09PSAtMVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKHByb3BzLnNlbGVjdGVkLCBwcm9wcy5jYW5hZGQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsb3RzOiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIlNlYXJjaEZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2R1bGVJdGVtXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZHVsZVZpZXdcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uc1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C5INC80L7QtNGD0LvRjFxyXG4gKiBAcGFyYW0geyp9IG5hbWUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TW9kKG5hbWUpIHtcclxuICAgIHJldHVybiBfbW9kc1tuYW1lXVxyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGluaXQsIHNob3dMaWIsIGdldE1vZCwgbG9hZFVzZXJNb2R1bGVzLCBBZGRNb2R1bGVzXHJcbn0pXHJcblxyXG5BcHAuT24oXCJpbml0XCIsICgpID0+IHtcclxuICAgIEFwcC5tZW51LmhpZXJhcmh5Lmxpc3QucHVzaCh7XHJcbiAgICAgICAgaWNvbjogXCJib29rc1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiTW9kdWxlc1wiLFxyXG4gICAgICAgIGhhbmRsZXI6IHNob3dMaWJcclxuICAgIH0pXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIk1vZHVsZUVkaXRcIiwgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnQC9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0IHx8IG1vZHVsZTtcclxuICAgIH0pKVxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJNb2R1bGVJdGVtXCIsIGRlZmluZUFzeW5jQ29tcG9uZW50KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ0AvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVpdGVtLnZ1ZScpO1xyXG4gICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICB9KSlcclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiTW9kdWxlVmlld1wiLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdAL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxldmlldy52dWUnKTtcclxuICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgfSkpXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5saWJyYXJpZXMnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ0xpYnJhcmllcycsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QubGlicmFyaWVzLm1vZHVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdib29rcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ01vZHVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvd0dsb2JhbExpYigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI3YTg5NjcxZGJiMjUwYmU0OWMwOFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9