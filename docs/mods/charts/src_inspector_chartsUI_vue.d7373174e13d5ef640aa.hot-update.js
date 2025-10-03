"use strict";
self["webpackHotUpdate_reneos_slider_mods_charts"]("src_inspector_chartsUI_vue",{

/***/ "./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[18].use[0]!./src/inspector/chartsUI.vue?vue&type=script&lang=js":
/*!*********************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[18].use[0]!./src/inspector/chartsUI.vue?vue&type=script&lang=js ***!
  \*********************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(three__WEBPACK_IMPORTED_MODULE_0__);




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
    name: "TextMesh",
    props: {
        modelValue: {
            type: Array
        },
        value: {
            type: Object
        }
    },
    computed: {
        values: {
            get() {
                return this.modelValue
            },
            set(v) {
                this.$emit('update:modelValue', v)
            }
        }
    },
    methods: {
        addValue() {
            const v = {
                value: 0, color: `#ffffff`
            }
            v.encode = () => {
                return {
                    value: v.value,
                    color: v.color
                }
            };
            this.value.addValue(v)
            this.$emit('update:modelValue', this.modelValue)
        },
        onColorSet(index, v) {
            this.value.changeColor(index, v)
            this.$emit('update:modelValue', this.modelValue)
        },
        onValueSet(index, v) {
            this.value.changeValue(index, v)
            this.$emit('update:modelValue', this.modelValue)
        }
    }
});


/***/ }),

/***/ "./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/templateLoader.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[18].use[0]!./src/inspector/chartsUI.vue?vue&type=template&id=169fccda":
/*!*******************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-loader/dist/templateLoader.js??ruleSet[1].rules[1]!./node_modules/vue-loader/dist/templateLoader.js??clonedRuleSet-6!./node_modules/vue-loader/dist/index.js??ruleSet[1].rules[18].use[0]!./src/inspector/chartsUI.vue?vue&type=template&id=169fccda ***!
  \*******************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   render: () => (/* binding */ render)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(vue__WEBPACK_IMPORTED_MODULE_0__);


const _hoisted_1 = { class: "vertflex" }
const _hoisted_2 = {
  class: "flex-fit",
  style: {"justify-content":"center"}
}
const _hoisted_3 = { style: {"display":"flex","justify-content":"space-between"} }
const _hoisted_4 = {
  key: 0,
  class: "flex-fit",
  style: {"justify-content":"center"}
}

