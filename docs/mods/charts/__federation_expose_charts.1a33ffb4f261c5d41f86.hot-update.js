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
                        console.log(prop)
                        val = val.map(v => {
                            return {
                                value: v.value,
                                color: v.color.encode()
                            }
                        })
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuMWEzM2ZmYjRmMjYxYzVkNDFmODYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7O0FBQWdDO0FBQ2hDLFlBQVksbURBQWMsSUFBSSx3Q0FBTTtBQUNwQyxDQUEyQztBQUNNO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOERBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5Qyx5REFBb0I7QUFDN0QsaUNBQWlDLHVMQUFrQztBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMuY2hhcnRzLy4vc3JjL2luZGV4Lm1mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IENvbHVtbkNoYXJ0IGZyb20gXCIuL21vZGVscy9jb2x1bW5jaGFydC5qc1wiXHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gSW5pdCgpIHtcclxuICAgIGlmIChBcHAuZW5naW5lLnJlYWR5KSB7XHJcblxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDb2x1bW5DaGFydFwiLCBDb2x1bW5DaGFydCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb2x1bW4gQ2hhcnRcIlxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnZ1ZS5jb21wb25lbnQoJ2NoYXJ0c1VJJywgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vaW5zcGVjdG9yL2NoYXJ0c1VJLnZ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIkNvbHVtbkNoYXJ0XCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1heFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibWF4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmFsdWVzXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcImNoYXJ0c1VJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJ2YWx1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQsIHByb3AsIHZhbCwgc2xpZGUpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2cocHJvcClcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsID0gdmFsLm1hcCh2ID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHYudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sb3I6IHYuY29sb3IuZW5jb2RlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBBcHAuZW5naW5lLm9ubG9hZChJbml0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkluaXQoKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==