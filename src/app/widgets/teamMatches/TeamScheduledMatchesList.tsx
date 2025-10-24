import { FC, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { TeamMatchesItemResponse } from '../../../app/services';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { resetTeamMatches } from '../../slices';
import { fetchTeamMatches } from '../../actions';
import { MATCHES_STATUSES } from '../../../config';

interface TeamScheduledMatchesListProps {
  teamId: number;
}

export const TeamScheduledMatchesList: FC<TeamScheduledMatchesListProps> = ({
  teamId,
}) => {
  const dispatch = useAppDispatch();

  const { matches, loading, error } = useAppSelector(
    state => state.teamMatches,
  );

  useEffect(() => {
    dispatch(resetTeamMatches());
    dispatch(fetchTeamMatches({ teamId, status: MATCHES_STATUSES.SCHEDULED }));
  }, [teamId]);

  const renderMatch: ListRenderItem<TeamMatchesItemResponse> = useCallback(
    ({ item }) => (
      <View style={styles.matchItem}>
        <Text style={styles.matchTitle}>
          {item.homeTeam.name} vs {item.awayTeam.name}
        </Text>
        <Text style={styles.date}>
          {new Date(item.utcDate).toLocaleString()}
        </Text>
        <Text style={styles.competition}>{item.competition.name}</Text>
      </View>
    ),
    [],
  );

  if (loading && !matches.length) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error && !matches.length) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  return (
    <>
      <Text style={styles.sectionTitle}>Предстоящие матчи</Text>

      <FlatList
        data={matches}
        keyExtractor={item => item.id.toString()}
        renderItem={renderMatch}
        onEndReachedThreshold={0.6}
      />
    </>
  );
};

const styles = StyleSheet.create({
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginBottom: 10,
  },
  matchItem: {
    paddingVertical: 8,
    borderBottomWidth: 1,
    borderColor: '#eee',
  },
  matchTitle: {
    fontSize: 16,
    fontWeight: '500',
  },
  date: {
    fontSize: 13,
    color: '#666',
  },
  competition: {
    fontSize: 13,
    color: '#007AFF',
  },
  center: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  error: {
    color: 'red',
    marginTop: 10,
  },
});
