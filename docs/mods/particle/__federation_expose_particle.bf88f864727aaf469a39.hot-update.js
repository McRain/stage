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
            window.Project.Root.add(this._emmiter)
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
            this.enabled = false
            this.points.parent.remove(this.points)
        }

        start() {
            console.log(window.Project.Root)
            const color1 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffaa00)
            const color2 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff0000)
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

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
            const posAttr = new three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry(5, 1, 20, 20).getAttribute("position");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5iZjg4Zjg2NDcyN2FhZjQ2OWEzOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCZTtBQUNmO0FBQ2tEO0FBQ2xEO0FBQ0Esa0JBQWtCLHdDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0RBQWE7QUFDdkI7QUFDQSxDQUFDO0FBQ0Q7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3Q0FBd0Msb0RBQWlCLEdBQUcsaUJBQWlCO0FBQzdFLGdDQUFnQyx1Q0FBSSxLQUFLLGdEQUFhO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0Isd0NBQUs7QUFDcEMsK0JBQStCLHdDQUFLO0FBQ3BDLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlDQUF5QztBQUN6QyxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQixnQ0FBZ0MsZ0RBQWE7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsZUFBZTtBQUNmO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwyQkFBMkIsNENBQVM7QUFDcEM7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSx3REFBd0Qsa0RBQWU7QUFDdkUsb0RBQW9ELGtEQUFlO0FBQ25FO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkMsK0JBQStCLGVBQWU7QUFDOUMsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2ZpcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ29sb3IsXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgQm94R2VvbWV0cnksXHJcbiAgICBNYXRoVXRpbHMsXHJcbiAgICBTcGhlcmVHZW9tZXRyeSxcclxuICAgIFBsYW5lR2VvbWV0cnksXHJcbiAgICBNZXNoLFxyXG4gICAgTWVzaEJhc2ljTWF0ZXJpYWxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5jb25zdCBfZW1taXRlcnMgPSBbe1xyXG4gICAgbGFiZWw6IFwiUGxhbmVcIixcclxuICAgIHR5cGU6IFBsYW5lR2VvbWV0cnksXHJcbiAgICBhcmdzOiBbNSwgMSwgMTAsIDFdXHJcbn1dXHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwMDAsXHJcbiAgICAgICAgICAgIG1pblNpemUgPSAwLjUsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSAyLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDEuMFxyXG4gICAgICAgIH0gPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkZpcmVQYXJ0aWNsZXNcIjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBtaW5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IHdpcmVmcmFtZTogdHJ1ZSB9KVxyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyID0gbmV3IE1lc2gobmV3IFBsYW5lR2VvbWV0cnkoMSwgMSwgMiwgMiksIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlci5pc0VsZW1lbnRIZWxwZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIHdpbmRvdy5Qcm9qZWN0LlJvb3QuYWRkKHRoaXMuX2VtbWl0ZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXQgZW1taXRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VtbWl0ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBlbW1pdGVyKHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlciA9IHZcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0b3AoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnBhcmVudC5yZW1vdmUodGhpcy5wb2ludHMpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydCgpIHtcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LlByb2plY3QuUm9vdClcclxuICAgICAgICAgICAgY29uc3QgY29sb3IxID0gbmV3IENvbG9yKDB4ZmZhYTAwKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBuZXcgQ29sb3IoMHhmZjAwMDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC80LDRgdGB0LjQstGLXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQs9C10L7QvNC10YLRgNC40Y8t0LjRgdGC0L7Rh9C90LjQulxyXG4gICAgICAgICAgICBsZXQgc3JjUG9zaXRpb25zID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgKCF0aGlzLnBhcmVudC5pc1NjZW5lKSB7XHJcbiAgICAgICAgICAgIC8qbGV0IHRhcmdldFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC50cmF2ZXJzZShtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0ICYmIG0uaXNNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbS5nZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5OyovXHJcbiAgICAgICAgICAgIC8qfSBlbHNlIHsqL1xyXG4gICAgICAgICAgICAvKmlmICh0aGlzLl9lbW1pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IE9iamVjdC52YWx1ZXMod2luZG93LkZhY3RvcnkuRWxlbWVudHMpLmZpbmQoZSA9PiBlLnBhdGggPT09IHRoaXMuX2VtbWl0ZXIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gZWwuZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICB9IGVsc2UgeyovXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc0F0dHIgPSBuZXcgUGxhbmVHZW9tZXRyeSg1LCAxLCAyMCwgMjApLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIC8qfSovXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNyY1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINGB0LvRg9GH0LDQudC90LDRjyDQstC10YDRiNC40L3QsCDQuNC3INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChzcmNQb3NpdGlvbnMubGVuZ3RoIC8gMykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBzcmNQb3NpdGlvbnNbaWR4ICogM107XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sg4oCUINC/0YDQvtGB0YLQviDRgtC+0YfQutCwINGBINGI0YPQvNC+0LxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaWZldGltZXNbaV0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoVXRpbHMubGVycCh0aGlzLm1pblNpemUsIHRoaXMubWF4U2l6ZSwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhTGlmZXRpbWVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShsaWZldGltZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IxOiB7IHZhbHVlOiBjb2xvcjEgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IyOiB7IHZhbHVlOiBjb2xvcjIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhTGlmZXRpbWU7XHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgYWdlID0gbW9kKHVUaW1lICsgYUxpZmV0aW1lLCAxLjApO1xyXG4gICAgICAgICAgdmVjMyBwb3MgPSBwb3NpdGlvbjtcclxuICAgICAgICAgIHBvcy55ICs9IGFnZSAqIDMuMDtcclxuICAgICAgICAgIHZMaWZldGltZSA9IDEuMCAtIGFnZTtcclxuXHJcbiAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcclxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICBnbF9Qb2ludFNpemUgPSBhU2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjE7XHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjI7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgIGlmIChkID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgdmVjMyBjb2xvciA9IG1peCh1Q29sb3IyLCB1Q29sb3IxLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdkxpZmV0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIC8vd2luZG93LlByb2plY3QuUm9vdC5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGEgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=