const initialState = {
	customers: [],
}

const ADD_CUSTOMER = 'ADD_CUSTOMER'
const REMOVE_CUSTOMER = 'REMOVE_CUSTOMER'
const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

const customerReducer = (state = initialState, action) => {
	switch (action.type) {
		case ADD_MANY_CUSTOMERS: 
			return { ...state, customers: [...state.customers, ...action.payload]}
		case ADD_CUSTOMER:
			return { ...state, customers: [...state.customers, action.payload ] }
		case REMOVE_CUSTOMER:
			return { ...state, customers: state.customers.filter(customer => customer.id !== action.payload) }
		default:
			return state
	}
}

export default customerReducer
