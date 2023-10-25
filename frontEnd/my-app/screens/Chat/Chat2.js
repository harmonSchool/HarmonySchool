import React, { useState, useEffect } from 'react';
import { View, Text, Image, TextInput, Button, ScrollView, TouchableOpacity } from 'react-native';

// Replace this with your socket.io implementation for React Native
// import socket from 'your-socket-library';

const Chat2 = () => {
  const [loggedInUser, setLoggedInUser] = useState(null);
  const [userList, setUserList] = useState([]);
  const [chatRooms, setChatRooms] = useState({});

  const login = () => {
    // Replace this with your implementation for getting username and password
    const username = 'user123';
    const password = 'password123';

    // Replace this with your API request method for React Native
    fetch('http://192.168.10.1:3000/login', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ username, password }),
    })
      .then((response) => response.json())
      .then((resp) => {
        if (resp.status) {
          setLoggedInUser(resp.data);
        }
      });
  };

  const sendMyMessage = (chatWidowId, fromUser, message) => {
    const meClass = loggedInUser && loggedInUser.user_id === fromUser.user_id ? 'me' : '';

    // Create and update the chat messages for the specific chat room
    const updatedChatRooms = { ...chatRooms };
    if (!updatedChatRooms[chatWidowId]) {
      updatedChatRooms[chatWidowId] = [];
    }
    updatedChatRooms[chatWidowId].push({ fromUser, message });

    setChatRooms(updatedChatRooms);
  };

  const sendMessage = (room) => {
    const message = ''; // Get the message from the input field

    // Replace this with your socket.emit implementation for React Native
    // socket.emit('message', { room, message, from: loggedInUser });

    sendMyMessage(room, loggedInUser, message);
  };

  const openChatWindow = (room) => {
    if (!chatRooms[room]) {
      chatRooms[room] = [];
    }

    // Replace this with your React Native navigation or rendering logic
    // You can use components to render chat windows and messages
  };

  const createRoom = (id) => {
    const room = Date.now() + Math.random();
    const formattedRoom = room.toString().replace('.', '_');

    // Replace this with your socket.emit implementation for React Native
    // socket.emit('create', { room: formattedRoom, userId: loggedInUser.userId, withUserId: id });

    openChatWindow(formattedRoom);
  };

  // useEffect to listen to updates on user list and chat messages
  useEffect(() => {
    // Replace this with your socket.on('updateUserList') implementation for React Native
    // socket.on('updateUserList', (updatedUserList) => setUserList(updatedUserList));
  }, []);

  // Implement similar useEffects for 'invite' and 'message' event handlers

  return (
    <View>
      {/* Render your login form here */}
      {/* Replace HTML elements with React Native components */}
      <TextInput
        placeholder="Username"
        onChangeText={(text) => {}}
      />
      <TextInput
        placeholder="Password"
        onChangeText={(text) => {}}
      />
      <Button
        title="Login"
        onPress={login}
      />

      <ScrollView>
        {Object.keys(chatRooms).map((room) => (
          // Render chat windows and messages here
          // You can use TouchableOpacity or other components to handle button clicks
          <TouchableOpacity key={room} onPress={() => openChatWindow(room)}>
            <Text>Chat Room: {room}</Text>
            {chatRooms[room].map((message, index) => (
              <View key={index}>
                {/* Render chat messages */}
                <Image source={{ uri: `images/${message.fromUser.user_image}` }} />
                <Text>{message.fromUser.user_full_name}</Text>
                <Text>{message.message}</Text>
              </View>
            ))}
            {/* Render input field and send button for each chat room */}
            <TextInput placeholder="Message" onChangeText={(text) => {}} />
            <Button title="Send" onPress={() => sendMessage(room)} />
          </TouchableOpacity>
        ))}
      </ScrollView>

      <ScrollView>
        {userList.map((user) => (
          <TouchableOpacity key={user.user_id} onPress={() => createRoom(user.user_id)}>
            <Text>{user.user_full_name}</Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

export default Chat2;
