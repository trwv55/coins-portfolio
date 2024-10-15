import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// Создаем асинхронный thunk для выполнения запроса к API
export const fetchCryptoData =
  createAsyncThunk();
  //   "crypto/fetchData",
  //   async () => {
  //     try {
  //       const { result } = await fakeFetchCrypto();
  //       console.log("result", result);
  //       return result;
  //     } catch (error) {
  //       console.error(error.message);
  //     }
  //   },

const cryptoSlice = createSlice({
  name: "crypto",
  initialState: {
    data: [],
    status: "",
  },
  reducers: {
    setItems(state, action) {
      state.data = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchCryptoData.fulfilled, (state, action) => {
      state.status = "success";
      state.data = action.payload;
    });
  },
});

// Экспортируем экшены и редюсер из Slice
export const { setItems } = cryptoSlice.actions;

export default cryptoSlice.reducer;
