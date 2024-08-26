import {h} from 'preact';
import './link.css';
import IO from "../../../core/api/IO";

const Link = ({label, href, manifest, dark}: LinkProps) => {
    let handler = (e: any) => {
        e.preventDefault()
        IO.openPageInNewTab({url: href, manifest})
    }
    return (
        <div className={`aceLinkWrapper ${dark ? 'aceDark' : ''}`}>
            <a className="aceLink" onClick={handler} href={href}>
                {label}
            </a>
        </div>
    )
};

export default Link;
