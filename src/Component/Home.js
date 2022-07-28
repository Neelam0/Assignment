import { View, Text , StyleSheet , Image, FlatList, TouchableOpacity, Alert} from 'react-native'
import React from 'react';
import Iconic from 'react-native-vector-icons/Ionicons';

const Home = () => {

  const images = [
    {
      key : "1",
      name: 'Aviation',
      image: require('../assets/1.jpg')
    },
    {
      key : "2",
      name: 'Banking',
      image: require('../assets/2.jpg')
    },
    {
      key : "3",
      name: 'Education',
      image: require('../assets/3.jpg')
    },
    {
      key : "4",
      name: 'Employer',
      image: require('../assets/4.jpg')
    },
    {
      key : "5",
      name: 'Travel',
      image: require('../assets/5.jpg')
    },
    {
      key : "6",
      name: 'Vehicle',
      image: require('../assets/6.jpg')
    },
  ]

  return (
    <View style = {styles.mainContainer}>
      <View style = {styles.user}>
        <View style = {styles.user1}>
          <View style = {styles.imgStyle}>
            <Image source={require('../assets/user2.jpg')} style = {styles.img} />
          </View>
          <View style = {styles.textStyle}>
            <Text style = {styles.text}>FrontEnd User</Text>
            <Text style = {styles.text}>383233</Text>
          </View>
        </View>
        <View style = {styles.user2}>
          <Text style = {styles.text1}>Face Comapre</Text>
          <View style = {styles.imgStyle}>
            <Image source={require('../assets/user3.png')} style = {styles.img} />
          </View>
        </View>
      </View>

      <View style = {styles.welcome}>
        <Text style = {styles.welcomeText}>Welcome to</Text>
        <Text style = {styles.welcomeText1}>D<Image source={require('../assets/welcome.png')} style = {{width: 90, height: 50}} />T</Text>
      </View>

      <View style = {styles.profile}>
        <TouchableOpacity onPress= {
          ()=>
          {Alert.alert("My profile clicked");}
        }>
        <View style = {styles.profile1}>
          <Iconic name = 'add-circle' size = {20}  style = {{color: '#fff',margin: 5}}/>
          <Text style = {styles.profileTxt}>My Profile</Text>
        </View>
        </TouchableOpacity>
      </View>

      <View style = {styles.fav}>
        <View style = {styles.favInner}>
          <Text style = {styles.favTxt}>My Favourites</Text>
          <FlatList 
            keyExtractor={(item) =>{
              return item.key;
            }}
            // horizontal
            showsHorizontalScrollIndicator = {false}
            numColumns = {3}
            data={images}
            renderItem = {({item}) =>{
              return(
              <View style = {styles.images}>
                <TouchableOpacity>                 
                  <Image source={item.image}  style = {styles.favImg}/>
                  <Text style = {styles.imgText}>{item.name}</Text>
                </TouchableOpacity>
 
              </View>
              )
            }
          }
          />
        </View>
      </View>
    </View>
  )
}


const styles = StyleSheet.create({
    mainContainer:{
        flex:1,
        backgroundColor: '#0278fe',
    },
    user:{
      padding: 15,
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    user1:{
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    user2:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    textStyle:{
      marginLeft: 10,
    },
    text:{
      color: '#fff',
      fontWeight: 'bold',
    },
    text1:{
      color: '#fff',
      marginTop: 8,
      marginRight:10,
      fontSize: 15,
      fontFamily: 'Kanit-Regular'
    },
    imgStyle:{
      width: 50,
      height: 50,
    },
    img:{
      width:40,
      height: 40,
      borderRadius: 50,
      resizeMode: 'cover',
    },
    welcome:{
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems:'center',
      marginVertical: 30
    },
    welcomeText:{
      color: '#fff',
      fontSize: 40,
    },
    welcomeText1:{
      color: '#fff',
      fontSize: 40,
      // margin: 0,
      // padding: 0,
      lineHeight: 0,
    },
    profileTxt:{
      color: '#fff',
    },
    profile:{
      flexDirection: 'row',
      justifyContent: 'center',
    },
    profile1:{
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
      borderWidth: 2,
      borderRadius: 10,
      width: 150,
      height: 40,
      alignSelf: 'center',
      borderColor: '#adb5bd'
    },
    fav:{
      flex: 1,
      marginTop: 20,
      backgroundColor: '#FFF',
      borderTopLeftRadius: 25,
      borderTopRightRadius: 25,
      padding: 15,
    },
    favTxt:{
      fontSize: 20,
      fontWeight: 'bold',
    },
    favInner:{
      marginHorizontal: 20,
    },
    images:{
      marginTop: 15,
    },
    favImg:{
      marginRight : 30,
    },
    imgText:{
      marginTop: 5,
      marginHorizontal: 20,
      fontWeight: 'bold'
    }
})

export default Home