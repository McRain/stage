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

async function copyElement(source) {

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
    console.log(model)
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
    console.log(data)
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
/******/ 	__webpack_require__.h = () => ("4d80b7612047e6a96b23")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q0E7VUFDQSxnQkFBZ0Isc0VBQXNFLGdCQUFnQjtVQUN0RztVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QyxjQUFjO1VBQzFFO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDO1VBQzVEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsMERBQTBEO1VBQzFEO1VBQ0E7VUFDQTtVQUNBO1VBQ0EsRUFBRTtVQUNGLEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3IvLi9zcmMvYXBwL3Byb2plY3QuanMiLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9nZXRGdWxsSGFzaCIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL3NoYXJpbmciXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgcmVhY3RpdmUsIGNvbXB1dGVkIH0gZnJvbSAndnVlJ1xyXG5pbXBvcnQgSURCIGZyb20gXCJAL2lkYi5qc1wiXHJcbmltcG9ydCBBcHBNb2QgZnJvbSBcIkByZW5lb3MvYXBwXCJcclxuY29uc3QgQXBwID0gQXBwTW9kLmRlZmF1bHQgfHwgQXBwTW9kXHJcbmltcG9ydCBFdmVudEVtbWl0ZXIgZnJvbSBcIi4uL2V2ZW50ZW1pdHRlci5qc1wiXHJcbmNvbnN0IF9lbW1pdGVyID0gbmV3IEV2ZW50RW1taXRlcigpXHJcbmltcG9ydCBFbGVtZW50QWRkIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2VsZW1lbnRhZGQudnVlXCJcclxuXHJcbmltcG9ydCBJbXBvcnRlciBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFscy9pbXBvcnRlci52dWVcIlxyXG5cclxuaW1wb3J0IHsgc3RyaW5naWZ5IH0gZnJvbSBcIkAvdG9vbHMuanNcIlxyXG5cclxubGV0IF9mYWN0b3J5XHJcblxyXG5mdW5jdGlvbiBpbml0KHByb2plY3REYXRhKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHByb2plY3REYXRhLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgdiA9IHByb2plY3REYXRhW2ldXHJcbiAgICAgICAgX2RhdGEuZGF0YVt2LnVpZF0gPSB2XHJcbiAgICB9XHJcbiAgICBfZGF0YS5vcHRpb25zID0gX2RhdGEuZGF0YS5vcHRpb25zIHx8IHtcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICBzaG93c2xpZGVzOiB0cnVlXHJcbiAgICB9XHJcbiAgICBfZGF0YS5pbmZvID0gX2RhdGEuZGF0YS5pbmZvIHx8IHtcclxuICAgICAgICBuYW1lOiBcIlByb2plY3RcIlxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBsb2FkKG1vZGVsc0RhdGEpIHtcclxuICAgIF9mYWN0b3J5ID0gQXBwLmVuZ2luZS5nZXRGYWN0b3J5KClcclxuICAgIGNvbnN0IHBhcnNlZCA9IHt9XHJcbiAgICBmb3IgKGxldCBpID0gbW9kZWxzRGF0YS5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xyXG4gICAgICAgIGNvbnN0IG1vZGVsRGF0YSA9IG1vZGVsc0RhdGFbaV1cclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGJ1aWxkKG1vZGVsc0RhdGEsIG1vZGVsRGF0YSwgcGFyc2VkKVxyXG4gICAgICAgIGNvbnN0IGluZGV4ID0gbW9kZWxzRGF0YS5maW5kSW5kZXgocyA9PiBzLnVpZCA9PT0gZWwudWlkKVxyXG4gICAgICAgIGlmIChpbmRleCA+PSAwKSB7XHJcbiAgICAgICAgICAgIG1vZGVsc0RhdGEuc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuXHJcbmZ1bmN0aW9uIGdldFN0YXRlKGVsZW1lbnQsIHNsaWRlKSB7XHJcbiAgICBpZiAoIWVsZW1lbnQuc3RhdGVzW3NsaWRlXSkge1xyXG4gICAgICAgIGVsZW1lbnQuc3RhdGVzW3NsaWRlXSA9IHtcclxuICAgICAgICAgICAgYWN0aW9uczogW11cclxuICAgICAgICB9XHJcbiAgICAgICAgX2VtbWl0ZXIuZW1pdCgnc3RhdGVhZGQnLCBzbGlkZSwgZWxlbWVudC5wYXRocylcclxuICAgIH1cclxuICAgIHJldHVybiBlbGVtZW50LnN0YXRlc1tzbGlkZV1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gYnVpbGQobGlzdCwgZGF0YSwgcGFyc2VkKSB7XHJcbiAgICBpZiAoIWRhdGEpXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICBpZiAocGFyc2VkW2RhdGEudWlkXSlcclxuICAgICAgICByZXR1cm4gcGFyc2VkW2RhdGEudWlkXVxyXG4gICAgY29uc3QgcGFyZW50SWQgPSBkYXRhLnBhcmVudFxyXG4gICAgbGV0IHBhcmVudCA9IHBhcnNlZFtwYXJlbnRJZF1cclxuICAgIGlmICghcGFyZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gYXdhaXQgYnVpbGQobGlzdCwgbGlzdC5maW5kKGwgPT4gbC51aWQgPT09IHBhcmVudElkKSwgcGFyc2VkKVxyXG4gICAgfVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGNyZWF0ZUVsZW1lbnQoZGF0YSwgcGFyZW50KVxyXG4gICAgICAgIHBhcnNlZFtlbC51aWRdID0gZWxcclxuICAgICAgICByZXR1cm4gZWxcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG4vKipcclxuICog0J/QvtC60LDQt9GL0LLQsNC10YLRgdGPINGE0L7RgNC80LAg0LLRi9Cx0L7RgNCwINGC0LjQv9CwINGN0LvQtdC80LXQvdGC0LBcclxuICovXHJcbmFzeW5jIGZ1bmN0aW9uIGFkZEVsZW1lbnQoc2VsZWN0ZWQpIHtcclxuICAgIGNvbnN0IG5ld0VsZW1lbnREYXRhID0ge1xyXG4gICAgICAgIG5hbWU6IFwiTmV3IEVsZW1lbnRcIiwgdHlwZTogXCJHcm91cFwiXHJcbiAgICB9XHJcbiAgICBuZXdFbGVtZW50RGF0YS51aWQgPSBgRWxlbWVudCR7RGF0ZS5ub3coKX1gXHJcbiAgICBuZXdFbGVtZW50RGF0YS5wYXRocyA9IFtdXHJcbiAgICBsZXQgcGFyZW50XHJcbiAgICBpZiAoc2VsZWN0ZWQgJiYgc2VsZWN0ZWQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgcGFyZW50ID0gc2VsZWN0ZWRcclxuICAgICAgICBuZXdFbGVtZW50RGF0YS5wYXRocy5wdXNoKC4uLnNlbGVjdGVkLnBhdGhzKVxyXG4gICAgfVxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aHMucHVzaChuZXdFbGVtZW50RGF0YS51aWQpXHJcbiAgICBuZXdFbGVtZW50RGF0YS5wYXRoID0gbmV3RWxlbWVudERhdGEucGF0aHMuam9pbignLicpXHJcbiAgICBBcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBgQWRkICR7cGFyZW50ID8gXCIgY2hpbGQgZWxlbWVudCB0byBcIiArIHBhcmVudC5uYW1lIHx8IHBhcmVudC51aWQgOiBcIiBuZXcgZWxlbWVudCB0byBzY2VuZVwifWAsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIkVsZW1lbnRBZGRcIixcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgIHBhcmVudDogc2VsZWN0ZWQsXHJcbiAgICAgICAgICAgICAgICBtb2RlbFZhbHVlOiBuZXdFbGVtZW50RGF0YVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICd1cGRhdGU6bW9kZWxWYWx1ZSc6ICh2YWwpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyh2YWwpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG5ld0VsZW1lbnREYXRhW2tdID0gdmFsW2tdXHJcbiAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJBZGRcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGVsID0gYXdhaXQgY3JlYXRlRWxlbWVudChuZXdFbGVtZW50RGF0YSwgcGFyZW50KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZWwpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IHNhdmUoZWwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCJDYW5jZWxcIixcclxuICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUVsZW1lbnQoZGF0YSwgcGFyZW50KSB7XHJcbiAgICBjb25zdCBlbCA9IGF3YWl0IF9mYWN0b3J5LkJ1aWxkRWxlbWVudChkYXRhLCBwYXJlbnQgfHwgQXBwLmVuZ2luZS5nZXRNYW5hZ2VyKCkuUm9vdClcclxuICAgIGlmICghZWwpIHtcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGVsLm5hbWUgPSBkYXRhLm5hbWUgfHwgZGF0YS51aWRcclxuICAgIGVsLnN0YXRlcyA9IGRhdGEuc3RhdGVzIHx8IHt9XHJcbiAgICBlbC5wcm9wZXJ0aWVzID0gZGF0YS5wcm9wZXJ0aWVzIHx8IHt9XHJcbiAgICBlbC5hY3Rpb25zID0gZGF0YS5hY3Rpb25zIHx8IFtdXHJcbiAgICBlbC5wYXRocyA9IGRhdGEucGF0aHMgPz8gZWwucGF0aHNcclxuICAgIGVsLnBhdGggPSBlbC5wYXRocy5qb2luKCcuJylcclxuICAgIGNvbnN0IGVsZW1lbnQgPSByZWFjdGl2ZShlbClcclxuICAgIGNvbnN0IHAgPSBwYXJlbnQgfHwgX2RhdGFcclxuICAgIHAuYWRkKGVsZW1lbnQpLy/QlNC+0LHQsNCy0LvQtdC90LjQtSDQsiBEYXRhXHJcbiAgICBfZW1taXRlci5lbWl0KCdjcmVhdGUnLCBlbGVtZW50KVxyXG4gICAgcmV0dXJuIGVsZW1lbnRcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY29weUVsZW1lbnQoc291cmNlKSB7XHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmUocGF0aHMpIHtcclxuICAgIGxldCBwYXJlbnQgPSBfZGF0YVxyXG4gICAgbGV0IHRhcmdldCA9IF9kYXRhXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0XHJcbiAgICAgICAgdGFyZ2V0ID0gcGFyZW50LmNoaWxkcmVuLmZpbmQoZWwgPT4gZWwudWlkID09PSBwYXRoc1tpXSlcclxuICAgIH1cclxuICAgIGlmIChBcHAuc2VsZWN0aW9uLnNlbGVjdGVkID09PSB0YXJnZXQpIHtcclxuICAgICAgICBBcHAuc2VsZWN0aW9uLnNlbGVjdChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uZmluZEluZGV4KHQgPT4gdCA9PT0gdGFyZ2V0KVxyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRhcmdldC5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmUoY2hpbGQucGF0aHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBpZiAodGFyZ2V0LnBhcmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQucGFyZW50LnJlbW92ZSh0YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIElEQi5kZWxldGVJdGVtKFwibW9kZWxzXCIsIHRhcmdldC51aWQpXHJcbiAgICAgICAgX2ZhY3RvcnkuUmVtb3ZlTW9kZWwodGFyZ2V0LnVpZClcclxuICAgICAgICBfZW1taXRlci5lbWl0KFwicmVtb3ZlXCIsIHBhdGhzLCB0YXJnZXQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQocGF0aHMpIHtcclxuICAgIGxldCB0YXJnZXQgPSBfZGF0YVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5jaGlsZHJlbi5maW5kKGMgPT4gYy51aWQgPT09IHBhdGhzW2ldKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kT2JqZWN0c0J5VHlwZSh0eXBlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB0eXBlKSB7IC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC+0LHRitC10LrRgiDRjdC60LfQtdC80L/Qu9GP0YDQvtC8INGD0LrQsNC30LDQvdC90L7Qs9C+INGC0LjQv9CwXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0cmF2ZXJzZShjaGlsZCkpOyAvLyDQoNC10LrRg9GA0YHQuNCy0L3QviDQvtCx0YXQvtC00LjQvCDQtNC10YLQtdC5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYXZlcnNlKF9kYXRhKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmUobW9kZWwpIHtcclxuICAgIGNvbnNvbGUubG9nKG1vZGVsKVxyXG4gICAgdHJ5IHtcclxuICAgICAgICBhd2FpdCBJREIudXBzZXJ0SXRlbVByb3BlcnRpZXMoXCJtb2RlbHNcIiwgbW9kZWwudWlkLCBKU09OLnBhcnNlKHN0cmluZ2lmeSh7XHJcbiAgICAgICAgICAgIG5hbWU6IG1vZGVsLm5hbWUsXHJcbiAgICAgICAgICAgIHBhdGhzOiBtb2RlbC5wYXRocyxcclxuICAgICAgICAgICAgcGF0aDogbW9kZWwucGF0aHMuam9pbignLicpLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IG1vZGVsLnBhcmVudD8udWlkIHx8IG51bGwsXHJcbiAgICAgICAgICAgIGFjdGlvbnM6IG1vZGVsLmFjdGlvbnMgfHwgW10sXHJcbiAgICAgICAgICAgIHByb3BzOiBtb2RlbC5wcm9wcyB8fCB7fSxcclxuICAgICAgICAgICAgLy9hcmdzOm1vZGVsLmFyZ3MgfHwge30sXHJcbiAgICAgICAgICAgIHByb3BlcnRpZXM6IG1vZGVsLnByb3BlcnRpZXMgfHwge30sXHJcbiAgICAgICAgICAgIHN0YXRlczogbW9kZWwuc3RhdGVzLFxyXG4gICAgICAgICAgICB0eXBlOiBtb2RlbC50eXBlLFxyXG4gICAgICAgICAgICB1aWQ6IG1vZGVsLnVpZCxcclxuICAgICAgICAgICAgYXNzZXRzOiBtb2RlbC5hc3NldHMgfHwgW11cclxuICAgICAgICB9KSkpXHJcblxyXG5cclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS53YXJuKGVycm9yKVxyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBzYXZlT3B0aW9ucygpIHtcclxuICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcInByb2plY3RcIiwgXCJvcHRpb25zXCIsIEpTT04ucGFyc2Uoc3RyaW5naWZ5KF9kYXRhLm9wdGlvbnMpKSlcclxufVxyXG5cclxuZnVuY3Rpb24gY29sbGVjdChsaXN0LCBzbGlkZSwgb3V0bGlzdCA9IFtdKSB7XHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCBlbCA9IGxpc3RbaV1cclxuICAgICAgICBpZiAoZWwuaXNFbGVtZW50ICYmIGVsLnN0YXRlc1tzbGlkZV0pIHtcclxuICAgICAgICAgICAgb3V0bGlzdC5wdXNoKGVsKVxyXG5cclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKCFlbC5jaGlsZHJlbikge1xyXG4gICAgICAgICAgICBjb25zb2xlLndhcm4oXCJObyBjaGlsZFwiKVxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZWwuY2hpbGRyZW4ubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNvbGxlY3QoZWwuY2hpbGRyZW4sIHNsaWRlLCBvdXRsaXN0KVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZFN0YXRlcyhzbGlkZVVJRCkge1xyXG4gICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICBjb2xsZWN0KF9kYXRhLmNoaWxkcmVuLCBzbGlkZVVJRCwgb3V0TGlzdClcclxuICAgIHJldHVybiBvdXRMaXN0XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGV4cG9ydFRvSnNvbigpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9kYXRhLnVpZClcclxuICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbSlNPTi5zdHJpbmdpZnkoZGF0YSldLCB7IHR5cGU6ICdhcHBsaWNhdGlvbi9qc29uJyB9KVxyXG4gICAgY29uc3QgZmlsZW5hbWUgPSBgcHJvamVjdCR7X2RhdGEudWlkfS5qc29uYDtcclxuICAgIGlmICh3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZU9yT3BlbkJsb2IpIHtcclxuICAgICAgICB3aW5kb3cubmF2aWdhdG9yLm1zU2F2ZUJsb2IoYmxvYiwgZmlsZW5hbWUpO1xyXG4gICAgfVxyXG4gICAgZWxzZSB7XHJcbiAgICAgICAgY29uc3QgYSA9IHdpbmRvdy5kb2N1bWVudC5jcmVhdGVFbGVtZW50KCdhJyk7XHJcbiAgICAgICAgYS5ocmVmID0gd2luZG93LlVSTC5jcmVhdGVPYmplY3RVUkwoYmxvYik7XHJcbiAgICAgICAgYS5kb3dubG9hZCA9IGZpbGVuYW1lO1xyXG4gICAgICAgIGEuc3R5bGUgPSAnZGlzcGxheTogbm9uZSc7XHJcbiAgICAgICAgYS5jbGljaygpO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBpbXBvcnRQcm9qZWN0KCkge1xyXG4gICAgLyoqXHJcbiAqINCk0YPQvdC60YbQuNGPINC00LvRjyDQvtGC0LrRgNGL0YLQuNGPINC00LjQsNC70L7Qs9CwINCy0YvQsdC+0YDQsCDRhNCw0LnQu9CwXHJcbiAqIEBwYXJhbSB7c3RyaW5nfSBhY2NlcHQgLSDQotC40L/RiyDRhNCw0LnQu9C+0LIg0LTQu9GPINCy0YvQsdC+0YDQsCAo0L/QviDRg9C80L7Qu9GH0LDQvdC40Y4gLmpzb24pXHJcbiAqIEByZXR1cm5zIHtQcm9taXNlPEZpbGU+fSBQcm9taXNlINGBINCy0YvQsdGA0LDQvdC90YvQvCDRhNCw0LnQu9C+0LxcclxuICovXHJcbiAgICBmdW5jdGlvbiBvcGVuRmlsZURpYWxvZyhhY2NlcHQgPSAnLmpzb24nKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlKSA9PiB7XHJcbiAgICAgICAgICAgIC8vINCh0L7Qt9C00LDQtdC8INC90LXQstC40LTQuNC80YvQuSBpbnB1dCDRjdC70LXQvNC10L3RglxyXG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2lucHV0Jyk7XHJcbiAgICAgICAgICAgIGlucHV0LnR5cGUgPSAnZmlsZSc7XHJcbiAgICAgICAgICAgIGlucHV0LmFjY2VwdCA9IGFjY2VwdDtcclxuICAgICAgICAgICAgaW5wdXQuc3R5bGUuZGlzcGxheSA9ICdub25lJztcclxuXHJcbiAgICAgICAgICAgIC8vINCe0LHRgNCw0LHQsNGC0YvQstCw0LXQvCDQstGL0LHQvtGAINGE0LDQudC70LBcclxuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgaWYgKGlucHV0LmZpbGVzICYmIGlucHV0LmZpbGVzWzBdKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShpbnB1dC5maWxlc1swXSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgfSk7XHJcblxyXG4gICAgICAgICAgICAvLyDQlNC+0LHQsNCy0LvRj9C10LwgaW5wdXQg0LIgRE9NINC4INGC0YDQuNCz0LPQtdGA0LjQvCDQutC70LjQulxyXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGlucHV0KTtcclxuICAgICAgICAgICAgaW5wdXQuY2xpY2soKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICAvKipcclxuICAgICAqINCk0YPQvdC60YbQuNGPINC00LvRjyDRh9GC0LXQvdC40Y8g0Lgg0L/QsNGA0YHQuNC90LPQsCBKU09OINGE0LDQudC70LBcclxuICAgICAqIEBwYXJhbSB7RmlsZX0gZmlsZSAtINCe0LHRitC10LrRgiDRhNCw0LnQu9CwXHJcbiAgICAgKiBAcmV0dXJucyB7UHJvbWlzZTxvYmplY3Q+fSBQcm9taXNlINGBINGA0LDRgdC/0LDRgNGB0LXQvdC90YvQvNC4INC00LDQvdC90YvQvNC4IEpTT05cclxuICAgICAqL1xyXG4gICAgZnVuY3Rpb24gcGFyc2VKc29uRmlsZShmaWxlKSB7XHJcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcclxuICAgICAgICAgICAgaWYgKCFmaWxlLm5hbWUuZW5kc1dpdGgoJy5qc29uJykpIHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9CS0YvQsdC10YDQuNGC0LUg0YTQsNC50Lsg0YEg0YDQsNGB0YjQuNGA0LXQvdC40LXQvCAuanNvbicpKTtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29uc3QgcmVhZGVyID0gbmV3IEZpbGVSZWFkZXIoKTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmxvYWQgPSAoZXZlbnQpID0+IHtcclxuICAgICAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc3QganNvbkRhdGEgPSBKU09OLnBhcnNlKGV2ZW50LnRhcmdldC5yZXN1bHQpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoanNvbkRhdGEpO1xyXG4gICAgICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQntGI0LjQsdC60LAg0L/QsNGA0YHQuNC90LPQsCBKU09OOiAnICsgZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9uZXJyb3IgPSAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQntGI0LjQsdC60LAg0YfRgtC10L3QuNGPINGE0LDQudC70LAnKSk7XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIucmVhZEFzVGV4dChmaWxlKTtcclxuICAgICAgICB9KTtcclxuICAgIH1cclxuXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGZpbGUgPSBhd2FpdCBvcGVuRmlsZURpYWxvZygpO1xyXG4gICAgICAgIGNvbnN0IGpzb25EYXRhID0gYXdhaXQgcGFyc2VKc29uRmlsZShmaWxlKTtcclxuICAgICAgICBsZXQgbWVyZ2VkID0gZmFsc2VcclxuICAgICAgICBjb25zdCBpbXBvcnRMaXN0ID0gcmVhY3RpdmUoe1xyXG4gICAgICAgICAgICBhY3Rpb25zOiB7fSxcclxuICAgICAgICAgICAgYXNzZXRzOiB7fSxcclxuICAgICAgICAgICAgZWxlbWVudHM6IHt9LFxyXG4gICAgICAgICAgICBzbGlkZXM6IHt9LFxyXG4gICAgICAgICAgICBtb2R1bGVzOiB7fVxyXG4gICAgICAgIH0pXHJcblxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFjdGlvbnNcIiwganNvbkRhdGEuYWN0aW9ucylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhc3NldHNcIiwganNvbkRhdGEuYXNzZXRzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBqc29uRGF0YS5tb2RlbHMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwic2xpZGVzXCIsIGpzb25EYXRhLnNsaWRlcylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2R1bGVzXCIsIGpzb25EYXRhLm1vZHVsZXMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBqc29uRGF0YS5wcm9qZWN0KVxyXG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgIC8vdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcclxuXHJcbiAgICAgICAgLypBcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICAgICAgdmFsdWU6IGDQmNC80L/QvtGA0YJgLFxyXG4gICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJJbXBvcnRlclwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBwcm9qZWN0OiBqc29uRGF0YVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgICAgIG9wdGlvbnM6ICh2KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIG1lcmdlZCA9IHYubWVyZ2VcclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIGNoYW5nZWxpc3Q6IChsaXN0KSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKGxpc3QpLmZvckVhY2goayA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbXBvcnRMaXN0W2tdID0gbGlzdFtrXVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQmNC80L/QvtGA0YJcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFjdGlvbnNcIiwganNvbkRhdGEuYWN0aW9ucylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBqc29uRGF0YS5hc3NldHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2RlbHNcIiwganNvbkRhdGEubW9kZWxzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwic2xpZGVzXCIsIGpzb25EYXRhLnNsaWRlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInByb2plY3RcIiwganNvbkRhdGEucHJvamVjdClcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgncHJvamVjdCcsIHByb2plY3ROYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCe0YLQvNC10L3QsFwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBdXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9KSovXHJcblxyXG4gICAgICAgIC8qY29uc3Qga2V5ID0gYHByb2plY3Qke0RhdGUubm93KCl9YFxyXG5cclxuICAgICAgICBhd2FpdCBJREIuSW5pdChrZXksIFtcInByb2plY3RzXCIsIFwiYXNzZXRzXCIsIFwiZWxlbWVudHNcIiwgXCJzbGlkZXNcIiwgXCJhY3Rpb25zXCIsIFwibW9kdWxlc1wiXSwgXCJ1aWRcIilcclxuXHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5hc3NldHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5hc3NldHNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJhc3NldHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuZWxlbWVudHMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5lbGVtZW50c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImVsZW1lbnRzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLnNsaWRlcy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLnNsaWRlc1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcInNsaWRlc1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9Ki9cclxuICAgICAgICByZXR1cm4ganNvbkRhdGE7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsDonLCBlcnJvci5tZXNzYWdlKTtcclxuICAgICAgICB0aHJvdyBlcnJvcjtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gcGxheSh0YXJnZXQgPSAnZGF0YScpIHtcclxuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBJREIuZXhwb3J0VG9Kc29uKF9kYXRhLnVpZClcclxuICAgIGNvbnNvbGUubG9nKGRhdGEpXHJcbiAgICBsZXQgbGluayA9IGAuLi9wbGF5ZXI/c3JjPSR7dGFyZ2V0fWBcclxuICAgIGlmICh0YXJnZXQgPT09ICdkYicpXHJcbiAgICAgICAgbGluayArPSBgJmRiPSR7X2RhdGEudWlkfWBcclxuICAgIGNvbnN0IHBsYXllcldpbmRvdyA9IHdpbmRvdy5vcGVuKGxpbmssICdQbGF5ZXInKTtcclxuXHJcbiAgICBpZiAoIXBsYXllcldpbmRvdykge1xyXG4gICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Cd0LUg0YPQtNCw0LvQvtGB0Ywg0L7RgtC60YDRi9GC0Ywg0L7QutC90L4uINCS0L7Qt9C80L7QttC90L4sINCx0YDQsNGD0LfQtdGAINC30LDQsdC70L7QutC40YDQvtCy0LDQuyBwb3AtdXAuJyk7XHJcbiAgICAgICAgcmV0dXJuO1xyXG4gICAgfVxyXG5cclxuICAgIGlmICh0YXJnZXQgPT09ICdkYXRhJykge1xyXG4gICAgICAgIC8vINCk0YPQvdC60YbQuNGPINC00LvRjyDQv9C+0LLRgtC+0YDQvdGL0YUg0L/QvtC/0YvRgtC+0Log0L7RgtC/0YDQsNCy0LrQuFxyXG4gICAgICAgIGNvbnN0IHNlbmREYXRhID0gYXN5bmMgKGF0dGVtcHQgPSAwKSA9PiB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICAvLyDQn9GA0L7QstC10YDRj9C10LwsINC90LUg0LfQsNC60YDRi9GC0L4g0LvQuCDQvtC60L3QvlxyXG4gICAgICAgICAgICAgICAgaWYgKHBsYXllcldpbmRvdy5jbG9zZWQpIHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntC60L3QviDQv9C70LXQtdGA0LAg0LHRi9C70L4g0LfQsNC60YDRi9GC0L4nKTtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICAgICAgLy8g0J/Ri9GC0LDQtdC80YHRjyDQvtGC0L/RgNCw0LLQuNGC0Ywg0LTQsNC90L3Ri9C1XHJcbiAgICAgICAgICAgICAgICBwbGF5ZXJXaW5kb3cucG9zdE1lc3NhZ2Uoe1xyXG4gICAgICAgICAgICAgICAgICAgIHR5cGU6ICdJTklUX0RBVEEnLFxyXG4gICAgICAgICAgICAgICAgICAgIHBheWxvYWQ6IGRhdGFcclxuICAgICAgICAgICAgICAgIH0sIHdpbmRvdy5sb2NhdGlvbi5vcmlnaW4pOyAvLyDQmNGB0L/QvtC70YzQt9GD0LXQvCDQutC+0L3QutGA0LXRgtC90YvQuSBvcmlnaW4g0LLQvNC10YHRgtC+ICcqJ1xyXG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwINC/0YDQuCDQvtGC0L/RgNCw0LLQutC1INC00LDQvdC90YvRhTonLCBlcnJvcik7XHJcbiAgICAgICAgICAgICAgICBpZiAoYXR0ZW1wdCA8IDUpIHsgLy8g0JzQsNC60YHQuNC80YPQvCA1INC/0L7Qv9GL0YLQvtC6XHJcbiAgICAgICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiBzZW5kRGF0YShhdHRlbXB0ICsgMSksIDUwMCAqIChhdHRlbXB0ICsgMSkpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgLy8g0J/QtdGA0LLQsNGPINC/0L7Qv9GL0YLQutCwINC+0YLQv9GA0LDQstC60Lgg0YEg0L3QtdCx0L7Qu9GM0YjQvtC5INC30LDQtNC10YDQttC60L7QuVxyXG4gICAgICAgIHNldFRpbWVvdXQoc2VuZERhdGEsIDMwMDApO1xyXG4gICAgfVxyXG5cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaGFuZGxlQXNzZXQoZGF0YSkge1xyXG4gICAgaWYgKCFBcHAuc2xpZGVzLmFjdGl2ZWQpIHtcclxuICAgICAgICBBcHAudG9hc3RzLmFkZCh7XHJcbiAgICAgICAgICAgIG1lc3NhZ2U6IGDQndC10L7QsdGF0L7QtNC40LzQviDRgdC+0LfQtNCw0YLRjCDRgdC70LDQudC0YFxyXG4gICAgICAgIH0pXHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBpZiAoZGF0YS5zb3VyY2UudHlwZSA9PT0gXCJtb2RlbFwiKSB7XHJcbiAgICAgICAgY29uc3QgdWlkID0gKGAke2RhdGEuc291cmNlLm5hbWUgfHwgZGF0YS5zb3VyY2UudWlkfSR7RGF0ZS5ub3coKX1gKS5yZXBsYWNlKCcuJywgJycpXHJcbiAgICAgICAgY29uc29sZS5sb2coZGF0YS5zb3VyY2UucmVzb3VyY2UpXHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBBcHAucHJvamVjdC5jcmVhdGVFbGVtZW50KHtcclxuICAgICAgICAgICAgdHlwZTogXCJPYmplY3QzRFwiLFxyXG4gICAgICAgICAgICB1aWQsXHJcbiAgICAgICAgICAgIHBhcmVudDogZGF0YS50YXJnZXQ/LnVpZCxcclxuICAgICAgICAgICAgYXNzZXRzOiBbe1xyXG4gICAgICAgICAgICAgICAgdWlkOiBkYXRhLnNvdXJjZS51aWRcclxuICAgICAgICAgICAgfV0sXHJcbiAgICAgICAgICAgIHBhdGhzOiBbLi4uZGF0YS50YXJnZXQ/LnBhdGhzIHx8IFtdLCB1aWRdXHJcbiAgICAgICAgfSwgZGF0YS50YXJnZXQpXHJcbiAgICAgICAgYXdhaXQgQXBwLnByb2plY3Quc2F2ZShlbClcclxuICAgICAgICBBcHAuc2VsZWN0aW9uLnNlbGVjdChlbClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gU2hvd1Byb2plY3RPcHRpb25zKCkge1xyXG4gICAgY29uc3QgcHJvcHMgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgbW9kZWw6IF9kYXRhLm9wdGlvbnMsXHJcbiAgICAgICAgcHJvcGVydGllczogW1xyXG4gICAgICAgICAgICAvKntcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIk5hbWVcIixcclxuICAgICAgICAgICAgICAgIHByb3A6IFwibmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkxhYmVsRWRpdFwiXHJcbiAgICAgICAgICAgIH0sKi9cclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiU2hvdyBzbGlkZXNcIixcclxuICAgICAgICAgICAgICAgIHByb3A6IFwic2hvd3NsaWRlc1wiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkJvb2xFZGl0XCJcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiRnVsbHNjcmVlblwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcDogXCJmdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQm9vbEVkaXRcIlxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgXSxcclxuICAgICAgICBoZWFkOiB7XHJcbiAgICAgICAgICAgIHRpdGxlOiBcIlwiXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBjb25zdCBjYW5jZWxCdXR0b24gPSB7XHJcbiAgICAgICAgbGFiZWw6IFwiQ2xvc2VcIixcclxuICAgICAgICBjbGFzczogXCJwcmltYXJ5XCIsXHJcbiAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgIH1cclxuICAgIH1cclxuXHJcbiAgICBjb25zdCBidXR0b25zID0gcmVhY3RpdmUoW1xyXG4gICAgICAgIGNhbmNlbEJ1dHRvblxyXG4gICAgXSlcclxuXHJcbiAgICBBcHAubW9kYWwub3Blbih7XHJcbiAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgIHZhbHVlOiBgUHJvamVjdCBvcHRpb25zYCxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IFwiTW9kYWxGb3JtXCIsXHJcbiAgICAgICAgICAgIHByb3BzLFxyXG4gICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICd1cGRhdGU6bW9kZWwnOiAoa2V5LCB2YWx1ZSkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHNhdmVPcHRpb25zKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgZm9vdGVyOiB7XHJcbiAgICAgICAgICAgIGJ1dHRvbnNcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5jb25zdCBfZGF0YSA9IHJlYWN0aXZlKHtcclxuICAgIGFkZChlbCkge1xyXG4gICAgICAgIF9kYXRhLmNoaWxkcmVuLnB1c2goZWwpXHJcbiAgICB9LFxyXG4gICAgdWlkOiBudWxsLCBpbml0LFxyXG4gICAgZGF0YToge30sXHJcbiAgICBsb2FkLCBmaW5kU3RhdGVzLCBnZXRTdGF0ZSwgcmVtb3ZlLCBoYW5kbGVBc3NldCxcclxuICAgIGFkZEVsZW1lbnQsIGNyZWF0ZUVsZW1lbnQsIHNhdmUsIGZpbmQsIGZpbmRPYmplY3RzQnlUeXBlLFxyXG4gICAgZXhwb3J0VG9Kc29uLCBpbXBvcnRQcm9qZWN0LCBwbGF5LFxyXG4gICAgY2hpbGRyZW46IFtdLFxyXG4gICAgb246IF9lbW1pdGVyLm9uLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb2ZmOiBfZW1taXRlci5vZmYuYmluZChfZW1taXRlciksXHJcbiAgICBvcHRpb25zOiB7XHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd3NsaWRlczogdHJ1ZVxyXG4gICAgfSxcclxuICAgIGluZm86IHtcclxuICAgICAgICBuYW1lOiBcIlByb2plY3RcIlxyXG4gICAgfVxyXG59KVxyXG5cclxuQXBwLk9uKFwiaW5pdFwiLCAoKSA9PiB7XHJcblxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJJbXBvcnRlclwiLCBJbXBvcnRlcilcclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiRWxlbWVudEFkZFwiLCBFbGVtZW50QWRkKVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJjaGFuZ2VcIiwgKHNsaWRlKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgc2xpZGUsIG91dExpc3QpXHJcbiAgICAgICAgLy9hY3RpdmF0ZXMoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLnVpZClcclxuICAgIH0pXHJcblxyXG4gICAgQXBwLnNsaWRlcy5vbihcInJlbW92ZVwiLCAodWlkKSA9PiB7XHJcbiAgICAgICAgY29uc3Qgb3V0TGlzdCA9IFtdXHJcbiAgICAgICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgdWlkLCBvdXRMaXN0KVxyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgb3V0TGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBkZWxldGUgb3V0TGlzdFtpXS5zdGF0ZXNbdWlkXVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgQXBwLm1lbnUuaGllcmFyaHkubGlzdC5wdXNoKHtcclxuICAgICAgICBpY29uOiBcImVxdWFsaXplcjJcIixcclxuICAgICAgICB0b29sdGlwOiBcIlByb2plY3Qgb3B0aW9uc1wiLFxyXG4gICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgU2hvd1Byb2plY3RPcHRpb25zKClcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5tZW51LmFkZE1lbnUoJ2FwcCcsXHJcbiAgICAgICAge1xyXG4gICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdCcsXHJcbiAgICAgICAgICAgIGljb246ICcnLFxyXG4gICAgICAgICAgICB0ZXh0OiAnUHJvamVjdCcsXHJcbiAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgY2hpbGRyZW46IFtcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5jcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdmaWxlLWVtcHR5JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnQ3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5jcmVhdGUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3Qub3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ21lbnUnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdPcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIk9wZW4gcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLm9wZW4oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuZXhwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZG93bmxvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdFeHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiRXhwb3J0IHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0LmV4cG9ydFRvSnNvbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5pbXBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICd1cGxvYWQnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdJbXBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGxpbms6ICcjJyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIkltcG9ydCBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdC5pbXBvcnRQcm9qZWN0KClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LnJlbW92ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2JpbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0RlbGV0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMucmVtb3ZlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICApXHJcbn0pXHJcblxyXG5cclxuZXhwb3J0IGRlZmF1bHQgX2RhdGEiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmggPSAoKSA9PiAoXCI0ZDgwYjc2MTIwNDdlNmE5NmIyM1wiKSIsIl9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5pbml0T3B0aW9ucy5zaGFyZWQgPSB7XHRcIkByZW5lb3MvYXBwXCI6IFt7XHR2ZXJzaW9uOiBcIjEuMC42XCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzICovIFwiLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwicmVxdWlyZWRWZXJzaW9uXCI6XCIxLjAuNlwiLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInRocmVlXCI6IFt7XHR2ZXJzaW9uOiBcIjAuMTgwLjBcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdGhyZWUvYnVpbGQvdGhyZWUubW9kdWxlLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ2dWVcIjogW3tcdHZlcnNpb246IFwiMy41LjIyXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzICovIFwiLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sfVxuX193ZWJwYWNrX3JlcXVpcmVfXy5TID0ge307XG52YXIgaW5pdFByb21pc2VzID0ge307XG52YXIgaW5pdFRva2VucyA9IHt9O1xuX193ZWJwYWNrX3JlcXVpcmVfXy5JID0gKG5hbWUsIGluaXRTY29wZSkgPT4ge1xuXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmJ1bmRsZXJSdW50aW1lLkkoe1x0c2hhcmVTY29wZU5hbWU6IG5hbWUsXG5cdFx0d2VicGFja1JlcXVpcmU6IF9fd2VicGFja19yZXF1aXJlX18sXG5cdFx0aW5pdFByb21pc2VzOiBpbml0UHJvbWlzZXMsXG5cdFx0aW5pdFRva2VuczogaW5pdFRva2Vucyxcblx0XHRpbml0U2NvcGU6IGluaXRTY29wZSxcblx0fSlcbn07Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9