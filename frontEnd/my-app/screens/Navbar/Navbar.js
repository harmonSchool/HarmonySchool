import {StyleSheet, Text , View , TextInput ,Button, Image ,TouchableWithoutFeedback } from "react-native"
import { useNavigation } from "@react-navigation/native"; 
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";
import { ScrollView } from "native-base";
import {lightTheme, darkTheme} from '../../Theme/Theme'
const Navbar = () => {
  const { isDarkMode,setMode } = useContext(MyContext);
  const theme = isDarkMode ? darkTheme : lightTheme;
  const navigation = useNavigation()
  return (
    <View style={[styles.container,{ backgroundColor: theme.backgroundColor }]}>
      <ScrollView horizontal={true}>
<View style={styles.nav}>
  <View>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Login')}>
      <Image
    style={{width:35,
    height:35,
    marginLeft:15,marginTop:16
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/2343/2343694.png'}} />
  </TouchableWithoutFeedback>
 </View>

  <View>
    <TouchableWithoutFeedback  onPress={()=>navigation.navigate('Inscription')} >
  <Image
    style={{width:40,
    height:40,
    marginLeft:97,marginTop:-41,
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/6299/6299232.png'}} />
  </TouchableWithoutFeedback>
  </View>
  <View>
  <TouchableWithoutFeedback onPress={()=>navigation.navigate('Chat1')}>
    <Image
    style={{width:40,
    height:40,
    marginLeft:185,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/9171/9171457.png'}} />
  </TouchableWithoutFeedback>
  </View>
  <View>
    <TouchableWithoutFeedback onPress={()=>navigation.navigate('Home')}>
  <Image
    style={{width:40,
    height:40,
    marginLeft:265,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/512/7153/7153150.png'}} />
 </TouchableWithoutFeedback>
  </View>
  <View>
  <TouchableWithoutFeedback >

  <Image
    style={{width:40,
    height:40,
    marginLeft:355,marginTop:-42
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/8139/8139348.png'}} />
  </TouchableWithoutFeedback>

  </View>
</View>
</ScrollView>
    </View>
    
  )
}

const styles = StyleSheet.create({
  container: {   

  },nav:{
    width :"120%",
    height:60,
    width:"100%",
}
});

export default Navbar