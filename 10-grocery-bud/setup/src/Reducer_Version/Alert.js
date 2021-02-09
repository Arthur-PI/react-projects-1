import React, { useEffect } from 'react';

const Alert = (props) => {
	const { msg, type, stopAlert } = props;
	useEffect(() => {
		let timeout = setTimeout(() => {
			stopAlert();
		}, 2000);
		return () => {
			clearTimeout(timeout);
		};
	});
	return <p className={'alert ' + type}>{msg}</p>;
};

export default Alert;
