import Logger from "../core/api/Logger";
import {Painter} from "./Painter";

const toCanvasMap = ({canvas}: { canvas: any[] }): any[] => {
    Logger.info({message: 'Converting canvas to canvas map...'});
    return canvas.map(item => convertItem({item}));
}

const convertItem = ({item}: { item: any }): JSX.Element => {
    switch (item.type) {
        case 'sizer':
            const sizerChildren = item.children.map((child: any) => convertItem({item: child}));
            return Painter.drawSizer({
                position: item.position,
                size: item.size,
                styleObject: item.styleObject,
                events: item.events,
                assignHandler: item.assignHandler,
                filled: item.filled,
                children: sizerChildren,
                draggable: item.draggable
            });
        case 'button':
            return Painter.drawButton({label: item.text, onClick: item.actions[0]});
        case 'window':
            const content = item.children.map((child: any) => convertItem({item: child}));
            return Painter.drawWindow({title: item.title, children: content});
        case 'text':
            return Painter.drawText({label: item.label, text: item.text});
        case 'input':
            return Painter.drawInput({label: item.label, value: item.value, onChange: item.onChange});
        case 'checkbox':
            return Painter.drawCheckbox({label: item.label, checked: item.checked, onChange: item.onChange});
        case 'select':
            return Painter.drawSelect({
                label: item.label,
                options: item.options,
                value: item.value,
                onChange: item.onChange
            });
        case 'colorPicker':
            return Painter.drawColorPicker({label: item.label, color: item.color, onChange: item.onChange});
        case 'range':
            return Painter.drawRange({
                label: item.label,
                value: item.value,
                min: item.min,
                max: item.max,
                onChange: item.onChange
            });
        case 'image':
            return Painter.drawImage({src: item.src, alt: item.alt, asHTML: item.asHTML});
        case 'video':
            return Painter.drawVideo({src: item.src});
        case 'audio':
            return Painter.drawAudio({src: item.src});
        case 'link':
            return Painter.drawLink({label: item.label, href: item.href, manifest: item.manifest});
        case 'pagination':
            return Painter.drawPagination({
                currentPage: item.currentPage,
                totalPages: item.totalPages,
                onPageChange: item.onPageChange
            })
        case 'plainText':
            return Painter.drawPlainText({text: item.text, styleObject: item.styleObject});
        default:
            Logger.error({message: `Unknown item type: ${item.type}`});
            return Painter.drawPlainText({text: 'Unknown item type'});
    }
}

export const Converter = {
    toCanvasMap
}