import ACEV2DOM from "./ACEV2DOM";

class Supervisor {
    private resolveTargets(targets: Target[]): HTMLElement[] {
        let nodeList: HTMLElement[] = [];

        targets.forEach(target => {
            if (target instanceof HTMLElement) {
                nodeList.push(target);
            } else {
                const node = ACEV2DOM.locateElement({ tracker: target });
                if (node) {
                    nodeList.push(node);
                } else {
                    document.querySelectorAll(target).forEach(element => nodeList.push(element as HTMLElement));
                }
            }
        });

        return nodeList;
    }

    public mutationObserve({ targets, config, callback }: { targets: Target[], config: MutationObserverInit, callback: MutationCallback }): [MutationObserver, MutationObserverInit] {
        const observer = new MutationObserver(callback);
        this.resolveTargets(targets).forEach(it => observer.observe(it, config));
        callback([], observer);
        return [observer, config];
    }

    public childList({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: true, subtree: false, attributes: false },
            callback
        });
    }

    public childListSubtree({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: true, subtree: true, attributes: false },
            callback
        });
    }

    public attributes({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: false, subtree: false, attributes: true },
            callback
        });
    }

    public attributesSubtree({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: false, subtree: true, attributes: true },
            callback
        });
    }

    public characterData({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: false, subtree: false, attributes: false, characterData: true },
            callback
        });
    }

    public characterDataSubtree({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: false, subtree: true, attributes: false, characterData: true },
            callback
        });
    }

    public allMutationsOn({ target, callback }: { target: Target, callback: MutationCallback }) {
        return this.mutationObserve({
            targets: [target],
            config: { childList: true, subtree: true, attributes: true, characterData: true },
            callback
        });
    }

    public intersectionObserve({ targets, config, callback }: { targets: Target[], config: IntersectionObserverInit, callback: IntersectionCallback }): [IntersectionObserver, IntersectionObserverInit] {
        const observer = new IntersectionObserver(callback, config);
        this.resolveTargets(targets).forEach(it => observer.observe(it));
        return [observer, config];
    }

    public visible({ target, callback }: { target: Target, callback: IntersectionCallback }) {
        return this.intersectionObserve({
            targets: [target],
            config: {},
            callback
        });
    }

    public visibleInside({ target, container, margin, callback }: { target: Target, container: Element, margin: string, callback: IntersectionCallback }) {
        return this.intersectionObserve({
            targets: [target],
            config: { root: container, rootMargin: margin },
            callback
        });
    }

    public resizeObserve({ targets, config, callback }: { targets: Target[], config: ResizeObserverOptions, callback: ResizeCallback }): [ResizeObserver, ResizeObserverOptions] {
        const observer = new ResizeObserver(callback);
        this.resolveTargets(targets).forEach(it => observer.observe(it, config));
        return [observer, config];
    }

    public sizeChange({ target, callback }: { target: Target, callback: ResizeCallback }) {
        return this.resizeObserve({
            targets: [target],
            config: { box: 'border-box' },
            callback
        });
    }

    private everyNodesObserver: {
        observer: MutationObserver | null;
        config: MutationObserverInit | null;
        callbacks: ((records: MutationRecord[], observer: MutationObserver) => void)[];
    } = {
        observer: null,
        config: null,
        callbacks: []
    };

    private setupUrlChangeListener() {
        let lastUrl = window.location.href;
        const fireEvent = () => {
            const newUrl = window.location.href;
            if (lastUrl !== newUrl) {
                const event = new CustomEvent('urlChange', { detail: newUrl });
                window.dispatchEvent(event);
                lastUrl = newUrl;
            }
        };
        this.allMutations(() => fireEvent());
    }

    public urlChange(callback: (url: string) => void, config?: AddEventListenerOptions) {
        this.setupUrlChangeListener();
        callback(document.URL);
        window.addEventListener('urlChange', () => callback(document.URL), config);
    }


    public allMutations(callback: (records: MutationRecord[], observer: MutationObserver) => void) {
        if (!this.everyNodesObserver.observer) {
            this.everyNodesObserver.callbacks.push(callback);
            const [observer, config] = this.mutationObserve({
                targets: [document.body],
                config: { childList: true, subtree: true, attributes: true, characterData: true },
                callback: records => this.everyNodesObserver.callbacks.forEach(c => c(records, this.everyNodesObserver.observer!)),
            });
            this.everyNodesObserver.observer = observer;
            this.everyNodesObserver.config = config;
        } else {
            this.everyNodesObserver.callbacks.push(callback);
        }
        return this.everyNodesObserver;
    }
}

export default new Supervisor();