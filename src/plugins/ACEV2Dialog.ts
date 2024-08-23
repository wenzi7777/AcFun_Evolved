import {Manager} from "../ui/Manager";
import I18n from "../core/api/I18n";
import Clock from "../core/services/Clock";

class ACEV2Dialog implements UI {
    canvas: DataObject[] = []
    tracker: DataObject[] = []

    updateCanvas({title, content, trackerTimestamp, okAction, cancelAction}: {
        title: string,
        content: string,
        trackerTimestamp: number,
        okAction: Function,
        cancelAction?: Function
    }) {
        if (cancelAction) {
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
                                                                        this.destroy({trackerTimestamp})
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
                                                                        this.destroy({trackerTimestamp})
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
        } else {
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
                                                                        this.destroy({trackerTimestamp})
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

    existed({tracker}: { tracker: tracker }) {
        let __existed = false
        this.tracker.forEach(item => {
            if (item.tracker === tracker) {
                __existed = true
            }
        })
        return __existed
    }

    draw() {
        let timestamp = Clock.getTimestamp() as number + Math.random()
        this.updateCanvas({
            title: 'title', content: 'content', trackerTimestamp: timestamp, okAction: () => {
            }, cancelAction: () => {
            }
        })
        let __tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker
        this.tracker.push({
            tracker: __tracker,
            timestamp: timestamp
        })
        return __tracker
    }

    destroy({trackerTimestamp}: { trackerTimestamp: number }) {
        let __trackerObject: any = this.tracker.find(item => item.timestamp === trackerTimestamp)
        if (this.existed({tracker: __trackerObject.tracker})) {
            Manager.unmountUI({tracker: __trackerObject.tracker})
            this.tracker = this.tracker.filter(item => item.timestamp !== trackerTimestamp)
        }
    }

    showDialog({title, content, okAction, cancelAction}: {
        title: string,
        content: string,
        okAction: Function,
        cancelAction?: Function
    }) {
        let timestamp = Clock.getTimestamp() as number + Math.random()
        this.updateCanvas({title: title, content: content, trackerTimestamp: timestamp, okAction, cancelAction})
        let __tracker = Manager.renderUI({canvas: this.canvas, slot: "plugins"}) as tracker
        this.tracker.push({
            tracker: __tracker,
            timestamp
        })
        return __tracker
    }
}

export default new ACEV2Dialog();