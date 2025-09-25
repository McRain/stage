"use strict";
self["webpackHotUpdate_reneos_slider_editor"]("main",{

/***/ "./src/app/project.js":
/*!****************************!*\
  !*** ./src/app/project.js ***!
  \****************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var vue__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! vue */ "webpack/sharing/consume/default/vue/vue");
/* harmony import */ var _idb_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @/idb.js */ "./src/idb.js");
/* harmony import */ var _reneos_app__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @reneos/app */ "webpack/sharing/consume/default/@reneos/app/@reneos/app");
/* harmony import */ var _eventemitter_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../eventemitter.js */ "./src/eventemitter.js");
Object(function webpackMissingModule() { var e = new Error("Cannot find module './modals/elementadd.vue'"); e.code = 'MODULE_NOT_FOUND'; throw e; }());
/* harmony import */ var _components_modals_importer_vue__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @/components/modals/importer.vue */ "./src/components/modals/importer.vue");
/* harmony import */ var _tools_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/tools.js */ "./src/tools.js");



const App = _reneos_app__WEBPACK_IMPORTED_MODULE_2__["default"] || _reneos_app__WEBPACK_IMPORTED_MODULE_2__
;
const _emmiter = new _eventemitter_js__WEBPACK_IMPORTED_MODULE_3__["default"]()
;





let _factory

function init(projectData) {
    for (let i = 0; i < projectData.length; i++) {
        const v = projectData[i]
        _data.data[v.uid] = v
    }
    _data.info = _data.data['info'] || {
        name: "Editor"
    }
}

async function load(modelsData) {
    _factory = App.engine.getFactory()
    const parsed = {}
    for (let i = modelsData.length - 1; i >= 0; i--) {
        const modelData = modelsData[i]
        const el = await build(modelsData, modelData, parsed)
        const index = modelsData.findIndex(s => s.uid === el.uid)
        if (index >= 0) {
            modelsData.splice(index, 1)
        }
    }
}


function getState(element, slide) {
    if (!element.states[slide]) {
        element.states[slide] = {
            actions: []
        }
        _emmiter.emit('stateadd', slide, element.paths)
    }
    return element.states[slide]
}

async function build(list, data, parsed) {
    if (!data)
        return
    if (parsed[data.uid])
        return parsed[data.uid]
    const parentId = data.parent
    let parent = parsed[parentId]
    if (!parent) {
        parent = await build(list, list.find(l => l.uid === parentId), parsed)
    }
    try {
        const el = await createElement(data, parent)
        parsed[el.uid] = el
        return el
    } catch (error) {
        console.warn(error)
    }
}

/**
 * Показывается форма выбора типа элемента
 */
async function addElement() {

}

async function createElement(data, parent) {
    const el = await _factory.BuildElement(data, parent || App.engine.getManager().Root)
    if (!el) {
        return
    }
    el.name = data.name || data.uid
    el.states = data.states || {}
    el.properties = data.properties || {}
    el.actions = data.actions || []
    el.paths = data.paths ?? el.paths
    el.path = el.paths.join('.')
    const element = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)(el)
    const p = parent || _data
    p.add(element)//Добавление в Data
    _emmiter.emit('create', element)
    return element
}

async function remove(paths) {
    let parent = _data
    let target = _data
    for (let i = 0; i < paths.length; i++) {
        parent = target
        target = parent.children.find(el => el.uid === paths[i])
    }
    if (App.selection.selected === target) {
        App.selection.select(null)
    }
    const index = parent.children.findIndex(t => t === target)
    if (index >= 0) {
        for (let i = 0; i < target.children.length; i++) {
            const child = target.children[i]
            if (child.isElement) {
                remove(child.paths)
            }
        }
        parent.children.splice(index, 1)
        if (target.parent) {
            target.parent.remove(target)
        }
        _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].deleteItem("models", target.uid)
        _factory.RemoveModel(target.uid)
        _emmiter.emit("remove", paths, target)
    }
}

function find(paths) {
    let target = _data
    for (let i = 0; i < paths.length; i++) {
        target = target.children.find(c => c.uid === paths[i])
    }
    return target
}

