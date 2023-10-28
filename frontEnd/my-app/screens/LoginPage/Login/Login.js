import { StyleSheet, Text, View, TextInput, Button, Image } from "react-native";
import { useEffect, useState } from "react";
import { lightTheme, darkTheme } from "../../../Theme/Theme";
import Navbar from "../../Navbar/Navbar";
import axios from "axios";
import Adress from '../../IP'
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import AntDesign from 'react-native-vector-icons/AntDesign'
import AsyncStorage from "@react-native-async-storage/async-storage"

function Login({ navigation }) {
  const { isDarkMode, setMode, setUser,email, setEmail,idclass,setIdClass} = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [password, setPassword] = useState("");
  const [teacherEmails, setTeacherEmails] = useState([]);
  const [userEmails, setUserEmails] = useState([]);
  const [hide, setHide] = useState(true);
  const[users,setUs]=useState([])
  const[teacher,setUts]=useState([])
  const[datas,setDatas]=useState([])
  const { idusers,setUsersId} = useContext(MyContext);
  const [data, setData] = useState(null);


const [userIds , setUserIds]=useState([])

  const PassShow=()=>{
    setHide(!hide) 
  }

  useEffect(() => {
    const userEmail = getUserEmail();
    fetchDataFromTeacherURL();
    fetchDataFromUserURL();
}, []);


  const getUserEmail = async () => {
    try {
      const email = await AsyncStorage.getItem('userEmail');
      return email;
    } catch (error) {
      console.error('Error retrieving user email:', error);
    }
  }


  



  function fetchDataFromTeacherURL() {
    axios
      .get(`http://${Adress}/teacher/get`)
      .then((res) => {
        const teacherData = res.data;
        const teacherEmails = teacherData.map((teacher) => teacher.email);
        setTeacherEmails(teacherEmails);
        console.log("teacherEmails ", teacherEmails);

      })
      .catch((err) => {
        console.error("Error fetching data from Teacher URL:", err);
      });
  }



  const getPasswordForEmail = async (email) => {
    try {
      // Implement the logic to fetch the password associated with the email.
      // You can use AsyncStorage or make an API call to get the password.
      // Example using AsyncStorage:
      const password = await AsyncStorage.getItem(`password_${email}`);
      return password;
    } catch (error) {
      console.error('Error retrieving password for email:', error);
    }
  };

  function fetchDataFromUserURL() {
    const email = getUserEmail();
    const storedPassword = getPasswordForEmail(email);
    axios
      .get(`http://${Adress}/user/getAll`)
      .then((res) => {
        const userData = res.data;
        const userEmails = userData.map((user) => user.email);
        const userIds = userData.map((user) => user.idusers);

        setUserEmails(userEmails);
        console.log("users Emails ", userEmails);
        setUserIds( userIds)
        console.log(userIds)
      })
      .catch((err) => {
        console.error("Error fetching data from User URL:", err);
      });
  }

  
  const handleLog = async (e) => {
    e.preventDefault();

    if (!email || !password) {
        console.log('Enter your email and password');
        alert('Enter your email and password');
        return;
    }

    try {
        const res = await axios.post(`http://${Adress}/user/login`, {
            email,
            password,
        });

        setData(res.data);

        const isUser = userEmails.includes(email);
        const isTeacher = teacherEmails.includes(email);

        if (isUser) {
            navigation.navigate('Teacher');
        } else if (isTeacher) {
            navigation.navigate('Teacher');
        } else {
            console.log('Entered email:', email);
            console.log('User emails:', userEmails);
            console.log('Teacher emails:', teacherEmails);
            alert('User not found, please check your email');
        }
    } catch (err) {
        console.error(err);
        alert('Check your password or your email');
    }
};

  
  

  return (
    <View key={"hello"} style={[styles.container,{ backgroundColor: theme.backgroundColor }]}>
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

      <View style={styles.btn}>
        <Text style={styles.Log} onPress={(e) => handleLog(e)}>
          Log back in
        </Text>
      </View>
      <Text style={[styles.text, { color: theme.textColor }]}>
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
