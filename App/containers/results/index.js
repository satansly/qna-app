import React, { Component } from 'react'
import { strings } from '../../i18n/i18n'
import Results from '../../components/results'
// TODO: Separate handling of iOS and Android with index.ios.js and index.android.js

class ResultsView extends Component {
  static navigationOptions = ({ navigation }) => {
    const { params: {correct, total, questions, answers} } = navigation.state
    return {
      title: strings('results.title', {correct, total}),
      headerLeft: null
    }
  }
  handleBegin = () => {
    this.props.navigation.popToTop('intro')
  }
  render () {
    const { params: {correct, total, questions, answers} } = this.props.navigation.state
    return (<Results title={strings('results.title', {correct, total})} action={strings('results.action')} questions={questions} answers={answers} onAction={this.handleBegin} />)
  }
}
export default ResultsView
