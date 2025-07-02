import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  selectedProduct: null,
  isProductLoading: false,
  selectedVariant: null,
  selectedAttributes: {},
};

const productSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
    setSelectedProduct: (state, action) => {
      state.selectedProduct = action.payload;
    },
    setIsProductLoading: (state, action) => {
      state.isProductLoading = action.payload;
    },
    setSelectedVariant: (state, action) => {
      state.selectedVariant = action.payload;
    },
    setSelectedAttributes: (state, action) => {
      state.selectedAttributes = action.payload;
    },
    resetSelections: (state) => {
      state.selectedVariant = null;
      state.selectedAttributes = {};
    },
  },
});

export const {
  setSelectedProduct,
  setIsProductLoading,
  setSelectedAttributes,
  setSelectedVariant,
  resetSelections,
} = productSlice.actions;

export default productSlice.reducer;
