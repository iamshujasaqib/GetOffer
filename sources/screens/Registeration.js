import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';

const image = require("../assets/Background.jpeg")

export default function Registeration({navigation}) {
  return (
    <ImageBackground source={image} style={styles.imageBackgroundContainer}>
      <SafeAreaView>
        
        <TouchableOpacity style={styles.regDpView} onPress={()=> Alert.alert('Works')}>
        <View >
          <Text style={{alignSelf:'center', alignItems:'center', fontSize:50}}>+</Text>
          <Text style={{alignSelf:'center', alignItems:'center', fontSize:15}}>Upload Picture</Text>
        </View>
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
  regDpView:{
    backgroundColor:'#D3D3D3',
    height:'50%',
    flexDirection:'column',
    width:'50%',
    borderRadius:100,
    justifyContent:'center',
    alignSelf:'center',
    marginTop:'10%',
  }
});
