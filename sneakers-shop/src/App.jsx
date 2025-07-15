import Header from './components/Header/Header'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Main from './components/Main/Main'
import Cart from './components/Cart/Cart'
import Footer from './components/Footer/Footer'

function App() {
	return (
		<div className="wrapper">
			<Header />
			<main>
				<Routes>
					<Route path='/' element={<Main />} />
					<Route path='/cart' element={<Cart />} />
				</Routes>
			</main>
			<Footer />
		</div>
	)
}

export default App
