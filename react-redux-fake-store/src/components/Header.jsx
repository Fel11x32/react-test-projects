// src/components/Header.jsx
import { Link } from 'react-router-dom'
import '../styles/Header.scss'

const Header = () => {
	return (
		<div className='header'>
			<div className='container'>
				<Link to='/'>
					<h2 className='logo'>Fake Shop</h2>
				</Link>
			</div>
		</div>
	)
}

export default Header
