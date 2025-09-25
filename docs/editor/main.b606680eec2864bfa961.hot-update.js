"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/app/slides.js":
/*!***************************!*\
  !*** ./src/app/slides.js ***!
  \***************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _idb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/idb.js */ "./src/idb.js");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _eventemitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventemitter.js */ "./src/eventemitter.js");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../tools.js */ "./src/tools.js");
/* harmony import */ var _project_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./project.js */ "./src/app/project.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__

;



const _emmiter = new _eventemitter_js__WEBPACK_IMPORTED_MODULE_3__["default"]()

async function load(slides) {
    _data.children.length = 0
    const sls = slides.sort((a, b) => a.index - b.index)
    for (let i = 0; i < sls.length; i++) {
        const s = sls[i]
        const slide = {
            name: "",
            camera: {
                path: null
            },
            actions: [],
            index: i,
            props: {},
            background: null,
            environment: {},
            ...s,
            //background: s.background ? new SceneBackground(s.background || { type: 'color', value: '#ffffff' }) : null
        }
        _data.children.push(slide)
    }

    _project_js__WEBPACK_IMPORTED_MODULE_5__["default"].on("remove", (paths) => {
        const p = paths.join('.')
        if (App.engine.Project.Camera?.path === p) {
            App.engine.Project.ResetCamera()
        }
        for (let i = 0; i < _data.children.length; i++) {
            const s = _data.children[i]
            if (s.camera?.path === p) {
                s.camera.path = null
                save(s)
            }

        }
    })
}

async function save(slide) {
    const target = slide || _data.actived
    const data = {
        actions: target.actions,
        name: target.name,
        index: target.index,
        camera: target.camera,
        uid: target.uid,
        props: target.props,
        background: target.background,
        environment: target.environment,
    }
    /*if (target.background) {
        if (target.background.isAsset) {
            data.background = {
                type: target.background.type,
                uid: target.background.uid
            }
        } else if (target.background.encode) {
            data.background = target.background.encode()
        }
    }*/
    const outdata = JSON.parse((0,_tools_js__WEBPACK_IMPORTED_MODULE_4__.stringify)(data))
    try {
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].upsertItemProperties("slides", data.uid, outdata)
    } catch (error) {
        console.warn(error)
    }
}

async function add(data) {
    const uid = `sl${Date.now()}`
    const slide = {
        index: _data.children.length,
        name: uid,
        uid,
        background: null,
        environment: {},
        camera: {
            path: null
        },
        props: {},
        actions: [],
        ...data
    }
    _data.children.push(slide)
    await save(slide)
    _emmiter.emit('add', slide.uid)
    return slide
}

/**
 * Удаление по uid
 * @param {String} id 
 */
async function remove(id) {
    console.log('remove')
    let uid = id || _data.actived.uid
    const index = _data.children.findIndex(s => s.uid === uid)
    if (index >= 0) {
        if (_data.actived.uid === uid) {
            if (index === 0) {
                await goto(1)
            } else {
                await goto(index - 1)
            }
        }
        _data.children.splice(index, 1)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem("slides", uid)
        const linked = _data.children.find(s => s.next === uid)
        if (linked) {
            if (_data.children.length >= index) {
                linked.next = _data.children[index].uid
            }
        }
        _emmiter.emit('remove', uid)
    }
}

function goto(uid) {
    const oldSlide = _data.actived
    if (typeof uid === 'number') {
        _data.actived = _data.children[uid]
    } else {
        _data.actived = _data.children.find(s => s.uid === uid)
    }
    if (!_data.actived)
        return
    _emmiter.emit('change', _data.actived.uid)
    Activate(_data.actived, oldSlide)

}

async function Activate(slide, oldSlide) {
    let oldStates = []
    let nextStates = _project_js__WEBPACK_IMPORTED_MODULE_5__["default"].findStates(slide.uid)
    if (oldSlide) {
        oldStates = _project_js__WEBPACK_IMPORTED_MODULE_5__["default"].findStates(oldSlide.uid)
        await SlideOut(oldSlide, oldStates, nextStates)
    }
    await SlideIn(slide, nextStates, oldStates)
}

