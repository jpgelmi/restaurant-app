import React from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import {Icon} from "react-native-elements"

export default function SearchBar(props) {
    const{term, onTermChange, onTermSubmit} = props
    return (
        <View style = {styles.background}>
            <Icon
                name = "search"
                size = {30}
                marginHorizontal = {5}
            />
            <TextInput
                placeholder = "Buscar..."
                style = {styles.inputStyle}
                value = {term}
                autoCapitalize = "none"
                autoCorrect = {false}
                onEndEditing = {() => onTermSubmit()}
                onChangeText = {newTerm => onTermChange(newTerm)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    background:{
        backgroundColor: "#D3D3D3",
        height: 50,
        borderRadius: 10,
        marginHorizontal: 15,
        marginVertical: 10,
        flexDirection : "row",
        alignItems: "center",
    },
    inputStyle:{
        flex: 1
    },
})
