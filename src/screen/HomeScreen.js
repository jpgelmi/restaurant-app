import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SearchBar from "../components/SearchBar"

export default function HomeScreen() {
    const[term, setTerm] = useState("")

    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <SearchBar
                term = {term}
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = {() => console.log("El termino fue enviado")}
                />
                <Text>{term}</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
    }
})
 