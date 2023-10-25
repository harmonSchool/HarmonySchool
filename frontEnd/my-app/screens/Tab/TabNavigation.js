import { View, Text, Platform} from 'react-native'
import React from 'react'
import Home from "../../screens/Home/Home" 
import Chat1 from '../Chat/Chat1';
import Profile from '../Profile/Profile/Profile';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Octicons,Ionicons,FontAwesome,AntDesign } from '@expo/vector-icons';
import Chat2 from '../Chat/Chat2';
const Tab =createBottomTabNavigator();
const screenOptions = {
  tabBarShowLabel: false,
  headerShown: false,
  keyboardHidesTabBar: true,
  tabBarStyle: {
    backgroundColor: 'black', // Use a transparent background
    borderTopWidth: 0, // Remove the top border
    width: '100%', // Set the width to 90% of the screen width
    alignSelf: 'center', // Center the tab bar horizontally
  },
  tabBarItemStyle: {
    flex: 1, // Make each tab item take up equal space
    alignItems: 'center', // Center the content horizontally
    justifyContent: 'center', // Center the content vertically
  },
};


export default function TabNavigation() {
  return (
    <Tab.Navigator {...{ screenOptions }}>
<Tab.Screen name="Home" component={Home} options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Octicons name="Home" size={30} color={focused ? "black": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />
<Tab.Screen name="Chat1" component={Chat1} options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Ionicons name="ios-chatbubble-ellipses-sharp" size={29} color={focused ? "white": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />
<Tab.Screen name="Chat2" component={Chat2} options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Ionicons name="ios-chatbubble-ellipses-sharp" size={29} color={focused ? "white": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />

<Tab.Screen name="Profile" component={Profile}  options={{
  tabBarIcon:({focused})=>{
    return(
      <View style={{alignItems: "center", justifyContent: "center"}}>
<Ionicons name="md-person-circle-sharp"size={35} color={focused ? "#241061": "#A7A6AA"} />    
  </View>
    )
  }
  
}} />


    </Tab.Navigator>
  )
}