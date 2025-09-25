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

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;



async function Init() {
    console.log("particle")
    if (App.engine.ready) {
        App.engine.Factory.RegisterElement("StarsField", _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Stars Field"
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
    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS42MTNiYzRmMTQzNDIzYjA1MGZkYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL2luZGV4Lm1mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0YXJzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3N0YXJmaWVsZHMuanNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhcnRpY2xlXCIpXHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJTdGFyc0ZpZWxkXCIsIFN0YXJzRmllbGQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIlN0YXJzRmllbGRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU3BlZWRcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMC4wLCBkZWNpbWFsczogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJzXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJudW1TdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEwMCwgbWluOiAxMDAsIG1heDogMTAwMDAwLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBkZWNpbWFsczogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG5cclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTaXplXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzaXplXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlYnVpbGRTdGFyZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiUmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJyYWRpdXNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxLCBtaW46IDEsIG1heDogMTAwLCBkZWNpbWFsczogMCxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9udXBkYXRlKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVidWlsZFN0YXJmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQXBwLmVuZ2luZS5vbmxvYWQoSW5pdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5Jbml0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=