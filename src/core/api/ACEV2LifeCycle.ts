import Supervisor from "./Supervisor";

class ACEV2LifeCycle {
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

    contentLoaded<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            if (document.readyState !== 'loading') {
                resolve(callback());
            } else {
                document.addEventListener('DOMContentLoaded', () => resolve(callback()));
            }
        });
    }

    fullyLoaded<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            if (document.readyState === 'complete') {
                resolve(callback());
            } else {
                unsafeWindow.addEventListener('load', () => resolve(callback()));
            }
        });
    }

    beforeDestroy<T>({callback}: {callback: () => T}): Promise<T> {
        return new Promise<T>(resolve => {
            unsafeWindow.addEventListener('beforeunload', () => resolve(callback()));
        });
    }

    raiseLifeCycleEvent({type}: {type: LifeCycleEventTypes}) {
        unsafeWindow.dispatchEvent(new CustomEvent(type));
    }
}

export default new ACEV2LifeCycle();