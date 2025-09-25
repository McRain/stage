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
            size = 1,
            spread = 1.5,
            speed = 0.5,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS41MmQzNmY0MGYwZTk1ZDBhMGQ4ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLHdDQUFLO0FBQzlCLHlCQUF5Qix3Q0FBSztBQUM5QixVQUFVLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixXQUFXO0FBQ3ZDO0FBQ0EsMENBQTBDO0FBQzFDO0FBQ0EsOENBQThDO0FBQzlDO0FBQ0E7QUFDQSx1REFBdUQsa0RBQWU7QUFDdEUsd0RBQXdELGtEQUFlO0FBQ3ZFO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSw2QkFBNkIsVUFBVTtBQUN2Qyw2QkFBNkIsYUFBYTtBQUMxQywrQkFBK0IsZUFBZTtBQUM5QywrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwREFBMEQ7QUFDMUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvZmlyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDb2xvcixcclxuICAgIEFkZGl0aXZlQmxlbmRpbmdcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDMwMCxcclxuICAgICAgICAgICAgc2l6ZSA9IDEsXHJcbiAgICAgICAgICAgIHNwcmVhZCA9IDEuNSxcclxuICAgICAgICAgICAgc3BlZWQgPSAwLjUsXHJcbiAgICAgICAgICAgIGNvbG9yMSA9IG5ldyBDb2xvcigweGZmYWEwMCksXHJcbiAgICAgICAgICAgIGNvbG9yMiA9IG5ldyBDb2xvcigweGZmMDAwMClcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5zcHJlYWQgPSBzcHJlYWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuXHJcbiAgICAgICAgICAgIC8vINCT0LXQvtC80LXRgtGA0LjRjyDQuCDQv9C+0LfQuNGG0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWVzID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcHJlYWQ7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IDA7IC8vINGB0YLQsNGA0YIg0YHQvdC40LfRg1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiBzcHJlYWQ7XHJcbiAgICAgICAgICAgICAgICBsaWZldGltZXNbaV0gPSBNYXRoLnJhbmRvbSgpOyAvLyDQvtGCIDAg0LTQviAxXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhTGlmZXRpbWVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShsaWZldGltZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCc0LDRgtC10YDQuNCw0Lsg0YfQtdGA0LXQtyDRiNC10LnQtNC10YAg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0L7Qs9C90Y9cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdVNpemU6IHsgdmFsdWU6IHNpemUgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IxOiB7IHZhbHVlOiBjb2xvcjEgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IyOiB7IHZhbHVlOiBjb2xvcjIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhTGlmZXRpbWU7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCB1VGltZTtcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IHVTaXplO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGFnZSA9IG1vZCh1VGltZSArIGFMaWZldGltZSwgMS4wKTtcclxuICAgICAgICAgIHZlYzMgcG9zID0gcG9zaXRpb247XHJcbiAgICAgICAgICBwb3MueSArPSBhZ2UgKiAzLjA7IC8vINC/0L7QtNC90LjQvNCw0LXQvCDRh9Cw0YHRgtC40YbRiyDQstCy0LXRgNGFXHJcbiAgICAgICAgICB2TGlmZXRpbWUgPSAxLjAgLSBhZ2U7XHJcblxyXG4gICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3MsIDEuMCk7XHJcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgZ2xfUG9pbnRTaXplID0gdVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTsgLy8g0YfRgtC+0LHRiyDQt9Cw0LLQuNGB0LXQu9C+INC+0YIg0YDQsNGB0YHRgtC+0Y/QvdC40Y9cclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYFxyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IxO1xyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IyO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGQgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICBpZiAoZCA+IDAuNSkgZGlzY2FyZDsgLy8g0LTQtdC70LDQtdC8INC60YDRg9C20L7Rh9C10LpcclxuICAgICAgICAgIHZlYzMgY29sb3IgPSBtaXgodUNvbG9yMiwgdUNvbG9yMSwgdkxpZmV0aW1lKTtcclxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHZMaWZldGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGEgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=