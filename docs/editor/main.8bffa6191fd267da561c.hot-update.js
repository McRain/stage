"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/app/projects.js":
/*!*****************************!*\
  !*** ./src/app/projects.js ***!
  \*****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _idb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/idb.js */ "./src/idb.js");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _modal_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./modal.js */ "./src/app/modal.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__

;

const _examples = [
    //() => import("../../videoroom.json")
]

let _projectId = ""
//const _examples = ["https://s3.eu-west-1.amazonaws.com/3dbuilder.reneos.com/demo.json"]

/**
 * Инициализация БД
 * @param {*} key 
 */
async function init(key) {
    console.log(key)
    _projectId = key
    //await IDB.Init(key, ["project", "assets", "models", "slides", "actions", "modules"], "uid")
    //await getList()
}

async function play(target = 'data') {
    const data = await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].exportToJson(_projectId)
    console.log(data)
    data.project = {
        ui: {
            slides: true,
            fullscreen: true
        }
    }
    let link = `../player?target=${target}`
    if (target === 'src')
        link += `&src=${_projectId}`
    const playerWindow = window.open(link, 'Player');

    if (!playerWindow) {
        console.error('Не удалось открыть окно. Возможно, браузер заблокировал pop-up.');
        return;
    }

    if (target === 'data') {
        // Функция для повторных попыток отправки
        const sendData = async (attempt = 0) => {
            try {
                // Проверяем, не закрыто ли окно
                if (playerWindow.closed) {
                    console.error('Окно плеера было закрыто');
                    return;
                }

                // Пытаемся отправить данные
                playerWindow.postMessage({
                    type: 'INIT_DATA',
                    payload: data
                }, window.location.origin); // Используем конкретный origin вместо '*'

                console.log('Данные отправлены');
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                if (attempt < 5) { // Максимум 5 попыток
                    setTimeout(() => sendData(attempt + 1), 500 * (attempt + 1));
                }
            }
        };

        // Первая попытка отправки с небольшой задержкой
        setTimeout(sendData, 1000);
    }

}

/**
 * Запрос наименования нового проекта
 * Сохранение структуры проекта в IDB
 * Перезагрузка страницы с указанием id проекта
 * 
 * @param {*} element 
 */
async function create() {
    const uid = await createProject()
    if (uid) {
        goto(uid)
    }


}

function createProject(jsonData = {}) {
    return new Promise((resolve) => {
        const options = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            title: "Creating a project",
            text: "Please enter the project name *",
            answer: "",
            template: ""
        })
        const btn = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            label: "Create",
            class: "primary",
            disabled: options.answer.length < 1,
            callback: async (r) => {
                const uid = `project${Date.now()}`
                await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].Create(uid, {
                    project: [
                        {
                            uid: 'info',
                            id: uid,
                            name: r,
                            created: Date.now(),
                            last: Date.now()
                        },
                        {
                            uid: 'options',
                            showslides: true
                        }
                    ],
                    assets: jsonData.assets || [],
                    actions: jsonData.actions || [],
                    models: jsonData.models || [],
                    slides: jsonData.slides || [],
                    modules: jsonData.modules || []
                })
                resolve(uid)
            }
        })
        _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].queryText(options, [btn], (result) => {
            options.answer = result
            btn.disabled = options.answer.length < 1
        })
    })
}

async function loadExample(num) {
    const mod = await _examples[num]()
    const example = mod.default
    //const resp = await fetch(src)
    //const project = await resp.json()
    const name = `project${num}`
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].Init(name, ["project", "assets", "models", "slides", "actions", "modules"], "uid")
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("actions", example.actions)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("assets", example.assets)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("models", example.models)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("modules", example.modules)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("project", example.project)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("slides", example.slides)
    const url = new URL(window.location.href);
    url.searchParams.set('project', name);
    window.location.href = url.toString();
}


