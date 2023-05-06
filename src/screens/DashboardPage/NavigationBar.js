import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Constants';

const NavigationBar = () => {
  return (
    <View style={styles.container}>
      <Ionicons name="menu-outline" size={28} color={colors.primary} />
      <Text style={styles.logo}>ESi-Learning</Text>
      <TextInput
        placeholder="Search courses"
        style={styles.searchBar}
        placeholderTextColor={colors.grey}
      />
      <TouchableOpacity>
        <Ionicons name="person-outline" size={28} color={colors.primary} />
      </TouchableOpacity>
    </View>
  );
};

const styles = {
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: colors.white,
    padding: 16,
    borderBottomColor: colors.lightGrey,
    borderBottomWidth: 1,
  },
  logo: {
    fontWeight: 'bold',
    fontSize: 20,
    color: colors.primary,
  },
  searchBar: {
    flex: 1,
    height: 40,
    borderRadius: 20,
    backgroundColor: colors.lightGrey,
    paddingHorizontal: 16,
    marginHorizontal: 'auto',
  },
};

export default NavigationBar;
