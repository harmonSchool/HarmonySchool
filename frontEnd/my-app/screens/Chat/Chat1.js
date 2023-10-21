import React, { useState, useEffect, useContext } from 'react';
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';
import { lightTheme, darkTheme } from '../../Theme/Theme';
import { MyContext } from '../../useContext/useContext';
import { io } from 'socket.io-client';

const Chat1 = () => {
  const { isDarkMode, setMode } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const [socket, setSocket] = useState(null);
  const [recipient, setRecipient] = useState('');
  const [message, setMessage] = useState('');
  const [receivedMsg, setReceivedMsg] = useState([]);

  useEffect(() => {
    const newSocket = io('http://192.168.101.18:3001');
    newSocket.connect();
    newSocket.on('connect', () => {
      console.log('Connected to server');
    });
    setSocket(newSocket);

    return () => {
      newSocket.disconnect();
      newSocket.on('disconnect', () => {
        console.log('DisConnected to server');
      });
    };
  }, []);

  useEffect(() => {
    if (socket) {
      socket.on('send', (msg) => {
        setReceivedMsg((prevMessages) => [...prevMessages, msg]);
      });
    }
  }, [socket]);

  const typing = () => {
    socket.emit('activity', console.log(socket.id.substring(0, 5)));
  };

  const Sender = () => {
    if (message.trim() !== '') {
      socket.emit('receive', message);
      console.log(message)
      // setMessage(message);
    }
  };

  const darkMode = () => {
    setMode(!isDarkMode);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="User ID"
        value={recipient}
        onChangeText={(value) => setRecipient(value)}
      />
      <TextInput
        style={styles.input}
        placeholder="Type a message"
        value={message}
        onChangeText={(text) => setMessage(text)}
      />
      <Button title="Send request" onPress={Sender} />
      <View>
        {receivedMsg.map((msg, index) =>{ 
          console.log(msg, "mssg")
          return (
          <Text key={index}>{`${msg.senderID}: ${msg}`}</Text>
        )})}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  input: {
    width: 150,
    height: 50,
    backgroundColor: 'grey',
    borderRadius: 12,
    marginTop: 20,
    marginBottom: 10,
    paddingLeft: 10,
  },
});

export default Chat1;
