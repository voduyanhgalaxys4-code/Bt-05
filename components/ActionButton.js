
import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  Animated,
} from 'react-native';

export default function ActionButton({ onPress, started }) {
  return (
    <TouchableOpacity
      style={[
        styles.button,
        started && styles.buttonActive,
      ]}
      onPress={onPress}
      activeOpacity={0.8}
    >
      <Text style={styles.buttonText}>
        {started ? '✓ Đang học...' : '▶ Bắt đầu học'}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#6C63FF',
    paddingVertical: 17,
    borderRadius: 16,
    alignItems: 'center',
    marginTop: 10,
    elevation: 5,
  },
  buttonActive: {
    backgroundColor: '#22C55E',
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
});
