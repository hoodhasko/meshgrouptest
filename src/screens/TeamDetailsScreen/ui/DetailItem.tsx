import { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

interface DetailItemProps {
  label: string;
  value: string;
}

export const DetailItem: FC<DetailItemProps> = ({ label, value }) => {
  return (
    <View style={styles.detailItem}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
    gap: 16,
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
    textAlign: 'right',
    flex: 1,
  },
});
