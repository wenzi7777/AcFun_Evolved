import { h } from 'preact';
import './colorPicker.css';

const ColorPicker = ({ label, color, onChange, dark }: ColorPickerProps) => (
    <div className={`aceColorPickerWrapper ${dark ? 'aceDark' : ''}`}>
        <label className="aceColorPickerLabel">
            {label}
            <input
                type="color"
                className="aceColorPicker"
                value={color}
                onChange={(e: any) => onChange(e.target.value)}
            />
        </label>
    </div>
);

export default ColorPicker;
