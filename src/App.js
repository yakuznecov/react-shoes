import Card from './components/Card';

function App() {
	return (
		<div className='wrapper clear'>
			<div style={{ display: 'none' }} className='overlay'>
				<div className='drawer'>
					<h2 className='mb-30 d-flex justify-between'>
						Корзина <img className='removeBtn' src='/img/btn-remove.svg' alt='btn' />
					</h2>

					<div className='items flex'>
						<div className='cartItem d-flex align-center mb-20'>
							<div className='cartItemImg' style={{ backgroundImage: 'url(/img/shoes/1.jpg)' }}></div>
							<div className='mr-20'>
								<p className='mb-5'>Оксфорды plain toe Cheaney Welland Mocha</p>
								<b>12 999 руб.</b>
							</div>
							<img className='removeBtn' src='/img/btn-remove.svg' alt='btn' />
						</div>
						<div className='cartItem d-flex align-center mb-20'>
							<div className='cartItemImg' style={{ backgroundImage: 'url(/img/shoes/1.jpg)' }}></div>
							<div className='mr-20'>
								<p className='mb-5'>Оксфорды plain toe Cheaney Welland Mocha</p>
								<b>12 999 руб.</b>
							</div>
							<img className='removeBtn' src='/img/btn-remove.svg' alt='btn' />
						</div>
					</div>
					<div className='cartTotalBlock'>
						<ul>
							<li className='d-flex'>
								<span>Итого:</span>
								<div></div>
								<b>21 498 руб. </b>
							</li>
							<li className='d-flex'>
								<span>Налог 5%: </span>
								<div></div>
								<b>1074 руб.</b>
							</li>
						</ul>
						<button className='greenButtom'>
							Оформить заказ <img src='/img/arrow.svg' alt='arrow' />
						</button>
					</div>
				</div>
			</div>

			<header className='d-flex justify-between align-center p-40'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.jpg' alt='logo' />
					<div className='headerInfo'>
						<h3 className='text-uppercase'>React Shoes</h3>
						<p>Магазин лучших туфлей</p>
					</div>
				</div>
				<ul className='d-flex align-center'>
					<li className='mr-30'>
						<img width={18} height={18} src='/img/cart.svg' alt='cart' />
						<span>1205 руб.</span>
					</li>
					<li>
						<img width={20} height={20} src='/img/user.svg' alt='user' />
					</li>
				</ul>
			</header>
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
