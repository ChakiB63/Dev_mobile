/*
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
};*/

import React, { useState, useEffect } from 'react';
import { StyleSheet, View, ScrollView, Text, TouchableOpacity } from 'react-native';
import CourseCard from '../Course/CourseCard';
import { firebase } from '../../firebase/config';
import { useNavigation } from '@react-navigation/native';

export default function OtherCourses() {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await firebase.database().ref('formation').once('value');
        const courseData = coursesSnapshot.val();
        if (courseData) {
          const courseList = [];
          Object.values(courseData).forEach((formation) => {
            if (formation.titre !== 'DEVOPS') {
              courseList.push(formation);
            }
          });
          setCourses(courseList);
        }
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
      {courses.map((formation) => (
        <TouchableOpacity key={formation.id} onPress={() => handleCoursePress(formation)}>
          <CourseCard formation={formation} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}