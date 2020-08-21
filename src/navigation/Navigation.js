import React from "react"

import HomeScreen from "../screen/HomeScreen"

import {createStackNavigator} from "@react-navigation/stack"
const Stack = createStackNavigator()

export default function Navigation(){
    return(
        <Stack.Navigator>
            <Stack.Screen
                name = "home"
                component = {HomeScreen}
                options = {
                    {title: "Practice App",
                    headerStyle: {
                        backgroundColor: "#fff"},
                    headerTintColor: "#fff",
                    headerTransparent: false}   
                }/>
        </Stack.Navigator>
    )
}