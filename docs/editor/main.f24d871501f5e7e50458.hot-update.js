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
    }/*,
    {
        name: 'tools',
        entry: '/mods/tools/mf.js',
        index: "tools",
        system: true
    }*//*, {
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
                    console.log(props.selected, props.canad)
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
/******/ 	__webpack_require__.h = () => ("4f2f47bd90c8c30fec7e")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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O0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxLOzs7Ozs7OztVQzNnQmYsc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9tb2R1bGVzLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCByZWYsIGRlZmluZUFzeW5jQ29tcG9uZW50LCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IHsgY3JlYXRlSW5zdGFuY2UsIGxvYWRSZW1vdGUsIHJlZ2lzdGVyUmVtb3RlcyB9IGZyb20gJ0Btb2R1bGUtZmVkZXJhdGlvbi9ydW50aW1lJztcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuXHJcbmltcG9ydCBJREIgZnJvbSBcIi4uL2lkYi5qc1wiXHJcbmltcG9ydCB0b2FzdHMgZnJvbSBcIi4vdG9hc3RzLmpzXCJcclxuaW1wb3J0IG1vZGFsIGZyb20gXCIuL21vZGFsLmpzXCJcclxuXHJcbmNsYXNzIFJlcUVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ05vdCBhbGwgcmVxdWlyZWQgcGFyYW1ldGVycyBhcmUgc3BlY2lmaWVkLicpXHJcbiAgICAgICAgdGhpcy5pc1JlcUVycm9yID0gdHJ1ZVxyXG4gICAgfVxyXG59XHJcblxyXG5jbGFzcyBFeGlzdEVycm9yIGV4dGVuZHMgRXJyb3Ige1xyXG4gICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgc3VwZXIoJ1RoaXMgbW9kdWxlIGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQuJylcclxuICAgICAgICB0aGlzLmlzRXhpc3RFcnJvciA9IHRydWVcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgX3ByZWRlZmluZWQgPSBwcm9jZXNzLmVudi5OT0RFX0VOViA9PT0gJ2RldmVsb3BtZW50JyA/IFtcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAnZW5naW5lJyxcclxuICAgICAgICBlbnRyeTogJy9lZGl0b3IvZW5naW5lL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJlbmdpbmVcIixcclxuICAgICAgICBzeXN0ZW06IHRydWVcclxuICAgIH0vKixcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndG9vbHMnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdG9vbHMvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRvb2xzXCIsXHJcbiAgICAgICAgc3lzdGVtOiB0cnVlXHJcbiAgICB9Ki8vKiwge1xyXG4gICAgICAgIG5hbWU6ICdnc2FwbW9kJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL2dzYXAvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImdzYXBcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHJvaWthJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Ryb2lrYS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidHJvaWthXCJcclxuICAgIH0qLy8qLCB7XHJcbiAgICAgICAgbmFtZTogJ3Z1ZXVpbW9kJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Z1ZXVpL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ2dWV1aVwiXHJcbiAgICB9Ki8vKixcclxuICAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Z1ZXVpbW9kJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Z1ZXVpL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJ2dWV1aVwiXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICd0ZXh0bWVzaCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90ZXh0bWVzaC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidGV4dG1lc2hcIlxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndHJvaWthJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL3Ryb2lrYS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidHJvaWthXCJcclxuICAgIH0qL1xyXG5dIDogW1xyXG4gICAge1xyXG4gICAgICAgIG5hbWU6ICdlbmdpbmUnLFxyXG4gICAgICAgIGVudHJ5OiAnL2VkaXRvci9lbmdpbmUvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImVuZ2luZVwiLFxyXG4gICAgICAgIHN5c3RlbTogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndG9vbHMnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdG9vbHMvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRvb2xzXCIsXHJcbiAgICAgICAgc3lzdGVtOiB0cnVlXHJcbiAgICB9LyosIHtcclxuICAgICAgICBuYW1lOiAnZ3NhcG1vZCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy9nc2FwL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJnc2FwXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Ryb2lrYScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90cm9pa2EvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRyb2lrYVwiXHJcbiAgICB9Ki8vKixcclxuICAgIHtcclxuICAgICAgICBuYW1lOiAndGV4dG1lc2gnLFxyXG4gICAgICAgIGVudHJ5OiAnL21vZHMvdGV4dG1lc2gvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRleHRtZXNoXCJcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgbmFtZTogJ3Ryb2lrYScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90cm9pa2EvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRyb2lrYVwiXHJcbiAgICB9Ki9cclxuXVxyXG5cclxuLyoqXHJcbiAqINCf0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC80L7QtNGD0LvQuFxyXG4gKi9cclxuY29uc3QgX21vZHVsZXMgPSBbXVxyXG5jb25zdCBfZ2xvYmFsID0gW1xyXG4gICAge1xyXG4gICAgICAgIHVpZDogYGdzYXA6L21vZHMvZ3NhcC9tZi5qc2AsXHJcbiAgICAgICAgdGl0bGU6IFwiR1NBUCBBbmltYXRpb25cIixcclxuICAgICAgICBkZXNjcmlwdGlvbjogYDxwPlRoZSBtb2R1bGUgcHJvdmlkZXMgZWxlbWVudCB0cmFuc2Zvcm1hdGlvbnM6IG1vdmVtZW50LCByb3RhdGlvbiwgYW5kIHNjYWxlLjwvcD5cclxuICAgICAgICA8cD5Vc2UgR1NBUDo8L3A+XHJcbiAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9ncmVlbnNvY2svR1NBUFwiIHRhcmdldD1cImJsYW5rXCI+aHR0cHM6Ly9naXRodWIuY29tL2dyZWVuc29jay9HU0FQPC9hPjwvcD5gLFxyXG4gICAgICAgIG5hbWU6ICdnc2FwbW9kJyxcclxuICAgICAgICBlbnRyeTogJy9tb2RzL2dzYXAvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcImdzYXBcIixcclxuICAgICAgICBnbG9iYWw6IHRydWVcclxuXHJcbiAgICB9LFxyXG4gICAge1xyXG4gICAgICAgIHVpZDogYHRyb2lrYTovbW9kcy90cm9pa2EvbWYuanNgLFxyXG4gICAgICAgIHRpdGxlOiBcIlRyb2lrYSBUZXh0XCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGA8cD5Nb2R1bGUgIHByb3ZpZGVzIGhpZ2ggcXVhbGl0eSB0ZXh0IHJlbmRlcmluZyBpbiBUaHJlZS5qcyBzY2VuZXMsIHVzaW5nIHNpZ25lZCBkaXN0YW5jZSBmaWVsZHMgKFNERikgYW5kIGFudGlhbGlhc2luZyB1c2luZyBzdGFuZGFyZCBkZXJpdmF0aXZlcy48L3A+XHJcbiAgICAgICAgPHA+VXNlIFRyb2lrYSBUZXh0IGZvciBUaHJlZS5qczo8L3A+XHJcbiAgICAgICAgPHA+PGEgaHJlZj1cImh0dHBzOi8vZ2l0aHViLmNvbS9wcm90ZWN0d2lzZS90cm9pa2EvdHJlZS9tYWluL3BhY2thZ2VzL3Ryb2lrYS10aHJlZS10ZXh0XCIgdGFyZ2V0PVwiYmxhbmtcIj5odHRwczovL2dpdGh1Yi5jb20vcHJvdGVjdHdpc2UvdHJvaWthL3RyZWUvbWFpbi9wYWNrYWdlcy90cm9pa2EtdGhyZWUtdGV4dDwvYT48L3A+YCxcclxuXHJcbiAgICAgICAgbmFtZTogJ3Ryb2lrYScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90cm9pa2EvbWYuanMnLFxyXG4gICAgICAgIGluZGV4OiBcInRyb2lrYVwiLFxyXG4gICAgICAgIGdsb2JhbDogdHJ1ZVxyXG4gICAgfSxcclxuICAgIHtcclxuICAgICAgICB1aWQ6IGB0ZXh0bWVzaDovbW9kcy90ZXh0bWVzaC9tZi5qc2AsXHJcbiAgICAgICAgdGl0bGU6IFwiVGV4dCBNZXNoXCIsXHJcbiAgICAgICAgZGVzY3JpcHRpb246IGA8cD5Nb2R1bGUgdXNlIHNtYWxsIGxpYnJhcnkgZm9yIGJ1aWxkaW5nIFZSIHVzZXIgaW50ZXJmYWNlcy4gVGhlIG9iamVjdHMgaXQgY3JlYXRlcyBhcmUgdGhyZWUub2JqZWN0M0RzLCB1c2FibGUgZGlyZWN0bHkgaW4gYSB0aHJlZS5qcyBzY2VuZSBsaWtlIGFueSBvdGhlciBPYmplY3QzRC48L3A+XHJcbiAgICAgICAgPHA+VXNlIHRocmVlLW1lc2gtdWk6PC9wPlxyXG4gICAgICAgIDxwPjxhIGhyZWY9XCJodHRwczovL2dpdGh1Yi5jb20vZmVsaXhtYXJpb3R0by90aHJlZS1tZXNoLXVpXCIgdGFyZ2V0PVwiYmxhbmtcIj5odHRwczovL2dpdGh1Yi5jb20vZmVsaXhtYXJpb3R0by90aHJlZS1tZXNoLXVpPC9hPjwvcD5gLFxyXG4gICAgICAgIG5hbWU6ICd0ZXh0bWVzaCcsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy90ZXh0bWVzaC9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwidGV4dG1lc2hcIixcclxuICAgICAgICBnbG9iYWw6IHRydWVcclxuICAgIH0sXHJcbiAgICB7XHJcbiAgICAgICAgdWlkOiBgcGFydGljbGU6L21vZHMvcGFydGljbGUvbWYuanNgLFxyXG4gICAgICAgIHRpdGxlOiBcIlBhcnRpY2xlc1wiLFxyXG4gICAgICAgIGRlc2NyaXB0aW9uOiBgPHA+UGFydGljbGUgc3lzdGVtIDwvcD5gLFxyXG4gICAgICAgIG5hbWU6ICdwYXJ0aWNsZScsXHJcbiAgICAgICAgZW50cnk6ICcvbW9kcy9wYXJ0aWNsZS9tZi5qcycsXHJcbiAgICAgICAgaW5kZXg6IFwicGFydGljbGVcIixcclxuICAgICAgICBnbG9iYWw6IHRydWVcclxuICAgIH1cclxuXVxyXG4vKipcclxuICog0JfQsNCz0YDRg9C20LXQvdC90YvQtSDQvNC+0LTRg9C70LgsINC/0L7Qu9GM0LfQvtCy0LDRgtC10LvRjNGB0LrQuNC1INC4INGB0LjRgdGC0LXQvNC90YvQtVxyXG4gKi9cclxuY29uc3QgX21vZHMgPSB7fVxyXG5cclxuLyoqXHJcbiAqINCX0LDQs9GA0YPQt9C60LAg0LTQvtCx0LDQstC70LXQvdC90YvRhSDQv9C+0LvRjNC30L7QstCw0YLQtdC70LXQvCDQvNC+0LTRg9C70LXQuVxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gbG9hZFVzZXJNb2R1bGVzKG1vZHVsZXMpIHtcclxuICAgIGF3YWl0IHJlZ2lzdGVyUmVtb3Rlcyhtb2R1bGVzKVxyXG4gICAgY29uc3QgcHJvbXMgPSBtb2R1bGVzLm1hcChwID0+IHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgbG9hZFJlbW90ZShgJHtwLm5hbWV9LyR7cC5pbmRleH1gKS50aGVuKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgX21vZHVsZXMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgbmFtZTogcC5uYW1lLFxyXG4gICAgICAgICAgICAgICAgICAgIGluZGV4OiBwLmluZGV4LFxyXG4gICAgICAgICAgICAgICAgICAgIGVudHJ5OiBwLmVudHJ5LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpdGxlOiBwLnRpdGxlIHx8IHAubmFtZSxcclxuICAgICAgICAgICAgICAgICAgICBpZDogcC5pZCxcclxuICAgICAgICAgICAgICAgICAgICB1aWQ6IHAudWlkLFxyXG4gICAgICAgICAgICAgICAgICAgIGdsb2JhbDogcC5nbG9iYWwsXHJcbiAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHAuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxuICAgIGF3YWl0IFByb21pc2UuYWxsKHByb21zKVxyXG4gICAgY29uc29sZS5sb2coYFVzZXJNb2R1bGVzIGxvYWRlZCAke3Byb21zLmxlbmd0aH1gKVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBTYXZlVXNlck1vZHVsZShtb2QpIHtcclxuICAgIGNvbnN0IHNhdmVEYXRhID0ge1xyXG4gICAgICAgIGlkOiBtb2QuZW50cnksIC4uLm1vZFxyXG4gICAgfVxyXG4gICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwibW9kdWxlc1wiLCBzYXZlRGF0YS51aWQsIHNhdmVEYXRhKVxyXG4gICAgcmV0dXJuIHNhdmVEYXRhXHJcbn1cclxuXHJcbi8qKlxyXG4gKiBuYW1lOiAnZW5naW5lJyxcclxuICAgICAgICBlbnRyeTogJy9lZGl0b3IvZW5naW5lL21mLmpzJyxcclxuICAgICAgICBpbmRleDogXCJlbmdpbmVcIlxyXG4gKiBAcGFyYW0geyp9IG1vZHVsZSBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIEFkZE1vZHVsZShtb2R1bGUpIHtcclxuICAgIC8v0J3QtSDQvNC10L3Rj9GC0YwgbW9kdWxlINC90LAgbW9kIC0g0YLQtdGA0Y/QtdGC0YHRjyDQvtGC0L3QvtGB0LjRgtC10LvRjNC90YvQuSDQv9GD0YLRjFxyXG4gICAgbW9kdWxlLnVpZCA9IGAke21vZHVsZS5pbmRleH06JHttb2R1bGUuZW50cnl9YFxyXG4gICAgaWYgKCFtb2R1bGUubmFtZT8ubGVuZ3RoIHx8ICFtb2R1bGUuaW5kZXg/Lmxlbmd0aCB8fCAhbW9kdWxlLmVudHJ5Py5sZW5ndGgpXHJcbiAgICAgICAgdGhyb3cgbmV3IFJlcUVycm9yKClcclxuICAgIGlmIChfbW9kdWxlcy5maW5kKG0gPT4gbS51aWQgPT09IG1vZHVsZS51aWQpKVxyXG4gICAgICAgIHRocm93IG5ldyBFeGlzdEVycm9yKClcclxuICAgIC8v0KDQtdCz0LjRgdGC0YDQuNGA0YPQtdC8INC10YHQu9C4INC+0L0g0L3QtSDQsdGL0Lsg0LfQsNGA0LXQs9C40YHRgtGA0LjRgNC+0LLQsNC9ICjQv9GA0L7QstC10YDQutCwINC/0L4gdWlkINC60L7RgtC+0YDRi9C5INGB0YLQsNCy0LjRgtGB0Y8g0L/RgNC4INC30LDQv9C40YHQuCDQsiDQkdCUKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICByZWdpc3RlclJlbW90ZXMoW3sgLi4ubW9kdWxlIH1dKVxyXG4gICAgICAgIGF3YWl0IGxvYWRSZW1vdGUoYCR7bW9kdWxlLm5hbWV9LyR7bW9kdWxlLmluZGV4fWApXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIHRocm93IGVycm9yXHJcbiAgICB9XHJcbiAgICBjb25zdCBtID0gYXdhaXQgU2F2ZVVzZXJNb2R1bGUobW9kdWxlKVxyXG4gICAgX21vZHVsZXMucHVzaChtKVxyXG4gICAgcmV0dXJuIG1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gQWRkTW9kdWxlcyhtb2R1bGVzKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vZHVsZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBtb2REYXRhID0gbW9kdWxlc1tpXVxyXG4gICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgIGF3YWl0IEFkZE1vZHVsZShtb2REYXRhKVxyXG4gICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4vLy9wdWJsaWNcclxuXHJcbi8qKlxyXG4gKiDQl9Cw0LPRgNGD0LfQutCwINC+0YHQvdC+0LLQvdGL0YUg0LzQvtC00YPQu9C10LksINC90LDQsdC+0YAg0LTQu9GPINCy0YHQtdGFINC/0YDQvtC10LrRgtC+0LJcclxuICog0Lgg0L/QvtC70YzQt9C+0LLQsNGC0LXQu9GM0YHQutC40YUg0LzQvtC00YPQu9C10Lkg0LTQu9GPINGN0YLQvtCz0L4g0L/RgNC+0LXQutGC0LAgXHJcbiAqIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gaW5pdCgpIHtcclxuICAgIGNyZWF0ZUluc3RhbmNlKHtcclxuICAgICAgICBuYW1lOiAnc2xpZGVyLmVkaXRvcicsXHJcbiAgICAgICAgcmVtb3RlczogW11cclxuICAgIH0pXHJcblxyXG4gICAgX21vZHVsZXMubGVuZ3RoID0gMFxyXG4gICAgYXdhaXQgcmVnaXN0ZXJSZW1vdGVzKFsuLi5fcHJlZGVmaW5lZF0pXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChfcHJlZGVmaW5lZC5tYXAocCA9PiB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIGxvYWRSZW1vdGUoYCR7cC5uYW1lfS8ke3AuaW5kZXh9YCkudGhlbihtID0+IHtcclxuICAgICAgICAgICAgICAgIF9tb2RzW3AubmFtZV0gPSBtXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9KVxyXG4gICAgfSkpXHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBzaG93TGliKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgbGlzdDogX21vZHVsZXMsXHJcbiAgICAgICAgcHJvY2Vzc2VkOiBmYWxzZSxcclxuICAgICAgICBzdHlsZXM6IHtcclxuICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgd2lkdGg6IFwiMTI4cHhcIixcclxuICAgICAgICAgICAgICAgIGhlaWdodDogXCIxMjhweFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHRpdGxlOiBcIlByb2plY3QgbW9kdWxlc1wiXHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IHNhdmVCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQWRkXCIsXHJcbiAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgcHJvcHMuc2VsZWN0ZWQudWlkIHx8IHByb3BzLnByb2Nlc3NlZCksXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5wcm9jZXNzZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IGF3YWl0IEFkZE1vZHVsZShwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGlmIChlcnJvci5pc1JlcUVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiTm90IGFsbCByZXF1aXJlZCBmaWVsZHMgYXJlIGZpbGxlZCBpblwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIkVycm9yIGFkZGluZyBtb2R1bGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBwcm9wcy5wcm9jZXNzZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICBtZXNzYWdlOiBcIlRoZSBtb2R1bGUgaGFzIGJlZW4gbG9hZGVkIHN1Y2Nlc3NmdWxseS5cIlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IHJlZ2J1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJSZWdpc3RyYXRpb25cIixcclxuICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkICYmICFwcm9wcy5zZWxlY3RlZC51aWQpLFxyXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgICAgICAgICBuYW1lOiBcIlwiLCBlbnRyeTogXCJcIiwgaW5kZXg6IFwiXCJcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2FuY2VsYnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZCksXHJcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IG51bGxcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlYnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIlJlbW92ZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcImFkZGl0aW9uYWxcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZD8uaWQpLFxyXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BVSUQgPSBgJHtwcm9wcy5zZWxlY3RlZC5pbmRleH06JHtwcm9wcy5zZWxlY3RlZC5lbnRyeX1gXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gX21vZHVsZXMuZmluZEluZGV4KG0gPT4gYCR7bS5pbmRleH06JHttLmVudHJ5fWAgPT09IHByb3BVSUQpXHJcbiAgICAgICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBtID0gX21vZHVsZXMuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgICAgICAgICAgQXBwLnRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IGBUaGUgbW9kdWxlIGhhcyBiZWVuIHJlbW92ZWQgYW5kIHdpbGwgbm90IGJlIGxvYWRlZCB0aGUgbmV4dCB0aW1lIHlvdSB1c2UgaXQuXFxuUGxlYXNlIHJlZnJlc2ggdGhlIHBhZ2UgdG8gdGFrZSBlZmZlY3QuYFxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gbnVsbFxyXG4gICAgICAgICAgICAgICAgSURCLmRlbGV0ZUl0ZW0oXCJtb2R1bGVzXCIsIG1bMF0uaW5kZXgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSByZWFjdGl2ZShbXHJcbiAgICAgICAgcmVnYnV0dG9uLCByZW1vdmVidXR0b24sIHNhdmVCdXR0b24sIGNhbmNlbGJ1dHRvbiwgY2xvc2VCdXR0b24sXHJcbiAgICBdKVxyXG5cclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYE1hbmFnaW5nIG1vZHVsZXNgLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkl0ZW1zTGliXCIsXHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuXHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2xvdHM6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiTW9kdWxlSXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWRpdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2R1bGVFZGl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IChwcm9wLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkW3Byb3BdID0gdmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuZnVuY3Rpb24gU2hvd0dsb2JhbExpYigpIHtcclxuICAgIGNvbnN0IHByb3BzID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgICAgIGxpc3Q6IF9nbG9iYWwsXHJcbiAgICAgICAgcHJvY2Vzc2VkOiBmYWxzZSxcclxuICAgICAgICBjYW5hZGQ6IGZhbHNlLFxyXG4gICAgICAgIHN0eWxlczoge1xyXG4gICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICB3aWR0aDogXCIxMjhweFwiLFxyXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiBcIjEyOHB4XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJBZGQgdG8gcHJvamVjdFwiLFxyXG4gICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gcHJvcHMucHJvY2Vzc2VkIHx8ICFwcm9wcy5zZWxlY3RlZCB8fCAhcHJvcHMuY2FuYWRkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IHRydWVcclxuICAgICAgICAgICAgcHJvcHMuY2FuYWRkID0gX21vZHVsZXMuZmluZEluZGV4KG0gPT4gbS51aWQgPT09IHByb3BzLnNlbGVjdGVkLnVpZCkgPT09IC0xXHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBBZGRNb2R1bGUoeyAuLi5wcm9wcy5zZWxlY3RlZCB9KVxyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgaWYgKGVycm9yLmlzRXhpc3RFcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXNzYWdlOiBlcnJvci5tZXNzYWdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiRXJyb3IgYWRkaW5nIG1vZHVsZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHByb3BzLnByb2Nlc3NlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwiVGhlIG1vZHVsZSBoYXMgYmVlbiBhZGRlZCB0byBwcm9qZWN0LlwiXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSByZWFjdGl2ZShbXHJcbiAgICAgICAgc2F2ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uXHJcbiAgICBdKVxyXG5cclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYEdsb2JhbCBtb2R1bGVzYCxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJJdGVtc0xpYlwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogYXNzZXQgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gYXNzZXRcclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5jYW5hZGQgPSBfbW9kdWxlcy5maW5kSW5kZXgobSA9PiBtLnVpZCA9PT0gcHJvcHMuc2VsZWN0ZWQudWlkKSA9PT0gLTFcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhwcm9wcy5zZWxlY3RlZCwgcHJvcHMuY2FuYWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsb3RzOiB7XHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIlNlYXJjaEZpbHRlclwiXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2R1bGVJdGVtXCJcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZHVsZVZpZXdcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wc1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uc1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQktC+0LfQstGA0LDRidCw0LXRgiDQt9Cw0LPRgNGD0LbQtdC90L3Ri9C5INC80L7QtNGD0LvRjFxyXG4gKiBAcGFyYW0geyp9IG5hbWUgXHJcbiAqIEByZXR1cm5zIFxyXG4gKi9cclxuZnVuY3Rpb24gZ2V0TW9kKG5hbWUpIHtcclxuICAgIHJldHVybiBfbW9kc1tuYW1lXVxyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGluaXQsIHNob3dMaWIsIGdldE1vZCwgbG9hZFVzZXJNb2R1bGVzLCBBZGRNb2R1bGVzXHJcbn0pXHJcblxyXG5BcHAuT24oXCJpbml0XCIsICgpID0+IHtcclxuICAgIEFwcC5tZW51LmhpZXJhcmh5Lmxpc3QucHVzaCh7XHJcbiAgICAgICAgaWNvbjogXCJib29rc1wiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiTW9kdWxlc1wiLFxyXG4gICAgICAgIGhhbmRsZXI6IHNob3dMaWJcclxuICAgIH0pXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIk1vZHVsZUVkaXRcIiwgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnQC9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlJyk7XHJcbiAgICAgICAgcmV0dXJuIG1vZHVsZS5kZWZhdWx0IHx8IG1vZHVsZTtcclxuICAgIH0pKVxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJNb2R1bGVJdGVtXCIsIGRlZmluZUFzeW5jQ29tcG9uZW50KGFzeW5jICgpID0+IHtcclxuICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJ0AvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVpdGVtLnZ1ZScpO1xyXG4gICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICB9KSlcclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiTW9kdWxlVmlld1wiLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgY29uc3QgbW9kdWxlID0gYXdhaXQgaW1wb3J0KCdAL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxldmlldy52dWUnKTtcclxuICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgfSkpXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5saWJyYXJpZXMnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ0xpYnJhcmllcycsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QubGlicmFyaWVzLm1vZHVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdib29rcycsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ01vZHVsZXMnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgU2hvd0dsb2JhbExpYigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZjJmNDdiZDkwYzhjMzBmZWM3ZVwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9