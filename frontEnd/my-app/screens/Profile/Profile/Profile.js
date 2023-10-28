import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
  TouchableOpacity
} from "react-native";

import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import Adress from '../../IP'
import { SafeAreaView } from "react-native-safe-area-context";
import axios from "axios";
import AntDesign from "react-native-vector-icons/AntDesign"

const Profile = ({ navigation }) => {
  const {iduser,data} = useContext(MyContext);
   const[hide,setHide]=useState(true)
  const [username, setName] = useState("");
  const [email, setEmailAdress] = useState("");
  const [password, setNewPassword] = useState("");

  

const handlePut=()=>{
  axios.put(`http://${Adress}/edit/${iduser}`,{
    username,
    email,
    password,
  }).then((res)=>{
    console.log("updated succesfull");
    navigation.navigate('Login')
  }).catch((err)=>{
    console.log("there is an error "+err);
  })
}

  return (
    <ScrollView>
    <View style={styles.container}>
      <View style={styles.imageContainer}>
      </View>

      <View style={styles.text}>
        <Text style={{ fontWeight:"400",fontSize:18,left:"-40%" }}>Edit Profile</Text>

        <Text style={{ fontWeight:"300",fontSize:13,left:"-40%",top:10 }}>and join us</Text>
      </View>
            <View style={styles.nameContainer5}>
        <Text style={styles.label}>username</Text>
        <TextInput
          style={styles.inputName}
          placeholder="   enter your new username"
          onChangeText={(text)=>{setName(text)}}
        
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.label}>e-mail</Text>
        <TextInput
          style={styles.inputName}
          placeholder="   enter your new e-mail"
           onChangeText={(text)=>setEmailAdress(text)}
        />
      </View>

      <View style={styles.nameContainer}>
        <Text style={styles.label}>new password</Text>

        <TextInput
          style={styles.inputName}
          placeholder="   enter your new password"
          secureTextEntry={hide}
           onChangeText={(text)=>setNewPassword(text)}
        
        />
                 <AntDesign name="eye" style={{color:"black",fontSize:28,top:'-36%',left:'80%'}} onPress={()=>setHide(!hide)}/>

      </View>            

      <TouchableOpacity style={styles.loginButton}  onPress={() => handlePut()} >
        <View style={styles.loginButtonTextWrapper}>
          <Text style={styles.loginButtonText}>edit profile</Text>
        </View>
      </TouchableOpacity>

      <View style={{width:"100%",height:70}}></View>

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
  },
  text: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 141,
    marginRight: 141,
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
    marginTop: 20,
    
  },  nameContainer5: {
    position: "relative",
    width: "90%",
    height: 84,
    marginTop: "15%", 
    
  },
  label: {
    color:"rgba(0, 0, 0, 1)"  ,  fontSize:12,fontWeight: "300"
  },
  inputName: {

    top: "10%",
    height: "60%",
    width: "100%",
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
    marginTop: 20,
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
});

export default Profile;
