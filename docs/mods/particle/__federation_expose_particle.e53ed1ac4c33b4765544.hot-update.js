"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

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
        constructor() {
            super();

            const { count = 5000,
                color = 0xffffff,
                direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
                speed = 0.25,
                spawnRadius = 1,
                minSize = 0.1,
                maxSize = 0.25,
                minLifetime = 2,
                maxLifetime = 5 } = {}
            this.type = "Cloud";
            this.frustumCulled = false
            this.count = count;
            this.color = color;
            this.direction = direction.clone().normalize();
            this.speed = speed;
            this.spawnRadius = spawnRadius;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.minLifetime = minLifetime;
            this.maxLifetime = maxLifetime;

            // данные о частицах
            this.particles = new Array(this.count);

            const positions = new Float32Array(this.count * 3);
            const sizes = new Float32Array(this.count);
            const opacities = new Float32Array(this.count);

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aSize", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));
            this.geometry.setAttribute("aOpacity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(opacities, 1));

            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)();

            // === Кастомный шейдер ===
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTexture: { value: texture },
                    uColor: {
                        value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                            (color >> 16 & 255) / 255,
                            (color >> 8 & 255) / 255,
                            (color & 255) / 255
                        )
                    }
                },
                vertexShader: `
                    attribute float aSize;
                    attribute float aOpacity;
                    varying float vOpacity;
                    void main() {
                        vOpacity = aOpacity;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = aSize * (300.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
                fragmentShader: `
                    uniform sampler2D uTexture;
                    uniform vec3 uColor;
                    varying float vOpacity;
                    void main() {
                        vec4 texColor = texture2D(uTexture, gl_PointCoord);
                        gl_FragColor = vec4(uColor, vOpacity) * texColor;
                        if (gl_FragColor.a < 0.01) discard;
                    }
                `
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.points.frustumCulled = false
            this.add(this.points);

            // инициализируем частицы
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);
            for (let i = 0; i < this.count; i++) {
                this.resetParticle(i, origin, true); // true = сразу готовая частица
            }

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

        resetParticle(i, origin, immediate = false) {
            const lifetime = this.minLifetime + Math.random() * (this.maxLifetime - this.minLifetime);

            this.particles[i] = {
                pos: this.randomSpawn(origin),
                age: immediate ? Math.random() * lifetime : 0,
                lifetime,
                size: this.minSize + Math.random() * (this.maxSize - this.minSize)
            };
        }

        update() {
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            const positions = this.geometry.attributes.position.array;
            const sizes = this.geometry.attributes.aSize.array;
            const opacities = this.geometry.attributes.aOpacity.array;

            for (let i = 0; i < this.count; i++) {
                const p = this.particles[i];

                // обновляем возраст
                p.age += delta;
                if (p.age >= p.lifetime) {
                    this.resetParticle(i, origin, false);
                }

                // движение
                p.pos.addScaledVector(this.direction, this.speed * delta);

                // нормализованное время жизни [0..1]
                const t = p.age / p.lifetime;

                // fade in/out
                const opacity = t < 0.2 ? t / 0.2 : (t > 0.8 ? (1 - t) / 0.2 : 1);

                // обновляем атрибуты
                positions[i * 3] = p.pos.x - origin.x;
                positions[i * 3 + 1] = p.pos.y - origin.y;
                positions[i * 3 + 2] = p.pos.z - origin.z;

                sizes[i] = p.size;
                opacities[i] = opacity;
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.aSize.needsUpdate = true;
            this.geometry.attributes.aOpacity.needsUpdate = true;
        }
    };
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lNTNlZDFhYzRjMzNiNDc2NTU0NC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVNlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxnQ0FBZ0MsMENBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQsa0RBQWU7QUFDdEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQ7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0EsbUNBQW1DLDBDQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBjb3VudCA9IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgICAgICBzcGVlZCA9IDAuMjUsXHJcbiAgICAgICAgICAgICAgICBzcGF3blJhZGl1cyA9IDEsXHJcbiAgICAgICAgICAgICAgICBtaW5TaXplID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgbWF4U2l6ZSA9IDAuMjUsXHJcbiAgICAgICAgICAgICAgICBtaW5MaWZldGltZSA9IDIsXHJcbiAgICAgICAgICAgICAgICBtYXhMaWZldGltZSA9IDUgfSA9IHt9XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuICAgICAgICAgICAgdGhpcy5mcnVzdHVtQ3VsbGVkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBtaW5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1pbkxpZmV0aW1lID0gbWluTGlmZXRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4TGlmZXRpbWUgPSBtYXhMaWZldGltZTtcclxuXHJcbiAgICAgICAgICAgIC8vINC00LDQvdC90YvQtSDQviDRh9Cw0YHRgtC40YbQsNGFXHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzID0gbmV3IEFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFTaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhT3BhY2l0eVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKG9wYWNpdGllcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpO1xyXG5cclxuICAgICAgICAgICAgLy8gPT09INCa0LDRgdGC0L7QvNC90YvQuSDRiNC10LnQtNC10YAgPT09XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdVRleHR1cmU6IHsgdmFsdWU6IHRleHR1cmUgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3I6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWU6IG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb2xvciA+PiA4ICYgMjU1KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb2xvciAmIDI1NSkgLyAyNTVcclxuICAgICAgICAgICAgICAgICAgICAgICAgKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYVNpemU7XHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdk9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2T3BhY2l0eSA9IGFPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBhU2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYFxyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHVUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2T3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQodVRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KHVDb2xvciwgdk9wYWNpdHkpICogdGV4Q29sb3I7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChnbF9GcmFnQ29sb3IuYSA8IDAuMDEpIGRpc2NhcmQ7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YfQsNGB0YLQuNGG0YtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCB0cnVlKTsgLy8gdHJ1ZSA9INGB0YDQsNC30YMg0LPQvtGC0L7QstCw0Y8g0YfQsNGB0YLQuNGG0LBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbVNwYXduKG9yaWdpbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueiArIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgaW1tZWRpYXRlID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWUgPSB0aGlzLm1pbkxpZmV0aW1lICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heExpZmV0aW1lIC0gdGhpcy5taW5MaWZldGltZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IHtcclxuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pLFxyXG4gICAgICAgICAgICAgICAgYWdlOiBpbW1lZGlhdGUgPyBNYXRoLnJhbmRvbSgpICogbGlmZXRpbWUgOiAwLFxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWUsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLm1pblNpemUgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U2l6ZSAtIHRoaXMubWluU2l6ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYVNpemUuYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hT3BhY2l0eS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wYXJ0aWNsZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCy0L7Qt9GA0LDRgdGCXHJcbiAgICAgICAgICAgICAgICBwLmFnZSArPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgIGlmIChwLmFnZSA+PSBwLmxpZmV0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC00LLQuNC20LXQvdC40LVcclxuICAgICAgICAgICAgICAgIHAucG9zLmFkZFNjYWxlZFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQvdC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdC+0LUg0LLRgNC10LzRjyDQttC40LfQvdC4IFswLi4xXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAuYWdlIC8gcC5saWZldGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmYWRlIGluL291dFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHQgPCAwLjIgPyB0IC8gMC4yIDogKHQgPiAwLjggPyAoMSAtIHQpIC8gMC4yIDogMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCw0YLRgNC40LHRg9GC0YtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBwLnBvcy54IC0gb3JpZ2luLng7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHAucG9zLnkgLSBvcmlnaW4ueTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gcC5wb3MueiAtIG9yaWdpbi56O1xyXG5cclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gcC5zaXplO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0aWVzW2ldID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFTaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFPcGFjaXR5Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==