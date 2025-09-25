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
    const newElementData = {
        name: "New Element", type: "Group"
    }
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
            value: `Add ${parent ? " child element to " + parent.name || 0 : " new element to scene"}`,
            handler: () => {
                App.modal.close()
            }
        },
        content: {
            component: "ElementAdd",
            props: {
                parent: selected,
                modelValue: newElementData
            },
            events: {
                'update:modelValue': (val) => {
                    Object.keys(val).forEach(k => {
                        newElementData[k] = val[k]
                    })
                }
            }
        },
        footer: {
            buttons: [
                {
                    label: "Add",
                    class: "secondary",
                    handler: async () => {
                        const el = await createElement(newElementData, parent)
                        if (el) {
                            await save(el)
                        }
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
/******/ 	__webpack_require__.h = () => ("768399c19024633dd9be")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QkFBd0Isb0JBQW9CO0FBQzVDO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRDtBQUNBO0FBQ0EsaUVBQWUsSzs7Ozs7Ozs7VUM3a0JmLHNEOzs7OztVQ0FBLHNEQUFzRCxrQkFBa0I7VUFDeEU7VUFDQTtVQUNBLGdCQUFnQixzRUFBc0UsZ0JBQWdCO1VBQ3RHO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDLGNBQWM7VUFDMUU7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEM7VUFDNUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSwwREFBMEQ7VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9hcHAvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgd2F0Y2ggfSBmcm9tICd2dWUnXHJcbmltcG9ydCBJREIgZnJvbSBcIkAvaWRiLmpzXCJcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IEV2ZW50RW1taXRlciBmcm9tIFwiLi4vZXZlbnRlbWl0dGVyLmpzXCJcclxuY29uc3QgX2VtbWl0ZXIgPSBuZXcgRXZlbnRFbW1pdGVyKClcclxuaW1wb3J0IEVsZW1lbnRBZGQgZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbHMvZWxlbWVudGFkZC52dWVcIlxyXG5cclxuaW1wb3J0IEltcG9ydGVyIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2ltcG9ydGVyLnZ1ZVwiXHJcblxyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwiQC90b29scy5qc1wiXHJcblxyXG5sZXQgX2ZhY3RvcnlcclxuXHJcbmZ1bmN0aW9uIGluaXQocHJvamVjdERhdGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2ID0gcHJvamVjdERhdGFbaV1cclxuICAgICAgICBfZGF0YS5kYXRhW3YudWlkXSA9IHZcclxuICAgIH1cclxuICAgIF9kYXRhLmluZm8gPSBfZGF0YS5kYXRhWydpbmZvJ10gfHwge1xyXG4gICAgICAgIG5hbWU6IFwiRWRpdG9yXCJcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZChtb2RlbHNEYXRhKSB7XHJcbiAgICBfZmFjdG9yeSA9IEFwcC5lbmdpbmUuZ2V0RmFjdG9yeSgpXHJcbiAgICBjb25zdCBwYXJzZWQgPSB7fVxyXG4gICAgZm9yIChsZXQgaSA9IG1vZGVsc0RhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBtb2RlbERhdGEgPSBtb2RlbHNEYXRhW2ldXHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBidWlsZChtb2RlbHNEYXRhLCBtb2RlbERhdGEsIHBhcnNlZClcclxuICAgICAgICBjb25zdCBpbmRleCA9IG1vZGVsc0RhdGEuZmluZEluZGV4KHMgPT4gcy51aWQgPT09IGVsLnVpZClcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBtb2RlbHNEYXRhLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZShlbGVtZW50LCBzbGlkZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LnN0YXRlc1tzbGlkZV0pIHtcclxuICAgICAgICBlbGVtZW50LnN0YXRlc1tzbGlkZV0gPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoJ3N0YXRlYWRkJywgc2xpZGUsIGVsZW1lbnQucGF0aHMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudC5zdGF0ZXNbc2xpZGVdXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkKGxpc3QsIGRhdGEsIHBhcnNlZCkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgaWYgKHBhcnNlZFtkYXRhLnVpZF0pXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFtkYXRhLnVpZF1cclxuICAgIGNvbnN0IHBhcmVudElkID0gZGF0YS5wYXJlbnRcclxuICAgIGxldCBwYXJlbnQgPSBwYXJzZWRbcGFyZW50SWRdXHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IGF3YWl0IGJ1aWxkKGxpc3QsIGxpc3QuZmluZChsID0+IGwudWlkID09PSBwYXJlbnRJZCksIHBhcnNlZClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBjcmVhdGVFbGVtZW50KGRhdGEsIHBhcmVudClcclxuICAgICAgICBwYXJzZWRbZWwudWlkXSA9IGVsXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqINCf0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyDRhNC+0YDQvNCwINCy0YvQsdC+0YDQsCDRgtC40L/QsCDRjdC70LXQvNC10L3RgtCwXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBhZGRFbGVtZW50KHNlbGVjdGVkKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50RGF0YSA9IHtcclxuICAgICAgICBuYW1lOiBcIk5ldyBFbGVtZW50XCIsIHR5cGU6IFwiR3JvdXBcIlxyXG4gICAgfVxyXG4gICAgbmV3RWxlbWVudERhdGEudWlkID0gYEVsZW1lbnQke0RhdGUubm93KCl9YFxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aHMgPSBbXVxyXG4gICAgbGV0IHBhcmVudFxyXG4gICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmlzRWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IHNlbGVjdGVkXHJcbiAgICAgICAgbmV3RWxlbWVudERhdGEucGF0aHMucHVzaCguLi5zZWxlY3RlZC5wYXRocylcclxuICAgIH1cclxuICAgIG5ld0VsZW1lbnREYXRhLnBhdGhzLnB1c2gobmV3RWxlbWVudERhdGEudWlkKVxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aCA9IG5ld0VsZW1lbnREYXRhLnBhdGhzLmpvaW4oJy4nKVxyXG4gICAgQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYEFkZCAke3BhcmVudCA/IFwiIGNoaWxkIGVsZW1lbnQgdG8gXCIgKyBwYXJlbnQubmFtZSB8fCBwYXJlbnQudWlkIDogXCIgbmV3IGVsZW1lbnQgdG8gc2NlbmVcIn1gLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJFbGVtZW50QWRkXCIsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogbmV3RWxlbWVudERhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAndXBkYXRlOm1vZGVsVmFsdWUnOiAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50RGF0YVtrXSA9IHZhbFtrXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudERhdGEsIHBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzYXZlKGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZGF0YSwgcGFyZW50KSB7XHJcbiAgICBjb25zdCBlbCA9IGF3YWl0IF9mYWN0b3J5LkJ1aWxkRWxlbWVudChkYXRhLCBwYXJlbnQgfHwgQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuUm9vdClcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGVsLm5hbWUgPSBkYXRhLm5hbWUgfHwgZGF0YS51aWRcclxuICAgIGVsLnN0YXRlcyA9IGRhdGEuc3RhdGVzIHx8IHt9XHJcbiAgICBlbC5wcm9wZXJ0aWVzID0gZGF0YS5wcm9wZXJ0aWVzIHx8IHt9XHJcbiAgICBlbC5hY3Rpb25zID0gZGF0YS5hY3Rpb25zIHx8IFtdXHJcbiAgICBlbC5wYXRocyA9IGRhdGEucGF0aHMgPz8gZWwucGF0aHNcclxuICAgIGVsLnBhdGggPSBlbC5wYXRocy5qb2luKCcuJylcclxuICAgIGNvbnN0IGVsZW1lbnQgPSByZWFjdGl2ZShlbClcclxuICAgIGNvbnN0IHAgPSBwYXJlbnQgfHwgX2RhdGFcclxuICAgIHAuYWRkKGVsZW1lbnQpLy/QlNC+0LHQsNCy0LvQtdC90LjQtSDQsiBEYXRhXHJcbiAgICBfZW1taXRlci5lbWl0KCdjcmVhdGUnLCBlbGVtZW50KVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKHBhdGhzKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gX2RhdGFcclxuICAgIGxldCB0YXJnZXQgPSBfZGF0YVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBhcmVudCA9IHRhcmdldFxyXG4gICAgICAgIHRhcmdldCA9IHBhcmVudC5jaGlsZHJlbi5maW5kKGVsID0+IGVsLnVpZCA9PT0gcGF0aHNbaV0pXHJcbiAgICB9XHJcbiAgICBpZiAoQXBwLnNlbGVjdGlvbi5zZWxlY3RlZCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgQXBwLnNlbGVjdGlvbi5zZWxlY3QobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmZpbmRJbmRleCh0ID0+IHQgPT09IHRhcmdldClcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0YXJnZXQuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKGNoaWxkLmlzRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlKGNoaWxkLnBhdGhzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgaWYgKHRhcmdldC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudC5yZW1vdmUodGFyZ2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBJREIuZGVsZXRlSXRlbShcIm1vZGVsc1wiLCB0YXJnZXQudWlkKVxyXG4gICAgICAgIF9mYWN0b3J5LlJlbW92ZU1vZGVsKHRhcmdldC51aWQpXHJcbiAgICAgICAgX2VtbWl0ZXIuZW1pdChcInJlbW92ZVwiLCBwYXRocywgdGFyZ2V0KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kKHBhdGhzKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gX2RhdGFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuY2hpbGRyZW4uZmluZChjID0+IGMudWlkID09PSBwYXRoc1tpXSlcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXRcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZE9iamVjdHNCeVR5cGUodHlwZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgdHlwZSkgeyAvLyDQn9GA0L7QstC10YDRj9C10LwsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQvtCx0YrQtdC60YIg0Y3QutC30LXQvNC/0LvRj9GA0L7QvCDRg9C60LDQt9Cw0L3QvdC+0LPQviDRgtC40L/QsFxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gdHJhdmVyc2UoY2hpbGQpKTsgLy8g0KDQtdC60YPRgNGB0LjQstC90L4g0L7QsdGF0L7QtNC40Lwg0LTQtdGC0LXQuVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmF2ZXJzZShfZGF0YSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKG1vZGVsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcIm1vZGVsc1wiLCBtb2RlbC51aWQsIEpTT04ucGFyc2Uoc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgcGF0aHM6IG1vZGVsLnBhdGhzLFxyXG4gICAgICAgICAgICBwYXRoOiBtb2RlbC5wYXRocy5qb2luKCcuJyksXHJcbiAgICAgICAgICAgIHBhcmVudDogbW9kZWwucGFyZW50Py51aWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uczogbW9kZWwuYWN0aW9ucyB8fCBbXSxcclxuICAgICAgICAgICAgcHJvcHM6IG1vZGVsLnByb3BzIHx8IHt9LFxyXG4gICAgICAgICAgICAvL2FyZ3M6bW9kZWwuYXJncyB8fCB7fSxcclxuICAgICAgICAgICAgcHJvcGVydGllczogbW9kZWwucHJvcGVydGllcyB8fCB7fSxcclxuICAgICAgICAgICAgc3RhdGVzOiBtb2RlbC5zdGF0ZXMsXHJcbiAgICAgICAgICAgIHR5cGU6IG1vZGVsLnR5cGUsXHJcbiAgICAgICAgICAgIHVpZDogbW9kZWwudWlkLFxyXG4gICAgICAgICAgICBhc3NldHM6IG1vZGVsLmFzc2V0cyB8fCBbXVxyXG4gICAgICAgIH0pKSlcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0KGxpc3QsIHNsaWRlLCBvdXRsaXN0ID0gW10pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbGlzdFtpXVxyXG4gICAgICAgIGlmIChlbC5pc0VsZW1lbnQgJiYgZWwuc3RhdGVzW3NsaWRlXSkge1xyXG4gICAgICAgICAgICBvdXRsaXN0LnB1c2goZWwpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVsLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29sbGVjdChlbC5jaGlsZHJlbiwgc2xpZGUsIG91dGxpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU3RhdGVzKHNsaWRlVUlEKSB7XHJcbiAgICBjb25zdCBvdXRMaXN0ID0gW11cclxuICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlVUlELCBvdXRMaXN0KVxyXG4gICAgcmV0dXJuIG91dExpc3RcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Kc29uKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShkYXRhKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGBwcm9qZWN0JHtfZGF0YS51aWR9Lmpzb25gO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgYS5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxuICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltcG9ydFByb2plY3QoKSB7XHJcbiAgICAvKipcclxuICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0LTQuNCw0LvQvtCz0LAg0LLRi9Cx0L7RgNCwINGE0LDQudC70LBcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjY2VwdCAtINCi0LjQv9GLINGE0LDQudC70L7QsiDQtNC70Y8g0LLRi9Cx0L7RgNCwICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAuanNvbilcclxuICogQHJldHVybnMge1Byb21pc2U8RmlsZT59IFByb21pc2Ug0YEg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LDQudC70L7QvFxyXG4gKi9cclxuICAgIGZ1bmN0aW9uIG9wZW5GaWxlRGlhbG9nKGFjY2VwdCA9ICcuanNvbicpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L3QtdCy0LjQtNC40LzRi9C5IGlucHV0INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICAgICAgaW5wdXQuYWNjZXB0ID0gYWNjZXB0O1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INCy0YvQsdC+0YAg0YTQsNC50LvQsFxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCBpbnB1dCDQsiBET00g0Lgg0YLRgNC40LPQs9C10YDQuNC8INC60LvQuNC6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINGH0YLQtdC90LjRjyDQuCDQv9Cw0YDRgdC40L3Qs9CwIEpTT04g0YTQsNC50LvQsFxyXG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0g0J7QsdGK0LXQutGCINGE0LDQudC70LBcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IFByb21pc2Ug0YEg0YDQsNGB0L/QsNGA0YHQtdC90L3Ri9C80Lgg0LTQsNC90L3Ri9C80LggSlNPTlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUpzb25GaWxlKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aCgnLmpzb24nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuyDRgSDRgNCw0YHRiNC40YDQtdC90LjQtdC8IC5qc29uJykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9Cw0YDRgdC40L3Qs9CwIEpTT046ICcgKyBlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDRh9GC0LXQvdC40Y8g0YTQsNC50LvQsCcpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IG9wZW5GaWxlRGlhbG9nKCk7XHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBwYXJzZUpzb25GaWxlKGZpbGUpO1xyXG4gICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGltcG9ydExpc3QgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBhc3NldHM6IHt9LFxyXG4gICAgICAgICAgICBlbGVtZW50czoge30sXHJcbiAgICAgICAgICAgIHNsaWRlczoge30sXHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHt9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBqc29uRGF0YS5hc3NldHMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kZWxzXCIsIGpzb25EYXRhLm1vZGVscylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJwcm9qZWN0XCIsIGpzb25EYXRhLnByb2plY3QpXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgncHJvamVjdCcsIHByb2plY3ROYW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvKkFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYNCY0LzQv9C+0YDRgmAsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkltcG9ydGVyXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IGpzb25EYXRhXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gdi5tZXJnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlbGlzdDogKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydExpc3Rba10gPSBsaXN0W2tdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCY0LzQv9C+0YDRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBqc29uRGF0YS5tb2RlbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kdWxlc1wiLCBqc29uRGF0YS5tb2R1bGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBqc29uRGF0YS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J7RgtC80LXQvdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgLypjb25zdCBrZXkgPSBgcHJvamVjdCR7RGF0ZS5ub3coKX1gXHJcblxyXG4gICAgICAgIGF3YWl0IElEQi5Jbml0KGtleSwgW1wicHJvamVjdHNcIiwgXCJhc3NldHNcIiwgXCJlbGVtZW50c1wiLCBcInNsaWRlc1wiLCBcImFjdGlvbnNcIiwgXCJtb2R1bGVzXCJdLCBcInVpZFwiKVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLmFzc2V0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmFzc2V0c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImFzc2V0c1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5lbGVtZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmVsZW1lbnRzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwiZWxlbWVudHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuc2xpZGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuc2xpZGVzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwic2xpZGVzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbGF5KHRhcmdldCA9ICdkYXRhJykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGRhdGEucHJvamVjdCA9IHtcclxuICAgICAgICB1aToge1xyXG4gICAgICAgICAgICBzbGlkZXM6IHRydWUsXHJcbiAgICAgICAgICAgIGZ1bGxzY3JlZW46IHRydWVcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBsZXQgbGluayA9IGAuLi9wbGF5ZXI/c3JjPSR7dGFyZ2V0fWBcclxuICAgIGlmICh0YXJnZXQgPT09ICdkYicpXHJcbiAgICAgICAgbGluayArPSBgJmRiPSR7X2RhdGEudWlkfWBcclxuICAgIGNvbnN0IHBsYXllcldpbmRvdyA9IHdpbmRvdy5vcGVuKGxpbmssICdQbGF5ZXInKTtcclxuXHJcbiAgICBpZiAoIXBsYXllcldpbmRvdykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7RgtC60YDRi9GC0Ywg0L7QutC90L4uINCS0L7Qt9C80L7QttC90L4sINCx0YDQsNGD0LfQtdGAINC30LDQsdC70L7QutC40YDQvtCy0LDQuyBwb3AtdXAuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09ICdkYXRhJykge1xyXG4gICAgICAgIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQv9C+0LLRgtC+0YDQvdGL0YUg0L/QvtC/0YvRgtC+0Log0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gYXN5bmMgKGF0dGVtcHQgPSAwKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC90LUg0LfQsNC60YDRi9GC0L4g0LvQuCDQvtC60L3QvlxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcldpbmRvdy5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntC60L3QviDQv9C70LXQtdGA0LAg0LHRi9C70L4g0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/Ri9GC0LDQtdC80YHRjyDQvtGC0L/RgNCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW5kb3cucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTklUX0RBVEEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0sIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pOyAvLyDQmNGB0L/QvtC70YzQt9GD0LXQvCDQutC+0L3QutGA0LXRgtC90YvQuSBvcmlnaW4g0LLQvNC10YHRgtC+ICcqJ1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDUpIHsgLy8g0JzQsNC60YHQuNC80YPQvCA1INC/0L7Qv9GL0YLQvtC6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZW5kRGF0YShhdHRlbXB0ICsgMSksIDUwMCAqIChhdHRlbXB0ICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g0J/QtdGA0LLQsNGPINC/0L7Qv9GL0YLQutCwINC+0YLQv9GA0LDQstC60Lgg0YEg0L3QtdCx0L7Qu9GM0YjQvtC5INC30LDQtNC10YDQttC60L7QuVxyXG4gICAgICAgIHNldFRpbWVvdXQoc2VuZERhdGEsIDMwMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXNzZXQoZGF0YSkge1xyXG4gICAgaWYgKCFBcHAuc2xpZGVzLmFjdGl2ZWQpIHtcclxuICAgICAgICBBcHAudG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDQndC10L7QsdGF0L7QtNC40LzQviDRgdC+0LfQtNCw0YLRjCDRgdC70LDQudC0YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5zb3VyY2UudHlwZSA9PT0gXCJtb2RlbFwiKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gKGAke2RhdGEuc291cmNlLm5hbWUgfHwgZGF0YS5zb3VyY2UudWlkfSR7RGF0ZS5ub3coKX1gKS5yZXBsYWNlKCcuJywgJycpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5zb3VyY2UucmVzb3VyY2UpXHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBBcHAucHJvamVjdC5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdHlwZTogXCJPYmplY3QzRFwiLFxyXG4gICAgICAgICAgICB1aWQsXHJcbiAgICAgICAgICAgIHBhcmVudDogZGF0YS50YXJnZXQ/LnVpZCxcclxuICAgICAgICAgICAgYXNzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgdWlkOiBkYXRhLnNvdXJjZS51aWRcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHBhdGhzOiBbLi4uZGF0YS50YXJnZXQ/LnBhdGhzIHx8IFtdLCB1aWRdXHJcbiAgICAgICAgfSwgZGF0YS50YXJnZXQpXHJcbiAgICAgICAgYXdhaXQgQXBwLnByb2plY3Quc2F2ZShlbClcclxuICAgICAgICBBcHAuc2VsZWN0aW9uLnNlbGVjdChlbClcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgX2RhdGEgPSByZWFjdGl2ZSh7XHJcbiAgICBhZGQoZWwpIHtcclxuICAgICAgICBfZGF0YS5jaGlsZHJlbi5wdXNoKGVsKVxyXG4gICAgfSxcclxuICAgIHVpZDogbnVsbCwgaW5pdCxcclxuICAgIGluZm86IHtcclxuICAgICAgICBuYW1lOiBcIkVkaXRvclwiXHJcbiAgICB9LFxyXG4gICAgZGF0YToge30sXHJcbiAgICBsb2FkLCBmaW5kU3RhdGVzLCBnZXRTdGF0ZSwgcmVtb3ZlLCBoYW5kbGVBc3NldCxcclxuICAgIGFkZEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIHNhdmUsIGZpbmQsIGZpbmRPYmplY3RzQnlUeXBlLFxyXG4gICAgZXhwb3J0VG9Kc29uLCBpbXBvcnRQcm9qZWN0LCBwbGF5LFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gICAgb246IF9lbW1pdGVyLm9uLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb2ZmOiBfZW1taXRlci5vZmYuYmluZChfZW1taXRlciksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgY2FtZXJhOiB7fVxyXG4gICAgfVxyXG59KVxyXG5cclxuQXBwLk9uKFwiaW5pdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJJbXBvcnRlclwiLCBJbXBvcnRlcilcclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiRWxlbWVudEFkZFwiLCBFbGVtZW50QWRkKVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJjaGFuZ2VcIiwgKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgc2xpZGUsIG91dExpc3QpXHJcbiAgICAgICAgLy9hY3RpdmF0ZXMoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLnVpZClcclxuICAgIH0pXHJcblxyXG4gICAgQXBwLnNsaWRlcy5vbihcInJlbW92ZVwiLCAodWlkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgdWlkLCBvdXRMaXN0KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkZWxldGUgb3V0TGlzdFtpXS5zdGF0ZXNbdWlkXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0JyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHRleHQ6ICdQcm9qZWN0JyxcclxuICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmNyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZpbGUtZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5vcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ09wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiT3BlbiBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMub3BlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5leHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdkb3dubG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0V4cG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJFeHBvcnQgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3QuZXhwb3J0VG9Kc29uKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3VwbG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiSW1wb3J0IHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0LmltcG9ydFByb2plY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QucmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnYmluJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjc2ODM5OWMxOTAyNDYzM2RkOWJlXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjFcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=