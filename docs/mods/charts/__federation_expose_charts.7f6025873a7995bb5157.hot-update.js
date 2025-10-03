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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9jaGFydHMuN2Y2MDI1ODczYTc5OTViYjUxNTcuaG90LXVwZGF0ZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUMwQztBQUMxQztBQUM0QjtBQUM1QjtBQUNBLFlBQVksOENBQVM7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYixRQUFRLHdDQUFLO0FBQ2IsUUFBUSx3Q0FBSztBQUNiLFFBQVEsd0NBQUs7QUFDYjtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsMEJBQTBCO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZTtBQUNmLHFDQUFxQywyQ0FBUTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QjtBQUM1QjtBQUNBO0FBQ0EsOEJBQThCLFFBQVE7QUFDdEM7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGFBQWE7QUFDYjtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0EsZ0NBQWdDLG9EQUFpQjtBQUNqRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qiw2QkFBNkI7QUFDekQ7QUFDQSw4QkFBOEIsd0NBQUs7QUFDbkM7QUFDQSxpQ0FBaUMsdUNBQUk7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDZCQUE2QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyx1Q0FBSTtBQUNyQztBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0NBQWdDLHlCQUF5QjtBQUN6RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsd0NBQUs7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2Qix1Q0FBSTtBQUNqQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixtQkFBbUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlDQUFpQyxpREFBYztBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0RBQWtELGtEQUFlO0FBQ2pFLGtDQUFrQyxrREFBZTtBQUNqRCxnREFBZ0Qsa0RBQWU7QUFDL0Q7QUFDQSw0QkFBNEIsd0NBQXdDO0FBQ3BFO0FBQ0E7QUFDQSwrQ0FBK0Msa0RBQWU7QUFDOUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2IsNEJBQTRCLHlCQUF5QjtBQUNyRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0IsWUFBWSxzQ0FBSTtBQUNoQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLmNoYXJ0cy8uL3NyYy9tb2RlbHMvY29sdW1uY2hhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQ29sb3IsXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWwsXHJcbiAgICBNZXNoUGh5c2ljYWxNYXRlcmlhbCxcclxuICAgIE9iamVjdDNEXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgR3NhcEZsb2F0IGZyb20gXCJnc2FwbW9kL0dzYXBGbG9hdFwiO1xyXG5cclxuaW1wb3J0IHsgZ3NhcCB9IGZyb20gXCJnc2FwXCI7XHJcblxyXG5jb25zb2xlLmxvZyhHc2FwRmxvYXQpXHJcblxyXG5jb25zdCBpbmRpY2VzVG9Nb3ZlID0gW1xyXG4gICAgMixcclxuICAgIDMsXHJcbiAgICA1LFxyXG4gICAgNixcclxuICAgIDgsXHJcbiAgICA5LFxyXG4gICAgMTAsXHJcbiAgICAxMSxcclxuICAgIDE4LFxyXG4gICAgMTksXHJcbiAgICAyMSxcclxuICAgIDIyXHJcbl07XHJcblxyXG5jb25zdCByYWluYm93Q29sb3JzID0gW1xyXG4gICAgbmV3IENvbG9yKDB4RkYwMDAwKSxcclxuICAgIG5ldyBDb2xvcigweEZGN0YwMCksXHJcbiAgICBuZXcgQ29sb3IoMHhGRkZGMDApLFxyXG4gICAgbmV3IENvbG9yKDB4MDBGRjAwKSxcclxuICAgIG5ldyBDb2xvcigweDAwMDBGRiksXHJcbiAgICBuZXcgQ29sb3IoMHg0QjAwODIpLFxyXG4gICAgbmV3IENvbG9yKDB4OEIwMEZGKVxyXG5dO1xyXG5cclxuZnVuY3Rpb24gTW92ZVBvc2l0aW9ucyhwb3NpdGlvbiwgaW5kaWNlc1RvTW92ZSwgdGFyZ2V0KSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZGljZXNUb01vdmUubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwb3NpdGlvbi5hcnJheVtpbmRpY2VzVG9Nb3ZlW2ldICogMyArIDFdID0gdGFyZ2V0O1xyXG4gICAgfVxyXG4gICAgcG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG59XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDb2x1bW5DaGFydCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDb2x1bW5DaGFydCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcihkYXRhKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ29sdW1uQ2hhcnRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZGF0YSA9IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlczogW1xyXG4gICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgIG1hdGVyaWFsOiB7fSxcclxuICAgICAgICAgICAgICAgIC4uLmRhdGFcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvKmZvciAobGV0IGkgPSAwOyBpIDwgMjU7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICB2YWx1ZTogTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogMTAwKSxcclxuICAgICAgICAgICAgICAgICAgICAvL2NvbG9yOiBuZXcgQ29sb3IoMHgwMDAwRkYpXHJcbiAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdGhpcy5kYXRhLm1heCB8fCAyNS8vTWF0aC5tYXgoLi4udGhpcy5kYXRhLnZhbHVlcy5tYXAoaXRlbSA9PiBpdGVtLnZhbHVlKSk7XHJcbiAgICAgICAgICAgIHRoaXMudHdlZW5ncm91cCA9IHt9Ly8gbmV3IFR3ZWVuR3JvdXAoKVxyXG4gICAgICAgICAgICB0aGlzLmZhY2VzID0gW11cclxuICAgICAgICAgICAgdGhpcy5jb2x1bW5zID0gW11cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOSxcclxuICAgICAgICAgICAgICAgIHJlZmxlY3Rpdml0eTogMC45XHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnZlcnRpY2VzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAtMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIC0xLFxyXG4gICAgICAgICAgICAgICAgMSwgLTEsIDEsXHJcbiAgICAgICAgICAgICAgICAxLCAtMSwgMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIDEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAxLFxyXG4gICAgICAgICAgICAgICAgLTEsIC0xLCAtMSxcclxuICAgICAgICAgICAgICAgIC0xLCAtMSwgLTEsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICB0aGlzLmN1YmVTaXplID0gMlxyXG4gICAgICAgICAgICB0aGlzLnRhcmdldFNpemUgPSA1XHJcbiAgICAgICAgICAgIHRoaXMudmlldyA9IGZhbHNlXHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8ucG9zaXRpb24pIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb24uY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0ucG9zaXRpb25dIHx8IGRhdGEudHJhbnNmb3JtLnBvc2l0aW9uKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGlmIChkYXRhLnRyYW5zZm9ybT8uc2NhbGUpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2NhbGUuY29weSh0ZW1wbGF0ZXNbZGF0YS50cmFuc2Zvcm0uc2NhbGVdIHx8IGRhdGEudHJhbnNmb3JtLnNjYWxlKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgbWF4KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbWF4XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgbWF4KHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fbWF4ID0gdlxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMuZm9yRWFjaChjID0+IHtcclxuICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMoYy5jdWJlLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24sIGluZGljZXNUb01vdmUsIChjLnZhbHVlIC8gdGhpcy5fbWF4KSAqIDEwKVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IHZhbHVlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZGF0YS52YWx1ZXNcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCB2YWx1ZXModmFsKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHZhbClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcyA9IHZhbFxyXG5cclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHYgPSB0aGlzLmRhdGEudmFsdWVzW2ldXHJcbiAgICAgICAgICAgICAgICB2LmNvbG9yID0gbmV3IENvbG9yKHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KHYuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sdW1uID0ge1xyXG4gICAgICAgICAgICAgICAgICAgIGN1YmUsIHZhbHVlOiB2LnZhbHVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaChjb2x1bW4pXHJcbiAgICAgICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSBpICogdGhpcy5jdWJlU2l6ZVxyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucGxheShjdWJlLCB2LnZhbHVlLCAnJywgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXQoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuY29sdW1ucy5tYXAoYyA9PiB7XHJcbiAgICAgICAgICAgICAgICBNb3ZlUG9zaXRpb25zKGMuY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCAtMSlcclxuICAgICAgICAgICAgfSlcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFuKCkge1xyXG4gICAgICAgICAgICB3aGlsZSAodGhpcy5jaGlsZHJlbi5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLmNoaWxkcmVuWzBdKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMubGVuZ3RoID0gMFxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpXHJcblxyXG5cclxuICAgICAgICAgICAgbGV0IGMgPSAwXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5kYXRhLnZhbHVlcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZCA9IHRoaXMuZGF0YS52YWx1ZXNbaV1cclxuICAgICAgICAgICAgICAgIGlmICghZC5jb2xvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIGQuY29sb3IgPSByYWluYm93Q29sb3JzW2MrK11cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGlmIChjID4gcmFpbmJvd0NvbG9ycy5sZW5ndGggLSAxKVxyXG4gICAgICAgICAgICAgICAgICAgIGMgPSAwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IHRoaXMuY3JlYXRlQ3ViZUdlb21ldHJ5KGQuY29sb3IpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBjdWJlID0gbmV3IE1lc2goZ2VvbWV0cnksIG1hdGVyaWFsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5hZGQoY3ViZSlcclxuICAgICAgICAgICAgICAgIHRoaXMuY29sdW1ucy5wdXNoKHtcclxuICAgICAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogZC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb2x1bW5zLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb2x1bW5zW2ldLmN1YmUucG9zaXRpb24ueCA9IGkgKiB0aGlzLmN1YmVTaXplXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvL2NvbnN0IHRvdGFsV2lkdGggPSB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemU7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS54ID0gTWF0aC5taW4oMSwgdGhpcy50YXJnZXRTaXplIC8gdG90YWxXaWR0aCk7XHJcbiAgICAgICAgICAgIC8vdGhpcy5zY2FsZS56ID0gdGhpcy5jdWJlU2l6ZSAvIHRoaXMuZGF0YS52YWx1ZXMubGVuZ3RoXHJcbiAgICAgICAgICAgIGNvbnN0IG9mZnNldFggPSAtKCh0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAvIDIpICogdGhpcy5jdWJlU2l6ZSkgKiB0aGlzLnNjYWxlLng7XHJcbiAgICAgICAgICAgIHRoaXMucG9zaXRpb24ueCA9IG9mZnNldFg7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnQoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgYWRkVmFsdWUoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogMCwgY29sb3I6IG5ldyBDb2xvcignd2hpdGUnKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZGF0YS52YWx1ZXMucHVzaCh2KVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2VvbWV0cnkgPSB0aGlzLmNyZWF0ZUN1YmVHZW9tZXRyeSh2LmNvbG9yKVxyXG5cclxuICAgICAgICAgICAgY29uc3QgY3ViZSA9IG5ldyBNZXNoKGdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKVxyXG4gICAgICAgICAgICB0aGlzLmFkZChjdWJlKVxyXG4gICAgICAgICAgICB0aGlzLmNvbHVtbnMucHVzaCh7XHJcbiAgICAgICAgICAgICAgICBjdWJlLCB2YWx1ZTogdi52YWx1ZVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjdWJlLnBvc2l0aW9uLnggPSB0aGlzLmRhdGEudmFsdWVzLmxlbmd0aCAqIHRoaXMuY3ViZVNpemVcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNoYW5nZUNvbG9yKGVsLCBjb2wpIHtcclxuICAgICAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmRhdGEudmFsdWVzLmluZGV4T2YoZWwpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbHVtbiA9IHRoaXMuY29sdW1uc1tpbmRleF1cclxuICAgICAgICAgICAgZWwuY29sb3IgPSBjb2xcclxuICAgICAgICAgICAgY29uc3QgY29sQXR0ciA9IGNvbHVtbi5jdWJlLmdlb21ldHJ5LmdldEF0dHJpYnV0ZSgnY29sb3InKVxyXG4gICAgICAgICAgICBmb3IgKGxldCB2ID0gMDsgdiA8IGNvbEF0dHIuY291bnQ7IHYrKykge1xyXG4gICAgICAgICAgICAgICAgY29sQXR0ci5zZXRYWVoodiwgZWwuY29sb3IuciwgZWwuY29sb3IuZywgZWwuY29sb3IuYilcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb2xBdHRyLm5lZWRzVXBkYXRlID0gdHJ1ZVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY2hhbmdlVmFsdWUoZWwsIHZhbCkge1xyXG4gICAgICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZGF0YS52YWx1ZXMuaW5kZXhPZihlbClcclxuICAgICAgICAgICAgY29uc3QgY29sdW1uID0gdGhpcy5jb2x1bW5zW2luZGV4XVxyXG4gICAgICAgICAgICBlbC52YWx1ZSA9IHZhbFxyXG4gICAgICAgICAgICBjb25zdCB2ID0gKGVsLnZhbHVlIC8gdGhpcy5tYXgpICogMTBcclxuICAgICAgICAgICAgTW92ZVBvc2l0aW9ucyhjb2x1bW4uY3ViZS5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCB2KVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQ3ViZUdlb21ldHJ5KGNvbCkge1xyXG4gICAgICAgICAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0aWNlcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy52ZXJ0aWNlcylcclxuICAgICAgICAgICAgY29uc3QgaW5kaWNlcyA9IG5ldyBVaW50MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAyLCAwLCAyLCAzLCA0LCA1LCA2LCA0LCA2LCA3LFxyXG4gICAgICAgICAgICAgICAgOCwgOSwgMTAsIDgsIDEwLCAxMSwgMTIsIDEzLCAxNCwgMTIsIDE0LCAxNSxcclxuICAgICAgICAgICAgICAgIDE2LCAxNywgMTgsIDE2LCAxOCwgMTksIDIwLCAyMSwgMjIsIDIwLCAyMiwgMjMsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBjb25zdCBub3JtYWxzID0gbmV3IEZsb2F0MzJBcnJheShbXHJcbiAgICAgICAgICAgICAgICAwLCAwLCAxLCAwLCAwLCAxLFxyXG4gICAgICAgICAgICAgICAgMCwgMCwgMSwgMCwgMCwgMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDAsIC0xLCAwLCAwLCAtMSxcclxuICAgICAgICAgICAgICAgIDAsIDEsIDAsIDAsIDEsIDAsXHJcbiAgICAgICAgICAgICAgICAwLCAxLCAwLCAwLCAxLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMCwgLTEsIDAsIDAsIC0xLCAwLFxyXG4gICAgICAgICAgICAgICAgMSwgMCwgMCwgMSwgMCwgMCxcclxuICAgICAgICAgICAgICAgIDEsIDAsIDAsIDEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgICAgICAtMSwgMCwgMCwgLTEsIDAsIDAsXHJcbiAgICAgICAgICAgIF0pO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0aWNlcywgMykpO1xyXG4gICAgICAgICAgICBnZW9tZXRyeS5zZXRJbmRleChuZXcgQnVmZmVyQXR0cmlidXRlKGluZGljZXMsIDEpKTtcclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdub3JtYWwnLCBuZXcgQnVmZmVyQXR0cmlidXRlKG5vcm1hbHMsIDMpKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW11cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBnZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheShjb2xvcnMpLCAzKSlcclxuICAgICAgICAgICAgcmV0dXJuIGdlb21ldHJ5O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIC8qdGhpcy51cGRhdGUgPSAodCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgICAgICAvL3RoaXMudHdlZW5ncm91cC51cGRhdGUodCk7XHJcbiAgICAgICAgICAgIH0qL1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY29sdW1ucy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgYyA9IHRoaXMuY29sdW1uc1tpXVxyXG4gICAgICAgICAgICAgICAgdGhpcy5wbGF5KGMuY3ViZSwgYy52YWx1ZSwgYy5sYWJlbCwgaSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVsb2FkKGRhdGEpIHtcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUgPSAoKSA9PiB7IH1cclxuICAgICAgICAgICAgY29uc3QgdHdlZW5zID0gW10vL3RoaXMudHdlZW5ncm91cC5nZXRBbGwoKVxyXG4gICAgICAgICAgICB0d2VlbnMuZm9yRWFjaCh0ID0+IHtcclxuICAgICAgICAgICAgICAgIHQuc3RvcCgpXHJcbiAgICAgICAgICAgIH0pXHJcblxyXG4gICAgICAgICAgICB0aGlzLnJlc2V0KClcclxuICAgICAgICAgICAgdGhpcy5kYXRhLnZhbHVlcyA9IGRhdGEudmFsdWVzXHJcbiAgICAgICAgICAgIHRoaXMuY2xlYW4oKVxyXG4gICAgICAgICAgICB0aGlzLmluaXQoKVxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHBsYXkobWVzaCwgdmFsLCBsYWJlbCwgZGVsYXkgPSAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGVkID0geyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgIGdzYXAudG8oYW5pbWF0ZWQsIHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiAodmFsIC8gdGhpcy5tYXgpICogMTAsXHJcbiAgICAgICAgICAgICAgICBkdXJhdGlvbjogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVsYXk6IGRlbGF5ICogMC4wNSxcclxuICAgICAgICAgICAgICAgIG9uU3RhcnQ6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBvblVwZGF0ZTogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE1vdmVQb3NpdGlvbnMobWVzaC5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLCBpbmRpY2VzVG9Nb3ZlLCBhbmltYXRlZC52YWx1ZSlcclxuICAgICAgICAgICAgICAgICAgICAvL21vZGVsW3Byb3BdID0gY3VycmVudC52YWx1ZVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIG9uQ29tcGxldGU6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgb25SZXBlYXQ6ICgpID0+IHtcclxuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuXHJcblxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9