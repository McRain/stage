"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/index.mf.js":
/*!*************************!*\
  !*** ./src/index.mf.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/starfields.js */ "./src/models/starfields.js");
/* harmony import */ var _models_part_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/part.js */ "./src/models/part.js");
/* harmony import */ var _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/cloud.js */ "./src/models/cloud.js");
/* harmony import */ var _models_fire_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/fire.js */ "./src/models/fire.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;






async function Init() {
    console.log("particle")
    if (App.engine.ready) {
        App.engine.Factory.RegisterElement("StarsField", _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Stars Field"
        })
        App.engine.Factory.RegisterElement("PointsField", _models_part_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Points Field"
        })
        App.engine.Factory.RegisterElement("Cloud", _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "Cloud Field"
        })
        App.engine.Factory.RegisterElement("FireParticles", _models_fire_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Fire Field"
        })
        if (!window.isEditor) {
            return
        }

        App.inspector.addToModels(["StarsField"], [
            {
                label: "Speed",
                head: {
                    component: "Float",
                    prop: "speed",
                    props: {
                        step: 0.1, min: 0.1, max: 10.0, decimals: 2,
                    },
                    state: true
                }
            }, {
                label: "Stars",
                head: {
                    component: "Float",
                    prop: "numStars",
                    props: {
                        step: 100, min: 100, max: 100000,
                        decimals: 0,
                    },

                    state: true
                }
            }, {
                label: "Size",
                head: {
                    component: "Float",
                    prop: "size",
                    props: {
                        step: 0.1, min: 0.1, max: 10, decimals: 2,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }, {
                label: "Radius",
                head: {
                    component: "Float",
                    prop: "radius",
                    props: {
                        step: 1, min: 1, max: 100, decimals: 0,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }
        ])

        App.inspector.addToModels(["Cloud"], [
            {
                label: "maxDistance",
                head: {
                    component: "Float",
                    prop: "maxDistance",
                    props: {
                        step: 0.1, min: 0.1, max: 100, decimals: 1,
                    },
                    state: true
                }
            }
        ])
        App.inspector.addToModels(["FireParticles"], [
            {
                label: "Target",
                head: {
                    prop: "emmiter",
                    component: "ElementView",
                    props: {
                        //modelValue: "elementtt"
                    }
                }
            },
            {
                nonstate: true,
                label: "Manage",
                head: {
                    component: "Buttons",
                    props: {
                        buttons: [{
                            label: "Start",
                            handler: (target) => {
                                target.start()
                            }
                        }, {
                            label: "Stop",
                            handler: (target) => {
                                target.stop()
                            }
                        }]
                    },
                    state: true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS42ZjU4Y2ZkMDU1ZDJjZDFkZDYwMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDTDtBQUNMO0FBQ0Y7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVCwwREFBMEQsdURBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Qsb0RBQW9ELHdEQUFLO0FBQ3pEO0FBQ0EsU0FBUztBQUNULDREQUE0RCx1REFBSTtBQUNoRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvaW5kZXgubWYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgU3RhcnNGaWVsZCBmcm9tIFwiLi9tb2RlbHMvc3RhcmZpZWxkcy5qc1wiXHJcbmltcG9ydCBQb2ludHNGaWVsZCBmcm9tIFwiLi9tb2RlbHMvcGFydC5qc1wiXHJcbmltcG9ydCBDbG91ZCBmcm9tIFwiLi9tb2RlbHMvY2xvdWQuanNcIlxyXG5pbXBvcnQgRmlyZSBmcm9tIFwiLi9tb2RlbHMvZmlyZS5qc1wiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gSW5pdCgpIHtcclxuICAgIGNvbnNvbGUubG9nKFwicGFydGljbGVcIilcclxuICAgIGlmIChBcHAuZW5naW5lLnJlYWR5KSB7XHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIlN0YXJzRmllbGRcIiwgU3RhcnNGaWVsZCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJTdGFycyBGaWVsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiUG9pbnRzRmllbGRcIiwgUG9pbnRzRmllbGQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiUG9pbnRzIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDbG91ZFwiLCBDbG91ZCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDbG91ZCBGaWVsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiRmlyZVBhcnRpY2xlc1wiLCBGaXJlLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkZpcmUgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIlN0YXJzRmllbGRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU3BlZWRcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMC4wLCBkZWNpbWFsczogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJzXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJudW1TdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEwMCwgbWluOiAxMDAsIG1heDogMTAwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTaXplXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlYnVpbGRTdGFyZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJyYWRpdXNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLCBtaW46IDEsIG1heDogMTAwLCBkZWNpbWFsczogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9udXBkYXRlKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVidWlsZFN0YXJmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJDbG91ZFwiXSwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJtYXhEaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibWF4RGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjEsIG1pbjogMC4xLCBtYXg6IDEwMCwgZGVjaW1hbHM6IDEsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIkZpcmVQYXJ0aWNsZXNcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVGFyZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJlbW1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkVsZW1lbnRWaWV3XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy9tb2RlbFZhbHVlOiBcImVsZW1lbnR0dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBub25zdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1hbmFnZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJCdXR0b25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RvcFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKHRhcmdldCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdG9wKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBBcHAuZW5naW5lLm9ubG9hZChJbml0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkluaXQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==