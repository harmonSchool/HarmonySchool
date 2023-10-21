import axios from "axios";
import { ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet , TouchableOpacity } from "react-native";
import { TextInput } from "react-native-paper";
import { Svg, Path } from "react-native-svg";


 
export default function ContactUs({navigation}) {

  const [formData , setFormData] = useState({
    first_name : "",
    phone_number : "",
    email:"",
    message:""
  })

  const handleSubmit = () =>{
    axios.post("http://192.168.104.4:3001/contactUs", formData)
    .then((response)=>{
      console.log("Message send successfully" , response.data.message)
      navigation.navigate('Home');

    }).catch((error)=>{
      console.error("Failed to send the message" , error)
    })
  }

  return (
    <ScrollView horizontal={false}>
      <View style={styles.container}>
        <Text style={styles.getintouch}>{`Get in touch`}</Text>
        <Text style={styles.wearehereforyouHowcanwehelp}>
          {`We are here for you! How can we help?`}
        </Text>
        <View style={styles.emailAddressHolder}>
          <TextInput
          value={formData.first_name}
          onChangeText={(text) => setFormData({ ...formData, first_name: text })}

          style={styles.rectangle1} />
          <Text style={styles.yourName}>{`Your Name`}</Text>
        </View>
        <View style={styles._emailAddressHolder}>
          <TextInput 
          value={formData.phone_number}
          onChangeText={(text) => setFormData({ ...formData, phone_number: text })}

          style={styles.rectangle2} />
          <Text style={styles.phoneNumber}>{`Phone Number`}</Text>
        </View>
        <View style={styles.__emailAddressHolder}>
          <TextInput 
          value={formData.email}
          onChangeText={(text) => setFormData({ ...formData, email: text })}

          style={styles.rectangle3} />
          <Text style={styles.theemailyouwanttocommunicatethrough}>
            {`The email you want to communicate through`}
          </Text>
        </View>

        <View style={styles.____emailAddressHolder}>
          <TextInput 
          value={formData.message}
    onChangeText={(text)=>setFormData({...formData , message:text})}

          style={styles.rectangle5} />
          <Text style={styles.message}>{`Message`}</Text>
        </View>
        
        <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
        <Text style={styles._submit}>Submit</Text>
        </TouchableOpacity>


      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    height: 1300,
    width: 500,
    backgroundColor: "white",
    marginTop:"0%"
  },
  getintouch: {
    flexShrink: 0,
    top: "8%",
    left: "26%",
    width: 349,
    height: 31,
    color: "rgba(186, 104, 200, 1)",
    fontSize: 25,
    fontWeight: "600",
    zIndex: 1,
  },
  wearehereforyouHowcanwehelp: {
    flexShrink: 0,
    top: "9%",
    left: "16%",
    width: 349,
    height: 31,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0,
  },
  emailAddressHolder: {
    flexShrink: 0,
    top: 131,
    height: 84,
    left: "13%",
    width: 269,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
  },
  rectangle1: {
    flexShrink: 0,
    top: 38,
    width: 269,
    height: 46,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
  },

  rectangle2: {
    flexShrink: 0,
    top: 38,
    width: 269,
    height: 46,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
  },

  rectangle3: {
    flexShrink: 0,
    top: 38,
    width: 269,
    height: 46,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
  },

  rectangle4: {
    flexShrink: 0,
    top: 38,
    width: 269,
    height: 46,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
  },

  rectangle5: {
    flexShrink: 0,
    top: 30,
    width: 269,
    height: 120,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
  },

  yourName: {
    flexShrink: 0,
    top:"-45%",
    width: 69,
    height: 28,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontSize: 12.302659034729004,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.68098258972168,
  },
  _emailAddressHolder: {
    flexShrink: 0,
    top: "11%",
    height: 84,
    left: "13%",
    width: 269,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
  },

  phoneNumber: {
    top: "-45%" , 
    flexShrink: 0,
    width: 93,
    height: 28,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontSize: 12.302659034729004,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.68098258972168,
  },
  __emailAddressHolder: {
    flexShrink: 0,
    top: "12%",
    height: 84,
    left: "13%",
    width: 269,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
  },
  
  theemailyouwanttocommunicatethrough: {
    top:"-49%",
    flexShrink: 0,
    left: 0,
    width: 252,
    height: 28,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontSize: 11,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.68098258972168,
  },
  
  
  ____emailAddressHolder: {
    flexShrink: 0,
    top: "15%",
    height: 155,
    left: "13%",
    width: 270,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
  },
  
  
  message: {
    top:"-75%",
    flexShrink: 0,
    width: 56,
    height: 28,
    transform: [
      {
        rotateZ: "0.00deg",
      },
    ],
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontSize: 12.302659034729004,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.68098258972168,
  },
  submit: {
    flexShrink: 0,
    top: "17%",
    height: 45,
    left: 70,
    width: 257,
    backgroundColor: "rgba(102, 50, 142, 1)",
    alignItems: "center",
    borderRadius: 10,
  },
 
  _submit : {
    top:6, 
    color:"white",
    fontSize:20,
    fontWeight:"700"
  }
});
