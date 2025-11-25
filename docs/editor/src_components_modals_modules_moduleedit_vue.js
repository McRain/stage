"use strict";
(self["webpackChunk_reneos_slider_editor"] = self["webpackChunk_reneos_slider_editor"] || []).push([["src_components_modals_modules_moduleedit_vue"],{

/***/ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin

    if(true) {
      (function() {
        var localsJsonString = undefined;
        // 1764090114376
        var cssReload = __webpack_require__(/*! ../../../../node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js */ "./node_modules/mini-css-extract-plugin/dist/hmr/hotModuleReplacement.js")(module.id, {});
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

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js":
/*!**************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js ***!
  \**************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });

/**
 * Компонент создания/редактирования модулей в окне библиотеки модулей
 */
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "ModuleEdit",
    props: {
        selected: {
            type: Object,
            default: {
                name: "",
                entry: "",
                index: "",
                global: false

            }
        }
    },
    data() {
        return {
            show: false,
            loading: false,
            error: null,
            standards: [] // Массив для хранения загруженных стандартов
        }
    },
    methods: {
        onEdit(prop, val) {
            this.$emit('edit', prop, val)
        },
        toggleStandards() {
            this.show = !this.show;
            if (this.show && this.standards.length === 0) {
                this.loadStandards();
            }
        },

        async loadStandards() {
            this.loading = true;
            this.error = null;
            console.log('load')
            try {
                // Загрузка данных с удаленного сервера
                /*const response = await fetch('https://api.example.com/standards');
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }*/
                this.standards = [{}, {}]//await response.json();
            } catch (err) {
                this.error = err.message;
                console.error('Error loading standards:', err);
            } finally {
                this.loading = false;
            }
        },

        selectStandard(item) {
            // Заполняем форму выбранным стандартом
            this.selected.name = item.name;
            this.selected.entry = item.entry;
            this.selected.index = item.index;
            this.$emit('standard-selected', item);
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue?550d");


const _hoisted_1 = { class: "form-container" }
const _hoisted_2 = {
  key: 0,
  class: "info"
}
const _hoisted_3 = { class: "rowed" }
const _hoisted_4 = ["innerHTML"]
const _hoisted_5 = {
  key: 1,
  class: "info"
}
const _hoisted_6 = { class: "row" }
const _hoisted_7 = { class: "rowlabel" }
const _hoisted_8 = { class: "rowvalue" }
const _hoisted_9 = { class: "row" }
const _hoisted_10 = { class: "rowlabel" }
const _hoisted_11 = { class: "rowvalue" }
const _hoisted_12 = { class: "row" }
const _hoisted_13 = { class: "rowlabel" }
const _hoisted_14 = { class: "rowvalue" }
const _hoisted_15 = {
  key: 2,
  class: "standarts"
}
const _hoisted_16 = {
  key: 0,
  class: "loading-spinner"
}
const _hoisted_17 = { class: "error-message" }
const _hoisted_18 = { class: "standards-grid" }
const _hoisted_19 = ["onClick"]
const _hoisted_20 = { class: "item-content" }
const _hoisted_21 = { class: "item-name" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LabelEdit")
  const _directive_translate = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveDirective)("translate")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    ($props.selected.global)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_2, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_3, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($props.selected.title), 1 /* TEXT */),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", {
            innerHTML: $props.selected.description,
            class: "rowed"
          }, null, 8 /* PROPS */, _hoisted_4)
        ]))
      : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_5, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_6, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_7, [...(_cache[4] || (_cache[4] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("$$Name:", -1 /* CACHED */)
            ]))])), [
              [_directive_translate]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelEdit, {
                style: {"width":"100%"},
                tooltip: "Module name",
                modelValue: $props.selected.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.selected.name) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_10, [...(_cache[5] || (_cache[5] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("$$URL:", -1 /* CACHED */)
            ]))])), [
              [_directive_translate]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelEdit, {
                style: {"width":"100%"},
                tooltip: "Module url",
                modelValue: $props.selected.entry,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.selected.entry) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_12, [
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.withDirectives)(((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [...(_cache[6] || (_cache[6] = [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createTextVNode)("$$Entry point:", -1 /* CACHED */)
            ]))])), [
              [_directive_translate]
            ]),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelEdit, {
                style: {"width":"100%"},
                tooltip: "Main block name",
                modelValue: $props.selected.index,
                "onUpdate:modelValue": _cache[2] || (_cache[2] = $event => (($props.selected.index) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ])
          ])
        ])),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" <div class=\"buttonline\">\r\n            <button @click=\"toggleStandards\">Show library</button>\r\n        </div> "),
    ($data.show)
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_15, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Спиннер во время загрузки "),
          ($data.loading)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_16, [...(_cache[7] || (_cache[7] = [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "spinner" }, null, -1 /* CACHED */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Loading standards...", -1 /* CACHED */)
              ]))]))
            : ($data.error)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Сообщение об ошибке "),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Error loading standards: " + (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)($data.error), 1 /* TEXT */),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
                      onClick: _cache[3] || (_cache[3] = (...args) => ($options.loadStandards && $options.loadStandards(...args))),
                      class: "retry-btn"
                    }, "Retry")
                  ])
                ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
              : ($data.standards.length)
                ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 2 }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Список элементов после загрузки "),
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, [
                      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.standards, (item, index) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                          key: index,
                          class: "standard-item",
                          onClick: $event => ($options.selectStandard(item))
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_20, [
                            _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "item-icon" }, "📦", -1 /* CACHED */)),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_21, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)
                          ])
                        ], 8 /* PROPS */, _hoisted_19))
                      }), 128 /* KEYED_FRAGMENT */))
                    ])
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
                : ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 3 }, [
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Сообщение если нет элементов "),
                    _cache[9] || (_cache[9] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "no-items" }, [
                      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "No standards available")
                    ], -1 /* CACHED */))
                  ], 2112 /* STABLE_FRAGMENT, DEV_ROOT_FRAGMENT */))
        ]))
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ }),

