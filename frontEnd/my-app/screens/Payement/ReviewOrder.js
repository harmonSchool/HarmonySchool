// import React, { useState } from 'react';
// import { View, Text, StyleSheet ,Image,Alert , TextInput } from 'react-native';
// import { FontAwesome } from '@expo/vector-icons';
// import { CheckBox } from 'react-native-elements';

// const PaymentMethod = ({navigation}) => {
//     const [busChecked, setBusChecked] = useState(false);
//   const [busQuarterChecked, setBusQuarterChecked] = useState(false);
//   const [breakfastChecked, setBreakfastChecked] = useState(false);
//   const [breakfastQuarterChecked, setBreakfastQuarterChecked] = useState(false);


//   const handleBusCheckbox = () => {
//     setBusChecked(!busChecked);
//     setBreakfastChecked(false); // Uncheck the other pair
//   };

//   const handleBreakfastCheckbox = () => {
//     setBreakfastChecked(!breakfastChecked);
//     setBusChecked(false); // Uncheck the other pair
//   };
//   const handleNextButtonPress = () => {
//     Alert.alert(
//       '',
//       'Are you sure you want to proceed?',
//       [
//         {
//           text: 'Cancel',
//           style: 'cancel',
//         },
//         {
//           text: 'OK',
//           onPress: () => {
//             // Handle the "OK" button press here
//             // You can put your logic for proceeding here
//           },
//         },
//       ],
//       { cancelable: false }
//     );
//   };

//   return ( 
//     <View  style={styles.paymentPage1}>
//     <View style={styles.homeDiv}>
//         <Text style={styles.homeText}>Home</Text>
//       </View>
//      <View style={pay2.imageContainer}>
//         <Image
//           source={ require('../../assets/icon8.png') }
//           style={{ flex: 1, width: undefined, height: undefined }}
//         />
//       </View>
     
//       <Image 
//         style={styles.chevronDoubleLeft1}
//         contentFit="cover"
//         source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Chevron%20double%20left.svg?alt=media&token=03ded6d0-e813-451c-b129-8943d073c39f'}}
//       />
//       {/* <FontAwesomeIcon icon="far fa-chevron-double-left" style={styles.chevronDoubleLeft1}/> */}
//       <Text style={[styles.checkout]}>CHECKOUT</Text>
//       <Image
//         style={[styles.paymentPage1Child, styles.paymentLayout]}
//         contentFit="cover"
//         source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Vector%206.svg?alt=media&token=8e92f193-448c-46be-8444-2b83a7cd5ef8'}}
//       />
//       <Image
//         style={[styles.paymentPage1Item, styles.paymentLayout]}
//         contentFit="cover"
//         source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Vector%206.svg?alt=media&token=8e92f193-448c-46be-8444-2b83a7cd5ef8'}}
//       />
//       <View style={styles.paymentPage1Inner} />
//       <Image
//         style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
//         contentFit="cover"
//         source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/vector%403x.png?alt=media&token=014f2b4d-d9d0-444e-896e-dddc2c1083c1'}}
//       />
//       <Text style={pay2.methodText}>Options</Text>
//       <View>
//       <View style={styles.container}>
//       {/* First Box */}
//       <View style={styles.box}>
//         <View style={styles.content}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={require('../../assets/bus.png')}
//               style={styles.image}
//             />
//           </View>
//           <View style={styles.details}>
//             <Text style={styles.title}>Bus</Text>
//             <View style={styles.checkboxRow}>
//               <CheckBox title="per month 100$"
//                   checked={busChecked}
//                   onPress={() => setBusChecked(!busChecked)}
//                   containerStyle={styles.checkbox} />
//               <CheckBox title="per quarter 250$"
//                   checked={busQuarterChecked}
//                   onPress={() => setBusQuarterChecked(!busQuarterChecked)}
//                   containerStyle={styles.checkbox} />
//             </View>
//           </View>
//         </View>
//       </View>

