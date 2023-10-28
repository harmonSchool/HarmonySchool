import React, { useState, useEffect ,useRef   } from "react";
import {
  Modal,
  Text,
  TextInput,
  View,
  Image,
  TouchableWithoutFeedback,
  ScrollView,
  TouchableOpacity,
  Animated,
  Button,
  StyleSheet 
} from "react-native";
import { Calendar, LocaleConfig } from "react-native-calendars";
import { styles } from "./styles";
import AsyncStorage from "@react-native-async-storage/async-storage";
import axios from "axios";
import { Svg, Path } from "react-native-svg";
import { Card, Title } from "react-native-paper";
import Adress from '../IP'

LocaleConfig.locales["en"] = {
  monthNames: [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ],
  monthNamesShort: [
    "Jan.",
    "Feb.",
    "Mar.",
    "Apr.",
    "May",
    "Jun.",
    "Jul.",
    "Aug.",
    "Sep.",
    "Oct.",
    "Nov.",
    "Dec.",
  ],
  dayNames: [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ],
  dayNamesShort: ["Sun.", "Mon.", "Tue.", "Wed.", "Thu.", "Fri.", "Sat."],
};

LocaleConfig.defaultLocale = "en";

export default function CalendarScreen({
  visible,
  onClose,
  onAddEvent,
  route,
}) {
  const [students, setStudents] = useState([]);
  const [selectedDay, setSelectedDay] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [comments, setComments] = useState({});
  const [calendarMarkings, setCalendarMarkings] = useState({});
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [searchText, setSearchText] = useState(""); // Add state for search text

  const scrollY = useRef(new Animated.Value(0)).current;

  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  const toggleInputModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  //getStudent
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get(`http://${Adress}/student/get`);
      setStudents(response.data);
      setLoading(false);
      setSelectedStudentId(null); // Clear the selected student
      setSelectedStudent(null); // Clear the selected student
    } catch (error) {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadEventsAndHolidays().then((data) => {
      setComments(data.comments || {});
      setCalendarMarkings(data.calendarMarkings || {});
    });
  }, []);

  const saveStudentEvents = async (studentId, events) => {
    try {
      const key = `eventsForStudent_${studentId}`;
      await AsyncStorage.setItem(key, JSON.stringify(events));
    } catch (error) {}
  };

  const loadStudentEvents = async (studentId) => {
    try {
      const key = `eventsForStudent_${studentId}`;
      const studentEvents = await AsyncStorage.setItem(key);
      return studentEvents ? JSON.parse(studentEvents) : [];
    } catch (error) {
      return [];
    }
  };

  const loadEventsAndHolidays = async () => {
    try {
      const eventsAndHolidays = await AsyncStorage.get("eventsAndHolidays");
      return eventsAndHolidays ? JSON.parse(eventsAndHolidays) : {};
    } catch (error) {
      return {};
    }
  };

  const saveEventsAndHolidays = async (data) => {
    try {
      await AsyncStorage.setItem("eventsAndHolidays", JSON.stringify(data));
    } catch (error) {}
  };

  const onDayPress = async (day) => {
    if (selectedStudentId) {
      const data = {
        date: day.dateString,
        event: {
          selected: true,
          selectedColor: "red",
          eventName: "Event",
        },
      };

      // Load existing data for the student
      const existingData = await loadStudentData(selectedStudentId);

      // Add the new data
      existingData.events.push(data);

      // Save the updated data back to AsyncStorage
      await saveStudentData(selectedStudentId, existingData);

      // Update the calendar markings
      const newCalendarMarkings = {
        ...calendarMarkings,
        [day.dateString]: data.event,
      };

      saveEventsAndHolidays({
        comments,
        calendarMarkings: newCalendarMarkings,
      });

      setCalendarMarkings(newCalendarMarkings);
    }
  };

  const onDayLongPress = async (day) => {
    
      setSelectedDay(day.dateString);
      toggleInputModal();
      const data = {
        date: day.dateString,
        event: {
          selected: true,
          selectedColor: "green",
          eventName: "Holiday",
        },
      };

      const existingData = await loadStudentData(selectedStudentId);

      existingData.holidays.push(data);

      await saveStudentData(selectedStudentId, existingData);

      // Update the calendar markings
      const newCalendarMarkings = {
        ...calendarMarkings,
        [day.dateString]: data.event,
      };

      saveEventsAndHolidays({
        comments,
        calendarMarkings: newCalendarMarkings,
      });

      setCalendarMarkings(newCalendarMarkings);
    }


  // Function to save student data in AsyncStorage

  const saveStudentData = async (studentId, data) => {
    try {
      const key = `studentData_${studentId}`;
      await AsyncStorage.setItem(key, JSON.stringify(data));
    } catch (error) {
      console.error("Error saving student data to AsyncStorage", error);
    }
  };


  const loadStudentData = async (studentId) => {
    try {
      const key = `studentData_${studentId}`;
      const data = await AsyncStorage.getItem(key);
      return data ? JSON.parse(data) : { events: [], holidays: [] };
    } catch (error) {
      console.error('Error loading student data from AsyncStorage', error);
      return { events: [], holidays: [] };
    }
  };




  const filteredStudents = students.filter((student) => {
    const firstName = student.First_name ? student.First_name.toLowerCase() : '';
    const lastName = student.LastName ? student.LastName.toLowerCase() : '';
    const className = student.Class ? student.Class.toLowerCase() : '';
  
    return (
      firstName.includes(searchText.toLowerCase()) ||
      lastName.includes(searchText.toLowerCase()) ||
      className.includes(searchText.toLowerCase())
    );
  });

 


  const onStudentPress = async (student) => {
    if (student.idStudent >= 1) {
      // Clear previous student data
      if (selectedStudentId) {
        clearPreviousStudentData(selectedStudentId);
      }
  
      // Set the new selected student
      setSelectedStudentId(student.idStudent);
      setSelectedStudent(student);
  
      // Load data for the selected student from AsyncStorage
      loadStudentData(student.idStudent).then((data) => {
        // Update the calendar markings and other data as needed
        const newCalendarMarkings = { ...calendarMarkings, ...data.calendarMarkings };
        saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });
        setCalendarMarkings(newCalendarMarkings);
      });
    } else {
      console.error("No student selected");
    }
  }



