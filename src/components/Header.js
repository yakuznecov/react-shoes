import { Link } from 'react-router-dom';

function Header(props) {
	return (
		<header className='d-flex justify-between align-center p-40'>
			<Link to='/'>
				<div className='d-flex align-center'>
					<img width={40} height={40} src='/img/logo.jpg' alt='logo' />
					<div className='headerInfo'>
						<h3 className='text-uppercase'>React Shoes</h3>
						<p>Магазин лучших туфлей</p>
					</div>
				</div>
			</Link>
			<ul className='d-flex align-center'>
				<li onClick={props.onClickCart} className='mr-30 cu-p'>
					<img width={18} height={18} src='/img/cart.svg' alt='cart' />
					<span>1205 руб.</span>
				</li>
				<li className='mr-20 cu-p'>
					<Link to='/favorites'>
						<img width={18} height={18} src='/img/heart.svg' alt='favorites' />
					</Link>
				</li>
				<li className='cu-p'>
					<img width={18} height={18} src='/img/user.svg' alt='user' />
				</li>
			</ul>
		</header>
	);
}

export default Header;
