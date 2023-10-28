import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView, Dimensions  } from 'react-native';
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Center } from 'native-base';
import axios from 'axios';
import Adress from '../IP'

const Note=()=>{
  const {studID,height,width}=Dimensions.get('window')
const [data,setData]=useState([])
useEffect(()=>{
  axios.get(`http://${Adress}/note/getByID/21`).then((res)=>{
  setData(res.data)
  console.log("Done");
  }).catch((err)=>{
    console.log(err);
  })
},[])


    return (
      <SafeAreaView>
<ScrollView>
 
    <View style={Styles.container}>
    
        <Text style={{marginTop:"18%",top:'8%', color: "rgba(0, 0, 0, 1)"  ,  fontSize:14,fontWeight:"400",left:"-20%"}}>children note Notes</Text>
        <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)"  ,  fontSize:18,fontWeight: "200",left:'-19%',top:60}}> modify all subject notes</Text>
        <TouchableOpacity onPress={()=>navigation.navigate('Add')} style={{width:120,height:50,justifyContent:"center",alignItems:"center",backgroundColor:"green",borderRadius:12,left:80,top:120}}>
          <Text style={{color:"white"}}>Create new note</Text>
        </TouchableOpacity>
        < View style={{marginTop:height - 550}}>
        <ScrollView style={{top:100}}  horizontal={true}>

      {data.map((el,i)=>{
        return (

          <View>
          <View  key={i}  style={{width:width-200,height:width / 2  ,borderRadius: 11,marginTop:40 ,borderWidth:0.6,alignItems: 'center',left:15}}>
            <Text>{el.noteName}</Text>
            <Image source={{uri:"https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}}/>
            <View style={{marginTop:width-200}}> 
            <Text >{el.note1}/100</Text>
            </View>
          </View>
          <View style={{width:width-200,height:width / 2  ,borderRadius: 11,marginTop:40 ,borderWidth:0.6,alignItems: 'center'}}>
          <Text>{el.noteName}</Text>
          <Image source={{uri:"https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}}/>
            <View style={{marginTop:width-200}}>
            <Text>{el.note2}/100</Text>
            </View>
          </View>
          <View style={{width:width-200,height:width / 2  ,borderRadius: 11 ,borderWidth:0.6,marginTop:40,alignItems: 'center'}}>
          <Text>{el.noteName}</Text>
          <Image source={{uri:"https://static.scientificamerican.com/sciam/cache/file/1DDFE633-2B85-468D-B28D05ADAE7D1AD8_source.jpg?w=590&h=800&D80F3D79-4382-49FA-BE4B4D0C62A5C3ED"}}/>
            <View style={{marginTop:width-200}}>
            <Text>{el.note3}/100</Text>
            </View>
          </View>
          </View>
        )
      })}
      </ScrollView>


        

        </View>
    </View>
    <View style={{width:width,height:height -400}}></View>
</ScrollView>
</SafeAreaView>
)
}

const Styles=StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },notes:{
        marginTop:100,
        
        width:140,
        height:180,
        borderRadius:15,
        borderWidth:0.6,
        display:'flex'
      },noteNum:{
        width:140,
        height:50,
        borderBottomRightRadius:15,
        borderBottomLeftRadius:15,
        borderWidth:0.6,
        marginTop:74.3,
        alignItems: 'center',
        justifyContent: 'center'
      }
})

export default Note
{/* <View>
          
<View style={Styles.notes}>
<Image
style={{width:40,
height:40,
marginLeft:5,
}}
source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
   <Text></Text>
    <View style={Styles.noteNum}>
      <Text>90/100</Text>
    </View>
</View>
<View style={Styles.notes}>
<Image
style={{width:40,
height:40,
marginLeft:5,
}}
source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
   <Text></Text>
    <View style={Styles.noteNum}>
      <Text>90/100</Text>
    </View>
</View>
<View style={Styles.notes}>
<Image
style={{width:40,
height:40,
marginLeft:5,
}}
source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />
   <Text></Text>
    <View style={Styles.noteNum}>
      <Text>90/100</Text>
    </View>
</View>

</View> */}
