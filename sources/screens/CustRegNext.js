import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View,
   Alert, KeyboardAvoidingView, Button, Touchable, Image, ScrollViewBase, ScrollView } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Owner from './Owner';
import Icon from 'react-native-vector-icons/Ionicons';

const image = require("../assets/Background.jpeg")
const foodPlate = require("../assets/foodPlate.jpeg")
const Tab = createMaterialTopTabNavigator();

export default function CustRegNext({navigation}) {
  const [address,setAddress]=useState('');
  const [state,setState]=useState('Sortieren Noch');
 
  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
        
      <TouchableOpacity style={styles.regDpView} onPress={()=> Alert.alert('Works')} activeOpacity={0.7}>
          <Icon name="person-add" size={40} color='rgba(83, 110, 115, 0.6)' />
        </TouchableOpacity>

        <View style={{flexDirection:'row', justifyContent:'center'}}>

            <View
                style={styles.buttonStyle}>
                    <Icon name="location-outline" size={25} color='rgba(83, 110, 115, 0.6)'/>
                    <TextInput style={styles.inputStyle} onChangeText={setAddress} placeholder='Address'/>
            </View>

            <TouchableOpacity
                style={[styles.buttonStyle, {width:'25%', alignSelf:'flex-end', marginLeft:17, backgroundColor:'yellow',justifyContent:'center'}]}
                onPress={()=>Alert.alert("Check")}>
                    <Text style={{color:'rgba(83, 110, 115, 0.6)', fontSize:20}}>Search</Text>
            </TouchableOpacity>

        </View>

        <View style={{flexDirection:'row',justifyContent:'center'}}>

            <TouchableOpacity
                style={[styles.buttonStyle,{width:'46%',justifyContent:'center'}]}
                onPress={()=>Alert.alert('Works')}>
                    <Icon name="filter-outline" size={25} color='rgba(83, 110, 115, 0.6)'/>
                    <Text style={{ fontSize: 20, color:'rgba(83, 110, 115, 0.6)', marginLeft:10}}>Filter</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={[styles.buttonStyle, {width:'46%', alignSelf:'flex-end', marginLeft:10,justifyContent:'flex-start'}]}
                onPress={()=>Alert.alert("Check")}>
                    <Text style={styles.inputStyle}>{state}</Text>
                    <Icon name="chevron-down-outline" size={25} color='rgba(83, 110, 115, 0.6)'/>
            </TouchableOpacity>

        </View>
        {/* <TouchableOpacity style={styles.cardStyle} onPress={Alert.alert("Card Works")}>
        </TouchableOpacity> */}
        <ScrollView>

        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 1</Text>
        </View>
        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 2</Text>
        </View>
        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 3</Text>
        </View>
        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 4</Text>
        </View>
        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 5</Text>
        </View>
        <View style={styles.cardStyle}>
          <Text style={{alignSelf:'center', fontSize:20}}>Card 6</Text>
        </View>
       

        </ScrollView>

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer:{
    flex:1,
    flexDirection:'column'
  },
  regDpView:{
    backgroundColor:'#D3D3D3',
    height:70,
    width:70,
    borderRadius:200,
    justifyContent:'center',
    alignSelf:'flex-end',
    alignItems:'center',
    marginTop:5,
    marginRight:20,
    marginBottom:15
  },
  inputStyle: {
    fontSize: 20,
    color:'rgba(83, 110, 115, 0.6)',
    width:'85%',
    marginLeft:5
  },
  buttonStyle:{
    backgroundColor:'#C0C0C0',  //silver
    alignSelf:'flex-start',
    height:40,width:'65%',
    borderRadius:7,
    justifyContent:'flex-start',
    marginBottom:10,
    alignItems:'center',
    flexDirection:'row',
    paddingHorizontal:10
  },
  cardStyle:{
    backgroundColor:'white',
    height:200,
    width:'80%',
    alignSelf:'center',
    borderRadius:20,
    marginBottom:10,
    justifyContent:'center'
  }
});
