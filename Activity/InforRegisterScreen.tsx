import React, { useState } from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInputComponent, TouchableOpacity, View} from 'react-native';
import TextInputItem from '../Component/TextInputItem';
import ButtonItem from '../Component/ButtonItem';
import QuantitativeIcon from '../Component/QuantitativeIcon';
import SelectGender from '../Component/SelectGender';
import { Picker } from "@react-native-picker/picker";
import PickBirthDay from '../Component/PickBirthDay';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator, NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/types';

type InforRegisterScreenProps = NativeStackScreenProps<RootStackParamList,'InforRegisterScreen'>

function InforRegisterScreen({navigation}:InforRegisterScreenProps){
    return(
    <ScrollView >
      <View style={styles.container}>
{/* Ảnh */}
        <View id="viewImage">
          <Image 
              source={require('../assets/image.png')}
              style={{ width: 300, height: 300 }} 
              resizeMode='contain'
          />
        </View>
{/* Chữ */}
        <View id="viewText">
          <Text style={styles.headerTextStyle}>Let’s complete your profile</Text>
          <Text style={styles.smallTextStyle}>It will help us to know more about you!</Text>
        </View>
{/* Form */}
        <View id="viewTextInput" style={styles.viewInputStyle}>
{/* Chọn Giới tính */}
            <SelectGender/>          
{/* Chọn ngày sinh */}
            <PickBirthDay/>
{/* Cân nặng */}
            <View style={{flexDirection:"row"}}>
              <TextInputItem 
                image1={require("../assets/yourweight.png")}
                image2={null}
                placeHolderHint="Your Weight"
                maxLength={3}
                keyboardType={"numeric"}/>
{/* Đơn vị Kilogram*/}
              <QuantitativeIcon quantitative="KG"/>
            </View>
{/* Chiều cao */}
            <View style={{flexDirection:"row"}}>
              <TextInputItem 
                image1={require("../assets/swap.png")}
                image2={null}
                placeHolderHint="Your Height"
                maxLength={3}
                keyboardType={"numeric"}/>
{/* Đơn vị centimet */}
              <QuantitativeIcon quantitative="CM"/>
            </View>
        </View>

{/* Button next */}
        <View style={{marginTop:45,marginBottom:30}}>
            <TouchableOpacity onPress={()=>navigation.navigate("HomeScreen")}>
                <ButtonItem textButton ="NEXT" iconButton={require('../assets/rightarrow.png')}/>
            </TouchableOpacity>
        </View>
        

      </View>
    </ScrollView>
    )
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  headerTextStyle:{
    fontFamily:"Poppins",
    fontSize:20,
    fontWeight:"700",
    lineHeight:30
  },
  smallTextStyle:{
    fontFamily:"Poppins",
    fontSize:12,
    fontWeight:"400",
    lineHeight:18,
    alignContent:"center",
    textAlign:"center",
    letterSpacing:0
  },
  viewInputStyle:{
    width:315,
    height:249,
    marginLeft:30,
    marginRight:50,
    marginTop:18
  }
});

export default InforRegisterScreen;