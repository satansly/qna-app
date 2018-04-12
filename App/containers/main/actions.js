
import QnAAPI from '../../services'

export const INITIAL = 'INITIAL'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL'

export function listQuestions (amount, difficulty, type) {
  return function (dispatch) {
    dispatch(getQuestions())
    return QnAAPI.getQuestions(amount, difficulty, type).then(result => {
      console.log(result)
      dispatch(getQuestionsSuccess(result))
    }).catch(error => {
      console.log(error)
      dispatch(getQuestionsFail(error))
    })
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
export function answerQuestion (current, answered) {
  return {
    type: ANSWER_QUESTION,
    current,
    answered
  }
}
