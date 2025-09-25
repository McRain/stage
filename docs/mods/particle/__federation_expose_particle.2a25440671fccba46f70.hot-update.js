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
        constructor({
            count = 5000,
            color = 0x0000ff,
            direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
            growthSpeed = 0.01,
            maxDistance = 25,
            spawnRadius = 1,
            size = 0.5
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
                this.sizes[i] = Math.random() * this.size + this.size;
            }

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute(
                "position",
                new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(this.count * 3), 3)
            );
            this.geometry.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.sizes, 1));


            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)()

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                map: texture,
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
                    this.worldPositions[i] = this.randomSpawn(origin)
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4yYTI1NDQwNjcxZmNjYmE0NmY3MC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFlO0FBQ2Y7QUFDb0U7QUFDcEU7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQU87QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLG9CQUFvQixrREFBZTtBQUNuQztBQUNBLG1EQUFtRCxrREFBZTtBQUNsRTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFxQjtBQUNqRDtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1QkFBdUIsMENBQU87QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQU87QUFDdEM7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsMENBQU87QUFDNUMsNEJBQTRCLGdCQUFnQjtBQUM1QztBQUNBLGtEQUFrRDtBQUNsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL2Nsb3VkLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGVcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSwgZ2V0Q2xvdWRNYXRlcmlhbCB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG91ZFBhcnRpY2xlcygpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gNTAwMCxcclxuICAgICAgICAgICAgY29sb3IgPSAweDAwMDBmZixcclxuICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgIGdyb3d0aFNwZWVkID0gMC4wMSxcclxuICAgICAgICAgICAgbWF4RGlzdGFuY2UgPSAyNSxcclxuICAgICAgICAgICAgc3Bhd25SYWRpdXMgPSAxLFxyXG4gICAgICAgICAgICBzaXplID0gMC41XHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiQ2xvdWRcIjtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdyb3d0aFNwZWVkID0gZ3Jvd3RoU3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF4RGlzdGFuY2UgPSBtYXhEaXN0YW5jZTtcclxuICAgICAgICAgICAgdGhpcy5zcGF3blJhZGl1cyA9IHNwYXduUmFkaXVzO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSBzaXplO1xyXG5cclxuICAgICAgICAgICAgLy8g0LfQtNC10YHRjCDRhdGA0LDQvdC40Lwg0LjQvNC10L3QvdC+INC80LjRgNC+0LLRi9C1INC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIHRoaXMud29ybGRQb3NpdGlvbnMgPSBuZXcgQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9uc1tpXSA9IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKTtcclxuICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSBNYXRoLnJhbmRvbSgpICogdGhpcy5zaXplICsgdGhpcy5zaXplO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFxyXG4gICAgICAgICAgICAgICAgXCJwb3NpdGlvblwiLFxyXG4gICAgICAgICAgICAgICAgbmV3IEJ1ZmZlckF0dHJpYnV0ZShuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKSwgMylcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJzaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodGhpcy5zaXplcywgMSkpO1xyXG5cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKVxyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBtYXA6IHRleHR1cmUsXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5kb21TcGF3bihvcmlnaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc3Bhd25SYWRpdXMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIG9yaWdpbi54ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueSArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnogKyByICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG5cclxuICAgICAgICAgICAgLy8g0L7QsdC90L7QstC70Y/QtdC8INC80LjRgFxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMud29ybGRQb3NpdGlvbnNbaV07XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LTQstC40LbQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgcC5hZGRTY2FsZWRWZWN0b3IodGhpcy5kaXJlY3Rpb24sIGRlbHRhKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDRgNC+0YHRglxyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSArPSB0aGlzLmdyb3d0aFNwZWVkICogZGVsdGE7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L/RgNC+0LLQtdGA0LrQsCDRgNCw0YHRgdGC0L7Rj9C90LjRj1xyXG4gICAgICAgICAgICAgICAgaWYgKHAuZGlzdGFuY2VUbyhvcmlnaW4pID4gdGhpcy5tYXhEaXN0YW5jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMud29ybGRQb3NpdGlvbnNbaV0gPSB0aGlzLnJhbmRvbVNwYXduKG9yaWdpbilcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldID0gdGhpcy5zaXplO1xyXG5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy8g0L/RgNC10L7QsdGA0LDQt9GD0LXQvCDQvNC40YDQvtCy0YvQtSDQutC+0L7RgNC00LjQvdCw0YLRiyDQsiDQu9C+0LrQsNC70YzQvdGL0LUg0LTQu9GPINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICBjb25zdCBsb2NhbFBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgd29ybGRUb0xvY2FsID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLndvcmxkUG9zaXRpb25zW2ldO1xyXG4gICAgICAgICAgICAgICAgd29ybGRUb0xvY2FsLmNvcHkocCkuc3ViKG9yaWdpbik7IC8vINC70L7QutCw0LvRjNC90LDRjyA9INC80LjRgNC+0LLQsNGPIC0g0L/QvtC30LjRhtC40Y8g0YDQvtC00LjRgtC10LvRj1xyXG4gICAgICAgICAgICAgICAgbG9jYWxQb3NpdGlvbnNbaSAqIDNdID0gd29ybGRUb0xvY2FsLng7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogMyArIDFdID0gd29ybGRUb0xvY2FsLnk7XHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogMyArIDJdID0gd29ybGRUb0xvY2FsLno7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5zaXplLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==