//       {/* Second Box */}
//       <View style={styles.box}>
//         <View style={styles.content}>
//           <View style={styles.imageContainer}>
//             <Image
//               source={require('../../assets/eat.png')}
//               style={styles.image}
//             />
//           </View>
//           <View style={styles.details}>
//             <Text style={styles.title}>BreakFast</Text>
//             <View style={styles.checkboxRow}>
//               <CheckBox   title="per month 100$"
//                   checked={breakfastChecked}
//                   onPress={() => setBreakfastChecked(!breakfastChecked)}
//                   containerStyle={styles.checkbox}/>
//               <CheckBox   title="per quarter 250$"
//                   checked={breakfastQuarterChecked}
//                   onPress={() => setBreakfastQuarterChecked(!breakfastQuarterChecked)}
//                   containerStyle={styles.checkbox} />
//             </View>
//           </View>
//         </View>
//       </View>
//     </View>
//     <View style={pay2.rowContainer}>
//     <FontAwesome name="map-marker" size={16}  style={pay2.icon} />
//       <Text style={pay2.description}>16 ghazala , ariana /tunis</Text>
//     </View>
//     <View style={pay2.rowContainer}>
//     <FontAwesome name="phone" size={16}  style={pay2.icon} />
//       <Text style={pay2.description}>+216 27011 482</Text>
//     </View>
//     <View style={pay2.rowContainer}>
//     <FontAwesome name="envelope" size={16}  style={pay2.icon} />
//       <Text style={pay2.description}>school@gmail.com</Text>
//     </View>
   
//       </View>
      
//       <View style={styles.form}>
//         <View style={styles.button}>
//           <Text style={[styles.labelText1, styles.textTypo]} onPress= {handleNextButtonPress}>Next</Text>
//         </View>
        
        
//       </View>
      
//       <Text style={styles.checkout}>CHECKOUT</Text>

//       <View style={styles.boxContainer}>
//         <View style={styles.box}>
//         <Image
//         style={{width:50,
//         height:50,
//         marginLeft:2,marginTop:2
//       }}
//       source={{uri:'https://cdn-icons-png.flaticon.com/512/5953/5953443.png'}} />
    
//           <View style={styles.boxContent}>
//             <Text style={styles.boxTitle}>School Tuition</Text>
//             <View style={styles.checkboxContainer}>
//               <CheckBox
//                 title="Per Month - $100"
//                 checked={tuitionChecked}
//                 onPress={handleTuitionCheckbox}
//                 containerStyle={styles.checkbox}
//               />
//               <CheckBox
//                 title="Per Quarter - $250"
//                 checked={tuitionQuarterChecked}
//                 onPress={() => setTuitionQuarterChecked(!tuitionQuarterChecked)}
//                 containerStyle={styles.checkbox}
//               />
//             </View>
//           </View>
//         </View>

//         <View style={styles.box}>
//         <Image
//         style={{width:40,
//         height:40,
//         marginLeft:8,marginTop:-4
//       }}
//       source={{uri:'https://cdn-icons-png.flaticon.com/512/926/926255.png'}} />
    
//           <View style={styles.boxContent}>
//             <Text style={styles.boxTitle}>Breakfast</Text>
//             <View style={styles.checkboxContainer}>
//               <CheckBox
//                 title="Per Month - $100"
//                 checked={breakfastChecked}
//                 onPress={handleBreakfastCheckbox}
//                 containerStyle={styles.checkbox}
//               />
//               <CheckBox
//                 title="Per Quarter - $250"
//                 checked={breakfastQuarterChecked}
//                 onPress={() => setBreakfastQuarterChecked(!breakfastQuarterChecked)}
//                 containerStyle={styles.checkbox}
//               />
//             </View>
//           </View>
//         </View>

