import Supervisor from "./Supervisor";

class ACEV2LifeCycle {
    /**
     * `<head>`载入后运行
     * @param callback 回调函数
     */
    headLoaded<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            if (document.head !== null) {
                resolve(callback());
            } else {
                const [observer] = Supervisor.childList({
                    target: document.documentElement,
                    callback: () => {
                        if (document.head !== null) {
                            observer.disconnect();
                            resolve(callback());
                        }
                    }
                });
            }
        });
    }

    /**
     * `<body>`载入后运行 (`DOMContentLoaded`)
     * @param callback 回调函数
     */
    contentLoaded<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            if (document.readyState !== 'loading') {
                resolve(callback());
            } else {
                document.addEventListener('DOMContentLoaded', () => resolve(callback()));
            }
        });
    }

    /**
     * 网页`load`事件时运行
     * @param callback 回调函数
     */
    fullyLoaded<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            if (document.readyState === 'complete') {
                resolve(callback());
            } else {
                unsafeWindow.addEventListener('load', () => resolve(callback()));
            }
        });
    }

    /**
     * 脚本销毁前运行
     * @param callback 回调函数
     */
    beforeDestroy<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            unsafeWindow.addEventListener('beforeunload', () => resolve(callback()));
        });
    }

    /**
     * 触发脚本的生命周期事件
     * @param type 事件类型
     */
    raiseLifeCycleEvent({type}: {type: LifeCycleEventTypes}) {
        unsafeWindow.dispatchEvent(new CustomEvent(type));
    }
}

export default new ACEV2LifeCycle();