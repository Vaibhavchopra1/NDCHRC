import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Guide1 = () => {
    return(
        <View style={styles.container}>
            <Text style={{textAlign:'center',marginTop:30,fontSize:30}}>Health & Wellness GuideBook</Text>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>Cancer</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/1JdcRX1sJywpM_XF107GZVd8knXrMoi6s/view?usp=sharing')}>
                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>COVID-19</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/19yT7P3CSSChFsb22nxUVFAp-z_KJKoQ3/view?usp=sharing')}>
                                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>Plasma Thearpy</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/1uPaXIGFK9u-5ebxHFnsoYVggnrrvXdkA/view?usp=sharing')}>
                                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>Precision Medicine</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/1nlnUCAHUhtxbrXCsGSpXTdSmfz2B0TvE/view?usp=sharing')}>
                                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>Reality of IVF</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/1dWlyR55ez_RvqjNxlafFZsdU4izZZXhu/view?usp=sharing')}>
                                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('5%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:hp('1.5%'),marginLeft:wp('2%'),fontSize:hp('3%'),color:'white'}}>Stem cell Thearpy</Text>
            <TouchableNativeFeedback onPress={()=> Linking.openURL('https://drive.google.com/file/d/1rqcc2i1U5KImGk9Ev-4KA29PLRw9hciP/view?usp=sharing')}>
                                <View style={{borderRadius:10,backgroundColor:'#278868',marginTop:hp('-4%'),width:wp('23%'),marginLeft:wp('65%'),height:hp('4.5%')}}>
                    <Text style={{textAlign:'center',marginTop:hp('1%'),fontSize:hp('2%'),color:'white'}}>Click here</Text>
                </View>
            </TouchableNativeFeedback>
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


  export default Guide1;