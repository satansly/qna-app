
import React from 'react'
import PropTypes from 'prop-types'
import styles from './styles'
import {View, Text, TouchableOpacity} from 'react-native'

const Intro = ({title, body, action, onAction}) => (
  <View style={styles.container}>
    <Text style={styles.title}>{title}</Text>
    <Text style={styles.body}>{body}</Text>
    <TouchableOpacity onPress={onAction}>
      <Text style={styles.button}>{action}</Text>
    </TouchableOpacity>
  </View>
)
Intro.propTypes = {
  onAction: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  body: PropTypes.string.isRequired,
  action: PropTypes.string.isRequired
}
export default Intro
