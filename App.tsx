import React from 'react';
import {Button, Image, StyleSheet, Text, TextInputComponent, View} from 'react-native';
import TextInputItem from './Component/TextInputItem';
import ButtonItem from './Component/ButtonItem';
import QuantitativeIcon from './Component/QuantitativeIcon';

function App() {
  return (
    <View style={styles.container}>
      <View id="viewImage">
        <Image 
            source={require('./assets/image.png')}
            style={{ width: 375, height: 350 }} 
            resizeMode='contain'
        />
      </View>
      <View id="viewText">
        <Text style={styles.headerTextStyle}>Let’s complete your profile</Text>
        <Text style={styles.smallTextStyle}>It will help us to know more about you!</Text>
      </View>
      <View id="viewTextInput" style={styles.viewInputStyle}>
          <TextInputItem 
            image1={require("./assets/2user.png")} 
            image2={require("./assets/down.png")}
            placeHolderHint="Choose Gender"/>

          <TextInputItem 
            image1={require("./assets/calendar.png")}
            image2={null}
            placeHolderHint="Date of Birth"/>

          <View style={{flexDirection:"row"}}>
            <TextInputItem 
              image1={require("./assets/yourweight.png")}
              image2={null}
              placeHolderHint="Your Weight"/>

            {/* Đơn vị */}
            <QuantitativeIcon quantitative="KG"/>


          </View>

          <View style={{flexDirection:"row"}}>
            <TextInputItem 
              image1={require("./assets/swap.png")}
              image2={null}
              placeHolderHint="Your Height"/>

            {/* Đơn vị */}
            <QuantitativeIcon quantitative="CM"/>


          </View>

      </View>

      <ButtonItem/>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
