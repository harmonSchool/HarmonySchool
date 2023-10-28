import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);
  const [Class,setClass]=useState('')
  const [iduser,setUsersID]=useState(null)
  const [username, setName] = useState('');
  const[teachersId,setTeachersId]=useState(null)
  const [email,setEmail]=useState("")
  const[data,setData]=useState({});
const[idclass,setIdClass]=useState(null)
const[studID,setStudID]=useState(null)

  const[student,setStud]=useState(null)
  const[first_name,setFirst_name]=useState(null
    
    )

  return (
    <MyContext.Provider value={{studID,setStudID,first_name,setFirst_name,student,setStud,idclass,setIdClass,data,setData,isDarkMode,setMode,Class,setClass,iduser,setUsersID,teachersId,setTeachersId,email,setEmail,username,setName,email}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };
