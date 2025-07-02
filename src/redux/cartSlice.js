import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  cartItems: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const {
        productId,
        variantId,
        quantity,
        unitPrice,
        regular_unit_price,
        product_name,
        product_pic,
        variation_attributes,
        merchant,
        product_slug,
        total_stock_qty,
        delivery_fee,
      } = action.payload;

      const existingIndex = state.cartItems.findIndex(
        (item) => item.productId === productId && item.variantId === variantId
      );

      if (existingIndex !== -1) {
        const item = state.cartItems[existingIndex];
        const newQty = item.quantity + quantity;
        if (newQty <= item.total_stock_qty) {
          item.quantity = newQty;
          item.totalPrice = newQty * item.unitPrice;
          item.regular_total_price = newQty * item.regular_unit_price;
        }
      } else {
        state.cartItems.push({
          productId,
          variantId,
          quantity,
          unitPrice,
          regular_unit_price,
          totalPrice: quantity * unitPrice,
          regular_total_price: quantity * regular_unit_price,
          product_name,
          product_pic,
          variation_attributes,
          merchant,
          product_slug,
          total_stock_qty,
          delivery_fee,
        });
      }
    },

    updateQuantity: (state, action) => {
      const { productId, variantId, quantity } = action.payload;
      const item = state.cartItems.find(
        (i) => i.productId === productId && i.variantId === variantId
      );
      if (item && quantity >= 1 && quantity <= item.total_stock_qty) {
        item.quantity = quantity;
        item.totalPrice = quantity * item.unitPrice;
        item.regular_total_price = quantity * item.regular_unit_price;
      }
    },

    removeItem: (state, action) => {
      const { productId, variantId } = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) => item.productId !== productId || item.variantId !== variantId
      );
    },

    removeSelectedItems: (state, action) => {
      const selectedIds = action.payload;
      state.cartItems = state.cartItems.filter(
        (item) =>
          !selectedIds.some(
            (sel) =>
              sel.productId === item.productId &&
              sel.variantId === item.variantId
          )
      );
    },
  },
});

export const { addToCart, updateQuantity, removeItem, removeSelectedItems } =
  cartSlice.actions;
export default cartSlice.reducer;
