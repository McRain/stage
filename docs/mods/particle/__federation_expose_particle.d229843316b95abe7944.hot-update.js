"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/models/fire.js":
/*!****************************!*\
  !*** ./src/models/fire.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FireParticles)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");




const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

const _emmiters = [{
    label: "Plane",
    type: three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry,
    args: [5, 1, 10, 1]
}]

function FireParticles() {
    return class FireParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor({
            count = 1000,
            minSize = 0.5,
            maxSize = 2,
            speed = 1.0
        } = {}) {
            super();
            this.type = "FireParticles";
            this.count = count;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.speed = speed;
            this.enabled = false
            this._emmiterMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ wireframe: true })
            this._emmiter = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(1, 1, 2, 2), this._emmiterMaterial)
            this._emmiter.isElementHelper = true
            this.add(this._emmiter)
        }

        get emmiter() {
            return this._emmiter
        }

        set emmiter(v) {
            this._emmiter = v
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        stop() {
            if (!this.enabled)
                return
            this.enabled = false
            this.points.parent.remove(this.points)
        }

        start() {
            if (this.geometry) {
                return
            }
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            const color1 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffaa00)
            const color2 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff0000)

            // массивы
            const positions = new Float32Array(this.count * 3);
            const lifetimes = new Float32Array(this.count);
            const sizes = new Float32Array(this.count);

            // если есть геометрия-источник
            let srcPositions = null;

            //if (!this.parent.isScene) {
            /*let target
            this.parent.traverse(m => {
                if (!target && m.isMesh) {
                    target = m.geometry
                    return
                }
            })
            const posAttr = target.getAttribute("position");
            srcPositions = posAttr.array;*/
            /*} else {*/
            /*if (this._emmiter) {
                const el = Object.values(window.Factory.Elements).find(e => e.path === this._emmiter)
                const posAttr = el.geometry.getAttribute("position");
                srcPositions = posAttr.array;
            } else {*/
            const posAttr = this._emmiter.geometry.getAttribute("position");
            srcPositions = posAttr.array;
            //}

            /*}*/

            for (let i = 0; i < this.count; i++) {
                if (srcPositions) {
                    // случайная вершина из геометрии
                    const idx = Math.floor(Math.random() * (srcPositions.length / 3));
                    positions[i * 3] = srcPositions[idx * 3];
                    positions[i * 3 + 1] = srcPositions[idx * 3 + 1];
                    positions[i * 3 + 2] = srcPositions[idx * 3 + 2];
                } else {
                    // fallback — просто точка с шумом
                    positions[i * 3] = (Math.random() - 0.5);
                    positions[i * 3 + 1] = 0;
                    positions[i * 3 + 2] = (Math.random() - 0.5);
                }

                lifetimes[i] = Math.random();
                sizes[i] = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.lerp(this.minSize, this.maxSize, Math.random());
            }

            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aLifetime", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(lifetimes, 1));
            this.geometry.setAttribute("aSize", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                uniforms: {
                    uTime: { value: 0 },
                    uColor1: { value: color1 },
                    uColor2: { value: color2 }
                },
                vertexShader: `
        attribute float aLifetime;
        attribute float aSize;
        uniform float uTime;
        varying float vLifetime;
        void main() {
          float age = mod(uTime + aLifetime, 1.0);
          vec3 pos = position;
          pos.y += age * 3.0;
          vLifetime = 1.0 - age;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * (300.0 / -mvPosition.z);
        }
      `,
                fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vLifetime;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          vec3 color = mix(uColor2, uColor1, vLifetime);
          gl_FragColor = vec4(color, vLifetime);
        }
      `
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            //window.Project.Root.add(this.points);
            this.add(this.points)

            this.time = 0;
            this.enabled = true
            this.update()
        }

        update() {
            if (!this.enabled)
                return
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();

            this.time += delta * this.speed;
            this.material.uniforms.uTime.value = this.time;
        }
    }
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5kMjI5ODQzMzE2Yjk1YWJlNzk0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCZTtBQUNmO0FBQ2tEO0FBQ2xEO0FBQ0Esa0JBQWtCLHdDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0RBQWE7QUFDdkI7QUFDQSxDQUFDO0FBQ0Q7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0RBQWlCLEdBQUcsaUJBQWlCO0FBQzdFLGdDQUFnQyx1Q0FBSSxLQUFLLGdEQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QywrQkFBK0Isd0NBQUs7QUFDcEMsK0JBQStCLHdDQUFLO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EseUNBQXlDO0FBQ3pDLGdCQUFnQixNQUFNO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxNQUFNO0FBQ3BCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQVM7QUFDcEM7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSx3REFBd0Qsa0RBQWU7QUFDdkUsb0RBQW9ELGtEQUFlO0FBQ25FO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkMsK0JBQStCLGVBQWU7QUFDOUMsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2ZpcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ29sb3IsXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgQm94R2VvbWV0cnksXHJcbiAgICBNYXRoVXRpbHMsXHJcbiAgICBTcGhlcmVHZW9tZXRyeSxcclxuICAgIFBsYW5lR2VvbWV0cnksXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5jb25zdCBfZW1taXRlcnMgPSBbe1xyXG4gICAgbGFiZWw6IFwiUGxhbmVcIixcclxuICAgIHR5cGU6IFBsYW5lR2VvbWV0cnksXHJcbiAgICBhcmdzOiBbNSwgMSwgMTAsIDFdXHJcbn1dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwMDAsXHJcbiAgICAgICAgICAgIG1pblNpemUgPSAwLjUsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSAyLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDEuMFxyXG4gICAgICAgIH0gPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkZpcmVQYXJ0aWNsZXNcIjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBtaW5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IHdpcmVmcmFtZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyID0gbmV3IE1lc2gobmV3IFBsYW5lR2VvbWV0cnkoMSwgMSwgMiwgMiksIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlci5pc0VsZW1lbnRIZWxwZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuX2VtbWl0ZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgZW1taXRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VtbWl0ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBlbW1pdGVyKHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlciA9IHZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnBhcmVudC5yZW1vdmUodGhpcy5wb2ludHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3IxID0gbmV3IENvbG9yKDB4ZmZhYTAwKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBuZXcgQ29sb3IoMHhmZjAwMDApXHJcblxyXG4gICAgICAgICAgICAvLyDQvNCw0YHRgdC40LLRi1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LXRgdC70Lgg0LXRgdGC0Ywg0LPQtdC+0LzQtdGC0YDQuNGPLdC40YHRgtC+0YfQvdC40LpcclxuICAgICAgICAgICAgbGV0IHNyY1Bvc2l0aW9ucyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvL2lmICghdGhpcy5wYXJlbnQuaXNTY2VuZSkge1xyXG4gICAgICAgICAgICAvKmxldCB0YXJnZXRcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQudHJhdmVyc2UobSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBtLmlzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG0uZ2VvbWV0cnlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTsqL1xyXG4gICAgICAgICAgICAvKn0gZWxzZSB7Ki9cclxuICAgICAgICAgICAgLyppZiAodGhpcy5fZW1taXRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBPYmplY3QudmFsdWVzKHdpbmRvdy5GYWN0b3J5LkVsZW1lbnRzKS5maW5kKGUgPT4gZS5wYXRoID09PSB0aGlzLl9lbW1pdGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IGVsLmdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgfSBlbHNlIHsqL1xyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gdGhpcy5fZW1taXRlci5nZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgLy99XHJcblxyXG4gICAgICAgICAgICAvKn0qL1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcmNQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDRgdC70YPRh9Cw0LnQvdCw0Y8g0LLQtdGA0YjQuNC90LAg0LjQtyDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3JjUG9zaXRpb25zLmxlbmd0aCAvIDMpKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gc3JjUG9zaXRpb25zW2lkeCAqIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIOKAlCDQv9GA0L7RgdGC0L4g0YLQvtGH0LrQsCDRgSDRiNGD0LzQvtC8XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWVzW2ldID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gTWF0aFV0aWxzLmxlcnAodGhpcy5taW5TaXplLCB0aGlzLm1heFNpemUsIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYUxpZmV0aW1lXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobGlmZXRpbWVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYVNpemVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMTogeyB2YWx1ZTogY29sb3IxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMjogeyB2YWx1ZTogY29sb3IyIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYUxpZmV0aW1lO1xyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhU2l6ZTtcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IHVUaW1lO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGFnZSA9IG1vZCh1VGltZSArIGFMaWZldGltZSwgMS4wKTtcclxuICAgICAgICAgIHZlYzMgcG9zID0gcG9zaXRpb247XHJcbiAgICAgICAgICBwb3MueSArPSBhZ2UgKiAzLjA7XHJcbiAgICAgICAgICB2TGlmZXRpbWUgPSAxLjAgLSBhZ2U7XHJcblxyXG4gICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3MsIDEuMCk7XHJcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYFxyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IxO1xyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IyO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGQgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICBpZiAoZCA+IDAuNSkgZGlzY2FyZDtcclxuICAgICAgICAgIHZlYzMgY29sb3IgPSBtaXgodUNvbG9yMiwgdUNvbG9yMSwgdkxpZmV0aW1lKTtcclxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHZMaWZldGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICAvL3dpbmRvdy5Qcm9qZWN0LlJvb3QuYWRkKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhICogdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IHRoaXMudGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9