function render(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Float = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("Float")
  const _component_ColorString = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("ColorString")

  return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_1, [
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", _hoisted_2, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderSlot)(_ctx.$slots, "default")
    ]),
    (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
      (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("div", null, [
        (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementVNode)("button", {
          onClick: _cache[0] || (_cache[0] = (...args) => ($options.addValue && $options.addValue(...args)))
        }, "Add")
      ]),
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.values, (value, index) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Float, {
            "onUpdate:modelValue": [$event => ($options.onValueSet(index, $event)), $event => ((value.value) = $event)],
            modelValue: value.value,
            step: 1,
            decimals: 0
          }, null, 8 /* PROPS */, ["onUpdate:modelValue", "modelValue"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_ColorString, {
            "onUpdate:modelValue": [$event => ($options.onColorSet(index, $event)), $event => ((value.color) = $event)],
            modelValue: value.color
          }, null, 8 /* PROPS */, ["onUpdate:modelValue", "modelValue"])
        ]))
      }), 256 /* UNKEYED_FRAGMENT */))
    ]),
     false
      ? (0)
      : (0,vue__WEBPACK_IMPORTED_MODULE_0__.createCommentVNode)("v-if", true)
  ]))
}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2luc3BlY3Rvcl9jaGFydHNVSV92dWUuZDczNzMxNzRlMTNkNWVmNjQwYWEuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBdUI4Qjs7O0FBRzlCLGlFQUFlO0lBQ1gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7SUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNkLENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZjtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNOLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSixDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0YsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3pCLENBQUM7WUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDckM7UUFDSjtJQUNKLENBQUM7SUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1AsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsRUFBRTtnQkFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzdCO1lBQ0EsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLEVBQUUsQ0FBQyxFQUFFLENBQUMsRUFBRTtnQkFDYixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtvQkFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO29CQUNkLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNqQjtZQUNKLENBQUM7WUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNyQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFO1lBQ2pCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQy9CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRDtJQUNKO0FBQ0osQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQXBFTyxLQUFLLEVBQUMsVUFBVTs7RUFDWixLQUFLLEVBQUMsVUFBVTtFQUFDLEtBQWdDLEVBQWhDLDRCQUFnQzs7cUJBUTdDLEtBQXFELEVBQXJELG9EQUFxRDs7O0VBTTVDLEtBQUssRUFBQyxVQUFVO0VBQUMsS0FBZ0MsRUFBaEMsNEJBQWdDOzs7Ozs7OzREQWZ2RSx3REFrQk0sT0FsQk4sVUFrQk07SUFqQkYsd0RBR00sT0FITixVQUdNO01BRkYsZ0RBQ087O0lBRVgsd0RBU007TUFSRix3REFFTTtRQURGLHdEQUFzQztVQUE3QixPQUFLLDBDQUFFLCtDQUFRO1dBQUUsS0FBRzs7NkRBRWpDLHdEQUlNLGlHQUo4RSxlQUFNLEdBQXZCLEtBQUssRUFBRSxLQUFLO2tFQUEvRSx3REFJTSxPQUpOLFVBSU07VUFIRixpREFDUTtZQURBLHFCQUFpQixjQUFFLG1CQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sZ0JBQVksS0FBSyxDQUFDLEtBQUs7d0JBQVgsS0FBSyxDQUFDLEtBQUs7WUFBRyxJQUFJLEVBQUUsQ0FBQztZQUFHLFFBQVEsRUFBRSxDQUFDOztVQUVsRyxpREFBZ0c7WUFBbEYscUJBQWlCLGNBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxnQkFBWSxLQUFLLENBQUMsS0FBSzt3QkFBWCxLQUFLLENBQUMsS0FBSzs7Ozs7SUFHN0UsTUFBSztVQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvaW5zcGVjdG9yL2NoYXJ0c1VJLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwidmVydGZsZXhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maXRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICA8c2xvdD5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZFZhbHVlXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCIgdi1mb3I9XCIodmFsdWUsIGluZGV4KSBpbiB2YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgIDxGbG9hdCBAdXBkYXRlOm1vZGVsVmFsdWU9XCJvblZhbHVlU2V0KGluZGV4LCAkZXZlbnQpXCIgdi1tb2RlbD1cInZhbHVlLnZhbHVlXCIgOnN0ZXA9XCIxXCIgOmRlY2ltYWxzPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdD5cclxuICAgICAgICAgICAgICAgIDxDb2xvclN0cmluZyBAdXBkYXRlOm1vZGVsVmFsdWU9XCJvbkNvbG9yU2V0KGluZGV4LCAkZXZlbnQpXCIgdi1tb2RlbD1cInZhbHVlLmNvbG9yXCI+PC9Db2xvclN0cmluZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZmFsc2VcIiBjbGFzcz1cImZsZXgtZml0XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcbmltcG9ydCB7IENvbG9yIH0gZnJvbSAndGhyZWUnO1xyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiVGV4dE1lc2hcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWxWYWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsVmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCwgY29sb3I6IGAjZmZmZmZmYFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHYuZW5jb2RlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogdi52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICBjb2xvcjogdi5jb2xvclxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmFkZFZhbHVlKHYpXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdGhpcy5tb2RlbFZhbHVlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db2xvclNldChpbmRleCwgdikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmNoYW5nZUNvbG9yKGluZGV4LCB2KVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRoaXMubW9kZWxWYWx1ZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVmFsdWVTZXQoaW5kZXgsIHYpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5jaGFuZ2VWYWx1ZShpbmRleCwgdilcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0aGlzLm1vZGVsVmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9