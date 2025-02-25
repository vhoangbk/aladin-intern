import { NativeStackNavigationProp, NativeStackNavigatorProps, NativeStackScreenProps } from "@react-navigation/native-stack";
import React, { useEffect } from "react";
import { Button, Image, ScrollView, StyleSheet, Touchable, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../type/types";
import ButtonItem from "../Component/ButtonItem";
import InforRegisterScreen from "./InforRegisterScreen";


type SplashScreenProps = NativeStackScreenProps<RootStackParamList,'SplashScreen'>

function SplashScreen ({navigation}: SplashScreenProps ) {

    useEffect(()=>{
        const timer = setTimeout(()=>navigation.replace("LoginScreen"),1500)
        return (
            ()=>clearTimeout(timer)
        )
    },[])

    return(
                <View style={{flex:1}}>
                    <View style={styles.imageContainer}>
                        <Image source={require("../assets/splashscreen.png")}></Image>
                    </View>
                    {/* <View style={styles.buttonContainer}>
                        <TouchableOpacity onPress={()=>navigation.navigate('InforRegisterScreen')}>
                            <ButtonItem textButton="GET STARTED" iconButton={require('../assets/rightarrow.png')}/>
                        </TouchableOpacity>
                    </View>  */}
                </View>
    )
}

const styles=StyleSheet.create({
    imageContainer:{
        flex:1,
        justifyContent:"center",
        alignItems:"center",

    },
    buttonContainer:{
        alignItems:"center",
        marginTop:45,
        marginBottom:30
    }
})

export default SplashScreen