import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const Payment = () => {
  const navigation = useNavigation();

  const trimesters = [false, false, false];
  const months = Array(10).fill(false);

  const handleUnpaidButtonClick = () => {
    navigation.navigate('PaymentMethod');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Cantine Payment</Text>
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <View style={styles.paymentSection}>
          <Text style={styles.subHeader}>Trimester Payments</Text>
          {trimesters.map((isPaid, index) => (
            <View key={index} style={styles.periodContainer}>
              <Text style={styles.periodText}>Trimester {index + 1}</Text>
              <TouchableOpacity style={styles.unpaidButton} onPress={handleUnpaidButtonClick}>
                <Text style={styles.buttonText}>UNPAID</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
        <View style={styles.paymentSection}>
          <Text style={styles.subHeader}>Monthly Payments</Text>
          {months.map((isPaid, index) => (
            <View key={index} style={styles.periodContainer}>
              <Text style={styles.periodText}>Month {index + 1}</Text>
              <TouchableOpacity style={styles.unpaidButton} onPress={handleUnpaidButtonClick}>
                <Text style={styles.buttonText}>UNPAID</Text>
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 20,
    color: '#66328E',
    top:15
  },
  contentContainer: {
    padding: 20,
  },
  paymentSection: {
    marginBottom: 20,
  },
  subHeader: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'black',
    marginBottom: 10,
  },
  periodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 15,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
    elevation: 5,
    marginBottom: 10,
  },
  periodText: {
    fontSize: 18,
    color: '#333',
  },
  unpaidButton: {
    backgroundColor: '#4CAD3C',
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

export default Payment;
