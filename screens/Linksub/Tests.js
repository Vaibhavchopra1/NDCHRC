import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Tests1 = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:'left',marginLeft:wp('4%'),marginTop:hp('3%'),fontSize:25}}>Tests/Scans :</Text>
        <TouchableNativeFeedback  onPress={()=> Linking.openURL("https://www.lalpathlabs.com/")}>
           <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Dr LAl PathLab</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.drdangslab.com/")}>
           <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Dr. Dangs Lab</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.thyrocare.com/")}>
           <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Thyrocare</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.justdial.com/Delhi/Dr-Sehras-Diagnostic-Vasant-Kunj/011PXX11-XX11-180903191758-Y9J5_BZDET")}>
           <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Dr. Sehra’s Diagnostics</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        </View>

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


  export default Tests1;