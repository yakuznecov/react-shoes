import React from 'react';
import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

const arr = [
	{
		title: 'Мужские туфли wholecuts Berwick',
		price: 16790,
		imageUrl: '/img/shoes/1.jpg',
	},
	{
		title: 'Мужские туфли saddle Alden Sheppard Street',
		price: 15600,
		imageUrl: '/img/shoes/2.jpg',
	},
];

function App() {
	const [cartOpened, setCartOpened] = React.useState(false);

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

				<div className='d-flex'>
					{arr.map((obj) => (
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
