import axios from "axios";
import { ScrollView } from "native-base";
import React, { useEffect, useState } from "react";
import { View, Text, ImageBackground, StyleSheet , TouchableOpacity,TextInput } from "react-native";
import { Svg, Path } from "react-native-svg";
import Adress from '../IP'


 
export default function ContactUs({navigation}) {

  const [formData , setFormData] = useState({
    first_name : "",
    phone_number : "",
    email:"",
    message:""
  })

  const handleSubmit = () =>{
    axios.post(`http://${Adress}/contactUs`, formData)
    .then((response)=>{
      console.log("Message send successfully" , response.data.message)
      navigation.navigate('Parent');

    }).catch((error)=>{
      console.error("Failed to send the message" , error)
    })
  }

  return (
    // <ScrollView horizontal={false}>
    //   <View style={styles.container}>
    //     <Text style={styles.getintouch}>{`Get in touch`}</Text>
    //     <Text style={styles.wearehereforyouHowcanwehelp}>
    //       {`We are here for you! How can we help?`}
    //     </Text>
    //     <View style={styles.emailAddressHolder}>
    //       <TextInput
    //       value={formData.first_name}
    //       onChangeText={(text) => setFormData({ ...formData, first_name: text })}

    //       style={styles.rectangle1} />
    //       <Text style={styles.yourName}>{`Your Name`}</Text>
    //     </View>
    //     <View style={styles._emailAddressHolder}>
    //       <TextInput 
    //       value={formData.phone_number}
    //       onChangeText={(text) => setFormData({ ...formData, phone_number: text })}

    //       style={styles.rectangle2} />
    //       <Text style={styles.phoneNumber}>{`Phone Number`}</Text>
    //     </View>
    //     <View style={styles.__emailAddressHolder}>
    //       <TextInput 
    //       value={formData.email}
    //       onChangeText={(text) => setFormData({ ...formData, email: text })}

    //       style={styles.rectangle3} />
    //       <Text style={styles.theemailyouwanttocommunicatethrough}>
    //         {`The email you want to communicate through`}
    //       </Text>
    //     </View>

    //     <View style={styles.____emailAddressHolder}>
    //       <TextInput 
    //       value={formData.message}
    // onChangeText={(text)=>setFormData({...formData , message:text})}

    //       style={styles.rectangle5} />
    //       <Text style={styles.message}>{`Message`}</Text>
    //     </View>
        
    //     <TouchableOpacity style={styles.submit} onPress={handleSubmit}>
    //     <Text style={styles._submit}>Submit</Text>
    //     </TouchableOpacity>


    //   </View>
    // </ScrollView>
    <ScrollView>
               <View style={{width:"20%",height:"30%"}}></View>

      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text style={{  fontSize: 16, fontWeight: "500",left:"-20%",top:"19%",marginTop:"5%" }}>Contact us</Text>
        <Text style={{  fontSize: 14, fontWeight: "200",left:"-20%",top:"20%" }}>Send a message</Text>
        <Text style={{top:"32%",fontWeight:"200",left:"-28%"}}>{`Your Name`}</Text>
         <TextInput
          value={formData.first_name}
        onChangeText={(text) => setFormData({ ...formData, first_name: text })}

           style={{height:"15%",width:"80%",top:"33%",backgroundColor:"#CFCDCD",borderRadius:8}} />
        <Text style={{top:"32%",fontWeight:"200",left:"-21%",marginTop:"5%"}}>{`Your phone number`}</Text>

<TextInput 
       value={formData.phone_number}
       onChangeText={(text) => setFormData({ ...formData, phone_number: text })}
       style={{height:"15%",width:"80%",top:"33%",backgroundColor:"#CFCDCD",borderRadius:8}}/>
       <Text style={{top:"32%",fontWeight:"200",left:"-26%",marginTop:"5%"}}>
             {`Your e-mail`}
           </Text>
           <TextInput 
    value={formData.email}
    onChangeText={(text)=>setFormData({...formData , email:text})}

    style={{height:"15%",width:"80%",top:"33%",backgroundColor:"#CFCDCD",borderRadius:8}} />

<Text style={{top:"32%",fontWeight:"200",left:"-26%",marginTop:"5%"}}>
             {`Your message`}
           </Text>
           <TextInput 
    value={formData.message}
    onChangeText={(text)=>setFormData({...formData , message:text})}

    style={{height:"30%",width:"80%",top:"33%",backgroundColor:"#CFCDCD",borderRadius:8}} />


        <TouchableOpacity style={{width:"80%",height:"20%",borderRadius:"8",justifyContent:"center",alignItems:"center",backgroundColor:"#1FA609",top:"50%"}} onPress={handleSubmit}>
              

         <Text style={{color:"white"}}>Submit</Text>
         </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
justifyContent:"center",
alignItems:"center",
    backgroundColor: "white"
  },
  getintouch: {
    flexShrink: 0,
    top: "8%",
    left: "27%",
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
    left: "18%",
    width: 349,
    height: 31,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 13,
    fontWeight: "600",
    letterSpacing: 0,
  },
  emailAddressHolder: {
    top: "30%",
    height: 84,
    width: 269,
  },

  rectangle2: {
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
    top: "67%",
    height: 45,
    width: 257,
    backgroundColor: "#1FA609",
    alignItems: "center",
    justifyContent:"center",
    borderRadius: 10
  },
 
  _submit : {
    top:6, 
    color:"white",
    fontSize:20,
    fontWeight:"700"
  }
});
