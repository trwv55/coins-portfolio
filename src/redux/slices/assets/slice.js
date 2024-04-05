/* eslint-disable no-useless-catch */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронный thunk для выполнения запроса к API
export const fetchAssetsData = createAsyncThunk('assets/fetchData', async (coinId) => {
    const options = {
        method: 'GET',
        headers: {
            accept: 'application/json',
            'X-API-KEY': 'CyIYvUxMv640YOuos1Z+69vVJkQuzXJymkfkSzN0wVM=',
        },
    };

    try {
        const responce = await fetch(`https://openapiv1.coinstats.app/coins/${coinId}`, options);
        if (!responce.ok) {
            throw new Error('Failed to fetch data');
        }
        const data = await responce.json();
        return data;
    } catch (error) {
        throw error;
    }
});

const assetsSlice = createSlice({
    name: 'assets',
    initialState: {
        data: [],
        status: '',
    },
    reducers: {
        setData(state, action) {
            state.data = action.payload;
        },
        editAsset(state, action) {
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
export const assetsData = (state) => state.assets.data;

export default assetsSlice.reducer;
