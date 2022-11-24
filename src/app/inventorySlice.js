import { createSlice } from '@reduxjs/toolkit';
import Item from '../models/Item'

const initialState = {
  items:[new Item("pizza",30,"https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",5),new Item("pizza1",30,"https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",5)],
};

export const inventorySlice = createSlice({
  name: 'inventory',
  initialState,
  reducers: {
    addItem: (state,action) => {
      const item = action.payload
      state.items.push(item)
    },
    buyItem: (state,action) => {
      const itemName = action.payload;
      const item = state.items.find( i => i.name === itemName)
      const quantity = item.quantity 
      item.quantity = quantity > 0? quantity-1: 0;
    },
    editItemPrice: (state, action) => {
      const {itemName,price} = action.payload;
      const item = state.items.find( i => i.name === itemName)
      item.price = price;
    },
  },
});

export const { addItem, buyItem, editItemPrice } = inventorySlice.actions;

export const selectItems = (state) => state.inventory.items;

export default inventorySlice.reducer;
