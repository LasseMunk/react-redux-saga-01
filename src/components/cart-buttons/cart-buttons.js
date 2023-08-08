import "./cart-buttons.css";
import { useDispatch } from "react-redux";
import {
	addToCart,
	removeFromCart,
	postCurrentState
} from "../../redux/slices/cart-data-slice";

function CartButtons(item) {
	const dispatch = useDispatch();

	const handleAddToCart = (data) => {
		dispatch(addToCart(data));
		dispatch(postCurrentState());
	};
	const handleRemoveFromCart = (data) => {
		dispatch(removeFromCart(data));
		dispatch(postCurrentState());
	};

	return (
		<div className='cart-buttons'>
			<button onClick={() => handleAddToCart(item)}>Add To Cart</button>
			<button onClick={() => handleRemoveFromCart(item)}>
				Remove From Cart
			</button>
		</div>
	);
}

export default CartButtons;
