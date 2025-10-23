import { FC, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  RefreshControl,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../app/navigation/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTeamsList } from '../../app/actions';
import { TeamListItemResponse } from '../../app/services';
import { TeamCard } from './ui';
import { resetTeams } from '../../app/slices';
import { SCREEN_NAMES } from '../../config';

interface TeamsListScreenProps
  extends NativeStackScreenProps<AppStackParamList, 'TeamsListScreen'> {}

export const TeamsListScreen: FC<TeamsListScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { teams, loading, error, page } = useAppSelector(state => state.teams);

  useEffect(() => {
    dispatch(fetchTeamsList({ page: 1 }));
  }, []);

  const onRefresh = () => {
    dispatch(resetTeams());
    dispatch(fetchTeamsList({ page: 1 }));
  };

  const handleShiftPress = (teamName: string, teamId: number) => {
    navigation.navigate(SCREEN_NAMES.TeamDetailsScreen, { teamName, teamId });
  };

  const renderItem: ListRenderItem<TeamListItemResponse> = useCallback(
    ({ item }) => (
      <TeamCard
        team={item}
        onPress={() => handleShiftPress(item.name, item.id)}
      />
    ),
    [],
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <ActivityIndicator size="small" color="#007AFF" style={{ margin: 10 }} />
    );
  };

  const loadMore = () => {
    if (!loading && teams.length) {
      dispatch(fetchTeamsList({ page: page + 1 }));
    }
  };

  return (
    <View style={styles.container}>
      {error && <Text style={styles.error}>{error}</Text>}

      <FlatList
        data={teams}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={!loading && !error ? <Text>Нет данных</Text> : null}
        ListFooterComponent={renderFooter}
        refreshControl={
          <RefreshControl
            refreshing={loading && page === 1}
            onRefresh={onRefresh}
          />
        }
        onEndReached={loadMore}
        onEndReachedThreshold={0.7}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  list: {
    padding: 16,
    gap: 12,
  },
  error: {
    color: 'red',
    marginVertical: 10,
  },
});
