import Logger from "../api/Logger";
import Clock from "./Clock";
import IO from "../api/IO";

class ACEV2Storage implements Service {
    private runtimeStorage: RuntimeStorage;
    private defaultValue: RuntimeStorage = {
        monkey: {
            plugins: [],
            pluginData: [],
            preferences: {
                general: {
                    pluginLoadOrder: "when-body-loaded",
                    source: "github",
                    updateRuntimeWhen: "startup",
                    updateRuntimeTo: "stable",
                    updatePluginsWhen: "startup"
                },
                visual: {
                    theme: "auto",
                    language: "auto"
                },
                developer: {
                    PSV: "full",
                    IPC: "enabled",
                    logLevel: "error"
                }
            }
        },
        local: []
    }

    constructor() {
        this.runtimeStorage = this.defaultValue
    }

    async start() {
        Logger.info({message: 'StorageService is starting...'});
        this.runtimeStorage = {
            monkey: await this.readMonkey({outputType: 'JSON'}) as RuntimeStorage['monkey'],
            local: this.readLocal({outputType: 'JSON'}) as DataObject[]
        }
        await this.initialize()
    }

    async stop() {
        Logger.info({message: 'StorageService is stopping...'});
        this.saveLocal();
        await this.saveMonkey();
    }

    async initialize() {
        let _storage = {
            monkey: await this.readMonkey({outputType: 'JSON'}) as RuntimeStorage['monkey'],
            local: this.readLocal({outputType: 'JSON'}) as DataObject[]
        }
        if (!_storage.monkey.pluginData || !_storage.monkey.plugins || !_storage.monkey.preferences) {
            this.setDefaultValue()
        }
        if (!_storage.local) {
            this.setDefaultValue()
        }
    }

    setDefaultValue() {
        this.runtimeStorage = this.defaultValue
        this.saveLocal()
        this.saveMonkey()
    }

    localSet({k, v}: { k: string, v: object }) {
        const key = this.keyConstructor({k});
        const existingIndex = this.runtimeStorage.local.findIndex(item => item.k === key);

        if (existingIndex !== -1) {
            this.runtimeStorage.local[existingIndex].v = JSON.stringify(v);
            this.runtimeStorage.local[existingIndex].timestamp = Clock.getTimestamp();
        } else {
            this.runtimeStorage.local.push({
                k: key,
                v: JSON.stringify(v),
                timestamp: Clock.getTimestamp(),
            });
        }
    }

    localGet({k}: { k: string }): object | null {
        const item = this.runtimeStorage.local.find(entry => entry.k === this.keyConstructor({k}));
        if (item) {
            try {
                return JSON.parse(item.v);
            } catch (e) {
                Logger.error({message: `Error parsing value for key: ${k}, error: ${JSON.stringify(e)}`});
                return null;
            }
        } else {
            return null;
        }
    }

    localRemove({k}: { k: string }) {
        this.runtimeStorage.local = this.runtimeStorage.local.filter(entry => entry.k !== this.keyConstructor({k}));
    }

    largeSet({k, v}: { k: string, v: object }) {
        const key = this.keyConstructor({k});
        const existingIndex = this.runtimeStorage.monkey.pluginData.findIndex(item => item.k === key);

        if (existingIndex !== -1) {
            this.runtimeStorage.monkey.pluginData[existingIndex].v = JSON.stringify(v);
            this.runtimeStorage.monkey.pluginData[existingIndex].timestamp = Clock.getTimestamp();
        } else {
            this.runtimeStorage.monkey.pluginData.push({
                k: key,
                v: JSON.stringify(v),
                timestamp: Clock.getTimestamp(),
            });
        }
    }

    largeGet({k}: { k: string }): object | null {
        const item = this.runtimeStorage.monkey.pluginData.find(entry => entry.k === this.keyConstructor({k}));
        if (item) {
            try {
                return JSON.parse(item.v);
            } catch (e) {
                Logger.error({message: `Error parsing value for key: ${k}, error: ${JSON.stringify(e)}`});
                return null;
            }
        } else {
            return null;
        }
    }

