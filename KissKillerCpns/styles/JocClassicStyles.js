import { StyleSheet, Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

const jocClassicStyles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1b1b1b',
    padding: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#ffffff',
    marginBottom: 20,
    textShadowColor: '#a29bfe',
    textShadowRadius: 10,
    textShadowOffset: { width: 2, height: 2 },
  },
  button: {
    backgroundColor: '#3a3a3a',
    paddingVertical: 12,
    paddingHorizontal: 24,
    marginBottom: 20,
    borderRadius: 4,
    alignItems: 'center',
  },
  buttonText: {
    color: '#a29bfe',
    fontSize: 16,
    fontWeight: 'bold',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    padding: 20,
  },
  modalContent: {
    width: width * 0.8,
    backgroundColor: '#333',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  modalItem: {
    fontSize: 18,
    color: '#ffffff',
    marginBottom: 10,
    textAlign: 'center',
  },
  modalButton: {
    backgroundColor: '#a29bfe',
    borderRadius: 4,
    padding: 10,
    marginTop: 20,
    alignSelf: 'stretch',
    alignItems: 'center',
  },
  modalButtonText: {
    color: '#ffffff',
    fontWeight: 'bold',
    fontSize: 16,
  },
  modalHeader: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#a29bfe',
    marginBottom: 20,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowRadius: 5,
    textShadowOffset: { width: 1, height: 1 },
  },
});

export default jocClassicStyles;
