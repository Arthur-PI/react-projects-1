import React, { useEffect, useState } from 'react';
import SingleColor from './SingleColor';

import Values from 'values.js';

function App() {
	const [color, setColor] = useState('');
	const [error, setError] = useState(false);
	const [colors, setColors] = useState([]);
	const WEIGHT = 1;

	const handleSubmit = (e) => {
		e.preventDefault();
		try {
			let c = new Values(color).all(WEIGHT);
			setColors(c);
			console.log(c);
			setError(false);
		} catch (err) {
			console.log(err);
			setError(true);
		}
	};

	useEffect(() => {
		setColors(new Values('#f15025').all(WEIGHT));
	}, []);

	return (
		<>
			<section className='container'>
				<h3>color generator</h3>
				<form onSubmit={handleSubmit}>
					<input
						type='text'
						value={color}
						placeholder='#f15025'
						onChange={(e) => setColor(e.target.value)}
						className={`${error ? 'error' : null}`}
					/>
					<button type='submit' className='btn'>
						Submit
					</button>
				</form>
			</section>
			<section className='colors'>
				{colors.map((couleur, index) => {
					return (
						<SingleColor
							key={index}
							{...couleur}
							hex={couleur.hex}
						/>
					);
				})}
			</section>
		</>
	);
}

export default App;
