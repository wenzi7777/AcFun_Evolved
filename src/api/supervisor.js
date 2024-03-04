/**
 *
 * 此页面的部分代码来自于或修改于 Bilibili Evolved 的observer.ts。
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

import {aceNodeLocating} from "./ace";
import {pageList} from "./url";

/**
 * 解析给定的目标数组，将每个目标转换为DOM元素节点列表。
 * 目标可以是HTMLElement实例或者是可以通过`document.querySelectorAll`查询到的选择器。
 * 如果目标是通过`aceNodeLocating`可识别的特殊标识符，则会尝试定位相应的节点。
 *
 * @param {Array<HTMLElement|string>} targets - 要解析的目标数组，可以包含HTMLElement实例或ACE Uuid。
 * @returns {Array<HTMLElement>} 解析后的HTMLElement节点列表。
 */
export const resolveTargets = (targets) => {
    let nodeList = [];

    targets.forEach(target => {
        if (target instanceof HTMLElement) {
            nodeList.push(target);
        } else {
            const aceNode = aceNodeLocating(target);

            if (aceNode) {
                nodeList.push(aceNode);
            } else {
                document.querySelectorAll(target).forEach(element => nodeList.push(element));
            }
        }
    });

    return nodeList;
};

/**
 * 对指定的目标元素或元素集合设置MutationObserver，以便在满足指定的配置条件时执行回调函数。
 * 此函数首先使用`resolveTargets`解析输入的目标，然后对每个目标元素设置观察者。
 *
 * @param {Array<HTMLElement|string>} targets - 要观察的目标元素或选择器。
 * @param {MutationObserverInit} config - 观察者的配置对象，定义了观察的类型（如子节点变化、属性变化等）。
 * @param {Function} callback - 满足观察条件时执行的回调函数。
 * @returns {Array} 包含MutationObserver实例和配置对象的数组。
 */
export const mutationObserve = (targets, config, callback) => {
    const observer = new MutationObserver(callback);
    resolveTargets(targets).forEach(it => observer.observe(it, config));
    callback([], observer);
    return [observer, config];
};

/**
 * 为单个目标元素设置一个观察者，以监视其直接子节点的变化。
 * 当目标元素的子节点列表发生变化（如添加或移除子节点）时，将执行回调函数。
 * 此函数使用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视目标元素的子树变化或属性变化。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 子节点列表变化时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const childList = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: true,
            subtree: false,
            attributes: false,
        },
        callback,
    );

/**
 * 为单个目标元素及其所有子树设置一个观察者，以监视其子节点的变化，包括直接和间接子节点。
 * 当目标元素或其任何子元素的子节点列表发生变化（如添加或移除子节点）时，将执行回调函数。
 * 此函数使用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视属性变化，只关注子节点列表的变化。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 子节点列表或其子树中的变化发生时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const childListSubtree = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: true,
            subtree: true,
            attributes: false,
        },
        callback,
    );

/**
 * 为单个目标元素设置一个观察者，专门用于监视其属性的变化。
 * 当目标元素的任何属性发生变化时，将执行回调函数。
 * 此函数利用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视子节点列表或子树中的变化，仅关注属性变化。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 目标元素的属性变化时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const attributes = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: false,
            subtree: false,
            attributes: true,
        },
        callback,
    );

/**
 * 为单个目标元素及其所有子树设置一个观察者，以监视属性的变化。
 * 当目标元素或其子树中的任何元素的属性发生变化时，将执行回调函数。
 * 此函数利用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视子节点列表的变化，仅关注属性变化，并且会在整个子树范围内进行监视。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 目标元素或其子树中的任何元素的属性变化时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const attributesSubtree = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: false,
            subtree: true,
            attributes: true,
        },
        callback,
    );

/**
 * 为单个目标元素设置一个观察者，专门用于监视其文本内容（character data）的变化。
 * 当目标元素的文本内容发生变化时，将执行回调函数。
 * 此函数利用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视子节点列表的变化、属性变化或子树中的变化，仅关注文本内容的变化。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 目标元素的文本内容变化时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const characterData = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: false,
            subtree: false,
            attributes: false,
            characterData: true,
        },
        callback,
    );

/**
 * 为单个目标元素及其所有子树设置一个观察者，以监视文本内容（character data）的变化。
 * 当目标元素或其子树中的任何元素的文本内容发生变化时，将执行回调函数。
 * 此函数利用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：此观察者不会监视子节点列表的变化或属性变化，仅关注文本内容的变化，并且会在整个子树范围内进行监视。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 目标元素或其子树中的任何元素的文本内容变化时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const characterDataSubtree = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: false,
            subtree: true,
            attributes: false,
            characterData: true,
        },
        callback,
    );

/**
 * 为单个目标元素及其所有子树设置一个全面的观察者，以监视所有类型的DOM变化。
 * 这包括子节点列表的变化、属性变化以及文本内容（character data）的变化。
 * 当观察到这些变化时，将执行回调函数。
 * 此函数利用`mutationObserve`进行观察设置，并通过`resolveTargets`确保目标是有效的DOM元素。
 * 注意：这种观察模式会监视所有可能的变化，因此可能会对性能产生一定的影响。
 *
 * @param {HTMLElement|string} target - 要观察的目标元素或选择器。如果是字符串，将通过查询选择器查找元素。
 * @param {Function} callback - 当任何指定的变化发生时执行的回调函数。回调函数的参数由`MutationObserver`提供。
 */
