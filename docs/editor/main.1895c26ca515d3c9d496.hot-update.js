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
    //console.log(`Register action ${data.type}`)
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
/******/ 	__webpack_require__.h = () => ("faf770bb4a761ce2cc2d")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4xODk1YzI2Y2E1MTVkM2M5ZDQ5Ni5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBZ0M7QUFDRjtBQUNFO0FBQ2dDO0FBQ2hFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxrREFBTTtBQUNyQixpQkFBaUIsNkNBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHLE1BQU07QUFDcEI7QUFDQTtBQUNBLHFDQUFxQyxVQUFVO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCLDZDQUFRO0FBQzFCO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSxpREFBSztBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSx5QkFBeUIsNkNBQVE7QUFDakM7QUFDQTtBQUNBLGdCQUFnQiw2Q0FBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsNkNBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixrREFBTTtBQUMxQjtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0Esb0NBQW9DLG9CQUFvQixFQUFFLFdBQVc7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLDZDQUFRO0FBQ3hCO0FBQ0E7QUFDQSxZQUFZLGlEQUFLO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiw2Q0FBUTtBQUM1QjtBQUNBO0FBQ0E7QUFDQSxJQUFJLGlEQUFLO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGlEQUFLO0FBQ3JCO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQSw0Q0FBNEMsMkJBQTJCO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxrQkFBa0I7QUFDbEIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtDQUFHO0FBQ2I7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBLFVBQVUsK0NBQUc7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkLFdBQVcsR0FBRztBQUNkO0FBQ0Esb0NBQW9DLFdBQVc7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsK0NBQUc7QUFDN0I7QUFDQTtBQUNBO0FBQ0EsY0FBYyw2Q0FBUTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLHdDQUF3Qyw2RUFBVztBQUNuRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLENBQUM7QUFDRDtBQUNBLGlFQUFlLEs7Ozs7Ozs7O1VDdlNmLHNEOzs7OztVQ0FBLHNEQUFzRCxrQkFBa0I7VUFDeEU7VUFDQTtVQUNBLGdCQUFnQixzRUFBc0UsZ0JBQWdCO1VBQ3RHO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDLGNBQWM7VUFDMUU7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEM7VUFDNUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSwwREFBMEQ7VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9hcHAvYWN0aW9ucy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXHJcbmltcG9ydCBJREIgZnJvbSBcIkAvaWRiLmpzXCJcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IGVuZ2luZSBmcm9tIFwiLi9lbmdpbmUuanNcIlxyXG5pbXBvcnQgbW9kYWwgZnJvbSBcIi4vbW9kYWwuanNcIlxyXG5pbXBvcnQgdG9hc3RzIGZyb20gXCIuL3RvYXN0cy5qc1wiXHJcbmltcG9ydCBBY3Rpb25zTGlzdCBmcm9tIFwiQC9jb21wb25lbnRzL2luc3BlY3Rvci9hY3Rpb25zdmlldy52dWVcIlxyXG5cclxuY29uc3QgX2RlZmF1bHQgPSBbXVxyXG5cclxubGV0IF9tYW5hZ2VyXHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbml0KGFjdGlvbnNEYXRhKSB7XHJcbiAgICBpZiAoYWN0aW9uc0RhdGEubGVuZ3RoID09PSAwKSB7XHJcbiAgICAgICAgYWN0aW9uc0RhdGEucHVzaCguLi5fZGVmYXVsdClcclxuICAgIH1cclxuICAgIC8vX2RhdGEubGlzdC5sZW5ndGggPSAwXHJcbiAgICBfbWFuYWdlciA9IGVuZ2luZS5BY3Rpb25zTWFuYWdlclxyXG4gICAgY29uc3QgYWN0cyA9IHJlYWN0aXZlKGFjdGlvbnNEYXRhKVxyXG4gICAgYXdhaXQgX21hbmFnZXIuSW5pdChhY3RzKVxyXG4gICAgX2RhdGEubGlzdC5wdXNoKC4uLl9tYW5hZ2VyLkxpYnJhcnkpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQoNC10LPQuNGB0YLRgNCw0YbQuNGPINC60L7QvNC/0L7QvdC10L3RgtCwINCy0L3QtdGI0L3QtdCz0L4g0L7QsdGA0LDQsdC+0YLRh9C40LrQsCBcclxuICogQHBhcmFtIHsqfSBkYXRhIHtjb21wb25lbnQ6XCJcIixuYW1lOlwiXCIsdHlwZTpcIlwifVxyXG4gKi9cclxuZnVuY3Rpb24gcmVnaXN0ZXIoZGF0YSkge1xyXG4gICAgLy9jb25zb2xlLmxvZyhgUmVnaXN0ZXIgYWN0aW9uICR7ZGF0YS50eXBlfWApXHJcbiAgICBfZGF0YS5saWJyYXJ5LnB1c2goZGF0YSlcclxufVxyXG5cclxuZnVuY3Rpb24gc2hvd0xpYihvblNlbGVjdCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgc2VsZWN0ZWQ6IG51bGwsXHJcbiAgICAgICAgbGlzdDogX2RhdGEubGlzdFxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgaWYgKG9uU2VsZWN0KSB7XHJcbiAgICAgICAgICAgICAgICBvblNlbGVjdCgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgY3JlYXRlQnV0dG9uID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIGxhYmVsOiBcIkNyZWF0ZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAvL2hpZGRlbjogY29tcHV0ZWQoKCkgPT4gcHJvcHMuc2VsZWN0ZWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3Qgc3JjID0gX2RhdGEubGlicmFyeVswXVxyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IHtcclxuICAgICAgICAgICAgICAgIHR5cGU6IHNyYy5jb21wb25lbnQsXHJcbiAgICAgICAgICAgICAgICBncm91cDogc3JjLnR5cGUsXHJcbiAgICAgICAgICAgICAgICB0YXJnZXRzOiBbJyonXSxcclxuICAgICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBzcmMuZGVzY3JpcHRpb24sXHJcbiAgICAgICAgICAgICAgICAuLi5zcmMudGVtcGxhdGVcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgIGNsYXNzOiBcImFkZGl0aW9uYWxcIixcclxuICAgICAgICBoaWRkZW46IGNvbXB1dGVkKCgpID0+ICFwcm9wcy5zZWxlY3RlZCB8fCBwcm9wcy5zZWxlY3RlZC51aWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBzYXZlQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIlNhdmVcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgcHJvcHMuc2VsZWN0ZWQudWlkKSxcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpYiA9IF9kYXRhLmxpYnJhcnkuZmluZChsID0+IGwuY29tcG9uZW50ID09PSBwcm9wcy5zZWxlY3RlZC50eXBlKVxyXG4gICAgICAgICAgICBpZiAobGliLmNoZWNrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBhbGxvdyA9IGF3YWl0IGxpYi5jaGVjayhwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIGlmICghYWxsb3cpIHtcclxuICAgICAgICAgICAgICAgICAgICB0b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCLQndC10LLQtdGA0L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRi1wiXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpYi50ZW1wbGF0ZSkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBpZiAoIShrIGluIHByb3BzLnNlbGVjdGVkKSlcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWRba10gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KGxpYi50ZW1wbGF0ZVtrXSkpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBwcm9wcy5zZWxlY3RlZC51aWQgPSBgJHtwcm9wcy5zZWxlY3RlZC50eXBlfSR7RGF0ZS5ub3coKX1gXHJcbiAgICAgICAgICAgIF9kYXRhLmxpc3QucHVzaChwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgYXdhaXQgc2F2ZShwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgYXdhaXQgX21hbmFnZXIuQWRkKHByb3BzLnNlbGVjdGVkKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCByZW1vdmVCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwiYWRkaXRpb25hbFwiLFxyXG4gICAgICAgIGhpZGRlbjogY29tcHV0ZWQoKCkgPT4gIXByb3BzLnNlbGVjdGVkIHx8ICFwcm9wcy5zZWxlY3RlZC51aWQpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgY29uc3QgcyA9IF9kYXRhLmxpc3QuZmluZEluZGV4KGEgPT4gYSA9PT0gcHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGlmIChzID49IDApIHtcclxuICAgICAgICAgICAgICAgIF9kYXRhLmxpc3Quc3BsaWNlKHMsIDEpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmVtb3ZlKHByb3BzLnNlbGVjdGVkLnVpZClcclxuICAgICAgICAgICAgcHJvcHMuc2VsZWN0ZWQgPSBudWxsXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IHNlbGVjdEJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJTZWxlY3RcIixcclxuICAgICAgICBjbGFzczogXCJhZGRpdGlvbmFsXCIsXHJcbiAgICAgICAgaGlkZGVuOiBjb21wdXRlZCgoKSA9PiAhcHJvcHMuc2VsZWN0ZWQgfHwgIXByb3BzLnNlbGVjdGVkLnVpZCB8fCAhb25TZWxlY3QpLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgb25TZWxlY3QocHJvcHMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICBjcmVhdGVCdXR0b24sIHNhdmVCdXR0b24sIHNlbGVjdEJ1dHRvbiwgcmVtb3ZlQnV0dG9uLCBjYW5jZWxCdXR0b24sIGNsb3NlQnV0dG9uXHJcbiAgICBdKVxyXG5cclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogb25TZWxlY3QgPyBgU2VsZWN0IGFuIGFjdGlvbmAgOiAnQWN0aW9uIExpYnJhcnknLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkl0ZW1zTGliXCIsXHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgIHNlbGVjdGVkOiAoYWN0aW9uKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFhY3Rpb24udWlkKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IGFjdGlvblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbG90czoge1xyXG4gICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJBY3Rpb25JdGVtXCIsXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZWRpdDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJBY3Rpb25FZGl0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWQ6IHByb3BzLnNlbGVjdGVkXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgXCJjaGFuZ2U6dHlwZVwiOiAoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3JjID0gX2RhdGEubGlicmFyeS5maW5kKGQgPT4gZC5jb21wb25lbnQgPT09IGEpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBwcm9wcy5zZWxlY3RlZCA9IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5zcmMudGVtcGxhdGUsIHR5cGU6IHNyYy5jb21wb25lbnQsIGdyb3VwOiBzcmMudHlwZSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVzY3JpcHRpb246IHNyYy5kZXNjcmlwdGlvblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBlZGl0OiAocHJvcCwgdmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwcm9wZXJ0aWVzID0gcHJvcC5zcGxpdCgnLicpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGN1cnJlbnQgPSBwcm9wcy5zZWxlY3RlZDtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcGVydGllcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBwID0gcHJvcGVydGllc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWN1cnJlbnRbcF0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY3VycmVudFtwXSA9IHt9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjdXJyZW50ID0gY3VycmVudFtwXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnJlbnRbcHJvcGVydGllc1twcm9wZXJ0aWVzLmxlbmd0aCAtIDFdXSA9IHZhbFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2F2ZShwcm9wcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7IGJ1dHRvbnMgfVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShhY3Rpb24pIHtcclxuICAgIGlmICghYWN0aW9uLnVpZClcclxuICAgICAgICByZXR1cm5cclxuICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcImFjdGlvbnNcIiwgYWN0aW9uLnVpZCwgSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh7XHJcbiAgICAgICAgaWQ6IGFjdGlvbi51aWQsXHJcbiAgICAgICAgLi4uYWN0aW9uXHJcbiAgICB9KSkpXHJcblxyXG59XHJcblxyXG4vKipcclxuICog0KPQtNCw0LvRj9C10YIg0YHQvtCx0YvRgtC40LUg0LjQtyDQsdC40LHQu9C40L7RgtC10LrQuFxyXG4gKiBAcGFyYW0geyp9IHVpZCBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZSh1aWQpIHtcclxuICAgIGF3YWl0IElEQi5kZWxldGVJdGVtKFwiYWN0aW9uc1wiLCB1aWQpXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQo9C00LDQu9GP0LXRgiDRgdC+0LHRi9GC0LjQtSDQuNC3INGF0YPQutCwINC90LAg0YbQtdC70LXQstC+0Lwg0L7QsdGK0LXQutGC0LUgXHJcbiAqIEBwYXJhbSB7Kn0gdGFyZ2V0IFxyXG4gKiBAcGFyYW0geyp9IGFjdGlvblVJRCBcclxuICogQHBhcmFtIHsqfSBob29rIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlRnJvbSh0YXJnZXQsIHsgaG9vaywgdWlkIH0pIHtcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4cG9ydERhdGEoKSB7XHJcbiAgICBjb25zdCBhY3Rpb25zID0gYXdhaXQgSURCLmdldEFsbEl0ZW1zKFwiYWN0aW9uc1wiKVxyXG4gICAgcmV0dXJuIGFjdGlvbnNcclxufVxyXG5cclxuY29uc3QgX2RhdGEgPSByZWFjdGl2ZSh7XHJcbiAgICBpbml0LCByZWdpc3Rlciwgc2F2ZSwgc2hvd0xpYiwgZXhwb3J0RGF0YSxcclxuICAgIHJlbW92ZUZyb20sXHJcblxyXG4gICAgaG9va3M6IFtcclxuICAgICAgICBcImVuYWJsZS5vblwiLFxyXG4gICAgICAgIFwic2xpZGUuaW4uYmVmb3JlXCIsIFwic2xpZGUuaW5cIiwgXCJzbGlkZS5pbi5hZnRlclwiLFxyXG4gICAgICAgIFwic2xpZGUub3V0LmJlZm9yZVwiLCBcInNsaWRlLm91dFwiLCBcInNsaWRlLm91dC5hZnRlclwiLFxyXG4gICAgICAgIFwiZGlzYWJsZS5vblwiLFxyXG4gICAgICAgIFwibW91c2UuaW5cIiwgXCJtb3VzZS5jbGlja1wiLCBcIm1vdXNlLm91dFwiXHJcbiAgICBdLFxyXG5cclxuICAgIC8qYWRkQWN0aW9uKGEpIHtcclxuICAgICAgICBfZGF0YS5saXN0W2EudWlkXSA9IGFcclxuICAgIH0sKi9cclxuICAgIC8qKlxyXG4gICAgICog0KHQv9C40YHQvtC6INGB0L7Qt9C00LDQvdC90YvRhSDQtNC10LnRgdGC0LLQuNC5LlxyXG4gICAgICog0JTQtdC50YHRgtCy0LjQtSDQvNC+0LbQtdGCINC40YHQv9C+0LvRjNC30L7QstCw0YLRjNGB0Y8g0L3QsCDQvdC10YHQutC+0LvRjNC60LjRhSDRjdC70LXQvNC10L3RgtCw0YUuIFxyXG4gICAgICovXHJcbiAgICBsaXN0OiBbXSxcclxuICAgIC8qKlxyXG4gICAgICog0JHQuNCx0LvQuNC+0YLQtdC60LAg0LrQvtC80L/QvtC90LXQvdGC0L7QsiAo0LTQvtGB0YLRg9C/0L3Ri9GFINGC0LjQv9C+0LIpIFxyXG4gICAgICog0L3QsNC/0YDQuNC80LXRgCBUd2VlblBvc2l0aW9uLlxyXG4gICAgICog0KHQvtC30LTQsNC90L3Ri9C1INC4INC40YHQv9C+0LvRjNC30YPQtdC80YvQtSDQtNC10LnRgdGC0LLQuNGPIChfZGF0YS5saXN0KSDQstGB0LXQs9C00LAg0LrQsNC60L7Qs9C+INGC0L4g0YLQuNC/0LAsIFxyXG4gICAgICog0L/QvtC10YDQtNC10LvRj9GO0YnQtdCz0L4g0L3QsNCx0L7RgCDQtNC+0YHRgtGD0L/QvdGL0YUg0YHQstC+0LnRgdGC0LIgXHJcbiAgICAgKi9cclxuICAgIGxpYnJhcnk6IFtdLFxyXG4gICAgLyoqKlxyXG4gICAgICog0JPRgNGD0L/Qv9GLINC60L7QvNC/0L7QvdC10L3RgtC+0LIuIFxyXG4gICAgICog0JLRgdC1INC60L7QvNC/0L7QvdC10L3RgtGLINC/0YDQuNC90LDQtNC70LXQttCw0YIg0LrQsNC60L7QuSDRgtC+INCz0YDRg9C/0L/QtVxyXG4gICAgICovXHJcbiAgICBnZXQgZ3JvdXBzKCkge1xyXG4gICAgICAgIHJldHVybiBfZGF0YS5saWJyYXJ5LnJlZHVjZSgoYWNjLCBpdGVtKSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghYWNjLmluY2x1ZGVzKGl0ZW0udHlwZSkpIHtcclxuICAgICAgICAgICAgICAgIGFjYy5wdXNoKGl0ZW0udHlwZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYWNjO1xyXG4gICAgICAgIH0sIFtdKTtcclxuICAgIH0sXHJcbiAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgIHJldHVybiBPYmplY3QudmFsdWVzKF9kYXRhLmxpc3QpXHJcbiAgICB9XHJcbn0pXHJcblxyXG5BcHAuT24oXCJpbml0XCIsICgpID0+IHtcclxuICAgIEFwcC5tZW51LmhpZXJhcmh5Lmxpc3QucHVzaCh7XHJcbiAgICAgICAgaWNvbjogXCJoaXN0b3J5XCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCJBY3Rpb24gTGlicmFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IHNob3dMaWJcclxuICAgIH0pXHJcblxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJBY3Rpb25zTGlzdFwiLCBBY3Rpb25zTGlzdClcclxuXHJcbiAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIk9iamVjdDNEXCJdLCBbXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJNb2RlbHMgYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgcHJvcDogXCJhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQWN0aW9uc0xpc3RcIixcclxuICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJTdGF0ZXMgYWN0aW9uc1wiLFxyXG4gICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgcHJvcDogXCJhY3Rpb25zXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQWN0aW9uc0xpc3RcIixcclxuICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XVxyXG4gICAgKVxyXG59KVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmYWY3NzBiYjRhNzYxY2UyY2MyZFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9