import React, { useState, useEffect } from 'react';
import { FiChevronRight, FiChevronLeft } from 'react-icons/fi';
import { FaQuoteRight } from 'react-icons/fa';
import data from './data';

function App() {
	const [people, setPeople] = useState(data);
	const [index, setIndex] = useState(0);

	const previousIndex = () => {
		if (index === 0) return people.length - 1;
		return index - 1;
	};
	const nextIndex = () => {
		if (index === people.length - 1) return 0;
		return index + 1;
	};

	// useEffect(() => {
	// 	const lastIndex = people.length - 1;
	// 	if (index < 0) setIndex(lastIndex);
	// 	if (index > lastIndex) setIndex(0);
	// }, [index, people]);

	useEffect(() => {
		let slider = setInterval(() => {
			setIndex(nextIndex());
		}, 3000);
		return () => clearInterval(slider);
	}, [index]);

	return (
		<section className='section'>
			<div className='title'>
				<h2>
					<span>/</span>reviews
				</h2>
			</div>
			<div className='section-center'>
				{people.map((person, personIndex) => {
					const { id, image, name, title, quote } = person;
					let position = 'nextSlide';
					if (personIndex === index) {
						position = 'activeSlide';
					}
					if (personIndex === previousIndex()) {
						position = 'lastSlide';
					}
					return (
						<article className={position} key={id}>
							<img
								src={image}
								alt={name}
								className='person-img'
							/>
							<h4>{name}</h4>
							<p className='title'>{title}</p>
							<p className='text'>{quote}</p>
							<FaQuoteRight className='icon' />
						</article>
					);
				})}
				<button className='prev' onClick={() => setIndex(nextIndex())}>
					<FiChevronLeft />
				</button>
				<button
					className='next'
					onClick={() => setIndex(previousIndex())}
				>
					<FiChevronRight />
				</button>
			</div>
		</section>
	);
}

export default App;
