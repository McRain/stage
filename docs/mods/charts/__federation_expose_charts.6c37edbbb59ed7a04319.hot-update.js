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
            return this.data.values
        }

        set values(val) {
            console.log(val)
            this.data.values = val

            this.clean()
            for (let i = 0; i < this.data.values.length; i++) {
                const v = this.data.values[i]
                v.color = new three__WEBPACK_IMPORTED_MODULE_0__.Color(v.color)
                const geometry = this.createCubeGeometry(v.color)
                const cube = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(geometry, this.material)
                this.add(cube)
                const column = {
                    cube, value: v.value
                }
                this.columns.push(column)
                cube.position.x = i * this.cubeSize

                this.play(cube, v.value, '', i)

                //MovePositions(column.cube.geometry.attributes.position, indicesToMove, (v.value / this.max) * 10)
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
            const v = {
                value: 0, color: new three__WEBPACK_IMPORTED_MODULE_0__.Color('white')
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuNmMzN2VkYmJiNTllZDdhMDQzMTkuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0EsOEJBQThCLHdDQUFLO0FBQ25DO0FBQ0EsaUNBQWlDLHVDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsNkJBQTZCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLHVDQUFJO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQ0FBZ0MseUJBQXlCO0FBQ3pEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQyx3Q0FBSztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLHVDQUFJO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUNBQWlDLGlEQUFjO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrREFBa0Qsa0RBQWU7QUFDakUsa0NBQWtDLGtEQUFlO0FBQ2pELGdEQUFnRCxrREFBZTtBQUMvRDtBQUNBLDRCQUE0Qix3Q0FBd0M7QUFDcEU7QUFDQTtBQUNBLCtDQUErQyxrREFBZTtBQUM5RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYiw0QkFBNEIseUJBQXlCO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQjtBQUMvQixZQUFZLHNDQUFJO0FBQ2hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMuY2hhcnRzLy4vc3JjL21vZGVscy9jb2x1bW5jaGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBDb2xvcixcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbCxcclxuICAgIE1lc2hQaHlzaWNhbE1hdGVyaWFsLFxyXG4gICAgT2JqZWN0M0RcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCBHc2FwRmxvYXQgZnJvbSBcImdzYXBtb2QvR3NhcEZsb2F0XCI7XHJcblxyXG5pbXBvcnQgeyBnc2FwIH0gZnJvbSBcImdzYXBcIjtcclxuXHJcbmNvbnNvbGUubG9nKEdzYXBGbG9hdClcclxuXHJcbmNvbnN0IGluZGljZXNUb01vdmUgPSBbXHJcbiAgICAyLFxyXG4gICAgMyxcclxuICAgIDUsXHJcbiAgICA2LFxyXG4gICAgOCxcclxuICAgIDksXHJcbiAgICAxMCxcclxuICAgIDExLFxyXG4gICAgMTgsXHJcbiAgICAxOSxcclxuICAgIDIxLFxyXG4gICAgMjJcclxuXTtcclxuXHJcbmNvbnN0IHJhaW5ib3dDb2xvcnMgPSBbXHJcbiAgICBuZXcgQ29sb3IoMHhGRjAwMDApLFxyXG4gICAgbmV3IENvbG9yKDB4RkY3RjAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGRkYwMCksXHJcbiAgICBuZXcgQ29sb3IoMHgwMEZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDAwMEZGKSxcclxuICAgIG5ldyBDb2xvcigweDRCMDA4MiksXHJcbiAgICBuZXcgQ29sb3IoMHg4QjAwRkYpXHJcbl07XHJcblxyXG5mdW5jdGlvbiBNb3ZlUG9zaXRpb25zKHBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB0YXJnZXQpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5kaWNlc1RvTW92ZS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBvc2l0aW9uLmFycmF5W2luZGljZXNUb01vdmVbaV0gKiAzICsgMV0gPSB0YXJnZXQ7XHJcbiAgICB9XHJcbiAgICBwb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENvbHVtbkNoYXJ0KCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENvbHVtbkNoYXJ0IGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKGRhdGEpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDb2x1bW5DaGFydFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5kYXRhID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzOiBbXHJcbiAgICAgICAgICAgICAgICBdLFxyXG4gICAgICAgICAgICAgICAgbWF0ZXJpYWw6IHt9LFxyXG4gICAgICAgICAgICAgICAgLi4uZGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8qZm9yIChsZXQgaSA9IDA7IGkgPCAyNTsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgICAgIHZhbHVlOiBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAxMDApLFxyXG4gICAgICAgICAgICAgICAgICAgIC8vY29sb3I6IG5ldyBDb2xvcigweDAwMDBGRilcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB0aGlzLmRhdGEubWF4IHx8IDI1Ly9NYXRoLm1heCguLi50aGlzLmRhdGEudmFsdWVzLm1hcChpdGVtID0+IGl0ZW0udmFsdWUpKTtcclxuICAgICAgICAgICAgdGhpcy50d2Vlbmdyb3VwID0ge30vLyBuZXcgVHdlZW5Hcm91cCgpXHJcbiAgICAgICAgICAgIHRoaXMuZmFjZXMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMgPSBbXVxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IE1lc2hCYXNpY01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC45LFxyXG4gICAgICAgICAgICAgICAgcmVmbGVjdGl2aXR5OiAwLjlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgICAgIHRoaXMudmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KFtcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgXSk7XHJcbiAgICAgICAgICAgIHRoaXMuY3ViZVNpemUgPSAyXHJcbiAgICAgICAgICAgIHRoaXMudGFyZ2V0U2l6ZSA9IDVcclxuICAgICAgICAgICAgdGhpcy52aWV3ID0gZmFsc2VcclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5wb3NpdGlvbikge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbi5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5wb3NpdGlvbl0gfHwgZGF0YS50cmFuc2Zvcm0ucG9zaXRpb24pXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgaWYgKGRhdGEudHJhbnNmb3JtPy5zY2FsZSkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zY2FsZS5jb3B5KHRlbXBsYXRlc1tkYXRhLnRyYW5zZm9ybS5zY2FsZV0gfHwgZGF0YS50cmFuc2Zvcm0uc2NhbGUpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBtYXgoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXhcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBtYXgodikge1xyXG4gICAgICAgICAgICB0aGlzLl9tYXggPSB2XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5mb3JFYWNoKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgKGMudmFsdWUgLyB0aGlzLl9tYXgpICogMTApXHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgdmFsdWVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5kYXRhLnZhbHVlc1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IHZhbHVlcyh2YWwpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2codmFsKVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzID0gdmFsXHJcblxyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKClcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB2ID0gdGhpcy5kYXRhLnZhbHVlc1tpXVxyXG4gICAgICAgICAgICAgICAgdi5jb2xvciA9IG5ldyBDb2xvcih2LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeSh2LmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHtcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goY29sdW1uKVxyXG4gICAgICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gaSAqIHRoaXMuY3ViZVNpemVcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnBsYXkoY3ViZSwgdi52YWx1ZSwgJycsIGkpXHJcblxyXG4gICAgICAgICAgICAgICAgLy9Nb3ZlUG9zaXRpb25zKGNvbHVtbi5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsICh2LnZhbHVlIC8gdGhpcy5tYXgpICogMTApXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0KCkge1xyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubWFwKGMgPT4ge1xyXG4gICAgICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgLTEpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBjbGVhbigpIHtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuY2hpbGRyZW4ubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5jaGlsZHJlblswXSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLmxlbmd0aCA9IDBcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG5cclxuXHJcbiAgICAgICAgICAgIGxldCBjID0gMFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGQgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICBpZiAoIWQuY29sb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICBkLmNvbG9yID0gcmFpbmJvd0NvbG9yc1tjKytdXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoYyA+IHJhaW5ib3dDb2xvcnMubGVuZ3RoIC0gMSlcclxuICAgICAgICAgICAgICAgICAgICBjID0gMFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeShkLmNvbG9yKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCBtYXRlcmlhbClcclxuICAgICAgICAgICAgICAgIHRoaXMuYWRkKGN1YmUpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IGQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29sdW1uc1tpXS5jdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy9jb25zdCB0b3RhbFdpZHRoID0gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueCA9IE1hdGgubWluKDEsIHRoaXMudGFyZ2V0U2l6ZSAvIHRvdGFsV2lkdGgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc2NhbGUueiA9IHRoaXMuY3ViZVNpemUgLyB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aFxyXG4gICAgICAgICAgICBjb25zdCBvZmZzZXRYID0gLSgodGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggLyAyKSAqIHRoaXMuY3ViZVNpemUpICogdGhpcy5zY2FsZS54O1xyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9uLnggPSBvZmZzZXRYO1xyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGFkZFZhbHVlKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IDAsIGNvbG9yOiBuZXcgQ29sb3IoJ3doaXRlJylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmRhdGEudmFsdWVzLnB1c2godilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlb21ldHJ5ID0gdGhpcy5jcmVhdGVDdWJlR2VvbWV0cnkodi5jb2xvcilcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGN1YmUgPSBuZXcgTWVzaChnZW9tZXRyeSwgdGhpcy5tYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zLnB1c2goe1xyXG4gICAgICAgICAgICAgICAgY3ViZSwgdmFsdWU6IHYudmFsdWVcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY3ViZS5wb3NpdGlvbi54ID0gdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGggKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjaGFuZ2VDb2xvcihlbCwgY29sKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5kYXRhLnZhbHVlcy5pbmRleE9mKGVsKVxyXG4gICAgICAgICAgICBjb25zdCBjb2x1bW4gPSB0aGlzLmNvbHVtbnNbaW5kZXhdXHJcbiAgICAgICAgICAgIGVsLmNvbG9yID0gY29sXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbEF0dHIgPSBjb2x1bW4uY3ViZS5nZW9tZXRyeS5nZXRBdHRyaWJ1dGUoJ2NvbG9yJylcclxuICAgICAgICAgICAgZm9yIChsZXQgdiA9IDA7IHYgPCBjb2xBdHRyLmNvdW50OyB2KyspIHtcclxuICAgICAgICAgICAgICAgIGNvbEF0dHIuc2V0WFlaKHYsIGVsLmNvbG9yLnIsIGVsLmNvbG9yLmcsIGVsLmNvbG9yLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgY29sQXR0ci5uZWVkc1VwZGF0ZSA9IHRydWVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZVZhbHVlKGVsLCB2YWwpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEudmFsdWVzLmluZGV4T2YoZWwpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwudmFsdWUgPSB2YWxcclxuICAgICAgICAgICAgY29uc3QgdiA9IChlbC52YWx1ZSAvIHRoaXMubWF4KSAqIDEwXHJcbiAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoY29sdW1uLmN1YmUuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgdilcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUN1YmVHZW9tZXRyeShjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgY29uc3QgdmVydGljZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMudmVydGljZXMpXHJcbiAgICAgICAgICAgIGNvbnN0IGluZGljZXMgPSBuZXcgVWludDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgMCwgMSwgMiwgMCwgMiwgMywgNCwgNSwgNiwgNCwgNiwgNyxcclxuICAgICAgICAgICAgICAgIDgsIDksIDEwLCA4LCAxMCwgMTEsIDEyLCAxMywgMTQsIDEyLCAxNCwgMTUsXHJcbiAgICAgICAgICAgICAgICAxNiwgMTcsIDE4LCAxNiwgMTgsIDE5LCAyMCwgMjEsIDIyLCAyMCwgMjIsIDIzLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgY29uc3Qgbm9ybWFscyA9IG5ldyBGbG9hdDMyQXJyYXkoW1xyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIDEsIDAsIDAsIDEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAtMSwgMCwgMCwgLTEsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgMSwgMCwgMCwgMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgICAgICAgICAgICAgIDAsIC0xLCAwLCAwLCAtMSwgMCxcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAxLCAwLCAwLCAxLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgICAgICAgICAgICAgLTEsIDAsIDAsIC0xLCAwLCAwLFxyXG4gICAgICAgICAgICBdKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVydGljZXMsIDMpKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0SW5kZXgobmV3IEJ1ZmZlckF0dHJpYnV0ZShpbmRpY2VzLCAxKSk7XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnbm9ybWFsJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShub3JtYWxzLCAzKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjb2wuciwgY29sLmcsIGNvbC5iKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkoY29sb3JzKSwgMykpXHJcbiAgICAgICAgICAgIHJldHVybiBnZW9tZXRyeTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICAvKnRoaXMudXBkYXRlID0gKHQpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICAgICAgLy90aGlzLnR3ZWVuZ3JvdXAudXBkYXRlKHQpO1xyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvbHVtbnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGMgPSB0aGlzLmNvbHVtbnNbaV1cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheShjLmN1YmUsIGMudmFsdWUsIGMubGFiZWwsIGkpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlbG9hZChkYXRhKSB7XHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlID0gKCkgPT4geyB9XHJcbiAgICAgICAgICAgIGNvbnN0IHR3ZWVucyA9IFtdLy90aGlzLnR3ZWVuZ3JvdXAuZ2V0QWxsKClcclxuICAgICAgICAgICAgdHdlZW5zLmZvckVhY2godCA9PiB7XHJcbiAgICAgICAgICAgICAgICB0LnN0b3AoKVxyXG4gICAgICAgICAgICB9KVxyXG5cclxuICAgICAgICAgICAgdGhpcy5yZXNldCgpXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZXMgPSBkYXRhLnZhbHVlc1xyXG4gICAgICAgICAgICB0aGlzLmNsZWFuKClcclxuICAgICAgICAgICAgdGhpcy5pbml0KClcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwbGF5KG1lc2gsIHZhbCwgbGFiZWwsIGRlbGF5ID0gMCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlZCA9IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgICAgICBnc2FwLnRvKGFuaW1hdGVkLCB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogKHZhbCAvIHRoaXMubWF4KSAqIDEwLFxyXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDAuNSxcclxuICAgICAgICAgICAgICAgIGRlbGF5OiBkZWxheSAqIDAuMDUsXHJcbiAgICAgICAgICAgICAgICBvblN0YXJ0OiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25VcGRhdGU6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBNb3ZlUG9zaXRpb25zKG1lc2guZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgYW5pbWF0ZWQudmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgLy9tb2RlbFtwcm9wXSA9IGN1cnJlbnQudmFsdWVcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvbkNvbXBsZXRlOiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uUmVwZWF0OiAoKSA9PiB7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcblxyXG5cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==