"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParticleTexture: () => (/* binding */ createParticleTexture)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");


function createParticleTexture() {
    // Создание текстуры программно
    const canvas = document.createElement('canvas');
    canvas.width = 64;
    canvas.height = 64;
    const context = canvas.getContext('2d');

    // Градиентный круг
    const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
    gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
    gradient.addColorStop(0.5, 'rgba(179, 255, 0, 0.5)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);

    const texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);
    return texture;
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43NDU4YmNiMjQzZTM1NjJhMDViZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWE7QUFDckM7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy90b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNUZXh0dXJlIH0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKSB7XHJcbiAgICAvLyDQodC+0LfQtNCw0L3QuNC1INGC0LXQutGB0YLRg9GA0Ysg0L/RgNC+0LPRgNCw0LzQvNC90L5cclxuICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgY2FudmFzLndpZHRoID0gNjQ7XHJcbiAgICBjYW52YXMuaGVpZ2h0ID0gNjQ7XHJcbiAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgLy8g0JPRgNCw0LTQuNC10L3RgtC90YvQuSDQutGA0YPQs1xyXG4gICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDMyLCAzMiwgMCwgMzIsIDMyLCAzMik7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAwLCAwLCAxKScpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMTc5LCAyNTUsIDAsIDAuNSknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xyXG5cclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDY0LCA2NCk7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=