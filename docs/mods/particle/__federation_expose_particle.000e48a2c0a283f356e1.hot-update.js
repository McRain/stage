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
            this.time = 0
            setInterval(() => {
                this.update(clock.getDelta())
            }, 50);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS4wMDBlNDhhMmMwYTI4M2YzNTZlMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Ysd0NBQXdDLDJDQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0RBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFN0YXJmaWVsZCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgc3VwZXIoKVxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlQ291bnQgPSA1MDAwO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuY3JlYXRlTWF0ZXJpYWwoKTtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDBcclxuICAgICAgICAgICAgc2V0SW50ZXJ2YWwoKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGUoY2xvY2suZ2V0RGVsdGEoKSlcclxuICAgICAgICAgICAgfSwgNTApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZUdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC30LjRhtC40Lgg0LIg0YHRhNC10YDQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1INC00LvRjyDQvtCx0LvQsNC60LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiA1ICsgMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoLnJhbmRvbSgpICogMC44ICsgMC40O1xyXG4gICAgICAgICAgICAgICAgYWxwaGFzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuNCArIDAuMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdGL0LUg0YHQutC+0YDQvtGB0YLQuCDQtNC70Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDAuMDEgKyAwLjAwNTsgLy8g0JLQstC10YDRhVxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdhbHBoYScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoYWxwaGFzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCd2ZWxvY2l0eScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVsb2NpdGllcywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlTWF0ZXJpYWwoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB0aGlzLmdldFZlcnRleFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgICAgICAgICB9KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0YPRgNGLINC/0YDQvtCz0YDQsNC80LzQvdC+XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDY0O1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgzMiwgMzIsIDAsIDMyLCAzMiwgMzIpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMSknKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMC41KScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjQsIDY0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFZlcnRleFNoYWRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IHNpemU7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhbHBoYTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIHZlYzMgdmVsb2NpdHk7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgdW5pZm9ybSBmbG9hdCB0aW1lO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdkFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCQ0L3QuNC80LDRhtC40Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVjMyBuZXdQb3NpdGlvbiA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueCArPSBzaW4odGltZSAqIDAuMDAxICsgcG9zaXRpb24ueSkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi55ICs9IHRpbWUgKiAwLjAxICogdmVsb2NpdHkueTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnogKz0gY29zKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLngpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQptC40LrQu9C40YfQtdGB0LrQvtC1INCy0L7Qt9GA0L7QttC00LXQvdC40LUg0YfQsNGB0YLQuNGGXHJcbiAgICAgICAgICAgICAgICBpZiAobmV3UG9zaXRpb24ueSA+IDEwLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi55ID0gLTUuMDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChuZXdQb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IHNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0RnJhZ21lbnRTaGFkZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIHVuaWZvcm0gc2FtcGxlcjJEIHBvaW50VGV4dHVyZTtcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHBvaW50VGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KDEuMCwgMS4wLCAxLjAsIHRleENvbG9yLmEgKiB2QWxwaGEpO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQnNGP0LPQutC40LUg0LrRgNCw0Y9cclxuICAgICAgICAgICAgICAgIGZsb2F0IGRpc3RhbmNlRnJvbUNlbnRlciA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0YW5jZUZyb21DZW50ZXIgPiAwLjUpIHtcclxuICAgICAgICAgICAgICAgICAgICBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yLmEgKj0gMS4wIC0gc21vb3Roc3RlcCgwLjMsIDAuNSwgZGlzdGFuY2VGcm9tQ2VudGVyKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHRoaXMudGltZTtcclxuXHJcbiAgICAgICAgICAgIC8vINCU0L7Qv9C+0LvQvdC40YLQtdC70YzQvdCw0Y8g0LDQvdC40LzQsNGG0LjRjyDQvdCwIENQVSDQtNC70Y8g0LHQvtC70LXQtSDRgdC70L7QttC90YvRhSDRjdGE0YTQtdC60YLQvtCyXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdGllcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy52ZWxvY2l0eS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KLRg9GA0LHRg9C70LXQvdGC0L3QvtGB0YLRjFxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSArPSBNYXRoLnNpbih0aGlzLnRpbWUgKiAwLjAwMSArIHBvc2l0aW9uc1tpMyArIDFdKSAqIDAuMDA1O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gKz0gTWF0aC5jb3ModGhpcy50aW1lICogMC4wMDEgKyBwb3NpdGlvbnNbaTNdKSAqIDAuMDA1O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNC60LAg0LPRgNCw0L3QuNGGINC4INGA0LXRgdC/0LDRg9C9XHJcbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25zW2kzICsgMV0gPiAxMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gLTU7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMTA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQnNC10YLQvtC00Ysg0LTQu9GPINGD0L/RgNCw0LLQu9C10L3QuNGPINC+0LHQu9Cw0LrQvtC8XHJcbiAgICAgICAgc2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTY2FsZShzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb2xvcihyLCBnLCBiKSB7XHJcbiAgICAgICAgICAgIC8vINCc0L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQsNGC0YDQuNCx0YPRgiDRhtCy0LXRgtCwINCyINCz0LXQvtC80LXRgtGA0LjRjlxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAxXSA9IGc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAyXSA9IGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucGFyZW50LnJlbW92ZSh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==