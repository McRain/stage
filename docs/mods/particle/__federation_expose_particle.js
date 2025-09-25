"use strict";
(self["webpackChunk_reneos_slider_mods_particle"] = self["webpackChunk_reneos_slider_mods_particle"] || []).push([["__federation_expose_particle"],{

/***/ "./src/index.mf.js":
/*!*************************!*\
  !*** ./src/index.mf.js ***!
  \*************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./models/starfields.js */ "./src/models/starfields.js");
/* harmony import */ var _models_part_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./models/part.js */ "./src/models/part.js");
/* harmony import */ var _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/cloud.js */ "./src/models/cloud.js");
/* harmony import */ var _models_fire_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./models/fire.js */ "./src/models/fire.js");

const App = _reneos_app__WEBPACK_IMPORTED_MODULE_0__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_0__
;






async function Init() {
    console.log("particle")
    if (App.engine.ready) {
        App.engine.Factory.RegisterElement("StarsField", _models_starfields_js__WEBPACK_IMPORTED_MODULE_2__["default"], {
            label: "Stars Field"
        })
        App.engine.Factory.RegisterElement("PointsField", _models_part_js__WEBPACK_IMPORTED_MODULE_3__["default"], {
            label: "Points Field"
        })
        App.engine.Factory.RegisterElement("Cloud", _models_cloud_js__WEBPACK_IMPORTED_MODULE_4__["default"], {
            label: "Cloud Field"
        })
        App.engine.Factory.RegisterElement("FireParticles", _models_fire_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
            label: "Fire Field"
        })
        if (!window.isEditor) {
            return
        }

        App.inspector.addToModels(["StarsField"], [
            {
                label: "Speed",
                head: {
                    component: "Float",
                    prop: "speed",
                    props: {
                        step: 0.1, min: 0.1, max: 10.0, decimals: 2,
                    },
                    state: true
                }
            }, {
                label: "Stars",
                head: {
                    component: "Float",
                    prop: "numStars",
                    props: {
                        step: 100, min: 100, max: 100000,
                        decimals: 0,
                    },

                    state: true
                }
            }, {
                label: "Size",
                head: {
                    component: "Float",
                    prop: "size",
                    props: {
                        step: 0.1, min: 0.1, max: 10, decimals: 2,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }, {
                label: "Radius",
                head: {
                    component: "Float",
                    prop: "radius",
                    props: {
                        step: 1, min: 1, max: 100, decimals: 0,
                    },
                    state: true,
                    onupdate(target) {
                        target.rebuildStarfield()
                    }
                }
            }
        ])

        App.inspector.addToModels(["Cloud"], [
            {
                label: "maxDistance",
                head: {
                    component: "Float",
                    prop: "maxDistance",
                    props: {
                        step: 0.1, min: 0.1, max: 100, decimals: 1,
                    },
                    state: true
                }
            }
        ])
        App.inspector.addToModels(["FireParticles"], [
            /*{
                label: "Target",
                head: {
                    prop: "emmiter",
                    component: "SectionSelect",
                    props: {
                        list: [{
                            label: "Plane",
                            value: "PlaneGeometry",
                            args: [5, 1, 10, 1]
                        }]

                    }
                }
            },*/
            {
                nonstate: true,
                label: "Manage",
                head: {
                    component: "Buttons",
                    props: {
                        buttons: [{
                            label: "Start",
                            handler: (target) => {
                                target.start()
                            }
                        }, {
                            label: "Stop",
                            handler: (target) => {
                                target.stop()
                            }
                        }]
                    },
                    state: true
                }
            }
        ])
    } else {
        App.engine.onload(Init)
    }
}



Init()

/***/ }),

