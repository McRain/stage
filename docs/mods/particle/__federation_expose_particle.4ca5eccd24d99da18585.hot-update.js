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


const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function CloudParticles() {
    return class CloudParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor({
            count = 500,
            color = 0x0000ff,
            direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
            growthSpeed = 0.005,
            maxDistance = 3,
            spawnRadius = 1,
            size = 0.1
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

            this.positions = new Float32Array(this.count * 3);
            this.sizes = new Float32Array(this.count);

            // получить мировую позицию для старта
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            for (let i = 0; i < this.count; i++) {
                const pos = this.randomSpawn(origin);
                this.positions.set([pos.x, pos.y, pos.z], i * 3);
                this.sizes[i] = this.size;
            }

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.positions, 3));
            this.geometry.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.sizes, 1));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                color: this.color,
                size: this.size,
                transparent: true,
                opacity: 0.5,
                depthWrite: false
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);

            // теперь points НЕ добавляем в this, а прямо в сцену
            this.parent?.add(this.points);

            this.update();
        }

        // Переопределим добавление в сцену: points кладем туда же
        onAddedToScene(scene) {
            scene.add(this.points);
        }

        // случайная точка в радиусе относительно текущего положения
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

        // апдейт
        update() {
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            for (let i = 0; i < this.count; i++) {
                const idx = i * 3;

                // движение
                this.positions[idx] += this.direction.x * delta;
                this.positions[idx + 1] += this.direction.y * delta;
                this.positions[idx + 2] += this.direction.z * delta;

                // рост
                this.sizes[i] += this.growthSpeed * delta;

                // расстояние
                const dist = Math.sqrt(
                    this.positions[idx] ** 2 +
                    this.positions[idx + 1] ** 2 +
                    this.positions[idx + 2] ** 2
                );

                if (dist > this.maxDistance) {
                    const pos = this.randomSpawn(origin);
                    this.positions[idx] = pos.x;
                    this.positions[idx + 1] = pos.y;
                    this.positions[idx + 2] = pos.z;
                    this.sizes[i] = this.size;
                }
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.size.needsUpdate = true;
        }
    };
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40Y2E1ZWNjZDI0ZDk5ZGExODU4NS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Ysd0NBQXdDLDJDQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBTztBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQU87QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9jbG91ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ2xvdWRQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDUwMCxcclxuICAgICAgICAgICAgY29sb3IgPSAweDAwMDBmZixcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgIGdyb3d0aFNwZWVkID0gMC4wMDUsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gMyxcclxuICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICBzaXplID0gMC4xXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3d0aFNwZWVkID0gZ3Jvd3RoU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgdGhpcy5zaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQv9C+0LvRg9GH0LjRgtGMINC80LjRgNC+0LLRg9GOINC/0L7Qt9C40YbQuNGOINC00LvRjyDRgdGC0LDRgNGC0LBcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuc2V0KFtwb3MueCwgcG9zLnksIHBvcy56XSwgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodGhpcy5wb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodGhpcy5zaXplcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcblxyXG4gICAgICAgICAgICAvLyDRgtC10L/QtdGA0YwgcG9pbnRzINCd0JUg0LTQvtCx0LDQstC70Y/QtdC8INCyIHRoaXMsINCwINC/0YDRj9C80L4g0LIg0YHRhtC10L3Rg1xyXG4gICAgICAgICAgICB0aGlzLnBhcmVudD8uYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQn9C10YDQtdC+0L/RgNC10LTQtdC70LjQvCDQtNC+0LHQsNCy0LvQtdC90LjQtSDQsiDRgdGG0LXQvdGDOiBwb2ludHMg0LrQu9Cw0LTQtdC8INGC0YPQtNCwINC20LVcclxuICAgICAgICBvbkFkZGVkVG9TY2VuZShzY2VuZSkge1xyXG4gICAgICAgICAgICBzY2VuZS5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0YHQu9GD0YfQsNC50L3QsNGPINGC0L7Rh9C60LAg0LIg0YDQsNC00LjRg9GB0LUg0L7RgtC90L7RgdC40YLQtdC70YzQvdC+INGC0LXQutGD0YnQtdCz0L4g0L/QvtC70L7QttC10L3QuNGPXHJcbiAgICAgICAgcmFuZG9tU3Bhd24ob3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNwYXduUmFkaXVzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogTWF0aC5yYW5kb20oKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueCArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnkgKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi56ICsgciAqIE1hdGguY29zKHBoaSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCw0L/QtNC10LnRglxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBpICogMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHhdICs9IHRoaXMuZGlyZWN0aW9uLnggKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDFdICs9IHRoaXMuZGlyZWN0aW9uLnkgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDJdICs9IHRoaXMuZGlyZWN0aW9uLnogKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRgNC+0YHRglxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSArPSB0aGlzLmdyb3d0aFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0YDQsNGB0YHRgtC+0Y/QvdC40LVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4XSAqKiAyICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHggKyAxXSAqKiAyICtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHggKyAyXSAqKiAyXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gdGhpcy5tYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHhdID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMV0gPSBwb3MueTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHggKyAyXSA9IHBvcy56O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==