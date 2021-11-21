import { createStore, combineReducers, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'

import { productListReducer, productDetailsReducer } from './reducers/product'
import { createContactReducer } from './reducers/contact'
import { getBannerReducer } from './reducers/banner'

const reducer = combineReducers({
	productList: productListReducer,
	productDetails: productDetailsReducer,
	createContact: createContactReducer,
	getBanner: getBannerReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
	reducer,
	initialState,
	composeWithDevTools(applyMiddleware(...middleware))
)

export default store
