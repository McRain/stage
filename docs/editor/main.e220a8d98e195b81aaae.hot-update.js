"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=style&index=0&id=431b2318&lang=scss&scoped=true":
/*!*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/sass-loader/dist/cjs.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=style&index=0&id=431b2318&lang=scss&scoped=true ***!
  \*********************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1758790573675
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

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=script&lang=js":
/*!***********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=script&lang=js ***!
  \***********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _TreeView_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./TreeView.vue */ "./src/components/TreeView.vue");



/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  name: "TreeElement",
  props: {
    title: ""
  },
  data() {
    return {
      filtersView: false,
      //tree: [],
      filterRect: {},
      requestRemove: false,
      removeData: {
        text: ``,
      }
    }
  },
  computed: {
    project() {
      return this.$app.project
    },
    selected() {
      return this.$app.selection.selected
    },
    selection() {
      return this.$app.selection
    },
    tree() {
      return this.$app.project.children
    }
  },
  methods: {
    async updateVisible(target) {
      const state = this.$app.project.getState(target, this.$app.slides.actived.uid)

      state.visible = target.visible

      await this.$app.project.save(target)
    },
    async handleNodeDrop(data) {
      this.$app.project.handleAsset(data)
    },
    filterElements(nodes) {
      return nodes.filter(n => n.isElement || n.isElementHelper)
    },
    async insertToSlide(node) {
      if (node.state) {
        this.$app.toasts.add({
          message: `The element has already been added to this slide`
        })
        return
      }
      await this.$app.slides.addState(node)
    },
    deleteElement(node) {
      this.removeData.text = `Delete ${node.name} (${node.uid}) ?`
      this.$app.modal.open({
        header: {
          value: "Delete item",
          handler: () => {
            this.$app.modal.close()
            this.requestRemove = false
          }
        },
        content: {},
        footer: {
          buttons: [
            {
              label: "Delete",
              class: "secondary",
              handler: async () => {
                this.$app.modal.close()
                this.requestRemove = false
                this.$app.project.remove(node.paths)
                this.$app.toasts.add({ message: `The element ${node.name} is deleted` })
                //this.$forceUpdate();
              }
            },
            {
              label: "Cancel",
              class: "primary",
              handler: async () => {
                this.$app.modal.close()
                this.requestRemove = false
              }
            }
          ]
        }
      })
    },
    onUpdateExpanded(node) {
      //console.log(node)
    },
    onNodeClick(node) {
      this.$app.selection.select(node)
    },
    onChangeSelection() {

    },
  },
  components: { TreeView: _TreeView_vue__WEBPACK_IMPORTED_MODULE_0__["default"] }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=template&id=431b2318&scoped=true":
