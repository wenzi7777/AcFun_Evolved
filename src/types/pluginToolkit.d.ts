interface pluginPack {
    self: string,
    signature: string,
    enabled?: boolean
    manifest: manifest
}

interface tombstone {
    self: string,
    manifest: manifest,
    args: any,
    executed: boolean
}