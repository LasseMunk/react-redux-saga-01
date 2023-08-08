import "./header.css";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
	const dataInCart = useSelector((state) => state.cartData);

	return (
		<div className='header'>
			<Link to='/'>Products</Link>
			<div className='cart-div'>
				<Link to='/cart'>
					<span>{dataInCart.length}</span>
					<img
						src='https://img.icons8.com/?size=512&id=QVQY51sDgy1I&format=png'
						alt='shopping cart'
					/>
				</Link>
			</div>
		</div>
	);
};

export { Header };
