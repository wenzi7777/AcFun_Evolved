import {openDialog} from "../api/dialog";
import {setupTracker, updateTraces} from "./trace";
import {beforeAll, bodyLoaded, contentLoaded, fullyLoaded, headLoaded} from "./lifeCycle";
import {getBridgeSettings, getRuntimeSettings, initSideMenu} from "./settings";
import {initializePluginExecutionAndSetTrigger, uninstallBridgedPlugin} from "./apps/pluginToolkit";
import {runBridge} from "./apps/aceBridge";
import {checkAllUpdate} from "./releaseTracker";

// print flag
console.log(`${'\n'} %c AcFun Evolved %c v${ACFUN_EVOLVED_VERSION} ${GIT_HASH}  https://acfun-evolved.1205.moe/ ${'\n'}${'\n'}`, 'color: #FFFFFF; background: #39c5bb; padding:5px 0; font-weight: 800;', 'color: #FFFFFF; background: #FFA500; padding:5px 0;');

let globalError = ''

beforeAll(async () => {
    window.lodash = _
}).catch(e => {
    console.error(e)
    globalError = e
})


headLoaded(async () => {

}).catch(e => {
    console.error(e)
    globalError = e
})

bodyLoaded(async () => {
    // init side menu
    await initSideMenu()

    // run bridge
    if ((await getBridgeSettings()).timing === 'normal') {
        await runBridge()
    }

    // run plugins
    if ((await getRuntimeSettings()).general.timing === 'normal') {
        await initializePluginExecutionAndSetTrigger()
    }
}).catch(e => {
    console.error(e)
    globalError = e
})

contentLoaded(async () => {
    // tracking setup
    await updateTraces()
    await setupTracker()

    // run bridge
    if ((await getBridgeSettings()).timing === 'delayed') {
        await runBridge()
    }

    // run plugins
    if ((await getRuntimeSettings()).general.timing === 'delayed') {
        await initializePluginExecutionAndSetTrigger()
    }

    // delete bridged plugin if ace bridge is not enabled
    if ((await getBridgeSettings()).bridged === 'disabled') {
        await uninstallBridgedPlugin()
    }

}).catch(e => {
    console.error(e)
    globalError = e
})

fullyLoaded(async () => {
    if (globalError) {
        await openDialog('AcFun Evolved Runtime 出现严重错误 ', globalError, true)
    }

    // check for updates
    await checkAllUpdate()
}).catch(async (e) => {
    await openDialog('AcFun Evolved Runtime 出现严重错误 ', e, true)
})