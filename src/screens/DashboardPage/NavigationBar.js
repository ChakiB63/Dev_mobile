import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../Constants';

const NavigationBar = ({ onSearch }) => {
  const [searchText, setSearchText] = useState('');



  return (
    <View style={styles.container}>
      <Text style={styles.text}>ESI-Learning</Text>
      
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: colors.lightblue,
    padding: 16,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 5,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.white,
    textAlign: 'center',
    flex: 1, 
  },
};


export default NavigationBar;
