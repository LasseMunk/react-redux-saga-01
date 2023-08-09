import { createSlice, current } from "@reduxjs/toolkit";

const cartDataSlice = createSlice({
	name: "cartData",
	initialState: [],
	reducers: {
		addToCart(state, action) {
			// TODO - if item already exists, then don't add but throw warning
			state.push(action.payload.item);
		},
		removeFromCart(state, action) {
			if (state.length > 0) {
				// return items where item.id is not equal to the object which we wish to remove
                const remainingItems = state.filter((item) => item.id !== action.payload.item.id)
				return (state = remainingItems);
			}
		},
		emptyCart(state, action) {
			return [];
		},

		postCurrentState(state, action) {
			console.warn("current state: ", current(state));
		},
	},
});

export const { addToCart, removeFromCart, emptyCart, postCurrentState } =
	cartDataSlice.actions;
export const cartDataReducer = cartDataSlice.reducer;