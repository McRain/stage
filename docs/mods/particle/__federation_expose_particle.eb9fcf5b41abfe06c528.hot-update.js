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
                console.log(a)
                requestAnimationFrame(this.animate);
                this.rotation.y = this.speed * a * Math.PI;
            };
        }

        getStarfield() {
            return this;
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5lYjlmY2Y1YjQxYWJmZTA2YzUyOC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBVWU7QUFDZjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLGtCQUFrQixJQUFJO0FBQzVDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsOEJBQThCLGdEQUFhO0FBQzNDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBLHdCQUF3QixXQUFXO0FBQ25DO0FBQ0EsMEJBQTBCLHdDQUFLO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlEQUFjO0FBQzFDLDZDQUE2Qyx5REFBc0I7QUFDbkUsMENBQTBDLHlEQUFzQjtBQUNoRSw0QkFBNEIsaURBQWM7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiLCtCQUErQix5Q0FBTTtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLDBDQUFPO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvc3RhcmZpZWxkcy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIFN0YXJmaWVsZCBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBncm91cDtcclxuICAgICAgICBsb2FkZXI7XHJcbiAgICAgICAgYW5pbWF0ZTtcclxuXHJcbiAgICAgICAgY29uc3RydWN0b3IoeyBudW1TdGFycyA9IDEwMDAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJTdGFyc0ZpZWxkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubnVtU3RhcnMgPSBudW1TdGFycztcclxuXHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlU3RhcmZpZWxkKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wMDFcclxuXHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSA9IHRoaXMuY3JlYXRlQW5pbWF0ZUZ1bmN0aW9uKCk7XHJcbiAgICAgICAgICAgIHRoaXMuYW5pbWF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlU3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICBsZXQgY29sO1xyXG4gICAgICAgICAgICBjb25zdCB2ZXJ0cyA9IFtdO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBbXTtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gW107XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubnVtU3RhcnM7IGkgKz0gMSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHAgPSB0aGlzLmdldFJhbmRvbVNwaGVyZVBvaW50KCk7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB7IHBvcywgaHVlIH0gPSBwO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zLnB1c2gocCk7XHJcbiAgICAgICAgICAgICAgICBjb2wgPSBuZXcgQ29sb3IoKS5zZXRIU0woaHVlLCAwLjIsIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICAgICAgdmVydHMucHVzaChwb3MueCwgcG9zLnksIHBvcy56KTtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCBnZW8gPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgZ2VvLnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHZlcnRzLCAzKSk7XHJcbiAgICAgICAgICAgIGdlby5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsIDMpKTtcclxuICAgICAgICAgICAgY29uc3QgbWF0ID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHNpemU6IDAuMjUsXHJcbiAgICAgICAgICAgICAgICBhbHBoYVRlc3Q6IDAuNSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgdmVydGV4Q29sb3JzOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBtYXA6IHRoaXMubG9hZGVyLmxvYWQoXCJodHRwczovL3MzLmV1LXdlc3QtMS5hbWF6b25hd3MuY29tLzNkYnVpbGRlci5yZW5lb3MuY29tL2Fzc2V0cy9jaXJjbGUucG5nXCIpLFxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICAgICAgY29uc3QgcG9pbnRzID0gbmV3IFBvaW50cyhnZW8sIG1hdCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSYW5kb21TcGhlcmVQb2ludCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDIgKyAyO1xyXG4gICAgICAgICAgICBjb25zdCB1ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdiA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gMiAqIE1hdGguUEkgKiB1O1xyXG4gICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLmFjb3MoMiAqIHYgLSAxKTtcclxuICAgICAgICAgICAgbGV0IHggPSByYWRpdXMgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpO1xyXG4gICAgICAgICAgICBsZXQgeSA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB6ID0gcmFkaXVzICogTWF0aC5jb3MocGhpKTtcclxuXHJcbiAgICAgICAgICAgIHJldHVybiB7XHJcbiAgICAgICAgICAgICAgICBwb3M6IG5ldyBWZWN0b3IzKHgsIHksIHopLFxyXG4gICAgICAgICAgICAgICAgaHVlOiAwLjYsXHJcbiAgICAgICAgICAgICAgICBtaW5EaXN0OiByYWRpdXMsXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVBbmltYXRlRnVuY3Rpb24oKSB7XHJcbiAgICAgICAgICAgIHJldHVybiAoYSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coYSlcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLmFuaW1hdGUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ID0gdGhpcy5zcGVlZCAqIGEgKiBNYXRoLlBJO1xyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0U3RhcmZpZWxkKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==