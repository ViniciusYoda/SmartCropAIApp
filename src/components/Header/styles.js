import { StyleSheet, StatusBar } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: '#0CB93D',
    paddingTop: StatusBar.currentHeight,
    marginTop: 20,
    padding: 28,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    top: 0,
    left: 0,
    width: '100%', 
  },
  title: {
    color: 'white',
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    flex: 1,
  },
});
