import { useEffect } from "react";
import "./products.css";
import { useSelector, useDispatch } from "react-redux";
import { productList } from "../../redux/slices/product-slice";
import CartButtonsAdd from "../cart-buttons/cart-button-add";

function Products() {
	const products = useSelector((state) => state.products);
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(productList());
	}, []); // no array means the effect will only run once when the page is loaded

	return (
		<div className='products-container'>
			<div>
				<h3>Products</h3>
			</div>

			<div className='product-items-container'>
				{
				products.map((item) => (
					<div
						className='product-item'
						key={"item-id_" + item.id}
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
						<CartButtonsAdd item={item} />
					</div>
				))}
			</div>
		</div>
	);
}

export default Products;
