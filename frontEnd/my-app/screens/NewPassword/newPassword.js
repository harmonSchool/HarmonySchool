import {useEffect} from 'react';
import { TouchableOpacity ,View, Text, ImageBackground, StyleSheet, TextInput ,Alert , Button } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useState } from 'react';
import axios from 'axios';

export default function ResetPasswordScreen({ navigation }) {
  const [email, setEmail] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [isError, setIsError] = useState(false);
 const  [idUsers , setIdusers]=useState("")
  const handleResetPassword = () => {
    if (!email || !newPassword) {
      Alert.alert("Please enter both email and new password.");
      return;
    }

    const requestBody = {
      newPassword: newPassword,
      confirmPassword: newPassword,
    };

    axios
      .post(`http://192.168.1.5:2023/user/updatePassword/${idUsers}`, requestBody)
      .then((response) => {
        Alert.alert("Password reset successful!");
      })
      .catch((error) => {
        console.error(error);
        Alert.alert("Password reset failed. Please try again.");
      });
  };

  const verify = (password) => {
    if (password.length < 6) {
      setIsError(true);
      Alert.alert("Your password must be at least 6 characters long.");
    }
  };


    return (
    		<View style={styles.confirmpassword}>
        <View style={styles.container} >

      		
      		

      			<View style={styles.emailAddressHolder}>
        				<View style={styles.rectangle1}/>
                <View style={styles.loginbutton} >
                <View style={styles.rectangle2} />
                <Text style={styles.send}>Send</Text>
              
              <View style={styles.rectangle2} 
              />
          					<Text style={styles.send}
                    onPress={handleResetPassword}

                    >
            						{`Send`}
          					</Text>
        				</View>
        				<Text style={styles.enterThenewPassword}>
          					{`Reset your Password`}
        				</Text>
                <TextInput
                style={styles.rectangle3}
                value={email}

                onChangeText={setEmail}

                />

                
                <TextInput      
                secureTextEntry
                value={newPassword}
                onBlur={verify}
                isError={isError}

                style={styles.rectangle4}
                onChangeText={setNewPassword}
              />
        				<Text style={styles.newpassword}>
          					{`Email`}
        				</Text>
        				<Text style={styles.confirrmThenewpassword}>
          					{`Confirrm The new password`}
        				</Text>
      			</View>
    		</View>
        </View>

                )
}

const styles = StyleSheet.create({

  container: {
    margin: "9%",
    marginTop: "28%",
    

  },

  	confirmpassword: {
      height: 800,

    flexShrink: 0,
    height: "100%",
    width: "100%",
    backgroundColor: "rgba(255, 255, 255, 1)",
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
  	contactusamico1: {
    position: "absolute",
    flexShrink: 0,
    top: 588,
    left: 79,
    width: 166,
    height: 187
},
  	ghazalaarianaTunis: {
    position: "absolute",
    flexShrink: 0,
    top: 457,
    left: 100,
    width: 178,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: 0
},
  	_21627011482: {
    position: "absolute",
    flexShrink: 0,
    top: 501,
    left: 95,
    width: 100,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: 0
},
  	schoolgmailcom: {
    position: "absolute",
    flexShrink: 0,
    top: 548,
    left: 100,
    width: 138,
    height: 21,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: 0
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 454,
    right: 243,
    bottom: 323,
    left: 55,
    overflow: "visible"
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 497,
    right: 244,
    bottom: 280,
    left: 54,
    overflow: "visible"
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 552,
    right: 244,
    bottom: 230,
    left: 54,
    overflow: "visible"
},
  	emailAddressHolder: {
    position: "absolute",
    flexShrink: 0,
    top: 115,
    height: 287,
    left: 24,
    width: 277
},
  	rectangle1: {
    position: "absolute",
    flexShrink: 0,
    width: 277,
    height: 287,
    transform: [
        {
            rotateZ: "0.00deg"
        }
    ],
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderWidth: 0.7681159973144531,
    borderColor: "rgba(255, 255, 255, 1)",
    borderRadius: 7.681159973144531
},
  	loginbutton: {
    position: "absolute",
    flexShrink: 0,
    top: 223,
    height: 33,
    left: 25,
    width: 232
},
  	rectangle2: {
      marginTop:"10%",
    
    position: "absolute",
    flexShrink: 0,
    top: 0.34112548828125,
    left: 2,
    width: 232,
    height: 33,
    backgroundColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
},
  	send: {
      marginTop:"10%",

    position: "absolute",
    flexShrink: 0,
    top: 2.34112548828125,
    left: 99.10113525390625,
    width: 33,
    height: 28,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312
},
  	enterThenewPassword: {
    position: "absolute",
    flexShrink: 0,
    top: "-15%",
    left: "15%",
    width: 200,
    height: 28,
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    letterSpacing: 0,
    lineHeight: 27.652175903320312,
    fontSize:20,
    fontWeight:"700"
},
  	rectangle3: {
    position: "absolute",
    flexShrink: 0,
    top: 74,
    left: 28,
    width: 228,
    height: 45,
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
  	rectangle4: {
    position: "absolute",
    flexShrink: 0,
    top: 156,
    left: 29,
    width: 228,
    height: 45,
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
  	newpassword: {
    position: "absolute",
    flexShrink: 0,
    top: 43,
    left: 32,
    width: 120,
    height: 28,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312
},
  	confirrmThenewpassword: {
    position: "absolute",
    flexShrink: 0,
    top: 123,
    left: 31,
    width: 191,
    height: 33,
    textAlign: "left",
    color: "rgba(0, 0, 0, 1)",
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312
},
  	showpasswordicon181: {
    position: "absolute",
    flexShrink: 0,
    top: 195,
    left: 221,
    width: 28,
    height: 28
},
  	_showpasswordicon181: {
    position: "absolute",
    flexShrink: 0,
    top: 227,
    left: 245,
    width: 28,
    height: 28
}
})