import Variable from "./Variable";

class Security {
    async psv({signature, pluginSelf}: {signature: string, pluginSelf: string}) {
        const encoder = new TextEncoder();
        const dataBuffer = encoder.encode(pluginSelf);
        const dataHashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
        const dataHash = Array.from(new Uint8Array(dataHashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

        let [signatureInfo, signatureBase64] = signature.split('|*ACE*|');
        const originalHash = signatureInfo.split('|')[4];
        const signatureBuffer = new Uint8Array(Array.from(atob(signatureBase64), c => c.charCodeAt(0)));

        const publicKey = await this.importPublicKey({pem: Variable.PUBLIC_KEY});

        const isVerified = await this.verifySignature({publicKey: publicKey, data: dataBuffer, signature: signatureBuffer});

        return isVerified && originalHash === dataHash;
    };

    importPublicKey({pem}: {pem: any}) {
        const binaryDer = this.pemToBinaryDer(pem);
        return window.crypto.subtle.importKey('spki', binaryDer, {
            name: 'RSA-PSS',
            hash: {name: 'SHA-256'},
        }, true, ['verify']);
    }

    pemToBinaryDer({pem}: {pem: any}) {
        const pemHeader = "-----BEGIN PUBLIC KEY-----";
        const pemFooter = "-----END PUBLIC KEY-----";
        const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
        const binaryDerString = atob(pemContents);
        return new Uint8Array(Array.from(binaryDerString, char => char.charCodeAt(0)));
    }

    async verifySignature({publicKey, data, signature}: {publicKey: any, data: any, signature: any}) {
        return await window.crypto.subtle.verify({
            name: 'RSA-PSS',
            saltLength: 32,
        }, publicKey, signature, data);
    }
}

export default new Security()