/***/ "./src/models/cloud.js":
/*!*****************************!*\
  !*** ./src/models/cloud.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ CloudParticles)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");




const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function CloudParticles() {
    return class CloudParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor() {
            super();

            const { count = 5000,
                color = 0xffffff,
                direction = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(0, 1, 0),
                speed = 0.75,
                spawnRadius = 0.1,
                minSize = 0.1,
                maxSize = 0.25,
                minLifetime = 1,
                maxLifetime = 3 } = {}
            this.type = "Cloud";
            this.frustumCulled = false
            this.count = count;
            this.color = color;
            this.direction = direction.clone().normalize();
            this.speed = speed;
            this.spawnRadius = spawnRadius;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.minLifetime = minLifetime;
            this.maxLifetime = maxLifetime;

            // данные о частицах
            this.particles = new Array(this.count);

            const positions = new Float32Array(this.count * 3);
            const sizes = new Float32Array(this.count);
            const opacities = new Float32Array(this.count);

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(positions, 3));
            this.geometry.setAttribute("aSize", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(sizes, 1));
            this.geometry.setAttribute("aOpacity", new three__WEBPACK_IMPORTED_MODULE_0__.BufferAttribute(opacities, 1));

            const texture = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)();

            // === Кастомный шейдер ===
            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.ShaderMaterial({
                transparent: true,
                depthWrite: false,
                uniforms: {
                    uTexture: { value: texture },
                    uColor: {
                        value: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                            (color >> 16 & 255) / 255,
                            (color >> 8 & 255) / 255,
                            (color & 255) / 255
                        )
                    }
                },
                vertexShader: `
                    attribute float aSize;
                    attribute float aOpacity;
                    varying float vOpacity;
                    void main() {
                        vOpacity = aOpacity;
                        vec4 mvPosition = modelViewMatrix * vec4(position, 1.0);
                        gl_PointSize = aSize * (300.0 / -mvPosition.z);
                        gl_Position = projectionMatrix * mvPosition;
                    }
                `,
                fragmentShader: `
                    uniform sampler2D uTexture;
                    uniform vec3 uColor;
                    varying float vOpacity;
                    void main() {
                        vec4 texColor = texture2D(uTexture, gl_PointCoord);
                        gl_FragColor = vec4(uColor, vOpacity) * texColor;
                        if (gl_FragColor.a < 0.01) discard;
                    }
                `
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.points.frustumCulled = false
            this.add(this.points);

            // инициализируем частицы
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);
            for (let i = 0; i < this.count; i++) {
                this.resetParticle(i, origin, true); // true = сразу готовая частица
            }

            this.update();
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        randomSpawn(origin) {
            const r = this.spawnRadius * Math.random();
            const theta = Math.random() * Math.PI * 2;
            const phi = Math.acos(2 * Math.random() - 1);
            return new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(
                origin.x + r * Math.sin(phi) * Math.cos(theta),
                origin.y + r * Math.sin(phi) * Math.sin(theta),
                origin.z + r * Math.cos(phi)
            );
        }

        resetParticle(i, origin, immediate = false) {
            const lifetime = this.minLifetime + Math.random() * (this.maxLifetime - this.minLifetime);

            this.particles[i] = {
                pos: this.randomSpawn(origin),
                age: immediate ? Math.random() * lifetime : 0,
                lifetime,
                size: this.minSize + Math.random() * (this.maxSize - this.minSize)
            };
        }

        update() {
            requestAnimationFrame(this.update.bind(this));

            const delta = clock.getDelta();
            const origin = new three__WEBPACK_IMPORTED_MODULE_0__.Vector3();
            this.getWorldPosition(origin);

            const positions = this.geometry.attributes.position.array;
            const sizes = this.geometry.attributes.aSize.array;
            const opacities = this.geometry.attributes.aOpacity.array;

            for (let i = 0; i < this.count; i++) {
                const p = this.particles[i];

                // обновляем возраст
                p.age += delta;
                if (p.age >= p.lifetime) {
                    this.resetParticle(i, origin, false);
                }

                // движение
                p.pos.addScaledVector(this.direction, this.speed * delta);

                // нормализованное время жизни [0..1]
                const t = p.age / p.lifetime;

                // fade in/out
                const opacity = t < 0.2 ? t / 0.2 : (t > 0.8 ? (1 - t) / 0.2 : 1);

                // обновляем атрибуты
                positions[i * 3] = p.pos.x - origin.x;
                positions[i * 3 + 1] = p.pos.y - origin.y;
                positions[i * 3 + 2] = p.pos.z - origin.z;

                sizes[i] = p.size;
                opacities[i] = opacity;
            }

            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.aSize.needsUpdate = true;
            this.geometry.attributes.aOpacity.needsUpdate = true;
        }
    };
}


/***/ }),

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
            this._emmiter.visible = window.isEditor ? true : false
            //this._emmiter.scale.set(0.01, 0.01, 0.01)
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


/***/ }),

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
            this.material = (0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.getCloudMaterial)((0,_tools_js__WEBPACK_IMPORTED_MODULE_1__.createParticleTexture)())
            //this.createMaterial();
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

        /*createMaterial() {
            const texture = createParticleTexture()//this.createParticleTexture();
            this.material = new ShaderMaterial({
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
        }*/

        /*createParticleTexture() {
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

            const texture = new CanvasTexture(canvas);
            return texture;
        }*/

        /*getVertexShader() {
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
        }*/

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



/***/ }),

/***/ "./src/models/starfields.js":
/*!**********************************!*\
  !*** ./src/models/starfields.js ***!
  \**********************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ Starfield)
/* harmony export */ });
/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! three */ "webpack/sharing/consume/default/three/three");


const clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

