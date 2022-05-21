function App() {
	return (
		<div className='wrapper clear'>
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
				<h1 className='mb-40'>Все туфли</h1>

				<div className='d-flex'>
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
