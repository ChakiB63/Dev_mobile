import React from 'react';
import { View, Text, Image, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { colors } from '../Constants';
import courseCardStyles from './courseCardStyles';

const CourseCard = ({ course }) => {
  return (
    <TouchableOpacity style={courseCardStyles.container}>
      <Image source={{ uri: course.image }} style={courseCardStyles.image} />
      <View style={courseCardStyles.details}>
        <Text style={courseCardStyles.title}>{course.title}</Text>
        <Text style={courseCardStyles.instructor}>{course.instructor}</Text>
        <Text style={courseCardStyles.duration}>{course.duration}</Text>
        <Text>{course.description}</Text>
        <View style={courseCardStyles.rating}>
          <Ionicons name="star-outline" size={16} color={colors.primary} />
          <Ionicons name="star-outline" size={16} color={colors.primary} />
          <Ionicons name="star-outline" size={16} color={colors.primary} />
          <Ionicons name="star-outline" size={16} color={colors.primary} />
          <Ionicons name="star-outline" size={16} color={colors.primary} />

          <Text style={courseCardStyles.ratingText}>{course.rating} ({course.numRatings})</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
}

export default CourseCard;
