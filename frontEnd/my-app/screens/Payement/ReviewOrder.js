import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox } from 'react-native-elements';

const PaymentMethod = ({ navigation }) => {
  const [tuitionChecked, setTuitionChecked] = useState(false);
  const [tuitionQuarterChecked, setTuitionQuarterChecked] = useState(false);
  const [breakfastChecked, setBreakfastChecked] = useState(false);
  const [breakfastQuarterChecked, setBreakfastQuarterChecked] = useState(false);
  const [busChecked, setBusChecked] = useState(false);
  const [busQuarterChecked, setBusQuarterChecked] = useState(false);

  const handleTuitionCheckbox = () => {
    setTuitionChecked(!tuitionChecked);
    setBreakfastChecked(false);
    setBusChecked(false); // Uncheck the other pairs
  };

  const handleBreakfastCheckbox = () => {
    setBreakfastChecked(!breakfastChecked);
    setTuitionChecked(false);
    setBusChecked(false); // Uncheck the other pairs
  };

  const handleBusCheckbox = () => {
    setBusChecked(!busChecked);
    setTuitionChecked(false);
    setBreakfastChecked(false); // Uncheck the other pairs
  };

  const handleNextButtonPress = () => {
    let selectedOption = '';

    if (tuitionChecked) {
      selectedOption = 'School Tuition';
    } else if (breakfastChecked) {
      selectedOption = 'Breakfast';
    } else if (busChecked) {
      selectedOption = 'Bus';
    }

    if (selectedOption) {
      Alert.alert(
        '',
        `You have selected ${selectedOption}. Are you sure you want to proceed?`,
        [
          {
            text: 'Cancel',
            style: 'cancel',
          },
          {
            text: 'OK',
            onPress: () => {
              // Handle the "OK" button press here
              // You can put your logic for proceeding here
            },
          },
        ],
        { cancelable: false }
      );
    } else {
      Alert.alert('Please select an option.');
    }
  };

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        
      </View>
      <Image
        source={require('../../assets/violet.png')}
        style={styles.image}
      />
      <Text style={styles.checkout}>CHECKOUT</Text>

      <View style={styles.boxContainer}>
        <View style={styles.box}>
          <Image
            source={require('../../assets/tuition.png')}
            style={styles.boxImage}
          />
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>School Tuition</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="Per Month - $100"
                checked={tuitionChecked}
                onPress={handleTuitionCheckbox}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="Per Quarter - $250"
                checked={tuitionQuarterChecked}
                onPress={() => setTuitionQuarterChecked(!tuitionQuarterChecked)}
                containerStyle={styles.checkbox}
              />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Image
            source={require('../../assets/eat.png')}
            style={styles.boxImage}
          />
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>Breakfast</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="Per Month - $100"
                checked={breakfastChecked}
                onPress={handleBreakfastCheckbox}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="Per Quarter - $250"
                checked={breakfastQuarterChecked}
                onPress={() => setBreakfastQuarterChecked(!breakfastQuarterChecked)}
                containerStyle={styles.checkbox}
              />
            </View>
          </View>
        </View>

        <View style={styles.box}>
          <Image
            source={require('../../assets/bus.png')}
            style={styles.boxImage}
          />
          <View style={styles.boxContent}>
            <Text style={styles.boxTitle}>Bus</Text>
            <View style={styles.checkboxContainer}>
              <CheckBox
                title="Per Month - $50"
                checked={busChecked}
                onPress={handleBusCheckbox}
                containerStyle={styles.checkbox}
              />
              <CheckBox
                title="Per Quarter - $120"
                checked={busQuarterChecked}
                onPress={() => setBusQuarterChecked(!busQuarterChecked)}
                containerStyle={styles.checkbox}
              />
            </View>
          </View>
        </View>
      </View>

      <View style={styles.contactInfoContainer}>
        <View style={styles.contactInfo}>
          <FontAwesome name="map-marker" size={16} style={styles.icon} />
          <Text style={styles.contactInfoText}>16 Ghazala, Ariana/Tunis</Text>
        </View>
        <View style={styles.contactInfo}>
          <FontAwesome name="phone" size={16} style={styles.icon} />
          <Text style={styles.contactInfoText}>+216 27011 482</Text>
        </View>
        <View style={styles.contactInfo}>
          <FontAwesome name="envelope" size={16} style={styles.icon} />
          <Text style={styles.contactInfoText}>school@gmail.com</Text>
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={handleNextButtonPress}>
        <Text style={styles.buttonText}>Next</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  header: {
    backgroundColor: '#4285F4',
    padding: 16,
  },
  headerText: {
    color: 'white',
    fontSize: 24,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
  },
  checkout: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  boxContainer: {
    margin: 16,
  },
  box: {
    backgroundColor: 'white',
    borderRadius: 8,
    elevation: 5,
    marginBottom: 16,
    padding: 16,
  },
  boxImage: {
    width: 60,
    height: 60,
  },
  boxContent: {
    flex: 1,
    marginLeft: 10,
   
  },
  boxTitle: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  checkboxContainer: {
    marginTop: 10,
  },
  checkbox: {
    backgroundColor: 'white',
    borderWidth: 0,
  },
  contactInfoContainer: {
    margin: 16,
  },
  contactInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 8,
  },
  icon: {
    marginRight: 8,
    color: '#4285F4',
  },
  contactInfoText: {
    fontSize: 16,
  },
  button: {
    backgroundColor: '#DBC8E4',
    borderRadius: 8,
    margin: 16,
    padding: 16,
    alignItems: 'center',
  },
  buttonText: {
    color: 'white',
    fontSize: 20,
  },
});

export default PaymentMethod;
