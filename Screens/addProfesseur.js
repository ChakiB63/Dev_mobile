import { View , Text , TouchableOpacity, TextInput,StyleSheet, Alert} from "react-native";
import { addProfesseur } from "../config";
import React, {useState} from 'react';

const Registration = () => {
   
    //const [role, setRole] = useState('');
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [firstname, setFirstName] = useState('')
    const [lastname, setLastName] = useState('')
    const [sex, setSex] = useState('');
  
    
    return (
      <View style={styles.container} behavior="padding" enabled>
        <Text style={{fontWeight:'bold','fontSize':23 }}>
          Formulaire d'ajout:
        </Text>
        <View style={{marginTop:20, width:'70%', alignSelf:'center'}} >
        <TextInput
          style={styles.textInput}
          placeholder="First Name"
          onChangeText={text => setFirstName(text)}
          autoCorrect={false}
        />
        <TextInput
          style={styles.textInput}
          placeholder="Last Name"
          onChangeText={text => setLastName(text)}
          autoCorrect={false}
        />

        <TextInput
          style={styles.textInput}
          placeholder="Sex(M ou F)"
          onChangeText={text => setSex(text)}
          autoCorrect={false}
        />

        <TextInput
          style={styles.textInput}
          value={email}
          placeholder=" email"
          onChangeText={text => setEmail(text)}
          autoCorrect={false}
          keyboardType="email-address"
        />
        
        <TextInput
          style={styles.textInput}
          value={password}
          placeholder=" password"
          onChangeText={password => setPassword(password)}
          secureTextEntry={true}
          autoCorrect={false}
        />
        
        </View>
        <TouchableOpacity
        onPress={()=>{addProfesseur(firstname,lastname,sex,email,password);
        Alert.alert('Professeur ajouté avec succès.')
        }}
        style={styles.button}
        >
        <Text style={{fontWeight:'bold', fontSize:22}}>Ajouter Professeur</Text>
        </TouchableOpacity>
      </View>




    )
   }
  
export default Registration

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingTop:16,
  },
  textInput: {
    paddingTop: 20,
    paddingBottom: 10,
    width: '100%',
    fontSize: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#000',
    marginBottom: 10,
    textAlign: 'center',
  },
  image: {
    marginBottom: 0,
    width: 160, height: 150
  },
  button:{
    marginTop:50,
    height:50,
    width:250,
    backgroundColor:'#026efd',
    alignItems:"center",
    justifyContent:'center',
    borderRadius:50,
  
  }
});

