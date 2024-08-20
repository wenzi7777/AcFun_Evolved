import { h } from 'preact';
import './input.css';

const Input = ({ label, value, onChange, dark }: InputProps) => (
    <div className={`aceInputWrapper ${dark ? 'aceDark' : ''}`}>
        <label className="aceInputLabel">{label}</label>
        <input
            type="text"
            className="aceInput"
            value={value}
            onInput={(e: any) => onChange(e.target.value)}
        />
    </div>
);

export default Input;
