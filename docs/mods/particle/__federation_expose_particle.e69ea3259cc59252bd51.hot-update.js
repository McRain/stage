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
            count = 300,
            size = 1.5,
            spread = 2,
            speed = 0.75,
            color1 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffaa00),
            color2 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff0000)
        } = {}) {
            super();

            this.count = count;
            this.size = size;
            this.spread = spread;
            this.speed = speed;

            // Геометрия и позиции
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            const positions = new Float32Array(count * 3);
            const lifetimes = new Float32Array(count);

            for (let i = 0; i < count; i++) {
                positions[i * 3] = (Math.random() - 0.5) * spread;
                positions[i * 3 + 1] = 0; // старт снизу
                positions[i * 3 + 2] = (Math.random() - 0.5) * spread;
                lifetimes[i] = Math.random(); // от 0 до 1
            }

            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aLifetime", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(lifetimes, 1));

            // Материал через шейдер для плавного огня
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                uniforms: {
                    uTime: { value: 0 },
                    uSize: { value: size },
                    uColor1: { value: color1 },
                    uColor2: { value: color2 }
                },
                vertexShader: `
        attribute float aLifetime;
        uniform float uTime;
        uniform float uSize;
        varying float vLifetime;
        void main() {
          float age = mod(uTime + aLifetime, 1.0);
          vec3 pos = position;
          pos.y += age * 3.0; // поднимаем частицы вверх
          vLifetime = 1.0 - age;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = uSize * (300.0 / -mvPosition.z); // чтобы зависело от расстояния
        }
      `,
                fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vLifetime;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard; // делаем кружочек
          vec3 color = mix(uColor2, uColor1, vLifetime);
          gl_FragColor = vec4(color, vLifetime);
        }
      `
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lNjllYTMyNTljYzU5MjUyYmQ1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFLO0FBQzlCLHlCQUF5Qix3Q0FBSztBQUM5QixVQUFVLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSx1REFBdUQsa0RBQWU7QUFDdEUsd0RBQXdELGtEQUFlO0FBQ3ZFO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSw2QkFBNkIsVUFBVTtBQUN2Qyw2QkFBNkIsYUFBYTtBQUMxQywrQkFBK0IsZUFBZTtBQUM5QywrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvZmlyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDb2xvcixcclxuICAgIEFkZGl0aXZlQmxlbmRpbmdcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDMwMCxcclxuICAgICAgICAgICAgc2l6ZSA9IDEuNSxcclxuICAgICAgICAgICAgc3ByZWFkID0gMixcclxuICAgICAgICAgICAgc3BlZWQgPSAwLjc1LFxyXG4gICAgICAgICAgICBjb2xvcjEgPSBuZXcgQ29sb3IoMHhmZmFhMDApLFxyXG4gICAgICAgICAgICBjb2xvcjIgPSBuZXcgQ29sb3IoMHhmZjAwMDApXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyDQk9C10L7QvNC10YLRgNC40Y8g0Lgg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmV0aW1lcyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSAwOyAvLyDRgdGC0LDRgNGCINGB0L3QuNC30YNcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkO1xyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWVzW2ldID0gTWF0aC5yYW5kb20oKTsgLy8g0L7RgiAwINC00L4gMVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYUxpZmV0aW1lXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobGlmZXRpbWVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQnNCw0YLQtdGA0LjQsNC7INGH0LXRgNC10Lcg0YjQtdC50LTQtdGAINC00LvRjyDQv9C70LDQstC90L7Qs9C+INC+0LPQvdGPXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVTaXplOiB7IHZhbHVlOiBzaXplIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMTogeyB2YWx1ZTogY29sb3IxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMjogeyB2YWx1ZTogY29sb3IyIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYUxpZmV0aW1lO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCB1U2l6ZTtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBhZ2UgPSBtb2QodVRpbWUgKyBhTGlmZXRpbWUsIDEuMCk7XHJcbiAgICAgICAgICB2ZWMzIHBvcyA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgcG9zLnkgKz0gYWdlICogMy4wOyAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0YfQsNGB0YLQuNGG0Ysg0LLQstC10YDRhVxyXG4gICAgICAgICAgdkxpZmV0aW1lID0gMS4wIC0gYWdlO1xyXG5cclxuICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zLCAxLjApO1xyXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IHVTaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7IC8vINGH0YLQvtCx0Ysg0LfQsNCy0LjRgdC10LvQviDQvtGCINGA0LDRgdGB0YLQvtGP0L3QuNGPXHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMTtcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMjtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBkID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgaWYgKGQgPiAwLjUpIGRpc2NhcmQ7IC8vINC00LXQu9Cw0LXQvCDQutGA0YPQttC+0YfQtdC6XHJcbiAgICAgICAgICB2ZWMzIGNvbG9yID0gbWl4KHVDb2xvcjIsIHVDb2xvcjEsIHZMaWZldGltZSk7XHJcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhICogdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IHRoaXMudGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9