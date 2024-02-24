import { configureStore } from '@reduxjs/toolkit';
import cryptoReducer from './slices/crypto/slice';
import assetsReducer from './slices/assets/slice';

const store = configureStore({
    reducer: {
        crypto: cryptoReducer, // store всех монет
        assets: assetsReducer, // store купленных монет
    },
});

export default store;
