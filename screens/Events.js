import React from "react";
import { View, Text, StyleSheet, Image,ScrollView, ImageBackground , TouchableNativeFeedback} from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

const Events1 = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{marginTop:30,textAlign:'center',fontSize:30,fontWeight:'bold'}}>Events</Text>
            <Text/>
            <TouchableNativeFeedback>
                <View style={{width:wp('90%'),height:hp('78%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('6%'),color:'#278868',fontWeight:'bold',marginLeft:('2%')}}>Mega Multi-disciplinary Health Camp for All held on 20th Sept. 2019</Text>
                    <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>NDCHRC in collaboration with Vasant Kunj Councilor Mr. Manoj Mehlawat organised a Mega Health Camp on 20th of Sept. 2019 at Park (behind JIMS College), Vasant Kunj, New Delhi.</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>11+ Doctors along with 60+ Volunteers helped in conducting the screening tests for 500+ underprivileged people.</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>These services are helpful for the needy people and to make their life healthy.</Text>
                    <Image source={require('../Image/01.jpeg')} style={{marginTop:hp('2%'),marginLeft:wp('3%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/03.jpeg')} style={{marginTop:hp('-15%'),marginLeft:wp('45%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/02.jpeg')} style={{marginTop:hp('2%'),marginLeft:wp('25%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                 </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={{width:wp('90%'),height:hp('105%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('6%'),color:'#278868',fontWeight:'bold',marginLeft:('2%')}}>Mega Multi-disciplinary Health Camp for CHILDREN held on 1st Sept. 2019</Text>
                    <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>NDCHRC in collaboration with Vasant Kunj Kali Mandir Samiti  organized a Mega Health Camp on 1st of Sept. 2019 at B7, Kali Mandir, Vasant Kunj, New Delhi.</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>15+ Doctors along with 50+ Volunteers are going to conduct the screening tests for 200+ underprivileged children.</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>Main Doctors participated in the camp:</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'left',fontSize:wp('3.5%'),marginLeft:wp('6%'),color:'white',marginRight:wp('2%')}}>• Dr. Rasheena Bansal, Pediatric Ophthalmologist</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'left',fontSize:wp('3.5%'),marginLeft:wp('6%'),color:'white',marginRight:wp('2%')}}>• Dr. Ankita Baidya, Infectious Diseases Specialist</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'left',fontSize:wp('3.5%'),marginLeft:wp('6%'),color:'white',marginRight:wp('2%')}}>• Dr. Amit Sagar, Senior Dentist</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'left',fontSize:wp('3.5%'),marginLeft:wp('6%'),color:'white',marginRight:wp('2%')}}>• Dr. Divya Nigam, Pediatric Dentist</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'left',fontSize:wp('3.5%'),marginLeft:wp('6%'),color:'white',marginRight:wp('2%')}}>• Dr. Nishu Sharma, Occupational Therapist</Text>
                    <Text style={{marginTop:hp('1%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>An awareness session highlighting the need of Oral, Personal and Menstrual Hygiene was conducted by the volunteers too.</Text>
                    <Image source={require('../Image/1.jpg')} style={{marginTop:hp('2%'),marginLeft:wp('3%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/2.jpg')} style={{marginTop:hp('-15%'),marginLeft:wp('45%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/3.jpg')} style={{marginTop:hp('2%'),marginLeft:wp('25%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
                <View style={{width:wp('90%'),height:hp('55%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('6%'),color:'#278868',fontWeight:'bold',marginLeft:('2%')}}>Text Books to Meritorious Students</Text>
                    <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>Donation received for getting School Books for meritorious kids. We got the books and   distributed them among the needy children.</Text>
                    <Image source={require('../Image/t1.jpeg')} style={{marginTop:hp('2%'),marginLeft:wp('3%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/t2.jpeg')} style={{marginTop:hp('-15%'),marginLeft:wp('45%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/t3.jpg')} style={{marginTop:hp('2%'),marginLeft:wp('3%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                    <Image source={require('../Image/t4.jpg')} style={{marginTop:hp('-15%'),marginLeft:wp('45%'),width:wp('40%'),height:hp('15%'),borderRadius:10}}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <View style={{width:wp('90%'),height:hp('85%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('7%'),color:'#278868',fontWeight:'bold',marginLeft:('2%'),marginRight:wp('2%')}}>Essential Eye Glasses to Adil</Text>
                    <Image source={require('../Image/12.jpeg')} style={{marginTop:hp('2%'),marginLeft:wp('4%'),width:wp('35%'),height:hp('20%'),borderRadius:10}}/>
                    <Text style={{marginTop:hp('-20%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('42%'),color:'white',marginRight:wp('4%')}}>Some days back, Bidisha Ray noticed that a young boy visiting our NDCHRC Free Community Library is not able to study or focus well. When we enquired, he confirmed that he is having problem in his eyes.</Text>
                    <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>We requested Dr. Rasheena Bansal to examine this lovely boy. Dr. Rasheena Bansal is one of the best Pediatric Ophthalmologist in India. She thoroughly examined this boy and advised him to get a Spectacles with lenses. Unfortunately, this boy had no support. I reached out to NDCHRC volunteers and a glass shop for help. Within Seconds, Nameesha Verma offered to help him. Even the Glass shop owner gave it to us at a discounted rate. After two days, his glasses are ready and he is very happy to read and write comfortably.</Text>
                    <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>Thank you Bidisha Ray, Dr. Rasheena Bansal and Nameesha Verma for helping this wonderful boy.This is a real time example of people coming together to help children who need help. Let me know if you would like to help and support such children.</Text>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <View style={{width:wp('90%'),height:hp('35%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('6%'),color:'#278868',fontWeight:'bold',marginLeft:('2%'),marginRight:wp('2%')}}>Digital Literacy for Underprivileged Girls</Text>
                <Text style={{marginTop:hp('2%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('42%'),color:'white',marginRight:wp('4%')}}>On 15th of August 2019, NDCHRC Trust launched Digital Literacy Program for underprivileged girls.</Text>
                <Text style={{marginTop:hp('4%'),textAlign:'justify',fontSize:wp('3.5%'),marginLeft:wp('4%'),color:'white',marginRight:wp('4%')}}>This is a great step forward to empower girls with digital literacy.</Text>
                <Image source={require('../Image/Capture1.jpg')} style={{marginTop:hp('-19%'),marginLeft:wp('4%'),width:wp('30%'),height:hp('12%'),borderRadius:10}}/>
                </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback>
            <View style={{width:wp('90%'),height:hp('30%'),marginLeft:wp('2%'),backgroundColor:'#FBB257',borderRadius:20,marginTop:hp('1%')}}>
                    <Text style={{marginTop:hp('2%'),textAlign:'center',fontSize:wp('6%'),color:'#278868',fontWeight:'bold',marginLeft:('2%'),marginRight:wp('2%')}}>Storytelling Sessions for Children</Text>
                    <Image source={require('../Image/SS.jpg')} style={{marginTop:hp('2%'),marginLeft:wp('7%'),width:wp('30%'),height:hp('12%'),borderRadius:10}}/>
                    <Image source={require('../Image/ss1.jpg')} style={{marginTop:hp('-12%'),marginLeft:wp('50%'),width:wp('30%'),height:hp('12%'),borderRadius:10}}/>  
                </View>
            </TouchableNativeFeedback>
            <Text/>
            <Text/>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
  }); 


  export default Events1;