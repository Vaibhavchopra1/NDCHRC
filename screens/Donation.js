import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground,Linking } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
const Donation1 = () => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center',fontSize:30,fontWeight:'bold'}}>Donation</Text>
            <Text/>
            <Text style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>Underprivileged Children studying at NDCHRC Early Intervention Centre (NEIC) need your help. We have created a Fundraising Campaign for underprivileged kids. Let’s all contribute to it. Let’s spread the joy of giving.</Text>
            <Text/>
            
            <TouchableNativeFeedback>
                <View style={{backgroundColor:'#FBB257',marginLeft:20,marginRight:20,borderRadius:10}}>
                    <Text style={{marginStart:10,marginEnd:10,fontSize:20,color:'white',fontWeight:'bold'}}>Donation can be made directly through Paytm app to :</Text>
                    <Text style={{marginStart:10,marginEnd:10,fontSize:20,color:'white',fontWeight:'bold'}}>+91 9599824600</Text>
                    <Text/>
                    <Text style={{marginStart:10,marginEnd:10,fontSize:20,color:'white',fontWeight:'bold'}}>Donation by Bank Transfer:         New Delhi Childrens Hospital & RC</Text>
                    <Text style={{marginStart:10,marginEnd:10,fontSize:20,color:'white',fontWeight:'bold'}}>Current Account : 50200021666831</Text>
                    <Text style={{marginStart:10,marginEnd:10,fontSize:20,color:'white',fontWeight:'bold'}}>IFSC :                             HDFC0000273</Text>
                </View>
            </TouchableNativeFeedback>
            <Text style={{marginTop:20,marginLeft:20,fontSize:25,fontWeight:'bold',color:'#278868'}}>How will your donations be used?</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>1)</Text>
            <Text style={{marginTop:-30,marginStart:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Once you select an amount to donate, all proceeds will be used in procuring and distributing meal kits to the children. </Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>2)</Text>
            <Text style={{marginTop:-30,marginStart:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>We have partnered with multiple NGOs on ground to help ensure responsible distribution of these kits while adhering to social distancing guidelines.</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>3)</Text>
            <Text style={{marginTop:-30,marginStart:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>This is a 100% not for profit campaign, and we will disclose the use of proceeds in a financial transparency report sent to all contributors to the campaign.</Text>
            <Text style={{marginTop:20,marginLeft:20,fontSize:25,fontWeight:'bold',color:'#278868'}}>How we use your valuable funds?</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>1)</Text>
            <Text style={{marginTop:-30,marginStart:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>NDCHRC is an organisation that you can trust to put your money to the best possible use. We are extremely focused on ensuring that your contribution brings high impact. Our administrative costs are minimal, as we are extremely conscious of spending your money as effectively as possible.</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>2)</Text>
            <Text style={{marginTop:-30,marginStart:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Every donation received is an affirmation of your faith in us, and we are committed to maintaining the highest levels of accountability and transparency always.</Text>
            <Text style={{marginTop:20,marginLeft:20,fontSize:25,fontWeight:'bold',color:'#278868'}}>Urgent In-Kind Help Needed</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>1)</Text>
            <Text style={{marginTop:-30,marginLeft:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Clothes for Children, Women and Men.(New or old in good condition, All age groups)</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>2)</Text>
            <Text style={{marginTop:-30,marginLeft:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Dry ration – Packed biscuits, flour, rice, sugar, milk, pulses, oil, masala, etc</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>3)</Text>
            <Text style={{marginTop:-30,marginLeft:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Medicines: Common over the counter medicines.</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>4)</Text>
            <Text style={{marginTop:-30,marginLeft:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Dignity Kits: Sanitary napkins, soap, toothbrushes and towels.</Text>
            <Text  style={{marginTop:20,marginStart:20,marginEnd:20,fontSize:18,textAlign:'justify'}}>5)</Text>
            <Text style={{marginTop:-30,marginLeft:50,marginEnd:20,fontSize:18,textAlign:'justify'}}>Masks, Gloves and Hand Sanitizers</Text>
            <TouchableNativeFeedback onPress={() => Linking.openURL('http://www.ndchrc.org/contact-page/')}>
                <View style={{marginTop:hp('4%'),marginLeft:wp('25%'),height:hp('7%'),backgroundColor:'#278868',alignItems:'center',marginBottom:hp('4%'),width:wp('55%'),borderRadius:20}}>
                    <Text style={{textAlign:'center',color:'white',fontSize:wp('7%')}}>Where To send</Text>
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


  export default Donation1;