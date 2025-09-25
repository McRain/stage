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
        // 1758789781484
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
      },
      elementData: { name: "New Element", type: "Group" },
      addElementView: false
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
    ($data.addElementView)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Teleport, {
          key: 0,
          to: ".modal-content"
        }, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ElementAdd, {
            modelValue: $data.elementData,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($data.elementData) = $event)),
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
/******/ 	__webpack_require__.h = () => ("d87699feb226e4a497e7")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi4zODk4MGUzZjZlMDUyYzBmODNhZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7O0FDWXNDOztBQUV0QyxpRUFBZTtFQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0VBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO0lBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztFQUNWLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO01BQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7TUFDcEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztNQUNWLENBQUM7TUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDbkQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QjtFQUNGLENBQUM7RUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO01BQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN6QixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDVixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMzQixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2xDO0VBQ0YsQ0FBQztFQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtJQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUMxQixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDOztNQUU3RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzs7TUFFN0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ3BDLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtNQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUN0QyxDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDeEIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM1RCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO01BQ1A7TUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDdEMsQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7TUFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7TUFDM0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtVQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1VBQ3BCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7VUFDM0I7UUFDRixDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztRQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7VUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUDtjQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDekIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUN2RSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUN2QjtZQUNGLENBQUM7WUFDRDtjQUNFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztjQUNmLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2NBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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MUQsS0FBSywrQ0FDZCxDQUFtRyxFQURqRixJQUFJO1FBQ3RCLHdEQUFtRztVQUE3RixLQUFLLHdFQUFtQixpQkFBUSxLQUFLLElBQUksSUFBVSxPQUFPO2dFQUFLLElBQUksQ0FBQyxJQUFJLElBQUksSUFBSSxDQUFDLEdBQUc7Ozs7S0FHOUUsb0JBQWM7MkRBQTlCLGlEQUVXOztVQUZxQixFQUFFLEVBQUMsZ0JBQWdCOztVQUNqRCxpREFBa0U7d0JBQTdDLGlCQUFXO3lFQUFYLGlCQUFXO1lBQUcsTUFBTSxFQUFFLGlCQUFROzs7Ozs7Ozs7Ozs7O1VDN0J6RCxzRDs7Ozs7VUNBQSxzREFBc0Qsa0JBQWtCO1VBQ3hFO1VBQ0E7VUFDQSxnQkFBZ0Isc0VBQXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RlbHN0cmVlLnZ1ZT80MGE2Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL21vZGVsc3RyZWUudnVlIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NTg3ODk3ODE0ODRcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIjx0ZW1wbGF0ZT5cclxuICA8ZGl2IGNsYXNzPVwiaGllcmFyaHktdmlld1wiPlxyXG4gICAgPGRpdj57eyB0aXRsZSB9fTogPGJ1dHRvbiBAY2xpY2s9XCJwcm9qZWN0LmFkZEVsZW1lbnQoc2VsZWN0ZWQpXCI+XHJcbiAgICAgICAgPGljb24gdmFsdWU9XCJwbHVzXCIgc2l6ZT1cIjAuNzVlbVwiPjwvaWNvbj5cclxuICAgICAgPC9idXR0b24+PC9kaXY+XHJcbiAgICA8VHJlZVZpZXcgOmZpbHRlcj1cImZpbHRlckVsZW1lbnRzXCIgOnRyZWU9XCJ0cmVlXCIgQGNsaWNrTm9kZT1cIm9uTm9kZUNsaWNrXCIgQGNoYW5nZVNlbGVjdD1cIm9uQ2hhbmdlU2VsZWN0aW9uXCJcclxuICAgICAgY2hpbGRzRmlsZWQ9XCJjaGlsZHJlblwiIEB1cGRhdGVFeHBhbmRlZD1cIm9uVXBkYXRlRXhwYW5kZWRcIiA6c2VsZWN0b3I9XCJmYWxzZVwiIDpkcm9wcGFibGU9XCJ0cnVlXCJcclxuICAgICAgQG5vZGUtZHJvcD1cImhhbmRsZU5vZGVEcm9wXCI+XHJcbiAgICAgIDx0ZW1wbGF0ZSAjcHJlcGVuZD1cInsgbm9kZSwgaW5kZXggfVwiPlxyXG4gICAgICAgIDxkaXY+PGlucHV0IHR5cGU9XCJjaGVja2JveFwiIHYtbW9kZWw9XCJub2RlLnZpc2libGVcIiBAY2hhbmdlPVwidXBkYXRlVmlzaWJsZShub2RlKVwiPjwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgI2FwcGVuZD1cInsgbm9kZSwgaW5kZXggfVwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJ0cmVlaWNvblwiPlxyXG4gICAgICAgICAgPCEtLSA8aWNvbiB2YWx1ZT1cInRhcmdldFwiIHYtdG9vbHRpcD1cIifQpNC+0LrRg9GBJ1wiIHNpemU9XCIxZW1cIiBAY2xpY2s9XCIkZW1pdCgndGFyZ2V0Jywgbm9kZSlcIj48L2ljb24+LS0+XHJcbiAgICAgICAgICA8IS0tIDxpY29uIHYtdG9vbHRpcD1cIifQktC40LTQuNC80L7RgdGC0YwnXCIgOnZhbHVlPVwibm9kZS5zaG93ID8gJ2V5ZScgOiAnZXllLWJsb2NrZWQnXCIgc2l6ZT1cIjFlbVwiXHJcbiAgICAgICAgICAgIEBjbGljaz1cIm5vZGUudmlzaWJsZSA9ICFub2RlLnZpc2libGVcIiA6Y29sb3I9XCJub2RlLnZpc2libGUgPyAnIzhlYzU4ZScgOiAnIzhlYzU4ZTgwJ1wiPlxyXG4gICAgICAgICAgPC9pY29uPiAtLT5cclxuICAgICAgICAgIDxpY29uIHYtaWY9XCIhbm9kZS5wYXJlbnRcIiB2LXRvb2x0aXA9XCInQWRkIHRvIHNsaWRlJ1wiIHZhbHVlPVwiZGljZVwiIHNpemU9XCIxZW1cIiBAY2xpY2s9XCJpbnNlcnRUb1NsaWRlKG5vZGUpXCJcclxuICAgICAgICAgICAgOmNvbG9yPVwibm9kZS5zdGF0ZSA/ICcjOGVjNThlJyA6ICcjOGVjNThlODAnXCI+XHJcbiAgICAgICAgICA8L2ljb24+XHJcbiAgICAgICAgICA8aWNvbiBAY2xpY2s9XCJkZWxldGVFbGVtZW50KG5vZGUpXCIgdi10b29sdGlwPVwiJ1JlbW92ZSdcIiB2YWx1ZT1cImJpblwiIHNpemU9XCIxZW1cIj48L2ljb24+XHJcbiAgICAgICAgICA8IS0tIDxpY29uIHYtaWY9XCJpbmRleCA9PT0gMFwiIHNpemU9XCIxMDAlXCIgdmFsdWU9XCJiaW5cIj48L2ljb24+IC0tPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICA8L3RlbXBsYXRlPlxyXG4gICAgICA8dGVtcGxhdGUgI2xhYmVsPVwieyBub2RlIH1cIj5cclxuICAgICAgICA8ZGl2IDpjbGFzcz1cInsgJ2ZvY3VzZWR0cmVlJzogc2VsZWN0ZWQgPT09IG5vZGUgfVwiIGNsYXNzPVwibGFiZWxcIj4ge3sgbm9kZS5uYW1lIHx8IG5vZGUudWlkIH19PC9kaXY+XHJcbiAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L1RyZWVWaWV3PlxyXG4gICAgPHRlbGVwb3J0IHYtaWY9XCJhZGRFbGVtZW50Vmlld1wiIHRvPVwiLm1vZGFsLWNvbnRlbnRcIj5cclxuICAgICAgPEVsZW1lbnRBZGQgdi1tb2RlbD1cImVsZW1lbnREYXRhXCIgOnBhcmVudD1cInNlbGVjdGVkXCI+PC9FbGVtZW50QWRkPlxyXG4gICAgPC90ZWxlcG9ydD5cclxuICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCBUcmVlVmlldyBmcm9tICcuL1RyZWVWaWV3LnZ1ZSc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgbmFtZTogXCJUcmVlRWxlbWVudFwiLFxyXG4gIHByb3BzOiB7XHJcbiAgICB0aXRsZTogXCJcIlxyXG4gIH0sXHJcbiAgZGF0YSgpIHtcclxuICAgIHJldHVybiB7XHJcbiAgICAgIGZpbHRlcnNWaWV3OiBmYWxzZSxcclxuICAgICAgLy90cmVlOiBbXSxcclxuICAgICAgZmlsdGVyUmVjdDoge30sXHJcbiAgICAgIHJlcXVlc3RSZW1vdmU6IGZhbHNlLFxyXG4gICAgICByZW1vdmVEYXRhOiB7XHJcbiAgICAgICAgdGV4dDogYGAsXHJcbiAgICAgIH0sXHJcbiAgICAgIGVsZW1lbnREYXRhOiB7IG5hbWU6IFwiTmV3IEVsZW1lbnRcIiwgdHlwZTogXCJHcm91cFwiIH0sXHJcbiAgICAgIGFkZEVsZW1lbnRWaWV3OiBmYWxzZVxyXG4gICAgfVxyXG4gIH0sXHJcbiAgY29tcHV0ZWQ6IHtcclxuICAgIHByb2plY3QoKSB7XHJcbiAgICAgIHJldHVybiB0aGlzLiRhcHAucHJvamVjdFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGVkKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvbi5zZWxlY3RlZFxyXG4gICAgfSxcclxuICAgIHNlbGVjdGlvbigpIHtcclxuICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zZWxlY3Rpb25cclxuICAgIH0sXHJcbiAgICB0cmVlKCkge1xyXG4gICAgICByZXR1cm4gdGhpcy4kYXBwLnByb2plY3QuY2hpbGRyZW5cclxuICAgIH1cclxuICB9LFxyXG4gIG1ldGhvZHM6IHtcclxuICAgIGFzeW5jIHVwZGF0ZVZpc2libGUodGFyZ2V0KSB7XHJcbiAgICAgIGNvbnN0IHN0YXRlID0gdGhpcy4kYXBwLnByb2plY3QuZ2V0U3RhdGUodGFyZ2V0LCB0aGlzLiRhcHAuc2xpZGVzLmFjdGl2ZWQudWlkKVxyXG5cclxuICAgICAgc3RhdGUudmlzaWJsZSA9IHRhcmdldC52aXNpYmxlXHJcblxyXG4gICAgICBhd2FpdCB0aGlzLiRhcHAucHJvamVjdC5zYXZlKHRhcmdldClcclxuICAgIH0sXHJcbiAgICBhc3luYyBoYW5kbGVOb2RlRHJvcChkYXRhKSB7XHJcbiAgICAgIHRoaXMuJGFwcC5wcm9qZWN0LmhhbmRsZUFzc2V0KGRhdGEpXHJcbiAgICB9LFxyXG4gICAgZmlsdGVyRWxlbWVudHMobm9kZXMpIHtcclxuICAgICAgcmV0dXJuIG5vZGVzLmZpbHRlcihuID0+IG4uaXNFbGVtZW50KVxyXG4gICAgfSxcclxuICAgIGFzeW5jIGluc2VydFRvU2xpZGUobm9kZSkge1xyXG4gICAgICBpZiAobm9kZS5zdGF0ZSkge1xyXG4gICAgICAgIHRoaXMuJGFwcC50b2FzdHMuYWRkKHtcclxuICAgICAgICAgIG1lc3NhZ2U6IGBUaGUgZWxlbWVudCBoYXMgYWxyZWFkeSBiZWVuIGFkZGVkIHRvIHRoaXMgc2xpZGVgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgICAgfVxyXG4gICAgICBhd2FpdCB0aGlzLiRhcHAuc2xpZGVzLmFkZFN0YXRlKG5vZGUpXHJcbiAgICB9LFxyXG4gICAgZGVsZXRlRWxlbWVudChub2RlKSB7XHJcbiAgICAgIHRoaXMucmVtb3ZlRGF0YS50ZXh0ID0gYERlbGV0ZSAke25vZGUubmFtZX0gKCR7bm9kZS51aWR9KSA/YFxyXG4gICAgICB0aGlzLiRhcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICB2YWx1ZTogXCJEZWxldGUgaXRlbVwiLFxyXG4gICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICB0aGlzLiRhcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB0aGlzLnJlcXVlc3RSZW1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge30sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICBsYWJlbDogXCJEZWxldGVcIixcclxuICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRhcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXF1ZXN0UmVtb3ZlID0gZmFsc2VcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5wcm9qZWN0LnJlbW92ZShub2RlLnBhdGhzKVxyXG4gICAgICAgICAgICAgICAgdGhpcy4kYXBwLnRvYXN0cy5hZGQoeyBtZXNzYWdlOiBgVGhlIGVsZW1lbnQgJHtub2RlLm5hbWV9IGlzIGRlbGV0ZWRgIH0pXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMuJGZvcmNlVXBkYXRlKCk7XHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlcXVlc3RSZW1vdmUgPSBmYWxzZVxyXG4gICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgICAgfSlcclxuICAgIH0sXHJcbiAgICBvblVwZGF0ZUV4cGFuZGVkKG5vZGUpIHtcclxuICAgICAgLy9jb25zb2xlLmxvZyhub2RlKVxyXG4gICAgfSxcclxuICAgIG9uTm9kZUNsaWNrKG5vZGUpIHtcclxuICAgICAgdGhpcy4kYXBwLnNlbGVjdGlvbi5zZWxlY3Qobm9kZSlcclxuICAgIH0sXHJcbiAgICBvbkNoYW5nZVNlbGVjdGlvbigpIHtcclxuXHJcbiAgICB9LFxyXG4gIH0sXHJcbiAgY29tcG9uZW50czogeyBUcmVlVmlldyB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCIgc2NvcGVkPlxyXG4uaGllcmFyaHktdmlldyB7XHJcbiAgb3ZlcmZsb3cteTogYXV0bztcclxuICBvdmVyZmxvdy14OiBoaWRkZW47XHJcbiAgZGlzcGxheTogZmxleDtcclxuICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gIGhlaWdodDogMTAwJTtcclxufVxyXG5cclxuLmZvY3VzZWR0cmVlIHtcclxuICBjb2xvcjogdmFyKC0tdGV4dC1mb2N1c2VkKTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1iZy1mb2N1c2VkKVxyXG59XHJcblxyXG4udHJlZWljb24ge1xyXG4gIGRpc3BsYXk6IGZsZXg7XHJcbiAgZ2FwOiAzcHg7XHJcblxyXG4gIC5zdmdpY29uIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICB9XHJcbn1cclxuXHJcbi5sYWJlbCB7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIG1heC13aWR0aDogMTQwcHg7XHJcbn1cclxuPC9zdHlsZT4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCJkODc2OTlmZWIyMjZlNGE0OTdlN1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9