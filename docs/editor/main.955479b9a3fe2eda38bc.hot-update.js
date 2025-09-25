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
    //_data.list.length = 0
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
/******/ 	__webpack_require__.h = () => ("521c5d0ca58ee9b72fa5")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi45NTU0NzliOWEzZmUyZWRhMzhiYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBZ0M7QUFDRjtBQUNFO0FBQ2dDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBTTtBQUNyQixpQkFBaUIsNkNBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHLE1BQU07QUFDcEI7QUFDQTtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFRO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBTTtBQUMxQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQixFQUFFLFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFLO0FBQ3JCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBLDRDQUE0QywyQkFBMkI7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULGtCQUFrQjtBQUNsQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0NBQUc7QUFDYjtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXLEdBQUc7QUFDZDtBQUNBO0FBQ0EsVUFBVSwrQ0FBRztBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2QsV0FBVyxHQUFHO0FBQ2Q7QUFDQSxvQ0FBb0MsV0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQiwrQ0FBRztBQUM3QjtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0Esd0NBQXdDLDZFQUFXO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0EsQ0FBQztBQUNEO0FBQ0EsaUVBQWUsSzs7Ozs7Ozs7VUN4U2Ysc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9hY3Rpb25zLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IElEQiBmcm9tIFwiQC9pZGIuanNcIlxyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgZW5naW5lIGZyb20gXCIuL2VuZ2luZS5qc1wiXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcbmltcG9ydCB0b2FzdHMgZnJvbSBcIi4vdG9hc3RzLmpzXCJcclxuaW1wb3J0IEFjdGlvbnNMaXN0IGZyb20gXCJAL2NvbXBvbmVudHMvaW5zcGVjdG9yL2FjdGlvbnN2aWV3LnZ1ZVwiXHJcblxyXG5jb25zdCBfZGVmYXVsdCA9IFtdXHJcblxyXG5sZXQgX21hbmFnZXJcclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoYWN0aW9uc0RhdGEpIHtcclxuICAgIGlmIChhY3Rpb25zRGF0YS5sZW5ndGggPT09IDApIHtcclxuICAgICAgICBhY3Rpb25zRGF0YS5wdXNoKC4uLl9kZWZhdWx0KVxyXG4gICAgfVxyXG4gICAgLy9fZGF0YS5saXN0Lmxlbmd0aCA9IDBcclxuICAgIF9tYW5hZ2VyID0gZW5naW5lLkFjdGlvbnNNYW5hZ2VyXHJcbiAgICBjb25zdCBhY3RzID0gcmVhY3RpdmUoYWN0aW9uc0RhdGEpXHJcbiAgICBhd2FpdCBfbWFuYWdlci5Jbml0KGFjdHMpXHJcbiAgICBfZGF0YS5saXN0LnB1c2goLi4uX21hbmFnZXIuTGlicmFyeSlcclxufVxyXG5cclxuLyoqXHJcbiAqINCg0LXQs9C40YHRgtGA0LDRhtC40Y8g0LrQvtC80L/QvtC90LXQvdGC0LAg0LLQvdC10YjQvdC10LPQviDQvtCx0YDQsNCx0L7RgtGH0LjQutCwIFxyXG4gKiBAcGFyYW0geyp9IGRhdGEge2NvbXBvbmVudDpcIlwiLG5hbWU6XCJcIix0eXBlOlwiXCJ9XHJcbiAqL1xyXG5mdW5jdGlvbiByZWdpc3RlcihkYXRhKSB7XHJcbiAgICBjb25zb2xlLmxvZyhgUmVnaXN0ZXIgYWN0aW9uICR7ZGF0YS50eXBlfWApXHJcbiAgICBfZGF0YS5saWJyYXJ5LnB1c2goZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xpYihvblNlbGVjdCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgbGlzdDogX2RhdGEubGlzdFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgaWYgKG9uU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIGxhYmVsOiBcIkNyZWF0ZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAvL2hpZGRlbjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3JjID0gX2RhdGEubGlicmFyeVswXVxyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHNyYy5jb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBncm91cDogc3JjLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbJyonXSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzcmMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAuLi5zcmMudGVtcGxhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgIGNsYXNzOiBcImFkZGl0aW9uYWxcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZCB8fCBwcm9wcy5zZWxlY3RlZC51aWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIlNhdmVcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgcHJvcHMuc2VsZWN0ZWQudWlkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpYiA9IF9kYXRhLmxpYnJhcnkuZmluZChsID0+IGwuY29tcG9uZW50ID09PSBwcm9wcy5zZWxlY3RlZC50eXBlKVxyXG4gICAgICAgICAgICBpZiAobGliLmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxvdyA9IGF3YWl0IGxpYi5jaGVjayhwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIGlmICghYWxsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLQndC10LLQtdGA0L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRi1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpYi50ZW1wbGF0ZSkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShrIGluIHByb3BzLnNlbGVjdGVkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWRba10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxpYi50ZW1wbGF0ZVtrXSkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZC51aWQgPSBgJHtwcm9wcy5zZWxlY3RlZC50eXBlfSR7RGF0ZS5ub3coKX1gXHJcbiAgICAgICAgICAgIF9kYXRhLmxpc3QucHVzaChwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgYXdhaXQgc2F2ZShwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgYXdhaXQgX21hbmFnZXIuQWRkKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiYWRkaXRpb25hbFwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkIHx8ICFwcm9wcy5zZWxlY3RlZC51aWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IF9kYXRhLmxpc3QuZmluZEluZGV4KGEgPT4gYSA9PT0gcHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGlmIChzID49IDApIHtcclxuICAgICAgICAgICAgICAgIF9kYXRhLmxpc3Quc3BsaWNlKHMsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlKHByb3BzLnNlbGVjdGVkLnVpZClcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJTZWxlY3RcIixcclxuICAgICAgICBjbGFzczogXCJhZGRpdGlvbmFsXCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgIXByb3BzLnNlbGVjdGVkLnVpZCB8fCAhb25TZWxlY3QpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgb25TZWxlY3QocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICBjcmVhdGVCdXR0b24sIHNhdmVCdXR0b24sIHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uLCBjYW5jZWxCdXR0b24sIGNsb3NlQnV0dG9uXHJcbiAgICBdKVxyXG5cclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogb25TZWxlY3QgPyBgU2VsZWN0IGFuIGFjdGlvbmAgOiAnQWN0aW9uIExpYnJhcnknLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkl0ZW1zTGliXCIsXHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24udWlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhhY3Rpb24pXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBhY3Rpb25cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2xvdHM6IHtcclxuICAgICAgICAgICAgICAgIGl0ZW06IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQWN0aW9uSXRlbVwiLFxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGVkaXQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQWN0aW9uRWRpdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkOiBwcm9wcy5zZWxlY3RlZFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiY2hhbmdlOnR5cGVcIjogKGEpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNyYyA9IF9kYXRhLmxpYnJhcnkuZmluZChkID0+IGQuY29tcG9uZW50ID09PSBhKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uc3JjLnRlbXBsYXRlLCB0eXBlOiBzcmMuY29tcG9uZW50LCBncm91cDogc3JjLnR5cGUsXHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzcmMuZGVzY3JpcHRpb25cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZWRpdDogKHByb3AsIHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcHJvcGVydGllcyA9IHByb3Auc3BsaXQoJy4nKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCBjdXJyZW50ID0gcHJvcHMuc2VsZWN0ZWQ7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BlcnRpZXMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgcCA9IHByb3BlcnRpZXNbaV07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjdXJyZW50W3BdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcF0gPSB7fTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudCA9IGN1cnJlbnRbcF07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50W3Byb3BlcnRpZXNbcHJvcGVydGllcy5sZW5ndGggLSAxXV0gPSB2YWxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmUocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3RlcjogeyBidXR0b25zIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmUoYWN0aW9uKSB7XHJcbiAgICBpZiAoIWFjdGlvbi51aWQpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICBhd2FpdCBJREIudXBzZXJ0SXRlbVByb3BlcnRpZXMoXCJhY3Rpb25zXCIsIGFjdGlvbi51aWQsIEpTT04ucGFyc2UoSlNPTi5zdHJpbmdpZnkoe1xyXG4gICAgICAgIGlkOiBhY3Rpb24udWlkLFxyXG4gICAgICAgIC4uLmFjdGlvblxyXG4gICAgfSkpKVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqINCj0LTQsNC70Y/QtdGCINGB0L7QsdGL0YLQuNC1INC40Lcg0LHQuNCx0LvQuNC+0YLQtdC60LhcclxuICogQHBhcmFtIHsqfSB1aWQgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiByZW1vdmUodWlkKSB7XHJcbiAgICBhd2FpdCBJREIuZGVsZXRlSXRlbShcImFjdGlvbnNcIiwgdWlkKVxyXG59XHJcblxyXG4vKipcclxuICog0KPQtNCw0LvRj9C10YIg0YHQvtCx0YvRgtC40LUg0LjQtyDRhdGD0LrQsCDQvdCwINGG0LXQu9C10LLQvtC8INC+0LHRitC10LrRgtC1IFxyXG4gKiBAcGFyYW0geyp9IHRhcmdldCBcclxuICogQHBhcmFtIHsqfSBhY3Rpb25VSUQgXHJcbiAqIEBwYXJhbSB7Kn0gaG9vayBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZUZyb20odGFyZ2V0LCB7IGhvb2ssIHVpZCB9KSB7XHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleHBvcnREYXRhKCkge1xyXG4gICAgY29uc3QgYWN0aW9ucyA9IGF3YWl0IElEQi5nZXRBbGxJdGVtcyhcImFjdGlvbnNcIilcclxuICAgIHJldHVybiBhY3Rpb25zXHJcbn1cclxuXHJcbmNvbnN0IF9kYXRhID0gcmVhY3RpdmUoe1xyXG4gICAgaW5pdCwgcmVnaXN0ZXIsIHNhdmUsIHNob3dMaWIsIGV4cG9ydERhdGEsXHJcbiAgICByZW1vdmVGcm9tLFxyXG5cclxuICAgIGhvb2tzOiBbXHJcbiAgICAgICAgXCJlbmFibGUub25cIixcclxuICAgICAgICBcInNsaWRlLmluLmJlZm9yZVwiLCBcInNsaWRlLmluXCIsIFwic2xpZGUuaW4uYWZ0ZXJcIixcclxuICAgICAgICBcInNsaWRlLm91dC5iZWZvcmVcIiwgXCJzbGlkZS5vdXRcIiwgXCJzbGlkZS5vdXQuYWZ0ZXJcIixcclxuICAgICAgICBcImRpc2FibGUub25cIixcclxuICAgICAgICBcIm1vdXNlLmluXCIsIFwibW91c2UuY2xpY2tcIiwgXCJtb3VzZS5vdXRcIlxyXG4gICAgXSxcclxuXHJcbiAgICAvKmFkZEFjdGlvbihhKSB7XHJcbiAgICAgICAgX2RhdGEubGlzdFthLnVpZF0gPSBhXHJcbiAgICB9LCovXHJcbiAgICAvKipcclxuICAgICAqINCh0L/QuNGB0L7QuiDRgdC+0LfQtNCw0L3QvdGL0YUg0LTQtdC50YHRgtCy0LjQuS5cclxuICAgICAqINCU0LXQudGB0YLQstC40LUg0LzQvtC20LXRgiDQuNGB0L/QvtC70YzQt9C+0LLQsNGC0YzRgdGPINC90LAg0L3QtdGB0LrQvtC70YzQutC40YUg0Y3Qu9C10LzQtdC90YLQsNGFLiBcclxuICAgICAqL1xyXG4gICAgbGlzdDogW10sXHJcbiAgICAvKipcclxuICAgICAqINCR0LjQsdC70LjQvtGC0LXQutCwINC60L7QvNC/0L7QvdC10L3RgtC+0LIgKNC00L7RgdGC0YPQv9C90YvRhSDRgtC40L/QvtCyKSBcclxuICAgICAqINC90LDQv9GA0LjQvNC10YAgVHdlZW5Qb3NpdGlvbi5cclxuICAgICAqINCh0L7Qt9C00LDQvdC90YvQtSDQuCDQuNGB0L/QvtC70YzQt9GD0LXQvNGL0LUg0LTQtdC50YHRgtCy0LjRjyAoX2RhdGEubGlzdCkg0LLRgdC10LPQtNCwINC60LDQutC+0LPQviDRgtC+INGC0LjQv9CwLCBcclxuICAgICAqINC/0L7QtdGA0LTQtdC70Y/RjtGJ0LXQs9C+INC90LDQsdC+0YAg0LTQvtGB0YLRg9C/0L3Ri9GFINGB0LLQvtC50YHRgtCyIFxyXG4gICAgICovXHJcbiAgICBsaWJyYXJ5OiBbXSxcclxuICAgIC8qKipcclxuICAgICAqINCT0YDRg9C/0L/RiyDQutC+0LzQv9C+0L3QtdC90YLQvtCyLiBcclxuICAgICAqINCS0YHQtSDQutC+0LzQv9C+0L3QtdC90YLRiyDQv9GA0LjQvdCw0LTQu9C10LbQsNGCINC60LDQutC+0Lkg0YLQviDQs9GA0YPQv9C/0LVcclxuICAgICAqL1xyXG4gICAgZ2V0IGdyb3VwcygpIHtcclxuICAgICAgICByZXR1cm4gX2RhdGEubGlicmFyeS5yZWR1Y2UoKGFjYywgaXRlbSkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWFjYy5pbmNsdWRlcyhpdGVtLnR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBhY2MucHVzaChpdGVtLnR5cGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGFjYztcclxuICAgICAgICB9LCBbXSk7XHJcbiAgICB9LFxyXG4gICAgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICByZXR1cm4gT2JqZWN0LnZhbHVlcyhfZGF0YS5saXN0KVxyXG4gICAgfVxyXG59KVxyXG5cclxuQXBwLk9uKFwiaW5pdFwiLCAoKSA9PiB7XHJcbiAgICBBcHAubWVudS5oaWVyYXJoeS5saXN0LnB1c2goe1xyXG4gICAgICAgIGljb246IFwiaGlzdG9yeVwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiQWN0aW9uIExpYnJhcnlcIixcclxuICAgICAgICBoYW5kbGVyOiBzaG93TGliXHJcbiAgICB9KVxyXG5cclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiQWN0aW9uc0xpc3RcIiwgQWN0aW9uc0xpc3QpXHJcblxyXG4gICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJPYmplY3QzRFwiXSwgW1xyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiTW9kZWxzIGFjdGlvbnNcIixcclxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHByb3A6IFwiYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkFjdGlvbnNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhdGVzIGFjdGlvbnNcIixcclxuICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIHByb3A6IFwiYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkFjdGlvbnNMaXN0XCIsXHJcbiAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfV1cclxuICAgIClcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9kYXRhIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTIxYzVkMGNhNThlZTliNzJmYTVcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==