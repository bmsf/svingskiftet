import {
	Card,
	CardHeader,
	CardBody,
	CardFooter,
	Image,
	Button,
	Link,
} from '@nextui-org/react';
import { ArrowRightIcon } from '@heroicons/react/24/solid';

import driver from '@/public/Rory-McIlroy-Teed-Up.webp';

export default function Categories() {
	return (
		<>
			<div className='why-svingskiftet-bento w-full'>
				<Card className='bento-card min-h-[100px]' id='top' shadow='none'>
					<CardBody className='grid grid-cols-2 p-0'>
						<Image
							alt='Album cover'
							className='object-cover w-full h-full rounded-none rounded-l-md'
							src='https://golfweek.usatoday.com/wp-content/uploads/sites/87/2023/11/Rory-McIlroy-Teed-Up.jpg?w=1000&h=600&crop=1'
						/>
						<div className='flex items-center justify-center gap-3 mx-4'>
							<p className='text-2xl'>Drivere</p>
						</div>
					</CardBody>
				</Card>
				<Card className='bento-card min-h-[100px]' id='top' shadow='none'>
					<CardBody className='grid grid-cols-2 p-0'>
						<Image
							alt='Album cover'
							className='object-cover w-full h-full rounded-none rounded-l-md'
							src='https://acushnet.scene7.com/is/image/titleist/2023T200Black-Finish-HighlightReel-PDP?wid=800&fmt=png-alpha'
						/>
						<div className='flex items-center justify-center gap-3 mx-4'>
							<p className='text-2xl'>Jernsett</p>
						</div>
					</CardBody>
				</Card>
				<Card className='bento-card' id='top' shadow='none'>
					<CardBody className='grid grid-cols-2 p-0'>
						<Image
							alt='Album cover'
							className='object-cover w-full h-full rounded-none rounded-l-md'
							src='https://www.golfwrx.com/wp-content/uploads/2020/04/gYgyBic9TqCsJeReCnFBw-e1586215751500-560x600.jpg'
						/>
						<div className='flex items-center justify-center'>
							<p className='text-2xl'>Puttere</p>
						</div>
					</CardBody>
				</Card>
				<Card className='bento-card' id='bottom' shadow='none'>
					<CardBody className='grid grid-cols-2 p-0'>
						<Image
							alt='Album cover'
							className='object-cover w-full h-full rounded-none rounded-l-md'
							src='https://www.tgw.com/blog-assets/wp-content/uploads/2023/09/Callaway-Paradym-Star-Fairway-Wood-hero-1.jpg'
						/>
						<div className='flex items-center justify-center'>
							<p className='text-2xl'>Fairway Wood</p>
						</div>
					</CardBody>
				</Card>
				<Card className='bento-card' id='bottom' shadow='none'>
					<CardBody className='grid grid-cols-2 p-0'>
						<Image
							alt='Album cover'
							className='object-cover w-full h-full rounded-none rounded-l-md'
							src='https://www.amateurgolf.com/images/uploads/00066140.jpg'
						/>

						<div className='flex items-center justify-center mx-6'>
							<p className='text-2xl'>Golfbag</p>
						</div>
					</CardBody>
				</Card>
			</div>
		</>
	);
}
