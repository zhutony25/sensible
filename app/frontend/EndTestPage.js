// app/frontend/EndTestPage.js
import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

export default function EndTestPage({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.endText}>Test Completed</Text>
      {/* Return to Home Button */}
      <TouchableOpacity
        style={styles.returnButton}
        onPress={() => navigation.navigate("Home")}
      >
        <Text style={styles.returnButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
  },
  endText: {
    fontSize: 24,
    fontWeight: "bold",
    color: "#4A90E2",
    marginBottom: 20,
  },
  returnButton: {
    backgroundColor: "#4A90E2",
    borderRadius: 25,
    paddingVertical: 12,
    paddingHorizontal: 40,
    alignItems: "center",
  },
  returnButtonText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "600",
  },
});

