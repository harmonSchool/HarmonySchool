import React, { useState, useEffect, useRef } from 'react';
import { View, Text, ScrollView, StyleSheet, TextInput, Animated } from 'react-native';
import { Card, Title } from 'react-native-paper';
import axios from 'axios';

const DataStudent1 = () => {
  const [students, setStudents] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [loading, setLoading] = useState(true);

  const scrollY = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.25:2023/student/getStudentsByClass5/Fifth class');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching students:', error);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredStudents = students.filter(student => {
    return student.First_name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.LastName.toLowerCase().includes(searchText.toLowerCase());
  });

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Student Data</Text>
      <TextInput
        style={styles.searchInput}
        placeholder="Search for a student..."
        value={searchText}
        onChangeText={text => setSearchText(text)}
      />
      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
        >
          {filteredStudents.map((student, index) => {
            // Animated card styles go here
            return (
              <Card key={student.id} style={styles.card}>
                <Card.Cover source={{ uri: student.image }} />
                <Card.Content>
                  <Title style={styles.title}>Full Name: {student.First_name}</Title>
                  <Title style={styles.title}>Last Name: {student.LastName}</Title>
                  <Title style={styles.title}>Birthday: {student.Birthday}</Title>
                  <Title style={styles.title}>Class: {student.class}</Title>
                </Card.Content>
              </Card>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    top:25
  },
  header: {
    fontSize: 18,
    fontWeight: '700',
    marginBottom: 16,
    color : "#906BAD",
    left:140
  },
  searchInput: {
    height: 40,
    borderWidth: 0.8,
    marginBottom: 20,
    paddingLeft: 8,
    borderRadius: 25,
  },
  card: {
    marginBottom: 16,
    elevation: 4, // Add a shadow effect
  },
  title: {
    fontSize: 15,
    top:5,
    fontWeight: 'bold',
  },
});

export default DataStudent1;
