import Image from 'next/image';
import hero from '../public/images/hero/hero-mobile.png';

export default function Page() {
	return (
    <>
      <section className='relative w-full flex items-center flex-col'>
        <Image
          src='/images/hero/hero-desktop.png'
          sizes='100%'
          width={1500}
          height={716}
          className='hidden sm:block '
          alt='Picture authors in front of the cathedral in Palma de Mallorca'
          priority
        />

        <Image
          src='/images/hero/hero-mobile.png'
          sizes='100%'
          width={650}
          height={900}
          className='block sm:hidden'
          alt='Picture authors in front of the cathedral in Palma de Mallorca'
          priority
        />
        <div className='p-5 '>
          <h2 className='text-center text-2xl font-semiboldi p-5 z-10 '>
            Witamy na naszym portalu.
          </h2>
          <p className='px-10 py-12 text-xl text-center border-2 border-gray-700 rounded-3xl'>
            Znajdziesz tutaj nasze zdjęcia z naszych wczasów zagranicznych
            tudzież krajowych. Jak do tej pory za granicą byliśmy w Hiszpanii, Grecji, Egipcie a ostatnio w Tunezji.
						W kraju na wczasach byliśmy w Między-Zdrojach, w Między-Wodziu, w Pieninach, w Karpaczu  i w Szklarskiej Porębie.
          </p>
        </div>
      </section>
    </>
  );
}