export const allMutationsOn = (target, callback) =>
    mutationObserve(
        resolveTargets([target]),
        {
            childList: true,
            subtree: true,
            attributes: true,
            characterData: true,
        },
        callback,
    );

const everyNodesObserver = {
    observer: null,
    config: null,
    callbacks: [],
};

/**
 * 为整个文档体（document.body）设置一个全局观察者，监视所有类型的DOM变化，包括子节点列表、属性和文本内容的变化。
 * 当这些变化发生时，所有注册的回调函数将被执行。
 * 如果全局观察者已经存在，此函数只会将新的回调函数添加到回调列表中。如果不存在，则创建一个新的观察者并开始监视变化。
 * 这允许多个组件或模块共享同一个观察者实例，优化性能并减少资源消耗。
 *
 * @param {Function} callback - 当任何指定的变化发生时应执行的回调函数。回调函数参数包括观察到的变化记录和观察者实例本身。
 * @returns {Object} 返回包含观察者实例和配置信息的对象，允许对观察者进行进一步的操作或访问。
 */
export const allMutations = (callback) => {
    if (!everyNodesObserver.observer) {
        everyNodesObserver.callbacks.push(callback);
        const [observer, config] = allMutationsOn(document.body, records =>
            everyNodesObserver.callbacks.forEach(c => c(records, everyNodesObserver.observer)),
        );
        everyNodesObserver.observer = observer;
        everyNodesObserver.config = config;
    } else {
        everyNodesObserver.callbacks.push(callback);
    }
    return everyNodesObserver;
};

/**
 * 使用IntersectionObserver API为一个或多个目标元素设置一个观察者，以监视它们进入或离开视口的变化。
 * 观察者的配置可以自定义，以适应不同的监视需求。
 *
 * @param {Array<HTMLElement|string>} targets - 一个元素或元素数组，或者是能够定位这些元素的选择器。
 * @param {IntersectionObserverInit} config - IntersectionObserver的配置对象。
 * @param {IntersectionObserverCallback} callback - 当目标元素的交叉状态发生变化时执行的回调函数。
 * @returns {Array} 包含创建的IntersectionObserver实例和配置对象的数组。
 */
export const intersectionObserve = (targets, config, callback) => {
    const observer = new IntersectionObserver(callback, config);
    resolveTargets(targets).forEach(it => observer.observe(it));
    return [observer, config];
};

/**
 * 简化版的intersectionObserve，用于检测单个目标元素是否变为可见（即是否进入视口）。
 * 使用默认配置，没有额外的根元素或边距设置。
 *
 * @param {HTMLElement|string} target - 要检测的目标元素或选择器。
 * @param {Function} callback - 当目标元素变为可见时执行的回调函数。
 */
export const visible = (target, callback) =>
    intersectionObserve(resolveTargets([target]), {}, callback);

