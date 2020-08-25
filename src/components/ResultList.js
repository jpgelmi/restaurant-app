import React from 'react'
import {
    StyleSheet,
    Text,
    View,
    FlatList,
    TouchableOpacity}
from 'react-native'
import ResultDetails from "../components/ResultDetails"

export default function ResultList(props) {
    
    const {title, results, navigation} = props

    return (
        <View>
            <Text style = {styles.titleStyle}>{title}</Text>
            <FlatList
                    horizontal
                    data = {results}
                    keyExtractor = {(result) => result.id}
                    showsHorizontalScrollIndicator = {false}
                    renderItem = {({item}) => {
                        //console.log(item.id)
                        return(
                            <TouchableOpacity onPress = {() => navigation.navigate("details", {id : item.id}) }>
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