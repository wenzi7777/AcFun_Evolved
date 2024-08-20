import {Manager} from "../ui/Manager";
import LaunchpadUI from "./LaunchpadUI";
import launchpadIcon from "../ui/assets/launchpad.svg";
import PreferenceUI from "./PreferenceUI";
import preferenceIcon from "../ui/assets/preference.svg";

class SideMenu implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas() {
        this.canvas = [
            {
                type: 'sizer',
                position: {top: 38, bottom: 38, left: 0},
                size: {width: 5, height: 24},
                styleObject: {
                    position: 'fixed',
                    flexDirection: 'column',
                    gap: '3vh'
                },
                children: [
                    {
                        type: 'sizer',
                        size: {width: 5, height: 5},
                        events: [
                            {
                                event: 'click', handler:  () => LaunchpadUI.draw()
                            }
                        ],
                        styleObject: {
                            cursor: 'pointer'
                        },
                        children: [
                            {
                                type: 'image',
                                src: launchpadIcon
                            }
                        ]
                    },
                    {
                        type: 'sizer',
                        size: {width: 5, height: 5},
                        events: [
                            {event: 'click', handler: () => PreferenceUI.draw()}
                        ],
                        styleObject: {
                            cursor: 'pointer'
                        },
                        children: [
                            {
                                type: 'image',
                                src: preferenceIcon
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
            this.tracker = Manager.renderUI({canvas: this.canvas, slot: "sideMenu"}) as tracker;
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

export default new SideMenu()