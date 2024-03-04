import {getTimestamp} from "./time";
import {browserDownload} from "./networking";

/**
 * 存储小型JSON「LocalStorage」
 * @param k - key
 * @param v - JSON
 */
export const localSet = (k, v) => {
    localStorage.setItem(keyConstructor(k), JSON.stringify({
        value: JSON.stringify(v),
        timestamp: getTimestamp(),
    }))
}

/**
 * 获取小型JSON「LocalStorage」
 * @param k - key
 * @returns {Object}
 */
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

/**
 * 删除小型JSON「LocalStorage」
 * @param k - key
 */
export const localRemove = (k) => {
    localStorage.removeItem(keyConstructor(k))
}

/**
 * 存储大型JSON「TamperMonkey」
 * @param k - key
 * @param v - JSON
 */
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

/**
 * 获取大型JSON「TamperMonkey」
 * @param k - key
 */
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


/**
 * 删除大型JSON「TamperMonkey」
 * @param k - key
 */
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

/**
 * 清除大型JSON存储器「TamperMonkey」
 */
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

/**
 * 清除小型JSON存储器「LocalStorage」
 */
export const clearLocal = () => {
    localStorage.clear()
}

/**
 * 导出大型JSON存储器「TamperMonkey」
 */
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

/**
 * 导入大型JSON存储器「TamperMonkey」
 * @param data - Array
 */
export const importMonkey = (data) => {
    if (!GM_setValue) {
        console.error('Cannot resolve function GM_setValue')
        throw new Error('Cannot resolve function GM_setValue')
    }
    Object.keys(data).forEach(k => {
        GM_setValue(k, data[k])
    })
}

/**
 * 导出小型对象存储器「LocalStorage」
 */
export const exportLocal = () => {
    const result = {};
    for (let i = 0; i < localStorage.length; i++) {
        const k = localStorage.key(i);
        result[k] = localStorage.getItem(k);
    }
    browserDownload(result, `local.ace.${getTimestamp()}.json`)
}

/**
 * 导入小型JSON存储器「LocalStorage」
 * @param data - Array
 */
export const importLocal = (data) => {
    Object.keys(data).forEach(k => {
        localStorage.setItem(k, data[k])
    })
}

/**
 * 导出所有类型的存储器
 */
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

/**
 * 导入所有类型的存储器
 * @param data - {monkey: [{}], local: [{}]}
 */
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