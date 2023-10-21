import {useState} from "react";
import { Text, StyleSheet, View, TextInput,ScrollView } from "react-native";
import { Image } from "expo-image";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";

const CheckOut = ({navigation}) => {
    const [fullName, setfullName] = useState('')
    const [phoneNumber, setphoneNumber] = useState('')
    const [province, setprovince] = useState('')
    const [city, setcity] = useState('')
    const [street, setstreet] = useState('')
    const [postalCode, setpostalCode] = useState([])

  return ( 
    <View style={styles.paymentPage1}>
      <Image 
        style={styles.chevronDoubleLeft1}
        contentFit="cover"
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Chevron%20double%20left.svg?alt=media&token=03ded6d0-e813-451c-b129-8943d073c39f'}}
      />
      {/* <FontAwesomeIcon icon="far fa-chevron-double-left" style={styles.chevronDoubleLeft1}/> */}
      <Text style={[styles.checkout]}>CHECKOUT</Text>
      <Image
        style={[styles.paymentPage1Child, styles.paymentLayout]}
        contentFit="cover"
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Vector%206.svg?alt=media&token=8e92f193-448c-46be-8444-2b83a7cd5ef8'}}
      />
      <Image
        style={[styles.paymentPage1Item, styles.paymentLayout]}
        contentFit="cover"
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Vector%206.svg?alt=media&token=8e92f193-448c-46be-8444-2b83a7cd5ef8'}}
      />
      <View style={styles.paymentPage1Inner} />
      <Image
        style={[styles.vectorIcon2, styles.vectorIcon2Layout]}
        contentFit="cover"
        source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/vector%403x.png?alt=media&token=014f2b4d-d9d0-444e-896e-dddc2c1083c1'}}
      />
      <Text style={[styles.enterShippingDetails1, styles.labelText1FlexBox]}>
        Enter Shipping Details
      </Text>

      <View style={[styles.emailAddressHolder6, styles.emailPosition1]}>
        <Text style={[styles.fullName, styles.fullNameTypo]}>Full Name</Text>
        <TextInput placeholder="  full name" onChangeText={setfullName} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />
      </View>
      <View style={[styles.emailAddressHolder7, styles.emailPosition1]}>
      <Text style={[styles.selectProvince, styles.fullNameTypo]}>Province</Text>
      <TextInput placeholder="  Select Province" onChangeText={setprovince} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />
      </View>
      <View style={[styles.emailAddressHolder8, styles.emailPosition1]}>
        <Text style={[styles.phoneNumber, styles.fullNameTypo]}>
          Phone Number
        </Text>
        <Text style={[styles.text1, styles.textTypo]}>+216</Text>
        <Image
          style={[styles.chevronDownIcon4, styles.text1Position]}
          contentFit="cover"
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/chevrondown1%403x.png?alt=media&token=08304b04-ad9f-4640-ae1e-cef186c02557'}}
        />
        <Image
          style={[styles.emailAddressHolderChild1, styles.text1Position]}
          contentFit="cover"
          source={{uri:'https://firebasestorage.googleapis.com/v0/b/react-native-39a8a.appspot.com/o/Line%201.svg?alt=media&token=7e83b2dd-0089-453f-91d0-0bb233056076'}}
        />
        <TextInput onChangeText={setphoneNumber} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />
      </View>
      <View style={[styles.emailAddressHolder9, styles.emailPosition1]}>
      <TextInput placeholder="  Select City" onChangeText={setcity} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />
      <Text style={[styles.selectCity, styles.fullNameTypo]}>City</Text>
      </View>
      <View style={[styles.emailAddressHolder10, styles.emailPosition1]}>
        <Text style={[styles.streetAdresse, styles.fullNameTypo]}>
          Street Adresse
        </Text>
        <TextInput placeholder="  Entre street adresse" onChangeText={setstreet} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />
      </View>
      <View style={[styles.emailAddressHolder11, styles.emailPosition1]}>
      <TextInput placeholder="  Enter postal code" onChangeText={setpostalCode} style={[[styles.emailAddressHolderChild, styles.vectorIcon2Layout]]} />

        <Text style={[styles.postalCode, styles.fullNameTypo]}>
          Postal Code
        </Text>
        
      </View>
      <View style={styles.statusBar}>
        <Text style={styles.time} />
        <View style={styles.deviceInfo1} />
      </View>
      <View style={styles.form}>
        <View style={styles.button}>
          <Text style={[styles.labelText1, styles.textTypo]} onPress={()=>{navigation.navigate("PaymentMethod")}}>CONFIRM</Text>
        </View>
      </View>

      </View>

  );
};

