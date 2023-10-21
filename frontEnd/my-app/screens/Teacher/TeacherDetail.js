import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Image } from "react-native";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faComment } from "@fortawesome/free-solid-svg-icons";
import { useRoute } from "@react-navigation/native";
import axios from "axios";
import AsyncStorage from "@react-native-async-storage/async-storage";
import ADRESS_API from "../serverUrl";

const TeacherDetail = () => {
  const [Class, setClass] = useState(null);
  const [data, setData] = useState([]);
  const route = useRoute();
  const subject = route.params?.params.subject;

  useEffect(() => {
    if (Class && subject) {
      const apiUrl = `http://192.168.1.25:2023/teacher/getOneTeacher/${subject}/${Class}`;
      console.log("apiurl****", apiUrl);
      // Fetch data from API
      axios
        .get(apiUrl)
        .then((response) => {
          setData(response.data);
          console.log("---------", response.data);
        })
        .catch((error) => {
          console.error("Error fetching teacher data:", error);
        });
    }
  }, [Class, subject]);

  useEffect(() => {
    // Retrieve the 'Class' from AsyncStorage
    _retrieveData = async () => {
      try {
        const value = await AsyncStorage.getItem("Class");
        setClass(value);
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    };

    _retrieveData();
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.detailContainer}>
        <Text style={styles.centeredText}>Mr/Mss</Text>
        <View style={styles.centeredView}>
          {/* Content of the second view */}
          <View style={styles.contentContainer}>
            {/* Image */}
            <Image
              style={styles.image}
              source={{
                uri: "https://www.teflcourse.net/uploads/teacher-portrait1.jpg",
              }} // Replace 'YOUR_IMAGE_URI_HERE' with the actual image URI
            />

            {/* Name and description */}
            <Text style={styles.name}>{data.name}</Text>
            <Text style={styles.description}>{data.email}</Text>

            {/* Rectangle with the button "Send Message" and chat icon */}
            <View style={styles.rectangle}>
              <FontAwesomeIcon icon={faComment} style={styles.chatIcon} />
              <Text style={styles.sendMessage}>Send Message</Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

// Define your styles here

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "transparent",
    alignItems: "center",
    justifyContent: "center",
  },
  detailContainer: {
    backgroundColor: "#DBC8E4",
    borderRadius: 10,
    width: "80%",
    height: "90%",
    padding: 20,
    marginTop: 40,
  },
  centeredView: {
    backgroundColor: "white",
    borderRadius: 10,
    borderWidth: 1,
    borderColor: "purple",
    width: "100%",
    height: "90%",
    marginTop: 30,
  },
  centeredText: {
    textAlign: "center",
    fontSize: 20,
  },
  contentContainer: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  ellipse: {
    width: 200,
    height: 200,
    borderRadius: 50,
    backgroundColor: "#66328E",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  image: {
    width: 200,
    height: 300,
    borderRadius: 40,
    marginBottom: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 16,
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  rectangle: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 5,
    backgroundColor: "#66328E",
    borderRadius: 10,
  },
  chatIcon: {
    color: "white",
    marginRight: 5,
  },
  sendMessage: {
    color: "white",
    fontWeight: "bold",
  },
});

export default TeacherDetail;
