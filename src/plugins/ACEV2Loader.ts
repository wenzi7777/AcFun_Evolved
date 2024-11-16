import {Manager} from "../ui/Manager";
import I18n from "../core/api/I18n";

class ACEV2Loader implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas() {
        this.canvas = [
            {
                type: 'sizer',
                position: {top: 48, left: 0},
                size: {width: 100, height: 4},
                styleObject: {
                    zIndex: 2739,
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
                                text: I18n.t({key: 'loading-data'})
                            }
                        ]
                    }
                ]
            }
        ]
    }

    existed() {
        return this.tracker !== ''
    }

    draw() {
        if (!this.existed()) {
            this.updateCanvas()
            this.tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker;
        } else {
            this.destroy()
            this.draw()
        }
    }

    destroy() {
        if (this.existed()) {
            Manager.unmountUI({tracker: this.tracker})
            this.tracker = ''
        }
    }
}

export default new ACEV2Loader();