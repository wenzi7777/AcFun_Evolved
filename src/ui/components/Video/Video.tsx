import { h } from 'preact';
import './video.css';

const Video = ({ src, dark }: VideoProps) => (
    <div className={`aceVideoWrapper ${dark ? 'aceDark' : ''}`}>
        <video className="aceVideoPlayer" src={src} controls />
    </div>
);

export default Video;
