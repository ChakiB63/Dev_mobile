
import { StyleSheet, View, FlatList  } from 'react-native';
import React, { useState } from 'react';
import CourseCard from '../Components/CourseCard.js';

import { getFormation } from "../config";


export default function Formation() {

  const [formations,setFormations]=useState([]);
  const [refreshing, setRefreshing] = useState(false);
  
  const g=() =>{
    setRefreshing(true);
    console.log('Data1:', formations);
    getFormation()
  .then((data) => {
    setFormations([...data]);
    setRefreshing(false);
    console.log('Data2:', formations);
  })
  .catch((error) => {
    console.log('Error:', error);
    setRefreshing(false);
  });
  };

  return (
    
    <View style={styles.container}>
    <FlatList
    refreshing={refreshing}
    onRefresh={g}
      style={styles.list_container}
      data={formations}
      renderItem={({item}) => <CourseCard  course={item} />}
        />
    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
  },
  list_container: {
    borderColor: '#FF0000',
    //borderWidth: 2,
    margin:'2%', 
    marginVertical:'4%',
    padding:'2%',
    paddingVertical:'0%', 
    height:'94%'
  }

});
