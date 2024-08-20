import { h } from 'preact';
import './window.css';

const Window = ({ title, children, dark }: WindowProps) => (
    <div className={`aceWindowWrapper ${dark ? 'aceDark' : ''}`}>
        <div className="aceWindowTitleBar">
            <h1 className="aceWindowTitle">{title}</h1>
        </div>
        <div className="aceWindowContent">
            {children}
        </div>
    </div>
);

export default Window;
