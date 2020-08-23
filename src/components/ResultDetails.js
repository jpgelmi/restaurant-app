import React from 'react'
import { StyleSheet, Text, View, Image } from 'react-native'

export default function ResultDetails({result}) {
    return (
        <View>
            <Image
                source = {{uri: result.image_url}}
                style = {styles.imageStyle}/>
            <Text style = {styles.nameStyle}>{result.name}</Text>
            <Text>{result.rating} Calificación, {result.review_count} Reviews</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    imageStyle:{
        width: 250,
        height: 120,
        borderRadius: 12,
    },
    nameStyle:{
        fontWeight: "bold",
        fontSize: 15
    }
})
