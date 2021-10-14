import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const NGO1 = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'left',marginLeft:wp('4%'),marginTop:hp('3%'),fontSize:25}}>NGO :</Text>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://www.ndchrc.org/")}>
        <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>NDCHRC Trust</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://robinhoodarmy.com/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Robinhood Army</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.feedingindia.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Feeding India</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.cankidsindia.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Cankids</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://nargisduttfoundation.com/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Nargis Dutt Foundation</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback  onPress={()=> Linking.openURL("https://www.udayfoundation.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Uday Foundation</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.smilefoundationindia.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Smile Foundation</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://goonj.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Goonj</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://earthsaviours.in/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Earth Saviours</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback  onPress={()=> Linking.openURL("https://www.helpageindia.org/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>HelpAge India</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.rasoionwheels.com/")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Rasoi on Wheels</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
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
        fontSize:20,
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:10     
    }
  }); 


  export default NGO1;