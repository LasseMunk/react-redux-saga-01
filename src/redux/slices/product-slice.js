import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
	name: "products",
	initialState: [],
	reducers: {
		productList(state, action) {
            // is only used to call saga which calls 'setProductList'
            // could be made into an action only
		},
        setProductList(state, action)
        {   
            return [...action.data];
        }
	},
});

export const { productList, setProductList } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
