import { AntDesign, FontAwesome, MaterialIcons } from '@expo/vector-icons'
import React from 'react'
import { StyleSheet, Text, View,Dimensions,Pressable } from 'react-native'

const {width,height}=Dimensions.get("window")
const AccountItem = ({navegar,label,icon,rota}) => {



    return (
        <Pressable style={styles.container} onPress={()=>navegar(rota)}> 
            <View style={styles.subContainer}>
            <AntDesign name={icon} size={20} color="orange"/>
            <Text style={styles.text}>{label}</Text>
            </View>
         
            <MaterialIcons name="keyboard-arrow-right" size={20}/>
        </Pressable>
    )
}

export default AccountItem

const styles = StyleSheet.create({
    container:{
        flexDirection:"row",
        width:width-20,
        justifyContent:"space-between",
        borderColor:"grey",
        borderWidth:0.5,
        borderRadius:8,
        alignItems:"center",
        padding:8
    },
    subContainer:{
        flexDirection:"row",
        alignItems:"center",
    
    },text:{
        fontSize:18,
        fontFamily:"Montserrat-Regular",
        marginLeft:10
    }
})
