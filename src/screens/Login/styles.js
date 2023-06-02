import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D3D3D3',
    padding: 20,
  },
  logoContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 40,
  },
  logo: {
    width: 188,
    height: 188,
  },
  inputContainer: {
    width: '100%',
    marginBottom: 20,
  },
  input: {
    width: '100%',
    height: 40,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    borderBottomWidth: 3,
    borderBottomColor: '#0CB93D',
  },
  createAccountText: {
    alignSelf: 'flex-start',
    marginTop: -30,
    fontSize: 14,
    color: 'gray',
  },
});
