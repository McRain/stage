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
                size: 0.25,
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
            const radius = Math.random() * 2 + 2;
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
                const deltaTime = this.clock.getDelta();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43OTY2ZjkwMDY1ZjdkMmQwNTlkNy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDLDZCQUE2Qix3Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLGdDQUFnQyx3Q0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlEQUFzQjtBQUM3RSxvREFBb0QseURBQXNCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9zdGFyZmllbGRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsIENsb2NrXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0YXJmaWVsZCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiU3RhcnNGaWVsZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDRiywg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDQvNC10L3Rj9GC0Ywg0LTQuNC90LDQvNC40YfQtdGB0LrQuFxyXG4gICAgICAgICAgICB0aGlzLl9udW1TdGFycyA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDAxO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSAwLjI1XHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gMTBcclxuXHJcbiAgICAgICAgICAgIC8vINCh0YHRi9C70LrQuCDQvdCwINGB0L7Qt9C00LDQvdC90YvQtSDQvtCx0YrQtdC60YLRiyDQtNC70Y8g0L/QvtGB0LvQtdC00YPRjtGJ0LXQs9C+INC+0LHQvdC+0LLQu9C10L3QuNGPXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGFyZmllbGQoKTtcclxuICAgICAgICAgICAgLy90aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQk9C10YLRgtC10YAg0Lgg0YHQtdGC0YLQtdGAINC00LvRjyBudW1TdGFycyDRgSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC8INC+0LHQvdC+0LLQu9C10L3QuNC10LxcclxuICAgICAgICBnZXQgbnVtU3RhcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9udW1TdGFycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBudW1TdGFycyh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX251bVN0YXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9udW1TdGFycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWJ1aWxkU3RhcmZpZWxkKCk7IC8vINCf0LXRgNC10YHRgtGA0LDQuNCy0LDQtdC8INC/0L7Qu9C1INC30LLQtdC30LQg0L/RgNC4INC40LfQvNC10L3QtdC90LjQuFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCj0LTQsNC70Y/QtdC8INGB0YLQsNGA0YvQtSDRgtC+0YfQutC4LCDQtdGB0LvQuCDQvtC90Lgg0YHRg9GJ0LXRgdGC0LLRg9GO0YJcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeSkgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCkgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLnZlcnRzLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLmNvbG9ycywgMykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgYWxwaGFUZXN0OiAwLjUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgbWFwOiB0aGlzLmxvYWRlci5sb2FkKFwiaHR0cHM6Ly9zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS8zZGJ1aWxkZXIucmVuZW9zLmNvbS9hc3NldHMvY2lyY2xlLnBuZ1wiKSxcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdlbmVyYXRlU3RhclBvc2l0aW9ucygpIHtcclxuICAgICAgICAgICAgY29uc3QgdmVydHMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuX251bVN0YXJzOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvaW50ID0gdGhpcy5nZXRSYW5kb21TcGhlcmVQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgY29sID0gbmV3IENvbG9yKCkuc2V0SFNMKHBvaW50Lmh1ZSwgMC4yLCBNYXRoLnJhbmRvbSgpKTtcclxuXHJcbiAgICAgICAgICAgICAgICB2ZXJ0cy5wdXNoKHBvaW50LnBvcy54LCBwb2ludC5wb3MueSwgcG9pbnQucG9zLnopO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7IHZlcnRzLCBjb2xvcnMgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJhbmRvbVNwaGVyZVBvaW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMiArIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHogPSByYWRpdXMgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBodWU6IDAuNixcclxuICAgICAgICAgICAgICAgIG1pbkRpc3Q6IHJhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYnVpbGRTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INC90L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy52ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy5jb2xvcnMsIDMpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IGpzINC+0LEg0LjQt9C80LXQvdC10L3QuNC4INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRoaXMuY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyDQnNC10YLQvtC0INC00LvRjyDQv9C70LDQstC90L7Qs9C+INC40LfQvNC10L3QtdC90LjRjyDQutC+0LvQuNGH0LXRgdGC0LLQsCDQt9Cy0LXQt9C0XHJcbiAgICAgICAgLypzZXROdW1TdGFyc1Ntb290aChuZXdOdW1TdGFycywgZHVyYXRpb24gPSAxMDAwKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0U3RhcnMgPSB0aGlzLl9udW1TdGFycztcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRUaW1lID0gcGVyZm9ybWFuY2Uubm93KCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB1cGRhdGVTdGFycyA9IChjdXJyZW50VGltZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZWxhcHNlZCA9IGN1cnJlbnRUaW1lIC0gc3RhcnRUaW1lO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcHJvZ3Jlc3MgPSBNYXRoLm1pbihlbGFwc2VkIC8gZHVyYXRpb24sIDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0LvQsNCy0L3QvtC1INC40LfQvNC10L3QtdC90LjQtSDQutC+0LvQuNGH0LXRgdGC0LLQsCDQt9Cy0LXQt9C0XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9udW1TdGFycyA9IE1hdGgucm91bmQoc3RhcnRTdGFycyArIChuZXdOdW1TdGFycyAtIHN0YXJ0U3RhcnMpICogcHJvZ3Jlc3MpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWJ1aWxkU3RhcmZpZWxkKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgaWYgKHByb2dyZXNzIDwgMSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVTdGFycyk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU3RhcnMpO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvLyDQntGH0LjRgdGC0LrQsCDRgNC10YHRg9GA0YHQvtCyXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnkpIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCkgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=