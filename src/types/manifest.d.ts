type manifest = {
    id: string,
    name: string,
    description: string,
    versions: string[],
    createdAt: string,
    updatedAt: string,
    author: string,
    icon: string,
    copyright: string,
    requestedAPIs: string[],
    website: string,
    trigger: {
        matches: string[],
        receiveHandler: boolean
    },
    settings?: DataObject[],
    bridged?: boolean
}