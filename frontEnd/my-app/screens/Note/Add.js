import { View, Text , TextInput , TouchableOpacity } from 'react-native'
import React from 'react'
import { ScrollView } from 'native-base';
import axios from 'axios';
import { useContext,useEffect,useState  } from "react";
import { MyContext } from "../../useContext/useContext";
import Adress from '../IP'
const Add = () => {

    const {setData,data,setUsersID,iduser,student,setStud, isDarkMode, setMode, setUser,email, setEmail,idclass,setIdClass,first_name} = useContext(MyContext);

const add =()=>{
    axios.post(`http://${Adress}/note/Add`,
    {
        note1,
        note2,
        note3,
        subject_idsubject:2,
        noteName,
        "student_idStudent":21,
        "teachers_idteacher":16
      }
    )
}

  return (
    <ScrollView>
          <SafeAreaView></SafeAreaView>
          <View style={styles.container}>
            <View style={styles.imageContainer}>
            </View>
            {/* https://img.freepik.com/vecteurs-libre/illustration-icone-calendrier_53876-6132.jpg?w=740&t=st=1698409510~exp=1698410110~hmac=bf910c8b32c2bf491669c1dc42f1c89958b3e4a8533cb91e2b94c69c4a19a0ae */}
            <View style={styles.text}>
              <Text style={{ top:"10<%",fontWeight:"400",fontSize:18,left:"-32%" }}>Create Note</Text>
    
              <Text style={{ marginTop:"20%",fontWeight:"300",fontSize:13,left:"-28%",top:"-29%" }}>here you can create note</Text>
            </View>
           
            <TouchableOpacity  style={{top:"-5%",width:"38%",height:"5%",backgroundColor:"#1FA609",justifyContent:"center",alignItems:"center",borderRadius:8,left:"-18%"}}>
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
            </View></ScrollView>
  )
}

export default Add