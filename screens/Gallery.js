import React, { Component } from "react";
import { View, Text, StyleSheet, Image, FlatList ,Dimensions,ScrollView, ImageBackground } from "react-native";
import ListItem from './gallerysub/ListItem'
const ITEM_WIDTH = Dimensions.get('window').width

export default class Gallery1  extends Component{
    state = {
        coloums:2
    }
    render(){
        return(
            <View style={styles.container}>
                <Text style={{textAlign:'center',marginTop:10,fontSize:30,marginBottom:2,fontWeight:'bold'}}>Gallery</Text>
                <FlatList 
                numColumns={2} 
                data ={[
                    require('../Image/g2.jpg'),
                    require('../Image/g3.jpg'),
                    require('../Image/g4.jpg'),
                    require('../Image/g6.jpg'),
                    require('../Image/g7.jpg'),
                    require('../Image/g8.jpg'),
                    require('../Image/g9.jpg'),
                    require('../Image/g10.jpg'),
                    require('../Image/g11.jpg'),
                    require('../Image/g12.jpg'),
                    require('../Image/g13.jpg'),
                    require('../Image/g14.jpg'),
                    require('../Image/g16.jpg'),
                    require('../Image/g17.jpg'),
                    require('../Image/g18.jpg'),
                    require('../Image/g20.jpg'),
                    require('../Image/g21.jpg'),
                    require('../Image/g22.jpg'),
                    require('../Image/g23.jpg'),
                    require('../Image/g24.jpg'),
                    require('../Image/g26.png'),
                    require('../Image/g25.jpg'),
                    require('../Image/g28.jpg'),
                    require('../Image/g29.jpg'),
                    require('../Image/g30.jpg'),
                    require('../Image/g31.jpg'),
                ]}
                renderItem={({item}) =>{
                    return <ListItem itemWidth = {ITEM_WIDTH/2} image={item} />
                }}  
                keyExtractor={
                    (index) => {return index}
                }/>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection:'column'
    }
  }); 

