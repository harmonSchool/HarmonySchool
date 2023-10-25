import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList, ScrollView } from 'react-native';
import io from 'socket.io-client';
import axios from 'axios'


const socket = io('http://192.168.1.192:3001');
const ConversationView = () => {
  const [messages, setMessages] = useState([]);
  const [messageInput, setMessageInput] = useState('');
  const [idchat,setIdChat]=useState(null)
  const { usersId,teachersId,setTeachersId } = useContext(MyContext);
  const [message, setMessage] =useState('');
  const recipientId = 1;
  useEffect(() => {
  axios.get('http://192.168.1.192:3000/teacher/get').then((res)=>{
    (res.data)
    console.log("all users is here")
  }).catch((err)=>{
    console.log("Parents "+err);
  })
  socket.on('privateMessage', (content) => {
    console.log('Received private message: ', content);
  })

  axios.get('http://192.168.1.192:3000').then((res)=>{
    setTeachersId(res.data)
    console.log("all teachers is here");
  }).catch((err)=>{
    console.log("teachers : "+err);
  })
    socket.connect();
    socket.on('connect', () => {
      console.log('Connected to Chatroom');
    });
    socket.on('message', (message) => {
      setMessages(prevMessages => [...prevMessages, message]);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from Chatroom');
      socket.disconnect()
    });
}, []);

const sendPrivateMessage = () => {
  if (message && recipientId) {
    const messageData = {
      recipientId,
      content: message,
    };
    socket.emit('privateMessage', messageData);
    setMessage('');
  }
};



    const startChat=()=>{
      socket.emit("join",{usersId, TeachrId}, (idchatFromserver)=>{
        setIdChat(idchatFromserver)
      })
    }

  // const sendMsg =()=>{
  //   socket.emit("send",{idchat, userId, text: messageInput})
  //   setMessageInput('');
  // }

  const sendMessage = () => {
    startChat()
    const data = {
      content: messageInput,
      conversationId: idchat,
      // senders:userId

    };
    socket.emit('send', data);
    setMessageInput('');
   
  };

  return (
    <ScrollView>
    <View>
      <View>
        <Text>Conversation</Text>
        <FlatList
        data={messages}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Text>{item.text}</Text>
        
        )}
      />
      </View>
      <TextInput
        value={messageInput}
        onChangeText={(text) => setMessageInput(text)}
        placeholder="Type a message"
      />
      <Button onPress={sendMessage} title="Send" />
    </View>
    </ScrollView>
  );
};

export default ConversationView;

