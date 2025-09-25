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


    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4yMmU5YjljMWY0YTk3MDA1ZmJiMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE0iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL2luZGV4Lm1mLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0YXJzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3N0YXJmaWVsZHMuanNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhcnRpY2xlXCIpXHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJTdGFyc0ZpZWxkXCIsIFN0YXJzRmllbGQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9