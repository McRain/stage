"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=style&index=0&id=5d976506&lang=scss&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=style&index=0&id=5d976506&lang=scss&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1759070717471
        var cssReload = __webpack_require__(/*! ../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
        // only invalidate when locals change
        if (
          module.hot.data &&
          module.hot.data.value &&
          module.hot.data.value !== localsJsonString
        ) {
          module.hot.invalidate();
        } else {
          module.hot.accept();
        }
        module.hot.dispose(function(data) {
          data.value = localsJsonString;
          cssReload();
        });
      })();
    }
  

/***/ }),

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=script&lang=js":
/*!********************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=script&lang=js ***!
  \********************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "LabelEditor",
  props: {
    modelValue: {
      type: String,
      default: ""
    },
    label: {
      type: String,
      default: ""
    },
    tooltip: {
      type: String,
      default: ""
    }
  },
  data: () => ({
    editMode: false,
    val: ""
  }),
  watch: {
    modelValue() {
      this.editMode = false
    }
  },
  methods: {
    startEdit() {
      this.val = this.modelValue;
      this.editMode = true;
      this.$nextTick(() => {
        this.$refs.editInput.focus();
      });
    },
    complete(event) {
      if (event) {
        event.preventDefault(); // Предотвращаем действие по умолчанию
      }
      this.$emit('update:modelValue', this.val);
      this.editMode = false
    },
    endEdit() {
      if (this.editMode) {
        this.editMode = false
        return this.val
      }
      return this.modelValue
    }
  },
  mounted() {

  }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=template&id=5d976506&scoped=true":
/*!************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/inspector/labeledit.vue?vue&type=template&id=5d976506&scoped=true ***!
  \************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "block_container" }
const _hoisted_2 = {
  key: 0,
  class: "editrow"
}
const _hoisted_3 = { class: "label" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon")
  const _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_1, [
      (_ctx.editMode)
        ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
              ref: "editInput",
              class: "editinput",
              "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => ((_ctx.val) = $event)),
              onKeyup: _cache[1] || (_cache[1] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.withKeys)((...args) => ($options.complete && $options.complete(...args)), ["enter"]))
            }, null, 544 /* NEED_HYDRATION, NEED_PATCH */), [
              [vue__WEBPACK_IMPORTED_MODULE_0__.vModelText, _ctx.val]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
              class: "okicon",
              value: "checkmark",
              size: "1em",
              onClick: $options.complete
            }, null, 8 /* PROPS */, ["onClick"])
          ]))
        : (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
            class: "editrow",
            onClick: _cache[2] || (_cache[2] = (...args) => ($options.startEdit && $options.startEdit(...args))),
            key: 'tooltip-' + $props.modelValue
          }, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.modelValue), 1 /* TEXT */),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
              value: "pencil",
              size: "1em"
            })
          ])), [
            [_directive_tooltip, $props.tooltip || $props.modelValue]
          ])
    ])
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("61878cdbd38b1d58f8d8")
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"@reneos/app": [{	version: "1.0.6",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/@reneos/app/index.js */ "./node_modules/@reneos/app/index.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"requiredVersion":"1.0.6","singleton":true,"layer":null}},],	"three": [{	version: "0.180.0",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.22",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44ZTkzNzBiYjNlMWI3MjhlM2UxOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLCtKQUFnRixlQUFlO0FBQy9IO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7QUNMQSxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7SUFDWixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNaLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztJQUNaO0VBQ0YsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUM7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDZixDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7RUFDUixDQUFDLENBQUM7RUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEI7RUFDRixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtRQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQzlCLENBQUMsQ0FBQztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNkLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQy9EO01BQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUN6QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDUixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNoQjtNQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN2QjtFQUNGLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTs7RUFFVjtBQUNGLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkFuRU8sS0FBSyxFQUFDLGlCQUFpQjs7O0VBQ3JCLEtBQUssRUFBQyxTQUFTOztxQkFNWixLQUFLLEVBQUMsT0FBTzs7Ozs7OzREQVJ6Qix3REFjTTtJQWJKLHdEQVlNLE9BWk4sVUFZTTtPQVh1QkEsYUFBUTs2REFBbkMsd0RBR00sT0FITixVQUdNO2dFQUZKLHdEQUFpRjtjQUExRSxHQUFHLEVBQUMsV0FBVztjQUFDLEtBQUssRUFBQyxXQUFXOzJFQUFVQyxRQUFHO2NBQUcsT0FBSyx3RkFBUSwrQ0FBUTs7NERBQTNCQSxRQUFHOztZQUNyRCxpREFBMkU7Y0FBckUsS0FBSyxFQUFDLFFBQVE7Y0FBQyxLQUFLLEVBQUMsV0FBVztjQUFDLElBQUksRUFBQyxLQUFLO2NBQUUsT0FBSyxFQUFFLGlCQUFROzs7aUhBR3BFLHdEQUdNO1lBSEQsS0FBSyxFQUFDLFNBQVM7WUFBUyxPQUFLLDBDQUFFLGlEQUFTO1lBQUcsR0FBRyxlQUFlLGlCQUFVOztZQUMxRSx3REFBMkMsUUFBM0MsVUFBMkMsdURBQXBCLGlCQUFVO1lBQ2pDLGlEQUF1QztjQUFqQyxLQUFLLEVBQUMsUUFBUTtjQUFDLElBQUksRUFBQyxLQUFLOzs7aUNBRndELGNBQU8sSUFBSSxpQkFBVTs7Ozs7Ozs7Ozs7O1VDUnBILHNEOzs7OztVQ0FBLHNEQUFzRCxrQkFBa0I7VUFDeEU7VUFDQTtVQUNBLGdCQUFnQixzRUFBc0UsZ0JBQWdCO1VBQ3RHO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDLGNBQWM7VUFDMUU7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEM7VUFDNUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSwwREFBMEQ7VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL2luc3BlY3Rvci9sYWJlbGVkaXQudnVlPzI5ZWIiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvaW5zcGVjdG9yL2xhYmVsZWRpdC52dWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc1OTA3MDcxNzQ3MVxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiPHRlbXBsYXRlPlxuICA8ZGl2PlxuICAgIDxkaXYgY2xhc3M9XCJibG9ja19jb250YWluZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJlZGl0cm93XCIgdi1pZj1cImVkaXRNb2RlXCI+XG4gICAgICAgIDxpbnB1dCByZWY9XCJlZGl0SW5wdXRcIiBjbGFzcz1cImVkaXRpbnB1dFwiIHYtbW9kZWw9XCJ2YWxcIiBAa2V5dXAuZW50ZXI9XCJjb21wbGV0ZVwiIC8+XG4gICAgICAgIDxpY29uIGNsYXNzPVwib2tpY29uXCIgdmFsdWU9XCJjaGVja21hcmtcIiBzaXplPVwiMWVtXCIgQGNsaWNrPVwiY29tcGxldGVcIj48L2ljb24+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImVkaXRyb3dcIiB2LWVsc2UgQGNsaWNrPVwic3RhcnRFZGl0XCIgOmtleT1cIid0b29sdGlwLScgKyBtb2RlbFZhbHVlXCIgdi10b29sdGlwPVwidG9vbHRpcCB8fCBtb2RlbFZhbHVlXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibGFiZWxcIj57eyBtb2RlbFZhbHVlIH19PC9zcGFuPlxuICAgICAgICA8aWNvbiB2YWx1ZT1cInBlbmNpbFwiIHNpemU9XCIxZW1cIj48L2ljb24+XG4gICAgICA8L2Rpdj5cblxuXG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC90ZW1wbGF0ZT5cbjxzY3JpcHQ+XG5leHBvcnQgZGVmYXVsdCB7XG4gIG5hbWU6IFwiTGFiZWxFZGl0b3JcIixcbiAgcHJvcHM6IHtcbiAgICBtb2RlbFZhbHVlOiB7XG4gICAgICB0eXBlOiBTdHJpbmcsXG4gICAgICBkZWZhdWx0OiBcIlwiXG4gICAgfSxcbiAgICBsYWJlbDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH0sXG4gICAgdG9vbHRpcDoge1xuICAgICAgdHlwZTogU3RyaW5nLFxuICAgICAgZGVmYXVsdDogXCJcIlxuICAgIH1cbiAgfSxcbiAgZGF0YTogKCkgPT4gKHtcbiAgICBlZGl0TW9kZTogZmFsc2UsXG4gICAgdmFsOiBcIlwiXG4gIH0pLFxuICB3YXRjaDoge1xuICAgIG1vZGVsVmFsdWUoKSB7XG4gICAgICB0aGlzLmVkaXRNb2RlID0gZmFsc2VcbiAgICB9XG4gIH0sXG4gIG1ldGhvZHM6IHtcbiAgICBzdGFydEVkaXQoKSB7XG4gICAgICB0aGlzLnZhbCA9IHRoaXMubW9kZWxWYWx1ZTtcbiAgICAgIHRoaXMuZWRpdE1vZGUgPSB0cnVlO1xuICAgICAgdGhpcy4kbmV4dFRpY2soKCkgPT4ge1xuICAgICAgICB0aGlzLiRyZWZzLmVkaXRJbnB1dC5mb2N1cygpO1xuICAgICAgfSk7XG4gICAgfSxcbiAgICBjb21wbGV0ZShldmVudCkge1xuICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7IC8vINCf0YDQtdC00L7RgtCy0YDQsNGJ0LDQtdC8INC00LXQudGB0YLQstC40LUg0L/QviDRg9C80L7Qu9GH0LDQvdC40Y5cbiAgICAgIH1cbiAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdGhpcy52YWwpO1xuICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlXG4gICAgfSxcbiAgICBlbmRFZGl0KCkge1xuICAgICAgaWYgKHRoaXMuZWRpdE1vZGUpIHtcbiAgICAgICAgdGhpcy5lZGl0TW9kZSA9IGZhbHNlXG4gICAgICAgIHJldHVybiB0aGlzLnZhbFxuICAgICAgfVxuICAgICAgcmV0dXJuIHRoaXMubW9kZWxWYWx1ZVxuICAgIH1cbiAgfSxcbiAgbW91bnRlZCgpIHtcblxuICB9XG59O1xuPC9zY3JpcHQ+XG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XG4uYmxvY2tfY29udGFpbmVyIHtcbiAgd2lkdGg6IDEwMCU7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGZsZXgtd3JhcDogbm93cmFwO1xuICBnYXA6IDVweDtcblxuICAuZWRpdHJvdyB7XG4gICAgZGlzcGxheTogZ3JpZDtcbiAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IDFmciAyMHB4O1xuICAgIHdpZHRoOiAxMDAlO1xuICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgZ2FwOiA1cHg7XG5cbiAgICBib3JkZXI6IDFweCBzb2xpZCBibGFjaztcblxuICAgIC8vIHtcbiAgICAvKndpZHRoOiAxMDAlOyovXG4gICAgLy99XG5cbiAgICAubGFiZWwge1xuICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xuICAgICAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcbiAgICB9XG4gIH1cblxuXG5cbiAgc3ZnIHtcbiAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgZmxleC1zaHJpbms6IDA7XG5cbiAgfVxufVxuXG5cblxuLm9raWNvbiB7XG4gIGZsZXgtc2hyaW5rOiAwO1xufVxuXG4uZWRpdGlucHV0IHtcbiAgZmxleDogMTtcbiAgbWluLXdpZHRoOiAwO1xuICAvKiDQntGH0LXQvdGMINCy0LDQttC90L4hICovXG4gIGhlaWdodDogMTJweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgLyog0JTQvtCx0LDQstGM0YLQtSDRjdGC0L4gKi9cbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XG4gIC8qINCU0L7QsdCw0LLRjNGC0LUg0Y3RgtC+ICovXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XG4gIC8qINCU0L7QsdCw0LLRjNGC0LUg0Y3RgtC+ICovXG59XG48L3N0eWxlPiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjYxODc4Y2RiZDM4YjFkNThmOGQ4XCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjJcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOlsiZWRpdE1vZGUiLCJ2YWwiXSwic291cmNlUm9vdCI6IiJ9