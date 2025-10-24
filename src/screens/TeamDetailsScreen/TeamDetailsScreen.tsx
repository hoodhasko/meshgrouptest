import { FC, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../app/navigation/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTeamData } from '../../app/actions';
import { resetTeamData } from '../../app/slices';
import { TeamScheduledMatchesList } from '../../app/widgets/teamMatches';
import { DetailItem, TeamDetailsHeader } from './ui';

interface TeamDetailsScreenProps
  extends NativeStackScreenProps<AppStackParamList, 'TeamDetailsScreen'> {}

export const TeamDetailsScreen: FC<TeamDetailsScreenProps> = ({ route }) => {
  const { teamId } = route.params;

  const dispatch = useAppDispatch();

  const { team, loading, error } = useAppSelector(state => state.team);

  useEffect(() => {
    dispatch(resetTeamData());
    dispatch(fetchTeamData({ teamId }));
  }, [teamId]);

  if (loading && !team) {
    return (
      <View style={styles.center}>
        <ActivityIndicator size="large" color="#007AFF" />
      </View>
    );
  }

  if (error && !team) {
    return (
      <View style={styles.center}>
        <Text style={styles.error}>{error}</Text>
      </View>
    );
  }

  // return (
  //   <View style={{ flex: 1, width: 200 }}>
  //     <DetailItem label="Страна" value={team?.address || ''} />
  //   </View>
  // );

  return (
    <FlatList
      data={[]}
      renderItem={() => null}
      style={styles.container}
      ListHeaderComponent={() =>
        team ? <TeamDetailsHeader team={team} /> : null
      }
      ListFooterComponent={() =>
        team ? <TeamScheduledMatchesList teamId={team.id} /> : null
      }
    />
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
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
