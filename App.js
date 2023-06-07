import React from 'react';
import { SafeAreaView, StyleSheet } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import DashboardPage from './src/screens/DashboardPage';
import MyCourses from './src/screens/Course/MyCourses/MyCourses';
import Notification from './src/screens/not/Notification';
import Profile from './src/screens/Profile/Profile';
import CourseDetails from './src/screens/Course/CourseDetails';
import PaymentPage from './src/screens/Payement/PaymentPage';
import PayedCourse from './src/screens/Course/PayedCourse';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const DashboardStack = () => (
  <Stack.Navigator
    screenOptions={{
      headerShown: false,
      gestureEnabled: false,
      cardStyleInterpolator: ({ current: { progress } }) => ({
        cardStyle: {
          opacity: progress,
        },
      }),
    }}
  >
    <Stack.Screen name="Main" component={DashboardPage} />
    <Stack.Screen name="CourseDetails" component={CourseDetails} />
    <Stack.Screen name="PaymentPage" component={PaymentPage} />
    <Stack.Screen name="PayedCourse" component={PayedCourse} />
  </Stack.Navigator>
);

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: ({ focused, color, size }) => {
              let iconName;

              if (route.name === 'Profile') {
                iconName = focused ? 'person' : 'person-outline';
              } else if (route.name === 'My Courses') {
                iconName = focused ? 'book' : 'book-outline';
              } else if (route.name === 'Dashboard') {
                iconName = focused ? 'grid' : 'grid-outline';
              } 
              

              return <Ionicons name={iconName} size={size} color={color} />;
            },
          })}
          tabBarOptions={{
            activeTintColor: 'blue',
            inactiveTintColor: 'gray',
            useNativeDriver: true,
          }}
          detachInactiveScreens={false}
        >
          <Tab.Screen name="Dashboard" component={DashboardStack} />
          <Tab.Screen name="My Courses" component={MyCourses} />
          <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
