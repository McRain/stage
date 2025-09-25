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
    gradient.addColorStop(0, 'rgba(255, 230, 0, 1)');
    gradient.addColorStop(0.5, 'rgba(255, 0, 0, 0.84)');
    gradient.addColorStop(1, 'rgba(255, 238, 0, 0.12)');

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40YTg4M2M5MTI4NDNhZjg1ZjNmMC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBYztBQUN2QztBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy90b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDYW52YXNUZXh0dXJlLCBTaGFkZXJNYXRlcmlhbCB9IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuZnVuY3Rpb24gY3JlYXRlUGFydGljbGVUZXh0dXJlKCkge1xyXG4gICAgLy8g0KHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0YPRgNGLINC/0YDQvtCz0YDQsNC80LzQvdC+XHJcbiAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgIGNhbnZhcy53aWR0aCA9IDY0O1xyXG4gICAgY2FudmFzLmhlaWdodCA9IDY0O1xyXG4gICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgIC8vINCT0YDQsNC00LjQtdC90YLQvdGL0Lkg0LrRgNGD0LNcclxuICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgzMiwgMzIsIDAsIDMyLCAzMiwgMzIpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMjMwLCAwLCAxKScpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LCAwLCAwLCAwLjg0KScpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjM4LCAwLCAwLjEyKScpO1xyXG5cclxuICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDY0LCA2NCk7XHJcblxyXG4gICAgY29uc3QgdGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICByZXR1cm4gdGV4dHVyZTtcclxufVxyXG5cclxuZXhwb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH1cclxuXHJcbmZ1bmN0aW9uIGdldFZlcnRleFNoYWRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBzaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYWxwaGE7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlYzMgbmV3UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSArPSB0aW1lICogMC4wMSAqIHZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi56ICs9IGNvcyh0aW1lICogMC4wMDEgKyBwb3NpdGlvbi54KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0KbQuNC60LvQuNGH0LXRgdC60L7QtSDQstC+0LfRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhlxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgPiAxMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSA9IC01LjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBzaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0RnJhZ21lbnRTaGFkZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCBwb2ludFRleHR1cmU7XHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChwb2ludFRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JzRj9Cz0LrQuNC1INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBmbG9hdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQ2VudGVyID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRDbG91ZE1hdGVyaWFsKHRleHR1cmUpIHtcclxuXHJcbiAgICBjb25zdCBtYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgdmVydGV4U2hhZGVyOiBnZXRWZXJ0ZXhTaGFkZXIoKSxcclxuICAgICAgICBmcmFnbWVudFNoYWRlcjogZ2V0RnJhZ21lbnRTaGFkZXIoKSxcclxuICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAvL2JsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICB9KTtcclxuICAgIHJldHVybiBtYXRlcmlhbFxyXG5cclxufVxyXG5cclxuZXhwb3J0IHsgZ2V0Q2xvdWRNYXRlcmlhbCB9Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9