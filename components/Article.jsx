import Image from 'next/image';
import Link from 'next/link';

const Article = ({ titleArticle, picture, href }) => {
	return (
		<article className='relative'>
			<Link
				className='absolute text-xl top-16 left-1/2 -translate-x-1/2'
				href={href}>
				{titleArticle}
			</Link>

			<Image src={picture} />
		</article>
	);
};

export default Article;
