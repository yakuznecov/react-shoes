function Drawer(props) {
	return (
		<div className='overlay'>
			<div className='drawer'>
				<h2 className='mb-30 d-flex justify-between'>
					Корзина <img className='removeBtn' src='/img/btn-remove.svg' alt='close' onClick={props.onClose} />
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
	);
}

export default Drawer;
