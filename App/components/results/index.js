import React, {PureComponent} from 'react'
import {View, Text} from 'react-native'
export default class Results extends PureComponent {
  render () {
    let {questions, answers} = this.props
    return (
      <View>
        <Text>Results</Text>
      </View>
    )
  }
}
