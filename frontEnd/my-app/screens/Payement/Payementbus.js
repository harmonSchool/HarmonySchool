import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Import useNavigation from React Navigation

const Paymentbus = () => {
  const navigation = useNavigation(); 

  const [trimesters, setTrimesters] = useState([false, false, false]);
  const [months, setMonths] = useState(Array(10).fill(false)); 

  const handleUnpaidButtonClick = () => {
    
    navigation.navigate('PaymentMethod'); 
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.header}> Bus Payment </Text>
      <Text style={styles.subHeader}>Trimester Payments</Text>
      {trimesters.map((isPaid, index) => (
        <View key={index} style={styles.periodContainer}>
          <Text style={styles.periodText}>Trimester {index + 1}</Text>
          <TouchableOpacity style={styles.unpaidButton} onPress={handleUnpaidButtonClick}>
            <Text style={styles.buttonText}>Unpaid</Text>
          </TouchableOpacity>
        </View>
      ))}
      <Text style={styles.subHeader}>Monthly Payments</Text>
      {months.map((isPaid, index) => (
        <View key={index} style={styles.periodContainer}>
          <Text style={styles.periodText}>Month {index + 1}</Text>
          <TouchableOpacity style={styles.unpaidButton} onPress={handleUnpaidButtonClick}>
            <Text style={styles.buttonText}>Unpaid</Text>
          </TouchableOpacity>
        </View>
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#F0F0F0',
    padding: 20,
    marginTop: 30,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
    color: '#66328E',
  },
  subHeader: {
    fontSize: 20,
    fontWeight: 'bold',
    marginTop: 20,
    color: '#66328E',
  },
  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 10,
    backgroundColor: 'white',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  periodText: {
    fontSize: 18,
    color: '#333',
  },
  unpaidButton: {
    backgroundColor: '#F44336',
    borderRadius: 10,
    padding: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
    fontWeight: 'bold',
  },
});

export default Paymentbus;
