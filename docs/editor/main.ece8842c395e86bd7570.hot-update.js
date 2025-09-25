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
        // 1758789939798
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
      return nodes.filter(n => n.isElement)
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
  const _component_ElementAdd = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ElementAdd")
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
    }, 8 /* PROPS */, ["filter", "tree", "onClickNode", "onChangeSelect", "onUpdateExpanded", "onNodeDrop"]),
    (_ctx.addElementView)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 0,
          to: ".modal-content"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ElementAdd, {
            modelValue: _ctx.elementData,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => ((_ctx.elementData) = $event)),
            parent: $options.selected
          }, null, 8 /* PROPS */, ["modelValue", "parent"])
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("595571d49ec429df11bd")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5lY2U4ODQyYzM5NWU4NmJkNzU3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDWXNDOztBQUV0QyxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNWLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNWO0lBQ0Y7RUFDRixDQUFDO0VBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDekIsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDM0IsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQztFQUNGLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7SUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFN0UsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7O01BRTdCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ3hCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDNUQsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztNQUNQO01BQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3RDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO01BQzNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztVQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQzNCO1FBQ0YsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7UUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1VBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1A7Y0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDbkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztnQkFDdkUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDdkI7WUFDRixDQUFDO1lBQ0Q7Y0FDRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Y0FDZixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUMzQjtZQUNGO1VBQ0Y7UUFDRjtNQUNGLENBQUM7SUFDSCxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNwQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FB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VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kZWxzdHJlZS52dWU/NDBhNiIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RlbHN0cmVlLnZ1ZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzU4Nzg5OTM5Nzk4XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCI8dGVtcGxhdGU+XHJcbiAgPGRpdiBjbGFzcz1cImhpZXJhcmh5LXZpZXdcIj5cclxuICAgIDxkaXY+e3sgdGl0bGUgfX06IDxidXR0b24gQGNsaWNrPVwicHJvamVjdC5hZGRFbGVtZW50KHNlbGVjdGVkKVwiPlxyXG4gICAgICAgIDxpY29uIHZhbHVlPVwicGx1c1wiIHNpemU9XCIwLjc1ZW1cIj48L2ljb24+XHJcbiAgICAgIDwvYnV0dG9uPjwvZGl2PlxyXG4gICAgPFRyZWVWaWV3IDpmaWx0ZXI9XCJmaWx0ZXJFbGVtZW50c1wiIDp0cmVlPVwidHJlZVwiIEBjbGlja05vZGU9XCJvbk5vZGVDbGlja1wiIEBjaGFuZ2VTZWxlY3Q9XCJvbkNoYW5nZVNlbGVjdGlvblwiXHJcbiAgICAgIGNoaWxkc0ZpbGVkPVwiY2hpbGRyZW5cIiBAdXBkYXRlRXhwYW5kZWQ9XCJvblVwZGF0ZUV4cGFuZGVkXCIgOnNlbGVjdG9yPVwiZmFsc2VcIiA6ZHJvcHBhYmxlPVwidHJ1ZVwiXHJcbiAgICAgIEBub2RlLWRyb3A9XCJoYW5kbGVOb2RlRHJvcFwiPlxyXG4gICAgICA8dGVtcGxhdGUgI3ByZXBlbmQ9XCJ7IG5vZGUsIGluZGV4IH1cIj5cclxuICAgICAgICA8ZGl2PjxpbnB1dCB0eXBlPVwiY2hlY2tib3hcIiB2LW1vZGVsPVwibm9kZS52aXNpYmxlXCIgQGNoYW5nZT1cInVwZGF0ZVZpc2libGUobm9kZSlcIj48L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNhcHBlbmQ9XCJ7IG5vZGUsIGluZGV4IH1cIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwidHJlZWljb25cIj5cclxuICAgICAgICAgIDwhLS0gPGljb24gdmFsdWU9XCJ0YXJnZXRcIiB2LXRvb2x0aXA9XCIn0KTQvtC60YPRgSdcIiBzaXplPVwiMWVtXCIgQGNsaWNrPVwiJGVtaXQoJ3RhcmdldCcsIG5vZGUpXCI+PC9pY29uPi0tPlxyXG4gICAgICAgICAgPCEtLSA8aWNvbiB2LXRvb2x0aXA9XCIn0JLQuNC00LjQvNC+0YHRgtGMJ1wiIDp2YWx1ZT1cIm5vZGUuc2hvdyA/ICdleWUnIDogJ2V5ZS1ibG9ja2VkJ1wiIHNpemU9XCIxZW1cIlxyXG4gICAgICAgICAgICBAY2xpY2s9XCJub2RlLnZpc2libGUgPSAhbm9kZS52aXNpYmxlXCIgOmNvbG9yPVwibm9kZS52aXNpYmxlID8gJyM4ZWM1OGUnIDogJyM4ZWM1OGU4MCdcIj5cclxuICAgICAgICAgIDwvaWNvbj4gLS0+XHJcbiAgICAgICAgICA8aWNvbiB2LWlmPVwiIW5vZGUucGFyZW50XCIgdi10b29sdGlwPVwiJ0FkZCB0byBzbGlkZSdcIiB2YWx1ZT1cImRpY2VcIiBzaXplPVwiMWVtXCIgQGNsaWNrPVwiaW5zZXJ0VG9TbGlkZShub2RlKVwiXHJcbiAgICAgICAgICAgIDpjb2xvcj1cIm5vZGUuc3RhdGUgPyAnIzhlYzU4ZScgOiAnIzhlYzU4ZTgwJ1wiPlxyXG4gICAgICAgICAgPC9pY29uPlxyXG4gICAgICAgICAgPGljb24gQGNsaWNrPVwiZGVsZXRlRWxlbWVudChub2RlKVwiIHYtdG9vbHRpcD1cIidSZW1vdmUnXCIgdmFsdWU9XCJiaW5cIiBzaXplPVwiMWVtXCI+PC9pY29uPlxyXG4gICAgICAgICAgPCEtLSA8aWNvbiB2LWlmPVwiaW5kZXggPT09IDBcIiBzaXplPVwiMTAwJVwiIHZhbHVlPVwiYmluXCI+PC9pY29uPiAtLT5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgPHRlbXBsYXRlICNsYWJlbD1cInsgbm9kZSB9XCI+XHJcbiAgICAgICAgPGRpdiA6Y2xhc3M9XCJ7ICdmb2N1c2VkdHJlZSc6IHNlbGVjdGVkID09PSBub2RlIH1cIiBjbGFzcz1cImxhYmVsXCI+IHt7IG5vZGUubmFtZSB8fCBub2RlLnVpZCB9fTwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9UcmVlVmlldz5cclxuICAgIDx0ZWxlcG9ydCB2LWlmPVwiYWRkRWxlbWVudFZpZXdcIiB0bz1cIi5tb2RhbC1jb250ZW50XCI+XHJcbiAgICAgIDxFbGVtZW50QWRkIHYtbW9kZWw9XCJlbGVtZW50RGF0YVwiIDpwYXJlbnQ9XCJzZWxlY3RlZFwiPjwvRWxlbWVudEFkZD5cclxuICAgIDwvdGVsZXBvcnQ+XHJcbiAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5pbXBvcnQgVHJlZVZpZXcgZnJvbSAnLi9UcmVlVmlldy52dWUnO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gIG5hbWU6IFwiVHJlZUVsZW1lbnRcIixcclxuICBwcm9wczoge1xyXG4gICAgdGl0bGU6IFwiXCJcclxuICB9LFxyXG4gIGRhdGEoKSB7XHJcbiAgICByZXR1cm4ge1xyXG4gICAgICBmaWx0ZXJzVmlldzogZmFsc2UsXHJcbiAgICAgIC8vdHJlZTogW10sXHJcbiAgICAgIGZpbHRlclJlY3Q6IHt9LFxyXG4gICAgICByZXF1ZXN0UmVtb3ZlOiBmYWxzZSxcclxuICAgICAgcmVtb3ZlRGF0YToge1xyXG4gICAgICAgIHRleHQ6IGBgLFxyXG4gICAgICB9XHJcbiAgICB9XHJcbiAgfSxcclxuICBjb21wdXRlZDoge1xyXG4gICAgcHJvamVjdCgpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGFwcC5wcm9qZWN0XHJcbiAgICB9LFxyXG4gICAgc2VsZWN0ZWQoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uLnNlbGVjdGVkXHJcbiAgICB9LFxyXG4gICAgc2VsZWN0aW9uKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvblxyXG4gICAgfSxcclxuICAgIHRyZWUoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAucHJvamVjdC5jaGlsZHJlblxyXG4gICAgfVxyXG4gIH0sXHJcbiAgbWV0aG9kczoge1xyXG4gICAgYXN5bmMgdXBkYXRlVmlzaWJsZSh0YXJnZXQpIHtcclxuICAgICAgY29uc3Qgc3RhdGUgPSB0aGlzLiRhcHAucHJvamVjdC5nZXRTdGF0ZSh0YXJnZXQsIHRoaXMuJGFwcC5zbGlkZXMuYWN0aXZlZC51aWQpXHJcblxyXG4gICAgICBzdGF0ZS52aXNpYmxlID0gdGFyZ2V0LnZpc2libGVcclxuXHJcbiAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGFyZ2V0KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGhhbmRsZU5vZGVEcm9wKGRhdGEpIHtcclxuICAgICAgdGhpcy4kYXBwLnByb2plY3QuaGFuZGxlQXNzZXQoZGF0YSlcclxuICAgIH0sXHJcbiAgICBmaWx0ZXJFbGVtZW50cyhub2Rlcykge1xyXG4gICAgICByZXR1cm4gbm9kZXMuZmlsdGVyKG4gPT4gbi5pc0VsZW1lbnQpXHJcbiAgICB9LFxyXG4gICAgYXN5bmMgaW5zZXJ0VG9TbGlkZShub2RlKSB7XHJcbiAgICAgIGlmIChub2RlLnN0YXRlKSB7XHJcbiAgICAgICAgdGhpcy4kYXBwLnRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgbWVzc2FnZTogYFRoZSBlbGVtZW50IGhhcyBhbHJlYWR5IGJlZW4gYWRkZWQgdG8gdGhpcyBzbGlkZWBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgICB9XHJcbiAgICAgIGF3YWl0IHRoaXMuJGFwcC5zbGlkZXMuYWRkU3RhdGUobm9kZSlcclxuICAgIH0sXHJcbiAgICBkZWxldGVFbGVtZW50KG5vZGUpIHtcclxuICAgICAgdGhpcy5yZW1vdmVEYXRhLnRleHQgPSBgRGVsZXRlICR7bm9kZS5uYW1lfSAoJHtub2RlLnVpZH0pID9gXHJcbiAgICAgIHRoaXMuJGFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgIHZhbHVlOiBcIkRlbGV0ZSBpdGVtXCIsXHJcbiAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlbW92ZSA9IGZhbHNlXHJcbiAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7fSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgIGxhYmVsOiBcIkRlbGV0ZVwiLFxyXG4gICAgICAgICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RSZW1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnByb2plY3QucmVtb3ZlKG5vZGUucGF0aHMpXHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAudG9hc3RzLmFkZCh7IG1lc3NhZ2U6IGBUaGUgZWxlbWVudCAke25vZGUubmFtZX0gaXMgZGVsZXRlZGAgfSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy4kZm9yY2VVcGRhdGUoKTtcclxuICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIHRoaXMucmVxdWVzdFJlbW92ZSA9IGZhbHNlXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgICB9KVxyXG4gICAgfSxcclxuICAgIG9uVXBkYXRlRXhwYW5kZWQobm9kZSkge1xyXG4gICAgICAvL2NvbnNvbGUubG9nKG5vZGUpXHJcbiAgICB9LFxyXG4gICAgb25Ob2RlQ2xpY2sobm9kZSkge1xyXG4gICAgICB0aGlzLiRhcHAuc2VsZWN0aW9uLnNlbGVjdChub2RlKVxyXG4gICAgfSxcclxuICAgIG9uQ2hhbmdlU2VsZWN0aW9uKCkge1xyXG5cclxuICAgIH0sXHJcbiAgfSxcclxuICBjb21wb25lbnRzOiB7IFRyZWVWaWV3IH1cclxufTtcclxuPC9zY3JpcHQ+XHJcblxyXG48c3R5bGUgbGFuZz1cInNjc3NcIiBzY29wZWQ+XHJcbi5oaWVyYXJoeS12aWV3IHtcclxuICBvdmVyZmxvdy15OiBhdXRvO1xyXG4gIG92ZXJmbG93LXg6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBmbGV4O1xyXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgaGVpZ2h0OiAxMDAlO1xyXG59XHJcblxyXG4uZm9jdXNlZHRyZWUge1xyXG4gIGNvbG9yOiB2YXIoLS10ZXh0LWZvY3VzZWQpO1xyXG4gIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJnLWZvY3VzZWQpXHJcbn1cclxuXHJcbi50cmVlaWNvbiB7XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBnYXA6IDNweDtcclxuXHJcbiAgLnN2Z2ljb24ge1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIH1cclxufVxyXG5cclxuLmxhYmVsIHtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgbWF4LXdpZHRoOiAxNDBweDtcclxufVxyXG48L3N0eWxlPiIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjU5NTU3MWQ0OWVjNDI5ZGYxMWJkXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjFcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOlsiYWRkRWxlbWVudFZpZXciLCJlbGVtZW50RGF0YSJdLCJzb3VyY2VSb290IjoiIn0=