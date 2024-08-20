import {Converter} from "./Converter";
import {Fragment, h} from "preact";
import Logger from "../core/api/Logger";
import uuid from "../core/api/Uuid";

const assembleUI = ({canvas, slotElement}: { canvas: any[], slotElement: HTMLElement }): {
    element: JSX.Element,
    tracker: tracker
} => {
    Logger.info({message: 'Assembling UI...'});
    const canvasMap: any[] = Converter.toCanvasMap({canvas});

    const tracker = uuid.v4()

    let wrapper = document.createElement('div')
    wrapper.dataset.tracker = tracker
    slotElement.appendChild(wrapper)

    const element = (
        <Fragment>
            {canvasMap}
        </Fragment>
    );

    return {element, tracker};
}

export const Assembler = {
    assembleUI
}
