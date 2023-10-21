import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Languages = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>Subjects</Text>
      </View>
      <View style={styles.rectanglesContainer}>
        <View style={styles.rectangle}>
          <Text style={styles.languageText}
           onPress={()=>{navigation.navigate("ModuleArabic")}}>Arabic</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.languageText}
           onPress={()=>{navigation.navigate("ModuleFrensh")}}>Frensh</Text>
        </View>
        <View style={styles.rectangle}>
          <Text style={styles.languageText}
           onPress={()=>{navigation.navigate("ModuleEnglish")}}>English</Text>
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
    height: '75%',
    backgroundColor: '#DBC8E4',
  },
  rectContainer: {
    backgroundColor: '#66328E',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    marginTop: -20,
    alignSelf: 'center',
  },
  teacherText: {
    fontSize: 20,
    color: 'white',
  },
  rectanglesContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rectangle: {
    width: 300,
    height: 60,
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 10,
  },
  languageText: {
    fontSize: 20,
  },
});

export default Languages;
