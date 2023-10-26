import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NativeBaseProvider } from 'native-base';
import { NavigationContainer } from '@react-navigation/native';
import {MyProvider } from '../my-app/useContext/useContext'; 
 import Login from './screens/LoginPage/Login/Login'
import SignUp from './screens/LoginPage/SignUp/SignUp';
import Profile from './screens/Profile/Profile/Profile'
import Inscription from './screens/Profile/Inscription/Inscription';
import Home from './screens/Home/Home';
import Parent from "./screens/Parent/Parent"
import Teacher from './screens/Teacher/Teacher';
import Teachers from './screens/Teacher/Teachers';
import TeacherDetail from './screens/Teacher/TeacherDetail';
// import Modules from './screens/Modules/Modules';
// import ModuleDetail from './screens/Modules/ModuleDetail';
import Options from './screens/Options/Options';
import Student from './screens/Student/Student';
import Contact from './screens/Contact/Contact';

import Navbar from './screens/Navbar/Navbar'
import Chat1 from './screens/Chat/Chat1';
import Chat2 from './screens/Chat/Chat2';
import FindEmail from './screens/FindEmail/forgot-password'
import Code from './screens/Code/Code';
import newPassword from './screens/NewPassword/newPassword';
import CheckOut from './screens/Payement/CheckOut';
import ReviewOrder from  './screens/Payement/ReviewOrder';
import PaymentMethod from './screens/Payement/ReviewOrder';
import CalendarScreen from './screens/MyCalender/CalendarScreen';
import Payementbus from  './screens/Payement/Payementbus';
import StudentClass from './screens/Teacher/StudentClass';
import DataStudent1 from './screens/Teacher/DataStudent1';
import DataStudent2 from './screens/Teacher/DataStudent2';
import DataStudent3 from './screens/Teacher/DataStudent3';
import DataStudent4 from './screens/Teacher/DataStudent4';
import DataStudent5 from './screens/Teacher/DataStudent5';
import DataStudent6 from './screens/Teacher/DataStudent6';
import CheckoutScreen from './screens/Stripe/CheckoutScreen';



import Payment from './screens/Payement/Payment';
import ConversationView from "./screens/Chat/Conv";
import Notess from "./screens/Notes/Notess"
import Note from "./screens/Note/Note"

import Hom from './screens/Home/hom';
import ProfileView from './screens/Profile/ProfileView/ProfileView';
import parentInterFace from './screens/FirstInterfaces/parentInterFace';
import Intro from './screens/Intro/Intro';
const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <MyProvider>
    <NativeBaseProvider >
    <NavigationContainer>
    
    <Stack.Navigator initialRouteName="Parent">
     <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}  />
     <Stack.Screen name="Payment" component={Payment} options={{headerShown:false}}  />
     <Stack.Screen name="ReviewOrder" component={ReviewOrder} options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent1" component={DataStudent1 } options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent2" component={DataStudent2 } options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent3" component={DataStudent3} options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent4" component={DataStudent4} options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent5" component={DataStudent5} options={{headerShown:false}}  />
     <Stack.Screen name="DataStudent6" component={DataStudent6} options={{headerShown:false}}  />


     <Stack.Screen name="Login" component={Login} options={{headerShown:false}}  /> 
     <Stack.Screen name="SignUp" component={SignUp} options={{headerShown:false}}/> 
     <Stack.Screen name="Inscription" component={Inscription} options={{headerShown:false}} />
     <Stack.Screen name="StudentClass" component={StudentClass} options={{headerShown:false}} />
     <Stack.Screen name="Payementbus" component={Payementbus} options={{headerShown:false}} />
    <Stack.Screen name="Home" component={Home} options={{headerShown:false}} /> 
    <Stack.Screen name="Parent" component={Parent} options={{headerShown:false}} /> 
    <Stack.Screen name="Teacher" component={Teacher} options={{headerShown:false}} /> 
    <Stack.Screen name="Teachers" component={Teachers} options={{headerShown:false}} />
    <Stack.Screen name="TeacherDetail" component={TeacherDetail} options={{headerShown:false}} /> 
    {/*<Stack.Screen name="Options" component={Options} options={{headerShown:false}} />*/} 
    <Stack.Screen name="Student" component={Student} options={{headerShown:false}} /> 
    <Stack.Screen name="Notes" component={Note} options={{headerShown:false}} />
    <Stack.Screen name="Notess" component={Notess} options={{headerShown:false}} />
    <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}} /> 
    <Stack.Screen name="FindEmail" component={FindEmail}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Code" component={Code}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="NewPassword" component={newPassword}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Chat1" component={Chat1}  options={{headerShown:false}} ></Stack.Screen>
  {/* <Stack.Screen name="ReviewOrder" component={ReviewOrder} options={{headerShown:false}}  /> */} 
     <Stack.Screen name="CheckOut" component={CheckOut} options={{headerShown:false}}  />        
    {/*<Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{headerShown:false}}  />*/}
     <Stack.Screen name="Hom" component={Hom} options={{headerShown:false}}  />
     <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
     <Stack.Screen name="Conv" component={ConversationView} options={{headerShown:false}}  />

     <Stack.Screen name="Stripe" component={CheckoutScreen} options={{ headerShown: false }} initialParams={{ amount: 100 }} />
     




    </Stack.Navigator>
    {/* <Navbar />  */}
    </NavigationContainer>
    </NativeBaseProvider>
    </MyProvider>
  );
}
