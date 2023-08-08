import { takeEvery, put } from 'redux-saga/effects'
import { productList, setProductList } from "../slices/product-slice";


function* getProducts() 
{
    // wait for the fetch promise to return 'fulfilled'
    let data = yield fetch("http://localhost:3500/products");
    // wait for convertion to json format is complete and return object array
    data = yield data.json();
    yield put({ type: setProductList, data });
}

function* productSaga() 
{
    yield takeEvery(productList, getProducts); // saga reacts to every call to reducer action
}

export default productSaga;