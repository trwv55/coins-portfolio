import { cryptoData, cryptoAssets } from './mock';

export function fakeFetchCrypto() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoData);
        }, 2000);
    });
}

export function fakeFetchAssetes() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(cryptoAssets);
        }, 2000);
    });
}
