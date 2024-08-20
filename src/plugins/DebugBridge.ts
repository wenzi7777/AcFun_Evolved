import IPC from "../core/services/IPC";
import ACEV2Loader from "./ACEV2Loader";
import {Manager} from "../ui/Manager";
import I18n from "../core/api/I18n";

import debugBridgeIcon from '../ui/assets/debugBridge.svg'
import clearIcon from '../ui/assets/clear.svg'
import importIcon from '../ui/assets/import.svg'
import defaultIcon from '../ui/assets/default.svg'
import remoteIcon from '../ui/assets/remote.svg'
import ACEV2Dialog from "./ACEV2Dialog";
import ACEV2Storage from "../core/services/ACEV2Storage";
import ACEV2Toast from "./ACEV2Toast";
import IO from "../core/api/IO";
import Variable from "../core/api/Variable";
import PluginToolkit from "../core/api/PluginToolkit";
import Preferences from "../core/api/Preferences";
import Logger from "../core/api/Logger";

class DebugBridge {
    manifest: manifest = {
        icon: debugBridgeIcon,
        name: 'Debug Bridge',
        id: '@wenzi7777/acev2_debug_bridge',
        versions: ['0.0.1'],
        description: 'AcFun Evolved V2 插件调试桥。',
        createdAt: new Date('2024-08-09').getTime() + '',
        updatedAt: new Date().getTime() + '',
        author: 'wenzi7777',
        copyright: '(c)2024 wenzi7777, licensed under the MIT License.',
        requestedAPIs: [],
        website: 'https://acev2.1205.moe/',
        trigger: {
            receiveHandler: true,
            matches: ['*']
        }
    }
    handler: tracker = ''
    tracker: tracker = ''
    canvas: canvas = []
    currentPage: number = 1
    totalPages: number = 10

    bigManifest: manifest[] | null = null

    wakeUp() {
        IPC.listen({channel: 'runtime:launchpad', handler: (data) => this.render(data), manifest: this.manifest})
    }


