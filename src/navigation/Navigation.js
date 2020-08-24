import React from "react"

import HomeScreen from "../screen/HomeScreen"
import DetailsScreen from "../screen/DetailsScreen"

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "home"
                component = {HomeScreen}
                options = {
                    {title: "Home",
                    headerStyle: {
                        backgroundColor: "transparent"},
                    headerTintColor: "transparent",
                    headerTransparent: true}   
                }/>
            <Stack.Screen
                name = "details"
                component = {DetailsScreen}
                options = {
                    {title: "",
                    headerStyle: {
                        backgroundColor: "#fff"},
                    headerTintColor: "",
                    headerTransparent: false}   
                }/>
        </Stack.Navigator>
    )
}