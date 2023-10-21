import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Image,
  ScrollView,
} from "react-native";
import { useState } from "react";
import { useContext } from "react";
import { MyContext } from "../../../useContext/useContext";
const Profile = ({ navigation }) => {
  const [name, setName] = useState("");
  const [emailAdress, setEmailAdress] = useState("");
  const [dateOfBirthday, setDateOfBirthday] = useState("");
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  return (
    <ScrollView>
      <View style={styles.container}>
        <View>
          <View style={styles.Edit}>
            <Image
              style={{ width: 40, height: 40, left:"12%", marginTop: -30 }}
              source={{
                uri: "https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png",
              }}
            />
            <Text style={{ fontSize: 18,fontWeight: "400" ,left:"0%"}}>Edit Profile</Text>
          </View>
          <View style={styles.circle}></View>
          <View style={styles.inputs}>
            <Text style={{ color: "rgba(0, 0, 0, 1)"  ,  fontWeight: "400"}}>Name</Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)",  fontWeight: "400"
          }}>
              Email Adress
            </Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)", fontWeight: "400"
          }}>
              Date Of Birthday
            </Text>
            <TextInput
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,
              }}
            />
            <Text style={{ marginTop: "10%",     color: "rgba(0, 0, 0, 1)", fontWeight: "400"
          }}>
              Current Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                borderColor: "#66328E",
                backgroundColor: "#F2F2F2",
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderColor: "rgba(102, 50, 142, 1)",
                borderRadius: 7.681159973144531,

                
              }}
            />
            <Text style={{ marginTop: "10%",    color: "rgba(0, 0, 0, 1)",    fontWeight: "400",

          }}>
              New Password
            </Text>
            <TextInput
              secureTextEntry={true}
              style={{
                borderColor: "#66328E",
                borderWidth: 1,
                marginTop: "10%",
                height: 45,
                width: 240,
                marginTop: 10,
                backgroundColor: "rgba(248, 240, 240, 1)",
                borderWidth: 1,
                borderRadius: 7.681159973144531,
              }}
            />
            <View style={styles.btn}>
              <Text
                style={styles.Log}
                onPress={() => navigation.navigate("Inscription")}
              >
                Save Changes
              </Text>
            </View>
          </View>
          <View style={styles.aboutUs}>
            <Text style={{ marginLeft: 40 }}>16 ghazala , ariana /tunis</Text>
            <Text style={{ marginLeft: 65, marginTop: 20 }}>+216 27011482</Text>
            <Text style={{ marginLeft: 55, marginTop: 20 }}>
              School@gmail.com
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  circle: {
    width: 160,
    height: 160,
    borderRadius: 100,
    borderWidth: 1,
    borderColor: "rgba(102, 50, 142, 1)",
    marginTop: 20,
    marginLeft: 40,
  },
  inputs: {
    marginTop: 20,
  },
  Edit: {
    marginLeft: 78,

    marginTop: 90,
  },
  Log: {
    color: "#fff",
    marginLeft: 60,
    marginTop: 20,
    fontWeight: "400"
  },
  btn: {
    marginTop: 30,
    width: 205,
    height: 60,
    borderRadius: 8,
    marginLeft: 14,
    backgroundColor: "#66328E",
  },
  aboutUs: {
    width: 250,
    height: 250,
    marginLeft: -5,
    marginTop: 20,
  },
});

export default Profile;
