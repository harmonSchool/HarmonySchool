import React, { useState } from "react";
import Axios from "axios";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Dimensions
} from "react-native";
import AntDesign from "react-native-vector-icons/AntDesign"
import Adress from '../../IP'
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons/index";
import CustomTextInputEmail from "./CustomTextInputEmail";
import CustomTextInputPassword from "./CustomTextInputPassword";
import { Alert } from "react-native";
import serverUrl from "../../serverUrl";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import ADRESS_API from "../../serverUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateAnAccount = ({navigation}) => {
  const {height,width}=Dimensions.get('window')
  const { iduser,setUsersID,setName,username} = useContext(MyContext);
const[hide,setHide]=useState(true)
  const [password,setPassword]=useState('');
 const [email,setEmail]=useState("")
  const [Birthday, setDateOfBirth] = useState('');
  const [Number, setPhoneNumber] = useState('');
  const [isError,setIsError]=useState(false);
  

  const handlePassword = (text) => {
    setPassword(text);
  };

  const handleEmail = (text) => {
    setEmail(text);
  };

  const handleName = (text) => {
    setName(text);
  };

  const handlePhone = (text) => {
    setPhoneNumber(text);
  };

  const handleDate = (text) => {
    setDateOfBirth(text);
  };

  const handleSignUp = () => {
    const userData = {
      username,
      email,
      password,
      Birthday,
      Number,
    };
    console.log(userData);
    Axios.post(`http://${Adress}/user/register`, userData).then((res)=>{
      console.log("data is "+res.data);
      navigation.navigate('Login')
    }).catch((err)=>{
      console.log(err);
    })
      };

  const verify = () => {
    if (password.length < 6) {
      setIsError(!isError);
      Alert.alert("make password than 6");
    }
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
        </View>

        <View style={styles.text}>
          <Text style={{ fontWeight:"400",fontSize:18,left:-130 }}>Create an account</Text>

          <Text style={{ fontWeight:"300",fontSize:13,left:-130,top:10 }}>and join us</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>name</Text>
          <TextInput
            style={styles.inputName}
            placeholder="   enter your name"
            onChangeText={handleName}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>date_of_birthday</Text>
          <TextInput
            style={styles.inputName}
            placeholder="   YYYY/MM/DD"
            onChangeText={handleDate}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>phone Number</Text>
          <TextInput
            style={styles.inputName}
            placeholder="   enter your phone number"
            onChangeText={handlePhone}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={[styles.label]}>e-mmail</Text>

          <TextInput
            style={styles.inputName}
            placeholder="   enter your e-mail"
            onChangeText={handleEmail}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={[styles.label]}>password</Text>

          < TextInput
            style={styles.inputName}
            placeholder="   enter your password"
            onChangeText={handlePassword}
            secureTextEntry={hide}
            
          />
                   <AntDesign name="eye" style={{color:"black",fontSize:28,top:-28,left:"90%"}} onPress={()=>setHide(!hide)}/>

        </View>

        <TouchableOpacity style={styles.loginButton} onPress={()=>handleSignUp()}>
          <View style={styles.loginButtonTextWrapper}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
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
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    width: '100%',
    marginLeft:-15
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
    marginLeft: 40,
    marginTop: 20,
    
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
});

export default CreateAnAccount;