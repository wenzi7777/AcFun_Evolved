import Kernel from './core/kernel/Kernel';
import Version from "./core/api/Version";
import Logger from "./core/api/Logger";
import Variable from "./core/api/Variable";

(async () => {
    Logger.dangerLogWithoutUserPermission({
        role: Variable.MASTER_MANIFEST.name,
        message: `${'\n'} %c AcFun Evolved %c v${Version.getFullVersion()} https://acev2.1205.moe/ ${'\n'}${'\n'}`,
        cssArray: ['color: #FFFFFF; background: #39c5bb; padding:5px 0; font-weight: 800;', 'color: #FFFFFF; background: #FFA500; padding:5px 0;']
    })

    await Kernel.start();
})()