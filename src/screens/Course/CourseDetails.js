import React from 'react';
import { View, Text, Image, TouchableOpacity, ScrollView, Button, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import courseCardStyles from './courseCardStyles';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../../Constants';
import OtherCourses from './OtherCourses';
import firebase from '../../firebase/config';

const CourseDetails = ({ route }) => {
  const navigation = useNavigation();
  const formation = route?.params?.formation;

  const handleAddFormation = () => {
    navigation.navigate('PaymentPage');
  };

  const handlePress = () => {
    navigation.navigate('CourseDetails', { formation: formation });
  };

  if (!formation) {
    return (
      <View>
        <Text>No course details available.</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <TouchableOpacity style={courseCardStyles.container} onPress={handlePress}>
        <Image source={{ uri: formation.imageURL }} style={courseCardStyles.imageURL} />
        <View style={styles.courseDetailsContainer}>
          <Text style={styles.titre}>{formation.titre}</Text>
          <Text style={styles.professeur}>{formation.professeur}</Text>
          <Text style={styles.duree}>{formation.duree}</Text>
          <View style={styles.buttonContainer}>
            <Button title="+ Ajouter Formation" onPress={handleAddFormation} />
          </View>
        </View>
      </TouchableOpacity>
     
      <Text style={styles.otherCoursesText}>D'autres Formations:</Text>
      <OtherCourses />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  courseDetailsContainer: {
    padding: 16,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  professeur: {
    fontSize: 16,
    marginBottom: 8,
    color:'gray',
  },
  duree: {
    fontSize: 14,
    marginBottom: 16,
    color:'gray',

  },
  buttonContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: colors.lightGrey,
    width: 185,
    height: 40,
    borderRadius: 30,
    marginHorizontal: 50,
  },
  otherCoursesText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 16,
    textDecorationLine: 'underline', 

  },
});

export default CourseDetails;
