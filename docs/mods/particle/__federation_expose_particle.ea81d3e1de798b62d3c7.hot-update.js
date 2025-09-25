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

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
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
                    this.worldPositions[i] = this.randomSpawn(origin);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lYTgxZDNlMWRlNzk4YjYyZDNjNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBUWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Ysd0NBQXdDLDJDQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QiwwQ0FBTztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBTztBQUN0QztBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0Esb0JBQW9CLGtEQUFlO0FBQ25DO0FBQ0EsbURBQW1ELGtEQUFlO0FBQ2xFO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDLDBDQUFPO0FBQzVDLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQSxrREFBa0Q7QUFDbEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9jbG91ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ2xvdWRQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDUwMCxcclxuICAgICAgICAgICAgY29sb3IgPSAweDAwMDBmZixcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgIGdyb3d0aFNwZWVkID0gMC4wMDUsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gMyxcclxuICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICBzaXplID0gMC4xXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3d0aFNwZWVkID0gZ3Jvd3RoU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICAgICAgLy8g0LfQtNC10YHRjCDRhdGA0LDQvdC40Lwg0LjQvNC10L3QvdC+INC80LjRgNC+0LLRi9C1INC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIHRoaXMud29ybGRQb3NpdGlvbnMgPSBuZXcgQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9uc1tpXSA9IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXHJcbiAgICAgICAgICAgICAgICBcInBvc2l0aW9uXCIsXHJcbiAgICAgICAgICAgICAgICBuZXcgQnVmZmVyQXR0cmlidXRlKG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpLCAzKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInNpemVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh0aGlzLnNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbVNwYXduKG9yaWdpbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueiArIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LzQuNGAXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy53b3JsZFBvc2l0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICBwLmFkZFNjYWxlZFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINGA0L7RgdGCXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldICs9IHRoaXMuZ3Jvd3RoU3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDQutCwINGA0LDRgdGB0YLQvtGP0L3QuNGPXHJcbiAgICAgICAgICAgICAgICBpZiAocC5kaXN0YW5jZVRvKG9yaWdpbikgPiB0aGlzLm1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9uc1tpXSA9IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDQv9GA0LXQvtCx0YDQsNC30YPQtdC8INC80LjRgNC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINCyINC70L7QutCw0LvRjNC90YvQtSDQtNC70Y8g0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFRvTG9jYWwgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMud29ybGRQb3NpdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB3b3JsZFRvTG9jYWwuY29weShwKS5zdWIob3JpZ2luKTsgLy8g0LvQvtC60LDQu9GM0L3QsNGPID0g0LzQuNGA0L7QstCw0Y8gLSDQv9C+0LfQuNGG0LjRjyDRgNC+0LTQuNGC0LXQu9GPXHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogM10gPSB3b3JsZFRvTG9jYWwueDtcclxuICAgICAgICAgICAgICAgIGxvY2FsUG9zaXRpb25zW2kgKiAzICsgMV0gPSB3b3JsZFRvTG9jYWwueTtcclxuICAgICAgICAgICAgICAgIGxvY2FsUG9zaXRpb25zW2kgKiAzICsgMl0gPSB3b3JsZFRvTG9jYWwuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9