import {Manager} from "../ui/Manager";
import defaultIcon from "../ui/assets/default.svg";
import I18n from "../core/api/I18n";

class ACEV2AboutUI implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas({manifest}: { manifest: manifest }) {
        const icon = manifest.icon;
        const isSVG = icon.startsWith('<svg');
        const isDefaultIcon = icon === 'defaultIcon';
        const src = isSVG ? icon : isDefaultIcon ? defaultIcon : icon;
        this.canvas = [
            {
                type: 'sizer',
                styleObject: {
                    zIndex: 99,
                    position: 'absolute',
                    left: '50%',
                    top: '50%',
                    transform: 'translate(-50%, -50%)',
                    maxWidth: '70vw',
                    maxHeight: '60vh'
                },
                filled: true,
                draggable: true,
                children: [
                    {
                        type: 'sizer',
                        styleObject: {
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '1vh',
                            alignItems: 'center',
                            justifyContent: 'space-around',
                            padding: '1vw'
                        },
                        children: [
                            {
                                type: 'sizer',
                                size: {width: 10, height: 10},
                                children: [
                                    {
                                        type: 'image',
                                        asHTML: isSVG,
                                        src: src
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                children: [
                                    {
                                        type: 'text',
                                        text: manifest.description
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                children: [
                                    {
                                        type: 'text',
                                        text: manifest.name + ' version ' + manifest.versions[manifest.versions.length - 1]
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                children: [
                                    {
                                        type: 'text',
                                        text: manifest.author + ' | ' + manifest.id
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                children: [
                                    {
                                        type: 'text',
                                        text: manifest.copyright
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                size: {
                                    width: 8,
                                    height: 3
                                },
                                children: [{
                                    type: 'button',
                                    text: I18n.t({key: 'ok'}),
                                    actions: [() => this.destroy()]
                                }]
                            }
                        ]
                    }
                ]
            }
        ]
    }

    showAboutUI({manifest}: { manifest: manifest }) {
        this.updateCanvas({manifest})
        this.draw()
    }

    existed() {
        return this.tracker !== ''
    }

    draw() {
        if (!this.existed()) {
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

export default new ACEV2AboutUI()