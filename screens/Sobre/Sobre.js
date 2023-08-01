import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Sobre = () => {
    return (
        <View style={styles.container}> 
            <Text>Sobre</Text>
        </View>
    )
}

export default Sobre

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})
