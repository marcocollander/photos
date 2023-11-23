'use client';
import clsx from 'clsx';
import { useState } from 'react';

const Hamburger = ({active, onClick}) => {

	return (
		<button
			onClick={onClick}
			className='absolute top-0 right-0 w-10 bg-wite h-10'>
			<span
				className={clsx('block w-7 h-1 bg-white mt-3 rounded-lg', active && 'rotate-45')}></span>
			<span className={clsx('block w-7 h-1 bg-white mt-1 mb-1 rounded-lg', active && 'hidden')}></span>
			<span className={clsx('block w-7 h-1 bg-white rounded-lg', active && '-rotate-45 -translate-y-1')}></span>
		</button>
	);
};

export default Hamburger;
