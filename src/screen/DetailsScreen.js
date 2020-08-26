import React, {useState, useEffect} from 'react'
import { StyleSheet, Text, View , FlatList, Image} from 'react-native'
import yelp from "../api/yelp"

export default function DetailsScreen(props) {
    const[result, setResult] = useState(null)

    const{navigation, route} = props
    const{params} = route
    const{id}= params

    useEffect(() => {
        getResult(id)
    }, [])

    //console.log(route)
    //console.log(params)
    //console.log(id)
    console.log(result)

    const getResult = async() =>{
        const response = await yelp.get(`${id}`)
        setResult(response.data);
    };

    if(!result){
        return null
    }

    return (
        <View style = {styles.container}>
            <Text>Nuestros productos</Text>
            <Text style = {styles.textStyle}> {result.name}</Text>
            <FlatList
                data = {result.photos}
                showsVerticalScrollIndicator = {false}
                keyExtractor = {(item) => item}
                renderItem = {({item}) => {
                    return(
                        <Image style = {styles.imageStyle}
                            source = {{uri: item}}/>
                    )

                }}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        alignItems: "center"
    },
    imageStyle:{
        height: 200,
        width: 300,
        borderRadius: 15,
        marginVertical: 10,
        //marginBottom:10
    },
    textStyle:{
        marginTop:10,
        fontSize:25,
        fontWeight:"bold"
    }
})
