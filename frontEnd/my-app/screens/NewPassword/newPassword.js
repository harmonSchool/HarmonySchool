import React from 'react';
import { TouchableOpacity ,View, Text, ImageBackground, StyleSheet, TextInput ,Alert , Button } from 'react-native';
import { Svg, Path } from 'react-native-svg';
import { useState } from 'react';


export default function ResetPasswordScreen({navigation}) {
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');
  const userId = 'userId'; 

  const handleSubmit = () => {
    if (!newPassword || !confirmNewPassword) {
      return Alert.alert('All fields are required');
    }

    if (newPassword !== confirmNewPassword) {
      return Alert.alert('Passwords do not match');
    }

    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ newPassword, confirmNewPassword }),
    };

    fetch(`http://192.168.1.5:3001/reset-password/${userId}`, requestOptions)
      .then((response) => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Failed to update password');
        }
      })
      .then((data) => {
        if (data.message === 'Password updated successfully') {
          Alert.alert('Password updated successfully');
          navigation.navigate("Home")
        } else {
          throw new Error('Invalid user ID');
        }
      })
      .catch((error) => {
        console.error('Error:', error);
        Alert.alert('An error occurred while updating the password');
      });
  }
    return (
    		<View style={styles.confirmpassword}>
        <View style={styles.container} >

      		
      			<Text style={styles.ghazalaarianaTunis}>
        				{`16 rue abdenasser / ariana`}
      			</Text>
      			<Text style={styles._21627011482}>
        				{`+216 27011 482`}
      			</Text>
      			<Text style={styles.schoolgmailcom}>
        				{`School@gmail.com`}
      			</Text>
<Svg style={styles.vector} width="16" height="24" viewBox="0 0 16 24" fill="none" >
<Path d="M8 0.704559C3.6 0.704559 0 4.81885 0 9.84743C0 16.0189 7 22.9903 7.3 23.3332C7.5 23.4474 7.8 23.5617 8 23.5617C8.2 23.5617 8.5 23.4474 8.7 23.3332C9 22.9903 16 16.0189 16 9.84743C16 4.81885 12.4 0.704559 8 0.704559ZM8 20.9332C5.9 18.6474 2 13.7331 2 9.84743C2 6.076 4.7 2.99028 8 2.99028C11.3 2.99028 14 6.076 14 9.84743C14 13.6189 10.1 18.6474 8 20.9332ZM8 5.27599C5.8 5.27599 4 7.33314 4 9.84743C4 12.3617 5.8 14.4189 8 14.4189C10.2 14.4189 12 12.3617 12 9.84743C12 7.33314 10.2 5.27599 8 5.27599ZM8 12.1331C6.9 12.1331 6 11.1046 6 9.84743C6 8.59028 6.9 7.56171 8 7.56171C9.1 7.56171 10 8.59028 10 9.84743C10 11.1046 9.1 12.1331 8 12.1331Z" fill="#DA00FF"/>
</Svg>

<Svg style={styles._vector} width="21" height="24" viewBox="0 0 21 24" fill="none" >
<Path d="M2.15271 2.9001H6.64271L8.08972 7.03496L5.76471 8.80639C5.6278 8.91078 5.51555 9.05219 5.43792 9.21806C5.36029 9.38393 5.31969 9.56914 5.31971 9.75724C5.32271 9.86467 5.31971 9.75839 5.31971 9.75839V9.78239C5.32031 9.83349 5.32231 9.88457 5.32571 9.93553C5.33171 10.0292 5.34171 10.1561 5.36071 10.3127C5.39971 10.6212 5.47471 11.0464 5.62071 11.547C5.91471 12.5527 6.49071 13.8544 7.61271 15.1367C8.73471 16.419 9.87371 17.0772 10.7527 17.4132C11.1917 17.5801 11.5627 17.6647 11.8347 17.7104C11.9882 17.7349 12.1428 17.7502 12.2977 17.7561L12.3107 17.7572H12.3187C12.3187 17.7572 12.4307 17.7504 12.3197 17.7572C12.5054 17.7571 12.6873 17.698 12.8452 17.5863C13.0031 17.4747 13.1307 17.3151 13.2137 17.1252L13.8837 15.5938L18.3197 16.4395V21.3767C16.2087 21.7253 10.5067 22.0693 6.02671 16.9492C1.54671 11.8292 1.84671 5.31153 2.15271 2.9001ZM7.39271 10.3127L9.19971 8.93667C9.58146 8.64567 9.86403 8.21349 10 7.71263C10.1361 7.21177 10.1172 6.67269 9.94671 6.18581L8.49971 2.05095C8.35123 1.62684 8.09495 1.26331 7.76395 1.00725C7.43295 0.75119 7.04241 0.614349 6.64271 0.61438H2.10071C1.19171 0.61438 0.336714 1.33552 0.187714 2.46238C-0.152286 5.02467 -0.613286 12.5927 4.61271 18.5653C9.83871 24.5378 16.4607 24.0098 18.7027 23.6224C19.6887 23.451 20.3197 22.475 20.3197 21.4361V16.4395C20.3198 15.8985 20.1519 15.3749 19.8459 14.962C19.5399 14.5491 19.1157 14.2737 18.6487 14.1847L14.2127 13.3401C13.7908 13.2596 13.3574 13.3358 12.9762 13.5576C12.595 13.7793 12.2861 14.1349 12.0947 14.5721L11.7487 15.3641C11.6264 15.3297 11.5053 15.2896 11.3857 15.2441C10.7657 15.0087 9.90471 14.5241 9.02671 13.5207C8.14871 12.5172 7.72471 11.5332 7.51871 10.8235C7.46952 10.6558 7.4278 10.4853 7.39371 10.3127H7.39271Z" fill="#BA68C8"/>
</Svg>

<Svg style={styles.__vector} width="20" height="19" viewBox="0 0 20 19" fill="none" >
<Path d="M3.25 7.97166e-09H16.75C17.5801 -6.21106e-05 18.3788 0.362919 18.9822 1.01448C19.5856 1.66605 19.948 2.5568 19.995 3.504L20 3.71429V14.5714C20.0001 15.5202 19.6824 16.433 19.1123 17.1226C18.5422 17.8122 17.7628 18.2263 16.934 18.28L16.75 18.2857H3.25C2.41986 18.2858 1.62117 17.9228 1.01777 17.2713C0.414367 16.6197 0.0519987 15.7289 0.00500012 14.7817L6.97518e-09 14.5714V3.71429C-5.43467e-05 2.76556 0.317554 1.85277 0.887672 1.16317C1.45779 0.473563 2.23719 0.0594271 3.066 0.00571443L3.25 7.97166e-09ZM18.5 6.14058L10.35 11.0434C10.258 11.099 10.1568 11.1321 10.053 11.1405C9.94921 11.149 9.84499 11.1327 9.747 11.0926L9.651 11.0446L1.5 6.14172V14.5714C1.50002 15.0734 1.66517 15.557 1.96268 15.9262C2.26019 16.2954 2.6683 16.5233 3.106 16.5646L3.25 16.5715H16.75C17.1893 16.5714 17.6126 16.3825 17.9357 16.0423C18.2588 15.702 18.4581 15.2353 18.494 14.7349L18.5 14.5714V6.14058ZM16.75 1.71429H3.25C2.81081 1.71431 2.38768 1.90306 2.06461 2.24307C1.74154 2.58308 1.54214 3.04949 1.506 3.54972L1.5 3.71429V4.20458L10 9.31658L18.5 4.20343V3.71429C18.5 3.21218 18.3347 2.72845 18.037 2.35919C17.7392 1.98994 17.3309 1.76218 16.893 1.72115L16.75 1.71429Z" fill="#BA68C8"/>
</Svg>

      			<View style={styles.emailAddressHolder}>
        				<View style={styles.rectangle1}/>
                <View style={styles.loginbutton} >
                <View style={styles.rectangle2} />
                <Text style={styles.send}>Send</Text>
              
              <View style={styles.rectangle2} />
          					<Text onPress={handleSubmit} style={styles.send}>
            						{`Send`}
          					</Text>
        				</View>
        				<Text style={styles.enterThenewPassword}>
          					{`Reset Password`}
        				</Text>
        				<TextInput 
                secureTextEntry
                value={newPassword}
                onChangeText={(text) => setNewPassword(text)}
                style={styles.rectangle3}/>

                
        				<TextInput 
                secureTextEntry
                value={confirmNewPassword}
                onChangeText={(text) => setConfirmNewPassword(text)}

                style={styles.rectangle4}/>
        				<Text style={styles.newpassword}>
          					{`new password`}
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
    marginTop: "2%",
    

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
    top: "-5%",
    left: "23%",
    width: 200,
    height: 28,
    textAlign: "left",
    color: "rgba(102, 50, 142, 1)",
    letterSpacing: 0,
    lineHeight: 27.652175903320312,
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