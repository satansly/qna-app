import { createStore, combineReducers, applyMiddleware } from 'redux'

import questionsReducer from '../containers/intro/reducer'
import answersReducer from '../containers/questions/reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
const reducers = combineReducers({
  questionsReducer,
  answersReducer
})
const store = createStore(reducers, applyMiddleware(thunk, logger))
export default store
