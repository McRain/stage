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
            /*this.data.values = val

            this.clean()
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

        addValue() {
            console.log('add')
            this._values.push({
                value: 0, color: '#ffffff'
            })

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

        changeValue(el, val) {
            const index = this.data.values.indexOf(el)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuMDg0YzZjODQ5OTUxM2FkMzJhMWYuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixRQUFRO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixhQUFhO0FBQ2I7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBLGdDQUFnQyxvREFBaUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5REFBeUQsd0NBQUs7QUFDOUQ7QUFDQSw2QkFBNkIsdUNBQUk7QUFDakM7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsaURBQWM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtEQUFrRCxrREFBZTtBQUNqRSxrQ0FBa0Msa0RBQWU7QUFDakQsZ0RBQWdELGtEQUFlO0FBQy9EO0FBQ0EsNEJBQTRCLHdDQUF3QztBQUNwRTtBQUNBO0FBQ0EsK0NBQStDLGtEQUFlO0FBQzlEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiLDRCQUE0Qix5QkFBeUI7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCO0FBQy9CLFlBQVksc0NBQUk7QUFDaEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5jaGFydHMvLi9zcmMvbW9kZWxzL2NvbHVtbmNoYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIENvbG9yLFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsLFxyXG4gICAgTWVzaFBoeXNpY2FsTWF0ZXJpYWwsXHJcbiAgICBPYmplY3QzRFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IEdzYXBGbG9hdCBmcm9tIFwiZ3NhcG1vZC9Hc2FwRmxvYXRcIjtcclxuXHJcbmltcG9ydCB7IGdzYXAgfSBmcm9tIFwiZ3NhcFwiO1xyXG5cclxuY29uc29sZS5sb2coR3NhcEZsb2F0KVxyXG5cclxuY29uc3QgaW5kaWNlc1RvTW92ZSA9IFtcclxuICAgIDIsXHJcbiAgICAzLFxyXG4gICAgNSxcclxuICAgIDYsXHJcbiAgICA4LFxyXG4gICAgOSxcclxuICAgIDEwLFxyXG4gICAgMTEsXHJcbiAgICAxOCxcclxuICAgIDE5LFxyXG4gICAgMjEsXHJcbiAgICAyMlxyXG5dO1xyXG5cclxuY29uc3QgcmFpbmJvd0NvbG9ycyA9IFtcclxuICAgIG5ldyBDb2xvcigweEZGMDAwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRjdGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkZGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMDAwRkYpLFxyXG4gICAgbmV3IENvbG9yKDB4NEIwMDgyKSxcclxuICAgIG5ldyBDb2xvcigweDhCMDBGRilcclxuXTtcclxuXHJcbmZ1bmN0aW9uIE1vdmVQb3NpdGlvbnMocG9zaXRpb24sIGluZGljZXNUb01vdmUsIHRhcmdldCkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpbmRpY2VzVG9Nb3ZlLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcG9zaXRpb24uYXJyYXlbaW5kaWNlc1RvTW92ZVtpXSAqIDMgKyAxXSA9IHRhcmdldDtcclxuICAgIH1cclxuICAgIHBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ29sdW1uQ2hhcnQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ29sdW1uQ2hhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoZGF0YSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNvbHVtbkNoYXJ0XCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmRhdGEgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXM6IFtcclxuICAgICAgICAgICAgICAgIF0sXHJcbiAgICAgICAgICAgICAgICBtYXRlcmlhbDoge30sXHJcbiAgICAgICAgICAgICAgICAuLi5kYXRhXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcyA9IFtdXHJcbiAgICAgICAgICAgIC8qZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6IG5ldyBDb2xvcigweDAwMDBGRilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB0aGlzLmRhdGEubWF4IHx8IDI1Ly9NYXRoLm1heCguLi50aGlzLmRhdGEudmFsdWVzLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbmdyb3VwID0ge30vLyBuZXcgVHdlZW5Hcm91cCgpXHJcbiAgICAgICAgICAgIHRoaXMuZmFjZXMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICAgICAgICAgICAgcmVmbGVjdGl2aXR5OiAwLjlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZVNpemUgPSAyXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2l6ZSA9IDVcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5wb3NpdGlvbl0gfHwgZGF0YS50cmFuc2Zvcm0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5zY2FsZV0gfHwgZGF0YS50cmFuc2Zvcm0uc2NhbGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBtYXgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBtYXgodikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB2XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgKGMudmFsdWUgLyB0aGlzLl9tYXgpICogMTApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWVzXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgdmFsdWVzKHZhbCkge1xyXG4gICAgICAgICAgICAvKnRoaXMuZGF0YS52YWx1ZXMgPSB2YWxcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICB2LmNvbG9yID0gbmV3IENvbG9yKHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiB2LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheShjdWJlLCB2LnZhbHVlLCAnJywgaSlcclxuXHJcbiAgICAgICAgICAgICAgICAvL01vdmVQb3NpdGlvbnMoY29sdW1uLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgKHYudmFsdWUgLyB0aGlzLm1heCkgKiAxMClcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLm1hcChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIC0xKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgY2xlYW4oKSB7XHJcbiAgICAgICAgICAgIHdoaWxlICh0aGlzLmNoaWxkcmVuLmxlbmd0aCA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMuY2hpbGRyZW5bMF0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5sZW5ndGggPSAwXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKClcclxuXHJcblxyXG4gICAgICAgICAgICBsZXQgYyA9IDBcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkID0gdGhpcy5kYXRhLnZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgaWYgKCFkLmNvbG9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZC5jb2xvciA9IHJhaW5ib3dDb2xvcnNbYysrXVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaWYgKGMgPiByYWluYm93Q29sb3JzLmxlbmd0aCAtIDEpXHJcbiAgICAgICAgICAgICAgICAgICAgYyA9IDBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkoZC5jb2xvcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiBkLnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnNbaV0uY3ViZS5wb3NpdGlvbi54ID0gaSAqIHRoaXMuY3ViZVNpemVcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vY29uc3QgdG90YWxXaWR0aCA9IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoICogdGhpcy5jdWJlU2l6ZTtcclxuICAgICAgICAgICAgLy90aGlzLnNjYWxlLnggPSBNYXRoLm1pbigxLCB0aGlzLnRhcmdldFNpemUgLyB0b3RhbFdpZHRoKTtcclxuICAgICAgICAgICAgLy90aGlzLnNjYWxlLnogPSB0aGlzLmN1YmVTaXplIC8gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGhcclxuICAgICAgICAgICAgY29uc3Qgb2Zmc2V0WCA9IC0oKHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoIC8gMikgKiB0aGlzLmN1YmVTaXplKSAqIHRoaXMuc2NhbGUueDtcclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi54ID0gb2Zmc2V0WDtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBhZGRWYWx1ZSgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FkZCcpXHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAwLCBjb2xvcjogJyNmZmZmZmYnXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KG5ldyBDb2xvcignd2hpdGUnKSlcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY3ViZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSB0aGlzLl92YWx1ZXMubGVuZ3RoICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlQ29sb3IoZWwsIGNvbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS52YWx1ZXMuaW5kZXhPZihlbClcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2luZGV4XVxyXG4gICAgICAgICAgICBlbC5jb2xvciA9IGNvbFxyXG4gICAgICAgICAgICBjb25zdCBjb2xBdHRyID0gY29sdW1uLmN1YmUuZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKCdjb2xvcicpXHJcbiAgICAgICAgICAgIGZvciAobGV0IHYgPSAwOyB2IDwgY29sQXR0ci5jb3VudDsgdisrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xBdHRyLnNldFhZWih2LCBlbC5jb2xvci5yLCBlbC5jb2xvci5nLCBlbC5jb2xvci5iKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNvbEF0dHIubmVlZHNVcGRhdGUgPSB0cnVlXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VWYWx1ZShlbCwgdmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlcy5pbmRleE9mKGVsKVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaW5kZXhdXHJcbiAgICAgICAgICAgIGVsLnZhbHVlID0gdmFsXHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSAoZWwudmFsdWUgLyB0aGlzLm1heCkgKiAxMFxyXG4gICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGNvbHVtbi5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIHYpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVDdWJlR2VvbWV0cnkoY29sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnZlcnRpY2VzKVxyXG4gICAgICAgICAgICBjb25zdCBpbmRpY2VzID0gbmV3IFVpbnQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDEsIDIsIDAsIDIsIDMsIDQsIDUsIDYsIDQsIDYsIDcsXHJcbiAgICAgICAgICAgICAgICA4LCA5LCAxMCwgOCwgMTAsIDExLCAxMiwgMTMsIDE0LCAxMiwgMTQsIDE1LFxyXG4gICAgICAgICAgICAgICAgMTYsIDE3LCAxOCwgMTYsIDE4LCAxOSwgMjAsIDIxLCAyMiwgMjAsIDIyLCAyMyxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG5vcm1hbHMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgLTEsIDAsIDAsIC0xLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAtMSwgMCwgMCwgLTEsIDAsXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIC0xLCAwLCAwLCAtMSwgMCwgMCxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlcnRpY2VzLCAzKSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEluZGV4KG5ldyBCdWZmZXJBdHRyaWJ1dGUoaW5kaWNlcywgMSkpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ25vcm1hbCcsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobm9ybWFscywgMykpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXVxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KGNvbG9ycyksIDMpKVxyXG4gICAgICAgICAgICByZXR1cm4gZ2VvbWV0cnk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgLyp0aGlzLnVwZGF0ZSA9ICh0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgICAgIC8vdGhpcy50d2Vlbmdyb3VwLnVwZGF0ZSh0KTtcclxuICAgICAgICAgICAgfSovXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjID0gdGhpcy5jb2x1bW5zW2ldXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoYy5jdWJlLCBjLnZhbHVlLCBjLmxhYmVsLCBpKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWxvYWQoZGF0YSkge1xyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSA9ICgpID0+IHsgfVxyXG4gICAgICAgICAgICBjb25zdCB0d2VlbnMgPSBbXS8vdGhpcy50d2Vlbmdyb3VwLmdldEFsbCgpXHJcbiAgICAgICAgICAgIHR3ZWVucy5mb3JFYWNoKHQgPT4ge1xyXG4gICAgICAgICAgICAgICAgdC5zdG9wKClcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMucmVzZXQoKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzID0gZGF0YS52YWx1ZXNcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcbiAgICAgICAgICAgIHRoaXMuaW5pdCgpXHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcGxheShtZXNoLCB2YWwsIGxhYmVsLCBkZWxheSA9IDApIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZWQgPSB7IHZhbHVlOiAwIH1cclxuICAgICAgICAgICAgZ3NhcC50byhhbmltYXRlZCwge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6ICh2YWwgLyB0aGlzLm1heCkgKiAxMCxcclxuICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZWxheTogZGVsYXkgKiAwLjA1LFxyXG4gICAgICAgICAgICAgICAgb25TdGFydDogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uVXBkYXRlOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhtZXNoLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIGFuaW1hdGVkLnZhbHVlKVxyXG4gICAgICAgICAgICAgICAgICAgIC8vbW9kZWxbcHJvcF0gPSBjdXJyZW50LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25Db21wbGV0ZTogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblJlcGVhdDogKCkgPT4ge1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSk7XHJcblxyXG5cclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=