import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../../Theme/Theme";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import Adress from '../../IP'
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
<<<<<<< HEAD

import ADRESS_API from "../../serverUrl";
=======
import AsyncStorage from "@react-native-async-storage/async-storage"
>>>>>>> main

function Login({ navigation }) {
  const { isDarkMode, setMode, setUser } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
<<<<<<< HEAD
  const [email,setEmail]=useState('')
  const [password , setPassword]=useState('')
  const [role , setRole]=useState('')
  const [data,setData]=useState([])



const handleLog=(e)=>{

e.preventDefault()
  const url = ADRESS_API + 'auth';
  console.log(url);

    axios.post(url  ,{
      email,
      password,
    }).then((res)=>{
      setData(res.data)
      console.log(data);
    
      if(res.data[0].role == 1){
        navigation.navigate('Parent');
        alert("welcome Parent");
      }else{
        navigation.navigate('Teacher');
        alert("welcome Teacher");
      }
      
    }).catch((err)=>{
      if(email===""){
        console.log("enter your email");
        alert('enter your email')
      }else if(password===""){
        console.log("enter your password");
        alert("enter your password")
      }else{
      console.log(err)
      alert("check your pass or your email")
=======
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [teacherEmails, setTeacherEmails] = useState([]);
  const [userEmails, setUserEmails] = useState([]);

  useEffect(() => {
    fetchDataFromTeacherURL();
    fetchDataFromUserURL();
  }, []);

  const getUserEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      return email;
    } catch (error) {
      console.error('Error retrieving user email:', error);
>>>>>>> main
    }
  }


  
    
  



  function fetchDataFromTeacherURL() {
    axios
      .get("http://192.168.1.136:2023/teacher/get")
      .then((res) => {
        const teacherData = res.data;
        const teacherEmails = teacherData.map((teacher) => teacher.email);
        setTeacherEmails(teacherEmails);
      })
      .catch((err) => {
        console.error("Error fetching data from Teacher URL:", err);
      });
  }

  function fetchDataFromUserURL() {
    axios
      .get("http://192.168.1.136:2023/user/getAll")
      .then((res) => {
        const userData = res.data;
        const userEmails = userData.map((user) => user.email);
        setUserEmails(userEmails);
        console.log("users Emails " , userEmails)
        
        
      })
      .catch((err) => {
        console.error("Error fetching data from User URL:", err);
      });
  }

  

  const handleLog = async (e) => {
    const adminKey = "37910Acoy"; 
    console.log("Admin Key:", adminKey); 
    e.preventDefault();
  
    if (email === "") {
      console.log("Enter your email");
      alert("Enter your email");
      return;
    }
    if (password === "") {
      console.log("Enter your password");
      alert("Enter your password");
      return;
    }
  
    try {
      const storedEmail = await getUserEmail();
  
      console.log("Email entered:", email);
      console.log("Admin Key:", adminKey);
  
      if (email === storedEmail && adminKey) {
        // Admin access granted
        console.log("Admin login");
        alert("Welcome admin");
        // Handle admin navigation here
      } else if (teacherEmails.includes(email)) {
        console.log("Teacher login");
        alert("Welcome teacher");
        navigation.navigate("Teacher")
      } else if (userEmails.includes(email) || email === storedEmail) {
        console.log("User login");
        alert("Welcome, user");
        console.log("Stored Email:", storedEmail);
  
        // Navigate to the Parent component with userEmail and adminKey
        navigation.navigate("Parent", { userEmail: email, adminKey: adminKey });
      } else {
        console.log("Email not found");
        alert("Email not found. Please check your email or register.");
      }
    } catch (error) {
      console.error("Error handling login:", error);
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
  )}
const styles = StyleSheet.create({
  container: { flex: 1, alignItems: "center", justifyContent: "center" },
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
