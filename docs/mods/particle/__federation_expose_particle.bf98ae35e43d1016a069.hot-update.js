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
            super()
            this.type = "Cloud";
            this.count = count;
            this.color = color;
            this.direction = direction.clone().normalize();
            this.growthSpeed = growthSpeed;
            this.maxDistance = maxDistance;
            this.spawnRadius = spawnRadius;
            this.size = size;

            // Создаем геометрию и материал
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            const positions = new Float32Array(this.count * 3);
            const sizes = new Float32Array(this.count);

            for (let i = 0; i < this.count; i++) {
                const pos = this.randomSpawn();
                positions.set([pos.x, pos.y, pos.z], i * 3);
                sizes[i] = this.size;
            }

            this.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute('size', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                color: this.color,
                size: this.size,
                transparent: true,
                opacity: 0.5,
                depthWrite: false
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points)
            this.update()
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        // Случайная точка внутри радиуса генерации
        randomSpawn() {
            const r = this.spawnRadius * Math.random();
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            return new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                r * Math.sin(phi) * Math.cos(theta),
                r * Math.sin(phi) * Math.sin(theta),
                r * Math.cos(phi)
            );
        }

        // Обновление системы
        update() {
            requestAnimationFrame(this.update.bind(this))
            const delta = clock.getDelta()
            const positions = this.geometry.attributes.position.array;
            const sizes = this.geometry.attributes.size.array;

            for (let i = 0; i < this.count; i++) {
                const idx = i * 3;

                // Двигаем частицы
                positions[idx] += this.direction.x * delta;
                positions[idx + 1] += this.direction.y * delta;
                positions[idx + 2] += this.direction.z * delta;

                // Увеличиваем размер
                sizes[i] += this.growthSpeed * delta;

                // Проверяем расстояние
                const dist = Math.sqrt(
                    positions[idx] ** 2 + positions[idx + 1] ** 2 + positions[idx + 2] ** 2
                );

                if (dist > this.maxDistance) {
                    // Перерождение частицы
                    const pos = this.randomSpawn();
                    positions[idx] = pos.x;
                    positions[idx + 1] = pos.y;
                    positions[idx + 2] = pos.z;
                    sizes[i] = this.size;
                }
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.size.needsUpdate = true;
        }
    }

}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5iZjk4YWUzNWU0M2QxMDE2YTA2OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Y7QUFDQSx3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQsa0RBQWU7QUFDdEUsbURBQW1ELGtEQUFlO0FBQ2xFO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9jbG91ZC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gNTAwLFxyXG4gICAgICAgICAgICBjb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgICAgICAgZ3Jvd3RoU3BlZWQgPSAwLjAwNSxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSAzLFxyXG4gICAgICAgICAgICBzcGF3blJhZGl1cyA9IDEsXHJcbiAgICAgICAgICAgIHNpemUgPSAwLjFcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNsb3VkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3d0aFNwZWVkID0gZ3Jvd3RoU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0LPQtdC+0LzQtdGC0YDQuNGOINC4INC80LDRgtC10YDQuNCw0LtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tU3Bhd24oKTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5zZXQoW3Bvcy54LCBwb3MueSwgcG9zLnpdLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCh0LvRg9GH0LDQudC90LDRjyDRgtC+0YfQutCwINCy0L3Rg9GC0YDQuCDRgNCw0LTQuNGD0YHQsCDQs9C10L3QtdGA0LDRhtC40LhcclxuICAgICAgICByYW5kb21TcGF3bigpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc3Bhd25SYWRpdXMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpLFxyXG4gICAgICAgICAgICAgICAgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICByICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0YHQuNGB0YLQtdC80YtcclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKClcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLmFycmF5O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCU0LLQuNCz0LDQtdC8INGH0LDRgdGC0LjRhtGLXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4XSArPSB0aGlzLmRpcmVjdGlvbi54ICogZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4ICsgMV0gKz0gdGhpcy5kaXJlY3Rpb24ueSAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeCArIDJdICs9IHRoaXMuZGlyZWN0aW9uLnogKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQo9Cy0LXQu9C40YfQuNCy0LDQtdC8INGA0LDQt9C80LXRgFxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gKz0gdGhpcy5ncm93dGhTcGVlZCAqIGRlbHRhO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCDRgNCw0YHRgdGC0L7Rj9C90LjQtVxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4XSAqKiAyICsgcG9zaXRpb25zW2lkeCArIDFdICoqIDIgKyBwb3NpdGlvbnNbaWR4ICsgMl0gKiogMlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IHRoaXMubWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDQn9C10YDQtdGA0L7QttC00LXQvdC40LUg0YfQsNGB0YLQuNGG0YtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVNwYXduKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeF0gPSBwb3MueDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4ICsgMV0gPSBwb3MueTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4ICsgMl0gPSBwb3MuejtcclxuICAgICAgICAgICAgICAgICAgICBzaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==