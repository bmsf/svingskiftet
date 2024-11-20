import {
	TbHandFinger,
	TbHandTwoFingers,
	TbHandThreeFingers,
} from 'react-icons/tb';

export default function WhySvingskiftet() {
	return (
		<section className='my-20'>
			<h2 className='text-5xl mb-10'>Hvorfor Svingskiftet?</h2>
			<div className='grid grid-cols-3 gap-4'>
				<div className='py-3'>
					<TbHandFinger className='h-16 w-16 text-secondary mb-6' />
					<h3 className='text-2xl py-3 font-semibold'>
						Alt golfutstyr samlet på ett sted
					</h3>
					<p className='text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
				<div className='py-3'>
					<TbHandTwoFingers className='h-16 w-16 text-secondary mb-6' />
					<h3 className='text-2xl font-semibold py-3 mb-6'>
						Vi sørger for trygg handel
					</h3>
					<p className='text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
				<div className='py-3'>
					<TbHandThreeFingers className='h-16 w-16 text-secondary mb-6' />
					<h3 className='text-2xl py-3 mb-6 font-semibold'>
						Kjøp og salg på ett sted
					</h3>
					<p className='text-lg'>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
			</div>
		</section>
	);
}
