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
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");




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
            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)()//this.createParticleTexture();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS41ZTgzOGQzYzExNzYwNzhhZTcxMS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWFlO0FBQ2Y7QUFDa0Q7QUFDbEQ7QUFDQSxrQkFBa0Isd0NBQUs7QUFDdkI7QUFDZTtBQUNmLG1DQUFtQywyQ0FBUTtBQUMzQztBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUM7QUFDQTtBQUNBLDhCQUE4Qix5Q0FBTTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsd0JBQXdCO0FBQ3BEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUVBQW1FO0FBQ25FO0FBQ0E7QUFDQTtBQUNBLHVEQUF1RCxrREFBZTtBQUN0RSxtREFBbUQsa0RBQWU7QUFDbEUsb0RBQW9ELGtEQUFlO0FBQ25FLHVEQUF1RCxrREFBZTtBQUN0RTtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsZ0VBQXFCO0FBQ2pELGdDQUFnQyxpREFBYztBQUM5QztBQUNBLG9DQUFvQyxnQkFBZ0I7QUFDcEQsNEJBQTRCO0FBQzVCLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdDQUFnQyxnREFBYTtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0Qix3QkFBd0I7QUFDcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUNBQXVDO0FBQ3ZDLGtCQUFrQjtBQUNsQix3Q0FBd0M7QUFDeEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUNBQXFDO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLHdCQUF3QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0RBQW9ELGtEQUFlO0FBQ25FO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL3BhcnQuanMiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbCxcclxuICAgIENhbnZhc1RleHR1cmVcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBDbG91ZFBhcnQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ2xvdWRQYXJ0IGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpXHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVDb3VudCA9IDUwMDA7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5jcmVhdGVNYXRlcmlhbCgpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMFxyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoMClcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGluaXRpYWxpemVHZW9tZXRyeSgpIHtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGFscGhhcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50ICogMyk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0L7Qt9C40YbQuNC4INCyINGB0YTQtdGA0LjRh9C10YHQutC+0Lkg0YTQvtGA0LzQtSDQtNC70Y8g0L7QsdC70LDQutCwXHJcbiAgICAgICAgICAgICAgICBjb25zdCByYWRpdXMgPSBNYXRoLnJhbmRvbSgpICogNSArIDI7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJO1xyXG5cclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMV0gPSBNYXRoLmNvcyhwaGkpICogcmFkaXVzO1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gPSBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpICogcmFkaXVzO1xyXG5cclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuOCArIDAuNDtcclxuICAgICAgICAgICAgICAgIGFscGhhc1tpXSA9IE1hdGgucmFuZG9tKCkgKiAwLjQgKyAwLjM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KHQu9GD0YfQsNC50L3Ri9C1INGB0LrQvtGA0L7RgdGC0Lgg0LTQu9GPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAxXSA9IE1hdGgucmFuZG9tKCkgKiAwLjAxICsgMC4wMDU7IC8vINCS0LLQtdGA0YVcclxuICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdwb3NpdGlvbicsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdzaXplJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnYWxwaGEnLCBuZXcgQnVmZmVyQXR0cmlidXRlKGFscGhhcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgndmVsb2NpdHknLCBuZXcgQnVmZmVyQXR0cmlidXRlKHZlbG9jaXRpZXMsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZU1hdGVyaWFsKCkge1xyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCkvL3RoaXMuY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwb2ludFRleHR1cmU6IHsgdmFsdWU6IHRleHR1cmUgfSxcclxuICAgICAgICAgICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IHRoaXMuZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogdGhpcy5nZXRGcmFnbWVudFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAvL2JsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2VcclxuICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKSB7XHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgICAgICAgICBjb25zdCBjYW52YXMgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdjYW52YXMnKTtcclxuICAgICAgICAgICAgY2FudmFzLndpZHRoID0gNjQ7XHJcbiAgICAgICAgICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgICAgICAgICAgY29uc3QgY29udGV4dCA9IGNhbnZhcy5nZXRDb250ZXh0KCcyZCcpO1xyXG5cclxuICAgICAgICAgICAgLy8g0JPRgNCw0LTQuNC10L3RgtC90YvQuSDQutGA0YPQs1xyXG4gICAgICAgICAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAsICdyZ2JhKDI1NSwgMCwgMCwgMSknKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDAuNSwgJ3JnYmEoMTc5LCAyNTUsIDAsIDAuNSknKTtcclxuICAgICAgICAgICAgZ3JhZGllbnQuYWRkQ29sb3JTdG9wKDEsICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDApJyk7XHJcblxyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIDY0LCA2NCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gbmV3IENhbnZhc1RleHR1cmUoY2FudmFzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRleHR1cmU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBzaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYWxwaGE7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlYzMgbmV3UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSArPSB0aW1lICogMC4wMSAqIHZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi56ICs9IGNvcyh0aW1lICogMC4wMDEgKyBwb3NpdGlvbi54KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0KbQuNC60LvQuNGH0LXRgdC60L7QtSDQstC+0LfRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhlxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgPiAxMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSA9IC01LjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBzaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCBwb2ludFRleHR1cmU7XHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChwb2ludFRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JzRj9Cz0LrQuNC1INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBmbG9hdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQ2VudGVyID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSlcclxuICAgICAgICAgICAgdGhpcy50aW1lICs9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudGltZS52YWx1ZSA9IHRoaXMudGltZTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5hcnJheTtcclxuICAgICAgICAgICAgY29uc3QgdmVsb2NpdGllcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy52ZWxvY2l0eS5hcnJheTtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFscGhhLmFycmF5O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLnBhcnRpY2xlQ291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgaTMgPSBpICogMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQodC80LXRidC10L3QuNC1ICjRgtGD0YDQsdGD0LvQtdC90YLQvdC+0YHRgtGMKVxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSArPSBNYXRoLnNpbih0aGlzLnRpbWUgKiAwLjAwMSArIHBvc2l0aW9uc1tpMyArIDFdKSAqIDAuMDA1O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gKz0gTWF0aC5jb3ModGhpcy50aW1lICogMC4wMDEgKyBwb3NpdGlvbnNbaTNdKSAqIDAuMDA1O1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCg0LDRgdGB0YLQvtGP0L3QuNC1INC+0YIg0YbQtdC90YLRgNCwXHJcbiAgICAgICAgICAgICAgICBjb25zdCBkaXN0ID0gTWF0aC5zcXJ0KFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gKiBwb3NpdGlvbnNbaTNdICtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSAqIHBvc2l0aW9uc1tpMyArIDFdICtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSAqIHBvc2l0aW9uc1tpMyArIDJdXHJcbiAgICAgICAgICAgICAgICApO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0L7RgdGC0LXQv9C10L3QvdC+0LUg0LjRgdGH0LXQt9C90L7QstC10L3QuNC1INC30LAg0L/RgNC10LTQtdC70LDQvNC4INGA0LDQtNC40YPRgdCwIDhcclxuICAgICAgICAgICAgICAgIGlmIChkaXN0ID4gOCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFscGhhc1tpXSAtPSAwLjAxOyAvLyBmYWRlIG91dFxyXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChhbHBoYXNbaV0gPCAxLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBhbHBoYXNbaV0gKz0gMC4wMDU7IC8vIGZhZGUgaW4g0LXRgdC70Lgg0LLQtdGA0L3Rg9C70LDRgdGMINCy0L3Rg9GC0YDRjFxyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINCV0YHQu9C4INGH0LDRgdGC0LjRhtCwIFwi0YPQvNC10YDQu9CwXCIsINC/0LXRgNC10YHQvtC30LTQsNGC0Ywg0LXRkSDQsdC70LjQttC1INC6INGG0LXQvdGC0YDRg1xyXG4gICAgICAgICAgICAgICAgaWYgKGFscGhhc1tpXSA8PSAwLjApIHtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG5cclxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDAuMDEgKyAwLjAwNTtcclxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG5cclxuICAgICAgICAgICAgICAgICAgICBhbHBoYXNbaV0gPSAxLjA7IC8vINC90L7QstCw0Y8g0YfQsNGB0YLQuNGG0LAg0YHRgNCw0LfRgyDRj9GA0LrQsNGPXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hbHBoYS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLyDQnNC10YLQvtC00Ysg0LTQu9GPINGD0L/RgNCw0LLQu9C10L3QuNGPINC+0LHQu9Cw0LrQvtC8XHJcbiAgICAgICAgc2V0UG9zaXRpb24oeCwgeSwgeikge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wb3NpdGlvbi5zZXQoeCwgeSwgeik7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRTY2FsZShzY2FsZSkge1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5zY2FsZS5zZXQoc2NhbGUsIHNjYWxlLCBzY2FsZSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzZXRDb2xvcihyLCBnLCBiKSB7XHJcbiAgICAgICAgICAgIC8vINCc0L7QttC90L4g0LTQvtCx0LDQstC40YLRjCDQsNGC0YDQuNCx0YPRgiDRhtCy0LXRgtCwINCyINCz0LXQvtC80LXRgtGA0LjRjlxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG4gICAgICAgICAgICAgICAgY29sb3JzW2kzXSA9IHI7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAxXSA9IGc7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTMgKyAyXSA9IGI7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ2NvbG9yJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShjb2xvcnMsIDMpKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnRzLnBhcmVudCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludHMucGFyZW50LnJlbW92ZSh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==