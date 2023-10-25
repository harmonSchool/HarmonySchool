import React, { createContext, useState } from 'react';

const MyContext = createContext();

const MyProvider = ({ children }) => {
  const [isDarkMode, setMode] = useState(false);
  const [Class, setClass] = useState('');
  const [usersId, setUsersID] = useState(null);
  const [teachersId, setTeachersId] = useState(null);

  const [user, setUser] = useState(null);

  return (
    <MyContext.Provider value={{ isDarkMode, setMode, Class, setClass, usersId, setUsersID, teachersId, setTeachersId, user, setUser }}>
      {children}
    </MyContext.Provider>
  );
};

export { MyProvider, MyContext , };
