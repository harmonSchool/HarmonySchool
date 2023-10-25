
import React, { useState , useEffect,useContext } from 'react';
import { Modal, Text, TextInput, Button, View , Image , TouchableWithoutFeedback, ScrollView , TouchableOpacity  , } from 'react-native';
import { Calendar, LocaleConfig } from 'react-native-calendars';
import { FAB  , transparent} from 'react-native-paper';
import { styles } from './styles'; 
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from "axios"
import SelectDropdown from 'react-native-select-dropdown'
import { MyContext } from "../../useContext/useContext";
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

export default function CalendarScreen({ visible, onClose, onAddEvent ,route}) {
  const { isDarkMode,setMode} = useContext(MyContext);

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
   axios.get(`http://192.168.1.5:3001/student/get`)
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
      const studentEvents = await AsyncStorage.getItem(key);
      return studentEvents ? JSON.parse(studentEvents) : [];
    } catch (error) {
      console.error('Error loading student events: ', error);
      return [];
    }
  };

const loadEventsAndHolidays = async () => {
    try {
      const eventsAndHolidays = await AsyncStorage.getItem('eventsAndHolidays');
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

  const onDayPress = (day) => {
    setSelectedDate(day.dateString);
    setIsEventFormVisible(true);
    setIsHolidayFormVisible(false);
  };

  const onDayLongPress = (day) => {
    setselectedHod(day.dateString);
    setIsHolidayFormVisible(true);
    setIsEventFormVisible(false);
  };


  const handleAddEvent = async () => {
    if (selectedStudentId)
    {
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


  const students = student.map((studentData , index ) => ({
    label: studentData.First_name + ' ' + studentData.LastName ,
    value: studentData.idStudent  

  }));

 

  
  return (
    <View style={{ flex: 1, backgroundColor: 'white' }}>

    
  
      <View animationType="slide" transparent={false} visible={visible}>

      
        <View style={styles.container}>

       
        
   


<Text style={styles.label}>Select a student </Text>
<TouchableOpacity onPress={toggleModal} style={styles.customDropdown}>
  <Text style={styles.selectedValue}>ID student :  {  selectedValue }</Text>
</TouchableOpacity>
<Modal visible={isModalVisible} transparent animationType="slide">
  <View style={styles.modalContainer}>
    {students.map((student, index) => (
      <TouchableOpacity
        key={index}
        style={styles.modalItem}
        onPress={() => selectItem(student.value)}
      >
        <Text>{student.label}</Text>
      </TouchableOpacity>
    ))}
  </View>
</Modal>


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
            onDayPress={onDayPress}
            onDayLongPress={onDayLongPress}
            markedDates={calendarMarkings}
          />
  
          {isEventFormVisible && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.absent}>Absent</Text>
              <EventForm
              visible={isEventFormVisible}
              onClose={()=>setIsEventFormVisible(false)}          
            onAddEvent={handleAddEvent}
            backgroundColor="red"
          />
            </View>
          )}
  
          {isHolidayFormVisible && (
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <Text style={styles.hld}>Holiday</Text>
              <EventForm
                visible={isHolidayFormVisible}
                onClose={() => setIsHolidayFormVisible(false)}
                onAddEvent={handleAddHoliday}
                backgroundColor="green"
              />
            </View>
          )}
        </View>
  
        <View>
          {comments[selectedDate] && (
            <Text style={styles.commentText}>{comments[selectedDate]}</Text>
          )}
  
          {isHolidayFormVisible && (
            <TextInput
              style={styles.commentInput}
              onChangeText={handleCommentChange}
              value={comments[selectedDate]}
            />
          )}
        </View>
        <View>
        <View>
        {isRectangleVisible && <ScrollView style={styles.rectangle47}></ScrollView>}
        <View>
          
        </View>
        </View>
      </View>
      </View>
    </View> 
  )  

}
  
  const EventForm = ({ visible, onClose, onAddEvent, backgroundColor }) => {
    const fabStylePlus = { ...styles.fab, backgroundColor };
    const fabStyleCounter = { ...styles.fab2, backgroundColor };
  
    return (
      <View animationType="slide" transparent={false} visible={visible}>
        <View style={styles.modalContainer}>
          <FAB style={fabStylePlus} icon="plus" onPress={onAddEvent} />
          <FAB style={styles.fab3} />
          <FAB style={fabStyleCounter} />
        </View>
      </View>
    );
  };
  