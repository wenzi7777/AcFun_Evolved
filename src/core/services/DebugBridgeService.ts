import {Manager} from "../../ui/Manager";
import I18n from "../api/I18n";
import DebugBridge from "../../plugins/DebugBridge";
import Preferences from "../api/Preferences";
import Logger from "../api/Logger";
import IO from "../api/IO";
import Clock from "./Clock";
import PluginToolkit from "../api/PluginToolkit";

class DebugBridgeService implements Service {
    hintTracker: tracker = ''

    async start() {
        let bridgeConfigurations = Preferences.getBridgeConfigurations()
        if (bridgeConfigurations.enabled) {
            this.insertHint()
            Logger.info({message: '[' + I18n.t({key: 'debug-bridge'}) + ']' + I18n.t({key: 'downloading-plugin-from'}) + bridgeConfigurations.connect})
            let rawJSON = await IO.monkey({
                method: 'GET',
                url: `${bridgeConfigurations.connect}?t=${Clock.getTimestamp()}`,
                responseType: 'text'
            });
            Logger.info({message: '[' + I18n.t({key: 'debug-bridge'}) + ']' + I18n.t({key: 'installing-plugin'})})
            await PluginToolkit.installPlugin({
                pluginPack: JSON.parse(rawJSON as string),
                bridged: true
            })
            Logger.info({message: '[' + I18n.t({key: 'debug-bridge'}) + ']' + I18n.t({key: 'installed-plugin'})})
        }
    }

    async stop() {
        if (this.hintTracker) {
            Manager.unmountUI({tracker: this.hintTracker})
        }
        PluginToolkit.uninstallBridgedPlugin()
    }

    insertHint() {
        this.hintTracker = Manager.renderUI({
            canvas: [
                {
                    type: 'sizer',
                    size: {
                        width: 12,
                        height: 3
                    },
                    styleObject: {
                        zIndex: 101,
                        cursor: 'pointer',
                        right: '1vw',
                        bottom: '1vw',
                        position: 'fixed',
                    },
                    draggable: true,
                    filled: true,
                    events: [
                        {
                            event: 'click',
                            handler: () => DebugBridge.renderConfigurePanel()
                        }
                    ],
                    children: [
                        {
                            type: 'text',
                            label: I18n.t({key: 'debug-bridge-enabled'})
                        }
                    ]
                }
            ],
            slot: 'sideMenu'
        }) as string
    }

}

export default new DebugBridgeService();