/*!***************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modelstree.vue?vue&type=template&id=431b2318&scoped=true ***!
  \***************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "hierarhy-view" }
const _hoisted_2 = ["onUpdate:modelValue", "onChange"]
const _hoisted_3 = { class: "treeicon" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_icon = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("icon")
  const _component_TreeView = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("TreeView")
  const _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)((0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.title) + ": ", 1 /* TEXT */),
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
        onClick: _cache[0] || (_cache[0] = $event => ($options.project.addElement($options.selected)))
      }, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
          value: "plus",
          size: "0.75em"
        })
      ])
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_TreeView, {
      filter: $options.filterElements,
      tree: $options.tree,
      onClickNode: $options.onNodeClick,
      onChangeSelect: $options.onChangeSelection,
      childsFiled: "children",
      onUpdateExpanded: $options.onUpdateExpanded,
      selector: false,
      droppable: true,
      onNodeDrop: $options.handleNodeDrop
    }, {
      prepend: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ node, index }) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("input", {
            type: "checkbox",
            "onUpdate:modelValue": $event => ((node.visible) = $event),
            onChange: $event => ($options.updateVisible(node))
          }, null, 40 /* PROPS, NEED_HYDRATION */, _hoisted_2), [
            [vue__WEBPACK_IMPORTED_MODULE_0__.vModelCheckbox, node.visible]
          ])
        ])
      ]),
      append: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ node, index }) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <icon value=\"target\" v-tooltip=\"'Фокус'\" size=\"1em\" @click=\"$emit('target', node)\"></icon>"),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <icon v-tooltip=\"'Видимость'\" :value=\"node.show ? 'eye' : 'eye-blocked'\" size=\"1em\"\r\n            @click=\"node.visible = !node.visible\" :color=\"node.visible ? '#8ec58e' : '#8ec58e80'\">\r\n          </icon> "),
          (!node.parent)
            ? (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(_component_icon, {
                key: 0,
                value: "dice",
                size: "1em",
                onClick: $event => ($options.insertToSlide(node)),
                color: node.state ? '#8ec58e' : '#8ec58e80'
              }, null, 8 /* PROPS */, ["onClick", "color"])), [
                [_directive_tooltip, 'Add to slide']
              ])
            : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)((0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, {
            onClick: $event => ($options.deleteElement(node)),
            value: "bin",
            size: "1em"
          }, null, 8 /* PROPS */, ["onClick"]), [
            [_directive_tooltip, 'Remove']
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <icon v-if=\"index === 0\" size=\"100%\" value=\"bin\"></icon> ")
        ])
      ]),
      label: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(({ node }) => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
          class: (0,vue__WEBPACK_IMPORTED_MODULE_0__.normalizeClass)([{ 'focusedtree': $options.selected === node }, "label"])
        }, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(node.name || node.uid), 3 /* TEXT, CLASS */)
      ]),
      _: 1 /* STABLE */
    }, 8 /* PROPS */, ["filter", "tree", "onClickNode", "onChangeSelect", "onUpdateExpanded", "onNodeDrop"])
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("aa8a72a17849c3605aa1")
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
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.21",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lMjIwYThkOThlMTk1YjgxYWFhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDU3NDOztBQUV0QyxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNWLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNWO0lBQ0Y7RUFDRixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQztFQUNGLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRTdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzRCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1A7TUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDM0I7UUFDRixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUDtjQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUN2QjtZQUNGLENBQUM7WUFDRDtjQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQzNCO1lBQ0Y7VUFDRjtRQUNGO01BQ0YsQ0FBQztJQUNILENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ3JCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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NEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzdHJlZS52dWU/NDBhNiIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RlbHN0cmVlLnZ1ZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzU4NzkwNTczNjc1XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImhpZXJhcmh5LXZpZXdcIj5cclxuICAgIDxkaXY+e3sgdGl0bGUgfX06IDxidXR0b24gQGNsaWNrPVwicHJvamVjdC5hZGRFbGVtZW50KHNlbGVjdGVkKVwiPlxyXG4gICAgICAgIDxpY29uIHZhbHVlPVwicGx1c1wiIHNpemU9XCIwLjc1ZW1cIj48L2ljb24+XHJcbiAgICAgIDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgPFRyZWVWaWV3IDpmaWx0ZXI9XCJmaWx0ZXJFbGVtZW50c1wiIDp0cmVlPVwidHJlZVwiIEBjbGlja05vZGU9XCJvbk5vZGVDbGlja1wiIEBjaGFuZ2VTZWxlY3Q9XCJvbkNoYW5nZVNlbGVjdGlvblwiXHJcbiAgICAgIGNoaWxkc0ZpbGVkPVwiY2hpbGRyZW5cIiBAdXBkYXRlRXhwYW5kZWQ9XCJvblVwZGF0ZUV4cGFuZGVkXCIgOnNlbGVjdG9yPVwiZmFsc2VcIiA6ZHJvcHBhYmxlPVwidHJ1ZVwiXHJcbiAgICAgIEBub2RlLWRyb3A9XCJoYW5kbGVOb2RlRHJvcFwiPlxyXG4gICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ9XCJ7IG5vZGUsIGluZGV4IH1cIj5cclxuICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwibm9kZS52aXNpYmxlXCIgQGNoYW5nZT1cInVwZGF0ZVZpc2libGUobm9kZSlcIj48L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNhcHBlbmQ9XCJ7IG5vZGUsIGluZGV4IH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJlZWljb25cIj5cclxuICAgICAgICAgIDwhLS0gPGljb24gdmFsdWU9XCJ0YXJnZXRcIiB2LXRvb2x0aXA9XCIn0KTQvtC60YPRgSdcIiBzaXplPVwiMWVtXCIgQGNsaWNrPVwiJGVtaXQoJ3RhcmdldCcsIG5vZGUpXCI+PC9pY29uPi0tPlxyXG4gICAgICAgICAgPCEtLSA8aWNvbiB2LXRvb2x0aXA9XCIn0JLQuNC00LjQvNC+0YHRgtGMJ1wiIDp2YWx1ZT1cIm5vZGUuc2hvdyA/ICdleWUnIDogJ2V5ZS1ibG9ja2VkJ1wiIHNpemU9XCIxZW1cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJub2RlLnZpc2libGUgPSAhbm9kZS52aXNpYmxlXCIgOmNvbG9yPVwibm9kZS52aXNpYmxlID8gJyM4ZWM1OGUnIDogJyM4ZWM1OGU4MCdcIj5cclxuICAgICAgICAgIDwvaWNvbj4gLS0+XHJcbiAgICAgICAgICA8aWNvbiB2LWlmPVwiIW5vZGUucGFyZW50XCIgdi10b29sdGlwPVwiJ0FkZCB0byBzbGlkZSdcIiB2YWx1ZT1cImRpY2VcIiBzaXplPVwiMWVtXCIgQGNsaWNrPVwiaW5zZXJ0VG9TbGlkZShub2RlKVwiXHJcbiAgICAgICAgICAgIDpjb2xvcj1cIm5vZGUuc3RhdGUgPyAnIzhlYzU4ZScgOiAnIzhlYzU4ZTgwJ1wiPlxyXG4gICAgICAgICAgPC9pY29uPlxyXG4gICAgICAgICAgPGljb24gQGNsaWNrPVwiZGVsZXRlRWxlbWVudChub2RlKVwiIHYtdG9vbHRpcD1cIidSZW1vdmUnXCIgdmFsdWU9XCJiaW5cIiBzaXplPVwiMWVtXCI+PC9pY29uPlxyXG4gICAgICAgICAgPCEtLSA8aWNvbiB2LWlmPVwiaW5kZXggPT09IDBcIiBzaXplPVwiMTAwJVwiIHZhbHVlPVwiYmluXCI+PC9pY29uPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNsYWJlbD1cInsgbm9kZSB9XCI+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7ICdmb2N1c2VkdHJlZSc6IHNlbGVjdGVkID09PSBub2RlIH1cIiBjbGFzcz1cImxhYmVsXCI+IHt7IG5vZGUubmFtZSB8fCBub2RlLnVpZCB9fTwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9UcmVlVmlldz5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUcmVlVmlldyBmcm9tICcuL1RyZWVWaWV3LnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJUcmVlRWxlbWVudFwiLFxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXRsZTogXCJcIlxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpbHRlcnNWaWV3OiBmYWxzZSxcclxuICAgICAgLy90cmVlOiBbXSxcclxuICAgICAgZmlsdGVyUmVjdDoge30sXHJcbiAgICAgIHJlcXVlc3RSZW1vdmU6IGZhbHNlLFxyXG4gICAgICByZW1vdmVEYXRhOiB7XHJcbiAgICAgICAgdGV4dDogYGAsXHJcbiAgICAgIH1cclxuICAgIH1cclxuICB9LFxyXG4gIGNvbXB1dGVkOiB7XHJcbiAgICBwcm9qZWN0KCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kYXBwLnByb2plY3RcclxuICAgIH0sXHJcbiAgICBzZWxlY3RlZCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zZWxlY3Rpb24uc2VsZWN0ZWRcclxuICAgIH0sXHJcbiAgICBzZWxlY3Rpb24oKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uXHJcbiAgICB9LFxyXG4gICAgdHJlZSgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGFwcC5wcm9qZWN0LmNoaWxkcmVuXHJcbiAgICB9XHJcbiAgfSxcclxuICBtZXRob2RzOiB7XHJcbiAgICBhc3luYyB1cGRhdGVWaXNpYmxlKHRhcmdldCkge1xyXG4gICAgICBjb25zdCBzdGF0ZSA9IHRoaXMuJGFwcC5wcm9qZWN0LmdldFN0YXRlKHRhcmdldCwgdGhpcy4kYXBwLnNsaWRlcy5hY3RpdmVkLnVpZClcclxuXHJcbiAgICAgIHN0YXRlLnZpc2libGUgPSB0YXJnZXQudmlzaWJsZVxyXG5cclxuICAgICAgYXdhaXQgdGhpcy4kYXBwLnByb2plY3Quc2F2ZSh0YXJnZXQpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaGFuZGxlTm9kZURyb3AoZGF0YSkge1xyXG4gICAgICB0aGlzLiRhcHAucHJvamVjdC5oYW5kbGVBc3NldChkYXRhKVxyXG4gICAgfSxcclxuICAgIGZpbHRlckVsZW1lbnRzKG5vZGVzKSB7XHJcbiAgICAgIHJldHVybiBub2Rlcy5maWx0ZXIobiA9PiBuLmlzRWxlbWVudCB8fCBuLmlzRWxlbWVudEhlbHBlcilcclxuICAgIH0sXHJcbiAgICBhc3luYyBpbnNlcnRUb1NsaWRlKG5vZGUpIHtcclxuICAgICAgaWYgKG5vZGUuc3RhdGUpIHtcclxuICAgICAgICB0aGlzLiRhcHAudG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICBtZXNzYWdlOiBgVGhlIGVsZW1lbnQgaGFzIGFscmVhZHkgYmVlbiBhZGRlZCB0byB0aGlzIHNsaWRlYFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICAgIH1cclxuICAgICAgYXdhaXQgdGhpcy4kYXBwLnNsaWRlcy5hZGRTdGF0ZShub2RlKVxyXG4gICAgfSxcclxuICAgIGRlbGV0ZUVsZW1lbnQobm9kZSkge1xyXG4gICAgICB0aGlzLnJlbW92ZURhdGEudGV4dCA9IGBEZWxldGUgJHtub2RlLm5hbWV9ICgke25vZGUudWlkfSkgP2BcclxuICAgICAgdGhpcy4kYXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgdmFsdWU6IFwiRGVsZXRlIGl0ZW1cIixcclxuICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgdGhpcy4kYXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVtb3ZlID0gZmFsc2VcclxuICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHt9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiRGVsZXRlXCIsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlbW92ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAucHJvamVjdC5yZW1vdmUobm9kZS5wYXRocylcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC50b2FzdHMuYWRkKHsgbWVzc2FnZTogYFRoZSBlbGVtZW50ICR7bm9kZS5uYW1lfSBpcyBkZWxldGVkYCB9KVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLiRmb3JjZVVwZGF0ZSgpO1xyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVtb3ZlID0gZmFsc2VcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICAgIH0pXHJcbiAgICB9LFxyXG4gICAgb25VcGRhdGVFeHBhbmRlZChub2RlKSB7XHJcbiAgICAgIC8vY29uc29sZS5sb2cobm9kZSlcclxuICAgIH0sXHJcbiAgICBvbk5vZGVDbGljayhub2RlKSB7XHJcbiAgICAgIHRoaXMuJGFwcC5zZWxlY3Rpb24uc2VsZWN0KG5vZGUpXHJcbiAgICB9LFxyXG4gICAgb25DaGFuZ2VTZWxlY3Rpb24oKSB7XHJcblxyXG4gICAgfSxcclxuICB9LFxyXG4gIGNvbXBvbmVudHM6IHsgVHJlZVZpZXcgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiIHNjb3BlZD5cclxuLmhpZXJhcmh5LXZpZXcge1xyXG4gIG92ZXJmbG93LXk6IGF1dG87XHJcbiAgb3ZlcmZsb3cteDogaGlkZGVuO1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICBoZWlnaHQ6IDEwMCU7XHJcbn1cclxuXHJcbi5mb2N1c2VkdHJlZSB7XHJcbiAgY29sb3I6IHZhcigtLXRleHQtZm9jdXNlZCk7XHJcbiAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYmctZm9jdXNlZClcclxufVxyXG5cclxuLnRyZWVpY29uIHtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGdhcDogM3B4O1xyXG5cclxuICAuc3ZnaWNvbiB7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgfVxyXG59XHJcblxyXG4ubGFiZWwge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXgtd2lkdGg6IDE0MHB4O1xyXG59XHJcbjwvc3R5bGU+IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiYWE4YTcyYTE3ODQ5YzM2MDVhYTFcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==