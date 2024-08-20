interface RuntimeStorage {
    monkey: {
        plugins: pluginPack[],
        preferences: DataObject,
        pluginData: DataObject[]
    };
    local: DataObject[];
}

interface DataObject {
    [key: string]: any;
}

interface bridgeConfigurations {
    enabled: boolean,
    pluginLoadOrder: string,
    connect: string
}