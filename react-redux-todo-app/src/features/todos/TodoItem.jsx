import React from 'react'
import {useDispatch} from 'react-redux'
import { toggleTodo, removeTodo } from './todoSlice'
import styles from './TodoItem.module.scss'

const TodoItem = ({todo}) => {
	const dispatch = useDispatch();

	return (
		<li className={styles.item}>
			<span
				className={`${styles.text} ${todo.completed ? styles.completed : ''}`}
				onClick={() => dispatch(toggleTodo(todo.id))}
			>
				{todo.text}
			</span>
			<button
				className={styles.button}
				onClick={() => dispatch(removeTodo(todo.id))}
			>
				Удалить
			</button>
		</li>
	)
}

export default TodoItem