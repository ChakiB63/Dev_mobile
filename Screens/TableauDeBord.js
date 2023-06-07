
import { StyleSheet, View, FlatList } from 'react-native';
import CardTableau from '../Components/CardTableau.js';

import { getFormationTotal, getTransactionTotal, getEtudiantTotal, getProfesseurTotal } from "../config.jsx";
import { useState } from 'react';



export default function TableauDeBord() {
  const [data, setData]=useState(['A']);
  const [refreshing, setRefreshing] = useState(false);


  const [sommeFormation, setSommeFormation]=useState(0);

  function getSommeFormation(){
    getFormationTotal()
  .then((data) => {
    setSommeFormation(data);
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  }

  const [sommeProfesseur, setSommeProfesseur]=useState(0);

  function getSommeProfesseur(){
    getProfesseurTotal()
  .then((data) => {
    setSommeProfesseur(data);
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  }

  const [sommeEtudiant, setSommeEtudiant]=useState(0);

  function getSommeEtudiant(){
    getEtudiantTotal()
  .then((data) => {
    setSommeEtudiant(data);
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  }

  const [sommeTransaction, setSommeTransaction]=useState(0);

  function getSommeTransaction(){
    getTransactionTotal()
  .then((data) => {
    setSommeTransaction(data);
    console.log(data);
  })
  .catch((error) => {
    console.log('Error:', error);
  });
  }
  



  function g() {
    getSommeFormation();
    getSommeEtudiant();
    getSommeProfesseur();
    getSommeTransaction();
  }

  function stat() {
    return(<View>
      <View style={styles.ligne}>
    
    
    <CardTableau iconName="people-circle-outline" info='Etudiants' value={sommeEtudiant}/>
    <CardTableau iconName="school-outline" info='Professeurs' value={sommeProfesseur}/>

    </View>

    <View style={styles.ligne}>
    <CardTableau iconName="library" info='Formations' value={sommeFormation}/>
    <CardTableau iconName="library" info='Ventes' value={sommeTransaction}/>
    

    </View>

    <View style={styles.ligne}>
    <CardTableau iconName="logo-usd" info='Somme des ventes (DHS)' value={'NA'}/>
    

    </View></View>
    );
  }
  return (
    
    <View style={styles.container}>
    <FlatList
    data={data}
    renderItem={stat}
    refreshing={refreshing}
    onRefresh={g}
    style={{paddingTop:30}}
   />

    </View>
    
    
  );
}



const styles = StyleSheet.create({
  

  container: {
    borderColor: '#00FF00',
    //borderWidth: 2,
    flex:1,
  },
  
  ligne:{
    borderColor: '#0000FF',
    //borderWidth: 2,
    flex:2,
    flexDirection:'row',
    alignItems:'center'
  },
  ligneS:{
    borderColor: '#0000FF',
    //borderWidth: 2,
    flex:2,
    flexDirection:'row',
    alignItems:'center'
  },
  



  
});
