import Link from 'next/link';

const LinkApp = ({ children, onClick, href }) => {
	return (
		<li>
			<Link
				href={href}
				onClick={onClick}>
				{children}
			</Link>
		</li>
	);
};

export default LinkApp;