import React from 'react';
import { View, ScrollView, Text} from 'react-native';
import NavigationBar from '../screens/DashboardPage/NavigationBar';
import CourseCard from '../screens/DashboardPage/CourseCard';
import course from '../screens/DashboardPage/course';
import FollowedCourses from './FollowedCourses';
import OtherCourses from './OtherCourses';


const DashboardPage = () => {
  return (
    <View style={{ flex: 1 }}>
      <NavigationBar />
     
      <ScrollView style={{ paddingHorizontal: 16 }}>
      <Text>Mes Formation:</Text>
          {course.map(course => (
            <CourseCard key={course.id} course={course} />
          ))}
   
        <Text>Suivre Votre Formation:</Text>
        <FollowedCourses/>
        <Text>D'autres Formation:</Text>
          <OtherCourses/>
      </ScrollView>
      
    </View>
  
  );

};



export default DashboardPage;
