import React, { useState } from 'react';
import Menu from './Menu';
import Categories from './Categories';
import items from './data';

function App() {
	const [indexCat, setIndexCat] = useState(0);
	const categories = ['all', 'breakfast', 'lunch', 'shakes'];

	const changeCategory = (index) => {
		setIndexCat(index);
	};

	return (
		<main>
			<section className='menu section'></section>
			<div className='title'>
				<h2>our menu</h2>
				<div className='underline'></div>
			</div>
			<Categories
				changeCategory={changeCategory}
				categories={categories}
			/>
			<Menu items={items} category={categories[indexCat]} />
		</main>
	);
}

export default App;
