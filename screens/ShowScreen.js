import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Button } from 'react-native'

const ShowScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            <Text>ShowScreen</Text>
            <Button title='go to home' onPress={()=> navigation.navigate('Home')} />
        </View>
    )
}

export default ShowScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});