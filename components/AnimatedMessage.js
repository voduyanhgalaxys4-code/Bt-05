
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  Text,
  StyleSheet,
} from 'react-native';

export default function AnimatedMessage({ visible }) {
  const scale = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.spring(scale, {
      toValue: visible ? 1 : 0,
      friction: 5,
      useNativeDriver: true,
    }).start();
  }, [visible]);

  return (
    <Animated.View
      style={[
        styles.message,
        {
          transform: [{ scale }],
        },
      ]}
    >
      <Text style={styles.messageText}>
        🎉 Tuyệt vời! Bạn đã hoàn thành mục tiêu!
      </Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  message: {
    backgroundColor: '#DCFCE7',
    padding: 18,
    borderRadius: 16,
    marginTop: 25,
    alignItems: 'center',
  },
  messageText: {
    color: '#15803D',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
