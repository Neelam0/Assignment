import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const Send = () => {
  return (
    <View style = {styles.body}>
      <Text style = {styles.txt}>This is Send page</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  body:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txt:{
    fontSize: 30,
    fontWeight: 'bold',
  },
})

export default Send