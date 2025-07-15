import { createStore, combineReducers } from 'redux'
import { productReducer } from './reducers/productReducer'
import { selectedProductReducer } from './reducers/selectedProductReducer'

const rootReducer = combineReducers({
	products: productReducer,
	selectedProduct: selectedProductReducer,
})

const store = createStore(rootReducer)

export default store