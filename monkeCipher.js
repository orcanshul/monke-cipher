"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.fromMonkeCipher = exports.genMonkeDecryptKey = exports.toMonkeCipher = void 0;
//Highly secure encryption algorithm developed by AnshulK and LehuyH
const key = { a: 'monke', b: 'mooonke', c: 'mmonke ', d: 'monnke', e: 'monnkee', f: 'moonnkke', g: 'monnnnke', h: 'mmmmonke', i: 'mmonnkeeee', j: 'mononke', k: 'monnoke', l: 'mmonnkkeee', m: 'mone', n: 'mo', o: 'monn', p: 'moke', q: 'monek', r: 'monnekk', s: 'monen', t: 'monkek', u: 'monneke', v: 'm', w: 'onke', x: 'on', y: 'n', z: 'e', };
function toMonkeCipher(str) {
    return $_MONKE.cipher(str).encrypted;
}
exports.toMonkeCipher = toMonkeCipher;
function genMonkeDecryptKey(str) {
    return $_MONKE.cipher(str).decryptKey;
}
exports.genMonkeDecryptKey = genMonkeDecryptKey;
function fromMonkeCipher(str, key) {
    return $_MONKE.decipher(str, key);
}
exports.fromMonkeCipher = fromMonkeCipher;
const $_MONKE = {
    key: { a: 'monke', b: 'mooonke', c: 'mmonke ', d: 'monnke', e: 'monnkee', f: 'moonnkke', g: 'monnnnke', h: 'mmmmonke', i: 'mmonnkeeee', j: 'mononke', k: 'monnoke', l: 'mmonnkkeee', m: 'mone', n: 'mo', o: 'monn', p: 'moke', q: 'monek', r: 'monnekk', s: 'monen', t: 'monkek', u: 'monneke', v: 'm', w: 'onke', x: 'on', y: 'n', z: 'e', },
    cipher(str) {
        const startStr = str.toLowerCase();
        const decryptKey = [];
        const encrypted = startStr
            .split('')
            .map((e) => {
            //@ts-ignore
            const replacer = this.key[e] || ' ';
            decryptKey.push(replacer.length);
            return replacer;
        })
            .join('');
        return {
            encrypted,
            decryptKey
        };
    },
    decipher(str, key) {
        const proccessed = [];
        //@ts-ignore
        const keyReversed = Object.fromEntries(Object.entries(this.key).map(e => [e[1], e[0]]));
        key.forEach((num) => {
            const sub = str.slice(0, num);
            proccessed.push(sub);
            str = str.split(sub).slice(1).join(sub);
        });
        return proccessed.map(e => keyReversed[e] || " ").join("");
    }
};
