import { createStore, combineReducers, applyMiddleware } from 'redux'

import questionsReducer from '../containers/main/reducer'
import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

const client = axios.create({
  baseURL: 'https://opentdb.com/',
  responseType: 'json'
})

const reducers = combineReducers({
  questionsReducer
})
const store = createStore(reducers, applyMiddleware(axiosMiddleware(client)))
export default store
