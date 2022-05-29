import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setСartItems] = React.useState([]); // хранение товаров в корзине
	const [favorites, setFavorites] = React.useState([]); // хранение данных об избранном
	const [searchValue, setSearchValue] = React.useState(''); // хранение данных из инпута поиска
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		axios.get('https://628d1815a3fd714fd03f0553.mockapi.io/items').then((res) => {
			setItems(res.data);
		});
		axios.get('https://628d1815a3fd714fd03f0553.mockapi.io/cart').then((res) => {
			setСartItems(res.data);
		});
	}, []);

	const onAddToCart = (obj) => {
		axios.post('https://628d1815a3fd714fd03f0553.mockapi.io/cart', obj);
		setСartItems((prev) => [...prev, obj]);
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://628d1815a3fd714fd03f0553.mockapi.io/cart/${id}`);
		setСartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const onAddToFavorite = (obj) => {
		axios.post('https://628d1815a3fd714fd03f0553.mockapi.io/favorites', obj);
		setFavorites((prev) => [...prev, obj]);
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />}
			<Header onClickCart={() => setCartOpened(true)} />

			<Route path='/' exact></Route>

			<Home
				items={items}
				cartItems={cartItems}
				searchValue={searchValue}
				setSearchValue={setSearchValue}
				onChangeSearchInput={onChangeSearchInput}
				onAddToFavorite={onAddToFavorite}
				onAddToCart={onAddToCart}
			/>
		</div>
	);
}

export default App;
