import React, { useEffect, useState } from 'react';
import { View, ScrollView, TouchableOpacity, Text } from 'react-native';
import CourseCard from './CourseCard';
import { useNavigation } from '@react-navigation/native';
import firebase from '../../firebase/config';

const course = () => {
  const [courses, setCourses] = useState([]);
    const navigation = useNavigation();

  useEffect(() => {
    console.log('useEffect is running'); // Add this line

    fetchCourse();
  }, []);

  const fetchCourse = async () => {
    try {
      const coursesSnapshot = await firebase.firestore().collection('courses').get();
      const courseData = coursesSnapshot.docs.map((doc) => doc.data());
      setCourses(courseData);
    } catch (error) {
      console.error('Error fetching courses: ', error);
    }
  };

  const handleCoursePress = (selectedCourse) => {
    navigation.navigate('CourseDetails', { course: selectedCourse });
  };

  return (
    <ScrollView>
    {courses.map((course) =>
        <TouchableOpacity
          key={course.id}
          onPress={() => handleCoursePress(course)}
        >
          <CourseCard course={course} />
        </TouchableOpacity>
      )}
    </ScrollView>
  );
};

export default course;
