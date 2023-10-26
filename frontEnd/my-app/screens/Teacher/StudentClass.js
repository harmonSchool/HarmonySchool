import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity , Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const StudentClass = () => {
    const navigation = useNavigation();

    const handle1 = () => {
      navigation.navigate('DataStudent1');
    };

    const handle2 = () => {
        navigation.navigate('DataStudent2');
      };

      const handle3 = () => {
        navigation.navigate('DataStudent3');
      };

      const handle4 = () => {
        navigation.navigate('DataStudent4');
      };

      const handle5 = () => {
        navigation.navigate('DataStudent5');
      };

      const handle6 = () => {
        navigation.navigate('DataStudent6');
      };
  return (
    <View>
    <View style={styles.detailContainer}>
      <Text style={styles.className}>Classes</Text>
<View>
      <Image
    style={{width:40,
    height:60,
    width:130 ,
    height:130, 
    marginLeft:16,top:-70
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/512/6621/6621964.png'}} />
  </View>
      <TouchableOpacity style={styles.button1} onPress={handle1}>
      <Image
    style={{width:40,
    height:60,
    width:60 , 
    marginLeft:0,marginTop:30
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />
        <Text style={styles.buttonText}>Classe 1</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button2} onPress={handle2}>
      <Image
      style={{width:40,
      height:60,
      width:60 , 
      marginLeft:0,marginTop:30
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />

        <Text style={styles.buttonText}>Classe 2</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button3} onPress={handle3}>
      <Image
      style={{width:40,
      height:60,
      width:60 , 
      marginLeft:0,marginTop:30
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />
        <Text style={styles.buttonText}>Classe 3</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button4} onPress={handle4}>
      <Image
      style={{width:40,
      height:60,
      width:60 , 
      marginLeft:0,marginTop:30
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />
        <Text style={styles.buttonText}>Classe 4</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button5} onPress={handle5}>
      <Image
      style={{width:40,
      height:60,
      width:60 , 
      marginLeft:0,marginTop:30
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />
        <Text style={styles.buttonText}>Classe 5</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button6} onPress={handle6}>
      <Image
      style={{width:40,
      height:60,
      width:60 , 
      marginLeft:0,marginTop:30
    }}
    source={{uri:'https://cdn-icons-png.flaticon.com/512/5123/5123413.png'}} />
        <Text style={styles.buttonText}>Classe 6</Text>
      </TouchableOpacity>
    </View>
    </View>
  );
};

const styles = StyleSheet.create({
  detailContainer: {
    borderColor:"purple",
    borderRadius: 10,
    width: "80%",
    height: "90%",
    padding: 20,
    marginTop: 180,
    alignItems: 'center',
    justifyContent: 'center',
    marginLeft:30,
    
  },
  className: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 20,
    top:"-2%",
   left:105
  },
  button1: {
    width: 140,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#D85675",
    left:"-25%",
    top:5 , 
shadowColor: "rgba(0, 0, 0, 0.25)",
shadowOffset: {
	width: 0,
	height: 4
},
shadowRadius: 4,
shadowOpacity: 1 , 

    
  },

  button2: {
    width: 140,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#8BD061",
    left:"35%",
    top:"-15%" ,
    


    borderRadius: 25,
    
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1 , 
    
  },

  button3: {
    width: 140,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#9CB9B9",
    left:"35%",
    top:"-9.5%",
    

borderRadius: 25,

shadowColor: "rgba(0, 0, 0, 0.25)",
shadowOffset: {
	width: 0,
	height: 4
},
shadowRadius: 4,
shadowOpacity: 1 , 
  },

  button4: {
    width: 140,
    height: 120,

left:"-25%",
top:"-25%" , 

backgroundColor: "#9E9CB9", 

borderRadius: 25,

shadowColor: "rgba(0, 0, 0, 0.25)",
shadowOffset: {
	width: 0,
	height: 4
},
shadowRadius: 4,
shadowOpacity: 1 , 
  
    
  },

  button5: {
    width: 140,
    height: 120,
    backgroundColor: "#A7B99C", 

    borderRadius: 25,
    
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1 ,     backgroundColor: "#A7B99C",
    left:"-25%",
    top:"-19%" 
  },

  button6: {
    width: 140,
    height: 120,
    borderRadius: 25,
    backgroundColor: "#CFCDDD", 

    borderRadius: 25,
    
    shadowColor: "rgba(0, 0, 0, 0.25)",
    shadowOffset: {
      width: 0,
      height: 4
    },
    shadowRadius: 4,
    shadowOpacity: 1 , 
        left:"35%",
    top:"-34.5%" 
  },

  buttonText: {
    fontWeight: 'bold',
    left:"25%",

    color: 'white',
    fontSize: 18,
    top:"-34%",
    left:"44%"

  },
});

export default StudentClass;
