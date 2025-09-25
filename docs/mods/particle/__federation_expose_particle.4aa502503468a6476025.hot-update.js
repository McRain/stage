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
            this._emmiter = null

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
            const posAttr = new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1, 10, 10).getAttribute("position");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40YWE1MDI1MDM0NjhhNjQ3NjAyNS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWNlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdDQUFLO0FBQ3BDLCtCQUErQix3Q0FBSztBQUNwQyxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSx5Q0FBeUM7QUFDekMsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLE1BQU07QUFDcEIsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFTO0FBQ3BDO0FBQ0E7QUFDQSx1REFBdUQsa0RBQWU7QUFDdEUsd0RBQXdELGtEQUFlO0FBQ3ZFLG9EQUFvRCxrREFBZTtBQUNuRTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsMEJBQTBCLG1EQUFnQjtBQUMxQztBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDLCtCQUErQixlQUFlO0FBQzlDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9maXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbCxcclxuICAgIENvbG9yLFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEJveEdlb21ldHJ5LFxyXG4gICAgTWF0aFV0aWxzLFxyXG4gICAgU3BoZXJlR2VvbWV0cnlcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwMDAsXHJcbiAgICAgICAgICAgIG1pblNpemUgPSAwLjUsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSAyLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDEuMFxyXG4gICAgICAgIH0gPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkZpcmVQYXJ0aWNsZXNcIjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBtaW5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXIgPSBudWxsXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0IGVtbWl0ZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9lbW1pdGVyXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgZW1taXRlcih2KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXIgPSB2XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdG9wKCkge1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wYXJlbnQucmVtb3ZlKHRoaXMucG9pbnRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKHdpbmRvdy5Qcm9qZWN0LlJvb3QpXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMSA9IG5ldyBDb2xvcigweGZmYWEwMClcclxuICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbmV3IENvbG9yKDB4ZmYwMDAwKVxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQvNCw0YHRgdC40LLRi1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LXRgdC70Lgg0LXRgdGC0Ywg0LPQtdC+0LzQtdGC0YDQuNGPLdC40YHRgtC+0YfQvdC40LpcclxuICAgICAgICAgICAgbGV0IHNyY1Bvc2l0aW9ucyA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICAvL2lmICghdGhpcy5wYXJlbnQuaXNTY2VuZSkge1xyXG4gICAgICAgICAgICAvKmxldCB0YXJnZXRcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQudHJhdmVyc2UobSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBtLmlzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG0uZ2VvbWV0cnlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTsqL1xyXG4gICAgICAgICAgICAvKn0gZWxzZSB7Ki9cclxuICAgICAgICAgICAgLyppZiAodGhpcy5fZW1taXRlcikge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWwgPSBPYmplY3QudmFsdWVzKHdpbmRvdy5GYWN0b3J5LkVsZW1lbnRzKS5maW5kKGUgPT4gZS5wYXRoID09PSB0aGlzLl9lbW1pdGVyKVxyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IGVsLmdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgfSBlbHNlIHsqL1xyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gbmV3IFNwaGVyZUdlb21ldHJ5KDEsIDEwLCAxMCkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgLyp9Ki9cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3JjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0YHQu9GD0YfQsNC50L3QsNGPINCy0LXRgNGI0LjQvdCwINC40Lcg0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNyY1Bvc2l0aW9ucy5sZW5ndGggLyAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayDigJQg0L/RgNC+0YHRgtC+INGC0L7Rh9C60LAg0YEg0YjRg9C80L7QvFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpZmV0aW1lc1tpXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IE1hdGhVdGlscy5sZXJwKHRoaXMubWluU2l6ZSwgdGhpcy5tYXhTaXplLCBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFMaWZldGltZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKGxpZmV0aW1lcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFTaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVDb2xvcjE6IHsgdmFsdWU6IGNvbG9yMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVDb2xvcjI6IHsgdmFsdWU6IGNvbG9yMiB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgXHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFMaWZldGltZTtcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYVNpemU7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCB1VGltZTtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBhZ2UgPSBtb2QodVRpbWUgKyBhTGlmZXRpbWUsIDEuMCk7XHJcbiAgICAgICAgICB2ZWMzIHBvcyA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgcG9zLnkgKz0gYWdlICogMy4wO1xyXG4gICAgICAgICAgdkxpZmV0aW1lID0gMS4wIC0gYWdlO1xyXG5cclxuICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zLCAxLjApO1xyXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IGFTaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMTtcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMjtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBkID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgaWYgKGQgPiAwLjUpIGRpc2NhcmQ7XHJcbiAgICAgICAgICB2ZWMzIGNvbG9yID0gbWl4KHVDb2xvcjIsIHVDb2xvcjEsIHZMaWZldGltZSk7XHJcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgLy93aW5kb3cuUHJvamVjdC5Sb290LmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==