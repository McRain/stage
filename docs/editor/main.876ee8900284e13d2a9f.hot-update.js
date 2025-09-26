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
/******/ 	__webpack_require__.h = () => ("0a9eaaafadbf91a2d434")
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QWdCO1VBQ3RHO1VBQ0E7VUFDQSxnQkFBZ0IsNENBQTRDLGNBQWM7VUFDMUU7VUFDQTtVQUNBLGdCQUFnQiw0Q0FBNEM7VUFDNUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSwwREFBMEQ7VUFDMUQ7VUFDQTtVQUNBO1VBQ0E7VUFDQSxFQUFFO1VBQ0YsRSIsInNvdXJjZXMiOlsid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci8uL3NyYy9hcHAvcHJvamVjdC5qcyIsIndlYnBhY2s6Ly9AcmVuZW9zL3NsaWRlci5lZGl0b3Ivd2VicGFjay9ydW50aW1lL2dldEZ1bGxIYXNoIiwid2VicGFjazovL0ByZW5lb3Mvc2xpZGVyLmVkaXRvci93ZWJwYWNrL3J1bnRpbWUvc2hhcmluZyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyByZWFjdGl2ZSwgY29tcHV0ZWQgfSBmcm9tICd2dWUnXHJcbmltcG9ydCBJREIgZnJvbSBcIkAvaWRiLmpzXCJcclxuaW1wb3J0IEFwcE1vZCBmcm9tIFwiQHJlbmVvcy9hcHBcIlxyXG5jb25zdCBBcHAgPSBBcHBNb2QuZGVmYXVsdCB8fCBBcHBNb2RcclxuaW1wb3J0IEV2ZW50RW1taXRlciBmcm9tIFwiLi4vZXZlbnRlbWl0dGVyLmpzXCJcclxuY29uc3QgX2VtbWl0ZXIgPSBuZXcgRXZlbnRFbW1pdGVyKClcclxuaW1wb3J0IEVsZW1lbnRBZGQgZnJvbSBcIkAvY29tcG9uZW50cy9tb2RhbHMvZWxlbWVudGFkZC52dWVcIlxyXG5cclxuaW1wb3J0IEltcG9ydGVyIGZyb20gXCJAL2NvbXBvbmVudHMvbW9kYWxzL2ltcG9ydGVyLnZ1ZVwiXHJcblxyXG5pbXBvcnQgeyBzdHJpbmdpZnkgfSBmcm9tIFwiQC90b29scy5qc1wiXHJcblxyXG5sZXQgX2ZhY3RvcnlcclxuXHJcbmZ1bmN0aW9uIGluaXQocHJvamVjdERhdGEpIHtcclxuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgcHJvamVjdERhdGEubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICBjb25zdCB2ID0gcHJvamVjdERhdGFbaV1cclxuICAgICAgICBfZGF0YS5kYXRhW3YudWlkXSA9IHZcclxuICAgIH1cclxuICAgIF9kYXRhLm9wdGlvbnMgPSBfZGF0YS5kYXRhLm9wdGlvbnMgfHwge1xyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHNob3dzbGlkZXM6IHRydWVcclxuICAgIH1cclxuICAgIF9kYXRhLmluZm8gPSBfZGF0YS5kYXRhLmluZm8gfHwge1xyXG4gICAgICAgIG5hbWU6IFwiUHJvamVjdFwiXHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGxvYWQobW9kZWxzRGF0YSkge1xyXG4gICAgX2ZhY3RvcnkgPSBBcHAuZW5naW5lLmdldEZhY3RvcnkoKVxyXG4gICAgY29uc3QgcGFyc2VkID0ge31cclxuICAgIGZvciAobGV0IGkgPSBtb2RlbHNEYXRhLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XHJcbiAgICAgICAgY29uc3QgbW9kZWxEYXRhID0gbW9kZWxzRGF0YVtpXVxyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgYnVpbGQobW9kZWxzRGF0YSwgbW9kZWxEYXRhLCBwYXJzZWQpXHJcbiAgICAgICAgY29uc3QgaW5kZXggPSBtb2RlbHNEYXRhLmZpbmRJbmRleChzID0+IHMudWlkID09PSBlbC51aWQpXHJcbiAgICAgICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICAgICAgbW9kZWxzRGF0YS5zcGxpY2UoaW5kZXgsIDEpXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59XHJcblxyXG5cclxuZnVuY3Rpb24gZ2V0U3RhdGUoZWxlbWVudCwgc2xpZGUpIHtcclxuICAgIGlmICghZWxlbWVudC5zdGF0ZXNbc2xpZGVdKSB7XHJcbiAgICAgICAgZWxlbWVudC5zdGF0ZXNbc2xpZGVdID0ge1xyXG4gICAgICAgICAgICBhY3Rpb25zOiBbXVxyXG4gICAgICAgIH1cclxuICAgICAgICBfZW1taXRlci5lbWl0KCdzdGF0ZWFkZCcsIHNsaWRlLCBlbGVtZW50LnBhdGhzKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIGVsZW1lbnQuc3RhdGVzW3NsaWRlXVxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBidWlsZChsaXN0LCBkYXRhLCBwYXJzZWQpIHtcclxuICAgIGlmICghZGF0YSlcclxuICAgICAgICByZXR1cm5cclxuICAgIGlmIChwYXJzZWRbZGF0YS51aWRdKVxyXG4gICAgICAgIHJldHVybiBwYXJzZWRbZGF0YS51aWRdXHJcbiAgICBjb25zdCBwYXJlbnRJZCA9IGRhdGEucGFyZW50XHJcbiAgICBsZXQgcGFyZW50ID0gcGFyc2VkW3BhcmVudElkXVxyXG4gICAgaWYgKCFwYXJlbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBhd2FpdCBidWlsZChsaXN0LCBsaXN0LmZpbmQobCA9PiBsLnVpZCA9PT0gcGFyZW50SWQpLCBwYXJzZWQpXHJcbiAgICB9XHJcbiAgICB0cnkge1xyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgY3JlYXRlRWxlbWVudChkYXRhLCBwYXJlbnQpXHJcbiAgICAgICAgcGFyc2VkW2VsLnVpZF0gPSBlbFxyXG4gICAgICAgIHJldHVybiBlbFxyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLndhcm4oZXJyb3IpXHJcbiAgICB9XHJcbn1cclxuXHJcbi8qKlxyXG4gKiDQn9C+0LrQsNC30YvQstCw0LXRgtGB0Y8g0YTQvtGA0LzQsCDQstGL0LHQvtGA0LAg0YLQuNC/0LAg0Y3Qu9C10LzQtdC90YLQsFxyXG4gKi9cclxuYXN5bmMgZnVuY3Rpb24gYWRkRWxlbWVudChzZWxlY3RlZCkge1xyXG4gICAgY29uc3QgbmV3RWxlbWVudERhdGEgPSB7XHJcbiAgICAgICAgbmFtZTogXCJOZXcgRWxlbWVudFwiLCB0eXBlOiBcIkdyb3VwXCJcclxuICAgIH1cclxuICAgIG5ld0VsZW1lbnREYXRhLnVpZCA9IGBFbGVtZW50JHtEYXRlLm5vdygpfWBcclxuICAgIG5ld0VsZW1lbnREYXRhLnBhdGhzID0gW11cclxuICAgIGxldCBwYXJlbnRcclxuICAgIGlmIChzZWxlY3RlZCAmJiBzZWxlY3RlZC5pc0VsZW1lbnQpIHtcclxuICAgICAgICBwYXJlbnQgPSBzZWxlY3RlZFxyXG4gICAgICAgIG5ld0VsZW1lbnREYXRhLnBhdGhzLnB1c2goLi4uc2VsZWN0ZWQucGF0aHMpXHJcbiAgICB9XHJcbiAgICBuZXdFbGVtZW50RGF0YS5wYXRocy5wdXNoKG5ld0VsZW1lbnREYXRhLnVpZClcclxuICAgIG5ld0VsZW1lbnREYXRhLnBhdGggPSBuZXdFbGVtZW50RGF0YS5wYXRocy5qb2luKCcuJylcclxuICAgIEFwcC5tb2RhbC5vcGVuKHtcclxuICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgdmFsdWU6IGBBZGQgJHtwYXJlbnQgPyBcIiBjaGlsZCBlbGVtZW50IHRvIFwiICsgcGFyZW50Lm5hbWUgfHwgcGFyZW50LnVpZCA6IFwiIG5ldyBlbGVtZW50IHRvIHNjZW5lXCJ9YCxcclxuICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH0sXHJcbiAgICAgICAgY29udGVudDoge1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IFwiRWxlbWVudEFkZFwiLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgICAgcGFyZW50OiBzZWxlY3RlZCxcclxuICAgICAgICAgICAgICAgIG1vZGVsVmFsdWU6IG5ld0VsZW1lbnREYXRhXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGV2ZW50czoge1xyXG4gICAgICAgICAgICAgICAgJ3VwZGF0ZTptb2RlbFZhbHVlJzogKHZhbCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIE9iamVjdC5rZXlzKHZhbCkuZm9yRWFjaChrID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3RWxlbWVudERhdGFba10gPSB2YWxba11cclxuICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSxcclxuICAgICAgICBmb290ZXI6IHtcclxuICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkFkZFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29uc3QgZWwgPSBhd2FpdCBjcmVhdGVFbGVtZW50KG5ld0VsZW1lbnREYXRhLCBwYXJlbnQpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChlbCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgc2F2ZShlbClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG5cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBcIkNhbmNlbFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInByaW1hcnlcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gY3JlYXRlRWxlbWVudChkYXRhLCBwYXJlbnQpIHtcclxuICAgIGNvbnN0IGVsID0gYXdhaXQgX2ZhY3RvcnkuQnVpbGRFbGVtZW50KGRhdGEsIHBhcmVudCB8fCBBcHAuZW5naW5lLmdldE1hbmFnZXIoKS5Sb290KVxyXG4gICAgaWYgKCFlbCkge1xyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgZWwubmFtZSA9IGRhdGEubmFtZSB8fCBkYXRhLnVpZFxyXG4gICAgZWwuc3RhdGVzID0gZGF0YS5zdGF0ZXMgfHwge31cclxuICAgIGVsLnByb3BlcnRpZXMgPSBkYXRhLnByb3BlcnRpZXMgfHwge31cclxuICAgIGVsLmFjdGlvbnMgPSBkYXRhLmFjdGlvbnMgfHwgW11cclxuICAgIGVsLnBhdGhzID0gZGF0YS5wYXRocyA/PyBlbC5wYXRoc1xyXG4gICAgZWwucGF0aCA9IGVsLnBhdGhzLmpvaW4oJy4nKVxyXG4gICAgY29uc3QgZWxlbWVudCA9IHJlYWN0aXZlKGVsKVxyXG4gICAgY29uc3QgcCA9IHBhcmVudCB8fCBfZGF0YVxyXG4gICAgcC5hZGQoZWxlbWVudCkvL9CU0L7QsdCw0LLQu9C10L3QuNC1INCyIERhdGFcclxuICAgIF9lbW1pdGVyLmVtaXQoJ2NyZWF0ZScsIGVsZW1lbnQpXHJcbiAgICByZXR1cm4gZWxlbWVudFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiByZW1vdmUocGF0aHMpIHtcclxuICAgIGxldCBwYXJlbnQgPSBfZGF0YVxyXG4gICAgbGV0IHRhcmdldCA9IF9kYXRhXHJcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHBhdGhzLmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgcGFyZW50ID0gdGFyZ2V0XHJcbiAgICAgICAgdGFyZ2V0ID0gcGFyZW50LmNoaWxkcmVuLmZpbmQoZWwgPT4gZWwudWlkID09PSBwYXRoc1tpXSlcclxuICAgIH1cclxuICAgIGlmIChBcHAuc2VsZWN0aW9uLnNlbGVjdGVkID09PSB0YXJnZXQpIHtcclxuICAgICAgICBBcHAuc2VsZWN0aW9uLnNlbGVjdChudWxsKVxyXG4gICAgfVxyXG4gICAgY29uc3QgaW5kZXggPSBwYXJlbnQuY2hpbGRyZW4uZmluZEluZGV4KHQgPT4gdCA9PT0gdGFyZ2V0KVxyXG4gICAgaWYgKGluZGV4ID49IDApIHtcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRhcmdldC5jaGlsZHJlbi5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBjb25zdCBjaGlsZCA9IHRhcmdldC5jaGlsZHJlbltpXVxyXG4gICAgICAgICAgICBpZiAoY2hpbGQuaXNFbGVtZW50KSB7XHJcbiAgICAgICAgICAgICAgICByZW1vdmUoY2hpbGQucGF0aHMpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgcGFyZW50LmNoaWxkcmVuLnNwbGljZShpbmRleCwgMSlcclxuICAgICAgICBpZiAodGFyZ2V0LnBhcmVudCkge1xyXG4gICAgICAgICAgICB0YXJnZXQucGFyZW50LnJlbW92ZSh0YXJnZXQpXHJcbiAgICAgICAgfVxyXG4gICAgICAgIElEQi5kZWxldGVJdGVtKFwibW9kZWxzXCIsIHRhcmdldC51aWQpXHJcbiAgICAgICAgX2ZhY3RvcnkuUmVtb3ZlTW9kZWwodGFyZ2V0LnVpZClcclxuICAgICAgICBfZW1taXRlci5lbWl0KFwicmVtb3ZlXCIsIHBhdGhzLCB0YXJnZXQpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmQocGF0aHMpIHtcclxuICAgIGxldCB0YXJnZXQgPSBfZGF0YVxyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBwYXRocy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgIHRhcmdldCA9IHRhcmdldC5jaGlsZHJlbi5maW5kKGMgPT4gYy51aWQgPT09IHBhdGhzW2ldKVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRhcmdldFxyXG59XHJcblxyXG5mdW5jdGlvbiBmaW5kT2JqZWN0c0J5VHlwZSh0eXBlKSB7XHJcbiAgICBjb25zdCByZXN1bHQgPSBbXTtcclxuXHJcbiAgICBmdW5jdGlvbiB0cmF2ZXJzZShub2RlKSB7XHJcbiAgICAgICAgaWYgKG5vZGUgaW5zdGFuY2VvZiB0eXBlKSB7IC8vINCf0YDQvtCy0LXRgNGP0LXQvCwg0Y/QstC70Y/QtdGC0YHRjyDQu9C4INC+0LHRitC10LrRgiDRjdC60LfQtdC80L/Qu9GP0YDQvtC8INGD0LrQsNC30LDQvdC90L7Qs9C+INGC0LjQv9CwXHJcbiAgICAgICAgICAgIHJlc3VsdC5wdXNoKG5vZGUuZGF0YSk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBpZiAobm9kZS5jaGlsZHJlbiAmJiBBcnJheS5pc0FycmF5KG5vZGUuY2hpbGRyZW4pKSB7XHJcbiAgICAgICAgICAgIG5vZGUuY2hpbGRyZW4uZm9yRWFjaChjaGlsZCA9PiB0cmF2ZXJzZShjaGlsZCkpOyAvLyDQoNC10LrRg9GA0YHQuNCy0L3QviDQvtCx0YXQvtC00LjQvCDQtNC10YLQtdC5XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIHRyYXZlcnNlKF9kYXRhKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHNhdmUobW9kZWwpIHtcclxuICAgIHRyeSB7XHJcbiAgICAgICAgYXdhaXQgSURCLnVwc2VydEl0ZW1Qcm9wZXJ0aWVzKFwibW9kZWxzXCIsIG1vZGVsLnVpZCwgSlNPTi5wYXJzZShzdHJpbmdpZnkoe1xyXG4gICAgICAgICAgICBuYW1lOiBtb2RlbC5uYW1lLFxyXG4gICAgICAgICAgICBwYXRoczogbW9kZWwucGF0aHMsXHJcbiAgICAgICAgICAgIHBhdGg6IG1vZGVsLnBhdGhzLmpvaW4oJy4nKSxcclxuICAgICAgICAgICAgcGFyZW50OiBtb2RlbC5wYXJlbnQ/LnVpZCB8fCBudWxsLFxyXG4gICAgICAgICAgICBhY3Rpb25zOiBtb2RlbC5hY3Rpb25zIHx8IFtdLFxyXG4gICAgICAgICAgICBwcm9wczogbW9kZWwucHJvcHMgfHwge30sXHJcbiAgICAgICAgICAgIC8vYXJnczptb2RlbC5hcmdzIHx8IHt9LFxyXG4gICAgICAgICAgICBwcm9wZXJ0aWVzOiBtb2RlbC5wcm9wZXJ0aWVzIHx8IHt9LFxyXG4gICAgICAgICAgICBzdGF0ZXM6IG1vZGVsLnN0YXRlcyxcclxuICAgICAgICAgICAgdHlwZTogbW9kZWwudHlwZSxcclxuICAgICAgICAgICAgdWlkOiBtb2RlbC51aWQsXHJcbiAgICAgICAgICAgIGFzc2V0czogbW9kZWwuYXNzZXRzIHx8IFtdXHJcbiAgICAgICAgfSkpKVxyXG5cclxuXHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICAgIGNvbnNvbGUud2FybihlcnJvcilcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gc2F2ZU9wdGlvbnMoKSB7XHJcbiAgICBhd2FpdCBJREIudXBzZXJ0SXRlbVByb3BlcnRpZXMoXCJwcm9qZWN0XCIsIFwib3B0aW9uc1wiLCBKU09OLnBhcnNlKHN0cmluZ2lmeShfZGF0YS5vcHRpb25zKSkpXHJcbn1cclxuXHJcbmZ1bmN0aW9uIGNvbGxlY3QobGlzdCwgc2xpZGUsIG91dGxpc3QgPSBbXSkge1xyXG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XHJcbiAgICAgICAgY29uc3QgZWwgPSBsaXN0W2ldXHJcbiAgICAgICAgaWYgKGVsLmlzRWxlbWVudCAmJiBlbC5zdGF0ZXNbc2xpZGVdKSB7XHJcbiAgICAgICAgICAgIG91dGxpc3QucHVzaChlbClcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmICghZWwuY2hpbGRyZW4pIHtcclxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwiTm8gY2hpbGRcIilcclxuICAgICAgICB9XHJcbiAgICAgICAgaWYgKGVsLmNoaWxkcmVuLmxlbmd0aCkge1xyXG4gICAgICAgICAgICBjb2xsZWN0KGVsLmNoaWxkcmVuLCBzbGlkZSwgb3V0bGlzdClcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIGZpbmRTdGF0ZXMoc2xpZGVVSUQpIHtcclxuICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgY29sbGVjdChfZGF0YS5jaGlsZHJlbiwgc2xpZGVVSUQsIG91dExpc3QpXHJcbiAgICByZXR1cm4gb3V0TGlzdFxyXG59XHJcblxyXG5hc3luYyBmdW5jdGlvbiBleHBvcnRUb0pzb24oKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSURCLmV4cG9ydFRvSnNvbihfZGF0YS51aWQpXHJcbiAgICBjb25zdCBibG9iID0gbmV3IEJsb2IoW0pTT04uc3RyaW5naWZ5KGRhdGEpXSwgeyB0eXBlOiAnYXBwbGljYXRpb24vanNvbicgfSlcclxuICAgIGNvbnN0IGZpbGVuYW1lID0gYHByb2plY3Qke19kYXRhLnVpZH0uanNvbmA7XHJcbiAgICBpZiAod2luZG93Lm5hdmlnYXRvci5tc1NhdmVPck9wZW5CbG9iKSB7XHJcbiAgICAgICAgd2luZG93Lm5hdmlnYXRvci5tc1NhdmVCbG9iKGJsb2IsIGZpbGVuYW1lKTtcclxuICAgIH1cclxuICAgIGVsc2Uge1xyXG4gICAgICAgIGNvbnN0IGEgPSB3aW5kb3cuZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYScpO1xyXG4gICAgICAgIGEuaHJlZiA9IHdpbmRvdy5VUkwuY3JlYXRlT2JqZWN0VVJMKGJsb2IpO1xyXG4gICAgICAgIGEuZG93bmxvYWQgPSBmaWxlbmFtZTtcclxuICAgICAgICBhLnN0eWxlID0gJ2Rpc3BsYXk6IG5vbmUnO1xyXG4gICAgICAgIGEuY2xpY2soKTtcclxuICAgIH1cclxufVxyXG5cclxuYXN5bmMgZnVuY3Rpb24gaW1wb3J0UHJvamVjdCgpIHtcclxuICAgIC8qKlxyXG4gKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L7RgtC60YDRi9GC0LjRjyDQtNC40LDQu9C+0LPQsCDQstGL0LHQvtGA0LAg0YTQsNC50LvQsFxyXG4gKiBAcGFyYW0ge3N0cmluZ30gYWNjZXB0IC0g0KLQuNC/0Ysg0YTQsNC50LvQvtCyINC00LvRjyDQstGL0LHQvtGA0LAgKNC/0L4g0YPQvNC+0LvRh9Cw0L3QuNGOIC5qc29uKVxyXG4gKiBAcmV0dXJucyB7UHJvbWlzZTxGaWxlPn0gUHJvbWlzZSDRgSDQstGL0LHRgNCw0L3QvdGL0Lwg0YTQsNC50LvQvtC8XHJcbiAqL1xyXG4gICAgZnVuY3Rpb24gb3BlbkZpbGVEaWFsb2coYWNjZXB0ID0gJy5qc29uJykge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSkgPT4ge1xyXG4gICAgICAgICAgICAvLyDQodC+0LfQtNCw0LXQvCDQvdC10LLQuNC00LjQvNGL0LkgaW5wdXQg0Y3Qu9C10LzQtdC90YJcclxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdpbnB1dCcpO1xyXG4gICAgICAgICAgICBpbnB1dC50eXBlID0gJ2ZpbGUnO1xyXG4gICAgICAgICAgICBpbnB1dC5hY2NlcHQgPSBhY2NlcHQ7XHJcbiAgICAgICAgICAgIGlucHV0LnN0eWxlLmRpc3BsYXkgPSAnbm9uZSc7XHJcblxyXG4gICAgICAgICAgICAvLyDQntCx0YDQsNCx0LDRgtGL0LLQsNC10Lwg0LLRi9Cx0L7RgCDRhNCw0LnQu9CwXHJcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcclxuICAgICAgICAgICAgICAgIGlmIChpbnB1dC5maWxlcyAmJiBpbnB1dC5maWxlc1swXSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHJlc29sdmUoaW5wdXQuZmlsZXNbMF0pO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIH0pO1xyXG5cclxuICAgICAgICAgICAgLy8g0JTQvtCx0LDQstC70Y/QtdC8IGlucHV0INCyIERPTSDQuCDRgtGA0LjQs9Cz0LXRgNC40Lwg0LrQu9C40LpcclxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hcHBlbmRDaGlsZChpbnB1dCk7XHJcbiAgICAgICAgICAgIGlucHV0LmNsaWNrKCk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0YfRgtC10L3QuNGPINC4INC/0LDRgNGB0LjQvdCz0LAgSlNPTiDRhNCw0LnQu9CwXHJcbiAgICAgKiBAcGFyYW0ge0ZpbGV9IGZpbGUgLSDQntCx0YrQtdC60YIg0YTQsNC50LvQsFxyXG4gICAgICogQHJldHVybnMge1Byb21pc2U8b2JqZWN0Pn0gUHJvbWlzZSDRgSDRgNCw0YHQv9Cw0YDRgdC10L3QvdGL0LzQuCDQtNCw0L3QvdGL0LzQuCBKU09OXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIHBhcnNlSnNvbkZpbGUoZmlsZSkge1xyXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XHJcbiAgICAgICAgICAgIGlmICghZmlsZS5uYW1lLmVuZHNXaXRoKCcuanNvbicpKSB7XHJcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKCfQktGL0LHQtdGA0LjRgtC1INGE0LDQudC7INGBINGA0LDRgdGI0LjRgNC10L3QuNC10LwgLmpzb24nKSk7XHJcbiAgICAgICAgICAgICAgICByZXR1cm47XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGNvbnN0IHJlYWRlciA9IG5ldyBGaWxlUmVhZGVyKCk7XHJcblxyXG4gICAgICAgICAgICByZWFkZXIub25sb2FkID0gKGV2ZW50KSA9PiB7XHJcbiAgICAgICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGpzb25EYXRhID0gSlNPTi5wYXJzZShldmVudC50YXJnZXQucmVzdWx0KTtcclxuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKGpzb25EYXRhKTtcclxuICAgICAgICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINC/0LDRgNGB0LjQvdCz0LAgSlNPTjogJyArIGVycm9yLm1lc3NhZ2UpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfTtcclxuXHJcbiAgICAgICAgICAgIHJlYWRlci5vbmVycm9yID0gKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcign0J7RiNC40LHQutCwINGH0YLQtdC90LjRjyDRhNCw0LnQu9CwJykpO1xyXG4gICAgICAgICAgICB9O1xyXG5cclxuICAgICAgICAgICAgcmVhZGVyLnJlYWRBc1RleHQoZmlsZSk7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcblxyXG4gICAgdHJ5IHtcclxuICAgICAgICBjb25zdCBmaWxlID0gYXdhaXQgb3BlbkZpbGVEaWFsb2coKTtcclxuICAgICAgICBjb25zdCBqc29uRGF0YSA9IGF3YWl0IHBhcnNlSnNvbkZpbGUoZmlsZSk7XHJcbiAgICAgICAgbGV0IG1lcmdlZCA9IGZhbHNlXHJcbiAgICAgICAgY29uc3QgaW1wb3J0TGlzdCA9IHJlYWN0aXZlKHtcclxuICAgICAgICAgICAgYWN0aW9uczoge30sXHJcbiAgICAgICAgICAgIGFzc2V0czoge30sXHJcbiAgICAgICAgICAgIGVsZW1lbnRzOiB7fSxcclxuICAgICAgICAgICAgc2xpZGVzOiB7fSxcclxuICAgICAgICAgICAgbW9kdWxlczoge31cclxuICAgICAgICB9KVxyXG5cclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhY3Rpb25zXCIsIGpzb25EYXRhLmFjdGlvbnMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwiYXNzZXRzXCIsIGpzb25EYXRhLmFzc2V0cylcclxuICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2RlbHNcIiwganNvbkRhdGEubW9kZWxzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInNsaWRlc1wiLCBqc29uRGF0YS5zbGlkZXMpXHJcbiAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kdWxlc1wiLCBqc29uRGF0YS5tb2R1bGVzKVxyXG4gICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInByb2plY3RcIiwganNvbkRhdGEucHJvamVjdClcclxuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAvL3VybC5zZWFyY2hQYXJhbXMuc2V0KCdwcm9qZWN0JywgcHJvamVjdE5hbWUpO1xyXG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLnRvU3RyaW5nKCk7XHJcblxyXG4gICAgICAgIC8qQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgICAgICBoZWFkZXI6IHtcclxuICAgICAgICAgICAgICAgIHZhbHVlOiBg0JjQvNC/0L7RgNGCYCxcclxuICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICBjb250ZW50OiB7XHJcbiAgICAgICAgICAgICAgICBjb21wb25lbnQ6IFwiSW1wb3J0ZXJcIixcclxuICAgICAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgICAgICAgcHJvamVjdDoganNvbkRhdGFcclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICBldmVudHM6IHtcclxuICAgICAgICAgICAgICAgICAgICBvcHRpb25zOiAodikgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBtZXJnZWQgPSB2Lm1lcmdlXHJcbiAgICAgICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgICAgICBjaGFuZ2VsaXN0OiAobGlzdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBPYmplY3Qua2V5cyhsaXN0KS5mb3JFYWNoKGsgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW1wb3J0TGlzdFtrXSA9IGxpc3Rba11cclxuICAgICAgICAgICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICAgICAgYnV0dG9uczogW1xyXG4gICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGFiZWw6IFwi0JjQvNC/0L7RgNGCXCIsXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzOiBcInNlY29uZGFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhY3Rpb25zXCIsIGpzb25EYXRhLmFjdGlvbnMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJhc3NldHNcIiwganNvbkRhdGEuYXNzZXRzKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW1zKFwibW9kZWxzXCIsIGpzb25EYXRhLm1vZGVscylcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtcyhcInNsaWRlc1wiLCBqc29uRGF0YS5zbGlkZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJtb2R1bGVzXCIsIGpzb25EYXRhLm1vZHVsZXMpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhd2FpdCBJREIuYWRkSXRlbXMoXCJwcm9qZWN0XCIsIGpzb25EYXRhLnByb2plY3QpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdXJsLnNlYXJjaFBhcmFtcy5zZXQoJ3Byb2plY3QnLCBwcm9qZWN0TmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC50b1N0cmluZygpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsYWJlbDogXCLQntGC0LzQtdC90LBcIixcclxuICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiBhc3luYyAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBBcHAubW9kYWwuY2xvc2UoKVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgXVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfSkqL1xyXG5cclxuICAgICAgICAvKmNvbnN0IGtleSA9IGBwcm9qZWN0JHtEYXRlLm5vdygpfWBcclxuXHJcbiAgICAgICAgYXdhaXQgSURCLkluaXQoa2V5LCBbXCJwcm9qZWN0c1wiLCBcImFzc2V0c1wiLCBcImVsZW1lbnRzXCIsIFwic2xpZGVzXCIsIFwiYWN0aW9uc1wiLCBcIm1vZHVsZXNcIl0sIFwidWlkXCIpXHJcblxyXG4gICAgICAgIGZvcihsZXQgaT0wO2k8anNvbkRhdGEuYXNzZXRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuYXNzZXRzW2ldXHJcbiAgICAgICAgICAgIGF3YWl0IElEQi5hZGRJdGVtKFwiYXNzZXRzXCIse1xyXG4gICAgICAgICAgICAgICAgaWQ6di51aWQsLi4udlxyXG4gICAgICAgICAgICB9KVxyXG4gICAgICAgIH1cclxuICAgICAgICBmb3IobGV0IGk9MDtpPGpzb25EYXRhLmVsZW1lbnRzLmxlbmd0aDtpKyspe1xyXG4gICAgICAgICAgICBjb25zdCB2ID0ganNvbkRhdGEuZWxlbWVudHNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJlbGVtZW50c1wiLHtcclxuICAgICAgICAgICAgICAgIGlkOnYudWlkLC4uLnZcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgZm9yKGxldCBpPTA7aTxqc29uRGF0YS5zbGlkZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgIGNvbnN0IHYgPSBqc29uRGF0YS5zbGlkZXNbaV1cclxuICAgICAgICAgICAgYXdhaXQgSURCLmFkZEl0ZW0oXCJzbGlkZXNcIix7XHJcbiAgICAgICAgICAgICAgICBpZDp2LnVpZCwuLi52XHJcbiAgICAgICAgICAgIH0pXHJcbiAgICAgICAgfSovXHJcbiAgICAgICAgcmV0dXJuIGpzb25EYXRhO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQntGI0LjQsdC60LA6JywgZXJyb3IubWVzc2FnZSk7XHJcbiAgICAgICAgdGhyb3cgZXJyb3I7XHJcbiAgICB9XHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIHBsYXkodGFyZ2V0ID0gJ2RhdGEnKSB7XHJcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgSURCLmV4cG9ydFRvSnNvbihfZGF0YS51aWQpXHJcbiAgICBjb25zb2xlLmxvZyhkYXRhKVxyXG4gICAgbGV0IGxpbmsgPSBgLi4vcGxheWVyP3NyYz0ke3RhcmdldH1gXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGInKVxyXG4gICAgICAgIGxpbmsgKz0gYCZkYj0ke19kYXRhLnVpZH1gXHJcbiAgICBjb25zdCBwbGF5ZXJXaW5kb3cgPSB3aW5kb3cub3BlbihsaW5rLCAnUGxheWVyJyk7XHJcblxyXG4gICAgaWYgKCFwbGF5ZXJXaW5kb3cpIHtcclxuICAgICAgICBjb25zb2xlLmVycm9yKCfQndC1INGD0LTQsNC70L7RgdGMINC+0YLQutGA0YvRgtGMINC+0LrQvdC+LiDQktC+0LfQvNC+0LbQvdC+LCDQsdGA0LDRg9C30LXRgCDQt9Cw0LHQu9C+0LrQuNGA0L7QstCw0LsgcG9wLXVwLicpO1xyXG4gICAgICAgIHJldHVybjtcclxuICAgIH1cclxuXHJcbiAgICBpZiAodGFyZ2V0ID09PSAnZGF0YScpIHtcclxuICAgICAgICAvLyDQpNGD0L3QutGG0LjRjyDQtNC70Y8g0L/QvtCy0YLQvtGA0L3Ri9GFINC/0L7Qv9GL0YLQvtC6INC+0YLQv9GA0LDQstC60LhcclxuICAgICAgICBjb25zdCBzZW5kRGF0YSA9IGFzeW5jIChhdHRlbXB0ID0gMCkgPT4ge1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgLy8g0J/RgNC+0LLQtdGA0Y/QtdC8LCDQvdC1INC30LDQutGA0YvRgtC+INC70Lgg0L7QutC90L5cclxuICAgICAgICAgICAgICAgIGlmIChwbGF5ZXJXaW5kb3cuY2xvc2VkKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcign0J7QutC90L4g0L/Qu9C10LXRgNCwINCx0YvQu9C+INC30LDQutGA0YvRgtC+Jyk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIC8vINCf0YvRgtCw0LXQvNGB0Y8g0L7RgtC/0YDQsNCy0LjRgtGMINC00LDQvdC90YvQtVxyXG4gICAgICAgICAgICAgICAgcGxheWVyV2luZG93LnBvc3RNZXNzYWdlKHtcclxuICAgICAgICAgICAgICAgICAgICB0eXBlOiAnSU5JVF9EQVRBJyxcclxuICAgICAgICAgICAgICAgICAgICBwYXlsb2FkOiBkYXRhXHJcbiAgICAgICAgICAgICAgICB9LCB3aW5kb3cubG9jYXRpb24ub3JpZ2luKTsgLy8g0JjRgdC/0L7Qu9GM0LfRg9C10Lwg0LrQvtC90LrRgNC10YLQvdGL0Lkgb3JpZ2luINCy0LzQtdGB0YLQviAnKidcclxuICAgICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoJ9Ce0YjQuNCx0LrQsCDQv9GA0Lgg0L7RgtC/0YDQsNCy0LrQtSDQtNCw0L3QvdGL0YU6JywgZXJyb3IpO1xyXG4gICAgICAgICAgICAgICAgaWYgKGF0dGVtcHQgPCA1KSB7IC8vINCc0LDQutGB0LjQvNGD0LwgNSDQv9C+0L/Ri9GC0L7QulxyXG4gICAgICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4gc2VuZERhdGEoYXR0ZW1wdCArIDEpLCA1MDAgKiAoYXR0ZW1wdCArIDEpKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH07XHJcblxyXG4gICAgICAgIC8vINCf0LXRgNCy0LDRjyDQv9C+0L/Ri9GC0LrQsCDQvtGC0L/RgNCw0LLQutC4INGBINC90LXQsdC+0LvRjNGI0L7QuSDQt9Cw0LTQtdGA0LbQutC+0LlcclxuICAgICAgICBzZXRUaW1lb3V0KHNlbmREYXRhLCAzMDAwKTtcclxuICAgIH1cclxuXHJcbn1cclxuXHJcbmFzeW5jIGZ1bmN0aW9uIGhhbmRsZUFzc2V0KGRhdGEpIHtcclxuICAgIGlmICghQXBwLnNsaWRlcy5hY3RpdmVkKSB7XHJcbiAgICAgICAgQXBwLnRvYXN0cy5hZGQoe1xyXG4gICAgICAgICAgICBtZXNzYWdlOiBg0J3QtdC+0LHRhdC+0LTQuNC80L4g0YHQvtC30LTQsNGC0Ywg0YHQu9Cw0LnQtGBcclxuICAgICAgICB9KVxyXG4gICAgICAgIHJldHVyblxyXG4gICAgfVxyXG4gICAgaWYgKGRhdGEuc291cmNlLnR5cGUgPT09IFwibW9kZWxcIikge1xyXG4gICAgICAgIGNvbnN0IHVpZCA9IChgJHtkYXRhLnNvdXJjZS5uYW1lIHx8IGRhdGEuc291cmNlLnVpZH0ke0RhdGUubm93KCl9YCkucmVwbGFjZSgnLicsICcnKVxyXG4gICAgICAgIGNvbnNvbGUubG9nKGRhdGEuc291cmNlLnJlc291cmNlKVxyXG4gICAgICAgIGNvbnN0IGVsID0gYXdhaXQgQXBwLnByb2plY3QuY3JlYXRlRWxlbWVudCh7XHJcbiAgICAgICAgICAgIHR5cGU6IFwiT2JqZWN0M0RcIixcclxuICAgICAgICAgICAgdWlkLFxyXG4gICAgICAgICAgICBwYXJlbnQ6IGRhdGEudGFyZ2V0Py51aWQsXHJcbiAgICAgICAgICAgIGFzc2V0czogW3tcclxuICAgICAgICAgICAgICAgIHVpZDogZGF0YS5zb3VyY2UudWlkXHJcbiAgICAgICAgICAgIH1dLFxyXG4gICAgICAgICAgICBwYXRoczogWy4uLmRhdGEudGFyZ2V0Py5wYXRocyB8fCBbXSwgdWlkXVxyXG4gICAgICAgIH0sIGRhdGEudGFyZ2V0KVxyXG4gICAgICAgIGF3YWl0IEFwcC5wcm9qZWN0LnNhdmUoZWwpXHJcbiAgICAgICAgQXBwLnNlbGVjdGlvbi5zZWxlY3QoZWwpXHJcbiAgICB9XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNob3dQcm9qZWN0T3B0aW9ucygpIHtcclxuICAgIGNvbnN0IHByb3BzID0gcmVhY3RpdmUoe1xyXG4gICAgICAgIG1vZGVsOiBfZGF0YS5vcHRpb25zLFxyXG4gICAgICAgIHByb3BlcnRpZXM6IFtcclxuICAgICAgICAgICAgLyp7XHJcbiAgICAgICAgICAgICAgICBsYWJlbDogXCJOYW1lXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcIm5hbWVcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJMYWJlbEVkaXRcIlxyXG4gICAgICAgICAgICB9LCovXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIlNob3cgc2xpZGVzXCIsXHJcbiAgICAgICAgICAgICAgICBwcm9wOiBcInNob3dzbGlkZXNcIixcclxuICAgICAgICAgICAgICAgIGNvbXBvbmVudDogXCJCb29sRWRpdFwiXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgIGxhYmVsOiBcIkZ1bGxzY3JlZW5cIixcclxuICAgICAgICAgICAgICAgIHByb3A6IFwiZnVsbHNjcmVlblwiLFxyXG4gICAgICAgICAgICAgICAgY29tcG9uZW50OiBcIkJvb2xFZGl0XCJcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIF0sXHJcbiAgICAgICAgaGVhZDoge1xyXG4gICAgICAgICAgICB0aXRsZTogXCJcIlxyXG4gICAgICAgIH1cclxuICAgIH0pXHJcblxyXG4gICAgY29uc3QgY2FuY2VsQnV0dG9uID0ge1xyXG4gICAgICAgIGxhYmVsOiBcIkNsb3NlXCIsXHJcbiAgICAgICAgY2xhc3M6IFwicHJpbWFyeVwiLFxyXG4gICAgICAgIGhhbmRsZXI6IGFzeW5jICgpID0+IHtcclxuICAgICAgICAgICAgQXBwLm1vZGFsLmNsb3NlKClcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgY29uc3QgYnV0dG9ucyA9IHJlYWN0aXZlKFtcclxuICAgICAgICBjYW5jZWxCdXR0b25cclxuICAgIF0pXHJcblxyXG4gICAgQXBwLm1vZGFsLm9wZW4oe1xyXG4gICAgICAgIGhlYWRlcjoge1xyXG4gICAgICAgICAgICB2YWx1ZTogYFByb2plY3Qgb3B0aW9uc2AsXHJcbiAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgIEFwcC5tb2RhbC5jbG9zZSgpXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGNvbnRlbnQ6IHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBcIk1vZGFsRm9ybVwiLFxyXG4gICAgICAgICAgICBwcm9wcyxcclxuICAgICAgICAgICAgZXZlbnRzOiB7XHJcbiAgICAgICAgICAgICAgICAndXBkYXRlOm1vZGVsJzogKGtleSwgdmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICBzYXZlT3B0aW9ucygpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9LFxyXG4gICAgICAgIGZvb3Rlcjoge1xyXG4gICAgICAgICAgICBidXR0b25zXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxufVxyXG5cclxuY29uc3QgX2RhdGEgPSByZWFjdGl2ZSh7XHJcbiAgICBhZGQoZWwpIHtcclxuICAgICAgICBfZGF0YS5jaGlsZHJlbi5wdXNoKGVsKVxyXG4gICAgfSxcclxuICAgIHVpZDogbnVsbCwgaW5pdCxcclxuICAgIGRhdGE6IHt9LFxyXG4gICAgbG9hZCwgZmluZFN0YXRlcywgZ2V0U3RhdGUsIHJlbW92ZSwgaGFuZGxlQXNzZXQsXHJcbiAgICBhZGRFbGVtZW50LCBjcmVhdGVFbGVtZW50LCBzYXZlLCBmaW5kLCBmaW5kT2JqZWN0c0J5VHlwZSxcclxuICAgIGV4cG9ydFRvSnNvbiwgaW1wb3J0UHJvamVjdCwgcGxheSxcclxuICAgIGNoaWxkcmVuOiBbXSxcclxuICAgIG9uOiBfZW1taXRlci5vbi5iaW5kKF9lbW1pdGVyKSxcclxuICAgIG9mZjogX2VtbWl0ZXIub2ZmLmJpbmQoX2VtbWl0ZXIpLFxyXG4gICAgb3B0aW9uczoge1xyXG4gICAgICAgIGZ1bGxzY3JlZW46IGZhbHNlLFxyXG4gICAgICAgIHNob3dzbGlkZXM6IHRydWVcclxuICAgIH0sXHJcbiAgICBpbmZvOiB7XHJcbiAgICAgICAgbmFtZTogXCJQcm9qZWN0XCJcclxuICAgIH1cclxufSlcclxuXHJcbkFwcC5PbihcImluaXRcIiwgKCkgPT4ge1xyXG5cclxuICAgIHdpbmRvdy52dWUuY29tcG9uZW50KFwiSW1wb3J0ZXJcIiwgSW1wb3J0ZXIpXHJcbiAgICB3aW5kb3cudnVlLmNvbXBvbmVudChcIkVsZW1lbnRBZGRcIiwgRWxlbWVudEFkZClcclxuXHJcbiAgICBBcHAuc2xpZGVzLm9uKFwiY2hhbmdlXCIsIChzbGlkZSkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHNsaWRlLCBvdXRMaXN0KVxyXG4gICAgICAgIC8vYWN0aXZhdGVzKF9kYXRhLmNoaWxkcmVuLCBzbGlkZS51aWQpXHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5zbGlkZXMub24oXCJyZW1vdmVcIiwgKHVpZCkgPT4ge1xyXG4gICAgICAgIGNvbnN0IG91dExpc3QgPSBbXVxyXG4gICAgICAgIGNvbGxlY3QoX2RhdGEuY2hpbGRyZW4sIHVpZCwgb3V0TGlzdClcclxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG91dExpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgZGVsZXRlIG91dExpc3RbaV0uc3RhdGVzW3VpZF1cclxuICAgICAgICB9XHJcbiAgICB9KVxyXG5cclxuICAgIEFwcC5tZW51LmhpZXJhcmh5Lmxpc3QucHVzaCh7XHJcbiAgICAgICAgaWNvbjogXCJlcXVhbGl6ZXIyXCIsXHJcbiAgICAgICAgdG9vbHRpcDogXCJQcm9qZWN0IG9wdGlvbnNcIixcclxuICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgIFNob3dQcm9qZWN0T3B0aW9ucygpXHJcbiAgICAgICAgfVxyXG4gICAgfSlcclxuXHJcbiAgICBBcHAubWVudS5hZGRNZW51KCdhcHAnLFxyXG4gICAgICAgIHtcclxuICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QnLFxyXG4gICAgICAgICAgICBpY29uOiAnJyxcclxuICAgICAgICAgICAgdGV4dDogJ1Byb2plY3QnLFxyXG4gICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgIGNoaWxkcmVuOiBbXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuY3JlYXRlJyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAnZmlsZS1lbXB0eScsXHJcbiAgICAgICAgICAgICAgICAgICAgdGV4dDogJ0NyZWF0ZScsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogYXN5bmMgKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdHMuY3JlYXRlKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0Lm9wZW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdtZW51JyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnT3BlbicsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJPcGVuIHByb2plY3RcIixcclxuICAgICAgICAgICAgICAgICAgICBoYW5kbGVyOiAoKSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIEFwcC5wcm9qZWN0cy5vcGVuKClcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9LFxyXG4gICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgIHBhdGg6ICdhcHAubGlzdC5wcm9qZWN0LmV4cG9ydCcsXHJcbiAgICAgICAgICAgICAgICAgICAgaWNvbjogJ2Rvd25sb2FkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnRXhwb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICB0b29sdGlwOiBcIkV4cG9ydCBwcm9qZWN0XCIsXHJcbiAgICAgICAgICAgICAgICAgICAgaGFuZGxlcjogKCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBBcHAucHJvamVjdC5leHBvcnRUb0pzb24oKVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgcGF0aDogJ2FwcC5saXN0LnByb2plY3QuaW1wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBpY29uOiAndXBsb2FkJyxcclxuICAgICAgICAgICAgICAgICAgICB0ZXh0OiAnSW1wb3J0JyxcclxuICAgICAgICAgICAgICAgICAgICBsaW5rOiAnIycsXHJcbiAgICAgICAgICAgICAgICAgICAgdG9vbHRpcDogXCJJbXBvcnQgcHJvamVjdFwiLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3QuaW1wb3J0UHJvamVjdCgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfSxcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICBwYXRoOiAnYXBwLmxpc3QucHJvamVjdC5yZW1vdmUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGljb246ICdiaW4nLFxyXG4gICAgICAgICAgICAgICAgICAgIHRleHQ6ICdEZWxldGUnLFxyXG4gICAgICAgICAgICAgICAgICAgIGhhbmRsZXI6ICgpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgQXBwLnByb2plY3RzLnJlbW92ZSgpXHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBdXHJcbiAgICAgICAgfVxyXG4gICAgKVxyXG59KVxyXG5cclxuXHJcbmV4cG9ydCBkZWZhdWx0IF9kYXRhIiwiX193ZWJwYWNrX3JlcXVpcmVfXy5oID0gKCkgPT4gKFwiMGE5ZWFhYWZhZGJmOTFhMmQ0MzRcIikiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmZlZGVyYXRpb24uaW5pdE9wdGlvbnMuc2hhcmVkID0ge1x0XCJAcmVuZW9zL2FwcFwiOiBbe1x0dmVyc2lvbjogXCIxLjAuNlwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy9AcmVuZW9zL2FwcC9pbmRleC5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL0ByZW5lb3MvYXBwL2luZGV4LmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInJlcXVpcmVkVmVyc2lvblwiOlwiMS4wLjZcIixcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLFx0XCJ0aHJlZVwiOiBbe1x0dmVyc2lvbjogXCIwLjE4MC4wXCIsXG5cdFx0Z2V0OiAoKSA9PiAoKCkgPT4gKF9fd2VicGFja19yZXF1aXJlX18oLyohIC4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3RocmVlL2J1aWxkL3RocmVlLm1vZHVsZS5qc1wiKSkpLFxuXHRcdHNjb3BlOiBbXCJkZWZhdWx0XCJdLFxuXHRcdHNoYXJlQ29uZmlnOiB7XCJlYWdlclwiOnRydWUsXCJzaW5nbGV0b25cIjp0cnVlLFwibGF5ZXJcIjpudWxsfX0sXSxcdFwidnVlXCI6IFt7XHR2ZXJzaW9uOiBcIjMuNS4yMVwiLFxuXHRcdGdldDogKCkgPT4gKCgpID0+IChfX3dlYnBhY2tfcmVxdWlyZV9fKC8qISAuL25vZGVfbW9kdWxlcy92dWUvZGlzdC92dWUucnVudGltZS5lc20tYnVuZGxlci5qcyAqLyBcIi4vbm9kZV9tb2R1bGVzL3Z1ZS9kaXN0L3Z1ZS5ydW50aW1lLmVzbS1idW5kbGVyLmpzXCIpKSksXG5cdFx0c2NvcGU6IFtcImRlZmF1bHRcIl0sXG5cdFx0c2hhcmVDb25maWc6IHtcImVhZ2VyXCI6dHJ1ZSxcInNpbmdsZXRvblwiOnRydWUsXCJsYXllclwiOm51bGx9fSxdLH1cbl9fd2VicGFja19yZXF1aXJlX18uUyA9IHt9O1xudmFyIGluaXRQcm9taXNlcyA9IHt9O1xudmFyIGluaXRUb2tlbnMgPSB7fTtcbl9fd2VicGFja19yZXF1aXJlX18uSSA9IChuYW1lLCBpbml0U2NvcGUpID0+IHtcblx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18uZmVkZXJhdGlvbi5idW5kbGVyUnVudGltZS5JKHtcdHNoYXJlU2NvcGVOYW1lOiBuYW1lLFxuXHRcdHdlYnBhY2tSZXF1aXJlOiBfX3dlYnBhY2tfcmVxdWlyZV9fLFxuXHRcdGluaXRQcm9taXNlczogaW5pdFByb21pc2VzLFxuXHRcdGluaXRUb2tlbnM6IGluaXRUb2tlbnMsXG5cdFx0aW5pdFNjb3BlOiBpbml0U2NvcGUsXG5cdH0pXG59OyJdLCJuYW1lcyI6W10sInNvdXJjZVJvb3QiOiIifQ==