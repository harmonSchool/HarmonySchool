import React from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'

const CustomTextInputEmail = ({ iconName,onChangeText }) => {
  return (
    <View style={{ flexDirection: 'row', alignItems: 'center', borderWidth: 1, borderColor: 'black', paddingLeft: 10, borderRadius:7.69, borderColor:'#66328E',backgroundColor: '#F8F0F0', height:46.13}}>
             <FontAwesomeIcon icon={ iconName } style={{color:'#65328e'}} />

      <TextInput 
       onChangeText={onChangeText}
       style={{ flex: 1 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'flex-start',
      justifyContent: 'flex-start',
      width: '100%',
      paddingTop: 10,
    },
    text: {
      alignItems: 'center',
      marginTop: 10,
      marginLeft: 141,
      marginRight: 141,
      width: 100,
    
      color: '#65328e', 
    },
  
    imageContainer: {
      marginTop: 20,
      width: 50, // Adjust the width as needed
      height: 50, 
      marginLeft:170,
      marginRight:144,// Adjust the height as needed
    },
    image: {
      flex: 1,
      marginTop: 20,
      width: undefined,
      height: undefined,
    },
    homeDiv: {
      backgroundColor: '#ffffff',
      width: 312,
      height: 50,
      marginLeft: 21,
      marginTop: 40,
    },
    homeText: {
      fontSize: 15,
      fontWeight: 'bold',
      textAlign: 'left',
      marginTop: 20,
    },
    nameContainer: {
      position: 'relative',
      width: 269,
      height: 84,
      marginLeft: 40,
      marginTop: 20,
    },
    label: {
      color: '#66328E',
      fontSize: 12.3,
      fontWeight: '500',
     
      
    },
    inputName: {
      position: 'absolute',
      width: 269,
      height: 46,
      top: 38,
      left: 0,
      backgroundColor: '#F8F0F0',
      borderRadius: 7.69,
      borderWidth: 0.77,
      borderColor: '#66328E',
      paddingLeft: 10,
      fontSize: 14,
    },
    loginButton: {
      position: 'relative',
      width: 268,
      height: 46,
      backgroundColor: '#65328e',
      borderRadius: 7.69,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 40,  // Adjust the margin as needed
    },
    loginButtonTextWrapper: {
      position: 'absolute',
      width: 54,
      height: 28,
      top: 9,
    },
    loginButtonText: {
      color: '#F8F0F0',
      fontSize: 12.3,
      
      
      textAlign: 'center',
    },
    haveAccountContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginTop: 20,
      marginLeft: 60,
    },
   
  
  });

export default CustomTextInputEmail;