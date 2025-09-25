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
            minSize = 10,
            maxSize = 40,
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
                const posAttr = new BoxGeo.getAttribute("position");
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
        }

        update(delta) {
            this.time += delta * this.speed;
            this.material.uniforms.uTime.value = this.time;
        }
    }
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS41YmFjZTRjYmU2NWFmNTU2MTk2My5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVdlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNkJBQTZCLFVBQVU7QUFDdkMsK0JBQStCLGVBQWU7QUFDOUMsK0JBQStCO0FBQy9CLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9maXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbCxcclxuICAgIENvbG9yLFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZ1xyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmVQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmlyZVBhcnRpY2xlcyBleHRlbmRzIFRIUkVFLk9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMzAwLFxyXG4gICAgICAgICAgICBtaW5TaXplID0gMTAsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSA0MCxcclxuICAgICAgICAgICAgc3BlZWQgPSAxLjAsXHJcbiAgICAgICAgICAgIGNvbG9yMSA9IG5ldyBUSFJFRS5Db2xvcigweGZmYWEwMCksXHJcbiAgICAgICAgICAgIGNvbG9yMiA9IG5ldyBUSFJFRS5Db2xvcigweGZmMDAwMCksXHJcbiAgICAgICAgICAgIHNvdXJjZUdlb21ldHJ5ID0gbnVsbCAvLyA8LS0g0YHRjtC00LAg0LzQvtC20L3QviDQv9C10YDQtdC00LDRgtGMINC70Y7QsdGD0Y4g0LPQtdC+0LzQtdGC0YDQuNGOXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IG1pblNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgVEhSRUUuQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC80LDRgdGB0LjQstGLXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWVzID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheShjb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQs9C10L7QvNC10YLRgNC40Y8t0LjRgdGC0L7Rh9C90LjQulxyXG4gICAgICAgICAgICBsZXQgc3JjUG9zaXRpb25zID0gbnVsbDtcclxuICAgICAgICAgICAgaWYgKHNvdXJjZUdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gc291cmNlR2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IG5ldyBCb3hHZW8uZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcmNQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDRgdC70YPRh9Cw0LnQvdCw0Y8g0LLQtdGA0YjQuNC90LAg0LjQtyDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3JjUG9zaXRpb25zLmxlbmd0aCAvIDMpKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gc3JjUG9zaXRpb25zW2lkeCAqIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIOKAlCDQv9GA0L7RgdGC0L4g0YLQvtGH0LrQsCDRgSDRiNGD0LzQvtC8XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWVzW2ldID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gVEhSRUUuTWF0aFV0aWxzLmxlcnAobWluU2l6ZSwgbWF4U2l6ZSwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhTGlmZXRpbWVcIiwgbmV3IFRIUkVFLkJ1ZmZlckF0dHJpYnV0ZShsaWZldGltZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgVEhSRUUuQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFRIUkVFLlNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogVEhSRUUuQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IxOiB7IHZhbHVlOiBjb2xvcjEgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IyOiB7IHZhbHVlOiBjb2xvcjIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhTGlmZXRpbWU7XHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgYWdlID0gbW9kKHVUaW1lICsgYUxpZmV0aW1lLCAxLjApO1xyXG4gICAgICAgICAgdmVjMyBwb3MgPSBwb3NpdGlvbjtcclxuICAgICAgICAgIHBvcy55ICs9IGFnZSAqIDMuMDtcclxuICAgICAgICAgIHZMaWZldGltZSA9IDEuMCAtIGFnZTtcclxuXHJcbiAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcclxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICBnbF9Qb2ludFNpemUgPSBhU2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjE7XHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjI7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgIGlmIChkID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgdmVjMyBjb2xvciA9IG1peCh1Q29sb3IyLCB1Q29sb3IxLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdkxpZmV0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBUSFJFRS5Qb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoZGVsdGEpIHtcclxuICAgICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhICogdGhpcy5zcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy51VGltZS52YWx1ZSA9IHRoaXMudGltZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9