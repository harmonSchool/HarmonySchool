import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView,Dimensions, TouchableNativeFeedback  } from "react-native"
import ImagePicker from 'react-native-image-picker';
import { useEffect,useState  } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useContext } from "react";
import axios from "axios";
import Adress from '../../IP'
import { MyContext } from "../../../useContext/useContext";
const ProfileView=({navigation})=> {
    const {iduser,setUsersID,username} = useContext(MyContext);
    const {height,width}=Dimensions.get('window')

const edity=()=>{
    navigation.navigate('Profile')
}


const [data,setData]=useState([])

useEffect(() => {
    axios
      .get(`http://${Adress}/user/getById/${iduser}`)
      .then((res) => {
        setData(res.data);
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []); 
const Logout=()=>{
    axios.delete(`http://${Adress}/user/delete/${iduser}`).then((res)=>{
        console.log("deleted User "+iduser);
        navigation.navigate('Home')
    }).catch((err)=>{
        console.log(err);
    })
    navigation.navigate('Home')

}

    return (
        <View style={{
            width:width,
            height:height
        }}>
                 <SafeAreaView style={{backgroundColor:"black"}}>
  </SafeAreaView>
        <ScrollView>
      <View style={Styles.container}>
      <Text style={{marginTop:"-7%",top:'43%', color: "rgba(0, 0, 0, 1)"  ,  fontSize:16,fontWeight:"600",left:"-21%"}}>See your profile</Text>
     <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)",top:'43%'  ,  fontSize:20,fontWeight: "200",left:'-22%'}}>update and delete</Text>
        <View style={{borderColor: "#1FA609",width:90,height:90,borderRadius:100,borderWidth:0.3,left:"25%",top:"45%"}}></View>
      
    </View>
    <View>
    
            <View>
        <View style={{marginTop:"15%",top:"7%",left:'5%'}}>
        <Text style={{color:"black",fontSize:15,fontWeight:200}}>
Your Name is :
        </Text>
        </View>
        <View style={{marginTop:"5%",top:"8%",left:'5%'}} >
        <Text style={{color:"black",fontSize:15,fontWeight:200 }}>
Your Email is :
        </Text>
        </View>  
        <View style={{marginTop:"5%",top:"8%",left:'5%'}} >
        <Text style={{color:"black",fontSize:15,fontWeight:200}}>
Your Number is :
        </Text>
        </View >
        <View style={{marginTop:"5%",top:"8%",left:'5%'}}>
        <Text style={{color:"black",fontSize:15,fontWeight:200}}>
Your Birthday at :
        </Text>
        </View>
      
    </View>
    </View>

    
    <TouchableNativeFeedback onPress={()=>edity()}>
            <View style={{backgroundColor:"#1FA609",marginTop:'30%',marginLeft:width -310,width:width/2.5,height:width-280,borderRadius:8,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white"}}>Edit Your Profile</Text>
            </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={()=>Logout()}>
            <View style={{backgroundColor:"red",marginTop:width - 360,marginLeft:width - 140,width:width/2.5,height:width-280,borderRadius:8,justifyContent:"center",alignItems:"center"}}>
            <Text style={{color:"white"}}>Delete Account</Text>
            </View>
        </TouchableNativeFeedback>
    </ScrollView>
   </View>
    )
  }

  const Styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }
})

export default ProfileView