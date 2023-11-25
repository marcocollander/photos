'use client';

import Header from '../components/Header';
import Navigation from '../components/Navigation';
import './globals.css';
import { useState } from 'react';

export default function RootLayout({ children }) {
	const [active, setActive] = useState(false);

	const handleClick = () => {
		setActive(prev => !prev);
	};

  const handleClickLink = () => {
    setActive(prev => !prev)
    console.log(active);
  }

	return (
		<html lang='pl'>
			<body className='bg-orange-400'>
				<Header onClick={handleClick} active={active} />
				<Navigation active={active}  onClick={handleClickLink}/>
				{children}
			</body>
		</html>
	);
}
