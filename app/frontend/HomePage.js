import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';

export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Info Icon in the Top Right */}
      <TouchableOpacity style={styles.infoIcon}>
        <Ionicons name="information-circle-outline" size={28} color="#A0A0A0" />
      </TouchableOpacity>

      {/* Welcome Text */}
      <View style={styles.textContainer}>
        <Text style={styles.welcomeText}>Welcome Cara!</Text> {/* need to pull first name from */}
        <Text style={styles.subText}>Click below to begin test</Text>
      </View>

      {/* Pulse Effect Circle */}
      <View style={styles.pulseContainer}>
        {/* Outer Circle */}
        <LinearGradient
          colors={['#E3E3E3', '#FFFFFF']}
          style={styles.outerCircle}
        >
          {/* Inner Circle */}
          <LinearGradient
            colors={['#FFD89D', '#96C6FF', '#FFB6C1']}
            style={styles.innerCircle}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 0.7, y: 0.7 }}
          />
        </LinearGradient>
      </View>

      {/* Begin Test Button */}
      <TouchableOpacity
        style={styles.testButton}
        onPress={() => alert('Test Started!')}
      >
        <Text style={styles.testButtonText}>Begin New Test</Text>
      </TouchableOpacity>

      {/* Bottom Navigation Bar */}
      <View style={styles.navbar}>
        <TouchableOpacity onPress={() => navigation.navigate('Data')}>
          <MaterialIcons name="assignment" size={30} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity onPress={() => alert('Home')}>
          <Ionicons name="home-outline" size={30} color="#fff" />
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
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
  infoIcon: {
    position: 'absolute',
    top: 50,
    right: 20,
  },
  textContainer: {
    alignItems: 'center',
    marginTop: 60,
  },
  welcomeText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#000',
  },
  subText: {
    fontSize: 16,
    color: '#6E6E6E',
    marginTop: 5,
  },
  pulseContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 40,
  },
  outerCircle: {
    width: 220,
    height: 220,
    borderRadius: 110,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  innerCircle: {
    width: 100, // Reduced size from 120 to 100
    height: 100,
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  testButton: {
    backgroundColor: '#4A90E2',
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: 'center',
    marginBottom: 20,
  },
  testButtonText: {
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
  },
});
