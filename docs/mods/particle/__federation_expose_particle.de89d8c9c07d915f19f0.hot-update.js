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



function getCloudMaterial() {

    const material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
        uniforms: {
            pointTexture: { value: texture },
            time: { value: 0 }
        },
        vertexShader: this.getVertexShader(),
        fragmentShader: this.getFragmentShader(),
        transparent: true,
        //blending: AdditiveBlending,
        depthWrite: false
    });

}

/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5kZTg5ZDhjOWMwN2Q5MTVmMTlmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXNEO0FBQ3REO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsZ0RBQWE7QUFDckM7QUFDQTtBQUNBO0FBQ2dDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBYztBQUN2QztBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsQyIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvdG9vbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzVGV4dHVyZSwgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDAsIDAsIDEpJyk7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgxNzksIDI1NSwgMCwgMC41KScpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcblxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjQsIDY0KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQYXJ0aWNsZVRleHR1cmUgfVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvdWRNYXRlcmlhbCgpIHtcclxuXHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiB0aGlzLmdldFZlcnRleFNoYWRlcigpLFxyXG4gICAgICAgIGZyYWdtZW50U2hhZGVyOiB0aGlzLmdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG59Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9