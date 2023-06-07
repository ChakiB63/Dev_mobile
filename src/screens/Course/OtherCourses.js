/*import React, { useState, useEffect } from 'react';
import { View, ScrollView, Text } from 'react-native';
import CourseCard from '../Course/CourseCard';
import firebase from '../../firebase/config';

const OtherCourses = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    fetchCourses();
  }, []);

  const fetchCourses = async () => {
    try {
      const coursesSnapshot = await firebase.firestore().collection('Courses').get();
      const course = coursesSnapshot.docs.map((doc) => doc.data());
      setCourses(course);
    } catch (error) {
      console.error('Error fetching courses:', error);
    }
  };

  if (!courses || courses.length === 0) {
    return (
      <View>
        <Text>No course details available.</Text>
      </View>
    );
  }

  return (
    <View style={{ flex: 1 }}>
      <ScrollView style={{ paddingHorizontal: 1 }}>
        {courses.map((course) => (
          <CourseCard key={course.id} course={course} />
        ))}
      </ScrollView>
    </View>
  );
};

export default OtherCourses;*/
import React, { useState, useEffect } from 'react';
import { StyleSheet,View, ScrollView, Text,TouchableOpacity  } from 'react-native';
import CourseCard from '../Course/CourseCard';
import { firebase ,db} from '../../firebase/config';
import { useNavigation } from '@react-navigation/native';



export default function OtherCourses() {
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
  navigation.navigate('CourseDetails', { course: course });
};

return (
  <ScrollView>
  {courses.map((course) => (
          <TouchableOpacity key={course.id} onPress={() => handleCoursePress(course)}>
            <CourseCard course={course} />
          </TouchableOpacity>
        ))}
  </ScrollView>
);
};