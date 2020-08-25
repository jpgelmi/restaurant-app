import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View } from 'react-native'
import yelp from "../api/yelp"

export default function DetailsScreen(props) {
    const[result, setResult] = useState(null)

    useEffect(() => {
        getResult(id)
    }, [])

    const{navigation, route} = props
    const{params} = route
    const{id}= params

    //console.log(route)
    //console.log(params)
    //console.log(id)

    const getResult = async() =>{
        await yelp.get(`${id}`)
        setResult(response.data);
    };

    return (
        <View>
            <Text></Text>
        </View>
    )
}

const styles = StyleSheet.create({})
