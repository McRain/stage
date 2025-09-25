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
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

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

function getCloudMaterial() {

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

}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS5mNDA3MmQ4ZjdhM2I0MzIzN2UxYi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFzRDtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLGdEQUFhO0FBQ3JDO0FBQ0E7QUFDQTtBQUNnQztBQUNoQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QixpREFBYztBQUN2QztBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUMsb0JBQW9CO0FBQ3BCLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvdG9vbHMuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ2FudmFzVGV4dHVyZSwgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDAsIDAsIDEpJyk7XHJcbiAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgxNzksIDI1NSwgMCwgMC41KScpO1xyXG4gICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcblxyXG4gICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjQsIDY0KTtcclxuXHJcbiAgICBjb25zdCB0ZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuICAgIHJldHVybiB0ZXh0dXJlO1xyXG59XHJcblxyXG5leHBvcnQgeyBjcmVhdGVQYXJ0aWNsZVRleHR1cmUgfVxyXG5cclxuZnVuY3Rpb24gZ2V0VmVydGV4U2hhZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IHNpemU7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhbHBoYTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIHZlYzMgdmVsb2NpdHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgdW5pZm9ybSBmbG9hdCB0aW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdkFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVjMyBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueCArPSBzaW4odGltZSAqIDAuMDAxICsgcG9zaXRpb24ueSkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi55ICs9IHRpbWUgKiAwLjAxICogdmVsb2NpdHkueTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnogKz0gY29zKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLngpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQptC40LrQu9C40YfQtdGB0LrQvtC1INCy0L7Qt9GA0L7QttC00LXQvdC40LUg0YfQsNGB0YLQuNGGXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24ueSA+IDEwLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi55ID0gLTUuMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChuZXdQb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IHNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG59XHJcblxyXG5mdW5jdGlvbiBnZXRGcmFnbWVudFNoYWRlcigpIHtcclxuICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHBvaW50VGV4dHVyZTtcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHBvaW50VGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIHRleENvbG9yLmEgKiB2QWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQnNGP0LPQutC40LUg0LrRgNCw0Y9cclxuICAgICAgICAgICAgICAgIGZsb2F0IGRpc3RhbmNlRnJvbUNlbnRlciA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZUZyb21DZW50ZXIgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yLmEgKj0gMS4wIC0gc21vb3Roc3RlcCgwLjMsIDAuNSwgZGlzdGFuY2VGcm9tQ2VudGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldENsb3VkTWF0ZXJpYWwoKSB7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcblxyXG59XHJcblxyXG5leHBvcnQgeyBnZXRDbG91ZE1hdGVyaWFsIH0iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=