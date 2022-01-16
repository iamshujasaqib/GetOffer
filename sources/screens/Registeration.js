import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';

const image = require("../assets/Background.jpeg")


export default function Registeration({navigation}) {
  const [email,setEmail]=useState('Email');
  const [username,setUsername]=useState('Username');
  const [password,setPassword]=useState('Password');
  const [confirm,setConfirm]=useState('Confirm Password');


  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
        
        <TouchableOpacity style={styles.regDpView} onPress={()=> Alert.alert('Works')} activeOpacity={0.7}>
        <View >
          <Text style={styles.uploadDpView}>+</Text>
          <Text style={[styles.uploadDpView,{fontSize:'15'}]}>Upload Picture</Text>
        </View>
        </TouchableOpacity>

        <TextInput style={styles.inputStyle} onChangeText={setEmail} value={email}/>
        <TextInput style={styles.inputStyle} onChangeText={setUsername} value={username}/>
        <TextInput style={styles.inputStyle} onChangeText={setPassword} value={password}/>
        <TextInput style={styles.inputStyle} onChangeText={setConfirm} value={confirm}/>

        <TouchableOpacity onPress={()=>Alert.alert("Works")}>
        <View style={{backgroundColor:'rgba(83, 110, 115, 0.6)', alignSelf:'center', height:35,width:'50%', borderRadius:7, marginTop:10, justifyContent:'center', marginBottom:25}}>
        <Text style={{alignSelf:'center', fontSize:20, color:'#D3D3D3'}}>Register</Text>
        </View>
        </TouchableOpacity>

        <View style={{flexDirection:'row'}}>
        <Text style={{alignSelf:'left', fontSize:15, color:'#D3D3D3', marginLeft:30}}>By clicking registeration, you agree to our </Text>
        <TouchableOpacity onPress={()=>Alert.alert("Navigate to Term & Condition")}>
        <Text style={{fontSize:15, color:'yellow', marginRight:40}}>Terms and Conditions</Text>
        </TouchableOpacity>
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
    flexDirection:'column',
    width:200,
    borderRadius:100,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'10%',
    marginBottom:50
  },
  uploadDpView:{
    alignSelf:'center', 
    alignItems:'center', 
    fontSize:50,
    color:'rgba(83, 110, 115, 0.6)'
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
