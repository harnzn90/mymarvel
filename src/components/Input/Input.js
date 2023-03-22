import { View, Text, TextInput } from 'react-native'
import React from 'react'
import styles from "./Input.style"

const Input = ({placeholder,onChangeText}) => {
  return (
    <View style={styles.container}>
      <TextInput placeholder={placeholder} onChangeText={onChangeText} style={styles.text} />
    </View>
  )
}

export default Input