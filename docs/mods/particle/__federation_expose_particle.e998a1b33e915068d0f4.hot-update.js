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
    return class FireParticles extends THREE.Object3D {
        constructor({
            count = 300,
            minSize = 0.25,
            maxSize = 2,
            speed = 1.0,
            color1 = new THREE.Color(0xffaa00),
            color2 = new THREE.Color(0xff0000),
            sourceGeometry = null // <-- сюда можно передать любую геометрию
        } = {}) {
            super();

            this.count = count;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.speed = speed;

            this.geometry = new THREE.BufferGeometry();

            // массивы
            const positions = new Float32Array(count * 3);
            const lifetimes = new Float32Array(count);
            const sizes = new Float32Array(count);

            // если есть геометрия-источник
            let srcPositions = null;
            if (sourceGeometry) {
                const posAttr = sourceGeometry.getAttribute("position");
                srcPositions = posAttr.array;
            } else {
                const posAttr = new three__WEBPACK_IMPORTED_MODULE_0__.BoxGeometry(1, 1, 1).getAttribute("position");
                srcPositions = posAttr.array;
            }

            for (let i = 0; i < count; i++) {
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
                sizes[i] = THREE.MathUtils.lerp(minSize, maxSize, Math.random());
            }

            this.geometry.setAttribute("position", new THREE.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aLifetime", new THREE.BufferAttribute(lifetimes, 1));
            this.geometry.setAttribute("aSize", new THREE.BufferAttribute(sizes, 1));

            this.material = new THREE.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                blending: THREE.AdditiveBlending,
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

            this.points = new THREE.Points(this.geometry, this.material);
            this.add(this.points);

            this.time = 0;

            this.update()
        }

        update() {
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();

            this.time += delta * this.speed;
            this.material.uniforms.uTime.value = this.time;
        }
    }
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lOTk4YTFiMzNlOTE1MDY4ZDBmNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVllO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkLG9DQUFvQyw4Q0FBVztBQUMvQztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsV0FBVztBQUN2QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QywrQkFBK0IsZUFBZTtBQUM5QywrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2ZpcmUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ29sb3IsXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgQm94R2VvbWV0cnlcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBUSFJFRS5PYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDMwMCxcclxuICAgICAgICAgICAgbWluU2l6ZSA9IDAuMjUsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSAyLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDEuMCxcclxuICAgICAgICAgICAgY29sb3IxID0gbmV3IFRIUkVFLkNvbG9yKDB4ZmZhYTAwKSxcclxuICAgICAgICAgICAgY29sb3IyID0gbmV3IFRIUkVFLkNvbG9yKDB4ZmYwMDAwKSxcclxuICAgICAgICAgICAgc291cmNlR2VvbWV0cnkgPSBudWxsIC8vIDwtLSDRgdGO0LTQsCDQvNC+0LbQvdC+INC/0LXRgNC10LTQsNGC0Ywg0LvRjtCx0YPRjiDQs9C10L7QvNC10YLRgNC40Y5cclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gbWluU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBUSFJFRS5CdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LzQsNGB0YHQuNCy0YtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZXMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50KTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINCz0LXQvtC80LXRgtGA0LjRjy3QuNGB0YLQvtGH0L3QuNC6XHJcbiAgICAgICAgICAgIGxldCBzcmNQb3NpdGlvbnMgPSBudWxsO1xyXG4gICAgICAgICAgICBpZiAoc291cmNlR2VvbWV0cnkpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc0F0dHIgPSBzb3VyY2VHZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gbmV3IEJveEdlb21ldHJ5KDEsIDEsIDEpLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3JjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0YHQu9GD0YfQsNC50L3QsNGPINCy0LXRgNGI0LjQvdCwINC40Lcg0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNyY1Bvc2l0aW9ucy5sZW5ndGggLyAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayDigJQg0L/RgNC+0YHRgtC+INGC0L7Rh9C60LAg0YEg0YjRg9C80L7QvFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpZmV0aW1lc1tpXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IFRIUkVFLk1hdGhVdGlscy5sZXJwKG1pblNpemUsIG1heFNpemUsIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYUxpZmV0aW1lXCIsIG5ldyBUSFJFRS5CdWZmZXJBdHRyaWJ1dGUobGlmZXRpbWVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYVNpemVcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBUSFJFRS5TaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IFRIUkVFLkFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMTogeyB2YWx1ZTogY29sb3IxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMjogeyB2YWx1ZTogY29sb3IyIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYUxpZmV0aW1lO1xyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhU2l6ZTtcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IHVUaW1lO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGFnZSA9IG1vZCh1VGltZSArIGFMaWZldGltZSwgMS4wKTtcclxuICAgICAgICAgIHZlYzMgcG9zID0gcG9zaXRpb247XHJcbiAgICAgICAgICBwb3MueSArPSBhZ2UgKiAzLjA7XHJcbiAgICAgICAgICB2TGlmZXRpbWUgPSAxLjAgLSBhZ2U7XHJcblxyXG4gICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3MsIDEuMCk7XHJcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYFxyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IxO1xyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IyO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGQgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICBpZiAoZCA+IDAuNSkgZGlzY2FyZDtcclxuICAgICAgICAgIHZlYzMgY29sb3IgPSBtaXgodUNvbG9yMiwgdUNvbG9yMSwgdkxpZmV0aW1lKTtcclxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHZMaWZldGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgVEhSRUUuUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGEgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=