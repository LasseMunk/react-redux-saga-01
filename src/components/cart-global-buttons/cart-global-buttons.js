import "./cart-buttons-global.css";
import { useDispatch } from "react-redux";
import { emptyCart,	postCurrentState } from "../../redux/slices/cart-data-slice";

function CartButtonsGlobal(item) {
	const dispatch = useDispatch();

	const handleEmptyCart = () => dispatch(emptyCart());
	const handlePostCurrentState = () => dispatch(postCurrentState());

	return (
		<div className='cart-buttons-global'>
			<button onClick={() => handleEmptyCart()}>Empty Cart</button>
			<button onClick={() => handlePostCurrentState()}> CW Current State </button>
		</div>
	);
}

export default CartButtonsGlobal;
