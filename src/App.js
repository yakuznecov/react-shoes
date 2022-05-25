import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	const [items, setItems] = React.useState([]);
	const [cartOpened, setCartOpened] = React.useState(false);

	React.useEffect(() => {
		fetch('https://628d1815a3fd714fd03f0553.mockapi.io/items')
			.then((res) => {
				return res.json();
			})
			.then((json) => {
				setItems(json);
			});
	}, []);

	return (
		<div className='wrapper clear'>
			{cartOpened && <Drawer onClose={() => setCartOpened(false)} />}
			<Header onClickCart={() => setCartOpened(true)} />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все туфли</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex flex-wrap'>
					{items.map((obj) => (
						<Card
							title={obj.title}
							price={obj.price}
							imageUrl={obj.imageUrl}
							onFavorite={() => console.log('Добавили в закладки')}
							onPlus={() => console.log('Нажали плюс')}
						/>
					))}
				</div>
			</div>
		</div>
	);
}

export default App;
