import React from 'react';

const Categories = (props) => {
	const { changeCategory, categories } = props;

	return (
		<div className='btn-container'>
			{categories.map((category, index) => {
				return (
					<button
						key={index}
						className='filter-btn'
						onClick={() => changeCategory(index)}
					>
						{category}
					</button>
				);
			})}
		</div>
	);
};

export default Categories;
