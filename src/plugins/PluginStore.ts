import IPC from "../core/services/IPC";
import {Manager} from "../ui/Manager";
import ACEV2Loader from "./ACEV2Loader";
import IO from "../core/api/IO";
import Variable from "../core/api/Variable";
import pluginStoreIcon from '../ui/assets/pluginStore.svg'
import defaultIcon from "../ui/assets/default.svg";
import I18n from "../core/api/I18n";
import Clock from "../core/services/Clock";
import PluginToolkit from "../core/api/PluginToolkit";

class PluginStore {
    manifest: manifest = {
        icon: pluginStoreIcon,
        name: 'Plugin Store',
        id: '@wenzi7777/acev2_plugin_store',
        versions: ['0.0.1'],
        description: 'AcFun Evolved V2 插件商店。',
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

    async getBigManifest() {
        this.bigManifest = await IO.getJson({url: Variable.bigManifestURL()})
        let items = this.bigManifest?.length
        this.totalPages = Math.ceil(items || 1 / Variable.PAGE_SIZE)
        this.currentPage = 1
    }

    async updateCanvas({currentPage, totalPages}: { currentPage?: number, totalPages?: number }) {
        await this.getBigManifest()
        if (this.bigManifest?.length as number > Variable.PAGE_SIZE) {
            this.bigManifest = this.bigManifest?.slice((this.currentPage - 1) * Variable.PAGE_SIZE, this.currentPage * Variable.PAGE_SIZE) as manifest[]
        }

        let newAppList: any = [
            {
                type: 'sizer',
                styleObject: {
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    width: '100%',
                    height: '100%'
                },
                children: this.bigManifest?.map((item: manifest) => {
                    const icon = item.icon;
                    const isSVG = icon.startsWith('<svg');
                    const isDefaultIcon = icon === 'default';
                    const src = isSVG ? icon : isDefaultIcon ? defaultIcon : icon;
                    return {
                        type: 'sizer',
                        styleObject: {
                            width: '100%',
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'center',
                            margin: '10px',
                            cursor: 'pointer'
                        },
                        events: [
                            {
                                event: 'click',
                                handler: () => this.openDetailsPanel({manifest: item})
                            }
                        ],
                        children: [
                            {
                                type: 'image',
                                src: src,
                                asHTML: isSVG
                            },
                            {
                                type: 'text',
                                label: item.name + ' ' + item.id,
                                text: item.description
                            }
                        ]
                    }
                })
            }
        ]

        this.canvas = [
            {
                type: 'sizer',
                styleObject: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '80%',
                    flexGrow: 1
                },
                children: newAppList
            },
            {
                type: 'sizer',
                styleObject: {
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    width: '100%',
                    height: '20%',
                    flexGrow: 1
                },
                children: [
                    {
                        type: 'pagination',
                        currentPage: currentPage || this.currentPage,
                        totalPages: totalPages || this.totalPages,
                        onPageChange: (page: number) => this.currentPage += 1
                    }
                ]
            },
        ]
    }

    openDetailsPanel({manifest}: { manifest: manifest }) {
        const icon = manifest.icon;
        const isSVG = icon.startsWith('<svg');
        const isDefaultIcon = icon === 'default';
        const src = isSVG ? icon : isDefaultIcon ? defaultIcon : icon;
        let detailPanelTracker: tracker = Manager.renderUI({
            canvas: [
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
                                    styleObject: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center',
                                    },
                                    children: [
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                width: '32px',
                                                height: '32px'
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
                                            type: 'text',
                                            label: I18n.t({key: 'developer'}) + ' ' + manifest.author,
                                            text: manifest.name + ' | ' + manifest.id,
                                        }
                                    ]
                                },
                                {
                                    type: 'sizer',
                                    styleObject: {
                                        display: 'flex',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                        gap: '1vw'
                                    },
                                    children: [
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'description'}),
                                                    text: manifest.description
                                                },
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'latest-version'}),
                                                    text: manifest.versions[manifest.versions.length - 1]
                                                },
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'requested-apis'}),
                                                    text: manifest.requestedAPIs.join(', ')
                                                },
                                            ]
                                        },
                                        {
                                            type: 'sizer',
                                            styleObject: {
                                                display: 'flex',
                                                flexDirection: 'column',
                                                justifyContent: 'flex-start',
                                                alignItems: 'flex-start'
                                            },
                                            children: [
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'matches'}),
                                                    text: manifest.trigger.matches.join(', ')
                                                },
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'created-at'}) + ' ' +  Clock.toReadableTime({timestamp: parseInt(manifest.createdAt)}),
                                                    text: I18n.t({key: 'updated-at'}) + ' ' + Clock.toReadableTime({timestamp: parseInt(manifest.updatedAt)})
                                                },
                                                {
                                                    type: 'text',
                                                    label: I18n.t({key: 'reactive-ui'}),
                                                    text: manifest.trigger.receiveHandler ? I18n.t({key: 'enabled'}) : I18n.t({key: 'disabled'})
                                                }
                                            ]
                                        }
                                    ]
                                },
                                {
                                    type: 'sizer',
                                    size: {
                                        width: 23,
                                        height: 3
                                    },
                                    styleObject: {
                                        display: 'flex',
                                        justifyContent: 'space-between',
                                        alignItems: 'center'
                                    },
                                    children: [
                                        {
                                            type: 'sizer',
                                            size: {
                                                width: 7,
                                                height: 3
                                            },
                                            children: [{
                                                type: 'button',
                                                text: I18n.t({key: 'install'}),
                                                actions: [() => PluginToolkit.downloadAndInstallPluginPack({manifest: manifest})]
                                            }]
                                        },
                                        {
                                            type: 'sizer',
                                            size: {
                                                width: 7,
                                                height: 3
                                            },
                                            children: [{
                                                type: 'button',
                                                text: I18n.t({key: 'website'}),
                                                actions: [() => IO.openPageInNewTab({url: manifest.website, manifest: this.manifest})]
                                            }]
                                        },
                                        {
                                            type: 'sizer',
                                            size: {
                                                width: 7,
                                                height: 3
                                            },
                                            children: [{
                                                type: 'button',
                                                text: I18n.t({key: 'cancel'}),
                                                actions: [() => Manager.unmountUI({tracker: detailPanelTracker})]
                                            }]
                                        }
                                    ]
                                }
                            ]
                        }
                    ]
                }
            ], slot: 'plugins'
        }) as string
    }

    async render(data: {
        type: string,
        manifest: manifest,
        handler?: tracker
    }) {
        if (data.type === 'pluginStarted') {
            if (data.manifest.id === this.manifest.id) {
                ACEV2Loader.draw()
                await this.updateCanvas({})
                this.handler = data.handler as string
                this.tracker = Manager.renderUI({
                    canvas: this.canvas, slot: this.handler
                }) as string
                ACEV2Loader.destroy()
            }
        }
    }
}

export default new PluginStore()