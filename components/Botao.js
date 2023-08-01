import React from 'react'
import { StyleSheet, Text, View ,TouchableOpacity} from 'react-native'

const Botao = ({text,onPress,...params}) => {
    return (
        <TouchableOpacity style={styles.container} onPress={onPress}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
}

export default Botao

const styles = StyleSheet.create({
    container:{
        width:315,
        height:48,
        justifyContent:"center",
        alignItems:"center",
        alignContent:"center",
        borderRadius:6,
        backgroundColor:"#FF9F1C"
    },
    text:{
        fontSize:16,
        color:"#fff",
        textAlign:"center"
    }
})
