import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect } from 'react';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert, KeyboardAvoidingView, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import Owner from './Owner';
import CustRegNext from './CustRegNext';
import { getAdminById } from '../api/Admin';
const image = require("../assets/Background.jpeg")
const Tab = createMaterialTopTabNavigator();

export default function Customer({navigation}) {
  const [email,setEmail]=useState('');
  const [username,setUsername]=useState('');
  const [password,setPassword]=useState('');
  const [confirm,setConfirm]=useState('');
  const [data,setData]=useState();

  async function getDataFromApi(){
    const res = await getAdminById('1')
    setData(res)
  }
  // useEffect has the top priority. It runs before loading the screen content. the [] in the function's end is to tell the functions that it only needs to run once
  useEffect(()=> {
    getDataFromApi()
  },[])

  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
        
      <TouchableOpacity style={styles.regDpView} onPress={()=> Alert.alert('Works')} activeOpacity={0.7}>
          <Text style={{fontSize:50, color:'rgba(83, 110, 115, 0.6)'}}>+</Text>
          <Text style={{fontSize:15, color:'rgba(83, 110, 115, 0.6)'}}>Upload Picture</Text>
        </TouchableOpacity>
        
        <TextInput style={styles.inputStyle} onChangeText={setEmail} value={email} placeholder="Email" placeholderTextColor="#D3D3D3"/>
        <TextInput style={styles.inputStyle} onChangeText={setUsername} value={username} placeholder="Username" placeholderTextColor="#D3D3D3"/>
        <TextInput style={styles.inputStyle} onChangeText={setPassword} value={password} placeholder="Password" placeholderTextColor="#D3D3D3"/>
        <TextInput style={styles.inputStyle} onChangeText={setConfirm} value={confirm} placeholder="Confirm Password" placeholderTextColor="#D3D3D3"/>

        {/* Register Button */}
        <TouchableOpacity style={{backgroundColor:'rgba(83, 110, 115, 0.6)',
         alignSelf:'center',
          height:35,width:'50%',
           borderRadius:7,
            marginTop:10, 
            justifyContent:'center',
             marginBottom:25,
            alignItems:'center'}}
              onPress={()=>navigation.navigate(CustRegNext)}>
        <Text style={{fontSize:20, color:'#D3D3D3'}}>Register</Text>
        </TouchableOpacity>


        {/*Agreeing to Terms and Conditions line*/}
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15, color:'#D3D3D3', marginLeft:25}}>By clicking registeration, you agree to our </Text>
        <TouchableOpacity onPress={()=>Alert.alert("Navigate to Term & Condition")}>
        <Text style={{fontSize:15, color:'yellow', marginRight:40}}>Terms and Conditions</Text>
        </TouchableOpacity>
        </View>

        <View style={{marginTop:70}}>
        <Button
        onPress={()=>navigation.navigate(Owner)}
        title="Become an Owner"
        color="red"
        accessibilityLabel="Learn more about this purple button"
        />
        </View>

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
    height:200,
    width:200,
    borderRadius:200,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginTop:'10%',
    marginBottom:50
  },
  inputViews:{
    color:'#D3D3D3',
    fontSize:18,
    paddingLeft:10,
    borderBottomColor:'#D3D3D3'
  },
  inputStyle: {
    fontSize: 20,
    color: '#D3D3D3',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    marginBottom: 30,
    marginHorizontal:45,
    paddingBottom:3,
    paddingLeft:5
  },
});
