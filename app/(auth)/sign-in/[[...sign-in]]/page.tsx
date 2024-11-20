import { SignIn } from '@clerk/nextjs';

export default function Page() {
	return (
		<div className='flex justify-center items-center min-h-screen '>
			<SignIn
				appearance={{
					elements: {
						formButtonPrimary:
							'bg-foreground hover:bg-primray-200 text-white font-bold py-2 px-4 rounded',
						formFieldInput:
							'border border-gray-300 rounded-lg py-2 px-3 text-gray-700',
						formTitle: 'text-2xl font-semibold text-center text-gray-800',
						
						// Customize additional elements as needed
						// card: 'bg-background',
					
					},
				}}
			/>
		</div>
	);
}
