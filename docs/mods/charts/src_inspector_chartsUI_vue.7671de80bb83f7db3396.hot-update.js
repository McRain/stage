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
            this.$app.project.createElement({
                type: "ChartColumn",
                value: 0,
                color: new Color('#ffffff')
            }, this.value)
            /*const v = {
                value: 0, color: `#ffffff`
            }
            v.encode = () => {
                return {
                    value: v.value,
                    color: v.color
                }
            };
            this.value.addValue(v)
            this.$emit('update:modelValue', this.modelValue)*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3JjX2luc3BlY3Rvcl9jaGFydHNVSV92dWUuNzY3MWRlODBiYjgzZjdkYjMzOTYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7QUF3QkEsaUVBQWU7SUFDWCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2QsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNmO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ04sQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNKLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtnQkFDRixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDekIsQ0FBQztZQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNILENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUNyQztRQUNKO0lBQ0osQ0FBQztJQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtRQUNMLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDUCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzVCLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNuQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO2dCQUNSLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLEVBQUU7Z0JBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUM3QjtZQUNBLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxFQUFFLENBQUMsRUFBRSxDQUFDLEVBQUU7Z0JBQ2IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7b0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztvQkFDZCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztnQkFDakI7WUFDSixDQUFDO1lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDckIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDckQsQ0FBQztRQUNELENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUU7WUFDakIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUM7WUFDL0IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRTtZQUNqQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQztZQUMvQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25EO0lBQ0o7QUFDSixDQUFDLEVBQUM7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7cUJBdkVPLEtBQUssRUFBQyxVQUFVOztFQUNaLEtBQUssRUFBQyxVQUFVO0VBQUMsS0FBZ0MsRUFBaEMsNEJBQWdDOztxQkFRN0MsS0FBcUQsRUFBckQsb0RBQXFEOzs7RUFNNUMsS0FBSyxFQUFDLFVBQVU7RUFBQyxLQUFnQyxFQUFoQyw0QkFBZ0M7Ozs7Ozs7NERBZnZFLHdEQWtCTSxPQWxCTixVQWtCTTtJQWpCRix3REFHTSxPQUhOLFVBR007TUFGRixnREFDTzs7SUFFWCx3REFTTTtNQVJGLHdEQUVNO1FBREYsd0RBQXNDO1VBQTdCLE9BQUssMENBQUUsK0NBQVE7V0FBRSxLQUFHOzs2REFFakMsd0RBSU0saUdBSjhFLGVBQU0sR0FBdkIsS0FBSyxFQUFFLEtBQUs7a0VBQS9FLHdEQUlNLE9BSk4sVUFJTTtVQUhGLGlEQUNRO1lBREEscUJBQWlCLGNBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxnQkFBWSxLQUFLLENBQUMsS0FBSzt3QkFBWCxLQUFLLENBQUMsS0FBSztZQUFHLElBQUksRUFBRSxDQUFDO1lBQUcsUUFBUSxFQUFFLENBQUM7O1VBRWxHLGlEQUFnRztZQUFsRixxQkFBaUIsY0FBRSxtQkFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLGdCQUFZLEtBQUssQ0FBQyxLQUFLO3dCQUFYLEtBQUssQ0FBQyxLQUFLOzs7OztJQUc3RSxNQUFLO1VBRVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9pbnNwZWN0b3IvY2hhcnRzVUkudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0ZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpdFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxzbG90PlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkVmFsdWVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIiB2LWZvcj1cIih2YWx1ZSwgaW5kZXgpIGluIHZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0IEB1cGRhdGU6bW9kZWxWYWx1ZT1cIm9uVmFsdWVTZXQoaW5kZXgsICRldmVudClcIiB2LW1vZGVsPVwidmFsdWUudmFsdWVcIiA6c3RlcD1cIjFcIiA6ZGVjaW1hbHM9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0PlxyXG4gICAgICAgICAgICAgICAgPENvbG9yU3RyaW5nIEB1cGRhdGU6bW9kZWxWYWx1ZT1cIm9uQ29sb3JTZXQoaW5kZXgsICRldmVudClcIiB2LW1vZGVsPVwidmFsdWUuY29sb3JcIj48L0NvbG9yU3RyaW5nPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8ZGl2IHYtaWY9XCJmYWxzZVwiIGNsYXNzPVwiZmxleC1maXRcIiBzdHlsZT1cImp1c3RpZnktY29udGVudDogY2VudGVyO1wiPlxyXG5cclxuICAgICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG48L3RlbXBsYXRlPlxyXG5cclxuPHNjcmlwdD5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIG5hbWU6IFwiVGV4dE1lc2hcIixcclxuICAgIHByb3BzOiB7XHJcbiAgICAgICAgbW9kZWxWYWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBBcnJheVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmFsdWU6IHtcclxuICAgICAgICAgICAgdHlwZTogT2JqZWN0XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIGNvbXB1dGVkOiB7XHJcbiAgICAgICAgdmFsdWVzOiB7XHJcbiAgICAgICAgICAgIGdldCgpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLm1vZGVsVmFsdWVcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgc2V0KHYpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH0sXHJcbiAgICBtZXRob2RzOiB7XHJcbiAgICAgICAgYWRkVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuJGFwcC5wcm9qZWN0LmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICAgICAgdHlwZTogXCJDaGFydENvbHVtblwiLFxyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogbmV3IENvbG9yKCcjZmZmZmZmJylcclxuICAgICAgICAgICAgfSwgdGhpcy52YWx1ZSlcclxuICAgICAgICAgICAgLypjb25zdCB2ID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsIGNvbG9yOiBgI2ZmZmZmZmBcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB2LmVuY29kZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFsdWU6IHYudmFsdWUsXHJcbiAgICAgICAgICAgICAgICAgICAgY29sb3I6IHYuY29sb3JcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5hZGRWYWx1ZSh2KVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRoaXMubW9kZWxWYWx1ZSkqL1xyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db2xvclNldChpbmRleCwgdikge1xyXG4gICAgICAgICAgICB0aGlzLnZhbHVlLmNoYW5nZUNvbG9yKGluZGV4LCB2KVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRoaXMubW9kZWxWYWx1ZSlcclxuICAgICAgICB9LFxyXG4gICAgICAgIG9uVmFsdWVTZXQoaW5kZXgsIHYpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5jaGFuZ2VWYWx1ZShpbmRleCwgdilcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0aGlzLm1vZGVsVmFsdWUpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59O1xyXG48L3NjcmlwdD5cclxuXHJcbjxzdHlsZSBsYW5nPVwic2Nzc1wiPjwvc3R5bGU+Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9