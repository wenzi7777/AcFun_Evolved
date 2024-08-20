import {Manager} from "../ui/Manager";
import I18n from "../core/api/I18n";

class ACEV2Dialog implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas({title, content, okAction, cancelAction}: { title: string, content: string, okAction: Function, cancelAction?: Function }) {
        if(cancelAction) {
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
                    children: [
                        {
                            type: 'window',
                            title: title,
                            children: [
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1vh',
                                        width: '100%',
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                padding: '1vw 1vh',
                                                gap: '1vw',
                                                width: '100%'
                                            },
                                            children: [
                                                {
                                                    type: 'sizer',
                                                    styleObject: {
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: '1vw',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'text',
                                                            label: content
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                gap: '1vw',
                                                width: '100%'
                                            },
                                            children: [
                                                {
                                                    type: 'sizer',
                                                    styleObject: {
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end',
                                                        gap: '1vw',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 7,
                                                                height: 3
                                                            },
                                                            children: [
                                                                {
                                                                    type: 'button',
                                                                    text: I18n.t({key: 'cancel'}),
                                                                    actions: [async () => {
                                                                        await cancelAction()
                                                                        this.destroy()
                                                                    }]
                                                                }
                                                            ]
                                                        },
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 7,
                                                                height: 3
                                                            },
                                                            children: [
                                                                {
                                                                    type: 'button',
                                                                    text: I18n.t({key: 'ok'}),
                                                                    actions: [async () => {
                                                                        await okAction()
                                                                        this.destroy()
                                                                    }]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        }else {
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
                    children: [
                        {
                            type: 'window',
                            title: title,
                            children: [
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        display: 'flex',
                                        flexDirection: 'column',
                                        gap: '1vh',
                                        width: '100%',
                                        justifyContent: 'space-between'
                                    },
                                    children: [
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start',
                                                padding: '1vw 1vh',
                                                gap: '1vw',
                                                width: '100%'
                                            },
                                            children: [
                                                {
                                                    type: 'sizer',
                                                    styleObject: {
                                                        display: 'flex',
                                                        flexWrap: 'wrap',
                                                        gap: '1vw',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'text',
                                                            label: content
                                                        }
                                                    ]
                                                },
                                            ]
                                        },
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'row',
                                                justifyContent: 'flex-end',
                                                gap: '1vw',
                                                width: '100%'
                                            },
                                            children: [
                                                {
                                                    type: 'sizer',
                                                    styleObject: {
                                                        display: 'flex',
                                                        flexDirection: 'row',
                                                        justifyContent: 'flex-end',
                                                        gap: '1vw',
                                                    },
                                                    children: [
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 7,
                                                                height: 3
                                                            },
                                                            children: [
                                                                {
                                                                    type: 'button',
                                                                    text: I18n.t({key: 'ok'}),
                                                                    actions: [async () => {
                                                                        await okAction()
                                                                        this.destroy()
                                                                    }]
                                                                }
                                                            ]
                                                        }
                                                    ]
                                                }
                                            ]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                },
            ]
        }
    }

    existed() {
        return this.tracker !== ''
    }

    draw() {
        if (!this.existed()) {
            this.updateCanvas({title: 'title', content: 'content', okAction: () => {}, cancelAction: () => {}})
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

    showDialog({title, content, okAction, cancelAction}: { title: string, content: string, okAction: Function, cancelAction?: Function }) {
        if (!this.existed()) {
            this.updateCanvas({title, content, okAction, cancelAction})
            this.tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker;
        } else {
            this.destroy()
            this.showDialog({title, content, okAction, cancelAction})
        }
    }
}

export default new ACEV2Dialog();