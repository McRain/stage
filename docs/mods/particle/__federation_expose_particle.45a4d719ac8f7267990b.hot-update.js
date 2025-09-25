"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/models/starfields.js":
/*!**********************************!*\
  !*** ./src/models/starfields.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Starfield)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");


const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function Starfield() {
    return class Starfield extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor() {
            super();

            this.type = "StarsField";
            this.loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
            this.clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

            // Параметры, которые можно менять динамически
            this._numStars = 100;
            this.speed = 0.001;
            this.size = 0.25
            this.radius = 10

            // Ссылки на созданные объекты для последующего обновления
            this.points = null;
            this.geometry = null;
            this.material = null;

            this.createStarfield();
            //this.startAnimation();
        }

        // Геттер и сеттер для numStars с автоматическим обновлением
        get numStars() {
            return this._numStars;
        }

        set numStars(value) {
            if (value !== this._numStars) {
                this._numStars = value;
                this.rebuildStarfield(); // Перестраиваем поле звезд при изменении
            }
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        createStarfield() {
            // Удаляем старые точки, если они существуют
            if (this.points) {
                this.remove(this.points);
                if (this.geometry) this.geometry.dispose();
                if (this.material) this.material.dispose();
            }

            const positions = this.generateStarPositions();

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.verts, 3));
            this.geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.colors, 3));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                sizeAttenuation: true,
                size: this.size,
                alphaTest: 0.5,
                transparent: true,
                vertexColors: true,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                map: this.loader.load("https://s3.eu-west-1.amazonaws.com/3dbuilder.reneos.com/assets/circle.png"),
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points);
        }

        generateStarPositions() {
            const verts = [];
            const colors = [];

            for (let i = 0; i < this._numStars; i += 1) {
                const point = this.getRandomSpherePoint();
                const col = new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHSL(point.hue, 0.2, Math.random());

                verts.push(point.pos.x, point.pos.y, point.pos.z);
                colors.push(col.r, col.g, col.b);
            }

            return { verts, colors };
        }

        getRandomSpherePoint() {
            const radius = Math.random() * this.radius + this.radius;
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            let x = radius * Math.sin(phi) * Math.cos(theta);
            let y = radius * Math.sin(phi) * Math.sin(theta);
            let z = radius * Math.cos(phi);

            return {
                pos: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z),
                hue: 0.6,
                minDist: radius,
            };
        }

        rebuildStarfield() {
            // Генерируем новые позиции
            const positions = this.generateStarPositions();

            // Обновляем атрибуты геометрии
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.verts, 3));
            this.geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.colors, 3));

            // Уведомляем js об изменении геометрии
            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.color.needsUpdate = true;
        }

        /*startAnimation() {
            const animate = () => {
                requestAnimationFrame(animate);
                const deltaTime = clock.getDelta();

                this.rotation.y += this.speed * deltaTime;
            };
            animate();
        }*/

        // Метод для плавного изменения количества звезд
        /*setNumStarsSmooth(newNumStars, duration = 1000) {
            const startStars = this._numStars;
            const startTime = performance.now();

            const updateStars = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Плавное изменение количества звезд
                this._numStars = Math.round(startStars + (newNumStars - startStars) * progress);
                this.rebuildStarfield();

                if (progress < 1) {
                    requestAnimationFrame(updateStars);
                }
            };

            requestAnimationFrame(updateStars);
        }*/

        // Очистка ресурсов
        dispose() {
            if (this.geometry) this.geometry.dispose();
            if (this.material) this.material.dispose();
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40NWE0ZDcxOWFjOGY3MjY3OTkwYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDLDZCQUE2Qix3Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EsZ0NBQWdDLHdDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL3N0YXJmaWVsZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2tcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyZmllbGQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgU3RhcmZpZWxkIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJTdGFyc0ZpZWxkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNGLLCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INC80LXQvdGP0YLRjCDQtNC40L3QsNC80LjRh9C10YHQutC4XHJcbiAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDAuMjVcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxyXG5cclxuICAgICAgICAgICAgLy8g0KHRgdGL0LvQutC4INC90LAg0YHQvtC30LTQsNC90L3Ri9C1INC+0LHRitC10LrRgtGLINC00LvRjyDQv9C+0YHQu9C10LTRg9GO0YnQtdCz0L4g0L7QsdC90L7QstC70LXQvdC40Y9cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJmaWVsZCgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RhcnRBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCT0LXRgtGC0LXRgCDQuCDRgdC10YLRgtC10YAg0LTQu9GPIG51bVN0YXJzINGBINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lwg0L7QsdC90L7QstC70LXQvdC40LXQvFxyXG4gICAgICAgIGdldCBudW1TdGFycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG51bVN0YXJzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbnVtU3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTsgLy8g0J/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0L/QvtC70LUg0LfQstC10LfQtCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0YHRgtCw0YDRi9C1INGC0L7Rh9C60LgsINC10YHQu9C4INC+0L3QuCDRgdGD0YnQtdGB0YLQstGD0Y7RglxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHNpemVBdHRlbnVhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhVGVzdDogMC41LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vYXNzZXRzL2NpcmNsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1TdGFyczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5ldyBDb2xvcigpLnNldEhTTChwb2ludC5odWUsIDAuMiwgTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmVydHMucHVzaChwb2ludC5wb3MueCwgcG9pbnQucG9zLnksIHBvaW50LnBvcy56KTtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2ZXJ0cywgY29sb3JzIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSYW5kb21TcGhlcmVQb2ludCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHogPSByYWRpdXMgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBodWU6IDAuNixcclxuICAgICAgICAgICAgICAgIG1pbkRpc3Q6IHJhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYnVpbGRTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INC90L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy52ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy5jb2xvcnMsIDMpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IGpzINC+0LEg0LjQt9C80LXQvdC10L3QuNC4INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgIC8qc2V0TnVtU3RhcnNTbW9vdGgobmV3TnVtU3RhcnMsIGR1cmF0aW9uID0gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFN0YXJzID0gdGhpcy5fbnVtU3RhcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhcnMgPSAoY3VycmVudFRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C70LDQstC90L7QtSDQuNC30LzQtdC90LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSBNYXRoLnJvdW5kKHN0YXJ0U3RhcnMgKyAobmV3TnVtU3RhcnMgLSBzdGFydFN0YXJzKSAqIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVidWlsZFN0YXJmaWVsZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0J7Rh9C40YHRgtC60LAg0YDQtdGB0YPRgNGB0L7QslxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWwpIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9