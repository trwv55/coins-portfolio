import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронный thunk для выполнения запроса к API
export const fetcAssetsData = createAsyncThunk('crypto/fetchData', async () => {
    // try {
    //     const { result } = await fakeFetchCrypto();
    //     console.log('result', result);
    //     return result;
    // } catch (error) {
    //     console.error(error.message);
    // }
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
    },
    extraReducers: (builder) => {
        builder.addCase(fetcAssetsData.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        });
    },
});

export const { setData } = assetsSlice.actions;
export const assetsData = (state) => state.assets.data;

export default assetsSlice.reducer;
