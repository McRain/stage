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
        // 1758558142201
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

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=script&lang=js":
/*!*****************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/views/inspector.vue?vue&type=script&lang=js ***!
  \*****************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _components_inspector_inspectorpanel_vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @/components/inspector/inspectorpanel.vue */ "./src/components/inspector/inspectorpanel.vue");
/* harmony import */ var _viewpanel_vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./viewpanel.vue */ "./src/views/viewpanel.vue");
/* harmony import */ var _components_inspector_modeltypes_vue__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/inspector/modeltypes.vue */ "./src/components/inspector/modeltypes.vue");
/* harmony import */ var _components_inspector_assets_assetsview_vue__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/inspector/assets/assetsview.vue */ "./src/components/inspector/assets/assetsview.vue");
/* harmony import */ var _components_inspector_scene_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/inspector/scene.vue */ "./src/components/inspector/scene.vue");







/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    methods: {
        getState() {
            return this.$app.project.getState(this.selected, this.slide)
        },
        getProp(cmp) {
            const props = cmp.prop.split('.')
            let p = props[0]
            let target = this.selected
            for (let i = 0; i < props.length - 1; i++) {
                target = target[props[i]]
                p = props[i + 1]
            }
            return target[p]
        },

        async saveElement(cmp) {
            if (cmp.onupdate) {
                await cmp.onupdate(this.selected, null, null, this.slide)
            }
            await this.$app.project.save(this.selected)
        },

        /**
         * Метод для изменения значения свойства элемента в выбранном слайде
         * Текущее значение свойства самого элемента устанавливается в компоненте 
         * (или через v-model)
         * 
         * @param cmp Исходные параметры декларативного описания :
         * есть возможность предотвратить запись параметра в состояние (например название) 
         * установкой cmp.state=false
         * @param prop имя свойства - устанавливается в template если обработка события @update:modelValue
         * или получается из компонента, если обработка @update:state
         * @param val присваиваемое значение 
         * @param propertyVal 
         */
        async setTargetProperty(cmp, prop, val) {
            if (cmp.onupdate) {
                await cmp.onupdate(this.selected, prop, val, this.slide)
                if (!this.selected.isElement) {
                    return
                }
            }
            if (!('state' in cmp) || cmp.state === true) {
                if (val?.encode)
                    this.getState()[prop] = val.encode()
                else
                    this.getState()[prop] = val
            } else {
                if (val?.encode)
                    this.selected[prop] = val.encode()
                else
                    this.selected[prop] = val
            }
            if (this.selected.isElement)
                await this.$app.project.save(this.selected)
            else if (this.selected.isAsset) {
                await this.$app.assets.save(this.selected)
            }
        },
        /**
         * Метод вызывается как setTargetProperty но с необходимостью установить
         * значение свойства элемента, если компонент не может это сделать самостоятельно
         * 
         * @param prop - имя свойства - ставится автоматом из cmp
         * @param value - новое значение
         */
        async onComponentChanged(cmp, prop, value, propertyVal) {
            this.selected[prop] = value
            if (!this.selected.isElement) {
                if (cmp.onupdate) {
                    await cmp.onupdate(this.selected, prop, value, this.slide)
                }
                return
            }
            this.setTargetProperty(cmp, prop, value, propertyVal)
        },
        async onCleanStateValue(cmp, prop) {
            if (cmp.onclean) {
                await cmp.onclean(this.selected, prop, cmp, this.slide)
            } else {
                if (prop in this.getState()) {
                    delete this.getState()[prop]
                    await this.$app.project.save(this.selected)
                }
            }
        }
    },
    computed: {
        selected() {
            return this.$app.selection.selected
        },
        selectedUID() {
            return this.$app.selection.uid
        },
        /**
         * Возвращает набор компонентов для показа , зависящий от типа выбранного объекта
         */
        blocks() {
            console.log(this.selected.getTypes())
            return [
                {
                    label: "Name",
                    content: {
                        component: 'LabelEdit',
                        prop: "name",
                        state: false
                    },
                    head: {
                        component: 'Label',
                        prop: "name"
                    }
                },
                {
                    label: "Type",
                    readonly: true,
                    head: {

                        component: 'Label',
                        prop: "type"
                    }
                },
                ...this.$app.inspector.blocksFor(this.selected.getTypes())
            ]
        },
        slide() {
            return this.$app.slides.actived?.uid
        }
    },
    watch: {
        selected(n) {
            if (!n)
                return
            if (n.restore) {
                n.restore()
            }
        }
    },
    components: { InspectorPanel: _components_inspector_inspectorpanel_vue__WEBPACK_IMPORTED_MODULE_0__["default"], modeltypes: _components_inspector_modeltypes_vue__WEBPACK_IMPORTED_MODULE_2__["default"], assetsview: _components_inspector_assets_assetsview_vue__WEBPACK_IMPORTED_MODULE_3__["default"], ViewPanel: _viewpanel_vue__WEBPACK_IMPORTED_MODULE_1__["default"], SceneTools: _components_inspector_scene_vue__WEBPACK_IMPORTED_MODULE_4__["default"] }
});


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
  const _component_SceneTools = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("SceneTools")
  const _component_ViewPanel = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ViewPanel")
  const _directive_tooltip = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("tooltip")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ViewPanel, {
      class: "inspector",
      header: { label: 'Инспектор' }
    }, {
      footer: (0,vue__WEBPACK_IMPORTED_MODULE_0__.withCtx)(() => [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_SceneTools)
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
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("span", {
                              onClick: $event => ($options.onCleanStateValue(cmp.head || cmp.content, cmp.head ? cmp.head.prop : cmp.content.prop)),
                              class: "remove-icon"
                            }, [
                              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_icon, { value: "bin" })
                            ], 8 /* PROPS */, _hoisted_2)), [
                              [_directive_tooltip, 'Очистить значение в слайде']
                            ])
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
/******/ 	__webpack_require__.h = () => ("31cf1a2ab25909ce760b")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42NTc2MmFjMmE5YzY5ODVkNTc5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NDc0U7QUFDL0I7QUFDd0I7QUFDTztBQUNaOztBQUUxRCxpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25CO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7O1FBRUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVEO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7O1FBRUQsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1NBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNUO1lBQ0o7WUFDQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7b0JBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQztZQUNBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QztRQUNKLENBQUM7UUFDRCxDQUFDLENBQUM7U0FDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7U0FDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0Q7Z0JBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1Q7WUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUM7WUFDSjtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSDtvQkFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZjtnQkFDSixDQUFDO2dCQUNEO29CQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzt3QkFFRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2Y7Z0JBQ0osQ0FBQztnQkFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RDtRQUNKLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZDtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvRkFBRSxDQUFDLENBQUMs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Q0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvdmlld3MvaW5zcGVjdG9yLnZ1ZT8zMDhkIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy92aWV3cy9pbnNwZWN0b3IudnVlIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NTg1NTgxNDIyMDFcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIjx0ZW1wbGF0ZT5cclxuICAgIDxWaWV3UGFuZWwgY2xhc3M9XCJpbnNwZWN0b3JcIiA6aGVhZGVyPVwieyBsYWJlbDogJ9CY0L3RgdC/0LXQutGC0L7RgCcgfVwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkVUlEXCIgY2xhc3M9XCJlbGVtZW50XCI+XHJcbiAgICAgICAgICAgIDwhLS0gPGRpdj57eyBzZWxlY3RlZC5wYXRocy5qb2luKCctPicpIH19PC9kaXY+IC0tPlxyXG4gICAgICAgICAgICA8c2xvdD5cclxuICAgICAgICAgICAgICAgIDxJbnNwZWN0b3JQYW5lbCA6bGFiZWw9XCJjbXAubGFiZWxcIiA6dG9vbHRpcD1cImNtcC50b29sdGlwXCIgOnN0YXQ9XCJjbXAuc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIHYtZm9yPVwiKGNtcCwgaW5kZXgpIGluIGJsb2Nrc1wiIDprZXk9XCJjbXAubGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2ljb25zPVwieyBzdGF0IH1cIiB2LWlmPVwiIWNtcC5yZWFkb25seVwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25DbGVhblN0YXRlVmFsdWUoY21wLmhlYWQgfHwgY21wLmNvbnRlbnQsIGNtcC5oZWFkID8gY21wLmhlYWQucHJvcCA6IGNtcC5jb250ZW50LnByb3ApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdG9vbHRpcD1cIifQntGH0LjRgdGC0LjRgtGMINC30L3QsNGH0LXQvdC40LUg0LIg0YHQu9Cw0LnQtNC1J1wiIGNsYXNzPVwicmVtb3ZlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uIHZhbHVlPVwiYmluXCI+PC9pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2hlYWQgdi1pZj1cImNtcC5oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiY21wLmhlYWQuY29tcG9uZW50XCIgdi1iaW5kPVwiY21wLmhlYWQucHJvcHNcIiB2LW1vZGVsPVwic2VsZWN0ZWRbY21wLmhlYWQucHJvcF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwic2VsZWN0ZWRcIiA6cHJvcGVydHk9XCJjbXAuaGVhZFwiIDp0YXJnZXQ9XCJjbXAuaGVhZC5zdGF0ZSA/IGdldFN0YXRlKCkgOiBzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xlYW49XCIoLi4uYXJncykgPT4gb25DbGVhblN0YXRlVmFsdWUoY21wLmhlYWQsIC4uLmFyZ3MpXCIgQHNhdmU9XCJzYXZlRWxlbWVudChjbXAuaGVhZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0YXJnZXQ9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmhlYWQsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWxWYWx1ZT1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuaGVhZCwgY21wLmhlYWQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp2YWx1ZT1cIiguLi5hcmdzKSA9PiBvbkNvbXBvbmVudENoYW5nZWQoY21wLmhlYWQsIGNtcC5oZWFkLnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJjbXAuaGVhZC5ldmVudHMgfHwge31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2NvbnRlbnQgdi1pZj1cImNtcC5jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgY2xhc3M9XCJibG9ja2NvbXBvbmVudFwiIDppcz1cImNtcC5jb250ZW50LmNvbXBvbmVudFwiIHYtYmluZD1cImNtcC5jb250ZW50LnByb3BzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInNlbGVjdGVkXCIgdi1tb2RlbD1cInNlbGVjdGVkW2NtcC5jb250ZW50LnByb3BdXCIgOnByb3BlcnR5PVwiY21wLmNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRhcmdldD1cImNtcC5jb250ZW50LnN0YXRlID8gZ2V0U3RhdGUoKSA6IHNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGVhbj1cIiguLi5hcmdzKSA9PiBvbkNsZWFuU3RhdGVWYWx1ZShjbXAuY29udGVudCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNhdmU9XCJzYXZlRWxlbWVudChjbXAuY29udGVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0YXJnZXQ9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmNvbnRlbnQsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWxWYWx1ZT1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuY29udGVudCwgY21wLmNvbnRlbnQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp2YWx1ZT1cIiguLi5hcmdzKSA9PiBvbkNvbXBvbmVudENoYW5nZWQoY21wLmNvbnRlbnQsIGNtcC5jb250ZW50LnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJjbXAuY29udGVudC5ldmVudHMgfHwge31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvclBhbmVsPlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiIHYtZWxzZT5cclxuICAgICAgICAgICAgU2VsZWN0IGFuIGl0ZW0gb3Igc3RhdGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICAgICAgPFNjZW5lVG9vbHM+PC9TY2VuZVRvb2xzPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L1ZpZXdQYW5lbD5cclxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInBhbmVsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+SW5zcGVjdG9yPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IC0tPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSW5zcGVjdG9yUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9pbnNwZWN0b3IvaW5zcGVjdG9ycGFuZWwudnVlXCJcclxuaW1wb3J0IFZpZXdQYW5lbCBmcm9tIFwiLi92aWV3cGFuZWwudnVlXCJcclxuaW1wb3J0IG1vZGVsdHlwZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zcGVjdG9yL21vZGVsdHlwZXMudnVlXCJcclxuaW1wb3J0IGFzc2V0c3ZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zcGVjdG9yL2Fzc2V0cy9hc3NldHN2aWV3LnZ1ZVwiXHJcbmltcG9ydCBTY2VuZVRvb2xzIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3BlY3Rvci9zY2VuZS52dWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnByb2plY3QuZ2V0U3RhdGUodGhpcy5zZWxlY3RlZCwgdGhpcy5zbGlkZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3AoY21wKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gY21wLnByb3Auc3BsaXQoJy4nKVxyXG4gICAgICAgICAgICBsZXQgcCA9IHByb3BzWzBdXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnNlbGVjdGVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRbcHJvcHNbaV1dXHJcbiAgICAgICAgICAgICAgICBwID0gcHJvcHNbaSArIDFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIHNhdmVFbGVtZW50KGNtcCkge1xyXG4gICAgICAgICAgICBpZiAoY21wLm9udXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbXAub251cGRhdGUodGhpcy5zZWxlY3RlZCwgbnVsbCwgbnVsbCwgdGhpcy5zbGlkZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAucHJvamVjdC5zYXZlKHRoaXMuc2VsZWN0ZWQpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JzQtdGC0L7QtCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40Y8g0YHQstC+0LnRgdGC0LLQsCDRjdC70LXQvNC10L3RgtCwINCyINCy0YvQsdGA0LDQvdC90L7QvCDRgdC70LDQudC00LVcclxuICAgICAgICAgKiDQotC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LAg0YHQsNC80L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINCyINC60L7QvNC/0L7QvdC10L3RgtC1IFxyXG4gICAgICAgICAqICjQuNC70Lgg0YfQtdGA0LXQtyB2LW1vZGVsKVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBjbXAg0JjRgdGF0L7QtNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LTQtdC60LvQsNGA0LDRgtC40LLQvdC+0LPQviDQvtC/0LjRgdCw0L3QuNGPIDpcclxuICAgICAgICAgKiDQtdGB0YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINC30LDQv9C40YHRjCDQv9Cw0YDQsNC80LXRgtGA0LAg0LIg0YHQvtGB0YLQvtGP0L3QuNC1ICjQvdCw0L/RgNC40LzQtdGAINC90LDQt9Cy0LDQvdC40LUpIFxyXG4gICAgICAgICAqINGD0YHRgtCw0L3QvtCy0LrQvtC5IGNtcC5zdGF0ZT1mYWxzZVxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wINC40LzRjyDRgdCy0L7QudGB0YLQstCwIC0g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINCyIHRlbXBsYXRlINC10YHQu9C4INC+0LHRgNCw0LHQvtGC0LrQsCDRgdC+0LHRi9GC0LjRjyBAdXBkYXRlOm1vZGVsVmFsdWVcclxuICAgICAgICAgKiDQuNC70Lgg0L/QvtC70YPRh9Cw0LXRgtGB0Y8g0LjQtyDQutC+0LzQv9C+0L3QtdC90YLQsCwg0LXRgdC70Lgg0L7QsdGA0LDQsdC+0YLQutCwIEB1cGRhdGU6c3RhdGVcclxuICAgICAgICAgKiBAcGFyYW0gdmFsINC/0YDQuNGB0LLQsNC40LLQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUgXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5VmFsIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFzeW5jIHNldFRhcmdldFByb3BlcnR5KGNtcCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChjbXAub251cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNtcC5vbnVwZGF0ZSh0aGlzLnNlbGVjdGVkLCBwcm9wLCB2YWwsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEoJ3N0YXRlJyBpbiBjbXApIHx8IGNtcC5zdGF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbD8uZW5jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXSA9IHZhbC5lbmNvZGUoKVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXSA9IHZhbFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbD8uZW5jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRbcHJvcF0gPSB2YWwuZW5jb2RlKClcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkW3Byb3BdID0gdmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2VsZWN0ZWQuaXNFbGVtZW50KVxyXG4gICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXBwLnByb2plY3Quc2F2ZSh0aGlzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICBlbHNlIGlmICh0aGlzLnNlbGVjdGVkLmlzQXNzZXQpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5hc3NldHMuc2F2ZSh0aGlzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQnNC10YLQvtC0INCy0YvQt9GL0LLQsNC10YLRgdGPINC60LDQuiBzZXRUYXJnZXRQcm9wZXJ0eSDQvdC+INGBINC90LXQvtCx0YXQvtC00LjQvNC+0YHRgtGM0Y4g0YPRgdGC0LDQvdC+0LLQuNGC0YxcclxuICAgICAgICAgKiDQt9C90LDRh9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LAg0Y3Qu9C10LzQtdC90YLQsCwg0LXRgdC70Lgg0LrQvtC80L/QvtC90LXQvdGCINC90LUg0LzQvtC20LXRgiDRjdGC0L4g0YHQtNC10LvQsNGC0Ywg0YHQsNC80L7RgdGC0L7Rj9GC0LXQu9GM0L3QvlxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wIC0g0LjQvNGPINGB0LLQvtC50YHRgtCy0LAgLSDRgdGC0LDQstC40YLRgdGPINCw0LLRgtC+0LzQsNGC0L7QvCDQuNC3IGNtcFxyXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSAtINC90L7QstC+0LUg0LfQvdCw0YfQtdC90LjQtVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFzeW5jIG9uQ29tcG9uZW50Q2hhbmdlZChjbXAsIHByb3AsIHZhbHVlLCBwcm9wZXJ0eVZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkW3Byb3BdID0gdmFsdWVcclxuICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmlzRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGNtcC5vbnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IGNtcC5vbnVwZGF0ZSh0aGlzLnNlbGVjdGVkLCBwcm9wLCB2YWx1ZSwgdGhpcy5zbGlkZSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VGFyZ2V0UHJvcGVydHkoY21wLCBwcm9wLCB2YWx1ZSwgcHJvcGVydHlWYWwpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBhc3luYyBvbkNsZWFuU3RhdGVWYWx1ZShjbXAsIHByb3ApIHtcclxuICAgICAgICAgICAgaWYgKGNtcC5vbmNsZWFuKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbXAub25jbGVhbih0aGlzLnNlbGVjdGVkLCBwcm9wLCBjbXAsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBpZiAocHJvcCBpbiB0aGlzLmdldFN0YXRlKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICBkZWxldGUgdGhpcy5nZXRTdGF0ZSgpW3Byb3BdXHJcbiAgICAgICAgICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXBwLnByb2plY3Quc2F2ZSh0aGlzLnNlbGVjdGVkKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uLnNlbGVjdGVkXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzZWxlY3RlZFVJRCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zZWxlY3Rpb24udWlkXHJcbiAgICAgICAgfSxcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDQktC+0LfQstGA0LDRidCw0LXRgiDQvdCw0LHQvtGAINC60L7QvNC/0L7QvdC10L3RgtC+0LIg0LTQu9GPINC/0L7QutCw0LfQsCAsINC30LDQstC40YHRj9GJ0LjQuSDQvtGCINGC0LjQv9CwINCy0YvQsdGA0LDQvdC90L7Qs9C+INC+0LHRitC10LrRgtCwXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmxvY2tzKCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh0aGlzLnNlbGVjdGVkLmdldFR5cGVzKCkpXHJcbiAgICAgICAgICAgIHJldHVybiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnTGFiZWxFZGl0JyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6ICdMYWJlbCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IFwibmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJUeXBlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcmVhZG9ubHk6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgaGVhZDoge1xyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnTGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInR5cGVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAuLi50aGlzLiRhcHAuaW5zcGVjdG9yLmJsb2Nrc0Zvcih0aGlzLnNlbGVjdGVkLmdldFR5cGVzKCkpXHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHNsaWRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnNsaWRlcy5hY3RpdmVkPy51aWRcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgd2F0Y2g6IHtcclxuICAgICAgICBzZWxlY3RlZChuKSB7XHJcbiAgICAgICAgICAgIGlmICghbilcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICBpZiAobi5yZXN0b3JlKSB7XHJcbiAgICAgICAgICAgICAgICBuLnJlc3RvcmUoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXBvbmVudHM6IHsgSW5zcGVjdG9yUGFuZWwsIG1vZGVsdHlwZXMsIGFzc2V0c3ZpZXcsIFZpZXdQYW5lbCwgU2NlbmVUb29scyB9XHJcbn1cclxuPC9zY3JpcHQ+XHJcbjxzdHlsZT5cclxuLmluc3BlY3RvciB7XHJcbiAgICB1c2VyLXNlbGVjdDogbm9uZTtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGw7XHJcbiAgICBwb3NpdGlvbjogYWJzb2x1dGU7XHJcbiAgICB0b3A6IDQ4cHg7XHJcbiAgICBsZWZ0OiA0cHg7XHJcbiAgICBib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDogMjgwcHg7XHJcbiAgICBwYWRkaW5nOiAxcHg7XHJcbn1cclxuPC9zdHlsZT4iLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCIzMWNmMWEyYWIyNTkwOWNlNzYwYlwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9