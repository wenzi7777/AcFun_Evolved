import {aceNodeLocating} from "./ace";
import {pageList} from "./url";

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

export const mutationObserve = (targets, config, callback) => {
    const observer = new MutationObserver(callback);
    resolveTargets(targets).forEach(it => observer.observe(it, config));
    callback([], observer);
    return [observer, config];
};

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

export const intersectionObserve = (targets, config, callback) => {
    const observer = new IntersectionObserver(callback, config);
    resolveTargets(targets).forEach(it => observer.observe(it));
    return [observer, config];
};

export const visible = (target, callback) =>
    intersectionObserve(resolveTargets([target]), {}, callback);

export const visibleInside = (target, container, margin, callback) =>
    intersectionObserve(
        resolveTargets([target]),
        {
            root: container,
            rootMargin: margin,
        },
        callback,
    );

export const resizeObserve = (targets, config, callback) => {
    const observer = new ResizeObserver(callback);
    resolveTargets(targets).forEach(it => observer.observe(it, config));
    return [observer, config];
};

export const sizeChange = (target, callback) =>
    resizeObserve(
        resolveTargets([target]),
        {
            box: 'border-box',
        },
        callback,
    );

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

};