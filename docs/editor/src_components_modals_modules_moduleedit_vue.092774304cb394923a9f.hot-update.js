"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("src_components_modals_modules_moduleedit_vue",{

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true":
/*!******************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[6].use[0]!./src/components/modals/modules/moduleedit.vue?vue&type=template&id=fb7b4832&scoped=true ***!
  \******************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue");
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

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2NvbXBvbmVudHNfbW9kYWxzX21vZHVsZXNfbW9kdWxlZWRpdF92dWUuMDkyNzc0MzA0Y2IzOTQ5MjNhOWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztxQkFDUyxLQUFLLEVBQUMsZ0JBQWdCOzs7RUFDSyxLQUFLLEVBQUMsTUFBTTs7cUJBQy9CLEtBQUssRUFBQyxPQUFPOzs7O0VBS1YsS0FBSyxFQUFDLE1BQU07O3FCQUNmLEtBQUssRUFBQyxLQUFLO3FCQUVQLEtBQUssRUFBQyxVQUFVO3FCQUlwQixLQUFLLEVBQUMsS0FBSztxQkFFUCxLQUFLLEVBQUMsVUFBVTtzQkFLcEIsS0FBSyxFQUFDLEtBQUs7c0JBRVAsS0FBSyxFQUFDLFVBQVU7OztFQVNaLEtBQUssRUFBQyxXQUFXOzs7O0VBRVYsS0FBSyxFQUFDLGlCQUFpQjs7c0JBTXBCLEtBQUssRUFBQyxlQUFlO3NCQU1WLEtBQUssRUFBQyxnQkFBZ0I7O3NCQUczQyxLQUFLLEVBQUMsY0FBYztzQkFFaEIsS0FBSyxFQUFDLFdBQVc7Ozs7OzREQW5EMUMsd0RBNkRNLE9BN0ROLFVBNkRNO0tBNURTLGVBQVEsQ0FBQyxNQUFNOzJEQUExQix3REFLTSxPQUxOLFVBS007VUFKRix3REFFTSxPQUZOLFVBRU0sdURBREMsZUFBUSxDQUFDLEtBQUs7VUFFckIsd0RBQXVEO1lBQWxELFNBQTZCLEVBQXJCLGVBQVEsQ0FBQyxXQUFXO1lBQUUsS0FBSyxFQUFDLE9BQU87OzsyREFFcEQsd0RBcUJNLE9BckJOLFVBcUJNO1VBcEJGLHdEQUtNLE9BTE4sVUFLTTtzQ0FKRix3REFBa0MsU0FBN0IsS0FBSyxFQUFDLFVBQVUsSUFBQyxRQUFNO1lBQzVCLHdEQUVNLE9BRk4sVUFFTTtjQURGLGlEQUEwRjtnQkFBL0UsS0FBb0IsRUFBcEIsZ0JBQW9CO2dCQUFDLE9BQU8sRUFBQyxhQUFhOzRCQUFVLGVBQVEsQ0FBQyxJQUFJOzZFQUFiLGVBQVEsQ0FBQyxJQUFJOzs7O1VBR3BGLHdEQU1NLE9BTk4sVUFNTTtzQ0FMRix3REFBa0MsU0FBN0IsS0FBSyxFQUFDLFVBQVUsSUFBQyxRQUFNO1lBQzVCLHdEQUdNLE9BSE4sVUFHTTtjQUZGLGlEQUNZO2dCQURELEtBQW9CLEVBQXBCLGdCQUFvQjtnQkFBQyxPQUFPLEVBQUMsWUFBWTs0QkFBVSxlQUFRLENBQUMsS0FBSzs2RUFBZCxlQUFRLENBQUMsS0FBSzs7OztVQUlwRix3REFNTSxPQU5OLFdBTU07c0NBTEYsd0RBQXlDLFNBQXBDLEtBQUssRUFBQyxVQUFVLElBQUMsZUFBYTtZQUNuQyx3REFHTSxPQUhOLFdBR007Y0FGRixpREFDWTtnQkFERCxLQUFvQixFQUFwQixnQkFBb0I7Z0JBQUMsT0FBTyxFQUFDLGlCQUFpQjs0QkFBVSxlQUFRLENBQUMsS0FBSzs2RUFBZCxlQUFRLENBQUMsS0FBSzs7Ozs7SUFLN0YsaUxBRVU7S0FDQyxVQUFJOzJEQUFmLHdEQTRCTSxPQTVCTixXQTRCTTtVQTNCRixzRkFBa0M7V0FDdkIsYUFBTztpRUFBbEIsd0RBR00sT0FITixXQUdNO2dCQUZGLHdEQUEyQixTQUF0QixLQUFLLEVBQUMsU0FBUztnQkFDcEIsd0RBQWlDLGNBQTNCLHNCQUFvQjs7ZUFJZCxXQUFLO21FQUFyQix3REFHTTtrQkFKTixnRkFBNEI7a0JBQzVCLHdEQUdNLE9BSE4sV0FHTTtvQkFGRix3REFBaUQsY0FBM0MsMkJBQXlCLHdEQUFHLFdBQUs7b0JBQ3ZDLHdEQUErRDtzQkFBdEQsT0FBSywwQ0FBRSx5REFBYTtzQkFBRSxLQUFLLEVBQUMsV0FBVzt1QkFBQyxPQUFLOzs7aUJBSTFDLGVBQVMsQ0FBQyxNQUFNO3FFQUFoQyx3REFRTTtvQkFUTiw0RkFBd0M7b0JBQ3hDLHdEQVFNLE9BUk4sV0FRTTs2RUFQRix3REFNTSxpR0FOdUIsZUFBUyxHQUF6QixJQUFJLEVBQUUsS0FBSztrRkFBeEIsd0RBTU07MEJBTm1DLEdBQUcsRUFBRSxLQUFLOzBCQUFFLEtBQUssRUFBQyxlQUFlOzBCQUNyRSxPQUFLLGFBQUUsdUJBQWMsQ0FBQyxJQUFJOzswQkFDM0Isd0RBR00sT0FITixXQUdNO3NEQUZGLHdEQUErQixTQUExQixLQUFLLEVBQUMsV0FBVyxJQUFDLElBQUU7NEJBQ3pCLHdEQUE0QyxPQUE1QyxXQUE0Qyx1REFBbEIsSUFBSSxDQUFDLElBQUk7Ozs7OztxRUFNL0Msd0RBRU07b0JBSE4seUZBQXFDOzhDQUNyQyx3REFFTSxTQUZNLEtBQUssRUFBQyxVQUFVO3NCQUN4Qix3REFBbUMsY0FBN0Isd0JBQXNCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2NvbXBvbmVudHMvbW9kYWxzL21vZHVsZXMvbW9kdWxlZWRpdC52dWUiXSwic291cmNlc0NvbnRlbnQiOlsiPHRlbXBsYXRlPlxyXG4gICAgPGRpdiBjbGFzcz1cImZvcm0tY29udGFpbmVyXCI+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwic2VsZWN0ZWQuZ2xvYmFsXCIgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dlZFwiPlxyXG4gICAgICAgICAgICAgICAge3sgc2VsZWN0ZWQudGl0bGUgfX1cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgdi1odG1sPVwic2VsZWN0ZWQuZGVzY3JpcHRpb25cIiBjbGFzcz1cInJvd2VkXCI+PC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWVsc2UgY2xhc3M9XCJpbmZvXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dsYWJlbFwiPk5hbWUgKjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd3ZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsRWRpdCBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHRvb2x0aXA9XCJNb2R1bGUgbmFtZVwiIHYtbW9kZWw9XCJzZWxlY3RlZC5uYW1lXCI+PC9MYWJlbEVkaXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dsYWJlbFwiPkxpbmsgKjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInJvd3ZhbHVlXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPExhYmVsRWRpdCBzdHlsZT1cIndpZHRoOiAxMDAlO1wiIHRvb2x0aXA9XCJNb2R1bGUgdXJsXCIgdi1tb2RlbD1cInNlbGVjdGVkLmVudHJ5XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbEVkaXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3dsYWJlbFwiPkVudHJ5IHBvaW50ICo8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3d2YWx1ZVwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxMYWJlbEVkaXQgc3R5bGU9XCJ3aWR0aDogMTAwJTtcIiB0b29sdGlwPVwiTWFpbiBibG9jayBuYW1lXCIgdi1tb2RlbD1cInNlbGVjdGVkLmluZGV4XCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9MYWJlbEVkaXQ+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPCEtLSA8ZGl2IGNsYXNzPVwiYnV0dG9ubGluZVwiPlxyXG4gICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cInRvZ2dsZVN0YW5kYXJkc1wiPlNob3cgbGlicmFyeTwvYnV0dG9uPlxyXG4gICAgICAgIDwvZGl2PiAtLT5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJzaG93XCIgY2xhc3M9XCJzdGFuZGFydHNcIj5cclxuICAgICAgICAgICAgPCEtLSDQodC/0LjQvdC90LXRgCDQstC+INCy0YDQtdC80Y8g0LfQsNCz0YDRg9C30LrQuCAtLT5cclxuICAgICAgICAgICAgPGRpdiB2LWlmPVwibG9hZGluZ1wiIGNsYXNzPVwibG9hZGluZy1zcGlubmVyXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3Bpbm5lclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+TG9hZGluZyBzdGFuZGFyZHMuLi48L3NwYW4+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG5cclxuICAgICAgICAgICAgPCEtLSDQodC+0L7QsdGJ0LXQvdC40LUg0L7QsSDQvtGI0LjQsdC60LUgLS0+XHJcbiAgICAgICAgICAgIDxkaXYgdi1lbHNlLWlmPVwiZXJyb3JcIiBjbGFzcz1cImVycm9yLW1lc3NhZ2VcIj5cclxuICAgICAgICAgICAgICAgIDxzcGFuPkVycm9yIGxvYWRpbmcgc3RhbmRhcmRzOiB7eyBlcnJvciB9fTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwibG9hZFN0YW5kYXJkc1wiIGNsYXNzPVwicmV0cnktYnRuXCI+UmV0cnk8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tINCh0L/QuNGB0L7QuiDRjdC70LXQvNC10L3RgtC+0LIg0L/QvtGB0LvQtSDQt9Cw0LPRgNGD0LfQutC4IC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZS1pZj1cInN0YW5kYXJkcy5sZW5ndGhcIiBjbGFzcz1cInN0YW5kYXJkcy1ncmlkXCI+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IHYtZm9yPVwiKGl0ZW0sIGluZGV4KSBpbiBzdGFuZGFyZHNcIiA6a2V5PVwiaW5kZXhcIiBjbGFzcz1cInN0YW5kYXJkLWl0ZW1cIlxyXG4gICAgICAgICAgICAgICAgICAgIEBjbGljaz1cInNlbGVjdFN0YW5kYXJkKGl0ZW0pXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIml0ZW0tY29udGVudFwiPlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1pY29uXCI+8J+TpjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaXRlbS1uYW1lXCI+e3sgaXRlbS5uYW1lIH19PC9kaXY+XHJcbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcblxyXG4gICAgICAgICAgICA8IS0tINCh0L7QvtCx0YnQtdC90LjQtSDQtdGB0LvQuCDQvdC10YIg0Y3Qu9C10LzQtdC90YLQvtCyIC0tPlxyXG4gICAgICAgICAgICA8ZGl2IHYtZWxzZSBjbGFzcz1cIm5vLWl0ZW1zXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj5ObyBzdGFuZGFyZHMgYXZhaWxhYmxlPC9zcGFuPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuLyoqXHJcbiAqINCa0L7QvNC/0L7QvdC10L3RgiDRgdC+0LfQtNCw0L3QuNGPL9GA0LXQtNCw0LrRgtC40YDQvtCy0LDQvdC40Y8g0LzQvtC00YPQu9C10Lkg0LIg0L7QutC90LUg0LHQuNCx0LvQuNC+0YLQtdC60Lgg0LzQvtC00YPQu9C10LlcclxuICovXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiTW9kdWxlRWRpdFwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBzZWxlY3RlZDoge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3QsXHJcbiAgICAgICAgICAgIGRlZmF1bHQ6IHtcclxuICAgICAgICAgICAgICAgIG5hbWU6IFwiXCIsXHJcbiAgICAgICAgICAgICAgICBlbnRyeTogXCJcIixcclxuICAgICAgICAgICAgICAgIGluZGV4OiBcIlwiLFxyXG4gICAgICAgICAgICAgICAgZ2xvYmFsOiBmYWxzZVxyXG5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBkYXRhKCkge1xyXG4gICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgIHNob3c6IGZhbHNlLFxyXG4gICAgICAgICAgICBsb2FkaW5nOiBmYWxzZSxcclxuICAgICAgICAgICAgZXJyb3I6IG51bGwsXHJcbiAgICAgICAgICAgIHN0YW5kYXJkczogW10gLy8g0JzQsNGB0YHQuNCyINC00LvRjyDRhdGA0LDQvdC10L3QuNGPINC30LDQs9GA0YPQttC10L3QvdGL0YUg0YHRgtCw0L3QtNCw0YDRgtC+0LJcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIG9uRWRpdChwcm9wLCB2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgnZWRpdCcsIHByb3AsIHZhbClcclxuICAgICAgICB9LFxyXG4gICAgICAgIHRvZ2dsZVN0YW5kYXJkcygpIHtcclxuICAgICAgICAgICAgdGhpcy5zaG93ID0gIXRoaXMuc2hvdztcclxuICAgICAgICAgICAgaWYgKHRoaXMuc2hvdyAmJiB0aGlzLnN0YW5kYXJkcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMubG9hZFN0YW5kYXJkcygpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuXHJcbiAgICAgICAgYXN5bmMgbG9hZFN0YW5kYXJkcygpIHtcclxuICAgICAgICAgICAgdGhpcy5sb2FkaW5nID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5lcnJvciA9IG51bGw7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdsb2FkJylcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vINCX0LDQs9GA0YPQt9C60LAg0LTQsNC90L3Ri9GFINGBINGD0LTQsNC70LXQvdC90L7Qs9C+INGB0LXRgNCy0LXRgNCwXHJcbiAgICAgICAgICAgICAgICAvKmNvbnN0IHJlc3BvbnNlID0gYXdhaXQgZmV0Y2goJ2h0dHBzOi8vYXBpLmV4YW1wbGUuY29tL3N0YW5kYXJkcycpO1xyXG4gICAgICAgICAgICAgICAgaWYgKCFyZXNwb25zZS5vaykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihgSFRUUCBlcnJvciEgc3RhdHVzOiAke3Jlc3BvbnNlLnN0YXR1c31gKTtcclxuICAgICAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zdGFuZGFyZHMgPSBbe30sIHt9XS8vYXdhaXQgcmVzcG9uc2UuanNvbigpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnIpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZXJyb3IgPSBlcnIubWVzc2FnZTtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ0Vycm9yIGxvYWRpbmcgc3RhbmRhcmRzOicsIGVycik7XHJcbiAgICAgICAgICAgIH0gZmluYWxseSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRpbmcgPSBmYWxzZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcblxyXG4gICAgICAgIHNlbGVjdFN0YW5kYXJkKGl0ZW0pIHtcclxuICAgICAgICAgICAgLy8g0JfQsNC/0L7Qu9C90Y/QtdC8INGE0L7RgNC80YMg0LLRi9Cx0YDQsNC90L3Ri9C8INGB0YLQsNC90LTQsNGA0YLQvtC8XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQubmFtZSA9IGl0ZW0ubmFtZTtcclxuICAgICAgICAgICAgdGhpcy5zZWxlY3RlZC5lbnRyeSA9IGl0ZW0uZW50cnk7XHJcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWQuaW5kZXggPSBpdGVtLmluZGV4O1xyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCdzdGFuZGFyZC1zZWxlY3RlZCcsIGl0ZW0pO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBzY29wZWQ+XHJcbi5mb3JtLWNvbnRhaW5lciB7XHJcbiAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgIG1heC13aWR0aDogMjU2cHg7XHJcbiAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgLmluZm8ge1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcclxuICAgICAgICBnYXA6IDEwcHg7XHJcblxyXG4gICAgICAgIC5yb3dlZCB7XHJcbiAgICAgICAgICAgIG1heC13aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xyXG4gICAgICAgICAgICBtaW4td2lkdGg6IDA7XHJcbiAgICAgICAgICAgIG92ZXJmbG93LXdyYXA6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLWFsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC5yb3cge1xyXG5cclxuXHJcbiAgICAgICAgICAgIGRpc3BsYXk6IGdyaWQ7XHJcbiAgICAgICAgICAgIGdyaWQtdGVtcGxhdGUtY29sdW1uczogbWlubWF4KDUwcHgsIDk2cHgpIG1pbm1heCgxMjhweCwgMWZyKTtcclxuXHJcbiAgICAgICAgICAgIC5yb3d2YWx1ZSB7XHJcbiAgICAgICAgICAgICAgICAudHlwZXNsaXN0IHtcclxuICAgICAgICAgICAgICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICAuYnV0dG9ubGluZSB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogcm93O1xyXG4gICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xyXG4gICAgfVxyXG5cclxuICAgIC5zdGFuZGFydHMge31cclxuXHJcbiAgICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC/0LjQvdC90LXRgNCwICovXHJcbiAgICAubG9hZGluZy1zcGlubmVyIHtcclxuICAgICAgICBkaXNwbGF5OiBmbGV4O1xyXG4gICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5zcGlubmVyIHtcclxuICAgICAgICB3aWR0aDogMjRweDtcclxuICAgICAgICBoZWlnaHQ6IDI0cHg7XHJcbiAgICAgICAgYm9yZGVyOiAycHggc29saWQgI2YzZjNmMztcclxuICAgICAgICBib3JkZXItdG9wOiAycHggc29saWQgIzM0OThkYjtcclxuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XHJcbiAgICAgICAgYW5pbWF0aW9uOiBzcGluIDFzIGxpbmVhciBpbmZpbml0ZTtcclxuICAgIH1cclxuXHJcbiAgICBAa2V5ZnJhbWVzIHNwaW4ge1xyXG4gICAgICAgIDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMGRlZyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAxMDAlIHtcclxuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMzYwZGVnKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgLyog0KHRgtC40LvQuCDQtNC70Y8g0YHQtdGC0LrQuCDRjdC70LXQvNC10L3RgtC+0LIgKi9cclxuICAgIC5zdGFuZGFyZHMtZ3JpZCB7XHJcbiAgICAgICAgZGlzcGxheTogZ3JpZDtcclxuICAgICAgICBncmlkLXRlbXBsYXRlLWNvbHVtbnM6IHJlcGVhdChhdXRvLWZpbGwsIG1pbm1heCg2MHB4LCAxZnIpKTtcclxuICAgICAgICBnYXA6IDhweDtcclxuICAgICAgICB3aWR0aDogMTAwJTtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQtaXRlbSB7XHJcbiAgICAgICAgYXNwZWN0LXJhdGlvOiAxO1xyXG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNkZGQ7XHJcbiAgICAgICAgYm9yZGVyLXJhZGl1czogNHB4O1xyXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlO1xyXG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcclxuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcclxuICAgIH1cclxuXHJcbiAgICAuc3RhbmRhcmQtaXRlbTpob3ZlciB7XHJcbiAgICAgICAgYm9yZGVyLWNvbG9yOiAjMzQ5OGRiO1xyXG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6ICNmOGY5ZmE7XHJcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0ycHgpO1xyXG4gICAgICAgIGJveC1zaGFkb3c6IDAgMnB4IDRweCByZ2JhKDAsIDAsIDAsIDAuMSk7XHJcbiAgICB9XHJcblxyXG4gICAgLml0ZW0tY29udGVudCB7XHJcbiAgICAgICAgZGlzcGxheTogZmxleDtcclxuICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xyXG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XHJcbiAgICAgICAgZ2FwOiA0cHg7XHJcbiAgICAgICAgcGFkZGluZzogNHB4O1xyXG4gICAgfVxyXG5cclxuICAgIC5pdGVtLWljb24ge1xyXG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcclxuICAgIH1cclxuXHJcbiAgICAuaXRlbS1uYW1lIHtcclxuICAgICAgICBmb250LXNpemU6IDEwcHg7XHJcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xyXG4gICAgICAgIHdvcmQtYnJlYWs6IGJyZWFrLXdvcmQ7XHJcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcclxuICAgICAgICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcclxuICAgICAgICBkaXNwbGF5OiAtd2Via2l0LWJveDtcclxuICAgICAgICAtd2Via2l0LWxpbmUtY2xhbXA6IDI7XHJcbiAgICAgICAgLXdlYmtpdC1ib3gtb3JpZW50OiB2ZXJ0aWNhbDtcclxuICAgIH1cclxuXHJcbiAgICAvKiDQodGC0LjQu9C4INC00LvRjyDRgdC+0L7QsdGJ0LXQvdC40LkgKi9cclxuICAgIC5lcnJvci1tZXNzYWdlLFxyXG4gICAgLm5vLWl0ZW1zIHtcclxuICAgICAgICBwYWRkaW5nOiAyMHB4O1xyXG4gICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgICBjb2xvcjogIzY2NjtcclxuICAgIH1cclxuXHJcbiAgICAuZXJyb3ItbWVzc2FnZSB7XHJcbiAgICAgICAgY29sb3I6ICNlNzRjM2M7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldHJ5LWJ0biB7XHJcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xyXG4gICAgICAgIHBhZGRpbmc6IDRweCA4cHg7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzM0OThkYjtcclxuICAgICAgICBjb2xvcjogd2hpdGU7XHJcbiAgICAgICAgYm9yZGVyOiBub25lO1xyXG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDNweDtcclxuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgICB9XHJcblxyXG4gICAgLnJldHJ5LWJ0bjpob3ZlciB7XHJcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogIzI5ODBiOTtcclxuICAgIH1cclxufVxyXG48L3N0eWxlPiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==