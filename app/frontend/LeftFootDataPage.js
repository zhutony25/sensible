// app/frontend/LeftFootDataPage.js
import React from 'react';
import { View, Text, ScrollView, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart } from 'react-native-chart-kit';
import { Ionicons } from '@expo/vector-icons';

export default function LeftFootDataPage({ navigation }) {
  const dummyData = {
    labels: ['Test 1', 'Test 2', 'Test 3', 'Test 4', 'Test 5'], // X-axis labels
    datasets: [
      {
        data: [60, 65, 80, 130, 120], // Y-axis values
        strokeWidth: 2, // Line thickness
        color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`, // Line color
      },
    ],
    legend: ['Hertz'], // Chart legend
  };

  return (
    <View style={styles.container}>
      {/* Back Button */}
      <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back" size={24} color="#4A90E2" />
      </TouchableOpacity>

      <ScrollView contentContainerStyle={styles.scrollContent}>
        <Text style={styles.headerText}>Left Foot Data</Text>
        {[
          'Index Finger',
          'Knee Cap',
          'Outer Ankle',
          'Inner Ankle',
          'Heel',
          'Outer Ball of Foot',
          'Inner Ball of Foot',
        ].map((term, index) => (
          <View key={index} style={styles.graphContainer}>
            <Text style={styles.graphHeader}>{term}</Text>
            <LineChart
              data={dummyData}
              width={300}
              height={220}
              chartConfig={{
                backgroundColor: '#ffffff',
                backgroundGradientFrom: '#f7f7f7',
                backgroundGradientTo: '#ffffff',
                decimalPlaces: 0, // No decimals in the Y-axis values
                color: (opacity = 1) => `rgba(74, 144, 226, ${opacity})`, // Line color
                labelColor: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`, // Axis labels color
                style: {
                  borderRadius: 10,
                },
                propsForDots: {
                  r: '5',
                  strokeWidth: '2',
                  stroke: '#4A90E2',
                },
              }}
              bezier
              yAxisSuffix=" Hz"
              xAxisLabel=""
              yAxisInterval={20} // Interval for Y-axis
              style={styles.chart}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  backButton: {
    margin: 10,
  },
  scrollContent: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  headerText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  graphContainer: {
    marginBottom: 30,
    alignItems: 'center',
  },
  graphHeader: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 10,
  },
  chart: {
    borderRadius: 10,
    backgroundColor: '#E3F2FD',
    padding: 10,
  },
});
