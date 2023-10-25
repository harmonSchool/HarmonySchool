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
} from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faEnvelope, faLock } from "@fortawesome/free-solid-svg-icons/index";
import CustomTextInputEmail from "./CustomTextInputEmail";
import CustomTextInputPassword from "./CustomTextInputPassword";
import { Alert } from "react-native";

import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
import ADRESS_API from "../../serverUrl";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CreateAnAccount = ({ navigation }) => {
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [username, setName] = useState("");
  const [Birthday, setDateOfBirth] = useState("");
  const [Number, setPhoneNumber] = useState("");
  const [isError, setIsError] = useState(false);
  const [iduser, setUserId] = useState(0);

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
    Axios.post(ADRESS_API + 'user/register', userData)

      .then((response) => {
        console.log(response.data);

        data = {email : userData.email , password : userData.password , role : 1};

        Axios.post(ADRESS_API + 'create/user',data).then((res) => {
          
        }).catch((err) => {
          alert(err);
        });

        setName("");
        setDateOfBirth("");
        setPhoneNumber("");
        setEmail("");
        setPassword("");

        setUserId(response.data.idusers);
        console.log("User ID:", response.data.idusers);
        Alert.alert("Success", "Registration successful! You can now log in.");

        navigation.navigate("Login");
      })
      .catch((error) => {
        console.error("Registration Error", error);
        Alert.alert(
          "Error",
          "Registration failed. Please try again bjeh rab a3mel adress jdida"
        );
      });
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
        <View style={styles.homeDiv}>
          <Text style={styles.homeText}>Home</Text>
        </View>

        <View style={styles.imageContainer}>
          <Image
            source={require("../../../assets/icon8.png")}
            style={{ flex: 1, width: undefined, height: undefined }}
          />
        </View>

        <View style={styles.text}>
          <Text style={{ color: "#66328E" }}>Create Account</Text>
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>Name</Text>
          <TextInput
            style={styles.inputName}
            placeholderTextColor="#000000"
            onChangeText={handleName}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>Date_of_birthday</Text>
          <TextInput
            style={styles.inputName}
            placeholderTextColor="#000000"
            onChangeText={handleDate}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={styles.label}>Phone Number</Text>
          <TextInput
            style={styles.inputName}
            placeholderTextColor="#000000"
            onChangeText={handlePhone}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={[styles.label, { paddingBottom: 20.44 }]}>Email</Text>

          <CustomTextInputEmail
            iconName={faEnvelope}
            onChangeText={handleEmail}
          />
        </View>

        <View style={styles.nameContainer}>
          <Text style={[styles.label, { paddingBottom: 20.44 }]}>Password</Text>

          <CustomTextInputPassword
            iconName={faLock}
            onChangeText={handlePassword}
            onBlur={verify}
            isError={isError}
            secureTextEntry={true}
          />
        </View>

        <TouchableOpacity style={styles.loginButton} onPress={handleSignUp}>
          <View style={styles.loginButtonTextWrapper}>
            <Text style={styles.loginButtonText}>SIGN UP</Text>
          </View>
        </TouchableOpacity>

        <View style={styles.haveAccountContainer}>
          <Text style={styles.label}>Have an account already?</Text>
          <Text
            style={styles.haveAnAccountText}
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            &nbsp;&nbsp;Log in
          </Text>
        </View>
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
    marginTop: -29,
    margin:29
  },
  text: {
    alignItems: "center",
    marginTop: 10,
    marginLeft: 141,
    marginRight: 141,
    width: 100,

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
    width: 269,
    height: 84,
    marginLeft: 40,
    marginTop: 20,
  },
  label: {
    color: "#66328E",
    fontSize: 12.3,
    fontWeight: "500",
  },
  inputName: {
    position: "absolute",
    width: 269,
    height: 46,
    top: 38,
    left: 0,
    backgroundColor: "#F8F0F0",
    borderRadius: 7.69,
    borderWidth: 0.77,
    borderColor: "#66328E",
    paddingLeft: 10,
    fontSize: 14,
  },
  loginButton: {
    position: "relative",
    width: 268,
    height: 46,
    backgroundColor: "#65328e",
    borderRadius: 7.69,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 20,
    marginLeft: 40, // Adjust the margin as needed
  },
  loginButtonTextWrapper: {
    position: "absolute",
    width: 54,
    height: 28,
    top: 9,
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