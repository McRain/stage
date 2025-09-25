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
/* harmony import */ var _module_federation_runtime__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @module-federation/runtime */ "./node_modules/@module-federation/runtime/dist/index.esm.js");
/* harmony import */ var _styles_app_scss__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/app.scss */ "./src/styles/app.scss");
/* harmony import */ var _directives_tooltip_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./directives/tooltip.js */ "./src/directives/tooltip.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__
;



//import gqlc from "@reneos/gqlc"


console.log("development")
if (false)
  // removed by dead control flow
{}

//console.log = ()=>{}
;(0,_module_federation_runtime__WEBPACK_IMPORTED_MODULE_5__.createInstance)({
  name: 'slider.editor',
  remotes: []
})

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

app.directive('tooltip', _directives_tooltip_js__WEBPACK_IMPORTED_MODULE_7__["default"]);

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
/******/ 	__webpack_require__.h = () => ("b386561db1d112cb1533")
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iODZmMzRlMTg2Mjg5YjA3M2Y3NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFxRDtBQUNwQjtBQUNEO0FBQ2hDLFlBQVksbURBQWMsSUFBSSx3Q0FBTTtBQUNwQyxDQUFvRDtBQUNkO0FBQ3NCO0FBQ2xDO0FBQzFCO0FBQ0E7QUFDdUQ7QUFDdkQsWUFBWSxhQUFvQjtBQUNoQyxJQUFJLEtBQXFDO0FBQ3pDLEVBQUU7QUFBQSxFQUF1QjtBQUN6QjtBQUNBO0FBQ0EsMkVBQWM7QUFDZDtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsQ0FBQztBQUNEO0FBQ0EseUJBQXlCLDhDQUFTLENBQUMsZ0RBQVM7QUFDNUM7QUFDQTtBQUNBLDhDQUE4QywwQ0FBSTtBQUNsRCxDQUFDO0FBQ0Q7QUFDQSxZQUFZLGtEQUFVO0FBQ3RCLG1CQUFtQixrREFBVTtBQUM3QixDQUFDO0FBQ0Q7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDhEQUFnQjtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdEQUFnRCxtQkFBbUI7QUFDbkU7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEdBQUc7QUFDSCxDQUFDO0FBQ0Q7Ozs7Ozs7OztVQ3pEQSxzRCIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9tYWluLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlQXBwLCBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IEFwcExheW91dCBmcm9tICcuL0FwcC52dWUnXHJcbmltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCAqIGFzIENvbXBvbmVudHMgZnJvbSBcIi4vY29tcG9uZW50cy9nbG9iYWwuanNcIlxyXG5pbXBvcnQgKiBhcyBBcHBzIGZyb20gXCIuL2FwcC9pbmRleC5qc1wiXHJcbmltcG9ydCB7IGNyZWF0ZUluc3RhbmNlIH0gZnJvbSAnQG1vZHVsZS1mZWRlcmF0aW9uL3J1bnRpbWUnO1xyXG5pbXBvcnQgXCJAL3N0eWxlcy9hcHAuc2Nzc1wiXHJcbi8vaW1wb3J0IGdxbGMgZnJvbSBcIkByZW5lb3MvZ3FsY1wiXHJcblxyXG5pbXBvcnQgVG9vbHRpcERpcmVjdGl2ZSBmcm9tICcuL2RpcmVjdGl2ZXMvdG9vbHRpcC5qcyc7XHJcbmNvbnNvbGUubG9nKHByb2Nlc3MuZW52Lk5PREVfRU5WKVxyXG5pZiAocHJvY2Vzcy5lbnYuTk9ERV9FTlYgPT09ICdwcm9kdWN0aW9uJylcclxuICBjb25zb2xlLmxvZyA9ICgpID0+IHsgfVxyXG5cclxuLy9jb25zb2xlLmxvZyA9ICgpPT57fVxyXG5jcmVhdGVJbnN0YW5jZSh7XHJcbiAgbmFtZTogJ3NsaWRlci5lZGl0b3InLFxyXG4gIHJlbW90ZXM6IFtdXHJcbn0pXHJcblxyXG4vKmNvbnN0IEFwaSA9IGdxbGMuSW5pdCh7XHJcbiAgXCJtZXRob2RcIjogXCJwb3N0XCIsXHJcbiAgXCJjcmVkZW50aWFsc1wiOiBcImluY2x1ZGVcIixcclxuICBcImhlYWRlcnNcIjoge30sXHJcbiAgXCJ1cmxcIjogXCIvYXBpXCJcclxufSkqL1xyXG5cclxuY29uc3QgYXBwID0gd2luZG93LnZ1ZSA9IGNyZWF0ZUFwcChBcHBMYXlvdXQpO1xyXG5cclxuYXBwLnVzZSh2dWUgPT4ge1xyXG4gIHZ1ZS5jb25maWcuZ2xvYmFsUHJvcGVydGllcy4kYXBwID0gQXBwLkluaXQoQXBwcylcclxufSlcclxuXHJcbk9iamVjdC5rZXlzKENvbXBvbmVudHMpLmZvckVhY2goayA9PiB7XHJcbiAgYXBwLmNvbXBvbmVudChrLCBDb21wb25lbnRzW2tdKVxyXG59KVxyXG5cclxuYXBwLnByb3ZpZGUoJ2dsb2JhbENvbXBvbmVudHMnLCBhcHAuX2NvbnRleHQuY29tcG9uZW50cyk7XHJcblxyXG5hcHAuZGlyZWN0aXZlKCd0b29sdGlwJywgVG9vbHRpcERpcmVjdGl2ZSk7XHJcblxyXG5hcHAubW91bnQoJyNhcHAnKTtcclxuXHJcbndpbmRvdy5pc0VkaXRvciA9IHRydWVcclxuXHJcbi8qaWYgKCdzZXJ2aWNlV29ya2VyJyBpbiBuYXZpZ2F0b3IpIHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcignbG9hZCcsICgpID0+IHtcclxuICAgIG5hdmlnYXRvci5zZXJ2aWNlV29ya2VyLnJlZ2lzdGVyKCdzdy5qcycsIHsgc2NvcGU6ICcvZWRpdG9yLycgfSlcclxuICAgICAgLnRoZW4ocmVnaXN0cmF0aW9uID0+IHtcclxuICAgICAgICAvL2NvbnNvbGUubG9nKCdTVyByZWdpc3RlcmVkOicsIHJlZ2lzdHJhdGlvbi5zY29wZSk7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5jYXRjaChlcnJvciA9PiB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcignU1cgZmFpbGVkOicsIGVycm9yKTtcclxuICAgICAgfSk7XHJcbiAgfSk7XHJcbn0qL1xyXG5cclxuIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYjM4NjU2MWRiMWQxMTJjYjE1MzNcIikiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=