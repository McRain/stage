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
/******/ 	__webpack_require__.h = () => ("2d078937beec665b8d1a")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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RSxnQkFBZ0I7VUFDdEc7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEMsY0FBYztVQUMxRTtVQUNBO1VBQ0EsZ0JBQWdCLDRDQUE0QztVQUM1RDtVQUNBO1VBQ0E7VUFDQTtVQUNBLDBEQUEwRDtVQUMxRDtVQUNBO1VBQ0E7VUFDQTtVQUNBLEVBQUU7VUFDRixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yLy4vc3JjL2FwcC9wcm9qZWN0LmpzIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvZ2V0RnVsbEhhc2giLCJ3ZWJwYWNrOi8vQHJlbmVvcy9zbGlkZXIuZWRpdG9yL3dlYnBhY2svcnVudGltZS9zaGFyaW5nIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IHJlYWN0aXZlLCBjb21wdXRlZCB9IGZyb20gJ3Z1ZSdcclxuaW1wb3J0IElEQiBmcm9tIFwiQC9pZGIuanNcIlxyXG5pbXBvcnQgQXBwTW9kIGZyb20gXCJAcmVuZW9zL2FwcFwiXHJcbmNvbnN0IEFwcCA9IEFwcE1vZC5kZWZhdWx0IHx8IEFwcE1vZFxyXG5pbXBvcnQgRXZlbnRFbW1pdGVyIGZyb20gXCIuLi9ldmVudGVtaXR0ZXIuanNcIlxyXG5jb25zdCBfZW1taXRlciA9IG5ldyBFdmVudEVtbWl0ZXIoKVxyXG5pbXBvcnQgRWxlbWVudEFkZCBmcm9tIFwiQC9jb21wb25lbnRzL21vZGFscy9lbGVtZW50YWRkLnZ1ZVwiXHJcblxyXG5pbXBvcnQgSW1wb3J0ZXIgZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbHMvaW1wb3J0ZXIudnVlXCJcclxuXHJcbmltcG9ydCB7IHN0cmluZ2lmeSB9IGZyb20gXCJAL3Rvb2xzLmpzXCJcclxuXHJcbmxldCBfZmFjdG9yeVxyXG5cclxuZnVuY3Rpb24gaW5pdChwcm9qZWN0RGF0YSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwcm9qZWN0RGF0YS5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IHYgPSBwcm9qZWN0RGF0YVtpXVxyXG4gICAgICAgIF9kYXRhLmRhdGFbdi51aWRdID0gdlxyXG4gICAgfVxyXG4gICAgX2RhdGEub3B0aW9ucyA9IF9kYXRhLmRhdGEub3B0aW9ucyB8fCB7XHJcbiAgICAgICAgZnVsbHNjcmVlbjogZmFsc2UsXHJcbiAgICAgICAgc2hvd3NsaWRlczogdHJ1ZVxyXG4gICAgfVxyXG4gICAgX2RhdGEuaW5mbyA9IF9kYXRhLmRhdGEuaW5mbyB8fCB7XHJcbiAgICAgICAgbmFtZTogXCJQcm9qZWN0XCJcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gbG9hZChtb2RlbHNEYXRhKSB7XHJcbiAgICBfZmFjdG9yeSA9IEFwcC5lbmdpbmUuZ2V0RmFjdG9yeSgpXHJcbiAgICBjb25zdCBwYXJzZWQgPSB7fVxyXG4gICAgZm9yIChsZXQgaSA9IG1vZGVsc0RhdGEubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICBjb25zdCBtb2RlbERhdGEgPSBtb2RlbHNEYXRhW2ldXHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBidWlsZChtb2RlbHNEYXRhLCBtb2RlbERhdGEsIHBhcnNlZClcclxuICAgICAgICBjb25zdCBpbmRleCA9IG1vZGVsc0RhdGEuZmluZEluZGV4KHMgPT4gcy51aWQgPT09IGVsLnVpZClcclxuICAgICAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgICAgICBtb2RlbHNEYXRhLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcblxyXG5mdW5jdGlvbiBnZXRTdGF0ZShlbGVtZW50LCBzbGlkZSkge1xyXG4gICAgaWYgKCFlbGVtZW50LnN0YXRlc1tzbGlkZV0pIHtcclxuICAgICAgICBlbGVtZW50LnN0YXRlc1tzbGlkZV0gPSB7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IFtdXHJcbiAgICAgICAgfVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoJ3N0YXRlYWRkJywgc2xpZGUsIGVsZW1lbnQucGF0aHMpXHJcbiAgICB9XHJcbiAgICByZXR1cm4gZWxlbWVudC5zdGF0ZXNbc2xpZGVdXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGJ1aWxkKGxpc3QsIGRhdGEsIHBhcnNlZCkge1xyXG4gICAgaWYgKCFkYXRhKVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgaWYgKHBhcnNlZFtkYXRhLnVpZF0pXHJcbiAgICAgICAgcmV0dXJuIHBhcnNlZFtkYXRhLnVpZF1cclxuICAgIGNvbnN0IHBhcmVudElkID0gZGF0YS5wYXJlbnRcclxuICAgIGxldCBwYXJlbnQgPSBwYXJzZWRbcGFyZW50SWRdXHJcbiAgICBpZiAoIXBhcmVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IGF3YWl0IGJ1aWxkKGxpc3QsIGxpc3QuZmluZChsID0+IGwudWlkID09PSBwYXJlbnRJZCksIHBhcnNlZClcclxuICAgIH1cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBjcmVhdGVFbGVtZW50KGRhdGEsIHBhcmVudClcclxuICAgICAgICBwYXJzZWRbZWwudWlkXSA9IGVsXHJcbiAgICAgICAgcmV0dXJuIGVsXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuLyoqXHJcbiAqINCf0L7QutCw0LfRi9Cy0LDQtdGC0YHRjyDRhNC+0YDQvNCwINCy0YvQsdC+0YDQsCDRgtC40L/QsCDRjdC70LXQvNC10L3RgtCwXHJcbiAqL1xyXG5hc3luYyBmdW5jdGlvbiBhZGRFbGVtZW50KHNlbGVjdGVkKSB7XHJcbiAgICBjb25zdCBuZXdFbGVtZW50RGF0YSA9IHtcclxuICAgICAgICBuYW1lOiBcIk5ldyBFbGVtZW50XCIsIHR5cGU6IFwiR3JvdXBcIlxyXG4gICAgfVxyXG4gICAgbmV3RWxlbWVudERhdGEudWlkID0gYEVsZW1lbnQke0RhdGUubm93KCl9YFxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aHMgPSBbXVxyXG4gICAgbGV0IHBhcmVudFxyXG4gICAgaWYgKHNlbGVjdGVkICYmIHNlbGVjdGVkLmlzRWxlbWVudCkge1xyXG4gICAgICAgIHBhcmVudCA9IHNlbGVjdGVkXHJcbiAgICAgICAgbmV3RWxlbWVudERhdGEucGF0aHMucHVzaCguLi5zZWxlY3RlZC5wYXRocylcclxuICAgIH1cclxuICAgIG5ld0VsZW1lbnREYXRhLnBhdGhzLnB1c2gobmV3RWxlbWVudERhdGEudWlkKVxyXG4gICAgbmV3RWxlbWVudERhdGEucGF0aCA9IG5ld0VsZW1lbnREYXRhLnBhdGhzLmpvaW4oJy4nKVxyXG4gICAgQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYEFkZCAke3BhcmVudCA/IFwiIGNoaWxkIGVsZW1lbnQgdG8gXCIgKyBwYXJlbnQubmFtZSB8fCBwYXJlbnQudWlkIDogXCIgbmV3IGVsZW1lbnQgdG8gc2NlbmVcIn1gLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJFbGVtZW50QWRkXCIsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICBwYXJlbnQ6IHNlbGVjdGVkLFxyXG4gICAgICAgICAgICAgICAgbW9kZWxWYWx1ZTogbmV3RWxlbWVudERhdGFcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAndXBkYXRlOm1vZGVsVmFsdWUnOiAodmFsKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXModmFsKS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBuZXdFbGVtZW50RGF0YVtrXSA9IHZhbFtrXVxyXG4gICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQWRkXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwic2Vjb25kYXJ5XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBlbCA9IGF3YWl0IGNyZWF0ZUVsZW1lbnQobmV3RWxlbWVudERhdGEsIHBhcmVudClcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGVsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBzYXZlKGVsKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcblxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwiQ2FuY2VsXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBjcmVhdGVFbGVtZW50KGRhdGEsIHBhcmVudCkge1xyXG4gICAgY29uc3QgZWwgPSBhd2FpdCBfZmFjdG9yeS5CdWlsZEVsZW1lbnQoZGF0YSwgcGFyZW50IHx8IEFwcC5lbmdpbmUuZ2V0TWFuYWdlcigpLlJvb3QpXHJcbiAgICBpZiAoIWVsKSB7XHJcbiAgICAgICAgcmV0dXJuXHJcbiAgICB9XHJcbiAgICBlbC5uYW1lID0gZGF0YS5uYW1lIHx8IGRhdGEudWlkXHJcbiAgICBlbC5zdGF0ZXMgPSBkYXRhLnN0YXRlcyB8fCB7fVxyXG4gICAgZWwucHJvcGVydGllcyA9IGRhdGEucHJvcGVydGllcyB8fCB7fVxyXG4gICAgZWwuYWN0aW9ucyA9IGRhdGEuYWN0aW9ucyB8fCBbXVxyXG4gICAgZWwucGF0aHMgPSBkYXRhLnBhdGhzID8/IGVsLnBhdGhzXHJcbiAgICBlbC5wYXRoID0gZWwucGF0aHMuam9pbignLicpXHJcbiAgICBjb25zdCBlbGVtZW50ID0gcmVhY3RpdmUoZWwpXHJcbiAgICBjb25zdCBwID0gcGFyZW50IHx8IF9kYXRhXHJcbiAgICBwLmFkZChlbGVtZW50KS8v0JTQvtCx0LDQstC70LXQvdC40LUg0LIgRGF0YVxyXG4gICAgX2VtbWl0ZXIuZW1pdCgnY3JlYXRlJywgZWxlbWVudClcclxuICAgIHJldHVybiBlbGVtZW50XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHJlbW92ZShwYXRocykge1xyXG4gICAgbGV0IHBhcmVudCA9IF9kYXRhXHJcbiAgICBsZXQgdGFyZ2V0ID0gX2RhdGFcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcGF0aHMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBwYXJlbnQgPSB0YXJnZXRcclxuICAgICAgICB0YXJnZXQgPSBwYXJlbnQuY2hpbGRyZW4uZmluZChlbCA9PiBlbC51aWQgPT09IHBhdGhzW2ldKVxyXG4gICAgfVxyXG4gICAgaWYgKEFwcC5zZWxlY3Rpb24uc2VsZWN0ZWQgPT09IHRhcmdldCkge1xyXG4gICAgICAgIEFwcC5zZWxlY3Rpb24uc2VsZWN0KG51bGwpXHJcbiAgICB9XHJcbiAgICBjb25zdCBpbmRleCA9IHBhcmVudC5jaGlsZHJlbi5maW5kSW5kZXgodCA9PiB0ID09PSB0YXJnZXQpXHJcbiAgICBpZiAoaW5kZXggPj0gMCkge1xyXG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGFyZ2V0LmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGNvbnN0IGNoaWxkID0gdGFyZ2V0LmNoaWxkcmVuW2ldXHJcbiAgICAgICAgICAgIGlmIChjaGlsZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICAgICAgICAgIHJlbW92ZShjaGlsZC5wYXRocylcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwYXJlbnQuY2hpbGRyZW4uc3BsaWNlKGluZGV4LCAxKVxyXG4gICAgICAgIGlmICh0YXJnZXQucGFyZW50KSB7XHJcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQucmVtb3ZlKHRhcmdldClcclxuICAgICAgICB9XHJcbiAgICAgICAgSURCLmRlbGV0ZUl0ZW0oXCJtb2RlbHNcIiwgdGFyZ2V0LnVpZClcclxuICAgICAgICBfZmFjdG9yeS5SZW1vdmVNb2RlbCh0YXJnZXQudWlkKVxyXG4gICAgICAgIF9lbW1pdGVyLmVtaXQoXCJyZW1vdmVcIiwgcGF0aHMsIHRhcmdldClcclxuICAgIH1cclxufVxyXG5cclxuZnVuY3Rpb24gZmluZChwYXRocykge1xyXG4gICAgbGV0IHRhcmdldCA9IF9kYXRhXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgdGFyZ2V0ID0gdGFyZ2V0LmNoaWxkcmVuLmZpbmQoYyA9PiBjLnVpZCA9PT0gcGF0aHNbaV0pXHJcbiAgICB9XHJcbiAgICByZXR1cm4gdGFyZ2V0XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRPYmplY3RzQnlUeXBlKHR5cGUpIHtcclxuICAgIGNvbnN0IHJlc3VsdCA9IFtdO1xyXG5cclxuICAgIGZ1bmN0aW9uIHRyYXZlcnNlKG5vZGUpIHtcclxuICAgICAgICBpZiAobm9kZSBpbnN0YW5jZW9mIHR5cGUpIHsgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDRj9Cy0LvRj9C10YLRgdGPINC70Lgg0L7QsdGK0LXQutGCINGN0LrQt9C10LzQv9C70Y/RgNC+0Lwg0YPQutCw0LfQsNC90L3QvtCz0L4g0YLQuNC/0LBcclxuICAgICAgICAgICAgcmVzdWx0LnB1c2gobm9kZS5kYXRhKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGlmIChub2RlLmNoaWxkcmVuICYmIEFycmF5LmlzQXJyYXkobm9kZS5jaGlsZHJlbikpIHtcclxuICAgICAgICAgICAgbm9kZS5jaGlsZHJlbi5mb3JFYWNoKGNoaWxkID0+IHRyYXZlcnNlKGNoaWxkKSk7IC8vINCg0LXQutGD0YDRgdC40LLQvdC+INC+0LHRhdC+0LTQuNC8INC00LXRgtC10LlcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgdHJhdmVyc2UoX2RhdGEpO1xyXG4gICAgcmV0dXJuIHJlc3VsdDtcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZShtb2RlbCkge1xyXG4gICAgY29uc29sZS5sb2cobW9kZWwpXHJcbiAgICB0cnkge1xyXG4gICAgICAgIGF3YWl0IElEQi51cHNlcnRJdGVtUHJvcGVydGllcyhcIm1vZGVsc1wiLCBtb2RlbC51aWQsIEpTT04ucGFyc2Uoc3RyaW5naWZ5KHtcclxuICAgICAgICAgICAgbmFtZTogbW9kZWwubmFtZSxcclxuICAgICAgICAgICAgcGF0aHM6IG1vZGVsLnBhdGhzLFxyXG4gICAgICAgICAgICBwYXRoOiBtb2RlbC5wYXRocy5qb2luKCcuJyksXHJcbiAgICAgICAgICAgIHBhcmVudDogbW9kZWwucGFyZW50Py51aWQgfHwgbnVsbCxcclxuICAgICAgICAgICAgYWN0aW9uczogbW9kZWwuYWN0aW9ucyB8fCBbXSxcclxuICAgICAgICAgICAgcHJvcHM6IG1vZGVsLnByb3BzIHx8IHt9LFxyXG4gICAgICAgICAgICAvL2FyZ3M6bW9kZWwuYXJncyB8fCB7fSxcclxuICAgICAgICAgICAgcHJvcGVydGllczogbW9kZWwucHJvcGVydGllcyB8fCB7fSxcclxuICAgICAgICAgICAgc3RhdGVzOiBtb2RlbC5zdGF0ZXMsXHJcbiAgICAgICAgICAgIHR5cGU6IG1vZGVsLnR5cGUsXHJcbiAgICAgICAgICAgIHVpZDogbW9kZWwudWlkLFxyXG4gICAgICAgICAgICBhc3NldHM6IG1vZGVsLmFzc2V0cyB8fCBbXVxyXG4gICAgICAgIH0pKSlcclxuXHJcblxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmVPcHRpb25zKCkge1xyXG4gICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwicHJvamVjdFwiLCBcIm9wdGlvbnNcIiwgSlNPTi5wYXJzZShzdHJpbmdpZnkoX2RhdGEub3B0aW9ucykpKVxyXG59XHJcblxyXG5mdW5jdGlvbiBjb2xsZWN0KGxpc3QsIHNsaWRlLCBvdXRsaXN0ID0gW10pIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIGNvbnN0IGVsID0gbGlzdFtpXVxyXG4gICAgICAgIGlmIChlbC5pc0VsZW1lbnQgJiYgZWwuc3RhdGVzW3NsaWRlXSkge1xyXG4gICAgICAgICAgICBvdXRsaXN0LnB1c2goZWwpXHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoIWVsLmNoaWxkcmVuKSB7XHJcbiAgICAgICAgICAgIGNvbnNvbGUud2FybihcIk5vIGNoaWxkXCIpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChlbC5jaGlsZHJlbi5sZW5ndGgpIHtcclxuICAgICAgICAgICAgY29sbGVjdChlbC5jaGlsZHJlbiwgc2xpZGUsIG91dGxpc3QpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kU3RhdGVzKHNsaWRlVUlEKSB7XHJcbiAgICBjb25zdCBvdXRMaXN0ID0gW11cclxuICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlVUlELCBvdXRMaXN0KVxyXG4gICAgcmV0dXJuIG91dExpc3RcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gZXhwb3J0VG9Kc29uKCkge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtKU09OLnN0cmluZ2lmeShkYXRhKV0sIHsgdHlwZTogJ2FwcGxpY2F0aW9uL2pzb24nIH0pXHJcbiAgICBjb25zdCBmaWxlbmFtZSA9IGBwcm9qZWN0JHtfZGF0YS51aWR9Lmpzb25gO1xyXG4gICAgaWYgKHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlT3JPcGVuQmxvYikge1xyXG4gICAgICAgIHdpbmRvdy5uYXZpZ2F0b3IubXNTYXZlQmxvYihibG9iLCBmaWxlbmFtZSk7XHJcbiAgICB9XHJcbiAgICBlbHNlIHtcclxuICAgICAgICBjb25zdCBhID0gd2luZG93LmRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2EnKTtcclxuICAgICAgICBhLmhyZWYgPSB3aW5kb3cuVVJMLmNyZWF0ZU9iamVjdFVSTChibG9iKTtcclxuICAgICAgICBhLmRvd25sb2FkID0gZmlsZW5hbWU7XHJcbiAgICAgICAgYS5zdHlsZSA9ICdkaXNwbGF5OiBub25lJztcclxuICAgICAgICBhLmNsaWNrKCk7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGltcG9ydFByb2plY3QoKSB7XHJcbiAgICAvKipcclxuICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINC+0YLQutGA0YvRgtC40Y8g0LTQuNCw0LvQvtCz0LAg0LLRi9Cx0L7RgNCwINGE0LDQudC70LBcclxuICogQHBhcmFtIHtzdHJpbmd9IGFjY2VwdCAtINCi0LjQv9GLINGE0LDQudC70L7QsiDQtNC70Y8g0LLRi9Cx0L7RgNCwICjQv9C+INGD0LzQvtC70YfQsNC90LjRjiAuanNvbilcclxuICogQHJldHVybnMge1Byb21pc2U8RmlsZT59IFByb21pc2Ug0YEg0LLRi9Cx0YDQsNC90L3Ri9C8INGE0LDQudC70L7QvFxyXG4gKi9cclxuICAgIGZ1bmN0aW9uIG9wZW5GaWxlRGlhbG9nKGFjY2VwdCA9ICcuanNvbicpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUpID0+IHtcclxuICAgICAgICAgICAgLy8g0KHQvtC30LTQsNC10Lwg0L3QtdCy0LjQtNC40LzRi9C5IGlucHV0INGN0LvQtdC80LXQvdGCXHJcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaW5wdXQnKTtcclxuICAgICAgICAgICAgaW5wdXQudHlwZSA9ICdmaWxlJztcclxuICAgICAgICAgICAgaW5wdXQuYWNjZXB0ID0gYWNjZXB0O1xyXG4gICAgICAgICAgICBpbnB1dC5zdHlsZS5kaXNwbGF5ID0gJ25vbmUnO1xyXG5cclxuICAgICAgICAgICAgLy8g0J7QsdGA0LDQsdCw0YLRi9Cy0LDQtdC8INCy0YvQsdC+0YAg0YTQsNC50LvQsFxyXG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5wdXQuZmlsZXMgJiYgaW5wdXQuZmlsZXNbMF0pIHtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGlucHV0LmZpbGVzWzBdKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICB9KTtcclxuXHJcbiAgICAgICAgICAgIC8vINCU0L7QsdCw0LLQu9GP0LXQvCBpbnB1dCDQsiBET00g0Lgg0YLRgNC40LPQs9C10YDQuNC8INC60LvQuNC6XHJcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoaW5wdXQpO1xyXG4gICAgICAgICAgICBpbnB1dC5jbGljaygpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIC8qKlxyXG4gICAgICog0KTRg9C90LrRhtC40Y8g0LTQu9GPINGH0YLQtdC90LjRjyDQuCDQv9Cw0YDRgdC40L3Qs9CwIEpTT04g0YTQsNC50LvQsFxyXG4gICAgICogQHBhcmFtIHtGaWxlfSBmaWxlIC0g0J7QsdGK0LXQutGCINGE0LDQudC70LBcclxuICAgICAqIEByZXR1cm5zIHtQcm9taXNlPG9iamVjdD59IFByb21pc2Ug0YEg0YDQsNGB0L/QsNGA0YHQtdC90L3Ri9C80Lgg0LTQsNC90L3Ri9C80LggSlNPTlxyXG4gICAgICovXHJcbiAgICBmdW5jdGlvbiBwYXJzZUpzb25GaWxlKGZpbGUpIHtcclxuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xyXG4gICAgICAgICAgICBpZiAoIWZpbGUubmFtZS5lbmRzV2l0aCgnLmpzb24nKSkge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0JLRi9Cx0LXRgNC40YLQtSDRhNCw0LnQuyDRgSDRgNCw0YHRiNC40YDQtdC90LjQtdC8IC5qc29uJykpO1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICBjb25zdCByZWFkZXIgPSBuZXcgRmlsZVJlYWRlcigpO1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLm9ubG9hZCA9IChldmVudCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgICAgICBjb25zdCBqc29uRGF0YSA9IEpTT04ucGFyc2UoZXZlbnQudGFyZ2V0LnJlc3VsdCk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShqc29uRGF0YSk7XHJcbiAgICAgICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9Cw0YDRgdC40L3Qs9CwIEpTT046ICcgKyBlcnJvci5tZXNzYWdlKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH07XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25lcnJvciA9ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoJ9Ce0YjQuNCx0LrQsCDRh9GC0LXQvdC40Y8g0YTQsNC50LvQsCcpKTtcclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5yZWFkQXNUZXh0KGZpbGUpO1xyXG4gICAgICAgIH0pO1xyXG4gICAgfVxyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IG9wZW5GaWxlRGlhbG9nKCk7XHJcbiAgICAgICAgY29uc3QganNvbkRhdGEgPSBhd2FpdCBwYXJzZUpzb25GaWxlKGZpbGUpO1xyXG4gICAgICAgIGxldCBtZXJnZWQgPSBmYWxzZVxyXG4gICAgICAgIGNvbnN0IGltcG9ydExpc3QgPSByZWFjdGl2ZSh7XHJcbiAgICAgICAgICAgIGFjdGlvbnM6IHt9LFxyXG4gICAgICAgICAgICBhc3NldHM6IHt9LFxyXG4gICAgICAgICAgICBlbGVtZW50czoge30sXHJcbiAgICAgICAgICAgIHNsaWRlczoge30sXHJcbiAgICAgICAgICAgIG1vZHVsZXM6IHt9XHJcbiAgICAgICAgfSlcclxuXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcImFzc2V0c1wiLCBqc29uRGF0YS5hc3NldHMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kZWxzXCIsIGpzb25EYXRhLm1vZGVscylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZHVsZXNcIiwganNvbkRhdGEubW9kdWxlcylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJwcm9qZWN0XCIsIGpzb25EYXRhLnByb2plY3QpXHJcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgLy91cmwuc2VhcmNoUGFyYW1zLnNldCgncHJvamVjdCcsIHByb2plY3ROYW1lKTtcclxuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG5cclxuICAgICAgICAvKkFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICAgICAgaGVhZGVyOiB7XHJcbiAgICAgICAgICAgICAgICB2YWx1ZTogYNCY0LzQv9C+0YDRgmAsXHJcbiAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkltcG9ydGVyXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgICAgIHByb2plY3Q6IGpzb25EYXRhXHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgb3B0aW9uczogKHYpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbWVyZ2VkID0gdi5tZXJnZVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAgY2hhbmdlbGlzdDogKGxpc3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgT2JqZWN0LmtleXMobGlzdCkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGltcG9ydExpc3Rba10gPSBsaXN0W2tdXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgICAgIGJ1dHRvbnM6IFtcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcItCY0LzQv9C+0YDRglwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBjbGFzczogXCJzZWNvbmRhcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYWN0aW9uc1wiLCBqc29uRGF0YS5hY3Rpb25zKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcIm1vZGVsc1wiLCBqc29uRGF0YS5tb2RlbHMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJzbGlkZXNcIiwganNvbkRhdGEuc2xpZGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kdWxlc1wiLCBqc29uRGF0YS5tb2R1bGVzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwicHJvamVjdFwiLCBqc29uRGF0YS5wcm9qZWN0KVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL3VybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwudG9TdHJpbmcoKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0J7RgtC80LXQvdCwXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIF1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0pKi9cclxuXHJcbiAgICAgICAgLypjb25zdCBrZXkgPSBgcHJvamVjdCR7RGF0ZS5ub3coKX1gXHJcblxyXG4gICAgICAgIGF3YWl0IElEQi5Jbml0KGtleSwgW1wicHJvamVjdHNcIiwgXCJhc3NldHNcIiwgXCJlbGVtZW50c1wiLCBcInNsaWRlc1wiLCBcImFjdGlvbnNcIiwgXCJtb2R1bGVzXCJdLCBcInVpZFwiKVxyXG5cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLmFzc2V0cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmFzc2V0c1tpXVxyXG4gICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbShcImFzc2V0c1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5lbGVtZW50cy5sZW5ndGg7aSsrKXtcclxuICAgICAgICAgICAgY29uc3QgdiA9IGpzb25EYXRhLmVsZW1lbnRzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwiZWxlbWVudHNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuc2xpZGVzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuc2xpZGVzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwic2xpZGVzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH0qL1xyXG4gICAgICAgIHJldHVybiBqc29uRGF0YTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J7RiNC40LHQutCwOicsIGVycm9yLm1lc3NhZ2UpO1xyXG4gICAgICAgIHRocm93IGVycm9yO1xyXG4gICAgfVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBwbGF5KHRhcmdldCA9ICdkYXRhJykge1xyXG4gICAgY29uc3QgZGF0YSA9IGF3YWl0IElEQi5leHBvcnRUb0pzb24oX2RhdGEudWlkKVxyXG4gICAgY29uc29sZS5sb2coZGF0YSlcclxuICAgIGxldCBsaW5rID0gYC4uL3BsYXllcj9zcmM9JHt0YXJnZXR9YFxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ2RiJylcclxuICAgICAgICBsaW5rICs9IGAmZGI9JHtfZGF0YS51aWR9YFxyXG4gICAgY29uc3QgcGxheWVyV2luZG93ID0gd2luZG93Lm9wZW4obGluaywgJ1BsYXllcicpO1xyXG5cclxuICAgIGlmICghcGxheWVyV2luZG93KSB7XHJcbiAgICAgICAgY29uc29sZS5lcnJvcign0J3QtSDRg9C00LDQu9C+0YHRjCDQvtGC0LrRgNGL0YLRjCDQvtC60L3Qvi4g0JLQvtC30LzQvtC20L3Qviwg0LHRgNCw0YPQt9C10YAg0LfQsNCx0LvQvtC60LjRgNC+0LLQsNC7IHBvcC11cC4nKTtcclxuICAgICAgICByZXR1cm47XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKHRhcmdldCA9PT0gJ2RhdGEnKSB7XHJcbiAgICAgICAgLy8g0KTRg9C90LrRhtC40Y8g0LTQu9GPINC/0L7QstGC0L7RgNC90YvRhSDQv9C+0L/Ri9GC0L7QuiDQvtGC0L/RgNCw0LLQutC4XHJcbiAgICAgICAgY29uc3Qgc2VuZERhdGEgPSBhc3luYyAoYXR0ZW1wdCA9IDApID0+IHtcclxuICAgICAgICAgICAgdHJ5IHtcclxuICAgICAgICAgICAgICAgIC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0L3QtSDQt9Cw0LrRgNGL0YLQviDQu9C4INC+0LrQvdC+XHJcbiAgICAgICAgICAgICAgICBpZiAocGxheWVyV2luZG93LmNsb3NlZCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0LrQvdC+INC/0LvQtdC10YDQsCDQsdGL0LvQviDQt9Cw0LrRgNGL0YLQvicpO1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAvLyDQn9GL0YLQsNC10LzRgdGPINC+0YLQv9GA0LDQstC40YLRjCDQtNCw0L3QvdGL0LVcclxuICAgICAgICAgICAgICAgIHBsYXllcldpbmRvdy5wb3N0TWVzc2FnZSh7XHJcbiAgICAgICAgICAgICAgICAgICAgdHlwZTogJ0lOSVRfREFUQScsXHJcbiAgICAgICAgICAgICAgICAgICAgcGF5bG9hZDogZGF0YVxyXG4gICAgICAgICAgICAgICAgfSwgd2luZG93LmxvY2F0aW9uLm9yaWdpbik7IC8vINCY0YHQv9C+0LvRjNC30YPQtdC8INC60L7QvdC60YDQtdGC0L3Ri9C5IG9yaWdpbiDQstC80LXRgdGC0L4gJyonXHJcbiAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LAg0L/RgNC4INC+0YLQv9GA0LDQstC60LUg0LTQsNC90L3Ri9GFOicsIGVycm9yKTtcclxuICAgICAgICAgICAgICAgIGlmIChhdHRlbXB0IDwgNSkgeyAvLyDQnNCw0LrRgdC40LzRg9C8IDUg0L/QvtC/0YvRgtC+0LpcclxuICAgICAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHNlbmREYXRhKGF0dGVtcHQgKyAxKSwgNTAwICogKGF0dGVtcHQgKyAxKSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9O1xyXG5cclxuICAgICAgICAvLyDQn9C10YDQstCw0Y8g0L/QvtC/0YvRgtC60LAg0L7RgtC/0YDQsNCy0LrQuCDRgSDQvdC10LHQvtC70YzRiNC+0Lkg0LfQsNC00LXRgNC20LrQvtC5XHJcbiAgICAgICAgc2V0VGltZW91dChzZW5kRGF0YSwgMzAwMCk7XHJcbiAgICB9XHJcblxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBoYW5kbGVBc3NldChkYXRhKSB7XHJcbiAgICBpZiAoIUFwcC5zbGlkZXMuYWN0aXZlZCkge1xyXG4gICAgICAgIEFwcC50b2FzdHMuYWRkKHtcclxuICAgICAgICAgICAgbWVzc2FnZTogYNCd0LXQvtCx0YXQvtC00LjQvNC+INGB0L7Qt9C00LDRgtGMINGB0LvQsNC50LRgXHJcbiAgICAgICAgfSlcclxuICAgICAgICByZXR1cm5cclxuICAgIH1cclxuICAgIGlmIChkYXRhLnNvdXJjZS50eXBlID09PSBcIm1vZGVsXCIpIHtcclxuICAgICAgICBjb25zdCB1aWQgPSAoYCR7ZGF0YS5zb3VyY2UubmFtZSB8fCBkYXRhLnNvdXJjZS51aWR9JHtEYXRlLm5vdygpfWApLnJlcGxhY2UoJy4nLCAnJylcclxuICAgICAgICBjb25zb2xlLmxvZyhkYXRhLnNvdXJjZS5yZXNvdXJjZSlcclxuICAgICAgICBjb25zdCBlbCA9IGF3YWl0IEFwcC5wcm9qZWN0LmNyZWF0ZUVsZW1lbnQoe1xyXG4gICAgICAgICAgICB0eXBlOiBcIk9iamVjdDNEXCIsXHJcbiAgICAgICAgICAgIHVpZCxcclxuICAgICAgICAgICAgcGFyZW50OiBkYXRhLnRhcmdldD8udWlkLFxyXG4gICAgICAgICAgICBhc3NldHM6IFt7XHJcbiAgICAgICAgICAgICAgICB1aWQ6IGRhdGEuc291cmNlLnVpZFxyXG4gICAgICAgICAgICB9XSxcclxuICAgICAgICAgICAgcGF0aHM6IFsuLi5kYXRhLnRhcmdldD8ucGF0aHMgfHwgW10sIHVpZF1cclxuICAgICAgICB9LCBkYXRhLnRhcmdldClcclxuICAgICAgICBhd2FpdCBBcHAucHJvamVjdC5zYXZlKGVsKVxyXG4gICAgICAgIEFwcC5zZWxlY3Rpb24uc2VsZWN0KGVsKVxyXG4gICAgfVxyXG59XHJcblxyXG5mdW5jdGlvbiBTaG93UHJvamVjdE9wdGlvbnMoKSB7XHJcbiAgICBjb25zdCBwcm9wcyA9IHJlYWN0aXZlKHtcclxuICAgICAgICBtb2RlbDogX2RhdGEub3B0aW9ucyxcclxuICAgICAgICBwcm9wZXJ0aWVzOiBbXHJcbiAgICAgICAgICAgIC8qe1xyXG4gICAgICAgICAgICAgICAgbGFiZWw6IFwiTmFtZVwiLFxyXG4gICAgICAgICAgICAgICAgcHJvcDogXCJuYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiTGFiZWxFZGl0XCJcclxuICAgICAgICAgICAgfSwqL1xyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJTaG93IHNsaWRlc1wiLFxyXG4gICAgICAgICAgICAgICAgcHJvcDogXCJzaG93c2xpZGVzXCIsXHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiQm9vbEVkaXRcIlxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJGdWxsc2NyZWVuXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcImZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJCb29sRWRpdFwiXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICBdLFxyXG4gICAgICAgIGhlYWQ6IHtcclxuICAgICAgICAgICAgdGl0bGU6IFwiXCJcclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIGNvbnN0IGNhbmNlbEJ1dHRvbiA9IHtcclxuICAgICAgICBsYWJlbDogXCJDbG9zZVwiLFxyXG4gICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGNvbnN0IGJ1dHRvbnMgPSByZWFjdGl2ZShbXHJcbiAgICAgICAgY2FuY2VsQnV0dG9uXHJcbiAgICBdKVxyXG5cclxuICAgIEFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgdmFsdWU6IGBQcm9qZWN0IG9wdGlvbnNgLFxyXG4gICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogXCJNb2RhbEZvcm1cIixcclxuICAgICAgICAgICAgcHJvcHMsXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZTptb2RlbCc6IChrZXksIHZhbHVlKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgc2F2ZU9wdGlvbnMoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uc1xyXG4gICAgICAgIH1cclxuICAgIH0pXHJcbn1cclxuXHJcbmNvbnN0IF9kYXRhID0gcmVhY3RpdmUoe1xyXG4gICAgYWRkKGVsKSB7XHJcbiAgICAgICAgX2RhdGEuY2hpbGRyZW4ucHVzaChlbClcclxuICAgIH0sXHJcbiAgICB1aWQ6IG51bGwsIGluaXQsXHJcbiAgICBkYXRhOiB7fSxcclxuICAgIGxvYWQsIGZpbmRTdGF0ZXMsIGdldFN0YXRlLCByZW1vdmUsIGhhbmRsZUFzc2V0LFxyXG4gICAgYWRkRWxlbWVudCwgY3JlYXRlRWxlbWVudCwgc2F2ZSwgZmluZCwgZmluZE9iamVjdHNCeVR5cGUsXHJcbiAgICBleHBvcnRUb0pzb24sIGltcG9ydFByb2plY3QsIHBsYXksXHJcbiAgICBjaGlsZHJlbjogW10sXHJcbiAgICBvbjogX2VtbWl0ZXIub24uYmluZChfZW1taXRlciksXHJcbiAgICBvZmY6IF9lbW1pdGVyLm9mZi5iaW5kKF9lbW1pdGVyKSxcclxuICAgIG9wdGlvbnM6IHtcclxuICAgICAgICBmdWxsc2NyZWVuOiBmYWxzZSxcclxuICAgICAgICBzaG93c2xpZGVzOiB0cnVlXHJcbiAgICB9LFxyXG4gICAgaW5mbzoge1xyXG4gICAgICAgIG5hbWU6IFwiUHJvamVjdFwiXHJcbiAgICB9XHJcbn0pXHJcblxyXG5BcHAuT24oXCJpbml0XCIsICgpID0+IHtcclxuXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkltcG9ydGVyXCIsIEltcG9ydGVyKVxyXG4gICAgd2luZG93LnZ1ZS5jb21wb25lbnQoXCJFbGVtZW50QWRkXCIsIEVsZW1lbnRBZGQpXHJcblxyXG4gICAgQXBwLnNsaWRlcy5vbihcImNoYW5nZVwiLCAoc2xpZGUpID0+IHtcclxuICAgICAgICBjb25zdCBvdXRMaXN0ID0gW11cclxuICAgICAgICBjb2xsZWN0KF9kYXRhLmNoaWxkcmVuLCBzbGlkZSwgb3V0TGlzdClcclxuICAgICAgICAvL2FjdGl2YXRlcyhfZGF0YS5jaGlsZHJlbiwgc2xpZGUudWlkKVxyXG4gICAgfSlcclxuXHJcbiAgICBBcHAuc2xpZGVzLm9uKFwicmVtb3ZlXCIsICh1aWQpID0+IHtcclxuICAgICAgICBjb25zdCBvdXRMaXN0ID0gW11cclxuICAgICAgICBjb2xsZWN0KF9kYXRhLmNoaWxkcmVuLCB1aWQsIG91dExpc3QpXHJcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBvdXRMaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgICAgIGRlbGV0ZSBvdXRMaXN0W2ldLnN0YXRlc1t1aWRdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBBcHAubWVudS5oaWVyYXJoeS5saXN0LnB1c2goe1xyXG4gICAgICAgIGljb246IFwiZXF1YWxpemVyMlwiLFxyXG4gICAgICAgIHRvb2x0aXA6IFwiUHJvamVjdCBvcHRpb25zXCIsXHJcbiAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICBTaG93UHJvamVjdE9wdGlvbnMoKVxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgQXBwLm1lbnUuYWRkTWVudSgnYXBwJyxcclxuICAgICAgICB7XHJcbiAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0JyxcclxuICAgICAgICAgICAgaWNvbjogJycsXHJcbiAgICAgICAgICAgIHRleHQ6ICdQcm9qZWN0JyxcclxuICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICBjaGlsZHJlbjogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmNyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2ZpbGUtZW1wdHknLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdDcmVhdGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLmNyZWF0ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5vcGVuJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnbWVudScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ09wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiT3BlbiBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMub3BlbigpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5leHBvcnQnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdkb3dubG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0V4cG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJFeHBvcnQgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3QuZXhwb3J0VG9Kc29uKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ3VwbG9hZCcsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0ltcG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgbGluazogJyMnLFxyXG4gICAgICAgICAgICAgICAgICAgIHRvb2x0aXA6IFwiSW1wb3J0IHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0LmltcG9ydFByb2plY3QoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QucmVtb3ZlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnYmluJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRGVsZXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5yZW1vdmUoKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgXVxyXG4gICAgICAgIH1cclxuICAgIClcclxufSlcclxuXHJcblxyXG5leHBvcnQgZGVmYXVsdCBfZGF0YSIsIl9fd2VicGFja19yZXF1aXJlX18uaCA9ICgpID0+IChcIjJkMDc4OTM3YmVlYzY2NWI4ZDFhXCIpIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5mZWRlcmF0aW9uLmluaXRPcHRpb25zLnNoYXJlZCA9IHtcdFwiQHJlbmVvcy9hcHBcIjogW3tcdHZlcnNpb246IFwiMS4wLjZcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvQHJlbmVvcy9hcHAvaW5kZXguanMgKi8gXCIuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJyZXF1aXJlZFZlcnNpb25cIjpcIjEuMC42XCIsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidGhyZWVcIjogW3tcdHZlcnNpb246IFwiMC4xODAuMFwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanMgKi8gXCIuL25vZGVfbW9kdWxlcy90aHJlZS9idWlsZC90aHJlZS5tb2R1bGUuanNcIikpKSxcblx0XHRzY29wZTogW1wiZGVmYXVsdFwiXSxcblx0XHRzaGFyZUNvbmZpZzoge1wiZWFnZXJcIjp0cnVlLFwic2luZ2xldG9uXCI6dHJ1ZSxcImxheWVyXCI6bnVsbH19LF0sXHRcInZ1ZVwiOiBbe1x0dmVyc2lvbjogXCIzLjUuMjJcIixcblx0XHRnZXQ6ICgpID0+ICgoKSA9PiAoX193ZWJwYWNrX3JlcXVpcmVfXygvKiEgLi9ub2RlX21vZHVsZXMvdnVlL2Rpc3QvdnVlLnJ1bnRpbWUuZXNtLWJ1bmRsZXIuanMgKi8gXCIuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSx9XG5fX3dlYnBhY2tfcmVxdWlyZV9fLlMgPSB7fTtcbnZhciBpbml0UHJvbWlzZXMgPSB7fTtcbnZhciBpbml0VG9rZW5zID0ge307XG5fX3dlYnBhY2tfcmVxdWlyZV9fLkkgPSAobmFtZSwgaW5pdFNjb3BlKSA9PiB7XG5cdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uYnVuZGxlclJ1bnRpbWUuSSh7XHRzaGFyZVNjb3BlTmFtZTogbmFtZSxcblx0XHR3ZWJwYWNrUmVxdWlyZTogX193ZWJwYWNrX3JlcXVpcmVfXyxcblx0XHRpbml0UHJvbWlzZXM6IGluaXRQcm9taXNlcyxcblx0XHRpbml0VG9rZW5zOiBpbml0VG9rZW5zLFxuXHRcdGluaXRTY29wZTogaW5pdFNjb3BlLFxuXHR9KVxufTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=