    async updateCanvas() {
        this.canvas = [
            {
                type: 'sizer',
                styleObject: {
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    flexDirection: 'column',
                    width: '100%',
                    height: '100%',
                    flexGrow: 1,
                    gap: '1vh'
                },
                children: [
                    {
                        type: 'text',
                        label: '开发者工具',
                        text: 'AcFun Evolved V2 插件调试桥'
                    },
                    {
                        type: 'sizer',
                        styleObject: {
                            display: 'flex',
                            flexWrap: 'wrap',
                            gap: '1vw'
                        },
                        children: [
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-clear-monkey-storage'}) + '?',
                                            content: I18n.t({key: 'all-plugins-and-preferences-will-be-lose-its-unrecoverable'}) + '!',
                                            okAction: () => ACEV2Storage.clearMonkey(),
                                            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: clearIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'clear-monkey-storage'}),
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-clear-local-storage'}) + '?',
                                            content: I18n.t({key: 'all-preferences-stored-in-local-storage-will-be-lose-its-unrecoverable'}) + '!',
                                            okAction: () => ACEV2Storage.clearLocal(),
                                            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: clearIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'clear-local-storage'}),
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-import-monkey-backup'}) + '?',
                                            content: I18n.t({key: 'all-plugins-and-preferences-will-be-lose-its-unrecoverable'}) + '! (Please select acev2.monkey.backup.json)',
                                            okAction: () => {
                                                IO.ACEV2Upload({
                                                    readType: 'text', callback: ({content, file}) => {
                                                        if (file.name.indexOf('acev2.monkey') === -1) {
                                                            ACEV2Toast.showToast({text: I18n.t({key: 'failed-to-import-filename-is-invalid'})})
                                                        } else {
                                                            ACEV2Storage.clearMonkey()
                                                            ACEV2Storage.importMonkey({data: JSON.parse(content as string)})
                                                            ACEV2Dialog.showDialog({
                                                                title: I18n.t({key: 'import-succeed'}),
                                                                content: I18n.t({key: 'click-ok-to-reload-page'}),
                                                                okAction: () => location.reload()
                                                            })
                                                        }
                                                    }
                                                })
                                            },
                                            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: importIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'import-monkey-storage'}),
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-import-local-storage-backup'}) + '?',
                                            content: I18n.t({key: 'all-preferences-stored-in-local-storage-will-be-lose-its-unrecoverable'}) + '! (Please select acev2.local.backup.json)',
                                            okAction: () => {
                                                IO.ACEV2Upload({
                                                    readType: 'text', callback: ({content, file}) => {
                                                        if (file.name.indexOf('acev2.local') === -1) {
                                                            ACEV2Toast.showToast({text: I18n.t({key: 'failed-to-import-filename-is-invalid'})})
                                                        } else {
                                                            ACEV2Storage.clearLocal()
                                                            ACEV2Storage.importLocal({data: JSON.parse(content as string)})
                                                            ACEV2Dialog.showDialog({
                                                                title: I18n.t({key: 'import-succeed'}),
                                                                content: I18n.t({key: 'click-ok-to-reload-page'}),
                                                                okAction: () => location.reload()
                                                            })
                                                        }
                                                    }
                                                })
                                            },
                                            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: importIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'import-local-storage'}),
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-install-external-plugin'}) + '?',
                                            content: I18n.t({key: 'you-need-to-be-sure-you-trust-the-origin-especially-when-psv-is-half-or-off'}),
                                            okAction: () => {
                                                IO.ACEV2Upload({
                                                    readType: 'arrayBuffer', callback: ({content, file}) => {
                                                        if (file.name.indexOf('raw.json.tar.gz') === -1) {
                                                            ACEV2Dialog.showDialog({
                                                                title: I18n.t({key: 'failed-to-install'}),
                                                                content: I18n.t({key: 'invalid-plugin-package-it-may-because-you-do-not-name-it-correctly-or-pack-it-correctly-please-use-the-developer-kit-in-github'}),
                                                                okAction: () => IO.openPageInNewTab({
                                                                    url: Variable.developerKitURL(),
                                                                    manifest: Variable.MASTER_MANIFEST
                                                                })
                                                            })
                                                        } else {
                                                            PluginToolkit.extractAndInstallPlugin({compressedData: content as ArrayBuffer})
                                                        }
                                                    }
                                                })
                                            },
                                            cancelAction: () => ACEV2Toast.showToast({text: I18n.t({key: 'canceled'})})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: defaultIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'install-plugin-package'}) + ' (raw.json.tar.gz)',
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => ACEV2Dialog.showDialog({
                                            title: I18n.t({key: 'do-you-really-want-to-install-external-plugin'}) + '?',
                                            content: I18n.t({key: 'you-need-to-be-sure-you-trust-the-origin-especially-when-psv-is-half-or-off'}),
                                            okAction: () => {
                                                IO.ACEV2Upload({
                                                    readType: 'text', callback: ({content, file}) => {
                                                        if (file.name.indexOf('raw.json') === -1) {
                                                            ACEV2Dialog.showDialog({
                                                                title: I18n.t({key: 'failed-to-install'}),
                                                                content: I18n.t({key: 'invalid-plugin-package-it-may-because-you-do-not-name-it-correctly-or-pack-it-correctly-please-use-the-developer-kit-in-github'}),
                                                                okAction: () => IO.openPageInNewTab({
                                                                    url: Variable.developerKitURL(),
                                                                    manifest: Variable.MASTER_MANIFEST
                                                                })
                                                            })
                                                        } else {
                                                            PluginToolkit.installPlugin({
                                                                pluginPack: JSON.parse(content as string),
                                                                bridged: false
                                                            })
                                                        }
                                                    }
                                                })
                                            },
                                            cancelAction: () => ACEV2Toast.showToast({text: 'canceled'})
                                        })
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: defaultIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'install-unpacked-plugin'}) + ' (raw.json)',
                                    }
                                ]
                            },
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    padding: '1vw',
                                    cursor: 'pointer',
                                    flexDirection: 'column',
                                    gap: '1vh'
                                },
                                events: [
                                    {
                                        event: 'click',
                                        handler: () => this.renderConfigurePanel()
                                    }
                                ],
                                filled: true,
                                children: [
                                    {
                                        type: 'image',
                                        src: remoteIcon,
                                    },
                                    {
                                        type: 'text',
                                        label: I18n.t({key: 'configure-bridge'}),
                                    }
                                ]
                            },
                        ]
                    }
                ]
            }
        ]
    }

    async render(data: {
        type: string,
        manifest: manifest,
        handler?: tracker
    }) {
        if (data.type === 'pluginStarted') {
            if (data.manifest.id === this.manifest.id) {
                ACEV2Loader.draw()
                await this.updateCanvas()
                this.handler = data.handler as string
                this.tracker = Manager.renderUI({
                    canvas: this.canvas, slot: this.handler
                }) as string
                ACEV2Loader.destroy()
            }
        }
    }

    renderConfigurePanel() {
        Logger.info({message: 'renderConfigurePanel'})
        let tracker = Manager.renderUI({
            canvas: [
                {
                    type: 'sizer',
                    filled: true,
                    styleObject: {
                        display: 'flex',
                        flexDirection: 'column',
                        gap: '1vh',
                        zIndex: 100,
                    },
                    draggable: true,
                    size: {
                        width: 20,
                        height: 30
                    },
                    position: {
                        left: 40,
                        top: 35
                    },
                    children: [
                        {
                            type: 'text',
                            label: I18n.t({key: 'configure-bridge'})
                        },
                        {
                            type: 'checkbox',
                            label: I18n.t({key: 'enable-bridge'}),
                            checked: Preferences.getBridgeConfigurations().enabled,
                            onChange: (checked: boolean) => Preferences.updateBridgePreferences({
                                newBridgeConfigurations: {
                                    enabled: checked,
                                    pluginLoadOrder: Preferences.getBridgeConfigurations().pluginLoadOrder,
                                    connect: Preferences.getBridgeConfigurations().connect
                                }
                            })
                        },
                        // {
                        //     type: 'select',
                        //     label: I18n.t({key: 'plugin-load-order'}),
                        //     options: [I18n.t({key: 'when-head-loaded'}), I18n.t({key: 'when-body-loaded'}), I18n.t({key: 'after-all'})],
                        //     value: I18n.t({
                        //         key: Preferences.getBridgeConfigurations().pluginLoadOrder
                        //     }),
                        //     onChange: (value: any) => {
                        //         Preferences.updateBridgePreferences({
                        //             newBridgeConfigurations: {
                        //                 enabled: Preferences.getBridgeConfigurations().enabled,
                        //                 pluginLoadOrder: I18n.reverseT({value}),
                        //                 connect: Preferences.getBridgeConfigurations().connect
                        //             }
                        //         })
                        //     }
                        // },
                        {
                            type: 'input',
                            label: I18n.t({key: 'connect'}),
                            value: Preferences.getBridgeConfigurations().connect,
                            onChange: (value: string) => {
                                Preferences.updateBridgePreferences({
                                    newBridgeConfigurations: {
                                        enabled: Preferences.getBridgeConfigurations().enabled,
                                        pluginLoadOrder: Preferences.getBridgeConfigurations().pluginLoadOrder,
                                        connect: value
                                    }
                                })
                            }
                        },
                        {
                            type: 'sizer',
                            size: {
                                width: 8,
                                height: 3
                            },
                            children: [
                                {
                                    type: 'button',
                                    text: I18n.t({key: 'ok'}),
                                    actions: [() => {
                                        Manager.unmountUI({tracker: tracker as string})
                                    }]
                                }
                            ]
                        }
                    ]
                }
            ],
            slot: "plugins"
        })
    }
}

export default new DebugBridge()