import Config from '../../env.json'

export default class QnAAPI {
  static getQuestions (amount, difficulty, type) {
    let url = `${Config.BASE_URL}/api.php?amount=${amount}&difficulty=${difficulty}&type=${type}`
    console.log(url)
    return fetch(url).then(response => {
      return response.json()
    }).catch(error => {
      return error
    })
  }
}
