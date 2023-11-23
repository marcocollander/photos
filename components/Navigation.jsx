import clsx from 'clsx';
import LinkApp from './LinkApp';

const Navigation = ({ active, onClick }) => {
	const urls = ['/', '/about', '/gallery', '/contact'];
	const pages = ['Start', 'O mnie', 'Galeria', 'Kontakt'];

	return (
		<nav className=''>
			<ul
				className={clsx(
					'absolute top-15 right-1 bg-slate-100 h-28 w-1/4 z-10 p-3 text-center rounded-2xl',
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