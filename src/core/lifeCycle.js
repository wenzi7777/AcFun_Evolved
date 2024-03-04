/**
 *
 * 此页面的部分代码来自于或修改于 Bilibili Evolved 的life-cycle.ts。
 * 原代码以MIT协议开源，作者是  "author": "Grant Howard, Coulomb-G"
 *
 * The MIT License (MIT)
 * Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the “Software”), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
 * The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
 * THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
 *
 * ----------
 *
 * 本脚本使用了这些代码，现以MPL-2.0开源修改后的代码。
 *
 * ACE的开源许可见 ./LICENSE.md
 *
 * Nick Hsu 于 2024/03/04 注
 */

import {childList} from '../api/supervisor'

/**
 * 立即执行提供的回调函数。
 *
 * @param {Function} callback - 需要立即执行的回调函数。
 * @returns {Promise} 一个解析时不返回任何结果的Promise对象。
 */
export const beforeAll = (callback) =>
    new Promise(() => callback())

/**
 * 等待document的<head>元素加载完成，然后执行提供的回调函数。
 * 如果<head>已经存在，则立即执行回调。
 *
 * @param {Function} callback - <head>加载完成后执行的回调函数。
 * @returns {Promise} 解析时返回回调函数的返回值的Promise对象。
 */
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

/**
 * 等待document的<body>元素加载完成，然后执行提供的回调函数。
 * 如果<body>已经存在，则立即执行回调。
 *
 * @param {Function} callback - <body>加载完成后执行的回调函数。
 * @returns {Promise} 解析时返回回调函数的返回值的Promise对象。
 */
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

/**
 * 等待整个页面内容加载完成（DOMContentLoaded事件触发），然后执行提供的回调函数。
 * 如果页面内容已经加载完成，则立即执行回调。
 *
 * @param {Function} callback - 内容加载完成后执行的回调函数。
 * @returns {Promise} 解析时返回回调函数的返回值的Promise对象。
 */
export const contentLoaded = (callback) =>
    new Promise(resolve => {
        if (document.readyState !== 'loading') {
            resolve(callback())
        } else {
            document.addEventListener('DOMContentLoaded', () => resolve(callback()))
        }
    })

/**
 * 等待整个页面完全加载完成（包括所有的异步资源），然后执行提供的回调函数。
 * 如果页面已经完全加载，则立即执行回调。
 * 注意：使用unsafeWindow可能表明该函数是在特定环境（如Tampermonkey/Greasemonkey脚本）中使用。
 *
 * @param {Function} callback - 页面完全加载完成后执行的回调函数。
 * @returns {Promise} 解析时返回回调函数的返回值的Promise对象。
 */
export const fullyLoaded = (callback) =>
    new Promise(resolve => {
        if (document.readyState === 'complete') {
            resolve(callback())
        } else {
            unsafeWindow.addEventListener('load', () => resolve(callback()))
        }
    })


/**
 * 定义与ACE运行时生命周期相关的自定义事件名称。
 * - coreStartup: ACE运行时开始注入DOM。
 * - coreInjected: ACE运行时已注入DOM。
 * - injectingAceripts: ACE开始注入Aceripts到DOM。
 * - aceriptsInjected: 所有Aceripts已注入到DOM。
 */
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


/**
 * 触发指定的生命周期事件。这些事件代表了ACE运行时的不同阶段。
 *
 * @param {string} aceEvent - 要触发的生命周期事件的名称。
 */
export const raiseLifeCycleEvent = (aceEvent) => {
    unsafeWindow.dispatchEvent(new CustomEvent(aceEvent))
}