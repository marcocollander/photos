import clsx from 'clsx';
import LinkApp from './LinkApp';

const Navigation = ({ active, onClick }) => {
	const urls = ['/', '/about', '/gallery', '/contact'];
	const pages = ['Start', 'O mnie', 'Galeria', 'Kontakt'];

	return (
		<nav className=''>
			<ul
				className={clsx(
					'absolute top-15 right-0 bg-orange-400 h-14 w-full z-10 p-3 flex justify-evenly',
					!active && 'hidden'
				)}>
				{pages.map((page, index) => (
					<LinkApp
						key={index}
						onClick={onClick}
						href={urls[index]}>
						{page}
					</LinkApp>
				))}
			</ul>
		</nav>
	);
};

export default Navigation;