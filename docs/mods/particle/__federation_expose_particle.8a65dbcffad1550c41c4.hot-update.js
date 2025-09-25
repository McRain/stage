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

            this.count = count;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.speed = speed;


        }

        start() {
            console.log("START FIRE")
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
            const posAttr = this.parent.children[0].geometry.getAttribute("position");
            srcPositions = posAttr.array;
            /*} else {
                const posAttr = new BoxGeometry(1, 1, 1).getAttribute("position");
                srcPositions = posAttr.array;
            }*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS44YTY1ZGJjZmZhZDE1NTBjNDFjNC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLHdDQUFLO0FBQ3BDLCtCQUErQix3Q0FBSztBQUNwQyxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDJCQUEyQiw0Q0FBUztBQUNwQztBQUNBO0FBQ0EsdURBQXVELGtEQUFlO0FBQ3RFLHdEQUF3RCxrREFBZTtBQUN2RSxvREFBb0Qsa0RBQWU7QUFDbkU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSw2QkFBNkIsVUFBVTtBQUN2QywrQkFBK0IsZUFBZTtBQUM5QywrQkFBK0I7QUFDL0IsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvZmlyZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDb2xvcixcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBCb3hHZW9tZXRyeSxcclxuICAgIE1hdGhVdGlsc1xyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmVQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmlyZVBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTAwMCxcclxuICAgICAgICAgICAgbWluU2l6ZSA9IDAuNSxcclxuICAgICAgICAgICAgbWF4U2l6ZSA9IDIsXHJcbiAgICAgICAgICAgIHNwZWVkID0gMS4wXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IG1pblNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuXHJcblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiU1RBUlQgRklSRVwiKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcjEgPSBuZXcgQ29sb3IoMHhmZmFhMDApXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG5ldyBDb2xvcigweGZmMDAwMClcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LzQsNGB0YHQuNCy0YtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmV0aW1lcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINCz0LXQvtC80LXRgtGA0LjRjy3QuNGB0YLQvtGH0L3QuNC6XHJcbiAgICAgICAgICAgIGxldCBzcmNQb3NpdGlvbnMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy9pZiAoIXRoaXMucGFyZW50LmlzU2NlbmUpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IHRoaXMucGFyZW50LmNoaWxkcmVuWzBdLmdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICAvKn0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gbmV3IEJveEdlb21ldHJ5KDEsIDEsIDEpLmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgfSovXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNyY1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINGB0LvRg9GH0LDQudC90LDRjyDQstC10YDRiNC40L3QsCDQuNC3INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChzcmNQb3NpdGlvbnMubGVuZ3RoIC8gMykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBzcmNQb3NpdGlvbnNbaWR4ICogM107XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sg4oCUINC/0YDQvtGB0YLQviDRgtC+0YfQutCwINGBINGI0YPQvNC+0LxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaWZldGltZXNbaV0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoVXRpbHMubGVycCh0aGlzLm1pblNpemUsIHRoaXMubWF4U2l6ZSwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhTGlmZXRpbWVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShsaWZldGltZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IxOiB7IHZhbHVlOiBjb2xvcjEgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IyOiB7IHZhbHVlOiBjb2xvcjIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhTGlmZXRpbWU7XHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgYWdlID0gbW9kKHVUaW1lICsgYUxpZmV0aW1lLCAxLjApO1xyXG4gICAgICAgICAgdmVjMyBwb3MgPSBwb3NpdGlvbjtcclxuICAgICAgICAgIHBvcy55ICs9IGFnZSAqIDMuMDtcclxuICAgICAgICAgIHZMaWZldGltZSA9IDEuMCAtIGFnZTtcclxuXHJcbiAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcclxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICBnbF9Qb2ludFNpemUgPSBhU2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjE7XHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjI7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgIGlmIChkID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgdmVjMyBjb2xvciA9IG1peCh1Q29sb3IyLCB1Q29sb3IxLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdkxpZmV0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==