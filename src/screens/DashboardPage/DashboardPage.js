import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity } from 'react-native';
import NavigationBar from '../DashboardPage/NavigationBar';
import CourseCard from '../Course/CourseCard';
import FollowedCourses from '../Course/FollowedCourses';
import OtherCourses from '../Course/OtherCourses';
import { useNavigation } from '@react-navigation/native';
import { db } from '../../firebase/config';
import 'firebase/firestore';
import TextButton from '../../components/TextButton';

const DashboardPage = ({ onPress }) => {
  const navigation = useNavigation();
  const [courses, setCourses] = useState([]);

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
    // Navigate to the course details screen
    navigation.navigate('CourseDetails', { course: course });
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />

      <ScrollView style={{ paddingHorizontal: 16 }}>
        <Text>Mes Formations:</Text>

        {courses.map((course) => (
          <TouchableOpacity key={course.id} onPress={() => handleCoursePress(course)}>
            <CourseCard course={course} />
          </TouchableOpacity>
        ))}

        <TouchableOpacity>
          <TextButton label="Voir plus" onPress={onPress} />
        </TouchableOpacity>

        <Text>D'autres Formation: </Text>
        <OtherCourses />
        <TouchableOpacity>
          <TextButton label="Voir plus" onPress={onPress} />
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default DashboardPage;
