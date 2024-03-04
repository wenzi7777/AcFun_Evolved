/**
 * 将给定的文本截断到指定的长度，并在末尾添加省略号（如果文本被截断）。
 * 如果文本长度不超过限制，则返回原始文本。
 *
 * @param {string} text - 要截断的原始文本。
 * @param {number} limit - 允许的最大文本长度。
 * @returns {string} 截断后的文本。如果原始文本超过限制长度，则在末尾添加省略号。
 */
export const textLimit = (text, limit) => {
    if (text.length > limit) {
        return text.slice(0, limit) + '...'
    }
    return text
}

/**
 * 处理给定的manifest对象，将其id和requestedAPIs字段截断到指定的长度。
 * 这个函数修改了manifest对象，为id和requestedAPIs字段各添加了一个新的对象，包含原始和截断后的字符串。
 *
 * @param {Object} manifest - 包含id和requestedAPIs字段的manifest对象。id是一个字符串，requestedAPIs是一个字符串数组。
 * @returns {Object} bigManifest，修改后的manifest对象，其中id和requestedAPIs字段包含一个对象，分别有original和short属性，表示原始和截断后的值。
 */
export const manifestLimit = (manifest) => {
    let newManifest = manifest
    newManifest.id = {
        original: newManifest.id,
        short: textLimit(manifest.id, 16)
    }
    newManifest.requestedAPIs = {
        original: newManifest.requestedAPIs,
        short: textLimit(manifest.requestedAPIs.join(', '), 16)
    }
    return newManifest
}