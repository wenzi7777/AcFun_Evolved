import {largeGet, largeSet} from "../api/storage";
import {aceNodeLocating} from "../api/ace";
import {allMutationsOn, mutationObserve} from "../api/supervisor";
import {getRuntimeSettings} from "./settings";

export const getTrackedHtmlList = async () => {
    return await largeGet('htmlList') || []
}

export const getTrackedStyleList = async () => {
    return await largeGet('styleList') || []
}

export const getTrackedScriptList = async () => {
    return await largeGet('scriptList') || []
}

export const trackHtml = async (aceUuid) => {
    let htmlList = await getTrackedHtmlList()
    htmlList.push({aceUuid})
    await largeSet('htmlList', htmlList)
    aceNodeLocating(aceUuid).dataset.trackingType = 'html'
}

export const untrackHtml = async (aceUuid) => {
    let htmlList = await getTrackedHtmlList()
    htmlList = htmlList.filter(item => item.aceUuid !== aceUuid)
    await largeSet('htmlList', htmlList)
}

export const trackStyle = async (aceUuid) => {
    let styleList = await getTrackedStyleList()
    styleList.push({aceUuid})
    await largeSet('styleList', styleList)
    aceNodeLocating(aceUuid).dataset.trackingType = 'style'
}

export const untrackStyle = async (aceUuid) => {
    let styleList = await getTrackedStyleList()
    styleList = styleList.filter(item => item.aceUuid !== aceUuid)
    await largeSet('styleList', styleList)
}

export const trackScript = async (aceUuid) => {
    let scriptList = await getTrackedScriptList()
    scriptList.push({aceUuid})
    await largeSet('scriptList', scriptList)
    aceNodeLocating(aceUuid).dataset.trackingType = 'script'
}

export const untrackScript = async (aceUuid) => {
    let scriptList = await getTrackedScriptList()
    scriptList = scriptList.filter(item => item.aceUuid !== aceUuid)
    await largeSet('scriptList', scriptList)
}

export const clearTraces = async () => {
    await largeSet('htmlList', [])
    await largeSet('styleList', [])
    await largeSet('scriptList', [])
}

export const updateTraces = async () => {
    let htmlList = await getTrackedHtmlList()
    let styleList = await getTrackedStyleList()
    let scriptList = await getTrackedScriptList()
    let nodes = document.querySelectorAll('[data-ace-uuid]')
    if (nodes.length === 0) {
        await clearTraces()
        return
    }

    const allUuids = new Set([...htmlList, ...styleList, ...scriptList].map(item => item.aceUuid));

    nodes.forEach(node => {
        const aceUuid = node.dataset.aceUuid;
        const trackingType = node.dataset.trackingType;

        if (!allUuids.has(aceUuid)) {
            switch (trackingType) {
                case 'html':
                    htmlList.push({aceUuid});
                    break;
                case 'style':
                    styleList.push({aceUuid});
                    break;
                case 'script':
                    scriptList.push({aceUuid});
                    break;
                default:
                    console.log('Unknown tracking type:', trackingType);
            }
        }
    });

    const nodeUuids = new Set([...nodes].map(node => node.dataset.aceUuid));

    const cleanList = list => list.filter(item => nodeUuids.has(item.aceUuid));

    htmlList = cleanList(htmlList);
    styleList = cleanList(styleList);
    scriptList = cleanList(scriptList);

    await largeSet('htmlList', htmlList)
    await largeSet('styleList', styleList)
    await largeSet('scriptList', scriptList)
}

export const setupTracker = async () => {
    // Define a callback function to handle mutations
    const handleMutations = (mutationsList, observer) => {
        for (const mutation of mutationsList) {
            // Handle added nodes
            mutation.addedNodes.forEach((node) => {
                if (node.dataset && node.dataset.aceUuid) {
                    const aceUuid = node.dataset.aceUuid;
                    const trackingType = node.dataset.trackingType;

                    switch (trackingType) {
                        case 'html':
                            trackHtml(aceUuid);
                            break;
                        case 'style':
                            trackStyle(aceUuid);
                            break;
                        case 'script':
                            trackScript(aceUuid);
                            break;
                        default:
                            console.log(`Unknown tracking type: ${trackingType}`);
                    }
                }
            });

            // Handle removed nodes
            mutation.removedNodes.forEach((node) => {
                if (node.dataset && node.dataset.aceUuid) {
                    const aceUuid = node.dataset.aceUuid;
                    untrackHtml(aceUuid);
                    untrackStyle(aceUuid);
                    untrackScript(aceUuid);
                }
            });
        }
    };

    // Start observing the document body for child additions or removals
    if((await getRuntimeSettings()).general.observeMode === 'normal') {
        mutationObserve(['body'], {childList: true, subtree: true}, handleMutations);
    }else {
        allMutationsOn(['body'], handleMutations); // evolved mode
    }
};
