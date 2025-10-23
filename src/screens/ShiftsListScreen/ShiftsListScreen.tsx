import { FC, useCallback, useEffect } from 'react';
import {
  ActivityIndicator,
  FlatList,
  ListRenderItem,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { NativeStackScreenProps } from '@react-navigation/native-stack';

import { AppStackParamList } from '../../app/navigation/types';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { fetchTeamsList } from '../../app/actions';
import { TeamListItemResponse } from '../../app/services';

interface ShiftsListScreenProps
  extends NativeStackScreenProps<AppStackParamList, 'ShiftsListScreen'> {}

export const ShiftsListScreen: FC<ShiftsListScreenProps> = ({ navigation }) => {
  const dispatch = useAppDispatch();
  const { teams, loading, error, page } = useAppSelector(state => state.teams);

  useEffect(() => {
    dispatch(fetchTeamsList({ page: 1 }));
  }, []);

  const renderItem: ListRenderItem<TeamListItemResponse> = useCallback(
    ({ item }) => <Text>{item.name}</Text>,
    [],
  );

  const renderFooter = () => {
    if (!loading) return null;
    return (
      <ActivityIndicator size="small" color="#007AFF" style={{ margin: 10 }} />
    );
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={teams}
        keyExtractor={item => item.id.toString()}
        renderItem={renderItem}
        contentContainerStyle={styles.list}
        ListEmptyComponent={<Text>Нет данных</Text>}
        ListFooterComponent={renderFooter}
        // refreshControl={
        //   <RefreshControl
        //     refreshing={shiftStore.isLoading}
        //     onRefresh={onRefresh}
        //   />
        // }
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
});