    largeRemove({k}: { k: string }) {
        this.runtimeStorage.monkey.pluginData = this.runtimeStorage.monkey.pluginData.filter(entry => entry.k !== this.keyConstructor({k}));
    }

    updatePluginsStorage({newPlugins}: { newPlugins: pluginPack[] }) {
        this.runtimeStorage.monkey.plugins = newPlugins;
    }

    getPlugins(): pluginPack[] {
        return this.runtimeStorage.monkey.plugins
    }

    updatePreferencesStorage({newPreferences}: { newPreferences: DataObject }) {
        this.runtimeStorage.monkey.preferences = newPreferences;
    }

    keyConstructor({k}: { k: string }) {
        if (k.indexOf('.') !== -1) {
            Logger.error({message: 'Key cannot contain "."'});
        }
        return `${k}`;
    }

    async readMonkey({outputType}: { outputType: "raw" | "JSON" }) {
        if (outputType === 'raw') {
            return await GM.getValue('ace.runtimeStorage.monkey') || '{}';
        } else {
            return JSON.parse(await GM.getValue('ace.runtimeStorage.monkey') || '{}');
        }
    }

    readLocal({outputType}: { outputType: "raw" | "JSON" }) {
        if (outputType === 'raw') {
            return localStorage.getItem('ace.runtimeStorage.local') || '[]';
        } else {
            return JSON.parse(localStorage.getItem('ace.runtimeStorage.local') || '[]');
        }
    }

    saveLocal() {
        localStorage.setItem('ace.runtimeStorage.local', JSON.stringify(this.runtimeStorage.local));
    }

    async saveMonkey() {
        await GM.setValue('ace.runtimeStorage.monkey', JSON.stringify(this.runtimeStorage.monkey));
    }

    getRuntimeStorage() {
        return this.runtimeStorage;
    }

    clearMonkey() {
        const keys = GM_listValues();
        keys.forEach(k => {
            GM_deleteValue(k);
        });
    }

    clearLocal() {
        localStorage.setItem('ace.runtimeStorage.local', JSON.stringify([]));
    }

    exportMonkey() {
        const result = this.readMonkey({outputType: "raw"})
        IO.ACEV2Download({object: result, filename: `monkey.ace.${Clock.getTimestamp()}.json`});
    }

    importMonkey({data}: { data: DataObject }) {
        Object.keys(data).forEach(k => {
            GM_setValue(k, data[k]);
        });
    }

    exportLocal() {
        const result = this.readLocal({outputType: "raw"})
        IO.ACEV2Download({
            object: result, filename: `local.ace.${Clock.getTimestamp()}.json`
        });
    }

    importLocal({data}: { data: DataObject }) {
        Object.keys(data).forEach(k => {
            localStorage.setItem(k, data[k]);
        });
    }

    exportAll() {
        if (!GM_listValues) {
            Logger.error({message: 'Cannot resolve function GM_listValues'});
        }
        const monkey: DataObject = {};
        const keys = GM_listValues();
        keys.forEach(k => {
            monkey[k] = GM_getValue(k);
        });
        const local: DataObject = {};
        for (let i = 0; i < localStorage.length; i++) {
            const k = localStorage.key(i);
            if (k) {
                local[k] = localStorage.getItem(k);
            }
        }
        IO.ACEV2Download({
            object: {
                monkey,
                local
            },
            filename: `all.ace.${Clock.getTimestamp()}.json`
        });
    }

    importAll({data}: { data: string }) {
        const obj: { monkey: DataObject, local: DataObject } = JSON.parse(data);
        Object.keys(obj.monkey).forEach(k => {
            GM_setValue(k, obj.monkey[k]);
        });
        Object.keys(obj.local).forEach(k => {
            localStorage.setItem(k, obj.local[k]);
        });
    }
}

export default new ACEV2Storage();