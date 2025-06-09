import { createStore, combineReducers, applyMiddleware } from 'redux'
import counterReducer from '../reducers/counterReducer'
import customerReducer from '../reducers/customerReducer'
import { thunk } from 'redux-thunk'

const rootReducer = combineReducers({
	counter: counterReducer,
	customers: customerReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))

export default store
