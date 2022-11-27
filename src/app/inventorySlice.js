import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  items: [
    {
      name: "pizza",
      price: 30,
      url: "https://static.toiimg.com/thumb/53110049.cms?width=1200&height=900",
      quantity: 5,
    },
    {
      name: "pasta",
      price: 20,
      url: "https://metukimil.co.il/wp-content/uploads/2021/10/%D7%A4%D7%A1%D7%98%D7%94-%D7%91%D7%A1%D7%99%D7%A8-%D7%90%D7%97%D7%93-1.jpg",
      quantity: 20,
    },
    {
      name: "Lazannia",
      price: 50,
      url: "https://www.kipa.co.il/userFiles/735-415/5ba4eba88221afc13b636396c0217e7a.jpg",
      quantity: 10,
    },
    {
      name: "tiramisu",
      price: 15,
      url: "https://d3o5sihylz93ps.cloudfront.net/wp-content/uploads/sites/2/2019/05/07142216/homeubuntureleasesrelease_20190505071537webappmu-pluginsfoody-white-labeltmp1557228135-MhGqyU.jpg",
      quantity:4,
    },
    {
      name: "Arenchini",
      price: 12,
      url: "https://pastaluna-delivery.com/wp-content/uploads/2020/12/Danny_Golan-3733.jpg",
      quantity:10,
    },
  ],
};

export const inventorySlice = createSlice({
  name: "inventory",
  initialState,
  reducers: {
    addItem: (state, action) => {
      const items = [...state.items];
      const item = action.payload;
      items.push(item);
      state.items = items;
    },
    buyItem: (state, action) => {
      const itemName = action.payload;
      const items = [...state.items];
      const item = items.find((i) => i.name === itemName);
      const quantity = item.quantity;
      item.quantity = quantity > 0 ? quantity - 1 : 0;
      state.items = items;
    },
    editItemPrice: (state, action) => {
      const { itemName, price } = action.payload;
      const items = [...state.items];
      const item = items.find((i) => i.name === itemName);
      item.price = price;
      state.items = items;
    },
  },
});

export const { addItem, buyItem, editItemPrice } = inventorySlice.actions;

export const selectItems = (state) => state.inventory.items;

export default inventorySlice.reducer;
