import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

export default function ResultDetails({result}) {
    return (
        <View>
            <Text>{result.name}</Text>
        </View>
    )
}

const styles = StyleSheet.create({})
