import React from "react";
import { View, Text, StyleSheet, Button, Image,ScrollView, ImageBackground } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Activity1 = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{marginTop:hp('5%'),textAlign:'center',fontSize:wp('7%'),marginRight:wp('7%'),fontWeight:'bold'}}>Awarnesss Campaigns</Text>
            <Image source={require('../Image/a1.jpeg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a2.jpeg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a3.jpeg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a41.jpg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a5.jpg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a6.jpg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
            <Image source={require('../Image/a7.jpg')} style={{marginTop:hp('4%'),marginLeft:wp('2%'),width:wp('97%'),marginRight:wp('2%'),height:hp('51%'),borderRadius:10}}/>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    text:{
        color:'white',
        textAlign: 'left',
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:10     
    }
  }); 


  export default Activity1;