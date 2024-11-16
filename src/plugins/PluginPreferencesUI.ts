import I18n from "../core/api/I18n";
import {Manager} from "../ui/Manager";
import ACEV2Toast from "./ACEV2Toast";

class PluginPreferencesUI implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas({manifest, updatePreferencesHook}: { manifest: manifest, updatePreferencesHook: Function }) {
        let preferencesChildren: any = []
        if(!manifest.settings) {
            ACEV2Toast.showToast({text: '插件「' + manifest.id + '」没有设置。'})
            return
        }
        manifest.settings.forEach(setting => {
            if (setting.type === 'select') {
                preferencesChildren.push({
                    type: 'sizer',
                    styleObject: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    },
                    children: [
                        {
                            type: 'text',
                            text: setting.label
                        },
                        {
                            type: 'select',
                            options: setting.options,
                            value: setting.value,
                            onChange: (value: string) => {
                                updatePreferencesHook({setting: setting, newValue: value})
                            }
                        }
                    ]
                })
            } else if (setting.type === 'input') {
                preferencesChildren.push({
                    type: 'sizer',
                    styleObject: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    },
                    children: [
                        {
                            type: 'text',
                            text: setting.label
                        },
                        {
                            type: 'input',
                            value: setting.value,
                            onChange: (value: string) => {
                                updatePreferencesHook({setting: setting, newValue: value})
                            }
                        }
                    ]
                })
            } else if (setting.type === 'checkbox') {
                preferencesChildren.push({
                    type: 'sizer',
                    styleObject: {
                        display: 'flex',
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        width: '100%'
                    },
                    children: [
                        {
                            type: 'text',
                            text: setting.label
                        },
                        {
                            type: 'checkbox',
                            checked: setting.checked,
                            onChange: (checked: boolean) => {
                                updatePreferencesHook({setting: setting, newValue: checked})
                            }
                        }
                    ]
                })
            } else {
                ACEV2Toast.showToast({text: `未知的设置类型「${setting.type}」，请检查插件「${manifest.id}」的设置。`})
            }
        })
        this.canvas = [
            {
                type: 'sizer',
                styleObject: {
                    zIndex: 2739,
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
                        title: I18n.t({key: 'preferences'}) + ' | ' + manifest.name,
                        children: [
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1vh',
                                    width: '100%',
                                    height: '100%'
                                },
                                children: [
                                    {
                                        type: 'sizer',
                                        styleObject: {
                                            flexGrow: 1,
                                            display: 'flex',
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            width: '100%'
                                        },
                                        children: preferencesChildren
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
                                                            width: 8,
                                                            height: 3
                                                        },
                                                        children: [{
                                                            type: 'button',
                                                            text: I18n.t({key: 'ok'}),
                                                            actions: [() => {
                                                                this.destroy()
                                                            }]
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
    }

    showPluginPreferencesUI({manifest, updatePreferencesHook}: { manifest: manifest, updatePreferencesHook: Function }) {
        if(!manifest.settings) {
            ACEV2Toast.showToast({text: '插件「' + manifest.id + '」没有设置。'})
            return
        }
        this.updateCanvas({manifest, updatePreferencesHook})
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

export default new PluginPreferencesUI()