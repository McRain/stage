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
                        return true
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuZThlNTQyNTliOGNkNDNhYTNlYjguaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBMkM7QUFDTTtBQUNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOERBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1QsMERBQTBELDhEQUFXO0FBQ3JFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQW9CO0FBQzdELGlDQUFpQyx1TEFBa0M7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9pbmRleC5tZi5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBDb2x1bW5DaGFydCBmcm9tIFwiLi9tb2RlbHMvY29sdW1uY2hhcnQuanNcIlxyXG5pbXBvcnQgQ2hhcnRDb2x1bW4gZnJvbSBcIi4vbW9kZWxzL2NoYXJ0Q29sdW1uLmpzXCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gSW5pdCgpIHtcclxuICAgIGlmIChBcHAuZW5naW5lLnJlYWR5KSB7XHJcblxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDb2x1bW5DaGFydFwiLCBDb2x1bW5DaGFydCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb2x1bW4gQ2hhcnRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkNoYXJ0Q29sdW1uXCIsIENoYXJ0Q29sdW1uLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNoYXJ0IGNvbHVtblwiLFxyXG4gICAgICAgICAgICBoaWRlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudnVlLmNvbXBvbmVudCgnY2hhcnRzVUknLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9pbnNwZWN0b3IvY2hhcnRzVUkudnVlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ29sdW1uQ2hhcnRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTWF4XCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJtYXhcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJWYWx1ZXNcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiY2hhcnRzVUlcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInZhbHVlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQsIHByb3AsIHZhbCwgc2xpZGVVSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0YXRlc1tzbGlkZVVJRF1bcHJvcF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQXBwLmVuZ2luZS5vbmxvYWQoSW5pdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5Jbml0KCkiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=