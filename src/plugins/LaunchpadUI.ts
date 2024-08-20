import I18n from "../core/api/I18n";
import {Manager} from "../ui/Manager";
import PluginToolkit from "../core/api/PluginToolkit";
import Preferences from "../core/api/Preferences";
import defaultIcon from "../ui/assets/default.svg"
import Uuid from "../core/api/Uuid";
import PluginStore from "./PluginStore";
import IPC from "../core/services/IPC";
import ACEV2AboutUI from "./ACEV2AboutUI";
import PluginPreferencesUI from "./PluginPreferencesUI";
import ACEV2Toast from "./ACEV2Toast";
import IO from "../core/api/IO";
import DebugBridge from "./DebugBridge";

class LaunchpadUI implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''
    targetPanels: DataObject[] = []

    updateCanvas() {
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
                draggable: true,
                children: [
                    {
                        type: 'window',
                        title: I18n.t({key: 'launchpad'}),
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
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
                                            gap: '1vw',
                                            width: '100%',
                                            flexWrap: 'wrap',
                                            flexGrow: 1
                                        },
                                        children: [...this.getShortcuts()]
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
                                                            text: I18n.t({key: 'close'}),
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

    getShortcuts() {
        let icons = []
        let installedPlugins: pluginPack[] = []
        installedPlugins = PluginToolkit.getInstalledPlugins()
        icons.push(this.generateIcon({
            manifest: PluginStore.manifest
        }))
        if (Preferences.getPreference({category: 'developer', k: 'psv'}) !== 'full') {
            icons.push(this.generateIcon({
                manifest: DebugBridge.manifest
            }))
        }
        installedPlugins.forEach(installedPlugin => {
            icons.push(this.generateIcon({manifest: installedPlugin.manifest}))
        })
        return icons
    }

    generateIcon({manifest}: { manifest: manifest }) {
        const icon = manifest.icon;
        const isSVG = icon.startsWith('<svg');
        const isDefaultIcon = icon === 'default';
        const src = isSVG ? icon : isDefaultIcon ? defaultIcon : icon;
        return {
            type: 'sizer',
            styleObject: {
                width: '7vw',
                height: '10vw',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: '1vw',
                cursor: 'pointer'
            },
            events: [
                {event: 'click', handler: () => this.openTargetPanel({manifest})}
            ],
            children: [
                {
                    type: 'sizer',
                    styleObject: {
                        width: '7vw',
                        height: '7vw'
                    },
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
                    styleObject: {
                        width: '7vw',
                        height: '3vw',
                        display: 'flex',
                        justifyContents: 'center',
                        alignItems: 'center'
                    },
                    children: [
                        {
                            type: 'text',
                            label: `${manifest.name} ${manifest.bridged ? I18n.t({key: 'bridged-installation'}) : ''}`
                        }
                    ]
                },
            ]
        }
    }

    generateTargetPanel({manifest}: { manifest: manifest }) {
        let handler: tracker = ''
        if (manifest.trigger.receiveHandler) {
            handler = Uuid.v4()
        }
        let canvas = []
        if (manifest.settings) {
            canvas = [
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
                    draggable: true,
                    children: [
                        {
                            type: 'window',
                            title: manifest.name,
                            children: [
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '96%',
                                        height: '86%',
                                        margin: '1%',
                                        padding: '1%',
                                        overflowY: 'auto'
                                    },
                                    assignHandler: handler === '' ? undefined : handler,
                                    children: handler === '' ? [{
                                        type: 'text',
                                        label: I18n.t({key: 'welcome-to'}) + ' ' + manifest.name,
                                        text: I18n.t({key: 'this-plugin-does-not-support-interactive-ui'})
                                    }] : []
                                },
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        gap: '1vw',
                                        width: '100%',
                                        height: '10%'
                                    },
                                    children: [
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
                                                                text: I18n.t({key: 'preferences'}),
                                                                actions: [() => this.openPluginPreferencesPanel({manifest})]
                                                            }]
                                                        },
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 8,
                                                                height: 3
                                                            },
                                                            children: [{
                                                                type: 'button',
                                                                text: I18n.t({key: 'uninstall'}),
                                                                actions: [() => {
                                                                    if (manifest.id === '@wenzi7777/acev2_plugin_store' || manifest.id === '@wenzi7777/acev2_debug_bridge') {
                                                                        ACEV2Toast.showToast({text: I18n.t({key: 'cant-uninstall-build-in-plugins'})})
                                                                        return
                                                                    }
                                                                    PluginToolkit.uninstallPlugin({manifest})
                                                                }]
                                                            }]
                                                        },
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 8,
                                                                height: 3
                                                            },
                                                            children: [{
                                                                type: 'button',
                                                                text: I18n.t({key: 'about'}),
                                                                actions: [() => ACEV2AboutUI.showAboutUI({manifest})]
                                                            }]
                                                        },
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 8,
                                                                height: 3
                                                            },
                                                            children: [{
                                                                type: 'button',
                                                                text: I18n.t({key: 'website'}),
                                                                actions: [() => IO.openPageInNewTab({
                                                                    url: manifest.website,
                                                                    manifest
                                                                })]
                                                            }]
                                                        },
                                                        {
                                                            type: 'sizer',
                                                            size: {
                                                                width: 8,
                                                                height: 3
                                                            },
                                                            children: [{
                                                                type: 'button',
                                                                text: I18n.t({key: 'close'}),
                                                                actions: [() => {
                                                                    this.destroyTargetPanel({manifest})
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
        } else {
            canvas = [
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
                    draggable: true,
                    children: [
                        {
                            type: 'window',
                            title: manifest.name,
                            children: [
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        flexGrow: 1,
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        width: '96%',
                                        height: '86%',
                                        margin: '1%',
                                        padding: '1%',
                                        overflowY: 'auto'
                                    },
                                    assignHandler: handler === '' ? undefined : handler,
                                    children: handler === '' ? [{
                                        type: 'text',
                                        label: I18n.t({key: 'welcome-to'}) + ' ' + manifest.name,
                                        text: I18n.t({key: 'this-plugin-does-not-support-interactive-ui'})
                                    }] : []
                                },
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        display: 'flex',
                                        flexDirection: 'row',
                                        justifyContent: 'flex-end',
                                        gap: '1vw',
                                        width: '100%',
                                        height: '10%'
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
                                                        text: I18n.t({key: 'uninstall'}),
                                                        actions: [() => {
                                                            if (manifest.id === '@wenzi7777/acev2_plugin_store' || manifest.id === '@wenzi7777/acev2_debug_bridge') {
                                                                ACEV2Toast.showToast({text: I18n.t({key: 'cant-uninstall-build-in-plugins'})})
                                                                return
                                                            }
                                                            PluginToolkit.uninstallPlugin({manifest})
                                                        }]
                                                    }]
                                                },
                                                {
                                                    type: 'sizer',
                                                    size: {
                                                        width: 8,
                                                        height: 3
                                                    },
                                                    children: [{
                                                        type: 'button',
                                                        text: I18n.t({key: 'about'}),
                                                        actions: [() => ACEV2AboutUI.showAboutUI({manifest})]
                                                    }]
                                                },
                                                {
                                                    type: 'sizer',
                                                    size: {
                                                        width: 8,
                                                        height: 3
                                                    },
                                                    children: [{
                                                        type: 'button',
                                                        text: I18n.t({key: 'website'}),
                                                        actions: [() => IO.openPageInNewTab({
                                                            url: manifest.website,
                                                            manifest
                                                        })]
                                                    }]
                                                },
                                                {
                                                    type: 'sizer',
                                                    size: {
                                                        width: 8,
                                                        height: 3
                                                    },
                                                    children: [{
                                                        type: 'button',
                                                        text: I18n.t({key: 'close'}),
                                                        actions: [() => {
                                                            this.destroyTargetPanel({manifest})
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
        return {canvas, handler}
    }

    openTargetPanel({manifest}: { manifest: manifest }) {
        let {canvas, handler} = this.generateTargetPanel({manifest})
        this.targetPanels.push({
            manifest,
            tracker: Manager.renderUI({canvas, slot: 'plugins'})
        })
        IPC.sendMessage({
            channel: 'runtime:launchpad',
            data: {
                type: 'pluginStarted',
                manifest,
                handler
            }
        })
    }

    openPluginPreferencesPanel({manifest}: { manifest: manifest }) {
        let updatePreferencesHook = ({setting, newValue}: { setting: DataObject, newValue: any }) => {
            let newSettings: any = manifest.settings
            newSettings.forEach((setting: DataObject) => {
                if (setting.label === setting.label) {
                    setting.value = newValue
                }
            })
            PluginToolkit.saveSelfPreference({manifest, settings: newSettings})
        }

        PluginPreferencesUI.showPluginPreferencesUI({manifest, updatePreferencesHook})
    }

    destroyTargetPanel({manifest}: { manifest: manifest }) {
        let targetPanel = this.targetPanels.find(targetPanel => targetPanel.manifest.id === manifest.id)
        if (targetPanel) {
            Manager.unmountUI({tracker: targetPanel.tracker})
            this.targetPanels = this.targetPanels.filter(targetPanel => targetPanel.manifest.id !== manifest.id)
        }
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

export default new LaunchpadUI()