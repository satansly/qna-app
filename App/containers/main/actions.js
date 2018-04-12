// Maintains the current state of screen shown
export const INITIAL = 'INITIAL'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export const GET_QUESTIONS = 'GET_QUESTIONS'
export const GET_QUESTIONS_SUCCESS = 'GET_QUESTIONS_SUCCESS'
export const GET_QUESTIONS_FAIL = 'GET_QUESTIONS_FAIL'

export function listQuestions (amount, difficulty, type) {
  return {
    type: GET_QUESTIONS,
    payload: {
      request: {
        url: `/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
      }
    }
  }
}
export function answerQuestion (current, answered, answerIndex) {
  return {
    type: ANSWER_QUESTION,
    answered,
    answerIndex
  }
}
