import { GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_BANNER_FAIL } from '../constants/banner'

export const getBannerReducer = (state = { banner: {} }, action) => {
	switch (action.type) {
		case GET_BANNER_REQUEST:
			return { loading: true, ...state }

		case GET_BANNER_SUCCESS:
			return { loading: false, banner: action.payload }

		case GET_BANNER_FAIL:
			return { loading: false, error: action.payload }

		default:
			return state
	}
}
