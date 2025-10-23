import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface LocationErrorContentProps {
  error: string;
  requestLocation: () => void;
}

export const LocationErrorContent: FC<LocationErrorContentProps> = ({
  error,
  requestLocation,
}) => {
  return (
    <View style={styles.layout}>
      <View style={styles.container}>
        <Text style={styles.errorText}>{error}</Text>
        <TouchableOpacity onPress={requestLocation} style={styles.button}>
          <Text style={styles.buttonText}>Повторить</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  layout: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  container: {
    backgroundColor: '#ffffff',
    padding: 8,
    borderRadius: 8,
  },
  errorText: {
    textAlign: 'center',
    fontWeight: '500',
    fontSize: 16,
  },
  button: {
    padding: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: '#007AFF',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop: 16,
    width: 200,
  },
  buttonText: {
    color: '#ffffff',
  },
});
