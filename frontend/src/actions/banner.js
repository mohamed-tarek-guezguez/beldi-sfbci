import axios from 'axios'
import { GET_BANNER_REQUEST, GET_BANNER_SUCCESS, GET_BANNER_FAIL } from '../constants/banner'

export const BannerAction = () => async (dispatch) => {
	try {
		dispatch({ type: GET_BANNER_REQUEST })

		const { data } = await axios.get('/api/banner')

		dispatch({
			type: GET_BANNER_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: GET_BANNER_FAIL,
			payload:
				error.response && error.response.data.detail ? error.response.data.detail : error.message,
		})
	}
}