async function SlideIn(slide, nextStates, oldStates) {
    //Элементы которые отсутствовавали в предыдущем слайде но присутствуют в новом
    const enableList = []
    //Элементы которые были в предыдущем слайде и будут в новом
    const continueList = []
    for (let i = 0; i < nextStates.length; i++) {
        const state = nextStates[i]
        if (oldStates.findIndex(s => s.uid === state.uid/* || state.data.persistent*/) >= 0) {
            continueList.push(state)
        } else {
            enableList.push(state)
        }
    }
    console.log('Slide In')
    try {
        if (slide.camera?.path && slide.camera?.path !== App.engine.getManager().Camera?.path) {
            const camPaths = slide.camera.path.split('.')
            const cam = _project_js__WEBPACK_IMPORTED_MODULE_5__["default"].find(camPaths)
            App.engine.getManager().SetCamera(cam)
            cam.updateProjectionMatrix()
        }
        console.log(slide.background)
        if (slide.background) {
            if (slide.background.isAsset) {
                App.engine.getManager().Scene.background = slide.background.resource
            } else {
                App.engine.getManager().Scene.background = slide.background
            }

            /*switch (slide.background.type) {
                default:
                    App.engine.getManager().Scene.background = slide.background[slide.background.type]
                    break
                case "cube":
                    App.engine.getManager().Scene.background = slide.background.value
                    break
                case "texture":
                    App.engine.getManager().Scene.background = slide.background.value
                    break
            }*/
        }
    } catch (error) {
        console.warn(error.message)
    }


    //Список всех элементов в новом слайде
    const fullList = [...enableList, ...continueList]

    await Promise.all([
        App.engine.ActionsManager.Execute(fullList.map(el => {
            return {
                ...el.states[slide.uid],
                model: el
            }
        }), 'slide.in.before'),
        App.engine.ActionsManager.Run(slide.actions, slide, 'slide.in.before')
    ])
    await App.engine.ActionsManager.Execute(enableList, 'enable.on')
    await Promise.all([
        App.engine.ActionsManager.Execute(fullList, 'slide.in'),
        App.engine.ActionsManager.Run(slide.actions, slide, 'slide.in')
    ])
    const proms = []
    for (let i = 0; i < fullList.length; i++) {
        proms.push(ActivateState(fullList[i], slide.uid))
        //fullList[i].states[slide.uid].activate()
    }
    await Promise.all(proms)
    await Promise.all([
        App.engine.ActionsManager.Execute(fullList, 'slide.in.after'),
        App.engine.ActionsManager.Run(slide.actions, slide, 'slide.in.after')
    ])
}

async function ActivateState(element, slide) {
    const { position, rotation, scale, actions = [], properties = {}, visible = false, ...props } = element.states[slide];

    if (position)
        element.position.copy(position)
    if (rotation)
        element.rotation.setFromVector3(rotation, "XYZ")
    if (scale)
        element.scale.copy(scale)
    const promises = Object.keys(props).map(async k => {
        const paths = k.split('.')
        const value = props[k]
        let p = paths[0]
        let target = element

        try {
            for (let i = 0; i < paths.length - 1; i++) {
                target = target[paths[i]]
                p = paths[i + 1]
            }
            target[p] = await App.engine.getFactory().CreateElement(value)
            return { success: true, key: k }
        } catch (error) {
            console.warn(error)
            return { success: false, key: k, error }
        }
    })

    // Ждем завершения всех промисов
    await Promise.all(promises)
    element.visible = visible
    /*Object.keys(props).forEach(async k => {
        const paths = k.split('.')
        const value = props[k]
        let p = paths[0]
        let target = element
        try {
            for (let i = 0; i < paths.length - 1; i++) {
                target = target[paths[i]]
                p = paths[i + 1]
            }
            console.log(target[p])
            target[p] = await App.engine.getFactory().CreateElement(value);// value
            console.log(target[p])
        } catch (error) {
            console.warn(error)
        }
    })*/
    element.state = element.states[slide] || {
        model: element
    }

    const typeData = App.engine.Factory.TreeTypes.find(t => t.type === element.type)
    if (typeData?.onchange) {
        typeData.onchange(element)
    }
}

async function SlideOut(slide, oldStates, nextStates) {
    const continueList = []
    const disableList = []
    for (let i = 0; i < oldStates.length; i++) {
        const state = oldStates[i]
        if (nextStates.findIndex(s => s.uid === state.uid) >= 0) {
            continueList.push(state)
        } else {
            disableList.push(state)
        }
    }
    const fullList = [...disableList, ...continueList]

    await Promise.all([
        App.engine.ActionsManager.Execute(fullList, 'slide.out'),
        App.engine.ActionsManager.Run(slide.actions, slide, 'slide.out')
    ])

    await App.engine.ActionsManager.Execute(disableList, 'disable.on')

    for (let i = 0; i < disableList.length; i++) {
        DectivateState(disableList[i], slide)
        //disableList[i].deactivate()
    }
}

function DectivateState(element, slide) {
    element.visible = false
}



