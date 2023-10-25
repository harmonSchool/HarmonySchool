import { View, Text } from 'react-native';
import { StyleSheet } from 'react-native';
import Video from 'react-native-video';

const Intro = () => {
  return (
    <View>
      <Text>Intro</Text>
      <View>
      <Video 
      source={{uri:"https://youtu.be/AnjyzruZ36E?si=YqMOrvdYG6k1-cdR"}}/>

  </View>
    </View>
  );
};

const styles=StyleSheet.create({
    backgroundVideo: {
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        right: 0,
      }    
    
})
export default Intro;
