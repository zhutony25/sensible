// app/frontend/TestPage.js
import React, { useEffect, useState, useRef } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Animated,
} from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Audio } from "expo-av";

export default function TestPage({ navigation }) {
  const [progress, setProgress] = useState(0); // Progress bar state
  const scale = useRef(new Animated.Value(1)).current; // For pulsing animation
  const intervalRef = useRef(null); // Reference to track the interval
  const [sound, setSound] = useState(); // have a variable for the sound audio

  // Start the timer and progress bar
  useEffect(() => {
    startProgress();
    const loadAudio = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require('../assets/frequencies/SensibleTest.mp4')
      );
      setSound(sound);
    };

    loadAudio();

    if (sound) {
      sound.unloadAsync();
    }

    return () => clearProgress(); // Clear the timer when the component unmounts
  }, []);

  // Function to start the progress bar
  const startProgress = () => {
    intervalRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 1) {
          clearInterval(intervalRef.current); // Stop the timer when progress reaches 100%
          navigation.navigate("EndTest"); // Navigate to the EndTest page
          return prev;
        }
        return prev + 1 / 6; // Progress moves every 5 seconds (30 seconds total)
      });
    }, 5000);
  };

  // Function to clear the timer and reset progress
  const clearProgress = async () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current); // Clear the interval
      intervalRef.current = null;
    }
    await sound.pauseAsync(); // stop the audio
    setProgress(0); // Reset progress to 0
  };

  // Handle the Stop Test button
  const handleStopTest = () => {
    clearProgress(); // Clear the progress
    navigation.navigate("Home"); // Navigate back to the Home page
  };

  // Pulsing animation logic
  useEffect(() => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scale, {
          toValue: 1.2,
          duration: 1000,
          useNativeDriver: true,
        }),
        Animated.timing(scale, {
          toValue: 1,
          duration: 1000,
          useNativeDriver: true,
        }),
      ])
    ).start();
  }, [scale]);

  return (
    <View style={styles.container}>
      {/* Info Icon */}
      <TouchableOpacity style={styles.infoIcon}>
        <Text style={styles.infoText}>ℹ</Text>
      </TouchableOpacity>

      {/* Progress Bar */}
      <View style={styles.progressContainer}>
        <Text style={styles.progressLabel}>Start</Text>
        <View style={styles.progressBar}>
          <View
            style={[styles.progressFill, { width: `${progress * 100}%` }]}
          />
        </View>
        <Text style={styles.progressLabel}>End</Text>
      </View>

      {/* Pulsing Circle */}
      <Animated.View
        style={[
          styles.pulseContainer,
          {
            transform: [{ scale }],
          },
        ]}
      >
        <LinearGradient
          colors={["#E3E3E3", "#FFFFFF"]}
          style={styles.outerCircle}
        >
          <LinearGradient
            colors={["#FFD89D", "#96C6FF", "#FFB6C1"]}
            style={styles.innerCircle}
            start={{ x: 0.3, y: 0.3 }}
            end={{ x: 0.7, y: 0.7 }}
          />
        </LinearGradient>
      </Animated.View>

      {/* Test in Progress Button */}
      <TouchableOpacity style={styles.testButton}>
        <Text style={styles.testButtonText}>Test in Progress</Text>
      </TouchableOpacity>

      {/* Stop Test Button */}
      <TouchableOpacity style={styles.stopTestButton} onPress={handleStopTest}>
        <Text style={styles.stopTestText}>Stop Test (I feel the vibration)</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFFFFF",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 20,
  },
  infoIcon: {
    position: "absolute",
    top: 50,
    right: 20,
  },
  infoText: {
    fontSize: 18,
    color: "#A0A0A0",
  },
  progressContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "80%",
    marginTop: 30,
  },
  progressBar: {
    flex: 1,
    height: 10,
    backgroundColor: "#E0E0E0",
    borderRadius: 5,
    overflow: "hidden",
    marginHorizontal: 10,
  },
  progressFill: {
    height: "100%",
    backgroundColor: "#4A90E2",
  },
  progressLabel: {
    fontSize: 12,
    color: "#6E6E6E",
  },
  pulseContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
  },
  outerCircle: {
    width: 160, // Reduced size
    height: 160,
    borderRadius: 80,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
  },
  innerCircle: {
    width: 70, // Reduced size
    height: 70,
    borderRadius: 35,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  testButton: {
    backgroundColor: "#B8A9C9",
    borderRadius: 25,
    paddingVertical: 15,
    paddingHorizontal: 50,
    alignItems: "center",
    marginBottom: 20,
  },
  testButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
  stopTestButton: {
    marginBottom: 40,
  },
  stopTestText: {
    fontSize: 16,
    color: "#6E6E6E",
  },
});
