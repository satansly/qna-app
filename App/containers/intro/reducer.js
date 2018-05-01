import {
  RESET_ALL,
  QUESTIONS_INITIAL,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAIL
} from './actions'
export const initialState = {
  questions: [],
  loading: false
}
export default function reducer (state, action) {
  switch (action.type) {
    case GET_QUESTIONS: /* Set state for async call */
      return { ...state, loading: true }
    case GET_QUESTIONS_SUCCESS: { /* Set state for success */
      let questions = action.result.results.map((item, index) => { return {...item, key: `${index}`} })

      return { ...state, loading: false, questions }
    }
    case GET_QUESTIONS_FAIL: /* Set state for error. */
      return {
        ...state,
        loading: false,
        error: 'Error while fetching questions'
      }
    case QUESTIONS_INITIAL: /* Reset state */
      return {...state, ...initialState}
    case RESET_ALL:
      return initialState
    default: { /* Initialize only if state is not yet defined */
      return state === undefined ? initialState : state
    }
  }
}
