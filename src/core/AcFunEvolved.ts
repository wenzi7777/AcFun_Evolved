export const init = async () => {
    // Object.defineProperty(unsafeWindow, 'ace', {
    //     get() {
    //         return unsafeWindow.$
    //     }
    // })
    const {initialize} = await import('./init/gui')
    console.log('init-----------')
    initialize()
    console.log('init-----------')
}