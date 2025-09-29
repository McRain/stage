"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=style&index=0&id=68f77ecd&lang=css":
/*!***********************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=style&index=0&id=68f77ecd&lang=css ***!
  \***********************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1759081206501
        var cssReload = __webpack_require__(/*! ../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
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

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=template&id=68f77ecd":
/*!*********************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=template&id=68f77ecd ***!
  \*********************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = {
  key: 0,
  class: "element"
}
const _hoisted_2 = ["onClick"]
const _hoisted_3 = {
  key: 1,
  class: "label"
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon")
  const _component_InspectorPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("InspectorPanel")
  const _component_ViewPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ViewPanel")
  const _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ViewPanel, {
      class: "inspector",
      header: { label: 'Инспектор' }
    }, {
      footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <SceneTools></SceneTools> ")
      ]),
      default: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        ($options.selectedUID)
          ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div>{{ selected.paths.join('->') }}</div> "),
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default", {}, () => [
                ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.blocks, (cmp, index) => {
                  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_InspectorPanel, {
                    label: cmp.label,
                    tooltip: cmp.tooltip,
                    stat: cmp.state,
                    key: cmp.label
                  }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.createSlots)({ _: 2 /* DYNAMIC */ }, [
                    (!cmp.readonly)
                      ? {
                          name: "icons",
                          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ stat }) => [
                            (!cmp.nonstate)
                              ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                                  key: 0,
                                  onClick: $event => ($options.onCleanStateValue(cmp.head || cmp.content, cmp.head ? cmp.head.prop : cmp.content.prop)),
                                  class: "remove-icon"
                                }, [
                                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, { value: "bin" })
                                ], 8 /* PROPS */, _hoisted_2)), [
                                  [_directive_tooltip, 'Очистить значение в слайде']
                                ])
                              : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
                          ]),
                          key: "0"
                        }
                      : undefined,
                    (cmp.head)
                      ? {
                          name: "head",
                          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(cmp.head.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ ref_for: true }, cmp.head.props, {
                              modelValue: $options.selected[cmp.head.prop],
                              "onUpdate:modelValue": [$event => (($options.selected[cmp.head.prop]) = $event), (...args) => $options.setTargetProperty(cmp.head, cmp.head.prop, ...args)],
                              value: $options.selected,
                              property: cmp.head,
                              target: cmp.head.state ? $options.getState() : $options.selected,
                              onClean: (...args) => $options.onCleanStateValue(cmp.head, ...args),
                              onSave: $event => ($options.saveElement(cmp.head)),
                              "onUpdate:target": (...args) => $options.setTargetProperty(cmp.head, ...args),
                              "onUpdate:value": (...args) => $options.onComponentChanged(cmp.head, cmp.head.prop, ...args)
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(cmp.head.events || {})), null, 16 /* FULL_PROPS */, ["modelValue", "onUpdate:modelValue", "value", "property", "target", "onClean", "onSave", "onUpdate:target", "onUpdate:value"]))
                          ]),
                          key: "1"
                        }
                      : undefined,
                    (cmp.content)
                      ? {
                          name: "content",
                          fn: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
                            ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)((0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDynamicComponent)(cmp.content.component), (0,vue__WEBPACK_IMPORTED_MODULE_0__.mergeProps)({ class: "blockcomponent" }, { ref_for: true }, cmp.content.props, {
                              value: $options.selected,
                              modelValue: $options.selected[cmp.content.prop],
                              "onUpdate:modelValue": [$event => (($options.selected[cmp.content.prop]) = $event), (...args) => $options.setTargetProperty(cmp.content, cmp.content.prop, ...args)],
                              property: cmp.content,
                              target: cmp.content.state ? $options.getState() : $options.selected,
                              onClean: (...args) => $options.onCleanStateValue(cmp.content, ...args),
                              onSave: $event => ($options.saveElement(cmp.content)),
                              "onUpdate:target": (...args) => $options.setTargetProperty(cmp.content, ...args),
                              "onUpdate:value": (...args) => $options.onComponentChanged(cmp.content, cmp.content.prop, ...args)
                            }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toHandlers)(cmp.content.events || {})), null, 16 /* FULL_PROPS */, ["value", "modelValue", "onUpdate:modelValue", "property", "target", "onClean", "onSave", "onUpdate:target", "onUpdate:value"]))
                          ]),
                          key: "2"
                        }
                      : undefined
                  ]), 1032 /* PROPS, DYNAMIC_SLOTS */, ["label", "tooltip", "stat"]))
                }), 128 /* KEYED_FRAGMENT */))
              ])
            ]))
          : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, " Select an item or state "))
      ]),
      _: 3 /* FORWARDED */
    }),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"panel-container\">\r\n        <div class=\"panel\">\r\n            <div class=\"header\">Inspector</div>\r\n            <div class=\"content\">\r\n                \r\n            </div>\r\n            <div class=\"footer\">\r\n\r\n            </div>\r\n        </div>\r\n    </div> ")
  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("efc99787c27e6b7082ff")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5kMjU1OTQzNjdkZWVlZjQ3NjBhYS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztFQ3JCZ0MsS0FBSyxFQUFDLFNBQVM7Ozs7O0VBdUNsQyxLQUFLLEVBQUMsT0FBTzs7Ozs7Ozs7OztJQXhDdEIsaURBOENZO01BOUNELEtBQUssRUFBQyxXQUFXO01BQUUsTUFBTSxFQUFFLHNCQUFzQjs7TUEyQzdDLE1BQU0sK0NBQ2IsQ0FBa0M7UUFBbEMsc0ZBQWtDOzs0REEzQ3RDLENBcUNNO1NBckNLLG9CQUFXOytEQUF0Qix3REFxQ00sT0FyQ04sVUFxQ007Y0FwQ0YsdUdBQW1EO2NBQ25ELGdEQWtDTyw0QkFsQ1AsQ0FrQ087dUVBakNILHdEQWdDaUIsaUdBL0JVLGVBQU0sR0FBckIsR0FBRyxFQUFFLEtBQUs7NEVBRHRCLGlEQWdDaUI7b0JBaENBLEtBQUssRUFBRSxHQUFHLENBQUMsS0FBSztvQkFBRyxPQUFPLEVBQUUsR0FBRyxDQUFDLE9BQU87b0JBQUcsSUFBSSxFQUFFLEdBQUcsQ0FBQyxLQUFLO29CQUN0QyxHQUFHLEVBQUUsR0FBRyxDQUFDLEtBQUs7O3NCQUNYLEdBQUcsQ0FBQyxRQUFROztnQ0FBcEMsT0FBSzsyRUFDWixDQUlPLEVBTFMsSUFBSTs4QkFDUCxHQUFHLENBQUMsUUFBUTt1SUFBekIsd0RBSU87O2tDQUhGLE9BQUssYUFBRSwwQkFBaUIsQ0FB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QXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvdmlld3MvaW5zcGVjdG9yLnZ1ZT8zMDhkIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy92aWV3cy9pbnNwZWN0b3IudnVlIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NTkwODEyMDY1MDFcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIjx0ZW1wbGF0ZT5cclxuICAgIDxWaWV3UGFuZWwgY2xhc3M9XCJpbnNwZWN0b3JcIiA6aGVhZGVyPVwieyBsYWJlbDogJ9CY0L3RgdC/0LXQutGC0L7RgCcgfVwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkVUlEXCIgY2xhc3M9XCJlbGVtZW50XCI+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdj57eyBzZWxlY3RlZC5wYXRocy5qb2luKCctPicpIH19PC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8c2xvdD5cclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JQYW5lbCA6bGFiZWw9XCJjbXAubGFiZWxcIiA6dG9vbHRpcD1cImNtcC50b29sdGlwXCIgOnN0YXQ9XCJjbXAuc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNtcCwgaW5kZXgpIGluIGJsb2Nrc1wiIDprZXk9XCJjbXAubGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb25zPVwieyBzdGF0IH1cIiB2LWlmPVwiIWNtcC5yZWFkb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiB2LWlmPVwiIWNtcC5ub25zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xpY2s9XCJvbkNsZWFuU3RhdGVWYWx1ZShjbXAuaGVhZCB8fCBjbXAuY29udGVudCwgY21wLmhlYWQgPyBjbXAuaGVhZC5wcm9wIDogY21wLmNvbnRlbnQucHJvcClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi10b29sdGlwPVwiJ9Ce0YfQuNGB0YLQuNGC0Ywg0LfQvdCw0YfQtdC90LjQtSDQsiDRgdC70LDQudC00LUnXCIgY2xhc3M9XCJyZW1vdmUtaWNvblwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPGljb24gdmFsdWU9XCJiaW5cIj48L2ljb24+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaGVhZCB2LWlmPVwiY21wLmhlYWRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCA6aXM9XCJjbXAuaGVhZC5jb21wb25lbnRcIiB2LWJpbmQ9XCJjbXAuaGVhZC5wcm9wc1wiIHYtbW9kZWw9XCJzZWxlY3RlZFtjbXAuaGVhZC5wcm9wXVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzZWxlY3RlZFwiIDpwcm9wZXJ0eT1cImNtcC5oZWFkXCIgOnRhcmdldD1cImNtcC5oZWFkLnN0YXRlID8gZ2V0U3RhdGUoKSA6IHNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGVhbj1cIiguLi5hcmdzKSA9PiBvbkNsZWFuU3RhdGVWYWx1ZShjbXAuaGVhZCwgLi4uYXJncylcIiBAc2F2ZT1cInNhdmVFbGVtZW50KGNtcC5oZWFkKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRhcmdldD1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuaGVhZCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbFZhbHVlPVwiKC4uLmFyZ3MpID0+IHNldFRhcmdldFByb3BlcnR5KGNtcC5oZWFkLCBjbXAuaGVhZC5wcm9wLCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnZhbHVlPVwiKC4uLmFyZ3MpID0+IG9uQ29tcG9uZW50Q2hhbmdlZChjbXAuaGVhZCwgY21wLmhlYWQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cImNtcC5oZWFkLmV2ZW50cyB8fCB7fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjY29udGVudCB2LWlmPVwiY21wLmNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPGNvbXBvbmVudCBjbGFzcz1cImJsb2NrY29tcG9uZW50XCIgOmlzPVwiY21wLmNvbnRlbnQuY29tcG9uZW50XCIgdi1iaW5kPVwiY21wLmNvbnRlbnQucHJvcHNcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwic2VsZWN0ZWRcIiB2LW1vZGVsPVwic2VsZWN0ZWRbY21wLmNvbnRlbnQucHJvcF1cIiA6cHJvcGVydHk9XCJjbXAuY29udGVudFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dGFyZ2V0PVwiY21wLmNvbnRlbnQuc3RhdGUgPyBnZXRTdGF0ZSgpIDogc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsZWFuPVwiKC4uLmFyZ3MpID0+IG9uQ2xlYW5TdGF0ZVZhbHVlKGNtcC5jb250ZW50LCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAc2F2ZT1cInNhdmVFbGVtZW50KGNtcC5jb250ZW50KVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnRhcmdldD1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuY29udGVudCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTptb2RlbFZhbHVlPVwiKC4uLmFyZ3MpID0+IHNldFRhcmdldFByb3BlcnR5KGNtcC5jb250ZW50LCBjbXAuY29udGVudC5wcm9wLCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOnZhbHVlPVwiKC4uLmFyZ3MpID0+IG9uQ29tcG9uZW50Q2hhbmdlZChjbXAuY29udGVudCwgY21wLmNvbnRlbnQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdi1vbj1cImNtcC5jb250ZW50LmV2ZW50cyB8fCB7fVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L2NvbXBvbmVudD5cclxuICAgICAgICAgICAgICAgICAgICA8L3RlbXBsYXRlPlxyXG5cclxuICAgICAgICAgICAgICAgIDwvSW5zcGVjdG9yUGFuZWw+XHJcbiAgICAgICAgICAgIDwvc2xvdD5cclxuICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgPGRpdiBjbGFzcz1cImxhYmVsXCIgdi1lbHNlPlxyXG4gICAgICAgICAgICBTZWxlY3QgYW4gaXRlbSBvciBzdGF0ZVxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDx0ZW1wbGF0ZSAjZm9vdGVyPlxyXG4gICAgICAgICAgICA8IS0tIDxTY2VuZVRvb2xzPjwvU2NlbmVUb29scz4gLS0+XHJcbiAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvVmlld1BhbmVsPlxyXG4gICAgPCEtLSA8ZGl2IGNsYXNzPVwicGFuZWwtY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInBhbmVsXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZWFkZXJcIj5JbnNwZWN0b3I8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbnRlbnRcIj5cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImZvb3RlclwiPlxyXG5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj4gLS0+XHJcbjwvdGVtcGxhdGU+XHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBJbnNwZWN0b3JQYW5lbCBmcm9tIFwiQC9jb21wb25lbnRzL2luc3BlY3Rvci9pbnNwZWN0b3JwYW5lbC52dWVcIlxyXG5pbXBvcnQgVmlld1BhbmVsIGZyb20gXCIuL3ZpZXdwYW5lbC52dWVcIlxyXG5pbXBvcnQgbW9kZWx0eXBlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnNwZWN0b3IvbW9kZWx0eXBlcy52dWVcIlxyXG5pbXBvcnQgYXNzZXRzdmlldyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnNwZWN0b3IvYXNzZXRzL2Fzc2V0c3ZpZXcudnVlXCJcclxuaW1wb3J0IFNjZW5lVG9vbHMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zcGVjdG9yL3NjZW5lLnZ1ZVwiXHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgZ2V0U3RhdGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhcHAucHJvamVjdC5nZXRTdGF0ZSh0aGlzLnNlbGVjdGVkLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZ2V0UHJvcChjbXApIHtcclxuICAgICAgICAgICAgY29uc3QgcHJvcHMgPSBjbXAucHJvcC5zcGxpdCgnLicpXHJcbiAgICAgICAgICAgIGxldCBwID0gcHJvcHNbMF1cclxuICAgICAgICAgICAgbGV0IHRhcmdldCA9IHRoaXMuc2VsZWN0ZWRcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9wcy5sZW5ndGggLSAxOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRhcmdldCA9IHRhcmdldFtwcm9wc1tpXV1cclxuICAgICAgICAgICAgICAgIHAgPSBwcm9wc1tpICsgMV1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGFyZ2V0W3BdXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgc2F2ZUVsZW1lbnQoY21wKSB7XHJcbiAgICAgICAgICAgIGlmIChjbXAub251cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNtcC5vbnVwZGF0ZSh0aGlzLnNlbGVjdGVkLCBudWxsLCBudWxsLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQnNC10YLQvtC0INC00LvRjyDQuNC30LzQtdC90LXQvdC40Y8g0LfQvdCw0YfQtdC90LjRjyDRgdCy0L7QudGB0YLQstCwINGN0LvQtdC80LXQvdGC0LAg0LIg0LLRi9Cx0YDQsNC90L3QvtC8INGB0LvQsNC50LTQtVxyXG4gICAgICAgICAqINCi0LXQutGD0YnQtdC1INC30L3QsNGH0LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCDRgdCw0LzQvtCz0L4g0Y3Qu9C10LzQtdC90YLQsCDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LIg0LrQvtC80L/QvtC90LXQvdGC0LUgXHJcbiAgICAgICAgICogKNC40LvQuCDRh9C10YDQtdC3IHYtbW9kZWwpXHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIGNtcCDQmNGB0YXQvtC00L3Ri9C1INC/0LDRgNCw0LzQtdGC0YDRiyDQtNC10LrQu9Cw0YDQsNGC0LjQstC90L7Qs9C+INC+0L/QuNGB0LDQvdC40Y8gOlxyXG4gICAgICAgICAqINC10YHRgtGMINCy0L7Qt9C80L7QttC90L7RgdGC0Ywg0L/RgNC10LTQvtGC0LLRgNCw0YLQuNGC0Ywg0LfQsNC/0LjRgdGMINC/0LDRgNCw0LzQtdGC0YDQsCDQsiDRgdC+0YHRgtC+0Y/QvdC40LUgKNC90LDQv9GA0LjQvNC10YAg0L3QsNC30LLQsNC90LjQtSkgXHJcbiAgICAgICAgICog0YPRgdGC0LDQvdC+0LLQutC+0LkgY21wLnN0YXRlPWZhbHNlXHJcbiAgICAgICAgICogQHBhcmFtIHByb3Ag0LjQvNGPINGB0LLQvtC50YHRgtCy0LAgLSDRg9GB0YLQsNC90LDQstC70LjQstCw0LXRgtGB0Y8g0LIgdGVtcGxhdGUg0LXRgdC70Lgg0L7QsdGA0LDQsdC+0YLQutCwINGB0L7QsdGL0YLQuNGPIEB1cGRhdGU6bW9kZWxWYWx1ZVxyXG4gICAgICAgICAqINC40LvQuCDQv9C+0LvRg9GH0LDQtdGC0YHRjyDQuNC3INC60L7QvNC/0L7QvdC10L3RgtCwLCDQtdGB0LvQuCDQvtCx0YDQsNCx0L7RgtC60LAgQHVwZGF0ZTpzdGF0ZVxyXG4gICAgICAgICAqIEBwYXJhbSB2YWwg0L/RgNC40YHQstCw0LjQstCw0LXQvNC+0LUg0LfQvdCw0YfQtdC90LjQtSBcclxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHlWYWwgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXN5bmMgc2V0VGFyZ2V0UHJvcGVydHkoY21wLCBwcm9wLCB2YWwpIHtcclxuICAgICAgICAgICAgaWYgKGNtcC5vbnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY21wLm9udXBkYXRlKHRoaXMuc2VsZWN0ZWQsIHByb3AsIHZhbCwgdGhpcy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoISgnc3RhdGUnIGluIGNtcCkgfHwgY21wLnN0YXRlID09PSB0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsPy5lbmNvZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdGF0ZSgpW3Byb3BdID0gdmFsLmVuY29kZSgpXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRTdGF0ZSgpW3Byb3BdID0gdmFsXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAodmFsPy5lbmNvZGUpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFtwcm9wXSA9IHZhbC5lbmNvZGUoKVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRbcHJvcF0gPSB2YWxcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAodGhpcy5zZWxlY3RlZC5pc0VsZW1lbnQpXHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAucHJvamVjdC5zYXZlKHRoaXMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIGVsc2UgaWYgKHRoaXMuc2VsZWN0ZWQuaXNBc3NldCkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXBwLmFzc2V0cy5zYXZlKHRoaXMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCc0LXRgtC+0LQg0LLRi9C30YvQstCw0LXRgtGB0Y8g0LrQsNC6IHNldFRhcmdldFByb3BlcnR5INC90L4g0YEg0L3QtdC+0LHRhdC+0LTQuNC80L7RgdGC0YzRjiDRg9GB0YLQsNC90L7QstC40YLRjFxyXG4gICAgICAgICAqINC30L3QsNGH0LXQvdC40LUg0YHQstC+0LnRgdGC0LLQsCDRjdC70LXQvNC10L3RgtCwLCDQtdGB0LvQuCDQutC+0LzQv9C+0L3QtdC90YIg0L3QtSDQvNC+0LbQtdGCINGN0YLQviDRgdC00LXQu9Cw0YLRjCDRgdCw0LzQvtGB0YLQvtGP0YLQtdC70YzQvdC+XHJcbiAgICAgICAgICogXHJcbiAgICAgICAgICogQHBhcmFtIHByb3AgLSDQuNC80Y8g0YHQstC+0LnRgdGC0LLQsCAtINGB0YLQsNCy0LjRgtGB0Y8g0LDQstGC0L7QvNCw0YLQvtC8INC40LcgY21wXHJcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIC0g0L3QvtCy0L7QtSDQt9C90LDRh9C10L3QuNC1XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYXN5bmMgb25Db21wb25lbnRDaGFuZ2VkKGNtcCwgcHJvcCwgdmFsdWUsIHByb3BlcnR5VmFsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRbcHJvcF0gPSB2YWx1ZVxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoY21wLm9udXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgY21wLm9udXBkYXRlKHRoaXMuc2VsZWN0ZWQsIHByb3AsIHZhbHVlLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5zZXRUYXJnZXRQcm9wZXJ0eShjbXAsIHByb3AsIHZhbHVlLCBwcm9wZXJ0eVZhbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIGFzeW5jIG9uQ2xlYW5TdGF0ZVZhbHVlKGNtcCwgcHJvcCkge1xyXG4gICAgICAgICAgICBpZiAoY21wLm9uY2xlYW4pIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNtcC5vbmNsZWFuKHRoaXMuc2VsZWN0ZWQsIHByb3AsIGNtcCwgdGhpcy5zbGlkZSlcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmIChwcm9wIGluIHRoaXMuZ2V0U3RhdGUoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSB0aGlzLmdldFN0YXRlKClbcHJvcF1cclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAucHJvamVjdC5zYXZlKHRoaXMuc2VsZWN0ZWQpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICBzZWxlY3RlZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIHNlbGVjdGVkVUlEKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvbi51aWRcclxuICAgICAgICB9LFxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCS0L7Qt9Cy0YDQsNGJ0LDQtdGCINC90LDQsdC+0YAg0LrQvtC80L/QvtC90LXQvdGC0L7QsiDQtNC70Y8g0L/QvtC60LDQt9CwICwg0LfQsNCy0LjRgdGP0YnQuNC5INC+0YIg0YLQuNC/0LAg0LLRi9Cx0YDQsNC90L3QvtCz0L4g0L7QsdGK0LXQutGC0LBcclxuICAgICAgICAgKi9cclxuICAgICAgICBibG9ja3MoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHRoaXMuc2VsZWN0ZWQuZ2V0VHlwZXMoKSlcclxuICAgICAgICAgICAgcmV0dXJuIFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdMYWJlbEVkaXQnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RhdGU6IGZhbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ0xhYmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlR5cGVcIixcclxuICAgICAgICAgICAgICAgICAgICByZWFkb25seTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBoZWFkOiB7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdMYWJlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IFwidHlwZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIC4uLnRoaXMuJGFwcC5pbnNwZWN0b3IuYmxvY2tzRm9yKHRoaXMuc2VsZWN0ZWQuZ2V0VHlwZXMoKSlcclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2xpZGUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhcHAuc2xpZGVzLmFjdGl2ZWQ/LnVpZFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICB3YXRjaDoge1xyXG4gICAgICAgIHNlbGVjdGVkKG4pIHtcclxuICAgICAgICAgICAgaWYgKCFuKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIGlmIChuLnJlc3RvcmUpIHtcclxuICAgICAgICAgICAgICAgIG4ucmVzdG9yZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcG9uZW50czogeyBJbnNwZWN0b3JQYW5lbCwgbW9kZWx0eXBlcywgYXNzZXRzdmlldywgVmlld1BhbmVsLCBTY2VuZVRvb2xzIH1cclxufVxyXG48L3NjcmlwdD5cclxuPHN0eWxlPlxyXG4uaW5zcGVjdG9yIHtcclxuICAgIHVzZXItc2VsZWN0OiBub25lO1xyXG4gICAgcG9pbnRlci1ldmVudHM6IGFsbDtcclxuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcclxuICAgIHRvcDogNDhweDtcclxuICAgIGxlZnQ6IDRweDtcclxuICAgIGJvdHRvbTogMTBweDtcclxuICAgIHdpZHRoOiAyODBweDtcclxuICAgIHBhZGRpbmc6IDFweDtcclxufVxyXG48L3N0eWxlPiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcImVmYzk5Nzg3YzI3ZTZiNzA4MmZmXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjJcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=