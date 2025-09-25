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
            this.type = "Cloud";

            this.count = 5000;
            this.color = 0x0000ff;
            this.direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0)
            this.speed = 1;
            this.spawnRadius = 1;
            this.minSize = 0.2;
            this.maxSize = 1;
            this.minLifetime = 2;
            this.maxLifetime = 5;

            // данные о частицах
            this.particles = new Array(this.count);

            const positions = new Float32Array(this.count * 3);
            const sizes = new Float32Array(this.count);
            const opacities = new Float32Array(this.count);

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));
            this.geometry.setAttribute("opacity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(opacities, 1));

            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)();

            /*this.material = new PointsMaterial({
                map: texture,
                //color: this.color,
                size: this.maxSize,
                transparent: true,
                depthWrite: false,
                vertexColors: false
            });*/

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTexture: { value: texture },
                    uColor: {
                        value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                            (this.color >> 16 & 255) / 255,
                            (this.color >> 8 & 255) / 255,
                            (this.color & 255) / 255
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
            const sizes = this.geometry.attributes.size.array;
            const opacities = this.geometry.attributes.opacity.array;

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
            this.geometry.attributes.size.needsUpdate = true;
            this.geometry.attributes.opacity.needsUpdate = true;
        }
    };
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5kZDZmOGM2OThmZDc2YTNhNDY5ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVNlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQsa0RBQWU7QUFDdEUsbURBQW1ELGtEQUFlO0FBQ2xFLHNEQUFzRCxrREFBZTtBQUNyRTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsRUFBRTtBQUNmO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnQkFBZ0I7QUFDaEQ7QUFDQSxtQ0FBbUMsMENBQU87QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QyxxREFBcUQ7QUFDckQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNsb3VkXCI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gNTAwMDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IDB4MDAwMGZmO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDEsIDApXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gMTtcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gMC4yO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSAxO1xyXG4gICAgICAgICAgICB0aGlzLm1pbkxpZmV0aW1lID0gMjtcclxuICAgICAgICAgICAgdGhpcy5tYXhMaWZldGltZSA9IDU7XHJcblxyXG4gICAgICAgICAgICAvLyDQtNCw0L3QvdGL0LUg0L4g0YfQsNGB0YLQuNGG0LDRhVxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUob3BhY2l0aWVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcblxyXG4gICAgICAgICAgICAvKnRoaXMubWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgbWFwOiB0ZXh0dXJlLFxyXG4gICAgICAgICAgICAgICAgLy9jb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMubWF4U2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pOyovXHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmNvbG9yID4+IDE2ICYgMjU1KSAvIDI1NSxcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICh0aGlzLmNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKHRoaXMuY29sb3IgJiAyNTUpIC8gMjU1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdk9wYWNpdHkgPSBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdk9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh1Q29sb3IsIHZPcGFjaXR5KSAqIHRleENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xfRnJhZ0NvbG9yLmEgPCAwLjAxKSBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YfQsNGB0YLQuNGG0YtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCB0cnVlKTsgLy8gdHJ1ZSA9INGB0YDQsNC30YMg0LPQvtGC0L7QstCw0Y8g0YfQsNGB0YLQuNGG0LBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbVNwYXduKG9yaWdpbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueiArIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgaW1tZWRpYXRlID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWUgPSB0aGlzLm1pbkxpZmV0aW1lICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heExpZmV0aW1lIC0gdGhpcy5taW5MaWZldGltZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IHtcclxuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pLFxyXG4gICAgICAgICAgICAgICAgYWdlOiBpbW1lZGlhdGUgPyBNYXRoLnJhbmRvbSgpICogbGlmZXRpbWUgOiAwLFxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWUsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLm1pblNpemUgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U2l6ZSAtIHRoaXMubWluU2l6ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2l6ZS5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0aWVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLm9wYWNpdHkuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGFydGljbGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQstC+0LfRgNCw0YHRglxyXG4gICAgICAgICAgICAgICAgcC5hZ2UgKz0gZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAocC5hZ2UgPj0gcC5saWZldGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQYXJ0aWNsZShpLCBvcmlnaW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICBwLnBvcy5hZGRTY2FsZWRWZWN0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3QvtC1INCy0YDQtdC80Y8g0LbQuNC30L3QuCBbMC4uMV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBwLmFnZSAvIHAubGlmZXRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmFkZSBpbi9vdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSB0IDwgMC4yID8gdCAvIDAuMiA6ICh0ID4gMC44ID8gKDEgLSB0KSAvIDAuMiA6IDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gcC5wb3MueCAtIG9yaWdpbi54O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBwLnBvcy55IC0gb3JpZ2luLnk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IHAucG9zLnogLSBvcmlnaW4uejtcclxuXHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IHAuc2l6ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdGllc1tpXSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLm9wYWNpdHkubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9