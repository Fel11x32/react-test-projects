import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { addTodo } from './todoSlice'
import styles from './AddTodo.module.scss'

const AddTodo = () => {
	const [text, setText] = useState('')
	const dispatch = useDispatch()

	const handleSubmit = e => {
		e.preventDefault()
		if (text.trim()) {
			dispatch(
				addTodo({ id: Date.now(), text: text, completed: false })
			)
			setText('')
		}
	}

	return (
		<form onSubmit={handleSubmit} className={styles.form}>
			<input
				className={styles.input}
				value={text}
				onChange={e => setText(e.target.value)}
				type='text'
				placeholder='Введите задачу'
			/>
			<button className={styles.button} type='submit'>
				добавить
			</button>
		</form>
	)
}

export default AddTodo
