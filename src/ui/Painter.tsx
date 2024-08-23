import {h} from 'preact';
import Sizer from "./components/Sizer/Sizer";
import Button from './components/Button/Button';
import Window from './components/Window/Window';
import Input from './components/Input/Input';
import Checkbox from './components/Checkbox/Checkbox';
import Select from './components/Select/Select';
import ColorPicker from './components/ColorPicker/ColorPicker';
import Range from './components/Range/Range';
import Text from './components/Text/Text';
import Image from './components/Image/Image';
import Video from './components/Video/Video';
import Audio from './components/Audio/Audio';
import Link from './components/Link/Link';
import ACEV2DOM from "../core/api/ACEV2DOM";
import Pagination from "./components/Pagination/Pagination";
import Preferences from "../core/api/Preferences";

const drawSizer = ({
                       position,
                       size,
                       styleObject,
                       events,
                       filled,
                       assignHandler,
                       draggable,
                       children
                   }: SizerProps): JSX.Element => {
    return (
        <Sizer dark={Preferences.isDarkMode()} position={position} size={size} styleObject={styleObject} events={events} filled={filled}
               assignHandler={assignHandler} draggable={draggable}>
            {children}
        </Sizer>
    );
}

const drawWindow = ({title, children}: WindowProps): JSX.Element => {
    return (
        <Window dark={Preferences.isDarkMode()} title={title}>
            {children}
        </Window>
    );
}

const drawButton = ({label, onClick}: ButtonProps): JSX.Element => {
    return <Button dark={Preferences.isDarkMode()} label={label} onClick={onClick}/>;
}

const drawInput = ({label, value, onChange}: InputProps): JSX.Element => {
    return <Input dark={Preferences.isDarkMode()} label={label} value={value} onChange={onChange}/>;
}

const drawCheckbox = ({label, checked, onChange}: CheckboxProps): JSX.Element => {
    return <Checkbox dark={Preferences.isDarkMode()} label={label} checked={checked} onChange={onChange}/>;
}

const drawSelect = ({label, options, value, onChange}: SelectProps): JSX.Element => {
    return <Select dark={Preferences.isDarkMode()} label={label} options={options} value={value} onChange={onChange}/>;
}

const drawColorPicker = ({label, color, onChange}: ColorPickerProps): JSX.Element => {
    return <ColorPicker dark={Preferences.isDarkMode()} label={label} color={color} onChange={onChange}/>;
}

const drawRange = ({label, value, min, max, onChange}: RangeProps): JSX.Element => {
    return <Range dark={Preferences.isDarkMode()} label={label} value={value} min={min} max={max} onChange={onChange}/>;
}

const drawText = ({label, text}: TextProps): JSX.Element => {
    return <Text dark={Preferences.isDarkMode()} label={label} text={text}/>;
}

const drawImage = ({src, alt, asHTML}: ImageProps): JSX.Element => {
    return <Image dark={Preferences.isDarkMode()} src={src} alt={alt} asHTML={asHTML}/>;
}

const drawVideo = ({src}: VideoProps): JSX.Element => {
    return <Video dark={Preferences.isDarkMode()} src={src}/>;
}

const drawAudio = ({src}: AudioProps): JSX.Element => {
    return <Audio dark={Preferences.isDarkMode()} src={src}/>;
}

const drawLink = ({label, href}: LinkProps): JSX.Element => {
    return <Link dark={Preferences.isDarkMode()} label={label} href={href}/>;
}

const drawPagination = ({currentPage, totalPages, onPageChange}: PaginationProps): JSX.Element => {
    return <Pagination dark={Preferences.isDarkMode()} currentPage={currentPage} totalPages={totalPages} onPageChange={onPageChange}/>;
}

const drawPlainText = ({text, styleObject}: PlainTextProps): JSX.Element => {
    let darkStyle = {
        color: Preferences.isDarkMode() ? '#fff' : '#333'
    }

    return <p style={{
        ...darkStyle,
        ...styleObject
    }}>{text}</p>;
}

const toggleAnimation = ({target, selector}: { target: tracker, selector: string }) => {
    let node = ACEV2DOM.locateElement({tracker: target}) as Element;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            node.querySelector(selector)?.classList.toggle('ani');
        });
    });
};

const toggleAllAnimation = ({target, selector}: { target: tracker, selector: string }) => {
    let node = ACEV2DOM.locateElement({tracker: target}) as Element;
    requestAnimationFrame(() => {
        requestAnimationFrame(() => {
            node?.querySelectorAll(selector)?.forEach(element => {
                element.classList.toggle('ani');
            })
        });
    });
};

export const Painter = {
    drawSizer,
    drawWindow,
    drawButton,
    drawInput,
    drawCheckbox,
    drawSelect,
    drawColorPicker,
    drawRange,
    drawText,
    drawImage,
    drawVideo,
    drawAudio,
    drawLink,
    drawPagination,
    drawPlainText,
    toggleAnimation,
    toggleAllAnimation
}