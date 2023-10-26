import { StyleSheet, Text, View, Image,TextInput,TouchableOpacity,ScrollView, Dimensions  } from 'react-native';
import React, { useEffect,useState } from 'react'
import { SafeAreaView } from "react-native-safe-area-context";
import { Center } from 'native-base';
import axios from 'axios';

const Notes=()=>{
  const {height,width}=Dimensions.get('window')
const [data,setData]=useState([])
useEffect(()=>{
  axios.get("http://192.168.104.14:3000/Note/getAll").then((res)=>{
  setData(res.data)
  console.log("Done");
  }).catch((err)=>{
    console.log(err);
  })
})


    return (
      <SafeAreaView>
<ScrollView>
 
    <View style={Styles.container}>
    <Image
    style={{width:40,
        height:40,
        marginLeft:width/50,
        marginTop:height - 500
        
      }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} /><Image />
        <Text style={{marginLeft:width/ 50 , marginTop:height -570 }}>Notes</Text>
        < View style={{marginTop:height - 550}}>
      {data.map((el)=>{
        return (
<ScrollView horizontal={true}>
          <View style={{width:width-200,height:width / 2  ,borderRadius: 11 ,borderWidth:0.6,marginTop:width-250,alignItems: 'center',}}>
            <View style={{marginTop:width-200}}> 
            <Text >{el.note1}/100</Text>
            </View>
          </View>
          <View style={{width:width-200,height:width / 2  ,borderRadius: 11 ,borderWidth:0.6,marginTop:width-250,alignItems: 'center',marginLeft:width/20}}>
            <View style={{marginTop:width-200}}>
            <Text>{el.note2}/100</Text>
            </View>
          </View>
          <View style={{width:width-200,height:width / 2  ,borderRadius: 11 ,borderWidth:0.6,marginTop:width-250,alignItems: 'center',marginLeft:width/20}}>
            <View style={{marginTop:width-200}}>
            <Text>{el.note3}/100</Text>
            </View>
          </View>
        </ScrollView>
        )
      })}
        

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

export default Notes
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
