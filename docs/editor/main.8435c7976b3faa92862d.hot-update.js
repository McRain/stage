"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/app/actions.js":
/*!****************************!*\
  !*** ./src/app/actions.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _idb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/idb.js */ "./src/idb.js");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _engine_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./engine.js */ "./src/app/engine.js");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./modal.js */ "./src/app/modal.js");
/* harmony import */ var _toasts_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./toasts.js */ "./src/app/toasts.js");
/* harmony import */ var _components_inspector_actionsview_vue__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/components/inspector/actionsview.vue */ "./src/components/inspector/actionsview.vue");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__
;




const _default = []

let _manager

async function init(actionsData) {
    if (actionsData.length === 0) {
        actionsData.push(..._default)
    }
    _data.list.length = 0
    _manager = _engine_js__WEBPACK_IMPORTED_MODULE_3__["default"].ActionsManager
    const acts = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(actionsData)
    await _manager.Init(acts)
    _data.list.push(..._manager.Library)
}

/**
 * Регистрация компонента внешнего обработчика 
 * @param {*} data {component:"",name:"",type:""}
 */
function register(data) {
    console.log(`Register action ${data.type}`)
    _data.library.push(data)
}

function showLib(onSelect) {
    const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        selected: null,
        list: _data.list
    })

    const closeButton = {
        label: "Close",
        class: "secondary",
        handler: async () => {
            props.selected = null
            _modal_js__WEBPACK_IMPORTED_MODULE_4__["default"].close()
            if (onSelect) {
                onSelect()
            }
        }
    }

    const createButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        label: "Create",
        class: "primary",
        //hidden: computed(() => props.selected),
        handler: async () => {
            const src = _data.library[0]
            props.selected = {
                type: src.component,
                group: src.type,
                targets: ['*'],
                description: src.description,
                ...src.template
            }
        }
    })

    const cancelButton = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        label: "Cancel",
        class: "additional",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected || props.selected.uid),
        handler: async () => {
            props.selected = null
        }
    })

    const saveButton = {
        label: "Save",
        class: "primary",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected || props.selected.uid),
        handler: async () => {
            const lib = _data.library.find(l => l.component === props.selected.type)
            if (lib.check) {
                const allow = await lib.check(props.selected)
                if (!allow) {
                    _toasts_js__WEBPACK_IMPORTED_MODULE_5__["default"].add({
                        message: "Неверные параметры"
                    })
                    return
                }
            } else {
                Object.keys(lib.template).forEach(k => {
                    if (!(k in props.selected))
                        props.selected[k] = JSON.parse(JSON.stringify(lib.template[k]))
                })
            }

            props.selected.uid = `${props.selected.type}${Date.now()}`
            _data.list.push(props.selected)
            await save(props.selected)
            await _manager.Add(props.selected)
        }
    }

    const removeButton = {
        label: "Delete",
        class: "additional",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected || !props.selected.uid),
        handler: async () => {
            const s = _data.list.findIndex(a => a === props.selected)
            if (s >= 0) {
                _data.list.splice(s, 1)
            }
            remove(props.selected.uid)
            props.selected = null
        }
    }

    const selectButton = {
        label: "Select",
        class: "additional",
        hidden: (0,vue__WEBPACK_IMPORTED_MODULE_0__.computed)(() => !props.selected || !props.selected.uid || !onSelect),
        handler: async () => {
            onSelect(props.selected)
            _modal_js__WEBPACK_IMPORTED_MODULE_4__["default"].close()
        }
    }

    const buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([
        createButton, saveButton, selectButton, removeButton, cancelButton, closeButton
    ])

    _modal_js__WEBPACK_IMPORTED_MODULE_4__["default"].open({
        header: {
            value: onSelect ? `Select an action` : 'Action Library',
            handler: () => {
                _modal_js__WEBPACK_IMPORTED_MODULE_4__["default"].close()
            }
        },
        content: {
            component: "ItemsLib",
            props,
            events: {
                selected: (action) => {
                    if (!action.uid)
                        return
                    console.log(action)
                    props.selected = action
                }
            },
            slots: {
                item: {
                    component: "ActionItem",
                },
                edit: {
                    component: "ActionEdit",
                    props: {
                        selected: props.selected
                    },
                    events: {
                        "change:type": (a) => {
                            const src = _data.library.find(d => d.component === a)
                            props.selected = {
                                ...src.template, type: src.component, group: src.type,

                                description: src.description
                            }
                        },
                        edit: (prop, val) => {
                            const properties = prop.split('.');
                            let current = props.selected;
                            for (let i = 0; i < properties.length - 1; i++) {
                                const p = properties[i];
                                if (!current[p]) {
                                    current[p] = {};
                                }
                                current = current[p];
                            }
                            current[properties[properties.length - 1]] = val
                            save(props.selected)
                        }
                    }
                }
            }
        },
        footer: { buttons }
    })
}

