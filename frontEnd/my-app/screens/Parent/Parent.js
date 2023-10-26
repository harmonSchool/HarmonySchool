import React, { useState } from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput, Button, Alert } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/native';

import { useContext,useEffect } from "react";
import { MyContext } from "../../useContext/useContext";
import axios from 'axios';
import Adress from '../IP'

const Parent = () => {
  
  const { isDarkMode, setMode,iduser,setUsersID,email} = useContext(MyContext);


  useEffect(() => {
 
    axios.post(`http://${Adress}:3000/user/getUserByemail`, { email })
      .then((res) => {
        setUsersID(res.data);
        console.log("succes " + iduser);
      })
      .catch((err) => {
        console.log('the error ' + err);
      });
  
}, [iduser]);


  const navigation = useNavigation();
  const [showInput, setShowInput] = useState(false);
  const route = useRoute(); // Use useRoute to access the route's params
  const [message, setMessage] = useState(''); // Add state for the message

  const [allUserEmails, setAllUserEmails] = useState([]);
  const [paymentAccess, setPaymentAccess] = useState(false); // Added payment access state

  const [idUsers, setIdUsers] = useState("");

  const userEmailFromLogin = route.params?.userEmail || '';

  const adminKey = route.params?.adminKey || '';
  console.log("Admin Key in Parent component:", adminKey);

  console.log('Email from route params:', userEmailFromLogin);

  const handleImageClick = () => {
    navigation.navigate("Profile");
  };

  const handleImageClick1 = () => {
    navigation.navigate("Inscription");
  };

  const handleImageClick2 = () => {
    navigation.navigate("Modules");
  };

  const handleImageClick3 = () => {
    navigation.navigate("Teachers");
  };

  const handleImageClick4 = () => {
    navigation.navigate("Student");
  };

  const handleImageClick5 = () => {
    navigation.navigate("Options");
  };

  

  const handleImageClick6 = () => {
    navigation.navigate("ReviewOrder");

  };


  const handleImageClick7 = () => {
    navigation.navigate("Notes");
  };

  const handleImageClick8 = () => {
    navigation.navigate("Contact");
  };

  const hideInput = () => {
    setShowInput(false);
  };

  const getAllUserData = async () => {
    try {
      const response = await axios.get(`http://192.168.1.5:2023/oneUser/${idUsers}`);
      if (response.status === 200) {
        const data = response.data;
        const emails = data.map(user => user.email);
        setAllUserEmails(emails);
        console.log('Emails:', emails);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    console.log("Email prop in Parent component:", route.params?.userEmail);
  }, []);

  const sendEmail = (recipientEmail) => {
    const mailOptions = {
      from: userEmailFromLogin, // Use the user's email obtained from route.params
      to: recipientEmail,
      subject: 'Payment Access Denied',
      text: 'Payment access is not granted by the admin.',
    };

    axios
      .post('http://192.168.1.5:2023/send-email', mailOptions)
      .then((response) => {
        if (response.status === 200) {
          Alert.alert('Notification email sent successfully.');
        } else {
          Alert.alert('Failed to send notification email.');
        }
      })
      .catch((error) => {
        console.error('Error sending notification email:', error);
      });
  };

  useEffect(() => {
    getAllUserData();
    console.log("Email prop in Parent component:", route.params?.userEmail);

    // Set the message here
    setMessage('This is a message from the Parent component.');
  }, []);

  const notifyAdmin = async () => {
    // Retrieve the user's email from AsyncStorage
    axios
      .post('http://192.168.1.5:2023/notify-admin', {
        message: `This user wants to pay pay something you need to check the inofrmation of student to give him the access to get pay ${userEmailFromLogin}`,
      })
      .then((response) => {
        if (response.status === 200) {
          // Success
        } else {
          Alert.alert('Failed to notify the admin.');
        }
      })
      .catch((error) => {
        console.error('Error notifying the admin:', error);
        Alert.alert('Failed to notify the admin.');
      });
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homeDiv}>
          <Text style={styles.homeText}></Text>
        </View>
        <Image
        style={{width:40,
        height:40,
        left:-150,top:25
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/6915/6915987.png'}} />
    
        <View style={styles.text}>
          <Text style={{ color: '#66328E', fontSize: 18, fontWeight: "900" }}>
          </Text>
        </View>

        <View style={{ ...styles.imageContainer }}>
          <View style={styles.imageTextWrapper}>
            <TouchableOpacity onPress={handleImageClick}>
              <Image
              source={{uri:'https://cdn3d.iconscout.com/3d/premium/thumb/profile-5590850-4652486.png'}} 
              style={{height:110 , width:150 , top :8 , left : -8}}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', marginRight: 25, fontWeight: "800", left: 5 , top:8 }}>
              Profile
            </Text>
          </View>
          <TouchableOpacity onPress={handleImageClick1}>
            <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
            <Image
            style={{width:100,
            height:100,
          left:-15,top:12
          }}
          source={{uri:'https://cdn-icons-png.flaticon.com/512/2247/2247728.png'}} />
              <Text style={{ color: 'black', marginRight: 10, left: -12, fontWeight: "800", top:16}}>
                Inscription
              </Text>
            </View>
          </TouchableOpacity>
        </View>

        <View style={{ ...styles.imageContainer }}>
          <View style={styles.imageTextWrapper}>
            
          </View>
          <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
            <TouchableOpacity onPress={handleImageClick3}>
            <Image
            style={{width:100,
            height:100,
          left:60,top:10
          }}
          source={{uri:'https://i.pinimg.com/originals/12/92/10/129210c6c1fd1970733f46d2f4951dc3.png'}} />
            </TouchableOpacity>
            <Text style={{ color: 'black', left: 60, fontWeight: "800"  , top:13}}>Teacher</Text>
          </View>
        </View>

        <View style={{ ...styles.imageContainer }}>
          <View style={styles.imageTextWrapper}>
            <TouchableOpacity onPress={handleImageClick4}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/354/354637.png'}} 
              style={{width:100 , height:100 , top:12 , left:6}}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', left: 0, fontWeight: "800"  , top:14 , left :5 }}>Student</Text>
          </View>
          <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
            <TouchableOpacity onPress={handleImageClick5}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/164/164436.png'}} 
                style={{height:95 , width:95 , top:17 , left :15}}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', left: 0, fontWeight: "800" , left :15 , top:18 }}> payment Options</Text>
          </View>
        </View>

        <View style={{ ...styles.imageContainer }}>
          <View style={styles.imageTextWrapper}>
            <TouchableOpacity onPress={handleImageClick6}>
              <Image
              source={{uri:'https://static-00.iconduck.com/assets.00/payment-gateway-icon-2048x1883-b7i39kz6.png'}}
              style={styles.imaged}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', left: 0, fontWeight: "800" }}>Payment</Text>
          </View>
          <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>
            <TouchableOpacity onPress={handleImageClick7}>
              <Image
              source={{uri:'https://cdn-icons-png.flaticon.com/512/3982/3982361.png'}}
              style={{width:100 , height:100 , top : 8 , left:10}}
              />
            </TouchableOpacity>
            <Text style={{ color: 'black', left: 5, fontWeight: "800" , top:19 }}>Notes</Text>
          </View>
        </View>

        <View style={styles.imageTextWrapper}>
          <TouchableOpacity onPress={handleImageClick8}>
            <Image
            source={{uri:'https://cdn-icons-png.flaticon.com/512/4833/4833912.png'}}
            style={{top:"-410%" , height:100 , width:100 , left : -65}}
            />
            
          </TouchableOpacity>
          <Text style={{ color: 'black', fontWeight: "800" , top:"-340%" , left:-57 }}>Contact us</Text>

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
    width: '150%',
    marginTop: -90,
    left:-110, 
    top:25
  },
  homeDiv: {
    width: 312,
    height: 50,
    marginTop: 70,
  },
  homeText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    marginTop: 20,
    color: '#65328e',
  },
  imageContainer: {
    marginTop: 20,
    width: 100,
    height: 50,
    left: 21, // Adjust the marginLeft to align the image with the "Home" text
  },
  text: {
    marginLeft: 21, // Adjust marginLeft to align with the image and "Home" text
    marginTop: 10, // Add margin-top to create some space between the image and "Create Account"
  },
  imaged: {
    width: 100, // Adjust the width and height to make them square
    height: 100,
    borderRadius: 10, // Add border radius for rounded corners
    margin: 10, // Add margin for spacing between images
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
    flexDirection: 'row', // Arrange the images and text horizontally
    justifyContent: 'space-between', // Add space between the images
    marginTop: 20,
    marginLeft: 21,
  },
  imageTextWrapper: {
    alignItems: 'center', // Center items (image and text) vertically
  }
});

export default Parent;
