import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../../Theme/Theme";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import Adress from '../../IP'
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import { SafeAreaView } from "react-native-safe-area-context";
import AntDesign from "react-native-vector-icons/AntDesign"
function Login({ navigation }) {
  const { isDarkMode, setEmail ,email} = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [hide,setHide]=useState(true)
  const [password , setPassword]=useState('')
  const [data,setData]=useState([])

const PassShow=()=>{
  setHide(!hide) 
}

  const handleLog = () => {
    if (email === "") {
      alert("Enter your email");
    } else if (password === "") {
      alert("Enter your password");
    } else {
      axios.post(`http://${Adress}/user/login`, {
        email,
        password,
      })
        .then((res) => {
          setData(res.data);
          alert("Welcome");
          navigation.navigate('Parent');
        })
        .catch((err) => {
          console.log(err);
          Alert.alert("Check your password or your email");
        });
       
    }
  
    
  };

  return (
    <View style={[styles.container,{ backgroundColor: theme.backgroundColor }]}>
    <Text style={{marginTop:"-7%",top:'-3%', color: "rgba(0, 0, 0, 1)"  ,  fontSize:16,fontWeight:"600",left:"-25%"}}>Log in</Text>
    <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)",top:'-3%'  ,  fontSize:20,fontWeight: "200",left:'-26%'}}>Welcome back !</Text>

    <Text   style={{left:'-35%', top:"2%", color: "rgba(0, 0, 0, 1)",fontSize:12,fontWeight: "300"}}> e-Mail</Text>
    <TextInput  onChangeText={setEmail} placeholder="   please enter your email" style={{borderColor: "#66328E",
    top: "3%",
    height: "10%",
    width: "85%",
    backgroundColor: "#CFCDCD",
    borderRadius: 5.681159973144531
  }} />
   <Text style={{left:'-34%', top:'8%',color:"rgba(0, 0, 0, 1)"  ,  fontSize:12,fontWeight: "300"}}>password</Text>
    <TextInput  onChangeText={setPassword} secureTextEntry={hide} placeholder="   please enter your password"  style={{borderColor: "#66328E",
    top: "10%",
    height: "10%",
    width: "85%",
    backgroundColor: "#CFCDCD",
    borderRadius: 5.681159973144531 }} />
         <AntDesign name="eye" style={{color:"black",fontSize:28,top:'3%',left:'30%'}} onPress={()=>setHide(!hide)}/>

    <Text style={{left:"25%",marginTop:"10%",top:'3%',color: "green",
    fontWeight: "300",fontSize:12}} onPress={()=>{navigation.navigate("FindEmail")}}>Forgot Password ?</Text>
    {/* <Button onPress={handleClick}
  title="LOG IN"
    color={"red"}
/> */}

      <View style={styled.btn}>
        <Text style={styled.Log} onPress={(e) => handleLog(e)}>
          Log back in
        </Text>
      </View>
      <Text style={[styled.text, { color: theme.textColor }]}>
        Don't have an account?
      </Text>
      <Text
        style={styleed.text1}
        onPress={() => {
          navigation.navigate("SignUp");
        }}
      >
        Sign up Now
      </Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
});
const styled = StyleSheet.create({
  text: {
      marginLeft:"-30%",
      left:'5%',
      marginTop:"10%",
      top:55,
      fontSize:13
  },btn:{
    top:"10%",
    width:"80%",
    height:"10%",
    borderRadius:8,
    justifyContent:"center",
  alignItems:"center",
    backgroundColor: "#1FA609",
  },Log:{
    color:"#fff",
  
  }
});
const styleed = StyleSheet.create({
  text1: {
      marginLeft:"45%",
      left:'2%',
      top:57,
      fontSize:12,
      marginTop:"-5.5%",
      color: "green",
      fontWeight: "200"
  },
});
export default Login;
