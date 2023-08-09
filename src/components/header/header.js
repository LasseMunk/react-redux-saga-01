import "./header.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { productSearch } from "../../redux/slices/product-slice";

const Header = () => {
	const dispatch = useDispatch();
	const dataInCart = useSelector((state) => state.cartData);

	const handleOnInputChange = (query) => {
		dispatch(productSearch(query));
	}

	return (
		<div className='header'>
			<div className='header-links-container'>
				<Link to='/' style={{ textDecoration: "none" }}>
					Products
				</Link>
			</div>
			<div className='header-search-box-container'>
				<input
					type='text'
					className='header-search-box'
					onChange={(event) => handleOnInputChange(event.target.value)}
					placeholder='Search Product'
				/>
			</div>
			<div className='header-cart-div-container'>
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