async function save(action) {
    if (!action.uid)
        return
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].upsertItemProperties("actions", action.uid, JSON.parse(JSON.stringify({
        id: action.uid,
        ...action
    })))

}

/**
 * Удаляет событие из библиотеки
 * @param {*} uid 
 */
async function remove(uid) {
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem("actions", uid)
}

/**
 * Удаляет событие из хука на целевом объекте 
 * @param {*} target 
 * @param {*} actionUID 
 * @param {*} hook 
 */
async function removeFrom(target, { hook, uid }) {

}

async function exportData() {
    const actions = await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].getAllItems("actions")
    return actions
}

const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    init, register, save, showLib, exportData,
    removeFrom,

    hooks: [
        "enable.on",
        "slide.in.before", "slide.in", "slide.in.after",
        "slide.out.before", "slide.out", "slide.out.after",
        "disable.on",
        "mouse.in", "mouse.click", "mouse.out"
    ],

    /*addAction(a) {
        _data.list[a.uid] = a
    },*/
    /**
     * Список созданных действий.
     * Действие может использоваться на нескольких элементах. 
     */
    list: [],
    /**
     * Библиотека компонентов (доступных типов) 
     * например TweenPosition.
     * Созданные и используемые действия (_data.list) всегда какого то типа, 
     * поерделяющего набор доступных свойств 
     */
    library: [],
    /***
     * Группы компонентов. 
     * Все компоненты принадлежат какой то группе
     */
    get groups() {
        return _data.library.reduce((acc, item) => {
            if (!acc.includes(item.type)) {
                acc.push(item.type)
            }
            return acc;
        }, []);
    },
    get values() {
        return Object.values(_data.list)
    }
})

