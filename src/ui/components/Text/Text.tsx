import { h } from 'preact';
import './text.css';

const Text = ({ label, text, dark }: TextProps) => (
    <div className={`aceTextWrapper ${dark ? 'aceDark' : ''}`}>
        {
            label && <label className="aceTextLabel">{label}</label>
        }
        {
            text && <p className="aceText">{text}</p>
        }
    </div>
);

export default Text;
