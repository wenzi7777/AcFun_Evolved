/**
 *
 * 此页面的部分代码来自于或修改于 Bilibili Evolved 的ajax.ts。
 * 原代码以MIT协议开源，作者是  "author": "Grant Howard, Coulomb-G"
 *
 * The MIT License (MIT)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ----------
 *
 * 本脚本使用了这些代码，现以MPL-2.0开源修改后的代码。
 *
 * ACE的开源许可见 ./LICENSE.md
 *
 * Nick Hsu 于 2024/03/04 注
 */

const send = (config) => {
    const xhr = new XMLHttpRequest()
    const {isText = true, body} = config(xhr)
    return new Promise((resolve, reject) => {
        xhr.addEventListener('load', () => resolve(isText ? xhr.responseText : xhr.response))
        xhr.addEventListener('error', () => reject(xhr.status))
        xhr.send(body)
    })
}

const withCredentials = (config) => (xhr) => {
    xhr.withCredentials = true
    return config(xhr)
}

const blobRequest = (url) => (xhr) => {
    xhr.responseType = 'blob'
    xhr.open('GET', url)
    return {
        isText: false,
    }
}

/**
 * 获取二进制`Blob`对象
 * @param url 链接
 */
export const getBlob = (url) => send(blobRequest(url))

/**
 * 获取二进制`Blob`对象(带身份验证)
 * @param url 链接
 */
export const getBlobWithCredentials = (url) => send(withCredentials(blobRequest(url)))

const textRequest = (url) => (xhr) => {
    xhr.responseType = 'text'
    xhr.open('GET', url)
    return {
        isText: true,
    }
}

/**
 * 获取文本
 * @param url 链接
 */
export const getText = (url) => send(textRequest(url))

/**
 * 获取文本(带身份验证)
 * @param url 链接
 */
export const getTextWithCredentials = (url) =>
    send(withCredentials(textRequest(url)))

const jsonRequest = (url) => (xhr) => {
    xhr.responseType = 'json'
    xhr.open('GET', url)
    return {
        isText: false,
    }
}

const convertToJson = (response) => {
    if (typeof response === 'string') {
        return JSON.parse(response)
    }
    return response
}

/**
 * 获取 JSON 对象
 * @param url 链接
 */
export const getJson = async (url) => {
    const response = await send(jsonRequest(url))
    return convertToJson(response)
}

/**
 * 获取 JSON 对象(带身份验证)
 * @param url 链接
 */
export const getJsonWithCredentials = async (url) => {
    const response = await send(withCredentials(jsonRequest(url)))
    return convertToJson(response)
}

/**
 * 发送文本 (`application/x-www-form-urlencoded`)
 * @param url 链接
 * @param text 文本
 */
export const postText = (url, text) =>
    send(xhr => {
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        return {
            isText: false,
            body: text,
        }
    })

/**
 * 发送文本 (`application/x-www-form-urlencoded`)(带身份验证)
 * @param url 链接
 * @param text 文本
 */
export const postTextWithCredentials = (url, text) =>
    send(xhr => {
        xhr.open('POST', url)
        xhr.withCredentials = true
        xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded')
        return {
            isText: false,
            body: text,
        }
    })

/**
 * 发送 JSON 数据 (`application/json`)
 * @param url 链接
 * @param json JSON 对象
 */
export const postJson = (url, json) =>
    send(xhr => {
        xhr.open('POST', url)
        xhr.setRequestHeader('Content-Type', 'application/json')
        return {
            isText: false,
            body: JSON.stringify(json),
        }
    })

/**
 * 发送 JSON 数据 (`application/json`)(带身份验证)
 * @param url 链接
 * @param json JSON 对象
 */
export const postJsonWithCredentials = (url, json) =>
    send(xhr => {
        xhr.open('POST', url)
        xhr.withCredentials = true
        xhr.setRequestHeader('Content-Type', 'application/json')
        return {
            isText: false,
            body: JSON.stringify(json),
        }
    })

/**
 * 调用 Tampermonkey API 进行请求 (`GM_xmlhttpRequest`)
 * @param details 参数
 */
export const monkey = (details) =>
    new Promise((resolve, reject) => {
        if (!GM_xmlhttpRequest) {
            console.error('Cannot resolve function GM_xmlhttpRequest')
            throw new Error({
                message: 'Cannot resolve function GM_xmlhttpRequest'
            })
        }
        const fullDetails = {
            nocache: true,
            ...details,
            onload: (r) => resolve(r.response),
            onerror: (r) => {
                // 重新序列化一下取出对象字段, 油猴给的是一个函数对象混合体
                const realObject = {
                    ...JSON.parse(JSON.stringify(r)),
                    toString() {
                        return JSON.stringify(this)
                    },
                }
                reject(realObject)
            },
        }
        if (!('method' in fullDetails)) {
            fullDetails.method = 'GET'
        }
        GM_xmlhttpRequest(fullDetails)
    })

export const browserDownload = (object, filename) => {
    const blob = new Blob([JSON.stringify(object)], {type: 'text/plain'})
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = filename
    a.style.display = 'none'
    document.body.appendChild(a)
    a.click()
    URL.revokeObjectURL(url)
    document.body.removeChild(a)
}

export const browserUploadAsText = (callback) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';

    input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            callback({content: e.target.result, file});
        };
        reader.readAsText(file);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
};

export const browserUploadAsArrayBuffer = (callback) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.style.display = 'none';

    input.addEventListener('change', (event) => {
        const file = event.target.files[0];
        if (!file) {
            console.error('No file selected');
            return;
        }

        const reader = new FileReader();
        reader.onload = (e) => {
            callback({content: e.target.result, file});
        };
        reader.readAsArrayBuffer(file);
    });

    document.body.appendChild(input);
    input.click();
    document.body.removeChild(input);
};