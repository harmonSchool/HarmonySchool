import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView, TouchableNativeFeedback  } from "react-native"
import Video from 'react-native-video'
import {lightTheme, darkTheme} from '../../Theme/Theme'
import { useContext } from "react";
import { MyContext } from "../../useContext/useContext";

import AsyncStorage from '@react-native-async-storage/async-storage';


const Home = ({navigation}) => {

    const removeItem = async () => {
        try {
          // Clear any user-related data from AsyncStorage
          await AsyncStorage.removeItem('userData'); // You can replace 'userData' with the key you used to store the user data.
      
          // You may also want to navigate to the login or another appropriate screen
          navigation.navigate('Login'); // Replace 'Login' with the screen you want to navigate to after logging out.
        } catch (error) {
          console.error('Error logging out:', error);
        }
      };

    const { isDarkMode,setMode } = useContext(MyContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
    const darkMode=()=>{
        setMode(!isDarkMode)
      }
  return (
    <View style={{backgroundColor: theme.backgroundColor}}>
    
    <ScrollView>
    
    
        <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
        <Text style={styles.Log} onPress={removeItem}>
        Log Out
      </Text>
            <View style={[styles.nav, {borderColor:theme.borderColor}]}>
            <Image
    style={{width:40,
    height:40,
    marginLeft:12,marginTop:-4
  }}
  source={{uri:'https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-online-education-logo.png'}} />

  
            <TouchableNativeFeedback onPress={()=>navigation.navigate('Login')}>
            <View style={{alignItems: 'center',justifyContent: 'center',height:38,width:90,marginLeft:160,borderRadius:15,marginTop:-38   ,backgroundColor:"purple"}}>
            <Text style={{color:"white"}}>Connection</Text>
            </View>
            </TouchableNativeFeedback>
            <TouchableNativeFeedback onPress={()=>darkMode()}>
        <Image
    style={{width:40,
    height:40,
    marginLeft:268,marginTop:-40
  }}
  source={{uri:'https://cdn-icons-png.flaticon.com/128/802/802016.png'}} />
  
        </TouchableNativeFeedback>
            </View>
            
            <View style={styles.fImg}>
                <Image
                style={{width:"100%",height:160,marginTop:15}}
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg'}}/>
            </View>
        <View style={styles.seeAll}>
            <Text style={[styles.text1,{color:theme.textColor}]}>See All</Text>
        </View>
        <View style={styles.matieres}>
       
        <ScrollView horizontal={true} >
            <View style={[styles.matiere , {borderColor:theme.borderColor}]}>
                <Image 
                style={styles.matiertof}
                source={{uri:"https://cdn.the-scientist.com/assets/articleNo/69216/aImg/43641/science-article-o.png"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>Science</Text>
                </View>
            </View>
            <View style={[styles.matieree, {borderColor:theme.borderColor}]}>
            <Image 
                style={styles.matiertof}
                source={{uri:"https://www.myoxfordenglish.es/wp-content/uploads/2020/12/English-for-your-profession-1-1200x717.jpg"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>English</Text>
            </View>
            </View>
            <View style={[styles.matieree, {borderColor:theme.borderColor}]}>
            <Image 
                style={styles.matiertof}
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsyPFSLnN2dzT4c2WptDUQJ3HIigfbKXGwA&usqp=CAU"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>Computer Science</Text>
                </View>
            </View>
            <View style={[styles.matieree, {borderColor:theme.borderColor}]}>
            <Image 
                style={styles.matiertof}
                source={{uri:"https://images.verbling.com/convert/w_1000/https%3A%2F%2Fverbling-user-uploads.s3.amazonaws.com%2F75736031415276259819%2F134fe6d9-35f7-49f7-9088-00d21599e535%2Fweb2_0.jpg"}}
                />
                <View style={[styles.tit,{backgroundColor: theme.backgroundColor}]}>
                <Text style={{color:theme.textColor}}>Arabic</Text>
                </View>
            </View>
            </ScrollView>
        </View>
        <Text style={[styles.text1,{color:theme.textColor}]}>See All</Text>
        <View style={styles.seeAll1}>
            <ScrollView horizontal={true}>
            <View style={[styles.Teachers, {borderColor:theme.borderColor}]}>
                <Image style={{borderWidth:0.6,width:90,height:90,borderRadius:100,backgroundColor:"#fff",marginTop:8,marginLeft:28,borderColor:theme.borderColor}}
                source={{uri:'https://avatars.githubusercontent.com/u/97634240?v=4'}}
                />
                <View style={{marginLeft:15,marginTop:21}}>
                    <Text style={{color:theme.textColor}}>Oubayid ben said</Text>
                    <Text style={{marginLeft:23,color:theme.textColor}}>IT Teacher</Text>
                </View>
            </View>
            <View style={[styles.Teachers1, {borderColor:theme.borderColor}]}>
                <Image style={{borderWidth:0.6,width:90,height:90,borderRadius:100,backgroundColor:"#fff",marginTop:8,marginLeft:28 , borderColor:theme.borderColor}}
                source={{uri:'https://avatars.githubusercontent.com/u/129502701?v=4'}}
                />
                <View style={{marginLeft:15,marginTop:21}}>
                    <Text style={{marginLeft:6,color:theme.textColor}}>Wissem Hajjem</Text>
                    <Text style={{marginLeft:23,color:theme.textColor}}>IT Teacher</Text>
                </View>
            </View>
            <View style={[styles.Teachers1, {borderColor:theme.borderColor}]}>
                <Image style={{borderWidth:0.6,width:90,height:90,borderRadius:100,backgroundColor:"#fff",marginTop:8,marginLeft:28,borderColor:theme.borderColor}}
                source={{uri:'ede'}}
                />
                <View style={{marginLeft:15,marginTop:21}}>
                    <Text style={{color:theme.textColor}}>Khouloud Ouelhazi</Text>
                    <Text style={{marginLeft:8,color:theme.textColor}}>Science Teacher</Text>
                </View>
            </View>
            </ScrollView>
        </View>
        <View style={styles.imgPage}>
         

        </View>
        <View style={{width:250 ,marginTop:20,marginLeft:80}}>
            <Text style={{marginLeft:17,fontSize:10,color:theme.textColor}}>We opened our school in 2022</Text>
            <Text style={{fontSize:25,fontSize:10,color:theme.textColor}}>and we appreciate the efforts made</Text>
            <Text style={{marginLeft:15,fontSize:10,color:theme.textColor}}>by the teachers and the staff</Text>
            <Text style={{fontSize:10,color:theme.textColor}}>to make it one of the highest ranks</Text>
        </View>
        <Text style={{fontSize:25,marginTop:50,marginLeft:-160,color:theme.textColor}}>Sponsors</Text>
        <View style={styles.sponsors}>
            
<Image 
style={{width:140,height:100,marginLeft:160}}
source={{uri:"https://iconape.com/wp-content/png_logo_vector/ooredoo.png"}}
/>
<Image 
style={{width:140,height:50,marginTop:-70}}
source={{uri:"https://www.pngmart.com/files/13/Aladdin-Logo-PNG-Free-Download.png"}}
/>
<Image 
style={{width:100,height:80,marginTop:20,marginLeft:98}}
source={{uri:"https://www.carthageland.com/img/logo-cl-tunis.png"}}
/>

        </View>
        <View style={styles.ob}>
  <Text style={{marginLeft:14,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}} >Tution Fees and Financing Options</Text>
        </View>
        <Text style={{fontSize:15,fontWeight:'bold',marginTop:20}}>Global Mounth</Text>
        <Text style={{fontSize:15,fontWeight:'bold',marginTop:15}}>4000DT</Text>
        <Text style={{marginLeft:-159,fontSize:13,marginTop:15}}> Payment in 3 months</Text>
        <Text style={{marginLeft:159,fontSize:13,marginTop:-14.9}}> Payment in 6 months</Text>
        <View style={styles.ales}>
            <Text style={{marginLeft:38,marginTop:10,color:"white",fontWeight:'bold',fontSize:15}}> 
                1650DT
            </Text>
            <Text style={{marginLeft:37,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                Options
            </Text>
            <Text style={{marginLeft:29,marginTop:8,color:"white",fontSize:13}}>
                Per Month
            </Text>
            <Text style={{marginLeft:44,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                120DT
            </Text><Text style={{marginLeft:44,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                150DT
            </Text>
        </View>
        <View style={styles.ales1}>
            <Text style={{marginLeft:40,marginTop:10,color:"white",fontWeight:'bold',fontSize:15}}> 
                900DT
            </Text>
            <Text style={{marginLeft:37,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                Options
            </Text>
            <Text style={{marginLeft:29,marginTop:8,color:"white",fontSize:13}}>
                Per Month
            </Text>
            <Text style={{marginLeft:44,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                120DT
            </Text><Text style={{marginLeft:44,marginTop:16,color:"white",fontWeight:'bold',fontSize:13}}>
                150DT
            </Text>
        </View>
        <View style={{width:100,height:60}}></View>
        </View>
       
    </ScrollView>
    </View>
  )
}

const styles=StyleSheet.create({
    container: {    flex: 1,
        alignItems: 'center',
        justifyContent: 'center',

      },navPhone:{
        width:"100%",
        height:23,
        backgroundColor:"black"
      },sponsors:{
        width:300,
        height:180,
        // backgroundColor:"red"
      },ob:{
        marginTop:50,
        width:250,
        borderRadius:25,
        height:50,
        backgroundColor:"purple"
      },matiertof:{
        width:"91%",
        marginLeft:7,
        marginTop:7,
        height:80,
        borderRadius:12,
        backgroundColor:'red'
      },tit:{
        width:"99%",marginLeft:1,
        height:41.6,
    alignItems: 'center',
        justifyContent: 'center'

      }
    ,nav:{
        // backgroundColor:"red",
        width:"100%",
        height:45,
        marginTop:17,
        borderBottomWidth:0.2
    },fImg:{
        width:"100%",
        height:180,
        marginTop:5
    },seeAll:{
          
        width:"100%",
        height:40,
        marginTop:17
    },text1:{
        marginLeft:260,
        marginTop:12
    },matiere:{
        width:180,
        height:130,
        
        borderRadius:12,
        borderWidth:0.9,
    },matieres:{
        width:"100%",
        height:150,
       
        
    },matieree:{
        width:180,
        height:130,
        
        borderRadius:12,
        borderWidth:0.9,
        marginLeft:15
        
    },Teachers:{
        height:190,
        borderWidth:0.9,
         width:150,
         borderRadius:15,
        //  backgroundColor:"red"
    },Teachers1:{
        height:190,
        width:150,
        borderRadius:15,
        // backgroundColor:"red",
        marginLeft:20,
        borderWidth:0.9,
    },seeAll1:{
        // backgroundColor:"blue",
        width:"100%",
        height:210,
        marginTop:17
    },imgPage:{
        width:260,
        height:160,
        borderRadius:19,
        marginTop:20,
        backgroundColor:"black"
    } ,ales:{
        width:130,
        height:160,
        marginLeft:-155,
        borderRadius:15,
        marginTop:20,
        backgroundColor:"purple"
    },ales1:{
        width:130,
        height:160,
        marginLeft:155,
        borderRadius:15,
        marginTop:-160,
        backgroundColor:"purple"
    },
    Log: {
        color: "black",
        padding: 10,
        borderRadius: 8,
        
left:"39%",
top:23,        

        fontWeight: "bold", // Adjust the font weight as needed
      },
})

export default Home