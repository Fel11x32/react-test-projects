import { actionTypes } from "../constants/action-types";

export const setProducts = (products) => ({
	type: actionTypes.SET_PRODUCTS,
	payload: products,
})

export const setSelectedProduct = product => ({
	type: actionTypes.SELECTED_PRODUCT,
	payload: product,
})
