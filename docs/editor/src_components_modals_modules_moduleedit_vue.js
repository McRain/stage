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
        // 1759502771044
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
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


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
const _hoisted_7 = { class: "rowvalue" }
const _hoisted_8 = { class: "row" }
const _hoisted_9 = { class: "rowvalue" }
const _hoisted_10 = { class: "row" }
const _hoisted_11 = { class: "rowvalue" }
const _hoisted_12 = {
  key: 2,
  class: "standarts"
}
const _hoisted_13 = {
  key: 0,
  class: "loading-spinner"
}
const _hoisted_14 = { class: "error-message" }
const _hoisted_15 = { class: "standards-grid" }
const _hoisted_16 = ["onClick"]
const _hoisted_17 = { class: "item-content" }
const _hoisted_18 = { class: "item-name" }

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_LabelEdit = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("LabelEdit")

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
            _cache[4] || (_cache[4] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "rowlabel" }, "Name *", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_7, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelEdit, {
                style: {"width":"100%"},
                tooltip: "Module name",
                modelValue: $props.selected.name,
                "onUpdate:modelValue": _cache[0] || (_cache[0] = $event => (($props.selected.name) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_8, [
            _cache[5] || (_cache[5] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "rowlabel" }, "Link *", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_9, [
              (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_LabelEdit, {
                style: {"width":"100%"},
                tooltip: "Module url",
                modelValue: $props.selected.entry,
                "onUpdate:modelValue": _cache[1] || (_cache[1] = $event => (($props.selected.entry) = $event))
              }, null, 8 /* PROPS */, ["modelValue"])
            ])
          ]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_10, [
            _cache[6] || (_cache[6] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "rowlabel" }, "Entry point *", -1 /* CACHED */)),
            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_11, [
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
      ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_12, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Спиннер во время загрузки "),
          ($data.loading)
            ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_13, [...(_cache[7] || (_cache[7] = [
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "spinner" }, null, -1 /* CACHED */),
                (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("span", null, "Loading standards...", -1 /* CACHED */)
              ]))]))
            : ($data.error)
              ? ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, { key: 1 }, [
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)(" Сообщение об ошибке "),
                  (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_14, [
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
                    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_15, [
                      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($data.standards, (item, index) => {
                        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", {
                          key: index,
                          class: "standard-item",
                          onClick: $event => ($options.selectStandard(item))
                        }, [
                          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_17, [
                            _cache[8] || (_cache[8] = (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", { class: "item-icon" }, "📦", -1 /* CACHED */)),
                            (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_18, (0,vue__WEBPACK_IMPORTED_MODULE_0__.toDisplayString)(item.name), 1 /* TEXT */)
                          ])
                        ], 8 /* PROPS */, _hoisted_16))
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbW9kYWxzX21vZHVsZXNfbW9kdWxlZWRpdF92dWUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQ1U7QUFDVixPQUFPLElBQVU7QUFDakI7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFPLENBQUMsa0tBQW1GLGVBQWU7QUFDbEk7QUFDQTtBQUNBLFVBQVUsVUFBVTtBQUNwQixVQUFVLFVBQVU7QUFDcEIsVUFBVSxVQUFVO0FBQ3BCO0FBQ0EsVUFBVSxVQUFVO0FBQ3BCLFVBQVU7QUFDVixVQUFVLGlCQUFpQjtBQUMzQjtBQUNBLFFBQVEsVUFBVTtBQUNsQjtBQUNBO0FBQ0EsU0FBUztBQUNULE9BQU87QUFDUDtBQUNBLEU7Ozs7Ozs7Ozs7Ozs7OztBQzJDQSxDQUFDLENBQUM7Q0FDRCxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0NBQ3BFLENBQUM7QUFDRixpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ1osQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUM7Z0JBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDO2dCQUNULENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQztnQkFDVCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7O1lBRWhCO1FBQ0o7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQzlEO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDaEMsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QixDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO2dCQUMxQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDeEI7UUFDSixDQUFDOztRQUVELENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNsQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbkIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0EsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3RDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdELENBQUMsQ0FBQztnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDcEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNWLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEQsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3hCO1FBQ0osQ0FBQzs7UUFFRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDakIsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN0QyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2hDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ3pDO0lBQ0o7QUFDSixDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQWhJUSxLQUFLLEVBQUMsZ0JBQWdCOzs7RUFDSyxLQUFLLEVBQUMsTUFBTTs7cUJBQy9CLEtBQUssRUFBQyxPQUFPOzs7O0VBS1YsS0FBSyxFQUFDLE1BQU07O3FCQUNmLEtBQUssRUFBQyxLQUFLO3FCQUVQLEtBQUssRUFBQyxVQUFVO3FCQUlwQixLQUFLLEVBQUMsS0FBSztxQkFFUCxLQUFLLEVBQUMsVUFBVTtzQkFLcEIsS0FBSyxFQUFDLEtBQUs7c0JBRVAsS0FBSyxFQUFDLFVBQVU7OztFQVNaLEtBQUssRUFBQyxXQUFXOzs7O0VBRVYsS0FBSyxFQUFDLGlCQUFpQjs7c0JBTXBCLEtBQUssRUFBQyxlQUFlO3NCQU1WLEtBQUssRUFBQyxnQkFBZ0I7O3NCQUczQyxLQUFLLEVBQUMsY0FBYztzQkFFaEIsS0FBSyxFQUFDLFdBQVc7Ozs7OzREQW5EMUMsd0RBNkRNLE9BN0ROLFVBNkRNO0tBNURTLGVBQVEsQ0FBQyxNQUFNOzJEQUExQix3REFLTSxPQUxOLFVBS007VUFKRix3REFFTSxPQUZOLFVBRU0sdURBREMsZUFBUSxDQUFDLEtBQUs7VUFFckIsd0RBQXVEO1lBQWxELFNBQTZCLEVBQXJCLGVBQVEsQ0FBQyxXQUFXO1lBQUUsS0FBSyxFQUFDLE9BQU87OzsyREFFcEQsd0RBcUJNLE9BckJOLFVBcUJNO1VBcEJGLHdEQUtNLE9BTE4sVUFLTTtzQ0FKRix3REFBa0MsU0FBN0IsS0FBSyxFQUFDLFVBQVUsSUFBQyxRQUFNO1lBQzVCLHdEQUVNLE9BRk4sVUFFTTtjQURGLGlEQUEwRjtnQkFBL0UsS0FBb0IsRUFBcEIsZ0JBQW9CO2dCQUFDLE9BQU8sRUFBQyxhQUFhOzRCQUFVLGVBQVEsQ0FBQyxJQUFJOzZFQUFiLGVBQVEsQ0FBQyxJQUFJOzs7O1VBR3BGLHdEQU1NLE9BTk4sVUFNTTtzQ0FMRix3REFBa0MsU0FBN0IsS0FBSyxFQUFDLFVBQVUsSUFBQyxRQUFNO1lBQzVCLHdEQUdNLE9BSE4sVUFHTTtjQUZGLGlEQUNZO2dCQURELEtBQW9CLEVBQXBCLGdCQUFvQjtnQkFBQyxPQUFPLEVBQUMsWUFBWTs0QkFBVSxlQUFRLENBQUMsS0FBSzs2RUFBZCxlQUFRLENBQUMsS0FBSzs7OztVQUlwRix3REFNTSxPQU5OLFdBTU07c0NBTEYsd0RBQXlDLFNBQXBDLEtBQUssRUFBQyxVQUFVLElBQUMsZUFBYTtZQUNuQyx3REFHTSxPQUhOLFdBR007Y0FGRixpREFDWTtnQkFERCxLQUFvQixFQUFwQixnQkFBb0I7Z0JBQUMsT0FBTyxFQUFDLGlCQUFpQjs0QkFBVSxlQUFRLENBQUMsS0FBSzs2RUFBZCxlQUFRLENBQUMsS0FBSzs7Ozs7SUFLN0YsaUxBRVU7S0FDQyxVQUFJOzJEQUFmLHdEQTRCTSxPQTVCTixXQTRCTTtVQTNCRixzRkFBa0M7V0FDdkIsYUFBTztpRUFBbEIsd0RBR00sT0FITixXQUdNO2dCQUZGLHdEQUEyQixTQUF0QixLQUFLLEVBQUMsU0FBUztnQkFDcEIsd0RBQWlDLGNBQTNCLHNCQUFvQjs7ZUFJZCxXQUFLO21FQUFyQix3REFHTTtrQkFKTixnRkFBNEI7a0JBQzVCLHdEQUdNLE9BSE4sV0FHTTtvQkFGRix3REFBaUQsY0FBM0MsMkJBQXlCLHdEQUFHLFdBQUs7b0JBQ3ZDLHdEQUErRDtzQkFBdEQsT0FBSywwQ0FBRSx5REFBYTtzQkFBRSxLQUFLLEVBQUMsV0FBVzt1QkFBQyxPQUFLOzs7aUJBSTFDLGVBQVMsQ0FBQyxNQUFNO3FFQUFoQyx3REFRTTtvQkFUTiw0RkFBd0M7b0JBQ3hDLHdEQVFNLE9BUk4sV0FRTTs2RUFQRix3REFNTSxpR0FOdUIsZUFBUyxHQUF6QixJQUFJLEVBQUUsS0FBSztrRkFBeEIsd0RBTU07MEJBTm1DLEdBQUcsRUFBRSxLQUFLOzBCQUFFLEtBQUssRUFBQyxlQUFlOzBCQUNyRSxPQUFLLGFBQUUsdUJBQWMsQ0FBQyxJQUFJOzswQkFDM0Isd0RBR00sT0FITixXQUdNO3NEQUZGLHdEQUErQixTQUExQixLQUFLLEVBQUMsV0FBVyxJQUFDLElBQUU7NEJBQ3pCLHdEQUE0QyxPQUE1QyxXQUE0Qyx1REFBbEIsSUFBSSxDQUFDLElBQUk7Ozs7OztxRUFNL0Msd0RBRU07b0JBSE4seUZBQXFDOzhDQUNyQyx3REFFTSxTQUZNLEtBQUssRUFBQyxVQUFVO3NCQUN4Qix3REFBbUMsY0FBN0Isd0JBQXNCOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzRHVDO0FBQ3RCO0FBQ0w7O0FBRXhELENBQWlGOztBQUVLO0FBQ3RGLGlDQUFpQyx5RkFBZSxDQUFDLCtFQUFNLGFBQWEsNkZBQU07QUFDMUU7QUFDQSxJQUFJLElBQVU7QUFDZDtBQUNBO0FBQ0EsRUFBRSxpQkFBaUI7QUFDbkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxFQUFFLGlCQUFpQixDQUFDLDRKQUE0RCxFQUFFO0FBQUE7QUFDbEYsNkJBQTZCLDZGQUFNO0FBQ25DLEdBQUc7O0FBRUg7OztBQUdBLGlFQUFlLFc7Ozs7Ozs7Ozs7Ozs7OztBQ3hCb0ksQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlPzlmNjgiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWUiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWU/Mjg2NyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvY29tcG9uZW50cy9tb2RhbHMvbW9kdWxlcy9tb2R1bGVlZGl0LnZ1ZT80MmM4Iiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9jb21wb25lbnRzL21vZGFscy9tb2R1bGVzL21vZHVsZWVkaXQudnVlP2NiZjgiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWU/ZTA4NyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTtcbiAgICBpZihtb2R1bGUuaG90KSB7XG4gICAgICAoZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBsb2NhbHNKc29uU3RyaW5nID0gdW5kZWZpbmVkO1xuICAgICAgICAvLyAxNzU5NTAyNzcxMDQ0XG4gICAgICAgIHZhciBjc3NSZWxvYWQgPSByZXF1aXJlKFwiLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvaG1yL2hvdE1vZHVsZVJlcGxhY2VtZW50LmpzXCIpKG1vZHVsZS5pZCwge30pO1xuICAgICAgICAvLyBvbmx5IGludmFsaWRhdGUgd2hlbiBsb2NhbHMgY2hhbmdlXG4gICAgICAgIGlmIChcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgJiZcbiAgICAgICAgICBtb2R1bGUuaG90LmRhdGEudmFsdWUgIT09IGxvY2Fsc0pzb25TdHJpbmdcbiAgICAgICAgKSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5pbnZhbGlkYXRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgbW9kdWxlLmhvdC5hY2NlcHQoKTtcbiAgICAgICAgfVxuICAgICAgICBtb2R1bGUuaG90LmRpc3Bvc2UoZnVuY3Rpb24oZGF0YSkge1xuICAgICAgICAgIGRhdGEudmFsdWUgPSBsb2NhbHNKc29uU3RyaW5nO1xuICAgICAgICAgIGNzc1JlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICAgIH0pKCk7XG4gICAgfVxuICAiLCI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwiZm9ybS1jb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzZWxlY3RlZC5nbG9iYWxcIiBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2VkXCI+XHJcbiAgICAgICAgICAgICAgICB7eyBzZWxlY3RlZC50aXRsZSB9fVxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiB2LWh0bWw9XCJzZWxlY3RlZC5kZXNjcmlwdGlvblwiIGNsYXNzPVwicm93ZWRcIj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cImluZm9cIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2xhYmVsXCI+TmFtZSAqPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxFZGl0IHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdG9vbHRpcD1cIk1vZHVsZSBuYW1lXCIgdi1tb2RlbD1cInNlbGVjdGVkLm5hbWVcIj48L0xhYmVsRWRpdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2xhYmVsXCI+TGluayAqPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93dmFsdWVcIj5cclxuICAgICAgICAgICAgICAgICAgICA8TGFiZWxFZGl0IHN0eWxlPVwid2lkdGg6IDEwMCU7XCIgdG9vbHRpcD1cIk1vZHVsZSB1cmxcIiB2LW1vZGVsPVwic2VsZWN0ZWQuZW50cnlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsRWRpdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd1wiPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd2xhYmVsXCI+RW50cnkgcG9pbnQgKjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd3ZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsRWRpdCBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHRvb2x0aXA9XCJNYWluIGJsb2NrIG5hbWVcIiB2LW1vZGVsPVwic2VsZWN0ZWQuaW5kZXhcIj5cclxuICAgICAgICAgICAgICAgICAgICA8L0xhYmVsRWRpdD5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8IS0tIDxkaXYgY2xhc3M9XCJidXR0b25saW5lXCI+XHJcbiAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwidG9nZ2xlU3RhbmRhcmRzXCI+U2hvdyBsaWJyYXJ5PC9idXR0b24+XHJcbiAgICAgICAgPC9kaXY+IC0tPlxyXG4gICAgICAgIDxkaXYgdi1pZj1cInNob3dcIiBjbGFzcz1cInN0YW5kYXJ0c1wiPlxyXG4gICAgICAgICAgICA8IS0tINCh0L/QuNC90L3QtdGAINCy0L4g0LLRgNC10LzRjyDQt9Cw0LPRgNGD0LfQutC4IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtaWY9XCJsb2FkaW5nXCIgY2xhc3M9XCJsb2FkaW5nLXNwaW5uZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzcGlubmVyXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5Mb2FkaW5nIHN0YW5kYXJkcy4uLjwvc3Bhbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tINCh0L7QvtCx0YnQtdC90LjQtSDQvtCxINC+0YjQuNCx0LrQtSAtLT5cclxuICAgICAgICAgICAgPGRpdiB2LWVsc2UtaWY9XCJlcnJvclwiIGNsYXNzPVwiZXJyb3ItbWVzc2FnZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+RXJyb3IgbG9hZGluZyBzdGFuZGFyZHM6IHt7IGVycm9yIH19PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBAY2xpY2s9XCJsb2FkU3RhbmRhcmRzXCIgY2xhc3M9XCJyZXRyeS1idG5cIj5SZXRyeTwvYnV0dG9uPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0g0KHQv9C40YHQvtC6INGN0LvQtdC80LXQvdGC0L7QsiDQv9C+0YHQu9C1INC30LDQs9GA0YPQt9C60LggLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwic3RhbmRhcmRzLmxlbmd0aFwiIGNsYXNzPVwic3RhbmRhcmRzLWdyaWRcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgdi1mb3I9XCIoaXRlbSwgaW5kZXgpIGluIHN0YW5kYXJkc1wiIDprZXk9XCJpbmRleFwiIGNsYXNzPVwic3RhbmRhcmQtaXRlbVwiXHJcbiAgICAgICAgICAgICAgICAgICAgQGNsaWNrPVwic2VsZWN0U3RhbmRhcmQoaXRlbSlcIj5cclxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1jb250ZW50XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLWljb25cIj7wn5OmPC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpdGVtLW5hbWVcIj57eyBpdGVtLm5hbWUgfX08L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuXHJcbiAgICAgICAgICAgIDwhLS0g0KHQvtC+0LHRidC10L3QuNC1INC10YHQu9C4INC90LXRgiDRjdC70LXQvNC10L3RgtC+0LIgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlIGNsYXNzPVwibm8taXRlbXNcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPk5vIHN0YW5kYXJkcyBhdmFpbGFibGU8L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG4vKipcclxuICog0JrQvtC80L/QvtC90LXQvdGCINGB0L7Qt9C00LDQvdC40Y8v0YDQtdC00LDQutGC0LjRgNC+0LLQsNC90LjRjyDQvNC+0LTRg9C70LXQuSDQsiDQvtC60L3QtSDQsdC40LHQu9C40L7RgtC10LrQuCDQvNC+0LTRg9C70LXQuVxyXG4gKi9cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJNb2R1bGVFZGl0XCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIHNlbGVjdGVkOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdCxcclxuICAgICAgICAgICAgZGVmYXVsdDoge1xyXG4gICAgICAgICAgICAgICAgbmFtZTogXCJcIixcclxuICAgICAgICAgICAgICAgIGVudHJ5OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgaW5kZXg6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBnbG9iYWw6IGZhbHNlXHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGRhdGEoKSB7XHJcbiAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgc2hvdzogZmFsc2UsXHJcbiAgICAgICAgICAgIGxvYWRpbmc6IGZhbHNlLFxyXG4gICAgICAgICAgICBlcnJvcjogbnVsbCxcclxuICAgICAgICAgICAgc3RhbmRhcmRzOiBbXSAvLyDQnNCw0YHRgdC40LIg0LTQu9GPINGF0YDQsNC90LXQvdC40Y8g0LfQsNCz0YDRg9C20LXQvdC90YvRhSDRgdGC0LDQvdC00LDRgNGC0L7QslxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgb25FZGl0KHByb3AsIHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdlZGl0JywgcHJvcCwgdmFsKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdG9nZ2xlU3RhbmRhcmRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNob3cgPSAhdGhpcy5zaG93O1xyXG4gICAgICAgICAgICBpZiAodGhpcy5zaG93ICYmIHRoaXMuc3RhbmRhcmRzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkU3RhbmRhcmRzKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG5cclxuICAgICAgICBhc3luYyBsb2FkU3RhbmRhcmRzKCkge1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmVycm9yID0gbnVsbDtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2xvYWQnKVxyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8g0JfQsNCz0YDRg9C30LrQsCDQtNCw0L3QvdGL0YUg0YEg0YPQtNCw0LvQtdC90L3QvtCz0L4g0YHQtdGA0LLQtdGA0LBcclxuICAgICAgICAgICAgICAgIC8qY29uc3QgcmVzcG9uc2UgPSBhd2FpdCBmZXRjaCgnaHR0cHM6Ly9hcGkuZXhhbXBsZS5jb20vc3RhbmRhcmRzJyk7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXJlc3BvbnNlLm9rKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBIVFRQIGVycm9yISBzdGF0dXM6ICR7cmVzcG9uc2Uuc3RhdHVzfWApO1xyXG4gICAgICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgICAgICB0aGlzLnN0YW5kYXJkcyA9IFt7fSwge31dLy9hd2FpdCByZXNwb25zZS5qc29uKCk7XHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5lcnJvciA9IGVyci5tZXNzYWdlO1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcignRXJyb3IgbG9hZGluZyBzdGFuZGFyZHM6JywgZXJyKTtcclxuICAgICAgICAgICAgfSBmaW5hbGx5IHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZGluZyA9IGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgc2VsZWN0U3RhbmRhcmQoaXRlbSkge1xyXG4gICAgICAgICAgICAvLyDQl9Cw0L/QvtC70L3Rj9C10Lwg0YTQvtGA0LzRgyDQstGL0LHRgNCw0L3QvdGL0Lwg0YHRgtCw0L3QtNCw0YDRgtC+0LxcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5uYW1lID0gaXRlbS5uYW1lO1xyXG4gICAgICAgICAgICB0aGlzLnNlbGVjdGVkLmVudHJ5ID0gaXRlbS5lbnRyeTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5pbmRleCA9IGl0ZW0uaW5kZXg7XHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3N0YW5kYXJkLXNlbGVjdGVkJywgaXRlbSk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIHNjb3BlZD5cclxuLmZvcm0tY29udGFpbmVyIHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgbWF4LXdpZHRoOiAyNTZweDtcclxuICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAuaW5mbyB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGdhcDogMTBweDtcclxuXHJcbiAgICAgICAgLnJvd2VkIHtcclxuICAgICAgICAgICAgbWF4LXdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XHJcbiAgICAgICAgICAgIG1pbi13aWR0aDogMDtcclxuICAgICAgICAgICAgb3ZlcmZsb3ctd3JhcDogYnJlYWstd29yZDtcclxuICAgICAgICAgICAgd29yZC1icmVhazogYnJlYWstYWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLnJvdyB7XHJcblxyXG5cclxuICAgICAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICAgICAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiBtaW5tYXgoNTBweCwgOTZweCkgbWlubWF4KDEyOHB4LCAxZnIpO1xyXG5cclxuICAgICAgICAgICAgLnJvd3ZhbHVlIHtcclxuICAgICAgICAgICAgICAgIC50eXBlc2xpc3Qge1xyXG4gICAgICAgICAgICAgICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIC5idXR0b25saW5lIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiByb3c7XHJcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnN0YW5kYXJ0cyB7fVxyXG5cclxuICAgIC8qINCh0YLQuNC70Lgg0LTQu9GPINGB0L/QuNC90L3QtdGA0LAgKi9cclxuICAgIC5sb2FkaW5nLXNwaW5uZXIge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICB9XHJcblxyXG4gICAgLnNwaW5uZXIge1xyXG4gICAgICAgIHdpZHRoOiAyNHB4O1xyXG4gICAgICAgIGhlaWdodDogMjRweDtcclxuICAgICAgICBib3JkZXI6IDJweCBzb2xpZCAjZjNmM2YzO1xyXG4gICAgICAgIGJvcmRlci10b3A6IDJweCBzb2xpZCAjMzQ5OGRiO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcclxuICAgICAgICBhbmltYXRpb246IHNwaW4gMXMgbGluZWFyIGluZmluaXRlO1xyXG4gICAgfVxyXG5cclxuICAgIEBrZXlmcmFtZXMgc3BpbiB7XHJcbiAgICAgICAgMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIDEwMCUge1xyXG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgzNjBkZWcpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC10YLQutC4INGN0LvQtdC80LXQvdGC0L7QsiAqL1xyXG4gICAgLnN0YW5kYXJkcy1ncmlkIHtcclxuICAgICAgICBkaXNwbGF5OiBncmlkO1xyXG4gICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KGF1dG8tZmlsbCwgbWlubWF4KDYwcHgsIDFmcikpO1xyXG4gICAgICAgIGdhcDogOHB4O1xyXG4gICAgICAgIHdpZHRoOiAxMDAlO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFuZGFyZC1pdGVtIHtcclxuICAgICAgICBhc3BlY3QtcmF0aW86IDE7XHJcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2RkZDtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA0cHg7XHJcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xyXG4gICAgICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2U7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFuZGFyZC1pdGVtOmhvdmVyIHtcclxuICAgICAgICBib3JkZXItY29sb3I6ICMzNDk4ZGI7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogI2Y4ZjlmYTtcclxuICAgICAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTJweCk7XHJcbiAgICAgICAgYm94LXNoYWRvdzogMCAycHggNHB4IHJnYmEoMCwgMCwgMCwgMC4xKTtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1jb250ZW50IHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDRweDtcclxuICAgICAgICBwYWRkaW5nOiA0cHg7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0taWNvbiB7XHJcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLW5hbWUge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTBweDtcclxuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICAgICAgd29yZC1icmVhazogYnJlYWstd29yZDtcclxuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xyXG4gICAgICAgIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xyXG4gICAgICAgIGRpc3BsYXk6IC13ZWJraXQtYm94O1xyXG4gICAgICAgIC13ZWJraXQtbGluZS1jbGFtcDogMjtcclxuICAgICAgICAtd2Via2l0LWJveC1vcmllbnQ6IHZlcnRpY2FsO1xyXG4gICAgfVxyXG5cclxuICAgIC8qINCh0YLQuNC70Lgg0LTQu9GPINGB0L7QvtCx0YnQtdC90LjQuSAqL1xyXG4gICAgLmVycm9yLW1lc3NhZ2UsXHJcbiAgICAubm8taXRlbXMge1xyXG4gICAgICAgIHBhZGRpbmc6IDIwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIGNvbG9yOiAjNjY2O1xyXG4gICAgfVxyXG5cclxuICAgIC5lcnJvci1tZXNzYWdlIHtcclxuICAgICAgICBjb2xvcjogI2U3NGMzYztcclxuICAgIH1cclxuXHJcbiAgICAucmV0cnktYnRuIHtcclxuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4IDhweDtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgIGNvbG9yOiB3aGl0ZTtcclxuICAgICAgICBib3JkZXI6IG5vbmU7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogM3B4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAucmV0cnktYnRuOmhvdmVyIHtcclxuICAgICAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjMjk4MGI5O1xyXG4gICAgfVxyXG59XHJcbjwvc3R5bGU+IiwiaW1wb3J0IHsgcmVuZGVyIH0gZnJvbSBcIi4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9dGVtcGxhdGUmaWQ9ZmI3YjQ4MzImc2NvcGVkPXRydWVcIlxuaW1wb3J0IHNjcmlwdCBmcm9tIFwiLi9tb2R1bGVlZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5leHBvcnQgKiBmcm9tIFwiLi9tb2R1bGVlZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiXG5cbmltcG9ydCBcIi4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mYjdiNDgzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiXG5cbmltcG9ydCBleHBvcnRDb21wb25lbnQgZnJvbSBcIi4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvZXhwb3J0SGVscGVyLmpzXCJcbmNvbnN0IF9fZXhwb3J0c19fID0gLyojX19QVVJFX18qL2V4cG9ydENvbXBvbmVudChzY3JpcHQsIFtbJ3JlbmRlcicscmVuZGVyXSxbJ19fc2NvcGVJZCcsXCJkYXRhLXYtZmI3YjQ4MzJcIl0sWydfX2ZpbGUnLFwic3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWVcIl1dKVxuLyogaG90IHJlbG9hZCAqL1xuaWYgKG1vZHVsZS5ob3QpIHtcbiAgX19leHBvcnRzX18uX19obXJJZCA9IFwiZmI3YjQ4MzJcIlxuICBjb25zdCBhcGkgPSBfX1ZVRV9ITVJfUlVOVElNRV9fXG4gIG1vZHVsZS5ob3QuYWNjZXB0KClcbiAgaWYgKCFhcGkuY3JlYXRlUmVjb3JkKCdmYjdiNDgzMicsIF9fZXhwb3J0c19fKSkge1xuICAgIGFwaS5yZWxvYWQoJ2ZiN2I0ODMyJywgX19leHBvcnRzX18pXG4gIH1cbiAgXG4gIG1vZHVsZS5ob3QuYWNjZXB0KFwiLi9tb2R1bGVlZGl0LnZ1ZT92dWUmdHlwZT10ZW1wbGF0ZSZpZD1mYjdiNDgzMiZzY29wZWQ9dHJ1ZVwiLCAoKSA9PiB7XG4gICAgYXBpLnJlcmVuZGVyKCdmYjdiNDgzMicsIHJlbmRlcilcbiAgfSlcblxufVxuXG5cbmV4cG9ydCBkZWZhdWx0IF9fZXhwb3J0c19fIiwiZXhwb3J0IHsgZGVmYXVsdCB9IGZyb20gXCItIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c2NyaXB0Jmxhbmc9anNcIjsgZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC9pbmRleC5qcz8/cnVsZVNldFsxXS5ydWxlc1s2XS51c2VbMF0hLi9tb2R1bGVlZGl0LnZ1ZT92dWUmdHlwZT1zY3JpcHQmbGFuZz1qc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL21pbmktY3NzLWV4dHJhY3QtcGx1Z2luL2Rpc3QvbG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3Qvc3R5bGVQb3N0TG9hZGVyLmpzIS4uLy4uLy4uLy4uL25vZGVfbW9kdWxlcy92dWUtbG9hZGVyL2Rpc3QvaW5kZXguanM/P3J1bGVTZXRbMV0ucnVsZXNbNl0udXNlWzBdIS4vbW9kdWxlZWRpdC52dWU/dnVlJnR5cGU9c3R5bGUmaW5kZXg9MCZpZD1mYjdiNDgzMiZzY29wZWQ9dHJ1ZSZsYW5nPWNzc1wiIiwiZXhwb3J0ICogZnJvbSBcIi0hLi4vLi4vLi4vLi4vbm9kZV9tb2R1bGVzL3Z1ZS1sb2FkZXIvZGlzdC90ZW1wbGF0ZUxvYWRlci5qcz8/cnVsZVNldFsxXS5ydWxlc1sxXSEuLi8uLi8uLi8uLi9ub2RlX21vZHVsZXMvdnVlLWxvYWRlci9kaXN0L2luZGV4LmpzPz9ydWxlU2V0WzFdLnJ1bGVzWzZdLnVzZVswXSEuL21vZHVsZWVkaXQudnVlP3Z1ZSZ0eXBlPXRlbXBsYXRlJmlkPWZiN2I0ODMyJnNjb3BlZD10cnVlXCIiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=