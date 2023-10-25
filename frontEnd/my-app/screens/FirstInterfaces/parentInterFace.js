import { StyleSheet, Text, View, Image,Dimensions, TouchableOpacity } from "react-native";
import React from 'react';
import { SafeAreaView } from "react-native-safe-area-context";

const ParentInterface = ({navigation}) => {
    const {height,width}=Dimensions.get('window')
  return (
    <View style={styles.container}>
        
      <View >
        <View style={{width:280,height:450,justifyContent:"center",alignItems:"center",top:20}}>
        <Image  style={styles.img} source={{uri:"https://img.freepik.com/free-photo/happy-young-family-with-pretty-child-posing-white-space_186202-3992.jpg?size=626&ext=jpg"}} />
        <Text style={{top:-10,fontWeight:200}}>At elite School, we prioritize your child's</Text><Text style={{top:-7,fontWeight:200}}> safety and well-being. Our dedicated </Text><Text style={{top:-4,fontWeight:200}}>  staff and comprehensive security</Text><Text style={{top:-4,fontWeight:200}}> measures ensure a secure and nurturing </Text>
        </View>
      <TouchableOpacity onPress={()=>{navigation.navigate('Intro')}}>
        <View style={{
    width:width-40,
    height:60,
    backgroundColor:"#1FA609",
    justifyContent:"center",
    alignItems:"center",
    borderRadius:12,
    top:-20
  }}><Text style={{color:"white",fontWeight:450}}>Next Step</Text></View></TouchableOpacity>
      </View>
      <View style={{width:15,height:15,borderRadius:"100%",backgroundColor:"#1FA609",top:-5,left:-25}}></View>
      <View style={{width:15,height:15,borderRadius:"100%",top:-20,left:-8,borderWidth:1,borderColor:"#1FA609"}}></View>
      <View style={{width:15,height:15,borderRadius:"100%",top:-35,left:10,borderWidth:1,borderColor:"#1FA609"}}></View>
      <View style={{width:15,height:15,borderRadius:"100%",top:-50,left:27,borderWidth:1,borderColor:"#1FA609"}}></View>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 210,
    height: 260,
    top:-56
  }, container: {    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor:"white"
  },parent:{
    color:"green",
    fontSize:20,
    fontWeight:500,
    top:-50
  }
});

export default ParentInterface;
