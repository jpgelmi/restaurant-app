import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ResultDetails({result}) {
    return (
        <View style = {styles.container}>
            <Image
                source = {{uri: result.image_url}}
                style = {styles.imageStyle}/>
            <Text style = {styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Calificación, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        margin: 10
    },
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 12,
        shadowColor: "black",
        //shadowOffset: 5
    },
    nameStyle:{
        fontWeight: "bold",
        fontSize: 15
    }
})
