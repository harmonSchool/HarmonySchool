import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useState,useEffect } from 'react';
import ADRESS_API from '../serverUrl';
import axios from 'axios';

const DataStudent1 = () => {
    const [students, setStudents] = useState([]); 

    useEffect(() => {
      
      axios.get(`http://192.168.1.25:2023/student/getStudentsByClass2/Second class`)
        .then(response => {
          
          setStudents(response.data);
        })
        .catch(error => {
          console.error('Erreur lors de la récupération des étudiants :', error);
        });
    }, []); 

  return (
   
      <View style={styles.detailContainer}>
        <Text style={styles.className}>Students of First Class</Text>
        <ScrollView style={{ width: 270,marginTop:20 }}>
        <View style={styles.studentGrid}>
          {students.map((student, index) => (
            <TouchableOpacity key={student.id} style={styles.studentItem}>
              <View style={styles.studentImageContainer}>
                <Image source={{ uri: student.image }} style={styles.studentImage} />
              </View>
              <Text style={styles.studentName}>{student.First_name} {student.lastName}</Text>
            </TouchableOpacity>
          ))}
        </View>
        </ScrollView>
      </View>
    
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    backgroundColor: '#DBC8E4',
    borderColor: 'pink',
    borderRadius: 10,
    width: '90%',
    padding: 50,
    marginTop: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:20,
    height:"90%",
    
  },
  className: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  studentGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between', 
   // Espacement horizontal entre les élèves
  },
  studentItem: {
    width: '40%', // 45% de la largeur pour afficher deux élèves par ligne
    marginBottom: 20,
    alignItems: 'center',
  },
  studentImageContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    overflow: 'hidden',
    marginBottom: 10,
  },
  studentImage: {
    width: '100%',
    height: '100%',
    borderRadius: 50,
  },
  studentName: {
    textAlign: 'center',
    fontSize: 18,
  },
});

export default DataStudent1;
