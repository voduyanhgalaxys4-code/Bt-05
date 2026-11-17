
import React, { useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  StatusBar,
} from 'react-native';

import ProgressCard from './components/ProgressCard';
import ActionButton from './components/ActionButton';
import AnimatedMessage from './components/AnimatedMessage';

export default function App() {
  const [progress, setProgress] = useState(0);
  const [started, setStarted] = useState(false);
  const [completed, setCompleted] = useState(false);

  const handleStart = () => {
    if (completed) {
      setProgress(0);
      setCompleted(false);
      setStarted(false);
      return;
    }

    setStarted(true);

    const nextProgress = Math.min(progress + 25, 100);
    setProgress(nextProgress);

    if (nextProgress === 100) {
      setCompleted(true);
      setStarted(false);
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="dark-content" />

      <View style={styles.header}>
        <Text style={styles.greeting}>Xin chào, Duy Anh! 👋</Text>
        <Text style={styles.heading}>Học tập mỗi ngày</Text>
        <Text style={styles.description}>
          Chinh phục mục tiêu của bạn hôm nay.
        </Text>
      </View>

      <ProgressCard progress={progress} />

      <View style={styles.infoCard}>
        <Text style={styles.infoTitle}>📚 Thử thách hôm nay</Text>
        <Text style={styles.infoText}>
          Hoàn thành 4 bước học React Native
        </Text>
        <Text style={styles.stepText}>
          {progress / 25}/4 bước đã hoàn thành
        </Text>
      </View>

      <ActionButton
        onPress={handleStart}
        started={started}
      />

      <AnimatedMessage visible={completed} />

      {completed && (
        <Text style={styles.success}>
          Bạn đã chinh phục mục tiêu hôm nay!
        </Text>
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F4F3FF',
    padding: 24,
    justifyContent: 'center',
  },
  header: {
    marginBottom: 10,
  },
  greeting: {
    fontSize: 16,
    color: '#777',
  },
  heading: {
    fontSize: 29,
    fontWeight: 'bold',
    color: '#272343',
    marginTop: 8,
  },
  description: {
    fontSize: 15,
    color: '#777',
    marginTop: 8,
  },
  infoCard: {
    backgroundColor: '#FFFFFF',
    padding: 20,
    borderRadius: 18,
    marginBottom: 20,
  },
  infoTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#272343',
  },
  infoText: {
    color: '#777',
    marginTop: 10,
  },
  stepText: {
    color: '#6C63FF',
    fontWeight: 'bold',
    marginTop: 12,
  },
  success: {
    color: '#15803D',
    textAlign: 'center',
    fontWeight: 'bold',
    marginTop: 15,
  },
});
