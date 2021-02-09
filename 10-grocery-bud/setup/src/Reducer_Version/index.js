import React, { useState, useEffect, useReducer, useRef } from 'react';
import List from './List';
import Alert from './Alert';
import { reducer } from './reducer';
import { actions } from './actions';

// Submit: item added to the list
// Delete: item removed
// Edit: value changed
// Clear: empty List

const defaultState = {
	items: [],
	showAlert: false,
	alert: { msg: '', type: '' },
	editMode: { active: false, id: '' },
};

function App() {
	const item = useRef(null);

	const [state, dispatch] = useReducer(reducer, defaultState);

	const handleSubmit = (e) => {
		e.preventDefault();
		const value = item.current.value;
		if (value) {
			if (state.editMode.active) {
				dispatch({ type: actions.EDIT, payload: value });
			} else {
				dispatch({ type: actions.ADD, payload: value });
			}
			item.current.value = null;
		} else {
			dispatch({ type: actions.NOTHING });
		}
	};

	const clearList = () => {
		dispatch({ type: actions.CLEAR });
	};

	const deleteItem = (id) => {
		dispatch({ type: actions.REMOVE, payload: id });
	};

	const editItem = (id) => {
		dispatch({ type: actions.EDIT_MODE, payload: id });
		item.current.value = state.items.filter(
			(item) => item.id === id
		)[0].name;
	};

	const stopAlert = () => {
		dispatch({ type: actions.STOP_ALERT });
	};

	useEffect(() => {
		item.current.focus();
	});

	return (
		<section className='section-center'>
			<form className='grocery-form' onSubmit={handleSubmit}>
				{state.showAlert && (
					<Alert {...state.alert} stopAlert={stopAlert} />
				)}
				<h3>grocery bud</h3>
				<div className='form-control'>
					<input
						type='text'
						className='grocery'
						placeholder='e.g. eggs'
						ref={item}
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
				items={state.items}
			/>
		</section>
	);
}

export default App;
