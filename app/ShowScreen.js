import { StyleSheet, Text, View , ActivityIndicator } from 'react-native'
import React from 'react'
import { Button } from 'react-native'
import { useContext, useState, useEffect } from 'react'
import Navbar from '../components/utils/Navbar'
import { ThemeContext } from '../components/context/context'

const ShowScreen = ({ navigation }) => {

    // const [loading ,  setLoading] = useState(false)
    const { theme, setTheme, greet , loading , setLoading } = useContext(ThemeContext)


//gunna diana prince

    return (

      loading ? 
      
      <View style={styles.loadingScreen}>
            <ActivityIndicator size={70} color={'red'}/>
            <Text style={{color:'#fff'}}>Changing Theme</Text>
      </View>

  :
        <View style={theme ? styles.container : styles.darkScreen}>
            <Navbar/>
            <Text style={theme ? [styles.darkText, styles.largeText] : [styles.lightText, styles.largeText]}>{greet}</Text>
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        // alignItems: 'center',
        // justifyContent: 'center',
    },
    loadingScreen:{
        flex: 1,
        backgroundColor: '#000',
        alignItems: 'center',
        justifyContent: 'center',
    },
    darkScreen: {
        backgroundColor: '#000',
        flex: 1,
        // alignItems: 'center',
        // justifyContent: 'center',

    },
    lightText: {
        color: '#fff',

    },
    darkText: {
        color: '#000'
    },
    largeText: {
        fontSize: 20
    }

});
