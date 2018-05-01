
export const ANSWERS_INITIAL = 'ANSWERS_INITIAL'

export const RESET_ALL = 'RESET_ALL'

export const ANSWER_QUESTION = 'ANSWER_QUESTION'

export function initialize (count) {
  return function (dispatch) {
    dispatch(setInitial(count))
  }
}

export function answerQuestion (current, answered) {
  return {
    type: ANSWER_QUESTION,
    current,
    answered
  }
}

export function setInitial (count) {
  return {
    type: ANSWERS_INITIAL,
    count
  }
}

export function reset () {
  return {
    type: RESET_ALL
  }
}