/***/ "./src/components/modals/modules/moduleedit.vue":
/*!******************************************************!*\
  !*** ./src/components/modals/modules/moduleedit.vue ***!
  \******************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true */ "./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true");
/* harmony import */ var _moduleedit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./moduleedit.vue?vue&type=script&lang=js */ "./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js");
/* harmony import */ var _moduleedit_vue_vue_type_style_index_0_id_fb7b4832_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css */ "./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css");
/* harmony import */ var _node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../../node_modules/vue-loader/dist/exportHelper.js */ "./node_modules/vue-loader/dist/exportHelper.js");




;


const __exports__ = /*#__PURE__*/(0,_node_modules_vue_loader_dist_exportHelper_js__WEBPACK_IMPORTED_MODULE_3__["default"])(_moduleedit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_1__["default"], [['render',_moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render],['__scopeId',"data-v-fb7b4832"],['__file',"src/components/modals/modules/moduleedit.vue"]])
/* hot reload */
if (true) {
  __exports__.__hmrId = "fb7b4832"
  const api = __VUE_HMR_RUNTIME__
  module.hot.accept()
  if (!api.createRecord('fb7b4832', __exports__)) {
    api.reload('fb7b4832', __exports__)
  }
  
  module.hot.accept(/*! ./moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true */ "./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true", __WEBPACK_OUTDATED_DEPENDENCIES__ => { /* harmony import */ _moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true */ "./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true");
 return (() => {
    api.rerender('fb7b4832', _moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
  })(__WEBPACK_OUTDATED_DEPENDENCIES__); })

}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (__exports__);

/***/ }),

/***/ "./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js":
/*!******************************************************************************!*\
  !*** ./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js ***!
  \******************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* reexport safe */ _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_moduleedit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__["default"])
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_moduleedit_vue_vue_type_script_lang_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./moduleedit.vue?vue&type=script&lang=js */ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=script&lang=js");
 

/***/ }),

/***/ "./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css":
/*!**************************************************************************************************************!*\
  !*** ./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css ***!
  \**************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_mini_css_extract_plugin_dist_loader_js_node_modules_css_loader_dist_cjs_js_node_modules_vue_loader_dist_stylePostLoader_js_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_moduleedit_vue_vue_type_style_index_0_id_fb7b4832_scoped_true_lang_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/mini-css-extract-plugin/dist/loader.js!../../../../node_modules/css-loader/dist/cjs.js!../../../../node_modules/vue-loader/dist/stylePostLoader.js!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css */ "./node_modules/mini-css-extract-plugin/dist/loader.js!./node_modules/css-loader/dist/cjs.js!./node_modules/vue-loader/dist/stylePostLoader.js!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=style&index=0&id=fb7b4832&scoped=true&lang=css");


/***/ }),

