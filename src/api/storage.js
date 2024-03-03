import {getTimestamp} from "./time";
import {browserDownload} from "./networking";

export const localSet = (k, v) => {
    localStorage.setItem(keyConstructor(k), JSON.stringify({
        value: JSON.stringify(v),
        timestamp: getTimestamp(),
    }))
}

export const localGet = (k) => {
    const item = localStorage.getItem(keyConstructor(k));
    if (item) {
        const parsedItem = JSON.parse(item);
        try {
            return JSON.parse(parsedItem.value);
        } catch (e) {
            console.error('Error parsing value for key:', k, e);
            return null;
        }
    } else {
        return null;
    }
};

export const localRemove = (k) => {
    localStorage.removeItem(keyConstructor(k))
}

export const largeSet = async (k, v) => {
    if (!GM_setValue) {
        console.error('Cannot resolve function GM_setValue')
        throw new Error({
            message: 'Cannot resolve function GM_setValue',
            key: k
        })
    }
    await GM_setValue(keyConstructor(k), JSON.stringify({
        value: JSON.stringify(v),
        timestamp: getTimestamp(),
    }))
}

export const largeGet = async (k) => {
    if (!GM_getValue) {
        console.error('Cannot resolve function GM_getValue');
        throw new Error({
            message: 'Cannot resolve function GM_getValue',
            key: k
        });
    }
    const item = await GM_getValue(keyConstructor(k));
    if (item) {
        const parsedItem = JSON.parse(item);
        try {
            return JSON.parse(parsedItem.value);
        } catch (e) {
            console.error('Error parsing value for key:', k, e);
            return null;
        }
    } else {
        return null;
    }
};


export const largeRemove = async (k) => {
    if (!GM_deleteValue) {
        console.error('Cannot resolve function GM_deleteValue')
        throw new Error({
            message: 'Cannot resolve function GM_deleteValue',
            key: k
        })
    }
    await GM_deleteValue(keyConstructor(k))
}

export const keyConstructor = (k) => {
    if (k.indexOf('.') !== -1) {
        console.error('Key should not contain "."')
        throw new Error({
            message: 'Key should not contain "."',
            key: k
        })
    }
    return `${k}`;
}

export const clearMonkey = () => {
    if (!GM_listValues) {
        console.error('Cannot resolve function GM_listValues')
        throw new Error('Cannot resolve function GM_listValues')
    }
    const keys = GM_listValues();
    keys.forEach(k => {
        GM_deleteValue(k)
    })
}

export const clearLocal = () => {
    localStorage.clear()
}

export const exportMonkey = () => {
    if (!GM_listValues) {
        console.error('Cannot resolve function GM_listValues')
        throw new Error('Cannot resolve function GM_listValues')
    }
    const keys = GM_listValues();
    const result = {};
    keys.forEach(k => {
        result[k] = GM_getValue(k)
    })
    browserDownload(result, `monkey.ace.${getTimestamp()}.json`)
}

export const importMonkey = (data) => {
    if (!GM_setValue) {
        console.error('Cannot resolve function GM_setValue')
        throw new Error('Cannot resolve function GM_setValue')
    }
    Object.keys(data).forEach(k => {
        GM_setValue(k, data[k])
    })
}

export const exportLocal = () => {
    const result = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        result[k] = localStorage.getItem(k);
    }
    browserDownload(result, `local.ace.${getTimestamp()}.json`)
}

export const importLocal = (data) => {
    Object.keys(data).forEach(k => {
        localStorage.setItem(k, data[k])
    })
}

export const exportAll = () => {
    if (!GM_listValues) {
        console.error('Cannot resolve function GM_listValues')
        throw new Error('Cannot resolve function GM_listValues')
    }
    const monkey = {};
    const keys = GM_listValues();
    keys.forEach(k => {
        monkey[k] = GM_getValue(k)
    })
    const local = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        local[k] = localStorage.getItem(k);
    }
    browserDownload({
        monkey,
        local
    }, `all.ace.${getTimestamp()}.json`)
}

export const importAll = (data) => {
    if (!GM_setValue) {
        console.error('Cannot resolve function GM_setValue')
        throw new Error('Cannot resolve function GM_setValue')
    }
    data = JSON.parse(data)
    Object.keys(data.monkey).forEach(k => {
        GM_setValue(k, data.monkey[k])
    })
    Object.keys(data.local).forEach(k => {
        localStorage.setItem(k, data.local[k])
    })
}