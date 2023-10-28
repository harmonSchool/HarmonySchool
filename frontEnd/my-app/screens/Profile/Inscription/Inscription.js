import axios from "axios";
import {StyleSheet,Text,View,TextInput,Button,Image,ScrollView,Modal,FlatList,TouchableOpacity} from "react-native";
import { useState, useEffect } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ADRESS_API from "../../serverUrl";
import Adress from '../../IP'
import AntDesign from 'react-native-vector-icons/AntDesign'
import WheelPickerExpo from "react-native-wheel-picker-expo";
// import BottomSheet from "react-native-simple-bottom-sheet";
import * as ImagePicker from "expo-image-picker";
import { Cloudinary } from "@cloudinary/url-gen";
import { SafeAreaView } from "react-native-safe-area-context";
const Inscription = ({ navigation }) => {
  const[hide,setHide]=useState(true)
  const {iduser,first_name,setFirst_name} = useContext(MyContext);
  const [First_name, setFirstName] = useState("");
  const [LastName, setLastName] = useState("");
  const [Birthday, setBirthday] = useState("");
  const [image, setImage] = useState("");
  const [Class, setClass] = useState("");
  const [modalVisible, setModalVisible] = useState(false);
  const [imageUrl, setImageUrl] = useState(null);
  const [message, setMessage] = useState("Select an image");
  const [dat, setDat] = useState("");

  const uploadImageToCloudinary = async (imageUri) => {
    try {
      const data = new FormData();
      data.append("file", {
        uri: imageUri,
        type: "image/jpeg",
        name: "image.jpg",
      });
      data.append("upload_preset", "efquzmp0"); // Replace with your Cloudinary upload preset
      data.append("cloud_name", "dkago8t99"); // Replace with your Cloudinary cloud name
  
      const response = await axios.post(
        "https://api.cloudinary.com/v1_1/dkago8t99/image/upload", // Replace with your Cloudinary URL
        data,
        {
          headers: {
            "X-Requested-With": "XMLHttpRequest",
          },
        }
      );
  
      const imageUrl = response.data.secure_url;
      setImageUrl(imageUrl);
    } catch (error) {
      console.error("Error uploading image to Cloudinary:", error);
    }
  };
   
  useEffect(()=>{
    setFirst_name(First_name)
    console.log(first_name);
  })

  const pickImage = async () => {
    let result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: false,
      aspect: [4, 4],
      quality: 1,
      allowsMultipleSelection: true,
      selectionLimit: 1,
    });
    if (!result.cancelled) {
      const imageUri = result.assets[0].uri;
      setImage(imageUri);
      setMessage("Replace image");
      uploadImageToCloudinary(imageUri);
    }
  };


  const classes = [
    "First Class",
    "Second Class",
    "Third Class",
    "Fourt Class",
    "Fifth Class",
    "Sixth Class",
  ];
  

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
      image: imageUrl,
      Class: Class,
      users_idusers: iduser,
      classes_idclasses: 3
    })
    .then((res) => {
      console.log('student added successfully'); 
      navigation.navigate('Parent');  
      console.log(iduser); 
      setDat(res.data)
    console.log(dat)
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
            <View style={styles.imageContainer}>
            </View>
            {/* https://img.freepik.com/vecteurs-libre/illustration-icone-calendrier_53876-6132.jpg?w=740&t=st=1698409510~exp=1698410110~hmac=bf910c8b32c2bf491669c1dc42f1c89958b3e4a8533cb91e2b94c69c4a19a0ae */}
            <View style={styles.text}>
              <Text style={{ top:"10<%",fontWeight:"400",fontSize:18,left:"-32%" }}>Create an account</Text>
    
              <Text style={{ marginTop:"20%",fontWeight:"300",fontSize:13,left:"-28%",top:"-29%" }}>and join us</Text>
            </View>
            <View style={{borderColor:"#1FA609",width:100,height:100,borderRadius:100,borderWidth:0.6,left:"30%",top:"-5%"}}>
            {imageUrl && <Image source={{ uri: imageUrl }} style={{ width: 100, height: 100 ,borderRadius:100}} />}
            </View>
            <TouchableOpacity  onPress={() => {
              pickImage();
            }} style={{top:"-5%",width:"38%",height:"5%",backgroundColor:"#1FA609",justifyContent:"center",alignItems:"center",borderRadius:8,left:"-18%"}}>
  <Text style={{color:"white"}}>{message}</Text>
</TouchableOpacity>
            <View style={styles.nameContainer}>
              <Text style={styles.label}>first name</Text>
              <TextInput
                style={styles.inputName}
                placeholder="   enter your first name"
                onChangeText={setFirstName}
                
              />
            </View>
            <View style={styles.nameContainer}>
              <Text style={styles.label}>last name</Text>
              <TextInput
                style={styles.inputName}
                placeholder="   enter your last name"
                onChangeText={setLastName}
                
              />
            </View>
            
    
            <View style={styles.nameContainer}>
              <Text style={styles.label}>date_of_birthday</Text>
              <TextInput
                style={styles.inputName}
                placeholder="   YYYY/MM/DD"
               onChangeText={setBirthday}
              />
            </View>
    
            
          
            <Text style={styles.label1}>Current Class</Text>

<TouchableOpacity
style={{
  backgroundColor: "#CFCDCD",
  top:"1%",
  marginTop: "13%",
  height: "6%",
  width: "90%",
  borderRadius: 8,
  marginTop: 10,
  left:"6%",
  justifyContent: "center",
  alignItems:"center"
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

            <TouchableOpacity style={styles.loginButton} onPress={()=>handle()}>
              <View style={styles.loginButtonTextWrapper}>
                <Text style={styles.loginButtonText}>Inscription</Text>
              </View>
            </TouchableOpacity>
    
            <View style={{width:"100%",height:90}}></View>
    
          </View>
        </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    marginLeft:-15
  },
  text: {
    alignItems: "center",
    marginTop: 18,
    width: 190,
color: "#65328e",
  },

  imageContainer: {
    marginTop: 20,
    width: 50, // Adjust the width as needed
    height: 50,
    marginLeft: 170,
    marginRight: 144, // Adjust the height as needed
  },
  image: {
    flex: 1,
    marginTop: 20,
    width: undefined,
    height: undefined,
  },
  homeDiv: {
    width: 312,
    height: 50,
    marginLeft: 21,
    marginTop: 40,
  },
  homeText: {
    fontSize: 15,
    fontWeight: "bold",
    textAlign: "left",
    marginTop: 20,
    color: "#65328e",
  },
  nameContainer: {
    position: "relative",
    width: "90%",
    height: 84,
    marginLeft: 40,
    marginTop: "5%",
    
  },
  label: {
    color:"rgba(0, 0, 0, 1)"  ,  fontSize:12,fontWeight: "300",top:"2%"
  },label1: {
    color:"rgba(0, 0, 0, 1)"  ,  fontSize:12,fontWeight: "300",top:"2%",left:"-26%"
  },
  inputName: {

    top: "10%",
    height: "60%",
    width: "99%",
    backgroundColor: "#CFCDCD",
    borderRadius: 5.681159973144531 
  },
  loginButton: {
    position: "relative",
    width: '90%',
    height: 46,
    backgroundColor: "#1FA609",
    borderRadius: 7.69,
    justifyContent: "center",
    alignItems: "center",
    marginTop: "12%",
    marginLeft: 40, // Adjust the margin as needed
  },
  loginButtonTextWrapper: {
    
    justifyContent:"center",
    alignItems:"center"
  },
  loginButtonText: {
    color: "#F8F0F0",
    fontSize: 12.3,

    textAlign: "center",
  },
  haveAccountContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 60,
  },
  modalContainer: {
    flex:1,
    alignItems:"center",
    justifyContent:"center",
    backgroundColor: "white"
   },
  modalContent: {
    backgroundColor: "#fff",
    width: 250,
    borderRadius: 10,
    padding: 10,
  },
  // img: {
  //   width: 80,
  //   height: 80,
  //   borderRadius: 10,
  //   borderWidth: 1,
  //   borderColor: "#A901DB",
  //   marginLeft: 0,
  //   marginTop: 20,
  // },
  modalItem: {
    padding: 15,
      borderBottomWidth: 1,
      borderBottomColor: '#ccc',
  }
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
