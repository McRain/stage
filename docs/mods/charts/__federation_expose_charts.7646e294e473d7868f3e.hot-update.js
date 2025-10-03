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
                            playValue(oldItem, newItem.value);
                            updatedItem.value = newItem.value;
                        }

                        // Проверяем изменение цвета
                        if (oldItem.color !== newItem.color) {
                            playColor(oldItem, newItem.color);
                            updatedItem.color = newItem.color;
                        }

                        result.push(updatedItem);
                    }
                    // Если в старом массиве нет элемента - создаем новый
                    else {
                        const newElement = { value: 0, color: '#ffffff' };
                        playValue(newElement, newItem.value);
                        playColor(newElement, newItem.color);
                        newElement.value = newItem.value;
                        newElement.color = newItem.color;
                        result.push(newElement);
                    }
                }
                // Если в новом массиве нет элемента, но в старом был - удаляем
                else if (oldItem) {
                    removeColumn(oldItem);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuNzY0NmUyOTRlNDczZDc4NjhmM2UuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQSxnQ0FBZ0Msb0RBQWlCO0FBQ2pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGVBQWU7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZDQUE2QztBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEMsZUFBZSxLQUFLLFNBQVM7QUFDM0U7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQ0FBMEMsZUFBZSxLQUFLLFNBQVM7QUFDdkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCx3Q0FBSztBQUM5RDtBQUNBLDZCQUE2Qix1Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpREFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtEQUFlO0FBQ2pFLGtDQUFrQyxrREFBZTtBQUNqRCxnREFBZ0Qsa0RBQWU7QUFDL0Q7QUFDQSw0QkFBNEIsd0NBQXdDO0FBQ3BFO0FBQ0E7QUFDQSwrQ0FBK0Msa0RBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsWUFBWSxzQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9tb2RlbHMvY29sdW1uY2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQ29sb3IsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgICBNZXNoUGh5c2ljYWxNYXRlcmlhbCxcclxuICAgIE9iamVjdDNEXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgR3NhcEZsb2F0IGZyb20gXCJnc2FwbW9kL0dzYXBGbG9hdFwiO1xyXG5cclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5jb25zb2xlLmxvZyhHc2FwRmxvYXQpXHJcblxyXG5jb25zdCBpbmRpY2VzVG9Nb3ZlID0gW1xyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMSxcclxuICAgIDE4LFxyXG4gICAgMTksXHJcbiAgICAyMSxcclxuICAgIDIyXHJcbl07XHJcblxyXG5jb25zdCByYWluYm93Q29sb3JzID0gW1xyXG4gICAgbmV3IENvbG9yKDB4RkYwMDAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGN0YwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRkZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDBGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwMDBGRiksXHJcbiAgICBuZXcgQ29sb3IoMHg0QjAwODIpLFxyXG4gICAgbmV3IENvbG9yKDB4OEIwMEZGKVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTW92ZVBvc2l0aW9ucyhwb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgdGFyZ2V0KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXNUb01vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwb3NpdGlvbi5hcnJheVtpbmRpY2VzVG9Nb3ZlW2ldICogMyArIDFdID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW5DaGFydCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDb2x1bW5DaGFydCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ29sdW1uQ2hhcnRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiB7fSxcclxuICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gW11cclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdGhpcy5kYXRhLm1heCB8fCAyNS8vTWF0aC5tYXgoLi4udGhpcy5kYXRhLnZhbHVlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5ncm91cCA9IHt9Ly8gbmV3IFR3ZWVuR3JvdXAoKVxyXG4gICAgICAgICAgICB0aGlzLmZhY2VzID0gW11cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gW11cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC45XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1YmVTaXplID0gMlxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFNpemUgPSA1XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0ucG9zaXRpb25dIHx8IGRhdGEudHJhbnNmb3JtLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUuY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0uc2NhbGVdIHx8IGRhdGEudHJhbnNmb3JtLnNjYWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgbWF4KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgbWF4KHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIChjLnZhbHVlIC8gdGhpcy5fbWF4KSAqIDEwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlcyh2YWwpIHtcclxuICAgICAgICAgICAgY29uc3QgbWF4TGVuZ3RoID0gTWF0aC5tYXgodGhpcy5fdmFsdWVzLmxlbmd0aCwgdmFsLmxlbmd0aCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1heExlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvbGRJdGVtID0gdGhpcy5fdmFsdWVzW2ldO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgbmV3SXRlbSA9IHZhbFtpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQsiDQvdC+0LLQvtC8INC80LDRgdGB0LjQstC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCINC90LAg0Y3RgtC+0Lkg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgICAgIGlmIChuZXdJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0LIg0YHRgtCw0YDQvtC8INC80LDRgdGB0LjQstC1INGC0L7QttC1INC10YHRgtGMINGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEl0ZW0pIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXBkYXRlZEl0ZW0gPSB7IC4uLm9sZEl0ZW0gfTtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDQuNC30LzQtdC90LXQvdC40LUg0LfQvdCw0YfQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAob2xkSXRlbS52YWx1ZSAhPT0gbmV3SXRlbS52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcGxheVZhbHVlKG9sZEl0ZW0sIG5ld0l0ZW0udmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXBkYXRlZEl0ZW0udmFsdWUgPSBuZXdJdGVtLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0LjQt9C80LXQvdC10L3QuNC1INGG0LLQtdGC0LBcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG9sZEl0ZW0uY29sb3IgIT09IG5ld0l0ZW0uY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlDb2xvcihvbGRJdGVtLCBuZXdJdGVtLmNvbG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwZGF0ZWRJdGVtLmNvbG9yID0gbmV3SXRlbS5jb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0LnB1c2godXBkYXRlZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDQsiDRgdGC0LDRgNC+0Lwg0LzQsNGB0YHQuNCy0LUg0L3QtdGCINGN0LvQtdC80LXQvdGC0LAgLSDRgdC+0LfQtNCw0LXQvCDQvdC+0LLRi9C5XHJcbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IG5ld0VsZW1lbnQgPSB7IHZhbHVlOiAwLCBjb2xvcjogJyNmZmZmZmYnIH07XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHBsYXlWYWx1ZShuZXdFbGVtZW50LCBuZXdJdGVtLnZhbHVlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgcGxheUNvbG9yKG5ld0VsZW1lbnQsIG5ld0l0ZW0uY29sb3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50LnZhbHVlID0gbmV3SXRlbS52YWx1ZTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudC5jb2xvciA9IG5ld0l0ZW0uY29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5ld0VsZW1lbnQpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INCyINC90L7QstC+0Lwg0LzQsNGB0YHQuNCy0LUg0L3QtdGCINGN0LvQtdC80LXQvdGC0LAsINC90L4g0LIg0YHRgtCw0YDQvtC8INCx0YvQuyAtINGD0LTQsNC70Y/QtdC8XHJcbiAgICAgICAgICAgICAgICBlbHNlIGlmIChvbGRJdGVtKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVtb3ZlQ29sdW1uKG9sZEl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qdGhpcy5jbGVhbigpXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuZGF0YS52YWx1ZXNbaV1cclxuICAgICAgICAgICAgICAgIHYuY29sb3IgPSBuZXcgQ29sb3Iodi5jb2xvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkodi5jb2xvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IHYudmFsdWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbHVtbilcclxuICAgICAgICAgICAgICAgIGN1YmUucG9zaXRpb24ueCA9IGkgKiB0aGlzLmN1YmVTaXplXHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KGN1YmUsIHYudmFsdWUsICcnLCBpKVxyXG5cclxuICAgICAgICAgICAgICAgIC8vTW92ZVBvc2l0aW9ucyhjb2x1bW4uY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCAodi52YWx1ZSAvIHRoaXMubWF4KSAqIDEwKVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXlWYWx1ZShlbGVtZW50LCBuZXdWYWx1ZSkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg0JjQt9C80LXQvdGP0LXQvCDQt9C90LDRh9C10L3QuNC1OiAke2VsZW1lbnQudmFsdWV9IC0+ICR7bmV3VmFsdWV9YCk7XHJcbiAgICAgICAgICAgIC8vINCS0LDRiNCwINC70L7Qs9C40LrQsCDQsNC90LjQvNCw0YbQuNC4INC30L3QsNGH0LXQvdC40Y9cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXlDb2xvcihlbGVtZW50LCBuZXdDb2xvcikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg0JjQt9C80LXQvdGP0LXQvCDRhtCy0LXRgjogJHtlbGVtZW50LmNvbG9yfSAtPiAke25ld0NvbG9yfWApO1xyXG4gICAgICAgICAgICAvLyDQktCw0YjQsCDQu9C+0LPQuNC60LAg0LDQvdC40LzQsNGG0LjQuCDRhtCy0LXRgtCwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZW1vdmVDb2x1bW4oZWxlbWVudCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhg0KPQtNCw0LvRj9C10Lwg0Y3Qu9C10LzQtdC90YI6YCwgZWxlbWVudCk7XHJcbiAgICAgICAgICAgIC8vINCS0LDRiNCwINC70L7Qs9C40LrQsCDRg9C00LDQu9C10L3QuNGPXHJcbiAgICAgICAgfVxyXG5cclxuXHJcbiAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGMuY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCAtMSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFuKCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubGVuZ3RoID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGMgPSAwXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS52YWx1ZXNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghZC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGQuY29sb3IgPSByYWluYm93Q29sb3JzW2MrK11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjID4gcmFpbmJvd0NvbG9ycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KGQuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2ldLmN1YmUucG9zaXRpb24ueCA9IGkgKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS54ID0gTWF0aC5taW4oMSwgdGhpcy50YXJnZXRTaXplIC8gdG90YWxXaWR0aCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS56ID0gdGhpcy5jdWJlU2l6ZSAvIHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAtKCh0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAvIDIpICogdGhpcy5jdWJlU2l6ZSkgKiB0aGlzLnNjYWxlLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9mZnNldFg7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVmFsdWUodikge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZygnYWRkJylcclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHYpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KG5ldyBDb2xvcignd2hpdGUnKSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY3ViZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSB0aGlzLl92YWx1ZXMubGVuZ3RoICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlQ29sb3IoZWwsIGNvbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS52YWx1ZXMuaW5kZXhPZihlbClcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2luZGV4XVxyXG4gICAgICAgICAgICBlbC5jb2xvciA9IGNvbFxyXG4gICAgICAgICAgICBjb25zdCBjb2xBdHRyID0gY29sdW1uLmN1YmUuZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdjb2xvcicpXHJcbiAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgY29sQXR0ci5jb3VudDsgdisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xBdHRyLnNldFhZWih2LCBlbC5jb2xvci5yLCBlbC5jb2xvci5nLCBlbC5jb2xvci5iKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbEF0dHIubmVlZHNVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VWYWx1ZShpbmRleCwgdmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGVsID0gdGhpcy5fdmFsdWVzW2luZGV4XVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaW5kZXhdXHJcbiAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsXHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSAoZWwudmFsdWUgLyB0aGlzLm1heCkgKiAxMFxyXG4gICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGNvbHVtbi5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIHYpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVDdWJlR2VvbWV0cnkoY29sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsIDQsIDUsIDYsIDQsIDYsIDcsXHJcbiAgICAgICAgICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LFxyXG4gICAgICAgICAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMyxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlcnRpY2VzLCAzKSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEluZGV4KG5ldyBCdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSkpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobm9ybWFscywgMykpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIDMpKVxyXG4gICAgICAgICAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgLyp0aGlzLnVwZGF0ZSA9ICh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy50d2Vlbmdyb3VwLnVwZGF0ZSh0KTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2x1bW5zW2ldXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoYy5jdWJlLCBjLnZhbHVlLCBjLmxhYmVsLCBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWxvYWQoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHsgfVxyXG4gICAgICAgICAgICBjb25zdCB0d2VlbnMgPSBbXS8vdGhpcy50d2Vlbmdyb3VwLmdldEFsbCgpXHJcbiAgICAgICAgICAgIHR3ZWVucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdC5zdG9wKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzID0gZGF0YS52YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheShtZXNoLCB2YWwsIGxhYmVsLCBkZWxheSA9IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZWQgPSB7IHZhbHVlOiAwIH1cclxuICAgICAgICAgICAgZ3NhcC50byhhbmltYXRlZCwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICh2YWwgLyB0aGlzLm1heCkgKiAxMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogZGVsYXkgKiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgb25TdGFydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIGFuaW1hdGVkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW9kZWxbcHJvcF0gPSBjdXJyZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJlcGVhdDogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=