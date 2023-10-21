import React from 'react';
import { View, Text, ImageBackground, StyleSheet, TextInput } from 'react-native';
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

    fetch(`http://192.168.1.5:3001/send-verification-code`, requestOptions)
      .then((response) => {
        if (response.ok) {
          alert('Verification code sent successfully to your Email');
          navigation.navigate('Code');
        } else {
          alert('Error sending Verification code to you Email');
        }
      })

      .catch((error) => {
        console.error(error);
        alert('An error occurred');
      });
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

        				</View>
        				<View    style={styles.loginbutton}>
                        
          					<View    
                    style={styles.rectangle2}/>
          					<Text      onPress={handleSubmit} 
                    
                    style={styles.findyouraccount}>
            				 		{`Find your account`}
          					</Text>
        				</View>
        				<Text style={styles.enteryouremailaddress}>
          					{`Enter your email address`}
        				</Text>
        				<Text style={styles._findyouraccount}>
          					{`Find your account`}
        				</Text>
      			</View>
      			<Text style={styles.ghazalaarianaTunis}>
        				{`16 ghazala , ariana /tunis`}
      			</Text>
      			<Text style={styles._21627011482}>
        				{`+216 27011 482`}
      			</Text>
      			<Text style={styles.schoolgmailcom}>
        				{`School@gmail.com`}
      			</Text>
<Svg style={styles._vector} width="16" height="23" viewBox="0 0 16 23" fill="none" >
<Path d="M8 0.885254C3.6 0.885254 0 4.71154 0 9.38812C0 15.1276 7 21.611 7.3 21.9299C7.5 22.0361 7.8 22.1424 8 22.1424C8.2 22.1424 8.5 22.0361 8.7 21.9299C9 21.611 16 15.1276 16 9.38812C16 4.71154 12.4 0.885254 8 0.885254ZM8 19.6979C5.9 17.5721 2 13.0018 2 9.38812C2 5.88069 4.7 3.01097 8 3.01097C11.3 3.01097 14 5.88069 14 9.38812C14 12.8956 10.1 17.5721 8 19.6979ZM8 5.13669C5.8 5.13669 4 7.04983 4 9.38812C4 11.7264 5.8 13.6396 8 13.6396C10.2 13.6396 12 11.7264 12 9.38812C12 7.04983 10.2 5.13669 8 5.13669ZM8 11.5138C6.9 11.5138 6 10.5573 6 9.38812C6 8.21898 6.9 7.26241 8 7.26241C9.1 7.26241 10 8.21898 10 9.38812C10 10.5573 9.1 11.5138 8 11.5138Z" fill="#DA00FF"/>
</Svg>

<Svg style={styles.__vector} width="21" height="23" viewBox="0 0 21 23" fill="none" >
<Path d="M2.15271 2.77708H6.64271L8.08972 6.6225L5.76471 8.26993C5.6278 8.36702 5.51555 8.49853 5.43792 8.65279C5.36029 8.80705 5.31969 8.97929 5.31971 9.15423C5.32271 9.25414 5.31971 9.15529 5.31971 9.15529V9.17761C5.32031 9.22514 5.32231 9.27264 5.32571 9.32004C5.33171 9.40719 5.34171 9.52517 5.36071 9.67078C5.39971 9.95775 5.47471 10.3531 5.62071 10.8187C5.91471 11.754 6.49071 12.9646 7.61271 14.1571C8.73471 15.3496 9.87371 15.9618 10.7527 16.2743C11.1917 16.4295 11.5627 16.5081 11.8347 16.5507C11.9882 16.5734 12.1428 16.5876 12.2977 16.5932L12.3107 16.5942H12.3187C12.3187 16.5942 12.4307 16.5879 12.3197 16.5942C12.5054 16.5941 12.6873 16.5391 12.8452 16.4353C13.0031 16.3315 13.1307 16.183 13.2137 16.0065L13.8837 14.5822L18.3197 15.3688V19.9603C16.2087 20.2845 10.5067 20.6044 6.02671 15.8428C1.54671 11.0812 1.84671 5.01971 2.15271 2.77708ZM7.39271 9.67078L9.19971 8.3911C9.58146 8.12046 9.86403 7.71854 10 7.25274C10.1361 6.78694 10.1172 6.2856 9.94671 5.8328L8.49971 1.98738C8.35123 1.59296 8.09495 1.25487 7.76395 1.01674C7.43295 0.778601 7.04241 0.651339 6.64271 0.651367H2.10071C1.19171 0.651367 0.336714 1.32203 0.187714 2.37001C-0.152286 4.75294 -0.613286 11.7912 4.61271 17.3457C9.83871 22.9002 16.4607 22.4091 18.7027 22.0488C19.6887 21.8894 20.3197 20.9817 20.3197 20.0156V15.3688C20.3198 14.8656 20.1519 14.3787 19.8459 13.9947C19.5399 13.6107 19.1157 13.3545 18.6487 13.2717L14.2127 12.4863C13.7908 12.4114 13.3574 12.4823 12.9762 12.6885C12.595 12.8948 12.2861 13.2255 12.0947 13.6321L11.7487 14.3686C11.6264 14.3366 11.5053 14.2994 11.3857 14.257C10.7657 14.0381 9.90471 13.5874 9.02671 12.6542C8.14871 11.721 7.72471 10.8059 7.51871 10.1459C7.46952 9.98986 7.4278 9.83129 7.39371 9.67078H7.39271Z" fill="#BA68C8"/>
</Svg>

