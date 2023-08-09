import { useSelector } from "react-redux";
import CartButtonsGlobal from "../cart-buttons-global/cart-buttons-global";
import CartButtonsRemove from "../cart-buttons/cart-button-remove";
import "./cart.css";

const Cart = () => {
	const cartData = useSelector((state) => state.cartData);

	// & if cardData.length is not undefined
	const amount = cartData.length && cartData.map((item) => item.price).reduce((prev, next) => prev + next);
	
	const discount = 7; // 10% discount
	const discountSum = amount - (amount * (1-(discount/100)));
	const tax = (((amount - discount) * 1.25) - amount);
	const totalPrice = amount + tax;

	return (
		<div>
			<div className='cart-container'>
				<div className='cart-header'>
					<h3>Cart</h3>
				</div>
				<CartButtonsGlobal />
				<div className='cart-contents'>
					<table>
						<tr className='cart-contents-header'>
							<td>NAME</td>
							<td>COLOR</td>
							<td>BRAND</td>
							<td>CATEGORY</td>
							<td>PRICE</td>
						</tr>

						{cartData.map((item) => (
							<tr key={item.id}>
								<td>{item.name}</td>
								<td>{item.color}</td>
								<td>{item.brand}</td>
								<td>{item.category}</td>
								<td>{item.price}</td>
							</tr>
						))}
					</table>
					<hr></hr>
					<div className='cart-price-summery'>
						<h3>SUMMERY</h3>
						<table className='price-adjust'>
							<tr>
								<td>Amount</td>
								<td
									id='price-amount'
									className='cart-price-value'
								>
									{amount.toFixed(2)}
								</td>
							</tr>
							<tr>
								<td>Discount (-{discount}%)</td>
								<td
									id='price-discount'
									className='cart-price-value'
								>
									-{discountSum.toFixed(2)}
								</td>
							</tr>
						</table>

						<table className='price-sum'>
							<tr id='sum-line'></tr>
							<tr>
								<td>Tax</td>
								<td id='price-tax' className='cart-price-value'>
									{tax.toFixed(2)}
								</td>
							</tr>
							<tr>
								<td>Total</td>
								<td
									id='price-total'
									className='cart-price-value'
								>
									{totalPrice.toFixed(2)}
								</td>
							</tr>
						</table>
					</div>
				</div>
			</div>
		</div>
	);
};

export { Cart };