function findObjectsByType(type) {
    const result = [];

    function traverse(node) {
        if (node instanceof type) { // Проверяем, является ли объект экземпляром указанного типа
            result.push(node.data);
        }

        if (node.children && Array.isArray(node.children)) {
            node.children.forEach(child => traverse(child)); // Рекурсивно обходим детей
        }
    }

    traverse(_data);
    return result;
}

async function save(model) {
    try {
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].upsertItemProperties("models", model.uid, JSON.parse((0,_tools_js__WEBPACK_IMPORTED_MODULE_6__.stringify)({
            name: model.name,
            paths: model.paths,
            path: model.paths.join('.'),
            parent: model.parent?.uid || null,
            actions: model.actions || [],
            props: model.props || {},
            //args:model.args || {},
            properties: model.properties || {},
            states: model.states,
            type: model.type,
            uid: model.uid,
            assets: model.assets || []
        })))
    } catch (error) {
        console.warn(error)
    }
}

function collect(list, slide, outlist = []) {
    for (let i = 0; i < list.length; i++) {
        const el = list[i]
        if (el.isElement && el.states[slide]) {
            outlist.push(el)

        }
        if (!el.children) {
            console.warn("No child")
        }
        if (el.children.length) {
            collect(el.children, slide, outlist)
        }
    }
}

function findStates(slideUID) {
    const outList = []
    collect(_data.children, slideUID, outList)
    return outList
}

async function exportToJson() {
    const data = await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].exportToJson(_data.uid)
    const blob = new Blob([JSON.stringify(data)], { type: 'application/json' })
    const filename = `project${_data.uid}.json`;
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
}

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

        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("actions", jsonData.actions)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("assets", jsonData.assets)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("models", jsonData.models)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("slides", jsonData.slides)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("modules", jsonData.modules)
        await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].addItems("project", jsonData.project)
        const url = new URL(window.location.href);
        //url.searchParams.set('project', projectName);
        window.location.href = url.toString();

        /*App.modal.open({
            header: {
                value: `Импорт`,
                handler: () => {
                    App.modal.close()
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
                            await IDB.addItems("actions", jsonData.actions)
                            await IDB.addItems("assets", jsonData.assets)
                            await IDB.addItems("models", jsonData.models)
                            await IDB.addItems("slides", jsonData.slides)
                            await IDB.addItems("modules", jsonData.modules)
                            await IDB.addItems("project", jsonData.project)
                            const url = new URL(window.location.href);
                            //url.searchParams.set('project', projectName);
                            window.location.href = url.toString();
                            App.modal.close()
                        }
                    },
                    {
                        label: "Отмена",
                        class: "primary",
                        handler: async () => {
                            App.modal.close()
                        }
                    }
                ]
            }
        })*/

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

async function play(target = 'data') {
    const data = await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].exportToJson(_data.uid)
    console.log(data)
    data.project = {
        ui: {
            slides: true,
            fullscreen: true
        }
    }
    let link = `../player?src=${target}`
    if (target === 'db')
        link += `&db=${_data.uid}`
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
            } catch (error) {
                console.error('Ошибка при отправке данных:', error);
                if (attempt < 5) { // Максимум 5 попыток
                    setTimeout(() => sendData(attempt + 1), 500 * (attempt + 1));
                }
            }
        };

        // Первая попытка отправки с небольшой задержкой
        setTimeout(sendData, 3000);
    }

}

async function handleAsset(data) {
    if (!App.slides.actived) {
        App.toasts.add({
            message: `Необходимо создать слайд`
        })
        return
    }
    if (data.source.type === "model") {
        const uid = (`${data.source.name || data.source.uid}${Date.now()}`).replace('.', '')
        console.log(data.source.resource)
        const el = await App.project.createElement({
            type: "Object3D",
            uid,
            parent: data.target?.uid,
            assets: [{
                uid: data.source.uid
            }],
            paths: [...data.target?.paths || [], uid]
        }, data.target)
        await App.project.save(el)
        App.selection.select(el)
    }
}

const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    add(el) {
        _data.children.push(el)
    },
    uid: null, init,
    info: {
        name: "Editor"
    },
    data: {},
    load, findStates, getState, remove, handleAsset,
    createElement, save, find, findObjectsByType,
    exportToJson, importProject, play,
    children: [],
    on: _emmiter.on.bind(_emmiter),
    off: _emmiter.off.bind(_emmiter),
    options: {
        camera: {}
    }
})

