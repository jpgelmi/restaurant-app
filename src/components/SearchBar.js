import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function SearchBar() {
    return (
        <View style = {styles.background}>
            <Text>SearchBar</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#F0EEEE",
        height: 50,
        borderRadius: 12,
        marginHorizontal: 15
    }
})
