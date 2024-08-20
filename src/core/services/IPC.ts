import Logger from "../api/Logger";
import Variable from "../api/Variable";

class IPC implements Service {
    private channels: Map<string, Array<{ handler: (data: any) => void, pluginId: string }>> = new Map();
    private debounceMap: Map<string, NodeJS.Timeout> = new Map();

    start() {
        Logger.info({message: 'IPCService is starting...'});
    }

    stop() {
        Logger.info({message: 'IPCService is stopping...'});
        this.channels.clear();
        this.debounceMap.clear();
    }

    registerChannel({channel}: { channel: string }) {
        if (!this.channels.has(channel)) {
            this.channels.set(channel, []);
            Logger.info({message: `Channel ${channel} registered.`});
        } else {
            Logger.warn({message: `Channel ${channel} is already registered.`});
        }
    }

    unregisterChannel({channel}: { channel: string }) {
        if (this.channels.has(channel)) {
            this.channels.delete(channel);
            this.debounceMap.delete(channel);
            Logger.info({message: `Channel ${channel} completely unregistered.`});
        } else {
            Logger.warn({message: `Channel ${channel} is not registered.`});
        }
    }

    listen({channel, handler, manifest}: { channel: string, handler: (data: any) => void, manifest: manifest }) {
        if (!this.channels.has(channel)) {
            Logger.error({message: `Channel ${channel} is not registered.`});
            return;
        }

        const handlers = this.channels.get(channel)!;

        // 檢查是否已經存在相同的 handler 和 pluginId
        const existingHandler = handlers.find(h => h.handler === handler && h.pluginId === manifest.id);
        if (existingHandler) {
            Logger.warn({message: `Handler from ${manifest.id} is already registered for channel ${channel}.`});
            return;
        }

        handlers.push({handler, pluginId: manifest.id});
        Logger.info({message: `Handler from ${manifest.id} added to channel ${channel}.`});
    }

    removeListener({channel, handler, manifest}: {
        channel: string,
        handler: (data: any) => void,
        manifest: manifest
    }) {
        if (!this.channels.has(channel)) {
            Logger.error({message: `Channel ${channel} is not registered.`});
            return;
        }

        const handlers = this.channels.get(channel)!;
        const remainingHandlers = handlers.filter(h => h.handler !== handler || h.pluginId !== manifest.id);

        if (remainingHandlers.length > 0) {
            this.channels.set(channel, remainingHandlers);
            Logger.info({message: `Handler from ${manifest.id} removed from channel ${channel}.`});
        } else {
            this.channels.delete(channel);
            Logger.info({message: `Channel ${channel} completely unregistered (last handler was from ${manifest.id}).`});
        }
    }

    sendMessage({channel, data}: { channel: string, data: any }) {
        if (!this.channels.has(channel)) {
            Logger.error({message: `Channel ${channel} is not registered.`});
            return;
        }

        if (this.debounceMap.has(channel)) {
            clearTimeout(this.debounceMap.get(channel)!);
        }

        const debounceTimeout = setTimeout(() => {
            const handlers = this.channels.get(channel)!;
            handlers.forEach(({handler, pluginId}) => {
                handler(data);
                Logger.info({message: `Message sent to handler in channel ${channel} registered by ${pluginId}.`});
            });
        }, Variable.DEBOUNCE_DURATION);

        this.debounceMap.set(channel, debounceTimeout);
    }
}

export default new IPC();
