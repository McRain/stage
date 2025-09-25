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
            count = 200,
            color = 0xffffff,
            direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
            growthSpeed = 0.01,
            maxDistance = 5,
            spawnRadius = 1,
            size = 0.1
        } = {}) {
            super()
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
                opacity: 0.8,
                depthWrite: false
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points)
            this.update()
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43M2MxNDVkYmFlYTY2YTdjMDQ1MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Y7QUFDQSx3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtEQUFlO0FBQ3RFLG1EQUFtRCxrREFBZTtBQUNsRTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDYW52YXNUZXh0dXJlXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRQYXJ0aWNsZXMoKSB7XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgY291bnQgPSAyMDAsXHJcbiAgICAgICAgICAgIGNvbG9yID0gMHhmZmZmZmYsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDEsIDApLFxyXG4gICAgICAgICAgICBncm93dGhTcGVlZCA9IDAuMDEsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gNSxcclxuICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICBzaXplID0gMC4xXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd3RoU3BlZWQgPSBncm93dGhTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gc3Bhd25SYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQs9C10L7QvNC10YLRgNC40Y4g0Lgg0LzQsNGC0LXRgNC40LDQu1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21TcGF3bigpO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnNldChbcG9zLngsIHBvcy55LCBwb3Muel0sIGkgKiAzKTtcclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnc2l6ZScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuOCxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cylcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0KHQu9GD0YfQsNC50L3QsNGPINGC0L7Rh9C60LAg0LLQvdGD0YLRgNC4INGA0LDQtNC40YPRgdCwINCz0LXQvdC10YDQsNGG0LjQuFxyXG4gICAgICAgIHJhbmRvbVNwYXduKCkge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSksXHJcbiAgICAgICAgICAgICAgICByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDRgdC40YHRgtC10LzRi1xyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKVxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JTQstC40LPQsNC10Lwg0YfQsNGB0YLQuNGG0YtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHhdICs9IHRoaXMuZGlyZWN0aW9uLnggKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHggKyAxXSArPSB0aGlzLmRpcmVjdGlvbi55ICogZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4ICsgMl0gKz0gdGhpcy5kaXJlY3Rpb24ueiAqIGRlbHRhO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCj0LLQtdC70LjRh9C40LLQsNC10Lwg0YDQsNC30LzQtdGAXHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSArPSB0aGlzLmdyb3d0aFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8INGA0LDRgdGB0YLQvtGP0L3QuNC1XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHhdICoqIDIgKyBwb3NpdGlvbnNbaWR4ICsgMV0gKiogMiArIHBvc2l0aW9uc1tpZHggKyAyXSAqKiAyXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gdGhpcy5tYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINCf0LXRgNC10YDQvtC20LTQtdC90LjQtSDRh9Cw0YHRgtC40YbRi1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHBvcyA9IHRoaXMucmFuZG9tU3Bhd24oKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaWR4XSA9IHBvcy54O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHggKyAxXSA9IHBvcy55O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHggKyAyXSA9IHBvcy56O1xyXG4gICAgICAgICAgICAgICAgICAgIHNpemVzW2ldID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2l6ZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9