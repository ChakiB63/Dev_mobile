import { StyleSheet } from 'react-native';

const courseCardStyles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    shadowColor: '#000000',
    shadowOpacity: 0.2,
    shadowRadius: 2,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    elevation: 2,
  },
  image: {
    width: 80,
    height: 45,
    resizeMode: 'cover',
    borderRadius: 10,
    marginRight: 17,
  },
  details: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
   
  },
  instructor: {
    color: '#999999',
    marginBottom: 9,
  },
 
  rating: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ratingText: {
    marginLeft: 8,
  },
  duration: {
    color: '#999999',
    marginTop: 8,
  },
  prix:{
    color: '#999999',
    marginTop: 8,

  },
  description: {
    color: '#999999',
    marginBottom: 9,


  },
 
});

export default courseCardStyles;