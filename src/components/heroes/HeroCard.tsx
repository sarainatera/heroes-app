import React from 'react';
import { Link } from 'react-router-dom';
import './herocard.css';
import { Hero } from '../../models';

export const HeroCard = (hero: Hero) => {
	const { id, superhero, publisher, alter_ego, first_appearance, characters } = hero;
	const imagePath = `assets/${id}.jpg`;

	return (
		<Link to={`/hero/${id}`} className="my-card">
			<img src={imagePath} alt={superhero} />
			<div className="profile-name">{superhero}</div>
			<div className="profile-position">{alter_ego}</div>
			<div className="profile-overview">
				<div className="profile-overview">
					<div className="row">
						<div className="col-ms-4">
							<h3>{publisher}</h3>
							<p>
								First appearance: <br />
								{first_appearance}
							</p>
							{alter_ego !== characters && <p>{characters}</p>}
						</div>
					</div>
				</div>
			</div>
		</Link>
	);
};
