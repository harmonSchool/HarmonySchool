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
    AsyncStorage.setItem("First_name", First_name);
   AsyncStorage.setItem("LastName", LastName);
   
    AsyncStorage.getItem("userId");
    console.log(user)
   axios.post(`http://192.168.1.25:2023/student/add`, {
        First_name : First_name,
        LastName : LastName,
        Birthday : Birthday , 
        image: "image",
        class: Class,
        users_idusers: user?.id,
        classes_idclasses: 1,
      })
      .then((res) => {

        AsyncStorage.setItem('First_name', First_name);
      AsyncStorage.setItem('LastName', LastName);
        alert("student added succesufully");
        navigation.navigate("Parent");
      })
      
      .catch((err) => {
        console.log(err)
        alert(err);
      });
  };

  return (
    <ScrollView>
    
      <View style={styles.container}>
        <View style={styles.Edit}>
          <Image
            style={{ width: 40, height: 40, marginLeft: 56, marginTop: 50 }}
            source={{
              uri: "https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png",
            }}
          />
          <Text style={{ fontSize: 18 }}>Student Inscription</Text>
        </View>
        <View>
          <Text style={{ color: "#66328E", marginTop: 20 }}>First Name</Text>
          <TextInput
            onChangeText={setFirstName}
            style={{
              borderColor: "#66328E",
              borderWidth: 1.3,
              marginTop: "10%",
              height: 45,
              width: 300,
              borderRadius: 8,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "#66328E", marginTop: 20 }}>Last Name</Text>
          <TextInput
            onChangeText={setLastName}
            style={{
              borderColor: "#66328E",
              borderWidth: 1.3,
              marginTop: "10%",
              height: 45,
              width: 300,
              borderRadius: 8,
              marginTop: 10,
            }}
          />
          <Text style={{ color: "#66328E", marginTop: 20 }}>
            Date Of Birthday
          </Text>
          <TextInput
            onChangeText={setBirthday}
            style={{
              borderColor: "#66328E",
              borderWidth: 1.3,
              marginTop: "10%",
              height: 45,
              width: 300,
              borderRadius: 8,
              marginTop: 10,
            }}
          />
          <Text style={{ 
            top:5,
            width: 111,
            height: 28,
            fontFamily: "Poppins",
            fontSize: 12.28985595703125,
            fontWeight: "700",
            fontStyle: "normal",
            lineHeight: 27.652175903320312,
            color: "#66328E"

           }}>Current Class</Text>
          <TouchableOpacity
            style={{
              borderColor: "#66328E",
              borderWidth: 1.3,
              marginTop: "10%",
              height: 45,
              width: 300,
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
          <Text style={{ color: "#66328E", marginTop: 20 }}>
            Current_graduation_Certificate
          </Text>
          <View style={styles.img}></View>
          <View style={styles.btn}>
            <Text style={styles.Log} onPress={() => handle()}>
              Send
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({

  
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    
  },
  modalContent: {
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 10,
    padding: 10,
  
  },
  img: {
    width: 80,
    height: 80,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "#66328E",
    marginLeft: 0,
    marginTop: 20,
  },
  modalItem: {
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ccc",
  },
  Log: {
    color: "#fff",
    marginLeft: 90,
    marginTop: 20,
    
  },
  btn: {
    marginTop: 30,
    width: 205,
    height: 60,
    marginLeft:"12%",
    borderRadius: 8,
    backgroundColor: "#66328E",
    
  },
  container: {
    flex: 1,
    width :"100%",
    backgroundColor: "#fff",
    alignItems: "center",
    height:820,
    justifyContent: "center",
    paddingBottom: 30,
  },
});

export default Inscription;