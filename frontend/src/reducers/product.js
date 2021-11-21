import {
	PRODUCT_LIST_REQUEST,
	PRODUCT_LIST_SUCCESS,
	PRODUCT_LIST_FAIL,
	PRODUCT_DETAILS_REQUEST,
	PRODUCT_DETAILS_SUCCESS,
	PRODUCT_DETAILS_FAIL,
	PRODUCT_DETAILS_RESET,
} from '../constants/product'

export const productListReducer = (state = { products: [] }, action) => {
	switch (action.type) {
		case PRODUCT_LIST_REQUEST:
			return { loading: true, products: [] }

		case PRODUCT_LIST_SUCCESS:
			return {
				loading: false,
				products: action.payload.products,

				num_pages: action.payload.num_pages,
				has_previous: action.payload.has_previous,
				has_next: action.payload.has_next,
				page_rangeStart: action.payload.page_rangeStart,
				page_rangeEnd: action.payload.page_rangeEnd,
				page: action.payload.page,
			}

		case PRODUCT_LIST_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}

export const productDetailsReducer = (state = { product: { reviews: [] } }, action) => {
	switch (action.type) {
		case PRODUCT_DETAILS_REQUEST:
			return { loading: true, ...state }

		case PRODUCT_DETAILS_SUCCESS:
			return { loading: false, product: action.payload }

		case PRODUCT_DETAILS_FAIL:
			return { loading: false, error: action.payload }

		case PRODUCT_DETAILS_RESET:
			return {}

		default:
			return state
	}
}
