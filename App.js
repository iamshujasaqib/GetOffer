import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity,ImageBackground, SafeAreaView, StyleSheet, Text, View, Alert } from 'react-native';
import MainScreen from './sources/screens/Mainscreen';
import Customer from './sources/screens/Customer';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import Owner from './sources/screens/Owner';
import CustRegNext from './sources/screens/CustRegNext';

//const image = require("./sources/assets/Background.jpeg")
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator 
      initialRouteName="MainScreen" 
        //screenOptions={{headerShown:false}}      
      >
        <Stack.Screen name='Main'
        component={MainScreen}
        options={{
          headerStyle: {backgroundColor: '#003D80'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerTitleAlign: 'left',
          headerShown:false
        }}/>
        <Stack.Screen name='Customer'
        component={Customer}
        options={{
          headerStyle: {backgroundColor: '#003D80'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerTitleAlign: 'left',
          headerShown:false
        }}/>
        <Stack.Screen name='Owner'
        component={Owner}
        options={{
          headerStyle: {backgroundColor: '#003D80'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerTitleAlign: 'left',
          headerShown:false
        }}/>
        <Stack.Screen name='CustRegNext'
        component={CustRegNext}
        options={{
          headerStyle: {backgroundColor: '#003D80'},
          headerTitleStyle: {color: 'white', fontWeight: 'bold'},
          headerTitleAlign: 'left',
          headerShown:false
        }}/>

      </Stack.Navigator>
    </NavigationContainer>
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
