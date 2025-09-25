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

            this.positions = new Float32Array(this.count * 3);
            this.sizes = new Float32Array(this.count);

            for (let i = 0; i < this.count; i++) {
                const pos = this.randomSpawn();
                this.positions.set([pos.x, pos.y, pos.z], i * 3);
                this.sizes[i] = this.size;
            }

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.positions, 3));
            this.geometry.setAttribute('size', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.sizes, 1));

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
                this.origin.x + r * Math.sin(phi) * Math.cos(theta),
                this.origin.y + r * Math.sin(phi) * Math.sin(theta),
                this.origin.z + r * Math.cos(phi)
            );
        }

        setOrigin(pos) {
            this.origin.copy(pos);
        }

        // Обновление системы
        update() {
            requestAnimationFrame(this.update.bind(this))
            const delta = clock.getDelta()
            //const positions = this.geometry.attributes.position.array;
            //const sizes = this.geometry.attributes.size.array;

            for (let i = 0; i < this.count; i++) {
                const idx = i * 3;

                // движение
                this.positions[idx] += this.direction.x * delta;
                this.positions[idx + 1] += this.direction.y * delta;
                this.positions[idx + 2] += this.direction.z * delta;

                // рост
                this.sizes[i] += this.growthSpeed * delta;

                // проверка расстояния
                const dist = Math.sqrt(
                    this.positions[idx] ** 2 +
                    this.positions[idx + 1] ** 2 +
                    this.positions[idx + 2] ** 2
                );

                if (dist > this.maxDistance) {
                    const pos = this.randomSpawn();
                    this.positions[idx] = pos.x;
                    this.positions[idx + 1] = pos.y;
                    this.positions[idx + 2] = pos.z;
                    this.sizes[i] = this.size;
                }
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.size.needsUpdate = true;
        }
    }

}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43NTM0ZWNiOWZkNjA3MzhhZGQ0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBT2U7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Y7QUFDQSx3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQsa0RBQWU7QUFDdEUsbURBQW1ELGtEQUFlO0FBQ2xFO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLDBDQUFPO0FBQzlCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG5cclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gNTAwLFxyXG4gICAgICAgICAgICBjb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgICAgICAgZ3Jvd3RoU3BlZWQgPSAwLjAwNSxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSAzLFxyXG4gICAgICAgICAgICBzcGF3blJhZGl1cyA9IDEsXHJcbiAgICAgICAgICAgIHNpemUgPSAwLjEsXHJcbiAgICAgICAgICAgIG9yaWdpbiA9IG5ldyBWZWN0b3IzKDAsIDAsIDApXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDbG91ZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24uY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5ncm93dGhTcGVlZCA9IGdyb3d0aFNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1heERpc3RhbmNlID0gbWF4RGlzdGFuY2U7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25SYWRpdXMgPSBzcGF3blJhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5zaXplID0gc2l6ZTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMub3JpZ2luID0gb3JpZ2luLmNsb25lKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICB0aGlzLnNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVNwYXduKCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9ucy5zZXQoW3Bvcy54LCBwb3MueSwgcG9zLnpdLCBpICogMyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodGhpcy5wb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHRoaXMuc2l6ZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgY29sb3I6IHRoaXMuY29sb3IsXHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIG9wYWNpdHk6IDAuNSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdCw0Y8g0YLQvtGH0LrQsCDQstC90YPRgtGA0Lgg0YDQsNC00LjRg9GB0LAg0LPQtdC90LXRgNCw0YbQuNC4XHJcbiAgICAgICAgcmFuZG9tU3Bhd24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNwYXduUmFkaXVzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogTWF0aC5yYW5kb20oKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbi54ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICB0aGlzLm9yaWdpbi56ICsgciAqIE1hdGguY29zKHBoaSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldE9yaWdpbihwb3MpIHtcclxuICAgICAgICAgICAgdGhpcy5vcmlnaW4uY29weShwb3MpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0J7QsdC90L7QstC70LXQvdC40LUg0YHQuNGB0YLQtdC80YtcclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKClcclxuICAgICAgICAgICAgLy9jb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIC8vY29uc3Qgc2l6ZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2l6ZS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBpICogMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHhdICs9IHRoaXMuZGlyZWN0aW9uLnggKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDFdICs9IHRoaXMuZGlyZWN0aW9uLnkgKiBkZWx0YTtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDJdICs9IHRoaXMuZGlyZWN0aW9uLnogKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRgNC+0YHRglxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSArPSB0aGlzLmdyb3d0aFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDRgNCw0YHRgdGC0L7Rj9C90LjRj1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHhdICoqIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDFdICoqIDIgK1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDJdICoqIDJcclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPiB0aGlzLm1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21TcGF3bigpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeF0gPSBwb3MueDtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnBvc2l0aW9uc1tpZHggKyAxXSA9IHBvcy55O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDJdID0gcG9zLno7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==