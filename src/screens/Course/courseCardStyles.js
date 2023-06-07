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
  imageURL: {
    width: 80,
    height: 50,
    marginRight: 17,
  },
  details: {
    flex: 1,
  },
  titre: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 4,

  },
 professeur: {
    color: '#999999',
    marginBottom: 9,
  },
 
 
  duree: {
    color: '#999999',
    marginTop: 5,
  },
  prix:{
    color: '#999999',
    marginTop: 5,

  },
  description: {
    color: '#999999',
    marginBottom: 9,


  },
 
});

export default courseCardStyles;