function Starfield() {
    return class Starfield extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor() {
            super();

            this.type = "StarsField";
            this.loader = new three__WEBPACK_IMPORTED_MODULE_0__.TextureLoader();
            this.clock = new three__WEBPACK_IMPORTED_MODULE_0__.Clock();

            // Параметры, которые можно менять динамически
            this._numStars = 100;
            this.speed = 0.001;
            this.size = 0.25
            this.radius = 10

            // Ссылки на созданные объекты для последующего обновления
            this.points = null;
            this.geometry = null;
            this.material = null;

            this.createStarfield();
            //this.startAnimation();
        }

        // Геттер и сеттер для numStars с автоматическим обновлением
        get numStars() {
            return this._numStars;
        }

        set numStars(value) {
            if (value !== this._numStars) {
                this._numStars = value;
                this.rebuildStarfield(); // Перестраиваем поле звезд при изменении
            }
        }

        getTypes() {
            return [...super.getTypes(), this.type]
        }

        createStarfield() {
            // Удаляем старые точки, если они существуют
            if (this.points) {
                this.remove(this.points);
                if (this.geometry) this.geometry.dispose();
                if (this.material) this.material.dispose();
            }

            const positions = this.generateStarPositions();

            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.verts, 3));
            this.geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.colors, 3));

            this.material = new three__WEBPACK_IMPORTED_MODULE_0__.PointsMaterial({
                sizeAttenuation: true,
                size: this.size,
                alphaTest: 0.5,
                transparent: true,
                vertexColors: true,
                blending: three__WEBPACK_IMPORTED_MODULE_0__.AdditiveBlending,
                map: this.loader.load("https://s3.eu-west-1.amazonaws.com/3dbuilder.reneos.com/assets/circle.png"),
            });

            this.points = new three__WEBPACK_IMPORTED_MODULE_0__.Points(this.geometry, this.material);
            this.add(this.points);
        }

        generateStarPositions() {
            const verts = [];
            const colors = [];

            for (let i = 0; i < this._numStars; i += 1) {
                const point = this.getRandomSpherePoint();
                const col = new three__WEBPACK_IMPORTED_MODULE_0__.Color().setHSL(point.hue, 0.2, Math.random());

                verts.push(point.pos.x, point.pos.y, point.pos.z);
                colors.push(col.r, col.g, col.b);
            }

            return { verts, colors };
        }

        getRandomSpherePoint() {
            const radius = Math.random() * this.radius + this.radius;
            const u = Math.random();
            const v = Math.random();
            const theta = 2 * Math.PI * u;
            const phi = Math.acos(2 * v - 1);
            let x = radius * Math.sin(phi) * Math.cos(theta);
            let y = radius * Math.sin(phi) * Math.sin(theta);
            let z = radius * Math.cos(phi);

            return {
                pos: new three__WEBPACK_IMPORTED_MODULE_0__.Vector3(x, y, z),
                hue: 0.6,
                minDist: radius,
            };
        }

        rebuildStarfield() {
            // Генерируем новые позиции
            const positions = this.generateStarPositions();

            // Обновляем атрибуты геометрии
            this.geometry.setAttribute("position", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.verts, 3));
            this.geometry.setAttribute("color", new three__WEBPACK_IMPORTED_MODULE_0__.Float32BufferAttribute(positions.colors, 3));

            // Уведомляем js об изменении геометрии
            this.geometry.attributes.position.needsUpdate = true;
            this.geometry.attributes.color.needsUpdate = true;
        }

        /*startAnimation() {
            const animate = () => {
                requestAnimationFrame(animate);
                const deltaTime = clock.getDelta();

                this.rotation.y += this.speed * deltaTime;
            };
            animate();
        }*/

        // Метод для плавного изменения количества звезд
        /*setNumStarsSmooth(newNumStars, duration = 1000) {
            const startStars = this._numStars;
            const startTime = performance.now();

            const updateStars = (currentTime) => {
                const elapsed = currentTime - startTime;
                const progress = Math.min(elapsed / duration, 1);

                // Плавное изменение количества звезд
                this._numStars = Math.round(startStars + (newNumStars - startStars) * progress);
                this.rebuildStarfield();

                if (progress < 1) {
                    requestAnimationFrame(updateStars);
                }
            };

            requestAnimationFrame(updateStars);
        }*/

        // Очистка ресурсов
        dispose() {
            if (this.geometry) this.geometry.dispose();
            if (this.material) this.material.dispose();
        }
    }
}



