import { FC } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { WorkType } from '../../../shared/types';

interface WorkTypesListProps {
  workTypes: WorkType[];
}

export const WorkTypesList: FC<WorkTypesListProps> = ({ workTypes }) => (
  <View style={styles.workTypesList}>
    <Text style={styles.label}>Типы работ</Text>
    {workTypes.length ? (
      workTypes.map(workType => (
        <View key={workType.id} style={styles.workTypeItem}>
          <View style={styles.workTypeBullet} />
          <Text style={styles.workTypeName}>{workType.name}</Text>
        </View>
      ))
    ) : (
      <Text>Не указаны</Text>
    )}
  </View>
);

const styles = StyleSheet.create({
  workTypesList: {
    flex: 1,
  },
  label: {
    fontSize: 16,
    color: '#333333',
  },
  workTypeItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 6,
  },
  workTypeBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#007AFF',
    marginRight: 8,
  },
  workTypeName: {
    fontSize: 16,
    color: '#1D1D1D',
    fontWeight: '500',
  },
});