/**
 * 为单个目标元素设置一个观察者，以监视它是否在指定容器内变为可见。
 * 可以通过rootMargin参数自定义观察的边界。
 *
 * @param {HTMLElement|string} target - 要检测的目标元素或选择器。
 * @param {Element} container - 作为视口的容器元素。
 * @param {string} margin - 用于扩展或收缩容器视口边界的边距。
 * @param {Function} callback - 当目标元素在指定容器内变为可见时执行的回调函数。
 */
export const visibleInside = (target, container, margin, callback) =>
    intersectionObserve(
        resolveTargets([target]),
        {
            root: container,
            rootMargin: margin,
        },
        callback,
    );

/**
 * 使用ResizeObserver API为一个或多个目标元素设置一个观察者，以监视它们的尺寸变化。
 * 观察者的配置可以自定义，以适应不同的监视需求。
 *
 * @param {Array<HTMLElement|string>} targets - 一个元素或元素数组，或者是能够定位这些元素的选择器。
 * @param {ResizeObserverOptions} config - ResizeObserver的配置选项。
 * @param {ResizeObserverCallback} callback - 当目标元素的尺寸发生变化时执行的回调函数。
 * @returns {Array} 包含创建的ResizeObserver实例和配置对象的数组。
 */
export const resizeObserve = (targets, config, callback) => {
    const observer = new ResizeObserver(callback);
    resolveTargets(targets).forEach(it => observer.observe(it, config));
    return [observer, config];
};

/**
 * 简化版的resizeObserve，专注于监视单个目标元素的边界框尺寸变化。
 * 默认情况下，观察的是元素的边界框（border-box）大小。
 *
 * @param {HTMLElement|string} target - 要监视尺寸变化的目标元素或选择器。
 * @param {Function} callback - 当目标元素的尺寸发生变化时执行的回调函数。
 */
export const sizeChange = (target, callback) =>
    resizeObserve(
        resolveTargets([target]),
        {
            box: 'border-box',
        },
        callback,
    );

/**
 * 设置一个全局监听器以监视URL的变化。当检测到URL变化时，将触发一个自定义事件`urlChange`。
 * 此监听器是通过检查document.URL的变化来实现的，并利用`allMutations`函数来触发检查机制。
 * 此函数设计为只执行一次（使用_.once包装），以避免多次添加相同的事件监听器。
 */
const setupUrlChangeListener = _.once(() => {
    let lastUrl = window.location.href; // 使用 window.location.href 获取完整的 URL
    const fireEvent = () => {
        const newUrl = window.location.href;
        if (lastUrl !== newUrl) { // 只有在 URL 真正改变时才触发事件
            const event = new CustomEvent('urlChange', { detail: newUrl });
            window.dispatchEvent(event);
            lastUrl = newUrl; // 更新最后的 URL
        }
    };
    allMutations(() => fireEvent()); // 优化：直接调用 fireEvent 检查 URL 变化
});

/**
 * 设置一个监听器以监控URL变化，并在变化时执行回调函数。
 * 此函数首先检查是否已经设置了URL变化的监听器，如果没有，则设置之。
 * 当URL发生变化时，会触发回调函数。
 *
 * @param {Function} callback - URL变化时执行的回调函数，接收当前的URL作为参数。
 * @param {Object} [config] - 监听器的配置选项。
 */
export const urlChange = (callback, config) => {
    setupUrlChangeListener();
    callback(document.URL);
    window.addEventListener('urlChange', () => callback(document.URL), config);
};

/**
 * 监控 URL 变化并执行回调，如果当前 URL 匹配指定的模式。
 * @param requiredPagesKeys {Array<String>} - 需要匹配的 pageList 的键的数组。
 * @param callback {Function} - 匹配成功时的回调函数。
 */
export const urlWatchdog = (requiredPagesKeys, callback) => {
    urlChange(currentUrl => {
        const requiredPatterns = requiredPagesKeys.flatMap(key => pageList[key] || []);

        const isMatch = requiredPatterns.some(pattern => pattern.test(currentUrl));
        if (isMatch) {
            callback();
        }
    });
};

export const videoChange = async (callback, config) => {
    // to do...
};