// app/frontend/WelcomePage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

// get the logo
import SensibleLogo from '../assets/images/sensible_logo.png';

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section */}
      <View style={styles.topSection}>
        <Image source={require('../assets/images/sensible_logo.png')} style={styles.logo} />
        <Text style={styles.title}>
          <Text style={styles.titleHighlight}>SEN</Text>
          <Text style={styles.titleRest}>SIBLE</Text>
        </Text>
      </View>

      {/* Bottom Section with Buttons */}
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.loginButton} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.loginButtonText}>Log In</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.signupButton} onPress={() => navigation.navigate('Signup')}>
          <Text style={styles.signupButtonText}>Sign Up</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  topSection: {
    alignItems: 'center',
    marginTop: 100,
  },
  logo: {
    width: 180, // Adjust width to match the logo's aspect ratio
    height: 180, // Adjust height to match the logo's aspect ratio
    marginBottom: 10,
  },
  title: {
    fontSize: 30,
    fontWeight: '300',
    color: '#000000', 
    marginBottom: 5,
  },
  titleHighlight: {
    fontsize: 50,
    color: '#3c4aa3',
    fontWeight: 'bold', 
  },
  titleRest: {
    fontsize: 50,
    color: '#67bcd6', 
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30, 
  },
  loginButton: {
    backgroundColor: '#3c4aa3',
    borderRadius: 25,
    paddingVertical: 12,
    width: '80%',
    alignItems: 'center',
    marginBottom: 15,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupButton: {
    backgroundColor: '#67bcd6',
    borderRadius: 25,
    paddingVertical: 12,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#000000',
    fontSize: 18,
    fontWeight: '600',
  },
});