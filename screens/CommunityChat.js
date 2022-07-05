import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CommunityChat = () => {
    return (
        <View style={styles.container}>
            <Text>CommunityChat</Text>
        </View>
    )
}

export default CommunityChat

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});