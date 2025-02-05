import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",
  initialState: {
    items: [], // قائمة المنتجات في السلة
  },
  reducers: {
    addToCart: (state, action) => {
      state.items.push(action.payload); // إضافة الكتاب إلى السلة
    },
    removeFromCart: (state, action) => {
      state.items = state.items.filter((book) => book.id !== action.payload); // حذف الكتاب من السلة
    },
  },
});

export const { addToCart, removeFromCart } = cartSlice.actions;
export default cartSlice.reducer;
