import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import State from './State_Version';
import Reducer from './Reducer_Version';

ReactDOM.render(
	<React.StrictMode>
		<Reducer />
	</React.StrictMode>,
	document.getElementById('root')
);
