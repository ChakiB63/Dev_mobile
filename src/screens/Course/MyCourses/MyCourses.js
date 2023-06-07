/*import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import CourseCard from '../CourseCard';
import { db, firebase } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import PayedCourse from '../PayedCourse';
import courseCardStyles from '../courseCardStyles';

export default function Formation(course) {
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
    navigation.navigate('PayedCourse', { course });
  };

  return (
    <ScrollView>
      {courses.map((course) => (
        <TouchableOpacity key={course.id} onPress={() => handleCoursePress(course)}>
          <View style={courseCardStyles.container}>
            <Image source={{ uri: course.image }} style={courseCardStyles.image} />
            <View style={courseCardStyles.details}>
              <Text style={courseCardStyles.tittre}>{course.tittre}</Text>
              <Text style={courseCardStyles.professeur}>{course.professeur}</Text>
              <Text style={courseCardStyles.duree}>{course.duree}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}*/
/*
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import CourseCard from '../CourseCard';
import { db, firebase } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import PayedCourse from '../PayedCourse';
import courseCardStyles from '../courseCardStyles';

export default function MyCourses() {
  const [courses, setCourses] = useState([]);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const coursesSnapshot = await firebase.database().ref('formation').once('value');
        const courseData = coursesSnapshot.val();
        if (courseData) {
          const courseList = Object.values(courseData);
          setCourses(courseList);
        }
      } catch (error) {
        console.error('Error fetching courses: ', error);
      }
    };

    fetchCourses();
  }, []);

  const handleCoursePress = (course) => {
    navigation.navigate('PayedCourse', { course });
  };

  return (
    <ScrollView>
      {courses.map((formation) => (
        <TouchableOpacity key={formation.id} onPress={() => handleCoursePress(formation)}>
          <View style={courseCardStyles.container}>
            <Image source={{ uri: formation.imageURL }} style={courseCardStyles.imageURL} />
            <View style={courseCardStyles.description}>
              <Text style={courseCardStyles.titre}>{formation.titre}</Text>
              <Text style={courseCardStyles.professeur}>{formation.professeur}</Text>
              <Text style={courseCardStyles.duree}>{formation.duree}</Text>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}*/
import React, { useEffect, useState } from 'react';
import { ScrollView, TouchableOpacity, Image, View, Text } from 'react-native';
import CourseCard from '../CourseCard';
import { db, firebase } from '../../../firebase/config';
import { useNavigation } from '@react-navigation/native';
import PayedCourse from '../PayedCourse';
import courseCardStyles from '../courseCardStyles';

export default function Formation() {
  const [formation, setCourse] = useState(null);
  const navigation = useNavigation();

  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseSnapshot = await firebase.database().ref('formation/-NWY_1QJTbQMObmVv8Lo').once('value');
        const courseData = courseSnapshot.val();
        if (courseData) {
          setCourse(courseData);
        }
      } catch (error) {
        console.error('Error fetching course: ', error);
      }
    };

    fetchCourse();
  }, []);

  const handleCoursePress = () => {
    navigation.navigate('PayedCourse', { formation });
  };

  if (!formation) {
    return (
      <View>
        <Text>No course available.</Text>
      </View>
    );
  }

  return (
    <ScrollView>
      <TouchableOpacity onPress={handleCoursePress}>
        <View style={courseCardStyles.container}>
          <Image source={{ uri: formation.imageURL }} style={courseCardStyles.imageURL} />
          <View style={courseCardStyles.description}>
            <Text style={courseCardStyles.titre}>{formation.titre}</Text>
            <Text style={courseCardStyles.professeur}>{formation.professeur}</Text>
            <Text style={courseCardStyles.duree}>{formation.duree}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </ScrollView>
  );
}

