import { createSlice } from "@reduxjs/toolkit";

const ProductsSlice = createSlice({
  name: "products",
  initialState: [
    {
      id: 1,
      title: "Slides",
      brand: "Burberry",
      color: "Brown",
      price: 6000,
      image: "https://i.ebayimg.com/images/g/3uAAAOSwbHFkGmLi/s-l1600.jpg",
    },
    {
      id: 2,
      title: "Shoes",
      brand: "Gucci",
      color: "White",
      price: 10000,
      image:
        "https://static.nike.com/a/images/t_prod_ss/w_960,c_limit,f_auto/a755b16b-b126-4476-852c-4049172ef9a5/air-force-1-mid-x-off-white%E2%84%A2-pine-green-dr0500-300-release-date.jpg",
    },
    {
      id: 3,
      title: "Shoes",
      brand: "Off-white",
      color: "White",
      price: 15000,
      image:
        "https://down-ph.img.susercontent.com/file/d2493959bcebc3649a4d95bda61b4fe1",
    },
    {
      id: 4,
      title: "Shoes",
      brand: "Off-white",
      color: "White",
      price: 15000,
      image:
        "https://down-ph.img.susercontent.com/file/d2493959bcebc3649a4d95bda61b4fe1",
    },
    {
      id: 5,
      title: "Shoes",
      brand: "Off-white",
      color: "White",
      price: 15000,
      image:
        "https://down-ph.img.susercontent.com/file/d2493959bcebc3649a4d95bda61b4fe1",
    },
  ],
  reducers: {},
});

export const {} = ProductsSlice.actions;
export default ProductsSlice.reducer;
