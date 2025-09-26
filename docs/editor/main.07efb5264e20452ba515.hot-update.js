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
    _data.options = _data.data.options || {
        fullscreen: false,
        showslides: true
    }
    _data.info = _data.data.info || {
        name: "Project"
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

async function saveOptions() {
    await _idb_js__WEBPACK_IMPORTED_MODULE_1__["default"].upsertItemProperties("project", "options", JSON.parse((0,_tools_js__WEBPACK_IMPORTED_MODULE_6__.stringify)(_data.options)))
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

function ShowProjectOptions() {
    const props = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
        model: _data.options,
        properties: [
            /*{
                label: "Name",
                prop: "name",
                component: "LabelEdit"
            },*/
            {
                label: "Show slides",
                prop: "showslides",
                component: "BoolEdit"
            },
            {
                label: "Fullscreen",
                prop: "fullscreen",
                component: "BoolEdit"
            }
        ],
        head: {
            title: ""
        }
    })

    const cancelButton = {
        label: "Close",
        class: "primary",
        handler: async () => {
            App.modal.close()
        }
    }

    const buttons = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)([
        cancelButton
    ])

    App.modal.open({
        header: {
            value: `Project options`,
            handler: () => {
                App.modal.close()
            }
        },
        content: {
            component: "ModalForm",
            props,
            events: {
                'update:model': (key, value) => {
                    saveOptions()
                }
            }
        },
        footer: {
            buttons
        }
    })
}

