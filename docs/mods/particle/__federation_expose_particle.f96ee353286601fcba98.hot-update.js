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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5mOTZlZTM1MzI4NjYwMWZjYmE5OC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDLDZCQUE2Qix3Q0FBSztBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlDQUF5QztBQUN6QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5Qyx1REFBdUQseURBQXNCO0FBQzdFLG9EQUFvRCx5REFBc0I7QUFDMUU7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG9CQUFvQjtBQUNoRDtBQUNBLGdDQUFnQyx3Q0FBSztBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdURBQXVELHlEQUFzQjtBQUM3RSxvREFBb0QseURBQXNCO0FBQzFFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL3N0YXJmaWVsZHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2tcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyZmllbGQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgU3RhcmZpZWxkIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJTdGFyc0ZpZWxkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNGLLCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INC80LXQvdGP0YLRjCDQtNC40L3QsNC80LjRh9C10YHQutC4XHJcbiAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wMDE7XHJcblxyXG4gICAgICAgICAgICAvLyDQodGB0YvQu9C60Lgg0L3QsCDRgdC+0LfQtNCw0L3QvdGL0LUg0L7QsdGK0LXQutGC0Ysg0LTQu9GPINC/0L7RgdC70LXQtNGD0Y7RidC10LPQviDQvtCx0L3QvtCy0LvQtdC90LjRj1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhcmZpZWxkKCk7XHJcbiAgICAgICAgICAgIHRoaXMuc3RhcnRBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCT0LXRgtGC0LXRgCDQuCDRgdC10YLRgtC10YAg0LTQu9GPIG51bVN0YXJzINGBINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lwg0L7QsdC90L7QstC70LXQvdC40LXQvFxyXG4gICAgICAgIGdldCBudW1TdGFycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG51bVN0YXJzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbnVtU3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTsgLy8g0J/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0L/QvtC70LUg0LfQstC10LfQtCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0YHRgtCw0YDRi9C1INGC0L7Rh9C60LgsINC10YHQu9C4INC+0L3QuCDRgdGD0YnQtdGB0YLQstGD0Y7RglxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHNpemU6IDAuMjUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYVRlc3Q6IDAuNSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBtYXA6IHRoaXMubG9hZGVyLmxvYWQoXCJodHRwczovL3MzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tLzNkYnVpbGRlci5yZW5lb3MuY29tL2Fzc2V0cy9jaXJjbGUucG5nXCIpLFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2VuZXJhdGVTdGFyUG9zaXRpb25zKCkge1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5fbnVtU3RhcnM7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9pbnQgPSB0aGlzLmdldFJhbmRvbVNwaGVyZVBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBjb2wgPSBuZXcgQ29sb3IoKS5zZXRIU0wocG9pbnQuaHVlLCAwLjIsIE1hdGgucmFuZG9tKCkpO1xyXG5cclxuICAgICAgICAgICAgICAgIHZlcnRzLnB1c2gocG9pbnQucG9zLngsIHBvaW50LnBvcy55LCBwb2ludC5wb3Mueik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjb2wuciwgY29sLmcsIGNvbC5iKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHsgdmVydHMsIGNvbG9ycyB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAyICsgMjtcclxuICAgICAgICAgICAgY29uc3QgdSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IDIgKiBNYXRoLlBJICogdTtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiB2IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpO1xyXG4gICAgICAgICAgICBsZXQgeiA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiBuZXcgVmVjdG9yMyh4LCB5LCB6KSxcclxuICAgICAgICAgICAgICAgIGh1ZTogMC42LFxyXG4gICAgICAgICAgICAgICAgbWluRGlzdDogcmFkaXVzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVidWlsZFN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgLy8g0JPQtdC90LXRgNC40YDRg9C10Lwg0L3QvtCy0YvQtSDQv9C+0LfQuNGG0LjQuFxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlbmVyYXRlU3RhclBvc2l0aW9ucygpO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7QsdC90L7QstC70Y/QtdC8INCw0YLRgNC40LHRg9GC0Ysg0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLnZlcnRzLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLmNvbG9ycywgMykpO1xyXG5cclxuICAgICAgICAgICAgLy8g0KPQstC10LTQvtC80LvRj9C10LwganMg0L7QsSDQuNC30LzQtdC90LXQvdC40Lgg0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5jb2xvci5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IHRoaXMuY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICAgICAgYW5pbWF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgIHNldE51bVN0YXJzU21vb3RoKG5ld051bVN0YXJzLCBkdXJhdGlvbiA9IDEwMDApIHtcclxuICAgICAgICAgICAgY29uc3Qgc3RhcnRTdGFycyA9IHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFRpbWUgPSBwZXJmb3JtYW5jZS5ub3coKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHVwZGF0ZVN0YXJzID0gKGN1cnJlbnRUaW1lKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbGFwc2VkID0gY3VycmVudFRpbWUgLSBzdGFydFRpbWU7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKGVsYXBzZWQgLyBkdXJhdGlvbiwgMSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/Qu9Cw0LLQvdC+0LUg0LjQt9C80LXQvdC10L3QuNC1INC60L7Qu9C40YfQtdGB0YLQstCwINC30LLQtdC30LRcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gTWF0aC5yb3VuZChzdGFydFN0YXJzICsgKG5ld051bVN0YXJzIC0gc3RhcnRTdGFycykgKiBwcm9ncmVzcyk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTtcclxuXHJcbiAgICAgICAgICAgICAgICBpZiAocHJvZ3Jlc3MgPCAxKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh1cGRhdGVTdGFycyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQntGH0LjRgdGC0LrQsCDRgNC10YHRg9GA0YHQvtCyXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuZ2VvbWV0cnkpIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5tYXRlcmlhbCkgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=