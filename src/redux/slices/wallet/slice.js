import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

// Создаем асинхронный thunk для выполнения запроса к API
export const fetchWalletData = createAsyncThunk('wallet/fetchData', async () => {});

const walletSlice = createSlice({
    name: 'wallet',
    initialState: {
        data: {
            start: null, // кол-во денег на которые закупили монет
            now: null, // стоимость активов сейчас
        },
        status: '',
    },
    reducers: {
        // setItems(state, action) {
        //     state.data = action.payload;
        // },
        setStart(state, action) {
            state.data.start += action.payload;
        },
    },
    extraReducers: () => {
        // builder.addCase(fetchWalletData.fulfilled, (state, action) => {
        //     state.status = 'success';
        //     state.data = action.payload;
        // });
    },
});

// Экспортируем экшены и редюсер из Slice
export const { setStart } = walletSlice.actions;

export default walletSlice.reducer;
