"use strict";
self["webpackHotUpdate_reneos_slider_mods_charts"]("__federation_expose_charts",{

/***/ "./src/index.mf.js":
/*!*************************!*\
  !*** ./src/index.mf.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _models_columnchart_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/columnchart.js */ "./src/models/columnchart.js");
/* harmony import */ var _models_chartColumn_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/chartColumn.js */ "./src/models/chartColumn.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;




async function Init() {
    if (App.engine.ready) {

        App.engine.Factory.RegisterElement("ColumnChart", _models_columnchart_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Column Chart"
        })
        App.engine.Factory.RegisterElement("ChartColumn", _models_chartColumn_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Column Chart",
            hided: true
        })
        if (!window.isEditor) {
            return
        }

        window.vue.component('chartsUI', (0,vue__WEBPACK_IMPORTED_MODULE_1__.defineAsyncComponent)(async () => {
            const module = await __webpack_require__.e(/*! import() */ "src_inspector_chartsUI_vue").then(__webpack_require__.bind(__webpack_require__, /*! ./inspector/chartsUI.vue */ "./src/inspector/chartsUI.vue"));
            return module.default || module;
        }))

        App.inspector.addToModels(["ColumnChart"], [
            {
                label: "Max",
                content: {
                    component: "Float",
                    prop: "max",
                    state: true
                }
            },
            {
                label: "Values",
                content: {
                    component: "chartsUI",
                    prop: "values",
                    state: true
                }
            }
        ])
    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ }),

/***/ "./src/models/chartColumn.js":
/*!***********************************!*\
  !*** ./src/models/chartColumn.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ChartColumn)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var gsapmod_GsapFloat__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! gsapmod/GsapFloat */ "webpack/container/remote/gsapmod/GsapFloat");
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! gsap */ "webpack/sharing/consume/default/gsap/gsap");






console.log(gsapmod_GsapFloat__WEBPACK_IMPORTED_MODULE_1__)

const indicesToMove = [
    2,
    3,
    5,
    6,
    8,
    9,
    10,
    11,
    18,
    19,
    21,
    22
];

const rainbowColors = [
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xFF0000),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xFF7F00),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xFFFF00),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x00FF00),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x0000FF),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x4B0082),
    new three__WEBPACK_IMPORTED_MODULE_0__.Color(0x8B00FF)
];

function MovePositions(position, indicesToMove, target) {
    for (let i = 0; i < indicesToMove.length; i++) {
        position.array[indicesToMove[i] * 3 + 1] = target;
    }
    position.needsUpdate = true;
}


function createCubeGeometry(col) {
    const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
    const vertices = new Float32Array(new Float32Array([
        -1, -1, 1,
        1, -1, 1,
        1, -1, 1,
        -1, -1, 1,
        -1, -1, -1,
        -1, -1, -1,
        1, -1, -1,
        1, -1, -1,
        -1, -1, 1,
        1, -1, 1,
        1, -1, -1,
        -1, -1, -1,
        -1, -1, 1,
        -1, -1, -1,
        1, -1, -1,
        1, -1, 1,
        1, -1, 1,
        1, -1, -1,
        1, -1, -1,
        1, -1, 1,
        -1, -1, 1,
        -1, -1, 1,
        -1, -1, -1,
        -1, -1, -1,
    ]))
    const indices = new Uint32Array([
        0, 1, 2, 0, 2, 3, 4, 5, 6, 4, 6, 7,
        8, 9, 10, 8, 10, 11, 12, 13, 14, 12, 14, 15,
        16, 17, 18, 16, 18, 19, 20, 21, 22, 20, 22, 23,
    ]);
    const normals = new Float32Array([
        0, 0, 1, 0, 0, 1,
        0, 0, 1, 0, 0, 1,
        0, 0, -1, 0, 0, -1,
        0, 0, -1, 0, 0, -1,
        0, 1, 0, 0, 1, 0,
        0, 1, 0, 0, 1, 0,
        0, -1, 0, 0, -1, 0,
        0, -1, 0, 0, -1, 0,
        1, 0, 0, 1, 0, 0,
        1, 0, 0, 1, 0, 0,
        -1, 0, 0, -1, 0, 0,
        -1, 0, 0, -1, 0, 0,
    ]);
    geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(vertices, 3));
    geometry.setIndex(new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(indices, 1));
    geometry.setAttribute('normal', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(normals, 3));
    const colors = []
    for (let i = 0; i < geometry.attributes.position.count; i++) {
        colors.push(col.r, col.g, col.b)
    }
    geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(colors), 3))
    return geometry;
}

