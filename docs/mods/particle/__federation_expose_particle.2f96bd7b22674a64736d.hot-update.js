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
                this.sizes[i] = this.size;
            }

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute(
                "position",
                new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(new Float32Array(this.count * 3), 3)
            );
            this.geometry.setAttribute("size", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(this.sizes, 1));


            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)()//this.createParticleTexture();
            /*this.material = new ShaderMaterial({
                uniforms: {
                    pointTexture: { value: texture },
                    time: { value: 0 }
                },
                vertexShader: this.getVertexShader(),
                fragmentShader: this.getFragmentShader(),
                transparent: true,
                //blending: AdditiveBlending,
                depthWrite: false
            });*/

            this.material = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getCloudMaterial)(texture)/*= new PointsMaterial({
                uniforms: {
                    pointTexture: { value: texture }
                },
                color: this.color,
                size: this.size,
                transparent: true,
                opacity: 0.5,
                depthWrite: false
            });*/

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4yZjk2YmQ3YjIyNjc0YTY0NzM2ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQVFlO0FBQ2Y7QUFDb0U7QUFDcEU7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLHdDQUF3QywyQ0FBUTtBQUNoRDtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsMENBQU87QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLElBQUk7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwrQkFBK0IsMENBQU87QUFDdEM7QUFDQTtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLG9CQUFvQixrREFBZTtBQUNuQztBQUNBLG1EQUFtRCxrREFBZTtBQUNsRTtBQUNBO0FBQ0EsNEJBQTRCLGdFQUFxQjtBQUNqRDtBQUNBO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRCw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLDRCQUE0QiwyREFBZ0I7QUFDNUM7QUFDQSxvQ0FBb0M7QUFDcEMsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLEVBQUU7QUFDZjtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwwQ0FBTztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLCtCQUErQiwwQ0FBTztBQUN0QztBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFDQUFxQywwQ0FBTztBQUM1Qyw0QkFBNEIsZ0JBQWdCO0FBQzVDO0FBQ0Esa0RBQWtEO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvY2xvdWQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlLCBnZXRDbG91ZE1hdGVyaWFsIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgY291bnQgPSA1MDAwLFxyXG4gICAgICAgICAgICBjb2xvciA9IDB4MDAwMGZmLFxyXG4gICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgICAgICAgZ3Jvd3RoU3BlZWQgPSAwLjAxLFxyXG4gICAgICAgICAgICBtYXhEaXN0YW5jZSA9IDI1LFxyXG4gICAgICAgICAgICBzcGF3blJhZGl1cyA9IDEsXHJcbiAgICAgICAgICAgIHNpemUgPSAwLjVcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDbG91ZFwiO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLmNvbG9yID0gY29sb3I7XHJcbiAgICAgICAgICAgIHRoaXMuZGlyZWN0aW9uID0gZGlyZWN0aW9uLmNsb25lKCkubm9ybWFsaXplKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ3Jvd3RoU3BlZWQgPSBncm93dGhTcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5tYXhEaXN0YW5jZSA9IG1heERpc3RhbmNlO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gc3Bhd25SYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IHNpemU7XHJcblxyXG4gICAgICAgICAgICAvLyDQt9C00LXRgdGMINGF0YDQsNC90LjQvCDQuNC80LXQvdC90L4g0LzQuNGA0L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9ucyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuICAgICAgICAgICAgdGhpcy5zaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLndvcmxkUG9zaXRpb25zW2ldID0gdGhpcy5yYW5kb21TcGF3bihvcmlnaW4pO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5zaXplc1tpXSA9IHRoaXMuc2l6ZTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcclxuICAgICAgICAgICAgICAgIFwicG9zaXRpb25cIixcclxuICAgICAgICAgICAgICAgIG5ldyBCdWZmZXJBdHRyaWJ1dGUobmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyksIDMpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwic2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHRoaXMuc2l6ZXMsIDEpKTtcclxuXHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCkvL3RoaXMuY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIC8qdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogdGhpcy5nZXRWZXJ0ZXhTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiB0aGlzLmdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIC8vYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTsqL1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IGdldENsb3VkTWF0ZXJpYWwodGV4dHVyZSkvKj0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBjb2xvcjogdGhpcy5jb2xvcixcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMC41LFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7Ki9cclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJhbmRvbVNwYXduKG9yaWdpbikge1xyXG4gICAgICAgICAgICBjb25zdCByID0gdGhpcy5zcGF3blJhZGl1cyAqIE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIE1hdGgucmFuZG9tKCkgLSAxKTtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBWZWN0b3IzKFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnggKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi55ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueiArIHIgKiBNYXRoLmNvcyhwaGkpXHJcbiAgICAgICAgICAgICk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LzQuNGAXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwID0gdGhpcy53b3JsZFBvc2l0aW9uc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICBwLmFkZFNjYWxlZFZlY3Rvcih0aGlzLmRpcmVjdGlvbiwgZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINGA0L7RgdGCXHJcbiAgICAgICAgICAgICAgICB0aGlzLnNpemVzW2ldICs9IHRoaXMuZ3Jvd3RoU3BlZWQgKiBkZWx0YTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQv9GA0L7QstC10YDQutCwINGA0LDRgdGB0YLQvtGP0L3QuNGPXHJcbiAgICAgICAgICAgICAgICBpZiAocC5kaXN0YW5jZVRvKG9yaWdpbikgPiB0aGlzLm1heERpc3RhbmNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy53b3JsZFBvc2l0aW9uc1tpXSA9IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKVxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2l6ZXNbaV0gPSB0aGlzLnNpemU7XHJcblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAvLyDQv9GA0LXQvtCx0YDQsNC30YPQtdC8INC80LjRgNC+0LLRi9C1INC60L7QvtGA0LTQuNC90LDRgtGLINCyINC70L7QutCw0LvRjNC90YvQtSDQtNC70Y8g0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgIGNvbnN0IGxvY2FsUG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCB3b3JsZFRvTG9jYWwgPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMud29ybGRQb3NpdGlvbnNbaV07XHJcbiAgICAgICAgICAgICAgICB3b3JsZFRvTG9jYWwuY29weShwKS5zdWIob3JpZ2luKTsgLy8g0LvQvtC60LDQu9GM0L3QsNGPID0g0LzQuNGA0L7QstCw0Y8gLSDQv9C+0LfQuNGG0LjRjyDRgNC+0LTQuNGC0LXQu9GPXHJcbiAgICAgICAgICAgICAgICBsb2NhbFBvc2l0aW9uc1tpICogM10gPSB3b3JsZFRvTG9jYWwueDtcclxuICAgICAgICAgICAgICAgIGxvY2FsUG9zaXRpb25zW2kgKiAzICsgMV0gPSB3b3JsZFRvTG9jYWwueTtcclxuICAgICAgICAgICAgICAgIGxvY2FsUG9zaXRpb25zW2kgKiAzICsgMl0gPSB3b3JsZFRvTG9jYWwuejtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9