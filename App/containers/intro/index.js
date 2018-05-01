import React, { Component } from 'react'
import { View, Alert } from 'react-native'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Spinner from 'react-native-loading-spinner-overlay'
import { strings } from '../../i18n/i18n'
import { listQuestions, answerQuestion } from './actions'
import Intro from '../../components/intro'
import Config from '../../../env.json'
// TODO: Separate handling of iOS and Android with index.ios.js and index.android.js

class IntroView extends Component {
  static navigationOptions = { title: strings('intro.title') }
  handleBegin = () => {
    this.props.listQuestions(Config.QUESTIONS_COUNT, 'hard', 'boolean')
  }
  componentDidUpdate (prevProps, prevState) {
    const {questions} = this.props
    if (questions &&
       questions.length === Config.QUESTIONS_COUNT) {
      this.props.navigation.navigate('Questions', {questions, current: 0})
    }
    if (prevProps.error !== undefined && this.props.error) {
      const {error} = this.props
      Alert.alert(
        strings('error'),
        error,
        [
          {text: strings('ok'), onPress: () => console.log('OK Pressed'), style: 'cancel'},
        ],
        { cancelable: false }
      )
    }
  }
  render () {
    const {
      questions,
      loading,
      error
     } = this.props
     let content
     let footer
     if (loading) {
       return (<View style={{ flex: 1 }}>
        <Spinner visible textContent={"Loading..."} textStyle={{color: '#FFF'}} />
      </View>
       )
     } else {
        return (<Intro title={ strings('intro.title') } body={ strings('intro.body', {amount: Config.QUESTIONS_COUNT}) } action={ strings('intro.action') } onAction={this.handleBegin} />)
     }
  }
}

const mapStateToProps = state => {
  return {
    questions: state.questionsReducer.questions,
    loading: state.questionsReducer.loading,
    error: state.questionsReducer.error
  }
}

const mapDispatchToProps =  {
  listQuestions
}

export default connect(mapStateToProps, mapDispatchToProps)(IntroView)
