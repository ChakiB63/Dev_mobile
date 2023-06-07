import React, { useEffect, useState } from 'react';
import { View, ScrollView, Text, TouchableOpacity , StyleSheet,Image} from 'react-native';
import NavigationBar from '../DashboardPage/NavigationBar';
import CourseCard from '../Course/CourseCard';
import OtherCourses from '../Course/OtherCourses';
import { useNavigation } from '@react-navigation/native';
import { db ,firebase} from '../../firebase/config';
import courseCardStyles from '../Course/courseCardStyles';
import 'firebase/firestore';
import TextButton from '../../components/TextButton';
import CourseDetails from '../Course/CourseDetails';

const DashboardPage = ({ onPress }) => {
  const navigation = useNavigation();
  const [formation, setCourse] = useState(null);

  
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
  const handleCoursePress = (formation) => {
    // Navigate to the course details screen
    navigation.navigate('CourseDetails', { formation: formation });
  };

  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />

      <ScrollView style={{ paddingHorizontal: 16 }}>
        <Text style={styles.Text}>Mes Formations:</Text>

        {formation && (
          <TouchableOpacity
            style={courseCardStyles.container}
            key={formation.id}
            onPress={() => handleCoursePress(formation)}
          >
            <Image source={{ uri: formation.imageURL }} style={courseCardStyles.imageURL} />
            <View style={courseCardStyles.description}>
              <Text style={courseCardStyles.titre}>{formation.titre}</Text>
              <Text style={courseCardStyles.professeur}>{formation.professeur}</Text>
              <Text style={courseCardStyles.duree}>{formation.duree}</Text>
            </View>
          </TouchableOpacity>
        )}
        

        <Text style={styles.Text}>D'autres Formations:</Text>
        <OtherCourses/>
        
      </ScrollView>
    </View>
  );

};
const styles = StyleSheet.create({
Text: {
    fontSize: 17, // Adjust the font size as needed
    fontWeight: 'bold',
    marginBottom: 10,
    textDecorationLine: 'underline', 

  },
});

export default DashboardPage;