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
/* harmony import */ var _components_modals_elementadd_vue__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/components/modals/elementadd.vue */ "./src/components/modals/elementadd.vue");
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
async function addElement(selected) {
    const newElementData = {}
    newElementData.uid = `Element${Date.now()}`
    newElementData.paths = []
    let parent
    if (selected && selected.isElement) {
        parent = selected
        newElementData.paths.push(...selected.paths)
    }
    newElementData.paths.push(newElementData.uid)
    newElementData.path = newElementData.paths.join('.')
    App.modal.open({
        header: {
            value: `Add element ${parent ? "to " + parent.name || 0 : " to scene"}`,
            handler: () => {
                App.modal.close()
            }
        },
        content: {
            component: "ElementAdd",
            props: {
                parent: selected,
                modelValue: newElementData
            }
        },
        footer: {
            buttons: [
                {
                    label: "Add",
                    class: "secondary",
                    handler: async () => {
                        const el = await createElement({
                            name: "New Element", type: "Group",
                            ...newElementData
                        }, parent)
                        if (!el) {
                            return
                        }
                        await save(el)
                        App.modal.close()
                    }
                },
                {
                    label: "Cancel",
                    class: "primary",
                    handler: async () => {
                        App.modal.close()
                    }
                }
            ]
        }
    })
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
    addElement, createElement, save, find, findObjectsByType,
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
    window.vue.component("ElementAdd", _components_modals_elementadd_vue__WEBPACK_IMPORTED_MODULE_4__["default"])

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
/******/ 	__webpack_require__.h = () => ("90841d3632cd63ddd07c")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi41OTU1NzFkNDllYzQyOWRmMTFiZC5ob3QtdXBkYXRlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQXFDO0FBQ1g7QUFDTTtBQUNoQyxZQUFZLG1EQUFjLElBQUksd0NBQU07QUFDcEMsQ0FBNkM7QUFDN0MscUJBQXFCLHdEQUFZO0FBQ2pDLENBQTJEO0FBQzNEO0FBQ3VEO0FBQ3ZEO0FBQ3NDO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esb0JBQW9CLHdCQUF3QjtBQUM1QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0NBQXdDLFFBQVE7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFdBQVc7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MsZ0NBQWdDLENBQVUsZUFBZTtBQUMzRjtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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SztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxDQUFDO0FBQ0Q7QUFDQTtBQUNBLGlFQUFlLEs7Ozs7Ozs7O1VDeGtCZixzRDs7Ozs7VUNBQSxzREFBc0Qsa0JBQWtCO1VBQ3hFO1VBQ0E7VUFDQSxnQkFBZ0Isc0VBQXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvYXBwL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIHdhdGNoIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgSURCIGZyb20gXCJAL2lkYi5qc1wiXHJcbmltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCBFdmVudEVtbWl0ZXIgZnJvbSBcIi4uL2V2ZW50ZW1pdHRlci5qc1wiXHJcbmNvbnN0IF9lbW1pdGVyID0gbmV3IEV2ZW50RW1taXRlcigpXHJcbmltcG9ydCBFbGVtZW50QWRkIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2VsZW1lbnRhZGQudnVlXCJcclxuXHJcbmltcG9ydCBJbXBvcnRlciBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFscy9pbXBvcnRlci52dWVcIlxyXG5cclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxubGV0IF9mYWN0b3J5XHJcblxyXG5mdW5jdGlvbiBpbml0KHByb2plY3REYXRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3REYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IHByb2plY3REYXRhW2ldXHJcbiAgICAgICAgX2RhdGEuZGF0YVt2LnVpZF0gPSB2XHJcbiAgICB9XHJcbiAgICBfZGF0YS5pbmZvID0gX2RhdGEuZGF0YVsnaW5mbyddIHx8IHtcclxuICAgICAgICBuYW1lOiBcIkVkaXRvclwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWQobW9kZWxzRGF0YSkge1xyXG4gICAgX2ZhY3RvcnkgPSBBcHAuZW5naW5lLmdldEZhY3RvcnkoKVxyXG4gICAgY29uc3QgcGFyc2VkID0ge31cclxuICAgIGZvciAobGV0IGkgPSBtb2RlbHNEYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWxEYXRhID0gbW9kZWxzRGF0YVtpXVxyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgYnVpbGQobW9kZWxzRGF0YSwgbW9kZWxEYXRhLCBwYXJzZWQpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBtb2RlbHNEYXRhLmZpbmRJbmRleChzID0+IHMudWlkID09PSBlbC51aWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgbW9kZWxzRGF0YS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGUoZWxlbWVudCwgc2xpZGUpIHtcclxuICAgIGlmICghZWxlbWVudC5zdGF0ZXNbc2xpZGVdKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdGF0ZXNbc2xpZGVdID0ge1xyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBfZW1taXRlci5lbWl0KCdzdGF0ZWFkZCcsIHNsaWRlLCBlbGVtZW50LnBhdGhzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQuc3RhdGVzW3NsaWRlXVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWlsZChsaXN0LCBkYXRhLCBwYXJzZWQpIHtcclxuICAgIGlmICghZGF0YSlcclxuICAgICAgICByZXR1cm5cclxuICAgIGlmIChwYXJzZWRbZGF0YS51aWRdKVxyXG4gICAgICAgIHJldHVybiBwYXJzZWRbZGF0YS51aWRdXHJcbiAgICBjb25zdCBwYXJlbnRJZCA9IGRhdGEucGFyZW50XHJcbiAgICBsZXQgcGFyZW50ID0gcGFyc2VkW3BhcmVudElkXVxyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBhd2FpdCBidWlsZChsaXN0LCBsaXN0LmZpbmQobCA9PiBsLnVpZCA9PT0gcGFyZW50SWQpLCBwYXJzZWQpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgY3JlYXRlRWxlbWVudChkYXRhLCBwYXJlbnQpXHJcbiAgICAgICAgcGFyc2VkW2VsLnVpZF0gPSBlbFxyXG4gICAgICAgIHJldHVybiBlbFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQn9C+0LrQsNC30YvQstCw0LXRgtGB0Y8g0YTQvtGA0LzQsCDQstGL0LHQvtGA0LAg0YLQuNC/0LAg0Y3Qu9C10LzQtdC90YLQsFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gYWRkRWxlbWVudChzZWxlY3RlZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudERhdGEgPSB7fVxyXG4gICAgbmV3RWxlbWVudERhdGEudWlkID0gYEVsZW1lbnQke0RhdGUubm93KCl9YFxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aHMgPSBbXVxyXG4gICAgbGV0IHBhcmVudFxyXG4gICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmlzRWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IHNlbGVjdGVkXHJcbiAgICAgICAgbmV3RWxlbWVudERhdGEucGF0aHMucHVzaCguLi5zZWxlY3RlZC5wYXRocylcclxuICAgIH1cclxuICAgIG5ld0VsZW1lbnREYXRhLnBhdGhzLnB1c2gobmV3RWxlbWVudERhdGEudWlkKVxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aCA9IG5ld0VsZW1lbnREYXRhLnBhdGhzLmpvaW4oJy4nKVxyXG4gICAgQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYEFkZCBlbGVtZW50ICR7cGFyZW50ID8gXCJ0byBcIiArIHBhcmVudC5uYW1lIHx8IHBhcmVudC51aWQgOiBcIiB0byBzY2VuZVwifWAsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkVsZW1lbnRBZGRcIixcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBuZXdFbGVtZW50RGF0YVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBjcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwiTmV3IEVsZW1lbnRcIiwgdHlwZTogXCJHcm91cFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4ubmV3RWxlbWVudERhdGFcclxuICAgICAgICAgICAgICAgICAgICAgICAgfSwgcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm5cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzYXZlKGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGRhdGEsIHBhcmVudCkge1xyXG4gICAgY29uc3QgZWwgPSBhd2FpdCBfZmFjdG9yeS5CdWlsZEVsZW1lbnQoZGF0YSwgcGFyZW50IHx8IEFwcC5lbmdpbmUuZ2V0TWFuYWdlcigpLlJvb3QpXHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBlbC5uYW1lID0gZGF0YS5uYW1lIHx8IGRhdGEudWlkXHJcbiAgICBlbC5zdGF0ZXMgPSBkYXRhLnN0YXRlcyB8fCB7fVxyXG4gICAgZWwucHJvcGVydGllcyA9IGRhdGEucHJvcGVydGllcyB8fCB7fVxyXG4gICAgZWwuYWN0aW9ucyA9IGRhdGEuYWN0aW9ucyB8fCBbXVxyXG4gICAgZWwucGF0aHMgPSBkYXRhLnBhdGhzID8/IGVsLnBhdGhzXHJcbiAgICBlbC5wYXRoID0gZWwucGF0aHMuam9pbignLicpXHJcbiAgICBjb25zdCBlbGVtZW50ID0gcmVhY3RpdmUoZWwpXHJcbiAgICBjb25zdCBwID0gcGFyZW50IHx8IF9kYXRhXHJcbiAgICBwLmFkZChlbGVtZW50KS8v0JTQvtCx0LDQstC70LXQvdC40LUg0LIgRGF0YVxyXG4gICAgX2VtbWl0ZXIuZW1pdCgnY3JlYXRlJywgZWxlbWVudClcclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZShwYXRocykge1xyXG4gICAgbGV0IHBhcmVudCA9IF9kYXRhXHJcbiAgICBsZXQgdGFyZ2V0ID0gX2RhdGFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJlbnQgPSB0YXJnZXRcclxuICAgICAgICB0YXJnZXQgPSBwYXJlbnQuY2hpbGRyZW4uZmluZChlbCA9PiBlbC51aWQgPT09IHBhdGhzW2ldKVxyXG4gICAgfVxyXG4gICAgaWYgKEFwcC5zZWxlY3Rpb24uc2VsZWN0ZWQgPT09IHRhcmdldCkge1xyXG4gICAgICAgIEFwcC5zZWxlY3Rpb24uc2VsZWN0KG51bGwpXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5maW5kSW5kZXgodCA9PiB0ID09PSB0YXJnZXQpXHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGFyZ2V0LmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZShjaGlsZC5wYXRocylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGlmICh0YXJnZXQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQucmVtb3ZlKHRhcmdldClcclxuICAgICAgICB9XHJcbiAgICAgICAgSURCLmRlbGV0ZUl0ZW0oXCJtb2RlbHNcIiwgdGFyZ2V0LnVpZClcclxuICAgICAgICBfZmFjdG9yeS5SZW1vdmVNb2RlbCh0YXJnZXQudWlkKVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoXCJyZW1vdmVcIiwgcGF0aHMsIHRhcmdldClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZChwYXRocykge1xyXG4gICAgbGV0IHRhcmdldCA9IF9kYXRhXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmNoaWxkcmVuLmZpbmQoYyA9PiBjLnVpZCA9PT0gcGF0aHNbaV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRPYmplY3RzQnlUeXBlKHR5cGUpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHR5cGUpIHsgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0L7QsdGK0LXQutGCINGN0LrQt9C10LzQv9C70Y/RgNC+0Lwg0YPQutCw0LfQsNC90L3QvtCz0L4g0YLQuNC/0LBcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHRyYXZlcnNlKGNoaWxkKSk7IC8vINCg0LXQutGD0YDRgdC40LLQvdC+INC+0LHRhdC+0LTQuNC8INC00LXRgtC10LlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhdmVyc2UoX2RhdGEpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShtb2RlbCkge1xyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBJREIudXBzZXJ0SXRlbVByb3BlcnRpZXMoXCJtb2RlbHNcIiwgbW9kZWwudWlkLCBKU09OLnBhcnNlKHN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWU6IG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgIHBhdGhzOiBtb2RlbC5wYXRocyxcclxuICAgICAgICAgICAgcGF0aDogbW9kZWwucGF0aHMuam9pbignLicpLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IG1vZGVsLnBhcmVudD8udWlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IG1vZGVsLmFjdGlvbnMgfHwgW10sXHJcbiAgICAgICAgICAgIHByb3BzOiBtb2RlbC5wcm9wcyB8fCB7fSxcclxuICAgICAgICAgICAgLy9hcmdzOm1vZGVsLmFyZ3MgfHwge30sXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IG1vZGVsLnByb3BlcnRpZXMgfHwge30sXHJcbiAgICAgICAgICAgIHN0YXRlczogbW9kZWwuc3RhdGVzLFxyXG4gICAgICAgICAgICB0eXBlOiBtb2RlbC50eXBlLFxyXG4gICAgICAgICAgICB1aWQ6IG1vZGVsLnVpZCxcclxuICAgICAgICAgICAgYXNzZXRzOiBtb2RlbC5hc3NldHMgfHwgW11cclxuICAgICAgICB9KSkpXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdChsaXN0LCBzbGlkZSwgb3V0bGlzdCA9IFtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBlbCA9IGxpc3RbaV1cclxuICAgICAgICBpZiAoZWwuaXNFbGVtZW50ICYmIGVsLnN0YXRlc1tzbGlkZV0pIHtcclxuICAgICAgICAgICAgb3V0bGlzdC5wdXNoKGVsKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlbC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBjaGlsZFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3QoZWwuY2hpbGRyZW4sIHNsaWRlLCBvdXRsaXN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFN0YXRlcyhzbGlkZVVJRCkge1xyXG4gICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICBjb2xsZWN0KF9kYXRhLmNoaWxkcmVuLCBzbGlkZVVJRCwgb3V0TGlzdClcclxuICAgIHJldHVybiBvdXRMaXN0XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4cG9ydFRvSnNvbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9kYXRhLnVpZClcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBgcHJvamVjdCR7X2RhdGEudWlkfS5qc29uYDtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xyXG4gICAgICAgIGEuc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XHJcbiAgICAgICAgYS5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRQcm9qZWN0KCkge1xyXG4gICAgLyoqXHJcbiAqINCk0YPQvdC60YbQuNGPINC00LvRjyDQvtGC0LrRgNGL0YLQuNGPINC00LjQsNC70L7Qs9CwINCy0YvQsdC+0YDQsCDRhNCw0LnQu9CwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY2NlcHQgLSDQotC40L/RiyDRhNCw0LnQu9C+0LIg0LTQu9GPINCy0YvQsdC+0YDQsCAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gLmpzb24pXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGU+fSBQcm9taXNlINGBINCy0YvQsdGA0LDQvdC90YvQvCDRhNCw0LnQu9C+0LxcclxuICovXHJcbiAgICBmdW5jdGlvbiBvcGVuRmlsZURpYWxvZyhhY2NlcHQgPSAnLmpzb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC90LXQstC40LTQuNC80YvQuSBpbnB1dCDRjdC70LXQvNC10L3RglxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICAgICAgICAgIGlucHV0LmFjY2VwdCA9IGFjY2VwdDtcclxuICAgICAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDQstGL0LHQvtGAINGE0LDQudC70LBcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10LwgaW5wdXQg0LIgRE9NINC4INGC0YDQuNCz0LPQtdGA0LjQvCDQutC70LjQulxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCk0YPQvdC60YbQuNGPINC00LvRjyDRh9GC0LXQvdC40Y8g0Lgg0L/QsNGA0YHQuNC90LPQsCBKU09OINGE0LDQudC70LBcclxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtINCe0LHRitC10LrRgiDRhNCw0LnQu9CwXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBQcm9taXNlINGBINGA0LDRgdC/0LDRgNGB0LXQvdC90YvQvNC4INC00LDQvdC90YvQvNC4IEpTT05cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcGFyc2VKc29uRmlsZShmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0YEg0YDQsNGB0YjQuNGA0LXQvdC40LXQvCAuanNvbicpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQntGI0LjQsdC60LAg0L/QsNGA0YHQuNC90LPQsCBKU09OOiAnICsgZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQntGI0LjQsdC60LAg0YfRgtC10L3QuNGPINGE0LDQudC70LAnKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBvcGVuRmlsZURpYWxvZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcGFyc2VKc29uRmlsZShmaWxlKTtcclxuICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2VcclxuICAgICAgICBjb25zdCBpbXBvcnRMaXN0ID0gcmVhY3RpdmUoe1xyXG4gICAgICAgICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgICAgICAgYXNzZXRzOiB7fSxcclxuICAgICAgICAgICAgZWxlbWVudHM6IHt9LFxyXG4gICAgICAgICAgICBzbGlkZXM6IHt9LFxyXG4gICAgICAgICAgICBtb2R1bGVzOiB7fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFjdGlvbnNcIiwganNvbkRhdGEuYWN0aW9ucylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhc3NldHNcIiwganNvbkRhdGEuYXNzZXRzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBqc29uRGF0YS5tb2RlbHMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwic2xpZGVzXCIsIGpzb25EYXRhLnNsaWRlcylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2R1bGVzXCIsIGpzb25EYXRhLm1vZHVsZXMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBqc29uRGF0YS5wcm9qZWN0KVxyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIC8vdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLypBcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGDQmNC80L/QvtGA0YJgLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJJbXBvcnRlclwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBqc29uRGF0YVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IHYubWVyZ2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWxpc3Q6IChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRMaXN0W2tdID0gbGlzdFtrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQmNC80L/QvtGA0YJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFjdGlvbnNcIiwganNvbkRhdGEuYWN0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBqc29uRGF0YS5hc3NldHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2RlbHNcIiwganNvbkRhdGEubW9kZWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwic2xpZGVzXCIsIGpzb25EYXRhLnNsaWRlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInByb2plY3RcIiwganNvbkRhdGEucHJvamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgncHJvamVjdCcsIHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCe0YLQvNC10L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSovXHJcblxyXG4gICAgICAgIC8qY29uc3Qga2V5ID0gYHByb2plY3Qke0RhdGUubm93KCl9YFxyXG5cclxuICAgICAgICBhd2FpdCBJREIuSW5pdChrZXksIFtcInByb2plY3RzXCIsIFwiYXNzZXRzXCIsIFwiZWxlbWVudHNcIiwgXCJzbGlkZXNcIiwgXCJhY3Rpb25zXCIsIFwibW9kdWxlc1wiXSwgXCJ1aWRcIilcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5hc3NldHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5hc3NldHNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJhc3NldHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuZWxlbWVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5lbGVtZW50c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImVsZW1lbnRzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLnNsaWRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLnNsaWRlc1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcInNsaWRlc1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsDonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGxheSh0YXJnZXQgPSAnZGF0YScpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9kYXRhLnVpZClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBkYXRhLnByb2plY3QgPSB7XHJcbiAgICAgICAgdWk6IHtcclxuICAgICAgICAgICAgc2xpZGVzOiB0cnVlLFxyXG4gICAgICAgICAgICBmdWxsc2NyZWVuOiB0cnVlXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgbGV0IGxpbmsgPSBgLi4vcGxheWVyP3NyYz0ke3RhcmdldH1gXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGInKVxyXG4gICAgICAgIGxpbmsgKz0gYCZkYj0ke19kYXRhLnVpZH1gXHJcbiAgICBjb25zdCBwbGF5ZXJXaW5kb3cgPSB3aW5kb3cub3BlbihsaW5rLCAnUGxheWVyJyk7XHJcblxyXG4gICAgaWYgKCFwbGF5ZXJXaW5kb3cpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC+0YLQutGA0YvRgtGMINC+0LrQvdC+LiDQktC+0LfQvNC+0LbQvdC+LCDQsdGA0LDRg9C30LXRgCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0LsgcG9wLXVwLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGF0YScpIHtcclxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtCy0YLQvtGA0L3Ri9GFINC/0L7Qv9GL0YLQvtC6INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChhdHRlbXB0ID0gMCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdC1INC30LDQutGA0YvRgtC+INC70Lgg0L7QutC90L5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJXaW5kb3cuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7QutC90L4g0L/Qu9C10LXRgNCwINCx0YvQu9C+INC30LDQutGA0YvRgtC+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YvRgtCw0LXQvNGB0Y8g0L7RgtC/0YDQsNCy0LjRgtGMINC00LDQvdC90YvQtVxyXG4gICAgICAgICAgICAgICAgcGxheWVyV2luZG93LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU5JVF9EQVRBJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTsgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQvtC90LrRgNC10YLQvdGL0Lkgb3JpZ2luINCy0LzQtdGB0YLQviAnKidcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQtNCw0L3QvdGL0YU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPCA1KSB7IC8vINCc0LDQutGB0LjQvNGD0LwgNSDQv9C+0L/Ri9GC0L7QulxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2VuZERhdGEoYXR0ZW1wdCArIDEpLCA1MDAgKiAoYXR0ZW1wdCArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vINCf0LXRgNCy0LDRjyDQv9C+0L/Ri9GC0LrQsCDQvtGC0L/RgNCw0LLQutC4INGBINC90LXQsdC+0LvRjNGI0L7QuSDQt9Cw0LTQtdGA0LbQutC+0LlcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbmREYXRhLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFzc2V0KGRhdGEpIHtcclxuICAgIGlmICghQXBwLnNsaWRlcy5hY3RpdmVkKSB7XHJcbiAgICAgICAgQXBwLnRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg0J3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtC30LTQsNGC0Ywg0YHQu9Cw0LnQtGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc291cmNlLnR5cGUgPT09IFwibW9kZWxcIikge1xyXG4gICAgICAgIGNvbnN0IHVpZCA9IChgJHtkYXRhLnNvdXJjZS5uYW1lIHx8IGRhdGEuc291cmNlLnVpZH0ke0RhdGUubm93KCl9YCkucmVwbGFjZSgnLicsICcnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc291cmNlLnJlc291cmNlKVxyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgQXBwLnByb2plY3QuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiT2JqZWN0M0RcIixcclxuICAgICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGRhdGEudGFyZ2V0Py51aWQsXHJcbiAgICAgICAgICAgIGFzc2V0czogW3tcclxuICAgICAgICAgICAgICAgIHVpZDogZGF0YS5zb3VyY2UudWlkXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwYXRoczogWy4uLmRhdGEudGFyZ2V0Py5wYXRocyB8fCBbXSwgdWlkXVxyXG4gICAgICAgIH0sIGRhdGEudGFyZ2V0KVxyXG4gICAgICAgIGF3YWl0IEFwcC5wcm9qZWN0LnNhdmUoZWwpXHJcbiAgICAgICAgQXBwLnNlbGVjdGlvbi5zZWxlY3QoZWwpXHJcbiAgICB9XHJcbn1cclxuXHJcbmNvbnN0IF9kYXRhID0gcmVhY3RpdmUoe1xyXG4gICAgYWRkKGVsKSB7XHJcbiAgICAgICAgX2RhdGEuY2hpbGRyZW4ucHVzaChlbClcclxuICAgIH0sXHJcbiAgICB1aWQ6IG51bGwsIGluaXQsXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbmFtZTogXCJFZGl0b3JcIlxyXG4gICAgfSxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbG9hZCwgZmluZFN0YXRlcywgZ2V0U3RhdGUsIHJlbW92ZSwgaGFuZGxlQXNzZXQsXHJcbiAgICBhZGRFbGVtZW50LCBjcmVhdGVFbGVtZW50LCBzYXZlLCBmaW5kLCBmaW5kT2JqZWN0c0J5VHlwZSxcclxuICAgIGV4cG9ydFRvSnNvbiwgaW1wb3J0UHJvamVjdCwgcGxheSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG9uOiBfZW1taXRlci5vbi5iaW5kKF9lbW1pdGVyKSxcclxuICAgIG9mZjogX2VtbWl0ZXIub2ZmLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGNhbWVyYToge31cclxuICAgIH1cclxufSlcclxuXHJcbkFwcC5PbihcImluaXRcIiwgKCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiSW1wb3J0ZXJcIiwgSW1wb3J0ZXIpXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkVsZW1lbnRBZGRcIiwgRWxlbWVudEFkZClcclxuXHJcbiAgICBBcHAuc2xpZGVzLm9uKFwiY2hhbmdlXCIsIChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLCBvdXRMaXN0KVxyXG4gICAgICAgIC8vYWN0aXZhdGVzKF9kYXRhLmNoaWxkcmVuLCBzbGlkZS51aWQpXHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJyZW1vdmVcIiwgKHVpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHVpZCwgb3V0TGlzdClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGVsZXRlIG91dExpc3RbaV0uc3RhdGVzW3VpZF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5tZW51LmFkZE1lbnUoJ2FwcCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdCcsXHJcbiAgICAgICAgICAgIGljb246ICcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnUHJvamVjdCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5jcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmaWxlLWVtcHR5JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3Qub3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdPcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIk9wZW4gcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLm9wZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuZXhwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZG93bmxvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFeHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiRXhwb3J0IHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0LmV4cG9ydFRvSnNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5pbXBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbXBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIkltcG9ydCBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdC5pbXBvcnRQcm9qZWN0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LnJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2JpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI5MDg0MWQzNjMyY2Q2M2RkZDA3Y1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIxXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9