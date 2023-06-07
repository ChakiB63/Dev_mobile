import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { firebase, storage } from '../../firebase/config';
import { db } from '../../firebase/config';


const PayedCourse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [fontsLoaded] = useFonts({
    'Material Design Icons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
  });
  const [courseData, setCourseData] = useState({
    courseName: '',
    instructorName: '',
    description: '',
  });

  useEffect(() => {
    const fetchVideoUrl = async () => {
      try {
        const storageRef = firebase.storage().ref();
        const videoRef = storageRef.child('DevOps In 5 Minutes _ What Is DevOps__ DevOps Explained _ DevOps Tutorial For Beginners _Simplilearn.mp4');
        const url = await videoRef.getDownloadURL();
        setVideoUrl(url);
      } catch (error) {
        console.log('Erreur lors de la récupération de l\'URL de téléchargement de la vidéo:', error);
      }
    };

    // Fetch course data from Firestore and update state
    const fetchCourseData = async () => {
      try {
        const courseDoc = await db.collection('courses').doc('2').get(); // Replace 'your_course_id' with the actual ID of the course document in Firestore
        if (courseDoc.exists) {
          const { title, instructor, description } = courseDoc.data();
          setCourseData({
          title,
            instructor,
            description,
          });
        } else {
          console.log('No course document found');
        }
      } catch (error) {
        console.log('Error fetching course data:', error);
      }
    };

    fetchVideoUrl();
    fetchCourseData();
  }, []);

  const handlePlayVideo = () => {
    setIsPlaying(true);
  };

  if (!fontsLoaded) {
    return null; // or render a loading indicator
  }

  return (
    <View style={styles.container}>
      {/* Video Player */}
      <View style={styles.videoContainer}>
        {isPlaying ? (
          <Video
            source={{ uri: videoUrl }}
            style={styles.videoPlayer}
            useNativeControls
            resizeMode="contain"
          />
        ) : (
          <IconButton
            icon="play"
            color="#FFFFFF"
            size={40}
            onPress={handlePlayVideo}
            style={styles.playButton}
          />
        )}
      </View>

      {/* Course information */}
      <View style={styles.infoContainer}>
        <Text style={styles.title}>{courseData.title}</Text>
        <Text style={styles.instructor}>{courseData.instructor}</Text>
        <Text style={styles.description}>{courseData.description}</Text>
      </View>

    
      
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  videoContainer: {
    height: 250,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
  },
  videoPlayer: {
    flex: 1,
    height: 300, // Adjust the height as needed
    width: '100%', // Adjust the width as needed
  },
  playButton: {
    position: 'absolute',
  },
  infoContainer: {
    paddingHorizontal: 20,
    paddingTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
    color: 'blue', 
    textDecorationLine: 'underline', 

  },
  instructor: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: 'bold',

  },
  description: {
    fontSize: 14,
    marginBottom: 20,
    color: 'gray',
  },
  
  
});

export default PayedCourse;
