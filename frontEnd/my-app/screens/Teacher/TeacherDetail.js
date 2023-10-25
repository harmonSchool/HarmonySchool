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
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const route = useRoute();
  const subject = route.params?.params.subject;

  useEffect(() => {
    async function fetchData() {
      if (Class && subject) {
        try {
          const apiUrl = `http://192.168.1.5:2023/teacher/getOneTeacher/${subject}/${Class}`;
          console.log("apiurl****", apiUrl);
          const response = await axios.get(apiUrl);
          setData(response.data);
          setLoading(false);
          console.log("---------", response.data);
        } catch (error) {
          console.error("Error fetching teacher data:", error);
          setLoading(false);
        }
      }
    }

    fetchData();
  }, [Class, subject]);

  useEffect(() => {
    async function retrieveClass() {
      try {
        const value = await AsyncStorage.getItem("Class");
        setClass(value);
      } catch (error) {
        console.error("Error retrieving data from AsyncStorage:", error);
      }
    }

    retrieveClass();
  }, []);

  return (
    <View style={styles.container}>
    {loading ? (
      <Text>Loading...</Text>
    ) : (
      <View style={styles.detailContainer}>
        <Text style={styles.centeredText}>Mr/Mss</Text>
        <View style={styles.centeredView}>
          <View style={styles.contentContainer}>
            <Image
              style={styles.image}
              source={{
                uri: "https://www.teflcourse.net/uploads/teacher-portrait1.jpg",
              }}
            />
            <Text style={styles.name}>{data.name}</Text>    
            <Text style={styles.description}>{data.email}</Text>   
            <View style={styles.rectangle}>
              <FontAwesomeIcon icon={faComment} style={styles.chatIcon} />
              <Text style={styles.sendMessage}>Send Message</Text>
            </View>
          </View>
        </View>
      </View>
    )}
    </View>
  )}
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
