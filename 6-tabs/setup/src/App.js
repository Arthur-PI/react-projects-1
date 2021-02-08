import React, { useState, useEffect } from 'react';
import Menu from './Menu';
import Job from './Job';
// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = 'https://course-api.com/react-tabs-project';

function App() {
	const [jobs, setJobs] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [indexActive, setIndexActive] = useState(0);
	const companies = [];

	const fetchJobs = async () => {
		setIsLoading(true);
		try {
			let response = await fetch(url);
			let data = await response.json();
			setJobs(data);
			setIsLoading(false);
		} catch (error) {
			setIsLoading(false);
			console.log(error);
		}
	};

	useEffect(() => {
		fetchJobs();
	}, []);

	const changeJob = (index) => {
		setIndexActive(index);
	};

	//* Loading page
	if (isLoading) {
		return (
			<main>
				<h1>Loading...</h1>
			</main>
		);
	}

	for (let job of jobs) companies.push(job.company);

	//* Normal page
	return (
		<section className='section'>
			<div className='title'>
				<h2>experience</h2>
				<div className='underline'></div>
			</div>
			<div className='jobs-center'>
				<Menu
					companies={companies}
					indexActive={indexActive}
					changeJob={changeJob}
				/>
				<Job {...jobs[indexActive]} />
			</div>
			<button className='btn'>more info</button>
		</section>
	);
}

export default App;