const clearPreviousStudentEvents = async (studentId) => {
  if (studentId) {
    try {
      const key = `studentEvents_${studentId}`;
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.error("Error clearing previous student events from AsyncStorage", error);
    }
  }
};


const clearPreviousStudentData = async (studentId) => {
  if (studentId) {
    const studentDataKey = `studentData_${studentId}`;
    const studentEventsKey = `studentEvents_${studentId}`;

    try {
      await AsyncStorage.getItem(studentDataKey); 
      await AsyncStorage.getItem(studentEventsKey);
    } catch (error) {
      console.error("Error clearing previous student data from AsyncStorage", error);
    }
  }
};

const onSearchChange = (text) => {
  setSearchText(text); 
};


  return (
    <ScrollView>
    <View style={{ flex: 1, backgroundColor: "white" }}>
   
      <View animationType="slide" transparent={false} visible={visible}>
        <View style={styles.container}>
          <Text style={styles.label}> Calender</Text>
         <Text style={{fontWeight:"200",fontSize:"16",top:"-8%"}}>your children activities</Text>
          <TextInput
          style={styles.searchInput}
          placeholder="Looking for a student ..."
          value={searchText}
          onChangeText={onSearchChange}
        />
          <Calendar 
            onDayPress={onDayPress}
            onDayLongPress={onDayLongPress}
            markedDates={calendarMarkings}
          />
        </View>
        
        <View>
          <View></View>
        </View>
        
      </View>

      {loading ? (
        <Text>Loading...</Text>
      ) : (
        <ScrollView horizontal={true}>
          {filteredStudents.map((student, index) => {
            return (
              <Card
                key={student.id}
                style={[
                  styles.card,
                  selectedStudentId === student.idStudent
                    ? { borderColor: "red", borderWidth: 2.1 }
                    : null,
                ]}
                onPress={() => {
                  onStudentPress(student);
                }}
              >
                <Card.Cover source={{ uri: student.image }} />
                <Card.Content>
                  <Title style={styles.title}>
                    First Name: {student.First_name}
                  </Title>
                  <Title style={styles.title}>
                    Last Name: {student.LastName}
                  </Title>
                  <Title style={styles.title}>Class: {student.class}</Title>
                </Card.Content>
                {selectedStudent && selectedStudent.id === student.id && (
                  <View style={styles.checkIcon}>
                    <Svg width="24" height="24" viewBox="0 0 24 24">
                    
                    </Svg>
                  </View>
                )}
              </Card>
            );
          })}
          <Modal
          transparent={true}
          animationType="slide"
          visible={isModalVisible}
          onRequestClose={() => setIsModalVisible(false)}
        >
          <View style={modalStyles.modalContainer}>
            <View style={modalStyles.modalContent}>
              <Text style={modalStyles.modalTitle}>Enter details for {selectedDay}</Text>
              <TextInput
                style={modalStyles.input}
                />
              <TouchableOpacity
                style={modalStyles.saveButton}
                onPress={() => {
                  // Handle saving the input here
                  setIsModalVisible(false);
                }}
              >
                <Text style={modalStyles.saveButtonText}>Save</Text>
              </TouchableOpacity>
            </View>
            
          </View>
        </Modal>
        </ScrollView>
      )}
    </View>
    </ScrollView>
  );
}



const modalStyles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.6)",
  },
  modalContent: {
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    padding: 20,
    borderRadius: 25,
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    color:"white"
  },
  input: {
    borderWidth: 2,
    borderColor: "gray",
    borderRadius: 5,
    padding: 10,
    marginBottom: 10,
    color:"white"
  },
  saveButton: {
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
    backgroundColor:"#1FA609"

  },
  saveButtonText: {
    color: "white",
    fontWeight: "bold",
  },
  searchInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    margin: 10,
    paddingLeft: 10,
    borderRadius: 10, // Add a border radius
    backgroundColor: 'white', // Set the background color
  },


});