import React from 'react';
import Card from './Card';

const CardList = ({robot}) => {
	return(
		<div>
		{
			robot.map((user, i) => {
				return (
					<Card 
					key={i} 
					id={user.id} 
					name={user.name} 
					email={user.email}/>
					);
			})
		}
		</div>
		);
}

export default CardList;