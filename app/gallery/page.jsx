import Article from '../../components/Article';
import heros from '../../public/images/gallery/heros.jpg';
import palma from '../../public/images/palma/palma.png';

export default function Page() {
	return (
		<section>
			{/* <h2 className='text-center text-2xl tracking-wider'>Galeria</h2> */}
			<Article
				titleArticle={'Tunezja'}
				picture={heros}
				href={'/gallery/tunisia'}
			/>
			<Article
				titleArticle={'Hiszpania'}
				picture={palma}
				href={'/espania'}
			/>
		</section>
	);
}
