import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator} from "@react-navigation/stack";
import { AuthContext } from "./context";


import {
    Home,
    Splash,
    Appointment,
    Activity,
    Donation,
    Volunteers,
    Aboutus,
    Events,
    Crowdfunding,
    Links,
    Gallery,
    Guide
  } from "./screen";
  

  
const HomeStack = createStackNavigator();

  
 
const HomeStackScreen = () => (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={Home} options={{headerTitle: 'Home' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Donation" component={Donation} options={{headerTitle: 'Donation' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Activity" component={Activity} options={{headerTitle: 'Awarnesss Campaigns' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Volunteers" component={Volunteers} options={{headerTitle: 'Volunteers' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Aboutus" component={Aboutus} options={{headerTitle: 'About us' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Links" component={Links} options={{headerTitle:'Link' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
      backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Events" component={Events} options={{headerTitle: 'Events' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Crowdfunding" component={Crowdfunding} options={{headerTitle: 'Crowdfunding ' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Gallery" component={Gallery} options={{headerTitle: 'Gallery' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Guide" component={Guide} options={{headerTitle: 'Help Guide' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
      <HomeStack.Screen name="Appointment" component={Appointment} options={{headerTitle: 'TeleHealth' , headerTitleAlign: 'center' ,headerTitleStyle:{ color:'white',fontSize:18},headerStyle:{
        backgroundColor:'#278868'
      } }}/>
    </HomeStack.Navigator>
);

export default () => {
  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  if (isLoading) {
    return <Splash />;
  }

  return (
    <AuthContext.Provider>
      <NavigationContainer>
        <HomeStackScreen />
      </NavigationContainer>
    </AuthContext.Provider>
  );
};
 
  


