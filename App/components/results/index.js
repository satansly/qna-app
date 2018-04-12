import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import {View, Text, TouchableOpacity, FlatList} from 'react-native'
import he from 'he'
const Result = ({title, questions, answers, action, onAction}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <FlatList
      data={questions}
      renderItem={({item, index}) => {
        let answer = (answers[index]) ? '+' : '-'
        return <View style={styles.itemContainer}>
          <Text style={styles.item}>{answer}</Text>
          <Text style={styles.item} numberOfLines={2}>{`${he.decode(item.question)}`}</Text>
        </View>
      }} />
    <TouchableOpacity onPress={onAction}>
      <Text style={styles.button}>{action}</Text>
    </TouchableOpacity>
  </View>
)

Result.propTypes = {
  onAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  questions: PropTypes.array.isRequired,
  answers: PropTypes.array.isRequired,
  action: PropTypes.string.isRequired
}
export default Result
