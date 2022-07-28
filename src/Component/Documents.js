import { View, Text, Image, StyleSheet, FlatList } from 'react-native'
import React, { useEffect, useState } from 'react'
import axios from 'axios';

const Documents = () => {

  const [docs, setDocs] = useState([]);

  // useEffect(() => {
  //   async function getData() {
  //     const res = await axios.get(
  //       'https://reqres.in/api/users'
  //     );
  //   }
  // getData();
  // })

  useEffect(() =>{
    axios.get('https://reqres.in/api/users')
      .then((response) =>{
        console.log(response);
        setDocs(response.data.data)
      })
      .catch(error => console.log(error))
  },[])

    // const fetchData = () =>{
    //   axios.get('https://reqres.in/api/users')
    //   .then((response) =>{
    //     console.log(response);
    //     setDocs(response.data)
    //   })
    // }

  return (

    // <FlatList 
    // data={docs}
    // renderItem = {({item}) =>{
    //   return(
    //     <View style = {styles.card}>
    //       <View>
    //         <Image source={{uri: item.avatar}} />
    //       </View>
    //       <View>
    //         <Text>id : {item.id}</Text>
    //         <Text>id : {item.email}</Text>
    //         <Text>id : {item.first_name}</Text>
    //         <Text>id : {item.last_name}</Text>
    //       </View>
    //     </View>
    //   )
    // }}
    // />
    <View style = {styles.mainContainer}>
      <Text style = {styles.header}>List Of Developers</Text>
      <FlatList
      keyExtractor={(item) =>{
        return item.id;
      }}
      // numColumns={2}
      // horizontal
      // showsHorizontalScrollIndicator = {false}
      showsVerticalScrollIndicator = {false}
      contentContainerStyle = {{paddingVertical: 20}}
      data={docs}
      renderItem = {({item}) =>{
        return(
          <View style = {styles.card}>
            <View style = {styles.imgContainer}>
              <Image
              style = {styles.imgStyle}
              resizeMode = "cover"
              source = {{uri: item.avatar}}
              />
            </View>
            <View style = {styles.nameStyle}>
              {/* <Text style = {styles.txt}>{item.id}</Text> */}
              
              <Text style = {styles.txt}>{item.first_name+ ' ' + item.last_name}</Text>
              {/* <Text style = {styles.txt}>{item.last_name}</Text> */}
              <Text style = {styles.txt}>{item.email}</Text>
            </View>
          </View>
        )
      }}
      />
    </View>
  )
}


const styles = StyleSheet.create({
  mainContainer:{
    paddingTop: 50,
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header:{
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center',
    marginBottom: 15,
    // color: 'white',
},
  card:{
    // flex: 1,
    // backgroundColor: 'yellow',
    width: 320,
    height: 120,
    backgroundColor: '#f8f7ff',
    borderRadius: 25,
    flexDirection: 'row',
    // justifyContent: 'space-between',
    alignItems: 'flex-start',
    padding: 10,
    marginBottom: 20,
    shadowOffset: {width: 10, height: 10},
    shadowColor: '#000',
    shadowOpacity:0.25,  
    shadowRadius: 3.5,
    elevation: 6
  },
  imgContainer:{
    width: '30%',
    height: 60,
    borderRadius: 50
    // marginTop: 20
},
  imgStyle:{
    width: 100,
    height: 90,
    borderRadius: 50,
    alignItems: 'center'
},
  nameStyle:{
    // marginLeft: 20
    // justifyContent: 'center',
    // alignContent: 'center'
    // alignItems: 'center'
    width: '70%',
    alignSelf: 'center',
    marginLeft: 30,
  },
  txt:{
    fontWeight: 'bold',
    lineHeight: 30
  },
})

export default Documents