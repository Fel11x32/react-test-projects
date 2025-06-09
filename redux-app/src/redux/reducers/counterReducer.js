const initialState = {
	count: 0,
}

const INCREMENT = 'INCREMENT'
const DECREMENT = 'DECREMENT'

const counterReducer = (state = initialState, action) => {
	switch (action.type) {
		case INCREMENT:
			return { ...state, count: state.count + action.payload }
		case DECREMENT:
			return { ...state, count: state.count - action.payload }
		default:
			return state
	}
}

export default counterReducer
