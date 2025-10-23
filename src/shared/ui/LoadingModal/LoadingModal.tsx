import React from 'react';
import { Modal, View, ActivityIndicator, Text, StyleSheet } from 'react-native';

interface LoadingModalProps {
  visible: boolean;
  text?: string;
}

export const LoadingModal: React.FC<LoadingModalProps> = ({
  visible,
  text = 'Загрузка...',
}) => {
  return (
    <Modal
      visible={visible}
      transparent
      animationType="fade"
      statusBarTranslucent
    >
      <View style={styles.overlay}>
        <View style={styles.content}>
          <ActivityIndicator size="large" color="#007AFF" />
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  content: {
    backgroundColor: '#fff',
    paddingVertical: 24,
    paddingHorizontal: 32,
    borderRadius: 16,
    alignItems: 'center',
  },
  text: {
    marginTop: 12,
    fontSize: 16,
    color: '#333',
  },
});
