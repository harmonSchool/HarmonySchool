import {StyleSheet, Text , View , TextInput ,Button, Image ,ScrollView,Dimensions, TouchableNativeFeedback  } from "react-native"
import Video from 'react-native-video'
import {lightTheme, darkTheme} from '../../Theme/Theme'
import { useContext,useEffect,useState  } from "react";
import { MyContext } from "../../useContext/useContext";
import { SafeAreaView } from "react-native-safe-area-context";
import Adress from '../IP'
import axios from "axios";
const Home = ({navigation}) => {
    const {height,width}=Dimensions.get('window')
    const { isDarkMode,setMode} = useContext(MyContext);
    const theme = isDarkMode ? darkTheme : lightTheme;
    const darkMode=()=>{
        setMode(!isDarkMode)
      }
      const [data,setData]=useState([])
      useEffect(()=>{
        axios.get(`http://${Adress}/teacher/get`).then((res)=>{
                  setData(res.data)
              console.log(data);
              }).catch((err)=>{
                  console.log(err);
              })
          },[])

  
  return (
    <SafeAreaView style={{backgroundColor:"black"}}>
    <View  key={"hello"} style={{backgroundColor: theme.backgroundColor}}>
    <ScrollView>
        <View style={[styles.container,{backgroundColor: theme.backgroundColor}]}>
            <View style={[styles.nav, {borderColor:theme.borderColor}]}>
            <Image
    style={{width:40,
    height:40,
    left:8,top:-15,borderRadius:100
  }}
  source={{uri:'https://img.freepik.com/premium-vector/green-paper-cutout-plant-with-two-leaves-it_870273-24.jpg?w=2000'}} />
            <TouchableNativeFeedback onPress={()=>navigation.navigate('Login')}>
            <View style={{alignItems: 'center',justifyContent: 'center',height:"50%",width:"35%",borderRadius:8,top:"-67%",left:"61%"  ,backgroundColor:"#1FA609"}}>
            <Text style={{color:"white"}}>Connection</Text>
            </View>
            </TouchableNativeFeedback>
            </View>
            <View style={styles.fImg}>
                <Image
                style={{width:"100%",height:"100%",marginTop:-2}}
                source={{uri:'https://upload.wikimedia.org/wikipedia/commons/thumb/3/39/Hibbing_High_School_2014.jpg/1200px-Hibbing_High_School_2014.jpg'}}/>
            </View>
        <View style={styles.seeAll}>
            <Text style={[styles.text1,{color:theme.textColor}]}>See All</Text>
        </View>
        <View style={styles.matieres}>
        <ScrollView horizontal={true} >
            <View style={[styles.matiere , {borderColor:"#1FA609"}]}>
                <Image 
                style={styles.matiertof}
                source={{uri:"https://cdn.the-scientist.com/assets/articleNo/69216/aImg/43641/science-article-o.png"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>Science</Text>
                </View>
            </View>
            <View style={[styles.matieree, {borderColor:"#1FA609"}]}>
            <Image 
                style={styles.matiertof}
                source={{uri:"https://www.myoxfordenglish.es/wp-content/uploads/2020/12/English-for-your-profession-1-1200x717.jpg"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>English</Text>
            </View>
            </View>
            <View style={[styles.matieree, {borderColor:"#1FA609"}]}>
            <Image 
                style={styles.matiertof}
                source={{uri:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRKsyPFSLnN2dzT4c2WptDUQJ3HIigfbKXGwA&usqp=CAU"}}
                />
                <View style={styles.tit}>
                <Text style={{color:theme.textColor}}>Computer Science</Text>
                </View>
            </View>
            <View style={[styles.matieree, {borderColor:"#1FA609"}]}>
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
        <Text style={[styles.text1,{color:theme.textColor}]} >See All</Text>
        <View style={styles.seeAll1}>
            <ScrollView horizontal={true}>
                {data.map((e,i)=>{
                  return(
<View key={i} style={[styles.Teachers, {borderColor:"#1FA609"}]}>
                <Image style={{borderWidth:1.4,width:90,height:90,borderRadius:100,backgroundColor:"#fff",marginTop:8,marginLeft:28,borderColor:"#1FA609"}}
                source={{uri:'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxQHBhIRBxIOExAQEREVFxYVDRcVExIVGBIWFhUSFRUYHSggGh0lGxcVLTEhJSkrLi4uFx8zODMsNygtLisBCgoKDQ0NFQ4PEjEZFRkrKysrLTctLSsrKzctNysrLSsrNy0tKysrKy0rLSsrKysrKysrKystLSsrKysrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAAAwQFBgIBB//EADUQAQABAgMDCQcEAwEAAAAAAAABAgMEBRESITETQVFhcYGhscEUIjI0kdHwQlKS4SRy8SP/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/xAAWEQEBAQAAAAAAAAAAAAAAAAAAARH/2gAMAwEAAhEDEQA/AP0wBpAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAHqiiblWlETMg8vsRrOkcV2jLKqvjmmPGWjh8NTh6fcjf088mjMtZdXX8WlPbx+kJ4yr91U/xaQmqzpyqOaqf4o68rqj4KontjRqhowbuErtfHTOnTG+EDpVTE4Gm9GtO6rp6e2DUxij3dtTZr0uRv/N8PCgAAAAAAAAAAAAAAAAAA3MDh+Qsxr8U75+zHw9O3iKY6aodClABFAAAAAAQYzDxiLWnPHCWFMaTpPGHSMjNbWxfiqP1ecfkLBRAVAAAAAAAAAAAAAAAAFnL41xlPf5S3GHlvzlPf5S3EpABFAAAAAAFLNaNrC6/tmPt6rqtmM/4dWvV5wDDAaQAAAAAAAAAAAAAAABZy75ynv8pbjCwE6Yynt9JbqVQBAAAAAAAYmZVTOLmJmdI07t0Ntg46dcZV2+iwQAKgAAAAAAAAAAAAAAACfBRPtNMxE7qo5m8hwdGxhqYp6In6pkqgCAAAAAAAwMXExiatqJjWqebrb6pmdG1hJmeMaTH1WDFAVAAAAAAAAAAAAAAAAG5l9e3hKerd9Flm5Pc3VUz2+k+jSZqgAAAAAAAClm1ezhtP3THhv+y6yc2ubV6KY/THjKwUAFQAAAAAAAAAAAAAAABJh702LsVU/wDYbeFv+0WdqI047tWA08nubqqZ7fSfQo0gGVAAAAAAQYvEez2tdNd+nFh3bk3LkzVxmWhnFe+mmOufSPVmtRAAAAAAAAAAAAAAAAAABNhL3IYiJnhwnsQgOlidY3CllVya7GlX6Z0hdZUAAAABWzGuaMJOzz6R9QZWMu8tiZmOHCOyEANIAAAAAAAAAAAAAAAAAAAA2MpjTDT11T5RC6rZfTsYOnr1n6zqssqAAAAK2YxtYOru84WUeIp27FURz0zHgDngGkAAAAAAAAAAAAAAAAAAHqinbriKeMzoUUzXVpREzLVwGC5Gdq78XkC7TGzTERzQ+gyoAAAAADn8Vb5LEVR1+E8ETbx2E9op1p3VRw6+qWPctzaq0uRMS1EeAAAAAAAAAAAAAAB9iNqdKd8r2Hy2a997dHRz/wBAo007c6URMz1L+Hyyat9+dI6I4tGzZps06W4iPOe9ImmI7VmmzTpbiISAigAAAAAAADzctxcp0riJh6AZmIyznsT3T6Sz7lubdWlyJiXRvFy3F2nS5ETC6mOdGjiMs034ee6fSVCuiaKtK4mJ61HkAAAAAAH2N87gfFvC4Gq9vq92nxnshbwWA2I2r++ejmj+19NENjD02I/847+ee9MCKAAAAAAAAAAAAAAAAI71mm9TpciJ/OlIAyMVl8299r3o8Y+6i6VTxmBi/GtG6rwntXUYw9VUzRVMVRpMPKgAA0sqw2vv1933Z1MbVURHGZ0dFbo5O3EU8IjQo9AMqAAAAAAAAAAAAAAAAAAAAAAo5nh9u3t08aePXDIdLMaxvc9ft8leqp6J8OZYiMBRLhfmaP8AanzdACUgAigAAAAAAAAAAAAAAAAAAAAADEzL5yru8oBYKoCsv//Z'}}
                />
                <View style={{alignItems: 'center',
        justifyContent: 'center',marginTop:21}}>
                    <Text style={{color:theme.textColor}}>Mr.{e.name}</Text>
                    <Text style={{color:theme.textColor}}>IT Teacher</Text>
                </View>
            </View>
                  )  
                })}
            
            </ScrollView>
        </View>
        <View style={{ 
            width:width - 30,
            height:width -160,
            borderRadius:width/16,
            marginTop:20}}>
         
<Image style={{width:"100%",height:"100%",borderRadius:15}} source={{uri:"https://www.unicefusa.org/sites/default/files/2023-02/UNI122739.jpg"}}/>
        </View>
        <View style={{width:260 ,marginTop:20,marginLeft:20}}>
            <Text style={{top:-4,marginLeft:-15,fontSize:12,marginTop:20,color:theme.textColor}}>We opened our school in 2022 and appreciate</Text>
            <Text style={{marginLeft:3,fontSize:25,fontSize:12,color:theme.textColor}}>   the efforts made by the teachers and</Text>
            <Text style={{top:2,marginLeft:33,fontSize:12,color:theme.textColor}}>    the staff to make it one of</Text>
            <Text style={{top:4,marginLeft:64,fontSize:12,color:theme.textColor}}>   the highest ranks</Text>
        </View>
        <Text style={{fontSize:25,marginLeft:width - 500,marginTop:50,color:theme.textColor}}>Sponsors</Text>
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
    </SafeAreaView>
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
        backgroundColor:"#1FA609"
      },matiertof:{
        width:"91%",
        marginLeft:7,
        marginTop:7,
        height:80,
        borderRadius:12,
        backgroundColor:'red'
      },tit:{
        width:"95%",marginLeft:5,
        height:40,
    alignItems: 'center',
        justifyContent: 'center'

      }
    ,nav:{
        // backgroundColor:"red",
        width:"100%",
        height:"5%",
        top:"2.5%",

    },fImg:{
        width:"100%",
        height:200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },seeAll:{
          
        width:"100%",
        height:40,
        marginTop:17
    },text1:{
        left:"80%",
        top:"20%"
    },matiere:{
        width:180,
        height:130,
        backgroundColor:"white",
        
        borderRadius:12,
        borderWidth:1,
    },matieres:{
        width:"100%",
        height:150,
       
        
    },matieree:{
        width:180,
        height:130,
        
        borderRadius:12,
        borderWidth:1,
        marginLeft:15
        
    },Teachers:{
        height:190,
        borderWidth:0.8,
         width:150,
         borderRadius:15,
         marginLeft:20
        //  backgroundColor:"red"
    },Teachers1:{
        height:190,
        width:150,
        borderRadius:15,
        // backgroundColor:"red",
        marginLeft:20,
        borderWidth:0.6
    },seeAll1:{
        // backgroundColor:"blue",
        width:"100%",
        height:210,
        marginTop:17
    },ales:{
        width:130,
        height:160,
        marginLeft:-155,
        borderRadius:15,
        marginTop:20,
        backgroundColor:"#1FA609"
    },ales1:{
        width:130,
        height:160,
        marginLeft:155,
        borderRadius:15,
        marginTop:-160,
        backgroundColor:"#1FA609"
    }
})
  

export default Home