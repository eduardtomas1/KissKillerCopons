import React, { useState } from 'react';
import { View, Text, Button, Modal, FlatList, ScrollView, TouchableOpacity } from 'react-native';
import styles from '../styles/JocClassicStyles';

const names = ['Pol', 'Jordi', 'Greta', 'Lluc', 'Pau', 'Jan', 
  'Jana', 'Roger', 'Bernat', 'Julia T.', 'Jorgina', 'Marta', 
  'Cesc', 'Arnau', 'Adria', 'Eric', 'Julia S.', 'Ferran'];

const JocClassicScreen = () => {
  const [assignments, setAssignments] = useState([]);
  const [modalVisible, setModalVisible] = useState(false);

  const generateAssignments = (names) => {
    const shuffleArray = (array) => {
      let shuffled = array.slice();
      for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
      }
      return shuffled;
    };

    let assignments;
    do {
      assignments = shuffleArray(names);
    } while (assignments.some((name, index) => name === names[index]));

    return names.map((name, index) => ({
      name,
      target: assignments[index],
    }));
  };

  const assignTargets = () => {
    const newAssignments = generateAssignments(names);
    setAssignments(newAssignments);
    setModalVisible(true);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Joc Clàssic</Text>
      <TouchableOpacity style={styles.button} onPress={assignTargets}>
        <Text style={styles.buttonText}>Assignar</Text>
      </TouchableOpacity>
      
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalHeader}>A matar</Text>
            <ScrollView style={styles.modalList}>
              {assignments.map((item, index) => (
                <Text key={index} style={styles.modalItem}>{item.name} haura de matar a {item.target}</Text>
              ))}
            </ScrollView>
            <TouchableOpacity style={styles.modalButton} onPress={() => setModalVisible(false)}>
              <Text style={styles.modalButtonText}>Tancar</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};

export default JocClassicScreen;
