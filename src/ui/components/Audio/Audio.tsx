import { h } from 'preact';
import './audio.css';

const Audio = ({ src, dark }: AudioProps) => (
    <div className={`aceAudioWrapper ${dark ? 'aceDark' : ''}`}>
        <audio className="aceAudioPlayer" src={src} controls />
    </div>
);

export default Audio;
