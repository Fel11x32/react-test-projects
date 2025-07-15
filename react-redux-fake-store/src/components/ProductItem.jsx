// src/components/ProductItem.jsx
import { Link } from 'react-router-dom'
import '../styles/ProductItem.scss'

const ProductItem = ({ product }) => {
	const { id, title, category } = product

	return (
		<Link to={`/product/${id}`} className='product-link'>
			<div className='product-card'>
				<h3>{title}</h3>
				<p>{category}</p>
			</div>
		</Link>
	)
}

export default ProductItem
