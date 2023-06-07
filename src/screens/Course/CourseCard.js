import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import courseCardStyles from './courseCardStyles';

const CourseCard = ({ course }) => {
  const navigation = useNavigation();

  const handlePress = () => {
    // Navigate to the course details screen
    navigation.navigate('CourseDetails', { course });
  };

  if (!course) {
    // Handle case when course object is undefined or null
    return null;
  }

  const { image, title, instructor, duration, description ,prix} = course;

  return (
    <TouchableOpacity style={courseCardStyles.container} onPress={handlePress}>
      <Image source={{ uri: image }} style={courseCardStyles.image} />
      <View style={courseCardStyles.details}>
        <Text style={courseCardStyles.title}>{title}</Text>
        <Text style={courseCardStyles.instructor}>{instructor}</Text>
        <Text style={courseCardStyles.duration}>{duration}</Text>
        <Text style={courseCardStyles.prix}>{prix}</Text>
        <Text>{description}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default CourseCard;
