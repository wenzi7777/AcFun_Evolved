import { h } from 'preact';
import './image.css';

const Image = ({ src, alt, asHTML = false, dark }: ImageProps) => {
    return (
        <div className={`aceImageWrapper ${dark ? 'aceDark' : ''}`}>
            {
                asHTML ? <div className="aceSvgIcon" dangerouslySetInnerHTML={{ __html: src }} /> : <img className="aceImage" src={src} alt={alt} />
            }
        </div>
    );
}

export default Image;
