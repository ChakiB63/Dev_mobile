import React, { useEffect, useState } from 'react';
import { ScrollView,TouchableOpacity } from 'react-native';
import CourseCard from '../CourseCard';
import { db, firebase } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import PayedCourse from '../PayedCourse';


export default function Formation() {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await db.collection('courses').get();
        const courseData = coursesSnapshot.docs.map((doc) => doc.data());
        setCourses(courseData);
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);

const handleCoursePress = (course) => {
  navigation.navigate('PayedCourse');};

return (
  <ScrollView>
  {courses.map((course) => (
          <TouchableOpacity key={course.id} onPress={() => handleCoursePress(course)}>
            <CourseCard course={course} />
          </TouchableOpacity>
        ))}
  </ScrollView>
);};
