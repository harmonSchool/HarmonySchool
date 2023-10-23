import axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  Modal,
  FlatList,
  TouchableOpacity,
} from "react-native";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ADRESS_API from "../../serverUrl";

const Inscription = ({ navigation }) => {
  const { user } = useContext(MyContext);
  const [First_name, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");
  const [Class, setClass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const classes = [
    "First Class",
    "Second Class",
    "Third Class",
    "Fourt Class",
    "Second Class",
    "sixth Class",
  ];
  const [userId, setUserId] = useState("");

  const handleClassSelect = async(selectedClass) => {
    setClass(selectedClass);
    await AsyncStorage.setItem("Class", JSON.stringify(selectedClass));
    
    
   
    setModalVisible(false);
  };
  

  const handle = () => {
    AsyncStorage.getItem("userId");
    axios
      .post(`http://${ADRESS_API}:3000/student/add`, {
        First_name,
        LastName,
        Birthday,
        image: "dfghjhgfds",
        class: Class,
        users_idusers: user?.id,
        classes_idclasses: 1,
      })
      .then((res) => {
        alert("student added succesufully");
        navigation.navigate("Parent");
      })
      .catch((err) => {
        alert(err);
      });
  };

  return (
    <ScrollView style={{ backgroundColor: 'white', flex:1 , marginTop:"3%"}}>
        <View style={{...styles.container}} >
        <View style={styles.Edit } >
      <Image
    style={{width:40,
    height:40,
    marginLeft:56,marginTop:30
  
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
      <Text style={{fontSize:18, letterSpacing: 0.6,
        lineHeight: 29,
        textAlign: "left",
        color: "black",    flexShrink: 0,
      }}>Student Inscription</Text>
      
      </View>
            <View >
                
            <Text style={{color:"#66328E",marginTop:20,
          
          }}>First Name</Text>
            <TextInput onChangeText={setFirstName} style={{borderColor:"#66328E",backgroundColor:"#F2F2F2",borderWidth:1 ,marginTop:"10%" , height:45 , width:240 , borderRadius:8,marginTop:10 ,   backgroundColor: "rgba(248, 240, 240, 1)",
            borderWidth: 1,
            borderColor: "rgba(102, 50, 142, 1)",
            borderRadius: 7.681159973144531}} />

        
        

          
          <Text style={{ color: "#A901DB", marginTop: 20 }}>Last Name</Text>
          <TextInput
            onChangeText={setLastName}
            style={{
              borderColor: "#A901DB",
              backgroundColor: "#F2F2F2",
              borderWidth: 1,
              marginTop: "10%",
              height: 45,
              width: 240,
              borderRadius: 8,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "#A901DB", marginTop: 20 }}>
            Date Of Birthday
          </Text>
          <TextInput
            onChangeText={setBirthday}
            style={{
              borderColor: "#A901DB",
              backgroundColor: "#F2F2F2",
              borderWidth: 1,
              marginTop: "10%",
              height: 45,
              width: 240,
              borderRadius: 8,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "#A901DB", marginTop: 20 }}>Current Class</Text>
          <TouchableOpacity
            style={{
              borderColor: "#A901DB",
              backgroundColor: "#F2F2F2",
              borderWidth: 1,
              marginTop: "10%",
              height: 45,
              width: 240,
              borderRadius: 8,
              marginTop: 10,
              justifyContent: "center",
              paddingLeft: 10,
            }}
            onPress={() => {setModalVisible(true)
              }}
          >
            <Text>{Class || "Select Class"}</Text>
          </TouchableOpacity>
          <Modal
            animationType="slide"
            transparent={true}
            visible={modalVisible}
            onRequestClose={() => {
              setModalVisible(!modalVisible);
            }}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <FlatList
                  data={classes}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      onPress={() => handleClassSelect(item)}
                      style={styles.modalItem}
                      
                    >
                      <Text>{item}</Text>
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
            <Text style={{color:"#66328E",marginTop:20}}>Current_graduation_Certificate</Text>
            <View style={styles.img}></View><View  style={styles.btn}>
  <Text  style={styles.Log} onPress={()=>handle() }>Send</Text>
</View>

            
</View>

        </View>
     
    </ScrollView>
  )
}
const styles=StyleSheet.create({

  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalContent: {
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 10,
    padding: 10,
  },img:{
        width:80,
        height:80,
        borderRadius:10,
        borderWidth:1,
        borderColor:"#66328E",
        marginLeft:0,
        marginTop:30
    },modalItem: {
      padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
    },Log:{
        color:"#fff",
        marginLeft:90,
        marginTop:20
      },btn:{
        marginTop:30,
        width:205,
        height:60,
        borderRadius:8,
        marginLeft:14,
        backgroundColor:"#66328E"
      },container: {    flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        paddingBottom:30
      }
})

export default Inscription;
