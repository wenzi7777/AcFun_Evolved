import Logger from '../api/Logger';
import {Manager} from '../../ui/Manager';
import Clock from "../services/Clock";
import ACEV2Storage from "../services/ACEV2Storage";
import Preferences from "../api/Preferences";
import PluginToolkit from "../api/PluginToolkit";
import IPC from "../services/IPC";
import Launchpad from "../services/Launchpad";
import DebugBridgeService from "../services/DebugBridgeService";
import ACEV2LifeCycle from "../api/ACEV2LifeCycle";
import SideMenu from "../../plugins/SideMenu";
import ReleaseTracker from "../api/ReleaseTracker";

class Kernel {
    public async start() {
        Logger.info({message: 'Kernel is starting...'});

        Logger.info({message: 'Handing control to the lifecycle API...'});
        await this.init();
    }

    private async init() {

        ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:before-start'})

        // 启动服务
        await this.startServices()

        ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:start'})

        // 如果选择body载入插件
        await ACEV2LifeCycle.headLoaded({
            callback: async () => {

                if (Preferences.getPreference({category: 'general', k: 'pluginLoadOrder'}) === 'when-head-loaded') {
                    await PluginToolkit.initializePluginExecutionAndSetTrigger()
                    ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:plugins-loaded'})
                }
            }
        })

        ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:loaded'})

        // 如果选择body载入插件
        // 载入侧栏
        await ACEV2LifeCycle.contentLoaded({
            callback: async () => {
                this.initUI()
                if (Preferences.getPreference({category: 'general', k: 'pluginLoadOrder'}) === 'when-body-loaded') {
                    await PluginToolkit.initializePluginExecutionAndSetTrigger()
                    ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:plugins-loaded'})
                }
            }
        })

        // 如果选择完全载入后载入插件
        await ACEV2LifeCycle.fullyLoaded({
            callback: async () => {
                if (Preferences.getPreference({category: 'general', k: 'pluginLoadOrder'}) === 'after-all') {
                    await PluginToolkit.initializePluginExecutionAndSetTrigger()
                    ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:plugins-loaded'})
                }
            }
        })

        // 唤醒内置插件，外置插件无需唤醒，由摆渡人执行插件。
        PluginToolkit.wakeUpBuildInPlugins()

        // 检查更新
        await ReleaseTracker.selfReleaseTracker()
        await ReleaseTracker.pluginsReleaseTracker()

        ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:end'})

        // 销毁事件
        await ACEV2LifeCycle.beforeDestroy({
            callback: async () => {
                await this.stopServices()
                ACEV2LifeCycle.raiseLifeCycleEvent({type: 'acev2:before-destroy'})
            }
        })
    }

    private async startServices() {
        Clock.start();
        IPC.start()
        Launchpad.start()
        await ACEV2Storage.start()
        await DebugBridgeService.start()
    }

    private async stopServices() {
        await DebugBridgeService.stop()
        Clock.stop();
        await ACEV2Storage.stop()
        IPC.stop()
        Launchpad.stop()
    }

    private initUI() {
        SideMenu.draw()
    }
}

export default new Kernel();