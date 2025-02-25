import React, { useState } from 'react';
import {Button, Image, ScrollView, StyleSheet, Text, TextInputComponent, View} from 'react-native';
import TextInputItem from '../Component/TextInputItem';
import ButtonItem from '../Component/ButtonItem';
import QuantitativeIcon from '../Component/QuantitativeIcon';
import SelectGender from '../Component/SelectGender';
import { Picker } from "@react-native-picker/picker";
import PickBirthDay from '../Component/PickBirthDay';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RootStackParamList } from '../type/types';
import InformationRegisterScreen from './InforRegisterScreen';
import HomeScreen from './HomeScreen';
import InforRegisterScreen from './InforRegisterScreen';
import SplashScreen from './SplashScreen';
import LoginScreen from './LoginScreen';

const Stack = createNativeStackNavigator<RootStackParamList>();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen 
            name="SplashScreen" 
            component ={SplashScreen}
            />
        <Stack.Screen 
            name="LoginScreen" 
            component={LoginScreen}/>
        <Stack.Screen 
            name="InforRegisterScreen" 
            component={InforRegisterScreen}
            />
        <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            />
      </Stack.Navigator>
    </NavigationContainer>
  );
}


export default App;

