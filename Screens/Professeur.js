
import { StyleSheet, View, FlatList,  } from 'react-native';
import CardProfesseur from '../Components/CardProfesseur.js';
import React, { useState } from 'react';

import { getProfesseur } from "../config";

export default function Professeur() {

const [professeurs,setProfesseurs]=useState([]);
const [refreshing, setRefreshing] = useState(false);

const g=() =>{
  setRefreshing(true);
  getProfesseur()
.then((data) => {
  setProfesseurs([...data]);
  setRefreshing(false);
})
.catch((error) => {
  console.log('Error:', error);
  setRefreshing(false);
});
};
  return (// total des formation de chaque prof et de ses ventes
    
    <View style={styles.container}>

    <FlatList
    refreshing={refreshing}
    onRefresh={g}
      style={styles.list_container}
      data={professeurs}
      renderItem={({item}) => {
        const nb_formation=item.formation? Object.keys(item.formation).length:0;
        //console.log(nb_formation);
      return(
        <CardProfesseur 
      name={item.firstName+' '+item.lastName}
      sex={item.sex}
      nb_formation={nb_formation}
      nb_transaction={'NA'}
       />
      )
      }
      }
        />

    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
    flex:1
  },
  list_container: {
    borderColor: '#FF0000',
    //borderWidth: 2,
    //borderRadius:15,
    margin:'2%', 
    marginVertical:'4%',
    padding:'0%',
    paddingVertical:'0%', 
    flex:1
  }




  
});
