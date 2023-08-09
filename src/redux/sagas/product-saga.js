import { takeEvery, put } from 'redux-saga/effects'
import { productList, productSearch, setProductList } from "../slices/product-slice";

function* getProducts() 
{
    // wait for the fetch promise to return 'fulfilled'
    let data = yield fetch("http://localhost:3500/products");
    // wait for convertion to json format is complete and return object array
    data = yield data.json();
    yield put({ type: setProductList, data });
}

function* searchProducts(query) 
{
   let result =  yield fetch(`http://localhost:3500/products?q=${query.payload}`);
   result = yield result.json();
   yield put({type: setProductList, data: result})
}

function* productSaga() 
{
    // the product saga collects all sagas and export it as one, which can be run in the stores middleware
    yield takeEvery(productSearch, searchProducts)
    yield takeEvery(productList, getProducts); // saga reacts to every call to reducer action
}

export  {productSaga};