import { cryptoData, cryptoAssets } from './mock';

export function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 300);
    });
}

export function fakeFetchAssetes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 300);
    });
}