App.On("init", () => {

    window.vue.component("Importer", _components_modals_importer_vue__WEBPACK_IMPORTED_MODULE_5__["default"])

    App.slides.on("change", (slide) => {
        const outList = []
        collect(_data.children, slide, outList)
        //activates(_data.children, slide.uid)
    })

    App.slides.on("remove", (uid) => {
        const outList = []
        collect(_data.children, uid, outList)
        for (let i = 0; i < outList.length; i++) {
            delete outList[i].states[uid]
        }
    })

    App.menu.addMenu('app',
        {
            path: 'app.list.project',
            icon: '',
            text: 'Project',
            link: '#',
            children: [
                {
                    path: 'app.list.project.create',
                    icon: 'file-empty',
                    text: 'Create',
                    handler: async () => {
                        App.projects.create()
                    }
                },
                {
                    path: 'app.list.project.open',
                    icon: 'menu',
                    text: 'Open',
                    tooltip: "Open project",
                    handler: () => {
                        App.projects.open()
                    }
                },
                {
                    path: 'app.list.project.export',
                    icon: 'download',
                    text: 'Export',
                    tooltip: "Export project",
                    handler: () => {
                        App.project.exportToJson()
                    }
                },
                {
                    path: 'app.list.project.import',
                    icon: 'upload',
                    text: 'Import',
                    link: '#',
                    tooltip: "Import project",
                    handler: () => {
                        App.project.importProject()
                    }
                },
                {
                    path: 'app.list.project.remove',
                    icon: 'bin',
                    text: 'Delete',
                    handler: () => {
                        App.projects.remove()
                    }
                }
            ]
        }
    )
})


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_data);

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("6649c4201b98057d5fc2")
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
/******/ 			shareConfig: {"eager":true,"singleton":true,"layer":null}},],	"vue": [{	version: "3.5.21",
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi42YWQ5MzU2NjEzOTFmY2E3YzIwMi5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBNkM7QUFDN0MscUJBQXFCLHdEQUFZO0FBQ2pDLENBQWdEO0FBQ2hEO0FBQ3VEO0FBQ3ZEO0FBQ3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsNkNBQVE7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLDRCQUE0QjtBQUNwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFRLCtDQUFHO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0Isa0JBQWtCO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLG9DQUFvQztBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLDZEQUE2RDtBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLCtDQUFHLHNEQUFzRCxvREFBUztBQUNoRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0NBQW9DO0FBQ3BDLG1DQUFtQztBQUNuQyw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsTUFBTTtBQUNOO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxvQkFBb0IsaUJBQWlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHVCQUF1QiwrQ0FBRztBQUMxQixvREFBb0QsMEJBQTBCO0FBQzlFLCtCQUErQixVQUFVO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixhQUFhLGVBQWU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGlCQUFpQixpQkFBaUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLDZDQUFRO0FBQ25DLHVCQUF1QjtBQUN2QixzQkFBc0I7QUFDdEIsd0JBQXdCO0FBQ3hCLHNCQUFzQjtBQUN0QjtBQUNBLFNBQVM7QUFDVDtBQUNBLGNBQWMsK0NBQUc7QUFDakIsY0FBYywrQ0FBRztBQUNqQixjQUFjLCtDQUFHO0FBQ2pCLGNBQWMsK0NBQUc7QUFDakIsY0FBYywrQ0FBRztBQUNqQixjQUFjLCtDQUFHO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBLHFCQUFxQjtBQUNyQjtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscUJBQXFCO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLGdDQUFnQyxXQUFXO0FBQzNDO0FBQ0E7QUFDQTtBQUNBLG9CQUFvQix5QkFBeUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0EsYUFBYTtBQUNiO0FBQ0Esb0JBQW9CLDJCQUEyQjtBQUMvQztBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxvQkFBb0IseUJBQXlCO0FBQzdDO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYixTQUFTO0FBQ1Q7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsdUJBQXVCLCtDQUFHO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDLE9BQU87QUFDdkM7QUFDQSx1QkFBdUIsVUFBVTtBQUNqQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsMkJBQTJCO0FBQzVDLGNBQWM7QUFDZDtBQUNBLG1DQUFtQztBQUNuQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLG9DQUFvQyxFQUFFLFdBQVc7QUFDekU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhO0FBQ2I7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsNkNBQVE7QUFDdEI7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsWUFBWTtBQUNaO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0E7QUFDQSxxQ0FBcUMsdUVBQVE7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixvQkFBb0I7QUFDNUM7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNEO0FBQ0E7QUFDQSxpRUFBZSxLOzs7Ozs7OztVQ3JoQmYsc0Q7Ozs7O1VDQUEsc0RBQXNELGtCQUFrQjtVQUN4RTtVQUNBO1VBQ0EsZ0JBQWdCLHNFQUFzRSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9wcm9qZWN0LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCB3YXRjaCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IElEQiBmcm9tIFwiQC9pZGIuanNcIlxyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgRXZlbnRFbW1pdGVyIGZyb20gXCIuLi9ldmVudGVtaXR0ZXIuanNcIlxyXG5jb25zdCBfZW1taXRlciA9IG5ldyBFdmVudEVtbWl0ZXIoKVxyXG5pbXBvcnQgRWxlbWVudEFkZCBmcm9tIFwiLi9tb2RhbHMvZWxlbWVudGFkZC52dWVcIlxyXG5cclxuaW1wb3J0IEltcG9ydGVyIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2ltcG9ydGVyLnZ1ZVwiXHJcblxyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwiQC90b29scy5qc1wiXHJcblxyXG5sZXQgX2ZhY3RvcnlcclxuXHJcbmZ1bmN0aW9uIGluaXQocHJvamVjdERhdGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2ID0gcHJvamVjdERhdGFbaV1cclxuICAgICAgICBfZGF0YS5kYXRhW3YudWlkXSA9IHZcclxuICAgIH1cclxuICAgIF9kYXRhLmluZm8gPSBfZGF0YS5kYXRhWydpbmZvJ10gfHwge1xyXG4gICAgICAgIG5hbWU6IFwiRWRpdG9yXCJcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZChtb2RlbHNEYXRhKSB7XHJcbiAgICBfZmFjdG9yeSA9IEFwcC5lbmdpbmUuZ2V0RmFjdG9yeSgpXHJcbiAgICBjb25zdCBwYXJzZWQgPSB7fVxyXG4gICAgZm9yIChsZXQgaSA9IG1vZGVsc0RhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBtb2RlbERhdGEgPSBtb2RlbHNEYXRhW2ldXHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBidWlsZChtb2RlbHNEYXRhLCBtb2RlbERhdGEsIHBhcnNlZClcclxuICAgICAgICBjb25zdCBpbmRleCA9IG1vZGVsc0RhdGEuZmluZEluZGV4KHMgPT4gcy51aWQgPT09IGVsLnVpZClcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBtb2RlbHNEYXRhLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZShlbGVtZW50LCBzbGlkZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LnN0YXRlc1tzbGlkZV0pIHtcclxuICAgICAgICBlbGVtZW50LnN0YXRlc1tzbGlkZV0gPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoJ3N0YXRlYWRkJywgc2xpZGUsIGVsZW1lbnQucGF0aHMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudC5zdGF0ZXNbc2xpZGVdXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkKGxpc3QsIGRhdGEsIHBhcnNlZCkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgaWYgKHBhcnNlZFtkYXRhLnVpZF0pXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFtkYXRhLnVpZF1cclxuICAgIGNvbnN0IHBhcmVudElkID0gZGF0YS5wYXJlbnRcclxuICAgIGxldCBwYXJlbnQgPSBwYXJzZWRbcGFyZW50SWRdXHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IGF3YWl0IGJ1aWxkKGxpc3QsIGxpc3QuZmluZChsID0+IGwudWlkID09PSBwYXJlbnRJZCksIHBhcnNlZClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBjcmVhdGVFbGVtZW50KGRhdGEsIHBhcmVudClcclxuICAgICAgICBwYXJzZWRbZWwudWlkXSA9IGVsXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqINCf0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyDRhNC+0YDQvNCwINCy0YvQsdC+0YDQsCDRgtC40L/QsCDRjdC70LXQvNC10L3RgtCwXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBhZGRFbGVtZW50KCkge1xyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChkYXRhLCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IGVsID0gYXdhaXQgX2ZhY3RvcnkuQnVpbGRFbGVtZW50KGRhdGEsIHBhcmVudCB8fCBBcHAuZW5naW5lLmdldE1hbmFnZXIoKS5Sb290KVxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZWwubmFtZSA9IGRhdGEubmFtZSB8fCBkYXRhLnVpZFxyXG4gICAgZWwuc3RhdGVzID0gZGF0YS5zdGF0ZXMgfHwge31cclxuICAgIGVsLnByb3BlcnRpZXMgPSBkYXRhLnByb3BlcnRpZXMgfHwge31cclxuICAgIGVsLmFjdGlvbnMgPSBkYXRhLmFjdGlvbnMgfHwgW11cclxuICAgIGVsLnBhdGhzID0gZGF0YS5wYXRocyA/PyBlbC5wYXRoc1xyXG4gICAgZWwucGF0aCA9IGVsLnBhdGhzLmpvaW4oJy4nKVxyXG4gICAgY29uc3QgZWxlbWVudCA9IHJlYWN0aXZlKGVsKVxyXG4gICAgY29uc3QgcCA9IHBhcmVudCB8fCBfZGF0YVxyXG4gICAgcC5hZGQoZWxlbWVudCkvL9CU0L7QsdCw0LLQu9C10L3QuNC1INCyIERhdGFcclxuICAgIF9lbW1pdGVyLmVtaXQoJ2NyZWF0ZScsIGVsZW1lbnQpXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmUocGF0aHMpIHtcclxuICAgIGxldCBwYXJlbnQgPSBfZGF0YVxyXG4gICAgbGV0IHRhcmdldCA9IF9kYXRhXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0XHJcbiAgICAgICAgdGFyZ2V0ID0gcGFyZW50LmNoaWxkcmVuLmZpbmQoZWwgPT4gZWwudWlkID09PSBwYXRoc1tpXSlcclxuICAgIH1cclxuICAgIGlmIChBcHAuc2VsZWN0aW9uLnNlbGVjdGVkID09PSB0YXJnZXQpIHtcclxuICAgICAgICBBcHAuc2VsZWN0aW9uLnNlbGVjdChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uZmluZEluZGV4KHQgPT4gdCA9PT0gdGFyZ2V0KVxyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRhcmdldC5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmUoY2hpbGQucGF0aHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBpZiAodGFyZ2V0LnBhcmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQucGFyZW50LnJlbW92ZSh0YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIElEQi5kZWxldGVJdGVtKFwibW9kZWxzXCIsIHRhcmdldC51aWQpXHJcbiAgICAgICAgX2ZhY3RvcnkuUmVtb3ZlTW9kZWwodGFyZ2V0LnVpZClcclxuICAgICAgICBfZW1taXRlci5lbWl0KFwicmVtb3ZlXCIsIHBhdGhzLCB0YXJnZXQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQocGF0aHMpIHtcclxuICAgIGxldCB0YXJnZXQgPSBfZGF0YVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5jaGlsZHJlbi5maW5kKGMgPT4gYy51aWQgPT09IHBhdGhzW2ldKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kT2JqZWN0c0J5VHlwZSh0eXBlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB0eXBlKSB7IC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC+0LHRitC10LrRgiDRjdC60LfQtdC80L/Qu9GP0YDQvtC8INGD0LrQsNC30LDQvdC90L7Qs9C+INGC0LjQv9CwXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0cmF2ZXJzZShjaGlsZCkpOyAvLyDQoNC10LrRg9GA0YHQuNCy0L3QviDQvtCx0YXQvtC00LjQvCDQtNC10YLQtdC5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYXZlcnNlKF9kYXRhKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmUobW9kZWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwibW9kZWxzXCIsIG1vZGVsLnVpZCwgSlNPTi5wYXJzZShzdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBuYW1lOiBtb2RlbC5uYW1lLFxyXG4gICAgICAgICAgICBwYXRoczogbW9kZWwucGF0aHMsXHJcbiAgICAgICAgICAgIHBhdGg6IG1vZGVsLnBhdGhzLmpvaW4oJy4nKSxcclxuICAgICAgICAgICAgcGFyZW50OiBtb2RlbC5wYXJlbnQ/LnVpZCB8fCBudWxsLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBtb2RlbC5hY3Rpb25zIHx8IFtdLFxyXG4gICAgICAgICAgICBwcm9wczogbW9kZWwucHJvcHMgfHwge30sXHJcbiAgICAgICAgICAgIC8vYXJnczptb2RlbC5hcmdzIHx8IHt9LFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBtb2RlbC5wcm9wZXJ0aWVzIHx8IHt9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IG1vZGVsLnN0YXRlcyxcclxuICAgICAgICAgICAgdHlwZTogbW9kZWwudHlwZSxcclxuICAgICAgICAgICAgdWlkOiBtb2RlbC51aWQsXHJcbiAgICAgICAgICAgIGFzc2V0czogbW9kZWwuYXNzZXRzIHx8IFtdXHJcbiAgICAgICAgfSkpKVxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3QobGlzdCwgc2xpZGUsIG91dGxpc3QgPSBbXSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBsaXN0W2ldXHJcbiAgICAgICAgaWYgKGVsLmlzRWxlbWVudCAmJiBlbC5zdGF0ZXNbc2xpZGVdKSB7XHJcbiAgICAgICAgICAgIG91dGxpc3QucHVzaChlbClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZWwuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gY2hpbGRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb2xsZWN0KGVsLmNoaWxkcmVuLCBzbGlkZSwgb3V0bGlzdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRTdGF0ZXMoc2xpZGVVSUQpIHtcclxuICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgc2xpZGVVSUQsIG91dExpc3QpXHJcbiAgICByZXR1cm4gb3V0TGlzdFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0pzb24oKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSURCLmV4cG9ydFRvSnNvbihfZGF0YS51aWQpXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEpXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gYHByb2plY3Qke19kYXRhLnVpZH0uanNvbmA7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGEgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuICAgICAgICBhLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG4gICAgICAgIGEuY2xpY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0UHJvamVjdCgpIHtcclxuICAgIC8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQtNC40LDQu9C+0LPQsCDQstGL0LHQvtGA0LAg0YTQsNC50LvQsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWNjZXB0IC0g0KLQuNC/0Ysg0YTQsNC50LvQvtCyINC00LvRjyDQstGL0LHQvtGA0LAgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIC5qc29uKVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlPn0gUHJvbWlzZSDRgSDQstGL0LHRgNCw0L3QvdGL0Lwg0YTQsNC50LvQvtC8XHJcbiAqL1xyXG4gICAgZnVuY3Rpb24gb3BlbkZpbGVEaWFsb2coYWNjZXB0ID0gJy5qc29uJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC10LLQuNC00LjQvNGL0LkgaW5wdXQg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgICAgICAgICBpbnB1dC5hY2NlcHQgPSBhY2NlcHQ7XHJcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0LLRi9Cx0L7RgCDRhNCw0LnQu9CwXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8IGlucHV0INCyIERPTSDQuCDRgtGA0LjQs9Cz0LXRgNC40Lwg0LrQu9C40LpcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YfRgtC10L3QuNGPINC4INC/0LDRgNGB0LjQvdCz0LAgSlNPTiDRhNCw0LnQu9CwXHJcbiAgICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSDQntCx0YrQtdC60YIg0YTQsNC50LvQsFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gUHJvbWlzZSDRgSDRgNCw0YHQv9Cw0YDRgdC10L3QvdGL0LzQuCDQtNCw0L3QvdGL0LzQuCBKU09OXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHBhcnNlSnNvbkZpbGUoZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZS5uYW1lLmVuZHNXaXRoKCcuanNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQktGL0LHQtdGA0LjRgtC1INGE0LDQudC7INGBINGA0LDRgdGI0LjRgNC10L3QuNC10LwgLmpzb24nKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINC/0LDRgNGB0LjQvdCz0LAgSlNPTjogJyArIGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINGH0YLQtdC90LjRjyDRhNCw0LnQu9CwJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgb3BlbkZpbGVEaWFsb2coKTtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHBhcnNlSnNvbkZpbGUoZmlsZSk7XHJcbiAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlXHJcbiAgICAgICAgY29uc3QgaW1wb3J0TGlzdCA9IHJlYWN0aXZlKHtcclxuICAgICAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgICAgICAgIGFzc2V0czoge30sXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7fSxcclxuICAgICAgICAgICAgc2xpZGVzOiB7fSxcclxuICAgICAgICAgICAgbW9kdWxlczoge31cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhY3Rpb25zXCIsIGpzb25EYXRhLmFjdGlvbnMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2RlbHNcIiwganNvbkRhdGEubW9kZWxzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInNsaWRlc1wiLCBqc29uRGF0YS5zbGlkZXMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kdWxlc1wiLCBqc29uRGF0YS5tb2R1bGVzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInByb2plY3RcIiwganNvbkRhdGEucHJvamVjdClcclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAvL3VybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8qQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBg0JjQvNC/0L7RgNGCYCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiSW1wb3J0ZXJcIixcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoganNvbkRhdGFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSB2Lm1lcmdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VsaXN0OiAobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TGlzdFtrXSA9IGxpc3Rba11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JjQvNC/0L7RgNGCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhY3Rpb25zXCIsIGpzb25EYXRhLmFjdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhc3NldHNcIiwganNvbkRhdGEuYXNzZXRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kZWxzXCIsIGpzb25EYXRhLm1vZGVscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInNsaWRlc1wiLCBqc29uRGF0YS5zbGlkZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2R1bGVzXCIsIGpzb25EYXRhLm1vZHVsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJwcm9qZWN0XCIsIGpzb25EYXRhLnByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQntGC0LzQtdC90LBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkqL1xyXG5cclxuICAgICAgICAvKmNvbnN0IGtleSA9IGBwcm9qZWN0JHtEYXRlLm5vdygpfWBcclxuXHJcbiAgICAgICAgYXdhaXQgSURCLkluaXQoa2V5LCBbXCJwcm9qZWN0c1wiLCBcImFzc2V0c1wiLCBcImVsZW1lbnRzXCIsIFwic2xpZGVzXCIsIFwiYWN0aW9uc1wiLCBcIm1vZHVsZXNcIl0sIFwidWlkXCIpXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuYXNzZXRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuYXNzZXRzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwiYXNzZXRzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLmVsZW1lbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuZWxlbWVudHNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJlbGVtZW50c1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5zbGlkZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5zbGlkZXNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJzbGlkZXNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LA6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBsYXkodGFyZ2V0ID0gJ2RhdGEnKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSURCLmV4cG9ydFRvSnNvbihfZGF0YS51aWQpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgZGF0YS5wcm9qZWN0ID0ge1xyXG4gICAgICAgIHVpOiB7XHJcbiAgICAgICAgICAgIHNsaWRlczogdHJ1ZSxcclxuICAgICAgICAgICAgZnVsbHNjcmVlbjogdHJ1ZVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGxldCBsaW5rID0gYC4uL3BsYXllcj9zcmM9JHt0YXJnZXR9YFxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ2RiJylcclxuICAgICAgICBsaW5rICs9IGAmZGI9JHtfZGF0YS51aWR9YFxyXG4gICAgY29uc3QgcGxheWVyV2luZG93ID0gd2luZG93Lm9wZW4obGluaywgJ1BsYXllcicpO1xyXG5cclxuICAgIGlmICghcGxheWVyV2luZG93KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0LrRgNGL0YLRjCDQvtC60L3Qvi4g0JLQvtC30LzQvtC20L3Qviwg0LHRgNCw0YPQt9C10YAg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC7IHBvcC11cC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7QstGC0L7RgNC90YvRhSDQv9C+0L/Ri9GC0L7QuiDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoYXR0ZW1wdCA9IDApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L3QtSDQt9Cw0LrRgNGL0YLQviDQu9C4INC+0LrQvdC+XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyV2luZG93LmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0LrQvdC+INC/0LvQtdC10YDQsCDQsdGL0LvQviDQt9Cw0LrRgNGL0YLQvicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GL0YLQsNC10LzRgdGPINC+0YLQv9GA0LDQstC40YLRjCDQtNCw0L3QvdGL0LVcclxuICAgICAgICAgICAgICAgIHBsYXllcldpbmRvdy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lOSVRfREFUQScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSwgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7IC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INC60L7QvdC60YDQtdGC0L3Ri9C5IG9yaWdpbiDQstC80LXRgdGC0L4gJyonXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgNSkgeyAvLyDQnNCw0LrRgdC40LzRg9C8IDUg0L/QvtC/0YvRgtC+0LpcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNlbmREYXRhKGF0dGVtcHQgKyAxKSwgNTAwICogKGF0dGVtcHQgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDQn9C10YDQstCw0Y8g0L/QvtC/0YvRgtC60LAg0L7RgtC/0YDQsNCy0LrQuCDRgSDQvdC10LHQvtC70YzRiNC+0Lkg0LfQsNC00LXRgNC20LrQvtC5XHJcbiAgICAgICAgc2V0VGltZW91dChzZW5kRGF0YSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVBc3NldChkYXRhKSB7XHJcbiAgICBpZiAoIUFwcC5zbGlkZXMuYWN0aXZlZCkge1xyXG4gICAgICAgIEFwcC50b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYNCd0LXQvtCx0YXQvtC00LjQvNC+INGB0L7Qt9C00LDRgtGMINGB0LvQsNC50LRgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChkYXRhLnNvdXJjZS50eXBlID09PSBcIm1vZGVsXCIpIHtcclxuICAgICAgICBjb25zdCB1aWQgPSAoYCR7ZGF0YS5zb3VyY2UubmFtZSB8fCBkYXRhLnNvdXJjZS51aWR9JHtEYXRlLm5vdygpfWApLnJlcGxhY2UoJy4nLCAnJylcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnNvdXJjZS5yZXNvdXJjZSlcclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IEFwcC5wcm9qZWN0LmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIk9iamVjdDNEXCIsXHJcbiAgICAgICAgICAgIHVpZCxcclxuICAgICAgICAgICAgcGFyZW50OiBkYXRhLnRhcmdldD8udWlkLFxyXG4gICAgICAgICAgICBhc3NldHM6IFt7XHJcbiAgICAgICAgICAgICAgICB1aWQ6IGRhdGEuc291cmNlLnVpZFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcGF0aHM6IFsuLi5kYXRhLnRhcmdldD8ucGF0aHMgfHwgW10sIHVpZF1cclxuICAgICAgICB9LCBkYXRhLnRhcmdldClcclxuICAgICAgICBhd2FpdCBBcHAucHJvamVjdC5zYXZlKGVsKVxyXG4gICAgICAgIEFwcC5zZWxlY3Rpb24uc2VsZWN0KGVsKVxyXG4gICAgfVxyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGFkZChlbCkge1xyXG4gICAgICAgIF9kYXRhLmNoaWxkcmVuLnB1c2goZWwpXHJcbiAgICB9LFxyXG4gICAgdWlkOiBudWxsLCBpbml0LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICAgIG5hbWU6IFwiRWRpdG9yXCJcclxuICAgIH0sXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIGxvYWQsIGZpbmRTdGF0ZXMsIGdldFN0YXRlLCByZW1vdmUsIGhhbmRsZUFzc2V0LFxyXG4gICAgY3JlYXRlRWxlbWVudCwgc2F2ZSwgZmluZCwgZmluZE9iamVjdHNCeVR5cGUsXHJcbiAgICBleHBvcnRUb0pzb24sIGltcG9ydFByb2plY3QsIHBsYXksXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgICBvbjogX2VtbWl0ZXIub24uYmluZChfZW1taXRlciksXHJcbiAgICBvZmY6IF9lbW1pdGVyLm9mZi5iaW5kKF9lbW1pdGVyKSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBjYW1lcmE6IHt9XHJcbiAgICB9XHJcbn0pXHJcblxyXG5BcHAuT24oXCJpbml0XCIsICgpID0+IHtcclxuXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkltcG9ydGVyXCIsIEltcG9ydGVyKVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJjaGFuZ2VcIiwgKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgc2xpZGUsIG91dExpc3QpXHJcbiAgICAgICAgLy9hY3RpdmF0ZXMoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLnVpZClcclxuICAgIH0pXHJcblxyXG4gICAgQXBwLnNsaWRlcy5vbihcInJlbW92ZVwiLCAodWlkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgdWlkLCBvdXRMaXN0KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkZWxldGUgb3V0TGlzdFtpXS5zdGF0ZXNbdWlkXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0JyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHRleHQ6ICdQcm9qZWN0JyxcclxuICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmNyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZpbGUtZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5vcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ09wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiT3BlbiBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMub3BlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5leHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdkb3dubG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0V4cG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJFeHBvcnQgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3QuZXhwb3J0VG9Kc29uKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3VwbG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiSW1wb3J0IHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0LmltcG9ydFByb2plY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QucmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnYmluJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjY2NDljNDIwMWI5ODA1N2Q1ZmMyXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjFcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=