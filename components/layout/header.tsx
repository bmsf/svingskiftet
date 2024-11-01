'use client';
import React from 'react';
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
} from '@nextui-org/react';
import { SignInButton, SignUpButton } from '@clerk/nextjs';

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = React.useState(false);

	const menuItems = ['Oppdag', 'Bli en Selger', 'Om Oss'];

	// const menuItems = [
	// 	'Profile',
	// 	'Dashboard',
	// 	'Activity',
	// 	'Analytics',
	// 	'System',
	// 	'Deployments',
	// 	'My Settings',
	// 	'Team Settings',
	// 	'Help & Feedback',
	// 	'Log Out',
	// ];

	return (
		<Navbar onMenuOpenChange={setIsMenuOpen}>
			<NavbarContent>
				<NavbarMenuToggle
					aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
					className='sm:block md:hidden'
				/>
				<NavbarBrand>
					<p className='font-bold text-inherit'>ACME</p>
				</NavbarBrand>
			</NavbarContent>

			<NavbarContent className='hidden md:flex gap-4' justify='center'>
				{/* <NavbarItem isActive>
					<Link href='#' aria-current='page'>
						Hjem
					</Link>
				</NavbarItem> */}
				<NavbarItem>
					<Link color='foreground' href='#'>
						Oppdag
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Bli en Selger
					</Link>
				</NavbarItem>
				<NavbarItem>
					<Link color='foreground' href='#'>
						Om Oss
					</Link>
				</NavbarItem>
			</NavbarContent>
			<NavbarContent justify='end'>
				<NavbarItem className='flex'>
					<Button color='secondary' href='#' variant='bordered'>
						<SignInButton>Logg inn</SignInButton>
					</Button>
				</NavbarItem>
				<NavbarItem>
					<Button as={Link} color='secondary' href='#' variant='shadow'>
						<SignUpButton>Registrer deg</SignUpButton>
					</Button>
				</NavbarItem>
			</NavbarContent>
			<NavbarMenu>
				{menuItems.map((item, index) => (
					<NavbarMenuItem key={`${item}-${index}`}>
						<Link
							color={
								index === 2
									? 'primary'
									: index === menuItems.length - 1
									? 'danger'
									: 'foreground'
							}
							className='w-full'
							href='#'
							size='lg'
						>
							{item}
						</Link>
					</NavbarMenuItem>
				))}
			</NavbarMenu>
		</Navbar>
	);
}