//         <View style={styles.box}>
//         <Image
//         style={{width:40,
//         height:40,
//         marginLeft:5,marginTop:-4
//       }}
//       source={{uri:'https://cdn-icons-png.flaticon.com/512/174/174237.png'}} />
//           <View style={styles.boxContent}>
//             <Text style={styles.boxTitle}>Bus</Text>
//             <View style={styles.checkboxContainer}>
//               <CheckBox
//                 title="Per Month - $50"
//                 checked={busChecked}
//                 onPress={handleBusCheckbox}
//                 containerStyle={styles.checkbox}
//               />
//               <CheckBox
//                 title="Per Quarter - $120"
//                 checked={busQuarterChecked}
//                 onPress={() => setBusQuarterChecked(!busQuarterChecked)}
//                 containerStyle={styles.checkbox}
//               />
//             </View>
//           </View>
//         </View>
//       </View>

      
//       <TouchableOpacity style={styles.button} onPress={handleNextButtonPress}>
//         <Text style={styles.buttonText}>Next</Text>
//       </TouchableOpacity>
//     </ScrollView>
//   );
// };
// const pay2 = StyleSheet.create({
//     icon: {
//         color: 'DA00FF',
//         left: 1,
//         marginRight: 8,
//       },
//     image: {
//         width: 45,
//         height: 60,
//         marginRight: 19,
//         marginLeft: 70,
//         borderRadius: 0, // for rounded images (adjust as needed)
//       },
//       description: {
//         fontSize: 17,
//       },
//     rowContainer: {
//         top:'20%',
//         flexDirection: 'row',
//         alignItems: 'center',
//         padding: 10,
//         borderBottomWidth: 1,
//         borderBottomColor: '#ccc',
//         left: 60,
//       },
//   imageContainer: {
//     marginTop: 0,
//     width: 50, // Adjust the width as needed
//     height: 50, 
//     marginLeft:180,
//     marginRight:144,// Adjust the height as needed
    
//   },emailPosition3: {
//     left: "64.59%",
//     right: "7.24%",
//     width: "30.16%",
//     height:'11%',
//     position: "absolute",
//   },
//   emailPosition2: {
//     left: "7.59%",
//     right: "7.24%",
//     width: "30.16%",
//     height:'11%',
//     position: "absolute",
//   },
//   postion3:{
//     top: "81.37%",
//     bottom: "65.95%",
//     height: "12.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "20.16%",
//     fontSize:4,
//   },
//   postion2: {
//     top: "81.37%",
//     bottom: "65.95%",
//     height: "12.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "20.16%",
//     fontSize:4,
//   }
//   ,
//   postion1: {
//     top: "70.57%",
//     bottom: "65.95%",
//     height: "12.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "90.16%",
//     fontSize:4,
//   }
//   ,
//   container2: {
//     flexDirection: 'row',
//     top:'1%',
//     marginRight:1,
    
//     position: 'relative',
//     marginBottom: 18,
//     alignItems: 'center',
//   },

//   backgroundImage: {
    
    
    
  
//   },
//   header: {
//     padding: 16,
//   },
//   headerText: {
//     color: 'white',
//     fontSize: 24,
//     textAlign: 'center',
//   },
//   image: {
//     width: '100%',
//     height: 200,
//   },
//   checkout: {
//     fontSize: 18,
//     fontWeight: 'bold',
    
    
    
//   },
//   paymentMethodName : {
//     textAlign: "center",
//     right:-40,
//     color : 'black',
//     fontStyle:'italic',
//     fontSize: 21, 
//     marginRight: 70,
//     fontWeight: 'bold',
    
//   },
//   container: {
//     top: '-13%',
//     height: 80,
//     flexDirection: 'column',
//     paddingLeft:20,
//     alignItems: 'left',
//     paddingVertical: 100,
    
    
//   },
//   paymentMethod: {
//     width: 390,
//     height:80,
//     borderRadius: 10,
//     borderWidth: 0,
   
    
//     marginLeft:-10,
    
//   },

