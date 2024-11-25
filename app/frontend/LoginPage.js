// app/frontend/LoginPage.js
import React from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

import auth from 'firebase/auth';

export default function LoginPage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Custom Back Arrow and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign In</Text>
      </View>

      {/* Email Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="email" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Enter your email"
          placeholderTextColor="#A0A0A0"
          style={styles.input}
        />
      </View>

      {/* Password Input */}
      <View style={styles.inputContainer}>
        <MaterialIcons name="lock" size={20} color="#A0A0A0" style={styles.icon} />
        <TextInput
          placeholder="Enter your password"
          placeholderTextColor="#A0A0A0"
          secureTextEntry
          style={styles.input}
        />
        <MaterialIcons name="visibility-off" size={20} color="#A0A0A0" style={styles.iconRight} />
      </View>

      {/* Forgot Password */}
      <TouchableOpacity>
        <Text style={styles.forgotPassword}>Forgot password?</Text>
      </TouchableOpacity>

      {/* Sign In Button */}
      <TouchableOpacity
        style={styles.signInButton}
        onPress={() => navigation.navigate('Home')} // Navigate to Home on Sign In
      >
        <Text style={styles.signInButtonText}>Sign In</Text>
      </TouchableOpacity>

      {/* Sign Up Link */}
      <Text style={styles.signupText}>
        Don't have an account?{' '}
        <Text style={styles.signupLink} onPress={() => navigation.navigate('Signup')}>
          Sign up
        </Text>
      </Text>

      {/* OR Divider */}
      <View style={styles.dividerContainer}>
        <View style={styles.divider} />
        <Text style={styles.orText}>OR</Text>
        <View style={styles.divider} />
      </View>

      {/* Social Login Buttons */}
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="google" size={20} color="#DB4437" style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign in with Google</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.socialButton}>
        <FontAwesome name="facebook" size={20} color="#4267B2" style={styles.socialIcon} />
        <Text style={styles.socialButtonText}>Sign in with Facebook</Text>
      </TouchableOpacity>
    </View>
  );
}

const handleLogin = async () => { // UPDATE THis--------------------------------------------------------------
  try {
    const response = await fetch("http://127.0.0.1:5000/auth/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }), // Use the state variables here
    });

    const data = await response.json();
    if (response.ok) {
      console.log("Login successful:", data);
    } else {
      console.error("Login failed:", data.message);
      alert(data.message);
    }
  } catch (error) {
    console.error("Error during login:", error);
    alert("An error occurred. Please try again later.");
  }
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    paddingHorizontal: 20,
    paddingTop: 60,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 30,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 20,
  },
  icon: {
    marginRight: 10,
  },
  iconRight: {
    marginLeft: 'auto',
  },
  input: {
    flex: 1,
    fontSize: 16,
    color: '#000',
  },
  forgotPassword: {
    alignSelf: 'flex-end',
    color: '#4A90E2',
    fontSize: 14,
    marginBottom: 30,
  },
  signInButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  signInButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signupText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 20,
  },
  signupLink: {
    color: '#4A90E2',
    fontWeight: '600',
  },
  dividerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 20,
  },
  divider: {
    flex: 1,
    height: 1,
    backgroundColor: '#E0E0E0',
  },
  orText: {
    marginHorizontal: 10,
    color: '#A0A0A0',
    fontSize: 14,
  },
  socialButton: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingVertical: 12,
    paddingHorizontal: 10,
    marginBottom: 15,
  },
  socialIcon: {
    marginRight: 10,
  },
  socialButtonText: {
    fontSize: 16,
    color: '#000',
  },
});
