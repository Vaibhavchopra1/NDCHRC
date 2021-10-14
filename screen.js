import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ImageBackground,Dimensions,Image } from "react-native";
import { AuthContext } from "./context";
import Icon from 'react-native-vector-icons/FontAwesome';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';

import Appointment1 from './components/screen/Appointment';
import Activity1 from './components/screen/Activity';
import Donation1 from './components/screen/Donation';
import Volunteers1 from './components/screen/Volunteers';
import Aboutus1 from './components/screen/Aboutus';
import Events1 from './components/screen/Events';
import Crowdfunding1 from './components/screen/Crowdfunding';
import Links1 from './components/screen/Links';
import Guide1 from './components/screen/Guide';
import Gallery1 from './components/screen/Gallery';





const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor:"white"
  },
  container2: {
    flex: 1,
    backgroundColor:"#0E4D92"
  },

  image1:{
    height:140,
    width:400,
    marginTop:20
},
image2:{
    height:140,
    width:400
},
button:{
    backgroundColor:'black',
    width:100,
    height:100

},
text:{
    color:'white',
    textAlign: 'left',
    fontSize:20,
    fontWeight:'bold',
    paddingLeft:20,
    paddingTop:10     
},
text1:{
  textAlign:'center',
  fontSize:25,
  fontWeight:'bold',
  paddingTop:10,
  color:'white' 
},
text2:{
  textAlign:'center',
  fontSize:15,
  paddingTop:80,
  color:'white' 
},
button12:{
  backgroundColor:'#fff',
  borderRadius:30,
  height:150,
  width:400,
  paddingLeft:20,
  paddingTop:10,
  marginTop:20
},
button1:{
  backgroundColor:'#fff',
  borderRadius:30,
  marginTop:20,
  height:150,
  width:400,
  paddingLeft:20,
  paddingTop:10
},
button2:{
  backgroundColor:'#000',
  borderRadius:30,
  marginTop:10,
  marginBottom:20,
  height:40,
  width:160,
  alignItems:'center',
  paddingTop:7
},
text123:{
  color:'#fff'
}
}); 
const {width,height} = Dimensions.get('window')
const ScreenContainer = ({ children }) => (
  <View style={styles.container}>{children}</View>
);



