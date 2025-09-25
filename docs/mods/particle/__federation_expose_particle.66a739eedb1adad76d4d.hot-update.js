"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/tools.js":
/*!**********************!*\
  !*** ./src/tools.js ***!
  \**********************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createParticleTexture: () => (/* binding */ createParticleTexture),
/* harmony export */   getCloudMaterial: () => (/* binding */ getCloudMaterial)
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
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

    context.fillStyle = gradient;
    context.fillRect(0, 0, 64, 64);

    const texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);
    return texture;
}



function getVertexShader() {
    return `
            attribute float size;
            attribute float alpha;
            attribute vec3 velocity;
            
            varying float vAlpha;
            uniform float time;
            
            void main() {
                vAlpha = alpha;
                
                // Анимация движения
                vec3 newPosition = position;
                newPosition.x += sin(time * 0.001 + position.y) * 0.1;
                newPosition.y += time * 0.01 * velocity.y;
                newPosition.z += cos(time * 0.001 + position.x) * 0.1;
                
                // Циклическое возрождение частиц
                if (newPosition.y > 10.0) {
                    newPosition.y = -5.0;
                }
                
                vec4 mvPosition = modelViewMatrix * vec4(newPosition, 1.0);
                gl_PointSize = size * (300.0 / -mvPosition.z);
                gl_Position = projectionMatrix * mvPosition;
            }
        `;
}

function getFragmentShader() {
    return `
            uniform sampler2D pointTexture;
            varying float vAlpha;
            
            void main() {
                vec4 texColor = texture2D(pointTexture, gl_PointCoord);
                gl_FragColor = vec4(1.0, 1.0, 1.0, texColor.a * vAlpha);
                
                // Мягкие края
                float distanceFromCenter = length(gl_PointCoord - vec2(0.5));
                if (distanceFromCenter > 0.5) {
                    discard;
                }
                gl_FragColor.a *= 1.0 - smoothstep(0.3, 0.5, distanceFromCenter);
            }
        `;
}

function getCloudMaterial(texture) {

    const material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
        uniforms: {
            pointTexture: { value: texture },
            time: { value: 0 }
        },
        vertexShader: getVertexShader(),
        fragmentShader: getFragmentShader(),
        transparent: true,
        //blending: AdditiveBlending,
        depthWrite: false
    });
    return material

}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS42NmE3MzllZWRiMWFkYWQ3NmQ0ZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBYztBQUN2QztBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy90b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNUZXh0dXJlLCBTaGFkZXJNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFydGljbGVUZXh0dXJlKCkge1xyXG4gICAgLy8g0KHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0YPRgNGLINC/0YDQvtCz0YDQsNC80LzQvdC+XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDY0O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDY0O1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vINCT0YDQsNC00LjQtdC90YLQvdGL0Lkg0LrRgNGD0LNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgzMiwgMzIsIDAsIDMyLCAzMiwgMzIpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMCwgMCwgMSknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDE3OSwgMjU1LCAwLCAwLjUpJyk7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknKTtcclxuXHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA2NCwgNjQpO1xyXG5cclxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9XHJcblxyXG5mdW5jdGlvbiBnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgc2l6ZTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFscGhhO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2QWxwaGEgPSBhbHBoYTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQtNCy0LjQttC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICB2ZWMzIG5ld1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi54ICs9IHNpbih0aW1lICogMC4wMDEgKyBwb3NpdGlvbi55KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGltZSAqIDAuMDEgKiB2ZWxvY2l0eS55O1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueiArPSBjb3ModGltZSAqIDAuMDAxICsgcG9zaXRpb24ueCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCm0LjQutC70LjRh9C10YHQutC+0LUg0LLQvtC30YDQvtC20LTQtdC90LjQtSDRh9Cw0YHRgtC40YZcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi55ID4gMTAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgPSAtNS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5ld1Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gc2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgcG9pbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQocG9pbnRUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgdGV4Q29sb3IuYSAqIHZBbHBoYSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCc0Y/Qs9C60LjQtSDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgZmxvYXQgZGlzdGFuY2VGcm9tQ2VudGVyID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUNlbnRlciA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IuYSAqPSAxLjAgLSBzbW9vdGhzdGVwKDAuMywgMC41LCBkaXN0YW5jZUZyb21DZW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvdWRNYXRlcmlhbCh0ZXh0dXJlKSB7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENsb3VkTWF0ZXJpYWwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==