import { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../../redux/slices/product-slice";
import CartButtons from "../cart-buttons/cart-buttons";
import CartButtonsGlobal from "../cart-global-buttons/cart-global-buttons";

function Products() {
	const products = useSelector((state) => state.products);
    const dispatch = useDispatch();

    useEffect( () => {
        dispatch(productList());
    }, []) // no array means the effect will only run once when the page is loaded

	return (
		<div className='products-container'>
			<div>
				<h3>Products</h3>
			</div>
            <CartButtonsGlobal/>
			<div className="product-items-container">
				{products.map((item) => (
					<div
						className='product-item'
						key={"product-item_" + item.id}
					>
						<img
							className='product-photo'
							src={item.photo}
							alt='product item'
						/>
						<ul>
							<li>Name: {item.name} </li>
							<li>Brand: {item.brand} </li>
							<li>Color: {item.color} </li>
							<li>Price: {item.price} </li>
							<li>Category: {item.category} </li>
						</ul>
						<CartButtons item={item}/>
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;
