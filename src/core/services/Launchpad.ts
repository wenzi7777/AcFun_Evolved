import IPC from "./IPC";

class Launchpad implements Service{
    start() {
        IPC.registerChannel({channel: 'runtime:launchpad'});
    }

    stop() {
        IPC.unregisterChannel({channel: 'runtime:launchpad'});
    }
}

export default new Launchpad();