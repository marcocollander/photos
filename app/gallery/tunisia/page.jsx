import Image from 'next/image';
import tunisiaOne from '../../../public/images/tunisia/tunisia-one.jpg';
import tunisiaTwo from '../../../public/images/tunisia/tunisia-two.jpg'
import tunisiaThree from '../../../public/images/tunisia/tunisia-two.jpg'
import tunisiaFour from '../../../public/images/tunisia/tunisia-two.jpg'
import tunisiaFive from '../../../public/images/tunisia/tunisia-two.jpg'

const Page = () => {
	return (
		<section>
			<h2>Tunezja</h2>
			<Image
				src={tunisiaOne}
				alt='Picture of the author'
				priority
			/>
			<Image
				src={tunisiaTwo}
				alt='Picture of the author'
				priority
			/>
			<Image
				src={tunisiaThree}
				alt='Picture of the author'
				priority
			/>
			<Image
				src={tunisiaFour}
				alt='Picture of the author'
				priority
			/>
		</section>
	);
};

export default Page;
