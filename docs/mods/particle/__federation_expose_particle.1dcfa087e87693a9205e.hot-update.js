"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/models/part.js":
/*!****************************!*\
  !*** ./src/models/part.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Starfield)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");


const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function Starfield() {
    return class CloudParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor() {
            super()
            this.particleCount = 5000;
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.initializeGeometry();
            this.createMaterial();
            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points);

            setInterval(() => {
                this.update(clock.getDelta())
            }, 1000);
        }

        initializeGeometry() {
            const positions = new Float32Array(this.particleCount * 3);
            const sizes = new Float32Array(this.particleCount);
            const alphas = new Float32Array(this.particleCount);
            const velocities = new Float32Array(this.particleCount * 3);

            for (let i = 0; i < this.particleCount; i++) {
                const i3 = i * 3;

                // Позиции в сферической форме для облака
                const radius = Math.random() * 5 + 2;
                const theta = Math.random() * Math.PI * 2;
                const phi = Math.random() * Math.PI;

                positions[i3] = Math.sin(phi) * Math.cos(theta) * radius;
                positions[i3 + 1] = Math.cos(phi) * radius;
                positions[i3 + 2] = Math.sin(phi) * Math.sin(theta) * radius;

                sizes[i] = Math.random() * 0.8 + 0.4;
                alphas[i] = Math.random() * 0.4 + 0.3;

                // Случайные скорости для движения
                velocities[i3] = (Math.random() - 0.5) * 0.02;
                velocities[i3 + 1] = Math.random() * 0.01 + 0.005; // Вверх
                velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;
            }

            this.geometry.setAttribute('position', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute('size', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));
            this.geometry.setAttribute('alpha', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(alphas, 1));
            this.geometry.setAttribute('velocity', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(velocities, 3));
        }

        createMaterial() {
            const texture = this.createParticleTexture();
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                uniforms: {
                    pointTexture: { value: texture },
                    time: { value: 0 }
                },
                vertexShader: this.getVertexShader(),
                fragmentShader: this.getFragmentShader(),
                transparent: true,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                depthWrite: false
            });
        }

        createParticleTexture() {
            // Создание текстуры программно
            const canvas = document.createElement('canvas');
            canvas.width = 64;
            canvas.height = 64;
            const context = canvas.getContext('2d');

            // Градиентный круг
            const gradient = context.createRadialGradient(32, 32, 0, 32, 32, 32);
            gradient.addColorStop(0, 'rgba(255, 255, 255, 1)');
            gradient.addColorStop(0.5, 'rgba(255, 255, 255, 0.5)');
            gradient.addColorStop(1, 'rgba(255, 255, 255, 0)');

            context.fillStyle = gradient;
            context.fillRect(0, 0, 64, 64);

            const texture = new three__WEBPACK_IMPORTED_MODULE_0__.CanvasTexture(canvas);
            return texture;
        }

        getVertexShader() {
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

        getFragmentShader() {
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

        update(deltaTime) {
            this.time += deltaTime;
            this.material.uniforms.time.value = this.time;

            // Дополнительная анимация на CPU для более сложных эффектов
            const positions = this.geometry.attributes.position.array;
            const velocities = this.geometry.attributes.velocity.array;

            for (let i = 0; i < this.particleCount; i++) {
                const i3 = i * 3;

                // Турбулентность
                positions[i3] += Math.sin(this.time * 0.001 + positions[i3 + 1]) * 0.005;
                positions[i3 + 2] += Math.cos(this.time * 0.001 + positions[i3]) * 0.005;

                // Проверка границ и респаун
                if (positions[i3 + 1] > 10) {
                    positions[i3 + 1] = -5;
                    positions[i3] = (Math.random() - 0.5) * 10;
                    positions[i3 + 2] = (Math.random() - 0.5) * 10;
                }
            }

            this.geometry.attributes.position.needsUpdate = true;
        }

        // Методы для управления облаком
        setPosition(x, y, z) {
            this.points.position.set(x, y, z);
        }

        setScale(scale) {
            this.points.scale.set(scale, scale, scale);
        }

        setColor(r, g, b) {
            // Можно добавить атрибут цвета в геометрию
            const colors = new Float32Array(this.particleCount * 3);
            for (let i = 0; i < this.particleCount; i++) {
                const i3 = i * 3;
                colors[i3] = r;
                colors[i3 + 1] = g;
                colors[i3 + 2] = b;
            }
            this.geometry.setAttribute('color', new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(colors, 3));
        }

        dispose() {
            this.geometry.dispose();
            this.material.dispose();
            if (this.points.parent) {
                this.points.parent.remove(this.points);
            }
        }
    }
}



/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4xZGNmYTA4N2U4NzY5M2E5MjA1ZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Ysd0NBQXdDLDJDQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0RBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJmaWVsZCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlQ291bnQgPSA1MDAwO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWF0ZXJpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjbG9jay5nZXREZWx0YSgpKVxyXG4gICAgICAgICAgICB9LCAxMDAwKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRpYWxpemVHZW9tZXRyeSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50ICogMyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0L7Qt9C40YbQuNC4INCyINGB0YTQtdGA0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzQtSDQtNC70Y8g0L7QsdC70LDQutCwXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogNSArIDI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMV0gPSBNYXRoLmNvcyhwaGkpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gPSBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpICogcmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuOCArIDAuNDtcclxuICAgICAgICAgICAgICAgIGFscGhhc1tpXSA9IE1hdGgucmFuZG9tKCkgKiAwLjQgKyAwLjM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KHQu9GD0YfQsNC50L3Ri9C1INGB0LrQvtGA0L7RgdGC0Lgg0LTQu9GPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAxXSA9IE1hdGgucmFuZG9tKCkgKiAwLjAxICsgMC4wMDU7IC8vINCS0LLQtdGA0YVcclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdzaXplJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnYWxwaGEnLCBuZXcgQnVmZmVyQXR0cmlidXRlKGFscGhhcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgndmVsb2NpdHknLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlbG9jaXRpZXMsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZU1hdGVyaWFsKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gdGhpcy5jcmVhdGVQYXJ0aWNsZVRleHR1cmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHRpbWU6IHsgdmFsdWU6IDAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogdGhpcy5nZXRWZXJ0ZXhTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiB0aGlzLmdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKSB7XHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gNjQ7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8g0JPRgNCw0LTQuNC10L3RgtC90YvQuSDQutGA0YPQs1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDEpJyk7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNSknKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDY0LCA2NCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBzaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYWxwaGE7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlYzMgbmV3UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSArPSB0aW1lICogMC4wMSAqIHZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi56ICs9IGNvcyh0aW1lICogMC4wMDEgKyBwb3NpdGlvbi54KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0KbQuNC60LvQuNGH0LXRgdC60L7QtSDQstC+0LfRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhlxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgPiAxMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSA9IC01LjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBzaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCBwb2ludFRleHR1cmU7XHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChwb2ludFRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JzRj9Cz0LrQuNC1INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBmbG9hdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQ2VudGVyID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKGRlbHRhVGltZSkge1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGFUaW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDQlNC+0L/QvtC70L3QuNGC0LXQu9GM0L3QsNGPINCw0L3QuNC80LDRhtC40Y8g0L3QsCBDUFUg0LTQu9GPINCx0L7Qu9C10LUg0YHQu9C+0LbQvdGL0YUg0Y3RhNGE0LXQutGC0L7QslxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXRpZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMudmVsb2NpdHkuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCi0YPRgNCx0YPQu9C10L3RgtC90L7RgdGC0YxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gKz0gTWF0aC5zaW4odGhpcy50aW1lICogMC4wMDEgKyBwb3NpdGlvbnNbaTMgKyAxXSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdICs9IE1hdGguY29zKHRoaXMudGltZSAqIDAuMDAxICsgcG9zaXRpb25zW2kzXSkgKiAwLjAwNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQutCwINCz0YDQsNC90LjRhiDQuCDRgNC10YHQv9Cw0YPQvVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uc1tpMyArIDFdID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IC01O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtNGLINC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQvtCx0LvQsNC60L7QvFxyXG4gICAgICAgIHNldFBvc2l0aW9uKHgsIHksIHopIHtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3IociwgZywgYikge1xyXG4gICAgICAgICAgICAvLyDQnNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0LDRgtGA0LjQsdGD0YIg0YbQstC10YLQsCDQsiDQs9C10L7QvNC10YLRgNC40Y5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpM10gPSByO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzICsgMV0gPSBnO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzICsgMl0gPSBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50cy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzLnBhcmVudC5yZW1vdmUodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=