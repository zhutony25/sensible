// app/frontend/WelcomePage.js
import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

export default function WelcomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Top Section with Logo, Title, and Subtitle */}
      <View style={styles.topSection}>
        <Text style={styles.title}>Sensible</Text>
        <Text style={styles.subtitle}>Short Slogan / Description</Text>
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
    marginTop: 50,
  },
  logo: {
    width: 120,
    height: 120,
    marginBottom: 20,
    borderRadius: 60,
  },
  title: {
    fontSize: 36,
    fontWeight: '300',
    color: '#000000',
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 40, 
  },
  buttonContainer: {
    width: '100%',
    alignItems: 'center',
    paddingBottom: 30, 
  },
  loginButton: {
    backgroundColor: '#4A90E2',
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
    backgroundColor: '#D0E8FF',
    borderRadius: 25,
    paddingVertical: 12,
    width: '80%',
    alignItems: 'center',
  },
  signupButtonText: {
    color: '#4A90E2',
    fontSize: 18,
    fontWeight: '600',
  },
});