//   paymentMethodImage: {
//     width: 70,
//     height: 70,
//     marginBottom: 10,
//     marginRight:19,
//     left: 0,
//   },
// })
// const styles = StyleSheet.create({
    
      
//       content: {
//         flexDirection: 'row',
//       },
//       imageContainer: {
//         flex: 1,
//         padding: 20,
//         alignItems: 'flex-end',
//       },
      
      
      
//     details: {
//         flex: 2,
//         padding: 10,
//       },
//     checkbox: {
//         flex: 1,
//         backgroundColor: 'transparent',
//         borderWidth: 0,
        
//       },
//     checkboxRow: {
//         flexDirection: 'row',
//         alignItems: 'center',
//       },
//   nameContainer: {
//     position: 'relative',
//     width: 269,
//     height: 84,
//     marginLeft: 40,
//     marginTop: 20,
//   },
//   label: {
//     color: '#66328E',
//     fontSize: 12.3,
//     fontWeight: '500',
   
    
//   },
//   inputName: {
//     position: 'absolute',
//     width: 269,
//     height: 46,
//     top: 470,
//     left: 0,
//     backgroundColor: '#F8F0F0',
//     borderRadius: 7.69,
//     borderWidth: 0.77,
//     borderColor: '#66328E',
//     paddingLeft: 10,
//     fontSize: 14,
//   },
//   labelText1FlexBox: {
//     textAlign: "center",
//     letterSpacing: 0,
//   },
//   emailPosition1: {
//     left: "7.59%",
//     right: "7.24%",
//     width: "89.16%",
//     height:'11%',
//     position: "absolute",
//   },
//   vectorIcon2Layout: {
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//     top: "20.91%",
//   },
//   fullNameTypo: {
//     alignItems: "flex-end",
//     display: "flex",
//     color: "#66328e",
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//     lineHeight: 28,
//     fontSize: 16,
//     top: "-10%",
//     left: "0%",
//     textAlign: "left",
//     position: "absolute",
//   },
//   container: {
//     flexDirection: 'column',
//     justifyContent: 'space-around',
//     top: "20%",
    
//   },
//   box: {
//     borderWidth: 1,
//     borderColor: 'white',
//     padding: 0,
//     margin: 10,
//     alignItems: 'center',
//     backgroundColor:'white',
//     borderRadius: 40,
//     shadowColor: 'black',
//     shadowOffset: { width: 5, height: 5 },
//     shadowOpacity: 1,
//     shadowRadius: 10,
    
    
//   },
//   image: {
//     width: 70,
//     height: 70,
//   },
//   title: {
//     marginTop: 0,
//     marginBottom: 0,
//     fontSize: 25,
//     fontWeight: 'bold',
//   },
// <<<<<<< HEAD
//   checkboxContainer: {
//     marginTop: 10,
//     fontWeight:"700"
// =======
//   emailPosition: {
//     height: "4.88%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "85.16%",
//     position: "absolute",
// >>>>>>> 794cfea5fffc7dbb80101de9c8cfc13ca5adbef3
//   },
//   emailChildBorder: {
//     borderWidth: 0.8,
//     borderColor: "#66328e",
//     borderStyle: "solid",
//     backgroundColor: "#fff",
//     borderRadius: 8,
//     left: "0%",
//     bottom: "0%",
//     right: "0%",
//     position: "absolute",
//     width: "100%",
//   },
//   chevronIconLayout: {
//     width: "3.01%",
//     height: "14.56%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   selectTypo: {
//     fontSize: 13,
//     left: "3.34%",
//     height: "39.02%",
//     textAlign: "left",
//     color: "#3b333e",
//     fontFamily: "Poppins-Regular",
//     position: "absolute",
//   },
//   textTypo: {
//     fontWeight: "600",
//     fontSize: 19,
//   },
//   text1Position: {
//     left: "50%",
//     top: "50%",
//     position: "absolute",
//   },
//   enterTypo: {
//     fontFamily: "Poppins-ExtraLight",
//     fontWeight: "200",
//     fontSize: 12,
//     textAlign: "left",
//     color: "#3b333e",
//     position: "absolute",
//   },
//   paymentLayout: {
//     top: "21.58%",
//     backgroundColor:'gray',
//     bottom: "84.3%",
//     marginTop: 8,
//     width: "9.23%",
//     height: "0.12%",
//     maxHeight: "100%",
//     maxWidth: "100%",
//     position: "absolute",
//     overflow: "hidden",
//   },
//   checkout: {
    
