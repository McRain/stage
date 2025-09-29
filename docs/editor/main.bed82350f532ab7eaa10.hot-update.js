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
        // 1759081249306
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
            if (cmp.nosave) {
                return
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
/******/ 	__webpack_require__.h = () => ("cd7331e596d3bf27cd34")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5iZWQ4MjM1MGY1MzJhYjdlYWExMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUNVO0FBQ1YsT0FBTyxJQUFVO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixtQkFBTyxDQUFDLDRKQUE2RSxlQUFlO0FBQzVIO0FBQ0E7QUFDQSxVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCLFVBQVUsVUFBVTtBQUNwQjtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVO0FBQ1YsVUFBVSxpQkFBaUI7QUFDM0I7QUFDQSxRQUFRLFVBQVU7QUFDbEI7QUFDQTtBQUNBLFNBQVM7QUFDVCxPQUFPO0FBQ1A7QUFDQSxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3NDc0U7QUFDL0I7QUFDd0I7QUFDTztBQUNaOztBQUUxRCxpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDaEMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZixDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxFQUFFLENBQUMsRUFBRSxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDeEIsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDO1lBQ25CO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25CLENBQUM7O1FBRUQsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDbkIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzVEO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlDLENBQUM7O1FBRUQsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDbEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdkUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ3BCO1NBQ0EsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtTQUN4RCxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDaEYsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUMzQixFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNoRyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzNELEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztTQUNuQixDQUFDO1FBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDcEMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkQsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDMUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNUO1lBQ0o7WUFDQSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUN6QyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3ZDLENBQUMsQ0FBQyxDQUFDO29CQUNDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1lBQ2xDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDckMsQ0FBQyxDQUFDLENBQUM7b0JBQ0MsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQztZQUNoQztZQUNBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVDtZQUNBLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDdkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDNUIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QztRQUNKLENBQUM7UUFDRCxDQUFDLENBQUM7U0FDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDdEUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7U0FDL0U7U0FDQSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQztTQUN2RCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQzlCLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNwRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUMxQixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDN0Q7Z0JBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1Q7WUFDQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3hELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFELEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUN6QixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQzNCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDOUM7WUFDSjtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3RDLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNqQyxDQUFDO1FBQ0QsQ0FBQyxDQUFDO1NBQ0QsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1NBQy9FLENBQUM7UUFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSDtvQkFDSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7d0JBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ3RCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDWixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNmLENBQUM7b0JBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO3dCQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDbEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZjtnQkFDSixDQUFDO2dCQUNEO29CQUNJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNiLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFOzt3QkFFRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7d0JBQ2xCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7b0JBQ2Y7Z0JBQ0osQ0FBQztnQkFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3RDtRQUNKLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUN2QztJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDVCxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDZDtRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMs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QUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL3ZpZXdzL2luc3BlY3Rvci52dWU/MzA4ZCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvdmlld3MvaW5zcGVjdG9yLnZ1ZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzU5MDgxMjQ5MzA2XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCI8dGVtcGxhdGU+XHJcbiAgICA8Vmlld1BhbmVsIGNsYXNzPVwiaW5zcGVjdG9yXCIgOmhlYWRlcj1cInsgbGFiZWw6ICfQmNC90YHQv9C10LrRgtC+0YAnIH1cIj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZFVJRFwiIGNsYXNzPVwiZWxlbWVudFwiPlxyXG4gICAgICAgICAgICA8IS0tIDxkaXY+e3sgc2VsZWN0ZWQucGF0aHMuam9pbignLT4nKSB9fTwvZGl2PiAtLT5cclxuICAgICAgICAgICAgPHNsb3Q+XHJcbiAgICAgICAgICAgICAgICA8SW5zcGVjdG9yUGFuZWwgOmxhYmVsPVwiY21wLmxhYmVsXCIgOnRvb2x0aXA9XCJjbXAudG9vbHRpcFwiIDpzdGF0PVwiY21wLnN0YXRlXCJcclxuICAgICAgICAgICAgICAgICAgICB2LWZvcj1cIihjbXAsIGluZGV4KSBpbiBibG9ja3NcIiA6a2V5PVwiY21wLmxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHRlbXBsYXRlICNpY29ucz1cInsgc3RhdCB9XCIgdi1pZj1cIiFjbXAucmVhZG9ubHlcIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gdi1pZj1cIiFjbXAubm9uc3RhdGVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwib25DbGVhblN0YXRlVmFsdWUoY21wLmhlYWQgfHwgY21wLmNvbnRlbnQsIGNtcC5oZWFkID8gY21wLmhlYWQucHJvcCA6IGNtcC5jb250ZW50LnByb3ApXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtdG9vbHRpcD1cIifQntGH0LjRgdGC0LjRgtGMINC30L3QsNGH0LXQvdC40LUg0LIg0YHQu9Cw0LnQtNC1J1wiIGNsYXNzPVwicmVtb3ZlLWljb25cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpY29uIHZhbHVlPVwiYmluXCI+PC9pY29uPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2hlYWQgdi1pZj1cImNtcC5oZWFkXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgOmlzPVwiY21wLmhlYWQuY29tcG9uZW50XCIgdi1iaW5kPVwiY21wLmhlYWQucHJvcHNcIiB2LW1vZGVsPVwic2VsZWN0ZWRbY21wLmhlYWQucHJvcF1cIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnZhbHVlPVwic2VsZWN0ZWRcIiA6cHJvcGVydHk9XCJjbXAuaGVhZFwiIDp0YXJnZXQ9XCJjbXAuaGVhZC5zdGF0ZSA/IGdldFN0YXRlKCkgOiBzZWxlY3RlZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBAY2xlYW49XCIoLi4uYXJncykgPT4gb25DbGVhblN0YXRlVmFsdWUoY21wLmhlYWQsIC4uLmFyZ3MpXCIgQHNhdmU9XCJzYXZlRWxlbWVudChjbXAuaGVhZClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0YXJnZXQ9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmhlYWQsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWxWYWx1ZT1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuaGVhZCwgY21wLmhlYWQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp2YWx1ZT1cIiguLi5hcmdzKSA9PiBvbkNvbXBvbmVudENoYW5nZWQoY21wLmhlYWQsIGNtcC5oZWFkLnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJjbXAuaGVhZC5ldmVudHMgfHwge31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuICAgICAgICAgICAgICAgICAgICA8dGVtcGxhdGUgI2NvbnRlbnQgdi1pZj1cImNtcC5jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxjb21wb25lbnQgY2xhc3M9XCJibG9ja2NvbXBvbmVudFwiIDppcz1cImNtcC5jb250ZW50LmNvbXBvbmVudFwiIHYtYmluZD1cImNtcC5jb250ZW50LnByb3BzXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDp2YWx1ZT1cInNlbGVjdGVkXCIgdi1tb2RlbD1cInNlbGVjdGVkW2NtcC5jb250ZW50LnByb3BdXCIgOnByb3BlcnR5PVwiY21wLmNvbnRlbnRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgOnRhcmdldD1cImNtcC5jb250ZW50LnN0YXRlID8gZ2V0U3RhdGUoKSA6IHNlbGVjdGVkXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEBjbGVhbj1cIiguLi5hcmdzKSA9PiBvbkNsZWFuU3RhdGVWYWx1ZShjbXAuY29udGVudCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHNhdmU9XCJzYXZlRWxlbWVudChjbXAuY29udGVudClcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp0YXJnZXQ9XCIoLi4uYXJncykgPT4gc2V0VGFyZ2V0UHJvcGVydHkoY21wLmNvbnRlbnQsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEB1cGRhdGU6bW9kZWxWYWx1ZT1cIiguLi5hcmdzKSA9PiBzZXRUYXJnZXRQcm9wZXJ0eShjbXAuY29udGVudCwgY21wLmNvbnRlbnQucHJvcCwgLi4uYXJncylcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQHVwZGF0ZTp2YWx1ZT1cIiguLi5hcmdzKSA9PiBvbkNvbXBvbmVudENoYW5nZWQoY21wLmNvbnRlbnQsIGNtcC5jb250ZW50LnByb3AsIC4uLmFyZ3MpXCJcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHYtb249XCJjbXAuY29udGVudC5ldmVudHMgfHwge31cIj5cclxuICAgICAgICAgICAgICAgICAgICAgICAgPC9jb21wb25lbnQ+XHJcbiAgICAgICAgICAgICAgICAgICAgPC90ZW1wbGF0ZT5cclxuXHJcbiAgICAgICAgICAgICAgICA8L0luc3BlY3RvclBhbmVsPlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJsYWJlbFwiIHYtZWxzZT5cclxuICAgICAgICAgICAgU2VsZWN0IGFuIGl0ZW0gb3Igc3RhdGVcclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8dGVtcGxhdGUgI2Zvb3Rlcj5cclxuICAgICAgICAgICAgPCEtLSA8U2NlbmVUb29scz48L1NjZW5lVG9vbHM+IC0tPlxyXG4gICAgICAgIDwvdGVtcGxhdGU+XHJcbiAgICA8L1ZpZXdQYW5lbD5cclxuICAgIDwhLS0gPGRpdiBjbGFzcz1cInBhbmVsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJwYW5lbFwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVhZGVyXCI+SW5zcGVjdG9yPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb290ZXJcIj5cclxuXHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+IC0tPlxyXG48L3RlbXBsYXRlPlxyXG48c2NyaXB0PlxyXG5pbXBvcnQgSW5zcGVjdG9yUGFuZWwgZnJvbSBcIkAvY29tcG9uZW50cy9pbnNwZWN0b3IvaW5zcGVjdG9ycGFuZWwudnVlXCJcclxuaW1wb3J0IFZpZXdQYW5lbCBmcm9tIFwiLi92aWV3cGFuZWwudnVlXCJcclxuaW1wb3J0IG1vZGVsdHlwZXMgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zcGVjdG9yL21vZGVsdHlwZXMudnVlXCJcclxuaW1wb3J0IGFzc2V0c3ZpZXcgZnJvbSBcIi4uL2NvbXBvbmVudHMvaW5zcGVjdG9yL2Fzc2V0cy9hc3NldHN2aWV3LnZ1ZVwiXHJcbmltcG9ydCBTY2VuZVRvb2xzIGZyb20gXCIuLi9jb21wb25lbnRzL2luc3BlY3Rvci9zY2VuZS52dWVcIlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGdldFN0YXRlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnByb2plY3QuZ2V0U3RhdGUodGhpcy5zZWxlY3RlZCwgdGhpcy5zbGlkZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIGdldFByb3AoY21wKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHByb3BzID0gY21wLnByb3Auc3BsaXQoJy4nKVxyXG4gICAgICAgICAgICBsZXQgcCA9IHByb3BzWzBdXHJcbiAgICAgICAgICAgIGxldCB0YXJnZXQgPSB0aGlzLnNlbGVjdGVkXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvcHMubGVuZ3RoIC0gMTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0YXJnZXQgPSB0YXJnZXRbcHJvcHNbaV1dXHJcbiAgICAgICAgICAgICAgICBwID0gcHJvcHNbaSArIDFdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldFtwXVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIGFzeW5jIHNhdmVFbGVtZW50KGNtcCkge1xyXG4gICAgICAgICAgICBpZiAoY21wLm9udXBkYXRlKSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCBjbXAub251cGRhdGUodGhpcy5zZWxlY3RlZCwgbnVsbCwgbnVsbCwgdGhpcy5zbGlkZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAucHJvamVjdC5zYXZlKHRoaXMuc2VsZWN0ZWQpXHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JzQtdGC0L7QtCDQtNC70Y8g0LjQt9C80LXQvdC10L3QuNGPINC30L3QsNGH0LXQvdC40Y8g0YHQstC+0LnRgdGC0LLQsCDRjdC70LXQvNC10L3RgtCwINCyINCy0YvQsdGA0LDQvdC90L7QvCDRgdC70LDQudC00LVcclxuICAgICAgICAgKiDQotC10LrRg9GJ0LXQtSDQt9C90LDRh9C10L3QuNC1INGB0LLQvtC50YHRgtCy0LAg0YHQsNC80L7Qs9C+INGN0LvQtdC80LXQvdGC0LAg0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINCyINC60L7QvNC/0L7QvdC10L3RgtC1IFxyXG4gICAgICAgICAqICjQuNC70Lgg0YfQtdGA0LXQtyB2LW1vZGVsKVxyXG4gICAgICAgICAqIFxyXG4gICAgICAgICAqIEBwYXJhbSBjbXAg0JjRgdGF0L7QtNC90YvQtSDQv9Cw0YDQsNC80LXRgtGA0Ysg0LTQtdC60LvQsNGA0LDRgtC40LLQvdC+0LPQviDQvtC/0LjRgdCw0L3QuNGPIDpcclxuICAgICAgICAgKiDQtdGB0YLRjCDQstC+0LfQvNC+0LbQvdC+0YHRgtGMINC/0YDQtdC00L7RgtCy0YDQsNGC0LjRgtGMINC30LDQv9C40YHRjCDQv9Cw0YDQsNC80LXRgtGA0LAg0LIg0YHQvtGB0YLQvtGP0L3QuNC1ICjQvdCw0L/RgNC40LzQtdGAINC90LDQt9Cy0LDQvdC40LUpIFxyXG4gICAgICAgICAqINGD0YHRgtCw0L3QvtCy0LrQvtC5IGNtcC5zdGF0ZT1mYWxzZVxyXG4gICAgICAgICAqIEBwYXJhbSBwcm9wINC40LzRjyDRgdCy0L7QudGB0YLQstCwIC0g0YPRgdGC0LDQvdCw0LLQu9C40LLQsNC10YLRgdGPINCyIHRlbXBsYXRlINC10YHQu9C4INC+0LHRgNCw0LHQvtGC0LrQsCDRgdC+0LHRi9GC0LjRjyBAdXBkYXRlOm1vZGVsVmFsdWVcclxuICAgICAgICAgKiDQuNC70Lgg0L/QvtC70YPRh9Cw0LXRgtGB0Y8g0LjQtyDQutC+0LzQv9C+0L3QtdC90YLQsCwg0LXRgdC70Lgg0L7QsdGA0LDQsdC+0YLQutCwIEB1cGRhdGU6c3RhdGVcclxuICAgICAgICAgKiBAcGFyYW0gdmFsINC/0YDQuNGB0LLQsNC40LLQsNC10LzQvtC1INC30L3QsNGH0LXQvdC40LUgXHJcbiAgICAgICAgICogQHBhcmFtIHByb3BlcnR5VmFsIFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGFzeW5jIHNldFRhcmdldFByb3BlcnR5KGNtcCwgcHJvcCwgdmFsKSB7XHJcbiAgICAgICAgICAgIGlmIChjbXAub251cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgIGF3YWl0IGNtcC5vbnVwZGF0ZSh0aGlzLnNlbGVjdGVkLCBwcm9wLCB2YWwsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgICAgICBpZiAoIXRoaXMuc2VsZWN0ZWQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKCEoJ3N0YXRlJyBpbiBjbXApIHx8IGNtcC5zdGF0ZSA9PT0gdHJ1ZSkge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbD8uZW5jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXSA9IHZhbC5lbmNvZGUoKVxyXG4gICAgICAgICAgICAgICAgZWxzZVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXSA9IHZhbFxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHZhbD8uZW5jb2RlKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRbcHJvcF0gPSB2YWwuZW5jb2RlKClcclxuICAgICAgICAgICAgICAgIGVsc2VcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdGVkW3Byb3BdID0gdmFsXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGNtcC5ub3NhdmUpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnNlbGVjdGVkLmlzRWxlbWVudClcclxuICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgZWxzZSBpZiAodGhpcy5zZWxlY3RlZC5pc0Fzc2V0KSB7XHJcbiAgICAgICAgICAgICAgICBhd2FpdCB0aGlzLiRhcHAuYXNzZXRzLnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JzQtdGC0L7QtCDQstGL0LfRi9Cy0LDQtdGC0YHRjyDQutCw0Logc2V0VGFyZ2V0UHJvcGVydHkg0L3QviDRgSDQvdC10L7QsdGF0L7QtNC40LzQvtGB0YLRjNGOINGD0YHRgtCw0L3QvtCy0LjRgtGMXHJcbiAgICAgICAgICog0LfQvdCw0YfQtdC90LjQtSDRgdCy0L7QudGB0YLQstCwINGN0LvQtdC80LXQvdGC0LAsINC10YHQu9C4INC60L7QvNC/0L7QvdC10L3RgiDQvdC1INC80L7QttC10YIg0Y3RgtC+INGB0LTQtdC70LDRgtGMINGB0LDQvNC+0YHRgtC+0Y/RgtC10LvRjNC90L5cclxuICAgICAgICAgKiBcclxuICAgICAgICAgKiBAcGFyYW0gcHJvcCAtINC40LzRjyDRgdCy0L7QudGB0YLQstCwIC0g0YHRgtCw0LLQuNGC0YHRjyDQsNCy0YLQvtC80LDRgtC+0Lwg0LjQtyBjbXBcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUgLSDQvdC+0LLQvtC1INC30L3QsNGH0LXQvdC40LVcclxuICAgICAgICAgKi9cclxuICAgICAgICBhc3luYyBvbkNvbXBvbmVudENoYW5nZWQoY21wLCBwcm9wLCB2YWx1ZSwgcHJvcGVydHlWYWwpIHtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZFtwcm9wXSA9IHZhbHVlXHJcbiAgICAgICAgICAgIGlmICghdGhpcy5zZWxlY3RlZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChjbXAub251cGRhdGUpIHtcclxuICAgICAgICAgICAgICAgICAgICBhd2FpdCBjbXAub251cGRhdGUodGhpcy5zZWxlY3RlZCwgcHJvcCwgdmFsdWUsIHRoaXMuc2xpZGUpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLnNldFRhcmdldFByb3BlcnR5KGNtcCwgcHJvcCwgdmFsdWUsIHByb3BlcnR5VmFsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgYXN5bmMgb25DbGVhblN0YXRlVmFsdWUoY21wLCBwcm9wKSB7XHJcbiAgICAgICAgICAgIGlmIChjbXAub25jbGVhbikge1xyXG4gICAgICAgICAgICAgICAgYXdhaXQgY21wLm9uY2xlYW4odGhpcy5zZWxlY3RlZCwgcHJvcCwgY21wLCB0aGlzLnNsaWRlKVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgaWYgKHByb3AgaW4gdGhpcy5nZXRTdGF0ZSgpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGVsZXRlIHRoaXMuZ2V0U3RhdGUoKVtwcm9wXVxyXG4gICAgICAgICAgICAgICAgICAgIGF3YWl0IHRoaXMuJGFwcC5wcm9qZWN0LnNhdmUodGhpcy5zZWxlY3RlZClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHNlbGVjdGVkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy4kYXBwLnNlbGVjdGlvbi5zZWxlY3RlZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgc2VsZWN0ZWRVSUQoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLiRhcHAuc2VsZWN0aW9uLnVpZFxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog0JLQvtC30LLRgNCw0YnQsNC10YIg0L3QsNCx0L7RgCDQutC+0LzQv9C+0L3QtdC90YLQvtCyINC00LvRjyDQv9C+0LrQsNC30LAgLCDQt9Cw0LLQuNGB0Y/RidC40Lkg0L7RgiDRgtC40L/QsCDQstGL0LHRgNCw0L3QvdC+0LPQviDQvtCx0YrQtdC60YLQsFxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGJsb2NrcygpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5zZWxlY3RlZC5nZXRUeXBlcygpKVxyXG4gICAgICAgICAgICByZXR1cm4gW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ0xhYmVsRWRpdCcsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGF0ZTogZmFsc2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiAnTGFiZWwnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiVHlwZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHJlYWRvbmx5OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogJ0xhYmVsJyxcclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJ0eXBlXCJcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgLi4udGhpcy4kYXBwLmluc3BlY3Rvci5ibG9ja3NGb3IodGhpcy5zZWxlY3RlZC5nZXRUeXBlcygpKVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfSxcclxuICAgICAgICBzbGlkZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuJGFwcC5zbGlkZXMuYWN0aXZlZD8udWlkXHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIHdhdGNoOiB7XHJcbiAgICAgICAgc2VsZWN0ZWQobikge1xyXG4gICAgICAgICAgICBpZiAoIW4pXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgaWYgKG4ucmVzdG9yZSkge1xyXG4gICAgICAgICAgICAgICAgbi5yZXN0b3JlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wb25lbnRzOiB7IEluc3BlY3RvclBhbmVsLCBtb2RlbHR5cGVzLCBhc3NldHN2aWV3LCBWaWV3UGFuZWwsIFNjZW5lVG9vbHMgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG48c3R5bGU+XHJcbi5pbnNwZWN0b3Ige1xyXG4gICAgdXNlci1zZWxlY3Q6IG5vbmU7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsO1xyXG4gICAgcG9zaXRpb246IGFic29sdXRlO1xyXG4gICAgdG9wOiA0OHB4O1xyXG4gICAgbGVmdDogNHB4O1xyXG4gICAgYm90dG9tOiAxMHB4O1xyXG4gICAgd2lkdGg6IDI4MHB4O1xyXG4gICAgcGFkZGluZzogMXB4O1xyXG59XHJcbjwvc3R5bGU+IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiY2Q3MzMxZTU5NmQzYmYyN2NkMzRcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==