import "./cart-buttons.css";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/slices/cart-data-slice";

function CartButtonsAdd(item) {
	const dispatch = useDispatch();

	const handleAddToCart = (data) => {
		dispatch(addToCart(data));
	};
	
	return (
		<div className='cart-buttons'>
			<button onClick={() => handleAddToCart(item)}>Add To Cart</button>
		</div>
	);
}

export default CartButtonsAdd;
