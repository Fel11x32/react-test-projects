import React, { useEffect, useState } from 'react'
import axios from 'axios'
import banner from '../../assets/Banner.jpg'

const Main = () => {
	const [products, setProducts] = useState([])

	useEffect(() => {
		const fetchProducts = async () => {
			const response = await axios.get(
				'https://682d8b3e4fae1889475672e5.mockapi.io/api/products'
			)
			console.log(response)
			setProducts(response.data)
		}
		fetchProducts()
	}, [])

	return (
		<div>
			<div className='container'>
				<img src={banner} alt="" />
			</div>
		</div>
	)
}

export default Main
