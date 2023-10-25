import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import * as Animatable from 'react-native-animatable';

const Options = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const navigation = useNavigation();

  const handlePaymentNavigation = (Payment) => {
    navigation.navigate("Payment");
  };

  useEffect(() => {
    const animationInterval = setInterval(() => {
      this.optionsContainerRef.pulse(1000);
    }, 1000);
    return () => clearInterval(animationInterval);
  }, []);

  return (
    <View style={styles.container}>
      <Animatable.View style={styles.rectContainer} animation="pulse" ref={(ref) => (this.optionsContainerRef = ref)}>
        <Text style={styles.teacherText}>Payment Options</Text>
      </Animatable.View>

      <View style={styles.textContain}>
        <Animatable.View style={styles.rectContainer} animation="pulse" ref={(ref) => (this.optionsContainerRef = ref)}>
          <TouchableOpacity onPress={() => setSelectedOption('cantine')}>
            <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6192/6192074.png' }} />
            <Image style={styles.image} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/3774/3774090.png' }} />
          </TouchableOpacity>
        </Animatable.View>

        <View>
          <Text style={styles.text1}></Text>
        </View>

        <Text style={{ marginHorizontal: 30 }}> </Text>

        <TouchableOpacity onPress={() => setSelectedOption('bus')}>
          <Text style={selectedOption === 'bus' ? styles.selectedText : styles.text}></Text>
        </TouchableOpacity>
      </View>

      {selectedOption && (
        <View style={styles.rectangles}>
          <TouchableOpacity style={styles.button} onPress={() => handlePaymentNavigation('Payement', 'quarter')}>
            <Text style={styles.buttonText}>Per quarter</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.button} onPress={() => handlePaymentNavigation('Payement', 'month')}>
            <Text style={styles.buttonText}>Per mounth</Text>
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
    left:4
  },
  rectContainer: {
    marginTop: -20,
    alignSelf: 'center',
  },
  teacherText: {
    fontSize: 30,
    color: 'black',
    fontWeight: '400',
    top: -90,
    left: 8,
  },
  textContain: {
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
  },
  text1: {
    top: 38,
    left: -150,
    fontSize: 25,
    fontWeight: '500',
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
    width: 257,
height: 45,
borderRadius: 25,
backgroundColor: "#4CAD3C",
shadowColor: "rgba(186, 104, 200, 1.0)",
shadowOffset: {
	width: 0,
	height: 0
},
shadowRadius: 8,
shadowOpacity: 1 , 
    marginVertical: 8,

  },
  buttonText: {
    color: 'white',
    fontSize: 22,
    textAlign: 'center',
    fontWeight: '500',
    top:5
  },
  image: {
    width: 220,
    height: 220,
    marginLeft: '28%',
    marginTop: -54,
  },
});
