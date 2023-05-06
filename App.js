/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */
import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
} from 'react-native';
import course from './src/screens/DashboardPage/course';
import CourseCard from './src/screens/DashboardPage/CourseCard'
import NavigationBar from './src/screens/DashboardPage/NavigationBar';
import Notification from './src/screens/not/Notification';
import profile from './src/screens/Profile/profile';
import SettingsPAge from './src/screens/settingsPage/SettingsPAge';
import DashboardPage from './src/components/DashboardPage';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons'



const Tab = createBottomTabNavigator();


const App =()=> {
  return (
   
    
      <SafeAreaView style={styles.container}>
        <NavigationContainer>
        <Tab.Navigator screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === 'Home') {
              iconName = focused
                ? 'home'
                : 'home-outline';
            } else if (route.name === 'Notifications') {
              iconName = focused ? 'notifications' : 'notifications-outline';
            } else if (route.name === 'Profile') {
              iconName = focused ? 'person' : 'person-outline';
            } else if (route.name === 'Settings') {
              iconName = focused ? 'settings' : 'settings-outline';
            }

            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor:"blue",
          inactiveTintColor: 'gray',
        }}
      > 
          <Tab.Screen name="Home" component={DashboardPage} />
          <Tab.Screen name="Notifications" component={Notification} />
          <Tab.Screen name="Profile" component={profile} />
          <Tab.Screen name="Settings" component={SettingsPAge} />
        </Tab.Navigator>
        </NavigationContainer>
      
    
              
        
      </SafeAreaView>
      
    
            
          
    
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    
  },
  scrollContainer: {
    flex: 1,
    width: '100%',
    paddingVertical: 20,
    paddingHorizontal: 10,
  },
});

export default App;
