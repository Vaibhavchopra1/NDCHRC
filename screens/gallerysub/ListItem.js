import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList ,Dimensions,ScrollView, ImageBackground, TouchableWithoutFeedback } from "react-native";
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';




export default class ListItem extends Component{
    render(){
        const {itemWidth} = this.props
        return(
            <TouchableWithoutFeedback>
                <View style={{marginleft:wp('3%'),marginRight:wp('2%'),marginTop:hp('2%')}}>
                    <Image style={{width:wp("45%"),height:hp('30%')}} source={this.props.image}></Image>
                </View>
            </TouchableWithoutFeedback>
        )
    }
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


