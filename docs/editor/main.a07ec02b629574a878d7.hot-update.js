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
        // 1758728691300
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
/******/ 	__webpack_require__.h = () => ("558d8d4e52e7e0b6123b")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5hMDdlYzAyYjYyOTU3NGE4NzhkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NDc0U7QUFDL0I7QUFDd0I7QUFDTztBQUNaOztBQUUxRCxpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25CO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7O1FBRUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVEO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7O1FBRUQsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1NBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNUO1lBQ0o7WUFDQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7b0JBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQztZQUNBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QztRQUNKLENBQUM7UUFDRCxDQUFDLENBQUM7U0FDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7U0FDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0Q7Z0JBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1Q7WUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUM7WUFDSjtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSDtvQkFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZjtnQkFDSixDQUFDO2dCQUNEO29CQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzt3QkFFRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2Y7Z0JBQ0osQ0FBQztnQkFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RDtRQUNKLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZDtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxvRkFBRSxDQUFDLENBQUMs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VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy92aWV3cy9pbnNwZWN0b3IudnVlPzMwOGQiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL3ZpZXdzL2luc3BlY3Rvci52dWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307XG4gICAgaWYobW9kdWxlLmhvdCkge1xuICAgICAgKGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbG9jYWxzSnNvblN0cmluZyA9IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gMTc1ODcyODY5MTMwMFxuICAgICAgICB2YXIgY3NzUmVsb2FkID0gcmVxdWlyZShcIi4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2htci9ob3RNb2R1bGVSZXBsYWNlbWVudC5qc1wiKShtb2R1bGUuaWQsIHt9KTtcbiAgICAgICAgLy8gb25seSBpbnZhbGlkYXRlIHdoZW4gbG9jYWxzIGNoYW5nZVxuICAgICAgICBpZiAoXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICYmXG4gICAgICAgICAgbW9kdWxlLmhvdC5kYXRhLnZhbHVlICE9PSBsb2NhbHNKc29uU3RyaW5nXG4gICAgICAgICkge1xuICAgICAgICAgIG1vZHVsZS5ob3QuaW52YWxpZGF0ZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIG1vZHVsZS5ob3QuYWNjZXB0KCk7XG4gICAgICAgIH1cbiAgICAgICAgbW9kdWxlLmhvdC5kaXNwb3NlKGZ1bmN0aW9uKGRhdGEpIHtcbiAgICAgICAgICBkYXRhLnZhbHVlID0gbG9jYWxzSnNvblN0cmluZztcbiAgICAgICAgICBjc3NSZWxvYWQoKTtcbiAgICAgICAgfSk7XG4gICAgICB9KSgpO1xuICAgIH1cbiAgIiwiPHRlbXBsYXRlPlxyXG4gICAgPFZpZXdQYW5lbCBjbGFzcz1cImluc3BlY3RvclwiIDpoZWFkZXI9XCJ7IGxhYmVsOiAn0JjQvdGB0L/QtdC60YLQvtGAJyB9XCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWRVSURcIiBjbGFzcz1cImVsZW1lbnRcIj5cclxuICAgICAgICAgICAgPCEtLSA8ZGl2Pnt7IHNlbGVjdGVkLnBhdGhzLmpvaW4oJy0+JykgfX08L2Rpdj4gLS0+XHJcbiAgICAgICAgICAgIDxzbG90PlxyXG4gICAgICAgICAgICAgICAgPEluc3BlY3RvclBhbmVsIDpsYWJlbD1cImNtcC5sYWJlbFwiIDp0b29sdGlwPVwiY21wLnRvb2x0aXBcIiA6c3RhdD1cImNtcC5zdGF0ZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgdi1mb3I9XCIoY21wLCBpbmRleCkgaW4gYmxvY2tzXCIgOmtleT1cImNtcC5sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDx0ZW1wbGF0ZSAjaWNvbnM9XCJ7IHN0YXQgfVwiIHYtaWY9XCIhY21wLnJlYWRvbmx5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIHYtaWY9XCIhY21wLm5vbnN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGljaz1cIm9uQ2xlYW5TdGF0ZVZhbHVlKGNtcC5oZWFkIHx8IGNtcC5jb250ZW50LCBjbXAuaGVhZCA/IGNtcC5oZWFkLnByb3AgOiBjbXAuY29udGVudC5wcm9wKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LXRvb2x0aXA9XCIn0J7Rh9C40YHRgtC40YLRjCDQt9C90LDRh9C10L3QuNC1INCyINGB0LvQsNC50LTQtSdcIiBjbGFzcz1cInJlbW92ZS1pY29uXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8aWNvbiB2YWx1ZT1cImJpblwiPjwvaWNvbj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNoZWFkIHYtaWY9XCJjbXAuaGVhZFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IDppcz1cImNtcC5oZWFkLmNvbXBvbmVudFwiIHYtYmluZD1cImNtcC5oZWFkLnByb3BzXCIgdi1tb2RlbD1cInNlbGVjdGVkW2NtcC5oZWFkLnByb3BdXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInNlbGVjdGVkXCIgOnByb3BlcnR5PVwiY21wLmhlYWRcIiA6dGFyZ2V0PVwiY21wLmhlYWQuc3RhdGUgPyBnZXRTdGF0ZSgpIDogc2VsZWN0ZWRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsZWFuPVwiKC4uLmFyZ3MpID0+IG9uQ2xlYW5TdGF0ZVZhbHVlKGNtcC5oZWFkLCAuLi5hcmdzKVwiIEBzYXZlPVwic2F2ZUVsZW1lbnQoY21wLmhlYWQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGFyZ2V0PVwiKC4uLmFyZ3MpID0+IHNldFRhcmdldFByb3BlcnR5KGNtcC5oZWFkLCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsVmFsdWU9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmhlYWQsIGNtcC5oZWFkLnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dmFsdWU9XCIoLi4uYXJncykgPT4gb25Db21wb25lbnRDaGFuZ2VkKGNtcC5oZWFkLCBjbXAuaGVhZC5wcm9wLCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwiY21wLmhlYWQuZXZlbnRzIHx8IHt9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNjb250ZW50IHYtaWY9XCJjbXAuY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8Y29tcG9uZW50IGNsYXNzPVwiYmxvY2tjb21wb25lbnRcIiA6aXM9XCJjbXAuY29udGVudC5jb21wb25lbnRcIiB2LWJpbmQ9XCJjbXAuY29udGVudC5wcm9wc1wiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA6dmFsdWU9XCJzZWxlY3RlZFwiIHYtbW9kZWw9XCJzZWxlY3RlZFtjbXAuY29udGVudC5wcm9wXVwiIDpwcm9wZXJ0eT1cImNtcC5jb250ZW50XCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp0YXJnZXQ9XCJjbXAuY29udGVudC5zdGF0ZSA/IGdldFN0YXRlKCkgOiBzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xlYW49XCIoLi4uYXJncykgPT4gb25DbGVhblN0YXRlVmFsdWUoY21wLmNvbnRlbnQsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBzYXZlPVwic2F2ZUVsZW1lbnQoY21wLmNvbnRlbnQpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dGFyZ2V0PVwiKC4uLmFyZ3MpID0+IHNldFRhcmdldFByb3BlcnR5KGNtcC5jb250ZW50LCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAdXBkYXRlOm1vZGVsVmFsdWU9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmNvbnRlbnQsIGNtcC5jb250ZW50LnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6dmFsdWU9XCIoLi4uYXJncykgPT4gb25Db21wb25lbnRDaGFuZ2VkKGNtcC5jb250ZW50LCBjbXAuY29udGVudC5wcm9wLCAuLi5hcmdzKVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2LW9uPVwiY21wLmNvbnRlbnQuZXZlbnRzIHx8IHt9XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvY29tcG9uZW50PlxyXG4gICAgICAgICAgICAgICAgICAgIDwvdGVtcGxhdGU+XHJcblxyXG4gICAgICAgICAgICAgICAgPC9JbnNwZWN0b3JQYW5lbD5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibGFiZWxcIiB2LWVsc2U+XHJcbiAgICAgICAgICAgIFNlbGVjdCBhbiBpdGVtIG9yIHN0YXRlXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPHRlbXBsYXRlICNmb290ZXI+XHJcbiAgICAgICAgICAgIDxTY2VuZVRvb2xzPjwvU2NlbmVUb29scz5cclxuICAgICAgICA8L3RlbXBsYXRlPlxyXG4gICAgPC9WaWV3UGFuZWw+XHJcbiAgICA8IS0tIDxkaXYgY2xhc3M9XCJwYW5lbC1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwicGFuZWxcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlYWRlclwiPkluc3BlY3RvcjwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9vdGVyXCI+XHJcblxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PiAtLT5cclxuPC90ZW1wbGF0ZT5cclxuPHNjcmlwdD5cclxuaW1wb3J0IEluc3BlY3RvclBhbmVsIGZyb20gXCJAL2NvbXBvbmVudHMvaW5zcGVjdG9yL2luc3BlY3RvcnBhbmVsLnZ1ZVwiXHJcbmltcG9ydCBWaWV3UGFuZWwgZnJvbSBcIi4vdmlld3BhbmVsLnZ1ZVwiXHJcbmltcG9ydCBtb2RlbHR5cGVzIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3BlY3Rvci9tb2RlbHR5cGVzLnZ1ZVwiXHJcbmltcG9ydCBhc3NldHN2aWV3IGZyb20gXCIuLi9jb21wb25lbnRzL2luc3BlY3Rvci9hc3NldHMvYXNzZXRzdmlldy52dWVcIlxyXG5pbXBvcnQgU2NlbmVUb29scyBmcm9tIFwiLi4vY29tcG9uZW50cy9pbnNwZWN0b3Ivc2NlbmUudnVlXCJcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBnZXRTdGF0ZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFwcC5wcm9qZWN0LmdldFN0YXRlKHRoaXMuc2VsZWN0ZWQsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBnZXRQcm9wKGNtcCkge1xyXG4gICAgICAgICAgICBjb25zdCBwcm9wcyA9IGNtcC5wcm9wLnNwbGl0KCcuJylcclxuICAgICAgICAgICAgbGV0IHAgPSBwcm9wc1swXVxyXG4gICAgICAgICAgICBsZXQgdGFyZ2V0ID0gdGhpcy5zZWxlY3RlZFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb3BzLmxlbmd0aCAtIDE7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0W3Byb3BzW2ldXVxyXG4gICAgICAgICAgICAgICAgcCA9IHByb3BzW2kgKyAxXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0YXJnZXRbcF1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBzYXZlRWxlbWVudChjbXApIHtcclxuICAgICAgICAgICAgaWYgKGNtcC5vbnVwZGF0ZSkge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY21wLm9udXBkYXRlKHRoaXMuc2VsZWN0ZWQsIG51bGwsIG51bGwsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgYXdhaXQgdGhpcy4kYXBwLnByb2plY3Quc2F2ZSh0aGlzLnNlbGVjdGVkKVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqINCc0LXRgtC+0LQg0LTQu9GPINC40LfQvNC10L3QtdC90LjRjyDQt9C90LDRh9C10L3QuNGPINGB0LLQvtC50YHRgtCy0LAg0Y3Qu9C10LzQtdC90YLQsCDQsiDQstGL0LHRgNCw0L3QvdC+0Lwg0YHQu9Cw0LnQtNC1XHJcbiAgICAgICAgICog0KLQtdC60YPRidC10LUg0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwINGB0LDQvNC+0LPQviDRjdC70LXQvNC10L3RgtCwINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQsiDQutC+0LzQv9C+0L3QtdC90YLQtSBcclxuICAgICAgICAgKiAo0LjQu9C4INGH0LXRgNC10Lcgdi1tb2RlbClcclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gY21wINCY0YHRhdC+0LTQvdGL0LUg0L/QsNGA0LDQvNC10YLRgNGLINC00LXQutC70LDRgNCw0YLQuNCy0L3QvtCz0L4g0L7Qv9C40YHQsNC90LjRjyA6XHJcbiAgICAgICAgICog0LXRgdGC0Ywg0LLQvtC30LzQvtC20L3QvtGB0YLRjCDQv9GA0LXQtNC+0YLQstGA0LDRgtC40YLRjCDQt9Cw0L/QuNGB0Ywg0L/QsNGA0LDQvNC10YLRgNCwINCyINGB0L7RgdGC0L7Rj9C90LjQtSAo0L3QsNC/0YDQuNC80LXRgCDQvdCw0LfQstCw0L3QuNC1KSBcclxuICAgICAgICAgKiDRg9GB0YLQsNC90L7QstC60L7QuSBjbXAuc3RhdGU9ZmFsc2VcclxuICAgICAgICAgKiBAcGFyYW0gcHJvcCDQuNC80Y8g0YHQstC+0LnRgdGC0LLQsCAtINGD0YHRgtCw0L3QsNCy0LvQuNCy0LDQtdGC0YHRjyDQsiB0ZW1wbGF0ZSDQtdGB0LvQuCDQvtCx0YDQsNCx0L7RgtC60LAg0YHQvtCx0YvRgtC40Y8gQHVwZGF0ZTptb2RlbFZhbHVlXHJcbiAgICAgICAgICog0LjQu9C4INC/0L7Qu9GD0YfQsNC10YLRgdGPINC40Lcg0LrQvtC80L/QvtC90LXQvdGC0LAsINC10YHQu9C4INC+0LHRgNCw0LHQvtGC0LrQsCBAdXBkYXRlOnN0YXRlXHJcbiAgICAgICAgICogQHBhcmFtIHZhbCDQv9GA0LjRgdCy0LDQuNCy0LDQtdC80L7QtSDQt9C90LDRh9C10L3QuNC1IFxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wZXJ0eVZhbCBcclxuICAgICAgICAgKi9cclxuICAgICAgICBhc3luYyBzZXRUYXJnZXRQcm9wZXJ0eShjbXAsIHByb3AsIHZhbCkge1xyXG4gICAgICAgICAgICBpZiAoY21wLm9udXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbXAub251cGRhdGUodGhpcy5zZWxlY3RlZCwgcHJvcCwgdmFsLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgICAgICAgICAgaWYgKCF0aGlzLnNlbGVjdGVkLmlzRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICghKCdzdGF0ZScgaW4gY21wKSB8fCBjbXAuc3RhdGUgPT09IHRydWUpIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWw/LmVuY29kZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXRlKClbcHJvcF0gPSB2YWwuZW5jb2RlKClcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldFN0YXRlKClbcHJvcF0gPSB2YWxcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIGlmICh2YWw/LmVuY29kZSlcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkW3Byb3BdID0gdmFsLmVuY29kZSgpXHJcbiAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFtwcm9wXSA9IHZhbFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmlzRWxlbWVudClcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZC5pc0Fzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAuYXNzZXRzLnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JzQtdGC0L7QtCDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQutCw0Logc2V0VGFyZ2V0UHJvcGVydHkg0L3QviDRgSDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLRjNGOINGD0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICog0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwINGN0LvQtdC80LXQvdGC0LAsINC10YHQu9C4INC60L7QvNC/0L7QvdC10L3RgiDQvdC1INC80L7QttC10YIg0Y3RgtC+INGB0LTQtdC70LDRgtGMINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcHJvcCAtINC40LzRjyDRgdCy0L7QudGB0YLQstCwIC0g0YHRgtCw0LLQuNGC0YHRjyDQsNCy0YLQvtC80LDRgtC+0Lwg0LjQtyBjbXBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgLSDQvdC+0LLQvtC1INC30L3QsNGH0LXQvdC40LVcclxuICAgICAgICAgKi9cclxuICAgICAgICBhc3luYyBvbkNvbXBvbmVudENoYW5nZWQoY21wLCBwcm9wLCB2YWx1ZSwgcHJvcGVydHlWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFtwcm9wXSA9IHZhbHVlXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbXAub251cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjbXAub251cGRhdGUodGhpcy5zZWxlY3RlZCwgcHJvcCwgdmFsdWUsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFRhcmdldFByb3BlcnR5KGNtcCwgcHJvcCwgdmFsdWUsIHByb3BlcnR5VmFsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgb25DbGVhblN0YXRlVmFsdWUoY21wLCBwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmIChjbXAub25jbGVhbikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY21wLm9uY2xlYW4odGhpcy5zZWxlY3RlZCwgcHJvcCwgY21wLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gdGhpcy5nZXRTdGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHNlbGVjdGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvbi5zZWxlY3RlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0ZWRVSUQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uLnVpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNCx0L7RgCDQutC+0LzQv9C+0L3QtdC90YLQvtCyINC00LvRjyDQv9C+0LrQsNC30LAgLCDQt9Cw0LLQuNGB0Y/RidC40Lkg0L7RgiDRgtC40L/QsCDQstGL0LHRgNCw0L3QvdC+0LPQviDQvtCx0YrQtdC60YLQsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2NrcygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZC5nZXRUeXBlcygpKVxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ0xhYmVsRWRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnTGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ0xhYmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy4kYXBwLmluc3BlY3Rvci5ibG9ja3NGb3IodGhpcy5zZWxlY3RlZC5nZXRUeXBlcygpKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zbGlkZXMuYWN0aXZlZD8udWlkXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQobikge1xyXG4gICAgICAgICAgICBpZiAoIW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKG4ucmVzdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgbi5yZXN0b3JlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7IEluc3BlY3RvclBhbmVsLCBtb2RlbHR5cGVzLCBhc3NldHN2aWV3LCBWaWV3UGFuZWwsIFNjZW5lVG9vbHMgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi5pbnNwZWN0b3Ige1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcbjwvc3R5bGU+IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNTU4ZDhkNGU1MmU3ZTBiNjEyM2JcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==