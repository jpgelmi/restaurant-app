import React, {useState} from 'react'
import { StyleSheet, Text, View, SafeAreaView } from 'react-native'
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"

export default function HomeScreen() {
    const[term, setTerm] = useState("")
    const[results, setResults] = useState([])

    const SearchApi = async() => {
        const response = await yelp.get("/search", {
            params:{
                limit: 50,
                term,
                location: "Santiago"
            }
        })
        setResults(response.data.businesses)
    }

    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <SearchBar
                term = {term}
                onTermChange = {newTerm => setTerm(newTerm)}
                onTermSubmit = {SearchApi}
                />
                <Text>Tenemos {results.length}...</Text>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
    }
})
 