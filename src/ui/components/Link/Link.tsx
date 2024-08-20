import { h } from 'preact';
import './link.css';

const Link = ({ label, href, dark }: LinkProps) => (
    <div className={`aceLinkWrapper ${dark ? 'aceDark' : ''}`}>
        <a className="aceLink" href={href}>
            {label}
        </a>
    </div>
);

export default Link;
