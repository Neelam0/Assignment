import { View, Text, TabBarIOSItem, TouchableOpacity , Image} from 'react-native'
import React from 'react'
import {NavigationContainer} from  '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/Component/Home';
import Documents from './src/Component/Documents';
import Send from './src/Component/Send';
import History from './src/Component/History';
import More from './src/Component/More';
import Ionic from 'react-native-vector-icons/Ionicons';

const App = () => {

  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer>
      <Tab.Navigator 
      screenOptions={{
        headerShown: false,
        // tabBarShowLabel : false,
        style:{
          backgroundColor: '#fff',
          borderRadius: 50,
        }
      }}
      >
        <Tab.Screen name = 'Home' component = {Home} options = {{
          tabBarIcon: ({ focused }) =>(
            <View style = {{}}>
              <Ionic name = 'home-sharp' size = {30} color = {focused ? '#0a76ef' : 'grey'}/>
            </View>
       )
        }} />
        <Tab.Screen name = 'Documents' component = {Documents} options = {{
          tabBarIcon: ({ focused }) =>(
            <View style = {{}}>
              <Ionic name = 'document-text-outline' size = {30} color = {focused ? '#0a76ef' : 'grey'}/>
            </View>
       )
        }} />
        <Tab.Screen name = 'Send' component = {Send} options = {{
          tabBarIcon: ({ focused }) =>(
            <TouchableOpacity>
              <View style={{
                width: 50,
                height: 50,
                backgroundColor: '#fff',
                borderRadius: 50,
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 30,
                shadowOffset: {width: 0, height: 10},
                shadowColor: '#000',
                shadowOpacity: 0.25,  
                shadowRadius: 3.5,
                elevation: 10
              }}>
                  <Image source={require('./src/assets/share3.png')} style = {{
                    width: 30,
                    height: 30,
                  }} />
              </View>
            </TouchableOpacity>
       )
        }} />
        <Tab.Screen name = 'History' component = {History} options = {{
          tabBarIcon: ({ focused }) =>(
            <View style = {{}}>
              <Ionic name = 'timer-outline' size = {30} color = {focused ? '#0a76ef' : 'grey'}/>
            </View>
       )
        }} />
        <Tab.Screen name = 'More' component = {More} options = {{
          tabBarIcon: ({ focused }) =>(
            <View style = {{}}>
              <Ionic name = 'ellipsis-horizontal-circle-outline' size = {30} color = {focused ? '#0a76ef' : 'grey'}/>
            </View>
       )
        }} />
      </Tab.Navigator>
    </NavigationContainer>
  )
}

export default App