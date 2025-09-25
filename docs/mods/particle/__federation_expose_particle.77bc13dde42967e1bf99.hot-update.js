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


function Starfield() {
    return class Starfield extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        group;
        loader;
        animate;

        constructor({ numStars = 1000 } = {}) {
            super()
            this.numStars = numStars;

            this.loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();

            this.createStarfield();

            this.speed = 0.001

            this.animate = this.createAnimateFunction();
            this.animate();
        }

        createStarfield() {
            let col;
            const verts = [];
            const colors = [];
            const positions = [];

            for (let i = 0; i < this.numStars; i += 1) {
                let p = this.getRandomSpherePoint();
                const { pos, hue } = p;
                positions.push(p);
                col = new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHSL(hue, 0.2, Math.random());
                verts.push(pos.x, pos.y, pos.z);
                colors.push(col.r, col.g, col.b);
            }

            const geo = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            geo.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(verts, 3));
            geo.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(colors, 3));
            const mat = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                size: 0.25,
                alphaTest: 0.5,
                transparent: true,
                vertexColors: true,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                map: this.loader.load("https://s3.eu-west-1.amazonaws.com/3dbuilder.reneos.com/assets/circle.png"),
            });
            const points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(geo, mat);
            this.add(points);
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

        createAnimateFunction() {
            return () => {
                requestAnimationFrame(this.animate);
                this.rotation.y += 0.001;
            };
        }

        getStarfield() {
            return this;
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43N2JjMTNkZGU0Mjk2N2UxYmY5OS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBLDhCQUE4QixnREFBYTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsbUJBQW1CO0FBQy9DO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQSwwQkFBMEIsd0NBQUs7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaURBQWM7QUFDMUMsNkNBQTZDLHlEQUFzQjtBQUNuRSwwQ0FBMEMseURBQXNCO0FBQ2hFLDRCQUE0QixpREFBYztBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixtREFBZ0I7QUFDMUM7QUFDQSxhQUFhO0FBQ2IsK0JBQStCLHlDQUFNO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsMENBQU87QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvc3RhcmZpZWxkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0YXJmaWVsZCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBncm91cDtcclxuICAgICAgICBsb2FkZXI7XHJcbiAgICAgICAgYW5pbWF0ZTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoeyBudW1TdGFycyA9IDEwMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy5udW1TdGFycyA9IG51bVN0YXJzO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5sb2FkZXIgPSBuZXcgVGV4dHVyZUxvYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVTdGFyZmllbGQoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAwLjAwMVxyXG5cclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlID0gdGhpcy5jcmVhdGVBbmltYXRlRnVuY3Rpb24oKTtcclxuICAgICAgICAgICAgdGhpcy5hbmltYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIGxldCBjb2w7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBbXTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5udW1TdGFyczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcCA9IHRoaXMuZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHsgcG9zLCBodWUgfSA9IHA7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnMucHVzaChwKTtcclxuICAgICAgICAgICAgICAgIGNvbCA9IG5ldyBDb2xvcigpLnNldEhTTChodWUsIDAuMiwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgICAgICB2ZXJ0cy5wdXNoKHBvcy54LCBwb3MueSwgcG9zLnopO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzLnB1c2goY29sLnIsIGNvbC5nLCBjb2wuYik7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGdlbyA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBnZW8uc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUodmVydHMsIDMpKTtcclxuICAgICAgICAgICAgZ2VvLnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKGNvbG9ycywgMykpO1xyXG4gICAgICAgICAgICBjb25zdCBtYXQgPSBuZXcgUG9pbnRzTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgc2l6ZTogMC4yNSxcclxuICAgICAgICAgICAgICAgIGFscGhhVGVzdDogMC41LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vYXNzZXRzL2NpcmNsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICBjb25zdCBwb2ludHMgPSBuZXcgUG9pbnRzKGdlbywgbWF0KTtcclxuICAgICAgICAgICAgdGhpcy5hZGQocG9pbnRzKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFJhbmRvbVNwaGVyZVBvaW50KCkge1xyXG4gICAgICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogMiArIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHogPSByYWRpdXMgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBodWU6IDAuNixcclxuICAgICAgICAgICAgICAgIG1pbkRpc3Q6IHJhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZUFuaW1hdGVGdW5jdGlvbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ICs9IDAuMDAxO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0U3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==