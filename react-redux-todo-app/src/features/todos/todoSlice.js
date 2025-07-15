import {createSlice} from '@reduxjs/toolkit'

const initialState = [
	{ id: 1, text: 'Сходить в магазин', completed: false },
	{ id: 2, text: 'Выучить Redux Toolkit', completed: true },
]

export const todoSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, action) => {
			state.push(action.payload)
		},
		toggleTodo: (state, action) => {
			const todo = state.find(t => t.id === action.payload)

			if (todo) {
				todo.completed = !todo.completed
			}
		},
		removeTodo: (state, action) => {
			return state.filter(t => t.id !== action.payload)
		},
	},
})


export const {addTodo, toggleTodo, removeTodo} = todoSlice.actions;
export default todoSlice.reducer;