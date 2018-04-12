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
    case GET_QUESTIONS:
      return { ...state, loading: true }
    case GET_QUESTIONS_SUCCESS: {
      let questions = action.result.results
      return { ...state, screen: QUESTIONS_SCREEN, loading: false, questions, answers: Array(questions.length), title: questions[0].category, current: 0 }
    }
    case GET_QUESTIONS_FAIL:
      return {
        ...state,
        loading: false,
        screen: INTRO_SCREEN,
        error: 'Error while fetching questions'
      }
    case INITIAL:
      return {...state, ...initialState}
    case ANSWER_QUESTION: {
      const {answers, questions, current} = state
      let screen = QUESTIONS_SCREEN
      let answersUpdate = answers.slice()
      answersUpdate[current] = action.answered
      if (current < questions.length - 1) {
        screen = {screen: QUESTIONS_SCREEN}
      } else {
        let correct = 0
        for (var i in answersUpdate) {
          if (answersUpdate[i]) {
            correct++
          }
        }
        screen = {screen: RESULTS_SCREEN, title: strings('results.title', {correct, total: state.questions.length}), action: strings('results.action')}
      }
      if (action.answered) {
        answers[current] = action.answered
        return {...state, ...screen, answers: answersUpdate, current: current + 1}
      } else {
        return {...state, ...screen, current: current + 1}
      }
    }
    default:
      return initialState
  }
}
