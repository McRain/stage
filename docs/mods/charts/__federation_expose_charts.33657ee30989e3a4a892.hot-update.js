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
            this._values = []
            this._colors = []
            /*for (let i = 0; i < 25; i++) {
                this.data.values.push({
                    value: Math.floor(Math.random() * 100),
                    //color: new Color(0x0000FF)
                })
            }*/
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
            this._values = val

            this.clean()

            for (let i = 0; i < this._values.length; i++) {
                try {
                    const v = this._values[i]
                    const geometry = this.createCubeGeometry(v.color)
                    const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.material)
                    this.add(cube)
                    const column = {
                        cube, value: v.value
                    }
                    this.columns.push(column)
                    cube.position.x = i * this.cubeSize

                    this.play(cube, v.value, '', i)
                } catch (error) {
                    continue
                }
            }
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

        /*init() {
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
                const cube = new Mesh(geometry, material)
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
        }*/

        addValue() {
            const v = {
                value: 0, color: new three__WEBPACK_IMPORTED_MODULE_0__.Color('white').getHexString()
            }
            this.data.values.push(v)

            const geometry = this.createCubeGeometry(v.color)

            const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.material)
            this.add(cube)
            this.columns.push({
                cube, value: v.value
            })
            cube.position.x = this.data.values.length * this.cubeSize
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

        changeValue(el, val) {
            const index = this.data.values.indexOf(el)
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuMzM2NTdlZTMwOTg5ZTNhNGE4OTIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdDQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsdUNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsd0NBQUs7QUFDbkMsaUNBQWlDLGlEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsa0RBQWU7QUFDakUsa0NBQWtDLGtEQUFlO0FBQ2pELGdEQUFnRCxrREFBZTtBQUMvRDtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEU7QUFDQTtBQUNBLCtDQUErQyxrREFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixZQUFZLHNDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMuY2hhcnRzLy4vc3JjL21vZGVscy9jb2x1bW5jaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBDb2xvcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcclxuICAgIE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgT2JqZWN0M0RcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCBHc2FwRmxvYXQgZnJvbSBcImdzYXBtb2QvR3NhcEZsb2F0XCI7XHJcblxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdzYXBGbG9hdClcclxuXHJcbmNvbnN0IGluZGljZXNUb01vdmUgPSBbXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMTgsXHJcbiAgICAxOSxcclxuICAgIDIxLFxyXG4gICAgMjJcclxuXTtcclxuXHJcbmNvbnN0IHJhaW5ib3dDb2xvcnMgPSBbXHJcbiAgICBuZXcgQ29sb3IoMHhGRjAwMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkY3RjAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMEZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDAwMEZGKSxcclxuICAgIG5ldyBDb2xvcigweDRCMDA4MiksXHJcbiAgICBuZXcgQ29sb3IoMHg4QjAwRkYpXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3ZlUG9zaXRpb25zKHBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB0YXJnZXQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlc1RvTW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uLmFycmF5W2luZGljZXNUb01vdmVbaV0gKiAzICsgMV0gPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbHVtbkNoYXJ0KCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENvbHVtbkNoYXJ0IGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDb2x1bW5DaGFydFwiO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLl9jb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICAvKmZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiBuZXcgQ29sb3IoMHgwMDAwRkYpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdGhpcy5kYXRhLm1heCB8fCAyNS8vTWF0aC5tYXgoLi4udGhpcy5kYXRhLnZhbHVlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5ncm91cCA9IHt9Ly8gbmV3IFR3ZWVuR3JvdXAoKVxyXG4gICAgICAgICAgICB0aGlzLmZhY2VzID0gW11cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gW11cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC45XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1YmVTaXplID0gMlxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFNpemUgPSA1XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0ucG9zaXRpb25dIHx8IGRhdGEudHJhbnNmb3JtLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUuY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0uc2NhbGVdIHx8IGRhdGEudHJhbnNmb3JtLnNjYWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgbWF4KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgbWF4KHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIChjLnZhbHVlIC8gdGhpcy5fbWF4KSAqIDEwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3ZhbHVlc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlcyh2YWwpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWVzID0gdmFsXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKClcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fdmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLl92YWx1ZXNbaV1cclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gaSAqIHRoaXMuY3ViZVNpemVcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wbGF5KGN1YmUsIHYudmFsdWUsICcnLCBpKVxyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIC0xKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYW4oKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5sZW5ndGggPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmluaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjID0gMFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkLmNvbG9yID0gcmFpbmJvd0NvbG9yc1tjKytdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA+IHJhaW5ib3dDb2xvcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICBjID0gMFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeShkLmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IGQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpXS5jdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jb25zdCB0b3RhbFdpZHRoID0gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueCA9IE1hdGgubWluKDEsIHRoaXMudGFyZ2V0U2l6ZSAvIHRvdGFsV2lkdGgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueiA9IHRoaXMuY3ViZVNpemUgLyB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gLSgodGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggLyAyKSAqIHRoaXMuY3ViZVNpemUpICogdGhpcy5zY2FsZS54O1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgYWRkVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCwgY29sb3I6IG5ldyBDb2xvcignd2hpdGUnKS5nZXRIZXhTdHJpbmcoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZXMucHVzaCh2KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeSh2LmNvbG9yKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUNvbG9yKGVsLCBjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEudmFsdWVzLmluZGV4T2YoZWwpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwuY29sb3IgPSBjb2xcclxuICAgICAgICAgICAgY29uc3QgY29sQXR0ciA9IGNvbHVtbi5jdWJlLmdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnY29sb3InKVxyXG4gICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IGNvbEF0dHIuY291bnQ7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgY29sQXR0ci5zZXRYWVoodiwgZWwuY29sb3IuciwgZWwuY29sb3IuZywgZWwuY29sb3IuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xBdHRyLm5lZWRzVXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlVmFsdWUoZWwsIHZhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS52YWx1ZXMuaW5kZXhPZihlbClcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2luZGV4XVxyXG4gICAgICAgICAgICBlbC52YWx1ZSA9IHZhbFxyXG4gICAgICAgICAgICBjb25zdCB2ID0gKGVsLnZhbHVlIC8gdGhpcy5tYXgpICogMTBcclxuICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjb2x1bW4uY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB2KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQ3ViZUdlb21ldHJ5KGNvbCkge1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvciA9IG5ldyBDb2xvcihjb2wpXHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsIDQsIDUsIDYsIDQsIDYsIDcsXHJcbiAgICAgICAgICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LFxyXG4gICAgICAgICAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMyxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlcnRpY2VzLCAzKSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEluZGV4KG5ldyBCdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSkpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobm9ybWFscywgMykpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY29sb3IuciwgY29sb3IuZywgY29sb3IuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIDMpKVxyXG4gICAgICAgICAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgLyp0aGlzLnVwZGF0ZSA9ICh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy50d2Vlbmdyb3VwLnVwZGF0ZSh0KTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2x1bW5zW2ldXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoYy5jdWJlLCBjLnZhbHVlLCBjLmxhYmVsLCBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWxvYWQoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHsgfVxyXG4gICAgICAgICAgICBjb25zdCB0d2VlbnMgPSBbXS8vdGhpcy50d2Vlbmdyb3VwLmdldEFsbCgpXHJcbiAgICAgICAgICAgIHR3ZWVucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdC5zdG9wKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzID0gZGF0YS52YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheShtZXNoLCB2YWwsIGxhYmVsLCBkZWxheSA9IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZWQgPSB7IHZhbHVlOiAwIH1cclxuICAgICAgICAgICAgZ3NhcC50byhhbmltYXRlZCwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICh2YWwgLyB0aGlzLm1heCkgKiAxMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogZGVsYXkgKiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgb25TdGFydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIGFuaW1hdGVkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW9kZWxbcHJvcF0gPSBjdXJyZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJlcGVhdDogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=