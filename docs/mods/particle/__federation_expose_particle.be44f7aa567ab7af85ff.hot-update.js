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
            size = 0.1,
            origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 0, 0)
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

            this.origin = origin.clone();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5iZTQ0ZjdhYTU2N2FiN2FmODVmZi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Y7QUFDQSx3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDYW52YXNUZXh0dXJlXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRQYXJ0aWNsZXMoKSB7XHJcblxyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgY291bnQgPSA1MDAsXHJcbiAgICAgICAgICAgIGNvbG9yID0gMHgwMDAwZmYsXHJcbiAgICAgICAgICAgIGRpcmVjdGlvbiA9IG5ldyBWZWN0b3IzKDAsIDEsIDApLFxyXG4gICAgICAgICAgICBncm93dGhTcGVlZCA9IDAuMDA1LFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IDMsXHJcbiAgICAgICAgICAgIHNwYXduUmFkaXVzID0gMSxcclxuICAgICAgICAgICAgc2l6ZSA9IDAuMSxcclxuICAgICAgICAgICAgb3JpZ2luID0gbmV3IFZlY3RvcjMoMCwgMCwgMClcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNsb3VkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3d0aFNwZWVkID0gZ3Jvd3RoU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vcmlnaW4gPSBvcmlnaW4uY2xvbmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INCz0LXQvtC80LXRgtGA0LjRjiDQuCDQvNCw0YLQtdGA0LjQsNC7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVNwYXduKCk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMuc2V0KFtwb3MueCwgcG9zLnksIHBvcy56XSwgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdzaXplJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdCw0Y8g0YLQvtGH0LrQsCDQstC90YPRgtGA0Lgg0YDQsNC00LjRg9GB0LAg0LPQtdC90LXRgNCw0YbQuNC4XHJcbiAgICAgICAgcmFuZG9tU3Bhd24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNwYXduUmFkaXVzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogTWF0aC5yYW5kb20oKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpLFxyXG4gICAgICAgICAgICAgICAgciAqIE1hdGguY29zKHBoaSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCe0LHQvdC+0LLQu9C10L3QuNC1INGB0LjRgdGC0LXQvNGLXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgY29uc3QgZGVsdGEgPSBjbG9jay5nZXREZWx0YSgpXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2l6ZS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBpICogMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQlNCy0LjQs9Cw0LXQvCDRh9Cw0YHRgtC40YbRi1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeF0gKz0gdGhpcy5kaXJlY3Rpb24ueCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeCArIDFdICs9IHRoaXMuZGlyZWN0aW9uLnkgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHggKyAyXSArPSB0aGlzLmRpcmVjdGlvbi56ICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KPQstC10LvQuNGH0LjQstCw0LXQvCDRgNCw0LfQvNC10YBcclxuICAgICAgICAgICAgICAgIHNpemVzW2ldICs9IHRoaXMuZ3Jvd3RoU3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10Lwg0YDQsNGB0YHRgtC+0Y/QvdC40LVcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeF0gKiogMiArIHBvc2l0aW9uc1tpZHggKyAxXSAqKiAyICsgcG9zaXRpb25zW2lkeCArIDJdICoqIDJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPiB0aGlzLm1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0J/QtdGA0LXRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhtGLXHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21TcGF3bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpZHhdID0gcG9zLng7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeCArIDFdID0gcG9zLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2lkeCArIDJdID0gcG9zLno7XHJcbiAgICAgICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=