async function open() {
    const ls = await getList()
    const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        list: ls.filter(p => p.uid !== App.project.uid)
    })
    _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].open({
        header: {
            value: `Open project`,
            handler: _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close
        },
        content: {
            component: "ItemsLib",
            props,
            events: {
                selected: (item) => {
                    goto(item.id)
                    _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close()
                }
            },
            slots: {
                item: {
                    component: "ProjectItem"
                }
            }
        },
        footer: {
            buttons: [
                {
                    label: "Close",
                    class: "primary",
                    handler: _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close
                }
            ]
        }
    })
}

/**
 * Перезагрузка с указанием выбранного проекта
 * @param {*} projectId 
 */
async function goto(projectId) {
    const url = new URL(window.location.href);
    url.searchParams.set('src', 'db');
    url.searchParams.set('db', projectId);
    window.location.href = url.toString();
}

/**
 * Запрос подтверждения удаления
 * Удаляем запись в БД
 * Перезагрузка страницы без указания проекта
 */
async function remove(projectId) {
    console.log(projectId)
    const uid = projectId || _projectId
    console.log(uid)
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].DeleteDatabase(uid)
    console.log('Removed')
    const index = _data.list.findIndex(p => p.uid === uid)
    if (index >= 0) {
        _data.list.splice(index, 1)
    }
    window.location.href = new URL(`${window.location.origin}${window.location.pathname}`).toString();
}

/**
 * Получение списка проектов
 * @returns Array
 */
async function getList() {
    const list = await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].GetFromAll('project', 'info')
    _data.list.length = 0
    _data.list.push(...list.filter(p => p !== undefined).map(p => {
        p.uid = p.id
        return p
    }))
    return _data.list
}

/*async function exportToJson() {
    const data = await IDB.exportToJson(_projectId)
    console.log(data)
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const filename = `project.json`;
    if (window.navigator.msSaveOrOpenBlob) {
        window.navigator.msSaveBlob(blob, filename);
    }
    else {
        const a = window.document.createElement('a');
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.style = 'display: none';
        a.click();
    }
}*/

async function importProject() {
    /**
 * Функция для открытия диалога выбора файла
 * @param {string} accept - Типы файлов для выбора (по умолчанию .json)
 * @returns {Promise<File>} Promise с выбранным файлом
 */
    function openFileDialog(accept = '.json') {
        return new Promise((resolve) => {
            // Создаем невидимый input элемент
            const input = document.createElement('input');
            input.type = 'file';
            input.accept = accept;
            input.style.display = 'none';

            // Обрабатываем выбор файла
            input.addEventListener('change', () => {
                if (input.files && input.files[0]) {
                    resolve(input.files[0]);
                }
                document.body.removeChild(input);
            });

            // Добавляем input в DOM и триггерим клик
            document.body.appendChild(input);
            input.click();
        });
    }

    /**
     * Функция для чтения и парсинга JSON файла
     * @param {File} file - Объект файла
     * @returns {Promise<object>} Promise с распарсенными данными JSON
     */
    function parseJsonFile(file) {
        return new Promise((resolve, reject) => {
            if (!file.name.endsWith('.json')) {
                reject(new Error('Выберите файл с расширением .json'));
                return;
            }

            const reader = new FileReader();

            reader.onload = (event) => {
                try {
                    const jsonData = JSON.parse(event.target.result);
                    resolve(jsonData);
                } catch (error) {
                    reject(new Error('Ошибка парсинга JSON: ' + error.message));
                }
            };

            reader.onerror = () => {
                reject(new Error('Ошибка чтения файла'));
            };

            reader.readAsText(file);
        });
    }

    try {
        const file = await openFileDialog();
        const jsonData = await parseJsonFile(file);
        let merged = false
        const importList = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
            actions: {},
            assets: {},
            elements: {},
            slides: {},
            modules: {}
        })
        _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].open({
            header: {
                value: `Импорт`,
                handler: () => {
                    _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close()
                }
            },
            content: {
                component: "Importer",
                props: {
                    project: jsonData
                },
                events: {
                    options: (v) => {
                        merged = v.merge
                    },
                    changelist: (list) => {
                        Object.keys(list).forEach(k => {
                            importList[k] = list[k]
                        })
                    }
                }
            },
            footer: {
                buttons: [
                    {
                        label: "Импорт",
                        class: "secondary",
                        handler: async () => {
                            const projectName = `project${Date.now()}`
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].Init(projectName, ["project", "assets", "elements", "slides", "actions", "modules"], "uid")
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("actions", jsonData.actions)
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("assets", jsonData.assets)
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("elements", jsonData.elements)
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("slides", jsonData.slides)
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("modules", jsonData.modules)
                            await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("project", jsonData.project)
                            const url = new URL(window.location.href);
                            url.searchParams.set('project', projectName);
                            window.location.href = url.toString();
                            _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close()
                        }
                    },
                    {
                        label: "Отмена",
                        class: "primary",
                        handler: async () => {
                            _modal_js__WEBPACK_IMPORTED_MODULE_3__["default"].close()
                        }
                    }
                ]
            }
        })

        /*const key = `project${Date.now()}`

        await IDB.Init(key, ["projects", "assets", "elements", "slides", "actions", "modules"], "uid")

        for(let i=0;i<jsonData.assets.length;i++){
            const v = jsonData.assets[i]
            await IDB.addItem("assets",{
                id:v.uid,...v
            })
        }
        for(let i=0;i<jsonData.elements.length;i++){
            const v = jsonData.elements[i]
            await IDB.addItem("elements",{
                id:v.uid,...v
            })
        }
        for(let i=0;i<jsonData.slides.length;i++){
            const v = jsonData.slides[i]
            await IDB.addItem("slides",{
                id:v.uid,...v
            })
        }*/
        return jsonData;
    } catch (error) {
        console.error('Ошибка:', error.message);
        throw error;
    }
}


