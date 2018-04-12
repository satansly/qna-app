import React, {PureComponent} from 'react'
import {View, Text, TouchableOpacity} from 'react-native'
export default class Question extends PureComponent {
  handleAction = () => {

  }
  render () {
    let question = this.props.question.question
    let options = this.props.question.incorrect_answers.concat([this.props.question.correct_answer]).map(item => {
      return <TouchableOpacity onPress={this.handleAction}>item</TouchableOpacity>
    })
    return (
      <View>
      <Text>{question}</Text>
      {options}
      </View>
    )
  }
}