App.On("init", () => {
    App.menu.hierarhy.list.push({
        icon: "history",
        tooltip: "Action Library",
        handler: showLib
    })

    window.vue.component("ActionsList", _components_inspector_actionsview_vue__WEBPACK_IMPORTED_MODULE_6__["default"])

    App.inspector.addToModels(["Object3D"], [
        {
            label: "Models actions",
            readonly: true,
            content: {
                prop: "actions",
                component: "ActionsList",
                state: false
            }
        }, {
            label: "States actions",
            readonly: true,
            content: {
                prop: "actions",
                component: "ActionsList",
                state: true
            }
        }]
    )
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("955479b9a3fe2eda38bc")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44NDM1Yzc5NzZiM2ZhYTkyODYyZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBZ0M7QUFDRjtBQUNFO0FBQ2dDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBTTtBQUNyQixpQkFBaUIsNkNBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHLE1BQU07QUFDcEI7QUFDQTtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFRO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBTTtBQUMxQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQixFQUFFLFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFLO0FBQ3JCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyQkFBMkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQjtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQUc7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0EsVUFBVSwrQ0FBRztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLDZFQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsSzs7Ozs7Ozs7VUN4U2Ysc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9hY3Rpb25zLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IElEQiBmcm9tIFwiQC9pZGIuanNcIlxyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuL2VuZ2luZS5qc1wiXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcbmltcG9ydCB0b2FzdHMgZnJvbSBcIi4vdG9hc3RzLmpzXCJcclxuaW1wb3J0IEFjdGlvbnNMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvaW5zcGVjdG9yL2FjdGlvbnN2aWV3LnZ1ZVwiXHJcblxyXG5jb25zdCBfZGVmYXVsdCA9IFtdXHJcblxyXG5sZXQgX21hbmFnZXJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoYWN0aW9uc0RhdGEpIHtcclxuICAgIGlmIChhY3Rpb25zRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhY3Rpb25zRGF0YS5wdXNoKC4uLl9kZWZhdWx0KVxyXG4gICAgfVxyXG4gICAgX2RhdGEubGlzdC5sZW5ndGggPSAwXHJcbiAgICBfbWFuYWdlciA9IGVuZ2luZS5BY3Rpb25zTWFuYWdlclxyXG4gICAgY29uc3QgYWN0cyA9IHJlYWN0aXZlKGFjdGlvbnNEYXRhKVxyXG4gICAgYXdhaXQgX21hbmFnZXIuSW5pdChhY3RzKVxyXG4gICAgX2RhdGEubGlzdC5wdXNoKC4uLl9tYW5hZ2VyLkxpYnJhcnkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC60L7QvNC/0L7QvdC10L3RgtCwINCy0L3QtdGI0L3QtdCz0L4g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCBcclxuICogQHBhcmFtIHsqfSBkYXRhIHtjb21wb25lbnQ6XCJcIixuYW1lOlwiXCIsdHlwZTpcIlwifVxyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXIoZGF0YSkge1xyXG4gICAgY29uc29sZS5sb2coYFJlZ2lzdGVyIGFjdGlvbiAke2RhdGEudHlwZX1gKVxyXG4gICAgX2RhdGEubGlicmFyeS5wdXNoKGRhdGEpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIHNob3dMaWIob25TZWxlY3QpIHtcclxuICAgIGNvbnN0IHByb3BzID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIHNlbGVjdGVkOiBudWxsLFxyXG4gICAgICAgIGxpc3Q6IF9kYXRhLmxpc3RcclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2xvc2VCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gbnVsbFxyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIGlmIChvblNlbGVjdCkge1xyXG4gICAgICAgICAgICAgICAgb25TZWxlY3QoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGNyZWF0ZUJ1dHRvbiA9IHJlYWN0aXZlKHtcclxuICAgICAgICBsYWJlbDogXCJDcmVhdGVcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgLy9oaWRkZW46IGNvbXB1dGVkKCgpID0+IHByb3BzLnNlbGVjdGVkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHNyYyA9IF9kYXRhLmxpYnJhcnlbMF1cclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiBzcmMuY29tcG9uZW50LFxyXG4gICAgICAgICAgICAgICAgZ3JvdXA6IHNyYy50eXBlLFxyXG4gICAgICAgICAgICAgICAgdGFyZ2V0czogWycqJ10sXHJcbiAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3JjLmRlc2NyaXB0aW9uLFxyXG4gICAgICAgICAgICAgICAgLi4uc3JjLnRlbXBsYXRlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHJlYWN0aXZlKHtcclxuICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICBjbGFzczogXCJhZGRpdGlvbmFsXCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgcHJvcHMuc2VsZWN0ZWQudWlkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3Qgc2F2ZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJTYXZlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkIHx8IHByb3BzLnNlbGVjdGVkLnVpZCksXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBsaWIgPSBfZGF0YS5saWJyYXJ5LmZpbmQobCA9PiBsLmNvbXBvbmVudCA9PT0gcHJvcHMuc2VsZWN0ZWQudHlwZSlcclxuICAgICAgICAgICAgaWYgKGxpYi5jaGVjaykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYWxsb3cgPSBhd2FpdCBsaWIuY2hlY2socHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICBpZiAoIWFsbG93KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lc3NhZ2U6IFwi0J3QtdCy0LXRgNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0YtcIlxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaWIudGVtcGxhdGUpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoayBpbiBwcm9wcy5zZWxlY3RlZCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkW2tdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShsaWIudGVtcGxhdGVba10pKVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQudWlkID0gYCR7cHJvcHMuc2VsZWN0ZWQudHlwZX0ke0RhdGUubm93KCl9YFxyXG4gICAgICAgICAgICBfZGF0YS5saXN0LnB1c2gocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGF3YWl0IHNhdmUocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGF3YWl0IF9tYW5hZ2VyLkFkZChwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgcmVtb3ZlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcImFkZGl0aW9uYWxcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZCB8fCAhcHJvcHMuc2VsZWN0ZWQudWlkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBfZGF0YS5saXN0LmZpbmRJbmRleChhID0+IGEgPT09IHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICBpZiAocyA+PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBfZGF0YS5saXN0LnNwbGljZShzLCAxKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJlbW92ZShwcm9wcy5zZWxlY3RlZC51aWQpXHJcbiAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gbnVsbFxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBzZWxlY3RCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiU2VsZWN0XCIsXHJcbiAgICAgICAgY2xhc3M6IFwiYWRkaXRpb25hbFwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkIHx8ICFwcm9wcy5zZWxlY3RlZC51aWQgfHwgIW9uU2VsZWN0KSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIG9uU2VsZWN0KHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSByZWFjdGl2ZShbXHJcbiAgICAgICAgY3JlYXRlQnV0dG9uLCBzYXZlQnV0dG9uLCBzZWxlY3RCdXR0b24sIHJlbW92ZUJ1dHRvbiwgY2FuY2VsQnV0dG9uLCBjbG9zZUJ1dHRvblxyXG4gICAgXSlcclxuXHJcbiAgICBtb2RhbC5vcGVuKHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgdmFsdWU6IG9uU2VsZWN0ID8gYFNlbGVjdCBhbiBhY3Rpb25gIDogJ0FjdGlvbiBMaWJyYXJ5JyxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJJdGVtc0xpYlwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogKGFjdGlvbikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmICghYWN0aW9uLnVpZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coYWN0aW9uKVxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0gYWN0aW9uXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNsb3RzOiB7XHJcbiAgICAgICAgICAgICAgICBpdGVtOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkFjdGlvbkl0ZW1cIixcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBlZGl0OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkFjdGlvbkVkaXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RlZDogcHJvcHMuc2VsZWN0ZWRcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBcImNoYW5nZTp0eXBlXCI6IChhKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzcmMgPSBfZGF0YS5saWJyYXJ5LmZpbmQoZCA9PiBkLmNvbXBvbmVudCA9PT0gYSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHByb3BzLnNlbGVjdGVkID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLnNyYy50ZW1wbGF0ZSwgdHlwZTogc3JjLmNvbXBvbmVudCwgZ3JvdXA6IHNyYy50eXBlLFxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogc3JjLmRlc2NyaXB0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGVkaXQ6IChwcm9wLCB2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb3BlcnRpZXMgPSBwcm9wLnNwbGl0KCcuJyk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgY3VycmVudCA9IHByb3BzLnNlbGVjdGVkO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wZXJ0aWVzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHAgPSBwcm9wZXJ0aWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghY3VycmVudFtwXSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3BdID0ge307XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnQgPSBjdXJyZW50W3BdO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwcm9wZXJ0aWVzW3Byb3BlcnRpZXMubGVuZ3RoIC0gMV1dID0gdmFsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHsgYnV0dG9ucyB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKGFjdGlvbikge1xyXG4gICAgaWYgKCFhY3Rpb24udWlkKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwiYWN0aW9uc1wiLCBhY3Rpb24udWlkLCBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHtcclxuICAgICAgICBpZDogYWN0aW9uLnVpZCxcclxuICAgICAgICAuLi5hY3Rpb25cclxuICAgIH0pKSlcclxuXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQo9C00LDQu9GP0LXRgiDRgdC+0LHRi9GC0LjQtSDQuNC3INCx0LjQsdC70LjQvtGC0LXQutC4XHJcbiAqIEBwYXJhbSB7Kn0gdWlkIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKHVpZCkge1xyXG4gICAgYXdhaXQgSURCLmRlbGV0ZUl0ZW0oXCJhY3Rpb25zXCIsIHVpZClcclxufVxyXG5cclxuLyoqXHJcbiAqINCj0LTQsNC70Y/QtdGCINGB0L7QsdGL0YLQuNC1INC40Lcg0YXRg9C60LAg0L3QsCDRhtC10LvQtdCy0L7QvCDQvtCx0YrQtdC60YLQtSBcclxuICogQHBhcmFtIHsqfSB0YXJnZXQgXHJcbiAqIEBwYXJhbSB7Kn0gYWN0aW9uVUlEIFxyXG4gKiBAcGFyYW0geyp9IGhvb2sgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZW1vdmVGcm9tKHRhcmdldCwgeyBob29rLCB1aWQgfSkge1xyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0RGF0YSgpIHtcclxuICAgIGNvbnN0IGFjdGlvbnMgPSBhd2FpdCBJREIuZ2V0QWxsSXRlbXMoXCJhY3Rpb25zXCIpXHJcbiAgICByZXR1cm4gYWN0aW9uc1xyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGluaXQsIHJlZ2lzdGVyLCBzYXZlLCBzaG93TGliLCBleHBvcnREYXRhLFxyXG4gICAgcmVtb3ZlRnJvbSxcclxuXHJcbiAgICBob29rczogW1xyXG4gICAgICAgIFwiZW5hYmxlLm9uXCIsXHJcbiAgICAgICAgXCJzbGlkZS5pbi5iZWZvcmVcIiwgXCJzbGlkZS5pblwiLCBcInNsaWRlLmluLmFmdGVyXCIsXHJcbiAgICAgICAgXCJzbGlkZS5vdXQuYmVmb3JlXCIsIFwic2xpZGUub3V0XCIsIFwic2xpZGUub3V0LmFmdGVyXCIsXHJcbiAgICAgICAgXCJkaXNhYmxlLm9uXCIsXHJcbiAgICAgICAgXCJtb3VzZS5pblwiLCBcIm1vdXNlLmNsaWNrXCIsIFwibW91c2Uub3V0XCJcclxuICAgIF0sXHJcblxyXG4gICAgLyphZGRBY3Rpb24oYSkge1xyXG4gICAgICAgIF9kYXRhLmxpc3RbYS51aWRdID0gYVxyXG4gICAgfSwqL1xyXG4gICAgLyoqXHJcbiAgICAgKiDQodC/0LjRgdC+0Log0YHQvtC30LTQsNC90L3Ri9GFINC00LXQudGB0YLQstC40LkuXHJcbiAgICAgKiDQlNC10LnRgdGC0LLQuNC1INC80L7QttC10YIg0LjRgdC/0L7Qu9GM0LfQvtCy0LDRgtGM0YHRjyDQvdCwINC90LXRgdC60L7Qu9GM0LrQuNGFINGN0LvQtdC80LXQvdGC0LDRhS4gXHJcbiAgICAgKi9cclxuICAgIGxpc3Q6IFtdLFxyXG4gICAgLyoqXHJcbiAgICAgKiDQkdC40LHQu9C40L7RgtC10LrQsCDQutC+0LzQv9C+0L3QtdC90YLQvtCyICjQtNC+0YHRgtGD0L/QvdGL0YUg0YLQuNC/0L7QsikgXHJcbiAgICAgKiDQvdCw0L/RgNC40LzQtdGAIFR3ZWVuUG9zaXRpb24uXHJcbiAgICAgKiDQodC+0LfQtNCw0L3QvdGL0LUg0Lgg0LjRgdC/0L7Qu9GM0LfRg9C10LzRi9C1INC00LXQudGB0YLQstC40Y8gKF9kYXRhLmxpc3QpINCy0YHQtdCz0LTQsCDQutCw0LrQvtCz0L4g0YLQviDRgtC40L/QsCwgXHJcbiAgICAgKiDQv9C+0LXRgNC00LXQu9GP0Y7RidC10LPQviDQvdCw0LHQvtGAINC00L7RgdGC0YPQv9C90YvRhSDRgdCy0L7QudGB0YLQsiBcclxuICAgICAqL1xyXG4gICAgbGlicmFyeTogW10sXHJcbiAgICAvKioqXHJcbiAgICAgKiDQk9GA0YPQv9C/0Ysg0LrQvtC80L/QvtC90LXQvdGC0L7Qsi4gXHJcbiAgICAgKiDQktGB0LUg0LrQvtC80L/QvtC90LXQvdGC0Ysg0L/RgNC40L3QsNC00LvQtdC20LDRgiDQutCw0LrQvtC5INGC0L4g0LPRgNGD0L/Qv9C1XHJcbiAgICAgKi9cclxuICAgIGdldCBncm91cHMoKSB7XHJcbiAgICAgICAgcmV0dXJuIF9kYXRhLmxpYnJhcnkucmVkdWNlKChhY2MsIGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgaWYgKCFhY2MuaW5jbHVkZXMoaXRlbS50eXBlKSkge1xyXG4gICAgICAgICAgICAgICAgYWNjLnB1c2goaXRlbS50eXBlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiBhY2M7XHJcbiAgICAgICAgfSwgW10pO1xyXG4gICAgfSxcclxuICAgIGdldCB2YWx1ZXMoKSB7XHJcbiAgICAgICAgcmV0dXJuIE9iamVjdC52YWx1ZXMoX2RhdGEubGlzdClcclxuICAgIH1cclxufSlcclxuXHJcbkFwcC5PbihcImluaXRcIiwgKCkgPT4ge1xyXG4gICAgQXBwLm1lbnUuaGllcmFyaHkubGlzdC5wdXNoKHtcclxuICAgICAgICBpY29uOiBcImhpc3RvcnlcIixcclxuICAgICAgICB0b29sdGlwOiBcIkFjdGlvbiBMaWJyYXJ5XCIsXHJcbiAgICAgICAgaGFuZGxlcjogc2hvd0xpYlxyXG4gICAgfSlcclxuXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkFjdGlvbnNMaXN0XCIsIEFjdGlvbnNMaXN0KVxyXG5cclxuICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiT2JqZWN0M0RcIl0sIFtcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIk1vZGVscyBhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcImFjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJBY3Rpb25zTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0YXRlcyBhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcImFjdGlvbnNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJBY3Rpb25zTGlzdFwiLFxyXG4gICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1dXHJcbiAgICApXHJcbn0pXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjk1NTQ3OWI5YTNmZTJlZGEzOGJjXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjFcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=