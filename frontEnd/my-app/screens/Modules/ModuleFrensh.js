import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBook } from '@fortawesome/free-solid-svg-icons'; // Import the book icon from FontAwesome
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Frensh = () => {
  return (
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>Frensh</Text>
      </View>
      <View style={styles.rectanglesContainer}>
      <View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>"La Révolution Française</Text>
  </View>
</View>
<View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>Cause</Text>
  </View>
</View>
<View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>Consequence</Text>
  </View>
</View>
<View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>Imperatif</Text>
  </View>
</View>
<View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>theatre</Text>
  </View>
</View>
<View style={styles.rectangle}>
  <View style={styles.rowContainer}>
    <View style={styles.iconContainer}>
      <FontAwesomeIcon icon={faBook} size={24} color="purple" style={styles.icon} />
    </View>
    <Text style={styles.languageText}>orthographe</Text>
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
  rowContainer: {
    flexDirection: 'row', 
    alignItems: 'left',
    marginRight:140,
    
  },
  iconContainer: {
    marginRight: 10, 
  },
  icon: {
    
    fontSize: 24,
  },
  languageText: {
    fontSize: 18,
     
  },
  
});

export default Frensh;
