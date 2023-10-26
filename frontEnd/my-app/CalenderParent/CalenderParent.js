
import React, { useState , useEffect } from 'react';
import { Modal, Text, TextInput, Button, View , Image , TouchableWithoutFeedback, ScrollView , TouchableOpacity  , } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { FAB  , transparent} from 'react-native-paper';
import { styles } from './styles'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import SelectDropdown from 'react-native-select-dropdown'

import Mailer from "react-native-mail"



import { Svg, Path } from 'react-native-svg';


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

export default function CalenderParent({ visible, onClose, onAddEvent ,route}) {







  const [student,setStudentData]=useState([])
  const [user , setUserData]=useState([])
  const [selectedDate, setSelectedDate] = useState('');

  const [selectedHod, setselectedHod] = useState('');
  const [comments, setComments] = useState({});
  const [isEventFormVisible, setIsEventFormVisible] = useState(true);
  const [isHolidayFormVisible, setIsHolidayFormVisible] = useState(false);
  const [calendarMarkings, setCalendarMarkings] = useState({});
  const [isRectangleVisible, setIsRectangleVisible] = useState(false);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [selectedValue, setSelectedValue] = useState();

  const [selectedStudentId, setSelectedStudentId] = useState(null);
  const [selectedStudentFirstName, setSelectedStudentFirstName] = useState('');
  const [selectedStudentLastName, setSelectedStudentLastName] = useState('');


  
  useEffect(() => {
    // Retrieve the First Name and Last Name from AsyncStorage
    AsyncStorage.getItem('First_name')
      .then((firstName) => {
        setSelectedStudentFirstName(firstName);
      })
      .catch((error) => {
        console.error('Error retrieving First Name: ', error);
      });

    AsyncStorage.getItem('LastName')
      .then((lastName) => {
        setSelectedStudentLastName(lastName);
      })
      .catch((error) => {
        console.error('Error retrieving Last Name: ', error);
      });

    // ...
  });


  const items = ['Option 1', 'Option 2', 'Option 3'];

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const selectItem = (item) => {
    setSelectedValue(item);
    toggleModal();
  };

  
  const onSelectStudent = (selectedItem, index) => {
    setSelectedStudentId(selectedItem.value);
    const selectedStudent = student.find(studentData => studentData.idStudent === selectedItem.value);
    if (selectedStudent) {
      setSelectedStudentFirstName(selectedStudent.First_name);
      setSelectedStudentLastName(selectedStudent.LastName);
    }
    toggleModal();
  };


  
  //getStudent
  useEffect(()=>{
   axios.get(`http://192.168.1.25:2023/student/get`)
      .then((response)=>{
console.log(response.data);
    setStudentData(response.data )
  }).catch((error)=>{
    console.error("Error fetching student data ",error)
  })
  console.log(student,"student");

},[])



useEffect(() => {
  axios.get(`http://192.168.1.5:3001/api/users/getAll`)
    .then((response) => {
      console.log("API Response:", response.data);
      setUserData(response.data);

      const emails = response.data.map((user) => user.email);
      console.log("Emails:", emails);
    })
    .catch((error) => {
      console.error("Error fetching student data", error);
    });

  console.log(user, "student");
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
      console.error('Error saving student events: ', error);
    }
  };

  const loadStudentEvents = async (studentId) => {
    try {
      const key = `eventsForStudent_${studentId}`;
      const studentEvents = await AsyncStorage.removeItem(key);
      return studentEvents ? JSON.parse(studentEvents) : [];
    } catch (error) {
      console.error('Error loading student events: ', error);
      return [];
    }
  };

const loadEventsAndHolidays = async () => {
    try {
      const eventsAndHolidays = await AsyncStorage.removeItem('eventsAndHolidays');
      return eventsAndHolidays ? JSON.parse(eventsAndHolidays) : {};
    } catch (error) {
      console.error('Error loading data: ', error);
      return {};
    }
  };

  
  const saveEventsAndHolidays = async (data) => {
    try {
      await AsyncStorage.setItem('eventsAndHolidays', JSON.stringify(data));
    } catch (error) {
      console.error('Error saving data: ', error);
    }
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


  const students = student.map((studentData , index ) => ({
    label: studentData.First_name + ' ' + studentData.LastName ,
    value: studentData.idStudent  

  }));

 

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

    
  
      <View animationType="slide" transparent={false} visible={visible}>

      
        <View style={styles.container}>

       
        
   





          <FAB style={styles.circle} />
          <FAB style={styles.ce2} />
          <Text style={styles.hd}>Holiday</Text>
          <Text
            style={styles.at}
            title="Filter Students"
            onPress={toggleRectangleVisibility}
          >
            Absent
          </Text>
  
          <Text style={{ top: -28, marginLeft: '12%', fontWeight: '700' }} />
  
         
  
          <Calendar
        
          />
  
         
              <Text style={styles.absent}></Text>
              
        
            </View>
        
  
         
        </View>
  
        <View>
        
        </View>
        <View>
        <View>
        {isRectangleVisible && <ScrollView style={styles.rectangle47}></ScrollView>}
        <View>
          
        </View>
        </View>
      </View>
      </View>
  )  

}
  

  