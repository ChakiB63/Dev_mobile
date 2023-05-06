import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import CourseCard from '../screens/DashboardPage/CourseCard';


const FollowedCourses = () => {
  const followedCourses = [
    { id: 1, title: 'Introduction to Devops', instructor: 'Hnida Meriem',image: 'https://www.adimeo.com/hubfs/schema-devops.png',rating: 4.8,description:'Il vous reste que quelques cours pour finaliser cette formation. "43/46 Leçons"' },
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
