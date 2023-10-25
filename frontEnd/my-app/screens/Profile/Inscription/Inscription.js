import axios from "axios";
import {StyleSheet,Text,View,TextInput,Button,Image,ScrollView,Modal,FlatList,TouchableOpacity} from "react-native";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ADRESS_API from "../../serverUrl";
import Adress from '../../IP'
import { SafeAreaView } from "react-native-safe-area-context";
const Inscription = ({ navigation }) => {
  const {iduser} = useContext(MyContext);
  const [First_name, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");
  const [clas, setClass] = useState("");
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
    axios.post(`http://${Adress}/student/add`, {
      First_name,
      LastName,
      Birthday,
      image: "dfghjhgfds",
      class: Class,
      users_idusers: iduser,
      classes_idclasses: 3
    })
    .then((res) => {
      alert('student added successfully'); 
      navigation.navigate('Parent');  
      console.log(iduser); 
    })
    .catch((err) => {
      console.log(err);  
    });
  }
  ;

  return (
    <ScrollView>
      <SafeAreaView></SafeAreaView>
      <View style={styles.container}>
     
     {/* <Text>Inscription</Text>
     <Text>Join your kid</Text>
        <View>
          <Text style={{ color: "#A901DB", marginTop: 20 }}>First Name</Text>
          <TextInput
            onChangeText={setFirstName}
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
            <Text>{clas || "Select Class"}</Text>
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
          <Text style={{ color: "#A901DB", marginTop: 20 }}>
            Current_graduation_Certificate
          </Text>
          <View style={styles.img}></View>
          <View style={styles.btn}>
            <Text style={styles.Log} onPress={()=>handle()}>
              Send
            </Text>
          </View>
        </View> */}

        <Text style={{marginTop:"7%",top:'-3%', color: "rgba(0, 0, 0, 1)"  ,  fontSize:16,fontWeight:"600",left:"12%"}}>Inscription</Text>
        <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)",top:'-3%'  ,  fontSize:20,fontWeight: "200",left:'5%'}}>join your children</Text>

<TextInput style={{width:"80%",height:"10%",backgroundColor:"A901DB"}}/>

      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "white",
   },
  // modalContent: {
  //   backgroundColor: "#fff",
  //   width: 250,
  //   borderRadius: 10,
  //   padding: 10,
  // },
  // img: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: "#A901DB",
  //   marginLeft: 0,
  //   marginTop: 20,
  // },
  // modalItem: {
  //   padding: 15,
  //   borderBottomWidth: 1,
  //   borderBottomColor: "#ccc",
  // },
  // Log: {
  //   color: "#fff",
  //   marginLeft: 90,
  //   marginTop: 20,
  // },
  // btn: {
  //   marginTop: 30,
  //   width: 205,
  //   height: 60,
  //   borderRadius: 8,
  //   marginLeft: 14,
  //   backgroundColor: "#A901DB",
  // },
  // container: {
  //   flex: 1,
  //   backgroundColor: "#fff",
  //   alignItems: "center",
  //   justifyContent: "center",
  //   paddingBottom: 30,
  // },
});

export default Inscription;