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
                color = 0x0000ff,
                direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
                speed = 0.25,
                spawnRadius = 1,
                minSize = 0.5,
                maxSize = 1.5,
                minLifetime = 2,
                maxLifetime = 5 } = {}
            this.type = "Cloud";

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40YzUwOWQwMjkyZDI0OTczODY2ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVNlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSxvQkFBb0I7QUFDcEI7QUFDQSxnQ0FBZ0MsMENBQU87QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQsa0RBQWU7QUFDdEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBLDRCQUE0QixnRUFBcUI7QUFDakQ7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsZ0JBQWdCO0FBQ2hEO0FBQ0EsbUNBQW1DLDBDQUFPO0FBQzFDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBTztBQUN0QztBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMscURBQXFEO0FBQ3JEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9jbG91ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWxcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG91ZFBhcnRpY2xlcygpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHsgY291bnQgPSA1MDAwLFxyXG4gICAgICAgICAgICAgICAgY29sb3IgPSAweDAwMDBmZixcclxuICAgICAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDEsIDApLFxyXG4gICAgICAgICAgICAgICAgc3BlZWQgPSAwLjI1LFxyXG4gICAgICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICAgICAgbWluU2l6ZSA9IDAuNSxcclxuICAgICAgICAgICAgICAgIG1heFNpemUgPSAxLjUsXHJcbiAgICAgICAgICAgICAgICBtaW5MaWZldGltZSA9IDIsXHJcbiAgICAgICAgICAgICAgICBtYXhMaWZldGltZSA9IDUgfSA9IHt9XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25SYWRpdXMgPSBzcGF3blJhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gbWluU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5taW5MaWZldGltZSA9IG1pbkxpZmV0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1heExpZmV0aW1lID0gbWF4TGlmZXRpbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDQtNCw0L3QvdGL0LUg0L4g0YfQsNGB0YLQuNGG0LDRhVxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYU9wYWNpdHlcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShvcGFjaXRpZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PSDQmtCw0YHRgtC+0LzQvdGL0Lkg0YjQtdC50LTQtdGAID09PVxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sb3IgJiAyNTUpIC8gMjU1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdk9wYWNpdHkgPSBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdk9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh1Q29sb3IsIHZPcGFjaXR5KSAqIHRleENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xfRnJhZ0NvbG9yLmEgPCAwLjAxKSBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC40L3QuNGG0LjQsNC70LjQt9C40YDRg9C10Lwg0YfQsNGB0YLQuNGG0YtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCB0cnVlKTsgLy8gdHJ1ZSA9INGB0YDQsNC30YMg0LPQvtGC0L7QstCw0Y8g0YfQsNGB0YLQuNGG0LBcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbVNwYXduKG9yaWdpbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueiArIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgaW1tZWRpYXRlID0gZmFsc2UpIHtcclxuICAgICAgICAgICAgY29uc3QgbGlmZXRpbWUgPSB0aGlzLm1pbkxpZmV0aW1lICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heExpZmV0aW1lIC0gdGhpcy5taW5MaWZldGltZSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlc1tpXSA9IHtcclxuICAgICAgICAgICAgICAgIHBvczogdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pLFxyXG4gICAgICAgICAgICAgICAgYWdlOiBpbW1lZGlhdGUgPyBNYXRoLnJhbmRvbSgpICogbGlmZXRpbWUgOiAwLFxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWUsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLm1pblNpemUgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4U2l6ZSAtIHRoaXMubWluU2l6ZSlcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYVNpemUuYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hT3BhY2l0eS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wYXJ0aWNsZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCy0L7Qt9GA0LDRgdGCXHJcbiAgICAgICAgICAgICAgICBwLmFnZSArPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgIGlmIChwLmFnZSA+PSBwLmxpZmV0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC00LLQuNC20LXQvdC40LVcclxuICAgICAgICAgICAgICAgIHAucG9zLmFkZFNjYWxlZFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQvdC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdC+0LUg0LLRgNC10LzRjyDQttC40LfQvdC4IFswLi4xXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAuYWdlIC8gcC5saWZldGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmYWRlIGluL291dFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHQgPCAwLjIgPyB0IC8gMC4yIDogKHQgPiAwLjggPyAoMSAtIHQpIC8gMC4yIDogMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCw0YLRgNC40LHRg9GC0YtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBwLnBvcy54IC0gb3JpZ2luLng7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHAucG9zLnkgLSBvcmlnaW4ueTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gcC5wb3MueiAtIG9yaWdpbi56O1xyXG5cclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gcC5zaXplO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0aWVzW2ldID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFTaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFPcGFjaXR5Lm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==