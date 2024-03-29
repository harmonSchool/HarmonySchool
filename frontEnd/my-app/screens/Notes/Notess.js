import React from 'react';
import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView  } from 'react-native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
import axios from 'axios';
import { useState } from 'react';
const Notess = () => {
const note=useState([])
const subjectNote=useState([])
const updatNote=()=>{
axios.put('http://192.168.1.177:3000/Notes/update',{
  note,
  subjectNote,
}).then((res)=>{
  note(res.data)
}).catch((err)=>{
  console.log(err);
})
}
const addNote=()=>{
  axios.post('http://192.168.1.177:3000/Notes/add',{
    note,
    subjectNote,
  })
}


  return (
    <ScrollView>
    <View style={Styles.container}>
    <Image
    style={{width:40,
        height:40,
        marginLeft:5,
      }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} /><Image />
        <Text>Notes</Text>
        <View>
            <View style={Styles.notes}>
            <Image
    style={{width:40,
    height:40,
    marginLeft:5,
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
               <Text></Text>
                <View style={Styles.noteNum}>
                  <Text>90/100</Text>
                </View>
            </View>
            
        </View>
    </View>
</ScrollView>
  );
};

const Styles=StyleSheet.create({
  container: {
      flex: 1,
      backgroundColor: '#ffffff',
      alignItems: 'center',
      justifyContent: 'center',
      padding: 20,
    },notes:{
      marginTop:100,
      marginLeft:-150,
      width:140,
      height:180,
      borderRadius:15,
      borderWidth:0.6,
      display:'flex'
    },noteNum:{
      width:140,
      height:50,
      borderBottomRightRadius:15,
      borderBottomLeftRadius:15,
      borderWidth:0.6,
      marginTop:74.3,
      alignItems: 'center',
      justifyContent: 'center'
    }
})

export default Notess;
