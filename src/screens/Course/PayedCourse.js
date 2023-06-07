import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { IconButton } from 'react-native-paper';
import { Video } from 'expo-av';
import { useFonts } from 'expo-font';
import { firebase, storage } from '../../firebase/config';


const PayedCourse = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoUrl, setVideoUrl] = useState('');
  const [fontsLoaded] = useFonts({
    'Material Design Icons': require('@expo/vector-icons/build/vendor/react-native-vector-icons/Fonts/MaterialCommunityIcons.ttf'),
  });

 
    const fetchVideoUrl = async () => {
      try {
        const storageRef = firebase.storage().ref(); 
        const videoRef = storageRef.child('DevOps In 5 Minutes _ What Is DevOps__ DevOps Explained _ DevOps Tutorial For Beginners _Simplilearn.mp4'); // Remplacez par le chemin vers votre fichier vidéo dans Firebase Cloud Storage
        const url = await videoRef.getDownloadURL();
        setVideoUrl(url);
      } catch (error) {
        console.log('Erreur lors de la récupération de l\'URL de téléchargement de la vidéo:', error);
      }
    };
    
    // Appelez fetchVideoUrl() pour récupérer l'URL de téléchargement de votre vidéo
    fetchVideoUrl();

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

    
      <View style={styles.chapterContainer}>
        <Text style={styles.chapterTitle}>Chapters:</Text>
      { /* <Text style={styles.chapter}>Chapter 1</Text>
        <Text style={styles.chapter}>Chapter 2</Text>
        <Text style={styles.chapter}>Chapter 3</Text>*/}
        {/* Add more chapters as needed */}
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
  chapterContainer: {
    flex: 1,
    padding: 20,
  },
  chapterTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  chapter: {
    fontSize: 16,
    marginBottom: 5,
  },
});

export default PayedCourse;
