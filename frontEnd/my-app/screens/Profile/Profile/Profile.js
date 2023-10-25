import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import axios from "axios";
const Profile = ({ navigation }) => {

  const [userId,setUserId] = useState("")
  const [username , setUserName]=useState("")
  const [email , setEmail] = useState("")
  const [dob , setDob]= useState("")
  const [currentPassword , setCurrentPassword]=useState("")
  const [newPassword , setNewPassword]=useState("")

  const handleProfileUpdate = () => {
    const url = `http://192.168.1.25:2023/user/edit/${userId}`;
  
    const userData = {
      username ,  
      email,
      dob,
      currentPassword,
      newPassword,
    };
  
    fetch(url, userData)
      .then(response => {
        console.log('Profile updated successfully', response.data);
        navigation.navigate("Home")
      })
      .catch(error => {
        console.error('Profile update failed', error);
      });
  }

  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.Edit}>
            
            <Text style={{ fontSize: 18,fontWeight: "700" ,left:"-12%" , fontSize:25 }}>Edit Profile</Text>
          </View>
          <View style={styles.circle}></View>
          <View style={styles.inputs}>
            <Text style={{ color: "rgba(0, 0, 0, 1)"  , fontWeight: "600" }}>Name</Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)",  fontWeight: "600" 
          }}>
              Email Adress
            </Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)", fontWeight: "600" 
          }}>
              Date Of Birthday
            </Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)", fontWeight: "600" 
          }}>
              Current Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,

                
              }}
            />
            <Text style={{ marginTop: "10%",    color: "rgba(0, 0, 0, 1)",    fontWeight: "600",

          }}>
              New Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                borderColor: "#66328E",
                borderWidth: 1,
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderRadius: 7.681159973144531,
              }}
            />
            <View style={styles.btn}>
              <Text
                style={styles.Log}
                onPress={handleProfileUpdate}
              >
                Save Changes
              </Text>
            </View>
          </View>
         
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    left:5
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(102, 50, 142, 1)",
    marginTop: 20,
    marginLeft: 40,
  },
  inputs: {
    marginTop: 20,
  },
  Edit: {
    marginLeft: 78,

    marginTop: 90,
  },
  Log: {
    color: "#fff",
    marginLeft: 60,
    marginTop: 20,
    fontWeight: "400"
  },
  btn: {
    marginTop: 30,
    width: 205,
    height: 60,
    borderRadius: 8,
    marginLeft: 14,
    backgroundColor: "#66328E",
  },
  aboutUs: {
    width: 250,
    height: 250,
    marginLeft: -5,
    marginTop: 20,
  },
});

export default Profile;
