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
        // 1758793671832
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
      console.log(nodes)
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
/******/ 	__webpack_require__.h = () => ("f3862d323d4eb191c242")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hYThhNzJhMTc4NDljMzYwNWFhMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDU3NDOztBQUV0QyxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNWLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNWO0lBQ0Y7RUFDRixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQztFQUNGLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRTdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0QsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNQO01BQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO01BQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzNCO1FBQ0YsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1A7Y0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDdkI7WUFDRixDQUFDO1lBQ0Q7Y0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUMzQjtZQUNGO1VBQ0Y7UUFDRjtNQUNGLENBQUM7SUFDSCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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LHNEOzs7OztVQ0FBLHNEQUFzRCxrQkFBa0I7VUFDeEU7VUFDQTtVQUNBLGdCQUFnQixzRUFBc0UsZ0JBQWdCO1VBQ3RHO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDLGNBQWM7VUFDMUU7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEM7VUFDNUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSwwREFBMEQ7VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL21vZGVsc3RyZWUudnVlPzQwYTYiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzdHJlZS52dWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc1ODc5MzY3MTgzMlxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiPHRlbXBsYXRlPlxyXG4gIDxkaXYgY2xhc3M9XCJoaWVyYXJoeS12aWV3XCI+XHJcbiAgICA8ZGl2Pnt7IHRpdGxlIH19OiA8YnV0dG9uIEBjbGljaz1cInByb2plY3QuYWRkRWxlbWVudChzZWxlY3RlZClcIj5cclxuICAgICAgICA8aWNvbiB2YWx1ZT1cInBsdXNcIiBzaXplPVwiMC43NWVtXCI+PC9pY29uPlxyXG4gICAgICA8L2J1dHRvbj48L2Rpdj5cclxuICAgIDxUcmVlVmlldyA6ZmlsdGVyPVwiZmlsdGVyRWxlbWVudHNcIiA6dHJlZT1cInRyZWVcIiBAY2xpY2tOb2RlPVwib25Ob2RlQ2xpY2tcIiBAY2hhbmdlU2VsZWN0PVwib25DaGFuZ2VTZWxlY3Rpb25cIlxyXG4gICAgICBjaGlsZHNGaWxlZD1cImNoaWxkcmVuXCIgQHVwZGF0ZUV4cGFuZGVkPVwib25VcGRhdGVFeHBhbmRlZFwiIDpzZWxlY3Rvcj1cImZhbHNlXCIgOmRyb3BwYWJsZT1cInRydWVcIlxyXG4gICAgICBAbm9kZS1kcm9wPVwiaGFuZGxlTm9kZURyb3BcIj5cclxuICAgICAgPHRlbXBsYXRlICNwcmVwZW5kPVwieyBub2RlLCBpbmRleCB9XCI+XHJcbiAgICAgICAgPGRpdj48aW5wdXQgdHlwZT1cImNoZWNrYm94XCIgdi1tb2RlbD1cIm5vZGUudmlzaWJsZVwiIEBjaGFuZ2U9XCJ1cGRhdGVWaXNpYmxlKG5vZGUpXCI+PC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjYXBwZW5kPVwieyBub2RlLCBpbmRleCB9XCI+XHJcbiAgICAgICAgPGRpdiBjbGFzcz1cInRyZWVpY29uXCI+XHJcbiAgICAgICAgICA8IS0tIDxpY29uIHZhbHVlPVwidGFyZ2V0XCIgdi10b29sdGlwPVwiJ9Ck0L7QutGD0YEnXCIgc2l6ZT1cIjFlbVwiIEBjbGljaz1cIiRlbWl0KCd0YXJnZXQnLCBub2RlKVwiPjwvaWNvbj4tLT5cclxuICAgICAgICAgIDwhLS0gPGljb24gdi10b29sdGlwPVwiJ9CS0LjQtNC40LzQvtGB0YLRjCdcIiA6dmFsdWU9XCJub2RlLnNob3cgPyAnZXllJyA6ICdleWUtYmxvY2tlZCdcIiBzaXplPVwiMWVtXCJcclxuICAgICAgICAgICAgQGNsaWNrPVwibm9kZS52aXNpYmxlID0gIW5vZGUudmlzaWJsZVwiIDpjb2xvcj1cIm5vZGUudmlzaWJsZSA/ICcjOGVjNThlJyA6ICcjOGVjNThlODAnXCI+XHJcbiAgICAgICAgICA8L2ljb24+IC0tPlxyXG4gICAgICAgICAgPGljb24gdi1pZj1cIiFub2RlLnBhcmVudFwiIHYtdG9vbHRpcD1cIidBZGQgdG8gc2xpZGUnXCIgdmFsdWU9XCJkaWNlXCIgc2l6ZT1cIjFlbVwiIEBjbGljaz1cImluc2VydFRvU2xpZGUobm9kZSlcIlxyXG4gICAgICAgICAgICA6Y29sb3I9XCJub2RlLnN0YXRlID8gJyM4ZWM1OGUnIDogJyM4ZWM1OGU4MCdcIj5cclxuICAgICAgICAgIDwvaWNvbj5cclxuICAgICAgICAgIDxpY29uIEBjbGljaz1cImRlbGV0ZUVsZW1lbnQobm9kZSlcIiB2LXRvb2x0aXA9XCInUmVtb3ZlJ1wiIHZhbHVlPVwiYmluXCIgc2l6ZT1cIjFlbVwiPjwvaWNvbj5cclxuICAgICAgICAgIDwhLS0gPGljb24gdi1pZj1cImluZGV4ID09PSAwXCIgc2l6ZT1cIjEwMCVcIiB2YWx1ZT1cImJpblwiPjwvaWNvbj4gLS0+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjbGFiZWw9XCJ7IG5vZGUgfVwiPlxyXG4gICAgICAgIDxkaXYgOmNsYXNzPVwieyAnZm9jdXNlZHRyZWUnOiBzZWxlY3RlZCA9PT0gbm9kZSB9XCIgY2xhc3M9XCJsYWJlbFwiPiB7eyBub2RlLm5hbWUgfHwgbm9kZS51aWQgfX08L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgIDwvVHJlZVZpZXc+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnLi9UcmVlVmlldy52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiVHJlZUVsZW1lbnRcIixcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFwiXCJcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWx0ZXJzVmlldzogZmFsc2UsXHJcbiAgICAgIC8vdHJlZTogW10sXHJcbiAgICAgIGZpbHRlclJlY3Q6IHt9LFxyXG4gICAgICByZXF1ZXN0UmVtb3ZlOiBmYWxzZSxcclxuICAgICAgcmVtb3ZlRGF0YToge1xyXG4gICAgICAgIHRleHQ6IGBgLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcHJvamVjdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGFwcC5wcm9qZWN0XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uLnNlbGVjdGVkXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvblxyXG4gICAgfSxcclxuICAgIHRyZWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAucHJvamVjdC5jaGlsZHJlblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgdXBkYXRlVmlzaWJsZSh0YXJnZXQpIHtcclxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLiRhcHAucHJvamVjdC5nZXRTdGF0ZSh0YXJnZXQsIHRoaXMuJGFwcC5zbGlkZXMuYWN0aXZlZC51aWQpXHJcblxyXG4gICAgICBzdGF0ZS52aXNpYmxlID0gdGFyZ2V0LnZpc2libGVcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGFyZ2V0KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGhhbmRsZU5vZGVEcm9wKGRhdGEpIHtcclxuICAgICAgdGhpcy4kYXBwLnByb2plY3QuaGFuZGxlQXNzZXQoZGF0YSlcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbGVtZW50cyhub2Rlcykge1xyXG4gICAgICBjb25zb2xlLmxvZyhub2RlcylcclxuICAgICAgcmV0dXJuIG5vZGVzLmZpbHRlcihuID0+IG4uaXNFbGVtZW50IHx8IG4uaXNFbGVtZW50SGVscGVyKVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGluc2VydFRvU2xpZGUobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5zdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuJGFwcC50b2FzdHMuYWRkKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBUaGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoaXMgc2xpZGVgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLiRhcHAuc2xpZGVzLmFkZFN0YXRlKG5vZGUpXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRWxlbWVudChub2RlKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRGF0YS50ZXh0ID0gYERlbGV0ZSAke25vZGUubmFtZX0gKCR7bm9kZS51aWR9KSA/YFxyXG4gICAgICB0aGlzLiRhcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJEZWxldGUgaXRlbVwiLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZW1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge30sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZWxldGVcIixcclxuICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVtb3ZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5wcm9qZWN0LnJlbW92ZShub2RlLnBhdGhzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnRvYXN0cy5hZGQoeyBtZXNzYWdlOiBgVGhlIGVsZW1lbnQgJHtub2RlLm5hbWV9IGlzIGRlbGV0ZWRgIH0pXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RSZW1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZUV4cGFuZGVkKG5vZGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhub2RlKVxyXG4gICAgfSxcclxuICAgIG9uTm9kZUNsaWNrKG5vZGUpIHtcclxuICAgICAgdGhpcy4kYXBwLnNlbGVjdGlvbi5zZWxlY3Qobm9kZSlcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZVNlbGVjdGlvbigpIHtcclxuXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czogeyBUcmVlVmlldyB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uaGllcmFyaHktdmlldyB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvY3VzZWR0cmVlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1mb2N1c2VkKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1mb2N1c2VkKVxyXG59XHJcblxyXG4udHJlZWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzcHg7XHJcblxyXG4gIC5zdmdpY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcbn1cclxuPC9zdHlsZT4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJmMzg2MmQzMjNkNGViMTkxYzI0MlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9