import {h, render} from 'preact';
import {Assembler} from './Assembler';
import Logger from "../core/api/Logger";
import ACEV2DOM from '../core/api/ACEV2DOM';
import launchpadIcon from './assets/launchpad.svg';
import functionsIcon from './assets/functions.svg';
import preferenceIcon from './assets/preference.svg';
import PreferenceUI from "../plugins/PreferenceUI";
import {Painter} from "./Painter";
import Variable from "../core/api/Variable";
import LaunchpadUI from "../plugins/LaunchpadUI";

const parent = ACEV2DOM.createRoot()
const root: HTMLElement = ACEV2DOM.locateElement({tracker: parent.root}) as HTMLElement;
const sideMenu: HTMLElement = ACEV2DOM.locateElement({tracker: parent.sideMenu}) as HTMLElement;
const plugins: HTMLElement = ACEV2DOM.locateElement({tracker: parent.plugins}) as HTMLElement;

const renderUI = ({canvas, slot}: { canvas: any[], slot: 'root' | 'sideMenu' | 'plugins' | tracker }): tracker | null => {
    let rootTracker
    if (root) {
        if (slot === 'root') {
            const {element, tracker} = Assembler.assembleUI({canvas, slotElement: root});
            rootTracker = tracker
            render(element, ACEV2DOM.locateElement({tracker}) as HTMLElement);
            Painter.toggleAllAnimation({target: tracker, selector: 'div.aceSizer'});
        } else if (slot === 'sideMenu') {
            const {element, tracker} = Assembler.assembleUI({canvas, slotElement: sideMenu});
            rootTracker = tracker
            render(element, ACEV2DOM.locateElement({tracker}) as HTMLElement);
            Painter.toggleAllAnimation({target: tracker, selector: 'div.aceSizer'});
        } else if (slot === 'plugins') {
            const {element, tracker} = Assembler.assembleUI({canvas, slotElement: plugins});
            rootTracker = tracker
            render(element, ACEV2DOM.locateElement({tracker}) as HTMLElement);
            Painter.toggleAllAnimation({target: tracker, selector: 'div.aceSizer'});
        } else {
            const {element, tracker} = Assembler.assembleUI({canvas, slotElement: ACEV2DOM.locateElement({tracker: slot}) as HTMLElement});
            rootTracker = tracker
            render(element, ACEV2DOM.locateElement({tracker}) as HTMLElement);
            Painter.toggleAllAnimation({target: tracker, selector: 'div.aceSizer'});
        }
        Logger.info({message: 'UI rendered.'});
        return rootTracker as string
    } else {
        Logger.error({message: 'Root element not found'});
        return null;
    }
}

const unmountUI = ({tracker}: { tracker: tracker }) => {
    const elementToRemove = ACEV2DOM.locateElement({tracker}) as Element;
    if (elementToRemove && elementToRemove.parentElement) {
        Painter.toggleAllAnimation({target: tracker, selector: 'div.aceSizer'});

        setTimeout(() => {
            elementToRemove.parentElement?.removeChild(elementToRemove);
        }, Variable.ANIMATION_DURATION);

        Logger.info({message: 'UI unmounted.'});
    } else {
        Logger.error({message: 'Element to unmount not found or parent element is missing.'});
    }
}

export const Manager = {
    renderUI,
    unmountUI
}