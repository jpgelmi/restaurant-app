import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView} from 'react-native'
import SearchBar from "../components/SearchBar"
import yelp from "../api/yelp"
import useResults from "../hooks/useResults"
import ResultList from "../components/ResultList"

export default function HomeScreen() {
    const[term, setTerm] = useState("")
    const[searchApi, results, errorMsj] = useResults()

    const filterResults = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    }

    return (
        <SafeAreaView>
            <View style = {styles.container}>
                <SearchBar
                    term = {term}
                    onTermChange = {newTerm => setTerm(newTerm)}
                    onTermSubmit = {() => searchApi(term)}
                />
                <Text>Tenemos {results.length} resultados...</Text>
                {errorMsj ? <Text>{errorMsj}</Text> : null}
                <ResultList title = "$" results = {filterResults("$")}/>
                <ResultList title = "$$" results = {filterResults("$$")}/>
                <ResultList title = "$$$" results = {filterResults("$$$")}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
    }
})