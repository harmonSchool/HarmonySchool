import React, { useState,useCallback } from 'react';
import { View, Text, StyleSheet, Image, Alert, ScrollView, TouchableOpacity , Button} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import { CheckBox  } from 'react-native-elements';
import { RadioButton } from 'react-native-paper';
import CheckoutScreen from '../Stripe/CheckoutScreen';



const PaymentMethod = ({ navigation}) => {

  const [name,setName] = useState('');
  const [amount,setAmount] = useState(1);
  const [studentId,setStudentId] = useState(1);
  const [classId,setClassId] = useState(2);

  const [value, setValue] = useState('100');




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

              <RadioButton.Group onValueChange={value => setValue(value)} value={value} >
                <RadioButton.Item label="Per Month - $100" value="100"  />
                <RadioButton.Item label="Per Quarter - $250" value="250" />
              </RadioButton.Group>
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

              <RadioButton.Group onValueChange={value => setValue(value)} value={value} >
                <RadioButton.Item label="Per Month - $100" value="100.0" />
                <RadioButton.Item label="Per Quarter - $250" value="250.0" />
              </RadioButton.Group>
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

              <RadioButton.Group onValueChange={value => setValue(value)} value={value}>
                <RadioButton.Item label="Per Month - $50" value="50" />
                <RadioButton.Item label="Per Quarter - $120" value="120" />
              </RadioButton.Group>
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
    


      <Button      
            onPress={()=> navigation.navigate('Stripe' , {name : value,amount : value,studentId,classId})}
            title="Checkout"
            style={styles.button}>
  
              <Text
                color='black'
                fontSize='20'>
                  Payment
              </Text>
  
           </Button> 

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
  radioText : {
    marginLeft : 35,
    marginBottom : -20,

  }
});

export default PaymentMethod;
