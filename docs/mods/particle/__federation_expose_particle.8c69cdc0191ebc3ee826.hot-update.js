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
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.minLifetime = minLifetime;
            this.maxLifetime = maxLifetime;

            // данные о частицах
            /*this.particles = new Array(this.count);

            const positions = new Float32Array(this.count * 3);
            const sizes = new Float32Array(this.count);
            const opacities = new Float32Array(this.count);

            this.geometry = new BufferGeometry();
            this.geometry.setAttribute("position", new BufferAttribute(positions, 3));
            this.geometry.setAttribute("size", new BufferAttribute(sizes, 1));
            this.geometry.setAttribute("opacity", new BufferAttribute(opacities, 1));

            const texture = createParticleTexture();

            this.material = new PointsMaterial({
                map: texture,
                color: this.color,
                size: this.maxSize,
                transparent: true,
                depthWrite: false,
                vertexColors: false
            });

            this.points = new Points(this.geometry, this.material);
            this.add(this.points);*/

            // инициализируем частицы
            /*const origin = new Vector3();
            this.getWorldPosition(origin);
            for (let i = 0; i < this.count; i++) {
                this.resetParticle(i, origin, true); // true = сразу готовая частица
            }*/

            //this.update();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS44YzY5Y2RjMDE5MWViYzNlZTgyNi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQ0FBaUMsMENBQU87QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMscURBQXFEO0FBQ3JELGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsK0JBQStCLDBDQUFPO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGVcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG91ZFBhcnRpY2xlcygpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDbG91ZFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IDUwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSAweDAwMDBmZjtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKVxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IDE7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IG1pblNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWluTGlmZXRpbWUgPSBtaW5MaWZldGltZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhMaWZldGltZSA9IG1heExpZmV0aW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g0LTQsNC90L3Ri9C1INC+INGH0LDRgdGC0LjRhtCw0YVcclxuICAgICAgICAgICAgLyp0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJvcGFjaXR5XCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUob3BhY2l0aWVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIG1hcDogdGV4dHVyZSxcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5tYXhTaXplLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTsqL1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRh9Cw0YHRgtC40YbRi1xyXG4gICAgICAgICAgICAvKmNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgdHJ1ZSk7IC8vIHRydWUgPSDRgdGA0LDQt9GDINCz0L7RgtC+0LLQsNGPINGH0LDRgdGC0LjRhtCwXHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgLy90aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZG9tU3Bhd24ob3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNwYXduUmFkaXVzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogTWF0aC5yYW5kb20oKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueCArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnkgKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi56ICsgciAqIE1hdGguY29zKHBoaSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCBpbW1lZGlhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZSA9IHRoaXMubWluTGlmZXRpbWUgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4TGlmZXRpbWUgLSB0aGlzLm1pbkxpZmV0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLnJhbmRvbVNwYXduKG9yaWdpbiksXHJcbiAgICAgICAgICAgICAgICBhZ2U6IGltbWVkaWF0ZSA/IE1hdGgucmFuZG9tKCkgKiBsaWZldGltZSA6IDAsXHJcbiAgICAgICAgICAgICAgICBsaWZldGltZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMubWluU2l6ZSArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTaXplIC0gdGhpcy5taW5TaXplKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBvcGFjaXRpZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMub3BhY2l0eS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy5wYXJ0aWNsZXNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCy0L7Qt9GA0LDRgdGCXHJcbiAgICAgICAgICAgICAgICBwLmFnZSArPSBkZWx0YTtcclxuICAgICAgICAgICAgICAgIGlmIChwLmFnZSA+PSBwLmxpZmV0aW1lKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINC00LLQuNC20LXQvdC40LVcclxuICAgICAgICAgICAgICAgIHAucG9zLmFkZFNjYWxlZFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgdGhpcy5zcGVlZCAqIGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQvdC+0YDQvNCw0LvQuNC30L7QstCw0L3QvdC+0LUg0LLRgNC10LzRjyDQttC40LfQvdC4IFswLi4xXVxyXG4gICAgICAgICAgICAgICAgY29uc3QgdCA9IHAuYWdlIC8gcC5saWZldGltZTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyBmYWRlIGluL291dFxyXG4gICAgICAgICAgICAgICAgY29uc3Qgb3BhY2l0eSA9IHQgPCAwLjIgPyB0IC8gMC4yIDogKHQgPiAwLjggPyAoMSAtIHQpIC8gMC4yIDogMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INCw0YLRgNC40LHRg9GC0YtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBwLnBvcy54IC0gb3JpZ2luLng7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHAucG9zLnkgLSBvcmlnaW4ueTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gcC5wb3MueiAtIG9yaWdpbi56O1xyXG5cclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gcC5zaXplO1xyXG4gICAgICAgICAgICAgICAgb3BhY2l0aWVzW2ldID0gb3BhY2l0eTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMub3BhY2l0eS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=