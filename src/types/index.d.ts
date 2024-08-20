import { JSX } from 'preact';

declare global {
    namespace JSX {
        interface Element extends preact.JSX.Element {}
        interface IntrinsicElements {
            [elemName: string]: any;
        }
    }
}