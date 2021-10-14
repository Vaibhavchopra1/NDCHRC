import React from "react";
import { View, Text, StyleSheet, Button, TouchableNativeFeedback,ScrollView, ImageBackground ,Linking} from "react-native";
import NGO1 from "./Linksub/NGO" ;
import Hospital1 from "./Linksub/Hospital";
import Bdonation1 from './Linksub/Bdonation';
import Tests1 from './Linksub/Tests';
import Chemists1 from './Linksub/Chemists';

const Links1 = ({navigation}) => {
    return(
        <ScrollView style={styles.container}>
            <Text style={{textAlign:'center',marginTop:30,fontSize:30}}>Important Links</Text>
            <Text/>
            <NGO1/>
            <Text/>
            <Hospital1/>
            <Text/>
            <Bdonation1/>
            <Text/>
            <Chemists1/>
            <Text/>
            <Tests1/>
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


  export default Links1;