function ChartColumn() {
    return class ChartColumn extends three__WEBPACK_IMPORTED_MODULE_0__.Mesh {
        constructor(data) {
            super(createCubeGeometry(new three__WEBPACK_IMPORTED_MODULE_0__.Color()), new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                reflectivity: 0.9
            }));
            this.type = "ChartColumn";
            this.faces = []
            this.columns = []
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                reflectivity: 0.9
            })
        }



        getTypes() {
            return [...super.getTypes(), this.type]
        }


    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuZDcyODczYjc3ZjU3NjI4NjUzY2MuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBMkM7QUFDTTtBQUNDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQsOERBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1QsMERBQTBELDhEQUFXO0FBQ3JFO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUMseURBQW9CO0FBQzdELGlDQUFpQyx1TEFBa0M7QUFDbkU7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNOzs7Ozs7Ozs7Ozs7Ozs7OztBQzNDZTtBQUNmO0FBQzBDO0FBQzFDO0FBQzRCO0FBQzVCO0FBQ0EsWUFBWSw4Q0FBUztBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQiwwQkFBMEI7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQWM7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGtEQUFlO0FBQ3pELDBCQUEwQixrREFBZTtBQUN6Qyx3Q0FBd0Msa0RBQWU7QUFDdkQ7QUFDQSxvQkFBb0Isd0NBQXdDO0FBQzVEO0FBQ0E7QUFDQSx1Q0FBdUMsa0RBQWU7QUFDdEQ7QUFDQTtBQUNBO0FBQ2U7QUFDZixxQ0FBcUMsdUNBQUk7QUFDekM7QUFDQSx5Q0FBeUMsd0NBQUssU0FBUyxvREFBaUI7QUFDeEU7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9pbmRleC5tZi5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9tb2RlbHMvY2hhcnRDb2x1bW4uanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IHsgZGVmaW5lQXN5bmNDb21wb25lbnQgfSBmcm9tICd2dWUnO1xyXG5pbXBvcnQgQ29sdW1uQ2hhcnQgZnJvbSBcIi4vbW9kZWxzL2NvbHVtbmNoYXJ0LmpzXCJcclxuaW1wb3J0IENoYXJ0Q29sdW1uIGZyb20gXCIuL21vZGVscy9jaGFydENvbHVtbi5qc1wiO1xyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG5cclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiQ29sdW1uQ2hhcnRcIiwgQ29sdW1uQ2hhcnQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ29sdW1uIENoYXJ0XCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDaGFydENvbHVtblwiLCBDaGFydENvbHVtbiwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb2x1bW4gQ2hhcnRcIixcclxuICAgICAgICAgICAgaGlkZWQ6IHRydWVcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgd2luZG93LnZ1ZS5jb21wb25lbnQoJ2NoYXJ0c1VJJywgZGVmaW5lQXN5bmNDb21wb25lbnQoYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBjb25zdCBtb2R1bGUgPSBhd2FpdCBpbXBvcnQoJy4vaW5zcGVjdG9yL2NoYXJ0c1VJLnZ1ZScpO1xyXG4gICAgICAgICAgICByZXR1cm4gbW9kdWxlLmRlZmF1bHQgfHwgbW9kdWxlO1xyXG4gICAgICAgIH0pKVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIkNvbHVtbkNoYXJ0XCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk1heFwiLFxyXG4gICAgICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibWF4XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVmFsdWVzXCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcImNoYXJ0c1VJXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJ2YWx1ZXNcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQXBwLmVuZ2luZS5vbmxvYWQoSW5pdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5Jbml0KCkiLCJpbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBDb2xvcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcclxuICAgIE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgT2JqZWN0M0RcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCBHc2FwRmxvYXQgZnJvbSBcImdzYXBtb2QvR3NhcEZsb2F0XCI7XHJcblxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdzYXBGbG9hdClcclxuXHJcbmNvbnN0IGluZGljZXNUb01vdmUgPSBbXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMTgsXHJcbiAgICAxOSxcclxuICAgIDIxLFxyXG4gICAgMjJcclxuXTtcclxuXHJcbmNvbnN0IHJhaW5ib3dDb2xvcnMgPSBbXHJcbiAgICBuZXcgQ29sb3IoMHhGRjAwMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkY3RjAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMEZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDAwMEZGKSxcclxuICAgIG5ldyBDb2xvcigweDRCMDA4MiksXHJcbiAgICBuZXcgQ29sb3IoMHg4QjAwRkYpXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3ZlUG9zaXRpb25zKHBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB0YXJnZXQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlc1RvTW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uLmFycmF5W2luZGljZXNUb01vdmVbaV0gKiAzICsgMV0gPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdWJlR2VvbWV0cnkoY29sKSB7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgXSkpXHJcbiAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KFtcclxuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsXHJcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMyxcclxuICAgIF0pO1xyXG4gICAgY29uc3Qgbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgXSk7XHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgZ2VvbWV0cnkuc2V0SW5kZXgobmV3IEJ1ZmZlckF0dHJpYnV0ZShpbmRpY2VzLCAxKSk7XHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobm9ybWFscywgMykpO1xyXG4gICAgY29uc3QgY29sb3JzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYilcclxuICAgIH1cclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSwgMykpXHJcbiAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0Q29sdW1uKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENoYXJ0Q29sdW1uIGV4dGVuZHMgTWVzaCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcihjcmVhdGVDdWJlR2VvbWV0cnkobmV3IENvbG9yKCkpLCBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2hhcnRDb2x1bW5cIjtcclxuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==