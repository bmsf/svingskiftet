import Categories from '@/components/layout/categories';
import Hero from '@/components/layout/hero';
import HowItWorks from '@/components/layout/how';
import WhySvingskiftet from '@/components/layout/why-svingskiftet';
import { Button } from '@nextui-org/react';
import Image from 'next/image';

export default function Home() {
	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<div className='z-10 max-w-5xl w-full items-center justify-center text-sm lg:flex flex-col'>
				<Hero />
				<WhySvingskiftet />
				<Categories />
				<HowItWorks />
			</div>
		</main>
	);
}
