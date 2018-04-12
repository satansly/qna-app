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
class MainView extends Component {

  handleBegin = () => {
    this.props.listQuestions(10, 'hard', 'boolean')
  }
  handleAnswer = (question, item) => {
    const {current} = this.props
    this.props.answerQuestion(current, (question.correct_answer === item), current)
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
       
     } else {
       if(screen === INTRO_SCREEN) {
         content = <Text style={styles.body}>{body}</Text>
         footer = <TouchableOpacity onPress={this.handleBegin}>
           <Text style={styles.button}>{action}</Text>
         </TouchableOpacity>
       } else if (screen === QUESTIONS_SCREEN) {
         let question = this.props.questions[current]
         let options = question.incorrect_answers.concat([question.correct_answer]).map(item => {
           return <TouchableOpacity key={item} onPress={() => this.handleAnswer(question, item)}><Text style={styles.button}>{item}</Text></TouchableOpacity>
         })
         console.log(options)
         content = <View><Text style={[styles.body, {borderWidth: 1, borderColor: '#000'}]}>{question.question}</Text><Text style={styles.body}>{`${current + 1} of ${questions.length}`}</Text></View>
         footer = <View>{options}</View>
       } else {
         content = <FlatList
          data={this.props.questions}
          renderItem={ ({item, index}) => {
            let answer  = this.props.answers[index] ? '+' : '-'
            return <Text style={styles.button}>{`${answer} ${item.question}`}</Text>
          }} />
         footer = <TouchableOpacity onPress={this.handleBegin}>
           <Text style={styles.button}>{action}</Text>
         </TouchableOpacity>
       }
     }
     return (
      <View style={styles.container}>
        <Text style={styles.title}>{title}</Text>
        {content}
        {footer}
      </View>
    )
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
