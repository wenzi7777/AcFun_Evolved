import {Manager} from "../ui/Manager";
import I18n from "../core/api/I18n";
import Preferences from "../core/api/Preferences";
import ACEV2AboutUI from "./ACEV2AboutUI";
import Variable from "../core/api/Variable";
import ACEV2Dialog from "./ACEV2Dialog";
import Version from "../core/api/Version";
import IO from "../core/api/IO";

class PreferenceUI implements UI {
    canvas: DataObject[] = []
    tracker: tracker = ''

    updateCanvas() {
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
                        title: I18n.t({key: 'preferences'}),
                        children: [
                            {
                                type: 'sizer',
                                styleObject: {
                                    display: 'flex',
                                    flexDirection: 'column',
                                    gap: '1vh',
                                    width: '100%'
                                },
                                children: [
                                    {
                                        type: 'sizer',
                                        styleObject: {
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-start',
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
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                },
                                                children: [
                                                    {
                                                        type: 'text',
                                                        label: I18n.t({key: 'general'})
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'plugin-load-order'}),
                                                        options: [I18n.t({key: 'when-head-loaded'}), I18n.t({key: 'when-body-loaded'}), I18n.t({key: 'after-all'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'general',
                                                                k: 'pluginLoadOrder'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'general',
                                                                k: 'pluginLoadOrder',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'source'}),
                                                        options: [I18n.t({key: 'github'}), I18n.t({key: 'cloudflare'}), I18n.t({key: 'jsdelivr'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'general',
                                                                k: 'source'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'general',
                                                                k: 'source',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'update-runtime-when'}),
                                                        options: [I18n.t({key: 'startup'}), I18n.t({key: 'daily'}), I18n.t({key: 'weekly'}), I18n.t({key: 'monthly'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'general',
                                                                k: 'updateRuntimeWhen'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'general',
                                                                k: 'updateRuntimeWhen',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'update-runtime-to'}),
                                                        options: [I18n.t({key: 'stable'}), I18n.t({key: 'beta'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'general',
                                                                k: 'updateRuntimeTo'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'general',
                                                                k: 'updateRuntimeTo',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'update-plugins-when'}),
                                                        options: [I18n.t({key: 'startup'}), I18n.t({key: 'daily'}), I18n.t({key: 'weekly'}), I18n.t({key: 'monthly'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'general',
                                                                k: 'updatePluginsWhen'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'general',
                                                                k: 'updatePluginsWhen',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'sizer',
                                                styleObject: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '1vw',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                },
                                                children: [
                                                    {
                                                        type: 'text',
                                                        label: I18n.t({key: 'visual'}),
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'theme'}),
                                                        options: [I18n.t({key: 'auto'}), I18n.t({key: 'light'}), I18n.t({key: 'dark'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'visual',
                                                                k: 'theme'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'visual',
                                                                k: 'theme',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'language'}),
                                                        options: [I18n.t({key: 'auto'}), I18n.t({key: 'english'}), I18n.t({key: 'japanese'}), I18n.t({key: 'simplified-chinese'}), I18n.t({key: 'traditional-chinese'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'visual',
                                                                k: 'language'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'visual',
                                                                k: 'language',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    }
                                                ]
                                            },
                                            {
                                                type: 'sizer',
                                                styleObject: {
                                                    display: 'flex',
                                                    flexWrap: 'wrap',
                                                    gap: '1vw',
                                                    justifyContent: 'flex-start',
                                                    alignItems: 'center',
                                                },
                                                children: [
                                                    {
                                                        type: 'text',
                                                        label: I18n.t({key: 'developer'}),
                                                        text: '',
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'psv'}),
                                                        options: [I18n.t({key: 'full'}), I18n.t({key: 'half'}), I18n.t({key: 'none'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'developer',
                                                                k: 'psv'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'developer',
                                                                k: 'psv',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'ipc'}),
                                                        options: [I18n.t({key: 'enabled'}), I18n.t({key: 'disabled'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'developer',
                                                                k: 'ipc'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'developer',
                                                                k: 'ipc',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    },
                                                    {
                                                        type: 'select',
                                                        label: I18n.t({key: 'log-level'}),
                                                        options: [I18n.t({key: 'error'}), I18n.t({key: 'warn'}), I18n.t({key: 'info'}), I18n.t({key: 'debug'})],
                                                        value: I18n.t({
                                                            key: Preferences.getPreference({
                                                                category: 'developer',
                                                                k: 'logLevel'
                                                            })
                                                        }),
                                                        onChange: (value: any) => {
                                                            Preferences.updatePreferences({
                                                                category: 'developer',
                                                                k: 'logLevel',
                                                                v: I18n.reverseT({value})
                                                            })
                                                        }
                                                    }
                                                ]
                                            },
                                        ]
                                    },
                                    {
                                        type: 'sizer',
                                        styleObject: {
                                            flexGrow: 1,
                                            display: 'flex',
                                            justifyContent: 'flex-start',
                                            alignItems: 'flex-end',
                                            width: '100%'
                                        },
                                        children: [
                                            {
                                                type: 'text',
                                                label: I18n.t({key: 'note'}),
                                                text: I18n.t({key: 'please-notice-that-some-preferences-need-to-reload-the-page-to-take-effect'}),
                                            }
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
                                                            width: 24,
                                                            height: 3
                                                        },
                                                        children: [{
                                                            type: 'button',
                                                            text: Version.getFullVersion() + ' ' + I18n.t({key: 'changelog'}),
                                                            actions: [() => IO.openPageInNewTab({url: Variable.selfReleaseURL(), manifest: Variable.MASTER_MANIFEST})]
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
                                                            actions: [() => ACEV2AboutUI.showAboutUI({manifest: Variable.MASTER_MANIFEST})]
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
                                                            actions: [() => this.destroy()]
                                                        }]
                                                    },
                                                    {
                                                        type: 'sizer',
                                                        size: {
                                                            width: 10,
                                                            height: 3
                                                        },
                                                        children: [{
                                                            type: 'button',
                                                            text: I18n.t({key: 'save-and-reload'}),
                                                            actions: [() => ACEV2Dialog.showDialog({
                                                                title: I18n.t({key: 'changes-will-take-effect-after-reload'}),
                                                                content: I18n.t({key: 'reload-now'}),
                                                                okAction: () => {
                                                                    this.destroy()
                                                                    location.reload()
                                                                }
                                                            })]
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

export default new PreferenceUI();