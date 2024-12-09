// app/frontend/DataPage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function DataPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#4A90E2" />
      </TouchableOpacity>

      <Text style={styles.headerText}>Select Foot</Text>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('LeftFootData')}
      >
        <Text style={styles.buttonText}>Left Foot</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('RightFootData')}
      >
        <Text style={styles.buttonText}>Right Foot</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Ionicons name="home-outline" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert("Already on Data Page!")}>
          <Ionicons name="clipboard" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => navigation.navigate('Login')}>
          <Ionicons name="person-outline" size={30} color="#fff" />
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    position: 'absolute',
    top: 50,
    left: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#4A4A4A',
  },
  button: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    marginVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
  },
  navbar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#4A90E2',
    width: '100%',
    paddingVertical: 10,
    marginBottom: -20,
    position: 'absolute',
    bottom: 20
  },
});
