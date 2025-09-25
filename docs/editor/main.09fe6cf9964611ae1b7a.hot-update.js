"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/main.js":
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _App_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./App.vue */ "./src/App.vue");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _components_global_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/global.js */ "./src/components/global.js");
/* harmony import */ var _app_index_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./app/index.js */ "./src/app/index.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _directives_tooltip_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./directives/tooltip.js */ "./src/directives/tooltip.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__
;



//import gqlc from "@reneos/gqlc"


console.log("development")
if (false)
  // removed by dead control flow
{}

//console.log = ()=>{}

/*const Api = gqlc.Init({
  "method": "post",
  "credentials": "include",
  "headers": {},
  "url": "/api"
})*/

const app = window.vue = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createApp)(_App_vue__WEBPACK_IMPORTED_MODULE_1__["default"]);

app.use(vue => {
  vue.config.globalProperties.$app = App.Init(_app_index_js__WEBPACK_IMPORTED_MODULE_4__)
})

Object.keys(_components_global_js__WEBPACK_IMPORTED_MODULE_3__).forEach(k => {
  app.component(k, _components_global_js__WEBPACK_IMPORTED_MODULE_3__[k])
})

app.provide('globalComponents', app._context.components);

app.directive('tooltip', _directives_tooltip_js__WEBPACK_IMPORTED_MODULE_6__["default"]);

app.mount('#app');

window.isEditor = true

/*if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('sw.js', { scope: '/editor/' })
      .then(registration => {
        //console.log('SW registered:', registration.scope);
      })
      .catch(error => {
        console.error('SW failed:', error);
      });
  });
}*/



/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("941fe6ddccc76e598253")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4wOWZlNmNmOTk2NDYxMWFlMWI3YS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFEO0FBQ3BCO0FBQ0Q7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQW9EO0FBQ2Q7QUFDdEM7QUFDMEI7QUFDMUI7QUFDQTtBQUN1RDtBQUN2RCxZQUFZLGFBQW9CO0FBQ2hDLElBQUksS0FBcUM7QUFDekMsRUFBRTtBQUFBLEVBQXVCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLENBQUM7QUFDRDtBQUNBLHlCQUF5Qiw4Q0FBUyxDQUFDLGdEQUFTO0FBQzVDO0FBQ0E7QUFDQSw4Q0FBOEMsMENBQUk7QUFDbEQsQ0FBQztBQUNEO0FBQ0EsWUFBWSxrREFBVTtBQUN0QixtQkFBbUIsa0RBQVU7QUFDN0IsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBLHlCQUF5Qiw4REFBZ0I7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnREFBZ0QsbUJBQW1CO0FBQ25FO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLE9BQU87QUFDUCxHQUFHO0FBQ0gsQ0FBQztBQUNEOzs7Ozs7Ozs7VUNyREEsc0QiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvbWFpbi5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZUFwcCwgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnXHJcbmltcG9ydCBBcHBMYXlvdXQgZnJvbSAnLi9BcHAudnVlJ1xyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgKiBhcyBDb21wb25lbnRzIGZyb20gXCIuL2NvbXBvbmVudHMvZ2xvYmFsLmpzXCJcclxuaW1wb3J0ICogYXMgQXBwcyBmcm9tIFwiLi9hcHAvaW5kZXguanNcIlxyXG5cclxuaW1wb3J0IFwiQC9zdHlsZXMvYXBwLnNjc3NcIlxyXG4vL2ltcG9ydCBncWxjIGZyb20gXCJAcmVuZW9zL2dxbGNcIlxyXG5cclxuaW1wb3J0IFRvb2x0aXBEaXJlY3RpdmUgZnJvbSAnLi9kaXJlY3RpdmVzL3Rvb2x0aXAuanMnO1xyXG5jb25zb2xlLmxvZyhwcm9jZXNzLmVudi5OT0RFX0VOVilcclxuaWYgKHByb2Nlc3MuZW52Lk5PREVfRU5WID09PSAncHJvZHVjdGlvbicpXHJcbiAgY29uc29sZS5sb2cgPSAoKSA9PiB7IH1cclxuXHJcbi8vY29uc29sZS5sb2cgPSAoKT0+e31cclxuXHJcbi8qY29uc3QgQXBpID0gZ3FsYy5Jbml0KHtcclxuICBcIm1ldGhvZFwiOiBcInBvc3RcIixcclxuICBcImNyZWRlbnRpYWxzXCI6IFwiaW5jbHVkZVwiLFxyXG4gIFwiaGVhZGVyc1wiOiB7fSxcclxuICBcInVybFwiOiBcIi9hcGlcIlxyXG59KSovXHJcblxyXG5jb25zdCBhcHAgPSB3aW5kb3cudnVlID0gY3JlYXRlQXBwKEFwcExheW91dCk7XHJcblxyXG5hcHAudXNlKHZ1ZSA9PiB7XHJcbiAgdnVlLmNvbmZpZy5nbG9iYWxQcm9wZXJ0aWVzLiRhcHAgPSBBcHAuSW5pdChBcHBzKVxyXG59KVxyXG5cclxuT2JqZWN0LmtleXMoQ29tcG9uZW50cykuZm9yRWFjaChrID0+IHtcclxuICBhcHAuY29tcG9uZW50KGssIENvbXBvbmVudHNba10pXHJcbn0pXHJcblxyXG5hcHAucHJvdmlkZSgnZ2xvYmFsQ29tcG9uZW50cycsIGFwcC5fY29udGV4dC5jb21wb25lbnRzKTtcclxuXHJcbmFwcC5kaXJlY3RpdmUoJ3Rvb2x0aXAnLCBUb29sdGlwRGlyZWN0aXZlKTtcclxuXHJcbmFwcC5tb3VudCgnI2FwcCcpO1xyXG5cclxud2luZG93LmlzRWRpdG9yID0gdHJ1ZVxyXG5cclxuLyppZiAoJ3NlcnZpY2VXb3JrZXInIGluIG5hdmlnYXRvcikge1xyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdsb2FkJywgKCkgPT4ge1xyXG4gICAgbmF2aWdhdG9yLnNlcnZpY2VXb3JrZXIucmVnaXN0ZXIoJ3N3LmpzJywgeyBzY29wZTogJy9lZGl0b3IvJyB9KVxyXG4gICAgICAudGhlbihyZWdpc3RyYXRpb24gPT4ge1xyXG4gICAgICAgIC8vY29uc29sZS5sb2coJ1NXIHJlZ2lzdGVyZWQ6JywgcmVnaXN0cmF0aW9uLnNjb3BlKTtcclxuICAgICAgfSlcclxuICAgICAgLmNhdGNoKGVycm9yID0+IHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCdTVyBmYWlsZWQ6JywgZXJyb3IpO1xyXG4gICAgICB9KTtcclxuICB9KTtcclxufSovXHJcblxyXG4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5NDFmZTZkZGNjYzc2ZTU5ODI1M1wiKSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==