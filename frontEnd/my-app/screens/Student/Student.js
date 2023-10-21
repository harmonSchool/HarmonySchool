import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import axios from "axios";
import ADRESS_API from "../serverUrl";
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";

export default function Student() {
  const [studentData, setStudentData] = useState([]);
  const { user } = useContext(MyContext);

  useEffect(() => {
    axios
      .get(`http://${ADRESS_API}:3001/student/getByUser/${user?.id}`)
      .then((response) => {
        setStudentData(response.data);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, []);

  // console.log(studentData);
  return (
    <ScrollView contentContainerStyle={styles.container}>
      {studentData.map((student, index) => (
        <View key={index} style={styles.studentCard}>
          <View style={styles.ellipseContainer}>
            <Image
              source={{
                uri: student.imageURL,
                height: "400px",
                width: "400px",
              }}
              style={styles.ellipseImage}
            />
          </View>
          <View style={styles.studentInfo}>
            <Text style={styles.studentInfoLabel}>Name</Text>
            <Text style={styles.studentInfoValue}>{student.First_name}</Text>
            <Text style={styles.studentInfoLabel}>Lastname:</Text>
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
  purpleRectangle: {
    width: "90%",
    height: "33.33%",
    backgroundColor: "purple",
    borderRadius: 20,
    borderTopRightRadius: 16,
    marginTop: 45,
  },
  whiteRectangle: {
    width: "90%",
    height: "80.33%",
    backgroundColor: "white",
    borderRadius: 20,
    borderBottomLeftRadius: 16,
    marginTop: -150,
    borderColor: "#BA68C8",
    borderWidth: 2,
    alignItems: "center",
  },
  ellipseContainer: {
    width: 150,
    height: 150,
    borderRadius: 50,
    borderWidth: 2,
    borderColor: "#BA68C8",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    marginLeft: 25,
    marginTop: 50,
  },
  ellipseImage: {
    width: "100%",
    height: "100%",
    borderRadius: 50,
  },
  studentInfo: {
    marginTop: 40,
    alignItems: "center",
  },
  studentInfoLabel: {
    fontWeight: "bold",
    color: "#BA68C8",
    fontSize: 25,
    marginBottom: 5,
  },
  studentInfoValue: {
    fontSize: 16,
  },
});