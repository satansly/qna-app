import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import {View, Text, TouchableOpacity} from 'react-native'
import he from 'he'
const Question = ({title, questions, current, onAction}) => {
  let question = questions[current]
  // TODO: Use lodash for faster array ops
  let options = question.incorrect_answers.concat([question.correct_answer]).sort().map(item => {
    return <TouchableOpacity key={item} onPress={() => onAction(question, item)}><Text style={styles.button}>{item}</Text></TouchableOpacity>
  })
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View><Text style={[styles.body, {borderWidth: 1, borderColor: '#000'}]}>{he.decode(question.question)}</Text><Text style={styles.body}>{`${current + 1} of ${questions.length}`}</Text></View>
      <View>{options}</View>
    </View>
  )
}
Question.propTypes = {
  onAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  current: PropTypes.number.isRequired
}
export default Question
