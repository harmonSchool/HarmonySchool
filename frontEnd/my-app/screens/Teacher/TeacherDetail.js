import React,{useState,useEffect,useContext} from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faComment } from '@fortawesome/free-solid-svg-icons';
import { useRoute } from '@react-navigation/native';
import { MyContext } from '../../useContext/useContext';
import axios from 'axios';
import AsyncStorage from '@react-native-async-storage/async-storage';
import ADRESS_API from '../serverUrl';

const TeacherDetail = () => {


  const [Class , setClass ]= useState();
  [data,setData]=useState([])
  const route=useRoute();
  const subject = route.params?.params.subject;
    console.log("class",AsyncStorage.getItem("Class"))
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem();
       setClass(value)
        
      } catch (error) {
        
      }
    };
    
 
    useEffect(() => {
  
      axios
        .get(`http://${ADRESS_API}:3001/teacher/getOneTeacher/${subject}/${Class}`)
        .then((response) => {
        console.log(response,"teacher");
        console.log(Class,"class");
        setData(response.data);
        console.log(data,"data");
        })
        .catch((error) => {
         
          console.error('Error fetching teacher data:', error);
        });
    },[]);
    
  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.centeredText}>Mr/Mss</Text>
        <View style={styles.centeredView}>
          {/* Contenu de la deuxième vue */}
          <View style={styles.contentContainer}>
          
            {/* Ellipse avec image */}
           
            <View >
            <Image
          
          style={styles.image}
        />
            </View>

            {/* Nom et prénom en gras */}
            <Text style={styles.name} ></Text>

            {/* Description de la personne */}
            <Text style={styles.description}></Text>

            {/* Rectangle avec le bouton "Send Message" et l'icône de chat */}
            <View style={styles.rectangle}>
              <FontAwesomeIcon icon={faComment} style={styles.chatIcon} />
              <Text  style={styles.sendMessage}>Send Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  detailContainer: {
    backgroundColor: '#DBC8E4',
    borderRadius: 10,
    width: '80%',
    height: '90%',
    padding: 20,
    marginTop: 40,
  },
  centeredView: {
    backgroundColor: 'white',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: 'purple',
    width: '100%',
    height: '90%',
    marginTop: 30,
  },
  centeredText: {
    textAlign: 'center',
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  ellipse: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: '#66328E',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 40,
    marginBottom: 10,
   
  },
  name: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  rectangle: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: '#66328E',
    borderRadius: 10,
  },
  chatIcon: {
    color: 'white',
    marginRight: 5,
  },
  sendMessage: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default TeacherDetail;