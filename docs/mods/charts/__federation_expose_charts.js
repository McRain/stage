"use strict";
(self["webpackChunk_reneos_slider_mods_charts"] = self["webpackChunk_reneos_slider_mods_charts"] || []).push([["__federation_expose_charts"],{

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
            label: "Chart column",
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
                    state: false,
                    onupdate(target, prop, val, slideUID) {
                        target.states[slideUID][prop] = JSON.parse(JSON.stringify(val))
                    }
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



/***/ }),

/***/ "./src/models/columnchart.js":
/*!***********************************!*\
  !*** ./src/models/columnchart.js ***!
  \***********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ ColumnChart)
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

function ColumnChart() {
    return class ColumnChart extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor(data) {
            super();
            this.type = "ColumnChart";

            this.data = {
                values: [
                ],
                material: {},
                ...data
            }

            this._values = []
            this._max = this.data.max || 25//Math.max(...this.data.values.map(item => item.value));
            this.tweengroup = {}// new TweenGroup()
            this.faces = []
            this.columns = []
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({
                vertexColors: true,
                transparent: true,
                opacity: 0.9,
                reflectivity: 0.9
            })

            this.vertices = new Float32Array([
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
            ]);
            this.cubeSize = 2
            this.targetSize = 5
            this.view = false
            if (data.transform?.position) {
                this.position.copy(templates[data.transform.position] || data.transform.position)
            }
            if (data.transform?.scale) {
                this.scale.copy(templates[data.transform.scale] || data.transform.scale)
            }
        }

        get max() {
            return this._max
        }

        set max(v) {
            this._max = v
            this.columns.forEach(c => {
                MovePositions(c.cube.geometry.attributes.position, indicesToMove, (c.value / this._max) * 10)
            })
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        get values() {
            return this._values
        }

        set values(val) {
            const maxLength = Math.max(this._values.length, val.length);
            for (let i = 0; i < maxLength; i++) {
                const oldItem = this._values[i];
                const newItem = val[i];

                // Если в новом массиве есть элемент на этой позиции
                if (newItem) {
                    // Если в старом массиве тоже есть элемент
                    if (oldItem) {
                        // Проверяем изменение значения
                        if (oldItem.value !== newItem.value) {
                            this.playValue(oldItem, newItem.value, this.columns[i].cube);
                            oldItem.value = newItem.value;
                        }
                        // Проверяем изменение цвета
                        if (oldItem.color !== newItem.color) {
                            this.playColor(oldItem, newItem.color);
                            oldItem.color = newItem.color;
                        }
                    }
                    // Если в старом массиве нет элемента - создаем новый
                    else {
                        //const newElement = { value: 0, color: '#ffffff' };
                        newItem.encode = () => {
                            return {
                                value: newItem.value,
                                color: newItem.color
                            }
                        };
                        this.createColumn(newItem)
                        //this.playValue(newElement, newItem.value);
                        //this.playColor(newElement, newItem.color);
                        //newElement.value = newItem.value;
                        //newElement.color = newItem.color;
                        //result.push(newElement);
                    }
                }
                // Если в новом массиве нет элемента, но в старом был - удаляем
                else if (oldItem) {
                    this.removeColumn(oldItem);
                }
            }
            /*this.clean()
            for (let i = 0; i < this.data.values.length; i++) {
                const v = this.data.values[i]
                v.color = new Color(v.color)
                const geometry = this.createCubeGeometry(v.color)
                const cube = new Mesh(geometry, this.material)
                this.add(cube)
                const column = {
                    cube, value: v.value
                }
                this.columns.push(column)
                cube.position.x = i * this.cubeSize

                this.play(cube, v.value, '', i)

                //MovePositions(column.cube.geometry.attributes.position, indicesToMove, (v.value / this.max) * 10)
            }*/
        }

        createColumn(v) {
            const fakeVal = {
                value: 0, color: '#ffffff'
            }
            this._values.push(v)
            const geometry = this.createCubeGeometry(v.color)
            const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.material)
            this.add(cube)
            const column = {
                cube, value: v.value
            }
            this.columns.push(column)
            cube.position.x = this._values.length * this.cubeSize
            this.playValue(fakeVal, v.value, cube)
        }

        playValue(element, newValue, mesh) {
            console.log(`Изменяем значение: ${element.value} -> ${newValue}`);
            // Ваша логика анимации значения
            const animated = { value: element.value }
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(animated, {
                value: newValue,
                duration: 1,
                delay: 0,
                onStart: () => {
                },
                onUpdate: () => {
                    MovePositions(mesh.geometry.attributes.position, indicesToMove, animated.value)
                },
                onComplete: () => {

                },
                onRepeat: () => {

                }
            });
        }

        playColor(element, newColor) {
            console.log(`Изменяем цвет: ${element.color} -> ${newColor}`);
            // Ваша логика анимации цвета
        }

        removeColumn(element) {
            console.log(`Удаляем элемент:`, element);
            // Ваша логика удаления
        }


        reset() {
            this.columns.map(c => {
                MovePositions(c.cube.geometry.attributes.position, indicesToMove, -1)
            })

        }
        clean() {
            while (this.children.length > 0) {
                this.remove(this.children[0]);
            }
            this.columns.length = 0
        }

        init() {
            this.clean()


            let c = 0
            for (let i = 0; i < this.data.values.length; i++) {
                const d = this.data.values[i]
                if (!d.color) {
                    d.color = rainbowColors[c++]
                }
                if (c > rainbowColors.length - 1)
                    c = 0
                const geometry = this.createCubeGeometry(d.color)
                const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, material)
                this.add(cube)
                this.columns.push({
                    cube, value: d.value
                })
                for (let i = 0; i < this.columns.length; i++) {
                    this.columns[i].cube.position.x = i * this.cubeSize
                }

            }

            //const totalWidth = this.data.values.length * this.cubeSize;
            //this.scale.x = Math.min(1, this.targetSize / totalWidth);
            //this.scale.z = this.cubeSize / this.data.values.length
            const offsetX = -((this.data.values.length / 2) * this.cubeSize) * this.scale.x;
            this.position.x = offsetX;
            this.start()
        }

        addValue(v) {
            console.log('add')

            this._values.push(v)

            const geometry = this.createCubeGeometry(new three__WEBPACK_IMPORTED_MODULE_0__.Color('white'))

            const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.material)
            this.add(cube)
            this.columns.push({
                cube
            })
            cube.position.x = this._values.length * this.cubeSize
        }

        changeColor(el, col) {
            const index = this.data.values.indexOf(el)
            const column = this.columns[index]
            el.color = col
            const colAttr = column.cube.geometry.getAttribute('color')
            for (let v = 0; v < colAttr.count; v++) {
                colAttr.setXYZ(v, el.color.r, el.color.g, el.color.b)
            }
            colAttr.needsUpdate = true
        }

        changeValue(index, val) {
            const el = this._values[index]
            const column = this.columns[index]
            el.value = val
            const v = (el.value / this.max) * 10
            MovePositions(column.cube.geometry.attributes.position, indicesToMove, v)
        }

        createCubeGeometry(col) {
            const color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(col)
            const geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            const vertices = new Float32Array(this.vertices)
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
                colors.push(color.r, color.g, color.b)
            }
            geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(colors), 3))
            return geometry;
        }

        start() {
            /*this.update = (t) => {
                requestAnimationFrame(this.update.bind(this))
                //this.tweengroup.update(t);
            }*/
            for (let i = 0; i < this.columns.length; i++) {
                const c = this.columns[i]
                this.play(c.cube, c.value, c.label, i)
            }
        }

        reload(data) {
            this.update = () => { }
            const tweens = []//this.tweengroup.getAll()
            tweens.forEach(t => {
                t.stop()
            })

            this.reset()
            this.data.values = data.values
            this.clean()
            this.init()
            this.start()
        }

        play(mesh, val, label, delay = 0) {
            const animated = { value: 0 }
            gsap__WEBPACK_IMPORTED_MODULE_2__.gsap.to(animated, {
                value: (val / this.max) * 10,
                duration: 0.5,
                delay: delay * 0.05,
                onStart: () => {
                },
                onUpdate: () => {
                    MovePositions(mesh.geometry.attributes.position, indicesToMove, animated.value)
                    //model[prop] = current.value
                },
                onComplete: () => {

                },
                onRepeat: () => {

                }
            });



        }
    }
}



