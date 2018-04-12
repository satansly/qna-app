import {
  INITIAL,
  GET_QUESTIONS,
  GET_QUESTIONS_SUCCESS,
  GET_QUESTIONS_FAIL,
  ANSWER_QUESTION
} from './actions'

import { strings } from '../../i18n/i18n'

export const INTRO_SCREEN = 'intro'
export const QUESTIONS_SCREEN = 'questions'
export const RESULTS_SCREEN = 'resulst'

export const initialState = {
  screen: INTRO_SCREEN,
  title: strings('intro.title'),
  body: strings('intro.body', {amount: 10}),
  action: strings('intro.action'),
  current: 0,
  questions: [],
  answers: []
}

export default function reducer (state, action) {
  switch (action.type) {
    case INITIAL:
      return {...state, ...initialState}
    case ANSWER_QUESTION: {
      const {answers, questions, current} = state
      let screen = QUESTIONS_SCREEN
      if (action.answerIndex < questions.length - 1) {
        screen = {screen: QUESTIONS_SCREEN}
      } else {
        screen = {screen: RESULTS_SCREEN, title: strings('results.title', {correct: state.answers.length, total: state.questions.length}), action: strings('results.action')}
      }
      if (action.answered) {
        return {...state, ...screen, answers: answers.concat([action.answered]), current: current + 1}
      } else {
        return {...state, ...screen, current: current + 1}
      }
    }
    case GET_QUESTIONS:
      return { ...state, loading: true }
    case GET_QUESTIONS_SUCCESS:
      let questions = action.payload.data.results
      return { ...state, screen: QUESTIONS_SCREEN, loading: false, questions, answers: Array(questions.length), title: questions[0].category, current: 0 }
    case GET_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        error: 'Error while fetching questions'
      }
    default:
      return initialState
  }
}
