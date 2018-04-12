import { createStore, combineReducers, applyMiddleware } from 'redux'

import questionsReducer from '../containers/main/reducer'
import thunk from 'redux-thunk'

const reducers = combineReducers({
  questionsReducer
})
const store = createStore(reducers, applyMiddleware(thunk))
export default store
