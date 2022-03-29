import { heroes } from '../data/heroes';
import { Publisher } from '../models';

export const getHeroesByPublisher = (publisher: Publisher) => {
	return heroes.filter(hero => hero.publisher === publisher);
};
