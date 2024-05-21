/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { TCoinDataExtended } from '../../../types/types';
import { RootState } from '../../store';

type AssetsState = {
    data: TCoinDataExtended[];
    status: string;
}

const initialState: AssetsState = {
    data: [],
    status: '',
};

type FetchDataParams = {
    coinId: string | number,
    amount: string | number,
    priceBuy: number | string,
    total: number | string,
}

// Создаем асинхронный thunk для выполнения запроса к API
export const fetchAssetsData = createAsyncThunk(
    'assets/fetchData',
    async ({ coinId, amount, priceBuy, total }: FetchDataParams) => {
        const options = {
            method: 'GET',
            headers: {
                accept: 'application/json',
                'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM=',
            },
        };

        try {
            const responce = await fetch(
                `https://openapiv1.coinstats.app/coins/${coinId}`,
                options,
            );
            if (!responce.ok) {
                throw new Error('Failed to fetch data');
            }
            const data = await responce.json();
            return { ...data, amount, priceBuy, total }; // Возвращаем объект с дополнительными полями
        } catch (error) {
            throw error;
        }
    },
);

const assetsSlice = createSlice({
    name: 'assets',
    initialState,
    reducers: {
        setData(state, action: PayloadAction<TCoinDataExtended[]>) {
            state.data = action.payload;
        },
        editAsset(state, action: PayloadAction<TCoinDataExtended>) {
            state.data = state.data.map((item) => {
                if (item.name === action.payload.name) {
                    return { ...item, amount: +item.amount + +action.payload.amount };
                }
                return item;
            });
        },
    },
    extraReducers: (builder) => {
        builder.addCase(fetchAssetsData.pending, (state) => {
            state.status = 'loading';
        });
        builder.addCase(fetchAssetsData.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = [...state.data, action.payload];
        });
        builder.addCase(fetchAssetsData.rejected, (state, action) => {
            state.status = 'failed';
            console.error('fetch failed', action.error.message);
        });
    },
});

export const { setData, editAsset } = assetsSlice.actions;
export const assetsData = (state: RootState) => state.assets.data;
export const assetsStatus = (state: RootState) => state.assets.status;

export default assetsSlice.reducer;
