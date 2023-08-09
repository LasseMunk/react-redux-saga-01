import { configureStore } from "@reduxjs/toolkit";
import { cartDataReducer } from "./slices/cart-data-slice";
import { productsReducer} from "./slices/product-slice";
import {productSaga} from "./sagas/product-saga";
import createSagaMiddleware from 'redux-saga';


const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
	reducer: {
		cartData: cartDataReducer,
		products: productsReducer,
	},
	middleware: () => [sagaMiddleware],
});

sagaMiddleware.run(productSaga);

export { store };