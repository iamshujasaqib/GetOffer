import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert, KeyboardAvoidingView, Button } from 'react-native';
import { ScrollView, TextInput } from 'react-native-gesture-handler';


const image = require("../assets/Background.jpeg")


export default function Owner({navigation}) {
  const [resturant,setResturant]=useState('');
  const [taxId,settaxId]=useState('');
  const [email,setEmail]=useState('');
  const [hours,setHours]=useState('');
  const [address,setAddress]=useState('');


  // Owner Screen

  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
          <TouchableOpacity style={styles.coverStyle} onPress={()=>Alert.alert("Upload Cover Photo")} activeOpacity={1}>
              <Text style={{fontSize:60, color:'rgba(83, 110, 115, 0.6)'}}>+</Text>
              <Text style={{color:'rgba(83, 110, 115, 0.6)'}}>Upload Cover Photo</Text>
          </TouchableOpacity>

            {/* Opacity problem here...half show hoti */}
          <TouchableOpacity style={styles.DpUpload} onPress={()=> Alert.alert('Upload Profile Photo')} activeOpacity={1}>
            <Text style={{fontSize:50, color:'rgba(83, 110, 115, 0.6)'}}>+</Text>
            <Text style={{fontSize:15, color:'rgba(83, 110, 115, 0.6)'}}>Upload Picture</Text>
            </TouchableOpacity>

            <TextInput style={styles.inputStyle} onChangeText={setResturant} value={resturant} placeholder="Resturant" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={settaxId} value={taxId} placeholder="Tax ID" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setEmail} value={email} placeholder="Email" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setHours} value={hours} placeholder="Opening Hours" placeholderTextColor="#D3D3D3"/>
            <TextInput style={styles.inputStyle} onChangeText={setAddress} value={address} placeholder="Address" placeholderTextColor="#D3D3D3"/>

                    {/* Register Button */}
        <TouchableOpacity style={{backgroundColor:'rgba(83, 110, 115, 0.6)',
         alignSelf:'center',
          height:35,width:'50%',
           borderRadius:7,
            marginTop:10, 
            justifyContent:'center',
             marginBottom:10,
            alignItems:'center'}}
              onPress={()=>Alert.alert("Works")}>
        <Text style={{fontSize:20, color:'#D3D3D3'}}>Register</Text>
        </TouchableOpacity>


        {/*Agreeing to Terms and Conditions line*/}
        <View style={{flexDirection:'row'}}>
        <Text style={{fontSize:15, color:'#D3D3D3', marginLeft:25}}>By clicking registeration, you agree to our </Text>
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
  },
  coverStyle:{
    backgroundColor:'white',
    width:'100%',
    height:200,
    alignItems:'center',
    paddingTop:20
  },
  DpUpload:{
    backgroundColor:'white',
    height:200,
    width:200,
    borderRadius:200,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    marginTop:'-20%',
    marginBottom:25,
    borderColor:'black',
    borderWidth:0.5
  },
  inputStyle: {
    fontSize: 20,
    color: '#D3D3D3',
    borderBottomColor: '#D3D3D3',
    borderBottomWidth: 1.5,
    marginBottom: 25,
    marginHorizontal:45,
    paddingBottom:10,
    paddingLeft:5
  },
});
