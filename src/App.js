import Card from './components/Card';
import Header from './components/Header';
import Drawer from './components/Drawer';

function App() {
	return (
		<div className='wrapper clear'>
			<Drawer />

			<Header />
			<div className='content p-40'>
				<div className='d-flex align-center justify-between mb-40'>
					<h1>Все туфли</h1>
					<div className='search-block d-flex'>
						<img src='/img/search.svg' alt='search' />
						<input placeholder='Поиск...' />
					</div>
				</div>

				<div className='d-flex'>
					<Card />
					<div className='card'>
						<img width={133} height={112} src='/img/shoes/1.jpg' alt='shoes' />
						<h5>Мужские туфли</h5>
						<div className='d-flex justify-between align-center'>
							<div>
								<p>Цена:</p>
								<b>1 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img width={133} height={112} src='/img/shoes/1.jpg' alt='shoes' />
						<h5>Мужские туфли</h5>
						<div className='d-flex justify-between align-center'>
							<div>
								<p>Цена:</p>
								<b>1 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
					<div className='card'>
						<img width={133} height={112} src='/img/shoes/1.jpg' alt='shoes' />
						<h5>Мужские туфли</h5>
						<div className='d-flex justify-between align-center'>
							<div>
								<p>Цена:</p>
								<b>1 999 руб.</b>
							</div>
							<button className='button'>
								<img width={11} height={11} src='/img/plus.svg' alt='plus' />
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
