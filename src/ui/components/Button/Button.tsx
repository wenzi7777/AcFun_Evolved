import { h } from 'preact';
import { useState } from 'preact/hooks';
import './button.css';

const Button = ({ label, onClick, dark }: ButtonProps) => {
    const [hovered, setHovered] = useState(false);

    return (
        <button
            className={`aceButton ${hovered ? 'hovered' : ''} ${dark ? 'aceDark' : ''}`}
            onClick={onClick}
            onMouseEnter={() => setHovered(true)}
            onMouseLeave={() => setHovered(false)}
        >
            {label}
        </button>
    );
};

export default Button;
