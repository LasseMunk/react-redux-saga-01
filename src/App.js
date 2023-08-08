import { Cart } from './components/cart/cart';
import { Header } from './components/header/header'
import { Main } from './components/Main/main';
import { Route, Routes } from 'react-router-dom';

function App() {
	return (
		<div className='App'>
			<Header />
			<Routes>
				<Route path='/' element={<Main />} />
				<Route path='/cart' element={<Cart />} />
			</Routes>
		</div>
	);
}

export default App;
