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


const clock = new THREE.Clock();

function Starfield() {
    return class Starfield extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        group;
        loader;
        animate;

        constructor({ numStars = 1000 } = {}) {
            super()

            this.type = "StarsField";
            this.numStars = numStars;

            this.loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();

            this.createStarfield();

            this.speed = 0.001

            this.animate = this.createAnimateFunction();
            this.animate();
        }

        getTypes() {
            return [...super.getTypes(), this.type]
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
            return (a) => {
                requestAnimationFrame(this.animate);
                const deltaTime = clock.getDelta();

                this.rotation.y += this.speed * deltaTime;
            };
        }

        getStarfield() {
            return this;
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5mMGZiOTU1MzFmYTAwMTI3YWEzZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNBO0FBQ0E7QUFDZTtBQUNmLG1DQUFtQywyQ0FBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQixrQkFBa0IsSUFBSTtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0EsMEJBQTBCLHdDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFjO0FBQzFDLDZDQUE2Qyx5REFBc0I7QUFDbkUsMENBQTBDLHlEQUFzQjtBQUNoRSw0QkFBNEIsaURBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiLCtCQUErQix5Q0FBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9zdGFyZmllbGRzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBUSFJFRS5DbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0YXJmaWVsZCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBncm91cDtcclxuICAgICAgICBsb2FkZXI7XHJcbiAgICAgICAgYW5pbWF0ZTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoeyBudW1TdGFycyA9IDEwMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuXHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiU3RhcnNGaWVsZFwiO1xyXG4gICAgICAgICAgICB0aGlzLm51bVN0YXJzID0gbnVtU3RhcnM7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmxvYWRlciA9IG5ldyBUZXh0dXJlTG9hZGVyKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJmaWVsZCgpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDAuMDAxXHJcblxyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUgPSB0aGlzLmNyZWF0ZUFuaW1hdGVGdW5jdGlvbigpO1xyXG4gICAgICAgICAgICB0aGlzLmFuaW1hdGUoKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgbGV0IGNvbDtcclxuICAgICAgICAgICAgY29uc3QgdmVydHMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLm51bVN0YXJzOyBpICs9IDEpIHtcclxuICAgICAgICAgICAgICAgIGxldCBwID0gdGhpcy5nZXRSYW5kb21TcGhlcmVQb2ludCgpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgeyBwb3MsIGh1ZSB9ID0gcDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9ucy5wdXNoKHApO1xyXG4gICAgICAgICAgICAgICAgY29sID0gbmV3IENvbG9yKCkuc2V0SFNMKGh1ZSwgMC4yLCBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgICAgIHZlcnRzLnB1c2gocG9zLngsIHBvcy55LCBwb3Mueik7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnMucHVzaChjb2wuciwgY29sLmcsIGNvbC5iKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgZ2VvID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGdlby5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSh2ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICBnZW8uc2V0QXR0cmlidXRlKFwiY29sb3JcIiwgbmV3IEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcbiAgICAgICAgICAgIGNvbnN0IG1hdCA9IG5ldyBQb2ludHNNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICBzaXplOiAwLjI1LFxyXG4gICAgICAgICAgICAgICAgYWxwaGFUZXN0OiAwLjUsXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHZlcnRleENvbG9yczogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgbWFwOiB0aGlzLmxvYWRlci5sb2FkKFwiaHR0cHM6Ly9zMy5ldS13ZXN0LTEuYW1hem9uYXdzLmNvbS8zZGJ1aWxkZXIucmVuZW9zLmNvbS9hc3NldHMvY2lyY2xlLnBuZ1wiKSxcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvaW50cyA9IG5ldyBQb2ludHMoZ2VvLCBtYXQpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZChwb2ludHMpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiAyICsgMjtcclxuICAgICAgICAgICAgY29uc3QgdSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IDIgKiBNYXRoLlBJICogdTtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiB2IC0gMSk7XHJcbiAgICAgICAgICAgIGxldCB4ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHkgPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpO1xyXG4gICAgICAgICAgICBsZXQgeiA9IHJhZGl1cyAqIE1hdGguY29zKHBoaSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiBuZXcgVmVjdG9yMyh4LCB5LCB6KSxcclxuICAgICAgICAgICAgICAgIGh1ZTogMC42LFxyXG4gICAgICAgICAgICAgICAgbWluRGlzdDogcmFkaXVzLFxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlQW5pbWF0ZUZ1bmN0aW9uKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gKGEpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgZGVsdGFUaW1lID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgICAgICB0aGlzLnJvdGF0aW9uLnkgKz0gdGhpcy5zcGVlZCAqIGRlbHRhVGltZTtcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=