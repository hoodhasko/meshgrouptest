import { FC } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

import { TeamDataResponse } from '../../../app/services';
import { DetailItem } from './DetailItem';
import { SquadList } from './SquadList';

interface TeamDetailsHeaderProps {
  team: TeamDataResponse;
}

export const TeamDetailsHeader: FC<TeamDetailsHeaderProps> = ({ team }) => {
  return (
    <View style={styles.header}>
      <View style={styles.logoContainer}>
        {team.crest ? (
          <Image source={{ uri: team.crest }} style={styles.logo} />
        ) : null}
        <Text style={styles.teamName}>{team.name}</Text>
      </View>

      <DetailItem label="Страна" value={team.area.name} />
      <DetailItem label="Адрес" value={team.address} />
      <DetailItem label="Сайт" value={team.website} />
      <DetailItem label="Год основания" value={String(team.founded)} />

      <Text style={styles.sectionTitle}>Игроки</Text>
      <SquadList squad={team.squad} />
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    marginBottom: 16,
  },
  logoContainer: {
    alignItems: 'center',
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: 'contain',
    marginBottom: 8,
  },
  teamName: {
    fontSize: 22,
    fontWeight: '700',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    marginVertical: 10,
  },
});
