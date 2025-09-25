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
                varying float vAlpha;
                uniform float time;
                
                void main() {
                    vAlpha = alpha;
                    
                    // Только шейдерная анимация - без CPU изменений позиций
                    vec3 animatedPosition = position;
                    animatedPosition.x += sin(time * 0.001 + position.y) * 0.5;
                    animatedPosition.y += cos(time * 0.002 + position.x) * 0.3;
                    
                    vec4 mvPosition = modelViewMatrix * vec4(animatedPosition, 1.0);
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
                    float dist = length(gl_PointCoord - vec2(0.5));
                    if (dist > 0.5) discard;
                    gl_FragColor.a *= 1.0 - smoothstep(0.3, 0.5, dist);
                }
        `;
        }

        update(deltaTime) {
            console.log(deltaTime)
            this.time += deltaTime;
            this.material.uniforms.time.value = this.time;

            // Дополнительная анимация на CPU для более сложных эффектов
            /*const positions = this.geometry.attributes.position.array;
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

            this.geometry.attributes.position.needsUpdate = true;*/
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS40ZTkwOTYzODU1NmFkMmY2YTIxZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2Ysd0NBQXdDLDJDQUFRO0FBQ2hEO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQSwwQkFBMEIsbURBQWdCO0FBQzFDO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBaUU7QUFDakU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9EQUFvRCxrREFBZTtBQUNuRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9wYXJ0LmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBDb2xvcixcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBUZXh0dXJlTG9hZGVyLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBGbG9hdDMyQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgT2JqZWN0M0QsIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDYW52YXNUZXh0dXJlXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gU3RhcmZpZWxkKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVDb3VudCA9IDUwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXRlcmlhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMFxyXG4gICAgICAgICAgICBzZXRJbnRlcnZhbCgoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZShjbG9jay5nZXREZWx0YSgpKVxyXG4gICAgICAgICAgICB9LCA1MCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpbml0aWFsaXplR2VvbWV0cnkoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXRpZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C+0LfQuNGG0LjQuCDQsiDRgdGE0LXRgNC40YfQtdGB0LrQvtC5INGE0L7RgNC80LUg0LTQu9GPINC+0LHQu9Cw0LrQsFxyXG4gICAgICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIDUgKyAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwaGkgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSTtcclxuXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTNdID0gTWF0aC5zaW4ocGhpKSAqIE1hdGguY29zKHRoZXRhKSAqIHJhZGl1cztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gTWF0aC5jb3MocGhpKSAqIHJhZGl1cztcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdID0gTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSAqIHJhZGl1cztcclxuXHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IE1hdGgucmFuZG9tKCkgKiAwLjggKyAwLjQ7XHJcbiAgICAgICAgICAgICAgICBhbHBoYXNbaV0gPSBNYXRoLnJhbmRvbSgpICogMC40ICsgMC4zO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCh0LvRg9GH0LDQudC90YvQtSDRgdC60L7RgNC+0YHRgtC4INC00LvRjyDQtNCy0LjQttC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpICogMC4wMSArIDAuMDA1OyAvLyDQktCy0LXRgNGFXHJcbiAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgncG9zaXRpb24nLCBuZXcgQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnc2l6ZScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2FscGhhJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShhbHBoYXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3ZlbG9jaXR5JywgbmV3IEJ1ZmZlckF0dHJpYnV0ZSh2ZWxvY2l0aWVzLCAzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVNYXRlcmlhbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IHRoaXMuY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFRleHR1cmU6IHsgdmFsdWU6IHRleHR1cmUgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHRoaXMuZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogdGhpcy5nZXRGcmFnbWVudFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlUGFydGljbGVUZXh0dXJlKCkge1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0L3QuNC1INGC0LXQutGB0YLRg9GA0Ysg0L/RgNC+0LPRgNCw0LzQvNC90L5cclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDY0O1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCT0YDQsNC00LjQtdC90YLQvdGL0Lkg0LrRgNGD0LNcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDMyLCAzMiwgMCwgMzIsIDMyLCAzMik7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAxKScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwLjUpJyk7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA2NCwgNjQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VmVydGV4U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgc2l6ZTtcclxuICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhbHBoYTtcclxuICAgICAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybSBmbG9hdCB0aW1lO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdkFscGhhID0gYWxwaGE7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0KLQvtC70YzQutC+INGI0LXQudC00LXRgNC90LDRjyDQsNC90LjQvNCw0YbQuNGPIC0g0LHQtdC3IENQVSDQuNC30LzQtdC90LXQvdC40Lkg0L/QvtC30LjRhtC40LlcclxuICAgICAgICAgICAgICAgICAgICB2ZWMzIGFuaW1hdGVkUG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICBhbmltYXRlZFBvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC41O1xyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkUG9zaXRpb24ueSArPSBjb3ModGltZSAqIDAuMDAyICsgcG9zaXRpb24ueCkgKiAwLjM7XHJcbiAgICAgICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChhbmltYXRlZFBvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IHNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRGcmFnbWVudFNoYWRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgcG9pbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHBvaW50VGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgICAgICAvLyDQnNGP0LPQutC40LUg0LrRgNCw0Y9cclxuICAgICAgICAgICAgICAgICAgICBmbG9hdCBkaXN0ID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3QpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoZGVsdGFUaW1lKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGRlbHRhVGltZSlcclxuICAgICAgICAgICAgdGhpcy50aW1lICs9IGRlbHRhVGltZTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g0JTQvtC/0L7Qu9C90LjRgtC10LvRjNC90LDRjyDQsNC90LjQvNCw0YbQuNGPINC90LAgQ1BVINC00LvRjyDQsdC+0LvQtdC1INGB0LvQvtC20L3Ri9GFINGN0YTRhNC10LrRgtC+0LJcclxuICAgICAgICAgICAgLypjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXRpZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMudmVsb2NpdHkuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCi0YPRgNCx0YPQu9C10L3RgtC90L7RgdGC0YxcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gKz0gTWF0aC5zaW4odGhpcy50aW1lICogMC4wMDEgKyBwb3NpdGlvbnNbaTMgKyAxXSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdICs9IE1hdGguY29zKHRoaXMudGltZSAqIDAuMDAxICsgcG9zaXRpb25zW2kzXSkgKiAwLjAwNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDQutCwINCz0YDQsNC90LjRhiDQuCDRgNC10YHQv9Cw0YPQvVxyXG4gICAgICAgICAgICAgICAgaWYgKHBvc2l0aW9uc1tpMyArIDFdID4gMTApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IC01O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAxMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDEwO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlOyovXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQnNC10YLQvtC00Ysg0LTQu9GPINGD0L/RgNCw0LLQu9C10L3QuNGPINC+0LHQu9Cw0LrQvtC8XHJcbiAgICAgICAgc2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTY2FsZShzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb2xvcihyLCBnLCBiKSB7XHJcbiAgICAgICAgICAgIC8vINCc0L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQsNGC0YDQuNCx0YPRgiDRhtCy0LXRgtCwINCyINCz0LXQvtC80LXRgtGA0LjRjlxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAxXSA9IGc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAyXSA9IGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucGFyZW50LnJlbW92ZSh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==