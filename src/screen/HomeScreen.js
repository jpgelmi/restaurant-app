import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View, SafeAreaView, ScrollView} from 'react-native'
import SearchBar from "../components/SearchBar"
import useResults from "../hooks/useResults"
import ResultList from "../components/ResultList"

export default function HomeScreen(props) {
    const{navigation} = props
    const[term, setTerm] = useState("")
    const[searchApi, results, errorMsj] = useResults()

    const filterResults = (price) => {
        return results.filter(results => {
            return results.price === price;
        })
    }

    if(!results.length){
        return null
    }

    return (
        <SafeAreaView >
            <View style = {styles.container}>
                <SearchBar
                    term = {term}
                    onTermChange = {newTerm => setTerm(newTerm)}
                    onTermSubmit = {() => searchApi(term)}
                />
                <Text style = {{paddingBottom: 10}}>Tenemos {results.length} resultados...</Text>
                {errorMsj ? <Text>{errorMsj}</Text> : null}
                <ScrollView>
                    <ResultList
                        title = "$"
                        results = {filterResults("$")}
                        navigation = {navigation}/>
                    <ResultList
                        title = "$$"
                        results = {filterResults("$$")}
                        navigation = {navigation}/>
                    <ResultList
                        title = "$$$"
                        results = {filterResults("$$$")}
                        navigation = {navigation}/>
                </ScrollView>   
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container:{
        marginHorizontal: 10,
        //flex: 1
    }
})