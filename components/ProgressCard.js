
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function ProgressCard({ progress }) {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>🎯 Mục tiêu hôm nay</Text>
      <Text style={styles.subtitle}>
        Hoàn thành 10 bài học React Native
      </Text>

      <View style={styles.progressBackground}>
        <View
          style={[
            styles.progressFill,
            { width: `${progress}%` },
          ]}
        />
      </View>

      <Text style={styles.percent}>
        {progress}% hoàn thành
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#FFFFFF',
    padding: 22,
    borderRadius: 20,
    marginVertical: 20,
    elevation: 5,
  },
  title: {
    fontSize: 21,
    fontWeight: 'bold',
    color: '#272343',
  },
  subtitle: {
    color: '#777',
    marginTop: 10,
    marginBottom: 20,
  },
  progressBackground: {
    height: 12,
    backgroundColor: '#E5E5EF',
    borderRadius: 10,
    overflow: 'hidden',
  },
  progressFill: {
    height: 12,
    backgroundColor: '#6C63FF',
    borderRadius: 10,
  },
  percent: {
    textAlign: 'right',
    marginTop: 10,
    color: '#6C63FF',
    fontWeight: 'bold',
  },
});
