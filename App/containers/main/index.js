import React, { Component } from 'react'
import { View, TouchableOpacity, Text, FlatList } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import styles from './styles'
import { strings } from '../../i18n/i18n'
import { listQuestions, answerQuestion } from './actions'
import {INTRO_SCREEN, QUESTIONS_SCREEN, RESULTS_SCREEN} from './reducer'
import Question from '../../components/question'
import Results from '../../components/results'
import Intro from '../../components/intro'
import Config from '../../../env.json'
// TODO: Separate handling of iOS and Android with index.ios.js and index.android.js

class MainView extends Component {
  handleAnswer = (question, item) => {
    const {current} = this.props
    this.props.answerQuestion(current, (question.correct_answer === item))
  }
  handleBegin = () => {
    this.props.listQuestions(Config.QUESTIONS_COUNT, 'hard', 'boolean')
  }
  render () {
    const {
      title,
      body,
      action,
      questions,
      answers,
      loading,
      screen,
      current
     } = this.props
     let content
     let footer
     if (loading) {
       return (<View style={styles.container}><Text style={styles.loading}>Loading</Text></View>)
     } else {
       if(screen === INTRO_SCREEN) {
         return (<Intro title={title} body={body} action={action} onAction={this.handleBegin} />)
       } else if (screen === QUESTIONS_SCREEN) {
         return (<Question title={title} questions={questions} current={current} onAction={this.handleAnswer} />)
       } else {
         let correct = 0
         for (i in answers) {
           if(answers[i]) {
             correct++
           }
         }
         return (<Results title={title} action={action} questions={questions} answers={answers} onAction={this.handleBegin} />)
       }
     }
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsReducer.questions,
    answers: state.questionsReducer.answers,
    current: state.questionsReducer.current,
    title: state.questionsReducer.title,
    body: state.questionsReducer.body,
    action: state.questionsReducer.action,
    screen: state.questionsReducer.screen,
    loading: state.questionsReducer.loading
  }
}

const mapDispatchToProps =  {
  listQuestions,
  answerQuestion
}

export default connect(mapStateToProps, mapDispatchToProps)(MainView)
