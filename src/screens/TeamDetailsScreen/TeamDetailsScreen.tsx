import { FC } from 'react';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../app/navigation/types';

interface TeamDetailsScreenProps
  extends NativeStackScreenProps<AppStackParamList, 'TeamDetailsScreen'> {}

export const TeamDetailsScreen: FC<TeamDetailsScreenProps> = ({ route }) => {
  const { teamId } = route.params;

  return <ScrollView style={styles.container}></ScrollView>;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  header: {
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  companyName: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  address: {
    fontSize: 16,
    color: '#666666',
  },
  details: {
    padding: 16,
    gap: 16,
  },
  detailItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#F0F0F0',
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
  value: {
    fontSize: 16,
    fontWeight: '500',
    color: '#007AFF',
  },
});
