import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

import { fetchData } from './Services';
import { addDiscounts, checkSearch } from './Utils/serializer';

const initialState = {
  products: [],
  search: '',
  status: 'idle',
  results: 0,
};

export const getProductsData = createAsyncThunk(
  'products/fetchData',
  async () => {
    const response = await fetchData();
    return response.data;
  }
);

export const productsSlice = createSlice({
  name: 'products',
  initialState,

  reducers: {
    searchProducts: (state, action) => {
      state.search = action.payload;
    },
    getProductsAction: (state, action) => {
      state.products = action.payload;
    },
    setResults: (state, action) => {
      state.results = action.payload;
    }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getProductsData.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getProductsData.fulfilled, (state, action) => {
        state.status = 'idle';
        state.products = action.payload;
      });
  },
});

export const {
  searchProducts,
  getProductsAction,
  setResults,
} = productsSlice.actions;

export const selectSearch = (state) => state.products.search;
export const selectProducts = (state) => state.products.products;

export const searchFilteredProducts = () => async (dispatch, getState) => {
  const { payload } = await dispatch(getProductsData());
  const { search } = getState().main;
  const productsFiltered = checkSearch(payload, search);
  dispatch(setResults(productsFiltered.length));
  const verifiedPalidrom = addDiscounts(search, productsFiltered);
  
  dispatch(getProductsAction(verifiedPalidrom));  
};

export default productsSlice.reducer;
