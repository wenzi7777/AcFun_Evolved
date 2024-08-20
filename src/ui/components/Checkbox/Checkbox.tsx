import { h } from 'preact';
import './checkbox.css';

const Checkbox = ({ label, checked, onChange, dark }: CheckboxProps) => (
    <div className={`aceCheckboxWrapper ${dark ? 'aceDark' : ''}`}>
        <label className="aceCheckboxLabel">
            <input
                type="checkbox"
                className="aceCheckbox"
                checked={checked}
                onChange={(e: any) => onChange(e.target.checked)}
            />
            {label}
        </label>
    </div>
);

export default Checkbox;
