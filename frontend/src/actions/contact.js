import axios from 'axios'
import {
	CONTACT_CREATE_REQUEST,
	CONTACT_CREATE_SUCCESS,
	CONTACT_CREATE_FAIL,
} from '../constants/contact'

export const contactCreate = (item) => async (dispatch) => {
	try {
		dispatch({
			type: CONTACT_CREATE_REQUEST,
		})

		const config = {
			headers: {
				'Content-Type': 'application/json',
				'X-CSRFToken': '{{csrf_token}}',
			},
		}

		const { data } = await axios.post(`/api/contact/`, item, config)

		dispatch({
			type: CONTACT_CREATE_SUCCESS,
			payload: data,
		})
	} catch (error) {
		dispatch({
			type: CONTACT_CREATE_FAIL,
			payload: error.response && error.response.data ? error.response.data : error.message,
		})
	}
}
