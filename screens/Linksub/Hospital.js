import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';


const Hospital1 = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'left',marginLeft:wp('4%'),marginTop:hp('3%'),fontSize:25}}>Charitable Hospitals :</Text>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://ors.gov.in/index.html")}>
            <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>AIIMS Patient Portal</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.kkcth.org/")}>
        <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
        <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Kanchi Kamakoti child               Trust Hospital</Text>
        <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://www.lhmc-hosp.gov.in")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Kalawati Saran Children’s Hospital</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback  onPress={()=> Linking.openURL("http://www.cnbchospital.in/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Chacha Nehru                             Bal Chikitsalaya</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://sssihms.org/appointments-admission/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Sathya Sai Institute of        Higher Medical Sciences</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.shroffeyecentre.com/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Shroff Eye Centre</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.isiconline.org/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Indian Spinal Injuries             Centre</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.ilbs.in/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Institute of Liver &                  Bilary Sciences</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://tmc.gov.in/tmh/index.php/en/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Tata Memorial Hospital</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://barusahib.org/our-programs/charitable-hospital/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>AKAL CHARITABLE          Hospital</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.sjcancerhospitalgzb.com/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Sh.Jagannath Charitable    Cancer Hospital</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback  onPress={()=> Linking.openURL("https://www.mahavircancersansthan.com/index.html")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Mahavir Cancer Institute             & Research Centre</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://shanthisocialservices.org/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Shanti Social Service</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://www.childrenshospital.org/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Boston’s Children’s                    Hospital</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.stjude.org/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>St. Jude’s Hospital</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.justdial.com/Delhi/Kiwanis-Club-Of-New-Delhi-Qutab-Institutional-Area/011P797180_BZDET")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Kiwani’s</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://www.narayanseva.org/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>Narayan Seva Sansthan</Text>
            <Text style={{marginTop:hp('-7.5%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://tbassnindia.org/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>The Tuberculosis               Association of India</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("http://datri.org/")}>
             <View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('10%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>DATRI - Blood stem                   cell donors registry</Text>
            <Text style={{marginTop:hp('-11%'),marginLeft:wp("78%"),fontSize:wp('13%'),color:'#278868'}}>></Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=> Linking.openURL("https://www.childlineindia.org/")}>
<View style={{borderRadius:10,backgroundColor:'#FBB257',width:wp('90%'),height:hp('8%'),marginLeft:wp('3%'),marginTop:hp('3%')}}>
            <Text style={{marginTop:10,marginLeft:wp('2%'),marginTop:hp('1.5%'),fontSize:wp('6%'),color:'white'}}>CHILDLINE 1098</Text>
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
        fontSize:25,
        fontWeight:'bold',
        paddingLeft:20,
        paddingTop:10     
    }
  }); 


  export default Hospital1;