export const Home = ({ navigation }) => (
   
  <View style={{flex:2}}>
    <TouchableNativeFeedback onPress={() => navigation.push("Appointment")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('5%'),marginTop:hp('3%')}}>
        <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('13%')}}>
          <ImageBackground source={require('./components/Image/th.png')} style={{height:hp('6%'),marginLeft:wp('2%'),width:wp('12%'),marginTop:hp('1%')}}/>
          </View>
        </TouchableNativeFeedback>
        <Text style={{marginLeft:wp('12%'),marginTop:hp('1%'),fontSize:15,fontWeight:'bold'}}>TeleHealth</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Activity")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('52%'),marginTop:hp("-15%")}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/a.png')} style={{height:hp('5%'),marginLeft:wp('3%'),width:wp('9%'),marginTop:hp('1.5%')}}/>
          </View>
        </TouchableNativeFeedback>
        <Text style={{marginLeft:wp('4%'),marginTop:hp('1%'),fontSize:13,fontWeight:'bold'}}>Awareness Campaign</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Donation")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginTop:hp('2%'),marginLeft:wp('5%')}}>
        <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
            <ImageBackground source={require('./components/Image/d1.png')} style={{height:hp('5%'),marginLeft:wp('3%'),width:wp('10%'),marginTop:hp('2%')}}/>
          </View>
        </TouchableNativeFeedback>
        <Text style={{marginLeft:wp('13%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Donation</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Volunteers")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('52%'),marginTop:hp("-15%")}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/v.png')} style={{height:hp('9.5%'),marginLeft:wp('1%'),width:wp('13%'),marginTop:hp('0%')}}/>
          </View>
      </TouchableNativeFeedback>
       <Text style={{marginLeft:wp('12%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Volunteer</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Aboutus")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginTop:hp('2%'),marginLeft:wp('5%')}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
            <Icon name="user" color= 'black' size={wp('8%')} style={{marginTop:hp('2%'),marginLeft:wp('5%')}}/>
          </View>
      </TouchableNativeFeedback>
       <Text style={{marginLeft:wp('12%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>About Us</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Events")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('52%'),marginTop:hp("-15%")}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/e.png')} style={{height:hp('6%'),marginLeft:wp('2%'),width:wp('12%'),marginTop:hp('1%')}}/>
          </View>
      </TouchableNativeFeedback>
       <Text style={{marginLeft:wp('14%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Events</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Crowdfunding")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginTop:hp('2%'),marginLeft:wp('5%')}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/c1.png')} style={{height:hp('6%'),marginLeft:wp('2.5%'),width:wp('10%'),marginTop:hp('1%')}}/>  
          </View>
      </TouchableNativeFeedback>
       <Text style={{marginLeft:wp('9%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Crowdfunding</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Links")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('52%'),marginTop:hp("-15%")}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/c.png')} style={{height:hp('8%'),marginLeft:wp('1%'),width:wp('13%'),marginTop:hp('0%')}}/>
          </View>
      </TouchableNativeFeedback>
       <Text style={{marginLeft:wp('8%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Important Links</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Gallery")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginTop:hp('2%'),marginLeft:wp('5%')}}>
        <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
            <Icon name="picture-o" color= 'black'size={wp('8%')} style={{marginTop:hp('2%'),marginLeft:wp('4%')}}/>
          </View>
        </TouchableNativeFeedback>
        <Text style={{marginLeft:wp('14%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Gallery</Text>
      </View>
    </TouchableNativeFeedback>
    <TouchableNativeFeedback onPress={() => navigation.push("Guide")}>
      <View style={{height:hp('15%'),width:wp('43%'),backgroundColor:'#FBB257',marginLeft:wp('52%'),marginTop:hp("-15%")}}>
      <TouchableNativeFeedback>
          <View style={{borderRadius:150/2,backgroundColor:'white',height:hp('8%'),width:wp('15%'),marginTop:10,marginLeft:wp('12%')}}>
          <ImageBackground source={require('./components/Image/guide.png')} style={{height:hp('5%'),marginLeft:wp('3%'),width:wp('9%'),marginTop:hp('1.5%')}}/>
          </View>
        </TouchableNativeFeedback>
        <Text style={{marginLeft:wp('10%'),marginTop:hp('1%'),fontWeight:'bold',fontSize:15}}>Help Guide</Text>
      </View>
    </TouchableNativeFeedback>
            
  </View>
);

export const Appointment = ({ navigation }) => (
  <ScreenContainer>
    <Appointment1/>
  </ScreenContainer>
);
export const Activity = ({ navigation }) => (
  <ScreenContainer>
    <Activity1/>
  </ScreenContainer>
);
export const Donation = ({ navigation }) => (
  <ScreenContainer>
    <Donation1/>
  </ScreenContainer>
);
export const Volunteers = ({ navigation }) => (
  <ScreenContainer>
    <Volunteers1/>
  </ScreenContainer>
);
export const Aboutus = ({ navigation }) => (
  <ScreenContainer>
    < Aboutus1/>
  </ScreenContainer>
);
export const Events = ({ navigation }) => (
  <ScreenContainer>
    < Events1/>
  </ScreenContainer>
);
export const Crowdfunding = ({ navigation }) => (
  <ScreenContainer>
    <Crowdfunding1/>
  </ScreenContainer>
);
export const  Links = ({ navigation }) => (
  <ScreenContainer>
    <Links1/>
  </ScreenContainer>
);
export const Gallery = ({ navigation }) => (
  <ScreenContainer>
    <Gallery1/>
  </ScreenContainer>
);
export const Guide = ({ navigation }) => (
  <View style={{flex:1}}>
    <Guide1/>
  </View>
);
export const Splash = () => (
  <ScreenContainer>
    <Image source={require('./components/Image/NHN.png')}/>
  </ScreenContainer>
);

