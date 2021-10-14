import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Crowdfunding1 = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center',marginTop:30,fontSize:30}}> Crowdfunding</Text>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.ketto.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1%'),fontSize:wp('7%'),color:'white'}}>Ketto</Text>
            <Text style={{marginTop:hp('-8%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://milaap.org/")}>
        <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
        <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1%'),fontSize:wp('7%'),color:'white'}}>Milaap</Text>
            <Text style={{marginTop:hp('-8%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.impactguru.com/")}>
        <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
        <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1%'),fontSize:wp('7%'),color:'white'}}>ImpactGuru</Text>
            <Text style={{marginTop:hp('-8%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://donatekart.com/")}>
        <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1%'),fontSize:wp('7%'),color:'white'}}>Donate Kart</Text>
            <Text style={{marginTop:hp('-8%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
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
        fontSize:30,
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:10     
    }
  }); 


  export default Crowdfunding1;