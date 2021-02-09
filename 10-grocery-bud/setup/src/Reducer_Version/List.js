import React from 'react';
import { FaEdit, FaTrash } from 'react-icons/fa';

const List = (props) => {
	const { items, clear, editItem, deleteItem } = props;
	return (
		<div className='grocery-container'>
			<div className='grocery-list'>
				{items.map((item) => {
					return (
						<article key={item.id} className='grocery-item'>
							<p className='title'>{item.name}</p>
							<div className='button-container'>
								<button
									className='edit-btn'
									onClick={() => editItem(item.id)}
								>
									<FaEdit />
								</button>
								<button
									className='delete-btn'
									onClick={() => deleteItem(item.id)}
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
