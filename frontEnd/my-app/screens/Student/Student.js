import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import axios from "axios";
import ADRESS_API from "../serverUrl";
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";

export default function Student() {
  const [studentData, setStudentData] = useState([]);
  const [userId , setUserId] = useState("")
  const { user } = useContext(MyContext);

  useEffect(() => {
    fetch(`http://192.168.1.25:2023/student/getByUser/${users_idUsers}`)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [user]); // Include user as a dependency for useEffect

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentData.map((student, index) => (
        <View key={index} style={styles.studentCard}>
          <View style={styles.ellipseContainer}>
            <Image
              source={{
                uri: student.imageURL,
              }}
              style={styles.ellipseImage}
            />
          </View>
          <View style={styles.studentInfo}>
            <Text style={styles.studentInfoLabel}>Name</Text>
            <Text style={styles.studentInfoValue}>{student.First_name}</Text>
            <Text style={styles.studentInfoLabel}>Last Name:</Text>
            <Text style={styles.studentInfoValue}>{student.lastName}</Text>
            <Text style={styles.studentInfoLabel}>Date of Birth:</Text>
            <Text style={styles.studentInfoValue}>{student.Birthday}</Text>
            <Text style={styles.studentInfoLabel}>Class:</Text>
            <Text style={styles.studentInfoValue}>{student.class}</Text>
          </View>
        </View>
      ))}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "flex-start",
  },
  studentCard: {
    margin: 10,
    padding: 10,
    backgroundColor: "white",
    borderRadius: 10,
    flexDirection: "row",
  },
  ellipseContainer: {
    width: 150,
    height: 150,
    borderRadius: 75,
    borderWidth: 2,
    borderColor: "#BA68C8",
    alignItems: "center",
    justifyContent: "center",
    marginRight: 10,
  },
  ellipseImage: {
    width: 146,
    height: 146,
    borderRadius: 73,
  },
  studentInfo: {
    flex: 1,
  },
  studentInfoLabel: {
    fontWeight: "bold",
    color: "#BA68C8",
    fontSize: 18,
    marginBottom: 5,
  },
  studentInfoValue: {
    fontSize: 16,
  },
});