/***/ }),

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

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9pbmRleC5tZi5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9jbG91ZC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9maXJlLmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL3BhcnQuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvc3RhcmZpZWxkcy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL3Rvb2xzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCB7IGRlZmluZUFzeW5jQ29tcG9uZW50IH0gZnJvbSAndnVlJztcclxuaW1wb3J0IFN0YXJzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3N0YXJmaWVsZHMuanNcIlxyXG5pbXBvcnQgUG9pbnRzRmllbGQgZnJvbSBcIi4vbW9kZWxzL3BhcnQuanNcIlxyXG5pbXBvcnQgQ2xvdWQgZnJvbSBcIi4vbW9kZWxzL2Nsb3VkLmpzXCJcclxuaW1wb3J0IEZpcmUgZnJvbSBcIi4vbW9kZWxzL2ZpcmUuanNcIlxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIEluaXQoKSB7XHJcbiAgICBjb25zb2xlLmxvZyhcInBhcnRpY2xlXCIpXHJcbiAgICBpZiAoQXBwLmVuZ2luZS5yZWFkeSkge1xyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJTdGFyc0ZpZWxkXCIsIFN0YXJzRmllbGQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIlBvaW50c0ZpZWxkXCIsIFBvaW50c0ZpZWxkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlBvaW50cyBGaWVsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiQ2xvdWRcIiwgQ2xvdWQsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiQ2xvdWQgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkZpcmVQYXJ0aWNsZXNcIiwgRmlyZSwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJGaXJlIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIGlmICghd2luZG93LmlzRWRpdG9yKSB7XHJcbiAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJTdGFyc0ZpZWxkXCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNwZWVkXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJzcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAuMCwgZGVjaW1hbHM6IDIsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFyc1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwibnVtU3RhcnNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAxMDAsIG1pbjogMTAwLCBtYXg6IDEwMDAwMCxcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwic2l6ZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAsIGRlY2ltYWxzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb251cGRhdGUodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZWJ1aWxkU3RhcmZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlJhZGl1c1wiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwicmFkaXVzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMSwgbWluOiAxLCBtYXg6IDEwMCwgZGVjaW1hbHM6IDAsXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBzdGF0ZTogdHJ1ZSxcclxuICAgICAgICAgICAgICAgICAgICBvbnVwZGF0ZSh0YXJnZXQpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnJlYnVpbGRTdGFyZmllbGQoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiQ2xvdWRcIl0sIFtcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwibWF4RGlzdGFuY2VcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm1heERpc3RhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMC4xLCBtaW46IDAuMSwgbWF4OiAxMDAsIGRlY2ltYWxzOiAxLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICAgICAgQXBwLmluc3BlY3Rvci5hZGRUb01vZGVscyhbXCJGaXJlUGFydGljbGVzXCJdLCBbXHJcbiAgICAgICAgICAgIC8qe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiVGFyZ2V0XCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJlbW1pdGVyXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIlNlY3Rpb25TZWxlY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsaXN0OiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiUGxhbmVcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBcIlBsYW5lR2VvbWV0cnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFyZ3M6IFs1LCAxLCAxMCwgMV1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCovXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIG5vbnN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTWFuYWdlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkJ1dHRvbnNcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBidXR0b25zOiBbe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnRcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICh0YXJnZXQpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQuc3RhcnQoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJTdG9wXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0b3AoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0pXHJcbiAgICB9IGVsc2Uge1xyXG4gICAgICAgIEFwcC5lbmdpbmUub25sb2FkKEluaXQpXHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5cclxuSW5pdCgpIiwiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsXHJcbn0gZnJvbSBcInRocmVlXCI7XHJcblxyXG5pbXBvcnQgeyBjcmVhdGVQYXJ0aWNsZVRleHR1cmUgfSBmcm9tIFwiQC90b29scy5qc1wiXHJcblxyXG5jb25zdCBjbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ2xvdWRQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgQ2xvdWRQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB7IGNvdW50ID0gNTAwMCxcclxuICAgICAgICAgICAgICAgIGNvbG9yID0gMHhmZmZmZmYsXHJcbiAgICAgICAgICAgICAgICBkaXJlY3Rpb24gPSBuZXcgVmVjdG9yMygwLCAxLCAwKSxcclxuICAgICAgICAgICAgICAgIHNwZWVkID0gMC43NSxcclxuICAgICAgICAgICAgICAgIHNwYXduUmFkaXVzID0gMC4xLFxyXG4gICAgICAgICAgICAgICAgbWluU2l6ZSA9IDAuMSxcclxuICAgICAgICAgICAgICAgIG1heFNpemUgPSAwLjI1LFxyXG4gICAgICAgICAgICAgICAgbWluTGlmZXRpbWUgPSAxLFxyXG4gICAgICAgICAgICAgICAgbWF4TGlmZXRpbWUgPSAzIH0gPSB7fVxyXG4gICAgICAgICAgICB0aGlzLnR5cGUgPSBcIkNsb3VkXCI7XHJcbiAgICAgICAgICAgIHRoaXMuZnJ1c3R1bUN1bGxlZCA9IGZhbHNlXHJcbiAgICAgICAgICAgIHRoaXMuY291bnQgPSBjb3VudDtcclxuICAgICAgICAgICAgdGhpcy5jb2xvciA9IGNvbG9yO1xyXG4gICAgICAgICAgICB0aGlzLmRpcmVjdGlvbiA9IGRpcmVjdGlvbi5jbG9uZSgpLm5vcm1hbGl6ZSgpO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcbiAgICAgICAgICAgIHRoaXMuc3Bhd25SYWRpdXMgPSBzcGF3blJhZGl1cztcclxuICAgICAgICAgICAgdGhpcy5taW5TaXplID0gbWluU2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhTaXplID0gbWF4U2l6ZTtcclxuICAgICAgICAgICAgdGhpcy5taW5MaWZldGltZSA9IG1pbkxpZmV0aW1lO1xyXG4gICAgICAgICAgICB0aGlzLm1heExpZmV0aW1lID0gbWF4TGlmZXRpbWU7XHJcblxyXG4gICAgICAgICAgICAvLyDQtNCw0L3QvdGL0LUg0L4g0YfQsNGB0YLQuNGG0LDRhVxyXG4gICAgICAgICAgICB0aGlzLnBhcnRpY2xlcyA9IG5ldyBBcnJheSh0aGlzLmNvdW50KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9wYWNpdGllcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbmV3IEJ1ZmZlckdlb21ldHJ5KCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYU9wYWNpdHlcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShvcGFjaXRpZXMsIDEpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKTtcclxuXHJcbiAgICAgICAgICAgIC8vID09PSDQmtCw0YHRgtC+0LzQvdGL0Lkg0YjQtdC50LTQtdGAID09PVxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlOiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb2xvciA+PiAxNiAmIDI1NSkgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sb3IgPj4gOCAmIDI1NSkgLyAyNTUsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sb3IgJiAyNTUpIC8gMjU1XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdk9wYWNpdHkgPSBhT3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3NpdGlvbiwgMS4wKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGBcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCB1VGV4dHVyZTtcclxuICAgICAgICAgICAgICAgICAgICB1bmlmb3JtIHZlYzMgdUNvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdk9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZWM0IHRleENvbG9yID0gdGV4dHVyZTJEKHVUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCh1Q29sb3IsIHZPcGFjaXR5KSAqIHRleENvbG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZ2xfRnJhZ0NvbG9yLmEgPCAwLjAxKSBkaXNjYXJkO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLmZydXN0dW1DdWxsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQuNC90LjRhtC40LDQu9C40LfQuNGA0YPQtdC8INGH0LDRgdGC0LjRhtGLXHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5yZXNldFBhcnRpY2xlKGksIG9yaWdpbiwgdHJ1ZSk7IC8vIHRydWUgPSDRgdGA0LDQt9GDINCz0L7RgtC+0LLQsNGPINGH0LDRgdGC0LjRhtCwXHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMudXBkYXRlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRUeXBlcygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFsuLi5zdXBlci5nZXRUeXBlcygpLCB0aGlzLnR5cGVdXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICByYW5kb21TcGF3bihvcmlnaW4pIHtcclxuICAgICAgICAgICAgY29uc3QgciA9IHRoaXMuc3Bhd25SYWRpdXMgKiBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB0aGV0YSA9IE1hdGgucmFuZG9tKCkgKiBNYXRoLlBJICogMjtcclxuICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5hY29zKDIgKiBNYXRoLnJhbmRvbSgpIC0gMSk7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgVmVjdG9yMyhcclxuICAgICAgICAgICAgICAgIG9yaWdpbi54ICsgciAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSksXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueSArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5zaW4odGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnogKyByICogTWF0aC5jb3MocGhpKVxyXG4gICAgICAgICAgICApO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmVzZXRQYXJ0aWNsZShpLCBvcmlnaW4sIGltbWVkaWF0ZSA9IGZhbHNlKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGxpZmV0aW1lID0gdGhpcy5taW5MaWZldGltZSArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhMaWZldGltZSAtIHRoaXMubWluTGlmZXRpbWUpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXNbaV0gPSB7XHJcbiAgICAgICAgICAgICAgICBwb3M6IHRoaXMucmFuZG9tU3Bhd24ob3JpZ2luKSxcclxuICAgICAgICAgICAgICAgIGFnZTogaW1tZWRpYXRlID8gTWF0aC5yYW5kb20oKSAqIGxpZmV0aW1lIDogMCxcclxuICAgICAgICAgICAgICAgIGxpZmV0aW1lLFxyXG4gICAgICAgICAgICAgICAgc2l6ZTogdGhpcy5taW5TaXplICsgTWF0aC5yYW5kb20oKSAqICh0aGlzLm1heFNpemUgLSB0aGlzLm1pblNpemUpXHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IGRlbHRhID0gY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgY29uc3Qgb3JpZ2luID0gbmV3IFZlY3RvcjMoKTtcclxuICAgICAgICAgICAgdGhpcy5nZXRXb3JsZFBvc2l0aW9uKG9yaWdpbik7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24uYXJyYXk7XHJcbiAgICAgICAgICAgIGNvbnN0IHNpemVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFTaXplLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBvcGFjaXRpZXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYU9wYWNpdHkuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcCA9IHRoaXMucGFydGljbGVzW2ldO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQstC+0LfRgNCw0YHRglxyXG4gICAgICAgICAgICAgICAgcC5hZ2UgKz0gZGVsdGE7XHJcbiAgICAgICAgICAgICAgICBpZiAocC5hZ2UgPj0gcC5saWZldGltZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQYXJ0aWNsZShpLCBvcmlnaW4sIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQtNCy0LjQttC10L3QuNC1XHJcbiAgICAgICAgICAgICAgICBwLnBvcy5hZGRTY2FsZWRWZWN0b3IodGhpcy5kaXJlY3Rpb24sIHRoaXMuc3BlZWQgKiBkZWx0YSk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0L3QvtGA0LzQsNC70LjQt9C+0LLQsNC90L3QvtC1INCy0YDQtdC80Y8g0LbQuNC30L3QuCBbMC4uMV1cclxuICAgICAgICAgICAgICAgIGNvbnN0IHQgPSBwLmFnZSAvIHAubGlmZXRpbWU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8gZmFkZSBpbi9vdXRcclxuICAgICAgICAgICAgICAgIGNvbnN0IG9wYWNpdHkgPSB0IDwgMC4yID8gdCAvIDAuMiA6ICh0ID4gMC44ID8gKDEgLSB0KSAvIDAuMiA6IDEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC+0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gcC5wb3MueCAtIG9yaWdpbi54O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBwLnBvcy55IC0gb3JpZ2luLnk7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IHAucG9zLnogLSBvcmlnaW4uejtcclxuXHJcbiAgICAgICAgICAgICAgICBzaXplc1tpXSA9IHAuc2l6ZTtcclxuICAgICAgICAgICAgICAgIG9wYWNpdGllc1tpXSA9IG9wYWNpdHk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5wb3NpdGlvbi5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hU2l6ZS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hT3BhY2l0eS5uZWVkc1VwZGF0ZSA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBPYmplY3QzRCxcclxuICAgIENsb2NrLFxyXG4gICAgQnVmZmVyQXR0cmlidXRlLFxyXG4gICAgU2hhZGVyTWF0ZXJpYWwsXHJcbiAgICBDb2xvcixcclxuICAgIEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICBCb3hHZW9tZXRyeSxcclxuICAgIE1hdGhVdGlscyxcclxuICAgIFNwaGVyZUdlb21ldHJ5LFxyXG4gICAgUGxhbmVHZW9tZXRyeSxcclxuICAgIE1lc2gsXHJcbiAgICBNZXNoQmFzaWNNYXRlcmlhbFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmNvbnN0IF9lbW1pdGVycyA9IFt7XHJcbiAgICBsYWJlbDogXCJQbGFuZVwiLFxyXG4gICAgdHlwZTogUGxhbmVHZW9tZXRyeSxcclxuICAgIGFyZ3M6IFs1LCAxLCAxMCwgMV1cclxufV1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEZpcmVQYXJ0aWNsZXMoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgRmlyZVBhcnRpY2xlcyBleHRlbmRzIE9iamVjdDNEIHtcclxuICAgICAgICBjb25zdHJ1Y3Rvcih7XHJcbiAgICAgICAgICAgIGNvdW50ID0gMTAwMCxcclxuICAgICAgICAgICAgbWluU2l6ZSA9IDAuNSxcclxuICAgICAgICAgICAgbWF4U2l6ZSA9IDIsXHJcbiAgICAgICAgICAgIHNwZWVkID0gMS4wXHJcbiAgICAgICAgfSA9IHt9KSB7XHJcbiAgICAgICAgICAgIHN1cGVyKCk7XHJcbiAgICAgICAgICAgIHRoaXMudHlwZSA9IFwiRmlyZVBhcnRpY2xlc1wiO1xyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IG1pblNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSBzcGVlZDtcclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgY29uc29sZS5sb2cod2luZG93LmlzRWRpdG9yKVxyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyTWF0ZXJpYWwgPSBuZXcgTWVzaEJhc2ljTWF0ZXJpYWwoeyB3aXJlZnJhbWU6IHRydWUsIHRyYW5zcGFyZW50OiB0cnVlLCBvcGFjaXR5OiB3aW5kb3cuaXNFZGl0b3IgPyAxIDogMCB9KVxyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyID0gbmV3IE1lc2gobmV3IFNwaGVyZUdlb21ldHJ5KDEsIDUsIDUpLCB0aGlzLl9lbW1pdGVyTWF0ZXJpYWwpXHJcbiAgICAgICAgICAgIHRoaXMuX2VtbWl0ZXIuaXNFbGVtZW50SGVscGVyID0gdHJ1ZVxyXG4gICAgICAgICAgICB0aGlzLl9lbW1pdGVyLnZpc2libGUgPSB3aW5kb3cuaXNFZGl0b3IgPyB0cnVlIDogZmFsc2VcclxuICAgICAgICAgICAgLy90aGlzLl9lbW1pdGVyLnNjYWxlLnNldCgwLjAxLCAwLjAxLCAwLjAxKVxyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLl9lbW1pdGVyKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypnZXQgZW1taXRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2VtbWl0ZXJcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldCBlbW1pdGVyKHYpIHtcclxuICAgICAgICAgICAgdGhpcy5fZW1taXRlciA9IHZcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc3RvcCgpIHtcclxuICAgICAgICAgICAgaWYgKCF0aGlzLmVuYWJsZWQpXHJcbiAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgdGhpcy5lbmFibGVkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5wb2ludHMucGFyZW50LnJlbW92ZSh0aGlzLnBvaW50cylcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5nZW9tZXRyeSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICBjb25zdCBjb2xvcjEgPSBuZXcgQ29sb3IoMHhmZmFhMDApXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9yMiA9IG5ldyBDb2xvcigweGZmMDAwMClcclxuXHJcbiAgICAgICAgICAgIC8vINC80LDRgdGB0LjQstGLXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQs9C10L7QvNC10YLRgNC40Y8t0LjRgdGC0L7Rh9C90LjQulxyXG4gICAgICAgICAgICBsZXQgc3JjUG9zaXRpb25zID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgKCF0aGlzLnBhcmVudC5pc1NjZW5lKSB7XHJcbiAgICAgICAgICAgIC8qbGV0IHRhcmdldFxyXG4gICAgICAgICAgICB0aGlzLnBhcmVudC50cmF2ZXJzZShtID0+IHtcclxuICAgICAgICAgICAgICAgIGlmICghdGFyZ2V0ICYmIG0uaXNNZXNoKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0ID0gbS5nZW9tZXRyeVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gdGFyZ2V0LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5OyovXHJcbiAgICAgICAgICAgIC8qfSBlbHNlIHsqL1xyXG4gICAgICAgICAgICAvKmlmICh0aGlzLl9lbW1pdGVyKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBlbCA9IE9iamVjdC52YWx1ZXMod2luZG93LkZhY3RvcnkuRWxlbWVudHMpLmZpbmQoZSA9PiBlLnBhdGggPT09IHRoaXMuX2VtbWl0ZXIpXHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb3NBdHRyID0gZWwuZ2VvbWV0cnkuZ2V0QXR0cmlidXRlKFwicG9zaXRpb25cIik7XHJcbiAgICAgICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICB9IGVsc2UgeyovXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc0F0dHIgPSB0aGlzLl9lbW1pdGVyLmdlb21ldHJ5LmdldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIpO1xyXG4gICAgICAgICAgICBzcmNQb3NpdGlvbnMgPSBwb3NBdHRyLmFycmF5O1xyXG4gICAgICAgICAgICAvL31cclxuXHJcbiAgICAgICAgICAgIC8qfSovXHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuY291bnQ7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgaWYgKHNyY1Bvc2l0aW9ucykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vINGB0LvRg9GH0LDQudC90LDRjyDQstC10YDRiNC40L3QsCDQuNC3INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGlkeCA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIChzcmNQb3NpdGlvbnMubGVuZ3RoIC8gMykpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogM10gPSBzcmNQb3NpdGlvbnNbaWR4ICogM107XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMV0gPSBzcmNQb3NpdGlvbnNbaWR4ICogMyArIDFdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDJdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAyXTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy8gZmFsbGJhY2sg4oCUINC/0YDQvtGB0YLQviDRgtC+0YfQutCwINGBINGI0YPQvNC+0LxcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gMDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICBsaWZldGltZXNbaV0gPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoVXRpbHMubGVycCh0aGlzLm1pblNpemUsIHRoaXMubWF4U2l6ZSwgTWF0aC5yYW5kb20oKSk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwicG9zaXRpb25cIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhTGlmZXRpbWVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShsaWZldGltZXMsIDEpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJhU2l6ZVwiLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgZGVwdGhXcml0ZTogZmFsc2UsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgdVRpbWU6IHsgdmFsdWU6IDAgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IxOiB7IHZhbHVlOiBjb2xvcjEgfSxcclxuICAgICAgICAgICAgICAgICAgICB1Q29sb3IyOiB7IHZhbHVlOiBjb2xvcjIgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhTGlmZXRpbWU7XHJcbiAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFTaXplO1xyXG4gICAgICAgIHVuaWZvcm0gZmxvYXQgdVRpbWU7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgYWdlID0gbW9kKHVUaW1lICsgYUxpZmV0aW1lLCAxLjApO1xyXG4gICAgICAgICAgdmVjMyBwb3MgPSBwb3NpdGlvbjtcclxuICAgICAgICAgIHBvcy55ICs9IGFnZSAqIDMuMDtcclxuICAgICAgICAgIHZMaWZldGltZSA9IDEuMCAtIGFnZTtcclxuXHJcbiAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KHBvcywgMS4wKTtcclxuICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICBnbF9Qb2ludFNpemUgPSBhU2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgIH1cclxuICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjE7XHJcbiAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjI7XHJcbiAgICAgICAgdmFyeWluZyBmbG9hdCB2TGlmZXRpbWU7XHJcbiAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgZmxvYXQgZCA9IGxlbmd0aChnbF9Qb2ludENvb3JkIC0gdmVjMigwLjUpKTtcclxuICAgICAgICAgIGlmIChkID4gMC41KSBkaXNjYXJkO1xyXG4gICAgICAgICAgdmVjMyBjb2xvciA9IG1peCh1Q29sb3IyLCB1Q29sb3IxLCB2TGlmZXRpbWUpO1xyXG4gICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNChjb2xvciwgdkxpZmV0aW1lKTtcclxuICAgICAgICB9XHJcbiAgICAgIGBcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnBvaW50cyA9IG5ldyBQb2ludHModGhpcy5nZW9tZXRyeSwgdGhpcy5tYXRlcmlhbCk7XHJcbiAgICAgICAgICAgIC8vd2luZG93LlByb2plY3QuUm9vdC5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cylcclxuXHJcbiAgICAgICAgICAgIHRoaXMudGltZSA9IDA7XHJcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlZCA9IHRydWVcclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuZW5hYmxlZClcclxuICAgICAgICAgICAgICAgIHJldHVyblxyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGEgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlLCBnZXRDbG91ZE1hdGVyaWFsIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUNvdW50ID0gNTAwMDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gZ2V0Q2xvdWRNYXRlcmlhbChjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKSlcclxuICAgICAgICAgICAgLy90aGlzLmNyZWF0ZU1hdGVyaWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZUdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC30LjRhtC40Lgg0LIg0YHRhNC10YDQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1INC00LvRjyDQvtCx0LvQsNC60LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiA1ICsgMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoLnJhbmRvbSgpICogMC44ICsgMC40O1xyXG4gICAgICAgICAgICAgICAgYWxwaGFzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuNCArIDAuMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdGL0LUg0YHQutC+0YDQvtGB0YLQuCDQtNC70Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDAuMDEgKyAwLjAwNTsgLy8g0JLQstC10YDRhVxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdhbHBoYScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoYWxwaGFzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCd2ZWxvY2l0eScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVsb2NpdGllcywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypjcmVhdGVNYXRlcmlhbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpLy90aGlzLmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB0aGlzLmdldFZlcnRleFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvKmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0YPRgNGLINC/0YDQvtCz0YDQsNC80LzQvdC+XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDY0O1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgzMiwgMzIsIDAsIDMyLCAzMiwgMzIpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAwLCAwLCAxKScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgxNzksIDI1NSwgMCwgMC41KScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjQsIDY0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLypnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBzaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYWxwaGE7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlYzMgbmV3UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSArPSB0aW1lICogMC4wMSAqIHZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi56ICs9IGNvcyh0aW1lICogMC4wMDEgKyBwb3NpdGlvbi54KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0KbQuNC60LvQuNGH0LXRgdC60L7QtSDQstC+0LfRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhlxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgPiAxMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSA9IC01LjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBzaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCBwb2ludFRleHR1cmU7XHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChwb2ludFRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JzRj9Cz0LrQuNC1INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBmbG9hdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQ2VudGVyID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnZlbG9jaXR5LmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYWxwaGEuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUgKNGC0YPRgNCx0YPQu9C10L3RgtC90L7RgdGC0YwpXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTNdICs9IE1hdGguc2luKHRoaXMudGltZSAqIDAuMDAxICsgcG9zaXRpb25zW2kzICsgMV0pICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSArPSBNYXRoLmNvcyh0aGlzLnRpbWUgKiAwLjAwMSArIHBvc2l0aW9uc1tpM10pICogMC4wMDU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNGB0YHRgtC+0Y/QvdC40LUg0L7RgiDRhtC10L3RgtGA0LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSAqIHBvc2l0aW9uc1tpM10gK1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdICogcG9zaXRpb25zW2kzICsgMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdICogcG9zaXRpb25zW2kzICsgMl1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtGB0YLQtdC/0LXQvdC90L7QtSDQuNGB0YfQtdC30L3QvtCy0LXQvdC40LUg0LfQsCDQv9GA0LXQtNC10LvQsNC80Lgg0YDQsNC00LjRg9GB0LAgOFxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxwaGFzW2ldIC09IDAuMDE7IC8vIGZhZGUgb3V0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhc1tpXSA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFscGhhc1tpXSArPSAwLjAwNTsgLy8gZmFkZSBpbiDQtdGB0LvQuCDQstC10YDQvdGD0LvQsNGB0Ywg0LLQvdGD0YLRgNGMXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YfQsNGB0YLQuNGG0LAgXCLRg9C80LXRgNC70LBcIiwg0L/QtdGA0LXRgdC+0LfQtNCw0YLRjCDQtdGRINCx0LvQuNC20LUg0Log0YbQtdC90YLRgNGDXHJcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGFzW2ldIDw9IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpICogMC4wMSArIDAuMDA1O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFscGhhc1tpXSA9IDEuMDsgLy8g0L3QvtCy0LDRjyDRh9Cw0YHRgtC40YbQsCDRgdGA0LDQt9GDINGP0YDQutCw0Y9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFscGhhLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCc0LXRgtC+0LTRiyDQtNC70Y8g0YPQv9GA0LDQstC70LXQvdC40Y8g0L7QsdC70LDQutC+0LxcclxuICAgICAgICBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yKHIsIGcsIGIpIHtcclxuICAgICAgICAgICAgLy8g0JzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINCw0YLRgNC40LHRg9GCINGG0LLQtdGC0LAg0LIg0LPQtdC+0LzQtdGC0YDQuNGOXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTNdID0gcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpMyArIDFdID0gZztcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpMyArIDJdID0gYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKGNvbG9ycywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50cy5wYXJlbnQucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2tcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyZmllbGQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgU3RhcmZpZWxkIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJTdGFyc0ZpZWxkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNGLLCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INC80LXQvdGP0YLRjCDQtNC40L3QsNC80LjRh9C10YHQutC4XHJcbiAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDAuMjVcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxyXG5cclxuICAgICAgICAgICAgLy8g0KHRgdGL0LvQutC4INC90LAg0YHQvtC30LTQsNC90L3Ri9C1INC+0LHRitC10LrRgtGLINC00LvRjyDQv9C+0YHQu9C10LTRg9GO0YnQtdCz0L4g0L7QsdC90L7QstC70LXQvdC40Y9cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJmaWVsZCgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RhcnRBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCT0LXRgtGC0LXRgCDQuCDRgdC10YLRgtC10YAg0LTQu9GPIG51bVN0YXJzINGBINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lwg0L7QsdC90L7QstC70LXQvdC40LXQvFxyXG4gICAgICAgIGdldCBudW1TdGFycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG51bVN0YXJzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbnVtU3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTsgLy8g0J/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0L/QvtC70LUg0LfQstC10LfQtCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0YHRgtCw0YDRi9C1INGC0L7Rh9C60LgsINC10YHQu9C4INC+0L3QuCDRgdGD0YnQtdGB0YLQstGD0Y7RglxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHNpemVBdHRlbnVhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhVGVzdDogMC41LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vYXNzZXRzL2NpcmNsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1TdGFyczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5ldyBDb2xvcigpLnNldEhTTChwb2ludC5odWUsIDAuMiwgTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmVydHMucHVzaChwb2ludC5wb3MueCwgcG9pbnQucG9zLnksIHBvaW50LnBvcy56KTtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2ZXJ0cywgY29sb3JzIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSYW5kb21TcGhlcmVQb2ludCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHogPSByYWRpdXMgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBodWU6IDAuNixcclxuICAgICAgICAgICAgICAgIG1pbkRpc3Q6IHJhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYnVpbGRTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INC90L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy52ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy5jb2xvcnMsIDMpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IGpzINC+0LEg0LjQt9C80LXQvdC10L3QuNC4INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgIC8qc2V0TnVtU3RhcnNTbW9vdGgobmV3TnVtU3RhcnMsIGR1cmF0aW9uID0gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFN0YXJzID0gdGhpcy5fbnVtU3RhcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhcnMgPSAoY3VycmVudFRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C70LDQstC90L7QtSDQuNC30LzQtdC90LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSBNYXRoLnJvdW5kKHN0YXJ0U3RhcnMgKyAobmV3TnVtU3RhcnMgLSBzdGFydFN0YXJzKSAqIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVidWlsZFN0YXJmaWVsZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0J7Rh9C40YHRgtC60LAg0YDQtdGB0YPRgNGB0L7QslxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWwpIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ2FudmFzVGV4dHVyZSwgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDIzMCwgMCwgMSknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwgMCwgMCwgMC44NCknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDIzOCwgMCwgMC4xMiknKTtcclxuXHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA2NCwgNjQpO1xyXG5cclxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9XHJcblxyXG5mdW5jdGlvbiBnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgc2l6ZTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFscGhhO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2QWxwaGEgPSBhbHBoYTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQtNCy0LjQttC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICB2ZWMzIG5ld1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi54ICs9IHNpbih0aW1lICogMC4wMDEgKyBwb3NpdGlvbi55KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGltZSAqIDAuMDEgKiB2ZWxvY2l0eS55O1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueiArPSBjb3ModGltZSAqIDAuMDAxICsgcG9zaXRpb24ueCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCm0LjQutC70LjRh9C10YHQutC+0LUg0LLQvtC30YDQvtC20LTQtdC90LjQtSDRh9Cw0YHRgtC40YZcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi55ID4gMTAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgPSAtNS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5ld1Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gc2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgcG9pbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQocG9pbnRUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgdGV4Q29sb3IuYSAqIHZBbHBoYSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCc0Y/Qs9C60LjQtSDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgZmxvYXQgZGlzdGFuY2VGcm9tQ2VudGVyID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUNlbnRlciA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IuYSAqPSAxLjAgLSBzbW9vdGhzdGVwKDAuMywgMC41LCBkaXN0YW5jZUZyb21DZW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvdWRNYXRlcmlhbCh0ZXh0dXJlKSB7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENsb3VkTWF0ZXJpYWwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==