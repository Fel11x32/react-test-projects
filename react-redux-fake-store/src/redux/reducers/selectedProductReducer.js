import { actionTypes } from '../constants/action-types'

const initialProductDetail = {}

export const selectedProductReducer = (
	state = initialProductDetail,
	action
) => {
	switch (action.type) {
		case actionTypes.SELECTED_PRODUCT:
			return { ...state, ...action.payload }
		case actionTypes.REMOVE_SELECTED_PRODUCT:
			return {}
		default:
			return state
	}
}
