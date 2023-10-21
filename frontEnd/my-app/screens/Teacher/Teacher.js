import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Teacher = () => {
  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.homeDiv}>
        <Text style={styles.homeText}></Text>
      </View>

      <View style={styles.imageContainer}>
      <Image
      style={{
      height:90,
      width:90,
      marginLeft:0,top:30
    }}
    source={{uri:'https://www.learningprofessionals.af.mil/portals/87/Images/S2C%20Images/Article%20Image_1.png?ver=VSSxf_st2FKR3mLATXb3dQ%3D%3D'}} />
      </View>

      <View style={styles.text}>
        <Text style={{ color: '#66328E',left:-8, fontWeight:"900" , fontSize:16 , top:-130 }}>Welcome Mr Houssem</Text>
      </View>
      <View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <Image
  style={{
  height:100,
  width:100,
  marginLeft:-10,marginTop:40
}}
source={{uri:'https://prod2-sprcdn-assets.sprinklr.com/50400/538cb2ba-4b9a-4111-b99f-e3e27828a816-239440336/Audience_Icon.png'}} />
    <Text style={{ color: '#66328E',left:-5 , fontWeight:"800"}}>Profile</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
  <Image
  style={{
  height:90,
  width:90,
  marginLeft:12,marginTop:50
}}
source={{uri:'https://cdn-icons-png.flaticon.com/512/1205/1205526.png'}} />
    <Text style={{ color: '#66328E',left:6 , fontWeight:"800"   }}>Modules</Text>
  </View>
</View>

<View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
    <Image
      source={require('../../../my-app/assets/exams.png')}
      style={{width:100 , height:100 , marginTop : 30}}
    />
    <Text style={{ color: '#66328E',left:0 , fontWeight:"800" }}>Punishment</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
  <Image
  style={{
  height:100,
  width:100,
  marginLeft:19,marginTop:29
}}
source={{uri:'https://cdn-icons-png.flaticon.com/512/2436/2436799.png'}} />

    <Text style={{ color: '#66328E',left:2 , fontWeight:"800" }}>Notes</Text>
  </View>
</View>


<View style={{...styles.imageContainer   }} >
  <View style={styles.imageTextWrapper}>
  <Image
  style={{
  height:100,
  width:100,
  marginLeft:10,marginTop:30
}}
source={{uri:'https://cdn-icons-png.flaticon.com/512/9583/9583531.png'}} />
    <Text style={{ color: '#66328E',left:5 , fontWeight:"800", marginTop:-5}}>Students</Text>
  </View>
  <View style={{ ...styles.imageTextWrapper, marginLeft: 30  ,marginTop:25}}>
    <Image
      source={require('../../../my-app/assets/contact.png')}
      style={styles.imaged}
    />
    <Text style={{ color: '#66328E',  left:0 , fontWeight:"800" }}>contact us</Text>
  </View>
</View>

    </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: '120%',
    paddingTop: 50,
    marginLeft : -50
  },
  homeDiv: {
    backgroundColor: 'white',
    width: 312,
    height: 65,
    marginLeft: 21,
    marginTop:60,
  },
  homeText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#65328e',
  },
  imageContainer: {
    marginTop: 20,
    width: 100,
    height: 50,
    marginLeft: 21, 
  },
 
  text: {
    marginLeft: 25, 
    marginTop: 10, 
  },
  imaged: {
    width: 100, 
    height: 100,
    borderRadius: 10, 
    margin: 10, 
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  imageContainer: {
    flexDirection: 'row', 
    justifyContent: 'space-between', 
    marginTop: 20,
    marginLeft: 21,
  },
  imageTextWrapper: {
    alignItems: 'center',
  },
  imaged: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
  

});

export default Teacher;
