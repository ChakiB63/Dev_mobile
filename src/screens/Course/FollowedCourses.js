import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import CourseCard from './CourseCard';


const FollowedCourses = () => {
  const followedCourses = [
    { id: 1, title: 'Data Visualisation', instructor: 'Najima Daoudi',image: 'https://static.thenounproject.com/png/3728132-200.png',rating: 4.8,description:'Il vous reste que quelques cours pour finaliser cette formation. "43/46 Leçons"' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 1 }}>
        {followedCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ScrollView>
    </View>
  );
};

export default FollowedCourses;
