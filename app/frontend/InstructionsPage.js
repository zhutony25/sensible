// app/frontend/InstructionsPage.js
import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, FlatList } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Modal, Button } from 'react-native';

export default function InstructionsPage({ navigation }) {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const buttonData = [
    { id: '1', title: 'Right Knee' },
    { id: '2', title: 'Left Knee' },
    { id: '3', title: 'Right Heel' },
    { id: '4', title: 'Left Heel' },
    { id: '5', title: 'Right Big Toe' },
    { id: '6', title: 'Left Big Toe' },
    { id: '7', title: 'Right Small Toe' },
    { id: '8', title: 'Left Small Toe' },
    { id: '9', title: 'Right Outside Ankle' },
    { id: '10', title: 'Left Outside Ankle' },
    { id: '11', title: 'Right Inside Ankle' },
    { id: '12', title: 'Left Inside Ankle' },
  ]

  const toggleItem = (id) => {
    setSelectedItems((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  const renderItem = ({ item }) => {
    const isSelected = selectedItems.includes(item.id);
    return (
      <TouchableOpacity style={styles.listItem} onPress={() => toggleItem(item.id)}>
        <Text style={styles.itemTitle}>{item.title}</Text>
        <Ionicons
          name={isSelected ? 'checkmark-circle' : 'checkmark-circle-outline'}
          size={24}
          color={isSelected ? '#4A90E2' : '#ccc'}
        />
      </TouchableOpacity>
    )
  }

  return (
    <View style={styles.container}>
      {/* Close Icon */}
      <TouchableOpacity
        style={styles.closeIcon}
        onPress={() => navigation.goBack()} // Navigate back to Home Page
      >
        <Ionicons name="close" size={30} color="#000" />
      </TouchableOpacity>

      {/* Header */}
      <Text style={styles.headerText}>Instructions</Text>

      {/* Content */}
      <ScrollView contentContainerStyle={styles.contentContainer}>
        <Text style={styles.subHeaderText}>How to Run the Sensory Test</Text>
        <Text style={styles.instructionText}>
          <Text style={styles.boldText}>1. Preparation:{"\n"}</Text>
          • Sit in a quiet and comfortable environment.{"\n"}
          • Place your phone’s speaker directly on top of the area to be tested (e.g., the top of your foot).{"\n\n"}
          <Text style={styles.boldText}>2. Starting the Test:{"\n"}</Text>
          • Open the app and press the Start Test button.{"\n"}
          • The phone will produce vibrations through its speakers at random intervals.{"\n\n"}
          <Text style={styles.boldText}>3. Responding to Vibrations:{"\n"}</Text>
          • Focus on detecting any vibrations.{"\n"}
          • When you feel a vibration, press the volume button on the side of your phone to confirm.{"\n\n"}
          <Text style={styles.boldText}>4. Important Notes:{"\n"}</Text>
          • The vibrations will not occur continuously or in predictable patterns, so stay attentive.{"\n"}
          • Avoid pressing the button unless you are certain you felt a vibration.{"\n\n"}
          <Text style={styles.boldText}>5. Results and Next Steps:{"\n"}</Text>
          • At the end of the test, your results will be recorded and saved under My Data in the app.{"\n"}
          • From there, you will have the option to securely send your test results to your healthcare provider for review.{"\n\n"}
          For the most accurate results, follow the instructions carefully and perform the test in a distraction-free environment.
        </Text>
      </ScrollView>

      {/* Start Test Button */}
      <TouchableOpacity style={styles.startTestButton} onPress={() => setModalVisible(true)}>
        <Text style={styles.buttonText}>Start Test</Text>
      </TouchableOpacity>
      <Modal visible={modalVisible} animationType="fade" transparent={true}>
        <View style={styles.overlay}>
          <View style={styles.popup}>
            <TouchableOpacity
              style={styles.popupCloseIcon}
              onPress={() => setModalVisible(false)} // Navigate back to Home Page
            >
              <Ionicons name="close" size={30} color="#000" />
            </TouchableOpacity>
            <Text style={styles.popupTitle}>Choose Body Part to Test</Text>
            <FlatList
              data={buttonData}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
            />
            <TouchableOpacity disabled={selectedItems.length == 0} onPress={() => { setModalVisible(false); navigation.navigate("Test") }}
              style={selectedItems.length == 0 ? styles.disabledClosePopupButton : styles.closePopupButton}>
              <Text style={styles.closePopupButtonText}>Begin</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#E3F2FD',
  },
  closeIcon: {
    position: 'absolute',
    top: 20, // Adjusted position to avoid overlapping
    right: 20,
    zIndex: 10, // Ensures the button is always on top
  },
  popupCloseIcon: {
    position: 'absolute',
    top: 15, // Adjusted position to avoid overlapping
    right: 10,
    zIndex: 5, // Ensures the button is always on top
  },
  headerText: {
    fontSize: 28,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 60, // Added space to prevent overlap with the Close Icon
    marginBottom: 20,
    color: '#000',
  },
  contentContainer: {
    paddingHorizontal: 20,
    paddingBottom: 100, // Add padding to prevent overlap with the button
  },
  subHeaderText: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#000',
  },
  instructionText: {
    fontSize: 16,
    lineHeight: 24,
    color: '#333',
  },
  boldText: {
    fontWeight: 'bold',
    color: '#000',
  },
  startTestButton: {
    backgroundColor: '#4A90E2',
    paddingVertical: 15,
    paddingHorizontal: 50,
    borderRadius: 25,
    position: 'absolute',
    bottom: 20,
    alignSelf: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  modalContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 20,
  },
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    width: '80%',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
  },
  popupTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  popupButton: {
    width: '100%',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    backgroundColor: '#f9f9f9',
    marginVertical: 5,
    alignItems: 'flex-start', // Align text to the left
  },
  popupButtonText: {
    fontSize: 16,
    color: '#333',
  },
  closePopupButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: 'green',
    borderRadius: 5,
  },
  disabledClosePopupButton: {
    marginTop: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: '#d3d3d3',
    borderRadius: 5,
  },
  closePopupButtonText: {
    fontSize: 14,
    color: 'white',
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#eee',
    width: '100%',
  },
  itemTitle: {
    fontSize: 16,
    color: '#333',
    textAlign: 'left',
    flex: 1, // Ensures text takes up space and pushes the checkbox to the far right
  },
});
