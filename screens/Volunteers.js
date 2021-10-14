import React from "react";
import { View, Text, StyleSheet, Image, TouchableNativeFeedback,ScrollView, ImageBackground, Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Volunteers1 = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center',marginTop:30,fontSize:30,marginBottom:20,fontWeight:'bold'}}>Volunteers</Text>
            <Text/>
            <Text style={{marginLeft:20,textAlign:'left',fontSize:30,color:'#278868',fontWeight:'bold'}}>It starts with YOU.</Text>
            <Text/>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:20,textAlign:'left',fontWeight:'bold'}}>Reasons why you should volunteer at NHN.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	You get to create action in your community or city.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	You get to work towards healthcare or education-related issues of CHILDREN.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	Connect with fellow changemakers. You can even work from your own home.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	Be a part of a larger community of change-makers and influencers. Have space where you can take charge and create solutions.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	Become an influencer yourself. We prefer to hire who have volunteered with us in the past.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left'}}>•	We provide certificates for your valuable contribution. If your college requires you to work or if you’re looking for experience before you step out to the market of day-in, day-out, we want to ask you to consider working for CHILDREN at NDCHRC.</Text>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'left',fontWeight:'bold'}}>Click below to join a life-changing journey of kindness and love for children:</Text>
            <TouchableNativeFeedback onPress={() => Linking.openURL('https://docs.google.com/forms/d/1vGX29oi4D5hriJQUvXM1Lu4ku1P1l7gtzgxz0dFIL8Q/viewform?edit_requested=true')}>
                <View style={{marginTop:30,marginLeft:wp("20%"),height:50,backgroundColor:'#278868',alignItems:'center',marginBottom:20,width:210,justifyContent:'center',borderRadius:20}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:20}}>Registration Form</Text>
                </View>
            </TouchableNativeFeedback>
            <Text/>
            <Text/>
            <Text/>
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


  export default Volunteers1;