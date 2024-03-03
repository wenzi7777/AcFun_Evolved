import {childList} from '../api/supervisor'

export const beforeAll = (callback) =>
    new Promise(() => callback())

export const headLoaded = (callback) =>
    new Promise(resolve => {
        if (document.head !== null) {
            resolve(callback())
        } else {
            const [observer] = childList(document.documentElement, () => {
                if (document.head !== null) {
                    observer.disconnect()
                    resolve(callback())
                }
            })
        }
    })

export const bodyLoaded = (callback) =>
    new Promise(resolve => {
        if (document.body !== null) {
            resolve(callback())
        } else {
            const [observer] = childList(document.documentElement, () => {
                if (document.body !== null) {
                    observer.disconnect()
                    resolve(callback())
                }
            })
        }
    })


export const contentLoaded = (callback) =>
    new Promise(resolve => {
        if (document.readyState !== 'loading') {
            resolve(callback())
        } else {
            document.addEventListener('DOMContentLoaded', () => resolve(callback()))
        }
    })


export const fullyLoaded = (callback) =>
    new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve(callback())
        } else {
            unsafeWindow.addEventListener('load', () => resolve(callback()))
        }
    })


export const LifeCycleEvent = {
    // ace runtime is being injected to the dom.
    coreStartup: 'ace:core-startup',
    // ace runtime has been injected to the dom.
    coreInjected: 'ace:core-injected',
    // ace is injecting aceripts to the dom.
    injectingAceripts: 'ace:injecting-aceripts',
    // all aceripts have been injected to the dom.
    aceriptsInjected: 'ace:aceripts-injected',
}


export const raiseLifeCycleEvent = (aceEvent) => {
    unsafeWindow.dispatchEvent(new CustomEvent(aceEvent))
}