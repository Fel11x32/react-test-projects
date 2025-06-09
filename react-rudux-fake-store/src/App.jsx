import Header from './components/Header'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import ProductList from './components/ProductList'
import ProductDetail from './components/ProductDetail'

function App() {
	return (
		<div>
			<Router>
				<Header />
				<Routes>
					<Route path='/' element={<ProductList />} />
					<Route path='/product/:productId' element={<ProductDetail />} />
					<Route path='*' element={<div>404 Not Found!!</div>} />
				</Routes>
			</Router>
		</div>
	)
}

export default App
