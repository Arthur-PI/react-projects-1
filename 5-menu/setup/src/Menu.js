import React from 'react';
import Dish from './Dish';

const Menu = (props) => {
	const { items, category } = props;

	return (
		<div className='section-center'>
			{items.map((dish) => {
				if (category === 'all' || category === dish.category) {
					return <Dish key={dish.id} {...dish} />;
				}
			})}
		</div>
	);
};

export default Menu;
