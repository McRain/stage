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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS42MDYyNmZmODA0N2RiODhiZTVhOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Y7QUFDQSx3Q0FBd0MsMkNBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLDBDQUFPO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDLFVBQVUsSUFBSTtBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQsa0RBQWU7QUFDdEUsbURBQW1ELGtEQUFlO0FBQ2xFO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvY2xvdWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbCxcclxuICAgIENhbnZhc1RleHR1cmVcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG91ZFBhcnRpY2xlcygpIHtcclxuXHJcbiAgICByZXR1cm4gY2xhc3MgQ2xvdWRQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDUwMCxcclxuICAgICAgICAgICAgY29sb3IgPSAweDAwMDBmZixcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgIGdyb3d0aFNwZWVkID0gMC4wMDUsXHJcbiAgICAgICAgICAgIG1heERpc3RhbmNlID0gMyxcclxuICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICBzaXplID0gMC4xLFxyXG4gICAgICAgICAgICBvcmlnaW4gPSBuZXcgVmVjdG9yMygwLCAwLCAwKVxyXG4gICAgICAgIH0gPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd3RoU3BlZWQgPSBncm93dGhTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gc3Bhd25SYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbiA9IG9yaWdpbi5jbG9uZSgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgdGhpcy5zaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zID0gdGhpcy5yYW5kb21TcGF3bigpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnMuc2V0KFtwb3MueCwgcG9zLnksIHBvcy56XSwgaSAqIDMpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHRoaXMucG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdzaXplJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh0aGlzLnNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIGNvbG9yOiB0aGlzLmNvbG9yLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5zaXplLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBvcGFjaXR5OiAwLjUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCh0LvRg9GH0LDQudC90LDRjyDRgtC+0YfQutCwINCy0L3Rg9GC0YDQuCDRgNCw0LTQuNGD0YHQsCDQs9C10L3QtdGA0LDRhtC40LhcclxuICAgICAgICByYW5kb21TcGF3bigpIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc3Bhd25SYWRpdXMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnkgKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIHRoaXMub3JpZ2luLnogKyByICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0T3JpZ2luKHBvcykge1xyXG4gICAgICAgICAgICB0aGlzLm9yaWdpbi5jb3B5KHBvcyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQntCx0L3QvtCy0LvQtdC90LjQtSDRgdC40YHRgtC10LzRi1xyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKVxyXG4gICAgICAgICAgICAvL2NvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgLy9jb25zdCBzaXplcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLmFycmF5O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC00LLQuNC20LXQvdC40LVcclxuICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeF0gKz0gdGhpcy5kaXJlY3Rpb24ueCAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMV0gKz0gdGhpcy5kaXJlY3Rpb24ueSAqIGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMl0gKz0gdGhpcy5kaXJlY3Rpb24ueiAqIGRlbHRhO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINGA0L7RgdGCXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldICs9IHRoaXMuZ3Jvd3RoU3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDQutCwINGA0LDRgdGB0YLQvtGP0L3QuNGPXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeF0gKiogMiArXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMV0gKiogMiArXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMl0gKiogMlxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IHRoaXMubWF4RGlzdGFuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBwb3MgPSB0aGlzLnJhbmRvbVNwYXduKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4XSA9IHBvcy54O1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucG9zaXRpb25zW2lkeCArIDFdID0gcG9zLnk7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb3NpdGlvbnNbaWR4ICsgMl0gPSBwb3MuejtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gdGhpcy5zaXplO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuc2l6ZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9