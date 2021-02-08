import React, { useState, useEffect } from 'react';
import Loading from './Loading';
import TourList from './Tours';

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN

const url = 'https://course-api.com/react-tours-project';

function App() {
	const [isLoading, setIsLoading] = useState(true);
	const [isError, setIsError] = useState(false);
	const [tours, setTours] = useState([]);

	const removeTour = (id) => {
		setTours(tours.filter((tour) => tour.id !== id));
	};

	const fetchTours = async () => {
		setIsLoading(true);
		try {
			const response = await fetch(url);
			const data = await response.json();
			setTours(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			setIsError(true);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchTours();
	}, []);

	if (isLoading) {
		return (
			<main>
				<Loading />;
			</main>
		);
	}
	if (isError) {
		return (
			<main>
				<h1>Error...</h1>
			</main>
		);
	}
	if (tours.length === 0) {
		return (
			<main>
				<div className='title'>
					<h2>No tours Left</h2>
					<button onClick={fetchTours} className='btn'>
						Refresh
					</button>
				</div>
			</main>
		);
	}
	return (
		<main>
			<TourList tours={tours} removeTour={removeTour} />
		</main>
	);
}

export default App;
