import React, { createContext, useState } from "react";

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode,setMode] = useState(false);
  const [Class,setClass]=useState('')
  const [iduser,setUsersID]=useState(null)
  const [username, setName] = useState('');
  const[teachersId,setTeachersId]=useState(null)
  const [email,setEmail]=useState("")
  
  return (
    <MyContext.Provider value={{isDarkMode,setMode,Class,setClass,iduser,setUsersID,teachersId,setTeachersId,email,setEmail,username,setName,email}}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext };