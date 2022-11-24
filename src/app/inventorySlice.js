import { createSlice } from '@reduxjs/toolkit';
import Item from '../models/Item'

const initialState = {
  items: [{name:"pizza", price:30, url: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900", quantity: 5}],
  // items: [new Item("pizza", 30, "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900", 5),
  //         new Item("pizza1", 30, "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900", 5)],
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state, action) => {
      const items = [...state.items]
      const item = action.payload
      items.push(item)
      state.items = items;
    },
    buyItem: (state, action) => {
      const itemName = action.payload;
      const items = [...state.items]
      const item = items.find(i => i.name === itemName)
      const quantity = item.quantity;
      item.quantity = quantity > 0 ? quantity - 1 : 0;
      state.items = items;
    },
    editItemPrice: (state, action) => {
      const { itemName, price } = action.payload;
      const items = [...state.items]
      const item = items.find(i => i.name === itemName)
      item.price = price;
      state.items = items;
    },
  },
});

export const { addItem, buyItem, editItemPrice } = inventorySlice.actions;

export const selectItems = (state) => state.inventory.items;

export default inventorySlice.reducer;
