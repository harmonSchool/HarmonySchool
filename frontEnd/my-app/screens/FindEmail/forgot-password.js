import {useEffect} from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput , TouchableOpacity, Alert } from 'react-native';
import { Svg, Path, Defs, Pattern, Use, Image } from 'react-native-svg';
import axios from 'axios';
import { useState } from 'react';
import ADRESS_API from "../serverUrl";



export default function Findyouremail({ navigation }) {
  const [email, setEmail] = useState('');
  const [verificationCode, setVerificationCode] = useState('');
  const [userData, setUserData] = useState(null);
  const [userDataEmail, setUserDataEmail] = useState('');

  const getAllUserData = async () => {
    try {
      const response = await fetch('http://192.168.1.5:2023/user/getAll');
      if (response.ok) {
        const data = await response.json();
        const emails = data.map(user => user.email + " , " + " password "  + user.password);
        setUserDataEmail(emails[0]); 
        console.log('Emails:', emails);
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  useEffect(() => {
    getAllUserData();
  }, []);

  

  const sendVerificationCode = async () => {
    if (!email) {
      console.error('Recipient email is required');
      return;
    }
  
    try {
      const response = await fetch('http://192.168.1.5:2023/user/getAll');
      if (response.ok) {
        const data = await response.json();
        const emails = data.map(user => user.email);
  
        if (emails.includes(email)) {
          // Email is in the list obtained from getAllUserData
          const response = await axios.post('http://192.168.1.5:2023/send-verification-code', {
            email: email,
          });
  
          if (response.status === 200) {
            setVerificationCode(response.data.message);
            Alert.alert('Verification code sent successfully');
navigation.navigate("Code")
          } else {
            Alert.alert('Failed to send verification code');
          }
        } else {
          Alert.alert('Email does not match');
        }
      } else {
        throw new Error('Network response was not ok');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  
  
    return (
    		<View style={styles.findyouremail}>
            <View style={styles.container} >
      			<Text style={styles.home}>
      			</Text>
      			<ImageBackground style={styles.icons8pencil654} ></ImageBackground>
      			<View method="Post" style={styles.emailAddressHolder}>
        				<TextInput 
                onChangeText={(text) => setEmail(text)}

                type="submit"  style={styles.rectangle3}/>
        				<View style={styles.carbonemail}>
<Svg style={styles.vector} width="23" height="16" viewBox="0 0 23 16" fill="none" >
<Path d="M20.5071 0.608643H2.07236C1.66493 0.608643 1.27418 0.770495 0.986085 1.05859C0.697985 1.34669 0.536133 1.73744 0.536133 2.14487V14.4347C0.536133 14.8422 0.697985 15.2329 0.986085 15.521C1.27418 15.8091 1.66493 15.971 2.07236 15.971H20.5071C20.9146 15.971 21.3053 15.8091 21.5934 15.521C21.8815 15.2329 22.0434 14.8422 22.0434 14.4347V2.14487C22.0434 1.73744 21.8815 1.34669 21.5934 1.05859C21.3053 0.770495 20.9146 0.608643 20.5071 0.608643ZM18.8173 2.14487L11.2898 7.3527L3.76222 2.14487H18.8173ZM2.07236 14.4347V2.84386L10.8519 8.91966C10.9805 9.00886 11.1333 9.05665 11.2898 9.05665C11.4462 9.05665 11.599 9.00886 11.7276 8.91966L20.5071 2.84386V14.4347H2.07236Z" fill="#66328E"/>
</Svg>


<View>
</View>


        				</View>
        				<View    style={styles.loginbutton}>
                        
          					<View    
                    style={styles.rectangle2}/>
          					<Text      onPress={()=>sendVerificationCode()} 
                    
                    style={styles.findyouraccount}>
            				 		{`Find your account`}
          					</Text>
        				</View>
        				<Text style={styles.enteryouremailaddress}>
          					{`Enter your email address`}
        				</Text>
        			
      			</View>
      			



</View>
    		</View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: "9%",
        marginTop: "30%",
        left:8
      },
  	findyouremail: {
    flexShrink: 0,
    height: 800,
    boxShadow: "20px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 7.681159973144531
},
  	home: {
    position: "absolute",
    flexShrink: 0,
    top: 35,
    left: 21,
    width: 37,
    height: 24,
    textAlign: "center",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 23.04347801208496
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
    flexShrink: 0,
    top: 143,
    height: 163,
    left: 39,
    width: 249
},
  	rectangle3: {
    position: "absolute",
    flexShrink: 0,
    top: 67,
    width: 249,
    height: 47,
    transform: [
        {
            rotateZ: "0.00deg"
        }
    ],
    backgroundColor: "rgba(248, 240, 240, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
},
  	carbonemail: {
    position: "absolute",
    flexShrink: 0,
    top: 78,
    height: 25,
    left: 12,
    width: 25,
    alignItems: "flex-start",
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
    top: 130,
    height: 33,
    left: 13,
    width: 224
},
  	rectangle2: {
    position: "absolute",
    flexShrink: 0,
    width: 224,
    height: 33,
    backgroundColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
},
  	findyouraccount: {
    position: "absolute",
    flexShrink: 0,
    top: 2,
    left: 55,
    width: 112,
    height: 28,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312,
    
},
  	enteryouremailaddress: {
    position: "absolute",
    flexShrink: 0,
    top: 28,
    left: 9,
    width: 155,
    height: 28,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312 , 
    fontSize:19 , 
    top:-16 , 
    left:50
},
  	_findyouraccount: {
    position: "absolute",
    flexShrink: 0,
    left: 9,
    width: 112,
    height: 28,
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312
},
  	ghazalaarianaTunis: {
    position: "absolute",
    flexShrink: 0,
    top: 382,
    left: 96,
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
    width: 100,
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
    left: 80,
    width: 166,
    height: 187,
    overflow: "visible"
}
})