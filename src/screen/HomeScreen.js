import React from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SearchBar from "../components/SearchBar"

export default function HomeScreen() {
    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <SearchBar/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
    }
})
