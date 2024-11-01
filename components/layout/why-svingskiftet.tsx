import {
	TbHandFinger,
	TbHandTwoFingers,
	TbHandThreeFingers,
} from 'react-icons/tb';

export default function WhySvingskiftet() {
	return (
		<section className='my-20'>
			<h2 className='text-4xl mb-10'>Hvorfor Svingskiftet?</h2>
			<div className='grid grid-cols-3'>
				<div>
					<TbHandFinger className='h-16 w-16 text-secondary' />
					<h3 className='text-xl'>De beste golfutstyret samlet på ett sted</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
				<div>
					<TbHandTwoFingers className='h-16 w-16 text-secondary' />
					<h3 className='text-xl'>Vi sørger for trygg handel</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
				<div>
					<TbHandThreeFingers className='h-16 w-16 text-secondary' />
					<h3 className='text-xl'>
						Spar tid ved å samle kjøp og salg på ett sted
					</h3>
					<p>
						Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis
						odit sit dicta labore aut, perferendis ipsa perspiciatis quam
						assumenda necessitatibus!
					</p>
				</div>
			</div>
		</section>
	);
}
