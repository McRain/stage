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

            // Ссылки на созданные объекты для последующего обновления
            this.points = null;
            this.geometry = null;
            this.material = null;

            this.createStarfield();
            this.startAnimation();
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

        startAnimation() {
            const animate = () => {
                requestAnimationFrame(animate);
                const deltaTime = this.clock.getDelta();

                this.rotation.y += this.speed * deltaTime;
            };
            animate();
        }

        // Метод для плавного изменения количества звезд
        setNumStarsSmooth(newNumStars, duration = 1000) {
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
        }

        // Очистка ресурсов
        dispose() {
            if (this.geometry) this.geometry.dispose();
            if (this.material) this.material.dispose();
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4yODFhODJmZDI1YTgwYzAwZmJiOS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDLDZCQUE2Qix3Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDLHVEQUF1RCx5REFBc0I7QUFDN0Usb0RBQW9ELHlEQUFzQjtBQUMxRTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSxhQUFhO0FBQ2I7QUFDQSw4QkFBOEIseUNBQU07QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsb0JBQW9CO0FBQ2hEO0FBQ0EsZ0NBQWdDLHdDQUFLO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvc3RhcmZpZWxkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9ja1xyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJmaWVsZCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBTdGFyZmllbGQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIlN0YXJzRmllbGRcIjtcclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlcigpO1xyXG4gICAgICAgICAgICB0aGlzLmNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQn9Cw0YDQsNC80LXRgtGA0YssINC60L7RgtC+0YDRi9C1INC80L7QttC90L4g0LzQtdC90Y/RgtGMINC00LjQvdCw0LzQuNGH0LXRgdC60LhcclxuICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSAxMDA7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjAwMTtcclxuXHJcbiAgICAgICAgICAgIC8vINCh0YHRi9C70LrQuCDQvdCwINGB0L7Qt9C00LDQvdC90YvQtSDQvtCx0YrQtdC60YLRiyDQtNC70Y8g0L/QvtGB0LvQtdC00YPRjtGJ0LXQs9C+INC+0LHQvdC+0LLQu9C10L3QuNGPXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGFyZmllbGQoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydEFuaW1hdGlvbigpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0JPQtdGC0YLQtdGAINC4INGB0LXRgtGC0LXRgCDQtNC70Y8gbnVtU3RhcnMg0YEg0LDQstGC0L7QvNCw0YLQuNGH0LXRgdC60LjQvCDQvtCx0L3QvtCy0LvQtdC90LjQtdC8XHJcbiAgICAgICAgZ2V0IG51bVN0YXJzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbnVtU3RhcnM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXQgbnVtU3RhcnModmFsdWUpIHtcclxuICAgICAgICAgICAgaWYgKHZhbHVlICE9PSB0aGlzLl9udW1TdGFycykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSB2YWx1ZTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVidWlsZFN0YXJmaWVsZCgpOyAvLyDQn9C10YDQtdGB0YLRgNCw0LjQstCw0LXQvCDQv9C+0LvQtSDQt9Cy0LXQt9C0INC/0YDQuCDQuNC30LzQtdC90LXQvdC40LhcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlU3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICAvLyDQo9C00LDQu9GP0LXQvCDRgdGC0LDRgNGL0LUg0YLQvtGH0LrQuCwg0LXRgdC70Lgg0L7QvdC4INGB0YPRidC10YHRgtCy0YPRjtGCXHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50cykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmUodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnkpIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWwpIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlbmVyYXRlU3RhclBvc2l0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy52ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy5jb2xvcnMsIDMpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogMC4yNSxcclxuICAgICAgICAgICAgICAgIGFscGhhVGVzdDogMC41LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vYXNzZXRzL2NpcmNsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1TdGFyczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5ldyBDb2xvcigpLnNldEhTTChwb2ludC5odWUsIDAuMiwgTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmVydHMucHVzaChwb2ludC5wb3MueCwgcG9pbnQucG9zLnksIHBvaW50LnBvcy56KTtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2ZXJ0cywgY29sb3JzIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSYW5kb21TcGhlcmVQb2ludCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDIgKyAyO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gMiAqIE1hdGguUEkgKiB1O1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIHYgLSAxKTtcclxuICAgICAgICAgICAgbGV0IHggPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB6ID0gcmFkaXVzICogTWF0aC5jb3MocGhpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3M6IG5ldyBWZWN0b3IzKHgsIHksIHopLFxyXG4gICAgICAgICAgICAgICAgaHVlOiAwLjYsXHJcbiAgICAgICAgICAgICAgICBtaW5EaXN0OiByYWRpdXMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByZWJ1aWxkU3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICAvLyDQk9C10L3QtdGA0LjRgNGD0LXQvCDQvdC+0LLRi9C1INC/0L7Qt9C40YbQuNC4XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0L3QvtCy0LvRj9C10Lwg0LDRgtGA0LjQsdGD0YLRiyDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQo9Cy0LXQtNC+0LzQu9GP0LXQvCBqcyDQvtCxINC40LfQvNC10L3QtdC90LjQuCDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmNvbG9yLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0QW5pbWF0aW9uKCkge1xyXG4gICAgICAgICAgICBjb25zdCBhbmltYXRlID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gdGhpcy5jbG9jay5nZXREZWx0YSgpO1xyXG5cclxuICAgICAgICAgICAgICAgIHRoaXMucm90YXRpb24ueSArPSB0aGlzLnNwZWVkICogZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgICAgICBhbmltYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQnNC10YLQvtC0INC00LvRjyDQv9C70LDQstC90L7Qs9C+INC40LfQvNC10L3QtdC90LjRjyDQutC+0LvQuNGH0LXRgdGC0LLQsCDQt9Cy0LXQt9C0XHJcbiAgICAgICAgc2V0TnVtU3RhcnNTbW9vdGgobmV3TnVtU3RhcnMsIGR1cmF0aW9uID0gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFN0YXJzID0gdGhpcy5fbnVtU3RhcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhcnMgPSAoY3VycmVudFRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C70LDQstC90L7QtSDQuNC30LzQtdC90LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSBNYXRoLnJvdW5kKHN0YXJ0U3RhcnMgKyAobmV3TnVtU3RhcnMgLSBzdGFydFN0YXJzKSAqIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVidWlsZFN0YXJmaWVsZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCe0YfQuNGB0YLQutCwINGA0LXRgdGD0YDRgdC+0LJcclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeSkgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==