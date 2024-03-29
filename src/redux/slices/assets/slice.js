import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронный thunk для выполнения запроса к API
export const fetcAssetsData = createAsyncThunk('crypto/fetchData', async () => {});

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
        builder.addCase(fetcAssetsData.fulfilled, (state, action) => {
            state.status = 'success';
            state.data = action.payload;
        });
    },
});

export const { setData, editAsset } = assetsSlice.actions;
export const assetsData = (state) => state.assets.data;

export default assetsSlice.reducer;
