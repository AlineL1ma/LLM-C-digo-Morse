import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window'); 

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    paddingHorizontal: 16, 
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#aaa', 
    borderWidth: 1,
    paddingHorizontal: 10,
    marginRight: 10,
    borderRadius: 8, 
    backgroundColor: '#fff', 
    fontSize: Math.max(14, width * 0.04),
  },
});
