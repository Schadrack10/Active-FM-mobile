import { StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native'
import React from 'react'
import { ThemeContext } from '../context/context'
import { Button } from 'react-native'
import { useContext, useState } from 'react'
import { FontAwesome } from '@expo/vector-icons';
import { useEffect } from 'react'


const Navbar = () => {

  const { theme, setTheme, greet, loading, setLoading ,showIcon , setShowIcon } = useContext(ThemeContext)


  const toggleIcon = ()=>{
    setLoading(true)
    
    setTimeout(() => {
      setShowIcon(!showIcon)
      setTheme(!theme)
      setLoading(false)
    }, 1000)
  }


  return (
    <View style={styles.container}>
      <Text style={styles.text}>{greet}</Text>
      <TouchableOpacity style={styles.toggleIcons} onPress={toggleIcon}>
      <View>
        {showIcon ? <FontAwesome name="toggle-on" size={30} color="black" /> : <FontAwesome name="toggle-off" size={30} color="black" />}
      </View>
      </TouchableOpacity>
    </View>
  )
}

export default Navbar

const styles = StyleSheet.create({
  container: {
    height: 100,
    borderColor: 'green',
    width: Dimensions.get('screen').width,
    backgroundColor: '#0000ff'
  },
  text: {
    color: '#fff'
  }
})

