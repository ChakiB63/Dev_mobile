import React from 'react';
import { View, ScrollView, Text } from 'react-native';
import CourseCard from '../screens/DashboardPage/CourseCard';


const OtherCourses = () => {
  const otherCourses = [
    { id: 1, title: 'Data Visualisation', instructor: 'Daoudi',image: 'https://icons.veryicon.com/png/o/system/star-meter-system/data-visualization-1.png',rating: 4.8,duration:'7h30min' },
  ];

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 1 }}>
        {otherCourses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ScrollView>
    </View>
  );
};

export default OtherCourses;
