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
  const course = route?.params?.course;

  const handleAddFormation = () => {
    navigation.navigate('PaymentPage');
  };

  const handlePress = () => {
    navigation.navigate('CourseDetails', { course: course });
  };

  if (!course) {
    return (
      <View>
        <Text>No course details available.</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <TouchableOpacity style={courseCardStyles.container} onPress={handlePress}>
        <Image source={{ uri: course.image }} style={courseCardStyles.image} />
        <View style={courseCardStyles.details}>
          <Text style={courseCardStyles.title}>{course.title}</Text>
          <Text style={courseCardStyles.instructor}>{course.instructor}</Text>
          <Text style={courseCardStyles.duration}>{course.duration}</Text>
          <Text>{course.description}</Text> 
          <Text>{course.prix}</Text>         
          <View style={styles.button}>
        <Button title="+ Ajouter Formation" onPress={handleAddFormation}  />
      </View>
        </View>
      </TouchableOpacity>
     
      <Text>D'autres Formations:</Text>
      <OtherCourses />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  button:{
    alignItems: 'center',
    justifyContent:'center',
    backgroundColor:colors.lightGrey,
    width:185,
    height:40,
    borderRadius:30,
    marginHorizontal:60, 
  },
});

export default CourseDetails;
