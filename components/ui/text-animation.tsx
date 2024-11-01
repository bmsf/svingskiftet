'use client';
import React from 'react';
import { motion } from 'framer-motion';

const texts = [
	'Vi har ikke åpningstider, men vi er tilgjengelige 24/7',
	'Vi viser frem biler til alle døgnets tider, men kun etter avtale',
	'Vi har brukthandelbevilling, utstedt av Politiet',
	// ... add more texts as needed
];

export default function TextAnimation() {
	return (
		<div className='container p-5 w-2/3'>
			<div
				className='flex relative overflow-hidden 
				before:absolute before:left-0 before:top-0 before:z-10 before:h-full before:w-10 
				before:bg-gradient-to-r before:from-[#F9F8F1] before:to-transparent 
				after:absolute after:right-0 after:top-0 after:h-full after:w-10 
				after:bg-gradient-to-l after:from-[#F9F8F1] after:to-transparent'
			>
				<motion.div
					transition={{
						duration: 20,
						ease: 'linear',
						repeat: Infinity,
					}}
					initial={{ translateX: 0 }}
					animate={{ translateX: '-50%' }}
					className='flex gap-16 pr-16'
				>
					{/* Duplicate the text array to ensure seamless looping */}
					{[...new Array(2)].fill(0).map((_, idx) => (
						<React.Fragment key={idx}>
							{texts.map((text, index) => (
								<span
									key={index}
									className='text-lg text-black whitespace-nowrap'
								>
									{text}
								</span>
							))}
						</React.Fragment>
					))}
				</motion.div>
			</div>
		</div>
	);
}
