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
/* harmony import */ var _models_chartColumn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/chartColumn.js */ "./src/models/chartColumn.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;




async function Init() {
    if (App.engine.ready) {

        App.engine.Factory.RegisterElement("ColumnChart", _models_columnchart_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Column Chart"
        })
        App.engine.Factory.RegisterElement("ChartColumn", _models_chartColumn_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Chart column",
            hided: true
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
                    state: false,
                    onupdate(target, prop, val, slideUID) {
                        target.states[slideUID][prop] = JSON.parse(JSON.stringify(val))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuOGI5ZDhhZGRhZGJkYmQ1ZmY1YmYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBMkM7QUFDTTtBQUNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOERBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1QsMERBQTBELDhEQUFXO0FBQ3JFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQW9CO0FBQzdELGlDQUFpQyx1TEFBa0M7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvaW5kZXgubWYuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgQ29sdW1uQ2hhcnQgZnJvbSBcIi4vbW9kZWxzL2NvbHVtbmNoYXJ0LmpzXCJcclxuaW1wb3J0IENoYXJ0Q29sdW1uIGZyb20gXCIuL21vZGVscy9jaGFydENvbHVtbi5qc1wiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG5cclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiQ29sdW1uQ2hhcnRcIiwgQ29sdW1uQ2hhcnQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29sdW1uIENoYXJ0XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDaGFydENvbHVtblwiLCBDaGFydENvbHVtbiwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDaGFydCBjb2x1bW5cIixcclxuICAgICAgICAgICAgaGlkZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnZ1ZS5jb21wb25lbnQoJ2NoYXJ0c1VJJywgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vaW5zcGVjdG9yL2NoYXJ0c1VJLnZ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIkNvbHVtbkNoYXJ0XCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1heFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibWF4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmFsdWVzXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcImNoYXJ0c1VJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJ2YWx1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICAgICAgb251cGRhdGUodGFyZ2V0LCBwcm9wLCB2YWwsIHNsaWRlVUlEKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5zdGF0ZXNbc2xpZGVVSURdW3Byb3BdID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeSh2YWwpKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9