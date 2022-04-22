declare type MonkeDecryptionKey = number[];
export declare function toMonkeCipher(str: string): string;
export declare function genMonkeDecryptKey(str: string): MonkeDecryptionKey;
export declare function fromMonkeCipher(str: string, key: MonkeDecryptionKey): string;
export {};