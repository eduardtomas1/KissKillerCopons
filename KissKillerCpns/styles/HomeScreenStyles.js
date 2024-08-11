import { StyleSheet } from 'react-native';

const homeStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 30,
    textShadowColor: '#a29bfe',
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },
  logo: {
    width: 110,
    height: 140,
    marginBottom: 40,
  },
  buttonsContainer: {
    opacity: 0,
    transform: [{ translateY: -20 }],
  },
  button: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginVertical: 8,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#a29bfe',
    fontSize: 16,
    fontWeight: 'bold',
  },
  fadeIn: {
    opacity: 1,
    transform: [{ translateY: 0 }],
  },
});

export default homeStyles;