const styles = StyleSheet.create({
  labelText1FlexBox: {
    textAlign: "center",
    letterSpacing: 0,
  },
  emailPosition1: {
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
    position: "absolute",
  },
  vectorIcon2Layout: {
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  fullNameTypo: {
    alignItems: "flex-end",
    display: "flex",
    color: "#66328e",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 28,
    fontSize: 15,
    top: "10%",
    left: "0%",
    textAlign: "left",
    position: "absolute",
  },
  emailPosition: {
    height: "4.88%",
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
    position: "absolute",
  },
  emailChildBorder: {
    borderWidth: 0.8,
    borderColor: "#66328e",
    borderStyle: "solid",
    backgroundColor: "#fff",
    borderRadius: 8,
    left: "0%",
    bottom: "0%",
    right: "0%",
    position: "absolute",
    width: "100%",
  },
  chevronIconLayout: {
    width: "3.01%",
    height: "14.56%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  selectTypo: {
    fontSize: 13,
    left: "3.34%",
    height: "39.02%",
    textAlign: "left",
    color: "#3b333e",
    fontFamily: "Poppins-Regular",
    position: "absolute",
  },
  textTypo: {
    fontWeight: "600",
    fontSize: 14,
  },
  text1Position: {
    left: "50%",
    top: "70%",
    position: "absolute",
  },
  enterTypo: {
    fontFamily: "Poppins-ExtraLight",
    fontWeight: "200",
    fontSize: 12,
    textAlign: "left",
    color: "#3b333e",
    position: "absolute",
  },
  paymentLayout: {
    bottom: "84.3%",
    top: "15.58%",
    width: "9.23%",
    height: "0.12%",
    maxHeight: "100%",
    maxWidth: "100%",
    position: "absolute",
    overflow: "hidden",
  },
  checkout: {
    top: "5.92%",
    left: "15.9%",
    fontSize: 17,
    fontFamily: "Poppins-Regular",
    lineHeight: 27,
    letterSpacing: 0,
    textAlign: "left",
  },
  enterShippingDetails1: {
    marginTop: -220,
    marginLeft: -129,
    fontSize: 20,
    width: 257,
    height: 50,
    left: "50%",
    top: "50%",
    position: "absolute",
    color: "#3b333e",
    textAlign: "center",
    fontFamily: "Poppins-Regular",
    lineHeight: 30,
  },
  emailAddressHolderChild: {
    borderColor: "#66328e",
    borderWidth: 1,
    borderRadius: 8,
    bottom: "0%",
    right: "0%",
    maxWidth: "100%",
    top: "60.47%",
    height: "63.53%",
    width: "100%",
  },
  fullName: {
    width: "23.04%",
    height: "38.56%",
    display: "flex",
    color: "#66328e",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 28,
    fontSize: 12,
  },
  emailAddressHolder6: {
    top: "26.37%",
    bottom: "65.95%",
    height: "7.68%",
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
  },
  emailAddressHolderItem: {
    height: "100%",
    top: "0%",
    borderWidth: 0.8,
    borderColor: "#66328e",
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
  chevronDownIcon3: {
    top: "43.84%",
    right: "5.65%",
    bottom: "41.6%",
    left: "91.34%",
  },
  selectProvince: {
    width: "38.64%",
    top: "26.71%",
  },
  emailAddressHolder7: {
    top: "45.27%",
    bottom: "47.85%",
    height: "7.68%",
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
  },
  emailAddressHolderInner: {
    height: "62.57%",
    top: "37.43%",
  },
  phoneNumber: {
    height: "37.97%",
    width: "34.56%",
  },
  text1: {
    marginTop: 2.62,
    marginLeft: -154.43,
    fontFamily: "PlusJakartaSans-SemiBold",
    width: 39,
    height: 16,
    left: "50%",
    top: "70%",
    position: "absolute",
    textAlign: "left",
    color: "#3b333e",
  },
  chevronDownIcon4: {
    marginTop: 11.66,
    marginLeft: -115.53,
    width: 10,
    height: 4,
  },
  emailAddressHolderChild1: {
    marginTop: -0.41,
    marginLeft: -96.12,
    width: 1,
    height: 25,
  },
  emailAddressHolder8: {
    height: "7.8%",
    top: "35.99%",
    bottom: "56.21%",
  },
  chevronDownIcon5: {
    top: "44.05%",
    right: "5.7%",
    bottom: "41.39%",
    left: "91.29%",
  },
  selectCity: {
    width: "27.13%",
    top: "26.19%",
  },
  emailAddressHolder9: {
    top: "54.52%",
    bottom: "39.6%",
    height: "7.68%",
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
  },
  emailAddressHolderChild2: {
    top: "36.47%",
    height: "63.53%",
    borderWidth: 0.8,
    borderColor: "#66328e",
    borderStyle: "solid",
    backgroundColor: "#fff",
  },
  streetAdresse: {
    width: "33.44%",
    height: "38.56%",
    display: "flex",
    color: "#66328e",
    fontFamily: "Poppins-Medium",
    fontWeight: "500",
    lineHeight: 28,
    fontSize: 12,
  },
  enterStreetAddress1: {
    height: "24.79%",
    width: "50.16%",
    top: "53.27%",
    left: "3.33%",
  },
  emailAddressHolder10: {
    top: "64.41%",
    bottom: "28.91%",
    height: "7.68%",
    left: "7.59%",
    right: "7.24%",
    width: "85.16%",
  },
  emailAddressHolderChild3: {
    height: "64.53%",
    top: "35.47%",
  },
  postalCode: {
    height: "39.16%",
    width: "27.87%",
  },
  enterPostalCode1: {
    height: "25.18%",
    width: "43.85%",
    top: "52.54%",
    left: "3.63%",
  },
  emailAddressHolder11: {
    height: "7.57%",
    top: "74.43%",
    bottom: "18.01%",
  },
  chevronDoubleLeft1: {
    top: 48,
    left: 30,
    width: 24,
    height: 24,
    position: "absolute",
    overflow: "hidden",
  },
  time: {
    display: "none",
  },
  deviceInfo1: {
    width: 66,
    display: "none",
  },
  statusBar: {
    top: 0,
    right: 0,
    left: 0,
    flexDirection: "row",
    justifyContent: "space-between",
    paddingHorizontal: 14,
    paddingVertical: 12,
    alignItems: "center",
    position: "absolute",
  },
  labelText1: {
    lineHeight: 21,
    fontFamily: "Inter-SemiBold",
    color: "#f8f8ff",
    textAlign: "center",
    top:"0%",
    letterSpacing: 0,
  },
  button: {
    alignSelf: "stretch",
    borderRadius: 80,
    top:115,
    left:10,
    backgroundColor: "#66328e",
    justifyContent: "center",
    paddingHorizontal: 24,
    paddingVertical: 14,
    alignItems: "center",
    overflow: "hidden",
  },
  form: {
    top: 600,
    left: 28,
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowRadius: 4,
    elevation: 4,
    shadowOpacity: 1,
    width: 335,
    paddingLeft: 81,
    paddingRight: 80,
    position: "absolute",
  },
  paymentPage1Child: {
    right: "59.49%",
    left: "31.28%",
  },
  paymentPage1Item: {
    right: "27.95%",
    left: "62.82%",
  },
  paymentPage1Inner: {
    top: 101,
    left: 54,
    width: 63,
    height: 63,
    position: "absolute",
  },
  vectorIcon2: {
    height: "4.58%",
    width: "71.42%",
    top: "12.91%",
    right: "13.97%",
    bottom: "82.51%",
    left: "14.62%",
  },
  paymentPage1: {
    borderRadius: 9,
    backgroundColor: "white",
    flex: 1,

  },
});

export default CheckOut;
