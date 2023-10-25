import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Modules = () => {
  const navigation = useNavigation();
  
const image1 = () => {
    navigation.navigate("Languages")
  };
  const image2 = () => {
    navigation.navigate("ModuleMath")
  };
  const image3 = () => {
    navigation.navigate("ModuleScience")
  };
  const image4 = () => {
    navigation.navigate("ModuleSport")
  };
  const image5 = () => {
    navigation.navigate("ModuleIt")
  };
  const image6 = () => {
    navigation.navigate("ModuleArts")
  };

 

  return (
    
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>Subjects</Text>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image1}>
        <Image
        style={{
        height:90,
        width:90,
        marginLeft:0,top:0
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/3898/3898150.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Languages</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image2}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:-8
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/3426/3426679.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Math</Text>
          </View>
        </View>
     
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image3}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:23
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/190/190124.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Science</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image4}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:23
      }}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGv-15mEz5ThsFXXMeme5EPmHyguE5hpqSdaaDXi9doKV-_KrL201kzsJODGXUjIjkv0&usqp=CAU'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Sport</Text>
          </View>
        </View>
        
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image6}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:80
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/5277/5277145.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Arts</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={image5}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:80
      }}
      source={{uri:'https://www.iconbunny.com/icons/media/catalog/product/4/0/4064.12-studying-on-laptop-icon-iconbunny.jpg'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>IT</Text>
          </View>
        </View>
        
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '150%',
    backgroundColor:"white",
    marginTop:-90
    
  },
  rectContainer: {
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: "130%",
    alignSelf: 'center',
    

  },
  teacherText: {
    width: 349,
    height: 31,
    fontFamily: "Poppins",
    fontSize: 25,
    fontWeight: "700",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#BA68C8",
    left : 130,
    top:-15
  },
  rectangles: {
    backgroundColor: 'white',
    width: 120,
    height: 140,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 30,
  },
  image: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  textContain: {
    marginTop: 10,
  },
  text: {
    fontSize: 18,
    fontWeight:"500"

  },
  imageRow: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginRight:25 
  },
});

export default Modules;
