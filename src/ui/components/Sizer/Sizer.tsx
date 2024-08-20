import { h } from 'preact';
import { useEffect, useRef } from 'preact/hooks';
import './sizer.css';
import Logger from "../../../core/api/Logger";

const Sizer = ({ position, size, styleObject, events, filled, assignHandler, children, draggable = false, dark = false }: SizerProps) => {
    const ref = useRef<HTMLDivElement | null>(null);
    const dragHandleRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const element = ref.current;
        if (element && events) {
            events.forEach(({ event, handler }) => {
                Logger.info({ message: `Adding event listener for ${event} on ${element}` });
                element.addEventListener(event, handler);
                Logger.success({ message: `Event listener added for ${event} on ${element}` });
            });

            return () => {
                events.forEach(({ event, handler }) => {
                    Logger.info({ message: `Removing event listener for ${event} on ${element}` });
                    element.removeEventListener(event, handler);
                    Logger.success({ message: `Event listener removed for ${event} on ${element}` });
                });
            };
        }
    }, [events]);

    useEffect(() => {
        if (draggable && dragHandleRef.current) {
            const element = ref.current;
            const handle = dragHandleRef.current;
            let isDragging = false;
            let startX = 0;
            let startY = 0;
            let initialX = 0;
            let initialY = 0;

            const onMouseDown = (e: MouseEvent) => {
                isDragging = true;
                startX = e.clientX;
                startY = e.clientY;
                initialX = element!.offsetLeft;
                initialY = element!.offsetTop;

                // 在拖动开始时重置 transform 样式
                element!.style.transform = 'none';
                Logger.info({ message: `Dragging started at (${startX}, ${startY})` });
            };

            const onMouseMove = (e: MouseEvent) => {
                if (isDragging) {
                    const dx = e.clientX - startX;
                    const dy = e.clientY - startY;
                    let newX = initialX + dx;
                    let newY = initialY + dy;

                    // 确保不超出视窗边界
                    const elementRect = element!.getBoundingClientRect();
                    const windowWidth = window.innerWidth;
                    const windowHeight = window.innerHeight;

                    if (newX < 0) newX = 0;
                    if (newY < 0) newY = 0;
                    if (newX + elementRect.width > windowWidth) newX = windowWidth - elementRect.width;
                    if (newY + elementRect.height > windowHeight) newY = windowHeight - elementRect.height;

                    element!.style.left = `${newX}px`;
                    element!.style.top = `${newY}px`;
                    Logger.info({ message: `Dragging at (${e.clientX}, ${e.clientY})` });
                }
            };

            const onMouseUp = () => {
                if (isDragging) {
                    isDragging = false;
                    Logger.success({ message: `Dragging ended.` });
                }
            };

            handle.addEventListener('mousedown', onMouseDown);
            document.addEventListener('mousemove', onMouseMove);
            document.addEventListener('mouseup', onMouseUp);

            return () => {
                handle.removeEventListener('mousedown', onMouseDown);
                document.removeEventListener('mousemove', onMouseMove);
                document.removeEventListener('mouseup', onMouseUp);
            };
        }
    }, [draggable]);

    return (
        <div
            ref={ref}
            className={`aceSizer ${filled ? 'aceSizerFilled' : ''} ${dark ? 'aceDark' : ''}`}
            data-tracker={assignHandler}
            style={{
                position: `${position ? 'absolute' : ''}`,
                top: `${position?.top}vh`,
                right: `${position?.right}vw`,
                bottom: `${position?.bottom}vh}`,
                left: `${position?.left}vw`,
                width: `${size?.width}vw`,
                height: `${size?.height}vh`,
                ...styleObject
            }}
        >
            {children}
            {draggable && (
                <div
                    ref={dragHandleRef}
                    className="aceSizerDragHandler"
                ></div>
            )}
        </div>
    );
}

export default Sizer;
