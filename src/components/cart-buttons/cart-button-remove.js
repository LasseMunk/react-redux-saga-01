import "./cart-buttons.css";
import { useDispatch } from "react-redux";
import { removeFromCart } from "../../redux/slices/cart-data-slice";

function CartButtonsRemove(item) {
	const dispatch = useDispatch();

	const handleRemoveFromCart = (data) => {
		dispatch(removeFromCart(data));
	};

	return (
		<div className='cart-buttons'>
			<button onClick={() => handleRemoveFromCart(item)}>
				Remove
			</button>
		</div>
	);
}

export default CartButtonsRemove;
