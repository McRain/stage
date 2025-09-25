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

                    state: true
                }
            }, {
                label: "Radius",
                head: {
                    component: "Float",
                    prop: "radius",
                    props: {
                        step: 1, min: 1, max: 100, decimals: 0,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5mMGEyYWU3NmViOGYzMzk1MDE5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9pbmRleC5tZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBTdGFyc0ZpZWxkIGZyb20gXCIuL21vZGVscy9zdGFyZmllbGRzLmpzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXJ0aWNsZVwiKVxyXG4gICAgaWYgKEFwcC5lbmdpbmUucmVhZHkpIHtcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiU3RhcnNGaWVsZFwiLCBTdGFyc0ZpZWxkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJzIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJTdGFyc0ZpZWxkXCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAuMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibnVtU3RhcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxMDAsIG1pbjogMTAwLCBtYXg6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAsIGRlY2ltYWxzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJhZGl1c1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwicmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSwgbWluOiAxLCBtYXg6IDEwMCwgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9