//     fontSize: 16,
    
//     lineHeight: 20,
//     letterSpacing: 0,
//     textAlign: "center",
//     wordWrap: 'break-word',
//     color: 'black',
    
//     marginTop: 15,
//     marginLeft: 155,
//     marginRight: 141,
//     width: 100,
  
    

//   },
//   enterShippingDetails1: {
//     marginTop: -220,
//     marginLeft: -129,
//     fontSize: 20,
//     width: 257,
//     height: 50,
//     left: "50%",
//     top: "50%",
//     position: "absolute",
//     color: "#3b333e",
//     textAlign: "center",
//     fontFamily: "Poppins-Regular",
//     lineHeight: 30,
//   },
//   emailAddressHolderChild: {
//     borderColor: "#66328e",
//     borderWidth: 1,
//     borderRadius: 8,
//     left: "-2%",
//     bottom: "0%",
//     right: "0%",
//     maxWidth: "100%",
//     top: "36.47%",
//     height: "63.53%",
//     width: "100%",
//     backgroundColor:'white',
//     color: 'black'
//   },
//   fullName: {
    
//     color: "#66328e",
//     fontFamily: "Poppins-Medium",
    
//     fontSize: 28, 
//   },
//   emailAddressHolder6: {
//     top: "60.37%",
//     bottom: "65.95%",
//     height: "12.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "100.16%",
//     fontSize:4,
    
//   },
//   emailAddressHolderItem: {
//     height: "100%",
//     top: "0%",
//     borderWidth: 0.8,
//     borderColor: "#66328e",
//     borderStyle: "solid",
    
