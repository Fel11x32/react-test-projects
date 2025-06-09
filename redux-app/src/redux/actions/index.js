export const incrementAction = cash => ({
	type: 'INCREMENT',
	payload: cash,
})
export const decrementAction = cash => ({
	type: 'DECREMENT',
	payload: cash,
})
export const addCustomerAction = customer => ({
	type: 'ADD_CUSTOMER',
	payload: customer,
})
export const removeCustomerAction = id => ({
	type: 'REMOVE_CUSTOMER',
	payload: id,
})
export const addManyCustomersAction = customers => ({
	type: 'ADD_MANY_CUSTOMERS',
	payload: customers,
})
