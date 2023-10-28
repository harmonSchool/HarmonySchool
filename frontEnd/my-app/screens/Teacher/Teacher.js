import React,{useEffect} from 'react';
import { View, Text, StyleSheet, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import axios from 'axios';
import Adress from '../IP'
import { MyContext } from '../../useContext/useContext';

import { useContext } from 'react';
const Teacher = () => {
  const navigation = useNavigation();
  const {setData,data,setUsersID,iduser,student,setStud, isDarkMode, setMode, setUser,email, setEmail,idclass,setIdClass,first_name} = useContext(MyContext);

  const handleNavigateToStudents = () => {
    navigation.navigate('StudentClass');
  };

  //StudentClass

  useEffect(() => {
 
    axios.post(`http://${Adress}/user/getUserByemail`, { email })
      .then((res) => {
        setUsersID(res.data);
        console.log(first_name);
        console.log("your data is here "+ data);

        console.log("succes " + iduser);
        console.log("student id "+student);

      })
      .catch((err) => {
        console.log('the error ' + err);
      });})

  useEffect(()=>{

    axios.get(`http://${Adress}/user/getById/${iduser}`).then((res) => {
      const datata=res.data
      setData(datata);
      console.log("your data is here "+ data);
    })
    .catch((err) => {
      console.log(err);
    });
  }, [iduser]);



  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.homeDiv}>
          <Text style={styles.homeText}></Text>
        </View>

        <View style={styles.imageContainer}>
         
        </View>

        <View style={styles.text}>
          <Text style={{  left: -65, fontWeight: '500', fontSize: 15, top: -140, textAlign: 'center', marginTop: 20 }}>
            Welcome Teacher
          </Text>
          <Text style={{  left: -65, fontWeight: '400', fontSize: 13, top: -108, textAlign: 'center', marginTop: -20 }}>check student information</Text>
        </View>

        <View>
          <View style={{ ...styles.imageContainer }}>
            <View style={styles.imageTextWrapper}>
            <TouchableOpacity onPress={() => navigation.navigate('Profile')}>

              <Image
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: -10,
                  marginTop: -50,
                }}
                source={{
                  uri: 'https://prod2-sprcdn-assets.sprinklr.com/50400/538cb2ba-4b9a-4111-b99f-e3e27828a816-239440336/Audience_Icon.png',
                }}
              />
              <Text style={{  left: -5, fontWeight: '400',top:'-10', textAlign: 'center' }}>Profile</Text>
              </TouchableOpacity>



              
            </View>
            <View style={{ ...styles.imageTextWrapper, marginLeft: 30 }}>


            <TouchableOpacity onPress={() => navigation.navigate('SelectChild')}>

              <Image
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: 19,
                  marginTop: -50,
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/2436/2436799.png',
                }}
              />
              
              <Text style={{  left: 2, fontWeight: '400',top:'-10', textAlign: 'center' }}>Notes</Text>
              </TouchableOpacity>

            </View>
            
          </View>

          <View style={{ ...styles.imageContainer }}>
            <TouchableOpacity style={styles.imageTextWrapper} onPress={handleNavigateToStudents}>
              <Image
                style={{
                  height: 100,
                  width: 100,
                  marginLeft: 0,
                  marginTop: 30,
                }}
                source={{
                  uri: 'https://cdn-icons-png.flaticon.com/512/9583/9583531.png',
                }}
              />
              <Text style={{  left: 0, fontWeight: '400',top:'-10', marginTop: -5, textAlign: 'center' }}>
                Students
              </Text>
            </TouchableOpacity>
            <View style={{ ...styles.imageTextWrapper, marginLeft: 30, marginTop: 25 }}>
            <TouchableOpacity onPress={() => navigation.navigate('Contact')}>
            <Image
              source={require('../../../my-app/assets/contact.png')}
              style={styles.imaged}
            />
            <Text style={{  fontWeight: '400',top:'-10', textAlign: 'center' }}>Contact Us</Text>
          </TouchableOpacity>


          <TouchableOpacity onPress={() => navigation.navigate('CalendarScreen')}>

          <Image
            style={{
              height: 100,
              width: 100,
              marginLeft: -100,
              marginTop: 40,
            }}
            source={{
              uri: 'https://cdn-icons-png.flaticon.com/512/1869/1869397.png',
            }}
          />
          <Text style={{  left: -75, fontWeight: '400',top:'-10', textAlign: 'center' }}>Calender</Text>
          </TouchableOpacity>


            </View>
          </View>
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
    width: '120%',
    height:"120%",
    paddingTop: 50,
    marginLeft: -40,
    height:900,
  },
  homeDiv: {
    backgroundColor: 'white',
    width: 312,
    height: 100,
    marginLeft: 21,
    marginTop: 10, // Ajustez cette valeur pour aligner plus haut
  },
  homeText: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'left',
    color: '#65328e',
  },
  imageContainer: {
    marginTop: 10, // Ajustez cette valeur pour aligner plus haut
    width: 100,
    height: 50,
    marginLeft: 21,
  },
 
  text: {
    marginLeft: 25,
    marginTop: 10,
  },
  imaged: {
    width: 100,
    height: 100,
    borderRadius: 10,
    margin: 10,
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
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10, // Ajustez cette valeur pour aligner plus haut
    marginLeft: 21,
  },
  imageTextWrapper: {
    alignItems: 'center',
  },
  imaged: {
    width: 80,
    height: 80,
    borderRadius: 10,
    margin: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
  }
});

export default Teacher;