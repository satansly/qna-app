import {
  RESET_ALL,
  ANSWERS_INITIAL,
  ANSWER_QUESTION
} from './actions'

export const initialState = {
  current: 0,
  answers: []
}
export default function reducer (state, action) {
  switch (action.type) {
    case ANSWERS_INITIAL: /* Initialize answers array */
      return {...state, current: 0, answers: Array(action.count)}
    case ANSWER_QUESTION: { /* Update answer array and navigate to results or next question based on currently answered questions */
      const {answers, current} = state
      let answersUpdate = answers.slice()
      answersUpdate[current] = action.answered
      if (action.answered) {
        answers[current] = action.answered
        return {...state, answers: answersUpdate, current: current + 1}
      } else {
        return {...state, current: current + 1}
      }
    }
    case RESET_ALL: /* Reset state */
      return initialState
    default: { /* Initialize only if state is not yet defined */
      return state === undefined ? initialState : state
    }
  }
}
