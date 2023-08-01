import React, { useLayoutEffect, useState, useEffect } from "react";

import { StyleSheet, Text, View } from 'react-native'

const Error = () => {
    return (
        <View>
            <Text>Error</Text>
        </View>
    )
}

export default Error

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:"center",
        justifyContent:"center"
    }
})
