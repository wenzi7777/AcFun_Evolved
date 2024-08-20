import Uuid from '../api/Uuid';

class ACEV2DOM {
    public createRoot(): { root: string, sideMenu: string, plugins: string } {
        const element = document.createElement('div');
        element.id = 'ace_v2_wrapper';
        element.dataset.tracker = Uuid.v4();
        element.dataset.slot = 'root'

        const aceSideMenuWrapper = document.createElement('div')
        aceSideMenuWrapper.dataset.tracker = Uuid.v4();
        aceSideMenuWrapper.dataset.slot = 'sideMenu'
        element.appendChild(aceSideMenuWrapper);

        const acePluginsWrapper = document.createElement('div')
        acePluginsWrapper.dataset.tracker = Uuid.v4();
        acePluginsWrapper.dataset.slot = 'plugins'
        element.appendChild(acePluginsWrapper);

        document.body.appendChild(element);
        return {
            root: element.dataset.tracker,
            sideMenu: aceSideMenuWrapper.dataset.tracker,
            plugins: acePluginsWrapper.dataset.tracker
        };
    }

    public locateElement({tracker}: { tracker: string }): HTMLElement | null {
        return document.querySelector(`[data-tracker="${tracker}"]`) as HTMLElement;
    }

    public injectHTML({HTMLCode}: { HTMLCode: string }): tracker {
        const element = document.createElement('div');
        element.innerHTML = HTMLCode;
        const tracker = Uuid.v4();
        element.dataset.tracker = tracker;
        document.body.appendChild(element);
        return tracker;
    }

    public removeElement({tracker}: { tracker: string }): void {
        const element = document.querySelector(`[data-tracker="${tracker}"]`);
        if (element) {
            element.remove();
        }
    }

}

export default new ACEV2DOM();