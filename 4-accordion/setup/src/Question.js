import React, { useState } from 'react';
import { AiOutlineMinus, AiOutlinePlus } from 'react-icons/ai';

const Question = (props) => {
	const { id, title, info } = props;
	const [showAnswer, setShowAnswer] = useState(false);

	return (
		<article className='question'>
			<header>
				<h4>{title}</h4>
				<button
					className='btn'
					onClick={() => setShowAnswer(!showAnswer)}
				>
					{showAnswer ? <AiOutlineMinus /> : <AiOutlinePlus />}
				</button>
			</header>
			{showAnswer && <p>{info}</p>}
		</article>
	);
};

export default Question;
