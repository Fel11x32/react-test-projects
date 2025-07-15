// src/components/ProductList.jsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { actionTypes } from '../redux/constants/action-types.js'
import ProductItem from './ProductItem'
import '../styles/ProductList.scss'

const mockProducts = [
	{ id: 1, title: 'Maman', category: 'Love' },
	{ id: 2, title: 'Galaxy Shoes', category: 'Fashion' },
	{ id: 3, title: 'Book of Shadows', category: 'Mystery' },
]

const ProductList = () => {
	const dispatch = useDispatch()
	const products = useSelector(state => state.products.products)

	useEffect(() => {
		dispatch({
			type: actionTypes.SET_PRODUCTS,
			payload: mockProducts,
		})
	}, [dispatch])

	return (
		<div className='product-list container'>
			{products.map(product => (
				<ProductItem key={product.id} product={product} />
			))}
		</div>
	)
}

export default ProductList