/***/ "./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true":
/*!************************************************************************************************!*\
  !*** ./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true ***!
  \************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* reexport safe */ _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__.render)
/* harmony export */ });
/* harmony import */ var _node_modules_vue_loader_dist_templateLoader_js_ruleSet_1_rules_1_node_modules_vue_loader_dist_index_js_ruleSet_1_rules_6_use_0_moduleedit_vue_vue_type_template_id_fb7b4832_scoped_true__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../../node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!../../../../node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true */ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true");


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbW9kYWxzX21vZHVsZXNfbW9kdWxlZWRpdF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsa0tBQW1GLGVBQWU7QUFDbEk7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzJDQSxDQUFDLENBQUM7Q0FDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3BFLENBQUM7QUFDRixpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRWhCO1FBQ0o7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlEO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEI7UUFDSixDQUFDOztRQUVELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0EsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCO1FBQ0osQ0FBQzs7UUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFD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QUs7MEJBQUUsS0FBSyxFQUFDLGVBQWU7MEJBQ3JFLE9BQUssYUFBRSx1QkFBYyxDQUFDLElBQUk7OzBCQUMzQix3REFHTSxPQUhOLFdBR007c0RBRkYsd0RBQStCLFNBQTFCLEtBQUssRUFBQyxXQUFXLElBQUMsSUFBRTs0QkFDekIsd0RBQTRDLE9BQTVDLFdBQTRDLHVEQUFsQixJQUFJLENBQUMsSUFBSTs7Ozs7O3FFQU0vQyx3REFFTTtvQkFITix5RkFBcUM7OENBQ3JDLHdEQUVNLFNBRk0sS0FBSyxFQUFDLFVBQVU7c0JBQ3hCLHdEQUFtQyxjQUE3Qix3QkFBc0I7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNEdUM7QUFDdEI7QUFDTDs7QUFFeEQsQ0FBaUY7O0FBRUs7QUFDdEYsaUNBQWlDLHlGQUFlLENBQUMsK0VBQU0sYUFBYSw2RkFBTTtBQUMxRTtBQUNBLElBQUksSUFBVTtBQUNkO0FBQ0E7QUFDQSxFQUFFLGlCQUFpQjtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEVBQUUsaUJBQWlCLENBQUMsNEpBQTRELEVBQUU7QUFBQTtBQUNsRiw2QkFBNkIsNkZBQU07QUFDbkMsR0FBRzs7QUFFSDs7O0FBR0EsaUVBQWUsVzs7Ozs7Ozs7Ozs7Ozs7O0FDeEJvSSxDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWU/OWY2OCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVlZGl0LnZ1ZSIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVlZGl0LnZ1ZT8yODY3Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlPzQyYzgiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWU/Y2JmOCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVlZGl0LnZ1ZT9lMDg3Il0sInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9O1xuICAgIGlmKG1vZHVsZS5ob3QpIHtcbiAgICAgIChmdW5jdGlvbigpIHtcbiAgICAgICAgdmFyIGxvY2Fsc0pzb25TdHJpbmcgPSB1bmRlZmluZWQ7XG4gICAgICAgIC8vIDE3NjQwOTAxMTQzNzZcbiAgICAgICAgdmFyIGNzc1JlbG9hZCA9IHJlcXVpcmUoXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4vZGlzdC9obXIvaG90TW9kdWxlUmVwbGFjZW1lbnQuanNcIikobW9kdWxlLmlkLCB7fSk7XG4gICAgICAgIC8vIG9ubHkgaW52YWxpZGF0ZSB3aGVuIGxvY2FscyBjaGFuZ2VcbiAgICAgICAgaWYgKFxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAmJlxuICAgICAgICAgIG1vZHVsZS5ob3QuZGF0YS52YWx1ZSAhPT0gbG9jYWxzSnNvblN0cmluZ1xuICAgICAgICApIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmludmFsaWRhdGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBtb2R1bGUuaG90LmFjY2VwdCgpO1xuICAgICAgICB9XG4gICAgICAgIG1vZHVsZS5ob3QuZGlzcG9zZShmdW5jdGlvbihkYXRhKSB7XG4gICAgICAgICAgZGF0YS52YWx1ZSA9IGxvY2Fsc0pzb25TdHJpbmc7XG4gICAgICAgICAgY3NzUmVsb2FkKCk7XG4gICAgICAgIH0pO1xuICAgICAgfSkoKTtcbiAgICB9XG4gICIsIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJmb3JtLWNvbnRhaW5lclwiPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNlbGVjdGVkLmdsb2JhbFwiIGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93ZWRcIj5cclxuICAgICAgICAgICAgICAgIHt7IHNlbGVjdGVkLnRpdGxlIH19XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHYtaHRtbD1cInNlbGVjdGVkLmRlc2NyaXB0aW9uXCIgY2xhc3M9XCJyb3dlZFwiPjwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93XCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93bGFiZWxcIiB2LXRyYW5zbGF0ZT4kJE5hbWU6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxFZGl0IHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdG9vbHRpcD1cIk1vZHVsZSBuYW1lXCIgdi1tb2RlbD1cInNlbGVjdGVkLm5hbWVcIj48L0xhYmVsRWRpdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2xhYmVsXCIgdi10cmFuc2xhdGU+JCRVUkw6PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxFZGl0IHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdG9vbHRpcD1cIk1vZHVsZSB1cmxcIiB2LW1vZGVsPVwic2VsZWN0ZWQuZW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsRWRpdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2xhYmVsXCIgdi10cmFuc2xhdGU+JCRFbnRyeSBwb2ludDo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3d2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbEVkaXQgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiB0b29sdGlwPVwiTWFpbiBibG9jayBuYW1lXCIgdi1tb2RlbD1cInNlbGVjdGVkLmluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbEVkaXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9ubGluZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVN0YW5kYXJkc1wiPlNob3cgbGlicmFyeTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93XCIgY2xhc3M9XCJzdGFuZGFydHNcIj5cclxuICAgICAgICAgICAgPCEtLSDQodC/0LjQvdC90LXRgCDQstC+INCy0YDQtdC80Y8g0LfQsNCz0YDRg9C30LrQuCAtLT5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZyBzdGFuZGFyZHMuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSDQodC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZXJyb3JcIiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkVycm9yIGxvYWRpbmcgc3RhbmRhcmRzOiB7eyBlcnJvciB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibG9hZFN0YW5kYXJkc1wiIGNsYXNzPVwicmV0cnktYnRuXCI+UmV0cnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tINCh0L/QuNGB0L7QuiDRjdC70LXQvNC10L3RgtC+0LIg0L/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cInN0YW5kYXJkcy5sZW5ndGhcIiBjbGFzcz1cInN0YW5kYXJkcy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdGFuZGFyZHNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN0YW5kYXJkLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdFN0YW5kYXJkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1pY29uXCI+8J+TpjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+e3sgaXRlbS5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tINCh0L7QvtCx0YnQtdC90LjQtSDQtdGB0LvQuCDQvdC10YIg0Y3Qu9C10LzQtdC90YLQvtCyIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm5vLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBzdGFuZGFyZHMgYXZhaWxhYmxlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLyoqXHJcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDRgdC+0LfQtNCw0L3QuNGPL9GA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LzQvtC00YPQu9C10Lkg0LIg0L7QutC90LUg0LHQuNCx0LvQuNC+0YLQtdC60Lgg0LzQvtC00YPQu9C10LlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiTW9kdWxlRWRpdFwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbnRyeTogXCJcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YW5kYXJkczogW10gLy8g0JzQsNGB0YHQuNCyINC00LvRjyDRhdGA0LDQvdC10L3QuNGPINC30LDQs9GA0YPQttC10L3QvdGL0YUg0YHRgtCw0L3QtNCw0YDRgtC+0LJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uRWRpdChwcm9wLCB2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWRpdCcsIHByb3AsIHZhbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZVN0YW5kYXJkcygpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdyAmJiB0aGlzLnN0YW5kYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YW5kYXJkcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgbG9hZFN0YW5kYXJkcygpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkJylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vINCX0LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFINGBINGD0LTQsNC70LXQvdC90L7Qs9C+INGB0LXRgNCy0LXRgNCwXHJcbiAgICAgICAgICAgICAgICAvKmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3N0YW5kYXJkcycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFuZGFyZHMgPSBbe30sIHt9XS8vYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RhbmRhcmRzOicsIGVycik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdFN0YW5kYXJkKGl0ZW0pIHtcclxuICAgICAgICAgICAgLy8g0JfQsNC/0L7Qu9C90Y/QtdC8INGE0L7RgNC80YMg0LLRi9Cx0YDQsNC90L3Ri9C8INGB0YLQsNC90LTQsNGA0YLQvtC8XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQubmFtZSA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbnRyeSA9IGl0ZW0uZW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuaW5kZXggPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzdGFuZGFyZC1zZWxlY3RlZCcsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogMjU2cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgIC5yb3dlZCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDk2cHgpIG1pbm1heCgxMjhweCwgMWZyKTtcclxuXHJcbiAgICAgICAgICAgIC5yb3d2YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAudHlwZXNsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFuZGFydHMge31cclxuXHJcbiAgICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC/0LjQvdC90LXRgNCwICovXHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzM0OThkYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyog0KHRgtC40LvQuCDQtNC70Y8g0YHQtdGC0LrQuCDRjdC70LXQvNC10L3RgtC+0LIgKi9cclxuICAgIC5zdGFuZGFyZHMtZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg2MHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQtaXRlbSB7XHJcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC+0L7QsdGJ0LXQvdC40LkgKi9cclxuICAgIC5lcnJvci1tZXNzYWdlLFxyXG4gICAgLm5vLWl0ZW1zIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldHJ5LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldHJ5LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxuICAgIH1cclxufVxyXG48L3N0eWxlPiIsImltcG9ydCB7IHJlbmRlciB9IGZyb20gXCIuL21vZHVsZWVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiN2I0ODMyJnNjb3BlZD10cnVlXCJcbmltcG9ydCBzY3JpcHQgZnJvbSBcIi4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuZXhwb3J0ICogZnJvbSBcIi4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIlxuXG5pbXBvcnQgXCIuL21vZHVsZWVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmI3YjQ4MzImc2NvcGVkPXRydWUmbGFuZz1jc3NcIlxuXG5pbXBvcnQgZXhwb3J0Q29tcG9uZW50IGZyb20gXCIuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2V4cG9ydEhlbHBlci5qc1wiXG5jb25zdCBfX2V4cG9ydHNfXyA9IC8qI19fUFVSRV9fKi9leHBvcnRDb21wb25lbnQoc2NyaXB0LCBbWydyZW5kZXInLHJlbmRlcl0sWydfX3Njb3BlSWQnLFwiZGF0YS12LWZiN2I0ODMyXCJdLFsnX19maWxlJyxcInNyYy9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlXCJdXSlcbi8qIGhvdCByZWxvYWQgKi9cbmlmIChtb2R1bGUuaG90KSB7XG4gIF9fZXhwb3J0c19fLl9faG1ySWQgPSBcImZiN2I0ODMyXCJcbiAgY29uc3QgYXBpID0gX19WVUVfSE1SX1JVTlRJTUVfX1xuICBtb2R1bGUuaG90LmFjY2VwdCgpXG4gIGlmICghYXBpLmNyZWF0ZVJlY29yZCgnZmI3YjQ4MzInLCBfX2V4cG9ydHNfXykpIHtcbiAgICBhcGkucmVsb2FkKCdmYjdiNDgzMicsIF9fZXhwb3J0c19fKVxuICB9XG4gIFxuICBtb2R1bGUuaG90LmFjY2VwdChcIi4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmI3YjQ4MzImc2NvcGVkPXRydWVcIiwgKCkgPT4ge1xuICAgIGFwaS5yZXJlbmRlcignZmI3YjQ4MzInLCByZW5kZXIpXG4gIH0pXG5cbn1cblxuXG5leHBvcnQgZGVmYXVsdCBfX2V4cG9ydHNfXyIsImV4cG9ydCB7IGRlZmF1bHQgfSBmcm9tIFwiLSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL21vZHVsZWVkaXQudnVlP3Z1ZSZ0eXBlPXNjcmlwdCZsYW5nPWpzXCI7IGV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9taW5pLWNzcy1leHRyYWN0LXBsdWdpbi9kaXN0L2xvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L3N0eWxlUG9zdExvYWRlci5qcyEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL21vZHVsZWVkaXQudnVlP3Z1ZSZ0eXBlPXN0eWxlJmluZGV4PTAmaWQ9ZmI3YjQ4MzImc2NvcGVkPXRydWUmbGFuZz1jc3NcIiIsImV4cG9ydCAqIGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvdGVtcGxhdGVMb2FkZXIuanM/P3J1bGVTZXRbMV0ucnVsZXNbMV0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMF0hLi9tb2R1bGVlZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYjdiNDgzMiZzY29wZWQ9dHJ1ZVwiIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6W10sInNvdXJjZVJvb3QiOiIifQ==