import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';

const image = require("./sources/assets/Background.jpeg")

export default function App() {
  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
        <View style={{alignItems:'center', marginTop:130}}>
          <Text style={[styles.textStyle, {fontSize:60} ]}>GETOFFER</Text>
        </View>
        <View style={{alignItems:'center', marginTop:20}}>
          <Text style={[styles.textStyle, {fontSize:50} ]}>WELCOME</Text>
        </View>
        <View style={{alignItems:'center', marginTop:10}}>
          <Text style={[styles.textStyle, {fontSize:20} ]}>NICE TO SEE YOU</Text>
        </View>
        
        <TouchableOpacity style={[styles.touchableStyle,{marginTop:50}]} onPress={()=>Alert.alert("Login alert")}>
          <Text style={{fontSize:20, color:'#D3D3D3'}}>Login</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableStyle} onPress={()=>Alert.alert("Registeration alert")}>
          <Text style={{fontSize:20, color:'#D3D3D3'}}>Registeration</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.touchableStyle} onPress={()=>Alert.alert("Guest alert")}>
          <Text style={{fontSize:20, color:'#D3D3D3'}}>Use as Guest</Text>
        </TouchableOpacity>
        

      </SafeAreaView>

    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  imageBackgroundContainer:{
    flex:1,
    flexDirection:'column'
  },
  textStyle:{
    color:'white',
    fontWeight:'bold',
    color:'silver',
    fontFamily:'Courier New'
    },
    touchableStyle:{
      backgroundColor:'rgba(83, 110, 115, 0.6)',
      alignItems:'center',
      alignSelf:'center',
      justifyContent:'center',
      marginTop:20,
      width:'65%',
      height:'7.5%',
      borderRadius:10,
    }
});
