"use strict";
self["webpackHotUpdate_reneos_slider_mods_charts"]("__federation_expose_charts",{

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
                        const updatedItem = { ...oldItem };

                        // Проверяем изменение значения
                        if (oldItem.value !== newItem.value) {
                            this.playValue(oldItem, newItem.value);
                            updatedItem.value = newItem.value;
                        }

                        // Проверяем изменение цвета
                        if (oldItem.color !== newItem.color) {
                            this.playColor(oldItem, newItem.color);
                            updatedItem.color = newItem.color;
                        }

                        result.push(updatedItem);
                    }
                    // Если в старом массиве нет элемента - создаем новый
                    else {
                        const newElement = { value: 0, color: '#ffffff' };
                        this.playValue(newElement, newItem.value);
                        this.playColor(newElement, newItem.color);
                        newElement.value = newItem.value;
                        newElement.color = newItem.color;
                        result.push(newElement);
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

        playValue(element, newValue) {
            console.log(`Изменяем значение: ${element.value} -> ${newValue}`);
            // Ваша логика анимации значения
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
                colors.push(col.r, col.g, col.b)
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuMjhjMDM1ODVhNDBjZDk4ZjZlNDUuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixlQUFlO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2Q0FBNkM7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0EsOENBQThDLGVBQWUsS0FBSyxTQUFTO0FBQzNFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMENBQTBDLGVBQWUsS0FBSyxTQUFTO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1Q0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5REFBeUQsd0NBQUs7QUFDOUQ7QUFDQSw2QkFBNkIsdUNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrREFBZTtBQUNqRSxrQ0FBa0Msa0RBQWU7QUFDakQsZ0RBQWdELGtEQUFlO0FBQy9EO0FBQ0EsNEJBQTRCLHdDQUF3QztBQUNwRTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFlBQVksc0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvbW9kZWxzL2NvbHVtbmNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIENvbG9yLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gICAgTWVzaFBoeXNpY2FsTWF0ZXJpYWwsXHJcbiAgICBPYmplY3QzRFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IEdzYXBGbG9hdCBmcm9tIFwiZ3NhcG1vZC9Hc2FwRmxvYXRcIjtcclxuXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc29sZS5sb2coR3NhcEZsb2F0KVxyXG5cclxuY29uc3QgaW5kaWNlc1RvTW92ZSA9IFtcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxOCxcclxuICAgIDE5LFxyXG4gICAgMjEsXHJcbiAgICAyMlxyXG5dO1xyXG5cclxuY29uc3QgcmFpbmJvd0NvbG9ycyA9IFtcclxuICAgIG5ldyBDb2xvcigweEZGMDAwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRjdGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkZGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMDAwRkYpLFxyXG4gICAgbmV3IENvbG9yKDB4NEIwMDgyKSxcclxuICAgIG5ldyBDb2xvcigweDhCMDBGRilcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vdmVQb3NpdGlvbnMocG9zaXRpb24sIGluZGljZXNUb01vdmUsIHRhcmdldCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzVG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb24uYXJyYXlbaW5kaWNlc1RvTW92ZVtpXSAqIDMgKyAxXSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ2hhcnQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ29sdW1uQ2hhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbHVtbkNoYXJ0XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDoge30sXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHRoaXMuZGF0YS5tYXggfHwgMjUvL01hdGgubWF4KC4uLnRoaXMuZGF0YS52YWx1ZXMubWFwKGl0ZW0gPT4gaXRlbS52YWx1ZSkpO1xyXG4gICAgICAgICAgICB0aGlzLnR3ZWVuZ3JvdXAgPSB7fS8vIG5ldyBUd2Vlbkdyb3VwKClcclxuICAgICAgICAgICAgdGhpcy5mYWNlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjksXHJcbiAgICAgICAgICAgICAgICByZWZsZWN0aXZpdHk6IDAuOVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy52ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgdGhpcy5jdWJlU2l6ZSA9IDJcclxuICAgICAgICAgICAgdGhpcy50YXJnZXRTaXplID0gNVxyXG4gICAgICAgICAgICB0aGlzLnZpZXcgPSBmYWxzZVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zvcm0/LnBvc2l0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uLmNvcHkodGVtcGxhdGVzW2RhdGEudHJhbnNmb3JtLnBvc2l0aW9uXSB8fCBkYXRhLnRyYW5zZm9ybS5wb3NpdGlvbilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBpZiAoZGF0YS50cmFuc2Zvcm0/LnNjYWxlKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNjYWxlLmNvcHkodGVtcGxhdGVzW2RhdGEudHJhbnNmb3JtLnNjYWxlXSB8fCBkYXRhLnRyYW5zZm9ybS5zY2FsZSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IG1heCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21heFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG1heCh2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX21heCA9IHZcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmZvckVhY2goYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGMuY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCAoYy52YWx1ZSAvIHRoaXMuX21heCkgKiAxMClcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCB2YWx1ZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92YWx1ZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZXModmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IG1heExlbmd0aCA9IE1hdGgubWF4KHRoaXMuX3ZhbHVlcy5sZW5ndGgsIHZhbC5sZW5ndGgpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRJdGVtID0gdGhpcy5fdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHZhbFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQsiDQvdC+0LLQvtC8INC80LDRgdGB0LjQstC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCINC90LAg0Y3RgtC+0Lkg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgICAgIGlmIChuZXdJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0YHRgtCw0YDQvtC8INC80LDRgdGB0LjQstC1INGC0L7QttC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7IC4uLm9sZEl0ZW0gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC30LzQtdC90LXQvdC40LUg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkSXRlbS52YWx1ZSAhPT0gbmV3SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5VmFsdWUob2xkSXRlbSwgbmV3SXRlbS52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSXRlbS52YWx1ZSA9IG5ld0l0ZW0udmFsdWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC30LzQtdC90LXQvdC40LUg0YbQstC10YLQsFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkSXRlbS5jb2xvciAhPT0gbmV3SXRlbS5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q29sb3Iob2xkSXRlbSwgbmV3SXRlbS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1cGRhdGVkSXRlbS5jb2xvciA9IG5ld0l0ZW0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKHVwZGF0ZWRJdGVtKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0YHRgtCw0YDQvtC8INC80LDRgdGB0LjQstC1INC90LXRgiDRjdC70LXQvNC10L3RgtCwIC0g0YHQvtC30LTQsNC10Lwg0L3QvtCy0YvQuVxyXG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBuZXdFbGVtZW50ID0geyB2YWx1ZTogMCwgY29sb3I6ICcjZmZmZmZmJyB9O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXlWYWx1ZShuZXdFbGVtZW50LCBuZXdJdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5Q29sb3IobmV3RWxlbWVudCwgbmV3SXRlbS5jb2xvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnQudmFsdWUgPSBuZXdJdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LmNvbG9yID0gbmV3SXRlbS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2gobmV3RWxlbWVudCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0L3QvtCy0L7QvCDQvNCw0YHRgdC40LLQtSDQvdC10YIg0Y3Qu9C10LzQtdC90YLQsCwg0L3QviDQsiDRgdGC0LDRgNC+0Lwg0LHRi9C7IC0g0YPQtNCw0LvRj9C10LxcclxuICAgICAgICAgICAgICAgIGVsc2UgaWYgKG9sZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNvbHVtbihvbGRJdGVtKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKnRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICB2LmNvbG9yID0gbmV3IENvbG9yKHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiB2LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheShjdWJlLCB2LnZhbHVlLCAnJywgaSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL01vdmVQb3NpdGlvbnMoY29sdW1uLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgKHYudmFsdWUgLyB0aGlzLm1heCkgKiAxMClcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5VmFsdWUoZWxlbWVudCwgbmV3VmFsdWUpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCY0LfQvNC10L3Rj9C10Lwg0LfQvdCw0YfQtdC90LjQtTogJHtlbGVtZW50LnZhbHVlfSAtPiAke25ld1ZhbHVlfWApO1xyXG4gICAgICAgICAgICAvLyDQktCw0YjQsCDQu9C+0LPQuNC60LAg0LDQvdC40LzQsNGG0LjQuCDQt9C90LDRh9C10L3QuNGPXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5Q29sb3IoZWxlbWVudCwgbmV3Q29sb3IpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCY0LfQvNC10L3Rj9C10Lwg0YbQstC10YI6ICR7ZWxlbWVudC5jb2xvcn0gLT4gJHtuZXdDb2xvcn1gKTtcclxuICAgICAgICAgICAgLy8g0JLQsNGI0LAg0LvQvtCz0LjQutCwINCw0L3QuNC80LDRhtC40Lgg0YbQstC10YLQsFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVtb3ZlQ29sdW1uKGVsZW1lbnQpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coYNCj0LTQsNC70Y/QtdC8INGN0LvQtdC80LXQvdGCOmAsIGVsZW1lbnQpO1xyXG4gICAgICAgICAgICAvLyDQktCw0YjQsCDQu9C+0LPQuNC60LAg0YPQtNCw0LvQtdC90LjRj1xyXG4gICAgICAgIH1cclxuXHJcblxyXG4gICAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgLTEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhbigpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmxlbmd0aCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjID0gMFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkLmNvbG9yID0gcmFpbmJvd0NvbG9yc1tjKytdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA+IHJhaW5ib3dDb2xvcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICBjID0gMFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeShkLmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IGQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpXS5jdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jb25zdCB0b3RhbFdpZHRoID0gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueCA9IE1hdGgubWluKDEsIHRoaXMudGFyZ2V0U2l6ZSAvIHRvdGFsV2lkdGgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueiA9IHRoaXMuY3ViZVNpemUgLyB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gLSgodGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggLyAyKSAqIHRoaXMuY3ViZVNpemUpICogdGhpcy5zY2FsZS54O1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFZhbHVlKHYpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCcpXHJcblxyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMucHVzaCh2KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeShuZXcgQ29sb3IoJ3doaXRlJykpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIGN1YmVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gdGhpcy5fdmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUNvbG9yKGVsLCBjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEudmFsdWVzLmluZGV4T2YoZWwpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwuY29sb3IgPSBjb2xcclxuICAgICAgICAgICAgY29uc3QgY29sQXR0ciA9IGNvbHVtbi5jdWJlLmdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnY29sb3InKVxyXG4gICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IGNvbEF0dHIuY291bnQ7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgY29sQXR0ci5zZXRYWVoodiwgZWwuY29sb3IuciwgZWwuY29sb3IuZywgZWwuY29sb3IuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xBdHRyLm5lZWRzVXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlVmFsdWUoaW5kZXgsIHZhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBlbCA9IHRoaXMuX3ZhbHVlc1tpbmRleF1cclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2luZGV4XVxyXG4gICAgICAgICAgICBlbC52YWx1ZSA9IHZhbFxyXG4gICAgICAgICAgICBjb25zdCB2ID0gKGVsLnZhbHVlIC8gdGhpcy5tYXgpICogMTBcclxuICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjb2x1bW4uY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB2KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQ3ViZUdlb21ldHJ5KGNvbCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcylcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChuZXcgQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDEpKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5vcm1hbHMsIDMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAzKSlcclxuICAgICAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIC8qdGhpcy51cGRhdGUgPSAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudHdlZW5ncm91cC51cGRhdGUodCk7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sdW1uc1tpXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KGMuY3ViZSwgYy52YWx1ZSwgYy5sYWJlbCwgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVsb2FkKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7IH1cclxuICAgICAgICAgICAgY29uc3QgdHdlZW5zID0gW10vL3RoaXMudHdlZW5ncm91cC5nZXRBbGwoKVxyXG4gICAgICAgICAgICB0d2VlbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHQuc3RvcCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcyA9IGRhdGEudmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXkobWVzaCwgdmFsLCBsYWJlbCwgZGVsYXkgPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVkID0geyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIGdzYXAudG8oYW5pbWF0ZWQsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAodmFsIC8gdGhpcy5tYXgpICogMTAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5ICogMC4wNSxcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMobWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCBhbmltYXRlZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL21vZGVsW3Byb3BdID0gY3VycmVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZXBlYXQ6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9