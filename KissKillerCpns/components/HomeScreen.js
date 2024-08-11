import React, { useState, useEffect } from 'react';
import { View, Text, Image, Button, StyleSheet, TouchableOpacity } from 'react-native';
import styles from '../styles/HomeScreenStyles';

const HomeScreen = ({ navigation }) => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setFadeIn(true);
    }, 400);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Kiss Killer</Text>
      <Image source={require('../assets/copons.png')} style={styles.logo} />
      <View style={[styles.buttonsContainer, fadeIn && styles.fadeIn]}>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Joc Clàssic')}>
          <Text style={styles.buttonText}>Joc Clàssic</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Clàssic amb Nous Components')}>
          <Text style={styles.buttonText}>Clàssic amb Nous Components</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Inici en Blanc')}>
          <Text style={styles.buttonText}>Inici en Blanc</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default HomeScreen;
