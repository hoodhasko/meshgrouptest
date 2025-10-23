import { FC, memo } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

import { Shift } from '../../../shared/types';

interface ShiftCardProps {
  shift: Shift;
  onPress: () => void;
}

export const ShiftCard: FC<ShiftCardProps> = memo(({ shift, onPress }) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.header}>
        {shift.logo && (
          <Image source={{ uri: shift.logo }} style={styles.logo} />
        )}
        <View style={styles.headerInfo}>
          <Text style={styles.companyName}>{shift.companyName}</Text>
          <Text style={styles.address}>{shift.address}</Text>
        </View>
      </View>

      <View style={styles.footer}>
        {shift.customerRating ? (
          <Text style={styles.rating}>{shift.customerRating}</Text>
        ) : (
          <Text style={styles.noRating}>Нет оценки</Text>
        )}

        <Text style={styles.price}>{shift.priceWorker} руб.</Text>
      </View>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#FFFFFF',
    borderRadius: 16,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 3.84,
    elevation: 5,
    borderWidth: 1,
    borderColor: '#F0F0F0',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  logo: {
    width: 48,
    height: 48,
    borderRadius: 12,
    marginRight: 12,
    backgroundColor: '#F8F9FA',
  },
  headerInfo: {
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#1D1D1D',
    marginBottom: 4,
  },
  address: {
    fontSize: 14,
    color: '#666666',
    lineHeight: 18,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 12,
    borderTopWidth: 1,
    borderTopColor: '#F0F0F0',
  },
  rating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#FF9500',
    marginRight: 4,
  },
  noRating: {
    fontSize: 15,
    fontWeight: '600',
    color: '#cccccc',
    marginRight: 4,
  },
  price: {
    fontSize: 20,
    fontWeight: '700',
    color: '#34C759',
    marginBottom: 2,
  },
});
