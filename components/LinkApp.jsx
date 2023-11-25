import Link from 'next/link';

const LinkApp = ({ children, onClick, href }) => {
	return (
		<li className='mb-1 text-lg tracking-wider font-semibold'>
			<Link
				href={href}
				onClick={onClick}>
				{children}
			</Link>
		</li>
	);
};

export default LinkApp;