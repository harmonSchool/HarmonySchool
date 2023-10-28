import React, { useEffect, useState } from "react";
import { View, ScrollView, StyleSheet, Image, Text } from "react-native";
import axios from "axios";
import ADRESS_API from "../serverUrl";
import Adress from '../IP'
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";

export default function Student() {
  const[imageURL,setImageUrl] = useState(null);
  const [studentData, setStudentData] = useState([]);

  const { iduser } = useContext(MyContext);
useEffect(() => {
    axios
      .get(`http://${Adress}/student/getByUser/${iduser}`)
      .then((res) => {
        setStudentData(res.data);
        console.log(iduser);
      })
      .catch((error) => {
        console.error("Error fetching student data:", error);
      });
  }, [iduser])
  

  // console.log(studentData);
  return (
    <ScrollView >
      <View style={styles.container}>
        <View  style={styles.studentCard}>
        <View style={styles.text}>
              <Text style={{ top:"50%",fontWeight:"400",fontSize:16,left:"-32%" }}>Teacher</Text>
    
              <Text style={{ marginTop:"20%",fontWeight:"300",fontSize:13,left:"-33%",top:"13%" }}>your children teachers</Text>
            </View>
          <View style={styles.ellipseContainer}>
            <Image
              source={{
                uri: imageURL,
                height: 120,
                width: 120,
                borderRadius:100
              }}
              style={styles.ellipseImage}
            />
          </View>
          {studentData.map((el,i)=>{
            return(
          <View style={styles.studentInfo}>
{setImageUrl(el.image)}
              <View key={i} >
              <Text style={styles.studentInfoLabel}>Name: {el.First_name} </Text>
            <Text style={styles.studentInfoValue}></Text>
            <Text style={styles.studentInfoLabel}>Lastname:{el.LastName} </Text>
            <Text style={styles.studentInfoValue}></Text>
            <Text style={styles.studentInfoLabel}>Date of Birth: {el.Birthday}</Text>
            <Text style={styles.studentInfoValue}></Text>
            <Text style={styles.studentInfoLabel}>Class: {el.class}</Text>
            <Text style={styles.studentInfoValue}></Text>
            </View>
            
            
          </View>
       )})}
        </View>
      
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  text: {
    alignItems: "center",
    marginTop: 25,
    width: 190,
color: "#65328e",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
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
    width: 120,
    height: 120,
    borderRadius: 100,
    borderWidth: 0.6,
    borderColor: "#1FA609",
    alignItems: "center",
    justifyContent: "center",
    display: "flex",
    left:"33%"
  },
  ellipseImage: {
    width: "100%",
    height: "100%",
    borderRadius: 150,
  },
  studentInfo: {
    alignItems: "center"
  },
  studentInfoLabel: {
    fontWeight: "300",
    fontSize: 18,
    marginBottom: 15,
    left:"-55%",
    top:"15%"
  },
  studentInfoValue: {
    fontSize: 16,
  },
});