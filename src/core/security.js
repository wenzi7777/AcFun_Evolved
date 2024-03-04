import {PUBLIC_KEY} from "../../config";

export const psv = async (signature, data) => {
    const encoder = new TextEncoder();
    const dataBuffer = encoder.encode(data);
    const dataHashBuffer = await crypto.subtle.digest('SHA-256', dataBuffer);
    const dataHash = Array.from(new Uint8Array(dataHashBuffer)).map(b => b.toString(16).padStart(2, '0')).join('');

    let [signatureInfo, signatureBase64] = signature.split('|*ACE*|');
    const originalHash = signatureInfo.split('|')[4];
    const signatureBuffer = new Uint8Array(Array.from(atob(signatureBase64), c => c.charCodeAt(0)));

    const publicKey = await importPublicKey(PUBLIC_KEY);

    const isVerified = await verifySignature(publicKey, dataBuffer, signatureBuffer);

    return isVerified && originalHash === dataHash;
};

async function importPublicKey(pem) {
    const binaryDer = pemToBinaryDer(pem);
    return window.crypto.subtle.importKey('spki', binaryDer, {
        name: 'RSA-PSS',
        hash: {name: 'SHA-256'},
    }, true, ['verify']);
}

function pemToBinaryDer(pem) {
    const pemHeader = "-----BEGIN PUBLIC KEY-----";
    const pemFooter = "-----END PUBLIC KEY-----";
    const pemContents = pem.substring(pemHeader.length, pem.length - pemFooter.length);
    const binaryDerString = atob(pemContents);
    return new Uint8Array(Array.from(binaryDerString, char => char.charCodeAt(0)));
}

async function verifySignature(publicKey, data, signature) {
    return await window.crypto.subtle.verify({
        name: 'RSA-PSS',
        saltLength: 32,
    }, publicKey, signature, data);
}