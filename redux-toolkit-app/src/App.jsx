import { useSelector, useDispatch } from 'react-redux'
import {
	decrement,
	increment,
	incrementByAmount,
	incrementByAmountAsync,
} from './features/counter/counterSlice'
import { useState } from 'react'

function App() {
	const count = useSelector(state => state.counter.value)
	const dispatch = useDispatch()

	const [amount, setAmount] = useState('3')
	return (
		<>
			<div style={{ display: 'flex', marginBottom: 20, gap: '10px' }}>
				<button
					aria-label='Increment-value'
					onClick={() => dispatch(increment())}
				>
					Increment
				</button>
				<span>{count}</span>
				<button
					aria-label='Decrement-value'
					onClick={() => dispatch(decrement())}
				>
					Decrement
				</button>
			</div>
			<div style={{ display: 'flex', gap: '10px' }}>
				<input
					type='number'
					value={amount}
					onChange={event => setAmount(event.target.value)}
				/>
				<button
					onClick={() => dispatch(incrementByAmount(Number(amount) || 0))}
				>
					Add Amount
				</button>
				<button
					onClick={() => dispatch(incrementByAmountAsync(Number(amount) || 0))}
				>
					Add Async
				</button>
			</div>
		</>
	)
}

export default App