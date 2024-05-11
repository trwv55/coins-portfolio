import { configureStore } from '@reduxjs/toolkit';
import assetsReducer from './slices/assets/slice';
// import walletReducer from './slices/wallet/slice';

const store = configureStore({
    reducer: {
        assets: assetsReducer, // store купленных монет
        // wallet: walletReducer, // store для денег
    },
});

export default store;

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
