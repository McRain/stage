"use strict";
self["webpackHotUpdate_reneos_slider_mods_charts"]("__federation_expose_charts",{

/***/ "./src/index.mf.js":
/*!*************************!*\
  !*** ./src/index.mf.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _models_columnchart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/columnchart.js */ "./src/models/columnchart.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;



async function Init() {
    if (App.engine.ready) {

        App.engine.Factory.RegisterElement("ColumnChart", _models_columnchart_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Column Chart"
        })

        if (!window.isEditor) {
            return
        }

        window.vue.component('chartsUI', (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent)(async () => {
            const module = await __webpack_require__.e(/*! import() */ "src_inspector_chartsUI_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./inspector/chartsUI.vue */ "./src/inspector/chartsUI.vue"));
            return module.default || module;
        }))

        App.inspector.addToModels(["ColumnChart"], [
            {
                label: "Max",
                content: {
                    component: "Float",
                    prop: "max",
                    state: true
                }
            },
            {
                label: "Values",
                content: {
                    component: "chartsUI",
                    prop: "values",
                    state: true,
                    onupdate(target, prop, val, slide) {
                        for (let i = 0; i < val.length; i++) {
                            val[i].color = val[i].color.encode()
                        }
                    }
                }
            }
        ])
    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuOWZkMTI5ODQ0YTQ3M2MwODg3ZWUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2hDLFlBQVksbURBQWMsSUFBSSx3Q0FBTTtBQUNwQyxDQUEyQztBQUNNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOERBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBb0I7QUFDN0QsaUNBQWlDLHVMQUFrQztBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0MsZ0JBQWdCO0FBQ3hEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvaW5kZXgubWYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgQ29sdW1uQ2hhcnQgZnJvbSBcIi4vbW9kZWxzL2NvbHVtbmNoYXJ0LmpzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0KCkge1xyXG4gICAgaWYgKEFwcC5lbmdpbmUucmVhZHkpIHtcclxuXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkNvbHVtbkNoYXJ0XCIsIENvbHVtbkNoYXJ0LCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNvbHVtbiBDaGFydFwiXHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudnVlLmNvbXBvbmVudCgnY2hhcnRzVUknLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9pbnNwZWN0b3IvY2hhcnRzVUkudnVlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ29sdW1uQ2hhcnRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTWF4XCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJtYXhcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJWYWx1ZXNcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiY2hhcnRzVUlcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInZhbHVlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9udXBkYXRlKHRhcmdldCwgcHJvcCwgdmFsLCBzbGlkZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHZhbC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsW2ldLmNvbG9yID0gdmFsW2ldLmNvbG9yLmVuY29kZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBBcHAuZW5naW5lLm9ubG9hZChJbml0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkluaXQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==