async function load() {

}

const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    init, create, createProject, open, goto, remove, getList,
    loadExample, play, importProject, load,
    player: null,
    list: []
})




/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("58ef8bdacb05182e03a0")
/******/ })();
/******/ 
/******/ /* webpack/runtime/sharing */
/******/ (() => {
/******/ 	__webpack_require__.federation.initOptions.shared = {	"@reneos/app": [{	version: "1.0.6",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/@reneos/app/index.js */ "./node_modules/@reneos/app/index.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"requiredVersion":"1.0.6","singleton":true,"layer":null}},],	"three": [{	version: "0.180.0",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/three/build/three.module.js */ "./node_modules/three/build/three.module.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.22",
/******/ 			get: () => (() => (__webpack_require__(/*! ./node_modules/vue/dist/vue.runtime.esm-bundler.js */ "./node_modules/vue/dist/vue.runtime.esm-bundler.js"))),
/******/ 			scope: ["default"],
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],}
/******/ 	__webpack_require__.S = {};
/******/ 	var initPromises = {};
/******/ 	var initTokens = {};
/******/ 	__webpack_require__.I = (name, initScope) => {
/******/ 		return __webpack_require__.federation.bundlerRuntime.I({	shareScopeName: name,
/******/ 			webpackRequire: __webpack_require__,
/******/ 			initPromises: initPromises,
/******/ 			initTokens: initTokens,
/******/ 			initScope: initScope,
/******/ 		})
/******/ 	};
/******/ })();
/******/ 
/******/ }
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi44YmZmYTYxOTFmZDI2N2RhNTYxYy5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEM7QUFDQSxDQUE4QjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsR0FBRztBQUNkO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBRztBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxPQUFPO0FBQzFDO0FBQ0Esd0JBQXdCLFdBQVc7QUFDbkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLDJCQUEyQjtBQUM1QztBQUNBO0FBQ0EsY0FBYztBQUNkO0FBQ0EsbUNBQW1DO0FBQ25DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxHQUFHO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQ0FBb0M7QUFDcEM7QUFDQSx3QkFBd0IsNkNBQVE7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Qsb0JBQW9CLDZDQUFRO0FBQzVCO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0NBQXNDLFdBQVc7QUFDakQsc0JBQXNCLCtDQUFHO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFD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REFBSztBQUNqQztBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBLDRCQUE0QixpREFBSztBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLDZDQUFRO0FBQ3RCO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUVBQWUsSzs7Ozs7Ozs7VUNuYWYsc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9wcm9qZWN0cy5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgd2F0Y2ggfSBmcm9tICd2dWUnXHJcbmltcG9ydCBJREIgZnJvbSBcIkAvaWRiLmpzXCJcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuXHJcbmltcG9ydCBtb2RhbCBmcm9tIFwiLi9tb2RhbC5qc1wiXHJcblxyXG5jb25zdCBfZXhhbXBsZXMgPSBbXHJcbiAgICAvLygpID0+IGltcG9ydChcIi4uLy4uL3ZpZGVvcm9vbS5qc29uXCIpXHJcbl1cclxuXHJcbmxldCBfcHJvamVjdElkID0gXCJcIlxyXG4vL2NvbnN0IF9leGFtcGxlcyA9IFtcImh0dHBzOi8vczMuZXUtd2VzdC0xLmFtYXpvbmF3cy5jb20vM2RidWlsZGVyLnJlbmVvcy5jb20vZGVtby5qc29uXCJdXHJcblxyXG4vKipcclxuICog0JjQvdC40YbQuNCw0LvQuNC30LDRhtC40Y8g0JHQlFxyXG4gKiBAcGFyYW0geyp9IGtleSBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGluaXQoa2V5KSB7XHJcbiAgICBjb25zb2xlLmxvZyhrZXkpXHJcbiAgICBfcHJvamVjdElkID0ga2V5XHJcbiAgICAvL2F3YWl0IElEQi5Jbml0KGtleSwgW1wicHJvamVjdFwiLCBcImFzc2V0c1wiLCBcIm1vZGVsc1wiLCBcInNsaWRlc1wiLCBcImFjdGlvbnNcIiwgXCJtb2R1bGVzXCJdLCBcInVpZFwiKVxyXG4gICAgLy9hd2FpdCBnZXRMaXN0KClcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGxheSh0YXJnZXQgPSAnZGF0YScpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9wcm9qZWN0SWQpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgZGF0YS5wcm9qZWN0ID0ge1xyXG4gICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgIHNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsaW5rID0gYC4uL3BsYXllcj90YXJnZXQ9JHt0YXJnZXR9YFxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ3NyYycpXHJcbiAgICAgICAgbGluayArPSBgJnNyYz0ke19wcm9qZWN0SWR9YFxyXG4gICAgY29uc3QgcGxheWVyV2luZG93ID0gd2luZG93Lm9wZW4obGluaywgJ1BsYXllcicpO1xyXG5cclxuICAgIGlmICghcGxheWVyV2luZG93KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0LrRgNGL0YLRjCDQvtC60L3Qvi4g0JLQvtC30LzQvtC20L3Qviwg0LHRgNCw0YPQt9C10YAg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC7IHBvcC11cC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7QstGC0L7RgNC90YvRhSDQv9C+0L/Ri9GC0L7QuiDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoYXR0ZW1wdCA9IDApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L3QtSDQt9Cw0LrRgNGL0YLQviDQu9C4INC+0LrQvdC+XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyV2luZG93LmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0LrQvdC+INC/0LvQtdC10YDQsCDQsdGL0LvQviDQt9Cw0LrRgNGL0YLQvicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GL0YLQsNC10LzRgdGPINC+0YLQv9GA0LDQstC40YLRjCDQtNCw0L3QvdGL0LVcclxuICAgICAgICAgICAgICAgIHBsYXllcldpbmRvdy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lOSVRfREFUQScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSwgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7IC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INC60L7QvdC60YDQtdGC0L3Ri9C5IG9yaWdpbiDQstC80LXRgdGC0L4gJyonXHJcblxyXG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coJ9CU0LDQvdC90YvQtSDQvtGC0L/RgNCw0LLQu9C10L3RiycpO1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDUpIHsgLy8g0JzQsNC60YHQuNC80YPQvCA1INC/0L7Qv9GL0YLQvtC6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZW5kRGF0YShhdHRlbXB0ICsgMSksIDUwMCAqIChhdHRlbXB0ICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g0J/QtdGA0LLQsNGPINC/0L7Qv9GL0YLQutCwINC+0YLQv9GA0LDQstC60Lgg0YEg0L3QtdCx0L7Qu9GM0YjQvtC5INC30LDQtNC10YDQttC60L7QuVxyXG4gICAgICAgIHNldFRpbWVvdXQoc2VuZERhdGEsIDEwMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuLyoqXHJcbiAqINCX0LDQv9GA0L7RgSDQvdCw0LjQvNC10L3QvtCy0LDQvdC40Y8g0L3QvtCy0L7Qs9C+INC/0YDQvtC10LrRgtCwXHJcbiAqINCh0L7RhdGA0LDQvdC10L3QuNC1INGB0YLRgNGD0LrRgtGD0YDRiyDQv9GA0L7QtdC60YLQsCDQsiBJREJcclxuICog0J/QtdGA0LXQt9Cw0LPRgNGD0LfQutCwINGB0YLRgNCw0L3QuNGG0Ysg0YEg0YPQutCw0LfQsNC90LjQtdC8IGlkINC/0YDQvtC10LrRgtCwXHJcbiAqIFxyXG4gKiBAcGFyYW0geyp9IGVsZW1lbnQgXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGUoKSB7XHJcbiAgICBjb25zdCB1aWQgPSBhd2FpdCBjcmVhdGVQcm9qZWN0KClcclxuICAgIGlmICh1aWQpIHtcclxuICAgICAgICBnb3RvKHVpZClcclxuICAgIH1cclxuXHJcblxyXG59XHJcblxyXG5mdW5jdGlvbiBjcmVhdGVQcm9qZWN0KGpzb25EYXRhID0ge30pIHtcclxuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIkNyZWF0aW5nIGEgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICB0ZXh0OiBcIlBsZWFzZSBlbnRlciB0aGUgcHJvamVjdCBuYW1lICpcIixcclxuICAgICAgICAgICAgYW5zd2VyOiBcIlwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJcIlxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgY29uc3QgYnRuID0gcmVhY3RpdmUoe1xyXG4gICAgICAgICAgICBsYWJlbDogXCJDcmVhdGVcIixcclxuICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICBkaXNhYmxlZDogb3B0aW9ucy5hbnN3ZXIubGVuZ3RoIDwgMSxcclxuICAgICAgICAgICAgY2FsbGJhY2s6IGFzeW5jIChyKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBjb25zdCB1aWQgPSBgcHJvamVjdCR7RGF0ZS5ub3coKX1gXHJcbiAgICAgICAgICAgICAgICBhd2FpdCBJREIuQ3JlYXRlKHVpZCwge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IFtcclxuICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdWlkOiAnaW5mbycsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZDogdWlkLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbmFtZTogcixcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNyZWF0ZWQ6IERhdGUubm93KCksXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYXN0OiBEYXRlLm5vdygpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVpZDogJ29wdGlvbnMnLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd3NsaWRlczogdHJ1ZVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgXSxcclxuICAgICAgICAgICAgICAgICAgICBhc3NldHM6IGpzb25EYXRhLmFzc2V0cyB8fCBbXSxcclxuICAgICAgICAgICAgICAgICAgICBhY3Rpb25zOiBqc29uRGF0YS5hY3Rpb25zIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZGVsczoganNvbkRhdGEubW9kZWxzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIHNsaWRlczoganNvbkRhdGEuc2xpZGVzIHx8IFtdLFxyXG4gICAgICAgICAgICAgICAgICAgIG1vZHVsZXM6IGpzb25EYXRhLm1vZHVsZXMgfHwgW11cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICByZXNvbHZlKHVpZClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgbW9kYWwucXVlcnlUZXh0KG9wdGlvbnMsIFtidG5dLCAocmVzdWx0KSA9PiB7XHJcbiAgICAgICAgICAgIG9wdGlvbnMuYW5zd2VyID0gcmVzdWx0XHJcbiAgICAgICAgICAgIGJ0bi5kaXNhYmxlZCA9IG9wdGlvbnMuYW5zd2VyLmxlbmd0aCA8IDFcclxuICAgICAgICB9KVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZEV4YW1wbGUobnVtKSB7XHJcbiAgICBjb25zdCBtb2QgPSBhd2FpdCBfZXhhbXBsZXNbbnVtXSgpXHJcbiAgICBjb25zdCBleGFtcGxlID0gbW9kLmRlZmF1bHRcclxuICAgIC8vY29uc3QgcmVzcCA9IGF3YWl0IGZldGNoKHNyYylcclxuICAgIC8vY29uc3QgcHJvamVjdCA9IGF3YWl0IHJlc3AuanNvbigpXHJcbiAgICBjb25zdCBuYW1lID0gYHByb2plY3Qke251bX1gXHJcbiAgICBhd2FpdCBJREIuSW5pdChuYW1lLCBbXCJwcm9qZWN0XCIsIFwiYXNzZXRzXCIsIFwibW9kZWxzXCIsIFwic2xpZGVzXCIsIFwiYWN0aW9uc1wiLCBcIm1vZHVsZXNcIl0sIFwidWlkXCIpXHJcbiAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhY3Rpb25zXCIsIGV4YW1wbGUuYWN0aW9ucylcclxuICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBleGFtcGxlLmFzc2V0cylcclxuICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBleGFtcGxlLm1vZGVscylcclxuICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwgZXhhbXBsZS5tb2R1bGVzKVxyXG4gICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBleGFtcGxlLnByb2plY3QpXHJcbiAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwgZXhhbXBsZS5zbGlkZXMpXHJcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgIHVybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgbmFtZSk7XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG59XHJcblxyXG5cclxuYXN5bmMgZnVuY3Rpb24gb3BlbigpIHtcclxuICAgIGNvbnN0IGxzID0gYXdhaXQgZ2V0TGlzdCgpXHJcbiAgICBjb25zdCBwcm9wcyA9IHJlYWN0aXZlKHtcclxuICAgICAgICBsaXN0OiBscy5maWx0ZXIocCA9PiBwLnVpZCAhPT0gQXBwLnByb2plY3QudWlkKVxyXG4gICAgfSlcclxuICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYE9wZW4gcHJvamVjdGAsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6IG1vZGFsLmNsb3NlXHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJJdGVtc0xpYlwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICBzZWxlY3RlZDogKGl0ZW0pID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBnb3RvKGl0ZW0uaWQpXHJcbiAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBzbG90czoge1xyXG4gICAgICAgICAgICAgICAgaXRlbToge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJQcm9qZWN0SXRlbVwiXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogbW9kYWwuY2xvc2VcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YEg0YPQutCw0LfQsNC90LjQtdC8INCy0YvQsdGA0LDQvdC90L7Qs9C+INC/0YDQvtC10LrRgtCwXHJcbiAqIEBwYXJhbSB7Kn0gcHJvamVjdElkIFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gZ290byhwcm9qZWN0SWQpIHtcclxuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3NyYycsICdkYicpO1xyXG4gICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ2RiJywgcHJvamVjdElkKTtcclxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQl9Cw0L/RgNC+0YEg0L/QvtC00YLQstC10YDQttC00LXQvdC40Y8g0YPQtNCw0LvQtdC90LjRj1xyXG4gKiDQo9C00LDQu9GP0LXQvCDQt9Cw0L/QuNGB0Ywg0LIg0JHQlFxyXG4gKiDQn9C10YDQtdC30LDQs9GA0YPQt9C60LAg0YHRgtGA0LDQvdC40YbRiyDQsdC10Lcg0YPQutCw0LfQsNC90LjRjyDQv9GA0L7QtdC60YLQsFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKHByb2plY3RJZCkge1xyXG4gICAgY29uc29sZS5sb2cocHJvamVjdElkKVxyXG4gICAgY29uc3QgdWlkID0gcHJvamVjdElkIHx8IF9wcm9qZWN0SWRcclxuICAgIGNvbnNvbGUubG9nKHVpZClcclxuICAgIGF3YWl0IElEQi5EZWxldGVEYXRhYmFzZSh1aWQpXHJcbiAgICBjb25zb2xlLmxvZygnUmVtb3ZlZCcpXHJcbiAgICBjb25zdCBpbmRleCA9IF9kYXRhLmxpc3QuZmluZEluZGV4KHAgPT4gcC51aWQgPT09IHVpZClcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgX2RhdGEubGlzdC5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICB9XHJcbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IG5ldyBVUkwoYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0ke3dpbmRvdy5sb2NhdGlvbi5wYXRobmFtZX1gKS50b1N0cmluZygpO1xyXG59XHJcblxyXG4vKipcclxuICog0J/QvtC70YPRh9C10L3QuNC1INGB0L/QuNGB0LrQsCDQv9GA0L7QtdC60YLQvtCyXHJcbiAqIEByZXR1cm5zIEFycmF5XHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBnZXRMaXN0KCkge1xyXG4gICAgY29uc3QgbGlzdCA9IGF3YWl0IElEQi5HZXRGcm9tQWxsKCdwcm9qZWN0JywgJ2luZm8nKVxyXG4gICAgX2RhdGEubGlzdC5sZW5ndGggPSAwXHJcbiAgICBfZGF0YS5saXN0LnB1c2goLi4ubGlzdC5maWx0ZXIocCA9PiBwICE9PSB1bmRlZmluZWQpLm1hcChwID0+IHtcclxuICAgICAgICBwLnVpZCA9IHAuaWRcclxuICAgICAgICByZXR1cm4gcFxyXG4gICAgfSkpXHJcbiAgICByZXR1cm4gX2RhdGEubGlzdFxyXG59XHJcblxyXG4vKmFzeW5jIGZ1bmN0aW9uIGV4cG9ydFRvSnNvbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9wcm9qZWN0SWQpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShkYXRhKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGBwcm9qZWN0Lmpzb25gO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgYS5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxuICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICB9XHJcbn0qL1xyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0UHJvamVjdCgpIHtcclxuICAgIC8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQtNC40LDQu9C+0LPQsCDQstGL0LHQvtGA0LAg0YTQsNC50LvQsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWNjZXB0IC0g0KLQuNC/0Ysg0YTQsNC50LvQvtCyINC00LvRjyDQstGL0LHQvtGA0LAgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIC5qc29uKVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlPn0gUHJvbWlzZSDRgSDQstGL0LHRgNCw0L3QvdGL0Lwg0YTQsNC50LvQvtC8XHJcbiAqL1xyXG4gICAgZnVuY3Rpb24gb3BlbkZpbGVEaWFsb2coYWNjZXB0ID0gJy5qc29uJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC10LLQuNC00LjQvNGL0LkgaW5wdXQg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgICAgICAgICBpbnB1dC5hY2NlcHQgPSBhY2NlcHQ7XHJcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0LLRi9Cx0L7RgCDRhNCw0LnQu9CwXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8IGlucHV0INCyIERPTSDQuCDRgtGA0LjQs9Cz0LXRgNC40Lwg0LrQu9C40LpcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YfRgtC10L3QuNGPINC4INC/0LDRgNGB0LjQvdCz0LAgSlNPTiDRhNCw0LnQu9CwXHJcbiAgICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSDQntCx0YrQtdC60YIg0YTQsNC50LvQsFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gUHJvbWlzZSDRgSDRgNCw0YHQv9Cw0YDRgdC10L3QvdGL0LzQuCDQtNCw0L3QvdGL0LzQuCBKU09OXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHBhcnNlSnNvbkZpbGUoZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZS5uYW1lLmVuZHNXaXRoKCcuanNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQktGL0LHQtdGA0LjRgtC1INGE0LDQudC7INGBINGA0LDRgdGI0LjRgNC10L3QuNC10LwgLmpzb24nKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINC/0LDRgNGB0LjQvdCz0LAgSlNPTjogJyArIGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINGH0YLQtdC90LjRjyDRhNCw0LnQu9CwJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgb3BlbkZpbGVEaWFsb2coKTtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHBhcnNlSnNvbkZpbGUoZmlsZSk7XHJcbiAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlXHJcbiAgICAgICAgY29uc3QgaW1wb3J0TGlzdCA9IHJlYWN0aXZlKHtcclxuICAgICAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgICAgICAgIGFzc2V0czoge30sXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7fSxcclxuICAgICAgICAgICAgc2xpZGVzOiB7fSxcclxuICAgICAgICAgICAgbW9kdWxlczoge31cclxuICAgICAgICB9KVxyXG4gICAgICAgIG1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBg0JjQvNC/0L7RgNGCYCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBtb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJJbXBvcnRlclwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBqc29uRGF0YVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IHYubWVyZ2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWxpc3Q6IChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRMaXN0W2tdID0gbGlzdFtrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQmNC80L/QvtGA0YJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHByb2plY3ROYW1lID0gYHByb2plY3Qke0RhdGUubm93KCl9YFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLkluaXQocHJvamVjdE5hbWUsIFtcInByb2plY3RcIiwgXCJhc3NldHNcIiwgXCJlbGVtZW50c1wiLCBcInNsaWRlc1wiLCBcImFjdGlvbnNcIiwgXCJtb2R1bGVzXCJdLCBcInVpZFwiKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImVsZW1lbnRzXCIsIGpzb25EYXRhLmVsZW1lbnRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwic2xpZGVzXCIsIGpzb25EYXRhLnNsaWRlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInByb2plY3RcIiwganNvbkRhdGEucHJvamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCe0YLQvNC10L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIC8qY29uc3Qga2V5ID0gYHByb2plY3Qke0RhdGUubm93KCl9YFxyXG5cclxuICAgICAgICBhd2FpdCBJREIuSW5pdChrZXksIFtcInByb2plY3RzXCIsIFwiYXNzZXRzXCIsIFwiZWxlbWVudHNcIiwgXCJzbGlkZXNcIiwgXCJhY3Rpb25zXCIsIFwibW9kdWxlc1wiXSwgXCJ1aWRcIilcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5hc3NldHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5hc3NldHNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJhc3NldHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuZWxlbWVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5lbGVtZW50c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImVsZW1lbnRzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLnNsaWRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLnNsaWRlc1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcInNsaWRlc1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsDonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWQoKSB7XHJcblxyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGluaXQsIGNyZWF0ZSwgY3JlYXRlUHJvamVjdCwgb3BlbiwgZ290bywgcmVtb3ZlLCBnZXRMaXN0LFxyXG4gICAgbG9hZEV4YW1wbGUsIHBsYXksIGltcG9ydFByb2plY3QsIGxvYWQsXHJcbiAgICBwbGF5ZXI6IG51bGwsXHJcbiAgICBsaXN0OiBbXVxyXG59KVxyXG5cclxuXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI1OGVmOGJkYWNiMDUxODJlMDNhMFwiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIyXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9