import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Math.max(width * 0.05, 20), 
    backgroundColor: '#f8f9fa', 
  },
  title: {
    fontSize: Math.min(width * 0.06, 28),
    fontWeight: 'bold',
    marginBottom: Math.max(height * 0.02, 15), 
    color: '#333', 
  },
});
