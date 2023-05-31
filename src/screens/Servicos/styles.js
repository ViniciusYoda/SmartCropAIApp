import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D3D3D3',
  },
  contentContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  greetingText: {
    fontSize: 24,
    marginBottom: 20,
  },
  serviceText: {
    fontSize: 18,
    marginBottom: 40,
    textAlign: 'center',
  },
  iconsContainer: {
    marginTop: 80,
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
  },
  serviceButton: {
    alignItems: 'center',
  },
  serviceIcon: {
    marginBottom: 10,
  },
  serviceLabel: {
    fontSize: 16,
  },
});
