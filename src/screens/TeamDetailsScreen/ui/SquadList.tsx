import { FC, useCallback } from 'react';
import { FlatList, ListRenderItem, StyleSheet, Text, View } from 'react-native';

import { TeamSquadItem } from '../../../app/services';

interface SquadListProps {
  squad: TeamSquadItem[];
}

export const SquadList: FC<SquadListProps> = ({ squad }) => {
  const renderSquadItem: ListRenderItem<TeamSquadItem> = useCallback(
    ({ item }) => (
      <View style={styles.playerCard}>
        <Text style={styles.playerName}>{item.name}</Text>
        <Text style={styles.playerPosition}>{item.position}</Text>
      </View>
    ),
    [],
  );

  return (
    <FlatList
      data={squad}
      keyExtractor={item => item.id.toString()}
      horizontal
      renderItem={renderSquadItem}
      showsHorizontalScrollIndicator={false}
    />
  );
};

const styles = StyleSheet.create({
  playerCard: {
    backgroundColor: '#f2f2f2',
    borderRadius: 8,
    padding: 10,
    marginRight: 10,
    alignItems: 'center',
  },
  playerName: {
    fontWeight: '500',
  },
  playerPosition: {
    color: '#555',
    fontSize: 12,
  },
});
