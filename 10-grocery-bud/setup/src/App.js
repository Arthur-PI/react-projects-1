import React, { useState, useEffect } from 'react';
import List from './List';
import Alert from './Alert';

// Submit: item added to the list
// Delete: item removed
// Edit: value changed
// Clear: empty List

function App() {
	const [alert, setAlert] = useState({ msg: '', show: false, type: '' });
	const [ingrediant, setIngrediant] = useState('');
	const [ingrediants, setIngrediants] = useState([]);
	const [modify, setModify] = useState(null);

	const handleSubmit = (e) => {
		e.preventDefault();
		if (modify === null) {
			if (ingrediant !== '') {
				setIngrediants([...ingrediants, ingrediant]);
				setAlert({
					msg: 'item added to the list',
					show: true,
					type: 'alert-success',
				});
			}
		} else {
			if (ingrediant === '') {
				deleteItem(modify);
			} else {
				ingrediants[modify] = ingrediant;
				setAlert({
					msg: 'value changed',
					show: true,
					type: 'alert-success',
				});
				setModify(null);
			}
		}
		setIngrediant('');
	};

	const clearList = () => {
		setIngrediants([]);
		setAlert({
			msg: 'empty list',
			show: true,
			type: 'alert-danger',
		});
	};

	const deleteItem = (id) => {
		setIngrediants(ingrediants.filter((item, index) => index !== id));
		setAlert({
			msg: 'item removed',
			show: true,
			type: 'alert-danger',
		});
	};

	const editItem = (id) => {
		setIngrediant(ingrediants[id]);
		setModify(id);
	};

	useEffect(() => {
		let timeout = setTimeout(() => setAlert({ show: false }), 2000);

		return () => {
			clearTimeout(timeout);
		};
	}, [alert]);

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{alert.show && <Alert {...alert} />}
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						name='food'
						className='grocery'
						placeholder='e.g. eggs'
						value={ingrediant}
						onChange={(e) => setIngrediant(e.target.value)}
					/>
					<button type='submit' className='submit-btn'>
						add
					</button>
				</div>
			</form>
			<List
				deleteItem={deleteItem}
				editItem={editItem}
				clear={clearList}
				items={ingrediants}
			/>
		</section>
	);
}

export default App;