//     backgroundColor:'white'
//   },
//   chevronDownIcon3: {
//     top: "43.84%",
//     right: "5.65%",
//     bottom: "41.6%",
//     left: "91.34%",
//   },
//   selectProvince: {
//     width: "38.64%",
//     top: "26.71%",
//   },
//   emailAddressHolder7: {
//     top: "45.27%",
//     bottom: "47.85%",
//     height: "7.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "85.16%",
//   },
//   emailAddressHolderInner: {
//     height: "62.57%",
//     top: "37.43%",
//   },
//   phoneNumber: {
//     height: "37.97%",
//     width: "34.56%",
//   },
//   text1: {
//     marginTop: 2.62,
//     marginLeft: -154.43,
//     fontFamily: "PlusJakartaSans-SemiBold",
//     width: 39,
//     height: 16,
//     left: "50%",
//     top: "50%",
//     position: "absolute",
//     textAlign: "left",
//     color: "#3b333e",
//   },
//   chevronDownIcon4: {
//     marginTop: 11.66,
//     marginLeft: -115.53,
//     width: 10,
//     height: 4,
//   },
//   emailAddressHolderChild1: {
//     marginTop: -0.41,
//     marginLeft: -96.12,
//     width: 1,
//     height: 25,
//   },
//   emailAddressHolder8: {
//     height: "7.8%",
//     top: "35.99%",
//     bottom: "56.21%",
//   },
//   chevronDownIcon5: {
//     top: "44.05%",
//     right: "5.7%",
//     bottom: "41.39%",
//     left: "91.29%",
//   },
//   selectCity: {
//     width: "27.13%",
//     top: "26.19%",
//   },
//   emailAddressHolder9: {
//     top: "54.52%",
//     bottom: "39.6%",
//     height: "7.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "85.16%",
//   },
//   emailAddressHolderChild2: {
//     top: "36.47%",
//     height: "63.53%",
//     borderWidth: 0.8,
//     borderColor: "#66328e",
//     borderStyle: "solid",
//     backgroundColor: "#fff",
//   },
//   streetAdresse: {
//     width: "33.44%",
//     height: "38.56%",
//     display: "flex",
//     color: "#66328e",
//     fontFamily: "Poppins-Medium",
//     fontWeight: "500",
//     lineHeight: 28,
//     fontSize: 12,
//   },
//   enterStreetAddress1: {
//     height: "24.79%",
//     width: "50.16%",
//     top: "53.27%",
//     left: "3.33%",
//   },
//   emailAddressHolder10: {
//     top: "64.41%",
//     bottom: "28.91%",
//     height: "7.68%",
//     left: "7.59%",
//     right: "7.24%",
//     width: "85.16%",
//   },
//   emailAddressHolderChild3: {
//     height: "64.53%",
//     top: "35.47%",
//   },
//   postalCode: {
//     height: "39.16%",
//     width: "27.87%",
//   },
//   enterPostalCode1: {
//     height: "25.18%",
//     width: "43.85%",
//     top: "52.54%",
//     left: "3.63%",
//   },
//   emailAddressHolder11: {
//     height: "7.57%",
//     top: "74.43%",
//     bottom: "18.01%",
//   },
//   chevronDoubleLeft1: {
//     top: 48,
//     left: 30,
//     width: 24,
//     height: 24,
//     position: "absolute",
//     overflow: "hidden",
//   },
//   time: {
//     display: "none",
//   },
//   deviceInfo1: {
//     width: 66,
//     display: "none",
//   },
//   statusBar: {
//     top: 0,
//     right: 0,
//     left: 0,
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: 14,
//     paddingVertical: 12,
//     alignItems: "center",
//     position: "absolute",
//   },
//   labelText1: {
//     lineHeight: 21,
//     fontFamily: "Inter-SemiBold",
//     color: "#f8f8ff",
//     textAlign: "center",
//     letterSpacing: 0,
//   },
//   button: {
//     alignSelf: "stretch",
//     borderRadius: 80,
//     backgroundColor: "#66328e",
//     justifyContent: "center",
//     paddingHorizontal: 24,
//     paddingVertical: 15,
//     alignItems: "center",
//     overflow: "hidden",
//   },
//   form: {
//     top: 799,
//     left: 28,
//     shadowColor: "rgba(0, 0, 0, 0.25)",
//     shadowOffset: {
//       width: 0,
//       height: 4,
//     },
//     shadowRadius: 4,
//     elevation: 4,
//     shadowOpacity: 1,
//     width: 335,
//     paddingLeft: 81,
//     paddingRight: 80,
//     position: "absolute",
//   },
//   paymentPage1Child: {
//     right: "59.49%",
//     left: "31.28%",
//     top:"20.91%",
//   },
//   paymentPage1Item: {
//     marginTop: 15,
//     right: "27.95%",
//     left: "62.82%",
//   },
//   paymentPage1Inner: {
//     marginTop: 15,
//     left: 54,
//     width: 63,
//     height: 63,
//     position: "absolute",
//   },
//   vectorIcon2: {
//     height: "4.58%",
//     width: "71.42%",
//     top: "20.91%",
//     right: "13.97%",
//     bottom: "82.51%",
//     left: "14.62%",
//   },
//   paymentPage1: {
//     borderRadius: 9,
//     backgroundColor: "#f8f0f0",
//     flex: 1,

//   },
//   homeDiv: {
    
//     width: 120,
//     height: 50,
//     marginLeft: 21,
//     marginTop: 30,
//   },
//   homeText: {
//     fontSize: 15,
//     fontWeight: 'bold',
//     textAlign: 'left',
//     marginTop: 20,
//     color:'#65328e',
//   },
// });

// export default PaymentMethod;
