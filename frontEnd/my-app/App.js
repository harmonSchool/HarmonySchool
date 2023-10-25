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
import Modules from './screens/Modules/Modules';
import Languages from './screens/Modules/Languages';
import ModuleDetail from './screens/Modules/ModuleDetail';
import Payement from './screens/Payement/Payement';
import Options from './screens/Options/Options';
import Student from './screens/Student/Student';
import Contact from './screens/Contact/Contact';
import Notes from './screens/Note/notes';
import Arabic from './screens/Modules/ModuleArabic';
import Frensh from './screens/Modules/ModuleFrensh';
import English from './screens/Modules/ModuleEnglish';
import Math from './screens/Modules/ModuleMath';
import Science from './screens/Modules/ModuleScience';
import It from './screens/Modules/ModuleIT';
import Arts from './screens/Modules/ModuleArts';
import Sport from './screens/Modules/ModuleSport';
import Navbar from './screens/Navbar/Navbar'
import Chat1 from './screens/Chat/Chat1';
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


import ConversationView from "./screens/Chat/Conv";
import Notess from './screens/Notes/Notess'

const Stack = createNativeStackNavigator()


export default function App() {
  return (
    <MyProvider>
    <NativeBaseProvider >
    <NavigationContainer>
    
    <Stack.Navigator initialRouteName="Parent">
     <Stack.Screen name="Profile" component={Profile} options={{headerShown:false}}  />

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
    <Stack.Screen name="Modules" component={Modules} options={{headerShown:false}} /> 
    <Stack.Screen name="TeacherDetail" component={TeacherDetail} options={{headerShown:false}} /> 
    <Stack.Screen name="Languages" component={Languages} options={{headerShown:false}} />
    <Stack.Screen name="ModuleDetail" component={ModuleDetail} options={{headerShown:false}} /> 
    <Stack.Screen name="Options" component={Options} options={{headerShown:false}} /> 
    <Stack.Screen name="Payement" component={Payement} options={{headerShown:false}} />
    <Stack.Screen name="Student" component={Student} options={{headerShown:false}} /> 
    <Stack.Screen name="Notes" component={Notes} options={{headerShown:false}} />
    <Stack.Screen name="Notess" component={Notess} options={{headerShown:false}} />
    <Stack.Screen name="Contact" component={Contact} options={{headerShown:false}} /> 
    <Stack.Screen name="ModuleEnglish" component={English} options={{headerShown:false}} /> 
    <Stack.Screen name="ModuleFrensh" component={Frensh} options={{headerShown:false}} />
    <Stack.Screen name="ModuleArabic" component={Arabic} options={{headerShown:false}} />
    <Stack.Screen name="ModuleMath" component={Math} options={{headerShown:false}} />  
    <Stack.Screen name="ModuleScience" component={Science} options={{headerShown:false}} />
    <Stack.Screen name="ModuleArts" component={Arts} options={{headerShown:false}} />  
    <Stack.Screen name="ModuleSport" component={Sport} options={{headerShown:false}} /> 
    <Stack.Screen name="ModuleIt" component={It} options={{headerShown:false}} /> 
    <Stack.Screen name="FindEmail" component={FindEmail}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Code" component={Code}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="NewPassword" component={newPassword}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="Chat1" component={Chat1}  options={{headerShown:false}} ></Stack.Screen>
    <Stack.Screen name="ReviewOrder" component={ReviewOrder} options={{headerShown:false}}  />  
     <Stack.Screen name="CheckOut" component={CheckOut} options={{headerShown:false}}  />        
     <Stack.Screen name="PaymentMethod" component={PaymentMethod} options={{headerShown:false}}  />

     
     <Stack.Screen name="CalendarScreen" component={CalendarScreen} options={{ headerShown: false }} />
     <Stack.Screen name="Conv" component={ConversationView} options={{headerShown:false}}  />

     <Stack.Screen name="Stripe" component={CheckoutScreen} options={{ headerShown: false }} initialParams={{ amount: 100 }} />
     




    </Stack.Navigator>
    <Navbar /> 
    </NavigationContainer>
    </NativeBaseProvider>
    </MyProvider>
  );
}
