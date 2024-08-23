interface SizerProps {
    position?: { top?: number, right?: number, bottom?: number, left?: number };
    size?: { width?: number, height?: number };
    styleObject?: object,
    events?: { event: string; handler: (e: Event) => void }[];
    assignHandler?: tracker,
    filled?: boolean,
    children: any[];
    dark?: boolean,
    draggable?: boolean
}

interface AudioProps {
    src: string;
    dark?: boolean
}

interface ButtonProps {
    label: string;
    dark?: boolean,
    onClick: () => void;
}

interface CheckboxProps {
    label: string;
    checked: boolean;
    dark?: boolean,
    onChange: (checked: boolean) => void;
}

interface ColorPickerProps {
    label: string;
    color: string;
    dark?: boolean,
    onChange: (color: string) => void;
}

interface ImageProps {
    src: string;
    alt?: string;
    dark?: boolean,
    asHTML?: boolean;
}

interface InputProps {
    label: string;
    value: string;
    dark?: boolean,
    onChange: (value: string) => void;
}

interface LinkProps {
    label: string;
    dark?: boolean,
    href: string;
}

interface RangeProps {
    label: string;
    value: number;
    min: number;
    max: number;
    dark?: boolean,
    onChange: (value: number) => void;
}

interface SelectProps {
    label: string;
    options: string[];
    value: string;
    dark?: boolean,
    onChange: (value: string) => void;
}

interface TextProps {
    label: string;
    dark?: boolean,
    text: string;
}

interface VideoProps {
    dark?: boolean,
    src: string;
}

interface WindowProps {
    title: string;
    dark?: boolean,
    children: any[];
}

interface PlainTextProps {
    text: string,
    dark?: boolean,
    styleObject?: object
}

interface PaginationProps {
    currentPage: number;
    totalPages: number;
    dark?: boolean,
    onPageChange: (page: number) => void;
}

interface UI {
    canvas: DataObject[],
    tracker: tracker | tracker[] | DataObject[],
    updateCanvas: any,
    existed: Function,
    draw: Function,
    destroy: Function
}