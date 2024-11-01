import {
	Navbar,
	NavbarBrand,
	NavbarContent,
	NavbarItem,
	Link,
	Button,
	NavbarMenuToggle,
	NavbarMenu,
	NavbarMenuItem,
	Image,
} from '@nextui-org/react';
import TextAnimation from '../ui/text-animation';

export default function Hero() {
	return (
		<div className='flex flex-col items-center justify-center align-middle w-2/3'>
			<h1 className='text-6xl text-center'>
				Brukt golfutstyr med kvalitetsgaranti
				{/* <br />
				<span className='text-3xl'>
					Kjøp og selg brukte golfkøller, bager og mer - nøye vurdert av
					eksperter.
				</span> */}
			</h1>
			<div className='w-3/4 my-10'>
				<p className='text-xl text-center font-light'>
					Utforsk toppmerker med garantert kvalitet.
				</p>
			</div>
			<div className='flex gap-4 mb-10'>
				<Button as={Link} color='secondary' href='#' variant='solid' size='lg'>
					Sjekk utstyr
				</Button>
				<Button
					as={Link}
					color='secondary'
					href='#'
					variant='bordered'
					size='lg'
				>
					Lær mer
				</Button>
			</div>
			<TextAnimation />
			{/* <Image
				alt='Album cover'
				className='object-cover w-full h-full rounded-none rounded-l-md'
				src='https://acushnet.scene7.com/is/image/titleist/Gear+Hero+Option+4+20240129?wid=2048'
			/> */}
		</div>
	);
}
