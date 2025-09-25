"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/models/part.js":
/*!****************************!*\
  !*** ./src/models/part.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudPart)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");


const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function CloudPart() {
    return class CloudPart extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor() {
            super()
            this.particleCount = 5000;
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.initializeGeometry();
            this.createMaterial();
            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points);
            this.time = 0

            this.update(0)
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
                //blending: AdditiveBlending,
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
            gradient.addColorStop(0, 'rgba(255, 0, 0, 1)');
            gradient.addColorStop(0.5, 'rgba(179, 255, 0, 0.5)');
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

        update() {
            requestAnimationFrame(this.update.bind(this))
            this.time += clock.getDelta();
            this.material.uniforms.time.value = this.time;

            const positions = this.geometry.attributes.position.array;
            const velocities = this.geometry.attributes.velocity.array;
            const alphas = this.geometry.attributes.alpha.array;

            for (let i = 0; i < this.particleCount; i++) {
                const i3 = i * 3;

                // Смещение (турбулентность)
                positions[i3] += Math.sin(this.time * 0.001 + positions[i3 + 1]) * 0.005;
                positions[i3 + 2] += Math.cos(this.time * 0.001 + positions[i3]) * 0.005;

                // Расстояние от центра
                const dist = Math.sqrt(
                    positions[i3] * positions[i3] +
                    positions[i3 + 1] * positions[i3 + 1] +
                    positions[i3 + 2] * positions[i3 + 2]
                );

                // Постепенное исчезновение за пределами радиуса 8
                if (dist > 8) {
                    alphas[i] -= 0.01; // fade out
                } else if (alphas[i] < 1.0) {
                    alphas[i] += 0.005; // fade in если вернулась внутрь
                }

                // Если частица "умерла", пересоздать её ближе к центру
                if (alphas[i] <= 0.0) {
                    positions[i3] = (Math.random() - 0.5) * 4;
                    positions[i3 + 1] = (Math.random() - 0.5) * 4;
                    positions[i3 + 2] = (Math.random() - 0.5) * 4;

                    velocities[i3] = (Math.random() - 0.5) * 0.02;
                    velocities[i3 + 1] = Math.random() * 0.01 + 0.005;
                    velocities[i3 + 2] = (Math.random() - 0.5) * 0.02;

                    alphas[i] = 1.0; // новая частица сразу яркая
                }
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.alpha.needsUpdate = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS45NmEzNjNiZGQxYzkxOGM3YWRhZS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBYWU7QUFDZjtBQUNBLGtCQUFrQix3Q0FBSztBQUN2QjtBQUNlO0FBQ2YsbUNBQW1DLDJDQUFRO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtRUFBbUU7QUFDbkU7QUFDQTtBQUNBO0FBQ0EsdURBQXVELGtEQUFlO0FBQ3RFLG1EQUFtRCxrREFBZTtBQUNsRSxvREFBb0Qsa0RBQWU7QUFDbkUsdURBQXVELGtEQUFlO0FBQ3RFO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGlEQUFjO0FBQzlDO0FBQ0Esb0NBQW9DLGdCQUFnQjtBQUNwRCw0QkFBNEI7QUFDNUIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLGdEQUFhO0FBQzdDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx1Q0FBdUM7QUFDdkMsa0JBQWtCO0FBQ2xCLHdDQUF3QztBQUN4QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvREFBb0Qsa0RBQWU7QUFDbkU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvcGFydC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUNvdW50ID0gNTAwMDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZU1hdGVyaWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZUdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC30LjRhtC40Lgg0LIg0YHRhNC10YDQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1INC00LvRjyDQvtCx0LvQsNC60LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiA1ICsgMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoLnJhbmRvbSgpICogMC44ICsgMC40O1xyXG4gICAgICAgICAgICAgICAgYWxwaGFzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuNCArIDAuMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdGL0LUg0YHQutC+0YDQvtGB0YLQuCDQtNC70Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDAuMDEgKyAwLjAwNTsgLy8g0JLQstC10YDRhVxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdhbHBoYScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoYWxwaGFzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCd2ZWxvY2l0eScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVsb2NpdGllcywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlTWF0ZXJpYWwoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSB0aGlzLmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB0aGlzLmdldFZlcnRleFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgY3JlYXRlUGFydGljbGVUZXh0dXJlKCkge1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0L3QuNC1INGC0LXQutGB0YLRg9GA0Ysg0L/RgNC+0LPRgNCw0LzQvNC90L5cclxuICAgICAgICAgICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICAgICAgICAgIGNhbnZhcy53aWR0aCA9IDY0O1xyXG4gICAgICAgICAgICBjYW52YXMuaGVpZ2h0ID0gNjQ7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCT0YDQsNC00LjQtdC90YLQvdGL0Lkg0LrRgNGD0LNcclxuICAgICAgICAgICAgY29uc3QgZ3JhZGllbnQgPSBjb250ZXh0LmNyZWF0ZVJhZGlhbEdyYWRpZW50KDMyLCAzMiwgMCwgMzIsIDMyLCAzMik7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDAsIDAsIDEpJyk7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDE3OSwgMjU1LCAwLCAwLjUpJyk7XHJcbiAgICAgICAgICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDI1NSwgMjU1LCAwKScpO1xyXG5cclxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSBncmFkaWVudDtcclxuICAgICAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA2NCwgNjQpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IG5ldyBDYW52YXNUZXh0dXJlKGNhbnZhcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0ZXh0dXJlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VmVydGV4U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgc2l6ZTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFscGhhO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2QWxwaGEgPSBhbHBoYTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQtNCy0LjQttC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICB2ZWMzIG5ld1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi54ICs9IHNpbih0aW1lICogMC4wMDEgKyBwb3NpdGlvbi55KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGltZSAqIDAuMDEgKiB2ZWxvY2l0eS55O1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueiArPSBjb3ModGltZSAqIDAuMDAxICsgcG9zaXRpb24ueCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCm0LjQutC70LjRh9C10YHQutC+0LUg0LLQvtC30YDQvtC20LTQtdC90LjQtSDRh9Cw0YHRgtC40YZcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi55ID4gMTAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgPSAtNS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5ld1Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gc2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRGcmFnbWVudFNoYWRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgcG9pbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQocG9pbnRUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgdGV4Q29sb3IuYSAqIHZBbHBoYSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCc0Y/Qs9C60LjQtSDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgZmxvYXQgZGlzdGFuY2VGcm9tQ2VudGVyID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUNlbnRlciA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IuYSAqPSAxLjAgLSBzbW9vdGhzdGVwKDAuMywgMC41LCBkaXN0YW5jZUZyb21DZW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHVwZGF0ZSgpIHtcclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHRoaXMudXBkYXRlLmJpbmQodGhpcykpXHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBjbG9jay5nZXREZWx0YSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlbG9jaXRpZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMudmVsb2NpdHkuYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hbHBoYS5hcnJheTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KHQvNC10YnQtdC90LjQtSAo0YLRg9GA0LHRg9C70LXQvdGC0L3QvtGB0YLRjClcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gKz0gTWF0aC5zaW4odGhpcy50aW1lICogMC4wMDEgKyBwb3NpdGlvbnNbaTMgKyAxXSkgKiAwLjAwNTtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdICs9IE1hdGguY29zKHRoaXMudGltZSAqIDAuMDAxICsgcG9zaXRpb25zW2kzXSkgKiAwLjAwNTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQoNCw0YHRgdGC0L7Rj9C90LjQtSDQvtGCINGG0LXQvdGC0YDQsFxyXG4gICAgICAgICAgICAgICAgY29uc3QgZGlzdCA9IE1hdGguc3FydChcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTNdICogcG9zaXRpb25zW2kzXSArXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMV0gKiBwb3NpdGlvbnNbaTMgKyAxXSArXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gKiBwb3NpdGlvbnNbaTMgKyAyXVxyXG4gICAgICAgICAgICAgICAgKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C+0YHRgtC10L/QtdC90L3QvtC1INC40YHRh9C10LfQvdC+0LLQtdC90LjQtSDQt9CwINC/0YDQtdC00LXQu9Cw0LzQuCDRgNCw0LTQuNGD0YHQsCA4XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdCA+IDgpIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHBoYXNbaV0gLT0gMC4wMTsgLy8gZmFkZSBvdXRcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoYWxwaGFzW2ldIDwgMS4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxwaGFzW2ldICs9IDAuMDA1OyAvLyBmYWRlIGluINC10YHQu9C4INCy0LXRgNC90YPQu9Cw0YHRjCDQstC90YPRgtGA0YxcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQldGB0LvQuCDRh9Cw0YHRgtC40YbQsCBcItGD0LzQtdGA0LvQsFwiLCDQv9C10YDQtdGB0L7Qt9C00LDRgtGMINC10ZEg0LHQu9C40LbQtSDQuiDRhtC10L3RgtGA0YNcclxuICAgICAgICAgICAgICAgIGlmIChhbHBoYXNbaV0gPD0gMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMV0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAxXSA9IE1hdGgucmFuZG9tKCkgKiAwLjAxICsgMC4wMDU7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgYWxwaGFzW2ldID0gMS4wOyAvLyDQvdC+0LLQsNGPINGH0LDRgdGC0LjRhtCwINGB0YDQsNC30YMg0Y/RgNC60LDRj1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYWxwaGEubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtNGLINC00LvRjyDRg9C/0YDQsNCy0LvQtdC90LjRjyDQvtCx0LvQsNC60L7QvFxyXG4gICAgICAgIHNldFBvc2l0aW9uKHgsIHksIHopIHtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMucG9zaXRpb24uc2V0KHgsIHksIHopO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0U2NhbGUoc2NhbGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMuc2NhbGUuc2V0KHNjYWxlLCBzY2FsZSwgc2NhbGUpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0Q29sb3IociwgZywgYikge1xyXG4gICAgICAgICAgICAvLyDQnNC+0LbQvdC+INC00L7QsdCw0LLQuNGC0Ywg0LDRgtGA0LjQsdGD0YIg0YbQstC10YLQsCDQsiDQs9C10L7QvNC10YLRgNC40Y5cclxuICAgICAgICAgICAgY29uc3QgY29sb3JzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpM10gPSByO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzICsgMV0gPSBnO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzICsgMl0gPSBiO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdjb2xvcicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoY29sb3JzLCAzKSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBkaXNwb3NlKCkge1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50cy5wYXJlbnQpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnRzLnBhcmVudC5yZW1vdmUodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=