// app/frontend/SignupPage.js
import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, StyleSheet } from 'react-native';
import { FontAwesome, MaterialIcons } from '@expo/vector-icons';

export default function SignupPage({ navigation }) {
  const [isSelected, setSelection] = useState(false);

  return (
    <View style={styles.container}>
      {/* Custom Back Arrow and Title */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <MaterialIcons name="arrow-back-ios" size={24} color="#000" />
        </TouchableOpacity>
        <Text style={styles.title}>Sign Up</Text>
      </View>

      {/* Input Fields */}
      <View style={styles.form}>
        {/* Name Input */}
        <View style={styles.inputContainer}>
          <FontAwesome name="user" size={20} color="#A0A0A0" style={styles.icon} />
          <TextInput
            placeholder="Enter your name"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
        </View>

        {/* Date of Birth Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="calendar-today" size={20} color="#A0A0A0" style={styles.icon} />
          <TextInput
            placeholder="Enter your date of birth"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
        </View>

        {/* Phone Number Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="phone" size={20} color="#A0A0A0" style={styles.icon} />
          <TextInput
            placeholder="Enter your phone number"
            placeholderTextColor="#A0A0A0"
            style={styles.input}
          />
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

        {/* Confirm Password Input */}
        <View style={styles.inputContainer}>
          <MaterialIcons name="lock" size={20} color="#A0A0A0" style={styles.icon} />
          <TextInput
            placeholder="Confirm password"
            placeholderTextColor="#A0A0A0"
            secureTextEntry
            style={styles.input}
          />
          <MaterialIcons name="visibility-off" size={20} color="#A0A0A0" style={styles.iconRight} />
        </View>

        {/* Terms and Conditions Custom Checkbox */}
        <View style={styles.checkboxContainer}>
          <TouchableOpacity
            onPress={() => setSelection(!isSelected)}
            style={styles.customCheckbox}
          >
            {isSelected ? (
              <MaterialIcons name="check-box" size={24} color="#4A90E2" />
            ) : (
              <MaterialIcons name="check-box-outline-blank" size={24} color="#A0A0A0" />
            )}
          </TouchableOpacity>
          <Text style={styles.checkboxText}>
            I agree to the Sensible{' '}
            <Text style={styles.link}>Terms of Service</Text> and{' '}
            <Text style={styles.link}>Privacy Policy</Text>
          </Text>
        </View>
      </View>

      {/* Sign Up Button */}
      <TouchableOpacity style={styles.signUpButton} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.signUpButtonText}>Sign Up</Text>
      </TouchableOpacity>

      {/* Sign In Link */}
      <Text style={styles.signinText}>
        Already have an account?{' '}
        <Text style={styles.signinLink} onPress={() => navigation.navigate('Login')}>
          Sign In
        </Text>
      </Text>
    </View>
  );
}

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
    marginBottom: 20,
  },
  backButton: {
    marginRight: 10,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  form: {
    flex: 1,
    justifyContent: 'space-between',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E0E0E0',
    borderRadius: 8,
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginBottom: 15,
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
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  customCheckbox: {
    marginRight: 10,
  },
  checkboxText: {
    fontSize: 14,
    color: '#A0A0A0',
  },
  link: {
    color: '#4A90E2',
    textDecorationLine: 'underline',
  },
  signUpButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    paddingVertical: 12,
    alignItems: 'center',
    marginBottom: 20,
  },
  signUpButtonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: '600',
  },
  signinText: {
    textAlign: 'center',
    fontSize: 14,
    color: '#A0A0A0',
    marginBottom: 20,
  },
  signinLink: {
    color: '#4A90E2',
    fontWeight: '600',
  },
});
