function Card() {
	return (
		<div className='card'>
			<div className='favorite'>
				<img src='/img/heart-unliked.svg' alt='unliked' />
			</div>
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
	);
}

export default Card;
