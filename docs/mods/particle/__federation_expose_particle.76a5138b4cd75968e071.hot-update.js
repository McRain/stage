"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

/***/ "./src/models/fire.js":
/*!****************************!*\
  !*** ./src/models/fire.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ FireParticles)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");




const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

const _emmiters = [{
    label: "Plane",
    type: three__WEBPACK_IMPORTED_MODULE_0__.PlaneGeometry,
    args: [5, 1, 10, 1]
}]

function FireParticles() {
    return class FireParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor({
            count = 1000,
            minSize = 0.5,
            maxSize = 2,
            speed = 1.0
        } = {}) {
            super();
            this.type = "FireParticles";
            this.count = count;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.speed = speed;
            this.enabled = false
            console.log(window.isEditor)
            this._emmiterMaterial = new three__WEBPACK_IMPORTED_MODULE_0__.MeshBasicMaterial({ wireframe: true, transparent: true, opacity: window.isEditor ? 1 : 0 })
            this._emmiter = new three__WEBPACK_IMPORTED_MODULE_0__.Mesh(new three__WEBPACK_IMPORTED_MODULE_0__.SphereGeometry(1, 5, 5), this._emmiterMaterial)
            this._emmiter.isElementHelper = true
            this.add(this._emmiter)
        }

        /*get emmiter() {
            return this._emmiter
        }

        set emmiter(v) {
            this._emmiter = v
        }*/

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        stop() {
            if (!this.enabled)
                return
            this.enabled = false
            this.points.parent.remove(this.points)
        }

        start() {
            if (this.geometry) {
                return
            }
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            const color1 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffaa00)
            const color2 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff0000)

            // массивы
            const positions = new Float32Array(this.count * 3);
            const lifetimes = new Float32Array(this.count);
            const sizes = new Float32Array(this.count);

            // если есть геометрия-источник
            let srcPositions = null;

            //if (!this.parent.isScene) {
            /*let target
            this.parent.traverse(m => {
                if (!target && m.isMesh) {
                    target = m.geometry
                    return
                }
            })
            const posAttr = target.getAttribute("position");
            srcPositions = posAttr.array;*/
            /*} else {*/
            /*if (this._emmiter) {
                const el = Object.values(window.Factory.Elements).find(e => e.path === this._emmiter)
                const posAttr = el.geometry.getAttribute("position");
                srcPositions = posAttr.array;
            } else {*/
            const posAttr = this._emmiter.geometry.getAttribute("position");
            srcPositions = posAttr.array;
            //}

            /*}*/

            for (let i = 0; i < this.count; i++) {
                if (srcPositions) {
                    // случайная вершина из геометрии
                    const idx = Math.floor(Math.random() * (srcPositions.length / 3));
                    positions[i * 3] = srcPositions[idx * 3];
                    positions[i * 3 + 1] = srcPositions[idx * 3 + 1];
                    positions[i * 3 + 2] = srcPositions[idx * 3 + 2];
                } else {
                    // fallback — просто точка с шумом
                    positions[i * 3] = (Math.random() - 0.5);
                    positions[i * 3 + 1] = 0;
                    positions[i * 3 + 2] = (Math.random() - 0.5);
                }

                lifetimes[i] = Math.random();
                sizes[i] = three__WEBPACK_IMPORTED_MODULE_0__.MathUtils.lerp(this.minSize, this.maxSize, Math.random());
            }

            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aLifetime", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(lifetimes, 1));
            this.geometry.setAttribute("aSize", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                uniforms: {
                    uTime: { value: 0 },
                    uColor1: { value: color1 },
                    uColor2: { value: color2 }
                },
                vertexShader: `
        attribute float aLifetime;
        attribute float aSize;
        uniform float uTime;
        varying float vLifetime;
        void main() {
          float age = mod(uTime + aLifetime, 1.0);
          vec3 pos = position;
          pos.y += age * 3.0;
          vLifetime = 1.0 - age;

          vec4 mvPosition = modelViewMatrix * vec4(pos, 1.0);
          gl_Position = projectionMatrix * mvPosition;
          gl_PointSize = aSize * (300.0 / -mvPosition.z);
        }
      `,
                fragmentShader: `
        uniform vec3 uColor1;
        uniform vec3 uColor2;
        varying float vLifetime;
        void main() {
          float d = length(gl_PointCoord - vec2(0.5));
          if (d > 0.5) discard;
          vec3 color = mix(uColor2, uColor1, vLifetime);
          gl_FragColor = vec4(color, vLifetime);
        }
      `
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            //window.Project.Root.add(this.points);
            this.add(this.points)

            this.time = 0;
            this.enabled = true
            this.update()
        }

        update() {
            if (!this.enabled)
                return
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();

            this.time += delta * this.speed;
            this.material.uniforms.uTime.value = this.time;
        }
    }
}


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS43NmE1MTM4YjRjZDc1OTY4ZTA3MS5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQWlCZTtBQUNmO0FBQ2tEO0FBQ2xEO0FBQ0Esa0JBQWtCLHdDQUFLO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBLFVBQVUsZ0RBQWE7QUFDdkI7QUFDQSxDQUFDO0FBQ0Q7QUFDZTtBQUNmLHVDQUF1QywyQ0FBUTtBQUMvQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxJQUFJO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxvREFBaUIsR0FBRyxzRUFBc0U7QUFDbEksZ0NBQWdDLHVDQUFJLEtBQUssaURBQWM7QUFDdkQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0MsaURBQWM7QUFDOUMsK0JBQStCLHdDQUFLO0FBQ3BDLCtCQUErQix3Q0FBSztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLHlDQUF5QztBQUN6QyxnQkFBZ0IsTUFBTTtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsTUFBTTtBQUNwQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWU7QUFDZjtBQUNBLDRCQUE0QixnQkFBZ0I7QUFDNUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDRDQUFTO0FBQ3BDO0FBQ0E7QUFDQSx1REFBdUQsa0RBQWU7QUFDdEUsd0RBQXdELGtEQUFlO0FBQ3ZFLG9EQUFvRCxrREFBZTtBQUNuRTtBQUNBLGdDQUFnQyxpREFBYztBQUM5QztBQUNBO0FBQ0EsMEJBQTBCLG1EQUFnQjtBQUMxQztBQUNBLDZCQUE2QixVQUFVO0FBQ3ZDLCtCQUErQixlQUFlO0FBQzlDLCtCQUErQjtBQUMvQixpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0EsOEJBQThCLHlDQUFNO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9maXJlLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbCxcclxuICAgIENvbG9yLFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEJveEdlb21ldHJ5LFxyXG4gICAgTWF0aFV0aWxzLFxyXG4gICAgU3BoZXJlR2VvbWV0cnksXHJcbiAgICBQbGFuZUdlb21ldHJ5LFxyXG4gICAgTWVzaCxcclxuICAgIE1lc2hCYXNpY01hdGVyaWFsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVQYXJ0aWNsZVRleHR1cmUgfSBmcm9tIFwiQC90b29scy5qc1wiXHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuY29uc3QgX2VtbWl0ZXJzID0gW3tcclxuICAgIGxhYmVsOiBcIlBsYW5lXCIsXHJcbiAgICB0eXBlOiBQbGFuZUdlb21ldHJ5LFxyXG4gICAgYXJnczogWzUsIDEsIDEwLCAxXVxyXG59XVxyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRmlyZVBhcnRpY2xlcygpIHtcclxuICAgIHJldHVybiBjbGFzcyBGaXJlUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKHtcclxuICAgICAgICAgICAgY291bnQgPSAxMDAwLFxyXG4gICAgICAgICAgICBtaW5TaXplID0gMC41LFxyXG4gICAgICAgICAgICBtYXhTaXplID0gMixcclxuICAgICAgICAgICAgc3BlZWQgPSAxLjBcclxuICAgICAgICB9ID0ge30pIHtcclxuICAgICAgICAgICAgc3VwZXIoKTtcclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJGaXJlUGFydGljbGVzXCI7XHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gbWluU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyh3aW5kb3cuaXNFZGl0b3IpXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbCA9IG5ldyBNZXNoQmFzaWNNYXRlcmlhbCh7IHdpcmVmcmFtZTogdHJ1ZSwgdHJhbnNwYXJlbnQ6IHRydWUsIG9wYWNpdHk6IHdpbmRvdy5pc0VkaXRvciA/IDEgOiAwIH0pXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXIgPSBuZXcgTWVzaChuZXcgU3BoZXJlR2VvbWV0cnkoMSwgNSwgNSksIHRoaXMuX2VtbWl0ZXJNYXRlcmlhbClcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlci5pc0VsZW1lbnRIZWxwZXIgPSB0cnVlXHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMuX2VtbWl0ZXIpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKmdldCBlbW1pdGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZW1taXRlclxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IGVtbWl0ZXIodikge1xyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyID0gdlxyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBzdG9wKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICB0aGlzLmVuYWJsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5wYXJlbnQucmVtb3ZlKHRoaXMucG9pbnRzKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RhcnQoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMSA9IG5ldyBDb2xvcigweGZmYWEwMClcclxuICAgICAgICAgICAgY29uc3QgY29sb3IyID0gbmV3IENvbG9yKDB4ZmYwMDAwKVxyXG5cclxuICAgICAgICAgICAgLy8g0LzQsNGB0YHQuNCy0YtcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmV0aW1lcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIC8vINC10YHQu9C4INC10YHRgtGMINCz0LXQvtC80LXRgtGA0LjRjy3QuNGB0YLQvtGH0L3QuNC6XHJcbiAgICAgICAgICAgIGxldCBzcmNQb3NpdGlvbnMgPSBudWxsO1xyXG5cclxuICAgICAgICAgICAgLy9pZiAoIXRoaXMucGFyZW50LmlzU2NlbmUpIHtcclxuICAgICAgICAgICAgLypsZXQgdGFyZ2V0XHJcbiAgICAgICAgICAgIHRoaXMucGFyZW50LnRyYXZlcnNlKG0gPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKCF0YXJnZXQgJiYgbS5pc01lc2gpIHtcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXQgPSBtLmdlb21ldHJ5XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc0F0dHIgPSB0YXJnZXQuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7Ki9cclxuICAgICAgICAgICAgLyp9IGVsc2UgeyovXHJcbiAgICAgICAgICAgIC8qaWYgKHRoaXMuX2VtbWl0ZXIpIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gT2JqZWN0LnZhbHVlcyh3aW5kb3cuRmFjdG9yeS5FbGVtZW50cykuZmluZChlID0+IGUucGF0aCA9PT0gdGhpcy5fZW1taXRlcilcclxuICAgICAgICAgICAgICAgIGNvbnN0IHBvc0F0dHIgPSBlbC5nZW9tZXRyeS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7Ki9cclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IHRoaXMuX2VtbWl0ZXIuZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7XHJcbiAgICAgICAgICAgIC8vfVxyXG5cclxuICAgICAgICAgICAgLyp9Ki9cclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5jb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoc3JjUG9zaXRpb25zKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8g0YHQu9GD0YfQsNC50L3QsNGPINCy0LXRgNGI0LjQvdCwINC40Lcg0LPQtdC+0LzQtdGC0YDQuNC4XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaWR4ID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogKHNyY1Bvc2l0aW9ucy5sZW5ndGggLyAzKSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMV07XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDJdO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayDigJQg0L/RgNC+0YHRgtC+INGC0L7Rh9C60LAg0YEg0YjRg9C80L7QvFxyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSAwO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGxpZmV0aW1lc1tpXSA9IE1hdGgucmFuZG9tKCk7XHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IE1hdGhVdGlscy5sZXJwKHRoaXMubWluU2l6ZSwgdGhpcy5tYXhTaXplLCBNYXRoLnJhbmRvbSgpKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFMaWZldGltZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKGxpZmV0aW1lcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFTaXplXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoc2l6ZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZSxcclxuICAgICAgICAgICAgICAgIGJsZW5kaW5nOiBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1VGltZTogeyB2YWx1ZTogMCB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVDb2xvcjE6IHsgdmFsdWU6IGNvbG9yMSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVDb2xvcjI6IHsgdmFsdWU6IGNvbG9yMiB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgXHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFMaWZldGltZTtcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYVNpemU7XHJcbiAgICAgICAgdW5pZm9ybSBmbG9hdCB1VGltZTtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBhZ2UgPSBtb2QodVRpbWUgKyBhTGlmZXRpbWUsIDEuMCk7XHJcbiAgICAgICAgICB2ZWMzIHBvcyA9IHBvc2l0aW9uO1xyXG4gICAgICAgICAgcG9zLnkgKz0gYWdlICogMy4wO1xyXG4gICAgICAgICAgdkxpZmV0aW1lID0gMS4wIC0gYWdlO1xyXG5cclxuICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zLCAxLjApO1xyXG4gICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IGFTaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgfVxyXG4gICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMTtcclxuICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yMjtcclxuICAgICAgICB2YXJ5aW5nIGZsb2F0IHZMaWZldGltZTtcclxuICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICBmbG9hdCBkID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgaWYgKGQgPiAwLjUpIGRpc2NhcmQ7XHJcbiAgICAgICAgICB2ZWMzIGNvbG9yID0gbWl4KHVDb2xvcjIsIHVDb2xvcjEsIHZMaWZldGltZSk7XHJcbiAgICAgICAgICBnbF9GcmFnQ29sb3IgPSB2ZWM0KGNvbG9yLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgIH1cclxuICAgICAgYFxyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgLy93aW5kb3cuUHJvamVjdC5Sb290LmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgICAgIHRoaXMuYWRkKHRoaXMucG9pbnRzKVxyXG5cclxuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5lbmFibGVkKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSArPSBkZWx0YSAqIHRoaXMuc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwudW5pZm9ybXMudVRpbWUudmFsdWUgPSB0aGlzLnRpbWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcbiJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==