<Svg style={styles.___vector} width="20" height="18" viewBox="0 0 20 18" fill="none" >
<Path d="M3.25 0.856567H16.75C17.5801 0.85651 18.3788 1.19408 18.9822 1.80004C19.5856 2.40599 19.948 3.23439 19.995 4.11529L20 4.31086V14.408C20.0001 15.2903 19.6824 16.1392 19.1123 16.7806C18.5422 17.4219 17.7628 17.807 16.934 17.857L16.75 17.8623H3.25C2.41986 17.8624 1.62117 17.5248 1.01777 16.9188C0.414367 16.3129 0.0519987 15.4845 0.00500012 14.6036L6.97518e-09 14.408V4.31086C-5.43467e-05 3.42854 0.317554 2.57964 0.887672 1.93831C1.45779 1.29698 2.23719 0.911835 3.066 0.861882L3.25 0.856567ZM18.5 6.56731L10.35 11.127C10.258 11.1786 10.1568 11.2094 10.053 11.2173C9.94921 11.2251 9.84499 11.2099 9.747 11.1727L9.651 11.128L1.5 6.56837V14.408C1.50002 14.8748 1.66517 15.3245 1.96268 15.6679C2.26019 16.0113 2.6683 16.2232 3.106 16.2616L3.25 16.268H16.75C17.1893 16.268 17.6126 16.0923 17.9357 15.7759C18.2588 15.4594 18.4581 15.0254 18.494 14.56L18.5 14.408V6.56731ZM16.75 2.45086H3.25C2.81081 2.45087 2.38768 2.62641 2.06461 2.94262C1.74154 3.25883 1.54214 3.69259 1.506 4.15781L1.5 4.31086V4.76682L10 9.52099L18.5 4.76576V4.31086C18.5 3.84389 18.3347 3.39403 18.037 3.05062C17.7392 2.70721 17.3309 2.49539 16.893 2.45723L16.75 2.45086Z" fill="#BA68C8"/>
</Svg>

<Svg style={styles.contactusamico1} width="166" height="187" viewBox="0 0 166 187" fill="none"  xmlnsXlink="http://www.w3.org/1999/xlink">
<Path d="M0 0H166V187H0V0Z" fill="url(#pattern0)"/>
<Defs>
<Pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
<Use xlinkHref="#image0_379_473" transform="matrix(0.000563253 0 0 0.0005 -0.063253 0)"/>
</Pattern>

</Defs>
</Svg>
</View>
    		</View>
    )
}

const styles = StyleSheet.create({
    container: {
        margin: "9%",
        marginTop: "2%",
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
    lineHeight: 27.652175903320312
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
    lineHeight: 27.652175903320312
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