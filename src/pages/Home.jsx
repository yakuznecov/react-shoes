import React from 'react';
import Card from '../components/Card';

function Home({ items, searchValue, setSearchValue, onChangeSearchInput, onAddToFavorite, onAddToCart }) {
	return (
		<div className='content p-40'>
			<div className='d-flex align-center justify-between mb-40'>
				<h1>{searchValue ? `Поиск по запросу: '${searchValue}'` : 'Все туфли'}</h1>
				<div className='search-block d-flex'>
					<img src='/img/search.svg' alt='search' />
					{searchValue && (
						<img
							onClick={() => setSearchValue('')}
							className='clear cu-p'
							src='/img/btn-remove.svg'
							alt='clear'
						/>
					)}{' '}
					{/* если есть символы в инпуте, показывать кнопку */}
					<input onChange={onChangeSearchInput} value={searchValue} placeholder='Поиск...' />
				</div>
			</div>

			<div className='d-flex flex-wrap'>
				{items
					.filter((item) => item.title.toLowerCase().includes(searchValue))
					.map((item) => (
						<Card
							key={item.title}
							onFavorite={(obj) => onAddToFavorite(obj)}
							onPlus={(obj) => onAddToCart(obj)}
							{...item}
						/>
					))}
			</div>
		</div>
	);
}

export default Home;
