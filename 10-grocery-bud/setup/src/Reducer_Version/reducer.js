import { actions } from './actions';
import { v4 as uuidv4 } from 'uuid';

export const reducer = (state, action) => {
	console.log(action);
	//* ADD
	if (action.type === actions.ADD) {
		const newItem = { id: uuidv4(), name: action.payload };
		const newItems = [...state.items, newItem];
		return {
			...state,
			items: newItems,
			showAlert: true,
			alert: { msg: 'item added', type: 'alert-success' },
		};
	}

	//* REMOVE
	if (action.type === actions.REMOVE) {
		const newItems = [
			...state.items.filter((item) => item.id !== action.payload),
		];
		return {
			...state,
			items: newItems,
			showAlert: true,
			alert: { msg: 'item removed', type: 'alert-danger' },
		};
	}

	// * CLEAR
	if (action.type === actions.CLEAR) {
		return {
			...state,
			items: [],
			showAlert: true,
			alert: { msg: 'list cleared', type: 'alert-danger' },
		};
	}

	//* EDIT
	if (action.type === actions.EDIT) {
		const item = state.items.filter(
			(item) => item.id === state.editMode.id
		)[0];
		item.name = action.payload;
		return {
			...state,
			showAlert: true,
			alert: { msg: 'item modified', type: 'alert-success' },
			editMode: { active: false, id: '' },
		};
	}

	if (action.type === actions.STOP_ALERT) {
		return { ...state, showAlert: false, alert: { msg: '', type: '' } };
	}

	//* SET EDIT MODE
	if (action.type === actions.EDIT_MODE) {
		return {
			...state,
			editMode: { active: true, id: action.payload },
		};
	}

	//* NOTHING
	if (action.type === actions.NOTHING) {
		return {
			...state,
			showAlert: true,
			alert: { msg: 'please enter something', type: 'alert-danger' },
		};
	}

	return state;
};
