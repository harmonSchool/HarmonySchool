import React from 'react';
import { View, Text, StyleSheet, Image,TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const Teachers = () => {
  const navigation = useNavigation();
 
const images1 = () => {
  navigation.navigate('TeacherDetail', {
    params: {subject: "Arabic"},
  });
  };

  const images2 = () => {
    navigation.navigate('TeacherDetail', {
      params: {subject: "Math"},
    });
    };

    const images3 = () => {
      navigation.navigate('TeacherDetail', {
        params: {subject: "Science"},
      });
      };


   const images4 = () => {
        navigation.navigate('TeacherDetail', {
          params: {subject: "Sport"},
        });
        };

    const images5 = () => {
          navigation.navigate('TeacherDetail', {
            params: {subject: "Arts"},
          });
          };

         const images6 = () => {
        navigation.navigate('TeacherDetail', {
              params: {subject: "It"},
            });
            };


  return (
    
    <View style={styles.container}>
      <View style={styles.rectContainer}>
        <Text style={styles.teacherText}>Find The Teacher</Text>
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images1}>
        <Image
    style={{width:90,
    height:90,
    marginLeft:12,marginTop:-10
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/512/6358/6358110.png'}} />


          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Arabic</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images2}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:-10
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/3426/3426679.png'}} />
    
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Math</Text>
          </View>
        </View>
      
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images3}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:23
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/190/190124.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}
            >Science</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images4}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:23
      }}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRUGv-15mEz5ThsFXXMeme5EPmHyguE5hpqSdaaDXi9doKV-_KrL201kzsJODGXUjIjkv0&usqp=CAU'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}
            >Sport</Text>
          </View>
        </View>
       
      </View>
      <View style={styles.imageRow}>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images5}>
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:80
      }}
      source={{uri:'https://cdn-icons-png.flaticon.com/512/5277/5277145.png'}} />
          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>Arts</Text>
          </View>
        </View>
        <View style={styles.rectangles}>
        <TouchableOpacity onPress={images6}>
          
        <Image
        style={{
        height:100,
        width:100,
        marginLeft:0,marginTop:80
      }}
      source={{uri:'https://www.iconbunny.com/icons/media/catalog/product/4/0/4064.12-studying-on-laptop-icon-iconbunny.jpg'}} />

          </TouchableOpacity>
          <View style={styles.textContain}>
            <Text style={styles.text}>IT</Text>
          </View>
        </View>
       
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: '100%',
    top:0,
    backgroundColor: "white"  },
  rectContainer: {
    backgroundColor: 'white',
    borderRadius: 10,
    paddingHorizontal: 50,
    paddingVertical: 15,
    
    alignSelf: 'center',
    marginTop:160,

  },
  teacherText: {
    width: 349,
    height: 31,
    fontFamily: "Poppins",
    fontSize: 30,
    fontWeight: "bold",
    fontStyle: "normal",
    lineHeight: 30,
    color: "#BA68C8",
    left:60,
    top:-20
  },
  rectangles: {
    backgroundColor: 'white',
    width: 120,
    height: 140,
    borderRadius: 25,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    marginLeft: 30,
    borderColor: 'black',
    borderWidth: 0,
  },

  textContain: {
    marginTop: 5,
  },
  text: {
    fontSize: 18,
    fontWeight:"400"
  },
  imageRow: {
    flexDirection: 'row', 
    justifyContent: 'center',
    marginRight:25 
  },
});

export default Teachers;
