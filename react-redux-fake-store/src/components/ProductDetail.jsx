// src/components/ProductDetail.jsx
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useParams, useNavigate } from 'react-router-dom'
import { actionTypes } from '../redux/constants/action-types'
import '../styles/ProductDetail.scss'

const ProductDetail = () => {
	const { productId } = useParams()
	const dispatch = useDispatch()
	const navigate = useNavigate()
	const product = useSelector(state => state.selectedProduct)

	const products = useSelector(state => state.products.products)

	useEffect(() => {
		if (productId && products.length > 0) {
			const found = products.find(p => p.id === parseInt(productId))
			if (found) {
				dispatch({ type: actionTypes.SELECTED_PRODUCT, payload: found })
			}
		}

		return () => {
			dispatch({ type: actionTypes.REMOVE_SELECTED_PRODUCT })
		}
	}, [productId, dispatch, products])

	if (!product || !product.id) return <div className='loading'>Загрузка...</div>

	return (
		<div className='product-detail container'>
			<div className='card'>
				<h2>{product.title}</h2>
				<p>Категория: {product.category}</p>
				<button onClick={() => navigate(-1)}>← Назад</button>
			</div>
		</div>
	)
}

export default ProductDetail
