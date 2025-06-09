const initialState = {
	db: null,
	query: 'SELECT * FROM employees;',
	result: null,
	tablesWithData: [],
}

// Главный редьюсер
export default function rootReducer(state = initialState, action) {
	switch (action.type) {
		case 'SET_DB':
			return { ...state, db: action.payload }
		case 'SET_QUERY':
			return { ...state, query: action.payload }
		case 'SET_RESULT':
			return { ...state, result: action.payload }
		case 'SET_TABLE':
			return { ...state, tablesWithData: action.payload }
		default:
			return state
	}
}
