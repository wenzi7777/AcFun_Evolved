import {Manager} from "../ui/Manager";
import Variable from "../core/api/Variable";

class ACEV2Toast implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas({text}: { text: string }) {
        this.canvas = [
            {
                type: 'sizer',
                position: {top: 48, left: 0},
                size: {width: 100, height: 4},
                styleObject: {
                    zIndex: 99,
                },
                filled: true,
                children: [
                    {
                        type: 'sizer',
                        styleObject: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1vh',
                            width: '100%',
                            justifyContent: 'center',
                            alignItems: 'center'
                        },
                        children: [
                            {
                                type: 'plainText',
                                styleObject: {
                                    fontSize: '1vw'
                                },
                                text: text
                            }
                        ]
                    }
                ]
            },
        ]
    }

    existed() {
        return this.tracker !== ''
    }

    draw() {
        if (!this.existed()) {
            this.tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker;
            setTimeout(() => {
                this.destroy()
            }, Variable.TOAST_DURATION)
        } else {
            this.destroy()
            this.draw()
            setTimeout(() => {
                this.destroy()
            }, Variable.TOAST_DURATION)
        }
    }

    destroy() {
        if (this.existed()) {
            Manager.unmountUI({tracker: this.tracker})
            this.tracker = ''
        }
    }

    showToast({text}: { text: string }) {
        if (!this.existed()) {
            this.updateCanvas({text})
            this.tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker;
            setTimeout(() => {
                this.destroy()
            }, Variable.TOAST_DURATION)
        } else {
            this.destroy()
            this.showToast({text})
            setTimeout(() => {
                this.destroy()
            }, Variable.TOAST_DURATION)
        }
    }
}

export default new ACEV2Toast();