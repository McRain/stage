"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/index.mf.js":
/*!*************************!*\
  !*** ./src/index.mf.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/starfields.js */ "./src/models/starfields.js");
/* harmony import */ var _models_part_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/part.js */ "./src/models/part.js");
/* harmony import */ var _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/cloud.js */ "./src/models/cloud.js");
/* harmony import */ var _models_fire_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/fire.js */ "./src/models/fire.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;






async function Init() {
    console.log("particle")
    if (App.engine.ready) {
        App.engine.Factory.RegisterElement("StarsField", _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Stars Field"
        })
        App.engine.Factory.RegisterElement("PointsField", _models_part_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Points Field"
        })
        App.engine.Factory.RegisterElement("Cloud", _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "Cloud Field"
        })
        App.engine.Factory.RegisterElement("Fire", _models_fire_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Fire Field"
        })
        if (!window.isEditor) {
            return
        }

        App.inspector.addToModels(["StarsField"], [
            {
                label: "Speed",
                head: {
                    component: "Float",
                    prop: "speed",
                    props: {
                        step: 0.1, min: 0.1, max: 10.0, decimals: 2,
                    },
                    state: true
                }
            }, {
                label: "Stars",
                head: {
                    component: "Float",
                    prop: "numStars",
                    props: {
                        step: 100, min: 100, max: 100000,
                        decimals: 0,
                    },

                    state: true
                }
            }, {
                label: "Size",
                head: {
                    component: "Float",
                    prop: "size",
                    props: {
                        step: 0.1, min: 0.1, max: 10, decimals: 2,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }, {
                label: "Radius",
                head: {
                    component: "Float",
                    prop: "radius",
                    props: {
                        step: 1, min: 1, max: 100, decimals: 0,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }
        ])

        App.inspector.addToModels(["Cloud"], [
            {
                label: "maxDistance",
                head: {
                    component: "Float",
                    prop: "maxDistance",
                    props: {
                        step: 0.1, min: 0.1, max: 100, decimals: 1,
                    },
                    state: true
                }
            }
        ])
    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ }),

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
            size = 0.15,
            spread = 1.5,
            speed = 0.01,
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
                blending: AdditiveBlending,
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
          pos.y += age * 3.0; // поднимаем вверх
          vLifetime = 1.0 - age;
          gl_Position = projectionMatrix * modelViewMatrix * vec4(pos, 1.0);
          gl_PointSize = uSize * (300.0 / -mvPosition.z);
        }
      `.replace("mvPosition", "modelViewMatrix * vec4(pos, 1.0)"), // чтобы PointSize зависел от перспективы
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5iMDkxNGQyOWY0NTg4YzliMGE0OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDTDtBQUNMO0FBQ0Y7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVCwwREFBMEQsdURBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Qsb0RBQW9ELHdEQUFLO0FBQ3pEO0FBQ0EsU0FBUztBQUNULG1EQUFtRCx1REFBSTtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE07Ozs7Ozs7Ozs7Ozs7Ozs7QUMxRmU7QUFDZjtBQUNrRDtBQUNsRDtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsdUNBQXVDLDJDQUFRO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsd0NBQUs7QUFDOUIseUJBQXlCLHdDQUFLO0FBQzlCLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFdBQVc7QUFDdkM7QUFDQSwwQ0FBMEM7QUFDMUM7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSx3REFBd0Qsa0RBQWU7QUFDdkU7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDLDZCQUE2QixhQUFhO0FBQzFDLCtCQUErQixlQUFlO0FBQzlDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9pbmRleC5tZi5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9maXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0YXJzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3N0YXJmaWVsZHMuanNcIlxyXG5pbXBvcnQgUG9pbnRzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3BhcnQuanNcIlxyXG5pbXBvcnQgQ2xvdWQgZnJvbSBcIi4vbW9kZWxzL2Nsb3VkLmpzXCJcclxuaW1wb3J0IEZpcmUgZnJvbSBcIi4vbW9kZWxzL2ZpcmUuanNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhcnRpY2xlXCIpXHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJTdGFyc0ZpZWxkXCIsIFN0YXJzRmllbGQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIlBvaW50c0ZpZWxkXCIsIFBvaW50c0ZpZWxkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlBvaW50cyBGaWVsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiQ2xvdWRcIiwgQ2xvdWQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ2xvdWQgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkZpcmVcIiwgRmlyZSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJGaXJlIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJTdGFyc0ZpZWxkXCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAuMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibnVtU3RhcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxMDAsIG1pbjogMTAwLCBtYXg6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAsIGRlY2ltYWxzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb251cGRhdGUodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZWJ1aWxkU3RhcmZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJhZGl1c1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwicmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSwgbWluOiAxLCBtYXg6IDEwMCwgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlYnVpbGRTdGFyZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ2xvdWRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibWF4RGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm1heERpc3RhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMDAsIGRlY2ltYWxzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIiwiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ29sb3JcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDMwMCxcclxuICAgICAgICAgICAgc2l6ZSA9IDAuMTUsXHJcbiAgICAgICAgICAgIHNwcmVhZCA9IDEuNSxcclxuICAgICAgICAgICAgc3BlZWQgPSAwLjAxLFxyXG4gICAgICAgICAgICBjb2xvcjEgPSBuZXcgQ29sb3IoMHhmZmFhMDApLFxyXG4gICAgICAgICAgICBjb2xvcjIgPSBuZXcgQ29sb3IoMHhmZjAwMDApXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3ByZWFkID0gc3ByZWFkO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblxyXG4gICAgICAgICAgICAvLyDQk9C10L7QvNC10YLRgNC40Y8g0Lgg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KGNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmV0aW1lcyA9IG5ldyBGbG9hdDMyQXJyYXkoY291bnQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSAwOyAvLyDRgdGC0LDRgNGCINGB0L3QuNC30YNcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogc3ByZWFkO1xyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWVzW2ldID0gTWF0aC5yYW5kb20oKTsgLy8g0L7RgiAwINC00L4gMVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYUxpZmV0aW1lXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobGlmZXRpbWVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQnNCw0YLQtdGA0LjQsNC7INGH0LXRgNC10Lcg0YjQtdC50LTQtdGAINC00LvRjyDQv9C70LDQstC90L7Qs9C+INC+0LPQvdGPXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVTaXplOiB7IHZhbHVlOiBzaXplIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMTogeyB2YWx1ZTogY29sb3IxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMjogeyB2YWx1ZTogY29sb3IyIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYUxpZmV0aW1lO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCB1U2l6ZTtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBhZ2UgPSBtb2QodVRpbWUgKyBhTGlmZXRpbWUsIDEuMCk7XHJcbiAgICAgICAgICB2ZWMzIHBvcyA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgcG9zLnkgKz0gYWdlICogMy4wOyAvLyDQv9C+0LTQvdC40LzQsNC10Lwg0LLQstC10YDRhVxyXG4gICAgICAgICAgdkxpZmV0aW1lID0gMS4wIC0gYWdlO1xyXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3MsIDEuMCk7XHJcbiAgICAgICAgICBnbF9Qb2ludFNpemUgPSB1U2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgYC5yZXBsYWNlKFwibXZQb3NpdGlvblwiLCBcIm1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zLCAxLjApXCIpLCAvLyDRh9GC0L7QsdGLIFBvaW50U2l6ZSDQt9Cw0LLQuNGB0LXQuyDQvtGCINC/0LXRgNGB0L/QtdC60YLQuNCy0YtcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjE7XHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjI7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgIGlmIChkID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgdmVjMyBjb2xvciA9IG1peCh1Q29sb3IyLCB1Q29sb3IxLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdkxpZmV0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==