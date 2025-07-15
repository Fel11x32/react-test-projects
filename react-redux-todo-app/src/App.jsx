import React from 'react'
import AddTodo from './features/todos/AddTodo'
import TodosList from './features/todos/todosList'

const App = () => {
	return (
		<div style={{ maxWidth: '600px', margin: '0 auto', padding: '1rem' }}>
			<h1>Мои ToDo</h1>
			<AddTodo/>
			<TodosList/>
		</div>
	)
}

export default App