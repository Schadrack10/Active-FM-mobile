import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const LiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>LiveScreen</Text>
    </View>
  )
}

export default LiveScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

