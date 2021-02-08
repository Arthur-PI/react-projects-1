import React, { useState, useEffect } from 'react';
import rgbToHex from './utils';

const SingleColor = (props) => {
	const [alert, setAlert] = useState(false);
	const { type, hex, weight } = props;

	const copyClipboard = () => {
		setAlert(true);
		navigator.clipboard.writeText('#' + hex);
	};

	useEffect(() => {
		const timeout = setTimeout(() => setAlert(false), 2000);
		return () => {
			clearTimeout(timeout);
		};
	}, [alert]);
	return (
		<article
			className={`color ${type === 'shade' ? 'color-light' : 'false'}`}
			style={{ backgroundColor: '#' + hex }}
			onClick={copyClipboard}
		>
			<p className='percent-value'>{weight}%</p>
			<p className='color-value'>#{hex}</p>
			{alert && <p className='alert'>copied to clipboard</p>}
		</article>
	);
};

export default SingleColor;
