import React, { useState } from 'react';
import people from './data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [person, setPerson] = useState(people[0]);
	const { id, name, job, image, text } = person;

	const nextReview = () => {
		if (id === people.length) setPerson(people[0]);
		else setPerson(people[id]);
	};
	const previousReview = () => {
		if (id === 1) setPerson(people[people.length - 1]);
		else setPerson(people[id - 2]);
	};

	const randomReview = () => {
		let newId = Math.floor(Math.random() * Math.floor(people.length));
		if (newId === id - 1) randomReview();
		else setPerson(people[newId]);
	};

	return (
		<article className='review'>
			<div className='img-container'>
				<img src={image} alt={name} className='person-img' />
				<span className='quote-icon'>
					<FaQuoteRight />
				</span>
			</div>
			<h4 className='author'>{name}</h4>
			<p className='job'>{job}</p>
			<p className='info '>{text}</p>
			<div>
				<button className='prev-btn' onClick={previousReview}>
					<FaChevronLeft />
				</button>
				<button className='next-btn' onClick={nextReview}>
					<FaChevronRight />
				</button>
			</div>
			<button className='random-btn' onClick={randomReview}>
				surprise me
			</button>
		</article>
	);
};

export default Review;
