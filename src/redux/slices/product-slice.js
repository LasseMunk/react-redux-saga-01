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
            // TODO - Add unique uuidv4 key to each product
            return [...action.data];
        },
        productSearch(state, action) {
            
        }
	},
});

export const { productList, setProductList, productSearch } = productsSlice.actions;
export const productsReducer = productsSlice.reducer;