/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF3QztBQUNwRTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFlBQVksc0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvaW5kZXgubWYuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvbW9kZWxzL2NoYXJ0Q29sdW1uLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMuY2hhcnRzLy4vc3JjL21vZGVscy9jb2x1bW5jaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBDb2x1bW5DaGFydCBmcm9tIFwiLi9tb2RlbHMvY29sdW1uY2hhcnQuanNcIlxyXG5pbXBvcnQgQ2hhcnRDb2x1bW4gZnJvbSBcIi4vbW9kZWxzL2NoYXJ0Q29sdW1uLmpzXCI7XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gSW5pdCgpIHtcclxuICAgIGlmIChBcHAuZW5naW5lLnJlYWR5KSB7XHJcblxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJDb2x1bW5DaGFydFwiLCBDb2x1bW5DaGFydCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDb2x1bW4gQ2hhcnRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkNoYXJ0Q29sdW1uXCIsIENoYXJ0Q29sdW1uLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNoYXJ0IGNvbHVtblwiLFxyXG4gICAgICAgICAgICBoaWRlZDogdHJ1ZVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgaWYgKCF3aW5kb3cuaXNFZGl0b3IpIHtcclxuICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB3aW5kb3cudnVlLmNvbXBvbmVudCgnY2hhcnRzVUknLCBkZWZpbmVBc3luY0NvbXBvbmVudChhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1vZHVsZSA9IGF3YWl0IGltcG9ydCgnLi9pbnNwZWN0b3IvY2hhcnRzVUkudnVlJyk7XHJcbiAgICAgICAgICAgIHJldHVybiBtb2R1bGUuZGVmYXVsdCB8fCBtb2R1bGU7XHJcbiAgICAgICAgfSkpXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ29sdW1uQ2hhcnRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTWF4XCIsXHJcbiAgICAgICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJtYXhcIixcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJWYWx1ZXNcIixcclxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiY2hhcnRzVUlcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInZhbHVlc1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQsIHByb3AsIHZhbCwgc2xpZGVVSUQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0YXRlc1tzbGlkZVVJRF1bcHJvcF0gPSBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHZhbCkpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSlcclxuICAgIH0gZWxzZSB7XHJcbiAgICAgICAgQXBwLmVuZ2luZS5vbmxvYWQoSW5pdClcclxuICAgIH1cclxufVxyXG5cclxuXHJcblxyXG5Jbml0KCkiLCJpbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBDb2xvcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcclxuICAgIE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgT2JqZWN0M0RcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCBHc2FwRmxvYXQgZnJvbSBcImdzYXBtb2QvR3NhcEZsb2F0XCI7XHJcblxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdzYXBGbG9hdClcclxuXHJcbmNvbnN0IGluZGljZXNUb01vdmUgPSBbXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMTgsXHJcbiAgICAxOSxcclxuICAgIDIxLFxyXG4gICAgMjJcclxuXTtcclxuXHJcbmNvbnN0IHJhaW5ib3dDb2xvcnMgPSBbXHJcbiAgICBuZXcgQ29sb3IoMHhGRjAwMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkY3RjAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMEZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDAwMEZGKSxcclxuICAgIG5ldyBDb2xvcigweDRCMDA4MiksXHJcbiAgICBuZXcgQ29sb3IoMHg4QjAwRkYpXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3ZlUG9zaXRpb25zKHBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB0YXJnZXQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlc1RvTW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uLmFycmF5W2luZGljZXNUb01vdmVbaV0gKiAzICsgMV0gPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBjcmVhdGVDdWJlR2VvbWV0cnkoY29sKSB7XHJcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgXSkpXHJcbiAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KFtcclxuICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsXHJcbiAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMyxcclxuICAgIF0pO1xyXG4gICAgY29uc3Qgbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgXSk7XHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgZ2VvbWV0cnkuc2V0SW5kZXgobmV3IEJ1ZmZlckF0dHJpYnV0ZShpbmRpY2VzLCAxKSk7XHJcbiAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobm9ybWFscywgMykpO1xyXG4gICAgY29uc3QgY29sb3JzID0gW11cclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYilcclxuICAgIH1cclxuICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSwgMykpXHJcbiAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENoYXJ0Q29sdW1uKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENoYXJ0Q29sdW1uIGV4dGVuZHMgTWVzaCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcihjcmVhdGVDdWJlR2VvbWV0cnkobmV3IENvbG9yKCkpLCBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KSk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2hhcnRDb2x1bW5cIjtcclxuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcblxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICB9XHJcbn1cclxuXHJcbiIsImltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIENvbG9yLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gICAgTWVzaFBoeXNpY2FsTWF0ZXJpYWwsXHJcbiAgICBPYmplY3QzRFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IEdzYXBGbG9hdCBmcm9tIFwiZ3NhcG1vZC9Hc2FwRmxvYXRcIjtcclxuXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc29sZS5sb2coR3NhcEZsb2F0KVxyXG5cclxuY29uc3QgaW5kaWNlc1RvTW92ZSA9IFtcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxOCxcclxuICAgIDE5LFxyXG4gICAgMjEsXHJcbiAgICAyMlxyXG5dO1xyXG5cclxuY29uc3QgcmFpbmJvd0NvbG9ycyA9IFtcclxuICAgIG5ldyBDb2xvcigweEZGMDAwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRjdGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkZGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMDAwRkYpLFxyXG4gICAgbmV3IENvbG9yKDB4NEIwMDgyKSxcclxuICAgIG5ldyBDb2xvcigweDhCMDBGRilcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vdmVQb3NpdGlvbnMocG9zaXRpb24sIGluZGljZXNUb01vdmUsIHRhcmdldCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzVG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb24uYXJyYXlbaW5kaWNlc1RvTW92ZVtpXSAqIDMgKyAxXSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ2hhcnQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ29sdW1uQ2hhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbHVtbkNoYXJ0XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDoge30sXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHRoaXMuZGF0YS5tYXggfHwgMjUvL01hdGgubWF4KC4uLnRoaXMuZGF0YS52YWx1ZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuZ3JvdXAgPSB7fS8vIG5ldyBUd2Vlbkdyb3VwKClcclxuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgdGhpcy5jdWJlU2l6ZSA9IDJcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRTaXplID0gNVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zvcm0/LnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkodGVtcGxhdGVzW2RhdGEudHJhbnNmb3JtLnBvc2l0aW9uXSB8fCBkYXRhLnRyYW5zZm9ybS5wb3NpdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zvcm0/LnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLmNvcHkodGVtcGxhdGVzW2RhdGEudHJhbnNmb3JtLnNjYWxlXSB8fCBkYXRhLnRyYW5zZm9ybS5zY2FsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IG1heCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21heFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG1heCh2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHZcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGMuY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCAoYy52YWx1ZSAvIHRoaXMuX21heCkgKiAxMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZXModmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IE1hdGgubWF4KHRoaXMuX3ZhbHVlcy5sZW5ndGgsIHZhbC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRJdGVtID0gdGhpcy5fdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHZhbFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQsiDQvdC+0LLQvtC8INC80LDRgdGB0LjQstC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCINC90LAg0Y3RgtC+0Lkg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgICAgIGlmIChuZXdJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0YHRgtCw0YDQvtC8INC80LDRgdGB0LjQstC1INGC0L7QttC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INC40LfQvNC10L3QtdC90LjQtSDQt9C90LDRh9C10L3QuNGPXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChvbGRJdGVtLnZhbHVlICE9PSBuZXdJdGVtLnZhbHVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlWYWx1ZShvbGRJdGVtLCBuZXdJdGVtLnZhbHVlLCB0aGlzLmNvbHVtbnNbaV0uY3ViZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbGRJdGVtLnZhbHVlID0gbmV3SXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0LjQt9C80LXQvdC10L3QuNC1INGG0LLQtdGC0LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEl0ZW0uY29sb3IgIT09IG5ld0l0ZW0uY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMucGxheUNvbG9yKG9sZEl0ZW0sIG5ld0l0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2xkSXRlbS5jb2xvciA9IG5ld0l0ZW0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0YHRgtCw0YDQvtC8INC80LDRgdGB0LjQstC1INC90LXRgiDRjdC70LXQvNC10L3RgtCwIC0g0YHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnN0IG5ld0VsZW1lbnQgPSB7IHZhbHVlOiAwLCBjb2xvcjogJyNmZmZmZmYnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0l0ZW0uZW5jb2RlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3SXRlbS52YWx1ZSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb2xvcjogbmV3SXRlbS5jb2xvclxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmNyZWF0ZUNvbHVtbihuZXdJdGVtKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGxheVZhbHVlKG5ld0VsZW1lbnQsIG5ld0l0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3RoaXMucGxheUNvbG9yKG5ld0VsZW1lbnQsIG5ld0l0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25ld0VsZW1lbnQudmFsdWUgPSBuZXdJdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL25ld0VsZW1lbnQuY29sb3IgPSBuZXdJdGVtLmNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL3Jlc3VsdC5wdXNoKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INCyINC90L7QstC+0Lwg0LzQsNGB0YHQuNCy0LUg0L3QtdGCINGN0LvQtdC80LXQvdGC0LAsINC90L4g0LIg0YHRgtCw0YDQvtC8INCx0YvQuyAtINGD0LTQsNC70Y/QtdC8XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDb2x1bW4ob2xkSXRlbSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLyp0aGlzLmNsZWFuKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5kYXRhLnZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgdi5jb2xvciA9IG5ldyBDb2xvcih2LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeSh2LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gaSAqIHRoaXMuY3ViZVNpemVcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoY3ViZSwgdi52YWx1ZSwgJycsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9Nb3ZlUG9zaXRpb25zKGNvbHVtbi5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsICh2LnZhbHVlIC8gdGhpcy5tYXgpICogMTApXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQ29sdW1uKHYpIHtcclxuICAgICAgICAgICAgY29uc3QgZmFrZVZhbCA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLCBjb2xvcjogJyNmZmZmZmYnXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godilcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeSh2LmNvbG9yKVxyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiB2LnZhbHVlXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSB0aGlzLl92YWx1ZXMubGVuZ3RoICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgICAgICB0aGlzLnBsYXlWYWx1ZShmYWtlVmFsLCB2LnZhbHVlLCBjdWJlKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheVZhbHVlKGVsZW1lbnQsIG5ld1ZhbHVlLCBtZXNoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQmNC30LzQtdC90Y/QtdC8INC30L3QsNGH0LXQvdC40LU6ICR7ZWxlbWVudC52YWx1ZX0gLT4gJHtuZXdWYWx1ZX1gKTtcclxuICAgICAgICAgICAgLy8g0JLQsNGI0LAg0LvQvtCz0LjQutCwINCw0L3QuNC80LDRhtC40Lgg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlZCA9IHsgdmFsdWU6IGVsZW1lbnQudmFsdWUgfVxyXG4gICAgICAgICAgICBnc2FwLnRvKGFuaW1hdGVkLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogbmV3VmFsdWUsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiAwLFxyXG4gICAgICAgICAgICAgICAgb25TdGFydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIGFuaW1hdGVkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZXBlYXQ6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheUNvbG9yKGVsZW1lbnQsIG5ld0NvbG9yKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQmNC30LzQtdC90Y/QtdC8INGG0LLQtdGCOiAke2VsZW1lbnQuY29sb3J9IC0+ICR7bmV3Q29sb3J9YCk7XHJcbiAgICAgICAgICAgIC8vINCS0LDRiNCwINC70L7Qs9C40LrQsCDQsNC90LjQvNCw0YbQuNC4INGG0LLQtdGC0LBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbW92ZUNvbHVtbihlbGVtZW50KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGDQo9C00LDQu9GP0LXQvCDRjdC70LXQvNC10L3RgjpgLCBlbGVtZW50KTtcclxuICAgICAgICAgICAgLy8g0JLQsNGI0LAg0LvQvtCz0LjQutCwINGD0LTQsNC70LXQvdC40Y9cclxuICAgICAgICB9XHJcblxyXG5cclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIC0xKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYW4oKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5sZW5ndGggPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKClcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYyA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kYXRhLnZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKCFkLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5jb2xvciA9IHJhaW5ib3dDb2xvcnNbYysrXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGMgPiByYWluYm93Q29sb3JzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IDBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkoZC5jb2xvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiBkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNbaV0uY3ViZS5wb3NpdGlvbi54ID0gaSAqIHRoaXMuY3ViZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY29uc3QgdG90YWxXaWR0aCA9IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoICogdGhpcy5jdWJlU2l6ZTtcclxuICAgICAgICAgICAgLy90aGlzLnNjYWxlLnggPSBNYXRoLm1pbigxLCB0aGlzLnRhcmdldFNpemUgLyB0b3RhbFdpZHRoKTtcclxuICAgICAgICAgICAgLy90aGlzLnNjYWxlLnogPSB0aGlzLmN1YmVTaXplIC8gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IC0oKHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoIC8gMikgKiB0aGlzLmN1YmVTaXplKSAqIHRoaXMuc2NhbGUueDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRWYWx1ZSh2KSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdhZGQnKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzLnB1c2godilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkobmV3IENvbG9yKCd3aGl0ZScpKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjdWJlXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueCA9IHRoaXMuX3ZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VDb2xvcihlbCwgY29sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlcy5pbmRleE9mKGVsKVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaW5kZXhdXHJcbiAgICAgICAgICAgIGVsLmNvbG9yID0gY29sXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbEF0dHIgPSBjb2x1bW4uY3ViZS5nZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ2NvbG9yJylcclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCBjb2xBdHRyLmNvdW50OyB2KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbEF0dHIuc2V0WFlaKHYsIGVsLmNvbG9yLnIsIGVsLmNvbG9yLmcsIGVsLmNvbG9yLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sQXR0ci5uZWVkc1VwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZVZhbHVlKGluZGV4LCB2YWwpIHtcclxuICAgICAgICAgICAgY29uc3QgZWwgPSB0aGlzLl92YWx1ZXNbaW5kZXhdXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwudmFsdWUgPSB2YWxcclxuICAgICAgICAgICAgY29uc3QgdiA9IChlbC52YWx1ZSAvIHRoaXMubWF4KSAqIDEwXHJcbiAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoY29sdW1uLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgdilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUN1YmVHZW9tZXRyeShjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoY29sKVxyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcylcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChuZXcgQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDEpKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5vcm1hbHMsIDMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAzKSlcclxuICAgICAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIC8qdGhpcy51cGRhdGUgPSAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudHdlZW5ncm91cC51cGRhdGUodCk7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sdW1uc1tpXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KGMuY3ViZSwgYy52YWx1ZSwgYy5sYWJlbCwgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVsb2FkKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7IH1cclxuICAgICAgICAgICAgY29uc3QgdHdlZW5zID0gW10vL3RoaXMudHdlZW5ncm91cC5nZXRBbGwoKVxyXG4gICAgICAgICAgICB0d2VlbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHQuc3RvcCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcyA9IGRhdGEudmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXkobWVzaCwgdmFsLCBsYWJlbCwgZGVsYXkgPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVkID0geyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIGdzYXAudG8oYW5pbWF0ZWQsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAodmFsIC8gdGhpcy5tYXgpICogMTAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5ICogMC4wNSxcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMobWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCBhbmltYXRlZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL21vZGVsW3Byb3BdID0gY3VycmVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZXBlYXQ6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9