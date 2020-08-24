import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity}
from 'react-native'
import ResultDetails from "../components/ResultDetails"

export default function ResultList({title, results, navigation}) {
    return (
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList
                    horizontal
                    data = {results}
                    keyExtractor = {(result) => result.id}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item}) => {
                        return(
                            <TouchableOpacity onPress = {() => navigation.navigate("details") }>
                                <ResultDetails result = {item}/>
                            </TouchableOpacity>
                        )
                    }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    titleStyle:{
     fontSize: 20,
     //fontWeight: "bold"   
    }
})