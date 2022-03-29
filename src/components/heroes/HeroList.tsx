import React from 'react';
import { getHeroesByPublisher } from '../../selector/getHeroesByPublisher';
import { HeroCard } from './HeroCard';
import { Publisher } from '../../models';

export const HeroList = ({ publisher }: { publisher: Publisher }) => {
	const heroes = getHeroesByPublisher(publisher);
	return (
		<>
			<div className="row row-cols-1 row-cols-md-3 g-4 animate__animated animate__fadeIn animate__fast">
				{heroes.map(hero => (
					<HeroCard key={hero.id} {...hero} />
				))}
			</div>
		</>
	);
};
