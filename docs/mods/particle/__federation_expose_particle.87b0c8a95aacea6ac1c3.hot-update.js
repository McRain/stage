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

/***/ "./src/models/cloud.js":
/*!*****************************!*\
  !*** ./src/models/cloud.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudParticles)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");




const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function CloudParticles() {
    return class CloudParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor({
            count = 5000,
            color = 0x0000ff,
            direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
            growthSpeed = 0.01,
            maxDistance = 25,
            spawnRadius = 1,
            size = 0.5
        } = {}) {
            super();
            this.type = "Cloud";

            this.count = count;
            this.color = color;
            this.direction = direction.clone().normalize();
            this.growthSpeed = growthSpeed;
            this.maxDistance = maxDistance;
            this.spawnRadius = spawnRadius;
            this.size = size;

            // здесь храним именно мировые позиции
            this.worldPositions = new Array(this.count);
            this.sizes = new Float32Array(this.count);

            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            for (let i = 0; i < this.count; i++) {
                this.worldPositions[i] = this.randomSpawn(origin);
                this.sizes[i] = this.size;
            }

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute(
                "position",
                new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(this.count * 3), 3)
            );
            this.geometry.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.sizes, 1));


            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)()//this.createParticleTexture();
            /*this.material = new ShaderMaterial({
                uniforms: {
                    pointTexture: { value: texture },
                    time: { value: 0 }
                },
                vertexShader: this.getVertexShader(),
                fragmentShader: this.getFragmentShader(),
                transparent: true,
                //blending: AdditiveBlending,
                depthWrite: false
            });*/

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                map: texture,
                color: this.color,
                size: this.size,
                transparent: true,
                opacity: 0.5,
                depthWrite: false
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points);

            this.update();
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        randomSpawn(origin) {
            const r = this.spawnRadius * Math.random();
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            return new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                origin.x + r * Math.sin(phi) * Math.cos(theta),
                origin.y + r * Math.sin(phi) * Math.sin(theta),
                origin.z + r * Math.cos(phi)
            );
        }

        update() {
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            // обновляем мир
            for (let i = 0; i < this.count; i++) {
                const p = this.worldPositions[i];

                // движение
                p.addScaledVector(this.direction, delta);

                // рост
                this.sizes[i] += this.growthSpeed * delta;

                // проверка расстояния
                if (p.distanceTo(origin) > this.maxDistance) {
                    this.worldPositions[i] = this.randomSpawn(origin)
                    this.sizes[i] = this.size;

                }
            }

            // преобразуем мировые координаты в локальные для геометрии
            const localPositions = this.geometry.attributes.position.array;
            const worldToLocal = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            for (let i = 0; i < this.count; i++) {
                const p = this.worldPositions[i];
                worldToLocal.copy(p).sub(origin); // локальная = мировая - позиция родителя
                localPositions[i * 3] = worldToLocal.x;
                localPositions[i * 3 + 1] = worldToLocal.y;
                localPositions[i * 3 + 2] = worldToLocal.z;
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.size.needsUpdate = true;
        }
    };
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS44N2IwYzhhOTVhYWNlYTZhYzFjMy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnQztBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBMkM7QUFDSTtBQUNMO0FBQ0w7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVCwwREFBMEQsdURBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Qsb0RBQW9ELHdEQUFLO0FBQ3pEO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7Ozs7Ozs7Ozs7OztBQ3hGZTtBQUNmO0FBQ29FO0FBQ3BFO0FBQ0Esa0JBQWtCLHdDQUFLO0FBQ3ZCO0FBQ2U7QUFDZix3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQSxvQkFBb0Isa0RBQWU7QUFDbkM7QUFDQSxtREFBbUQsa0RBQWU7QUFDbEU7QUFDQTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQ7QUFDQTtBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxFQUFFO0FBQ2Y7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBDQUFPO0FBQzVDLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL2luZGV4Lm1mLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0YXJzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3N0YXJmaWVsZHMuanNcIlxyXG5pbXBvcnQgUG9pbnRzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3BhcnQuanNcIlxyXG5pbXBvcnQgQ2xvdWQgZnJvbSBcIi4vbW9kZWxzL2Nsb3VkLmpzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXJ0aWNsZVwiKVxyXG4gICAgaWYgKEFwcC5lbmdpbmUucmVhZHkpIHtcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiU3RhcnNGaWVsZFwiLCBTdGFyc0ZpZWxkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJzIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJQb2ludHNGaWVsZFwiLCBQb2ludHNGaWVsZCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJQb2ludHMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkNsb3VkXCIsIENsb3VkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNsb3VkIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJTdGFyc0ZpZWxkXCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAuMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibnVtU3RhcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxMDAsIG1pbjogMTAwLCBtYXg6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAsIGRlY2ltYWxzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb251cGRhdGUodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZWJ1aWxkU3RhcmZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJhZGl1c1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwicmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSwgbWluOiAxLCBtYXg6IDEwMCwgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlYnVpbGRTdGFyZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ2xvdWRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibWF4RGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm1heERpc3RhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMDAsIGRlY2ltYWxzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIiwiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlLCBnZXRDbG91ZE1hdGVyaWFsIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgY291bnQgPSA1MDAwLFxyXG4gICAgICAgICAgICBjb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgICAgICAgZ3Jvd3RoU3BlZWQgPSAwLjAxLFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IDI1LFxyXG4gICAgICAgICAgICBzcGF3blJhZGl1cyA9IDEsXHJcbiAgICAgICAgICAgIHNpemUgPSAwLjVcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDbG91ZFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd3RoU3BlZWQgPSBncm93dGhTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gc3Bhd25SYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyDQt9C00LXRgdGMINGF0YDQsNC90LjQvCDQuNC80LXQvdC90L4g0LzQuNGA0L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9ucyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkUG9zaXRpb25zW2ldID0gdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyksIDMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHRoaXMuc2l6ZXMsIDEpKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCkvL3RoaXMuY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIC8qdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogdGhpcy5nZXRWZXJ0ZXhTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiB0aGlzLmdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBtYXA6IHRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5kb21TcGF3bihvcmlnaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc3Bhd25SYWRpdXMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIG9yaWdpbi54ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueSArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnogKyByICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC80LjRgFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMud29ybGRQb3NpdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LTQstC40LbQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgcC5hZGRTY2FsZWRWZWN0b3IodGhpcy5kaXJlY3Rpb24sIGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRgNC+0YHRglxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSArPSB0aGlzLmdyb3d0aFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDRgNCw0YHRgdGC0L7Rj9C90LjRj1xyXG4gICAgICAgICAgICAgICAgaWYgKHAuZGlzdGFuY2VUbyhvcmlnaW4pID4gdGhpcy5tYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ybGRQb3NpdGlvbnNbaV0gPSB0aGlzLnJhbmRvbVNwYXduKG9yaWdpbilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gdGhpcy5zaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0L/RgNC10L7QsdGA0LDQt9GD0LXQvCDQvNC40YDQvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQsiDQu9C+0LrQsNC70YzQvdGL0LUg0LTQu9GPINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGRUb0xvY2FsID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLndvcmxkUG9zaXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgd29ybGRUb0xvY2FsLmNvcHkocCkuc3ViKG9yaWdpbik7IC8vINC70L7QutCw0LvRjNC90LDRjyA9INC80LjRgNC+0LLQsNGPIC0g0L/QvtC30LjRhtC40Y8g0YDQvtC00LjRgtC10LvRj1xyXG4gICAgICAgICAgICAgICAgbG9jYWxQb3NpdGlvbnNbaSAqIDNdID0gd29ybGRUb0xvY2FsLng7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogMyArIDFdID0gd29ybGRUb0xvY2FsLnk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogMyArIDJdID0gd29ybGRUb0xvY2FsLno7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==