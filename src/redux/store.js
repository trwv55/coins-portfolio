import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/crypto/slice';
import assetsReducer from './slices/assets/slice';
import walletReducer from './slices/wallet/slice';

const store = configureStore({
    reducer: {
        crypto: cryptoReducer, // store всех монет
        assets: assetsReducer, // store купленных монет
        wallet: walletReducer, // store для денег
    },
});

export default store;
