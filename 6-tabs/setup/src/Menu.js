import React from 'react';

function Menu(props) {
	const { companies, indexActive, changeJob } = props;
	return (
		<div className='btn-container'>
			{companies.map((company, index) => {
				return (
					<button
						key={index}
						className={`job-btn ${
							index === indexActive ? 'active-btn' : 'false'
						}`}
						onClick={() => changeJob(index)}
					>
						{company}
					</button>
				);
			})}
		</div>
	);
}

export default Menu;
