
import QnAAPI from '../../services'

export const QUESTIONS_INITIAL = 'QUESTIONS_INITIAL'

export const RESET_ALL = 'RESET_ALL'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL'

export function listQuestions (amount, difficulty, type) {
  return function (dispatch) {
    dispatch(getQuestions())
    return QnAAPI.getQuestions(amount, difficulty, type).then(result => {
      dispatch(getQuestionsSuccess(result))
    }).catch(error => {
      dispatch(getQuestionsFail(error))
    })
  }
}

export function clear () {
  return function (dispatch) {
    dispatch(setInitial())
  }
}

export function getQuestions () {
  return {
    type: GET_QUESTIONS
  }
}
export function getQuestionsSuccess (result) {
  return {
    type: GET_QUESTIONS_SUCCESS,
    result
  }
}

export function getQuestionsFail (error) {
  return {
    type: GET_QUESTIONS_FAIL,
    error
  }
}

export function setInitial () {
  return {
    type: QUESTIONS_INITIAL
  }
}

export function reset () {
  return {
    type: RESET_ALL
  }
}
