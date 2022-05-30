import React from 'react';
import { Route } from 'react-router-dom';
import axios from 'axios';
import Home from './pages/Home';
import Favorites from './pages/Favorites';
import Header from './components/Header';
import Drawer from './components/Drawer';
import AppContext from './context';

function App() {
	const [items, setItems] = React.useState([]);
	const [cartItems, setСartItems] = React.useState([]); // хранение товаров в корзине
	const [favorites, setFavorites] = React.useState([]); // хранение данных об избранном
	const [searchValue, setSearchValue] = React.useState(''); // хранение данных из инпута поиска
	const [cartOpened, setCartOpened] = React.useState(false);
	const [isLoading, setIsLoading] = React.useState(true); // при открытии приложения будет true

	React.useEffect(() => {
		async function fetchData() {
			const cartResponse = await axios.get('https://628d1815a3fd714fd03f0553.mockapi.io/cart');
			const favoritesResponse = await axios.get('https://628d1815a3fd714fd03f0553.mockapi.io/favorites');
			const itemsResponse = await axios.get('https://628d1815a3fd714fd03f0553.mockapi.io/items');

			setIsLoading(false);

			setСartItems(cartResponse.data);
			setFavorites(favoritesResponse.data);
			setItems(itemsResponse.data);
		}

		fetchData();
	}, []);

	const onAddToCart = (obj) => {
		try {
			if (cartItems.find((item) => Number(item.id) === Number(obj.id))) {
				axios.delete(`https://628d1815a3fd714fd03f0553.mockapi.io/cart/${obj.id}`);
				setСartItems((prev) => prev.filter((item) => Number(item.id) !== Number(obj.id)));
			} else {
				axios.post('https://628d1815a3fd714fd03f0553.mockapi.io/cart', obj);
				setСartItems((prev) => [...prev, obj]);
			}
		} catch (error) {}
	};

	const onRemoveItem = (id) => {
		axios.delete(`https://628d1815a3fd714fd03f0553.mockapi.io/cart/${id}`);
		setСartItems((prev) => prev.filter((item) => item.id !== id));
	};

	const onAddToFavorite = async (obj) => {
		try {
			if (favorites.find((favObj) => Number(favObj.id) === Number(obj.id))) {
				axios.delete(`https://628d1815a3fd714fd03f0553.mockapi.io/favorites/${obj.id}`);
				setFavorites((prev) => prev.filter((item) => item.id !== obj.id));
			} else {
				const { data } = await axios.post('https://628d1815a3fd714fd03f0553.mockapi.io/favorites', obj);
				setFavorites((prev) => [...prev, data]);
			}
		} catch (error) {
			console.log('Не удалось добавить в избранное');
		}
	};

	const onChangeSearchInput = (event) => {
		setSearchValue(event.target.value);
	};

	const isItemAdded = (id) => {
		return cartItems.some((obj) => Number(obj.id) === Number(id));
	};

	return (
		<AppContext.Provider value={{ items, cartItems, favorites, isItemAdded, onAddToFavorite }}>
			<div className='wrapper clear'>
				{cartOpened && (
					<Drawer items={cartItems} onClose={() => setCartOpened(false)} onRemove={onRemoveItem} />
				)}
				<Header onClickCart={() => setCartOpened(true)} />

				<Route path='/' exact>
					<Home
						items={items}
						cartItems={cartItems}
						searchValue={searchValue}
						setSearchValue={setSearchValue}
						onChangeSearchInput={onChangeSearchInput}
						onAddToFavorite={onAddToFavorite}
						onAddToCart={onAddToCart}
						isLoading={isLoading}
					/>
				</Route>

				<Route path='/favorites' exact>
					<Favorites />
				</Route>
			</div>
		</AppContext.Provider>
	);
}

export default App;
