import React, { useState, useEffect  , useRef} from 'react';
import { Modal, Text, TextInput, View, Image, TouchableWithoutFeedback, ScrollView, TouchableOpacity  , Animated} from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { styles } from './styles';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import SelectDropdown from 'react-native-select-dropdown'
import Mailer from "react-native-mail"
import { Svg, Path } from 'react-native-svg';
import { Card, Title } from 'react-native-paper';

LocaleConfig.locales['en'] = {
  monthNames: [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ],
  monthNamesShort: [
    'Jan.',
    'Feb.',
    'Mar.',
    'Apr.',
    'May',
    'Jun.',
    'Jul.',
    'Aug.',
    'Sep.',
    'Oct.',
    'Nov.',
    'Dec.',
  ],
  dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
  dayNamesShort: ['Sun.', 'Mon.', 'Tue.', 'Wed.', 'Thu.', 'Fri.', 'Sat.'],
};

LocaleConfig.defaultLocale = 'en';

export default function CalendarScreen({ visible, onClose, onAddEvent, route }) {

  


  
  const [student, setStudentData] = useState([]);
  const [students, setStudents] = useState([]);

  const [user, setUserData] = useState([]);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedHod, setselectedHod] = useState('');
  const [comments, setComments] = useState({});
  const [calendarMarkings, setCalendarMarkings] = useState({});
  const [isRectangleVisible, setIsRectangleVisible] = useState(false);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedStudentId, setSelectedStudentId] = useState(null);

  const [loading, setLoading] = useState(true);
  const [searchText, setSearchText] = useState('');
  const [selectedStudent, setSelectedStudent] = useState(null);
  const [isEventFormVisible, setIsEventFormVisible] = useState(true);
  const [isHoldilday, setIsHolidayFormVisible] = useState(true);


  const scrollY = useRef(new Animated.Value(0)).current;



 
 


  const handleScroll = Animated.event(
    [{ nativeEvent: { contentOffset: { y: scrollY } } }],
    { useNativeDriver: false }
  );

  //getStudent
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('http://192.168.1.189:2023/student/getStudentsByClass/First class');
        setStudents(response.data);
        setLoading(false);
      } catch (error) {
       
        setLoading(false);
      }
    };

    fetchData();
  }, []);


 

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
    } catch (error) {
    }
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
      const eventsAndHolidays = await AsyncStorage.setItem('eventsAndHolidays');
      return eventsAndHolidays ? JSON.parse(eventsAndHolidays) : {};
    } catch (error) {
      return {};
    }
  };

  const saveEventsAndHolidays = async (data) => {
    try {
      await AsyncStorage.setItem('eventsAndHolidays', JSON.stringify(data));
    } catch (error) {
    }
  };

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsEventFormVisible(true);
    setIsHolidayFormVisible(false);
  
    if (selectedStudent) {
      // Update the color of the marked date to red for the selected student
      const newCalendarMarkings = {
        ...calendarMarkings,
        [day.dateString]: { selected: true, selectedColor: 'red', eventName: 'Event' },
      };
  
      saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });
  
      setCalendarMarkings(newCalendarMarkings);
    }
  };
  
  const onDayLongPress = (day) => {
    setselectedHod(day.dateString);
    setIsHolidayFormVisible(true);
    setIsEventFormVisible(false);
  
    if (selectedStudent) {
      // Update the color of the marked date to green for the selected student
      const newCalendarMarkings = {
        ...calendarMarkings,
        [day.dateString]: { selected: true, selectedColor: 'green', eventName: 'Holiday' },
      };
  
      saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });
  
      setCalendarMarkings(newCalendarMarkings);
    }
  };
  const handleAddEvent = async () => {
    if (selectedStudentId) {
      // Load events for the selected student
      const currentEvents = await loadStudentEvents(selectedStudentId);
      const newEvent = {
        selected: true,
        selectedColor: 'red',
        eventName: 'Event',
      };

      // Add the new event to the current events
      currentEvents.push({
        date: selectedDate,
        event: newEvent,
      });

      // Save the updated events for the selected student
      await saveStudentEvents(selectedStudentId, currentEvents);

      // Update the calendar markings
      const newCalendarMarkings = {
        ...calendarMarkings,
        [selectedDate]: newEvent,
      };

      saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });

      setCalendarMarkings(newCalendarMarkings);
    }

    setIsEventFormVisible(true);
  };

  const handleAddHoliday = () => {
    const newCalendarMarkings = {
      ...calendarMarkings,
      [selectedHod]: { selected: true, selectedColor: 'green', eventName: 'Holiday' },
    };

    saveEventsAndHolidays({ comments, calendarMarkings: newCalendarMarkings });

    setCalendarMarkings(newCalendarMarkings);
    setIsHolidayFormVisible(true);
  };

  const handleCommentChange = (text) => {
    const newComments = { ...comments, [selectedDate]: text };

    saveEventsAndHolidays({ comments: newComments, calendarMarkings });

    setComments(newComments);
  };

  const toggleRectangleVisibility = () => {
    setIsRectangleVisible(!isRectangleVisible);
  };


  const filteredStudents = students.filter(student => {
    return student.First_name.toLowerCase().includes(searchText.toLowerCase()) ||
      student.LastName.toLowerCase().includes(searchText.toLowerCase());
  });


  

 const clearPreviousStudentEvents = async (studentId) => {
  if (studentId) {
    const key = `eventsForStudent_${studentId}`;
    await AsyncStorage.removeItem(key);
  }
};

  const onStudentPress = (student) => {
    clearPreviousStudentEvents(selectedStudentId); // Clear previous student's events
    setSelectedStudent(student); // Set the new selected student
  };

  return (
    <View style={{ flex: 1, backgroundColor: 'white'  , }}>
      <View animationType="slide" transparent={false} visible={visible}>
        <View style={styles.container}>
          <Text style={styles.label}> Calender</Text>
          
          
  
          <Calendar
            onDayPress={onDayPress}
            onDayLongPress={onDayLongPress}
            markedDates={calendarMarkings}
          />
  
         
         
        
      
        </View>
        <View>
          <View>
          </View>
        </View>
      </View>
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
              <Card key={student.id} style={styles.card}
              onPress={() => onStudentPress(student)}

              >
              
                <Card.Cover source={{ uri: student.image }} />
                <Card.Content>
                  <Title style={styles.title}>First Name: {student.First_name}</Title>
                  <Title style={styles.title}>Last Name: {student.LastName}</Title>
                </Card.Content>
              </Card>
            );
          })}
        </ScrollView>
      )}
    </View>
  );
          }
 