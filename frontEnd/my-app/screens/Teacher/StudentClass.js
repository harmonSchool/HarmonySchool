import React from 'react';
import { View, Text, StyleSheet, Image , TouchableOpacity} from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { ScrollView } from 'native-base';

const StudentClass = () => {
  const navigation = useNavigation();

  const handleNavigation = (routeName) => {
    navigation.navigate(routeName);
  };

  const classData = [
    { id: 1, name: 'Classe 1', color: '#3498db' },
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
  <TouchableOpacity
    style={[styles.button, { backgroundColor }]}
    onPress={onPress}
  >
    <Image
      style={styles.buttonImage}
      source={{
        uri:
          'https://static.vecteezy.com/system/resources/previews/024/781/754/original/cartoon-graduate-students-icon-free-png.png',
      }}
    />
    <Text style={styles.buttonText}>{name}</Text>
  </TouchableOpacity>
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
    shadowColor: 'rgba(0, 0, 0, 0.4)',
    shadowOffset: { width: 0, height: 4 },
    shadowRadius: 6,
    shadowOpacity: 1,
  },
  buttonImage: {
    width: 60,
    height: 60,
    marginLeft: 43,
    marginTop: 15,
  },
  buttonText: {
    fontWeight: 'bold',
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
    marginTop: 5,
  },
});

export default StudentClass;
