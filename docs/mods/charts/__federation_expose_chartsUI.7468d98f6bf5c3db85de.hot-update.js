"use strict";
self["webpackHotUpdate_reneos_slider_mods_charts"]("__federation_expose_chartsUI",{

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
            this.value.addValue()
            this.$emit('update:modelValue', this.modelValue)
        },
        onColorSet(el, col) {
            this.value.changeColor(el, col.encode())
            this.$emit('update:modelValue', this.modelValue)
        },
        onValueSet(el, col) {
            this.value.changeValue(el, col)
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
  const _component_EditColor = (0,vue__WEBPACK_IMPORTED_MODULE_0__.resolveComponent)("EditColor")

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
      ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(true), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)(vue__WEBPACK_IMPORTED_MODULE_0__.Fragment, null, (0,vue__WEBPACK_IMPORTED_MODULE_0__.renderList)($options.values, (value) => {
        return ((0,vue__WEBPACK_IMPORTED_MODULE_0__.openBlock)(), (0,vue__WEBPACK_IMPORTED_MODULE_0__.createElementBlock)("div", _hoisted_3, [
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_Float, {
            "onUpdate:modelValue": [$event => ($options.onValueSet(value, $event)), $event => ((value.value) = $event)],
            modelValue: value.value,
            step: 1,
            decimals: 0
          }, null, 8 /* PROPS */, ["onUpdate:modelValue", "modelValue"]),
          (0,vue__WEBPACK_IMPORTED_MODULE_0__.createVNode)(_component_EditColor, {
            "onUpdate:modelValue": [$event => ($options.onColorSet(value, $event)), $event => ((value.color) = $event)],
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHNVSS43NDY4ZDk4ZjZiZjVjM2RiODVkZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQXdCQSxpRUFBZTtJQUNYLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ2hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ1IsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDZCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDSCxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ2Y7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7UUFDTixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1lBQ0osQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO2dCQUNGLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUN6QixDQUFDO1lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUU7Z0JBQ0gsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDO1lBQ3JDO1FBQ0o7SUFDSixDQUFDO0lBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO1FBQ0wsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNQLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNwQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO1FBQ25ELENBQUM7UUFDRCxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsRUFBRTtZQUNoQixDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDdkMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNuRCxDQUFDO1FBQ0QsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLEVBQUU7WUFDaEIsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDO1lBQzlCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDbkQ7SUFDSjtBQUNKLENBQUMsRUFBQzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztxQkF6RE8sS0FBSyxFQUFDLFVBQVU7O0VBQ1osS0FBSyxFQUFDLFVBQVU7RUFBQyxLQUFnQyxFQUFoQyw0QkFBZ0M7O3FCQVE3QyxLQUFxRCxFQUFyRCxvREFBcUQ7OztFQU01QyxLQUFLLEVBQUMsVUFBVTtFQUFDLEtBQWdDLEVBQWhDLDRCQUFnQzs7Ozs7Ozs0REFmdkUsd0RBa0JNLE9BbEJOLFVBa0JNO0lBakJGLHdEQUdNLE9BSE4sVUFHTTtNQUZGLGdEQUNPOztJQUVYLHdEQVNNO01BUkYsd0RBRU07UUFERix3REFBc0M7VUFBN0IsT0FBSywwQ0FBRSwrQ0FBUTtXQUFFLEtBQUc7OzZEQUVqQyx3REFJTSxpR0FKcUUsZUFBTSxHQUFmLEtBQUs7a0VBQXZFLHdEQUlNLE9BSk4sVUFJTTtVQUhGLGlEQUNRO1lBREEscUJBQWlCLGNBQUUsbUJBQVUsQ0FBQyxLQUFLLEVBQUUsTUFBTSxnQkFBWSxLQUFLLENBQUMsS0FBSzt3QkFBWCxLQUFLLENBQUMsS0FBSztZQUFHLElBQUksRUFBRSxDQUFDO1lBQUcsUUFBUSxFQUFFLENBQUM7O1VBRWxHLGlEQUE0RjtZQUFoRixxQkFBaUIsY0FBRSxtQkFBVSxDQUFDLEtBQUssRUFBRSxNQUFNLGdCQUFZLEtBQUssQ0FBQyxLQUFLO3dCQUFYLEtBQUssQ0FBQyxLQUFLOzs7OztJQUczRSxNQUFLO1VBRVYiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9pbnNwZWN0b3IvY2hhcnRzVUkudnVlIl0sInNvdXJjZXNDb250ZW50IjpbIjx0ZW1wbGF0ZT5cclxuICAgIDxkaXYgY2xhc3M9XCJ2ZXJ0ZmxleFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJmbGV4LWZpdFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcbiAgICAgICAgICAgIDxzbG90PlxyXG4gICAgICAgICAgICA8L3Nsb3Q+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgPGRpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gQGNsaWNrPVwiYWRkVmFsdWVcIj5BZGQ8L2J1dHRvbj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDxkaXYgc3R5bGU9XCJkaXNwbGF5OiBmbGV4O2p1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcIiB2LWZvcj1cInZhbHVlIGluIHZhbHVlc1wiPlxyXG4gICAgICAgICAgICAgICAgPEZsb2F0IEB1cGRhdGU6bW9kZWxWYWx1ZT1cIm9uVmFsdWVTZXQodmFsdWUsICRldmVudClcIiB2LW1vZGVsPVwidmFsdWUudmFsdWVcIiA6c3RlcD1cIjFcIiA6ZGVjaW1hbHM9XCIwXCI+XHJcbiAgICAgICAgICAgICAgICA8L0Zsb2F0PlxyXG4gICAgICAgICAgICAgICAgPEVkaXRDb2xvciBAdXBkYXRlOm1vZGVsVmFsdWU9XCJvbkNvbG9yU2V0KHZhbHVlLCAkZXZlbnQpXCIgdi1tb2RlbD1cInZhbHVlLmNvbG9yXCI+PC9FZGl0Q29sb3I+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxkaXYgdi1pZj1cImZhbHNlXCIgY2xhc3M9XCJmbGV4LWZpdFwiIHN0eWxlPVwianVzdGlmeS1jb250ZW50OiBjZW50ZXI7XCI+XHJcblxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbjwvdGVtcGxhdGU+XHJcblxyXG48c2NyaXB0PlxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgbmFtZTogXCJUZXh0TWVzaFwiLFxyXG4gICAgcHJvcHM6IHtcclxuICAgICAgICBtb2RlbFZhbHVlOiB7XHJcbiAgICAgICAgICAgIHR5cGU6IEFycmF5XHJcbiAgICAgICAgfSxcclxuICAgICAgICB2YWx1ZToge1xyXG4gICAgICAgICAgICB0eXBlOiBPYmplY3RcclxuICAgICAgICB9XHJcbiAgICB9LFxyXG4gICAgY29tcHV0ZWQ6IHtcclxuICAgICAgICB2YWx1ZXM6IHtcclxuICAgICAgICAgICAgZ2V0KCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMubW9kZWxWYWx1ZVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzZXQodikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB2KVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfSxcclxuICAgIG1ldGhvZHM6IHtcclxuICAgICAgICBhZGRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5hZGRWYWx1ZSgpXHJcbiAgICAgICAgICAgIHRoaXMuJGVtaXQoJ3VwZGF0ZTptb2RlbFZhbHVlJywgdGhpcy5tb2RlbFZhbHVlKVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgb25Db2xvclNldChlbCwgY29sKSB7XHJcbiAgICAgICAgICAgIHRoaXMudmFsdWUuY2hhbmdlQ29sb3IoZWwsIGNvbC5lbmNvZGUoKSlcclxuICAgICAgICAgICAgdGhpcy4kZW1pdCgndXBkYXRlOm1vZGVsVmFsdWUnLCB0aGlzLm1vZGVsVmFsdWUpXHJcbiAgICAgICAgfSxcclxuICAgICAgICBvblZhbHVlU2V0KGVsLCBjb2wpIHtcclxuICAgICAgICAgICAgdGhpcy52YWx1ZS5jaGFuZ2VWYWx1ZShlbCwgY29sKVxyXG4gICAgICAgICAgICB0aGlzLiRlbWl0KCd1cGRhdGU6bW9kZWxWYWx1ZScsIHRoaXMubW9kZWxWYWx1ZSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn07XHJcbjwvc2NyaXB0PlxyXG5cclxuPHN0eWxlIGxhbmc9XCJzY3NzXCI+PC9zdHlsZT4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=