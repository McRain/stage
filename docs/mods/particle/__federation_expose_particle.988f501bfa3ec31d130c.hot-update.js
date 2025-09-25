"use strict";
self["webpackHotUpdate_reneos_slider_mods_particle"]("__federation_expose_particle",{

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
        App.engine.Factory.RegisterElement("Fire", _models_fire_js__WEBPACK_IMPORTED_MODULE_5__["default"], {
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
        App.inspector.addToModels(["Fire"], [
            {
                label: "Start",
                head: {
                    component: "Buttons",
                    props: {
                        buttons: [{
                            label: "Start",
                            handler: (target) => {
                                target.start()
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

function FireParticles() {
    return class FireParticles extends three__WEBPACK_IMPORTED_MODULE_0__.Object3D {
        constructor({
            count = 1000,
            minSize = 0.5,
            maxSize = 2,
            speed = 1.0
        } = {}) {
            super();

            this.count = count;
            this.minSize = minSize;
            this.maxSize = maxSize;
            this.speed = speed;


        }

        start() {
            console.log("START FIRE")
            const color1 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xffaa00)
            const color2 = new three__WEBPACK_IMPORTED_MODULE_0__.Color(0xff0000)
            this.geometry = new three__WEBPACK_IMPORTED_MODULE_0__.BufferGeometry();

            // массивы
            const positions = new Float32Array(this.count * 3);
            const lifetimes = new Float32Array(this.count);
            const sizes = new Float32Array(this.count);

            // если есть геометрия-источник
            let srcPositions = null;

            //if (!this.parent.isScene) {
            let target
            this.parent.traverse(m => {
                if (!target && m.isMesh) {
                    target = m.geometry
                    return
                }
            })
            const posAttr = target.getAttribute("position");
            srcPositions = posAttr.array;
            /*} else {
                const posAttr = new BoxGeometry(1, 1, 1).getAttribute("position");
                srcPositions = posAttr.array;
            }*/

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
            this.add(this.points);

            this.time = 0;

            this.update()
        }

        update() {
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

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiX19mZWRlcmF0aW9uX2V4cG9zZV9wYXJ0aWNsZS45ODhmNTAxYmZhM2VjMzFkMTMwYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBZ0M7QUFDaEMsWUFBWSxtREFBYyxJQUFJLHdDQUFNO0FBQ3BDLENBQTJDO0FBQ0k7QUFDTDtBQUNMO0FBQ0Y7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlEQUF5RCw2REFBVTtBQUNuRTtBQUNBLFNBQVM7QUFDVCwwREFBMEQsdURBQVc7QUFDckU7QUFDQSxTQUFTO0FBQ1Qsb0RBQW9ELHdEQUFLO0FBQ3pEO0FBQ0EsU0FBUztBQUNULG1EQUFtRCx1REFBSTtBQUN2RDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QixxQkFBcUI7QUFDckI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTTs7Ozs7Ozs7Ozs7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QUNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQ3JLc0Q7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixnREFBYTtBQUNyQztBQUNBO0FBQ0E7QUFDZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUIsaURBQWM7QUFDdkM7QUFDQSw0QkFBNEIsZ0JBQWdCO0FBQzVDLG9CQUFvQjtBQUNwQixTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvaW5kZXgubWYuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvY2xvdWQuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy9tb2RlbHMvZmlyZS5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5tb2RzLnBhcnRpY2xlLy4vc3JjL21vZGVscy9wYXJ0LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLm1vZHMucGFydGljbGUvLi9zcmMvbW9kZWxzL3N0YXJmaWVsZHMuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIubW9kcy5wYXJ0aWNsZS8uL3NyYy90b29scy5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgeyBkZWZpbmVBc3luY0NvbXBvbmVudCB9IGZyb20gJ3Z1ZSc7XHJcbmltcG9ydCBTdGFyc0ZpZWxkIGZyb20gXCIuL21vZGVscy9zdGFyZmllbGRzLmpzXCJcclxuaW1wb3J0IFBvaW50c0ZpZWxkIGZyb20gXCIuL21vZGVscy9wYXJ0LmpzXCJcclxuaW1wb3J0IENsb3VkIGZyb20gXCIuL21vZGVscy9jbG91ZC5qc1wiXHJcbmltcG9ydCBGaXJlIGZyb20gXCIuL21vZGVscy9maXJlLmpzXCJcclxuXHJcblxyXG5hc3luYyBmdW5jdGlvbiBJbml0KCkge1xyXG4gICAgY29uc29sZS5sb2coXCJwYXJ0aWNsZVwiKVxyXG4gICAgaWYgKEFwcC5lbmdpbmUucmVhZHkpIHtcclxuICAgICAgICBBcHAuZW5naW5lLkZhY3RvcnkuUmVnaXN0ZXJFbGVtZW50KFwiU3RhcnNGaWVsZFwiLCBTdGFyc0ZpZWxkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJzIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJQb2ludHNGaWVsZFwiLCBQb2ludHNGaWVsZCwge1xyXG4gICAgICAgICAgICBsYWJlbDogXCJQb2ludHMgRmllbGRcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgQXBwLmVuZ2luZS5GYWN0b3J5LlJlZ2lzdGVyRWxlbWVudChcIkNsb3VkXCIsIENsb3VkLCB7XHJcbiAgICAgICAgICAgIGxhYmVsOiBcIkNsb3VkIEZpZWxkXCJcclxuICAgICAgICB9KVxyXG4gICAgICAgIEFwcC5lbmdpbmUuRmFjdG9yeS5SZWdpc3RlckVsZW1lbnQoXCJGaXJlXCIsIEZpcmUsIHtcclxuICAgICAgICAgICAgbGFiZWw6IFwiRmlyZSBGaWVsZFwiXHJcbiAgICAgICAgfSlcclxuICAgICAgICBpZiAoIXdpbmRvdy5pc0VkaXRvcikge1xyXG4gICAgICAgICAgICByZXR1cm5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiU3RhcnNGaWVsZFwiXSwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTcGVlZFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJGbG9hdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3A6IFwic3BlZWRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjEsIG1pbjogMC4xLCBtYXg6IDEwLjAsIGRlY2ltYWxzOiAyLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWVcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSwge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU3RhcnNcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcIm51bVN0YXJzXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgc3RlcDogMTAwLCBtaW46IDEwMCwgbWF4OiAxMDAwMDAsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlY2ltYWxzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNpemVcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInNpemVcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzdGVwOiAwLjEsIG1pbjogMC4xLCBtYXg6IDEwLCBkZWNpbWFsczogMixcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgICAgIG9udXBkYXRlKHRhcmdldCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQucmVidWlsZFN0YXJmaWVsZCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LCB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJSYWRpdXNcIixcclxuICAgICAgICAgICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiRmxvYXRcIixcclxuICAgICAgICAgICAgICAgICAgICBwcm9wOiBcInJhZGl1c1wiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDEsIG1pbjogMSwgbWF4OiAxMDAsIGRlY2ltYWxzOiAwLFxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgc3RhdGU6IHRydWUsXHJcbiAgICAgICAgICAgICAgICAgICAgb251cGRhdGUodGFyZ2V0KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRhcmdldC5yZWJ1aWxkU3RhcmZpZWxkKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG5cclxuICAgICAgICBBcHAuaW5zcGVjdG9yLmFkZFRvTW9kZWxzKFtcIkNsb3VkXCJdLCBbXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIm1heERpc3RhbmNlXCIsXHJcbiAgICAgICAgICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkZsb2F0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcDogXCJtYXhEaXN0YW5jZVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0ZXA6IDAuMSwgbWluOiAwLjEsIG1heDogMTAwLCBkZWNpbWFsczogMSxcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG4gICAgICAgIEFwcC5pbnNwZWN0b3IuYWRkVG9Nb2RlbHMoW1wiRmlyZVwiXSwgW1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTdGFydFwiLFxyXG4gICAgICAgICAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJCdXR0b25zXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgYnV0dG9uczogW3tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIlN0YXJ0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAodGFyZ2V0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0LnN0YXJ0KClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfV1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHN0YXRlOiB0cnVlXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdKVxyXG4gICAgfSBlbHNlIHtcclxuICAgICAgICBBcHAuZW5naW5lLm9ubG9hZChJbml0KVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuXHJcbkluaXQoKSIsImltcG9ydCB7XHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgUG9pbnRzTWF0ZXJpYWwsXHJcbiAgICBCdWZmZXJHZW9tZXRyeSxcclxuICAgIE9iamVjdDNELFxyXG4gICAgQ2xvY2ssXHJcbiAgICBCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBTaGFkZXJNYXRlcmlhbFxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIENsb3VkUGFydGljbGVzIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgeyBjb3VudCA9IDUwMDAsXHJcbiAgICAgICAgICAgICAgICBjb2xvciA9IDB4ZmZmZmZmLFxyXG4gICAgICAgICAgICAgICAgZGlyZWN0aW9uID0gbmV3IFZlY3RvcjMoMCwgMSwgMCksXHJcbiAgICAgICAgICAgICAgICBzcGVlZCA9IDAuNzUsXHJcbiAgICAgICAgICAgICAgICBzcGF3blJhZGl1cyA9IDAuMSxcclxuICAgICAgICAgICAgICAgIG1pblNpemUgPSAwLjEsXHJcbiAgICAgICAgICAgICAgICBtYXhTaXplID0gMC4yNSxcclxuICAgICAgICAgICAgICAgIG1pbkxpZmV0aW1lID0gMSxcclxuICAgICAgICAgICAgICAgIG1heExpZmV0aW1lID0gMyB9ID0ge31cclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJDbG91ZFwiO1xyXG4gICAgICAgICAgICB0aGlzLmZydXN0dW1DdWxsZWQgPSBmYWxzZVxyXG4gICAgICAgICAgICB0aGlzLmNvdW50ID0gY291bnQ7XHJcbiAgICAgICAgICAgIHRoaXMuY29sb3IgPSBjb2xvcjtcclxuICAgICAgICAgICAgdGhpcy5kaXJlY3Rpb24gPSBkaXJlY3Rpb24uY2xvbmUoKS5ub3JtYWxpemUoKTtcclxuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IHNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLnNwYXduUmFkaXVzID0gc3Bhd25SYWRpdXM7XHJcbiAgICAgICAgICAgIHRoaXMubWluU2l6ZSA9IG1pblNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWF4U2l6ZSA9IG1heFNpemU7XHJcbiAgICAgICAgICAgIHRoaXMubWluTGlmZXRpbWUgPSBtaW5MaWZldGltZTtcclxuICAgICAgICAgICAgdGhpcy5tYXhMaWZldGltZSA9IG1heExpZmV0aW1lO1xyXG5cclxuICAgICAgICAgICAgLy8g0LTQsNC90L3Ri9C1INC+INGH0LDRgdGC0LjRhtCw0YVcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZXMgPSBuZXcgQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQgKiAzKTtcclxuICAgICAgICAgICAgY29uc3Qgc2l6ZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBvcGFjaXRpZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYVNpemVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImFPcGFjaXR5XCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUob3BhY2l0aWVzLCAxKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCB0ZXh0dXJlID0gY3JlYXRlUGFydGljbGVUZXh0dXJlKCk7XHJcblxyXG4gICAgICAgICAgICAvLyA9PT0g0JrQsNGB0YLQvtC80L3Ri9C5INGI0LXQudC00LXRgCA9PT1cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgdW5pZm9ybXM6IHtcclxuICAgICAgICAgICAgICAgICAgICB1VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHVDb2xvcjoge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZTogbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAoY29sb3IgPj4gMTYgJiAyNTUpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbG9yID4+IDggJiAyNTUpIC8gMjU1LFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbG9yICYgMjU1KSAvIDI1NVxyXG4gICAgICAgICAgICAgICAgICAgICAgICApXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHZlcnRleFNoYWRlcjogYFxyXG4gICAgICAgICAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhU2l6ZTtcclxuICAgICAgICAgICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYU9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2T3BhY2l0eTtcclxuICAgICAgICAgICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZPcGFjaXR5ID0gYU9wYWNpdHk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQocG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsX1BvaW50U2l6ZSA9IGFTaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsX1Bvc2l0aW9uID0gcHJvamVjdGlvbk1hdHJpeCAqIG12UG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgYCxcclxuICAgICAgICAgICAgICAgIGZyYWdtZW50U2hhZGVyOiBgXHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgdVRleHR1cmU7XHJcbiAgICAgICAgICAgICAgICAgICAgdW5pZm9ybSB2ZWMzIHVDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZPcGFjaXR5O1xyXG4gICAgICAgICAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRCh1VGV4dHVyZSwgZ2xfUG9pbnRDb29yZCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQodUNvbG9yLCB2T3BhY2l0eSkgKiB0ZXhDb2xvcjtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGdsX0ZyYWdDb2xvci5hIDwgMC4wMSkgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLnBvaW50cy5mcnVzdHVtQ3VsbGVkID0gZmFsc2VcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG5cclxuICAgICAgICAgICAgLy8g0LjQvdC40YbQuNCw0LvQuNC30LjRgNGD0LXQvCDRh9Cw0YHRgtC40YbRi1xyXG4gICAgICAgICAgICBjb25zdCBvcmlnaW4gPSBuZXcgVmVjdG9yMygpO1xyXG4gICAgICAgICAgICB0aGlzLmdldFdvcmxkUG9zaXRpb24ob3JpZ2luKTtcclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVzZXRQYXJ0aWNsZShpLCBvcmlnaW4sIHRydWUpOyAvLyB0cnVlID0g0YHRgNCw0LfRgyDQs9C+0YLQvtCy0LDRjyDRh9Cw0YHRgtC40YbQsFxyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZ2V0VHlwZXMoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBbLi4uc3VwZXIuZ2V0VHlwZXMoKSwgdGhpcy50eXBlXVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcmFuZG9tU3Bhd24ob3JpZ2luKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHIgPSB0aGlzLnNwYXduUmFkaXVzICogTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSBNYXRoLnJhbmRvbSgpICogTWF0aC5QSSAqIDI7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogTWF0aC5yYW5kb20oKSAtIDEpO1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IFZlY3RvcjMoXHJcbiAgICAgICAgICAgICAgICBvcmlnaW4ueCArIHIgKiBNYXRoLnNpbihwaGkpICogTWF0aC5jb3ModGhldGEpLFxyXG4gICAgICAgICAgICAgICAgb3JpZ2luLnkgKyByICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKSxcclxuICAgICAgICAgICAgICAgIG9yaWdpbi56ICsgciAqIE1hdGguY29zKHBoaSlcclxuICAgICAgICAgICAgKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCBpbW1lZGlhdGUgPSBmYWxzZSkge1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZSA9IHRoaXMubWluTGlmZXRpbWUgKyBNYXRoLnJhbmRvbSgpICogKHRoaXMubWF4TGlmZXRpbWUgLSB0aGlzLm1pbkxpZmV0aW1lKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMucGFydGljbGVzW2ldID0ge1xyXG4gICAgICAgICAgICAgICAgcG9zOiB0aGlzLnJhbmRvbVNwYXduKG9yaWdpbiksXHJcbiAgICAgICAgICAgICAgICBhZ2U6IGltbWVkaWF0ZSA/IE1hdGgucmFuZG9tKCkgKiBsaWZldGltZSA6IDAsXHJcbiAgICAgICAgICAgICAgICBsaWZldGltZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMubWluU2l6ZSArIE1hdGgucmFuZG9tKCkgKiAodGhpcy5tYXhTaXplIC0gdGhpcy5taW5TaXplKVxyXG4gICAgICAgICAgICB9O1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcbiAgICAgICAgICAgIGNvbnN0IG9yaWdpbiA9IG5ldyBWZWN0b3IzKCk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0V29ybGRQb3NpdGlvbihvcmlnaW4pO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IHRoaXMuZ2VvbWV0cnkuYXR0cmlidXRlcy5hU2l6ZS5hcnJheTtcclxuICAgICAgICAgICAgY29uc3Qgb3BhY2l0aWVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFPcGFjaXR5LmFycmF5O1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHAgPSB0aGlzLnBhcnRpY2xlc1tpXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LLQvtC30YDQsNGB0YJcclxuICAgICAgICAgICAgICAgIHAuYWdlICs9IGRlbHRhO1xyXG4gICAgICAgICAgICAgICAgaWYgKHAuYWdlID49IHAubGlmZXRpbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnJlc2V0UGFydGljbGUoaSwgb3JpZ2luLCBmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0LTQstC40LbQtdC90LjQtVxyXG4gICAgICAgICAgICAgICAgcC5wb3MuYWRkU2NhbGVkVmVjdG9yKHRoaXMuZGlyZWN0aW9uLCB0aGlzLnNwZWVkICogZGVsdGEpO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINC90L7RgNC80LDQu9C40LfQvtCy0LDQvdC90L7QtSDQstGA0LXQvNGPINC20LjQt9C90LggWzAuLjFdXHJcbiAgICAgICAgICAgICAgICBjb25zdCB0ID0gcC5hZ2UgLyBwLmxpZmV0aW1lO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vIGZhZGUgaW4vb3V0XHJcbiAgICAgICAgICAgICAgICBjb25zdCBvcGFjaXR5ID0gdCA8IDAuMiA/IHQgLyAwLjIgOiAodCA+IDAuOCA/ICgxIC0gdCkgLyAwLjIgOiAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQvtCx0L3QvtCy0LvRj9C10Lwg0LDRgtGA0LjQsdGD0YLRi1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IHAucG9zLnggLSBvcmlnaW4ueDtcclxuICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gcC5wb3MueSAtIG9yaWdpbi55O1xyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSBwLnBvcy56IC0gb3JpZ2luLno7XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBwLnNpemU7XHJcbiAgICAgICAgICAgICAgICBvcGFjaXRpZXNbaV0gPSBvcGFjaXR5O1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYVNpemUubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYU9wYWNpdHkubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcbn1cclxuIiwiaW1wb3J0IHtcclxuICAgIFBvaW50cyxcclxuICAgIFZlY3RvcjMsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgT2JqZWN0M0QsXHJcbiAgICBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ29sb3IsXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgQm94R2VvbWV0cnksXHJcbiAgICBNYXRoVXRpbHNcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmltcG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBGaXJlUGFydGljbGVzKCkge1xyXG4gICAgcmV0dXJuIGNsYXNzIEZpcmVQYXJ0aWNsZXMgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3Ioe1xyXG4gICAgICAgICAgICBjb3VudCA9IDEwMDAsXHJcbiAgICAgICAgICAgIG1pblNpemUgPSAwLjUsXHJcbiAgICAgICAgICAgIG1heFNpemUgPSAyLFxyXG4gICAgICAgICAgICBzcGVlZCA9IDEuMFxyXG4gICAgICAgIH0gPSB7fSkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5jb3VudCA9IGNvdW50O1xyXG4gICAgICAgICAgICB0aGlzLm1pblNpemUgPSBtaW5TaXplO1xyXG4gICAgICAgICAgICB0aGlzLm1heFNpemUgPSBtYXhTaXplO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gc3BlZWQ7XHJcblxyXG5cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHN0YXJ0KCkge1xyXG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlNUQVJUIEZJUkVcIilcclxuICAgICAgICAgICAgY29uc3QgY29sb3IxID0gbmV3IENvbG9yKDB4ZmZhYTAwKVxyXG4gICAgICAgICAgICBjb25zdCBjb2xvcjIgPSBuZXcgQ29sb3IoMHhmZjAwMDApXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINC80LDRgdGB0LjQstGLXHJcbiAgICAgICAgICAgIGNvbnN0IHBvc2l0aW9ucyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBsaWZldGltZXMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMuY291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5jb3VudCk7XHJcblxyXG4gICAgICAgICAgICAvLyDQtdGB0LvQuCDQtdGB0YLRjCDQs9C10L7QvNC10YLRgNC40Y8t0LjRgdGC0L7Rh9C90LjQulxyXG4gICAgICAgICAgICBsZXQgc3JjUG9zaXRpb25zID0gbnVsbDtcclxuXHJcbiAgICAgICAgICAgIC8vaWYgKCF0aGlzLnBhcmVudC5pc1NjZW5lKSB7XHJcbiAgICAgICAgICAgIGxldCB0YXJnZXRcclxuICAgICAgICAgICAgdGhpcy5wYXJlbnQudHJhdmVyc2UobSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXRhcmdldCAmJiBtLmlzTWVzaCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IG0uZ2VvbWV0cnlcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IHRhcmdldC5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgc3JjUG9zaXRpb25zID0gcG9zQXR0ci5hcnJheTtcclxuICAgICAgICAgICAgLyp9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcG9zQXR0ciA9IG5ldyBCb3hHZW9tZXRyeSgxLCAxLCAxKS5nZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiKTtcclxuICAgICAgICAgICAgICAgIHNyY1Bvc2l0aW9ucyA9IHBvc0F0dHIuYXJyYXk7XHJcbiAgICAgICAgICAgIH0qL1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGlmIChzcmNQb3NpdGlvbnMpIHtcclxuICAgICAgICAgICAgICAgICAgICAvLyDRgdC70YPRh9Cw0LnQvdCw0Y8g0LLQtdGA0YjQuNC90LAg0LjQtyDQs9C10L7QvNC10YLRgNC40LhcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBpZHggPSBNYXRoLmZsb29yKE1hdGgucmFuZG9tKCkgKiAoc3JjUG9zaXRpb25zLmxlbmd0aCAvIDMpKTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDNdID0gc3JjUG9zaXRpb25zW2lkeCAqIDNdO1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpICogMyArIDFdID0gc3JjUG9zaXRpb25zW2lkeCAqIDMgKyAxXTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAyXSA9IHNyY1Bvc2l0aW9uc1tpZHggKiAzICsgMl07XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vIGZhbGxiYWNrIOKAlCDQv9GA0L7RgdGC0L4g0YLQvtGH0LrQsCDRgSDRiNGD0LzQvtC8XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KTtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaSAqIDMgKyAxXSA9IDA7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kgKiAzICsgMl0gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgbGlmZXRpbWVzW2ldID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgICAgIHNpemVzW2ldID0gTWF0aFV0aWxzLmxlcnAodGhpcy5taW5TaXplLCB0aGlzLm1heFNpemUsIE1hdGgucmFuZG9tKCkpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUocG9zaXRpb25zLCAzKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYUxpZmV0aW1lXCIsIG5ldyBCdWZmZXJBdHRyaWJ1dGUobGlmZXRpbWVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKFwiYVNpemVcIiwgbmV3IEJ1ZmZlckF0dHJpYnV0ZShzaXplcywgMSkpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG5ldyBTaGFkZXJNYXRlcmlhbCh7XHJcbiAgICAgICAgICAgICAgICB0cmFuc3BhcmVudDogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlLFxyXG4gICAgICAgICAgICAgICAgYmxlbmRpbmc6IEFkZGl0aXZlQmxlbmRpbmcsXHJcbiAgICAgICAgICAgICAgICB1bmlmb3Jtczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHVUaW1lOiB7IHZhbHVlOiAwIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMTogeyB2YWx1ZTogY29sb3IxIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdUNvbG9yMjogeyB2YWx1ZTogY29sb3IyIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhTaGFkZXI6IGBcclxuICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYUxpZmV0aW1lO1xyXG4gICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBhU2l6ZTtcclxuICAgICAgICB1bmlmb3JtIGZsb2F0IHVUaW1lO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGFnZSA9IG1vZCh1VGltZSArIGFMaWZldGltZSwgMS4wKTtcclxuICAgICAgICAgIHZlYzMgcG9zID0gcG9zaXRpb247XHJcbiAgICAgICAgICBwb3MueSArPSBhZ2UgKiAzLjA7XHJcbiAgICAgICAgICB2TGlmZXRpbWUgPSAxLjAgLSBhZ2U7XHJcblxyXG4gICAgICAgICAgdmVjNCBtdlBvc2l0aW9uID0gbW9kZWxWaWV3TWF0cml4ICogdmVjNChwb3MsIDEuMCk7XHJcbiAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgZ2xfUG9pbnRTaXplID0gYVNpemUgKiAoMzAwLjAgLyAtbXZQb3NpdGlvbi56KTtcclxuICAgICAgICB9XHJcbiAgICAgIGAsXHJcbiAgICAgICAgICAgICAgICBmcmFnbWVudFNoYWRlcjogYFxyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IxO1xyXG4gICAgICAgIHVuaWZvcm0gdmVjMyB1Q29sb3IyO1xyXG4gICAgICAgIHZhcnlpbmcgZmxvYXQgdkxpZmV0aW1lO1xyXG4gICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgIGZsb2F0IGQgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICBpZiAoZCA+IDAuNSkgZGlzY2FyZDtcclxuICAgICAgICAgIHZlYzMgY29sb3IgPSBtaXgodUNvbG9yMiwgdUNvbG9yMSwgdkxpZmV0aW1lKTtcclxuICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoY29sb3IsIHZMaWZldGltZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICBgXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xyXG5cclxuICAgICAgICAgICAgdGhpcy51cGRhdGUoKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgdXBkYXRlKCkge1xyXG4gICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodGhpcy51cGRhdGUuYmluZCh0aGlzKSk7XHJcblxyXG4gICAgICAgICAgICBjb25zdCBkZWx0YSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gZGVsdGEgKiB0aGlzLnNwZWVkO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsLnVuaWZvcm1zLnVUaW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG4iLCJpbXBvcnQge1xyXG4gICAgQ29sb3IsXHJcbiAgICBQb2ludHMsXHJcbiAgICBWZWN0b3IzLFxyXG4gICAgVGV4dHVyZUxvYWRlcixcclxuICAgIFBvaW50c01hdGVyaWFsLFxyXG4gICAgQnVmZmVyR2VvbWV0cnksXHJcbiAgICBBZGRpdGl2ZUJsZW5kaW5nLFxyXG4gICAgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIE9iamVjdDNELCBDbG9jayxcclxuICAgIEJ1ZmZlckF0dHJpYnV0ZSxcclxuICAgIFNoYWRlck1hdGVyaWFsLFxyXG4gICAgQ2FudmFzVGV4dHVyZVxyXG59IGZyb20gXCJ0aHJlZVwiO1xyXG5cclxuaW1wb3J0IHsgY3JlYXRlUGFydGljbGVUZXh0dXJlLCBnZXRDbG91ZE1hdGVyaWFsIH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxuY29uc3QgY2xvY2sgPSBuZXcgQ2xvY2soKTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIENsb3VkUGFydCgpIHtcclxuICAgIHJldHVybiBjbGFzcyBDbG91ZFBhcnQgZXh0ZW5kcyBPYmplY3QzRCB7XHJcbiAgICAgICAgY29uc3RydWN0b3IoKSB7XHJcbiAgICAgICAgICAgIHN1cGVyKClcclxuICAgICAgICAgICAgdGhpcy5wYXJ0aWNsZUNvdW50ID0gNTAwMDtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeSA9IG5ldyBCdWZmZXJHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVHZW9tZXRyeSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gZ2V0Q2xvdWRNYXRlcmlhbChjcmVhdGVQYXJ0aWNsZVRleHR1cmUoKSlcclxuICAgICAgICAgICAgLy90aGlzLmNyZWF0ZU1hdGVyaWFsKCk7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzID0gbmV3IFBvaW50cyh0aGlzLmdlb21ldHJ5LCB0aGlzLm1hdGVyaWFsKTtcclxuICAgICAgICAgICAgdGhpcy5hZGQodGhpcy5wb2ludHMpO1xyXG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwXHJcblxyXG4gICAgICAgICAgICB0aGlzLnVwZGF0ZSgwKVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaW5pdGlhbGl6ZUdlb21ldHJ5KCkge1xyXG4gICAgICAgICAgICBjb25zdCBwb3NpdGlvbnMgPSBuZXcgRmxvYXQzMkFycmF5KHRoaXMucGFydGljbGVDb3VudCAqIDMpO1xyXG4gICAgICAgICAgICBjb25zdCBzaXplcyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50KTtcclxuICAgICAgICAgICAgY29uc3QgYWxwaGFzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQpO1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gbmV3IEZsb2F0MzJBcnJheSh0aGlzLnBhcnRpY2xlQ291bnQgKiAzKTtcclxuXHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtC30LjRhtC40Lgg0LIg0YHRhNC10YDQuNGH0LXRgdC60L7QuSDRhNC+0YDQvNC1INC00LvRjyDQvtCx0LvQsNC60LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IHJhZGl1cyA9IE1hdGgucmFuZG9tKCkgKiA1ICsgMjtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHRoZXRhID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEkgKiAyO1xyXG4gICAgICAgICAgICAgICAgY29uc3QgcGhpID0gTWF0aC5yYW5kb20oKSAqIE1hdGguUEk7XHJcblxyXG4gICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAxXSA9IE1hdGguY29zKHBoaSkgKiByYWRpdXM7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IE1hdGguc2luKHBoaSkgKiBNYXRoLnNpbih0aGV0YSkgKiByYWRpdXM7XHJcblxyXG4gICAgICAgICAgICAgICAgc2l6ZXNbaV0gPSBNYXRoLnJhbmRvbSgpICogMC44ICsgMC40O1xyXG4gICAgICAgICAgICAgICAgYWxwaGFzW2ldID0gTWF0aC5yYW5kb20oKSAqIDAuNCArIDAuMztcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQodC70YPRh9Cw0LnQvdGL0LUg0YHQutC+0YDQvtGB0YLQuCDQtNC70Y8g0LTQstC40LbQtdC90LjRj1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAwLjAyO1xyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDFdID0gTWF0aC5yYW5kb20oKSAqIDAuMDEgKyAwLjAwNTsgLy8g0JLQstC10YDRhVxyXG4gICAgICAgICAgICAgICAgdmVsb2NpdGllc1tpMyArIDJdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3Bvc2l0aW9uJywgbmV3IEJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoJ3NpemUnLCBuZXcgQnVmZmVyQXR0cmlidXRlKHNpemVzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCdhbHBoYScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUoYWxwaGFzLCAxKSk7XHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkuc2V0QXR0cmlidXRlKCd2ZWxvY2l0eScsIG5ldyBCdWZmZXJBdHRyaWJ1dGUodmVsb2NpdGllcywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypjcmVhdGVNYXRlcmlhbCgpIHtcclxuICAgICAgICAgICAgY29uc3QgdGV4dHVyZSA9IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpLy90aGlzLmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpO1xyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFNoYWRlck1hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcG9pbnRUZXh0dXJlOiB7IHZhbHVlOiB0ZXh0dXJlIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgdGltZTogeyB2YWx1ZTogMCB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgdmVydGV4U2hhZGVyOiB0aGlzLmdldFZlcnRleFNoYWRlcigpLFxyXG4gICAgICAgICAgICAgICAgZnJhZ21lbnRTaGFkZXI6IHRoaXMuZ2V0RnJhZ21lbnRTaGFkZXIoKSxcclxuICAgICAgICAgICAgICAgIHRyYW5zcGFyZW50OiB0cnVlLFxyXG4gICAgICAgICAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIGRlcHRoV3JpdGU6IGZhbHNlXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICAvKmNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC90LjQtSDRgtC10LrRgdGC0YPRgNGLINC/0YDQvtCz0YDQsNC80LzQvdC+XHJcbiAgICAgICAgICAgIGNvbnN0IGNhbnZhcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2NhbnZhcycpO1xyXG4gICAgICAgICAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgICAgICAgICAgY2FudmFzLmhlaWdodCA9IDY0O1xyXG4gICAgICAgICAgICBjb25zdCBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyk7XHJcblxyXG4gICAgICAgICAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICAgICAgICAgIGNvbnN0IGdyYWRpZW50ID0gY29udGV4dC5jcmVhdGVSYWRpYWxHcmFkaWVudCgzMiwgMzIsIDAsIDMyLCAzMiwgMzIpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMCwgJ3JnYmEoMjU1LCAwLCAwLCAxKScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMC41LCAncmdiYSgxNzksIDI1NSwgMCwgMC41KScpO1xyXG4gICAgICAgICAgICBncmFkaWVudC5hZGRDb2xvclN0b3AoMSwgJ3JnYmEoMjU1LCAyNTUsIDI1NSwgMCknKTtcclxuXHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gZ3JhZGllbnQ7XHJcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFJlY3QoMCwgMCwgNjQsIDY0KTtcclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGV4dHVyZTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLypnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBgXHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSBmbG9hdCBzaXplO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgYWxwaGE7XHJcbiAgICAgICAgICAgIGF0dHJpYnV0ZSB2ZWMzIHZlbG9jaXR5O1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdmFyeWluZyBmbG9hdCB2QWxwaGE7XHJcbiAgICAgICAgICAgIHVuaWZvcm0gZmxvYXQgdGltZTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZBbHBoYSA9IGFscGhhO1xyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICAvLyDQkNC90LjQvNCw0YbQuNGPINC00LLQuNC20LXQvdC40Y9cclxuICAgICAgICAgICAgICAgIHZlYzMgbmV3UG9zaXRpb24gPSBwb3NpdGlvbjtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnggKz0gc2luKHRpbWUgKiAwLjAwMSArIHBvc2l0aW9uLnkpICogMC4xO1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSArPSB0aW1lICogMC4wMSAqIHZlbG9jaXR5Lnk7XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi56ICs9IGNvcyh0aW1lICogMC4wMDEgKyBwb3NpdGlvbi54KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0KbQuNC60LvQuNGH0LXRgdC60L7QtSDQstC+0LfRgNC+0LbQtNC10L3QuNC1INGH0LDRgdGC0LjRhlxyXG4gICAgICAgICAgICAgICAgaWYgKG5ld1Bvc2l0aW9uLnkgPiAxMC4wKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueSA9IC01LjA7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIHZlYzQgbXZQb3NpdGlvbiA9IG1vZGVsVmlld01hdHJpeCAqIHZlYzQobmV3UG9zaXRpb24sIDEuMCk7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb2ludFNpemUgPSBzaXplICogKDMwMC4wIC8gLW12UG9zaXRpb24ueik7XHJcbiAgICAgICAgICAgICAgICBnbF9Qb3NpdGlvbiA9IHByb2plY3Rpb25NYXRyaXggKiBtdlBvc2l0aW9uO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICB1bmlmb3JtIHNhbXBsZXIyRCBwb2ludFRleHR1cmU7XHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICBcclxuICAgICAgICAgICAgdm9pZCBtYWluKCkge1xyXG4gICAgICAgICAgICAgICAgdmVjNCB0ZXhDb2xvciA9IHRleHR1cmUyRChwb2ludFRleHR1cmUsIGdsX1BvaW50Q29vcmQpO1xyXG4gICAgICAgICAgICAgICAgZ2xfRnJhZ0NvbG9yID0gdmVjNCgxLjAsIDEuMCwgMS4wLCB0ZXhDb2xvci5hICogdkFscGhhKTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JzRj9Cz0LrQuNC1INC60YDQsNGPXHJcbiAgICAgICAgICAgICAgICBmbG9hdCBkaXN0YW5jZUZyb21DZW50ZXIgPSBsZW5ndGgoZ2xfUG9pbnRDb29yZCAtIHZlYzIoMC41KSk7XHJcbiAgICAgICAgICAgICAgICBpZiAoZGlzdGFuY2VGcm9tQ2VudGVyID4gMC41KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGlzY2FyZDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvci5hICo9IDEuMCAtIHNtb290aHN0ZXAoMC4zLCAwLjUsIGRpc3RhbmNlRnJvbUNlbnRlcik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBgO1xyXG4gICAgICAgIH0qL1xyXG5cclxuICAgICAgICB1cGRhdGUoKSB7XHJcbiAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZSh0aGlzLnVwZGF0ZS5iaW5kKHRoaXMpKVxyXG4gICAgICAgICAgICB0aGlzLnRpbWUgKz0gY2xvY2suZ2V0RGVsdGEoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbC51bmlmb3Jtcy50aW1lLnZhbHVlID0gdGhpcy50aW1lO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCB2ZWxvY2l0aWVzID0gdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnZlbG9jaXR5LmFycmF5O1xyXG4gICAgICAgICAgICBjb25zdCBhbHBoYXMgPSB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuYWxwaGEuYXJyYXk7XHJcblxyXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMucGFydGljbGVDb3VudDsgaSsrKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBpMyA9IGkgKiAzO1xyXG5cclxuICAgICAgICAgICAgICAgIC8vINCh0LzQtdGJ0LXQvdC40LUgKNGC0YPRgNCx0YPQu9C10L3RgtC90L7RgdGC0YwpXHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTNdICs9IE1hdGguc2luKHRoaXMudGltZSAqIDAuMDAxICsgcG9zaXRpb25zW2kzICsgMV0pICogMC4wMDU7XHJcbiAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSArPSBNYXRoLmNvcyh0aGlzLnRpbWUgKiAwLjAwMSArIHBvc2l0aW9uc1tpM10pICogMC4wMDU7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0KDQsNGB0YHRgtC+0Y/QvdC40LUg0L7RgiDRhtC10L3RgtGA0LBcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRpc3QgPSBNYXRoLnNxcnQoXHJcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25zW2kzXSAqIHBvc2l0aW9uc1tpM10gK1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdICogcG9zaXRpb25zW2kzICsgMV0gK1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDJdICogcG9zaXRpb25zW2kzICsgMl1cclxuICAgICAgICAgICAgICAgICk7XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/QvtGB0YLQtdC/0LXQvdC90L7QtSDQuNGB0YfQtdC30L3QvtCy0LXQvdC40LUg0LfQsCDQv9GA0LXQtNC10LvQsNC80Lgg0YDQsNC00LjRg9GB0LAgOFxyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3QgPiA4KSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWxwaGFzW2ldIC09IDAuMDE7IC8vIGZhZGUgb3V0XHJcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGFscGhhc1tpXSA8IDEuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGFscGhhc1tpXSArPSAwLjAwNTsgLy8gZmFkZSBpbiDQtdGB0LvQuCDQstC10YDQvdGD0LvQsNGB0Ywg0LLQvdGD0YLRgNGMXHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0JXRgdC70Lgg0YfQsNGB0YLQuNGG0LAgXCLRg9C80LXRgNC70LBcIiwg0L/QtdGA0LXRgdC+0LfQtNCw0YLRjCDQtdGRINCx0LvQuNC20LUg0Log0YbQtdC90YLRgNGDXHJcbiAgICAgICAgICAgICAgICBpZiAoYWxwaGFzW2ldIDw9IDAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpM10gPSAoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiA0O1xyXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uc1tpMyArIDFdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogNDtcclxuICAgICAgICAgICAgICAgICAgICBwb3NpdGlvbnNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDQ7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTNdID0gKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMC4wMjtcclxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0aWVzW2kzICsgMV0gPSBNYXRoLnJhbmRvbSgpICogMC4wMSArIDAuMDA1O1xyXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXRpZXNbaTMgKyAyXSA9IChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDAuMDI7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGFscGhhc1tpXSA9IDEuMDsgLy8g0L3QvtCy0LDRjyDRh9Cw0YHRgtC40YbQsCDRgdGA0LDQt9GDINGP0YDQutCw0Y9cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLnBvc2l0aW9uLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5hdHRyaWJ1dGVzLmFscGhhLm5lZWRzVXBkYXRlID0gdHJ1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCc0LXRgtC+0LTRiyDQtNC70Y8g0YPQv9GA0LDQstC70LXQvdC40Y8g0L7QsdC70LDQutC+0LxcclxuICAgICAgICBzZXRQb3NpdGlvbih4LCB5LCB6KSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnBvc2l0aW9uLnNldCh4LCB5LCB6KTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldFNjYWxlKHNjYWxlKSB7XHJcbiAgICAgICAgICAgIHRoaXMucG9pbnRzLnNjYWxlLnNldChzY2FsZSwgc2NhbGUsIHNjYWxlKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHNldENvbG9yKHIsIGcsIGIpIHtcclxuICAgICAgICAgICAgLy8g0JzQvtC20L3QviDQtNC+0LHQsNCy0LjRgtGMINCw0YLRgNC40LHRg9GCINGG0LLQtdGC0LAg0LIg0LPQtdC+0LzQtdGC0YDQuNGOXHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IG5ldyBGbG9hdDMyQXJyYXkodGhpcy5wYXJ0aWNsZUNvdW50ICogMyk7XHJcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5wYXJ0aWNsZUNvdW50OyBpKyspIHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGkzID0gaSAqIDM7XHJcbiAgICAgICAgICAgICAgICBjb2xvcnNbaTNdID0gcjtcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpMyArIDFdID0gZztcclxuICAgICAgICAgICAgICAgIGNvbG9yc1tpMyArIDJdID0gYjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZSgnY29sb3InLCBuZXcgQnVmZmVyQXR0cmlidXRlKGNvbG9ycywgMykpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgZGlzcG9zZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5kaXNwb3NlKCk7XHJcbiAgICAgICAgICAgIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMucGFyZW50KSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50cy5wYXJlbnQucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHtcclxuICAgIENvbG9yLFxyXG4gICAgUG9pbnRzLFxyXG4gICAgVmVjdG9yMyxcclxuICAgIFRleHR1cmVMb2FkZXIsXHJcbiAgICBQb2ludHNNYXRlcmlhbCxcclxuICAgIEJ1ZmZlckdlb21ldHJ5LFxyXG4gICAgQWRkaXRpdmVCbGVuZGluZyxcclxuICAgIEZsb2F0MzJCdWZmZXJBdHRyaWJ1dGUsXHJcbiAgICBPYmplY3QzRCwgQ2xvY2tcclxufSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmNvbnN0IGNsb2NrID0gbmV3IENsb2NrKCk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBTdGFyZmllbGQoKSB7XHJcbiAgICByZXR1cm4gY2xhc3MgU3RhcmZpZWxkIGV4dGVuZHMgT2JqZWN0M0Qge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICBzdXBlcigpO1xyXG5cclxuICAgICAgICAgICAgdGhpcy50eXBlID0gXCJTdGFyc0ZpZWxkXCI7XHJcbiAgICAgICAgICAgIHRoaXMubG9hZGVyID0gbmV3IFRleHR1cmVMb2FkZXIoKTtcclxuICAgICAgICAgICAgdGhpcy5jbG9jayA9IG5ldyBDbG9jaygpO1xyXG5cclxuICAgICAgICAgICAgLy8g0J/QsNGA0LDQvNC10YLRgNGLLCDQutC+0YLQvtGA0YvQtSDQvNC+0LbQvdC+INC80LXQvdGP0YLRjCDQtNC40L3QsNC80LjRh9C10YHQutC4XHJcbiAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gMTAwO1xyXG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMC4wMDE7XHJcbiAgICAgICAgICAgIHRoaXMuc2l6ZSA9IDAuMjVcclxuICAgICAgICAgICAgdGhpcy5yYWRpdXMgPSAxMFxyXG5cclxuICAgICAgICAgICAgLy8g0KHRgdGL0LvQutC4INC90LAg0YHQvtC30LTQsNC90L3Ri9C1INC+0LHRitC10LrRgtGLINC00LvRjyDQv9C+0YHQu9C10LTRg9GO0YnQtdCz0L4g0L7QsdC90L7QstC70LXQvdC40Y9cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5ID0gbnVsbDtcclxuICAgICAgICAgICAgdGhpcy5tYXRlcmlhbCA9IG51bGw7XHJcblxyXG4gICAgICAgICAgICB0aGlzLmNyZWF0ZVN0YXJmaWVsZCgpO1xyXG4gICAgICAgICAgICAvL3RoaXMuc3RhcnRBbmltYXRpb24oKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8vINCT0LXRgtGC0LXRgCDQuCDRgdC10YLRgtC10YAg0LTQu9GPIG51bVN0YXJzINGBINCw0LLRgtC+0LzQsNGC0LjRh9C10YHQutC40Lwg0L7QsdC90L7QstC70LXQvdC40LXQvFxyXG4gICAgICAgIGdldCBudW1TdGFycygpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX251bVN0YXJzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgc2V0IG51bVN0YXJzKHZhbHVlKSB7XHJcbiAgICAgICAgICAgIGlmICh2YWx1ZSAhPT0gdGhpcy5fbnVtU3RhcnMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX251bVN0YXJzID0gdmFsdWU7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlYnVpbGRTdGFyZmllbGQoKTsgLy8g0J/QtdGA0LXRgdGC0YDQsNC40LLQsNC10Lwg0L/QvtC70LUg0LfQstC10LfQtCDQv9GA0Lgg0LjQt9C80LXQvdC10L3QuNC4XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldFR5cGVzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gWy4uLnN1cGVyLmdldFR5cGVzKCksIHRoaXMudHlwZV1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGNyZWF0ZVN0YXJmaWVsZCgpIHtcclxuICAgICAgICAgICAgLy8g0KPQtNCw0LvRj9C10Lwg0YHRgtCw0YDRi9C1INGC0L7Rh9C60LgsINC10YHQu9C4INC+0L3QuCDRgdGD0YnQtdGB0YLQstGD0Y7RglxyXG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludHMpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKHRoaXMucG9pbnRzKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLm1hdGVyaWFsKSB0aGlzLm1hdGVyaWFsLmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIHRoaXMuZ2VvbWV0cnkgPSBuZXcgQnVmZmVyR2VvbWV0cnkoKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJwb3NpdGlvblwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMudmVydHMsIDMpKTtcclxuICAgICAgICAgICAgdGhpcy5nZW9tZXRyeS5zZXRBdHRyaWJ1dGUoXCJjb2xvclwiLCBuZXcgRmxvYXQzMkJ1ZmZlckF0dHJpYnV0ZShwb3NpdGlvbnMuY29sb3JzLCAzKSk7XHJcblxyXG4gICAgICAgICAgICB0aGlzLm1hdGVyaWFsID0gbmV3IFBvaW50c01hdGVyaWFsKHtcclxuICAgICAgICAgICAgICAgIHNpemVBdHRlbnVhdGlvbjogdHJ1ZSxcclxuICAgICAgICAgICAgICAgIHNpemU6IHRoaXMuc2l6ZSxcclxuICAgICAgICAgICAgICAgIGFscGhhVGVzdDogMC41LFxyXG4gICAgICAgICAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhDb2xvcnM6IHRydWUsXHJcbiAgICAgICAgICAgICAgICBibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICAgICAgICAgIG1hcDogdGhpcy5sb2FkZXIubG9hZChcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vYXNzZXRzL2NpcmNsZS5wbmdcIiksXHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5wb2ludHMgPSBuZXcgUG9pbnRzKHRoaXMuZ2VvbWV0cnksIHRoaXMubWF0ZXJpYWwpO1xyXG4gICAgICAgICAgICB0aGlzLmFkZCh0aGlzLnBvaW50cyk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IHZlcnRzID0gW107XHJcbiAgICAgICAgICAgIGNvbnN0IGNvbG9ycyA9IFtdO1xyXG5cclxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLl9udW1TdGFyczsgaSArPSAxKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCBwb2ludCA9IHRoaXMuZ2V0UmFuZG9tU3BoZXJlUG9pbnQoKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbCA9IG5ldyBDb2xvcigpLnNldEhTTChwb2ludC5odWUsIDAuMiwgTWF0aC5yYW5kb20oKSk7XHJcblxyXG4gICAgICAgICAgICAgICAgdmVydHMucHVzaChwb2ludC5wb3MueCwgcG9pbnQucG9zLnksIHBvaW50LnBvcy56KTtcclxuICAgICAgICAgICAgICAgIGNvbG9ycy5wdXNoKGNvbC5yLCBjb2wuZywgY29sLmIpO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICByZXR1cm4geyB2ZXJ0cywgY29sb3JzIH07XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBnZXRSYW5kb21TcGhlcmVQb2ludCgpIHtcclxuICAgICAgICAgICAgY29uc3QgcmFkaXVzID0gTWF0aC5yYW5kb20oKSAqIHRoaXMucmFkaXVzICsgdGhpcy5yYWRpdXM7XHJcbiAgICAgICAgICAgIGNvbnN0IHUgPSBNYXRoLnJhbmRvbSgpO1xyXG4gICAgICAgICAgICBjb25zdCB2ID0gTWF0aC5yYW5kb20oKTtcclxuICAgICAgICAgICAgY29uc3QgdGhldGEgPSAyICogTWF0aC5QSSAqIHU7XHJcbiAgICAgICAgICAgIGNvbnN0IHBoaSA9IE1hdGguYWNvcygyICogdiAtIDEpO1xyXG4gICAgICAgICAgICBsZXQgeCA9IHJhZGl1cyAqIE1hdGguc2luKHBoaSkgKiBNYXRoLmNvcyh0aGV0YSk7XHJcbiAgICAgICAgICAgIGxldCB5ID0gcmFkaXVzICogTWF0aC5zaW4ocGhpKSAqIE1hdGguc2luKHRoZXRhKTtcclxuICAgICAgICAgICAgbGV0IHogPSByYWRpdXMgKiBNYXRoLmNvcyhwaGkpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHtcclxuICAgICAgICAgICAgICAgIHBvczogbmV3IFZlY3RvcjMoeCwgeSwgeiksXHJcbiAgICAgICAgICAgICAgICBodWU6IDAuNixcclxuICAgICAgICAgICAgICAgIG1pbkRpc3Q6IHJhZGl1cyxcclxuICAgICAgICAgICAgfTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHJlYnVpbGRTdGFyZmllbGQoKSB7XHJcbiAgICAgICAgICAgIC8vINCT0LXQvdC10YDQuNGA0YPQtdC8INC90L7QstGL0LUg0L/QvtC30LjRhtC40LhcclxuICAgICAgICAgICAgY29uc3QgcG9zaXRpb25zID0gdGhpcy5nZW5lcmF0ZVN0YXJQb3NpdGlvbnMoKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHQvdC+0LLQu9GP0LXQvCDQsNGC0YDQuNCx0YPRgtGLINCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcInBvc2l0aW9uXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy52ZXJ0cywgMykpO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LnNldEF0dHJpYnV0ZShcImNvbG9yXCIsIG5ldyBGbG9hdDMyQnVmZmVyQXR0cmlidXRlKHBvc2l0aW9ucy5jb2xvcnMsIDMpKTtcclxuXHJcbiAgICAgICAgICAgIC8vINCj0LLQtdC00L7QvNC70Y/QtdC8IGpzINC+0LEg0LjQt9C80LXQvdC10L3QuNC4INCz0LXQvtC80LXRgtGA0LjQuFxyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMucG9zaXRpb24ubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgICAgICB0aGlzLmdlb21ldHJ5LmF0dHJpYnV0ZXMuY29sb3IubmVlZHNVcGRhdGUgPSB0cnVlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLypzdGFydEFuaW1hdGlvbigpIHtcclxuICAgICAgICAgICAgY29uc3QgYW5pbWF0ZSA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlcXVlc3RBbmltYXRpb25GcmFtZShhbmltYXRlKTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGRlbHRhVGltZSA9IGNsb2NrLmdldERlbHRhKCk7XHJcblxyXG4gICAgICAgICAgICAgICAgdGhpcy5yb3RhdGlvbi55ICs9IHRoaXMuc3BlZWQgKiBkZWx0YVRpbWU7XHJcbiAgICAgICAgICAgIH07XHJcbiAgICAgICAgICAgIGFuaW1hdGUoKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0JzQtdGC0L7QtCDQtNC70Y8g0L/Qu9Cw0LLQvdC+0LPQviDQuNC30LzQtdC90LXQvdC40Y8g0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgIC8qc2V0TnVtU3RhcnNTbW9vdGgobmV3TnVtU3RhcnMsIGR1cmF0aW9uID0gMTAwMCkge1xyXG4gICAgICAgICAgICBjb25zdCBzdGFydFN0YXJzID0gdGhpcy5fbnVtU3RhcnM7XHJcbiAgICAgICAgICAgIGNvbnN0IHN0YXJ0VGltZSA9IHBlcmZvcm1hbmNlLm5vdygpO1xyXG5cclxuICAgICAgICAgICAgY29uc3QgdXBkYXRlU3RhcnMgPSAoY3VycmVudFRpbWUpID0+IHtcclxuICAgICAgICAgICAgICAgIGNvbnN0IGVsYXBzZWQgPSBjdXJyZW50VGltZSAtIHN0YXJ0VGltZTtcclxuICAgICAgICAgICAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oZWxhcHNlZCAvIGR1cmF0aW9uLCAxKTtcclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9C70LDQstC90L7QtSDQuNC30LzQtdC90LXQvdC40LUg0LrQvtC70LjRh9C10YHRgtCy0LAg0LfQstC10LfQtFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fbnVtU3RhcnMgPSBNYXRoLnJvdW5kKHN0YXJ0U3RhcnMgKyAobmV3TnVtU3RhcnMgLSBzdGFydFN0YXJzKSAqIHByb2dyZXNzKTtcclxuICAgICAgICAgICAgICAgIHRoaXMucmVidWlsZFN0YXJmaWVsZCgpO1xyXG5cclxuICAgICAgICAgICAgICAgIGlmIChwcm9ncmVzcyA8IDEpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUodXBkYXRlU3RhcnMpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHVwZGF0ZVN0YXJzKTtcclxuICAgICAgICB9Ki9cclxuXHJcbiAgICAgICAgLy8g0J7Rh9C40YHRgtC60LAg0YDQtdGB0YPRgNGB0L7QslxyXG4gICAgICAgIGRpc3Bvc2UoKSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmdlb21ldHJ5KSB0aGlzLmdlb21ldHJ5LmRpc3Bvc2UoKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMubWF0ZXJpYWwpIHRoaXMubWF0ZXJpYWwuZGlzcG9zZSgpO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuIiwiaW1wb3J0IHsgQ2FudmFzVGV4dHVyZSwgU2hhZGVyTWF0ZXJpYWwgfSBmcm9tIFwidGhyZWVcIjtcclxuXHJcbmZ1bmN0aW9uIGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSgpIHtcclxuICAgIC8vINCh0L7Qt9C00LDQvdC40LUg0YLQtdC60YHRgtGD0YDRiyDQv9GA0L7Qs9GA0LDQvNC80L3QvlxyXG4gICAgY29uc3QgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XHJcbiAgICBjYW52YXMud2lkdGggPSA2NDtcclxuICAgIGNhbnZhcy5oZWlnaHQgPSA2NDtcclxuICAgIGNvbnN0IGNvbnRleHQgPSBjYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcclxuXHJcbiAgICAvLyDQk9GA0LDQtNC40LXQvdGC0L3Ri9C5INC60YDRg9CzXHJcbiAgICBjb25zdCBncmFkaWVudCA9IGNvbnRleHQuY3JlYXRlUmFkaWFsR3JhZGllbnQoMzIsIDMyLCAwLCAzMiwgMzIsIDMyKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLCAncmdiYSgyNTUsIDIzMCwgMCwgMSknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgwLjUsICdyZ2JhKDI1NSwgMCwgMCwgMC44NCknKTtcclxuICAgIGdyYWRpZW50LmFkZENvbG9yU3RvcCgxLCAncmdiYSgyNTUsIDIzOCwgMCwgMC4xMiknKTtcclxuXHJcbiAgICBjb250ZXh0LmZpbGxTdHlsZSA9IGdyYWRpZW50O1xyXG4gICAgY29udGV4dC5maWxsUmVjdCgwLCAwLCA2NCwgNjQpO1xyXG5cclxuICAgIGNvbnN0IHRleHR1cmUgPSBuZXcgQ2FudmFzVGV4dHVyZShjYW52YXMpO1xyXG4gICAgcmV0dXJuIHRleHR1cmU7XHJcbn1cclxuXHJcbmV4cG9ydCB7IGNyZWF0ZVBhcnRpY2xlVGV4dHVyZSB9XHJcblxyXG5mdW5jdGlvbiBnZXRWZXJ0ZXhTaGFkZXIoKSB7XHJcbiAgICByZXR1cm4gYFxyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgZmxvYXQgc2l6ZTtcclxuICAgICAgICAgICAgYXR0cmlidXRlIGZsb2F0IGFscGhhO1xyXG4gICAgICAgICAgICBhdHRyaWJ1dGUgdmVjMyB2ZWxvY2l0eTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZhcnlpbmcgZmxvYXQgdkFscGhhO1xyXG4gICAgICAgICAgICB1bmlmb3JtIGZsb2F0IHRpbWU7XHJcbiAgICAgICAgICAgIFxyXG4gICAgICAgICAgICB2b2lkIG1haW4oKSB7XHJcbiAgICAgICAgICAgICAgICB2QWxwaGEgPSBhbHBoYTtcclxuICAgICAgICAgICAgICAgIFxyXG4gICAgICAgICAgICAgICAgLy8g0JDQvdC40LzQsNGG0LjRjyDQtNCy0LjQttC10L3QuNGPXHJcbiAgICAgICAgICAgICAgICB2ZWMzIG5ld1Bvc2l0aW9uID0gcG9zaXRpb247XHJcbiAgICAgICAgICAgICAgICBuZXdQb3NpdGlvbi54ICs9IHNpbih0aW1lICogMC4wMDEgKyBwb3NpdGlvbi55KSAqIDAuMTtcclxuICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgKz0gdGltZSAqIDAuMDEgKiB2ZWxvY2l0eS55O1xyXG4gICAgICAgICAgICAgICAgbmV3UG9zaXRpb24ueiArPSBjb3ModGltZSAqIDAuMDAxICsgcG9zaXRpb24ueCkgKiAwLjE7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCm0LjQutC70LjRh9C10YHQutC+0LUg0LLQvtC30YDQvtC20LTQtdC90LjQtSDRh9Cw0YHRgtC40YZcclxuICAgICAgICAgICAgICAgIGlmIChuZXdQb3NpdGlvbi55ID4gMTAuMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIG5ld1Bvc2l0aW9uLnkgPSAtNS4wO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXHJcbiAgICAgICAgICAgICAgICB2ZWM0IG12UG9zaXRpb24gPSBtb2RlbFZpZXdNYXRyaXggKiB2ZWM0KG5ld1Bvc2l0aW9uLCAxLjApO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9pbnRTaXplID0gc2l6ZSAqICgzMDAuMCAvIC1tdlBvc2l0aW9uLnopO1xyXG4gICAgICAgICAgICAgICAgZ2xfUG9zaXRpb24gPSBwcm9qZWN0aW9uTWF0cml4ICogbXZQb3NpdGlvbjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIGA7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGdldEZyYWdtZW50U2hhZGVyKCkge1xyXG4gICAgcmV0dXJuIGBcclxuICAgICAgICAgICAgdW5pZm9ybSBzYW1wbGVyMkQgcG9pbnRUZXh0dXJlO1xyXG4gICAgICAgICAgICB2YXJ5aW5nIGZsb2F0IHZBbHBoYTtcclxuICAgICAgICAgICAgXHJcbiAgICAgICAgICAgIHZvaWQgbWFpbigpIHtcclxuICAgICAgICAgICAgICAgIHZlYzQgdGV4Q29sb3IgPSB0ZXh0dXJlMkQocG9pbnRUZXh0dXJlLCBnbF9Qb2ludENvb3JkKTtcclxuICAgICAgICAgICAgICAgIGdsX0ZyYWdDb2xvciA9IHZlYzQoMS4wLCAxLjAsIDEuMCwgdGV4Q29sb3IuYSAqIHZBbHBoYSk7XHJcbiAgICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICAgIC8vINCc0Y/Qs9C60LjQtSDQutGA0LDRj1xyXG4gICAgICAgICAgICAgICAgZmxvYXQgZGlzdGFuY2VGcm9tQ2VudGVyID0gbGVuZ3RoKGdsX1BvaW50Q29vcmQgLSB2ZWMyKDAuNSkpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGRpc3RhbmNlRnJvbUNlbnRlciA+IDAuNSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGRpc2NhcmQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBnbF9GcmFnQ29sb3IuYSAqPSAxLjAgLSBzbW9vdGhzdGVwKDAuMywgMC41LCBkaXN0YW5jZUZyb21DZW50ZXIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgYDtcclxufVxyXG5cclxuZnVuY3Rpb24gZ2V0Q2xvdWRNYXRlcmlhbCh0ZXh0dXJlKSB7XHJcblxyXG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgU2hhZGVyTWF0ZXJpYWwoe1xyXG4gICAgICAgIHVuaWZvcm1zOiB7XHJcbiAgICAgICAgICAgIHBvaW50VGV4dHVyZTogeyB2YWx1ZTogdGV4dHVyZSB9LFxyXG4gICAgICAgICAgICB0aW1lOiB7IHZhbHVlOiAwIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIHZlcnRleFNoYWRlcjogZ2V0VmVydGV4U2hhZGVyKCksXHJcbiAgICAgICAgZnJhZ21lbnRTaGFkZXI6IGdldEZyYWdtZW50U2hhZGVyKCksXHJcbiAgICAgICAgdHJhbnNwYXJlbnQ6IHRydWUsXHJcbiAgICAgICAgLy9ibGVuZGluZzogQWRkaXRpdmVCbGVuZGluZyxcclxuICAgICAgICBkZXB0aFdyaXRlOiBmYWxzZVxyXG4gICAgfSk7XHJcbiAgICByZXR1cm4gbWF0ZXJpYWxcclxuXHJcbn1cclxuXHJcbmV4cG9ydCB7IGdldENsb3VkTWF0ZXJpYWwgfSJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==