const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    load, add, remove, save,
    actived: null,
    children: [],
    goto,
    next() {
        const slnum = _data.children.findIndex(s => s.uid === _data.actived.uid)
        if (slnum >= _data.children.length - 1)
            return
        _data.goto(slnum + 1)
    },
    back() {
        const slnum = _data.children.findIndex(s => s.uid === _data.actived.uid)
        if (slnum === 0)
            return
        _data.goto(slnum - 1)
    },
    on: _emmiter.on.bind(_emmiter),
    off: _emmiter.off.bind(_emmiter)
})

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("4fd3f9db409e6cfd17e7")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iNjA2NjgwZWVjMjg2NGJmYTk2MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBK0M7QUFDckI7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEM7QUFDQSxDQUE2QztBQUNOO0FBQ0w7QUFDbEM7QUFDQSxxQkFBcUIsd0RBQVk7QUFDakM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsZ0JBQWdCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBLDJCQUEyQjtBQUMzQjtBQUNBLCtFQUErRSxpQ0FBaUM7QUFDaEg7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLG1EQUFPO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBLEtBQUs7QUFDTCwrQkFBK0Isb0RBQVM7QUFDeEM7QUFDQSxjQUFjLCtDQUFHO0FBQ2pCLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLFdBQVc7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QjtBQUN2QjtBQUNBO0FBQ0EsU0FBUztBQUNULGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsK0NBQUc7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCLG1EQUFPO0FBQzVCO0FBQ0Esb0JBQW9CLG1EQUFPO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHVCQUF1QjtBQUMzQztBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbURBQU87QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQixxQkFBcUI7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksd0RBQXdELDhCQUE4QjtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHNCQUFzQjtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQixVQUFVO0FBQ1Y7QUFDQSxxQkFBcUI7QUFDckI7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsc0JBQXNCO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkVBQTJFO0FBQzNFO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isc0JBQXNCO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isd0JBQXdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQSxpRUFBZSxLOzs7Ozs7OztVQ2pWZixzRDs7Ozs7VUNBQSxzREFBc0Qsa0JBQWtCO1VBQ3hFO1VBQ0E7VUFDQSxnQkFBZ0Isc0VBQXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvYXBwL3NsaWRlcy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgY29tcHV0ZWQsIHRvUmF3IH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgSURCIGZyb20gXCJAL2lkYi5qc1wiXHJcbmltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcblxyXG5pbXBvcnQgRXZlbnRFbW1pdGVyIGZyb20gXCIuLi9ldmVudGVtaXR0ZXIuanNcIlxyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwiLi4vdG9vbHMuanNcIlxyXG5pbXBvcnQgUHJvamVjdCBmcm9tIFwiLi9wcm9qZWN0LmpzXCJcclxuXHJcbmNvbnN0IF9lbW1pdGVyID0gbmV3IEV2ZW50RW1taXRlcigpXHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkKHNsaWRlcykge1xyXG4gICAgX2RhdGEuY2hpbGRyZW4ubGVuZ3RoID0gMFxyXG4gICAgY29uc3Qgc2xzID0gc2xpZGVzLnNvcnQoKGEsIGIpID0+IGEuaW5kZXggLSBiLmluZGV4KVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzbHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBzID0gc2xzW2ldXHJcbiAgICAgICAgY29uc3Qgc2xpZGUgPSB7XHJcbiAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgIGNhbWVyYToge1xyXG4gICAgICAgICAgICAgICAgcGF0aDogbnVsbFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXSxcclxuICAgICAgICAgICAgaW5kZXg6IGksXHJcbiAgICAgICAgICAgIHByb3BzOiB7fSxcclxuICAgICAgICAgICAgYmFja2dyb3VuZDogbnVsbCxcclxuICAgICAgICAgICAgZW52aXJvbm1lbnQ6IHt9LFxyXG4gICAgICAgICAgICAuLi5zLFxyXG4gICAgICAgICAgICAvL2JhY2tncm91bmQ6IHMuYmFja2dyb3VuZCA/IG5ldyBTY2VuZUJhY2tncm91bmQocy5iYWNrZ3JvdW5kIHx8IHsgdHlwZTogJ2NvbG9yJywgdmFsdWU6ICcjZmZmZmZmJyB9KSA6IG51bGxcclxuICAgICAgICB9XHJcbiAgICAgICAgX2RhdGEuY2hpbGRyZW4ucHVzaChzbGlkZSlcclxuICAgIH1cclxuXHJcbiAgICBQcm9qZWN0Lm9uKFwicmVtb3ZlXCIsIChwYXRocykgPT4ge1xyXG4gICAgICAgIGNvbnN0IHAgPSBwYXRocy5qb2luKCcuJylcclxuICAgICAgICBpZiAoQXBwLmVuZ2luZS5Qcm9qZWN0LkNhbWVyYT8ucGF0aCA9PT0gcCkge1xyXG4gICAgICAgICAgICBBcHAuZW5naW5lLlByb2plY3QuUmVzZXRDYW1lcmEoKVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9kYXRhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHMgPSBfZGF0YS5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAocy5jYW1lcmE/LnBhdGggPT09IHApIHtcclxuICAgICAgICAgICAgICAgIHMuY2FtZXJhLnBhdGggPSBudWxsXHJcbiAgICAgICAgICAgICAgICBzYXZlKHMpXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShzbGlkZSkge1xyXG4gICAgY29uc3QgdGFyZ2V0ID0gc2xpZGUgfHwgX2RhdGEuYWN0aXZlZFxyXG4gICAgY29uc3QgZGF0YSA9IHtcclxuICAgICAgICBhY3Rpb25zOiB0YXJnZXQuYWN0aW9ucyxcclxuICAgICAgICBuYW1lOiB0YXJnZXQubmFtZSxcclxuICAgICAgICBpbmRleDogdGFyZ2V0LmluZGV4LFxyXG4gICAgICAgIGNhbWVyYTogdGFyZ2V0LmNhbWVyYSxcclxuICAgICAgICB1aWQ6IHRhcmdldC51aWQsXHJcbiAgICAgICAgcHJvcHM6IHRhcmdldC5wcm9wcyxcclxuICAgICAgICBiYWNrZ3JvdW5kOiB0YXJnZXQuYmFja2dyb3VuZCxcclxuICAgICAgICBlbnZpcm9ubWVudDogdGFyZ2V0LmVudmlyb25tZW50LFxyXG4gICAgfVxyXG4gICAgLyppZiAodGFyZ2V0LmJhY2tncm91bmQpIHtcclxuICAgICAgICBpZiAodGFyZ2V0LmJhY2tncm91bmQuaXNBc3NldCkge1xyXG4gICAgICAgICAgICBkYXRhLmJhY2tncm91bmQgPSB7XHJcbiAgICAgICAgICAgICAgICB0eXBlOiB0YXJnZXQuYmFja2dyb3VuZC50eXBlLFxyXG4gICAgICAgICAgICAgICAgdWlkOiB0YXJnZXQuYmFja2dyb3VuZC51aWRcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0gZWxzZSBpZiAodGFyZ2V0LmJhY2tncm91bmQuZW5jb2RlKSB7XHJcbiAgICAgICAgICAgIGRhdGEuYmFja2dyb3VuZCA9IHRhcmdldC5iYWNrZ3JvdW5kLmVuY29kZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfSovXHJcbiAgICBjb25zdCBvdXRkYXRhID0gSlNPTi5wYXJzZShzdHJpbmdpZnkoZGF0YSkpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcInNsaWRlc1wiLCBkYXRhLnVpZCwgb3V0ZGF0YSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBhZGQoZGF0YSkge1xyXG4gICAgY29uc3QgdWlkID0gYHNsJHtEYXRlLm5vdygpfWBcclxuICAgIGNvbnN0IHNsaWRlID0ge1xyXG4gICAgICAgIGluZGV4OiBfZGF0YS5jaGlsZHJlbi5sZW5ndGgsXHJcbiAgICAgICAgbmFtZTogdWlkLFxyXG4gICAgICAgIHVpZCxcclxuICAgICAgICBiYWNrZ3JvdW5kOiBudWxsLFxyXG4gICAgICAgIGVudmlyb25tZW50OiB7fSxcclxuICAgICAgICBjYW1lcmE6IHtcclxuICAgICAgICAgICAgcGF0aDogbnVsbFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgcHJvcHM6IHt9LFxyXG4gICAgICAgIGFjdGlvbnM6IFtdLFxyXG4gICAgICAgIC4uLmRhdGFcclxuICAgIH1cclxuICAgIF9kYXRhLmNoaWxkcmVuLnB1c2goc2xpZGUpXHJcbiAgICBhd2FpdCBzYXZlKHNsaWRlKVxyXG4gICAgX2VtbWl0ZXIuZW1pdCgnYWRkJywgc2xpZGUudWlkKVxyXG4gICAgcmV0dXJuIHNsaWRlXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQo9C00LDQu9C10L3QuNC1INC/0L4gdWlkXHJcbiAqIEBwYXJhbSB7U3RyaW5nfSBpZCBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZShpZCkge1xyXG4gICAgY29uc29sZS5sb2coJ3JlbW92ZScpXHJcbiAgICBsZXQgdWlkID0gaWQgfHwgX2RhdGEuYWN0aXZlZC51aWRcclxuICAgIGNvbnN0IGluZGV4ID0gX2RhdGEuY2hpbGRyZW4uZmluZEluZGV4KHMgPT4gcy51aWQgPT09IHVpZClcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgaWYgKF9kYXRhLmFjdGl2ZWQudWlkID09PSB1aWQpIHtcclxuICAgICAgICAgICAgaWYgKGluZGV4ID09PSAwKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBnb3RvKDEpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBnb3RvKGluZGV4IC0gMSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBfZGF0YS5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgYXdhaXQgSURCLmRlbGV0ZUl0ZW0oXCJzbGlkZXNcIiwgdWlkKVxyXG4gICAgICAgIGNvbnN0IGxpbmtlZCA9IF9kYXRhLmNoaWxkcmVuLmZpbmQocyA9PiBzLm5leHQgPT09IHVpZClcclxuICAgICAgICBpZiAobGlua2VkKSB7XHJcbiAgICAgICAgICAgIGlmIChfZGF0YS5jaGlsZHJlbi5sZW5ndGggPj0gaW5kZXgpIHtcclxuICAgICAgICAgICAgICAgIGxpbmtlZC5uZXh0ID0gX2RhdGEuY2hpbGRyZW5baW5kZXhdLnVpZFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoJ3JlbW92ZScsIHVpZClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZ290byh1aWQpIHtcclxuICAgIGNvbnN0IG9sZFNsaWRlID0gX2RhdGEuYWN0aXZlZFxyXG4gICAgaWYgKHR5cGVvZiB1aWQgPT09ICdudW1iZXInKSB7XHJcbiAgICAgICAgX2RhdGEuYWN0aXZlZCA9IF9kYXRhLmNoaWxkcmVuW3VpZF1cclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgX2RhdGEuYWN0aXZlZCA9IF9kYXRhLmNoaWxkcmVuLmZpbmQocyA9PiBzLnVpZCA9PT0gdWlkKVxyXG4gICAgfVxyXG4gICAgaWYgKCFfZGF0YS5hY3RpdmVkKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgX2VtbWl0ZXIuZW1pdCgnY2hhbmdlJywgX2RhdGEuYWN0aXZlZC51aWQpXHJcbiAgICBBY3RpdmF0ZShfZGF0YS5hY3RpdmVkLCBvbGRTbGlkZSlcclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFjdGl2YXRlKHNsaWRlLCBvbGRTbGlkZSkge1xyXG4gICAgbGV0IG9sZFN0YXRlcyA9IFtdXHJcbiAgICBsZXQgbmV4dFN0YXRlcyA9IFByb2plY3QuZmluZFN0YXRlcyhzbGlkZS51aWQpXHJcbiAgICBpZiAob2xkU2xpZGUpIHtcclxuICAgICAgICBvbGRTdGF0ZXMgPSBQcm9qZWN0LmZpbmRTdGF0ZXMob2xkU2xpZGUudWlkKVxyXG4gICAgICAgIGF3YWl0IFNsaWRlT3V0KG9sZFNsaWRlLCBvbGRTdGF0ZXMsIG5leHRTdGF0ZXMpXHJcbiAgICB9XHJcbiAgICBhd2FpdCBTbGlkZUluKHNsaWRlLCBuZXh0U3RhdGVzLCBvbGRTdGF0ZXMpXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFNsaWRlSW4oc2xpZGUsIG5leHRTdGF0ZXMsIG9sZFN0YXRlcykge1xyXG4gICAgLy/QrdC70LXQvNC10L3RgtGLINC60L7RgtC+0YDRi9C1INC+0YLRgdGD0YLRgdGC0LLQvtCy0LDQstCw0LvQuCDQsiDQv9GA0LXQtNGL0LTRg9GJ0LXQvCDRgdC70LDQudC00LUg0L3QviDQv9GA0LjRgdGD0YLRgdGC0LLRg9GO0YIg0LIg0L3QvtCy0L7QvFxyXG4gICAgY29uc3QgZW5hYmxlTGlzdCA9IFtdXHJcbiAgICAvL9Ct0LvQtdC80LXQvdGC0Ysg0LrQvtGC0L7RgNGL0LUg0LHRi9C70Lgg0LIg0L/RgNC10LTRi9C00YPRidC10Lwg0YHQu9Cw0LnQtNC1INC4INCx0YPQtNGD0YIg0LIg0L3QvtCy0L7QvFxyXG4gICAgY29uc3QgY29udGludWVMaXN0ID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbmV4dFN0YXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gbmV4dFN0YXRlc1tpXVxyXG4gICAgICAgIGlmIChvbGRTdGF0ZXMuZmluZEluZGV4KHMgPT4gcy51aWQgPT09IHN0YXRlLnVpZC8qIHx8IHN0YXRlLmRhdGEucGVyc2lzdGVudCovKSA+PSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnRpbnVlTGlzdC5wdXNoKHN0YXRlKVxyXG4gICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgIGVuYWJsZUxpc3QucHVzaChzdGF0ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBjb25zb2xlLmxvZygnU2xpZGUgSW4nKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBpZiAoc2xpZGUuY2FtZXJhPy5wYXRoICYmIHNsaWRlLmNhbWVyYT8ucGF0aCAhPT0gQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuQ2FtZXJhPy5wYXRoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbVBhdGhzID0gc2xpZGUuY2FtZXJhLnBhdGguc3BsaXQoJy4nKVxyXG4gICAgICAgICAgICBjb25zdCBjYW0gPSBQcm9qZWN0LmZpbmQoY2FtUGF0aHMpXHJcbiAgICAgICAgICAgIEFwcC5lbmdpbmUuZ2V0TWFuYWdlcigpLlNldENhbWVyYShjYW0pXHJcbiAgICAgICAgICAgIGNhbS51cGRhdGVQcm9qZWN0aW9uTWF0cml4KClcclxuICAgICAgICB9XHJcbiAgICAgICAgY29uc29sZS5sb2coc2xpZGUuYmFja2dyb3VuZClcclxuICAgICAgICBpZiAoc2xpZGUuYmFja2dyb3VuZCkge1xyXG4gICAgICAgICAgICBpZiAoc2xpZGUuYmFja2dyb3VuZC5pc0Fzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBBcHAuZW5naW5lLmdldE1hbmFnZXIoKS5TY2VuZS5iYWNrZ3JvdW5kID0gc2xpZGUuYmFja2dyb3VuZC5yZXNvdXJjZVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuU2NlbmUuYmFja2dyb3VuZCA9IHNsaWRlLmJhY2tncm91bmRcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLypzd2l0Y2ggKHNsaWRlLmJhY2tncm91bmQudHlwZSkge1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBBcHAuZW5naW5lLmdldE1hbmFnZXIoKS5TY2VuZS5iYWNrZ3JvdW5kID0gc2xpZGUuYmFja2dyb3VuZFtzbGlkZS5iYWNrZ3JvdW5kLnR5cGVdXHJcbiAgICAgICAgICAgICAgICAgICAgYnJlYWtcclxuICAgICAgICAgICAgICAgIGNhc2UgXCJjdWJlXCI6XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuU2NlbmUuYmFja2dyb3VuZCA9IHNsaWRlLmJhY2tncm91bmQudmFsdWVcclxuICAgICAgICAgICAgICAgICAgICBicmVha1xyXG4gICAgICAgICAgICAgICAgY2FzZSBcInRleHR1cmVcIjpcclxuICAgICAgICAgICAgICAgICAgICBBcHAuZW5naW5lLmdldE1hbmFnZXIoKS5TY2VuZS5iYWNrZ3JvdW5kID0gc2xpZGUuYmFja2dyb3VuZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIH1cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yLm1lc3NhZ2UpXHJcbiAgICB9XHJcblxyXG5cclxuICAgIC8v0KHQv9C40YHQvtC6INCy0YHQtdGFINGN0LvQtdC80LXQvdGC0L7QsiDQsiDQvdC+0LLQvtC8INGB0LvQsNC50LTQtVxyXG4gICAgY29uc3QgZnVsbExpc3QgPSBbLi4uZW5hYmxlTGlzdCwgLi4uY29udGludWVMaXN0XVxyXG5cclxuICAgIGF3YWl0IFByb21pc2UuYWxsKFtcclxuICAgICAgICBBcHAuZW5naW5lLkFjdGlvbnNNYW5hZ2VyLkV4ZWN1dGUoZnVsbExpc3QubWFwKGVsID0+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIC4uLmVsLnN0YXRlc1tzbGlkZS51aWRdLFxyXG4gICAgICAgICAgICAgICAgbW9kZWw6IGVsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSwgJ3NsaWRlLmluLmJlZm9yZScpLFxyXG4gICAgICAgIEFwcC5lbmdpbmUuQWN0aW9uc01hbmFnZXIuUnVuKHNsaWRlLmFjdGlvbnMsIHNsaWRlLCAnc2xpZGUuaW4uYmVmb3JlJylcclxuICAgIF0pXHJcbiAgICBhd2FpdCBBcHAuZW5naW5lLkFjdGlvbnNNYW5hZ2VyLkV4ZWN1dGUoZW5hYmxlTGlzdCwgJ2VuYWJsZS5vbicpXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgQXBwLmVuZ2luZS5BY3Rpb25zTWFuYWdlci5FeGVjdXRlKGZ1bGxMaXN0LCAnc2xpZGUuaW4nKSxcclxuICAgICAgICBBcHAuZW5naW5lLkFjdGlvbnNNYW5hZ2VyLlJ1bihzbGlkZS5hY3Rpb25zLCBzbGlkZSwgJ3NsaWRlLmluJylcclxuICAgIF0pXHJcbiAgICBjb25zdCBwcm9tcyA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGZ1bGxMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcHJvbXMucHVzaChBY3RpdmF0ZVN0YXRlKGZ1bGxMaXN0W2ldLCBzbGlkZS51aWQpKVxyXG4gICAgICAgIC8vZnVsbExpc3RbaV0uc3RhdGVzW3NsaWRlLnVpZF0uYWN0aXZhdGUoKVxyXG4gICAgfVxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwocHJvbXMpXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChbXHJcbiAgICAgICAgQXBwLmVuZ2luZS5BY3Rpb25zTWFuYWdlci5FeGVjdXRlKGZ1bGxMaXN0LCAnc2xpZGUuaW4uYWZ0ZXInKSxcclxuICAgICAgICBBcHAuZW5naW5lLkFjdGlvbnNNYW5hZ2VyLlJ1bihzbGlkZS5hY3Rpb25zLCBzbGlkZSwgJ3NsaWRlLmluLmFmdGVyJylcclxuICAgIF0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEFjdGl2YXRlU3RhdGUoZWxlbWVudCwgc2xpZGUpIHtcclxuICAgIGNvbnN0IHsgcG9zaXRpb24sIHJvdGF0aW9uLCBzY2FsZSwgYWN0aW9ucyA9IFtdLCBwcm9wZXJ0aWVzID0ge30sIHZpc2libGUgPSBmYWxzZSwgLi4ucHJvcHMgfSA9IGVsZW1lbnQuc3RhdGVzW3NsaWRlXTtcclxuXHJcbiAgICBpZiAocG9zaXRpb24pXHJcbiAgICAgICAgZWxlbWVudC5wb3NpdGlvbi5jb3B5KHBvc2l0aW9uKVxyXG4gICAgaWYgKHJvdGF0aW9uKVxyXG4gICAgICAgIGVsZW1lbnQucm90YXRpb24uc2V0RnJvbVZlY3RvcjMocm90YXRpb24sIFwiWFlaXCIpXHJcbiAgICBpZiAoc2NhbGUpXHJcbiAgICAgICAgZWxlbWVudC5zY2FsZS5jb3B5KHNjYWxlKVxyXG4gICAgY29uc3QgcHJvbWlzZXMgPSBPYmplY3Qua2V5cyhwcm9wcykubWFwKGFzeW5jIGsgPT4ge1xyXG4gICAgICAgIGNvbnN0IHBhdGhzID0gay5zcGxpdCgnLicpXHJcbiAgICAgICAgY29uc3QgdmFsdWUgPSBwcm9wc1trXVxyXG4gICAgICAgIGxldCBwID0gcGF0aHNbMF1cclxuICAgICAgICBsZXQgdGFyZ2V0ID0gZWxlbWVudFxyXG5cclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W3BhdGhzW2ldXVxyXG4gICAgICAgICAgICAgICAgcCA9IHBhdGhzW2kgKyAxXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRhcmdldFtwXSA9IGF3YWl0IEFwcC5lbmdpbmUuZ2V0RmFjdG9yeSgpLkNyZWF0ZUVsZW1lbnQodmFsdWUpXHJcbiAgICAgICAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGtleTogayB9XHJcbiAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgICAgICAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwga2V5OiBrLCBlcnJvciB9XHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICAvLyDQltC00LXQvCDQt9Cw0LLQtdGA0YjQtdC90LjRjyDQstGB0LXRhSDQv9GA0L7QvNC40YHQvtCyXHJcbiAgICBhd2FpdCBQcm9taXNlLmFsbChwcm9taXNlcylcclxuICAgIGVsZW1lbnQudmlzaWJsZSA9IHZpc2libGVcclxuICAgIC8qT2JqZWN0LmtleXMocHJvcHMpLmZvckVhY2goYXN5bmMgayA9PiB7XHJcbiAgICAgICAgY29uc3QgcGF0aHMgPSBrLnNwbGl0KCcuJylcclxuICAgICAgICBjb25zdCB2YWx1ZSA9IHByb3BzW2tdXHJcbiAgICAgICAgbGV0IHAgPSBwYXRoc1swXVxyXG4gICAgICAgIGxldCB0YXJnZXQgPSBlbGVtZW50XHJcbiAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtwYXRoc1tpXV1cclxuICAgICAgICAgICAgICAgIHAgPSBwYXRoc1tpICsgMV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0YXJnZXRbcF0pXHJcbiAgICAgICAgICAgIHRhcmdldFtwXSA9IGF3YWl0IEFwcC5lbmdpbmUuZ2V0RmFjdG9yeSgpLkNyZWF0ZUVsZW1lbnQodmFsdWUpOy8vIHZhbHVlXHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRhcmdldFtwXSlcclxuICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICAgICAgfVxyXG4gICAgfSkqL1xyXG4gICAgZWxlbWVudC5zdGF0ZSA9IGVsZW1lbnQuc3RhdGVzW3NsaWRlXSB8fCB7XHJcbiAgICAgICAgbW9kZWw6IGVsZW1lbnRcclxuICAgIH1cclxuXHJcbiAgICBjb25zdCB0eXBlRGF0YSA9IEFwcC5lbmdpbmUuRmFjdG9yeS5UcmVlVHlwZXMuZmluZCh0ID0+IHQudHlwZSA9PT0gZWxlbWVudC50eXBlKVxyXG4gICAgaWYgKHR5cGVEYXRhPy5vbmNoYW5nZSkge1xyXG4gICAgICAgIHR5cGVEYXRhLm9uY2hhbmdlKGVsZW1lbnQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIFNsaWRlT3V0KHNsaWRlLCBvbGRTdGF0ZXMsIG5leHRTdGF0ZXMpIHtcclxuICAgIGNvbnN0IGNvbnRpbnVlTGlzdCA9IFtdXHJcbiAgICBjb25zdCBkaXNhYmxlTGlzdCA9IFtdXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IG9sZFN0YXRlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHN0YXRlID0gb2xkU3RhdGVzW2ldXHJcbiAgICAgICAgaWYgKG5leHRTdGF0ZXMuZmluZEluZGV4KHMgPT4gcy51aWQgPT09IHN0YXRlLnVpZCkgPj0gMCkge1xyXG4gICAgICAgICAgICBjb250aW51ZUxpc3QucHVzaChzdGF0ZSlcclxuICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICBkaXNhYmxlTGlzdC5wdXNoKHN0YXRlKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGNvbnN0IGZ1bGxMaXN0ID0gWy4uLmRpc2FibGVMaXN0LCAuLi5jb250aW51ZUxpc3RdXHJcblxyXG4gICAgYXdhaXQgUHJvbWlzZS5hbGwoW1xyXG4gICAgICAgIEFwcC5lbmdpbmUuQWN0aW9uc01hbmFnZXIuRXhlY3V0ZShmdWxsTGlzdCwgJ3NsaWRlLm91dCcpLFxyXG4gICAgICAgIEFwcC5lbmdpbmUuQWN0aW9uc01hbmFnZXIuUnVuKHNsaWRlLmFjdGlvbnMsIHNsaWRlLCAnc2xpZGUub3V0JylcclxuICAgIF0pXHJcblxyXG4gICAgYXdhaXQgQXBwLmVuZ2luZS5BY3Rpb25zTWFuYWdlci5FeGVjdXRlKGRpc2FibGVMaXN0LCAnZGlzYWJsZS5vbicpXHJcblxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkaXNhYmxlTGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIERlY3RpdmF0ZVN0YXRlKGRpc2FibGVMaXN0W2ldLCBzbGlkZSlcclxuICAgICAgICAvL2Rpc2FibGVMaXN0W2ldLmRlYWN0aXZhdGUoKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBEZWN0aXZhdGVTdGF0ZShlbGVtZW50LCBzbGlkZSkge1xyXG4gICAgZWxlbWVudC52aXNpYmxlID0gZmFsc2VcclxufVxyXG5cclxuXHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGxvYWQsIGFkZCwgcmVtb3ZlLCBzYXZlLFxyXG4gICAgYWN0aXZlZDogbnVsbCxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIGdvdG8sXHJcbiAgICBuZXh0KCkge1xyXG4gICAgICAgIGNvbnN0IHNsbnVtID0gX2RhdGEuY2hpbGRyZW4uZmluZEluZGV4KHMgPT4gcy51aWQgPT09IF9kYXRhLmFjdGl2ZWQudWlkKVxyXG4gICAgICAgIGlmIChzbG51bSA+PSBfZGF0YS5jaGlsZHJlbi5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICBfZGF0YS5nb3RvKHNsbnVtICsgMSlcclxuICAgIH0sXHJcbiAgICBiYWNrKCkge1xyXG4gICAgICAgIGNvbnN0IHNsbnVtID0gX2RhdGEuY2hpbGRyZW4uZmluZEluZGV4KHMgPT4gcy51aWQgPT09IF9kYXRhLmFjdGl2ZWQudWlkKVxyXG4gICAgICAgIGlmIChzbG51bSA9PT0gMClcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgX2RhdGEuZ290byhzbG51bSAtIDEpXHJcbiAgICB9LFxyXG4gICAgb246IF9lbW1pdGVyLm9uLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb2ZmOiBfZW1taXRlci5vZmYuYmluZChfZW1taXRlcilcclxufSlcclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9kYXRhIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGZkM2Y5ZGI0MDllNmNmZDE3ZTdcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==