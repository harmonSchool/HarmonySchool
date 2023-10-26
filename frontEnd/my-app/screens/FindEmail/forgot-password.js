import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput, TouchableOpacity } from 'react-native';
import { Svg, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
import axios from 'axios';
import { useState } from 'react';
import ADRESS_API from '../serverUrl';
export default function Findyouremail({ navigation }) {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ user_email: email }),
    };

    fetch(`http://192.168.104.14:3000/send-verification-code`, requestOptions)
      .then((response) => {
        
          alert('Verification code sent successfully to your Email');
          navigation.navigate('Code');
      })
      .catch((error) => {
        console.error(error);
        alert('An error occurred');
      });
  };


  
  
    return (
//     		<View >
//             <View style={styles.container} >
//       			<Text >
//       			</Text>
//       			<View method="Post" style={styles.emailAddressHolder}>
//         				<TextInput 
//                 onChangeText={(text) => setEmail(text)}
//                 type="submit" placeholder='   enter your email'  style={styles.rectangle3}/>
//         				<View style={styles.carbonemail}>
// <Svg style={styles.vector} width="23" height="16" viewBox="0 0 23 16" fill="none" >
// <Path d="M20.5071 0.608643H2.07236C1.66493 0.608643 1.27418 0.770495 0.986085 1.05859C0.697985 1.34669 0.536133 1.73744 0.536133 2.14487V14.4347C0.536133 14.8422 0.697985 15.2329 0.986085 15.521C1.27418 15.8091 1.66493 15.971 2.07236 15.971H20.5071C20.9146 15.971 21.3053 15.8091 21.5934 15.521C21.8815 15.2329 22.0434 14.8422 22.0434 14.4347V2.14487C22.0434 1.73744 21.8815 1.34669 21.5934 1.05859C21.3053 0.770495 20.9146 0.608643 20.5071 0.608643ZM18.8173 2.14487L11.2898 7.3527L3.76222 2.14487H18.8173ZM2.07236 14.4347V2.84386L10.8519 8.91966C10.9805 9.00886 11.1333 9.05665 11.2898 9.05665C11.4462 9.05665 11.599 9.00886 11.7276 8.91966L20.5071 2.84386V14.4347H2.07236Z" fill="green"/>
// </Svg>

//         				</View>
        			
//                 <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)",top:-108  ,  fontSize:20,fontWeight: "200",left:-28}}>to update your password</Text>
//         				<Text style={styles.enteryouremailaddress}>
//           					{`Enter your email address`}
//         				</Text>
//         				<Text style={styles._findyouraccount}>
//           					{`Find your account`}
//         				</Text>
//                 <View style={styles.btn}>
//         <Text style={styles.Log} onPress={handleSubmit}>
//           Find your account
//         </Text>
//       </View>
//       			</View>
      		


// </View>
//     		</View>
<View style={styles.container}>
        <View></View>
          
        <Text style={{marginTop:"1.5%", color: "rgba(0, 0, 0, 1)",top:-108  ,  fontSize:20,fontWeight: "200",left:-28}}>to update your password</Text>
        <Text style={{left:'-23%', top:"-1%", color: "rgba(0, 0, 0, 1)",fontSize:12,fontWeight: "300"}}>enter your email adress</Text>
        <TextInput
          onChangeText={(text) => setEmail(text)}
            type="submit" placeholder='   enter your email'  style={styles.rectangle3}/>
       
       
        <TouchableOpacity style={styles.btn}>
        <Text style={styles.Log}>Find your email</Text>
       
      </TouchableOpacity> 
      </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
       justifyContent:"center",
       alignItems:"center"
      },
 
  	home: {
    position: "absolute",
    flexShrink: 0,
    top: 35,
    width: 37,
    height: 24,
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 23.04347801208496
},btn:{
  top:'30%',
  width:'90%',
  height:'10%',
  borderRadius:8,
  justifyContent:"center",
alignItems:"center",
  backgroundColor: "#1FA609",
},Log:{
  color:"#fff",

},
  	icons8pencil654: {
    position: "absolute",
    flexShrink: 0,
    top: 69,
    left: 142,
    width: 34,
    height: 39
},
  	emailAddressHolder: {
    position: "absolute",
    
    top: 143,
    height: 163,
    width: 249
},
  	rectangle3: {
      borderColor: "#66328E",
      height: "10%",
      width: "90%",
      backgroundColor: "#CFCDCD",
      borderRadius: 5.681159973144531
},
  	carbonemail: {
    position: "absolute",
    flexShrink: 0,
    top: 78,
    height: 25,
    left: 12,
    width: 25,
    rowGap: 0
},
  	vector: {
    marginLeft:200,
    position: "absolute",
    flexShrink: 0,
    top: 5,
    right: 2,
    bottom: 5,
    left: 2,
    overflow: "visible"
},
  	loginbutton: {
    position: "absolute",
    flexShrink: 0,
    top: 160,
    height: 33,
    width: 204, justifyContent:"center",
    alignItems:"center",
},
  	rectangle2: {
      left:-28,
      width:280,
      height:50,
      top:120,
      borderRadius:8,
      justifyContent:"center",
    alignItems:"center",
      backgroundColor: "#1FA609",
},
  	findyouraccount: {
    position: "absolute",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.28985595703125,
    top:130,
    left:20,
    fontWeight: "500",},
  	enteryouremailaddress: {
      left:-17, top:"-18%", color: "rgba(0, 0, 0, 1)",fontSize:12,fontWeight: "300"
},
  	_findyouraccount: {
    marginTop:"-55%",top:-38, color: "rgba(0, 0, 0, 1)"  ,  fontSize:20,fontWeight:"500",left:-25
},
  	ghazalaarianaTunis: {
    position: "absolute",
    flexShrink: 0,
    top: 382,
    width: 178,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0
},
  	_21627011482: {
    position: "absolute",
    flexShrink: 0,
    top: 426,
    left: 96,
    width: 110,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0
},
  	schoolgmailcom: {
    position: "absolute",
    flexShrink: 0,
    top: 473,
    left: 105,
    width: 138,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 383,
    right: 247,
    bottom: 340,
    left: 55,
    overflow: "visible"
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 425,
    right: 243,
    bottom: 298,
    left: 55,
    overflow: "visible"
},
  	___vector: {
    position: "absolute",
    flexShrink: 0,
    top: 475,
    right: 244,
    bottom: 252,
    left: 54,
    overflow: "visible"
},
  	contactusamico1: {
    position: "absolute",
    flexShrink: 0,
    top: 513,
    width: 166,
    height: 187,
    overflow: "visible"
}
})