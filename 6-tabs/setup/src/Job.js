import React from 'react';

import { FaAngleDoubleRight } from 'react-icons/fa';

function Job(props) {
	const { id, title, dates, duties, company } = props;
	return (
		<article className='job-info'>
			<h3>{title}</h3>
			<h4>{company}</h4>
			<p className='job-date'>{dates}</p>
			{duties.map((duty, index) => {
				return (
					<div className='job-desc' key={index}>
						<FaAngleDoubleRight className='job-icon' />
						<p>{duty}</p>
					</div>
				);
			})}
		</article>
	);
}

export default Job;