const _data = (0,vue__WEBPACK_IMPORTED_MODULE_0__.reactive)({
    add(el) {
        _data.children.push(el)
    },
    uid: null, init,
    data: {},
    load, findStates, getState, remove, handleAsset,
    addElement, createElement, save, find, findObjectsByType,
    exportToJson, importProject, play,
    children: [],
    on: _emmiter.on.bind(_emmiter),
    off: _emmiter.off.bind(_emmiter),
    options: {
        fullscreen: false,
        showslides: true
    },
    info: {
        name: "Project"
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

    App.menu.hierarhy.list.push({
        icon: "equalizer2",
        tooltip: "Project options",
        handler: () => {
            ShowProjectOptions()
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
/******/ 	__webpack_require__.h = () => ("4dcb1723c581618c7a3a")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvYXBwL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgSURCIGZyb20gXCJAL2lkYi5qc1wiXHJcbmltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCBFdmVudEVtbWl0ZXIgZnJvbSBcIi4uL2V2ZW50ZW1pdHRlci5qc1wiXHJcbmNvbnN0IF9lbW1pdGVyID0gbmV3IEV2ZW50RW1taXRlcigpXHJcbmltcG9ydCBFbGVtZW50QWRkIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2VsZW1lbnRhZGQudnVlXCJcclxuXHJcbmltcG9ydCBJbXBvcnRlciBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFscy9pbXBvcnRlci52dWVcIlxyXG5cclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxubGV0IF9mYWN0b3J5XHJcblxyXG5mdW5jdGlvbiBpbml0KHByb2plY3REYXRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3REYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IHByb2plY3REYXRhW2ldXHJcbiAgICAgICAgX2RhdGEuZGF0YVt2LnVpZF0gPSB2XHJcbiAgICB9XHJcbiAgICBfZGF0YS5vcHRpb25zID0gX2RhdGEuZGF0YS5vcHRpb25zIHx8IHtcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICBzaG93c2xpZGVzOiB0cnVlXHJcbiAgICB9XHJcbiAgICBfZGF0YS5pbmZvID0gX2RhdGEuZGF0YS5pbmZvIHx8IHtcclxuICAgICAgICBuYW1lOiBcIlByb2plY3RcIlxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkKG1vZGVsc0RhdGEpIHtcclxuICAgIF9mYWN0b3J5ID0gQXBwLmVuZ2luZS5nZXRGYWN0b3J5KClcclxuICAgIGNvbnN0IHBhcnNlZCA9IHt9XHJcbiAgICBmb3IgKGxldCBpID0gbW9kZWxzRGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsRGF0YSA9IG1vZGVsc0RhdGFbaV1cclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGJ1aWxkKG1vZGVsc0RhdGEsIG1vZGVsRGF0YSwgcGFyc2VkKVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbW9kZWxzRGF0YS5maW5kSW5kZXgocyA9PiBzLnVpZCA9PT0gZWwudWlkKVxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIG1vZGVsc0RhdGEuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlKGVsZW1lbnQsIHNsaWRlKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuc3RhdGVzW3NsaWRlXSkge1xyXG4gICAgICAgIGVsZW1lbnQuc3RhdGVzW3NsaWRlXSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uczogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgX2VtbWl0ZXIuZW1pdCgnc3RhdGVhZGQnLCBzbGlkZSwgZWxlbWVudC5wYXRocylcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50LnN0YXRlc1tzbGlkZV1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYnVpbGQobGlzdCwgZGF0YSwgcGFyc2VkKSB7XHJcbiAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICBpZiAocGFyc2VkW2RhdGEudWlkXSlcclxuICAgICAgICByZXR1cm4gcGFyc2VkW2RhdGEudWlkXVxyXG4gICAgY29uc3QgcGFyZW50SWQgPSBkYXRhLnBhcmVudFxyXG4gICAgbGV0IHBhcmVudCA9IHBhcnNlZFtwYXJlbnRJZF1cclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gYXdhaXQgYnVpbGQobGlzdCwgbGlzdC5maW5kKGwgPT4gbC51aWQgPT09IHBhcmVudElkKSwgcGFyc2VkKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGNyZWF0ZUVsZW1lbnQoZGF0YSwgcGFyZW50KVxyXG4gICAgICAgIHBhcnNlZFtlbC51aWRdID0gZWxcclxuICAgICAgICByZXR1cm4gZWxcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog0J/QvtC60LDQt9GL0LLQsNC10YLRgdGPINGE0L7RgNC80LAg0LLRi9Cx0L7RgNCwINGC0LjQv9CwINGN0LvQtdC80LXQvdGC0LBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEVsZW1lbnQoc2VsZWN0ZWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnREYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTmV3IEVsZW1lbnRcIiwgdHlwZTogXCJHcm91cFwiXHJcbiAgICB9XHJcbiAgICBuZXdFbGVtZW50RGF0YS51aWQgPSBgRWxlbWVudCR7RGF0ZS5ub3coKX1gXHJcbiAgICBuZXdFbGVtZW50RGF0YS5wYXRocyA9IFtdXHJcbiAgICBsZXQgcGFyZW50XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gc2VsZWN0ZWRcclxuICAgICAgICBuZXdFbGVtZW50RGF0YS5wYXRocy5wdXNoKC4uLnNlbGVjdGVkLnBhdGhzKVxyXG4gICAgfVxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aHMucHVzaChuZXdFbGVtZW50RGF0YS51aWQpXHJcbiAgICBuZXdFbGVtZW50RGF0YS5wYXRoID0gbmV3RWxlbWVudERhdGEucGF0aHMuam9pbignLicpXHJcbiAgICBBcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBgQWRkICR7cGFyZW50ID8gXCIgY2hpbGQgZWxlbWVudCB0byBcIiArIHBhcmVudC5uYW1lIHx8IHBhcmVudC51aWQgOiBcIiBuZXcgZWxlbWVudCB0byBzY2VuZVwifWAsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkVsZW1lbnRBZGRcIixcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBuZXdFbGVtZW50RGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICd1cGRhdGU6bW9kZWxWYWx1ZSc6ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnREYXRhW2tdID0gdmFsW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBZGRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gYXdhaXQgY3JlYXRlRWxlbWVudChuZXdFbGVtZW50RGF0YSwgcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNhdmUoZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZGF0YSwgcGFyZW50KSB7XHJcbiAgICBjb25zdCBlbCA9IGF3YWl0IF9mYWN0b3J5LkJ1aWxkRWxlbWVudChkYXRhLCBwYXJlbnQgfHwgQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuUm9vdClcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGVsLm5hbWUgPSBkYXRhLm5hbWUgfHwgZGF0YS51aWRcclxuICAgIGVsLnN0YXRlcyA9IGRhdGEuc3RhdGVzIHx8IHt9XHJcbiAgICBlbC5wcm9wZXJ0aWVzID0gZGF0YS5wcm9wZXJ0aWVzIHx8IHt9XHJcbiAgICBlbC5hY3Rpb25zID0gZGF0YS5hY3Rpb25zIHx8IFtdXHJcbiAgICBlbC5wYXRocyA9IGRhdGEucGF0aHMgPz8gZWwucGF0aHNcclxuICAgIGVsLnBhdGggPSBlbC5wYXRocy5qb2luKCcuJylcclxuICAgIGNvbnN0IGVsZW1lbnQgPSByZWFjdGl2ZShlbClcclxuICAgIGNvbnN0IHAgPSBwYXJlbnQgfHwgX2RhdGFcclxuICAgIHAuYWRkKGVsZW1lbnQpLy/QlNC+0LHQsNCy0LvQtdC90LjQtSDQsiBEYXRhXHJcbiAgICBfZW1taXRlci5lbWl0KCdjcmVhdGUnLCBlbGVtZW50KVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcmVtb3ZlKHBhdGhzKSB7XHJcbiAgICBsZXQgcGFyZW50ID0gX2RhdGFcclxuICAgIGxldCB0YXJnZXQgPSBfZGF0YVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHBhcmVudCA9IHRhcmdldFxyXG4gICAgICAgIHRhcmdldCA9IHBhcmVudC5jaGlsZHJlbi5maW5kKGVsID0+IGVsLnVpZCA9PT0gcGF0aHNbaV0pXHJcbiAgICB9XHJcbiAgICBpZiAoQXBwLnNlbGVjdGlvbi5zZWxlY3RlZCA9PT0gdGFyZ2V0KSB7XHJcbiAgICAgICAgQXBwLnNlbGVjdGlvbi5zZWxlY3QobnVsbClcclxuICAgIH1cclxuICAgIGNvbnN0IGluZGV4ID0gcGFyZW50LmNoaWxkcmVuLmZpbmRJbmRleCh0ID0+IHQgPT09IHRhcmdldClcclxuICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0YXJnZXQuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgY29uc3QgY2hpbGQgPSB0YXJnZXQuY2hpbGRyZW5baV1cclxuICAgICAgICAgICAgaWYgKGNoaWxkLmlzRWxlbWVudCkge1xyXG4gICAgICAgICAgICAgICAgcmVtb3ZlKGNoaWxkLnBhdGhzKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHBhcmVudC5jaGlsZHJlbi5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgaWYgKHRhcmdldC5wYXJlbnQpIHtcclxuICAgICAgICAgICAgdGFyZ2V0LnBhcmVudC5yZW1vdmUodGFyZ2V0KVxyXG4gICAgICAgIH1cclxuICAgICAgICBJREIuZGVsZXRlSXRlbShcIm1vZGVsc1wiLCB0YXJnZXQudWlkKVxyXG4gICAgICAgIF9mYWN0b3J5LlJlbW92ZU1vZGVsKHRhcmdldC51aWQpXHJcbiAgICAgICAgX2VtbWl0ZXIuZW1pdChcInJlbW92ZVwiLCBwYXRocywgdGFyZ2V0KVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kKHBhdGhzKSB7XHJcbiAgICBsZXQgdGFyZ2V0ID0gX2RhdGFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB0YXJnZXQgPSB0YXJnZXQuY2hpbGRyZW4uZmluZChjID0+IGMudWlkID09PSBwYXRoc1tpXSlcclxuICAgIH1cclxuICAgIHJldHVybiB0YXJnZXRcclxufVxyXG5cclxuZnVuY3Rpb24gZmluZE9iamVjdHNCeVR5cGUodHlwZSkge1xyXG4gICAgY29uc3QgcmVzdWx0ID0gW107XHJcblxyXG4gICAgZnVuY3Rpb24gdHJhdmVyc2Uobm9kZSkge1xyXG4gICAgICAgIGlmIChub2RlIGluc3RhbmNlb2YgdHlwZSkgeyAvLyDQn9GA0L7QstC10YDRj9C10LwsINGP0LLQu9GP0LXRgtGB0Y8g0LvQuCDQvtCx0YrQtdC60YIg0Y3QutC30LXQvNC/0LvRj9GA0L7QvCDRg9C60LDQt9Cw0L3QvdC+0LPQviDRgtC40L/QsFxyXG4gICAgICAgICAgICByZXN1bHQucHVzaChub2RlLmRhdGEpO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgaWYgKG5vZGUuY2hpbGRyZW4gJiYgQXJyYXkuaXNBcnJheShub2RlLmNoaWxkcmVuKSkge1xyXG4gICAgICAgICAgICBub2RlLmNoaWxkcmVuLmZvckVhY2goY2hpbGQgPT4gdHJhdmVyc2UoY2hpbGQpKTsgLy8g0KDQtdC60YPRgNGB0LjQstC90L4g0L7QsdGF0L7QtNC40Lwg0LTQtdGC0LXQuVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICB0cmF2ZXJzZShfZGF0YSk7XHJcbiAgICByZXR1cm4gcmVzdWx0O1xyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlKG1vZGVsKSB7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcIm1vZGVsc1wiLCBtb2RlbC51aWQsIEpTT04ucGFyc2Uoc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgcGF0aHM6IG1vZGVsLnBhdGhzLFxyXG4gICAgICAgICAgICBwYXRoOiBtb2RlbC5wYXRocy5qb2luKCcuJyksXHJcbiAgICAgICAgICAgIHBhcmVudDogbW9kZWwucGFyZW50Py51aWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uczogbW9kZWwuYWN0aW9ucyB8fCBbXSxcclxuICAgICAgICAgICAgcHJvcHM6IG1vZGVsLnByb3BzIHx8IHt9LFxyXG4gICAgICAgICAgICAvL2FyZ3M6bW9kZWwuYXJncyB8fCB7fSxcclxuICAgICAgICAgICAgcHJvcGVydGllczogbW9kZWwucHJvcGVydGllcyB8fCB7fSxcclxuICAgICAgICAgICAgc3RhdGVzOiBtb2RlbC5zdGF0ZXMsXHJcbiAgICAgICAgICAgIHR5cGU6IG1vZGVsLnR5cGUsXHJcbiAgICAgICAgICAgIHVpZDogbW9kZWwudWlkLFxyXG4gICAgICAgICAgICBhc3NldHM6IG1vZGVsLmFzc2V0cyB8fCBbXVxyXG4gICAgICAgIH0pKSlcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVPcHRpb25zKCkge1xyXG4gICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwicHJvamVjdFwiLCBcIm9wdGlvbnNcIiwgSlNPTi5wYXJzZShzdHJpbmdpZnkoX2RhdGEub3B0aW9ucykpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0KGxpc3QsIHNsaWRlLCBvdXRsaXN0ID0gW10pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbGlzdFtpXVxyXG4gICAgICAgIGlmIChlbC5pc0VsZW1lbnQgJiYgZWwuc3RhdGVzW3NsaWRlXSkge1xyXG4gICAgICAgICAgICBvdXRsaXN0LnB1c2goZWwpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVsLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29sbGVjdChlbC5jaGlsZHJlbiwgc2xpZGUsIG91dGxpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU3RhdGVzKHNsaWRlVUlEKSB7XHJcbiAgICBjb25zdCBvdXRMaXN0ID0gW11cclxuICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlVUlELCBvdXRMaXN0KVxyXG4gICAgcmV0dXJuIG91dExpc3RcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Kc29uKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShkYXRhKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGBwcm9qZWN0JHtfZGF0YS51aWR9Lmpzb25gO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgYS5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxuICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltcG9ydFByb2plY3QoKSB7XHJcbiAgICAvKipcclxuICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0LTQuNCw0LvQvtCz0LAg0LLRi9Cx0L7RgNCwINGE0LDQudC70LBcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjY2VwdCAtINCi0LjQv9GLINGE0LDQudC70L7QsiDQtNC70Y8g0LLRi9Cx0L7RgNCwICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAuanNvbilcclxuICogQHJldHVybnMge1Byb21pc2U8RmlsZT59IFByb21pc2Ug0YEg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LDQudC70L7QvFxyXG4gKi9cclxuICAgIGZ1bmN0aW9uIG9wZW5GaWxlRGlhbG9nKGFjY2VwdCA9ICcuanNvbicpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L3QtdCy0LjQtNC40LzRi9C5IGlucHV0INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICAgICAgaW5wdXQuYWNjZXB0ID0gYWNjZXB0O1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INCy0YvQsdC+0YAg0YTQsNC50LvQsFxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCBpbnB1dCDQsiBET00g0Lgg0YLRgNC40LPQs9C10YDQuNC8INC60LvQuNC6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINGH0YLQtdC90LjRjyDQuCDQv9Cw0YDRgdC40L3Qs9CwIEpTT04g0YTQsNC50LvQsFxyXG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0g0J7QsdGK0LXQutGCINGE0LDQudC70LBcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IFByb21pc2Ug0YEg0YDQsNGB0L/QsNGA0YHQtdC90L3Ri9C80Lgg0LTQsNC90L3Ri9C80LggSlNPTlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUpzb25GaWxlKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aCgnLmpzb24nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuyDRgSDRgNCw0YHRiNC40YDQtdC90LjQtdC8IC5qc29uJykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9Cw0YDRgdC40L3Qs9CwIEpTT046ICcgKyBlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDRh9GC0LXQvdC40Y8g0YTQsNC50LvQsCcpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IG9wZW5GaWxlRGlhbG9nKCk7XHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBwYXJzZUpzb25GaWxlKGZpbGUpO1xyXG4gICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGltcG9ydExpc3QgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBhc3NldHM6IHt9LFxyXG4gICAgICAgICAgICBlbGVtZW50czoge30sXHJcbiAgICAgICAgICAgIHNsaWRlczoge30sXHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHt9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBqc29uRGF0YS5hc3NldHMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kZWxzXCIsIGpzb25EYXRhLm1vZGVscylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJwcm9qZWN0XCIsIGpzb25EYXRhLnByb2plY3QpXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgncHJvamVjdCcsIHByb2plY3ROYW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvKkFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYNCY0LzQv9C+0YDRgmAsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkltcG9ydGVyXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IGpzb25EYXRhXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gdi5tZXJnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlbGlzdDogKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydExpc3Rba10gPSBsaXN0W2tdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCY0LzQv9C+0YDRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBqc29uRGF0YS5tb2RlbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kdWxlc1wiLCBqc29uRGF0YS5tb2R1bGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBqc29uRGF0YS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J7RgtC80LXQvdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgLypjb25zdCBrZXkgPSBgcHJvamVjdCR7RGF0ZS5ub3coKX1gXHJcblxyXG4gICAgICAgIGF3YWl0IElEQi5Jbml0KGtleSwgW1wicHJvamVjdHNcIiwgXCJhc3NldHNcIiwgXCJlbGVtZW50c1wiLCBcInNsaWRlc1wiLCBcImFjdGlvbnNcIiwgXCJtb2R1bGVzXCJdLCBcInVpZFwiKVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLmFzc2V0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmFzc2V0c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImFzc2V0c1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5lbGVtZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmVsZW1lbnRzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwiZWxlbWVudHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuc2xpZGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuc2xpZGVzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwic2xpZGVzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbGF5KHRhcmdldCA9ICdkYXRhJykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgbGV0IGxpbmsgPSBgLi4vcGxheWVyP3NyYz0ke3RhcmdldH1gXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGInKVxyXG4gICAgICAgIGxpbmsgKz0gYCZkYj0ke19kYXRhLnVpZH1gXHJcbiAgICBjb25zdCBwbGF5ZXJXaW5kb3cgPSB3aW5kb3cub3BlbihsaW5rLCAnUGxheWVyJyk7XHJcblxyXG4gICAgaWYgKCFwbGF5ZXJXaW5kb3cpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC+0YLQutGA0YvRgtGMINC+0LrQvdC+LiDQktC+0LfQvNC+0LbQvdC+LCDQsdGA0LDRg9C30LXRgCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0LsgcG9wLXVwLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGF0YScpIHtcclxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtCy0YLQvtGA0L3Ri9GFINC/0L7Qv9GL0YLQvtC6INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChhdHRlbXB0ID0gMCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdC1INC30LDQutGA0YvRgtC+INC70Lgg0L7QutC90L5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJXaW5kb3cuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7QutC90L4g0L/Qu9C10LXRgNCwINCx0YvQu9C+INC30LDQutGA0YvRgtC+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YvRgtCw0LXQvNGB0Y8g0L7RgtC/0YDQsNCy0LjRgtGMINC00LDQvdC90YvQtVxyXG4gICAgICAgICAgICAgICAgcGxheWVyV2luZG93LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU5JVF9EQVRBJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTsgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQvtC90LrRgNC10YLQvdGL0Lkgb3JpZ2luINCy0LzQtdGB0YLQviAnKidcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQtNCw0L3QvdGL0YU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPCA1KSB7IC8vINCc0LDQutGB0LjQvNGD0LwgNSDQv9C+0L/Ri9GC0L7QulxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2VuZERhdGEoYXR0ZW1wdCArIDEpLCA1MDAgKiAoYXR0ZW1wdCArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vINCf0LXRgNCy0LDRjyDQv9C+0L/Ri9GC0LrQsCDQvtGC0L/RgNCw0LLQutC4INGBINC90LXQsdC+0LvRjNGI0L7QuSDQt9Cw0LTQtdGA0LbQutC+0LlcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbmREYXRhLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFzc2V0KGRhdGEpIHtcclxuICAgIGlmICghQXBwLnNsaWRlcy5hY3RpdmVkKSB7XHJcbiAgICAgICAgQXBwLnRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg0J3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtC30LTQsNGC0Ywg0YHQu9Cw0LnQtGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc291cmNlLnR5cGUgPT09IFwibW9kZWxcIikge1xyXG4gICAgICAgIGNvbnN0IHVpZCA9IChgJHtkYXRhLnNvdXJjZS5uYW1lIHx8IGRhdGEuc291cmNlLnVpZH0ke0RhdGUubm93KCl9YCkucmVwbGFjZSgnLicsICcnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc291cmNlLnJlc291cmNlKVxyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgQXBwLnByb2plY3QuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiT2JqZWN0M0RcIixcclxuICAgICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGRhdGEudGFyZ2V0Py51aWQsXHJcbiAgICAgICAgICAgIGFzc2V0czogW3tcclxuICAgICAgICAgICAgICAgIHVpZDogZGF0YS5zb3VyY2UudWlkXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwYXRoczogWy4uLmRhdGEudGFyZ2V0Py5wYXRocyB8fCBbXSwgdWlkXVxyXG4gICAgICAgIH0sIGRhdGEudGFyZ2V0KVxyXG4gICAgICAgIGF3YWl0IEFwcC5wcm9qZWN0LnNhdmUoZWwpXHJcbiAgICAgICAgQXBwLnNlbGVjdGlvbi5zZWxlY3QoZWwpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dQcm9qZWN0T3B0aW9ucygpIHtcclxuICAgIGNvbnN0IHByb3BzID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIG1vZGVsOiBfZGF0YS5vcHRpb25zLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICAgICAgLyp7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJMYWJlbEVkaXRcIlxyXG4gICAgICAgICAgICB9LCovXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgc2xpZGVzXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcInNob3dzbGlkZXNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJCb29sRWRpdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICAgIHByb3A6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkJvb2xFZGl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICBjYW5jZWxCdXR0b25cclxuICAgIF0pXHJcblxyXG4gICAgQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYFByb2plY3Qgb3B0aW9uc2AsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZGFsRm9ybVwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAndXBkYXRlOm1vZGVsJzogKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlT3B0aW9ucygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgX2RhdGEgPSByZWFjdGl2ZSh7XHJcbiAgICBhZGQoZWwpIHtcclxuICAgICAgICBfZGF0YS5jaGlsZHJlbi5wdXNoKGVsKVxyXG4gICAgfSxcclxuICAgIHVpZDogbnVsbCwgaW5pdCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbG9hZCwgZmluZFN0YXRlcywgZ2V0U3RhdGUsIHJlbW92ZSwgaGFuZGxlQXNzZXQsXHJcbiAgICBhZGRFbGVtZW50LCBjcmVhdGVFbGVtZW50LCBzYXZlLCBmaW5kLCBmaW5kT2JqZWN0c0J5VHlwZSxcclxuICAgIGV4cG9ydFRvSnNvbiwgaW1wb3J0UHJvamVjdCwgcGxheSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG9uOiBfZW1taXRlci5vbi5iaW5kKF9lbW1pdGVyKSxcclxuICAgIG9mZjogX2VtbWl0ZXIub2ZmLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHNob3dzbGlkZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbmFtZTogXCJQcm9qZWN0XCJcclxuICAgIH1cclxufSlcclxuXHJcbkFwcC5PbihcImluaXRcIiwgKCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiSW1wb3J0ZXJcIiwgSW1wb3J0ZXIpXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkVsZW1lbnRBZGRcIiwgRWxlbWVudEFkZClcclxuXHJcbiAgICBBcHAuc2xpZGVzLm9uKFwiY2hhbmdlXCIsIChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLCBvdXRMaXN0KVxyXG4gICAgICAgIC8vYWN0aXZhdGVzKF9kYXRhLmNoaWxkcmVuLCBzbGlkZS51aWQpXHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJyZW1vdmVcIiwgKHVpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHVpZCwgb3V0TGlzdClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGVsZXRlIG91dExpc3RbaV0uc3RhdGVzW3VpZF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5tZW51LmhpZXJhcmh5Lmxpc3QucHVzaCh7XHJcbiAgICAgICAgaWNvbjogXCJlcXVhbGl6ZXIyXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCJQcm9qZWN0IG9wdGlvbnNcIixcclxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFNob3dQcm9qZWN0T3B0aW9ucygpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBBcHAubWVudS5hZGRNZW51KCdhcHAnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ1Byb2plY3QnLFxyXG4gICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmlsZS1lbXB0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMuY3JlYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0Lm9wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnT3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJPcGVuIHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5vcGVuKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmV4cG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRXhwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIkV4cG9ydCBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdC5leHBvcnRUb0pzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuaW1wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXBsb2FkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW1wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJJbXBvcnQgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3QuaW1wb3J0UHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9kYXRhIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiNGRjYjE3MjNjNTgxNjE4YzdhM2FcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==