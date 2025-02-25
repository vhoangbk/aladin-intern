import { useNavigation } from "@react-navigation/native";
import React from "react";
import {Button, Image, StyleSheet, Text, TextInput, TouchableOpacity, View} from 'react-native';
import LinearGradient from "react-native-linear-gradient";



function ButtonItem({textButton, iconButton}:any){
    return(

            <LinearGradient 
                colors={['#9DCEFF','#92A3FD']} 
                style={styles.container}
                start={{ x: 0, y: 0 }} 
                end={{ x: 1, y: 0 }} >
                <View style={styles.buttonContent}>
                    <Text style={styles.textStyle}>{textButton}</Text>
                    <Image source={iconButton} style={styles.iconButtonStyle}/>
                </View>
            </LinearGradient>

    )


}

export default ButtonItem;

const styles = StyleSheet.create({
    container:{
        width:315,
        height:60,
        backgroundColor:"#92A3FD",
        borderRadius:99,
        justifyContent:"center",
        elevation:10,
    },
    buttonContent:{
        flexDirection:"row",
        height:24,
        width:315,
        justifyContent:"center",
        alignItems:"center",

    },
    textStyle:{
        color:"#FFFFFF",
        fontWeight:"bold",
        fontFamily:"Poppins",
        fontSize:16
    },
    iconButtonStyle:{
        marginTop:1.8,
        width:20,
        height:20
    }

});
