import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';
import { Card, Title } from 'react-native-paper';

const StudentClass = () => {
  const navigation = useNavigation();

  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  const classData = [
    { id: 1, name: 'Classe 1', color: 'green' },
    { id: 2, name: 'Classe 2', color: '#e74c3c' },
    { id: 3, name: 'Classe 3', color: '#27ae60' },
    { id: 4, name: 'Classe 4', color: '#f39c12' },
    { id: 5, name: 'Classe 5', color: '#9b59b6' },
    { id: 6, name: 'Classe 6', color: '#34495e' },
  ];

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.className}>Available Classes</Text>
        <Image
          style={styles.image}
          source={{
            uri:
              'https://cdn-icons-png.flaticon.com/512/6621/6621964.png',
          }}
        />
        {classData.map((classInfo) => (
          <CardItem
            key={classInfo.id}
            backgroundColor={classInfo.color}
            onPress={() => handleNavigation(`DataStudent${classInfo.id}`)}
            name={classInfo.name}
          />
        ))}
      </View>
    </ScrollView>
  );
};

const CardItem = ({ backgroundColor, onPress, name }) => (
  <Card
    style={[styles.button, { backgroundColor }]}
    onPress={onPress}
  >
    <Card.Content>
      <Title style={styles.buttonText}>{name}</Title>
    </Card.Content>
  </Card>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ecf0f1',
  },
  className: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#2c3e50',
  },
  image: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  button: {
    width: 140,
    height: 120,
    borderRadius: 15,
    marginVertical: 10,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },
});

export default StudentClass;
