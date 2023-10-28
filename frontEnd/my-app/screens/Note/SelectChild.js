import { View, Text,Image, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react';
import { ScrollView } from 'native-base'
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
import axios from 'axios';
import Adress from '../IP'
const SelectChild = ({navigation}) => {
    const[studByuser,setStudBy]=useState([])
const {studID,setStudID,iduser,first_name,setFirst_name} = useContext(MyContext);



useEffect(()=>{
    axios.get(`http://${Adress}/student/getByUser/${iduser}`).then((res)=>{
        console.log("hello mawmaw");
        setStudBy(res.data)
        console.log("we go away "+studByuser);
    }).catch((err)=>{
        console.log(err);
    })
},[])

    const takeIt=(text)=>{
        setStudID(text)
        console.log("stud ID "+studID);
        if(studID){
            navigation.navigate('Notes')
        }else{
            console.log("try again");
        }
    }


  return (
    <ScrollView>
    <View>
      <Text style={{marginTop:"18%",top:'3%', color: "rgba(0, 0, 0, 1)"  ,  fontSize:16,fontWeight:"400",left:"10%"}}>Select Child</Text>
      <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)"  ,  fontSize:20,fontWeight: "200",left:'6%'}}>to check notes</Text>
    </View>
    <ScrollView style={{width:"100%",height:240,top:"40%"}} horizontal={true} >
    {studByuser.map((el,i)=>{
return(
    <TouchableOpacity key={i} onPress={()=>takeIt(el.idStudent)}>
<View style={{borderWidth:1,marginLeft:10,width:180,height:210,borderRadius:8,alignItems:"center",borderWidth:1}}>

<View style={{width:91,height:91,borderRadius:100,borderWidth:1,borderColor:"#1FA609",top:10}}>
    <Image style={{width:90,height:90,borderRadius:100}} source={{uri:el.image}}/></View>
    <View style={{width:140,top:15,justifyContent:'center',alignItems:"center"}}>
    <Text>Username:{el.First_name}</Text>
    <Text>LastName : {el.LastName}</Text>
</View>

</View>
</TouchableOpacity>
)})}
    </ScrollView>
    </ScrollView>
  )
}

export default SelectChild