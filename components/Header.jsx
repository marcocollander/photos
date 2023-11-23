import Hamburger from './Hamburger';

const Header = ({active, onClick}) => {
	return (
		<header>
			<h1 className='text-center text-3xl bg-black text-white p-2 uppercase tracking-wider'>
				Nasze wczasy
			</h1>
			<Hamburger onClick={onClick} active={active}/>
		</header>
	);
};

export default Header;
