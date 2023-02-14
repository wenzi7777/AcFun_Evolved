import {init} from './AcFunEvolved'

(async () => {
    await init()
})()

console.log(`\n\n %c AcFun Evolved %c v${ACFUN_EVOLVED_VERSION}-${GIT_HASH} ${require('../../package.json').description} \n\n`, 'color: #FFFFFF; background: #FD4C5D; padding:5px 0; font-weight: 800;', 'color: #FFFFFF; background: #000000; padding:5px 0;');