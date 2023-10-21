import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handlePaymentNavigation = (Payement) => {
    navigation.navigate(Payement);
  };

  return (
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>Options</Text>
      </View>

      <View style={styles.textContain}>
        <TouchableOpacity
          onPress={() => setSelectedOption('cantine')}
        >
          <Text style={selectedOption === 'cantine' ? styles.selectedText : styles.text}>
            cantine
          </Text>
        </TouchableOpacity>
        <Text style={{ marginHorizontal: 30 }}> </Text>
        <TouchableOpacity
          onPress={() => setSelectedOption('bus')}
        >
          <Text style={selectedOption === 'bus' ? styles.selectedText : styles.text}>
            bus
          </Text>
        </TouchableOpacity>
      </View>

      {selectedOption && (
        <View style={styles.rectangles}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePaymentNavigation('Payement')} 
          >
            <Text style={styles.buttonText}>Payment par trimestre</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handlePaymentNavigation('Payement')}
          >
            <Text style={styles.buttonText}>Payment par mois</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default Options;

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
  textContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text: {
    fontSize: 30,
  },
  selectedText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  rectangles: {
    
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 60,
  },
  button: {
    backgroundColor: '#66328E',
    borderRadius: 10,
    padding: 10,
    marginVertical: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});