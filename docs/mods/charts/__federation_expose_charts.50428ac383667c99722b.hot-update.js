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

            const geometry = this.createCubeGeometry(new three__WEBPACK_IMPORTED_MODULE_0__.Color(v.color))

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuNTA0MjhhYzM4MzY2N2M5OTcyMmIuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx1Q0FBSTtBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLHdDQUFLO0FBQzFDO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCx3Q0FBSztBQUM5RDtBQUNBLDZCQUE2Qix1Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4Qix3Q0FBSztBQUNuQyxpQ0FBaUMsaURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrREFBZTtBQUNqRSxrQ0FBa0Msa0RBQWU7QUFDakQsZ0RBQWdELGtEQUFlO0FBQy9EO0FBQ0EsNEJBQTRCLHdDQUF3QztBQUNwRTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFlBQVksc0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvbW9kZWxzL2NvbHVtbmNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIENvbG9yLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gICAgTWVzaFBoeXNpY2FsTWF0ZXJpYWwsXHJcbiAgICBPYmplY3QzRFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IEdzYXBGbG9hdCBmcm9tIFwiZ3NhcG1vZC9Hc2FwRmxvYXRcIjtcclxuXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc29sZS5sb2coR3NhcEZsb2F0KVxyXG5cclxuY29uc3QgaW5kaWNlc1RvTW92ZSA9IFtcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxOCxcclxuICAgIDE5LFxyXG4gICAgMjEsXHJcbiAgICAyMlxyXG5dO1xyXG5cclxuY29uc3QgcmFpbmJvd0NvbG9ycyA9IFtcclxuICAgIG5ldyBDb2xvcigweEZGMDAwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRjdGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkZGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMDAwRkYpLFxyXG4gICAgbmV3IENvbG9yKDB4NEIwMDgyKSxcclxuICAgIG5ldyBDb2xvcigweDhCMDBGRilcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vdmVQb3NpdGlvbnMocG9zaXRpb24sIGluZGljZXNUb01vdmUsIHRhcmdldCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzVG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb24uYXJyYXlbaW5kaWNlc1RvTW92ZVtpXSAqIDMgKyAxXSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ2hhcnQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ29sdW1uQ2hhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbHVtbkNoYXJ0XCI7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIC8qZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6IG5ldyBDb2xvcigweDAwMDBGRilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB0aGlzLmRhdGEubWF4IHx8IDI1Ly9NYXRoLm1heCguLi50aGlzLmRhdGEudmFsdWVzLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbmdyb3VwID0ge30vLyBuZXcgVHdlZW5Hcm91cCgpXHJcbiAgICAgICAgICAgIHRoaXMuZmFjZXMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICAgICAgICAgICAgcmVmbGVjdGl2aXR5OiAwLjlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZVNpemUgPSAyXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2l6ZSA9IDVcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5wb3NpdGlvbl0gfHwgZGF0YS50cmFuc2Zvcm0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5zY2FsZV0gfHwgZGF0YS50cmFuc2Zvcm0uc2NhbGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBtYXgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBtYXgodikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB2XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgKGMudmFsdWUgLyB0aGlzLl9tYXgpICogMTApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWVzKHZhbCkge1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZXMgPSB2YWxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl92YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgdiA9IHRoaXMuX3ZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkodi5jb2xvcilcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiB2LnZhbHVlXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKGNvbHVtbilcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBsYXkoY3ViZSwgdi52YWx1ZSwgJycsIGkpXHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgLTEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhbigpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmxlbmd0aCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qaW5pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGMgPSAwXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS52YWx1ZXNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghZC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGQuY29sb3IgPSByYWluYm93Q29sb3JzW2MrK11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjID4gcmFpbmJvd0NvbG9ycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KGQuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2ldLmN1YmUucG9zaXRpb24ueCA9IGkgKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS54ID0gTWF0aC5taW4oMSwgdGhpcy50YXJnZXRTaXplIC8gdG90YWxXaWR0aCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS56ID0gdGhpcy5jdWJlU2l6ZSAvIHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAtKCh0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAvIDIpICogdGhpcy5jdWJlU2l6ZSkgKiB0aGlzLnNjYWxlLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9mZnNldFg7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBhZGRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgY29uc3QgdiA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLCBjb2xvcjogbmV3IENvbG9yKCd3aGl0ZScpLmdldEhleFN0cmluZygpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy5wdXNoKHYpXHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KG5ldyBDb2xvcih2LmNvbG9yKSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IHYudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VDb2xvcihlbCwgY29sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlcy5pbmRleE9mKGVsKVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaW5kZXhdXHJcbiAgICAgICAgICAgIGVsLmNvbG9yID0gY29sXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbEF0dHIgPSBjb2x1bW4uY3ViZS5nZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ2NvbG9yJylcclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCBjb2xBdHRyLmNvdW50OyB2KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbEF0dHIuc2V0WFlaKHYsIGVsLmNvbG9yLnIsIGVsLmNvbG9yLmcsIGVsLmNvbG9yLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sQXR0ci5uZWVkc1VwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZVZhbHVlKGVsLCB2YWwpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEudmFsdWVzLmluZGV4T2YoZWwpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwudmFsdWUgPSB2YWxcclxuICAgICAgICAgICAgY29uc3QgdiA9IChlbC52YWx1ZSAvIHRoaXMubWF4KSAqIDEwXHJcbiAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoY29sdW1uLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgdilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUN1YmVHZW9tZXRyeShjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IgPSBuZXcgQ29sb3IoY29sKVxyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcylcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChuZXcgQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDEpKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5vcm1hbHMsIDMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbG9yLnIsIGNvbG9yLmcsIGNvbG9yLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAzKSlcclxuICAgICAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIC8qdGhpcy51cGRhdGUgPSAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudHdlZW5ncm91cC51cGRhdGUodCk7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sdW1uc1tpXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KGMuY3ViZSwgYy52YWx1ZSwgYy5sYWJlbCwgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVsb2FkKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7IH1cclxuICAgICAgICAgICAgY29uc3QgdHdlZW5zID0gW10vL3RoaXMudHdlZW5ncm91cC5nZXRBbGwoKVxyXG4gICAgICAgICAgICB0d2VlbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHQuc3RvcCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcyA9IGRhdGEudmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXkobWVzaCwgdmFsLCBsYWJlbCwgZGVsYXkgPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVkID0geyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIGdzYXAudG8oYW5pbWF0ZWQsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAodmFsIC8gdGhpcy5tYXgpICogMTAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5ICogMC4wNSxcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMobWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCBhbmltYXRlZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL21vZGVsW3Byb3BdID0gY3VycmVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZXBlYXQ6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9