import React from "react";
import { View, Text, StyleSheet, Image, TouchableNativeFeedback,ScrollView, ImageBackground, Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Appointment1 = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{marginTop:30,textAlign:'center',fontSize:30,color:'#278868',fontWeight:'bold'}}>TeleHealth</Text>
            <Text/>
            <Text style={{marginTop:hp('2%'),marginStart:wp('5%'),fontSize:wp('5%')}}>NHN in collaboration with KIVI Health presents an Online Consultation Service completely FREE of any cost.</Text>
            <Text style={{marginTop:hp('2%'),marginLeft:wp('5%'),fontSize:wp('5%')}}>Our Team of highly experienced, qualified and compassionate Doctors are just a click away. You can contact them as per their given schedule. Consultation is provided on Call/Video/Chat to help you avoid the clinic visit and get the required expert guidance in time and at zero cost.</Text>
            <TouchableNativeFeedback>
                <View style={{backgroundColor:'#FBB257',width:wp('90%'),height:hp('43%'),marginTop:hp('2%'),marginLeft:wp('6%'),borderRadius:20}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'left',fontSize:wp('7%'),color:'#278868',fontWeight:'bold',marginLeft:('6%')}}>Dr. Isha Khetarpal        Child Specialist</Text>
                    <Text style={{marginTop:hp('2%'),marginStart:wp('2%'),marginEnd:wp('2%'),fontSize:18,textAlign:'left',color:'white',fontWeight:'bold'}}>Clinic Name: Pedia-New Delhi Children’s Hospital & Research Centre</Text>
                    <Image source={require('../Image/Dr.-Isha.jpeg')} style={{width:wp('27%'),height:hp('14.5%'),marginLeft:wp('8%'),marginTop:hp('4%')}}></Image>
                    <Text style ={{textAlign:'center',marginTop:hp("-10%"),fontSize:wp('7%'),marginLeft:wp('-5%'),color:'white'}}>OR</Text>
                    <TouchableNativeFeedback onPress={() => Linking.openURL("https://kivihealth.com/delhi/vasant-kunj/pediatrician/isha-khetarpal/book-appointment")}>
                        <View style={{borderRadius:20,backgroundColor:'#278868',marginLeft:wp('50%'),marginRight:wp('3%'),marginTop:hp('-6%')}}>
                            <Text style={{color:'white',fontSize:wp('5%'),textAlign:'center'}}>Book appointment</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </TouchableNativeFeedback>
            <Text/>
            <TouchableNativeFeedback>  
                <View style={{backgroundColor:'#FBB257',width:wp('90%'),height:hp('45%'),marginTop:hp('2%'),marginLeft:wp('6%'),borderRadius:20}}> 
                    <Text style={{marginTop:hp('2%'),textAlign:'left',fontSize:wp('7%'),color:'#278868',fontWeight:'bold',marginLeft:('6%')}}>Dr. Priya Varshney Gynecologist & IVF Specialist</Text>
                    <Text style={{marginTop:hp('2%'),marginStart:wp('2%'),marginEnd:wp('2%'),fontSize:18,textAlign:'left',color:'white',fontWeight:'bold'}}>Clinic Name: Pedia-New Delhi Children’s Hospital & Research Centre</Text>
                    <Image source={require('../Image/Dr.-Priya.jpeg')} style={{width:wp('27%'),height:hp('14.5%'),marginLeft:wp('8%'),marginTop:hp('4%')}}></Image>
                    <Text style ={{textAlign:'center',marginTop:hp("-10%"),fontSize:wp('7%'),marginLeft:wp('-5%'),color:'white'}}>OR</Text>
                    <TouchableNativeFeedback onPress={() => Linking.openURL("https://kivihealth.com/delhi/vasant-kunj/gynaecologist/priya-varshney/book-appointment")}>
                        <View style={{borderRadius:20,backgroundColor:'#278868',marginLeft:wp('50%'),marginRight:wp('3%'),marginTop:hp('-6%')}}>
                            <Text style={{color:'white',fontSize:wp('5%'),textAlign:'center'}}>Book appointment</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </TouchableNativeFeedback>
            <Text/>
            <TouchableNativeFeedback>
                <View style={{backgroundColor:'#FBB257',width:wp('90%'),height:hp('43%'),marginTop:hp('2%'),marginLeft:wp('6%'),borderRadius:20}}     >
                    <Text style={{marginTop:hp('2%'),textAlign:'left',fontSize:wp('7%'),color:'#278868',fontWeight:'bold',marginLeft:('6%')}}>Dr. Divya Nigam       Dentist</Text>
                    <Text style={{marginTop:hp('2%'),marginStart:wp('2%'),marginEnd:wp('2%'),fontSize:18,textAlign:'left',color:'white',fontWeight:'bold'}}>Clinic Name: Pedia-New Delhi Children’s Hospital & Research Centre</Text>
                    <Image source={require('../Image/WhatsApp-Image-2020-04-09-at-18.07.19.jpeg')} style={{width:wp('27%'),height:hp('14.5%'),marginLeft:wp('8%'),marginTop:hp('4%')}}></Image>
                    <Text style ={{textAlign:'center',marginTop:hp("-10%"),fontSize:wp('7%'),marginLeft:wp('-5%'),color:'white'}}>OR</Text>
                    <TouchableNativeFeedback onPress={() => Linking.openURL("https://kivihealth.com/delhi/vasant-kunj/dentist/divya-nigam/book-appointment")}>
                        <View style={{borderRadius:20,backgroundColor:'#278868',marginLeft:wp('50%'),marginRight:wp('3%'),marginTop:hp('-6%')}}>
                            <Text style={{color:'white',fontSize:wp('5%'),textAlign:'center'}}>Book appointment</Text>
                        </View>
                    </TouchableNativeFeedback>
                </View>
            </TouchableNativeFeedback>
            <Text/>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}><Text style={{fontWeight:'bold'}}>Disclaimer:</Text> Online Consultation is not a replacement of Clinical Examination and Guidance. Please make your own judgement before following the guidance. This facility is being provided to help and guide and in any circumstances NDCHRC Trust will not be held responsible in case of any dispute or untoward event.</Text>
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


  export default Appointment1;