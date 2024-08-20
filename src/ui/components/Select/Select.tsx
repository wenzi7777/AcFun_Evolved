import { h } from 'preact';
import './select.css';

const Select = ({ label, options, value, onChange, dark }: SelectProps) => (
    <div className={`aceSelectWrapper ${dark ? 'aceDark' : ''}`}>
        <label className="aceSelectLabel">{label}</label>
        <select
            className="aceSelect"
            value={value}
            onChange={(e: any) => onChange(e.target.value)}
        >
            {options.map(option => (
                <option key={option} value={option}>
                    {option}
                </option>
            ))}
        </select>
    </div>
);

export default Select;
