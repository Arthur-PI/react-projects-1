import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = (props) => {
	const { items, clear, editItem, deleteItem } = props;
	return (
		<div className='grocery-container'>
			<div className='grocery-list'>
				{items.map((item, index) => {
					return (
						<article key={index} className='grocery-item'>
							<p className='title'>{item}</p>
							<div className='button-container'>
								<button
									className='edit-btn'
									onClick={() => editItem(index)}
								>
									<FaEdit />
								</button>
								<button
									className='delete-btn'
									onClick={() => deleteItem(index)}
								>
									<FaTrash />
								</button>
							</div>
						</article>
					);
				})}
			</div>
			{items.length > 0 && (
				<button className='clear-btn' onClick={clear}>
					clear
				</button>
			)}
		</div>
	);
};

export default List;
