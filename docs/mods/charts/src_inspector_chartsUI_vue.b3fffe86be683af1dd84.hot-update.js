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
            this.value.addValue({
                value: 0, color: `#ffffff`
            })
            this.$emit('update:modelValue', this.modelValue)
        },
        onColorSet(index, col) {
            this.value.changeColor(index, col)
            this.$emit('update:modelValue', this.modelValue)
        },
        onValueSet(index, col) {
            this.value.changeValue(index, col)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2luc3BlY3Rvcl9jaGFydHNVSV92dWUuYjNmZmZlODZiZTY4M2FmMWRkODQuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQztRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDN0IsQ0FBQztZQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ25CLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQztZQUNqQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7WUFDakMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRDtJQUNKO0FBQ0osQ0FBQyxFQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O3FCQTNETyxLQUFLLEVBQUMsVUFBVTs7RUFDWixLQUFLLEVBQUMsVUFBVTtFQUFDLEtBQWdDLEVBQWhDLDRCQUFnQzs7cUJBUTdDLEtBQXFELEVBQXJELG9EQUFxRDs7O0VBTTVDLEtBQUssRUFBQyxVQUFVO0VBQUMsS0FBZ0MsRUFBaEMsNEJBQWdDOzs7Ozs7OzREQWZ2RSx3REFrQk0sT0FsQk4sVUFrQk07SUFqQkYsd0RBR00sT0FITixVQUdNO01BRkYsZ0RBQ087O0lBRVgsd0RBU007TUFSRix3REFFTTtRQURGLHdEQUFzQztVQUE3QixPQUFLLDBDQUFFLCtDQUFRO1dBQUUsS0FBRzs7NkRBRWpDLHdEQUlNLGlHQUo4RSxlQUFNLEdBQXZCLEtBQUssRUFBRSxLQUFLO2tFQUEvRSx3REFJTSxPQUpOLFVBSU07VUFIRixpREFDUTtZQURBLHFCQUFpQixjQUFFLG1CQUFVLENBQUMsS0FBSyxFQUFFLE1BQU0sZ0JBQVksS0FBSyxDQUFDLEtBQUs7d0JBQVgsS0FBSyxDQUFDLEtBQUs7WUFBRyxJQUFJLEVBQUUsQ0FBQztZQUFHLFFBQVEsRUFBRSxDQUFDOztVQUVsRyxpREFBZ0c7WUFBbEYscUJBQWlCLGNBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxnQkFBWSxLQUFLLENBQUMsS0FBSzt3QkFBWCxLQUFLLENBQUMsS0FBSzs7Ozs7SUFHN0UsTUFBSztVQUVWIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvaW5zcGVjdG9yL2NoYXJ0c1VJLnZ1ZSJdLCJzb3VyY2VzQ29udGVudCI6WyI8dGVtcGxhdGU+XHJcbiAgICA8ZGl2IGNsYXNzPVwidmVydGZsZXhcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiZmxleC1maXRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG4gICAgICAgICAgICA8c2xvdD5cclxuICAgICAgICAgICAgPC9zbG90PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgIDxkaXY+XHJcbiAgICAgICAgICAgICAgICA8YnV0dG9uIEBjbGljaz1cImFkZFZhbHVlXCI+QWRkPC9idXR0b24+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8ZGl2IHN0eWxlPVwiZGlzcGxheTogZmxleDtqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XCIgdi1mb3I9XCIodmFsdWUsIGluZGV4KSBpbiB2YWx1ZXNcIj5cclxuICAgICAgICAgICAgICAgIDxGbG9hdCBAdXBkYXRlOm1vZGVsVmFsdWU9XCJvblZhbHVlU2V0KGluZGV4LCAkZXZlbnQpXCIgdi1tb2RlbD1cInZhbHVlLnZhbHVlXCIgOnN0ZXA9XCIxXCIgOmRlY2ltYWxzPVwiMFwiPlxyXG4gICAgICAgICAgICAgICAgPC9GbG9hdD5cclxuICAgICAgICAgICAgICAgIDxDb2xvclN0cmluZyBAdXBkYXRlOm1vZGVsVmFsdWU9XCJvbkNvbG9yU2V0KGluZGV4LCAkZXZlbnQpXCIgdi1tb2RlbD1cInZhbHVlLmNvbG9yXCI+PC9Db2xvclN0cmluZz5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdiB2LWlmPVwiZmFsc2VcIiBjbGFzcz1cImZsZXgtZml0XCIgc3R5bGU9XCJqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcIj5cclxuXHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuPC90ZW1wbGF0ZT5cclxuXHJcbjxzY3JpcHQ+XHJcblxyXG5leHBvcnQgZGVmYXVsdCB7XHJcbiAgICBuYW1lOiBcIlRleHRNZXNoXCIsXHJcbiAgICBwcm9wczoge1xyXG4gICAgICAgIG1vZGVsVmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogQXJyYXlcclxuICAgICAgICB9LFxyXG4gICAgICAgIHZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IE9iamVjdFxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBjb21wdXRlZDoge1xyXG4gICAgICAgIHZhbHVlczoge1xyXG4gICAgICAgICAgICBnZXQoKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5tb2RlbFZhbHVlXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHNldCh2KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHYpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgbWV0aG9kczoge1xyXG4gICAgICAgIGFkZFZhbHVlKCkge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmFkZFZhbHVlKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLCBjb2xvcjogYCNmZmZmZmZgXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdGhpcy5tb2RlbFZhbHVlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db2xvclNldChpbmRleCwgY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2hhbmdlQ29sb3IoaW5kZXgsIGNvbClcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0aGlzLm1vZGVsVmFsdWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblZhbHVlU2V0KGluZGV4LCBjb2wpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5jaGFuZ2VWYWx1ZShpbmRleCwgY29sKVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRoaXMubW9kZWxWYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+PC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=