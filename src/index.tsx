import Kernel from './core/kernel/Kernel';
import Version from "./core/api/Version";
import Logger from "./core/api/Logger";

Logger.success({message: `AcFun Evolved v${Version.getFullVersion()}, Made with ❤ by Nick Hsu. Official site https://ace-v2.1205.moe/`})

Kernel.start();