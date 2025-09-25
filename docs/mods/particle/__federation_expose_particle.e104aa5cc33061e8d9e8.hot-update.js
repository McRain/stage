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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lMTA0YWE1Y2MzMzA2MWU4ZDllOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDLDZCQUE2Qix3Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5Q0FBeUM7QUFDekM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLGdDQUFnQyx3Q0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlEQUFzQjtBQUM3RSxvREFBb0QseURBQXNCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9zdGFyZmllbGRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsIENsb2NrXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0YXJmaWVsZCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiU3RhcnNGaWVsZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMuY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCf0LDRgNCw0LzQtdGC0YDRiywg0LrQvtGC0L7RgNGL0LUg0LzQvtC20L3QviDQvNC10L3Rj9GC0Ywg0LTQuNC90LDQvNC40YfQtdGB0LrQuFxyXG4gICAgICAgICAgICB0aGlzLl9udW1TdGFycyA9IDEwMDtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDAxO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSAwLjI1XHJcbiAgICAgICAgICAgIHRoaXMucmFkaXVzID0gMTBcclxuXHJcbiAgICAgICAgICAgIC8vINCh0YHRi9C70LrQuCDQvdCwINGB0L7Qt9C00LDQvdC90YvQtSDQvtCx0YrQtdC60YLRiyDQtNC70Y8g0L/QvtGB0LvQtdC00YPRjtGJ0LXQs9C+INC+0LHQvdC+0LLQu9C10L3QuNGPXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGFyZmllbGQoKTtcclxuICAgICAgICAgICAgLy90aGlzLnN0YXJ0QW5pbWF0aW9uKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQk9C10YLRgtC10YAg0Lgg0YHQtdGC0YLQtdGAINC00LvRjyBudW1TdGFycyDRgSDQsNCy0YLQvtC80LDRgtC40YfQtdGB0LrQuNC8INC+0LHQvdC+0LLQu9C10L3QuNC10LxcclxuICAgICAgICBnZXQgbnVtU3RhcnMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9udW1TdGFycztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBudW1TdGFycyh2YWx1ZSkge1xyXG4gICAgICAgICAgICBpZiAodmFsdWUgIT09IHRoaXMuX251bVN0YXJzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9udW1TdGFycyA9IHZhbHVlO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZWJ1aWxkU3RhcmZpZWxkKCk7IC8vINCf0LXRgNC10YHRgtGA0LDQuNCy0LDQtdC8INC/0L7Qu9C1INC30LLQtdC30LQg0L/RgNC4INC40LfQvNC10L3QtdC90LjQuFxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCj0LTQsNC70Y/QtdC8INGB0YLQsNGA0YvQtSDRgtC+0YfQutC4LCDQtdGB0LvQuCDQvtC90Lgg0YHRg9GJ0LXRgdGC0LLRg9GO0YJcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZSh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeSkgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCkgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLnZlcnRzLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLmNvbG9ycywgMykpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBzaXplOiB0aGlzLnNpemUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYVRlc3Q6IDAuNSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBtYXA6IHRoaXMubG9hZGVyLmxvYWQoXCJodHRwczovL3MzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tLzNkYnVpbGRlci5yZW5lb3MuY29tL2Fzc2V0cy9jaXJjbGUucG5nXCIpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtU3RhcnM7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLmdldFJhbmRvbVNwaGVyZVBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBuZXcgQ29sb3IoKS5zZXRIU0wocG9pbnQuaHVlLCAwLjIsIE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZlcnRzLnB1c2gocG9pbnQucG9zLngsIHBvaW50LnBvcy55LCBwb2ludC5wb3Mueik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjb2wuciwgY29sLmcsIGNvbC5iKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmVydHMsIGNvbG9ycyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiB0aGlzLnJhZGl1cyArIHRoaXMucmFkaXVzO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gMiAqIE1hdGguUEkgKiB1O1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIHYgLSAxKTtcclxuICAgICAgICAgICAgbGV0IHggPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB6ID0gcmFkaXVzICogTWF0aC5jb3MocGhpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3M6IG5ldyBWZWN0b3IzKHgsIHksIHopLFxyXG4gICAgICAgICAgICAgICAgaHVlOiAwLjYsXHJcbiAgICAgICAgICAgICAgICBtaW5EaXN0OiByYWRpdXMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWJ1aWxkU3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICAvLyDQk9C10L3QtdGA0LjRgNGD0LXQvCDQvdC+0LLRi9C1INC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LDRgtGA0LjQsdGD0YLRiyDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQo9Cy0LXQtNC+0LzQu9GP0LXQvCBqcyDQvtCxINC40LfQvNC10L3QtdC90LjQuCDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qc3RhcnRBbmltYXRpb24oKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGFuaW1hdGUgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoYW5pbWF0ZSk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBkZWx0YVRpbWUgPSBjbG9jay5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24ueSArPSB0aGlzLnNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vINCc0LXRgtC+0LQg0LTQu9GPINC/0LvQsNCy0L3QvtCz0L4g0LjQt9C80LXQvdC10L3QuNGPINC60L7Qu9C40YfQtdGB0YLQstCwINC30LLQtdC30LRcclxuICAgICAgICAvKnNldE51bVN0YXJzU21vb3RoKG5ld051bVN0YXJzLCBkdXJhdGlvbiA9IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRTdGFycyA9IHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXJzID0gKGN1cnJlbnRUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/Qu9Cw0LLQvdC+0LUg0LjQt9C80LXQvdC10L3QuNC1INC60L7Qu9C40YfQtdGB0YLQstCwINC30LLQtdC30LRcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gTWF0aC5yb3VuZChzdGFydFN0YXJzICsgKG5ld051bVN0YXJzIC0gc3RhcnRTdGFycykgKiBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVTdGFycyk7XHJcbiAgICAgICAgfSovXHJcblxyXG4gICAgICAgIC8vINCe0YfQuNGB0YLQutCwINGA0LXRgdGD0YDRgdC+0LJcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeSkgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==