import { useSelector, useDispatch } from 'react-redux'
import {
	incrementAction,
	decrementAction,
	addCustomerAction,
	removeCustomerAction,
} from '../redux/actions'
import { fetchCustomers } from '../asyncActions/customers'

const Counter = () => {
	const count = useSelector(state => state.counter.count)
	const customers = useSelector(state => state.customers.customers)
	const dispatch = useDispatch()

	const incrementCounter = cash => {
		dispatch(incrementAction(cash))
	}
	const decrementCounter = cash => {
		dispatch(decrementAction(cash))
	}

	const addCustomer = name => {
		const customer = {
			name,
			id: Date.now(),
		}
		dispatch(addCustomerAction(customer))
	}

	const removeCustomer = customer => {
		dispatch(removeCustomerAction(customer.id))
	}

	return (
		<>
			<div style={{ display: 'flex', gap: '10px', marginBottom: '20px' }}>
				<div>{count}</div>
				<button onClick={() => incrementCounter(Number(prompt()))}>+</button>
				<button onClick={() => decrementCounter(Number(prompt()))}>-</button>
				<button onClick={() => addCustomer(prompt())}>Добавить клиента</button>
				<button onClick={() => dispatch(fetchCustomers())}>Добавить клиентов из базы</button>
			</div>
			{customers.length > 0 ? (
				<div>
					{customers.map(customer => (
						<div key={customer.id} onClick={() => removeCustomer(customer)}>{customer.name}</div>
					))}
				</div>
			) : (
				<div>Клиенты не найдены!!</div>
			)}
		</>
	)
}

export default Counter