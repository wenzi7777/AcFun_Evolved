export const textLimit = (text, limit) => {
    if (text.length > limit) {
        return text.slice(0, limit) + '...'
    }
    return text
}

export const manifestLimit = (manifest) => {
    let newManifest = manifest
    newManifest.id = {
        original: newManifest.id,
        short: textLimit(manifest.id, 16)
    }
    newManifest.requestedAPIs = {
        original: newManifest.requestedAPIs,
        short: textLimit(manifest.requestedAPIs.join(', '), 16)
    }
    return newManifest
}