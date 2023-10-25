import React, { useState } from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import ADRESS_API from '../serverUrl';
export default function Code({navigation}) {
  const [verificationCode, setVerificationCode] = useState('');

  const handleSubmit = () => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify({ verificationCode: verificationCode }),
    };

    fetch(`http://192.168.1.5:2023/check-verification-code`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert('Verification code is valid');
          navigation.navigate("NewPassword")
        } else {
          alert('Verification code is invalid');
        }
      })
      .catch((error) => {
        console.log(error);
        alert('An error occurred');
      });
  };


    return (
    		<View style={styles.enteryourcode}>
        <View  style={styles.container} >
      			<Text style={styles.home}>
      			</Text>
      			
      		


      			<View style={styles.emailAddressHolder}>
        				<View style={styles.rectangle1}/>
        				<Text style={styles._enteryourcode}>
          					{`Enter code`}
        				</Text>
        				<TextInput style={styles.rectangle3}
            onChangeText={(text) => setVerificationCode(text)}

                />
        				<View 
                style={styles.rectangle2}/>
        				<Text                 onPress={handleSubmit}
                style={styles.send}>
          					{`Send`}
        				</Text>
      			</View>
    		</View>
        </View>
    )
}

const styles = StyleSheet.create({

  container: {
    margin: "9%",
    marginTop: "2%",
    
  }, 
  	enteryourcode: {
          flexShrink: 0,
    height: 744,
    backgroundColor: "rgba(255, 255, 255, 1)",
    boxShadow: "20px 4px 4px 0px rgba(0, 0, 0, 0.25)",
    alignItems: "flex-start",
    rowGap: 0,
    borderRadius: 7.681159973144531,
    height:"150%"

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
  	contactusamico1: {
    position: "absolute",
    flexShrink: 0,
    top: 513,
    left: 80,
    width: 166,
    height: 187
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
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
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
    fontFamily: "Poppins",
    fontSize: 14,
    fontWeight: "500",
    letterSpacing: 0
},
  	vector: {
    position: "absolute",
    flexShrink: 0,
    top: 383,
    right: 244,
    bottom: 340,
    left: 58,
    overflow: "visible"
},
  	_vector: {
    position: "absolute",
    flexShrink: 0,
    top: 425,
    right: 243,
    bottom: 298,
    left: 55,
    overflow: "visible"
},
  	__vector: {
    position: "absolute",
    flexShrink: 0,
    top: 475,
    right: 244,
    bottom: 252,
    left: 54,
    overflow: "visible"
},
  	emailAddressHolder: {
    position: "absolute",
    flexShrink: 0,
    top: 147,
    height: 148,
    left: 25,
    width: 277
},
  	rectangle1: {
    position: "absolute",
    flexShrink: 0,
    width: 277,
    height: 148,
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
  	_enteryourcode: {
    position: "absolute",
    flexShrink: 0,
    top: 0,
    left: 90,
    width: 97,
    height: 28,
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    fontFamily: "Poppins",
    fontSize: 12.28985595703125,
    fontWeight: "700",
    letterSpacing: 0,
    lineHeight: 27.652175903320312,
    fontSize:19
},
  	rectangle3: {
    position: "absolute",
    flexShrink: 0,
    top: 47,
    left: 28,
    width: 220,
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
  	rectangle2: {
    position: "absolute",
    flexShrink: 0,
    top: 104,
    left: 49,
    width: 179,
    height: 32,
    backgroundColor: "rgba(102, 50, 142, 1)",
    borderRadius: 7.681159973144531
},
  	send: {
    position: "absolute",
    flexShrink: 0,
    top: 106,
    left: 121,
    width: 32,
    height: 28,
    textAlign: "left",
    color: "rgba(255, 255, 255, 1)",
    fontFamily: "Poppins",
    fontSize: 12.28985595703125,
    fontWeight: "500",
    letterSpacing: 0,
    lineHeight: 27.652175903320312
}
})