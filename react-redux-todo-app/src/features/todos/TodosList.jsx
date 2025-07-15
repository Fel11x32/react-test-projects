import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from './TodoItem'
import styles from './TodosList.module.scss'

const TodosList = () => {
	const todos = useSelector(state => state.todos)

	if (!todos.length) {
		return <h1 className={styles.error}>Нет заметок!</h1>
	}

	return (
		<ul className={styles.list}>
			{todos.map(todo => (
				<TodoItem key={todo.id} todo={todo} />
			))}
		</ul>
	)
}

export default TodosList
