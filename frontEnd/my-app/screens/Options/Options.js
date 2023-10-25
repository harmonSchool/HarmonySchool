import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
const Options = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>this option</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default Options;
