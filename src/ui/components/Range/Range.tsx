import { h } from 'preact';
import './range.css';

const Range = ({ label, value, min, max, onChange, dark }: RangeProps) => (
    <div className={`aceRangeWrapper ${dark ? 'aceDark' : ''}`}>
        <label className="aceRangeLabel">{label}</label>
        <input
            type="range"
            className="aceRange"
            value={value}
            min={min}
            max={max}
            onInput={(e: any) => onChange(parseInt(e.target.value))}
        />
    </div>
);

export default Range;
