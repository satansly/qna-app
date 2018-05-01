import React, { Component } from 'react'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { strings } from '../../i18n/i18n'
import { initialize, answerQuestion, reset } from './actions'
import Question from '../../components/question'
import Config from '../../../env.json'
// TODO: Separate handling of iOS and Android with index.ios.js and index.android.js

class QuestionsView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params: {questions , current}} = navigation.state
    let title = (questions.length === Config.QUESTIONS_COUNT && current < Config.QUESTIONS_COUNT) ? questions[current].category : ''
    return {
      title,
      headerLeft: null
    }
  }
  handleAnswer = (question, item) => {
    const {current} = this.props
    this.props.answerQuestion(current, (question.correct_answer === item))
  }
  componentDidMount () {
    const { params: {questions}} = this.props.navigation.state
    this.props.initialize(questions.length)
  }
  componentDidUpdate (prevProps, prevState) {

    if (this.props.current != prevProps.current) {
      this.props.navigation.setParams({current: this.props.current})
      if (this.props.current === Config.QUESTIONS_COUNT - 1) {
        const {questions, answers} = this.props
        let correct = 0
        let total = questions.length
        for (i in answers) {
          if(answers[i]) {
            correct++
          }
        }
        this.props.navigation.navigate('Results', {correct, total, questions, answers})
      }
    }
  }
  componentWillUnmount () {
    this.props.reset()
  }
  render () {
    const {
      questions,
      answers,
      current
     } = this.props
     console.log(this.props)
     if (current < Config.QUESTIONS_COUNT) {
       let question = questions[current]
       console.log(question)
       return (<Question title={question.category} questions={questions} current={current} onAction={this.handleAnswer} />)
     } else {
       return (null)
     }

  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsReducer.questions,
    answers: state.answersReducer.answers,
    current: state.answersReducer.current
  }
}

const mapDispatchToProps =  {
  answerQuestion,
  initialize,
  reset
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsView)
